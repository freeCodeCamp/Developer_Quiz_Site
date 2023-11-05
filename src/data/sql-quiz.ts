const sqlQuiz = [
  {
    Question: "Which of the following is NOT a type of SQL constraint?",
    Answer: "CHECKSIZE",
    Distractor1: "PRIMARY KEY",
    Distractor2: "FOREIGN KEY",
    Distractor3: "UNIQUE",
    Explanation:
      "SQL constraints are used to specify rules for the data in a table. CHECKSIZE is not a standard SQL constraint. The standard constraints include PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, and DEFAULT.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/"
  },
  {
    Question: "What is a FOREIGN KEY constraint used for in SQL?",
    Answer:
      "A FOREIGN KEY constraint defines a relationship between tables by referencing the primary key of another table.",
    Distractor1: "It ensures that a column can only contain numeric values.",
    Distractor2: "It enforces uniqueness within a column.",
    Distractor3: "It allows a column to contain NULL values.",
    Explanation:
      "A FOREIGN KEY constraint establishes a link between two tables by referencing the primary key of another table. It enforces referential integrity and helps maintain relationships between tables in a database.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/"
  },
  {
    Question: "What is the purpose of the SQL INSERT statement?",
    Answer:
      "The SQL INSERT statement is used to add new records to a table in the database.",
    Distractor1: "It is used to modify existing records in a table.",
    Distractor2: "It is used to delete records from a table.",
    Distractor3: "It is used to retrieve data from a table.",
    Explanation:
      "The INSERT statement is used to insert new records with specified values into a table, effectively adding data to the table.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/"
  },
  {
    Question: "What is the purpose of the CREATE TABLE statement in SQL?",
    Answer:
      "The CREATE TABLE statement is used to create a new table in a database.",
    Distractor1: "It is used to update existing table structures.",
    Distractor2: "It is used to delete a table from the database.",
    Distractor3: "It is used to add new records to an existing table.",
    Explanation:
      "The CREATE TABLE statement is used to define and create a new table in a database, specifying its columns, data types, and constraints.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/"
  },
  {
    Question: "What is the purpose of the SQL WHERE clause?",
    Answer:
      "The SQL WHERE clause is used to filter and specify the records to be retrieved, updated, or deleted based on specific conditions.",
    Distractor1: "It is used to order records in a table.",
    Distractor2: "It is used to define the table's primary key.",
    Distractor3: "It is used to join multiple tables together.",
    Explanation:
      "The WHERE clause is used to narrow down the selection of records in a table by applying specific conditions. It is commonly used with SELECT, UPDATE, and DELETE statements to filter records.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/"
  },
  {
    Question: "What is SQL Injection?",
    Answer:
      "SQL Injection is when malicious SQL code is placed into input fields.",
    Distractor1:
      "SQL Injection is a method for improving SQL query performance.",
    Distractor2: "SQL Injection is a way to add constraints to SQL queries.",
    Distractor3: "SQL Injection is a tool used for creating SQL tables.",
    Explanation:
      "SQL Injection is a significant security concern as it allows attackers to bypass application security measures and manipulate database queries. They can extract, modify, or delete data, leading to unauthorized access or data breaches.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/"
  },
  {
    Question:
      "Which HTTP methods correlate with the CREATE, READ, UPDATE, and DELETE (CRUD) operations in SQL?",
    Answer:
      "HTTP POST corresponds to CREATE, HTTP GET to READ, HTTP PUT to UPDATE, and HTTP DELETE to DELETE (CRUD) operations.",
    Distractor1:
      "HTTP POST corresponds to DELETE, HTTP GET to CREATE, HTTP PUT to READ, and HTTP DELETE to UPDATE.",
    Distractor2:
      "HTTP POST corresponds to UPDATE, HTTP GET to DELETE, HTTP PUT to READ, and HTTP DELETE to CREATE.",
    Distractor3:
      "HTTP POST corresponds to READ, HTTP GET to UPDATE, HTTP PUT to DELETE, and HTTP DELETE to CREATE.",
    Explanation:
      "HTTP methods align with CRUD operations: POST (CREATE), GET (READ), PUT (UPDATE), and DELETE (DELETE). These methods are used to perform corresponding database operations.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/"
  },
  {
    Question: "What is the purpose of a PRIMARY KEY constraint in SQL?",
    Answer:
      "A PRIMARY KEY constraint uniquely identifies records within a table, and each table can have one primary key.",
    Distractor1: "It specifies that a column can have NULL values.",
    Distractor2: "It enforces the uniqueness of values in a column.",
    Distractor3: "It allows multiple primary keys within a single table.",
    Explanation:
      "A PRIMARY KEY constraint ensures that the values in the specified column(s) are unique and not NULL. It uniquely identifies each record in the table and enforces data integrity.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/"
  },
  {
    Question: "What does the NOT NULL constraint in SQL ensure?",
    Answer:
      "The NOT NULL constraint ensures that a column will not accept NULL values.",
    Distractor1: "It enforces uniqueness of values in a column.",
    Distractor2: "It allows a column to contain only unique values.",
    Distractor3:
      "It enforces a default value for a column if NULL is provided.",
    Explanation:
      "The NOT NULL constraint is used to specify that a column must contain a value and cannot be left empty (NULL). It ensures that every row in the table has a value in that column.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/"
  },
  {
    Question:
      "Which SQL database is known for its powerful features, open-source nature, and is often considered production-ready?",
    Answer: "PostgreSQL",
    Distractor1: "MySQL",
    Distractor2: "Microsoft SQL Server",
    Distractor3: "SQLite",
    Explanation:
      "PostgreSQL is known for its robust features and is often used in production environments.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter3constraints"
  },
  {
    Question:
      "Which SQL database is often used for learning and small systems due to its lightweight and serverless nature?",
    Answer: "SQLite",
    Distractor1: "MySQL",
    Distractor2: "PostgreSQL",
    Distractor3: "Microsoft SQL Server",
    Explanation:
      "SQLite is lightweight and great for learning and small systems.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter3constraints"
  },
  {
    Question: "In SQL, how are boolean values typically stored in databases?",
    Answer: "As integers (0 for false, 1 for true)",
    Distractor1: "As text strings ('true' or 'false')",
    Distractor2: "As binary data",
    Distractor3: "As NULL values",
    Explanation:
      "Boolean values are commonly stored as integers, where 0 represents false and 1 represents true.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter3constraints"
  },
  {
    Question:
      "What is a common strategy for protecting against data loss when deleting records from a database?",
    Answer: "Using soft deletes",
    Distractor1: "Creating manual backups",
    Distractor2: "Not allowing deletions",
    Distractor3: "Using SQL injections",
    Explanation:
      "Soft deletes involve marking records as deleted instead of physically removing them, allowing for potential data recovery.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter3constraints"
  },
  {
    Question: "In SQL,how many primary keys can be created in a table?",
    Answer: "Only one",
    Distractor1: "Infinte",
    Distractor2: "Twelve",
    Distractor3: "Two",
    Explanation:
      "A table can have multiple unique keys that identify each row, but only one primary key.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter3constraints"
  },
  {
    Question: "In SQL, what does the HAVING clause typically follow?",
    Answer: "GROUP BY",
    Distractor1: "ORDER BY",
    Distractor2: "WHERE",
    Distractor3: "HAVING is used alone",
    Explanation:
      "The HAVING clause is used in combination with the GROUP BY clause to filter grouped records based on specified conditions.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter7howtoperformaggregationsinsql"
  },
  {
    Question:
      "In database normalization, what does the First Normal Form (1NF) require?",
    Answer: "All attributes must have unique names",
    Distractor1: "All data values in a column must be of the same data type",
    Distractor2: "All primary keys must be integers",
    Distractor3: " All attributes must have a value for every record",
    Explanation:
      "The First Normal Form (1NF) requires that all attributes in a table must have unique names, ensuring that each column represents a single atomic value.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter9databasenormalization"
  },
  {
    Question:
      "Which normal form ensures that there are no transitive dependencies?",
    Answer: "Third Normal Form (3NF)",
    Distractor1: "Second Normal Form (2NF)",
    Distractor2: " Boyce-Codd Normal Form (BCNF)",
    Distractor3: "Fourth Normal Form (4NF)",
    Explanation:
      "The Third Normal Form (3NF) addresses transitive dependencies and ensures that non-key attributes are not dependent on other non-key attributes.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter9databasenormalization"
  },
  {
    Question:
      "Which SQL clause is used to filter rows before applying the aggregate functions?",
    Answer: "WHERE",
    Distractor1: "GROUP BY",
    Distractor2: "HAVING",
    Distractor3: "ORDER BY",
    Explanation:
      "The WHERE clause in SQL is used to filter rows before applying the aggregate functions.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter7howtoperformaggregationsinsql"
  },
  {
    Question:
      "Which SQL clause sets the child data to NULL when the parent data is deleted?",
    Answer: "ON DELETE SET NULL",
    Distractor1: "UPDATE TO NULL ",
    Distractor2: "ON DELETE CASCADE",
    Distractor3: "DELETE NULL",
    Explanation:
      "SQL Server sets the rows in the child table to NULL if the corresponding rows in the parent table are deleted",
    Link: "https://www.freecodecamp.org/news/sql-and-databases-full-course/"
  },
  {
    Question: "In SQL, what does CRUD stand for?",
    Answer: "CREATE, READ, UPDATE, DELETE",
    Distractor1: "CREATE, ROW, UNION, DROP ",
    Distractor2: "COPY, ROW, UPDATE, DISPLAY",
    Distractor3: "COLUMNS, ROWS, UNION, DELETE",
    Explanation:
      "CRUD is an acronym that stands for CREATE, READ, UPDATE, and DELETE. These four operations are the bread and butter of nearly every database you will create.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter4crudoperationsinsql"
  },
  {
    Question:
      "Which of the following best describes the role of the NEW keyword when working with triggers in SQL?",
    Answer:
      "It provides access to the new data being inserted or updated, allowing modification before the event if the trigger time is set to BEFORE.",
    Distractor1: "It refers to the data after an UPDATE or DELETE operation.",
    Distractor2: "It encrypts data before insertion.",
    Distractor3: "It deletes old data when new data is inserted.",
    Explanation:
      "The NEW keyword provides access to the new data being created in INSERT and UPDATE events. When using BEFORE as the trigger time, the data can be modified before it is stored in the database.",
    Link: "https://www.freecodecamp.org/news/sql-triggers/"
  },
  {
    Question:
      "How can you retrieve unique values from a specific column in SQL to avoid duplicates?",
    Answer: "SELECT DISTINCT column_name FROM table_name;",
    Distractor1: "DELETE DUPLICATE column_name FROM table_name;",
    Distractor2: "REMOVE DUPLICATE column_name FROM table_name;",
    Distractor3: "SELECT UNIQUE column_name FROM table_name;",
    Explanation:
      "The DISTINCT keyword in a SELECT statement retrieves only unique values from a particular column, effectively removing duplicates.",
    Link: "https://www.freecodecamp.org/news/how-to-remove-duplicate-data-in-sql/"
  },
  {
    Question: "What SQL command is used to delete a record from a table?",
    Answer: "DELETE FROM",
    Distractor1: "REMOVE FROM",
    Distractor2: "DROP FROM",
    Distractor3: "CUT FROM",
    Explanation:
      "The DELETE FROM command is used to remove records from a table in an SQL database. It's important to use a WHERE clause to specify which records to delete, otherwise all records will be removed.",
    Link: "https://www.freecodecamp.org/news/how-to-perform-crud-operations-js-and-sql/"
  },
  {
    Question: "Which of the following is not a commonly used SQL constraint?",
    Answer: "UPDATE",
    Distractor1: "CHECK",
    Distractor2: "DEFAULT",
    Distractor3: "UNIQUE",
    Explanation:
      "In SQL, the UPDATE statement is used to modify the existing records in a table and therefore not a constraint.",
    Link: "https://www.freecodecamp.org/news/best-sql-database-tutorial/"
  },
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
      "In SQL, how do you select every row in a given table named 'freeCodeCamp'?",
    Answer: "SELECT * FROM freeCodeCamp",
    Distractor1: "SELECT all FROM freeCodeCamp;",
    Distractor2: "FROM freeCodeCamp SELECT all;",
    Distractor3: "FROM freeCodeCamp SELECT *;",
    Explanation:
      "In SQL, SELECT is used to select data from a database. The * is a wildcard character that matches any column in the table. The FROM clause specifies the table to select from.",
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
    Distractor2: "DISTINCT",
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
    Distractor3: "Data Concat Language",
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
    Question: "In SQL, which of these is not an aggregate function?",
    Answer: "CAST",
    Distractor1: "MIN/MAX",
    Distractor2: "AVG",
    Distractor3: "COUNT",
    Explanation:
      "Aggregate functions do a particular task across database rows. CAST is not an aggregate function because it is used to convert one type of data value into another.",
    Link: "https://www.freecodecamp.org/news/sql-aggregate-functions-with-example-data-queries-for-beginners/"
  },
  {
    Question: "In SQL, which of the following is not a DDL command?",
    Answer: "DELETE",
    Distractor1: "RENAME",
    Distractor2: "TRUNCATE",
    Distractor3: "COMMENT",
    Explanation:
      "DDL stands for Data Definition Language, but DELETE is a DML(Data Manipulation Language) command.",
    Link: "https://www.freecodecamp.org/news/dbms-and-sql-basics/"
  },
  {
    Question:
      "In MySQL, which of the following would be used to delete a database named 'users'?",
    Answer: "DROP DATABASE users",
    Distractor1: "DELETE DATABASE users",
    Distractor2: "TRUNCATE DATABASE users",
    Distractor3: "UNDO DATABASE users",
    Explanation:
      "'DROP DATABASE <table-name>' drops all tables in the database and deletes the database.",
    Link: "https://dev.mysql.com/doc/refman/8.0/en/drop-database.html"
  },
  {
    Question: "In SQL, which of the following is a DQL command?",
    Answer: "SELECT",
    Distractor1: "UPDATE",
    Distractor2: "COMMIT",
    Distractor3: "INSERT",
    Explanation:
      "DQL stands for Data Query Language, and 'SELECT' is the only DQL command.",
    Link: "https://www.freecodecamp.org/news/learn-sql-in-10-minutes/"
  },
  {
    Question: "In SQL, which of the following is not a string data type?",
    Answer: "DEC",
    Distractor1: "BLOB",
    Distractor2: "BINARY",
    Distractor3: "VARCHAR",
    Explanation:
      "DEC is a numeric data type while BLOB, BINARY and VARCHAR are string data types in SQL.",
    Link: "https://www.freecodecamp.org/news/learn-sql-in-10-minutes/"
  },
  {
    Question:
      "In SQL, which of the following data types holds a FIXED length string?",
    Answer: "CHAR",
    Distractor1: "VARCHAR",
    Distractor2: "TEXT",
    Distractor3: "BLOBs",
    Explanation:
      "CHAR holds a fixed length string (up to 255 characters), while VARCHAR and TEXT hold variable length strings.",
    Link: "https://www.freecodecamp.org/news/sql-data-types-mysql/"
  },
  {
    Question:
      "In SQL, which of the following wildcards combined with the LIKE operator finds any value that has 'or' at any position?",
    Answer: "%or%",
    Distractor1: "__r%",
    Distractor2: "a__%",
    Distractor3: "or%",
    Explanation:
      "The SQL LIKE operator with '%or%' matches any values containing 'or' at any position within the string.",
    Link: "https://youtu.be/-fW2X7fh7Yg?t=5881/"
  },
  {
    Question:
      "How can you retrieve all columns from a table named 'employees' in SQL?",
    Answer: "SELECT * FROM employees;",
    Distractor1: "SELECT ALL columns FROM employees;",
    Distractor2: "SELECT COLUMN employees FROM *;",
    Distractor3: "GET * FROM employees;",
    Explanation:
      "The SELECT * statement retrieves all columns from the 'employees' table.",
    Link: "https://www.freecodecamp.org/news/sql-select-statement-and-query-examples/"
  },
  {
    Question:
      "What SQL function is used to count the number of rows in a table?",
    Answer: "SELECT COUNT(*) FROM table_name;",
    Distractor1: "SUM(*) FROM table_name;",
    Distractor2: "COUNT(table_name);",
    Distractor3: "TOTAL_ROWS(table_name);",
    Explanation:
      "The COUNT(*) function in SQL is used to count the number of rows in a table.",
    Link: "https://www.freecodecamp.org/news/sql-distinct-statement-how-to-query-select-and-count/"
  },
  {
    Question:
      "What SQL function is used to get every part of the string that occurs before the delimiter you specify?",
    Answer: "SUBSTRING_INDEX()",
    Distractor1: "COUNT()",
    Distractor2: "CHAR_LENGTH()",
    Distractor3: "CONCAT()",
    Explanation:
      "When you specify the compulsory arguments, the SUBSTRING_INDEX() function will get you every part of the string that occurs before the delimiter you specify.",
    Link: "https://www.freecodecamp.org/news/sql-where-contains-string-substring-query-example/"
  },
  {
    Question:
      "Which logical operator can be used to modify a WHERE clause to determine if a value is in the middle of two numbers?",
    Answer: "BETWEEN",
    Distractor1: "IN",
    Distractor2: "SOME",
    Distractor3: "EXISTS",
    Explanation:
      "The BETWEEN operator is an intuitive way to use the WHERE clause to help narrow down a result set.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/"
  },
  {
    Question: "What SQL statement contains a valid subquery?",
    Answer:
      "SELECT * FROM employees WHERE wage > (SELECT AVG(wage) FROM employees)",
    Distractor1: "SELECT MAX(*) FROM employees",
    Distractor2:
      "SELECT AVG(wage) FROM employees WHERE name IN ('name1', 'name2', 'name3')",
    Distractor3:
      "SELECT country, AVG(wage) FROM employees GROUP BY country LIMIT 3",
    Explanation:
      "A SQL subquery is a query inside a query. So, in SQL, a subquery is also called a nested query or an inner query. The outer query in which the inner query is inserted is the main query.",
    Link: "https://www.freecodecamp.org/news/sql-subquery-how-to-sub-query-in-select-statement/"
  },
  {
    Question: "What is a good reason to use a temporary table?",
    Answer:
      "to store and reuse intermediate query results to avoid redundant computations",
    Distractor1: "to store data for a short-lived analysis such as 1-2 weeks",
    Distractor2: "to improve database security",
    Distractor3: "to improve query performance",
    Explanation:
      "A temporary SQL table is a table that is created and used within the context of a specific session or transaction in a database.",
    Link: "https://www.freecodecamp.org/news/sql-temp-table-how-to-create-a-temporary-sql-table/"
  },
  {
    Question:
      "In SQL, which operator is used to check if a value exists in a specified set of values?",
    Answer: "IN",
    Distractor1: "BETWEEN",
    Distractor2: "EXISTS",
    Distractor3: "LIKE",
    Explanation:
      "The IN operator returns true or false if the first operand matches any of the values in the second operand. The IN operator is a shorthand for multiple OR conditions.",
    Link: "https://www.freecodecamp.org/news/sql-select-statement-and-query-examples/"
  },
  {
    Question: "Which of the following is not a type of SQL injection?",
    Answer: "Intersection SQL Injection",
    Distractor1: "Error-Based SQL Injection",
    Distractor2: "Blind SQL Injection",
    Distractor3: "Union SQL Injection",
    Explanation:
      "SQL injection is when you insert or inject a SQL query via input data from the client to the application. Error-Based SQL Injection, Blind SQL Injection, UNION SQL Injection are common types of SQL injections. ",
    Link: "https://www.freecodecamp.org/news/what-is-sql-injection-how-to-prevent-it/"
  },
  {
    Question: "What is the primary use of the EXISTS operator in SQL?",
    Answer: "To check the existence of rows in a subquery result set",
    Distractor1: "To perform arithmetic operations on columns.",
    Distractor2: "To concatenate strings from different columns.",
    Distractor3: "To filter rows based on a specified pattern.",
    Explanation:
      "In SQL, the EXISTS operator is a logical operator used to determine if a subquery returns any rows.",
    Link: "https://www.freecodecamp.org/news/sql-tips-save-time-write-simpler-queries/"
  },
  {
    Question:
      "Which of the following SQL statements retrieves the names of employees who have completed at least one task from the given schema?",
    Answer:
      "SELECT employee_name FROM employees WHERE EXISTS (SELECT 1 FROM tasks WHERE tasks.employee_id = employees.employee_id);",
    Distractor1:
      "SELECT employee_name FROM employees WHERE NOT EXISTS (SELECT * FROM tasks WHERE tasks.employee_id = employees.employee_id);",
    Distractor2:
      "SELECT employee_name FROM employees WHERE EXISTS (SELECT * FROM tasks WHERE tasks.employee_id = employees.employee_id);",
    Distractor3:
      "SELECT employee_name FROM employees WHERE COUNT(SELECT * FROM tasks WHERE tasks.employee_id = employees.employee_id) > 0;",
    Explanation:
      "The following SQL statement checks for the existence of at least one task for each employee using the EXISTS operator: SELECT employee_name FROM employees WHERE EXISTS (SELECT 1 FROM tasks WHERE tasks.employee_id = employees.employee_id);",
    Link: "https://www.freecodecamp.org/news/sql-tips-save-time-write-simpler-queries/"
  },
  {
    Question: "What is the primary purpose of the CASE statement in SQL?",
    Answer:
      "To perform conditional logic and return different values based on specified conditions.",
    Distractor1: "To sort the result set in ascending order.",
    Distractor2: "To perform mathematical calculations on columns.",
    Distractor3: "To join multiple tables in a query.",
    Explanation:
      "The CASE statement evaluates a list of conditions and returns one of several possible result expressions.",
    Link: "https://www.freecodecamp.org/news/sql-tips-save-time-write-simpler-queries/"
  },
  {
    Question:
      "What is the primary purpose of the GROUP_CONCAT() function in SQL?",
    Answer:
      "To concatenate values from multiple rows into a single string within each group.",
    Distractor1: "To perform mathematical calculations on grouped data.",
    Distractor2: "To sort the result set based on a specific column.",
    Distractor3: "To filter rows based on specified conditions.",
    Explanation:
      "The GROUP_CONCAT function is used to concatenate strings from multiple rows into a single row. This is useful when you need to combine multiple values into a single string.",
    Link: "https://www.freecodecamp.org/news/sql-tips-save-time-write-simpler-queries/"
  },
  {
    Question:
      "Which of the following SQL queries correctly shows the records within a 7-day period ending on 10/15/2023?",
    Answer: "WHERE date >= '2023-10-09' AND date <= '2023-10-15'",
    Distractor1:
      "WHERE activity_date > '2023-10-15' AND activity_date <= '2023-10-08'",
    Distractor2:
      "WHERE activity_date >= '10/09/2023' AND activity_date <= '10/15/2023'",
    Distractor3: "WHERE activity_date BETWEEN '2023-10-09' AND '2023-10-16'",
    Explanation:
      "To select some particular date between one date and another, you can use the BETWEEN and AND keywords while specifying the dates. You can also use comparison operators such as greater than (>), less than (<), or equal(=).",
    Link: "https://www.freecodecamp.org/news/sql-date-function-query-timestamp-example-format/"
  },
  {
    Question:
      "Which of the following SQL queries correctly shows the number of unique subjects taken by a student?",
    Answer: "SELECT COUNT(DISTINCT SUBJECT_ID) FROM table_name;",
    Distractor1: "SELECT COUNT(UNIQUE SUBJECT_ID)",
    Distractor2: "SELECT SUM(DISTINCT SUBJECT_ID)",
    Distractor3: "SELECT DISTINCT COUNT(SUBJECT_ID)",
    Explanation:
      "The SQL function SELECT COUNT(DISTINCT SUBJECT_ID) FROM table_name; is used to find the number of unique values in the SUBJECT_ID column, which represents the number of unique subjects taken by a student.",
    Link: "https://www.freecodecamp.org/news/sql-distinct-statement-how-to-query-select-and-count/"
  },
  {
    Question:
      "In SQL, which operator is used to combine multiple conditions, where all the conditions must be true for the result to be true?",
    Answer: "AND",
    Distractor1: "OR",
    Distractor2: "NOT",
    Distractor3: "XOR",
    Explanation:
      "The 'AND' operator in SQL is used to combine multiple conditions, and it requires all the conditions to be true for the overall condition to be true. It's commonly used for complex filtering in SQL queries.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter5basicsqlqueries"
  },
  {
    Question:
      "In SQL, which type of constraint enforces that values in a column are unique across all rows in a table?",
    Answer: "UNIQUE constraint",
    Distractor1: "PRIMARY KEY constraint",
    Distractor2: "CHECK constraint",
    Distractor3: "FOREIGN KEY constraint",
    Explanation:
      "The UNIQUE constraint in SQL ensures that values in a specified column or columns are unique across all rows in a table. This constraint is often used to prevent duplicate values in a column while allowing NULL values.",
    Link: "https://www.freecodecamp.org/news/basic-sql-commands/"
  },
  {
    Question: "What is the SQL JOIN clause used for?",
    Answer:
      "The SQL JOIN clause is used to combine rows from two or more tables based on a related column between them.",
    Distractor1: "SQL JOIN is for creating new databases.",
    Distractor2: "SQL JOIN is used to delete records from a table.",
    Distractor3: "SQL JOIN is for sorting query results.",
    Explanation:
      "SQL JOIN is fundamental for retrieving data from multiple tables by establishing relationships between them.",
    Link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-sql-join-statements/"
  },
  {
    Question:
      "What is the purpose of the SQL HAVING clause, and how does it differ from the WHERE clause?",
    Answer:
      "The SQL HAVING clause is used to filter rows in the result set after aggregation, while the WHERE clause filters rows before aggregation.",
    Distractor1:
      "The SQL HAVING clause is used for sorting data in ascending order.",
    Distractor2: "The SQL HAVING clause is used for joining tables.",
    Distractor3: "The SQL HAVING clause is for deleting rows from a table.",
    Explanation:
      "The key difference between HAVING and WHERE is when the filtering occurs: HAVING works after aggregation, while WHERE works before aggregation.",
    Link: "https://www.freecodecamp.org/news/the-sql-having-clause-explained-with-example-syntax/"
  },
  {
    Question:
      "What is the difference between the 'CHAR' and 'VARCHAR' data types in SQL?",
    Answer:
      "'CHAR' holds a fixed string length while 'VARCHAR' holds a variable string length",
    Distractor1:
      "'CHAR' is a numeric data type used for storing integers, while 'VARCHAR' is a text data type for storing strings.",
    Distractor2:
      "'CHAR' is a case-insensitive data type, while 'VARCHAR' is case-sensitive.",
    Distractor3:
      "'CHAR' is used for storing arrays, while 'VARCHAR' is used for storing variable-length data.",
    Explanation:
      "CHAR holds a fixed string length because it allocates a set amount of storage for the fixed size specified in parenthesis. VARCHAR holds a variable string length by the maximum size specified in parenthesis.",
    Link: "https://www.freecodecamp.org/news/sql-data-types-mysql/"
  },
  {
    Question:
      "What is the difference between the NUMERIC and FLOAT data types in SQL?",
    Answer:
      "NUMERIC stores exact numerical values, while FLOAT stores approximate numerical values",
    Distractor1:
      "NUMERIC uses a single number to specify minimum precision, while FLOAT uses precision and scale to determine storage requirements.",
    Distractor2:
      "NUMERIC is used for floating-point numbers, while FLOAT is used for integers.",
    Distractor3:
      "NUMERIC allows for arbitrary precision, while FLOAT has a fixed precision of 10.",
    Explanation:
      "NUMERIC is like a precise calculator that stores numbers exactly as you write them, ensuring accuracy. FLOAT is like a quick estimate, storing numbers approximately, which is okay for most calculations but might have small errors.",
    Link: "https://forum.freecodecamp.org/t/a-guide-to-sql-data-types/290676"
  },
  {
    Question: "In PostgreSQL, what is the syntax for deleting a database?",
    Answer: "DROP DATABASE database_name;",
    Distractor1: "DELETE DATABASE database_name;",
    Distractor2: "REMOVE DATABASE database_name;",
    Distractor3: "DESTROY DATABASE database_name;",
    Explanation:
      "In PostgreSQL, the DROP DATABASE command is used to permanently delete an entire database.",
    Link: "https://www.postgresql.org/docs/current/sql-dropdatabase.html"
  },
  {
    Question: "What is the default port number for PostgreSQL?",
    Answer: "5432",
    Distractor1: "8080",
    Distractor2: "3306",
    Distractor3: "3124",
    Explanation: "By default, PostgreSQL listens on port 5432",
    Link: "https://www.freecodecamp.org/news/manage-postgresql-with-psql/"
  },
  {
    Question: "How is the result of a SQL SELECT statement displayed?",
    Answer: "In a virtual table known as a result-set",
    Distractor1: "In a physical table",
    Distractor2: "In a chart format",
    Distractor3: "In a JSON file",
    Explanation:
      "The result of a SQL SELECT statement is presented in a virtual table, enabling data display, analysis, or manipulation without altering the original table",
    Link: "https://www.freecodecamp.org/news/sql-select-statement-how-to-select-data-from-a-database/"
  },
  {
    Question: "What is the primary purpose of a temporary SQL table?",
    Answer: "To store data for a specific session or transaction",
    Distractor1: "To store data permanently",
    Distractor2: "To create a backup of the database",
    Distractor3: "To store data for reporting purposes",
    Explanation:
      "Temporary SQL tables are used to hold data temporarily within a session or transaction, providing a short-term storage solution.",
    Link: "https://www.freecodecamp.org/news/sql-temp-table-how-to-create-a-temporary-sql-table/"
  },
  {
    Question: "How long does the data in a temporary SQL table persist?",
    Answer: "Data is deleted at the end of the session or transaction",
    Distractor1: "Data persists permanently",
    Distractor2: "Data is deleted after a specific time period",
    Distractor3: "Data persists until explicitly deleted by the user",
    Explanation:
      "Data in temporary tables has a limited lifespan and is automatically removed from the database once the session or transaction concludes, ensuring temporary data doesn't persist unnecessarily.",
    Link: "https://www.freecodecamp.org/news/sql-temp-table-how-to-create-a-temporary-sql-table/"
  },
  {
    Question:
      "How are temporary table names typically different from permanent table names?",
    Answer:
      " Temporary table names are prefixed with a special character or keyword",
    Distractor1: "Temporary table names are longer than permanent table names",
    Distractor2:
      "Temporary table names are case-sensitive, permanent table names are not",
    Distractor3: "Temporary table names are always in uppercase",
    Explanation:
      "Temporary tables are often named with special characters or keywords as prefixes to distinguish them from permanent tables, aiding in easy identification",
    Link: "https://www.freecodecamp.org/news/sql-temp-table-how-to-create-a-temporary-sql-table/"
  },
  {
    Question: "What happens to a temporary table at the end of a session?",
    Answer: "It is automatically dropped or deleted",
    Distractor1: "It is copied to another database",
    Distractor2: " It is automatically converted into a permanent table",
    Distractor3: "It remains in the database but becomes read-only",
    Explanation:
      "Temporary tables are automatically removed from the database system at the end of the session, preventing any manual cleanup and ensuring efficient use of database resources",
    Link: "https://www.freecodecamp.org/news/sql-temp-table-how-to-create-a-temporary-sql-table/"
  },
  {
    Question:
      "In MySQL, which command is used to show all of the default databases that come as part of the installation?",
    Answer: "SHOW DATABASES",
    Distractor1: "DATABASES",
    Distractor2: "VIEW DATABASES",
    Distractor3: "SHOW DATABASE",
    Explanation:
      "The SHOW DATABASES command shows all the default databases that comes with the MySQL installation.",
    Link: "https://youtu.be/ER8oKX5myE0?si=gfwnDC7sCi6p5YIc&t=860"
  },
  {
    Question:
      "In MySQL, which command is used to show the current values of MySQL system variables?",
    Answer: "SHOW VARIABLES",
    Distractor1: "VARS",
    Distractor2: "VARIABLES",
    Distractor3: "SHOW VARS",
    Explanation:
      "The SHOW VARIABLES statement is used to check the current value of MySQL system variables.",
    Link: "https://youtu.be/ER8oKX5myE0?si=Glz3fWrKLnHuWpWo&t=4250"
  },
  {
    Question:
      "Which operator is used in the SQL query to match a single character?",
    Answer: "_ wildcard operator",
    Distractor1: "* wildcard operator ",
    Distractor2: "+ wildcard operator ",
    Distractor3: "% wildcard operator ",
    Explanation:
      "The _ wildcard operator matches a single character whereas % wildcard operator matches zero or more characters",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/"
  },
  {
    Question:
      "Which of the following normal forms have better data integrity and less duplicate data?",
    Answer: "Boyce-Codd normal form (BCNF)",
    Distractor1: "First normal form (1NF)",
    Distractor2: "Third normal form (3NF)",
    Distractor3: "Second normal form (2NF)",
    Explanation:
      "Boyce-Codd is the most normalized form and so it has better data integrity and less duplicate data compared to others",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter9databasenormalization"
  }
];

export default sqlQuiz;
