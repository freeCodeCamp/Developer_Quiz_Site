const generalCSQuiz = [
  {
    Question:
      "Which algorithm utilizes a pivot value to sort?",
    Answer: "Quick Sort",
    Distractor1: "Merge Sort",
    Distractor2: "Bubble Sort",
    Distractor3: "Insertion Sort",
    Explanation:
      "Quick sort works by selecting one element (called “the pivot”) and finding the index where the pivot should end up in the sorted array.",
    Link: "https://www.freecodecamp.org/news/introduction-to-algorithms-with-javascript-examples/#quick-sort",
  },
  {
    Question:
      "Which one of these data structures follows the FIFO(First In First Out) method?",
    Answer: "Queues",
    Distractor1: "Arrays",
    Distractor2: "Trees",
    Distractor3: "Stacks",
    Explanation:
      "A queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.",
    Link: "https://www.youtube.com/watch?v=RBSGKlAvoiM&t=4558s",
  },
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
    Question: "What is a Floating point number?",
    Answer: "A number with a decimal point",
    Distractor1: "A number greater than 100",
    Distractor2: "A number less than 0",
    Distractor3: "A number that is divisible by 3",
    Explanation: "A floating point number is a number with a decimal point.",
    Link: "https://www.freecodecamp.org/news/floating-point-definition/",
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
    Question: "How many bits make up a byte?",
    Answer: "8 bits",
    Distractor1: "16 bits",
    Distractor2: "32 bits",
    Distractor3: "12 bits",
    Explanation: "There are 8 bits in a byte",
    Link: "https://www.freecodecamp.org/news/byte-definition/",
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
    Question: "How many bytes make up a Exabyte?",
    Answer: "1 quintillion bytes",
    Distractor1: "1 billion bytes",
    Distractor2: "1 trillion bytes",
    Distractor3: "1 thousand bytes",
    Explanation: "A Exabyte is composed of 1 quintillion bytes",
    Link: "https://www.freecodecamp.org/news/exabyte-definition/",
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
    Question: "How many bytes make up a Gigabyte?",
    Answer: "1 billion bytes",
    Distractor1: "1 quintillion bytes",
    Distractor2: "1 trillion bytes",
    Distractor3: "1 hundred bytes",
    Explanation: "A Gigabyte is composed of 1 billion bytes",
    Link: "https://www.freecodecamp.org/news/gigabyte-definition/",
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
    Question: "How many bytes make up a Yottabyte?",
    Answer: "1 septillion bytes",
    Distractor1: "1 thousand bytes",
    Distractor2: "1 million bytes",
    Distractor3: "1 billion bytes",
    Explanation: "A Yottabyte is made up of 1 septillion bytes",
    Link: "https://www.freecodecamp.org/news/yottabyte-definition/",
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
    Question: "What is an Algorithm?",
    Answer: "A set of steps to solve a problem",
    Distractor1: "A programming language",
    Distractor2: "A collection of fonts",
    Distractor3: "A data type",
    Explanation: "An algorithm is a set of steps to solve a problem.",
    Link: "https://www.freecodecamp.org/news/algorithm-definition/",
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
    Question: "How many bytes make up a Petabyte?",
    Answer: "1 quadrillion bytes",
    Distractor1: "1 quintillion bytes",
    Distractor2: "1 hundred bytes",
    Distractor3: "1 million bytes",
    Explanation: "A Petabyte is composed of 1 quadrillion bytes",
    Link: "https://www.freecodecamp.org/news/petabyte-definition/",
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
    Question: "What does GIF stand for?",
    Answer: "Graphics Interchange Format",
    Distractor1: "Graphical International Format",
    Distractor2: "Graphical Interconnected Functions",
    Distractor3: "General Interchange Format",
    Explanation: "GIF stands for Graphics Interchange Format.",
    Link: "https://www.freecodecamp.org/news/how-to-make-a-gif-create-animated-gifs-without-downloading-software/#:~:text=A%20GIF%20(Graphics%20Interchange%20Format,with%20your%20friends%20and%20family.",
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
    Question: "What does DOM stand for?",
    Answer: "Document Object Model",
    Distractor1: "Direct Object Model",
    Distractor2: "Document Objective Model",
    Distractor3: "Documentary Object Mobile",
    Explanation: "DOM stands for Document Object Model.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/#:~:text=DOM%20stands%20for%20Document%20Object,remove%20elements%20from%20the%20document.",
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
    Question: "What do R, G, and B in RGB stand for?",
    Answer: "Red, green, and blue",
    Distractor1: "Red, gray, and black ",
    Distractor2: "Red, green, and black",
    Distractor3: "Red, gray, and blue",
    Explanation: "RGB is an acronym that stands for Red Green Blue",
    Link: "https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/",
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
    Question: "What does IDE stand for?",
    Answer: "Integrated Development Environment",
    Distractor1: "Internal Development Environment",
    Distractor2: "Integrated Design Environment",
    Distractor3: "International Development Experimentation",
    Explanation: "IDE stands for Integrated Development Environment.",
    Link: "https://www.freecodecamp.org/news/what-is-an-ide-in-programming-an-ide-definition-for-developers/",
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
    Question: "Who invented the World Wide Web?",
    Answer: "Tim Berners-Lee",
    Distractor1: "Ada Lovelace",
    Distractor2: "Alan Turing",
    Distractor3: "Quincy Larson",
    Explanation: "Tim Berners-Lee invented the World Wide Web in 1989.",
    Link: "https://en.wikipedia.org/wiki/Tim_Berners-Lee",
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
    Question: "What does ISP stand for?",
    Answer: "Internet Service Provider",
    Distractor1: "Internet System Provider",
    Distractor2: "International Service Provider",
    Distractor3: "Intermediate Systems Provider",
    Explanation: "ISP stands for Internet Service Provider.",
    Link: "https://www.freecodecamp.org/news/how-does-the-internet-work/",
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
    Question: "What does HTTP stand for?",
    Answer: "HyperText Transfer Protocol",
    Distractor1: "HyperText Transmission Protocol",
    Distractor2: "HyperTest Transfer Product",
    Distractor3: "HyperText Transfer Password",
    Explanation: "HTTP stands for HyperText Transfer Protocol.",
    Link: "https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/",
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
    Question: "What does SVG stand for?",
    Answer: "Scalable Vector Graphics",
    Distractor1: "Stretchable Vector Graphics",
    Distractor2: "Scalable Vectorial Graphics",
    Distractor3: "Screen Vector Graphics",
    Explanation: "SVG stands for Scalable Vector Graphics.",
    Link: "https://www.freecodecamp.org/news/use-svg-images-in-css-html/",
  },
  {
    Question: "What is Lossless compression?",
    Answer: "a compression algorithm that allows the original data to be perfectly reconstructed from the compressed data.",
    Distractor1: "a sorting algorithm",
    Distractor2: "a reverse algorithm",
    Distractor3: "an algorithm that converts wav files to mp3 files",
    Explanation: "Lossless compression is a compression algorithm that allows the original data to be perfectly reconstructed from the compressed data.",
    Link: "https://www.freecodecamp.org/news/image-file-types-picture-format-extensions-jpeg-gif-png-svg-tiff/",
  },
];

export default generalCSQuiz;
