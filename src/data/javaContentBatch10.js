export const javaContentBatch10 = {
  "java_functional_interfaces": {
    "isStructured": true,
    "title": "91. Functional Interfaces",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "A Functional Interface is an interface that contains exactly one abstract method. They can have any number of default or static methods. They are used as the target types for Lambda Expressions.",
    "whyUseIt": "They are the backbone of functional programming in Java. If you want to use a lambda expression, Java needs to know what 'Type' that lambda is. A Functional Interface provides that type.",
    "syntax": "@FunctionalInterface\ninterface MyInterface {\n    void singleMethod();\n}",
    "codeExample": "// The annotation is optional but recommended to prevent accidental addition of a second method\n@FunctionalInterface\ninterface MathOperation {\n    int operate(int a, int b);\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // We implement the interface instantly using a Lambda!\n        MathOperation addition = (a, b) -> a + b;\n        MathOperation multiplication = (a, b) -> a * b;\n        \n        System.out.println(\"10 + 5 = \" + addition.operate(10, 5));\n        System.out.println(\"10 * 5 = \" + multiplication.operate(10, 5));\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "10 + 5 = 15\n10 * 5 = 50",
    "explanation": [
      {
        "code": "@FunctionalInterface",
        "desc": "Tells the compiler 'Throw an error if someone tries to add a second abstract method to this interface!'"
      },
      {
        "code": "MathOperation addition = ...",
        "desc": "The lambda expression `(a,b) -> a+b` perfectly matches the `int operate(int a, int b)` signature, so Java allows this assignment."
      }
    ],
    "realWorldExample": "A universal remote control with exactly ONE programmable button. Depending on how you program it (the lambda), it might turn on the TV, or it might open the garage. The 'Remote' is the Functional Interface.",
    "commonMistakes": [
      {
        "error": "Adding a second abstract method to a functional interface. This instantly breaks every single lambda expression in your entire project that relies on it.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Instead of creating your own functional interfaces, try to use Java's built-in ones from the `java.util.function` package: `Predicate`, `Function`, `Supplier`, and `Consumer`."
    ],
    "practiceExercise": {
      "task": "Use the built-in `Predicate<Integer>` interface (which returns a boolean) to create a lambda that checks if a number is even.",
      "solution": "import java.util.function.Predicate;\nPredicate<Integer> isEven = n -> n % 2 == 0;\nSystem.out.println(isEven.test(4));"
    },
    "interviewQuestions": [
      "What is a Functional Interface?",
      "Can a Functional Interface have default and static methods?",
      "What are the 4 main built-in functional interfaces in Java 8?"
    ],
    "quiz": [
      {
        "question": "How many ABSTRACT methods can a Functional Interface have?",
        "options": [
          "Zero",
          "Exactly one",
          "Two",
          "Any amount"
        ],
        "correctAnswer": "Exactly one"
      }
    ],
    "summary": [
      "Functional interfaces have exactly one abstract method.",
      "They are the target type for lambda expressions.",
      "The `@FunctionalInterface` annotation is a safety feature."
    ],
    "references": [
      {
        "label": "Functional Interfaces in Java",
        "url": "https://www.geeksforgeeks.org/functional-interfaces-java/"
      }
    ]
  },
  "java_stream_api": {
    "isStructured": true,
    "title": "92. Stream API",
    "difficulty": "Advanced",
    "readingTime": "7 min",
    "definition": "The Stream API (introduced in Java 8) is used to process collections of objects in a functional, declarative style. It allows for complex data manipulation (filtering, mapping, reducing) without writing explicit loops.",
    "whyUseIt": "It dramatically reduces boilerplate code, makes data processing pipelines highly readable, and makes it incredibly easy to process data in parallel across multiple CPU cores.",
    "syntax": "list.stream().filter(x -> condition).collect(Collectors.toList());",
    "codeExample": "import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\", \"David\", \"Anna\");\n        \n        // The old way to find names starting with 'A': write a loop, an if statement, and a new list.\n        \n        // The Stream API way:\n        List<String> aNames = names.stream()\n            .filter(name -> name.startsWith(\"A\"))  // Filter the data\n            .map(name -> name.toUpperCase())       // Transform the data\n            .sorted()                              // Sort the data\n            .collect(Collectors.toList());         // Collect back into a list\n            \n        System.out.println(aNames);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "[ALICE, ANNA]",
    "explanation": [
      {
        "code": ".stream()",
        "desc": "Converts the List into a Stream, which acts like a conveyor belt moving the data through the subsequent operations."
      },
      {
        "code": ".filter(...) and .map(...)",
        "desc": "Intermediate operations. They accept lambda expressions and modify the data on the conveyor belt."
      }
    ],
    "realWorldExample": "An assembly line in a factory. The raw materials (the List) are put on the belt (`.stream()`). They pass through a machine that throws out defects (`.filter()`), a machine that paints them (`.map()`), and finally they are boxed up (`.collect()`).",
    "commonMistakes": [
      {
        "error": "Forgetting a Terminal Operation (like `.collect()` or `.forEach()`). Streams are 'lazy'. The intermediate operations (filter/map) will NEVER execute unless there is a terminal operation at the end pulling the data through.",
        "code": "names.stream().filter(n -> n.length() > 3);",
        "suffix": "// Does absolutely nothing!"
      }
    ],
    "bestPractices": [
      "Use `.parallelStream()` instead of `.stream()` when processing massive lists (100,000+ items) to automatically distribute the work across your CPU cores."
    ],
    "practiceExercise": {
      "task": "Given a List of Integers `[1, 2, 3, 4, 5]`, use a stream to filter out the odd numbers and collect the even numbers into a new List.",
      "solution": "List<Integer> evens = nums.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());"
    },
    "interviewQuestions": [
      "What is the difference between intermediate and terminal operations in Streams?",
      "Can a Stream be reused once a terminal operation has been called?",
      "How is Stream different from a Collection?"
    ],
    "quiz": [
      {
        "question": "Which of the following is a Terminal Operation that triggers the execution of a Stream?",
        "options": [
          "filter()",
          "map()",
          "sorted()",
          "collect()"
        ],
        "correctAnswer": "collect()"
      }
    ],
    "summary": [
      "Streams allow declarative, functional data processing.",
      "They consist of a source, intermediate operations, and a terminal operation.",
      "Streams do not modify the original collection."
    ],
    "references": [
      {
        "label": "Java 8 Stream API",
        "url": "https://www.geeksforgeeks.org/java-8-stream-tutorial/"
      }
    ]
  },
  "java_method_references": {
    "isStructured": true,
    "title": "93. Method References",
    "difficulty": "Intermediate",
    "readingTime": "4 min",
    "definition": "Method References (`::`) are a shorthand notation for a lambda expression that does nothing but call an existing method.",
    "whyUseIt": "If your lambda expression just passes its parameters directly into another method, writing a method reference is much cleaner and easier to read.",
    "syntax": "ClassName::methodName",
    "codeExample": "import java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"John\", \"Jane\", \"Doe\");\n        \n        // Standard Lambda Expression\n        // names.forEach(name -> System.out.println(name));\n        \n        // Method Reference (Equivalent to above, but cleaner)\n        names.forEach(System.out::println);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "John\nJane\nDoe",
    "explanation": [
      {
        "code": "System.out::println",
        "desc": "Tells Java: 'Take whatever parameter the `forEach` gives you, and immediately feed it into `System.out.println`.'"
      }
    ],
    "realWorldExample": "Hiring an assistant. Instead of telling them: 'When a package arrives, take the package, walk to my office, and hand it to me' (Lambda). You just say: 'Direct all packages to my office' (Method Reference).",
    "commonMistakes": [
      {
        "error": "Trying to use a method reference when you need to manipulate the data before passing it. If you need to do `n -> System.out.println(n + 1)`, you CANNOT use a method reference.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Use method references specifically in Streams for clean data pipelines: `.map(String::toUpperCase)` instead of `.map(s -> s.toUpperCase())`."
    ],
    "practiceExercise": {
      "task": "Convert this lambda into a method reference: `list.forEach(num -> MyMath.square(num));`",
      "solution": "list.forEach(MyMath::square);"
    },
    "interviewQuestions": [
      "What are the four types of method references?",
      "Can we pass arguments directly into a method reference? (Answer: No)"
    ],
    "quiz": [
      {
        "question": "What is the operator used for a Method Reference?",
        "options": [
          "->",
          "::",
          "=>",
          "."
        ],
        "correctAnswer": "::"
      }
    ],
    "summary": [
      "Method References are shorthand for simple lambdas.",
      "They use the `::` operator.",
      "They improve the readability of Stream pipelines."
    ],
    "references": [
      {
        "label": "Method References in Java",
        "url": "https://www.geeksforgeeks.org/method-references-in-java-with-examples/"
      }
    ]
  },
  "java_optional_class": {
    "isStructured": true,
    "title": "94. Optional Class",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "`Optional` is a container object which may or may not contain a non-null value. It was introduced to deal with the notorious `NullPointerException`.",
    "whyUseIt": "When a method might not find a result (e.g., searching a database for an ID that doesn't exist), returning `null` forces the caller to write messy `if (result != null)` checks. Returning an `Optional` forces the developer to handle the missing data gracefully.",
    "syntax": "Optional<String> opt = Optional.ofNullable(variable);",
    "codeExample": "import java.util.Optional;\n\npublic class Main {\n    // Method simulates a database lookup that might fail\n    static Optional<String> findUser(int id) {\n        if (id == 1) return Optional.of(\"Alice\");\n        return Optional.empty(); // Safely return 'nothing'\n    }\n\n    public static void main(String[] args) {\n        Optional<String> result = findUser(2);\n        \n        // The old, dangerous way:\n        // String user = findUser(2);\n        // System.out.println(user.toUpperCase()); // Crashes with NullPointerException!\n        \n        // The modern, safe Optional way:\n        if (result.isPresent()) {\n            System.out.println(\"Found: \" + result.get().toUpperCase());\n        } else {\n            System.out.println(\"User not found.\");\n        }\n        \n        // Even better functional approach:\n        System.out.println(result.orElse(\"Default User\"));\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "User not found.\nDefault User",
    "explanation": [
      {
        "code": "Optional.of(\"Alice\")",
        "desc": "Wraps the string in an Optional box."
      },
      {
        "code": "result.orElse(\"Default\")",
        "desc": "Extracts the value from the box. If the box is empty, it returns 'Default' instead of crashing."
      }
    ],
    "realWorldExample": "A package delivery. An `Optional` is the cardboard box. When you receive it, you check if there is an item inside (`isPresent()`). If you open an empty box, it's disappointing, but it doesn't break reality (crash your app) the way a literal `null` vacuum does.",
    "commonMistakes": [
      {
        "error": "Calling `.get()` on an Optional without checking `.isPresent()` first. If it's empty, `.get()` will throw a `NoSuchElementException`, which defeats the whole purpose of using Optional to avoid exceptions!",
        "code": "result.get();",
        "suffix": "// Risky!"
      }
    ],
    "bestPractices": [
      "Prefer `.ifPresent(user -> System.out.println(user))` instead of `if(result.isPresent())` for cleaner, functional code."
    ],
    "practiceExercise": {
      "task": "Create an `Optional<String>` containing a null value using `Optional.ofNullable(null)`. Then print it using `.orElse(\"Empty\")`.",
      "solution": "Optional<String> opt = Optional.ofNullable(null); System.out.println(opt.orElse(\"Empty\"));"
    },
    "interviewQuestions": [
      "How do you create an Optional object?",
      "What is the difference between of() and ofNullable()?"
    ],
    "quiz": [
      {
        "question": "Which method is used to provide a fallback value if the Optional is empty?",
        "options": [
          "get()",
          "orElse()",
          "fallback()",
          "isPresent()"
        ],
        "correctAnswer": "orElse()"
      }
    ],
    "summary": [
      "`Optional` is a safe wrapper for data that might be null.",
      "It eliminates the need for endless `null` checks.",
      "Use `.orElse()` to provide default values gracefully."
    ],
    "references": [
      {
        "label": "Java Optional Class",
        "url": "https://www.geeksforgeeks.org/java-8-optional-class/"
      }
    ]
  },
  "java_date_time_api": {
    "isStructured": true,
    "title": "95. Date & Time API",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "The `java.time` package (introduced in Java 8) provides a modern, intuitive, and thread-safe API for working with dates, times, durations, and time zones.",
    "whyUseIt": "The old `java.util.Date` class was notoriously terrible, mutable, and hard to format. The modern API is immutable, thread-safe, and incredibly easy to use.",
    "syntax": "LocalDate date = LocalDate.now();",
    "codeExample": "import java.time.LocalDate;\nimport java.time.LocalTime;\nimport java.time.LocalDateTime;\nimport java.time.format.DateTimeFormatter;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Get current Date\n        LocalDate today = LocalDate.now();\n        System.out.println(\"Today: \" + today);\n        \n        // Get current Time\n        LocalTime time = LocalTime.now();\n        System.out.println(\"Time: \" + time);\n        \n        // Date manipulation is extremely easy\n        LocalDate nextWeek = today.plusDays(7);\n        System.out.println(\"Next Week: \" + nextWeek);\n        \n        // Formatting Dates\n        LocalDateTime now = LocalDateTime.now();\n        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(\"dd-MM-yyyy HH:mm\");\n        System.out.println(\"Formatted: \" + now.format(formatter));\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Today: 2024-11-20\nTime: 14:30:45.123\nNext Week: 2024-11-27\nFormatted: 20-11-2024 14:30",
    "explanation": [
      {
        "code": "LocalDate.now()",
        "desc": "Retrieves the current date from the system clock."
      },
      {
        "code": "DateTimeFormatter",
        "desc": "Allows you to parse and format dates using custom patterns (like 'dd-MM-yyyy')."
      }
    ],
    "realWorldExample": "A flight booking app. You use `LocalDate` to select the flight day, `LocalTime` for departure, and `ZonedDateTime` to accurately calculate when the plane lands in a different country.",
    "commonMistakes": [
      {
        "error": "Still using `java.util.Date` or `Calendar` in modern applications. Always use the `java.time` package for any project started after 2014.",
        "code": "Date d = new Date();",
        "suffix": "// Outdated! Use LocalDate or LocalDateTime"
      }
    ],
    "bestPractices": [
      "Because `LocalDate` objects are immutable, methods like `plusDays()` do not alter the original object; they return a completely new object. You must reassign it: `date = date.plusDays(1);`"
    ],
    "practiceExercise": {
      "task": "Create a `LocalDate` representing your birthday using `LocalDate.of(year, month, day)`.",
      "solution": "LocalDate bday = LocalDate.of(1995, 5, 25);"
    },
    "interviewQuestions": [
      "Why was the new Date and Time API introduced in Java 8?",
      "Are the classes in java.time thread-safe? (Answer: Yes, because they are immutable)"
    ],
    "quiz": [
      {
        "question": "Which class would you use to store a date without a time or timezone?",
        "options": [
          "LocalDateTime",
          "LocalTime",
          "LocalDate",
          "ZonedDateTime"
        ],
        "correctAnswer": "LocalDate"
      }
    ],
    "summary": [
      "`java.time` replaces the old, flawed Date/Calendar classes.",
      "It provides `LocalDate`, `LocalTime`, and `LocalDateTime`.",
      "Objects are immutable, making them thread-safe."
    ],
    "references": [
      {
        "label": "Java Date and Time",
        "url": "https://www.w3schools.com/java/java_date.asp"
      }
    ]
  },
  "java_jdbc_introduction": {
    "isStructured": true,
    "title": "96. JDBC Introduction",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "JDBC (Java Database Connectivity) is a standard Java API used to connect Java applications with relational databases (like MySQL, PostgreSQL, Oracle). It allows you to execute SQL queries directly from Java.",
    "whyUseIt": "Without JDBC, your Java application cannot talk to a database. Every enterprise application needs to save data persistently in a secure, structured database.",
    "syntax": "// Concepts of JDBC Architecture (API and Driver Manager)",
    "codeExample": "/* \n * JDBC acts as a bridge.\n * \n * [Java Application] --> [JDBC API] --> [JDBC Driver] --> [Database]\n * \n * Core Components:\n * 1. DriverManager: Manages the list of database drivers.\n * 2. Connection: Represents the physical connection to the DB.\n * 3. Statement: Used to execute SQL queries.\n * 4. ResultSet: Holds the data returned from a SELECT query.\n */",
    "hasLiveOutput": false,
    "expectedOutput": "(Conceptual Topic - No Output)",
    "explanation": [
      {
        "code": "JDBC API",
        "desc": "The interfaces provided by Java (e.g., `java.sql.Connection`)."
      },
      {
        "code": "JDBC Driver",
        "desc": "A specific .jar file provided by the database vendor (e.g., MySQL) that translates the Java API calls into the specific language the database understands."
      }
    ],
    "realWorldExample": "A translator at the UN. Your Java code speaks English. The Database speaks French. The JDBC Driver is the translator sitting between you, ensuring the database perfectly understands your instructions.",
    "commonMistakes": [
      {
        "error": "Forgetting to add the JDBC Driver `.jar` file to your project's build path/dependencies. Your code will compile, but crash at runtime saying 'No suitable driver found'.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "In modern development, developers rarely write raw JDBC code. They use frameworks like Hibernate or Spring Data JPA, which use JDBC under the hood but hide the complex boilerplate code."
    ],
    "practiceExercise": {
      "task": "What is the name of the Java package that contains the JDBC interfaces?",
      "solution": "java.sql"
    },
    "interviewQuestions": [
      "What is JDBC?",
      "What are the main components of JDBC?",
      "What is the role of the DriverManager?"
    ],
    "quiz": [
      {
        "question": "What is required to connect a Java application to a specific database like MySQL?",
        "options": [
          "Just the java.sql package",
          "A JDBC Driver specific to that database",
          "The Java Enterprise Edition (Java EE)",
          "A local installation of Apache"
        ],
        "correctAnswer": "A JDBC Driver specific to that database"
      }
    ],
    "summary": [
      "JDBC connects Java apps to relational databases.",
      "It requires a vendor-specific Driver.",
      "It uses `Connection`, `Statement`, and `ResultSet`."
    ],
    "references": [
      {
        "label": "Introduction to JDBC",
        "url": "https://www.geeksforgeeks.org/introduction-to-jdbc/"
      }
    ]
  },
  "java_connecting_java_with_mysql": {
    "isStructured": true,
    "title": "97. Connecting to MySQL",
    "difficulty": "Intermediate",
    "readingTime": "6 min",
    "definition": "To connect Java to MySQL, you must load the MySQL JDBC driver and use the `DriverManager` to establish a `Connection` by providing the database URL, username, and password.",
    "whyUseIt": "This is the first required step before you can read or write any data to your MySQL database.",
    "syntax": "Connection conn = DriverManager.getConnection(url, user, pass);",
    "codeExample": "import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class Main {\n    public static void main(String[] args) {\n        // 1. Define connection parameters\n        String url = \"jdbc:mysql://localhost:3306/my_database\";\n        String username = \"root\";\n        String password = \"password123\";\n        \n        // 2. Establish connection using try-with-resources\n        try (Connection conn = DriverManager.getConnection(url, username, password)) {\n            \n            System.out.println(\"Successfully connected to the database!\");\n            // You can now execute queries using 'conn'\n            \n        } catch (SQLException e) {\n            System.out.println(\"Database connection failed.\");\n            e.printStackTrace();\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Successfully connected to the database!",
    "explanation": [
      {
        "code": "jdbc:mysql://",
        "desc": "The protocol telling the DriverManager which driver to use."
      },
      {
        "code": "localhost:3306",
        "desc": "The server address and the default MySQL port."
      }
    ],
    "realWorldExample": "Making a phone call. The URL is the phone number, the username/password proves who you are to the person picking up. Once the `Connection` is established, you can start talking (executing SQL).",
    "commonMistakes": [
      {
        "error": "Hardcoding database passwords directly in your Java code in a real-world application. This is a massive security risk. Passwords should be loaded from environment variables or secure configuration files.",
        "code": "String pass = \"mySuperSecretPassword\";",
        "suffix": "// Bad practice for GitHub repos!"
      }
    ],
    "bestPractices": [
      "Always use try-with-resources for the `Connection` object. If a connection is not closed, it causes memory leaks and quickly exhausts the database's connection limit, crashing the database."
    ],
    "practiceExercise": {
      "task": "What exception must be caught when calling `DriverManager.getConnection()`?",
      "solution": "SQLException"
    },
    "interviewQuestions": [
      "What are the steps to connect a Java program to a database?",
      "Why do we need Class.forName() in older versions of JDBC?"
    ],
    "quiz": [
      {
        "question": "Which interface represents the physical session between the Java application and the database?",
        "options": [
          "Statement",
          "ResultSet",
          "DriverManager",
          "Connection"
        ],
        "correctAnswer": "Connection"
      }
    ],
    "summary": [
      "Use `DriverManager.getConnection()` to connect.",
      "The URL format is `jdbc:mysql://host:port/database`.",
      "Always close connections using try-with-resources."
    ],
    "references": [
      {
        "label": "JDBC Connection",
        "url": "https://www.geeksforgeeks.org/connecting-to-mysql-database-using-jdbc/"
      }
    ]
  },
  "java_crud_operations_using_jdbc": {
    "isStructured": true,
    "title": "98. CRUD Operations",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "CRUD stands for Create, Read, Update, and Delete. These are the four basic operations you perform on any database using SQL statements (`INSERT`, `SELECT`, `UPDATE`, `DELETE`).",
    "whyUseIt": "Every application that stores data needs these four capabilities. A social media app needs to Create posts, Read feeds, Update profiles, and Delete comments.",
    "syntax": "Statement stmt = conn.createStatement();\nstmt.executeUpdate(sql);",
    "codeExample": "import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.Statement;\n\npublic class Main {\n    public static void main(String[] args) {\n        String url = \"jdbc:mysql://localhost:3306/school\";\n        \n        try (Connection conn = DriverManager.getConnection(url, \"root\", \"pass\");\n             Statement stmt = conn.createStatement()) {\n             \n            // CREATE (Insert)\n            String insert = \"INSERT INTO students (name, age) VALUES ('Alice', 20)\";\n            stmt.executeUpdate(insert);\n            \n            // UPDATE\n            String update = \"UPDATE students SET age = 21 WHERE name = 'Alice'\";\n            stmt.executeUpdate(update);\n            \n            // DELETE\n            String delete = \"DELETE FROM students WHERE name = 'Alice'\";\n            int rowsAffected = stmt.executeUpdate(delete);\n            \n            System.out.println(rowsAffected + \" rows deleted.\");\n            \n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "1 rows deleted.",
    "explanation": [
      {
        "code": "conn.createStatement()",
        "desc": "Creates an object that acts as a vehicle to transport your SQL string to the database."
      },
      {
        "code": "executeUpdate()",
        "desc": "Used specifically for INSERT, UPDATE, and DELETE. It returns an integer representing how many rows were affected."
      }
    ],
    "realWorldExample": "A shopping cart. You CREATE an order when you click checkout. You READ the order to print a receipt. You UPDATE the status to 'Shipped'. If cancelled, you DELETE the order.",
    "commonMistakes": [
      {
        "error": "Using `executeQuery()` for INSERT statements. `executeQuery()` is STRICTLY for `SELECT` statements (Reading). `executeUpdate()` is for modifying data.",
        "code": "stmt.executeQuery(\"INSERT INTO...\");",
        "suffix": "// Error: query does not return a ResultSet"
      }
    ],
    "bestPractices": [
      "Avoid using raw `Statement` for user inputs to prevent SQL Injection attacks. Use `PreparedStatement` instead."
    ],
    "practiceExercise": {
      "task": "Write the Java method call used to execute an UPDATE query via a Statement object.",
      "solution": "stmt.executeUpdate(queryString);"
    },
    "interviewQuestions": [
      "What is the difference between executeQuery and executeUpdate?",
      "What does executeUpdate() return?"
    ],
    "quiz": [
      {
        "question": "Which SQL command corresponds to the 'C' in CRUD?",
        "options": [
          "CREATE TABLE",
          "INSERT",
          "SELECT",
          "UPDATE"
        ],
        "correctAnswer": "INSERT"
      }
    ],
    "summary": [
      "CRUD = Create (Insert), Read (Select), Update, Delete.",
      "Use `.createStatement()` to prepare SQL transport.",
      "Use `.executeUpdate()` for queries that modify data."
    ],
    "references": [
      {
        "label": "JDBC CRUD Operations",
        "url": "https://www.geeksforgeeks.org/crud-operations-in-jdbc/"
      }
    ]
  },
  "java_preparedstatement": {
    "isStructured": true,
    "title": "99. PreparedStatement",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "`PreparedStatement` is a sub-interface of `Statement`. It is used to execute parameterized SQL queries. The SQL statement is pre-compiled, making it faster and secure.",
    "whyUseIt": "It is absolutely mandatory for security. It prevents SQL Injection attacks by treating user input strictly as data, not as executable code. It also runs faster if you execute the same query multiple times.",
    "syntax": "PreparedStatement pstmt = conn.prepareStatement(\"INSERT INTO users VALUES (?)\");\npstmt.setString(1, \"Alice\");",
    "codeExample": "import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.PreparedStatement;\n\npublic class Main {\n    public static void main(String[] args) {\n        String url = \"jdbc:mysql://localhost/school\";\n        \n        // The ? acts as a placeholder for variables\n        String sql = \"INSERT INTO students (name, age) VALUES (?, ?)\";\n        \n        try (Connection conn = DriverManager.getConnection(url, \"root\", \"pass\");\n             PreparedStatement pstmt = conn.prepareStatement(sql)) {\n             \n            // Set values for the placeholders (1-based index)\n            pstmt.setString(1, \"Bob\");\n            pstmt.setInt(2, 22);\n            \n            // Execute\n            pstmt.executeUpdate();\n            System.out.println(\"Secure insert completed.\");\n            \n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Secure insert completed.",
    "explanation": [
      {
        "code": "VALUES (?, ?)",
        "desc": "Placeholders. The database pre-compiles the query and locks the structure, preventing attackers from injecting malicious SQL commands into the blanks."
      },
      {
        "code": "pstmt.setString(1, \"Bob\")",
        "desc": "Replaces the first `?` with the string 'Bob'. Notice JDBC indexes start at 1, not 0!"
      }
    ],
    "realWorldExample": "A login form. If you use a regular `Statement`, a hacker can type `' OR 1=1;--` as their username to bypass security. A `PreparedStatement` safely escapes those characters, treating it literally as a weird username.",
    "commonMistakes": [
      {
        "error": "Thinking the parameter index is 0-based like arrays. In JDBC, parameter indexes start at 1.",
        "code": "pstmt.setString(0, \"Bob\");",
        "suffix": "// Error: Parameter index out of range"
      }
    ],
    "bestPractices": [
      "Always use `PreparedStatement` over `Statement` in production code. There is virtually no scenario where `Statement` is preferred."
    ],
    "practiceExercise": {
      "task": "Given `SELECT * FROM users WHERE id = ?`, write the code to set the placeholder to integer 5.",
      "solution": "pstmt.setInt(1, 5);"
    },
    "interviewQuestions": [
      "What is the difference between Statement and PreparedStatement?",
      "How does PreparedStatement prevent SQL injection?"
    ],
    "quiz": [
      {
        "question": "What character is used as a placeholder in a PreparedStatement query?",
        "options": [
          "%",
          "?",
          "$",
          "@"
        ],
        "correctAnswer": "?"
      }
    ],
    "summary": [
      "`PreparedStatement` pre-compiles SQL queries.",
      "It uses `?` placeholders for variables.",
      "It is mandatory for preventing SQL Injection attacks."
    ],
    "references": [
      {
        "label": "JDBC PreparedStatement",
        "url": "https://www.geeksforgeeks.org/java-sql-preparedstatement-in-java/"
      }
    ]
  },
  "java_resultset": {
    "isStructured": true,
    "title": "100. ResultSet",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "A `ResultSet` object represents the data table generated by executing a `SELECT` statement. It maintains a cursor pointing to its current row of data.",
    "whyUseIt": "It is the only way to retrieve and read data from a database into your Java application.",
    "syntax": "ResultSet rs = stmt.executeQuery(\"SELECT * FROM table\");\nwhile(rs.next()) { ... }",
    "codeExample": "import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.Statement;\nimport java.sql.ResultSet;\n\npublic class Main {\n    public static void main(String[] args) {\n        String url = \"jdbc:mysql://localhost/school\";\n        String sql = \"SELECT id, name, age FROM students\";\n        \n        try (Connection conn = DriverManager.getConnection(url, \"root\", \"pass\");\n             Statement stmt = conn.createStatement();\n             ResultSet rs = stmt.executeQuery(sql)) { // executeQuery returns the ResultSet\n             \n            // .next() moves the cursor to the next row. Returns false when out of rows.\n            while (rs.next()) {\n                // Extract data using column names\n                int id = rs.getInt(\"id\");\n                String name = rs.getString(\"name\");\n                int age = rs.getInt(\"age\");\n                \n                System.out.println(\"ID: \" + id + \", Name: \" + name + \", Age: \" + age);\n            }\n            \n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "ID: 1, Name: Alice, Age: 21\nID: 2, Name: Bob, Age: 22",
    "explanation": [
      {
        "code": "executeQuery(sql)",
        "desc": "Used specifically for SELECT statements to get a ResultSet back."
      },
      {
        "code": "rs.next()",
        "desc": "The cursor initially points BEFORE the first row. You must call `.next()` to move to the first row of data."
      }
    ],
    "realWorldExample": "Scrolling through a spreadsheet. The `ResultSet` is the whole sheet. `rs.next()` highlights the next row. `rs.getString(\"Name\")` looks at the 'Name' column of the currently highlighted row.",
    "commonMistakes": [
      {
        "error": "Trying to extract data before calling `rs.next()`. The cursor starts positioned before the first row.",
        "code": "ResultSet rs = stmt.executeQuery(sql);\nSystem.out.println(rs.getString(\"name\"));",
        "suffix": "// CRASH: Before start of result set"
      }
    ],
    "bestPractices": [
      "Always extract data using Column Names (e.g., `rs.getInt(\"age\")`) rather than Column Indexes (`rs.getInt(3)`). If your database schema changes, index numbers will break, but column names remain safe."
    ],
    "practiceExercise": {
      "task": "Extract a boolean value from a column named `isActive` in the current ResultSet row.",
      "solution": "boolean active = rs.getBoolean(\"isActive\");"
    },
    "interviewQuestions": [
      "What is a ResultSet in JDBC?",
      "Why must we call rs.next() before extracting data?",
      "How do you iterate through all rows in a ResultSet?"
    ],
    "quiz": [
      {
        "question": "Which method is used to move the ResultSet cursor to the next row?",
        "options": [
          "rs.move()",
          "rs.forward()",
          "rs.next()",
          "rs.step()"
        ],
        "correctAnswer": "rs.next()"
      }
    ],
    "summary": [
      "`ResultSet` holds the data returned from a SELECT query.",
      "Use `rs.next()` inside a `while` loop to iterate through rows.",
      "Extract data using getter methods like `.getString()` and `.getInt()`."
    ],
    "references": [
      {
        "label": "JDBC ResultSet",
        "url": "https://www.geeksforgeeks.org/java-sql-resultset/"
      }
    ]
  }
};
