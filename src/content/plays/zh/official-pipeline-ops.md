---
id: "official-pipeline-ops"
title: "Pipeline 周一记分牌"
summary: "盯着 CRM 脏不脏、单子停没停。周一丢一份记分牌。"
category: "官方玩法"
tags:
  - "销售"
  - "CRM"
  - "组织架构"
  - "记分牌"
author: "xAI"
authorHandle: "@bot"
sourceUrl: "https://x.ai/news/introducing-grok-bot"
date: "2026-08-11"
audience: "管销售管道的人。周一想看清楚该盯谁，不想自己先清一遍表。"
outcome: "上班前对话里有一份记分牌：缺人、停滞、commit 风险，都能点回 CRM。"
commentary: "好在哪：周一不用自己先清表，人能对着记分牌开工。坑在哪：它容易顺手改阶段，写入必须你批。"
cover: "/assets/covers/official-pipeline-ops.png"
imageUrls:
  - "assets/covers/official-pipeline-ops.png"
steps:
  - "简介写清楚：清卫生、标停滞。改阶段、改赢率，先停住。"
  - "再标出停太久的单，以及看起来要丢的 commit。"
  - "不许编赢率，不许编本周数字。每条都要回到 CRM 里的证据。"
  - "人上班时对话里已经有记分牌。写入仍然要你点头。"
tutorial:
  - title: "建一个只读 CRM 的 bot"
    body: "简介写清楚：清卫生、标停滞。改阶段、改赢率，先停住。"
  - title: "让它看缺联系人、过期角色、脏字段"
    body: "再标出停太久的单，以及看起来要丢的 commit。"
  - title: "数字必须能点开"
    body: "不许编赢率，不许编本周数字。每条都要回到 CRM 里的证据。"
  - title: "做成周一才出的那一份"
    body: "人上班时对话里已经有记分牌。写入仍然要你点头。"
prompts:
  - title: "周一记分牌（只读）"
    text: "Keep CRM and org-chart hygiene clean. Flag missing contacts, stale roles, dirty fields, stalls, and commit risk. Do not invent win rates or weekly numbers — only cite evidence that can be opened in the CRM. Land a Monday scoreboard in this conversation so people start the week oriented. Do not write stage or field changes until I approve."
    source: "改写自 https://x.ai/news/introducing-grok-bot"
featured: false
---

