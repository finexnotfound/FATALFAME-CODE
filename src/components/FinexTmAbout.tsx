import React, { useState } from 'react';
import { GITHUB_URL, CREATOR_NAME } from '../data/modelData';
import { Github, ExternalLink, Copy, Check, Terminal, Heart, Sparkles, Star, GitFork } from 'lucide-react';

interface FinexTmAboutProps {
  darkMode: boolean;
}

export const FinexTmAbout: React.FC<FinexTmAboutProps> = ({ darkMode }) => {
  const [copiedClone, setCopiedClone] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);

  const cloneCmd = 'git clone https://github.com/finexnotfound/fatalflame.git';
  const curlCmd = `curl https://api.finextm.ai/v1/chat/completions \\
  -H "Authorization: Bearer finex_free_tier" \\
  -d '{"model": "fatalflame-240b", "prompt": "Solve LeetCode 42"}'`;

  const handleCopyClone = () => {
    navigator.clipboard.writeText(cloneCmd);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  const handleCopyCurl = () => {
    navigator.clipboard.writeText(curlCmd);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  return (
    <section id="finextm" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl p-8 sm:p-12 border relative overflow-hidden transition-all ${
          darkMode
            ? 'bg-neutral-900/60 border-neutral-800 shadow-2xl backdrop-blur-2xl'
            : 'bg-white/90 border-neutral-200/90 shadow-xl backdrop-blur-2xl'
        }`}>
          {/* Subtle Decorative Glows */}
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 border border-rose-500/20 text-rose-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Crafted by {CREATOR_NAME}</span>
              </div>

              <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                Engineered with Passion for the Global Developer Community
              </h2>

              <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                <strong>{CREATOR_NAME}</strong> set out to disrupt the trend of locking breakthrough artificial intelligence behind steep enterprise paywalls. Following our milestone releases with <strong>Aeris</strong> and <strong>Emily</strong>, our latest release <strong>FatalFlame</strong> proves that world-dominating coding intelligence can and should be completely free.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  id="about-github-profile-link"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 shadow-lg active:scale-95 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Visit GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <div className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border text-xs ${
                  darkMode ? 'bg-neutral-800/60 border-neutral-700/60 text-neutral-300' : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                }`}>
                  <span className="font-mono text-rose-500 font-bold">github.com/finexnotfound</span>
                </div>
              </div>
            </div>

            {/* Right Terminal Card */}
            <div className="lg:col-span-5 space-y-4">
              {/* Git Clone Box */}
              <div className={`p-4 rounded-2xl border ${
                darkMode ? 'bg-neutral-950/80 border-neutral-800' : 'bg-neutral-900 text-white border-neutral-800'
              }`}>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-rose-400" />
                    <span>Clone Official Repository</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyClone}
                    className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
                  >
                    {copiedClone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedClone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <code className="text-xs font-mono text-neutral-200 block truncate">
                  {cloneCmd}
                </code>
              </div>

              {/* Free API Curl Snippet */}
              <div className={`p-4 rounded-2xl border ${
                darkMode ? 'bg-neutral-950/80 border-neutral-800' : 'bg-neutral-900 text-white border-neutral-800'
              }`}>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Free Inference Endpoint</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyCurl}
                    className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
                  >
                    {copiedCurl ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCurl ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="text-[11px] font-mono text-neutral-300 overflow-x-auto">
                  {curlCmd}
                </pre>
              </div>

              {/* Launch Date Reminder */}
              <div className={`p-3 rounded-xl border text-center text-xs ${
                darkMode ? 'bg-rose-500/10 border-rose-500/20 text-rose-300' : 'bg-rose-50 border-rose-200 text-rose-700'
              }`}>
                Public repo & weights unlock on <strong>November 27th, 2026</strong>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
