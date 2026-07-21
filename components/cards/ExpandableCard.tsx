'use client';

import { ReactNode, useState } from 'react';

interface ExpandableCardProps {
  tag?: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}

export function ExpandableCard({ tag, title, children, className = '' }: ExpandableCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-bg-card border border-border rounded-lg p-5 cursor-pointer select-none transition-colors hover:border-[#484f58] hover:bg-bg-card-hover border-l-4 border-l-accent-blue ${className}`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">
        {tag}
        <span
          className={`w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </div>
      <h3 className="text-lg font-semibold mt-2 leading-snug">{title}</h3>
      <div
        className={`overflow-hidden transition-[max-height] duration-400 ease-in-out ${open ? 'max-h-[2000px]' : 'max-h-0'}`}
      >
        <div className="pt-3">{children}</div>
      </div>
    </div>
  );
}
