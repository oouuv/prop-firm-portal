import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ShieldCheck, TriangleAlert, Target } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { firms } from "@/config/firms";

type RulePageProps = {
  params: Promise<{ id: string }>;
};

const defaultRules = {
  summary: "该账户为评估账户，目标是在风险受控的前提下稳定盈利。规则核心是先活下来，再追求收益。",
  passConditions: [
    "达到目标收益后可申请进入下一阶段/真实账户",
    "交易行为需保持一致性，不可通过极端加仓冲关",
    "建议至少完成 5 个交易日，避免单日结果失真"
  ],
  violationConditions: [
    "触发最大回撤或日内回撤即判定失败",
    "重大新闻时段重仓且出现滑点爆仓风险",
    "使用违规策略（例如高频刷单、延迟套利等）"
  ],
  parameters: [
    { label: "账户规模", value: "50K" },
    { label: "建议单笔风险", value: "0.25% - 0.5%" },
    { label: "建议日风险上限", value: "1% - 1.5%" },
    { label: "建议交易时段", value: "伦敦盘 / 美盘主时段" }
  ]
};

export default async function RuleDetailPage({ params }: RulePageProps) {
  const { id } = await params;
  const firm = firms.find((item) => item.id.toLowerCase() === id.toLowerCase());

  if (!firm) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-4xl">
          <Link
            href="/#firms"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            返回平台列表
          </Link>

          <section className="mt-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 border-b border-border pb-5">
              <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                规则详情
              </span>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{firm.name} 账户规则</h1>
            </div>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">{defaultRules.summary}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <article className="rounded-xl border border-border p-4">
                <h2 className="inline-flex items-center gap-2 text-sm font-semibold">
                  <Target className="h-4 w-4" />
                  通过条件
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {defaultRules.passConditions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-xl border border-border p-4">
                <h2 className="inline-flex items-center gap-2 text-sm font-semibold">
                  <TriangleAlert className="h-4 w-4" />
                  违规条件
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {defaultRules.violationConditions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>

            <section className="mt-4 rounded-xl border border-border p-4">
              <h2 className="inline-flex items-center gap-2 text-sm font-semibold">
                <ShieldCheck className="h-4 w-4" />
                交易参数建议
              </h2>
              <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                {defaultRules.parameters.map((item) => (
                  <div key={item.label} className="rounded-lg border border-border/70 bg-muted/30 p-3">
                    <dt className="text-xs text-muted-foreground">{item.label}</dt>
                    <dd className="mt-1 text-sm font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <div className="mt-5 flex flex-wrap gap-2">
              {firm.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-muted px-2 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
