const regexQuiz = [
  {
    Question:
      "Which regex quantifier matches 0 or 1 occurrence of the preceding character or group?",
    Answer: "?",
    Distractor1: "*",
    Distractor2: "+",
    Distractor3: "{3}",
    Explanation:
      "The ? quantifier matches the preceding character or group 0 or 1 time, indicating that it is optional.",
    Link: "https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/"
  },
  {
    Question: "What does the regex character class [A-Za-z] match?",
    Answer: "Any letter(both uppercase and lowercase)",
    Distractor1: "Any number",
    Distractor2: "Any special characters",
    Distractor3: "Only upper case letters",
    Explanation:
      "This character class matches any single letter, whether it's uppercase or lowercase.",
    Link: "https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/"
  },
  {
    Question:
      "Which of the following regular expressions will match a string containing exactly three lowercase letters (a-z) in a row?",
    Answer: "[a-z]{3}",
    Distractor1: "[a-z]+",
    Distractor2: "[a-z]{2,3}",
    Distractor3: "[a-z]{4}",
    Explanation:
      "[a-z]{3} is the correct regular expression for matching a string containing exactly three lowercase letters (a-z) in a row.",
    Link: "https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/"
  },
  {
    Question:
      "Which regular expression pattern can be used to match valid email addresses according to the most common email format standards?",
    Answer: "^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
    Distractor1: "^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-z]{2,}$",
    Distractor2: "^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]{2,}$",
    Distractor3: "^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,}$",
    Explanation:
      "^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$ matches valid email addresses by ensuring alphanumeric characters, dots, underscores, plus signs, and hyphens before @ and a valid domain with at least one dot after @.",
    Link: "https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/"
  },
  {
    Question: "What are Regular Expressions?",
    Answer: "Patterns that allow you to describe, match, or parse text",
    Distractor1: "popular type of compiler built in the 1980's",
    Distractor2: "a category of sorting algorithms",
    Distractor3: "Patterns that allow you to reverse strings",
    Explanation:
      "Regular expressions are patterns that allow you to describe, match, or parse text.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question:
      "In JavaScript Regular Expressions, which of the following flags is used for global search?",
    Answer: "g",
    Distractor1: "i",
    Distractor2: "m",
    Distractor3: "?",
    Explanation:
      "The g flag is used for global search which means the search will not return after the first match.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question:
      "In JavaScript Regular Expressions, which of the following flags is used for case-insensitive search?",
    Answer: "i",
    Distractor1: "g",
    Distractor2: "n",
    Distractor3: "j",
    Explanation:
      "The i flag is used for case-insensitive search meaning that a match can occur regardless of the casing.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question:
      "In JavaScript Regular Expressions, which of the following flags is used for multiline search?",
    Answer: "m",
    Distractor1: "a",
    Distractor2: "d",
    Distractor3: "w",
    Explanation: "The m flag is used for multiline search.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question:
      "In JavaScript Regular Expressions, which of the following flags is used for Unicode search?",
    Answer: "u",
    Distractor1: "k",
    Distractor2: "v",
    Distractor3: "e",
    Explanation: "The u flag is used for Unicode search.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question:
      "In JavaScript Regular Expressions, which of the following characters matches the start of a line?",
    Answer: "^",
    Distractor1: "&",
    Distractor2: "*",
    Distractor3: "?",
    Explanation:
      "The ^ character matches the start of a line and anchors a literal at the beginning of that line.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question:
      "In JavaScript Regular Expressions, which of the following characters matches the end of a line?",
    Answer: "$",
    Distractor1: "<",
    Distractor2: ">",
    Distractor3: "?",
    Explanation:
      "The $ character matches the end of a line and anchors a literal at the end of that line.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question:
      "In JavaScript Regular Expressions, which of the following word boundaries matches the start or end of a word?",
    Answer: "\b",
    Distractor1: "g",
    Distractor2: "w",
    Distractor3: "\n",
    Explanation: "The \b word boundary matches the start or end of a word.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question: "What is a character class in Regular Expressions?",
    Answer:
      "A character class is used to match any one of several characters in a particular position",
    Distractor1: "A character class is used to remove spaces from a string",
    Distractor2: "A character class is used to remove numbers from a string",
    Distractor3:
      "A character class is used to add alphanumeric characters to a string",
    Explanation:
      "A character class is used to match any one of several characters in a particular position.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question:
      "Which of the following regex patterns can be used to match one or more occurrences of a digit in a string?",
    Answer: "d+",
    Distractor1: "d*",
    Distractor2: "d?",
    Distractor3: "d{2}",
    Explanation:
      "The regex pattern d+ matches one or more occurrences of a digit in a string. The plus sign (+) means 'one or more' in regular expressions.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question: "What are the two Lookaround groups in regex?",
    Answer: "Lookahead and Lookbehind",
    Distractor1: "Lookfront and Lookback",
    Distractor2: "Lookstart and Lookend",
    Distractor3: "Lookplus and Lookminus",
    Explanation:
      "The Lookahead and Lookbehind are non capturing groups that search for the presence or absence of a regex pattern.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-javascript-developers/"
  },
  {
    Question: "Which of these patterns denotes a positive Lookahead?",
    Answer: "(?=)",
    Distractor1: "(?a)",
    Distractor2: "(?#)",
    Distractor3: "(?->)",
    Explanation: "The positive Lookahead is indicated by the = in the group.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-javascript-developers/"
  },
  {
    Question: "Which of these patterns denotes a negative Lookahead?",
    Answer: "(?!)",
    Distractor1: "(?~)",
    Distractor2: "(?-=)",
    Distractor3: "(?A)",
    Explanation: "The negative Lookahead is indicated by the ! in the group.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-javascript-developers/"
  },
  {
    Question: "Which of these patterns denotes a positive Lookbehind?",
    Answer: "(?<=)",
    Distractor1: "(?b)",
    Distractor2: "(?$)",
    Distractor3: "(?<-)",
    Explanation: "The positive Lookbehind is indicated by the <= in the group.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-javascript-developers/"
  },
  {
    Question: "Which of these patterns denotes a negative Lookbehind?",
    Answer: "(?<!)",
    Distractor1: "(?B)",
    Distractor2: "(?!!)",
    Distractor3: "(?--)",
    Explanation: "The negative Lookbehind is indicated by the <! in the group.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-javascript-developers/"
  },
  {
    Question:
      "Which of the following are used to group part of a regex into one unit?",
    Answer: "()",
    Distractor1: "[]",
    Distractor2: "{}",
    Distractor3: "<>",
    Explanation: "The parentheses, (), are used in grouping regex.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-javascript-developers/"
  }
];
export default regexQuiz;
