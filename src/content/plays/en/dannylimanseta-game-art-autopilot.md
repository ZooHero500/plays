---
id: "dannylimanseta-game-art-autopilot"
title: "Scan the placeholders, then put card art on autopilot"
summary: "Danny Limanseta pointed the bot at his art tool and his codebase. It wrote a prompt per asset, cropped 74 transparent PNGs, and wired them back into the game."
category: "Engineering"
tags:
  - "game-art"
  - "playtest"
  - "itch"
author: "Danny Limanseta"
authorHandle: "@DannyLimanseta"
sourceUrl: "https://x.com/DannyLimanseta/status/2087228218797617404"
date: ""
audience: "You are shipping a game and still replacing placeholders one card at a time."
outcome: "Clean card art in the game, a playtest skill that knows the rules, an itch page that takes a GitHub push, and PRD wireframes in Figma."
commentary: "What's good: he stopped hand-making each asset. The catch: the first playtest pass was slow until he taught a skill, and the newsletter sweep still missed a few lists."
cover: "/assets/covers/debbie-coding-github.png"
imageUrls:
  - "https://pbs.twimg.com/amplify_video_thumb/2087227489273917440/img/9z4XWQkaJonjaOPM.jpg"
steps:
  - "Point the bot at your custom art tool and at the game repo. Ask it to replace every image placeholder."
  - "Let it read the codebase so it knows what each asset is. It writes a custom generation prompt per card, makes the image, crops it to a transparent PNG, and wires it back in. Danny got 74 cleaned card assets in about two hours."
  - "Teach a playtest skill next. His first pass was slow. He asked for a skill that already knew the rules and mechanics, then ran it again."
  - "For the itch page, have it put a new build up whenever you push to GitHub. Skip the manual website trip each time."
  - "If you have a PRD, hand it over and ask for UX flows and wireframes. He used the Figma MCP and it delivered. Paid-sub hunts and newsletter cleanup can wait until the art loop works."
tutorial:
  - title: "Point it at the art tool and the repo."
    body: "Replace every image placeholder. No one-off cards."
  - title: "One prompt per asset, then wire it back."
    body: "Generate, crop to a transparent PNG, put it in the game."
  - title: "Teach a playtest skill."
    body: "Rules and mechanics in the skill. Then run it again."
  - title: "Push to GitHub, land on itch."
    body: "A new build should not need a manual website trip."
  - title: "Hand over the PRD for Figma."
    body: "UX flows and wireframes. Subs and newsletters later."
prompts:
  - title: "Card art loop"
    text: |
      Open my custom art tool. Read the game codebase and list every image placeholder.

      For each one, write a generation prompt that matches what the card is, make the art, crop it to a clean transparent PNG, and put it back in the game.

      Come back with a count of assets replaced. Do not skip a placeholder.
    source: "Rewritten from https://x.com/DannyLimanseta/status/2087228218797617404"
  - title: "Playtest skill"
    text: |
      Build a playtest skill for this game. Learn the rules and mechanics first.

      Then play. Note what is confusing, what is broken, and what a new player would miss.

      Keep the skill so the next pass is faster.
    source: "Rewritten from https://x.com/DannyLimanseta/status/2087228218797617404"
featured: false
---
