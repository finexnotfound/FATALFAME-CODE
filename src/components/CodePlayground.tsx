import React, { useState } from 'react';
import { Play, Copy, Check, Terminal, Cpu, Sparkles, CheckCircle2, ChevronRight, Layers, FileCode2 } from 'lucide-react';
import { CODE_DEMOS } from '../data/modelData';

interface CodePlaygroundProps {
  darkMode: boolean;
}

export const CodePlayground: React.FC<CodePlaygroundProps> = ({ darkMode }) => {
  const [selectedDemoId, setSelectedDemoId] = useState(CODE_DEMOS[0].id);
  const [activeTab, setActiveTab] = useState<'code' | 'thinking' | 'tests'>('code');
  const [copied, setCopied] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [isGeneratingCustom, setIsGeneratingCustom] = useState(false);
  const [customResult, setCustomResult] = useState<{
    title: string;
    language: string;
    code: string;
    thinking: string;
    testOutput: string;
  } | null>(null);

  const currentDemo = customResult || CODE_DEMOS.find((d) => d.id === selectedDemoId) || CODE_DEMOS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentDemo.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerateCustom = () => {
    if (!customPrompt.trim()) return;
    setIsGeneratingCustom(true);

    setTimeout(() => {
      setCustomResult({
        title: customPrompt.slice(0, 32) + (customPrompt.length > 32 ? '...' : ''),
        language: customPrompt.toLowerCase().includes('python') ? 'Python' : 'Rust',
        thinking: `1. Analyzed prompt requirements: "${customPrompt}"
2. Selected optimal algorithmic data structure with zero memory leaks.
3. Synthesized vectorized, cache-friendly implementation.
4. Generated rigorous unit tests covering edge cases, bounds checking, and concurrent race conditions.
5. First-pass compiler check: SUCCESS (0 errors, 0 warnings).`,
        code: `// [FatalFlame Synthesis for: ${customPrompt}]
// Finex Tm Autonomous Reasoning Kernel • Compiler Verified (PASS)

pub struct OptimizedSolution<T: Clone + Send + Sync> {
    buffer: Vec<T>,
    capacity: usize,
    state_revision: u64,
}

impl<T: Clone + Send + Sync> OptimizedSolution<T> {
    pub fn new(capacity: usize) -> Self {
        Self {
            buffer: Vec::with_capacity(capacity),
            capacity,
            state_revision: 1,
        }
    }

    /// O(1) constant time amortized execution
    #[inline(always)]
    pub fn execute_transaction(&mut self, item: T) -> Result<u64, &'static str> {
        if self.buffer.len() >= self.capacity {
            return Err("Capacity saturation reached");
        }
        self.buffer.push(item);
        self.state_revision = self.state_revision.wrapping_add(1);
        Ok(self.state_revision)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_fatalflame_deterministic_execution() {
        let mut engine = OptimizedSolution::<i32>::new(1024);
        assert_eq!(engine.execute_transaction(42), Ok(2));
        assert_eq!(engine.buffer.len(), 1);
    }
}`,
        testOutput: `cargo test --release
   Compiling user-solution v1.0.0
    Finished release [optimized] target(s) in 0.18s
     Running tests/solution_test.rs
test test_fatalflame_deterministic_execution ... ok

test result: ok. 1 passed; 0 failed; finished in 2ms`
      });
      setIsGeneratingCustom(false);
      setActiveTab('code');
    }, 700);
  };

  return (
    <section id="playground" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Code Laboratory</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            Experience Why FatalFlame is Too Good at Coding
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Explore actual reasoning traces, syntactically flawless multi-threaded logic, and unit test outputs generated in milliseconds.
          </p>
        </div>

        {/* Demo Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {CODE_DEMOS.map((demo) => {
            const isSelected = selectedDemoId === demo.id && !customResult;
            return (
              <button
                key={demo.id}
                type="button"
                onClick={() => {
                  setSelectedDemoId(demo.id);
                  setCustomResult(null);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-500/25'
                    : darkMode
                    ? 'bg-neutral-800/70 hover:bg-neutral-700/80 text-neutral-300 border border-neutral-700/50'
                    : 'bg-white/80 hover:bg-neutral-100 text-neutral-700 border border-neutral-200'
                }`}
              >
                <FileCode2 className="w-3.5 h-3.5 opacity-80" />
                <span>{demo.title}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                  isSelected ? 'bg-black/20 text-white' : darkMode ? 'bg-neutral-900 text-neutral-400' : 'bg-neutral-200 text-neutral-600'
                }`}>
                  {demo.language}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Custom Prompt Input */}
        <div className={`mb-6 p-3 sm:p-4 rounded-2xl border transition-all ${
          darkMode
            ? 'bg-neutral-900/60 border-neutral-800/80 backdrop-blur-xl'
            : 'bg-white/80 border-neutral-200/90 shadow-sm backdrop-blur-xl'
        }`}>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <input
                id="custom-coding-prompt"
                type="text"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Ask FatalFlame to code anything (e.g., 'Write a lock-free ring buffer in C++' or 'Async LRU cache in Rust')..."
                onKeyDown={(e) => e.key === 'Enter' && handleGenerateCustom()}
                className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-rose-500/40 transition-all ${
                  darkMode
                    ? 'bg-neutral-950/70 border-neutral-700/60 text-white placeholder-neutral-500'
                    : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400'
                }`}
              />
            </div>
            <button
              type="button"
              onClick={handleGenerateCustom}
              disabled={isGeneratingCustom || !customPrompt.trim()}
              className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-500 hover:to-orange-400 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-rose-500/20 active:scale-95 transition-all"
            >
              {isGeneratingCustom ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Synthesizing...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Generate Code</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Showcase Window - Apple Style Window */}
        <div
          id="code-editor-mockup"
          className={`rounded-2xl overflow-hidden border shadow-2xl transition-all duration-300 ${
            darkMode
              ? 'bg-neutral-950 border-neutral-800/90 shadow-black/80'
              : 'bg-neutral-900 border-neutral-700/80 shadow-2xl'
          }`}
        >
          {/* Top Window Bar */}
          <div className="px-4 py-3 bg-neutral-900/90 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3">
            {/* Window Dots & File Info */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-neutral-400 font-medium">
                {currentDemo.title} • {currentDemo.language}
              </span>
            </div>

            {/* Middle Mode Tabs */}
            <div className="flex items-center gap-1 bg-neutral-950/80 p-1 rounded-xl border border-neutral-800">
              <button
                type="button"
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'code' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Code Synthesis
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('thinking')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'thinking' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Reasoning Trace
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('tests')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'tests' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Compiler & Tests
              </button>
            </div>

            {/* Right Telemetry & Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Compiler: 0 Warnings</span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 transition-colors"
                title="Copy code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Window Body Content */}
          <div className="p-4 sm:p-6 text-neutral-200 font-mono text-xs sm:text-sm overflow-x-auto min-h-[340px]">
            {activeTab === 'code' && (
              <div className="relative">
                <pre className="text-neutral-200 leading-relaxed font-mono">
                  <code>{currentDemo.code}</code>
                </pre>
              </div>
            )}

            {activeTab === 'thinking' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>FatalFlame Chain-of-Thought Decomposition</span>
                </div>
                <pre className="text-neutral-300 leading-relaxed whitespace-pre-wrap font-mono bg-neutral-900/70 p-4 rounded-xl border border-neutral-800">
                  {currentDemo.thinking}
                </pre>
              </div>
            )}

            {activeTab === 'tests' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  <Terminal className="w-4 h-4" />
                  <span>Automated Sanity & Regression Suite Verification</span>
                </div>
                <pre className="text-emerald-300 leading-relaxed whitespace-pre-wrap font-mono bg-neutral-900/90 p-4 rounded-xl border border-neutral-800">
                  {currentDemo.testOutput}
                </pre>
              </div>
            )}
          </div>

          {/* Bottom Telemetry Footer */}
          <div className="px-4 py-2.5 bg-neutral-900/90 border-t border-neutral-800 flex flex-wrap items-center justify-between text-[11px] font-mono text-neutral-400 gap-2">
            <div className="flex items-center gap-4">
              <span>Engine: <strong className="text-rose-400">FatalFlame 240B</strong></span>
              <span>Speed: <strong className="text-amber-400">195 tok/s</strong></span>
              <span>Context: <strong className="text-cyan-400">1M Tokens</strong></span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Zero-Shot Compiler Pass Rate: 99.2%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
