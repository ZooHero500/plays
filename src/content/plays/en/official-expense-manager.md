---
id: "official-expense-manager"
title: "Reconcile the week, park the chase"
summary: "Weekly reconcile. Match receipts. Flag exceptions. Do not change reimbursements. Do not send chases."
category: "Official"
tags:
  - "finance"
  - "expenses"
  - "receipts"
  - "reconcile"
author: "xAI Docs"
authorHandle: "@bot"
sourceUrl: "https://docs.x.ai/grok-bot/use-cases"
date: ""
audience: "You own expenses. You do not want to match a pile of receipts on the weekend."
outcome: "This week's summary. Missing categories and policy exceptions flagged. One follow-up draft per owner."
commentary: "What's good: exceptions cite the policy line. Not a pile of question marks. The catch: if the totals do not tie out, do not trust it. Send and post still wait for your yes."
cover: "/assets/covers/official-expense-manager.png"
imageUrls:
  - "assets/covers/official-expense-manager.png"
steps:
  - "Connect the expense system, the finance inbox, and the expense policy. Tell the bot: reconcile, match receipts, draft. Do not change reimbursements. Do not send mail."
  - "Match the receipts that match. Flag missing categories and policy exceptions, and cite the policy line."
  - "Totals have to tie back to the source. Drafts come to you. Do not send."
  - "Posting and sending still wait for your yes."
tutorial:
  - title: "Stand up a reconcile-only bot."
    body: "Connect the expense system, the finance inbox, and the expense policy. Tell the bot: reconcile, match receipts, draft. Do not change reimbursements. Do not send mail."
  - title: "Have it build this week's summary."
    body: "Match the receipts that match. Flag missing categories and policy exceptions, and cite the policy line."
  - title: "Draft one follow-up per owner."
    body: "Totals have to tie back to the source. Drafts come to you. Do not send."
  - title: "When the shape holds, run it weekly."
    body: "Posting and sending still wait for your yes."
prompts:
  - title: "官方起步任务"
    text: "Build this week's expense summary from the expense system and attached policy. Match receipts from the finance inbox, flag missing categories or policy exceptions, and draft one follow-up per owner. Return the summary and drafts; do not send messages or change reimbursements."
    source: "https://docs.x.ai/grok-bot/use-cases 原文"
featured: false
---
