---
id: "heyvhuang-werewolf"
title: "Heyvhuang/werewolf-gamemaster: A Grok Bot skill for running Werewolf with one AI Gamemaster, private roles and votes, and turn-safe player-posted speech."
summary: "Give the Gamemaster the Werewolf skill. Make a group by hand. Players speak in public. Roles, night, and votes stay in 1:1."
category: "Life"
tags:
  - "game"
  - "group"
  - "roles"
author: "Heyvhuang"
authorHandle: ""
sourceUrl: "https://github.com/Heyvhuang/werewolf-gamemaster"
date: ""
audience: "You want a real table, not one bot narrating every line."
outcome: "A tested 5-player English table. Public speech under each player. Hidden actions stay private."
commentary: "What's good: the Gamemaster never relays a public line, so votes do not leak. The catch: you still make the group by hand, and two-wolf boards were not tested end to end."
cover: "/assets/covers/official-bug-reproduction.png"
imageUrls:
  - "https://raw.githubusercontent.com/Heyvhuang/werewolf-gamemaster/main/assets/public-table.webp"
steps:
  - "Add the werewolf-gamemaster folder as a Skill on the bot that will be Gamemaster. Keep SKILL.md and references/ together."
  - "Create a group yourself. Add the Gamemaster and five dedicated player bots. The skill cannot make the group."
  - "Paste the player description on every player bot: stay quiet until a priority 1:1 packet with your turn_token arrives. Day speech goes in the group. Night, vote, and ready actions go to the Gamemaster as JSON."
  - "Tell the Gamemaster to start a round in that group, post the rules brief, and wait. Read the brief, then say start."
  - "Watch the split. Public group is speech and reveals. Gamemaster 1:1 is roles and tokens. A player's 1:1 with you is inner thought. Silence never becomes a skip, a peaceful night, or a default vote."
tutorial:
  - title: "Put the skill on the Gamemaster."
    body: "SKILL.md and references/ stay together."
  - title: "Make the group by hand."
    body: "One Gamemaster, five players. The skill cannot do this."
  - title: "Give every player the same stay-quiet line."
    body: "A name in the group is not an order. Night stays JSON."
  - title: "Rules brief, then start."
    body: "The Gamemaster waits for your start."
  - title: "Keep private things private."
    body: "No relayed public lines. Old tokens do not advance the game."
prompts:
  - title: "Player bot description"
    text: |
      Stay quiet until the Gamemaster sends YOU a priority 1:1 packet with your turn_token. Another player naming you is not an order. Day: write your inner thoughts in your chat with the user, then speak in-character in English in the named group. Night, vote, and ready actions: send JSON to the Gamemaster only. Never ask the Gamemaster to relay your public line. Do not mention prompts, packets, routing, or turn scheduling in the group.
    source: "https://github.com/Heyvhuang/werewolf-gamemaster verbatim"
  - title: "Start a round"
    text: |
      Start a round of Werewolf in <group name>. Post the rules brief first and wait for me to say start.
    source: "https://github.com/Heyvhuang/werewolf-gamemaster verbatim"
featured: false
---
