const sqlQuiz = [
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
          "In SQL, which of the following is a wildcard character that can be used with the LIKE statement?",
        Answer: "%",
        Distractor1: "$",
        Distractor2: "!",
        Distractor3: "@",
        Explanation:
          "You can use the % and _ wildcards with the SQL LIKE statement to compare values from an SQL table.",
        Link: "https://www.freecodecamp.org/news/sql-like-statement-how-to-query-sql-with-wildcard/",
      },
];

export default sqlQuiz;