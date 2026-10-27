/**
 * ─────────────────────────────────────────────────────────────
 *  #CrossBowH — SITE CONFIG
 *  This is the main file to edit. Everything in [BRACKETS] is a
 *  placeholder. Projects, posts, skills, experience and
 *  certifications live in src/data/.
 * ─────────────────────────────────────────────────────────────
 */
import type { SocialLink } from '../types';

export const site = {
  /** Brand shown in the header, footer, favicon title and metadata. */
  brand: '#CrossBowH',

  /**
   * Production URL, e.g. "https://crossbowh.com". Leave empty until you know it.
   * When set, canonical URLs, absolute Open Graph URLs and sitemap.xml are generated.
   * (Also used by astro.config.mjs.)
   */
  url: '',

  /** Browser tab title and search-result description. */
  title: '#CrossBowH — Hadia Mazhar',
  description: '[YOUR_SITE_DESCRIPTION — one or two sentences about you and this site, ~150 characters.]',

  /** Optional social preview image in /public, ideally 1200×630, e.g. "/og-image.png". */
  ogImage: '',

  /**
   * While true, sections show clearly marked [PLACEHOLDER] content so the layout can be
   * reviewed. Set to false before publishing: placeholder entries and empty links are then hidden.
   */
  showPlaceholders: true,
};

export const person = {
  name: 'Hadia Mazhar',
  title: '[YOUR_PROFESSIONAL_TITLE]',
  /** Optional city/region. Empty hides it. */
  location: '[YOUR_LOCATION]',
};

/** The greeting paragraph at the top of the page. Keep {name} where your name should appear. */
export const intro = {
  text:
    'Greetings, web traveler! My name is {name}. [YOUR_INTRODUCTION — two to four sentences ' +
    'about who you are, what you focus on in security, and what visitors will find on this page.]',
  primaryCta: { label: '[YOUR_PRIMARY_CTA]', href: '#projects' },
  secondaryCta: { label: '[YOUR_SECONDARY_CTA]', href: '#contact' },
};

/**
 * Optional highlighted notice under the intro (the green box).
 * Set to null to hide it.
 */
export const announcement: { text: string; linkLabel?: string; href?: string } | null = {
  text: '[OPTIONAL_ANNOUNCEMENT — e.g. a new project or talk. Set `announcement` to null in src/config/site.ts to remove this box.]',
};

/** About section. Each paragraph is a string. */
export const about = {
  heading: '$whoami',
  paragraphs: [
    'My name is {name}, [YOUR_PROFESSIONAL_TITLE]. [YOUR_BACKGROUND — where you are in your security journey and how you got here.]',
    '[YOUR_INTERESTS — the areas of cybersecurity you care about most, e.g. the kinds of systems you like to break or defend.]',
  ],
  /** Short "$cat ... | more" style statement about the site itself. */
  siteHeading: '$cat crossbowh | more',
  siteText:
    '#CrossBowH is [WHAT_THIS_SITE_IS — e.g. my portfolio and notebook for security work, write-ups and projects].',
  /** Optional link to a résumé PDF in /public (e.g. "/resume.pdf") or an external URL. Empty hides it. */
  resumeUrl: '',
  /** Interests / specialties shown as tags. */
  specialties: ['[SPECIALTY_1]', '[SPECIALTY_2]', '[SPECIALTY_3]'],
};

/**
 * Social and professional links. Leave `url` empty to hide a link
 * (or show it as a placeholder while showPlaceholders is true).
 */
export const socials: SocialLink[] = [
  { label: 'GitHub', url: '', icon: 'github-logo', handle: '[YOUR_GITHUB_HANDLE]' },
  { label: 'LinkedIn', url: '', icon: 'linkedin-logo', handle: '[YOUR_LINKEDIN]' },
  { label: 'X / Twitter', url: '', icon: 'x-logo' },
  { label: 'Mastodon', url: '', icon: 'mastodon-logo' },
  { label: 'Blog RSS', url: '', icon: 'rss' },
];

export const contact = {
  heading: 'Contact Me',
  text: "Wanna get in touch? Don't be shy! [YOUR_CONTACT_INTRO — what people can reach out about.]",
  /** Your public email. Empty hides the email link. */
  email: '',
  /**
   * Contact form endpoint. The site is static, so the form needs an external service.
   * Works with any service that accepts a JSON POST, e.g. Formspree ("https://formspree.io/f/xxxxxxx"),
   * Web3Forms, Getform, or your own serverless function.
   * While this is empty the form validates input but clearly says that nothing was sent.
   */
  formEndpoint: '',
  /** Extra fields sent with every submission (e.g. Web3Forms needs { access_key: '...' }). */
  formExtraFields: {} as Record<string, string>,
};

/** Hamburger menu and in-page navigation. Hrefs are section anchors on the single page. */
export const navigation = [
  { label: 'Home', href: '#top', icon: 'house' },
  { label: 'About', href: '#about', icon: 'identification-card' },
  { label: 'Projects', href: '#projects', icon: 'folder' },
  { label: 'Blog', href: '#blog', icon: 'article' },
  { label: 'Contact', href: '#contact', icon: 'hand-waving' },
] as const;
