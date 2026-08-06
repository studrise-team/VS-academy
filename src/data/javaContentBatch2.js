export const javaContentBatch2 = {
  "java_data_types": {
    "isStructured": true,
    "title": "11. Data Types",
    "difficulty": "Beginner",
    "readingTime": "6 min",
    "definition": "Data types specify the different sizes and values that can be stored in the variable. Java is statically-typed, meaning all variables must first be declared before they can be used.",
    "whyUseIt": "Using the correct data type ensures your program uses memory efficiently and prevents unexpected behavior like data truncation or overflow.",
    "syntax": "type variableName = value;",
    "codeExample": "public class DataTypes {\n    public static void main(String[] args) {\n        byte b = 100;\n        short s = 10000;\n        int i = 100000;\n        long l = 100000L;\n        float f = 234.5f;\n        double d = 12.3;\n        boolean isJavaFun = true;\n        char grade = 'A';\n        \n        System.out.println(\"Boolean value is: \" + isJavaFun);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Boolean value is: true",
    "explanation": [
      {
        "code": "Primitive Types",
        "desc": "byte, short, int, long, float, double, boolean, char"
      },
      {
        "code": "f or L suffixes",
        "desc": "Required for float (f) and long (L) literals to tell the compiler the specific type."
      }
    ],
    "realWorldExample": "A bank app uses `double` or `BigDecimal` for account balances, `boolean` for account status (active/inactive), and `int` for account numbers.",
    "commonMistakes": [
      {
        "error": "Assigning a decimal to an `int` without casting.\\n❌ Forgetting the `f` at the end of a float literal, which causes it to default to double.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Use `int` for whole numbers unless you explicitly need memory savings (byte/short) or massive numbers (long). Use `BigDecimal` instead of `double` for currency."
    ],
    "practiceExercise": {
      "task": "Declare a double representing a price of 99.99 and a boolean representing whether it is on sale. Print both.",
      "solution": "Price: 99.99\\nOn Sale: true"
    },
    "interviewQuestions": [
      "What are the 8 primitive data types in Java?",
      "What is the default value of a boolean?",
      "Why should you not use float or double for currency?"
    ],
    "quiz": [
      {
        "question": "Which of these is NOT a primitive data type in Java?",
        "options": [
          "int",
          "float",
          "String",
          "boolean"
        ],
        "correctAnswer": "String"
      }
    ],
    "summary": [
      "Java has 8 primitive data types that dictate how much memory a variable uses and what kind of data it can hold."
    ],
    "references": [
      {
        "label": "Java Data Types",
        "url": "https://www.w3schools.com/java/java_data_types.asp"
      }
    ]
  },
  "java_type_casting": {
    "isStructured": true,
    "title": "12. Type Casting",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "Type casting is when you assign a value of one primitive data type to another type. In Java, there are two types: Widening Casting (automatic) and Narrowing Casting (manual).",
    "whyUseIt": "Sometimes you receive data in one format (like a large long from a database) but need to use a method that requires another format (like an int).",
    "syntax": "type varName = (targetType) varToCast;",
    "codeExample": "public class CastingDemo {\n    public static void main(String[] args) {\n        // Widening Casting (Automatic)\n        int myInt = 9;\n        double myDouble = myInt; // Automatic casting: int to double\n\n        // Narrowing Casting (Manual)\n        double myOtherDouble = 9.78d;\n        int myOtherInt = (int) myOtherDouble; // Manual casting: double to int\n\n        System.out.println(myDouble);\n        System.out.println(myOtherInt);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "9.0\\n9",
    "explanation": [
      {
        "code": "Widening",
        "desc": "Converting a smaller type to a larger type size (byte -> short -> char -> int -> long -> float -> double)."
      },
      {
        "code": "Narrowing",
        "desc": "Converting a larger type to a smaller size type. Must be done manually by placing the type in parentheses."
      }
    ],
    "realWorldExample": "A sensor returns temperature as a very precise `double` (e.g., 72.4839), but the UI only wants to display a whole number `int` (72), so narrowing casting is used.",
    "commonMistakes": [
      {
        "error": "Losing data during narrowing casting (e.g., casting 130 to a byte wraps around to a negative number because byte max is 127).",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Be careful with narrowing casting as it truncates decimal values and can cause integer overflow."
    ],
    "practiceExercise": {
      "task": "Cast the float 10.99f to an integer and print it.",
      "solution": "10"
    },
    "interviewQuestions": [
      "What is the difference between widening and narrowing casting?",
      "Can you cast a boolean to an int in Java?",
      "What happens if you cast a double 9.99 to an int?"
    ],
    "quiz": [
      {
        "question": "Which of the following is an example of manual (narrowing) casting?",
        "options": [
          "int x = 10; double y = x;",
          "double x = 10.5; int y = (int) x;",
          "float x = 10; double y = x;",
          "byte x = 5; int y = x;"
        ],
        "correctAnswer": "double x = 10.5; int y = (int) x;"
      }
    ],
    "summary": [
      "Type casting allows converting data from one type to another. Widening is safe and automatic, while narrowing requires manual casting and can lose data."
    ],
    "references": [
      {
        "label": "Java Type Casting",
        "url": "https://www.w3schools.com/java/java_type_casting.asp"
      }
    ]
  },
  "java_operators": {
    "isStructured": true,
    "title": "13. Operators",
    "difficulty": "Beginner",
    "readingTime": "6 min",
    "definition": "Operators are special symbols that perform specific operations on one, two, or three operands, and then return a result.",
    "whyUseIt": "Operators are essential for mathematical calculations, assigning values, comparing data, and executing logic.",
    "syntax": "a + b, a == b, a && b",
    "codeExample": "public class Operators {\n    public static void main(String[] args) {\n        int a = 10, b = 5;\n        \n        // Arithmetic\n        System.out.println(\"a + b = \" + (a + b));\n        \n        // Relational\n        System.out.println(\"a > b is \" + (a > b));\n        \n        // Logical\n        System.out.println(\"a > 0 && b > 0 is \" + (a > 0 && b > 0));\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "a + b = 15\\na > b is true\\na > 0 && b > 0 is true",
    "explanation": [
      {
        "code": "Arithmetic",
        "desc": "+, -, *, /, % (modulo for remainder)"
      },
      {
        "code": "Relational",
        "desc": "==, !=, >, <, >=, <="
      },
      {
        "code": "Logical",
        "desc": "&& (AND), || (OR), ! (NOT)"
      },
      {
        "code": "Assignment",
        "desc": "=, +=, -="
      }
    ],
    "realWorldExample": "An e-commerce site uses operators to calculate the total cart value (Arithmetic), check if the user has enough funds (Relational), and verify the user is logged in AND has an active session (Logical).",
    "commonMistakes": [
      {
        "error": "Confusing the assignment operator `=` with the equality operator `==`.\\n❌ Using `/` on two integers and expecting a decimal result (e.g., 5/2 results in 2, not 2.5).",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Use parentheses `()` to explicitly define the order of operations when combining multiple operators to improve readability."
    ],
    "practiceExercise": {
      "task": "Use the modulo operator `%` to determine if the number 15 is even or odd.",
      "solution": "15 is odd"
    },
    "interviewQuestions": [
      "What is the difference between = and ==?",
      "What does the modulo (%) operator do?",
      "What is the difference between & and &&?"
    ],
    "quiz": [
      {
        "question": "What is the result of 10 % 3?",
        "options": [
          "3",
          "1",
          "0",
          "3.33"
        ],
        "correctAnswer": "1"
      }
    ],
    "summary": [
      "Operators allow you to manipulate variables and values. Mastering Arithmetic, Relational, and Logical operators is critical for programming logic."
    ],
    "references": [
      {
        "label": "Java Operators",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/opsummary.html"
      }
    ]
  },
  "java_user_input_scanner": {
    "isStructured": true,
    "title": "14. User Input (Scanner)",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "The Scanner class is used to get user input from the console. It is found in the `java.util` package.",
    "whyUseIt": "Allows you to build interactive programs that ask users for names, numbers, or choices, making your applications dynamic rather than static.",
    "syntax": "Scanner sc = new Scanner(System.in);\\nString str = sc.nextLine();",
    "codeExample": "import java.util.Scanner;\n\npublic class UserInput {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        System.out.print(\"Enter your username: \");\n        String userName = scanner.nextLine();\n        \n        System.out.print(\"Enter your age: \");\n        int age = scanner.nextInt();\n        \n        System.out.println(\"Username is: \" + userName + \", Age: \" + age);\n        scanner.close(); // good practice to close it\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Enter your username: (user types Alex)\\nEnter your age: (user types 25)\\nUsername is: Alex, Age: 25",
    "explanation": [
      {
        "code": "import java.util.Scanner",
        "desc": "Imports the Scanner class so we can use it."
      },
      {
        "code": "System.in",
        "desc": "Represents the standard input stream (keyboard)."
      },
      {
        "code": "nextLine()",
        "desc": "Reads a String value from the user."
      },
      {
        "code": "nextInt()",
        "desc": "Reads an int value from the user."
      }
    ],
    "realWorldExample": "A command-line banking application uses Scanner to ask the user to input their PIN or select an option from a text menu (1 for Deposit, 2 for Withdraw).",
    "commonMistakes": [
      {
        "error": "Using `nextLine()` immediately after `nextInt()` without consuming the leftover newline character, causing the `nextLine()` to seemingly skip.\\n❌ Forgetting to import `java.util.Scanner`.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Always close the Scanner using `scanner.close()` to prevent memory leaks, though it is usually handled automatically upon program exit."
    ],
    "practiceExercise": {
      "task": "Write a program that asks for the users favorite color and prints \"Your favorite color is [color]\".",
      "solution": "Enter color: Red\\nYour favorite color is Red"
    },
    "interviewQuestions": [
      "What package is the Scanner class located in?",
      "What happens if a user inputs text when nextInt() is expected?",
      "Why is it a good practice to close the Scanner?"
    ],
    "quiz": [
      {
        "question": "Which method of Scanner is used to read a full line of text containing spaces?",
        "options": [
          "next()",
          "nextString()",
          "nextLine()",
          "read()"
        ],
        "correctAnswer": "nextLine()"
      }
    ],
    "summary": [
      "The Scanner class provides an easy way to read console input, enabling interactive console-based applications."
    ],
    "references": [
      {
        "label": "Scanner Class",
        "url": "https://docs.oracle.com/javase/8/docs/api/java/util/Scanner.html"
      }
    ]
  },
  "java_comments": {
    "isStructured": true,
    "title": "15. Comments",
    "difficulty": "Beginner",
    "readingTime": "3 min",
    "definition": "Comments are ignored by the Java compiler. They are used to explain code, leave notes, or temporarily disable code during testing.",
    "whyUseIt": "Increases code readability for yourself and other developers. It is crucial for maintaining large codebases.",
    "syntax": "// Single line\\n/* Multi\\nline */\\n/** JavaDoc */",
    "codeExample": "public class Comments {\n    /**\n     * This is a JavaDoc comment.\n     * It is used to generate documentation for APIs.\n     */\n    public static void main(String[] args) {\n        // This is a single-line comment\n        System.out.println(\"Comments don't print\"); // Inline comment\n        \n        /* \n           This is a multi-line comment.\n           It spans multiple lines.\n        */\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Comments don't print",
    "explanation": [
      {
        "code": "//",
        "desc": "Single-line comment."
      },
      {
        "code": "/* ... */",
        "desc": "Multi-line block comment."
      },
      {
        "code": "/** ... */",
        "desc": "Documentation (JavaDoc) comment."
      }
    ],
    "realWorldExample": "In professional teams, JavaDoc comments are required on all public methods so that tools can automatically generate the HTML documentation for the project.",
    "commonMistakes": [
      {
        "error": "Leaving large blocks of commented-out code in production (often called \"dead code\").",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Write code that is self-explanatory by using good variable names, and only use comments to explain the \"why\", not the \"what\"."
    ],
    "practiceExercise": {
      "task": "Write a Hello World program and add a single-line comment explaining what `println` does.",
      "solution": "Hello World"
    },
    "interviewQuestions": [
      "What are the three types of comments in Java?",
      "What is the purpose of JavaDoc comments?",
      "Are comments included in the compiled .class file?"
    ],
    "quiz": [
      {
        "question": "Which syntax is used for JavaDoc comments?",
        "options": [
          "//",
          "/* ... */",
          "/** ... */",
          "<!-- ... -->"
        ],
        "correctAnswer": "/** ... */"
      }
    ],
    "summary": [
      "Comments help document logic, explain complex algorithms, and provide instructions. They are completely ignored by the compiler."
    ],
    "references": [
      {
        "label": "Java Comments",
        "url": "https://www.w3schools.com/java/java_comments.asp"
      }
    ]
  },
  "java_keywords": {
    "isStructured": true,
    "title": "16. Keywords",
    "difficulty": "Beginner",
    "readingTime": "4 min",
    "definition": "Keywords are reserved words in Java that have a specific, predefined meaning in the language. They cannot be used as variable names or identifiers.",
    "whyUseIt": "Keywords define the syntax and structure of the language (like `class`, `public`, `if`, `while`). You must know them to write valid Java.",
    "syntax": "public, static, void, int, class, return",
    "codeExample": "public class KeywordsDemo {\n    public static void main(String[] args) {\n        // 'int', 'final', and 'while' are keywords\n        final int MAX = 5;\n        int count = 0;\n        \n        while(count < MAX) {\n            count++;\n        }\n        System.out.println(\"Done counting.\");\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Done counting.",
    "explanation": [
      {
        "code": "public",
        "desc": "Access modifier."
      },
      {
        "code": "static",
        "desc": "Belongs to the class rather than an object."
      },
      {
        "code": "void",
        "desc": "Returns no value."
      },
      {
        "code": "final",
        "desc": "Declares a constant that cannot change."
      }
    ],
    "realWorldExample": "All Java structures rely on keywords. For example, `try`, `catch`, and `finally` are used to handle errors.",
    "commonMistakes": [
      {
        "error": "Trying to name a variable `class` or `int` (e.g., `String class = \"A\";` will fail).",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Familiarize yourself with the 50+ keywords in Java. Note that they are always lowercase."
    ],
    "practiceExercise": {
      "task": "List 5 Java keywords that you have seen so far.",
      "solution": "public, class, static, void, int (Answers may vary)"
    },
    "interviewQuestions": [
      "Can a keyword be used as a variable name?",
      "Is `String` a keyword in Java?",
      "Are keywords case-sensitive in Java?"
    ],
    "quiz": [
      {
        "question": "Which of the following is NOT a Java keyword?",
        "options": [
          "class",
          "void",
          "main",
          "public"
        ],
        "correctAnswer": "main"
      }
    ],
    "summary": [
      "Keywords are reserved identifiers that form the foundation of Java syntax. They are always strictly lowercase."
    ],
    "references": [
      {
        "label": "Java Keywords List",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html"
      }
    ]
  },
  "java_identifiers": {
    "isStructured": true,
    "title": "17. Identifiers",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "Identifiers are names given to classes, variables, packages, and methods in Java.",
    "whyUseIt": "Identifiers allow us to refer to specific memory locations or blocks of code by a readable name.",
    "syntax": "int age; // \"age\" is the identifier",
    "codeExample": "public class IdentifierDemo {\n    public static void main(String[] args) {\n        // Valid identifiers\n        int _myAge = 25;\n        String $currency = \"USD\";\n        double salary2024 = 60000.50;\n        \n        System.out.println(_myAge + \" in \" + $currency);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "25 in USD",
    "explanation": [
      {
        "code": "Rules",
        "desc": "Must begin with a letter, dollar sign ($), or underscore (_). Cannot start with a number."
      },
      {
        "code": "Case-sensitive",
        "desc": "`age` and `Age` are completely different identifiers."
      },
      {
        "code": "No keywords",
        "desc": "You cannot use `int`, `class`, etc."
      }
    ],
    "realWorldExample": "In a real application, naming a variable `totalCustomerCount` instead of `x` is critical for other developers to understand what the identifier represents.",
    "commonMistakes": [
      {
        "error": "Starting an identifier with a number (e.g., `int 1stPlace = 10;`).\\n❌ Using spaces in an identifier (e.g., `int total score;`).",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Variables/Methods: `camelCase`. Classes/Interfaces: `PascalCase`. Constants: `UPPER_SNAKE_CASE`. Packages: `lowercase`."
    ],
    "practiceExercise": {
      "task": "Identify if `2ndUser`, `user_name`, and `_total` are valid identifiers.",
      "solution": "2ndUser is invalid. user_name and _total are valid."
    },
    "interviewQuestions": [
      "What are the rules for defining an identifier in Java?",
      "Can an identifier contain special characters like @ or #?",
      "Is `Runnable` an identifier or a keyword?"
    ],
    "quiz": [
      {
        "question": "Which of the following is a VALID Java identifier?",
        "options": [
          "1stName",
          "user-name",
          "_userScore",
          "class"
        ],
        "correctAnswer": "_userScore"
      }
    ],
    "summary": [
      "Identifiers are the names you give to elements in your code. Following the strict naming rules and conventions ensures clean, compiling code."
    ],
    "references": [
      {
        "label": "Variables & Identifiers",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html"
      }
    ]
  },
  "java_literals": {
    "isStructured": true,
    "title": "18. Literals",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "A literal is a source code representation of a fixed value. They are represented directly in the code without requiring computation.",
    "whyUseIt": "Literals allow you to assign exact fixed data (like numbers, characters, or text) directly to variables.",
    "syntax": "int x = 100; // 100 is an integer literal",
    "codeExample": "public class Literals {\n    public static void main(String[] args) {\n        int decimal = 100;         // Decimal Literal\n        int octal = 0144;          // Octal Literal (starts with 0)\n        int hex = 0x64;            // Hexadecimal (starts with 0x)\n        int binary = 0b1100100;    // Binary (starts with 0b)\n        \n        char character = 'A';      // Char literal\n        String string = \"Hello\";   // String literal\n        boolean flag = true;       // Boolean literal\n        \n        System.out.println(\"Hex literal: \" + hex);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Hex literal: 100",
    "explanation": [
      {
        "code": "0x",
        "desc": "Prefix used to denote hexadecimal literals."
      },
      {
        "code": "0b",
        "desc": "Prefix used to denote binary literals."
      },
      {
        "code": "Single quotes",
        "desc": "Used exclusively for char literals (e.g., 'A')."
      },
      {
        "code": "Double quotes",
        "desc": "Used for String literals (e.g., \"Hello\")."
      }
    ],
    "realWorldExample": "Binary literals (`0b1010`) are often used in embedded systems or networking code when dealing with bitwise operations on byte streams.",
    "commonMistakes": [
      {
        "error": "Confusing char literals (single quotes) with String literals (double quotes).\\n❌ Putting commas in large numeric literals (use underscores instead in Java 7+: `1_000_000`).",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Use underscores in large numeric literals for readability (e.g., `long creditCard = 1234_5678_9012L;`)."
    ],
    "practiceExercise": {
      "task": "Declare an integer using an underscore literal for 1 million, and print it.",
      "solution": "1000000"
    },
    "interviewQuestions": [
      "What is a literal in Java?",
      "How do you write a binary literal?",
      "What is the difference between 'a' and \"a\"?"
    ],
    "quiz": [
      {
        "question": "Which of the following is a valid character literal?",
        "options": [
          "\"A\"",
          "'A'",
          "A",
          "'ABC'"
        ],
        "correctAnswer": "'A'"
      }
    ],
    "summary": [
      "Literals are the actual raw values you assign to variables. Java supports various literal types including decimal, hex, binary, char, and string."
    ],
    "references": [
      {
        "label": "Primitive Data Types & Literals",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html"
      }
    ]
  },
  "java_if_statement": {
    "isStructured": true,
    "title": "19. if Statement",
    "difficulty": "Beginner",
    "readingTime": "4 min",
    "definition": "The `if` statement is a control flow statement that evaluates a boolean expression and executes a block of code only if the expression evaluates to true.",
    "whyUseIt": "It enables your program to make decisions. Without conditional statements, your code would just run top-to-bottom every single time without adapting to different data.",
    "syntax": "if (condition) {\\n    // block of code to be executed if condition is true\\n}",
    "codeExample": "public class IfDemo {\n    public static void main(String[] args) {\n        int temperature = 35;\n        \n        if (temperature > 30) {\n            System.out.println(\"It's a hot day!\");\n        }\n        \n        System.out.println(\"End of program.\");\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "It's a hot day!\\nEnd of program.",
    "explanation": [
      {
        "code": "condition",
        "desc": "Must evaluate to a boolean (`true` or `false`). Here, `35 > 30` is true."
      },
      {
        "code": "{ ... }",
        "desc": "The block of code inside the braces only executes if the condition is true."
      }
    ],
    "realWorldExample": "In a game, `if (playerHealth <= 0) { showGameOverScreen(); }` triggers the end of the game only when the player dies.",
    "commonMistakes": [
      {
        "error": "Putting a semicolon directly after the condition: `if (x > 5); { ... }`. This makes the if-statement do nothing, and the block executes unconditionally.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Always use curly braces `{}` even if the `if` block contains only a single line of code. It prevents future errors when adding more lines."
    ],
    "practiceExercise": {
      "task": "Write a program that declares `int age = 20;` and prints \"Eligible to vote\" if the age is greater than or equal to 18.",
      "solution": "Eligible to vote"
    },
    "interviewQuestions": [
      "Can an if statement evaluate a non-boolean expression (like an integer) in Java?",
      "What happens if you omit the curly braces on an if statement?"
    ],
    "quiz": [
      {
        "question": "Which of the following is the correct syntax for an if statement?",
        "options": [
          "if condition {}",
          "if (condition) then {}",
          "if (condition) {}",
          "if condition then {}"
        ],
        "correctAnswer": "if (condition) {}"
      }
    ],
    "summary": [
      "The `if` statement is the most fundamental decision-making tool in Java, executing a block of code only if a specific boolean condition is met."
    ],
    "references": [
      {
        "label": "Java if...else (W3Schools)",
        "url": "https://www.w3schools.com/java/java_conditions.asp"
      }
    ]
  },
  "java_if_else_statement": {
    "isStructured": true,
    "title": "20. if-else Statement",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "The `if-else` statement provides an alternative block of code that executes when the `if` condition evaluates to false. It can be extended with `else if` for multiple conditions.",
    "whyUseIt": "Allows for a two-way (or multi-way) decision path. \"If this is true, do X, otherwise do Y.\"",
    "syntax": "if (condition) {\\n  // code\\n} else if (condition2) {\\n  // code\\n} else {\\n  // code\\n}",
    "codeExample": "public class IfElseDemo {\n    public static void main(String[] args) {\n        int score = 75;\n        \n        if (score >= 90) {\n            System.out.println(\"Grade: A\");\n        } else if (score >= 80) {\n            System.out.println(\"Grade: B\");\n        } else if (score >= 70) {\n            System.out.println(\"Grade: C\");\n        } else {\n            System.out.println(\"Grade: F\");\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Grade: C",
    "explanation": [
      {
        "code": "else if",
        "desc": "Checked only if the previous `if` or `else if` conditions were false."
      },
      {
        "code": "else",
        "desc": "The catch-all block that executes if absolutely all preceding conditions were false."
      }
    ],
    "realWorldExample": "A login system: `if (passwordIsCorrect)` grant access; `else if (accountLocked)` show lock message; `else` show incorrect password error.",
    "commonMistakes": [
      {
        "error": "Using multiple distinct `if` statements instead of `else if`, causing multiple blocks to execute when only one was intended.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Order your `if-else` conditions logically (e.g., highest to lowest). Ensure the `else` block covers unexpected fallback scenarios."
    ],
    "practiceExercise": {
      "task": "Write an if-else statement that checks if a number is positive, negative, or zero.",
      "solution": "(Depends on the number you hardcode)"
    },
    "interviewQuestions": [
      "What is the difference between multiple `if` statements and an `if-else if` ladder?",
      "Is the `else` block mandatory?"
    ],
    "quiz": [
      {
        "question": "Which block acts as a default/fallback when all `if` and `else if` conditions are false?",
        "options": [
          "default",
          "otherwise",
          "else",
          "finally"
        ],
        "correctAnswer": "else"
      }
    ],
    "summary": [
      "The `if-else` and `else if` structure allows your code to intelligently branch into different paths based on varied logical conditions."
    ],
    "references": [
      {
        "label": "Control Flow Statements (Oracle)",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/if.html"
      }
    ]
  }
};
