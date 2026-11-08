---
id: "z3roclarity-usage-watchdog"
title: "grok @bot knows the weekly usage limits and usage per bot and per routine, etc"
summary: "Tell your primary bot to watch weekly usage per bot and per routine, ask other bots to slow down when the cap is near, and clean up inefficient routines."
category: "Engineering"
tags:
  - "usage"
  - "routines"
  - "fleet"
author: "zeroclarity"
authorHandle: "@z3roclarity"
sourceUrl: "https://x.com/z3roclarity/status/2119174663443996940"
date: "2026-11-07"
sourceDate: "2026-11-07"
audience: "A busy roster burns the weekly cap and you do not want to babysit every routine."
outcome: "A watchdog that can tell other bots to slow down and flag wasteful routines."
commentary: "What's good: usage awareness lives on the bot that already sees per-bot and per-routine burn. The catch: a watchdog still spends some usage, and 'slow down' needs a clear rule so work does not just stop."
imageUrls: []
steps:
  - "Tell your primary bot to watch weekly usage overall and per bot and routine."
  - "Ask it to tell other bots to slow down when usage gets tight."
  - "Have it point out inefficient routines and propose changes."
  - "Approve any routine edits before they go live."
  - "Recheck the usage view after a day to see whether burn dropped."
tutorial: []
prompts: []
featured: false
---
