export interface ChapterMeta {
  slug: string;
  chapterNum: number;
  title: string;
  description: string;
  sections: number;
  figures: number;
}

export const chapters: ChapterMeta[] = [
  {
    slug: 'ch21',
    chapterNum: 21,
    title: '尖峰和通道趋势',
    description: '理解趋势中最常见的结构——尖峰和通道，掌握突破与缺口的等价性、通道交易策略、测量运动目标位。',
    sections: 6,
    figures: 10,
  },
  {
    slug: 'ch22',
    chapterNum: 22,
    title: '趋势型交易区间日',
    description: '掌握趋势型交易区间日的特征、识别方法和交易策略，理解它与尖峰通道趋势日的区别。',
    sections: 6,
    figures: 10,
  },
];

export function getChapterBySlug(slug: string): ChapterMeta | undefined {
  return chapters.find(c => c.slug === slug);
}
