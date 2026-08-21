# Grok Bot Plays

Public **frontend** for an unofficial [Grok Bot](https://x.ai/news/introducing-grok-bot) plays directory.

Wordmark is **Plays**. Locked visual: near-black `#0C0C0C`, cream type, capsule search. Not affiliated with xAI.

## Catalog data is private

Editorial catalog does **not** live in this public repo. The UI fetches `content/plays.json` at runtime.

Never commit the real catalog, `js/data.js`, or `assets/covers/`.

## Run locally

```bash
cp content/plays.example.json content/plays.json
python3 -m http.server 8765
```

Open `http://127.0.0.1:8765/`.
