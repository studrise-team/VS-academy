const commonReferences = [
  { label: 'W3Schools MySQL', url: 'https://www.w3schools.com/mysql/' },
  { label: 'MySQL Official Docs', url: 'https://dev.mysql.com/doc/refman/8.0/en/' }
];

export const mysqlContentBatch5 = {
  'mysql_subqueries': {
    isStructured: true,
    title: '63. Subqueries',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'A Subquery is a query nested inside another query (e.g., inside a SELECT, INSERT, UPDATE, or DELETE statement).',
    whyUseIt: 'Allows you to use the result of one query as the input or condition for another query dynamically.',
    syntax: 'SELECT col FROM t1 WHERE col = (SELECT col FROM t2);',
    codeExample: '-- Find all employees whose salary is greater than the average salary\nSELECT name, salary \nFROM Employees \nWHERE salary > (SELECT AVG(salary) FROM Employees);',
    hasLiveOutput: false,
    expectedOutput: 'Alice 75000\nBob 80000',
    explanation: [
      { code: '(SELECT ...)', desc: 'The inner query executes first, calculates the average, and passes that number to the outer query.' }
    ],
    realWorldExample: 'Finding the most recent order placed by a user without knowing the exact date in advance.',
    commonMistakes: [
      { error: 'Inner query returning multiple rows', code: '', suffix: 'If you use `=` or `>`, the subquery MUST return exactly ONE row. If it returns multiple, use `IN`.' }
    ],
    bestPractices: ['Always enclose subqueries in parentheses.'],
    practiceExercise: {
      task: 'Write a subquery to find users whose `id` exists in the `banned_users` table.',
      expectedOutput: 'Query OK',
      solution: 'SELECT * FROM users WHERE id IN (SELECT user_id FROM banned_users);'
    },
    quiz: [
      { question: 'What is a Subquery?', options: ['A query that runs fast', 'A query nested inside another query', 'A query on a view', 'A deleted query'], answer: 'A query nested inside another query' },
      { question: 'Which part of the query usually executes first?', options: ['The outer query', 'The inner subquery', 'Both simultaneously', 'Neither'], answer: 'The inner subquery' },
      { question: 'What characters must surround a subquery?', options: ['Square brackets []', 'Curly braces {}', 'Parentheses ()', 'Quotes ""'], answer: 'Parentheses ()' },
      { question: 'If you use `WHERE col = (subquery)`, how many rows can the subquery return?', options: ['Exactly one', 'Zero or one', 'Unlimited', 'Exactly two'], answer: 'Exactly one' },
      { question: 'What operator should you use if the subquery returns multiple rows?', options: ['=', '>', 'IN', 'LIKE'], answer: 'IN' }
    ],
    interviewQuestions: [
      { q: 'Is a JOIN always faster than a Subquery?', a: 'Historically yes, JOINs were much faster because engines were optimized for them. However, modern MySQL optimizers often rewrite subqueries into joins under the hood, making their performance very similar in many cases.' }
    ],
    summary: ['A query inside a query.', 'Must be in parentheses.', 'Inner query executes first.'],
    references: commonReferences
  },

  'mysql_nested_queries': {
    isStructured: true,
    title: '64. Nested Queries',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'Nested queries refer to deeply layered subqueries (a subquery inside a subquery inside a query) or Correlated Subqueries.',
    whyUseIt: 'For complex filtering that requires multiple layers of logic.',
    syntax: 'SELECT ... WHERE col IN (SELECT ... WHERE col IN (SELECT ...))',
    codeExample: '-- Find names of customers who ordered Product ID 5\nSELECT name FROM Customers \nWHERE id IN (\n  SELECT user_id FROM Orders \n  WHERE id IN (\n    SELECT order_id FROM Order_Items WHERE product_id = 5\n  )\n);',
    hasLiveOutput: false,
    expectedOutput: 'Alice\nCharlie',
    explanation: [
      { code: 'Nesting', desc: 'Queries evaluate from the deepest level outwards.' }
    ],
    realWorldExample: 'A 3-tier deep relationship where you don\'t want to write a massive 4-table JOIN.',
    commonMistakes: [
      { error: 'Deep nesting slowing down the DB', code: '', suffix: 'Deeply nested queries can sometimes perform very poorly. Consider refactoring to JOINs if performance suffers.' }
    ],
    bestPractices: ['Format nested queries with proper indentation, otherwise they become unreadable.'],
    practiceExercise: {
      task: 'Is a nested query evaluated from the outside-in or inside-out?',
      expectedOutput: 'Inside-out.',
      solution: 'Inside-out. The deepest subquery runs first.'
    },
    quiz: [
      { question: 'What makes a query a "nested" query?', options: ['It uses JOINs', 'It contains multiple levels of subqueries', 'It uses curly braces', 'It is encrypted'], answer: 'It contains multiple levels of subqueries' },
      { question: 'In what order are standard nested queries evaluated?', options: ['Top to bottom', 'Outside in', 'Deepest inside out', 'Randomly'], answer: 'Deepest inside out' },
      { question: 'What is a Correlated Subquery?', options: ['A subquery that runs fast', 'A subquery that depends on values from the outer query', 'A subquery that returns a boolean', 'A deleted query'], answer: 'A subquery that depends on values from the outer query' },
      { question: 'Why might a DBA ask you to rewrite a nested query as a JOIN?', options: ['To save space', 'Performance optimization', 'To encrypt it', 'Because nesting is deprecated'], answer: 'Performance optimization' },
      { question: 'Which operator is typically used for nesting queries that return lists of IDs?', options: ['=', 'LIKE', 'IN', 'BETWEEN'], answer: 'IN' }
    ],
    interviewQuestions: [
      { q: 'What is a Correlated Subquery and why is it slow?', a: 'A correlated subquery references a column from the outer query. Unlike a standard subquery that runs ONCE, a correlated subquery must be executed repeatedly for EVERY SINGLE ROW in the outer query, making it extremely slow on large datasets.' }
    ],
    summary: ['Queries inside queries.', 'Evaluated inside-out.', 'Can be refactored to JOINs.'],
    references: commonReferences
  },

  'mysql_union': {
    isStructured: true,
    title: '65. UNION',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'The UNION operator is used to combine the result-set of two or more SELECT statements.',
    whyUseIt: 'When you want to stack results on top of each other (vertically), rather than joining them side-by-side (horizontally like JOIN).',
    syntax: 'SELECT col FROM t1 UNION SELECT col FROM t2;',
    codeExample: '-- Get a single list of all emails from both Users and Employees tables\nSELECT email FROM Users\nUNION\nSELECT email FROM Employees;',
    hasLiveOutput: false,
    expectedOutput: 'A single column list of all unique emails.',
    explanation: [
      { code: 'UNION', desc: 'Combines the rows. By default, UNION removes duplicate rows.' }
    ],
    realWorldExample: 'Generating a master mailing list from 3 different regional customer tables.',
    commonMistakes: [
      { error: 'Mismatched column counts', code: '', suffix: 'Every SELECT statement in a UNION must have the EXACT SAME number of columns, in similar data types, in the same order.' }
    ],
    bestPractices: ['Ensure column types match logically, even if names differ.'],
    practiceExercise: {
      task: 'Combine `SELECT city FROM customers` with `SELECT city FROM suppliers`.',
      expectedOutput: 'Query OK',
      solution: 'SELECT city FROM customers UNION SELECT city FROM suppliers;'
    },
    quiz: [
      { question: 'What does UNION do?', options: ['Joins tables horizontally', 'Stacks query results vertically', 'Deletes tables', 'Creates an index'], answer: 'Stacks query results vertically' },
      { question: 'By default, does UNION remove duplicate rows?', options: ['Yes', 'No', 'Only strings', 'Only ints'], answer: 'Yes' },
      { question: 'What is the strict rule for UNION?', options: ['Must use WHERE', 'Each SELECT must have the same number of columns in similar data types', 'Must be from the same table', 'Must have an ORDER BY'], answer: 'Each SELECT must have the same number of columns in similar data types' },
      { question: 'What determines the column names of the final result set?', options: ['The second SELECT statement', 'The first SELECT statement', 'MySQL generates random names', 'You must rename them'], answer: 'The first SELECT statement' },
      { question: 'Can you UNION more than two queries?', options: ['Yes, unlimited', 'No, only two', 'Only three', 'Only in SQL Server'], answer: 'Yes, unlimited' }
    ],
    interviewQuestions: [
      { q: 'Difference between JOIN and UNION?', a: 'JOIN combines columns (horizontally) based on a relationship. UNION combines rows (vertically) from similar select statements.' }
    ],
    summary: ['Stacks results vertically.', 'Removes duplicates.', 'Requires matching column counts.'],
    references: commonReferences
  },

  'mysql_union_all': {
    isStructured: true,
    title: '66. UNION ALL',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'UNION ALL combines result sets exactly like UNION, but it DOES NOT remove duplicate rows.',
    whyUseIt: 'Performance. Checking for duplicates is a slow operation. If you know there are no duplicates, or you specifically want to see the duplicates, UNION ALL is much faster.',
    syntax: 'SELECT col FROM t1 UNION ALL SELECT col FROM t2;',
    codeExample: '-- Get a list of every single email, even if an employee is also a user\nSELECT email FROM Users\nUNION ALL\nSELECT email FROM Employees;',
    hasLiveOutput: false,
    expectedOutput: 'A list of emails where test@test.com might appear twice.',
    explanation: [
      { code: 'UNION ALL', desc: 'Stacks rows directly without the expensive duplicate-checking step.' }
    ],
    realWorldExample: 'Combining monthly sales logs into a yearly report. A user might have bought something in Jan and Feb, and you want to see both transactions, not deduplicate them.',
    commonMistakes: [
      { error: 'Using UNION when UNION ALL is needed', code: '', suffix: 'If you want duplicates, or know none exist, using plain UNION wastes CPU cycles.' }
    ],
    bestPractices: ['Default to UNION ALL for performance unless you specifically need deduplication.'],
    practiceExercise: {
      task: 'Combine cities from customers and suppliers, keeping duplicates.',
      expectedOutput: 'Query OK',
      solution: 'SELECT city FROM customers UNION ALL SELECT city FROM suppliers;'
    },
    quiz: [
      { question: 'What is the difference between UNION and UNION ALL?', options: ['They are identical', 'UNION ALL keeps duplicates; UNION removes them', 'UNION ALL deletes data', 'UNION ALL is slower'], answer: 'UNION ALL keeps duplicates; UNION removes them' },
      { question: 'Which one is generally faster?', options: ['UNION', 'UNION ALL', 'They are the same', 'Depends on the OS'], answer: 'UNION ALL' },
      { question: 'Why is UNION ALL faster?', options: ['It uses indexes', 'It skips the expensive duplicate-checking/sorting step', 'It runs in RAM', 'It encrypts data'], answer: 'It skips the expensive duplicate-checking/sorting step' },
      { question: 'Does UNION ALL still require the same number of columns?', options: ['Yes', 'No', 'Only if strings', 'Only in Oracle'], answer: 'Yes' },
      { question: 'If Query 1 returns 10 rows and Query 2 returns 5 rows, how many rows does UNION ALL return?', options: ['10', '15', 'Somewhere between 10 and 15', '5'], answer: '15' }
    ],
    interviewQuestions: [
      { q: 'When would you explicitly choose UNION over UNION ALL?', a: 'When you are generating a list of distinct values from multiple sources (like a distinct list of all tags used across blog posts and forum topics) and duplicates would break the UI.' }
    ],
    summary: ['Keeps duplicates.', 'Faster than UNION.', 'Stacks vertically.'],
    references: commonReferences
  },

  'mysql_views': {
    isStructured: true,
    title: '67. Views',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'A View is a virtual table based on the result-set of an SQL statement.',
    whyUseIt: 'To simplify complex queries (like a 5-table JOIN) into a single virtual table, or to restrict data access (hiding a salary column).',
    syntax: 'CREATE VIEW view_name AS SELECT ...;',
    codeExample: 'CREATE VIEW ActiveUsers AS\nSELECT id, name, email FROM users WHERE status = \'Active\';\n\n-- Now query the view like a normal table:\nSELECT * FROM ActiveUsers;',
    hasLiveOutput: false,
    expectedOutput: 'Query OK',
    explanation: [
      { code: 'CREATE VIEW', desc: 'Saves the query definition, NOT the data.' }
    ],
    realWorldExample: 'Creating a `MonthlySales` view so business analysts can easily query it without knowing how to JOIN the orders, products, and users tables.',
    commonMistakes: [
      { error: 'Thinking views store data', code: '', suffix: 'Views don\'t store data (unless it is a Materialized View, which standard MySQL does not have natively). The query runs every time you select from the view.' }
    ],
    bestPractices: ['Use views as an API layer over your raw tables to abstract complexity from backend developers.'],
    practiceExercise: {
      task: 'Create a view `Admins` for users with role="Admin".',
      expectedOutput: 'Query OK',
      solution: 'CREATE VIEW Admins AS SELECT * FROM users WHERE role=\'Admin\';'
    },
    quiz: [
      { question: 'What is a View?', options: ['A backup table', 'A virtual table based on a query', 'A trigger', 'A stored procedure'], answer: 'A virtual table based on a query' },
      { question: 'Does a standard View in MySQL store physical data on the disk?', options: ['Yes', 'No, it only stores the query definition', 'Only if indexed', 'Only in memory'], answer: 'No, it only stores the query definition' },
      { question: 'How do you retrieve data from a View?', options: ['CALL view', 'EXECUTE view', 'SELECT * FROM view', 'RUN view'], answer: 'SELECT * FROM view' },
      { question: 'Can you UPDATE data through a View?', options: ['Yes, always', 'No, never', 'Yes, under strict conditions (updatable views)', 'Only in SQL Server'], answer: 'Yes, under strict conditions (updatable views)' },
      { question: 'Why use a view?', options: ['To hide complexity and restrict column access', 'To increase disk space', 'To encrypt data', 'To bypass passwords'], answer: 'To hide complexity and restrict column access' }
    ],
    interviewQuestions: [
      { q: 'What happens to a View if you drop the underlying table it queries?', a: 'The view remains in the database definition, but any attempt to SELECT from the view will throw an error because the underlying tables no longer exist.' }
    ],
    summary: ['Views are virtual tables.', 'They store the query, not data.', 'Great for abstraction.'],
    references: commonReferences
  },

  'mysql_indexes': {
    isStructured: true,
    title: '68. Indexes',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Indexes are special lookup tables that the database search engine can use to speed up data retrieval.',
    whyUseIt: 'Without an index, finding a user by email requires scanning every single row (Full Table Scan). An index makes it instant.',
    syntax: 'CREATE INDEX idx_name ON table_name (column);',
    codeExample: 'CREATE INDEX idx_email ON Users (email);\n\n-- Now this is lightning fast:\nSELECT * FROM Users WHERE email = \'test@test.com\';',
    hasLiveOutput: false,
    expectedOutput: 'Query OK',
    explanation: [
      { code: 'INDEX', desc: 'Creates a B-Tree data structure behind the scenes.' }
    ],
    realWorldExample: 'Searching for a specific word in a 1000-page book. Without an index, you read 1000 pages. With an index, you look at the back of the book and turn straight to page 452.',
    commonMistakes: [
      { error: 'Indexing every single column', code: '', suffix: 'Indexes speed up READS, but they severely slow down WRITES (INSERT/UPDATE/DELETE) because the index must be updated every time.' }
    ],
    bestPractices: ['Index columns that are frequently used in WHERE, JOIN, and ORDER BY clauses.'],
    practiceExercise: {
      task: 'Create an index named `idx_username` on `users(username)`.',
      expectedOutput: 'Query OK',
      solution: 'CREATE INDEX idx_username ON users (username);'
    },
    quiz: [
      { question: 'What is the primary purpose of an Index?', options: ['Speed up INSERTs', 'Speed up SELECTs', 'Save disk space', 'Encrypt data'], answer: 'Speed up SELECTs' },
      { question: 'What is the downside of creating too many Indexes?', options: ['They slow down SELECTs', 'They take up disk space and slow down INSERT/UPDATEs', 'They corrupt data', 'They delete tables'], answer: 'They take up disk space and slow down INSERT/UPDATEs' },
      { question: 'What is a "Full Table Scan"?', options: ['Scanning a table for viruses', 'Reading every row to find a result because no index exists', 'Backing up a table', 'Printing a table'], answer: 'Reading every row to find a result because no index exists' },
      { question: 'Does a Primary Key automatically create an index?', options: ['Yes', 'No', 'Only on strings', 'Only in Oracle'], answer: 'Yes' },
      { question: 'How do you remove an index?', options: ['DELETE INDEX', 'DROP INDEX', 'REMOVE INDEX', 'TRUNCATE INDEX'], answer: 'DROP INDEX' }
    ],
    interviewQuestions: [
      { q: 'What is a Composite Index?', a: 'An index created on multiple columns at once (e.g., `CREATE INDEX idx_name ON table (last_name, first_name)`). It is highly optimized for queries that search by both those columns together.' }
    ],
    summary: ['Indexes speed up reads massively.', 'Indexes slow down writes.', 'Use them strategically.'],
    references: commonReferences
  },

  'mysql_stored_procedures': {
    isStructured: true,
    title: '69. Stored Procedures',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A Stored Procedure is a prepared SQL code that you can save in the database and reuse over and over again.',
    whyUseIt: 'To encapsulate complex, multi-step business logic inside the database, improving security and reducing network traffic.',
    syntax: 'CREATE PROCEDURE proc_name() BEGIN ... END;',
    codeExample: 'DELIMITER //\nCREATE PROCEDURE GetAdmins()\nBEGIN\n  SELECT * FROM users WHERE role = \'Admin\';\nEND //\nDELIMITER ;\n\n-- To run it:\nCALL GetAdmins();',
    hasLiveOutput: false,
    expectedOutput: 'Query OK',
    explanation: [
      { code: 'DELIMITER //', desc: 'Changes the end-of-statement character so the internal semicolons don\'t trigger execution prematurely.' },
      { code: 'CALL', desc: 'Executes the procedure.' }
    ],
    realWorldExample: 'A `ProcessOrder()` procedure that deducts stock, bills the user, and creates a shipping label all inside one database call.',
    commonMistakes: [
      { error: 'Forgetting DELIMITER in CLI', code: '', suffix: 'Creating procedures will fail with syntax errors in the MySQL CLI if you don\'t change the delimiter first.' }
    ],
    bestPractices: ['Use procedures for heavy data manipulation that shouldn\'t travel over the network to your app server.'],
    practiceExercise: {
      task: 'Write the command to execute a procedure named `ClearLogs`.',
      expectedOutput: 'Query OK',
      solution: 'CALL ClearLogs();'
    },
    quiz: [
      { question: 'What is a Stored Procedure?', options: ['A backup script', 'A saved SQL script on the DB server that can be executed', 'A temporary table', 'An index type'], answer: 'A saved SQL script on the DB server that can be executed' },
      { question: 'How do you execute a stored procedure?', options: ['RUN proc', 'EXEC proc', 'CALL proc', 'DO proc'], answer: 'CALL proc' },
      { question: 'Why use the DELIMITER command when creating one?', options: ['To encrypt data', 'To change the end-of-line character so internal semicolons don\'t break the CREATE statement', 'To make it run faster', 'To add parameters'], answer: 'To change the end-of-line character so internal semicolons don\'t break the CREATE statement' },
      { question: 'Can stored procedures take parameters (arguments)?', options: ['Yes (IN, OUT, INOUT)', 'No', 'Only IN', 'Only OUT'], answer: 'Yes (IN, OUT, INOUT)' },
      { question: 'Where does the procedure execute?', options: ['On the client PC', 'On the database server', 'In the web browser', 'On the router'], answer: 'On the database server' }
    ],
    interviewQuestions: [
      { q: 'What is the advantage of a Stored Procedure over writing the queries in Node.js/PHP?', a: 'Reduced network latency (only one network call is made instead of multiple), increased security (prevents SQL injection and allows restricting table access), and centralization of business logic.' }
    ],
    summary: ['Saved, reusable SQL scripts.', 'Executed with CALL.', 'Can take parameters.'],
    references: commonReferences
  },

  'mysql_functions': {
    isStructured: true,
    title: '70. Functions',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'A custom User-Defined Function (UDF) is a saved routine that takes parameters, performs an action, and MUST return a single value.',
    whyUseIt: 'To create custom calculations that you can use inline in your SELECT statements.',
    syntax: 'CREATE FUNCTION func_name(param TYPE) RETURNS TYPE BEGIN ... RETURN value; END;',
    codeExample: 'DELIMITER //\nCREATE FUNCTION ApplyTax(price DECIMAL(10,2))\nRETURNS DECIMAL(10,2)\nDETERMINISTIC\nBEGIN\n  RETURN price * 1.10;\nEND //\nDELIMITER ;\n\n-- Use it inline:\nSELECT name, ApplyTax(price) FROM products;',
    hasLiveOutput: false,
    expectedOutput: 'Returns prices with a 10% tax added.',
    explanation: [
      { code: 'RETURNS', desc: 'Defines the data type that will be sent back.' },
      { code: 'DETERMINISTIC', desc: 'Promises MySQL that given the same input, it will always return the same output (required for binary logging).' }
    ],
    realWorldExample: 'A `CalculateDistance(lat1, lon1, lat2, lon2)` function used in a WHERE clause to find nearby restaurants.',
    commonMistakes: [
      { error: 'Trying to modify data', code: '', suffix: 'Functions are meant to calculate and return values. Do not use them to perform INSERT/UPDATE/DELETE. Use a Procedure for that.' }
    ],
    bestPractices: ['Keep functions lightweight, as they run once per row in a SELECT statement.'],
    practiceExercise: {
      task: 'Does a function execute via CALL or inline in a SELECT?',
      expectedOutput: 'Inline in a SELECT.',
      solution: 'Inline in a SELECT (or WHERE clause).'
    },
    quiz: [
      { question: 'What is the main difference between a Function and a Procedure?', options: ['Functions are faster', 'A Function MUST return a value and can be used inline in a SELECT. Procedures are executed via CALL.', 'Procedures return values, functions do not', 'Functions cannot take parameters'], answer: 'A Function MUST return a value and can be used inline in a SELECT. Procedures are executed via CALL.' },
      { question: 'What keyword indicates the data type a function gives back?', options: ['OUTPUT', 'GIVES', 'RETURNS', 'SENDS'], answer: 'RETURNS' },
      { question: 'Can you use a custom function in a WHERE clause?', options: ['Yes', 'No', 'Only in Oracle', 'Only with numbers'], answer: 'Yes' },
      { question: 'What does DETERMINISTIC mean?', options: ['It uses math', 'Given the same input, it always produces the same output', 'It modifies the database', 'It deletes data'], answer: 'Given the same input, it always produces the same output' },
      { question: 'Should you use a function to UPDATE rows in a table?', options: ['Yes', 'No, use a Procedure instead', 'Only if returning an INT', 'Always'], answer: 'No, use a Procedure instead' }
    ],
    interviewQuestions: [
      { q: 'Can a Function call a Stored Procedure?', a: 'In MySQL, generally NO. Functions have severe restrictions because they are invoked from within SQL statements (like SELECT). They cannot execute dynamic SQL or call stored procedures that return result sets.' }
    ],
    summary: ['Functions MUST return a value.', 'Used inline in SELECT/WHERE.', 'Do not use for DML operations.'],
    references: commonReferences
  },

  'mysql_triggers': {
    isStructured: true,
    title: '71. Triggers',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A Trigger is a named database object that is associated with a table, and it activates automatically when a specific event (INSERT, UPDATE, DELETE) occurs.',
    whyUseIt: 'For automatic auditing, complex data validation, or cascading changes without relying on application code.',
    syntax: 'CREATE TRIGGER name AFTER UPDATE ON table FOR EACH ROW ...',
    codeExample: 'DELIMITER //\nCREATE TRIGGER LogUserUpdate\nAFTER UPDATE ON Users\nFOR EACH ROW\nBEGIN\n  INSERT INTO AuditLogs (user_id, old_email, new_email)\n  VALUES (OLD.id, OLD.email, NEW.email);\nEND //\nDELIMITER ;',
    hasLiveOutput: false,
    expectedOutput: 'AuditLogs table automatically gets a new row every time a User is updated.',
    explanation: [
      { code: 'OLD and NEW', desc: 'Special keywords. OLD refers to the row data before the update. NEW refers to the data after the update.' }
    ],
    realWorldExample: 'Keeping an un-tamperable audit trail of who changed what salary in an HR database.',
    commonMistakes: [
      { error: 'Infinite loops', code: '', suffix: 'If an UPDATE trigger on Table A updates Table B, and an UPDATE trigger on Table B updates Table A, the database will crash in an infinite loop.' }
    ],
    bestPractices: ['Use triggers sparingly. They are "invisible magic" that can make debugging application behavior very difficult.'],
    practiceExercise: {
      task: 'Which keyword refers to the row data being inserted in a BEFORE INSERT trigger?',
      expectedOutput: 'NEW',
      solution: 'NEW'
    },
    quiz: [
      { question: 'What is a Trigger?', options: ['A gun', 'A script that runs automatically when a table event occurs', 'A manual script', 'An index'], answer: 'A script that runs automatically when a table event occurs' },
      { question: 'Which of these are valid Trigger timings?', options: ['DURING', 'BEFORE and AFTER', 'ONCE', 'ALWAYS'], answer: 'BEFORE and AFTER' },
      { question: 'What keyword accesses the existing data BEFORE an UPDATE occurs?', options: ['PREVIOUS', 'OLD', 'LAST', 'PAST'], answer: 'OLD' },
      { question: 'What keyword accesses the incoming data during an INSERT?', options: ['NEW', 'FUTURE', 'NEXT', 'INCOMING'], answer: 'NEW' },
      { question: 'What is a major downside of using Triggers?', options: ['They are too fast', 'They are "invisible logic" that can confuse developers debugging the app layer', 'They delete data', 'They require Python'], answer: 'They are "invisible logic" that can confuse developers debugging the app layer' }
    ],
    interviewQuestions: [
      { q: 'Can a BEFORE INSERT trigger prevent a row from being inserted?', a: 'Yes. You can write logic to validate the data, and if it fails your criteria, you can throw an error using `SIGNAL SQLSTATE` to abort the insert.' }
    ],
    summary: ['Executes automatically on events.', 'Access data with OLD and NEW.', 'Use sparingly.'],
    references: commonReferences
  },

  'mysql_transactions': {
    isStructured: true,
    title: '72. Transactions',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A Transaction is a sequential group of database operations executed as a single unit of work. It strictly adheres to ACID properties.',
    whyUseIt: 'To ensure data integrity. If one step in a multi-step process fails, the entire process is cancelled (rolled back).',
    syntax: 'START TRANSACTION; ... COMMIT; (or ROLLBACK;)',
    codeExample: 'START TRANSACTION;\n-- Step 1: Deduct $100 from Alice\nUPDATE Accounts SET balance = balance - 100 WHERE name = \'Alice\';\n-- Step 2: Add $100 to Bob\nUPDATE Accounts SET balance = balance + 100 WHERE name = \'Bob\';\nCOMMIT;',
    hasLiveOutput: false,
    expectedOutput: 'Money transfers atomically.',
    explanation: [
      { code: 'START TRANSACTION', desc: 'Disables auto-commit mode temporarily.' }
    ],
    realWorldExample: 'Transferring money. If the server crashes after deducting money from Alice but before adding it to Bob, the transaction rolls back so Alice doesn\'t lose her money.',
    commonMistakes: [
      { error: 'Forgetting to COMMIT', code: '', suffix: 'If you start a transaction, make changes, and close your connection without committing, the changes are lost.' }
    ],
    bestPractices: ['Keep transactions as short as possible to avoid locking rows and blocking other users.'],
    practiceExercise: {
      task: 'What command begins a transaction?',
      expectedOutput: 'START TRANSACTION;',
      solution: 'START TRANSACTION; (or BEGIN;)'
    },
    quiz: [
      { question: 'What does a Transaction ensure?', options: ['Speed', 'That a group of queries executes as a single, all-or-nothing unit', 'Encryption', 'Formatting'], answer: 'That a group of queries executes as a single, all-or-nothing unit' },
      { question: 'What does ACID stand for?', options: ['Auto, Commit, Insert, Delete', 'Atomicity, Consistency, Isolation, Durability', 'Active, Current, In, Data', 'Nothing'], answer: 'Atomicity, Consistency, Isolation, Durability' },
      { question: 'Which engine in MySQL supports Transactions?', options: ['MyISAM', 'InnoDB', 'MEMORY', 'CSV'], answer: 'InnoDB' },
      { question: 'What happens if a server crashes in the middle of an uncommitted transaction?', options: ['Half the data is saved', 'The transaction is automatically Rolled Back', 'The database corrupts', 'Nothing'], answer: 'The transaction is automatically Rolled Back' },
      { question: 'What command finalizes and saves the transaction?', options: ['SAVE', 'FINISH', 'COMMIT', 'END'], answer: 'COMMIT' }
    ],
    interviewQuestions: [
      { q: 'What does the Isolation property in ACID mean?', a: 'Isolation ensures that concurrent transactions occurring at the same time do not interfere with each other. A transaction sees data in a consistent state, unaffected by other uncommitted transactions.' }
    ],
    summary: ['All-or-nothing execution.', 'Prevents partial updates.', 'Requires InnoDB engine.'],
    references: commonReferences
  },

  'mysql_commit': {
    isStructured: true,
    title: '73. COMMIT',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The COMMIT command saves all the changes made during the current transaction permanently to the database.',
    whyUseIt: 'Transactions are held in memory/temporary logs. COMMIT makes them permanent.',
    syntax: 'COMMIT;',
    codeExample: 'START TRANSACTION;\nINSERT INTO users (name) VALUES (\'Charlie\');\nCOMMIT;',
    hasLiveOutput: false,
    expectedOutput: 'Charlie is permanently saved.',
    explanation: [
      { code: 'COMMIT', desc: 'Ends the transaction successfully.' }
    ],
    realWorldExample: 'Clicking "Confirm Order" finally commits the held inventory deduction to the database.',
    commonMistakes: [
      { error: 'Assuming Auto-commit is always on', code: '', suffix: 'By default, MySQL runs in autocommit mode (every single query is its own transaction and commits instantly). `START TRANSACTION` disables this.' }
    ],
    bestPractices: ['In application code (like Node/Java), always wrap your COMMIT in a try/catch block.'],
    practiceExercise: {
      task: 'Finalize a transaction.',
      expectedOutput: 'Query OK',
      solution: 'COMMIT;'
    },
    quiz: [
      { question: 'What does COMMIT do?', options: ['Deletes data', 'Saves transaction changes permanently', 'Starts a transaction', 'Cancels a transaction'], answer: 'Saves transaction changes permanently' },
      { question: 'Can a COMMIT be undone?', options: ['Yes', 'No', 'Only by an admin', 'Only in the first 5 minutes'], answer: 'No' },
      { question: 'What is MySQL\'s default behavior regarding commits?', options: ['Manual commit', 'Autocommit (every query commits instantly)', 'No commits allowed', 'Delayed commit'], answer: 'Autocommit (every query commits instantly)' },
      { question: 'What command must precede a COMMIT to group multiple queries?', options: ['START TRANSACTION', 'BEGIN GROUP', 'NEW COMMIT', 'HOLD'], answer: 'START TRANSACTION' },
      { question: 'What happens to locks on rows after a COMMIT?', options: ['They become permanent', 'They are released', 'They multiply', 'Nothing'], answer: 'They are released' }
    ],
    interviewQuestions: [
      { q: 'What is Autocommit?', a: 'Autocommit is a MySQL setting (default = ON) where every single SQL statement is treated as its own transaction and committed immediately. `START TRANSACTION` implicitly disables autocommit for that session until `COMMIT` or `ROLLBACK` is issued.' }
    ],
    summary: ['Makes changes permanent.', 'Releases row locks.'],
    references: commonReferences
  },

  'mysql_rollback': {
    isStructured: true,
    title: '74. Rollback',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The ROLLBACK command undoes all changes made during the current transaction, returning the data to the state it was in before the transaction started.',
    whyUseIt: 'Error handling. If a multi-step process fails halfway, you roll back to prevent partial data corruption.',
    syntax: 'ROLLBACK;',
    codeExample: 'START TRANSACTION;\nUPDATE inventory SET qty = qty - 1 WHERE id = 5;\n-- Oh no, the payment API failed!\nROLLBACK;\n-- The inventory goes back to what it was.',
    hasLiveOutput: false,
    expectedOutput: 'No changes are made to the database.',
    explanation: [
      { code: 'ROLLBACK', desc: 'Cancels the transaction.' }
    ],
    realWorldExample: 'A credit card is declined during checkout, so the database rolls back the order creation.',
    commonMistakes: [
      { error: 'Trying to rollback DDL', code: '', suffix: 'In MySQL, DDL commands (like CREATE TABLE, DROP TABLE, TRUNCATE) trigger an implicit commit and CANNOT be rolled back.' }
    ],
    bestPractices: ['Put `ROLLBACK` in the `catch` block of your application\'s try-catch error handling.'],
    practiceExercise: {
      task: 'Undo a transaction.',
      expectedOutput: 'Query OK',
      solution: 'ROLLBACK;'
    },
    quiz: [
      { question: 'What does ROLLBACK do?', options: ['Saves data', 'Undoes changes made in the current transaction', 'Deletes tables', 'Creates backups'], answer: 'Undoes changes made in the current transaction' },
      { question: 'Can you rollback after executing a COMMIT?', options: ['Yes', 'No', 'Only within 10 minutes', 'Only as root'], answer: 'No' },
      { question: 'Can you rollback a TRUNCATE TABLE command in MySQL?', options: ['Yes', 'No, DDL causes an implicit commit', 'Only in InnoDB', 'Always'], answer: 'No, DDL causes an implicit commit' },
      { question: 'Where is ROLLBACK typically placed in application code?', options: ['In the TRY block', 'In the CATCH (error handler) block', 'Outside the function', 'It is not used'], answer: 'In the CATCH (error handler) block' },
      { question: 'What happens to locks after a ROLLBACK?', options: ['They are kept', 'They are released', 'They become deadlocks', 'They encrypt the row'], answer: 'They are released' }
    ],
    interviewQuestions: [
      { q: 'Can you rollback a DELETE statement?', a: 'Yes, if the DELETE is executed inside a transaction (and hasn\'t been committed yet). This is a major advantage of DELETE over TRUNCATE.' }
    ],
    summary: ['Undoes uncommitted changes.', 'Crucial for error handling.', 'Cannot rollback DDL.'],
    references: commonReferences
  },

  'mysql_er_diagram': {
    isStructured: true,
    title: '75. ER Diagram',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'An Entity-Relationship (ER) Diagram is a visual blueprint of your database. It shows the tables (entities) and the relationships between them.',
    whyUseIt: 'To plan and visualize the database structure before you write a single line of SQL code.',
    syntax: '-- Conceptual',
    codeExample: '-- Entities: Users, Orders\n-- Attributes: id, name, total\n-- Relationship: A User "Places" an Order (1-to-Many)\n\n-- Visually drawn using boxes and lines (Crow\'s Foot notation).',
    hasLiveOutput: false,
    expectedOutput: 'A visual diagram.',
    explanation: [
      { code: 'Entity', desc: 'Becomes a Table.' },
      { code: 'Attribute', desc: 'Becomes a Column.' },
      { code: 'Relationship', desc: 'Becomes a Foreign Key.' }
    ],
    realWorldExample: 'Drawing a diagram on a whiteboard with your team before building a new app.',
    commonMistakes: [
      { error: 'Skipping this step', code: '', suffix: 'Building a database without an ER Diagram is like building a house without a blueprint. You will have to tear it down and rebuild it later.' }
    ],
    bestPractices: ['Use tools like MySQL Workbench, Draw.io, or Lucidchart to create ER Diagrams.'],
    practiceExercise: {
      task: 'What does "Entity" map to in an actual SQL database?',
      expectedOutput: 'A Table.',
      solution: 'A Table.'
    },
    quiz: [
      { question: 'What does ER stand for?', options: ['Emergency Room', 'Entity-Relationship', 'External Record', 'Enterprise Relational'], answer: 'Entity-Relationship' },
      { question: 'What does an Entity represent in a database?', options: ['A row', 'A column', 'A table', 'A constraint'], answer: 'A table' },
      { question: 'What does an Attribute represent?', options: ['A row', 'A column', 'A table', 'An index'], answer: 'A column' },
      { question: 'How are relationships established in SQL code after drawing the diagram?', options: ['With Primary Keys', 'With Foreign Keys', 'With Indexes', 'With Triggers'], answer: 'With Foreign Keys' },
      { question: 'What notation is most commonly used for drawing relationships?', options: ['Bird\'s Beak', 'Crow\'s Foot', 'Snake\'s Tail', 'Lion\'s Paw'], answer: 'Crow\'s Foot' }
    ],
    interviewQuestions: [
      { q: 'Explain the three main types of relationships in an ER Diagram.', a: '1. One-to-One (1:1) - Rare, e.g., User to User_Profile. 2. One-to-Many (1:N) - Common, e.g., User to Orders. 3. Many-to-Many (M:N) - Requires a junction table, e.g., Students to Courses.' }
    ],
    summary: ['A blueprint for your database.', 'Entities = Tables.', 'Attributes = Columns.'],
    references: commonReferences
  },

  'mysql_normalization': {
    isStructured: true,
    title: '76. Database Normalization',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Normalization is the process of organizing data to reduce redundancy (duplication) and improve data integrity.',
    whyUseIt: 'If you duplicate data (e.g., storing a customer\'s address on every single order), and the customer moves, you have to update thousands of rows. Normalization fixes this.',
    syntax: '-- Conceptual process involving splitting tables',
    codeExample: '-- UNNORMALIZED (Bad):\n-- OrderID | User_Name | User_Address\n-- 1       | Alice     | 123 Main St\n-- 2       | Alice     | 123 Main St\n\n-- NORMALIZED (Good):\n-- Users Table: id | name | address\n-- Orders Table: id | user_id',
    hasLiveOutput: false,
    expectedOutput: 'Efficient, non-duplicated storage.',
    explanation: [
      { code: 'Redundancy', desc: 'Storing the exact same piece of information in multiple places.' }
    ],
    realWorldExample: 'Moving "Department Name" out of the "Employees" table and into a "Departments" table, linking them via `dept_id`.',
    commonMistakes: [
      { error: 'Over-normalizing', code: '', suffix: 'Normalizing to the extreme (5NF, 6NF) creates so many tables that retrieving data requires 20 JOINs, making reads painfully slow.' }
    ],
    bestPractices: ['Aim for 3rd Normal Form (3NF) for standard business applications.'],
    practiceExercise: {
      task: 'Why is storing a `category_name` directly in the `products` table generally a bad idea?',
      expectedOutput: 'It causes duplication and update anomalies.',
      solution: 'If the category name changes, you must update every product in that category.'
    },
    quiz: [
      { question: 'What is the primary goal of Normalization?', options: ['To speed up SELECT queries', 'To reduce data redundancy and improve integrity', 'To encrypt data', 'To combine tables'], answer: 'To reduce data redundancy and improve integrity' },
      { question: 'What is Data Redundancy?', options: ['Backing up data', 'Storing the same data in multiple places unnecessarily', 'Deleting data', 'Encrypting data'], answer: 'Storing the same data in multiple places unnecessarily' },
      { question: 'What is an "Update Anomaly"?', options: ['A virus', 'A data inconsistency caused by updating duplicated data in one place but forgetting another', 'A failed server', 'A dropped table'], answer: 'A data inconsistency caused by updating duplicated data in one place but forgetting another' },
      { question: 'How is Normalization practically achieved?', options: ['By deleting rows', 'By dividing larger tables into smaller tables and linking them with relationships', 'By adding columns', 'By using NoSQL'], answer: 'By dividing larger tables into smaller tables and linking them with relationships' },
      { question: 'What is the standard target normal form for most applications?', options: ['1NF', '2NF', '3NF', '6NF'], answer: '3NF' }
    ],
    interviewQuestions: [
      { q: 'What is the trade-off of Normalization?', a: 'Normalization optimizes Writes (INSERT/UPDATE) by ensuring data only exists in one place. However, it slows down Reads (SELECT) because pulling complete records now requires joining multiple tables together.' }
    ],
    summary: ['Reduces redundancy.', 'Prevents update anomalies.', 'Achieved by splitting tables.'],
    references: commonReferences
  }
};
