import { MouseEventHandler } from "react";
import { NavLinkProps } from "react-router-dom";

export interface ButtonProps {
  text: string;
  isTransparent: boolean;
  size: string;
  handleClick: MouseEventHandler;
}

export interface ButtonLinkProps extends NavLinkProps {
  size?: string;
}

export interface QuizQuestion {
  message: string;
  points: number;
  chosenAnswer: string;
  correct: boolean;
  displayExplanation: string;
  showReference: string;
  nextQuestion: MouseEventHandler;
  show: boolean;
}

export interface QuizProps {
  currQuestion: { Question: string };
  questionNumber: number;
  totalQuestions: number;
  modalProps: QuizQuestion;
  chooseAnswer: boolean;
  points: number;
  choicesArr: string[][];
  selectedOption: string;
  selectOption: (option: string) => void;
  checkAnswer: () => void;
}

export interface PointTotals {
  points: number;
  totalQuestions: number;
  resetQuiz: () => void;
}

export interface SelectCategoryProps {
  selectQuiz: (category: string, index: number) => void;
  startRandomQuiz: () => void;
}

export interface SelectQuestionsTotalProps {
  startQuiz: (e: number) => void;
  totalQuestions: number; // Add the totalQuestions prop
}
