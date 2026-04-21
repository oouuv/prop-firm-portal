export type Firm = {
  id: string;
  name: string;
  leverage: string;
  maxDrawdown: string;
  profitSplit: string;
  evaluation: string;
  payoutCycle: string;
  tags: string[];
};

export const firms: Firm[] = [
  {
    id: "alpha-trade-capital",
    name: "Alpha Trade Capital",
    leverage: "1:100",
    maxDrawdown: "8% 静态",
    profitSplit: "80%",
    evaluation: "1-Step",
    payoutCycle: "14 天",
    tags: ["MT5", "Forex", "Indices"]
  },
  {
    id: "north-edge-funding",
    name: "North Edge Funding",
    leverage: "1:50",
    maxDrawdown: "10% 跟踪",
    profitSplit: "85%",
    evaluation: "2-Step",
    payoutCycle: "7 天",
    tags: ["CFD", "Crypto", "Weekend Hold"]
  },
  {
    id: "mono-quant-firm",
    name: "Mono Quant Firm",
    leverage: "1:30",
    maxDrawdown: "6% 静态",
    profitSplit: "90%",
    evaluation: "Instant",
    payoutCycle: "7 天",
    tags: ["Raw Spread", "News Trading"]
  }
];
