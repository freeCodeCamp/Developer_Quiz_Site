import accessibilityQuiz from "./data/accessibility-quiz";
import agileQuiz from "./data/agile-quiz";
import cssQuiz from "./data/css-quiz";
import freecodecampQuiz from "./data/freecodecamp-quiz";
import generalCSQuiz from "./data/general-cs-quiz";
import gitQuiz from "./data/git-quiz";
import htmlQuiz from "./data/html-quiz";
import informationTechnologyQuiz from "./data/information-technology-quiz";
import javascriptQuiz from "./data/javascript-quiz";
import linuxQuiz from "./data/linux-quiz";
import pythonQuiz from "./data/python-quiz";
import qualityAssuranceQuiz from "./data/quality-assurance-quiz";
import securityQuiz from "./data/security-quiz";
import sqlQuiz from "./data/sql-quiz";

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

export const CATEGORY_NAMES = {
  ACCESSIBILITY: "Accessibility",
  AGILE: "Agile",
  CSS: "CSS",
  FREECODECAMP: "freecodecamp",
  GENERAL: "General Computer Science",
  GIT: "Git",
  HTML: "Html",
  JAVASCRIPT: "Javascript",
  INFOTECH: "InfoTech",
  LINUX: "Linux",
  PYTHON: "Python",
  SECURITY: "Security",
  SQL: "SQL",
  QUALITYASSURANCE: "Quality Assurance"
};

function addCategoryToQuiz(quizQuestion: QuizQuestion[], category: string) {
  const questionHolder: QuizQuestion[] = [];
  quizQuestion.map(x =>
    questionHolder.push(Object.assign({}, x, { Category: category }))
  );
  return questionHolder;
}

export const ALL_CATEGORIES = [
  ...addCategoryToQuiz(accessibilityQuiz, CATEGORY_NAMES.ACCESSIBILITY),
  ...addCategoryToQuiz(cssQuiz, CATEGORY_NAMES.CSS),
  ...addCategoryToQuiz(freecodecampQuiz, CATEGORY_NAMES.FREECODECAMP),
  ...addCategoryToQuiz(generalCSQuiz, CATEGORY_NAMES.GENERAL),
  ...addCategoryToQuiz(gitQuiz, CATEGORY_NAMES.GIT),
  ...addCategoryToQuiz(htmlQuiz, CATEGORY_NAMES.HTML),
  ...addCategoryToQuiz(informationTechnologyQuiz, CATEGORY_NAMES.INFOTECH),
  ...addCategoryToQuiz(javascriptQuiz, CATEGORY_NAMES.JAVASCRIPT),
  ...addCategoryToQuiz(linuxQuiz, CATEGORY_NAMES.LINUX),
  ...addCategoryToQuiz(pythonQuiz, CATEGORY_NAMES.PYTHON),
  ...addCategoryToQuiz(sqlQuiz, CATEGORY_NAMES.SQL),
  ...addCategoryToQuiz(agileQuiz, CATEGORY_NAMES.AGILE),
  ...addCategoryToQuiz(qualityAssuranceQuiz, CATEGORY_NAMES.QUALITYASSURANCE),
  ...addCategoryToQuiz(securityQuiz, CATEGORY_NAMES.SECURITY)
];

export const ROUNDED_QUESTION_COUNT = 900;
