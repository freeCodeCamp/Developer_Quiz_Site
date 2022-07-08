const fullQuiz = [
  {
    Question: "What is the basic language of a computer?",
    Answer: "Binary",
    Distractor1: "HyperText Markup Language",
    Distractor2: "Cascading Style Sheets",
    Distractor3: "JavaScript",
    Explanation:
      "Computers are simplistic and understand binary. Programming languages such as Python and Java were created to help humans write instructions for computers and interpret it.",
    Link: "https://youtu.be/F0WoVEr0-44?t=336",
  },
  {
    Question:
      "In JavaScript, which built-in method/object will return the unique values of an array?",
    Answer: "Set",
    Distractor1: "map()",
    Distractor2: "reduce()",
    Distractor3: "filter()",
    Explanation:
      "The Set object lets you store unique values of any type, whether primitive values or object references. Set removes duplicate entries.",
    Link: "https://www.freecodecamp.org/news/lets-learn-about-set-and-its-unique-functionality-in-javascript-5654c5c03de2/",
  },
  {
    Question:
      "In JavaScript, all objects inherit a built-in property from a  ___________________.",
    Answer: "prototype",
    Distractor1: "instance variable",
    Distractor2: "node",
    Distractor3: "accessor",
    Explanation:
      "Prototypes provide the means for JavaScript objects to inherit features from other objects.",
    Link: "https://www.freecodecamp.org/news/javascript-prototype-explained-with-examples/",
  },
  {
    Question:
      "In JavaScript, every class has a special ____________ method that is used to create a new object instance of the class.",
    Answer: "constructor",
    Distractor1: "starter",
    Distractor2: "assign",
    Distractor3: "apply",
    Explanation:
      "Assigning 0 to the length property of the array will clear the contents of the array.",
    Link: "https://www.freecodecamp.org/news/how-javascript-implements-oop/",
  },
  {
    Question:
      "In SQL, which of the following is a wildcard character that can be used with the LIKE statement?",
    Answer: "%",
    Distractor1: "$",
    Distractor2: "!",
    Diatractor3: "@",
    Explanation:
      "You can use the % and _ wildcards with the SQL LIKE statement to compare values from an SQL table.",
    Link: "https://www.freecodecamp.org/news/sql-like-statement-how-to-query-sql-with-wildcard/",
  },
  {
    Question:
      "In JavaScript, a variable declared with the _________ keyword must be assigned an initial value.",
    Answer: "const",
    Distractor1: "finally",
    Distractor2: "new",
    Distractor3: "var",
    Explanation:
      "The value of a const variable must be specified when the varible is declared.",
    Link: "https://www.freecodecamp.org/news/let-me-be-a-const-ant-not-a-var-iable-1be52d153462/",
  },
  {
    Question:
      "In JavaScript, given the array, 'let array = [0, 1, 2, 3]', what is a valid way to clear all of the the array's values?",
    Answer: "array.length = 0",
    Distractor1: "array.none()",
    Distractor2: "array.concat()",
    Distractor3: "array.push()",
    Explanation:
      "Assigning 0 to the length property of the array will clear the contents of the array.",
    Link: "https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/",
  },
  {
    Question:
      "In JavaScript, a variable that has been declared but not assigned a value is known as ____________.",
    Answer: "undefined",
    Distractor1: "unknown",
    Distractor2: "unassigned",
    Distractor3: "pending",
    Explanation:
      "A variable that has not been assigned a value is of type undefined",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",
  },
  {
    Question:
      "In JavaScript, a variable that has been declared and assigned a value of 'no value' is ___________________",
    Answer: "null",
    Distractor1: "non-value",
    Distractor2: "empty",
    Distractor3: "unreturned",
    Explanation: "In JavaScript, null represents the absence of a value.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",
  },
  {
    Question:
      "In JavaScript, what is the index of the first element in an array?",
    Answer: "0",
    Distractor1: "1",
    Distractor2: "first",
    Distractor3: "initial",
    Explanation:
      "JavaScript arrays are zero-indexed. The first element of an array is located at index 0.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
  },
  {
    Question:
      "In a JavaScript switch statement, the __________________ case executes if none of the options are true.",
    Answer: "default",
    Distractor1: "override",
    Distractor2: "else",
    Distractor3: "alert",
    Explanation:
      "A default clause is executed if the value of expression doesn't match any of the case clauses.",
    Link: "https://www.freecodecamp.org/news/javascript-switch-case-js-switch-statement-example/",
  },
  {
    Question:
      "In JavaScript, which comparison operator is used to express strict equality?",
    Answer: "===",
    Distractor1: ">=",
    Distractor2: "+=",
    Distractor3: "<=",
    Explanation:
      "The strict equality operator returns true if two values have the same type and the same value. If the two compared values have different types, the result is false.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality",
  },
  {
    Question: "In Linux, what is a maximum length for a filename?",
    Answer: "255 Bytes",
    Distractor1: "225 Bytes",
    Distractor2: "235 Bytes",
    Distractor3: "295 Bytes",
    Explanation:
      "The maximum length for a file name is 255 bytes. The maximum combined length of both the file name and path name is 4096 bytes.",
    Link: "https://www.ibm.com/docs/en/spectrum-protect/8.1.9?topic=parameters-file-specification-syntax",
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
  {
    Question:
      "Which of the following data structures is used to convert an infix expression to a postfix expression?",
    Answer: "Stacks",
    Distractor1: "Queues",
    Distractor2: "Priority Queues",
    Distractor3: "LinkedList",
    Explanation:
      "A stack is the most suitable data structure for converting an infix expression to a postfix expression",
    Link: "https://youtu.be/B31LgI4Y4DQ?t=13587",
  },
  {
    Question:
      "Which of the following techniques is implemented to improve CPU performance?",
    Answer: "Pipelining",
    Distractor1: "Encoding",
    Distractor2: "Ratelimiting",
    Distractor3: "None of these",
    Explanation:
      "A substantial improvement in performance can be achieved by overlapping the execution of successive instructions,using a technique called pipelining ",
    Link: "https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/pipelining/index.html",
  },
  {
    Question:
      "Which one of these data structures follows the LIFO(Last In First Out) method?",
    Answer: "Stacks",
    Distractor1: "Priority Queues",
    Distractor2: "Trees",
    Distractor3: "Queues",
    Explanation:
      "A stack is a linear data structure that uses the LIFO(Last In First Out) method.",
    Link: "https://youtu.be/RBSGKlAvoiM?t=3567",
  },
  {
    Question: "Which of the following is a Divide and Conquer algorithm?",
    Answer: "Merge Sort",
    Distractor1: "Selection Sort",
    Distractor2: "Heap Sort",
    Distractor3: "Bubble Sort",
    Explanation:
      "Merge Sort recursively splits the array into smaller arrays, sorts those arrays and merges them into one sorted array.",
    Link: "https://www.freecodecamp.org/news/an-intro-to-advanced-sorting-algorithms-merge-quick-radix-sort-in-javascript-b65842194597/",
  },
  {
    Question:
      "What is the worst case time complexity for accessing an element in a BST(Binary Search Tree)?",
    Answer: "O(n)",
    Distractor1: "O(n*logn)",
    Distractor2: "O(n*n)",
    Distractor3: "O(logn)",
    Explanation:
      "The worst case time complexity would be O(n) because we might need to visit all of the nodes.",
    Link: "https://www.freecodecamp.org/news/binary-search-tree-what-is-it/",
  },
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
    Question: "Which of the following is correct for arrays?",
    Answer: "Size of an array can not be changed once initialized",
    Distractor1:
      "Insertion and deletion of elements has a time complexity of O(1)",
    Distractor2: "A single array can contain data of different data types",
    Distractor3: "It can only be one-dimensional",
    Explanation:
      "When you create an array, you are allocated a block of contiguous memory and in order to change it's size, you will have to create a new array.",
    Link: "https://youtu.be/zg9ih6SVACc?t=1470",
  },
  {
    Question: "In Linux, what does the resize2fs command do?",
    Answer: "This can be used to change the size of an ext2 or ext3 filesystem.",
    Distractor1: "This is used manipulate the size of partitions.",
    Distractor2: "This is used to create an ext2, ext3, or ext4 filesystem",
    Distractor3: "This is used to check the family of filesystems.",
    Explanation:
      "The resize2fs program will resize ext2, ext3, or ext4 file systems. It can be used to enlarge or shrink an unmounted file system located on the device. The resize2fs program does not manipulate the size of partitions.",
    Link: "http://manpages.ubuntu.com/manpages/bionic/man8/resize2fs.8.html",
  },
  {
    Question: "In Linux, which command is used to display information about the processes using a filesystem?",
    Answer: "fuser",
    Distractor1: "ps",
    Distractor2: "top",
    Distractor3: "grep",
    Explanation:
      "The fuser utility displays the process IDs of the processes that are using the files specified as arguments.",
    Link: "https://docs.oracle.com/cd/E88353_01/html/E72487/fuser-8.html",
  },
  {
    Question: "In JavaScript, select the right syntax for an ES6 arrow function:",
    Answer: "let variable = () => {//code block}",
    Distractor1: "let variable => (){//code block}",
    Distractor2: "let variable = function() => {//code block}",
    Distractor3: "let variable = function(){//code block}",
    Explanation:
      "ES6 arrow functions provide you with an alternative way to write shorter syntax compared to the traditional function expression.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
  },
  {
    Question: "In JavaScript, what will be the value of output? let output = null ?? 20",
    Answer: "20",
    Distractor1: "undefined",
    Distractor2: "null",
    Distractor3: "Syntax error",
    Explanation:
      "The nullish coalescing operator in JavaScript will return the right-hand side operand if the left-hand side operand is null or undefined.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator",
  },
  {
    Question:
      "In JavaScript, in the global execution context, 'this' refers to the ______ object whether in strict mode or not.",
    Answer: "window",
    Distractor1: "null",
    Distractor2: "undefined",
    Distractor3: "document",
    Explanation:
      "In the global execution context, the 'this' keyword always points to the window object",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this",
  },
  {
    Question: "In JavaScript, which queue is emptied first by an event loop?",
    Answer: "Microtask queue",
    Distractor1: "Callback queue (Macrotask queue)",
    Distractor2: "None",
    Distractor3: "Both",
    Explanation:
      "An event loop first empties the Microtask queue and once it is empty it starts to empty the Callback queue.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
  },
  {
    Question:
      "In JavaScript, which of the following is NOT in the Temporal Dead Zone(TDZ) during hoisting?",
    Answer: "var",
    Distractor1: "let",
    Distractor2: "const",
    Distractor3: "class",
    Explanation:
      "var is hoisted with the default value of undefined while let, const and classes are hoisted but are in the Temporal Dead Zone(TDZ) until the declaration is executed.",
    Link: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting",
  },
  {
    Question:
      "In JavaScript, which of the following expressions will return true?",
    Answer: "null >= 0",
    Distractor1: "null == 0",
    Distractor2: "null === 0",
    Distractor3: "null > 0",
    Explanation:
      "null >= 0 and null <= 0 will both result in true because these operators will convert null to 0. With the == operator, null only equals undefined.",
    Link: "https://262.ecma-international.org/5.1/#sec-11.8.5",
  },
  {
    Question:
      "In JavaScript, which of the following is a commonly used web API?",
    Answer: "console",
    Distractor1: "Array",
    Distractor2: "Object",
    Distractor3: "let, var, const",
    Explanation:
      "console is part of a web API which is provided by browsers and Node.js.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/console",
  },
  {
    Question: "In JavaScript, which of the following methods returns a function?",
    Answer: "bind",
    Distractor1: "apply",
    Distractor2: "call",
    Distractor3: "None of given",
    Explanation:
      "The bind function returns a new function with given arguments as the new function's 'this' keyword.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind",
  },
  {
    Question: "What is a first class function?",
    Answer: "The ability to send and receive functions like values.",
    Distractor1: "Functions with higher priority than others.",
    Distractor2: "Functions declared in classes",
    Distractor3: "Functions that only return numbers",
    Explanation:
      "If functions can be sent and received just like values, than that languge is said to have first class functions. They are also called first class citizens.",
    Link: "https://www.freecodecamp.org/news/discover-the-power-of-first-class-functions-fd0d7b599b69/",
  },
  {
    Question:
      "Which one of these is NOT a common time complexity equation for Big O notation?",
    Answer: "O(n14)",
    Distractor1: "O(1)",
    Distractor2: "O(log n)",
    Distractor3: "O(n)",
    Explanation:
      "O(1), O(log n), O(n) are just some of the common time complexity equations for Big O notation.",
    Link: "https://www.youtube.com/watch?v=zg9ih6SVACc&t=867s",
  },
  {
    Question: "What are parallel arrays?",
    Answer:
      "two or more arrays that contain the same number of elements and have corresponding values in the same position",
    Distractor1: "arrays that only hold strings",
    Distractor2: "arrays that only hold numbers",
    Distractor3: "a special type of nested arrays",
    Explanation:
      "Parallel arrays contain the same number of elements and have corresponding values in the same position.",
    Link: "https://www.youtube.com/watch?v=zg9ih6SVACc&t=1379s",
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
    Question:
      "In JavaScript, which of the following methods returns the day of the month for the specified date according to local time?",
    Answer: "getDate()",
    Distractor1: "getTheDate()",
    Distractor2: "getDay()",
    Distractor3: "getFullYear()",
    Explanation:
      "The getDate() method returns the day of the month for the specified date according to local time. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate",
  },

  {
    Question:
      "In JavaScript, which of the following methods returns the day of the week for the specified date according to local time?",
    Answer: "getDay()",
    Distractor1: "getDate()",
    Distractor2: "getTheSpecificDay()",
    Distractor3: "getFullYear()",
    Explanation:
      "The getDay() method returns the day of the week for the specified date according to local time, where 0 represents Sunday. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay",
  },

  {
    Question:
      "In JavaScript, which of the following methods returns the year of the specified date according to local time?",
    Answer: "getFullYear()",
    Distractor1: "getDate()",
    Distractor2: "listTheYear()",
    Distractor3: "getMyFullYearNow()",
    Explanation:
      "The getFullYear() method returns the year of the specified date according to local time. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear",
  },

  {
    Question:
      "In JavaScript, which of the following methods returns the day of the hour for the specified date, according to local time?",
    Answer: "getHours()",
    Distractor1: "getMyHour()",
    Distractor2: "getMilliseconds()",
    Distractor3: "getHour()",
    Explanation:
      "The getHours() method returns the hour for the specified date, according to local time. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours",
  },
  {
    Question:
      "In JavaScript, which of the following methods returns the milliseconds in the specified date according to local time?",
    Answer: "getMilliseconds()",
    Distractor1: "getMillisec()",
    Distractor2: "getTheMillisecondsNow()",
    Distractor3: "getMinutes()",
    Explanation:
      "The getMilliseconds() method returns the milliseconds in the specified date according to local time. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds",
  },
  {
    Question:
      "In JavaScript, which of the following methods returns the minutes in the specified date according to local time?",
    Answer: "getMinutes()",
    Distractor1: "getMin()",
    Distractor2: "getMilliseconds()",
    Distractor3: "getTheMinutes()",
    Explanation:
      "The getMinutes() method returns the minutes in the specified date according to local time. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes",
  },
  {
    Question:
      "In JavaScript, which of the following methods returns the month in the specified date according to local time, as a zero-based value?",
    Answer: "getMonth()",
    Distractor1: "getTheMonth()",
    Distractor2: "getSeconds()",
    Distractor3: "getTime()",
    Explanation:
      "The getMonth() method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year). ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth",
  },
  {
    Question:
      "In JavaScript, which of the following methods returns the seconds in the specified date according to local time?",
    Answer: "getSeconds()",
    Distractor1: "getSec()",
    Distractor2: "getTheSeconds()",
    Distractor3: "getTime()",
    Explanation:
      "The getSeconds() method returns the seconds in the specified date according to local time. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds",
  },
  {
    Question:
      "In JavaScript, which of the following methods returns the number of milliseconds since the Unix Epoch?",
    Answer: "getTime()",
    Distractor1: "getMilliseconds()",
    Distractor2: "getSeconds()",
    Distractor3: "getTheTime()",
    Explanation:
      "The getTime() method returns the number of milliseconds since the Unix Epoch. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime",
  },
  {
    Question:
      "In JavaScript, which method returns an HTMLCollection object that consists of all of the elements that have the same class name?",
    Answer: "getElementsByClassName()",
    Distractor1: "querySelector()",
    Distractor2: "getElementsByName()",
    Distractor3: "getElementsByTagName()",
    Explanation:
      "The getElementsByClassName method returns an object containing all of the child elements with that given class name.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName",
  },
  {
    Question: "In JavaScript, which operator is used to concatenate strings?",
    Answer: "+",
    Distractor1: "*",
    Distractor2: "&",
    Distractor3: "#",
    Explanation:
      "The addition operator (+) produces the sum of numeric operands or string concatenation.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition",
  },
  {
    Question:
      "In JavaScript, what method is used to arrange array values into alphabetical and/or ascending order?",
    Answer: "sort()",
    Distractor1: "shift()",
    Distractor2: "unshift()",
    Distractor3: "from()",
    Explanation:
      "The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
  },
  {
    Question:
      "In JavaScript, what method is used to arrange array values into descending order?",
    Answer: "reverse()",
    Distractor1: "from()",
    Distractor2: "unshift()",
    Distractor3: "join()",
    Explanation:
      "The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse",
  },
  {
    Question:
      "In JavaScript, the ____________ method returns the index position of the first occurrence of a value in a string.",
    Answer: "indexOf()",
    Distractor1: "getPosition()",
    Distractor2: "valueOf()",
    Distractor3: "charAt(0)",
    Explanation:
      "The indexOf() method returns the first index of the specified value in a string and will return -1 if it is not present.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf",
  },
  {
    Question:
      "In JavaScript, which of the following is the default separator in the join() method?",
    Answer: "comma (',')",
    Distractor1: "space (' ')",
    Distractor2: "empty string ('')",
    Distractor3: "full-stop ('.')",
    Explanation:
      "If a separator is omitted, the array elements are separated with a comma (',').",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
  },
  {
    Question:
      "In JavaScript, which method boils an array down to a single value?",
    Answer: "reduce()",
    Distractor1: "map()",
    Distractor2: "filter()",
    Distractor3: "forEach()",
    Explanation:
      "The reduce() method iterates over the entire array and returns the value that results from running the “reducer” callback function to completion. The returned result is a single value.",
    Link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-javascript-array-methods-reduce/",
  },
  {
    Question:
      "In JavaScript, which method creates a new array and returns all of the items which pass the condition specified in the callback?",
    Answer: "filter()",
    Distractor1: "split()",
    Distractor2: "concat()",
    Distractor3: "flat()",
    Explanation:
      "The filter() method creates a new array and returns all of the items which pass the condition specified in the callback.",
    Link: "https://www.freecodecamp.org/news/javascript-array-filter-tutorial-how-to-iterate-through-elements-in-an-array/",
  },
  {
    Question:
      "In JavaScript, which method iterates over the elements of an array and creates a new array based on the results of the function specified within said method?",
    Answer: "map()",
    Distractor1: "reverse()",
    Distractor2: "split()",
    Distractor3: "concat()",
    Explanation:
      "The map() method creates a new array filled with the results of calling a function (provided within the method) on every element in the array that calls the method.",
    Link: "https://www.freecodecamp.org/news/array-map-tutorial/",
  },
  {
    Question: "What kind of function accepts another function as an argument?",
    Answer: "Higher order",
    Distractor1: "Arrow function",
    Distractor2: "Anonymous function",
    Distractor3: "Named function",
    Explanation:
      "A Higher Order Function is any function that returns a function when executed, takes a function as one or more of its arguments, or both.",
    Link: "https://www.freecodecamp.org/news/higher-order-functions-in-javascript-d9101f9cf528/",
  },
  {
    Question:
      "In JavaScript, which pair of symbols can be used in place of quotes to define a string?",
    Answer: "Template literals : ``",
    Distractor1: "Square brackets: []",
    Distractor2: "Curly braces: {}",
    Distractor3: "Angle brackets: <>",
    Explanation:
      "Template literals are literals delimited with backticks (`), allowing embedded expressions called substitutions. Untagged template literals result in strings, which makes them useful for string interpolation (and multiline strings, since unescaped newlines are allowed).",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",
  },
  {
    Question:
      "In JavaScript, what is the name of the method that is used to convert a string into an array?",
    Answer: "split()",
    Distractor1: "slice()",
    Distractor2: "trim()",
    Distractor3: "concat()",
    Explanation:
      "The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split",
  },
  {
    Question: "What is Big O Notation?",
    Answer: "A way to measure the performance and efficiency of an algorithm.",
    Distractor1: "A way to notate changes from the server.",
    Distractor2: "A way to notate the different types in a file system.",
    Distractor3: "A way to notate the different elements in an array.",
    Explanation:
      "Big O notation is a way to measure the performance of an algorithm.",
    Link: "https://www.freecodecamp.org/news/learn-big-o-notation/",
  },
  {
    Question: "In Linux, which command prints the path to the current directory you are in?",
    Answer: "pwd",
    Distractor1: "cat",
    Distractor2: "cd",
    Distractor3: "ls",
    Explanation:
      "pwd(short for print working directory) prints the current folder path and is helpful when you are lost in the terminal.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-pwd-command",
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
    Question:
      "In CSS, what selector is used to set the style of links for the moment they are clicked?",
    Answer: "a:active",
    Distractor1: "a:hover",
    Distractor2: "a:visited",
    Distractor3: "a:link",
    Explanation:
      "With a:active you can set the style of links for the moment they are clicked.",
    Link: "https://www.freecodecamp.org/news/how-to-style-links-in-css/",
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
    Question: "What does DNS stand for?",
    Answer: "Domain Name System",
    Distractor1: "Dynamic Name System",
    Distractor2: "Domain Naming System",
    Distractor3: "Domain Network System",
    Explanation: "DNS is an abbreviation for Domain Name System",
    Link: "https://www.freecodecamp.org/news/what-is-dns/",
  },
  {
    Question:
      "In CSS, which one of these values represents 20% of the viewport height?",
    Answer: "20vh",
    Distractor1: "200vh",
    Distractor2: "2vh",
    Distractor3: "2000vh",
    Explanation: "20vh is equivalent to 20% of the viewport height.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
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
    Question: "In CSS, which one of these values represents 10% of the viewport width?",
    Answer: "10vw",
    Distractor1: "10vh",
    Distractor2: "100vw",
    Distractor3: "1000vw",
    Explanation: "10vw is equivalent to 10% of the viewport width.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },
  {
    Question: "In Python, the value of empty sequences, collections, and the number 0 are all ...",
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
      "In JavaScript, what method removes the first element of an array and returns it?",
    Answer: ".shift()",
    Distractor1: ".push()",
    Distractor2: ".pop()",
    Distractor3: ".unshift()",
    Explanation:
      "The .shift() method removes the first element of an array and returns it. ",
    Link: "https://www.freecodecamp.org/news/the-javascript-array-handbook/",
  },
  {
    Question: "In CSS, what does the animation-fill-mode property do?",
    Answer: "It is used to style the element after the animation ends.",
    Distractor1: "It sets a delay for the animation to start.",
    Distractor2: "It sets how many times an animation should run.",
    Distractor3: "It determines how long an animation should last in seconds.",
    Explanation:
      "The animation-fill-mode property is used to style the element after the animation ends.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },
  {
    Question: "In Linux, which command is used to send HTTP requests?",
    Answer: "curl",
    Distractor1: "tar",
    Distractor2: "uname",
    Distractor3: "gzip",
    Explanation:
      "Curl is a command-line tool that allows us to do HTTP requests from shell",
    Link: "https://www.freecodecamp.org/news/how-to-start-using-curl-and-why-a-hands-on-introduction-ea1c913caaaa/",
  },
  {
    Question:
      "In HTML, what is the character entity for the left single quote symbol?",
    Answer: "&lsquo;",
    Distractor1: "&rsquo;",
    Distractor2: "&leftquo;",
    Distractor3: "&lsquotes;",
    Explanation:
      "The &lsquo; character entity is used to display the left single quote symbol in HTML.",
    Link: "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/",
  },
  {
    Question:
      "In Linux, which command is used to remove adjacent duplicate lines inside a file?",
    Answer: "uniq",
    Distractor1: "sort",
    Distractor2: "rm",
    Distractor3: "rmdir",
    Explanation:
      "The uniq command removes duplicate lines in a file, by default.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question:
      "In HTML, what is the element tag that shows content added to the document?",
    Answer: "<ins>",
    Distractor1: "<map>",
    Distractor2: "<mark>",
    Distractor3: "<dd>",
    Explanation: "The ins tag shows content added to the document",
    Link: "https://devdocs.io/html/element/ins",
  },
  {
    Question: "In CSS, this type of unit is defined by comparing to another length value.",
    Answer: "Relative",
    Distractor1: "Absolute",
    Distractor2: "Fixed",
    Distractor3: "Dynamic",
    Explanation:
      "In CSS, relative units are relative to other length values. Several of the relative units depend on the viewport size.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/#why-learn-css-relative-units",
  },
  {
    Question: "In HTML, what does the title attribute do in the img tag?",
    Answer: "it provides additional information about the image",
    Distractor1: "it creates a title above the img tag",
    Distractor2: "it creates a title below the img tag",
    Distractor3: "it creates a title to the left of the img tag",
    Explanation:
      "The title attribute can be used to provide additional information about the image",
    Link: "https://www.freecodecamp.org/news/img-html-image-tag-tutorial/",
  },
  {
    Question: "In Linux, which command is used to create multiple nested folders?",
    Answer: "mkdir -p",
    Distractor1: "mkdir -27",
    Distractor2: "makedir",
    Distractor3: "makedir -p",
    Explanation:
      "You can create multiple nested folders by adding the -p option to the mkdir command.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question:
      "In CSS, what is the name of the CSS grid property used to position items inside grid containers along the main axis?",
    Answer: "justify-items",
    Distractor1: "justify-content",
    Distractor2: "justify-rows",
    Distractor3: "justify-columns",
    Explanation:
      "The justify-items property is used to position items within a grid container along the x-axis (main axis).",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In HTML, what does the src attribute do in the img tag?",
    Answer: "Represents the source for the image",
    Distractor1: "Provides descriptive text for the image",
    Distractor2: "Provides the height of the image",
    Distractor3: "Provides the width of the image",
    Explanation:
      "The src attribute represents the source for the image so the browser knows where to locate it.",
    Link: "https://www.freecodecamp.org/news/img-html-image-tag-tutorial/",
  },
  {
    Question: "In HTML, how do you write a comment?",
    Answer: "<!-- I am a comment! -->",
    Distractor1: "X!--I am a comment!--X",
    Distractor2: "V!--I am a comment!--V",
    Distractor3: ">!--I am a comment!--<",
    Explanation: "The syntax for an HTML tag is <!-- I am a comment! -->",
    Link: "https://www.freecodecamp.org/news/html-comment-how-to-comment-out-a-line-or-tag-in-html/",
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
  {
    Question:
      "In HTML, which one of these methods is NOT used to select DOM elements?",
    Answer: "typeof",
    Distractor1: "getElementById",
    Distractor2: "querySelector",
    Distractor3: "querySelectorAll",
    Explanation:
      "There are a few methods to select elements from the HTML document including .querySelector(), .querySelectorAll() and .getElementById().",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
  },
  {
    Question:
      "In JavaScript, what is the name of the technique used to extract an object's values into new variables?",
    Answer: "Object destructuring",
    Distractor1: "Array destructuring",
    Distractor2: "Hoisting",
    Distractor3: "typeof",
    Explanation:
      "Object destructuring is used to extract an object's values into new variables.",
    Link: "https://www.freecodecamp.org/news/array-vs-object-destructuring-in-javascript/",
  },
  {
    Question: "What is the Design Thinking Process?",
    Answer:
      "A process to come up with creative, user centric solutions to complex problems.",
    Distractor1: "A process to fix computers.",
    Distractor2: "A process to design mockups.",
    Distractor3: "A process to troubleshoot Windows applications.",
    Explanation:
      "The Design Thinking Process is a way to come up with creative, user centric solutions to complex problems.",
    Link: "https://www.freecodecamp.org/news/the-design-thinking-process-explained/",
  },
  {
    Question: "In JavaScript, which one of these methods modifies an array in place?",
    Answer: ".splice()",
    Distractor1: ".slice()",
    Distractor2: ".filter()",
    Distractor3: ".join()",
    Explanation:
      "The .splice() method modifies an array in place and it can be used to remove or add elements to an array.",
    Link: "https://www.freecodecamp.org/news/javascript-array-slice-vs-splice-whats-the-difference/",
  },
  {
    Question:
      "In Linux, which is the default shell?",
    Answer: "Bourne Again SHell",
    Distractor1: "PowerSHell",
    Distractor2: "Emacs",
    Distractor3: "Fish",
    Explanation:
      "Bash (short for Bourne Again SHell) is the most widely used shell, packaged by default for most Linux distributions",
    Link: "https://www.freecodecamp.org/news/linux-command-line-bash-tutorial/",
  },
  {
    Question:
      "In SQL, what aggregate function allows you to count the number of rows and returns that count as a column in the result set?",
    Answer: "COUNT()",
    Distractor1: "AVG()",
    Distractor2: "MINIMUM()",
    Distractor3: "AVERAGE()",
    Explanation:
      "The COUNT() function is used to count the number of rows and return that count as a column in the result set",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/",
  },
  {
    Question: "In grep, which wildcard can you use to select ALL files in a directory?",
    Answer: "*",
    Distractor1: "?",
    Distractor2: "[]",
    Distractor3: "!",
    Explanation:
      "You can use the wildcard (*) to select all files in a directory. For example the ls * command would list ALL files in the current directory.",
    Link: "https://www.freecodecamp.org/news/grep-command-tutorial-how-to-search-for-a-file-in-linux-and-unix/",
  },
  {
    Question: "Which one is NOT a main component of a CPU?",
    Answer: "AXLE",
    Distractor1: "Control Unit",
    Distractor2: "Arithmetic Logic Unit",
    Distractor3: "Registers",
    Explanation:
      "The Control Unit, Arithmetic Logic Unit, and Registers are important parts of the CPU. ",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/",
  },
  {
    Question: "In CSS, what is the all media type in a CSS media query?",
    Answer: "A category of media that works for all devices.",
    Distractor1: "A category of media that only works for mobile devices.",
    Distractor2: "A category of media that only works for print media.",
    Distractor3: "A category of media that only works for tablets.",
    Explanation:
      "The all media type is a category of media that will work for all media devices.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "In JavaScript, how do you write a multiline comment?",
    Answer: "/* */",
    Distractor1: "//",
    Distractor2: "<!-- -->",
    Distractor3: "** **",
    Explanation: "In JavaScript, we use /* */ to write a multiline comment.",
    Link: "https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-comment-your-javascript-code/16783",
  },
  {
    Question:
      "In Linux, which command displays information about the Operating System?",
    Answer: "uname",
    Distractor1: "echo",
    Distractor2: "man",
    Distractor3: "find",
    Explanation:
      "Calling uname without any options will return the Operating System codename. The m option shows the hardware name and the p option prints the processor architecture name.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command",
  },
  {
    Question: "freeCodeCamp.org first launched in:",
    Answer: "2014",
    Distractor1: "2001",
    Distractor2: "1910",
    Distractor3: "2030",
    Explanation:
      "The first version of the freeCodeCamp curriculum went live in 2014, from Quincy Larson's closet office in San Francisco. Other developers quickly stepped in to help expand the curriculum and save him from madness.",
    Link: "https://www.freecodecamp.org/news/about/",
  },
  {
    Question: "In Python, what is the result of this code: “Hi” * 2?",
    Answer: "“HiHi”",
    Distractor1: "“Hihi”",
    Distractor2: "“HiHiHiHi”",
    Distractor3: "A SyntaxError",
    Explanation:
      "The * operator in Python can be used to repeat a string a given number of times. In this case, the string “Hi” is repeated two times. ",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
  },
  {
    Question:
      "In Python, what is the name of a value associated with an object that can be referenced by its name using dot notation?",
    Answer: "Attribute",
    Distractor1: "Property",
    Distractor2: "Characteristic",
    Distractor3: "Method",
    Explanation:
      "An attribute is a value associated with an object that can be referenced by its name using dot notation.",
    Link: "https://docs.python.org/3/glossary.html",
  },
  {
    Question: "In HTML, what is the mark element?",
    Answer: "An element used to highlight text",
    Distractor1: "A tag used to create an ordered list",
    Distractor2: "A tag used to create quotes",
    Distractor3: "A tag used to create headings",
    Explanation: "The mark element is used to highlight text",
    Link: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/",
  },
  {
    Question: "In HTML, what attribute can you add to <input> to create a checkbox?",
    Answer: 'type="checkbox"',
    Distractor1: 'type="c"',
    Distractor2: 'type="box"',
    Distractor3: 'type="form"',
    Explanation:
      'The type="checkbox" attribute is used to create a checkbox in HTML.',
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox",
  },
  {
    Question:
      "In the Vim text editor, which command is used to move the cursor one character to the left?",
    Answer: "h",
    Distractor1: "j",
    Distractor2: "k",
    Distractor3: "l",
    Explanation:
      "To move the cursor one character to the left, use the h command.",
    Link: "https://www.freecodecamp.org/news/vim-editor-modes-explained/",
  },
  {
    Question:
      "In HTML, what element is a generic container for other HTML elements?",
    Answer: "<div>",
    Distractor1: "<p>",
    Distractor2: "<a>",
    Distractor3: "<img>",
    Explanation:
      "A div is the HTML element that serves as a generic container for other HTML elements.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div",
  },
  {
    Question: "In CSS, how can you abbreviate the following Hex code? #FF0000",
    Answer: "#F00",
    Distractor1: "#0F0",
    Distractor2: "#00F",
    Distractor3: "#0FF0",
    Explanation:
      "To abbreviate a Hex code in CSS, include one digit of each pair of digits in the code. ",
    Link: "https://www.freecodecamp.org/news/how-hex-code-colors-work-how-to-choose-colors-without-a-color-picker/",
  },
  {
    Question: "In JavaScript, what is the logical AND operator?",
    Answer: "&&",
    Distractor1: "||",
    Distractor2: "!",
    Distractor3: "**",
    Explanation: "&& is the logical AND operator in JavaScript.",
    Link: "https://www.freecodecamp.org/news/javascript-logical-operators/",
  },
  {
    Question: "In Linux, which command is used for creating files?",
    Answer: "touch",
    Distractor1: "mv",
    Distractor2: "man",
    Distractor3: "mkdir",
    Explanation:
      "You create an empty file using the touch command, followed by the name of the file e.g. touch demo.txt",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-touch-command",
  },
  {
    Question: "In SQL, what does DML stand for?",
    Answer: "Data Manipulation Language",
    Distractor1: "Data Definition Language",
    Distractor2: "Data Control Language",
    Distractor3: "Distracting Definition Language",
    Explanation: "DML stands for Data Manipulation Language.",
    Link: "https://en.wikipedia.org/wiki/Data_manipulation_language",
  },
  {
    Question:
      "In JavaScript, which one of these types of loops will always run at least once?",
    Answer: "Do... While Loop",
    Distractor1: "While Loop",
    Distractor2: "For Loop",
    Distractor3: "for each",
    Explanation:
      "The sequence of statements in a do..while loop runs at least once because the condition is evaluated after running the statements. ",
    Link: "https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/",
  },
  {
    Question: "In CSS, what does the animation-direction property do?",
    Answer: "It sets the direction of the animation.",
    Distractor1: "It sets how many times an animation should run.",
    Distractor2: "It is used to style the element after the animation ends.",
    Distractor3: "It pauses the animation if the animation is running.",
    Explanation:
      "The animation-direction property sets the direction of the animation.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },
  {
    Question: "In Python, what is the “less than or equal to” operator?",
    Answer: "<=",
    Distractor1: "<",
    Distractor2: ">",
    Distractor3: ">=",
    Explanation:
      "The “less than or equal to” operator is <= in Python. It returns True if the value on the left is less than or equal to the value on the right. We can also use it to compare strings in alphabetical order.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
  },
  {
    Question:
      "In Python, what built-in function returns the largest item in an iterable or the largest of two or more arguments?",
    Answer: "max()",
    Distractor1: "min()",
    Distractor2: "maximum()",
    Distractor3: "largest()",
    Explanation:
      "The max() function returns the largest item in an iterable or the largest of two or more arguments.",
    Link: "https://www.freecodecamp.org/news/python-function-guide-with-examples/",
  },
  {
    Question: "What does IP stand for?",
    Answer: "Internet Protocol",
    Distractor1: "Interconnection Protocol",
    Distractor2: "International Passenger",
    Distractor3: "Internal Product",
    Explanation:
      "The IP address is a special number that makes sure that the information sent through the internet reaches the right destination. ",
    Link: "https://www.freecodecamp.org/news/what-is-my-ip-address-for-my-router-how-to-find-your-wifi-address/",
  },
  {
    Question: "Which one is NOT a JavaScript library?",
    Answer: "C#",
    Distractor1: "React",
    Distractor2: "D3",
    Distractor3: "Moment",
    Explanation:
      "There are many popular JavaScript libraries including React, D3 and Moment.",
    Link: "https://www.freecodecamp.org/news/10-javascript-libraries-you-should-try/",
  },
  {
    Question: "How many bytes make up a Exabyte?",
    Answer: "1 quintillion bytes",
    Distractor1: "1 billion bytes",
    Distractor2: "1 trillion bytes",
    Distractor3: "1 thousand bytes",
    Explanation: "A Exabyte is composed of 1 quintillion bytes",
    Link: "https://www.freecodecamp.org/news/exabyte-definition/",
  },
  {
    Question: "In Python, which of these is not a keyword?",
    Answer: "forward",
    Distractor1: "if",
    Distractor2: "return",
    Distractor3: "for",
    Explanation:
      "The words if, return, and for, are Python keywords but forward is not a Python keyword. Python keywords are reserved words, so they cannot be used as variable names, function names, or any other identifiers in a Python program. ",
    Link: "https://forum.freecodecamp.org/t/python-keywords-a-guide-with-examples/19188",
  },
  {
    Question: "Where is the CPU located on a computer?",
    Answer: "The motherboard",
    Distractor1: "Graphics Processing Unit",
    Distractor2: "Random Access Memory",
    Distractor3: "Solid State Drive",
    Explanation: "The CPU is located on the motherboard of a computer.",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/",
  },
  {
    Question:
      "In Python, what built-in data structure can store key-value pairs? ",
    Answer: "Dictionary",
    Distractor1: "List",
    Distractor2: "Boolean",
    Distractor3: "String",
    Explanation:
      "A dictionary can store key-value pairs, which are pairs of associated values. We use the key to access its corresponding value in the dictionary. ",
    Link: "https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/",
  },
  {
    Question: "What is a Floating point number?",
    Answer: "A number with a decimal point",
    Distractor1: "A number greater than 100",
    Distractor2: "A number less than 0",
    Distractor3: "A number that is divisible by 3",
    Explanation: "A floating point number is a number with a decimal point.",
    Link: "https://www.freecodecamp.org/news/floating-point-definition/",
  },
  {
    Question: "What is a username?",
    Answer: "A unique name for a user on a website",
    Distractor1: "A secret set of characters",
    Distractor2: "A data type",
    Distractor3: "A special type of object",
    Explanation: "A username is a unique name for a user on a website.",
    Link: "https://www.freecodecamp.org/news/username-definition/",
  },
  {
    Question:
      "In CSS, what is the name of the value that stretches the repeated images in the background-repeat property?",
    Answer: "round",
    Distractor1: "space",
    Distractor2: "around",
    Distractor3: "rounding",
    Explanation:
      "The round value is used to stretch the repeated images in the background-repeat property.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question:
      "In HTML, what is the name of the method used to add new elements to the DOM tree?",
    Answer: "document.createElement()",
    Distractor1: "Callback function",
    Distractor2: ".querySelectorAll()",
    Distractor3: ".textContent()",
    Explanation:
      "The document.createElement() method is used to add new elements to the DOM tree.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
  },
  {
    Question:
      "In SQL, the column or set of columns that uniquely identifies each row in a table is known as a...",
    Answer: "Primary Key",
    Distractor1: "Secondary Key",
    Distractor2: "First Key",
    Distractor3: "Foreign Key",
    Explanation:
      "The primary key is the column or set of columns that uniquely identifies a row. ",
    Link: "https://www.freecodecamp.org/news/the-sql-primary-key-constraint-explained/",
  },
  {
    Question: "freeCodeCamp's Code Radio is:",
    Answer: "An internet radio that plays music you can code to",
    Distractor1:
      "A form of communication America used during World War II created by the Navajo people",
    Distractor2: "A radio station for old acoustic modems",
    Distractor3: "A way to talk with beings from other solar systems",
    Explanation:
      "Code Radio is available 24/7, with more than 1,500 instrumental songs on rotation. Lots of developers enjoy listening to it as background music while they work.",
    Link: "https://www.freecodecamp.org/news/code-radio-24-7/",
  },
  {
    Question:
      "In HTML, what is the name of the element used to draw graphics and animations on the page?",
    Answer: "<canvas>",
    Distractor1: "<bdo>",
    Distractor2: "<table>",
    Distractor3: "<big>",
    Explanation:
      "The <canvas> element is used to draw graphics and animations on the page.",
    Link: "https://devdocs.io/html/element/canvas",
  },
  {
    Question: "In CSS, what is the speech media type in a CSS media query?",
    Answer:
      "A category of media that works for devices like screen readers where the content is read out loud to the user.",
    Distractor1: "A category of media that works for devices with screens.",
    Distractor2:
      "A category of media that works for devices where the media is in print preview mode.",
    Distractor3: "A category of media that only works for mobile devices.",
    Explanation:
      "The speech media type works for devices like screen readers where the content is read out loud to the user.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "Which OSI layer is responsible for email and file transfers?",
    Answer: "The application layer",
    Distractor1: "The network layer",
    Distractor2: "The session layer ",
    Distractor3: "The presentation layer",
    Explanation:
      "Layer 7 is the application layer. Electronic mail programs, for example, are specifically created to run over a network and utilize networking functionality, such as email protocols, which fall under Layer 7. ",
    Link: "https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/",
  },
  {
    Question: "In Git, how do you integrate changes from one branch to another?",
    Answer: "git merge",
    Distractor1: "git copy into",
    Distractor2: "git merge --docs",
    Distractor3: "git clone --docs",
    Explanation:
      "In the command line, you can use git merge to integrate changes from one branch to another",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In HTML, what tag is used to create an unordered (bulleted) list?",
    Answer: "<ul>",
    Distractor1: "<ol>",
    Distractor2: "<li>",
    Distractor3: "<a>",
    Explanation:
      " The <ul> tag is used to create an unordered list. Within the <ul> and </ul> tags, you use the <li> and </li> tags, to create individual list items.",
    Link: "https://www.freecodecamp.org/news/html-list-how-to-use-bullet-points-ordered-and-unordered-lists/",
  },
  {
    Question: "In HTML, what is the caption tag in a table?",
    Answer: "An element used to create captions for a table",
    Distractor1: "An element used to create images in a table",
    Distractor2: "An element used to create links in a table",
    Distractor3: "A element used to create headings in a table",
    Explanation:
      "The caption tag is an element used to create captions for a table",
    Link: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/",
  },
  {
    Question: "In HTML, what tag is used to create a column (cell) in a table?",
    Answer: "<td>",
    Distractor1: "<table>",
    Distractor2: "<tcol>",
    Distractor3: "<col>",
    Explanation: "The <td> tag is used to create a column (cell) in a table.",
    Link: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/",
  },
  {
    Question: "How many bytes make up a Zettabyte?",
    Answer: "1 sextillion bytes",
    Distractor1: "1 hundred bytes",
    Distractor2: "1 thousand bytes",
    Distractor3: "1 million bytes",
    Explanation: "A Zettabyte is composed of 1 sextillion bytes",
    Link: "https://www.freecodecamp.org/news/zettabyte-definition/",
  },
  {
    Question:
      "In HTML, what is the name of the property used to get the text content of a node in the DOM?",
    Answer: "textContent",
    Distractor1: "text-content",
    Distractor2: "content",
    Distractor3: "getContent",
    Explanation:
      "The textContent property is used to get the text content of a node in the DOM.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
  },
  {
    Question: "In CSS, which one is NOT an example of a relative unit?",
    Answer: "px",
    Distractor1: "rem",
    Distractor2: "em",
    Distractor3: "vh",
    Explanation: "Relative units in CSS include rem, em, vh, and vw",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },
  {
    Question: "In JavaScript, what is the JavaScript keyword used to define a constant?",
    Answer: "const",
    Distractor1: "var",
    Distractor2: "let",
    Distractor3: "concat",
    Explanation:
      "The keyword const is used to define a constant in JavaScript. The value of a constant can't be changed through reassignment.",
    Link: "https://www.freecodecamp.org/news/javascript-variables-beginners-guide/",
  },
  {
    Question: "In HTML, what tag is used to embed audio into a document?",
    Answer: "<audio>",
    Distractor1: "<video>",
    Distractor2: "<sound>",
    Distractor3: "<mp3>",
    Explanation: "The <audio> tag is used to embed audio into a document. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio",
  },
  {
    Question: "What is DevDocs.io? ",
    Answer:
      "A powerful documentation website run by the freeCodeCamp community",
    Distractor1: "A community of doctors who know how to code",
    Distractor2: "Developers who work at the shipyard",
    Distractor3:
      "A fancy docking station you can put your laptop on while you code",
    Explanation:
      "DevDocs.io is a popular search engine for programming language documentation. You can download the full documentation for different tools and browse it offline. Perfect for when you need to code on the go and won't have an internet connection.",
    Link: "https://www.freecodecamp.org/news/devdocs-is-joining-the-freecodecamp-community-ae185a1c14a6/",
  },
  {
    Question: "In CSS, what does the animation-duration property do?",
    Answer: "It determines how long an animation should last in seconds.",
    Distractor1: "It is used to style the element after the animation ends.",
    Distractor2: "It sets the direction of the element.",
    Distractor3: "It pauses the animation if the animation is running.",
    Explanation:
      "The animation-duration property is used to determine how long an animation should last in seconds.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },
  {
    Question:
      "In Linux, which command is used for counting the total amount of lines, words, and bytes in a file?",
    Answer: "wc",
    Distractor1: "countl",
    Distractor2: "countw",
    Distractor3: "countwl",
    Explanation:
      "The wc command gives us useful information about a file. The first column returned in the output  is the number of lines. The second is the number of words. The third is the number of bytes.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command",
  },
  {
    Question: "In HTML, what is the name of the tag nested inside the select tag?",
    Answer: "option tag",
    Distractor1: "h1 tag",
    Distractor2: "code tag",
    Distractor3: "aside tag",
    Explanation:
      "The option tag is nested inside the select tag and it serves to provide options for the dropdown menu.",

    Link: "https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/",
  },
  {
    Question:
      "In JavaScript, what is the name of the technique used to extract array values into new variables?",
    Answer: "Array destructuring",
    Distractor1: "typeof",
    Distractor2: "async",
    Distractor3: "Optional chaining",
    Explanation:
      "Array destructuring is used  to extract array values into new variables.",
    Link: "https://www.freecodecamp.org/news/array-vs-object-destructuring-in-javascript/",
  },
  {
    Question: "In CSS, how do you change the background-image of an element?",
    Answer: 'background-image: url("path_to_image");',
    Distractor1: 'background-img: url("path_to_image");',
    Distractor2: 'background_image: url("path_to_image");',
    Distractor3: 'background-image: ("path_to_image")',
    Explanation:
      "The background-image CSS property allows you to place an image behind any HTML element you wish. Immediately after the property you add a colon. Then, url() is used to tell CSS where the image is located. Inside the parentheses the path to the image is listed in opening and closing double quotes. This lets the browser know what URL to pull. Lastly, don't forget the semicolon to end the statement!",
    Link: "https://www.freecodecamp.org/news/css-background-image-with-html-example-code/",
  },
  {
    Question: "In CSS, what is the media type in a CSS media query?",
    Answer: "The category of media for the device.",
    Distractor1: "A set of rules that only applies to mobile devices",
    Distractor2: "A category only for print media.",
    Distractor3: "A category only for speech.",
    Explanation: "A media type refers to the category of media for the device.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "In HTML, what is the semantic meaning behind the <i> tag?",
    Answer: "span of text that represents a change in mood or quality of text",
    Distractor1: "block of text used to highlight misspelled words",
    Distractor2: "span of text used to signal high importance",
    Distractor3:
      "block of text used to represent the main content of the HTML page",
    Explanation:
      "The <i> tag is a span of text that represents a change in mood or quality of text",
    Link: "https://www.freecodecamp.org/news/html-italics-tutorial-how-to-make-text-italic-with-the-i-tag/",
  },
  {
    Question: "What is an HTML 5 boilerplate?",
    Answer: "block of code you use as a starter template for any HTML document",
    Distractor1: "a block of code that groups images",
    Distractor2: "a block of code that groups links",
    Distractor3: "a block of code that groups forms",
    Explanation:
      "An HTML 5 boilerplate is a block of code you use as a starter template for any HTML document",
    Link: "https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/",
  },
  {
    Question:
      "In JavaScript, what is the name of the method used to see if one string is found in another?",
    Answer: ".includes()",
    Distractor1: ".padEnd()",
    Distractor2: ".slice()",
    Distractor3: ".trim()",
    Explanation:
      "The .includes() method is used to check if one string is found in another.",
    Link: "https://www.freecodecamp.org/news/javascript-string-contains-how-to-use-js-includes/",
  },
  {
    Question: "In HTML, what is the character entity for double quotes?",
    Answer: "&quot;",
    Distractor1: "&quotes;",
    Distractor2: "&doublequot;",
    Distractor3: "&dquot;",
    Explanation:
      "The &quot; character entity is used to display double quotes in HTML.",
    Link: "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/",
  },
  {
    Question: "In HTML, what is the character entity for the degree symbol?",
    Answer: "&deg;",
    Distractor1: "&degree;",
    Distractor2: "&d;",
    Distractor3: "&dg;",
    Explanation:
      "The &deg; character entity is used to display the degree symbol in HTML.",
    Link: "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/",
  },
  {
    Question: "In Linux, which command is used to move into a directory?",
    Answer: "cd",
    Distractor1: "mv",
    Distractor2: "pwd",
    Distractor3: "rm",
    Explanation:
      "Once you've created a folder, you can move into it with the cd command(which stands for change directory). You invoke it specifying a folder to move into. You can specify a folder name, or an entire path.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question: "In JavaScript, what keyword is used to define a function?",
    Answer: "function",
    Distractor1: "def",
    Distractor2: "func",
    Distractor3: "fct",
    Explanation:
      "The function keyword is used to define a function in JavaScript.",
    Link: "https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/",
  },
  {
    Question:
      "In Python, what value does a function return by default if it doesn't have a return statement?",
    Answer: "None",
    Distractor1: "0",
    Distractor2: "An empty string",
    Distractor3: "An empty list",
    Explanation:
      "Python functions return the special value of None if they do not have an explicit return statement.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-functions-in-python",
  },
  {
    Question: "What are registers inside a CPU responsible for?",
    Answer: "They temporarily hold data the CPU needs fast access to",
    Distractor1: "They help improve the speed of your computer",
    Distractor2:
      "They check and confirm every process that is happening on your computer",
    Distractor3:
      "They are responsible for carrying out all mathematical and logical operations",
    Explanation:
      "Registers are an extremely fast memory location. The data and instructions that are being processed during the fetch-execute cycle a CPU performs are stored there, for quick access by the processor.",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/",
  },
  {
    Question: "In Python, what keyword is used to define a class?",
    Answer: "class",
    Distractor1: "def",
    Distractor2: "blueprint",
    Distractor3: "create",
    Explanation: "The class keyword is used in Python to define a class.",
    Link: "https://www.freecodecamp.org/news/learn-object-oriented-programming-with-python/",
  },
  {
    Question: "In Git, how do you push a local branch to a remote repository?",
    Answer: "git push -u <remote> <branch-name>",
    Distractor1: "git push -u <branch-name> <remote>",
    Distractor2: "git copy url <branch-name> <remote>",
    Distractor3: "git pull url <branch-name> <remote>",
    Explanation:
      "In the command line, you can use git push -u <remote> <branch-name> to push a branch from a local Git repository to a remote repository.",

    Link: "https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/",
  },
  {
    Question: "In HTML, what makes up an element?",
    Answer:
      "The opening tag, any attributes, text, or other content in between, and the closing tag",
    Distractor1: "Just the closing tag",
    Distractor2: "Just the closing tag and text content",
    Distractor3: "Just the opening tag",
    Explanation:
      "The terms elements and tags are used interchangeably. Tags consist of left and right angle brackets ( < and >) and often come in pairs, with an opening and closing one. Elements have an opening tag and a closing tag, attributes that go inside the starting tag and text content (and possibly other elements) in between the opening and closing tag. So, an element refers to the whole thing.",
    Link: "https://www.freecodecamp.org/news/the-html-handbook/#html-basics",
  },
  {
    Question:
      "In Python, what built-in function returns the smallest item in an iterable or the smallest of two or more arguments?",
    Answer: "min()",
    Distractor1: "max()",
    Distractor2: "minimum()",
    Distractor3: "smallest)",
    Explanation:
      "The min() function returns the smallest item in an iterable or the smallest of two or more arguments.",
    Link: "https://www.freecodecamp.org/news/python-function-guide-with-examples/",
  },
  {
    Question:
      "In HTML, what attribute should you add to set a minimum value for a numerical <input> field?",
    Answer: "min",
    Distractor1: "minimum",
    Distractor2: "max",
    Distractor3: "bottom",
    Explanation:
      "The min attribute is used to set a minimum value allowed for user input in a numerical input field.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes",
  },
  {
    Question: "What is a Hard Disk Drive? ",
    Answer:
      "A type of storage device that holds data including the operating system, applications, and files",
    Distractor1: "A device to record sound to a disk",
    Distractor2: "A device for the computer's short term memory",
    Distractor3: "A port used to connect to a computer to other devices",
    Explanation:
      "A type of storage device that holds data including the operating system, applications, and files",
    Link: "https://www.freecodecamp.org/news/hdd-hard-disk-drive-definition/",
  },
  {
    Question: "In Git, how do you set your username for commits you make on all cloned repositories on your computer?",
    Answer: 'git config --global user.name "YOUR_USERNAME"',
    Distractor1: 'git config --global password "YOUR_USERNAME"',
    Distractor2: 'git config &user "YOUR_USERNAME"',
    Distractor3: 'git create --user "YOUR_USERNAME"',
    Explanation:
      'In the command line, you can use git config --global user.name "YOUR_USERNAME"',
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In HTML, what are meta tags?",
    Answer: "defines metadata for the HTML document",
    Distractor1: "defines the number of elements in the HTML document",
    Distractor2: "defines the number of img tags in the HTML document",
    Distractor3: "defines the number of p tags in the HTML document",
    Explanation: "The meta tags define metadata for the HTML document",
    Link: "https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/",
  },
  {
    Question: "In CSS Flexbox, what does align-items do?",
    Answer: "aligns the items along the cross axis",
    Distractor1: "aligns the items to the right of the y axis",
    Distractor2: "aligns the items to the right of the x axis",
    Distractor3: "aligns the items to the right of the z axis",
    Explanation:
      "In CSS Flexbox, align-items aligns the items along the cross axis",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question:
      "In SQL, what statement is used to combine groups and aggregate data?",
    Answer: "GROUP BY",
    Distractor1: "UPDATE",
    Distractor2: "CLASSIFY",
    Distractor3: "CATEGORY",
    Explanation:
      "The GROUP BY statement is used to combine rows and aggregate data.",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/",
  },
  {
    Question: "In HTML, what is the character entity for the Euro sign?",
    Answer: "&euro;",
    Distractor1: "&esign;",
    Distractor2: "&eurosign;",
    Distractor3: "&eu;",
    Explanation:
      "The &euro; character entity is used to display the Euro sign in HTML.",
    Link: "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/",
  },
  {
    Question: "How many versions of the Internet Protocol are there?",
    Answer: "2",
    Distractor1: "4",
    Distractor2: "6",
    Distractor3: "1",
    Explanation:
      "IPv4 is the first, and most widely used, version of the Internet Protocol. IPv6 is the latest version of the Internet Protocol. It's the successor of IPv4 and there will be a slow shift towards it in the future.",
    Link: "https://www.freecodecamp.org/news/ipv4-vs-ipv6-what-is-the-difference-between-ip-addressing-schemes/",
  },
  {
    Question:
      "In JavaScript, what is the name of the method that extracts a portion of an array and returns a new array?",
    Answer: ".slice()",
    Distractor1: ".splice()",
    Distractor2: ".pop()",
    Distractor3: ".sort()",
    Explanation:
      "The .slice() method extracts a portion of an array and returns a new array.",
    Link: "https://www.freecodecamp.org/news/javascript-array-slice-vs-splice-whats-the-difference/",
  },
  {
    Question: "In HTML, what is a colspan attribute in a table?",
    Answer: "Represents the number of columns a cell should span in a table",
    Distractor1: "Represents the number of rows a cell should span in a table",
    Distractor2: "Represents the number of links in a table",
    Distractor3: "Represents the number of images in a table",
    Explanation:
      "The colspan attribute represents the number of columns a cell should span in a table",
    Link: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/",
  },
  {
    Question: "What is a Ping?",
    Answer:
      "The process of sending signals to other devices and waiting for a response",
    Distractor1:
      "A protocol that allows users to send files from one computer to another",
    Distractor2:
      "A way to share a single processor for multiple independent jobs",
    Distractor3: "A portion of memory used to store messages",
    Explanation:
      "A ping is the process of sending signals to other devices and waiting for a response",
    Link: "https://www.freecodecamp.org/news/ping-definition/",
  },
  {
    Question: "In Linux, which command deletes a directory with files inside it?",
    Answer: "rm -rf",
    Distractor1: "rmdir",
    Distractor2: "rm",
    Distractor3: "ls",
    Explanation:
      "To delete folders with files in them, you use the more generic rm command which deletes files . The -rf option is used to recursively and forcefully delete all files contained in the directory.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-rmdir-command",
  },
  {
    Question: "In Git, how do you initialize a new Git repository?",
    Answer: "git init",
    Distractor1: "git create new repo",
    Distractor2: "git config init repo",
    Distractor3: "git new repo",
    Explanation:
      "In the command line, you can use git init to initialize a new Git repository",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question:
      "In HTML, what attribute should you add to set a maximum value for a numerical <input> field?",
    Answer: "max",
    Distractor1: "maximum",
    Distractor2: "min",
    Distractor3: "top",
    Explanation:
      "The max attribute is used to set a maximum value allowed for user input in a numerical input field.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes",
  },
  {
    Question:
      "In Python, what is the name of the exception raised when a name that you are referencing in the code doesn't exist?",
    Answer: "NameError",
    Distractor1: "KeyError",
    Distractor2: "IndexError",
    Distractor3: "TypeError",
    Explanation:
      "A NameError is raised in Python when a name that you are referencing in the code doesn't exist.",
    Link: "https://www.freecodecamp.org/news/exception-handling-python/",
  },
  {
    Question: "In CSS Flexbox, how do you allow items to move to a new line?",
    Answer: "flex-wrap: wrap;",
    Distractor1: "flex: wrap;",
    Distractor2: "flex-wrap: wrap-items;",
    Distractor3: "flex-wrap: item-wrap;",
    Explanation:
      "In CSS Flexbox, flex-wrap: wrap; will tell the computer to move items to a new line if there is not enough space",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question: "In HTML, which tag is used to create an ordered list?",
    Answer: "<ol>",
    Distractor1: "<ul>",
    Distractor2: "<img>",
    Distractor3: "<dl>",
    Explanation: "The <ol> tag is used to create an ordered list in HTML.",
    Link: "https://www.freecodecamp.org/news/html-list-how-to-use-bullet-points-ordered-and-unordered-lists/",
  },
  {
    Question:
      "In HTML, what attribute should you add to the <input> element to create a radio button?",
    Answer: 'type="radio"',
    Distractor1: 'type="checkbox"',
    Distractor2: 'type="check"',
    Distractor3: 'type="button"',
    Explanation:
      'To create a radio button, you must add type="radio" to the <input> tag.',
    Link: "https://devdocs.io/html/element/input/radio",
  },
  {
    Question:
      "In Linux, which command is used to count JUST the number of bytes in a file?",
    Answer: "wc -c",
    Distractor1: "wc -w",
    Distractor2: "wc -l",
    Distractor3: "wc -z",
    Explanation:
      "To count just the number of bytes in a file you use the wc command with the -c option.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command",
  },
  {
    Question: "In HTML, what tag is used to create a table?",
    Answer: "<table>",
    Distractor1: "<t>",
    Distractor2: "<tbl>",
    Distractor3: "<ta>",
    Explanation: "The <table> tag is used to create a table in HTML.",
    Link: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/",
  },
  {
    Question:
      "In Python, which one of these operators is used to raise a number to the power of an exponent? ",
    Answer: "**",
    Distractor1: "*",
    Distractor2: "^",
    Distractor3: "!",
    Explanation:
      "The power operator is ** in Python. We use it to raise the number on the left to the power of the exponent on the right. For example, 5 ** 3 means 5 raised to the power 3. The result would be 125.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
  },
  {
    Question: "In Linux, what does the cd command stand for?",
    Answer: "change directory",
    Distractor1: "create directory",
    Distractor2: "created directory",
    Distractor3: "changed directory",
    Explanation: "cd stands for change directory",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cd-command",
  },
  {
    Question: "In CSS, how do you change the background color?",
    Answer: "background-color: pink;",
    Distractor1: "bg-color: pink;",
    Distractor2: "backgroundColor: pink;",
    Distractor3: "b-color: pink;",
    Explanation:
      "You can use the background property in CSS to change the background color of an element",
    Link: "https://www.freecodecamp.org/news/css-background-color-how-to-change-the-background-color-in-html/",
  },
  {
    Question: "In CSS, what is the default position property?",
    Answer: "position: static;",
    Distractor1: "position: relative;",
    Distractor2: "position: top;",
    Distractor3: "position: absolute;",
    Explanation:
      "The default property in CSS is position: static; which means it follows the order of the HTML",
    Link: "https://www.freecodecamp.org/news/css-positioning-position-absolute-and-relative/",
  },
  {
    Question:
      "In Python, what built-in function returns a number rounded to a given number of digits of precision after the decimal point?",
    Answer: "round()",
    Distractor1: "rounding()",
    Distractor2: "approximate()",
    Distractor3: "decimal()",
    Explanation:
      "The round() function returns a number rounded to a given number of digits of precision after the decimal point.",
    Link: "https://docs.python.org/3/library/functions.html#round",
  },
  {
    Question:
      "In CSS, what is the name of the property used to position items inside the grid container along the y-axis?",
    Answer: "align-items",
    Distractor1: "grid-columns",
    Distractor2: "grid-template-columns",
    Distractor3: "fraction-unit",
    Explanation:
      "The align-items property is used to position items inside the grid container along the y-axis.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question:
      "In CSS, what selector is used to set the style of links when the user moves the mouse over them?",
    Answer: "a:hover",
    Distractor1: "a:visited",
    Distractor2: "a:active",
    Distractor3: "a:link",
    Explanation:
      "With a:hover you can set the style of links when the user mouses over them.",
    Link: "https://www.freecodecamp.org/news/how-to-style-links-in-css/",
  },
  {
    Question:
      "In HTML, what is the name of the element used to show that content was deleted from the document?",
    Answer: "<del>",
    Distractor1: "<figure>",
    Distractor2: "<embed>",
    Distractor3: "<em>",
    Explanation:
      "The <del> tag is used to show that content was deleted from the document.",
    Link: "https://devdocs.io/html/element/del",
  },
  {
    Question: "In HTML, which tag is used to represent the footer for a table?",
    Answer: "<tfoot>",
    Distractor1: "<tfooter>",
    Distractor2: "<tfooting>",
    Distractor3: "<tfoots>",
    Explanation:
      "The <tfoot> tag is used to represent the footer content for an HTML table",
    Link: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/",
  },
  {
    Question: "Which one is NOT a type of data model used in NoSQL?",
    Answer: "Infix notation",
    Distractor1: "key-value",
    Distractor2: "document",
    Distractor3: "wide-column or tabular",
    Explanation:
      "NoSQL supports a variety of data models including  'key-value', 'document', 'wide-column or tabular' formats",
    Link: "https://www.freecodecamp.org/news/learn-nosql-in-3-hours/",
  },
  {
    Question:
      "The process of finding and fixing bugs in a computer program is known as...",
    Answer: "Debugging",
    Distractor1: "Encapsulation",
    Distractor2: "Abstraction",
    Distractor3: "Looping",
    Explanation:
      "Debugging is the process of finding and fixing bugs in a computer program. ",
    Link: "https://en.wikipedia.org/wiki/Debugging",
  },
  {
    Question: "How many bytes make up a Terabyte?",
    Answer: "1 trillion bytes",
    Distractor1: "1 billion bytes",
    Distractor2: "1 thousand bytes",
    Distractor3: "1 million bytes",
    Explanation: "A Terabyte is composed of 1 trillion bytes",
    Link: "https://www.freecodecamp.org/news/terabyte-definition/",
  },
  {
    Question: "In HTML, which one is NOT an attribute for the <select> tag?",
    Answer: "src",
    Distractor1: "name",
    Distractor2: "multiple",
    Distractor3: "required",
    Explanation:
      "The <select> tag can have the following attributes: name, multiple, required, size, disabled and autofocus.",
    Link: "https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/",
  },
  {
    Question:
      "In HTML, what is the name of the method used to select elements in an HTML document by referencing the id name?",
    Answer: ".getElementById()",
    Distractor1: ".getElementByClass()",
    Distractor2: ".getId()",
    Distractor3: ".getElementByTagName()",
    Explanation:
      "The .getElementById() method is used to select elements in the HTML document by referencing the id name.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
  },
  {
    Question:
      "In HTML, which tag represents a thematic break (horizontal line) element?",
    Answer: "<hr>",
    Distractor1: "<br>",
    Distractor2: "<line>",
    Distractor3: "<hor>",
    Explanation:
      "The <hr> tag is used to represent a thematic break (horizontal rule) element.",
    Link: "https://devdocs.io/html/element/hr",
  },
  {
    Question: "In HTML, what is a span tag?",
    Answer: "A generic inline container for grouping content",
    Distractor1: "A container used to only group footer links",
    Distractor2: "A container used to only header content",
    Distractor3: "A container used to only group navigation links",
    Explanation:
      "A span tag is a generic inline container for grouping content in the HTML page",
    Link: "https://www.freecodecamp.org/news/span-vs-div-html-tags-what-is-the-difference/",
  },
  {
    Question:
      "In CSS, what is the name of the CSS grid property used to set the number and height of the rows?",
    Answer: "grid-template-rows",
    Distractor1: "grid-template-columns",
    Distractor2: "grid-rows",
    Distractor3: "grid-unit-rows",
    Explanation:
      "The grid-template-rows property is used to set the number and height of the rows.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "What is a server?",
    Answer: "A software or hardware device that sends data over a network",
    Distractor1: "A Python library",
    Distractor2: "A type of compiler",
    Distractor3: "An IDE",
    Explanation:
      "A server is a software or hardware device that sends data over a network",
    Link: "https://www.freecodecamp.org/news/server-definition/",
  },
  {
    Question:
      "In Linux, which command is used to remove all previous commands and output from the terminal?",
    Answer: "clear",
    Distractor1: "exit",
    Distractor2: "deleting",
    Distractor3: "rm",
    Explanation:
      "The clear command removes all previous commands that were run in the current terminal. The screen will clear and you will just see the prompt at the top.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question: "In HTML, what is the header element?",
    Answer:
      "A tag used to group introductory content including navigation links",
    Distractor1: "A tag used to group comment tags",
    Distractor2: "A tag used to group block quotes",
    Distractor3: "A tag used to group figure elements",
    Explanation:
      "The header element is a tag used to group introductory content including navigation links",
    Link: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/",
  },
  {
    Question: "The values that an operator operates on are known as...",
    Answer: "Operands",
    Distractor1: "Operators",
    Distractor2: "Operative",
    Distractor3: "Operation",
    Explanation:
      "The values that an operator operates on are known as operands.",
    Link: "https://en.wikipedia.org/wiki/Operand",
  },
  {
    Question:
      "Which of the following is NOT considered a piece of computer hardware?",
    Answer: "The Operating System  ",
    Distractor1: "The CPU (Central Processing Unit)",
    Distractor2: "The keyboard",
    Distractor3: "The mouse",
    Explanation:
      "Hardware are the physical components you can touch, and they are located on both the outside and the inside of a computer.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/",
  },
  {
    Question:
      "In CSS, what does the no-repeat value do in the background-repeat property?",
    Answer: "Sets no repetition for the background image",
    Distractor1: "Repeats the image along the z-axis",
    Distractor2: "Repeats the image along the y-axis",
    Distractor3: "Repeats the image along the x-axis",
    Explanation:
      "The no-repeat value of the background-repeat property sets no repetition for the background image.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question:
      "In Python, what function can you use to transform a number represented as a string into an integer?",
    Answer: "int()",
    Distractor1: "float()",
    Distractor2: "complex()",
    Distractor3: "bin()",
    Explanation:
      "The int() function takes a string as an argument and returns an integer.",
    Link: "https://www.freecodecamp.org/news/how-to-convert-strings-into-integers-in-python/",
  },
  {
    Question:
      "In CSS, which one of these options is NOT a value used for the justify-content property?",
    Answer: "repeat",
    Distractor1: "space-around",
    Distractor2: "space-between",
    Distractor3: "space-evenly",
    Explanation:
      "The justify-content property can accept seven values including space-around, space-between, start, and end.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "What is P2P?",
    Answer: "A network where two devices communicate directly.",
    Distractor1: "A way to request data from a server.",
    Distractor2: "A special type of file system.",
    Distractor3: "A special programming library.",
    Explanation:
      'Peer to Peer or "P2P" is a network where two devices communicate directly.',
    Link: "https://www.freecodecamp.org/news/p2p-definition/",
  },
  {
    Question:
      "In SQL, what is the command used to change the structure of a table?",
    Answer: "ALTER TABLE",
    Distractor1: "CHANGE TABLE",
    Distractor2: "UPDATE TABLE",
    Distractor3: "MODIFY TABLE",
    Explanation:
      "The ALTER TABLE command is used to change the structure of a table in SQL.",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/",
  },
  {
    Question: "In Git, how do you add a specific file to be committed?",
    Answer: "git add filename",
    Distractor1: "git add < filename",
    Distractor2: "git add *filename",
    Distractor3: "git add %filename",
    Explanation:
      "In the command line, you can use git add filename to add a specific file.",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In Python, what is the “greater than or equal to” operator?",
    Answer: ">=",
    Distractor1: ">",
    Distractor2: "<",
    Distractor3: "<=",
    Explanation:
      "The “greater than or equal to” operator is >= in Python. It returns True if the value on the left is greater than or equal to the value on the right. We can also use it to compare strings in alphabetical order.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
  },
  {
    Question: "What does URL stand for?",
    Answer: "Universal Resource Locator",
    Distractor1: "Unified Resource Locator",
    Distractor2: "Universal Redirect Locator",
    Distractor3: "Universal Resource Label",
    Explanation:
      "URL stands for Universal Resource Locator and it serves as the location of an online resource",
    Link: "https://www.freecodecamp.org/news/url-definition/",
  },
  {
    Question: "In CSS, what does the animation-iteration-count property do?",
    Answer: "It sets how many times an animation should run.",
    Distractor1:
      "It sets a name used to describe the animation applied to the element.",
    Distractor2: "It determines how long an animation should last in seconds.",
    Distractor3: "It sets a delay for the animation to start.",
    Explanation:
      "The animation-iteration-count property sets how many times the animation should run.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },
  {
    Question: "In Python, the first index of a sequence is...",
    Answer: "0",
    Distractor1: "1",
    Distractor2: "-1",
    Distractor3: "2",
    Explanation: "The first index of a sequence in Python is 0.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-data-types-and-built-in-data-structures-in-python",
  },
  {
    Question:
      "freeCodeCamp is a 501(c)(3) public charity (nonprofit) with a mission to:",
    Answer: "To help people learn to code for free.",
    Distractor1: "Help companies recruit developers",
    Distractor2: "Advocate for open source software",
    Distractor3: "Make cat photo apps",
    Explanation:
      'Even though freeCodeCamp does create open source projects, and does help developers get jobs, its mission is "to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public."',
    Link: "https://www.freecodecamp.org/news/about/",
  },
  {
    Question: "In Python, what keyword is used to define a function?",
    Answer: "def",
    Distractor1: "class",
    Distractor2: "if",
    Distractor3: "return",
    Explanation: "The def keyword is used to define a function in Python.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-functions-in-python",
  },
  {
    Question: "In HTML, what is the purpose of the rel attribute in the <link> tag?",
    Answer:
      "It shows the relationship between the HTML file and the linked document.",
    Distractor1:
      "It defines the relationship between an <img> tag and <p> tag.",
    Distractor2:
      "It defines the relationship between a <table> tag and <td> tag.",
    Distractor3:
      "It defines the relationship between an <ul> tag and <li> tag.",
    Explanation:
      "The rel attribute is used to show the relationship between the linked document and the HTML file.",
    Link: "https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/",
  },
  {
    Question: "In HTML, what are <script> tags?",
    Answer: "they're used for client side JavaScript code",
    Distractor1: "used for server side JavaScript code",
    Distractor2: "used to link SQL databases",
    Distractor3: "used to link noSQL databases",
    Explanation: "The script tag is used for client side JavaScript code.",
    Link: "https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/",
  },
  {
    Question:
      "In CSS, what is the name of the property used to position one grid item in a container along the y-axis?",
    Answer: "align-self",
    Distractor1: "grid-columns",
    Distractor2: "space-around",
    Distractor3: "grid-template-columns",
    Explanation:
      "The align-self property is used to position one grid item in a container along the y-axis",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In Python, what do you use to write comments?",
    Answer: "#",
    Distractor1: "!",
    Distractor2: "//",
    Distractor3: "/* */",
    Explanation:
      "Everything after the # symbol is considered a comment in Python and therefore is not executed.",
    Link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#comment-",
  },
  {
    Question:
      "In Python, non-empty sequences, non-empty collections, and numerical values different from 0 are...",
    Answer: "Truthy",
    Distractor1: "Falsy",
    Distractor2: "TRUENESS",
    Distractor3: "FALSENESS",
    Explanation:
      "Non-empty sequences, collections, and numerical values different from 0 are truthy values.",
    Link: "https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/",
  },
  {
    Question: "In HTML, what tag would you use to create a level 1 section heading? ",
    Answer: "<h1>",
    Distractor1: "<t1>",
    Distractor2: "<1h>",
    Distractor3: "<1H>",
    Explanation:
      "You can use the <h1> tag to create a level 1 section heading in HTML.",
    Link: "https://devdocs.io/html/element/heading_elements",
  },
  {
    Question: "What is SQL?",
    Answer: "A language used for relational databases",
    Distractor1:
      "A language that translates code from one languages to another",
    Distractor2: "A language that converts data into machine code",
    Distractor3: "A language used for non relational databases",
    Explanation:
      "SQL is used to store, manipulate, and retrieve data in relational database management systems. ",
    Link: "https://www.freecodecamp.org/news/learn-sql-in-10-minutes/",
  },
  {
    Question: "What is RGB?",
    Answer: "A color model",
    Distractor1: "An Internet Protocol",
    Distractor2: "HTML syntax",
    Distractor3: "A secret password",
    Explanation:
      "RGB is an acronym that stands for Red Green Blue. It expresses colors in terms of the amount of red, green, and blue they are made up of and uses a human counting system with integers ranging from 0-255 or a percentage ranging from (0% - 100%).",
    Link: "https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/",
  },
  {
    Question: "What is an algorithm?",
    Answer:
      "A sequence of detailed step-by-step instructions to complete a task.",
    Distractor1: "A programming paradigm.",
    Distractor2: "A Python module.",
    Distractor3: "A web development framework.",
    Explanation:
      "An algorithm is a sequence of detailed step-by-step instructions to complete a task.",
    Link: "https://www.freecodecamp.org/news/algorithms-explained-what-they-are-and-common-sorting-algorithms/",
  },
  {
    Question: "In HTML, Which tag represents a line break element?",
    Answer: "<br>",
    Distractor1: "<hr>",
    Distractor2: "<break>",
    Distractor3: "<line>",
    Explanation: "The <br> tag is used to represent a line break element.",
    Link: "https://www.freecodecamp.org/news/html-line-break-how-to-break-a-line-with-the-html-br-tag/",
  },
  {
    Question: "In CSS, what does the animation-play-state property do?",
    Answer: "It is used to pause the animation if it is set to paused.",
    Distractor1: "It determines how long an animation should last in seconds.",
    Distractor2: "It is used to style the element after the animation ends.",
    Distractor3: "It sets the direction for the animation.",
    Explanation:
      "The animation-play-state property is used to pause the animation if set to paused.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },
  {
    Question: "How many bits make up a byte?",
    Answer: "8 bits",
    Distractor1: "16 bits",
    Distractor2: "32 bits",
    Distractor3: "12 bits",
    Explanation: "There are 8 bits in a byte",
    Link: "https://www.freecodecamp.org/news/byte-definition/",
  },
  {
    Question:
      "Fonts that are generally available across most browsers and operating systems are known as...",
    Answer: "Web safe fonts",
    Distractor1: "General fonts",
    Distractor2: "Universal fonts",
    Distractor3: "Web Fonts",
    Explanation:
      "Web safe fonts are the fonts that are generally available across most browsers and operating systems.",
    Link: "https://www.freecodecamp.org/news/web-safe-fonts/",
  },
  {
    Question: "In CSS, how do you add a smooth scroll to an HTML element?",
    Answer: "scroll-behavior: smooth;",
    Distractor1: "scroll-behavior: smooth-scroll;",
    Distractor2: "scroll: smooth;",
    Distractor3: "behavior: smooth;",
    Explanation:
      "You can use scroll-behavior: smooth; to add a smooth scroll to the html element",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/",
  },
  {
    Question: "In HTML, which tag is used to represent the main body for a table?",
    Answer: "<tbody>",
    Distractor1: "<tmain>",
    Distractor2: "<content>",
    Distractor3: "<td>",
    Explanation:
      "The <tbody> tag is used to represent the main content for an HTML table",
    Link: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/",
  },
  {
    Question:
      "In HTML, what attribute can you add to a <video> tag to add the browser's default video controls to the embedded video?",
    Answer: "controls",
    Distractor1: "control",
    Distractor2: "c",
    Distractor3: "basiccontrols",
    Explanation:
      "The controls attribute adds the browser's basic video controls to the embedded video.",
    Link: "https://www.freecodecamp.org/news/html5-video/",
  },
  {
    Question:
      "In Python, what method is used to remove a key-value pair from a dictionary and return its value?",
    Answer: ".pop()",
    Distractor1: ".push()",
    Distractor2: ".append()",
    Distractor3: ".insert()",
    Explanation:
      "The .pop() method is used to remove a key-value pair from the dictionary and return the value.",
    Link: "https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/",
  },
  {
    Question: "In HTML, what is a rowspan attribute in a table?",
    Answer: "Represents the number of rows a cell should span in a table",
    Distractor1:
      "Represents the number of columns a cell should span in a table",
    Distractor2: "Represents the number of headings in a table",
    Distractor3: "Represents the number of code elements in a table",
    Explanation:
      "The rowspan attribute represents the number of rows a cell should span in a table",
    Link: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/",
  },
  {
    Question: "What does GIF stand for?",
    Answer: "Graphics Interchange Format",
    Distractor1: "Graphical International Format",
    Distractor2: "Graphical Interconnected Functions",
    Distractor3: "General Interchange Format",
    Explanation: "GIF stands for Graphics Interchange Format.",
    Link: "https://www.freecodecamp.org/news/how-to-make-a-gif-create-animated-gifs-without-downloading-software/#:~:text=A%20GIF%20(Graphics%20Interchange%20Format,with%20your%20friends%20and%20family.",
  },
  {
    Question:
      "What is the name of freeCodeCamp's popular GitHub repository that teaches you how to contribute to open source?",
    Answer: "How to Contribute to Open Source",
    Distractor1: "GitGoing",
    Distractor2: "Project Octocat",
    Distractor3: "Open Sauce",
    Explanation:
      "One of the best ways to get real-world experience working with large legacy codebases is to contribute to open source. But this is an ambiguous process. So the freeCodeCamp community created this repository to help new developers get started.",
    Link: "https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects-beginners-guide/",
  },
  {
    Question: "What is an operating system?",
    Answer: "Manages the hardware and software components of a computer",
    Distractor1: "A program that translates code from one languages to another",
    Distractor2: "A system that converts data into machine code",
    Distractor3: "A base 2 numerical system made up of 0's and 1's",
    Explanation:
      "An operating system manages the hardware and software components of a computer.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/",
  },
  {
    Question:
      "In Linux, which flag (or option) is used with the ln command to create a soft link?",
    Answer: "-s",
    Distractor1: "-l",
    Distractor2: "-a",
    Distractor3: "-la",
    Explanation:
      "You create soft links using the -s option of ln. For example, ln -s <original> <link>",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-ln-command",
  },
  {
    Question: "In JavaScript, which one of these operators is the equality operator?",
    Answer: "==",
    Distractor1: "?",
    Distractor2: "!=",
    Distractor3: "!==",
    Explanation:
      "The == operator returns true if two values are equal and false if they are not equal. It converts the values to a common type before doing the comparison.",
    Link: "https://www.freecodecamp.org/news/javascript-triple-equals-sign-vs-double-equals-sign-comparison-operators-explained-with-examples/",
  },
  {
    Question: "In Linux, which command calculates the size of a directory?",
    Answer: "du",
    Distractor1: "wc",
    Distractor2: "wc -c",
    Distractor3: "man",
    Explanation:
      "The du command will calculate the size of a directory as a whole.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question:
      "In CSS, what is the name of the function used to set the width of all columns in CSS grid?",
    Answer: "repeat()",
    Distractor1: "set-width()",
    Distractor2: "width-all()",
    Distractor3: "width-container()",
    Explanation:
      "The repeat() function is used to set the width of all of the columns in the grid container.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In Python, strings are...",
    Answer: "Immutable",
    Distractor1: "Mutable",
    Distractor2: "Maintainable",
    Distractor3: "Unstoppable",
    Explanation:
      "Strings are immutable, so we can’t update or remove their characters after they have been defined in the program. ",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-data-types-and-built-in-data-structures-in-python",
  },
  {
    Question: "Which protocol secures communication between computer networks?",
    Answer: "HTTPS ",
    Distractor1: "HTTP",
    Distractor2: "FTP",
    Distractor3: "SMTP",
    Explanation:
      "HTTPS is a more secure and confidential version of HTTP. It's the safest way to transfer data between a browser and a server.",
    Link: "https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/",
  },
  {
    Question:
      "The freeCodeCamp learning platform is written in which programming language?",
    Answer: "JavaScript and Node.js",
    Distractor1: "Python and Django",
    Distractor2: "PHP and Laravel",
    Distractor3: "Java and Spring",
    Explanation:
      "freeCodeCamp teaches many different programming languages and frameworks, and could be written in any of these. This said, in 2014 when Quincy Larson sat down to start building the first version of freeCodeCamp, he chose JavaScript and Node.js. He did this because it had a huge package ecosystem and was relatively easy to program in. Node.js is also very fast, and works well at scale. Large websites like Netflix and LinkedIn use it as a primary language.",
    Link: "https://www.freecodecamp.org/news/the-definitive-node-js-handbook-6912378afc6e/",
  },
  {
    Question: "In HTML, what attribute is used to make an <input> field required?",
    Answer: "required",
    Distractor1: "mandatory",
    Distractor2: "must",
    Distractor3: "fixed",
    Explanation:
      "The required attribute is used to make an <input> field required to submit a form.",
    Link: "https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/",
  },
  {
    Question:
      "In CSS, what is the name of the property used to repeat a background image?",
    Answer: "background-repeat",
    Distractor1: "background-position-x",
    Distractor2: "background-position-y",
    Distractor3: "background-origin",
    Explanation:
      "The background-repeat property is used to repeat the background image.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question: "In HTML, what tag is used to represent an abbreviation or acronym?",
    Answer: "<abbr>",
    Distractor1: "<abr>",
    Distractor2: "<abbreviation>",
    Distractor3: "<acr>",
    Explanation:
      "The <abbr> tag is used to represent abbreviations or acronyms in HTML.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr",
  },
  {
    Question:
      "In HTML, what is the character entity of the greater than symbol?",
    Answer: "&gt;",
    Distractor1: "&greaterthan;",
    Distractor2: "&greater;",
    Distractor3: "&gthan;",
    Explanation:
      "You can use the &gt; entity to display a greater than symbol in HTML.",
    Link: "https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/",
  },
  {
    Question: "In HTML, what is the character entity of the less than symbol?",
    Answer: "&lt;",
    Distractor1: "&lessthan;",
    Distractor2: "&less;",
    Distractor3: "&lthan;",
    Explanation: "You can use the &lt; to display a less than symbol in HTML.",
    Link: "https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/",
  },
  {
    Question: "In Python, what is the floor division operator?",
    Answer: "//",
    Distractor1: "/",
    Distractor2: "*",
    Distractor3: "**",
    Explanation:
      "The floor division operator in Python is //. This operator performs a mathematical division that rounds down to the nearest integer.",
    Link: "https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/",
  },
  {
    Question: "What forum tool does freeCodeCamp use for its forum?",
    Answer: "Discourse",
    Distractor1: "NodeBB",
    Distractor2: "phpBB",
    Distractor3: "vBulletin",
    Explanation:
      "The freeCodeCamp community was an early adopter of Discourse, a powerful forum tool designed by Stack Overflow founder Jeff Atwood. Quincy Larson first met Jeff at an event in San Francisco in 2014, and the two talked about online communities. Jeff convinced Quincy to create a forum so that learners could easily help one another. One benefit of a forum is that other people can then discover past conversations, and use them to help get unstuck. If you ask a question on the freeCodeCamp forum, you will generally get an answer in just a few hours.",
    Link: "https://www.freecodecamp.org/news/the-future-of-the-freecodecamp-forum/",
  },
  {
    Question: "In HTML, how is the title attribute used in the abbr tag?",
    Answer: "provides descriptive text for the abbr tag",
    Distractor1: "provides links for the abbr tag",
    Distractor2: "bolds the abbr tag",
    Distractor3: "italicizes the abbr tag",
    Explanation:
      "The title attribute provides descriptive text for the abbr tag",
    Link: "https://devdocs.io/html/element/abbr",
  },
  {
    Question: "In Linux, which command opens the VIM command-line editor?",
    Answer: "vi",
    Distractor1: "open",
    Distractor2: "open vim",
    Distractor3: "open vi",
    Explanation: "You start up VIM  by running vi in the command line.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-vim-editor-command",
  },
  {
    Question:
      "In CSS, what selector would you use to select all elements with the class of blue-text?",
    Answer: ".blue-text",
    Distractor1: "#blue-text",
    Distractor2: "a[blue-text]",
    Distractor3: "blue-text",
    Explanation:
      "In CSS, you can select all the elements with a given class with a dot before its name.",
    Link: "https://www.freecodecamp.org/news/use-css-selectors-to-style-webpage/",
  },
  {
    Question: "In CSS, what is the media attribute in the link tag?",
    Answer:
      "Specifies the type of media that should be used when importing the linked content",
    Distractor1:
      "tells the computer to import the linked content for phones only",
    Distractor2:
      "tells the computer to import the linked content for laptops only",
    Distractor3:
      "tells the computer to import the linked content for tablets only",
    Explanation:
      "The media attribute specifies the type of media that should be used when importing the linked content",
    Link: "https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/",
  },
  {
    Question: "In HTML, which tag supports mailto links?",
    Answer: "anchor tag",
    Distractor1: "paragraph tag",
    Distractor2: "script tag",
    Distractor3: "img tag",
    Explanation:
      "You can create a mailto link in the href value for an anchor tag",
    Link: "https://www.freecodecamp.org/news/mailto-link-how-to-make-an-html-email-link-example-code/",
  },
  {
    Question: "In HTML, how do you add two non-breaking spaces?",
    Answer: "&ensp;",
    Distractor1: "&twospaces;",
    Distractor2: "&e-n-s-p;",
    Distractor3: "&enspaces;",
    Explanation:
      "You can use the &ensp; entity to display two non-breaking spaces in HTML.",
    Link: "https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/",
  },
  {
    Question:
      "In Python, what is the name of the exception raised when you try to divide by zero?",
    Answer: "ZeroDivisionError",
    Distractor1: "TypeError",
    Distractor2: "NameError",
    Distractor3: "KeyError",
    Explanation:
      "A ZeroDivisionError is raised in Python when you try to divide by zero.",
    Link: "https://www.freecodecamp.org/news/exception-handling-python/",
  },
  {
    Question:
      "In HTML, what tag is used to represent that a section quotes from another source?",
    Answer: "<blockquote>",
    Distractor1: "<quote>",
    Distractor2: "<q>",
    Distractor3: "<section>",
    Explanation:
      "The <blockquote> tag is used to represent that a section quotes from another source.",
    Link: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/",
  },
  {
    Question: "In HTML, what is the title tag?",
    Answer: "defines the title for the HTML document",
    Distractor1: "defines the subtitle for the HTML document",
    Distractor2: "displays the headings for the HTML document",
    Distractor3: "displays the paragraph tags for the HTML document",
    Explanation: "The title tag defines the title for the HTML document",
    Link: "https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/",
  },
  {
    Question: "What is a virtual machine?",
    Answer: "A computer inside another computer",
    Distractor1: "a popular JavaScript library",
    Distractor2: "a Linux distribution",
    Distractor3: "another name for a compiler",
    Explanation:
      "A virtual machine is a program you run on a computer that acts like it is a separate computer. It is basically a way to create a computer within a computer.",
    Link: "https://www.freecodecamp.org/news/what-is-a-virtual-machine-and-how-to-setup-a-vm-on-windows-linux-and-mac/",
  },
  {
    Question: "In HTML, what is the time tag?",
    Answer: "a tag used to represent the time and/or date",
    Distractor1: "used to convert minutes to seconds",
    Distractor2: "used to convert seconds to milliseconds",
    Distractor3: "used to convert hours to minutes",
    Explanation: "The time tag is used to represent the time and/or date",
    Link: "https://www.freecodecamp.org/news/semantic-html5-elements/",
  },
  {
    Question: "What does SQL stand for?",
    Answer: "Structured Query Language",
    Distractor1: "Standardized Question Language",
    Distractor2: "String Query Language",
    Distractor3: "Single Query Language",
    Explanation:
      "SQL stands for Structured Query Language and it is used with relational databases.",
    Link: "https://www.freecodecamp.org/news/learn-sql-in-10-minutes/",
  },
  {
    Question: "In HTML, what is the syntax for creating a mailto link?",
    Answer: '<a href="mailto:johndoe@fakeemail.com">Example mailto link</a>',
    Distractor1:
      '<a name="mailto:johndoe@fakeemail.com">Example mailto link</a>',
    Distractor2:
      '<a src="mailto:johndoe@fakeemail.com">Example mailto link</a>',
    Distractor3:
      '<a link="mailto:johndoe@fakeemail.com">Example mailto link</a>',
    Explanation:
      'This is the correct syntax for a mailto link: <a href="mailto:johndoe@fakeemail.com">Example mailto link</a>',
    Link: "https://www.freecodecamp.org/news/mailto-link-how-to-make-an-html-email-link-example-code/",
  },
  {
    Question:
      "In Python, what logical operator returns True if the operand is False?",
    Answer: "not",
    Distractor1: "and",
    Distractor2: "or",
    Distractor3: "array",
    Explanation:
      "The not operator returns True if the operand is False and False if the operand is True.",
    Link: "https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/",
  },
  {
    Question: "What does Bash stand for?",
    Answer: "Bourne-again shell",
    Distractor1: "Born-again shell",
    Distractor2: "Basic shell",
    Distractor3: "Bourne-another shell",
    Explanation:
      "All shells originate from the Bourne Shell and the name Bourne is used because its creator was Steve Bourne. Bash means Bourne-again shell. ",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cd-command",
  },
  {
    Question:
      "In JavaScript, what string method returns the character at the specified index?",
    Answer: ".charAt()",
    Distractor1: ".getChar()",
    Distractor2: ".char()",
    Distractor3: ".character()",
    Explanation:
      "The .charAt() method returns the character at the specified index in JavaScript.",
    Link: "https://devdocs.io/javascript/global_objects/string/charat",
  },
  {
    Question: "In Linux, which command is used to count JUST the words in a file?",
    Answer: "wc -w",
    Distractor1: "wc -l",
    Distractor2: "wc -c",
    Distractor3: "wc  -5",
    Explanation:
      "To count just the words inside a file you use the wc command with the -w option.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command",
  },
  {
    Question: "Who created the Python programming language?",
    Answer: "Guido van Rossum",
    Distractor1: "Ada Lovelace",
    Distractor2: "Alan Turing",
    Distractor3: "Tim Berners-Lee",
    Explanation: "Guido van Rossum created the Python programming language.",
    Link: "https://en.wikipedia.org/wiki/Python_(programming_language)",
  },
  {
    Question: "In HTML, What tag is used to add an external JavaScript file?",
    Answer: "<script>",
    Distractor1: "<link>",
    Distractor2: "<a>",
    Distractor3: "<js>",
    Explanation:
      "The <script> tag is used to add a JavaScript file to an HTML file.",
    Link: "https://www.freecodecamp.org/news/link-javascript-to-html-with-the-src/",
  },
  {
    Question: "In Linux, which command is used for creating links between files?",
    Answer: "ln",
    Distractor1: "ls",
    Distractor2: "link",
    Distractor3: "cat",
    Explanation:
      "The ln command is used for creating links. A link is like a pointer to another file, or a file that points to another file.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-ln-command",
  },
  {
    Question: "When was the World Wide Web invented?",
    Answer: "1989",
    Distractor1: "1990",
    Distractor2: "1995",
    Distractor3: "2005",
    Explanation: "Tim Berners-Lee invented the World Wide Web in 1989.",
    Link: "https://en.wikipedia.org/wiki/World_Wide_Web",
  },
  {
    Question: "What is a password?",
    Answer: "A secret set of characters",
    Distractor1: "A way to request data from a server",
    Distractor2: "A special type of computer memory",
    Distractor3: "A type of array",
    Explanation:
      "A password is a secret set of characters used to login in to applications",
    Link: "https://www.freecodecamp.org/news/password-definition/",
  },
  {
    Question:
      "A special symbol used to perform arithmetic or logical computations is known as...",
    Answer: "Operator",
    Distractor1: "Operand",
    Distractor2: "Operation",
    Distractor3: "Operative",
    Explanation:
      "A special symbol used to perform arithmetic or logical computations is known as operator.",
    Link: "https://en.wikipedia.org/wiki/Operator_(computer_programming)",
  },
  {
    Question: "What does DOM stand for?",
    Answer: "Document Object Model",
    Distractor1: "Direct Object Model",
    Distractor2: "Document Objective Model",
    Distractor3: "Documentary Object Mobile",
    Explanation: "DOM stands for Document Object Model.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/#:~:text=DOM%20stands%20for%20Document%20Object,remove%20elements%20from%20the%20document.",
  },
  {
    Question:
      "In HTML, what is the name of the element that specifies the base URL for all relative URLs in a document?",
    Answer: "<base>",
    Distractor1: "<bdi>",
    Distractor2: "<a>",
    Distractor3: "<p>",
    Explanation:
      "The base tag specifies the base URL for all relative URLs in the document",
    Link: "https://devdocs.io/html/element/base",
  },
  {
    Question: "In HTML, what does the multiple attribute do in the select tag?",
    Answer: "allows the user to choose multiple options in the select tag",
    Distractor1: "a way to add multiple select tags",
    Distractor2: "a way to add multiple option tags",
    Distractor3: "a way to add multiple link tags",
    Explanation:
      "The multiple attribute allows the user to choose multiple options in the select tag.",
    Link: "https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/",
  },
  {
    Question:
      "In CSS, what is the name of the property that clips the background image to inside the container?",
    Answer: "background-clip",
    Distractor1: "background-color",
    Distractor2: "background-position",
    Distractor3: "background-size",
    Explanation:
      "The background-clip property is used to clip the background image to inside the container.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question:
      "Which part of the CPU is responsible for carrying out mathematical operations?",
    Answer: "The Arithmetic Logic Unit",
    Distractor1: "The Control Unit",
    Distractor2: "Registers",
    Distractor3: "Cache Memory",
    Explanation:
      "The ALU (short for Arithmetic Logic Unit), is a digital circuit that performs arithmetic operations such as addition, subtraction, multiplication, and division.",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/",
  },
  {
    Question: "What is pair programming?",
    Answer: "Two people coding together on one computer",
    Distractor1: "One person coding on two computers at the same time",
    Distractor2:
      "Programming on a non-Apple computer (also known as pear programming)",
    Distractor3: "Programming where you use each data structure twice",
    Explanation:
      'When Pair Programming, one developer is the "driver" with their hands on the keyboard. The other is the "navigator" helping talk through the problem and decide what to do. They periodically switch roles. This is an efficient and commonly used Agile Software Development methodology.',
    Link: "https://www.freecodecamp.org/news/want-to-be-a-developer-you-should-probably-be-pair-programming-2c6ec12c4866/",
  },
  {
    Question:
      "In CSS Flexbox, how do you set the flex container to reverse the items in a row?",
    Answer: "flex-direction: row-reverse;",
    Distractor1: "flex-direction: reverse-row;",
    Distractor2: "flex-row: row-reverse;",
    Distractor3: "flex-direction: set-row-reverse;",
    Explanation:
      "In CSS Flexbox, you can apply flex-direction: row-reverse; to the container whose items you want to display in a row, with their order reversed.",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question: "What does LCD stand for?",
    Answer: "Liquid Crystal Display",
    Distractor1: "Label Crystal Display",
    Distractor2: "Liquid Cache Display",
    Distractor3: "Liquid Crystal Dictionary",
    Explanation:
      "Liquid Crystal Display is a type of display that uses liquid crystals to display images.",
    Link: "https://www.freecodecamp.org/news/lcd-definition/",
  },
  {
    Question: "In HTML, what is the character entity for the copyright symbol?",
    Answer: "&copy;",
    Distractor1: "&copyright;",
    Distractor2: "&cright;",
    Distractor3: "&copyr;",
    Explanation:
      "The &copy; character entity is used to display the copyright symbol in HTML.",
    Link: "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/",
  },
  {
    Question:
      "In CSS Flexbox, how do you set the flex container to reverse the items in a column?",
    Answer: "flex-direction: column-reverse;",
    Distractor1: "flex-direction: reverse-c;",
    Distractor2: "flex-direction: column-r;",
    Distractor3: "flex-direction: column-rev;",
    Explanation:
      "In CSS Flexbox, you can apply flex-direction: column-reverse; to the container whose items you want to display in a column, with their order reversed.",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question: "What is Git?",
    Answer: "A popular type of version control system ",
    Distractor1: "A sorting algorithm",
    Distractor2: "A data type",
    Distractor3: "A non-relational database",
    Explanation:
      "Git is an open source version control system that tracks changes to your files. ",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In CSS, what does list-style-type: circle; do?",
    Answer: "Applies circles to all of the list items in an unordered list.",
    Distractor1: "Applies discs to all of the list items in an unordered list.",
    Distractor2:
      "Applies decimals to all of the list items in an unordered list.",
    Distractor3:
      "Applies squares to all of the list items in an unordered list.",
    Explanation:
      "list-style-type: circle; will apply circles to all of the list items of an unordered list.",
    Link: "https://www.freecodecamp.org/news/html-bullet-points-how-to-create-an-unordered-list-with-the-ul-tag-example/",
  },
  {
    Question:
      "In Git, how do you create a connection between a local repository and a remote one?",
    Answer: "git remote add origin git-url",
    Distractor1: "git add remote and local",
    Distractor2: "git remote local",
    Distractor3: "git local remote",
    Explanation:
      "In the command line, you can use git remote add origin git-url to connect the local repository to the remote one.",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In Git, how can you create a new branch and switch to it?",
    Answer: "git checkout -b branch-name",
    Distractor1: "git switch branch-name",
    Distractor2: "git switch to branch-name",
    Distractor3: "git change branch-name",
    Explanation:
      "In the command line, you can use git checkout -b branch-name to switch to a different branch",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question:
      "In CSS, which one of these values is NOT used for the background-position property?",
    Answer: "side-left",
    Distractor1: "top",
    Distractor2: "bottom",
    Distractor3: "right",
    Explanation:
      "The background-position property can take in many values including of top, right, left and bottom.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question: "Which of the following is NOT a Unix shell?",
    Answer: "pwd",
    Distractor1: "ksh",
    Distractor2: "csh",
    Distractor3: "bash",
    Explanation:
      "There are many different kind of shells available on Linux and macOS computers. A few of them that dominate the space are bash, csh, zsh, and fish.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#introductiontolinuxandshells",
  },
  {
    Question: "In CSS, what does the vw unit stand for?",
    Answer: "viewport width",
    Distractor1: "view width height",
    Distractor2: "viewport weight",
    Distractor3: "viewport height",
    Explanation: "The vw unit stands for viewport width.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },
  {
    Question:
      "In Linux, which of the following commands is used to showcase the contents stored in a file?",
    Answer: "less",
    Distractor1: "open",
    Distractor2: "man",
    Distractor3: "rm",
    Explanation: "The less command shows the content stored inside a file.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question:
      "In SQL, what command allows you to filter the data aggregated by the GROUP BY clause so that the user gets a limited set of records to view?",
    Answer: "HAVING",
    Distractor1: "LIMIT",
    Distractor2: "QUERY",
    Distractor3: "SELECT",
    Explanation:
      "The HAVING command allows you to filter the data aggregated by the GROUP BY clause so that the user gets a limited set of records to view.",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/",
  },
  {
    Question: "In Python, what function can you call to open a file?",
    Answer: "open()",
    Distractor1: "read()",
    Distractor2: "extend()",
    Distractor3: "print()",
    Explanation: "The open() function opens a file in a Python program. ",
    Link: "https://www.freecodecamp.org/news/python-write-to-file-open-read-append-and-other-file-handling-functions-explained/",
  },
  {
    Question: "What is the main purpose of JavaScript in a website?",
    Answer: "Functionality",
    Distractor1: "Structure",
    Distractor2: "Style",
    Distractor3: "Sound",
    Explanation:
      "JavaScript is used to create interactive and dynamic websites.",
    Link: "https://www.freecodecamp.org/news/what-is-javascript-javascript-code-explained-in-plain-english/",
  },
  {
    Question:
      "In HTML, which tag is used to make text bold and mark it as important text?",
    Answer: "<strong>",
    Distractor1: "<b>",
    Distractor2: "<em>",
    Distractor3: "<bold>",
    Explanation:
      "The <strong> tag is used to make text bold and to indicate that the text is important.",
    Link: "https://devdocs.io/html/element/strong",
  },
  {
    Question: "In Git, what is a staged state?",
    Answer: "the files are ready to be committed",
    Distractor1: "the files are ready to be deleted",
    Distractor2: "a new local repository has been created",
    Distractor3: "the files need to be saved to the remote repository",
    Explanation: "The staged state is when the files are ready to be committed",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "What does CPU stand for?",
    Answer: "Central Processing Unit",
    Distractor1: "Central Protocol Unit",
    Distractor2: "Central Programming Unit",
    Distractor3: "Control Processing Unit",
    Explanation:
      "CPU stands for Central Processing Unit which performs logic computations for the program.",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/",
  },
  {
    Question: "In HTML, which one is NOT a supported format for the img tag?",
    Answer: "txt",
    Distractor1: "png",
    Distractor2: "WebP",
    Distractor3: "jpeg",
    Explanation:
      "The img tag can support many formats including WebP, JPEG and PNG.",
    Link: "https://www.freecodecamp.org/news/img-html-image-tag-tutorial/",
  },
  {
    Question:
      "In Linux, which command is used to copy a whole folder and its contents?",
    Answer: "cp -r",
    Distractor1: "cp -saving",
    Distractor2: "mv",
    Distractor3: "mkdir",
    Explanation:
      "To copy folders you need to add the -r option to recursively copy the whole folder contents.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question:
      "In Python, what module provides access to the mathematical functions defined by the C standard?",
    Answer: "math",
    Distractor1: "functions",
    Distractor2: "algebra",
    Distractor3: "calculus",
    Explanation:
      "The math module provides access to the mathematical functions defined by the C standard in Python.",
    Link: "https://docs.python.org/3/library/math.html#module-math",
  },
  {
    Question: "What unit is used to measure the speed of a CPU?",
    Answer: "GHz (gigahertz)",
    Distractor1: "MHz (megahertz)",
    Distractor2: "kHz (kilohertz)",
    Distractor3: "THz (terahertz)",
    Explanation:
      "The speed of a computer is determined by its clock cycle. The clock speed measures the number of cycles the CPU executes per second. Hertz is a unit of frequency. The CPU clock cycle is measured in GHz (gigahertz). 1GHz is equal to 10 ⁹ Hz (hertz).So 1Gigahertz means 10 ⁹ cycles per second.",
    Link: "https://www.freecodecamp.org/news/how-does-a-cpu-work/",
  },
  {
    Question:
      "In HTML, which tag is used to make text italic with emphasis on its content?",
    Answer: "<em>",
    Distractor1: "<i>",
    Distractor2: "<b>",
    Distractor3: "<italic>",
    Explanation:
      "The <em> tag is used to make text italic with extra emphasis on its content.",
    Link: "https://devdocs.io/html/element/em",
  },
  {
    Question: "Are semicolons strictly required in JavaScript?",
    Answer: "No",
    Distractor1: "Yes",
    Distractor2: "only when using the concat method",
    Distractor3: "only when using the split method",
    Explanation:
      "JavaScript does not require strict use of semicolons because it inserts them where they are needed through a process called Automatic Semicolon Insertion.",
    Link: "https://www.freecodecamp.org/news/lets-talk-about-semicolons-in-javascript-f1fe08ab4e53/#:~:text=This%20is%20all%20possible%20because%20JavaScript%20does%20not%20strictly%20require%20semicolons.&text=It's%20important%20to%20know%20the,not%20behave%20like%20you%20expect.",
  },
  {
    Question:
      "In JavaScript, what value is returned by default when a function doesn't have a return statement?",
    Answer: "undefined",
    Distractor1: "None",
    Distractor2: "concat",
    Distractor3: "0",
    Explanation:
      "The value undefined is returned by functions that do not have a return statement.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions",
  },
  {
    Question: "In CSS Flexbox, what does align-self do?",
    Answer: "adjusts the alignment for an element",
    Distractor1: "adjust the alignment for all elements",
    Distractor2: "adjusts the alignment for hr elements",
    Distractor3: "adjusts the alignment for an img element",
    Explanation: "In CSS Flexbox, align-self adjusts the alignment for an element",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question:
      "In JavaScript, what operator takes an array and spreads it into its individual elements?",
    Answer: "Spread operator",
    Distractor1: "Rest operator",
    Distractor2: "Division Operator",
    Distractor3: "Multiplication Operator",
    Explanation:
      "The spread operator takes an array and spreads it into its individual elements. With this operator, we can pass the elements of an array as individual arguments to a function call.",
    Link: "https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/",
  },
  {
    Question: "What is an Algorithm?",
    Answer: "A set of steps to solve a problem",
    Distractor1: "A programming language",
    Distractor2: "A collection of fonts",
    Distractor3: "A data type",
    Explanation: "An algorithm is a set of steps to solve a problem.",
    Link: "https://www.freecodecamp.org/news/algorithm-definition/",
  },
  {
    Question: "In CSS, what does the animation-name property do?",
    Answer:
      "It is a name used to describe the animation applied to the element.",
    Distractor1: "It sets the duration of the animation.",
    Distractor2: "It sets a delay for the animation to start.",
    Distractor3: "It sets how many times an animation should run.",
    Explanation:
      "The animation-name property is used to describe the animation applied to the element.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },
  {
    Question:
      "In CSS, what is the name of the grid property used to set the space for grid cells in rows and columns?",
    Answer: "grid-template-areas",
    Distractor1: "grid-template-rows",
    Distractor2: "fraction unit",
    Distractor3: "repeat",
    Explanation:
      "The grid-template-areas property is used to set the space for grid cells in rows and columns.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In Git, how do you add all of the files in the local Git repository?",
    Answer: "git add .",
    Distractor1: "git add all files",
    Distractor2: "git add --all files",
    Distractor3: "git add <all files",
    Explanation:
      "In the command line, you can use git add . to add all of the files in your local repository.",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In CSS, what is the universal selector?",
    Answer: "*",
    Distractor1: "#",
    Distractor2: "$",
    Distractor3: "@",
    Explanation:
      "The asterisk * is the universal selector in CSS. It selects all elements of any type.",
    Link: "https://www.freecodecamp.org/news/use-css-selectors-to-style-webpage/",
  },
  {
    Question: "What does DNS do?",
    Answer: "Maps domain names to IP addresses",
    Distractor1: "Is responsible for encrypting HTTP connections",
    Distractor2:
      "Provides the web client with web files during client-server communication",
    Distractor3: "Breaks down web information into smaller chunks, or packets",
    Explanation:
      "The Domain Name System (DNS) maps human-readable domain names to IP addresses (unique identifiers). For example, DNS translates and maps the domain freeCodeCamp.org to the IP address 104.26.2.33.",
    Link: "https://www.freecodecamp.org/news/what-is-dns/",
  },
  {
    Question: "In Python, the keys of a dictionary must be...",
    Answer: "Immutable",
    Distractor1: "Mutable",
    Distractor2: "Both will work",
    Distractor3: "Neither will work",
    Explanation: "The keys of a Python dictionary must be immutable.",
    Link: "https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/",
  },
  {
    Question:
      "In Linux, which command is used to display the current running processes?",
    Answer: "ps",
    Distractor1: "ls",
    Distractor2: "pwd",
    Distractor3: "echo",
    Explanation:
      "You can list running processes using the ps command (ps means process status). The ps command displays your current running processes in real-time.",
    Link: "https://www.freecodecamp.org/news/linux-list-processes-how-to-check-running-processes/",
  },
  {
    Question:
      "In CSS, what is the name of the property used to change the position of the background image?",
    Answer: "background-position",
    Distractor1: "background-clip",
    Distractor2: "background-color",
    Distractor3: "background-origin",
    Explanation:
      "The background-position is used to change the position of the background image.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question: "What is RAM?",
    Answer:
      "A type of short term memory that stores data that computer processors need access to",
    Distractor1: "A type of memory that computers use to call servers",
    Distractor2: "A type of memory that computers use to delete data",
    Distractor3:
      "A type of memory that computers use to connect with other devices",
    Explanation:
      "Random Access Memory is a type of short term memory that stores data that computer processors can access frequently.",
    Link: "https://www.freecodecamp.org/news/ram-definition/",
  },
  {
    Question: "In Git, how can you delete a branch from a repository?",
    Answer: "git branch -d <branch-name>",
    Distractor1: "git branch <branch-name>",
    Distractor2: "git delete <branch-name>",
    Distractor3: "git del <branch-name>",
    Explanation:
      "You can use git branch -d <branch-name> to delete a branch from the repository.",
    Link: "https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/",
  },
  {
    Question: "In HTML, what is the pre tag?",
    Answer: "a tag used for preformatted sections of text",
    Distractor1: "small text for h1 tags only",
    Distractor2: "a generic block container to hold other elements",
    Distractor3: "a caption for the form element",
    Explanation: "The pre tag is used to display preformatted sections of text",
    Link: "https://www.freecodecamp.org/news/pre-tag-in-html-example-code/",
  },
  {
    Question:
      "In CSS, what is the name of the property used to position one individual grid item inside a grid container along the x-axis?",
    Answer: "justify-self",
    Distractor1: "align-content",
    Distractor2: "grid-template-areas",
    Distractor3: "justify-rows",
    Explanation:
      "The justify-self property is used to position one individual grid item inside a grid container along the x-axis.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In HTML, what is the nav element?",
    Answer: "A container for navigation links",
    Distractor1: "A container for quotes",
    Distractor2: "A container for paragraph tags",
    Distractor3: "A container for headings",
    Explanation:
      "The nav element is a semantic tag used to contain navigation links.",
    Link: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/",
  },
  {
    Question:
      "In Python, what function returns True if any element of the iterable evaluates to True?",
    Answer: "any()",
    Distractor1: "all()",
    Distractor2: "none()",
    Distractor3: "one()",
    Explanation:
      "The any() function returns True if any element of the iterable passed as an argument evaluates to True. Else, it returns False.",
    Link: "https://www.freecodecamp.org/news/python-any-and-all-functions-explained-with-examples/",
  },
  {
    Question: "What is a bit?",
    Answer: "Smallest form of data on a computer",
    Distractor1: "Structured assembly language ",
    Distractor2: "A special type of file system",
    Distractor3: "A special type of object",
    Explanation:
      'A binary digit or "bit" is the smallest form of data on a computer',
    Link: "https://www.freecodecamp.org/news/bit-definition/",
  },
  {
    Question: "In HTML, what is the <th> tag?",
    Answer: "An element used to create table headings in a table",
    Distractor1: "An element that represents a row in a table",
    Distractor2: "An element used to create data cells in a table",
    Distractor3:
      "A generic block level container for grouping content in a table",
    Explanation:
      "The <th> tag is an element used to create table headings in a table",
    Link: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/",
  },
  {
    Question:
      "In CSS, which one of these values does NOT apply to the all shorthand property?",
    Answer: "position",
    Distractor1: "unset",
    Distractor2: "initial",
    Distractor3: "revert",
    Explanation:
      "The all CSS shorthand property can accept the following values: initial, inherit, unset, revert.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/all",
  },
  {
    Question:
      "In CSS Flexbox, how do you set the flex container to arrange the items in a column?",
    Answer: "flex-direction: column;",
    Distractor1: "flex-direction: row;",
    Distractor2: "flex-column: column;",
    Distractor3: "flex-direction: set-column;",
    Explanation:
      "In CSS Flexbox, you can apply flex-direction: column; to the container whose items you want arrange in a column",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question: "In HTML, what is the character entity for the ampersand sign?",
    Answer: "&amp;",
    Distractor1: "&amper;",
    Distractor2: "&and;",
    Distractor3: "&ampsand;",
    Explanation:
      "The &amp; character entity is used to display the ampersand sign in HTML.",
    Link: "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/",
  },
  {
    Question: "In SQL, what is the command to create a table?",
    Answer: "CREATE TABLE <table-name>",
    Distractor1: "TABLE CREATE <table-name>",
    Distractor2: "NEW TABLE <table-name>",
    Distractor3: "TABLE NEW <table-name>",
    Explanation:
      "CREATE TABLE <table-name> is the SQL command to create a table. ",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/",
  },
  {
    Question: "What is the first tag you add to a HTML5 document?",
    Answer: "The <!doctype html> tag",
    Distractor1: "The html tag",
    Distractor2: "The header tag",
    Distractor3: "The body tag",
    Explanation:
      "The first element on every HTML page is doctype. It tells the browser to expect HTML and what version to use. For the newest version of HTML, the element should look like this: <!doctype html>",
    Link: "https://www.freecodecamp.org/news/html-crash-course/",
  },
  {
    Question: "In HTML, what is a common use for the <u> tag?",
    Answer: "to point out misspelled words",
    Distractor1: "to change the color for text",
    Distractor2: "to create an unordered list",
    Distractor3: "to highlight a portion of text",
    Explanation: "A common use for the u tag is to point out misspelled words",
    Link: "https://www.freecodecamp.org/news/html-underline-text-how-to-use-the-u-tag-with-example-code/",
  },
  {
    Question: "In HTML, how do you add four non-breaking spaces?",
    Answer: "&emsp;",
    Distractor1: "&fourspaces;",
    Distractor2: "&e-m-s-p;",
    Distractor3: "&emspaces;",
    Explanation:
      "You can use the &emsp; entity to display four non-breaking spaces in HTML.",
    Link: "https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/",
  },
  {
    Question:
      "In HTML, which tag is used to make text italic without emphasis on its content?",
    Answer: "<i>",
    Distractor1: "<em>",
    Distractor2: "<b>",
    Distractor3: "<italic>",
    Explanation:
      "The <i> tag is used to make text italic without adding extra emphasis. It is commonly used for text that is set off from normal prose, like foreign words or thoughts. ",
    Link: "https://devdocs.io/html/element/i",
  },
  {
    Question:
      "In Python, it is recommended to write variable names in lowercase with words separated by...",
    Answer: "an underscore",
    Distractor1: "an asterisk",
    Distractor2: "a question mark",
    Distractor3: "a hash symbol",
    Explanation:
      "PEP 8, the Style Guide for Python Code, recommends writing variable names in lowercase with words separated by an underscore as necessary to improve readability.",
    Link: "https://www.python.org/dev/peps/pep-0008/#function-and-variable-names",
  },
  {
    Question: "In HTML, what tag is used to create a header in a table?",
    Answer: "<th>",
    Distractor1: "<header>",
    Distractor2: "<theader>",
    Distractor3: "<td>",
    Explanation: "The <th> tag is used to create a header in a table.",
    Link: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/",
  },
  {
    Question: "In Python, how can you create an empty list?",
    Answer: "[]",
    Distractor1: "dict()",
    Distractor2: "??",
    Distractor3: "(())",
    Explanation:
      "You can create an empty list with [] or with list() in Python.",
    Link: "https://www.freecodecamp.org/news/python-empty-list-tutorial-how-to-create-an-empty-list-in-python/",
  },
  {
    Question:
      "In JavaScript, what method removes the last element of an array and returns it?",
    Answer: ".pop()",
    Distractor1: ".push()",
    Distractor2: ".shift()",
    Distractor3: ".unshift()",
    Explanation:
      "The .pop() method removes the last element of an array and returns it.",
    Link: "https://www.freecodecamp.org/news/the-javascript-array-handbook/",
  },
  {
    Question:
      "In Python, what is the name of the exception raised when an operation or function is applied to an object of an inappropriate type? ",
    Answer: "TypeError",
    Distractor1: "NameError",
    Distractor2: "KeyError",
    Distractor3: "IndexError",
    Explanation:
      "A TypeError is raised in Python when an operation or function is applied to an object of an inappropriate type. ",
    Link: "https://www.freecodecamp.org/news/exception-handling-python/",
  },
  {
    Question: "What does TCP stand for?",
    Answer: "Transmission Control Protocol",
    Distractor1: "Terabyte Control Protocol",
    Distractor2: "Transmission Carrier Protocol",
    Distractor3: "Transmission Control Patch",
    Explanation:
      'Transmission Control Protocol or "TCP" is a type of networking protocol online',
    Link: "https://www.freecodecamp.org/news/tcp-vs-udp/",
  },
  {
    Question:
      "In CSS, which one of these values is NOT used for the background-origin property?",
    Answer: "box-sizing",
    Distractor1: "border-box",
    Distractor2: "padding-box",
    Distractor3: "content-box",
    Explanation:
      "The background-origin property can use following values: border-box, padding-box, inherit, and content-box.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question: "What is GitHub?",
    Answer: "A hosting platform for Git repositories ",
    Distractor1: "An online IDE",
    Distractor2: "A popular database",
    Distractor3: "A subscription based platform to sell coding classes",
    Explanation:
      "GitHub is a popular hosting platform for developers to store their Git repositories and collaborate with other developers all around the world.",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "How many bytes make up a Kilobyte?",
    Answer: "1,000 bytes",
    Distractor1: "100 bytes",
    Distractor2: "10 bytes",
    Distractor3: "1 byte",
    Explanation: "A Kilobyte is composed of 1,000 bytes",
    Link: "https://www.freecodecamp.org/news/kilobyte-definition/",
  },
  {
    Question:
      "In Git, how do you push changes from the main branch of a local Git repository to a remote repository (origin)?",
    Answer: "git push -u origin main",
    Distractor1: "git push changes",
    Distractor2: "git push all changes",
    Distractor3: "git push --to main branch",
    Explanation:
      "In the command line, you can use git push -u origin main to push your changes from the main branch of a local Git repository to a remote repository.",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In HTML, what is the blockquote element?",
    Answer: "A tag used to quote text from another source",
    Distractor1: "A tag used to number quotes",
    Distractor2: "A tag used to style quotes",
    Distractor3: "A tag used to turn quotes into links",
    Explanation:
      "The blockquote element is used to quote text from another source",

    Link: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/",
  },
  {
    Question: "What does PNG stand for?",
    Answer: "Portable Network Graphics",
    Distractor1: "Portable New Graphics",
    Distractor2: "Premium Network Graphics",
    Distractor3: "Portable Network Green",
    Explanation: "PNG stands for Portable Network Graphics.",
    Link: "https://en.wikipedia.org/wiki/Portable_Network_Graphics",
  },
  {
    Question:
      "In JavaScript, which one of these variable declarations can be redeclared within its scope?",
    Answer: "var",
    Distractor1: "splice",
    Distractor2: "object.freeze",
    Distractor3: "concat",
    Explanation:
      "When you declare variables with var, they can be re-declared within their scope.",
    Link: "https://www.freecodecamp.org/news/javascript-interview-prep-cheatsheet/",
  },
  {
    Question:
      "In CSS, what is the name of the CSS grid property used to create gaps between columns?",
    Answer: "column-gap",
    Distractor1: "set-width",
    Distractor2: "fit-unit",
    Distractor3: "grid-template-columns",
    Explanation:
      "The column-gap property is used to create gaps between columns.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In Git, how do you commit files to the history of changes?",
    Answer: 'git commit -m "commit message"',
    Distractor1: "git commit --add message",
    Distractor2: "git commit < add message",
    Distractor3: "git add message",
    Explanation:
      'In the command line, you can use git commit -m "commit message" to commit your changes.',
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question:
      "In HTML, which tag is used to make inline text be displayed as subscript?",
    Answer: "<sub>",
    Distractor1: "<subs>",
    Distractor2: "<s>",
    Distractor3: "<sup>",
    Explanation: "The <sub> tag displays inline text as subscript.",
    Link: "https://devdocs.io/html/element/sub",
  },
  {
    Question:
      "In SQL, what command allows you to rename a column or table using an alias?",
    Answer: "AS",
    Distractor1: "ALIASES",
    Distractor2: "SET",
    Distractor3: "NAME",
    Explanation:
      "The AS command is used to rename a column or table using an alias.",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/",
  },
  {
    Question:
      'In Python, which one of the following options prints "Hello, World!" without starting a new line at the end?',
    Answer: 'print("Hello, World!", end="")',
    Distractor1: 'print("Hello, World!")',
    Distractor2: 'print("Hello, World!", end="\\n")',
    Distractor3: 'print("Hello, World!", end="\\r")',
    Explanation:
      'Adding end="" as the second argument will print the string without adding a new line character at the end. An empty string will be used instead.',
    Link: "https://www.freecodecamp.org/news/python-new-line-and-how-to-python-print-without-a-newline/",
  },
  {
    Question: "How many bits are there in an IPv4 address?",
    Answer: "32",
    Distractor1: "64",
    Distractor2: "16",
    Distractor3: "8",
    Explanation:
      "IPv4 is a 32-bit address and it's made up of 4 blocks. Each block is separated by a dot, and looks something like this: XXX.XXX.XXX.XXX",
    Link: "https://www.freecodecamp.org/news/ipv4-vs-ipv6-what-is-the-difference-between-ip-addressing-schemes/",
  },
  {
    Question: "Which of the following is an example of volatile memory?",
    Answer: "RAM (Random Access Memory)",
    Distractor1: "SSD (Solid State Drive)",
    Distractor2: "MRAM ",
    Distractor3: "ROM",
    Explanation:
      "While RAM is very fast, it is a type of volatile memory. This means that it only stores information while the computer is on. Unlike an HDD or SSD, once you shut down your computer, everything stored in RAM is lost.",
    Link: "https://www.freecodecamp.org/news/ram-definition/",
  },
  {
    Question: "What is the filename extension of a Python file?",
    Answer: ".py",
    Distractor1: ".js",
    Distractor2: ".html",
    Distractor3: ".p",
    Explanation: "Python files have a .py filename extension.",
    Link: "https://en.wikipedia.org/wiki/Python_(programming_language)",
  },
  {
    Question:
      "In Linux, which command deletes a directory that has NO files inside it?",
    Answer: "rmdir",
    Distractor1: "mkdir",
    Distractor2: "rm",
    Distractor3: "touch",
    Explanation:
      "You can delete a folder using rmdir. That folder must be empty.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-rmdir-command",
  },
  {
    Question: "What color would rgb(255,0,0) give?",
    Answer: "Red",
    Distractor1: "Green",
    Distractor2: "Blue",
    Distractor3: "Yellow",
    Explanation:
      "Each parameter defines the intensity of each color, rgb(red, green, and blue), with an integer number ranging from 0-255. The minimum value of 0 represents that none of the color is being shown, so it is at its darkest. On the other hand, the maximum value of 255 represents that the full amount of color and the full intensity is on display",
    Link: "https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/",
  },
  {
    Question: "In HTML, what does the src attribute do in the link tag?",
    Answer: "tells the computer where to import the document",
    Distractor1: "tells the computer where to export the document",
    Distractor2: "specifies the number of link tags in the HTML document",
    Distractor3: "specifies the number of anchor tags in the HTML document",
    Explanation:
      "The src attribute tells the computer where to import the document",
    Link: "https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/",
  },
  {
    Question: "In SQL, what does DDL stand for?",
    Answer: "Data Definition Language",
    Distractor1: "Data Manipulation Language",
    Distractor2: "Data Control Language",
    Distractor3: "Deleting Definition Language",
    Explanation: "DDL stands for Data Definition Language. ",
    Link: "https://en.wikipedia.org/wiki/Data_definition_language",
  },
  {
    Question:
      "In SQL, what clause is used to limit the number of rows returned by a query based on specific criteria?",
    Answer: "WHERE",
    Distractor1: "LIMIT",
    Distractor2: "FILTER",
    Distractor3: "CHECK",
    Explanation:
      "The WHERE clause is used in SQL to limit the number of rows returned based on specific criteria.",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/",
  },
  {
    Question: "In HTML, what tag is used to embed video?",
    Answer: "<video>",
    Distractor1: "<vid>",
    Distractor2: "<v>",
    Distractor3: "<player>",
    Explanation: "The <video> tag is used to embed video in an HTML document.",
    Link: "https://www.freecodecamp.org/news/html5-video/",
  },
  {
    Question: "In HTML, what does the optgroup element do?",
    Answer: "groups option elements together in the select tag",
    Distractor1: "groups labels together in the select tag",
    Distractor2: "groups form tags together",
    Distractor3: "groups inputs together in the form",
    Explanation:
      "The optgroup groups option elements together in the select tag",
    Link: "https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/",
  },
  {
    Question: "In CSS, how is the and operator used in a media query?",
    Answer: "It is used to join multiple media features.",
    Distractor1: "It is used to reverse a true query into a false query.",
    Distractor2: "It is used to separate multiple media features by commas.",
    Distractor3: "It is used to split media queries into separate ones.",
    Explanation:
      "The and operator is used to join multiple media features in a media query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "What is the main purpose of HTML in a website?",
    Answer: "Structure",
    Distractor1: "Style",
    Distractor2: "Functionality",
    Distractor3: "Sound",
    Explanation: "HTML defines the structure of the website. ",
    Link: "https://www.freecodecamp.org/news/html-crash-course/",
  },
  {
    Question: "Who created Linux?",
    Answer: "Linus Torvalds",
    Distractor1: "Bill Gates",
    Distractor2: "Mark Zuckerberg",
    Distractor3: "Sergey Brin",
    Explanation:
      "Linus Torvalds created Linux as a college student in Finland in 1991.",
    Link: "https://www.freecodecamp.org/news/linux-is-25-yay-lets-celebrate-with-25-rad-facts-about-linux-c8d8ac30076d/",
  },
  {
    Question: "In HTML, what is the <code> element?",
    Answer: "An HTML element used for displaying code snippets",
    Distractor1: "An HTML element used for displaying images",
    Distractor2: "An HTML element used for displaying links",
    Distractor3: "An HTML element used for displaying paragraphs",
    Explanation: "The code element is used for displaying code snippets",
    Link: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/",
  },
  {
    Question: "What color would rgb(255,255,255) give?",
    Answer: "White",
    Distractor1: "Red",
    Distractor2: "Black",
    Distractor3: "Blue",
    Explanation:
      "The maximum value of 255 represents that the full amount of all colors and their full intensity is on display.",
    Link: "https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/",
  },
  {
    Question: "What is semantic HTML?",
    Answer: "HTML tags that hold special meaning",
    Distractor1: "generic HTML tags that hold no meaning",
    Distractor2: "tags that only hold special meaning for links",
    Distractor3: "tags that only hold special meaning for table tags",
    Explanation:
      "Semantic HTML tags are HTML elements that hold special meaning",
    Link: "https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/",
  },
  {
    Question: "In HTML, what is the range of values for the tabindex attribute?",
    Answer: "0 to 32767",
    Distractor1: "-9 to 30",
    Distractor2: "0 to 578",
    Distractor3: "-20 to 3000",
    Explanation:
      "The tabindex attribute accepts a range of integers from 0 to 32767",
    Link: "https://www.freecodecamp.org/news/html-roving-tabindex-attribute-explained-with-examples/",
  },
  {
    Question: "In JavaScript, how can you get the length of a string?",
    Answer: ".length",
    Distractor1: "len()",
    Distractor2: "length()",
    Distractor3: ".size()",
    Explanation:
      "Strings have a .length property that contains their length (number of characters).",
    Link: "https://devdocs.io/javascript/global_objects/string/length",
  },
  {
    Question:
      "In Unix, which command is used for exiting VIM WITHOUT saving the changes you made?",
    Answer: ":q!",
    Distractor1: ":wq",
    Distractor2: ":i",
    Distractor3: ":r",
    Explanation:
      "If you made some changes and would rather discard them, type :q! to forcefully quit, and press Enter/return.",
    Link: "https://www.freecodecamp.org/news/how-to-exit-vim/",
  },
  {
    Question: "In HTML, which tag is used to create an image?",
    Answer: "<img>",
    Distractor1: "<image>",
    Distractor2: "<i>",
    Distractor3: "<hr>",
    Explanation: "The <img> tag is used to add images to a website.",
    Link: "https://www.freecodecamp.org/news/img-html-image-tag-tutorial/",
  },
  {
    Question: "In Linux, which command is used for creating directories (folders)?",
    Answer: "mkdir",
    Distractor1: "mkcd",
    Distractor2: "cd",
    Distractor3: "rm",
    Explanation:
      "You create folders using the mkdir command, followed by the name of the directory e.g. mkdir photos",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-mkdir-command",
  },
  {
    Question: "In HTML, what does X-UA-Compatible mean?",
    Answer: "specifies the document mode for Internet Explorer.",
    Distractor1: "specifies the document mode for Google chrome",
    Distractor2: "specifies the document mode for Safari",
    Distractor3: "specifies the document mode for Brave",
    Explanation:
      "This <meta> tag specifies the document mode for Internet Explorer.",
    Link: "https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/",
  },
  {
    Question:
      "In HTML, what attribute can you add to <input> to create a submit button?",
    Answer: 'type="submit"',
    Distractor1: 'type="send"',
    Distractor2: 'type="end"',
    Distractor3: 'type="receive"',
    Explanation:
      'The type="submit" attribute is used to create a submit button in HTML.',
    Link: "https://www.freecodecamp.org/news/html-form-input-type-and-submit-button-example/",
  },
  {
    Question:
      "In Python, how many spaces are recommended per level of indentation?",
    Answer: "4",
    Distractor1: "10",
    Distractor2: "20",
    Distractor3: "300",
    Explanation:
      "In Python, it is recommended to use 4 spaces per level of indentation.",
    Link: "https://www.python.org/dev/peps/pep-0008/#indentation",
  },
  {
    Question: "In CSS, how do you add content after an element?",
    Answer: "::after",
    Distractor1: "::after-content",
    Distractor2: "::add",
    Distractor3: "::before",
    Explanation:
      "You can use the ::after selector to add content after an element",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/",
  },
  {
    Question: "In HTML, which description is NOT an appropriate use for the <i> tag?",
    Answer: "used to place emphasis on a word or span of text",
    Distractor1: "taxonomic descriptions",
    Distractor2: "to show someone's thoughts",
    Distractor3: "to mark phrases in a different language",
    Explanation:
      "The <i> tag can be used to mark phrases in a different language, show someone's thoughts, or for taxonomic descriptions",
    Link: "https://www.freecodecamp.org/news/html-italics-tutorial-how-to-make-text-italic-with-the-i-tag/",
  },
  {
    Question: "In CSS, what does the animation-delay property do?",
    Answer: "It sets a delay for the animation to start.",
    Distractor1: "It determines how long an animation should last in seconds.",
    Distractor2: "It pauses the animation if the animation is running.",
    Distractor3:
      "It determines when the animation should speed up or slow down.",
    Explanation:
      "The animation-delay property is used to set a delay for the animation to start.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },
  {
    Question:
      "In Python, which built-in function is used for taking user input?",
    Answer: "input()",
    Distractor1: "in()",
    Distractor2: "user()",
    Distractor3: "receive()",
    Explanation: "The input() function is used to take user input in Python.",
    Link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/",
  },
  {
    Question:
      "In CSS, which one of these options is NOT a value used for the justify-items property?",
    Answer: "gap",
    Distractor1: "start",
    Distractor2: "end",
    Distractor3: "stretch",
    Explanation:
      "The four values that can be used for the justify-items property are: start, end, center, and stretch.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question:
      "The rules that determine the correct structure of the code in a computer program are known as...",
    Answer: "Syntax",
    Distractor1: "Semantics",
    Distractor2: "Interpreter",
    Distractor3: "Compiler",
    Explanation:
      "The rules that determine the correct structure of the code in a computer program are known as syntax.",
    Link: "https://en.wikipedia.org/wiki/Syntax_(programming_languages)",
  },
  {
    Question: "In HTML, what is the default styling for the <u> tag?",
    Answer: "Single underline",
    Distractor1: "Line through",
    Distractor2: "Line above the text",
    Distractor3: "No line at all",
    Explanation: "The default styling for the u tag is a single underline.",
    Link: "https://www.freecodecamp.org/news/html-underline-text-how-to-use-the-u-tag-with-example-code/",
  },
  {
    Question:
      "In CSS, what is the name of the value that evenly distributes space in the background-repeat property?",
    Answer: "space",
    Distractor1: "repeat",
    Distractor2: "no-repeat",
    Distractor3: "repeat-x",
    Explanation:
      "The space value is used to evenly distribute the space in the background-repeat property.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question: "What do R, G, and B in RGB stand for?",
    Answer: "Red, green, and blue",
    Distractor1: "Red, gray, and black ",
    Distractor2: "Red, green, and black",
    Distractor3: "Red, gray, and blue",
    Explanation: "RGB is an acronym that stands for Red Green Blue",
    Link: "https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/",
  },
  {
    Question: "In Python, the values of a dictionary can be...",
    Answer: "Immutable or Mutable",
    Distractor1: "only immutable",
    Distractor2: "only mutable",
    Distractor3: "Neither will work",
    Explanation:
      "The values of a Python dictionary can be either mutable or immutable. Both will work correctly. ",
    Link: "https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/",
  },
  {
    Question: "In HTML, what is a section element?",
    Answer: "A tag used to group related content into sections",
    Distractor1: "A tag used to group images",
    Distractor2: "A tag to group headings",
    Distractor3: "A tag used to group links",
    Explanation:
      "The section element is a tag used to group related content into sections",
    Link: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/",
  },
  {
    Question: "In Python, are tuples mutable or immutable?",
    Answer: "Immutable",
    Distractor1: "Mutable",
    Distractor2: "Neither Mutable or Immutable",
    Distractor3: "Both Mutable and Immutable",
    Explanation:
      "Tuples are immutable built-in data structures in Python. This means that you cannot add new elements to a tuple, you cannot update existing elements and you cannot remove elements from a tuple. ",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-data-types-and-built-in-data-structures-in-python",
  },
  {
    Question: "freeCodeCamp's Mascot is:",
    Answer: "CamperBot",
    Distractor1: "freeCodeCampasaurus Rex",
    Distractor2: "Bill Murray",
    Distractor3: "Campy the Raccoon",
    Explanation:
      "The freeCodeCamp community created CamperBot early on to help out with automated tasks in our chat rooms. Since then, he has been helpful in many different places, including the freeCodeCamp forum. He is a helpful robot who runs on kindness.",
    Link: "https://www.freecodecamp.org/news/about/",
  },
  {
    Question:
      "In JavaScript, what is the name of the method that converts all of the letters in a string to lowercase?",
    Answer: "toLowerCase",
    Distractor1: "toUpperCase",
    Distractor2: "toLow",
    Distractor3: "lower",
    Explanation:
      "The toLowerCase method is used to convert all of the letters in a string to lowercase.",
    Link: "https://www.freecodecamp.org/news/javascript-tolowercase-how-to-convert-a-string-to-lowercase-and-uppercase-in-js/",
  },
  {
    Question: "In HTML, what does the Doctype do?",
    Answer: "specifies the HTML version for the document",
    Distractor1: "specifies the type of CSS used",
    Distractor2: "specifies the type of JavaScript used",
    Distractor3: "specifies the number of elements in the HTML document",
    Explanation:
      "The Doctype is used to specify the HTML version for the document",
    Link: "https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/",
  },
  {
    Question:
      "In CSS, what is the name of the relative unit that is based on the root element's font size?",
    Answer: "rem",
    Distractor1: "em",
    Distractor2: "px",
    Distractor3: "vw",
    Explanation: "The rem unit is based on the root element's font size.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },
  {
    Question:
      "Which protocol is used for transferring files between a client and server over a network?",
    Answer: "FTP",
    Distractor1: "SMTP",
    Distractor2: "PTP",
    Distractor3: "POP",
    Explanation:
      "File Transfer Protocol (FTP)   is a standard protocol used for transferring files between a client and a server over a network.",
    Link: "https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/",
  },
  {
    Question:
      "In CSS, the amount of space between an element's content and its border is known as...",
    Answer: "Padding",
    Distractor1: "Margin",
    Distractor2: "White Space",
    Distractor3: "Indentation",
    Explanation:
      "The padding is the amount of space between the element's content and its border.",
    Link: "https://www.freecodecamp.org/news/css-margins/",
  },
  {
    Question:
      "Which layer of the Open Systems Interconnection (OSI) model is responsible for providing reliable end to end transmission of a message?",
    Answer: "The transport layer",
    Distractor1: "The physical layer",
    Distractor2: "The data link layer",
    Distractor3: "The session layer",
    Explanation:
      "The transport layer is layer 4 of the Open Systems Interconnection (OSI) model and it provides end-to-end transmission of a message by segmenting a message into multiple data packets. The layer supports connection-oriented and connectionless communication.",
    Link: "https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/",
  },
  {
    Question:
      "In Python, what built-in function allows you to iterate over multiple iterables in parallel by returning a tuple with an item from each one?",
    Answer: "zip()",
    Distractor1: "iterate()",
    Distractor2: "print()",
    Distractor3: "range()",
    Explanation:
      "The zip() function allows you to iterate over multiple iterables in parallel by returning a tuple with an item from each one.",
    Link: "https://www.freecodecamp.org/news/the-zip-function-in-python-explained-with-examples/",
  },
  {
    Question: "In JavaScript, what are the three types of scope?",
    Answer: "global, function, block",
    Distractor1: "global, function, map",
    Distractor2: "reduce, function, block",
    Distractor3: "const, function, block",
    Explanation:
      "The three types of scope in JavaScript are global, function and block.",
    Link: "https://www.freecodecamp.org/news/javascript-interview-prep-cheatsheet/",
  },
  {
    Question:
      "In Python, what is the name of the exception raised when the interpreter detects that the maximum recursion depth is exceeded?",
    Answer: "RecursionError",
    Distractor1: "IndexError",
    Distractor2: "Infinite Loop",
    Distractor3: "NameError",
    Explanation:
      "A RecursionError occurs when the interpreter detects that the maximum recursion depth is exceeded. This usually occurs when the recursive process never reaches the base case. ",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-functions-in-python",
  },
  {
    Question:
      "Which layer of the Open Systems Interconnection (OSI) model is responsible for data formatting and encryption?",
    Answer: "The presentation layer",
    Distractor1: "The application layer",
    Distractor2: "Layer 1",
    Distractor3: "Layer 5",
    Explanation:
      "The presentation layer is layer 6 in the Open Systems Interconnection (OSI) model. This layer is responsible for data formatting, such as character encoding and conversions, and data encryption.",
    Link: "https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/",
  },
  {
    Question: "What is the name of the penguin mascot of Linux?",
    Answer: "Tux",
    Distractor1: "Tail",
    Distractor2: "Ping",
    Distractor3: "Flux",
    Explanation: "Linux’s mascot is a penguin named “Tux”.",
    Link: "https://www.freecodecamp.org/news/linux-is-25-yay-lets-celebrate-with-25-rad-facts-about-linux-c8d8ac30076d/",
  },
  {
    Question:
      "Which layer of the Open Systems Interconnection (OSI) model is responsible for logical addressing and routing?",
    Answer: "The network layer",
    Distractor1: "The presentation layer",
    Distractor2: "The session layer",
    Distractor3: "The transport layer",
    Explanation:
      "The network layer is layer 3 of the Open Systems Interconnection (OSI) model. This is where we send information between and across networks through the use of routers. ",
    Link: "https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/",
  },
  {
    Question: "What does a CPU do?",
    Answer: "A CPU executes commands from a computer program",
    Distractor1: "Writes code for developers",
    Distractor2: "Displays images and text on screen",
    Distractor3: "Points to objects on the screen",
    Explanation:
      "The CPU is the brains of a computer that processes operations and executes instructions for computer programs. ",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/",
  },
  {
    Question: "In HTML, what does the <bdi> element stand for?",
    Answer: "Bidirectional Isolate",
    Distractor1: "Biodecision Isolate",
    Distractor2: "BiometicDirection Image",
    Distractor3: "Biodirectional Inline",
    Explanation: "The <bdi> element stands for Bidirectional Isolate.",
    Link: "https://devdocs.io/html/element/bdi",
  },
  {
    Question: "In Python, what operator is used to check if two values are equal?",
    Answer: "==",
    Distractor1: "=",
    Distractor2: "===",
    Distractor3: "!==",
    Explanation:
      "The == operator is used to check if two values are equal in Python. It returns True if the values are equal and False otherwise.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
  },
  {
    Question:
      "In CSS, which one of these values is NOT used for the background-attachment property?",
    Answer: "inherit",
    Distractor1: "local",
    Distractor2: "scroll",
    Distractor3: "fixed",
    Explanation:
      "The background-attachment property can take in the fixed, scroll and local values.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question: "In HTML, what is the default value for the tabindex attribute?",
    Answer: "0",
    Distractor1: "12",
    Distractor2: "14",
    Distractor3: "7",
    Explanation: "The default value for the tabindex attribute is 0",
    Link: "https://www.freecodecamp.org/news/html-roving-tabindex-attribute-explained-with-examples/",
  },
  {
    Question: "What is Binary?",
    Answer: "A numeral system where the values are 0's and 1's.",
    Distractor1: "A numeral system where the values are 1's and 2's.",
    Distractor2: "A numeral system where the values are 0-7.",
    Distractor3: "A numeral system where the values are 0-9.",
    Explanation: "Binary is a base 2 numeral system whose values are 0 and 1.",
    Link: "https://www.freecodecamp.org/news/binary-definition/",
  },
  {
    Question:
      "In CSS, what is a common breakpoint range used for tablet devices in a media query?",
    Answer: "481px - 768px",
    Distractor1: "300px - 7000px",
    Distractor2: "2px - 68px",
    Distractor3: "81px - 700px",
    Explanation:
      "The range of 481px - 768px can be used to target tablet devices in a media query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question:
      "The process by which a function calls itself directly or indirectly is known as...",
    Answer: "Recursion",
    Distractor1: "Looping",
    Distractor2: "Encapsulation",
    Distractor3: "Decomposition",
    Explanation:
      "Recursion is the process by which a function calls itself directly or indirectly during its execution. This works for problems that can be solved by solving smaller instances of the same problem. ",
    Link: "https://www.freecodecamp.org/news/understanding-recursion-in-programming/",
  },
  {
    Question:
      "In Linux, which command prints to the terminal the argument that is passed to it?",
    Answer: "echo",
    Distractor1: "man",
    Distractor2: "print",
    Distractor3: "ls",
    Explanation:
      "The echo command prints to the terminal the argument passed to it. For example, the command echo 'hello world' will print hello world to the terminal.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question: "In Python, what operator is used in Python to concatenate strings?",
    Answer: "+",
    Distractor1: "*",
    Distractor2: "-",
    Distractor3: "/",
    Explanation:
      "When the operands are strings, the + operator concatenates them to create a new string. For example: “Hello” + “World” evaluates to 'HelloWorld'.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
  },
  {
    Question: "In HTML, what is the figcaption tag in HTML?",
    Answer: "a text description for the content inside the figure element",
    Distractor1: "a caption for the table element",
    Distractor2: "a caption for the form element",
    Distractor3: "a caption for the div element",
    Explanation:
      "The figcaption is a text description for the content inside the figure element",
    Link: "https://www.freecodecamp.org/news/semantic-html5-elements/",
  },
  {
    Question:
      "In Git, how do you check for the version of Git installed on your machine?",
    Answer: "git --version",
    Distractor1: "git &version",
    Distractor2: "git <version>",
    Distractor3: "git /version",
    Explanation:
      "In the command line, you can use git --version to check which version of Git is installed on your local machine",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question:
      "Which open-source community has been the biggest inspiration to freeCodeCamp?",
    Answer: "Wikipedia",
    Distractor1: "Linux",
    Distractor2: "Mozilla Firefox",
    Distractor3: "Open Office",
    Explanation:
      "All of these projects have been a source of inspiration, but Wikipedia is the closest analog to what the freeCodeCamp community would ultimately like to become: hundreds of languages represented, with thousands of contributors from a wide variety of backgrounds and interests.",
    Link: "https://www.freecodecamp.org/news/welcome-to-the-abundance-economy-there-are-free-lunches-all-over-the-place-b9d0a417fd1a/",
  },
  {
    Question: "In HTML, what is the table tag?",
    Answer: "An element to create rows and columns of data in HTML",
    Distractor1: "An element to embed sound in an HTML document",
    Distractor2: "An element to represent side comments",
    Distractor3: "An element used for a specific set of time",
    Explanation: "The table tag create rows and columns of data in HTML",
    Link: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/",
  },
  {
    Question:
      "In CSS, which one of these options is NOT a valid value for the font-weight property?",
    Answer: "bolding",
    Distractor1: "bold",
    Distractor2: "900",
    Distractor3: "lighter",
    Explanation:
      'The option "bolding" is not a valid value for the font-weight property.',
    Link: "https://www.freecodecamp.org/news/bold-font-in-html-font-weight-for-letters/",
  },
  {
    Question: "What does fr stand for in CSS grid?",
    Answer: "fraction unit",
    Distractor1: "font units",
    Distractor2: "flex unit",
    Distractor3: "fit unit",
    Explanation: "fr stands for fraction unit in CSS grid.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question:
      "In Linux, which command provides information on all other commands available?",
    Answer: "man",
    Distractor1: "echo",
    Distractor2: "ls",
    Distractor3: "pwd",
    Explanation:
      "The man command (short for manual), provides a manual page. The page gives you a very quick overview of a command, with some handy examples of common usage scenarios.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-man-command",
  },
  {
    Question: "In HTML, how do you add a non-breaking space?",
    Answer: "&nbsp;",
    Distractor1: "&breakingspace;",
    Distractor2: "&nonbreaking;",
    Distractor3: "&n-b-s-p;",
    Explanation:
      "You can use the &nbsp; entity to display the non-breaking space in HTML.",
    Link: "https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/",
  },
  {
    Question: "Which of the following is NOT a Linux distribution?",
    Answer: "multicsxz",
    Distractor1: "CentOS",
    Distractor2: "Debian",
    Distractor3: "RHEL",
    Explanation:
      "There are different versions of Linux (called distributions)  that allow the user varying degrees of personalization and control of the operating system. This means that users can choose their Linux distributions based on their wants and needs. Some popular ones are: Ubuntu, Linux Mint, CentOS, RHEL,Arch Linux.",
    Link: "https://www.freecodecamp.org/news/the-best-linux-tutorials/",
  },
  {
    Question:
      "In HTML, what is the name of the method used to attach an event to an HTML element like a button?",
    Answer: ".addEventListener()",
    Distractor1: "Hoisting",
    Distractor2: ".getElementById()",
    Distractor3: ".getElementByTagName()",
    Explanation:
      "The .addEventListener() method is used to attach an event to an HTML element like a button.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
  },
  {
    Question: "What is a Solid State Drive?",
    Answer:
      "A type of storage device that uses flash memory to store and access data",
    Distractor1: "A device to record text to a disk",
    Distractor2: "A device to translate code from one language to another ",
    Distractor3: "A screen editor used for Unix",
    Explanation:
      "A type of storage device that uses flash memory to store and access data",
    Link: "https://www.freecodecamp.org/news/ssd-solid-state-drive-definition/",
  },
  {
    Question:
      "In CSS, what is a common breakpoint range used for laptop devices in a media query?",
    Answer: "769px -1024px",
    Distractor1: "7px -10px",
    Distractor2: "69px -124px",
    Distractor3: "769px -10,024px",
    Explanation:
      "The range of 769px -1024px can be used to target laptop devices in a media query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "In Linux, which command lists the contents of a directory?",
    Answer: "ls",
    Distractor1: "ln",
    Distractor2: "look",
    Distractor3: "less",
    Explanation:
      "The ls command (short for list) is used to list files or directories in Linux and other Unix-based operating systems. It allows you to list all files or directories in the current directory.",
    Link: "https://www.freecodecamp.org/news/the-linux-ls-command-how-to-list-files-in-a-directory-with-options/",
  },
  {
    Question:
      "Which of the following is considered an example of an input device?",
    Answer: "A computer mouse",
    Distractor1: "Speakers",
    Distractor2: "Monitor",
    Distractor3: "Projector",
    Explanation:
      "Examples of Input devices are a keyboard (used for typing text and characters – essentially for entering any written information), a mouse (for clicking, pointing, and selecting appropriate data) and a microphone.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/",
  },
  {
    Question: "In HTML, what is the viewport meta tag?",
    Answer:
      "renders the width of the page to the width of the device's screen size.",
    Distractor1: "sets the viewport for phones only",
    Distractor2: "sets the viewport for laptops only",
    Distractor3: "sets the viewport for 4k monitors",
    Explanation:
      "This tag renders the width of the page to the width of the device's screen size.",
    Link: "https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/",
  },
  {
    Question:
      "In CSS, which one of these options is NOT a value used for the align-content property?",
    Answer: "row-gap",
    Distractor1: "space-between",
    Distractor2: "center",
    Distractor3: "start",
    Explanation:
      "The align-content property can accept seven values including space-around, space-between, start, and end.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In Python, which one of these options is a valid comment?",
    Answer: "# This is a comment",
    Distractor1: "//! This is a comment",
    Distractor2: "* This is a comment",
    Distractor3: "///* This is a comment *///",
    Explanation:
      "In Python, we start a comment with a hash symbol #. A line that starts with this symbol will be interpreted as a comment in a Python program. ",
    Link: "https://forum.freecodecamp.org/t/how-to-comment-your-code-in-python-explained-with-examples/19220",
  },
  {
    Question: "What is a Subnet Mask?",
    Answer: "Creates a range for IP addresses used in a subnet",
    Distractor1: "A type of software life cycle described by W. W. Royce",
    Distractor2:
      "A device that performs restricted operations on time-sharing systems",
    Distractor3: "A device that reboots the system",
    Explanation:
      "A Subnet Mask is used to creates a range for IP addresses used in a subnet. ",
    Link: "https://www.freecodecamp.org/news/subnet-mask-definition/",
  },
  {
    Question:
      "In HTML, what is the character entity for the right double quote symbol?",
    Answer: "&rdquo;",
    Distractor1: "&rdquotes;",
    Distractor2: "&rightdquo;",
    Distractor3: "&rdoublequo;",
    Explanation:
      "The &rdquo; character entity is used to display the right double quote symbol in HTML.",
    Link: "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/",
  },
  {
    Question:
      "In HTML, what attribute can you add to <input> to create an input field for a password?",
    Answer: 'type="password"',
    Distractor1: 'type="pass"',
    Distractor2: 'type="secret"',
    Distractor3: 'type="hide"',
    Explanation:
      'The type="password" attribute is used to create an input field for a password (the characters will be hidden).',
    Link: "https://www.freecodecamp.org/news/html-form-input-type-and-submit-button-example/",
  },
  {
    Question: "In Git, how can you pull changes made to the remote repository?",
    Answer: "git pull <remote>",
    Distractor1: "git <remote> pull",
    Distractor2: "git push <remote>",
    Distractor3: "git pul <remote>",
    Explanation:
      "You can pull changes from the remote repository with git pull <remote>.",
    Link: "https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/",
  },
  {
    Question: "In HTML, what is the button tag?",
    Answer: "A tag used to create buttons for your HTML page",
    Distractor1: "A tag used to create images",
    Distractor2: "A tag used to create quotes",
    Distractor3: "A tag used to create links",
    Explanation: "The button tag is used to add buttons to your HTML page",
    Link: "https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website/",
  },
  {
    Question: "In Python, which one of these options is a valid variable name?",
    Answer: "my_variable_59",
    Distractor1: "59my_variable",
    Distractor2: "my^_variable",
    Distractor3: "my_variable59%",
    Explanation:
      "Variable names in Python cannot start with a number, they must start with a letter or an underscore. They can only contain alphanumeric characters and underscores (A-Z, a-z, 0-9, and _).",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-variable-definitions-in-python",
  },
  {
    Question: "In CSS, how do you make the text for an element all lowercase?",
    Answer: "text-transform: lowercase;",
    Distractor1: "text-transform: lower;",
    Distractor2: "text-transform: to-lower;",
    Distractor3: "text-transform: set-lower;",
    Explanation:
      "You can use the text-transform: lowercase; to make all of the text for that element lowercase",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/",
  },
  {
    Question: "What does IDE stand for?",
    Answer: "Integrated Development Environment",
    Distractor1: "Internal Development Environment",
    Distractor2: "Integrated Design Environment",
    Distractor3: "International Development Experimentation",
    Explanation: "IDE stands for Integrated Development Environment.",
    Link: "https://www.freecodecamp.org/news/what-is-an-ide-in-programming-an-ide-definition-for-developers/",
  },
  {
    Question: "What does the <i> tag stand for?",
    Answer: "Idiomatic Text element",
    Distractor1: "Inline Text element",
    Distractor2: "Intent Text element",
    Distractor3: "Inline Table element",
    Explanation: "The <i> tag stands for Idiomatic Text element.",
    Link: "https://www.freecodecamp.org/news/html-italics-tutorial-how-to-make-text-italic-with-the-i-tag/",
  },
  {
    Question: "In Git, how do you clone a remote repository?",
    Answer: "git clone",
    Distractor1: "git copy",
    Distractor2: "git copy url",
    Distractor3: "git clone --copy",
    Explanation:
      "In the command line, you can use git clone followed by the remote url address for the repository you want to clone into your local machine",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In HTML, which tag is used to represent the header for a table?",
    Answer: "<thead>",
    Distractor1: "<img>",
    Distractor2: "<tbody>",
    Distractor3: "<tfoot>",
    Explanation:
      "The <thead> tag is used to represent the header of an HTML table",
    Link: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/",
  },
  {
    Question: "In HTML, what is the blockquote tag?",
    Answer: "a block of text that represents a quote",
    Distractor1: "a generic block container to hold other elements",
    Distractor2: "a generic inline element",
    Distractor3: "a caption for a figure element",
    Explanation: "The blockquote is a block of text that represents a quote",
    Link: "https://www.freecodecamp.org/news/semantic-html5-elements/",
  },
  {
    Question:
      "The set of instructions that specifies a computation in known as...",
    Answer: "Program",
    Distractor1: "Syntax",
    Distractor2: "Recursion",
    Distractor3: "API",
    Explanation:
      "The set of instructions that specifies a computation is known as a program.",
    Link: "https://www.freecodecamp.org/news/what-is-programming/",
  },
  {
    Question: "In Python, what built-in function returns the length of a sequence?",
    Answer: "len()",
    Distractor1: "length()",
    Distractor2: "size()",
    Distractor3: "s()",
    Explanation:
      "The len() function returns the length (number of items) of an object.",
    Link: "https://docs.python.org/3/library/functions.html#len",
  },
  {
    Question: "In Python, what method adds an element to the end of a list?",
    Answer: ".append()",
    Distractor1: ".add()",
    Distractor2: ".join()",
    Distractor3: ".end()",
    Explanation:
      "The .append() method adds an element to the end of a list in Python.",
    Link: "https://www.freecodecamp.org/news/python-list-append-how-to-add-an-element-to-an-array-explained-with-examples/",
  },
  {
    Question:
      "In JavaScript, what operator allows you to create a function that takes a variable number of arguments?",
    Answer: "Rest operator",
    Distractor1: "Spread operator",
    Distractor2: "Division Operator",
    Distractor3: "Multiplication Operator",
    Explanation:
      "The rest operator takes the individual arguments passed to a function and converts them into an array.",
    Link: "https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/",
  },
  {
    Question:
      "In CSS, what is the name of the property used to adjust the size of a background image?",
    Answer: "background-size",
    Distractor1: "background-repeat",
    Distractor2: "background-origin",
    Distractor3: "background-position",
    Explanation:
      "The background-size property is used to adjust the size for a background image.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question:
      "In CSS, what is the name of the property that sets the opacity of an HTML element?",
    Answer: "opacity",
    Distractor1: "margin",
    Distractor2: "padding",
    Distractor3: "border",
    Explanation:
      "The opacity property is used to set the opacity of an HTML element.",
    Link: "https://www.freecodecamp.org/news/transparent-background-image-opacity-in-css-and-html/",
  },
  {
    Question:
      "In Python, what is the name of the exception raised in Python when you try to index a list, tuple, or string beyond the permitted boundaries?",
    Answer: "IndexError",
    Distractor1: "KeyError",
    Distractor2: "NameError",
    Distractor3: "TypeError",
    Explanation:
      "An IndexError is raised in Python when you try to index a list, tuple, or string beyond the permitted boundaries.",
    Link: "https://www.freecodecamp.org/news/exception-handling-python/",
  },
  {
    Question: "What is the DOM in JavaScript?",
    Answer:
      "A programming interface to create, change, or remove elements from the document.",
    Distractor1:
      "A process that moves variables, functions, and classes to the top of the scope.",
    Distractor2: "Technique used to extract array values into new variables.",
    Distractor3: "A function that is used as an argument for another function.",
    Explanation:
      "The DOM is a programming interface to create, change, or remove elements from the document.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
  },
  {
    Question:
      "In Linux, which command is used for displaying the name of the current user logged in the terminal?",
    Answer: "whoami",
    Distractor1: "cat",
    Distractor2: "echo",
    Distractor3: "pwd",
    Explanation:
      "The whoami command prints the username currently logged in to the terminal session.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-whoami-command",
  },
  {
    Question: "In CSS Flexbox, what does justify-content do?",
    Answer: "aligns the items along the main axis",
    Distractor1: "aligns the items to right of the y axis",
    Distractor2: "aligns the items to the left of  the x and y axis",
    Distractor3: "aligns the items to the right of the x axis",
    Explanation:
      "In CSS Flexbox, justify-content is used to align the items in the container along the main axis",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question:
      "In CSS, what is the name of the rule that will override CSS style for an element?",
    Answer: "!important",
    Distractor1: "!override",
    Distractor2: "!change",
    Distractor3: "!specific",
    Explanation:
      "The !important rule will override the other CSS style rules for that element",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/",
  },
  {
    Question: "How do you create a flexbox container in CSS Flexbox?",
    Answer: "display:flex;",
    Distractor1: "display:flexbox;",
    Distractor2: "display:flexcontainer;",
    Distractor3: "display:flexB;",
    Explanation:
      "You can apply CSS Flexbox to an HTML container by using display:flex;",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question: "In HTML, what tag is used to make text bold?",
    Answer: "<b>",
    Distractor1: "<br>",
    Distractor2: "<bold>",
    Distractor3: "<p>",
    Explanation:
      "The <b> tag is used to make a portion of the text bold without carrying any special importance.",
    Link: "https://www.freecodecamp.org/news/html-bold-text-tutorial-how-to-use-the-b-tag/",
  },
  {
    Question: "In Linux, which command shows all previously executed commands?",
    Answer: "history",
    Distractor1: "memory",
    Distractor2: "review",
    Distractor3: "man",
    Explanation:
      "Every time you run a command, it's memorized in the history. You can display all the history using the history command.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question: "In HTML, what does the alt attribute do in the img tag?",
    Answer: "It provides a description of the image",
    Distractor1: "It provides the time when the image was taken",
    Distractor2: "It provides the source for the image",
    Distractor3: "It provides the dimensions for an image",
    Explanation: "The alt attribute provides a description of the image.",
    Link: "https://www.freecodecamp.org/news/img-html-image-tag-tutorial/",
  },
  {
    Question: "In HTML, which tag is used to represent a set of navigation links?",
    Answer: "<nav>",
    Distractor1: "<navigation>",
    Distractor2: "<link>",
    Distractor3: "<navig>",
    Explanation:
      "The <nav> tag is used to represent the main navigation functionality of a webpage.",
    Link: "https://www.freecodecamp.org/news/how-to-build-a-navigation-bar/",
  },
  {
    Question: "What do HDD and SSD stand for in computer hardware?",
    Answer: "Hard Disk Drive & Solid State Drive",
    Distractor1: "Harvest Disk Drive & Solid State Drive",
    Distractor2: "Hard Disk Drive & Segment State Drive",
    Distractor3: "Hard Disk Drive & Scratch State Drive",
    Explanation:
      "HDD stands for Hard Disk Drive while SSD stands for Solid State Drive.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/",
  },
  {
    Question: "In HTML, which one of these attributes does NOT work with the img tag?",
    Answer: "capture",
    Distractor1: "src",
    Distractor2: "alt",
    Distractor3: "height",
    Explanation:
      "The img tag can use a variety of attributes including src, alt, width, and height.",
    Link: "https://www.freecodecamp.org/news/img-html-image-tag-tutorial/",
  },
  {
    Question: "In Linux, what does . mean in a directory path?",
    Answer: "Refers to the current folder",
    Distractor1: "Refers to the parent folder",
    Distractor2: "Refers to the root of the file structure",
    Distractor3: "Refers to no directory",
    Explanation:
      "The . is a special path indicator. It indicates the current folder.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question:
      "In SQL, what type of join returns all rows for which there is a match in either of the tables?",
    Answer: "FULL OUTER JOIN",
    Distractor1: "RIGHT OUTER JOIN",
    Distractor2: "LEFT OUTER JOIN",
    Distractor3: "INNER JOIN",
    Explanation:
      "A FULL OUTER JOIN returns all rows for which there is a match in either of the tables.",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/",
  },
  {
    Question:
      "In JavaScript, what is the name of a function that is passed as an argument to another function?",
    Answer: "Callback function",
    Distractor1: "Arrow function",
    Distractor2: "Anonymous function",
    Distractor3: "Function declaration",
    Explanation:
      "A callback function is a function that is passed as an argument to another function and then called inside the outer function.",
    Link: "https://www.freecodecamp.org/news/javascript-callback-function-plain-english/",
  },
  {
    Question: "Who invented the World Wide Web?",
    Answer: "Tim Berners-Lee",
    Distractor1: "Ada Lovelace",
    Distractor2: "Alan Turing",
    Distractor3: "Quincy Larson",
    Explanation: "Tim Berners-Lee invented the World Wide Web in 1989.",
    Link: "https://en.wikipedia.org/wiki/Tim_Berners-Lee",
  },
  {
    Question:
      "In JavaScript, what string method combines the text of two or more strings and returns a new string?",
    Answer: ".concat()",
    Distractor1: ".combine()",
    Distractor2: ".string()",
    Distractor3: ".join()",
    Explanation:
      "The .concat() method combines the text of two or more strings and returns a new string.",
    Link: "https://devdocs.io/javascript/global_objects/string/concat",
  },
  {
    Question:
      "In CSS, what is the name of the CSS property used to position the grid inside the grid container along the y-axis?",
    Answer: "align-content",
    Distractor1: "justify-content",
    Distractor2: "end",
    Distractor3: "grid-unit-rows",
    Explanation:
      "The align-content property is used to position the grid inside the grid container along the y-axis.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "What is another term used when referring to the CPU?",
    Answer: "Processor",
    Distractor1: "Operating System",
    Distractor2: "System Unit",
    Distractor3: "Computer Software",
    Explanation:
      "CPU is short for Central Processing Unit. It is also known as a processor or microprocessor.",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/",
  },
  {
    Question:
      "In CSS, what is a common breakpoint range used for desktops and large screens in a media query?",
    Answer: "1025px - 1200px",
    Distractor1: "25px - 120px",
    Distractor2: "125px - 12,000px",
    Distractor3: "5px - 12px",
    Explanation:
      "The range of 1025px - 1200px can be used to target desktops and large screens in a media query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "What does ISP stand for?",
    Answer: "Internet Service Provider",
    Distractor1: "Internet System Provider",
    Distractor2: "International Service Provider",
    Distractor3: "Intermediate Systems Provider",
    Explanation: "ISP stands for Internet Service Provider.",
    Link: "https://www.freecodecamp.org/news/how-does-the-internet-work/",
  },
  {
    Question:
      "In HTML, what is the name of the element used to create a dialog box?",
    Answer: "<dialog>",
    Distractor1: "<dialogging>",
    Distractor2: "<dt>",
    Distractor3: "<data>",
    Explanation: "The <dialog> tag is used to create a dialog box.",
    Link: "https://devdocs.io/html/element/dialog",
  },
  {
    Question: "In Linux, which command deletes a file?",
    Answer: "rm",
    Distractor1: "rmdirs",
    Distractor2: "touch",
    Distractor3: "ls",
    Explanation:
      "The rm (short for remove) command when used without options deletes files.",
    Link: "https://www.freecodecamp.org/news/remove-a-directory-in-linux-how-to-delete-directories-and-contents-from-the-command-line/",
  },
  {
    Question:
      "In Python, what module implements pseudo-random number generators for various distributions?",
    Answer: "random",
    Distractor1: "random_numbers",
    Distractor2: "generate",
    Distractor3: "random_nums",
    Explanation:
      "The random module implements pseudo-random number generators for various distributions.",
    Link: "https://docs.python.org/3/library/random.html",
  },
  {
    Question: "In CSS, what does the A stand for in HSLA?",
    Answer: "Alpha",
    Distractor1: "Alphabetical",
    Distractor2: "Ambiguous",
    Distractor3: "Ancient",
    Explanation:
      "The A in HSLA stands for Alpha. This value represents the transparency of the color.",
    Link: "https://www.freecodecamp.org/news/css-font-color-how-to-style-text-in-html/",
  },
  {
    Question:
      "In SQL, what type of join returns all the records from the left table and the matching records from the right table?",
    Answer: "LEFT OUTER JOIN",
    Distractor1: "FULL OUTER JOIN",
    Distractor2: "INNER JOIN",
    Distractor3: "RIGHT OUTER JOIN",
    Explanation:
      "A LEFT OUTER JOIN returns all the records from the left table and the matching records from the right table.",
    Link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-sql-join-statements/",
  },
  {
    Question:
      "In Git, how can you see the current status of the current branch?",
    Answer: "git status",
    Distractor1: "git info",
    Distractor2: "git show status",
    Distractor3: "git show",
    Explanation:
      "You can see the status of the current branch with git status in Git.",
    Link: "https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/",
  },
  {
    Question:
      "In CSS, what does the repeat-y value do in the background-repeat property?",
    Answer: "It repeats the image along the y-axis.",
    Distractor1: "It repeats the image along the x-axis.",
    Distractor2: "It repeats the image along both of the x-axis and y-axis.",
    Distractor3: "It repeats the image along the z-axis.",
    Explanation: "The repeat-y value repeats the image along the y-axis.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question: "In Git, how can you add color to git command outputs?",
    Answer: "git config --global color.ui true",
    Distractor1: "git config --global color.ui false",
    Distractor2: "git set --global color.ui true",
    Distractor3: "git config --global true",
    Explanation:
      "You can use git config --global color.ui true to add color to Git output.",
    Link: "https://www.freecodecamp.org/news/best-git-tutorial/",
  },
  {
    Question: "In HTML, what attribute is used when creating a hyperlink?",
    Answer: "href",
    Distractor1: "src",
    Distractor2: "id",
    Distractor3: "style",
    Explanation:
      "On the opening tag, <a>, an href attribute is added which is short for hypertext reference. The value of the href attribute specifies the desired URL you want the link to take users to when the link text is clicked.",
    Link: "https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-html-link-beginners/",
  },
  {
    Question: "What does JPEG stand for?",
    Answer: "Joint Photographic Experts Group",
    Distractor1: "Join Photogenic Experimental Group",
    Distractor2: "Join Photographic External Graphics",
    Distractor3: "Join Photos Enchanted Graphics",
    Explanation: "JPEG stands for Joint Photographic Experts Group.",
    Link: "https://en.wikipedia.org/wiki/JPEG",
  },
  {
    Question:
      "In Python, what built-in function returns a new sorted list from the items in an iterable?",
    Answer: "sorted()",
    Distractor1: "sorting()",
    Distractor2: "print()",
    Distractor3: "copy()",
    Explanation:
      "The sorted() function returns a new sorted list from the items in an iterable. ",
    Link: "https://www.freecodecamp.org/news/python-sort-list-how-to-order-by-descending-or-ascending/",
  },
  {
    Question: "What is the filename extension of a JavaScript file?",
    Answer: ".js",
    Distractor1: ".py",
    Distractor2: ".j",
    Distractor3: ".javascript",
    Explanation: "JavaScript files have a .js filename extension.",
    Link: "https://en.wikipedia.org/wiki/JavaScript",
  },
  {
    Question: "What does HTTP stand for?",
    Answer: "HyperText Transfer Protocol",
    Distractor1: "HyperText Transmission Protocol",
    Distractor2: "HyperTest Transfer Product",
    Distractor3: "HyperText Transfer Password",
    Explanation: "HTTP stands for HyperText Transfer Protocol.",
    Link: "https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/",
  },
  {
    Question:
      "In HTML, what is the name of the method used to find all of the elements in the DOM that match a CSS selector and return a list of all of those nodes?",
    Answer: ".querySelectorAll()",
    Distractor1: "Array destructuring",
    Distractor2: ".includes() method",
    Distractor3: "await",
    Explanation:
      "The .querySelectorAll() method is used to find all of the elements that match the CSS selector and return a list of all of those nodes.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
  },
  {
    Question: "What does GNU stand for?",
    Answer: "GNU's not UNIX",
    Distractor1: "GeNeral Unix",
    Distractor2: "Great New Unix",
    Distractor3: "Greatly Needed Unix",
    Explanation: "GNU is a recursive acronym for ‘GNU's not UNIX’.",
    Link: "https://forum.freecodecamp.org/t/the-origins-of-linux-and-the-free-software-movement-a-brief-history/19527",
  },
  {
    Question: "In SQL, what statement is used to update a record in a table?",
    Answer: "UPDATE",
    Distractor1: "CHANGE",
    Distractor2: "SELECT",
    Distractor3: "QUERY",
    Explanation:
      "The UPDATE statement is used to update the value of a record in SQL.",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/",
  },
  {
    Question: "In Linux, which command is used to count JUST the lines in a file?",
    Answer: "wc -l",
    Distractor1: "wc -9",
    Distractor2: "wc -w",
    Distractor3: "wc -c ",
    Explanation:
      "To count just the lines inside a file you use the wc command with the -l option.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command",
  },
  {
    Question: "In CSS Flexbox, which one is NOT used with justify-content?",
    Answer: "flex-middle",
    Distractor1: "flex-start",
    Distractor2: "flex-end",
    Distractor3: "space-around",
    Explanation:
      "In CSS Flexbox, some of the options for justify-content include space-around, flex-end, flex-start and space-between",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question:
      "Which layer of the Open Systems Interconnection (OSI) model is responsible for establishing, maintaining, and terminating a communication session?",
    Answer: "Layer 5",
    Distractor1: "Layer 1",
    Distractor2: "Layer 4",
    Distractor3: "Layer 3",
    Explanation:
      "Layer 5 is the session layer of the Open Systems Interconnection (OSI) model. This layer establishes, maintains, and terminates sessions.",
    Link: "https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/",
  },
  {
    Question:
      "In Python, what is the name of the exception raised when you try to access the value of a key that doesn't exist in a dictionary?",
    Answer: "KeyError",
    Distractor1: "IndexError",
    Distractor2: "NameError",
    Distractor3: "TypeError",
    Explanation:
      "A KeyError is raised in Python when you try to access the value of a key that doesn't exist in a dictionary.",
    Link: "https://www.freecodecamp.org/news/exception-handling-python/",
  },
  {
    Question: "In HTML, what is the <tr> tag?",
    Answer: "An element that represents a row in a table",
    Distractor1: "A tag used to create buttons for your HTML page",
    Distractor2: "A container used to only group headings",
    Distractor3: "A tag used to group block quotes",
    Explanation: "The <tr> tag is an element that represents a row in a table",
    Link: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/",
  },
  {
    Question: "In HTML, how do you change the font-size of an h1 tag using inline CSS?",
    Answer: '<h1 style="font-size: 4rem">freeCodeCamp</h1>',
    Distractor1: '<h1 css="font-size: 4rem">freeCodeCamp</h1>',
    Distractor2: '<h1 font="font-size: 4rem">freeCodeCamp</h1>',
    Distractor3: '<h1 fontSize="font-size: 4rem">freeCodeCamp</h1>',
    Explanation:
      "To change the font size of an HTML element, you can use the style attribute and the font-size property in the opening tag.",
    Link: "https://www.freecodecamp.org/news/html-font-style-how-to-change-text-color-and-size-with-an-html-tag/",
  },
  {
    Question: "In HTML, what is the footer element?",
    Answer: "A tag used to specify the footer of the HTML document",
    Distractor1: "A tag used to specify the header of the HTML document",
    Distractor2: "A tag used to specify a paragraph of the HTML document",
    Distractor3: "A tag used to specify the main content of the HTML document",
    Explanation:
      "The footer element is a tag used to specify the footer of the HTML document. This element will usually contain copyright information.",
    Link: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/",
  },
  {
    Question: "Which command prints the Linux version?",
    Answer: "uname -r",
    Distractor1: "uname -s",
    Distractor2: "uname -u",
    Distractor3: "uname -k",
    Explanation: "The r option of the uname command prints the release",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command",
  },
  {
    Question:
      "In Python, how can you cast a value of any data type into a string?",
    Answer: "Using the str() function",
    Distractor1: "Using the int() function",
    Distractor2: "Using the string() function",
    Distractor3: "Using the integer() function",
    Explanation:
      "The str() function converts a value of any data type into a string.",
    Link: "https://www.freecodecamp.org/news/learn-typecasting-in-python-in-five-minutes-90d42c439743/",
  },
  {
    Question: "In CSS, how many pixels are equivalent to 1 rem unit?",
    Answer: "16",
    Distractor1: "32",
    Distractor2: "12",
    Distractor3: "6",
    Explanation: "One rem unit is equivalent to 16 pixels",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },
  {
    Question:
      "In Python, a value that evaluates to False in a boolean context is known as...",
    Answer: "Falsy",
    Distractor1: "FALSENESS",
    Distractor2: "Truth",
    Distractor3: "Truthy",
    Explanation:
      "A value that evaluates to False in a boolean context is known as a falsy value.",
    Link: "https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/",
  },
  {
    Question:
      "In HTML, which tag is used to make inline text be displayed as superscript?",
    Answer: "<sup>",
    Distractor1: "<super>",
    Distractor2: "<sub>",
    Distractor3: "<s>",
    Explanation: "The <sup> tag displays inline text as superscript.",
    Link: "https://devdocs.io/html/element/sup",
  },
  {
    Question: "In CSS, what selector is used to set the style of visited links?",
    Answer: "a:visited",
    Distractor1: "a:hover",
    Distractor2: "a:active",
    Distractor3: "a:link",
    Explanation: "With a:visited you can set the style of visited links.",
    Link: "https://www.freecodecamp.org/news/how-to-style-links-in-css/",
  },
  {
    Question: "In Git, how do you switch back to the main branch?",
    Answer: "git checkout main",
    Distractor1: "git switch main",
    Distractor2: "git change main",
    Distractor3: "git go to main",
    Explanation:
      "In the command line, you can use git checkout main to switch over to the main branch",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question:
      "In Linux, which command is used to sort the contents of a file alphabetically and numerically?",
    Answer: "sort",
    Distractor1: "wc",
    Distractor2: "cat",
    Distractor3: "tail",
    Explanation:
      "The sort command helps you sort a file's contents in a particular order(either numerical or alphabetical).",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question: "How many bytes make up a Megabyte?",
    Answer: "1 million bytes",
    Distractor1: "1 thousand bytes",
    Distractor2: "1 billion bytes",
    Distractor3: "1 trillion bytes",
    Explanation: "A Megabyte is composed of 1 million bytes",
    Link: "https://www.freecodecamp.org/news/megabyte-definition/",
  },
  {
    Question:
      "In CSS, what is a common breakpoint range used for mobile devices in a media query?",
    Answer: "320px - 480px",
    Distractor1: "1000px - 5000px",
    Distractor2: "100px - 150px",
    Distractor3: "200px - 4000px",
    Explanation:
      "The range of 320px - 480px can be used to target mobile devices in a media query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "What is the Internet?",
    Answer:
      "A bunch of wires and undersea cables connected and buried deep in the ground and oceans, all around the world.",
    Distractor1: "A cloud",
    Distractor2: "Another term for the World Wide Web",
    Distractor3: "An executable program file",
    Explanation:
      "The Internet is actually a wire. Well, it's many wires that connect computers all around the world. The Internet is also infrastructure. It's a global network of interconnected computers that communicate in a standardized way with set protocols.",
    Link: "https://www.freecodecamp.org/news/brief-history-of-the-internet/",
  },
  {
    Question: "Which phase is NOT part of the Design Thinking Process?",
    Answer: "Rationalize",
    Distractor1: "Ideate",
    Distractor2: "Prototype",
    Distractor3: "Empathize",
    Explanation:
      "The five phases of the Design Thinking Process are Empathize, Define, Ideate, Prototype, and Test.",
    Link: "https://www.freecodecamp.org/news/the-design-thinking-process-explained/",
  },
  {
    Question:
      "In CSS, what is the name of the CSS grid property used to create gaps between rows?",
    Answer: "row-gap",
    Distractor1: "grid-template-rows",
    Distractor2: "grid-columns",
    Distractor3: "repeat",
    Explanation: "The row-gap property is used to create gaps between rows.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question:
      "What type of loop is used to repeat a block of code a known number of times?",
    Answer: "For loop",
    Distractor1: "While loop",
    Distractor2: "Infinite loop",
    Distractor3: "Triangular loop",
    Explanation:
      "For loops repeat a block of code a known number of times, so we can use them when we know in advance how many iterations we need to run to complete a task. ",
    Link: "https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/",
  },
  {
    Question: "In Linux, which command changes passwords for user accounts?",
    Answer: "passwd",
    Distractor1: "chpass",
    Distractor2: "chpasswd",
    Distractor3: "cpasswd",
    Explanation:
      "Users in Linux have a password assigned. You can change the password using the passwd command.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question:
      "In Python, if you try to access a key that does not exist in a dictionary, you will get a...",
    Answer: "KeyError",
    Distractor1: "Spelling Error",
    Distractor2: "ValueError",
    Distractor3: "TypeError",
    Explanation:
      "If you try to access a key that does not exist in a Python dictionary, you will get a KeyError.",
    Link: "https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/",
  },
  {
    Question:
      "A value passed to a function (or method) when calling the function is known as...",
    Answer: "Argument",
    Distractor1: "Parameter",
    Distractor2: "Return value",
    Distractor3: "Class",
    Explanation:
      "An argument is a value passed to a function (or method) when the function or method is called.",
    Link: "https://www.freecodecamp.org/news/python-function-examples-how-to-declare-and-invoke-with-parameters-2/",
  },
  {
    Question: "In CSS, what is the code used to create a CSS grid container?",
    Answer: "display: grid;",
    Distractor1: "display: flex;",
    Distractor2: "display: grid-box;",
    Distractor3: "display: grid-container;",
    Explanation:
      "You can use display: grid; to create a new CSS grid container.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question:
      "In Python, what function returns the string representing a character whose Unicode code point is the integer passed as an argument?",
    Answer: "chr()",
    Distractor1: "ord()",
    Distractor2: "str()",
    Distractor3: "code()",
    Explanation:
      "The chr() function returns the string representing a character whose Unicode code point is the integer passed as an argument.",
    Link: "https://www.freecodecamp.org/news/python-function-guide-with-examples/",
  },
  {
    Question: "In CSS, how do you add content before an element?",
    Answer: "::before",
    Distractor1: "::add-content",
    Distractor2: "::before-content",
    Distractor3: "::after",
    Explanation:
      "You can use the ::before selector to add content before an element",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/",
  },
  {
    Question: "In HTML, what is the small tag?",
    Answer:
      "a tag used to represent small text for side comments or copyright information",
    Distractor1: "small text for div elements only",
    Distractor2: "small text for img tags only",
    Distractor3: "small text for h1 tags only",
    Explanation:
      "The small tag is used to represent small text for side comments or copyright information",
    Link: "https://www.freecodecamp.org/news/semantic-html5-elements/",
  },
  {
    Question: "What does SVG stand for?",
    Answer: "Scalable Vector Graphics",
    Distractor1: "Stretchable Vector Graphics",
    Distractor2: "Scalable Vectorial Graphics",
    Distractor3: "Screen Vector Graphics",
    Explanation: "SVG stands for Scalable Vector Graphics.",
    Link: "https://www.freecodecamp.org/news/use-svg-images-in-css-html/",
  },
  {
    Question:
      "In HTML, what is the character entity for the right single quote symbol?",
    Answer: "&rsquo;",
    Distractor1: "&lsquo;",
    Distractor2: "&rightquo;",
    Distractor3: "&rsquote;",
    Explanation:
      "The &rsquo; character entity is used to display the right single quote symbol in HTML.",
    Link: "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/",
  },
  {
    Question:
      "In HTML, what is the name of the tag that adds emphasis on a word or span of text?",
    Answer: "<em>",
    Distractor1: "<p>",
    Distractor2: "<i>",
    Distractor3: "<hr>",
    Explanation:
      "The <em> tag is used to add emphasis on a word or span of text in HTML.",
    Link: "https://www.freecodecamp.org/news/html-italics-tutorial-how-to-make-text-italic-with-the-i-tag/",
  },
  {
    Question:
      "In SQL, what is the constraint used in SQL to limit the range of values that can be placed in a column?",
    Answer: "CHECK",
    Distractor1: "RANGE",
    Distractor2: "RESTRICT",
    Distractor3: "VALIDATE",
    Explanation:
      "The CHECK constraint is used to limit the range of values that can be placed in a column.",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/",
  },
  {
    Question: "Which one is NOT a popular operating system for computers?",
    Answer: "PASSIM",
    Distractor1: "Microsoft Windows",
    Distractor2: "macOS",
    Distractor3: "Linux",
    Explanation:
      "Linux, Microsoft Windows and macOS are three popular operating systems used by developers.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/",
  },
  {
    Question: "What is the -m flag in Git?",
    Answer: "Shorthand for message",
    Distractor1: "Shorthand for main",
    Distractor2: "Shorthand for mistake",
    Distractor3: "Shorthand for merge",
    Explanation: "The -m flag in Git is shorthand for message.",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In Git, how do you set your email associated with your commits?",
    Answer: 'git config --global user.email "YOUR_EMAIL"',
    Distractor1: 'git config --global set email address "YOUR_EMAIL"',
    Distractor2: 'git config --email address "YOUR_EMAIL"',
    Distractor3: 'git create user email "YOUR_EMAIL"',
    Explanation:
      'In the command line, you can use git config --global user.email "YOUR_EMAIL" to set your email address in Git.',
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question:
      "In Python, what built-in function returns a reverse iterator that allows you to iterate over the elements of an iterable in reverse order?",
    Answer: "reversed()",
    Distractor1: "sorted()",
    Distractor2: "reversing()",
    Distractor3: "backwards()",
    Explanation:
      "The reversed() function returns a reverse iterator that you can use to iterate over an iterable in reverse order.",
    Link: "https://docs.python.org/3/library/functions.html#reversed",
  },
  {
    Question: "What's the difference between HTTP and HTTPS?",
    Answer: "HTTPS is the secure version of HTTP. It's HTTP with encryption.",
    Distractor1:
      "HTTP sends HyperText data between a web server and a web browser and HTTPS doesn't",
    Distractor2: "There is no difference",
    Distractor3: "SSL certificates are required for HTTP, but not for HTTPS",
    Explanation:
      "HTTPS is the secure version of HTTP, the basic network protocol for sending hypertext over the web. In HTTPS there are additional steps for security, such as TSL/SSL certificates and the TSL/SSL handshake.",
    Link: "https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/",
  },
  {
    Question:
      "In Python, what is the data type of the value returned by the input() function?",
    Answer: "String",
    Distractor1: "Integer",
    Distractor2: "Boolean",
    Distractor3: "List",
    Explanation:
      "The built-in function input() always returns a string. If you need to work with this value as a different data type, you will need to convert it.",
    Link: "https://www.freecodecamp.org/news/python-function-guide-with-examples/",
  },
  {
    Question: "What HTML tag is used to create a row in a table?",
    Answer: "<tr>",
    Distractor1: "<trow>",
    Distractor2: "<th>",
    Distractor3: "<td>",
    Explanation: "The <tr> tag is used to create a row in a table.",
    Link: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/",
  },
  {
    Question:
      "In Git, how can you change the text editor used to write commit messages?",
    Answer: "git config --global core.editor <editor>",
    Distractor1: "git config email <editor>",
    Distractor2: "git set editor <editor>",
    Distractor3: "git config <editor>",
    Explanation:
      "You can use git config --global core.editor <editor> to set the text editor that will be used to write commit messages and to work with Git in general.",
    Link: "https://www.freecodecamp.org/news/best-git-tutorial/",
  },
  {
    Question:
      "In Python, which of the following operators is NOT a bitwise operator?",
    Answer: "%",
    Distractor1: "&",
    Distractor2: "|",
    Distractor3: "~",
    Explanation:
      "% is the modulo operator in Python. The operators &, |, and ~ are bitwise operators.",
    Link: "https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/",
  },
  {
    Question:
      "In Git, how can you check for the status of your working directory?",
    Answer: "git status",
    Distractor1: "git check status",
    Distractor2: "git share status",
    Distractor3: "git show status",
    Explanation:
      "In the command line, you can use git status to check the current status of your working directory",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In HTML, how do you create a button using the <input> tag?",
    Answer: '<input type="button" value="Sample Button" />',
    Distractor1: '<input type="checkbox" value="Sample Button" />',
    Distractor2: '<input type="date" value="Sample Button" />',
    Distractor3: '<input type="color" value="Sample Button" />',
    Explanation:
      'You can create a button using the <input> tag and setting the type attribute to "button".',
    Link: "https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website/",
  },
  {
    Question:
      "In CSS Grid, what is the name of the CSS property used to position the grid inside the grid container along the x-axis?",
    Answer: "justify-content",
    Distractor1: "grid-template-areas",
    Distractor2: "grid-template-rows",
    Distractor3: "row-gap",
    Explanation:
      "The justify-content property is used to position the grid in the grid container along the x-axis.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "How many bits are there in an IPv6 address?",
    Answer: "128",
    Distractor1: "32",
    Distractor2: "126",
    Distractor3: "64",
    Explanation:
      "IPv6 is a 128-bit address, meaning that there are 2^128 addresses available.",
    Link: "https://www.freecodecamp.org/news/ipv4-vs-ipv6-what-is-the-difference-between-ip-addressing-schemes/",
  },
  {
    Question: "In Git, how do you create a new branch and switch to it?",
    Answer: "git checkout -b new-branch-name",
    Distractor1: "git create -b new-branch-name",
    Distractor2: "git change -b new-branch-name",
    Distractor3: "git create --change -b new-branch-name",
    Explanation:
      "In the command line, you can use git checkout -b new-branch-name to create a new branch and switch to it",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question:
      "In Python, what function returns True if all the elements of an iterable evaluate to True?",
    Answer: "all()",
    Distractor1: "any()",
    Distractor2: "none()",
    Distractor3: "zero()",
    Explanation:
      "The all() function returns True if all the elements of the iterable passed as an argument evaluate to True. Else, it returns False.",
    Link: "https://www.freecodecamp.org/news/python-any-and-all-functions-explained-with-examples/",
  },
  {
    Question:
      "In Linux, which command is used to display the NAME of the operating system?",
    Answer: "uname -o",
    Distractor1: "uname -r",
    Distractor2: "uname -k",
    Distractor3: "uname -u",
    Explanation: "The uname -o command prints the Operating System name",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command",
  },
  {
    Question: "In HTML, what is the main element?",
    Answer: "A tag used for the main content of the HTML page",
    Distractor1: "A tag used only to contain images",
    Distractor2: "A tag used to only contain links",
    Distractor3: "A tag used to only contain paragraphs",
    Explanation:
      "The main element is a semantic tag used to contain all of the main content of the HTML page",
    Link: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/",
  },
  {
    Question: "In CSS, what does the vh unit stand for?",
    Answer: "viewport height",
    Distractor1: "viewport width",
    Distractor2: "view heights",
    Distractor3: "viewing height",
    Explanation: "The vh unit stands for viewport height.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },
  {
    Question: "In HTML, what does the bdo element do?",
    Answer:
      "overrides the current direction and renders the text in a new direction",
    Distractor1: "highlights the current text",
    Distractor2: "deletes the current text",
    Distractor3: "only renders the text from left to right",
    Explanation:
      "The bdo element overrides the current direction and renders the text in a new direction",
    Link: "https://devdocs.io/html/element/bdo",
  },
  {
    Question: "In Python, are lists mutable or immutable?",
    Answer: "Mutable",
    Distractor1: "Immutable",
    Distractor2: "Neither Mutable or Immutable",
    Distractor3: "Both Mutable and Immutable",
    Explanation:
      "Lists are mutable built-in data structures in Python. This means that you can add new elements to a list, update the elements of a list, and remove elements from a list.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-data-types-and-built-in-data-structures-in-python",
  },
  {
    Question: "In JavaScript, what is the logical OR operator?",
    Answer: "||",
    Distractor1: "&&",
    Distractor2: "!",
    Distractor3: "**",
    Explanation: "|| is the logical OR operator in JavaScript.",
    Link: "https://www.freecodecamp.org/news/javascript-logical-operators/",
  },
  {
    Question:
      "Which one of these options is layer 1 in the Open Systems Interconnection (OSI) model?",
    Answer: "The physical layer",
    Distractor1: "The network layer",
    Distractor2: "The transport Layer",
    Distractor3: "The application layer",
    Explanation:
      "Layer 1 is the physical layer. There’s a lot of technology in Layer 1 - everything from physical network devices, cabling, to how the cables hook up to the devices.",
    Link: "https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/",
  },
  {
    Question: "What is a hyperlink?",
    Answer: "A web reference to data",
    Distractor1: "A piece of computer hardware",
    Distractor2: "An executable programming script",
    Distractor3: "A website",
    Explanation:
      "A hyperlink, also called a link or web link, contains an address for a destination and acts as a reference to data. A user can easily follow, jump to, and be directed to the destination by either clicking, tapping on, or hovering over the link.",
    Link: "https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-html-link-beginners/",
  },
  {
    Question: "What is a Boolean?",
    Answer: "A data type representing a true or false value.",
    Distractor1: "A data type representing a number.",
    Distractor2: "A programming language.",
    Distractor3: "A Python library.",
    Explanation:
      "In computer science, a Boolean is a data type which only has two possible values of true or false.",
    Link: "https://www.freecodecamp.org/news/boolean-definition/",
  },
  {
    Question:
      "Which hardware component has all of its data wiped when the power turns off? ",
    Answer: "RAM (Random Access Memory)",
    Distractor1: "HDD (Hard Disk Drive)",
    Distractor2: "SSD (Solid State Drive)",
    Distractor3: "CPU (Central Processing Unit)",
    Explanation:
      "RAM (short for Random Access Memory), or the main memory, is a volatile, short-term type of memory that only stores information temporarily while a computer is powered by electricity. It is used when you open and are using an application or file. When the power turns off, any files you created or updates you made and didn't save, will be lost and will be hard to retrieve.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/",
  },
  {
    Question: "In HTML, what does the datalist element do?",
    Answer: "provides a dropdown list of recommended options",
    Distractor1: "Provides a list of image tags",
    Distractor2: "Provides a dropdown list of tables",
    Distractor3: "Provides a list of paragraphs",
    Explanation:
      "The datalist element contains option tags and provides a dropdown list of recommended options",
    Link: "https://devdocs.io/html/element/datalist",
  },
  {
    Question:
      "In HTML, what is the name of the element that creates an area inside an image map?",
    Answer: "<area>",
    Distractor1: "<img>",
    Distractor2: "<blink>",
    Distractor3: "<bdo>",
    Explanation:
      "The <area> tag is used inside the <map> tag to create an area inside an image map with clickable areas.",
    Link: "https://devdocs.io/html/element/area",
  },
  {
    Question:
      "What chat tool does freeCodeCamp use for its main chat server?",
    Answer: "Discord",
    Distractor1: "Slack",
    Distractor2: "RocketChat",
    Distractor3: "Gitter",
    Explanation:
      "The freeCodeCamp contributor community communicates mostly through our active Discord server, and in the past have used RocketChat, Slack, and Gitter.",
    Link: "https://www.freecodecamp.org/news/freecodecamp-discord-chat-room-server/",
  },
  {
    Question:
      "In SQL, what aggregate function allows you to calculate the average of a numeric column from the set of rows returned by a query?",
    Answer: "AVG()",
    Distractor1: "COUNT()",
    Distractor2: "MINIMUM()",
    Distractor3: "AVERAGE()",
    Explanation:
      "The AVG() function is used to calculate the average of a column from the set of rows returned by a query.",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/",
  },
  {
    Question: "In Linux, which command verifies that an IP address exists?",
    Answer: "ping",
    Distractor1: "which",
    Distractor2: "uname",
    Distractor3: "chown",
    Explanation:
      "The ping command pings a specific network host, on the local network or on the Internet. It verifies IP level connectivity to another computer.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question:
      "What was JavaScript originally called when it was first released?",
    Answer: "Mocha",
    Distractor1: "LiveScript",
    Distractor2: "Java",
    Distractor3: "Netscape",
    Explanation:
      "When JavaScript first came out it was called Mocha, then later changed to LiveScript and finally settled on JavaScript.",
    Link: "https://www.freecodecamp.org/news/what-is-javascript-javascript-code-explained-in-plain-english/",
  },
  {
    Question: "In CSS, what is the screen media type in a CSS media query?",
    Answer: "A category of media that works for devices with screens.",
    Distractor1:
      "A category of media that works for media in print preview mode.",
    Distractor2: "A category of media that works for devices without screens.",
    Distractor3: "A category of media that only works for tablets.",
    Explanation: "The screen media type works for devices with screens.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "How many bytes make up a Petabyte?",
    Answer: "1 quadrillion bytes",
    Distractor1: "1 quintillion bytes",
    Distractor2: "1 hundred bytes",
    Distractor3: "1 million bytes",
    Explanation: "A Petabyte is composed of 1 quadrillion bytes",
    Link: "https://www.freecodecamp.org/news/petabyte-definition/",
  },
  {
    Question: "In HTML, how do you create a submit button?",
    Answer: '<input type="submit" value="Submit" />',
    Distractor1: '<input type="number" value="Submit" />',
    Distractor2: '<input type="email" value="Submit" />',
    Distractor3: '<input type="reset" value="Submit" />',
    Explanation:
      'You can create a submit button by using the <input> tag and setting the type attribute to "submit".',
    Link: "https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website/",
  },
  {
    Question:
      "In Linux, which command is used to copy the contents of one file to another one?",
    Answer: "cp",
    Distractor1: "rm ",
    Distractor2: "rmdir",
    Distractor3: "touching",
    Explanation: "You can copy a file using the cp command.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question: "In HTML, what does the <u> tag stand for?",
    Answer: "Unarticulated Annotation element",
    Distractor1: "Unarticulated Anchor element",
    Distractor2: "Unarticulated Aside element",
    Distractor3: "Unarticulated Article element",
    Explanation: "The <u> tag stands for Unarticulated Annotation element.",
    Link: "https://www.freecodecamp.org/news/html-underline-text-how-to-use-the-u-tag-with-example-code/",
  },
  {
    Question: "In CSS, what does the A in RGBA stand for?",
    Answer: "Alpha",
    Distractor1: "Alphabetical",
    Distractor2: "Ambiguous",
    Distractor3: "Ancient",
    Explanation:
      "The A in RGBA stands for Alpha. This value represents the transparency of the color.",
    Link: "https://devdocs.io/css/color_value/rgba()",
  },
  {
    Question: "In CSS Flexbox, which one is NOT used with align-items?",
    Answer: "align-middle",
    Distractor1: "flex-end",
    Distractor2: "flex-start",
    Distractor3: "baseline",
    Explanation:
      "In CSS Flexbox, some of the options for align-items include flex-start, flex-end, baseline and stretch",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question:
      'In Python, how can you check if the key "Nora" is in the "names" dictionary?',
    Answer: '"Nora" in names',
    Distractor1: 'names in "Nora"',
    Distractor2: '"Nora" is in names',
    Distractor3: 'names is in "Nora"',
    Explanation:
      'To check if a key is in a dictionary, first we write the key followed by in and then the name of the dictionary. In this case, the correct option is "Nora" in names.',
    Link: "https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/",
  },
  {
    Question:
      "In Python, what method takes an iterable as an argument and adds the elements of that iterable to a list as individual elements?",
    Answer: ".extend()",
    Distractor1: ".append()",
    Distractor2: ".join()",
    Distractor3: ".add()",
    Explanation:
      "The .extend() method takes an iterable as an argument and adds the elements of that iterable to a list as individual elements.",
    Link: "https://www.freecodecamp.org/news/python-list-append-vs-python-list-extend/",
  },
  {
    Question: "Which port is used for HTTP?",
    Answer: "80",
    Distractor1: "443",
    Distractor2: "40",
    Distractor3: "60",
    Explanation:
      "By default, HTTP uses Port-80 (HTTP stands for HyperText Transfer Protocol)",
    Link: "https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/",
  },
  {
    Question:
      "In JavaScript, what is the name of the method that returns true if at least one of the elements in an array passes the test implemented by the function provided?",
    Answer: ".some()",
    Distractor1: ".findIndex()",
    Distractor2: ".includes()",
    Distractor3: ".isArray()",
    Explanation:
      "The .some() method returns true if at least one of the elements in the array passes the test implemented by the function provided. ",
    Link: "https://www.freecodecamp.org/news/javascript-array-some-tutorial-how-to-iterate-through-elements-in-an-array/",
  },
  {
    Question: "What does DOM stand for?",
    Answer: "Document Object Model",
    Distractor1: "Data Object Model",
    Distractor2: "Document Online Model",
    Distractor3: "Document Object Mainframe",
    Explanation: "DOM stands for Document Object Model.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
  },
  {
    Question: "What does Mbps stand for?",
    Answer: "Megabits per second",
    Distractor1: "Megabytes per second",
    Distractor2: "Megabits per sound",
    Distractor3: "Megabytes per system",
    Explanation: "Mbps stands for Megabits per second, not to be confused with MBps (with a capital B) that stands for Megabytes per second.",
    Link: "https://en.wikipedia.org/wiki/Data-rate_units#Megabit_per_second",
  },
  {
    Question:
      "In SQL, a structured set of data stored in a computer designed for efficient storage, retrieval, and maintenance is known as...",
    Answer: "Database",
    Distractor1: "Dataset",
    Distractor2: "Query",
    Distractor3: "Table",
    Explanation:
      "A database is a structured set of data stored in a computer designed for efficient storage, retrieval, and maintenance.",
    Link: "https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/",
  },
  {
    Question:
      "In Python, the integer used to refer to a character in a string or an element in a list or tuple is known as an...",
    Answer: "index",
    Distractor1: "integer",
    Distractor2: "location",
    Distractor3: "position",
    Explanation:
      "Strings, lists, tuples, and other sequences in Python have indices, which are integers used to refer to its elements. ",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-data-types-and-built-in-data-structures-in-python",
  },
  {
    Question:
      "In CSS, what does the repeat-x value do in the background-repeat property?",
    Answer: "It repeats the image along the x-axis.",
    Distractor1: "It repeats the image along the y-axis.",
    Distractor2: "It repeats the image along the z-axis.",
    Distractor3: "It repeats the image along both of the x-axis and y-axis.",
    Explanation:
      "The repeat-x value of the background-repeat property repeats the image along the x-axis.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question:
      "In HTML, what is the correct code for linking a CSS stylesheet to an HTML file?",
    Answer: '<link rel="stylesheet" src="style.css">',
    Distractor1: '<anchor rel="stylesheet" src="style.css">',
    Distractor2: '<links rel="stylesheet" src="style.css"></links>',
    Distractor3: '<a rel="stylesheet" src="style.css"></a>',
    Explanation:
      "The <link> tag is used to link your CSS stylesheet to your HTML file.",
    Link: "https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/",
  },
  {
    Question:
      "Which layer of the Open Systems Interconnection (OSI) model is responsible for error detection?",
    Answer: "The data link layer",
    Distractor1: "The transport layer",
    Distractor2: "The network layer",
    Distractor3: "The physical layer",
    Explanation:
      "The data link layer is layer 2 in the Open Systems Interconnection (OSI) model. Layer 2 defines how data is formatted for transmission, how much data can flow between nodes, for how long, and what to do when errors are detected in this flow.",
    Link: "https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/",
  },
  {
    Question: "In Linux, which command is used to compress files?",
    Answer: "gzip",
    Distractor1: "tar",
    Distractor2: "chown",
    Distractor3: "diff",
    Explanation: "The gzip command is used to compress a file to save space",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-gzip-command",
  },
  {
    Question: "In CSS Flexbox, which one is NOT used with align-content?",
    Answer: "align-bottom",
    Distractor1: "center",
    Distractor2: "space-around",
    Distractor3: "stretch",
    Explanation:
      "In CSS Flexbox, some of the options for align-content include center, stretch, space-around and space-between",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question: "In CSS, how is the comma operator used in a media query?",
    Answer:
      "It separates multiple media features by commas and it applies the styles inside the curly braces if one of the conditions is true.",
    Distractor1:
      "It reverses a true query into a false query and a false query into a true query.",
    Distractor2: "It joins multiple media features.",
    Distractor3: "It splits media queries into separate ones.",
    Explanation:
      "The comma operator is used to separate multiple media features by commas and to apply the styles inside the curly braces if one of the conditions is true.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "What CPU component is responsible for comparing data?",
    Answer: "The Arithmetic Logic Unit",
    Distractor1: "The Control Unit",
    Distractor2: "Registers",
    Distractor3: "RAM",
    Explanation:
      "The ALU (short for Arithmetic Logic Unit), is the part where all mathematical calculations take place, such as addition, subtraction, multiplication, and division. The ALU is also responsible for all of the logical operations for decision making, such as comparing data.",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/",
  },
  {
    Question: "In HTML, what tag is used to create a form?",
    Answer: "<form>",
    Distractor1: "<f>",
    Distractor2: "<th>",
    Distractor3: "<table>",
    Explanation: "The <form> tag is used to create a form. ",
    Link: "https://www.freecodecamp.org/news/html-form-input-type-and-submit-button-example/",
  },
  {
    Question: "In HTML, what is the type attribute in the link tag?",
    Answer: "describes the type of content for the linked document",
    Distractor1: "provides descriptive text for an img",
    Distractor2: "opens up the link tag in another browser window",
    Distractor3: "provides the width and height for a link tag",
    Explanation:
      "The type attribute describes the type of content for the linked document",
    Link: "https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/",
  },
  {
    Question: "In what year was the Linux Operating System created?",
    Answer: "1991",
    Distractor1: "1990",
    Distractor2: "1989",
    Distractor3: "1992",
    Explanation:
      "Linus Torvalds created Linux as a college student in Finland in 1991.",
    Link: "https://www.freecodecamp.org/news/linux-is-25-yay-lets-celebrate-with-25-rad-facts-about-linux-c8d8ac30076d/",
  },
  {
    Question: "What is the committed state in Git?",
    Answer:
      "all of the files have been saved to the local repo and are ready to be pushed to the remote repo",
    Distractor1: "the files need to be saved to the local repo",
    Distractor2: "the files have been successfully pushed to the remote repo",
    Distractor3: "the files have been deleted from the local repo",
    Explanation:
      "The committed state is when all of the files have been saved to the local repo and are ready to be pushed to the remote repo",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In JavaScript, what is the logical NOT operator?",
    Answer: "!",
    Distractor1: "&&",
    Distractor2: "||",
    Distractor3: "%",
    Explanation: "! is the logical NOT operator in JavaScript.",
    Link: "https://www.freecodecamp.org/news/javascript-logical-operators/",
  },
  {
    Question:
      "In HTML, what attribute can you add to <input> to define a range of valid values for the user input?",
    Answer: 'type="range"',
    Distractor1: 'type="r"',
    Distractor2: 'type="maxmin"',
    Distractor3: 'type="number"',
    Explanation:
      'The type="range" attribute is used to create an input field that takes a numerical value within a certain range.',
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range",
  },
  {
    Question: "In HTML, what is the character entity for the trademark symbol?",
    Answer: "&trade;",
    Distractor1: "&trademark;",
    Distractor2: "&tmark;",
    Distractor3: "&trademk;",
    Explanation:
      "The &trade; character entity is used to display the trademark symbol in HTML.",
    Link: "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/",
  },
  {
    Question: "In HTML, what are the html tags?",
    Answer: "root element that contains all other HTML tags",
    Distractor1: "an element that only contains all paragraph tags",
    Distractor2: "an element that only contains all image tags",
    Distractor3: "an element that only contains anchor tags",
    Explanation:
      "The html tag is the root level element that contains all of the other HTML elements",
    Link: "https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/",
  },
  {
    Question: "What does HTTPS stand for?",
    Answer: "HyperText Transfer Protocol Secure",
    Distractor1: "HyperText Transfer Protocol Standard",
    Distractor2: "HyperTransfer Text Protocol Secure",
    Distractor3: "HyperText Transfer Protocol Set",
    Explanation:
      "HTTPS is a secure way of transferring data between a web server and a web browser",
    Link: "https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/",
  },
  {
    Question: "In HTML, which element contains the select tag?",
    Answer: "form tag",
    Distractor1: "anchor tag",
    Distractor2: "img tag",
    Distractor3: "footer tag",
    Explanation:
      "The select tag is nested inside the form tag so the data can be sent to the server when the form is submitted.",
    Link: "https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/",
  },
  {
    Question:
      "In SQL, a computer programming language used for inserting, deleting, and updating data in a database is known as a...",
    Answer: "Data Manipulation Language",
    Distractor1: "Data Definition Language",
    Distractor2: "Data Control Language",
    Distractor3: "Data Storage Language",
    Explanation:
      "A computer programming language used for inserting, deleting, and updating data in a database is known as a Data Manipulation Language.",
    Link: "https://en.wikipedia.org/wiki/Data_manipulation_language",
  },
  {
    Question: 'What is the main component, the "core", of Linux?',
    Answer: "The kernel",
    Distractor1: "The shell",
    Distractor2: "The commands",
    Distractor3: "The terminal window",
    Explanation:
      "The main component of linux and its core is the kernel. It's the interface between the Operating System and all the hardware components and it manages all the processes.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#introductiontolinuxandshells",
  },
  {
    Question:
      "In CSS, what value should be assigned to the text-decoration property to remove an underline from links?",
    Answer: "none",
    Distractor1: "underline",
    Distractor2: "overline",
    Distractor3: "line-through",
    Explanation:
      "The property text-decoration should have the value of none to remove an underline from links.",
    Link: "https://www.freecodecamp.org/news/how-to-style-links-in-css/",
  },
  {
    Question:
      "In SQL, what is the command used to order the results in ascending or descending order?",
    Answer: "ORDER BY",
    Distractor1: "SORT BY",
    Distractor2: "ASCENDING",
    Distractor3: "DESCENDING",
    Explanation:
      "The ORDER BY command is used in SQL to sort the results in ascending or descending order.",
    Link: "https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/",
  },
  {
    Question: "What is a Subnet?",
    Answer: "A smaller network that is nested inside a large network.",
    Distractor1: "A protocol that sends and receives data from a remote device",
    Distractor2:
      "A protocol that assures accurate time by referring to clocks on the internet",
    Distractor3: "A feature that allows users to access remote services",
    Explanation:
      "A Subnet is a smaller network that is nested inside a large network.",
    Link: "https://www.freecodecamp.org/news/subnet-definition/",
  },
  {
    Question: "What is an infinite loop?",
    Answer:
      "A loop that will continue endlessly unless an external intervention stops its execution. ",
    Distractor1: "A loop that only completes two iterations.",
    Distractor2:
      "A loop that cannot be stopped, even with external intervention. ",
    Distractor3: "A loop that never runs.",
    Explanation:
      "An infinite loop is a loop whose condition is always true, so it will continue running endlessly unless there is some external intervention to stop it.",
    Link: "https://www.freecodecamp.org/news/python-while-loop-tutorial/",
  },
  {
    Question: "In HTML, what tag is used to italicize text?",
    Answer: "<i>",
    Distractor1: "<b>",
    Distractor2: "<span>",
    Distractor3: "<li>",
    Explanation: "The <i> tag displays text in italic.",
    Link: "https://www.freecodecamp.org/news/html-italics-tutorial-how-to-make-text-italic-with-the-i-tag/",
  },
  {
    Question: "In Python, what is the addition assignment operator?",
    Answer: " +=",
    Distractor1: " =+",
    Distractor2: " +",
    Distractor3: "==",
    Explanation:
      "The += operator lets you add a value (right operand) to the current value of a variable and store the result of the calculation in the same variable (left operand). This is shorter than using + and then = separately.",
    Link: "https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/",
  },
  {
    Question: "In Python, what is the meaning of PEP?",
    Answer: "Python Enhancement Proposal",
    Distractor1: "Python Experimentation Platform",
    Distractor2: "Python Excellent Performance",
    Distractor3: "Python Environmental Protection",
    Explanation:
      "In the context of Python, PEP means Python Enhancement Proposal. A PEP is a design document that provides information to the Python community, or describes a new feature for Python or its processes or environment.",
    Link: "https://www.python.org/dev/peps/pep-0001/#what-is-a-pep",
  },
  {
    Question: "In CSS, what are the conditions that decide if a media rule is applied?",
    Answer: "Breakpoints",
    Distractor1: "Breaks",
    Distractor2: "Points",
    Distractor3: "Keys",
    Explanation:
      "A breakpoint is a key to determine when to change the layout and adapt the new rules inside the media queries.",
    Link: "https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/",
  },
  {
    Question:
      "In CSS, the amount of space between an element's border and its surrounding elements is known as...",
    Answer: "Margin",
    Distractor1: "Padding",
    Distractor2: "White Space",
    Distractor3: "Indentation",
    Explanation:
      "The margin is the amount of space between an element's border and its surrounding elements.",
    Link: "https://www.freecodecamp.org/news/css-margins/",
  },
  {
    Question:
      "In HTML, what is the name of the method used to find elements that match one of more selectors?",
    Answer: ".querySelector()",
    Distractor1: ".textContent()",
    Distractor2: ".padEnd()",
    Distractor3: "Optional chaining",
    Explanation:
      "The .querySelector() method is used to find elements in the DOM that match one of more selectors.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
  },
  {
    Question: "In Python, what is the correct way to write Boolean values?",
    Answer: "True/False",
    Distractor1: "true/false",
    Distractor2: "TRUE/FALSE",
    Distractor3: "tRuE/FaLsE",
    Explanation:
      "In Python, we have to write Boolean values like this: True and False. If we don't write them like this, they will not be recognized as keywords in the program. ",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/",
  },
  {
    Question: "In SQL, what does DCL stand for?",
    Answer: "Data Control Language",
    Distractor1: "Data Manipulation Language",
    Distractor2: "Data Definition Language",
    Distractor3: "Data Concato Language",
    Explanation: "DCL stands for Data Control Language.",
    Link: "https://en.wikipedia.org/wiki/Data_control_language",
  },
  {
    Question: "In HTML, what is an aside element?",
    Answer: "An HTML element typically used for sidebar information",
    Distractor1: "An HTML element typically used for footer information",
    Distractor2: "An HTML element typically used for header information",
    Distractor3: "An HTML element typically used for links",
    Explanation:
      "An aside is an HTML element typically used for sidebar information",
    Link: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/",
  },
  {
    Question: "In Python, what is the “less than” operator?",
    Answer: "<",
    Distractor1: ">",
    Distractor2: "<=",
    Distractor3: ">=",
    Explanation:
      "The “less than” operator is < in Python. It returns True if the value on the left is less than the value on the right. We can also use it to compare strings in alphabetical order.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
  },
  {
    Question: "Which one is NOT an internal piece of hardware in a computer?",
    Answer: "GAMMA",
    Distractor1: "motherboard",
    Distractor2: "Central Processing Unit",
    Distractor3: "Graphics Processing Unit",
    Explanation:
      "Some important pieces of a computer's internal hardware include a motherboard, CPU, GPU, RAM and HDD.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/",
  },
  {
    Question: "In Linux, what does .. mean in a directory path?",
    Answer: "Refers to the parent folder",
    Distractor1: "Refers to the current folder",
    Distractor2: "Refers to no directory",
    Distractor3: "Refers to the root of the file structure",
    Explanation:
      "The .. is a special path and means one level up. It refers to the the parent directory.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question:
      "In CSS, what is the name of the property that determines if the background image is in a scroll, fixed, or local position?",
    Answer: "background-attachment",
    Distractor1: "background-origin",
    Distractor2: "background-clip",
    Distractor3: "background-position",
    Explanation:
      "The background-attachment property is used to determine if the background image is in a scroll, fixed, or local position.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question: "In Python, what keyword is used to return a value from a function?",
    Answer: "return",
    Distractor1: "pass",
    Distractor2: "continue",
    Distractor3: "break",
    Explanation:
      "The return keyword is used to return a value from a function.This terminates the execution of the function to return the value.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-functions-in-python",
  },
  {
    Question:
      "In Python, which one of these operators has the highest precedence?",
    Answer: "**",
    Distractor1: "/",
    Distractor2: "*",
    Distractor3: "and",
    Explanation:
      "The exponentiation operator ** has the highest precedence of these four options.",
    Link: "https://docs.python.org/3/reference/expressions.html#operator-precedence",
  },
  {
    Question:
      "In Vim, which command is used for exiting AND saving the changes you made on a file?",
    Answer: ":wq",
    Distractor1: ":q!",
    Distractor2: ":h",
    Distractor3: ":j",
    Explanation:
      "If you made some changes and would like to keep them, type :wq(short for write and quit) and press Enter/return.",
    Link: "https://www.freecodecamp.org/news/how-to-exit-vim/",
  },
  {
    Question:
      "In HTML, what is the name of the element that connects content to a machine-readable translation?",
    Answer: "<data>",
    Distractor1: "<del>",
    Distractor2: "<dd>",
    Distractor3: "<dt>",
    Explanation:
      "The <data> element is used to connect content to a machine-readable translation.",
    Link: "https://devdocs.io/html/element/data",
  },
  {
    Question: "In CSS, what do H, S, and L in HSL stand for?",
    Answer: "Hue, Saturation, Lightness",
    Distractor1: "Hue, Saturation, Lightning",
    Distractor2: "Hue, Style, Lightness",
    Distractor3: "Habitat, Style, Lightness",
    Explanation: "HSL stands for Hue, Saturation, and Lightness.",
    Link: "https://www.freecodecamp.org/news/css-font-color-how-to-style-text-in-html/",
  },
  {
    Question:
      "In SQL, what type of join returns all the records from the right table and the matching records from the left table?",
    Answer: "RIGHT OUTER JOIN",
    Distractor1: "LEFT OUTER JOIN",
    Distractor2: "FULL OUTER JOIN",
    Distractor3: "INNER JOIN",
    Explanation:
      "A RIGHT OUTER JOIN returns all the records from the right table and the matching records from the left table.",
    Link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-sql-join-statements/",
  },
  {
    Question:
      "In Python, what logical operator returns True if any of the operands are True?",
    Answer: "or",
    Distractor1: "and",
    Distractor2: "not",
    Distractor3: "console",
    Explanation:
      "The or operator returns True if any of the operands is True. ",
    Link: "https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/",
  },
  {
    Question:
      "Each one of the alternative sequence of statements in a conditional statement is known as...",
    Answer: "Branch",
    Distractor1: "Decision",
    Distractor2: "Path",
    Distractor3: "Loop",
    Explanation:
      "Each one of the alternative sequence of statements in a conditional statement is known as a branch.",
    Link: "https://www.freecodecamp.org/news/python-if-else-statement-conditional-statements-explained/",
  },
  {
    Question: "What does WWW stand for?",
    Answer: "World Wide Web",
    Distractor1: "World Web Wide",
    Distractor2: "Wide World Web",
    Distractor3: "World World Web",
    Explanation: "WWW stands for World Wide Web.",
    Link: "https://www.britannica.com/topic/World-Wide-Web",
  },
  {
    Question:
      "In Python, what function can you call to get interactive help on writing Python programs and using Python modules?",
    Answer: "help()",
    Distractor1: "please()",
    Distractor2: "helpme()",
    Distractor3: "assistance()",
    Explanation:
      "The help() function can be called in Python to get interactive help on writing Python programs and using Python modules.",
    Link: "https://docs.python.org/3/library/functions.html#help",
  },
  {
    Question:
      "In Git, how can you list all the local branches in your repository?",
    Answer: "git branch",
    Distractor1: "git list",
    Distractor2: "git ls",
    Distractor3: "git branches",
    Explanation:
      "You can use git branch to list all the local branches in the repository. ",
    Link: "https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/",
  },
  {
    Question:
      "In CSS, which one of these values is NOT used for the background-repeat property?",
    Answer: "repeat-z-axis",
    Distractor1: "no-repeat",
    Distractor2: "repeat",
    Distractor3: "repeat-x",
    Explanation:
      "The background-repeat property can take in seven values include no-repeat, repeat, repeat-x and repeat-y",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question: "In HTML, what attribute should you add to <input> to create a checkbox?",
    Answer: 'type="checkbox"',
    Distractor1: 'type="radio"',
    Distractor2: 'type="check"',
    Distractor3: 'type="button"',
    Explanation:
      'To create a checkbox, you must add type="checkbox" to the <input> tag.',
    Link: "https://devdocs.io/html/element/input/checkbox",
  },
  {
    Question:
      "In awk, how do you print all columns in a file named demo.txt?",
    Answer: "awk '{print $0}' demo.txt",
    Distractor1: "awk '{print $1}' demo.txt",
    Distractor2: "awk '{print $1, $2}' demo.txt",
    Distractor3: "awk '/^print/' demo.txt",
    Explanation:
      "To print all columns in a file you can use the awk command. The action you specify inside the curly braces is print $0.",
    Link: "https://www.freecodecamp.org/news/the-linux-awk-command-linux-and-unix-usage-syntax-examples/",
  },
  {
    Question: "What is a character entity?",
    Answer: "Code used to display reserved HTML characters on the page.",
    Distractor1: "Code used to change the color for HTML characters.",
    Distractor2: "Code used to change the font for HTML characters.",
    Distractor3: "Code used to change the width of HTML characters.",
    Explanation:
      "Character entities allow you to display reserved HTML characters in your document.",
    Link: "https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/",
  },
  {
    Question: "What is the grep command used for?",
    Answer: "Searching through text in the given file",
    Distractor1: "Move the contents of a file to another one",
    Distractor2: "Rename the file",
    Distractor3: "Delete all text in a file",
    Explanation:
      "grep stands for Globally Search For Regular Expression and Print out. It is a command line tool used in UNIX and Linux systems to search a specified pattern in a file or group of files.",
    Link: "https://www.freecodecamp.org/news/grep-command-tutorial-how-to-search-for-a-file-in-linux-and-unix/",
  },
  {
    Question: "In Linux, which command is used to rename files and folders?",
    Answer: "mv",
    Distractor1: "touch",
    Distractor2: "mkdir",
    Distractor3: "rm",
    Explanation:
      "You rename files and folders by using the mv(short for move)  command.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question: "In Linux, what does the ls -a command do?",
    Answer: "lists out the directories and files - including all hidden files",
    Distractor1: "lists only the hidden files",
    Distractor2: "lists files and then deletes them",
    Distractor3: "show deleted files",
    Explanation:
      "The ls -a(short for all) command lists all directories(folders) and files in the current directory. This includes all hidden files. The -a flag(or option) shows hidden files. Hidden files are files that start with a dot (.)",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#introductiontolinuxandshells",
  },
  {
    Question:
      "In Linux, which command is used to change the owner of a file/directory?",
    Answer: "chown",
    Distractor1: "uname",
    Distractor2: "whoami",
    Distractor3: "echo",
    Explanation:
      "Every file/directory in an Operating System like Linux or macOS (and every UNIX system in general) has an owner. The owner of a file can do everything with it. It can decide the fate of that file. The owner (and the root user) can change the owner to another user, too, using the chown command.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question:
      "In HTML, which tag is used to represent the main content of a website?",
    Answer: "<main>",
    Distractor1: "<dom>",
    Distractor2: "<content>",
    Distractor3: "<con>",
    Explanation:
      "The <main> tag is used in HTML to represent the dominant content of a website.",
    Link: "https://devdocs.io/html/element/main",
  },
  {
    Question: "In CSS, how do you make an image circular or oval?",
    Answer: "border-radius: 50%;",
    Distractor1: "border-radius: 10%;",
    Distractor2: "border-radius: 0;",
    Distractor3: "border-radius: 3px;",
    Explanation:
      "You can use the CSS property border-radius with a value of 50% to make an image circular or oval.",
    Link: "https://devdocs.io/css/border-radius",
  },
  {
    Question:
      "In JavaScript, what is the name of the process that moves variables, functions, and classes to the top of the scope?",
    Answer: "Hoisting",
    Distractor1: "Setter",
    Distractor2: "Break",
    Distractor3: "Await",
    Explanation:
      "Hoisting is the process of moving variables, classes, and functions to the top of the scope.",
    Link: "https://www.freecodecamp.org/news/what-is-hoisting-in-javascript/",
  },
  {
    Question: "In HTML, which tag is used to create a description list?",
    Answer: "<dl>",
    Distractor1: "<del>",
    Distractor2: "<des>",
    Distractor3: "<d>",
    Explanation: "The <dl> tag is used to create a description list in HTML.",
    Link: "https://www.freecodecamp.org/news/html-list-how-to-use-bullet-points-ordered-and-unordered-lists/",
  },
  {
    Question: "In JavaScript, what are the three ways to declare a variable?",
    Answer: "var, let, const",
    Distractor1: "variable, let, const",
    Distractor2: "var, let-var, const",
    Distractor3: "var, concat, let",
    Explanation:
      "In JavaScript, you can declare variables using var, let or const.",
    Link: "https://www.freecodecamp.org/news/javascript-interview-prep-cheatsheet/",
  },
  {
    Question: "In CSS, how do you make all of the text for an element uppercase?",
    Answer: "text-transform: uppercase;",
    Distractor1: "text-transform: toUpper;",
    Distractor2: "text-transform: upper;",
    Distractor3: "text-transform: set-upper;",
    Explanation:
      "You can use the text-transform: uppercase; to make all of the text for that element uppercase",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/",
  },
  {
    Question: "In HTML, what is a div tag?",
    Answer: "A generic block level container for grouping content",
    Distractor1: "A container used to only group images",
    Distractor2: "A container used to only group headings",
    Distractor3: "A container used to only group code elements",
    Explanation:
      "The div tag is a generic container for grouping content in the HTML page",
    Link: "https://www.freecodecamp.org/news/span-vs-div-html-tags-what-is-the-difference/",
  },
  {
    Question: "In CSS, what is the print media type in a CSS media query?",
    Answer:
      "A category of media that works for devices where the media is in print preview mode.",
    Distractor1: "A type of media only for 4k monitors.",
    Distractor2: "A type of media that only works for desktop computers.",
    Distractor3: "A set of rules only applied to mobile devices.",
    Explanation:
      "The print media type works for devices where the media is in print preview mode.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "In HTML, what are the head tags?",
    Answer: "a tag that contains metadata for a website",
    Distractor1: "a tag that contains table cells for a table",
    Distractor2: "a tag that contains header elements",
    Distractor3: "a tag that contains navigation links",
    Explanation:
      "The head tags contain metadata including title and stylesheets for a website",
    Link: "https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/",
  },
  {
    Question:
      "In Linux, which keyboard shortcut will stop running the ping command?",
    Answer: "Ctrl-C",
    Distractor1: "command-D",
    Distractor2: "ctrl-D",
    Distractor3: "exit",
    Explanation:
      "The ping command, keeps sending multiple requests every second, by default. It will keep running until you stop it with Ctrl-C.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
  },
  {
    Question: "What is the main purpose of CSS in a website?",
    Answer: "Style",
    Distractor1: "Structure",
    Distractor2: "Functionality",
    Distractor3: "Sound",
    Explanation:
      "CSS is used to define the style of the elements in a website.",
    Link: "https://www.freecodecamp.org/news/best-css-and-css3-tutorial/",
  },
  {
    Question: "In SQL, the values of a table are known as...",
    Answer: "Fields",
    Distractor1: "API",
    Distractor2: "Query",
    Distractor3: "Database",
    Explanation: "The values of a SQL database table are known as fields.",
    Link: "https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/",
  },
  {
    Question:
      "In HTML, what is the character entity for the left double quote symbol?",
    Answer: "&ldquo;",
    Distractor1: "&leftdouble;",
    Distractor2: "&ldquotes;",
    Distractor3: "&ldoublequo;",
    Explanation:
      "The &ldquo; character entity is used to display the left double quote symbol in HTML.",
    Link: "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/",
  },
  {
    Question:
      "In JavaScript, what keyword is used to declare a variable that can only be used in the scope of declaration?",
    Answer: "let",
    Distractor1: "splice",
    Distractor2: "concat",
    Distractor3: "block",
    Explanation:
      "In JavaScript, you can use let to declare a variable that can only be used in the scope of declaration.",
    Link: "https://www.freecodecamp.org/news/javascript-variables-beginners-guide/",
  },
  {
    Question: "What does CSS stand for?",
    Answer: "Cascading Style Sheets",
    Distractor1: "Complex Style Sheets",
    Distractor2: "Complete Synchronizes Sheets",
    Distractor3: "Community Stylish System",
    Explanation: "CSS stands for Cascading Style Sheets.",
    Link: "https://www.freecodecamp.org/news/best-css-and-css3-tutorial/",
  },
  {
    Question: "What does UDP stand for?",
    Answer: "User Datagram Protocol",
    Distractor1: "Unified Datagram Protocol",
    Distractor2: "User Database Protocol",
    Distractor3: "User Datagram Patch",
    Explanation:
      'User Datagram Protocol of "UDP" is a type of connectionless protocol online.',
    Link: "https://www.freecodecamp.org/news/tcp-vs-udp/",
  },
  {
    Question: "In HTML, what does the size attribute do in the select tag?",
    Answer: "sets the number of options shown on default",
    Distractor1: "sets the width of the select tag",
    Distractor2: "sets the height of the select tag",
    Distractor3: "sets the width and height of the select tag",
    Explanation:
      "The size attribute sets the number of options shown on default inside the select dropdown menu",
    Link: "https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/",
  },
  {
    Question: "In HTML, which value of the target attribute opens a link in a new tab?",
    Answer: "_blank",
    Distractor1: "_parent",
    Distractor2: "_self",
    Distractor3: "_top",
    Explanation:
      "By default the browser opens links in the same tab. You can add the target attribute to the opening <a> tag with the value _blank to open the link in a new tab.",
    Link: "https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-html-link-beginners/",
  },
  {
    Question: "In HTML, what tag is used for creating a hyperlink?",
    Answer: "<a>",
    Distractor1: "<hyperlink>",
    Distractor2: "<href>",
    Distractor3: "<link>",
    Explanation:
      "You create links by using an opening <a> and closing </a> tag.",
    Link: "https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-html-link-beginners/",
  },
  {
    Question: "In CSS, how is the not operator used in a media query?",
    Answer:
      "It reverses a true query into a false query and a false query into a true query.",
    Distractor1: "It joins multiple media features.",
    Distractor2: "It splits media queries into separate ones.",
    Distractor3: "It separates multiple media features by commas.",
    Explanation:
      "The not operator is used to reverse a true query into a false query and a false query into a true query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question:
      "In CSS, what is the name of the property used to change the origin of the background image?",
    Answer: "background-origin",
    Distractor1: "background-position",
    Distractor2: "background-clip",
    Distractor3: "background-color",
    Explanation:
      "The background-origin property is used to set the origin of the background image.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question:
      "In HTML, what is the name of the attribute that allows you to set an element's tab position?",
    Answer: "tabindex",
    Distractor1: "style",
    Distractor2: "hover",
    Distractor3: "name",
    Explanation:
      "You can use the tabindex attribute to set an element's tab position",
    Link: "https://www.freecodecamp.org/news/html-roving-tabindex-attribute-explained-with-examples/",
  },
  {
    Question: "In Python, what is the modulo operator?",
    Answer: "%",
    Distractor1: "//",
    Distractor2: "/",
    Distractor3: "^",
    Explanation:
      "The modulo operator in Python is %. It returns the remainder of dividing the left hand operand by right hand operand.",
    Link: "https://www.freecodecamp.org/news/the-python-modulo-operator-what-does-the-symbol-mean-in-python-solved/",
  },
  {
    Question:
      "In SQL, this is part of a query that determines which columns of data to show in the results.",
    Answer: "SELECT",
    Distractor1: "TABLE",
    Distractor2: "CREATE",
    Distractor3: "QUERY",
    Explanation: "SELECT determines which columns will be shown in the result.",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/",
  },
  {
    Question: "In CSS, what is the role of media queries?",
    Answer: "They help create responsive websites",
    Distractor1: "They create links to other webpages",
    Distractor2: "They add interactivity to a static webpage",
    Distractor3: "They change the font of text",
    Explanation:
      "CSS media queries allow you to create responsive websites across all screen sizes, ranging from desktop to mobile",
    Link: "https://www.freecodecamp.org/news/learn-css-media-queries-by-building-projects/",
  },
  {
    Question: "In SQL, an individual entry in a table of a database is known as...",
    Answer: "Record/Row",
    Distractor1: "Column",
    Distractor2: "Cell",
    Distractor3: "Query",
    Explanation:
      "An individual entry in a table of a database table is known as record or row.",
    Link: "https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/",
  },
  {
    Question: "In HTML, it is recommended to write HTML tags in...",
    Answer: "Lowercase",
    Distractor1: "Uppercase",
    Distractor2: "camelCase",
    Distractor3: "snake_case",
    Explanation: "It is recommended to write HTML tags in lowercase.",
    Link: "https://www.freecodecamp.org/news/the-html-handbook/",
  },
  {
    Question: "How many bytes make up a Yottabyte?",
    Answer: "1 septillion bytes",
    Distractor1: "1 thousand bytes",
    Distractor2: "1 million bytes",
    Distractor3: "1 billion bytes",
    Explanation: "A Yottabyte is made up of 1 septillion bytes",
    Link: "https://www.freecodecamp.org/news/yottabyte-definition/",
  },
  {
    Question:
      "In JavaScript, what method joins all of the elements of an array into a string?",
    Answer: ".join()",
    Distractor1: ".char()",
    Distractor2: ".fill()",
    Distractor3: ".every()",
    Explanation:
      "The .join() method joins all of the elements of an array into a string.",
    Link: "https://devdocs.io/javascript/global_objects/array/join",
  },
  {
    Question: "In CSS, what is an at-rule?",
    Answer:
      "A rule that dictates what the CSS will look like based on certain conditions.",
    Distractor1: "A rule that dictates how to format the HTML.",
    Distractor2: "A rule that dictates javascript functions.",
    Distractor3: "A rule that only applies to how <p> elements are styled.",
    Explanation:
      "An at-rule in CSS will dictate what the CSS will look like based on certain conditions.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "In HTML, what does the <dl> tag stand for?",
    Answer: "Description List",
    Distractor1: "Data List",
    Distractor2: "Dialog List",
    Distractor3: "Details List",
    Explanation:
      "The <dl> tag stands for Description List and is commonly used in glossaries",
    Link: "https://devdocs.io/html/element/dl",
  },
  {
    Question:
      "In JavaScript, what method adds an element to the beginning of an array?",
    Answer: ".unshift()",
    Distractor1: ".push()",
    Distractor2: ".pop()",
    Distractor3: ".shift()",
    Explanation:
      "The .unshift() method adds the element passed as an argument to the beginning of an array.",
    Link: "https://www.freecodecamp.org/news/the-javascript-array-handbook/",
  },
  {
    Question:
      "Select the type of loop that repeats a sequence of instructions an unknown number of times while a condition is True. ",
    Answer: "While loop",
    Distractor1: "For loop",
    Distractor2: "Infinite loop",
    Distractor3: "Circular loop",
    Explanation:
      "While loops repeat a block of code an unknown number of times while a condition is True and they stop when the condition is False. ",
    Link: "https://www.freecodecamp.org/news/python-while-loop-tutorial/",
  },
  {
    Question: "What does HTML stand for?",
    Answer: "HyperText Markup Language",
    Distractor1: "Hyper Text Marked Language",
    Distractor2: "Hyper Text Marked Links",
    Distractor3: "Hyper Text Machine Language",
    Explanation: "HTML stands for HyperText Markup Language",
    Link: "https://www.freecodecamp.org/news/html-crash-course/",
  },
  {
    Question:
      "In JavaScript, What is the name of the method that converts all of the letters in a string to uppercase?",
    Answer: "toUpperCase",
    Distractor1: "toLowerCase",
    Distractor2: "toUpper",
    Distractor3: "upper",
    Explanation:
      "The toUpperCase method is used to convert all of the letters in a string to uppercase.",
    Link: "https://www.freecodecamp.org/news/javascript-tolowercase-how-to-convert-a-string-to-lowercase-and-uppercase-in-js/",
  },
  {
    Question:
      "In Git, how can you list all the commits in a local repository in reverse chronological order?",
    Answer: "git log",
    Distractor1: "git show",
    Distractor2: "git ls",
    Distractor3: "git commits",
    Explanation:
      "You can use git log to see the commits in a repository in reverse chronological order.",
    Link: "https://www.freecodecamp.org/news/what-is-git-learn-git-version-control/",
  },
  {
    Question: "What does DBMS stand for?",
    Answer: "Database Management System",
    Distractor1: "Dataset Management System",
    Distractor2: "Database Maintenance System",
    Distractor3: "Database Management Site",
    Explanation: "DBMS stands for Database Management System. ",
    Link: "https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/",
  },
  {
    Question:
      "An application software for accessing the World Wide Web is known as...",
    Answer: "Browser",
    Distractor1: "IDE",
    Distractor2: "API",
    Distractor3: "Bug",
    Explanation:
      "An application software for accessing the World Wide Web is known as the browser.",
    Link: "https://www.freecodecamp.org/news/web-application-security-understanding-the-browser-5305ed2f1dac/",
  },
  {
    Question: "In JavaScript, how do you write an inline comment?",
    Answer: "// Comment",
    Distractor1: "/* Comment",
    Distractor2: "# Comment",
    Distractor3: "<!-- Comment -->",
    Explanation: "In JavaScript, an inline comment starts with //",
    Link: "https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-comment-your-javascript-code/16783",
  },
  {
    Question: "How many bytes make up a Gigabyte?",
    Answer: "1 billion bytes",
    Distractor1: "1 quintillion bytes",
    Distractor2: "1 trillion bytes",
    Distractor3: "1 hundred bytes",
    Explanation: "A Gigabyte is composed of 1 billion bytes",
    Link: "https://www.freecodecamp.org/news/gigabyte-definition/",
  },
  {
    Question: "In Python, how can you write a “Hello, World” program?",
    Answer: "print(“Hello, World!”)",
    Distractor1: "console.log(“Hello, World!”)",
    Distractor2: "show(“Hello, World!”)",
    Distractor3: "console(“Hello, World!”)",
    Explanation:
      "In Python, we use the built-in print() function to print a value to the console. We pass the value as an argument within parentheses. ",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-hello-world-program-in-python",
  },
  {
    Question:
      "In CSS, what is the name of the relative unit that is based on its parent's font size?",
    Answer: "em",
    Distractor1: "rem",
    Distractor2: "vh",
    Distractor3: "vw",
    Explanation: "The em unit is based on its parent's font size.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },
  {
    Question: "In CSS, this is the type of unit that is tied to physical units of length. ",
    Answer: "Absolute",
    Distractor1: "Relative",
    Distractor2: "Fixed",
    Distractor3: "Dynamic",
    Explanation:
      "In CSS, absolute units are tied to physical units of length. ",
    Link: "https://www.freecodecamp.org/news/css-unit-guide/",
  },
  {
    Question:
      "In CSS, what property is used to customize the marker of a list item?",
    Answer: "list-style-type",
    Distractor1: "list-style",
    Distractor2: "list-marker-type",
    Distractor3: "list-markers",
    Explanation:
      "The list-style-type property is used to set the marker of a list item. ",
    Link: "https://www.freecodecamp.org/news/how-to-style-lists-with-css/",
  },
  {
    Question: "In Python, how do you define a variable?",
    Answer: "<variable_name> = <value>",
    Distractor1: "<value> = <variable_name>",
    Distractor2: "<value> <= <variable_name>",
    Distractor3: "<variable_name> <= <value>",
    Explanation:
      "In Python, we define a variable with <variable_name> = <value>.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/",
  },
  {
    Question:
      "In Vim, pressing this keystroke allows you start typing in the editor.",
    Answer: "i",
    Distractor1: "esc",
    Distractor2: ":q!",
    Distractor3: ":wq",
    Explanation:
      "The i command( for ’insert’), immediately switches vim to insert mode. Once you are in insert mode, you can insert characters just like a regular text editor.",
    Link: "https://www.freecodecamp.org/news/vim-editor-modes-explained/",
  },
  {
    Question:
      "In HTML, what attribute can you add to <input> to match a pattern with a regular expression?",
    Answer: "pattern",
    Distractor1: "regex",
    Distractor2: "match",
    Distractor3: "find",
    Explanation:
      "The pattern attribute is used to check for a pattern in a text field. You can assign a regular expression to this attribute to define the pattern.",
    Link: "https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/",
  },
  {
    Question: "What does API stand for?",
    Answer: "Application Programming Interface",
    Distractor1: "Apple Pie Inside",
    Distractor2: "Application Program Interface",
    Distractor3: "Another Program Interface",
    Explanation: "API stands for Application Programming Interface.",
    Link: "https://www.freecodecamp.org/news/what-does-api-stand-for-a-definition-of-the-coding-acronym-in-plain-english/",
  },
  {
    Question:
      "In Python, string literals prefixed with 'f' or 'F' are commonly called...",
    Answer: "f-strings",
    Distractor1: "strings-f",
    Distractor2: "p-string",
    Distractor3: "x-string",
    Explanation:
      "f-strings are string literals prefixed with 'f' and 'F' in Python.",
    Link: "https://www.freecodecamp.org/news/python-f-strings-tutorial-how-to-use-f-strings-for-string-formatting/",
  },
  {
    Question: "In HTML, what is metadata in an HTML file?",
    Answer: "Information about the webpage that is not directly displayed.",
    Distractor1: "Information about the users of the website",
    Distractor2: "Information about the server that hosts the webpage.",
    Distractor3: "Information about the version of CSS being used.",
    Explanation:
      "Metadata is information about the webpage that is not directly displayed. This includes information about its title, scripts, stylesheets, and author information.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head",
  },
  {
    Question: "In JavaScript, what does the spread operator do?",
    Answer:
      "It can be used to copy portions of an array or object into another array or object.",
    Distractor1:
      "It can be used to check whether a certain value is present in another array.",
    Distractor2: "It can be used to remove the first element of an array.",
    Distractor3:
      "It can be used to return an array with an object's properties.",
    Explanation:
      "The spread operator can be used to copy portions of an array or object into another array or object.",
    Link: "https://www.freecodecamp.org/news/how-to-use-es6-javascript-features-in-react/",
  },
  {
    Question: "In CSS, what does the animation-timing-function property do?",
    Answer: "It determines when the animation should speed up or slow down.",
    Distractor1: "It sets the direction for the element.",
    Distractor2: "It is used to style the element after the animation ends.",
    Distractor3:
      "It is a name used to describe the animation applied to the element.",
    Explanation:
      "The animation-timing-function is used to determine when the animation should speed up or slow down.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },
  {
    Question: "In Git, what is a modified state?",
    Answer:
      "changes have been made to the files but those changes are not saved yet",
    Distractor1: "a new local repository has been created",
    Distractor2: "a new remote repository has been created",
    Distractor3:
      "the files have been saved and need to be pushed to the remote repository",
    Explanation:
      "The modified state is when changes have been made to the files but those changes are not saved yet",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In HTML, what are the body tags?",
    Answer: "defines the body content for the HTML document",
    Distractor1: "defines the header content for the HTML document",
    Distractor2: "defines the image content for the HTML document",
    Distractor3: "defines the table content for the HTML document",
    Explanation: "The body tags defines the body content for the HTML document",
    Link: "https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/",
  },
  {
    Question: "In HTML, what is the <td> tag?",
    Answer: "An element used to create data cells in a table",
    Distractor1: "A tag that represents an abbreviation",
    Distractor2: "A tag used to create word breaks",
    Distractor3: "A tag used to create a horizontal line",
    Explanation:
      "The <td> tag is an element used to create data cells in a table",
    Link: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/",
  },
  {
    Question: "In HTML, what does the details element do?",
    Answer:
      "displays information when the element is toggled to the open state",
    Distractor1: "renders text from right to left",
    Distractor2:
      "overrides the current direction and renders the text in a new direction",
    Distractor3: "provides descriptive text for the abbr tag",
    Explanation:
      "The details tag displays information when the element is toggled to the open state",
    Link: "https://devdocs.io/html/element/details",
  },
  {
    Question: "In JavaScript, how can you convert a string to an integer?",
    Answer: "parseInt()",
    Distractor1: "parseString()",
    Distractor2: "parseInteger()",
    Distractor3: "parseSrt()",
    Explanation:
      "The parseInt() function converts the value passed as an argument to an integer.",
    Link: "https://www.freecodecamp.org/news/convert-string-to-number-javascript/",
  },
  {
    Question: "What is a bug?",
    Answer:
      "An error in a computer program that causes it to generate an incorrect or unexpected result or output.",
    Distractor1: "A programming paradigm. ",
    Distractor2:
      "A programming structure that repeats a block of code a given number of times",
    Distractor3: "This concept is not related to programming at all.",
    Explanation:
      "A bug is an error in a computer program that causes it to generate an incorrect or unexpected result or output. The process of finding and fixing bugs is known as debugging.",
    Link: "https://en.wikipedia.org/wiki/Software_bug",
  },
  {
    Question: "When did Python first appear?",
    Answer: "1991",
    Distractor1: "2001",
    Distractor2: "2011",
    Distractor3: "2021",
    Explanation: "Python first appeared in 1991.",
    Link: "https://en.wikipedia.org/wiki/Python_(programming_language)",
  },
  {
    Question:
      "In HTML, what tag is used to target specific inline content such as text?",
    Answer: "<span>",
    Distractor1: "<div>",
    Distractor2: "<s>",
    Distractor3: "<i>",
    Explanation:
      "The <span> tag is used to target specific inline content such as text. This is helpful when you want to style only certains parts of the text.",
    Link: "https://www.freecodecamp.org/news/span-html-how-to-use-the-span-tag-with-css/",
  },
  {
    Question: "In Linux, which command is used to create an archive?",
    Answer: "tar",
    Distractor1: "gzip",
    Distractor2: "gunzip",
    Distractor3: "diff",
    Explanation:
      "The tar command is used to create an archive, grouping multiple files in a single file, without compressing them",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-tar-command",
  },
  {
    Question: "What does JSON stand for?",
    Answer: "JavaScript Object Notation",
    Distractor1: "Jupiter Script Object Notation",
    Distractor2: "Jabber Script Object Notation",
    Distractor3: "Jargon Script Object Notation",
    Explanation:
      "JSON stands for JavaScript Object Notation which is a text-based format to store and exchange data.",
    Link: "https://www.freecodecamp.org/news/what-is-json-a-json-file-example/",
  },
  {
    Question:
      "In CSS Grid, what is the name of the grid property used to set the number and width of columns?",
    Answer: "grid-template-columns",
    Distractor1: "grid-columns",
    Distractor2: "flex-template-columns",
    Distractor3: "template-columns-grid",
    Explanation:
      "The grid-template-columns property is used to set the number and width of the columns.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In HTML, what is the <article> tag?",
    Answer:
      "A tag used for content that is independent from the main content of the HTML page",
    Distractor1: "A tag used for quotes",
    Distractor2: "A tag used for code",
    Distractor3: "A tag used for links",
    Explanation:
      "The article element is used for content that is independent from the main content of the HTML page",
    Link: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/",
  },
  {
    Question:
      "The canonical implementation of the Python programming language, as distributed on python.org is known as...",
    Answer: "CPython",
    Distractor1: "PPython",
    Distractor2: "QPython",
    Distractor3: "MPython",
    Explanation:
      "CPython is the canonical implementation of the Python programming language, as distributed on python.org.",
    Link: "https://docs.python.org/3/glossary.html",
  },
  {
    Question: "In JavaScript, what method adds an element to the end of an array?",
    Answer: ".push()",
    Distractor1: ".pop()",
    Distractor2: ".shift()",
    Distractor3: ".unshift()",
    Explanation: "The .push() method adds an element to the end of the array.",
    Link: "https://www.freecodecamp.org/news/the-javascript-array-handbook/",
  },
  {
    Question: "In HTML, what is the <address> tag?",
    Answer: "a section to place address information",
    Distractor1: "a place for links",
    Distractor2: "a place for images",
    Distractor3: "a place for table data",
    Explanation:
      "The address tag is used as a section to place address information",
    Link: "https://www.freecodecamp.org/news/semantic-html5-elements/",
  },
  {
    Question:
      "In SQL, what type of join returns rows that have a match in both tables?",
    Answer: "INNER JOIN",
    Distractor1: "FULL OUTER JOIN",
    Distractor2: "RIGHT OUTER JOIN",
    Distractor3: "LEFT OUTER JOIN",
    Explanation:
      "A INNER JOIN returns all rows for which there is a match in both tables.",
    Link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-sql-join-statements/",
  },
  {
    Question: "In SQL, normalized databases are optimized to reduce...",
    Answer: "Data redundancy",
    Distractor1: "Read time",
    Distractor2: "Query size",
    Distractor3: "Storage space",
    Explanation:
      "Normalized databases are optimized to reduce data redundancy.",
    Link: "https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/",
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
    Question: "In Linux, which of the following is the pipe symbol?",
    Answer: "|",
    Distractor1: "/",
    Distractor2: "+",
    Distractor3: "[]",
    Explanation:
      "With the pipe symbol (|), the output of one command serves as the input to another.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cd-command",
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
    Question: "What is PRAM?",
    Answer:
      "A battery powered RAM for older Mac computers that holds important information for your system",
    Distractor1: "A newer type of RAM for Mac computers",
    Distractor2: "A newer type of RAM for Windows Computers",
    Distractor3:
      "A battery powered RAM for older PC computers that holds important information for your system",
    Explanation:
      "Parameter Random Access Memory is a battery powered RAM for older Mac computers that holds important information for your system.",
    Link: "https://www.freecodecamp.org/news/pram-definition/",
  },
  {
    Question: "In JavaScript, what is the value of x ? let x = undefined || 1;",
    Answer: "1",
    Distractor1: "2",
    Distractor2: "undefined",
    Distractor3: "null",
    Explanation:
      "The value of x is 1 because undefined is a falsy value and that's why 1 is assigned to the variable x.",
    Link: "https://www.freecodecamp.org/news/javascript-logical-operators/",
  },
  {
    Question: "In JavaScript, how do you create a promise inside a function?",
    Answer: "return new Promise((resolve, reject) => {})",
    Distractor1: "return new Promise(resolve, reject)",
    Distractor2: "return new Promise((resolve, reject))",
    Distractor3: "return Promise((reject, resolve))",
    Explanation:
      "You can use a promise inside a function with the following syntax: return new Promise((resolve, reject) => {})",
    Link: "https://www.freecodecamp.org/news/javascript-promises-explained/",
  },
  {
    Question:
      "In JavaScript, what is the correct syntax to check if two variables are strictly equal?",
    Answer: "if(A === B)",
    Distractor1: "if(A == B)",
    Distractor2: "if(A = B)",
    Distractor3: "if(A.equals(B))",
    Explanation:
      "The triple equals operator (===) will check for strict equality because it checks for the same data type and value.",
    Link: "https://www.freecodecamp.org/news/javascript-promises-explained/",
  },
  {
    Question:
      "Which of the following relational database management systems (RDBMS) should never be used to store data in a production app?",
    Answer: "Microsoft Access",
    Distractor1: "Microsoft SQL Server",
    Distractor2: "MongoDB",
    Distractor3: "PostgreSQL",
    Explanation:
      "Microsoft Access does not offer as much security, availability, and stability as SQL Server.",
    Link: "https://en.wikipedia.org/wiki/Microsoft_Access",
  },
];
export default fullQuiz;
