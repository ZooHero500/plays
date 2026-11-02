---
id: "marcoporro-omarchytv-voice-webhook"
title: "Testing OmarchyTV, I told my TV \"play a DHH video\" and Grok Bot just put one on in Cinemarchy 😂📺"
summary: "Wire a TV setup to your own Grok Bot webhook routine: say what to play, the bot picks a video and replies back through ntfy, even with the PC off."
category: "Engineering"
tags:
  - "webhook"
  - "tv"
  - "ntfy"
author: "Marco Porro"
authorHandle: "@MarcoPorro"
sourceUrl: "https://x.com/MarcoPorro/status/2116501384917061837"
date: "2026-10-31"
sourceDate: "2026-10-31"
audience: "You tinker with home media and want voice requests handled by your bot."
outcome: "\"play a DHH video\" put a video on in Cinemarchy."
commentary: "What's good: a webhook routine plus ntfy means no PC has to stay on. The catch: it depends on the OmarchyTV project and its setup doc, not a stock Grok Bot feature."
imageUrls: []
steps:
  - "Create a Grok Bot webhook routine."
  - "Have the TV call that webhook with your request."
  - "Let the bot reply via ntfy so the TV plays the pick."
  - "Follow the GROKBOT-DIRECT doc in the omarchytv repo for the wiring."
tutorial: []
prompts: []
featured: false
---
