/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CodePlayground } from './components/CodePlayground';
import { BenchmarkShowcase } from './components/BenchmarkShowcase';
import { LineageComparison } from './components/LineageComparison';
import { ArchitectureSpecs } from './components/ArchitectureSpecs';
import { FinexTmAbout } from './components/FinexTmAbout';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fatalflame_theme');
      if (saved) return saved === 'dark';
      return true; // default to sleek Apple dark mode
    }
    return true;
  });

  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      document.body.classList.remove('bg-neutral-50', 'text-neutral-900');
      document.body.classList.add('bg-neutral-950', 'text-neutral-100');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('bg-neutral-950', 'text-neutral-100');
      document.body.classList.add('bg-neutral-50', 'text-neutral-900');
    }
    localStorage.setItem('fatalflame_theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const handleScrollToPlayground = () => {
    const el = document.getElementById('playground');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-neutral-950 text-neutral-100' : 'bg-neutral-50 text-neutral-900'
    }`}>
      {/* Sticky Frosted Apple Glass Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
        onOpenWaitlist={() => setIsWaitlistOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero
          darkMode={darkMode}
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
          onExplorePlayground={handleScrollToPlayground}
        />

        <CodePlayground darkMode={darkMode} />

        <BenchmarkShowcase darkMode={darkMode} />

        <LineageComparison darkMode={darkMode} />

        <ArchitectureSpecs darkMode={darkMode} />

        <FinexTmAbout darkMode={darkMode} />

        <FaqSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        onOpenWaitlist={() => setIsWaitlistOpen(true)}
      />

      {/* November 27th 2026 Launch Notification Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
