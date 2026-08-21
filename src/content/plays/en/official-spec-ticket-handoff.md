---
id: "official-spec-ticket-handoff"
title: "Write it in Notion, open it in Linear"
summary: "A bot writes the request back into Notion and opens the ticket in Linear, where the work already lives."
category: "Official"
tags:
  - "Notion"
  - "Linear"
  - "handoff"
author: "xAI"
authorHandle: ""
sourceUrl: "https://x.ai/news/introducing-grok-bot"
date: ""
audience: "Your work already lives in Notion and Linear. You do not want a cold-start chat."
outcome: "A write-back in Notion and a ticket in Linear, linked to the request."
commentary: "What's good: the work stays where it already lives. The catch: a sloppy write-back still creates a real ticket, so you read it before anyone builds."
cover: "/assets/covers/official-internal-handoffs.png"
imageUrls: []
steps:
  - "Tell the bot to write this request back into Notion, in the place the specs already live."
  - "Have it open the ticket in Linear on the team or project that already owns the work."
  - "Link the write-back and the ticket to the original request, so nobody starts from a blank session."
  - "You still read what it wrote. Creating the ticket is the job on the launch page. Reviewing it is yours."
tutorial:
  - title: "Write the request back into Notion."
    body: "In the spec space you already use."
  - title: "Open the Linear ticket on the owning team."
    body: "Not a new pile."
  - title: "Link both to the original request."
    body: "Nobody cold-starts a session."
  - title: "Read it before anyone builds."
    body: "The ticket is real the moment it lands."
prompts:
  - title: "Rewritten from the xAI launch page"
    text: |
      Write this request back into Notion, in the spec space we already use.

      Open the ticket in Linear on the team that already owns the work. Link both to this request.

      Nobody should have to cold-start a session.
    source: "Rewritten from the xAI launch page"
featured: false
---
