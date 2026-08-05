export const javaContentBatch12 = {
  "java_string_problems": {
    "isStructured": true,
    "title": "111. String Problems",
    "difficulty": "Intermediate",
    "readingTime": "10 min",
    "definition": "String problems are the most common algorithmic questions asked in technical interviews. They test your ability to manipulate text, arrays, and loops efficiently.",
    "whyUseIt": "Mastering string algorithms proves you understand fundamental data structures, ASCII values, and time complexity.",
    "syntax": "// Concepts: Anagrams, Palindromes, Reversals, Substrings",
    "codeExample": "import java.util.Arrays;\n\npublic class Main {\n    // Problem: Check if two strings are Anagrams (e.g. \"listen\" and \"silent\")\n    static boolean isAnagram(String str1, String str2) {\n        // If lengths don't match, they can't be anagrams\n        if (str1.length() != str2.length()) return false;\n        \n        // Convert to character arrays\n        char[] arr1 = str1.toCharArray();\n        char[] arr2 = str2.toCharArray();\n        \n        // Sort the arrays\n        Arrays.sort(arr1);\n        Arrays.sort(arr2);\n        \n        // Compare sorted arrays\n        return Arrays.equals(arr1, arr2);\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"Are 'listen' and 'silent' anagrams? \" + isAnagram(\"listen\", \"silent\"));\n        System.out.println(\"Are 'hello' and 'world' anagrams? \" + isAnagram(\"hello\", \"world\"));\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Are 'listen' and 'silent' anagrams? true\nAre 'hello' and 'world' anagrams? false",
    "explanation": [
      {
        "code": "str.toCharArray()",
        "desc": "Strings are immutable, so to manipulate or sort their characters, you must first convert them into a mutable array of characters."
      },
      {
        "code": "Arrays.sort()",
        "desc": "Sorting strings makes finding anagrams extremely easy, though the time complexity becomes O(N log N)."
      }
    ],
    "realWorldExample": "Building a Scrabble game engine. To check if a user's tiles can form a specific word on the board, the engine runs high-speed anagram and substring algorithms.",
    "commonMistakes": [
      {
        "error": "Trying to solve string frequency problems (like 'find the most common character') using nested O(N^2) loops instead of a `HashMap<Character, Integer>` for an O(N) solution.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "In many string problems (like finding non-repeating characters), an integer array of size 256 (for ASCII characters) is faster and uses less memory than a HashMap."
    ],
    "practiceExercise": {
      "task": "Write a method to reverse a String using a `StringBuilder`.",
      "solution": "String reverse(String s) { return new StringBuilder(s).reverse().toString(); }"
    },
    "interviewQuestions": [
      "How do you check if a string contains only digits?",
      "How do you find the first non-repeated character in a string?"
    ],
    "quiz": [
      {
        "question": "Which of the following is the most efficient way to concatenate a string inside a loop?",
        "options": [
          "Using the + operator",
          "Using String.concat()",
          "Using StringBuilder.append()",
          "Using String.join()"
        ],
        "correctAnswer": "Using StringBuilder.append()"
      }
    ],
    "summary": [
      "String manipulation is a core interview topic.",
      "Convert to `char[]` to edit or sort strings.",
      "Use `StringBuilder` for heavy concatenations."
    ],
    "references": [
      {
        "label": "Top String Interview Questions",
        "url": "https://www.geeksforgeeks.org/top-50-string-coding-problems-for-interviews/"
      }
    ]
  },
  "java_array_problems": {
    "isStructured": true,
    "title": "112. Array Problems",
    "difficulty": "Intermediate",
    "readingTime": "12 min",
    "definition": "Array problems require you to search, sort, or manipulate collections of numbers. They are the foundation of algorithmic problem solving.",
    "whyUseIt": "Arrays force you to think about memory management and time complexity. Problems like 'Find the missing number' test your logical reasoning.",
    "syntax": "// Concepts: Traversal, Searching, Sorting, Matrix operations",
    "codeExample": "public class Main {\n    // Problem: Find the maximum sum of a contiguous subarray (Kadane's Algorithm)\n    static int maxSubArraySum(int[] arr) {\n        int maxSoFar = arr[0];\n        int currentMax = arr[0];\n        \n        for (int i = 1; i < arr.length; i++) {\n            // Do we start a new sequence here, or add to the existing sequence?\n            currentMax = Math.max(arr[i], currentMax + arr[i]);\n            \n            // Update the global maximum\n            maxSoFar = Math.max(maxSoFar, currentMax);\n        }\n        return maxSoFar;\n    }\n\n    public static void main(String[] args) {\n        int[] numbers = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\n        \n        System.out.println(\"Maximum contiguous sum is: \" + maxSubArraySum(numbers));\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Maximum contiguous sum is: 6",
    "explanation": [
      {
        "code": "Math.max(arr[i], currentMax + arr[i])",
        "desc": "The core of Kadane's algorithm. If the current number is bigger than the previous sum PLUS the current number, it means the previous sum was dragging us down, so we start fresh!"
      }
    ],
    "realWorldExample": "Financial stock analysis. Finding the contiguous subarray with the maximum sum is mathematically identical to finding the best days to buy and sell a stock for maximum profit.",
    "commonMistakes": [
      {
        "error": "Going out of bounds. Always double-check your loop conditions: `i < arr.length` (correct) vs `i <= arr.length` (throws ArrayIndexOutOfBoundsException).",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "If you need to search an array many times, it is often better to sort it first (O(N log N)) and use Binary Search (O(log N)) rather than doing Linear Search (O(N)) every time."
    ],
    "practiceExercise": {
      "task": "Write a loop to find the minimum (smallest) number in an integer array.",
      "solution": "int min = arr[0]; for(int i: arr) { if(i < min) min = i; }"
    },
    "interviewQuestions": [
      "How do you find a missing number in an integer array of 1 to 100?",
      "How do you remove duplicates from a sorted array in-place?"
    ],
    "quiz": [
      {
        "question": "What is the time complexity of Kadane's algorithm (shown in the example)?",
        "options": [
          "O(1)",
          "O(N)",
          "O(N log N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      }
    ],
    "summary": [
      "Array problems test iteration and logical bounds checking.",
      "Many array problems can be solved in O(N) using pointers.",
      "Sorting arrays unlocks faster search algorithms."
    ],
    "references": [
      {
        "label": "Top Array Interview Questions",
        "url": "https://www.geeksforgeeks.org/top-50-array-coding-problems-for-interviews/"
      }
    ]
  },
  "java_oop_interview_questions": {
    "isStructured": true,
    "title": "113. OOP Interview Q's",
    "difficulty": "Intermediate",
    "readingTime": "8 min",
    "definition": "Interviews often include theoretical questions about Object-Oriented Programming (OOP) to ensure you understand HOW Java works under the hood, not just how to type syntax.",
    "whyUseIt": "If you don't understand Polymorphism or Encapsulation, you won't be able to architect large, scalable applications in a team environment.",
    "syntax": "// Concepts: Abstraction, Encapsulation, Inheritance, Polymorphism",
    "codeExample": "/*\n * COMMON OOP INTERVIEW QUESTIONS & ANSWERS\n * \n * Q: What are the 4 pillars of OOP?\n * A: Encapsulation (hiding data), Inheritance (sharing behavior), \n *    Polymorphism (many forms), and Abstraction (hiding implementation).\n * \n * Q: What is the difference between Overloading and Overriding?\n * A: Overloading occurs at compile-time (same method name, different parameters \n *    in the same class). Overriding occurs at runtime (same method signature, \n *    but one is in the parent class and one is in the child class).\n * \n * Q: Can you instantiate an Interface?\n * A: No, interfaces are completely abstract. However, you can instantiate a \n *    class that implements the interface, or use an anonymous inner class.\n * \n * Q: Why doesn't Java support multiple inheritance?\n * A: To avoid the \"Diamond Problem\" (ambiguity if two parent classes have a \n *    method with the exact same signature). Interfaces solve this by forcing \n *    the child class to provide the implementation.\n */",
    "hasLiveOutput": false,
    "expectedOutput": "(Conceptual Study Material)",
    "explanation": [
      {
        "code": "Overloading vs Overriding",
        "desc": "This is the most frequently asked OOP question for junior developers. Memorize the difference!"
      }
    ],
    "realWorldExample": "If an interviewer asks you to 'design a Parking Lot system', they aren't looking for a main method. They want you to define classes (`Vehicle`, `Car`, `Motorcycle`), Interfaces (`Ticketable`), and relationships (A ParkingGarage `has-a` ParkingSpot).",
    "commonMistakes": [
      {
        "error": "Memorizing definitions without being able to code them. If you can define Polymorphism but can't write a class that extends another class and overrides a method, you will fail the interview.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "When answering theoretical questions, always provide a real-world coding example. E.g., 'Encapsulation is hiding data, like making a BankAccount balance private and providing a deposit() method.'"
    ],
    "practiceExercise": {
      "task": "Explain 'Polymorphism' in one simple sentence.",
      "solution": "Polymorphism allows objects of different classes to be treated as objects of a common superclass, enabling a single method call to behave differently based on the object's actual type."
    },
    "interviewQuestions": [
      "What is the difference between an abstract class and an interface?",
      "What does the 'super' keyword do?",
      "Can we override a static method?"
    ],
    "quiz": [
      {
        "question": "Which OOP concept is demonstrated by making class variables `private` and accessing them via `public` getter/setter methods?",
        "options": [
          "Inheritance",
          "Polymorphism",
          "Abstraction",
          "Encapsulation"
        ],
        "correctAnswer": "Encapsulation"
      }
    ],
    "summary": [
      "OOP has 4 pillars: Abstraction, Encapsulation, Inheritance, Polymorphism.",
      "Overloading = compile-time, Overriding = runtime.",
      "Java prevents multiple inheritance via classes to avoid ambiguity."
    ],
    "references": [
      {
        "label": "Top OOP Interview Questions",
        "url": "https://www.geeksforgeeks.org/commonly-asked-oop-interview-questions/"
      }
    ]
  },
  "java_collections_interview_questions": {
    "isStructured": true,
    "title": "114. Collections Q's",
    "difficulty": "Intermediate",
    "readingTime": "8 min",
    "definition": "The Collections Framework is heavily tested in interviews. You must know WHICH data structure to use in specific scenarios and how they operate under the hood.",
    "whyUseIt": "Using an ArrayList when you should have used a HashSet can make an application run 10,000 times slower. Interviewers want to know you won't make that mistake.",
    "syntax": "// Concepts: List vs Set vs Map, Internal implementations",
    "codeExample": "/*\n * COMMON COLLECTIONS INTERVIEW QUESTIONS & ANSWERS\n * \n * Q: What is the difference between ArrayList and LinkedList?\n * A: ArrayList uses a dynamic array. It is fast for retrieving data (O(1)) \n *    but slow for inserting/deleting in the middle (O(N)). LinkedList uses \n *    nodes. It is fast for inserting/deleting (O(1)) but slow for retrieval (O(N)).\n * \n * Q: How does a HashMap work internally?\n * A: It uses an array of linked lists (buckets). When you put(Key, Value), \n *    it calculates the HashCode of the Key to find the correct bucket index, \n *    then stores the pair there. If two keys have the same HashCode (Collision), \n *    they are stored in a linked list at that bucket.\n * \n * Q: What is the difference between HashMap and ConcurrentHashMap?\n * A: HashMap is not thread-safe. ConcurrentHashMap is thread-safe and highly \n *    optimized for multithreading (it locks specific buckets, not the whole map).\n */",
    "hasLiveOutput": false,
    "expectedOutput": "(Conceptual Study Material)",
    "explanation": [
      {
        "code": "HashMap Internals",
        "desc": "Understanding hash codes, buckets, and collisions is a guaranteed senior-level interview question."
      }
    ],
    "realWorldExample": "If you are asked to 'Build a spell checker', you shouldn't put the dictionary in an `ArrayList` (searching would take forever). You must instantly know to put the dictionary in a `HashSet` so `contains(\"word\")` executes instantly.",
    "commonMistakes": [
      {
        "error": "Failing to override `equals()` and `hashCode()` when using custom objects as Keys in a HashMap or elements in a HashSet. The map won't be able to find them!",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Always program to interfaces: `Map<String, String> m = new HashMap<>();` is better than `HashMap<String, String> m = new HashMap<>();` because it allows you to swap the implementation later."
    ],
    "practiceExercise": {
      "task": "If you need a collection that stores UNIQUE elements and automatically sorts them alphabetically, which class should you use?",
      "solution": "TreeSet"
    },
    "interviewQuestions": [
      "What is the difference between fail-fast and fail-safe iterators?",
      "What is the difference between Comparable and Comparator?"
    ],
    "quiz": [
      {
        "question": "Which of the following collections maintains the order of elements based on insertion, but prevents duplicates?",
        "options": [
          "ArrayList",
          "HashSet",
          "LinkedHashSet",
          "TreeSet"
        ],
        "correctAnswer": "LinkedHashSet"
      }
    ],
    "summary": [
      "`ArrayList` for reading; `LinkedList` for modifications.",
      "`HashSet` for unique items; `TreeSet` for sorted unique items.",
      "`HashMap` internals rely on hashing and buckets to achieve O(1) lookups."
    ],
    "references": [
      {
        "label": "Top Collections Interview Questions",
        "url": "https://www.geeksforgeeks.org/java-collections-interview-questions/"
      }
    ]
  },
  "java_exception_handling_interview_questions": {
    "isStructured": true,
    "title": "115. Exceptions Q's",
    "difficulty": "Intermediate",
    "readingTime": "8 min",
    "definition": "Exception handling questions test your understanding of program flow, crash prevention, and the differences between various types of errors.",
    "whyUseIt": "If you don't understand exceptions, your applications will crash silently or leave database connections open, causing massive server issues.",
    "syntax": "// Concepts: Checked vs Unchecked, throw vs throws, finally",
    "codeExample": "/*\n * COMMON EXCEPTION INTERVIEW QUESTIONS & ANSWERS\n * \n * Q: What is the difference between Checked and Unchecked Exceptions?\n * A: Checked Exceptions (like IOException) are checked at compile-time. The \n *    compiler FORCES you to handle them using try-catch or 'throws'. \n *    Unchecked Exceptions (like NullPointerException) occur at runtime. The \n *    compiler does not force you to handle them.\n * \n * Q: What is the difference between throw and throws?\n * A: 'throw' is used inside a method body to manually trigger an exception \n *    (e.g., throw new Exception()). 'throws' is used in the method signature \n *    to declare that the method MIGHT throw an exception, passing the \n *    responsibility to the caller.\n * \n * Q: Is the finally block always executed?\n * A: Yes, 99% of the time. The ONLY times it won't execute are if the JVM \n *    crashes, power goes out, or if you explicitly call System.exit(0) inside \n *    the try/catch block.\n */",
    "hasLiveOutput": false,
    "expectedOutput": "(Conceptual Study Material)",
    "explanation": [
      {
        "code": "Checked vs Unchecked",
        "desc": "Checked = External forces (File I/O, Network). Unchecked = Programmer errors (Null values, Index out of bounds)."
      }
    ],
    "realWorldExample": "If your app tries to read a file, Java knows the file might have been deleted by the user, so it FORCES you to write a try-catch block (Checked). If you do math `5/x`, Java assumes you verified `x` isn't 0, so it doesn't force a try-catch (Unchecked)."
    ,
    "commonMistakes": [
      {
        "error": "Catching `Exception e` (the generic parent class) instead of specific exceptions. This makes it impossible to know if the error was a missing file or a broken network connection.",
        "code": "catch(Exception e)",
        "suffix": "// Try to catch specific errors first!"
      }
    ],
    "bestPractices": [
      "Never leave a catch block empty. Always log the error using `e.printStackTrace()` or a logging framework."
    ],
    "practiceExercise": {
      "task": "Is `ArrayIndexOutOfBoundsException` a Checked or Unchecked exception?",
      "solution": "Unchecked (Runtime Exception)"
    },
    "interviewQuestions": [
      "Can we have a try block without a catch block?",
      "What is a custom exception and how do you create one?"
    ],
    "quiz": [
      {
        "question": "Which of the following scenarios will prevent a `finally` block from executing?",
        "options": [
          "An exception is thrown in the try block",
          "A return statement is executed in the try block",
          "System.exit(0) is called in the try block",
          "The catch block executes successfully"
        ],
        "correctAnswer": "System.exit(0) is called in the try block"
      }
    ],
    "summary": [
      "Checked exceptions are forced by the compiler; Unchecked are runtime bugs.",
      "`throw` triggers an error; `throws` declares it in the method signature.",
      "`finally` executes regardless of what happens in try/catch."
    ],
    "references": [
      {
        "label": "Top Exception Handling Questions",
        "url": "https://www.geeksforgeeks.org/exception-handling-interview-questions/"
      }
    ]
  },
  "java_java_coding_interview_questions": {
    "isStructured": true,
    "title": "116. Java Coding Q's",
    "difficulty": "Advanced",
    "readingTime": "12 min",
    "definition": "These are classic white-board coding problems. Interviewers will ask you to write code on the spot without an IDE to test your logic and algorithmic thinking.",
    "whyUseIt": "Memorizing concepts isn't enough; you must be able to translate logic into working Java code quickly and efficiently.",
    "syntax": "// Concepts: Fibonacci, Factorials, Prime Numbers, Swapping",
    "codeExample": "public class Main {\n    // 1. Check if a number is Prime\n    static boolean isPrime(int n) {\n        if (n <= 1) return false;\n        for (int i = 2; i <= Math.sqrt(n); i++) {\n            if (n % i == 0) return false;\n        }\n        return true;\n    }\n\n    // 2. Print Fibonacci sequence up to N terms\n    static void printFibonacci(int count) {\n        int n1 = 0, n2 = 1, n3;\n        System.out.print(n1 + \" \" + n2);\n        for(int i = 2; i < count; ++i) {\n            n3 = n1 + n2;\n            System.out.print(\" \" + n3);\n            n1 = n2; n2 = n3;\n        }\n        System.out.println();\n    }\n\n    // 3. Swap two numbers WITHOUT a temporary variable\n    static void swap(int a, int b) {\n        System.out.println(\"Before swap: a=\" + a + \", b=\" + b);\n        a = a + b;\n        b = a - b;\n        a = a - b;\n        System.out.println(\"After swap: a=\" + a + \", b=\" + b);\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"Is 17 prime? \" + isPrime(17));\n        System.out.print(\"Fibonacci (7 terms): \");\n        printFibonacci(7);\n        swap(10, 20);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Is 17 prime? true\nFibonacci (7 terms): 0 1 1 2 3 5 8\nBefore swap: a=10, b=20\nAfter swap: a=20, b=10",
    "explanation": [
      {
        "code": "Math.sqrt(n)",
        "desc": "An optimization for finding prime numbers. You only need to check factors up to the square root of a number, turning an O(N) algorithm into an O(√N) algorithm!"
      }
    ],
    "realWorldExample": "These specific algorithms rarely appear in web development, but they are proxies to test your intelligence. If you can optimize a prime number algorithm, you can probably optimize a database query.",
    "commonMistakes": [
      {
        "error": "Writing the brute-force O(N^2) solution on the whiteboard and sitting down. Interviewers ALWAYS want you to look for a way to make it faster (O(N) or O(log N)).",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "When whiteboard coding, talk out loud! Interviewers care more about your thought process than perfect syntax."
    ],
    "practiceExercise": {
      "task": "Write a method to calculate the factorial of a number (e.g., 5! = 5 * 4 * 3 * 2 * 1 = 120).",
      "solution": "int factorial(int n) { int fact = 1; for(int i=1; i<=n; i++) fact *= i; return fact; }"
    },
    "interviewQuestions": [
      "How do you reverse a linked list?",
      "How do you find the second largest number in an array?"
    ],
    "quiz": [
      {
        "question": "What is the mathematical trick used to swap two integer variables without using a third temporary variable?",
        "options": [
          "Using division and remainders",
          "Using addition and subtraction",
          "Using string concatenation",
          "It is mathematically impossible"
        ],
        "correctAnswer": "Using addition and subtraction"
      }
    ],
    "summary": [
      "Whiteboard coding tests raw logic and optimization.",
      "Know how to manipulate strings, math sequences, and arrays.",
      "Always look for O(N) optimizations."
    ],
    "references": [
      {
        "label": "Top 100 Coding Problems",
        "url": "https://www.geeksforgeeks.org/top-100-data-structure-and-algorithms-dsa-interview-questions-topic-wise/"
      }
    ]
  },
  "java_servlet_basics": {
    "isStructured": true,
    "title": "117. Servlet Basics",
    "difficulty": "Advanced",
    "readingTime": "8 min",
    "definition": "A Servlet is a Java class that runs on a web server (like Apache Tomcat). It intercepts HTTP requests from a client's web browser, processes the data, and returns an HTTP response (usually HTML or JSON).",
    "whyUseIt": "Servlets are the foundational technology for building web applications in Java. Even modern frameworks like Spring Boot use Servlets under the hood.",
    "syntax": "public class MyServlet extends HttpServlet { ... }",
    "codeExample": "/* \n * Note: This code requires the javax.servlet API and a Web Server to run.\n */\n\nimport java.io.IOException;\nimport java.io.PrintWriter;\nimport javax.servlet.ServletException;\nimport javax.servlet.annotation.WebServlet;\nimport javax.servlet.http.HttpServlet;\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\n\n// Maps the URL \"/hello\" to this specific Servlet\n@WebServlet(\"/hello\")\npublic class HelloWorldServlet extends HttpServlet {\n    \n    // Handles HTTP GET requests\n    @Override\n    protected void doGet(HttpServletRequest request, HttpServletResponse response) \n            throws ServletException, IOException {\n            \n        // Set response type to HTML\n        response.setContentType(\"text/html\");\n        \n        // Write data back to the browser\n        PrintWriter out = response.getWriter();\n        out.println(\"<html><body>\");\n        out.println(\"<h1>Hello from Java Servlet!</h1>\");\n        out.println(\"</body></html>\");\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "(When accessing http://localhost:8080/hello in a browser)\nHello from Java Servlet! (rendered as an H1 heading)",
    "explanation": [
      {
        "code": "HttpServletRequest request",
        "desc": "Contains everything the browser sent to the server (URL parameters, form data, cookies)."
      },
      {
        "code": "HttpServletResponse response",
        "desc": "The blank canvas you use to send data (HTML, JSON, status codes) back to the browser."
      }
    ],
    "realWorldExample": "When you submit a login form on a website, the browser sends a POST request. A `LoginServlet` intercepts it, reads the username/password from the `HttpServletRequest`, checks the database, and uses `HttpServletResponse` to send you to the dashboard.",
    "commonMistakes": [
      {
        "error": "Writing HTML directly inside Java `out.println()` statements. While it works for learning, it becomes an unmaintainable nightmare in real projects. Use JSP or modern frontend frameworks (React/Angular) instead.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Use Servlets solely as 'Controllers' to process business logic, and forward the data to a JSP file (the 'View') for rendering HTML."
    ],
    "practiceExercise": {
      "task": "Which method in an HttpServlet is triggered when a user submits an HTML form using `method=\"POST\"`?",
      "solution": "doPost(HttpServletRequest req, HttpServletResponse res)"
    },
    "interviewQuestions": [
      "What is the life cycle of a Servlet?",
      "What is the difference between doGet and doPost?",
      "What is the difference between RequestDispatcher.forward() and response.sendRedirect()?"
    ],
    "quiz": [
      {
        "question": "Which software is required to run a Java Servlet?",
        "options": [
          "Just the JVM",
          "A Web Container / Application Server (like Tomcat)",
          "A database (like MySQL)",
          "A frontend browser only"
        ],
        "correctAnswer": "A Web Container / Application Server (like Tomcat)"
      }
    ],
    "summary": [
      "Servlets intercept HTTP requests and generate HTTP responses.",
      "They extend `HttpServlet` and override `doGet` or `doPost`.",
      "They require a web server like Apache Tomcat to run."
    ],
    "references": [
      {
        "label": "Servlet Tutorial",
        "url": "https://www.geeksforgeeks.org/java-servlets/"
      }
    ]
  },
  "java_jsp_basics": {
    "isStructured": true,
    "title": "118. JSP Basics",
    "difficulty": "Advanced",
    "readingTime": "7 min",
    "definition": "JSP (JavaServer Pages) is a technology that allows you to write HTML pages with embedded Java code. The web server dynamically evaluates the Java code and generates a final HTML page before sending it to the user.",
    "whyUseIt": "Writing HTML inside Java Servlets (`out.println(\"<html>\")`) is terrible. JSP flips it around, allowing you to write normal HTML files and inject Java exactly where you need it (like displaying a username).",
    "syntax": "<% Java Code %> or <%= Java Expression %>",
    "codeExample": "<!-- index.jsp -->\n<%@ page language=\"java\" contentType=\"text/html; charset=UTF-8\" %>\n<html>\n<head>\n    <title>JSP Example</title>\n</head>\n<body>\n    <h1>Welcome to my website!</h1>\n    \n    <!-- A scriptlet: Standard Java code that doesn't output directly -->\n    <%\n        String visitorName = request.getParameter(\"name\");\n        if (visitorName == null) {\n            visitorName = \"Guest\";\n        }\n    %>\n    \n    <!-- An expression: Outputs the Java variable directly into the HTML -->\n    <p>Hello, <%= visitorName %>!</p>\n    \n    <p>The current time on the server is: <%= new java.util.Date() %></p>\n</body>\n</html>",
    "hasLiveOutput": false,
    "expectedOutput": "(When rendered in browser)\nWelcome to my website!\nHello, Guest!\nThe current time on the server is: Wed Nov 20 15:30:00 EST 2024",
    "explanation": [
      {
        "code": "<% ... %>",
        "desc": "A Scriptlet. Used for logic (if statements, loops, variable declarations)."
      },
      {
        "code": "<%= ... %>",
        "desc": "An Expression. It evaluates the Java code and instantly prints it to the HTML. Notice it does NOT have a semicolon at the end!"
      }
    ],
    "realWorldExample": "An Amazon product page. The layout (images, buttons) is HTML. But the price, title, and reviews are fetched from a database and injected into the HTML using JSP expressions before the page is sent to your browser.",
    "commonMistakes": [
      {
        "error": "Putting database connections or complex business logic inside a JSP file. JSP should ONLY be used for displaying data. Logic belongs in Servlets.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Modern Java web apps avoid Scriptlets (`<% %>`) entirely. They use JSTL (JSP Standard Tag Library) and EL (Expression Language) which look like `${visitorName}` for cleaner code."
    ],
    "practiceExercise": {
      "task": "Write a JSP expression tag that prints the number 100 into the HTML.",
      "solution": "<%= 100 %>"
    },
    "interviewQuestions": [
      "What is the difference between a Servlet and a JSP?",
      "What happens to a JSP file under the hood when a user requests it? (Answer: It is converted into a Servlet!)",
      "What are the 9 implicit objects in JSP?"
    ],
    "quiz": [
      {
        "question": "Which tag is used to evaluate a Java variable and print it directly into the HTML output?",
        "options": [
          "<% %>",
          "<%= %>",
          "<%@ %>",
          "<!% %>"
        ],
        "correctAnswer": "<%= %>"
      }
    ],
    "summary": [
      "JSP allows embedding Java inside HTML.",
      "Use `<% %>` for logic and `<%= %>` for output.",
      "Under the hood, every JSP is converted into a Servlet by the server."
    ],
    "references": [
      {
        "label": "JSP Tutorial",
        "url": "https://www.geeksforgeeks.org/java-server-pages-jsp-tutorial/"
      }
    ]
  },
  "java_maven": {
    "isStructured": true,
    "title": "119. Maven",
    "difficulty": "Advanced",
    "readingTime": "6 min",
    "definition": "Maven is a powerful project management and build automation tool for Java. It relies on a `pom.xml` (Project Object Model) file to manage project builds, dependencies, and documentation.",
    "whyUseIt": "If your project needs a MySQL driver, a JSON parser, and an email sender, downloading those .jar files manually is a nightmare. With Maven, you just paste their names into the `pom.xml`, and Maven downloads them all automatically.",
    "syntax": "<!-- Added inside pom.xml -->\n<dependency>\n    <groupId>...</groupId>\n    <artifactId>...</artifactId>\n    <version>...</version>\n</dependency>",
    "codeExample": "<!-- An example of a basic pom.xml file -->\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\">\n    <modelVersion>4.0.0</modelVersion>\n    \n    <!-- Your project details -->\n    <groupId>com.mycompany</groupId>\n    <artifactId>my-awesome-app</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    \n    <!-- List of external libraries your project needs -->\n    <dependencies>\n        <!-- Example: Adding the MySQL JDBC Driver automatically! -->\n        <dependency>\n            <groupId>mysql</groupId>\n            <artifactId>mysql-connector-java</artifactId>\n            <version>8.0.33</version>\n        </dependency>\n    </dependencies>\n</project>",
    "hasLiveOutput": false,
    "expectedOutput": "(Configuration File - No execution output)",
    "explanation": [
      {
        "code": "groupId",
        "desc": "The organization that created the library (e.g., org.springframework)."
      },
      {
        "code": "artifactId",
        "desc": "The actual name of the library (e.g., spring-core)."
      }
    ],
    "realWorldExample": "Maven is the 'App Store' for Java developers. Instead of hunting down files on the internet, you write a shopping list (pom.xml), and Maven goes to a central repository, downloads the libraries, and links them to your code.",
    "commonMistakes": [
      {
        "error": "Forgetting to update/refresh Maven after adding a dependency to the `pom.xml`. If you don't refresh, your IDE won't recognize the new library, and your code will show errors.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Never commit the `target/` folder to Git. Maven creates this folder to store compiled files, and it can be regenerated instantly by running `mvn clean install`."
    ],
    "practiceExercise": {
      "task": "What is the command to completely clean a Maven project's compiled files and rebuild it from scratch?",
      "solution": "mvn clean install"
    },
    "interviewQuestions": [
      "What is the purpose of the pom.xml file?",
      "What is the Maven build lifecycle?",
      "What is the difference between Maven and Gradle?"
    ],
    "quiz": [
      {
        "question": "Where does Maven download dependencies from by default?",
        "options": [
          "GitHub",
          "The Maven Central Repository",
          "Oracle's official website",
          "StackOverflow"
        ],
        "correctAnswer": "The Maven Central Repository"
      }
    ],
    "summary": [
      "Maven automates builds and manages dependencies.",
      "The `pom.xml` file is the heart of a Maven project.",
      "It eliminates the need to manually download .jar files."
    ],
    "references": [
      {
        "label": "Maven Tutorial",
        "url": "https://www.geeksforgeeks.org/maven-tutorial/"
      }
    ]
  },
  "java_spring_boot_introduction": {
    "isStructured": true,
    "title": "120. Spring Boot Intro",
    "difficulty": "Advanced",
    "readingTime": "8 min",
    "definition": "Spring Boot is an incredibly popular Java framework that simplifies the creation of production-ready, stand-alone enterprise applications. It removes the massive configuration headaches associated with standard Spring and Servlets.",
    "whyUseIt": "Instead of configuring Tomcat servers, writing XML files, and mapping Servlets manually, Spring Boot does it all automatically. You can build a fully functional web server in 5 lines of code.",
    "syntax": "@SpringBootApplication\n@RestController",
    "codeExample": "import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n// 1. Tells Java this is a Spring Boot app\n@SpringBootApplication\n// 2. Tells Java this class handles Web Requests (like a Servlet)\n@RestController \npublic class MySpringBootApp {\n\n    public static void main(String[] args) {\n        // 3. Starts the embedded Tomcat server automatically\n        SpringApplication.run(MySpringBootApp.class, args);\n    }\n\n    // 4. Maps the \"/api/greet\" URL to this method\n    @GetMapping(\"/api/greet\")\n    public String sayHello() {\n        return \"Hello from Spring Boot! No XML configuration required!\";\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "(When accessing http://localhost:8080/api/greet)\nHello from Spring Boot! No XML configuration required!",
    "explanation": [
      {
        "code": "@SpringBootApplication",
        "desc": "An annotation that triggers 'Auto-configuration'. Spring scans your project and automatically sets up a database, web server, and security based on what libraries you have installed."
      },
      {
        "code": "@GetMapping",
        "desc": "A clean, modern replacement for Servlet's `doGet()` method."
      }
    ],
    "realWorldExample": "Spring Boot is like a fully furnished, move-in ready apartment. Standard Java Servlets are like buying land and having to pour the foundation, run the plumbing, and build the walls yourself.",
    "commonMistakes": [
      {
        "error": "Putting controller classes outside the package where `@SpringBootApplication` is located. Spring only scans the current package and its sub-packages. If placed elsewhere, your URLs will result in 404 errors.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Use 'Spring Initializr' (start.spring.io) to generate the boilerplate structure for your Spring Boot projects instantly."
    ],
    "practiceExercise": {
      "task": "What annotation would you use to handle HTTP POST requests in Spring Boot?",
      "solution": "@PostMapping"
    },
    "interviewQuestions": [
      "What is the difference between Spring and Spring Boot?",
      "How does Auto-configuration work in Spring Boot?",
      "What is the default embedded server in Spring Boot? (Answer: Tomcat)"
    ],
    "quiz": [
      {
        "question": "What is a major advantage of Spring Boot over traditional Spring/Servlets?",
        "options": [
          "It doesn't use Java",
          "It uses an embedded web server and requires zero XML configuration",
          "It runs directly in the browser",
          "It does not support databases"
        ],
        "correctAnswer": "It uses an embedded web server and requires zero XML configuration"
      }
    ],
    "summary": [
      "Spring Boot is the industry standard for Java web development.",
      "It uses annotations (`@RestController`) instead of XML.",
      "It features an embedded server, making deployment incredibly easy."
    ],
    "references": [
      {
        "label": "Spring Boot Introduction",
        "url": "https://www.geeksforgeeks.org/introduction-to-spring-boot/"
      }
    ]
  }
};
