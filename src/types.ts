export interface BenchmarkItem {
  name: string;
  category: string;
  fatalFlame: number;
  claudeSonnet: number;
  gpt45: number;
  deepseekV3: number;
  emily: number;
  aeris: number;
  unit: string;
  description: string;
}

export interface ModelLineage {
  id: string;
  name: string;
  releaseYear: string;
  status: 'legacy' | 'active' | 'flagship';
  tagline: string;
  description: string;
  strengths: string[];
  parameters: string;
  contextWindow: string;
  codingRating: number;
  badgeColor: string;
}

export interface CodeDemo {
  id: string;
  title: string;
  language: string;
  category: string;
  prompt: string;
  thinking: string;
  code: string;
  testOutput: string;
  executionTime: string;
  tokensGenerated: number;
}

export interface SpecDetail {
  title: string;
  value: string;
  detail: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
