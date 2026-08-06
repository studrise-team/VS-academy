export const javaContentBatch13 = {
  "java_rest_apis": {
    "isStructured": true,
    "title": "121. REST APIs",
    "difficulty": "Advanced",
    "readingTime": "8 min",
    "definition": "REST (Representational State Transfer) is an architectural style for building web services. A REST API allows different applications (like a React frontend and a Java backend) to communicate over the internet using standard HTTP methods (GET, POST, PUT, DELETE).",
    "whyUseIt": "It is the industry standard for backend development. Instead of generating HTML pages, your backend returns raw data (usually JSON), which allows Mobile Apps, Web Apps, and Desktop Apps to all use the exact same Java backend.",
    "syntax": "GET /users (Read), POST /users (Create), PUT /users/1 (Update), DELETE /users/1 (Delete)",
    "codeExample": "import org.springframework.web.bind.annotation.*;\nimport java.util.Arrays;\nimport java.util.List;\n\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n\n    // 1. GET Request (Read Data)\n    // Triggered when a browser/app visits: http://localhost:8080/api/users\n    @GetMapping\n    public List<String> getUsers() {\n        return Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");\n    }\n\n    // 2. POST Request (Create Data)\n    // Triggered when an app sends data to the server\n    @PostMapping\n    public String createUser(@RequestBody String newName) {\n        // In a real app, you would save 'newName' to a database here\n        return \"User \" + newName + \" successfully created!\";\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "(When sending a GET request to /api/users)\n[\"Alice\", \"Bob\", \"Charlie\"]",
    "explanation": [
      {
        "code": "@RestController",
        "desc": "Tells Spring Boot that this class is an API endpoint that returns raw data (JSON), not an HTML page."
      },
      {
        "code": "@GetMapping and @PostMapping",
        "desc": "Maps specific HTTP verbs to specific Java methods."
      }
    ],
    "realWorldExample": "When you open the Instagram app, it sends a `GET /feed` request to Instagram's Java servers. The server queries the database and returns a JSON list of photo URLs and captions. The app on your phone then draws the UI using that data.",
    "commonMistakes": [
      {
        "error": "Using GET requests for operations that modify data (like `GET /deleteUser?id=5`). GET requests should ONLY be used for reading data. Use DELETE or POST for modifications to adhere to REST standards.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Keep URLs noun-based and plural. Use `/users` instead of `/getAllUsers` or `/user`. Let the HTTP method (GET vs POST) define the action."
    ],
    "practiceExercise": {
      "task": "What HTTP method and annotation would you use to define an endpoint for updating an existing user's email address?",
      "solution": "HTTP PUT (or PATCH), using the @PutMapping annotation."
    },
    "interviewQuestions": [
      "What is a REST API?",
      "What are the standard HTTP methods and what CRUD operations do they map to?",
      "What is the difference between @Controller and @RestController in Spring Boot?"
    ],
    "quiz": [
      {
        "question": "Which HTTP method is specifically designed for creating a new resource on the server?",
        "options": [
          "GET",
          "POST",
          "PUT",
          "DELETE"
        ],
        "correctAnswer": "POST"
      }
    ],
    "summary": [
      "REST APIs allow apps to communicate over the web.",
      "They use standard HTTP verbs (GET, POST, PUT, DELETE).",
      "They return raw data (JSON) rather than HTML."
    ],
    "references": [
      {
        "label": "REST API Concepts",
        "url": "https://www.geeksforgeeks.org/rest-api-introduction/"
      }
    ]
  },
  "java_json_handling": {
    "isStructured": true,
    "title": "122. JSON Handling",
    "difficulty": "Intermediate",
    "readingTime": "7 min",
    "definition": "JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is the universal language used by REST APIs to send data between servers and clients.",
    "whyUseIt": "Java objects live in memory and cannot be sent directly over the internet. You must convert Java Objects into JSON strings (Serialization) to send them, and convert incoming JSON strings back into Java Objects (Deserialization).",
    "syntax": "{\"name\": \"Alice\", \"age\": 25, \"isStudent\": true}",
    "codeExample": "import com.fasterxml.jackson.databind.ObjectMapper;\n\nclass User {\n    public String name;\n    public int age;\n    // Empty constructor required for Jackson\n    public User() {}\n    public User(String n, int a) { name = n; age = a; }\n}\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // Jackson ObjectMapper is the industry standard for JSON in Java\n        ObjectMapper mapper = new ObjectMapper();\n        \n        // 1. SERIALIZATION: Java Object -> JSON String\n        User myUser = new User(\"Alice\", 25);\n        String jsonStr = mapper.writeValueAsString(myUser);\n        System.out.println(\"Java to JSON: \\n\" + jsonStr);\n        \n        // 2. DESERIALIZATION: JSON String -> Java Object\n        String incomingJson = \"{\\\"name\\\":\\\"Bob\\\", \\\"age\\\":30}\";\n        User parsedUser = mapper.readValue(incomingJson, User.class);\n        System.out.println(\"\\nJSON to Java: \\nName is \" + parsedUser.name);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Java to JSON: \n{\"name\":\"Alice\",\"age\":25}\n\nJSON to Java: \nName is Bob",
    "explanation": [
      {
        "code": "mapper.writeValueAsString(obj)",
        "desc": "Takes a Java object in memory, reads its fields, and generates a formatted JSON string that can be sent over the network."
      },
      {
        "code": "mapper.readValue(json, User.class)",
        "desc": "Takes a raw string of JSON and a Target Class, and dynamically constructs a Java object matching that data."
      }
    ],
    "realWorldExample": "Ordering on an app. Your phone sends `{\"item\":\"Pizza\", \"qty\":2}`. The Java backend deserializes it into an `Order` object, saves it, and serializes a `Receipt` object back to JSON to send to your phone.",
    "commonMistakes": [
      {
        "error": "Forgetting to provide a default (empty) constructor in your Java class. JSON deserializers like Jackson use Reflection to build objects, which requires a no-argument constructor.",
        "code": "public User() {}",
        "suffix": "// Mandatory for JSON libraries!"
      }
    ],
    "bestPractices": [
      "In Spring Boot, you rarely use `ObjectMapper` manually. If a Controller method returns a Java Object, Spring Boot automatically serializes it to JSON for you under the hood."
    ],
    "practiceExercise": {
      "task": "Write the raw JSON representation of an Array containing two numbers: 10 and 20.",
      "solution": "[10, 20]"
    },
    "interviewQuestions": [
      "What is Serialization and Deserialization?",
      "What is JSON and why is it preferred over XML?",
      "Which Java library is most commonly used for JSON parsing? (Answer: Jackson or Gson)"
    ],
    "quiz": [
      {
        "question": "The process of converting a Java Object in memory into a JSON String to be sent over a network is called:",
        "options": [
          "Deserialization",
          "Serialization",
          "Encryption",
          "Compilation"
        ],
        "correctAnswer": "Serialization"
      }
    ],
    "summary": [
      "JSON is the universal format for internet data.",
      "Serialization: Java -> JSON. Deserialization: JSON -> Java.",
      "Jackson and Gson are the most popular Java JSON libraries."
    ],
    "references": [
      {
        "label": "Jackson JSON Tutorial",
        "url": "https://www.geeksforgeeks.org/jackson-annotations-in-java/"
      }
    ]
  },
  "java_dependency_injection": {
    "isStructured": true,
    "title": "123. Dependency Injection",
    "difficulty": "Advanced",
    "readingTime": "9 min",
    "definition": "Dependency Injection (DI) is a design pattern where an object receives its dependencies (the objects it needs to function) from an external source rather than creating them itself using the `new` keyword.",
    "whyUseIt": "It is the core principle behind the Spring Framework (Inversion of Control). It makes code incredibly modular, easy to test, and loosely coupled.",
    "syntax": "// Concepts: @Component, @Autowired, Constructor Injection",
    "codeExample": "/*\n * THE BAD WAY (Tightly Coupled - Hard to test)\n */\nclass CarBad {\n    private Engine engine;\n    public CarBad() {\n        this.engine = new V8Engine(); // Car is permanently stuck with a V8!\n    }\n}\n\n/*\n * THE GOOD WAY (Dependency Injection - Loosely Coupled)\n */\nclass CarGood {\n    private Engine engine;\n    // The dependency is INJECTED via the constructor\n    public CarGood(Engine engine) {\n        this.engine = engine;\n    }\n}\n\n// Spring Boot handles this automatically using Annotations:\n/*\n@Component  // Tells Spring to create this object\nclass ElectricEngine implements Engine { ... }\n\n@Component\nclass Tesla {\n    private final Engine engine;\n    \n    @Autowired // Spring automatically injects the ElectricEngine here!\n    public Tesla(Engine engine) {\n        this.engine = engine;\n    }\n}\n*/",
    "hasLiveOutput": false,
    "expectedOutput": "(Conceptual Architectural Pattern)",
    "explanation": [
      {
        "code": "new V8Engine()",
        "desc": "Using 'new' inside a class creates a hardcoded, unbreakable bond. If you want to test the car with a fake mock-engine, you can't."
      },
      {
        "code": "@Autowired",
        "desc": "In Spring, the framework creates all the objects (Beans) when the app starts, and wires them together automatically wherever it sees `@Autowired`."
      }
    ],
    "realWorldExample": "Buying a flashlight. A badly designed flashlight has the batteries permanently soldered inside. A good flashlight (Dependency Injection) has an empty slot where you can inject ANY brand of AA battery from the outside.",
    "commonMistakes": [
      {
        "error": "Using Field Injection (`@Autowired` directly on the variable) instead of Constructor Injection. Constructor injection is preferred because it ensures the object can't be created in an invalid state without its dependencies.",
        "code": "@Autowired private Engine engine;",
        "suffix": "// Discouraged practice"
      }
    ],
    "bestPractices": [
      "Always program to Interfaces, not concrete classes. Inject an `Engine` interface, not a `V8Engine` class. This allows you to swap engines without changing the Car class."
    ],
    "practiceExercise": {
      "task": "If a `UserService` requires a `DatabaseRepository`, how should it acquire the repository?",
      "solution": "It should declare a DatabaseRepository parameter in its constructor, allowing an external framework (or the main method) to inject it."
    },
    "interviewQuestions": [
      "What is Dependency Injection?",
      "What is Inversion of Control (IoC)?",
      "Why is Constructor Injection preferred over Field Injection?"
    ],
    "quiz": [
      {
        "question": "What is the main benefit of Dependency Injection?",
        "options": [
          "It makes the code run faster",
          "It reduces memory usage",
          "It makes classes loosely coupled and easier to unit test",
          "It prevents NullPointerExceptions"
        ],
        "correctAnswer": "It makes classes loosely coupled and easier to unit test"
      }
    ],
    "summary": [
      "DI passes dependencies to an object from the outside.",
      "Avoid using the `new` keyword inside business logic classes.",
      "Spring Boot automates this using `@Component` and `@Autowired`."
    ],
    "references": [
      {
        "label": "Dependency Injection in Spring",
        "url": "https://www.geeksforgeeks.org/spring-dependency-injection-with-example/"
      }
    ]
  },
  "java_spring_data_jpa": {
    "isStructured": true,
    "title": "124. Spring Data JPA",
    "difficulty": "Advanced",
    "readingTime": "9 min",
    "definition": "Spring Data JPA is a framework that drastically simplifies database access. Instead of writing complex SQL queries and JDBC `ResultSet` parsers, you simply define Java interfaces, and Spring writes the database queries for you automatically.",
    "whyUseIt": "It eliminates 90% of boilerplate database code. You can save, delete, and search databases without writing a single line of SQL.",
    "syntax": "public interface UserRepository extends JpaRepository<User, Long>",
    "codeExample": "import org.springframework.data.jpa.repository.JpaRepository;\nimport java.util.List;\n\n/*\n * 1. The Model (Mapped to a database table)\n * @Entity\n * class User {\n *     @Id private Long id;\n *     private String email;\n *     private int age;\n * }\n */\n\n// 2. The Repository Interface\n// By extending JpaRepository, Spring automatically provides methods like:\n// .save(), .findAll(), .findById(), .delete()\npublic interface UserRepository extends JpaRepository<User, Long> {\n\n    // 3. Magic Methods (Derived Query Methods)\n    // Spring reads the method name and generates the SQL automatically!\n    \n    // Generates: SELECT * FROM users WHERE email = ?\n    User findByEmail(String email);\n    \n    // Generates: SELECT * FROM users WHERE age > ?\n    List<User> findByAgeGreaterThan(int age);\n}",
    "hasLiveOutput": false,
    "expectedOutput": "(Conceptual Spring Boot Integration)",
    "explanation": [
      {
        "code": "JpaRepository<User, Long>",
        "desc": "Tells Spring: 'Generate a database access object for the User class, and the User's primary key (ID) is of type Long.'"
      },
      {
        "code": "findByEmail",
        "desc": "Spring parses the method name. It sees 'findBy' (SELECT) and 'Email' (column name), and writes the SQL query in the background before the app even starts."
      }
    ],
    "realWorldExample": "Using raw JDBC is like walking into a warehouse, finding the aisle, climbing the ladder, and grabbing a box. Spring Data JPA is like having an automated robot; you just say `findBoxByBarcode(123)` and the robot brings it to you.",
    "commonMistakes": [
      {
        "error": "Making a typo in a derived query method name, like `findByEmaill()`. Spring will crash the application on startup because it cannot find a column named 'Emaill' in the User class.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "If your query is too complex for method names (e.g., joining 4 tables), use the `@Query(\"SELECT u FROM User u...\")` annotation to write custom JPQL code."
    ],
    "practiceExercise": {
      "task": "Write a Spring Data method name that will find a User by their exact `username` and `password`.",
      "solution": "User findByUsernameAndPassword(String username, String password);"
    },
    "interviewQuestions": [
      "What is Spring Data JPA?",
      "How do Derived Query Methods work?",
      "What is the difference between CrudRepository and JpaRepository?"
    ],
    "quiz": [
      {
        "question": "In Spring Data JPA, how do you perform basic CRUD operations (like saving a user to the database)?",
        "options": [
          "You must write an INSERT SQL query using JDBC",
          "You call .save() on the interface; Spring handles the rest automatically",
          "You must manually configure a Hibernate session",
          "You use the EntityManager.persist() method"
        ],
        "correctAnswer": "You call .save() on the interface; Spring handles the rest automatically"
      }
    ],
    "summary": [
      "Spring Data JPA eliminates boilerplate database code.",
      "It automatically implements `save`, `find`, and `delete` methods.",
      "It can generate SQL queries just by reading method names."
    ],
    "references": [
      {
        "label": "Spring Data JPA Guide",
        "url": "https://www.geeksforgeeks.org/spring-boot-spring-data-jpa/"
      }
    ]
  },
  "java_hibernate_basics": {
    "isStructured": true,
    "title": "125. Hibernate Basics",
    "difficulty": "Advanced",
    "readingTime": "8 min",
    "definition": "Hibernate is the most popular Java ORM (Object-Relational Mapping) framework. It maps Java Classes to Database Tables, allowing you to interact with the database using objects rather than SQL queries.",
    "whyUseIt": "Java uses Objects. SQL uses Tables. Translating between them manually using JDBC `ResultSets` is tedious. Hibernate acts as a bridge, automatically converting your Java objects into SQL `INSERT/UPDATE` statements.",
    "syntax": "Annotations: @Entity, @Id, @Column",
    "codeExample": "import javax.persistence.*;\n\n// 1. @Entity tells Hibernate to map this class to a Database Table\n@Entity\n@Table(name = \"employees\") // Optional: specifically name the table\npublic class Employee {\n\n    // 2. @Id marks this field as the Primary Key in the database\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increments (1, 2, 3...)\n    private Long id;\n\n    // 3. Normal fields are automatically mapped to columns\n    @Column(name = \"full_name\", nullable = false, length = 100)\n    private String name;\n\n    private double salary;\n\n    // Empty constructor required by Hibernate\n    public Employee() {}\n\n    // Getters and Setters omitted for brevity\n}",
    "hasLiveOutput": false,
    "expectedOutput": "(Conceptual ORM Configuration)",
    "explanation": [
      {
        "code": "@Entity",
        "desc": "The most important annotation. It registers the class with Hibernate's mapping engine."
      },
      {
        "code": "@GeneratedValue",
        "desc": "Tells the database to automatically generate the ID (like AUTO_INCREMENT in MySQL) when a new object is saved."
      }
    ],
    "realWorldExample": "Think of Hibernate as an automated translator. You speak Java (`new Employee(\"Bob\")`), and Hibernate instantly translates it into SQL (`INSERT INTO employees (name) VALUES ('Bob')`) and sends it to the database.",
    "commonMistakes": [
      {
        "error": "Forgetting the default no-argument constructor. Hibernate uses a technology called 'Reflection' to build objects from database rows, which fails instantly if there is no default constructor.",
        "code": "public Employee() {}",
        "suffix": "// Mandatory!"
      }
    ],
    "bestPractices": [
      "Avoid using primitive types (like `int` or `double`) for mapped fields. Use wrapper classes (`Integer`, `Double`). Primitives default to 0, which makes it impossible for Hibernate to tell if the value in the database is actually 0, or if it is NULL."
    ],
    "practiceExercise": {
      "task": "What annotation forces a database column to be unique?",
      "solution": "@Column(unique = true)"
    },
    "interviewQuestions": [
      "What is ORM (Object Relational Mapping)?",
      "What is the difference between JPA and Hibernate? (Answer: JPA is the specification/interface, Hibernate is the actual implementation)",
      "What is the purpose of the @Id annotation?"
    ],
    "quiz": [
      {
        "question": "Which annotation is strictly required to mark a Java class as something that should be mapped to a database table?",
        "options": [
          "@Table",
          "@Entity",
          "@Database",
          "@Component"
        ],
        "correctAnswer": "@Entity"
      }
    ],
    "summary": [
      "Hibernate translates Java Objects into Database Tables (ORM).",
      "Classes must be annotated with `@Entity`.",
      "It is the engine that powers Spring Data JPA under the hood."
    ],
    "references": [
      {
        "label": "Hibernate Architecture",
        "url": "https://www.geeksforgeeks.org/hibernate-architecture/"
      }
    ]
  },
  "java_top_100_java_interview_questions": {
    "isStructured": true,
    "title": "126. Top 100 Q's",
    "difficulty": "Advanced",
    "readingTime": "15 min",
    "definition": "A comprehensive review of the most frequently asked Java interview questions across Core Java, Multithreading, Memory Management, and Frameworks.",
    "whyUseIt": "Technical interviews follow patterns. By reviewing the top 100 questions, you guarantee you won't be caught off guard by standard trivia.",
    "syntax": "// Concepts: JVM Internals, Memory, Concurrency, Design Patterns",
    "codeExample": "/*\n * RAPID FIRE INTERVIEW REVIEW\n * \n * Q1: Is Java 100% Object-Oriented?\n * A: No, because it uses primitive data types (int, char, double) \n *    which are not objects.\n * \n * Q2: What is a Singleton class?\n * A: A class that can only have ONE instance created. Achieved by making \n *    the constructor private and providing a static getInstance() method.\n * \n * Q3: What is the difference between final, finally, and finalize?\n * A: 'final' makes variables constants/prevents overriding. 'finally' is \n *    the block in try-catch that always executes. 'finalize' is a deprecated \n *    method called by the Garbage Collector before destroying an object.\n * \n * Q4: How does Garbage Collection work?\n * A: The JVM runs a daemon thread that identifies objects with no active \n *    references pointing to them, and deletes them to free up memory.\n * \n * Q5: What is the difference between Runnable and Callable?\n * A: Both are used for multithreading. Runnable's run() method returns void. \n *    Callable's call() method can return a result and throw checked exceptions.\n */",
    "hasLiveOutput": false,
    "expectedOutput": "(Conceptual Study Material)",
    "explanation": [
      {
        "code": "final, finally, finalize",
        "desc": "The most famous trick question in Java history. They look similar but have absolutely nothing to do with each other."
      }
    ],
    "realWorldExample": "Interviewing is a separate skill from coding. You might be a great developer, but if you can't verbally explain the difference between a `String` and a `StringBuilder`, the interviewer will reject you.",
    "commonMistakes": [
      {
        "error": "Rambling. Interviewers hate 5-minute answers to simple questions. Give a crisp, 2-sentence definition, followed by a quick real-world example, then stop talking.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "If you don't know the answer, say 'I don't know, but here is how I would find out...' It shows honesty and problem-solving skills rather than trying to fake an answer."
    ],
    "practiceExercise": {
      "task": "Answer this out loud: 'Why are Strings immutable in Java?'",
      "solution": "For security (can't be altered in database connections), synchronization (thread-safe by default), and memory efficiency (String Pool)."
    },
    "interviewQuestions": [
      "What is the difference between wait() and sleep()?",
      "What is the Diamond Problem in Java?",
      "How does the JVM handle memory management?"
    ],
    "quiz": [
      {
        "question": "Which of the following is responsible for removing unused objects from memory in Java?",
        "options": [
          "The programmer using the 'delete' keyword",
          "The Garbage Collector",
          "The Operating System",
          "The Compiler"
        ],
        "correctAnswer": "The Garbage Collector"
      }
    ],
    "summary": [
      "Reviewing common questions is vital for interview prep.",
      "Understand JVM internals, like Garbage Collection.",
      "Know the differences between closely related concepts (Runnable/Callable, final/finally)."
    ],
    "references": [
      {
        "label": "Top 100 Java Interview Questions",
        "url": "https://www.geeksforgeeks.org/java-interview-questions/"
      }
    ]
  },
  "java_scenario_based_questions": {
    "isStructured": true,
    "title": "127. Scenario Q's",
    "difficulty": "Advanced",
    "readingTime": "12 min",
    "definition": "Scenario-based questions present a real-world problem and ask you to architect a solution. They test system design, problem-solving, and your choice of data structures.",
    "whyUseIt": "Senior interviews rely almost entirely on scenario questions. They prove you can apply theoretical knowledge to actual business problems.",
    "syntax": "// Concepts: System Design, Scalability, Architecture",
    "codeExample": "/*\n * SCENARIO: You are building a ticketing system for a popular concert.\n * Thousands of users will try to buy the 500 available tickets at the \n * exact same time. How do you prevent overselling (selling 505 tickets)?\n * \n * ANSWER/APPROACH:\n * 1. Concurrency: We cannot use standard variables. If two threads read \n *    the ticket count simultaneously, they might both sell the 'last' ticket.\n * 2. Solution 1 (Java level): Use synchronized blocks or ReentrantLocks \n *    around the 'purchase' method so only one thread executes it at a time.\n * 3. Solution 2 (Database level): Use Optimistic Locking (Versioning) or \n *    Pessimistic Locking (SELECT ... FOR UPDATE) in the database.\n * 4. Solution 3 (Queue level): Put all purchase requests into a message \n *    queue (like Kafka or RabbitMQ) and process them sequentially.\n */",
    "hasLiveOutput": false,
    "expectedOutput": "(Conceptual System Design)",
    "explanation": [
      {
        "code": "synchronized",
        "desc": "The simplest way to solve race conditions in Java, but it creates a bottleneck if millions of users are waiting in line."
      }
    ],
    "realWorldExample": "Ticketmaster crashing during Taylor Swift ticket sales is a prime example of failing a real-world scenario test regarding system scalability and concurrency under extreme load.",
    "commonMistakes": [
      {
        "error": "Jumping straight into code. In scenario questions, you should spend the first 5 minutes asking clarifying questions: 'How many users?', 'Is the system distributed?', 'Do we care more about speed or accuracy?'",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Always start with the simplest, brute-force solution, acknowledge its flaws, and then explain how you would scale it using advanced techniques."
    ],
    "practiceExercise": {
      "task": "Scenario: You need to store user sessions (Logins) that expire after 30 minutes. What data structure or technology would you use?",
      "solution": "Redis (an in-memory key-value data store) because it has built-in TTL (Time-To-Live) expiration features and is incredibly fast."
    },
    "interviewQuestions": [
      "How would you design a URL shortener like Bitly?",
      "How do you handle pagination when returning 1 million records from a database?",
      "How would you detect a cycle in a massive linked list?"
    ],
    "quiz": [
      {
        "question": "If you are designing a high-traffic e-commerce cart, why might saving cart data in standard Java Server memory (RAM) be a bad idea?",
        "options": [
          "RAM is slower than a hard drive",
          "If the server crashes, all cart data is permanently lost",
          "Java doesn't allow saving data in memory",
          "It causes infinite loops"
        ],
        "correctAnswer": "If the server crashes, all cart data is permanently lost"
      }
    ],
    "summary": [
      "Scenario questions test System Design and Concurrency.",
      "Identify the core problem (usually multithreading or slow lookups).",
      "Ask clarifying questions before answering."
    ],
    "references": [
      {
        "label": "System Design Basics",
        "url": "https://www.geeksforgeeks.org/system-design-tutorial/"
      }
    ]
  },
  "java_java_cheat_sheet": {
    "isStructured": true,
    "title": "128. Java Cheat Sheet",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "A quick-reference guide containing the most commonly used syntax, commands, and snippets required for day-to-day Java programming.",
    "whyUseIt": "Developers don't memorize everything. Having a cheat sheet allows you to quickly recall syntax for arrays, loops, string methods, and streams without Googling.",
    "syntax": "// Fast Syntax Reference",
    "codeExample": "/* \n * ==========================================\n * 🚀 JAVA QUICK SYNTAX CHEAT SHEET\n * ==========================================\n * \n * 1. PRINTING\n * System.out.println(\"Hello\");  // Prints with newline\n * \n * 2. STRINGS\n * String s = \"Java\";\n * s.length();             // 4\n * s.charAt(0);            // 'J'\n * s.substring(1, 3);      // \"av\"\n * s.equals(\"java\");       // false (case sensitive)\n * s.equalsIgnoreCase(\"java\"); // true\n * \n * 3. ARRAYS\n * int[] arr = new int[5];          // Empty array of size 5\n * int[] nums = {1, 2, 3};          // Initialized array\n * Arrays.sort(nums);               // Sorts array\n * System.out.println(nums.length); // 3 (Notice no parentheses!)\n * \n * 4. LISTS (ArrayList)\n * List<String> list = new ArrayList<>();\n * list.add(\"A\");\n * list.get(0);                     // \"A\"\n * list.size();                     // 1\n * \n * 5. MAPS (HashMap)\n * Map<String, Integer> map = new HashMap<>();\n * map.put(\"Age\", 25);\n * map.get(\"Age\");                  // 25\n * map.containsKey(\"Age\");          // true\n * \n * 6. LOOPS\n * for (int i = 0; i < 5; i++) { ... }\n * for (String item : list) { ... }\n */",
    "hasLiveOutput": false,
    "expectedOutput": "(Cheat Sheet - Keep this handy!)",
    "explanation": [
      {
        "code": "arr.length vs list.size() vs str.length()",
        "desc": "One of the most confusing parts of Java. Arrays use a property `.length`. Lists use a method `.size()`. Strings use a method `.length()`."
      }
    ],
    "realWorldExample": "Even 10-year senior developers keep cheat sheets for things they don't use every day (like exact Regex syntax or specific DateTime formatter patterns).",
    "commonMistakes": [
      {
        "error": "Trying to use `==` to compare Strings. `==` checks if they are the exact same object in memory. `.equals()` checks if the text inside them is the same.",
        "code": "if(str1 == str2)",
        "suffix": "// Danger! Use str1.equals(str2)"
      }
    ],
    "bestPractices": [
      "Bookmark official documentation or create your own snippet library in your IDE for code you find yourself typing repeatedly."
    ],
    "practiceExercise": {
      "task": "Review the cheat sheet: What is the method used to check if a Key exists in a HashMap?",
      "solution": ".containsKey()"
    },
    "interviewQuestions": [
      "No interview questions for this section. Review the syntax!"
    ],
    "quiz": [
      {
        "question": "Which of the following is the correct way to get the size of an ArrayList?",
        "options": [
          "list.length",
          "list.length()",
          "list.size",
          "list.size()"
        ],
        "correctAnswer": "list.size()"
      }
    ],
    "summary": [
      "Use `.length` for arrays, `.size()` for Collections.",
      "Use `.equals()` for string comparison.",
      "Keep this reference handy while practicing algorithms."
    ],
    "references": [
      {
        "label": "Java Syntax Cheat Sheet",
        "url": "https://www.geeksforgeeks.org/java-cheat-sheet/"
      }
    ]
  },
  "java_coding_challenges": {
    "isStructured": true,
    "title": "129. Coding Challenges",
    "difficulty": "Advanced",
    "readingTime": "15 min",
    "definition": "A curated set of challenging problems that combine multiple concepts (HashMaps, Loops, Strings, Logic) to simulate difficult competitive programming or interview tests.",
    "whyUseIt": "Practicing complex problems builds muscle memory. It trains your brain to break down large, impossible-looking tasks into small, solvable logical steps.",
    "syntax": "// Concepts: LeetCode-style problems, Algorithm Optimization",
    "codeExample": "import java.util.HashMap;\n\npublic class Main {\n    /*\n     * CHALLENGE: Find the First Unique Character in a String.\n     * Return its index. If it doesn't exist, return -1.\n     * Example: \"leetcode\" -> returns 0 (the 'l' is unique)\n     * Example: \"loveleetcode\" -> returns 2 (the 'v' is unique)\n     */\n    static int firstUniqChar(String s) {\n        // Step 1: Create a frequency map\n        HashMap<Character, Integer> count = new HashMap<>();\n        \n        // Step 2: Count occurrences of each character\n        for (int i = 0; i < s.length(); i++) {\n            char c = s.charAt(i);\n            count.put(c, count.getOrDefault(c, 0) + 1);\n        }\n        \n        // Step 3: Find the first character with a count of 1\n        for (int i = 0; i < s.length(); i++) {\n            if (count.get(s.charAt(i)) == 1) {\n                return i; // Found it!\n            }\n        }\n        return -1; // No unique characters\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"Index: \" + firstUniqChar(\"loveleetcode\"));\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Index: 2",
    "explanation": [
      {
        "code": "count.getOrDefault(c, 0) + 1",
        "desc": "A brilliant HashMap trick. It gets the current count of the letter, but if the letter isn't in the map yet, it defaults to 0, then adds 1."
      }
    ],
    "realWorldExample": "This exact problem is frequently asked in initial coding screens for companies like Amazon and Google. It tests your ability to use HashMaps for frequency counting (O(N) time complexity).",
    "commonMistakes": [
      {
        "error": "Solving this using nested loops (O(N^2)). You take the first letter, loop the rest of the string to see if it repeats. Then take the second letter, loop again. This is too slow for large inputs.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "When tackling coding challenges, follow the UPAS method: Understand the problem, Plan a solution, Apply the code, and evaluate Space/Time complexity."
    ],
    "practiceExercise": {
      "task": "Challenge: Write a method to check if a string is a Palindrome (reads the same forwards and backwards).",
      "solution": "// Use Two Pointers: one at start, one at end. While start < end, check if chars match. If not, return false. Move pointers inward."
    },
    "interviewQuestions": [
      "What is the time and space complexity of your solution?",
      "Can you optimize this algorithm to use an integer array instead of a HashMap?"
    ],
    "quiz": [
      {
        "question": "What does the `HashMap.getOrDefault(key, defaultValue)` method do?",
        "options": [
          "It deletes the key if it exists",
          "It returns the value if the key exists, otherwise it returns the defaultValue",
          "It throws an exception if the key is missing",
          "It sorts the HashMap"
        ],
        "correctAnswer": "It returns the value if the key exists, otherwise it returns the defaultValue"
      }
    ],
    "summary": [
      "Coding challenges combine multiple Java features.",
      "HashMaps are the ultimate tool for frequency counting.",
      "Always aim for O(N) linear time complexity."
    ],
    "references": [
      {
        "label": "Top Competitive Programming Questions",
        "url": "https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/"
      }
    ]
  },
  "java_java_roadmap": {
    "isStructured": true,
    "title": "130. Java Roadmap",
    "difficulty": "Beginner",
    "readingTime": "10 min",
    "definition": "A structured learning path detailing what you need to study, and in what order, to go from a beginner to a hired, professional Full-Stack or Backend Java Developer.",
    "whyUseIt": "The Java ecosystem is massive. Without a roadmap, you might waste months learning outdated technologies (like Applets or Swing) instead of modern, highly-paid skills (Spring Boot, Microservices).",
    "syntax": "// Your Path to Professional Java Developer",
    "codeExample": "/*\n * 🚀 THE MODERN JAVA DEVELOPER ROADMAP 🚀\n * \n * STEP 1: Core Java (You are here!)\n * - Variables, Loops, Methods, OOP Principles\n * - Collections Framework (Lists, Sets, Maps)\n * - Exception Handling & Streams\n * \n * STEP 2: Build Tools & Git\n * - Learn Git (commit, push, pull, branches)\n * - Learn Maven (pom.xml, dependencies, builds)\n * \n * STEP 3: Databases (SQL)\n * - Relational DBs (MySQL or PostgreSQL)\n * - CRUD Operations (SELECT, INSERT, UPDATE, DELETE)\n * - JDBC (Connecting Java to the Database)\n * \n * STEP 4: Web Frameworks (Backend)\n * - Spring Boot (The absolute industry standard)\n * - Spring Data JPA & Hibernate (Database ORM)\n * - Creating RESTful APIs (JSON handling)\n * \n * STEP 5: Advanced Topics & Deployment\n * - Microservices Architecture\n * - Docker (Containerization)\n * - Cloud Deployment (AWS, Heroku, or Azure)\n * \n * You don't need to know everything! Master Steps 1-4, \n * build 2 good portfolio projects, and apply for jobs!\n */",
    "hasLiveOutput": false,
    "expectedOutput": "(Follow the Roadmap!)",
    "explanation": [
      {
        "code": "Spring Boot",
        "desc": "This is the 'money maker'. 95% of modern Java backend jobs require Spring Boot. Master this."
      },
      {
        "code": "Git & Maven",
        "desc": "You cannot work on a team without knowing how to share code (Git) and manage dependencies (Maven)."
      }
    ],
    "realWorldExample": "Learning Java is like learning to use a hammer. Learning Spring Boot, Databases, and APIs is learning how to build a house. Companies hire house-builders, not hammer-swingers.",
    "commonMistakes": [
      {
        "error": "Getting stuck in 'Tutorial Hell'. Watching 100 hours of video courses but never actually writing your own project from scratch. You only learn by building and failing.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Once you finish Core Java, immediately start building a full-stack project (like a Blog or an E-commerce store). Connect a Java backend to a Database, and learn how it all fits together."
    ],
    "practiceExercise": {
      "task": "Based on the roadmap, what should you learn immediately after mastering Core Java?",
      "solution": "Build tools like Maven, and Version Control like Git."
    },
    "interviewQuestions": [
      "Can you explain the architecture of a project you built from scratch?",
      "Why did you choose Spring Boot for your backend instead of NodeJS?"
    ],
    "quiz": [
      {
        "question": "Which of the following technologies is the current industry standard for building Java web backends?",
        "options": [
          "Java Applets",
          "Java Swing",
          "Spring Boot",
          "Struts"
        ],
        "correctAnswer": "Spring Boot"
      }
    ],
    "summary": [
      "Master Core Java first, focusing heavily on Collections.",
      "Learn Git, Maven, and SQL Databases.",
      "Transition into Spring Boot and REST APIs to get hired."
    ],
    "references": [
      {
        "label": "Complete Java Backend Developer Roadmap",
        "url": "https://roadmap.sh/java"
      }
    ]
  }
};
