'use client';

import { useState } from 'react';

export function Calculator() {
  const [spikeLow, setSpikeLow] = useState('');
  const [spikeHigh, setSpikeHigh] = useState('');
  const [results, setResults] = useState<{ range: number; target: number; midpoint: number } | null>(null);

  const calculate = () => {
    const low = parseFloat(spikeLow);
    const high = parseFloat(spikeHigh);
    if (isNaN(low) || isNaN(high) || low >= high) return;
    const range = high - low;
    setResults({
      range,
      target: high + range,
      midpoint: low + range / 2,
    });
  };

  return (
    <div className="bg-bg-card border border-border rounded-lg p-6">
      <div className="flex gap-4 flex-wrap mb-4 items-end">
        <div className="flex-1 min-w-[140px]">
          <label className="block text-[0.82rem] text-text-muted mb-1">尖峰低点</label>
          <input
            type="number"
            value={spikeLow}
            onChange={(e) => setSpikeLow(e.target.value)}
            className="w-full px-3 py-2.5 border border-border rounded-md bg-bg-primary text-text-primary text-[0.95rem] font-mono focus:outline-none focus:border-accent-blue"
            placeholder="例如: 100"
          />
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="block text-[0.82rem] text-text-muted mb-1">尖峰高点</label>
          <input
            type="number"
            value={spikeHigh}
            onChange={(e) => setSpikeHigh(e.target.value)}
            className="w-full px-3 py-2.5 border border-border rounded-md bg-bg-primary text-text-primary text-[0.95rem] font-mono focus:outline-none focus:border-accent-blue"
            placeholder="例如: 110"
          />
        </div>
        <button
          onClick={calculate}
          className="px-6 py-2.5 border-none rounded-md bg-accent-blue text-white font-semibold text-[0.9rem] cursor-pointer hover:opacity-85 transition-opacity"
        >
          计算目标
        </button>
      </div>
      {results && (
        <div className="mt-4 p-4 rounded-lg bg-accent-blue/6 border border-accent-blue/15">
          <div className="flex justify-between py-1.5 border-b border-accent-blue/8 text-[0.9rem] last:border-b-0">
            <span className="text-text-secondary">尖峰幅度</span>
            <span className="text-accent-blue font-semibold font-mono">{results.range.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-accent-blue/8 text-[0.9rem] last:border-b-0">
            <span className="text-text-secondary">测量运动目标位</span>
            <span className="text-accent-blue font-semibold font-mono">{results.target.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-accent-blue/8 text-[0.9rem] last:border-b-0">
            <span className="text-text-secondary">50% 中点</span>
            <span className="text-accent-blue font-semibold font-mono">{results.midpoint.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
