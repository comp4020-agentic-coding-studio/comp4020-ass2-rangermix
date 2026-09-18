"""Record exact editorial proposals without touching course source files."""
from pathlib import Path
import hashlib
import json

OUT = Path(__file__).resolve().parents[1]
ROOT = OUT.parents[2]


def review(path, note, edits=()):
    manifest = json.loads((OUT / 'manifest.json').read_text())
    item = next(x for x in manifest['files'] if x['path'] == path).copy()
    record = OUT / 'reviews' / (path + '.json')
    assert not record.exists(), f'Already reviewed: {path}'
    original = (ROOT / path).read_text()
    candidate = (OUT / 'draft' / path).read_text()
    assert hashlib.sha256(original.encode()).hexdigest() == item['sha256_before'], f'Source changed: {path}'
    assert original == candidate, f'Unexpected draft edits: {path}'
    records = []
    for before, after, reason in edits:
        assert before != after, 'No-op edit'
        assert candidate.count(before) == 1, f'{path}: expected one match, found {candidate.count(before)} for {before[:100]!r}'
        assert original.count(before) == 1, f'{path}: edit must refer to a unique original passage'
        line = original[:original.index(before)].count('\n') + 1
        records.append({'line': line, 'before': before, 'after': after, 'reason': reason})
        candidate = candidate.replace(before, after, 1)
    (OUT / 'draft' / path).write_text(candidate)
    item.update(status='edited' if edits else 'retained', review_note=note,
                edits=sorted(records, key=lambda e: e['line']),
                sha256_after=hashlib.sha256(candidate.encode()).hexdigest())
    record.parent.mkdir(parents=True, exist_ok=True)
    record.write_text(json.dumps(item, indent=2, ensure_ascii=False) + '\n')
    print(path, item['status'], len(edits))
