interface CardListProps {
  items: { text: string }[];
}

export function CardList({ items }: CardListProps) {
  return (
    <ul className="list-none mt-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-[18px] mb-1.5 text-text-secondary text-[0.93rem] leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-blue"
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}
