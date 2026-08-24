---
id: "ray-cto-pstack"
title: "Turn Grok Bot Into Your CTO"
summary: "One main bot owns the repo, then hires reports. You only talk to the main bot."
category: "Crew"
tags:
  - "cto"
  - "pstack"
  - "poteto-mode"
  - "cloud-agent"
  - "pr"
  - "overnight"
author: "Ray Fernando"
authorHandle: "@RayFernando1337"
sourceUrl: "https://x.com/RayFernando1337/status/2090195841822998888"
date: "2026-08-19"
audience: "You write the code and still watch PRs, spin agents, and merge yourself. You want less dispatch."
outcome: "The repo has a main bot as CTO. It implements, spins cloud agents, and follows PRs. When it cannot keep up, it hires. You still only talk to it."
commentary: "What's good: you stop being the dispatcher. Implementation and PR follow-up leave from this one thread. The catch: one bot cannot remember it all. More work means grouping, and it burns credits fast."
cover: "https://pbs.twimg.com/media/HQHcxfza4AEDHqh.jpg"
imageUrls:
  - "https://pbs.twimg.com/media/HQHcxfza4AEDHqh.jpg"
  - "https://pbs.twimg.com/media/HQHYjeracAA1a34.png"
  - "https://pbs.twimg.com/media/HQHY-rCaoAAm4pG.jpg"
  - "https://pbs.twimg.com/media/HQHZOj4bIAA6o3E.jpg"
  - "https://pbs.twimg.com/media/HQHabOubYAAvBx1.png"
  - "https://pbs.twimg.com/media/HQHaxVVbgAAv-T4.jpg"
steps:
  - "Ray named his Clippy Agent. Write the bio as the Direct Responsible Agent for this repo, not a general assistant."
  - "Hand it the GitHub repo. Have it set up pstack and read the poteto-mode guide. Confirm it knows when to run and how to follow PRs."
  - "Ideas, bugs, QA, and merge all go through this thread. It implements. It spins cloud agents."
  - "When one bot cannot remember it all, have it hire reports. Reports talk to it, not to you."
  - "Group them in the sidebar. Start few tasks. Ray says this burns credits and is addictive."
tutorial:
  - title: "Stand up a bot named after the project."
    body: "Ray named his Clippy Agent. Write the bio as the Direct Responsible Agent for this repo, not a general assistant."
  - title: "Hand it the repo. Have it read pstack itself."
    body: "Hand it the GitHub repo. Have it set up pstack and read the poteto-mode guide. Confirm it knows when to run and how to follow PRs."
  - title: "Dispatch only in this thread."
    body: "Ideas, bugs, QA, and merge all go through this thread. It implements. It spins cloud agents."
  - title: "When it loses the thread, have it hire."
    body: "When one bot cannot remember it all, have it hire reports. Reports talk to it, not to you."
  - title: "Split bots by project."
    body: "Group them in the sidebar. Start few tasks. Ray says this burns credits and is addictive."
prompts:
  - title: "首席 agent"
    text: |
      You are the chief agent in charge of managing [link to GitHub repo for agent to be in charge of]
      
      You are going to run the entire show. Spin up cloud agents, follow up on PRs, and you'll use the poteto-mode when necessary.
      
      Read the documentation for /poteto-mode so you'll be able to understand when to use it, how to kick off runs, close PRs, check on their status, read comments, and make sure the work converges.
      
      If you haven't installed pstack which has poteto-mode please reference these resources:
      https://cursor.com/marketplace/cursor/pstack
      https://github.com/cursor/plugins/tree/main/pstack
      
      Then help me setup stack and walk yourself through the guide so you know when to use pstack
      
      pstack Guide: https://github.com/cursor/plugins/blob/main/pstack/docs/guide/README.md
    source: "https://x.com/i/article/2088638901439414272 原文"
  - title: "招下属 bot"
    text: "It looks like you have a lot on your plate so I'm going to need you to spin up new Grok Bots that report to you and so they can help you ship software for this project. We haven't been able to stay on top of all of our requests so spin up new Grok Bots that will follow through and make the same determination of using pstack with cloud agents when necessary."
    source: "https://x.com/i/article/2088638901439414272 原文"
featured: true
---
