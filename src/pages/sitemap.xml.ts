import type { APIRoute } from 'astro';
import { absoluteUrl } from '@/utils/paths';

const paths = ['/', '/leistungen/', '/projekte/', '/projekte/hochzeitswebsite/', '/preise/', '/ueber-mich/', '/kontakt/', '/impressum/', '/datenschutz/'];
export const GET: APIRoute = () => {
  const urls = paths.map((path) => `<url><loc>${absoluteUrl(path)}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
