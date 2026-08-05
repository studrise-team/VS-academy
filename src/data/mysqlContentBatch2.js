// Batch 2: Module 3 (CRUD) + Module 4 (Filtering) — Topics 17-34
export const mysqlContentBatch2 = {

  // ─── MODULE 3: CRUD Operations ────────────────────────────────────────────────

  'mysql_insert': {
    isStructured: true,
    title: '17. INSERT Statement',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'INSERT INTO adds new rows of data into a table.',
    whyUseIt: 'INSERT is the "C" in CRUD. Without it, you cannot add any data to your database.',
    syntax: 'INSERT INTO table_name (col1, col2) VALUES (val1, val2);\\nINSERT INTO table_name VALUES (val1, val2, ...); -- all columns\\nINSERT INTO table_name (col1) VALUES (v1),(v2),(v3); -- multiple rows',
    codeExample: '-- Insert one row:\\nINSERT INTO students (name, email, age, grade)\\nVALUES (\'Ravi Kumar\', \'ravi@example.com\', 20, \'A\');\\n\\n-- Insert multiple rows at once:\\nINSERT INTO students (name, email, age, grade) VALUES\\n  (\'Priya Sharma\', \'priya@example.com\', 21, \'B\'),\\n  (\'Arjun Patel\',  \'arjun@example.com\', 19, \'A\'),\\n  (\'Sneha Reddy\',  \'sneha@example.com\', 22, \'C\');\\n\\n-- Verify:\\nSELECT * FROM students;',
    hasLiveOutput: false,
    explanation: [
      { code: 'INSERT INTO', desc: 'Specifies which table to insert into.' },
      { code: '(col1, col2)', desc: 'Lists the columns you are providing values for.' },
      { code: 'VALUES', desc: 'The actual data to insert, in the same order as the columns.' }
    ],
    realWorldExample: 'Every time you register on a website, an INSERT statement adds your email and hashed password to the users table.',
    commonMistakes: [
      { error: 'Mismatching column count with values count.', code: '', suffix: 'If you list 3 columns, you must provide exactly 3 values.' },
      { error: 'Inserting duplicate values in UNIQUE columns.', code: '', suffix: 'Will cause: ERROR 1062 Duplicate entry.' }
    ],
    bestPractices: [
      'Always specify column names — never rely on column order',
      'Use multi-row INSERT for bulk data loading (much faster)',
      'Validate data before inserting to maintain integrity'
    ],
    summary: [
      'INSERT INTO adds one or more rows to a table.',
      'Always specify column names to avoid errors.',
      'Multiple rows can be inserted in a single statement.'
    ],
    interviewQuestions: [
      'How do you insert multiple rows in a single SQL statement?',
      'What error occurs when you insert a duplicate UNIQUE value?',
      'What happens to AUTO_INCREMENT after INSERT?'
    ],
    quickQuiz: {
      question: 'Which statement is used to add new data to a MySQL table?',
      options: ['ADD INTO', 'INSERT INTO', 'UPDATE INTO', 'CREATE ROW'],
      answer: 'INSERT INTO'
    }
  },

  'mysql_select': {
    isStructured: true,
    title: '18. SELECT Statement',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'SELECT retrieves data from one or more tables. It is the most frequently used SQL statement.',
    whyUseIt: 'SELECT is the "R" in CRUD. Every report, dashboard, and data display on any application runs on SELECT.',
    syntax: 'SELECT * FROM table_name;\\nSELECT col1, col2 FROM table_name;\\nSELECT DISTINCT col FROM table_name;\\nSELECT col FROM table_name WHERE condition;',
    codeExample: '-- Select ALL columns:\\nSELECT * FROM students;\\n\\n-- Select specific columns:\\nSELECT name, email, grade FROM students;\\n\\n-- Rename columns in output:\\nSELECT name AS "Student Name", grade AS "Score" FROM students;\\n\\n-- Select with calculation:\\nSELECT name, age, (age + 5) AS "Age in 5 Years" FROM students;\\n\\n-- Select from multiple conditions:\\nSELECT * FROM students WHERE grade = \'A\' AND age < 21;',
    hasLiveOutput: false,
    explanation: [
      { code: 'SELECT *', desc: 'Retrieves ALL columns. Avoid in production — specify columns.' },
      { code: 'SELECT col1, col2', desc: 'Retrieves only specific columns. More efficient.' },
      { code: 'AS', desc: 'Renames a column in the output (alias). Does not change the table.' },
      { code: 'WHERE', desc: 'Filters rows based on a condition. Without it, ALL rows are returned.' }
    ],
    realWorldExample: 'SELECT name, profile_pic, followers FROM users ORDER BY followers DESC LIMIT 10; — This is how Twitter shows the most followed accounts.',
    commonMistakes: [
      { error: 'Using SELECT * in production.', code: '', suffix: 'Always specify columns — SELECT * fetches unnecessary data and slows queries.' }
    ],
    bestPractices: [
      'Specify column names instead of using SELECT *',
      'Use aliases (AS) to make output more readable',
      'Always add WHERE to limit the data returned'
    ],
    summary: [
      'SELECT retrieves data from one or more tables.',
      'Use SELECT * for quick inspection, specify columns for production.',
      'AS creates readable column aliases in the output.'
    ],
    interviewQuestions: [
      'What is the difference between SELECT * and selecting specific columns?',
      'How does the WHERE clause work with SELECT?',
      'What is a column alias in SQL?'
    ],
    quickQuiz: {
      question: 'What does SELECT * FROM students return?',
      options: ['Only the first row', 'All columns and all rows from the students table', 'The structure of the table', 'The column names only'],
      answer: 'All columns and all rows from the students table'
    }
  },

  'mysql_where': {
    isStructured: true,
    title: '19. WHERE Clause',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'WHERE filters records and retrieves/modifies only those that satisfy a given condition.',
    whyUseIt: 'Without WHERE, every SELECT returns all rows and every UPDATE/DELETE affects every row. WHERE makes queries precise and safe.',
    syntax: 'SELECT col FROM table WHERE condition;\\nUPDATE table SET col = val WHERE condition;\\nDELETE FROM table WHERE condition;',
    codeExample: '-- Filter by exact value:\\nSELECT * FROM students WHERE grade = \'A\';\\n\\n-- Filter by number range:\\nSELECT * FROM students WHERE age >= 18 AND age <= 25;\\n\\n-- Filter with multiple conditions:\\nSELECT * FROM students\\nWHERE grade = \'A\' OR grade = \'B\';\\n\\n-- Combine AND + OR (use parentheses!):\\nSELECT * FROM students\\nWHERE (grade = \'A\' OR grade = \'B\') AND age > 18;\\n\\n-- Use in UPDATE (very important!):\\nUPDATE students SET grade = \'A+\' WHERE name = \'Ravi Kumar\';\\n\\n-- Use in DELETE (very important!):\\nDELETE FROM students WHERE id = 5;',
    hasLiveOutput: false,
    explanation: [
      { code: '= != < > <= >=', desc: 'Comparison operators used in WHERE conditions.' },
      { code: 'AND', desc: 'Both conditions must be true.' },
      { code: 'OR', desc: 'At least one condition must be true.' },
      { code: 'NOT', desc: 'Reverses the condition.' }
    ],
    realWorldExample: 'SELECT * FROM orders WHERE status = "pending" AND total > 1000; — An e-commerce app uses this to find high-value pending orders for priority processing.',
    commonMistakes: [
      { error: 'Running DELETE or UPDATE without WHERE.', code: 'DELETE FROM students;', suffix: 'This deletes EVERY row! Always use WHERE with DELETE and UPDATE.' },
      { error: 'Mixing AND/OR without parentheses.', code: '', suffix: 'SQL evaluates AND before OR. Always use parentheses to be explicit.' }
    ],
    bestPractices: [
      'ALWAYS use WHERE with DELETE and UPDATE',
      'Use parentheses when combining AND and OR',
      'Test WHERE conditions with SELECT before using with UPDATE/DELETE'
    ],
    summary: [
      'WHERE filters rows based on one or more conditions.',
      'It works with SELECT, UPDATE, and DELETE.',
      'Always use WHERE with UPDATE/DELETE to avoid modifying all rows.'
    ],
    interviewQuestions: [
      'What happens if you run DELETE without a WHERE clause?',
      'What is the order of evaluation for AND and OR?',
      'Can WHERE be used with UPDATE?'
    ],
    quickQuiz: {
      question: 'What happens if you run UPDATE students SET grade = \'A\'; without WHERE?',
      options: ['It updates only the first row', 'It updates no rows', 'It updates ALL rows in the table', 'It gives an error'],
      answer: 'It updates ALL rows in the table'
    }
  },

  'mysql_update': {
    isStructured: true,
    title: '20. UPDATE Statement',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'UPDATE modifies existing data in a table. It is the "U" in CRUD.',
    whyUseIt: 'Data changes over time. UPDATE lets you change specific records without deleting and reinserting them.',
    syntax: 'UPDATE table_name\\nSET column1 = value1, column2 = value2\\nWHERE condition;',
    codeExample: '-- Update a single column:\\nUPDATE students SET grade = \'A+\' WHERE id = 1;\\n\\n-- Update multiple columns at once:\\nUPDATE students\\nSET email = \'ravi.new@example.com\', age = 21\\nWHERE id = 1;\\n\\n-- Update based on calculation:\\nUPDATE products SET price = price * 1.10\\nWHERE category = \'electronics\';  -- 10% price increase\\n\\n-- Safe UPDATE: First SELECT to verify:\\nSELECT * FROM students WHERE id = 1;\\n-- Then update:\\nUPDATE students SET grade = \'B\' WHERE id = 1;',
    hasLiveOutput: false,
    explanation: [
      { code: 'SET', desc: 'Specifies which columns to change and their new values.' },
      { code: 'WHERE', desc: 'Restricts the update to specific rows. Without it, ALL rows are updated.' },
      { code: 'Multiple columns', desc: 'Separate multiple SET assignments with commas.' }
    ],
    realWorldExample: 'When you change your profile picture on Instagram, an UPDATE users SET profile_pic = "new_path.jpg" WHERE user_id = 12345; runs in the backend.',
    commonMistakes: [
      { error: 'Forgetting WHERE in UPDATE.', code: '', suffix: 'Without WHERE, every row gets updated. This is almost never what you want.' }
    ],
    bestPractices: [
      'Always test with SELECT first before UPDATE',
      'Use the primary key in WHERE for precise targeting',
      'Always include WHERE clause'
    ],
    summary: [
      'UPDATE modifies existing rows in a table.',
      'SET specifies columns and new values.',
      'Always use WHERE to target specific rows.'
    ],
    interviewQuestions: [
      'How do you update multiple columns in one statement?',
      'What is the danger of UPDATE without WHERE?',
      'How do you update based on a calculation?'
    ],
    quickQuiz: {
      question: 'Which keyword in UPDATE specifies the new values?',
      options: ['VALUES', 'INTO', 'SET', 'CHANGE'],
      answer: 'SET'
    }
  },

  'mysql_delete': {
    isStructured: true,
    title: '21. DELETE Statement',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'DELETE removes specific rows from a table. It is the "D" in CRUD.',
    whyUseIt: 'DELETE removes individual records that are no longer needed, unlike TRUNCATE which removes all data.',
    syntax: 'DELETE FROM table_name WHERE condition;\\nDELETE FROM table_name; -- deletes ALL rows!',
    codeExample: '-- Delete a specific row by ID (safest):\\nDELETE FROM students WHERE id = 5;\\n\\n-- Delete based on condition:\\nDELETE FROM students WHERE grade = \'F\';\\n\\n-- Delete with multiple conditions:\\nDELETE FROM orders\\nWHERE status = \'cancelled\' AND created_at < \'2024-01-01\';\\n\\n-- SAFE method: check first:\\nSELECT COUNT(*) FROM students WHERE grade = \'F\';\\n-- If count looks right, then delete:\\nDELETE FROM students WHERE grade = \'F\';',
    hasLiveOutput: false,
    explanation: [
      { code: 'DELETE FROM', desc: 'Specifies the table to delete from.' },
      { code: 'WHERE', desc: 'Specifies which rows to delete. CRITICAL — without this, all rows are deleted.' },
      { code: 'vs TRUNCATE', desc: 'DELETE logs each deletion and can use WHERE. TRUNCATE is faster but removes all rows.' }
    ],
    realWorldExample: 'DELETE FROM sessions WHERE expires_at < NOW(); — Web apps use this regularly to clean up expired login sessions.',
    commonMistakes: [
      { error: 'DELETE FROM table without WHERE.', code: '', suffix: 'This removes ALL data. Always double-check your WHERE clause.' }
    ],
    bestPractices: [
      'Always verify with SELECT before DELETE',
      'Use the primary key in WHERE for safety',
      'Consider "soft delete" — add an is_deleted column instead of truly deleting'
    ],
    summary: [
      'DELETE removes specific rows based on a WHERE condition.',
      'Without WHERE, ALL rows are deleted.',
      'Use SELECT first to verify what will be deleted.'
    ],
    interviewQuestions: [
      'What is the difference between DELETE and TRUNCATE?',
      'Can DELETE be rolled back?',
      'What is a "soft delete" in database design?'
    ],
    quickQuiz: {
      question: 'What is the safest way to delete specific rows in MySQL?',
      options: ['DELETE FROM table; then undo if wrong', 'Run SELECT with the same WHERE first, then DELETE', 'Use TRUNCATE with WHERE clause', 'Use DROP TABLE and recreate'],
      answer: 'Run SELECT with the same WHERE first, then DELETE'
    }
  },

  'mysql_limit': {
    isStructured: true,
    title: '22. LIMIT Clause',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'LIMIT restricts the number of rows returned by a SELECT query. OFFSET determines where to start.',
    whyUseIt: 'Without LIMIT, a SELECT on a large table returns millions of rows, crashing your app. LIMIT is essential for pagination.',
    syntax: 'SELECT * FROM table LIMIT count;\\nSELECT * FROM table LIMIT offset, count;\\nSELECT * FROM table LIMIT count OFFSET offset;',
    codeExample: '-- Get first 5 students:\\nSELECT * FROM students LIMIT 5;\\n\\n-- Get next 5 students (pagination page 2):\\nSELECT * FROM students LIMIT 5 OFFSET 5;\\n-- or equivalently:\\nSELECT * FROM students LIMIT 5, 5; -- offset=5, count=5\\n\\n-- Get the top scorer:\\nSELECT * FROM students ORDER BY score DESC LIMIT 1;\\n\\n-- Pagination formula:\\n-- Page N, page_size P:\\n-- LIMIT P OFFSET (N-1)*P\\n-- Page 3, size 10: LIMIT 10 OFFSET 20',
    hasLiveOutput: false,
    explanation: [
      { code: 'LIMIT n', desc: 'Returns at most n rows.' },
      { code: 'OFFSET n', desc: 'Skips the first n rows before returning results.' },
      { code: 'LIMIT 5 OFFSET 10', desc: 'Skips first 10, then returns next 5. Used for pagination.' }
    ],
    realWorldExample: 'Google search results show 10 per page. The SQL behind page 3 is: SELECT * FROM results LIMIT 10 OFFSET 20;',
    commonMistakes: [
      { error: 'Using LIMIT without ORDER BY for pagination.', code: '', suffix: 'Without ORDER BY, the "page 2" results could overlap with "page 1" because row order is not guaranteed.' }
    ],
    bestPractices: [
      'Always combine LIMIT with ORDER BY for consistent pagination',
      'Use LIMIT 1 to find the max/min record efficiently',
      'Calculate OFFSET as: (page - 1) × page_size'
    ],
    summary: [
      'LIMIT restricts the number of rows returned.',
      'OFFSET skips rows, enabling pagination.',
      'Always use ORDER BY with LIMIT for consistent results.'
    ],
    interviewQuestions: [
      'How do you implement pagination in MySQL?',
      'What is the difference between LIMIT and OFFSET?',
      'How do you get the third-highest salary using LIMIT?'
    ],
    quickQuiz: {
      question: 'Which clause limits the number of rows returned by a SELECT query?',
      options: ['TOP', 'MAX ROWS', 'LIMIT', 'COUNT'],
      answer: 'LIMIT'
    }
  },

  'mysql_order_by': {
    isStructured: true,
    title: '23. ORDER BY',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'ORDER BY sorts the result set by one or more columns, in ascending (ASC) or descending (DESC) order.',
    whyUseIt: 'Without ORDER BY, the order of results is unpredictable. Sorting is essential for leaderboards, reports, and pagination.',
    syntax: 'SELECT * FROM table ORDER BY column ASC;\\nSELECT * FROM table ORDER BY column DESC;\\nSELECT * FROM table ORDER BY col1 ASC, col2 DESC;',
    codeExample: '-- Sort alphabetically (A to Z):\\nSELECT * FROM students ORDER BY name ASC;\\n\\n-- Sort by age, newest first:\\nSELECT * FROM students ORDER BY age DESC;\\n\\n-- Sort by multiple columns:\\nSELECT * FROM students\\nORDER BY grade ASC, age DESC;\\n-- (Same grade? Sort by age descending)\\n\\n-- Top 3 highest scorers:\\nSELECT name, score FROM students\\nORDER BY score DESC\\nLIMIT 3;',
    hasLiveOutput: false,
    explanation: [
      { code: 'ASC', desc: 'Ascending order: A→Z, 0→9, oldest→newest. Default.' },
      { code: 'DESC', desc: 'Descending order: Z→A, 9→0, newest→oldest.' },
      { code: 'Multiple columns', desc: 'First sorted by col1; ties are broken by col2.' }
    ],
    realWorldExample: 'SELECT product_name, sales FROM products ORDER BY sales DESC LIMIT 5; — Amazon uses this to show the top 5 best-selling products.',
    commonMistakes: [
      { error: 'Assuming default sort order is reliable.', code: '', suffix: 'Without ORDER BY, MySQL may return rows in any order. Never assume.' }
    ],
    bestPractices: [
      'Always specify ASC or DESC explicitly for clarity',
      'Combine ORDER BY with LIMIT for efficient top-N queries',
      'Index the sorted column for better performance'
    ],
    summary: [
      'ORDER BY sorts results in ASC (default) or DESC order.',
      'Multiple columns can be sorted independently.',
      'Always use ORDER BY with LIMIT for consistent pagination.'
    ],
    interviewQuestions: [
      'What is the default sort order in ORDER BY?',
      'How do you sort by multiple columns?',
      'How do you find the second highest value using ORDER BY?'
    ],
    quickQuiz: {
      question: 'What is the default sort order of ORDER BY?',
      options: ['DESC', 'Random', 'ASC', 'None'],
      answer: 'ASC'
    }
  },

  'mysql_distinct': {
    isStructured: true,
    title: '24. DISTINCT',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'SELECT DISTINCT removes duplicate values from the result set, returning only unique values.',
    whyUseIt: 'When your table has repeated values in a column and you want a list of unique values, DISTINCT is the tool.',
    syntax: 'SELECT DISTINCT column FROM table;\\nSELECT DISTINCT col1, col2 FROM table;',
    codeExample: '-- All grades (with duplicates):\\nSELECT grade FROM students;\\n-- Returns: A, A, B, C, A, B, C, A...\\n\\n-- Only unique grades:\\nSELECT DISTINCT grade FROM students;\\n-- Returns: A, B, C\\n\\n-- Distinct combination of columns:\\nSELECT DISTINCT grade, age FROM students;\\n-- Unique pairs of (grade, age)\\n\\n-- Count unique grades:\\nSELECT COUNT(DISTINCT grade) AS unique_grades FROM students;',
    hasLiveOutput: false,
    explanation: [
      { code: 'DISTINCT', desc: 'Filters out duplicate rows from the result set.' },
      { code: 'Multiple columns', desc: 'DISTINCT applies to the COMBINATION of all selected columns.' },
      { code: 'COUNT(DISTINCT col)', desc: 'Counts the number of unique values in a column.' }
    ],
    realWorldExample: 'SELECT DISTINCT country FROM users; — Used to build a dropdown list of all countries your users are from, without duplicates.',
    commonMistakes: [
      { error: 'Expecting DISTINCT to work on one column when multiple are selected.', code: '', suffix: 'DISTINCT applies to ALL columns together, not just the first one.' }
    ],
    bestPractices: [
      'Use DISTINCT when you need a unique list of values',
      'For large tables, consider GROUP BY which is often more efficient',
      'Use COUNT(DISTINCT col) to count unique values'
    ],
    summary: [
      'DISTINCT removes duplicate rows from query results.',
      'It applies to the combination of all selected columns.',
      'COUNT(DISTINCT col) counts unique values in a column.'
    ],
    interviewQuestions: [
      'What is the difference between DISTINCT and GROUP BY?',
      'How does DISTINCT work with multiple columns?',
      'How do you count unique values in a column?'
    ],
    quickQuiz: {
      question: 'What does SELECT DISTINCT grade FROM students return?',
      options: ['All grades including duplicates', 'Only the first grade', 'Each grade only once', 'The most common grade'],
      answer: 'Each grade only once'
    }
  },

  'mysql_aliases': {
    isStructured: true,
    title: '25. Aliases (AS)',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'An alias gives a temporary, readable name to a column or table in a query. It only exists for the duration of that query.',
    whyUseIt: 'Aliases make output more readable, shorten long table names in JOINs, and are required when naming calculated columns.',
    syntax: 'SELECT column AS alias FROM table;\\nSELECT column alias FROM table; -- AS is optional\\nSELECT t.col FROM table_name AS t;',
    codeExample: '-- Column alias:\\nSELECT name AS "Student Name", age AS "Age (Years)"\\nFROM students;\\n\\n-- Calculated column (alias required):\\nSELECT name, salary * 12 AS "Annual Salary"\\nFROM employees;\\n\\n-- Table alias (shortens long names in JOINs):\\nSELECT s.name, c.course_name\\nFROM students AS s\\nJOIN courses AS c ON s.course_id = c.id;\\n\\n-- Alias in ORDER BY:\\nSELECT name, salary * 12 AS annual\\nFROM employees\\nORDER BY annual DESC;',
    hasLiveOutput: false,
    explanation: [
      { code: 'AS "Name"', desc: 'Renames a column in the output. Quote if name has spaces.' },
      { code: 'Table alias', desc: 'Shortens table names — critical in complex JOIN queries.' },
      { code: 'Calculated column', desc: 'Expressions like salary * 12 need an alias to have a name.' }
    ],
    realWorldExample: 'SELECT AVG(salary) AS "Average Salary", MAX(salary) AS "Highest Salary" FROM employees WHERE department = "Engineering";',
    commonMistakes: [
      { error: 'Using alias in WHERE clause.', code: '', suffix: 'Aliases cannot be used in WHERE (SQL evaluates WHERE before SELECT). Use HAVING or subqueries instead.' }
    ],
    bestPractices: [
      'Use aliases for all calculated columns',
      'Use table aliases in JOIN queries to keep code short',
      'Use quotes around aliases with spaces or special characters'
    ],
    summary: [
      'AS creates temporary column or table aliases.',
      'Aliases make results more readable and are required for calculated columns.',
      'Table aliases are essential for JOIN queries.'
    ],
    interviewQuestions: [
      'Can you use a column alias in a WHERE clause?',
      'What is the difference between a column alias and a table alias?',
      'Is the AS keyword mandatory?'
    ],
    quickQuiz: {
      question: 'Can you use a column alias in the WHERE clause?',
      options: ['Yes, always', 'No, WHERE is evaluated before SELECT aliases are created', 'Only if it is a number', 'Only with HAVING'],
      answer: 'No, WHERE is evaluated before SELECT aliases are created'
    }
  },

  // ─── MODULE 4: Filtering Data ─────────────────────────────────────────────────

  'mysql_and': {
    isStructured: true,
    title: '26. AND Operator',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The AND operator filters records where ALL specified conditions are true.',
    whyUseIt: 'AND lets you narrow down results to rows that match every condition you specify.',
    syntax: 'SELECT * FROM table WHERE condition1 AND condition2;',
    codeExample: '-- Students who are grade A AND under 21:\\nSELECT * FROM students\\nWHERE grade = \'A\' AND age < 21;\\n\\n-- Orders that are paid AND shipped AND above $100:\\nSELECT * FROM orders\\nWHERE status = \'paid\'\\n  AND is_shipped = TRUE\\n  AND total > 100;\\n\\n-- Three conditions:\\nSELECT * FROM employees\\nWHERE department = \'IT\'\\n  AND salary > 50000\\n  AND city = \'Hyderabad\';',
    hasLiveOutput: false,
    explanation: [
      { code: 'AND', desc: 'Returns a row only when ALL conditions are true.' },
      { code: 'Multiple AND', desc: 'Chain as many AND conditions as needed.' },
      { code: 'Truth table', desc: 'TRUE AND TRUE = TRUE. TRUE AND FALSE = FALSE. FALSE AND FALSE = FALSE.' }
    ],
    realWorldExample: 'SELECT * FROM flights WHERE from_city = "Mumbai" AND to_city = "Delhi" AND date = "2025-08-15" AND seats_available > 0;',
    commonMistakes: [
      { error: 'Mixing AND/OR without parentheses.', code: '', suffix: 'AND has higher precedence than OR. Use parentheses to control evaluation order.' }
    ],
    bestPractices: ['Use parentheses when combining AND with OR', 'Order conditions from most to least selective for readability'],
    summary: ['AND requires ALL conditions to be true.', 'Multiple AND conditions can be chained.', 'AND has higher precedence than OR.'],
    interviewQuestions: ['What is the difference between AND and OR?', 'What happens when you chain multiple AND conditions?'],
    quickQuiz: { question: 'AND returns a row when...', options: ['At least one condition is true', 'No conditions are true', 'ALL conditions are true', 'Exactly one condition is true'], answer: 'ALL conditions are true' }
  },

  'mysql_or': {
    isStructured: true,
    title: '27. OR Operator',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The OR operator filters records where AT LEAST ONE of the specified conditions is true.',
    whyUseIt: 'OR lets you retrieve rows that match any one of multiple criteria.',
    syntax: 'SELECT * FROM table WHERE condition1 OR condition2;',
    codeExample: '-- Students with grade A OR grade B:\\nSELECT * FROM students\\nWHERE grade = \'A\' OR grade = \'B\';\\n\\n-- From multiple cities:\\nSELECT * FROM employees\\nWHERE city = \'Hyderabad\' OR city = \'Chennai\' OR city = \'Pune\';\\n\\n-- Mix of AND and OR (use parentheses!):\\nSELECT * FROM products\\nWHERE (category = \'laptop\' OR category = \'phone\')\\n  AND price < 50000;',
    hasLiveOutput: false,
    explanation: [
      { code: 'OR', desc: 'Returns a row if ANY of the conditions is true.' },
      { code: 'Parentheses', desc: 'Always group OR conditions in parentheses when mixed with AND.' }
    ],
    realWorldExample: 'SELECT * FROM customers WHERE country = "India" OR country = "Nepal" OR country = "Sri Lanka"; — Gets all South Asian customers.',
    commonMistakes: [{ error: 'Not using parentheses with AND+OR.', code: '', suffix: 'WHERE a = 1 OR b = 2 AND c = 3 is NOT the same as WHERE (a=1 OR b=2) AND c=3.' }],
    bestPractices: ['Use IN() instead of multiple OR on the same column — much cleaner', 'Always wrap OR groups in parentheses when mixing with AND'],
    summary: ['OR returns rows where any condition is true.', 'Use parentheses to control evaluation order with AND.', 'Consider IN() as a cleaner alternative to multiple ORs.'],
    interviewQuestions: ['What is the difference between AND and OR?', 'How do you use OR efficiently?'],
    quickQuiz: { question: 'OR returns a row when...', options: ['All conditions are true', 'No conditions are true', 'At least one condition is true', 'Exactly two conditions are true'], answer: 'At least one condition is true' }
  },

  'mysql_not': {
    isStructured: true,
    title: '28. NOT Operator',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'NOT reverses the result of a condition. If a condition is true, NOT makes it false, and vice versa.',
    whyUseIt: 'NOT lets you filter out records that match a condition, rather than finding ones that do.',
    syntax: 'SELECT * FROM table WHERE NOT condition;\\nSELECT * FROM table WHERE col NOT IN (val1, val2);\\nSELECT * FROM table WHERE col NOT LIKE \'pattern\';',
    codeExample: '-- Students NOT in grade F:\\nSELECT * FROM students WHERE NOT grade = \'F\';\\n-- Equivalent to:\\nSELECT * FROM students WHERE grade != \'F\';\\n\\n-- NOT IN:\\nSELECT * FROM employees\\nWHERE department NOT IN (\'HR\', \'Marketing\');\\n\\n-- NOT LIKE:\\nSELECT * FROM products\\nWHERE name NOT LIKE \'%Samsung%\';\\n\\n-- NOT NULL:\\nSELECT * FROM students WHERE email IS NOT NULL;',
    hasLiveOutput: false,
    explanation: [
      { code: 'NOT', desc: 'Negates the condition that follows it.' },
      { code: 'NOT IN', desc: 'Excludes rows matching the listed values.' },
      { code: 'NOT LIKE', desc: 'Excludes rows that match the pattern.' },
      { code: 'IS NOT NULL', desc: 'Returns rows where the column has a value.' }
    ],
    realWorldExample: 'SELECT * FROM orders WHERE status NOT IN ("delivered", "cancelled"); — Gets all active/pending orders.',
    commonMistakes: [{ error: 'Using NOT NULL instead of IS NOT NULL.', code: 'WHERE email IS NOT NULL', suffix: 'NULL comparisons require IS NOT NULL, not != NULL.' }],
    bestPractices: ['Use != for simple negation', 'Use NOT IN for excluding multiple values', 'Use IS NOT NULL for null checks'],
    summary: ['NOT reverses a condition.', 'NOT IN excludes multiple values efficiently.', 'IS NOT NULL checks for non-empty columns.'],
    interviewQuestions: ['What is the difference between != and NOT?', 'How do you check for non-null values?'],
    quickQuiz: { question: 'Which is the correct way to check for non-null values?', options: ['WHERE col != NULL', 'WHERE col NOT NULL', 'WHERE col IS NOT NULL', 'WHERE col <> NULL'], answer: 'WHERE col IS NOT NULL' }
  },

  'mysql_between': {
    isStructured: true,
    title: '29. BETWEEN',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'BETWEEN selects rows where a value is within a specified range. It is inclusive on both ends.',
    whyUseIt: 'BETWEEN makes range queries much more readable than using AND with >= and <=.',
    syntax: 'SELECT * FROM table WHERE col BETWEEN val1 AND val2;\\nSELECT * FROM table WHERE col NOT BETWEEN val1 AND val2;',
    codeExample: '-- Students aged 18 to 21:\\nSELECT * FROM students WHERE age BETWEEN 18 AND 21;\\n-- Same as: WHERE age >= 18 AND age <= 21\\n\\n-- Products priced 1000 to 5000:\\nSELECT * FROM products WHERE price BETWEEN 1000 AND 5000;\\n\\n-- Date range:\\nSELECT * FROM orders\\nWHERE order_date BETWEEN \'2025-01-01\' AND \'2025-12-31\';\\n\\n-- NOT BETWEEN:\\nSELECT * FROM students WHERE age NOT BETWEEN 18 AND 21;',
    hasLiveOutput: false,
    explanation: [
      { code: 'BETWEEN a AND b', desc: 'Returns rows where value is >= a AND <= b (inclusive both ends).' },
      { code: 'Date BETWEEN', desc: 'Works with DATE, DATETIME, and TIMESTAMP columns.' },
      { code: 'NOT BETWEEN', desc: 'Returns rows outside the specified range.' }
    ],
    realWorldExample: 'SELECT * FROM flights WHERE price BETWEEN 5000 AND 15000 AND travel_date BETWEEN "2025-12-20" AND "2025-12-31"; — Holiday flight search.',
    commonMistakes: [{ error: 'Putting larger value first.', code: 'BETWEEN 21 AND 18', suffix: 'BETWEEN requires the smaller value first. 21 AND 18 returns 0 rows.' }],
    bestPractices: ['Use BETWEEN for date ranges — much cleaner than >= AND <=', 'Remember BETWEEN is inclusive on both ends'],
    summary: ['BETWEEN selects values within an inclusive range.', 'Works with numbers, strings, and dates.', 'NOT BETWEEN excludes the range.'],
    interviewQuestions: ['Is BETWEEN inclusive or exclusive?', 'How does BETWEEN work with dates?'],
    quickQuiz: { question: 'Is BETWEEN inclusive or exclusive of the boundary values?', options: ['Exclusive on both ends', 'Inclusive on left only', 'Inclusive on both ends', 'Exclusive on right only'], answer: 'Inclusive on both ends' }
  },

  'mysql_in': {
    isStructured: true,
    title: '30. IN Operator',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'IN allows you to match a column against a list of values. It is a cleaner alternative to multiple OR conditions on the same column.',
    whyUseIt: 'IN is more readable and sometimes faster than writing multiple OR conditions.',
    syntax: 'SELECT * FROM table WHERE col IN (val1, val2, val3);\\nSELECT * FROM table WHERE col NOT IN (val1, val2);',
    codeExample: '-- Instead of:\\nSELECT * FROM students WHERE grade = \'A\' OR grade = \'B\' OR grade = \'C\';\\n\\n-- Use IN:\\nSELECT * FROM students WHERE grade IN (\'A\', \'B\', \'C\');\\n\\n-- NOT IN:\\nSELECT * FROM employees WHERE department NOT IN (\'HR\', \'Admin\');\\n\\n-- IN with subquery (advanced):\\nSELECT * FROM students\\nWHERE id IN (SELECT student_id FROM enrollments WHERE course = \'MySQL\');',
    hasLiveOutput: false,
    explanation: [
      { code: 'IN (v1, v2)', desc: 'Matches if the column value equals any of the listed values.' },
      { code: 'NOT IN', desc: 'Matches if the column value does NOT equal any of the listed values.' },
      { code: 'IN with subquery', desc: 'Use a SELECT inside IN to dynamically generate the list.' }
    ],
    realWorldExample: 'SELECT * FROM products WHERE brand IN ("Apple", "Samsung", "OnePlus"); — Filter by multiple brands.',
    commonMistakes: [{ error: 'Using NOT IN with NULL values in the list.', code: '', suffix: 'NOT IN returns no rows if the list contains NULL. Use IS NOT NULL separately.' }],
    bestPractices: ['Use IN instead of multiple OR conditions', 'Combine with subqueries for dynamic filtering', 'Avoid NOT IN with nullable columns'],
    summary: ['IN matches a column against a list of values.', 'Cleaner and often more readable than multiple OR conditions.', 'NOT IN excludes listed values.'],
    interviewQuestions: ['What is the difference between IN and OR?', 'What problem can NOT IN cause with NULL values?'],
    quickQuiz: { question: 'Which is cleaner: multiple OR conditions or IN?', options: ['Multiple OR', 'IN operator', 'They are identical', 'BETWEEN'], answer: 'IN operator' }
  },

  'mysql_like': {
    isStructured: true,
    title: '31. LIKE Operator',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'LIKE is used in a WHERE clause to search for a specified pattern in a column using wildcard characters.',
    whyUseIt: 'LIKE enables flexible text searching when you don\'t know the exact value — like searching for all emails from Gmail.',
    syntax: 'SELECT * FROM table WHERE col LIKE \'pattern\';\\n-- % matches any sequence of characters\\n-- _ matches exactly one character',
    codeExample: '-- Names starting with "Ra":\\nSELECT * FROM students WHERE name LIKE \'Ra%\';\\n\\n-- Names ending with "ar":\\nSELECT * FROM students WHERE name LIKE \'%ar\';\\n\\n-- Names containing "avi":\\nSELECT * FROM students WHERE name LIKE \'%avi%\';\\n\\n-- Exactly 4-character names:\\nSELECT * FROM students WHERE name LIKE \'____\'; -- four underscores\\n\\n-- Gmail users:\\nSELECT * FROM users WHERE email LIKE \'%@gmail.com\';\\n\\n-- NOT LIKE (exclude pattern):\\nSELECT * FROM products WHERE name NOT LIKE \'%refurbished%\';',
    hasLiveOutput: false,
    explanation: [
      { code: '%', desc: 'Wildcard: matches zero or more characters.' },
      { code: '_', desc: 'Wildcard: matches exactly one character.' },
      { code: 'NOT LIKE', desc: 'Returns rows that do NOT match the pattern.' }
    ],
    realWorldExample: 'SELECT * FROM customers WHERE phone LIKE \'+91%\'; — Find all customers with Indian phone numbers.',
    commonMistakes: [{ error: 'LIKE is case-insensitive by default in MySQL.', code: '', suffix: 'Use BINARY LIKE for case-sensitive matching.' }],
    bestPractices: ['Avoid leading % (e.g., LIKE \'%word\') — it prevents index usage', 'Use FULLTEXT indexes for heavy text searching', 'Use LIKE \'word%\' (no leading %) whenever possible for performance'],
    summary: ['LIKE searches for patterns using % (any chars) and _ (one char).', 'NOT LIKE excludes matching patterns.', 'Leading % disables index usage — use sparingly.'],
    interviewQuestions: ['What is the difference between % and _ in LIKE?', 'Why is LIKE \'%word\' slower than LIKE \'word%\'?'],
    quickQuiz: { question: 'Which LIKE pattern matches names that START with "Ra"?', options: ['LIKE \'%Ra\'', 'LIKE \'Ra%\'', 'LIKE \'_Ra_\'', 'LIKE \'Ra_\''], answer: 'LIKE \'Ra%\'' }
  },

  'mysql_wildcards': {
    isStructured: true,
    title: '32. Wildcards',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Wildcards are special characters used with LIKE to perform pattern matching. MySQL uses % (any chars) and _ (one char).',
    whyUseIt: 'Wildcards give you flexibility to search for partial matches, patterns, and sequences of unknown characters.',
    syntax: '% → matches zero or more characters\\n_ → matches exactly one character',
    codeExample: '-- % Examples:\\nLIKE \'A%\'      -- starts with A\\nLIKE \'%a\'      -- ends with a\\nLIKE \'%SQL%\'   -- contains SQL anywhere\\nLIKE \'%\'       -- matches everything\\n\\n-- _ Examples:\\nLIKE \'_av%\'    -- second+third char are "av" (e.g., Ravi, Dav)\\nLIKE \'___\'     -- exactly 3 characters\\nLIKE \'R___i\'   -- R, then 3 any chars, then i\\n\\n-- Real use:\\nSELECT * FROM files WHERE filename LIKE \'%.pdf\';\\nSELECT * FROM codes WHERE pin LIKE \'50___\'; -- 5-digit codes starting with 50',
    hasLiveOutput: false,
    explanation: [
      { code: '%', desc: 'Matches any sequence of characters (including empty).' },
      { code: '_', desc: 'Matches exactly one character — any character.' },
      { code: 'Escape wildcard', desc: 'To match literal % or _, use ESCAPE: LIKE \'50\\%\' ESCAPE \'\\\\\'' }
    ],
    realWorldExample: 'SELECT * FROM documents WHERE filename LIKE \'%.csv\'; — Find all CSV files uploaded to the system.',
    commonMistakes: [{ error: 'Forgetting _ matches exactly one character.', code: '', suffix: 'LIKE \'R_vi\' matches "Ravi" but NOT "Raavi" or "Rvi".' }],
    bestPractices: ['Use specific patterns to avoid unnecessary matches', 'Document your LIKE patterns with comments', 'Consider REGEXP for complex pattern matching'],
    summary: ['% matches any number of characters.', '_ matches exactly one character.', 'Combine them for precise pattern searches.'],
    interviewQuestions: ['What are SQL wildcards?', 'How do you search for a literal % character in LIKE?'],
    quickQuiz: { question: 'Which wildcard in MySQL matches exactly ONE character?', options: ['%', '*', '_', '?'], answer: '_' }
  },

  'mysql_is_null': {
    isStructured: true,
    title: '33. IS NULL',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'IS NULL checks whether a column value is NULL (empty/missing). You cannot use = NULL because NULL is not equal to anything, including itself.',
    whyUseIt: 'NULL represents missing data. IS NULL lets you find incomplete records and IS NOT NULL finds complete ones.',
    syntax: 'SELECT * FROM table WHERE col IS NULL;\\nSELECT * FROM table WHERE col IS NOT NULL;\\nSELECT IFNULL(col, \'default\') FROM table;',
    codeExample: '-- Find students with no email (NULL):\\nSELECT * FROM students WHERE email IS NULL;\\n\\n-- Find students who DO have an email:\\nSELECT * FROM students WHERE email IS NOT NULL;\\n\\n-- Replace NULL with a default in output:\\nSELECT name, IFNULL(phone, \'No Phone\') AS contact\\nFROM students;\\n\\n-- Count NULLs in a column:\\nSELECT COUNT(*) - COUNT(email) AS missing_emails\\nFROM students;\\n\\n-- Update NULL values:\\nUPDATE students SET grade = \'N/A\' WHERE grade IS NULL;',
    hasLiveOutput: false,
    explanation: [
      { code: 'IS NULL', desc: 'Returns rows where the column has no value (NULL).' },
      { code: 'IS NOT NULL', desc: 'Returns rows where the column has a value.' },
      { code: 'IFNULL(col, default)', desc: 'Returns the column value, or a default if it is NULL.' },
      { code: '= NULL (wrong!)', desc: 'Never use = NULL. NULL = NULL is FALSE in SQL. Always use IS NULL.' }
    ],
    realWorldExample: 'SELECT * FROM orders WHERE shipped_date IS NULL; — Find all orders that have not been shipped yet.',
    commonMistakes: [{ error: 'Using = NULL instead of IS NULL.', code: 'WHERE email IS NULL', suffix: 'WHERE email = NULL will always return 0 rows!' }],
    bestPractices: ['Always use IS NULL / IS NOT NULL for null checks', 'Use IFNULL() or COALESCE() to handle NULLs in output', 'Design tables to avoid unnecessary NULLs with NOT NULL constraints'],
    summary: ['IS NULL finds rows with missing/empty values.', 'IS NOT NULL finds rows with actual values.', 'Never use = NULL — it always returns no results.'],
    interviewQuestions: ['Why can\'t you use = NULL in SQL?', 'What is the difference between IS NULL and IFNULL?', 'How do you count NULL values in a column?'],
    quickQuiz: { question: 'Which is the correct way to check for NULL in MySQL?', options: ['WHERE col = NULL', 'WHERE col == NULL', 'WHERE col IS NULL', 'WHERE col EQUALS NULL'], answer: 'WHERE col IS NULL' }
  },

  'mysql_is_not_null': {
    isStructured: true,
    title: '34. IS NOT NULL',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'IS NOT NULL returns rows where a column contains an actual value (not NULL/empty).',
    whyUseIt: 'Use IS NOT NULL to filter your results to only complete, valid records.',
    syntax: 'SELECT * FROM table WHERE col IS NOT NULL;\\nSELECT COALESCE(col, \'default\') FROM table;',
    codeExample: '-- Find students who have submitted their email:\\nSELECT * FROM students WHERE email IS NOT NULL;\\n\\n-- Find delivered orders:\\nSELECT * FROM orders WHERE delivered_at IS NOT NULL;\\n\\n-- COALESCE: use first non-null value:\\nSELECT name,\\n  COALESCE(mobile, phone, email, \'No Contact\') AS contact\\nFROM students;\\n\\n-- Count non-null values:\\nSELECT COUNT(email) AS students_with_email FROM students;\\n-- COUNT() automatically ignores NULLs!',
    hasLiveOutput: false,
    explanation: [
      { code: 'IS NOT NULL', desc: 'Returns only rows where the column has an actual value.' },
      { code: 'COALESCE(a,b,c)', desc: 'Returns the first non-NULL value from a list of columns.' },
      { code: 'COUNT(col)', desc: 'Counts non-NULL values only. COUNT(*) counts all rows.' }
    ],
    realWorldExample: 'SELECT * FROM employees WHERE manager_id IS NOT NULL; — Find all employees who have a manager assigned (not top-level).',
    commonMistakes: [{ error: 'Using COUNT(*) vs COUNT(col).', code: '', suffix: 'COUNT(*) counts all rows. COUNT(email) skips NULLs.' }],
    bestPractices: ['Use COALESCE for multiple fallback values', 'Understand that COUNT(col) ignores NULLs by design'],
    summary: ['IS NOT NULL returns rows with actual values.', 'COALESCE returns the first non-NULL from a list.', 'COUNT(col) automatically skips NULL values.'],
    interviewQuestions: ['What is the difference between COUNT(*) and COUNT(column)?', 'What does COALESCE do?'],
    quickQuiz: { question: 'What does COUNT(email) return compared to COUNT(*)?', options: ['They are identical', 'COUNT(email) skips NULL values; COUNT(*) counts all rows', 'COUNT(*) is slower', 'COUNT(email) is always larger'], answer: 'COUNT(email) skips NULL values; COUNT(*) counts all rows' }
  }
};
