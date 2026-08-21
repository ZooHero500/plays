---
id: "official-bug-reproduction"
title: "缺陷复现包"
summary: "在 staging 用新测试号把报告做成可复现包。不用生产客户数据。"
category: "工程"
tags:
  - "缺陷"
  - "复现"
  - "staging"
  - "工单"
author: "xAI Docs"
authorHandle: "@bot"
sourceUrl: "https://docs.x.ai/grok-bot/use-cases"
date: ""
audience: "工单来了，想先拿到能复现的步骤，再交给修的人。"
outcome: "一份复现包：精确步骤、期望和实际、截图、浏览器和系统、尽量小的用例。"
commentary: "好在哪：修的人拿到的是包，不是「我这边点一下就坏」。坑在哪：测试号别写进聊天，也别让它碰生产客户数据。"
cover: "/assets/covers/official-bug-reproduction.png"
imageUrls:
  - "assets/covers/official-bug-reproduction.png"
steps:
  - "简介写清楚：staging、新测试号。生产客户数据不许用。"
  - "让它在 staging 复现。返回步骤、期望和实际、截图、控制台或网络笔记。"
  - "不要把密码写进聊天。"
  - "你只看判断题，不当中间人传话。"
tutorial:
  - title: "建一个只做复现的 bot"
    body: "简介写清楚：staging、新测试号。生产客户数据不许用。"
  - title: "把这份缺陷报告给它"
    body: "让它在 staging 复现。返回步骤、期望和实际、截图、控制台或网络笔记。"
  - title: "测试账号走安全交接"
    body: "不要把密码写进聊天。"
  - title: "复现包稳了，交给修的 bot"
    body: "你只看判断题，不当中间人传话。"
prompts:
  - title: "官方起步任务"
    text: "Read this bug report and reproduce it in staging using a fresh test account. Return exact steps, expected and actual behavior, screenshots, browser and OS details, relevant console or network notes, and a minimal test case if possible. Do not use production customer data."
    source: "https://docs.x.ai/grok-bot/use-cases 原文"
featured: false
---

