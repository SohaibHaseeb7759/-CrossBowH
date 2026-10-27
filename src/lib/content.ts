import { person, site } from '../config/site';

/** Replaces {name} with the configured person name. Returns an array of [text, isName] parts for highlighting. */
export function withName(text: string): { text: string; isName: boolean }[] {
  return text.split(/(\{name\})/).filter(Boolean).map((part) =>
    part === '{name}' ? { text: person.name, isName: true } : { text: part, isName: false },
  );
}

/** Drops placeholder entries once `site.showPlaceholders` is false. */
export function visible<T extends { placeholder?: boolean }>(items: T[]): T[] {
  return site.showPlaceholders ? items : items.filter((i) => !i.placeholder);
}

/** True when a string is still a bracketed placeholder like "[YOUR_EMAIL]". */
export const isPlaceholderText = (value: string | undefined) => !value || /^\[.*\]$/.test(value.trim());

const long = new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric', timeZone: 'UTC' });
const short = new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: '2-digit', timeZone: 'UTC' });

export const formatDate = (iso: string) => long.format(new Date(iso));
export const formatShortDate = (iso: string) => short.format(new Date(iso));

/** In a 2-column grid, an odd final item spans both columns so no gap is left. */
export const spanLast = (index: number, count: number) => count % 2 === 1 && index === count - 1;
