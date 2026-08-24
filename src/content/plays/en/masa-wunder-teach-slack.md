---
id: "masa-wunder-teach-slack"
title: "Grok Bot の使い方と実機レビュー。AI に専用クラウド PC を渡せる時代が来た"
summary: "Record a short search-to-list. Then fire a test-channel Routine that replies with a pun and waits."
category: "Life"
tags:
  - "teach-a-task"
  - "slack"
  - "routine"
author: "まさお"
authorHandle: ""
sourceUrl: "https://note.com/masa_wunder/n/na9744c486976"
date: ""
audience: "You want one recorded skill and one event loop, not a review of the product."
outcome: "A saved search skill, plus a Slack test-channel Routine that replies and goes back to wait."
commentary: "What's good: both loops are small enough to fail safely. The catch: this started as a first-day review. Keep the teach and the pun. Skip the rest of the recap."
cover: "/assets/covers/official-teach-routine.png"
imageUrls: []
steps:
  - "Make one bot and give it a narrow job: which screen, how far. Masa found the value when he stopped adding bots and picked one path."
  - "Open Teach a task. Name a short job, something like browser search to a candidate list. Do that path once in the bot's browser. Stop. The skill should land under Yours."
  - "Keep the first skill to one job. Search, pick a few items, stop. Do not record a long path that mixes several tools."
  - "On a test Slack channel, not a production one, create a Routine: new message is the trigger. Tell the bot to read the message and reply with a short pun."
  - "Send a test message. The reply should land in the channel and the bot should go back to wait. If the next message repeats the loop, the Routine holds."
tutorial:
  - title: "Pick one bot and one screen."
    body: "Narrow first. Adding seats comes later."
  - title: "Record a short search-to-list."
    body: "Name it. Demo it. Stop. Find it under Yours."
  - title: "Do not record a long path."
    body: "One job. Failures stay easy to see."
  - title: "Put the Routine on a test channel."
    body: "New Slack message. Short pun. Wait."
  - title: "Run the loop once."
    body: "Reply lands. Bot waits. Next message repeats it."
prompts:
  - title: "Pun Routine"
    text: |
      Read the Slack message. Reply with a short pun. Then wait.
    source: "Rewritten from note.com/masa_wunder"
featured: false
---
