---
id: "abdurrahmanregi-remote-machine-monitor"
title: "this is so far how i do it:"
summary: "Leave a well-specced machine on with SSH and Tailscale, have the bot confirm it can work there, then let it monitor long test runs and hand heavy fixes to local coding agents while you are away."
category: "Engineering"
tags:
  - "remote"
  - "tailscale"
  - "monitoring"
author: "Regi Kusumaatmadja"
authorHandle: "@abdurrahmanregi"
sourceUrl: "https://x.com/abdurrahmanregi/status/2121719487426617452"
date: "2026-11-14"
sourceDate: "2026-11-14"
audience: "You want a physical machine to keep running tests and fixes after you leave."
outcome: "The machine keeps running regressions and fixes overnight, with the bot watching memory and passing heavy work to other coding agents."
commentary: "What's good: a concrete remote loop—access, monitor, delegate, and a night window where it should not stop to ask. The catch: it needs a machine you leave on, Tailscale or SSH, and you should still review what it changes."
imageUrls: []
steps:
  - "Leave a computer on in a place with stable power and internet."
  - "Set up OpenSSH and Tailscale on it, including the Tailscale plugin for the bot, so you can reach it from other machines."
  - "Ask the bot to confirm it can use the machine, including the terminal and other apps."
  - "Give it a list of fixes, tests and checks; start the heavy regressions and ask it to monitor memory and odd behavior."
  - "When you are away, have it pass heavy investigation and fixes to local agents such as Grok Build, Cursor or Claude Code, then read their reports."
  - "Tell it not to wait for permission on machine work during hours when you are asleep."
tutorial: []
prompts: []
featured: false
---
