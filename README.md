# Grok Bot Plays

Public **frontend** for an unofficial [Grok Bot](https://x.ai/news/introducing-grok-bot) plays directory.

Wordmark is **Plays**. Locked visual: near-black `#0C0C0C`, cream type, capsule search. Not affiliated with xAI.

## Catalog data is private

Editorial catalog does **not** live in this public repo. The UI fetches `content/plays.json` at runtime.

| Source | When |
| --- | --- |
| `content/plays.json` | Default on the deployed host (gitignored). |
| `content/plays.example.json` | One fake play documenting the JSON shape. |

Never commit the real catalog, `js/data.js`, or `assets/covers/`.

## Run locally

```bash
cp content/plays.example.json content/plays.json
python3 -m http.server 8765
```

Open `http://127.0.0.1:8765/`.

## Layout

```
index.html          directory + hash detail
about.html          about
css/styles.css      locked black design
js/app.js           fetches the catalog, renders the UI
DESIGN.md           visual lock
assets/grain.svg    texture
content/plays.example.json
```
