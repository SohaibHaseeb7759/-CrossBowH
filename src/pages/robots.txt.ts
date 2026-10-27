import type { APIRoute } from 'astro';
import { site } from '../config/site';

export const GET: APIRoute = () => {
  const lines = ['User-agent: *', 'Allow: /'];
  if (site.url) lines.push('', `Sitemap: ${new URL('sitemap-index.xml', site.url.replace(/\/?$/, '/')).href}`);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
