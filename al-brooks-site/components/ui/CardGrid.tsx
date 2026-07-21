import { ReactNode } from 'react';

interface CardGridProps {
  children: ReactNode;
  cols3?: boolean;
}

export function CardGrid({ children, cols3 = false }: CardGridProps) {
  return (
    <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${cols3 ? 'xl:grid-cols-3' : ''}`}>
      {children}
    </div>
  );
}
