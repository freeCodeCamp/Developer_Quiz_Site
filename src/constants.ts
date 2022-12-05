import accessibilityQuiz from "./data/accessibility-quiz";
import agileQuiz from "./data/agile-quiz";
import cloudComputingQuiz from "./data/cloud-computing-quiz";
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
import regexQuiz from "./data/regex-quiz";
import { QuizQuestion } from "./types";

export const CATEGORY_NAMES = {
  ACCESSIBILITY: "Accessibility",
  AGILE: "Agile",
  CLOUDCOMPUTING: "Cloud Computing",
  CSS: "CSS",
  FREECODECAMP: "freeCodeCamp",
  GENERAL: "General Computer Science",
  GIT: "Git",
  HTML: "HTML",
  INFOTECH: "Information Technology",
  JAVASCRIPT: "JavaScript",
  LINUX: "Linux",
  PYTHON: "Python",
  SECURITY: "Security",
  SQL: "SQL",
  QUALITYASSURANCE: "Quality Assurance",
  REGEX: "Regular Expressions"
};

function addCategoryToQuiz(quizQuestion: QuizQuestion[], category: string) {
  const questionHolder: QuizQuestion[] = [];
  quizQuestion.forEach(x =>
    questionHolder.push(Object.assign({}, x, { Category: category }))
  );
  return questionHolder;
}

export const ALL_CATEGORIES = [
  ...addCategoryToQuiz(accessibilityQuiz, CATEGORY_NAMES.ACCESSIBILITY),
  ...addCategoryToQuiz(cloudComputingQuiz, CATEGORY_NAMES.CLOUDCOMPUTING),
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
  ...addCategoryToQuiz(securityQuiz, CATEGORY_NAMES.SECURITY),
  ...addCategoryToQuiz(regexQuiz, CATEGORY_NAMES.REGEX)
];

export const ROUNDED_QUESTION_COUNT = 1000;
