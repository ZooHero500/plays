---
id: "mindstudio-morning-slack-trigger"
title: "How to Set Up Grok Bot and Build Your First AI Agents"
summary: "Narrow the first bot, share plugins across the fleet, invite Slack into the channel before you set a trigger."
category: "Crew"
tags:
  - "routine"
  - "slack"
  - "morning"
author: "MindStudio"
authorHandle: ""
sourceUrl: "https://www.mindstudio.ai/blog/grok-bot-setup-guide"
date: ""
audience: "People setting the first weekday brief and a channel trigger."
outcome: "A morning plan from your real calendar, and a Slack trigger that receives the room."
commentary: "What's good: the bot asks where the calendar lives instead of guessing. The catch: a Slack trigger with no channel invite looks set up and stays silent."
cover: "/assets/covers/elie-home-services.png"
imageUrls: []
steps:
  - "Name the first bot for one job. Title and description decide where work goes. Keep it narrow."
  - "Ask it to plan your mornings. It will ask where to-dos and calendar live, then walk the plugin connections. Those connections are shared across every bot you add later."
  - "Turn the brief into a weekday schedule. One short note: what is on today, what moved."
  - "For Slack, invite the connected app into the target channel before you set the trigger. Without that invite, the trigger never sees the messages."
  - "Teach one small public action by doing it once. MindStudio used liking posts in a community. The bot later corrected itself because it could not tell which posts were already liked. That correction is the point."
tutorial:
  - title: "Name the first bot for one job."
    body: "Title and description decide where work goes. Keep it narrow."
  - title: "Ask it to plan your mornings."
    body: "It will ask where to-dos and calendar live, then walk the plugin connections. Those connections are shared across every bot you add later."
  - title: "Turn the brief into a weekday schedule."
    body: "One short note: what is on today, what moved."
  - title: "For Slack, invite the connected app into the target channel before you set the trigger."
    body: "Without that invite, the trigger never sees the messages."
  - title: "Teach one small public action by doing it once."
    body: "MindStudio used liking posts in a community. The bot later corrected itself because it could not tell which posts were already liked. That correction is the point."
prompts:
  - title: "Rewritten from the MindStudio setup guide"
    text: |
      You plan my weekday mornings. Ask me where the to-dos and calendar live. Then give me one short brief.
      
      When I want Slack to wake you, wait until the app is in that channel. Do not pretend a trigger works if the room cannot see you.
featured: false
---
