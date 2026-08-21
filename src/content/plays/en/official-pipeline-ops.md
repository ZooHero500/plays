---
id: "official-pipeline-ops"
title: "Land a Monday scoreboard, park the writes"
summary: "The bot watches CRM hygiene and stalled deals. Monday, a scoreboard lands."
category: "Official"
tags:
  - "sales"
  - "crm"
  - "org-chart"
  - "scoreboard"
author: "xAI"
authorHandle: "@bot"
sourceUrl: "https://x.ai/news/introducing-grok-bot"
date: "2026-08-11"
audience: "You run the sales pipeline. Monday you want to know who to watch. You do not want to clean the sheet first."
outcome: "A scoreboard in the chat before people start: missing contacts, stalls, commit risk. Every line opens back to the CRM."
commentary: "What's good: Monday you do not clean the sheet first. People start from the scoreboard. The catch: it will try to rewrite stages. Writes stay parked until you approve."
cover: "/assets/covers/official-pipeline-ops.png"
imageUrls:
  - "assets/covers/official-pipeline-ops.png"
steps:
  - "Tell the bot: clean hygiene, flag stalls. Stage changes and win-rate edits stay parked."
  - "Have it also flag deals that sat too long, and commits that look like they will slip."
  - "Do not invent win rates. Do not invent weekly numbers. Every item must open back to CRM evidence."
  - "The scoreboard is already in the chat when people start. Writes still wait for your yes."
tutorial:
  - title: "Stand up a read-only CRM bot."
    body: "Tell the bot: clean hygiene, flag stalls. Stage changes and win-rate edits stay parked."
  - title: "Have it look for missing contacts, stale roles, dirty fields."
    body: "Have it also flag deals that sat too long, and commits that look like they will slip."
  - title: "Every number has to open."
    body: "Do not invent win rates. Do not invent weekly numbers. Every item must open back to CRM evidence."
  - title: "Make it the Monday pack."
    body: "The scoreboard is already in the chat when people start. Writes still wait for your yes."
prompts:
  - title: "周一记分牌（只读）"
    text: "Keep CRM and org-chart hygiene clean. Flag missing contacts, stale roles, dirty fields, stalls, and commit risk. Do not invent win rates or weekly numbers — only cite evidence that can be opened in the CRM. Land a Monday scoreboard in this conversation so people start the week oriented. Do not write stage or field changes until I approve."
    source: "改写自 https://x.ai/news/introducing-grok-bot"
featured: false
---
