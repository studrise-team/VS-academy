const commonReferences = [
  { label: 'W3Schools MySQL', url: 'https://www.w3schools.com/mysql/' },
  { label: 'MySQL Official Docs', url: 'https://dev.mysql.com/doc/refman/8.0/en/' }
];

export const mysqlContentBatch3 = {
  'mysql_count': {
    isStructured: true,
    title: '35. COUNT()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The COUNT() function returns the number of rows that match a specified criterion.',
    whyUseIt: 'Essential for finding out "how many" of something exist (e.g., how many users, how many orders today).',
    syntax: 'SELECT COUNT(column_name) FROM table_name WHERE condition;',
    codeExample: '-- Count all rows in the users table:\nSELECT COUNT(*) FROM users;\n\n-- Count users who are older than 18:\nSELECT COUNT(*) FROM users WHERE age > 18;\n\n-- Count unique countries (using DISTINCT):\nSELECT COUNT(DISTINCT country) FROM users;',
    hasLiveOutput: false,
    expectedOutput: '+----------+\n| COUNT(*) |\n+----------+\n|      150 |\n+----------+',
    explanation: [
      { code: 'COUNT(*)', desc: 'Counts every single row, including those with NULL values.' },
      { code: 'COUNT(col)', desc: 'Counts rows where the specific column is NOT NULL.' }
    ],
    realWorldExample: 'A dashboard showing "Total Registered Users: 5,204".',
    commonMistakes: [
      { error: 'Assuming COUNT(column) counts NULLs.', code: '', suffix: 'Only COUNT(*) includes rows where columns might be NULL.' }
    ],
    bestPractices: ['Use COUNT(*) when you just need the total row count, as it is heavily optimized in most storage engines (like InnoDB)'],
    practiceExercise: {
      task: 'Write a query to find the total number of products in the `inventory` table where `stock` is exactly 0.',
      expectedOutput: '+----------+\n| COUNT(*) |\n+----------+',
      solution: 'SELECT COUNT(*) FROM inventory WHERE stock = 0;'
    },
    quiz: [
      { question: 'What does COUNT() do?', options: ['Adds values together', 'Returns the number of rows', 'Finds the maximum value', 'Finds the average'], answer: 'Returns the number of rows' },
      { question: 'What is the difference between COUNT(*) and COUNT(column_name)?', options: ['None, they are identical', 'COUNT(*) ignores NULLs, COUNT(column) includes them', 'COUNT(*) includes NULLs, COUNT(column) ignores them', 'COUNT(*) is a syntax error'], answer: 'COUNT(*) includes NULLs, COUNT(column) ignores them' },
      { question: 'How do you count the number of UNIQUE countries in a table?', options: ['COUNT(UNIQUE country)', 'UNIQUE(COUNT country)', 'COUNT(DISTINCT country)', 'DISTINCT(COUNT country)'], answer: 'COUNT(DISTINCT country)' },
      { question: 'Can COUNT be used with a WHERE clause?', options: ['Yes', 'No', 'Only on primary keys', 'Only on numeric columns'], answer: 'Yes' },
      { question: 'What does COUNT() return if there are no matching rows?', options: ['NULL', '0', '-1', 'Error'], answer: '0' }
    ],
    interviewQuestions: [
      { q: 'Why is `COUNT(*)` generally preferred over `COUNT(id)` for finding total rows?', a: 'Database engines heavily optimize `COUNT(*)`. When you use `COUNT(id)`, the database technically has to check if `id` is NULL for every row (even if it\'s a primary key), which can be slightly slower.' }
    ],
    summary: ['COUNT() finds the number of rows.', 'COUNT(*) includes NULLs, COUNT(col) ignores them.'],
    references: commonReferences
  },

  'mysql_sum': {
    isStructured: true,
    title: '36. SUM()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The SUM() function calculates the total sum of a numeric column.',
    whyUseIt: 'To calculate totals, like total revenue, total items sold, or total points scored.',
    syntax: 'SELECT SUM(column_name) FROM table_name WHERE condition;',
    codeExample: '-- Calculate total revenue from all orders:\nSELECT SUM(price) FROM orders;\n\n-- Calculate revenue from today only:\nSELECT SUM(price) FROM orders WHERE order_date = CURRENT_DATE;\n\n-- Use an alias to rename the output:\nSELECT SUM(price) AS TotalRevenue FROM orders;',
    hasLiveOutput: false,
    expectedOutput: '+--------------+\n| TotalRevenue |\n+--------------+\n|      4500.50 |\n+--------------+',
    explanation: [
      { code: 'SUM(price)', desc: 'Adds up all the values in the price column.' },
      { code: 'AS TotalRevenue', desc: 'Renames the result column for better readability.' }
    ],
    realWorldExample: 'An e-commerce site calculating the total value of items currently in a user\'s shopping cart.',
    commonMistakes: [
      { error: 'Using SUM on text columns.', code: 'SUM(name)', suffix: 'SUM only works on numeric data types (INT, DECIMAL, FLOAT, etc.).' }
    ],
    bestPractices: ['Always use an alias with aggregate functions (like SUM) so the application code can easily read the result key'],
    practiceExercise: {
      task: 'Write a query to calculate the total `salary` paid to employees in the "IT" department.',
      expectedOutput: '+-------------+\n| TotalSalary |\n+-------------+',
      solution: 'SELECT SUM(salary) AS TotalSalary FROM employees WHERE department = \'IT\';'
    },
    quiz: [
      { question: 'What does the SUM() function do?', options: ['Counts rows', 'Adds numeric values together', 'Finds the highest value', 'Averages the values'], answer: 'Adds numeric values together' },
      { question: 'What data types can SUM() be used on?', options: ['Strings and Numbers', 'Only Numbers', 'Only Dates', 'Any data type'], answer: 'Only Numbers' },
      { question: 'What does SUM() return if there are no rows to sum?', options: ['0', 'NULL', '-1', 'Error'], answer: 'NULL' },
      { question: 'Is it possible to use SUM with a WHERE clause?', options: ['Yes', 'No', 'Only on primary keys', 'Only on integers'], answer: 'Yes' },
      { question: 'How do you rename the column returned by SUM()?', options: ['RENAME', 'LIKE', 'AS', 'SET'], answer: 'AS' }
    ],
    interviewQuestions: [
      { q: 'How does SUM() handle NULL values?', a: 'Aggregate functions like `SUM()`, `AVG()`, `MIN()`, and `MAX()` ignore NULL values. If all values are NULL, `SUM()` returns NULL.' }
    ],
    summary: ['SUM() adds up numeric values.', 'Only works on numeric columns.'],
    references: commonReferences
  },

  'mysql_avg': {
    isStructured: true,
    title: '37. AVG()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The AVG() function returns the average value of a numeric column.',
    whyUseIt: 'To find the mean value of a dataset (e.g., average product rating, average salary).',
    syntax: 'SELECT AVG(column_name) FROM table_name WHERE condition;',
    codeExample: '-- Find the average price of all products:\nSELECT AVG(price) FROM products;\n\n-- Find the average rating for a specific product:\nSELECT AVG(rating) AS AverageRating \nFROM reviews \nWHERE product_id = 101;',
    hasLiveOutput: false,
    expectedOutput: '+---------------+\n| AverageRating |\n+---------------+\n|           4.5 |\n+---------------+',
    explanation: [
      { code: 'AVG(rating)', desc: 'Adds all ratings and divides by the number of ratings.' }
    ],
    realWorldExample: 'Calculating the 4.5-star average rating displayed on an Amazon product page.',
    commonMistakes: [
      { error: 'Assuming AVG() counts NULLs as zero.', code: '', suffix: 'AVG() ignores NULL values entirely. If you want NULLs treated as 0, you must use COALESCE(col, 0).' }
    ],
    bestPractices: ['Combine AVG with ROUND() to make the output readable (e.g., ROUND(AVG(price), 2))'],
    practiceExercise: {
      task: 'Write a query to find the average `score` of students in the `exams` table.',
      expectedOutput: '+------------+\n| AVG(score) |\n+------------+',
      solution: 'SELECT AVG(score) FROM exams;'
    },
    quiz: [
      { question: 'What does the AVG() function calculate?', options: ['Median', 'Mode', 'Mean (Average)', 'Sum'], answer: 'Mean (Average)' },
      { question: 'How does AVG() handle NULL values?', options: ['Treats them as 0', 'Causes an error', 'Ignores them entirely', 'Treats them as 1'], answer: 'Ignores them entirely' },
      { question: 'Can AVG() be used on text columns?', options: ['Yes, it averages string length', 'No, only on numeric columns', 'Yes, it works on any type', 'Only if the text contains numbers'], answer: 'No, only on numeric columns' },
      { question: 'Which function is often paired with AVG() to limit decimal places?', options: ['LIMIT', 'TRIM', 'ROUND', 'TRUNCATE'], answer: 'ROUND' },
      { question: 'If a table has 5 rows: 10, 20, 30, NULL, 40. What does AVG() divide the total by?', options: ['5', '4', '0', '3'], answer: '4' }
    ],
    interviewQuestions: [
      { q: 'If you want AVG() to treat NULL values as 0, how would you write the query?', a: 'You would use the COALESCE or IFNULL function: `SELECT AVG(COALESCE(column_name, 0)) FROM table;`' }
    ],
    summary: ['AVG() calculates the mean.', 'Ignores NULL values.', 'Often paired with ROUND().'],
    references: commonReferences
  },

  'mysql_min': {
    isStructured: true,
    title: '38. MIN()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The MIN() function returns the smallest value of the selected column.',
    whyUseIt: 'To find the lowest price, the oldest date, or the first alphabetically sorted string.',
    syntax: 'SELECT MIN(column_name) FROM table_name WHERE condition;',
    codeExample: '-- Find the cheapest product:\nSELECT MIN(price) AS LowestPrice FROM products;\n\n-- Find the oldest user (earliest date of birth):\nSELECT MIN(date_of_birth) FROM users;',
    hasLiveOutput: false,
    expectedOutput: '+-------------+\n| LowestPrice |\n+-------------+\n|        5.99 |\n+-------------+',
    explanation: [
      { code: 'MIN()', desc: 'Finds the absolute lowest value in the specified column.' }
    ],
    realWorldExample: 'Sorting or filtering a list of hotels by "Cheapest Price".',
    commonMistakes: [
      { error: 'Trying to get OTHER columns using MIN.', code: 'SELECT name, MIN(price) FROM products', suffix: 'This is invalid without GROUP BY. MIN(price) returns one row, but name returns many.' }
    ],
    bestPractices: ['Use MIN() on dates to find the earliest/oldest record'],
    practiceExercise: {
      task: 'Write a query to find the lowest `salary` in the `employees` table.',
      expectedOutput: '+-------------+\n| MIN(salary) |\n+-------------+',
      solution: 'SELECT MIN(salary) FROM employees;'
    },
    quiz: [
      { question: 'What does the MIN() function return?', options: ['Average value', 'Smallest value', 'Largest value', 'Most frequent value'], answer: 'Smallest value' },
      { question: 'Can MIN() be used on Date columns?', options: ['Yes, it returns the earliest (oldest) date', 'No, only numbers', 'Yes, it returns the most recent date', 'Only on timestamps'], answer: 'Yes, it returns the earliest (oldest) date' },
      { question: 'Can MIN() be used on String (text) columns?', options: ['No', 'Yes, it returns the longest string', 'Yes, it returns the first string alphabetically (A-Z)', 'Only if they contain numbers'], answer: 'Yes, it returns the first string alphabetically (A-Z)' },
      { question: 'What is wrong with: SELECT name, MIN(price) FROM products?', options: ['Syntax error on MIN', 'It will return the wrong name (unless you use GROUP BY or a Subquery)', 'Name must be numeric', 'Nothing, it works perfectly'], answer: 'It will return the wrong name (unless you use GROUP BY or a Subquery)' },
      { question: 'Does MIN() ignore NULL values?', options: ['Yes', 'No', 'Only on strings', 'Only on numbers'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'How do you find the name of the product that has the minimum price?', a: 'You cannot simply do `SELECT name, MIN(price)`. You must use a subquery: `SELECT name, price FROM products WHERE price = (SELECT MIN(price) FROM products);` or use `ORDER BY price ASC LIMIT 1;`' }
    ],
    summary: ['MIN() finds the lowest value.', 'Works on numbers, dates (earliest), and strings (A-Z).'],
    references: commonReferences
  },

  'mysql_max': {
    isStructured: true,
    title: '39. MAX()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The MAX() function returns the largest value of the selected column.',
    whyUseIt: 'To find the most expensive item, the most recent date, or the highest score.',
    syntax: 'SELECT MAX(column_name) FROM table_name WHERE condition;',
    codeExample: '-- Find the most expensive product:\nSELECT MAX(price) AS HighestPrice FROM products;\n\n-- Find the most recent order (latest date):\nSELECT MAX(order_date) FROM orders;',
    hasLiveOutput: false,
    expectedOutput: '+--------------+\n| HighestPrice |\n+--------------+\n|      1999.99 |\n+--------------+',
    explanation: [
      { code: 'MAX()', desc: 'Finds the absolute highest value in the specified column.' }
    ],
    realWorldExample: 'Finding the "High Score" on a gaming leaderboard.',
    commonMistakes: [
      { error: 'Trying to get OTHER columns using MAX.', code: 'SELECT name, MAX(score) FROM players', suffix: 'Use ORDER BY score DESC LIMIT 1 instead to get the player\'s name.' }
    ],
    bestPractices: ['Use MAX() on created_at columns to find the last time a user logged in or performed an action'],
    practiceExercise: {
      task: 'Write a query to find the highest `rating` given in the `reviews` table.',
      expectedOutput: '+-------------+\n| MAX(rating) |\n+-------------+',
      solution: 'SELECT MAX(rating) FROM reviews;'
    },
    quiz: [
      { question: 'What does the MAX() function return?', options: ['Average value', 'Smallest value', 'Largest value', 'Most frequent value'], answer: 'Largest value' },
      { question: 'Can MAX() be used on Date columns?', options: ['Yes, it returns the most recent (latest) date', 'No, only numbers', 'Yes, it returns the oldest date', 'Only on timestamps'], answer: 'Yes, it returns the most recent (latest) date' },
      { question: 'Can MAX() be used on String (text) columns?', options: ['No', 'Yes, it returns the longest string', 'Yes, it returns the last string alphabetically (Z-A)', 'Only if they contain numbers'], answer: 'Yes, it returns the last string alphabetically (Z-A)' },
      { question: 'How do you rename the result column of MAX()?', options: ['Using RENAME', 'Using LIKE', 'Using AS', 'Using SET'], answer: 'Using AS' },
      { question: 'Are aggregate functions like MAX() allowed in the WHERE clause?', options: ['Yes, always', 'No, use the HAVING clause instead or a subquery', 'Only on numbers', 'Yes, but only in MySQL'], answer: 'No, use the HAVING clause instead or a subquery' }
    ],
    interviewQuestions: [
      { q: 'Can you use aggregate functions like MAX() inside a WHERE clause?', a: 'No, aggregate functions cannot be used in a WHERE clause. You must use them in a HAVING clause (if using GROUP BY) or as a Subquery (e.g., `WHERE price = (SELECT MAX(price) FROM products)`).' }
    ],
    summary: ['MAX() finds the highest value.', 'Works on numbers, dates (latest), and strings (Z-A).'],
    references: commonReferences
  },

  'mysql_round': {
    isStructured: true,
    title: '40. ROUND()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The ROUND() function rounds a number to a specified number of decimal places.',
    whyUseIt: 'Math in SQL often results in long decimals (e.g., 10.333333). ROUND cleans this up for display.',
    syntax: 'SELECT ROUND(column_name, decimals) FROM table_name;',
    codeExample: '-- Given an average of 14.5678\n\n-- Round to 2 decimal places:\nSELECT ROUND(AVG(price), 2) FROM products;\n-- Result: 14.57\n\n-- Round to a whole number (0 decimals):\nSELECT ROUND(AVG(price), 0) FROM products;\n-- Result: 15',
    hasLiveOutput: false,
    expectedOutput: '+----------------------+\n| ROUND(AVG(price), 2) |\n+----------------------+\n|                14.57 |\n+----------------------+',
    explanation: [
      { code: 'ROUND(x, 2)', desc: 'Rounds the number x to exactly 2 decimal places.' },
      { code: 'Rounding logic', desc: '.5 and above rounds up. Below .5 rounds down.' }
    ],
    realWorldExample: 'Displaying currency. You always want prices formatted to exactly 2 decimal places.',
    commonMistakes: [
      { error: 'Forgetting the second argument.', code: 'ROUND(14.567)', suffix: 'If omitted, it defaults to 0 (whole number).' }
    ],
    bestPractices: ['Always use ROUND when calculating averages (AVG) for UI display'],
    practiceExercise: {
      task: 'Write a query that calculates the average `score` from the `students` table and rounds it to 1 decimal place.',
      expectedOutput: '+----------------+\n| AverageScore   |\n+----------------+',
      solution: 'SELECT ROUND(AVG(score), 1) AS AverageScore FROM students;'
    },
    quiz: [
      { question: 'What does ROUND(10.6) return if no decimals are specified?', options: ['10.6', '10', '11', 'Error'], answer: '11' },
      { question: 'How do you round a column `price` to 2 decimal places?', options: ['ROUND(price.2)', 'ROUND(price, 2)', 'ROUND(2, price)', 'TRIM(price, 2)'], answer: 'ROUND(price, 2)' },
      { question: 'What does ROUND(14.49, 0) return?', options: ['14', '15', '14.5', '14.49'], answer: '14' },
      { question: 'Which function is often wrapped inside ROUND()?', options: ['COUNT', 'MIN', 'AVG', 'CONCAT'], answer: 'AVG' },
      { question: 'Can ROUND() take negative decimal places (e.g., ROUND(1234, -2))?', options: ['No, error', 'Yes, it rounds to the nearest hundred (1200)', 'Yes, it rounds to the nearest decimal', 'It returns NULL'], answer: 'Yes, it rounds to the nearest hundred (1200)' }
    ],
    interviewQuestions: [
      { q: 'What happens if you use a negative number for the decimal parameter in ROUND()?', a: 'Using a negative number rounds the integer part of the number. For example, `ROUND(156.45, -1)` returns `160`, and `ROUND(156.45, -2)` returns `200`.' }
    ],
    summary: ['ROUND() limits decimal places.', 'Standard rounding rules apply (.5 rounds up).'],
    references: commonReferences
  },

  'mysql_concat': {
    isStructured: true,
    title: '41. CONCAT()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The CONCAT() function adds (concatenates) two or more strings together.',
    whyUseIt: 'To combine multiple columns into a single readable string (e.g., First Name + Last Name).',
    syntax: 'SELECT CONCAT(string1, string2, ...) FROM table_name;',
    codeExample: '-- Combine first and last name with a space in between:\nSELECT CONCAT(first_name, \' \', last_name) AS FullName \nFROM users;\n\n-- Create a readable sentence:\nSELECT CONCAT(name, \' is \', age, \' years old.\') AS Bio \nFROM users;',
    hasLiveOutput: false,
    expectedOutput: '+-------------------------+\n| FullName                |\n+-------------------------+\n| John Doe                |\n| Jane Smith              |\n+-------------------------+',
    explanation: [
      { code: 'CONCAT(a, b)', desc: 'Joins a and b seamlessly.' },
      { code: '\' \'', desc: 'You must explicitly add spaces as strings if you want them.' }
    ],
    realWorldExample: 'Formatting an address: CONCAT(street, ", ", city, " ", zip_code).',
    commonMistakes: [
      { error: 'Forgetting the space.', code: 'CONCAT(first, last)', suffix: 'Outputs "JohnDoe" instead of "John Doe".' },
      { error: 'CONCAT with NULL.', code: '', suffix: 'If ANY value in CONCAT is NULL, the entire result becomes NULL.' }
    ],
    bestPractices: ['Use CONCAT_WS() (With Separator) to avoid NULLs ruining the entire string'],
    practiceExercise: {
      task: 'Write a query to combine `city` and `country` into a single column `Location`, separated by a comma and a space (e.g., "Paris, France").',
      expectedOutput: '+---------------+\n| Location      |\n+---------------+',
      solution: 'SELECT CONCAT(city, \', \', country) AS Location FROM places;'
    },
    quiz: [
      { question: 'What does CONCAT() do?', options: ['Deletes strings', 'Replaces text', 'Joins two or more strings together', 'Calculates math'], answer: 'Joins two or more strings together' },
      { question: 'How do you add a space between two columns (A and B)?', options: ['CONCAT(A B)', 'CONCAT(A, B)', 'CONCAT(A, " ", B)', 'CONCAT(A + B)'], answer: 'CONCAT(A, " ", B)' },
      { question: 'What happens if you CONCAT("Hello", NULL)?', options: ['"HelloNULL"', '"Hello"', 'NULL', 'Syntax Error'], answer: 'NULL' },
      { question: 'Which MySQL function automatically handles a separator and ignores NULLs?', options: ['CONCAT_NULL', 'CONCAT_WS', 'JOIN_STR', 'MERGE'], answer: 'CONCAT_WS' },
      { question: 'Can you CONCAT numbers?', options: ['Yes, they are converted to strings automatically', 'No, error', 'Only if you CAST them first', 'Yes, but it adds them mathematically'], answer: 'Yes, they are converted to strings automatically' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between CONCAT() and CONCAT_WS()?', a: 'CONCAT() combines strings, but if any argument is NULL, the entire result is NULL. CONCAT_WS() stands for "Concat With Separator", takes a separator as the first argument, and safely ignores NULL values.' }
    ],
    summary: ['CONCAT() joins strings.', 'Explicitly add spaces if needed.', 'If any input is NULL, result is NULL.'],
    references: commonReferences
  },

  'mysql_length': {
    isStructured: true,
    title: '42. LENGTH()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The LENGTH() function returns the length of a string (in bytes). CHAR_LENGTH() returns the length in characters.',
    whyUseIt: 'To find short/long passwords, validate data, or find anomalous data (e.g., phone numbers that aren\'t exactly 10 digits).',
    syntax: 'SELECT LENGTH(column_name) FROM table_name;',
    codeExample: '-- Find the length of a string:\nSELECT name, LENGTH(name) AS NameLength FROM users;\n\n-- Find users with passwords shorter than 8 characters:\nSELECT email FROM users WHERE LENGTH(password) < 8;',
    hasLiveOutput: false,
    expectedOutput: '+-------+------------+\n| name  | NameLength |\n+-------+------------+\n| Ravi  |          4 |\n| Alice |          5 |\n+-------+------------+',
    explanation: [
      { code: 'LENGTH(\'Ravi\')', desc: 'Returns 4.' }
    ],
    realWorldExample: 'Security audits: Identifying users who need to update their overly short legacy passwords.',
    commonMistakes: [
      { error: 'Confusing LENGTH and CHAR_LENGTH.', code: '', suffix: 'LENGTH returns bytes. CHAR_LENGTH returns characters. For emojis or special characters, LENGTH > CHAR_LENGTH.' }
    ],
    bestPractices: ['Use CHAR_LENGTH() instead of LENGTH() when dealing with multi-byte characters like emojis or certain languages'],
    practiceExercise: {
      task: 'Write a query to find all users whose `username` is exactly 5 characters long.',
      expectedOutput: '+----------+\n| username |\n+----------+',
      solution: 'SELECT * FROM users WHERE CHAR_LENGTH(username) = 5;'
    },
    quiz: [
      { question: 'What does LENGTH("SQL") return?', options: ['1', '2', '3', '4'], answer: '3' },
      { question: 'What is the difference between LENGTH() and CHAR_LENGTH()?', options: ['No difference', 'LENGTH counts bytes; CHAR_LENGTH counts characters', 'LENGTH is for numbers; CHAR_LENGTH is for text', 'LENGTH counts spaces; CHAR_LENGTH does not'], answer: 'LENGTH counts bytes; CHAR_LENGTH counts characters' },
      { question: 'How would you find usernames shorter than 4 characters?', options: ['WHERE username < 4', 'WHERE LENGTH(username) < 4', 'WHERE SIZE(username) < 4', 'WHERE COUNT(username) < 4'], answer: 'WHERE LENGTH(username) < 4' },
      { question: 'Does LENGTH() count spaces?', options: ['Yes', 'No', 'Only at the beginning', 'Only at the end'], answer: 'Yes' },
      { question: 'What does LENGTH(NULL) return?', options: ['0', 'NULL', '4 (for the word NULL)', 'Error'], answer: 'NULL' }
    ],
    interviewQuestions: [
      { q: 'When would LENGTH() and CHAR_LENGTH() return different results?', a: 'When the string contains multi-byte characters (like Unicode, emojis, or Kanji). For example, a single emoji is 1 character (CHAR_LENGTH = 1) but might be 4 bytes (LENGTH = 4).' }
    ],
    summary: ['LENGTH() counts bytes.', 'CHAR_LENGTH() counts characters.', 'Useful for validation.'],
    references: commonReferences
  },

  'mysql_upper': {
    isStructured: true,
    title: '43. UPPER()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The UPPER() function converts a string to upper-case.',
    whyUseIt: 'For data normalization, display formatting, or case-insensitive comparisons (though MySQL is usually case-insensitive by default).',
    syntax: 'SELECT UPPER(column_name) FROM table_name;',
    codeExample: '-- Convert names to uppercase:\nSELECT UPPER(name) AS ShoutName FROM users;\n\n-- Example:\n-- "alice" -> "ALICE"',
    hasLiveOutput: false,
    expectedOutput: '+-----------+\n| ShoutName |\n+-----------+\n| ALICE     |\n| BOB       |\n+-----------+',
    explanation: [
      { code: 'UPPER(name)', desc: 'Turns every character into its capital equivalent.' }
    ],
    realWorldExample: 'Standardizing acronyms or country codes (e.g., forcing "usa" to "USA").',
    commonMistakes: [
      { error: 'Using UPPER for case-insensitive search in MySQL.', code: '', suffix: 'MySQL\'s default collation (ci) is already case-insensitive. WHERE name = \'alice\' matches \'ALICE\'.' }
    ],
    bestPractices: ['Use UPPER() to format output before sending it to a frontend application'],
    practiceExercise: {
      task: 'Write a query to select the `title` of all books, but format the output in completely uppercase letters.',
      expectedOutput: '+-------------+\n| UPPER(title)|\n+-------------+',
      solution: 'SELECT UPPER(title) FROM books;'
    },
    quiz: [
      { question: 'What does UPPER("sql") return?', options: ['Sql', 'SQL', 'sql', 'Error'], answer: 'SQL' },
      { question: 'What is the standard SQL equivalent name for UPPER()?', options: ['CAPITALIZE', 'UCASE', 'TO_UPPER', 'BIG'], answer: 'UCASE' },
      { question: 'Does UPPER() modify the actual data in the table?', options: ['Yes, permanently', 'No, it only formats the output of the query', 'Yes, if used with SELECT', 'Only on strings'], answer: 'No, it only formats the output of the query' },
      { question: 'Do you NEED to use UPPER() for case-insensitive searching in MySQL?', options: ['Yes, always', 'No, MySQL is case-insensitive by default', 'Only for Primary Keys', 'Only on Linux'], answer: 'No, MySQL is case-insensitive by default' },
      { question: 'What does UPPER(123) return?', options: ['Error', '"123"', 'NULL', '0'], answer: '"123"' }
    ],
    interviewQuestions: [
      { q: 'Is UCASE() different from UPPER() in MySQL?', a: 'No, they are exact synonyms. UPPER() is the standard ANSI SQL function name, so it is preferred for cross-database compatibility.' }
    ],
    summary: ['UPPER() makes text completely uppercase.', 'UCASE() is a synonym.'],
    references: commonReferences
  },

  'mysql_lower': {
    isStructured: true,
    title: '44. LOWER()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The LOWER() function converts a string to lower-case.',
    whyUseIt: 'To normalize data like email addresses before saving or comparing them.',
    syntax: 'SELECT LOWER(column_name) FROM table_name;',
    codeExample: '-- Convert emails to lowercase:\nSELECT LOWER(email) AS CleanEmail FROM users;\n\n-- Example:\n-- "Alice@MAIL.com" -> "alice@mail.com"',
    hasLiveOutput: false,
    expectedOutput: '+----------------+\n| CleanEmail     |\n+----------------+\n| alice@mail.com |\n| bob@mail.com   |\n+----------------+',
    explanation: [
      { code: 'LOWER(email)', desc: 'Turns every character into its lowercase equivalent.' }
    ],
    realWorldExample: 'Email addresses are case-insensitive. LOWER() is used to standardize them for clean data.',
    commonMistakes: [
      { error: 'Forgetting to use it on UPDATE.', code: '', suffix: 'To fix data permanently, use: UPDATE users SET email = LOWER(email);' }
    ],
    bestPractices: ['Always normalize emails to lowercase before inserting them into the database'],
    practiceExercise: {
      task: 'Write a query to permanently UPDATE all existing `email` addresses in the `users` table to be entirely lowercase.',
      expectedOutput: 'Query OK, X rows affected.',
      solution: 'UPDATE users SET email = LOWER(email);'
    },
    quiz: [
      { question: 'What does LOWER("MySQL") return?', options: ['mysql', 'MYSQL', 'Mysql', 'Error'], answer: 'mysql' },
      { question: 'What is the standard SQL synonym for LOWER()?', options: ['LCASE', 'TO_LOWER', 'SMALL', 'DOWNCASE'], answer: 'LCASE' },
      { question: 'Which data type is LOWER() most commonly applied to?', options: ['INT', 'DATE', 'VARCHAR / TEXT', 'BOOLEAN'], answer: 'VARCHAR / TEXT' },
      { question: 'How do you permanently change data to lowercase?', options: ['SELECT LOWER(col) FROM table', 'UPDATE table SET col = LOWER(col)', 'ALTER TABLE SET LOWER', 'You cannot'], answer: 'UPDATE table SET col = LOWER(col)' },
      { question: 'What does LOWER(NULL) return?', options: ['"" (empty string)', '0', 'NULL', 'Error'], answer: 'NULL' }
    ],
    interviewQuestions: [
      { q: 'Why is it important to use LOWER() on email addresses?', a: 'While emails are technically case-insensitive, storing them with mixed cases can cause issues in strict application logic or analytics. Normalizing to lowercase ensures consistent data.' }
    ],
    summary: ['LOWER() makes text completely lowercase.', 'Crucial for normalizing email addresses.'],
    references: commonReferences
  },

  'mysql_group_by': {
    isStructured: true,
    title: '45. GROUP BY',
    difficulty: 'Intermediate',
    readingTime: '6 min',
    definition: 'The GROUP BY statement groups rows that have the same values into summary rows.',
    whyUseIt: 'Used almost exclusively with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to group the result-set by one or more columns.',
    syntax: 'SELECT column, aggregate_function(column)\nFROM table\nGROUP BY column;',
    codeExample: '-- Count how many users live in EACH country:\nSELECT country, COUNT(*) AS TotalUsers\nFROM users\nGROUP BY country;\n\n-- Calculate total sales for EACH product:\nSELECT product_id, SUM(price) AS TotalRevenue\nFROM sales\nGROUP BY product_id;',
    hasLiveOutput: false,
    expectedOutput: '+---------+------------+\n| country | TotalUsers |\n+---------+------------+\n| USA     |        120 |\n| UK      |         85 |\n| India   |        200 |\n+---------+------------+',
    explanation: [
      { code: 'GROUP BY country', desc: 'Finds all unique countries, and runs the COUNT() function FOR EACH unique country independently.' }
    ],
    realWorldExample: 'Analytics dashboards generating charts (e.g., "Sales per Month", "Signups per Country").',
    commonMistakes: [
      { error: 'Selecting columns not in GROUP BY.', code: 'SELECT name, country, COUNT(*) FROM users GROUP BY country', suffix: 'Which "name" should it show for USA? MySQL will throw an error. Only select grouped columns or aggregates.' }
    ],
    bestPractices: ['Always pair GROUP BY with an aggregate function', 'Order the results (e.g., ORDER BY TotalUsers DESC) to find the top groups'],
    practiceExercise: {
      task: 'Write a query to find the average `salary` for EACH `department` in the `employees` table.',
      expectedOutput: '+------------+-------------+\n| department | AVG(salary) |\n+------------+-------------+',
      solution: 'SELECT department, AVG(salary) FROM employees GROUP BY department;'
    },
    quiz: [
      { question: 'What does GROUP BY do?', options: ['Sorts data alphabetically', 'Groups rows with identical values to calculate aggregates for each group', 'Joins two tables', 'Deletes duplicate rows'], answer: 'Groups rows with identical values to calculate aggregates for each group' },
      { question: 'Which of the following functions is typically used with GROUP BY?', options: ['CONCAT', 'UPPER', 'COUNT', 'LENGTH'], answer: 'COUNT' },
      { question: 'Where does GROUP BY go in a query?', options: ['Before WHERE', 'After WHERE, before ORDER BY', 'After ORDER BY', 'First line'], answer: 'After WHERE, before ORDER BY' },
      { question: 'What happens if you SELECT a column that is neither in an aggregate function nor in the GROUP BY clause?', options: ['It works perfectly', 'It causes a syntax error (in strict mode)', 'It returns NULL', 'It returns the highest value'], answer: 'It causes a syntax error (in strict mode)' },
      { question: 'Can you GROUP BY multiple columns?', options: ['Yes, separated by commas', 'No, only one', 'Yes, separated by AND', 'Only if they are numbers'], answer: 'Yes, separated by commas' }
    ],
    interviewQuestions: [
      { q: 'Explain the difference between DISTINCT and GROUP BY.', a: 'DISTINCT simply removes duplicate rows from the output. GROUP BY also groups duplicate rows but allows you to apply aggregate functions (like SUM, COUNT, AVG) to calculate totals for each specific group.' }
    ],
    summary: ['GROUP BY calculates aggregates FOR EACH group.', 'Must be used with COUNT, SUM, AVG, etc.'],
    references: commonReferences
  },

  'mysql_having': {
    isStructured: true,
    title: '46. HAVING',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.',
    whyUseIt: 'To filter the results of a GROUP BY. (e.g., "Find countries with MORE THAN 100 users").',
    syntax: 'SELECT column, aggregate_function(column)\nFROM table\nGROUP BY column\nHAVING condition;',
    codeExample: '-- Find countries that have MORE THAN 100 users:\nSELECT country, COUNT(*) AS TotalUsers\nFROM users\nGROUP BY country\nHAVING COUNT(*) > 100;\n\n-- Incorrect (WHERE cannot use aggregates):\n-- SELECT country, COUNT(*) FROM users \n-- WHERE COUNT(*) > 100 GROUP BY country;',
    hasLiveOutput: false,
    expectedOutput: '+---------+------------+\n| country | TotalUsers |\n+---------+------------+\n| USA     |        120 |\n| India   |        200 |\n+---------+------------+',
    explanation: [
      { code: 'WHERE', desc: 'Filters individual rows BEFORE they are grouped.' },
      { code: 'HAVING', desc: 'Filters the groups AFTER they are created by GROUP BY.' }
    ],
    realWorldExample: 'Finding "Best Sellers" by grouping product sales and using HAVING SUM(sales) > 1000.',
    commonMistakes: [
      { error: 'Using HAVING instead of WHERE for simple filters.', code: 'HAVING age > 18', suffix: 'If the column isn\'t an aggregate, use WHERE. It is much faster.' }
    ],
    bestPractices: ['WHERE filters rows. HAVING filters groups. Use both! (e.g., WHERE age > 18 GROUP BY country HAVING COUNT(*) > 100)'],
    practiceExercise: {
      task: 'Write a query to find departments where the AVG(salary) is greater than 60000.',
      expectedOutput: '+------------+-------------+\n| department | AVG(salary) |\n+------------+-------------+',
      solution: 'SELECT department, AVG(salary) FROM employees GROUP BY department HAVING AVG(salary) > 60000;'
    },
    quiz: [
      { question: 'Why does the HAVING clause exist?', options: ['Because WHERE is too slow', 'Because WHERE cannot be used with aggregate functions', 'Because it sorts data better', 'Because it allows Joins'], answer: 'Because WHERE cannot be used with aggregate functions' },
      { question: 'Which filters data FIRST?', options: ['HAVING', 'WHERE', 'They filter at the same time', 'Depends on the database'], answer: 'WHERE' },
      { question: 'Can HAVING and WHERE be used in the same query?', options: ['Yes', 'No', 'Only in Oracle', 'Only with Triggers'], answer: 'Yes' },
      { question: 'Where does HAVING go in a query?', options: ['Before WHERE', 'After GROUP BY, before ORDER BY', 'At the very end', 'Before GROUP BY'], answer: 'After GROUP BY, before ORDER BY' },
      { question: 'Which is correct for finding groups with more than 5 items?', options: ['WHERE COUNT(*) > 5', 'HAVING COUNT(*) > 5', 'LIMIT 5', 'IF COUNT(*) > 5'], answer: 'HAVING COUNT(*) > 5' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between WHERE and HAVING?', a: 'WHERE filters individual records before any grouping takes place. HAVING filters the grouped records after the GROUP BY clause has executed and aggregate calculations are done.' }
    ],
    summary: ['HAVING filters groups.', 'WHERE filters rows.', 'Use HAVING for aggregate conditions.'],
    references: commonReferences
  },

  'mysql_aggregate': {
    isStructured: true,
    title: '47. Aggregate Functions',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'Aggregate functions perform a calculation on a set of values and return a single value.',
    whyUseIt: 'They are the backbone of data analysis, reporting, and statistics in SQL.',
    syntax: '-- The Big 5:\n-- COUNT(), SUM(), AVG(), MIN(), MAX()',
    codeExample: '-- Generate a complete statistics report on salaries:\nSELECT \n  COUNT(*) AS TotalEmployees,\n  SUM(salary) AS TotalPayroll,\n  AVG(salary) AS AverageSalary,\n  MIN(salary) AS LowestSalary,\n  MAX(salary) AS HighestSalary\nFROM employees;',
    hasLiveOutput: false,
    expectedOutput: '+----------------+--------------+---------------+--------------+---------------+\n| TotalEmployees | TotalPayroll | AverageSalary | LowestSalary | HighestSalary |\n+----------------+--------------+---------------+--------------+---------------+\n|             50 |      3500000 |         70000 |        45000 |        120000 |\n+----------------+--------------+---------------+--------------+---------------+',
    explanation: [
      { code: 'Multiple Aggregates', desc: 'You can use as many aggregate functions as you want in a single SELECT query.' }
    ],
    realWorldExample: 'A single query to populate the top summary cards on an admin dashboard.',
    commonMistakes: [
      { error: 'Mixing non-aggregated columns without GROUP BY.', code: 'SELECT name, AVG(salary)', suffix: 'This results in an error. If you use aggregates, all non-aggregated columns MUST be in a GROUP BY.' }
    ],
    bestPractices: ['Group multiple aggregate functions into a single query to reduce database calls'],
    practiceExercise: {
      task: 'Write a single query that returns both the highest price AND lowest price from the `products` table.',
      expectedOutput: '+------------+------------+\n| MAX(price) | MIN(price) |\n+------------+------------+',
      solution: 'SELECT MAX(price), MIN(price) FROM products;'
    },
    quiz: [
      { question: 'What do aggregate functions do?', options: ['Sort data', 'Join tables', 'Perform calculations on multiple rows to return a single value', 'Create indexes'], answer: 'Perform calculations on multiple rows to return a single value' },
      { question: 'Which of the following is NOT an aggregate function?', options: ['SUM', 'MIN', 'LENGTH', 'AVG'], answer: 'LENGTH' },
      { question: 'Can you use multiple aggregate functions in one SELECT statement?', options: ['Yes', 'No, only one', 'Only if they are the same type', 'Yes, but it requires subqueries'], answer: 'Yes' },
      { question: 'Do aggregate functions (except COUNT(*)) ignore NULL values?', options: ['Yes', 'No', 'Only MIN and MAX', 'Only SUM and AVG'], answer: 'Yes' },
      { question: 'Which clause is required if you want to mix aggregate functions with normal columns?', options: ['ORDER BY', 'GROUP BY', 'WHERE', 'LIMIT'], answer: 'GROUP BY' }
    ],
    interviewQuestions: [
      { q: 'Name the 5 standard SQL aggregate functions.', a: 'COUNT, SUM, AVG, MIN, and MAX.' }
    ],
    summary: ['Aggregate functions summarize data.', 'Include COUNT, SUM, AVG, MIN, MAX.'],
    references: commonReferences
  },

  'mysql_date_functions': {
    isStructured: true,
    title: '48. Date Functions',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'MySQL comes with built-in functions to extract, format, and calculate dates and times.',
    whyUseIt: 'To find records from "yesterday", "last month", or calculate "days until expiration".',
    syntax: '-- CURRENT_DATE(), NOW()\n-- YEAR(), MONTH(), DAY()\n-- DATE_ADD(), DATEDIFF()',
    codeExample: '-- Get Current Date & Time:\nSELECT NOW();           -- 2023-10-25 14:30:00\nSELECT CURRENT_DATE();  -- 2023-10-25\n\n-- Extract Parts:\nSELECT YEAR(join_date), MONTH(join_date) FROM users;\n\n-- Date Math (Orders in the last 7 days):\nSELECT * FROM orders \nWHERE order_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 7 DAY);',
    hasLiveOutput: false,
    expectedOutput: '+---------------------+\n| NOW()               |\n+---------------------+\n| 2023-10-25 14:30:00 |\n+---------------------+',
    explanation: [
      { code: 'NOW()', desc: 'Returns current date AND time.' },
      { code: 'CURRENT_DATE()', desc: 'Returns just the date.' },
      { code: 'DATE_SUB / DATE_ADD', desc: 'Adds or subtracts an INTERVAL (e.g., 7 DAY, 1 MONTH).' }
    ],
    realWorldExample: 'Calculating how old a user is based on their Date of Birth, or fetching "Recent Activity".',
    commonMistakes: [
      { error: 'Comparing DATEs as Strings.', code: 'WHERE date = \'2023-01-01\'', suffix: 'This works for equality, but for math, always use date functions to avoid timezone or format errors.' }
    ],
    bestPractices: ['Store dates in UTC in the database, and convert to local time in your application code'],
    practiceExercise: {
      task: 'Write a query to find all users who signed up in the current year (using a function). Assume the column is `signup_date`.',
      expectedOutput: '+------+\n| name |\n+------+',
      solution: 'SELECT * FROM users WHERE YEAR(signup_date) = YEAR(CURRENT_DATE());'
    },
    quiz: [
      { question: 'Which function returns both the current date AND time?', options: ['CURRENT_DATE()', 'NOW()', 'TODAY()', 'TIME()'], answer: 'NOW()' },
      { question: 'How do you extract just the Year from a date column?', options: ['GET_YEAR(date)', 'EXTRACT_YEAR(date)', 'YEAR(date)', 'DATE_YEAR(date)'], answer: 'YEAR(date)' },
      { question: 'Which keyword is used with DATE_ADD to specify the amount of time?', options: ['AMOUNT', 'DURATION', 'INTERVAL', 'TIME'], answer: 'INTERVAL' },
      { question: 'What does DATEDIFF(date1, date2) return?', options: ['The difference in years', 'The difference in days', 'A boolean (true/false)', 'The difference in hours'], answer: 'The difference in days' },
      { question: 'Is DATE() a valid function?', options: ['Yes, it extracts the date part from a datetime expression', 'No, it is a data type only', 'Yes, it returns the current time', 'No, use DAY()'], answer: 'Yes, it extracts the date part from a datetime expression' }
    ],
    interviewQuestions: [
      { q: 'How would you select all records created in the last 30 days?', a: '`SELECT * FROM table WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY);`' }
    ],
    summary: ['NOW() for time, CURRENT_DATE() for date.', 'Use DATE_ADD and DATE_SUB for time math.'],
    references: commonReferences
  }
};
