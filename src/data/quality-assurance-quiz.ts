const qualityAssuranceQuiz = [
  {
    Question:
      "What is the purpose of a test case execution report in software testing?",
    Answer: "To track the progress of test execution",
    Distractor1: "To document test case design",
    Distractor2: "To describe the software architecture",
    Distractor3: "To specify user requirements",
    Explanation:
      "A test case execution report is used to track the progress of test case execution, including which test cases have been executed, their outcomes, and any defects found.",
    Link: "https://www.freecodecamp.org/news/software-quality-assurance-guide/"
  },
  {
    Question:
      "What is the primary goal of quality assurance in software development?",
    Answer: "To ensure software quality",
    Distractor1: "To fix all software bugs",
    Distractor2: "To develop software faster",
    Distractor3: "To design software interfaces",
    Explanation:
      "The primary goal of quality assurance (QA) in software development is to ensure that the software meets the required quality standards and is free from major defects.",
    Link: "https://www.freecodecamp.org/news/software-quality-assurance-guide/"
  },

  {
    Question:
      "What type of testing is done on a new feature to ensure that it doesn't accidentally break existing functionality?",
    Answer: "Regression",
    Distractor1: "Smoke",
    Distractor2: "End to End",
    Distractor3: "Integration",
    Explanation:
      "Regression testing is done on a new build to ensure that new functionality has not unintentionally broken previously tested functionality.",
    Link: "https://www.freecodecamp.org/news/software-quality-assurance-guide/"
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
    Link: "https://www.freecodecamp.org/news/software-testing-beginners-guide/#software-testing-principles"
  },
  {
    Question: "What do the terms QA and QC stand for?",
    Answer: "Quality Assurance and Quality Control ",
    Distractor1: "Quality Assets and Quality completion",
    Distractor2: "Quality Analyst and Quantum Computing",
    Distractor3: "Quality Assessment and Quality Computing",
    Explanation:
      "Quality Assurance (commonly known as QA) and Quality Control (commonly known as QC)",
    Link: "https://www.freecodecamp.org/news/software-quality-assurance-guide/"
  },
  {
    Question: "What type of test involves catching errors while writing code?",
    Answer: "Static Analysis",
    Distractor1: "Unit",
    Distractor2: "Integration",
    Distractor3: "End to End",
    Explanation:
      "One of the most common sources of bugs is related to typos and incorrect types. Static Analysis Testing lets you catch typos and type errors as you write the code.",
    Link: "https://www.freecodecamp.org/news/why-use-static-types-in-javascript-part-2-part-3-be699ee7be60/"
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
    Link: "https://www.freecodecamp.org/news/software-testing-beginners-guide/#types-of-software-testing"
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
    Link: "https://www.freecodecamp.org/news/software-testing-beginners-guide/#types-of-software-testing"
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
    Link: "https://www.freecodecamp.org/news/end-to-end-testing-tutorial/"
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
    Link: "https://www.freecodecamp.org/news/software-testing-beginners-guide/"
  },
  {
    Question: "What are regression tests?",
    Answer: "Re-applying tests at later stages of development.",
    Distractor1: "Only testing individual units of code",
    Distractor2: "tests that check for basic functionality only",
    Distractor3: "There is no such thing as regression tests",
    Explanation:
      "Regression tests refers to re-applying tests at later stages of development to ensure they still work.",
    Link: "https://www.freecodecamp.org/news/software-testing-beginners-guide/"
  },
  {
    Question:
      "What type of test involves the process of testing integrated software?",
    Answer: "System",
    Distractor1: "Acceptance",
    Distractor2: "Unit",
    Distractor3: "Integration",
    Explanation:
      "In system testing, the quality assurance team evaluates how each component of the application/software work together in a full, integrated environment.",
    Link: "https://www.freecodecamp.org/news/software-testing-beginners-guide/#types-of-software-testing"
  },
  {
    Question: "What does the term TDD stand for?",
    Answer: "Test-Driven Development",
    Distractor1: "Test-Driving Development",
    Distractor2: "Test-Distributing Development",
    Distractor3: "Test-Distinct Development",
    Explanation:
      "Test-driven development is the act of first deciding what you want your program to do (the specifications), formulating a failing test, then writing the code to make that test pass.",
    Link: "https://www.freecodecamp.org/news/an-introduction-to-test-driven-development-c4de6dce5c/"
  },
  {
    Question: "Which of the following is true about TDD?",
    Answer: "With TDD, test logic precedes application logic.",
    Distractor1: "With TDD, application logic precedes test logic",
    Distractor2: "TDD stands for Test-Distributing Development",
    Distractor3: "TDD stands for Testing Distributed Development",
    Explanation:
      "The term TDD stands for Test-Driven Development and it is the act of first deciding what you want your program to do (the specifications), formulating a failing test, then writing the code to make that test pass.",
    Link: "https://www.freecodecamp.org/news/an-introduction-to-test-driven-development-c4de6dce5c/"
  },
  {
    Question:
      "Which testing technique focuses on examining the internal logic and structure of a software application?",
    Answer: "White-Box Testing",
    Distractor1: "Black-Box Testing",
    Distractor2: "Grey-Box Testing",
    Distractor3: "User Acceptance Testing",
    Explanation:
      "White-box testing involves analyzing the internal code, logic, and structure of a software application to ensure thorough coverage of all code paths.",
    Link: "https://www.freecodecamp.org/news/4-testing-methods-which-are-mandatory-for-any-software-7731ad194fb3/"
  },
  {
    Question:
      "What does SAST stand for in the context of software security testing?",
    Answer: "Static Application Security Testing",
    Distractor1: "Systematic Application Safety Testing",
    Distractor2: "Source Analysis Security Testing",
    Distractor3: "Secure Algorithmic Source Testing",
    Explanation:
      "Static Application Security Testing (SAST) involves analyzing the codebase for security vulnerabilities and violations of security rules, providing insights into potential issues before the final application build.",
    Link: "https://www.freecodecamp.org/news/4-testing-methods-which-are-mandatory-for-any-software-7731ad194fb3/"
  },
  {
    Question:
      "How many phases/stages does the Software Development Life Cycle have?",
    Answer: "7",
    Distractor1: "3",
    Distractor2: "12",
    Distractor3: "5",
    Explanation:
      "A good QA engineer should understand the full life cycle of software products in order to effectively plan and test them. There are 7 phases of the Software Development Life Cycle",
    Link: "https://www.freecodecamp.org/news/how-to-become-a-quality-assurance-engineer-qa-engineer-career-guide/"
  },
  {
      Question: "What is the primary purpose of a test plan in software quality assurance?",
      Answer: "A test plan outlines the scope, approach, resources, and schedule for testing activities.",
      Distractor1: "A test plan is used to document defects found during testing.",
      Distractor2: "A test plan specifies the code changes needed to fix defects.",
      Distractor3: "A test plan is only created after testing is complete.",
      Explanation: "Test plans are essential for planning, managing, and executing testing efforts in a structured manner. They help teams achieve comprehensive test coverage and meet quality goals.",
      Link: "https://www.guru99.com/test-plan.html"
    },
    {
      Question: "What is the key difference between functional testing and non-functional testing?",
      Answer: "Functional testing checks whether a software application performs its intended functions correctly, while non-functional testing focuses on aspects like performance, scalability, security, and usability.",
      Distractor1: "Functional testing is automated, while non-functional testing is manual.",
      Distractor2: "Functional testing is concerned with code quality, while non-functional testing checks user interfaces.",
      Distractor3: "Functional testing verifies user documentation, while non-functional testing assesses data integrity.",
      Explanation: "Functional testing checks whether a software application performs its intended functions correctly, while non-functional testing focuses on aspects like performance, scalability, security, and usability. Understanding the distinction between functional and non-functional testing is crucial for designing comprehensive test strategies.",
      Link: "https://www.softwaretestinghelp.com/types-of-software-testing/"
    },
    {
      Question: "What is the 'boundary value analysis' technique in software testing?",
      Answer: "Boundary value analysis involves testing values at the boundaries of input domains.",
      Distractor1: "Boundary value analysis focuses on the middle range of input values.",
      Distractor2: "Boundary value analysis is only applicable to functional testing.",
      Distractor3: "Boundary value analysis applies to non-functional testing exclusively.",
      Explanation: "Boundary value analysis involves testing values at the boundaries of input domains. Test cases are designed for minimum, maximum, and just beyond boundary values to expose potential defects.",
      Link: "https://www.guru99.com/boundary-value-analysis-and-equivalence-partitioning.html"
    },
    {
      Question: "What is the purpose of 'equivalence partitioning' in software testing?",
      Answer: "Equivalence partitioning is a testing technique that divides input data into groups with similar characteristics, treating each group as equivalent.",
      Distractor1: "Equivalence partitioning only applies to user interface testing.",
      Distractor2: "Equivalence partitioning is used to test code comments.",
      Distractor3: "Equivalence partitioning is not applicable to functional testing.",
      Explanation: "Equivalence partitioning reduces the number of test cases needed while ensuring good test coverage by testing representative values from each partition.",
      Link: "https://www.softwaretestinghelp.com/equivalence-partitioning-guide/"
    },
    {
      Question: "Explain what 'regression testing' is in the context of software quality assurance and why it is important.",
      Answer: "Regression testing is the process of retesting a software application to ensure that new code changes have not adversely affected existing functionalities. It is important to catch regression defects early and maintain software quality.",
      Distractor1: "Regression testing focuses on testing new features only.",
      Distractor2: "Regression testing is only performed after a software release.",
      Distractor3: "Regression testing is not necessary if thorough initial testing is conducted.",
      Explanation: "Regression testing is a critical part of the software development lifecycle to prevent the introduction of new defects while making enhancements or fixes.",
      Link: "https://www.guru99.com/regression-testing.html"
    },
    {
      Question: "What is 'test automation'?",
      Answer: "Test automation is the use of software tools and scripts to perform test cases automatically.",
      Distractor1: "Test automation is the same as manual testing.",
      Distractor2: "Test automation has no advantages over manual testing.",
      Distractor3: "Test automation is only used for non-functional testing.",
      Explanation: "Test automation is the use of software tools and scripts to perform test cases automatically. Advantages include faster testing, repeatability, and reduced human errors, while disadvantages may include high initial setup costs and maintenance overhead.",
      Link: "https://www.guru99.com/advantages-and-disadvantages"
    },
];

export default qualityAssuranceQuiz;
