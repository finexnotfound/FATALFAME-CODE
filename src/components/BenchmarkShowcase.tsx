import React, { useState } from 'react';
import { BENCHMARKS } from '../data/modelData';
import { BarChart3, Trophy, Zap, ShieldCheck, Flame } from 'lucide-react';

interface BenchmarkShowcaseProps {
  darkMode: boolean;
}

export const BenchmarkShowcase: React.FC<BenchmarkShowcaseProps> = ({ darkMode }) => {
  const [selectedBenchmark, setSelectedBenchmark] = useState<string>(BENCHMARKS[0].name);

  const current = BENCHMARKS.find((b) => b.name === selectedBenchmark) || BENCHMARKS[0];

  return (
    <section id="benchmarks" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-3">
            <Trophy className="w-3.5 h-3.5 text-rose-500" />
            <span>Empirical Validation</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            Unrivaled Coding Benchmarks
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Tested systematically across strict zero-shot benchmarks, real repository issues, and competitive algorithmic challenges.
          </p>
        </div>

        {/* 3 Metric Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className={`p-6 rounded-2xl border transition-all ${
            darkMode ? 'bg-neutral-900/60 border-neutral-800 backdrop-blur-xl' : 'bg-white/80 border-neutral-200 shadow-sm backdrop-blur-xl'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                SWE-bench Verified
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/30 font-semibold">
                SOTA #1
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className={`text-4xl sm:text-5xl font-extrabold font-mono tracking-tight ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                78.4%
              </span>
              <span className="text-xs text-emerald-500 font-semibold">+12.6% over Sonnet</span>
            </div>
            <p className={`text-xs mt-3 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              End-to-end multi-file bug repair across authentic production open source codebases.
            </p>
          </div>

          <div className={`p-6 rounded-2xl border transition-all ${
            darkMode ? 'bg-neutral-900/60 border-neutral-800 backdrop-blur-xl' : 'bg-white/80 border-neutral-200 shadow-sm backdrop-blur-xl'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                HumanEval Pass@1
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/30 font-semibold">
                Near Perfect
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className={`text-4xl sm:text-5xl font-extrabold font-mono tracking-tight ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                98.6%
              </span>
              <span className="text-xs text-emerald-500 font-semibold">162/164 passed</span>
            </div>
            <p className={`text-xs mt-3 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Evaluated with zero prompts modification and compiler execution harness.
            </p>
          </div>

          <div className={`p-6 rounded-2xl border transition-all ${
            darkMode ? 'bg-neutral-900/60 border-neutral-800 backdrop-blur-xl' : 'bg-white/80 border-neutral-200 shadow-sm backdrop-blur-xl'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Price per Million Tokens
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 font-semibold">
                Permanent
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight text-emerald-500">
                $0.00
              </span>
              <span className="text-xs text-emerald-500 font-semibold">Completely Free</span>
            </div>
            <p className={`text-xs mt-3 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Finex Tm pledge: Frontier programming intelligence accessible to all without fees.
            </p>
          </div>
        </div>

        {/* Detailed Benchmark Comparison Matrix */}
        <div className={`rounded-2xl p-6 sm:p-8 border transition-all ${
          darkMode ? 'bg-neutral-900/60 border-neutral-800 backdrop-blur-2xl' : 'bg-white/90 border-neutral-200 shadow-md backdrop-blur-2xl'
        }`}>
          {/* Benchmark Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-neutral-700/30">
            {BENCHMARKS.map((b) => (
              <button
                key={b.name}
                type="button"
                onClick={() => setSelectedBenchmark(b.name)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedBenchmark === b.name
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                    : darkMode
                    ? 'bg-neutral-800/70 hover:bg-neutral-700 text-neutral-300'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>

          {/* Current Benchmark Focus */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  {current.name}
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {current.description}
                </p>
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border self-start sm:self-auto ${
                darkMode ? 'bg-neutral-800 text-neutral-300 border-neutral-700' : 'bg-neutral-100 text-neutral-800 border-neutral-200'
              }`}>
                {current.category}
              </span>
            </div>
          </div>

          {/* Comparative Horizontal Bar Visuals */}
          <div className="space-y-4">
            {/* FatalFlame (Flagship) */}
            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5 font-semibold">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-rose-500 fill-rose-500" />
                  <span className={darkMode ? 'text-white' : 'text-neutral-950'}>
                    FatalFlame (Finex Tm)
                  </span>
                  <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30">
                    100% Free
                  </span>
                </div>
                <span className="font-mono text-base font-extrabold text-rose-500">
                  {current.fatalFlame}{current.unit}
                </span>
              </div>
              <div className={`w-full h-3 rounded-full overflow-hidden ${darkMode ? 'bg-neutral-800' : 'bg-neutral-200'}`}>
                <div
                  className="h-full rounded-full bg-gradient-to-r from-rose-500 via-orange-500 to-amber-400 transition-all duration-700 shadow-sm"
                  style={{ width: `${Math.min(100, (current.fatalFlame / (current.unit === 'tok/s' ? 200 : 100)) * 100)}%` }}
                />
              </div>
            </div>

            {/* Claude 3.7 Sonnet */}
            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5 font-medium">
                <span className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                  Claude 3.7 Sonnet
                </span>
                <span className="font-mono font-bold text-neutral-400">
                  {current.claudeSonnet}{current.unit}
                </span>
              </div>
              <div className={`w-full h-2.5 rounded-full overflow-hidden ${darkMode ? 'bg-neutral-800/80' : 'bg-neutral-200'}`}>
                <div
                  className="h-full rounded-full bg-neutral-500 transition-all duration-700"
                  style={{ width: `${Math.min(100, (current.claudeSonnet / (current.unit === 'tok/s' ? 200 : 100)) * 100)}%` }}
                />
              </div>
            </div>

            {/* GPT-4.5 */}
            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5 font-medium">
                <span className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                  GPT-4.5
                </span>
                <span className="font-mono font-bold text-neutral-400">
                  {current.gpt45}{current.unit}
                </span>
              </div>
              <div className={`w-full h-2.5 rounded-full overflow-hidden ${darkMode ? 'bg-neutral-800/80' : 'bg-neutral-200'}`}>
                <div
                  className="h-full rounded-full bg-neutral-500 transition-all duration-700"
                  style={{ width: `${Math.min(100, (current.gpt45 / (current.unit === 'tok/s' ? 200 : 100)) * 100)}%` }}
                />
              </div>
            </div>

            {/* DeepSeek V3 */}
            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5 font-medium">
                <span className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                  DeepSeek-V3
                </span>
                <span className="font-mono font-bold text-neutral-400">
                  {current.deepseekV3}{current.unit}
                </span>
              </div>
              <div className={`w-full h-2.5 rounded-full overflow-hidden ${darkMode ? 'bg-neutral-800/80' : 'bg-neutral-200'}`}>
                <div
                  className="h-full rounded-full bg-neutral-500 transition-all duration-700"
                  style={{ width: `${Math.min(100, (current.deepseekV3 / (current.unit === 'tok/s' ? 200 : 100)) * 100)}%` }}
                />
              </div>
            </div>

            {/* Emily (Finex Tm previous) */}
            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="text-violet-400">Emily (Finex Tm 2025)</span>
                </div>
                <span className="font-mono font-bold text-violet-400">
                  {current.emily}{current.unit}
                </span>
              </div>
              <div className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? 'bg-neutral-800/80' : 'bg-neutral-200'}`}>
                <div
                  className="h-full rounded-full bg-violet-500/80 transition-all duration-700"
                  style={{ width: `${Math.min(100, (current.emily / (current.unit === 'tok/s' ? 200 : 100)) * 100)}%` }}
                />
              </div>
            </div>

            {/* Aeris (Finex Tm original) */}
            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="text-cyan-400">Aeris (Finex Tm 2024)</span>
                </div>
                <span className="font-mono font-bold text-cyan-400">
                  {current.aeris}{current.unit}
                </span>
              </div>
              <div className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? 'bg-neutral-800/80' : 'bg-neutral-200'}`}>
                <div
                  className="h-full rounded-full bg-cyan-500/80 transition-all duration-700"
                  style={{ width: `${Math.min(100, (current.aeris / (current.unit === 'tok/s' ? 200 : 100)) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
