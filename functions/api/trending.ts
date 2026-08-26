type Env = { PLAYS_DB: D1Database };

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const empty = new Response(JSON.stringify({ ids: [] }), {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
  try {
    const db = context.env.PLAYS_DB;
    if (!db) return empty;
    const { results } = await db
      .prepare(
        `SELECT id FROM plays_stats
         ORDER BY (clicks + tweet_views) DESC, id ASC`,
      )
      .all<{ id: string }>();
    const ids = (results || []).map((r) => r.id).filter(Boolean);
    return new Response(JSON.stringify({ ids }), {
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  } catch {
    return empty;
  }
};
