---
id: "azumimusuhi-local-merge"
title: "Say the repo name. Merge it back to the desk."
summary: "Tell the orchestrator the local repo. It opens the folder, runs a cloud agent, and merges the result onto your machine."
category: "Engineering"
tags:
  - "cloud-agent"
  - "local"
  - "merge"
author: "伊藤貴將"
authorHandle: ""
sourceUrl: "https://note.com/azumimusuhi/n/n0485219790bb"
date: "2026-08-16"
audience: "People who already code in a local folder and are tired of remote agents that only bring a patch back."
outcome: "One spoken name. The repo opens. Implementation continues. The merge lands on the desk."
commentary: "What's good: the job is the same motion you already do. The catch: local reach is not wide open. Keep the ask narrow: this repo, this change, then merge."
cover: "/assets/covers/promptway-overnight-job.png"
imageUrls: []
steps:
  - "Talk to an orchestrator on the desktop app. Say the local repository name out loud. Ask it to open that folder. His run opened it."
  - "Ask it to continue the implementation. It started a Cursor cloud agent from there. You do not paste the diff into a new chat."
  - "When the run finishes, have it merge back onto the local machine. That whole chain is what landed for him."
  - "Keep the ask visible. One repo. One continuation. Local work still waits for you if the setting is confirm each time. Do not hand the whole disk."
tutorial:
  - title: "Say the local repo name."
    body: "On the desktop app. Ask the orchestrator to open that folder."
  - title: "Ask it to continue the implementation."
    body: "A cloud agent starts from that repo. You stay in one thread."
  - title: "Merge back onto the desk."
    body: "The finished work lands in the same folder."
  - title: "Keep the ask narrow."
    body: "This repo. This change. Not the whole machine."
prompts:
  - title: "Open this repo"
    text: |
      Open the local repository named [repo]. Continue the implementation that is already in progress.

      When the cloud agent finishes, merge the result back into that folder. Do not touch other repos.
    source: "Rewritten from 安曇むすひ / note.com"
featured: false
---
