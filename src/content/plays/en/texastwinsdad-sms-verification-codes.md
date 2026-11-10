---
id: "texastwinsdad-sms-verification-codes"
title: "Grok Bot no longer stops and waits for me when a site texts a verification code."
summary: "With the Messages connector the bot can read the text that carries a login code and enter it itself, so a workflow does not stall waiting for you."
category: "Engineering"
tags:
  - "messages"
  - "verification"
  - "workflows"
author: "Texas Twins Dad"
authorHandle: "@Texas_Twins_Dad"
sourceUrl: "https://x.com/Texas_Twins_Dad/status/2119946312733045059"
date: "2026-11-10"
sourceDate: "2026-11-10"
audience: "Your bot workflows hit logins that text a code to your phone number."
outcome: "The bot reads the code from your messages and continues the run without you stepping in."
commentary: "What's good: removes one of the most common reasons an unattended workflow stops. The catch: you are giving the bot access to your texts, which carry codes for everything, so scope it deliberately."
imageUrls: []
steps:
  - "Connect the Messages connector."
  - "Run the workflow that logs into a site."
  - "When the site texts a code to your number, let the bot read it and enter it."
  - "Keep track of which workflows you let read your messages."
tutorial: []
prompts: []
featured: false
---
