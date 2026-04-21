import { FirmCard } from "@/components/firm-card";
import { SiteHeader } from "@/components/site-header";
import { firms } from "@/config/firms";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <section className="mb-10 border-b border-border pb-8">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Prop Firm 指南</h1>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">没有天赋，那就重复。</p>
        </section>

        <section id="firms" className="space-y-5">
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-semibold tracking-tight">推荐平台</h2>
            <span className="text-xs text-muted-foreground">{firms.length} Platforms</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {firms.map((firm) => (
              <FirmCard key={firm.id} firm={firm} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
