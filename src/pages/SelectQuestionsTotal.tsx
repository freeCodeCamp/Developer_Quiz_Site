import React from "react";
import { QUESTION_NUMS } from "../constants";
import { SelectQuestionsTotalProps } from "../types";
import Selectable from "../components/Selectable";

const SelectQuestionsTotal: React.FC<SelectQuestionsTotalProps> = ({
  totalQuestions,
  startQuiz
}) => {
  const availableQuizLengths = QUESTION_NUMS.filter(
    length => length <= totalQuestions
  );
  const ops: string[] = [
    ...availableQuizLengths.map(n => `${n}`), // convert list of nums to list of strings
    `All (${totalQuestions})` // add "all" option
  ];

  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a length for the Quiz</h2>

      <Selectable
        options={ops}
        groupName="QuizLengths"
        onChange={(choice: string) => {
          const num_choice = Number(choice.replace(/\D/g, "")); // handle "All (120) case"
          startQuiz(num_choice);
        }}
      />
    </div>
  );
};
export default SelectQuestionsTotal;
