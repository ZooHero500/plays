---
id: "official-paid-media"
title: "付费投放监盘"
summary: "对照预算和 CAC，给出再分配建议。改预算它不动。"
category: "增长"
tags:
  - "投放"
  - "预算"
  - "CAC"
  - "Slack"
author: "xAI Docs"
authorHandle: "@bot"
sourceUrl: "https://docs.x.ai/grok-bot/use-cases"
date: ""
audience: "管投放的人。想每天看清花费，不想自己先拉一遍后台。"
outcome: "一份带数字的再分配建议，以及一封给增长团队的 Slack 草稿。预算没被改。"
commentary: "好在哪：数字和建议一起到，你不用先钻后台。坑在哪：它会想直接改预算，这一步必须停。"
cover: "/assets/covers/official-paid-media.png"
imageUrls:
  - "assets/covers/official-paid-media.png"
steps:
  - "简介写清楚：拉数、给建议。不许改广告后台，不许自己发 Slack。"
  - "对照月预算和目标 CAC。建议必须带着能对上的数字。"
  - "先给你看。不要发出去。"
  - "改预算、改投放，始终你来点。"
tutorial:
  - title: "建一个只监盘的 bot"
    body: "简介写清楚：拉数、给建议。不许改广告后台，不许自己发 Slack。"
  - title: "让它按 campaign 拉花费和效果"
    body: "对照月预算和目标 CAC。建议必须带着能对上的数字。"
  - title: "起草给增长团队的更新"
    body: "先给你看。不要发出去。"
  - title: "分析稳了可以定期跑"
    body: "改预算、改投放，始终你来点。"
prompts:
  - title: "官方起步任务"
    text: "Pull current spend and performance by campaign. Compare it with the monthly budget and target customer acquisition cost (CAC), then recommend reallocations with the supporting numbers. Draft a Slack update for the growth team. Do not change budgets or send the message."
    source: "https://docs.x.ai/grok-bot/use-cases 原文"
featured: false
---

