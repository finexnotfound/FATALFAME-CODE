import React from 'react';
import { Flame, Github, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { GITHUB_URL, CREATOR_NAME } from '../data/modelData';

interface FooterProps {
  darkMode: boolean;
  onOpenWaitlist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenWaitlist }) => {
  return (
    <footer className={`mt-20 border-t transition-colors duration-300 ${
      darkMode ? 'bg-neutral-950/80 border-neutral-800/80 text-neutral-400' : 'bg-white/80 border-neutral-200 text-neutral-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-600 via-orange-500 to-amber-400 flex items-center justify-center text-white shadow-md shadow-rose-500/20">
                <Flame className="w-4 h-4" />
              </div>
              <span className={`text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                FatalFlame
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/20">
                100% Free
              </span>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed max-w-sm ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
              The autonomous compiler-verified coding artificial intelligence created by <strong>{CREATOR_NAME}</strong>. Succeeding our frontier models <strong>Aeris</strong> and <strong>Emily</strong>, arriving globally on <strong>November 27th, 2026</strong>.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  darkMode
                    ? 'bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800'
                    : 'bg-neutral-100 border-neutral-200 text-neutral-900 hover:bg-neutral-200'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/finexnotfound</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Lineage & Navigation */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${darkMode ? 'text-neutral-200' : 'text-neutral-800'}`}>
              Finex Tm Lineage
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-cyan-400 font-medium">Aeris (2024)</span>
                <span className="block text-neutral-500">Foundational reasoning spark</span>
              </li>
              <li>
                <span className="text-violet-400 font-medium">Emily (2025)</span>
                <span className="block text-neutral-500">Fast conversational pair-coder</span>
              </li>
              <li>
                <span className="text-rose-500 font-bold">FatalFlame (Nov 27, 2026)</span>
                <span className="block text-neutral-500">Autonomous code sovereign</span>
              </li>
            </ul>
          </div>

          {/* Quick Links & Launch */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${darkMode ? 'text-neutral-200' : 'text-neutral-800'}`}>
              Global Launch
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={onOpenWaitlist}
                  className="hover:text-rose-500 transition-colors text-left font-medium"
                >
                  Join November 27 Launch Alert
                </button>
              </li>
              <li>
                <a href="#playground" className="hover:text-rose-500 transition-colors">
                  Interactive Code Lab
                </a>
              </li>
              <li>
                <a href="#benchmarks" className="hover:text-rose-500 transition-colors">
                  SWE-bench & HumanEval
                </a>
              </li>
              <li>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">
                  GitHub / finexnotfound
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          darkMode ? 'border-neutral-800/80 text-neutral-500' : 'border-neutral-200 text-neutral-500'
        }`}>
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {CREATOR_NAME}. All rights reserved.</span>
            <span>•</span>
            <span className="text-rose-500 font-medium">100% Free Frontier AI</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Created by</span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-rose-500 hover:underline"
            >
              {CREATOR_NAME} (@finexnotfound)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
