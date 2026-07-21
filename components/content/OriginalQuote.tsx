interface OriginalQuoteProps {
  text: string;
  cite?: string;
}

export function OriginalQuote({ text, cite }: OriginalQuoteProps) {
  return (
    <blockquote className="my-4 px-5 py-4 border-l-4 border-accent-blue bg-accent-blue/6 rounded-r-lg">
      <p className="text-text-primary text-[15px] leading-relaxed italic m-0">
        「{text}」
      </p>
      {cite && (
        <cite className="block mt-2 text-xs text-text-muted not-italic">{cite}</cite>
      )}
    </blockquote>
  );
}
