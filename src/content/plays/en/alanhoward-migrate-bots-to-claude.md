---
id: "alanhoward-migrate-bots-to-claude"
title: "Grok Bot’s usage cut has a lot of people frustrated, including me. I’m dropping to the base tier, and here’s how I’m moving my bot operations over to Claude without starting from scratch:"
summary: "Ask each Grok Bot to write down its purpose and tasks, recreate those as Claude projects or scheduled tasks, and keep anything that changes or buys behind your approval."
category: "Engineering"
tags:
  - "migration"
  - "usage"
  - "claude"
author: "Alan"
authorHandle: "@alanhoward"
sourceUrl: "https://x.com/alanhoward/status/2118884552936767980"
date: "2026-11-07"
sourceDate: "2026-11-07"
audience: "Usage cuts make Grok Bot too tight and you want the same jobs elsewhere without a full rewrite."
outcome: "Same jobs on Claude projects/schedules; buy/change actions still need your OK."
commentary: "What's good: export purpose+tasks first so you don't rebuild from memory. The catch: connectors and calling may not map 1:1; expect breakage and retest."
imageUrls: []
steps:
  - "Ask each Grok Bot to write down its purpose and tasks."
  - "Take that write-up to Claude and recreate each as a project with standing instructions or a scheduled task."
  - "Keep anything that changes state or buys something behind your approval."
  - "Run both in parallel briefly and note what breaks before you drop the Grok side."
tutorial: []
prompts: []
featured: false
---
