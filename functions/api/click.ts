type Env = { PLAYS_DB: D1Database };

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const db = context.env.PLAYS_DB;
    if (!db) return json({ ok: true, skipped: true });

    let id = "";
    try {
      const body = await context.request.json();
      id = typeof body?.id === "string" ? body.id.trim() : "";
    } catch {
      id = "";
    }
    if (!id || id.length > 200) return json({ ok: true, skipped: true });

    await db
      .prepare(
        `INSERT INTO plays_stats (id, clicks, tweet_views, updated_at)
         VALUES (?, 1, 0, datetime('now'))
         ON CONFLICT(id) DO UPDATE SET
           clicks = clicks + 1,
           updated_at = datetime('now')`,
      )
      .bind(id)
      .run();

    return json({ ok: true });
  } catch {
    return json({ ok: true, skipped: true });
  }
};
