const generalCSQuiz = [
  {
    Question: "What is the acceptable range of Balance Factor for an AVL tree?",
    Answer: "[-1,1]",
    Distractor1: "[0,1]",
    Distractor2: "[-1,0]",
    Distractor3: "None of the above",
    Explanation: " The self balancing property of an AVL tree is maintained by the balance factor. The value of balance factor should always be -1, 0 or +1",
    Link: "https://forum.freecodecamp.org/t/algorithms-avl-trees/297458"
  },
  {
    Question: "Which approach involves duplicating the argument's value into the function's formal parameter?",
    Answer: "Call by Value",
    Distractor1: "Call by pointer",
    Distractor2: "Call by reference",
    Distractor3: "Call by address",
    Explanation: "In the call-by-value approach, a replica of the argument's value is generated, and any modifications made to the formal parameter within the function do not affect the original argument outside of the function, as the function operates on its own isolated copy of the data.",
    Link: "https://www.freecodecamp.org/news/understanding-by-reference-vs-by-value-d49139beb1c4/"
  },
  {
    Question: "What does NFC stands for?",
    Answer: "Near-Field Communication",
    Distractor1: "Narrow Field Communication",
    Distractor2: "Near-Fragile Communication",
    Distractor3: "Nearly Factory Communication",
    Explanation:
      "NFC stands for near-field communication and it is the standard for devices to communicate with each other wirelessly from a very close distance.",
    Link: "https://www.freecodecamp.org/news/what-is-nfc-near-field-communication-uses-chips-tags-and-readers-explained/"
  },
  {
    Question: "What is the best algorithm for matrix multiplication?",
    Answer: "Strassen's Algorithm",
    Distractor1: "Multiplication algorithm",
    Distractor2: "Divide and Conquer Technique",
    Distractor3: "None of the above",
    Explanation:
      "Strassen's algorithm reduces the number of multiplication and addition in a given matrix and results in a time complexity of O(2.81)",
    Link: "https://en.wikipedia.org/wiki/Strassen_algorithm#"
  },
  {
    Question: "Which of the following sorting algorithms is stable in nature?",
    Answer: "Merge Sort",
    Distractor1: "Heap Sort",
    Distractor2: "Quick Sort",
    Distractor3: "Selection sort",
    Explanation:
      "Stable sorting algorithms maintain the relative order of elements with equal values, or keys. Merge sort is stable in nature.",
    Link: "https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/#classification-of-a-sorting-algorithm"
  },
  {
    Question:
      "Which of the following sorting algorithms has the same best-case and worst-case time complexities?",
    Answer: "Merge Sort",
    Distractor1: "Bubble Sort",
    Distractor2: "Quick Sort",
    Distractor3: "Selection sort",
    Explanation:
      "Merge sort has a time complexity of O(nlogn) in all cases - best, average and worst.",
    Link: "https://www.freecodecamp.org/news/merge-sort-algorithm-python-and-java-examples-with-time-complexity/"
  },
  {
    Question: "What is Object-Oriented Programming?",
    Answer:
      "OOP is a programming pattern that is built around objects or entities.",
    Distractor1: "OOP is a topological paradigm to program things",
    Distractor2: "OOP is a set of sorting algorithms",
    Distractor3: "OOP is a list of Bitwise operators",
    Explanation:
      "OOP is a programming pattern that is built around objects or entities",
    Link: "https://www.freecodecamp.org/news/what-is-object-oriented-programming/"
  },
  {
    Question:
      "Which of the following is true regarding division and the bitwise operator?",
    Answer:
      "Dividing a number by 8 using the bitwise operator is faster than using the / operator",
    Distractor1:
      "Dividing a number by 8 cannot be implemented using bitwise operator",
    Distractor2:
      "Dividing a number by 8 using the bitwise operator is slower than using the / operator",
    Distractor3: "none of the following options are true",
    Explanation:
      "When a binary number is shifted to the right 3 times, it will be divided by 8.",
    Link: "https://forum.freecodecamp.org/t/javascript-bitwise-operators-explained-with-examples/16153"
  },
  {
    Question: "Which of the following is NOT an in-place sorting algorithm?",
    Answer: "Merge Sort",
    Distractor1: "Bubble sort",
    Distractor2: "Insertion sort",
    Distractor3: "Quick sort",
    Explanation:
      "Merge sort uses the Divide and Conquer paradigm and is not considered an in-place sorting algorithm.",
    Link: "https://en.wikipedia.org/wiki/In-place_algorithm"
  },
  {
    Question:
      "Which term is used for removing elements from the front of the queue?",
    Answer: "Dequeue.",
    Distractor1: "Enqueue.",
    Distractor2: "Peek.",
    Distractor3: "isFull.",
    Explanation:
      "Dequeue is the term for removing elements from the front of the queue.",
    Link: "https://www.freecodecamp.org/news/data-structures-101-queues-a6960a3c98/"
  },
  {
    Question: "Which problems are solved using Bellman Ford's Algorithm?",
    Answer: "Single Source Shortest Path",
    Distractor1: "All Pair Shortest Path",
    Distractor2: "Negative Cycle Detection",
    Distractor3: "Minimum Spanning Tree",
    Explanation:
      "Bellman Ford's algorithm is a shortest path finding algorithm for graphs that can have negative weights.",
    Link: "https://www.freecodecamp.org/news/graph-algorithms-and-data-structures-explained-with-java-and-c-examples/"
  },
  {
    Question:
      "Which of the following algorithms can be used to determine a minimum spanning tree in a graph?",
    Answer: "Boruvka's algorithm",
    Distractor1: "Breadth first search",
    Distractor2: "Depth first search",
    Distractor3: "Binary search",
    Explanation:
      "Boruvka's algorithm can be used to determine a minimum spanning tree in a graph.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=1229s"
  },
  {
    Question:
      "Which of the following is synonymous with an articulation point in a graph?",
    Answer: "Cut vertex",
    Distractor1: "Cut set",
    Distractor2: "Cut edge",
    Distractor3: "Leaf node",
    Explanation:
      "In a graph, an articulation point is the same as a cut vertex.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=1213s"
  },
  {
    Question: "Which of the following is synonymous with a bridge in a graph?",
    Answer: "Cut edge",
    Distractor1: "Cut set",
    Distractor2: "Articulation point",
    Distractor3: "Directed edge",
    Explanation: "In a graph, a bridge is the same as a cut edge.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=1178s"
  },
  {
    Question:
      "Which of the following statements is true for the Traveling salesman problem?",
    Answer: "It is an NP-Hard problem.",
    Distractor1: "It is an NP-Complete problem.",
    Distractor2: "It is an NP problem.",
    Distractor3: "It is a P problem.",
    Explanation: "Traveling salesman problem is an NP-Hard problem.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=1147s"
  },
  {
    Question:
      "Which of the following algorithms can be used for the shortest path problem for an unweighted graph?",
    Answer: "Breadth First Search",
    Distractor1: "Binary Search",
    Distractor2: "Ternary Search",
    Distractor3: "Linear Search",
    Explanation:
      "Breadth First Search can be used for the shortest path problem for an unweighted graph.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=934s"
  },
  {
    Question: "What is SOLID?",
    Answer:
      "SOLID is an acronym which represents five principles of Object-Oriented design.",
    Distractor1: "It's a new type of Hardware",
    Distractor2: "New kind of software",
    Distractor3: "It's a new group of technologies",
    Explanation:
      "SOLID is a set of rules and best practices to follow while creating OOP designs.",
    Link: "https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/"
  },
  {
    Question: "Which of the following is true for an adjacency list?",
    Answer: "Edge weight lookup is O(E).",
    Distractor1: "Edge weight lookup is O(1).",
    Distractor2: "Edge weight cannot be specified in adjacency list.",
    Distractor3: "It cannot be used to represent a cyclic graph.",
    Explanation:
      "In an adjacency list, for each node only adjacent nodes are stored in a list",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=682s"
  },
  {
    Question: "Which of the following is true for an adjacency matrix?",
    Answer: "It is space efficient for representing dense graphs.",
    Distractor1: "It is space efficient for representing sparse graphs.",
    Distractor2: "Edge weight lookup is lower bounded by log(n).",
    Distractor3: "Space complexity is O(n).",
    Explanation: "If a graph is sparse then most spaces are wasted.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=620s"
  },
  {
    Question: "Which of the following is true for a graph?",
    Answer: "A graph is bipartite if and only if it is two colorable.",
    Distractor1:
      "A graph is bipartite if and only if it does not contain an even length cycle.",
    Distractor2: "A graph is bipartite if and only if it is three colorable.",
    Distractor3:
      "A graph is bipartite if and only if it is a directed acyclic graph",
    Explanation:
      "If a graph is two colorable then the nodes with same color can be grouped together to form two different groups.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=440s"
  },
  {
    Question:
      "Which of the following is true for an arborescence in graph theory?",
    Answer:
      "All arborescence are Directed Acyclic Graphs (DAGs) but not all DAGs are arborescence",
    Distractor1: "All DAGs are arborescence but not all arborescence are DAGs.",
    Distractor2: "A strongly connected and directed graph is an arborescence.",
    Distractor3:
      "A graph where the number of edges is twice the number of nodes is arborescence.",
    Explanation:
      "An arborescence is a directed tree. Hence, it is a directed graph with no cycle. A graph with 4 nodes where three nodes are pointing towards a single node is not an arborescence but a DAG.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=346s"
  },
  {
    Question: "What is an arborescence in graph theory?",
    Answer: "A rooted tree in which all edges point away from the root",
    Distractor1: "A graph having cycles",
    Distractor2: "A strongly connected and directed graph",
    Distractor3:
      "A graph where the number of edges is twice the number of nodes",
    Explanation:
      "A tree is rooted if the tree has a designated node called root node such that all edges either points towards the root or points away from the root. And if all edges point away from the root then it is called arborescence.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=346s"
  },
  {
    Question:
      "What is the term for when data is being pushed onto a full stack?",
    Answer: "Stack Overflow",
    Distractor1: "Underflow",
    Distractor2: "Garbage Collection",
    Distractor3: "Empty collection",
    Explanation:
      "Stack Overflow happens when there is an attempt to push data on an already full stack.",
    Link: "https://www.freecodecamp.org/news/data-structures-101-stacks-696b3282980/"
  },
  {
    Question:
      "What is the name for an error where the programmer writes invalid syntax resulting in the program failing to run?",
    Answer: "Syntax Error",
    Distractor1: "Runtime Error",
    Distractor2: "Logical Error",
    Distractor3: "Semantic Error",
    Explanation:
      "A syntax error is when the programmer writes invalid code that violates the rules of that programming language.",
    Link: "https://www.youtube.com/watch?v=zOjov-2OZ0E"
  },
  {
    Question:
      "Which operation is used to add an item to the back of the queue?",
    Answer: "Enqueue",
    Distractor1: "Dequeue",
    Distractor2: "Peek",
    Distractor3: "isFull",
    Explanation:
      "Enqueue is the operation used to add an item to the back of the queue.",
    Link: "https://www.freecodecamp.org/news/queue-data-structure-definition-and-java-example-code/"
  },
  {
    Question: "Which of the following is correct about a tree?",
    Answer: "trees are minimally connected.",
    Distractor1: "trees can be cyclic.",
    Distractor2: "a tree must be an undirected graph",
    Distractor3: "trees must have at least two nodes",
    Explanation:
      "If we remove any edge from a tree, it creates a two disconnected graph",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=306s"
  },
  {
    Question:
      "Which of the following is a constraint for Dijkstra's Single Source Shortest Path Algorithm?",
    Answer: "The graph must only contain non-negative edge weights.",
    Distractor1: "The graph must be acyclic",
    Distractor2: "The graph must be a balanced binary tree",
    Distractor3: "The graph must have unique edge weights",
    Explanation:
      "Dijkstra's SSSP algorithm may not work for a graph with negative edge weights. This constraint is to ensure that once a vertex is visited, the optimal distance from source cannot be updated further.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=4832s"
  },
  {
    Question: "Which of the following is the most correct statement?",
    Answer: "Topological sort is possible only for a Directed Acyclic Graph",
    Distractor1: "Topological sort is just an another name for BFS",
    Distractor2: "All undirected graphs have topological ordering",
    Distractor3: "A cyclic graph also has topological ordering.",
    Explanation:
      "The only graph that has valid topological ordering is a Directed Acyclic Graph.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=3632s"
  },
  {
    Question: "What is ASCII?",
    Answer:
      "It is a character encoding standard to represent text in a computer.",
    Distractor1: "Algorithm to convert decimal to number in base 65.",
    Distractor2: "A protocol in Layer 3 of TCP/IP Suite",
    Distractor3: "A unit of throughput for a processor.",
    Explanation:
      "American Standard Code for Information Interchange (ASCII) is a character encoding standard to represent text in computers.",
    Link: "https://www.youtube.com/watch?v=LtoBGQPuu1c&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=406s"
  },
  {
    Question: "Which of the following is true for Big O?",
    Answer: "2*logn = O(n)",
    Distractor1: "n^2 = O(n)",
    Distractor2: "n! = O(n)",
    Distractor3: "2^n = O(n)",
    Explanation:
      "Big O notation describes the upper bound. The function n upper bounds the function 2*logn. However, it is not the tightest upper bound, and in general we always specify the tightest upper bound to quantify an algorithm.",
    Link: "https://www.youtube.com/watch?v=RBSGKlAvoiM&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=5m43s"
  },
  {
    Question:
      "Between Merge sort and Quicksort, which sorting algorithm works faster in the case of larger datasets?",
    Answer: "Merge sort",
    Distractor1:
      "testing on speed between the two algorithms has been inconclusive on which one is faster",
    Distractor2: "Quicksort",
    Distractor3: "Both",
    Explanation:
      "Merge sort runs quicker than Quick sort in the case of larger datasets.",
    Link: "https://forum.freecodecamp.org/t/the-merge-sort-algorithm-explained/16104"
  },
  {
    Question:
      "What data structure does a binary search tree degenerate to if it isn't balanced properly?",
    Answer: "Linked List",
    Distractor1: "Set",
    Distractor2: "Queue",
    Distractor3: "Dictionary",
    Explanation:
      "A binary search tree degenerates to a linked list if it is not balanced properly. It is balanced if the height of the left and right subtrees of any node differ by at most one.",
    Link: "https://www.freecodecamp.org/news/data-structures-101-binary-search-tree-398267b6bff0/"
  },
  {
    Question: "Which algorithm utilizes a pivot value to sort?",
    Answer: "Quick Sort",
    Distractor1: "Merge Sort",
    Distractor2: "Bubble Sort",
    Distractor3: "Insertion Sort",
    Explanation:
      "Quick sort works by selecting one element (called “the pivot”) and finding the index where the pivot should end up in the sorted array.",
    Link: "https://www.freecodecamp.org/news/introduction-to-algorithms-with-javascript-examples/#quick-sort"
  },
  {
    Question:
      "Which of these sorting algorithms follows an average case time complexity of order O(nlogn)?",
    Answer: "Merge Sort",
    Distractor1: "Selection Sort",
    Distractor2: "Bubble Sort",
    Distractor3: "Insertion Sort",
    Explanation:
      "The average case time complexity for the merge sort algorithm is O(n log n).",
    Link: "https://youtu.be/l7-f9gS8VOs"
  },
  {
    Question:
      "Which one of the following terms mean adding an element to the top of the stack?",
    Answer: "Push",
    Distractor1: "Peek",
    Distractor2: "Pop",
    Distractor3: "Display",
    Explanation:
      "The push method is used to add an element to the top of the stack.",
    Link: "https://www.youtube.com/watch?v=RBSGKlAvoiM&t=3506s"
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
    Link: "https://www.youtube.com/watch?v=RBSGKlAvoiM&t=4558s"
  },
  {
    Question: "What is the basic language of a computer?",
    Answer: "Binary",
    Distractor1: "HyperText Markup Language",
    Distractor2: "Cascading Style Sheets",
    Distractor3: "JavaScript",
    Explanation:
      "Computers are simplistic and understand binary. Programming languages such as Python and Java were created to help humans write instructions for computers and interpret it.",
    Link: "https://youtu.be/F0WoVEr0-44?t=336"
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
    Link: "https://www.youtube.com/watch?v=zg9ih6SVACc&t=867s"
  },
  {
    Question: "What is Big O Notation?",
    Answer: "A way to measure the performance and efficiency of an algorithm.",
    Distractor1: "A way to notate changes from the server.",
    Distractor2: "A way to notate the different types in a file system.",
    Distractor3: "A way to notate the different elements in an array.",
    Explanation:
      "Big O notation is a way to measure the performance of an algorithm.",
    Link: "https://www.freecodecamp.org/news/learn-big-o-notation/"
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
    Link: "https://www.freecodecamp.org/news/binary-search-tree-what-is-it/"
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
    Link: "https://www.freecodecamp.org/news/the-design-thinking-process-explained/"
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
    Link: "https://youtu.be/B31LgI4Y4DQ?t=13587"
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
    Link: "https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/pipelining/index.html"
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
    Link: "https://youtu.be/RBSGKlAvoiM?t=3567"
  },
  {
    Question: "Which of the following is a Divide and Conquer algorithm?",
    Answer: "Merge Sort",
    Distractor1: "Selection Sort",
    Distractor2: "Heap Sort",
    Distractor3: "Bubble Sort",
    Explanation:
      "Merge Sort recursively splits the array into smaller arrays, sorts those arrays and merges them into one sorted array.",
    Link: "https://www.freecodecamp.org/news/an-intro-to-advanced-sorting-algorithms-merge-quick-radix-sort-in-javascript-b65842194597/"
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
    Link: "https://youtu.be/zg9ih6SVACc?t=1470"
  },
  {
    Question: "What is a first class function?",
    Answer: "The ability to send and receive functions like values.",
    Distractor1: "Functions with higher priority than others.",
    Distractor2: "Functions declared in classes",
    Distractor3: "Functions that only return numbers",
    Explanation:
      "If functions can be sent and received just like values, than that language is said to have first class functions. They are also called first class citizens.",
    Link: "https://www.freecodecamp.org/news/discover-the-power-of-first-class-functions-fd0d7b599b69/"
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
    Link: "https://www.youtube.com/watch?v=zg9ih6SVACc&t=1379s"
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
    Link: "https://en.wikipedia.org/wiki/Software_bug"
  },
  {
    Question: "What is a Floating point number?",
    Answer: "A number with a decimal point",
    Distractor1: "A number greater than 100",
    Distractor2: "A number less than 0",
    Distractor3: "A number that is divisible by 3",
    Explanation: "A floating point number is a number with a decimal point.",
    Link: "https://www.freecodecamp.org/news/floating-point-definition/"
  },
  {
    Question: "How many bytes make up a Zettabyte?",
    Answer: "1 sextillion bytes",
    Distractor1: "1 hundred bytes",
    Distractor2: "1 thousand bytes",
    Distractor3: "1 million bytes",
    Explanation: "A Zettabyte is composed of 1 sextillion bytes",
    Link: "https://www.freecodecamp.org/news/zettabyte-definition/"
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
    Link: "https://en.wikipedia.org/wiki/Debugging"
  },
  {
    Question: "How many bytes make up a Terabyte?",
    Answer: "1 trillion bytes",
    Distractor1: "1 billion bytes",
    Distractor2: "1 thousand bytes",
    Distractor3: "1 million bytes",
    Explanation: "A Terabyte is composed of 1 trillion bytes",
    Link: "https://www.freecodecamp.org/news/terabyte-definition/"
  },
  {
    Question: "What is a server?",
    Answer: "A software or hardware device that sends data over a network",
    Distractor1: "A Python library",
    Distractor2: "A type of compiler",
    Distractor3: "An IDE",
    Explanation:
      "A server is a software or hardware device that sends data over a network",
    Link: "https://www.freecodecamp.org/news/server-definition/"
  },
  {
    Question: "The values that an operator operates on are known as...",
    Answer: "Operands",
    Distractor1: "Operators",
    Distractor2: "Operative",
    Distractor3: "Operation",
    Explanation:
      "The values that an operator operates on are known as operands.",
    Link: "https://en.wikipedia.org/wiki/Operand"
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
    Link: "https://www.freecodecamp.org/news/algorithms-explained-what-they-are-and-common-sorting-algorithms/"
  },
  {
    Question: "How many bits make up a byte?",
    Answer: "8 bits",
    Distractor1: "16 bits",
    Distractor2: "32 bits",
    Distractor3: "12 bits",
    Explanation: "There are 8 bits in a byte",
    Link: "https://www.freecodecamp.org/news/byte-definition/"
  },
  {
    Question: "What is an operating system?",
    Answer: "Manages the hardware and software components of a computer",
    Distractor1: "A program that translates code from one languages to another",
    Distractor2: "A system that converts data into machine code",
    Distractor3: "A base 2 numerical system made up of 0's and 1's",
    Explanation:
      "An operating system manages the hardware and software components of a computer.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/"
  },
  {
    Question: "How many bytes make up a Exabyte?",
    Answer: "1 quintillion bytes",
    Distractor1: "1 billion bytes",
    Distractor2: "1 trillion bytes",
    Distractor3: "1 thousand bytes",
    Explanation: "A Exabyte is composed of 1 quintillion bytes",
    Link: "https://www.freecodecamp.org/news/exabyte-definition/"
  },
  {
    Question: "What does API stand for?",
    Answer: "Application Programming Interface",
    Distractor1: "Apple Pie Inside",
    Distractor2: "Application Program Interface",
    Distractor3: "Another Program Interface",
    Explanation: "API stands for Application Programming Interface.",
    Link: "https://www.freecodecamp.org/news/what-does-api-stand-for-a-definition-of-the-coding-acronym-in-plain-english/"
  },
  {
    Question: "How many bytes make up a Gigabyte?",
    Answer: "1 billion bytes",
    Distractor1: "1 quintillion bytes",
    Distractor2: "1 trillion bytes",
    Distractor3: "1 hundred bytes",
    Explanation: "A Gigabyte is composed of 1 billion bytes",
    Link: "https://www.freecodecamp.org/news/gigabyte-definition/"
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
    Link: "https://www.freecodecamp.org/news/python-while-loop-tutorial/"
  },
  {
    Question: "How many bytes make up a Yottabyte?",
    Answer: "1 septillion bytes",
    Distractor1: "1 thousand bytes",
    Distractor2: "1 million bytes",
    Distractor3: "1 billion bytes",
    Explanation: "A Yottabyte is made up of 1 septillion bytes",
    Link: "https://www.freecodecamp.org/news/yottabyte-definition/"
  },
  {
    Question: "How many bytes make up a Kilobyte?",
    Answer: "1,000 bytes",
    Distractor1: "100 bytes",
    Distractor2: "10 bytes",
    Distractor3: "1 byte",
    Explanation: "A Kilobyte is composed of 1,000 bytes",
    Link: "https://www.freecodecamp.org/news/kilobyte-definition/"
  },
  {
    Question: "What is a bit?",
    Answer: "Smallest form of data on a computer",
    Distractor1: "Structured assembly language ",
    Distractor2: "A special type of file system",
    Distractor3: "A special type of object",
    Explanation:
      'A binary digit or "bit" is the smallest form of data on a computer',
    Link: "https://www.freecodecamp.org/news/bit-definition/"
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
    Link: "https://www.freecodecamp.org/news/ram-definition/"
  },
  {
    Question: "What unit is used to measure the speed of a CPU?",
    Answer: "GHz (gigahertz)",
    Distractor1: "MHz (megahertz)",
    Distractor2: "kHz (kilohertz)",
    Distractor3: "THz (terahertz)",
    Explanation:
      "The speed of a computer is determined by its clock cycle. The clock speed measures the number of cycles the CPU executes per second. Hertz is a unit of frequency. The CPU clock cycle is measured in GHz (gigahertz). 1GHz is equal to 10 ⁹ Hz (hertz).So 1Gigahertz means 10 ⁹ cycles per second.",
    Link: "https://www.freecodecamp.org/news/how-does-a-cpu-work/"
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
    Link: "https://www.freecodecamp.org/news/python-if-else-statement-conditional-statements-explained/"
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
    Link: "https://www.freecodecamp.org/news/python-while-loop-tutorial/"
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
    Link: "https://www.freecodecamp.org/news/want-to-be-a-developer-you-should-probably-be-pair-programming-2c6ec12c4866/"
  },
  {
    Question: "What does CPU stand for?",
    Answer: "Central Processing Unit",
    Distractor1: "Central Protocol Unit",
    Distractor2: "Central Programming Unit",
    Distractor3: "Control Processing Unit",
    Explanation:
      "CPU stands for Central Processing Unit which performs logic computations for the program.",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/"
  },
  {
    Question: "How many bytes make up a Petabyte?",
    Answer: "1 quadrillion bytes",
    Distractor1: "1 quintillion bytes",
    Distractor2: "1 hundred bytes",
    Distractor3: "1 million bytes",
    Explanation: "A Petabyte is composed of 1 quadrillion bytes",
    Link: "https://www.freecodecamp.org/news/petabyte-definition/"
  },
  {
    Question: "What is a Boolean?",
    Answer: "A data type representing a true or false value.",
    Distractor1: "A data type representing a number.",
    Distractor2: "A programming language.",
    Distractor3: "A Python library.",
    Explanation:
      "In computer science, a Boolean is a data type which only has two possible values of true or false.",
    Link: "https://www.freecodecamp.org/news/boolean-definition/"
  },
  {
    Question: "What is a virtual machine?",
    Answer: "A computer inside another computer",
    Distractor1: "a popular JavaScript library",
    Distractor2: "a Linux distribution",
    Distractor3: "another name for a compiler",
    Explanation:
      "A virtual machine is a program you run on a computer that acts like it is a separate computer. It is basically a way to create a computer within a computer.",
    Link: "https://www.freecodecamp.org/news/what-is-a-virtual-machine-and-how-to-setup-a-vm-on-windows-linux-and-mac/"
  },
  {
    Question: "What is a password?",
    Answer: "A secret set of characters",
    Distractor1: "A way to request data from a server",
    Distractor2: "A special type of computer memory",
    Distractor3: "A type of array",
    Explanation:
      "A password is a secret set of characters used to login in to applications",
    Link: "https://www.freecodecamp.org/news/password-definition/"
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
    Link: "https://en.wikipedia.org/wiki/Operator_(computer_programming)"
  },
  {
    Question: "Which one is NOT a popular operating system for computers?",
    Answer: "PASSIM",
    Distractor1: "Microsoft Windows",
    Distractor2: "macOS",
    Distractor3: "Linux",
    Explanation:
      "Linux, Microsoft Windows and macOS are three popular operating systems used by developers.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/"
  },
  {
    Question: "What is RGB?",
    Answer: "A color model",
    Distractor1: "An Internet Protocol",
    Distractor2: "HTML syntax",
    Distractor3: "A secret password",
    Explanation:
      "RGB is an acronym that stands for Red Green Blue. It expresses colors in terms of the amount of red, green, and blue they are made up of and uses a human counting system with integers ranging from 0-255 or a percentage ranging from (0% - 100%).",
    Link: "https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/"
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
    Link: "https://www.freecodecamp.org/news/web-safe-fonts/"
  },
  {
    Question: "What does GIF stand for?",
    Answer: "Graphics Interchange Format",
    Distractor1: "Graphical International Format",
    Distractor2: "Graphical Interconnected Functions",
    Distractor3: "General Interchange Format",
    Explanation: "GIF stands for Graphics Interchange Format.",
    Link: "https://www.freecodecamp.org/news/how-to-make-a-gif-create-animated-gifs-without-downloading-software/#:~:text=A%20GIF%20(Graphics%20Interchange%20Format,with%20your%20friends%20and%20family."
  },
  {
    Question: "When was the World Wide Web invented?",
    Answer: "1989",
    Distractor1: "1990",
    Distractor2: "1995",
    Distractor3: "2005",
    Explanation: "Tim Berners-Lee invented the World Wide Web in 1989.",
    Link: "https://en.wikipedia.org/wiki/World_Wide_Web"
  },
  {
    Question: "What does DOM stand for?",
    Answer: "Document Object Model",
    Distractor1: "Direct Object Model",
    Distractor2: "Document Objective Model",
    Distractor3: "Documentary Object Mobile",
    Explanation: "DOM stands for Document Object Model.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/#:~:text=DOM%20stands%20for%20Document%20Object,remove%20elements%20from%20the%20document."
  },
  {
    Question: "What does PNG stand for?",
    Answer: "Portable Network Graphics",
    Distractor1: "Portable New Graphics",
    Distractor2: "Premium Network Graphics",
    Distractor3: "Portable Network Green",
    Explanation: "PNG stands for Portable Network Graphics.",
    Link: "https://en.wikipedia.org/wiki/Portable_Network_Graphics"
  },
  {
    Question: "What color would rgb(255,255,255) give?",
    Answer: "White",
    Distractor1: "Red",
    Distractor2: "Black",
    Distractor3: "Blue",
    Explanation:
      "The maximum value of 255 represents that the full amount of all colors and their full intensity is on display.",
    Link: "https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/"
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
    Link: "https://en.wikipedia.org/wiki/Syntax_(programming_languages)"
  },
  {
    Question: "What do R, G, and B in RGB stand for?",
    Answer: "Red, green, and blue",
    Distractor1: "Red, gray, and black ",
    Distractor2: "Red, green, and black",
    Distractor3: "Red, gray, and blue",
    Explanation: "RGB is an acronym that stands for Red Green Blue",
    Link: "https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/"
  },
  {
    Question: "What does a CPU do?",
    Answer: "A CPU executes commands from a computer program",
    Distractor1: "Writes code for developers",
    Distractor2: "Displays images and text on screen",
    Distractor3: "Points to objects on the screen",
    Explanation:
      "The CPU is the brains of a computer that processes operations and executes instructions for computer programs. ",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/"
  },
  {
    Question: "What is Binary?",
    Answer: "A numeral system where the values are 0's and 1's.",
    Distractor1: "A numeral system where the values are 1's and 2's.",
    Distractor2: "A numeral system where the values are 0-7.",
    Distractor3: "A numeral system where the values are 0-9.",
    Explanation: "Binary is a base 2 numeral system whose values are 0 and 1.",
    Link: "https://www.freecodecamp.org/news/binary-definition/"
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
    Link: "https://www.freecodecamp.org/news/understanding-recursion-in-programming/"
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
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/"
  },
  {
    Question: "What does IDE stand for?",
    Answer: "Integrated Development Environment",
    Distractor1: "Internal Development Environment",
    Distractor2: "Integrated Design Environment",
    Distractor3: "International Development Experimentation",
    Explanation: "IDE stands for Integrated Development Environment.",
    Link: "https://www.freecodecamp.org/news/what-is-an-ide-in-programming-an-ide-definition-for-developers/"
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
    Link: "https://www.freecodecamp.org/news/what-is-programming/"
  },
  {
    Question: "What do HDD and SSD stand for in computer hardware?",
    Answer: "Hard Disk Drive & Solid State Drive",
    Distractor1: "Harvest Disk Drive & Solid State Drive",
    Distractor2: "Hard Disk Drive & Segment State Drive",
    Distractor3: "Hard Disk Drive & Scratch State Drive",
    Explanation:
      "HDD stands for Hard Disk Drive while SSD stands for Solid State Drive.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/"
  },
  {
    Question: "Who invented the World Wide Web?",
    Answer: "Tim Berners-Lee",
    Distractor1: "Ada Lovelace",
    Distractor2: "Alan Turing",
    Distractor3: "Quincy Larson",
    Explanation: "Tim Berners-Lee invented the World Wide Web in 1989.",
    Link: "https://en.wikipedia.org/wiki/Tim_Berners-Lee"
  },
  {
    Question: "What is another term used when referring to the CPU?",
    Answer: "Processor",
    Distractor1: "Operating System",
    Distractor2: "System Unit",
    Distractor3: "Computer Software",
    Explanation:
      "CPU is short for Central Processing Unit. It is also known as a processor or microprocessor.",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/"
  },
  {
    Question: "What does ISP stand for?",
    Answer: "Internet Service Provider",
    Distractor1: "Internet System Provider",
    Distractor2: "International Service Provider",
    Distractor3: "Intermediate Systems Provider",
    Explanation: "ISP stands for Internet Service Provider.",
    Link: "https://www.freecodecamp.org/news/how-does-the-internet-work/"
  },
  {
    Question: "What does JPEG stand for?",
    Answer: "Joint Photographic Experts Group",
    Distractor1: "Join Photogenic Experimental Group",
    Distractor2: "Join Photographic External Graphics",
    Distractor3: "Join Photos Enchanted Graphics",
    Explanation: "JPEG stands for Joint Photographic Experts Group.",
    Link: "https://en.wikipedia.org/wiki/JPEG"
  },
  {
    Question: "What does HTTP stand for?",
    Answer: "HyperText Transfer Protocol",
    Distractor1: "HyperText Transmission Protocol",
    Distractor2: "HyperTest Transfer Product",
    Distractor3: "HyperText Transfer Password",
    Explanation: "HTTP stands for HyperText Transfer Protocol.",
    Link: "https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/"
  },
  {
    Question: "How many bytes make up a Megabyte?",
    Answer: "1 million bytes",
    Distractor1: "1 thousand bytes",
    Distractor2: "1 billion bytes",
    Distractor3: "1 trillion bytes",
    Explanation: "A Megabyte is composed of 1 million bytes",
    Link: "https://www.freecodecamp.org/news/megabyte-definition/"
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
    Link: "https://www.freecodecamp.org/news/brief-history-of-the-internet/"
  },
  {
    Question: "Which phase is NOT part of the Design Thinking Process?",
    Answer: "Rationalize",
    Distractor1: "Ideate",
    Distractor2: "Prototype",
    Distractor3: "Empathize",
    Explanation:
      "The five phases of the Design Thinking Process are Empathize, Define, Ideate, Prototype, and Test.",
    Link: "https://www.freecodecamp.org/news/the-design-thinking-process-explained/"
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
    Link: "https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/"
  },
  {
    Question: "Which one is NOT a standard HTTP response status code?",
    Answer: "702",
    Distractor1: "403",
    Distractor2: "504",
    Distractor3: "201",
    Explanation:
      "HTTP response status codes are divided in five groups between 100-599.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
  },
  {
    Question: "What is WebP?",
    Answer: "Is an image format",
    Distractor1: "Is a web page",
    Distractor2: "Is a video format",
    Distractor3: "Is a domain name",
    Explanation:
      "Is an image format that provides lossless and lossy compression for images on the Internet using predictive coding to encode an image.",
    Link: "https://www.freecodecamp.org/news/make-your-website-load-lightning-fast-with-webp-images-cf55c98ac0a2/"
  },
  {
    Question: "What is Lossy compression?",
    Answer: "A compression algorithm",
    Distractor1: "An algorithm to reduce file names",
    Distractor2: "A reverse algorithm",
    Distractor3: "A sorting algorithm",
    Explanation:
      "Lossy compression permits reconstruction only of an approximation of the original data.",
    Link: "https://www.freecodecamp.org/news/image-file-types-picture-format-extensions-jpeg-gif-png-svg-tiff/"
  },
  {
    Question: "What is a domain name?",
    Answer: "The address of a website",
    Distractor1: "The name of a website",
    Distractor2: "The name of a network",
    Distractor3: "The IP address of a user",
    Explanation:
      "A domain name is the address of a website. It's the name you type into a web browser to access that specific website.",
    Link: "https://www.freecodecamp.org/news/what-is-a-domain-name-example/"
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
    Link: "https://www.freecodecamp.org/news/python-function-examples-how-to-declare-and-invoke-with-parameters-2/"
  },
  {
    Question: "What does SVG stand for?",
    Answer: "Scalable Vector Graphics",
    Distractor1: "Stretchable Vector Graphics",
    Distractor2: "Scalable Vectorial Graphics",
    Distractor3: "Screen Vector Graphics",
    Explanation: "SVG stands for Scalable Vector Graphics.",
    Link: "https://www.freecodecamp.org/news/use-svg-images-in-css-html/"
  },
  {
    Question: "What is Lossless compression?",
    Answer:
      "a compression algorithm that allows the original data to be perfectly reconstructed from the compressed data.",
    Distractor1: "a sorting algorithm",
    Distractor2: "a reverse algorithm",
    Distractor3: "an algorithm that converts wav files to mp3 files",
    Explanation:
      "Lossless compression is a compression algorithm that allows the original data to be perfectly reconstructed from the compressed data.",
    Link: "https://www.freecodecamp.org/news/image-file-types-picture-format-extensions-jpeg-gif-png-svg-tiff/"
  },
  {
    Question: "What is a Nibble?",
    Answer: "Nibble is a four-bit aggregation",
    Distractor1: "Nibble is an algorithm",
    Distractor2: "Nibble is a octet",
    Distractor3: "Nibble is a device",
    Explanation: "A Nibble is a group of four bits (half of a byte)",
    Link: "https://en.wikipedia.org/wiki/Nibble"
  },
  {
    Question:
      "Which data structure is used for the implementation of a recursive algorithm?",
    Answer: "Stack",
    Distractor1: "Queue",
    Distractor2: "Linked list",
    Distractor3: "Tree",
    Explanation:
      "In recursion, the nested function that is called later returns the value first, which is in the same nature as that of a stack (Last In First Out).",
    Link: "https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/"
  },
  {
    Question: "Which one is NOT a programming paradigm?",
    Answer: "Boolean Programming",
    Distractor1: "Object-Oriented Programming",
    Distractor2: "Functional Programming",
    Distractor3: "Procedural Programming",
    Explanation:
      "Object-oriented programming, functional programming and procedural programming are all well known paradigms.",
    Link: "https://www.freecodecamp.org/news/an-introduction-to-programming-paradigms/"
  },
  {
    Question: "Which one is NOT a real logic gate?",
    Answer: "XAND",
    Distractor1: "AND",
    Distractor2: "NAND",
    Distractor3: "XNOR",
    Explanation:
      "The seven logic gates in boolean algebra are AND, OR, XOR, NOT, NAND, NOR, and XNOR.",
    Link: "https://www.freecodecamp.org/news/boolean-algebra/"
  },
  {
    Question: "Which type of computer network generally has the smallest size?",
    Answer: "PAN",
    Distractor1: "MAN",
    Distractor2: "LAN",
    Distractor3: "WAN",
    Explanation:
      "Some examples of a Personal Area Network (PAN) include tablets, video game consoles and smartphones. ",
    Link: "https://en.wikipedia.org/wiki/Computer_network"
  },
  {
    Question: "Which color model is used for printing?",
    Answer: "CMYK",
    Distractor1: "RGB",
    Distractor2: "RYB",
    Distractor3: "HSV",
    Explanation:
      "The CMYK color model uses subtractive colors, thus producing better results on a white background like a paper.",
    Link: "https://en.wikipedia.org/wiki/Color_model"
  },
  {
    Question: "What are the four pillars of Object-oriented programming?",
    Answer: "Abstraction, Encapsulation, Inheritance, and Polymorphism.",
    Distractor1: "Objects, Methods, Properties and Fields.",
    Distractor2: "Immutability, Purity, Transparency and State.",
    Distractor3: "Declaration, Modeling, Evaluation and Implementation.",
    Explanation:
      "Abstraction, encapsulation, inheritance, and polymorphism are software design principles to help you write clean object-oriented code.",
    Link: "https://www.freecodecamp.org/news/four-pillars-of-object-oriented-programming/"
  },
  {
    Question: "What is pseudocode?",
    Answer:
      "Pseudocode is fake code that is used to write programs that are easily understood.",
    Distractor1: "An old programming language that they used back in the day.",
    Distractor2: "A diagrammatic representation of a set of instructions",
    Distractor3: "A specific programming language that all computers use",
    Explanation:
      "Pseudocode is fake code that is used to write programs in which you represent the sequence of actions and instructions (aka algorithms) in a form that humans can easily understand.",
    Link: "https://www.freecodecamp.org/news/what-is-pseudocode-in-programming/"
  },
  {
    Question: "What is a function?",
    Answer:
      "Is a block of code that is self-contained behavior for the computer to run.",
    Distractor1: "an extensible program-code-template",
    Distractor2: "Text that does not get executed by the computer",
    Distractor3: "container for storing data",
    Explanation:
      "The code inside a function runs only when it is needed, meaning only when it is called.",
    Link: "https://www.freecodecamp.org/news/introduction-to-computer-programming-and-computer-science-course/"
  },
  {
    Question: "What are loops?",
    Answer: "Code used to run certain instructions repeatedly.",
    Distractor1: "Code that is ran only one time",
    Distractor2: "Code to encapsulate statements",
    Distractor3: "Code that ends the program",
    Explanation:
      "A statement which can repeat a set of statements up to a fixed number of times or until a certain criterion is satisfied.",
    Link: "https://www.freecodecamp.org/news/introduction-to-computer-programming-and-computer-science-course/"
  },
  {
    Question: "What is an array?",
    Answer: "Is a list of data",
    Distractor1: "A variable that is assigned a single value",
    Distractor2: "A function that loops through data",
    Distractor3: "A programming language used for Macintosh computer",
    Explanation:
      "An array is a special variable, which can hold more than one value.",
    Link: "https://www.freecodecamp.org/news/introduction-to-computer-programming-and-computer-science-course/"
  },
  {
    Question:
      "What is the best case time complexity for the merge sort algorithm?",
    Answer: "O(n*log(n))",
    Distractor1: "O(n^2)",
    Distractor2: "O(log(n))",
    Distractor3: "O(2^n)",
    Explanation:
      "Merge sort is a divide and conquer algorithm that has a best case time complexity of O(n*log n)",
    Link: "https://www.freecodecamp.org/news/an-intro-to-advanced-sorting-algorithms-merge-quick-radix-sort-in-javascript-b65842194597/"
  },
  {
    Question: "What is the advantage of using linked lists over arrays?",
    Answer: "Linked lists helps in faster insertions and deletions than arrays",
    Distractor1: "Memory usage in linked lists is less than arrays",
    Distractor2: "Reverse traversal is possible in singly linked lists",
    Distractor3:
      "Random accessing elements is easier in linked lists than arrays",
    Explanation:
      "Linked lists have quicker insertions and deletions than arrays because there is no need to shift all other elements with lists.",
    Link: "https://www.freecodecamp.org/news/data-structures-101-linked-lists-254c82cf5883/"
  },
  {
    Question: "Which sorting algorithm is best when data is nearly sorted?",
    Answer: "Bubble Sort",
    Distractor1: "Merge Sort",
    Distractor2: "Insertion Sort",
    Distractor3: "Selection Sort",
    Explanation:
      "If the list is nearly sorted, then Bubble Sort is a good choice because it will sort the data with only a few passes of the array.",
    Link: "https://www.freecodecamp.org/news/bubble-sort/"
  },
  {
    Question: "In which generation of computers were compilers introduced?",
    Answer: "Third generation",
    Distractor1: "Fourth generation",
    Distractor2: "First generation",
    Distractor3: "Second generation",
    Explanation:
      "Translators called compilers were introduced in third generation to translate the code programmers wrote to machine executable binary code.",
    Link: "https://www.freecodecamp.org/news/computer-coding-computer-program-definition-and-code-meaning/"
  },

  {
    Question:
      "Which algorithm finds the shortest path between nodes in a graph?",
    Answer: "Dijkstra's Algorithm",
    Distractor1: "Rabin-Karp Algorithm",
    Distractor2: "Binary Search Algorithm",
    Distractor3: "Quicksort Algorithm",
    Explanation:
      "Dijkstra's Algorithm can find the shortest path from a node (called the 'source node') to all other nodes in the graph, producing a shortest-path tree.",
    Link: "https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/"
  },

  {
    Question:
      "In Banker's algorithm, which part of the computer represents the 'Banker'?",
    Answer: "Operating System",
    Distractor1: "RAM",
    Distractor2: "CPU",
    Distractor3: "Register",
    Explanation:
      "Banker's algorithm is most commonly used within banking systems to help determine if resources are available to lend to customers. The operating system represents the 'Banker' because it decides the resource allocation.",
    Link: "https://www.freecodecamp.org/news/what-is-an-os-operating-system-definition-for-beginners/"
  },

  {
    Question: "What is Big Theta notation?",
    Answer:
      "A range between the lower and upper bounds of an algorithm's performance",
    Distractor1: "The lower bound of an algorithm's performance",
    Distractor2: "The upper bound of an algorithm's performance",
    Distractor3: "The average case for an algorithm's performance",
    Explanation:
      "Big theta is either the exact performance value of the algorithm, or a useful range between narrow upper and lower bounds.",
    Link: "https://www.freecodecamp.org/news/big-theta-and-asymptotic-notation-explained/"
  },

  {
    Question:
      "Which of the following runtimes can be used for recursive functions that make multiple calls?",
    Answer: "branches ^ (depth) i.e. 'b' raised to the power of 'd'",
    Distractor1: "depth ^ (branches)",
    Distractor2: "2 ^ (branches)",
    Distractor3: "2 ^ (branches * depth)",
    Explanation:
      "An O(branches ^ depth) runtime is often reported (although not always) for recursive functions that make multiple calls.",
    Link: "https://www.freecodecamp.org/news/learn-big-o-notation/"
  },
  {
    Question:
      "What is the worst case time complexity for binary and linear search?",
    Answer: "binary search is O(logn) and linear search is O(n)",
    Distractor1: "binary search is O(n) and linear search is O(logn)",
    Distractor2: "binary search is O(n) and linear search is O(n)",
    Distractor3: "binary search is O(logn) and linear search is O(logn)",
    Explanation:
      "The worst case time complexity for linear search O(n) because we have to iterate through n elements. The worst case time complexity for binary search is O(logn) because it is a divide and conquer algorithm.",
    Link: "https://www.freecodecamp.org/news/search-algorithms-linear-and-binary-search-explained/"
  },
  {
    Question: "What is Proprietary Software?",
    Answer: "Software which is owned by an organization or an individual.",
    Distractor1:
      "Software where the code is publicly available for people to modify, and share.",
    Distractor2: "Software where the code can be used by everyone for free",
    Distractor3: "Software that has only been developed by Oracle",
    Explanation:
      "The original authors of proprietary software can modify its code. Users of this type of software have to agree not to alter it in any way unless they have permission from the owners to do so.",
    Link: "https://www.freecodecamp.org/news/what-is-open-source-software-explained-in-plain-english"
  },
  {
    Question: "What is Open Source Software?",
    Answer:
      "A type of software where the code is publicly available for people to view, modify, and share.",
    Distractor1: "Software owned by Big Tech Companies",
    Distractor2: "Software developed by Facebook",
    Distractor3:
      "Software where the code is only available to a select few people",
    Explanation:
      "Open Source Software is code that is publicly available for people to view, modify, and share. One example of open source would be freeCodeCamp.",
    Link: "https://www.freecodecamp.org/news/what-is-open-source-software-explained-in-plain-english"
  },
  {
    Question: "How does the Bubble Sort algorithm work?",
    Answer:
      "This algorithm traverses a list, compares adjacent values, and swaps them if they are not in the correct order.",
    Distractor1:
      "This algorithm divides the list into different buckets and sorts these buckets individually.",
    Distractor2:
      "This algorithm selects the current smallest element, and swaps it into place.",
    Distractor3: "This algorithm breaks down an unsorted list into two halves.",
    Explanation:
      "The Bubble Sort algorithm traverses a list, compares adjacent values, and swaps them if they are not in the correct order.",
    Link: "https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c"
  },
  {
    Question:
      "What is the underlining process behind the Merge Sort algorithm?",
    Answer: "Recursion",
    Distractor1: "String matching and parsing",
    Distractor2: "backtracking",
    Distractor3: "graph traversal",
    Explanation:
      "The Merge Sort algorithm works by recursively breaking down an unsorted list into two halves until it reaches a point where it can no longer be broken down.",
    Link: "https://www.freecodecamp.org/news/how-to-sort-recursively-in-python"
  },
  {
    Question: "What is a String?",
    Answer: "A data type that comprises of a sequence of characters",
    Distractor1: "An Array indicator for programming languages",
    Distractor2: "A Data Structure for data arrangement",
    Distractor3: "a programming language for complex tasks",
    Explanation:
      "A string is a data type that can contain many different characters. A string is written as a series of characters between single or double quotes.",
    Link: "https://www.freecodecamp.org/news/how-to-lowercase-a-string-in-javascript-tolowercase-in-js/"
  },
  {
    Question: "What is the worst case time complexity for Bubble sort?",
    Answer: "O(n^2)",
    Distractor1: "O(logn)",
    Distractor2: "O(n)",
    Distractor3: "O(nlogn)",
    Explanation:
      "Bubble sort has a worst case time complexity of O(n^2), which is slow compared to other sorting algorithms.",
    Link: "https://www.freecodecamp.org/news/bubble-sort/"
  },
  {
    Question: "Which HTTP status code returns 'I'm a teapot'?",
    Answer: "418",
    Distractor1: "000",
    Distractor2: "007",
    Distractor3: "128",
    Explanation:
      "HTTP status code 418 returns 'I'm a teapot' and it is a reference to a 1998 April Fools' joke.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418#"
  },
  {
    Question:
      "Which of the following time complexities is considered to be the fastest?",
    Answer: "O(1)",
    Distractor1: "O(logn)",
    Distractor2: "O(n)",
    Distractor3: "O(nlogn)",
    Explanation:
      "O(1) is independent of input size so it remains in constant time regardless of the size of the input.",
    Link: "https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/"
  },
  {
    Question: "What is the worst case time complexity for Selection sort?",
    Answer: "O(n*n)",
    Distractor1: "O(n*logn)",
    Distractor2: "O(n^3)",
    Distractor3: "O(n+k)",
    Explanation:
      "Selection sort has a worst case time complexity of O(n*n), due to the two nested loops.",
    Link: "https://forum.freecodecamp.org/t/the-selection-sort-algorithm-explained-with-examples/16106"
  },
  {
    Question: "Which of the following is a dynamically typed language?",
    Answer: "Python",
    Distractor1: "C",
    Distractor2: "Java",
    Distractor3: "C++",
    Explanation:
      "Statically-typed languages like C, C++, and Java, perform type checking at compile time whereas dynamically-typed languages like Python and JavaScript  perform type checking at runtime.",
    Link: "https://www.freecodecamp.org/news/why-use-static-types-in-javascript-part-1-8382da1e0adb/#:~:text=series%20is%20about.-,First%2C%20a%20definition,-The%20quickest%20way"
  },
  {
    Question:
      "If you were to solve the classic FizzBuzz challenge, what would be the output for the 15th iteration?",
    Answer: "FizzBuzz",
    Distractor1: "Fizz",
    Distractor2: "Buzz",
    Distractor3: "BuzzFizz",
    Explanation:
      "FizzBuzz is a common coding challenge where you will need to write a loop that iterates from 1 to N while outputting 'Fizz' at multiples of 3, 'Buzz' at multiples of 5 and 'FizzBuzz' at multiples of 3 and 5. Position 15 has the word FizzBuzz because it is a multiple of both 3 and 5.",
    Link: "https://en.wikipedia.org/wiki/Fizz_buzz"
  },
  {
    Question:
      "What's the Big O notation of an algorithm that increases the running time linearly with the input size?",
    Answer: "O(n)",
    Distractor1: "O(n^2)",
    Distractor2: "O(1)",
    Distractor3: "O(log n)",
    Explanation:
      "The letter n represents the input size, and the big O represents the increase of the running time.",
    Link: "https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/"
  },
  {
    Question: "Why are sorting algorithms important in programming?",
    Answer:
      "Sorting algorithms are important because they can reduce the complexity of a problem.",
    Distractor1:
      "Sorting algorithms are important because they are only used to arrange data in alphabetical order",
    Distractor2:
      "Sorting algorithms are important because they are frequently asked in interviews.",
    Distractor3:
      "Sorting algorithms are not important because there are faster ways to solve problems",
    Explanation:
      "Sorting algorithms are important because they can reduce the complexity of a problem by arranging data in a specific order, which can make it easier to solve and streamline various tasks and processes.",
    Link: "https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/#classification-of-a-sorting-algorithm"
  },
  {
    Question:
      "Which of the following examples shows the correct syntax for kebab case?",
    Answer: "number-of-donuts",
    Distractor1: "number_of_donuts",
    Distractor2: "numberOfDonuts",
    Distractor3: "number*of*donuts",
    Explanation: "Kebab case separates each lowercase word by dashes.",
    Link: "https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/"
  },
  {
    Question:
      "Which of the following type of trees is also known as a 'large key' tree?",
    Answer: "B-Tree",
    Distractor1: "Binary Search Tree",
    Distractor2:
      "Adelson-Velsky and Landis Tree (AVL Tree/Height balanced tree)",
    Distractor3: "Ternary Tree",
    Explanation:
      "B-Trees are identified by their capacity to hold a significant quantity of keys within a single node, leading to their alternative name, large key trees.",
    Link: "https://www.freecodecamp.org/news/b-tree-self-balancing-search-index-data-structures-explained/"
  },
  {
    Question:
      "Which data structure is used to implement an auto-complete feature?",
    Answer: "Trie",
    Distractor1: "Linked List",
    Distractor2: "Stack",
    Distractor3: "Tree",
    Explanation:
      "A Trie is a tree based data structure where each node stores a character performing efficient search operations on them",
    Link: "https://en.wikipedia.org/wiki/Trie"
  },
  {
    Question:
      "Which of the following tree traversal algorithms has an O(1) space complexity?",
    Answer: "Morris algorithm",
    Distractor1: "Bellman-Ford algorithm",
    Distractor2: "Floyd Warshall algorithm",
    Distractor3: "Dijkstra's algorithm",
    Explanation:
      "Morris traversal is a tree traversal algorithm that does not employ the use of recursion or a stack. In this traversal, links are created as successors and nodes are printed using these links.",
    Link: "https://en.wikipedia.org/wiki/Tree_traversal#Morris_in-order_traversal_using_threading"
  },
  {
    Question:
      "Which of the following search algorithms is best for finding the minimum or maximum of an unimodal function?",
    Answer: "Ternary Search",
    Distractor1: "Binary Search",
    Distractor2: "Linear Search",
    Distractor3: "Sentinel Linear Search",
    Explanation:
      "Ternary Search is similar to binary search but distinguishes itself through a trisection approach giving us three possibilities for the two points m1 and m2 f(m1) < f(m2), f(m1) > f(m2), f(m1) = f(m2)",
    Link: "https://en.wikipedia.org/wiki/Ternary_search"
  }
];

export default generalCSQuiz;
