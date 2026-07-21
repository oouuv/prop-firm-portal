'use client';

import { useState } from 'react';
import { QuizQuestion } from '@/lib/types';

interface QuizProps {
  questions: QuizQuestion[];
}

export function Quiz({ questions }: QuizProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const isFinished = currentQ >= questions.length;
  const q = !isFinished ? questions[currentQ] : null;

  const handleAnswer = (optionIndex: number) => {
    if (answered.includes(currentQ)) return;
    setAnswered([...answered, currentQ]);
    setSelectedOption(optionIndex);
    setShowExplanation(true);
    if (optionIndex === q!.correct) setScore(score + 1);

    setTimeout(() => {
      setCurrentQ(currentQ + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }, 1500);
  };

  const reset = () => {
    setCurrentQ(0);
    setScore(0);
    setAnswered([]);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  if (isFinished) {
    const pct = score / questions.length;
    let comment = '';
    if (pct >= 0.9) comment = '出色！你对本章内容有深入的理解。';
    else if (pct >= 0.7) comment = '不错！你掌握了大部分核心概念。';
    else if (pct >= 0.5) comment = '还需努力。建议回顾相关模块的内容。';
    else comment = '建议重新学习本章内容，特别关注核心定义和交易规则。';

    return (
      <div className="text-center py-8 px-8 bg-bg-card border border-border rounded-lg">
        <div className="text-5xl font-extrabold text-accent-blue">{score}/{questions.length}</div>
        <div className="text-base text-text-secondary mt-3">{comment}</div>
        <button
          onClick={reset}
          className="mt-4 px-6 py-2.5 border-none rounded-md bg-accent-blue text-white font-semibold text-[0.9rem] cursor-pointer hover:opacity-85 transition-opacity"
        >
          重新测验
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="text-[0.85rem] text-text-muted mb-4 text-right">
        第 {currentQ + 1}/{questions.length} 题
      </div>
      <div className="bg-bg-card border border-border rounded-lg p-6">
        <div className="text-[1.05rem] font-semibold mb-4 leading-relaxed">{q!.q}</div>
        <div className="flex flex-col gap-2">
          {q!.options.map((opt, i) => {
            let style = 'border-border text-text-secondary hover:border-accent-blue hover:bg-accent-blue/6';
            if (selectedOption !== null) {
              if (i === q!.correct) style = 'border-accent-green bg-accent-green/10 text-accent-green';
              else if (i === selectedOption) style = 'border-accent-red bg-accent-red/10 text-accent-red';
            }
            return (
              <div
                key={i}
                className={`flex items-center gap-2.5 px-4 py-3 border rounded-lg cursor-pointer transition-all text-[0.93rem] ${style}`}
                onClick={() => handleAnswer(i)}
              >
                <div className="w-[18px] h-[18px] rounded-full border-2 border-border flex-shrink-0 flex items-center justify-center transition-all">
                  {selectedOption !== null && i === q!.correct && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                  {selectedOption !== null && i === selectedOption && i !== q!.correct && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <span>{opt}</span>
              </div>
            );
          })}
        </div>
        {showExplanation && (
          <div
            className={`mt-3 px-4 py-3 rounded-lg text-[0.9rem] leading-relaxed ${
              selectedOption === q!.correct
                ? 'bg-accent-green/10 text-accent-green border border-accent-green/20'
                : 'bg-accent-red/10 text-accent-red border border-accent-red/20'
            }`}
          >
            {selectedOption === q!.correct ? '✓ 正确！' : '✗ 错误。'} {q!.explanation}
          </div>
        )}
      </div>
    </div>
  );
}
