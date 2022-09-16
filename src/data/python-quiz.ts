const pythonQuiz = [
    {
        Question: "In Python, what are the outputs for type(1) and type((1,))?",
        Answer: "<class 'int'>  <class 'tuple'>",
        Distractor1: "<class 'str'> <class 'int'>",
        Distractor2: "<class 'dict'>  <class 'list'>",
        Distractor3: "<class 'int'> <class 'int'> ",
        Explanation:
          "type(1) will return <class 'int'> and type((1,)) will return <class 'tuple'>",
        Link: "https://www.freecodecamp.org/news/python-tuple-vs-list-what-is-the-difference/",
      },
      {
        Question:
          "In Python, which method can be used to replace parts of a string?",
        Answer: "replace()",
        Distractor1: "switch()",
        Distractor2: "repl()",
        Distractor3: "find()",
        Explanation:
          "If you need to search through a string for a pattern, and replace it with another pattern, you can use the replace() method.",
        Link: "https://www.freecodecamp.org/news/python-string-methods-tutorial-how-to-use-find-and-replace-on-python-strings/",
      },
      {
        Question: "In Python, what is the correct way to create a function?",
        Answer: "def function_name(parameters):",
        Distractor1: "function function_name(parameter):",
        Distractor2: "definition function_name {[parameters]}:",
        Distractor3: "create function_name(parameters):",
        Explanation:
          "The following snippet shows the general syntax to define a function in Python: def function_name(parameters):",
        Link: "https://www.freecodecamp.org/news/functions-in-python-a-beginners-guide/",
      },
      {
        Question: "In Python, what is a correct syntax to output 'Hello World'?",
        Answer: "print('Hello World')",
        Distractor1: "echo('Hello World')",
        Distractor2: "p('Hello World')",
        Distractor3: "printf('Hello World')",
        Explanation: "To print anything in Python, you use the print() function.",
        Link: "https://www.freecodecamp.org/news/python-print-variable-how-to-print-a-string-and-variable/",
      },
      {
        Question: "In Python, what is the new line character?",
        Answer: "\\n",
        Distractor1: "\\s",
        Distractor2: "\\new",
        Distractor3: "\\m",
        Explanation: "\\n is the newline character in Python.",
        Link: "https://www.freecodecamp.org/news/python-new-line-and-how-to-python-print-without-a-newline/",
      },
      {
        Question: "In Python, how can you create an empty dictionary?",
        Answer: "{}",
        Distractor1: "[]",
        Distractor2: "()",
        Distractor3: "list()",
        Explanation: "You can create an empty dictionary with {} in Python.",
        Link: "https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/",
      },
      {
        Question: "In Python, how can you create an empty set?",
        Answer: "set()",
        Distractor1: "{}",
        Distractor2: "dict()",
        Distractor3: "()",
        Explanation:
          "You must call the set() function to create an empty set in Python.",
        Link: "https://www.freecodecamp.org/news/python-sets-detailed-visual-introduction/",
      },
      {
        Question:
          "In Python, the value of empty sequences, collections, and the number 0 are all ...",
        Answer: "Falsy",
        Distractor1: "Truthy",
        Distractor2: "FALSENESS",
        Distractor3: "TRUENESS",
        Explanation:
          "Empty sequences, collections, and the number 0 are falsy values in Python.",
        Link: "https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/",
      },
      {
        Question:
          "In Python, what operator can you use to check if a value is in a sequence?",
        Answer: "in",
        Distractor1: "member",
        Distractor2: "inside",
        Distractor3: "partof",
        Explanation:
          "The in operator is a membership operator in Python. It can be used to check if a value is in a sequence or not because it returns True if the value is in the list and False if it is not in the list. ",
        Link: "https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/",
      },
      {
        Question:
          "In Python, a value that evaluates to True in a boolean context is known as...",
        Answer: "Truthy",
        Distractor1: "TRUENESS",
        Distractor2: "Falsy",
        Distractor3: "Truthful",
        Explanation:
          "A value that evaluates to True in a boolean context is known as a truthy value.",
        Link: "https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/",
      },
      {
        Question:
          "In Python, what logical operator returns True if both operands are True?",
        Answer: "and",
        Distractor1: "or",
        Distractor2: "not",
        Distractor3: "list",
        Explanation:
          "The and operator returns True if both operands are True and False otherwise.",
        Link: "https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/",
      },
      {
        Question: "In Python, what is the “greater than” operator?",
        Answer: ">",
        Distractor1: ">=",
        Distractor2: "<",
        Distractor3: "<=",
        Explanation:
          "The “greater than” operator is > in Python. It returns True if the value on the left is greater than the value on the right. We can also use it to compare strings in alphabetical order.",
        Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
      },
];

export default pythonQuiz;