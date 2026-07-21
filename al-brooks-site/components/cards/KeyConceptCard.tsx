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

interface KeyConceptCardProps {
  color?: KeyConceptColor;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}

export function KeyConceptCard({ color = 'blue', fullWidth = false, children, className = '' }: KeyConceptCardProps) {
  return (
    <div
      className={`bg-bg-card border border-border rounded-lg p-5 transition-colors hover:border-[#484f58] hover:bg-bg-card-hover border-l-4 ${colorMap[color]} ${fullWidth ? 'md:col-span-2' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
