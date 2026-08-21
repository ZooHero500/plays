# Plays 视觉系统

给工程用的锁定稿。产品方向不变：非官方 Grok Bot 玩法目录。黑底、大留白、胶囊搜索、无装饰。不要另起一套。

## Token

| Token | 值 | 用途 |
| --- | --- | --- |
| `--bg` | `#0C0C0C` | 页面底 |
| `--surface` | `#161616` | 卡片、搜索底 |
| `--surface-2` | `#1C1C1C` | 步骤分隔 |
| `--line` | `#262626` | 默认描边 |
| `--line-hover` | `#3D3D3D` | 悬停描边 |
| `--text` | `#F2EFE8` | 主字 |
| `--text-2` | `#9A958C` | 次字、标签未选、搜索图标 |
| `--text-3` | `#6B6760` | 元信息、kicker、页脚、占位 |
| `--invert` | `#EDE8DF` | 选中芯片底 |
| `--ink` | `#111111` | 选中芯片字 |
| `--r` | `20px` | 卡片、详情封面 |
| `--r-sm` | `14px` | 截图 |
| `--r-pill` | `999px` | 搜索、芯片、徽章 |
| `--max` | `1080px` | 内容宽 |
| `--ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 所有缓动 |
| `--font` | `ui-sans-serif, system-ui, "Segoe UI", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Noto Sans SC", "Microsoft YaHei", sans-serif` | 系统黑体 |

字标是单词 **Plays**，没有 G 标、没有图形 logo。页 `<title>` 与页脚署名是 **Grok Bot Plays**；字标不要改成这个全称。

## 字体阶梯

| 角色 | 大小 | 字重 | 字距 / 行高 | 色 |
| --- | --- | --- | --- | --- |
| Wordmark | 56px（手机 48px） | 500 | -0.06em / 0.92 | `--text` |
| Tagline | 14px | 400 | 0.06em | `--text-2` |
| Search | 15px | 400 | — | `--text`，占位 `--text-3` |
| Chip | 13px | 400 | line-height 1 | 见芯片 |
| Card title | 16px | 500 | -0.02em | `--text` |
| Featured title | 26px | 500 | -0.036em | `--text` |
| Card desc | 13px | 400 | 2 行截断 | `--text-2` |
| Meta row | 12px | 400 | 0.04em | `--text-3` |
| Detail title | 40px | 500 | -0.04em / 1.15 | `--text` |
| Detail sum | 17px | 400 | 1.65，max-width 640 | `--text-2` |
| Section kicker | 11px | 500 | 0.16em，大写 | `--text-3` |
| Step title | 16px | 500 | — | `--text` |
| Step body | 14px | 400 | — | `--text-2` |
| Footer | 12px | 400 | — | `--text-3` |
| Badge / mark | 11px / 10px | 400 | 0.14em / 0.12em，大写 | `--text-2` / `--text` |

## 间距阶梯

只用：`4 / 8 / 12 / 16 / 20 / 24 / 28 / 36 / 48 / 64 / 88 / 120`。

组件稿里写死的例外（不要改成「最近的阶梯」）：搜索高 52、搜索左内边 46、tagline→search 56、chips→meta 40、卡片 body `18 20 20`、精选 body `32 36`。

栏宽：`min(1080px, calc(100% - 80px))`。平板左右各 40。手机左右各 24（`calc(100% - 48px)`）。网格 3 列 gap 20；≤960 两列；≤640 一列 gap 12。

## 组件

**徽章 `.badge`**  
右上固定。11px 大写 0.14em，胶囊，1px `--line`，底 `rgba(12,12,12,0.7)`，blur 8。文案固定 `Unofficial`。

**搜索**  
max-width 520，水平居中，高 52，半径 999。底 `--surface`，边 1px `--line`。左图标距边 18，input `padding-left 46 / padding-right 20`。悬停边 `--line-hover`。焦点边 `#5A574E`、底 `#141414`。**不要** box-shadow、glow、outline。占位：「搜索玩法、标签或作者」。右侧装饰圆可省略。

**芯片 / 相关标签**  
flex wrap，居中，gap 8。`padding 8px 16px`，半径 999，line-height 1。  
未选：透明底，1px `#2E2E2E`，`--text-2`。  
悬停：边 `#555048`，字 `--text`。  
选中 `.is-on`：底/边 `--invert`，字 `--ink`。没有第三色。  
卡片上的 `.tag` 同一套颜色；尺寸可略收（`4 12` / 12px）。详情「相关标签」与芯片同尺寸。

**卡片**  
底 `--surface`，边 1px `#1F1F1F`，半径 20，overflow hidden。悬停只 `translateY(-2px)` + 边 `--line-hover`。无投影、无内发光。封面 **16/9**，底 `#101010`，`object-fit: cover`。body `18px 20px 20px`。标签 `margin-top 12`。脚 `margin-top: auto; padding-top: 16`。  
精选通栏，`1.1fr / 0.9fr`；封面同样 16/9，不要再用 min-height 撑高。平板起堆叠。精选 body `32px 36px`。角标（来源 / 示例）：10px 大写 0.12em，胶囊 + backdrop blur，封面左上 12。

**详情（长文，按此顺序）**  
`.back` 纯文字，无边，13px `--text-2`，`padding 64px 0 28px`，悬停 `--text`。文案「← 返回目录」。标题区不要堆标签芯片；来源只走 byline 链接。

1. **大封面** `.hero-cover`：**16/9**，半径 20，边 1px `#1F1F1F`，铺满 wrap 宽。**不要** `max-height: 400px`（会裁掉 16:9）。`object-fit: cover`。真图或字标 SVG。
2. **标题 / 作者 / 来源** — 标题 40px。Byline：blob、作者、handle、来源链接、日期，加一枚安静的「分享」胶囊（`.copy-chip` 语汇：1px `--line`，半径 999，`--text-2`，悬停 `--text`，成功 `--invert` / `--ink`）。有 `navigator.share` 就分享当前详情 URL（含 hash）；没有或被拒就 `clipboard.writeText(location.href)`，芯片闪「已复制」1200ms 再改回「分享」。不要蓝按钮。不要在标题下倒一排 tag。
3. **给谁** + **做完的效果** — 两节短文，上下叠，max-width 680。kicker 11px 大写 0.16em `--text-3`。正文 16px `--text`，行高 1.65，一两句。
4. **怎么做** — 长编号步骤，跟页面一起滚，不要内层滚动盒。每行 `padding 20px 0`，顶边 1px `#1C1C1C`，左侧 48 数字列 `tabular-nums` `--text-3`。`.step-full` 16px `--text`。真实产品截图嵌在对应步骤里（`.step-shot`）：**不要** 16:9、**不要** `object-fit: cover`（那会看起来像另一张玩法卡）。宽吃步骤栏（max 680），高度随图，`object-fit: contain`，半径 `--r-sm` 14，1px `#1F1F1F`，`margin-top 16`，figcaption 12px `--text-3`。删掉底栏 `.shots` 两列 gallery。封面 / `imageUrls[0]` / `assets/covers/*` 一律不当步骤截图；没有真图的步骤不放图。一步可以多张。
5. **点评** `.take` — 左边 1px `--line-hover`（不是粗色条），`padding-left 20`，16px `--text-2`，行高 1.7。一段短评。
6. **提示词 / 起步说明** `.prompt-wrap` — 等宽可复制块：底 `#111`，边 1px `--line`，半径 14，padding 20。字体 `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`，13px，行高 1.65，`--text`，`white-space: pre-wrap`。右上角幽灵胶囊「复制」（芯片语汇，不要蓝按钮）。点一下 `clipboard.writeText`，文案变「已复制」约 1200ms 再改回；没有 clipboard 就选中 `pre`。JSON 还没有 `prompt` 时，kicker 写「起步说明」而不是「万能 prompt」。
7. **不要底栏截图 gallery。** 截图只活在步骤里。没有真图就不渲染空 gallery。
8. **同类玩法** — 小卡网格：封面（**16/9** `object-fit: cover`）+ 标题，分类可留 12px `--text-3`。2 列 gap 16，半径 `--r`，底 `--surface`，边 `#1F1F1F`。悬停只抬 2px。这和步骤内截图必须能分开：步骤图是 contain、高度随图，同类卡才是 16:9 封面。文末 quiet note。相关标签可省略。

`.detail-head` / `.section` max-width 680；head 顶距 36，section 顶距 64。注记 12px `--text-3`，`margin-top 48`。

给谁 / 效果 / 点评 / 起步说明的缺省文案写在 `js/app.js` 的 `normalize()`，等 `plays.json` 长出 `audience` / `outcome` / `commentary` / `prompt` 再改用字段。不要为了填这些去改 JSON。

**分页**  
`PAGE_SIZE = 12`。`state.page` 从 1 起。分类 / 标签 / 搜索一变就回到第 1 页。`renderGrid` 只画当前页；精选卡 `ray-cto-pstack` 只在第 1 页且 `showFeatured()` 时加 `.featured`，它占 12 条里的一条。  
`#pager.pager` 紧跟 `#grid`。芯片居中：‹ › 是幽灵胶囊，页码也是芯片，当前页 `.is-on`（`--invert` / `--ink`）。**不要**蓝数字条。只有一页时清空 / 隐藏 pager。`body.is-detail .pager`、`body.is-about .pager` 隐藏。  
hash：页码 > 1 时带 `p`（`#/?p=2`）。`applyHash` 读它。Esc / 返回目录要回到同一页。  
计数行安静：`1–12 / 33`，12px `--text-3`。

**页脚**  
`margin-top 88`，顶边 1px `--line`，居中，12px `--text-3`。不要加重。文案含站点名：`Grok Bot Plays · 非官方目录，与 xAI / Grok 无关。每条玩法带来源链接；没有点赞或阅读数。`

**底纹**  
`.grain` 保留。opacity **不超过 0.018**，`mix-blend-mode: overlay`。没有 starfield。

## 动效

- 边框 / 颜色 / 悬停：`160ms var(--ease)`
- 卡片悬停：只抬 2px。禁止 drop-shadow、禁止 glow
- 详情进入：`280ms` opacity + `translateY(8px)`
- `prefers-reduced-motion: reduce`：关掉 transition、hover 抬起、animation

## 做 / 不做

**做**

- 接近纯黑的底、大量留白、一条胶囊搜索、中性芯片
- 选中态只用 `--invert` / `--ink`
- 字标只写 Plays；页 title / 页脚写 Grok Bot Plays

**不做**

- 紫色渐变、SaaS 蓝按钮、彩色 CTA
- 官方 Grok G 标、任何 G 形图形
- 星空、星点 canvas、霓虹、外发光、投影
- 为「更有品牌感」加装饰层

## 首页垂直节奏（可按像素重建）

固定层：Unofficial 徽章右上；「关于」贴在它左侧。首页不放「目录」。详情只留「← 返回目录」，不要第二条顶栏返回。

```
120   mast padding-top          （手机 72）
 56   wordmark「Plays」
 12   → tagline
 14   tagline
 56   → search
 52   搜索条（max 520，居中）
 28   → chips
      芯片行（居中，gap 8）
 40   → meta
 12   meta row
 16   → grid
      3 列 / gap 20
 88   → footer
      1px --line，居中一句
```

搜索左右：图标 18 起，文字从 46 起。栏总宽 `min(1080, 100% - 80)`。

## 封面（v3 已锁定）

Elyxo 过了抽象样张。32 张同一系列，16:9。`ray-cto-pstack` 真图保留，不生、不覆盖。

**色** `#0C0C0C` 近黑底，奶油 `#F2EFE8` 只作光。不要第二套色。

**气质** 抽象：光本身 / 材质肌理 / 两面相交的缝。认不出是什么东西。单光源，大留白。

**禁** 可读几何体（环、门洞、板、球、立方体）、人、logo、文字、道具静物、紫、霓虹、星空。

样张：
- `/workspace/plays/shots/cover-v2/light.png`
- `/workspace/plays/shots/cover-v2/grain.png`
- `/workspace/plays/shots/cover-v2/crease.png`

卡片封面走 `assets/covers/{id}.png`。`coverOf`：仅 Ray 用真图（`imageUrls[0]` / `assets/cover.jpg`），其余不要再拿 `imageUrls[0]` 当封面。onerror 回字标 SVG。不要灰底占位。

卡片最多显示 3 个标签。摘要与标签之间 16px，标签单行。精选仍是 Ray CTO。

## 详情长文 + 分页 + 封面 16:9

锁定补充（工程按上面「详情」和「分页」做，不要另起稿）：

- 卡片 / 精选 / 详情 hero：一律 **16:9**。hero 去掉 max-height。步骤里的真截图不要 16:9 裁切（见下「详情截图」）。
- 详情是一篇往下读的长文，不是短卡翻面。顺序：封面 → 标题 byline（含分享胶囊）→ 给谁 → 效果 → 怎么做（步骤内嵌真实截图，无底栏 gallery）→ 点评 → 提示词（可复制）→ 同类玩法（封面小卡）。
- 详情页 `document.title` 为 `{play.title} · Grok Bot Plays`；目录 / 关于恢复 `Grok Bot Plays`。
- 列表 12 条一页。页码用反色芯片，不要蓝 pager。
- fallback 字段只活在 JS，等 JSON 长字段。
