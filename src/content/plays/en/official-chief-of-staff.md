---
id: "official-chief-of-staff"
title: "Use cases"
summary: "Against your priorities, the bot folds yesterday into a morning brief. It does not send messages. It does not change meetings."
category: "Crew"
tags:
  - "chief-of-staff"
  - "briefing"
  - "calendar"
  - "slack"
author: "xAI Docs"
authorHandle: "@bot"
sourceUrl: "https://docs.x.ai/grok-bot/use-cases"
date: ""
audience: "Too many channels and inboxes. You only want what maps to your priorities, and whether you owe a decision."
outcome: "A morning brief with sources. Each item says why it matters, the next step, and whether you owe a decision."
commentary: "What's good: the brief maps to priorities. It is not another unread pile. The catch: a wide channel list turns into noise. You mark useful and noise yourself."
cover: "/assets/covers/official-chief-of-staff.png"
imageUrls:
  - "assets/covers/official-chief-of-staff.png"
steps:
  - "Give the bot the priorities doc and the approved channels. No sending messages. No changing meetings."
  - "Keep only items that map to the priorities doc."
  - "Each item: source, why it matters, next step, whether you owe a decision. Mark the ones that need a call."
  - "Schedule the brief for a time you can actually read it."
tutorial:
  - title: "Stand up a chief of staff."
    body: "Give the bot the priorities doc and the approved channels. No sending messages. No changing meetings."
  - title: "Have it read channels, inbox, calendar, and meeting notes since yesterday."
    body: "Keep only items that map to the priorities doc."
  - title: "Every item gets a source and a next step."
    body: "Each item: source, why it matters, next step, whether you owe a decision. Mark the ones that need a call."
  - title: "Tune it with \"this was useful\" / \"this is noise.\""
    body: "Schedule the brief for a time you can actually read it."
prompts:
  - title: "官方起步任务"
    text: "Review activity since yesterday across my approved channels, inbox, calendar, and meeting notes. Return only items that map to the priorities in this document. For each item, include the source, why it matters, the proposed next step, and whether I owe a decision. Do not send messages or change meetings."
    source: "https://docs.x.ai/grok-bot/use-cases 原文"
featured: false
---
