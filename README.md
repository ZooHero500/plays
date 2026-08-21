# plays

Public **frontend** for an unofficial [Grok Bot](https://x.ai/news/introducing-grok-bot) plays directory.

This repository is HTML, CSS, and client-side JavaScript only. It is **not** affiliated with xAI, SpaceXAI, or Cursor.

## Catalog data is private

Editorial catalog data does **not** live in this public repo. The UI loads the catalog at runtime from a file that is not in git:

| Source | When to use |
| --- | --- |
| `/content/plays.json` (or `content/plays.json` next to the site) | Default. Place the private file on the deployed host, or keep a local copy that is gitignored. |
| `PLAYS_DATA_URL` | Optional override. Set `window.PLAYS_DATA_URL` before `js/app.js`, or put the URL in `<meta name="plays-data-url">`. |
| `?data=` | Query override for local checks, e.g. `?data=content/plays.example.json`. |

There is no backend in this project. Any static host works: copy the frontend files, then drop the private catalog onto the host at `content/plays.json` (or point `PLAYS_DATA_URL` at a URL that allows the page origin).

`content/plays.example.json` ships **one obviously fake** play so the JSON shape is documented. Never commit the real catalog, `js/data.js`, cover images, or source notes.

## Run locally

The browser cannot `fetch` from `file://`. Serve the folder over HTTP:

```bash
cp content/plays.example.json content/plays.json
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/`. `content/plays.json` is gitignored.

If the catalog file is missing or invalid, the page shows a clear error and does not invent plays.

## Repo layout

```
index.html          directory
about.html          about / disclaimer
css/app.css
js/app.js           fetches the catalog, renders the UI
content/plays.example.json
DESIGN.md           visual and data notes
```

Kept out of git (see `.gitignore`): `content/plays.json`, other `content/*.json` except the example, `content/install.md`, `content/SOURCES.md`, `js/data.js`, `assets/covers/`, `shots/`, draft JSON.

Older commits on `main` still contain catalog files. This branch stops tracking them going forward. History is not rewritten.
