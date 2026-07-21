import { ChapterStats } from '@/lib/types';

interface HeroProps {
  chapterNum: number;
  title: string;
  subtitle: string;
  stats: ChapterStats;
}

export function Hero({ chapterNum, title, subtitle, stats }: HeroProps) {
  return (
    <section className="mt-14 pt-20 pb-14 text-center bg-gradient-to-b from-accent-blue/6 to-transparent border-b border-border">
      <h1 className="text-4xl font-extrabold mb-3 max-md:text-2xl">
        <span className="text-accent-blue">第 {chapterNum} 章</span>：{title}
      </h1>
      <p className="text-text-secondary text-lg mb-8">{subtitle}</p>
      <div className="flex justify-center gap-8 flex-wrap">
        <div className="text-center">
          <div className="text-3xl font-bold text-accent-blue">{stats.modules}</div>
          <div className="text-[0.85rem] text-text-muted">教学模块</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-accent-blue">{stats.figures}</div>
          <div className="text-[0.85rem] text-text-muted">图表实例</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-accent-blue">{stats.rules}</div>
          <div className="text-[0.85rem] text-text-muted">交易规则</div>
        </div>
      </div>
    </section>
  );
}
