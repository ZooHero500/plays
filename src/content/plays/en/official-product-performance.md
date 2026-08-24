---
id: "official-product-performance"
title: "Use cases"
summary: "Run an evidence-backed investigation of one latency spike. Do not change alerts. Do not change production."
category: "Engineering"
tags:
  - "performance"
  - "observability"
  - "forensics"
  - "Piper"
author: "xAI Docs"
authorHandle: "@bot"
sourceUrl: "https://docs.x.ai/grok-bot/use-cases"
date: ""
audience: "You just shipped. Checkout got slow. You want the hotspot and screenshots first."
outcome: "A short write-up. Facts and hypotheses stay apart. Screenshots and direct links included. Production settings were not touched."
commentary: "What's good: the write-up opens back to evidence. Not a hollow analysis. The catch: the alert switch is sitting right there. Production changes stay parked."
cover: "/assets/covers/official-product-performance.png"
imageUrls:
  - "assets/covers/official-product-performance.png"
steps:
  - "The official starter calls this role Piper. Tell the bot: directed forensics. Do not change production."
  - "Have it read dashboards, traces, and flamegraphs. Point at the highest-confidence hotspot."
  - "Put screenshots and direct links in. Keep facts and hypotheses apart."
  - "Alert changes and production settings do not go to this bot."
tutorial:
  - title: "Stand up an investigate-only bot."
    body: "The official starter calls this role Piper. Tell the bot: directed forensics. Do not change production."
  - title: "Give it yesterday's release and the latency you are seeing."
    body: "Have it read dashboards, traces, and flamegraphs. Point at the highest-confidence hotspot."
  - title: "Ask for a short write-up."
    body: "Put screenshots and direct links in. Keep facts and hypotheses apart."
  - title: "A health report can run on a schedule."
    body: "Alert changes and production settings do not go to this bot."
prompts:
  - title: "官方起步任务"
    text: "Investigate the checkout latency increase since yesterday's release. Review dashboards, traces, and flamegraphs; identify the highest-confidence hotspot; and return a short write-up with screenshots and direct links. Separate facts from hypotheses. Do not change alerts or production settings."
    source: "https://docs.x.ai/grok-bot/use-cases 原文"
featured: false
---
