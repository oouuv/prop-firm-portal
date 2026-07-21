'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  logo?: string;
  navItems?: { id: string; label: string }[];
}

export function Header({ logo = 'Al Brooks', navItems = [] }: HeaderProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-bg-primary/92 backdrop-blur-xl border-b border-border z-50 flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-4 w-full">
        <Link href="/" className="text-[15px] font-bold text-accent-blue whitespace-nowrap no-underline">
          {logo}
        </Link>
        {!isHome && navItems.length > 0 && (
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-text-secondary text-[13px] px-3 py-1 rounded-full whitespace-nowrap hover:text-text-primary hover:bg-accent-blue/12 transition-all no-underline"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
