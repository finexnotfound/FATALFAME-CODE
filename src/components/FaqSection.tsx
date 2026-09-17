import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/modelData';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqSectionProps {
  darkMode: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ darkMode }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className={`text-3xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            Everything You Need to Know
          </h2>
          <p className={`mt-2 text-sm ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Clear answers about FatalFlame, licensing, lineage models, and the November 27, 2026 launch.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  darkMode
                    ? 'bg-neutral-900/60 border-neutral-800/80 backdrop-blur-xl'
                    : 'bg-white/80 border-neutral-200/90 shadow-sm backdrop-blur-xl'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`text-sm sm:text-base font-semibold ${
                    darkMode ? 'text-neutral-100' : 'text-neutral-800'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-lg transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-rose-500/15 text-rose-500' : darkMode ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className={`px-6 pb-4 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                    darkMode ? 'border-neutral-800/60 text-neutral-300' : 'border-neutral-100 text-neutral-600'
                  }`}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
