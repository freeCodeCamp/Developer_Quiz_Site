export interface QuizQuestion {
  Question: string;
  Answer: string;
  Distractor1: string;
  Distractor2: string;
  Distractor3: string;
  Explanation: string;
  Link?: string;
  Category?: string;
}

export interface ScoreData {
  Category: string;
  Score: number;
}
