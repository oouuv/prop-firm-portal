interface InlineQuoteProps {
  text: string;
}

export function InlineQuote({ text }: InlineQuoteProps) {
  return (
    <blockquote className="my-3 px-4 py-2.5 border-l-[3px] border-accent-cyan bg-accent-cyan/5 rounded-r-md text-sm text-accent-cyan italic leading-relaxed">
      「{text}」
    </blockquote>
  );
}
