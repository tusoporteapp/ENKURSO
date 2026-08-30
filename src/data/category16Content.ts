// Specific topic-by-topic content blueprints for Category 16 (Marketing Digital Avanzado)
// Providing 100% custom, domain-accurate, highly actionable business literature for all 16 books (Tomos 146 al 161)

import { CATEGORY_16_PART1_BOOKS } from './category16ContentPart1';
import { CATEGORY_16_PART2_BOOKS } from './category16ContentPart2';
import { SpecificBookContent } from './category1Content';

export const CATEGORY_16_CUSTOM_BOOKS: Record<string, SpecificBookContent> = {
  ...CATEGORY_16_PART1_BOOKS,
  ...CATEGORY_16_PART2_BOOKS,
};
