---
id: "official-expense-manager"
title: "每周报销对账"
summary: "每周对账、配收据、标例外。不改报销，不发催办。"
category: "官方玩法"
tags:
  - "财务"
  - "报销"
  - "收据"
  - "对账"
author: "xAI Docs"
authorHandle: "@bot"
sourceUrl: "https://docs.x.ai/grok-bot/use-cases"
date: ""
audience: "管报销的人。周末不想自己对一堆收据。"
outcome: "一份本周汇总，缺分类和政策例外标出来，每人一封跟进草稿。"
commentary: "好在哪：例外带着政策条款，不是一堆问号。坑在哪：总额对不上就不要信，发出和入账必须你批。"
cover: "/assets/covers/official-expense-manager.png"
imageUrls:
  - "assets/covers/official-expense-manager.png"
steps:
  - "接上报销系统、财务收件箱、费用政策。简介写：对账、配收据、起草。不许改报销，不许发信。"
  - "收据对得上的对上。缺分类、政策例外标出来，并引用政策条款。"
  - "总额要能对回数据源。草稿给你，不要发出去。"
  - "入账和发出仍要你批。"
tutorial:
  - title: "建一个只做对账的 bot"
    body: "接上报销系统、财务收件箱、费用政策。简介写：对账、配收据、起草。不许改报销，不许发信。"
  - title: "让它生成本周汇总"
    body: "收据对得上的对上。缺分类、政策例外标出来，并引用政策条款。"
  - title: "按负责人各起草一封跟进"
    body: "总额要能对回数据源。草稿给你，不要发出去。"
  - title: "形状稳了再每周跑"
    body: "入账和发出仍要你批。"
prompts:
  - title: "官方起步任务"
    text: "Build this week's expense summary from the expense system and attached policy. Match receipts from the finance inbox, flag missing categories or policy exceptions, and draft one follow-up per owner. Return the summary and drafts; do not send messages or change reimbursements."
    source: "https://docs.x.ai/grok-bot/use-cases 原文"
featured: false
---

