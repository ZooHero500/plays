---
id: "therookiehacker-claude-code-hooks-webhook"
title: "Setting up Claude code hooks that ping Grok Bot through a webhook has effectively removed me from the developer process completely."
summary: "Add Claude Code hooks that call a Grok Bot webhook whenever a session asks a question or finishes, so the bot jumps in right away and carries the task to a PR."
category: "Engineering"
tags:
  - "claude-code"
  - "webhooks"
  - "coding"
author: "Reuben"
authorHandle: "@therookiehacker"
sourceUrl: "https://x.com/therookiehacker/status/2117388722505466297"
date: "2026-11-02"
sourceDate: "2026-11-02"
audience: "Your bots manage Claude Code sessions and you keep checking whether they're stuck."
outcome: "Sessions no longer sit waiting; the bot picks up questions and finished runs and takes them to PR."
commentary: "What's good: one small change ends the every-10-minutes status checks. The catch: the post doesn't share the hook config, so you set up the webhook yourself."
imageUrls: []
steps:
  - "Set up a webhook trigger for your bot."
  - "Add Claude Code hooks that ping that webhook when a session asks a question."
  - "Add another hook for when a session ends."
  - "Let the bot answer or continue the session as soon as it's pinged and carry the task through to a PR."
tutorial: []
prompts: []
featured: false
---
