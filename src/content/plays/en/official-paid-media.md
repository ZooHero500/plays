---
id: "official-paid-media"
title: "Use cases"
summary: "Compare spend to budget and CAC. Recommend reallocations. The bot does not touch the budget."
category: "Growth"
tags:
  - "paid-media"
  - "budget"
  - "CAC"
  - "Slack"
author: "xAI Docs"
authorHandle: "@bot"
sourceUrl: "https://docs.x.ai/grok-bot/use-cases"
date: ""
audience: "You run paid media. You want to see spend every day. You do not want to pull the ad console first."
outcome: "A reallocation rec with numbers that tie out. A Slack draft for the growth team. The budget was not changed."
commentary: "What's good: numbers and the rec arrive together. You do not drill the console first. The catch: it will try to change the budget. That step stays parked."
cover: "/assets/covers/official-paid-media.png"
imageUrls:
  - "assets/covers/official-paid-media.png"
steps:
  - "Tell the bot: pull numbers, recommend. Do not change the ad console. Do not send Slack on its own."
  - "Compare against the monthly budget and target CAC. Every rec needs numbers that tie out."
  - "Bring it to you first. Do not send."
  - "Budget changes and campaign changes always wait for your click."
tutorial:
  - title: "Stand up a watch-only bot."
    body: "Tell the bot: pull numbers, recommend. Do not change the ad console. Do not send Slack on its own."
  - title: "Have it pull spend and performance by campaign."
    body: "Compare against the monthly budget and target CAC. Every rec needs numbers that tie out."
  - title: "Draft the update for the growth team."
    body: "Bring it to you first. Do not send."
  - title: "When the analysis holds, you can run it on a schedule."
    body: "Budget changes and campaign changes always wait for your click."
prompts:
  - title: "官方起步任务"
    text: "Pull current spend and performance by campaign. Compare it with the monthly budget and target customer acquisition cost (CAC), then recommend reallocations with the supporting numbers. Draft a Slack update for the growth team. Do not change budgets or send the message."
    source: "https://docs.x.ai/grok-bot/use-cases 原文"
featured: false
---
