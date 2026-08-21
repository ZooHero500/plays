---
id: "galleon-hypergrok-desk"
title: "A 7-bot Hyperliquid desk"
summary: "Stand up Desk Lead, two analysts, Strategist, Risk, one Execution Trader, and a Reviewer. Idea, evidence, risk, your approve, one send."
category: "Growth"
tags:
  - "trading"
  - "approval"
  - "review"
author: "Galleon Labs"
authorHandle: ""
sourceUrl: "https://github.com/galleonlabs/hypergrok-trading-desk"
date: ""
audience: "You want research, size, send, and review as separate seats, not one bot with the keys."
outcome: "A Trading Floor group, one sender, and a ticket you approve by id before anything hits the book."
commentary: "What's good: six bots read and one bot sends, once, after you type the ticket id. The catch: perps can wipe an account. Start on testnet. This is not advice."
cover: "/assets/covers/eric-community-ops.png"
imageUrls: []
steps:
  - "Tell any bot to follow https://github.com/galleonlabs/hypergrok-trading-desk/blob/main/SETUP.md from top to bottom. It creates the seven bots, the Trading Floor group, and the skills."
  - "Name the seats: Desk Lead is the only chat you keep open. Market Analyst pulls live book data. Research Analyst owns news and catalysts. Strategist writes rules and backtests. Risk Manager can say no. Execution Trader is the only sender. Trade Reviewer journals by DM."
  - "Every idea follows the same path: evidence, risk sign-off, your approval, one send, reconciliation, review. Six sit in the group. The reviewer stays in DM."
  - "When you want a trade, the Desk Lead opens a ticket. Risk sizes it from the live account. You approve by ticket id. The trader sends entry and stop once, then reads the exchange record back."
  - "Start in research mode. Rehearse new actions with play money. A trade-only wallet is the only key the desk should hold, and it cannot withdraw. You still take every send."
tutorial:
  - title: "Follow SETUP.md and finish the receipt."
    body: "Seven bots, one Trading Floor group, skills installed."
  - title: "Keep Desk Lead as the front door."
    body: "Six in the group. Reviewer in DM. One writer."
  - title: "Force the same path."
    body: "Idea, evidence, risk, your approve, one send, review."
  - title: "Approve by ticket id."
    body: "See the exact order. The trader sends once and reconciles."
  - title: "Play money first."
    body: "New actions stay off mainnet until the path is boring."
prompts:
  - title: "Stand the desk"
    text: |
      Set up the HyperGrok trading desk from https://github.com/galleonlabs/hypergrok-trading-desk/blob/main/SETUP.md. Follow that file from top to bottom, create the seven Bots and the Trading Floor group chat, install the skills, and finish with the receipt it asks for.
    source: "https://github.com/galleonlabs/hypergrok-trading-desk verbatim"
  - title: "Approve a ticket"
    text: |
      approve HG-20260816-01
    source: "https://github.com/galleonlabs/hypergrok-trading-desk verbatim"
featured: false
---
