import type { APIRoute } from 'astro';
import { absoluteUrl, withBase } from '@/utils/paths';

export const GET: APIRoute = () => new Response(
  `User-agent: *\nAllow: ${withBase('/')}\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`,
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
);
