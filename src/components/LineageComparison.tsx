import React from 'react';
import { MODEL_LINEAGE, CREATOR_NAME } from '../data/modelData';
import { ArrowRight, Check, Sparkles, Flame, ShieldAlert, Cpu, Trophy } from 'lucide-react';

interface LineageComparisonProps {
  darkMode: boolean;
}

export const LineageComparison: React.FC<LineageComparisonProps> = ({ darkMode }) => {
  return (
    <section id="lineage" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Finex Tm AI Lineage</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            From Aeris to Emily, and Now FatalFlame
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            {CREATOR_NAME} has pushed open-access machine intelligence forward across three generations.
            See how each architectural generation paved the path for FatalFlame’s unmatched coding mastery.
          </p>
        </div>

        {/* 3 Model Cards Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {MODEL_LINEAGE.map((model, idx) => {
            const isFlagship = model.id === 'fatalflame';
            return (
              <div
                key={model.id}
                className={`rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between transition-all duration-300 ${
                  isFlagship
                    ? darkMode
                      ? 'bg-gradient-to-b from-rose-950/40 via-neutral-900/80 to-neutral-950 border-2 border-rose-500/50 shadow-2xl shadow-rose-950/40'
                      : 'bg-gradient-to-b from-rose-50/90 to-white border-2 border-rose-400 shadow-xl shadow-rose-100'
                    : darkMode
                    ? 'bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-xl'
                    : 'bg-white/80 border border-neutral-200/90 shadow-sm backdrop-blur-xl'
                }`}
              >
                {/* Flagship Badge */}
                {isFlagship && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md">
                    <Flame className="w-3 h-3 fill-current" />
                    <span>The Pinnacle Flagship</span>
                  </div>
                )}

                <div>
                  {/* Model Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                        {model.name}
                      </span>
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${model.badgeColor}`}>
                        {model.releaseYear}
                      </span>
                    </div>
                    {isFlagship && (
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/40">
                        100% Free
                      </span>
                    )}
                  </div>

                  <p className={`text-xs font-semibold mb-3 ${isFlagship ? 'text-rose-400' : darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {model.tagline}
                  </p>

                  <p className={`text-xs leading-relaxed mb-6 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {model.description}
                  </p>

                  {/* Rating Meter */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                      <span className={darkMode ? 'text-neutral-300' : 'text-neutral-600'}>Code Synthesis Quotient</span>
                      <span className={`font-mono font-bold ${isFlagship ? 'text-rose-500' : darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                        {model.codingRating} / 100
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? 'bg-neutral-800' : 'bg-neutral-200'}`}>
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isFlagship
                            ? 'bg-gradient-to-r from-rose-500 to-orange-400'
                            : model.id === 'emily'
                            ? 'bg-violet-500'
                            : 'bg-cyan-500'
                        }`}
                        style={{ width: `${model.codingRating}%` }}
                      />
                    </div>
                  </div>

                  {/* Specs Pill List */}
                  <div className="grid grid-cols-2 gap-2 mb-6 text-xs">
                    <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-neutral-800/40 border-neutral-700/40' : 'bg-neutral-100/70 border-neutral-200'}`}>
                      <span className={`block text-[10px] uppercase font-semibold ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>Params</span>
                      <span className={`font-mono font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>{model.parameters}</span>
                    </div>
                    <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-neutral-800/40 border-neutral-700/40' : 'bg-neutral-100/70 border-neutral-200'}`}>
                      <span className={`block text-[10px] uppercase font-semibold ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>Context</span>
                      <span className={`font-mono font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>{model.contextWindow}</span>
                    </div>
                  </div>

                  {/* Strengths Checklist */}
                  <div className="space-y-2 mb-4">
                    <span className={`text-[11px] font-semibold uppercase tracking-wider block ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      Key Capabilities
                    </span>
                    {model.strengths.map((st) => (
                      <div key={st} className="flex items-start gap-2 text-xs">
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isFlagship ? 'text-rose-500' : 'text-neutral-400'}`} />
                        <span className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}>{st}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer status */}
                <div className={`pt-4 mt-2 border-t text-xs flex items-center justify-between ${
                  darkMode ? 'border-neutral-800/80 text-neutral-400' : 'border-neutral-200 text-neutral-500'
                }`}>
                  <span>Architect: <strong>{CREATOR_NAME}</strong></span>
                  <span className={`font-semibold ${isFlagship ? 'text-rose-500' : ''}`}>
                    {isFlagship ? 'Launching Nov 27, 2026' : 'Active Heritage'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
