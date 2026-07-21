import { ReactNode } from 'react';
import { KeyConceptColor } from '@/lib/types';

const colorStyles: Record<KeyConceptColor, { bg: string; border: string; title: string }> = {
  blue: { bg: 'bg-accent-blue/6', border: 'border-accent-blue/15', title: 'text-accent-blue' },
  orange: { bg: 'bg-accent-orange/6', border: 'border-accent-orange/15', title: 'text-accent-orange' },
  red: { bg: 'bg-accent-red/6', border: 'border-accent-red/15', title: 'text-accent-red' },
  green: { bg: 'bg-accent-green/6', border: 'border-accent-green/15', title: 'text-accent-green' },
  purple: { bg: 'bg-accent-purple/6', border: 'border-accent-purple/15', title: 'text-accent-purple' },
  yellow: { bg: 'bg-accent-yellow/6', border: 'border-accent-yellow/15', title: 'text-accent-yellow' },
  cyan: { bg: 'bg-accent-cyan/6', border: 'border-accent-cyan/15', title: 'text-accent-cyan' },
};

interface HighlightBoxProps {
  title: string;
  children: ReactNode;
  color?: KeyConceptColor;
}

export function HighlightBox({ title, children, color = 'blue' }: HighlightBoxProps) {
  const style = colorStyles[color];
  return (
    <div className={`mt-3 px-4 py-3 ${style.bg} border ${style.border} rounded-lg`}>
      <div className={`text-[0.85rem] font-semibold ${style.title} mb-1.5`}>{title}</div>
      <div className="text-text-secondary text-[0.95rem] leading-relaxed">{children}</div>
    </div>
  );
}
