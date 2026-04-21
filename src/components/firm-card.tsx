import Link from "next/link";
import type { Firm } from "@/config/firms";

type FirmCardProps = {
  firm: Firm;
};

export function FirmCard({ firm }: FirmCardProps) {
  return (
    <article className="group rounded-xl border border-border bg-card p-5 transition-colors duration-200 hover:border-primary/40">
      <header className="mb-4 border-b border-border pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold tracking-tight text-card-foreground">{firm.name}</h3>
          <Link
            href={`/rules/${firm.id.toLowerCase()}`}
            className="mr-2.5 rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:text-foreground"
          >
            规则
          </Link>
        </div>
      </header>

      <p className="text-sm text-muted-foreground">{firm.description}</p>
      <p className="mt-3 text-sm text-muted-foreground">折扣码：{firm.discountCode}</p>

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
