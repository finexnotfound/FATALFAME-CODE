import React, { useState } from 'react';
import { Flame, Github, Moon, Sun, Menu, X, Sparkles, ExternalLink } from 'lucide-react';
import { GITHUB_URL, CREATOR_NAME } from '../data/modelData';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme, onOpenWaitlist }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Code Lab', href: '#playground' },
    { label: 'Benchmarks', href: '#benchmarks' },
    { label: 'Lineage', href: '#lineage' },
    { label: 'Specs', href: '#specs' },
    { label: 'Finex Tm', href: '#finextm' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300">
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-3 pb-2`}>
        <nav
          id="main-navigation"
          className={`relative rounded-2xl px-4 py-3 flex items-center justify-between transition-all duration-300 ${
            darkMode
              ? 'bg-neutral-900/60 border border-neutral-700/40 shadow-2xl shadow-black/40 backdrop-blur-2xl'
              : 'bg-white/70 border border-neutral-200/80 shadow-lg shadow-neutral-200/50 backdrop-blur-2xl'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#overview"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="FatalFlame Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-orange-500 to-amber-400 p-[1px] shadow-md shadow-rose-500/20 group-hover:shadow-rose-500/40 transition-all duration-300">
              <div className={`w-full h-full rounded-xl flex items-center justify-center ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
                <Flame className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className={`text-base font-bold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  FatalFlame
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/30">
                  AI
                </span>
              </div>
              <span className={`text-[11px] font-medium tracking-tight ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                by {CREATOR_NAME}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-lg transition-all duration-200 ${
                  darkMode
                    ? 'text-neutral-300 hover:text-white hover:bg-white/10'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-black/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* GitHub Profile Link */}
            <a
              id="github-nav-link"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Finex GitHub"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                darkMode
                  ? 'bg-neutral-800/80 hover:bg-neutral-700/80 text-neutral-200 border border-neutral-700/60'
                  : 'bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 border border-neutral-200'
              }`}
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">github.com/finexnotfound</span>
              <span className="sm:hidden">GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={onToggleTheme}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-2 rounded-xl transition-all duration-200 ${
                darkMode
                  ? 'bg-neutral-800/80 hover:bg-neutral-700 text-amber-400 border border-neutral-700/60'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-neutral-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Launch Waitlist CTA */}
            <button
              id="launch-waitlist-nav-btn"
              type="button"
              onClick={onOpenWaitlist}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 hover:from-rose-500 hover:to-orange-400 shadow-md shadow-rose-500/20 active:scale-95 transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nov 27 Launch</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className={`md:hidden p-2 rounded-xl transition-all duration-200 ${
                darkMode
                  ? 'bg-neutral-800/80 text-neutral-200 border border-neutral-700/60'
                  : 'bg-neutral-100 text-neutral-800 border border-neutral-200'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu with Apple Glassmorphism */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className={`md:hidden mt-2 rounded-2xl p-4 transition-all duration-300 ${
              darkMode
                ? 'bg-neutral-900/90 border border-neutral-800 shadow-2xl backdrop-blur-2xl text-neutral-200'
                : 'bg-white/95 border border-neutral-200 shadow-xl backdrop-blur-2xl text-neutral-800'
            }`}
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    darkMode ? 'hover:bg-neutral-800/80' : 'hover:bg-neutral-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-neutral-700/30 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenWaitlist();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-rose-600 to-orange-500 shadow-md shadow-rose-500/25"
                >
                  <Sparkles className="w-4 h-4" />
                  Notify Me for Nov 27, 2026 Launch
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
