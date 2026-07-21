import { GlossaryEntry } from './types';

export const glossary: GlossaryEntry[] = [
  {
    term: '尖峰',
    english: 'Spike',
    definition: '一组强劲的趋势棒形成的快速价格运动，通常只有几根K线。尖峰本质上是一个逃逸缺口，市场迅速从一个价位运动至另一个价位。',
  },
  {
    term: '通道',
    pinyin: 'tōng dào',
    english: 'Channel',
    definition: '倾斜的交易区间，价格在两条平行线之间波动。通道内有大量重叠棒线，交易者双向交易，趋势在"忧虑墙"中持续延伸。',
  },
  {
    term: '逃逸缺口',
    english: 'Runaway Gap',
    definition: '趋势中途出现的缺口，表示趋势加速，通常不会被快速回补。尖峰本质上就是逃逸缺口。',
  },
  {
    term: '总在场内',
    english: 'Always In',
    definition: '一旦趋势明确建立，总有一个方向是"总在场内"的——即始终有一个方向的交易者在持仓等待趋势继续。',
  },
  {
    term: '交易区间',
    english: 'Trading Range',
    definition: '价格在水平的高低点之间来回波动的市场状态，没有明确的趋势方向。通道是倾斜的交易区间。',
  },
  {
    term: '突破',
    english: 'Breakout',
    definition: '价格穿过重要的支撑或阻力位。在Al Brooks体系中，突破与尖峰、缺口、高潮是等价的概念。',
  },
  {
    term: '回调',
    english: 'Pullback',
    definition: '趋势中的暂时反向运动，通常是对前一波运动的修正。在通道中回调很常见。',
  },
  {
    term: '测量运动',
    english: 'Measured Move',
    definition: '基于尖峰或通道的第一段运动来预测第二段运动的目标位。通常将第一段的幅度叠加到突破点。',
  },
  {
    term: '信号棒',
    english: 'Signal Bar',
    definition: '提供入场信号的K线形态，交易者在信号棒的高点或低点设置入场单。',
  },
  {
    term: '入场棒',
    english: 'Entry Bar',
    definition: '触发入场的K线，即信号棒之后价格突破信号棒高点或低点的那一根。',
  },
  {
    term: '高潮',
    english: 'Climax',
    definition: '极端的价格运动，通常伴随着大成交量和大幅K线。连续高潮后反转幅度通常更大。',
  },
  {
    term: '双顶/双底',
    english: 'Double Top/Bottom',
    definition: '价格两次测试同一水平后反转的形态。在通道中，双顶底旗形是常见的延续形态。',
  },
  {
    term: '楔形',
    english: 'Wedge',
    definition: '收敛通道形态，通常有三条推进线，趋势线和通道线逐渐收敛。是反转的常见形态。',
  },
  {
    term: '头肩顶/底',
    english: 'Head and Shoulders',
    definition: '由三个峰/谷组成的反转形态，中间的最高/低为"头"，两侧为"肩"。',
  },
  {
    term: '均线',
    english: 'Moving Average',
    definition: '一定周期内收盘价的平均值连线。在趋势中，均线是动态支撑/阻力位。',
  },
];

export function getGlossaryEntry(term: string): GlossaryEntry | undefined {
  return glossary.find(g => g.term === term);
}
