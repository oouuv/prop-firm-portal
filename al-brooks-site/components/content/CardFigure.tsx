'use client';

interface CardFigureProps {
  src: string;
  caption: string;
  alt: string;
  onImageClick?: (src: string) => void;
}

export function CardFigure({ src, caption, alt, onImageClick }: CardFigureProps) {
  return (
    <figure className="mt-4">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full rounded-md border border-border cursor-pointer transition-transform hover:scale-[1.01]"
        onClick={() => onImageClick?.(src)}
      />
      <figcaption className="text-[0.82rem] text-text-muted mt-2 text-center italic">
        {caption}
      </figcaption>
    </figure>
  );
}
