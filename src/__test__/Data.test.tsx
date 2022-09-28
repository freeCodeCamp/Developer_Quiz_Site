import agileQuiz from "../data/agile-quiz";
import cssQuiz from "../data/css-quiz";
import freecodecampQuiz from "../data/freecodecamp-quiz";
import generalCSQuiz from "../data/general-cs-quiz";
import gitQuiz from "../data/git-quiz";
import htmlQuiz from "../data/html-quiz";
import informationTechnologyQuiz from "../data/information-technology-quiz";
import javascriptQuiz from "../data/javascript-quiz";
import linuxQuiz from "../data/linux-quiz";
import pythonQuiz from "../data/python-quiz";
import qualityAssuranceQuiz from "../data/quality-assurance-quiz";
import securityQuiz from "../data/security-quiz";
import sqlQuiz from "../data/sql-quiz";

const allCategories = [
  agileQuiz,
  cssQuiz,
  freecodecampQuiz,
  generalCSQuiz,
  gitQuiz,
  htmlQuiz,
  informationTechnologyQuiz,
  javascriptQuiz,
  linuxQuiz,
  pythonQuiz,
  qualityAssuranceQuiz,
  securityQuiz,
  sqlQuiz,
];
describe("Every question is valid", () => {
  test.each(allCategories)(
    "Every question has an answer, explanation, a link and three distractions",
    (input) => {
      expect(input).toHaveProperty("Question");
      expect(input).toHaveProperty("Answer");
      expect(input).toHaveProperty("Distractor1");
      expect(input).toHaveProperty("Distractor2");
      expect(input).toHaveProperty("Distractor3");
      expect(input).toHaveProperty("Explanation");
      expect(input).toHaveProperty("Link");
    }
  );
});
