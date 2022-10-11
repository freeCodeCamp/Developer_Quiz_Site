const qualityAssuranceQuiz = [
  {
    Question:
      "What type of testing is done on a new feature to ensure that it doesn't accidentally break existing functionality?",
    Answer: "Regression",
    Distractor1: "Smoke",
    Distractor2: "End to End",
    Distractor3: "Integration",
    Explanation:
      "Regression testing is done on a new build to ensure that new functionality has not unintentionally broken previously tested functionality.",
    Link: "https://www.freecodecamp.org/news/software-quality-assurance-guide/",
  },
  {
    Question:
      "Which of the following most accurately describes exhaustive testing?",
    Answer: "It's not possible.",
    Distractor1: "It's considered best practice.",
    Distractor2: "It's a standard procedure in the final steps before launch.",
    Distractor3: "It's what happens during end to end testing.",
    Explanation:
      "If you truly try to test every aspect and test case in your software, it will take too much time and effort, and it's not practical.",
    Link: "https://www.freecodecamp.org/news/software-testing-beginners-guide/#software-testing-principles",
  },
  {
    Question: "What do the terms QA and QC stand for?",
    Answer: "Quality Assurance and Quality Control ",
    Distractor1: "Quality Assets and Quality completion",
    Distractor2: "Quality Analyst and Quantum Computing",
    Distractor3: "Quality Assessment and Quality Computing",
    Explanation:
      "Quality Assurance (commonly known as QA) and Quality Control (commonly known as QC)",
    Link: "https://www.freecodecamp.org/news/software-quality-assurance-guide/",
  },
  {
    Question: "What type of test involves catching errors while writing code?",
    Answer: "Static Analysis",
    Distractor1: "Unit",
    Distractor2: "Integration",
    Distractor3: "End to End",
    Explanation:
      "One of the most common sources of bugs is related to typos and incorrect types. Static Analysis Testing lets you catch typos and type errors as you write the code.",
    Link: "https://www.freecodecamp.org/news/why-use-static-types-in-javascript-part-2-part-3-be699ee7be60/",
  },
  {
    Question:
      "What type of test involves testing individual functions or components?",
    Answer: "Unit",
    Distractor1: "Static Analysis",
    Distractor2: "Integration",
    Distractor3: "End to End",
    Explanation:
      "Unit Testing lets us verify that individual, isolated parts work as expected.",
    Link: "https://www.freecodecamp.org/news/software-testing-beginners-guide/#types-of-software-testing",
  },
  {
    Question:
      "What type of test involves testing groups of functions and/or components?",
    Answer: "Integration",
    Distractor1: "Static Analysis",
    Distractor2: "Unit",
    Distractor3: "End to End",
    Explanation:
      "Integration Testing lets us verify that several units work together in harmony.",
    Link: "https://www.freecodecamp.org/news/software-testing-beginners-guide/#types-of-software-testing",
  },
  {
    Question:
      "What type of test behaves like a user to click around the app and verify that it functions correctly?",
    Answer: "End to End",
    Distractor1: "Static Analysis",
    Distractor2: "Unit",
    Distractor3: "Integration",
    Explanation:
      "End to End tests typically run the entire application (both frontend and backend) and your test will interact with the app just like a typical user would.",
    Link: "https://www.freecodecamp.org/news/end-to-end-testing-tutorial/",
  },
  {
    Question:
      "Which of the following statements are false about using software tests?",
    Answer:
      "By using software tests, you automatically ensure that the app follows user requirements.",
    Distractor1: "Using software tests improves product security.",
    Distractor2: "Using software tests improves customer satisfaction.",
    Distractor3: "Using software tests saves money.",
    Explanation:
      "Even if the app is 99% bug free, if it doesn't meet consumer requirements or fulfill the original user requirements it is useless.",
    Link: "https://www.freecodecamp.org/news/software-testing-beginners-guide/",
  },
];

export default qualityAssuranceQuiz;
