---
id: "official-bug-reproduction"
title: "Reproduce in staging, bring back the pack"
summary: "In staging, on a fresh test account, turn the report into a reproduce pack. No production customer data."
category: "Engineering"
tags:
  - "bugs"
  - "reproduce"
  - "staging"
  - "tickets"
author: "xAI Docs"
authorHandle: "@bot"
sourceUrl: "https://docs.x.ai/grok-bot/use-cases"
date: ""
audience: "A ticket landed. You want reproduce steps first, then hand them to the person who fixes."
outcome: "A reproduce pack: exact steps, expected and actual, screenshots, browser and OS, the smallest case you can."
commentary: "What's good: the fixer gets a pack, not \"it just breaks on click.\" The catch: do not put the test account password in chat. Do not let it touch production customer data."
cover: "/assets/covers/official-bug-reproduction.png"
imageUrls:
  - "assets/covers/official-bug-reproduction.png"
steps:
  - "Tell the bot: staging, a fresh test account. Production customer data stays off limits."
  - "Have it reproduce in staging. Return steps, expected and actual, screenshots, console or network notes."
  - "Do not put passwords in the chat."
  - "You only take the judgment calls. You are not the messenger."
tutorial:
  - title: "Stand up a reproduce-only bot."
    body: "Tell the bot: staging, a fresh test account. Production customer data stays off limits."
  - title: "Give it this bug report."
    body: "Have it reproduce in staging. Return steps, expected and actual, screenshots, console or network notes."
  - title: "Hand over the test account on a secure path."
    body: "Do not put passwords in the chat."
  - title: "When the pack holds, hand it to a fix bot."
    body: "You only take the judgment calls. You are not the messenger."
prompts:
  - title: "官方起步任务"
    text: "Read this bug report and reproduce it in staging using a fresh test account. Return exact steps, expected and actual behavior, screenshots, browser and OS details, relevant console or network notes, and a minimal test case if possible. Do not use production customer data."
    source: "https://docs.x.ai/grok-bot/use-cases 原文"
featured: false
---
