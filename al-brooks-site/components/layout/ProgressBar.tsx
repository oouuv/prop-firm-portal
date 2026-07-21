'use client';

import { useEffect, useState } from 'react';

export function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setWidth(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-1 bg-bg-secondary z-50">
      <div
        className="h-full bg-accent-blue transition-[width] duration-100"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
