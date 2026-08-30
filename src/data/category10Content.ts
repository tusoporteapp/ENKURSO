// Master exporter for Category 10 (Desarrollo de Carrera - Tomos 82 al 101)
// 20 Full Books covering Career Progression, Executive Presence, Networking, Resumes, Compensation & Virtual Leadership
import { SpecificBookContent } from './category1Content';
import { CATEGORY_10_CUSTOM_BOOKS_PART1 } from './category10ContentPart1';
import { CATEGORY_10_CUSTOM_BOOKS_PART2 } from './category10ContentPart2';

export const CATEGORY_10_CUSTOM_BOOKS: Record<string, SpecificBookContent> = {
  ...CATEGORY_10_CUSTOM_BOOKS_PART1,
  ...CATEGORY_10_CUSTOM_BOOKS_PART2
};
