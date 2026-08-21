---
id: "bcharleson-gtm-outbound"
title: "Hand the bot a GTM repo, then approve the sends"
summary: "Give the bot the outbound playbook. It interviews you, builds the list, and drafts Instantly and HeyReach. You turn send on."
category: "Growth"
tags:
  - "GTM"
  - "outbound"
  - "instantly"
author: "bcharleson"
authorHandle: ""
sourceUrl: "https://github.com/bcharleson/grokbot-for-gtm"
date: ""
audience: "People who already have Instantly or HeyReach and an ICP, and do not want to paste CLI commands into chat."
outcome: "A motion you can approve: company file filled, list in, draft campaigns, then email and LinkedIn after you say go."
commentary: "What's good: the numbered motion is already written. The catch: you still bring the list, the inboxes, and the yes on every live send."
cover: "/assets/covers/eric-outbound-voice.png"
imageUrls: []
steps:
  - "Put github.com/bcharleson/grokbot-for-gtm on the bot computer. Copy company.example.md to company.md and fill your ICP. Keys stay in .env. Neither file is committed."
  - "Paste SETUP-PROMPT.md to a new bot. It reads AGENTS.md, runs the setup check, and interviews you in batches. It must not invent proof or metrics."
  - "Let it read company.md back. You say it is correct before it touches a sequencer."
  - "List 25 to 100 people from a file or a source you named. Draft Instantly. Optional HeyReach on the same people. Replies stay drafts."
  - "You activate campaigns. You approve live replies. Daily ops: unread inbox, pause duds, Monday scoreboard. Done looks like meetings on a calendar, not a green CLI."
tutorial:
  - title: "Put the playbook on the bot computer."
    body: "Fill company.md. Keys in .env. Do not commit either."
  - title: "Paste the setup prompt."
    body: "It checks the machine, then interviews you. No invented proof."
  - title: "Hear the company file back."
    body: "You say it is correct before any sequencer."
  - title: "Draft the motion."
    body: "List, Instantly, optional HeyReach. Replies stay drafts."
  - title: "You turn send on."
    body: "Meetings on the calendar you already use."
prompts:
  - title: "Setup prompt"
    text: |
      You are my outbound GTM operator. Working directory: the grokbot-for-gtm repo on this computer.

      Read AGENTS.md and follow it. Run the setup check. Report which tools and env vars are present, not their values.

      Interview me with playbooks/00-intake.md, one batch at a time. Write answers into company.md. Do not invent ICP, proof, tools, or metrics.

      Read company.md back. Wait until I say it is correct. Then check Instantly or HeyReach health.

      If I have no list, use only the data source I named. Ask before spending enrich credits.

      Do not activate Instantly or start HeyReach until I say so. Do not send live replies until I say so.
    source: "Rewritten from https://github.com/bcharleson/grokbot-for-gtm/blob/main/SETUP-PROMPT.md"
featured: false
---
