import type { Firm } from "@/config/firms";

type FirmCardProps = {
  firm: Firm;
};

const rows = [
  { key: "leverage", label: "Leverage" },
  { key: "maxDrawdown", label: "Max Drawdown" },
  { key: "profitSplit", label: "Profit Split" },
  { key: "evaluation", label: "Evaluation" },
  { key: "payoutCycle", label: "Payout" }
] as const;

export function FirmCard({ firm }: FirmCardProps) {
  return (
    <article className="group rounded-xl border border-border bg-card p-5 transition-colors duration-200 hover:border-primary/40">
      <header className="mb-4 flex items-start justify-between gap-4 border-b border-border pb-4">
        <h3 className="text-base font-semibold tracking-tight text-card-foreground">{firm.name}</h3>
        <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
          {firm.id}
        </span>
      </header>

      <dl className="space-y-2.5 text-sm">
        {rows.map(({ key, label }) => (
          <div key={key} className="flex items-center justify-between border-b border-border/60 pb-2 last:border-0 last:pb-0">
            <dt className="text-muted-foreground">{label}</dt>
            <dd className="font-medium text-foreground">{firm[key]}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 flex flex-wrap gap-2">
        {firm.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border bg-muted px-2 py-1 text-xs text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
