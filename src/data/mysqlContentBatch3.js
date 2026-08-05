// Batch 3: Module 5 (SQL Functions) + Module 6 (Grouping) — Topics 35-48
export const mysqlContentBatch3 = {

  // ─── MODULE 5: SQL Functions ──────────────────────────────────────────────────

  'mysql_count': {
    isStructured: true,
    title: '35. COUNT()',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'COUNT() returns the number of rows that match a condition. It is the most commonly used aggregate function.',
    whyUseIt: 'COUNT() is used in almost every report — counting users, orders, products, or any metric.',
    syntax: 'SELECT COUNT(*) FROM table;\\nSELECT COUNT(column) FROM table; -- ignores NULLs\\nSELECT COUNT(DISTINCT column) FROM table;',
    codeExample: '-- Count ALL rows:\\nSELECT COUNT(*) AS total_students FROM students;\\n\\n-- Count non-NULL emails only:\\nSELECT COUNT(email) AS students_with_email FROM students;\\n\\n-- Count per group:\\nSELECT grade, COUNT(*) AS students_per_grade\\nFROM students\\nGROUP BY grade;\\n\\n-- Count unique values:\\nSELECT COUNT(DISTINCT grade) AS unique_grades FROM students;\\n\\n-- Count with condition:\\nSELECT COUNT(*) AS top_students\\nFROM students WHERE grade = \'A\';',
    hasLiveOutput: false,
    explanation: [
      { code: 'COUNT(*)', desc: 'Counts ALL rows including those with NULLs.' },
      { code: 'COUNT(col)', desc: 'Counts only rows where the column is NOT NULL.' },
      { code: 'COUNT(DISTINCT col)', desc: 'Counts only unique non-NULL values.' }
    ],
    realWorldExample: 'SELECT COUNT(*) FROM users WHERE last_login > NOW() - INTERVAL 30 DAY; — Count active users in the last 30 days.',
    commonMistakes: [
      { error: 'Thinking COUNT(col) and COUNT(*) are the same.', code: '', suffix: 'COUNT(col) skips NULLs. COUNT(*) counts every row.' }
    ],
    bestPractices: ['Use COUNT(*) for total rows, COUNT(col) for non-null counts', 'Combine with GROUP BY for per-category counts'],
    summary: ['COUNT() counts rows.', 'COUNT(*) includes NULLs, COUNT(col) excludes them.', 'COUNT(DISTINCT col) counts unique values.'],
    interviewQuestions: ['What is the difference between COUNT(*) and COUNT(column)?', 'How do you count rows per group?', 'How do you count only unique values?'],
    quickQuiz: { question: 'Which COUNT ignores NULL values?', options: ['COUNT(*)', 'COUNT(column)', 'COUNT(ALL)', 'COUNT(NULL)'], answer: 'COUNT(column)' }
  },

  'mysql_sum': {
    isStructured: true,
    title: '36. SUM()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'SUM() returns the total sum of a numeric column.',
    whyUseIt: 'SUM() is essential for financial reporting — total sales, total salary cost, total inventory value.',
    syntax: 'SELECT SUM(column) FROM table;\\nSELECT SUM(column) FROM table WHERE condition;',
    codeExample: '-- Total salary of all employees:\\nSELECT SUM(salary) AS total_payroll FROM employees;\\n\\n-- Total revenue from paid orders:\\nSELECT SUM(total_amount) AS revenue\\nFROM orders WHERE status = \'paid\';\\n\\n-- Sum per department:\\nSELECT department, SUM(salary) AS dept_payroll\\nFROM employees\\nGROUP BY department\\nORDER BY dept_payroll DESC;\\n\\n-- Sum with calculation:\\nSELECT SUM(quantity * unit_price) AS total_value\\nFROM order_items;',
    hasLiveOutput: false,
    explanation: [
      { code: 'SUM(col)', desc: 'Adds up all non-NULL values in the specified column.' },
      { code: 'SUM with GROUP BY', desc: 'Calculates the total for each group.' },
      { code: 'SUM of expression', desc: 'You can sum a calculation, like SUM(qty * price).' }
    ],
    realWorldExample: 'SELECT SUM(amount) AS total_donated FROM donations WHERE campaign_id = 5; — Calculate total funds raised in a campaign.',
    commonMistakes: [{ error: 'SUM on non-numeric columns returns 0 or NULL.', code: '', suffix: 'SUM only works on numeric data types.' }],
    bestPractices: ['Combine SUM with GROUP BY for per-category totals', 'Use DECIMAL columns for accurate SUM results'],
    summary: ['SUM() adds up all values in a numeric column.', 'Ignores NULL values.', 'Works with GROUP BY for per-group totals.'],
    interviewQuestions: ['How do you calculate total revenue per month?', 'What does SUM return if all values are NULL?'],
    quickQuiz: { question: 'What does SUM() return if all column values are NULL?', options: ['0', 'Error', 'NULL', 'Empty string'], answer: 'NULL' }
  },

  'mysql_avg': {
    isStructured: true,
    title: '37. AVG()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'AVG() returns the average (mean) value of a numeric column.',
    whyUseIt: 'AVG() is used for performance analysis, pricing, and statistical summaries.',
    syntax: 'SELECT AVG(column) FROM table;\\nSELECT ROUND(AVG(column), 2) FROM table;',
    codeExample: '-- Average student age:\\nSELECT AVG(age) AS average_age FROM students;\\n\\n-- Average salary per department:\\nSELECT department, ROUND(AVG(salary), 2) AS avg_salary\\nFROM employees\\nGROUP BY department;\\n\\n-- Find students above average score:\\nSELECT name, score FROM students\\nWHERE score > (SELECT AVG(score) FROM students);\\n\\n-- Monthly average order value:\\nSELECT MONTH(order_date) AS month,\\n       ROUND(AVG(total), 2) AS avg_order_value\\nFROM orders\\nGROUP BY MONTH(order_date);',
    hasLiveOutput: false,
    explanation: [
      { code: 'AVG(col)', desc: 'Calculates the average of all non-NULL values.' },
      { code: 'ROUND(AVG(), 2)', desc: 'Rounds the average to 2 decimal places.' },
      { code: 'AVG in subquery', desc: 'Compare individual rows against the average using a subquery.' }
    ],
    realWorldExample: 'SELECT AVG(rating) AS avg_rating FROM product_reviews WHERE product_id = 101; — Calculate average product rating like Amazon.',
    commonMistakes: [{ error: 'AVG ignores NULLs, which may skew results.', code: '', suffix: 'If NULLs should be counted as 0, use AVG(IFNULL(col, 0)).' }],
    bestPractices: ['Always ROUND AVG results for clean output', 'Be aware AVG ignores NULLs — decide if that is correct for your use case'],
    summary: ['AVG() returns the mean value of a numeric column.', 'Ignores NULL values.', 'Wrap with ROUND() for clean decimal output.'],
    interviewQuestions: ['How does AVG handle NULL values?', 'How do you find records above the average?'],
    quickQuiz: { question: 'How do you round AVG to 2 decimal places?', options: ['AVG(col, 2)', 'ROUND(AVG(col), 2)', 'TRUNCATE(AVG(col), 2)', 'FORMAT(AVG(col))'], answer: 'ROUND(AVG(col), 2)' }
  },

  'mysql_min': {
    isStructured: true,
    title: '38. MIN()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'MIN() returns the smallest value in a specified column. Works with numbers, strings, and dates.',
    whyUseIt: 'MIN() finds the lowest value — cheapest product, earliest date, lowest score.',
    syntax: 'SELECT MIN(column) FROM table;\\nSELECT MIN(column) FROM table WHERE condition;',
    codeExample: '-- Lowest price in the store:\\nSELECT MIN(price) AS cheapest_product FROM products;\\n\\n-- Earliest order date:\\nSELECT MIN(order_date) AS first_order FROM orders;\\n\\n-- Minimum salary per department:\\nSELECT department, MIN(salary) AS lowest_salary\\nFROM employees\\nGROUP BY department;\\n\\n-- Find the product with the minimum price:\\nSELECT * FROM products\\nWHERE price = (SELECT MIN(price) FROM products);',
    hasLiveOutput: false,
    explanation: [
      { code: 'MIN(col)', desc: 'Returns the smallest value. For strings, returns alphabetically first.' },
      { code: 'MIN with dates', desc: 'Returns the earliest date.' },
      { code: 'MIN in subquery', desc: 'Find the full row of the record with the minimum value.' }
    ],
    realWorldExample: 'SELECT MIN(price) FROM tickets WHERE event_id = 5 AND available = 1; — Find the cheapest available event ticket.',
    commonMistakes: [{ error: 'MIN on text returns alphabetical minimum, not numerical.', code: '', suffix: 'MIN("10") vs MIN(10) — ensure numeric columns are numeric type.' }],
    bestPractices: ['Use MIN with GROUP BY for per-group minimums', 'Combine with a subquery to get the full record of the minimum row'],
    summary: ['MIN() returns the smallest value in a column.', 'Works on numbers, strings, and dates.', 'Use a subquery to get the full row of the minimum record.'],
    interviewQuestions: ['How do you find the record with the minimum value?', 'How does MIN work on string columns?'],
    quickQuiz: { question: 'What does MIN(order_date) return?', options: ['The latest date', 'The most common date', 'The earliest date', 'NULL'], answer: 'The earliest date' }
  },

  'mysql_max': {
    isStructured: true,
    title: '39. MAX()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'MAX() returns the largest value in a specified column. Works with numbers, strings, and dates.',
    whyUseIt: 'MAX() finds the highest value — most expensive product, latest date, top score.',
    syntax: 'SELECT MAX(column) FROM table;',
    codeExample: '-- Highest salary:\\nSELECT MAX(salary) AS top_salary FROM employees;\\n\\n-- Most recent order:\\nSELECT MAX(order_date) AS latest_order FROM orders;\\n\\n-- Max score per grade:\\nSELECT grade, MAX(score) AS top_score\\nFROM students\\nGROUP BY grade;\\n\\n-- Get the employee with the highest salary:\\nSELECT * FROM employees\\nWHERE salary = (SELECT MAX(salary) FROM employees);',
    hasLiveOutput: false,
    explanation: [
      { code: 'MAX(col)', desc: 'Returns the largest value. For strings, returns alphabetically last.' },
      { code: 'MAX with dates', desc: 'Returns the most recent (latest) date.' },
      { code: 'MAX in subquery', desc: 'Find the full row of the record with the maximum value.' }
    ],
    realWorldExample: 'SELECT MAX(bid_amount) FROM bids WHERE auction_id = 99; — Find the current highest bid in an auction.',
    commonMistakes: [{ error: 'Confusing MAX with ORDER BY DESC LIMIT 1.', code: '', suffix: 'MAX is faster for finding the maximum value, but LIMIT 1 is needed to get the full row.' }],
    bestPractices: ['Use MIN and MAX together to see the full range of a column', 'Combine with GROUP BY for per-category extremes'],
    summary: ['MAX() returns the largest value in a column.', 'Works on numbers, strings, and dates.', 'Use a subquery to get the full row of the maximum record.'],
    interviewQuestions: ['How do you find the second highest salary?', 'What is the difference between MAX() and ORDER BY DESC LIMIT 1?'],
    quickQuiz: { question: 'How do you find the employee with the highest salary?', options: ['SELECT * FROM employees ORDER BY salary LIMIT 1', 'SELECT * FROM employees WHERE salary = MAX(salary)', 'SELECT * FROM employees WHERE salary = (SELECT MAX(salary) FROM employees)', 'SELECT MAX(*) FROM employees'], answer: 'SELECT * FROM employees WHERE salary = (SELECT MAX(salary) FROM employees)' }
  },

  'mysql_round': {
    isStructured: true,
    title: '40. ROUND()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'ROUND() rounds a numeric value to a specified number of decimal places.',
    whyUseIt: 'Raw calculations often produce long decimals. ROUND() formats them cleanly for display.',
    syntax: 'ROUND(number, decimal_places)\\nROUND(number) -- rounds to nearest integer',
    codeExample: '-- Round to 2 decimal places:\\nSELECT ROUND(3.14159, 2);  -- Returns: 3.14\\n\\n-- Round to nearest integer:\\nSELECT ROUND(4.6);  -- Returns: 5\\nSELECT ROUND(4.4);  -- Returns: 4\\n\\n-- Round negative places (round to tens):\\nSELECT ROUND(1234.56, -2);  -- Returns: 1200\\n\\n-- Use with AVG:\\nSELECT ROUND(AVG(salary), 2) AS avg_salary FROM employees;\\n\\n-- Use with SUM:\\nSELECT ROUND(SUM(total), 2) AS total_revenue FROM orders;',
    hasLiveOutput: false,
    explanation: [
      { code: 'ROUND(n, 2)', desc: 'Rounds to 2 decimal places.' },
      { code: 'ROUND(n, 0)', desc: 'Rounds to the nearest whole number.' },
      { code: 'ROUND(n, -2)', desc: 'Rounds to the nearest hundred.' }
    ],
    realWorldExample: 'SELECT product_name, ROUND(price * 0.9, 2) AS discounted_price FROM products; — Show 10% discounted prices, rounded to 2 decimals.',
    commonMistakes: [{ error: 'Using ROUND for financial calculations.', code: '', suffix: 'For money, store as DECIMAL. ROUND is only for display purposes.' }],
    bestPractices: ['Always ROUND AVG(), calculations, and percentages', 'Use TRUNCATE() if you need to cut decimals without rounding'],
    summary: ['ROUND() rounds a number to the specified decimal places.', 'Default rounds to nearest integer.', 'Negative decimal places round to tens, hundreds, etc.'],
    interviewQuestions: ['What is the difference between ROUND() and TRUNCATE()?', 'How do you round to the nearest hundred?'],
    quickQuiz: { question: 'What does ROUND(4.567, 2) return?', options: ['4.5', '4.56', '4.57', '5.0'], answer: '4.57' }
  },

  'mysql_concat': {
    isStructured: true,
    title: '41. CONCAT()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'CONCAT() joins two or more strings together into one. CONCAT_WS() adds a separator between values.',
    whyUseIt: 'CONCAT lets you build full names, addresses, URLs, or any formatted string from separate columns.',
    syntax: 'CONCAT(str1, str2, str3, ...)\\nCONCAT_WS(separator, str1, str2, ...)',
    codeExample: '-- Combine first and last name:\\nSELECT CONCAT(first_name, \' \', last_name) AS full_name\\nFROM employees;\\n\\n-- CONCAT_WS (With Separator - skips NULLs):\\nSELECT CONCAT_WS(\', \', city, state, country) AS address\\nFROM users;\\n\\n-- Build a URL:\\nSELECT CONCAT(\'https://example.com/user/\', id) AS profile_url\\nFROM users;\\n\\n-- NULL handling:\\nSELECT CONCAT(\'Hello \', NULL, \'World\');  -- Returns NULL!\\nSELECT CONCAT_WS(\' \', \'Hello\', NULL, \'World\');  -- Returns: Hello World',
    hasLiveOutput: false,
    explanation: [
      { code: 'CONCAT(a,b)', desc: 'Joins strings. Returns NULL if ANY argument is NULL.' },
      { code: 'CONCAT_WS(sep,a,b)', desc: 'Joins with separator and SKIPS NULL values. Safer.' },
      { code: 'String + literal', desc: 'You can mix column values and string literals.' }
    ],
    realWorldExample: 'SELECT CONCAT_WS(" ", title, first_name, last_name) AS display_name FROM users; — Build a formatted name like "Dr. Ravi Kumar".',
    commonMistakes: [{ error: 'CONCAT returns NULL if any argument is NULL.', code: '', suffix: 'Use CONCAT_WS or IFNULL to handle NULLs.' }],
    bestPractices: ['Prefer CONCAT_WS over CONCAT when nulls are possible', 'Use aliases when using CONCAT to name the result column'],
    summary: ['CONCAT() joins strings together.', 'Returns NULL if any argument is NULL.', 'CONCAT_WS is safer — it skips NULLs and adds a separator.'],
    interviewQuestions: ['What is the difference between CONCAT and CONCAT_WS?', 'What does CONCAT return when one argument is NULL?'],
    quickQuiz: { question: 'What does CONCAT("Hello", NULL, "World") return?', options: ['Hello World', 'HelloWorld', 'NULL', 'Error'], answer: 'NULL' }
  },

  'mysql_length': {
    isStructured: true,
    title: '42. LENGTH()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'LENGTH() returns the number of bytes in a string. CHAR_LENGTH() returns the number of characters (safer for Unicode).',
    whyUseIt: 'Length functions help with data validation — checking if passwords are too short, usernames are too long, etc.',
    syntax: 'LENGTH(string)\\nCHAR_LENGTH(string)  -- recommended for Unicode',
    codeExample: '-- Length of a name:\\nSELECT name, CHAR_LENGTH(name) AS name_length\\nFROM students;\\n\\n-- Find users with short passwords (validation):\\nSELECT username FROM users\\nWHERE CHAR_LENGTH(password) < 8;\\n\\n-- Find long product descriptions:\\nSELECT product_name FROM products\\nWHERE LENGTH(description) > 1000;\\n\\n-- LENGTH vs CHAR_LENGTH:\\nSELECT LENGTH(\'café\');       -- Returns 5 (bytes)\\nSELECT CHAR_LENGTH(\'café\'); -- Returns 4 (characters)',
    hasLiveOutput: false,
    explanation: [
      { code: 'LENGTH(s)', desc: 'Returns the length in bytes. Multi-byte chars count as more.' },
      { code: 'CHAR_LENGTH(s)', desc: 'Returns the length in characters. Use for Unicode text.' },
      { code: 'Validation use', desc: 'Filter records where text is too short or too long.' }
    ],
    realWorldExample: 'SELECT username FROM users WHERE CHAR_LENGTH(username) BETWEEN 3 AND 20; — Validate usernames during a data audit.',
    commonMistakes: [{ error: 'Using LENGTH instead of CHAR_LENGTH for Unicode text.', code: '', suffix: 'LENGTH counts bytes, not chars. "café" is 5 bytes but 4 characters.' }],
    bestPractices: ['Always use CHAR_LENGTH for character counting', 'Use LENGTH only for binary data size checks'],
    summary: ['LENGTH() returns byte count.', 'CHAR_LENGTH() returns character count — preferred for text.', 'Useful for data validation queries.'],
    interviewQuestions: ['What is the difference between LENGTH and CHAR_LENGTH?', 'How do you find strings longer than a specific length?'],
    quickQuiz: { question: 'Which function correctly counts characters in Unicode strings?', options: ['LENGTH()', 'SIZE()', 'CHAR_LENGTH()', 'STR_LEN()'], answer: 'CHAR_LENGTH()' }
  },

  'mysql_upper_lower': {
    isStructured: true,
    title: '43. UPPER() & 44. LOWER()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'UPPER() converts a string to uppercase. LOWER() converts it to lowercase.',
    whyUseIt: 'Used for case-insensitive comparisons, standardizing data during import, and formatting output.',
    syntax: 'UPPER(string)\\nLOWER(string)',
    codeExample: '-- Convert to uppercase:\\nSELECT UPPER(\'hello world\');  -- HELLO WORLD\\n\\n-- Convert to lowercase:\\nSELECT LOWER(\'RAVI KUMAR\');  -- ravi kumar\\n\\n-- Case-insensitive search:\\nSELECT * FROM students\\nWHERE LOWER(name) = LOWER(\'ravi kumar\');\\n\\n-- Standardize email on insert:\\nINSERT INTO users (email)\\nVALUES (LOWER(\'RAVI@GMAIL.COM\'));\\n\\n-- Format display:\\nSELECT UPPER(first_name), LOWER(last_name) FROM employees;',
    hasLiveOutput: false,
    explanation: [
      { code: 'UPPER(s)', desc: 'Converts all characters to uppercase: "hello" → "HELLO".' },
      { code: 'LOWER(s)', desc: 'Converts all characters to lowercase: "HELLO" → "hello".' },
      { code: 'Case-insensitive search', desc: 'Wrap both sides of comparison with LOWER() for reliable matching.' }
    ],
    realWorldExample: 'INSERT INTO users (email) VALUES (LOWER("ADMIN@COMPANY.COM")); — Standardize all emails to lowercase before saving.',
    commonMistakes: [{ error: 'LIKE is already case-insensitive in MySQL.', code: '', suffix: 'But LOWER() is still useful for = comparisons and data standardization.' }],
    bestPractices: ['Store emails and usernames in lowercase using LOWER()', 'Use LOWER() on both sides of = comparisons for safety'],
    summary: ['UPPER() converts strings to uppercase.', 'LOWER() converts strings to lowercase.', 'Use them to standardize data and do case-insensitive searches.'],
    interviewQuestions: ['How do you do a case-insensitive comparison in MySQL?', 'Why should emails be stored in lowercase?'],
    quickQuiz: { question: 'What does LOWER("RAVI@GMAIL.COM") return?', options: ['RAVI@GMAIL.COM', 'ravi@gmail.com', 'Ravi@Gmail.Com', 'Error'], answer: 'ravi@gmail.com' }
  },

  // ─── MODULE 6: Grouping Data ──────────────────────────────────────────────────

  'mysql_group_by': {
    isStructured: true,
    title: '45. GROUP BY',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'GROUP BY groups rows that have the same values into summary rows. It is used with aggregate functions like COUNT, SUM, AVG, MIN, MAX.',
    whyUseIt: 'GROUP BY is essential for reporting and analytics — counting users per country, total sales per month, average salary per department.',
    syntax: 'SELECT col, AGG_FUNC(col2)\\nFROM table\\nGROUP BY col;',
    codeExample: '-- Count students per grade:\\nSELECT grade, COUNT(*) AS total\\nFROM students\\nGROUP BY grade;\\n\\n-- Total sales per product:\\nSELECT product_id, SUM(amount) AS total_sales\\nFROM orders\\nGROUP BY product_id\\nORDER BY total_sales DESC;\\n\\n-- Average salary per department:\\nSELECT department,\\n       ROUND(AVG(salary), 2) AS avg_salary,\\n       COUNT(*) AS headcount\\nFROM employees\\nGROUP BY department;\\n\\n-- Group by multiple columns:\\nSELECT department, job_title, COUNT(*) AS count\\nFROM employees\\nGROUP BY department, job_title;',
    hasLiveOutput: false,
    explanation: [
      { code: 'GROUP BY col', desc: 'Groups all rows with the same value in col into one output row.' },
      { code: 'With aggregate', desc: 'Applies the aggregate function (COUNT, SUM, etc.) to each group.' },
      { code: 'Multiple columns', desc: 'Group by a combination of columns for finer granularity.' }
    ],
    realWorldExample: 'SELECT country, COUNT(*) AS users FROM registrations GROUP BY country ORDER BY users DESC; — Show user count by country like a world map dashboard.',
    commonMistakes: [
      { error: 'Selecting a non-aggregated column not in GROUP BY.', code: '', suffix: 'Every column in SELECT must either be in GROUP BY or wrapped in an aggregate function.' }
    ],
    bestPractices: ['Every non-aggregate column in SELECT must be in GROUP BY', 'Use ORDER BY after GROUP BY to sort results', 'Combine with HAVING to filter groups'],
    summary: ['GROUP BY groups rows with matching values into summary rows.', 'Always paired with aggregate functions.', 'Every selected column must be in GROUP BY or aggregated.'],
    interviewQuestions: ['What is GROUP BY used for?', 'What is the difference between WHERE and HAVING?', 'Can you GROUP BY multiple columns?'],
    quickQuiz: { question: 'What must every non-aggregated column in SELECT be included in?', options: ['ORDER BY', 'HAVING', 'GROUP BY', 'WHERE'], answer: 'GROUP BY' }
  },

  'mysql_having': {
    isStructured: true,
    title: '46. HAVING',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'HAVING filters the results of GROUP BY. It works like WHERE, but WHERE filters rows BEFORE grouping, while HAVING filters groups AFTER aggregation.',
    whyUseIt: 'You cannot use WHERE to filter aggregate results like COUNT() > 5. HAVING is the solution.',
    syntax: 'SELECT col, AGG_FUNC(col2)\\nFROM table\\nGROUP BY col\\nHAVING AGG_FUNC(col2) condition;',
    codeExample: '-- Grades with more than 5 students:\\nSELECT grade, COUNT(*) AS total\\nFROM students\\nGROUP BY grade\\nHAVING total > 5;\\n\\n-- Departments with avg salary > 60000:\\nSELECT department, ROUND(AVG(salary), 2) AS avg_sal\\nFROM employees\\nGROUP BY department\\nHAVING avg_sal > 60000;\\n\\n-- Products sold more than 100 times:\\nSELECT product_id, SUM(quantity) AS total_sold\\nFROM order_items\\nGROUP BY product_id\\nHAVING total_sold > 100\\nORDER BY total_sold DESC;',
    hasLiveOutput: false,
    explanation: [
      { code: 'HAVING', desc: 'Filters groups after GROUP BY has been applied.' },
      { code: 'WHERE vs HAVING', desc: 'WHERE filters rows. HAVING filters groups. Use WHERE before GROUP BY, HAVING after.' },
      { code: 'Using alias', desc: 'In MySQL you CAN use the column alias in HAVING (unlike in WHERE).' }
    ],
    realWorldExample: 'SELECT customer_id, COUNT(*) AS orders FROM orders GROUP BY customer_id HAVING orders > 10; — Find repeat customers who ordered more than 10 times.',
    commonMistakes: [
      { error: 'Using WHERE instead of HAVING for aggregate conditions.', code: '', suffix: 'WHERE COUNT(*) > 5 will throw an error. Use HAVING COUNT(*) > 5.' }
    ],
    bestPractices: ['Use WHERE to filter rows before grouping (better performance)', 'Use HAVING to filter groups after aggregation', 'Combine both: WHERE for row conditions, HAVING for group conditions'],
    summary: ['HAVING filters groups after GROUP BY.', 'WHERE cannot filter aggregate results — HAVING can.', 'Use both WHERE and HAVING together for optimal queries.'],
    interviewQuestions: ['What is the difference between WHERE and HAVING?', 'Can you use HAVING without GROUP BY?', 'Why is WHERE more efficient than HAVING for non-aggregate conditions?'],
    quickQuiz: { question: 'Which clause filters results AFTER GROUP BY aggregation?', options: ['WHERE', 'HAVING', 'ORDER BY', 'FILTER'], answer: 'HAVING' }
  },

  'mysql_aggregate_functions': {
    isStructured: true,
    title: '47. Aggregate Functions',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Aggregate functions perform a calculation on a set of rows and return a single summary value. They are used with GROUP BY for per-group analysis.',
    whyUseIt: 'Aggregate functions are the backbone of all reporting and dashboards — sales totals, user counts, average ratings, etc.',
    syntax: 'COUNT(), SUM(), AVG(), MIN(), MAX()\\n-- All ignore NULL values (except COUNT(*))',
    codeExample: '-- Comprehensive summary report:\\nSELECT\\n  department,\\n  COUNT(*)            AS headcount,\\n  ROUND(AVG(salary),2) AS avg_salary,\\n  SUM(salary)         AS total_payroll,\\n  MIN(salary)         AS lowest_salary,\\n  MAX(salary)         AS highest_salary\\nFROM employees\\nGROUP BY department\\nORDER BY total_payroll DESC;\\n\\n-- Sales dashboard:\\nSELECT\\n  MONTH(order_date) AS month,\\n  COUNT(*)           AS order_count,\\n  SUM(total)         AS revenue,\\n  ROUND(AVG(total),2) AS avg_order\\nFROM orders\\nWHERE YEAR(order_date) = 2025\\nGROUP BY MONTH(order_date);',
    hasLiveOutput: false,
    explanation: [
      { code: 'COUNT(*)', desc: 'Total rows in group.' },
      { code: 'SUM(col)', desc: 'Total of numeric column values.' },
      { code: 'AVG(col)', desc: 'Average of numeric column values.' },
      { code: 'MIN(col)/MAX(col)', desc: 'Smallest/largest value in the group.' }
    ],
    realWorldExample: 'Every analytics dashboard you see — Google Analytics, Mixpanel, your bank statement — runs aggregate functions behind the scenes.',
    commonMistakes: [{ error: 'Mixing aggregated and non-aggregated columns without GROUP BY.', code: '', suffix: 'Every non-aggregated column MUST be in GROUP BY.' }],
    bestPractices: ['Combine multiple aggregate functions in a single query for efficient reports', 'Always alias aggregate results for readability'],
    summary: ['COUNT, SUM, AVG, MIN, MAX are the 5 core aggregate functions.', 'They all ignore NULL values (except COUNT(*)).', 'Used with GROUP BY to calculate per-group summaries.'],
    interviewQuestions: ['Which aggregate functions ignore NULLs?', 'Can you use multiple aggregate functions in one SELECT?', 'What is the difference between SUM and COUNT?'],
    quickQuiz: { question: 'Which aggregate function returns the number of rows?', options: ['SUM()', 'AVG()', 'COUNT()', 'TOTAL()'], answer: 'COUNT()' }
  },

  'mysql_case': {
    isStructured: true,
    title: '48. CASE Statement',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'CASE is a conditional expression in SQL — like an if-else or switch statement. It evaluates conditions and returns different values based on the result.',
    whyUseIt: 'CASE lets you create conditional columns, categorize data, and apply logic directly in your SQL queries.',
    syntax: 'CASE\\n  WHEN condition1 THEN result1\\n  WHEN condition2 THEN result2\\n  ELSE default_result\\nEND',
    codeExample: '-- Categorize by grade:\\nSELECT name, score,\\n  CASE\\n    WHEN score >= 90 THEN \'Distinction\'\\n    WHEN score >= 75 THEN \'First Class\'\\n    WHEN score >= 60 THEN \'Second Class\'\\n    WHEN score >= 50 THEN \'Pass\'\\n    ELSE                  \'Fail\'\\n  END AS result\\nFROM students;\\n\\n-- Salary band categorization:\\nSELECT name, salary,\\n  CASE\\n    WHEN salary > 100000 THEN \'Senior\'\\n    WHEN salary > 60000  THEN \'Mid-Level\'\\n    ELSE                      \'Junior\'\\n  END AS band\\nFROM employees;\\n\\n-- Use CASE with aggregate:\\nSELECT\\n  SUM(CASE WHEN gender = \'M\' THEN 1 ELSE 0 END) AS male_count,\\n  SUM(CASE WHEN gender = \'F\' THEN 1 ELSE 0 END) AS female_count\\nFROM employees;',
    hasLiveOutput: false,
    explanation: [
      { code: 'WHEN condition', desc: 'Evaluated in order — first match wins.' },
      { code: 'THEN result', desc: 'The value returned when the WHEN condition is true.' },
      { code: 'ELSE', desc: 'Default value if no WHEN condition matches.' },
      { code: 'END', desc: 'Closes the CASE expression. Required.' }
    ],
    realWorldExample: 'SELECT order_id, CASE WHEN total > 10000 THEN "Free Shipping" ELSE "Paid Shipping" END AS shipping FROM orders; — Conditional shipping logic.',
    commonMistakes: [{ error: 'Forgetting END to close the CASE.', code: '', suffix: 'CASE...END is mandatory. Missing END causes a syntax error.' }],
    bestPractices: ['Always include ELSE to handle unmatched cases', 'Order WHEN conditions from most specific to most general', 'Use CASE inside aggregate functions for conditional aggregation'],
    summary: ['CASE evaluates conditions in order and returns the first match.', 'ELSE handles all unmatched cases.', 'Must be closed with END.'],
    interviewQuestions: ['What is the CASE statement used for in SQL?', 'How do you use CASE inside an aggregate function?', 'What is the difference between simple CASE and searched CASE?'],
    quickQuiz: { question: 'What keyword closes a CASE expression?', options: ['CLOSE', 'FINISH', 'END', 'STOP'], answer: 'END' }
  }
};
