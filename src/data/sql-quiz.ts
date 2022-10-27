const sqlQuiz = [
  {
    Question:
      "In SQL, which of the following is the correct syntax for creating a table?",
    Answer: "CREATE TABLE table_name (column1_name datatype, ...)",
    Distractor1: "CREATE TABLE table_name (int main void column_name)",
    Distractor2: "UPDATE TABLE table_name (column1_name datatype, ...)",
    Distractor3: "CREATE NEW TABLE table_name (column1_name datatype, ...)",
    Explanation:
      "In SQL, tables are created by using the CREATE TABLE statement as well as specifying each columns datatype.",
    Link: "https://www.freecodecamp.org/news/sql-create-table-statement-with-example-syntax/"
  },
  {
    Question:
      "In SQL, which command is used to convert from one data type to another?",
    Answer: "CAST()",
    Distractor1: "CHANGE()",
    Distractor2: "TYPE()",
    Distractor3: "CONVERT()",
    Explanation:
      "The CAST() function is used to convert a column in a table from one data type to another.",
    Link: "https://www.freecodecamp.org/news/cast-a-function-in-sql-convert-char-to-int-sql-server-example/"
  },
  {
    Question:
      "In SQL, which of the following is the correct syntax for inserting a new record(row) into a table?",
    Answer: "INSERT INTO table_name (column1, ...) VALUES (value1, ...);",
    Distractor1: "ADD ROW table_name (column1, ...) VALUES (value1, ...);",
    Distractor2: "ALTER table_name (value1, ...);",
    Distractor3: "INSERT INTO table_name (column1, ...);",
    Explanation:
      "The INSERT INTO statement is used to add new rows into a table, with the number of values equal to the number of specified columns",
    Link: "https://www.freecodecamp.org/news/insert-into-sql-how-to-insert-into-a-table-query-example-statement/"
  },
  {
    Question:
      "In SQL, what function is used to join two or more strings together to form a single string?",
    Answer: "CONCAT()",
    Distractor1: "SUBSTR()",
    Distractor2: "INSERT()",
    Distractor3: "JOIN()",
    Explanation:
      "The CONCAT() function joins at least two parameters(strings) and can accept a total of 254 parameters.",
    Link: "https://www.freecodecamp.org/news/learn-sql-in-10-minutes/"
  },
  {
    Question:
      "In relational databases, Primary keys cannot contain what type of value?",
    Answer: "NULL values",
    Distractor1: "string values",
    Distractor2: "numeric values",
    Distractor3: "boolean",
    Explanation:
      "Primary keys must contain unique values and cannot contain NULL values.",
    Link: "https://www.freecodecamp.org/news/primary-key-sql-tutorial-how-to-define-a-primary-key-in-a-database/"
  },
  {
    Question: "In SQL, what is a View?",
    Answer:
      "A View is a database object that presents data existing in one or more tables",
    Distractor1: "A View removes an item from a table",
    Distractor2: "A View sorts items in a table",
    Distractor3: "A View does not exist in SQL",
    Explanation:
      "A View is a database object that presents data existing in one or more tables",
    Link: "https://www.freecodecamp.org/news/sql-create-view-mysql/"
  },
  {
    Question:
      " In relational databases, which of the following allows you to uniquely identify a tuple?",
    Answer: "Super Key",
    Distractor1: "Schema",
    Distractor2: "Attribute",
    Distractor3: "Domain",
    Explanation:
      "Super Key is used to uniquely identify a tuple in a relation.",
    Link: "https://en.wikipedia.org/wiki/Superkey"
  },
  {
    Question:
      "In SQL, how can the user change 'codingWebsite' into 'freeCodeCamp' in the 'Name' column for the Users table?",
    Answer: "UPDATE Users Set Name='freeCodeCamp' WHERE Name='codingWebsite' ",
    Distractor1:
      "MODIFY Users Set Name = 'codingWebsite' WHERE Name = 'freeCodeCamp' ",
    Distractor2:
      "UPDATE Users Set Name = 'codingWebsite' WHERE Name = 'freeCodeCamp' ",
    Distractor3:
      "MODIFY Users Set Name = 'freeCodeCamp' WHERE Name = 'codingWebsite' ",
    Explanation:
      "The UPDATE command and WHERE clause are used together to change the name in a SQL table.",
    Link: "https://www.freecodecamp.org/news/sql-update-statement-update-query-in-sql/"
  },
  {
    Question:
      "In MySQL, what is the maximum string length for the VARCHAR data type?",
    Answer: "Up to 65,535 bytes",
    Distractor1: "255 bytes",
    Distractor2: "256 bytes",
    Distractor3: "Up to 65,567 bytes",
    Explanation:
      "The VARCHAR data type has a maximum string length range from 0 to 65535.",
    Link: "https://www.freecodecamp.org/news/learn-sql-in-10-minutes/"
  },
  {
    Question:
      "Which command is used in a 'WHERE' or 'HAVING' clause to limit the selected rows to the items when a column has a certain pattern of characters contained in it?",
    Answer: "LIKE",
    Distractor1: "NOT",
    Distractor2: "INSERT",
    Distractor3: "JOIN",
    Explanation:
      "You can place NOT before LIKE to exclude the rows with the string pattern instead of selecting them.",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/"
  },
  {
    Question: "How do you limit query results in ORACLE-SQL?",
    Answer: "FETCH FIRST",
    Distractor1: "LIMIT",
    Distractor2: "TOP",
    Distractor3: "FIRST",
    Explanation:
      "You can use FETCH FIRST, in newer versions of Oracle, to restrict the number of rows returned by a query.",
    Link: "https://www.freecodecamp.org/news/row_number-in-sql-select-top-example-in-sql-and-sql-server2/"
  },
  {
    Question: "In a RDBMS, what is used to create a reference between tables?",
    Answer: "Foreign Keys",
    Distractor1: "Candidate Keys ",
    Distractor2: "Alternate Keys",
    Distractor3: "Composite Keys",
    Explanation:
      "A foreign key is used to link two tables by making reference to another table's primary key.",
    Link: "https://www.freecodecamp.org/news/what-is-a-relational-database-rdbms-definition/"
  },
  {
    Question:
      "Which of the following MySQL commands shows the structure of a table?",
    Answer: "DESCRIBE table_name;",
    Distractor1: "SHOW table_name;",
    Distractor2: "EXPLAIN table_name;",
    Distractor3: "INFO table_name;",
    Explanation:
      "In MYSQL, the DESCRIBE command followed by the table name is used to show the structure of a table",
    Link: "https://www.freecodecamp.org/news/learn-sql-queries-database-query-tutorial-for-beginners/"
  },
  {
    Question:
      "In SQL, how do you select every row in a given table named 'freecodecamp'?",
    Answer: "SELECT * FROM freecodecamp",
    Distractor1: "SELECT all FROM freecodecamp;",
    Distractor2: "FROM freecodecamp SELECT all;",
    Distractor3: "FROM freecodecamp SELECT *;",
    Explanation:
      "In SQl, SELECT is used to select data from a database. The * is a wildcard character that matches any column in the table. The FROM clause specifies the table to select from.",
    Link: "https://www.freecodecamp.org/news/learn-sql-queries-database-query-tutorial-for-beginners/"
  },
  {
    Question:
      "In SQL, what keyword is used to count unique values that are NOT NULL and not duplicates?",
    Answer: "DISTINCT",
    Distractor1: "GROUP BY",
    Distractor2: "COUNT",
    Distractor3: "WHERE",
    Explanation:
      "In SQL, the DISTINCT keyword will only count unique values that are NOT NULL. The computer will ignore any duplicate values.",
    Link: "https://www.freecodecamp.org/news/sql-distinct-statement-how-to-query-select-and-count/"
  },
  {
    Question:
      "In SQL, what keyword is used if the WHERE clause fails when being used with aggregate functions?",
    Answer: "HAVING",
    Distractor1: "ADD",
    Distractor2: "DISTINTC",
    Distractor3: "LIMIT",
    Explanation:
      "In SQL, you will have to use the HAVING clause because the WHERE clause fails when used with aggregate functions.",
    Link: "https://www.freecodecamp.org/news/sql-having-how-to-group-and-count-with-a-having-statement/"
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
    Link: "https://en.wikipedia.org/wiki/Microsoft_Access"
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
    Link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-sql-join-statements/"
  },
  {
    Question: "In SQL, normalized databases are optimized to reduce...",
    Answer: "Data redundancy",
    Distractor1: "Read time",
    Distractor2: "Query size",
    Distractor3: "Storage space",
    Explanation:
      "Normalized databases are optimized to reduce data redundancy.",
    Link: "https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/"
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
    Link: "https://www.freecodecamp.org/news/sql-like-statement-how-to-query-sql-with-wildcard/"
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
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/"
  },
  {
    Question: "In SQL, what does DML stand for?",
    Answer: "Data Manipulation Language",
    Distractor1: "Data Definition Language",
    Distractor2: "Data Control Language",
    Distractor3: "Distracting Definition Language",
    Explanation: "DML stands for Data Manipulation Language.",
    Link: "https://en.wikipedia.org/wiki/Data_manipulation_language"
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
    Link: "https://www.freecodecamp.org/news/the-sql-primary-key-constraint-explained/"
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
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/"
  },
  {
    Question: "Which one is NOT a type of data model used in NoSQL?",
    Answer: "Infix notation",
    Distractor1: "key-value",
    Distractor2: "document",
    Distractor3: "wide-column or tabular",
    Explanation:
      "NoSQL supports a variety of data models including  'key-value', 'document', 'wide-column or tabular' formats",
    Link: "https://www.freecodecamp.org/news/learn-nosql-in-3-hours/"
  },
  {
    Question: "What does DBMS stand for?",
    Answer: "Database Management System",
    Distractor1: "Dataset Management System",
    Distractor2: "Database Maintenance System",
    Distractor3: "Database Management Site",
    Explanation: "DBMS stands for Database Management System. ",
    Link: "https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/"
  },
  {
    Question:
      "In SQL, this is part of a query that determines which columns of data to show in the results.",
    Answer: "SELECT",
    Distractor1: "TABLE",
    Distractor2: "CREATE",
    Distractor3: "QUERY",
    Explanation: "SELECT determines which columns will be shown in the result.",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/"
  },
  {
    Question:
      "In SQL, an individual entry in a table of a database is known as...",
    Answer: "Record/Row",
    Distractor1: "Column",
    Distractor2: "Cell",
    Distractor3: "Query",
    Explanation:
      "An individual entry in a table of a database table is known as record or row.",
    Link: "https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/"
  },
  {
    Question: "In SQL, what does DDL stand for?",
    Answer: "Data Definition Language",
    Distractor1: "Data Manipulation Language",
    Distractor2: "Data Control Language",
    Distractor3: "Deleting Definition Language",
    Explanation: "DDL stands for Data Definition Language. ",
    Link: "https://en.wikipedia.org/wiki/Data_definition_language"
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
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/"
  },
  {
    Question: "In SQL, the values of a table are known as...",
    Answer: "Fields",
    Distractor1: "API",
    Distractor2: "Query",
    Distractor3: "Database",
    Explanation: "The values of a SQL database table are known as fields.",
    Link: "https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/"
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
    Link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-sql-join-statements/"
  },
  {
    Question: "In SQL, what does DCL stand for?",
    Answer: "Data Control Language",
    Distractor1: "Data Manipulation Language",
    Distractor2: "Data Definition Language",
    Distractor3: "Data Concato Language",
    Explanation: "DCL stands for Data Control Language.",
    Link: "https://en.wikipedia.org/wiki/Data_control_language"
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
    Link: "https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/"
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
    Link: "https://en.wikipedia.org/wiki/Data_manipulation_language"
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
    Link: "https://www.freecodecamp.org/news/learn-sql-in-10-minutes/"
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
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/"
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
    Link: "https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/"
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
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/"
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
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/"
  },
  {
    Question: "What does SQL stand for?",
    Answer: "Structured Query Language",
    Distractor1: "Standardized Question Language",
    Distractor2: "String Query Language",
    Distractor3: "Single Query Language",
    Explanation:
      "SQL stands for Structured Query Language and it is used with relational databases.",
    Link: "https://www.freecodecamp.org/news/learn-sql-in-10-minutes/"
  },
  {
    Question: "In SQL, what is the command to create a table?",
    Answer: "CREATE TABLE <table-name>",
    Distractor1: "TABLE CREATE <table-name>",
    Distractor2: "NEW TABLE <table-name>",
    Distractor3: "TABLE NEW <table-name>",
    Explanation:
      "CREATE TABLE <table-name> is the SQL command to create a table. ",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/"
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
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/"
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
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/"
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
    Link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-sql-join-statements/"
  },
  {
    Question: "In SQL, what statement is used to update a record in a table?",
    Answer: "UPDATE",
    Distractor1: "CHANGE",
    Distractor2: "SELECT",
    Distractor3: "QUERY",
    Explanation:
      "The UPDATE statement is used to update the value of a record in SQL.",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/"
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
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/"
  },
  {
    Question: "In SQL, what is the command used to delete a table?",
    Answer: "DROP TABLE table_name",
    Distractor1: "REMOVE TABLE table_name",
    Distractor2: "DELETE TABLE table_name",
    Distractor3: "ALTER TABLE table_name",
    Explanation: "The DROP TABLE command is used to delete an entire table.",
    Link: "https://www.freecodecamp.org/news/learn-sql-queries-database-query-tutorial-for-beginners/"
  },
  {
    Question:
      "In SQL, what is the command used to give a record a date and time value from the system on execution?",
    Answer: "NOW()",
    Distractor1: "TIMESTAMP()",
    Distractor2: "Y-M-D()",
    Distractor3: "DATETIME()",
    Explanation:
      "The NOW() function gives the selected record a value of the current timestamp",
    Link: "https://www.freecodecamp.org/news/sql-date-functions-getdate/"
  },
  {
    Question: "In SQL, where can we access all column names within a database?",
    Answer: "INFORMATION_SCHEMA.COLUMNS",
    Distractor1: "COLUMNS",
    Distractor2: "SCHEMA.COLUMNS",
    Distractor3: "SCHEMA.INFO.COLS",
    Explanation:
      "You can select from INFORMATION_SCHEMA.COLUMNS and combine with a WHERE clause when needing to identify where a certain column is stored.",
    Link: "https://www.freecodecamp.org/news/learn-sql-queries-database-query-tutorial-for-beginners/"
  },
  {
    Question:
      "In SQL, what statement should you use to undo a GRANT statement?",
    Answer: "REVOKE",
    Distractor1: "UNDO",
    Distractor2: "DELETE",
    Distractor3: "ROLLBACK",
    Explanation:
      "The REVOKE statement can be used to undo the action of a GRANT statement.",
    Link: "https://dev.mysql.com/doc/refman/5.6/en/revoke.html"
  },
  {
    Question:
      "In SQL, which command erases all the updates made from the start of the transaction?",
    Answer: "ROLLBACK",
    Distractor1: "COMMIT",
    Distractor2: "DELETE",
    Distractor3: "REVOKE",
    Explanation:
      "The ROLLBACK TRANSACTION command will erase all modifications made to the data. Changes made to table and local variables will not be affected by this command.",
    Link: "https://learn.microsoft.com/en-us/sql/t-sql/language-elements/rollback-transaction-transact-sql?view=sql-server-ver16"
  },
  {
    Question:
      "Which of the following is not a distinct relationship in a SQL database?",
    Answer: "All-to-one",
    Distractor1: "One-to-one",
    Distractor2: "One-to-many",
    Distractor3: "Many-to-many",
    Explanation:
      "Database data can either be linked by one-to-one, one-to-many, or many-to-many relationships.",
    Link: "https://www.freecodecamp.org/news/relational-vs-nonrelational-databases-difference-between-sql-db-and-nosql-db/"
  },
  {
    Question: "In SQL, what does DDL stand for ",
    Answer: "Data Definition Language",
    Distractor1: "Data distinct Language",
    Distractor2: "Data Decoded Language",
    Distractor3: "Data Developer Language",
    Explanation:
      "Some of the Data Definition Language commands include CREATE, ALTER, DROP, and TRUNCATE.",
    Link: "https://www.freecodecamp.org/news/dbms-and-sql-basics/"
  },
  {
    Question:
      "In SQL, which function rounds a number to a specified number of decimal places?",
    Answer: "ROUND()",
    Distractor1: "TRUNCATE()",
    Distractor2: "CEIL()",
    Distractor3: "FLOOR()",
    Explanation:
      "The ROUND() function takes in two parameters(number and decimals) and rounds the number to the number of decimals specified in the 2nd parameter.",
    Link: "https://dev.mysql.com/doc/refman/5.7/en/precision-math-rounding.html"
  },
  {
    Question:
      "In SQL, which data type is used to store a string with up to 255 characters?",
    Answer: "TINYTEXT",
    Distractor1: "STRING",
    Distractor2: "BLOB",
    Distractor3: "BINARY",
    Explanation:
      "TINYTEXT can store up to 255 bytes and can be used for text like captions or summaries.",
    Link: "https://www.freecodecamp.org/news/learn-sql-in-10-minutes/"
  },
  {
    Question: "In SQL, what does TCL stand for?",
    Answer: " Transaction Control Language",
    Distractor1: "Transaction controlling Language",
    Distractor2: "Transacted Control Language",
    Distractor3: "Transaction Console Language",
    Explanation:
      "Some of the Transaction Control Language commands include COMMIT, ROLLBACK, and SAVE TRANSACTION.",
    Link: "https://www.freecodecamp.org/news/dbms-and-sql-basics/"
  },
  {
    Question:
      "In SQL, which of the following is an approach for joining tables?",
    Answer: "All of the mentioned",
    Distractor1: "Subqueries",
    Distractor2: "Union Join",
    Distractor3: "Natural Join",
    Explanation:
      "In SQL, you can use a subquery, union join or natural join to join multiple tables together.",
    Link: "https://www.freecodecamp.org/news/dbms-and-sql-basics/"
  },
  {
    Question:
      "In SQL, what is the name of the join that will return matched and unmatched values from a table?",
    Answer: "Outer join",
    Distractor1: "All of the Mentioned",
    Distractor2: "Equi-join",
    Distractor3: "Natural Join",
    Explanation:
      "OUTER JOIN is used to return matched and unmatched values from a table.",
    Link: "https://www.freecodecamp.org/news/dbms-and-sql-basics/"
  },
  {
    Question:
      "In SQL, what is the name for an organized collection of data kept in a central location?",
    Answer: "Database",
    Distractor1: "Table",
    Distractor2: "Excel",
    Distractor3: "csv",
    Explanation:
      "A database is a curated collection of structured data that is kept in one location.",
    Link: "https://www.freecodecamp.org/news/sql-and-databases-full-course/"
  },
  {
    Question:
      "In MySQL, which of the following queries can be used to rename the table BaseCamp to BaseCamp_New?",
    Answer: "ALTER TABLE BaseCamp RENAME TO BaseCamp_New ;",
    Distractor1: "ALTER TABLE BaseCamp TO BaseCamp_New ;",
    Distractor2: "ALTER TABLE BaseCamp UPDATE TO BaseCamp_New ;",
    Distractor3: "ALTER TABLE BaseCamp SET TO BaseCamp_New ;",
    Explanation:
      "If you want to rename a table called BaseCamp to BaseCamp_New, then you would use the following syntax in MySQL: ALTER TABLE table_name RENAME TO new_table_name;",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/"
  },
  {
    Question: "In SQL, what does BLOB stand for?",
    Answer: "Binary Large Object",
    Distractor1: "Bad Listed Object",
    Distractor2: "Bad Labelled Object",
    Distractor3: "Big Listed Object",
    Explanation:
      "BLOB stands for Binary Large Object and it is a SQL data type used to store large amounts of data.",
    Link: "https://www.freecodecamp.org/news/sql-data-types-mysql/"
  },
  {
    Question: "In SQL, what are the two types of Database Management Systems?",
    Answer: "relational databases and non-relational databases",
    Distractor1: "functional and object oriented",
    Distractor2: "procedural and relational",
    Distractor3: "non-relational and assembly",
    Explanation:
      "The two types of Database Management Systems are relational and non-relational databases.",
    Link: "https://www.freecodecamp.org/news/dbms-and-sql-basics/"
  },
    {
    Question: "In SQL Server, which of these statements can we check for Errors?",
    Answer: "INSERT",
    Distractor1: "CREATE",
    Distractor2: "DELETE",
    Distractor3: "DROP",
    Explanation:
      "INSERT statement checks for errors among others here.",
    Link: "https://www.freecodecamp.org/news/insert-into-sql-sql-insert-statement-example/"
  },
];

export default sqlQuiz;
