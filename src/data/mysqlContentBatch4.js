const commonReferences = [
  { label: 'W3Schools MySQL', url: 'https://www.w3schools.com/mysql/' },
  { label: 'MySQL Official Docs', url: 'https://dev.mysql.com/doc/refman/8.0/en/' }
];

export const mysqlContentBatch4 = {
  'mysql_joins': {
    isStructured: true,
    title: '49. Introduction to JOINs',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'A JOIN clause is used to combine rows from two or more tables, based on a related column between them.',
    whyUseIt: 'Relational databases store data in separate tables to avoid duplication. JOINs put the pieces back together.',
    syntax: 'SELECT columns \nFROM table1 \nJOIN table2 \nON table1.column = table2.column;',
    codeExample: '-- Given: \n-- users (id, name)\n-- orders (id, user_id, total)\n\n-- Get user names with their orders:\nSELECT users.name, orders.total\nFROM users\nJOIN orders \nON users.id = orders.user_id;',
    hasLiveOutput: false,
    expectedOutput: '+-------+-------+\n| name  | total |\n+-------+-------+\n| Alice | 50.00 |\n| Bob   | 75.50 |\n+-------+-------+',
    explanation: [
      { code: 'JOIN', desc: 'Combines the tables. (By default, this acts as an INNER JOIN).' },
      { code: 'ON', desc: 'The condition that links the two tables (usually Primary Key = Foreign Key).' }
    ],
    realWorldExample: 'Showing an Amazon order history page requires joining the `Users`, `Orders`, and `Products` tables.',
    commonMistakes: [
      { error: 'Ambiguous column names.', code: 'SELECT id', suffix: 'If both tables have an `id`, MySQL doesn\'t know which one you want. Use `table.id` or aliases.' }
    ],
    bestPractices: ['Always use table aliases (e.g., FROM users u JOIN orders o) for readability in complex queries'],
    practiceExercise: {
      task: 'Write a basic JOIN query to combine `employees` and `departments` on `employees.dept_id = departments.id`.',
      expectedOutput: '+-------------+-----------------+\n| name        | department_name |\n+-------------+-----------------+',
      solution: 'SELECT employees.name, departments.department_name \nFROM employees \nJOIN departments \nON employees.dept_id = departments.id;'
    },
    quiz: [
      { question: 'What is the primary purpose of a JOIN?', options: ['To delete duplicate data', 'To combine rows from two or more tables based on a related column', 'To sort data automatically', 'To split a table into two'], answer: 'To combine rows from two or more tables based on a related column' },
      { question: 'Which keyword defines HOW the tables are related in a JOIN?', options: ['WHERE', 'LINK', 'ON', 'RELATE'], answer: 'ON' },
      { question: 'What type of keys are usually used in the ON clause?', options: ['Primary Key = Primary Key', 'Primary Key = Foreign Key', 'Foreign Key = Foreign Key', 'Text = Text'], answer: 'Primary Key = Foreign Key' },
      { question: 'If you just write "JOIN" without specifying the type, which JOIN does MySQL default to?', options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL JOIN'], answer: 'INNER JOIN' },
      { question: 'What error occurs if you select a column name that exists in both tables?', options: ['Syntax Error', 'Ambiguous Column Error', 'Null Reference', 'Loop Error'], answer: 'Ambiguous Column Error' }
    ],
    interviewQuestions: [
      { q: 'Why do we need JOINs in a relational database?', a: 'Because relational databases use Normalization—storing data in separate logical tables to reduce redundancy. JOINs are necessary to query across these tables and reconstruct a complete, meaningful view of the data.' }
    ],
    summary: ['JOIN combines tables.', 'Use ON to specify the matching relationship (usually PK = FK).'],
    references: commonReferences
  },

  'mysql_inner_join': {
    isStructured: true,
    title: '50. INNER JOIN',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'INNER JOIN returns only the records that have matching values in BOTH tables.',
    whyUseIt: 'To filter out data that doesn\'t have a match. (e.g., "Show me ONLY users who have actually placed an order").',
    syntax: 'SELECT columns FROM t1 INNER JOIN t2 ON t1.id = t2.ref_id;',
    codeExample: '-- Get ONLY users who have placed orders:\nSELECT u.name, o.total \nFROM users AS u\nINNER JOIN orders AS o \nON u.id = o.user_id;',
    hasLiveOutput: false,
    expectedOutput: '+-------+-------+\n| name  | total |\n+-------+-------+\n| Alice | 50.00 |\n+-------+-------+',
    explanation: [
      { code: 'INNER JOIN', desc: 'Strict match. If a user has no orders, they don\'t show up. If an order has a missing user, it doesn\'t show up.' }
    ],
    realWorldExample: 'Finding students who are actively enrolled in at least one class.',
    commonMistakes: [
      { error: 'Assuming it includes everything.', code: '', suffix: 'INNER JOIN strictly drops rows that lack a match on the other side.' }
    ],
    bestPractices: ['INNER JOIN is the default JOIN in MySQL, but explicitly writing INNER JOIN is better for readability'],
    practiceExercise: {
      task: 'Write an INNER JOIN to show `books.title` and `authors.name` where `books.author_id = authors.id`.',
      expectedOutput: '+-------------+-------------+\n| title       | name        |\n+-------------+-------------+',
      solution: 'SELECT books.title, authors.name \nFROM books \nINNER JOIN authors \nON books.author_id = authors.id;'
    },
    quiz: [
      { question: 'Which records does an INNER JOIN return?', options: ['All records from both tables', 'Only records that have matching values in both tables', 'All records from the left table', 'Records that do NOT match'], answer: 'Only records that have matching values in both tables' },
      { question: 'What happens to a row in the first table if it has no match in the second table?', options: ['It is included with NULL values', 'It is excluded from the result set', 'It causes an error', 'It is duplicated'], answer: 'It is excluded from the result set' },
      { question: 'Is "JOIN" exactly the same as "INNER JOIN"?', options: ['Yes', 'No, JOIN means OUTER JOIN', 'No, JOIN means LEFT JOIN', 'Only in Oracle'], answer: 'Yes' },
      { question: 'How is INNER JOIN best visualized in a Venn Diagram?', options: ['The entire left circle', 'The entire right circle', 'The overlapping intersection in the middle', 'Both circles entirely'], answer: 'The overlapping intersection in the middle' },
      { question: 'Which clause defines the matching condition?', options: ['WHERE', 'ON', 'LINK', 'HAVING'], answer: 'ON' }
    ],
    interviewQuestions: [
      { q: 'What is the Venn diagram equivalent of an INNER JOIN?', a: 'An INNER JOIN represents the intersection of two sets. It only returns the data where the two circles (tables) overlap based on the `ON` condition.' }
    ],
    summary: ['INNER JOIN requires a strict match.', 'Unmatched rows from both sides are dropped.'],
    references: commonReferences
  },

  'mysql_left_join': {
    isStructured: true,
    title: '51. LEFT JOIN',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'LEFT JOIN returns all records from the left table (table1), and the matched records from the right table (table2). The result is NULL from the right side if there is no match.',
    whyUseIt: 'When you want all data from your main table, regardless of whether it has related data. (e.g., "Show me ALL users, and their orders if they have any").',
    syntax: 'SELECT columns FROM table1 LEFT JOIN table2 ON table1.id = table2.ref_id;',
    codeExample: '-- Get ALL users, and their orders (if they made one):\nSELECT u.name, o.total \nFROM users u\nLEFT JOIN orders o \nON u.id = o.user_id;',
    hasLiveOutput: false,
    expectedOutput: '+---------+-------+\n| name    | total |\n+---------+-------+\n| Alice   | 50.00 |\n| Bob     | NULL  |  <-- Bob has no orders\n+---------+-------+',
    explanation: [
      { code: 'LEFT JOIN', desc: 'Keeps ALL rows from the first (LEFT) table.' },
      { code: 'NULL', desc: 'Fills in the gaps if the second table has no matching row.' }
    ],
    realWorldExample: 'Generating a report of ALL employees and their assigned parking spots (some employees don\'t drive).',
    commonMistakes: [
      { error: 'Adding a WHERE clause on the right table.', code: 'WHERE o.total > 0', suffix: 'This converts your LEFT JOIN back into an INNER JOIN by filtering out the NULL rows. Put conditions in the ON clause instead.' }
    ],
    bestPractices: ['Use LEFT JOIN to find "orphaned" records (e.g., WHERE o.id IS NULL finds users with no orders)'],
    practiceExercise: {
      task: 'Write a query to list ALL `customers`, and their `support_tickets` if they have any. (Assume `customers` is the left table).',
      expectedOutput: '+-----------+-----------+\n| customer  | ticket_id |\n+-----------+-----------+',
      solution: 'SELECT customers.name, support_tickets.id \nFROM customers \nLEFT JOIN support_tickets \nON customers.id = support_tickets.customer_id;'
    },
    quiz: [
      { question: 'Which records does a LEFT JOIN return?', options: ['Only matching records', 'All records from the right table', 'All records from the left table, plus matches from the right', 'Only unmatched records'], answer: 'All records from the left table, plus matches from the right' },
      { question: 'What value is populated for columns from the right table if no match is found?', options: ['0', '"" (Empty String)', 'NULL', 'Error'], answer: 'NULL' },
      { question: 'How do you find rows in the left table that DO NOT have a match in the right table?', options: ['Use INNER JOIN', 'Add: WHERE right_table.id IS NULL', 'Add: WHERE left_table.id IS NULL', 'Use RIGHT JOIN'], answer: 'Add: WHERE right_table.id IS NULL' },
      { question: 'Which table is considered the "Left" table?', options: ['The one with the smallest data', 'The first table mentioned after the FROM clause', 'The second table mentioned', 'The one with the Primary Key'], answer: 'The first table mentioned after the FROM clause' },
      { question: 'What happens if you apply a strict WHERE clause to a column from the right table?', options: ['It speeds up the query', 'It effectively turns the LEFT JOIN into an INNER JOIN', 'It causes an error', 'It ignores the WHERE clause'], answer: 'It effectively turns the LEFT JOIN into an INNER JOIN' }
    ],
    interviewQuestions: [
      { q: 'How would you find users who have NEVER placed an order?', a: 'You use a LEFT JOIN from `users` to `orders`, and then filter for where the order data is missing: `... LEFT JOIN orders ON users.id = orders.user_id WHERE orders.id IS NULL;`' }
    ],
    summary: ['LEFT JOIN keeps EVERYTHING from the left table.', 'Missing matches on the right are filled with NULL.'],
    references: commonReferences
  },

  'mysql_right_join': {
    isStructured: true,
    title: '52. RIGHT JOIN',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'RIGHT JOIN returns all records from the right table (table2), and the matched records from the left table (table1).',
    whyUseIt: 'It is the exact opposite of LEFT JOIN. It is rarely used because you can simply swap table positions and use LEFT JOIN instead.',
    syntax: 'SELECT columns FROM table1 RIGHT JOIN table2 ON table1.id = table2.ref_id;',
    codeExample: '-- Get ALL orders, and the user who made them (if any):\nSELECT u.name, o.total \nFROM users u\nRIGHT JOIN orders o \nON u.id = o.user_id;',
    hasLiveOutput: false,
    expectedOutput: '+-------+-------+\n| name  | total |\n+-------+-------+\n| Alice | 50.00 |\n| NULL  | 99.99 | <-- Orphaned order\n+-------+-------+',
    explanation: [
      { code: 'RIGHT JOIN', desc: 'Keeps ALL rows from the second (RIGHT) table.' }
    ],
    realWorldExample: 'Finding "orphan" records, like an order that points to a deleted user.',
    commonMistakes: [
      { error: 'Mixing LEFT and RIGHT joins.', code: '', suffix: 'It becomes very confusing to read. Stick to LEFT JOINs for consistency.' }
    ],
    bestPractices: ['Most developers prefer to just flip the table order and use a LEFT JOIN for better readability'],
    practiceExercise: {
      task: 'Rewrite this RIGHT JOIN as a LEFT JOIN, keeping the output identical: `SELECT * FROM A RIGHT JOIN B ON A.id = B.a_id;`',
      expectedOutput: 'Matches exact output of the RIGHT JOIN.',
      solution: 'SELECT * FROM B LEFT JOIN A ON B.a_id = A.id;'
    },
    quiz: [
      { question: 'Which records does a RIGHT JOIN return?', options: ['All records from the left table', 'All records from the right table, plus matches from the left', 'Only matching records', 'All records from both tables'], answer: 'All records from the right table, plus matches from the left' },
      { question: 'What is a widely accepted best practice regarding RIGHT JOINs?', options: ['Always use them for performance', 'Avoid them; flip the tables and use a LEFT JOIN for readability', 'Only use them on numeric columns', 'Use them with FULL OUTER JOIN'], answer: 'Avoid them; flip the tables and use a LEFT JOIN for readability' },
      { question: 'What happens if a row in the right table has no match in the left table?', options: ['It is excluded', 'Left table columns are filled with NULL', 'It causes an error', 'Right table columns are filled with NULL'], answer: 'Left table columns are filled with NULL' },
      { question: 'Which table is considered the "Right" table?', options: ['The table after the FROM clause', 'The table after the JOIN keyword', 'The table with the Primary Key', 'The table with the most rows'], answer: 'The table after the JOIN keyword' },
      { question: 'Can every RIGHT JOIN be rewritten as a LEFT JOIN?', options: ['No', 'Yes, by swapping the order of the tables', 'Only in MySQL 8.0+', 'Only if they share a common column name'], answer: 'Yes, by swapping the order of the tables' }
    ],
    interviewQuestions: [
      { q: 'Why do developers rarely use RIGHT JOIN?', a: 'Readability. Humans read left-to-right. Using LEFT JOINs consistently allows you to establish a "base" table first and attach related data to it. RIGHT JOINs force you to read backwards.' }
    ],
    summary: ['RIGHT JOIN keeps EVERYTHING from the right table.', 'Usually replaced by flipping tables and using LEFT JOIN.'],
    references: commonReferences
  },

  'mysql_cross_join': {
    isStructured: true,
    title: '53. CROSS JOIN',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'CROSS JOIN returns the Cartesian product of rows from the tables in the join. In other words, it combines EVERY row from the first table with EVERY row from the second table.',
    whyUseIt: 'Useful for generating combinations (e.g., all possible shirt sizes with all possible colors).',
    syntax: 'SELECT columns FROM table1 CROSS JOIN table2;',
    codeExample: '-- Generate all variations of products:\n-- sizes: S, M, L (3 rows)\n-- colors: Red, Blue (2 rows)\n\nSELECT sizes.size, colors.color\nFROM sizes\nCROSS JOIN colors;',
    hasLiveOutput: false,
    expectedOutput: '+------+-------+\n| size | color |\n+------+-------+\n| S    | Red   |\n| M    | Red   |\n| L    | Red   |\n| S    | Blue  |\n| M    | Blue  |\n| L    | Blue  |\n+------+-------+',
    explanation: [
      { code: 'CROSS JOIN', desc: 'Does NOT use an ON clause.' },
      { code: 'Cartesian Product', desc: 'If Table1 has 5 rows and Table2 has 4 rows, the result has 5 x 4 = 20 rows.' }
    ],
    realWorldExample: 'Generating a calendar matrix or testing a database with bulk dummy data.',
    commonMistakes: [
      { error: 'Accidentally causing a Cartesian explosion.', code: 'SELECT * FROM big_table CROSS JOIN big_table', suffix: 'Joining two tables of 10,000 rows generates 100,000,000 rows, instantly crashing your DB.' }
    ],
    bestPractices: ['Use with extreme caution on large tables to avoid crashing your server'],
    practiceExercise: {
      task: 'If `table_A` has 10 rows and `table_B` has 5 rows, how many rows will `SELECT * FROM table_A CROSS JOIN table_B;` return?',
      expectedOutput: '50',
      solution: '-- 50 rows (10 x 5 = 50)'
    },
    quiz: [
      { question: 'What does a CROSS JOIN do?', options: ['Returns only matching rows', 'Combines EVERY row of table1 with EVERY row of table2', 'Returns unmatched rows', 'Joins a table to itself'], answer: 'Combines EVERY row of table1 with EVERY row of table2' },
      { question: 'Does a CROSS JOIN require an ON clause?', options: ['Yes, always', 'No, it does not use an ON clause', 'Only if the tables have different column names', 'Only in MySQL'], answer: 'No, it does not use an ON clause' },
      { question: 'If Table A has 100 rows and Table B has 200 rows, how many rows does a CROSS JOIN produce?', options: ['300', '100', '200', '20,000'], answer: '20,000' },
      { question: 'What is the mathematical term for the result of a CROSS JOIN?', options: ['Intersection', 'Union', 'Cartesian Product', 'Difference'], answer: 'Cartesian Product' },
      { question: 'What happens if you use a comma instead of CROSS JOIN (e.g., FROM table1, table2)?', options: ['Syntax Error', 'It defaults to INNER JOIN', 'It performs a CROSS JOIN', 'It throws a warning'], answer: 'It performs a CROSS JOIN' }
    ],
    interviewQuestions: [
      { q: 'What is a Cartesian Product in SQL?', a: 'A Cartesian Product occurs when you combine tables without a condition (like an ON clause), resulting in every row from the first table being paired with every row from the second table (CROSS JOIN).' }
    ],
    summary: ['CROSS JOIN creates all possible combinations.', 'Multiply rows: 5 rows x 3 rows = 15 rows.', 'Extremely dangerous on large tables.'],
    references: commonReferences
  },

  'mysql_self_join': {
    isStructured: true,
    title: '54. Self JOIN',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A self JOIN is a regular join, but the table is joined with itself.',
    whyUseIt: 'Used to compare rows within the same table, or to represent hierarchical data (like Employees and their Managers).',
    syntax: 'SELECT a.col, b.col \nFROM table1 a, table1 b \nWHERE a.common_col = b.common_col;',
    codeExample: '-- Find the name of an employee AND the name of their manager:\n-- Table employees (id, name, manager_id)\n\nSELECT \n  e.name AS Employee, \n  m.name AS Manager\nFROM employees e\nLEFT JOIN employees m \nON e.manager_id = m.id;',
    hasLiveOutput: false,
    expectedOutput: '+----------+---------+\n| Employee | Manager |\n+----------+---------+\n| John     | Alice   |\n| Bob      | Alice   |\n| Alice    | NULL    |\n+----------+---------+',
    explanation: [
      { code: 'e and m', desc: 'You MUST use aliases for the table, otherwise MySQL doesn\'t know which "copy" of the table you refer to.' }
    ],
    realWorldExample: 'A referral system where `referred_by` points to another user\'s ID in the same `users` table.',
    commonMistakes: [
      { error: 'Forgetting table aliases.', code: 'FROM employees JOIN employees', suffix: 'This is invalid. You must alias them (e.g., e1, e2) to distinguish them.' }
    ],
    bestPractices: ['Always use very clear aliases like `parent` and `child` or `emp` and `mgr` when doing Self Joins'],
    practiceExercise: {
      task: 'Write a self join on the `pages` table to find the title of a page and the title of its parent page (using `parent_id`).',
      expectedOutput: '+------------+--------------+\n| PageTitle  | ParentTitle  |\n+------------+--------------+',
      solution: 'SELECT child.title AS PageTitle, parent.title AS ParentTitle \nFROM pages child \nLEFT JOIN pages parent \nON child.parent_id = parent.id;'
    },
    quiz: [
      { question: 'What is a Self JOIN?', options: ['Joining a table to a view', 'Joining a table to a foreign key', 'Joining a table to itself', 'An INNER JOIN without an ON clause'], answer: 'Joining a table to itself' },
      { question: 'What is absolutely required when performing a Self JOIN?', options: ['GROUP BY', 'Table Aliases', 'HAVING clause', 'UNION'], answer: 'Table Aliases' },
      { question: 'Which is a common use case for a Self JOIN?', options: ['Adding two numbers', 'Hierarchical data (like Employee-Manager relationships)', 'Joining a database to another database', 'Sorting data'], answer: 'Hierarchical data (like Employee-Manager relationships)' },
      { question: 'Is "SELF JOIN" an actual keyword in MySQL?', options: ['Yes', 'No, you just use standard JOINs on the same table', 'Only in strict mode', 'Yes, but it is deprecated'], answer: 'No, you just use standard JOINs on the same table' },
      { question: 'Can you use a LEFT JOIN when doing a Self JOIN?', options: ['Yes', 'No, only INNER JOIN', 'No, only CROSS JOIN', 'Only if the table has no primary key'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'How do you query hierarchical data (like a category tree or employee-manager structure) in standard SQL?', a: 'By using a Self JOIN. You join the table to itself by linking the foreign key column (e.g., `parent_id`) to the primary key column (`id`) of the same table.' }
    ],
    summary: ['Self JOIN joins a table to itself.', 'Table aliases are mandatory.', 'Great for hierarchies.'],
    references: commonReferences
  },

  'mysql_union': {
    isStructured: true,
    title: '55. UNION',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'The UNION operator is used to combine the result-set of two or more SELECT statements into a single column/table.',
    whyUseIt: 'When you have similar data spread across multiple tables and you want to list it all in one column.',
    syntax: 'SELECT column_name FROM table1\nUNION\nSELECT column_name FROM table2;',
    codeExample: '-- Get a single list of ALL emails (both staff and customers):\nSELECT email FROM customers\nUNION\nSELECT email FROM staff;',
    hasLiveOutput: false,
    expectedOutput: '+-------------------+\n| email             |\n+-------------------+\n| cust1@mail.com    |\n| cust2@mail.com    |\n| staff1@mail.com   |\n+-------------------+',
    explanation: [
      { code: 'UNION', desc: 'Combines results VERTICALLY. (JOINs combine HORIZONTALLY).' },
      { code: 'Automatic DISTINCT', desc: 'UNION automatically removes duplicate rows.' }
    ],
    realWorldExample: 'A global search bar that needs to return matching "Users", "Groups", and "Posts" in one list.',
    commonMistakes: [
      { error: 'Mismatched columns.', code: '', suffix: 'Every SELECT in a UNION must have the EXACT SAME number of columns, in the same order, with similar data types.' }
    ],
    bestPractices: ['Use UNION ALL if you want to keep duplicates (it is also much faster than standard UNION)'],
    practiceExercise: {
      task: 'Combine the `name` column from the `active_users` table and the `banned_users` table into one single list.',
      expectedOutput: '+--------+\n| name   |\n+--------+',
      solution: 'SELECT name FROM active_users\nUNION\nSELECT name FROM banned_users;'
    },
    quiz: [
      { question: 'What is the difference between JOIN and UNION?', options: ['JOIN combines columns (horizontally), UNION combines rows (vertically)', 'JOIN combines rows, UNION combines columns', 'They do exactly the same thing', 'UNION is faster than JOIN'], answer: 'JOIN combines columns (horizontally), UNION combines rows (vertically)' },
      { question: 'Does UNION remove duplicate rows?', options: ['No', 'Yes, automatically', 'Only if you add DISTINCT', 'Only on strings'], answer: 'Yes, automatically' },
      { question: 'What is required of the SELECT statements being combined by UNION?', options: ['They must select from the same table', 'They must have the same number of columns with similar data types', 'They must use the WHERE clause', 'They must return the same number of rows'], answer: 'They must have the same number of columns with similar data types' },
      { question: 'Which operator combines result sets AND keeps duplicates?', options: ['UNION DISTINCT', 'UNION DUPLICATES', 'UNION ALL', 'JOIN ALL'], answer: 'UNION ALL' },
      { question: 'Which is faster: UNION or UNION ALL?', options: ['UNION', 'UNION ALL', 'They are the exact same speed', 'Depends on the column names'], answer: 'UNION ALL' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between UNION and UNION ALL?', a: 'UNION combines result sets and performs a distinct operation to remove duplicates, which requires extra processing (sorting). UNION ALL simply appends the result sets together, keeping duplicates, making it significantly faster.' }
    ],
    summary: ['UNION stacks result sets vertically.', 'Must have same number of columns.', 'Removes duplicates by default.'],
    references: commonReferences
  },

  'mysql_group_concat': {
    isStructured: true,
    title: '56. GROUP_CONCAT',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'GROUP_CONCAT is an aggregate function that concatenates data from multiple rows into one single string field.',
    whyUseIt: 'To collapse a one-to-many relationship into a single row for display (e.g., User -> "Skill A, Skill B").',
    syntax: 'SELECT col, GROUP_CONCAT(related_col SEPARATOR \', \') FROM table GROUP BY col;',
    codeExample: '-- Show each student and a comma-separated list of their classes:\nSELECT student_name, GROUP_CONCAT(class_name SEPARATOR \', \') AS Classes\nFROM enrollments\nGROUP BY student_name;',
    hasLiveOutput: false,
    expectedOutput: '+--------------+-------------------------+\n| student_name | Classes                 |\n+--------------+-------------------------+\n| Alice        | Math, Science, History  |\n| Bob          | English, Math           |\n+--------------+-------------------------+',
    explanation: [
      { code: 'GROUP_CONCAT()', desc: 'Acts like SUM(), but instead of adding numbers, it glues strings together.' },
      { code: 'SEPARATOR', desc: 'Defines what goes between the items (default is a comma without space).' }
    ],
    realWorldExample: 'Tagging systems (e.g., Blog Post Title | Tags: "Tech, AI, Database").',
    commonMistakes: [
      { error: 'Hitting the length limit.', code: '', suffix: 'GROUP_CONCAT has a default max length of 1024 characters. Anything longer gets silently truncated.' }
    ],
    bestPractices: ['Increase group_concat_max_len in your MySQL config if you expect long strings', 'You can use ORDER BY inside the GROUP_CONCAT parenthesis!'],
    practiceExercise: {
      task: 'Write a query to group `departments` and show a comma-separated list of `employee_name`s in each department.',
      expectedOutput: '+------------+--------------------------+\n| department | GROUP_CONCAT(...)        |\n+------------+--------------------------+',
      solution: 'SELECT department, GROUP_CONCAT(employee_name SEPARATOR \', \') FROM employees GROUP BY department;'
    },
    quiz: [
      { question: 'What does GROUP_CONCAT do?', options: ['Adds strings from the same row', 'Glues string values from multiple rows into a single string per group', 'Counts strings', 'Removes duplicate strings'], answer: 'Glues string values from multiple rows into a single string per group' },
      { question: 'Is GROUP_CONCAT an aggregate function?', options: ['Yes, it must be used with GROUP BY', 'No, it works on individual rows', 'Only when used with integers', 'No, it is a DDL command'], answer: 'Yes, it must be used with GROUP BY' },
      { question: 'What is the default separator if you do not specify one?', options: ['Space', 'Pipe |', 'Comma (without space)', 'Tab'], answer: 'Comma (without space)' },
      { question: 'Can you sort the items INSIDE the concatenated string?', options: ['Yes, by adding ORDER BY inside the GROUP_CONCAT function', 'No, they appear randomly', 'Yes, by sorting the main query', 'Only on numeric data'], answer: 'Yes, by adding ORDER BY inside the GROUP_CONCAT function' },
      { question: 'What happens if the concatenated string is extremely long?', options: ['It wraps to a new line', 'It causes an error', 'It is silently truncated based on group_concat_max_len', 'It compresses the data'], answer: 'It is silently truncated based on group_concat_max_len' }
    ],
    interviewQuestions: [
      { q: 'What is a common gotcha with MySQL\'s GROUP_CONCAT function?', a: 'The default `group_concat_max_len` is typically set to 1024 bytes. If your concatenated string exceeds this limit, MySQL silently truncates it, which can lead to data loss in your application.' }
    ],
    summary: ['GROUP_CONCAT collapses multiple rows into one string.', 'Requires GROUP BY.', 'Beware the 1024 char limit.'],
    references: commonReferences
  },

  'mysql_exists': {
    isStructured: true,
    title: '57. EXISTS Operator',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'The EXISTS operator is used to test for the existence of any record in a subquery.',
    whyUseIt: 'It is often much faster than using IN, because EXISTS stops searching as soon as it finds the first match.',
    syntax: 'SELECT col FROM t1 WHERE EXISTS (SELECT col FROM t2 WHERE t1.id = t2.id);',
    codeExample: '-- Find suppliers who provide at least one product that costs more than 20:\nSELECT supplier_name \nFROM suppliers \nWHERE EXISTS (\n  SELECT product_name \n  FROM products \n  WHERE products.supplier_id = suppliers.id \n  AND price > 20\n);',
    hasLiveOutput: false,
    expectedOutput: '+---------------+\n| supplier_name |\n+---------------+\n| TechCorp      |\n| Apple         |\n+---------------+',
    explanation: [
      { code: 'EXISTS', desc: 'Returns TRUE if the subquery returns one or more records.' },
      { code: 'Subquery link', desc: 'Notice how the subquery references the outer query (suppliers.id).' }
    ],
    realWorldExample: 'Sending a promotional email to users only if they have items sitting in their cart.',
    commonMistakes: [
      { error: 'Using SELECT * inside EXISTS.', code: '', suffix: 'It\'s fine, EXISTS ignores the SELECT list and only checks if a row is returned, but SELECT 1 is often considered cleaner.' }
    ],
    bestPractices: ['Use EXISTS instead of IN for large datasets to improve query performance'],
    practiceExercise: {
      task: 'Write a query to find `users` who have an entry in the `banned_list` table.',
      expectedOutput: '+-------+\n| name  |\n+-------+',
      solution: 'SELECT name FROM users WHERE EXISTS (SELECT 1 FROM banned_list WHERE banned_list.user_id = users.id);'
    },
    quiz: [
      { question: 'What does the EXISTS operator return?', options: ['A table', 'A string', 'A boolean (True or False)', 'A number'], answer: 'A boolean (True or False)' },
      { question: 'Why is EXISTS often faster than IN?', options: ['It uses multi-threading', 'It stops searching as soon as it finds the first match (short-circuit)', 'It compresses data', 'It skips indexes'], answer: 'It stops searching as soon as it finds the first match (short-circuit)' },
      { question: 'What does the SELECT clause inside the EXISTS subquery actually do?', options: ['It returns data to the main query', 'It does nothing, EXISTS only checks if rows are found', 'It must return exactly one column', 'It calculates aggregates'], answer: 'It does nothing, EXISTS only checks if rows are found' },
      { question: 'How do you check if a record does NOT exist?', options: ['EXISTS NOT', 'NOT IN EXISTS', 'NOT EXISTS', 'NONE EXISTS'], answer: 'NOT EXISTS' },
      { question: 'Does EXISTS evaluate NULL values?', options: ['Yes, a row with NULLs still counts as a row existing', 'No, NULLs make EXISTS return false', 'Only on primary keys', 'Only on dates'], answer: 'Yes, a row with NULLs still counts as a row existing' }
    ],
    interviewQuestions: [
      { q: 'What is the performance difference between IN and EXISTS?', a: '`IN` evaluates the subquery once and builds a list in memory, which is fast for small lists. `EXISTS` evaluates the subquery for every row of the outer query, but short-circuits (stops immediately) upon finding a match. Therefore, `EXISTS` is usually much faster for large subqueries.' }
    ],
    summary: ['EXISTS tests if a subquery returns ANY rows.', 'Usually faster than IN for large tables.'],
    references: commonReferences
  },

  'mysql_any_all': {
    isStructured: true,
    title: '58. ANY & ALL',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'ANY and ALL operators allow you to perform a comparison between a single column value and a range of other values generated by a subquery.',
    whyUseIt: 'Allows complex comparisons without writing messy, hard-coded limits.',
    syntax: 'SELECT col FROM t1 WHERE col > ANY (SELECT col FROM t2);',
    codeExample: '-- Find products that are MORE EXPENSIVE than ANY product in Category 2:\nSELECT product_name, price FROM products \nWHERE price > ANY (SELECT price FROM products WHERE category = 2);\n-- (Translation: "Is it more expensive than the cheapest item in Cat 2?")\n\n-- Find products MORE EXPENSIVE than ALL products in Category 2:\nSELECT product_name, price FROM products \nWHERE price > ALL (SELECT price FROM products WHERE category = 2);\n-- (Translation: "Is it more expensive than the MOST expensive item in Cat 2?")',
    hasLiveOutput: false,
    expectedOutput: '+---------+-------+\n| name    | price |\n+---------+-------+\n| MacBook | 2000  |\n+---------+-------+',
    explanation: [
      { code: 'ANY', desc: 'Condition is true if it matches ANY ONE of the subquery values.' },
      { code: 'ALL', desc: 'Condition is true only if it matches EVERY SINGLE subquery value.' }
    ],
    realWorldExample: 'Finding salespeople who sold more than ALL the salespeople in a rival branch.',
    commonMistakes: [
      { error: 'Using ANY without a comparison operator.', code: 'WHERE price ANY', suffix: 'You must use >, <, =, etc., before ANY.' }
    ],
    bestPractices: ['Often, using MIN() or MAX() in a subquery is easier for humans to read than ANY/ALL (e.g., > (SELECT MAX(...)))'],
    practiceExercise: {
      task: 'Write a query to find `employees` whose `salary` is equal to ANY `salary` in the `management` table.',
      expectedOutput: '+------+\n| name |\n+------+',
      solution: 'SELECT name FROM employees WHERE salary = ANY (SELECT salary FROM management);'
    },
    quiz: [
      { question: 'What does > ANY mean?', options: ['Greater than the maximum value', 'Greater than the minimum value', 'Greater than all values', 'Equal to any value'], answer: 'Greater than the minimum value' },
      { question: 'What does > ALL mean?', options: ['Greater than the maximum value', 'Greater than the minimum value', 'Greater than zero', 'Equal to all values'], answer: 'Greater than the maximum value' },
      { question: 'Which operator MUST precede ANY or ALL?', options: ['A boolean', 'A comparison operator (=, >, <, etc.)', 'A string', 'An aggregate function'], answer: 'A comparison operator (=, >, <, etc.)' },
      { question: 'What is `= ANY` equivalent to?', options: ['LIKE', 'IN', 'EXISTS', 'NOT IN'], answer: 'IN' },
      { question: 'What happens if the subquery for ALL returns zero rows?', options: ['The condition evaluates to TRUE', 'The condition evaluates to FALSE', 'Error', 'NULL'], answer: 'The condition evaluates to TRUE' }
    ],
    interviewQuestions: [
      { q: 'Is there a difference between `IN` and `= ANY`?', a: 'No, they are logically and functionally identical in SQL.' }
    ],
    summary: ['ANY: True if condition is met for at least one subquery row.', 'ALL: True if condition is met for EVERY subquery row.'],
    references: commonReferences
  },

  'mysql_insert_select': {
    isStructured: true,
    title: '59. INSERT INTO SELECT',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The INSERT INTO SELECT statement copies data from one table and inserts it into another table.',
    whyUseIt: 'Perfect for archiving old data, creating backups, or migrating data from a temp table.',
    syntax: 'INSERT INTO table2 (col1, col2) SELECT col1, col2 FROM table1;',
    codeExample: '-- Archive users who haven\'t logged in for a year:\nINSERT INTO archived_users (id, name, email) \nSELECT id, name, email \nFROM users \nWHERE last_login < \'2022-01-01\';\n\n-- After copying, you can safely DELETE them from the main table.',
    hasLiveOutput: false,
    expectedOutput: 'Query OK, 45 rows affected (0.05 sec)\nRecords: 45  Duplicates: 0  Warnings: 0',
    explanation: [
      { code: 'INSERT INTO ... SELECT', desc: 'Executes the SELECT query, and streams the result directly into the INSERT statement.' }
    ],
    realWorldExample: 'Running an overnight script that moves completed orders from the `active_orders` table to the `historical_orders` table.',
    commonMistakes: [
      { error: 'Column mismatch.', code: '', suffix: 'The columns returned by the SELECT must exactly match the data types and order of the columns specified in the INSERT.' }
    ],
    bestPractices: ['Wrap the INSERT and the subsequent DELETE in a Transaction to prevent data loss if a crash occurs'],
    practiceExercise: {
      task: 'Copy all `product_name` and `price` from `products` into a new table `price_history`.',
      expectedOutput: 'Query OK, X rows affected.',
      solution: 'INSERT INTO price_history (product_name, price) SELECT product_name, price FROM products;'
    },
    quiz: [
      { question: 'What does INSERT INTO SELECT do?', options: ['Inserts data and displays it on screen', 'Copies data from one table and inserts it into another', 'Selects data into memory', 'Creates a new table'], answer: 'Copies data from one table and inserts it into another' },
      { question: 'Does the target table need to exist before running INSERT INTO SELECT?', options: ['Yes', 'No, it creates it automatically', 'Only for temporary tables', 'Depends on the database'], answer: 'Yes' },
      { question: 'Does the SELECT statement have to return the exact same number of columns as specified in the INSERT?', options: ['No', 'Yes, and data types must be compatible', 'Only the first column matters', 'Yes, but data types are ignored'], answer: 'Yes, and data types must be compatible' },
      { question: 'Can you use a WHERE clause in the SELECT part of the statement?', options: ['Yes', 'No', 'Only on Primary Keys', 'Only if the target table is empty'], answer: 'Yes' },
      { question: 'Does INSERT INTO SELECT delete the data from the original table?', options: ['Yes', 'No, it only copies it', 'Yes, but only if you add DISTINCT', 'Only on Linux'], answer: 'No, it only copies it' }
    ],
    interviewQuestions: [
      { q: 'How would you duplicate a table\'s structure and its data into a new table in one step?', a: 'You can use `CREATE TABLE new_table AS SELECT * FROM old_table;`. Note that this copies the data and column definitions, but does NOT copy indexes or Primary Key constraints.' }
    ],
    summary: ['INSERT INTO SELECT copies data between tables.', 'Great for archiving.'],
    references: commonReferences
  },

  'mysql_case': {
    isStructured: true,
    title: '60. CASE Statement',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'The CASE statement goes through conditions and returns a value when the first condition is met (like an IF-THEN-ELSE statement).',
    whyUseIt: 'To create custom columns on the fly, map status codes to readable text, or categorize data without changing the database schema.',
    syntax: 'CASE \n  WHEN condition1 THEN result1\n  WHEN condition2 THEN result2\n  ELSE result3 \nEND;',
    codeExample: '-- Categorize users based on their score:\nSELECT name, score,\n  CASE\n    WHEN score > 90 THEN \'Expert\'\n    WHEN score > 50 THEN \'Intermediate\'\n    ELSE \'Beginner\'\n  END AS Level\nFROM players;',
    hasLiveOutput: false,
    expectedOutput: '+-------+-------+--------------+\n| name  | score | Level        |\n+-------+-------+--------------+\n| Alice |    95 | Expert       |\n| Bob   |    60 | Intermediate |\n| Carol |    10 | Beginner     |\n+-------+-------+--------------+',
    explanation: [
      { code: 'WHEN ... THEN', desc: 'Evaluated in order. The first one that is true wins.' },
      { code: 'ELSE', desc: 'The fallback if nothing matches. (Defaults to NULL if omitted).' },
      { code: 'END', desc: 'Mandatory closing keyword.' }
    ],
    realWorldExample: 'Converting a boolean `is_active` (1/0) into text ("Active" / "Inactive") for a report.',
    commonMistakes: [
      { error: 'Forgetting the END keyword.', code: '', suffix: 'This results in a syntax error.' }
    ],
    bestPractices: ['Always provide an ELSE clause to prevent unexpected NULL values'],
    practiceExercise: {
      task: 'Write a query that selects `price`. Add a CASE statement aliased as `Budget` that outputs "Cheap" if price < 20, else "Expensive".',
      expectedOutput: '+-------+-----------+\n| price | Budget    |\n+-------+-----------+',
      solution: 'SELECT price, CASE WHEN price < 20 THEN \'Cheap\' ELSE \'Expensive\' END AS Budget FROM items;'
    },
    quiz: [
      { question: 'What programming concept is the CASE statement most similar to?', options: ['While Loop', 'Try Catch', 'If-Then-Else', 'Object Instantiation'], answer: 'If-Then-Else' },
      { question: 'Which keyword is required to finish a CASE statement?', options: ['STOP', 'FINISH', 'END', 'BREAK'], answer: 'END' },
      { question: 'What happens if no WHEN conditions are true, and there is no ELSE clause?', options: ['Syntax Error', 'Returns FALSE', 'Returns NULL', 'Loops infinitely'], answer: 'Returns NULL' },
      { question: 'Can you use aggregate functions like SUM() inside a CASE statement?', options: ['Yes', 'No', 'Only with COUNT', 'Only in SQL Server'], answer: 'Yes' },
      { question: 'In what order are WHEN conditions evaluated?', options: ['Randomly', 'Bottom to Top', 'Top to Bottom (Sequential)', 'Alphabetically'], answer: 'Top to Bottom (Sequential)' }
    ],
    interviewQuestions: [
      { q: 'How can you use CASE to create a Pivot Table in MySQL?', a: 'You can combine aggregate functions with CASE. For example: `SUM(CASE WHEN month="Jan" THEN revenue ELSE 0 END) AS Jan_Rev` allows you to turn row data (months) into column headers.' }
    ],
    summary: ['CASE is SQL\'s If-Else.', 'Evaluates top to bottom.', 'Must close with END.'],
    references: commonReferences
  },

  'mysql_ifnull': {
    isStructured: true,
    title: '61. IFNULL() & COALESCE()',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'These functions let you return an alternative value if an expression is NULL.',
    whyUseIt: 'NULL values in math result in NULL, and NULL values in the UI look broken. These functions provide a clean fallback (default) value.',
    syntax: '-- MySQL specific:\nSELECT IFNULL(column_name, \'Fallback_Value\');\n\n-- Standard SQL (Better):\nSELECT COALESCE(col1, col2, \'Fallback\');',
    codeExample: '-- If a product has no discount, treat it as 0:\nSELECT name, price, IFNULL(discount, 0) AS Discount FROM products;\n\n-- COALESCE checks multiple columns and returns the first non-null:\n-- If phone is null, try mobile. If mobile is null, return "N/A":\nSELECT name, COALESCE(phone, mobile, \'N/A\') AS Contact FROM users;',
    hasLiveOutput: false,
    expectedOutput: '+-------+------------+\n| name  | Contact    |\n+-------+------------+\n| Alice | 555-1234   |\n| Bob   | N/A        |\n+-------+------------+',
    explanation: [
      { code: 'IFNULL(val, default)', desc: 'Only takes 2 arguments.' },
      { code: 'COALESCE(v1, v2, v3)', desc: 'Takes unlimited arguments. Standard across all databases.' }
    ],
    realWorldExample: 'Displaying "Unknown User" instead of a blank space if a user deleted their account but left comments.',
    commonMistakes: [
      { error: 'Thinking they check for empty strings.', code: '', suffix: 'IFNULL(\'\', \'Fallback\') returns \'\', not \'Fallback\'. They only check for actual NULLs.' }
    ],
    bestPractices: ['Prefer COALESCE over IFNULL because COALESCE is standard ANSI SQL and works on PostgreSQL, SQL Server, etc.'],
    practiceExercise: {
      task: 'Write a query that selects `title` and `description`. If `description` is NULL, output the word "No Description".',
      expectedOutput: '+-------+----------------+\n| title | description    |\n+-------+----------------+',
      solution: 'SELECT title, COALESCE(description, \'No Description\') FROM posts;'
    },
    quiz: [
      { question: 'What does IFNULL(column, "Zero") do?', options: ['Sets the column to NULL', 'Replaces NULL values with "Zero" in the output', 'Deletes NULL rows', 'Returns an error'], answer: 'Replaces NULL values with "Zero" in the output' },
      { question: 'What is the main advantage of COALESCE over IFNULL?', options: ['It is faster', 'It handles empty strings', 'It can take more than two arguments and is standard SQL', 'It can update the database'], answer: 'It can take more than two arguments and is standard SQL' },
      { question: 'What does COALESCE(NULL, NULL, 5, NULL) return?', options: ['NULL', '0', '5', 'Error'], answer: '5' },
      { question: 'If a column contains an empty string "", what does IFNULL(col, "Fallback") return?', options: ['"Fallback"', 'NULL', '"" (the empty string)', '0'], answer: '"" (the empty string)' },
      { question: 'Is IFNULL available in SQL Server?', options: ['Yes', 'No, SQL Server uses ISNULL', 'Yes, but it is deprecated', 'Yes, under a different name'], answer: 'No, SQL Server uses ISNULL' }
    ],
    interviewQuestions: [
      { q: 'Explain the difference between IFNULL() and COALESCE().', a: '`IFNULL()` takes exactly two arguments and is specific to MySQL. `COALESCE()` is standard ANSI SQL, takes a comma-separated list of arguments, and returns the first non-null value from that list.' }
    ],
    summary: ['IFNULL provides a fallback for a single NULL.', 'COALESCE returns the first non-null from a list.', 'COALESCE is preferred.'],
    references: commonReferences
  },

  'mysql_comments': {
    isStructured: true,
    title: '62. Comments',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Comments are text in SQL scripts that are ignored by the MySQL engine.',
    whyUseIt: 'To explain complex logic to other developers, or to temporarily disable a query while debugging.',
    syntax: '-- Single line comment\n# Another single line comment\n/* Multi-line comment */',
    codeExample: '-- Select active users only\nSELECT * FROM users \nWHERE status = \'Active\'; /* Don\'t include banned users */\n\n/*\nSELECT * FROM test_table;\nDROP TABLE test_table;\n*/',
    hasLiveOutput: false,
    expectedOutput: 'Query OK',
    explanation: [
      { code: '--', desc: 'Must have a space after the double dash.' },
      { code: '/*', desc: 'Starts a block comment.' },
      { code: '*/', desc: 'Ends a block comment.' }
    ],
    realWorldExample: 'Adding a comment block to the top of a stored procedure to document who wrote it and what it does.',
    commonMistakes: [
      { error: 'Forgetting the space after --', code: '--Comment', suffix: 'MySQL requires a whitespace character after the double dash.' }
    ],
    bestPractices: ['Use comments to explain WHY a complex query is written a certain way, not just WHAT it is doing'],
    practiceExercise: {
      task: 'Write a simple SELECT query on `users` and place a multi-line comment above it.',
      expectedOutput: 'Query OK',
      solution: '/* \n This gets users\n*/\nSELECT * FROM users;'
    },
    quiz: [
      { question: 'Which of the following is a valid single-line comment in MySQL?', options: ['// comment', '-- comment', '<!-- comment -->', '; comment'], answer: '-- comment' },
      { question: 'What is required immediately after the double dash (--) for it to be recognized as a comment in MySQL?', options: ['A semicolon', 'A space', 'A letter', 'A number'], answer: 'A space' },
      { question: 'Which symbol is also accepted as a single-line comment in MySQL (like Python)?', options: ['#', '$', '@', '&'], answer: '#' },
      { question: 'How do you create a multi-line comment?', options: ['// ... //', '/* ... */', '<# ... #>', '-- ... --'], answer: '/* ... */' },
      { question: 'Does the MySQL engine execute code inside comments?', options: ['Yes, but silently', 'No, it completely ignores it', 'Only if it is valid SQL', 'Only in strict mode'], answer: 'No, it completely ignores it' }
    ],
    interviewQuestions: [
      { q: 'Why is it important to include a space after the `--` in MySQL comments?', a: 'Because without a space, `--` could be interpreted as part of an equation (e.g., `id = 5--1` meaning `5 minus negative 1`). The space tells the parser it is definitively a comment.' }
    ],
    summary: ['-- and # for single lines.', '/* */ for multiple lines.', 'Ignored by the database.'],
    references: commonReferences
  }
};
