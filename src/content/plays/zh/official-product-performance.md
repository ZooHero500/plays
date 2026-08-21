---
id: "official-product-performance"
title: "产品性能取证"
summary: "针对一次延迟做有证据的调查。不改告警，不改生产。"
category: "工程"
tags:
  - "性能"
  - "可观测"
  - "取证"
  - "Piper"
author: "xAI Docs"
authorHandle: "@bot"
sourceUrl: "https://docs.x.ai/grok-bot/use-cases"
date: ""
audience: "刚发完版，checkout 变慢了，想先看到热点和截图。"
outcome: "一份短写回：事实和假设分开，带着截图和直链。生产设置没动。"
commentary: "好在哪：写回能点回证据，不是一段空分析。坑在哪：它手边就是告警开关，生产变更必须停。"
cover: "/assets/covers/official-product-performance.png"
imageUrls:
  - "assets/covers/official-product-performance.png"
steps:
  - "官方入门里这个角色叫 Piper。简介写：定向取证，不改生产。"
  - "让它看 dashboard、traces、flamegraph，指出最高置信的热点。"
  - "截图和直链放进来。事实和假设分开写。"
  - "改告警、改生产设置，不要交给它。"
tutorial:
  - title: "建一个只做调查的 bot"
    body: "官方入门里这个角色叫 Piper。简介写：定向取证，不改生产。"
  - title: "把昨天的发版和延迟现象给它"
    body: "让它看 dashboard、traces、flamegraph，指出最高置信的热点。"
  - title: "只要短写回"
    body: "截图和直链放进来。事实和假设分开写。"
  - title: "健康报告可以定期出"
    body: "改告警、改生产设置，不要交给它。"
prompts:
  - title: "官方起步任务"
    text: "Investigate the checkout latency increase since yesterday's release. Review dashboards, traces, and flamegraphs; identify the highest-confidence hotspot; and return a short write-up with screenshots and direct links. Separate facts from hypotheses. Do not change alerts or production settings."
    source: "https://docs.x.ai/grok-bot/use-cases 原文"
featured: false
---

