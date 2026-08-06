export const javaContentBatch7 = {
  "java_try_catch": {
    "isStructured": true,
    "title": "61. try-catch",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "The `try-catch` block is used to handle exceptions in Java. The `try` block contains the code that might throw an exception, and the `catch` block contains the code to execute if an exception occurs.",
    "whyUseIt": "It prevents your application from terminating unexpectedly and provides a way to gracefully recover from errors.",
    "syntax": "try {\n    // code that may throw an exception\n} catch (ExceptionType e) {\n    // code to handle the exception\n}",
    "codeExample": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int[] myNumbers = {1, 2, 3};\n            System.out.println(myNumbers[10]); // This will throw an error\n        } catch (Exception e) {\n            System.out.println(\"Something went wrong: \" + e.getMessage());\n        }\n        \n        System.out.println(\"Program continues normally...\");\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Something went wrong: Index 10 out of bounds for length 3\nProgram continues normally...",
    "explanation": [
      {
        "code": "catch (Exception e)",
        "desc": "Catches any exception and stores the error details in the variable `e`."
      },
      {
        "code": "e.getMessage()",
        "desc": "Retrieves the specific error message provided by the JVM."
      }
    ],
    "realWorldExample": "Opening a file. You `try` to open 'data.txt'. If the file doesn't exist, you `catch` the error and ask the user to select a different file instead of crashing the program.",
    "commonMistakes": [
      {
        "error": "Leaving the catch block completely empty. If an error occurs, it gets silently swallowed, making debugging impossible.",
        "code": "catch (Exception e) { }",
        "suffix": "// BAD PRACTICE: Never swallow exceptions silently!"
      }
    ],
    "bestPractices": [
      "Catch the most specific exception first (e.g., `FileNotFoundException`) before catching the general `Exception` class."
    ],
    "practiceExercise": {
      "task": "Write a try-catch block to handle division by zero. Try to execute `int a = 5 / 0;` and catch the `ArithmeticException`.",
      "solution": "try { int a = 5 / 0; } catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }"
    },
    "interviewQuestions": [
      "Can we have multiple catch blocks for a single try block?",
      "Can we have a try block without a catch block?"
    ],
    "quiz": [
      {
        "question": "What is the purpose of the catch block?",
        "options": [
          "To execute risky code",
          "To define the type of variables",
          "To handle the exception thrown by the try block",
          "To stop the program immediately"
        ],
        "correctAnswer": "To handle the exception thrown by the try block"
      }
    ],
    "summary": [
      "The `try` block contains risky code.",
      "The `catch` block handles exceptions if they occur.",
      "Using them prevents application crashes."
    ],
    "references": [
      {
        "label": "Java try-catch",
        "url": "https://www.w3schools.com/java/java_try_catch.asp"
      }
    ]
  },
  "java_finally": {
    "isStructured": true,
    "title": "62. finally",
    "difficulty": "Beginner",
    "readingTime": "4 min",
    "definition": "The `finally` block is an optional block that follows a `try` or `catch` block. The code inside `finally` will always execute, regardless of whether an exception was thrown or caught.",
    "whyUseIt": "It is used to execute crucial cleanup code, like closing database connections, closing files, or releasing resources, ensuring they are always closed even if an error occurs.",
    "syntax": "try {\n    // ...\n} catch (Exception e) {\n    // ...\n} finally {\n    // always executes\n}",
    "codeExample": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        try {\n            System.out.println(\"Enter a number: \");\n            int num = Integer.parseInt(scanner.nextLine());\n            System.out.println(\"You entered: \" + num);\n        } catch (NumberFormatException e) {\n            System.out.println(\"That was not a valid number!\");\n        } finally {\n            // This happens NO MATTER WHAT\n            scanner.close();\n            System.out.println(\"Scanner closed.\");\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Enter a number: \n[User types \"abc\"]\nThat was not a valid number!\nScanner closed.",
    "explanation": [
      {
        "code": "finally",
        "desc": "Even though the catch block executed and the try block failed, the finally block still runs."
      }
    ],
    "realWorldExample": "Renting a car. You `try` to drive it perfectly. You might `catch` a flat tire and fix it. But `finally`, no matter what happened on the trip, you MUST return the car to the rental agency.",
    "commonMistakes": [
      {
        "error": "Putting return statements inside the `finally` block. This will silently override any return statements in the try/catch blocks, leading to very confusing bugs.",
        "code": "finally { return true; }",
        "suffix": "// Avoid returning from finally blocks"
      }
    ],
    "bestPractices": [
      "Use `finally` exclusively for resource cleanup (closing streams, closing database connections)."
    ],
    "practiceExercise": {
      "task": "Create a try-finally block (no catch). Print 'Try' inside try, and 'Finally' inside finally.",
      "solution": "try { System.out.println(\"Try\"); } finally { System.out.println(\"Finally\"); }"
    },
    "interviewQuestions": [
      "Will the `finally` block execute if the JVM crashes or `System.exit(0)` is called?",
      "Is the `finally` block mandatory?"
    ],
    "quiz": [
      {
        "question": "When does the finally block execute?",
        "options": [
          "Only when an exception occurs",
          "Only when no exception occurs",
          "Always, regardless of whether an exception occurs or not",
          "When the program terminates normally without try-catch"
        ],
        "correctAnswer": "Always, regardless of whether an exception occurs or not"
      }
    ],
    "summary": [
      "The `finally` block guarantees execution of cleanup code.",
      "It runs after `try` and `catch` blocks.",
      "The only time `finally` won't run is if `System.exit()` is called."
    ],
    "references": [
      {
        "label": "Java finally block",
        "url": "https://www.geeksforgeeks.org/finally-block-in-java/"
      }
    ]
  },
  "java_throw": {
    "isStructured": true,
    "title": "63. throw",
    "difficulty": "Intermediate",
    "readingTime": "4 min",
    "definition": "The `throw` keyword is used to explicitly throw a single exception from within a method or block of code.",
    "whyUseIt": "It allows you to create custom error conditions. If a user enters invalid data, you can `throw` an exception to reject the data and alert the caller.",
    "syntax": "throw new ExceptionType(\"Error Message\");",
    "codeExample": "public class Main {\n    static void checkAge(int age) {\n        if (age < 18) {\n            // Explicitly throw an exception if age is invalid\n            throw new ArithmeticException(\"Access denied - You must be at least 18 years old.\");\n        } else {\n            System.out.println(\"Access granted - You are old enough!\");\n        }\n    }\n\n    public static void main(String[] args) {\n        checkAge(15); \n        System.out.println(\"This line will not execute because program crashes above.\");\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Exception in thread \"main\" java.lang.ArithmeticException: Access denied - You must be at least 18 years old.",
    "explanation": [
      {
        "code": "throw new",
        "desc": "The `throw` keyword must be followed by an instance of an Exception (created using `new`)."
      }
    ],
    "realWorldExample": "A bouncer at a club. If you show an ID that says you are 16, the bouncer explicitly 'throws' you out (throws an exception) rather than letting you proceed.",
    "commonMistakes": [
      {
        "error": "Confusing `throw` with `throws`. `throw` actually triggers the exception. `throws` is a declaration on the method signature.",
        "code": "throw ArithmeticException;",
        "suffix": "// Error: You must use 'new' to create the exception object."
      }
    ],
    "bestPractices": [
      "Always provide a clear, descriptive message when throwing an exception so other developers know exactly why it failed."
    ],
    "practiceExercise": {
      "task": "Write a method `setScore(int score)`. If score is less than 0, throw an `IllegalArgumentException`.",
      "solution": "void setScore(int score) {\n    if(score < 0) throw new IllegalArgumentException(\"Score cannot be negative\");\n}"
    },
    "interviewQuestions": [
      "What is the difference between `throw` and `throws`?",
      "Can we throw multiple exceptions using a single `throw` keyword?"
    ],
    "quiz": [
      {
        "question": "Which keyword is used to manually trigger an exception inside a method body?",
        "options": [
          "throws",
          "throw",
          "catch",
          "finally"
        ],
        "correctAnswer": "throw"
      }
    ],
    "summary": [
      "The `throw` keyword is used to manually generate an exception.",
      "It requires creating an instance of an Exception class using `new`.",
      "It is used for data validation and enforcing business rules."
    ],
    "references": [
      {
        "label": "Java throw Keyword",
        "url": "https://www.w3schools.com/java/ref_keyword_throw.asp"
      }
    ]
  },
  "java_throws": {
    "isStructured": true,
    "title": "64. throws",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "The `throws` keyword is used in a method signature to declare that the method might throw one or more exceptions. It passes the responsibility of handling the exception to the caller of the method.",
    "whyUseIt": "It is required for 'Checked Exceptions' (like `IOException`). It forces anyone who calls your method to wrap it in a try-catch block, ensuring safety.",
    "syntax": "returnType methodName() throws ExceptionType { ... }",
    "codeExample": "import java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.Scanner;\n\npublic class Main {\n    // Method declares that it MIGHT throw a FileNotFoundException\n    static void readFile() throws FileNotFoundException {\n        File file = new File(\"missing.txt\");\n        Scanner scanner = new Scanner(file); // This causes the error\n    }\n\n    public static void main(String[] args) {\n        // The caller MUST handle the exception since it was 'thrown' to them\n        try {\n            readFile();\n        } catch (FileNotFoundException e) {\n            System.out.println(\"File was not found!\");\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "File was not found!",
    "explanation": [
      {
        "code": "throws FileNotFoundException",
        "desc": "Warns the compiler and other developers: 'Watch out, calling this method might result in a missing file error!'"
      }
    ],
    "realWorldExample": "A bomb squad technician (the method) finds a bomb they can't defuse. They yell 'Bomb!' (`throws Exception`) to their commander (the caller). The commander now has to deal with it (catch it) or pass the warning up the chain.",
    "commonMistakes": [
      {
        "error": "Using `throws` on `main()` and throwing the exception to the JVM. This causes the program to crash, completely defeating the purpose of exception handling.",
        "code": "public static void main(String[] args) throws Exception",
        "suffix": "// Bad practice for production code!"
      }
    ],
    "bestPractices": [
      "Only use `throws` for checked exceptions. Unchecked exceptions (RuntimeExceptions) don't need to be declared."
    ],
    "practiceExercise": {
      "task": "Declare a method `connectDB()` that `throws Exception`.",
      "solution": "void connectDB() throws Exception { throw new Exception(\"DB Error\"); }"
    },
    "interviewQuestions": [
      "Can we declare multiple exceptions with the `throws` keyword?",
      "If a method has a `throws` clause, is the caller FORCED to catch it?"
    ],
    "quiz": [
      {
        "question": "Where is the `throws` keyword used?",
        "options": [
          "Inside the try block",
          "Inside the catch block",
          "At the end of a method signature",
          "To instantiate an exception object"
        ],
        "correctAnswer": "At the end of a method signature"
      }
    ],
    "summary": [
      "The `throws` keyword delegates exception handling to the caller.",
      "It is placed in the method signature.",
      "Multiple exceptions can be declared, separated by commas."
    ],
    "references": [
      {
        "label": "Difference between throw and throws",
        "url": "https://www.geeksforgeeks.org/difference-between-throw-and-throws-in-java/"
      }
    ]
  },
  "java_custom_exceptions": {
    "isStructured": true,
    "title": "65. Custom Exceptions",
    "difficulty": "Advanced",
    "readingTime": "6 min",
    "definition": "Custom Exceptions (User-defined Exceptions) are classes you create that extend the `Exception` class. They allow you to create errors that are specific to your application's business logic.",
    "whyUseIt": "Java's built-in exceptions (`IllegalArgumentException`, etc.) are generic. If you are building a banking app, an `InsufficientFundsException` is much clearer and easier to handle.",
    "syntax": "class MyException extends Exception {\n    public MyException(String s) {\n        super(s);\n    }\n}",
    "codeExample": "// 1. Create the Custom Exception\nclass InsufficientFundsException extends Exception {\n    public InsufficientFundsException(String message) {\n        super(message); // Pass message to parent Exception class\n    }\n}\n\nclass BankAccount {\n    double balance = 100;\n    \n    // 2. Use the custom exception in business logic\n    public void withdraw(double amount) throws InsufficientFundsException {\n        if (amount > balance) {\n            throw new InsufficientFundsException(\"You need $\" + (amount - balance) + \" more.\");\n        }\n        balance -= amount;\n        System.out.println(\"Withdrawal successful. Remaining: $\" + balance);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        BankAccount account = new BankAccount();\n        try {\n            account.withdraw(150);\n        } catch (InsufficientFundsException e) {\n            System.out.println(\"Transaction Failed: \" + e.getMessage());\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Transaction Failed: You need $50.0 more.",
    "explanation": [
      {
        "code": "extends Exception",
        "desc": "This is what turns a normal Java class into an Exception."
      },
      {
        "code": "super(message)",
        "desc": "Calls the constructor of the parent `Exception` class to properly set the error message."
      }
    ],
    "realWorldExample": "If you play a video game, the code might throw a `PlayerNotHighEnoughLevelException` if you try to equip an advanced sword. This is highly specific to the game's logic.",
    "commonMistakes": [
      {
        "error": "Forgetting to extend `Exception` (or `RuntimeException`). If you don't extend these, you cannot `throw` your class.",
        "code": "class MyError { }",
        "suffix": "// Error: Cannot throw this because it's not an Exception"
      }
    ],
    "bestPractices": [
      "If you want the compiler to force developers to handle your error, extend `Exception`. If you want the error to be optional to handle, extend `RuntimeException`."
    ],
    "practiceExercise": {
      "task": "Create a custom exception `InvalidPasswordException` and a method that throws it if a password length is < 8.",
      "solution": "class InvalidPasswordException extends Exception { public InvalidPasswordException(String msg) { super(msg); } }"
    },
    "interviewQuestions": [
      "How do you create a custom unchecked exception?",
      "Why would you use a custom exception instead of a standard one?"
    ],
    "quiz": [
      {
        "question": "Which class must a custom checked exception extend?",
        "options": [
          "Throwable",
          "Error",
          "RuntimeException",
          "Exception"
        ],
        "correctAnswer": "Exception"
      }
    ],
    "summary": [
      "Custom exceptions allow domain-specific error handling.",
      "They are created by extending the `Exception` class.",
      "The `super(message)` call passes the error message to the base class."
    ],
    "references": [
      {
        "label": "User-defined Custom Exceptions",
        "url": "https://www.geeksforgeeks.org/user-defined-custom-exception-in-java/"
      }
    ]
  },
  "java_introduction_to_collections": {
    "isStructured": true,
    "title": "66. Introduction to Collections",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "The Java Collections Framework is a unified architecture for storing and manipulating groups of objects. It provides interfaces (like List, Set, Queue) and classes (like ArrayList, HashSet) to handle data structures.",
    "whyUseIt": "Arrays have a fixed size. Collections can grow and shrink dynamically, and they provide dozens of built-in methods for sorting, searching, and manipulating data.",
    "syntax": "CollectionType<DataType> name = new ImplementationType<>();",
    "codeExample": "import java.util.ArrayList;\nimport java.util.Collections;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Creating a dynamic list using the Collections framework\n        ArrayList<String> fruits = new ArrayList<>();\n        \n        // Adding items\n        fruits.add(\"Apple\");\n        fruits.add(\"Banana\");\n        fruits.add(\"Orange\");\n        \n        // Using a utility class to sort the collection automatically\n        Collections.sort(fruits);\n        \n        // The list handles its own size and formatting!\n        System.out.println(fruits);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "[Apple, Banana, Orange]",
    "explanation": [
      {
        "code": "<String>",
        "desc": "Generics. It ensures that this collection can ONLY hold Strings, providing type safety."
      },
      {
        "code": "Collections.sort()",
        "desc": "The framework includes utility classes that perform complex algorithms for you."
      }
    ],
    "realWorldExample": "An Array is like an egg carton (fixed slots). A Collection is like a plastic grocery bag; it stretches to fit as many items as you put in it, and you can take items out easily.",
    "commonMistakes": [
      {
        "error": "Trying to use primitive types (like `int` or `double`) directly in a Collection. Collections can ONLY hold Objects.",
        "code": "ArrayList<int> numbers;",
        "suffix": "// Error! You must use the wrapper class: ArrayList<Integer>"
      }
    ],
    "bestPractices": [
      "Program to an interface, not an implementation. E.g., `List<String> list = new ArrayList<>();` instead of `ArrayList<String> list = new ArrayList<>();`."
    ],
    "practiceExercise": {
      "task": "Import `java.util.ArrayList`. Create a list of Integers, add the numbers 5 and 10, and print the list.",
      "solution": "ArrayList<Integer> nums = new ArrayList<>(); nums.add(5); nums.add(10); System.out.println(nums);"
    },
    "interviewQuestions": [
      "What is the difference between Collection and Collections in Java?",
      "Why doesn't the Collection framework support primitives?",
      "What are the core interfaces of the Java Collections framework?"
    ],
    "quiz": [
      {
        "question": "Which of the following wrapper classes must be used to store integers in a Java Collection?",
        "options": [
          "int",
          "Int",
          "Integer",
          "Numeric"
        ],
        "correctAnswer": "Integer"
      }
    ],
    "summary": [
      "The Collections Framework handles dynamic data structures.",
      "It requires Objects (Wrapper classes for primitives).",
      "It includes Lists, Sets, Queues, and Maps."
    ],
    "references": [
      {
        "label": "Java Collections Framework",
        "url": "https://www.geeksforgeeks.org/collections-in-java-2/"
      }
    ]
  },
  "java_arraylist": {
    "isStructured": true,
    "title": "67. ArrayList",
    "difficulty": "Beginner",
    "readingTime": "6 min",
    "definition": "`ArrayList` is a class that implements the `List` interface. It uses a dynamic array internally to store elements. When the array is full, it automatically grows larger.",
    "whyUseIt": "It is the most popular collection in Java. Use it when you need a list that can change size dynamically and you mostly need to read data (fast access) rather than insert/delete in the middle.",
    "syntax": "ArrayList<Type> list = new ArrayList<>();",
    "codeExample": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> cars = new ArrayList<>();\n        \n        // Add elements\n        cars.add(\"Volvo\");\n        cars.add(\"BMW\");\n        cars.add(\"Ford\");\n        \n        // Access an element by index (0-based)\n        System.out.println(\"First car: \" + cars.get(0));\n        \n        // Modify an element\n        cars.set(0, \"Opel\");\n        \n        // Remove an element\n        cars.remove(\"BMW\"); // or cars.remove(1)\n        \n        // Get dynamic size\n        System.out.println(\"Total cars: \" + cars.size());\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "First car: Volvo\nTotal cars: 2",
    "explanation": [
      {
        "code": "cars.get(0)",
        "desc": "Retrieves the element. Unlike standard arrays, you CANNOT use `cars[0]`."
      },
      {
        "code": "cars.size()",
        "desc": "Returns the number of elements. Used instead of `length` (which is used for arrays)."
      }
    ],
    "realWorldExample": "A shopping cart on an e-commerce website. You can add items, remove items, and see how many items you have. The cart grows and shrinks as needed.",
    "commonMistakes": [
      {
        "error": "Using `.length` instead of `.size()` to find the size of the ArrayList.",
        "code": "int size = cars.length;",
        "suffix": "// Error: cannot find symbol length"
      }
    ],
    "bestPractices": [
      "If you know exactly how many items you will add (e.g., exactly 10,000), set the initial capacity `new ArrayList<>(10000)` to improve performance by avoiding background resizing."
    ],
    "practiceExercise": {
      "task": "Create an ArrayList of Strings, add 'A', 'B', 'C'. Loop through the list and print each element.",
      "solution": "ArrayList<String> letters = new ArrayList<>(); letters.add(\"A\"); letters.add(\"B\");\nfor(String l : letters) { System.out.println(l); }"
    },
    "interviewQuestions": [
      "How does an ArrayList automatically grow in size?",
      "What is the difference between Array and ArrayList?",
      "Why is inserting elements in the middle of an ArrayList slow?"
    ],
    "quiz": [
      {
        "question": "Which method is used to access an element at a specific index in an ArrayList?",
        "options": [
          "list.at(2)",
          "list[2]",
          "list.get(2)",
          "list.value(2)"
        ],
        "correctAnswer": "list.get(2)"
      }
    ],
    "summary": [
      "`ArrayList` is a dynamic, resizable array.",
      "It allows duplicate values and maintains insertion order.",
      "It provides fast read access but slower insertions/deletions in the middle."
    ],
    "references": [
      {
        "label": "Java ArrayList",
        "url": "https://www.w3schools.com/java/java_arraylist.asp"
      }
    ]
  },
  "java_linkedlist": {
    "isStructured": true,
    "title": "68. LinkedList",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "`LinkedList` is a class that implements the `List` and `Deque` interfaces. Instead of a contiguous array, it stores elements in 'nodes', where each node points to the next and previous nodes.",
    "whyUseIt": "Use `LinkedList` when you need to frequently add or remove elements from the beginning or middle of the list. These operations are much faster than in an `ArrayList`.",
    "syntax": "LinkedList<Type> list = new LinkedList<>();",
    "codeExample": "import java.util.LinkedList;\n\npublic class Main {\n    public static void main(String[] args) {\n        LinkedList<String> train = new LinkedList<>();\n        \n        // Standard list methods work\n        train.add(\"Passenger Car 1\");\n        train.add(\"Passenger Car 2\");\n        \n        // LinkedList specific methods (from Deque interface)\n        train.addFirst(\"Engine\");\n        train.addLast(\"Caboose\");\n        \n        System.out.println(train);\n        \n        System.out.println(\"First element: \" + train.getFirst());\n        \n        // Remove the first element instantly\n        train.removeFirst();\n        System.out.println(train);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "[Engine, Passenger Car 1, Passenger Car 2, Caboose]\nFirst element: Engine\n[Passenger Car 1, Passenger Car 2, Caboose]",
    "explanation": [
      {
        "code": "train.addFirst()",
        "desc": "Instantly attaches a node to the front of the list without having to shift any other elements."
      }
    ],
    "realWorldExample": "A train. If you want to add a new car right behind the engine, you just unhook the engine, put the car in, and hook them back up. You don't have to physically shift all the other cars backwards.",
    "commonMistakes": [
      {
        "error": "Using a `LinkedList` when you frequently need to access elements by index (e.g., `list.get(5000)`). The list has to traverse through 5000 nodes one by one to find it, which is incredibly slow compared to ArrayList.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Default to using `ArrayList` for 95% of use cases. Only switch to `LinkedList` if your specific algorithm requires heavy insertion/deletion at the start or middle."
    ],
    "practiceExercise": {
      "task": "Create a LinkedList of integers. Add `10`, then add `5` to the front using `addFirst()`, then print the list.",
      "solution": "LinkedList<Integer> list = new LinkedList<>(); list.add(10); list.addFirst(5); System.out.println(list);"
    },
    "interviewQuestions": [
      "What is the difference between ArrayList and LinkedList?",
      "How is a LinkedList implemented internally in Java?",
      "Which is better for random access, ArrayList or LinkedList?"
    ],
    "quiz": [
      {
        "question": "Which of the following operations is FASTER in a LinkedList compared to an ArrayList?",
        "options": [
          "Accessing an element at the 1000th index",
          "Finding the size of the list",
          "Adding a new element at the very beginning of the list",
          "Sorting the list"
        ],
        "correctAnswer": "Adding a new element at the very beginning of the list"
      }
    ],
    "summary": [
      "`LinkedList` stores data in linked nodes.",
      "It is extremely fast for adding/removing data.",
      "It is very slow for reading data by index."
    ],
    "references": [
      {
        "label": "ArrayList vs LinkedList",
        "url": "https://www.geeksforgeeks.org/arraylist-vs-linkedlist-java/"
      }
    ]
  },
  "java_vector": {
    "isStructured": true,
    "title": "69. Vector",
    "difficulty": "Intermediate",
    "readingTime": "4 min",
    "definition": "`Vector` is a legacy class that implements a dynamic array (just like `ArrayList`). The major difference is that `Vector` is synchronized (thread-safe).",
    "whyUseIt": "It was used extensively before Java 1.2. Today, it is mostly used in multi-threaded environments where thread safety is absolutely necessary.",
    "syntax": "Vector<Type> v = new Vector<>();",
    "codeExample": "import java.util.Vector;\n\npublic class Main {\n    public static void main(String[] args) {\n        Vector<Integer> v = new Vector<>();\n        \n        // Adding elements\n        v.add(10);\n        v.add(20);\n        \n        // Legacy method specifically from Vector\n        v.addElement(30);\n        \n        System.out.println(\"Vector: \" + v);\n        System.out.println(\"Capacity: \" + v.capacity()); // Defaults to 10\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Vector: [10, 20, 30]\nCapacity: 10",
    "explanation": [
      {
        "code": "v.addElement(30)",
        "desc": "A legacy method. It does the exact same thing as `add(30)`, but exists because Vector predates the modern Collections framework."
      }
    ],
    "realWorldExample": "Like `StringBuffer`, `Vector` is a synchronized bank teller. Only one person (thread) can interact with it at a time, ensuring absolute accuracy but slowing down the line.",
    "commonMistakes": [
      {
        "error": "Using `Vector` in modern, single-threaded applications. The synchronization lock adds unnecessary performance overhead.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Avoid `Vector` in modern Java. If you need a thread-safe list, modern developers prefer `Collections.synchronizedList(new ArrayList<>())` or `CopyOnWriteArrayList`."
    ],
    "practiceExercise": {
      "task": "Create a Vector of Strings, add 'Hello', and print the vector's `size()`.",
      "solution": "Vector<String> v = new Vector<>(); v.add(\"Hello\"); System.out.println(v.size());"
    },
    "interviewQuestions": [
      "What is the difference between ArrayList and Vector?",
      "By how much does a Vector grow when it is full compared to an ArrayList?"
    ],
    "quiz": [
      {
        "question": "What is the primary difference between Vector and ArrayList?",
        "options": [
          "Vector is synchronized (thread-safe); ArrayList is not",
          "Vector uses nodes; ArrayList uses an array",
          "Vector can only hold integers",
          "Vector is faster than ArrayList"
        ],
        "correctAnswer": "Vector is synchronized (thread-safe); ArrayList is not"
      }
    ],
    "summary": [
      "`Vector` is a synchronized, legacy version of ArrayList.",
      "It is thread-safe but slower.",
      "It doubles its capacity when full, whereas ArrayList grows by 50%."
    ],
    "references": [
      {
        "label": "Vector Class in Java",
        "url": "https://www.geeksforgeeks.org/java-util-vector-class-java/"
      }
    ]
  },
  "java_stack": {
    "isStructured": true,
    "title": "70. Stack",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "The `Stack` class represents a Last-In-First-Out (LIFO) stack of objects. It extends the `Vector` class with five operations that allow a vector to be treated as a stack.",
    "whyUseIt": "Stacks are used when you need to access data in the reverse order of how it was added. E.g., an 'Undo' feature in a text editor.",
    "syntax": "Stack<Type> stack = new Stack<>();",
    "codeExample": "import java.util.Stack;\n\npublic class Main {\n    public static void main(String[] args) {\n        Stack<String> browserHistory = new Stack<>();\n        \n        // Push items onto the top of the stack\n        browserHistory.push(\"google.com\");\n        browserHistory.push(\"youtube.com\");\n        browserHistory.push(\"github.com\");\n        \n        // Peek looks at the top item without removing it\n        System.out.println(\"Current page: \" + browserHistory.peek());\n        \n        // Pop removes and returns the top item (Clicking 'Back')\n        String removed = browserHistory.pop();\n        System.out.println(\"Left page: \" + removed);\n        \n        System.out.println(\"Now viewing: \" + browserHistory.peek());\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Current page: github.com\nLeft page: github.com\nNow viewing: youtube.com",
    "explanation": [
      {
        "code": "push()",
        "desc": "Adds an element to the top of the stack."
      },
      {
        "code": "pop()",
        "desc": "Removes the element at the top of the stack and returns it."
      }
    ],
    "realWorldExample": "A stack of plates in a cafeteria. You always add a clean plate to the TOP of the stack, and the next person takes a plate from the TOP of the stack. Last In, First Out.",
    "commonMistakes": [
      {
        "error": "Trying to `pop()` from an empty stack. This will crash your program.",
        "code": "Stack<Integer> s = new Stack<>();\ns.pop();",
        "suffix": "// Throws EmptyStackException"
      }
    ],
    "bestPractices": [
      "Always check if the stack is empty using `!stack.isEmpty()` before calling `.pop()` or `.peek()`."
    ],
    "practiceExercise": {
      "task": "Create a Stack of Integers, push 1, 2, and 3. Write a while loop to pop and print elements until it is empty.",
      "solution": "Stack<Integer> s = new Stack<>(); s.push(1); s.push(2); s.push(3);\nwhile(!s.isEmpty()) { System.out.println(s.pop()); }"
    },
    "interviewQuestions": [
      "What is the principle behind a Stack?",
      "Because Stack extends Vector, what does that mean for its thread-safety?",
      "What is the modern recommended replacement for the Stack class? (Hint: Deque)"
    ],
    "quiz": [
      {
        "question": "Which acronym describes the data access pattern of a Stack?",
        "options": [
          "FIFO (First In, First Out)",
          "LIFO (Last In, First Out)",
          "FILO (First In, Last Out)",
          "Both LIFO and FILO"
        ],
        "correctAnswer": "Both LIFO and FILO"
      }
    ],
    "summary": [
      "A Stack is a LIFO (Last-In-First-Out) data structure.",
      "Use `push()` to add, `pop()` to remove, and `peek()` to look.",
      "It is a legacy class extending Vector."
    ],
    "references": [
      {
        "label": "Java Stack Class",
        "url": "https://www.geeksforgeeks.org/stack-class-in-java/"
      }
    ]
  }
};
