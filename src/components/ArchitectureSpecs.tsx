import React from 'react';
import { TECHNICAL_SPECS, CREATOR_NAME } from '../data/modelData';
import { Cpu, Maximize2, Gift, Zap, Terminal, Calendar, Check, Layers, Code, ShieldCheck } from 'lucide-react';

interface ArchitectureSpecsProps {
  darkMode: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5 text-rose-500" />,
  Maximize2: <Maximize2 className="w-5 h-5 text-orange-400" />,
  Gift: <Gift className="w-5 h-5 text-emerald-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  Terminal: <Terminal className="w-5 h-5 text-cyan-400" />,
  Calendar: <Calendar className="w-5 h-5 text-violet-400" />,
};

export const ArchitectureSpecs: React.FC<ArchitectureSpecsProps> = ({ darkMode }) => {
  return (
    <section id="specs" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-3">
            <Layers className="w-3.5 h-3.5 text-rose-500" />
            <span>Under the Hood</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            Engineered for Flawless Software Synthesis
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            How {CREATOR_NAME} designed FatalFlame to transcend ordinary language models and function as an autonomous compiler-integrated software engineer.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SPECS.map((spec) => (
            <div
              key={spec.title}
              className={`rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.01] ${
                darkMode
                  ? 'bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700 backdrop-blur-xl shadow-lg shadow-black/40'
                  : 'bg-white/80 border-neutral-200/90 hover:border-neutral-300 shadow-sm backdrop-blur-xl'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded-xl border ${
                  darkMode ? 'bg-neutral-800/80 border-neutral-700/60' : 'bg-neutral-100 border-neutral-200'
                }`}>
                  {iconMap[spec.iconName] || <Cpu className="w-5 h-5 text-rose-500" />}
                </div>
                <span className={`text-[11px] font-semibold uppercase tracking-wider ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  Verified Spec
                </span>
              </div>

              <h3 className={`text-base font-semibold ${darkMode ? 'text-neutral-200' : 'text-neutral-800'}`}>
                {spec.title}
              </h3>

              <div className={`text-xl sm:text-2xl font-bold font-mono tracking-tight mt-1 mb-3 ${
                spec.title.includes('Pricing')
                  ? 'text-emerald-500'
                  : darkMode ? 'text-white' : 'text-neutral-950'
              }`}>
                {spec.value}
              </div>

              <p className={`text-xs leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {spec.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Deep Dive Callout Box */}
        <div className={`mt-10 rounded-2xl p-6 sm:p-8 border transition-all ${
          darkMode
            ? 'bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-neutral-950 border-neutral-800'
            : 'bg-gradient-to-r from-neutral-50 via-white to-rose-50/40 border-neutral-200'
        }`}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-rose-500 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Compiler-in-the-Loop Reinforcement</span>
              </div>
              <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                Why FatalFlame Never Generates Hallucinated APIs
              </h4>
              <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                Unlike standard chat models that merely predict likely text, FatalFlame was trained with RL from compiler diagnostics (RLCD). Every emitted code sequence is validated against formal grammar parsers and static analyzer rules, virtually eliminating runtime crashes, type mismatches, and deadlocks.
              </p>
            </div>

            <div className={`p-4 rounded-xl border text-xs font-mono shrink-0 w-full lg:w-auto ${
              darkMode ? 'bg-neutral-950/80 border-neutral-800 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-800'
            }`}>
              <div className="text-emerald-400 font-semibold mb-1">✓ AST Parse: Valid</div>
              <div className="text-cyan-400 font-semibold mb-1">✓ Type Checker: 0 Errors</div>
              <div className="text-amber-400 font-semibold mb-1">✓ Static Analysis: Clean</div>
              <div className="text-rose-400 font-semibold">✓ Release: Nov 27, 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
