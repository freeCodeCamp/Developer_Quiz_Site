import accessibilityQuiz from "./data/accessibility-quiz";
import agileQuiz from "./data/agile-quiz";
import cloudComputingQuiz from "./data/cloud-computing-quiz";
import cssQuiz from "./data/css-quiz";
import devopsQuiz from "./data/devops-quiz";
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

export const ALL_CATEGORIES = [
  ...accessibilityQuiz,
  ...cssQuiz,
  ...cloudComputingQuiz,
  ...devopsQuiz,
  ...freecodecampQuiz,
  ...generalCSQuiz,
  ...gitQuiz,
  ...htmlQuiz,
  ...informationTechnologyQuiz,
  ...javascriptQuiz,
  ...linuxQuiz,
  ...pythonQuiz,
  ...sqlQuiz,
  ...agileQuiz,
  ...qualityAssuranceQuiz,
  ...securityQuiz,
  ...regexQuiz
];

export const ROUNDED_QUESTION_COUNT = 1200;
