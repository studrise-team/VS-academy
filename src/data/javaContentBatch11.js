export const javaContentBatch11 = {
  "java_student_management_system": {
    "isStructured": true,
    "title": "101. Student Management System",
    "difficulty": "Advanced",
    "readingTime": "10 min",
    "definition": "A comprehensive mini-project that integrates Object-Oriented Programming (Classes, Objects, Encapsulation) and Collections (ArrayList) to build a system that can add, view, update, and delete student records.",
    "whyUseIt": "Building full projects is the best way to transition from learning syntax to thinking like a software engineer. It tests your ability to architect a program from scratch.",
    "syntax": "// Standard Java Project Architecture (Model and Controller Classes)",
    "codeExample": "import java.util.ArrayList;\nimport java.util.Scanner;\n\n// 1. The Model Class (Encapsulated Data)\nclass Student {\n    private int id;\n    private String name;\n    public Student(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n    public int getId() { return id; }\n    public String getName() { return name; }\n    @Override\n    public String toString() { return \"ID: \" + id + \", Name: \" + name; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Student> list = new ArrayList<>();\n        Scanner sc = new Scanner(System.in);\n        \n        while (true) {\n            System.out.println(\"\\n1. Add | 2. View All | 3. Exit\");\n            int choice = sc.nextInt();\n            \n            if (choice == 1) {\n                System.out.print(\"Enter ID: \");\n                int id = sc.nextInt();\n                System.out.print(\"Enter Name: \");\n                String name = sc.next();\n                list.add(new Student(id, name));\n                System.out.println(\"Student Added!\");\n            } else if (choice == 2) {\n                if(list.isEmpty()) System.out.println(\"No students found.\");\n                for (Student s : list) System.out.println(s);\n            } else {\n                System.out.println(\"Exiting...\");\n                break;\n            }\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "1. Add | 2. View All | 3. Exit\n(Interactive Console Application)",
    "explanation": [
      {
        "code": "class Student",
        "desc": "The 'Model'. It defines what a student is and holds their data."
      },
      {
        "code": "ArrayList<Student> list",
        "desc": "The 'Database'. It stores all the student objects in memory while the program is running."
      }
    ],
    "realWorldExample": "This is a scaled-down version of the massive ERP software universities use to track thousands of students, manage their courses, and generate transcripts.",
    "commonMistakes": [
      {
        "error": "Putting all the logic (variables, scanners, loops, arrays) into a single giant `main` method instead of separating concerns by creating a `Student` class.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Always override the `toString()` method in your model classes so you can easily print objects directly: `System.out.println(studentObject);`"
    ],
    "practiceExercise": {
      "task": "Add a feature to the Student class above: a `private double gpa` field, update the constructor, and update `toString()`.",
      "solution": "// Add to Student class: private double gpa; \n// public Student(int id, String name, double gpa) { ... this.gpa = gpa; }\n// @Override public String toString() { return ... + \", GPA: \" + gpa; }"
    },
    "interviewQuestions": [
      "What is the Model-View-Controller (MVC) design pattern?",
      "Why is it important to make fields private (Encapsulation) in model classes?"
    ],
    "quiz": [
      {
        "question": "What is the primary purpose of the `Student` class in this project?",
        "options": [
          "To handle user input",
          "To act as a blueprint for creating student objects and storing their data",
          "To render the user interface",
          "To connect to a database"
        ],
        "correctAnswer": "To act as a blueprint for creating student objects and storing their data"
      }
    ],
    "summary": [
      "Mini-projects combine OOP, Loops, and Collections.",
      "Always separate your data models (Classes) from your logic.",
      "ArrayLists are perfect for simulating in-memory databases."
    ],
    "references": [
      {
        "label": "Java Mini Projects",
        "url": "https://www.geeksforgeeks.org/java-projects/"
      }
    ]
  },
  "java_bank_management_system": {
    "isStructured": true,
    "title": "102. Bank Management System",
    "difficulty": "Advanced",
    "readingTime": "10 min",
    "definition": "A mini-project focusing on logic flow, math operations, and Exception Handling. It simulates creating an account, depositing money, withdrawing money, and checking balances.",
    "whyUseIt": "Banking applications are heavily reliant on transaction safety and error handling (e.g., trying to withdraw more money than you have). It teaches you how to write robust code.",
    "syntax": "// Concepts: Custom Exceptions, Validation, Object State",
    "codeExample": "class BankAccount {\n    private double balance;\n\n    public BankAccount(double initialBalance) {\n        this.balance = initialBalance;\n    }\n\n    public void deposit(double amount) {\n        if(amount > 0) balance += amount;\n        System.out.println(\"Deposited: $\" + amount + \" | New Balance: $\" + balance);\n    }\n\n    public void withdraw(double amount) throws Exception {\n        if(amount > balance) {\n            throw new Exception(\"Insufficient funds!\");\n        }\n        balance -= amount;\n        System.out.println(\"Withdrew: $\" + amount + \" | New Balance: $\" + balance);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        BankAccount myAccount = new BankAccount(500.0);\n        \n        myAccount.deposit(200.0);\n        \n        try {\n            myAccount.withdraw(1000.0);\n        } catch (Exception e) {\n            System.out.println(\"Transaction Failed: \" + e.getMessage());\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Deposited: $200.0 | New Balance: $700.0\nTransaction Failed: Insufficient funds!",
    "explanation": [
      {
        "code": "throws Exception",
        "desc": "The model throws an error if business logic fails, rather than just printing a message. This allows the UI (the main method) to decide how to show the error."
      }
    ],
    "realWorldExample": "This mirrors the backend logic of the banking app on your phone. If you try to transfer $5,000 but only have $50, the backend throws an `InsufficientFundsException` and the UI shows a red popup.",
    "commonMistakes": [
      {
        "error": "Using `double` or `float` for real-world financial applications. They suffer from rounding errors (e.g., `0.1 + 0.2 = 0.30000000000000004`).",
        "code": "",
        "suffix": "// Real banks use BigDecimal, not double."
      }
    ],
    "bestPractices": [
      "Keep business logic (checking balances, math) inside the Object class, and keep UI logic (System.out.print, Scanners) in the Main class."
    ],
    "practiceExercise": {
      "task": "Add a validation check to the `deposit` method to throw an `IllegalArgumentException` if the user tries to deposit a negative amount.",
      "solution": "public void deposit(double amount) {\n    if(amount <= 0) throw new IllegalArgumentException(\"Amount must be positive\");\n    balance += amount;\n}"
    },
    "interviewQuestions": [
      "Why shouldn't you use `double` for currency in Java?",
      "How would you ensure thread-safety if two people tried to withdraw from this account at the same time?"
    ],
    "quiz": [
      {
        "question": "Which class should you use in Java to handle highly precise monetary calculations without rounding errors?",
        "options": [
          "double",
          "long",
          "BigDecimal",
          "Currency"
        ],
        "correctAnswer": "BigDecimal"
      }
    ],
    "summary": [
      "Bank projects teach robust error handling.",
      "Exceptions should be thrown by models and caught by controllers.",
      "Avoid using `double` for real money; use `BigDecimal`."
    ],
    "references": [
      {
        "label": "BigDecimal in Java",
        "url": "https://www.geeksforgeeks.org/bigdecimal-class-java/"
      }
    ]
  },
  "java_library_management_system": {
    "isStructured": true,
    "title": "103. Library Management System",
    "difficulty": "Advanced",
    "readingTime": "10 min",
    "definition": "A mini-project that focuses on object relationships. You create multiple classes (Book, Member, Library) that interact with each other.",
    "whyUseIt": "It teaches you 'Composition' (a Library *has a* Book) and how to manage relationships between different data models.",
    "syntax": "// Concepts: Composition, Multiple Classes, State Tracking (Available vs Checked Out)",
    "codeExample": "import java.util.ArrayList;\n\nclass Book {\n    String title;\n    boolean isAvailable = true;\n    \n    public Book(String title) { this.title = title; }\n}\n\nclass Library {\n    ArrayList<Book> books = new ArrayList<>();\n    \n    public void addBook(Book b) { books.add(b); }\n    \n    public void borrowBook(String title) {\n        for (Book b : books) {\n            if (b.title.equals(title) && b.isAvailable) {\n                b.isAvailable = false;\n                System.out.println(\"You borrowed: \" + title);\n                return;\n            }\n        }\n        System.out.println(\"Sorry, '\" + title + \"' is not available.\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Library lib = new Library();\n        lib.addBook(new Book(\"Harry Potter\"));\n        \n        lib.borrowBook(\"Harry Potter\");\n        lib.borrowBook(\"Harry Potter\"); // Fails the second time\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "You borrowed: Harry Potter\nSorry, 'Harry Potter' is not available.",
    "explanation": [
      {
        "code": "b.isAvailable = false;",
        "desc": "We change the state of the Book object. Because objects are passed by reference, this updates the book sitting inside the Library's ArrayList!"
      }
    ],
    "realWorldExample": "E-commerce inventory. When you buy the last laptop in stock, the `isAvailable` flag flips to false, and the next person sees 'Out of Stock'.",
    "commonMistakes": [
      {
        "error": "Forgetting that `==` doesn't work for String comparison. When searching for a book title, you MUST use `b.title.equals(title)`.",
        "code": "if (b.title == title)",
        "suffix": "// WRONG! Will fail to find the book."
      }
    ],
    "bestPractices": [
      "Instead of a simple boolean for `isAvailable`, consider tracking WHO borrowed it by adding a `Member borrowedBy` field to the Book class."
    ],
    "practiceExercise": {
      "task": "Add a `returnBook(String title)` method to the Library class that finds the book and sets `isAvailable` back to true.",
      "solution": "public void returnBook(String title) {\n    for(Book b : books) if(b.title.equals(title)) { b.isAvailable = true; System.out.println(\"Returned\"); }\n}"
    },
    "interviewQuestions": [
      "What is the difference between Inheritance (IS-A) and Composition (HAS-A)?",
      "Why is an ArrayList better than an Array for storing books in a library?"
    ],
    "quiz": [
      {
        "question": "The relationship between a `Library` class and a `Book` class is an example of:",
        "options": [
          "Inheritance (Library is a Book)",
          "Composition/Aggregation (Library has a Book)",
          "Polymorphism",
          "Encapsulation"
        ],
        "correctAnswer": "Composition/Aggregation (Library has a Book)"
      }
    ],
    "summary": [
      "Library systems teach Composition (Has-A relationships).",
      "Classes interact by passing objects to each other's methods.",
      "State tracking (booleans) prevents invalid operations."
    ],
    "references": [
      {
        "label": "Composition in Java",
        "url": "https://www.geeksforgeeks.org/composition-in-java/"
      }
    ]
  },
  "java_atm_simulation": {
    "isStructured": true,
    "title": "104. ATM Simulation",
    "difficulty": "Advanced",
    "readingTime": "8 min",
    "definition": "An ATM simulation focuses heavily on authentication, loops, and state menus. It requires users to enter a PIN, validates it, and then presents a continuous menu until they log out.",
    "whyUseIt": "It teaches you how to build a state machine (Login State -> Menu State -> Transaction State) and handle user input securely.",
    "syntax": "// Concepts: Infinite While Loops, Switch Statements, Authentication",
    "codeExample": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        int correctPin = 1234;\n        double balance = 1000.0;\n        Scanner sc = new Scanner(System.in);\n        \n        System.out.print(\"Enter PIN: \");\n        int inputPin = sc.nextInt();\n        \n        if (inputPin != correctPin) {\n            System.out.println(\"Invalid PIN. Calling police...\");\n            return; // Exit program\n        }\n        \n        boolean running = true;\n        while (running) {\n            System.out.println(\"\\n1. Check Balance | 2. Withdraw | 3. Exit\");\n            int choice = sc.nextInt();\n            \n            switch (choice) {\n                case 1:\n                    System.out.println(\"Balance: $\" + balance);\n                    break;\n                case 2:\n                    System.out.print(\"Amount to withdraw: \");\n                    double amount = sc.nextDouble();\n                    if(amount <= balance) balance -= amount;\n                    else System.out.println(\"Insufficient funds\");\n                    break;\n                case 3:\n                    running = false;\n                    System.out.println(\"Take your card.\");\n                    break;\n                default:\n                    System.out.println(\"Invalid choice\");\n            }\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Enter PIN: 1234\n1. Check Balance | 2. Withdraw | 3. Exit",
    "explanation": [
      {
        "code": "boolean running = true; while(running)",
        "desc": "This creates an infinite loop that keeps the menu on screen until the user explicitly chooses to exit."
      }
    ],
    "realWorldExample": "Every kiosk you use (ATMs, Self-checkout at supermarkets, airport check-in screens) runs on an infinite state-machine loop exactly like this.",
    "commonMistakes": [
      {
        "error": "Forgetting the `break;` statement inside a `switch` case. Without it, the program will execute Case 1, and then 'fall through' and execute Case 2 and Case 3 simultaneously!",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "In a real application, PINs and passwords should never be stored as plain text (`int correctPin = 1234`). They must be cryptographically hashed."
    ],
    "practiceExercise": {
      "task": "Add a feature where the user gets locked out if they enter the wrong PIN 3 times.",
      "solution": "// Use a loop: for(int i=0; i<3; i++) { check pin... if correct break; if i==2 print locked out }"
    },
    "interviewQuestions": [
      "What is the difference between a while loop and a do-while loop?",
      "Why is the `break` keyword necessary in a switch statement?"
    ],
    "quiz": [
      {
        "question": "If you forget the `break` keyword in `case 1` of a switch statement, what happens?",
        "options": [
          "The program crashes",
          "It skips case 1 and runs case 2",
          "It runs case 1, then immediately runs case 2 (Fall-through)",
          "The compiler throws an error"
        ],
        "correctAnswer": "It runs case 1, then immediately runs case 2 (Fall-through)"
      }
    ],
    "summary": [
      "ATM simulations teach State Machines.",
      "Use `while(true)` or `while(running)` for continuous menus.",
      "Always validate user authentication before granting access."
    ],
    "references": [
      {
        "label": "Java Switch Statement",
        "url": "https://www.w3schools.com/java/java_switch.asp"
      }
    ]
  },
  "java_employee_management_system": {
    "isStructured": true,
    "title": "105. Employee Management",
    "difficulty": "Advanced",
    "readingTime": "10 min",
    "definition": "A mini-project that focuses on advanced data structures, often utilizing a `HashMap` for lightning-fast lookups of Employee records using their ID number as a Key.",
    "whyUseIt": "While ArrayLists are great, searching through an ArrayList of 10,000 employees to find ID #9999 takes a long time. Using a HashMap teaches you O(1) constant-time data retrieval.",
    "syntax": "// Concepts: HashMap, Key-Value Pairs, Fast Lookups",
    "codeExample": "import java.util.HashMap;\nimport java.util.Scanner;\n\nclass Employee {\n    String name;\n    String department;\n    public Employee(String name, String department) {\n        this.name = name; this.department = department;\n    }\n    public String toString() { return name + \" [\" + department + \"]\"; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Key: Integer (ID), Value: Employee Object\n        HashMap<Integer, Employee> db = new HashMap<>();\n        \n        db.put(101, new Employee(\"Alice\", \"Engineering\"));\n        db.put(102, new Employee(\"Bob\", \"HR\"));\n        \n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter Employee ID to search: \");\n        int searchId = sc.nextInt();\n        \n        // Blazing fast lookup without needing a loop!\n        if (db.containsKey(searchId)) {\n            System.out.println(\"Found: \" + db.get(searchId));\n        } else {\n            System.out.println(\"Employee not found.\");\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Enter Employee ID to search: 101\nFound: Alice [Engineering]",
    "explanation": [
      {
        "code": "HashMap<Integer, Employee>",
        "desc": "We map a unique integer (the ID) to a massive, complex object (the Employee)."
      },
      {
        "code": "db.containsKey(searchId)",
        "desc": "Instantly checks if the ID exists without looping through the entire database."
      }
    ],
    "realWorldExample": "Logging into Netflix. When you type your email, Netflix doesn't loop through 200 million accounts one by one. It uses a HashMap (or similar index) to jump instantly to your account using your email as the Key.",
    "commonMistakes": [
      {
        "error": "Trying to iterate through a HashMap using a standard `for(int i=0)` loop. HashMaps don't have indexes. You must loop over `map.keySet()` or `map.values()`.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Use `HashMap` when you frequently need to search for specific items using a unique identifier. Use `ArrayList` when you just need a simple list of items."
    ],
    "practiceExercise": {
      "task": "Add a new employee to the `db` HashMap with ID 103, Name 'Charlie', Department 'Sales'.",
      "solution": "db.put(103, new Employee(\"Charlie\", \"Sales\"));"
    },
    "interviewQuestions": [
      "Why is searching a HashMap faster than searching an ArrayList?",
      "Can a HashMap have duplicate Keys? What about duplicate Values?"
    ],
    "quiz": [
      {
        "question": "In a HashMap, what happens if you `.put()` a new Employee using an ID (Key) that already exists in the map?",
        "options": [
          "It throws a DuplicateKeyException",
          "It adds a second employee with the same ID",
          "It overwrites the old employee with the new one",
          "It ignores the command"
        ],
        "correctAnswer": "It overwrites the old employee with the new one"
      }
    ],
    "summary": [
      "HashMaps map unique Keys to Values.",
      "They provide incredibly fast, instant lookups.",
      "They are perfect for ID-based management systems."
    ],
    "references": [
      {
        "label": "HashMap in Java",
        "url": "https://www.geeksforgeeks.org/java-util-hashmap-in-java-with-examples/"
      }
    ]
  },
  "java_quiz_application": {
    "isStructured": true,
    "title": "106. Quiz Application",
    "difficulty": "Advanced",
    "readingTime": "8 min",
    "definition": "A mini-project that utilizes Arrays of Objects, loops, and scoring logic. You present questions, capture answers, and calculate a final grade.",
    "whyUseIt": "It heavily exercises your ability to manage parallel data (Questions, Options, Correct Answers) cleanly by wrapping them in a single Object model.",
    "syntax": "// Concepts: Arrays of Objects, Input Validation, Scoring algorithms",
    "codeExample": "import java.util.Scanner;\n\nclass Question {\n    String prompt;\n    String answer;\n    \n    public Question(String prompt, String answer) {\n        this.prompt = prompt;\n        this.answer = answer;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Array of Question Objects\n        Question[] test = {\n            new Question(\"What color is the sky?\\n(a) Red\\n(b) Blue\", \"b\"),\n            new Question(\"What is 2+2?\\n(a) 3\\n(b) 4\", \"b\")\n        };\n        \n        int score = 0;\n        Scanner sc = new Scanner(System.in);\n        \n        for (Question q : test) {\n            System.out.println(q.prompt);\n            String input = sc.nextLine();\n            \n            if (input.equalsIgnoreCase(q.answer)) {\n                score++;\n            }\n        }\n        \n        System.out.println(\"You got \" + score + \"/\" + test.length);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "What color is the sky?\n(a) Red\n(b) Blue\n[User types b]\nWhat is 2+2?\n(a) 3\n(b) 4\n[User types b]\nYou got 2/2",
    "explanation": [
      {
        "code": "Question[] test = { ... }",
        "desc": "Instead of having separate arrays for prompts and answers, we bind them together in an Object, creating an array of Objects."
      },
      {
        "code": "equalsIgnoreCase",
        "desc": "Ensures the user gets the point whether they type 'B' or 'b'."
      }
    ],
    "realWorldExample": "Duolingo, Kahoot, or any online certification exam portal. They fetch an array of Question objects from a database, loop through them, and tally the score.",
    "commonMistakes": [
      {
        "error": "Using `.next()` instead of `.nextLine()` when taking user input for strings. If a user types 'b ' (with a space), `.next()` might cause issues on the next loop iteration.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Always normalize user input using `.trim().toLowerCase()` or `.equalsIgnoreCase()` when comparing answers, because users frequently add accidental spaces or caps."
    ],
    "practiceExercise": {
      "task": "Add a third question to the `test` array: 'What language is this? (a) Java (b) Python' with answer 'a'.",
      "solution": "new Question(\"What language is this?\\n(a) Java\\n(b) Python\", \"a\")"
    },
    "interviewQuestions": [
      "Why is creating a Question class better than using two separate String arrays for prompts and answers?",
      "How would you shuffle the questions randomly before the quiz starts? (Hint: Collections.shuffle())"
    ],
    "quiz": [
      {
        "question": "What is the primary benefit of creating an array of Objects rather than parallel arrays of primitive data?",
        "options": [
          "It uses less memory",
          "It runs faster",
          "It encapsulates related data together, preventing mismatches",
          "It is required by the Java compiler"
        ],
        "correctAnswer": "It encapsulates related data together, preventing mismatches"
      }
    ],
    "summary": [
      "Quiz apps utilize Arrays of Objects.",
      "Input normalization (equalsIgnoreCase) is crucial.",
      "They teach basic scoring algorithms and loops."
    ],
    "references": [
      {
        "label": "Array of Objects in Java",
        "url": "https://www.geeksforgeeks.org/how-to-create-array-of-objects-in-java/"
      }
    ]
  },
  "java_expense_tracker": {
    "isStructured": true,
    "title": "107. Expense Tracker",
    "difficulty": "Advanced",
    "readingTime": "10 min",
    "definition": "A mini-project that focuses on Data Aggregation. It stores a list of expenses and utilizes loops and math to calculate totals, averages, or totals by category.",
    "whyUseIt": "It teaches you how to generate reports from raw data. Converting a list of 100 individual purchases into a single 'Total Spent on Food' metric is a core skill in software engineering.",
    "syntax": "// Concepts: Data Aggregation, Filtering, Accumulator Variables",
    "codeExample": "import java.util.ArrayList;\n\nclass Expense {\n    String category;\n    double amount;\n    public Expense(String category, double amount) {\n        this.category = category; this.amount = amount;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Expense> history = new ArrayList<>();\n        history.add(new Expense(\"Food\", 15.50));\n        history.add(new Expense(\"Gas\", 40.00));\n        history.add(new Expense(\"Food\", 20.00));\n        \n        double total = 0;\n        double foodTotal = 0;\n        \n        // The Aggregation Loop\n        for (Expense e : history) {\n            total += e.amount; // Add to grand total\n            if (e.category.equals(\"Food\")) {\n                foodTotal += e.amount; // Add to specific category\n            }\n        }\n        \n        System.out.println(\"Total Spent: $\" + total);\n        System.out.println(\"Spent on Food: $\" + foodTotal);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Total Spent: $75.5\nSpent on Food: $35.5",
    "explanation": [
      {
        "code": "double total = 0;",
        "desc": "An 'Accumulator Variable'. It sits outside the loop and collects data as the loop iterates over the array."
      }
    ],
    "realWorldExample": "Your banking app's monthly breakdown. It loops through your hundreds of transactions, groups them by category (Food, Entertainment, Utilities), and builds a pie chart.",
    "commonMistakes": [
      {
        "error": "Declaring the accumulator variable INSIDE the loop. It will reset to 0 on every single iteration.",
        "code": "for(Expense e: history) { double total = 0; total += e.amount; }",
        "suffix": "// WRONG! total is destroyed and recreated every loop."
      }
    ],
    "bestPractices": [
      "For advanced aggregation (like summing by EVERY category dynamically), use a `HashMap<String, Double>` where the Key is the Category and the Value is the running total."
    ],
    "practiceExercise": {
      "task": "Add logic to the loop to find the single most expensive purchase (the maximum).",
      "solution": "// Outside loop: double max = 0; \n// Inside loop: if(e.amount > max) max = e.amount;"
    },
    "interviewQuestions": [
      "What is an accumulator variable?",
      "How could you rewrite this aggregation loop using Java 8 Streams?"
    ],
    "quiz": [
      {
        "question": "Where MUST an accumulator variable (used to calculate a grand total) be declared?",
        "options": [
          "Inside the loop",
          "Inside the class constructor",
          "Outside and before the loop",
          "After the loop"
        ],
        "correctAnswer": "Outside and before the loop"
      }
    ],
    "summary": [
      "Expense trackers teach Data Aggregation.",
      "Accumulator variables must be declared outside the loop.",
      "Filtering inside a loop allows for categorized reports."
    ],
    "references": [
      {
        "label": "Java for-each Loop",
        "url": "https://www.w3schools.com/java/java_foreach_loop.asp"
      }
    ]
  },
  "java_contact_management_system": {
    "isStructured": true,
    "title": "108. Contact Management",
    "difficulty": "Advanced",
    "readingTime": "10 min",
    "definition": "A mini-project focusing on String manipulation, searching, and sorting. It manages a list of Contacts and allows users to search for names using partial matches.",
    "whyUseIt": "It teaches you how to implement a Search Engine at a fundamental level. Users rarely type exact names; they type 'Rob' and expect to see 'Robert' and 'Robin'.",
    "syntax": "// Concepts: String Methods, .contains(), .toLowerCase(), Sorting",
    "codeExample": "import java.util.ArrayList;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> contacts = new ArrayList<>();\n        contacts.add(\"Alice Smith\");\n        contacts.add(\"Robert Johnson\");\n        contacts.add(\"Robin Williams\");\n        \n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Search for a name: \");\n        String query = sc.nextLine().toLowerCase(); // Normalize input\n        \n        boolean found = false;\n        System.out.println(\"--- Results ---\");\n        for (String name : contacts) {\n            // Normalize data before checking\n            if (name.toLowerCase().contains(query)) {\n                System.out.println(name);\n                found = true;\n            }\n        }\n        \n        if (!found) System.out.println(\"No contacts found.\");\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Search for a name: rob\n--- Results ---\nRobert Johnson\nRobin Williams",
    "explanation": [
      {
        "code": "name.toLowerCase().contains(query)",
        "desc": "By converting both the database string AND the search string to lowercase, we make the search case-insensitive. 'Rob' will match 'robert'."
      },
      {
        "code": "boolean found = false;",
        "desc": "A 'flag' variable. It tracks whether our search yielded any results so we can print a fallback message if it didn't."
      }
    ],
    "realWorldExample": "The search bar in WhatsApp or your phone's contact book. As you type letters, it filters the massive list down to names that contain those characters.",
    "commonMistakes": [
      {
        "error": "Forgetting to normalize case. If you search for 'rob' and the database says 'Robert', `.contains()` will return false because 'r' does not equal 'R'.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "In a real app, use `Collections.sort(contacts)` to alphabetically sort the contacts before displaying them to the user."
    ],
    "practiceExercise": {
      "task": "Modify the code to use `.startsWith(query)` instead of `.contains(query)`. What changes about the search behavior?",
      "solution": "// It will only match if the name BEGINS with the query. Searching 'son' won't find 'Johnson' anymore."
    },
    "interviewQuestions": [
      "What is the time complexity of searching an unsorted ArrayList?",
      "How do you sort an ArrayList of Strings alphabetically in Java?"
    ],
    "quiz": [
      {
        "question": "Why do we call `.toLowerCase()` on both the user input and the database string?",
        "options": [
          "To save memory",
          "Because Java strings must be lowercase",
          "To make the search case-insensitive",
          "To speed up the loop"
        ],
        "correctAnswer": "To make the search case-insensitive"
      }
    ],
    "summary": [
      "Contact Managers teach search and filter logic.",
      "Always normalize strings to lowercase for searching.",
      "Flag variables track if a search was successful."
    ],
    "references": [
      {
        "label": "Java String contains()",
        "url": "https://www.w3schools.com/java/ref_string_contains.asp"
      }
    ]
  },
  "java_time_complexity_basics": {
    "isStructured": true,
    "title": "109. Time Complexity Basics",
    "difficulty": "Advanced",
    "readingTime": "12 min",
    "definition": "Time Complexity (Big O Notation) is a mathematical way of describing how much time an algorithm takes to run as the amount of input data grows. It measures efficiency.",
    "whyUseIt": "A program might run fine with 10 users, but crash and burn when 10,000 users log in. Big O helps you write scalable code that performs well under heavy load.",
    "syntax": "O(1), O(N), O(N^2), O(log N)",
    "codeExample": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        \n        // O(1) - Constant Time. Doesn't matter if array has 5 or 5 million items,\n        // getting the first item takes the exact same amount of time.\n        System.out.println(arr[0]);\n        \n        // O(N) - Linear Time. If array has 5 items, loops 5 times.\n        // If array has 5 million items, loops 5 million times.\n        for (int i = 0; i < arr.length; i++) {\n            System.out.println(arr[i]);\n        }\n        \n        // O(N^2) - Quadratic Time. A loop inside a loop.\n        // If array has 5 items, loops 25 times.\n        // If array has 10,000 items, loops 100 MILLION times! (Extremely slow)\n        for (int i = 0; i < arr.length; i++) {\n            for (int j = 0; j < arr.length; j++) {\n                System.out.println(arr[i] + \" - \" + arr[j]);\n            }\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "(Conceptual Topic - Output is simple prints)",
    "explanation": [
      {
        "code": "O(N^2)",
        "desc": "Nested loops multiply the workload. You should actively try to avoid nested loops when processing large amounts of data."
      }
    ],
    "realWorldExample": "O(1) is knowing exactly what page a word is on in a dictionary and opening it instantly. O(N) is reading every single page of the dictionary one by one until you find the word.",
    "commonMistakes": [
      {
        "error": "Using `ArrayList.contains()` inside a massive loop. `.contains()` is secretly an O(N) loop itself. A loop inside a loop becomes O(N^2) and destroys performance. Use a `HashSet` for O(1) lookups.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "In technical interviews, the first solution you think of is usually O(N^2) (Brute Force). Your goal is to optimize it to O(N) or O(log N) using HashMaps or sorting algorithms."
    ],
    "practiceExercise": {
      "task": "What is the time complexity of retrieving a value from a `HashMap` using its key?",
      "solution": "O(1) - Constant Time"
    },
    "interviewQuestions": [
      "What is Big O notation?",
      "What is the time complexity of Binary Search? (Answer: O(log N))",
      "Why is a HashMap faster than an ArrayList for searching?"
    ],
    "quiz": [
      {
        "question": "Which time complexity is the FASTEST (most efficient)?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      }
    ],
    "summary": [
      "Big O Notation measures algorithmic efficiency.",
      "O(1) is instant, O(N) scales linearly, O(N^2) is very slow.",
      "Avoid nested loops when working with large datasets."
    ],
    "references": [
      {
        "label": "Time Complexity Basics",
        "url": "https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/"
      }
    ]
  },
  "java_common_coding_patterns": {
    "isStructured": true,
    "title": "110. Common Coding Patterns",
    "difficulty": "Advanced",
    "readingTime": "10 min",
    "definition": "Coding patterns are proven, reusable solutions to commonly occurring algorithmic problems. Recognizing these patterns allows you to solve complex interview questions easily.",
    "whyUseIt": "If you try to solve every problem from scratch, you will struggle. Knowing patterns like 'Two Pointers' or 'Sliding Window' gives you a toolkit to crack almost any algorithm.",
    "syntax": "// Concepts: Two-Pointers, Sliding Window, Frequency Counting",
    "codeExample": "public class Main {\n    // Pattern: Two-Pointers (Used to search sorted arrays efficiently)\n    // Problem: Find two numbers that add up to a target sum\n    static boolean twoSumSorted(int[] arr, int target) {\n        int left = 0;                  // Pointer at the start\n        int right = arr.length - 1;    // Pointer at the end\n        \n        while (left < right) {\n            int sum = arr[left] + arr[right];\n            \n            if (sum == target) return true;\n            else if (sum < target) left++;  // Need a bigger number, move left pointer right\n            else right--;                   // Need a smaller number, move right pointer left\n        }\n        return false;\n    }\n\n    public static void main(String[] args) {\n        int[] sortedArray = {1, 2, 4, 6, 8, 9, 14, 15};\n        // Is there a pair that adds to 13? (4 + 9)\n        System.out.println(twoSumSorted(sortedArray, 13)); // true\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "true",
    "explanation": [
      {
        "code": "left++ and right--",
        "desc": "Instead of checking every possible combination with a slow O(N^2) nested loop, we close in from both sides, solving the problem in a blazing fast O(N) time."
      }
    ],
    "realWorldExample": "Adjusting the temperature in the shower. If it's too cold, you turn the hot water up (left pointer up). If it's too hot, you turn the hot water down (right pointer down). You don't try every single random combination.",
    "commonMistakes": [
      {
        "error": "Trying to use the Two-Pointer pattern on an array that is NOT sorted. It relies entirely on the array being in ascending order.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Before starting an algorithmic problem, ask yourself: 'Is the data sorted?' If yes, Two-Pointers or Binary Search is almost certainly the answer."
    ],
    "practiceExercise": {
      "task": "What is the time complexity of the Two-Pointer algorithm shown in the example?",
      "solution": "O(N) - Linear time, because we only loop through the array once."
    },
    "interviewQuestions": [
      "What is the Two-Pointer technique?",
      "What is the Sliding Window pattern used for?"
    ],
    "quiz": [
      {
        "question": "The Two-Pointer technique shown above requires the array to be in what state?",
        "options": [
          "Completely random",
          "Filled with negative numbers",
          "Sorted in order",
          "Stored in a HashMap"
        ],
        "correctAnswer": "Sorted in order"
      }
    ],
    "summary": [
      "Design patterns provide templates for solving algorithms.",
      "The Two-Pointer technique solves problems in O(N) time.",
      "It generally requires the array to be sorted."
    ],
    "references": [
      {
        "label": "Two Pointers Technique",
        "url": "https://www.geeksforgeeks.org/two-pointers-technique/"
      }
    ]
  }
};
