# Plays Guides — layout lock (2026-09-08)

Clickable mock: `/workspace/plays-guides-mock/`
Brief: `/workspace/plays-astro/seo/PLAYS-SEO-BRIEFS-2026-09-08-v2.md`
Tokens: `/workspace/plays/DESIGN.md` (black `#0C0C0C`, cream invert, no purple / SaaS blue)

## URLs
- `/guides/how-to-use-grok-bot/`
- `/guides/grok-bot-templates/`
- `/guides/grok-bot-use-cases/`

## Layout (method page ≠ shelf)
| Zone | Spec |
| --- | --- |
| Top | Plays wordmark 18/500 · nav Discover / **Guides** / Submit · pad 20 40 |
| Breadcrumb | 12px `--text-3` · Home / Guides / current |
| Reading column | **720px** max (not 1080 shelf) |
| Kicker | 11/500 / 0.16em uppercase `--text-3` |
| H1 | 28–40 / 500 / -0.04em |
| Lede | 17/1.65 `--text-2` · answer-ready 40–60 words |
| H2 | 20/500 · margin-top 48 |
| Steps | 40px index + body · border-top `--line` · pad 20 0 |
| Play picks | **vertical compact list** · surface card r14 · thumb 72×40 · title 14 + why 12 · **A/B ≤8, C ≤6/section** · **no waterfall / masonry** |
| “More” | text link only → `/` or `/categories/...` |
| FAQ | `<details>` · summary 15/500 · answer 14 `--text-2` |
| Related guides | invert-style chips (outline) |
| End CTA | surface panel r20 · cream pill btn (invert/ink) · no blue |
| Mobile ≤720 | pad 24 · picks 2-col grid collapsed · single column |

## Spacing
Use Plays ladder: 8 / 12 / 16 / 20 / 24 / 28 / 36 / 48 / 64 / 88.

## States
- Pick hover: border `--line-hover`, translateY(-1px)
- Chip hover: border `#555048`
- FAQ open: summary “–”
- CTA pill: cream `#EDE8DF` / ink `#111` — **never** SaaS blue

## Engineering notes
- Reuse existing play card chrome **shrunk** (or this list row); do not mount Latest waterfall
- Build-time validate `/play/{id}` still exists
- `/install` → link “Full how-to” to page A
- Schema: Article + BreadcrumbList; page A optional HowTo matching visible steps
