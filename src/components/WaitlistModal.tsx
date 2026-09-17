import React, { useState, useEffect } from 'react';
import { X, Bell, CheckCircle, Flame, Sparkles, Mail, Terminal, ArrowRight } from 'lucide-react';
import { CREATOR_NAME } from '../data/modelData';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose, darkMode }) => {
  const [email, setEmail] = useState('');
  const [environment, setEnvironment] = useState('vscode');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        className={`relative z-10 w-full max-w-md rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all ${
          darkMode
            ? 'bg-neutral-900/95 border-neutral-700/80 text-white shadow-black/80 backdrop-blur-2xl'
            : 'bg-white/95 border-neutral-200 text-neutral-900 shadow-2xl backdrop-blur-2xl'
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className={`absolute top-5 right-5 p-2 rounded-xl transition-colors ${
            darkMode ? 'text-neutral-400 hover:text-white hover:bg-neutral-800' : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header Icon & Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-orange-500 flex items-center justify-center text-white shadow-md shadow-rose-500/25">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 id="waitlist-title" className="text-xl font-bold tracking-tight">
                  FatalFlame Launch Alert
                </h3>
                <p className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  Debuts November 27th, 2026 • 100% Free
                </p>
              </div>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Be the first to access public weights, free API keys, and compiler-verified IDE extensions by {CREATOR_NAME} on launch day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                  darkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  Email Address
                </label>
                <div className="relative">
                  <Mail className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
                    darkMode ? 'text-neutral-500' : 'text-neutral-400'
                  }`} />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="developer@finextm.ai"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-rose-500/40 transition-all ${
                      darkMode
                        ? 'bg-neutral-950/80 border-neutral-700 text-white placeholder-neutral-500'
                        : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                  darkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  Primary Coding Environment
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'vscode', label: 'VS Code' },
                    { id: 'neovim', label: 'Neovim / CLI' },
                    { id: 'jetbrains', label: 'JetBrains' },
                    { id: 'api', label: 'REST / SDK' },
                  ].map((env) => (
                    <button
                      key={env.id}
                      type="button"
                      onClick={() => setEnvironment(env.id)}
                      className={`py-2 px-3 rounded-xl border text-center font-medium transition-all ${
                        environment === env.id
                          ? 'bg-rose-500/15 border-rose-500 text-rose-500 font-semibold'
                          : darkMode
                          ? 'bg-neutral-800/40 border-neutral-700/60 text-neutral-300 hover:bg-neutral-800'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      {env.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 hover:from-rose-500 hover:to-orange-400 shadow-lg shadow-rose-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Bell className="w-4 h-4" />
                <span>Reserve My Day-1 Priority Access</span>
              </button>

              <p className={`text-[11px] text-center ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
                100% Free Forever • No credit card or subscription required
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-2">
              You're on the Priority List!
            </h3>
            <p className={`text-xs sm:text-sm mb-6 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
              We’ve reserved your day-one access for <strong>{email}</strong>. When FatalFlame launches globally on <strong>November 27th, 2026</strong>, you'll receive your free inference credentials immediately.
            </p>

            <div className={`p-4 rounded-2xl border text-xs mb-6 font-mono ${
              darkMode ? 'bg-neutral-950/70 border-neutral-800 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-800'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-neutral-400">Launch Date:</span>
                <span className="text-rose-500 font-bold">November 27, 2026</span>
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-neutral-400">Creator:</span>
                <span className="text-cyan-400 font-bold">{CREATOR_NAME}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Target Tooling:</span>
                <span className="text-amber-400 uppercase font-bold">{environment}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-neutral-800 hover:bg-neutral-700 transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
