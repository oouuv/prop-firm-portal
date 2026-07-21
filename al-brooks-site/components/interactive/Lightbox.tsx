'use client';

import { useEffect, useCallback } from 'react';

interface LightboxProps {
  src: string | null;
  onClose: () => void;
}

export function Lightbox({ src, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (src) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [src, handleKeyDown]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-black/88 z-[200] flex justify-center items-center cursor-zoom-out"
      onClick={onClose}
    >
      <img
        src={src}
        alt="Enlarged chart"
        className="max-w-[92vw] max-h-[92vh] rounded-lg shadow-2xl"
      />
    </div>
  );
}
