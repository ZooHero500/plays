---
title: "密码别进聊天，什么必须人批"
description: "Grok Bot 能进你的软件。"
slug: "passwords-not-in-chat"
cover: "/assets/blog/keys.png"
---

Grok Bot 能进你的软件。
这是它有用的原因。
也是它危险的原因。
能点下去的手，也能点错。

官方写得很死。
密码、通行密钥、两步验证、验证码、付款确认，都要你自己在它的电脑上点完。
打开 Agent Computer，接管，做完，交回去，再让它继续。
不要把密码或一次性口令发进普通聊天。
见 [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)。

支持的连接器可以用加密的密钥框。
那一格是遮住的，不进对话记录，模型也看不见。
它不是通用密码箱。
只在它弹出那一格时用。
自己发明一套「先把密码存在简介里」，等于把钥匙钉在门上。

Debbie 录视频时也是这么做的。
LinkedIn 和 GitHub 的账号，她在 bot 自己的电脑上点完。
密码不进聊天。
见 [How to Get Started with Grok Bot](https://dev.to/debs_obrien/how-to-get-started-with-grok-bot-4f5n)。
X 若要令牌，她当天没在镜头前走完，就先跳过。
走不通的连接，不要用聊天里的密钥硬闯。

同一账号下的 bot，共用一台云电脑。
文件、浏览器会话、命令行凭证，彼此看得见。
官方原话：不要把「再开一个 bot」当成安全边界。
某个服务不该再被用到，就在那台电脑上退掉。
临时敏感文件做完就删。
连接器不用了，到源服务里撤权。
删掉一个 bot，不会自动清掉这台电脑上的会话。

人批的清单，官方也列过。
发消息或邀请。
公开发布。
花钱和转账。
删除或覆盖数据。
改权限。
改生产。
点法律条款。
审批管的是下一步。
已经做完的，点拒绝也撤不回去。
所以「先做后问」在这里不成立。

桌面上是 Allow once 和 Deny。
Always allow 会记下一条规则。
看不清目标和后果，就别点允许。
让它先用白话解释，或先出草稿。
官方还把本机执行和云电脑分开。
默认是每次都问。
没有明确理由要动你面前这台电脑的文件，就保持永不允许。

Auto Review 开着时，它会先审工具调用和电脑动作。
Require Approval 永远停住匹配的动作。
Always Allow 只有在自动审查没找出别的理由时才放行。
两条都命中，以 Require Approval 为准。
官方举例：对外邮件先批，改生产看板先批。
不要写「浏览器里什么都允许」。
网站会改按钮。
模型会点新的那个。

Dennis 的家规更短。
文档可以默认发出。
发信、花钱、删除、改权限、动生产，必须停。
见 [How I Use Grok Bot as One Ops Desk](https://dennisyu.com/how-i-use-grok-bot/)。
官方用例也是先读后写。
外呼不发送、不入组。
寻源不联系候选人。
投放不改预算。
报销不改账、不发催办。
见 [Use cases](https://docs.x.ai/grok-bot/use-cases)。

过夜跑着的 routine，失败发生时你不在。
所以禁止线要写进简介，不要事后补。
先跑通一次，你肯签字，再让它按点跑。
见 [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)。
试跑是真干活。
不要用演示数据骗自己。

一句话记住。
密码走它的电脑，不走聊天。
发出去的、花掉的、线上的，停在你这儿。
