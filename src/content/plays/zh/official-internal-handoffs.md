---
id: "official-internal-handoffs"
title: "销售笔记、入职发票与缺陷交接"
summary: "销售补笔记、运营处理发票、工程复现缺陷。三条专线，上面一个总助。"
category: "官方玩法"
tags:
  - "CRM"
  - "入职"
  - "发票"
  - "缺陷交接"
author: "xAI"
authorHandle: "@bot"
sourceUrl: "https://x.ai/news/introducing-grok-bot"
date: "2026-08-11"
audience: "团队里这几件事已经在发生，不想自己当中间人传话。"
outcome: "三条专线互相交上下文。你只看判断题。"
commentary: "好在哪：内部连环活不用你来回贴。坑在哪：三条线权限不一样，付款和对外发送必须分开批。"
cover: "/assets/covers/official-internal-handoffs.png"
imageUrls:
  - "assets/covers/official-internal-handoffs.png"
steps:
  - "销售笔记、运营财务、工程复现，各管一块。"
  - "发送前停住。"
  - "付款和改权限要你点头。"
  - "你不当传话。"
  - "专线自己对齐。只把判断题拉你进来。"
tutorial:
  - title: "拆三条专线，不要一个万能助手"
    body: "销售笔记、运营财务、工程复现，各管一块。"
  - title: "销售这条：从通话补 CRM 笔记，起草跟进"
    body: "发送前停住。"
  - title: "运营这条：新同事排位，处理收到的发票"
    body: "付款和改权限要你点头。"
  - title: "工程这条：在产品界面复现、建单，再交给修的 bot"
    body: "你不当传话。"
  - title: "上面再放一个总助"
    body: "专线自己对齐。只把判断题拉你进来。"
prompts:
  - title: "三条专线第一任务"
    text: "Set up three specialist lanes on this account, not one catch-all helper: (1) a sales Bot that logs into the CRM, writes call-transcript notes, and drafts follow-ups, stopping before send; (2) an ops Bot that seats new hires and processes invoices received in Gmail, stopping before payment or permission changes; (3) an engineering Bot that reproduces a bug in the product UI, files the ticket, and hands the fix to a debugging Bot. They should pass context to each other. Pull me in only for judgment calls. Do not contact customers, pay invoices, or change production without approval."
    source: "改写自 https://x.ai/news/introducing-grok-bot"
featured: false
---

