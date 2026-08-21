---
id: "official-pr-ci-triage"
title: "Watch PRs, only pull humans for real calls"
summary: "A bot watches open PRs, checks red CI and review-bot comments against intent, and leaves flaky noise off the human."
category: "Official"
tags:
  - "PR"
  - "CI"
  - "triage"
author: "xAI"
authorHandle: ""
sourceUrl: "https://x.ai/news/introducing-grok-bot"
date: ""
audience: "You have open PRs and you do not want flaky red to page an engineer."
outcome: "Humans only see the calls that need a real decision."
commentary: "What's good is the human only shows up for judgment. The catch is a bot that cannot tell flake from intent will either hide a real break or cry wolf."
cover: "/assets/covers/debbie-linkedin.png"
imageUrls: []
steps:
  - "Point the bot at the open PRs and tell it to watch them."
  - "Have it check each red CI run and each review-bot comment against the intent of that PR."
  - "Keep flaky environment failures and things already fixed on main in its own notes. Those do not page anyone."
  - "Ping a person only when a real decision is left. The launch page used its own demo PR counts on this card. Ignore those numbers."
tutorial:
  - title: "Point the bot at the open PRs and tell it to watch them."
    body: "Point the bot at the open PRs and tell it to watch them."
  - title: "Have it check each red CI run and each review-bot comment against the intent of that PR."
    body: "Have it check each red CI run and each review-bot comment against the intent of that PR."
  - title: "Keep flaky environment failures and things already fixed on main in its own notes."
    body: "Those do not page anyone."
  - title: "Ping a person only when a real decision is left."
    body: "The launch page used its own demo PR counts on this card. Ignore those numbers."
prompts:
  - title: "Rewritten from the xAI launch page"
    text: |
      Watch the open PRs.
      
      Check red CI and review-bot comments against the intent of each PR. Keep flaky environment noise, and anything already fixed on main, off the human.
      
      Ping me only when a real decision is left. Do not merge.
featured: false
---
