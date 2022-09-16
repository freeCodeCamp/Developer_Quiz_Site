const cppQuiz = [
  {
    Question:
      "Which one of the following is used to implement dynamic binding in C++?",
    Answer: "Virtual function",
    Distractor1: "Friend functiom",
    Distractor2: "Static function",
    Distractor3: "Const function",
    Explanation:
      "In dynamic binding, the code to be executed in response to a function call is decided at runtime. C++ has virtual functions to support this.",
    Link: "https://en.cppreference.com/w/cpp/language/virtual",
  },
  {
    Question:
      "What type programming language is C++",
    Answer: "General purpose",
    Distractor1: "Client-side scripting",
    Distractor2: "Machine",
    Distractor3: "Gui",
    Explanation:
      "C++ is a general purpose compiled cross paltrform programming language.",
    Link: "https://www.w3schools.com/cpp/cpp_intro.asp",
  },
  {
    Question:
      "What is a correct syntax(code) to output 'Hi World' in C++?",
    Answer: "cout << 'Hi World';",
    Distractor1: "print 'Hi World'",
    Distractor2: "print('Hi World')",
    Distractor3: "println('Hi World')",
    Explanation:
      "C++ uses cout and cin for output and input",
    Link: "https://www.w3schools.com/cpp/cpp_intro.asp",
  },
  {
    Question:
      "C++ is C?",
    Answer: "False",
    Distractor1: "True",
    Explanation:
      "C++ is based on C but is not C",
    Link: "https://www.freecodecamp.org/news/c-vs-cpp-whats-the-difference/",
  },
  {
    Question:
      "What is the correct syntax for a line comment in C++?",
    Answer: "// This is a comment",
    Distractor1: "-- This is a comment",
    Distractor2: "REM This is a comment",
    Distractor3: "<!-- This is a comment -->",
    Explanation:
      "C++ uses cout and cin for output and input",
    Link: "https://www.w3schools.com/cpp/cpp_comments.asp",
  },
  {
    Question:
      "How is a varible declared(explicitly specify) in C++?",
    Answer: "type variableName = value; ",
    Distractor1: "var variableName = value",
    Distractor2: "variableName = value",
    Distractor3: "auto variableName = value",
    Explanation:
      "C++ uses explicitly specify and in newer version c++ 11 it can auto specify",
    Link: "https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/",
  },
  {
    Question:
      "Which data type do you use for a string C++?",
    Answer: "std::string",
    Distractor1: "char",
    Distractor2: "text",
    Distractor3: "var",
    Explanation:
      "std::string is a safe way to use an array of characters",
    Link: "https://www.freecodecamp.org/news/c-string-std-string-example-in-cpp/",
  },
  {
    Question:
      "What is the entry point of every C++ program?",
    Answer: "int main()",
    Distractor1: "#include",
    Distractor2: "using",
    Distractor3: "doctype",
    Explanation:
      "The entry point of a c++ program is int main()",
    Link: "https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/",
  },
  {
    Question:
      "In C++ how do you make variable x equal the numeric value 5",
    Answer: "int x = 5",
    Distractor1: "var x = 5",
    Distractor2: "x = 5",
    Distractor3: "number x = 5",
    Explanation:
      "int stands for intager. to make x equal the number 5 and not the string 5 you set x to be a int (intager)",
    Link: "https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/",
  },
  {
    Question:
      "In C++ what is the compaerison syntax",
    Answer: "==",
    Distractor1: "=",
    Distractor2: "===",
    Distractor3: "!=",
    Explanation:
      "To compare to values C++ uses == to set a varible to a value it uses =",
    Link: "https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/",
  },
  {
    Question:
      "In C++ what value does an array start counting at",
    Answer: "0",
    Distractor1: "1",
    Distractor2: "null",
    Distractor3: "nil",
    Explanation:
      "Arrays start at index 0 and NOT index 1",
    Link: "https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/",
  },
  {
    Question: "What type of inheritance may lead to the diamond problem?",
    Answer: "Multiple inheritance",
    Distractor1: "Single inheritance",
    Distractor2: "Hierarchical inheritance ",
    Distractor3: "Multilevel inheritance",
    Explanation:
      "Multiple inheritance causes the ambiguity as to which parent class a particular feature is to be inherited from if more than one parent class implements said feature",
    Link: "https://www.freecodecamp.org/news/multiple-inheritance-in-c-and-the-diamond-problem-7c12a9ddbbec/",
  },
  {
    Question: "In object-oriented programming, what is function overloading?",
    Answer:
      "multiple functions with the same name but with different parameters",
    Distractor1: "functions that only return undefined",
    Distractor2: "functions that only return numbers",
    Distractor3: "functions that are only used for mathematical operations",
    Explanation:
      "Function overloading is when you have multiple functions with the same name but with different parameters. This results in the function being overloaded with different jobs.",
    Link: "https://www.freecodecamp.org/news/object-oriented-programming-in-c/",
  },
];

export default cppQuiz;