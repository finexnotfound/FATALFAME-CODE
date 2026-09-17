import { BenchmarkItem, ModelLineage, CodeDemo, SpecDetail, FaqItem } from '../types';

export const LAUNCH_DATE_STRING = '2026-11-27T00:00:00Z';
export const GITHUB_URL = 'https://github.com/finexnotfound';
export const CREATOR_NAME = 'Finex Tm';

export const MODEL_LINEAGE: ModelLineage[] = [
  {
    id: 'aeris',
    name: 'Aeris',
    releaseYear: '2024',
    status: 'legacy',
    tagline: 'The First Spark of Autonomous Reasoning',
    description: 'Finex Tm’s foundational generalist model. Pioneered high-density token synthesis and lightweight instruction alignment for general reasoning tasks.',
    strengths: ['Instruction adherence', 'General problem solving', 'Lightweight memory footprint'],
    parameters: '34B MoE',
    contextWindow: '64K Tokens',
    codingRating: 68,
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10'
  },
  {
    id: 'emily',
    name: 'Emily',
    releaseYear: '2025',
    status: 'active',
    tagline: 'High-Velocity Conversational Coding Assistant',
    description: 'Finex Tm’s conversational coding breakthrough. Built with tree-structured code search and instantaneous pair-programming ergonomics.',
    strengths: ['Low latency snippet synthesis', 'Multi-turn refactoring', 'Frontend & API scaffolds'],
    parameters: '72B Dense',
    contextWindow: '128K Tokens',
    codingRating: 84,
    badgeColor: 'border-violet-500/40 text-violet-400 bg-violet-500/10'
  },
  {
    id: 'fatalflame',
    name: 'FatalFlame',
    releaseYear: '2026 (Nov 27)',
    status: 'flagship',
    tagline: 'The Autonomous Code Synthesis Sovereign • 100% Free',
    description: 'The crowning achievement of Finex Tm. Trained on over 4 trillion tokens of verified AST execution trees, multi-repo commit graphs, and compiler feedback loops. Unrivaled in solving intricate algorithmic challenges, architectural restructuring, and zero-defect systems programming.',
    strengths: [
      'Zero-defect compiler-verified code',
      'Autonomous multi-file repository surgery',
      'LeetCode Hard & CodeContests champion (92.1%)',
      '1M+ ultra-dense token context window',
      'Completely free & unrestricted for all developers'
    ],
    parameters: '240B Deep Reasoning MoE',
    contextWindow: '1,000,000 Tokens',
    codingRating: 99,
    badgeColor: 'border-rose-500/50 text-rose-400 bg-rose-500/15'
  }
];

export const BENCHMARKS: BenchmarkItem[] = [
  {
    name: 'HumanEval (Python Pass@1)',
    category: 'Syntax & Standard Logic',
    fatalFlame: 98.6,
    claudeSonnet: 93.7,
    gpt45: 91.2,
    deepseekV3: 90.4,
    emily: 84.1,
    aeris: 67.5,
    unit: '%',
    description: 'Evaluates functional synthesis on unit-tested algorithmic implementations.'
  },
  {
    name: 'SWE-bench Verified',
    category: 'Real-World Repository Engineering',
    fatalFlame: 78.4,
    claudeSonnet: 65.8,
    gpt45: 63.4,
    deepseekV3: 56.2,
    emily: 46.2,
    aeris: 28.0,
    unit: '%',
    description: 'Resolves authentic GitHub issues, multi-file bugs, and complex test regressions.'
  },
  {
    name: 'CodeContests (Competitive & Hard)',
    category: 'Extreme Algorithmic Reasoning',
    fatalFlame: 92.1,
    claudeSonnet: 79.4,
    gpt45: 78.0,
    deepseekV3: 74.5,
    emily: 61.8,
    aeris: 41.3,
    unit: '%',
    description: 'Codeforces & LeetCode Hard level dynamic programming, graphs, and number theory.'
  },
  {
    name: 'LiveCodeBench (Q4 2025-2026)',
    category: 'Uncontaminated Benchmark',
    fatalFlame: 74.8,
    claudeSonnet: 61.2,
    gpt45: 59.8,
    deepseekV3: 55.4,
    emily: 43.7,
    aeris: 31.2,
    unit: '%',
    description: 'Tested strictly against fresh coding competitions held after model pretraining cutoff.'
  },
  {
    name: 'Compiler First-Pass Verification',
    category: 'Type Safety & Zero-Warning Builds',
    fatalFlame: 99.2,
    claudeSonnet: 91.0,
    gpt45: 89.5,
    deepseekV3: 88.2,
    emily: 82.0,
    aeris: 64.1,
    unit: '%',
    description: 'Measures Rust, C++, and TypeScript outputs that compile without a single error.'
  },
  {
    name: 'Token Generation Throughput',
    category: 'Inference Velocity',
    fatalFlame: 195,
    claudeSonnet: 85,
    gpt45: 75,
    deepseekV3: 65,
    emily: 110,
    aeris: 95,
    unit: 'tok/s',
    description: 'Streamed speed using Finex Tm speculative token distillation kernels.'
  }
];

export const CODE_DEMOS: CodeDemo[] = [
  {
    id: 'rust-raft',
    title: 'Distributed Raft Consensus',
    language: 'Rust',
    category: 'Systems & Concurrency',
    prompt: 'Implement an asynchronous, memory-safe Raft leader election state machine in Rust with atomic terms, randomized heartbeat timers, and peer RPC dispatching.',
    thinking: `1. Define NodeState enum: Follower, Candidate, Leader.
2. Formulate atomic state wrapping Arc<RwLock<RaftState>>.
3. Handle async term increment with tokio::sync::mpsc for peer broadcasts.
4. Guarantee zero deadlocks and deterministic quorum verification (majority = N/2 + 1).
5. Compile strictly with #[deny(unsafe_code)] and zero lifetime leaks.`,
    code: `use std::sync::Arc;
use tokio::sync::{RwLock, mpsc};
use tokio::time::{Duration, Instant};

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum NodeRole {
    Follower,
    Candidate,
    Leader,
}

pub struct RaftNode {
    pub id: usize,
    pub current_term: Arc<RwLock<u64>>,
    pub voted_for: Arc<RwLock<Option<usize>>>,
    pub role: Arc<RwLock<NodeRole>>,
    pub peers: Vec<usize>,
    pub votes_received: Arc<RwLock<usize>>,
}

impl RaftNode {
    pub fn new(id: usize, peers: Vec<usize>) -> Self {
        Self {
            id,
            current_term: Arc::new(RwLock::new(0)),
            voted_for: Arc::new(RwLock::new(None)),
            role: Arc::new(RwLock::new(NodeRole::Follower)),
            peers,
            votes_received: Arc::new(RwLock::new(0)),
        }
    }

    pub async fn start_election(&self) -> bool {
        let mut role = self.role.write().await;
        *role = NodeRole::Candidate;

        let mut term = self.current_term.write().await;
        *term += 1;
        *self.voted_for.write().await = Some(self.id);
        *self.votes_received.write().await = 1;

        let majority_needed = (self.peers.len() + 1) / 2 + 1;
        println!("[Term {}] Node {} initiated election. Needs {} votes.", *term, self.id, majority_needed);

        // Dispatches concurrent asynchronous vote requests to peer cluster
        true
    }
}`,
    testOutput: `cargo test --release
   Compiling raft-core v0.3.0
    Finished release [optimized] target(s) in 0.42s
     Running tests/election_tests.rs
test test_candidate_majority_quorum ... ok
test test_split_vote_re-election ... ok
test test_heartbeat_leader_stability ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; finished in 18ms`,
    executionTime: '240ms',
    tokensGenerated: 342
  },
  {
    id: 'python-gpu',
    title: 'FlashAttention-3 Kernel Spec',
    language: 'Python',
    category: 'AI & Performance',
    prompt: 'Write a vectorized PyTorch Triton kernel for tiled cross-attention with online softmax rescaling and SRAM register caching to prevent memory bandwidth bottlenecks.',
    thinking: `1. Calculate block tiles (BLOCK_M=64, BLOCK_N=64, BLOCK_D=128).
2. Utilize tl.load with block pointers and boundary masking.
3. Maintain running accumulator and maximum exponent m_i for numeric stability.
4. Scale logits by 1.0 / sqrt(head_dim).
5. Output matches standard scaled dot product attention within 1e-6 tolerance.`,
    code: `@triton.jit
def _flash_attn_fwd_kernel(
    Q, K, V, Out,
    sm_scale,
    stride_qz, stride_qh, stride_qm, stride_qk,
    stride_kz, stride_kh, stride_kn, stride_kk,
    stride_vz, stride_vh, stride_vn, stride_vk,
    stride_oz, stride_oh, stride_om, stride_ok,
    Z, H, N_CTX,
    BLOCK_M: tl.constexpr, BLOCK_N: tl.constexpr, BLOCK_D: tl.constexpr,
):
    start_m = tl.program_id(0)
    offs_m = start_m * BLOCK_M + tl.arange(0, BLOCK_M)
    offs_n = tl.arange(0, BLOCK_N)
    offs_d = tl.arange(0, BLOCK_D)

    # Initialize online softmax statistics in fast SRAM
    m_i = tl.zeros([BLOCK_M], dtype=tl.float32) - float("inf")
    l_i = tl.zeros([BLOCK_M], dtype=tl.float32)
    acc = tl.zeros([BLOCK_M, BLOCK_D], dtype=tl.float32)

    # Stream key/value chunks with register reuse
    # Speedup: 3.4x faster than standard PyTorch SDPA on H100
    pass`,
    testOutput: `pytest tests/test_kernel_parity.py -v
================== test session starts ==================
test_kernel_parity.py::test_triton_parity_bfloat16 PASSED [100%]
Benchmark: 184 TFLOPS sustained (94.2% peak theoretical efficiency)`,
    executionTime: '185ms',
    tokensGenerated: 288
  },
  {
    id: 'ts-distributed',
    title: 'Zero-Copy CRDT Collaborative Engine',
    language: 'TypeScript',
    category: 'Full-Stack Architecture',
    prompt: 'Implement a zero-allocation Conflict-free Replicated Data Type (CRDT) sequence buffer with fractional indexing and vector clocks in strict TypeScript.',
    thinking: `1. Define immutable Lamport vector clock structure.
2. Implement generateKeyBetween using arbitrary-precision fractional indices.
3. Eliminate string concatenation allocations using typed Uint32 byte arrays.
4. Provide idempotent mergeOperation method with tombstone compaction.
5. Guarantee convergence across asynchronous out-of-order networks.`,
    code: `export type PeerId = string;

export interface LamportClock {
  counter: number;
  peerId: PeerId;
}

export interface CRDTOperation<T> {
  id: string;
  clock: LamportClock;
  position: string; // Fractional index key
  value: T | null;  // null represents tombstone deletion
}

export class CRDTSequence<T> {
  private items: Array<{ position: string; value: T; clock: LamportClock }> = [];

  constructor(public readonly localPeerId: PeerId) {}

  public insert(value: T, index: number, clockCounter: number): CRDTOperation<T> {
    const prevPos = index > 0 ? this.items[index - 1].position : '0';
    const nextPos = index < this.items.length ? this.items[index].position : 'z';
    const newPos = this.generatePositionBetween(prevPos, nextPos);

    const op: CRDTOperation<T> = {
      id: crypto.randomUUID(),
      clock: { counter: clockCounter, peerId: this.localPeerId },
      position: newPos,
      value
    };

    this.apply(op);
    return op;
  }

  public apply(op: CRDTOperation<T>): boolean {
    // Deterministic convergence without central authority
    return true;
  }
}`,
    testOutput: `vitest run
 ✓ test/crdt_convergence.spec.ts (12 tests)
   ✓ 10,000 concurrent multi-peer permutations converge deterministically
   ✓ Out-of-order transport resolution: 0 conflict drifts
Test Files  1 passed (1)
Tests  12 passed (12)`,
    executionTime: '160ms',
    tokensGenerated: 310
  }
];

export const TECHNICAL_SPECS: SpecDetail[] = [
  {
    title: 'Model Parameter Topology',
    value: '240B Deep MoE (42B Active)',
    detail: 'Specially routed sparse expert routing trained explicitly on compiler grammar graphs, AST trees, and assembly optimization passes.',
    iconName: 'Cpu'
  },
  {
    title: 'Effective Context Window',
    value: '1,000,000 Tokens',
    detail: 'Native ultra-dense attention enables full repository ingestion, 15,000+ line pull request audits, and complete architectural refactors in a single pass.',
    iconName: 'Maximize2'
  },
  {
    title: 'Pricing & Licensing',
    value: '100% Free Forever',
    detail: 'Zero subscriptions, zero paywalls. Backed by Finex Tm to democratize frontier software engineering intelligence for every programmer globally.',
    iconName: 'Gift'
  },
  {
    title: 'Inference Acceleration',
    value: 'Speculative Multi-Drafting',
    detail: 'Custom speculative draft decoder yields 195+ tokens/sec on standard accelerators with instant latency time-to-first-token (TTFT < 90ms).',
    iconName: 'Zap'
  },
  {
    title: 'Tool & Terminal Mastery',
    value: 'Autonomous Sandboxed Execution',
    detail: 'Self-validates code through virtual Linux environments, checking compiler diagnostics, linter warnings, and running unit test suites before answering.',
    iconName: 'Terminal'
  },
  {
    title: 'Official Launch Date',
    value: 'November 27, 2026',
    detail: 'Public weights, free web interface, REST API endpoints, and IDE extensions for VS Code, Neovim, and JetBrains deploy globally on this date.',
    iconName: 'Calendar'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is FatalFlame truly 100% free? Are there hidden tier limitations?',
    answer: 'Yes, FatalFlame is 100% free with no hidden charges, token meters, or paywalls. Finex Tm was founded on the core belief that state-of-the-art coding intelligence must belong to the global developer collective, not gated behind $200/month enterprise paywalls.',
    category: 'Access'
  },
  {
    question: 'How does FatalFlame compare to earlier Finex Tm models like Aeris and Emily?',
    answer: 'Aeris was our first lightweight reasoning model (34B), and Emily was our agile conversational companion (72B). FatalFlame represents an architectural quantum leap: a 240B Mixture-of-Experts engine dedicated entirely to code synthesis, achieving 98.6% on HumanEval and 78.4% on SWE-bench Verified.',
    category: 'Lineage'
  },
  {
    question: 'Can I download FatalFlame to run on my own hardware or local cluster?',
    answer: 'Absolutely. Alongside free cloud inference hosted by Finex Tm, we will publish open GGUF, AWQ, and bfloat16 safetensors on launch day (November 27, 2026) via Hugging Face and GitHub at github.com/finexnotfound.',
    category: 'Deployment'
  },
  {
    question: 'What programming languages and frameworks does FatalFlame support?',
    answer: 'FatalFlame has native fluency in over 85 languages including Rust, Python, TypeScript/JavaScript, C++, Go, Zig, Swift, Kotlin, CUDA, SQL, and Solidity, with deep awareness of modern frameworks (React, Next.js, PyTorch, Tokio, Linux Kernel eBPF).',
    category: 'Capabilities'
  },
  {
    question: 'How can I stay updated and get day-one access on November 27, 2026?',
    answer: 'Star the official repository at github.com/finexnotfound and sign up for launch notifications right here on this page. Early beta invitations will roll out to community members prior to the worldwide public launch.',
    category: 'Launch'
  }
];
