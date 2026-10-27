/**
 * PROJECTS — replace the placeholder entries with your real projects.
 * Delete `placeholder: true` once an entry is real.
 * Optional fields (image, githubUrl, liveUrl, technologies, category) can be omitted.
 * Set `featured: true` to make a project span the full width.
 * With an empty array the section shows a short "coming soon" note instead of empty cards.
 */
import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: '[PROJECT_TITLE_1]',
    description:
      '[PROJECT_DESCRIPTION — what the project does, the problem it solves and what you learned. Two or three sentences fit the card best.]',
    category: '[CATEGORY]',
    technologies: ['[TECH_1]', '[TECH_2]', '[TECH_3]'],
    githubUrl: '',
    liveUrl: '',
    featured: true,
    placeholder: true,
  },
  {
    title: '[PROJECT_TITLE_2]',
    description: '[PROJECT_DESCRIPTION — a short summary of the second project.]',
    category: '[CATEGORY]',
    technologies: ['[TECH_1]', '[TECH_2]'],
    placeholder: true,
  },
];
