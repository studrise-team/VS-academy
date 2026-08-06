const commonReferences = [
  { label: 'W3Schools MySQL', url: 'https://www.w3schools.com/mysql/' },
  { label: 'MySQL Official Docs', url: 'https://dev.mysql.com/doc/refman/8.0/en/' }
];

export const mysqlContentBatch7 = {
  'mysql_project_banking': {
    isStructured: true,
    title: '89. DB Design: Banking System',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Designing a secure schema for a Banking System.',
    whyUseIt: 'To learn how to handle financial transactions, balances, and ACID compliance constraints.',
    syntax: 'N/A',
    codeExample: 'CREATE TABLE Customers (customer_id INT PRIMARY KEY, name VARCHAR(100), kyc_status BOOLEAN);\nCREATE TABLE Accounts (account_id INT PRIMARY KEY, customer_id INT, balance DECIMAL(15,2) CHECK (balance >= 0), FOREIGN KEY (customer_id) REFERENCES Customers(customer_id));\nCREATE TABLE Transactions (txn_id INT PRIMARY KEY, account_id INT, amount DECIMAL(15,2), txn_type ENUM(\'Credit\', \'Debit\'), timestamp DATETIME DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (account_id) REFERENCES Accounts(account_id));',
    hasLiveOutput: false,
    expectedOutput: 'A schema ensuring money cannot be negative and all changes are logged.',
    explanation: [
      { code: 'DECIMAL(15,2)', desc: 'Always use DECIMAL for money, NEVER FLOAT, to prevent rounding errors.' },
      { code: 'CHECK (balance >= 0)', desc: 'Prevents an account from going into negative balance.' }
    ],
    realWorldExample: 'A user transferring $100 to another user requires inserting two rows into Transactions and updating two rows in Accounts within a single TRANSACTION.',
    commonMistakes: [
      { error: 'Using FLOAT for currency', code: 'balance FLOAT', suffix: 'Floats are approximate. You will eventually lose pennies due to floating-point math.' }
    ],
    bestPractices: ['Never UPDATE a balance without simultaneously INSERTING a transaction log entry.'],
    practiceExercise: {
      task: 'Why should the `amount` column in Transactions NOT be a FLOAT?',
      expectedOutput: 'Floating point precision errors.',
      solution: 'Because floats are approximate numbers and can cause rounding errors with currency. Use DECIMAL.'
    },
    quiz: [
      { question: 'What data type MUST be used for financial currency in MySQL?', options: ['FLOAT', 'DOUBLE', 'DECIMAL', 'INT'], answer: 'DECIMAL' },
      { question: 'How do you prevent a bank account balance from falling below zero?', options: ['Use a Trigger', 'Use an unsigned INT', 'Use a CHECK (balance >= 0) constraint', 'Use a View'], answer: 'Use a CHECK (balance >= 0) constraint' },
      { question: 'If a user deposits money, what should the application do?', options: ['Only update the Accounts table', 'Only insert into Transactions', 'Both Update Accounts AND Insert into Transactions', 'Create a new Account'], answer: 'Both Update Accounts AND Insert into Transactions' },
      { question: 'What relationship is Customers to Accounts?', options: ['One-to-Many (A customer can have checking and savings)', 'One-to-One', 'Many-to-Many', 'None'], answer: 'One-to-Many (A customer can have checking and savings)' },
      { question: 'Which SQL feature ensures a money transfer either fully succeeds or fully fails?', options: ['INDEXES', 'TRANSACTIONS (Commit/Rollback)', 'VIEWS', 'FOREIGN KEYS'], answer: 'TRANSACTIONS (Commit/Rollback)' }
    ],
    interviewQuestions: [
      { q: 'How do you transfer money between two accounts safely?', a: 'Using an SQL TRANSACTION. Begin transaction, deduct from Account A, add to Account B, log both in Transactions table. If any step fails, ROLLBACK. If all succeed, COMMIT.' }
    ],
    summary: ['Use DECIMAL for money.', 'Enforce integrity with CHECK.', 'Use Transactions for transfers.'],
    references: commonReferences
  },

  'mysql_project_hospital': {
    isStructured: true,
    title: '90. DB Design: Hospital System',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Designing a schema for Patients, Doctors, and Appointments.',
    whyUseIt: 'To manage complex scheduling and medical records securely.',
    syntax: 'N/A',
    codeExample: 'CREATE TABLE Doctors (doc_id INT PRIMARY KEY, name VARCHAR(100), specialization VARCHAR(100));\nCREATE TABLE Patients (patient_id INT PRIMARY KEY, name VARCHAR(100), dob DATE);\nCREATE TABLE Appointments (appt_id INT PRIMARY KEY, doc_id INT, patient_id INT, appt_date DATETIME, status ENUM(\'Scheduled\', \'Completed\', \'Cancelled\'), FOREIGN KEY (doc_id) REFERENCES Doctors(doc_id), FOREIGN KEY (patient_id) REFERENCES Patients(patient_id));',
    hasLiveOutput: false,
    expectedOutput: 'A schema to handle many-to-many appointments between doctors and patients.',
    explanation: [
      { code: 'Appointments', desc: 'Acts as the Junction table between Doctors and Patients, adding a time context.' }
    ],
    realWorldExample: 'Booking an appointment online via a health portal.',
    commonMistakes: [
      { error: 'Allowing double-booking', code: '', suffix: 'You must check if a doctor is already booked at a specific DATETIME before inserting.' }
    ],
    bestPractices: ['Store medical records in highly secure, potentially encrypted tables separate from basic identity info.'],
    practiceExercise: {
      task: 'What type of relationship is Doctors to Patients?',
      expectedOutput: 'Many-to-Many',
      solution: 'Many-to-Many, resolved by the Appointments table.'
    },
    quiz: [
      { question: 'What table resolves the Many-to-Many relationship between Doctors and Patients?', options: ['Nurses', 'Rooms', 'Appointments', 'Billing'], answer: 'Appointments' },
      { question: 'What data type is best for `appt_date`?', options: ['DATE', 'TIME', 'DATETIME', 'YEAR'], answer: 'DATETIME' },
      { question: 'Where would you store a patient\'s Blood Type?', options: ['Doctors', 'Appointments', 'Patients', 'Nowhere'], answer: 'Patients' },
      { question: 'If an appointment is cancelled, should you delete the row?', options: ['Yes', 'No, change the status to Cancelled for auditing', 'Yes, to save space', 'Only if the patient asks'], answer: 'No, change the status to Cancelled for auditing' },
      { question: 'What constraints exist on `doc_id` in Appointments?', options: ['Primary Key', 'Foreign Key referencing Doctors', 'Unique', 'Check'], answer: 'Foreign Key referencing Doctors' }
    ],
    interviewQuestions: [
      { q: 'How do you prevent a doctor from being double-booked?', a: 'You can create a UNIQUE constraint on `(doc_id, appt_date)` if appointments are exactly on the hour. For flexible times, you must handle it via application logic or a TRIGGER that checks for overlapping time ranges.' }
    ],
    summary: ['Appointments is a junction table.', 'Use DATETIME for scheduling.', 'Never delete cancelled records.'],
    references: commonReferences
  },

  'mysql_project_ecommerce': {
    isStructured: true,
    title: '91. DB Design: E-Commerce System',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Designing a schema for Users, Products, Orders, and Order_Items.',
    whyUseIt: 'The most common database architecture every developer must know.',
    syntax: 'N/A',
    codeExample: 'CREATE TABLE Users (user_id INT PRIMARY KEY, email VARCHAR(100) UNIQUE);\nCREATE TABLE Products (prod_id INT PRIMARY KEY, name VARCHAR(100), price DECIMAL(10,2));\nCREATE TABLE Orders (order_id INT PRIMARY KEY, user_id INT, total DECIMAL(10,2), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);\nCREATE TABLE Order_Items (order_id INT, prod_id INT, quantity INT, price_at_purchase DECIMAL(10,2), PRIMARY KEY (order_id, prod_id));',
    hasLiveOutput: false,
    expectedOutput: 'A 4-table schema supporting carts and order history.',
    explanation: [
      { code: 'Order_Items', desc: 'Junction table between Orders and Products.' },
      { code: 'price_at_purchase', desc: 'CRITICAL: You must store the price the user paid at that exact moment. If the product price changes next year, old orders shouldn\'t change.' }
    ],
    realWorldExample: 'Amazon checkout process.',
    commonMistakes: [
      { error: 'Not storing historical prices', code: '', suffix: 'If you only link to `Products.price`, changing a product\'s price today will alter the total of an order placed 3 years ago!' }
    ],
    bestPractices: ['Always duplicate the product price into the Order_Items table at the time of purchase.'],
    practiceExercise: {
      task: 'Why does Order_Items have a composite primary key?',
      expectedOutput: 'Because one order can have multiple different products.',
      solution: 'Because the unique identifier for a row is the combination of the specific Order AND the specific Product.'
    },
    quiz: [
      { question: 'Why must `price_at_purchase` be stored in `Order_Items`?', options: ['To save space', 'To prevent past orders from changing if the product price changes in the future', 'To make it run faster', 'It is not required'], answer: 'To prevent past orders from changing if the product price changes in the future' },
      { question: 'What is the relationship between Orders and Products?', options: ['One-to-One', 'One-to-Many', 'Many-to-Many (resolved by Order_Items)', 'None'], answer: 'Many-to-Many (resolved by Order_Items)' },
      { question: 'What type of Key is `(order_id, prod_id)` in `Order_Items`?', options: ['Foreign Key only', 'Composite Primary Key', 'Unique Key', 'Candidate Key'], answer: 'Composite Primary Key' },
      { question: 'Which table should store the Shipping Address?', options: ['Products', 'Order_Items', 'Orders (or a separate Addresses table)', 'None'], answer: 'Orders (or a separate Addresses table)' },
      { question: 'What data type should `total` be?', options: ['FLOAT', 'INT', 'DECIMAL', 'VARCHAR'], answer: 'DECIMAL' }
    ],
    interviewQuestions: [
      { q: 'How do you calculate the total for an order?', a: '`SELECT SUM(quantity * price_at_purchase) FROM Order_Items WHERE order_id = ?;`' }
    ],
    summary: ['Order_Items maps Orders to Products.', 'Always store historical prices.'],
    references: commonReferences
  },

  'mysql_project_exam': {
    isStructured: true,
    title: '92. DB Design: Online Examination',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'Schema for Users taking Exams consisting of Multiple Choice Questions.',
    whyUseIt: 'To learn how to structure hierarchical tests, questions, and user answers.',
    syntax: 'N/A',
    codeExample: 'CREATE TABLE Exams (exam_id INT PRIMARY KEY, title VARCHAR(100));\nCREATE TABLE Questions (q_id INT PRIMARY KEY, exam_id INT, text TEXT, correct_option CHAR(1));\nCREATE TABLE User_Answers (user_id INT, q_id INT, selected_option CHAR(1), is_correct BOOLEAN, PRIMARY KEY (user_id, q_id));',
    hasLiveOutput: false,
    expectedOutput: 'Schema supporting taking tests and grading.',
    explanation: [
      { code: 'is_correct', desc: 'Can be calculated on the fly by joining Questions, or stored for faster read performance (denormalization).' }
    ],
    realWorldExample: 'A certification portal like AWS or Oracle exams.',
    commonMistakes: [
      { error: 'Storing answers as comma-separated strings', code: '', suffix: 'Requires one row per answer per user in User_Answers.' }
    ],
    bestPractices: ['Store questions in a separate table from the Exam to allow question reuse.'],
    practiceExercise: {
      task: 'Write a query to count how many correct answers `user_id = 5` got.',
      expectedOutput: 'SELECT COUNT(*) FROM User_Answers WHERE user_id = 5 AND is_correct = TRUE;',
      solution: 'SELECT COUNT(*) FROM User_Answers WHERE user_id = 5 AND is_correct = TRUE;'
    },
    quiz: [
      { question: 'What is the relationship between Exams and Questions?', options: ['One-to-Many', 'Many-to-Many', 'One-to-One', 'None'], answer: 'One-to-Many' },
      { question: 'What forms the Primary Key of `User_Answers`?', options: ['answer_id', 'user_id + q_id (Composite Key)', 'q_id', 'user_id'], answer: 'user_id + q_id (Composite Key)' },
      { question: 'Why use a Composite Key on User_Answers?', options: ['To save space', 'To ensure a user can only answer a specific question once', 'To make it run faster', 'To encrypt it'], answer: 'To ensure a user can only answer a specific question once' },
      { question: 'Where should the user\'s final score be stored?', options: ['Questions table', 'Exams table', 'A separate Exam_Results table (user_id, exam_id, score)', 'Nowhere'], answer: 'A separate Exam_Results table (user_id, exam_id, score)' },
      { question: 'What datatype is best for `text` (the question itself)?', options: ['INT', 'DATE', 'TEXT or VARCHAR', 'BOOLEAN'], answer: 'TEXT or VARCHAR' }
    ],
    interviewQuestions: [
      { q: 'How would you prevent a user from changing their answer after submission?', a: 'Application logic, or a database trigger that prevents UPDATEs to the `User_Answers` table once a row is inserted.' }
    ],
    summary: ['Use Composite Keys for answers.', 'Calculate or store correctness per answer.'],
    references: commonReferences
  },

  'mysql_project_college': {
    isStructured: true,
    title: '93. DB Design: College Management',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'Schema handling Departments, Professors, Students, and Classes.',
    whyUseIt: 'A more complex version of Student Management covering faculty and departments.',
    syntax: 'N/A',
    codeExample: 'CREATE TABLE Departments (dept_id INT PRIMARY KEY, name VARCHAR(100));\nCREATE TABLE Professors (prof_id INT PRIMARY KEY, name VARCHAR(100), dept_id INT);\nCREATE TABLE Classes (class_id INT PRIMARY KEY, course_name VARCHAR(100), prof_id INT, schedule VARCHAR(50));',
    hasLiveOutput: false,
    expectedOutput: 'Hierarchical structure: Dept -> Prof -> Class.',
    explanation: [
      { code: 'prof_id INT', desc: 'In Classes, defines which professor teaches this specific class.' }
    ],
    realWorldExample: 'A university system for scheduling semesters.',
    commonMistakes: [
      { error: 'Assigning a student directly to a professor', code: '', suffix: 'Students are assigned to Classes, and Classes are taught by Professors.' }
    ],
    bestPractices: ['Use clear foreign keys to establish the hierarchy of the organization.'],
    practiceExercise: {
      task: 'Which table acts as the parent to Professors?',
      expectedOutput: 'Departments',
      solution: 'Departments, because Professors have a dept_id Foreign Key.'
    },
    quiz: [
      { question: 'What relationship is Departments to Professors?', options: ['One-to-One', 'One-to-Many', 'Many-to-Many', 'None'], answer: 'One-to-Many' },
      { question: 'If a Professor leaves, what happens to their Classes?', options: ['Classes are deleted (CASCADE)', 'prof_id is set to NULL (SET NULL) until a replacement is found', 'Nothing', 'Classes belong to the Dean'], answer: 'prof_id is set to NULL (SET NULL) until a replacement is found' },
      { question: 'Where does a student\'s major belong?', options: ['Professors table', 'Students table (major_dept_id)', 'Classes table', 'Nowhere'], answer: 'Students table (major_dept_id)' },
      { question: 'Can a class be taught by multiple professors?', options: ['No, based on the schema provided', 'Yes, always', 'Only on Tuesdays', 'Yes, if we use a JOIN'], answer: 'No, based on the schema provided' },
      { question: 'What links a Class to a Professor?', options: ['Primary Key', 'Foreign Key (prof_id)', 'Index', 'View'], answer: 'Foreign Key (prof_id)' }
    ],
    interviewQuestions: [
      { q: 'How would you change the schema to allow co-taught classes (multiple professors per class)?', a: 'Remove `prof_id` from the `Classes` table and create a new junction table `Class_Professors (class_id, prof_id)`.' }
    ],
    summary: ['Establish clear hierarchies.', 'Use SET NULL for FKs if a parent (Professor) is deleted.'],
    references: commonReferences
  },

  'mysql_project_railway': {
    isStructured: true,
    title: '94. DB Design: Railway Reservation',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Schema handling Trains, Stations, Routes, and Tickets.',
    whyUseIt: 'Highly complex tracking of inventory (seats) across time and locations.',
    syntax: 'N/A',
    codeExample: 'CREATE TABLE Trains (train_id INT PRIMARY KEY, name VARCHAR(100), total_seats INT);\nCREATE TABLE Stations (station_id INT PRIMARY KEY, name VARCHAR(100));\nCREATE TABLE Routes (route_id INT PRIMARY KEY, train_id INT, station_id INT, arrival_time TIME, stop_order INT);\nCREATE TABLE Tickets (ticket_id INT PRIMARY KEY, train_id INT, user_id INT, seat_number INT, travel_date DATE);',
    hasLiveOutput: false,
    expectedOutput: 'Tracking stops and ticket inventory.',
    explanation: [
      { code: 'stop_order', desc: 'Crucial for determining the sequence of stations on a route.' },
      { code: 'seat_number', desc: 'Must be checked against existing tickets for that date to prevent double-booking.' }
    ],
    realWorldExample: 'IRCTC or Amtrak booking systems.',
    commonMistakes: [
      { error: 'Not accounting for dates', code: '', suffix: 'A train runs every day. A seat is only booked for a specific DATE, not permanently.' }
    ],
    bestPractices: ['Use Transactions and Row-Level Locking (SELECT ... FOR UPDATE) when booking a seat to prevent race conditions.'],
    practiceExercise: {
      task: 'Write a UNIQUE constraint to prevent double booking a seat on the same train on the same day.',
      expectedOutput: 'UNIQUE (train_id, travel_date, seat_number)',
      solution: 'UNIQUE (train_id, travel_date, seat_number)'
    },
    quiz: [
      { question: 'Why is `stop_order` necessary in the Routes table?', options: ['To save space', 'To know the sequence of stations the train visits', 'To calculate price', 'To identify the driver'], answer: 'To know the sequence of stations the train visits' },
      { question: 'How do you prevent two users from booking seat 12 on the same day simultaneously?', options: ['Transactions with Row-Level Locking (SELECT FOR UPDATE) and UNIQUE constraints', 'Use a larger database', 'It is impossible', 'Delete the row'], answer: 'Transactions with Row-Level Locking (SELECT FOR UPDATE) and UNIQUE constraints' },
      { question: 'What relationship is Trains to Stations?', options: ['One-to-One', 'One-to-Many', 'Many-to-Many (resolved by Routes)', 'None'], answer: 'Many-to-Many (resolved by Routes)' },
      { question: 'What data type is best for `arrival_time`?', options: ['DATE', 'TIME', 'INT', 'VARCHAR'], answer: 'TIME' },
      { question: 'Does a Ticket need a `travel_date`?', options: ['Yes, otherwise the seat is booked forever across all days', 'No', 'Only on weekends', 'Only for VIPs'], answer: 'Yes, otherwise the seat is booked forever across all days' }
    ],
    interviewQuestions: [
      { q: 'What is a Race Condition in booking?', a: 'When User A and User B both see Seat 12 as available and click Book at the exact same millisecond. Without Transactions and Locking, both might be assigned the same seat.' }
    ],
    summary: ['Use Row-Level Locking for bookings.', 'Routes resolve Train-to-Station Many-to-Many relationships.'],
    references: commonReferences
  },

  'mysql_project_inventory': {
    isStructured: true,
    title: '95. DB Design: Inventory System',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'Schema handling Products, Suppliers, Warehouses, and Stock levels.',
    whyUseIt: 'Core architecture for retail and warehouse management.',
    syntax: 'N/A',
    codeExample: 'CREATE TABLE Warehouses (wh_id INT PRIMARY KEY, location VARCHAR(100));\nCREATE TABLE Products (prod_id INT PRIMARY KEY, name VARCHAR(100), supplier_id INT);\nCREATE TABLE Inventory (wh_id INT, prod_id INT, quantity INT CHECK (quantity >= 0), PRIMARY KEY (wh_id, prod_id));',
    hasLiveOutput: false,
    expectedOutput: 'Tracking how many of each product exist in each warehouse.',
    explanation: [
      { code: 'Inventory', desc: 'Junction table between Warehouses and Products. Tracks the quantity.' }
    ],
    realWorldExample: 'Walmart tracking how many PS5s are in the New York warehouse vs the LA warehouse.',
    commonMistakes: [
      { error: 'Storing total stock in the Products table', code: '', suffix: 'If you have multiple warehouses, storing one global stock number makes it impossible to know WHERE the items actually are.' }
    ],
    bestPractices: ['Use CHECK constraints to ensure quantity never drops below 0.'],
    practiceExercise: {
      task: 'How do you find the total global stock of Product #5 across all warehouses?',
      expectedOutput: 'SELECT SUM(quantity) FROM Inventory WHERE prod_id = 5;',
      solution: 'SELECT SUM(quantity) FROM Inventory WHERE prod_id = 5;'
    },
    quiz: [
      { question: 'Why shouldn\'t `quantity` be in the Products table?', options: ['It slows down queries', 'Because a product can exist in multiple warehouses with different quantities', 'It should be there', 'To save space'], answer: 'Because a product can exist in multiple warehouses with different quantities' },
      { question: 'What forms the Primary Key of the Inventory table?', options: ['inventory_id', 'wh_id + prod_id', 'quantity', 'prod_id'], answer: 'wh_id + prod_id' },
      { question: 'How do you prevent negative stock?', options: ['Use an unsigned INT or a CHECK constraint', 'Use a Float', 'Delete the row', 'You cannot'], answer: 'Use an unsigned INT or a CHECK constraint' },
      { question: 'What relationship is Suppliers to Products?', options: ['One-to-Many (One supplier provides many products)', 'Many-to-Many', 'One-to-One', 'None'], answer: 'One-to-Many (One supplier provides many products)' },
      { question: 'How do you handle stock arriving from a supplier?', options: ['UPDATE Inventory SET quantity = quantity + X', 'Delete the row', 'Create a new Product', 'Set to 0'], answer: 'UPDATE Inventory SET quantity = quantity + X' }
    ],
    interviewQuestions: [
      { q: 'How do you track the history of inventory changes?', a: 'You create an `Inventory_Ledger` table that records every addition and subtraction (like a bank statement), rather than just updating the static number in the `Inventory` table.' }
    ],
    summary: ['Inventory is a junction table.', 'Use CHECK constraints for stock.', 'Aggregate for global totals.'],
    references: commonReferences
  },

  'mysql_interview_questions': {
    isStructured: true,
    title: '96. Top 50 Interview Questions',
    difficulty: 'Advanced',
    readingTime: '10 min',
    definition: 'Conceptual questions asked in DBA and Backend Developer interviews.',
    whyUseIt: 'To prepare for technical screens.',
    syntax: 'N/A',
    codeExample: '-- Focus on understanding concepts rather than syntax:\n-- Normalization\n-- ACID Properties\n-- JOIN vs UNION\n-- Clustered vs Non-Clustered Indexes',
    hasLiveOutput: false,
    expectedOutput: 'Knowledge check.',
    explanation: [
      { code: 'ACID', desc: 'Atomicity, Consistency, Isolation, Durability.' }
    ],
    realWorldExample: 'Passing a FAANG database design interview.',
    commonMistakes: [
      { error: 'Not knowing the difference between WHERE and HAVING', code: '', suffix: 'WHERE filters rows before aggregation. HAVING filters groups after aggregation.' }
    ],
    bestPractices: ['Practice explaining concepts out loud.'],
    practiceExercise: {
      task: 'What does the "A" in ACID stand for?',
      expectedOutput: 'Atomicity',
      solution: 'Atomicity (All or nothing transaction).'
    },
    quiz: [
      { question: 'What is the difference between DELETE and TRUNCATE?', options: ['They are the same', 'DELETE is DML (can rollback), TRUNCATE is DDL (cannot rollback, resets auto_increment)', 'DELETE is faster', 'TRUNCATE allows WHERE'], answer: 'DELETE is DML (can rollback), TRUNCATE is DDL (cannot rollback, resets auto_increment)' },
      { question: 'What is a Primary Key?', options: ['Any string', 'A unique, non-null identifier for a row', 'A foreign key', 'An index'], answer: 'A unique, non-null identifier for a row' },
      { question: 'What is a Foreign Key?', options: ['A key from another database', 'A column that references a Primary Key in another table', 'A unique constraint', 'A text field'], answer: 'A column that references a Primary Key in another table' },
      { question: 'What is a JOIN?', options: ['Merging tables based on related columns', 'Deleting tables', 'Adding rows', 'Sorting data'], answer: 'Merging tables based on related columns' },
      { question: 'What does ACID stand for?', options: ['Auto, Commit, Insert, Delete', 'Atomicity, Consistency, Isolation, Durability', 'Active, Current, Indexed, Data', 'Nothing'], answer: 'Atomicity, Consistency, Isolation, Durability' }
    ],
    interviewQuestions: [
      { q: 'Explain the difference between a Clustered and Non-Clustered Index.', a: 'A Clustered Index determines the physical order of data in a table (like a dictionary). There can only be one per table (usually the Primary Key). A Non-Clustered Index is stored separately from the data (like an index at the back of a book) and points to the physical rows.' }
    ],
    summary: ['Master ACID properties.', 'Understand Index types.', 'Know JOIN vs UNION.'],
    references: commonReferences
  },

  'mysql_query_questions': {
    isStructured: true,
    title: '97. Top 25 Query Questions',
    difficulty: 'Advanced',
    readingTime: '10 min',
    definition: 'Practical querying problems frequently asked in technical interviews.',
    whyUseIt: 'To prove you can actually write SQL, not just talk about it.',
    syntax: 'N/A',
    codeExample: '-- Q: Find the second highest salary.\nSELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);\n\n-- Alternatively (MySQL specific):\nSELECT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;',
    hasLiveOutput: false,
    expectedOutput: 'The second highest salary.',
    explanation: [
      { code: 'LIMIT 1 OFFSET 1', desc: 'Skip the first row, take the next one.' }
    ],
    realWorldExample: 'Whiteboard coding interviews.',
    commonMistakes: [
      { error: 'Forgetting GROUP BY', code: '', suffix: 'If you use an aggregate function (MAX, SUM) alongside a regular column, you MUST use GROUP BY on the regular column.' }
    ],
    bestPractices: ['Always test for edge cases (e.g., what if there are two people with the same highest salary?).'],
    practiceExercise: {
      task: 'Write a query to find employees who do NOT have a manager (manager_id is null).',
      expectedOutput: 'SELECT * FROM employees WHERE manager_id IS NULL;',
      solution: 'SELECT * FROM employees WHERE manager_id IS NULL;'
    },
    quiz: [
      { question: 'How do you find the Nth highest salary in MySQL?', options: ['Use MAX() N times', 'Use ORDER BY DESC LIMIT 1 OFFSET (N-1)', 'It is impossible', 'Use TOP N'], answer: 'Use ORDER BY DESC LIMIT 1 OFFSET (N-1)' },
      { question: 'How do you find duplicate rows in a table?', options: ['SELECT * FROM table', 'SELECT col, COUNT(*) FROM table GROUP BY col HAVING COUNT(*) > 1', 'Use UNIQUE', 'Use DISTINCT'], answer: 'SELECT col, COUNT(*) FROM table GROUP BY col HAVING COUNT(*) > 1' },
      { question: 'Which clause is evaluated first in an SQL query?', options: ['SELECT', 'FROM', 'WHERE', 'ORDER BY'], answer: 'FROM' },
      { question: 'How do you fetch common records from two tables?', options: ['OUTER JOIN', 'INNER JOIN', 'CROSS JOIN', 'UNION'], answer: 'INNER JOIN' },
      { question: 'What does `LIKE "%a%"` do?', options: ['Finds exact match "a"', 'Finds values containing "a" anywhere', 'Finds values starting with "a"', 'Throws error'], answer: 'Finds values containing "a" anywhere' }
    ],
    interviewQuestions: [
      { q: 'How would you find the department with the highest average salary?', a: '`SELECT dept_id, AVG(salary) as avg_sal FROM employees GROUP BY dept_id ORDER BY avg_sal DESC LIMIT 1;`' }
    ],
    summary: ['Master LIMIT/OFFSET.', 'Master GROUP BY and HAVING.', 'Practice subqueries.'],
    references: commonReferences
  },

  'mysql_scenario_questions': {
    isStructured: true,
    title: '98. Scenario-Based Questions',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Real-world architecture and debugging scenarios.',
    whyUseIt: 'To prove senior-level database administration skills.',
    syntax: 'N/A',
    codeExample: '-- Scenario: A query is running too slow. How do you fix it?\nEXPLAIN SELECT * FROM users WHERE email = \'test@test.com\';\n-- Look at the output to see if it says "Using filesort" or is doing a Full Table Scan.',
    hasLiveOutput: false,
    expectedOutput: 'Performance insights.',
    explanation: [
      { code: 'EXPLAIN', desc: 'Prefix any query with EXPLAIN to see how MySQL plans to execute it (which indexes it will use).' }
    ],
    realWorldExample: 'Fixing a production database that crashes under heavy load.',
    commonMistakes: [
      { error: 'Adding indexes randomly', code: '', suffix: 'Too many indexes slow down writes and bloat memory. Analyze queries first.' }
    ],
    bestPractices: ['Use the Slow Query Log to identify problematic queries.'],
    practiceExercise: {
      task: 'What keyword do you put in front of a SELECT statement to analyze its performance?',
      expectedOutput: 'EXPLAIN',
      solution: 'EXPLAIN'
    },
    quiz: [
      { question: 'What tool helps you analyze why a query is slow?', options: ['FAST', 'EXPLAIN', 'ANALYZE', 'PROFILE'], answer: 'EXPLAIN' },
      { question: 'If a table is extremely read-heavy and slow, what is the first thing you check?', options: ['Delete data', 'Are appropriate Indexes applied?', 'Change to MongoDB', 'Reboot server'], answer: 'Are appropriate Indexes applied?' },
      { question: 'What is a Deadlock?', options: ['When the DB shuts down', 'When two transactions block each other waiting for locks to release', 'A broken index', 'A dropped table'], answer: 'When two transactions block each other waiting for locks to release' },
      { question: 'How do you handle massive historical data that slows down queries?', options: ['Delete it', 'Partitioning or Archiving the data into older tables', 'Ignore it', 'Use SELECT *'], answer: 'Partitioning or Archiving the data into older tables' },
      { question: 'What does "Scaling Vertically" mean?', options: ['Adding more RAM/CPU to the existing DB server', 'Adding more DB servers', 'Writing longer queries', 'Using the Cloud'], answer: 'Adding more RAM/CPU to the existing DB server' }
    ],
    interviewQuestions: [
      { q: 'Scenario: Your app inserts 10,000 rows per second and is lagging. How do you optimize it?', a: 'Batch the inserts: `INSERT INTO table VALUES (1), (2), (3)...` instead of 10,000 separate queries. Disable indexes/constraints during bulk loads, or use a memory-optimized table temporarily.' }
    ],
    summary: ['Use EXPLAIN to debug slow queries.', 'Understand Deadlocks.', 'Know scaling strategies.'],
    references: commonReferences
  },

  'mysql_common_mistakes': {
    isStructured: true,
    title: '99. Common SQL Mistakes',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'A collection of the most frequent errors developers make when writing SQL.',
    whyUseIt: 'To save hours of debugging time by recognizing anti-patterns.',
    syntax: 'N/A',
    codeExample: '-- BAD: Using reserved words for table names\nCREATE TABLE order (id INT);\n\n-- GOOD: Use backticks or different names\nCREATE TABLE `order` (id INT);\nCREATE TABLE orders (id INT);',
    hasLiveOutput: false,
    expectedOutput: 'Avoiding syntax errors.',
    explanation: [
      { code: '`order`', desc: 'Backticks escape reserved SQL keywords.' }
    ],
    realWorldExample: 'Writing an UPDATE statement without a WHERE clause and accidentally changing every user\'s password to "12345".',
    commonMistakes: [
      { error: 'UPDATE / DELETE without WHERE', code: 'DELETE FROM users;', suffix: 'This wipes the entire table. Always double-check your WHERE clause.' }
    ],
    bestPractices: ['Always run a SELECT with your WHERE clause first to verify which rows you are about to UPDATE/DELETE.'],
    practiceExercise: {
      task: 'Why is `SELECT *` considered bad practice in production?',
      expectedOutput: 'Fetches unnecessary data, slowing down the network.',
      solution: 'It pulls unused columns over the network, wasting bandwidth and memory, and can break the app if new columns are added.'
    },
    quiz: [
      { question: 'What is the most dangerous mistake in SQL?', options: ['Using SELECT *', 'Running UPDATE or DELETE without a WHERE clause', 'Forgetting a semicolon', 'Misspelling a table name'], answer: 'Running UPDATE or DELETE without a WHERE clause' },
      { question: 'Why is `SELECT *` bad in production?', options: ['It causes errors', 'It wastes memory, bandwidth, and bypasses covering indexes', 'It deletes data', 'It is not bad'], answer: 'It wastes memory, bandwidth, and bypasses covering indexes' },
      { question: 'How do you use a reserved keyword (like `order` or `select`) as a column name?', options: ['You cannot', 'Wrap it in backticks (`order`)', 'Wrap it in single quotes', 'Capitalize it'], answer: 'Wrap it in backticks (`order`)' },
      { question: 'What is SQL Injection?', options: ['A virus', 'A vulnerability where malicious SQL is passed through user input', 'Injecting data faster', 'A new framework'], answer: 'A vulnerability where malicious SQL is passed through user input' },
      { question: 'How do you prevent SQL Injection?', options: ['Use Prepared Statements', 'Use Firewalls', 'Use JavaScript', 'Hide the database'], answer: 'Use Prepared Statements' }
    ],
    interviewQuestions: [
      { q: 'Why shouldn\'t you store passwords in plain text?', a: 'If the database is compromised, all user accounts are immediately vulnerable. Passwords must be hashed (using bcrypt or argon2) before being inserted into the database.' }
    ],
    summary: ['Never DELETE without WHERE.', 'Avoid SELECT *.', 'Use Prepared Statements to avoid SQL injection.'],
    references: commonReferences
  },

  'mysql_cheat_sheet': {
    isStructured: true,
    title: '100. MySQL Cheat Sheet',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A quick reference guide for everyday MySQL commands.',
    whyUseIt: 'Keep this handy when working on projects.',
    syntax: 'N/A',
    codeExample: '-- DDL (Data Definition)\nCREATE DATABASE db;\nCREATE TABLE t (id INT PRIMARY KEY);\nALTER TABLE t ADD col VARCHAR(10);\nDROP TABLE t;\n\n-- DML (Data Manipulation)\nINSERT INTO t (id) VALUES (1);\nSELECT * FROM t WHERE id=1;\nUPDATE t SET col=\'A\' WHERE id=1;\nDELETE FROM t WHERE id=1;\n\n-- JOINS\nSELECT * FROM a JOIN b ON a.id = b.id;',
    hasLiveOutput: false,
    expectedOutput: 'Reference list of commands.',
    explanation: [
      { code: 'Reference', desc: 'Memorize the core CRUD commands (Create, Read, Update, Delete).' }
    ],
    realWorldExample: 'Pinning a cheat sheet to your monitor while coding.',
    commonMistakes: [
      { error: 'Trying to memorize every function', code: '', suffix: 'Use Google and the official docs for obscure functions. Memorize the basics.' }
    ],
    bestPractices: ['Practice writing queries daily to build muscle memory.'],
    practiceExercise: {
      task: 'Write the 4 core DML commands for CRUD operations.',
      expectedOutput: 'INSERT, SELECT, UPDATE, DELETE',
      solution: 'INSERT (Create), SELECT (Read), UPDATE (Update), DELETE (Delete).'
    },
    quiz: [
      { question: 'Which command creates a database?', options: ['MAKE DATABASE', 'CREATE DATABASE', 'NEW DATABASE', 'INIT DATABASE'], answer: 'CREATE DATABASE' },
      { question: 'Which command deletes a table completely?', options: ['DELETE TABLE', 'REMOVE TABLE', 'DROP TABLE', 'TRUNCATE TABLE'], answer: 'DROP TABLE' },
      { question: 'Which command modifies an existing table\'s structure?', options: ['CHANGE TABLE', 'MODIFY TABLE', 'ALTER TABLE', 'UPDATE TABLE'], answer: 'ALTER TABLE' },
      { question: 'What does CRUD stand for?', options: ['Create, Read, Update, Delete', 'Copy, Run, Use, Drop', 'Code, Read, Undo, Deploy', 'Nothing'], answer: 'Create, Read, Update, Delete' },
      { question: 'Which SQL sublanguage deals with CRUD operations?', options: ['DDL', 'DML', 'DCL', 'TCL'], answer: 'DML' }
    ],
    interviewQuestions: [
      { q: 'Should you memorize every SQL command?', a: 'No. Master SELECT, JOINs, GROUP BY, and the basic CRUD operations. For everything else, understanding the *concepts* (indexes, normalization, transactions) is more important than memorizing syntax.' }
    ],
    summary: ['Master CRUD (INSERT, SELECT, UPDATE, DELETE).', 'Understand DDL vs DML.', 'Focus on concepts.'],
    references: commonReferences
  }
};
