---
id: "official-internal-handoffs"
title: "Split three lanes, take only the calls"
summary: "Sales fills notes. Ops handles invoices. Engineering reproduces bugs. Three lanes. One chief of staff above them."
category: "Official"
tags:
  - "CRM"
  - "onboarding"
  - "invoices"
  - "bug-handoff"
author: "xAI"
authorHandle: "@bot"
sourceUrl: "https://x.ai/news/introducing-grok-bot"
date: "2026-08-11"
audience: "These jobs are already happening on the team. You do not want to be the messenger in the middle."
outcome: "Three specialist lanes pass context to each other. You only take the judgment calls."
commentary: "What's good: the internal chain does not bounce through you. The catch: the three lanes have different permissions. Payment and outbound send get approved separately."
cover: "/assets/covers/official-internal-handoffs.png"
imageUrls:
  - "assets/covers/official-internal-handoffs.png"
steps:
  - "Sales notes, ops finance, engineering repro. Each lane owns one slice."
  - "Stop before send."
  - "Payment and permission changes wait for your yes."
  - "You are not the messenger."
  - "The lanes align themselves. Pull you in only for judgment calls."
tutorial:
  - title: "Split three specialist lanes. Not one catch-all helper."
    body: "Sales notes, ops finance, engineering repro. Each lane owns one slice."
  - title: "Sales lane: fill CRM notes from calls, draft follow-ups."
    body: "Stop before send."
  - title: "Ops lane: seat new hires, process invoices that arrived."
    body: "Payment and permission changes wait for your yes."
  - title: "Engineering lane: reproduce in the product UI, file the ticket, hand it to a fix bot."
    body: "You are not the messenger."
  - title: "Put a chief of staff on top."
    body: "The lanes align themselves. Pull you in only for judgment calls."
prompts:
  - title: "三条专线第一任务"
    text: "Set up three specialist lanes on this account, not one catch-all helper: (1) a sales Bot that logs into the CRM, writes call-transcript notes, and drafts follow-ups, stopping before send; (2) an ops Bot that seats new hires and processes invoices received in Gmail, stopping before payment or permission changes; (3) an engineering Bot that reproduces a bug in the product UI, files the ticket, and hands the fix to a debugging Bot. They should pass context to each other. Pull me in only for judgment calls. Do not contact customers, pay invoices, or change production without approval."
    source: "改写自 https://x.ai/news/introducing-grok-bot"
featured: false
---
