export const LOCALES = ["en", "zh"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const SUBMIT_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScdx3KH0rLxHdHByyJvKhBAcmvTXCA-w3jV5FE52Z2-RBEZwA/viewform";

export function isLocale(v: string): v is Locale {
  return v === "en" || v === "zh";
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "zh" : "en";
}

export function htmlLang(locale: Locale) {
  return locale === "zh" ? "zh" : "en";
}

/** Prefix zh routes; leave English unprefixed. Home for zh is `/zh/`. */
export function localePath(locale: Locale, path: string): string {
  const raw = path.startsWith("/") ? path : `/${path}`;
  const normalized = raw || "/";
  if (locale === DEFAULT_LOCALE) return normalized;
  if (normalized === "/") return "/zh/";
  return `/zh${normalized}`;
}

export function folderLocale(id: string): Locale | null {
  if (id === "en" || id.startsWith("en/")) return "en";
  if (id === "zh" || id.startsWith("zh/")) return "zh";
  return null;
}

/** Blog glob uses frontmatter `slug` as the entry id, so also read the folder from filePath. */
export function folderLocaleFromEntry(entry: { id: string; filePath?: string }): Locale | null {
  const fromId = folderLocale(entry.id);
  if (fromId) return fromId;
  const fp = entry.filePath || "";
  if (/(?:^|\/)zh\//.test(fp)) return "zh";
  if (/(?:^|\/)en\//.test(fp)) return "en";
  return null;
}

export function filterByLocale<T extends { id: string; filePath?: string }>(entries: T[], locale: Locale): T[] {
  return entries.filter((e) => folderLocaleFromEntry(e) === locale);
}

export function bareContentId(id: string): string {
  return id.replace(/^(en|zh)\//, "");
}

const en = {
  "nav.catalog": "Catalog",
  "nav.blog": "Blog",
  "nav.install": "Install",
  "nav.about": "About",
  "nav.submit": "Submit",
  "nav.aria": "Site",
  "footer.disclaimer":
    "Grok Bot Plays · Unofficial catalog, not affiliated with xAI / Grok. Every play has a source link; no likes or view counts.",
  "search.placeholder": "Search plays, tags, or authors",
  "chips.all": "All",
  "chips.aria": "Categories",
  "meta.clickCards": "Click a card to see how",
  "meta.emptyFilter": "No matching plays. Try another word, or tap All.",
  "meta.emptyCatalog": "No plays yet.",
  "meta.emptyBlog": "No English posts yet.",
  "detail.audience": "For",
  "detail.outcome": "When you're done",
  "detail.steps": "How",
  "detail.commentary": "Notes",
  "detail.prompt": "Prompt",
  "detail.share": "Share",
  "detail.copied": "Copied",
  "detail.copy": "Copy",
  "detail.preview": "Preview image",
  "detail.closePreview": "Close",
  "detail.prevImage": "Previous image",
  "detail.nextImage": "Next image",
  "detail.back": "← Back to catalog",
  "detail.related": "Related plays",
  "detail.note":
    "Write-ups follow public posts and official docs. No likes, views, or dashboard numbers. Open the source to check the original.",
  "mast.tagline": "Grok Bot plays",
  "mast.dek": "Grok Bot is still early. Help us grow this community.",
  "lang.en": "EN",
  "lang.zh": "中文",
  "lang.aria": "Language",
  "page.catalogTitle": "Grok Bot Plays",
  "page.catalogDesc":
    "Unofficial Grok Bot play catalog. Every entry has a source link, from public posts and xAI docs.",
  "page.blogTitle": "Blog · Grok Bot Plays",
  "page.blogDesc": "Short notes on what Grok Bot is, how to install it, and how this site works.",
  "page.installTitle": "Install · Grok Bot Plays",
  "page.installDesc": "Every play assumes you can already use Grok Bot. This page says that once.",
  "page.aboutTitle": "About · Grok Bot Plays",
  "page.aboutDesc": "Plays is an unofficial, edited catalog of Grok Bot plays. Not affiliated with xAI / Grok.",
  "blog.back": "← Blog",
  "install.back": "← Blog",
  "pager.aria": "Pagination",
} as const;

const zh: Record<keyof typeof en, string> = {
  "nav.catalog": "目录",
  "nav.blog": "Blog",
  "nav.install": "安装",
  "nav.about": "关于",
  "nav.submit": "投稿",
  "nav.aria": "站点",
  "footer.disclaimer":
    "Grok Bot Plays · 非官方目录，与 xAI / Grok 无关。每条玩法带来源链接；没有点赞或阅读数。",
  "search.placeholder": "搜索玩法、标签或作者",
  "chips.all": "全部",
  "chips.aria": "分类",
  "meta.clickCards": "点卡片看怎么做",
  "meta.emptyFilter": "没有匹配的玩法。换个词，或点「全部」。",
  "meta.emptyCatalog": "还没有玩法。",
  "meta.emptyBlog": "还没有文章。",
  "detail.audience": "给谁",
  "detail.outcome": "做完的效果",
  "detail.steps": "怎么做",
  "detail.commentary": "点评",
  "detail.prompt": "提示词",
  "detail.share": "分享",
  "detail.copied": "已复制",
  "detail.copy": "复制",
  "detail.preview": "预览图片",
  "detail.closePreview": "关闭",
  "detail.prevImage": "上一张",
  "detail.nextImage": "下一张",
  "detail.back": "← 返回目录",
  "detail.related": "同类玩法",
  "detail.note":
    "正文按公开帖 / 官方说明改写。没有点赞、阅读或后台数字。打开来源核原文。",
  "mast.tagline": "Grok Bot 玩法导航",
  "mast.dek": "",
  "lang.en": "EN",
  "lang.zh": "中文",
  "lang.aria": "语言",
  "page.catalogTitle": "Grok Bot Plays",
  "page.catalogDesc":
    "非官方 Grok Bot 玩法导航。条目均带来源链接，来自公开帖与 xAI 官方说明。",
  "page.blogTitle": "Blog · Grok Bot Plays",
  "page.blogDesc": "编辑随笔：Grok Bot 是什么、怎么装、怎么编队、密码别进聊天。",
  "page.installTitle": "开始之前 · Grok Bot Plays",
  "page.installDesc": "全站玩法都默认你会用 Grok Bot。这里只说一次。",
  "page.aboutTitle": "Grok Bot Plays",
  "page.aboutDesc": "Plays 是非官方编辑向玩法导航，不是 prompt 货架。与 xAI / Grok 无关。",
  "blog.back": "← Blog",
  "install.back": "← Blog",
  "pager.aria": "分页",
};

export const messages = { en, zh };

export type MessageKey = keyof typeof en;

export function t(locale: Locale, key: MessageKey): string {
  return messages[locale][key] ?? messages.en[key];
}
