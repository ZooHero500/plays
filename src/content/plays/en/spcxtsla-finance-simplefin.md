---
id: "spcxtsla-finance-simplefin"
title: "A finance bot that reads SimpleFin"
summary: "Peter stood up a finance bot and feeds it through SimpleFin. It watches spend, balances, and due dates across institutions, then answers a question instead of opening five bank apps."
category: "Life"
tags:
  - "finance"
  - "simplefin"
  - "spend"
author: "Peter"
authorHandle: "@SPCXTSLA"
sourceUrl: "https://x.com/SPCXTSLA/status/2090643484500021576"
date: ""
audience: "You want one spend picture and already have, or will get, a SimpleFin feed."
outcome: "Spend, balances, and payment dates from SimpleFin. A question across institutions gets one answer."
commentary: "What's good: SimpleFin is a cheap read feed, about $1.50 a month, and the bot pulls when it needs the data. The catch: the bank stays on SimpleFin. The bot reads the feed. It does not move money."
cover: "/assets/covers/official-pipeline-ops.png"
imageUrls: []
steps:
  - "Create a finance bot. Its job is spend, balances, and payment dates. Not a wallet."
  - "Point it at SimpleFin. That is the feed. You set SimpleFin up on your side. The bot reads what SimpleFin already has."
  - "Ask it to analyze spend, or one kind of spend, across institutions. It answers from the feed. You do not open five apps."
  - "Keep money moves with you. The bot reports. It does not pay a bill or shift a balance."
tutorial:
  - title: "Name a finance bot."
    body: "Spend, balances, due dates. Not a wallet."
  - title: "Point it at SimpleFin."
    body: "The feed you already set up. The bot reads it."
  - title: "Ask across institutions."
    body: "One kind of spend. One answer."
  - title: "You keep the money moves."
    body: "It reports. It does not pay."
prompts:
  - title: "Finance"
    text: |
      You are my finance bot.

      Read spend, balances, and payment dates from my SimpleFin feed. Pull from that feed when you need a fresh number.

      When I ask, analyze spend or one kind of spend across institutions and answer in one place.

      Do not move money. Do not pay a bill. Do not ask me for bank details in this chat.
    source: "Rewritten from https://x.com/SPCXTSLA/status/2090643484500021576"
featured: false
---
