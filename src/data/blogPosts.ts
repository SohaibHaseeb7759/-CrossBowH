/**
 * BLOG POSTS — this is a single-page site, so each post links to wherever the full
 * article is published (your blog, Medium, dev.to, a PDF in /public, ...).
 * The newest post (by date) is shown as "Latest Post" near the top of the page.
 * With an empty array both blocks show a friendly "nothing published yet" note.
 */
import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    title: '[POST_TITLE]',
    excerpt:
      '[POST_EXCERPT — the first two or three sentences of the article. This placeholder shows how a post will look; delete it when you add your first real post.]',
    date: '2026-10-27',
    category: '[CATEGORY]',
    tags: ['[tag]'],
    url: '',
    placeholder: true,
  },
];
