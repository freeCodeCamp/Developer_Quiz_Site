const javascriptQuiz = [
  {
    Question:
      "In JavaScript, if let word='Intelligent', then what will be the value of word.slice(2,5)?",
    Answer: "tel",
    Distractor1: "tellig",
    Distractor2: "ll",
    Distractor3: "Inigent",
    Explanation:
      "The slice() method returns a substring of the original string. The original string remains untouched.",
    Link: "https://www.freecodecamp.org/news/javascript-substring-examples-slice-substr-and-substring-methods-in-js/"
  },
  {
    Question:
      "In Javascript, what keyword is used to check whether a given property in an object is valid?",
    Answer: "in",
    Distractor1: "is in",
    Distractor2: "exists",
    Distractor3: "lies",
    Explanation:
      "The in keyword is used to check whether the given property in an object is valid or not.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in",
  },
  {
    Question:
      "In JavaScript, which method uses a callback function for each element in the array?",
    Answer: "forEach()",
    Distractor1: "every(",
    Distractor2: "forEvery()",
    Distractor3: "each()",
    Explanation:
      "The forEach() method uses a callback function for each element in the array.",
    Link: "https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/",
  },
  {
    Question:
      "Which of the following JavaScript array methods would run the slowest in a worst-case scenario?",
    Answer: "shift()",
    Distractor1: "pop()",
    Distractor2: "push()",
    Distractor3: "All take about the same time on an array of the same size.",
    Explanation:
      "shift() removes elements from the front of the array, which means the entire array needs to be re-indexed. In contrast, pop() and push() both work from the 'back' of the array and don't require re-indexing.",
    Link: "https://www.freecodecamp.org/news/the-complexity-of-simple-algorithms-and-data-structures-in-javascript-11e25b29de1e/",
  },
  {
    Question:
      "What is the process of converting a value from one data type to another called?",
    Answer: "Type Coercion",
    Distractor1: "Type Casting",
    Distractor2: "Data Converting",
    Distractor3: "Change Value",
    Explanation:
      "Type coercion is the process of converting a value from one type to another (such as a string to number, object to boolean, and so on).",
    Link: "https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/",
  },
  {
    Question: "Which web API method cancels an event's default behavior?",
    Answer: "preventDefault()",
    Distractor1: "cancel()",
    Distractor2: "preVent()",
    Distractor3: "stop()",
    Explanation:
      "The preventDefault() method cancels the event and prevents the browser from running its default action.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault",
  },
  {
    Question:
      "Which of the following methods allows you to set up functions to be called when a specified event happens, such as when a user clicks a button?",
    Answer: "addEventListener()",
    Distractor1: "listenEvent()",
    Distractor2: "callEvent()",
    Distractor3: "eventWake()",
    Explanation:
      "The JavaScript addEventListener() method allows you to set up functions to be called when a specified event happens, such as when a user clicks a button.",
    Link: "https://www.youtube.com/watch?v=jS4aFq5-91M&t=17471s",
  },
  {
    Question:
      "In JavaScript, which Web API is used to insert a child node anywhere under the parent node?",
    Answer: "insertBefore()",
    Distractor1: "prepend()",
    Distractor2: "append()",
    Distractor3: "lookupPrefix()",
    Explanation:
      "The insertBefore() method inserts a new child node anywhere under the parent node. This method has two parameters: newNode and referenceNode",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore",
  },
  {
    Question:
      "In JavaScript, which property of an element allows you to get or set the HTML markup contained within the element?",
    Answer: "innerHTML",
    Distractor1: "insertAdjacentHTML",
    Distractor2: "insertElement",
    Distractor3: "setHTML",
    Explanation:
      "The innerHTML is a property of the element that allows you to get or set the HTML markup contained within the element.",
    Link: "https://youtu.be/jS4aFq5-91M?t=18781",
  },
  {
    Question:
      "In JavaScript, what is it called when you have a combination of a function and its lexical environment?",
    Answer: "Closure",
    Distractor1: "Debouncing",
    Distractor2: "Throttling",
    Distractor3: "Scope Chaining",
    Explanation:
      "Closures are special types of functions where the inner function will have access to variables in the outer function's scope.",
    Link: "https://www.freecodecamp.org/news/a-basic-guide-to-closures-in-javascript-9fc8b7e3463e",
  },
  {
    Question:
      "In JavaScript, what does a unary plus operator attempt to convert its operand to?",
    Answer: "a number",
    Distractor1: "a string",
    Distractor2: "an array",
    Distractor3: "a sum",
    Explanation:
      "The unary plus operator (+) attempts to convert its operand to a number.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus",
  },
  {
    Question:
      "Which Web API used with JavaScript provides information about the size and position of an element?",
    Answer: ".getBoundingClientRect()",
    Distractor1: ".getOwnPropertyDescriptors()",
    Distractor2: ".assign()",
    Distractor3: ".entries()",
    Explanation:
      "The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect",
  },
  {
    Question:
      "In JavaScript, what is the name of the method used to remove white space from the beginning and end of a string?",
    Answer: ".trim()",
    Distractor1: ".substring()",
    Distractor2: ".reduce()",
    Distractor3: ".slice()",
    Explanation:
      "The .trim() method removes white space (including space, tab, etc.) from both ends of a string and returns a new string without modifying the original.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim",
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
      "In JavaScript, a variable declared with the _________ keyword must be assigned an initial value.",
    Answer: "const",
    Distractor1: "finally",
    Distractor2: "new",
    Distractor3: "var",
    Explanation:
      "The value of a const variable must be specified when the variable is declared.",
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
    Question:
      "In JavaScript, select the right syntax for an ES6 arrow function:",
    Answer: "let variable = () => {//code block}",
    Distractor1: "let variable => (){//code block}",
    Distractor2: "let variable = function() => {//code block}",
    Distractor3: "let variable = function(){//code block}",
    Explanation:
      "ES6 arrow functions provide you with an alternative way to write shorter syntax compared to the traditional function expression.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
  },
  {
    Question:
      "In JavaScript, what will be the value of output? let output = null ?? 20",
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
    Question:
      "In JavaScript, which of the following methods returns a function?",
    Answer: "bind",
    Distractor1: "apply",
    Distractor2: "call",
    Distractor3: "None of given",
    Explanation:
      "The bind function returns a new function with given arguments as the new function's 'this' keyword.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind",
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
    Question: "What are the two basic groups of data types in JavaScript?",
    Answer: "Primitive and Reference types",
    Distractor1: "Enumerated and Object types",
    Distractor2: "Primitive and Floating types",
    Distractor3: "Character and Number types",
    Explanation:
      "Primitive and Reference types are the two basic groups of data types in JavaScript.",
    Link: "https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript",
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
      "In JavaScript, what method adds an element to the end of an array?",
    Answer: ".push()",
    Distractor1: ".pop()",
    Distractor2: ".shift()",
    Distractor3: ".unshift()",
    Explanation: "The .push() method adds an element to the end of the array.",
    Link: "https://www.freecodecamp.org/news/the-javascript-array-handbook/",
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
    Question:
      "In JavaScript, which one of these methods modifies an array in place?",
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
      "Which of the following tools are the most convenient for running tasks in a NodeJS environment?",
    Answer: "npm scripts",
    Distractor1: "gulp",
    Distractor2: "grunt",
    Distractor3: "Makefile",
    Explanation:
      "Npm scripts allow command line tools to be called directly without relying on external plugins.",
    Link: "https://www.freecodecamp.org/news/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8/",
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
    Question: "In JavaScript, how do you write a multiline comment?",
    Answer: "/* */",
    Distractor1: "//",
    Distractor2: "<!-- -->",
    Distractor3: "** **",
    Explanation: "In JavaScript, we use /* */ to write a multiline comment.",
    Link: "https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-comment-your-javascript-code/16783",
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
    Question:
      "In JavaScript, what is the name of the method used to add new elements to the DOM tree?",
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
      "In JavaScript, what is the name of the property used to get the text content of a node in the DOM?",
    Answer: "textContent",
    Distractor1: "text-content",
    Distractor2: "content",
    Distractor3: "getContent",
    Explanation:
      "The textContent property is used to get the text content of a node in the DOM.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
  },
  {
    Question:
      "In JavaScript, what is the JavaScript keyword used to define a constant?",
    Answer: "const",
    Distractor1: "var",
    Distractor2: "let",
    Distractor3: "concat",
    Explanation:
      "The keyword const is used to define a constant in JavaScript. The value of a constant can't be changed through reassignment.",
    Link: "https://www.freecodecamp.org/news/javascript-variables-beginners-guide/",
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
    Question:
      "In JavaScript, what is the name for variables that are accessible throughout the program?",
    Answer: "Global variables",
    Distractor1: "Const variables",
    Distractor2: "Local variables",
    Distractor3: "No variable is accessible throughout in JavaScript",
    Explanation:
      "Global variables are declared and made accessible throughout the entire JavaScript program.",
    Link: "https://www.freecodecamp.org/news/global-variables-in-javascript-explained/",
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
    Question:
      "In JavaScript, what is the name of the method used to select elements in an HTML document by referencing the id name?",
    Answer: ".getElementById()",
    Distractor1: ".getElementByClass()",
    Distractor2: ".getId()",
    Distractor3: ".getElementByTagName()",
    Explanation:
      "The .getElementById() method is used to select elements in the HTML document by referencing the id name.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
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
      "In JavaScript, which one of these operators is the equality operator?",
    Answer: "==",
    Distractor1: "?",
    Distractor2: "!=",
    Distractor3: "!==",
    Explanation:
      "The == operator returns true if two values are equal and false if they are not equal. It converts the values to a common type before doing the comparison.",
    Link: "https://www.freecodecamp.org/news/javascript-triple-equals-sign-vs-double-equals-sign-comparison-operators-explained-with-examples/",
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
      "In JavaScript, what is the name of the method used to attach an event to an HTML element like a button?",
    Answer: ".addEventListener()",
    Distractor1: "Hoisting",
    Distractor2: ".getElementById()",
    Distractor3: ".getElementByTagName()",
    Explanation:
      "The .addEventListener() method is used to attach an event to an HTML element like a button.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
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
    Question: "What is the filename extension of a JavaScript file?",
    Answer: ".js",
    Distractor1: ".py",
    Distractor2: ".j",
    Distractor3: ".javascript",
    Explanation: "JavaScript files have a .js filename extension.",
    Link: "https://en.wikipedia.org/wiki/JavaScript",
  },
  {
    Question:
      "In JavaScript, what is the name of the method used to find all of the elements in the DOM that match a CSS selector and return a list of all of those nodes?",
    Answer: ".querySelectorAll()",
    Distractor1: "Array destructuring",
    Distractor2: ".includes() method",
    Distractor3: "await",
    Explanation:
      "The .querySelectorAll() method is used to find all of the elements that match the CSS selector and return a list of all of those nodes.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
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
    Question: "Which company created JavaScript?",
    Answer: "Netscape",
    Distractor1: "IBM",
    Distractor2: "Xerox",
    Distractor3: "Google",
    Explanation:
      "Brendan Eich created JavaScript when he was working at Netscape.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript",
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
      "In JavaScript, what is the name of the method used to find elements that match one of more selectors?",
    Answer: ".querySelector()",
    Distractor1: ".textContent()",
    Distractor2: ".padEnd()",
    Distractor3: "Optional chaining",
    Explanation:
      "The .querySelector() method is used to find elements in the DOM that match one of more selectors.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
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
    Question: "In JavaScript, how do you write an inline comment?",
    Answer: "// Comment",
    Distractor1: "/* Comment",
    Distractor2: "# Comment",
    Distractor3: "<!-- Comment -->",
    Explanation: "In JavaScript, an inline comment starts with //",
    Link: "https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-comment-your-javascript-code/16783",
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
    Question: "What does DOM stand for?",
    Answer: "Document Object Model",
    Distractor1: "Data Object Model",
    Distractor2: "Document Online Model",
    Distractor3: "Document Object Mainframe",
    Explanation: "DOM stands for Document Object Model.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
  },
  {
    Question:
      "How can you change the background color of an HTML element using JavaScript?",
    Answer: "element.style.backgroundColor = 'red'",
    Distractor1: "element.style.backgroundcolor = 'red'",
    Distractor2: "element.style.background-color = 'red'",
    Distractor3: "element.style.bgColor = 'red'",
    Explanation:
      "JavaScript syntax is slightly different from CSS syntax. In JavaScript, you use camelCase instead of hyphens.",
    Link: "https://youtu.be/5fb2aPlgoys?t=704",
  },
  {
    Question:
      "In JavaScript, when an operator value is NULL, the typeof returned by the operator is:",
    Answer: "Object",
    Distractor1: "Undefined",
    Distractor2: "Integer",
    Distractor3: "Boolean",
    Explanation:
      "In JavaScript, typeof null is an object. This result of typeof null is actually a bug in the language.",
    Link: "https://www.freecodecamp.org/news/javascript-typeof-how-to-check-the-type-of-a-variable-or-object-in-js/",
  },
  {
    Question: "In JavaScript, what will 'typeof []' return?",
    Answer: "Object",
    Distractor1: "Null",
    Distractor2: "Array",
    Distractor3: "Undefined",
    Explanation:
      "In JavaScript, everything that is not a primitive value is an object.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",
  },
  {
    Question: "In JavaScript, what will 'typeof NaN' return?",
    Answer: "Number",
    Distractor1: "ReferenceError",
    Distractor2: "Null",
    Distractor3: "NaN",
    Explanation:
      "In JavaScript, NaN (not-a-number) is still a numeric data type, but it is undefined as a real number.",
    Link: "https://www.freecodecamp.org/news/javascript-typeof-how-to-check-the-type-of-a-variable-or-object-in-js/",
  },
  {
    Question: "In JavaScript, what will the following code return: typeof a?",
    Answer: "undefined",
    Distractor1: "not defined",
    Distractor2: "",
    Distractor3: "NaN",
    Explanation:
      "In JavaScript, if you use the typeof operator on an undeclared variable then it will return undefined. ",
    Link: "https://www.freecodecamp.org/news/javascript-typeof-how-to-check-the-type-of-a-variable-or-object-in-js/",
  },
  {
    Question:
      "What JavaScript keyword will return the type of a variable when you call it?",
    Answer: "typeof",
    Distractor1: "datatype",
    Distractor2: "this",
    Distractor3: "var",
    Explanation:
      "typeof is a JavaScript keyword that will return the type of a variable when you call it. You can use this to validate function parameters or check if variables are defined.",
    Link: "https://www.freecodecamp.org/news/javascript-data-types-typeof-explained/",
  },
  {
    Question: "In JavaScript, what is the return value of the .push() method?",
    Answer: "new length of the array, after the element has been pushed",
    Distractor1: "undefined",
    Distractor2: "null",
    Distractor3: "Length of the old array, before the element is pushed",
    Explanation:
      ".push() returns the new length of the array, after the element has been pushed",
    Link: "https://www.freecodecamp.org/news/how-to-insert-an-element-into-an-array-in-javascript/",
  },
  { 
    Question:
      "In JavaScript, which method allows you to cancel a repeated action created with setInterval()?",
    Answer: "clearInterval",
    Distractor1: "clearImmediate",
    Distractor2: "clearTimeout",
    Distractor3: "stopInterval",
    Explanation:
      "This clearInterval() method is used to stop the timed loop that was started by the setInterval() method.",
    Link: "https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/", 
  }, 
  {
    Question:
      "In JavaScript, which of the following is NOT the correct way to declare a variable?",
    Answer: "number",
    Distractor1: "let",
    Distractor2: "var",
    Distractor3: "const",
    Explanation:
      "JavaScript has three kinds of variable declarations: var, let and const.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#declarations",
  },
  {
    Question: "In JavaScript, how many primitive data types are there?",
    Answer: "7",
    Distractor1: "3",
    Distractor2: "6",
    Distractor3: "8",
    Explanation:
      "JavaScript has 7 primitive data types. Boolean, null, undefined, Number, BigInt, String and Symbol",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#data_structures_and_types",
  },
  {
    Question: "In JavaScript, what does NaN means?",
    Answer: "Not-A-Number",
    Distractor1: "Near-Me Area Network",
    Distractor2: "Non-Alpha-Numeric",
    Distractor3: "Non-numeric",
    Explanation:
      "The global NaN property is a value representing Not-A-Number. This property is used to check if a value is not a valid number.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN",
  },
  {
    Question:
      "In JavaScript, are variables declared with let, const and var hoisted? Select the most appropriate answer",
    Answer:
      "Yes, but variables declared with let and const are in Temporal Dead Zone",
    Distractor1: "Yes",
    Distractor2: "No",
    Distractor3: "No, only variables declared with var are hoisted.",
    Explanation:
      "Variables declared with let, const and var are hoisted. But, const and let are in temporal dead zone.",
    Link: "https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/",
  },
  {
    Question: "In JavaScript, what is the difference between == and ===?",
    Answer: "== allows for type coercion of the values, while === does not",
    Distractor1:
      "== does not allow for type coercion of the values, while === does",
    Distractor2:
      "== and === both allow for type coercion of the values, but === is more strict",
    Distractor3: "There is no difference between == and ===",
    Explanation:
      "The == operator allows for type coercion of the values, while === does not.",
    Link: "https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/",
  },
  {
    Question: "In JavaScript, how many falsy values are there?",
    Answer: "6",
    Distractor1: "5",
    Distractor2: "7",
    Distractor3: "8",
    Explanation:
      "There are 6 falsy values in JavaScript: false, 0, '', null, undefined, and NaN.",
    Link: "https://www.freecodecamp.org/news/falsy-values-in-javascript/",
  },
  {
    Question: "In JavaScript, what is a function without a name called?",
    Answer: "An anonymous function",
    Distractor1: "An unsigned function",
    Distractor2: "A ghost function",
    Distractor3: "A nameless function",
    Explanation:
      "A function without a name is called an anonymous function. This is useful when you want to pass a function as an argument to another function.",
    Link: "https://www.freecodecamp.org/news/what-are-functions-in-javascript-a-beginners-guide/",
  },
  {
    Question: "In JavaScript, what does IIFE stand for?",
    Answer: "Immediately Invoked Function Expression",
    Distractor1: "Immediately Invoked Function Executor",
    Distractor2: "Internally Invoked Function Expression",
    Distractor3: "Internally Invoked Function Executor",
    Explanation:
      "IIFE stands for Immediately Invoked Function Expression. This is a function that is executed immediately after it is created.",
    Link: "https://www.freecodecamp.org/news/iife-in-javascript-what/",
  },
  {
    Question:
      "Which JavaScript DOM manipulation method adds multiple classes to an element?",
    Answer: "classList()",
    Distractor1: "className",
    Distractor2: "classVar",
    Distractor3: "classConstructor",
    Explanation:
      "The classList() method adds multiple classes to an element. You can use it to add a class or multiple classes to an element by attaching the add() method to it. For example classList.add('btn'), or classList.add('btn', 'btn-block')",
    Link: "https://www.freecodecamp.org/news/what-is-dom-in-javascript/#how-to-manipulate-css-from-javascript",
  },
  {
    Question:
      "In JavaScript, what is the difference between a parameter and an argument?",
    Answer:
      "A parameter is a variable in a function definition. An argument is the actual value of this variable that gets passed to the function.",
    Distractor1:
      "A parameter is the actual value of a variable that gets passed to a function. An argument is a variable in a function definition.",
    Distractor2:
      "A parameter is a variable in a function definition. An argument is a variable in a function definition.",
    Distractor3:
      "A parameter is the actual value of a variable that gets passed to a function. An argument is the actual value of this variable that gets passed to the function.",
    Explanation:
      "A parameter is a variable in a function definition. An argument is the actual value of this variable that gets passed to the function.",
    Link: "https://www.freecodecamp.org/news/what-is-the-difference-between-parameters-and-arguments-in-javascript",
  },
  {
    Question:
      "In JavaScript, what is the difference between a function declaration and a function expression?",
    Answer:
      "A function declaration is a function that is defined using the function keyword. A function expression is a function that is defined using a function expression.",
    Distractor1:
      "A function declaration is a function that is defined using a function expression. A function expression is a function that is defined using the function keyword.",
    Distractor2:
      "A function declaration is a function that is defined using the function keyword. A function expression is a function that is defined using a function declaration.",
    Distractor3:
      "A function declaration is a function that is defined using a function expression. A function expression is a function that is defined using a function declaration.",
    Explanation:
      "The main difference between a function declaration and a function expression is the function name, which can be omitted in function expressions to create anonymous functions. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function",
  },
  {
    Question:
      "In JavaScript, what is the return value for the following code:  [1, 2, 3, 4].shift()?",
    Answer: "1",
    Distractor1: "2, 3, 4",
    Distractor2: "4",
    Distractor3: "1, 2, 3",
    Explanation:
      "The shift() method removes the first element from an array and returns that removed element.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift",
  },
  {
    Question: "In JavaScript, which is a correct way to concatenate 3 arrays?",
    Answer: "const newArr = arr1.concat(arr2, arr3)",
    Distractor1: "const newArr = join(arr1, arr2, arr3)",
    Distractor2: "const newArr = combine[arr1, arr2, arr3]",
    Distractor3: "const newArr = arr1.join[arr2, arr3]",
    Explanation:
      "The concat() method is used to combine two or more arrays and returns a new array.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat",
  },
  {
    Question:
      "Given the following JavaScript array, ['a', 'b', 'c', 'd', 'e'], what method is used to return ['c', 'd', 'e']?",
    Answer: "arr.slice(2,5)",
    Distractor1: "arr.fill(c, d, e)",
    Distractor2: "arr.keys(c, d, e)",
    Distractor3: "arr.remove(0, 1)",
    Explanation:
      "The slice() method has two optional parameters which represent the starting and ending index for the array. This method returns a new shallow copy of the sliced array.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
  },
  {
    Question:
      "In JavaScript, what is the result for [22, -4, 99, 103, -30, 172].find(x => x > 50)?",
    Answer: "99",
    Distractor1: "{99, 103, 172}",
    Distractor2: "undefined",
    Distractor3: "[99, 103, 172]",
    Explanation:
      "The find() method will look through the array and return the first element that passes the callback function.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
  },
  {
    Question:
      "In JavaScript, what array method takes an integer value and returns the element at that index?",
    Answer: ".at()",
    Distractor1: ".value()",
    Distractor2: ".flat()",
    Distractor3: ".some()",
    Explanation:
      "The at() method takes a positive or negative integer and returns the index for that element.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at",
  },
  {
    Question: "In JavaScript, what is the runtime model based on?",
    Answer: "Event Loop",
    Distractor1: "Stack Memory Allotment Model",
    Distractor2: "Queue Memory Allotment Model",
    Distractor3: "Non Blocking Model",
    Explanation:
      "The event loop is responsible for executing the code, processing events, and monitoring the callback queue and stack. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
  },
  {
    Question:
      "In JavaScript, which one is a type of data structure that stores unique values?",
    Answer: "Set",
    Distractor1: "Maps",
    Distractor2: "Object",
    Distractor3: "Array",
    Explanation:
      "A JavaScript Set is a type of data structure that stores unique values.",
    Link: "https://www.freecodecamp.org/news/lets-learn-about-set-and-its-unique-functionality-in-javascript-5654c5c03de2/",
  },
  {
    Question: "In JavaScript, what is the optional chaining operator?",
    Answer: "?.",
    Distractor1: "??",
    Distractor2: "&&",
    Distractor3: "**",
    Explanation: "?. is the optional chaining operator in JavaScript.",
    Link: "https://www.freecodecamp.org/news/javascript-optional-chaining/",
  },
  {
    Question:
      "In JavaScript, what is the result for the following code: ('b' + 'a' + + 'cteri' + 'a').toLowerCase()?",
    Answer: "banana",
    Distractor1: "b+a+cteri+a",
    Distractor2: "bacteria",
    Distractor3: "Undefined",
    Explanation:
      "JavaScript will concatenate all the strings together and attempt to convert 'cteri' to a number using the unary plus operator, and since 'cteri' is not a number, the result will be NaN(Not a Number) which altogether is banana",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus",
  },
  {
    Question: "In JavaScript, which of the following is not an array method?",
    Answer: ".search()",
    Distractor1: ".includes()",
    Distractor2: ".forEach()",
    Distractor3: ".join()",
    Explanation:
      "The search() method searches through the string to find a match to a regular expression. If no match is found, then the return value will be -1.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search",
  },
  {
    Question:
      "In JavaScript, which method executes a function once the timer expires?",
    Answer: "setTimeout",
    Distractor1: "setInterval",
    Distractor2: "clearInterval",
    Distractor3: "clearTimeout",
    Explanation:
      "The setTimeout() method allows you to execute a piece of code after a certain amount of time has passed.",
    Link: "https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/",
  },
  {
    Question:
      "In JavaScript, which one of these console methods displays an array or object of rows and columns?",
    Answer: "console.table()",
    Distractor1: "console.assert()",
    Distractor2: "console.group()",
    Distractor3: "console.log()",
    Explanation:
      "The console.table() method displays an array or object of rows and columns.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/console/table",
  },
  {
    Question: "In JavaScript, what type of value is an Array?",
    Answer: "Object",
    Distractor1: "Array",
    Distractor2: "Map",
    Distractor3: "Set",
    Explanation:
      "In JavaScript besides primitives types, we have the Object value type. Arrays are a special type of object that represents a collection of similar types of values.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
  },
  {
    Question:
      "In JavaScript, which of the following methods will return the string representation of a number?",
    Answer: "toFixed()",
    Distractor1: "parseFloat()",
    Distractor2: "valueOf()",
    Distractor3: "round()",
    Explanation:
      "The toFixed() method converts a number to a string and rounds it to a specified number of decimals.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed",
  },
];

export default javascriptQuiz;
