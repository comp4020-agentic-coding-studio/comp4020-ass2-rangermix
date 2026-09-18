"""Verify the proposal records, draft reconstruction and unchanged live sources."""
from pathlib import Path
import argparse
import hashlib
import json
import re

OUT = Path(__file__).resolve().parents[1]
ROOT = OUT.parents[2]


def digest(text):
    return hashlib.sha256(text.encode()).hexdigest()


def frontmatter_fields(text):
    if not text.startswith('---\n'):
        return {}
    header = text.split('---\n', 2)[1]
    starts = list(re.finditer(r'^([a-zA-Z][\w-]*):', header, re.M))
    return {m[1]: header[m.start():starts[i+1].start() if i+1 < len(starts) else len(header)]
            for i, m in enumerate(starts)}


def check(complete=False, collect=False):
    manifest = json.loads((OUT / 'manifest.json').read_text())
    counts = {'pending': 0, 'edited': 0, 'retained': 0, 'edits': 0}
    for i, item in enumerate(manifest['files']):
        path = item['path']
        original = (ROOT / path).read_text()
        assert digest(original) == item['sha256_before'], f'LIVE SOURCE CHANGED: {path}'
        record_path = OUT / 'reviews' / (path + '.json')
        if not record_path.exists():
            counts['pending'] += 1
            continue
        record = json.loads(record_path.read_text())
        assert record['path'] == path and record['review_note'].strip(), path
        rebuilt = original
        for edit in record['edits']:
            before, after = edit['before'], edit['after']
            assert before != after and edit['reason'].strip(), path
            assert original.count(before) == 1 and rebuilt.count(before) == 1, f'Ambiguous or overlapping edit: {path}'
            assert original[:original.index(before)].count('\n') + 1 == edit['line'], path
            rebuilt = rebuilt.replace(before, after, 1)
        draft = (OUT / 'draft' / path).read_text()
        assert rebuilt == draft, f'Unrecorded draft edit: {path}'
        assert digest(draft) == record['sha256_after'], f'Draft hash: {path}'
        assert record['status'] == ('edited' if record['edits'] else 'retained'), path
        if path.endswith(('.md', '.mdx')):
            before_fields, after_fields = frontmatter_fields(original), frontmatter_fields(draft)
            for key in set(before_fields) | set(after_fields):
                if key not in {'description', 'spec'}:
                    assert before_fields.get(key) == after_fields.get(key), f'Protected metadata {key}: {path}'
        for pattern in [r'<span\s+data-quoted[^>]*>[\s\S]*?</span>', r'<cite\b[^>]*>[\s\S]*?</cite>']:
            assert re.findall(pattern, original) == re.findall(pattern, draft), f'Marked quotation changed: {path}'
        if path.startswith('src/content/lectures/'):
            assert re.findall(r'^## .+$', original, re.M) == re.findall(r'^## .+$', draft, re.M), f'Numbered sections changed: {path}'
        if path == 'src/content/lectures/week-10.mdx':
            pattern = r'<div class="register-break">[\s\S]*?</div>'
            assert re.search(pattern, original)[0] == re.search(pattern, draft)[0], 'Week 10 register break changed'
        if path == 'src/pages/policies/index.mdx':
            assert 'No diagnosis is required, and none is accepted as evidence.' in draft
        if path.startswith('src/decks/'):
            assert len(re.findall(r'^---$', original, re.M)) == len(re.findall(r'^---$', draft, re.M)), f'Slide count changed: {path}'
        counts[record['status']] += 1
        counts['edits'] += len(record['edits'])
        manifest['files'][i] = record
    if complete:
        assert counts['pending'] == 0, f'Unreviewed files: {counts["pending"]}'
    manifest['status'] = 'Complete draft; not applied' if not counts['pending'] else 'In progress'
    if collect:
        temporary = OUT / 'manifest.tmp'
        temporary.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + '\n')
        temporary.replace(OUT / 'manifest.json')
    print(json.dumps({'files': len(manifest['files']), **counts, 'live_source_hashes': 'unchanged'}, indent=2))
    return manifest


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--complete', action='store_true')
    parser.add_argument('--collect', action='store_true')
    args = parser.parse_args()
    check(args.complete, args.collect)
