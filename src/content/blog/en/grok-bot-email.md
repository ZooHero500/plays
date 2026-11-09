---
title: "Grok Bot email: how to claim your Bot's address and what it can do (checked Nov 9, 2026)"
description: "How Grok Bot email works, from the official docs: claiming a mail.grokbot.com address, name rules, plus aliases, reading mail, email routines, sending rules, limits, and errors."
slug: "grok-bot-email"
date: 2026-11-09
---

# Grok Bot email: claim your Bot's address and put it to work

Grok Bot can have its own email address at `mail.grokbot.com`, such as `yourname@mail.grokbot.com`. To get one, ask a Bot "Get yourself an email address", pick a name, and approve the card. You get one address, for good. You can't rename or delete it ([Cursor help](https://cursor.com/help/grok-bot/agent-email), [xAI docs](https://docs.x.ai/grok-bot/computer-and-apps)).

_Last checked 2026-11-09._

> **Every play links to its source.** Most plays link to the X post they came from; others link to GitHub, LinkedIn, YouTube, x.ai, a blog, or similar. Open the source to check the original before you copy a setup.

Plays is an unofficial directory of Grok Bot setups, not affiliated with xAI or Cursor. Product details below come from the linked official docs. Anything we could not confirm there is marked **unverified**.

## What the Bot's email address is for

This is the Bot's own inbox, separate from your Gmail or Outlook. With it, a Bot can ([Cursor help](https://cursor.com/help/grok-bot/agent-email)):

- Sign up for services and pick up the verification code or link, with your OK.
- Collect receipts, newsletters, and reports, and summarize them for you.
- Draft email for you, such as a digest or an update, and draft replies.
- Forward an email with its original formatting, images, and attachments. This needs Grok Bot 0.75.2 or later.
- Run a routine when email arrives, optionally only from specific senders.

The feature started rolling out on October 9, 2026, according to [9to5Mac](https://9to5mac.com/2026/10/09/grok-bot-just-got-its-own-email-address-heres-how-to-claim-yours/).

## How to claim your address

Two ways ([Cursor help](https://cursor.com/help/grok-bot/agent-email)):

1. **Ask a Bot.** Say "Get yourself an email address." It asks for a name, checks that it's free, and shows an approval card. Nothing is claimed until you approve.
2. **Use the Email app.** On desktop, open **Connect apps** in the sidebar and choose **Email**. On the phone, open **Settings → Connect apps → Email**. Type a name under **Choose a name**, then choose **Create address**.

After you claim it, the app shows the address with a copy button. If you use Grok Bot through a Cursor team, an admin has to turn on Agent Email first. It is off by default for teams ([same page](https://cursor.com/help/grok-bot/agent-email)).

### Name rules

- Lowercase letters, digits, dots, hyphens, and underscores.
- Start and end with a letter or digit.
- At most 64 characters.
- No reserved words such as support, admin, billing, security, help, info, team, cursor, grok, or xai.

Every address is unique and never reissued, even after the account that claimed it is deleted ([Cursor help](https://cursor.com/help/grok-bot/agent-email)). Choose carefully. This is permanent.

## Plus aliases: one inbox, many labels

Mail to `yourname+receipts@mail.grokbot.com` lands in the same inbox as `yourname@mail.grokbot.com`. Give each service its own alias without claiming another address. A Bot can send from an alias too. A routine that watches an alias runs only for mail sent to that alias ([xAI docs](https://docs.x.ai/grok-bot/computer-and-apps)).

An alias is a label, not a lock. Anyone can write to it, so keep a sender filter on any routine that should act only for certain senders ([same page](https://docs.x.ai/grok-bot/computer-and-apps)).

## Reading mail

There's no inbox view in the apps and no new-mail notifications. Ask the Bot instead, for example "What arrived in your inbox today?" or "Find the receipt from last week." Mail from the last minute may not show up in a search yet ([Cursor help](https://cursor.com/help/grok-bot/agent-email)).

The address belongs to you, not to one Bot. All your Bots can use it in your own chats and in routines you set up. It isn't used in Slack threads or in chats where someone else is talking to the Bot, and a shared Bot doesn't have a team address ([same page](https://cursor.com/help/grok-bot/agent-email)).

## Acting on incoming mail with a routine

New mail doesn't start a chat or wake a Bot on its own. To act on it, set up a routine ([Cursor help](https://cursor.com/help/grok-bot/agent-email)). Ask in chat, for example:

> When an email arrives from billing@example.com, summarize it and tell me.

A routine can watch for mail from anyone, from specific addresses, or from a whole domain such as `*@example.com`. Two rules trip people up ([same page](https://cursor.com/help/grok-bot/agent-email)):

- By default, it only runs for senders that pass standard email authentication checks.
- Routines can't filter by subject.

For routine setup in general, see [Grok Bot routines](/blog/grok-bot-routines/). If an email routine doesn't fire, see [Grok Bot routines not working](/blog/grok-bot-routines-not-working/).

## Sending: when it asks you first

It depends on who asked ([Cursor help](https://cursor.com/help/grok-bot/agent-email), [approvals docs](https://docs.x.ai/grok-bot/approvals-security-and-privacy)):

| Who started the email | What happens |
|---|---|
| You asked in chat | It goes out once Auto Review allows it. If Auto Review needs you, you see an approval card first |
| A routine, an incoming message, or other work you didn't start with that request | It waits as a draft until you press **Send**. There's no option for unattended sending |
| A forward, or an email with an attachment Auto Review can't fully read | Always waits for your OK |

If you've also connected Gmail or Outlook, the Bot asks which account to send from when either could work ([Cursor help](https://cursor.com/help/grok-bot/agent-email)).

## Limits

| Limit | Value | Source |
|---|---|---|
| Addresses per account | One. Can't rename or delete | [Cursor help](https://cursor.com/help/grok-bot/agent-email) |
| Recipients per email | Up to 50 across To, Cc, and Bcc | [Cursor help](https://cursor.com/help/grok-bot/agent-email) |
| Attachments, sending | Up to 10, 10 MB each, 25 MB total. No executables | [Cursor help](https://cursor.com/help/grok-bot/agent-email) |
| Attachments, receiving | Up to 10, 10 MB each, 25 MB total. Extra ones are skipped | [Cursor help](https://cursor.com/help/grok-bot/agent-email) |
| Newsletters and first-contact email | One recipient per message, with a one-click unsubscribe link | [Cursor help](https://cursor.com/help/grok-bot/agent-email) |
| Bounces, unsubscribes, spam reports | The Bot stops emailing that address and tells you who it skipped | [Cursor help](https://cursor.com/help/grok-bot/agent-email) |
| New people per Bot | Limited, to protect the address from spam flags. The exact number is **unverified** | [Cursor help](https://cursor.com/help/grok-bot/agent-email) |

## Safety

The Bot treats email from other people as information, not instructions. Each message is marked as from you or from someone else. A request inside an email never counts as your permission to send or act ([Cursor help](https://cursor.com/help/grok-bot/agent-email)). Mail that fails the spam or virus scan is kept without its body or attachments ([same page](https://cursor.com/help/grok-bot/agent-email)).

## If you can't claim an address

| Message | What to do |
|---|---|
| Agent email is not enabled for this account. | It isn't available on your account yet |
| Your team admin has turned off Grok Bot agent email… | Ask your admin to turn on Agent Email in the Cursor dashboard, under Bot Capabilities |
| That address is taken… | Choose a different name. Taken names are never reissued |
| A message about characters, length, or a reserved word | Follow the name rules above |
| You can have one agent email address. | You already have one. Ask your Bot what it is |
| Too many email addresses checked in the last minute. | Wait a minute and try again |

Source: [Cursor help](https://cursor.com/help/grok-bot/agent-email).

## Real setups that use the Bot's inbox

- A refund and stuck-case desk: the Bot gets its own inbox and a sheet of open cases, checks daily, and drafts follow-ups ([play](/play/axel-refund-case-desk/)).
- A free iOS Shortcut emails Apple Health data to the Bot's inbox every night, so you can ask about sleep and HRV ([play](/play/baezor-apple-health-shortcut-email/)).
- Newsletters forwarded to the Bot's email feed a daily brief page ([play](/play/sitin-dev-daily-ai-brief-page/)).
- A morning email digest of audition calls that you reply to, so the Bot learns what to drop ([play](/play/luke-voice-acting-job-digest/)).

## What we could not verify

- How many new recipients a Bot can email per day. The docs mention a limit without a number.
- Whether a second address will ever be allowed. The docs say one address and give no plans.

## FAQ

### How do I get a Grok Bot email address?

Ask a Bot "Get yourself an email address", or open **Connect apps → Email** and choose **Create address** ([Cursor help](https://cursor.com/help/grok-bot/agent-email)).

### Can I change my Grok Bot email address?

No. You get one address and can't rename or delete it ([Cursor help](https://cursor.com/help/grok-bot/agent-email)).

### Can Grok Bot send emails on its own?

Only when you ask in chat and Auto Review allows it. Email from a routine waits as a draft until you press **Send** ([Cursor help](https://cursor.com/help/grok-bot/agent-email)).

### Where do I see my Bot's inbox?

There is no inbox view. Ask the Bot what arrived ([Cursor help](https://cursor.com/help/grok-bot/agent-email)).

### Can a routine filter email by subject?

No. Filter by sender address or domain instead ([Cursor help](https://cursor.com/help/grok-bot/agent-email)).

### What happens to my mail if I delete my account?

Mail and attachments are deleted. The address is retired and never given to anyone else ([Cursor help](https://cursor.com/help/grok-bot/agent-email)).
