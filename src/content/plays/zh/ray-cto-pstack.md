---
id: "ray-cto-pstack"
title: "把 Grok Bot 当成 CTO"
summary: "一个主 bot 管仓库，再招下属。你只跟主 bot 说话。"
category: "编制"
tags:
  - "CTO"
  - "pstack"
  - "poteto-mode"
  - "cloud agent"
  - "PR"
  - "过夜"
author: "Ray Fernando"
authorHandle: "@RayFernando1337"
sourceUrl: "https://x.com/RayFernando1337/status/2090195841822998888"
date: "2026-08-19"
audience: "一个人写代码，还要自己盯 PR、开 agent、合流。想少当调度。"
outcome: "仓库有个主 bot 当 CTO。它开 cloud agent、跟 PR。忙不过来再招人。你还是只跟它说话。"
commentary: "好在哪：你不用再当调度，实现和跟 PR 都从这一条对话出去。坑在哪：一个 bot 记不住所有事，活一多就要分组，额度也会烧得很快。"
cover: "https://pbs.twimg.com/media/HQHcxfza4AEDHqh.jpg"
imageUrls:
  - "https://pbs.twimg.com/media/HQHcxfza4AEDHqh.jpg"
  - "https://pbs.twimg.com/media/HQHYjeracAA1a34.png"
  - "https://pbs.twimg.com/media/HQHY-rCaoAAm4pG.jpg"
  - "https://pbs.twimg.com/media/HQHZOj4bIAA6o3E.jpg"
  - "https://pbs.twimg.com/media/HQHabOubYAAvBx1.png"
  - "https://pbs.twimg.com/media/HQHaxVVbgAAv-T4.jpg"
steps:
  - "Ray 管自己那个叫 Clippy Agent。简介写成这个仓库的 Direct Responsible Agent，不是通用助手。"
  - "贴上 GitHub 仓。让它装 pstack，把 poteto-mode 的指南读完。你确认它知道何时开跑、如何跟 PR。"
  - "新想法、修 bug、QA、合流，都丢给它。实现它去做，它再开 cloud agent。"
  - "活多到一个 bot 记不住时，让它招下属。下属向它汇报，不要直接找你。"
  - "侧栏里分组。先少开任务。Ray 说这套很容易烧额度，也容易上瘾。"
tutorial:
  - title: "建一个跟项目同名的 bot"
    body: "Ray 管自己那个叫 Clippy Agent。简介写成这个仓库的 Direct Responsible Agent，不是通用助手。"
  - title: "把仓库交给它，让它自己读 pstack"
    body: "贴上 GitHub 仓。让它装 pstack，把 poteto-mode 的指南读完。你确认它知道何时开跑、如何跟 PR。"
  - title: "只在这一条对话里派活"
    body: "新想法、修 bug、QA、合流，都丢给它。实现它去做，它再开 cloud agent。"
  - title: "它跟丢了，再让它招人"
    body: "活多到一个 bot 记不住时，让它招下属。下属向它汇报，不要直接找你。"
  - title: "按项目把 bot 分开"
    body: "侧栏里分组。先少开任务。Ray 说这套很容易烧额度，也容易上瘾。"
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

