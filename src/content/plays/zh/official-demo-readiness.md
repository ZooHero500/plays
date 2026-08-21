---
id: "official-demo-readiness"
title: "Demo 环境过夜自检"
summary: "过夜把演示环境走一遍。坏掉的示例数据它修。会前你只看清单。"
category: "官方玩法"
tags:
  - "Demo"
  - "过夜"
  - "工程"
  - "清单"
author: "xAI"
authorHandle: "@bot"
sourceUrl: "https://x.ai/news/introducing-grok-bot"
date: "2026-08-11"
audience: "马上要给人演示，不想开会前自己点一遍环境。"
outcome: "会前收到一份就绪清单。坏 seed 和过期示例已经在演示数据里修好。"
commentary: "好在哪：会前你只看清单，不用自己半夜点环境。坑在哪：只许动演示数据，生产客户数据它不该碰。"
cover: "/assets/covers/official-demo-readiness.png"
imageUrls:
  - "assets/covers/official-demo-readiness.png"
steps:
  - "简介写清楚：走关键路径，修演示数据里坏掉的示例。生产客户数据别动。"
  - "哪几个页面必须亮，什么样叫能演示，写进这一条对话。"
  - "没有接口也行，它走产品界面。坏掉的 seed、过期的示例，就在演示数据里修。"
  - "约定它把就绪清单丢回同一个对话。你开会前不再自己点一遍。"
tutorial:
  - title: "建一个只负责演示环境的 bot"
    body: "简介写清楚：走关键路径，修演示数据里坏掉的示例。生产客户数据别动。"
  - title: "把演示入口和「能上台」的标准给它"
    body: "哪几个页面必须亮，什么样叫能演示，写进这一条对话。"
  - title: "让它过夜走一遍"
    body: "没有接口也行，它走产品界面。坏掉的 seed、过期的示例，就在演示数据里修。"
  - title: "会前只看清单"
    body: "约定它把就绪清单丢回同一个对话。你开会前不再自己点一遍。"
prompts:
  - title: "会前过夜自检"
    text: "Overnight, spin up and check our demo environment. Walk the golden path in the product UI, fix broken seeds and stale example data in the demo dataset only, and drop a ready checklist in this conversation before the first call. If something cannot be fixed, flag it on the checklist instead of guessing. Do not touch production customer data or send anything external."
    source: "改写自 https://x.ai/news/introducing-grok-bot"
featured: false
---

