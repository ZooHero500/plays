---
id: "official-teach-routine"
title: "先教会，再过夜例行"
summary: "先跑通一次，存成 skill，再让它按点跑。不要先排程。"
category: "官方玩法"
tags:
  - "skill"
  - "routine"
  - "Teach a task"
  - "过夜"
author: "xAI Docs"
authorHandle: "@bot"
sourceUrl: "https://docs.x.ai/grok-bot/skills-routines-and-automations"
date: ""
audience: "有一件每周都在做的活，想先教会，再让它自己跑。"
outcome: "一条你肯签字的 skill，以及一条知道失败该怎么办的 routine。"
commentary: "好在哪：先有你肯签字的做法，再让它过夜跑。坑在哪：先排程再改规则，失败会在你不在时发生。"
cover: "/assets/covers/official-teach-routine.png"
imageUrls:
  - "assets/covers/official-teach-routine.png"
steps:
  - "范围收小。步骤、对错标准、交什么、什么必须你批，改到你肯签字。"
  - "写清何时用、输入、顺序、怎么校验、返回什么。需要跟做时，用 Teach a task 演示一遍，再审它生成的草稿。"
  - "试跑是真干活。写操作仍然先停住。"
  - "写清谁拥有、哪个时区、缺数据怎么办。背景 routine 在笔记本合上时也会跑。"
  - "比如某个频道同时出现工单链接和 needs repro。不要听每一条新消息。"
tutorial:
  - title: "先做一次真活"
    body: "范围收小。步骤、对错标准、交什么、什么必须你批，改到你肯签字。"
  - title: "让它把刚用过的流程存成 skill"
    body: "写清何时用、输入、顺序、怎么校验、返回什么。需要跟做时，用 Teach a task 演示一遍，再审它生成的草稿。"
  - title: "换第二份输入试一次"
    body: "试跑是真干活。写操作仍然先停住。"
  - title: "再创建 routine"
    body: "写清谁拥有、哪个时区、缺数据怎么办。背景 routine 在笔记本合上时也会跑。"
  - title: "事件触发要写窄"
    body: "比如某个频道同时出现工单链接和 needs repro。不要听每一条新消息。"
prompts:
  - title: "存成 skill"
    text: "Save the process we just used as a skill called “Weekly account health.” Include the source systems, risk definitions, output format, and the rule that customer contact always requires approval."
    source: "https://docs.x.ai/grok-bot/skills-routines-and-automations 原文"
  - title: "排一条工作日 routine"
    text: "Every weekday at 8:00 AM, run the Daily customer-risk skill against the current account list. Post a linked watch list in this conversation. Do not contact customers. If the source data is unavailable, report the failure instead of using old data."
    source: "https://docs.x.ai/grok-bot/skills-routines-and-automations 原文"
featured: false
---

