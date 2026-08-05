// Batch 4: Module 7 (Joins) + Module 8 (Relationships) — Topics 49-62
export const mysqlContentBatch4 = {

  // ─── MODULE 7: Joins ──────────────────────────────────────────────────────────

  'mysql_joins_intro': {
    isStructured: true,
    title: '49. Introduction to Joins',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'A JOIN clause combines rows from two or more tables based on a related column between them. Joins are the most powerful feature of relational databases.',
    whyUseIt: 'Real data lives in multiple tables. Joins let you combine them into meaningful results — like combining an orders table with a customers table to see who ordered what.',
    syntax: 'SELECT * FROM table1\\nJOIN table2 ON table1.id = table2.table1_id;',
    codeExample: '-- Setup: Two related tables\\nCREATE TABLE students (\\n  id   INT PRIMARY KEY,\\n  name VARCHAR(50)\\n);\\n\\nCREATE TABLE courses (\\n  id         INT PRIMARY KEY,\\n  student_id INT,\\n  course     VARCHAR(50)\\n);\\n\\n-- Join them:\\nSELECT s.name, c.course\\nFROM students AS s\\nJOIN courses AS c ON s.id = c.student_id;\\n\\n-- Types of Joins:\\n-- INNER JOIN  → Only matching rows from both tables\\n-- LEFT JOIN   → All from left + matching from right\\n-- RIGHT JOIN  → All from right + matching from left\\n-- FULL JOIN   → All rows from both tables',
    hasLiveOutput: false,
    explanation: [
      { code: 'ON condition', desc: 'Defines how the two tables are related — usually a foreign key = primary key.' },
      { code: 'Table aliases', desc: 'Essential in JOINs to shorten long table names (AS s, AS c).' },
      { code: 'Joining on', desc: 'Usually: child_table.foreign_key = parent_table.primary_key.' }
    ],
    realWorldExample: 'Every e-commerce "My Orders" page runs a JOIN: orders + products + customers + shipping, all combined into one view.',
    commonMistakes: [{ error: 'Forgetting the ON clause.', code: '', suffix: 'Without ON, you get a CROSS JOIN — every row matched with every other row (millions of rows!).' }],
    bestPractices: ['Always use table aliases in JOIN queries', 'Specify fully qualified column names (table.column) to avoid ambiguity', 'Understand the relationship (1-to-1, 1-to-many) before joining'],
    summary: ['JOINs combine rows from multiple tables.', 'The ON clause defines the relationship condition.', 'Always use table aliases for readable JOIN queries.'],
    interviewQuestions: ['What is a JOIN in SQL?', 'What happens if you JOIN without an ON clause?', 'What is the difference between the types of JOINs?'],
    quickQuiz: { question: 'What clause defines the relationship in a JOIN?', options: ['WHERE', 'USING', 'ON', 'CONNECT'], answer: 'ON' }
  },

  'mysql_inner_join': {
    isStructured: true,
    title: '50. INNER JOIN',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'INNER JOIN returns only the rows where there is a match in BOTH tables. Rows without a match are excluded from both sides.',
    whyUseIt: 'INNER JOIN is the most common join. Use it when you only want records that have matching data on both sides.',
    syntax: 'SELECT columns\\nFROM table1\\nINNER JOIN table2 ON table1.id = table2.t1_id;',
    codeExample: '-- Students and their enrolled courses:\\nSELECT s.name, c.course_name\\nFROM students AS s\\nINNER JOIN enrollments AS e ON s.id = e.student_id\\nINNER JOIN courses   AS c ON e.course_id = c.id;\\n\\n-- Employees and their department names:\\nSELECT e.name, d.dept_name\\nFROM employees AS e\\nINNER JOIN departments AS d ON e.dept_id = d.id;\\n\\n-- Orders with customer info:\\nSELECT o.order_id, c.name, o.total\\nFROM orders AS o\\nINNER JOIN customers AS c ON o.customer_id = c.id\\nWHERE o.status = \'paid\'\\nORDER BY o.total DESC;',
    hasLiveOutput: false,
    explanation: [
      { code: 'INNER JOIN', desc: 'Returns rows with a match in BOTH tables. Unmatched rows are dropped.' },
      { code: 'Multiple INNER JOINs', desc: 'Chain JOIN...ON multiple times to link 3 or more tables.' },
      { code: 'JOIN = INNER JOIN', desc: 'Writing just JOIN without INNER is the same as INNER JOIN.' }
    ],
    realWorldExample: 'SELECT p.name, o.quantity FROM products p INNER JOIN order_items o ON p.id = o.product_id; — Only products that have been ordered appear.',
    commonMistakes: [{ error: 'INNER JOIN excludes rows without a match.', code: '', suffix: 'A student with no courses WON\'T appear. Use LEFT JOIN if you want all students.' }],
    bestPractices: ['Use INNER JOIN when you only want complete, matched data', 'Chain multiple INNER JOINs for complex multi-table queries'],
    summary: ['INNER JOIN returns only matching rows from both tables.', 'Unmatched rows from either table are excluded.', 'Most commonly used type of join.'],
    interviewQuestions: ['What is an INNER JOIN?', 'How does INNER JOIN differ from LEFT JOIN?', 'Can you INNER JOIN more than 2 tables?'],
    quickQuiz: { question: 'What does INNER JOIN return?', options: ['All rows from both tables', 'Only rows that match in both tables', 'All from left, matching from right', 'All from right, matching from left'], answer: 'Only rows that match in both tables' }
  },

  'mysql_left_join': {
    isStructured: true,
    title: '51. LEFT JOIN',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'LEFT JOIN returns ALL rows from the left (first) table, plus matching rows from the right table. If no match is found, NULL is returned for right table columns.',
    whyUseIt: 'Use LEFT JOIN when you want all records from the main table, even if they have no related data in the other table.',
    syntax: 'SELECT columns\\nFROM left_table\\nLEFT JOIN right_table ON left_table.id = right_table.lt_id;',
    codeExample: '-- All students, even those not enrolled in any course:\\nSELECT s.name, c.course_name\\nFROM students AS s\\nLEFT JOIN enrollments AS e ON s.id = e.student_id\\nLEFT JOIN courses    AS c ON e.course_id = c.id;\\n-- Students with no courses show NULL for course_name\\n\\n-- Find students NOT enrolled in any course:\\nSELECT s.name\\nFROM students AS s\\nLEFT JOIN enrollments AS e ON s.id = e.student_id\\nWHERE e.student_id IS NULL;\\n\\n-- All products, even unsold ones:\\nSELECT p.name, COUNT(o.id) AS times_ordered\\nFROM products AS p\\nLEFT JOIN order_items AS o ON p.id = o.product_id\\nGROUP BY p.id, p.name;',
    hasLiveOutput: false,
    explanation: [
      { code: 'LEFT JOIN', desc: 'Returns ALL rows from left table. Right side shows NULL if no match.' },
      { code: 'Finding unmatched', desc: 'Add WHERE right_table.id IS NULL to find left-side rows with no match.' },
      { code: 'NULL for unmatched', desc: 'Every column from the right table shows NULL for unmatched rows.' }
    ],
    realWorldExample: 'SELECT c.name, o.order_id FROM customers c LEFT JOIN orders o ON c.id = o.customer_id; — See ALL customers, including those who never ordered.',
    commonMistakes: [{ error: 'Confusing which table is "left".', code: '', suffix: 'The LEFT table is the one written BEFORE LEFT JOIN. It always returns all its rows.' }],
    bestPractices: ['Use LEFT JOIN when the first table is the "master" and the second is optional data', 'Use WHERE right.id IS NULL to find rows with no match (anti-join pattern)'],
    summary: ['LEFT JOIN returns ALL rows from the left table.', 'Missing right-side data shows as NULL.', 'Filter WHERE right.col IS NULL to find unmatched records.'],
    interviewQuestions: ['What is the difference between INNER JOIN and LEFT JOIN?', 'How do you find rows in table A with no match in table B?', 'What does NULL mean in a LEFT JOIN result?'],
    quickQuiz: { question: 'What does a LEFT JOIN return for unmatched right-table rows?', options: ['0', 'Empty string', 'NULL', 'An error'], answer: 'NULL' }
  },

  'mysql_right_join': {
    isStructured: true,
    title: '52. RIGHT JOIN',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'RIGHT JOIN returns ALL rows from the right (second) table, plus matching rows from the left table. If no match, NULL is returned for left table columns.',
    whyUseIt: 'RIGHT JOIN is the mirror of LEFT JOIN. You can always rewrite a RIGHT JOIN as a LEFT JOIN by swapping tables.',
    syntax: 'SELECT columns\\nFROM left_table\\nRIGHT JOIN right_table ON left_table.id = right_table.lt_id;',
    codeExample: '-- All courses, even ones with no students:\\nSELECT s.name, c.course_name\\nFROM students AS s\\nRIGHT JOIN enrollments AS e ON s.id = e.student_id\\nRIGHT JOIN courses    AS c ON e.course_id = c.id;\\n\\n-- Equivalent using LEFT JOIN (swap table order):\\nSELECT s.name, c.course_name\\nFROM courses AS c\\nLEFT JOIN enrollments AS e ON e.course_id = c.id\\nLEFT JOIN students   AS s ON s.id = e.student_id;\\n\\n-- Find courses with no enrolled students:\\nSELECT c.course_name\\nFROM students AS s\\nRIGHT JOIN enrollments AS e ON s.id = e.student_id\\nRIGHT JOIN courses    AS c ON e.course_id = c.id\\nWHERE s.id IS NULL;',
    hasLiveOutput: false,
    explanation: [
      { code: 'RIGHT JOIN', desc: 'Returns ALL rows from the right table. Left side shows NULL if no match.' },
      { code: 'Mirror of LEFT JOIN', desc: 'RIGHT JOIN table1 = FROM table1 LEFT JOIN (swap order).' },
      { code: 'Industry note', desc: 'Many developers avoid RIGHT JOIN and just rewrite as LEFT JOIN for readability.' }
    ],
    realWorldExample: 'SELECT e.name, d.dept_name FROM employees e RIGHT JOIN departments d ON e.dept_id = d.id; — Show ALL departments, including empty ones.',
    commonMistakes: [{ error: 'Mixing LEFT and RIGHT JOIN in one query.', code: '', suffix: 'This works but is confusing. Rewrite all as LEFT JOIN for consistency.' }],
    bestPractices: ['Prefer LEFT JOIN over RIGHT JOIN for consistency', 'If you need RIGHT JOIN, swap table order and use LEFT JOIN instead'],
    summary: ['RIGHT JOIN returns ALL rows from the right table.', 'LEFT side shows NULL for unmatched rows.', 'Can always be rewritten as LEFT JOIN by swapping table order.'],
    interviewQuestions: ['What is the difference between LEFT JOIN and RIGHT JOIN?', 'How do you rewrite a RIGHT JOIN as a LEFT JOIN?'],
    quickQuiz: { question: 'RIGHT JOIN returns all rows from which table?', options: ['Left table', 'Both tables', 'Right table', 'Neither'], answer: 'Right table' }
  },

  'mysql_full_join': {
    isStructured: true,
    title: '53. FULL JOIN (Concept)',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'FULL JOIN returns ALL rows from BOTH tables. Where no match exists, NULL is filled in. MySQL does not directly support FULL JOIN — it must be simulated using UNION.',
    whyUseIt: 'FULL JOIN is useful when you need all data from both tables, whether or not it has a match on the other side.',
    syntax: '-- MySQL FULL JOIN simulation:\\nSELECT * FROM A LEFT JOIN B ON A.id = B.a_id\\nUNION\\nSELECT * FROM A RIGHT JOIN B ON A.id = B.a_id;',
    codeExample: '-- Simulate FULL OUTER JOIN in MySQL:\\nSELECT s.name, c.course_name\\nFROM students AS s\\nLEFT JOIN courses AS c ON s.id = c.student_id\\n\\nUNION\\n\\nSELECT s.name, c.course_name\\nFROM students AS s\\nRIGHT JOIN courses AS c ON s.id = c.student_id;\\n\\n-- Result: ALL students + ALL courses\\n-- Unmatched students show NULL course_name\\n-- Unmatched courses show NULL student name',
    hasLiveOutput: false,
    explanation: [
      { code: 'FULL JOIN', desc: 'Returns all rows from both tables with NULLs for non-matching rows.' },
      { code: 'MySQL limitation', desc: 'MySQL does not have FULL OUTER JOIN syntax. Use UNION of LEFT + RIGHT.' },
      { code: 'UNION', desc: 'Combines results of two queries and removes duplicates.' }
    ],
    realWorldExample: 'In reconciliation reports (e.g., comparing two systems), FULL JOIN shows what exists in either system, highlighting mismatches.',
    commonMistakes: [{ error: 'Trying to use FULL JOIN in MySQL.', code: '', suffix: 'MySQL returns error. Use LEFT JOIN UNION RIGHT JOIN instead.' }],
    bestPractices: ['Use UNION of LEFT and RIGHT JOIN to simulate FULL JOIN in MySQL', 'Use FULL JOIN in PostgreSQL if available'],
    summary: ['FULL JOIN returns all rows from both tables with NULLs for non-matches.', 'MySQL does not support FULL JOIN directly.', 'Simulate with: LEFT JOIN UNION RIGHT JOIN.'],
    interviewQuestions: ['Does MySQL support FULL OUTER JOIN?', 'How do you simulate a FULL JOIN in MySQL?'],
    quickQuiz: { question: 'How do you simulate FULL JOIN in MySQL?', options: ['FULL OUTER JOIN syntax', 'LEFT JOIN UNION RIGHT JOIN', 'INNER JOIN + OUTER', 'CROSS JOIN'], answer: 'LEFT JOIN UNION RIGHT JOIN' }
  },

  'mysql_self_join': {
    isStructured: true,
    title: '54. SELF JOIN',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'A SELF JOIN joins a table with itself. It is used when a table has a foreign key that references its own primary key — like employees and their managers.',
    whyUseIt: 'Hierarchical data stored in a single table (employees with manager_id, folder with parent_id) requires SELF JOIN to traverse the hierarchy.',
    syntax: 'SELECT a.col, b.col\\nFROM table AS a\\nJOIN table AS b ON a.fk = b.pk;',
    codeExample: '-- Employee table with manager_id (references same table):\\nCREATE TABLE employees (\\n  id         INT PRIMARY KEY,\\n  name       VARCHAR(50),\\n  manager_id INT -- references employees.id\\n);\\n\\n-- Self join to get employee + their manager name:\\nSELECT\\n  e.name    AS employee,\\n  m.name    AS manager\\nFROM employees AS e\\nLEFT JOIN employees AS m ON e.manager_id = m.id;\\n\\n-- Result:\\n-- Ravi   | Priya (Ravi\'s manager is Priya)\\n-- Arjun  | Priya\\n-- Priya  | NULL (Priya is top-level, no manager)',
    hasLiveOutput: false,
    explanation: [
      { code: 'SELF JOIN', desc: 'Same table joined to itself using two different aliases.' },
      { code: 'Two aliases', desc: 'Mandatory — you must alias the table twice (AS e, AS m).' },
      { code: 'Use case', desc: 'Org charts, folder hierarchies, product categories with subcategories.' }
    ],
    realWorldExample: 'LinkedIn uses SELF JOIN to find "People who also know X" — all within a single connections table.',
    commonMistakes: [{ error: 'Forgetting to alias the table twice in SELF JOIN.', code: '', suffix: 'Without two different aliases, MySQL cannot distinguish the two copies of the table.' }],
    bestPractices: ['Use meaningful aliases (e for employee, m for manager)', 'Use LEFT JOIN for self-join to include top-level rows with no parent'],
    summary: ['SELF JOIN joins a table with itself.', 'Requires two aliases for the same table.', 'Used for hierarchical/recursive data like org charts.'],
    interviewQuestions: ['What is a SELF JOIN?', 'What is a real-world use case for SELF JOIN?', 'How do you write a SELF JOIN?'],
    quickQuiz: { question: 'What is required when writing a SELF JOIN?', options: ['A subquery', 'Two different aliases for the same table', 'A UNION clause', 'Two separate databases'], answer: 'Two different aliases for the same table' }
  },

  'mysql_cross_join': {
    isStructured: true,
    title: '55. CROSS JOIN',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'CROSS JOIN returns the Cartesian product of two tables — every row from the first table combined with every row from the second table.',
    whyUseIt: 'CROSS JOIN is used for generating all possible combinations — e.g., all sizes × all colors of a product, or a schedule for all teams playing each other.',
    syntax: 'SELECT * FROM table1 CROSS JOIN table2;',
    codeExample: '-- Colors × Sizes matrix:\\nCREATE TABLE colors (color VARCHAR(20));\\nCREATE TABLE sizes  (size  VARCHAR(10));\\n\\nINSERT INTO colors VALUES (\'Red\'),(\'Blue\'),(\'Green\');\\nINSERT INTO sizes  VALUES (\'S\'),(\'M\'),(\'L\');\\n\\n-- Generate all 9 combinations:\\nSELECT color, size\\nFROM colors\\nCROSS JOIN sizes;\\n-- Result: Red-S, Red-M, Red-L, Blue-S, Blue-M... (9 rows)\\n\\n-- WARNING: 1000 rows × 1000 rows = 1,000,000 rows!\\n-- Always use CROSS JOIN on small tables only.',
    hasLiveOutput: false,
    explanation: [
      { code: 'CROSS JOIN', desc: 'Multiplies tables: m rows × n rows = m×n total rows.' },
      { code: 'No ON clause', desc: 'CROSS JOIN has no join condition — all combinations are produced.' },
      { code: 'Performance risk', desc: 'On large tables, CROSS JOIN produces enormous result sets. Use with care.' }
    ],
    realWorldExample: 'A sports scheduler uses CROSS JOIN to generate all possible game matchups: SELECT t1.name, t2.name FROM teams t1 CROSS JOIN teams t2 WHERE t1.id < t2.id;',
    commonMistakes: [{ error: 'Accidentally using CROSS JOIN on large tables.', code: '', suffix: 'Forgetting ON in a regular JOIN gives you an unintentional CROSS JOIN.' }],
    bestPractices: ['Only use CROSS JOIN on small lookup tables', 'Always add WHERE clause to filter down combinations if needed'],
    summary: ['CROSS JOIN returns every combination of rows from both tables.', 'Produces m × n rows.', 'Has no ON condition — use carefully on large tables.'],
    interviewQuestions: ['What is a CROSS JOIN?', 'What is the Cartesian product?', 'When would you use a CROSS JOIN?'],
    quickQuiz: { question: 'If table A has 10 rows and table B has 5 rows, how many rows does CROSS JOIN produce?', options: ['15', '50', '5', '10'], answer: '50' }
  },

  // ─── MODULE 8: Relationships ──────────────────────────────────────────────────

  'mysql_primary_key': {
    isStructured: true,
    title: '56. Primary Key',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'A PRIMARY KEY uniquely identifies each row in a table. It must be unique and cannot be NULL. Each table can have only one primary key.',
    whyUseIt: 'Without a primary key, there is no guaranteed way to uniquely identify or reference a specific row.',
    syntax: 'col datatype PRIMARY KEY\\n-- or at table level:\\nPRIMARY KEY (col1, col2)',
    codeExample: '-- Single column primary key:\\nCREATE TABLE students (\\n  id   INT AUTO_INCREMENT PRIMARY KEY,\\n  name VARCHAR(100) NOT NULL\\n);\\n\\n-- Composite primary key (at table level):\\nCREATE TABLE enrollments (\\n  student_id INT,\\n  course_id  INT,\\n  enrolled_on DATE,\\n  PRIMARY KEY (student_id, course_id)\\n);\\n\\n-- Add primary key to existing table:\\nALTER TABLE students ADD PRIMARY KEY (id);',
    hasLiveOutput: false,
    explanation: [
      { code: 'PRIMARY KEY', desc: 'Unique + NOT NULL. Only one per table.' },
      { code: 'AUTO_INCREMENT', desc: 'Usually paired with PRIMARY KEY on integer IDs.' },
      { code: 'Composite PK', desc: 'A primary key made of two or more columns together.' }
    ],
    realWorldExample: 'Every database table in production has a primary key. User tables use user_id, orders use order_id, products use product_id.',
    commonMistakes: [{ error: 'Creating a table without a primary key.', code: '', suffix: 'Without PK, duplicate rows can exist and referencing is impossible.' }],
    bestPractices: ['Every table must have a primary key', 'Use INT AUTO_INCREMENT for simple surrogate keys', 'Use composite keys for junction/relationship tables'],
    summary: ['PRIMARY KEY uniquely identifies each row.', 'Cannot be NULL and must be unique.', 'Only one primary key per table (can be composite).'],
    interviewQuestions: ['What is a primary key?', 'Can a primary key be NULL?', 'What is a composite primary key?'],
    quickQuiz: { question: 'What are the two rules of a PRIMARY KEY?', options: ['Unique and required (NOT NULL)', 'Unique and indexed', 'NOT NULL and auto-increment', 'Auto-increment and indexed'], answer: 'Unique and required (NOT NULL)' }
  },

  'mysql_foreign_key': {
    isStructured: true,
    title: '57. Foreign Key',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'A FOREIGN KEY is a column that references the PRIMARY KEY of another table. It enforces referential integrity — you cannot add a child record without a matching parent.',
    whyUseIt: 'Foreign keys prevent orphan data — like an order referencing a customer that does not exist — maintaining data consistency.',
    syntax: 'FOREIGN KEY (col) REFERENCES parent_table(col)\\n  ON DELETE CASCADE\\n  ON UPDATE CASCADE',
    codeExample: 'CREATE TABLE customers (\\n  id   INT AUTO_INCREMENT PRIMARY KEY,\\n  name VARCHAR(100) NOT NULL\\n);\\n\\nCREATE TABLE orders (\\n  id          INT AUTO_INCREMENT PRIMARY KEY,\\n  customer_id INT NOT NULL,\\n  total       DECIMAL(10,2),\\n  FOREIGN KEY (customer_id)\\n    REFERENCES customers(id)\\n    ON DELETE CASCADE    -- delete orders when customer is deleted\\n    ON UPDATE CASCADE    -- update if customer id changes\\n);',
    hasLiveOutput: false,
    explanation: [
      { code: 'FOREIGN KEY', desc: 'Links this table\'s column to the primary key of another table.' },
      { code: 'ON DELETE CASCADE', desc: 'Automatically deletes child rows when the parent row is deleted.' },
      { code: 'ON UPDATE CASCADE', desc: 'Automatically updates child rows when the parent key changes.' },
      { code: 'Referential integrity', desc: 'You cannot insert a child row with a parent_id that does not exist.' }
    ],
    realWorldExample: 'If you delete a user from the users table, ON DELETE CASCADE automatically deletes all their posts, comments, and orders too.',
    commonMistakes: [{ error: 'Foreign key type must match parent primary key type exactly.', code: '', suffix: 'If parent is INT, child foreign key must also be INT.' }],
    bestPractices: ['Always define foreign keys for related columns', 'Use ON DELETE CASCADE for dependent data', 'Use ON DELETE RESTRICT to prevent accidental deletion of referenced data'],
    summary: ['FOREIGN KEY enforces a relationship between tables.', 'Prevents orphan records (referential integrity).', 'ON DELETE/UPDATE CASCADE automates child record management.'],
    interviewQuestions: ['What is a foreign key?', 'What is referential integrity?', 'What does ON DELETE CASCADE do?'],
    quickQuiz: { question: 'What does ON DELETE CASCADE do?', options: ['Prevents deletion of the parent row', 'Deletes the parent and all child rows automatically', 'Only deletes the parent', 'Asks for confirmation before deleting'], answer: 'Deletes the parent and all child rows automatically' }
  },

  'mysql_candidate_key': {
    isStructured: true,
    title: '58. Candidate Key',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A Candidate Key is any column (or set of columns) that could serve as a primary key — it is unique and never NULL. One candidate key becomes the primary key; the rest become unique keys.',
    whyUseIt: 'Understanding candidate keys helps you identify all possible primary key options and choose the best one.',
    syntax: '-- A table may have multiple candidate keys:\\n-- id (INT, unique, not null)\\n-- email (VARCHAR, unique, not null)\\n-- phone (VARCHAR, unique, not null)\\n-- All three are candidate keys. Pick one as PRIMARY KEY.',
    codeExample: 'CREATE TABLE users (\\n  id       INT AUTO_INCREMENT PRIMARY KEY,  -- chosen candidate key\\n  email    VARCHAR(150) UNIQUE NOT NULL,      -- also a candidate key\\n  username VARCHAR(50)  UNIQUE NOT NULL,      -- also a candidate key\\n  phone    VARCHAR(15)  UNIQUE,               -- not a candidate key (can be NULL)\\n  name     VARCHAR(100)\\n);\\n\\n-- id is the PRIMARY KEY (chosen candidate key)\\n-- email and username are candidate keys that became UNIQUE keys',
    hasLiveOutput: false,
    explanation: [
      { code: 'Candidate Key', desc: 'Any minimal set of columns that uniquely identifies a row and is never NULL.' },
      { code: 'Primary Key', desc: 'The candidate key chosen to be the official identifier.' },
      { code: 'Alternate Key', desc: 'Candidate keys NOT chosen as the primary key (implemented as UNIQUE keys).' }
    ],
    realWorldExample: 'In a users table: id, email, and username are all candidate keys. id is chosen as primary key. email and username become UNIQUE constraints.',
    commonMistakes: [{ error: 'Thinking a column with NULLs can be a candidate key.', code: '', suffix: 'Candidate keys must be NOT NULL. NULL means "unknown" and can\'t uniquely identify a row.' }],
    bestPractices: ['Identify all candidate keys during database design', 'Make non-chosen candidate keys UNIQUE NOT NULL constraints'],
    summary: ['A candidate key can uniquely identify rows and is never NULL.', 'One is chosen as the primary key.', 'Others become unique alternate keys.'],
    interviewQuestions: ['What is a candidate key?', 'What is the difference between a candidate key and a primary key?', 'What is an alternate key?'],
    quickQuiz: { question: 'A Candidate Key that is NOT chosen as the Primary Key becomes a(n)...', options: ['Foreign Key', 'Super Key', 'Alternate Key', 'Composite Key'], answer: 'Alternate Key' }
  },

  'mysql_composite_key': {
    isStructured: true,
    title: '59. Composite Key',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A Composite Key is a primary key made up of two or more columns. The combination of all columns must be unique, though individual columns may repeat.',
    whyUseIt: 'Used in junction/relationship tables (like enrollment tables) where no single column uniquely identifies a row, but the combination does.',
    syntax: 'PRIMARY KEY (column1, column2)',
    codeExample: '-- Student-Course enrollment table:\\n-- A student can enroll in many courses\\n-- A course can have many students\\n-- But a student can only enroll in a specific course ONCE\\nCREATE TABLE enrollments (\\n  student_id INT NOT NULL,\\n  course_id  INT NOT NULL,\\n  grade      CHAR(1),\\n  enrolled_on DATE,\\n  PRIMARY KEY (student_id, course_id),  -- composite key\\n  FOREIGN KEY (student_id) REFERENCES students(id),\\n  FOREIGN KEY (course_id)  REFERENCES courses(id)\\n);\\n\\n-- student_id=1, course_id=5 → OK (first enrollment)\\n-- student_id=1, course_id=5 → ERROR! (duplicate combination)',
    hasLiveOutput: false,
    explanation: [
      { code: 'PRIMARY KEY (a, b)', desc: 'The combination of a and b must be unique across all rows.' },
      { code: 'Junction table', desc: 'Tables representing many-to-many relationships need composite primary keys.' },
      { code: 'Individual repeats OK', desc: 'student_id=1 can appear many times, as long as course_id differs each time.' }
    ],
    realWorldExample: 'A "likes" table on a social app: PRIMARY KEY (user_id, post_id) — a user can only like a specific post once.',
    commonMistakes: [{ error: 'Trying to add an AUTO_INCREMENT column to a composite key.', code: '', suffix: 'Composite primary keys don\'t use AUTO_INCREMENT. They rely on the meaningful combination.' }],
    bestPractices: ['Use composite keys for many-to-many relationship (junction) tables', 'Both columns in a composite key should be foreign keys referencing parent tables'],
    summary: ['A composite key uses 2+ columns as the primary key.', 'The combination must be unique.', 'Used in junction tables for many-to-many relationships.'],
    interviewQuestions: ['What is a composite key?', 'When would you use a composite key?', 'What is a junction table?'],
    quickQuiz: { question: 'A Composite Key is made of...', options: ['Two or more columns combined as a primary key', 'A foreign key plus a primary key', 'An auto-increment and a unique column', 'Two foreign keys from different tables'], answer: 'Two or more columns combined as a primary key' }
  },

  'mysql_unique_key': {
    isStructured: true,
    title: '60. Unique Key',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A UNIQUE constraint ensures all values in a column are different. Unlike a PRIMARY KEY, a UNIQUE column can accept NULL values.',
    whyUseIt: 'UNIQUE prevents duplicate entries for columns like email, username, phone number, or product SKU.',
    syntax: 'col datatype UNIQUE\\n-- or:\\nADD CONSTRAINT constraint_name UNIQUE (col1, col2)',
    codeExample: '-- Unique column on table creation:\\nCREATE TABLE users (\\n  id       INT AUTO_INCREMENT PRIMARY KEY,\\n  email    VARCHAR(150) UNIQUE NOT NULL,\\n  username VARCHAR(50)  UNIQUE NOT NULL\\n);\\n\\n-- Add unique constraint to existing table:\\nALTER TABLE products\\nADD CONSTRAINT uq_product_sku UNIQUE (sku);\\n\\n-- Composite unique constraint:\\nALTER TABLE schedules\\nADD UNIQUE (teacher_id, time_slot);\\n\\n-- Attempting duplicate → Error 1062\\nINSERT INTO users (email) VALUES (\'ravi@gmail.com\');\\nINSERT INTO users (email) VALUES (\'ravi@gmail.com\'); -- ERROR!',
    hasLiveOutput: false,
    explanation: [
      { code: 'UNIQUE', desc: 'No two rows can have the same value in this column.' },
      { code: 'vs PRIMARY KEY', desc: 'UNIQUE allows NULL values (one NULL), PRIMARY KEY does not.' },
      { code: 'Composite UNIQUE', desc: 'The combination of two columns must be unique.' }
    ],
    realWorldExample: 'UNIQUE on email prevents two users from registering with the same email address.',
    commonMistakes: [{ error: 'Thinking UNIQUE and PRIMARY KEY are the same.', code: '', suffix: 'PRIMARY KEY = UNIQUE + NOT NULL. UNIQUE can allow NULLs.' }],
    bestPractices: ['Apply UNIQUE to email, username, phone, and any business identifier', 'Name your UNIQUE constraints for easier management'],
    summary: ['UNIQUE ensures no duplicate values in a column.', 'Unlike PRIMARY KEY, it allows NULL.', 'Can be applied to a combination of columns.'],
    interviewQuestions: ['What is the difference between PRIMARY KEY and UNIQUE?', 'Can a UNIQUE column have NULL values?', 'How many UNIQUE constraints can a table have?'],
    quickQuiz: { question: 'What is the difference between UNIQUE and PRIMARY KEY?', options: ['They are identical', 'UNIQUE allows NULL, PRIMARY KEY does not', 'PRIMARY KEY allows NULL, UNIQUE does not', 'UNIQUE is faster'], answer: 'UNIQUE allows NULL, PRIMARY KEY does not' }
  },

  'mysql_auto_increment': {
    isStructured: true,
    title: '61. Auto Increment',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'AUTO_INCREMENT automatically generates a unique integer for each new row. It starts at 1 and increases by 1 for each INSERT.',
    whyUseIt: 'AUTO_INCREMENT eliminates the need to manually specify unique IDs for every record you insert.',
    syntax: 'col INT AUTO_INCREMENT PRIMARY KEY',
    codeExample: '-- AUTO_INCREMENT in action:\\nCREATE TABLE products (\\n  id    INT AUTO_INCREMENT PRIMARY KEY,\\n  name  VARCHAR(100)\\n);\\n\\nINSERT INTO products (name) VALUES (\'Laptop\');   -- id = 1\\nINSERT INTO products (name) VALUES (\'Phone\');    -- id = 2\\nINSERT INTO products (name) VALUES (\'Tablet\');   -- id = 3\\n\\n-- Check current AUTO_INCREMENT value:\\nSELECT AUTO_INCREMENT FROM information_schema.tables\\nWHERE table_name = \'products\';\\n\\n-- Change starting value:\\nALTER TABLE products AUTO_INCREMENT = 1000;\\n\\n-- Next insert will get id = 1000',
    hasLiveOutput: false,
    explanation: [
      { code: 'AUTO_INCREMENT', desc: 'MySQL automatically assigns the next integer ID.' },
      { code: 'Skipped IDs', desc: 'Deleted rows leave gaps. IDs are never reused automatically.' },
      { code: 'Starting value', desc: 'Default starts at 1. Can be changed with AUTO_INCREMENT = n.' }
    ],
    realWorldExample: 'Every order ID in e-commerce, every user ID on a platform, every transaction ID in banking uses AUTO_INCREMENT.',
    commonMistakes: [{ error: 'Expecting sequential IDs with no gaps.', code: '', suffix: 'Deleted rows leave gaps in AUTO_INCREMENT. Never assume continuity.' }],
    bestPractices: ['Always use AUTO_INCREMENT with INT or BIGINT for IDs', 'Use BIGINT AUTO_INCREMENT for high-volume tables that may exceed 2 billion rows'],
    summary: ['AUTO_INCREMENT generates unique IDs automatically.', 'Starts at 1 by default, increases by 1.', 'Deleted rows leave gaps that are never reused.'],
    interviewQuestions: ['What happens to AUTO_INCREMENT after a row is deleted?', 'How do you reset AUTO_INCREMENT?', 'What is the max value of INT AUTO_INCREMENT?'],
    quickQuiz: { question: 'What value does AUTO_INCREMENT assign to the first inserted row?', options: ['0', '1', 'NULL', 'Depends on previous rows'], answer: '1' }
  },

  'mysql_constraints': {
    isStructured: true,
    title: '62. Constraints',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Constraints are rules enforced on columns to ensure data accuracy and integrity. MySQL supports NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, and DEFAULT.',
    whyUseIt: 'Constraints protect your data at the database level — even if the application has bugs, the database will reject invalid data.',
    syntax: 'NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY,\\nCHECK (condition), DEFAULT value',
    codeExample: 'CREATE TABLE employees (\\n  id         INT AUTO_INCREMENT PRIMARY KEY,       -- PK constraint\\n  name       VARCHAR(100) NOT NULL,                 -- NOT NULL\\n  email      VARCHAR(150) UNIQUE NOT NULL,           -- UNIQUE + NOT NULL\\n  salary     DECIMAL(10,2) CHECK (salary > 0),      -- CHECK\\n  dept_id    INT,                                    -- FK (below)\\n  start_date DATE DEFAULT (CURRENT_DATE),            -- DEFAULT\\n  is_active  BOOLEAN DEFAULT TRUE,                   -- DEFAULT\\n  FOREIGN KEY (dept_id) REFERENCES departments(id)  -- FK\\n    ON DELETE SET NULL\\n);\\n\\n-- Testing constraints:\\nINSERT INTO employees (name) VALUES (NULL);       -- ERROR: NOT NULL\\nINSERT INTO employees (salary) VALUES (-1000);    -- ERROR: CHECK',
    hasLiveOutput: false,
    explanation: [
      { code: 'NOT NULL', desc: 'Column must have a value. Cannot be empty.' },
      { code: 'UNIQUE', desc: 'No duplicates allowed.' },
      { code: 'CHECK', desc: 'Value must satisfy a condition: CHECK (age >= 18).' },
      { code: 'DEFAULT', desc: 'If no value is provided, use this default.' },
      { code: 'FOREIGN KEY', desc: 'Must reference an existing value in the parent table.' }
    ],
    realWorldExample: 'CHECK (age >= 18) on a users table prevents underage users from registering, without needing any application-level code.',
    commonMistakes: [{ error: 'Relying on application code to enforce rules.', code: '', suffix: 'Database constraints are the last line of defense. Always define them.' }],
    bestPractices: ['Always define NOT NULL on required fields', 'Use CHECK constraints for business rules (age, salary ranges)', 'Define DEFAULT values to avoid NULL for common fields'],
    summary: ['Constraints enforce data rules at the database level.', 'NOT NULL, UNIQUE, CHECK, DEFAULT, PRIMARY KEY, FOREIGN KEY are the 6 types.', 'Always use constraints — don\'t rely on application code alone.'],
    interviewQuestions: ['What are the types of constraints in MySQL?', 'What is the difference between NOT NULL and DEFAULT?', 'What does CHECK constraint do?'],
    quickQuiz: { question: 'Which constraint ensures a column always has a value?', options: ['UNIQUE', 'DEFAULT', 'NOT NULL', 'CHECK'], answer: 'NOT NULL' }
  }
};
