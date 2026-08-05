const commonReferences = [
  { label: 'W3Schools MySQL', url: 'https://www.w3schools.com/mysql/' },
  { label: 'MySQL Official Docs', url: 'https://dev.mysql.com/doc/refman/8.0/en/' }
];

export const mysqlContentBatch2 = {
  'mysql_insert': {
    isStructured: true,
    title: '17. INSERT Statement',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'The INSERT INTO statement is used to add new rows of data into a table.',
    whyUseIt: 'Without INSERT, your tables would be completely empty.',
    syntax: '-- Insert all columns:\nINSERT INTO table_name VALUES (value1, value2);\n\n-- Insert specific columns (Recommended):\nINSERT INTO table_name (col1, col2) VALUES (val1, val2);\n\n-- Insert multiple rows:\nINSERT INTO table_name (col1) VALUES (val1), (val2);',
    codeExample: '-- Create a table to insert into:\n-- CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), age INT);\n\n-- Insert a single row:\nINSERT INTO users (name, age) VALUES (\'Alice\', 22);\n\n-- Insert multiple rows at once:\nINSERT INTO users (name, age) \nVALUES \n  (\'Bob\', 25),\n  (\'Charlie\', 20),\n  (\'David\', 30);\n\nSELECT * FROM users;',
    hasLiveOutput: false,
    expectedOutput: 'Query OK, 1 row affected (0.01 sec)\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n\n+----+---------+-----+\n| id | name    | age |\n+----+---------+-----+\n|  1 | Alice   |  22 |\n|  2 | Bob     |  25 |\n|  3 | Charlie |  20 |\n|  4 | David   |  30 |\n+----+---------+-----+',
    explanation: [
      { code: 'INSERT INTO', desc: 'Command to add data.' },
      { code: '(name, age)', desc: 'Specifies which columns you are providing data for. ID is auto-generated.' },
      { code: 'VALUES', desc: 'The actual data being inserted. Strings must be in quotes.' }
    ],
    realWorldExample: 'When you submit a registration form, an INSERT statement saves your details to the database.',
    commonMistakes: [
      { error: 'Forgetting quotes around strings.', code: 'VALUES (Alice)', suffix: 'String and Date values must be wrapped in single quotes: \'Alice\'.' }
    ],
    bestPractices: ['Always specify column names to prevent errors if table structure changes', 'Insert multiple rows in a single query for better performance'],
    practiceExercise: {
      task: 'Write a query to insert two new users into the `employees` table: "Sarah" (age 28) and "Tom" (age 35). Assume the columns are `name` and `age`.',
      expectedOutput: 'Query OK, 2 rows affected.',
      solution: 'INSERT INTO employees (name, age) VALUES (\'Sarah\', 28), (\'Tom\', 35);'
    },
    quiz: [
      { question: 'Which SQL statement is used to insert new data into a database?', options: ['ADD RECORD', 'INSERT NEW', 'INSERT INTO', 'UPDATE INTO'], answer: 'INSERT INTO' },
      { question: 'Do you need to provide a value for an AUTO_INCREMENT column?', options: ['Yes, always', 'No, the database generates it automatically', 'Only if it is a primary key', 'Yes, but it must be 0'], answer: 'No, the database generates it automatically' },
      { question: 'How do you insert multiple rows in one query?', options: ['Use multiple INSERT statements separated by commas', 'Separate value sets with commas: VALUES (v1), (v2)', 'You cannot insert multiple rows', 'Use a LOOP'], answer: 'Separate value sets with commas: VALUES (v1), (v2)' },
      { question: 'Why is it recommended to specify column names in an INSERT statement?', options: ['It runs faster', 'It prevents errors if columns are added or reordered later', 'It takes up less space', 'MySQL requires it'], answer: 'It prevents errors if columns are added or reordered later' },
      { question: 'Which characters should surround text values in an INSERT statement?', options: ['Double quotes', 'No quotes', 'Single quotes', 'Backticks'], answer: 'Single quotes' }
    ],
    interviewQuestions: [
      { q: 'Is it mandatory to specify column names in an INSERT statement?', a: 'No, it is not mandatory. If you omit column names, you must provide a value for every single column in the exact order they were defined in the table. However, specifying column names is highly recommended for safety and maintainability.' },
      { q: 'How do you insert multiple rows in a single query?', a: 'By separating multiple value groups with commas: `INSERT INTO table (col) VALUES (val1), (val2), (val3);`' }
    ],
    summary: ['INSERT INTO adds rows.', 'Always specify columns.', 'You can insert multiple rows at once.'],
    references: commonReferences
  },

  'mysql_select': {
    isStructured: true,
    title: '18. SELECT Statement',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'The SELECT statement is used to fetch data from a database.',
    whyUseIt: 'SELECT is the most frequently used SQL command. It allows you to read and view your data.',
    syntax: '-- Select specific columns:\nSELECT col1, col2 FROM table_name;\n\n-- Select all columns:\nSELECT * FROM table_name;',
    codeExample: '-- Given a table "products" (id, name, price, stock)\n\n-- View everything:\nSELECT * FROM products;\n\n-- View specific columns only (better for performance):\nSELECT name, price FROM products;',
    hasLiveOutput: false,
    expectedOutput: '+-------------+-------+\n| name        | price |\n+-------------+-------+\n| Laptop      |  999  |\n| Smartphone  |  699  |\n| Headphones  |  149  |\n+-------------+-------+',
    explanation: [
      { code: 'SELECT', desc: 'Determines WHICH columns to show.' },
      { code: '*', desc: 'Wildcard meaning "All columns".' },
      { code: 'FROM', desc: 'Specifies the table to pull data from.' }
    ],
    realWorldExample: 'Viewing a list of products on an e-commerce store runs a SELECT query behind the scenes.',
    commonMistakes: [
      { error: 'Using SELECT * in production.', code: 'SELECT * FROM big_table;', suffix: 'Fetching unneeded columns slows down the database and network. Only select what you need.' }
    ],
    bestPractices: ['Avoid SELECT * in application code', 'Only request the specific columns you need to process'],
    practiceExercise: {
      task: 'Write a query to retrieve only the `title` and `author` columns from a `books` table.',
      expectedOutput: '+----------------+----------------+\n| title          | author         |\n+----------------+----------------+',
      solution: 'SELECT title, author FROM books;'
    },
    quiz: [
      { question: 'Which SQL statement is used to extract data from a database?', options: ['EXTRACT', 'GET', 'OPEN', 'SELECT'], answer: 'SELECT' },
      { question: 'What does the asterisk (*) mean in a SELECT statement?', options: ['Multiply', 'Select all columns', 'Select all rows', 'Include deleted data'], answer: 'Select all columns' },
      { question: 'Why should you avoid SELECT * in production applications?', options: ['It is invalid syntax', 'It retrieves unnecessary data, slowing down performance', 'It deletes data', 'It requires root privileges'], answer: 'It retrieves unnecessary data, slowing down performance' },
      { question: 'Which clause specifies the table to retrieve data from?', options: ['WHERE', 'FROM', 'INTO', 'TABLE'], answer: 'FROM' },
      { question: 'Can you select a single column using SELECT?', options: ['Yes', 'No, you must select at least two', 'Only if it is a Primary Key', 'No, you must use SELECT *'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'Why is `SELECT *` considered a bad practice in production?', a: 'Because it fetches every column, including large text or blob data that the application might not need. This wastes memory, CPU, and network bandwidth. It also makes the code brittle if the table schema changes (e.g., adding a new column).' }
    ],
    summary: ['SELECT retrieves data.', 'Avoid SELECT * in production apps.'],
    references: commonReferences
  },

  'mysql_where': {
    isStructured: true,
    title: '19. WHERE Clause',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'The WHERE clause filters rows based on a specific condition. It is used to extract only those records that fulfill a specified requirement.',
    whyUseIt: 'Without WHERE, SELECT returns every row in the table, UPDATE updates every row, and DELETE deletes every row.',
    syntax: 'SELECT columns FROM table WHERE condition;\n\n-- Operators: =, >, <, >=, <=, <>, !=',
    codeExample: '-- Select users over 18:\nSELECT name, age FROM users WHERE age > 18;\n\n-- Select a specific user by name:\nSELECT * FROM users WHERE name = \'Alice\';\n\n-- Not equal (!= or <>):\nSELECT name, country FROM users WHERE country != \'USA\';',
    hasLiveOutput: false,
    expectedOutput: '+-------+-----+\n| name  | age |\n+-------+-----+\n| Alice |  22 |\n| Bob   |  25 |\n+-------+-----+',
    explanation: [
      { code: 'WHERE', desc: 'The filter keyword.' },
      { code: 'age > 18', desc: 'The condition to evaluate for each row.' },
      { code: '=', desc: 'Equality operator in SQL (not ==).' }
    ],
    realWorldExample: 'Logging in: SELECT * FROM users WHERE email = \'user@mail.com\' AND password = \'hash\';',
    commonMistakes: [
      { error: 'Using == instead of =.', code: 'WHERE age == 18', suffix: 'SQL uses a single = for equality.' }
    ],
    bestPractices: ['Use WHERE to filter data at the database level, not in your application code'],
    practiceExercise: {
      task: 'Write a query to find all products in the `inventory` table where the `price` is exactly 100.',
      expectedOutput: '+-------+-------+\n| name  | price |\n+-------+-------+\n| Item1 | 100   |\n+-------+-------+',
      solution: 'SELECT * FROM inventory WHERE price = 100;'
    },
    quiz: [
      { question: 'Which clause is used to filter records?', options: ['FILTER', 'WHERE', 'HAVING', 'SELECT IF'], answer: 'WHERE' },
      { question: 'Which operator is used to check for equality in SQL?', options: ['==', '=', '===', 'EQUALS'], answer: '=' },
      { question: 'What happens if you run an UPDATE statement without a WHERE clause?', options: ['It returns an error', 'It updates only the first row', 'It updates every row in the table', 'Nothing happens'], answer: 'It updates every row in the table' },
      { question: 'Which of the following is NOT a valid SQL comparison operator?', options: ['!=', '<>', '>=', '=>'], answer: '=>' },
      { question: 'Can the WHERE clause be used with DELETE statements?', options: ['Yes', 'No', 'Only on views', 'Only with Triggers'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'What is the purpose of the WHERE clause?', a: 'The WHERE clause is used to filter records and extract only those that fulfill a specified condition. It is essential for SELECT, UPDATE, and DELETE operations to prevent modifying or fetching the entire table.' }
    ],
    summary: ['WHERE filters rows based on a condition.', 'Crucial for UPDATE and DELETE to avoid data loss.'],
    references: commonReferences
  },

  'mysql_update': {
    isStructured: true,
    title: '20. UPDATE Statement',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'The UPDATE statement is used to modify existing records in a table.',
    whyUseIt: 'To correct errors, update statuses, or change user information without deleting and re-inserting.',
    syntax: 'UPDATE table_name\nSET column1 = value1, column2 = value2\nWHERE condition;',
    codeExample: '-- Update one column for a specific user:\nUPDATE users\nSET age = 26\nWHERE name = \'Alice\';\n\n-- Update multiple columns:\nUPDATE users\nSET age = 31, country = \'Canada\'\nWHERE name = \'David\';\n\n-- Danger: No WHERE clause (updates EVERY row)\n-- UPDATE users SET age = 0;',
    hasLiveOutput: false,
    expectedOutput: 'Query OK, 1 row affected (0.01 sec)\nRows matched: 1  Changed: 1  Warnings: 0\n\nQuery OK, 1 row affected (0.01 sec)\nRows matched: 1  Changed: 1  Warnings: 0',
    explanation: [
      { code: 'UPDATE', desc: 'Identifies the table to modify.' },
      { code: 'SET', desc: 'Assigns new values to specific columns.' },
      { code: 'WHERE', desc: 'Ensures only the correct rows are changed.' }
    ],
    realWorldExample: 'Changing a password, updating a shipping address, or marking an order as "Shipped".',
    commonMistakes: [
      { error: 'Forgetting the WHERE clause.', code: '', suffix: 'This is a catastrophic error that overwrites data for the entire table.' }
    ],
    bestPractices: ['Always write the SELECT query first to test your WHERE clause before changing it to UPDATE', 'Always backup before running bulk updates'],
    practiceExercise: {
      task: 'Write a query to change the `status` column to "Active" for the user with `id` 5 in the `accounts` table.',
      expectedOutput: 'Query OK, 1 row affected.',
      solution: 'UPDATE accounts SET status = \'Active\' WHERE id = 5;'
    },
    quiz: [
      { question: 'Which statement is used to modify existing data?', options: ['MODIFY', 'CHANGE', 'UPDATE', 'ALTER'], answer: 'UPDATE' },
      { question: 'Which keyword is used to specify the new values in an UPDATE statement?', options: ['VALUES', 'SET', 'LET', 'ASSIGN'], answer: 'SET' },
      { question: 'What is the most critical part of an UPDATE statement to avoid catastrophic data loss?', options: ['The SET clause', 'The Table Name', 'The WHERE clause', 'The LIMIT clause'], answer: 'The WHERE clause' },
      { question: 'How do you update multiple columns in a single statement?', options: ['Use multiple SET keywords', 'Separate the column=value pairs with commas', 'Use the AND keyword between them', 'It cannot be done'], answer: 'Separate the column=value pairs with commas' },
      { question: 'What happens if you omit the WHERE clause in an UPDATE statement?', options: ['Syntax Error', 'Nothing is updated', 'The first row is updated', 'Every row in the table is updated'], answer: 'Every row in the table is updated' }
    ],
    interviewQuestions: [
      { q: 'How do you update a record safely?', a: 'Always include a specific WHERE clause (preferably using the Primary Key). A good practice is to write a SELECT statement with the WHERE clause first to verify which rows will be affected, then change the SELECT to an UPDATE.' }
    ],
    summary: ['UPDATE modifies existing data.', 'SET defines new values.', 'ALWAYS use a WHERE clause.'],
    references: commonReferences
  },

  'mysql_delete': {
    isStructured: true,
    title: '21. DELETE Statement',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'The DELETE statement is used to remove existing rows from a table.',
    whyUseIt: 'To permanently remove data that is no longer needed (like a cancelled order or deleted account).',
    syntax: 'DELETE FROM table_name WHERE condition;',
    codeExample: '-- Delete a specific row:\nDELETE FROM users WHERE id = 3;\n\n-- Delete multiple rows based on a condition:\nDELETE FROM users WHERE age < 18;\n\n-- Danger: Delete ALL rows (but keeps the table structure)\n-- DELETE FROM users;',
    hasLiveOutput: false,
    expectedOutput: 'Query OK, 1 row affected (0.01 sec)\n\nQuery OK, 5 rows affected (0.01 sec)',
    explanation: [
      { code: 'DELETE FROM', desc: 'The command to remove rows.' },
      { code: 'WHERE', desc: 'Specifies EXACTLY which rows to delete.' }
    ],
    realWorldExample: 'When a user clicks "Delete Account", a DELETE statement removes their record.',
    commonMistakes: [
      { error: 'Forgetting the WHERE clause.', code: 'DELETE FROM users;', suffix: 'This deletes every single row in the table.' }
    ],
    bestPractices: ['Soft Delete: Instead of DELETE, use an UPDATE to set an `is_deleted = TRUE` flag. This allows data recovery.'],
    practiceExercise: {
      task: 'Write a query to remove all products from the `inventory` table where the `stock` is 0.',
      expectedOutput: 'Query OK, X rows affected.',
      solution: 'DELETE FROM inventory WHERE stock = 0;'
    },
    quiz: [
      { question: 'Which statement is used to remove rows from a table?', options: ['REMOVE', 'DROP', 'TRUNCATE', 'DELETE'], answer: 'DELETE' },
      { question: 'What happens if you run DELETE FROM users; without a WHERE clause?', options: ['The table is dropped', 'Syntax error', 'All rows in the table are deleted', 'Only the first row is deleted'], answer: 'All rows in the table are deleted' },
      { question: 'What is a "Soft Delete"?', options: ['Deleting data slowly', 'Updating a flag (like is_deleted) instead of actually running a DELETE statement', 'Using a small WHERE clause', 'Deleting non-primary key data'], answer: 'Updating a flag (like is_deleted) instead of actually running a DELETE statement' },
      { question: 'Does DELETE reset the AUTO_INCREMENT counter?', options: ['Yes, always', 'No, the counter continues from where it left off', 'Only if you delete the last row', 'Only on MyISAM tables'], answer: 'No, the counter continues from where it left off' },
      { question: 'Which is faster for removing all rows: DELETE without WHERE, or TRUNCATE?', options: ['DELETE', 'TRUNCATE', 'They are the same speed', 'It depends on the OS'], answer: 'TRUNCATE' }
    ],
    interviewQuestions: [
      { q: 'What is a "soft delete"?', a: 'Instead of physically deleting a record with the DELETE command (hard delete), a soft delete involves updating a column (like `is_deleted` or `deleted_at`) to indicate the record is inactive. This allows the data to be recovered easily.' },
      { q: 'Difference between DELETE and DROP?', a: 'DELETE removes rows from a table but keeps the table structure intact. DROP removes the entire table structure and all its data permanently.' }
    ],
    summary: ['DELETE removes rows.', 'ALWAYS use a WHERE clause.', 'Consider soft-deletes for critical data.'],
    references: commonReferences
  },

  'mysql_limit': {
    isStructured: true,
    title: '22. LIMIT Clause',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The LIMIT clause is used to specify the maximum number of records to return.',
    whyUseIt: 'Essential for pagination (e.g., showing 10 results per page) and performance (don\'t load 1 million rows if you only need the top 5).',
    syntax: '-- Limit to N rows:\nSELECT * FROM table LIMIT N;\n\n-- Pagination (Offset, N rows):\nSELECT * FROM table LIMIT offset, N;',
    codeExample: '-- Get the first 3 users:\nSELECT name FROM users LIMIT 3;\n\n-- Pagination: Skip 10 rows, then get the next 5 (Page 3):\nSELECT name FROM users LIMIT 10, 5;',
    hasLiveOutput: false,
    expectedOutput: '+---------+\n| name    |\n+---------+\n| Alice   |\n| Bob     |\n| Charlie |\n+---------+',
    explanation: [
      { code: 'LIMIT 3', desc: 'Returns only the first 3 matching rows.' },
      { code: 'LIMIT 10, 5', desc: 'Skips the first 10 rows, then returns 5 rows.' }
    ],
    realWorldExample: 'Google search results: Page 1 uses LIMIT 0, 10. Page 2 uses LIMIT 10, 10.',
    commonMistakes: [
      { error: 'Using LIMIT without ORDER BY.', code: '', suffix: 'Without ORDER BY, the "first 3" rows are arbitrary and unpredictable.' }
    ],
    bestPractices: ['Always pair LIMIT with ORDER BY for predictable results', 'Use LIMIT to test queries on large tables without crashing your client'],
    practiceExercise: {
      task: 'Write a query to fetch exactly 1 record from the `settings` table.',
      expectedOutput: '+---------+\n| setting |\n+---------+\n| theme   |\n+---------+',
      solution: 'SELECT * FROM settings LIMIT 1;'
    },
    quiz: [
      { question: 'What does the LIMIT clause do?', options: ['Limits the size of a table', 'Restricts the number of rows returned by a query', 'Limits the data types allowed', 'Sets a maximum execution time'], answer: 'Restricts the number of rows returned by a query' },
      { question: 'If you want to implement pagination, which clause is essential?', options: ['GROUP BY', 'HAVING', 'LIMIT', 'JOIN'], answer: 'LIMIT' },
      { question: 'What does LIMIT 10, 5 mean?', options: ['Skip 10 rows, return 5 rows', 'Skip 5 rows, return 10 rows', 'Return rows 5 through 10', 'Return 15 rows'], answer: 'Skip 10 rows, return 5 rows' },
      { question: 'Which clause should almost always accompany LIMIT?', options: ['WHERE', 'ORDER BY', 'GROUP BY', 'HAVING'], answer: 'ORDER BY' },
      { question: 'Is LIMIT standard across all SQL databases (like SQL Server or Oracle)?', options: ['Yes', 'No, SQL Server uses TOP and Oracle uses ROWNUM/FETCH FIRST', 'Only in open source DBs', 'Only for SELECT queries'], answer: 'No, SQL Server uses TOP and Oracle uses ROWNUM/FETCH FIRST' }
    ],
    interviewQuestions: [
      { q: 'How would you implement pagination in MySQL?', a: 'Using the LIMIT and OFFSET clauses. For example, to get page 2 with 10 items per page, you would calculate offset as (Page - 1) * Items = (2-1)*10 = 10. The query would be `LIMIT 10 OFFSET 10` or `LIMIT 10, 10`.' }
    ],
    summary: ['LIMIT restricts the number of returned rows.', 'Crucial for pagination.', 'Always use with ORDER BY.'],
    references: commonReferences
  },

  'mysql_order_by': {
    isStructured: true,
    title: '23. ORDER BY',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'The ORDER BY keyword is used to sort the result-set in ascending or descending order.',
    whyUseIt: 'Data is naturally unordered in a database. You must use ORDER BY if you want results sorted alphabetically, by date, or numerically.',
    syntax: 'SELECT columns FROM table ORDER BY column1 ASC|DESC, column2 ASC|DESC;',
    codeExample: '-- Sort alphabetically by name (A-Z):\nSELECT name, age FROM users ORDER BY name ASC;\n\n-- Sort by age, oldest first (Highest to Lowest):\nSELECT name, age FROM users ORDER BY age DESC;\n\n-- Sort by age DESC, then name ASC:\nSELECT name, age FROM users ORDER BY age DESC, name ASC;',
    hasLiveOutput: false,
    expectedOutput: '+---------+-----+\n| name    | age |\n+---------+-----+\n| Charlie |  35 |\n| Alice   |  25 |\n| Bob     |  25 |\n+---------+-----+',
    explanation: [
      { code: 'ORDER BY', desc: 'Keyword to initiate sorting.' },
      { code: 'ASC', desc: 'Ascending (default). 1-10, A-Z.' },
      { code: 'DESC', desc: 'Descending. 10-1, Z-A.' }
    ],
    realWorldExample: 'Sorting an Amazon search by "Price: Low to High" uses ORDER BY price ASC.',
    commonMistakes: [
      { error: 'Assuming data comes out ordered automatically.', code: '', suffix: 'Relational DB theory states rows have no inherent order. Always use ORDER BY.' }
    ],
    bestPractices: ['Indexes on columns used in ORDER BY can massively speed up sorting'],
    practiceExercise: {
      task: 'Write a query to get all `movies` sorted from highest `rating` to lowest.',
      expectedOutput: '+------------+--------+\n| title      | rating |\n+------------+--------+',
      solution: 'SELECT * FROM movies ORDER BY rating DESC;'
    },
    quiz: [
      { question: 'What is the default sort order for ORDER BY?', options: ['DESC', 'ASC', 'Random', 'By Primary Key'], answer: 'ASC' },
      { question: 'Which keyword sorts results from highest to lowest?', options: ['ASC', 'HIGH', 'DESC', 'DOWN'], answer: 'DESC' },
      { question: 'Can you sort by multiple columns?', options: ['No', 'Yes, separated by AND', 'Yes, separated by commas', 'Only if they are numeric'], answer: 'Yes, separated by commas' },
      { question: 'What happens if you omit ORDER BY?', options: ['Error', 'Results are sorted by Primary Key', 'Results are returned in an unpredictable order', 'Results are sorted by date added'], answer: 'Results are returned in an unpredictable order' },
      { question: 'Where does the ORDER BY clause go in a standard SELECT query?', options: ['Before WHERE', 'After LIMIT', 'After WHERE, before LIMIT', 'First line'], answer: 'After WHERE, before LIMIT' }
    ],
    interviewQuestions: [
      { q: 'Can you sort by a column that is not included in the SELECT list?', a: 'Yes, you can `ORDER BY` a column even if you do not retrieve it in your `SELECT` statement.' }
    ],
    summary: ['ORDER BY sorts results.', 'ASC is default.', 'Use DESC for reverse order.'],
    references: commonReferences
  },

  'mysql_distinct': {
    isStructured: true,
    title: '24. DISTINCT',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The SELECT DISTINCT statement is used to return only distinct (different) values.',
    whyUseIt: 'When a column contains duplicate values, DISTINCT helps you extract a unique list of options.',
    syntax: 'SELECT DISTINCT column_name FROM table_name;',
    codeExample: '-- Given a table where multiple users are from the same country:\nSELECT country FROM users;\n-- Output: USA, UK, USA, India, UK\n\n-- Get unique countries only:\nSELECT DISTINCT country FROM users;',
    hasLiveOutput: false,
    expectedOutput: '+---------+\n| country |\n+---------+\n| USA     |\n| UK      |\n| India   |\n+---------+',
    explanation: [
      { code: 'DISTINCT', desc: 'Filters out duplicate rows from the final result set.' }
    ],
    realWorldExample: 'Populating a dropdown filter for "Select Country". You only want each country listed once.',
    commonMistakes: [
      { error: 'Using DISTINCT unnecessarily.', code: 'SELECT DISTINCT id FROM users', suffix: 'If the column is a Primary Key, it is already unique. DISTINCT adds unnecessary overhead.' }
    ],
    bestPractices: ['Use GROUP BY instead if you need to calculate aggregates (like COUNT) alongside the unique values'],
    practiceExercise: {
      task: 'Write a query to find the unique list of `department` names from the `employees` table.',
      expectedOutput: '+------------+\n| department |\n+------------+',
      solution: 'SELECT DISTINCT department FROM employees;'
    },
    quiz: [
      { question: 'What does SELECT DISTINCT do?', options: ['Selects deleted rows', 'Returns only unique, non-duplicate values', 'Formats text clearly', 'Selects all columns'], answer: 'Returns only unique, non-duplicate values' },
      { question: 'If two rows have the exact same values for the selected columns, how many rows will DISTINCT return?', options: ['Two', 'One', 'Zero', 'Depends on the database'], answer: 'One' },
      { question: 'Does DISTINCT apply to a single column or the entire row combination?', options: ['Single column only', 'The combination of all columns specified in the SELECT list', 'The Primary Key only', 'Only string columns'], answer: 'The combination of all columns specified in the SELECT list' },
      { question: 'Is using DISTINCT on a Primary Key column useful?', options: ['Yes, it improves speed', 'No, primary keys are already unique so it wastes processing time', 'Yes, it removes nulls', 'No, it causes an error'], answer: 'No, primary keys are already unique so it wastes processing time' },
      { question: 'Can you use COUNT(DISTINCT column_name)?', options: ['Yes, it counts the number of unique values', 'No, syntax error', 'Yes, but only in Oracle', 'No, COUNT only works on rows'], answer: 'Yes, it counts the number of unique values' }
    ],
    interviewQuestions: [
      { q: 'How does DISTINCT handle multiple columns?', a: 'If you write `SELECT DISTINCT col1, col2`, it returns unique combinations of BOTH columns. It evaluates the entire row result, not just the first column.' }
    ],
    summary: ['DISTINCT removes duplicates from the result set.', 'Useful for generating lists of unique categories.'],
    references: commonReferences
  },

  'mysql_aliases': {
    isStructured: true,
    title: '25. Aliases (AS)',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Aliases are used to give a table, or a column in a table, a temporary name. This is done using the AS keyword.',
    whyUseIt: 'Aliases make column names more readable, especially when using complex functions or joins.',
    syntax: 'SELECT column_name AS alias_name FROM table_name;\nSELECT column_name FROM table_name AS table_alias;',
    codeExample: '-- Column Alias:\nSELECT first_name AS Name, date_of_birth AS DOB FROM users;\n\n-- Alias for a function result (Very Common):\nSELECT COUNT(*) AS total_users FROM users;\n\n-- Table Alias (Useful in Joins):\nSELECT u.name, u.age FROM users AS u;',
    hasLiveOutput: false,
    expectedOutput: '+-------------+\n| total_users |\n+-------------+\n|        5200 |\n+-------------+',
    explanation: [
      { code: 'AS', desc: 'The keyword to assign an alias (often optional, but good for readability).' },
      { code: 'total_users', desc: 'The temporary name given to the result of COUNT(*).' }
    ],
    realWorldExample: 'When returning data to an API, aliases ensure the JSON keys match what the frontend expects.',
    commonMistakes: [
      { error: 'Using spaces without quotes.', code: 'SELECT name AS First Name', suffix: 'If an alias has spaces, wrap it in quotes: AS "First Name".' }
    ],
    bestPractices: ['Use AS for calculated columns (e.g., COUNT, SUM) to give them meaningful names'],
    practiceExercise: {
      task: 'Select the `price` column from the `items` table, but rename the output column to `Cost`.',
      expectedOutput: '+------+\n| Cost |\n+------+',
      solution: 'SELECT price AS Cost FROM items;'
    },
    quiz: [
      { question: 'Which keyword creates an alias?', options: ['FOR', 'ALIAS', 'AS', 'LIKE'], answer: 'AS' },
      { question: 'How long does an alias last?', options: ['Permanently', 'Only for the duration of that specific query', 'Until the database restarts', 'Until you DROP it'], answer: 'Only for the duration of that specific query' },
      { question: 'How must you write an alias if it contains spaces (e.g., First Name)?', options: ['With underscores: AS First_Name', 'Inside quotes: AS "First Name"', 'You cannot have spaces in aliases', 'Inside brackets: AS [First Name]'], answer: 'Inside quotes: AS "First Name"' },
      { question: 'Is the AS keyword mandatory in MySQL?', options: ['Yes, always', 'No, it can often be omitted (e.g., SELECT name First_Name)', 'Only for tables', 'Only for columns'], answer: 'No, it can often be omitted (e.g., SELECT name First_Name)' },
      { question: 'Why use an alias for a table?', options: ['To save memory', 'To shorten long table names in complex JOIN queries', 'To hide the table name for security', 'To encrypt data'], answer: 'To shorten long table names in complex JOIN queries' }
    ],
    interviewQuestions: [
      { q: 'Can you use a column alias in a WHERE clause?', a: 'Standard SQL does not allow column aliases in the WHERE clause because the WHERE clause is evaluated before the SELECT list. However, you can use aliases in the GROUP BY, ORDER BY, and HAVING clauses.' }
    ],
    summary: ['AS creates a temporary name.', 'Highly useful for calculated columns.'],
    references: commonReferences
  },

  'mysql_and': {
    isStructured: true,
    title: '26. AND Operator',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The AND operator displays a record if ALL the conditions separated by AND are TRUE.',
    whyUseIt: 'To narrow down search results requiring multiple specific criteria to be met simultaneously.',
    syntax: 'SELECT columns FROM table WHERE condition1 AND condition2 AND condition3;',
    codeExample: '-- Find adults living in the USA:\nSELECT * FROM users \nWHERE age >= 18 \nAND country = \'USA\';\n\n-- Find specific active products:\nSELECT name, price FROM products \nWHERE stock > 0 \nAND category = \'Electronics\' \nAND price < 500;',
    hasLiveOutput: false,
    expectedOutput: '+---------+-------+\n| name    | price |\n+---------+-------+\n| Monitor |  300  |\n| Kindle  |  120  |\n+---------+-------+',
    explanation: [
      { code: 'AND', desc: 'Requires BOTH conditions to be true.' }
    ],
    realWorldExample: 'Filtering a flight search: "Departing from NY" AND "Arriving in LA" AND "Date = Tomorrow".',
    commonMistakes: [
      { error: 'Combining mutually exclusive conditions.', code: 'WHERE color = \'Red\' AND color = \'Blue\'', suffix: 'A single column cannot hold two different values simultaneously. Use OR instead.' }
    ],
    bestPractices: ['Format complex WHERE clauses with line breaks for readability'],
    practiceExercise: {
      task: 'Write a query to find employees where `department` is "Sales" AND `salary` is greater than 50000.',
      expectedOutput: '+------+--------+------------+\n| name | salary | department |\n+------+--------+------------+',
      solution: 'SELECT * FROM employees WHERE department = \'Sales\' AND salary > 50000;'
    },
    quiz: [
      { question: 'The AND operator displays a record if...', options: ['Any condition is true', 'All conditions are true', 'No conditions are true', 'The first condition is true'], answer: 'All conditions are true' },
      { question: 'What happens if you run: WHERE age > 20 AND age < 10?', options: ['Returns people between 10 and 20', 'Returns everyone', 'Returns 0 rows (Impossible condition)', 'Syntax Error'], answer: 'Returns 0 rows (Impossible condition)' },
      { question: 'Can you use more than two AND conditions?', options: ['No, maximum is two', 'Yes, you can chain as many as needed', 'Only if they check the same column', 'Only with numeric data'], answer: 'Yes, you can chain as many as needed' },
      { question: 'Which operator is evaluated first: AND or OR?', options: ['OR is evaluated first', 'AND is evaluated first', 'Evaluated left to right', 'Randomly'], answer: 'AND is evaluated first' },
      { question: 'Is && a valid synonym for AND in MySQL?', options: ['Yes', 'No', 'Only in strict mode', 'Only in stored procedures'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'What is the precedence of AND and OR in SQL?', a: 'AND has higher precedence than OR. This means `A OR B AND C` is evaluated as `A OR (B AND C)`. Always use parentheses to make your intent explicit.' }
    ],
    summary: ['AND requires all conditions to be true.', 'Use parentheses when combining with OR.'],
    references: commonReferences
  },

  'mysql_or': {
    isStructured: true,
    title: '27. OR Operator',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The OR operator displays a record if ANY of the conditions separated by OR is TRUE.',
    whyUseIt: 'To broaden search results when multiple different criteria are acceptable.',
    syntax: 'SELECT columns FROM table WHERE condition1 OR condition2;',
    codeExample: '-- Find users living in the USA or Canada:\nSELECT name, country FROM users \nWHERE country = \'USA\' \nOR country = \'Canada\';\n\n-- Find users who are admins OR have a high score:\nSELECT name FROM users \nWHERE role = \'Admin\' \nOR score > 9000;',
    hasLiveOutput: false,
    expectedOutput: '+--------+---------+\n| name   | country |\n+--------+---------+\n| Alice  | USA     |\n| Bob    | Canada  |\n+--------+---------+',
    explanation: [
      { code: 'OR', desc: 'Requires AT LEAST ONE condition to be true.' }
    ],
    realWorldExample: 'An online store showing products that are either "On Sale" OR "In Clearance".',
    commonMistakes: [
      { error: 'Forgetting column names in subsequent conditions.', code: 'WHERE country = \'USA\' OR \'Canada\'', suffix: 'Must be: WHERE country = \'USA\' OR country = \'Canada\'.' }
    ],
    bestPractices: ['Use the IN operator instead of multiple ORs for the same column (e.g. IN ("USA", "Canada"))'],
    practiceExercise: {
      task: 'Write a query to find books where the `genre` is "Fantasy" OR the `genre` is "Sci-Fi".',
      expectedOutput: '+---------+---------+\n| title   | genre   |\n+---------+---------+',
      solution: 'SELECT * FROM books WHERE genre = \'Fantasy\' OR genre = \'Sci-Fi\';'
    },
    quiz: [
      { question: 'The OR operator displays a record if...', options: ['All conditions are true', 'At least one condition is true', 'No conditions are true', 'The last condition is true'], answer: 'At least one condition is true' },
      { question: 'Which is correctly written?', options: ["WHERE color = 'Red' OR 'Blue'", "WHERE color = 'Red' OR color = 'Blue'", "WHERE color == 'Red' OR 'Blue'", "WHERE color = 'Red', 'Blue'"], answer: "WHERE color = 'Red' OR color = 'Blue'" },
      { question: 'What is a shorter alternative to multiple OR statements on the same column?', options: ['AND', 'LIKE', 'IN', 'BETWEEN'], answer: 'IN' },
      { question: 'Is || a valid synonym for OR in MySQL?', options: ['Yes', 'No', 'Only for strings', 'Only for numbers'], answer: 'Yes' },
      { question: 'If you combine AND and OR, which should you use to control execution order?', options: ['Brackets []', 'Parentheses ()', 'Quotes ""', 'Commas ,'], answer: 'Parentheses ()' }
    ],
    interviewQuestions: [
      { q: 'Why might `IN` be better than multiple `OR` statements?', a: '`IN` is more readable, concise, and in some database engines, it can be optimized better than a long chain of `OR` statements.' }
    ],
    summary: ['OR requires at least one condition to be true.', 'Always explicitly state the column for each OR.'],
    references: commonReferences
  },

  'mysql_not': {
    isStructured: true,
    title: '28. NOT Operator',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The NOT operator displays a record if the condition(s) is NOT TRUE.',
    whyUseIt: 'To exclude specific values or ranges from your results.',
    syntax: 'SELECT columns FROM table WHERE NOT condition;',
    codeExample: '-- Exclude users from a specific country:\nSELECT name, country FROM users \nWHERE NOT country = \'USA\';\n-- Alternatively: WHERE country != \'USA\';\n\n-- Exclude multiple conditions:\nSELECT name FROM users \nWHERE NOT (role = \'Admin\' OR role = \'SuperUser\');',
    hasLiveOutput: false,
    expectedOutput: '+-------+---------+\n| name  | country |\n+-------+---------+\n| Ravi  | India   |\n| Luis  | Spain   |\n+-------+---------+',
    explanation: [
      { code: 'NOT', desc: 'Inverts the truth value of the condition.' }
    ],
    realWorldExample: 'Showing all active tasks: SELECT * FROM tasks WHERE NOT status = "Completed";',
    commonMistakes: [
      { error: 'Placing NOT in the wrong place.', code: 'WHERE country NOT = \'USA\'', suffix: 'Correct syntax is NOT condition, or use != / <>.' }
    ],
    bestPractices: ['For simple equality, != or <> is often more readable than NOT'],
    practiceExercise: {
      task: 'Write a query to find all users where the `status` is NOT "Banned".',
      expectedOutput: '+------+--------+\n| name | status |\n+------+--------+',
      solution: 'SELECT * FROM users WHERE NOT status = \'Banned\'; -- or status != \'Banned\''
    },
    quiz: [
      { question: 'What does the NOT operator do?', options: ['Returns only NULL values', 'Inverts a condition', 'Deletes data', 'Throws an error'], answer: 'Inverts a condition' },
      { question: 'Which of the following is equivalent to: NOT country = "USA"?', options: ['country != "USA"', 'country <> "USA"', 'Both A and B', 'None of the above'], answer: 'Both A and B' },
      { question: 'Where is NOT usually placed?', options: ['At the end of the query', 'Before the condition it is negating', 'After the table name', 'Before the SELECT keyword'], answer: 'Before the condition it is negating' },
      { question: 'Can NOT be combined with IN (e.g., NOT IN)?', options: ['Yes', 'No', 'Only with numbers', 'Only with strings'], answer: 'Yes' },
      { question: 'Is ! a valid synonym for NOT in MySQL?', options: ['Yes', 'No', 'Only inside IF statements', 'Only for booleans'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `!=` and `<>`?', a: 'In standard SQL, both `<>` and `!=` mean "not equal to". `<>` is the ISO standard, while `!=` is a widely supported extension.' }
    ],
    summary: ['NOT inverts a condition.', 'Commonly used with IN, BETWEEN, and LIKE (e.g., NOT IN).'],
    references: commonReferences
  },

  'mysql_between': {
    isStructured: true,
    title: '29. BETWEEN',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.',
    whyUseIt: 'It is a cleaner, more readable alternative to using >= AND <=.',
    syntax: 'SELECT columns FROM table WHERE column BETWEEN value1 AND value2;',
    codeExample: '-- Find products priced between 10 and 50:\nSELECT name, price FROM products \nWHERE price BETWEEN 10 AND 50;\n\n-- Find users who joined in a specific date range:\nSELECT name, join_date FROM users\nWHERE join_date BETWEEN \'2023-01-01\' AND \'2023-12-31\';\n\n-- NOT BETWEEN:\nSELECT name, price FROM products\nWHERE price NOT BETWEEN 10 AND 50;',
    hasLiveOutput: false,
    expectedOutput: '+-------+-------+\n| name  | price |\n+-------+-------+\n| Mug   |  12   |\n| Book  |  25   |\n+-------+-------+',
    explanation: [
      { code: 'BETWEEN x AND y', desc: 'Is inclusive! It includes both x and y in the results.' }
    ],
    realWorldExample: 'Filtering a store by a price range, or generating a report for a specific week.',
    commonMistakes: [
      { error: 'Assuming BETWEEN is exclusive.', code: '', suffix: 'BETWEEN 1 AND 5 includes both 1 and 5.' }
    ],
    bestPractices: ['Ensure the smaller value comes first (BETWEEN small AND large)'],
    practiceExercise: {
      task: 'Write a query to find employees where `salary` is between 40000 and 60000.',
      expectedOutput: '+--------+\n| salary |\n+--------+',
      solution: 'SELECT * FROM employees WHERE salary BETWEEN 40000 AND 60000;'
    },
    quiz: [
      { question: 'Is the BETWEEN operator inclusive or exclusive?', options: ['Exclusive', 'Inclusive', 'Includes start, excludes end', 'Excludes start, includes end'], answer: 'Inclusive' },
      { question: 'Which is equivalent to: price BETWEEN 10 AND 20?', options: ['price > 10 AND price < 20', 'price >= 10 AND price <= 20', 'price = 10 OR price = 20', 'price = 10 AND price = 20'], answer: 'price >= 10 AND price <= 20' },
      { question: 'Can BETWEEN be used with Dates?', options: ['Yes', 'No, only numbers', 'Only timestamps', 'Only strings'], answer: 'Yes' },
      { question: 'What happens if the first value is larger than the second (BETWEEN 20 AND 10)?', options: ['Works normally', 'Reverses the sort order', 'Returns an error or zero rows', 'Deletes data'], answer: 'Returns an error or zero rows' },
      { question: 'How do you find values OUTSIDE a range?', options: ['OUTSIDE BETWEEN', 'NOT BETWEEN', 'EXCEPT BETWEEN', 'BEYOND'], answer: 'NOT BETWEEN' }
    ],
    interviewQuestions: [
      { q: 'Is BETWEEN inclusive?', a: 'Yes, `BETWEEN A AND B` includes both A and B. It is exactly equivalent to `>= A AND <= B`.' }
    ],
    summary: ['BETWEEN finds values in a range.', 'It is inclusive.', 'Works with numbers, dates, and text.'],
    references: commonReferences
  },

  'mysql_in': {
    isStructured: true,
    title: '30. IN Operator',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The IN operator allows you to specify multiple values in a WHERE clause.',
    whyUseIt: 'It is a shorthand for multiple OR conditions, making queries much cleaner and easier to read.',
    syntax: 'SELECT columns FROM table WHERE column IN (value1, value2, ...);',
    codeExample: '-- Instead of:\n-- WHERE country = \'USA\' OR country = \'UK\' OR country = \'India\'\n\n-- Use IN:\nSELECT name, country FROM users \nWHERE country IN (\'USA\', \'UK\', \'India\');\n\n-- Combine with NOT:\nSELECT name, country FROM users\nWHERE country NOT IN (\'USA\', \'UK\');',
    hasLiveOutput: false,
    expectedOutput: '+--------+---------+\n| name   | country |\n+--------+---------+\n| Alice  | USA     |\n| Ravi   | India   |\n| George | UK      |\n+--------+---------+',
    explanation: [
      { code: 'IN (...)', desc: 'Checks if the column value matches any value in the list.' }
    ],
    realWorldExample: 'Selecting users based on a multi-select dropdown (e.g., Status: Active, Pending, Review).',
    commonMistakes: [
      { error: 'Using IN with wildcards.', code: 'WHERE name IN (\'A%\', \'B%\')', suffix: 'IN does not support wildcards. Use LIKE with OR instead.' }
    ],
    bestPractices: ['Use IN for lists of exact matches', 'IN is often used with Subqueries (e.g., WHERE id IN (SELECT...))'],
    practiceExercise: {
      task: 'Write a query to find all orders where the `status` is either "Shipped", "Delivered", or "Processing".',
      expectedOutput: '+--------+\n| status |\n+--------+',
      solution: 'SELECT * FROM orders WHERE status IN (\'Shipped\', \'Delivered\', \'Processing\');'
    },
    quiz: [
      { question: 'The IN operator is a shorthand for multiple what?', options: ['AND statements', 'OR statements', 'LIKE statements', 'JOINs'], answer: 'OR statements' },
      { question: 'How is the list of values formatted for the IN operator?', options: ['In square brackets [a, b]', 'In parentheses (a, b)', 'Separated by spaces', 'In quotes "a, b"'], answer: 'In parentheses (a, b)' },
      { question: 'Which is correctly written?', options: ['WHERE status IN \'Active\', \'Pending\'', 'WHERE status IN ("Active", "Pending")', 'WHERE status = IN ("Active")', 'WHERE status IN [Active, Pending]'], answer: 'WHERE status IN ("Active", "Pending")' },
      { question: 'Can you use the IN operator with numeric values?', options: ['Yes', 'No, only strings', 'No, only dates', 'Only with floats'], answer: 'Yes' },
      { question: 'Can you put a SELECT query inside the IN parentheses?', options: ['Yes, this is called a Subquery', 'No, that is a syntax error', 'Only in Oracle SQL', 'Yes, but it ignores the result'], answer: 'Yes, this is called a Subquery' }
    ],
    interviewQuestions: [
      { q: 'Can you use wildcards (like %) inside an IN clause?', a: 'No, the IN clause only performs exact string matching. To use wildcards, you must use the LIKE operator combined with OR.' }
    ],
    summary: ['IN is shorthand for multiple ORs.', 'Great for arrays of specific values.'],
    references: commonReferences
  },

  'mysql_like': {
    isStructured: true,
    title: '31. LIKE Operator',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.',
    whyUseIt: 'Essential for text searches (e.g., "Find all users whose email ends in @gmail.com").',
    syntax: 'SELECT columns FROM table WHERE column LIKE pattern;',
    codeExample: '-- Starts with "a":\nSELECT name FROM users WHERE name LIKE \'a%\';\n\n-- Ends with "gmail.com":\nSELECT email FROM users WHERE email LIKE \'%@gmail.com\';\n\n-- Contains "john":\nSELECT name FROM users WHERE name LIKE \'%john%\';',
    hasLiveOutput: false,
    expectedOutput: '+----------------+\n| email          |\n+----------------+\n| a@gmail.com    |\n| bob@gmail.com  |\n+----------------+',
    explanation: [
      { code: 'LIKE', desc: 'Initiates a pattern match.' },
      { code: '%', desc: 'Wildcard: Represents zero, one, or multiple characters.' }
    ],
    realWorldExample: 'Implementing a simple search bar on a website.',
    commonMistakes: [
      { error: 'Using LIKE for exact matches.', code: 'WHERE name LIKE \'Alice\'', suffix: 'This works, but = is faster for exact matches.' }
    ],
    bestPractices: ['Avoid leading wildcards (e.g., \'%john\') if possible, as they prevent MySQL from using indexes, making searches slow on large tables.'],
    practiceExercise: {
      task: 'Write a query to find all users whose `phone` number starts with "555".',
      expectedOutput: '+----------+\n| phone    |\n+----------+',
      solution: 'SELECT * FROM users WHERE phone LIKE \'555%\';'
    },
    quiz: [
      { question: 'What does the LIKE operator do?', options: ['Finds exact numeric matches', 'Searches for a specified pattern in a column', 'Likes a database post', 'Finds similar sounding words'], answer: 'Searches for a specified pattern in a column' },
      { question: 'Which character represents "zero or more characters"?', options: ['*', '?', '_', '%'], answer: '%' },
      { question: 'How do you find values ending with "son"?', options: ['LIKE "son%"', 'LIKE "%son%"', 'LIKE "%son"', 'LIKE "son"'], answer: 'LIKE "%son"' },
      { question: 'Is LIKE case-sensitive in MySQL by default?', options: ['Yes', 'No', 'Only for passwords', 'Only on Linux'], answer: 'No' },
      { question: 'Why is `LIKE "%text"` slow on large tables?', options: ['It requires internet access', 'It prevents the database from using an index', 'It uses too much memory', 'It converts data to numbers first'], answer: 'It prevents the database from using an index' }
    ],
    interviewQuestions: [
      { q: 'Why might a query using `LIKE "%search%"` be very slow?', a: 'Because of the leading wildcard `%`, the database engine cannot use standard B-Tree indexes. It must perform a "Full Table Scan", checking every single row in the database, which is extremely slow on large tables.' }
    ],
    summary: ['LIKE searches for patterns.', '% means any sequence of characters.'],
    references: commonReferences
  },

  'mysql_wildcards': {
    isStructured: true,
    title: '32. Wildcards',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'Wildcards are special characters used with the LIKE operator to define complex search patterns.',
    whyUseIt: 'Allows for highly specific fuzzy searching.',
    syntax: '-- % represents zero or more characters\n-- _ represents a SINGLE character',
    codeExample: '-- Find any name starting with A and at least 3 chars long:\nSELECT name FROM users WHERE name LIKE \'A_%_%\';\n\n-- Find a 5-letter name starting with "S" and ending with "h":\nSELECT name FROM users WHERE name LIKE \'S___h\';\n\n-- Find names where the second letter is "a":\nSELECT name FROM users WHERE name LIKE \'_a%\';',
    hasLiveOutput: false,
    expectedOutput: '+-------+\n| name  |\n+-------+\n| Sarah |\n| Smith |\n+-------+',
    explanation: [
      { code: '_ (underscore)', desc: 'Matches exactly ONE character.' },
      { code: '% (percent)', desc: 'Matches ANY number of characters.' }
    ],
    realWorldExample: 'Finding postal codes formatted like "A1A 1A1": LIKE "_%_ %_%"',
    commonMistakes: [
      { error: 'Confusing % and _', code: '', suffix: '_ is exactly one character. % is 0 to infinity characters.' }
    ],
    bestPractices: ['Combine _ and % for highly specific pattern requirements'],
    practiceExercise: {
      task: 'Write a query to find words that are exactly 3 letters long and end in "at" (e.g., cat, bat, hat).',
      expectedOutput: '+------+\n| word |\n+------+',
      solution: 'SELECT * FROM words WHERE word LIKE \'_at\';'
    },
    quiz: [
      { question: 'What does the underscore (_) wildcard represent?', options: ['Zero characters', 'Exactly one character', 'Multiple characters', 'A space'], answer: 'Exactly one character' },
      { question: 'Which pattern matches names where the third letter is "t"?', options: ['LIKE "t%"', 'LIKE "_t%"', 'LIKE "__t%"', 'LIKE "%t_"'], answer: 'LIKE "__t%"' },
      { question: 'What does the pattern LIKE "a_%_%" mandate?', options: ['Starts with a', 'Starts with a, and is at least 3 characters long', 'Ends with a', 'Has 3 letters'], answer: 'Starts with a, and is at least 3 characters long' },
      { question: 'Are wildcards used with the = operator?', options: ['Yes', 'No, they are used with LIKE', 'Only on strings', 'Yes, but only %'], answer: 'No, they are used with LIKE' },
      { question: 'How do you match a literal percent sign (%) if it is a wildcard?', options: ['You cannot', 'Escape it: LIKE "100\\%"', 'Use ==', 'Quote it: "%"'], answer: 'Escape it: LIKE "100\\%"' }
    ],
    interviewQuestions: [
      { q: 'How would you search for a literal `%` or `_` character in a string?', a: 'You must escape the wildcard character using a backslash `\\`, for example: `WHERE discount LIKE "50\\%"`' }
    ],
    summary: ['% matches any number of chars.', '_ matches exactly one char.'],
    references: commonReferences
  },

  'mysql_is_null': {
    isStructured: true,
    title: '33. IS NULL',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'IS NULL is used to test for empty (NULL) values in a column.',
    whyUseIt: 'You cannot use = NULL to check for null values. You MUST use IS NULL.',
    syntax: 'SELECT columns FROM table WHERE column IS NULL;',
    codeExample: '-- Find users who have NOT provided an email address:\nSELECT name FROM users WHERE email IS NULL;\n\n-- Find orders that have no shipping date yet:\nSELECT order_id FROM orders WHERE shipped_date IS NULL;',
    hasLiveOutput: false,
    expectedOutput: '+--------+\n| name   |\n+--------+\n| Bob    |\n| George |\n+--------+',
    explanation: [
      { code: 'NULL', desc: 'Represents missing or unknown data. It is NOT the same as zero or an empty string.' },
      { code: 'IS NULL', desc: 'The only valid way to check if a value is NULL.' }
    ],
    realWorldExample: 'Finding incomplete profiles to send a "Complete your profile" email.',
    commonMistakes: [
      { error: 'Using = NULL', code: 'WHERE email = NULL', suffix: 'This will ALWAYS return false. NULL cannot equal NULL.' }
    ],
    bestPractices: ['Understand that NULL means "Unknown", not "Empty String"'],
    practiceExercise: {
      task: 'Write a query to find all tasks in the `todos` table where the `completed_at` date is missing.',
      expectedOutput: '+------+\n| task |\n+------+',
      solution: 'SELECT * FROM todos WHERE completed_at IS NULL;'
    },
    quiz: [
      { question: 'What does NULL represent in a database?', options: ['The number zero', 'An empty string ""', 'Missing, unknown, or undefined data', 'A syntax error'], answer: 'Missing, unknown, or undefined data' },
      { question: 'How do you correctly check if a column is NULL?', options: ['WHERE column = NULL', 'WHERE column == NULL', 'WHERE column IS NULL', 'WHERE column CONTAINS NULL'], answer: 'WHERE column IS NULL' },
      { question: 'Why does WHERE column = NULL fail?', options: ['MySQL bug', 'NULL means unknown, and unknown cannot equal unknown', 'You need quotes: "NULL"', 'It deletes data'], answer: 'NULL means unknown, and unknown cannot equal unknown' },
      { question: 'Is NULL the same as an empty string ("")?', options: ['Yes', 'No', 'Only in VARCHAR columns', 'Only on Windows'], answer: 'No' },
      { question: 'Can primary keys be NULL?', options: ['Yes', 'No', 'Only on the first row', 'Yes, but only once'], answer: 'No' }
    ],
    interviewQuestions: [
      { q: 'Why doesn\'t `WHERE column = NULL` work?', a: 'Because NULL represents an unknown value. In SQL logic, evaluating `Unknown = Unknown` results in `Unknown` (not True). Therefore, you must use the special `IS NULL` operator.' }
    ],
    summary: ['NULL means missing data.', 'Always use IS NULL, never = NULL.'],
    references: commonReferences
  },

  'mysql_is_not_null': {
    isStructured: true,
    title: '34. IS NOT NULL',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'IS NOT NULL is used to filter out empty (NULL) values, ensuring the column has some data.',
    whyUseIt: 'To ensure you only process rows that have valid data in a specific column.',
    syntax: 'SELECT columns FROM table WHERE column IS NOT NULL;',
    codeExample: '-- Find users who HAVE provided an email address:\nSELECT name, email FROM users WHERE email IS NOT NULL;\n\n-- Find orders that have already shipped:\nSELECT order_id FROM orders WHERE shipped_date IS NOT NULL;',
    hasLiveOutput: false,
    expectedOutput: '+-------+---------------+\n| name  | email         |\n+-------+---------------+\n| Alice | a@mail.com    |\n| David | d@mail.com    |\n+-------+---------------+',
    explanation: [
      { code: 'IS NOT NULL', desc: 'Checks that the field contains actual data.' }
    ],
    realWorldExample: 'Sending out an email newsletter. You only want to query users whose email IS NOT NULL.',
    commonMistakes: [
      { error: 'Using != NULL', code: 'WHERE email != NULL', suffix: 'Just like = NULL, this will not work. Always use IS NOT NULL.' }
    ],
    bestPractices: ['Define columns as NOT NULL during table creation if the data is strictly required'],
    practiceExercise: {
      task: 'Write a query to find all users who have an avatar uploaded (i.e., `avatar_url` is not missing).',
      expectedOutput: '+------------+\n| avatar_url |\n+------------+',
      solution: 'SELECT * FROM users WHERE avatar_url IS NOT NULL;'
    },
    quiz: [
      { question: 'What does IS NOT NULL do?', options: ['Checks if a value is 0', 'Checks if a string is empty', 'Ensures a column contains actual data (not missing)', 'Deletes NULL values'], answer: 'Ensures a column contains actual data (not missing)' },
      { question: 'Which is the correct syntax?', options: ['!= NULL', '<> NULL', 'NOT = NULL', 'IS NOT NULL'], answer: 'IS NOT NULL' },
      { question: 'If a column contains an empty string (""), will IS NOT NULL return that row?', options: ['Yes, an empty string is not NULL', 'No, empty strings are treated as NULL', 'Error', 'Randomly'], answer: 'Yes, an empty string is not NULL' },
      { question: 'How can you prevent NULL values from ever entering a column?', options: ['Use IS NOT NULL on every query', 'Define the column with the NOT NULL constraint in CREATE TABLE', 'You cannot prevent it', 'Use triggers'], answer: 'Define the column with the NOT NULL constraint in CREATE TABLE' },
      { question: 'What happens if you use COUNT(column_name)?', options: ['It counts all rows', 'It only counts rows where column_name IS NOT NULL', 'It causes an error', 'It only counts NULLs'], answer: 'It only counts rows where column_name IS NOT NULL' }
    ],
    interviewQuestions: [
      { q: 'Does `COUNT(column_name)` include NULL values?', a: 'No. `COUNT(column_name)` ignores NULL values in that specific column. However, `COUNT(*)` counts all rows regardless of NULL values.' }
    ],
    summary: ['IS NOT NULL filters out missing data.', 'Empty strings ("") are NOT Null.'],
    references: commonReferences
  }
};
