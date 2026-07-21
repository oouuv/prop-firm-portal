import { CardTag as CardTagType } from '@/lib/types';

const tagStyles: Record<CardTagType, string> = {
  concept: 'text-accent-blue bg-accent-blue/12',
  example: 'text-accent-orange bg-accent-orange/12',
  summary: 'text-accent-purple bg-accent-purple/12',
  case: 'text-accent-green bg-accent-green/12',
  warning: 'text-accent-red bg-accent-red/12',
  rule: 'text-accent-cyan bg-accent-cyan/12',
  quiz: 'text-accent-yellow bg-accent-yellow/12',
};

interface CardTagProps {
  type: CardTagType;
  label?: string;
}

export function CardTag({ type, label }: CardTagProps) {
  return (
    <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-[10px] uppercase tracking-wider ${tagStyles[type]}`}>
      {label || type}
    </span>
  );
}
