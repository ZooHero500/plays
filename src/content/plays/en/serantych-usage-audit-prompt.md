---
id: "serantych-usage-audit-prompt"
title: "I built a prompt that shows where every % of your GrokBot limit goes"
summary: "Have your bot audit itself: rank every routine by how often it runs versus how often it finds something, and flag chats that burn usage."
category: "Engineering"
tags:
  - "usage"
  - "audit"
  - "routines"
author: "sunick"
authorHandle: "@Serantych"
sourceUrl: "https://x.com/Serantych/status/2120270737403437304"
date: "2026-11-11"
sourceDate: "2026-11-11"
audience: "The usage meter says 87% but not which bot, routine or chat used it."
outcome: "A breakdown of usage by routine and chat."
commentary: "What's good: it ranks routines by runs versus finds, which exposes busy-but-useless ones. The catch: the post text is cut off after the first two checks."
imageUrls: []
steps:
  - "Ask your bot to audit its own usage."
  - "Have it rank every routine by how often it runs versus how often it finds something."
  - "Have it flag chats that use a lot."
  - "Cut or slow the routines that run often and find little."
tutorial: []
prompts: []
featured: false
---
