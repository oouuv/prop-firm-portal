import Link from "next/link";
import { ChartCandlestick, Home, Library } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

type SiteHeaderProps = {
  showNav?: boolean;
};

export function SiteHeader({ showNav = true }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide">
          <ChartCandlestick className="h-4 w-4" />
          PROP FIRM OOUUV
        </Link>

        {showNav ? (
          <nav className="hidden items-center gap-5 md:flex">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <Home className="h-4 w-4" />
              首页
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <Library className="h-4 w-4" />
              交易资源
            </Link>
          </nav>
        ) : (
          <div />
        )}

        <ThemeToggle />
      </div>
    </header>
  );
}
