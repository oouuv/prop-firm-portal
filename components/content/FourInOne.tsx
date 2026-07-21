import { FourInOneItem } from '@/lib/types';

interface FourInOneProps {
  items: FourInOneItem[];
}

export function FourInOne({ items }: FourInOneProps) {
  return (
    <div className="grid grid-cols-2 gap-4 my-4 md:grid-cols-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="text-center py-5 px-3 bg-bg-card border border-border rounded-lg transition-all hover:-translate-y-0.5 hover:border-accent-blue"
        >
          <div className="text-3xl mb-2">{item.icon}</div>
          <div className="text-[0.95rem] font-semibold text-text-primary mb-1">{item.label}</div>
          <div className="text-[0.82rem] text-text-muted">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}
