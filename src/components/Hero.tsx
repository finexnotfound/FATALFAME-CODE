import React from 'react';
import { Sparkles, Terminal, Github, ArrowRight, CheckCircle, Code2, Cpu, Zap, Flame } from 'lucide-react';
import { GITHUB_URL, CREATOR_NAME } from '../data/modelData';
import { CountdownTimer } from './CountdownTimer';

interface HeroProps {
  darkMode: boolean;
  onOpenWaitlist: () => void;
  onExplorePlayground: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenWaitlist, onExplorePlayground }) => {
  return (
    <section id="overview" className="relative pt-8 pb-16 overflow-hidden">
      {/* Apple-style background ambient glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[680px] h-[340px] bg-gradient-to-r from-rose-500/15 via-orange-500/15 to-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-20 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-500/10 border border-rose-500/25 text-rose-400 backdrop-blur-xl">
            <Flame className="w-3.5 h-3.5 text-rose-500" />
            <span>Next-Gen Frontier Code Model</span>
          </div>

          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xl border ${
            darkMode
              ? 'bg-neutral-900/60 border-neutral-700/50 text-neutral-300'
              : 'bg-white/80 border-neutral-200 text-neutral-700'
          }`}>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>100% Free • Made by {CREATOR_NAME}</span>
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-xl border transition-all ${
              darkMode
                ? 'bg-neutral-900/60 border-neutral-700/50 text-neutral-300 hover:text-white hover:border-neutral-600'
                : 'bg-white/80 border-neutral-200 text-neutral-700 hover:text-neutral-950'
            }`}
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/finexnotfound</span>
          </a>
        </div>

        {/* Main Display Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] ${
            darkMode ? 'text-white' : 'text-neutral-950'
          }`}>
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-orange-400 to-amber-400">FatalFlame</span>.
            <br />
            Too Good at Coding.
          </h1>

          <p className={`mt-6 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto ${
            darkMode ? 'text-neutral-300' : 'text-neutral-600'
          }`}>
            First came <span className="font-semibold text-cyan-400">Aeris</span>. Then came <span className="font-semibold text-violet-400">Emily</span>.
            Now <span className="font-semibold text-rose-500">{CREATOR_NAME}</span> introduces <strong>FatalFlame</strong> — an autonomous, compiler-verified code reasoning titan built for real software engineering, completely free forever.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              id="hero-try-playground-btn"
              type="button"
              onClick={onExplorePlayground}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 hover:from-rose-500 hover:to-orange-400 shadow-xl shadow-rose-500/25 active:scale-95 transition-all duration-200"
            >
              <Terminal className="w-4 h-4" />
              <span>Test Drive FatalFlame</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="hero-github-btn"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm sm:text-base font-semibold border backdrop-blur-xl transition-all duration-200 ${
                darkMode
                  ? 'bg-neutral-900/80 border-neutral-700/80 text-white hover:bg-neutral-800'
                  : 'bg-white/90 border-neutral-300 text-neutral-900 hover:bg-neutral-50 shadow-md'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>GitHub / finexnotfound</span>
            </a>

            <button
              id="hero-launch-info-btn"
              type="button"
              onClick={onOpenWaitlist}
              className={`flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm sm:text-base font-semibold border backdrop-blur-xl transition-all duration-200 ${
                darkMode
                  ? 'bg-neutral-800/40 border-neutral-700/50 text-neutral-300 hover:text-white'
                  : 'bg-neutral-100 border-neutral-200 text-neutral-700 hover:text-neutral-950'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Launch: Nov 27, 2026</span>
            </button>
          </div>

          {/* Quick Pillars */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className={`p-3.5 rounded-2xl border text-left transition-all ${
              darkMode ? 'bg-neutral-900/40 border-neutral-800/80' : 'bg-white/60 border-neutral-200/80'
            }`}>
              <div className="flex items-center gap-2 text-rose-500 text-xs font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>100% Free</span>
              </div>
              <p className={`text-xs mt-1 font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Zero token subscription or commercial gating.
              </p>
            </div>

            <div className={`p-3.5 rounded-2xl border text-left transition-all ${
              darkMode ? 'bg-neutral-900/40 border-neutral-800/80' : 'bg-white/60 border-neutral-200/80'
            }`}>
              <div className="flex items-center gap-2 text-orange-400 text-xs font-semibold">
                <Code2 className="w-4 h-4" />
                <span>98.6% HumanEval</span>
              </div>
              <p className={`text-xs mt-1 font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Pass@1 verified across 85+ programming languages.
              </p>
            </div>

            <div className={`p-3.5 rounded-2xl border text-left transition-all ${
              darkMode ? 'bg-neutral-900/40 border-neutral-800/80' : 'bg-white/60 border-neutral-200/80'
            }`}>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                <Cpu className="w-4 h-4" />
                <span>1M Token Window</span>
              </div>
              <p className={`text-xs mt-1 font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Ingest entire repos, commit logs, and documentation.
              </p>
            </div>

            <div className={`p-3.5 rounded-2xl border text-left transition-all ${
              darkMode ? 'bg-neutral-900/40 border-neutral-800/80' : 'bg-white/60 border-neutral-200/80'
            }`}>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <Zap className="w-4 h-4" />
                <span>195 Tok/s Speed</span>
              </div>
              <p className={`text-xs mt-1 font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Speculative distillation kernels by Finex Tm.
              </p>
            </div>
          </div>
        </div>

        {/* Embedded Launch Countdown Section */}
        <div className="mt-12">
          <CountdownTimer darkMode={darkMode} onOpenWaitlist={onOpenWaitlist} />
        </div>
      </div>
    </section>
  );
};
