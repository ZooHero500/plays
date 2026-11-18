---
id: "psiesa-approval-rules-audit"
title: "My Grok Bot fleet hit the 20-rule cap on approval rules."
summary: "When narrow approval rules hit the cap and start silently evicting older ones, have an agent audit the list, delete the unused rules, and merge the rest into broader ones."
category: "Engineering"
tags:
  - "approvals"
  - "audit"
  - "fleet"
author: "Paul Siesage"
authorHandle: "@psiesa"
sourceUrl: "https://x.com/psiesa/status/2122602097715671305"
date: "2026-11-17"
sourceDate: "2026-11-17"
audience: "You have a bot fleet with many narrow approval rules and a weekly routine has started breaking for no obvious reason."
outcome: "One agent audited the rules: 11 deleted, the rest merged into 7 broad rules."
commentary: "What's good: the failure mode is specific—the 20-rule cap quietly pushed old rules out and broke a weekly routine twice. The catch: the post does not show the merged rule wording, so you still have to review what \"broad\" means before you trust the new set."
imageUrls: []
steps:
  - "If a standing routine breaks after you add new approval rules, check whether you have hit the 20-rule cap."
  - "Have one agent audit every approval rule and list which are too narrow, unused, or overlapping."
  - "Delete the ones you no longer need; the author deleted 11."
  - "Merge the rest into fewer broad rules; the author ended with 7."
  - "Write new rules broad from the start, and prune them monthly so the cap does not evict them again."
tutorial: []
prompts: []
featured: false
---
