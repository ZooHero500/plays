---
id: "official-feature-requests"
title: "Who asked for what, tied to a customer"
summary: "A bot mines Slack and calls for who asked for what, then keeps a living list tied to customers."
category: "Official"
tags:
  - "features"
  - "Slack"
  - "demand"
author: "xAI"
authorHandle: ""
sourceUrl: "https://x.ai/news/introducing-grok-bot"
date: ""
audience: "You write specs and you want a real demand trail, not a vibe."
outcome: "A living list of who asked for what, tied to customers, sitting under the spec."
commentary: "What's good is the trail. The catch is a list that is not tied to a customer turns back into a pile of Slack quotes."
cover: "/assets/covers/official-pipeline-ops.png"
imageUrls: []
steps:
  - "Point the bot at the Slack channels and the call notes, and ask it who asked for what."
  - "Have it merge repeats by person and by customer. Each row keeps the asker, the original words, and where they were said."
  - "Tie every row to a customer record. The list is living. It does not rewrite the roadmap."
  - "Put the list where the spec already lives, so the next write-up starts from demand, not from a cold chat."
tutorial:
  - title: "Mine Slack and call notes."
    body: "Who asked for what."
  - title: "Merge repeats. Keep the original words."
    body: "Asker, quote, source."
  - title: "Tie each row to a customer."
    body: "The list does not rewrite the roadmap."
  - title: "Park the list under the spec."
    body: "The next write-up starts from demand."
prompts:
  - title: "Rewritten from the xAI launch page"
    text: |
      Mine Slack and the call notes for who asked for what.

      Build a living list. Each row is an asker, the original words, the source, and the customer it belongs to.

      Do not rewrite the roadmap. Keep the list tied to customers so a spec can carry a demand trail.
    source: "Rewritten from the xAI launch page"
featured: false
---
