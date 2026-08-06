const commonReferences = [
  { label: 'W3Schools MySQL', url: 'https://www.w3schools.com/mysql/' },
  { label: 'MySQL Official Docs', url: 'https://dev.mysql.com/doc/refman/8.0/en/' }
];

export const mysqlContentBatch6 = {
  'mysql_1nf': {
    isStructured: true,
    title: '77. First Normal Form (1NF)',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'First Normal Form (1NF) states that a table should not contain multiple values in a single column (repeating groups). Every column must hold atomic (indivisible) values.',
    whyUseIt: 'Storing multiple values in one column makes searching, sorting, and updating incredibly difficult and error-prone.',
    syntax: '-- Rule: Each cell holds only ONE value.',
    codeExample: '-- BAD DESIGN (Violates 1NF)\n-- User | PhoneNumbers\n-- John | 123-456, 987-654\n\n-- GOOD DESIGN (Meets 1NF)\n-- User | PhoneNumber\n-- John | 123-456\n-- John | 987-654',
    hasLiveOutput: false,
    expectedOutput: 'Data is strictly organized into atomic cells.',
    explanation: [
      { code: 'Atomic Values', desc: 'A value that cannot be broken down further (e.g., one phone number, not a comma-separated list of phone numbers).' }
    ],
    realWorldExample: 'Instead of having a `skills` column with "Java, Python, C++", you create a separate row for each skill.',
    commonMistakes: [
      { error: 'Comma-separated strings', code: '', suffix: 'Storing lists as comma-separated strings inside a column is a major anti-pattern in relational databases.' }
    ],
    bestPractices: ['Ensure every column holds only one piece of information.'],
    practiceExercise: {
      task: 'How would you fix a table where a user has a `colors_liked` column containing "Red, Blue"?',
      expectedOutput: 'Split it into multiple rows.',
      solution: 'Create two rows for the user: one with "Red" and one with "Blue".'
    },
    quiz: [
      { question: 'What is the primary rule of 1NF?', options: ['Tables must have foreign keys', 'Every cell must contain a single, atomic value', 'No duplicate rows', 'Primary keys are mandatory'], answer: 'Every cell must contain a single, atomic value' },
      { question: 'Is storing "tag1, tag2, tag3" in one column 1NF compliant?', options: ['Yes', 'No', 'Only if it is JSON', 'Only in MySQL 8'], answer: 'No' },
      { question: 'What does "atomic" mean in database design?', options: ['Explosive', 'Indivisible/Single value', 'Numeric only', 'Linked'], answer: 'Indivisible/Single value' },
      { question: 'How do you fix a 1NF violation?', options: ['Create new tables', 'Create new rows for each value', 'Encrypt the data', 'Use a larger varchar'], answer: 'Create new rows for each value' },
      { question: 'Does 1NF require a Primary Key?', options: ['Yes, inherently a relation requires a primary key to distinguish rows', 'No', 'Only for integers', 'Only in Oracle'], answer: 'Yes, inherently a relation requires a primary key to distinguish rows' }
    ],
    interviewQuestions: [
      { q: 'Why is storing comma-separated values in a database bad?', a: 'Because it violates 1NF. It makes querying difficult (requires LIKE or regex), makes indexing impossible, and makes updates/deletes of specific items extremely slow.' }
    ],
    summary: ['1NF means Atomic Values.', 'No comma-separated lists in one cell.'],
    references: commonReferences
  },

  'mysql_2nf': {
    isStructured: true,
    title: '78. Second Normal Form (2NF)',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Second Normal Form (2NF) requires that the table is in 1NF, and all non-key columns are fully dependent on the PRIMARY KEY.',
    whyUseIt: 'To remove partial dependencies, ensuring data isn\'t redundantly stored.',
    syntax: '-- Rule: Must be in 1NF. No partial dependencies.',
    codeExample: '-- BAD DESIGN (Violates 2NF)\n-- OrderID | ProductID | ProductName | Price\n-- 1       | 100       | Laptop      | 1000\n-- 2       | 100       | Laptop      | 1000\n\n-- GOOD DESIGN (Meets 2NF)\n-- Orders Table: OrderID | ProductID\n-- Products Table: ProductID | ProductName | Price',
    hasLiveOutput: false,
    expectedOutput: 'Data split into two tables to prevent duplication.',
    explanation: [
      { code: 'Partial Dependency', desc: 'When a column depends on only part of a composite primary key.' }
    ],
    realWorldExample: 'A student taking a class. The class name should not be stored in the student_enrollment table, because class name depends only on class_id, not student_id.',
    commonMistakes: [
      { error: 'Duplicating master data', code: '', suffix: 'Storing product names in an orders table. If the product name changes, you have to update a million order rows.' }
    ],
    bestPractices: ['Create separate tables for separate entities (e.g., Users, Orders, Products).'],
    practiceExercise: {
      task: 'If a table has (StudentID, CourseID) as a composite key, and a column `Course_Name`, does it violate 2NF?',
      expectedOutput: 'Yes.',
      solution: 'Yes. Course_Name depends ONLY on CourseID, not the StudentID. It is a partial dependency.'
    },
    quiz: [
      { question: 'What is a prerequisite for 2NF?', options: ['3NF', '1NF', 'BCNF', 'No prerequisites'], answer: '1NF' },
      { question: 'What does 2NF eliminate?', options: ['Partial Dependencies', 'Atomic values', 'Foreign keys', 'Indexes'], answer: 'Partial Dependencies' },
      { question: 'If a table has a single-column Primary Key, is it automatically in 2NF (assuming it is in 1NF)?', options: ['Yes, partial dependencies only happen with composite keys', 'No', 'Sometimes', 'Never'], answer: 'Yes, partial dependencies only happen with composite keys' },
      { question: 'How do you resolve a 2NF violation?', options: ['Delete the table', 'Split the data into a new table', 'Add more columns', 'Remove the primary key'], answer: 'Split the data into a new table' },
      { question: 'What does fully functionally dependent mean?', options: ['It relies on the whole primary key', 'It works well', 'It depends on a foreign key', 'It is not null'], answer: 'It relies on the whole primary key' }
    ],
    interviewQuestions: [
      { q: 'Can a table with a single-column Primary Key violate 2NF?', a: 'No. Partial dependencies can only exist if the Primary Key is composite (made of multiple columns). If the PK is a single column, any non-key column either depends on it fully or doesn\'t depend on it at all (which would be a 3NF violation).' }
    ],
    summary: ['2NF eliminates partial dependencies.', 'Requires 1NF.', 'Splits redundant data into reference tables.'],
    references: commonReferences
  },

  'mysql_3nf': {
    isStructured: true,
    title: '79. Third Normal Form (3NF)',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Third Normal Form (3NF) requires that the table is in 2NF, and all non-key columns are completely independent of each other (no transitive dependencies).',
    whyUseIt: 'To ensure that every non-key column depends "the key, the whole key, and nothing but the key".',
    syntax: '-- Rule: Must be in 2NF. No transitive dependencies.',
    codeExample: '-- BAD DESIGN (Violates 3NF)\n-- Tournament | Winner_ID | Winner_DOB\n-- US Open    | 15        | 1990-01-01\n\n-- GOOD DESIGN (Meets 3NF)\n-- Tournaments: Tournament | Winner_ID\n-- Players: Player_ID | Player_DOB',
    hasLiveOutput: false,
    expectedOutput: 'Data split to remove transitive relationships.',
    explanation: [
      { code: 'Transitive Dependency', desc: 'When Column A depends on Column B, and Column B depends on the Primary Key.' }
    ],
    realWorldExample: 'Storing `country_name` and `country_population` in a `Users` table. The population depends on the country, not the user.',
    commonMistakes: [
      { error: 'Storing calculated data', code: '', suffix: 'Storing `total_price` when you already store `quantity` and `unit_price`. Calculate it on the fly instead.' }
    ],
    bestPractices: ['"Every non-key attribute must provide a fact about the key, the whole key, and nothing but the key, so help me Codd."'],
    practiceExercise: {
      task: 'A `Customers` table has `zip_code` and `city`. Is this 3NF?',
      expectedOutput: 'No.',
      solution: 'No. City depends on Zip Code, which depends on Customer ID. This is a transitive dependency.'
    },
    quiz: [
      { question: 'What is a prerequisite for 3NF?', options: ['1NF', '2NF', '4NF', 'None'], answer: '2NF' },
      { question: 'What does 3NF eliminate?', options: ['Partial Dependencies', 'Atomic values', 'Transitive Dependencies', 'Foreign keys'], answer: 'Transitive Dependencies' },
      { question: 'What is a transitive dependency?', options: ['A -> B -> C', 'A + B -> C', 'A -> A', 'B -> B'], answer: 'A -> B -> C' },
      { question: 'Should you store a person\'s age if you already store their date of birth?', options: ['Yes', 'No, it violates 3NF as it can be derived', 'Only if they are over 18', 'Yes, for speed'], answer: 'No, it violates 3NF as it can be derived' },
      { question: 'Who defined the normal forms?', options: ['Bill Gates', 'Edgar F. Codd', 'Steve Jobs', 'Linus Torvalds'], answer: 'Edgar F. Codd' }
    ],
    interviewQuestions: [
      { q: 'Explain the phrase: "The key, the whole key, and nothing but the key".', a: 'It is a mnemonic for the first three normal forms. "The key" means 1NF (must have a primary key). "The whole key" means 2NF (no partial dependencies on a composite key). "Nothing but the key" means 3NF (no transitive dependencies).' }
    ],
    summary: ['3NF eliminates transitive dependencies.', 'No calculated or derived columns.'],
    references: commonReferences
  },

  'mysql_denormalization': {
    isStructured: true,
    title: '80. Denormalization',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Denormalization is the process of intentionally introducing redundancy into a database by combining tables (violating normal forms).',
    whyUseIt: 'To improve read performance. Massive JOIN operations in fully normalized databases can be too slow for high-traffic read-heavy applications.',
    syntax: '-- Intentionally breaking 3NF for speed.',
    codeExample: '-- NORMALIZED (Slower read, fast write)\n-- Query requires joining Users, Orders, OrderItems, Products\n\n-- DENORMALIZED (Fast read, slow write)\n-- Orders Table stores Product Name and User Name directly in the row.',
    hasLiveOutput: false,
    expectedOutput: 'A "flat" table that requires no JOINs to read.',
    explanation: [
      { code: 'Trade-off', desc: 'Reads become very fast, but writes/updates become slow and risk data anomalies.' }
    ],
    realWorldExample: 'A data warehouse for analytics, or a high-traffic social media feed where doing 10 joins per request would crash the server.',
    commonMistakes: [
      { error: 'Denormalizing prematurely', code: '', suffix: 'Always normalize first. Only denormalize when you hit actual performance bottlenecks.' }
    ],
    bestPractices: ['Normalize until it hurts, denormalize until it works.'],
    practiceExercise: {
      task: 'Why might you store a user\'s name in the `posts` table even though it violates 3NF?',
      expectedOutput: 'To avoid joining the users table on every post load.',
      solution: 'To optimize read speed by eliminating the need to JOIN the `users` table when fetching a timeline of posts.'
    },
    quiz: [
      { question: 'What is Denormalization?', options: ['Normalizing past 3NF', 'Intentionally adding redundancy to speed up reads', 'Deleting tables', 'Encrypting data'], answer: 'Intentionally adding redundancy to speed up reads' },
      { question: 'When should you denormalize?', options: ['Always', 'Never', 'When read performance on a normalized DB becomes a bottleneck', 'Before you normalize'], answer: 'When read performance on a normalized DB becomes a bottleneck' },
      { question: 'What is the risk of denormalization?', options: ['Data anomalies and inconsistencies when updating', 'It is too fast', 'It deletes data', 'It requires more memory'], answer: 'Data anomalies and inconsistencies when updating' },
      { question: 'Which operation becomes slower in a denormalized database?', options: ['SELECT', 'READ', 'UPDATE / INSERT', 'VIEW'], answer: 'UPDATE / INSERT' },
      { question: 'What is the common saying?', options: ['Normalize never', 'Normalize until it hurts, denormalize until it works', 'Denormalize everything', 'No rules'], answer: 'Normalize until it hurts, denormalize until it works' }
    ],
    interviewQuestions: [
      { q: 'If Normalization is so good, why do we ever Denormalize?', a: 'Normalization is optimized for Writes (ensuring no data duplication). Denormalization is optimized for Reads (avoiding expensive JOINs). In read-heavy applications (like Twitter or analytical data warehouses), computing joins for millions of users per second is impossible, so data is stored redundantly.' }
    ],
    summary: ['Denormalization speeds up reads.', 'It adds redundancy.', 'Do it only when necessary.'],
    references: commonReferences
  },

  'mysql_with_java': {
    isStructured: true,
    title: '81. MySQL with Java (JDBC)',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Java Database Connectivity (JDBC) is an API that enables Java applications to connect to and interact with MySQL databases.',
    whyUseIt: 'To power Java backends (like Spring Boot applications) with a relational database.',
    syntax: 'Connection con = DriverManager.getConnection(url, user, password);',
    codeExample: 'import java.sql.*;\n\npublic class Main {\n  public static void main(String[] args) {\n    try {\n      Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");\n      Statement stmt = con.createStatement();\n      ResultSet rs = stmt.executeQuery("SELECT * FROM users");\n      while(rs.next()) {\n        System.out.println(rs.getString("name"));\n      }\n      con.close();\n    } catch(Exception e) { System.out.println(e); }\n  }\n}',
    hasLiveOutput: false,
    expectedOutput: 'Connecting to database and printing user names.',
    explanation: [
      { code: 'DriverManager', desc: 'Manages a list of database drivers.' },
      { code: 'Connection', desc: 'The session between Java and MySQL.' },
      { code: 'ResultSet', desc: 'A table of data representing the results of the query.' }
    ],
    realWorldExample: 'An enterprise banking application written in Java that queries customer balances from MySQL.',
    commonMistakes: [
      { error: 'Not closing the connection', code: '', suffix: 'Failing to call `con.close()` leads to connection leaks, crashing the database server.' }
    ],
    bestPractices: ['Always use `PreparedStatement` instead of `Statement` to prevent SQL Injection attacks.'],
    practiceExercise: {
      task: 'What object represents the result of a SELECT query in JDBC?',
      expectedOutput: 'ResultSet',
      solution: 'ResultSet'
    },
    quiz: [
      { question: 'What does JDBC stand for?', options: ['Java Data Base Code', 'Java Database Connectivity', 'Java Driven Base', 'Java Database Compiler'], answer: 'Java Database Connectivity' },
      { question: 'Which interface establishes a session with the database?', options: ['Connection', 'Statement', 'ResultSet', 'Driver'], answer: 'Connection' },
      { question: 'What is the default port for MySQL in the JDBC URL?', options: ['8080', '3306', '5432', '21'], answer: '3306' },
      { question: 'How do you prevent SQL Injection in JDBC?', options: ['Use Statement', 'Use PreparedStatement', 'Use Regex', 'Encrypt passwords'], answer: 'Use PreparedStatement' },
      { question: 'What happens if you don\'t close your Connections?', options: ['It runs faster', 'Connection Leaks, eventually crashing the DB', 'Java garbage collects them instantly', 'Nothing'], answer: 'Connection Leaks, eventually crashing the DB' }
    ],
    interviewQuestions: [
      { q: 'Why is `PreparedStatement` better than `Statement`?', a: '`PreparedStatement` precompiles the SQL query and automatically escapes input parameters. This prevents SQL injection attacks and is slightly faster when executing the same query multiple times.' }
    ],
    summary: ['JDBC connects Java to MySQL.', 'Use PreparedStatement for security.', 'Always close connections.'],
    references: commonReferences
  },

  'mysql_with_php': {
    isStructured: true,
    title: '82. MySQL with PHP',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'PHP is deeply integrated with MySQL, typically using the PDO (PHP Data Objects) or MySQLi extensions to interact with the database.',
    whyUseIt: 'PHP and MySQL are the foundational technologies behind WordPress and much of the early dynamic web.',
    syntax: '$conn = new mysqli($server, $user, $pass, $db);',
    codeExample: '<?php\n$servername = "localhost";\n$username = "root";\n$password = "password";\n$dbname = "mydb";\n\n// Create connection\n$conn = new mysqli($servername, $username, $password, $dbname);\n\n// Check connection\nif ($conn->connect_error) {\n  die("Connection failed: " . $conn->connect_error);\n}\n\n$sql = "SELECT id, name FROM Users";\n$result = $conn->query($sql);\n\nif ($result->num_rows > 0) {\n  while($row = $result->fetch_assoc()) {\n    echo "Name: " . $row["name"]. "<br>";\n  }\n}\n$conn->close();\n?>',
    hasLiveOutput: false,
    expectedOutput: 'Name: Alice<br>Name: Bob<br>',
    explanation: [
      { code: 'new mysqli()', desc: 'Object-oriented way to connect.' },
      { code: 'fetch_assoc()', desc: 'Fetches a result row as an associative array.' }
    ],
    realWorldExample: 'Querying posts from a database to display on a WordPress blog.',
    commonMistakes: [
      { error: 'Using the deprecated `mysql_` extension', code: 'mysql_query()', suffix: 'The old `mysql_` functions were removed from PHP 7.0 for security reasons. Always use `mysqli_` or `PDO`.' }
    ],
    bestPractices: ['Use PDO if you want to support multiple database types. Use Prepared Statements to avoid SQL injection.'],
    practiceExercise: {
      task: 'What PHP extension should you use to support ANY database (MySQL, Postgres, SQLite)?',
      expectedOutput: 'PDO',
      solution: 'PDO (PHP Data Objects)'
    },
    quiz: [
      { question: 'Which extension is recommended for MySQL in modern PHP?', options: ['mysql_', 'mysqli or PDO', 'php_sql', 'sql_php'], answer: 'mysqli or PDO' },
      { question: 'What does PDO stand for?', options: ['PHP Data Objects', 'PHP Database Orient', 'PHP Data Orient', 'PHP Database Objects'], answer: 'PHP Data Objects' },
      { question: 'Why was the old `mysql_` extension removed in PHP 7?', options: ['It was too fast', 'Security vulnerabilities (lack of prepared statements)', 'It required too much memory', 'Oracle bought it'], answer: 'Security vulnerabilities (lack of prepared statements)' },
      { question: 'Which method fetches a row as an associative array in MySQLi?', options: ['fetch_row()', 'fetch_array()', 'fetch_assoc()', 'get_row()'], answer: 'fetch_assoc()' },
      { question: 'How do you check for connection errors in MySQLi?', options: ['if ($conn->error)', 'if ($conn->connect_error)', 'if (!$conn)', 'if ($conn->failed)'], answer: 'if ($conn->connect_error)' }
    ],
    interviewQuestions: [
      { q: 'What is the main difference between MySQLi and PDO?', a: 'MySQLi only works with MySQL databases. PDO works with 12 different database systems (PostgreSQL, SQLite, SQL Server, etc.), making it easier to switch databases later.' }
    ],
    summary: ['Use MySQLi or PDO.', 'Never use the old mysql_ functions.', 'PDO supports multiple DB types.'],
    references: commonReferences
  },

  'mysql_with_nodejs': {
    isStructured: true,
    title: '83. MySQL with Node.js',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Node.js interacts with MySQL using asynchronous drivers, typically the `mysql2` NPM package.',
    whyUseIt: 'To connect a modern JavaScript backend (like Express.js) to a MySQL database.',
    syntax: 'const connection = mysql.createConnection({ ... });',
    codeExample: 'const mysql = require(\'mysql2\');\n\n// Create the connection to database\nconst connection = mysql.createConnection({\n  host: \'localhost\',\n  user: \'root\',\n  password: \'password\',\n  database: \'mydb\'\n});\n\n// Query the database\nconnection.query(\n  \'SELECT * FROM `users` WHERE `name` = ?\',\n  [\'Alice\'], // Prepared statement array\n  function(err, results, fields) {\n    console.log(results); \n  }\n);',
    hasLiveOutput: false,
    expectedOutput: 'Outputs an array of JSON objects representing rows.',
    explanation: [
      { code: 'require(\'mysql2\')', desc: 'Importing the modern MySQL driver for Node.' },
      { code: '?', desc: 'A placeholder for prepared statements to prevent SQL injection.' }
    ],
    realWorldExample: 'An Express API endpoint `/users/1` querying the DB and returning the user data as JSON to a React frontend.',
    commonMistakes: [
      { error: 'Callback Hell', code: '', suffix: 'Node queries are asynchronous. Using the `mysql2/promise` wrapper allows you to use modern `async/await` syntax instead of nested callbacks.' }
    ],
    bestPractices: ['Use `mysql.createPool()` instead of `createConnection()` to manage multiple simultaneous user requests efficiently.'],
    practiceExercise: {
      task: 'How do you pass the value "Bob" into the query: `SELECT * FROM users WHERE name = ?` using the mysql2 package?',
      expectedOutput: 'Pass it in an array as the second argument.',
      solution: 'connection.query(\'SELECT ...\', [\'Bob\'], callback);'
    },
    quiz: [
      { question: 'Which NPM package is highly recommended for MySQL in Node.js?', options: ['mysql-server', 'mysql2', 'node-sql', 'sql-node'], answer: 'mysql2' },
      { question: 'How does Node.js prevent SQL injection when using the mysql2 driver?', options: ['Using regex', 'Using the `?` placeholder and an array of values', 'Encrypting strings', 'It does not'], answer: 'Using the `?` placeholder and an array of values' },
      { question: 'Why is `mysql2/promise` preferred by modern developers?', options: ['It is faster', 'It allows the use of async/await syntax', 'It uses less memory', 'It is synchronous'], answer: 'It allows the use of async/await syntax' },
      { question: 'For a high-traffic web server, what should you use instead of createConnection()?', options: ['createThread()', 'createPool()', 'createSocket()', 'createMany()'], answer: 'createPool()' },
      { question: 'What format do results return in Node.js?', options: ['XML', 'CSV', 'Array of JavaScript Objects (JSON)', 'Text'], answer: 'Array of JavaScript Objects (JSON)' }
    ],
    interviewQuestions: [
      { q: 'Why should you use a Connection Pool in Node.js?', a: 'Creating a new database connection is expensive (slow). A Connection Pool creates a set of connections in advance and reuses them across multiple requests, massively improving the performance of high-traffic APIs.' }
    ],
    summary: ['Use the mysql2 package.', 'Use `?` for prepared statements.', 'Use Connection Pools for scaling.'],
    references: commonReferences
  },

  'mysql_with_python': {
    isStructured: true,
    title: '84. MySQL with Python',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Python connects to MySQL using the `mysql-connector-python` module provided by Oracle.',
    whyUseIt: 'Crucial for Data Science, Machine Learning, or building web backends with Django/Flask.',
    syntax: 'mydb = mysql.connector.connect(...)',
    codeExample: 'import mysql.connector\n\nmydb = mysql.connector.connect(\n  host="localhost",\n  user="root",\n  password="password",\n  database="mydb"\n)\n\nmycursor = mydb.cursor()\n\n# Prepared Statement\nsql = "SELECT * FROM users WHERE name = %s"\nval = ("Alice", ) # Must be a tuple\n\nmycursor.execute(sql, val)\n\nmyresult = mycursor.fetchall()\nfor x in myresult:\n  print(x)',
    hasLiveOutput: false,
    expectedOutput: "('Alice', 22, 'New York')",
    explanation: [
      { code: 'cursor()', desc: 'An object used to execute statements and fetch results.' },
      { code: '%s', desc: 'The placeholder used in Python for SQL prepared statements (unlike `?` in Node/Java).' }
    ],
    realWorldExample: 'A Python script that runs every night, pulls daily sales data from MySQL, and generates a Pandas dataframe for reporting.',
    commonMistakes: [
      { error: 'Forgetting to call commit()', code: 'mydb.commit()', suffix: 'When you execute INSERT, UPDATE, or DELETE, you MUST call `mydb.commit()` or the changes will not be saved to the database.' }
    ],
    bestPractices: ['Always use placeholders (`%s`) to avoid SQL Injection, even if you trust the data.'],
    practiceExercise: {
      task: 'What method do you call to fetch ALL rows from the cursor after executing a query?',
      expectedOutput: 'fetchall()',
      solution: 'mycursor.fetchall()'
    },
    quiz: [
      { question: 'Which module is officially supported for Python to MySQL?', options: ['py-sql', 'mysql-python', 'mysql-connector-python', 'python-sql'], answer: 'mysql-connector-python' },
      { question: 'What object is required to execute queries in Python?', options: ['Connection', 'Cursor', 'Statement', 'ResultSet'], answer: 'Cursor' },
      { question: 'What placeholder is used for prepared statements in Python MySQL?', options: ['?', '!', '$1', '%s'], answer: '%s' },
      { question: 'If you run an UPDATE query, what MUST you call to save the changes?', options: ['cursor.save()', 'mydb.commit()', 'mydb.push()', 'cursor.update()'], answer: 'mydb.commit()' },
      { question: 'How do you retrieve exactly one row from the results?', options: ['fetchone()', 'fetch(1)', 'get_one()', 'next()'], answer: 'fetchone()' }
    ],
    interviewQuestions: [
      { q: 'Why does Python use `%s` for prepared statements instead of `?`?', a: 'It relies on the Python DB-API standard. Even if the column is an integer, you still use `%s`, and the connector library safely formats the data type behind the scenes.' }
    ],
    summary: ['Use mysql-connector-python.', 'Always `commit()` changes.', 'Use `%s` for parameters.'],
    references: commonReferences
  },

  'mysql_vs_firebase': {
    isStructured: true,
    title: '85. MySQL vs Firebase',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'MySQL is a relational database (SQL). Firebase (Firestore) is a cloud-hosted NoSQL document database.',
    whyUseIt: 'Understanding when to choose SQL over NoSQL is a fundamental architectural decision.',
    syntax: 'N/A',
    codeExample: '-- MySQL (Strict Schema, Tables, Rows)\nCREATE TABLE users (id INT, name VARCHAR(50));\n\n// Firebase (No Schema, Collections, Documents, JSON-like)\n// db.collection("users").add({ name: "Alice", age: 22, likes: ["coding"] });',
    hasLiveOutput: false,
    expectedOutput: 'Architectural comparison.',
    explanation: [
      { code: 'MySQL', desc: 'Data is strictly structured into tables with defined columns. Great for complex relationships (JOINs).' },
      { code: 'Firebase', desc: 'Data is unstructured JSON documents. Great for rapid prototyping and real-time syncing.' }
    ],
    realWorldExample: 'A banking app (needs ACID transactions and strict schemas) uses MySQL. A real-time chat app (needs instant updates to the UI without refreshing) uses Firebase.',
    commonMistakes: [
      { error: 'Trying to do complex JOINs in Firebase', code: '', suffix: 'NoSQL databases do not support SQL JOINs. You have to denormalize data (duplicate it) to query it efficiently.' }
    ],
    bestPractices: ['Choose MySQL for highly structured data with complex relationships. Choose Firebase for real-time mobile apps or unstructured data.'],
    practiceExercise: {
      task: 'If you are building an accounting system where money must be atomically moved between accounts, which do you choose?',
      expectedOutput: 'MySQL',
      solution: 'MySQL. Relational databases excel at ACID compliance and complex transactional integrity.'
    },
    quiz: [
      { question: 'What type of database is MySQL?', options: ['NoSQL', 'Relational (SQL)', 'Graph', 'In-memory'], answer: 'Relational (SQL)' },
      { question: 'What type of database is Firebase (Firestore)?', options: ['NoSQL Document Store', 'Relational (SQL)', 'Columnar', 'Relational'], answer: 'NoSQL Document Store' },
      { question: 'Which database enforces a strict schema?', options: ['Firebase', 'Both', 'Neither', 'MySQL'], answer: 'MySQL' },
      { question: 'Which feature is a massive advantage of Firebase?', options: ['Complex JOINs', 'ACID Transactions', 'Real-time client synchronization', 'Foreign Keys'], answer: 'Real-time client synchronization' },
      { question: 'If your app relies heavily on reporting and complex JOINs, which is better?', options: ['MySQL', 'Firebase', 'Neither', 'They are equal'], answer: 'MySQL' }
    ],
    interviewQuestions: [
      { q: 'Why would a team choose Firebase over MySQL for a new startup?', a: 'Speed of development. Firebase requires no server setup, no schema definition, and handles real-time websockets out of the box. It allows frontend developers to build a full-stack app quickly.' }
    ],
    summary: ['MySQL = Structured, JOINs, ACID.', 'Firebase = Unstructured, Real-time, NoSQL.'],
    references: commonReferences
  },

  'mysql_project_student': {
    isStructured: true,
    title: '86. DB Design: Student Management',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Designing the schema for a Student Management System.',
    whyUseIt: 'To learn how to apply Normalization, Primary Keys, and Foreign Keys to a real-world scenario.',
    syntax: 'N/A',
    codeExample: 'CREATE TABLE Students (\n  student_id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  dob DATE\n);\n\nCREATE TABLE Courses (\n  course_id INT AUTO_INCREMENT PRIMARY KEY,\n  title VARCHAR(100)\n);\n\nCREATE TABLE Enrollments (\n  enrollment_id INT AUTO_INCREMENT PRIMARY KEY,\n  student_id INT,\n  course_id INT,\n  grade CHAR(1),\n  FOREIGN KEY (student_id) REFERENCES Students(student_id),\n  FOREIGN KEY (course_id) REFERENCES Courses(course_id)\n);',
    hasLiveOutput: false,
    expectedOutput: 'A normalized 3-table structure representing a Many-to-Many relationship.',
    explanation: [
      { code: 'Enrollments Table', desc: 'This is a "Junction Table". Because one student takes many courses, and one course has many students, we need a third table to link them.' }
    ],
    realWorldExample: 'A university portal where students log in to see their grades.',
    commonMistakes: [
      { error: 'Putting course_id in the Students table', code: '', suffix: 'This violates 1NF because a student can have multiple courses.' }
    ],
    bestPractices: ['Always resolve Many-to-Many relationships with a Junction (Mapping) table.'],
    practiceExercise: {
      task: 'What type of relationship exists between Students and Courses?',
      expectedOutput: 'Many-to-Many',
      solution: 'Many-to-Many.'
    },
    quiz: [
      { question: 'Why do we need an Enrollments table?', options: ['To store student names', 'To resolve the Many-to-Many relationship between Students and Courses', 'To make it run faster', 'We don\'t need it'], answer: 'To resolve the Many-to-Many relationship between Students and Courses' },
      { question: 'What is another name for the Enrollments table in this context?', options: ['Master table', 'Junction / Mapping table', 'Orphan table', 'View'], answer: 'Junction / Mapping table' },
      { question: 'Where does the `grade` column belong?', options: ['Students', 'Courses', 'Enrollments', 'Anywhere'], answer: 'Enrollments' },
      { question: 'Can a student appear multiple times in the Enrollments table?', options: ['Yes, once for each course they take', 'No, primary key violation', 'Only if they fail', 'Only in MongoDB'], answer: 'Yes, once for each course they take' },
      { question: 'What constraints are applied to `student_id` in Enrollments?', options: ['Primary Key', 'Foreign Key', 'Unique', 'None'], answer: 'Foreign Key' }
    ],
    interviewQuestions: [
      { q: 'Why is the `grade` stored in `Enrollments` and not `Students`?', a: 'Because a grade is specific to a student in a specific course. A student has many grades, and a course has many grades. The grade is a fact about the *enrollment*, not just the student.' }
    ],
    summary: ['Many-to-Many relationships require a junction table.', 'Keep entities separate.'],
    references: commonReferences
  },

  'mysql_project_employee': {
    isStructured: true,
    title: '87. DB Design: Employee Management',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Designing the schema for an HR / Employee Management System.',
    whyUseIt: 'Understanding hierarchical data (employees and managers) and 1-to-Many relationships.',
    syntax: 'N/A',
    codeExample: 'CREATE TABLE Departments (\n  dept_id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(50)\n);\n\nCREATE TABLE Employees (\n  emp_id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(50),\n  salary DECIMAL(10,2),\n  dept_id INT,\n  manager_id INT NULL,\n  FOREIGN KEY (dept_id) REFERENCES Departments(dept_id),\n  FOREIGN KEY (manager_id) REFERENCES Employees(emp_id)\n);',
    hasLiveOutput: false,
    expectedOutput: 'Employees table with a self-referencing foreign key.',
    explanation: [
      { code: 'manager_id', desc: 'A Foreign Key that points back to the Primary Key of the SAME table (SELF JOIN).' }
    ],
    realWorldExample: 'An org chart software displaying who reports to the CEO.',
    commonMistakes: [
      { error: 'Creating a separate Managers table', code: '', suffix: 'Managers are just employees. They belong in the Employees table.' }
    ],
    bestPractices: ['Use SELF JOINs to query hierarchical data.'],
    practiceExercise: {
      task: 'What value would the CEO have for `manager_id`?',
      expectedOutput: 'NULL',
      solution: 'NULL, because the CEO has no manager.'
    },
    quiz: [
      { question: 'What relationship exists between Departments and Employees?', options: ['Many-to-Many', 'One-to-One', 'One-to-Many', 'None'], answer: 'One-to-Many' },
      { question: 'Why does `manager_id` reference `Employees(emp_id)`?', options: ['Because managers are also employees', 'It is a mistake', 'To connect to departments', 'To increase speed'], answer: 'Because managers are also employees' },
      { question: 'What kind of JOIN do you use to list employees alongside their manager\'s name?', options: ['INNER JOIN Departments', 'SELF JOIN', 'CROSS JOIN', 'FULL JOIN'], answer: 'SELF JOIN' },
      { question: 'Can `manager_id` be NULL?', options: ['No', 'Yes, for the top-level boss', 'Only for interns', 'Never'], answer: 'Yes, for the top-level boss' },
      { question: 'Where should an employee\'s salary be stored?', options: ['Departments', 'Employees', 'Payroll', 'None'], answer: 'Employees' }
    ],
    interviewQuestions: [
      { q: 'How would you find all employees who earn more than their manager?', a: 'Using a SELF JOIN: `SELECT e.name FROM Employees e JOIN Employees m ON e.manager_id = m.emp_id WHERE e.salary > m.salary;`' }
    ],
    summary: ['Managers are employees too.', 'Use a self-referencing foreign key for hierarchy.'],
    references: commonReferences
  },

  'mysql_project_library': {
    isStructured: true,
    title: '88. DB Design: Library System',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Designing the schema for a Library issuing system.',
    whyUseIt: 'Understanding state/status tracking (is a book available, checked out, or lost?).',
    syntax: 'N/A',
    codeExample: 'CREATE TABLE Books (book_id INT PRIMARY KEY, title VARCHAR(100), author VARCHAR(100), status ENUM(\'Available\', \'Issued\', \'Lost\') DEFAULT \'Available\');\nCREATE TABLE Members (member_id INT PRIMARY KEY, name VARCHAR(100));\nCREATE TABLE Loans (loan_id INT PRIMARY KEY, book_id INT, member_id INT, issue_date DATE, return_date DATE NULL, FOREIGN KEY (book_id) REFERENCES Books(book_id), FOREIGN KEY (member_id) REFERENCES Members(member_id));',
    hasLiveOutput: false,
    expectedOutput: 'A system to track book availability and loan history.',
    explanation: [
      { code: 'ENUM', desc: 'Restricts the status column to specific predefined strings.' },
      { code: 'return_date DATE NULL', desc: 'If it is NULL, the book is currently out. If it has a date, the book was returned.' }
    ],
    realWorldExample: 'A librarian checking a member\'s overdue books.',
    commonMistakes: [
      { error: 'Deleting loan records when a book is returned', code: '', suffix: 'You lose historical data. Instead, just UPDATE the `return_date`.' }
    ],
    bestPractices: ['Track state changes with historical log tables (Loans).'],
    practiceExercise: {
      task: 'How do you find all currently checked-out books?',
      expectedOutput: 'SELECT * FROM Loans WHERE return_date IS NULL;',
      solution: 'SELECT * FROM Loans WHERE return_date IS NULL;'
    },
    quiz: [
      { question: 'What is the purpose of the ENUM type in the Books table?', options: ['To encrypt it', 'To restrict values to only specific options (Available, Issued, Lost)', 'To make it numeric', 'To compress it'], answer: 'To restrict values to only specific options (Available, Issued, Lost)' },
      { question: 'How do you know if a book is currently borrowed by looking at the Loans table?', options: ['issue_date is NULL', 'return_date is NULL', 'Delete the row', 'Count it'], answer: 'return_date is NULL' },
      { question: 'What relationship is Books to Loans?', options: ['One-to-Many', 'Many-to-Many', 'One-to-One', 'None'], answer: 'One-to-Many' },
      { question: 'Why shouldn\'t you delete a row from Loans when the book is returned?', options: ['It breaks the database', 'You want to keep a history of who borrowed what', 'It is too slow', 'You must'], answer: 'You want to keep a history of who borrowed what' },
      { question: 'Where would you store the "Fine" amount if a book is overdue?', options: ['Books table', 'Members table', 'Loans table', 'Nowhere'], answer: 'Loans table' }
    ],
    interviewQuestions: [
      { q: 'How do you handle a scenario where a library has 5 identical copies of "Harry Potter"?', a: 'You need an `Inventory` or `Book_Copies` table. The `Books` table stores the metadata (Title, ISBN). The `Book_Copies` table stores physical copies (copy_id, book_id, condition). The `Loans` table references `copy_id`.' }
    ],
    summary: ['Use ENUM for statuses.', 'NULL dates can indicate active states (not returned).'],
    references: commonReferences
  }
};
