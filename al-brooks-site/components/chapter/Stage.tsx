import { ReactNode } from 'react';

interface StageProps {
  id: string;
  num: string;
  title: string;
  desc: string;
  children: ReactNode;
}

export function Stage({ id, num, title, desc, children }: StageProps) {
  return (
    <section id={id} className="mb-16">
      <div className="mb-6">
        <span className="inline-block text-xs font-semibold text-accent-blue bg-accent-blue/10 px-2.5 py-[3px] rounded-xl mb-2">
          {num}
        </span>
        <h2 className="text-2xl font-bold max-md:text-[1.3rem]">{title}</h2>
        <p className="text-text-secondary mt-2 text-[0.95rem]">{desc}</p>
      </div>
      {children}
    </section>
  );
}
