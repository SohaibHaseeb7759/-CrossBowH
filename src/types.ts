/** Shared content types. Edit the data in src/config and src/data, not here. */

export type IconName =
  | 'article' | 'arrow-up-right' | 'briefcase' | 'calendar-dot' | 'certificate' | 'code'
  | 'envelope' | 'folder' | 'github-logo' | 'globe' | 'hand-waving' | 'house' | 'identification-card'
  | 'link' | 'linkedin-logo' | 'mastodon-logo' | 'newspaper-clipping' | 'paper-plane-tilt'
  | 'rss' | 'seal-check' | 'shield-check' | 'star' | 'swatches' | 'tag' | 'terminal-window'
  | 'user' | 'x-logo' | 'youtube-logo' | 'discord-logo' | 'butterfly' | 'warning-circle'
  | 'check-circle' | 'info' | 'chat-circle-dots' | 'list-checks' | 'path' | 'target';

export interface SocialLink {
  /** Visible label, e.g. "GitHub". */
  label: string;
  /** Full URL. Leave empty ("") to hide the link everywhere. */
  url: string;
  icon: IconName;
  /** Optional text shown after the label, e.g. your handle. */
  handle?: string;
}

export interface Project {
  title: string;
  description: string;
  category?: string;
  technologies?: string[];
  /** Path under /public (e.g. "/images/projects/foo.webp") or a full URL. Optional. */
  image?: string;
  imageAlt?: string;
  githubUrl?: string;
  liveUrl?: string;
  /** Featured projects span the full width of the grid. */
  featured?: boolean;
  /** Marks sample data. Placeholder entries are labelled on the page so they are never mistaken for real work. */
  placeholder?: boolean;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  /** ISO date, e.g. "2026-10-27". */
  date: string;
  category?: string;
  tags?: string[];
  /** Where the full article lives (Medium, dev.to, your own blog...). */
  url?: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  placeholder?: boolean;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  summary?: string;
  url?: string;
  placeholder?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  verifyUrl?: string;
  placeholder?: boolean;
}
