import Link from "next/link";
import { ChartCandlestick, Library, Layers3 } from "lucide-react";
import { FirmCard } from "@/components/firm-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { firms } from "@/config/firms";

const navItems = [
  { href: "#firms", label: "Prop Firms", icon: Layers3 },
  { href: "#resources", label: "交易资源", icon: Library }
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide">
            <ChartCandlestick className="h-4 w-4" />
            PROP PORTAL
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <section className="mb-10 border-b border-border pb-8">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">Swiss Minimal Interface</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Prop Firm 数据总览</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            黑白灰界面仅保留交易决策所需信息，强调色由原子变量驱动，可随时切换为金融蓝、科技绿等品牌色。
          </p>
        </section>

        <section id="firms" className="space-y-5">
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Prop Firm 平台</h2>
            <span className="text-xs text-muted-foreground">{firms.length} Platforms</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {firms.map((firm) => (
              <FirmCard key={firm.id} firm={firm} />
            ))}
          </div>
        </section>

        <section id="resources" className="mt-14 border-t border-border pt-8">
          <h2 className="text-xl font-semibold tracking-tight">交易资源</h2>
          <p className="mt-2 text-sm text-muted-foreground">后续可扩展为文章分类、极简时间线列表与高可读排版。</p>
        </section>
      </main>
    </div>
  );
}
