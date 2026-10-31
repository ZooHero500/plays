---
id: "lukewarm-hero-eu-money-coach"
title: "In Europe, getting AI to read your bank account is weirdly hard."
summary: "Set up a Money Coach bot in Europe: it reads your bank through Enable Banking, logs every transaction to a Google Sheet each morning and sends a weekly coaching Page."
category: "Life"
tags:
  - "finance"
  - "budgeting"
  - "google-sheets"
author: "Lukewarm Hero"
authorHandle: "@lukewarm_hero"
sourceUrl: "https://x.com/lukewarm_hero/status/2115868195605409824"
date: "2026-10-29"
sourceDate: "2026-10-29"
audience: "You bank in the EU and want spending tracked without typing anything."
outcome: "A daily transaction sheet and a weekly coaching Page, read-only."
commentary: "What's good: the guide is free and read-only, and the bot never moves money. Keys go in as secrets, not pasted in chat."
imageUrls:
  - "https://pbs.twimg.com/media/HVzcxjtW0AAsbZE.jpg"
steps:
  - "Create a Grok Bot called Money Coach that only reads your bank data and never moves money."
  - "Sign up at Enable Banking and create an application; let the bot walk you through the settings."
  - "Have the bot ask for the application ID and private key as secrets."
  - "Approve access in your bank app."
  - "The bot drops every transaction into a Google Sheet each morning."
  - "Once a week it turns that into a short coaching Page."
tutorial: []
prompts:
  - title: "Make the bot"
    text: "Create a new Grok Bot called Money Coach. Its job is to track my spending from my bank account, keep it in a Google Sheet, and coach me once a week on where my money went. It only ever reads my bank data. It never moves money."
    source: "https://x.com/lukewarm_hero/status/2115868195605409824"
  - title: "Enable Banking setup"
    text: "I'm setting up Enable Banking so you can read my bank account. Walk me through creating an application in their control panel one step at a time, and tell me which settings to pick for personal use."
    source: "https://x.com/lukewarm_hero/status/2115868195605409824"
  - title: "Keys as secrets"
    text: "Ask me for my Enable Banking application ID and private key as secrets and save them so you can use them later. Never show them in the chat."
    source: "https://x.com/lukewarm_hero/status/2115868195605409824"
featured: false
---
