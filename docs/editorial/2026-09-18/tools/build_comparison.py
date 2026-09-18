#!/usr/bin/env python3
"""Build the offline editorial viewer from verified source, drafts and records.

Run from any directory. Pending reviews are rejected unless --allow-pending is
explicitly supplied for development. No files except comparison.html are written.
"""

from __future__ import annotations

import argparse
from collections import Counter
import difflib
import hashlib
import json
from pathlib import Path
import re
import subprocess
import sys


PACKAGE = Path(__file__).resolve().parents[1]
ROOT = PACKAGE.parents[2]
EXPECTED_FILES = 157


def digest(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def word_spans(before: str, after: str) -> tuple[list, list]:
    """Preserve every character; only the changed word/punctuation spans differ."""
    tokens = lambda text: re.findall(r"\w+(?:['’]\w+)*|[^\w\s]|\s+", text)
    left, right = tokens(before), tokens(after)
    a, b = [], []

    def append(target, text, changed):
        if not text:
            return
        if target and target[-1][1] == changed:
            target[-1][0] += text
        else:
            target.append([text, changed])

    for tag, i, j, k, n in difflib.SequenceMatcher(None, left, right, autojunk=False).get_opcodes():
        append(a, "".join(left[i:j]), tag != "equal")
        append(b, "".join(right[k:n]), tag != "equal")
    assert "".join(span[0] for span in a) == before
    assert "".join(span[0] for span in b) == after
    return a, b


def build(allow_pending: bool, archive: bool = False) -> Path:
    manifest = json.loads((PACKAGE / "manifest.json").read_text())
    baseline = manifest["baseline"]
    if not re.fullmatch(r"[0-9a-f]{40}", baseline):
        raise ValueError("The manifest baseline must be a full Git commit hash")
    entries = manifest["files"]
    if len(entries) != EXPECTED_FILES or len({item["path"] for item in entries}) != EXPECTED_FILES:
        raise ValueError(f"Expected {EXPECTED_FILES} unique manifest files")

    files = []
    for entry in entries:
        path = entry["path"]
        if not path.startswith("src/") or ".." in Path(path).parts:
            raise ValueError(f"Unexpected source path: {path}")
        original = subprocess.run(
            ["git", "show", f"{baseline}:{path}"], cwd=ROOT, check=True,
            stdout=subprocess.PIPE, stderr=subprocess.PIPE,
        ).stdout.decode("utf-8")
        if digest(original) != entry["sha256_before"]:
            raise ValueError(f"Baseline hash does not match manifest: {path}")
        if not archive and (ROOT / path).read_text() != original:
            raise ValueError(f"Live source changed from baseline: {path}")

        draft = (PACKAGE / "draft" / path).read_text()
        record_path = PACKAGE / "reviews" / (path + ".json")
        record = json.loads(record_path.read_text()) if record_path.exists() else entry
        status = record.get("status", "pending")
        if status not in {"edited", "retained", "pending"}:
            raise ValueError(f"Unexpected review status for {path}: {status}")
        if record.get("path") != path or record.get("sha256_before") != digest(original):
            raise ValueError(f"Review record does not match baseline: {path}")

        edits = record.get("edits", [])
        if status != "pending":
            if record.get("sha256_after") != digest(draft):
                raise ValueError(f"Draft hash does not match review: {path}")
            replay = original
            for edit in edits:
                before = edit["before"]
                if not before or original.count(before) != 1 or replay.count(before) != 1:
                    raise ValueError(f"Edit does not identify one original passage: {path}")
                line = original[:original.index(before)].count("\n") + 1
                if line != edit["line"]:
                    raise ValueError(f"Original line number is stale: {path}:{edit['line']}")
                replay = replay.replace(before, edit["after"], 1)
            if replay != draft:
                raise ValueError(f"Recorded edits do not reconstruct draft: {path}")
            if (status == "retained") != (not edits and original == draft):
                raise ValueError(f"Edited/retained status does not match content: {path}")

        passages = []
        for edit in edits:
            old_spans, new_spans = word_spans(edit["before"], edit["after"])
            passages.append({**edit, "beforeSpans": old_spans, "afterSpans": new_spans})
        files.append({
            "path": path, "category": entry["category"], "status": status,
            "review_note": record.get("review_note", "This file has not yet been reviewed."),
            "original": original, "draft": draft, "edits": passages,
        })

    counts = Counter(item["status"] for item in files)
    if counts["pending"] and not allow_pending:
        raise ValueError(f"{counts['pending']} reviews are pending; finish them before building the final viewer")
    payload = {
        "baseline": baseline, "date": manifest["date"], "files": files,
        "policy": (PACKAGE / "POLICY.md").read_text(),
        "counts": dict(counts), "edit_count": sum(len(item["edits"]) for item in files),
        "archive": archive,
        "application": json.loads((PACKAGE / "application.json").read_text()) if (PACKAGE / "application.json").exists() else None,
    }
    # JSON is data, never markup. In particular, a source </script> cannot end
    # the inert data block. The browser also renders every source via textContent.
    encoded = json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
    for char, escape in (("&", "\\u0026"), ("<", "\\u003c"), (">", "\\u003e"),
                         ("\u2028", "\\u2028"), ("\u2029", "\\u2029")):
        encoded = encoded.replace(char, escape)
    template = (PACKAGE / "tools" / "comparison.template.html").read_text()
    if template.count("__REVIEW_DATA__") != 1:
        raise ValueError("Template must contain exactly one data placeholder")
    output = PACKAGE / "comparison.html"
    output.write_text(template.replace("__REVIEW_DATA__", encoded))
    print(f"Built {output.relative_to(ROOT)}: {len(files)} files, {counts['edited']} edited, "
          f"{counts['retained']} retained, {counts['pending']} pending, "
          f"{payload['edit_count']} recorded proposals; "
          f"{'archived Git baseline verified' if archive else 'live source matches baseline'} {baseline[:7]}.")
    return output


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--allow-pending", action="store_true", help="Development only: include unfinished reviews")
    parser.add_argument("--archive", action="store_true", help="Rebuild the historical comparison after applying the draft")
    args = parser.parse_args()
    try:
        build(args.allow_pending, args.archive)
    except (OSError, ValueError, KeyError, subprocess.CalledProcessError) as exc:
        print(f"Comparison build failed: {exc}", file=sys.stderr)
        sys.exit(1)
