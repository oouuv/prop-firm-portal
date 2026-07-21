// ===== Card Types =====
export type CardTag = 'concept' | 'example' | 'summary' | 'case' | 'warning' | 'rule' | 'quiz';

export type KeyConceptColor = 'blue' | 'orange' | 'red' | 'green' | 'purple' | 'yellow' | 'cyan';

export interface Quote {
  text: string;
  cite?: string;
}

export interface Highlight {
  title: string;
  text: string;
  color?: KeyConceptColor;
}

export interface InlineQuote {
  text: string;
}

export interface FourInOneItem {
  icon: string;
  label: string;
  desc: string;
}

export interface GlossaryRef {
  term: string;
  tooltip: string;
}

export interface CardContentText {
  html: string;
}

export interface CardListItem {
  text: string;
}

export interface RuleCardDataItem {
  condition: string;
  action: string;
  example?: string;
  color?: KeyConceptColor;
}

// ===== Card Data =====
export interface BaseCardData {
  type: string;
  tag?: CardTag;
  tagLabel?: string;
  fullwidth?: boolean;
  title?: string;
}

export interface KeyConceptCardData extends BaseCardData {
  type: 'key-concept';
  color?: KeyConceptColor;
  quote?: Quote;
  highlight?: Highlight;
  content?: CardContentBlock[];
}

export interface ExpandableCardData extends BaseCardData {
  type: 'expandable';
  content?: CardContentBlock[];
}

export interface RuleCardData extends BaseCardData {
  type: 'rule';
  condition: string;
  action: string;
  example?: string;
  color?: KeyConceptColor;
}

export interface FullWidthCardData extends BaseCardData {
  type: 'fullwidth';
  content?: CardContentBlock[];
}

export interface ComparisonTableData extends BaseCardData {
  type: 'comparison-table';
  headers: string[];
  rows: string[][];
}

export interface QuizSectionData {
  type: 'quiz';
  questions: QuizQuestion[];
}

// ===== Content Blocks (inside cards) =====
export type CardContentBlock =
  | { type: 'text'; html: string }
  | { type: 'inline-quote'; text: string }
  | { type: 'original-quote'; text: string; cite?: string }
  | { type: 'four-in-one'; items: FourInOneItem[] }
  | { type: 'highlight'; title: string; text: string; color?: KeyConceptColor }
  | { type: 'list'; items: CardListItem[] }
  | { type: 'figure'; src: string; caption: string; alt: string }
  | { type: 'glossary-text'; parts: (string | GlossaryRef)[] }
  | { type: 'rule-cards'; items: RuleCardDataItem[] };

export type CardData =
  | KeyConceptCardData
  | ExpandableCardData
  | RuleCardData
  | FullWidthCardData
  | ComparisonTableData;

// ===== Section & Chapter =====
export interface NavItem {
  id: string;
  label: string;
}

export interface ChapterStats {
  modules: number;
  figures: number;
  rules: number;
}

export interface SectionData {
  id: string;
  num: string;
  title: string;
  desc: string;
  cards: CardData[];
}

export interface ChapterData {
  slug: string;
  chapterNum: number;
  title: string;
  subtitle: string;
  stats: ChapterStats;
  navItems: NavItem[];
  sections: SectionData[];
  quiz: QuizQuestion[];
}

// ===== Quiz =====
export interface QuizQuestion {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

// ===== Glossary =====
export interface GlossaryEntry {
  term: string;
  pinyin?: string;
  english: string;
  definition: string;
}
