---
id: "kunchenguid-grok-ship"
title: "kunchenguid/grok-ship: Turn your Grok Bot into a software factory."
summary: "Point a bot at GROK_SHIP.md. After that you talk only to Firstmate. Scout writes a report. Ship opens a PR after review. You merge."
category: "Engineering"
tags:
  - "factory"
  - "scout"
  - "review"
author: "kunchenguid"
authorHandle: ""
sourceUrl: "https://github.com/kunchenguid/grok-ship"
date: ""
audience: "You want standing software work, not one overloaded coding chat."
outcome: "A local backlog, per-project crewmates, and a PR only after adversarial review. You still merge."
commentary: "What's good: scout never opens a PR, and no bot merges on its own. The catch: this is a factory. You still have to name the project and say merge."
cover: "/assets/covers/jesse-multi-repo.png"
imageUrls: []
steps:
  - "Tell any bot to follow https://github.com/kunchenguid/grok-ship/blob/main/GROK_SHIP.md. That stands the factory up on the shared computer and hands you Firstmate."
  - "Talk only to Firstmate after that. File work as scout or ship. Scout is investigation. The deliverable is a report, never a PR."
  - "Ship is authorized change. A per-project crewmate drives a Cursor cloud agent. Promoting a scout flips the same task row instead of opening a duplicate."
  - "After a ship branch is pushed, a fresh adversarial review reads it through the project's forge CLI. No pull request until that pass is clean."
  - "You merge, and only on your word. Never while checks are red. The factory detects GitHub, GitLab, Bitbucket, or Cursor Origin. Do not assume GitHub."
tutorial:
  - title: "Stand the factory up, then talk to Firstmate."
    body: "Follow GROK_SHIP.md. After that, Firstmate is the only chat."
  - title: "File scout or ship."
    body: "Scout is a report. Ship is a change. Promoting a scout flips the same row."
  - title: "Let a project crewmate drive the cloud agent."
    body: "One crewmate per project. Software does not run on your laptop."
  - title: "Review before any PR."
    body: "A fresh pass reads the branch. No pull request until it is clean."
  - title: "You merge."
    body: "Never while checks are red. Name the forge you actually use."
prompts:
  - title: "Stand the factory"
    text: |
      follow https://github.com/kunchenguid/grok-ship/blob/main/GROK_SHIP.md
    source: "https://github.com/kunchenguid/grok-ship verbatim"
  - title: "A ship request"
    text: |
      look at my project xyz, then fix the flaky login test
    source: "https://github.com/kunchenguid/grok-ship verbatim"
featured: false
---
