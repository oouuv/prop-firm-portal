import { ReactNode } from 'react';

interface GlossaryTermProps {
  term: string;
  tooltip: string;
  children?: ReactNode;
}

export function GlossaryTerm({ term, tooltip, children }: GlossaryTermProps) {
  return (
    <span className="relative inline border-b border-dashed border-accent-blue text-accent-blue font-medium cursor-help group">
      {children || term}
      <span className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#1c2128] border border-border rounded-lg px-4 py-3 w-[300px] text-[0.85rem] text-text-secondary leading-normal z-50 shadow-lg pointer-events-none normal-case font-normal not-italic">
        {tooltip}
      </span>
    </span>
  );
}
