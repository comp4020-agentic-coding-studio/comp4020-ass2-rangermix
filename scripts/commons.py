#!/usr/bin/env python3
"""Look up and fetch Wikimedia Commons files, recording what the licence says.

The course cites nothing from memory, and an image is a citation too: the file
page is the source, the licence field is the permission, and both get written
down next to the picture. This asks Commons rather than trusting a search
result, and prints the fields the provenance file needs.

  python3 scripts/commons.py info "File:Example.jpg" [...]
  python3 scripts/commons.py get  <slug> "File:Example.jpg"
"""

import json
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path

API = "https://commons.wikimedia.org/w/api.php"
UA = "SLOP1562-course-site/1.0 (teaching site build; contact via repo)"
OUT = Path(__file__).resolve().parent.parent / "src" / "assets" / "images" / "sourced"


def _get(params):
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def _strip(html):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", html or "")).strip()


def info(titles):
    data = _get(
        {
            "action": "query",
            "format": "json",
            "prop": "imageinfo",
            "iiprop": "url|extmetadata|size|mime",
            "titles": "|".join(titles),
        }
    )
    out = []
    for page in data.get("query", {}).get("pages", {}).values():
        if "missing" in page:
            out.append({"title": page.get("title"), "missing": True})
            continue
        ii = page["imageinfo"][0]
        em = ii.get("extmetadata", {})
        g = lambda k: _strip(em.get(k, {}).get("value", ""))
        out.append(
            {
                "title": page["title"],
                "licence": g("LicenseShortName"),
                "usage": g("UsageTerms"),
                "credit": g("Credit")[:200],
                "artist": g("Artist")[:200],
                "date": g("DateTimeOriginal")[:60],
                "description": g("ImageDescription")[:300],
                "url": ii["url"].split("?")[0],
                "page": f"https://commons.wikimedia.org/wiki/{urllib.parse.quote(page['title'].replace(' ', '_'))}",
                "width": ii.get("width"),
                "height": ii.get("height"),
                "mime": ii.get("mime"),
            }
        )
    return out


def fetch(slug, title, width=1600):
    [meta] = info([title])
    if meta.get("missing"):
        sys.exit(f"missing on Commons: {title}")
    # Ask Commons for a scaled render rather than the full plate: a 3000px
    # book scan is not a web image, and sharp will only shrink it again.
    thumb = _get(
        {
            "action": "query",
            "format": "json",
            "prop": "imageinfo",
            "iiprop": "url",
            "iiurlwidth": str(width),
            "titles": title,
        }
    )
    page = next(iter(thumb["query"]["pages"].values()))
    src = page["imageinfo"][0].get("thumburl") or meta["url"]
    # The thumb URL carries a query string, so take the extension from the
    # path only --- otherwise the saved name ends in "&utm_content=...".
    ext = ".jpg" if meta["mime"] == "image/jpeg" else (Path(urllib.parse.urlparse(src).path).suffix or ".png")
    OUT.mkdir(parents=True, exist_ok=True)
    dest = OUT / f"{slug}{ext}"
    req = urllib.request.Request(src, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        dest.write_bytes(r.read())
    meta["saved"] = str(dest.relative_to(OUT.parent.parent.parent.parent))
    meta["fetched_from"] = src
    print(json.dumps(meta, indent=1, ensure_ascii=False))


if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    cmd = sys.argv[1]
    if cmd == "info":
        print(json.dumps(info(sys.argv[2:]), indent=1, ensure_ascii=False))
    elif cmd == "get":
        fetch(sys.argv[2], sys.argv[3], int(sys.argv[4]) if len(sys.argv) > 4 else 1600)
    else:
        sys.exit(__doc__)
