import { notFound } from 'next/navigation';
import { chapters } from '@/lib/chapters';
import { ChapterData } from '@/lib/types';
import { ChapterRenderer } from '@/components/chapter/ChapterRenderer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return chapters.map((ch) => ({ slug: ch.slug }));
}

export default async function ChapterPage({ params }: PageProps) {
  const { slug } = await params;

  let data: ChapterData;
  try {
    data = (await import(`@/data/chapters/${slug}.json`)).default as ChapterData;
  } catch {
    notFound();
  }

  return <ChapterRenderer data={data} />;
}
