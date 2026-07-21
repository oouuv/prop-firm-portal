'use client';

import { useState } from 'react';
import { ChapterData, CardData, CardContentBlock, KeyConceptColor, RuleCardDataItem } from '@/lib/types';
import { Header } from '@/components/layout/Header';
import { Hero } from './Hero';
import { Stage } from './Stage';
import { CardGrid } from '@/components/ui/CardGrid';
import { CardTag } from '@/components/ui/CardTag';
import { Card, CardTitle, CardText } from '@/components/cards/Card';
import { ExpandableCard } from '@/components/cards/ExpandableCard';
import { KeyConceptCard } from '@/components/cards/KeyConceptCard';
import { RuleCard } from '@/components/cards/RuleCard';
import { HighlightBox } from '@/components/cards/HighlightBox';
import { OriginalQuote } from '@/components/content/OriginalQuote';
import { InlineQuote } from '@/components/content/InlineQuote';
import { FourInOne } from '@/components/content/FourInOne';
import { ComparisonTable } from '@/components/content/ComparisonTable';
import { CardFigure } from '@/components/content/CardFigure';
import { CardList } from '@/components/content/CardList';
import { GlossaryTerm } from '@/components/interactive/GlossaryTerm';
import { Quiz } from '@/components/interactive/Quiz';
import { Calculator } from '@/components/interactive/Calculator';
import { Lightbox } from '@/components/interactive/Lightbox';

interface ChapterRendererProps {
  data: ChapterData;
}

function renderContentBlock(block: CardContentBlock, onImageClick: (src: string) => void) {
  switch (block.type) {
    case 'text':
      return <CardText className="mb-2" dangerouslySetInnerHTML={{ __html: block.html }} />;
    case 'inline-quote':
      return <InlineQuote text={block.text} />;
    case 'original-quote':
      return <OriginalQuote text={block.text} cite={block.cite} />;
    case 'four-in-one':
      return <FourInOne items={block.items} />;
    case 'highlight':
      return (
        <HighlightBox title={block.title} color={block.color as KeyConceptColor}>
          <span dangerouslySetInnerHTML={{ __html: block.text }} />
        </HighlightBox>
      );
    case 'list':
      return <CardList items={block.items} />;
    case 'figure':
      return <CardFigure src={block.src} caption={block.caption} alt={block.alt} onImageClick={onImageClick} />;
    case 'rule-cards':
      return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-3">
          {block.items.map((item: RuleCardDataItem, i: number) => (
            <RuleCard
              key={i}
              condition={item.condition}
              action={item.action}
              example={item.example}
              color={item.color as KeyConceptColor}
            />
          ))}
        </div>
      );
    case 'glossary-text':
      return (
        <CardText className="mb-2">
          {block.parts.map((part, i) =>
            typeof part === 'string' ? (
              <span key={i} dangerouslySetInnerHTML={{ __html: part }} />
            ) : (
              <GlossaryTerm key={i} term={part.term} tooltip={part.tooltip} />
            )
          )}
        </CardText>
      );
    default:
      return null;
  }
}

function renderCard(card: CardData, onImageClick: (src: string) => void) {
  const tag = card.tag ? <CardTag type={card.tag} label={card.tagLabel} /> : null;

  switch (card.type) {
    case 'key-concept':
      return (
        <KeyConceptCard
          color={card.color as KeyConceptColor}
          fullWidth={card.fullwidth}
        >
          {tag}
          {card.title && <CardTitle>{card.title}</CardTitle>}
          {card.quote && (
            <OriginalQuote text={card.quote.text} cite={card.quote.cite} />
          )}
          {card.highlight && (
            <HighlightBox title={card.highlight.title} color={card.highlight.color as KeyConceptColor}>
              <span dangerouslySetInnerHTML={{ __html: card.highlight.text }} />
            </HighlightBox>
          )}
        </KeyConceptCard>
      );

    case 'expandable':
      return (
        <ExpandableCard tag={tag} title={card.title || ''}>
          {card.content?.map((block, i) => (
            <div key={i}>{renderContentBlock(block, onImageClick)}</div>
          ))}
        </ExpandableCard>
      );

    case 'rule':
      return (
        <RuleCard
          condition={card.condition}
          action={card.action}
          example={card.example}
          color={card.color as KeyConceptColor}
        />
      );

    case 'fullwidth':
      return (
        <Card fullWidth>
          {tag}
          {card.title && <CardTitle>{card.title}</CardTitle>}
          {card.content?.map((block, i) => (
            <div key={i}>{renderContentBlock(block, onImageClick)}</div>
          ))}
        </Card>
      );

    case 'comparison-table':
      return (
        <Card fullWidth>
          {tag}
          {card.title && <CardTitle>{card.title}</CardTitle>}
          <ComparisonTable headers={card.headers} rows={card.rows} />
        </Card>
      );

    default:
      return null;
  }
}

export function ChapterRenderer({ data }: ChapterRendererProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      <Header logo={`Al Brooks Ch.${data.chapterNum}`} navItems={data.navItems} />
      <Hero
        chapterNum={data.chapterNum}
        title={data.title}
        subtitle={data.subtitle}
        stats={data.stats}
      />
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {data.sections.map((section) => (
          <Stage
            key={section.id}
            id={section.id}
            num={section.num}
            title={section.title}
            desc={section.desc}
          >
            <CardGrid>
              {section.cards.map((card, i) => (
                <div key={i}>{renderCard(card, setLightboxSrc)}</div>
              ))}
            </CardGrid>
          </Stage>
        ))}

        {/* Calculator Section */}
        <section className="mb-16">
          <div className="mb-6">
            <span className="inline-block text-xs font-semibold text-accent-cyan bg-accent-cyan/10 px-2.5 py-[3px] rounded-xl mb-2">
              工具
            </span>
            <h2 className="text-2xl font-bold">测量运动计算器</h2>
          </div>
          <Calculator />
        </section>

        {/* Quiz Section */}
        {data.quiz.length > 0 && (
          <section className="mb-16">
            <div className="mb-6">
              <span className="inline-block text-xs font-semibold text-accent-yellow bg-accent-yellow/10 px-2.5 py-[3px] rounded-xl mb-2">
                自测
              </span>
              <h2 className="text-2xl font-bold">章节测验</h2>
            </div>
            <Quiz questions={data.quiz} />
          </section>
        )}
      </div>
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );
}
