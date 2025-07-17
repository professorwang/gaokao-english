export interface Exercise {
  id: string;
  title: string;
  text: string;
  requiredLength: number;
  keyPoints: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  sampleAnswer?: string;
  analysis?: Analysis;
}

export interface Analysis {
  structure: string[];
  vocabulary: string[];
  grammar: string[];
  coherence: string[];
  scoring: ScoringCriteria;
}

export interface ScoringCriteria {
  content: number;
  language: number;
  structure: number;
  total: number;
}

export interface UserAnswer {
  exerciseId: string;
  content: string;
  timestamp: Date;
  score?: Score;
}

export interface Score {
  content: number;
  language: number;
  structure: number;
  total: number;
  feedback: string[];
  suggestions: string[];
}

export interface UserProgress {
  userId: string;
  completedExercises: string[];
  totalScore: number;
  averageScore: number;
  streak: number;
  lastActivity: Date;
}