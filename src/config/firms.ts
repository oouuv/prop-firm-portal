export type Firm = {
  id: string;
  name: string;
  description: string;
  tags: string[];
};

//Firm[]
export const firms: any[] = [
  {
    id: "YRM",
    name: "YRM",
    description: "新晋平台，50K账户性价比最强平台。",
    discountCode: 'OOUUV',
    // leverage: "1:100",
    // maxDrawdown: "8% 静态",
    // profitSplit: "80%",
    // evaluation: "1-Step",
    // payoutCycle: "14 天",
    tags: ["deepchart", "Dxfeed"]
  },
  {
    id: "Lucid",
    name: "Lucid",
    description: "大多数新手第一次出金的平台。",
    discountCode: '😭没申请到',
    // leverage: "1:100",
    // maxDrawdown: "8% 静态",
    // profitSplit: "80%",
    // evaluation: "1-Step",
    // payoutCycle: "14 天",
    tags: ["TDV","Rithmic","Tradesea"]
  },
  // {
  //   id: "north-edge-funding",
  //   name: "North Edge Funding",
  //   leverage: "1:50",
  //   maxDrawdown: "10% 跟踪",
  //   profitSplit: "85%",
  //   evaluation: "2-Step",
  //   payoutCycle: "7 天",
  //   tags: ["CFD", "Crypto", "Weekend Hold"]
  // },
  // {
  //   id: "mono-quant-firm",
  //   name: "Mono Quant Firm",
  //   leverage: "1:30",
  //   maxDrawdown: "6% 静态",
  //   profitSplit: "90%",
  //   evaluation: "Instant",
  //   payoutCycle: "7 天",
  //   tags: ["Raw Spread", "News Trading"]
  // }
];
