import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { books, getChaptersByBook } from '@/lib/chapters';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mt-14">
        {/* Hero */}
        <section className="pt-20 pb-14 text-center bg-gradient-to-b from-accent-blue/6 to-transparent border-b border-border">
          <h1 className="text-4xl font-extrabold mb-3">
            <span className="text-accent-blue">Al Brooks</span> 价格行为交易
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto px-6">
            献给严肃交易者的逐棒价格图表技术分析
          </p>
        </section>

        {/* Books */}
        <section className="max-w-[1200px] mx-auto px-6 py-12">
          {books.map((book) => {
            const bookChapters = getChaptersByBook(book.num);
            return (
              <div key={book.num} className="mb-12 last:mb-0">
                <div className="flex items-baseline gap-3 mb-6">
                  <h2 className="text-2xl font-bold">
                    <span className="text-accent-blue">第{book.num}部</span> {book.title}
                  </h2>
                  <span className="text-text-muted text-sm">
                    Trading Price Action: {book.num === 1 ? 'Trends' : book.num === 2 ? 'Trading Ranges' : 'Reversals'}
                  </span>
                </div>
                {bookChapters.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {bookChapters.map((ch) => (
                      <Link
                        key={ch.slug}
                        href={`/chapters/${ch.slug}`}
                        className="block bg-bg-card border border-border rounded-lg p-5 transition-all hover:border-accent-blue hover:bg-bg-card-hover no-underline group"
                      >
                        <div className="text-accent-blue text-xs font-semibold mb-2">
                          第 {ch.chapterNum} 章
                        </div>
                        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
                          {ch.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-3">
                          {ch.description}
                        </p>
                        <div className="flex gap-4 text-xs text-text-muted">
                          <span>{ch.sections} 个模块</span>
                          <span>{ch.figures} 张图表</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 border-2 border-dashed border-border rounded-lg text-center">
                    <p className="text-text-muted text-sm">
                      该卷章节正在制作中...
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {/* Placeholder for more chapters */}
          <div className="mt-4 p-8 border-2 border-dashed border-border rounded-lg text-center">
            <p className="text-text-muted text-sm">
              更多章节正在制作中... 使用 v1 提示词可自动生成新章节的 JSON 数据
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
