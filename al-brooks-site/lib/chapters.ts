export interface ChapterMeta {
  slug: string;
  chapterNum: number;
  bookNum: number;
  bookTitle: string;
  title: string;
  description: string;
  sections: number;
  figures: number;
}

export interface BookMeta {
  num: number;
  title: string;
  slug: string;
}

export const books: BookMeta[] = [
  { num: 1, title: '趋势篇', slug: 'trends' },
  { num: 2, title: '区间篇', slug: 'trading-ranges' },
  { num: 3, title: '反转篇', slug: 'reversals' },
];

export const chapters: ChapterMeta[] = [
  {
    slug: 'ch21',
    chapterNum: 21,
    bookNum: 1,
    bookTitle: '趋势篇',
    title: '尖峰和通道趋势',
    description: '理解趋势中最常见的结构——尖峰和通道，掌握突破与缺口的等价性、通道交易策略、测量运动目标位。',
    sections: 6,
    figures: 10,
  },
  {
    slug: 'ch22',
    chapterNum: 22,
    bookNum: 1,
    bookTitle: '趋势篇',
    title: '趋势型交易区间日',
    description: '掌握趋势型交易区间日的特征、识别方法和交易策略，理解它与尖峰通道趋势日的区别。',
    sections: 6,
    figures: 10,
  },
  {
    slug: 'ch26',
    chapterNum: 26,
    bookNum: 2,
    bookTitle: '区间篇',
    title: '做一笔交易需要两个理由',
    description: '掌握入场的两重确认原则——每个好的交易都需要至少两个独立理由支撑，结合信号棒、均线回撤和失败形态。',
    sections: 5,
    figures: 6,
  },
];

export function getChaptersByBook(bookNum: number): ChapterMeta[] {
  return chapters.filter(c => c.bookNum === bookNum);
}

export function getChapterBySlug(slug: string): ChapterMeta | undefined {
  return chapters.find(c => c.slug === slug);
}
