const javascriptQuiz = [
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

];

export default javascriptQuiz;