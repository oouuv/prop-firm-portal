import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function Card({ children, className = '', fullWidth = false }: CardProps) {
  return (
    <div
      className={`bg-bg-card border border-border rounded-lg p-5 transition-colors hover:border-[#484f58] hover:bg-bg-card-hover ${fullWidth ? 'md:col-span-2' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3 className={`text-lg font-semibold mb-2 leading-snug ${className}`}>
      {children}
    </h3>
  );
}

interface CardTextProps {
  children?: ReactNode;
  className?: string;
  dangerouslySetInnerHTML?: { __html: string };
}

export function CardText({ children, className = '', dangerouslySetInnerHTML }: CardTextProps) {
  if (dangerouslySetInnerHTML) {
    return (
      <p
        className={`text-text-secondary text-[0.95rem] leading-relaxed ${className}`}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      />
    );
  }
  return (
    <p className={`text-text-secondary text-[0.95rem] leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
