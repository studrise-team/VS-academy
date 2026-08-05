// Batch 5: Modules 9-13 (Advanced SQL + DB Design + Applications + Projects + Interview Prep) — Topics 63-100
export const mysqlContentBatch5 = {

  // ─── MODULE 9: Advanced SQL ───────────────────────────────────────────────────

  'mysql_subqueries': {
    isStructured: true, title: '63. Subqueries', difficulty: 'Intermediate', readingTime: '5 min',
    definition: 'A subquery is a SELECT query nested inside another SQL statement. It is evaluated first and its result is used by the outer query.',
    whyUseIt: 'Subqueries let you use the result of one query as input to another — making complex filtering and lookups possible.',
    syntax: 'SELECT col FROM table WHERE col IN (SELECT col FROM table2);',
    codeExample: '-- Find students who scored above average:\\nSELECT name, score FROM students\\nWHERE score > (SELECT AVG(score) FROM students);\\n\\n-- Find customers who placed orders:\\nSELECT * FROM customers\\nWHERE id IN (SELECT DISTINCT customer_id FROM orders);\\n\\n-- Subquery in SELECT (scalar):\\nSELECT name, salary,\\n  (SELECT AVG(salary) FROM employees) AS company_avg\\nFROM employees;\\n\\n-- Subquery in FROM (derived table):\\nSELECT dept, avg_sal FROM (\\n  SELECT department AS dept, AVG(salary) AS avg_sal\\n  FROM employees GROUP BY department\\n) AS dept_summary\\nWHERE avg_sal > 70000;',
    hasLiveOutput: false,
    explanation: [
      { code: 'Scalar subquery', desc: 'Returns a single value. Used in SELECT or WHERE.' },
      { code: 'IN subquery', desc: 'Returns a list of values for the IN operator.' },
      { code: 'Derived table', desc: 'Subquery in FROM clause acts as a temporary table.' }
    ],
    realWorldExample: 'SELECT * FROM products WHERE price > (SELECT AVG(price) FROM products WHERE category = "electronics"); — Above-average priced electronics.',
    commonMistakes: [{ error: 'Subquery returns multiple rows when only one is expected.', code: '', suffix: 'Use IN for multi-row subqueries. Use = only for scalar (single-value) subqueries.' }],
    bestPractices: ['Use JOINs when possible — often more efficient than subqueries', 'Use EXISTS instead of IN for large result sets'],
    summary: ['Subqueries are SELECT statements inside other SQL statements.', 'They run first and feed results to the outer query.', 'Can be scalar, list, or derived table subqueries.'],
    interviewQuestions: ['What is a subquery?', 'What is the difference between a subquery and a JOIN?', 'What is a correlated subquery?'],
    quickQuiz: { question: 'A subquery that returns a single value is called a...', options: ['List subquery', 'Derived table', 'Scalar subquery', 'Nested JOIN'], answer: 'Scalar subquery' }
  },

  'mysql_nested_queries': {
    isStructured: true, title: '64. Nested Queries', difficulty: 'Intermediate', readingTime: '4 min',
    definition: 'Nested queries are subqueries inside other subqueries. They allow complex multi-level data retrieval.',
    whyUseIt: 'Some data relationships require multiple layers of filtering that cannot be done in a single SELECT.',
    syntax: 'SELECT * FROM t WHERE col IN\\n  (SELECT col FROM t2 WHERE col IN\\n    (SELECT col FROM t3 WHERE condition));',
    codeExample: '-- Find students in the top-performing department:\\nSELECT name FROM students\\nWHERE dept_id IN (\\n  SELECT dept_id FROM departments\\n  WHERE avg_grade IN (\\n    SELECT MAX(avg_grade)\\n    FROM (\\n      SELECT dept_id, AVG(score) AS avg_grade\\n      FROM students GROUP BY dept_id\\n    ) AS dept_scores\\n  )\\n);\\n\\n-- Second highest salary (classic nested query):\\nSELECT MAX(salary) AS second_highest\\nFROM employees\\nWHERE salary < (SELECT MAX(salary) FROM employees);',
    hasLiveOutput: false,
    explanation: [
      { code: 'Nested subquery', desc: 'A subquery that itself contains another subquery.' },
      { code: 'Evaluation order', desc: 'Innermost query runs first, result passed outward.' },
      { code: 'Readability', desc: 'Deep nesting is hard to read. Consider CTEs (WITH clause) as alternative.' }
    ],
    realWorldExample: 'SELECT * FROM products WHERE price = (SELECT MAX(price) FROM products WHERE price < (SELECT MAX(price) FROM products)); — Third highest price.',
    commonMistakes: [{ error: 'Over-nesting subqueries.', code: '', suffix: 'More than 2 levels is hard to debug. Refactor with CTEs or temp tables.' }],
    bestPractices: ['Limit nesting to 2-3 levels for readability', 'Use MySQL CTEs (WITH clause in MySQL 8+) for cleaner nested queries'],
    summary: ['Nested queries are subqueries inside subqueries.', 'Innermost query runs first.', 'Keep nesting shallow for maintainability.'],
    interviewQuestions: ['What is a nested query?', 'How do you find the second highest value using a nested query?'],
    quickQuiz: { question: 'In a nested query, which subquery runs first?', options: ['Outermost', 'Innermost', 'All simultaneously', 'Random order'], answer: 'Innermost' }
  },

  'mysql_union': {
    isStructured: true, title: '65. UNION', difficulty: 'Intermediate', readingTime: '4 min',
    definition: 'UNION combines the results of two or more SELECT statements into one result set. It removes duplicate rows automatically.',
    whyUseIt: 'UNION merges data from different tables or queries that have the same structure into one combined output.',
    syntax: 'SELECT col FROM table1\\nUNION\\nSELECT col FROM table2;',
    codeExample: '-- Combine teachers and students into one list:\\nSELECT name, \'Student\' AS role FROM students\\nUNION\\nSELECT name, \'Teacher\' AS role FROM teachers;\\n\\n-- Alumni from different batches:\\nSELECT name, email FROM batch_2023\\nUNION\\nSELECT name, email FROM batch_2024;\\n-- Duplicates (same person in both) are removed!\\n\\n-- UNION removes duplicates (UNION ALL keeps them)\\nSELECT city FROM customers\\nUNION\\nSELECT city FROM suppliers\\nORDER BY city;  -- ORDER BY applies to final result',
    hasLiveOutput: false,
    explanation: [
      { code: 'UNION', desc: 'Combines results and removes duplicate rows.' },
      { code: 'Same columns', desc: 'Both SELECT statements must have the same number of columns with compatible types.' },
      { code: 'ORDER BY', desc: 'Add ORDER BY at the very end (after the last SELECT) to sort the combined results.' }
    ],
    realWorldExample: 'SELECT city FROM customers UNION SELECT city FROM warehouse_locations; — Get all cities where the business has a presence.',
    commonMistakes: [{ error: 'Different number of columns in UNION queries.', code: '', suffix: 'Both SELECT statements must return the same number of columns.' }],
    bestPractices: ['Column names/aliases from the FIRST SELECT become the output column names', 'Use UNION ALL when duplicates are acceptable — it is faster'],
    summary: ['UNION combines result sets from multiple queries.', 'Automatically removes duplicate rows.', 'Both queries must have the same column count and compatible types.'],
    interviewQuestions: ['What is the difference between UNION and UNION ALL?', 'What rules must both queries in a UNION satisfy?'],
    quickQuiz: { question: 'What does UNION do with duplicate rows?', options: ['Keeps all duplicates', 'Removes duplicates', 'Returns an error', 'Marks them with NULL'], answer: 'Removes duplicates' }
  },

  'mysql_union_all': {
    isStructured: true, title: '66. UNION ALL', difficulty: 'Intermediate', readingTime: '3 min',
    definition: 'UNION ALL combines results like UNION, but keeps ALL rows including duplicates. It is faster than UNION because it skips the duplicate-removal step.',
    whyUseIt: 'Use UNION ALL when you know there are no duplicates, or when duplicates are intentional and you want better performance.',
    syntax: 'SELECT col FROM table1\\nUNION ALL\\nSELECT col FROM table2;',
    codeExample: '-- Keep all transactions (duplicates allowed):\\nSELECT amount, \'debit\' AS type FROM debits\\nUNION ALL\\nSELECT amount, \'credit\' AS type FROM credits\\nORDER BY amount DESC;\\n\\n-- Performance comparison:\\n-- UNION:     Sorts + removes duplicates (slower)\\n-- UNION ALL: Just combines    (faster, no dedup step)\\n\\n-- When duplicates are intentional:\\nSELECT product_id FROM morning_orders\\nUNION ALL\\nSELECT product_id FROM evening_orders;\\n-- Same product ordered twice = kept twice (correct)',
    hasLiveOutput: false,
    explanation: [
      { code: 'UNION ALL', desc: 'Combines all rows from both queries, keeping duplicates.' },
      { code: 'Faster', desc: 'No deduplication step — better performance on large datasets.' },
      { code: 'Use case', desc: 'Audit logs, transaction records — where every row matters even if duplicated.' }
    ],
    realWorldExample: 'SELECT * FROM sales_jan UNION ALL SELECT * FROM sales_feb; — Combine two months of sales data for a full report, keeping all duplicate-amount transactions.',
    commonMistakes: [{ error: 'Using UNION ALL when you actually need unique results.', code: '', suffix: 'UNION ALL keeps all duplicates. Use UNION if you want unique rows.' }],
    bestPractices: ['Default to UNION ALL unless you specifically need deduplication', 'UNION ALL is significantly faster on large datasets'],
    summary: ['UNION ALL keeps all rows including duplicates.', 'Faster than UNION — no deduplication step.', 'Use when duplicates are intentional or tables are known to be distinct.'],
    interviewQuestions: ['When would you use UNION ALL instead of UNION?', 'Which is faster: UNION or UNION ALL?'],
    quickQuiz: { question: 'Which is faster: UNION or UNION ALL?', options: ['UNION', 'UNION ALL', 'They are the same speed', 'Depends on the table'], answer: 'UNION ALL' }
  },

  'mysql_views': {
    isStructured: true, title: '67. Views', difficulty: 'Intermediate', readingTime: '5 min',
    definition: 'A VIEW is a saved SELECT query that acts like a virtual table. It does not store data itself — it retrieves live data from underlying tables each time it is queried.',
    whyUseIt: 'Views simplify complex queries, improve security by exposing only certain columns, and create reusable query templates.',
    syntax: 'CREATE VIEW view_name AS SELECT ...;\\nSELECT * FROM view_name;\\nDROP VIEW view_name;',
    codeExample: '-- Create a view for student summary:\\nCREATE VIEW student_summary AS\\nSELECT s.name, s.email, c.course_name, e.grade\\nFROM students s\\nJOIN enrollments e ON s.id = e.student_id\\nJOIN courses c ON e.course_id = c.id;\\n\\n-- Now use it like a table:\\nSELECT * FROM student_summary WHERE grade = \'A\';\\n\\n-- Security: expose only safe columns\\nCREATE VIEW public_employees AS\\nSELECT id, name, department FROM employees;\\n-- Salary and personal info hidden from this view\\n\\n-- Update a view:\\nCREATE OR REPLACE VIEW student_summary AS\\nSELECT s.name, COUNT(e.course_id) AS course_count\\nFROM students s LEFT JOIN enrollments e ON s.id = e.student_id\\nGROUP BY s.id, s.name;',
    hasLiveOutput: false,
    explanation: [
      { code: 'CREATE VIEW', desc: 'Saves a SELECT query as a named virtual table.' },
      { code: 'Virtual table', desc: 'No data is stored — view fetches live data on every query.' },
      { code: 'Security', desc: 'Grant access to a view instead of the underlying table to hide sensitive columns.' }
    ],
    realWorldExample: 'Netflix shows different catalogs per country. A view per region (CREATE VIEW india_catalog AS SELECT...) makes this clean.',
    commonMistakes: [{ error: 'Thinking views store a copy of data.', code: '', suffix: 'Views are virtual. They re-run the query every time. No cached data.' }],
    bestPractices: ['Use views to hide complexity from application developers', 'Use views for security — never expose raw tables to all users', 'Use CREATE OR REPLACE VIEW instead of DROP + CREATE'],
    summary: ['A VIEW is a saved SELECT query acting as a virtual table.', 'Does not store data — fetches live data every time.', 'Used for security, simplification, and reusability.'],
    interviewQuestions: ['What is a VIEW in MySQL?', 'Does a VIEW store data?', 'How do you update a view definition?'],
    quickQuiz: { question: 'Does a MySQL VIEW store its own copy of data?', options: ['Yes, it caches data', 'No, it fetches live data every time', 'Yes, updated daily', 'Only if explicitly cached'], answer: 'No, it fetches live data every time' }
  },

  'mysql_indexes': {
    isStructured: true, title: '68. Indexes', difficulty: 'Intermediate', readingTime: '5 min',
    definition: 'An INDEX is a data structure that speeds up data retrieval operations on a table at the cost of additional storage and slower writes.',
    whyUseIt: 'Without indexes, MySQL scans every row in a table (full table scan). Indexes let MySQL find rows instantly, like a book index.',
    syntax: 'CREATE INDEX idx_name ON table(col);\\nCREATE UNIQUE INDEX idx ON table(col);\\nDROP INDEX idx_name ON table;',
    codeExample: '-- Create an index on email for fast lookups:\\nCREATE INDEX idx_email ON users(email);\\n\\n-- Composite index (covers both columns):\\nCREATE INDEX idx_name_grade ON students(name, grade);\\n\\n-- Check if indexes exist:\\nSHOW INDEX FROM students;\\n\\n-- See if a query uses the index:\\nEXPLAIN SELECT * FROM users WHERE email = \'ravi@gmail.com\';\\n-- Look for: key = idx_email (index is being used)\\n\\n-- Remove unused index:\\nDROP INDEX idx_email ON users;\\n\\n-- PRIMARY KEY and UNIQUE automatically create indexes!',
    hasLiveOutput: false,
    explanation: [
      { code: 'Index', desc: 'Like a book index — MySQL jumps directly to the row instead of scanning all.' },
      { code: 'EXPLAIN', desc: 'Shows the query execution plan — whether an index is being used.' },
      { code: 'Trade-off', desc: 'Indexes speed up SELECT but slow down INSERT/UPDATE/DELETE slightly.' }
    ],
    realWorldExample: 'Without index on a 50-million row table: SELECT takes 30 seconds. With index: same query takes 0.001 seconds. This is the difference between a fast and slow app.',
    commonMistakes: [{ error: 'Over-indexing every column.', code: '', suffix: 'Too many indexes slow down writes. Index only frequently queried columns.' }],
    bestPractices: ['Index columns used in WHERE, JOIN ON, and ORDER BY', 'Use EXPLAIN to verify indexes are being used', 'Index foreign key columns to speed up JOINs'],
    summary: ['Indexes speed up SELECT queries dramatically.', 'They slow down writes slightly — use wisely.', 'Use EXPLAIN to verify your queries are using indexes.'],
    interviewQuestions: ['What is a database index?', 'What is the difference between clustered and non-clustered indexes?', 'When should you NOT add an index?'],
    quickQuiz: { question: 'What is the trade-off of adding an index?', options: ['Slower SELECT queries', 'Slower INSERT/UPDATE/DELETE operations', 'More NULL values', 'Fewer JOIN options'], answer: 'Slower INSERT/UPDATE/DELETE operations' }
  },

  'mysql_stored_procedures': {
    isStructured: true, title: '69. Stored Procedures', difficulty: 'Advanced', readingTime: '6 min',
    definition: 'A Stored Procedure is a saved block of SQL code that can be executed by name. It accepts parameters, contains logic (IF/LOOP), and can return results.',
    whyUseIt: 'Stored procedures reduce repetitive SQL writing, improve performance (pre-compiled), and centralize business logic in the database.',
    syntax: 'CREATE PROCEDURE proc_name(params)\\nBEGIN\\n  -- SQL statements\\nEND;\\n\\nCALL proc_name(args);',
    codeExample: '-- Create a stored procedure:\\nDELIMITER //\\nCREATE PROCEDURE GetStudentsByGrade(IN p_grade CHAR(1))\\nBEGIN\\n  SELECT name, email, score\\n  FROM students\\n  WHERE grade = p_grade\\n  ORDER BY score DESC;\\nEND //\\nDELIMITER ;\\n\\n-- Call the procedure:\\nCALL GetStudentsByGrade(\'A\');\\nCALL GetStudentsByGrade(\'B\');\\n\\n-- Procedure with OUT parameter:\\nDELIMITER //\\nCREATE PROCEDURE CountStudents(IN p_grade CHAR(1), OUT p_count INT)\\nBEGIN\\n  SELECT COUNT(*) INTO p_count\\n  FROM students WHERE grade = p_grade;\\nEND //\\nDELIMITER ;\\n\\nCALL CountStudents(\'A\', @total);\\nSELECT @total;',
    hasLiveOutput: false,
    explanation: [
      { code: 'DELIMITER //', desc: 'Changes the statement delimiter so the procedure body can use semicolons internally.' },
      { code: 'IN parameter', desc: 'Input value passed when calling the procedure.' },
      { code: 'OUT parameter', desc: 'Output value set by the procedure, retrievable after calling.' },
      { code: 'CALL', desc: 'Executes the stored procedure by name.' }
    ],
    realWorldExample: 'Banking systems use stored procedures for all transactions — ensuring consistent validation, logging, and rollback logic runs every time.',
    commonMistakes: [{ error: 'Forgetting to change DELIMITER before creating a procedure.', code: '', suffix: 'Without DELIMITER //, the first ; inside the procedure ends it prematurely.' }],
    bestPractices: ['Use stored procedures for repeated complex business logic', 'Always use DELIMITER when creating procedures in MySQL CLI', 'Name procedures clearly: GetUserById, UpdateOrderStatus'],
    summary: ['Stored procedures are saved, reusable SQL code blocks.', 'Accept IN and OUT parameters.', 'Called with CALL procedure_name(args).'],
    interviewQuestions: ['What is a stored procedure?', 'What is the difference between a stored procedure and a function?', 'What are IN and OUT parameters?'],
    quickQuiz: { question: 'Which statement executes a stored procedure?', options: ['RUN', 'EXECUTE', 'CALL', 'START'], answer: 'CALL' }
  },

  'mysql_functions': {
    isStructured: true, title: '70. Functions', difficulty: 'Advanced', readingTime: '5 min',
    definition: 'A MySQL FUNCTION is like a stored procedure but MUST return a single value. It can be used directly inside SELECT, WHERE, and other SQL clauses.',
    whyUseIt: 'Functions encapsulate calculation logic and can be reused directly in SQL expressions, unlike procedures.',
    syntax: 'CREATE FUNCTION func_name(params) RETURNS datatype\\nDETERMINISTIC\\nBEGIN\\n  RETURN value;\\nEND;',
    codeExample: 'DELIMITER //\\nCREATE FUNCTION CalculateBonus(salary DECIMAL(10,2))\\nRETURNS DECIMAL(10,2)\\nDETERMINISTIC\\nBEGIN\\n  DECLARE bonus DECIMAL(10,2);\\n  IF salary > 100000 THEN\\n    SET bonus = salary * 0.20;\\n  ELSEIF salary > 60000 THEN\\n    SET bonus = salary * 0.15;\\n  ELSE\\n    SET bonus = salary * 0.10;\\n  END IF;\\n  RETURN bonus;\\nEND //\\nDELIMITER ;\\n\\n-- Use in a query just like a built-in function:\\nSELECT name, salary, CalculateBonus(salary) AS bonus\\nFROM employees;',
    hasLiveOutput: false,
    explanation: [
      { code: 'RETURNS datatype', desc: 'Declares what type the function returns.' },
      { code: 'DETERMINISTIC', desc: 'Same inputs always produce the same output. Required for performance.' },
      { code: 'RETURN', desc: 'Returns a value from the function.' },
      { code: 'DECLARE', desc: 'Declares a local variable inside the function.' }
    ],
    realWorldExample: 'CREATE FUNCTION GetAge(dob DATE) RETURNS INT — Calculate age from date of birth and use it in any SELECT.',
    commonMistakes: [{ error: 'Functions cannot modify data (no INSERT/UPDATE/DELETE inside).', code: '', suffix: 'Use stored procedures for data-modifying operations.' }],
    bestPractices: ['Use functions for calculations and transformations', 'Mark as DETERMINISTIC when output only depends on input', 'Use procedures for side effects (data changes)'],
    summary: ['Functions must return a single value.', 'Can be used directly in SQL expressions (SELECT, WHERE).', 'DETERMINISTIC keyword is required for most functions.'],
    interviewQuestions: ['What is the difference between a function and a stored procedure?', 'Can a function modify data in MySQL?', 'What does DETERMINISTIC mean?'],
    quickQuiz: { question: 'What is the key difference between a FUNCTION and a PROCEDURE?', options: ['Functions are faster', 'Functions must return a value; procedures do not', 'Procedures accept parameters; functions do not', 'Functions can modify data; procedures cannot'], answer: 'Functions must return a value; procedures do not' }
  },

  'mysql_triggers': {
    isStructured: true, title: '71. Triggers', difficulty: 'Advanced', readingTime: '5 min',
    definition: 'A TRIGGER is an automatic action that runs BEFORE or AFTER an INSERT, UPDATE, or DELETE on a table. It fires without being explicitly called.',
    whyUseIt: 'Triggers automate tasks like audit logging, data validation, automatic timestamp updates, and cascading changes.',
    syntax: 'CREATE TRIGGER trigger_name\\n{BEFORE|AFTER} {INSERT|UPDATE|DELETE}\\nON table FOR EACH ROW\\nBEGIN ... END;',
    codeExample: 'DELIMITER //\\n\\n-- Auto-log changes to audit table:\\nCREATE TRIGGER after_salary_update\\nAFTER UPDATE ON employees\\nFOR EACH ROW\\nBEGIN\\n  IF OLD.salary != NEW.salary THEN\\n    INSERT INTO audit_log (emp_id, old_salary, new_salary, changed_at)\\n    VALUES (OLD.id, OLD.salary, NEW.salary, NOW());\\n  END IF;\\nEND //\\n\\n-- Prevent negative salary:\\nCREATE TRIGGER before_salary_insert\\nBEFORE INSERT ON employees\\nFOR EACH ROW\\nBEGIN\\n  IF NEW.salary < 0 THEN\\n    SIGNAL SQLSTATE \'45000\'\\n    SET MESSAGE_TEXT = \'Salary cannot be negative\';\\n  END IF;\\nEND //\\n\\nDELIMITER ;',
    hasLiveOutput: false,
    explanation: [
      { code: 'BEFORE/AFTER', desc: 'BEFORE fires before the operation. AFTER fires after it completes.' },
      { code: 'OLD', desc: 'References the row\'s values BEFORE the change (UPDATE/DELETE).' },
      { code: 'NEW', desc: 'References the row\'s values AFTER the change (INSERT/UPDATE).' },
      { code: 'FOR EACH ROW', desc: 'The trigger fires once for each row affected.' }
    ],
    realWorldExample: 'Banks use AFTER INSERT triggers on transactions to automatically update the account balance table.',
    commonMistakes: [{ error: 'Trigger loops — trigger fires, updates table, which fires the trigger again.', code: '', suffix: 'Be careful not to create triggers that modify the same table they are triggered by.' }],
    bestPractices: ['Use AFTER triggers for logging', 'Use BEFORE triggers for validation', 'Document triggers clearly — they are invisible and can surprise developers'],
    summary: ['Triggers fire automatically on INSERT, UPDATE, or DELETE.', 'Use OLD and NEW to reference before/after values.', 'Great for audit logging, validation, and automation.'],
    interviewQuestions: ['What is a trigger in MySQL?', 'What is the difference between BEFORE and AFTER triggers?', 'What are OLD and NEW in a trigger?'],
    quickQuiz: { question: 'Which keyword references the NEW values in an INSERT trigger?', options: ['OLD', 'CURRENT', 'NEW', 'INSERTED'], answer: 'NEW' }
  },

  'mysql_transactions': {
    isStructured: true, title: '72. Transactions', difficulty: 'Intermediate', readingTime: '5 min',
    definition: 'A Transaction is a group of SQL statements that are executed as a single unit. Either ALL succeed (COMMIT) or ALL fail (ROLLBACK).',
    whyUseIt: 'Transactions ensure data consistency. If a bank transfer fails halfway, a ROLLBACK restores the original state — preventing money from disappearing.',
    syntax: 'START TRANSACTION;\\n  -- SQL statements\\nCOMMIT;  -- or ROLLBACK;',
    codeExample: 'START TRANSACTION;\\n\\n-- Transfer 500 from account 1 to account 2\\nUPDATE accounts SET balance = balance - 500 WHERE id = 1;\\nUPDATE accounts SET balance = balance + 500 WHERE id = 2;\\n\\n-- If everything is fine:\\nCOMMIT;\\n-- If something went wrong:\\n-- ROLLBACK;\\n\\n-- With error handling:\\nSTART TRANSACTION;\\n  INSERT INTO orders (customer_id, total) VALUES (1, 1500);\\n  UPDATE inventory SET stock = stock - 1 WHERE product_id = 5;\\n  -- If stock goes negative, ROLLBACK:\\n  -- Otherwise:\\nCOMMIT;\\n\\nSELECT @@autocommit; -- Check if auto-commit is ON (default: 1)',
    hasLiveOutput: false,
    explanation: [
      { code: 'START TRANSACTION', desc: 'Begins a transaction. Changes are not saved until COMMIT.' },
      { code: 'COMMIT', desc: 'Saves all changes made since START TRANSACTION permanently.' },
      { code: 'ROLLBACK', desc: 'Undoes all changes since START TRANSACTION. As if nothing happened.' },
      { code: 'AUTOCOMMIT', desc: 'By default MySQL auto-commits every statement. START TRANSACTION overrides this.' }
    ],
    realWorldExample: 'Every ATM withdrawal is a transaction: debit account + dispense cash. If the cash mechanism fails, ROLLBACK prevents the debit from sticking.',
    commonMistakes: [{ error: 'Forgetting to COMMIT after a transaction.', code: '', suffix: 'Changes stay pending (invisible to other users) until COMMIT or ROLLBACK.' }],
    bestPractices: ['Always use transactions for multi-step data changes', 'Keep transactions short to avoid locking tables', 'Handle errors and ROLLBACK in application code'],
    summary: ['Transactions group SQL statements into an all-or-nothing unit.', 'COMMIT saves changes. ROLLBACK undoes them.', 'Essential for financial and critical data operations.'],
    interviewQuestions: ['What is a database transaction?', 'What are the ACID properties?', 'What is the difference between COMMIT and ROLLBACK?'],
    quickQuiz: { question: 'What does ROLLBACK do in a transaction?', options: ['Saves all changes', 'Undoes all changes since START TRANSACTION', 'Pauses the transaction', 'Deletes the transaction log'], answer: 'Undoes all changes since START TRANSACTION' }
  },

  'mysql_commit': {
    isStructured: true, title: '73. COMMIT', difficulty: 'Intermediate', readingTime: '3 min',
    definition: 'COMMIT permanently saves all changes made during the current transaction. Once committed, changes are visible to all users and cannot be rolled back.',
    whyUseIt: 'COMMIT is the confirmation step — it writes your transactional changes to the database permanently.',
    syntax: 'START TRANSACTION;\\n  UPDATE/INSERT/DELETE ...;\\nCOMMIT;',
    codeExample: 'START TRANSACTION;\\n  INSERT INTO orders (customer_id, product_id, qty)\\n  VALUES (101, 55, 2);\\n  UPDATE inventory SET stock = stock - 2\\n  WHERE product_id = 55;\\nCOMMIT;  -- Both changes are now permanent\\n\\n-- Setting AUTOCOMMIT off for session:\\nSET autocommit = 0;\\nINSERT INTO students (name) VALUES (\'Test\');\\n-- Not visible to others yet!\\nCOMMIT;\\n-- Now visible!\\nSET autocommit = 1; -- Reset',
    hasLiveOutput: false,
    explanation: [
      { code: 'COMMIT', desc: 'Permanently saves all statements in the current transaction.' },
      { code: 'Visibility', desc: 'Before COMMIT, changes are only visible to the current session.' },
      { code: 'Irreversible', desc: 'After COMMIT, ROLLBACK cannot undo the changes.' }
    ],
    realWorldExample: 'A customer confirms checkout → COMMIT saves the order, deducts inventory, and charges the card all at once.',
    commonMistakes: [{ error: 'Trying to ROLLBACK after COMMIT.', code: '', suffix: 'Once committed, changes are permanent. There is no undo.' }],
    bestPractices: ['Commit only after all steps in a transaction succeed', 'Use SAVEPOINT for partial commits within a long transaction'],
    summary: ['COMMIT makes transaction changes permanent.', 'Changes are visible to all users after COMMIT.', 'Cannot be undone after COMMIT.'],
    interviewQuestions: ['What happens after COMMIT?', 'What is the difference between COMMIT and SAVEPOINT?'],
    quickQuiz: { question: 'Can you ROLLBACK changes after a COMMIT?', options: ['Yes', 'No', 'Only within 5 minutes', 'Only with admin access'], answer: 'No' }
  },

  'mysql_rollback': {
    isStructured: true, title: '74. Rollback', difficulty: 'Intermediate', readingTime: '3 min',
    definition: 'ROLLBACK undoes all changes made in the current transaction, restoring the database to its state before START TRANSACTION was issued.',
    whyUseIt: 'ROLLBACK is the safety net — if any step in a transaction fails, ROLLBACK ensures no partial changes corrupt your data.',
    syntax: 'START TRANSACTION;\\n  UPDATE ...;\\nROLLBACK; -- undo everything',
    codeExample: 'START TRANSACTION;\\n  UPDATE accounts SET balance = balance - 1000 WHERE id = 1;\\n  UPDATE accounts SET balance = balance + 1000 WHERE id = 2;\\n  -- Simulate an error: account 2 doesn\'t exist\\n  -- Both updates are undone:\\nROLLBACK;\\n\\n-- SAVEPOINT for partial rollback:\\nSTART TRANSACTION;\\n  INSERT INTO orders (total) VALUES (500);\\n  SAVEPOINT after_order;\\n  INSERT INTO payments (order_id, amount) VALUES (99, 500);\\n  -- Payment failed:\\n  ROLLBACK TO after_order;  -- Only undo payment, keep order\\nCOMMIT;',
    hasLiveOutput: false,
    explanation: [
      { code: 'ROLLBACK', desc: 'Undoes ALL changes since the last START TRANSACTION.' },
      { code: 'SAVEPOINT name', desc: 'Creates a restore point inside a transaction.' },
      { code: 'ROLLBACK TO savepoint', desc: 'Rolls back only to the savepoint, not the beginning of the transaction.' }
    ],
    realWorldExample: 'If a flight booking system fails after charging the card but before issuing the ticket, ROLLBACK reverses the charge.',
    commonMistakes: [{ error: 'ROLLBACK doesn\'t work if autocommit is ON.', code: '', suffix: 'Must use START TRANSACTION to disable autocommit for the session.' }],
    bestPractices: ['Use SAVEPOINT for long transactions with multiple checkpoints', 'Always ROLLBACK on error in application code'],
    summary: ['ROLLBACK undoes all changes in the current transaction.', 'SAVEPOINT creates partial rollback points.', 'Must have START TRANSACTION for ROLLBACK to work.'],
    interviewQuestions: ['What does ROLLBACK do?', 'What is a SAVEPOINT?', 'What is the difference between ROLLBACK and ROLLBACK TO SAVEPOINT?'],
    quickQuiz: { question: 'What does SAVEPOINT allow you to do?', options: ['Commit partially', 'Roll back to a specific point within a transaction', 'Save the transaction to a file', 'Speed up transactions'], answer: 'Roll back to a specific point within a transaction' }
  },

  // ─── MODULE 10: Database Design ───────────────────────────────────────────────

  'mysql_er_diagram': {
    isStructured: true, title: '75. ER Diagram', difficulty: 'Intermediate', readingTime: '5 min',
    definition: 'An Entity-Relationship (ER) Diagram is a visual blueprint of a database — showing entities (tables), attributes (columns), and relationships between them.',
    whyUseIt: 'ER diagrams are drawn BEFORE writing any SQL. They prevent structural mistakes that are expensive to fix later.',
    syntax: '-- ER Diagram Symbols:\\n-- Rectangle  = Entity (Table)\\n-- Oval       = Attribute (Column)\\n-- Diamond    = Relationship\\n-- Lines      = Connections (1, M, N = cardinality)',
    codeExample: '-- ER Diagram → SQL Translation:\\n\\n-- Entities: Student, Course, Enrollment\\n-- Relationships: Student ENROLLS IN Course (Many-to-Many)\\n\\nCREATE TABLE students (\\n  id   INT PRIMARY KEY,\\n  name VARCHAR(100)\\n);\\n\\nCREATE TABLE courses (\\n  id   INT PRIMARY KEY,\\n  name VARCHAR(100)\\n);\\n\\nCREATE TABLE enrollments (         -- relationship table\\n  student_id INT,\\n  course_id  INT,\\n  PRIMARY KEY (student_id, course_id),\\n  FOREIGN KEY (student_id) REFERENCES students(id),\\n  FOREIGN KEY (course_id)  REFERENCES courses(id)\\n);',
    hasLiveOutput: false,
    explanation: [
      { code: 'Entity', desc: 'A real-world object stored in the database (Student, Product, Order).' },
      { code: 'Attribute', desc: 'A property of an entity (name, age, price).' },
      { code: 'Relationship', desc: 'How entities relate: One-to-One, One-to-Many, Many-to-Many.' },
      { code: 'Cardinality', desc: '1:1, 1:N, M:N — how many of one entity relate to another.' }
    ],
    realWorldExample: 'Amazon\'s database was designed with ER diagrams showing: Customer → Order → OrderItem → Product, before writing a single line of SQL.',
    commonMistakes: [{ error: 'Skipping the ER diagram and coding directly.', code: '', suffix: 'Missing relationships and wrong data types discovered mid-project cause major refactoring.' }],
    bestPractices: ['Always draw an ER diagram before creating tables', 'Use MySQL Workbench\'s ER diagram feature for auto-generation', 'Identify all relationships and their cardinalities first'],
    summary: ['ER diagrams visually represent the database structure.', 'Show entities, attributes, and relationships.', 'Always design before coding.'],
    interviewQuestions: ['What is an ER Diagram?', 'What are the different types of relationships in ER diagrams?', 'What is cardinality?'],
    quickQuiz: { question: 'What does M:N cardinality mean?', options: ['One to One', 'One to Many', 'Many to Many', 'None to Many'], answer: 'Many to Many' }
  },

  'mysql_normalization': {
    isStructured: true, title: '76. Database Normalization', difficulty: 'Intermediate', readingTime: '5 min',
    definition: 'Normalization is the process of organizing a database to reduce data redundancy and improve data integrity by dividing large tables into smaller, related tables.',
    whyUseIt: 'Unnormalized data leads to update anomalies (changing data in one place breaks it in another), insert anomalies, and delete anomalies.',
    syntax: '-- Normal Forms:\\n-- 1NF: Atomic values, no repeating groups\\n-- 2NF: 1NF + No partial dependencies\\n-- 3NF: 2NF + No transitive dependencies',
    codeExample: '-- BEFORE (Unnormalized - bad):\\n-- orders(order_id, customer_name, customer_email, product1, product2, product3)\\n\\n-- Issues:\\n-- 1. Customer data repeated in every order row\\n-- 2. What if customer changes email?\\n-- 3. What if order has 5 products?\\n\\n-- AFTER (Normalized - good):\\nCREATE TABLE customers (id INT PK, name, email);\\nCREATE TABLE products  (id INT PK, name, price);\\nCREATE TABLE orders    (id INT PK, customer_id FK, date);\\nCREATE TABLE order_items (order_id FK, product_id FK, qty);\\n\\n-- Customer email stored ONCE → change once, updated everywhere',
    hasLiveOutput: false,
    explanation: [
      { code: 'Redundancy', desc: 'Storing the same data in multiple places — normalization eliminates this.' },
      { code: 'Update anomaly', desc: 'Changing data in one place requires changes in many places.' },
      { code: '1NF, 2NF, 3NF', desc: 'Progressive rules that enforce cleaner data organization.' }
    ],
    realWorldExample: 'If a customer\'s email is stored in 500 order rows, changing it requires 500 UPDATEs. Normalization stores it once — fix in one place, done.',
    commonMistakes: [{ error: 'Over-normalizing (too many tiny tables).', code: '', suffix: 'Balance normalization with practical query complexity. BCNF is rarely needed.' }],
    bestPractices: ['Aim for 3NF for most applications', 'Only denormalize for proven performance needs', 'Normalize first, then optimize if queries are too slow'],
    summary: ['Normalization reduces data redundancy and inconsistency.', 'Divides large tables into smaller related tables.', '1NF → 2NF → 3NF are the standard levels.'],
    interviewQuestions: ['What is database normalization?', 'What are the three anomalies that normalization prevents?', 'What is the difference between 2NF and 3NF?'],
    quickQuiz: { question: 'What is the main goal of normalization?', options: ['Speed up queries', 'Reduce data redundancy', 'Add more tables', 'Increase database size'], answer: 'Reduce data redundancy' }
  },

  'mysql_1nf': {
    isStructured: true, title: '77. First Normal Form (1NF)', difficulty: 'Intermediate', readingTime: '4 min',
    definition: '1NF requires that each column contains only atomic (indivisible) values and each row is unique. No repeating groups or arrays in cells.',
    whyUseIt: '1NF is the foundation of normalization. Without it, querying individual values inside a cell is impossible.',
    syntax: '-- 1NF Rules:\\n-- 1. Each column has atomic (single) values\\n-- 2. No repeating groups (no courses1, courses2 columns)\\n-- 3. Each row is unique (has a primary key)',
    codeExample: '-- VIOLATES 1NF (multiple values in one cell):\\n-- id | name  | courses\\n-- 1  | Ravi  | MySQL, Python, Java\\n-- 2  | Priya | HTML, CSS\\n\\n-- Problem: Can\'t query WHERE course = \'Python\'!\\n\\n-- SATISFIES 1NF (one course per row):\\n-- id | name  | course\\n-- 1  | Ravi  | MySQL\\n-- 1  | Ravi  | Python\\n-- 1  | Ravi  | Java\\n-- 2  | Priya | HTML\\n-- 2  | Priya | CSS\\n\\n-- Or better, a separate courses table with foreign key',
    hasLiveOutput: false,
    explanation: [
      { code: 'Atomic values', desc: 'Each cell contains exactly one value. Not comma-separated lists.' },
      { code: 'No repeating groups', desc: 'No course1, course2, course3 columns. Use a separate table.' },
      { code: 'Unique rows', desc: 'Every row must be uniquely identifiable (primary key).' }
    ],
    realWorldExample: 'Storing phone numbers as "9876543210, 9123456789" in one cell violates 1NF. Store them in a separate phone_numbers table.',
    commonMistakes: [{ error: 'Storing comma-separated values in a column.', code: '', suffix: 'Violates 1NF. Create a separate table with individual rows instead.' }],
    bestPractices: ['Never store multiple values in a single cell', 'Create a child table for repeating groups', 'Every table must have a primary key to satisfy 1NF'],
    summary: ['1NF: atomic values, no repeating groups, unique rows.', 'Each cell must hold exactly one value.', 'Use separate tables for multi-valued attributes.'],
    interviewQuestions: ['What is First Normal Form?', 'What does "atomic" mean in 1NF?', 'How do you fix a 1NF violation?'],
    quickQuiz: { question: 'Which violates 1NF?', options: ['A table with no primary key', 'A column storing comma-separated values', 'A table with foreign keys', 'A table with too many rows'], answer: 'A column storing comma-separated values' }
  },

  'mysql_2nf': {
    isStructured: true, title: '78. Second Normal Form (2NF)', difficulty: 'Intermediate', readingTime: '4 min',
    definition: '2NF requires the table to be in 1NF AND every non-key column must depend on the ENTIRE primary key (not just part of it). This only matters for tables with composite primary keys.',
    whyUseIt: 'Partial dependencies cause redundancy — the same non-key data repeated for every related key combination.',
    syntax: '-- 2NF Rule: No partial dependency\\n-- All non-key columns depend on the WHOLE primary key',
    codeExample: '-- VIOLATES 2NF (partial dependency):\\n-- PK: (student_id, course_id)\\n-- student_name depends only on student_id → partial dependency!\\n\\n-- Table: enrollments(student_id, course_id, student_name, grade)\\n-- student_name repeats for every course the student takes!\\n\\n-- FIX (separate the partial dependency):\\nCREATE TABLE students (\\n  student_id   INT PRIMARY KEY,\\n  student_name VARCHAR(100)  -- depends only on student_id → moved here\\n);\\nCREATE TABLE enrollments (\\n  student_id INT,\\n  course_id  INT,\\n  grade      CHAR(1),         -- depends on both → stays here\\n  PRIMARY KEY (student_id, course_id)\\n);',
    hasLiveOutput: false,
    explanation: [
      { code: 'Partial dependency', desc: 'A non-key column depends on ONLY PART of a composite primary key.' },
      { code: 'Full dependency', desc: 'The non-key column depends on ALL parts of the primary key.' },
      { code: 'Fix', desc: 'Move the partially dependent column to its own table.' }
    ],
    realWorldExample: 'In an enrollment table with PK(student_id, course_id), student_name only needs student_id — it belongs in the students table, not enrollments.',
    commonMistakes: [{ error: '2NF only applies to tables with composite primary keys.', code: '', suffix: 'If your table has a single column PK, it is automatically in 2NF if it is in 1NF.' }],
    bestPractices: ['If a column only relates to part of the composite key, move it to a separate table'],
    summary: ['2NF = 1NF + no partial dependencies.', 'Every non-key column must depend on the full primary key.', 'Only relevant when the primary key is composite.'],
    interviewQuestions: ['What is Second Normal Form?', 'What is a partial dependency?', 'When is 2NF applicable?'],
    quickQuiz: { question: '2NF eliminates which type of dependency?', options: ['Transitive dependency', 'Partial dependency', 'Full dependency', 'Functional dependency'], answer: 'Partial dependency' }
  },

  'mysql_3nf': {
    isStructured: true, title: '79. Third Normal Form (3NF)', difficulty: 'Intermediate', readingTime: '4 min',
    definition: '3NF requires the table to be in 2NF AND no non-key column should depend on another non-key column (no transitive dependencies).',
    whyUseIt: 'Transitive dependencies cause data redundancy — changing one non-key fact requires updates in multiple rows.',
    syntax: '-- 3NF Rule: No transitive dependency\\n-- Non-key columns depend ONLY on the primary key',
    codeExample: '-- VIOLATES 3NF (transitive dependency):\\n-- employees(emp_id, emp_name, dept_id, dept_name)\\n-- dept_name depends on dept_id, not emp_id!\\n-- (emp_id → dept_id → dept_name = transitive)\\n\\n-- If 100 employees are in "Engineering",\\n-- dept_name "Engineering" is stored 100 times!\\n\\n-- FIX: Separate into two tables:\\nCREATE TABLE departments (\\n  dept_id   INT PRIMARY KEY,\\n  dept_name VARCHAR(100)      -- depends on dept_id (its own PK)\\n);\\nCREATE TABLE employees (\\n  emp_id    INT PRIMARY KEY,\\n  emp_name  VARCHAR(100),\\n  dept_id   INT,              -- just the FK, no dept_name here\\n  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)\\n);',
    hasLiveOutput: false,
    explanation: [
      { code: 'Transitive dependency', desc: 'A → B → C: A is PK, B is non-key, C depends on B (not directly on A).' },
      { code: 'Fix', desc: 'Move C and B into a new table where B becomes the primary key.' },
      { code: 'Result', desc: 'Non-key columns now only depend directly on the primary key.' }
    ],
    realWorldExample: 'employees.dept_name is updated 100 times when a department renames. After 3NF, update it once in departments table.',
    commonMistakes: [{ error: 'Leaving derived/calculated data in the table.', code: '', suffix: 'Calculated values (age from DOB) should be computed in queries, not stored.' }],
    bestPractices: ['Every non-key column should depend only on the primary key', '3NF is the practical target for most applications'],
    summary: ['3NF = 2NF + no transitive dependencies.', 'Non-key columns depend only on the primary key.', 'Eliminates redundancy caused by indirect dependencies.'],
    interviewQuestions: ['What is Third Normal Form?', 'What is a transitive dependency?', 'Is 3NF sufficient for most applications?'],
    quickQuiz: { question: '3NF eliminates which type of dependency?', options: ['Partial', 'Transitive', 'Full', 'Circular'], answer: 'Transitive' }
  },

  'mysql_denormalization': {
    isStructured: true, title: '80. Denormalization', difficulty: 'Intermediate', readingTime: '4 min',
    definition: 'Denormalization intentionally introduces redundancy into a normalized database to improve read performance. It trades storage and write complexity for faster reads.',
    whyUseIt: 'Highly normalized databases can require complex multi-table JOINs that are slow. Denormalization pre-combines data to speed up frequent queries.',
    syntax: '-- Denormalization techniques:\\n-- 1. Add redundant columns to avoid JOINs\\n-- 2. Precomputed aggregates (total_orders, avg_rating)\\n-- 3. Duplicate entire tables for reporting',
    codeExample: '-- Normalized (requires JOIN every time):\\nSELECT o.id, c.name, c.city FROM orders o\\nJOIN customers c ON o.customer_id = c.id;\\n\\n-- Denormalized (add customer_name to orders):\\n-- orders(order_id, customer_id, customer_name, customer_city, total)\\n-- Now no JOIN needed, but customer_name is duplicated!\\n\\n-- Precomputed aggregate:\\nALTER TABLE products ADD COLUMN total_sold INT DEFAULT 0;\\n-- Update with trigger after every order\\n-- Fast: SELECT name, total_sold FROM products ORDER BY total_sold\\n-- No GROUP BY + COUNT needed!',
    hasLiveOutput: false,
    explanation: [
      { code: 'Redundant columns', desc: 'Add frequently-needed data from other tables to avoid JOIN.' },
      { code: 'Precomputed aggregates', desc: 'Store COUNT, SUM results directly in the table, update via triggers.' },
      { code: 'Trade-off', desc: 'Faster reads, slower writes, more storage, data sync complexity.' }
    ],
    realWorldExample: 'Amazon stores product ratings directly on the product table (precomputed average) instead of calculating AVG(reviews) every page load.',
    commonMistakes: [{ error: 'Denormalizing prematurely.', code: '', suffix: 'Normalize first. Only denormalize for proven bottlenecks with data to back it up.' }],
    bestPractices: ['Normalize first, denormalize only when performance proves it necessary', 'Use triggers or application logic to keep denormalized data in sync', 'Document all denormalization decisions'],
    summary: ['Denormalization adds intentional redundancy for read performance.', 'Trades write complexity for faster reads.', 'Only use after measuring actual performance bottlenecks.'],
    interviewQuestions: ['What is denormalization?', 'When would you denormalize a database?', 'What are the risks of denormalization?'],
    quickQuiz: { question: 'When should you consider denormalization?', options: ['Always, from the beginning', 'Never — normalization is always correct', 'Only after measuring proven performance bottlenecks', 'When the database has more than 5 tables'], answer: 'Only after measuring proven performance bottlenecks' }
  },

  // ─── MODULE 11: MySQL with Applications ──────────────────────────────────────

  'mysql_with_java': {
    isStructured: true, title: '81. MySQL with Java (JDBC)', difficulty: 'Intermediate', readingTime: '6 min',
    definition: 'JDBC (Java Database Connectivity) is the standard Java API for connecting to and executing SQL on relational databases including MySQL.',
    whyUseIt: 'Java is one of the most popular languages for building enterprise applications. JDBC connects your Java backend to your MySQL database.',
    syntax: '// Load driver → Create connection → Create statement → Execute → Process results → Close',
    codeExample: 'import java.sql.*;\\n\\npublic class MySQLDemo {\\n  public static void main(String[] args) throws Exception {\\n    // 1. Connect to MySQL\\n    String url = "jdbc:mysql://localhost:3306/school_db";\\n    Connection conn = DriverManager.getConnection(url, "root", "password");\\n\\n    // 2. Create a prepared statement (prevents SQL injection):\\n    String sql = "SELECT id, name FROM students WHERE grade = ?";\\n    PreparedStatement stmt = conn.prepareStatement(sql);\\n    stmt.setString(1, "A");\\n\\n    // 3. Execute and read results:\\n    ResultSet rs = stmt.executeQuery();\\n    while (rs.next()) {\\n      System.out.println(rs.getInt("id") + ": " + rs.getString("name"));\\n    }\\n\\n    // 4. Close connections:\\n    rs.close(); stmt.close(); conn.close();\\n  }\\n}',
    hasLiveOutput: false,
    explanation: [
      { code: 'DriverManager.getConnection()', desc: 'Opens a connection to MySQL using the URL, username, and password.' },
      { code: 'PreparedStatement', desc: 'A parameterized query that prevents SQL injection. Always prefer over Statement.' },
      { code: 'ResultSet', desc: 'The results of a SELECT query. Use rs.next() to iterate.' },
      { code: 'close()', desc: 'Always close ResultSet, Statement, and Connection to prevent memory leaks.' }
    ],
    realWorldExample: 'Banking apps in Java use JDBC with connection pools to handle thousands of simultaneous database connections efficiently.',
    commonMistakes: [{ error: 'Not closing connections.', code: '', suffix: 'Use try-with-resources or finally block to always close JDBC resources.' }],
    bestPractices: ['Always use PreparedStatement — never concatenate SQL strings (SQL injection risk)', 'Use a connection pool (HikariCP) for production apps', 'Use try-with-resources for automatic resource cleanup'],
    summary: ['JDBC connects Java applications to MySQL.', 'Use PreparedStatement to prevent SQL injection.', 'Always close connections to prevent resource leaks.'],
    interviewQuestions: ['What is JDBC?', 'What is the difference between Statement and PreparedStatement?', 'What is a connection pool?'],
    quickQuiz: { question: 'Which JDBC class prevents SQL injection?', options: ['Statement', 'Connection', 'PreparedStatement', 'ResultSet'], answer: 'PreparedStatement' }
  },

  'mysql_with_php': {
    isStructured: true, title: '82. MySQL with PHP', difficulty: 'Intermediate', readingTime: '5 min',
    definition: 'PHP connects to MySQL using the MySQLi or PDO extension. PHP + MySQL is the most popular web development combination in the world (used by WordPress, Magento, etc.)',
    whyUseIt: 'PHP is the server-side language behind ~80% of all websites. Knowing PHP + MySQL integration is essential for web development.',
    syntax: '// MySQLi: mysqli_connect()\\n// PDO: new PDO("mysql:host=...", user, pass)',
    codeExample: '<?php\\n// Using PDO (recommended - works with any database):\\ntry {\\n  $pdo = new PDO(\\n    "mysql:host=localhost;dbname=school_db",\\n    "root",\\n    "password"\\n  );\\n  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\\n\\n  // Prepared statement (prevents SQL injection):\\n  $stmt = $pdo->prepare("SELECT name, grade FROM students WHERE age > ?");\\n  $stmt->execute([18]);\\n\\n  $students = $stmt->fetchAll(PDO::FETCH_ASSOC);\\n  foreach ($students as $student) {\\n    echo $student["name"] . ": " . $student["grade"] . "\\n";\\n  }\\n} catch (PDOException $e) {\\n  echo "Error: " . $e->getMessage();\\n}\\n?>',
    hasLiveOutput: false,
    explanation: [
      { code: 'PDO', desc: 'PHP Data Objects — works with MySQL, PostgreSQL, SQLite, and more.' },
      { code: 'prepare() + execute()', desc: 'Parameterized queries — safest way to run SQL in PHP.' },
      { code: 'fetchAll()', desc: 'Returns all query results as an array.' }
    ],
    realWorldExample: 'WordPress uses PHP + MySQL for every post, comment, plugin setting, and user account — powering 40% of all websites.',
    commonMistakes: [{ error: 'Using deprecated mysql_ functions.', code: '', suffix: 'Old mysql_query() is removed. Use mysqli or PDO only.' }],
    bestPractices: ['Use PDO for portability across different databases', 'Always use prepared statements to prevent SQL injection', 'Store credentials in .env files, never in code'],
    summary: ['PHP connects to MySQL via MySQLi or PDO.', 'PDO is preferred for flexibility and security.', 'Always use prepared statements to prevent SQL injection.'],
    interviewQuestions: ['What is the difference between MySQLi and PDO?', 'How do you prevent SQL injection in PHP?', 'What does PDO::FETCH_ASSOC return?'],
    quickQuiz: { question: 'Which PHP extension works with multiple database types?', options: ['MySQLi', 'mysql_()', 'PDO', 'ODBC'], answer: 'PDO' }
  },

  'mysql_with_nodejs': {
    isStructured: true, title: '83. MySQL with Node.js', difficulty: 'Intermediate', readingTime: '5 min',
    definition: 'Node.js connects to MySQL using npm packages like mysql2 or Sequelize ORM. This powers REST APIs built with Express.js.',
    whyUseIt: 'Node.js + MySQL is a popular stack for building scalable REST APIs and web applications (part of the MERN/MEAN stack replacement).',
    syntax: 'npm install mysql2\\nconst mysql = require("mysql2/promise");',
    codeExample: 'const mysql = require("mysql2/promise");\\n\\nasync function main() {\\n  // Create connection pool (better than single connection):\\n  const pool = mysql.createPool({\\n    host: "localhost",\\n    user: "root",\\n    password: "password",\\n    database: "school_db",\\n    waitForConnections: true,\\n    connectionLimit: 10\\n  });\\n\\n  // Parameterized query (prevents SQL injection):\\n  const [rows] = await pool.query(\\n    "SELECT name, grade FROM students WHERE age > ?",\\n    [18]\\n  );\\n\\n  console.log(rows);\\n  // [{ name: "Ravi", grade: "A" }, ...]\\n\\n  // Insert:\\n  const [result] = await pool.query(\\n    "INSERT INTO students (name, email) VALUES (?, ?)",\\n    ["New Student", "new@example.com"]\\n  );\\n  console.log("Inserted ID:", result.insertId);\\n}\\n\\nmain().catch(console.error);',
    hasLiveOutput: false,
    explanation: [
      { code: 'mysql2/promise', desc: 'Promise-based MySQL client for Node.js — supports async/await.' },
      { code: 'createPool()', desc: 'Connection pool reuses connections instead of creating new ones per query.' },
      { code: 'pool.query(sql, params)', desc: 'Runs parameterized query safely.' },
      { code: 'result.insertId', desc: 'Returns the AUTO_INCREMENT ID of the newly inserted row.' }
    ],
    realWorldExample: 'Express + MySQL2 powers REST APIs that serve mobile apps, dashboards, and web frontends with real-time data.',
    commonMistakes: [{ error: 'Using a single connection instead of a pool.', code: '', suffix: 'Single connection breaks under concurrent requests. Always use a pool.' }],
    bestPractices: ['Use mysql2/promise for async/await support', 'Use connection pools for production', 'Consider Sequelize ORM for complex applications'],
    summary: ['mysql2 package connects Node.js to MySQL.', 'Use connection pools for production scalability.', 'Always use parameterized queries to prevent SQL injection.'],
    interviewQuestions: ['What npm package do you use for MySQL in Node.js?', 'What is a connection pool?', 'What is Sequelize?'],
    quickQuiz: { question: 'What is the benefit of using a connection pool in Node.js + MySQL?', options: ['Runs queries faster individually', 'Reuses connections for concurrent requests', 'Reduces database size', 'Prevents SQL injection'], answer: 'Reuses connections for concurrent requests' }
  },

  'mysql_with_python': {
    isStructured: true, title: '84. MySQL with Python', difficulty: 'Intermediate', readingTime: '5 min',
    definition: 'Python connects to MySQL using mysql-connector-python or PyMySQL. SQLAlchemy ORM is used for complex applications.',
    whyUseIt: 'Python is the language of data science and AI. MySQL + Python powers data pipelines, analytics scripts, and web backends (Flask/Django).',
    syntax: 'pip install mysql-connector-python\\nimport mysql.connector',
    codeExample: 'import mysql.connector\\n\\n# Connect to MySQL\\nconn = mysql.connector.connect(\\n  host="localhost",\\n  user="root",\\n  password="password",\\n  database="school_db"\\n)\\n\\ncursor = conn.cursor(dictionary=True)\\n\\n# Parameterized query (prevents SQL injection):\\ncursor.execute(\\n  "SELECT name, grade FROM students WHERE age > %s",\\n  (18,)\\n)\\n\\nstudents = cursor.fetchall()\\nfor s in students:\\n  print(f"{s[\'name\']}: {s[\'grade\']}")\\n\\n# Insert data:\\ncursor.execute(\\n  "INSERT INTO students (name, email) VALUES (%s, %s)",\\n  ("Ravi", "ravi@example.com")\\n)\\nconn.commit()  # MUST commit for INSERT/UPDATE/DELETE\\n\\ncursor.close()\\nconn.close()',
    hasLiveOutput: false,
    explanation: [
      { code: 'mysql.connector.connect()', desc: 'Opens a connection to MySQL.' },
      { code: 'cursor(dictionary=True)', desc: 'Returns results as dictionaries (column name → value).' },
      { code: '%s placeholder', desc: 'Python MySQL uses %s for parameterized values (not ?).' },
      { code: 'conn.commit()', desc: 'REQUIRED after INSERT/UPDATE/DELETE — Python MySQL does not auto-commit.' }
    ],
    realWorldExample: 'Data scientists use Python + MySQL to extract data, run analysis with pandas, and write results back to the database.',
    commonMistakes: [{ error: 'Forgetting conn.commit() after INSERT/UPDATE/DELETE.', code: '', suffix: 'Without commit(), changes are not saved to the database.' }],
    bestPractices: ['Use dictionary=True for readable result access', 'Use conn.commit() after all data modifications', 'Use SQLAlchemy for complex ORM-based applications'],
    summary: ['Python connects to MySQL via mysql-connector-python.', 'Use %s for parameterized queries.', 'Must call conn.commit() after INSERT/UPDATE/DELETE.'],
    interviewQuestions: ['What library do you use to connect Python to MySQL?', 'Why must you call conn.commit()?', 'What is the difference between fetchone() and fetchall()?'],
    quickQuiz: { question: 'What must you call after INSERT in Python + MySQL to save changes?', options: ['cursor.save()', 'conn.commit()', 'cursor.execute()', 'conn.flush()'], answer: 'conn.commit()' }
  },

  'mysql_vs_firebase': {
    isStructured: true, title: '85. MySQL vs Firebase Comparison', difficulty: 'Intermediate', readingTime: '5 min',
    definition: 'MySQL is a relational SQL database. Firebase Firestore/Realtime Database is a NoSQL cloud database. They serve different purposes.',
    whyUseIt: 'Choosing between MySQL and Firebase depends on your data structure, scalability needs, and real-time requirements.',
    syntax: '-- MySQL: Structured, relational, on-premise or cloud\\n-- Firebase: Flexible, NoSQL, cloud-native, real-time',
    codeExample: '-- MySQL (Structured, relational queries):\\nSELECT u.name, COUNT(o.id) AS orders\\nFROM users u JOIN orders o ON u.id = o.user_id\\nGROUP BY u.id\\nHAVING orders > 5;\\n\\n// Firebase (Firestore, document-based):\\nconst orders = await db\\n  .collection("users")\\n  .doc(userId)\\n  .collection("orders")\\n  .where("status", "==", "pending")\\n  .get();\\n\\n-- Key Differences:\\n-- MySQL: Complex JOINs ✅  | Real-time sync ❌\\n-- Firebase: Real-time  ✅  | Complex JOINs ❌\\n-- MySQL: Free self-host ✅ | Firebase: Pay-per-use☁',
    hasLiveOutput: false,
    explanation: [
      { code: 'MySQL', desc: 'Relational, structured, powerful queries, ACID transactions, free.' },
      { code: 'Firebase', desc: 'NoSQL, flexible schema, real-time sync, cloud-native, pay per use.' },
      { code: 'Use MySQL when', desc: 'You need complex queries, transactions, or structured data.' },
      { code: 'Use Firebase when', desc: 'You need real-time sync, mobile apps, or serverless architecture.' }
    ],
    realWorldExample: 'A ride-sharing app might use Firebase for real-time driver location tracking + MySQL for billing, history, and complex reporting.',
    commonMistakes: [{ error: 'Using Firebase for complex relational data.', code: '', suffix: 'Firebase doesn\'t support JOINs. Relational data is difficult to query in NoSQL.' }],
    bestPractices: ['Use MySQL for structured, relational business data', 'Use Firebase for real-time features and mobile apps', 'Hybrid approach: MySQL for backend + Firebase for real-time features'],
    summary: ['MySQL is relational, Firebase is NoSQL.', 'MySQL excels at complex queries; Firebase excels at real-time sync.', 'Choose based on your specific use case requirements.'],
    interviewQuestions: ['When would you choose MySQL over Firebase?', 'What is the main advantage of Firebase over MySQL?', 'Can you use both MySQL and Firebase in the same application?'],
    quickQuiz: { question: 'Which database is better for real-time data synchronization?', options: ['MySQL', 'PostgreSQL', 'Firebase', 'SQLite'], answer: 'Firebase' }
  },

  // ─── MODULE 12: Mini Projects ─────────────────────────────────────────────────

  'mysql_project_student': {
    isStructured: true, title: '86. Student Management System', difficulty: 'Intermediate', readingTime: '8 min',
    definition: 'A Student Management System (SMS) database manages students, courses, enrollments, grades, and attendance.',
    whyUseIt: 'SMS is a classic project that covers all MySQL concepts: tables, relationships, CRUD, JOINs, and reports.',
    syntax: '-- Tables: students, courses, enrollments, grades, attendance',
    codeExample: 'CREATE DATABASE student_mgmt;\\nUSE student_mgmt;\\n\\nCREATE TABLE departments (\\n  id   INT AUTO_INCREMENT PRIMARY KEY,\\n  name VARCHAR(100) NOT NULL UNIQUE\\n);\\n\\nCREATE TABLE students (\\n  id         INT AUTO_INCREMENT PRIMARY KEY,\\n  name       VARCHAR(100) NOT NULL,\\n  email      VARCHAR(150) UNIQUE NOT NULL,\\n  dob        DATE,\\n  dept_id    INT,\\n  join_date  DATE DEFAULT (CURRENT_DATE),\\n  FOREIGN KEY (dept_id) REFERENCES departments(id)\\n);\\n\\nCREATE TABLE courses (\\n  id       INT AUTO_INCREMENT PRIMARY KEY,\\n  name     VARCHAR(100) NOT NULL,\\n  credits  INT DEFAULT 3\\n);\\n\\nCREATE TABLE enrollments (\\n  student_id INT,\\n  course_id  INT,\\n  grade      DECIMAL(5,2),\\n  semester   VARCHAR(20),\\n  PRIMARY KEY (student_id, course_id, semester),\\n  FOREIGN KEY (student_id) REFERENCES students(id),\\n  FOREIGN KEY (course_id)  REFERENCES courses(id)\\n);\\n\\n-- Report: Average grade per student\\nSELECT s.name, ROUND(AVG(e.grade), 2) AS avg_grade\\nFROM students s\\nJOIN enrollments e ON s.id = e.student_id\\nGROUP BY s.id, s.name\\nORDER BY avg_grade DESC;',
    hasLiveOutput: false,
    explanation: [
      { code: 'Composite PK in enrollments', desc: 'A student can take the same course in different semesters.' },
      { code: 'FOREIGN KEY chain', desc: 'students → departments, enrollments → students + courses.' },
      { code: 'Report query', desc: 'JOINs + GROUP BY + AVG used for the academic report.' }
    ],
    realWorldExample: 'This exact database structure powers school ERP systems, university portals, and learning management systems worldwide.',
    commonMistakes: [{ error: 'Not defining a semester in the enrollment PK.', code: '', suffix: 'Without semester, a student can only enroll in a course once ever.' }],
    bestPractices: ['Start with ER diagram before coding', 'Add created_at and updated_at to every table', 'Build views for commonly needed reports'],
    summary: ['Student Management System covers students, courses, enrollments, grades.', 'Uses composite PKs, foreign keys, and JOINs.', 'Great for practicing all MySQL concepts.'],
    interviewQuestions: ['Design a database for a school management system.', 'How would you model a many-to-many relationship between students and courses?'],
    quickQuiz: { question: 'What type of relationship exists between Students and Courses?', options: ['One-to-One', 'One-to-Many', 'Many-to-Many', 'No relationship'], answer: 'Many-to-Many' }
  },

  'mysql_project_employee': {
    isStructured: true, title: '87. Employee Management System', difficulty: 'Intermediate', readingTime: '7 min',
    definition: 'An Employee Management System database tracks employees, departments, salaries, leaves, and performance.',
    whyUseIt: 'EMS is a core HR application that demonstrates self-referential relationships (manager), salary history, and complex reporting.',
    syntax: '-- Tables: departments, employees, salaries, leaves, performance',
    codeExample: 'CREATE DATABASE ems;\\nUSE ems;\\n\\nCREATE TABLE departments (\\n  id       INT AUTO_INCREMENT PRIMARY KEY,\\n  name     VARCHAR(100),\\n  location VARCHAR(100)\\n);\\n\\nCREATE TABLE employees (\\n  id         INT AUTO_INCREMENT PRIMARY KEY,\\n  name       VARCHAR(100) NOT NULL,\\n  email      VARCHAR(150) UNIQUE NOT NULL,\\n  dept_id    INT,\\n  manager_id INT,  -- Self-referential FK\\n  hire_date  DATE,\\n  salary     DECIMAL(12,2),\\n  FOREIGN KEY (dept_id)    REFERENCES departments(id),\\n  FOREIGN KEY (manager_id) REFERENCES employees(id)\\n);\\n\\n-- Find employees earning above department average:\\nSELECT e.name, e.salary, d.name AS dept\\nFROM employees e\\nJOIN departments d ON e.dept_id = d.id\\nWHERE e.salary > (\\n  SELECT AVG(salary) FROM employees e2\\n  WHERE e2.dept_id = e.dept_id\\n)\\nORDER BY e.dept_id, e.salary DESC;',
    hasLiveOutput: false,
    explanation: [
      { code: 'Self-referential FK', desc: 'manager_id references employees.id — same table hierarchy.' },
      { code: 'Correlated subquery', desc: 'Inner query references the outer query\'s dept_id for per-dept avg.' }
    ],
    realWorldExample: 'SAP HR, Workday, and every company\'s HR system is built on a similar employee management database.',
    commonMistakes: [{ error: 'Not handling the top-level manager (no manager_id).', code: '', suffix: 'The CEO has no manager. Set manager_id to NULL and use LEFT JOIN for reporting.' }],
    bestPractices: ['Use NULL for manager_id of top-level employees', 'Create views for organizational hierarchy reports', 'Store salary history in a separate table'],
    summary: ['EMS demonstrates self-referential relationships, subqueries, and complex reporting.', 'Manager relationship uses a self-referential foreign key.', 'Real-world foundation for any HR system.'],
    interviewQuestions: ['How do you model an employee hierarchy in SQL?', 'How do you find employees earning above their department average?'],
    quickQuiz: { question: 'How is an employee-manager hierarchy modeled in MySQL?', options: ['Two separate tables', 'A self-referential foreign key in the employees table', 'A join table', 'A VIEW'], answer: 'A self-referential foreign key in the employees table' }
  },

  'mysql_project_library': { isStructured: true, title: '88. Library Management System', difficulty: 'Intermediate', readingTime: '6 min', definition: 'A Library Management System tracks books, members, borrowing records, returns, and fines.', whyUseIt: 'LMS covers date calculations, fine computation, availability tracking, and complex state management.', syntax: '-- Tables: books, members, borrow_records, fines', codeExample: 'CREATE DATABASE library_db;\\nUSE library_db;\\n\\nCREATE TABLE books (\\n  id        INT AUTO_INCREMENT PRIMARY KEY,\\n  title     VARCHAR(200) NOT NULL,\\n  author    VARCHAR(100),\\n  isbn      VARCHAR(20) UNIQUE,\\n  copies    INT DEFAULT 1\\n);\\n\\nCREATE TABLE members (\\n  id       INT AUTO_INCREMENT PRIMARY KEY,\\n  name     VARCHAR(100),\\n  email    VARCHAR(150) UNIQUE,\\n  joined   DATE DEFAULT (CURRENT_DATE)\\n);\\n\\nCREATE TABLE borrow_records (\\n  id          INT AUTO_INCREMENT PRIMARY KEY,\\n  book_id     INT,\\n  member_id   INT,\\n  borrow_date DATE DEFAULT (CURRENT_DATE),\\n  due_date    DATE,\\n  return_date DATE,\\n  FOREIGN KEY (book_id)   REFERENCES books(id),\\n  FOREIGN KEY (member_id) REFERENCES members(id)\\n);\\n\\n-- Find overdue books and calculate fine (10/day):\\nSELECT m.name, b.title,\\n  DATEDIFF(CURDATE(), r.due_date) AS days_overdue,\\n  DATEDIFF(CURDATE(), r.due_date) * 10 AS fine_amount\\nFROM borrow_records r\\nJOIN members m ON r.member_id = m.id\\nJOIN books   b ON r.book_id   = b.id\\nWHERE r.return_date IS NULL\\n  AND r.due_date < CURDATE();', hasLiveOutput: false,
    explanation: [{ code: 'DATEDIFF()', desc: 'Calculates number of days between two dates.' }, { code: 'return_date IS NULL', desc: 'Book has not been returned yet.' }],
    realWorldExample: 'University libraries, public libraries, and corporate resource management use this exact database structure.',
    commonMistakes: [{ error: 'Not tracking available copies.', code: '', suffix: 'Use copies - (count of active borrows) to show availability.' }],
    bestPractices: ['Use DATEDIFF for date-based calculations', 'Add triggers to update book availability automatically'],
    summary: ['Library system tracks borrowing, returns, and fines.', 'DATEDIFF() calculates overdue days.', 'Demonstrates date functions and NULL-based status tracking.'],
    interviewQuestions: ['How would you track book availability in real-time?', 'How do you calculate a late return fine?'],
    quickQuiz: { question: 'Which function calculates the number of days between two dates?', options: ['DATE_DIFF()', 'DATEDIFF()', 'DAYS_BETWEEN()', 'DATE_SUB()'], answer: 'DATEDIFF()' }
  },

  'mysql_project_banking': { isStructured: true, title: '89. Banking Database', difficulty: 'Advanced', readingTime: '7 min', definition: 'A Banking Database manages customers, accounts, transactions, loans, and guarantees ACID compliance for all money movements.', whyUseIt: 'Banking databases require the strictest data integrity — demonstrating transactions, triggers, and constraints at their most critical.', syntax: '-- Tables: customers, accounts, transactions, loans', codeExample: 'CREATE DATABASE bank_db;\\nUSE bank_db;\\n\\nCREATE TABLE customers (\\n  id    INT AUTO_INCREMENT PRIMARY KEY,\\n  name  VARCHAR(100) NOT NULL,\\n  email VARCHAR(150) UNIQUE,\\n  phone VARCHAR(15)\\n);\\n\\nCREATE TABLE accounts (\\n  id          INT AUTO_INCREMENT PRIMARY KEY,\\n  customer_id INT,\\n  type        ENUM(\'savings\', \'current\', \'fd\'),\\n  balance     DECIMAL(15,2) DEFAULT 0 CHECK (balance >= 0),\\n  FOREIGN KEY (customer_id) REFERENCES customers(id)\\n);\\n\\nCREATE TABLE transactions (\\n  id         INT AUTO_INCREMENT PRIMARY KEY,\\n  from_acct  INT,\\n  to_acct    INT,\\n  amount     DECIMAL(15,2) CHECK (amount > 0),\\n  type       ENUM(\'debit\',\'credit\',\'transfer\'),\\n  done_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\\n  FOREIGN KEY (from_acct) REFERENCES accounts(id),\\n  FOREIGN KEY (to_acct)   REFERENCES accounts(id)\\n);\\n\\n-- Fund transfer with transaction safety:\\nSTART TRANSACTION;\\n  UPDATE accounts SET balance = balance - 5000 WHERE id = 1;\\n  UPDATE accounts SET balance = balance + 5000 WHERE id = 2;\\n  INSERT INTO transactions (from_acct,to_acct,amount,type)\\n  VALUES (1, 2, 5000, \'transfer\');\\nCOMMIT;', hasLiveOutput: false,
    explanation: [{ code: 'CHECK (balance >= 0)', desc: 'Prevents overdraft at the database level.' }, { code: 'ENUM type', desc: 'Restricts account type to a fixed set of allowed values.' }],
    realWorldExample: 'Every commercial bank in the world runs a database very similar to this — with additional encryption, auditing, and regulatory compliance layers.',
    commonMistakes: [{ error: 'Not using transactions for fund transfers.', code: '', suffix: 'Without a transaction, a failure between the two UPDATEs would cause money to disappear.' }],
    bestPractices: ['Always use transactions for money movement', 'Use CHECK constraints to prevent negative balances', 'Log ALL transactions with timestamps for audit trail'],
    summary: ['Banking requires strict ACID compliance.', 'All money movements must be wrapped in transactions.', 'CHECK constraints and triggers enforce business rules at the DB level.'],
    interviewQuestions: ['How do you ensure a bank transfer is atomic?', 'What constraint prevents a negative balance?'],
    quickQuiz: { question: 'What ensures a bank transfer either fully succeeds or fully fails?', options: ['Foreign Keys', 'Transactions with COMMIT/ROLLBACK', 'UNIQUE constraints', 'Stored procedures'], answer: 'Transactions with COMMIT/ROLLBACK' }
  },

  'mysql_project_hospital': { isStructured: true, title: '90. Hospital Database', difficulty: 'Advanced', readingTime: '7 min', definition: 'A Hospital Database manages patients, doctors, appointments, prescriptions, wards, and billing.', whyUseIt: 'Hospital databases demonstrate complex scheduling, many-to-many relationships, and privacy-sensitive data handling.', syntax: '-- Tables: patients, doctors, appointments, prescriptions, wards, bills', codeExample: 'CREATE DATABASE hospital_db;\\nUSE hospital_db;\\n\\nCREATE TABLE patients (\\n  id        INT AUTO_INCREMENT PRIMARY KEY,\\n  name      VARCHAR(100) NOT NULL,\\n  dob       DATE,\\n  blood_grp CHAR(3),\\n  phone     VARCHAR(15),\\n  address   TEXT\\n);\\n\\nCREATE TABLE doctors (\\n  id         INT AUTO_INCREMENT PRIMARY KEY,\\n  name       VARCHAR(100) NOT NULL,\\n  specialty  VARCHAR(100),\\n  phone      VARCHAR(15)\\n);\\n\\nCREATE TABLE appointments (\\n  id         INT AUTO_INCREMENT PRIMARY KEY,\\n  patient_id INT,\\n  doctor_id  INT,\\n  appt_date  DATETIME,\\n  status     ENUM(\'scheduled\',\'completed\',\'cancelled\') DEFAULT \'scheduled\',\\n  notes      TEXT,\\n  FOREIGN KEY (patient_id) REFERENCES patients(id),\\n  FOREIGN KEY (doctor_id)  REFERENCES doctors(id)\\n);\\n\\n-- Doctors with most appointments today:\\nSELECT d.name, COUNT(*) AS appointments_today\\nFROM doctors d\\nJOIN appointments a ON d.id = a.doctor_id\\nWHERE DATE(a.appt_date) = CURDATE()\\n  AND a.status = \'scheduled\'\\nGROUP BY d.id, d.name\\nORDER BY appointments_today DESC;', hasLiveOutput: false,
    explanation: [{ code: 'ENUM status', desc: 'Appointment can only be: scheduled, completed, or cancelled.' }, { code: 'DATE(datetime)', desc: 'Extracts the date part from a DATETIME for comparison.' }],
    realWorldExample: 'Apollo, Fortis, and all major hospital chains run HMS (Hospital Management Systems) on databases with this exact structure.',
    commonMistakes: [{ error: 'Storing DOB as VARCHAR instead of DATE.', code: '', suffix: 'DATE type allows age calculation with DATEDIFF. VARCHAR does not.' }],
    bestPractices: ['Use DATETIME for appointments (date + time)', 'Add ENUM for status fields to restrict values', 'Consider audit logging for all medical record changes'],
    summary: ['Hospital DB covers patients, doctors, appointments, and billing.', 'ENUM restricts status fields to valid values.', 'DATE functions enable scheduling queries.'],
    interviewQuestions: ['How would you design a hospital appointment system?', 'How do you prevent double-booking a doctor?'],
    quickQuiz: { question: 'Which data type restricts a column to a fixed set of string values?', options: ['VARCHAR', 'SET', 'ENUM', 'CHAR'], answer: 'ENUM' }
  },

  'mysql_project_ecommerce': { isStructured: true, title: '91. E-Commerce Database', difficulty: 'Advanced', readingTime: '8 min', definition: 'An E-Commerce Database manages products, categories, customers, orders, order items, payments, and reviews.', whyUseIt: 'E-commerce is the most common real-world database scenario. Mastering its design is highly valued in job interviews.', syntax: '-- Tables: categories, products, customers, orders, order_items, payments, reviews', codeExample: 'CREATE DATABASE ecom_db;\\nUSE ecom_db;\\n\\nCREATE TABLE categories (\\n  id   INT AUTO_INCREMENT PRIMARY KEY,\\n  name VARCHAR(100) UNIQUE\\n);\\n\\nCREATE TABLE products (\\n  id          INT AUTO_INCREMENT PRIMARY KEY,\\n  name        VARCHAR(200) NOT NULL,\\n  price       DECIMAL(10,2) NOT NULL CHECK (price >= 0),\\n  stock       INT DEFAULT 0,\\n  category_id INT,\\n  rating      DECIMAL(3,2) DEFAULT 0,\\n  FOREIGN KEY (category_id) REFERENCES categories(id)\\n);\\n\\nCREATE TABLE orders (\\n  id          INT AUTO_INCREMENT PRIMARY KEY,\\n  customer_id INT,\\n  total       DECIMAL(12,2),\\n  status      ENUM(\'pending\',\'processing\',\'shipped\',\'delivered\',\'cancelled\') DEFAULT \'pending\',\\n  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP\\n);\\n\\nCREATE TABLE order_items (\\n  order_id   INT,\\n  product_id INT,\\n  quantity   INT NOT NULL,\\n  unit_price DECIMAL(10,2),\\n  PRIMARY KEY (order_id, product_id),\\n  FOREIGN KEY (order_id)   REFERENCES orders(id),\\n  FOREIGN KEY (product_id) REFERENCES products(id)\\n);\\n\\n-- Top 5 best-selling products:\\nSELECT p.name, SUM(oi.quantity) AS total_sold\\nFROM products p\\nJOIN order_items oi ON p.id = oi.product_id\\nGROUP BY p.id, p.name\\nORDER BY total_sold DESC\\nLIMIT 5;', hasLiveOutput: false,
    explanation: [{ code: 'order_items table', desc: 'Junction table for the many-to-many relationship between orders and products.' }, { code: 'unit_price in order_items', desc: 'Stores the price AT TIME OF PURCHASE — prices can change later.' }],
    realWorldExample: 'Amazon, Flipkart, and Shopify all operate on databases with this exact structure, extended with millions of records.',
    commonMistakes: [{ error: 'Not storing price in order_items.', code: '', suffix: 'If product price changes, historical orders must show the original purchase price.' }],
    bestPractices: ['Store unit_price in order_items (not just reference products.price)', 'Add stock management with triggers or application logic', 'Use views for product catalog and sales reports'],
    summary: ['E-commerce DB is the most important real-world design to master.', 'Order items table captures the many-to-many between orders and products.', 'Always store price at time of purchase in order_items.'],
    interviewQuestions: ['Design an e-commerce database schema.', 'Why should you store price in order_items instead of just referencing products?'],
    quickQuiz: { question: 'Why should unit_price be stored in order_items and not just referenced from products?', options: ['It is faster', 'Product prices can change — you need the price at time of purchase', 'It saves storage', 'Products can be deleted'], answer: 'Product prices can change — you need the price at time of purchase' }
  },

  'mysql_project_exam': { isStructured: true, title: '92. Online Examination Database', difficulty: 'Advanced', readingTime: '7 min', definition: 'An Online Examination Database manages exams, questions, answer options, student attempts, and automatic result calculation.', whyUseIt: 'Exam systems demonstrate complex schema design, auto-grading logic, and time-constrained queries.', syntax: '-- Tables: exams, questions, options, student_attempts, answers', codeExample: 'CREATE DATABASE exam_db;\\nUSE exam_db;\\n\\nCREATE TABLE exams (\\n  id         INT AUTO_INCREMENT PRIMARY KEY,\\n  title      VARCHAR(200),\\n  duration   INT COMMENT "in minutes",\\n  total_marks INT\\n);\\n\\nCREATE TABLE questions (\\n  id        INT AUTO_INCREMENT PRIMARY KEY,\\n  exam_id   INT,\\n  question  TEXT NOT NULL,\\n  marks     INT DEFAULT 1,\\n  FOREIGN KEY (exam_id) REFERENCES exams(id)\\n);\\n\\nCREATE TABLE options (\\n  id          INT AUTO_INCREMENT PRIMARY KEY,\\n  question_id INT,\\n  option_text VARCHAR(500),\\n  is_correct  BOOLEAN DEFAULT FALSE,\\n  FOREIGN KEY (question_id) REFERENCES questions(id)\\n);\\n\\nCREATE TABLE student_answers (\\n  student_id  INT,\\n  question_id INT,\\n  selected_option INT,\\n  PRIMARY KEY (student_id, question_id),\\n  FOREIGN KEY (question_id)    REFERENCES questions(id),\\n  FOREIGN KEY (selected_option) REFERENCES options(id)\\n);\\n\\n-- Auto-calculate score:\\nSELECT sa.student_id,\\n  SUM(q.marks) AS total_score\\nFROM student_answers sa\\nJOIN options o ON sa.selected_option = o.id AND o.is_correct = TRUE\\nJOIN questions q ON sa.question_id = q.id\\nGROUP BY sa.student_id;', hasLiveOutput: false,
    explanation: [{ code: 'is_correct BOOLEAN', desc: 'Marks which option is the correct answer.' }, { code: 'Auto-scoring JOIN', desc: 'Join student answers with correct options to sum marks.' }],
    realWorldExample: 'Platforms like BYJU\'s, Khan Academy, and LMS systems use similar databases for quiz and exam management.',
    commonMistakes: [{ error: 'Storing the correct answer as a column in questions.', code: '', suffix: 'Better to mark is_correct on the options table for flexibility.' }],
    bestPractices: ['Store is_correct on options, not questions', 'Use composite PK in student_answers to prevent re-submission', 'Add exam timing with started_at, submitted_at columns'],
    summary: ['Exam DB manages questions, options, attempts, and auto-grading.', 'is_correct flag on options enables automatic score calculation.', 'Composite PK prevents duplicate answer submissions.'],
    interviewQuestions: ['How would you design a database for an online exam system?', 'How would you automatically calculate exam scores?'],
    quickQuiz: { question: 'Where should the "correct answer" flag be stored in an exam database?', options: ['In the questions table', 'In the exams table', 'In the options table as is_correct', 'In a separate answers table'], answer: 'In the options table as is_correct' }
  },

  'mysql_project_college': { isStructured: true, title: '93. College Management Database', difficulty: 'Advanced', readingTime: '7 min', definition: 'A College Management Database encompasses students, faculty, departments, courses, timetables, fees, and results.', whyUseIt: 'College management is a comprehensive project that ties together all MySQL concepts into one production-like system.', syntax: '-- Tables: departments, faculty, students, courses, timetable, fees, results', codeExample: 'CREATE DATABASE college_db;\\nUSE college_db;\\n\\nCREATE TABLE departments (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100), hod_id INT);\\nCREATE TABLE faculty (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100), dept_id INT, email VARCHAR(150) UNIQUE, FOREIGN KEY (dept_id) REFERENCES departments(id));\\nCREATE TABLE students (id INT PRIMARY KEY AUTO_INCREMENT, reg_no VARCHAR(20) UNIQUE, name VARCHAR(100), dept_id INT, batch_year INT, FOREIGN KEY (dept_id) REFERENCES departments(id));\\nCREATE TABLE courses (id INT PRIMARY KEY AUTO_INCREMENT, code VARCHAR(20) UNIQUE, name VARCHAR(200), credits INT, faculty_id INT, FOREIGN KEY (faculty_id) REFERENCES faculty(id));\\nCREATE TABLE results (student_id INT, course_id INT, semester INT, marks DECIMAL(5,2), grade CHAR(2), PRIMARY KEY (student_id, course_id, semester), FOREIGN KEY (student_id) REFERENCES students(id), FOREIGN KEY (course_id) REFERENCES courses(id));\\n\\n-- CGPA calculation:\\nSELECT s.name, s.reg_no,\\n  ROUND(SUM(c.credits * r.marks) / SUM(c.credits), 2) AS cgpa\\nFROM students s\\nJOIN results r ON s.id = r.student_id\\nJOIN courses c ON r.course_id = c.id\\nGROUP BY s.id\\nORDER BY cgpa DESC;', hasLiveOutput: false,
    explanation: [{ code: 'Weighted CGPA', desc: 'SUM(credits × marks) / SUM(credits) = weighted average grade.' }],
    realWorldExample: 'Every college in India running an ERP (enterprise resource planning) system has this database at its core.',
    commonMistakes: [{ error: 'Not including semester in results PK.', code: '', suffix: 'A student can take the same course in different semesters (reseat/repeat).' }],
    bestPractices: ['Include semester in results primary key', 'Create views for transcript generation', 'Use stored procedures for fee calculation and results processing'],
    summary: ['College DB ties together departments, faculty, students, and results.', 'CGPA calculation uses weighted averages.', 'Comprehensive project covering all MySQL concepts.'],
    interviewQuestions: ['How would you design a college management system?', 'How do you calculate CGPA in SQL?'],
    quickQuiz: { question: 'Why must semester be part of the results primary key?', options: ['To make it unique', 'Students can repeat the same course in a different semester', 'Required by MySQL', 'For faster queries'], answer: 'Students can repeat the same course in a different semester' }
  },

  'mysql_project_railway': { isStructured: true, title: '94. Railway Reservation Database', difficulty: 'Advanced', readingTime: '7 min', definition: 'A Railway Reservation Database manages trains, routes, stations, seats, passengers, and bookings.', whyUseIt: 'Railway systems demonstrate real-time availability, seat management, and complex scheduling queries.', syntax: '-- Tables: trains, stations, routes, schedules, seats, passengers, bookings', codeExample: 'CREATE DATABASE railway_db;\\nUSE railway_db;\\n\\nCREATE TABLE trains (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100), train_no VARCHAR(10) UNIQUE, type ENUM(\'express\',\'superfast\',\'local\'));\\nCREATE TABLE stations (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100), code CHAR(5) UNIQUE);\\nCREATE TABLE routes (id INT PRIMARY KEY AUTO_INCREMENT, train_id INT, from_stn INT, to_stn INT, departure TIME, arrival TIME, distance_km INT, FOREIGN KEY (train_id) REFERENCES trains(id), FOREIGN KEY (from_stn) REFERENCES stations(id), FOREIGN KEY (to_stn) REFERENCES stations(id));\\nCREATE TABLE seats (id INT PRIMARY KEY AUTO_INCREMENT, train_id INT, class ENUM(\'sleeper\',\'ac3\',\'ac2\',\'ac1\'), seat_no VARCHAR(10), FOREIGN KEY (train_id) REFERENCES trains(id));\\nCREATE TABLE bookings (id INT PRIMARY KEY AUTO_INCREMENT, seat_id INT, passenger_name VARCHAR(100), journey_date DATE, booked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, status ENUM(\'confirmed\',\'waitlist\',\'cancelled\') DEFAULT \'confirmed\', FOREIGN KEY (seat_id) REFERENCES seats(id));\\n\\n-- Available seats for a train on a date:\\nSELECT s.seat_no, s.class\\nFROM seats s\\nWHERE s.train_id = 1\\nAND s.id NOT IN (\\n  SELECT seat_id FROM bookings\\n  WHERE journey_date = \'2025-12-25\' AND status = \'confirmed\'\\n);', hasLiveOutput: false,
    explanation: [{ code: 'NOT IN subquery', desc: 'Finds seats that have no confirmed booking on the given date.' }],
    realWorldExample: 'IRCTC\'s booking system uses a database similar to this, serving 2+ million transactions per day.',
    commonMistakes: [{ error: 'Not checking for available seats before booking.', code: '', suffix: 'Use transactions and NOT IN checks to prevent double-booking.' }],
    bestPractices: ['Use transactions when creating bookings to prevent race conditions', 'Index journey_date and train_id for fast availability checks'],
    summary: ['Railway DB manages trains, seats, routes, and bookings.', 'Seat availability uses NOT IN with a subquery.', 'Transactions prevent double-booking.'],
    interviewQuestions: ['How do you prevent double seat booking in a railway system?', 'How do you find available seats for a given date?'],
    quickQuiz: { question: 'How do you find available seats (not booked) on a specific date?', options: ['LEFT JOIN with bookings', 'NOT IN with a subquery on bookings', 'INNER JOIN on seats', 'CROSS JOIN trains and seats'], answer: 'NOT IN with a subquery on bookings' }
  },

  'mysql_project_inventory': { isStructured: true, title: '95. Inventory Management System', difficulty: 'Advanced', readingTime: '7 min', definition: 'An Inventory Management System tracks products, suppliers, stock levels, purchase orders, and warehouse locations.', whyUseIt: 'IMS demonstrates stock tracking, automated low-stock alerts via triggers, and supplier management.', syntax: '-- Tables: products, suppliers, stock, purchase_orders, warehouses', codeExample: 'CREATE DATABASE inventory_db;\\nUSE inventory_db;\\n\\nCREATE TABLE suppliers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), contact VARCHAR(15), email VARCHAR(150));\\nCREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(200), sku VARCHAR(50) UNIQUE, price DECIMAL(10,2), reorder_level INT DEFAULT 10);\\nCREATE TABLE stock (id INT AUTO_INCREMENT PRIMARY KEY, product_id INT, quantity INT DEFAULT 0, warehouse VARCHAR(100), updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, FOREIGN KEY (product_id) REFERENCES products(id));\\nCREATE TABLE purchase_orders (id INT AUTO_INCREMENT PRIMARY KEY, product_id INT, supplier_id INT, quantity INT, order_date DATE, status ENUM(\'pending\',\'received\',\'cancelled\') DEFAULT \'pending\', FOREIGN KEY (product_id) REFERENCES products(id), FOREIGN KEY (supplier_id) REFERENCES suppliers(id));\\n\\n-- Products below reorder level (trigger purchase order):\\nSELECT p.name, p.sku, s.quantity, p.reorder_level\\nFROM products p\\nJOIN stock s ON p.id = s.product_id\\nWHERE s.quantity < p.reorder_level\\nORDER BY (s.quantity - p.reorder_level);', hasLiveOutput: false,
    explanation: [{ code: 'ON UPDATE CURRENT_TIMESTAMP', desc: 'Automatically updates updated_at whenever the row is modified.' }, { code: 'reorder_level', desc: 'Threshold below which a purchase order should be triggered.' }],
    realWorldExample: 'Amazon, Walmart, and all retail chains use Inventory Management Systems to track millions of SKUs across thousands of warehouses.',
    commonMistakes: [{ error: 'Not tracking stock per warehouse.', code: '', suffix: 'Multi-location businesses need stock tracked per warehouse, not just overall.' }],
    bestPractices: ['Use triggers to auto-alert when stock falls below reorder_level', 'Track stock movements (in/out) in a transactions table for full audit'],
    summary: ['IMS tracks products, stock levels, and purchase orders.', 'Reorder level triggers restocking.', 'ON UPDATE CURRENT_TIMESTAMP automates timestamp tracking.'],
    interviewQuestions: ['How would you design an inventory management system?', 'How do you identify products that need to be reordered?'],
    quickQuiz: { question: 'What does ON UPDATE CURRENT_TIMESTAMP do?', options: ['Sets a default creation timestamp', 'Updates the column to current time whenever the row is modified', 'Prevents the column from being NULL', 'Triggers a stored procedure'], answer: 'Updates the column to current time whenever the row is modified' }
  },

  // ─── MODULE 13: Interview Preparation ────────────────────────────────────────

  'mysql_interview_questions': {
    isStructured: true, title: '96. Top 50 MySQL Interview Questions', difficulty: 'Advanced', readingTime: '15 min',
    definition: 'The most frequently asked MySQL questions in technical interviews at top companies.',
    whyUseIt: 'Knowing these questions gives you a significant advantage in software engineering and database developer interviews.',
    syntax: '-- Categories:\\n-- Basics, DDL, DML, Joins, Functions, Design, Performance',
    codeExample: '-- Q1: Find the 2nd highest salary\\nSELECT MAX(salary) FROM employees\\nWHERE salary < (SELECT MAX(salary) FROM employees);\\n\\n-- Q2: Delete duplicates keeping latest\\nDELETE FROM students WHERE id NOT IN (\\n  SELECT MAX(id) FROM students GROUP BY email\\n);\\n\\n-- Q3: Find employees with same salary\\nSELECT salary, GROUP_CONCAT(name) AS employees\\nFROM employees\\nGROUP BY salary\\nHAVING COUNT(*) > 1;\\n\\n-- Q4: Running total\\nSELECT date, amount,\\n  SUM(amount) OVER (ORDER BY date) AS running_total\\nFROM transactions;\\n\\n-- Q5: Find students not enrolled\\nSELECT s.name FROM students s\\nLEFT JOIN enrollments e ON s.id = e.student_id\\nWHERE e.student_id IS NULL;',
    hasLiveOutput: false,
    explanation: [
      { code: 'MAX with subquery', desc: 'Classic 2nd highest pattern. Outer MAX < inner MAX.' },
      { code: 'GROUP_CONCAT', desc: 'Aggregates multiple strings into one comma-separated result.' },
      { code: 'Window functions', desc: 'SUM() OVER (ORDER BY) creates running totals without GROUP BY.' },
      { code: 'Anti-join pattern', desc: 'LEFT JOIN + WHERE right IS NULL finds unmatched records.' }
    ],
    realWorldExample: 'These exact queries appear in SQL rounds at Google, Amazon, Microsoft, TCS, Infosys, and Wipro interviews.',
    commonMistakes: [{ error: 'Not knowing the anti-join pattern.', code: '', suffix: 'LEFT JOIN WHERE IS NULL is a very common interview question — practice it.' }],
    bestPractices: ['Practice writing these queries from memory', 'Understand WHY each query works, not just how'],
    summary: ['Top interview queries include: Nth highest, duplicates, running totals, anti-joins.', 'Practice writing them without looking.', 'Understand the logic, not just the syntax.'],
    interviewQuestions: ['How do you find the Nth highest value?', 'How do you delete duplicate rows?', 'What is the anti-join pattern?'],
    quickQuiz: { question: 'What does LEFT JOIN + WHERE right.id IS NULL find?', options: ['All matching rows', 'Rows in left table with NO match in right table', 'All rows from right table', 'Duplicate rows'], answer: 'Rows in left table with NO match in right table' }
  },

  'mysql_query_questions': {
    isStructured: true, title: '97. Top 25 Query-Based Questions', difficulty: 'Advanced', readingTime: '10 min',
    definition: 'Practical SQL query challenges that test your ability to translate business requirements into SQL.',
    whyUseIt: 'Interviewers test not just knowledge but problem-solving ability — can you translate a requirement into working SQL?',
    syntax: '-- Write a query to...\\n-- 1. Find top-N records per group\\n-- 2. Calculate running totals\\n-- 3. Pivot data (rows to columns)\\n-- 4. Gap and island problems',
    codeExample: '-- Q1: Top 3 salaries per department\\nSELECT dept, name, salary FROM (\\n  SELECT department AS dept, name, salary,\\n    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rnk\\n  FROM employees\\n) AS ranked\\nWHERE rnk <= 3;\\n\\n-- Q2: Month with highest revenue\\nSELECT MONTHNAME(order_date) AS month, SUM(total) AS revenue\\nFROM orders\\nGROUP BY MONTH(order_date)\\nORDER BY revenue DESC\\nLIMIT 1;\\n\\n-- Q3: Customers who bought all products\\nSELECT customer_id FROM orders\\nGROUP BY customer_id\\nHAVING COUNT(DISTINCT product_id) = (SELECT COUNT(*) FROM products);',
    hasLiveOutput: false,
    explanation: [
      { code: 'RANK() OVER PARTITION BY', desc: 'Window function that ranks rows within each partition (group).' },
      { code: 'MONTHNAME()', desc: 'Returns month name from a DATE column.' },
      { code: 'Relational division', desc: 'Find customers who bought EVERY product — a classic SQL challenge.' }
    ],
    realWorldExample: 'These are real interview problems from Amazon, Flipkart, PhonePe, and Goldman Sachs SQL rounds.',
    commonMistakes: [{ error: 'Not knowing window functions for ranking problems.', code: '', suffix: 'RANK(), DENSE_RANK(), ROW_NUMBER() OVER (PARTITION BY...) are frequently tested.' }],
    bestPractices: ['Practice on LeetCode SQL, HackerRank SQL, and Mode Analytics', 'Learn window functions — they appear in 60%+ of advanced interviews'],
    summary: ['Advanced query challenges test practical SQL problem-solving.', 'Window functions (RANK, ROW_NUMBER) are essential.', 'Practice on coding platforms before interviews.'],
    interviewQuestions: ['What is the difference between RANK and DENSE_RANK?', 'How do you get the top-N records per group?'],
    quickQuiz: { question: 'Which function ranks rows within a partition?', options: ['GROUP BY + COUNT', 'RANK() OVER (PARTITION BY)', 'ORDER BY + LIMIT', 'HAVING + MAX'], answer: 'RANK() OVER (PARTITION BY)' }
  },

  'mysql_scenario_questions': {
    isStructured: true, title: '98. Scenario-Based SQL Questions', difficulty: 'Advanced', readingTime: '8 min',
    definition: 'Scenario-based questions present a real-world business problem and ask you to solve it with SQL.',
    whyUseIt: 'Senior positions require translating business requirements into optimized SQL. These questions test that exact skill.',
    syntax: '-- Scenarios: e-commerce, social media, banking, analytics',
    codeExample: '-- Scenario 1: Find users who logged in every day last week\\nSELECT user_id FROM login_logs\\nWHERE login_date BETWEEN DATE_SUB(CURDATE(), INTERVAL 7 DAY) AND CURDATE()\\nGROUP BY user_id\\nHAVING COUNT(DISTINCT DATE(login_date)) = 7;\\n\\n-- Scenario 2: Month-over-month revenue growth\\nSELECT\\n  month,\\n  revenue,\\n  LAG(revenue) OVER (ORDER BY month) AS prev_month,\\n  ROUND((revenue - LAG(revenue) OVER (ORDER BY month)) * 100.0\\n    / LAG(revenue) OVER (ORDER BY month), 2) AS growth_pct\\nFROM monthly_revenue;\\n\\n-- Scenario 3: Most recent order per customer\\nSELECT customer_id, order_id, order_date\\nFROM (\\n  SELECT *, RANK() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rnk\\n  FROM orders\\n) AS ranked WHERE rnk = 1;',
    hasLiveOutput: false,
    explanation: [
      { code: 'DATE_SUB()', desc: 'Subtracts an interval from a date: DATE_SUB(CURDATE(), INTERVAL 7 DAY).' },
      { code: 'LAG()', desc: 'Window function that returns the value from the previous row.' },
      { code: 'Growth %', desc: '(current - previous) / previous × 100 = percentage change.' }
    ],
    realWorldExample: 'Product managers at tech companies ask SQL analysts for exactly these types of reports — daily active users, revenue growth, customer behavior.',
    commonMistakes: [{ error: 'Not using window functions for sequence/ranking problems.', code: '', suffix: 'LAG, LEAD, RANK, and ROW_NUMBER solve 80% of advanced scenarios elegantly.' }],
    bestPractices: ['Break complex problems into steps', 'Use CTEs to make multi-step queries readable', 'Always verify output with sample data'],
    summary: ['Scenario-based questions test real-world SQL problem-solving.', 'Window functions (LAG, RANK) solve most advanced scenarios.', 'Practice translating business requirements into SQL.'],
    interviewQuestions: ['How do you calculate month-over-month growth?', 'How do you find the most recent record per group?'],
    quickQuiz: { question: 'Which window function returns the value from the PREVIOUS row?', options: ['LEAD()', 'LAG()', 'RANK()', 'FIRST_VALUE()'], answer: 'LAG()' }
  },

  'mysql_common_mistakes': {
    isStructured: true, title: '99. Common SQL Mistakes', difficulty: 'All Levels', readingTime: '6 min',
    definition: 'A guide to the most common SQL mistakes made by beginners and experienced developers, with how to fix them.',
    whyUseIt: 'Learning from mistakes prevents bugs, data loss, and performance issues in production systems.',
    syntax: '-- Mistakes categories:\\n-- Safety, Performance, Logic, Design',
    codeExample: '-- ❌ MISTAKE 1: DELETE without WHERE (data loss!)\\nDELETE FROM users;  -- Deletes ALL users!\\n-- ✅ FIX:\\nDELETE FROM users WHERE id = 5;\\n\\n-- ❌ MISTAKE 2: Using = NULL (always returns 0 rows)\\nSELECT * FROM users WHERE email = NULL;\\n-- ✅ FIX:\\nSELECT * FROM users WHERE email IS NULL;\\n\\n-- ❌ MISTAKE 3: SELECT * in production\\nSELECT * FROM products;  -- Fetches all columns unnecessarily\\n-- ✅ FIX:\\nSELECT id, name, price FROM products;\\n\\n-- ❌ MISTAKE 4: LIKE \'%word\' (disables index)\\nSELECT * FROM users WHERE name LIKE \'%ravi\';\\n-- ✅ FIX (if possible, start-anchored):\\nSELECT * FROM users WHERE name LIKE \'ravi%\';\\n\\n-- ❌ MISTAKE 5: FLOAT for money (rounding errors!)\\nCREATE TABLE orders (total FLOAT);\\n-- ✅ FIX:\\nCREATE TABLE orders (total DECIMAL(12,2));',
    hasLiveOutput: false,
    explanation: [
      { code: 'No WHERE on DELETE/UPDATE', desc: 'Most catastrophic mistake. ALWAYS use WHERE.' },
      { code: '= NULL vs IS NULL', desc: 'NULL comparisons require IS NULL. = NULL always returns false.' },
      { code: 'SELECT *', desc: 'Slow and fragile. Always specify the columns you need.' },
      { code: 'FLOAT for money', desc: 'Floating point has binary precision issues. Use DECIMAL for currency.' }
    ],
    realWorldExample: 'Countless production outages have been caused by "DELETE FROM users;" without WHERE. Always test on staging first!',
    commonMistakes: [{ error: 'Not testing destructive queries (DELETE, DROP, UPDATE all) on staging.', code: '', suffix: 'Test every data-changing query on a backup or staging database first.' }],
    bestPractices: ['Run SELECT with the same WHERE before DELETE/UPDATE', 'Never use FLOAT for monetary values', 'Always specify column names in SELECT'],
    summary: ['Common SQL mistakes: no WHERE, = NULL, SELECT *, FLOAT for money.', 'Test destructive queries with SELECT first.', 'Learning these prevents production disasters.'],
    interviewQuestions: ['What are common SQL mistakes?', 'Why should you never use FLOAT for currency?', 'How do you safely test a DELETE query?'],
    quickQuiz: { question: 'What is wrong with: WHERE column = NULL?', options: ['Nothing — it works fine', 'NULL comparisons require IS NULL, not =', 'NULL must be in quotes: = "NULL"', 'It deletes the column'], answer: 'NULL comparisons require IS NULL, not =' }
  },

  'mysql_cheat_sheet': {
    isStructured: true, title: '100. MySQL Cheat Sheet', difficulty: 'All Levels', readingTime: '10 min',
    definition: 'A comprehensive quick-reference guide covering all major MySQL commands, organized by category.',
    whyUseIt: 'A cheat sheet lets you quickly find the right syntax without memorizing every detail — perfect for rapid development.',
    syntax: '-- DDL | DML | DQL | DCL | Functions | Joins | Constraints',
    codeExample: '-- ═══ DATABASE ═══\\nCREATE DATABASE db; USE db; DROP DATABASE db; SHOW DATABASES;\\n\\n-- ═══ TABLE ═══\\nCREATE TABLE t (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL);\\nDESCRIBE t; SHOW TABLES; DROP TABLE t; TRUNCATE TABLE t;\\nALTER TABLE t ADD col INT; ALTER TABLE t DROP COLUMN col;\\n\\n-- ═══ CRUD ═══\\nINSERT INTO t (name) VALUES (\'Ravi\');\\nSELECT * FROM t WHERE id = 1 ORDER BY name LIMIT 10;\\nUPDATE t SET name = \'Ravi K\' WHERE id = 1;\\nDELETE FROM t WHERE id = 1;\\n\\n-- ═══ JOINS ═══\\nINNER JOIN t2 ON t1.id = t2.fk\\nLEFT  JOIN t2 ON t1.id = t2.fk\\nRIGHT JOIN t2 ON t1.id = t2.fk\\nCROSS JOIN t2\\n\\n-- ═══ AGGREGATE ═══\\nCOUNT(*) SUM(col) AVG(col) MIN(col) MAX(col)\\nGROUP BY col HAVING COUNT(*) > 5\\n\\n-- ═══ STRING FUNCTIONS ═══\\nCONCAT(a,b) LENGTH(s) UPPER(s) LOWER(s) TRIM(s)\\nSUBSTRING(s,1,5) REPLACE(s,\'old\',\'new\')\\n\\n-- ═══ DATE FUNCTIONS ═══\\nNOW() CURDATE() CURTIME()\\nDATE_ADD(d, INTERVAL 7 DAY) DATEDIFF(d1,d2) YEAR(d) MONTH(d) DAY(d)\\n\\n-- ═══ TRANSACTIONS ═══\\nSTART TRANSACTION; COMMIT; ROLLBACK; SAVEPOINT sp; ROLLBACK TO sp;\\n\\n-- ═══ CONSTRAINTS ═══\\nNOT NULL  UNIQUE  PRIMARY KEY  FOREIGN KEY  CHECK  DEFAULT',
    hasLiveOutput: false,
    explanation: [
      { code: 'DDL commands', desc: 'CREATE, ALTER, DROP, TRUNCATE — define structure.' },
      { code: 'DML commands', desc: 'INSERT, UPDATE, DELETE — manipulate data.' },
      { code: 'DQL commands', desc: 'SELECT — retrieve data.' },
      { code: 'Functions', desc: 'String, date, aggregate, and window functions.' }
    ],
    realWorldExample: 'Every developer keeps a cheat sheet nearby. The best developers know where to look, not just what to memorize.',
    commonMistakes: [{ error: 'Trying to memorize everything.', code: '', suffix: 'Focus on understanding concepts. Use cheat sheets for syntax details.' }],
    bestPractices: ['Bookmark this cheat sheet for quick reference', 'Practice each category with real queries', 'Build your own cheat sheet — writing it helps you remember'],
    summary: ['A MySQL cheat sheet covers all commands grouped by category.', 'Use it as a quick reference, not a substitute for understanding.', 'Practice with real queries to internalize the syntax.'],
    interviewQuestions: ['What are the main categories of SQL commands?', 'What is the difference between WHERE and HAVING?', 'What functions are available for string manipulation?'],
    quickQuiz: { question: 'Which category do INSERT, UPDATE, DELETE belong to?', options: ['DDL', 'DML', 'DQL', 'DCL'], answer: 'DML' }
  }
};
