import { ReactNode } from 'react';
import { KeyConceptColor } from '@/lib/types';

const colorMap: Record<KeyConceptColor, string> = {
  blue: 'border-l-accent-blue',
  orange: 'border-l-accent-orange',
  red: 'border-l-accent-red',
  green: 'border-l-accent-green',
  purple: 'border-l-accent-purple',
  yellow: 'border-l-accent-yellow',
  cyan: 'border-l-accent-cyan',
};

interface RuleCardProps {
  condition: string;
  action: string;
  example?: string;
  color?: KeyConceptColor;
}

export function RuleCard({ condition, action, example, color = 'cyan' }: RuleCardProps) {
  return (
    <div className={`bg-bg-card border border-border rounded-lg p-4 border-l-4 ${colorMap[color]}`}>
      <div className={`text-[0.85rem] font-semibold uppercase tracking-wider mb-1.5 ${color === 'red' ? 'text-accent-red' : color === 'cyan' ? 'text-accent-cyan' : 'text-accent-blue'}`}>
        {condition}
      </div>
      <div className="text-[0.95rem] text-text-primary mb-1">{action}</div>
      {example && (
        <div className="text-[0.88rem] text-text-muted italic">{example}</div>
      )}
    </div>
  );
}
