---
id: "montekkundan-ceo-qa-prs"
title: "Talk to the CEO. QA hits staging. Dev opens draft PRs"
summary: "Montek runs the AI chat they ship with one CEO bot. QA hits the same staging URL. The developer opens draft PRs with Linear IDs. Specialists report to the CEO, not to him."
category: "Engineering"
tags:
  - "qa"
  - "pull-requests"
  - "linear"
author: "Montek"
authorHandle: "@montekkundan"
sourceUrl: "https://x.com/montekkundan/status/2090535058738192519"
date: ""
audience: "You ship a product and five specialist chats is how you lose the thread."
outcome: "One CEO to talk to. QA on the real staging URL. Draft PRs with Linear IDs. You still review and merge."
commentary: "What's good: specialists report to the CEO, draft PRs only, blockers stay in chat. The catch: the CEO waits to brief, so work can finish and sit. Ping you on start, block, PR opened, and idle."
cover: "/assets/covers/eric-outbound-voice.png"
imageUrls:
  - "https://pbs.twimg.com/media/HQMR91KWIAAwG3l.jpg"
steps:
  - "Talk to one CEO. He owns routing. Under him: QA on the live unstable build, a developer who clones, fixes, and opens draft PRs, GitHub, Linear lookup, and a bug queue. Specialists report to him, not to you."
  - "Put them in group rooms so they can talk without you. You stay out of five parallel chats."
  - "QA hits the real staging URL, same account and company every time. Dev opens draft PRs only. Linear IDs in the title. You still review and merge."
  - "Blockers get drafted in chat first. Nothing gets filed or shipped because a bot felt sure."
  - "Also ping you on start, block, PR opened, and idle. His developer opened a draft PR for three chat bugs, one commit, then went idle waiting on QA. The CEO had the status. He did not. The briefing is not enough."
tutorial:
  - title: "One CEO."
    body: "He routes. Specialists report to him."
  - title: "QA, dev, GitHub, Linear, bug queue."
    body: "Group rooms. You stay out of five chats."
  - title: "Draft PRs only."
    body: "Linear IDs in the title. You merge."
  - title: "Blockers stay in chat."
    body: "Nothing ships because a bot felt sure."
  - title: "Ping on start, block, PR, idle."
    body: "Do not wait for the CEO's briefing."
prompts:
  - title: "CEO plus QA plus dev"
    text: |
      I talk to you. You are the CEO. You own routing.

      Seats under you: QA, developer, GitHub, Linear lookup, bug queue. They report to you, not to me. Use group rooms so they can talk without me.

      QA hits the real staging URL. Same account. Same company. Every time.

      Developer: clone, fix, open draft PRs only. Linear IDs in the title. I review and merge.

      Blockers get drafted in chat first. Nothing gets filed or shipped because you felt sure.

      Ping me on start, block, PR opened, and idle. Do not wait to send a full briefing. Work can finish and sit.
    source: "Rewritten from https://x.com/montekkundan/status/2090535058738192519"
featured: false
---
