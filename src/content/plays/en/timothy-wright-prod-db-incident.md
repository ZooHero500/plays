---
id: "timothy-wright-prod-db-incident"
title: "3:02 AM my prod DB hit 98% CPU."
summary: "Let a chief-of-staff bot trace a production spike to its cause and have agents ship fixes with tests and code review, so you only approve merges."
category: "Engineering"
tags:
  - "incident"
  - "database"
  - "agents"
author: "Timothy Wright"
authorHandle: "@timothywright"
sourceUrl: "https://x.com/timothywright/status/2110397589547786742"
date: "2026-10-14"
sourceDate: "2026-10-14"
audience: "You run production and get paged at night."
outcome: "Root cause found and fixes merged by morning."
commentary: "What's good: it found the hot path was different from last week's fix, which a tired human might miss. The catch: you are still the one approving merges into prod."
imageUrls: []
steps:
  - "Point the bot at the alert and your monitoring."
  - "Have it trace the hot query and what triggers it."
  - "Ask it to check whether this is the same path as earlier fixes or a new one."
  - "Have agents write the fixes with parity tests and an AI code review each."
  - "Approve the merges from your phone."
tutorial: []
prompts: []
featured: false
---
