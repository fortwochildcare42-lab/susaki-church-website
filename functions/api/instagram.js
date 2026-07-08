export async function onRequest(context) {
  const token = await context.env.SUSAKI_TOKEN_STORE.get('instagram:token');
  if (!token) return Response.json({ error: 'Token not found' }, { status: 500 });
  const res = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,timestamp,caption&limit=6&access_token=${token}`);
  const data = await res.json();
  return Response.json(data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
