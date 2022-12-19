const regexQuiz = [
  {
    Question: "What are Regular Expressions?",
    Answer: "Patterns that allow you to describe, match, or parse text.",
    Distractor1: "popular type of compilers built in the 1980's",
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
    Distractor1: "\a",
    Distractor2: "\s",
    Distractor3: "\n",
    Explanation: "The \b word boundary matches the start or end of a word.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question:
      "In JavaScript Regular Expressions, which of the following matches any decimal digit and is shorthand for [0-9]?",
    Answer: "\d",
    Distractor1: "\v",
    Distractor2: "\c",
    Distractor3: "\s",
    Explanation:
      "The \d character matches any decimal digit and is shorthand for [0-9].",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question: 
      "In JavaScript Regular Expressions, which of the following characters matches any alphanumeric character which could be a letter, a digit, or an underscore?",
    Answer: "\w",
    Distractor1: "\v",
    Distractor2: "\b",
    Distractor3: "\n",
    Explanation: 
      "The \w character matches any alphanumeric character which could be a letter, a digit, or an underscore. \w is shorthand for [A-Za-z0-9_]",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question: 
      "In JavaScript Regular Expressions, which of the following matches any white space character?",
    Answer: "\s",
    Distractor1: "\a",
    Distractor2: "\q",
    Distractor3: "\b",
    Explanation: "The \s character matches any white space character.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question: 
      "In JavaScript Regular Expressions, which of the following characters matches any non-digit and is the same as [^0-9]?",
    Answer: "\D",
    Distractor1: "\F",
    Distractor2: "\G",
    Distractor3: "\H",
    Explanation: "The \D character matches any non-digit and is the same as [^0-9]",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question: 
      "In JavaScript Regular Expressions, which of the following characters matches any non-word (that is non-alphanumeric) character?",
    Answer: "\W",
    Distractor1: "\M",
    Distractor2: "\I",
    Distractor3: "\T",
    Explanation: "The \W character matches any non-word (that is non-alphanumeric) character and is shorthand for [^A-Za-z0-9_]",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question: 
      "In JavaScript Regular Expressions, which of the following matches a non-white space character?",
    Answer: "\S",
    Distractor1: "\J",
    Distractor2: "\Y",
    Distractor3: "\L",
    Explanation: "The \S character matches a non-white space character.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  },
  {
    Question: "What is a character class in Regular Expressions?",
    Answer: "A character class is used to match any one of several characters in a particular position",
    Distractor1: "A character class is used to removing spaces from a string",
    Distractor2: "A character class is used to remove numbers from a string",
    Distractor3: "A character class is used to add alpha numeric characters to a string",
    Explanation: "A character class is used to match any one of several characters in a particular position.",
    Link: "https://www.freecodecamp.org/news/regular-expressions-for-beginners/"
  }
];
export default regexQuiz;
