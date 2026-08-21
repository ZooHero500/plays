# Design

Static, frontend-only directory. No build step, no backend, no embedded catalog.

## Purpose

A public page that lists unofficial Grok Bot plays. Editorial entries stay off git and are fetched at runtime.

## Information architecture

- `index.html` — filterable list and a hash detail view (`#play/<id>`).
- `about.html` — what this site is, and that the catalog is private.
- Data is not a route. It is a file (or `PLAYS_DATA_URL`) the page requests after load.

## Visual system

Field-manual / 手册, not a product dashboard.

- Paper `#f3ead8`, ink `#1a1612`, one cinnabar `#b42318` for marks and errors.
- Display serif for titles; system sans for UI; mono for ids and paths.
- Cards read as index cards: category rule, title, summary, author.
- No gradients, glass, or stock “AI product” purple.

## Data contract

Shape is documented by `content/plays.example.json` (one fake play). Runtime file is `content/plays.json`.

Required on each play: `id`, `title`, `summary`, `category`, `tags` (array), `author`, `authorHandle`, `sourceUrl`, `imageUrls` (array), `steps` (array of strings). `date` is optional (`YYYY-MM-DD`).

The page fails visibly if the file is missing, not JSON, or not an array. It does not fall back to the example file.
