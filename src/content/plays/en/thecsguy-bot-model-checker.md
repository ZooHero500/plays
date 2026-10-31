---
id: "thecsguy-bot-model-checker"
title: "i ran a model checker on one grok bot yesterday. it found real holes"
summary: "Run a model checker over your bots' rules: on 12 bots, 34 of 39 rules failed, including bots that would take another bot's \"nick said yes\" as approval."
category: "Crew"
tags:
  - "security"
  - "permissions"
  - "testing"
author: "nick"
authorHandle: "@thecsguy"
sourceUrl: "https://x.com/thecsguy/status/2116177554134749472"
date: "2026-10-30"
sourceDate: "2026-10-30"
audience: "Your bots act on each other's messages and you haven't tested the rules."
outcome: "34 of 39 rules failed, each check under a second, now being fixed."
commentary: "What's good: it caught an inbox bot that would trash email because another bot said OK. The catch: the author approves every fix himself, one bot at a time."
imageUrls:
  - "https://pbs.twimg.com/media/HV2xrttaQAEVWoo.jpg"
  - "https://pbs.twimg.com/media/HV2xrtrbUAA-WkM.jpg"
steps:
  - "Use /statechart from @poteto's pstack to model-check a bot's rules."
  - "Run it across your other bots."
  - "Review what failed (here, 34 of 39 rules)."
  - "Fix bots one at a time, approving every fix."
tutorial: []
prompts: []
featured: false
---
