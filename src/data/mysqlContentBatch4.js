const commonReferences = [
  { label: 'W3Schools MySQL', url: 'https://www.w3schools.com/mysql/' },
  { label: 'MySQL Official Docs', url: 'https://dev.mysql.com/doc/refman/8.0/en/' }
];

export const mysqlContentBatch4 = {
  'mysql_joins_intro': {
    isStructured: true,
    title: '49. Introduction to Joins',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'A JOIN clause is used to combine rows from two or more tables, based on a related column between them.',
    whyUseIt: 'Relational databases store data in separate tables. JOINs allow you to reconstruct the data logically across these tables.',
    syntax: 'SELECT columns FROM table1 JOIN table2 ON table1.col = table2.col;',
    codeExample: '-- We have Users table and Orders table\n-- We want to see User Names with their Order Totals\nSELECT Users.name, Orders.total\nFROM Users\nJOIN Orders ON Users.id = Orders.user_id;',
    hasLiveOutput: false,
    expectedOutput: '+-------+-------+\n| name  | total |\n+-------+-------+\n| Alice | 50.00 |\n| Bob   | 75.50 |\n+-------+-------+',
    explanation: [
      { code: 'JOIN', desc: 'Combines the tables.' },
      { code: 'ON', desc: 'The condition that defines how the tables are related (usually Primary Key = Foreign Key).' }
    ],
    realWorldExample: 'An E-commerce site showing a user\'s order history by joining the Users and Orders tables.',
    commonMistakes: [
      { error: 'Ambiguous column names', code: '', suffix: 'If both tables have an `id` column, you must specify `Users.id` or `Orders.id`.' }
    ],
    bestPractices: ['Always use table aliases (e.g., `FROM Users u JOIN Orders o`) for readability.'],
    practiceExercise: {
      task: 'Combine `employees` and `departments` on `dept_id`.',
      expectedOutput: 'Query OK',
      solution: 'SELECT e.name, d.dept_name FROM employees e JOIN departments d ON e.dept_id = d.id;'
    },
    quiz: [
      { question: 'What is a JOIN?', options: ['A function to delete data', 'A clause to combine rows from multiple tables', 'An aggregate function', 'A constraint'], answer: 'A clause to combine rows from multiple tables' },
      { question: 'Which keyword specifies the matching relationship?', options: ['MATCH', 'WHERE', 'ON', 'LINK'], answer: 'ON' },
      { question: 'What happens if you omit the ON clause?', options: ['Syntax error', 'Cartesian Product (CROSS JOIN)', 'Nothing', 'Deletes tables'], answer: 'Syntax error' },
      { question: 'Why do we need JOINs?', options: ['Because data is normalized into separate tables', 'To encrypt data', 'To compress the database', 'To add dates'], answer: 'Because data is normalized into separate tables' },
      { question: 'What error occurs if you select a column name that exists in both tables without a table prefix?', options: ['Ambiguous column name', 'Duplicate column', 'Syntax error', 'Data truncation'], answer: 'Ambiguous column name' }
    ],
    interviewQuestions: [
      { q: 'What are the main types of JOINs in MySQL?', a: 'INNER JOIN, LEFT (OUTER) JOIN, RIGHT (OUTER) JOIN, CROSS JOIN, and SELF JOIN. Note: MySQL does not have a built-in FULL OUTER JOIN.' }
    ],
    summary: ['JOINs combine tables.', 'Use the ON keyword to link them.'],
    references: commonReferences
  },

  'mysql_inner_join': {
    isStructured: true,
    title: '50. INNER JOIN',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'INNER JOIN selects records that have matching values in BOTH tables.',
    whyUseIt: 'To filter out unmatched records. If a user has no orders, they will NOT appear in the results.',
    syntax: 'SELECT cols FROM t1 INNER JOIN t2 ON t1.id = t2.id;',
    codeExample: 'SELECT Students.name, Courses.course_name\nFROM Students\nINNER JOIN Courses ON Students.course_id = Courses.id;',
    hasLiveOutput: false,
    expectedOutput: 'Only students who are enrolled in a course are shown.',
    explanation: [
      { code: 'INNER JOIN', desc: 'Returns the intersection of both tables.' }
    ],
    realWorldExample: 'Finding only the customers who have actually made a purchase.',
    commonMistakes: [
      { error: 'Assuming it includes unmatched rows', code: '', suffix: 'INNER JOIN strictly drops rows that don\'t have a match on both sides.' }
    ],
    bestPractices: ['If you just write `JOIN`, MySQL defaults to `INNER JOIN`. Being explicit is better for readability.'],
    practiceExercise: {
      task: 'Select all users who have an active subscription.',
      expectedOutput: 'Query OK',
      solution: 'SELECT u.name FROM Users u INNER JOIN Subscriptions s ON u.id = s.user_id;'
    },
    quiz: [
      { question: 'What does INNER JOIN return?', options: ['All rows from left table', 'All rows from right table', 'Only rows with matches in BOTH tables', 'All rows from both tables'], answer: 'Only rows with matches in BOTH tables' },
      { question: 'If you write `JOIN` instead of `INNER JOIN`, what does MySQL do?', options: ['Throws an error', 'Defaults to LEFT JOIN', 'Defaults to INNER JOIN', 'Defaults to CROSS JOIN'], answer: 'Defaults to INNER JOIN' },
      { question: 'If User A has no orders, will they appear in an INNER JOIN with Orders?', options: ['Yes', 'No', 'Yes, with NULLs', 'Sometimes'], answer: 'No' },
      { question: 'What is the visual representation of INNER JOIN?', options: ['Intersection of two circles (Venn Diagram)', 'Left circle only', 'Both circles entirely', 'Right circle only'], answer: 'Intersection of two circles (Venn Diagram)' },
      { question: 'Can you chain multiple INNER JOINS?', options: ['Yes', 'No', 'Only two maximum', 'Only in Oracle'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'How does INNER JOIN differ from LEFT JOIN?', a: 'INNER JOIN requires a match in both tables. LEFT JOIN returns all rows from the left table, even if there is no match in the right table (filling with NULLs).' }
    ],
    summary: ['Returns only matching rows.', 'Default type of JOIN.'],
    references: commonReferences
  },

  'mysql_left_join': {
    isStructured: true,
    title: '51. LEFT JOIN',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'LEFT JOIN returns ALL records from the left table (table1), and the matched records from the right table (table2). Unmatched records on the right side will be NULL.',
    whyUseIt: 'To find all primary records, regardless of whether they have related secondary data.',
    syntax: 'SELECT cols FROM t1 LEFT JOIN t2 ON t1.id = t2.id;',
    codeExample: 'SELECT Users.name, Orders.total\nFROM Users\nLEFT JOIN Orders ON Users.id = Orders.user_id;',
    hasLiveOutput: false,
    expectedOutput: '+-------+-------+\n| name  | total |\n+-------+-------+\n| Alice | 50.00 |\n| Bob   | NULL  | (Bob has no orders)\n+-------+-------+',
    explanation: [
      { code: 'LEFT JOIN', desc: 'Keeps the left side intact, brings in right side data if it exists.' }
    ],
    realWorldExample: 'Listing all registered users and their purchases. You want to see users even if they haven\'t bought anything yet.',
    commonMistakes: [
      { error: 'Putting WHERE conditions on the right table', code: '', suffix: 'If you put a WHERE clause on a column from the right table, it effectively turns your LEFT JOIN into an INNER JOIN because NULL fails the condition.' }
    ],
    bestPractices: ['Use LEFT JOIN to find "orphaned" records (e.g., Users LEFT JOIN Orders WHERE Orders.id IS NULL).'],
    practiceExercise: {
      task: 'List all departments and any employees in them (even empty departments).',
      expectedOutput: 'Query OK',
      solution: 'SELECT d.name, e.name FROM Departments d LEFT JOIN Employees e ON d.id = e.dept_id;'
    },
    quiz: [
      { question: 'What does LEFT JOIN return?', options: ['Only matches', 'All left rows + matched right rows', 'All right rows + matched left rows', 'Everything'], answer: 'All left rows + matched right rows' },
      { question: 'What value is given to right table columns when there is no match?', options: ['0', '"" (empty string)', 'NULL', 'Error'], answer: 'NULL' },
      { question: 'How do you find left table rows that have NO match in the right table?', options: ['INNER JOIN', 'LEFT JOIN ... WHERE right.id IS NOT NULL', 'LEFT JOIN ... WHERE right.id IS NULL', 'RIGHT JOIN'], answer: 'LEFT JOIN ... WHERE right.id IS NULL' },
      { question: 'Which table is the "Left" table?', options: ['The one with more rows', 'The one before the JOIN keyword', 'The one after the JOIN keyword', 'The one with the Primary Key'], answer: 'The one before the JOIN keyword' },
      { question: 'Are LEFT JOIN and LEFT OUTER JOIN the same?', options: ['Yes', 'No', 'Outer join includes more data', 'MySQL only supports LEFT OUTER'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'How do you find users who have never placed an order?', a: 'SELECT u.* FROM Users u LEFT JOIN Orders o ON u.id = o.user_id WHERE o.id IS NULL;' }
    ],
    summary: ['Returns ALL left rows.', 'Unmatched right rows are NULL.'],
    references: commonReferences
  },

  'mysql_right_join': {
    isStructured: true,
    title: '52. RIGHT JOIN',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'RIGHT JOIN returns ALL records from the right table, and the matched records from the left table. (The exact opposite of LEFT JOIN).',
    whyUseIt: 'Rarely used, as most developers prefer to just swap the table order and use a LEFT JOIN.',
    syntax: 'SELECT cols FROM t1 RIGHT JOIN t2 ON t1.id = t2.id;',
    codeExample: 'SELECT Orders.total, Users.name\nFROM Orders\nRIGHT JOIN Users ON Orders.user_id = Users.id;',
    hasLiveOutput: false,
    expectedOutput: 'Same result as Users LEFT JOIN Orders.',
    explanation: [
      { code: 'RIGHT JOIN', desc: 'Keeps the right side intact.' }
    ],
    realWorldExample: 'Finding all users, and bringing in their orders, but you wrote the Orders table first in your query.',
    commonMistakes: [
      { error: 'Mixing LEFT and RIGHT joins in one query', code: '', suffix: 'It becomes extremely difficult to read. Stick to LEFT JOINs.' }
    ],
    bestPractices: ['Avoid RIGHT JOIN. Just flip the tables and use a LEFT JOIN for better readability.'],
    practiceExercise: {
      task: 'Rewrite `A RIGHT JOIN B` using a LEFT JOIN.',
      expectedOutput: 'Query OK',
      solution: 'B LEFT JOIN A'
    },
    quiz: [
      { question: 'What does RIGHT JOIN return?', options: ['Only matches', 'All left rows + matched right rows', 'All right rows + matched left rows', 'Everything'], answer: 'All right rows + matched left rows' },
      { question: 'Why is RIGHT JOIN rarely used?', options: ['It is slow', 'It doesn\'t exist', 'Developers prefer swapping table order and using LEFT JOIN', 'It causes errors'], answer: 'Developers prefer swapping table order and using LEFT JOIN' },
      { question: 'Are RIGHT JOIN and RIGHT OUTER JOIN the same?', options: ['Yes', 'No', 'Outer join is slower', 'No such thing as right outer'], answer: 'Yes' },
      { question: 'If `Orders RIGHT JOIN Users` is run, what is the right table?', options: ['Orders', 'Users', 'Both', 'Neither'], answer: 'Users' },
      { question: 'What value is returned for left table columns if there is no match?', options: ['0', 'NULL', 'Blank', '-1'], answer: 'NULL' }
    ],
    interviewQuestions: [
      { q: 'Why is it recommended to stick to LEFT JOINs instead of mixing LEFT and RIGHT?', a: 'Readability. Reading left-to-right makes it easier to mentally model the flow of data through the joins. Mixing them requires mental gymnastics to figure out which table is preserving data.' }
    ],
    summary: ['Returns ALL right rows.', 'Mostly replaced by LEFT JOIN in practice.'],
    references: commonReferences
  },

  'mysql_full_join': {
    isStructured: true,
    title: '53. FULL JOIN (Concept)',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A FULL OUTER JOIN returns all records when there is a match in either left or right table records.',
    whyUseIt: 'To see EVERYTHING from both tables, matching them up where possible, and leaving NULLs where they don\'t match.',
    syntax: '-- MySQL does NOT support FULL OUTER JOIN natively!',
    codeExample: '-- To simulate it in MySQL, use UNION:\nSELECT * FROM t1 LEFT JOIN t2 ON t1.id = t2.id\nUNION\nSELECT * FROM t1 RIGHT JOIN t2 ON t1.id = t2.id;',
    hasLiveOutput: false,
    expectedOutput: 'All rows from both tables.',
    explanation: [
      { code: 'UNION', desc: 'Combines the results of a LEFT JOIN and a RIGHT JOIN, removing duplicates, to emulate a FULL JOIN.' }
    ],
    realWorldExample: 'Reconciling two lists (e.g., HR employee list vs Payroll employee list) to find who is missing from either system.',
    commonMistakes: [
      { error: 'Using FULL OUTER JOIN keyword', code: '', suffix: 'It will throw a syntax error in MySQL (though it works in Postgres/SQL Server).' }
    ],
    bestPractices: ['Use LEFT JOIN + UNION + RIGHT JOIN in MySQL.'],
    practiceExercise: {
      task: 'How do you perform a FULL JOIN in MySQL?',
      expectedOutput: 'Use UNION.',
      solution: 'LEFT JOIN ... UNION ... RIGHT JOIN'
    },
    quiz: [
      { question: 'Does MySQL natively support FULL OUTER JOIN?', options: ['Yes', 'No', 'Only in MySQL 8', 'Only with plugins'], answer: 'No' },
      { question: 'How do you emulate a FULL JOIN in MySQL?', options: ['CROSS JOIN', 'LEFT JOIN UNION RIGHT JOIN', 'INNER JOIN', 'SELF JOIN'], answer: 'LEFT JOIN UNION RIGHT JOIN' },
      { question: 'What does a FULL JOIN return?', options: ['Only matches', 'Everything from both tables, with NULLs for missing matches', 'Cartesian product', 'Only mismatches'], answer: 'Everything from both tables, with NULLs for missing matches' },
      { question: 'Does PostgreSQL support FULL OUTER JOIN?', options: ['Yes', 'No', 'Only on enterprise', 'Only on windows'], answer: 'Yes' },
      { question: 'What does the UNION keyword do in this context?', options: ['Adds the numbers', 'Combines two result sets and removes duplicates', 'Deletes tables', 'Creates an index'], answer: 'Combines two result sets and removes duplicates' }
    ],
    interviewQuestions: [
      { q: 'How would you write a FULL OUTER JOIN query in MySQL?', a: 'You cannot use the FULL OUTER JOIN keyword. You must write a LEFT JOIN, followed by the UNION keyword, followed by a RIGHT JOIN of the same two tables.' }
    ],
    summary: ['MySQL doesn\'t support FULL JOIN natively.', 'Emulate it using UNION.'],
    references: commonReferences
  },

  'mysql_self_join': {
    isStructured: true,
    title: '54. SELF JOIN',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A SELF JOIN is a regular join, but the table is joined with itself.',
    whyUseIt: 'Used to query hierarchical data or compare rows within the same table.',
    syntax: 'SELECT a.col, b.col FROM table1 a, table1 b WHERE condition;',
    codeExample: 'SELECT e1.name AS Employee, e2.name AS Manager\nFROM Employees e1\nLEFT JOIN Employees e2 ON e1.manager_id = e2.id;',
    hasLiveOutput: false,
    expectedOutput: '+----------+---------+\n| Employee | Manager |\n+----------+---------+\n| Alice    | Boss    |',
    explanation: [
      { code: 'e1 and e2', desc: 'You MUST use table aliases to differentiate the two instances of the same table.' }
    ],
    realWorldExample: 'Finding all employees who earn more than their manager (requires joining the Employee table to the Employee table).',
    commonMistakes: [
      { error: 'Forgetting aliases', code: '', suffix: 'MySQL won\'t know which version of the table you are referring to if you don\'t use aliases.' }
    ],
    bestPractices: ['Always use very clear aliases (like `emp` and `mgr`) when doing a self join.'],
    practiceExercise: {
      task: 'Join a table `users` to itself to find users from the same city.',
      expectedOutput: 'Query OK',
      solution: 'SELECT a.name, b.name FROM users a JOIN users b ON a.city = b.city AND a.id != b.id;'
    },
    quiz: [
      { question: 'What is a SELF JOIN?', options: ['Joining a table to itself', 'A fast join', 'A join without ON', 'Joining two identical tables'], answer: 'Joining a table to itself' },
      { question: 'What is absolutely mandatory when performing a SELF JOIN?', options: ['GROUP BY', 'Table Aliases', 'ORDER BY', 'Subqueries'], answer: 'Table Aliases' },
      { question: 'What is a common use case for a SELF JOIN?', options: ['Calculating sums', 'Hierarchical data (Employees and Managers)', 'Deleting rows', 'Creating indexes'], answer: 'Hierarchical data (Employees and Managers)' },
      { question: 'Can a SELF JOIN be a LEFT JOIN?', options: ['Yes', 'No', 'Only in Postgres', 'Only with numbers'], answer: 'Yes' },
      { question: 'In `JOIN table A ON A.id = B.id`, what is wrong?', options: ['Nothing', 'B is not defined as an alias', 'id is missing', 'JOIN is uppercase'], answer: 'B is not defined as an alias' }
    ],
    interviewQuestions: [
      { q: 'How do you find pairs of customers from the same city using a single table?', a: 'By doing a SELF JOIN: `SELECT c1.name, c2.name FROM customers c1 JOIN customers c2 ON c1.city = c2.city AND c1.id < c2.id;` (The id < id check prevents pairing a person with themselves or reversing the pair).' }
    ],
    summary: ['Join a table to itself.', 'Mandatory use of aliases.', 'Great for hierarchy.'],
    references: commonReferences
  },

  'mysql_cross_join': {
    isStructured: true,
    title: '55. CROSS JOIN',
    difficulty: 'Advanced',
    readingTime: '3 min',
    definition: 'A CROSS JOIN returns the Cartesian product of rows from tables in the join. Every row from the first table is paired with every row from the second table.',
    whyUseIt: 'Useful for generating combinations (e.g., all possible shirt sizes with all possible colors).',
    syntax: 'SELECT * FROM t1 CROSS JOIN t2;',
    codeExample: '-- Sizes: [S, M, L]\n-- Colors: [Red, Blue]\nSELECT Sizes.size, Colors.color FROM Sizes CROSS JOIN Colors;\n-- Returns 6 rows (3 * 2)',
    hasLiveOutput: false,
    expectedOutput: 'S-Red, S-Blue, M-Red, M-Blue, L-Red, L-Blue',
    explanation: [
      { code: 'Cartesian Product', desc: 'Number of rows = (Rows in Table 1) × (Rows in Table 2).' }
    ],
    realWorldExample: 'Generating a calendar or a list of all potential product variants.',
    commonMistakes: [
      { error: 'Accidental Cross Joins', code: '', suffix: 'If you forget the ON clause in a regular JOIN, MySQL will perform a CROSS JOIN. On large tables, this will crash your server.' }
    ],
    bestPractices: ['Be extremely careful. A cross join of two 10,000 row tables produces 100,000,000 rows!'],
    practiceExercise: {
      task: 'Combine 3 sizes and 4 colors using CROSS JOIN.',
      expectedOutput: '12 rows generated.',
      solution: 'SELECT * FROM sizes CROSS JOIN colors;'
    },
    quiz: [
      { question: 'What does a CROSS JOIN return?', options: ['Matches only', 'Everything from left', 'Cartesian Product (all combinations)', 'Nothing'], answer: 'Cartesian Product (all combinations)' },
      { question: 'If Table A has 10 rows and Table B has 5 rows, how many rows does a CROSS JOIN return?', options: ['15', '5', '10', '50'], answer: '50' },
      { question: 'Does a CROSS JOIN require an ON clause?', options: ['Yes', 'No', 'Only in strict mode', 'Only if using aliases'], answer: 'No' },
      { question: 'What happens if you omit the ON condition in a standard JOIN in older SQL?', options: ['Error', 'It defaults to a CROSS JOIN', 'Deletes data', 'Returns 0 rows'], answer: 'It defaults to a CROSS JOIN' },
      { question: 'What is a valid use case for a CROSS JOIN?', options: ['Finding user orders', 'Generating all combinations of product variations', 'Updating passwords', 'Deleting users'], answer: 'Generating all combinations of product variations' }
    ],
    interviewQuestions: [
      { q: 'What is a Cartesian Product and what causes it?', a: 'A Cartesian Product occurs when every row of one table is multiplied by every row of another. It is caused intentionally by a CROSS JOIN, or accidentally by omitting the JOIN condition (ON clause).' }
    ],
    summary: ['Returns all combinations.', 'No ON clause needed.', 'Be careful with large tables.'],
    references: commonReferences
  },

  'mysql_primary_key': {
    isStructured: true,
    title: '56. Primary Key',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'A PRIMARY KEY uniquely identifies each record in a table. It must contain UNIQUE values, and cannot contain NULL values.',
    whyUseIt: 'It is the definitive identifier for a row, essential for finding specific records and establishing JOINs.',
    syntax: 'id INT PRIMARY KEY',
    codeExample: 'CREATE TABLE Users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(50)\n);',
    hasLiveOutput: false,
    expectedOutput: 'Query OK',
    explanation: [
      { code: 'PRIMARY KEY', desc: 'The absolute ID of the row.' }
    ],
    realWorldExample: 'Your Social Security Number is a primary key for you in a government database.',
    commonMistakes: [
      { error: 'Not having a primary key', code: '', suffix: 'Every single table should have a Primary Key, without exception.' }
    ],
    bestPractices: ['Use an AUTO_INCREMENT integer or a UUID for primary keys.'],
    practiceExercise: {
      task: 'Create a table `items` with `item_id` as Primary Key.',
      expectedOutput: 'Query OK',
      solution: 'CREATE TABLE items (item_id INT PRIMARY KEY);'
    },
    quiz: [
      { question: 'What is a Primary Key?', options: ['A unique identifier for a row', 'A foreign key', 'A string', 'A default value'], answer: 'A unique identifier for a row' },
      { question: 'Can a Primary Key be NULL?', options: ['Yes', 'No', 'Sometimes', 'Only on creation'], answer: 'No' },
      { question: 'How many Primary Keys can a table have?', options: ['One', 'Two', 'Unlimited', 'None'], answer: 'One' },
      { question: 'What is it usually combined with for integers?', options: ['UNIQUE', 'AUTO_INCREMENT', 'DEFAULT', 'CHECK'], answer: 'AUTO_INCREMENT' },
      { question: 'Does a Primary Key automatically create an Index?', options: ['Yes, a Clustered Index', 'No', 'Only in Oracle', 'Only if strings'], answer: 'Yes, a Clustered Index' }
    ],
    interviewQuestions: [
      { q: 'Can a table have multiple Primary Keys?', a: 'No, a table can only have ONE Primary Key. However, that single Primary Key can be made up of multiple columns (a Composite Primary Key).' }
    ],
    summary: ['Primary Key = UNIQUE + NOT NULL.', 'Every table needs one.'],
    references: commonReferences
  },

  'mysql_foreign_key': {
    isStructured: true,
    title: '57. Foreign Key',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'A FOREIGN KEY is a field in one table that links to the PRIMARY KEY in another table.',
    whyUseIt: 'To enforce referential integrity. It prevents actions that would destroy links between tables (like deleting a user who has orders).',
    syntax: 'FOREIGN KEY (col) REFERENCES other_table(col)',
    codeExample: 'CREATE TABLE Orders (\n  order_id INT PRIMARY KEY,\n  user_id INT,\n  FOREIGN KEY (user_id) REFERENCES Users(id)\n);',
    hasLiveOutput: false,
    expectedOutput: 'Query OK',
    explanation: [
      { code: 'REFERENCES', desc: 'Points to the parent table\'s Primary Key.' }
    ],
    realWorldExample: 'An order must belong to a valid user. The Foreign Key ensures you cannot insert an order for User ID 999 if User 999 does not exist.',
    commonMistakes: [
      { error: 'Data Type mismatch', code: '', suffix: 'The FK must exactly match the data type of the PK it points to (e.g. both must be INT, and both signed or unsigned).' }
    ],
    bestPractices: ['Always use foreign keys to prevent orphaned records.'],
    practiceExercise: {
      task: 'Write a constraint linking `dept_id` to `departments(id)`.',
      expectedOutput: 'Query OK',
      solution: 'FOREIGN KEY (dept_id) REFERENCES departments(id)'
    },
    quiz: [
      { question: 'What does a Foreign Key do?', options: ['Encrypts data', 'Links tables together and enforces integrity', 'Generates IDs', 'Deletes data'], answer: 'Links tables together and enforces integrity' },
      { question: 'What does it usually point to?', options: ['Another Foreign Key', 'A Primary Key in another table', 'A text field', 'A boolean'], answer: 'A Primary Key in another table' },
      { question: 'Can a table have multiple Foreign Keys?', options: ['Yes', 'No', 'Only two', 'Only if they are INT'], answer: 'Yes' },
      { question: 'What happens if you delete a user who has orders (with standard FK rules)?', options: ['Fails due to constraint error', 'Cascades', 'Sets to NULL', 'Ignores'], answer: 'Fails due to constraint error' },
      { question: 'Which keyword establishes the link?', options: ['LINKS_TO', 'REFERENCES', 'POINTS', 'CONNECTS'], answer: 'REFERENCES' }
    ],
    interviewQuestions: [
      { q: 'What is ON DELETE CASCADE?', a: 'It is an option on a Foreign Key constraint. If you delete a parent record (User), all child records (Orders) that reference it are automatically deleted as well.' }
    ],
    summary: ['FOREIGN KEY links to a PRIMARY KEY.', 'Prevents invalid data.'],
    references: commonReferences
  },

  'mysql_candidate_key': {
    isStructured: true,
    title: '58. Candidate Key',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A Candidate Key is a column (or set of columns) that can uniquely identify a row in a table. A table can have multiple Candidate Keys, but only one is chosen as the Primary Key.',
    whyUseIt: 'Database theory concept to help you choose the best Primary Key.',
    syntax: '-- Conceptual',
    codeExample: '-- Users table has: id, email, SSN\n-- Candidate Keys: id, email, SSN\n-- We choose `id` as the Primary Key.\n-- `email` and `SSN` become Alternate Keys.',
    hasLiveOutput: false,
    expectedOutput: 'Conceptual understanding.',
    explanation: [
      { code: 'Candidate', desc: 'Eligible to be the Primary Key because it is unique and not null.' }
    ],
    realWorldExample: 'A user has an ID, an Email, and a Phone Number. All three are unique. All three are Candidate Keys.',
    commonMistakes: [
      { error: 'Choosing a Candidate Key that might change as the PK', code: '', suffix: 'Don\'t use Email as a PK because users change their emails. Use an immutable auto-increment ID.' }
    ],
    bestPractices: ['Identify all candidate keys, pick the simplest integer one as the Primary Key, and apply UNIQUE constraints to the others.'],
    practiceExercise: {
      task: 'If `student_id` and `email` are unique, what are they called?',
      expectedOutput: 'Candidate Keys.',
      solution: 'Candidate Keys'
    },
    quiz: [
      { question: 'What is a Candidate Key?', options: ['A key running for office', 'Any column that can uniquely identify a row', 'A foreign key', 'A text column'], answer: 'Any column that can uniquely identify a row' },
      { question: 'How many Primary Keys are chosen from the Candidate Keys?', options: ['One', 'Two', 'All of them', 'None'], answer: 'One' },
      { question: 'What do we call Candidate Keys that are NOT chosen as the Primary Key?', options: ['Foreign Keys', 'Alternate Keys', 'Dropped Keys', 'Composite Keys'], answer: 'Alternate Keys' },
      { question: 'Must a Candidate Key be UNIQUE?', options: ['Yes', 'No', 'Sometimes', 'Only if it is an integer'], answer: 'Yes' },
      { question: 'Must a Candidate Key be NOT NULL?', options: ['Yes', 'No', 'Sometimes', 'Only for text'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between a Candidate Key and a Primary Key?', a: 'A table can have multiple candidate keys (fields that uniquely identify the row, like Email and SSN). The Database Administrator selects exactly ONE of these candidate keys to act as the Primary Key.' }
    ],
    summary: ['Eligible to be Primary Key.', 'Must be UNIQUE and NOT NULL.'],
    references: commonReferences
  },

  'mysql_composite_key': {
    isStructured: true,
    title: '59. Composite Key',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A Primary Key that consists of TWO or MORE columns.',
    whyUseIt: 'Used primarily in Junction Tables (Many-to-Many relationships) where a single column is not enough to uniquely identify a record.',
    syntax: 'PRIMARY KEY (col1, col2)',
    codeExample: 'CREATE TABLE Order_Items (\n  order_id INT,\n  product_id INT,\n  quantity INT,\n  PRIMARY KEY (order_id, product_id)\n);',
    hasLiveOutput: false,
    expectedOutput: 'Query OK',
    explanation: [
      { code: '(order_id, product_id)', desc: 'Neither order_id nor product_id are unique on their own. But their combination is unique.' }
    ],
    realWorldExample: 'A student can take many classes, a class has many students. The Enrollment table uses `(student_id, class_id)` as a composite primary key to ensure a student cannot enroll in the exact same class twice.',
    commonMistakes: [
      { error: 'Adding a separate ID column unnecessarily', code: '', suffix: 'While you CAN add a surrogate `id` to a junction table, a composite key is often cleaner and enforces uniqueness automatically.' }
    ],
    bestPractices: ['Use composite keys to resolve Many-to-Many junction tables.'],
    practiceExercise: {
      task: 'Define a composite key on `user_id` and `role_id`.',
      expectedOutput: 'Query OK',
      solution: 'PRIMARY KEY (user_id, role_id)'
    },
    quiz: [
      { question: 'What is a Composite Key?', options: ['A key made of plastic', 'A primary key consisting of two or more columns', 'A foreign key', 'A key that auto increments'], answer: 'A primary key consisting of two or more columns' },
      { question: 'Where are composite keys most commonly used?', options: ['User tables', 'Junction tables (Many-to-Many)', 'Log tables', 'Product tables'], answer: 'Junction tables (Many-to-Many)' },
      { question: 'In `PRIMARY KEY (A, B)`, can column A have duplicate values?', options: ['No', 'Yes, as long as the COMBINATION of A and B is unique', 'Only if B is null', 'Only on Tuesdays'], answer: 'Yes, as long as the COMBINATION of A and B is unique' },
      { question: 'How do you declare a composite key in a CREATE TABLE statement?', options: ['A INT PRIMARY KEY, B INT PRIMARY KEY', 'PRIMARY KEY (A, B)', 'COMPOSITE KEY (A, B)', 'UNIQUE (A, B)'], answer: 'PRIMARY KEY (A, B)' },
      { question: 'Can a composite key have 3 columns?', options: ['Yes', 'No', 'Only in Oracle', 'Only if they are all integers'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'Why use a Composite Key instead of an Auto-Increment ID in a junction table?', a: 'A composite key prevents duplicate relationships (e.g., preventing a user from buying the same item twice in the exact same order) natively, whereas an auto-increment ID would require an additional UNIQUE constraint to achieve the same protection.' }
    ],
    summary: ['Primary key made of multiple columns.', 'Used in Many-to-Many tables.'],
    references: commonReferences
  },

  'mysql_unique_key': {
    isStructured: true,
    title: '60. Unique Key',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The UNIQUE constraint ensures that all values in a column are different.',
    whyUseIt: 'To prevent duplicate data for fields that are not the Primary Key (like usernames or emails).',
    syntax: 'email VARCHAR(255) UNIQUE',
    codeExample: 'CREATE TABLE Users (\n  id INT PRIMARY KEY,\n  email VARCHAR(100) UNIQUE\n);',
    hasLiveOutput: false,
    expectedOutput: 'Query OK',
    explanation: [
      { code: 'UNIQUE', desc: 'Automatically creates a unique index on the column.' }
    ],
    realWorldExample: 'Preventing two users from signing up with the exact same email address.',
    commonMistakes: [
      { error: 'Assuming UNIQUE cannot have NULLs', code: '', suffix: 'In MySQL, a UNIQUE constraint allows multiple NULL values, because NULL is not equal to NULL.' }
    ],
    bestPractices: ['Apply UNIQUE constraints at the database level, do not rely solely on your application code (like PHP/Node) to check for duplicates.'],
    practiceExercise: {
      task: 'Create a table with a UNIQUE `username`.',
      expectedOutput: 'Query OK',
      solution: 'CREATE TABLE t (username VARCHAR(50) UNIQUE);'
    },
    quiz: [
      { question: 'What does the UNIQUE constraint do?', options: ['Generates an ID', 'Prevents duplicate values in a column', 'Checks for nulls', 'Links tables'], answer: 'Prevents duplicate values in a column' },
      { question: 'What is the difference between UNIQUE and PRIMARY KEY?', options: ['No difference', 'Primary Key cannot be NULL, UNIQUE can allow NULLs (in MySQL)', 'UNIQUE is faster', 'Primary Key allows duplicates'], answer: 'Primary Key cannot be NULL, UNIQUE can allow NULLs (in MySQL)' },
      { question: 'How many UNIQUE constraints can a table have?', options: ['One', 'Two', 'Unlimited', 'None'], answer: 'Unlimited' },
      { question: 'What happens if you try to insert a duplicate email?', options: ['It overwrites', 'It returns a constraint violation error', 'It ignores the insert silently', 'It creates a new table'], answer: 'It returns a constraint violation error' },
      { question: 'Can a UNIQUE constraint be applied to multiple columns combined?', options: ['Yes (UNIQUE(col1, col2))', 'No', 'Only on dates', 'Only in SQL Server'], answer: 'Yes (UNIQUE(col1, col2))' }
    ],
    interviewQuestions: [
      { q: 'In MySQL, can a UNIQUE column contain multiple NULL values?', a: 'Yes. In MySQL, NULL is treated as an unknown value. Since unknown is not equal to unknown, multiple rows can have a NULL value in a UNIQUE column without violating the constraint.' }
    ],
    summary: ['Prevents duplicates.', 'Allows NULLs.', 'You can have many per table.'],
    references: commonReferences
  },

  'mysql_auto_increment': {
    isStructured: true,
    title: '61. Auto Increment',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Allows a unique integer to be generated automatically when a new record is inserted.',
    whyUseIt: 'Essential for Primary Keys so you don\'t have to write code to calculate `MAX(id) + 1`.',
    syntax: 'id INT AUTO_INCREMENT',
    codeExample: 'CREATE TABLE logs (id INT AUTO_INCREMENT PRIMARY KEY, msg VARCHAR(50));\nINSERT INTO logs (msg) VALUES (\'Started\');\n-- ID is automatically 1',
    hasLiveOutput: false,
    expectedOutput: 'Query OK',
    explanation: [
      { code: 'AUTO_INCREMENT', desc: 'Increments the value by 1 for each new row.' }
    ],
    realWorldExample: 'Order numbers on an e-commerce site.',
    commonMistakes: [
      { error: 'Assuming deleted IDs are reused', code: '', suffix: 'If you delete row 5, the next row inserted will be 6, not 5. Gaps are normal and expected.' }
    ],
    bestPractices: ['Use it for every surrogate primary key.'],
    practiceExercise: {
      task: 'Create table `x` with `id` as auto-increment primary key.',
      expectedOutput: 'Query OK',
      solution: 'CREATE TABLE x (id INT AUTO_INCREMENT PRIMARY KEY);'
    },
    quiz: [
      { question: 'What does AUTO_INCREMENT do?', options: ['Generates a UUID', 'Automatically generates a sequential number', 'Calculates math', 'Adds dates'], answer: 'Automatically generates a sequential number' },
      { question: 'What is it almost exclusively used for?', options: ['Passwords', 'Primary Keys', 'Foreign Keys', 'Timestamps'], answer: 'Primary Keys' },
      { question: 'What is the default starting value?', options: ['0', '1', '-1', '100'], answer: '1' },
      { question: 'If you delete the last row (ID=10), what is the ID of the next inserted row?', options: ['10', '11', '1', 'Error'], answer: '11' },
      { question: 'Can you manually insert a specific ID into an AUTO_INCREMENT column?', options: ['Yes', 'No', 'Only if it is negative', 'Only on Windows'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'How do you reset the AUTO_INCREMENT counter back to 1?', a: '`ALTER TABLE table_name AUTO_INCREMENT = 1;` (Note: This only works if the table is empty or the max ID is 0). Alternatively, using `TRUNCATE TABLE` automatically resets it.' }
    ],
    summary: ['Automatically generates IDs.', 'Starts at 1.', 'Gaps in IDs are normal.'],
    references: commonReferences
  },

  'mysql_constraints': {
    isStructured: true,
    title: '62. Constraints',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'Constraints are rules enforced on data columns to ensure accuracy and reliability.',
    whyUseIt: 'To prevent invalid data from ever entering your database.',
    syntax: 'CREATE TABLE t (col TYPE CONSTRAINT);',
    codeExample: 'CREATE TABLE Users (\n  id INT PRIMARY KEY,\n  name VARCHAR(50) NOT NULL,\n  email VARCHAR(100) UNIQUE,\n  age INT CHECK (age >= 18),\n  status VARCHAR(20) DEFAULT \'Active\'\n);',
    hasLiveOutput: false,
    expectedOutput: 'A robust table that rejects bad data.',
    explanation: [
      { code: 'NOT NULL', desc: 'Column cannot be empty.' },
      { code: 'CHECK', desc: 'Validates a specific condition.' },
      { code: 'DEFAULT', desc: 'Fallback value.' }
    ],
    realWorldExample: 'Ensuring a banking app doesn\'t accept a negative deposit amount (CHECK amount > 0).',
    commonMistakes: [
      { error: 'Relying entirely on frontend validation', code: '', suffix: 'Frontend validation can be bypassed. Database constraints are the final, unbreakable wall of security.' }
    ],
    bestPractices: ['Apply NOT NULL to almost all columns unless you specifically need them to be optional.'],
    practiceExercise: {
      task: 'Create a table where `price` cannot be NULL and defaults to 10.',
      expectedOutput: 'Query OK',
      solution: 'CREATE TABLE t (price INT NOT NULL DEFAULT 10);'
    },
    quiz: [
      { question: 'What is the purpose of SQL constraints?', options: ['To speed up queries', 'To enforce data integrity and rules', 'To join tables', 'To format output'], answer: 'To enforce data integrity and rules' },
      { question: 'Which constraint ensures a column cannot be left blank?', options: ['UNIQUE', 'CHECK', 'NOT NULL', 'DEFAULT'], answer: 'NOT NULL' },
      { question: 'Which constraint provides a fallback value?', options: ['DEFAULT', 'CHECK', 'PRIMARY KEY', 'NOT NULL'], answer: 'DEFAULT' },
      { question: 'Which constraint allows you to write custom boolean logic (like age >= 18)?', options: ['UNIQUE', 'DEFAULT', 'CHECK', 'FOREIGN KEY'], answer: 'CHECK' },
      { question: 'Why not just use Javascript frontend validation?', options: ['JS is too slow', 'Users can bypass frontend logic; DB constraints are strictly enforced', 'JS is not supported', 'You should only use JS'], answer: 'Users can bypass frontend logic; DB constraints are strictly enforced' }
    ],
    interviewQuestions: [
      { q: 'Did older versions of MySQL support the CHECK constraint?', a: 'Prior to MySQL 8.0.16, MySQL would parse the CHECK constraint syntax so it wouldn\'t error, but it completely ignored it. Modern versions fully enforce it.' }
    ],
    summary: ['Constraints enforce data integrity.', 'NOT NULL, UNIQUE, CHECK, DEFAULT.'],
    references: commonReferences
  }
};
