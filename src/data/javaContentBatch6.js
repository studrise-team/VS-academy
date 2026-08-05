export const javaContentBatch6 = {
  "java_method_overloading_oop": {
    "isStructured": true,
    "title": "51. Method Overloading",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "Method Overloading allows a class to have more than one method with the same name, as long as their parameter lists are different (different number of parameters, different types, or both).",
    "whyUseIt": "It increases the readability of the program. You don't have to create names like `addInts()`, `addDoubles()`, `addThreeInts()`; you just name them all `add()`.",
    "syntax": "void add(int a, int b) { ... }\nvoid add(double a, double b) { ... }",
    "codeExample": "class Calculator {\n    // Method with 2 int parameters\n    int add(int a, int b) {\n        return a + b;\n    }\n    \n    // Overloaded method with 3 int parameters\n    int add(int a, int b, int c) {\n        return a + b + c;\n    }\n    \n    // Overloaded method with 2 double parameters\n    double add(double a, double b) {\n        return a + b;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        System.out.println(calc.add(5, 10));       // Calls first method\n        System.out.println(calc.add(5, 10, 15));   // Calls second method\n        System.out.println(calc.add(2.5, 3.5));    // Calls third method\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "15\n30\n6.0",
    "explanation": [
      {
        "code": "calc.add(2.5, 3.5)",
        "desc": "Java automatically determines which version of `add()` to call at compile time based on the arguments you pass."
      }
    ],
    "realWorldExample": "If you ask a smart speaker to 'Play Music', it plays a random playlist. If you say 'Play Music (by The Beatles)', it plays a specific artist. The command name is the same, but the parameters changed the behavior.",
    "commonMistakes": [
      {
        "error": "Trying to overload a method by only changing its return type. This is illegal in Java.",
        "code": "int getSpeed() { return 10; }\ndouble getSpeed() { return 10.0; }",
        "suffix": "// Error: Method is already defined in class."
      }
    ],
    "bestPractices": [
      "Keep overloaded methods performing similar conceptual tasks. Don't make an overloaded `print()` method delete a file!"
    ],
    "practiceExercise": {
      "task": "Create a `Printer` class with overloaded `printData()` methods that can accept either an `int` or a `String`.",
      "solution": "class Printer {\n    void printData(int x) { System.out.println(\"Integer: \" + x); }\n    void printData(String s) { System.out.println(\"String: \" + s); }\n}"
    },
    "interviewQuestions": [
      "What is the difference between method overloading and overriding?",
      "Can we overload the `main()` method in Java?",
      "Why can't you overload by return type alone?"
    ],
    "quiz": [
      {
        "question": "Which of the following determines if two methods are correctly overloaded?",
        "options": [
          "They have different return types",
          "They have different method names",
          "They have different parameter lists",
          "They have different access modifiers"
        ],
        "correctAnswer": "They have different parameter lists"
      }
    ],
    "summary": [
      "Method Overloading provides multiple methods with the same name.",
      "They MUST differ in the number, type, or order of parameters.",
      "This is a form of compile-time (static) polymorphism."
    ],
    "references": [
      {
        "label": "Method Overloading",
        "url": "https://www.geeksforgeeks.org/method-overloading-in-java/"
      }
    ]
  },
  "java_abstraction": {
    "isStructured": true,
    "title": "52. Abstraction",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "Abstraction is the process of hiding the complex implementation details and showing only the essential features to the user.",
    "whyUseIt": "It reduces system complexity, limits the impact of code changes, and helps design a clean interface for users of your classes.",
    "syntax": "abstract class ClassName {\n    abstract void myMethod();\n}",
    "codeExample": "abstract class Animal {\n    // Abstract method (does not have a body)\n    public abstract void animalSound();\n    \n    // Regular method\n    public void sleep() {\n        System.out.println(\"Zzz\");\n    }\n}\n\nclass Pig extends Animal {\n    public void animalSound() {\n        // The body of animalSound() is provided here\n        System.out.println(\"The pig says: wee wee\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Animal myObj = new Animal(); // ERROR: Cannot instantiate abstract class\n        Pig myPig = new Pig();\n        myPig.animalSound();\n        myPig.sleep();\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "The pig says: wee wee\nZzz",
    "explanation": [
      {
        "code": "abstract class Animal",
        "desc": "An abstract class cannot be instantiated using `new`. It only serves as a blueprint."
      },
      {
        "code": "abstract void animalSound()",
        "desc": "An abstract method forces any subclass to provide an implementation for it."
      }
    ],
    "realWorldExample": "Driving a car. You know that pressing the accelerator speeds it up (the abstract interface). You don't need to know the complex mechanics of fuel injection and combustion happening in the engine (the hidden implementation).",
    "commonMistakes": [
      {
        "error": "Trying to instantiate an abstract class directly.",
        "code": "Animal a = new Animal();",
        "suffix": "// Compilation error!"
      }
    ],
    "bestPractices": [
      "Use abstraction when creating base classes meant to be inherited, defining a strict contract that all child classes must follow."
    ],
    "practiceExercise": {
      "task": "Create an abstract class `Vehicle` with an abstract method `start()`. Create a `Car` subclass that implements `start()`.",
      "solution": "abstract class Vehicle { abstract void start(); }\nclass Car extends Vehicle { void start() { System.out.println(\"Car started\"); } }"
    },
    "interviewQuestions": [
      "What is the difference between Abstraction and Encapsulation?",
      "Can an abstract class have a constructor?",
      "Can an abstract class contain non-abstract methods?"
    ],
    "quiz": [
      {
        "question": "Can you create an object of an abstract class in Java?",
        "options": [
          "Yes, if it has a constructor",
          "Yes, if it doesn't have abstract methods",
          "No, abstract classes can never be instantiated",
          "Only in static methods"
        ],
        "correctAnswer": "No, abstract classes can never be instantiated"
      }
    ],
    "summary": [
      "Abstraction hides implementation details.",
      "Abstract classes cannot be instantiated.",
      "Abstract methods must be implemented by the first concrete subclass."
    ],
    "references": [
      {
        "label": "Java Abstraction",
        "url": "https://www.w3schools.com/java/java_abstract.asp"
      }
    ]
  },
  "java_interfaces": {
    "isStructured": true,
    "title": "53. Interfaces",
    "difficulty": "Intermediate",
    "readingTime": "6 min",
    "definition": "An interface is a completely 'abstract class' that is used to group related methods with empty bodies. It represents a strict contract that implementing classes must fulfill.",
    "whyUseIt": "Java does not support multiple inheritance with classes, but it DOES support multiple inheritance with interfaces. Interfaces allow you to define completely disconnected classes that share a common behavior.",
    "syntax": "interface InterfaceName { ... }\nclass ClassName implements InterfaceName { ... }",
    "codeExample": "// Interface\ninterface Animal {\n    void animalSound(); // interface method (does not have a body)\n    void run();         // interface method (does not have a body)\n}\n\n// Pig \"implements\" the Animal interface\nclass Pig implements Animal {\n    public void animalSound() {\n        System.out.println(\"The pig says: wee wee\");\n    }\n    public void run() {\n        System.out.println(\"The pig runs\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Pig myPig = new Pig();\n        myPig.animalSound();\n        myPig.run();\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "The pig says: wee wee\nThe pig runs",
    "explanation": [
      {
        "code": "implements Animal",
        "desc": "The keyword `implements` is used instead of `extends`."
      },
      {
        "code": "void animalSound()",
        "desc": "In interfaces, methods are `public abstract` by default. You don't need to write those keywords."
      }
    ],
    "realWorldExample": "A USB port is an interface. The computer says 'I will connect to anything that fits a USB shape'. A mouse, a keyboard, and a hard drive are totally different classes, but they all 'implement' the USB interface, so the computer can interact with them.",
    "commonMistakes": [
      {
        "error": "Forgetting that interface methods are implicitly `public`, and failing to use the `public` access modifier when overriding them in the implementing class.",
        "code": "void animalSound() { ... }",
        "suffix": "// Error: Attempting to assign weaker access privileges; was public"
      }
    ],
    "bestPractices": [
      "Use interfaces to define capabilities (e.g., `Flyable`, `Runnable`, `Serializable`) rather than identities."
    ],
    "practiceExercise": {
      "task": "Create an interface `Playable` with a `play()` method. Implement it in a `Guitar` class.",
      "solution": "interface Playable { void play(); }\nclass Guitar implements Playable { public void play() { System.out.println(\"Strum strum\"); } }"
    },
    "interviewQuestions": [
      "What is the difference between an abstract class and an interface?",
      "Can an interface extend another interface?",
      "What are default methods in interfaces (Java 8+)?"
    ],
    "quiz": [
      {
        "question": "How many interfaces can a Java class implement?",
        "options": [
          "Only one",
          "Exactly two",
          "Multiple interfaces",
          "None"
        ],
        "correctAnswer": "Multiple interfaces"
      }
    ],
    "summary": [
      "Interfaces define a contract of methods without bodies.",
      "Classes use the `implements` keyword to adopt an interface.",
      "A class can implement multiple interfaces."
    ],
    "references": [
      {
        "label": "Java Interfaces",
        "url": "https://www.w3schools.com/java/java_interface.asp"
      }
    ]
  },
  "java_string_class": {
    "isStructured": true,
    "title": "54. String Class",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "The `String` class in Java represents a sequence of characters. In Java, strings are treated as objects rather than primitive data types.",
    "whyUseIt": "Strings are one of the most widely used classes in Java for text manipulation, logging, user input, and file I/O.",
    "syntax": "String str = \"Hello\";",
    "codeExample": "public class Main {\n    public static void main(String[] args) {\n        // Creating String using string literal\n        String s1 = \"Hello\";\n        \n        // Creating String using new keyword\n        String s2 = new String(\"World\");\n        \n        // Concatenation\n        String result = s1 + \" \" + s2;\n        \n        System.out.println(result);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Hello World",
    "explanation": [
      {
        "code": "String s1 = \"Hello\";",
        "desc": "This uses the String Pool, a special memory area that reuses duplicate strings."
      },
      {
        "code": "new String(\"World\");",
        "desc": "This forces Java to create a completely new object in Heap memory, bypassing the String Pool."
      }
    ],
    "realWorldExample": "Any text on a website, a user's password, a file path—everything text-based is handled by the String class.",
    "commonMistakes": [
      {
        "error": "Thinking that `String` is a primitive type (like `int` or `char`). It is a full class, meaning it has methods and begins with a capital 'S'.",
        "code": "string name = \"John\";",
        "suffix": "// Compilation Error: 's' must be capitalized"
      }
    ],
    "bestPractices": [
      "Always prefer creating strings using string literals (`String s = \"Text\";`) to save memory via the String Pool."
    ],
    "practiceExercise": {
      "task": "Create two String variables, `firstName` and `lastName`. Concatenate them and print the full name.",
      "solution": "String firstName = \"Bruce\";\nString lastName = \"Wayne\";\nSystem.out.println(firstName + \" \" + lastName);"
    },
    "interviewQuestions": [
      "Why are Strings immutable in Java?",
      "What is the String Pool in Java?"
    ],
    "quiz": [
      {
        "question": "Is `String` a primitive data type in Java?",
        "options": [
          "Yes, just like int and boolean",
          "No, it is a wrapper class for char",
          "No, it is an Object (Reference Type)",
          "Yes, it is a primitive array of chars"
        ],
        "correctAnswer": "No, it is an Object (Reference Type)"
      }
    ],
    "summary": [
      "Strings represent sequences of characters.",
      "They are objects, not primitives.",
      "They can be created via literals or the `new` keyword."
    ],
    "references": [
      {
        "label": "Java Strings",
        "url": "https://www.w3schools.com/java/java_strings.asp"
      }
    ]
  },
  "java_string_methods": {
    "isStructured": true,
    "title": "55. String Methods",
    "difficulty": "Beginner",
    "readingTime": "6 min",
    "definition": "The `String` class includes dozens of built-in methods for manipulating text, such as finding length, converting case, extracting substrings, and replacing characters.",
    "whyUseIt": "Instead of writing complex logic to process text, Java provides highly optimized native methods to do the heavy lifting instantly.",
    "syntax": "str.methodName();",
    "codeExample": "public class Main {\n    public static void main(String[] args) {\n        String text = \"  Hello Java World  \";\n        \n        System.out.println(\"Length: \" + text.length());\n        System.out.println(\"Trimmed: '\" + text.trim() + \"'\");\n        System.out.println(\"Upper: \" + text.trim().toUpperCase());\n        \n        String clean = text.trim();\n        System.out.println(\"Substring: \" + clean.substring(6)); // Starts from index 6\n        System.out.println(\"Replace: \" + clean.replace(\"Java\", \"Awesome\"));\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Length: 20\nTrimmed: 'Hello Java World'\nUpper: HELLO JAVA WORLD\nSubstring: Java World\nReplace: Hello Awesome World",
    "explanation": [
      {
        "code": "text.trim()",
        "desc": "Removes leading and trailing whitespace from the string."
      },
      {
        "code": "clean.substring(6)",
        "desc": "Extracts the characters starting at index 6 all the way to the end."
      }
    ],
    "realWorldExample": "When a user submits a form, you use `.trim()` to remove accidental spaces they typed, and `.toUpperCase()` to ensure promo codes are standardized.",
    "commonMistakes": [
      {
        "error": "Forgetting that strings are immutable! Calling a method on a string does NOT change the original string; it returns a completely new string.",
        "code": "String s = \"hello\";\ns.toUpperCase(); \nSystem.out.println(s);",
        "suffix": "// Prints 'hello' ! You must reassign it: s = s.toUpperCase();"
      }
    ],
    "bestPractices": [
      "Method chaining (`text.trim().toLowerCase()`) is a great way to write clean, concise string manipulation code."
    ],
    "practiceExercise": {
      "task": "Create a string `\"Data\"`. Print its length, and print it in all lowercase.",
      "solution": "String s = \"Data\";\nSystem.out.println(s.length());\nSystem.out.println(s.toLowerCase());"
    },
    "interviewQuestions": [
      "How does the `substring` method handle its end index?",
      "What is the difference between `indexOf` and `charAt`?"
    ],
    "quiz": [
      {
        "question": "If `String s = \"Coding\";`, what does `s.charAt(2);` return?",
        "options": [
          "C",
          "o",
          "d",
          "i"
        ],
        "correctAnswer": "d"
      }
    ],
    "summary": [
      "Strings have many built-in methods like `.length()`, `.substring()`, and `.replace()`.",
      "String methods never modify the original string; they return a new one.",
      "String indexing is 0-based."
    ],
    "references": [
      {
        "label": "String Methods in Java",
        "url": "https://www.w3schools.com/java/java_ref_string.asp"
      }
    ]
  },
  "java_stringbuilder": {
    "isStructured": true,
    "title": "56. StringBuilder",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "The `StringBuilder` class is used to create mutable (modifiable) sequences of characters. Unlike `String`, `StringBuilder` objects can be modified without creating new objects in memory.",
    "whyUseIt": "If you need to concatenate or modify a string thousands of times inside a loop, `String` will crash your memory. `StringBuilder` is heavily optimized for this.",
    "syntax": "StringBuilder sb = new StringBuilder(\"Initial\");",
    "codeExample": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder(\"Hello\");\n        \n        // Append adds to the end\n        sb.append(\" World\");\n        System.out.println(sb);\n        \n        // Insert adds at a specific index\n        sb.insert(5, \" Java\");\n        System.out.println(sb);\n        \n        // Reverse the string\n        sb.reverse();\n        System.out.println(sb);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Hello World\nHello Java World\ndlroW avaJ olleH",
    "explanation": [
      {
        "code": "sb.append()",
        "desc": "Modifies the *existing* object in memory rather than creating a new one."
      },
      {
        "code": "sb.reverse()",
        "desc": "A built-in utility that Strings don't have, allowing instant string reversal."
      }
    ],
    "realWorldExample": "If you are reading a 10MB text file line-by-line and merging it into one giant paragraph, using a `String` would crash your app. `StringBuilder` handles it effortlessly.",
    "commonMistakes": [
      {
        "error": "Trying to assign a raw string literal directly to a StringBuilder.",
        "code": "StringBuilder sb = \"Hello\";",
        "suffix": "// Error: incompatible types. You MUST use 'new StringBuilder(\"Hello\")'"
      }
    ],
    "bestPractices": [
      "Use `StringBuilder` whenever you are concatenating strings inside a loop."
    ],
    "practiceExercise": {
      "task": "Create a `StringBuilder` with value `\"Code\"`. Append `\" Java\"` to it, and print the result.",
      "solution": "StringBuilder sb = new StringBuilder(\"Code\");\nsb.append(\" Java\");\nSystem.out.println(sb);"
    },
    "interviewQuestions": [
      "Why is StringBuilder faster than String for concatenations?",
      "Can a StringBuilder be converted back to a regular String?"
    ],
    "quiz": [
      {
        "question": "Which of the following is TRUE about StringBuilder?",
        "options": [
          "It is immutable",
          "It is mutable, meaning the object itself can be modified",
          "It is thread-safe",
          "It extends the String class"
        ],
        "correctAnswer": "It is mutable, meaning the object itself can be modified"
      }
    ],
    "summary": [
      "StringBuilder is a mutable version of String.",
      "It is vastly more memory-efficient for heavy string concatenation.",
      "You convert it back to a string using `.toString()`."
    ],
    "references": [
      {
        "label": "Java StringBuilder",
        "url": "https://www.geeksforgeeks.org/stringbuilder-class-in-java-with-examples/"
      }
    ]
  },
  "java_stringbuffer": {
    "isStructured": true,
    "title": "57. StringBuffer",
    "difficulty": "Intermediate",
    "readingTime": "4 min",
    "definition": "`StringBuffer` is very similar to `StringBuilder`. It is used to create mutable strings. The key difference is that `StringBuffer` is synchronized (thread-safe).",
    "whyUseIt": "Use `StringBuffer` when multiple threads might be trying to append or modify the same text sequence simultaneously.",
    "syntax": "StringBuffer sb = new StringBuffer(\"Initial\");",
    "codeExample": "public class Main {\n    public static void main(String[] args) {\n        StringBuffer sb = new StringBuffer(\"Hello\");\n        \n        // Functionally identical API to StringBuilder\n        sb.append(\" World\");\n        System.out.println(sb);\n        \n        sb.replace(0, 5, \"Hi\");\n        System.out.println(sb);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Hello World\nHi World",
    "explanation": [
      {
        "code": "StringBuffer",
        "desc": "Has the exact same methods as `StringBuilder`, but every method is wrapped in `synchronized` blocks."
      }
    ],
    "realWorldExample": "If a server is handling multiple user requests at the same time and trying to build a single log file string in memory, `StringBuffer` ensures the text doesn't get jumbled together.",
    "commonMistakes": [
      {
        "error": "Using `StringBuffer` in a single-threaded program. Because it is synchronized, it is noticeably slower than `StringBuilder`. Only use it when multithreading.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "In modern Java (99% of use cases), favor `StringBuilder`. Only use `StringBuffer` if thread safety is an explicit requirement."
    ],
    "practiceExercise": {
      "task": "Create a `StringBuffer` and use `.insert()` to add text into the middle of it.",
      "solution": "StringBuffer sb = new StringBuffer(\"Hi  there\");\nsb.insert(3, \"friend \");\nSystem.out.println(sb);"
    },
    "interviewQuestions": [
      "What is the difference between String, StringBuilder, and StringBuffer?",
      "Why is StringBuilder faster than StringBuffer?"
    ],
    "quiz": [
      {
        "question": "What is the primary difference between StringBuilder and StringBuffer?",
        "options": [
          "StringBuilder is mutable, StringBuffer is immutable",
          "StringBuffer is synchronized (thread-safe), StringBuilder is not",
          "StringBuilder has an append() method, StringBuffer does not",
          "StringBuffer is from Java 8, StringBuilder is from Java 1"
        ],
        "correctAnswer": "StringBuffer is synchronized (thread-safe), StringBuilder is not"
      }
    ],
    "summary": [
      "`StringBuffer` is the thread-safe version of `StringBuilder`.",
      "It prevents race conditions in multithreaded apps.",
      "It is slower due to synchronization overhead."
    ],
    "references": [
      {
        "label": "StringBuffer Class",
        "url": "https://www.geeksforgeeks.org/stringbuffer-class-in-java/"
      }
    ]
  },
  "java_string_comparison": {
    "isStructured": true,
    "title": "58. String Comparison",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "String comparison is the process of checking if two strings are identical in value, or comparing them alphabetically.",
    "whyUseIt": "It is fundamental for tasks like checking if a user entered the correct password, or sorting a list of names alphabetically.",
    "syntax": "str1.equals(str2);\nstr1.equalsIgnoreCase(str2);",
    "codeExample": "public class Main {\n    public static void main(String[] args) {\n        String s1 = \"Java\";\n        String s2 = \"Java\";\n        String s3 = new String(\"Java\");\n        String s4 = \"java\";\n        \n        // .equals() compares the actual text content\n        System.out.println(s1.equals(s3));        \n        \n        // == compares memory addresses (Reference equality)\n        System.out.println(s1 == s3);\n        \n        // .equalsIgnoreCase() ignores case\n        System.out.println(s1.equalsIgnoreCase(s4));\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "true\nfalse\ntrue",
    "explanation": [
      {
        "code": "s1.equals(s3)",
        "desc": "Returns `true` because the letters 'J', 'a', 'v', 'a' are exactly the same."
      },
      {
        "code": "s1 == s3",
        "desc": "Returns `false` because `s1` is in the String Pool and `s3` is a new object in the Heap. They are different objects in memory!"
      }
    ],
    "realWorldExample": "Logging into a website. The backend uses `.equals()` to check if the password you typed perfectly matches the database. It might use `.equalsIgnoreCase()` for the email address.",
    "commonMistakes": [
      {
        "error": "Using `==` to compare Strings. This is the #1 most common bug in beginner Java code. `==` checks if they are the exact same physical object in memory, NOT if they spell the same word.",
        "code": "if (password == \"secret\")",
        "suffix": "// Wrong! ALWAYS use .equals()"
      }
    ],
    "bestPractices": [
      "To prevent NullPointerExceptions, put the known literal string first: `\"known_value\".equals(variable)` instead of `variable.equals(\"known_value\")`."
    ],
    "practiceExercise": {
      "task": "Create two strings: `\"APPLE\"` and `\"apple\"`. Write an if statement that prints 'Match' if they are equal, ignoring case.",
      "solution": "if (\"APPLE\".equalsIgnoreCase(\"apple\")) { System.out.println(\"Match\"); }"
    },
    "interviewQuestions": [
      "Why shouldn't you use `==` to compare Strings in Java?",
      "What does the `.compareTo()` method do?"
    ],
    "quiz": [
      {
        "question": "What is the correct way to check if String `a` and String `b` contain the exact same characters?",
        "options": [
          "a == b",
          "a.equals(b)",
          "a = b",
          "a.matches(b)"
        ],
        "correctAnswer": "a.equals(b)"
      }
    ],
    "summary": [
      "Use `.equals()` to compare the text content of strings.",
      "NEVER use `==` for strings unless you explicitly want to check memory addresses.",
      "Use `.equalsIgnoreCase()` to ignore capitalization."
    ],
    "references": [
      {
        "label": "Comparing Strings in Java",
        "url": "https://www.geeksforgeeks.org/compare-two-strings-in-java/"
      }
    ]
  },
  "java_string_practice_problems": {
    "isStructured": true,
    "title": "59. String Practice Problems",
    "difficulty": "Intermediate",
    "readingTime": "8 min",
    "definition": "Hands-on coding problems designed to test your mastery of String methods, arrays, and loops.",
    "whyUseIt": "Strings are heavily tested in technical interviews. Mastering these algorithms prepares you for real-world coding challenges.",
    "syntax": "// Standard Java algorithms using loops and String methods",
    "codeExample": "public class Main {\n    // Check if a string is a Palindrome (reads same forwards and backwards)\n    static boolean isPalindrome(String str) {\n        int left = 0;\n        int right = str.length() - 1;\n        \n        while (left < right) {\n            if (str.charAt(left) != str.charAt(right)) {\n                return false;\n            }\n            left++;\n            right--;\n        }\n        return true;\n    }\n\n    public static void main(String[] args) {\n        String test1 = \"racecar\";\n        String test2 = \"hello\";\n        \n        System.out.println(\"racecar is palindrome: \" + isPalindrome(test1));\n        System.out.println(\"hello is palindrome: \" + isPalindrome(test2));\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "racecar is palindrome: true\nhello is palindrome: false",
    "explanation": [
      {
        "code": "str.charAt(left)",
        "desc": "We use a two-pointer approach, checking the first and last characters, then moving inwards."
      }
    ],
    "realWorldExample": "Writing logic to parse CSV data, validate email formats, or reverse a string in a UI.",
    "commonMistakes": [
      {
        "error": "Trying to solve string problems using `+` concatenation inside loops, which causes memory issues. Use `StringBuilder` for algorithmic tasks involving string modification.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Convert a string to a character array using `str.toCharArray()` if you need to manipulate characters heavily, as array access is faster."
    ],
    "practiceExercise": {
      "task": "Write a method that takes a String and returns a new String with all vowels removed.",
      "solution": "String removeVowels(String s) {\n    return s.replaceAll(\"[AEIOUaeiou]\", \"\");\n}"
    },
    "interviewQuestions": [
      "How do you reverse a string without using built-in methods?",
      "How do you count the occurrences of a specific character in a string?"
    ],
    "quiz": [
      {
        "question": "Which of the following is the most efficient way to reverse a string in Java?",
        "options": [
          "Looping backwards and using String concatenation (+)",
          "Using StringBuilder.reverse()",
          "Creating a new char[] array",
          "Recursion"
        ],
        "correctAnswer": "Using StringBuilder.reverse()"
      }
    ],
    "summary": [
      "String algorithms are common in interviews.",
      "Common patterns involve two-pointers, character arrays, and StringBuilder.",
      "Regular expressions (`replaceAll`) can solve complex problems in one line."
    ],
    "references": [
      {
        "label": "String Interview Questions",
        "url": "https://www.geeksforgeeks.org/top-50-string-coding-problems-for-interviews/"
      }
    ]
  },
  "java_introduction_to_exceptions": {
    "isStructured": true,
    "title": "60. Introduction to Exceptions",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "An Exception is an unwanted or unexpected event occurring during the execution of a program (at runtime) that disrupts the normal flow of instructions.",
    "whyUseIt": "Exception Handling allows your program to gracefully deal with errors (like missing files or bad user input) instead of immediately crashing.",
    "syntax": "try { \n    // risky code \n} catch (Exception e) { \n    // handle error \n}",
    "codeExample": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Program started.\");\n        \n        // If we try to divide by zero, Java throws an ArithmeticException\n        // int result = 10 / 0; // This would CRASH the program here\n        \n        System.out.println(\"Program ended.\");\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Program started.\nProgram ended.",
    "explanation": [
      {
        "code": "int result = 10 / 0;",
        "desc": "Without exception handling, this line generates a crash. The JVM abruptly stops and the 'Program ended.' line never executes."
      }
    ],
    "realWorldExample": "If an ATM loses connection to the bank database, it shouldn't just crash to a black screen. It should catch the 'ConnectionException' and display a polite message: 'Temporarily out of service.'",
    "commonMistakes": [
      {
        "error": "Confusing Errors with Exceptions. Errors (like `OutOfMemoryError`) are fatal hardware/JVM issues you shouldn't try to catch. Exceptions are recoverable application issues.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Never write code that you know will crash. Exceptions should be for truly exceptional, unpredictable circumstances."
    ],
    "practiceExercise": {
      "task": "Create an array of size 2. Try to access index 5. Observe what Exception Java throws in the console.",
      "solution": "// It throws an ArrayIndexOutOfBoundsException"
    },
    "interviewQuestions": [
      "What is the difference between Checked and Unchecked Exceptions?",
      "What is the base class for all Exceptions in Java?"
    ],
    "quiz": [
      {
        "question": "What happens if an exception is thrown and there is no code to catch it?",
        "options": [
          "The program ignores it and continues",
          "The program abruptly terminates (crashes) and prints a stack trace",
          "The JVM automatically fixes the error",
          "The compiler gives a warning"
        ],
        "correctAnswer": "The program abruptly terminates (crashes) and prints a stack trace"
      }
    ],
    "summary": [
      "Exceptions are runtime errors that disrupt program flow.",
      "Handling them prevents the application from crashing.",
      "The `Throwable` class is the root of the exception hierarchy."
    ],
    "references": [
      {
        "label": "Java Exceptions",
        "url": "https://www.w3schools.com/java/java_try_catch.asp"
      }
    ]
  }
};
