# Image provenance

Every photograph on this site, where it came from, and exactly what its source
record said about reuse. An image is a claim like any other: the archive is its
citation and the licence field is its permission, so both get written down.

Nothing is hotlinked. Each file is fetched with `scripts/commons.py`, committed
under `src/assets/images/sourced/`, and rendered by `src/components/Plate.astro`,
which prints the source line under the picture where a reader can see it.

To re-check any row: `python3 scripts/commons.py info "<file title>"`.

## Why photographs at all

The drawings are the course's own hand --- a specification sketched in the
margin. A plate is the opposite and that is the point: somebody else's
document, of a protocol that really was written down, maintained and handed to
its operators. The contrast is the argument. The switchboard operators got a
manual; the students did not.

`docs/course-design.md` records the rule. Plates sit alongside the drawings and
never replace them.

## Licence status

| Slug | Used in | Source record | Licence field says | Verified |
| --- | --- | --- | --- | --- |
| `exchange-montreal-1897` | week 4 | [Telephone exchange Montreal QE3 33](https://commons.wikimedia.org/wiki/File:Telephone_exchange_Montreal_QE3_33.jpg) | Public domain (PD-old-70-expired, PD Canada) | 2026-09-16, Commons API |
| `mission-control-apollo13` | week 7 | [Mission Control during the Apollo 13 emergency return (s70-35368)](https://commons.wikimedia.org/wiki/File:View_of_Mission_Control_Center_during_the_Apollo_13_emergency_return_(s70-35368).jpg) | Public domain (NASA) | 2026-09-16, Commons API |
| `arpanet-map-1977` | week 11 | [Arpanet logical map, March 1977](https://commons.wikimedia.org/wiki/File:Arpanet_logical_map,_march_1977.png) | Public domain | 2026-09-16, Commons API |

All three are public domain, so none carries an attribution requirement. The
source line under each plate is there anyway: a course about documentation
should say where its documents came from.

## Anything not clearly free

None so far. If one is ever added, it goes in this table with its real status
written plainly --- `licence not verified`, or `likely in copyright` --- and
never dressed up as public domain. **The repo goes public when it ships**, so a
row like that is a thing to clear or swap before submission, not after.
