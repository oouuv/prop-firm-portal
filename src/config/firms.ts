export type Firm = {
  id: string;
  name: string;
  description: string;
  discountCode: string;
  tags: string[];
};

export const firms: Firm[] = [
  {
    id: "YRM",
    name: "YRM",
    description: "新晋平台，50K账户性价比最强平台。",
    discountCode: "OOUUV",
    tags: ["deepchart", "Dxfeed"]
  },
  {
    id: "Lucid",
    name: "Lucid",
    description: "大多数新手第一次出金的平台。",
    discountCode: "😭没申请到",
    tags: ["TDV", "Rithmic", "Tradesea"]
  }
];
