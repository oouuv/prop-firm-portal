import { SiteHeader } from "@/components/site-header";

const resourceGroups = [
  {
    title: "交易基础",
    items: [
      "交易计划模板",
      "风险控制清单",
      "复盘日志结构"
    ]
  },
  {
    title: "进阶实战",
    items: [
      "盘前准备流程",
      "新闻波动应对",
      "高胜率场景库"
    ]
  },
  {
    title: "工具与数据",
    items: [
      "深度图解读指引",
      "订单流观察框架",
      "绩效统计维度"
    ]
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <section className="mb-8 border-b border-border pb-6">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">交易资源</h1>
          <p className="mt-3 text-sm text-muted-foreground">围绕评估账户与实盘执行整理的高价值资料。</p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {resourceGroups.map((group) => (
            <article key={group.title} className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-base font-semibold tracking-tight">{group.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
