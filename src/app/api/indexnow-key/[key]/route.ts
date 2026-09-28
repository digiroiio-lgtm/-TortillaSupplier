// Serves the IndexNow key file. next.config.ts rewrites /{key}.txt here, so
// search engines can verify ownership at https://<host>/<INDEXNOW_KEY>.txt.
// The body is the key and nothing else; any other key gets a 404, so the
// endpoint cannot be used to probe or reveal the configured key.

import { isValidKey } from '@/lib/indexnow';

export const dynamic = 'force-dynamic';

export async function GET(_request: Request, { params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  const configured = process.env.INDEXNOW_KEY;

  if (!isValidKey(configured) || key !== configured) {
    return new Response('Not Found', { status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }

  return new Response(configured, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'noindex',
    },
  });
}
