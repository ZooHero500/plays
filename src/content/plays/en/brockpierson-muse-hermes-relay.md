---
id: "brockpierson-muse-hermes-relay"
title: "After hitting Grok Bot's usage limits one too many times I went down the autonomous AI agent rabbit hole."
summary: "Connect Grok Bot, Muse and Hermes through one custom relay: Grok Bot over MCP, Muse over REST, Hermes as a third sender, with direct bridges where skipping the relay makes sense."
category: "Engineering"
tags:
  - "mcp"
  - "multi-agent"
  - "muse"
  - "hermes"
author: "Brock Pierson"
authorHandle: "@brockpierson"
sourceUrl: "https://x.com/brockpierson/status/2119969288811397227"
date: "2026-11-10"
sourceDate: "2026-11-10"
audience: "You run agents from different companies and they cannot hand work to each other."
outcome: "Author reports $0/month infrastructure on free tiers, with the agents passing content research, website and subscription work to each other."
commentary: "What's good: MCP where it fits, REST where it does not. The catch: you build and maintain the relay, and the free tiers and subscriptions carry the real cost."
imageUrls: []
steps:
  - "Build a custom relay all agents can reach."
  - "Connect Grok Bot to the relay over MCP."
  - "Connect Muse over REST."
  - "Add Hermes as a third sender on the relay, running 24/7 on a free Oracle Cloud VM."
  - "Add direct bridges between agents when going around the relay is simpler."
tutorial: []
prompts: []
featured: false
---
