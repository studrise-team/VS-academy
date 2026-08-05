import { mysqlPatch } from './mysqlPatch';
import { mysqlContentBatch2 } from './mysqlContentBatch2';
import { mysqlContentBatch3 } from './mysqlContentBatch3';
import { mysqlContentBatch4 } from './mysqlContentBatch4';
import { mysqlContentBatch5 } from './mysqlContentBatch5';
import { mysqlContentBatch6 } from './mysqlContentBatch6';
import { mysqlContentBatch7 } from './mysqlContentBatch7';

const commonReferences = [
  { label: 'W3Schools MySQL', url: 'https://www.w3schools.com/mysql/' },
  { label: 'MySQL Official Docs', url: 'https://dev.mysql.com/doc/refman/8.0/en/' }
];

export const mysqlContent = {
  'mysql_what_is_db': {
    isStructured: true,
    title: '1. What is a Database?',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'A database is an organized collection of structured data, stored electronically in a computer system, that can be easily accessed, managed, and updated.',
    whyUseIt: 'Without databases, data would be stored in flat files with no structure, making it slow to search, prone to errors, and impossible to scale. Databases solve all of this.',
    syntax: '-- A database holds tables\n-- A table holds rows and columns\n-- Example:\nDATABASE > TABLES > ROWS > COLUMNS',
    codeExample: '-- Think of it like an Excel workbook:\n-- Workbook  = Database\n-- Sheet     = Table\n-- Row       = Record\n-- Column    = Field\n\n-- Real example: A school database\nDATABASE: school_db\n  TABLE: students  (id, name, age, grade)\n  TABLE: teachers  (id, name, subject)\n  TABLE: courses   (id, name, teacher_id)',
    hasLiveOutput: false,
    expectedOutput: 'DATABASE: school_db\n  TABLE: students\n  TABLE: teachers\n  TABLE: courses',
    explanation: [
      { code: 'DATABASE', desc: 'A container that holds all related tables and data together.' },
      { code: 'TABLE', desc: 'A grid of data organized into rows (records) and columns (fields).' },
      { code: 'ROW', desc: 'A single record — e.g., one student\'s info.' },
      { code: 'COLUMN', desc: 'A specific attribute — e.g., name, age, grade.' }
    ],
    realWorldExample: 'Every app you use relies on databases: YouTube stores your watch history, Amazon stores your orders, and Gmail stores every email you\'ve ever sent.',
    commonMistakes: [
      { error: 'Confusing a database with a spreadsheet.', code: '', suffix: 'A DB supports millions of users simultaneously; Excel cannot.' },
      { error: 'Thinking all databases are relational.', code: '', suffix: 'NoSQL databases like MongoDB store data differently.' }
    ],
    bestPractices: ['Design your database structure before writing any code', 'Name tables and columns clearly and consistently', 'Keep related data together in the same database'],
    practiceExercise: {
      task: 'Imagine you are building a Library system.\nList the tables you would need in your database.',
      expectedOutput: 'DATABASE: library_db\n  TABLE: books\n  TABLE: members\n  TABLE: loans',
      solution: '-- DATABASE: library_db\n-- TABLE: books (id, title, author_id)\n-- TABLE: members (id, name, join_date)\n-- TABLE: loans (id, book_id, member_id, return_date)'
    },
    quiz: [
      { question: 'What is the correct hierarchy in a relational database?', options: ['Column > Row > Table > Database', 'Database > Table > Row > Column', 'Table > Database > Column > Row', 'Row > Column > Database > Table'], answer: 'Database > Table > Row > Column' },
      { question: 'What is the primary purpose of a database?', options: ['To design web pages', 'To store and manage data efficiently', 'To write software programs', 'To connect to the internet'], answer: 'To store and manage data efficiently' },
      { question: 'In a database, what is a row equivalent to?', options: ['A specific field', 'A single record or entity', 'A collection of tables', 'The entire database'], answer: 'A single record or entity' },
      { question: 'Why is a database better than a flat file (like a CSV)?', options: ['It takes up more disk space', 'It allows for fast querying and scaling', 'It is easier to open in Notepad', 'It requires no software to read'], answer: 'It allows for fast querying and scaling' },
      { question: 'Which of the following would be an example of a Database?', options: ['A list of names in a text document', 'A single image file', 'A system holding all Amazon product and order data', 'A function written in JavaScript'], answer: 'A system holding all Amazon product and order data' }
    ],
    interviewQuestions: [
      { q: 'What is a database?', a: 'A database is an organized collection of structured data, typically stored electronically in a computer system, allowing for efficient data insertion, querying, and management.' },
      { q: 'What is the difference between a database and a spreadsheet?', a: 'A spreadsheet is designed for one person or a small team to view and manipulate small amounts of data manually. A database can handle massive amounts of data, complex relationships, and thousands of simultaneous users querying data programmatically.' },
      { q: 'What is a DBMS?', a: 'A Database Management System (DBMS) is the software that interacts with end users, applications, and the database itself to capture and analyze the data (e.g., MySQL, Oracle, MongoDB).' }
    ],
    summary: ['A database is an organized collection of structured data.', 'Data is stored in tables, which hold rows and columns.', 'Databases allow fast querying, updating, and management of data at scale.'],
    references: commonReferences
  },

  'mysql_types_of_db': {
    isStructured: true,
    title: '2. Types of Databases',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'Databases come in different types based on how they store and organize data. The most common are Relational (SQL) and Non-Relational (NoSQL) databases.',
    whyUseIt: 'Choosing the right type of database for your application is critical for performance, scalability, and data integrity.',
    syntax: '-- Types:\n-- 1. Relational (SQL)   → MySQL, PostgreSQL, Oracle\n-- 2. NoSQL (Document)  → MongoDB, Firebase\n-- 3. Key-Value         → Redis\n-- 4. Column-Family     → Cassandra\n-- 5. Graph             → Neo4j',
    codeExample: '-- Relational DB (MySQL)\nSELECT name, age FROM students WHERE age > 18;\n\n-- NoSQL (MongoDB-style document)\n{\n  "name": "Ravi",\n  "age": 20,\n  "courses": ["MySQL", "Python"]\n}\n\n-- Key-Value (Redis-style)\nSET user:101 "Ravi"\nGET user:101',
    hasLiveOutput: false,
    expectedOutput: '+------+-----+\n| name | age |\n+------+-----+\n| Ravi |  20 |\n+------+-----+',
    explanation: [
      { code: 'Relational DB', desc: 'Stores data in structured tables with rows and columns. Uses SQL.' },
      { code: 'NoSQL DB', desc: 'Stores unstructured or semi-structured data. Flexible schema.' },
      { code: 'Key-Value', desc: 'Stores data as key-value pairs. Extremely fast for caching.' }
    ],
    realWorldExample: 'Netflix uses both MySQL (billing) and Cassandra (viewing history at massive scale).',
    commonMistakes: [
      { error: 'Assuming MySQL is always the best choice.', code: '', suffix: 'Use NoSQL when your data has no fixed structure.' }
    ],
    bestPractices: ['Use relational databases when data has clear relationships', 'Use NoSQL for flexible, fast-changing data structures'],
    practiceExercise: {
      task: 'Write a conceptual example of how a user\'s profile might be stored in a NoSQL Document database versus a Relational database.',
      expectedOutput: 'Relational: Table with columns (id, name, email)\nNoSQL: JSON object { id, name, email }',
      solution: '-- Relational (SQL Table Row)\n-- id: 1, name: "Alice", email: "alice@mail.com"\n\n-- NoSQL (JSON Document)\n-- { "id": 1, "name": "Alice", "email": "alice@mail.com" }'
    },
    quiz: [
      { question: 'Which of these is a Relational Database?', options: ['MongoDB', 'Redis', 'MySQL', 'Firebase'], answer: 'MySQL' },
      { question: 'Which database type stores data in flexible, JSON-like documents?', options: ['Relational', 'Key-Value', 'Document (NoSQL)', 'Graph'], answer: 'Document (NoSQL)' },
      { question: 'Which database type is best suited for high-speed caching?', options: ['Graph', 'Relational', 'Document', 'Key-Value'], answer: 'Key-Value' },
      { question: 'What language do Relational Databases commonly use to query data?', options: ['Python', 'SQL', 'JavaScript', 'C++'], answer: 'SQL' },
      { question: 'True or False: An application can only use one type of database at a time.', options: ['True', 'False', 'Only if it is NoSQL', 'Only if it is Relational'], answer: 'False' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between SQL and NoSQL databases?', a: 'SQL (Relational) databases store structured data in tables with strict schemas and use SQL for querying. NoSQL databases store unstructured or semi-structured data (like JSON documents, key-value pairs) and offer flexible schemas for easier horizontal scaling.' },
      { q: 'When would you choose a NoSQL database over a Relational database?', a: 'You would choose NoSQL when dealing with massive amounts of unstructured data, rapidly changing data models, or when horizontal scaling and high write throughput are required.' }
    ],
    summary: ['Relational databases use tables, rows, and SQL.', 'NoSQL databases are flexible and schema-less.', 'Different types serve different specific use cases.'],
    references: commonReferences
  },

  'mysql_what_is_mysql': {
    isStructured: true,
    title: '3. What is MySQL?',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'MySQL is the world\'s most popular open-source relational database management system (RDBMS). It uses SQL to manage data.',
    whyUseIt: 'MySQL powers over half the world\'s websites. It\'s free, fast, reliable, and works with every major programming language.',
    syntax: '-- MySQL uses SQL commands:\n-- DDL: CREATE, ALTER, DROP\n-- DML: INSERT, UPDATE, DELETE\n-- DQL: SELECT\n-- DCL: GRANT, REVOKE',
    codeExample: '-- Connect and use MySQL:\nSHOW DATABASES;          -- List all databases\nUSE school_db;           -- Select a database\nSHOW TABLES;             -- List all tables\nSELECT * FROM students;  -- View all records',
    hasLiveOutput: false,
    expectedOutput: '+--------------------+\n| Database           |\n+--------------------+\n| school_db          |\n+--------------------+\n\n+---------------------+\n| Tables_in_school_db |\n+---------------------+\n| students            |\n+---------------------+',
    explanation: [
      { code: 'MySQL', desc: 'My + SQL. Open-source RDBMS now owned by Oracle.' },
      { code: 'SQL', desc: 'Structured Query Language — the standard language for all relational databases.' }
    ],
    realWorldExample: 'Facebook, Twitter, YouTube, WordPress, and Airbnb all use MySQL.',
    commonMistakes: [
      { error: 'Confusing MySQL with SQL.', code: '', suffix: 'SQL is the language. MySQL is the software that runs SQL.' }
    ],
    bestPractices: ['Always use the latest stable version', 'Secure your MySQL installation after setup'],
    practiceExercise: {
      task: 'Write the command to select a database named `company_db`.',
      expectedOutput: 'Database changed',
      solution: 'USE company_db;'
    },
    quiz: [
      { question: 'MySQL is what type of database?', options: ['NoSQL', 'Document-Based', 'Relational (SQL)', 'Graph'], answer: 'Relational (SQL)' },
      { question: 'Who currently owns MySQL?', options: ['Microsoft', 'Oracle', 'Google', 'IBM'], answer: 'Oracle' },
      { question: 'Which of the following is the standard language used by MySQL?', options: ['Java', 'C++', 'Python', 'SQL'], answer: 'SQL' },
      { question: 'Which category of SQL handles inserting and updating data?', options: ['DDL', 'DML', 'DCL', 'DQL'], answer: 'DML' },
      { question: 'Is MySQL open-source?', options: ['Yes, it is completely open-source', 'No, it is proprietary', 'Yes, but only for personal use', 'No, it requires a paid license'], answer: 'Yes, it is completely open-source' }
    ],
    interviewQuestions: [
      { q: 'What is MySQL?', a: 'MySQL is an open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL) to create, manage, and query databases.' },
      { q: 'What is the difference between MySQL and SQL?', a: 'SQL is the query language used to communicate with databases. MySQL is the actual database engine/software that stores the data and interprets the SQL commands.' }
    ],
    summary: ['MySQL is the most popular open-source RDBMS.', 'It uses SQL to query, insert, update, and delete data.'],
    references: commonReferences
  },

  'mysql_features': {
    isStructured: true,
    title: '4. Features of MySQL',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'MySQL comes with a powerful set of features that make it suitable for small applications and large enterprise systems alike.',
    whyUseIt: 'Understanding MySQL features helps you leverage its full power and choose the right configuration for your project.',
    syntax: '-- Key Features:\n-- 1. Open Source & Free\n-- 2. Cross-Platform\n-- 3. ACID Compliant\n-- 4. Stored Procedures, Triggers, Views\n-- 5. Replication & Clustering',
    codeExample: '-- ACID Example (Transactions):\nSTART TRANSACTION;\n  UPDATE accounts SET balance = balance - 500 WHERE id = 1;\n  UPDATE accounts SET balance = balance + 500 WHERE id = 2;\nCOMMIT;\n\n-- If error occurs:\nROLLBACK;',
    hasLiveOutput: false,
    expectedOutput: 'Query OK, 0 rows affected (0.00 sec)\nQuery OK, 1 row affected (0.00 sec)\nQuery OK, 1 row affected (0.00 sec)\nQuery OK, 0 rows affected (0.00 sec)',
    explanation: [
      { code: 'ACID', desc: 'Atomicity, Consistency, Isolation, Durability — guarantees reliability.' },
      { code: 'Replication', desc: 'Copy database to multiple servers for redundancy.' }
    ],
    realWorldExample: 'Banks use ACID compliance to ensure money transfers are atomic.',
    commonMistakes: [
      { error: 'Not enabling transactions for critical operations.', code: '', suffix: 'Always use transactions when multiple queries depend on each other.' }
    ],
    bestPractices: ['Use InnoDB storage engine (ACID compliant)', 'Use replication for high availability'],
    practiceExercise: {
      task: 'Write a basic transaction structure to transfer money, ensuring it can be rolled back on error.',
      expectedOutput: 'Query OK, 0 rows affected (0.00 sec)',
      solution: 'START TRANSACTION;\n-- run your updates here\nCOMMIT;\n-- or ROLLBACK; if there is an error'
    },
    quiz: [
      { question: 'What does ACID stand for?', options: ['Atomic, Complete, Isolated, Durable', 'Atomicity, Consistency, Isolation, Durability', 'Automatic, Consistent, Integrated, Durable', 'Access, Control, Insert, Delete'], answer: 'Atomicity, Consistency, Isolation, Durability' },
      { question: 'Which default storage engine in MySQL supports ACID properties?', options: ['MyISAM', 'Memory', 'InnoDB', 'CSV'], answer: 'InnoDB' },
      { question: 'What feature allows MySQL to copy data to multiple servers for redundancy?', options: ['Transactions', 'Replication', 'Triggers', 'Views'], answer: 'Replication' },
      { question: 'What does "Atomicity" guarantee in a transaction?', options: ['Data is isolated', 'Data is saved to disk permanently', 'All operations succeed entirely or fail entirely', 'Data meets all constraints'], answer: 'All operations succeed entirely or fail entirely' },
      { question: 'Is MySQL limited to only running on Windows?', options: ['Yes', 'No, it is cross-platform', 'No, it only runs on Linux', 'No, it only runs on macOS'], answer: 'No, it is cross-platform' }
    ],
    interviewQuestions: [
      { q: 'What does ACID stand for and why is it important?', a: 'ACID stands for Atomicity, Consistency, Isolation, and Durability. It ensures that database transactions are processed reliably, guaranteeing data integrity even in the event of crashes or errors.' },
      { q: 'What is the difference between MyISAM and InnoDB storage engines?', a: 'InnoDB is the default engine and supports ACID transactions, foreign keys, and row-level locking. MyISAM does not support transactions or foreign keys and uses table-level locking, making it faster for read-heavy operations but less reliable for complex writes.' }
    ],
    summary: ['MySQL is ACID compliant and supports stored procedures, triggers, and views.', 'Replication makes it suitable for large-scale applications.'],
    references: commonReferences
  },

  'mysql_installing_mysql': {
    isStructured: true,
    title: '5. Installing MySQL',
    difficulty: 'Beginner',
    readingTime: '6 min',
    definition: 'MySQL can be installed on Windows, macOS, and Linux.',
    whyUseIt: 'You need MySQL installed locally to practice SQL queries and develop applications.',
    syntax: '-- Windows: Download from https://dev.mysql.com/downloads/installer/\n-- macOS: brew install mysql\n-- Linux: sudo apt-get install mysql-server',
    codeExample: '-- Verify installation:\nmysql --version\n\n-- Login:\nmysql -u root -p\n\n-- Success shows:\n-- Welcome to the MySQL monitor.\n-- mysql>',
    hasLiveOutput: false,
    expectedOutput: 'mysql  Ver 8.0.32 for Linux on x86_64 (MySQL Community Server - GPL)\n\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 8\nServer version: 8.0.32',
    explanation: [
      { code: 'mysql -u root -p', desc: 'Connects as root user. -p prompts for password.' },
      { code: 'mysql>', desc: 'The MySQL prompt — you can now run SQL.' }
    ],
    realWorldExample: 'MySQL is installed on virtually every web server in the world.',
    commonMistakes: [
      { error: 'Forgetting to start the MySQL service.', code: '', suffix: 'Run: net start MySQL80 (Windows).' }
    ],
    bestPractices: ['Always set a strong root password', 'Add MySQL to your PATH'],
    practiceExercise: {
      task: 'Write the command to connect to MySQL via the terminal as the `admin` user and prompt for a password.',
      expectedOutput: 'Enter password:',
      solution: 'mysql -u admin -p'
    },
    quiz: [
      { question: 'What is the default port MySQL runs on?', options: ['8080', '5432', '3306', '27017'], answer: '3306' },
      { question: 'Which command checks the installed version of MySQL?', options: ['mysql -v', 'mysql --version', 'show version', 'mysql status'], answer: 'mysql --version' },
      { question: 'What does the `-p` flag do when logging into MySQL?', options: ['Specifies the port', 'Prompts for a password', 'Connects to a specific profile', 'Prints output to terminal'], answer: 'Prompts for a password' },
      { question: 'Who is the default superuser created during MySQL installation?', options: ['admin', 'superuser', 'root', 'sysadmin'], answer: 'root' },
      { question: 'Which package manager is used to install MySQL on macOS?', options: ['apt-get', 'yum', 'npm', 'Homebrew (brew)'], answer: 'Homebrew (brew)' }
    ],
    interviewQuestions: [
      { q: 'What is the default port for MySQL?', a: 'The default port for MySQL is 3306.' },
      { q: 'How do you connect to MySQL from the command line?', a: 'Use the command `mysql -u [username] -p`, where `-u` specifies the user and `-p` prompts for the password.' }
    ],
    summary: ['Login with: mysql -u root -p', 'Default port is 3306.'],
    references: commonReferences
  },

  'mysql_workbench': {
    isStructured: true,
    title: '6. MySQL Workbench',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'MySQL Workbench is a free official visual GUI tool for MySQL.',
    whyUseIt: 'Workbench makes it easy to design databases with ER diagrams, run queries with syntax highlighting, and manage users visually.',
    syntax: '-- Download: https://dev.mysql.com/downloads/workbench/',
    codeExample: 'CREATE DATABASE my_app;\nUSE my_app;\n\nCREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(100) UNIQUE,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nSELECT * FROM users;',
    hasLiveOutput: false,
    expectedOutput: '+----++------++-------++------------+\n| id || name || email || created_at |\n+----++------++-------++------------+\nEmpty set (0.00 sec)',
    explanation: [
      { code: 'SQL Editor', desc: 'Write SQL with auto-complete and syntax highlighting.' },
      { code: 'ER Diagram', desc: 'Design your database visually.' }
    ],
    realWorldExample: 'DBAs use Workbench to monitor server performance and visualize table relationships.',
    commonMistakes: [
      { error: 'Not saving SQL scripts.', code: '', suffix: 'Save with Ctrl+S.' }
    ],
    bestPractices: ['Create a saved connection for each project', 'Use the ER diagram to plan before coding'],
    practiceExercise: {
      task: 'Using a GUI like Workbench, how do you execute a specific line of SQL code instead of the entire script?',
      expectedOutput: 'Only the selected query runs.',
      solution: '-- Highlight the specific line with your mouse and press the "Lightning Bolt with a cursor" icon (or hit Ctrl+Enter / Cmd+Enter).'
    },
    quiz: [
      { question: 'What does MySQL Workbench provide?', options: ['Faster query execution', 'A graphical visual interface (GUI)', 'More SQL commands', 'Better security'], answer: 'A graphical visual interface (GUI)' },
      { question: 'Is MySQL Workbench a paid tool?', options: ['Yes', 'No, it is free', 'Only for Windows', 'Only for Enterprise'], answer: 'No, it is free' },
      { question: 'Which feature in Workbench allows you to visually design table relationships?', options: ['SQL Editor', 'Data Export', 'ER Diagram Modeler', 'User Administration'], answer: 'ER Diagram Modeler' },
      { question: 'Does MySQL Workbench replace the MySQL Server?', options: ['Yes', 'No, it connects to the server', 'Yes, but only locally', 'Only on Linux'], answer: 'No, it connects to the server' },
      { question: 'What keyboard shortcut commonly executes the selected query in Workbench?', options: ['Ctrl+S', 'Ctrl+C', 'Ctrl+Enter (or Cmd+Enter)', 'Alt+F4'], answer: 'Ctrl+Enter (or Cmd+Enter)' }
    ],
    interviewQuestions: [
      { q: 'What is MySQL Workbench used for?', a: 'MySQL Workbench is a unified visual tool for database architects, developers, and DBAs. It provides data modeling, SQL development, and comprehensive administration tools for server configuration, user administration, backup, and much more.' },
      { q: 'What is an ER Diagram?', a: 'An Entity-Relationship (ER) Diagram is a visual representation of the structure of a database, showing how entities (tables) relate to each other through primary and foreign keys.' }
    ],
    summary: ['Workbench is the official GUI tool for MySQL.', 'Free and available for Windows, macOS, and Linux.'],
    references: commonReferences
  },

  'mysql_first_database': {
    isStructured: true,
    title: '7. Creating Your First Database',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'Creating a database uses CREATE DATABASE. This is the very first step in every MySQL project.',
    whyUseIt: 'Before storing any data, you need a database to contain your tables.',
    syntax: 'CREATE DATABASE database_name;\nUSE database_name;\nSHOW DATABASES;\nDROP DATABASE database_name;',
    codeExample: '-- Step 1: Create\nCREATE DATABASE school_db;\n\n-- Step 2: Select\nUSE school_db;\n\n-- Step 3: Confirm\nSHOW DATABASES;\n\n-- Step 4: Create a table\nCREATE TABLE students (\n  id INT,\n  name VARCHAR(50)\n);\n\n-- Step 5: Verify\nSHOW TABLES;',
    hasLiveOutput: false,
    expectedOutput: '+--------------------+\n| Database           |\n+--------------------+\n| school_db          |\n+--------------------+\n\n+---------------------+\n| Tables_in_school_db |\n+---------------------+\n| students            |\n+---------------------+',
    explanation: [
      { code: 'CREATE DATABASE', desc: 'Creates a new empty database.' },
      { code: 'USE', desc: 'Switches to that database.' },
      { code: 'SHOW DATABASES', desc: 'Lists all databases.' }
    ],
    realWorldExample: 'Every project starts with CREATE DATABASE.',
    commonMistakes: [
      { error: 'Forgetting USE database_name;', code: '', suffix: 'Without USE, CREATE TABLE has no target.' }
    ],
    bestPractices: ['Use lowercase snake_case names', 'Use utf8mb4 charset'],
    practiceExercise: {
      task: 'Write the SQL commands to create a database named `inventory_db` and then select it for use.',
      expectedOutput: 'Query OK, 1 row affected.\nDatabase changed.',
      solution: 'CREATE DATABASE inventory_db;\nUSE inventory_db;'
    },
    quiz: [
      { question: 'Which command selects a database?', options: ['SELECT DATABASE', 'OPEN database_name', 'USE database_name', 'SET DATABASE'], answer: 'USE database_name' },
      { question: 'Which command creates a new database?', options: ['NEW DATABASE', 'CREATE DATABASE', 'ADD DATABASE', 'MAKE DATABASE'], answer: 'CREATE DATABASE' },
      { question: 'What happens if you run CREATE TABLE without running USE first?', options: ['It creates the table in the default master database', 'It returns an error because no database is selected', 'It creates a new database automatically', 'It works perfectly'], answer: 'It returns an error because no database is selected' },
      { question: 'Which command lists all databases on the server?', options: ['LIST DATABASES', 'SHOW DATABASES', 'DISPLAY DATABASES', 'GET DATABASES'], answer: 'SHOW DATABASES' },
      { question: 'How do you delete an entire database?', options: ['DELETE DATABASE', 'REMOVE DATABASE', 'DROP DATABASE', 'TRUNCATE DATABASE'], answer: 'DROP DATABASE' }
    ],
    interviewQuestions: [
      { q: 'How do you create a database?', a: 'Using the command `CREATE DATABASE database_name;`' },
      { q: 'How do you list all databases on a server?', a: 'Using the command `SHOW DATABASES;`' }
    ],
    summary: ['CREATE DATABASE creates a new database.', 'USE selects it.', 'SHOW DATABASES lists all.'],
    references: commonReferences
  },

  'mysql_sql_intro': {
    isStructured: true,
    title: '8. SQL Introduction',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'SQL (Structured Query Language) is the standard language used to communicate with relational databases.',
    whyUseIt: 'SQL is the universal language of databases — learn it once, use it everywhere.',
    syntax: '-- DDL: CREATE, ALTER, DROP, TRUNCATE\n-- DML: INSERT, UPDATE, DELETE\n-- DQL: SELECT\n-- DCL: GRANT, REVOKE',
    codeExample: '-- DDL:\nCREATE TABLE students (id INT, name VARCHAR(50));\n\n-- DML:\nINSERT INTO students VALUES (1, \'Ravi\');\nUPDATE students SET name = \'Ravi Kumar\' WHERE id = 1;\nDELETE FROM students WHERE id = 1;\n\n-- DQL:\nSELECT * FROM students;\n\n-- DCL:\nGRANT SELECT ON school_db.* TO \'ravi\'@\'localhost\';',
    hasLiveOutput: false,
    expectedOutput: 'Query OK, 0 rows affected (0.01 sec)\nQuery OK, 1 row affected (0.00 sec)\nQuery OK, 1 row affected (0.00 sec)\nQuery OK, 1 row affected (0.00 sec)',
    explanation: [
      { code: 'DDL', desc: 'Data Definition — defines structure.' },
      { code: 'DML', desc: 'Data Manipulation — changes data.' },
      { code: 'DQL', desc: 'Data Query — retrieves data.' }
    ],
    realWorldExample: 'SQL runs behind every tap on Instagram, every search on Google, every click on Amazon.',
    commonMistakes: [
      { error: 'SQL keywords are not case-sensitive.', code: '', suffix: 'But use UPPERCASE for readability.' }
    ],
    bestPractices: ['Write SQL keywords in UPPERCASE', 'End every statement with a semicolon'],
    practiceExercise: {
      task: 'Categorize the following command: `DELETE FROM users WHERE id = 5;`',
      expectedOutput: 'DML (Data Manipulation Language)',
      solution: '-- It is a DML (Data Manipulation Language) command because it manipulates existing data.'
    },
    quiz: [
      { question: 'SELECT belongs to which SQL category?', options: ['DDL', 'DML', 'DQL', 'DCL'], answer: 'DQL' },
      { question: 'What does SQL stand for?', options: ['Standard Query Language', 'Structured Query Language', 'Simple Query Logic', 'System Query Language'], answer: 'Structured Query Language' },
      { question: 'Which of the following is a DDL command?', options: ['INSERT', 'UPDATE', 'CREATE', 'SELECT'], answer: 'CREATE' },
      { question: 'Which of the following is a DML command?', options: ['DROP', 'ALTER', 'UPDATE', 'GRANT'], answer: 'UPDATE' },
      { question: 'What is DCL used for?', options: ['Defining tables', 'Querying data', 'Managing user permissions and security', 'Updating records'], answer: 'Managing user permissions and security' }
    ],
    interviewQuestions: [
      { q: 'What does SQL stand for?', a: 'Structured Query Language.' },
      { q: 'What is the difference between DDL and DML?', a: 'DDL (Data Definition Language) is used to define database structures (e.g., CREATE, ALTER, DROP). DML (Data Manipulation Language) is used to manage the data within those structures (e.g., INSERT, UPDATE, DELETE).' }
    ],
    summary: ['SQL = Structured Query Language.', 'Divided into DDL, DML, DQL, DCL.'],
    references: commonReferences
  },

  'mysql_sql_syntax': {
    isStructured: true,
    title: '9. SQL Syntax',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'SQL syntax refers to the rules for writing SQL statements correctly.',
    whyUseIt: 'Understanding syntax helps you write correct queries without errors.',
    syntax: 'SELECT column1, column2\nFROM table_name\nWHERE condition\nORDER BY column\nLIMIT number;',
    codeExample: '-- Basic SELECT:\nSELECT name, age\nFROM students\nWHERE age > 18\nORDER BY name ASC\nLIMIT 10;\n\n-- Comments:\n-- Single line\n/* Multi-line\n   comment */\n\n-- Case insensitive:\nselect * from students;  -- works\nSELECT * FROM students;  -- preferred',
    hasLiveOutput: false,
    expectedOutput: '+--------+-----+\n| name   | age |\n+--------+-----+\n| Alice  |  19 |\n| Bob    |  20 |\n| Charlie|  21 |\n+--------+-----+',
    explanation: [
      { code: 'SELECT', desc: 'Which columns to retrieve.' },
      { code: 'FROM', desc: 'Which table to query.' },
      { code: 'WHERE', desc: 'Filter condition.' },
      { code: 'ORDER BY', desc: 'Sort direction.' }
    ],
    realWorldExample: 'SELECT name, score FROM leaderboard ORDER BY score DESC LIMIT 10;',
    commonMistakes: [
      { error: 'Missing semicolon.', code: ';', suffix: 'Statements must end with ;' }
    ],
    bestPractices: ['Always end with ;', 'Put each clause on a new line'],
    practiceExercise: {
      task: 'Write a properly formatted query to select the `title` and `price` from a `products` table where the price is less than 50.',
      expectedOutput: '+--------+-------+\n| title  | price |\n+--------+-------+',
      solution: 'SELECT title, price\nFROM products\nWHERE price < 50;'
    },
    quiz: [
      { question: 'What is the correct clause order?', options: ['FROM → SELECT → WHERE → ORDER BY', 'SELECT → FROM → WHERE → ORDER BY', 'WHERE → FROM → SELECT → ORDER BY', 'SELECT → WHERE → FROM → ORDER BY'], answer: 'SELECT → FROM → WHERE → ORDER BY' },
      { question: 'How do you write a single-line comment in SQL?', options: ['// comment', '# comment', '-- comment', '/* comment */'], answer: '-- comment' },
      { question: 'Are SQL keywords case-sensitive?', options: ['Yes, always', 'No, they are case-insensitive', 'Only in MySQL', 'Only for table names'], answer: 'No, they are case-insensitive' },
      { question: 'What character is used to end an SQL statement?', options: ['.', ',', ';', ':'], answer: ';' },
      { question: 'Which clause limits the number of rows returned?', options: ['STOP', 'TOP', 'MAX', 'LIMIT'], answer: 'LIMIT' }
    ],
    interviewQuestions: [
      { q: 'What is the standard order of execution for a SQL SELECT query?', a: 'FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT.' },
      { q: 'How do you add comments in SQL?', a: 'Single-line comments start with `-- ` (dash-dash-space). Multi-line comments are enclosed in `/* ... */`.' }
    ],
    summary: ['SQL follows strict clause order.', 'Keywords are case-insensitive but should be UPPERCASE.'],
    references: commonReferences
  },

  'mysql_data_types': {
    isStructured: true,
    title: '10. SQL Data Types',
    difficulty: 'Beginner',
    readingTime: '6 min',
    definition: 'MySQL data types define the kind of data a column can store.',
    whyUseIt: 'Correct data types ensure data integrity and improve performance.',
    syntax: '-- Numeric: INT, BIGINT, FLOAT, DECIMAL\n-- String: VARCHAR, CHAR, TEXT\n-- Date: DATE, DATETIME, TIMESTAMP\n-- Boolean: BOOLEAN\n-- Binary: BLOB',
    codeExample: 'CREATE TABLE employees (\n  id          INT AUTO_INCREMENT PRIMARY KEY,\n  name        VARCHAR(100) NOT NULL,\n  salary      DECIMAL(10, 2),\n  hire_date   DATE,\n  bio         TEXT,\n  is_active   BOOLEAN DEFAULT TRUE,\n  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);',
    hasLiveOutput: false,
    expectedOutput: 'Query OK, 0 rows affected (0.02 sec)',
    explanation: [
      { code: 'INT', desc: 'Whole numbers.' },
      { code: 'VARCHAR(n)', desc: 'Variable-length string up to n chars.' },
      { code: 'DECIMAL(p,s)', desc: 'Exact decimals. Use for money.' },
      { code: 'TIMESTAMP', desc: 'Date and time. Auto-updates on creation.' }
    ],
    realWorldExample: 'Product table: name VARCHAR(200), price DECIMAL(10,2), stock INT, description TEXT.',
    commonMistakes: [
      { error: 'Using FLOAT for money.', code: '', suffix: 'FLOAT has rounding errors. Use DECIMAL.' }
    ],
    bestPractices: ['Use smallest data type that fits', 'Use DECIMAL for money, never FLOAT'],
    practiceExercise: {
      task: 'Choose the correct data types for: 1) A product description, 2) A product price, 3) A user\'s age.',
      expectedOutput: '1) TEXT, 2) DECIMAL, 3) INT',
      solution: '-- 1) TEXT (or VARCHAR for shorter descriptions)\n-- 2) DECIMAL(10,2) (never float for currency)\n-- 3) INT (or TINYINT to save space)'
    },
    quiz: [
      { question: 'Which type stores prices accurately?', options: ['FLOAT', 'INT', 'DECIMAL', 'VARCHAR'], answer: 'DECIMAL' },
      { question: 'What is the difference between CHAR and VARCHAR?', options: ['CHAR is for numbers, VARCHAR for strings', 'CHAR is fixed-length, VARCHAR is variable-length', 'CHAR allows special characters, VARCHAR does not', 'They are exactly the same'], answer: 'CHAR is fixed-length, VARCHAR is variable-length' },
      { question: 'Which data type automatically records the exact date and time a row was created?', options: ['DATE', 'TIME', 'YEAR', 'TIMESTAMP'], answer: 'TIMESTAMP' },
      { question: 'Which data type would you use for a long blog post body?', options: ['VARCHAR(50)', 'CHAR(255)', 'TEXT', 'BLOB'], answer: 'TEXT' },
      { question: 'What does BOOLEAN actually map to in MySQL behind the scenes?', options: ['VARCHAR(4)', 'TINYINT(1)', 'BIT', 'INT(1)'], answer: 'TINYINT(1)' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between CHAR and VARCHAR?', a: 'CHAR stores fixed-length strings and pads them with spaces. VARCHAR stores variable-length strings and only uses as much space as needed plus a 1-2 byte length prefix. Use CHAR for fixed sizes like country codes (e.g., "US").' },
      { q: 'Why should you never use FLOAT for currency?', a: 'FLOAT uses approximate binary floating-point representations, leading to rounding errors in calculations (e.g., 0.1 + 0.2 != 0.3). DECIMAL stores exact numeric values, which is required for financial calculations.' }
    ],
    summary: ['INT, DECIMAL, VARCHAR, DATE are the most common types.', 'Choose correctly to improve performance.'],
    references: commonReferences
  },

  'mysql_create_db': {
    isStructured: true,
    title: '11. Creating a Database',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'CREATE DATABASE creates a new MySQL database with optional character set config.',
    whyUseIt: 'Every project starts with a database creation.',
    syntax: 'CREATE DATABASE database_name;\nCREATE DATABASE IF NOT EXISTS database_name;\nCREATE DATABASE db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;',
    codeExample: '-- Basic:\nCREATE DATABASE ecommerce_db;\n\n-- Safe:\nCREATE DATABASE IF NOT EXISTS ecommerce_db;\n\n-- With Unicode support (handles emojis):\nCREATE DATABASE ecommerce_db\n  CHARACTER SET utf8mb4\n  COLLATE utf8mb4_unicode_ci;\n\nUSE ecommerce_db;\nSELECT DATABASE();',
    hasLiveOutput: false,
    expectedOutput: 'Query OK, 1 row affected (0.01 sec)\n\n+--------------------+\n| DATABASE()         |\n+--------------------+\n| ecommerce_db       |\n+--------------------+',
    explanation: [
      { code: 'IF NOT EXISTS', desc: 'No error if DB already exists.' },
      { code: 'utf8mb4', desc: 'Full Unicode support including emojis.' }
    ],
    realWorldExample: 'Production apps: prod_db, staging_db, dev_db separate environments.',
    commonMistakes: [
      { error: 'Not specifying utf8mb4.', code: '', suffix: 'May not support all languages.' }
    ],
    bestPractices: ['Use IF NOT EXISTS', 'Use utf8mb4 charset always'],
    practiceExercise: {
      task: 'Write a query to create a database named `blog_db` safely, only if it doesn\'t already exist.',
      expectedOutput: 'Query OK, 1 row affected.',
      solution: 'CREATE DATABASE IF NOT EXISTS blog_db;'
    },
    quiz: [
      { question: 'Which option prevents an error if the DB already exists?', options: ['OR REPLACE', 'IF NOT EXISTS', 'IGNORE', 'SAFE MODE'], answer: 'IF NOT EXISTS' },
      { question: 'Which character set allows you to store Emojis safely in MySQL?', options: ['utf8', 'latin1', 'utf8mb4', 'ascii'], answer: 'utf8mb4' },
      { question: 'What does the function SELECT DATABASE() do?', options: ['Selects all databases', 'Deletes the current database', 'Shows the currently selected database name', 'Creates a database'], answer: 'Shows the currently selected database name' },
      { question: 'Which keyword defines the sorting rules for text?', options: ['ORDER', 'SORT', 'COLLATE', 'CHARSET'], answer: 'COLLATE' },
      { question: 'Is `CREATE SCHEMA` the same as `CREATE DATABASE` in MySQL?', options: ['Yes, they are synonyms', 'No, schemas don\'t exist in MySQL', 'No, schema is for tables only', 'Yes, but only in Oracle'], answer: 'Yes, they are synonyms' }
    ],
    interviewQuestions: [
      { q: 'What is utf8mb4?', a: 'utf8mb4 is a character set in MySQL that supports 4-byte UTF-8 Unicode encoding. It is necessary for storing supplemental characters, including emojis, which the standard 3-byte utf8 character set cannot handle.' }
    ],
    summary: ['IF NOT EXISTS makes creation safe.', 'utf8mb4 handles all Unicode.'],
    references: commonReferences
  },

  'mysql_create_table': {
    isStructured: true,
    title: '12. Creating Tables',
    difficulty: 'Beginner',
    readingTime: '6 min',
    definition: 'CREATE TABLE defines a new table with columns, data types, and constraints.',
    whyUseIt: 'Tables are where all data lives. Designing them correctly prevents problems later.',
    syntax: 'CREATE TABLE table_name (\n  column1 datatype constraints,\n  column2 datatype constraints,\n  PRIMARY KEY (column1)\n);',
    codeExample: 'USE school_db;\n\nCREATE TABLE students (\n  id         INT AUTO_INCREMENT PRIMARY KEY,\n  name       VARCHAR(100) NOT NULL,\n  email      VARCHAR(150) UNIQUE NOT NULL,\n  age        INT CHECK (age >= 5 AND age <= 100),\n  grade      CHAR(1),\n  enrolled   DATE DEFAULT (CURRENT_DATE),\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Verify:\nDESCRIBE students;',
    hasLiveOutput: false,
    expectedOutput: '+------------+--------------+------+-----+---------+\n| Field      | Type         | Null | Key | Default |\n+------------+--------------+------+-----+---------+\n| id         | int          | NO   | PRI | NULL    |\n| name       | varchar(100) | NO   |     | NULL    |\n| email      | varchar(150) | NO   | UNI | NULL    |\n| age        | int          | YES  |     | NULL    |\n| grade      | char(1)      | YES  |     | NULL    |\n| enrolled   | date         | YES  |     | NULL    |\n| created_at | timestamp    | YES  |     | NULL    |\n+------------+--------------+------+-----+---------+',
    explanation: [
      { code: 'AUTO_INCREMENT', desc: 'Automatically increases by 1 for each new row.' },
      { code: 'PRIMARY KEY', desc: 'Uniquely identifies each row.' },
      { code: 'NOT NULL', desc: 'Column cannot be empty.' },
      { code: 'DESCRIBE', desc: 'Shows the table structure.' }
    ],
    realWorldExample: 'When you sign up on a website, a row is inserted into a users table like this.',
    commonMistakes: [
      { error: 'Forgetting PRIMARY KEY.', code: '', suffix: 'Without PK, rows have no unique identifier.' }
    ],
    bestPractices: ['Every table must have a PRIMARY KEY', 'Add created_at for audit trails'],
    practiceExercise: {
      task: 'Write a query to create a table named `tasks` with an auto-incrementing `id` as the primary key, and a `title` (string up to 100 chars) that cannot be null.',
      expectedOutput: 'Query OK, 0 rows affected.',
      solution: 'CREATE TABLE tasks (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  title VARCHAR(100) NOT NULL\n);'
    },
    quiz: [
      { question: 'What does AUTO_INCREMENT do?', options: ['Sorts data', 'Increases ID by 1 for each new row', 'Creates indexes', 'Updates records'], answer: 'Increases ID by 1 for each new row' },
      { question: 'Which constraint ensures a column cannot contain empty values?', options: ['UNIQUE', 'PRIMARY KEY', 'NOT NULL', 'CHECK'], answer: 'NOT NULL' },
      { question: 'What does the UNIQUE constraint do?', options: ['Acts as a Primary Key', 'Ensures all values in a column are different', 'Restricts the data type', 'Generates a random value'], answer: 'Ensures all values in a column are different' },
      { question: 'Which command displays the structure of an existing table?', options: ['SHOW TABLE', 'DESCRIBE table_name', 'DISPLAY table_name', 'EXPLAIN TABLE'], answer: 'DESCRIBE table_name' },
      { question: 'What is a Primary Key?', options: ['The first column in a table', 'A unique identifier for each record in a table', 'A foreign key reference', 'A column that can only hold numbers'], answer: 'A unique identifier for each record in a table' }
    ],
    interviewQuestions: [
      { q: 'What is AUTO_INCREMENT?', a: 'AUTO_INCREMENT automatically generates a unique sequential numeric value (usually starting at 1) for a new row inserted into a table, typically used for primary keys.' },
      { q: 'What is a PRIMARY KEY?', a: 'A Primary Key is a constraint that uniquely identifies each record in a table. It must contain UNIQUE values and cannot contain NULL values. A table can have only one Primary Key.' }
    ],
    summary: ['CREATE TABLE defines structure.', 'Always include AUTO_INCREMENT PRIMARY KEY.', 'DESCRIBE shows structure.'],
    references: commonReferences
  },

  'mysql_show': {
    isStructured: true,
    title: '13. SHOW Databases & Tables',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'SHOW lists databases, tables, and other MySQL objects.',
    whyUseIt: 'SHOW commands let you explore your MySQL server quickly.',
    syntax: 'SHOW DATABASES;\nSHOW TABLES;\nSHOW COLUMNS FROM table;\nDESCRIBE table;\nSHOW CREATE TABLE table;',
    codeExample: 'SHOW DATABASES;\n\nUSE school_db;\nSHOW TABLES;\n\nDESCRIBE students;\nSHOW COLUMNS FROM students;\n\nSHOW CREATE TABLE students;\nSHOW PROCESSLIST;',
    hasLiveOutput: false,
    expectedOutput: '+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| performance_schema |\n| school_db          |\n| sys                |\n+--------------------+',
    explanation: [
      { code: 'SHOW DATABASES', desc: 'Lists all databases.' },
      { code: 'SHOW TABLES', desc: 'Lists tables in current DB.' },
      { code: 'DESCRIBE', desc: 'Shows column structure.' }
    ],
    realWorldExample: 'DBAs use SHOW PROCESSLIST to monitor running queries.',
    commonMistakes: [
      { error: 'SHOW TABLES without USE first.', code: '', suffix: 'Must select a database first.' }
    ],
    bestPractices: ['Use DESCRIBE before inserting data'],
    practiceExercise: {
      task: 'You forgot what columns are inside the `orders` table. Write the command to check its structure.',
      expectedOutput: '+------------+--------------+------+-----+---------+\n| Field      | Type         | Null | Key | Default |\n...',
      solution: 'DESCRIBE orders;'
    },
    quiz: [
      { question: 'Which command shows a table structure?', options: ['SHOW TABLE students', 'DESCRIBE students', 'STRUCTURE students', 'INFO students'], answer: 'DESCRIBE students' },
      { question: 'What command lists all tables in the current database?', options: ['LIST TABLES', 'SHOW TABLES', 'GET TABLES', 'DISPLAY TABLES'], answer: 'SHOW TABLES' },
      { question: 'What does SHOW PROCESSLIST do?', options: ['Shows running applications', 'Shows currently executing MySQL queries and threads', 'Shows table processes', 'Starts a new process'], answer: 'Shows currently executing MySQL queries and threads' },
      { question: 'Can you use SHOW COLUMNS FROM table_name instead of DESCRIBE?', options: ['Yes, they do the exact same thing', 'No, SHOW COLUMNS does not exist', 'Yes, but it shows less data', 'No, DESCRIBE is deprecated'], answer: 'Yes, they do the exact same thing' },
      { question: 'What command shows the exact SQL query used to create a table?', options: ['SHOW TABLE CODE', 'SHOW SOURCE TABLE', 'SHOW CREATE TABLE', 'DESCRIBE CREATE'], answer: 'SHOW CREATE TABLE' }
    ],
    interviewQuestions: [
      { q: 'How do you list all databases and view a table structure from the command line?', a: 'You list databases using `SHOW DATABASES;`. After selecting a database with `USE db_name;`, you view a table\'s structure using `DESCRIBE table_name;` or `SHOW COLUMNS FROM table_name;`.' }
    ],
    summary: ['SHOW DATABASES, SHOW TABLES, DESCRIBE are essential navigation commands.'],
    references: commonReferences
  },

  'mysql_drop': {
    isStructured: true,
    title: '14. DROP Database & Table',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'DROP permanently deletes a database or table and all its data. Irreversible without backup.',
    whyUseIt: 'Clean up old databases and tables that are no longer needed.',
    syntax: 'DROP DATABASE IF EXISTS db;\nDROP TABLE IF EXISTS table;\nDROP TABLE t1, t2;',
    codeExample: '-- Drop a table:\nDROP TABLE IF EXISTS old_logs;\n\n-- Drop multiple tables:\nDROP TABLE IF EXISTS temp_data, old_sessions;\n\n-- Drop entire database:\nDROP DATABASE IF EXISTS test_db;\n\n-- Safe: backup first:\n-- mysqldump -u root -p school_db > backup.sql\nDROP DATABASE school_db;',
    hasLiveOutput: false,
    expectedOutput: 'Query OK, 0 rows affected (0.01 sec)\nQuery OK, 0 rows affected (0.00 sec)\nQuery OK, 0 rows affected (0.01 sec)',
    explanation: [
      { code: 'DROP TABLE', desc: 'Removes table and all data.' },
      { code: 'DROP DATABASE', desc: 'Removes database and every table.' },
      { code: 'IF EXISTS', desc: 'No error if object doesn\'t exist.' }
    ],
    realWorldExample: 'Developers regularly DROP test databases during development.',
    commonMistakes: [
      { error: 'DROP without backup.', code: '', suffix: 'Always backup before DROP in production.' }
    ],
    bestPractices: ['Always use IF EXISTS', 'Backup with mysqldump before DROP'],
    practiceExercise: {
      task: 'Write a command to delete the table `temp_cache` safely without throwing an error if it doesn\'t exist.',
      expectedOutput: 'Query OK, 0 rows affected.',
      solution: 'DROP TABLE IF EXISTS temp_cache;'
    },
    quiz: [
      { question: 'What is the difference between DROP TABLE and DELETE FROM?', options: ['They are the same', 'DROP removes structure and data; DELETE removes only rows', 'DELETE removes structure', 'DROP is faster'], answer: 'DROP removes structure and data; DELETE removes only rows' },
      { question: 'What happens to the data inside a table when you use DROP TABLE?', options: ['It is saved in a backup', 'It is moved to a recycle bin', 'It is permanently deleted', 'It is hidden'], answer: 'It is permanently deleted' },
      { question: 'Which keyword prevents an error if you try to drop a table that doesn\'t exist?', options: ['IF PRESENT', 'OR IGNORE', 'IF EXISTS', 'SAFE DROP'], answer: 'IF EXISTS' },
      { question: 'Can you drop multiple tables in one command?', options: ['Yes, by separating them with commas', 'No, only one at a time', 'Yes, using DROP ALL', 'No, you must write a script'], answer: 'Yes, by separating them with commas' },
      { question: 'Can you undo a DROP DATABASE command using standard SQL?', options: ['Yes, using UNDO DROP', 'Yes, using ROLLBACK', 'No, it cannot be rolled back', 'Yes, if you do it within 5 minutes'], answer: 'No, it cannot be rolled back' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between DROP, DELETE, and TRUNCATE?', a: 'DROP deletes the entire table structure and all data. DELETE removes specific rows (using WHERE) and logs the operation (can be rolled back). TRUNCATE removes all rows instantly without logging individual row deletions (faster) but keeps the table structure.' }
    ],
    summary: ['DROP permanently removes tables/databases.', 'Cannot be undone without a backup.'],
    references: commonReferences
  },

  'mysql_alter': {
    isStructured: true,
    title: '15. ALTER Table',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'ALTER TABLE modifies existing table structure — add, remove, rename, or change columns.',
    whyUseIt: 'Requirements change. ALTER TABLE updates structure without recreating tables from scratch.',
    syntax: 'ALTER TABLE t ADD col datatype;\nALTER TABLE t DROP COLUMN col;\nALTER TABLE t MODIFY COLUMN col new_type;\nALTER TABLE t RENAME COLUMN old TO new;',
    codeExample: '-- Add a column:\nALTER TABLE students ADD phone VARCHAR(15);\n\n-- After specific column:\nALTER TABLE students ADD phone VARCHAR(15) AFTER email;\n\n-- Change type:\nALTER TABLE students MODIFY COLUMN age TINYINT;\n\n-- Rename column:\nALTER TABLE students RENAME COLUMN phone TO mobile;\n\n-- Remove column:\nALTER TABLE students DROP COLUMN mobile;\n\n-- Rename table:\nALTER TABLE students RENAME TO learners;',
    hasLiveOutput: false,
    expectedOutput: 'Query OK, 0 rows affected (0.01 sec)\nRecords: 0  Duplicates: 0  Warnings: 0',
    explanation: [
      { code: 'ADD', desc: 'Adds a new column.' },
      { code: 'DROP COLUMN', desc: 'Removes a column and its data.' },
      { code: 'MODIFY COLUMN', desc: 'Changes data type.' }
    ],
    realWorldExample: 'Adding dark mode: ALTER TABLE users ADD dark_mode BOOLEAN DEFAULT FALSE;',
    commonMistakes: [
      { error: 'Shrinking VARCHAR loses data.', code: '', suffix: 'Check existing data before shrinking column sizes.' }
    ],
    bestPractices: ['Test ALTER on staging first', 'Add columns with DEFAULT so existing rows work'],
    practiceExercise: {
      task: 'Write a command to add a new column `status` (VARCHAR 20) to the `orders` table.',
      expectedOutput: 'Query OK, 0 rows affected.',
      solution: 'ALTER TABLE orders ADD status VARCHAR(20);'
    },
    quiz: [
      { question: 'Which command adds a column to an existing table?', options: ['INSERT COLUMN', 'ALTER TABLE ... ADD', 'UPDATE TABLE', 'MODIFY TABLE'], answer: 'ALTER TABLE ... ADD' },
      { question: 'How do you delete a column from a table?', options: ['DELETE COLUMN', 'REMOVE COLUMN', 'ALTER TABLE ... DROP COLUMN', 'TRUNCATE COLUMN'], answer: 'ALTER TABLE ... DROP COLUMN' },
      { question: 'Which keyword changes the data type of an existing column?', options: ['MODIFY COLUMN', 'CHANGE TYPE', 'UPDATE COLUMN', 'ALTER TYPE'], answer: 'MODIFY COLUMN' },
      { question: 'How do you position a new column right after an existing column?', options: ['NEXT TO column_name', 'AFTER column_name', 'FOLLOWING column_name', 'RIGHT OF column_name'], answer: 'AFTER column_name' },
      { question: 'Can you rename an entire table using ALTER TABLE?', options: ['No, you must create a new one', 'Yes, using RENAME TO', 'Yes, using UPDATE TABLE NAME', 'No, table names are permanent'], answer: 'Yes, using RENAME TO' }
    ],
    interviewQuestions: [
      { q: 'How do you add a column to an existing table?', a: 'Use `ALTER TABLE table_name ADD column_name datatype;`' },
      { q: 'What happens to existing data if you ALTER a column from VARCHAR(100) to VARCHAR(10)?', a: 'If any existing string is longer than 10 characters, MySQL will throw an error and abort the operation (in strict mode), or truncate the data and show a warning (in non-strict mode).' }
    ],
    summary: ['ALTER TABLE modifies existing tables.', 'ADD, DROP, MODIFY, RENAME are key subcommands.'],
    references: commonReferences
  },

  'mysql_truncate': {
    isStructured: true,
    title: '16. TRUNCATE Table',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'TRUNCATE TABLE removes all rows instantly, keeps table structure, resets AUTO_INCREMENT.',
    whyUseIt: 'Much faster than DELETE when clearing all data.',
    syntax: 'TRUNCATE TABLE table_name;',
    codeExample: '-- Before:\nSELECT COUNT(*) FROM students;  -- 500\n\n-- Clear all data:\nTRUNCATE TABLE students;\n\n-- After:\nSELECT COUNT(*) FROM students;  -- 0\n-- AUTO_INCREMENT resets to 1\n\nINSERT INTO students (name) VALUES (\'First\');\nSELECT * FROM students;  -- id = 1',
    hasLiveOutput: false,
    expectedOutput: '+----------+\n| COUNT(*) |\n+----------+\n|      500 |\n+----------+\n\nQuery OK, 0 rows affected (0.01 sec)\n\n+----------+\n| COUNT(*) |\n+----------+\n|        0 |\n+----------+',
    explanation: [
      { code: 'TRUNCATE', desc: 'Deletes ALL rows instantly. No WHERE clause allowed.' },
      { code: 'Resets AUTO_INCREMENT', desc: 'Next row gets ID = 1.' }
    ],
    realWorldExample: 'Developers TRUNCATE test tables before running test scripts.',
    commonMistakes: [
      { error: 'Using TRUNCATE when you need WHERE.', code: '', suffix: 'Use DELETE FROM WHERE for selective removal.' }
    ],
    bestPractices: ['Use TRUNCATE only for clearing ALL data', 'Know that TRUNCATE cannot be rolled back'],
    practiceExercise: {
      task: 'Write the command to instantly wipe all data from the `logs` table and reset its primary key.',
      expectedOutput: 'Query OK, 0 rows affected.',
      solution: 'TRUNCATE TABLE logs;'
    },
    quiz: [
      { question: 'What happens to AUTO_INCREMENT after TRUNCATE?', options: ['Continues from where left off', 'Resets to 1', 'Is deleted', 'Doubles'], answer: 'Resets to 1' },
      { question: 'Can you use a WHERE clause with TRUNCATE?', options: ['Yes, always', 'Only on primary keys', 'No, TRUNCATE removes all rows', 'Yes, but it is slow'], answer: 'No, TRUNCATE removes all rows' },
      { question: 'Why is TRUNCATE faster than DELETE?', options: ['It uses multi-threading', 'It drops and recreates the table without logging individual row deletions', 'It compresses data', 'It runs in memory'], answer: 'It drops and recreates the table without logging individual row deletions' },
      { question: 'Does TRUNCATE delete the table structure?', options: ['Yes', 'No, only the data', 'Yes, but keeps the indexes', 'No, it only deletes empty rows'], answer: 'No, only the data' },
      { question: 'Can a TRUNCATE operation be rolled back in a standard transaction?', options: ['Yes', 'No, it causes an implicit commit', 'Only if autocommit is off', 'Yes, in all engines'], answer: 'No, it causes an implicit commit' }
    ],
    interviewQuestions: [
      { q: 'What is the main difference between TRUNCATE and DELETE?', a: 'TRUNCATE is a DDL command that instantly drops and recreates the table, resetting AUTO_INCREMENT and cannot be easily rolled back. DELETE is a DML command that removes rows one by one, logging each deletion, allowing rollbacks, and allowing WHERE clauses.' },
      { q: 'Can TRUNCATE be rolled back?', a: 'In standard MySQL, TRUNCATE is a DDL operation that triggers an implicit COMMIT, meaning it cannot be rolled back in a transaction.' }
    ],
    summary: ['TRUNCATE removes all rows instantly.', 'Resets AUTO_INCREMENT.', 'Cannot use WHERE clause.'],
    references: commonReferences
  }
};

Object.assign(
  mysqlContent,
  mysqlContentBatch2,
  mysqlContentBatch3,
  mysqlContentBatch4,
  mysqlContentBatch5,
  mysqlContentBatch6,
  mysqlContentBatch7,
  mysqlPatch
);
