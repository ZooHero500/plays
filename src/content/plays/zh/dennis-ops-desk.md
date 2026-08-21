---
id: "dennis-ops-desk"
title: "一张总台，十二张专桌"
summary: "只建一张总台。技能从公开库来。第一天不要铺十二张桌子。"
category: "编制"
tags:
  - "总助"
  - "技能包"
  - "routine"
  - "Basecamp"
author: "Dennis Yu"
authorHandle: "@dennisyu"
sourceUrl: "https://dennisyu.com/how-i-use-grok-bot/"
date: "2026-08-20"
audience: "事情很多，但讨厌 bot 自己去扇出发给别的模型。"
outcome: "一张总台，活有回执。专桌按职责加，发信和花钱先停。"
commentary: "好在哪：先有回执再扩编，不会第一天变成蜂群。坑在哪：重置电脑会丢掉没同步的东西，卡住要用更新。"
cover: "/assets/covers/dennis-ops-desk.png"
imageUrls:
  - "assets/covers/dennis-ops-desk.png"
steps:
  - "不要第一天铺十二张桌子。"
  - "地址是 github.com/dennisyu/blitzmetrics-skills。刷新那个地址，不要重传压缩包。"
  - "再存成 skill。试跑是真干活。然后才排日程。不要给演示排程。"
  - "文档可以默认发出，发信、花钱、删除、改权限、动生产必须停。电脑卡住用更新，不要重置。"
  - "待办派给人，回执写在同一条待办上。禁止悄悄扇出到别的模型。"
tutorial:
  - title: "只建一张总台"
    body: "不要第一天铺十二张桌子。"
  - title: "从他的公开技能库加载"
    body: "地址是 github.com/dennisyu/blitzmetrics-skills。刷新那个地址，不要重传压缩包。"
  - title: "先做一件真活，留下回执"
    body: "再存成 skill。试跑是真干活。然后才排日程。不要给演示排程。"
  - title: "专桌用一段职责当简介"
    body: "文档可以默认发出，发信、花钱、删除、改权限、动生产必须停。电脑卡住用更新，不要重置。"
  - title: "一个角色一张桌子"
    body: "待办派给人，回执写在同一条待办上。禁止悄悄扇出到别的模型。"
prompts:
  - title: "第一条消息：一张总台，先真活再 skill 再 routine"
    text: |
      Create ONE coordinator desk. Do not spin up 12 desks today. Load the skill pack from github.com/dennisyu/blitzmetrics-skills — refresh from that address, do not re-upload a zip. Point this desk at the public playbook on dennisyu.com/how-i-use-grok-bot/. Then do the first real job from the Task Library, leave a receipt, and stop. After that works: save it as a Grok Bot skill (when, inputs, sequence, validate, return, approval) and enable it for this Bot under Settings → Plugins. A test run is real work. Only then create a routine (schedule or a narrow event) under View conversation details → Routines. Do not schedule a demo.
      
      Approval: documentation on the hub can ship by default. Still stop and ask me before sending email, spending money, deleting, changing permissions, or changing production infrastructure. No silent fan-out to other models. If the computer is stuck, Update — never Reset. Keep secrets on the bot computer; never paste them into chat.
    source: "改写自 https://dennisyu.com/how-i-use-grok-bot/"
featured: false
---

