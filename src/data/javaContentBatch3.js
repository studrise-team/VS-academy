export const javaContentBatch3 = {
  "java_nested_if": {
    "isStructured": true,
    "title": "21. Nested if",
    "difficulty": "Beginner",
    "readingTime": "4 min",
    "definition": "A nested if statement is an `if` statement placed completely inside another `if` or `else` statement. It is used when you need to test for multiple dependent conditions.",
    "whyUseIt": "Use it when a secondary condition should only be checked if a primary condition has already proven to be true.",
    "syntax": "if (condition1) {\\n    if (condition2) {\\n        // executes if both are true\\n    }\\n}",
    "codeExample": "public class NestedIf {\n    public static void main(String[] args) {\n        int age = 25;\n        boolean hasLicense = true;\n        \n        // Primary check\n        if (age >= 18) {\n            System.out.println(\"Old enough to drive.\");\n            \n            // Secondary check (Nested)\n            if (hasLicense) {\n                System.out.println(\"You can rent a car.\");\n            } else {\n                System.out.println(\"Go get your license first!\");\n            }\n        } else {\n            System.out.println(\"Too young to drive.\");\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Old enough to drive.\\nYou can rent a car.",
    "explanation": [
      {
        "code": "if (age >= 18)",
        "desc": "The outer `if` condition."
      },
      {
        "code": "if (hasLicense)",
        "desc": "The inner `if` condition. The compiler only evaluates this if `age >= 18` is true."
      }
    ],
    "realWorldExample": "In an e-commerce app: `if (userIsLoggedIn)` then check `if (cartIsNotEmpty)` to show the checkout button.",
    "commonMistakes": [
      {
        "error": "Losing track of curly braces `{}` causing the `else` blocks to attach to the wrong `if` statement (dangling else problem).",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Keep nesting to a maximum of 2-3 levels. If you nest deeper, consider refactoring your code using logical operators (`&&`) or separate methods to maintain readability."
    ],
    "practiceExercise": {
      "task": "Write a program that checks if a number is greater than 0, and if so, checks if it is divisible by 2.",
      "solution": "(Depends on the number)"
    },
    "interviewQuestions": [
      "What is the dangling else problem in Java?",
      "How can you avoid deep nesting of if statements?"
    ],
    "quiz": [
      {
        "question": "What happens if the outer `if` condition evaluates to false?",
        "options": [
          "The inner `if` condition is checked anyway.",
          "The program throws an error.",
          "The inner `if` block is entirely skipped.",
          "The inner `else` block executes."
        ],
        "correctAnswer": "The inner `if` block is entirely skipped."
      }
    ],
    "summary": [
      "Nested `if` statements allow you to check for secondary conditions only when a primary condition holds true. Be careful with indentation to keep code readable."
    ],
    "references": [
      {
        "label": "Java Nested If",
        "url": "https://www.tutorialspoint.com/java/java_nested_if_statement.htm"
      }
    ]
  },
  "java_switch_statement": {
    "isStructured": true,
    "title": "22. switch Statement",
    "difficulty": "Beginner",
    "readingTime": "6 min",
    "definition": "The `switch` statement executes one statement from multiple conditions. It is like an `if-else-if` ladder but generally cleaner when comparing a single variable against multiple exact values.",
    "whyUseIt": "Improves readability and performance when evaluating a single variable against many specific constant values (like days of the week or menu options).",
    "syntax": "switch(variable) {\\n  case value1:\\n    // code\\n    break;\\n  default:\\n    // code\\n}",
    "codeExample": "public class SwitchDemo {\n    public static void main(String[] args) {\n        int day = 3;\n        \n        switch(day) {\n            case 1:\n                System.out.println(\"Monday\");\n                break;\n            case 2:\n                System.out.println(\"Tuesday\");\n                break;\n            case 3:\n                System.out.println(\"Wednesday\");\n                break;\n            default:\n                System.out.println(\"Other day\");\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Wednesday",
    "explanation": [
      {
        "code": "case",
        "desc": "Compares the variable against this exact value."
      },
      {
        "code": "break",
        "desc": "Exits the switch block. If omitted, execution \"falls through\" to the next cases."
      },
      {
        "code": "default",
        "desc": "Optional catch-all block, similar to the final `else` in an if-else chain."
      }
    ],
    "realWorldExample": "A routing system in a web server: `switch(requestMethod)` where cases are `\"GET\"`, `\"POST\"`, `\"PUT\"`, and `\"DELETE\"`.",
    "commonMistakes": [
      {
        "error": "Forgetting the `break;` statement. This causes all subsequent cases to execute regardless of whether they match (Fall-through bug).\\n❌ Trying to use a `double` or `boolean` in a switch (not supported).",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Always include a `default` case to handle unexpected input. Use switch instead of long if-else chains when checking exact equality."
    ],
    "practiceExercise": {
      "task": "Write a switch statement that prints the name of a month based on an integer (1 = January, etc).",
      "solution": "(Depends on the integer)"
    },
    "interviewQuestions": [
      "What data types are allowed in a switch statement?",
      "What is fall-through in a switch statement?",
      "Can we use strings in a switch statement in Java 8+?"
    ],
    "quiz": [
      {
        "question": "Which keyword is used to prevent fall-through in a switch statement?",
        "options": [
          "stop",
          "exit",
          "break",
          "continue"
        ],
        "correctAnswer": "break"
      }
    ],
    "summary": [
      "The `switch` statement is perfect for testing a single variable against multiple specific exact values. Never forget your `break` statements!"
    ],
    "references": [
      {
        "label": "Java Switch (Oracle)",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/switch.html"
      }
    ]
  },
  "java_for_loop": {
    "isStructured": true,
    "title": "23. for Loop",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "A `for` loop is a control flow statement used to execute a block of code a specific number of times. It consolidates initialization, condition, and increment/decrement in a single line.",
    "whyUseIt": "Use a `for` loop when you know exactly how many times you want to iterate (e.g., iterating through an array of known size or counting from 1 to 10).",
    "syntax": "for (initialization; condition; update) {\\n    // code to be executed\\n}",
    "codeExample": "public class ForLoopDemo {\n    public static void main(String[] args) {\n        // Prints numbers from 1 to 5\n        for (int i = 1; i <= 5; i++) {\n            System.out.println(\"Count is: \" + i);\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Count is: 1\\nCount is: 2\\nCount is: 3\\nCount is: 4\\nCount is: 5",
    "explanation": [
      {
        "code": "int i = 1",
        "desc": "Initialization: Executed once at the very beginning."
      },
      {
        "code": "i <= 5",
        "desc": "Condition: Checked before every iteration. If true, the loop runs."
      },
      {
        "code": "i++",
        "desc": "Update (Increment): Executed at the end of every loop iteration."
      }
    ],
    "realWorldExample": "A batch processing job that needs to send exactly 100 reminder emails will use a `for` loop counting from 0 to 99.",
    "commonMistakes": [
      {
        "error": "Using commas instead of semicolons in the loop signature: `for(int i=0, i<10, i++)`.\\n❌ Creating an infinite loop by having a condition that is never false (e.g., `for(int i=1; i>0; i++)`).",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Limit the scope of the counter variable by declaring it inside the `for` statement (i.e., `for(int i=0;...)` instead of declaring `i` above the loop)."
    ],
    "practiceExercise": {
      "task": "Write a `for` loop that prints all even numbers between 2 and 10.",
      "solution": "2\\n4\\n6\\n8\\n10"
    },
    "interviewQuestions": [
      "What are the three parts of a for loop declaration?",
      "Can you leave the condition part empty in a for loop? What happens?",
      "When would you choose a for loop over a while loop?"
    ],
    "quiz": [
      {
        "question": "In a for loop, when is the update (increment/decrement) statement executed?",
        "options": [
          "Before the condition is checked",
          "At the beginning of each iteration",
          "At the very end of each iteration",
          "Only once at the start"
        ],
        "correctAnswer": "At the very end of each iteration"
      }
    ],
    "summary": [
      "The `for` loop is the most compact looping structure in Java, ideal for situations where the exact number of iterations is known in advance."
    ],
    "references": [
      {
        "label": "The for Statement",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html"
      }
    ]
  },
  "java_while_loop": {
    "isStructured": true,
    "title": "24. while Loop",
    "difficulty": "Beginner",
    "readingTime": "4 min",
    "definition": "The `while` loop repeatedly executes a target statement as long as a given boolean condition evaluates to true.",
    "whyUseIt": "Use a `while` loop when you do not know in advance how many times the loop should run, and execution depends on a dynamic condition (like waiting for user input to stop).",
    "syntax": "while (condition) {\\n    // code to execute\\n}",
    "codeExample": "import java.util.Scanner;\n\npublic class WhileDemo {\n    public static void main(String[] args) {\n        int count = 1;\n        \n        while (count <= 3) {\n            System.out.println(\"Iteration: \" + count);\n            count++; // CRITICAL: Update the condition variable\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Iteration: 1\\nIteration: 2\\nIteration: 3",
    "explanation": [
      {
        "code": "condition",
        "desc": "Checked before executing the block. If false initially, the block never executes."
      },
      {
        "code": "count++",
        "desc": "Without modifying the variable used in the condition, the loop will run forever."
      }
    ],
    "realWorldExample": "A game loop runs continuously using `while (gameIsRunning)` and only breaks when the user clicks \"Quit\", changing `gameIsRunning` to false.",
    "commonMistakes": [
      {
        "error": "Forgetting to update the variable inside the loop, resulting in an infinite loop that crashes the program/server.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Ensure that the code inside the loop will eventually cause the condition to become false."
    ],
    "practiceExercise": {
      "task": "Write a while loop that counts down from 5 to 1 and prints \"Blastoff!\" at the end.",
      "solution": "5\\n4\\n3\\n2\\n1\\nBlastoff!"
    },
    "interviewQuestions": [
      "What is an infinite loop and how can a while loop cause one?",
      "What is the difference between a while loop and a for loop?"
    ],
    "quiz": [
      {
        "question": "If the condition in a while loop is false on the very first check, how many times will the loop execute?",
        "options": [
          "1",
          "0",
          "Depends on the compiler",
          "Infinite"
        ],
        "correctAnswer": "0"
      }
    ],
    "summary": [
      "The `while` loop is condition-driven rather than counter-driven. It runs zero or more times based solely on whether the condition is true."
    ],
    "references": [
      {
        "label": "The while and do-while Statements",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html"
      }
    ]
  },
  "java_do_while_loop": {
    "isStructured": true,
    "title": "25. do-while Loop",
    "difficulty": "Beginner",
    "readingTime": "4 min",
    "definition": "The `do-while` loop is a variant of the while loop that evaluates its condition at the *bottom* of the loop instead of the top. Therefore, the loop will always execute at least once.",
    "whyUseIt": "Use it when the code inside the loop must execute at least once regardless of the condition, such as displaying a menu to a user before asking for their choice.",
    "syntax": "do {\\n    // code to execute\\n} while (condition);",
    "codeExample": "public class DoWhileDemo {\n    public static void main(String[] args) {\n        int count = 10;\n        \n        do {\n            System.out.println(\"This executes at least once! Count: \" + count);\n            count++;\n        } while (count < 5); // Condition is false from the start\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "This executes at least once! Count: 10",
    "explanation": [
      {
        "code": "do { ... }",
        "desc": "The block of code executes immediately without checking anything."
      },
      {
        "code": "while (condition);",
        "desc": "The check happens after execution. Note the semicolon at the end, which is required."
      }
    ],
    "realWorldExample": "A terminal program that asks \"Enter your password:\". You must ask the user at least once before you can evaluate if the password they entered is correct.",
    "commonMistakes": [
      {
        "error": "Forgetting the semicolon `;` at the very end of the `while (condition);` statement.\\n❌ Using it when a normal while loop was intended, causing a bug where logic runs once incorrectly.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Only use `do-while` when guaranteed execution of the first iteration is strictly required by business logic."
    ],
    "practiceExercise": {
      "task": "Write a `do-while` loop that prints \"Running...\" and then immediately stops.",
      "solution": "Running..."
    },
    "interviewQuestions": [
      "What is the main difference between a while and a do-while loop?",
      "Will a do-while loop execute if its condition is initially false?"
    ],
    "quiz": [
      {
        "question": "Which loop is guaranteed to execute at least once?",
        "options": [
          "for loop",
          "while loop",
          "do-while loop",
          "nested loop"
        ],
        "correctAnswer": "do-while loop"
      }
    ],
    "summary": [
      "The `do-while` loop flips the checking order. It executes the body first, then checks the condition to see if it should repeat."
    ],
    "references": [
      {
        "label": "Java do-while (W3Schools)",
        "url": "https://www.w3schools.com/java/java_while_loop.asp"
      }
    ]
  },
  "java_break_statement": {
    "isStructured": true,
    "title": "26. break Statement",
    "difficulty": "Beginner",
    "readingTime": "3 min",
    "definition": "The `break` statement is used to immediately terminate the loop or switch statement it is inside, passing execution to the statement immediately following the loop/switch.",
    "whyUseIt": "Use it to exit a loop early when a specific condition is met, saving processing power by not completing unnecessary remaining iterations.",
    "syntax": "break;",
    "codeExample": "public class BreakDemo {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++) {\n            if (i == 4) {\n                System.out.println(\"Breaking at 4\");\n                break; // exits the for loop completely\n            }\n            System.out.println(\"Iteration: \" + i);\n        }\n        System.out.println(\"Loop finished.\");\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Iteration: 1\\nIteration: 2\\nIteration: 3\\nBreaking at 4\\nLoop finished.",
    "explanation": [
      {
        "code": "break;",
        "desc": "When hit, it instantly destroys the loop context and jumps to the code below the loop."
      }
    ],
    "realWorldExample": "Searching for a specific user ID in a database of a million records. Once you find the user, you `break` the loop because there is no need to check the remaining 999,999 records.",
    "commonMistakes": [
      {
        "error": "Using `break` outside of a loop or switch statement (which causes a compile error).",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Use `break` to optimize search algorithms (early exit), but avoid having multiple break points scattered in a massive loop, as it makes code hard to trace."
    ],
    "practiceExercise": {
      "task": "Create a loop from 1 to 100, but break out of it when the number reaches 5.",
      "solution": "1\\n2\\n3\\n4"
    },
    "interviewQuestions": [
      "What happens when a break statement is executed inside a nested loop?",
      "Can break be used in an if statement without a loop?"
    ],
    "quiz": [
      {
        "question": "If a break statement is used inside the inner loop of two nested loops, what happens?",
        "options": [
          "It terminates both loops.",
          "It terminates the inner loop only.",
          "It causes a compilation error.",
          "The program exits entirely."
        ],
        "correctAnswer": "It terminates the inner loop only."
      }
    ],
    "summary": [
      "The `break` keyword provides an \"emergency exit\" out of loops and switch statements, allowing for efficient early termination."
    ],
    "references": [
      {
        "label": "Branching Statements",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/branch.html"
      }
    ]
  },
  "java_continue_statement": {
    "isStructured": true,
    "title": "27. continue Statement",
    "difficulty": "Beginner",
    "readingTime": "3 min",
    "definition": "The `continue` statement skips the current iteration of a loop and immediately jumps back to evaluate the loop condition (or the update statement in a for loop) to begin the next iteration.",
    "whyUseIt": "Use it when you want to skip processing specific items in a loop but want the loop itself to keep running for the remaining items.",
    "syntax": "continue;",
    "codeExample": "public class ContinueDemo {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            if (i == 3) {\n                // Skip processing for 3\n                continue; \n            }\n            System.out.println(\"Processing: \" + i);\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Processing: 1\\nProcessing: 2\\nProcessing: 4\\nProcessing: 5",
    "explanation": [
      {
        "code": "continue;",
        "desc": "Ignores any code below it inside the loop block, and immediately jumps to `i++` to start the next cycle."
      }
    ],
    "realWorldExample": "Iterating through a list of bank transactions. If a transaction is marked as \"Failed\", you `continue` to skip processing it and move to the next valid transaction.",
    "commonMistakes": [
      {
        "error": "Placing code directly below a `continue` statement without a condition; that code becomes unreachable.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Use `continue` to avoid deep nesting of `if` statements inside loops. It acts as a guard clause to filter out unwanted items early."
    ],
    "practiceExercise": {
      "task": "Write a loop from 1 to 5 that uses `continue` to skip printing even numbers.",
      "solution": "1\\n3\\n5"
    },
    "interviewQuestions": [
      "What is the difference between break and continue?",
      "How does continue behave differently in a while loop compared to a for loop?"
    ],
    "quiz": [
      {
        "question": "What does the continue statement do?",
        "options": [
          "Stops the loop entirely.",
          "Skips the current iteration and proceeds to the next one.",
          "Exits the program.",
          "Restarts the loop from the beginning (index 0)."
        ],
        "correctAnswer": "Skips the current iteration and proceeds to the next one."
      }
    ],
    "summary": [
      "While `break` exits the loop entirely, `continue` merely skips the rest of the current iteration and moves on to the next one."
    ],
    "references": [
      {
        "label": "Java Continue",
        "url": "https://www.w3schools.com/java/java_break.asp"
      }
    ]
  },
  "java_one_dimensional_arrays": {
    "isStructured": true,
    "title": "28. One-Dimensional Arrays",
    "difficulty": "Intermediate",
    "readingTime": "6 min",
    "definition": "An array is a container object that holds a fixed number of values of a single type. A one-dimensional array is essentially a linear list of elements.",
    "whyUseIt": "Allows you to store multiple related values in a single variable, rather than declaring 100 different variables for 100 different scores.",
    "syntax": "dataType[] arrayName = new dataType[size];\\n// or\\ndataType[] arrayName = {val1, val2, val3};",
    "codeExample": "public class ArrayDemo {\n    public static void main(String[] args) {\n        // Declaration and initialization\n        int[] scores = {95, 88, 72, 100};\n        \n        // Accessing elements (0-indexed)\n        System.out.println(\"First score: \" + scores[0]);\n        \n        // Modifying an element\n        scores[2] = 80; \n        \n        // Array length\n        System.out.println(\"Array length: \" + scores.length);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "First score: 95\\nArray length: 4",
    "explanation": [
      {
        "code": "int[]",
        "desc": "Declares an array that can only hold integers."
      },
      {
        "code": "scores[0]",
        "desc": "Arrays in Java are zero-indexed, meaning the first element is at index 0."
      },
      {
        "code": ".length",
        "desc": "A property (not a method) that returns the total capacity of the array."
      }
    ],
    "realWorldExample": "A teacher wants to calculate the average grade of 30 students. Instead of `int s1, s2, s3...`, they use `int[] grades = new int[30];`.",
    "commonMistakes": [
      {
        "error": "Trying to access `scores[4]` in a 4-element array, which throws an `ArrayIndexOutOfBoundsException` (valid indices are 0 to 3).\\n❌ Trying to change the size of the array after it is created. Java arrays have fixed sizes.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Always use `.length` in loops instead of hardcoding the array size to prevent out-of-bounds exceptions."
    ],
    "practiceExercise": {
      "task": "Create an array of Strings containing three names. Print the second name in the array.",
      "solution": "(The second name you defined)"
    },
    "interviewQuestions": [
      "Are arrays objects in Java?",
      "What happens if you try to access an index that is outside the bounds of the array?",
      "Can an array hold different data types (e.g., an int and a String)?"
    ],
    "quiz": [
      {
        "question": "If an array has 5 elements, what is the index of the last element?",
        "options": [
          "5",
          "4",
          "6",
          "1"
        ],
        "correctAnswer": "4"
      }
    ],
    "summary": [
      "Arrays group elements of the same type under one name. They are zero-indexed and their size cannot be changed once initialized."
    ],
    "references": [
      {
        "label": "Java Arrays (Oracle)",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html"
      }
    ]
  },
  "java_two_dimensional_arrays": {
    "isStructured": true,
    "title": "29. Two-Dimensional Arrays",
    "difficulty": "Intermediate",
    "readingTime": "6 min",
    "definition": "A two-dimensional array is an array of arrays. It is used to represent data in a tabular format, consisting of rows and columns (like a matrix or grid).",
    "whyUseIt": "Essential for representing grids, such as a spreadsheet, a chessboard, or pixels on a screen.",
    "syntax": "dataType[][] arrayName = new dataType[rows][columns];",
    "codeExample": "public class MatrixDemo {\n    public static void main(String[] args) {\n        // A 2x3 matrix\n        int[][] matrix = {\n            {1, 2, 3}, // Row 0\n            {4, 5, 6}  // Row 1\n        };\n        \n        // Accessing row 1, column 2 (Value: 6)\n        System.out.println(\"Element at [1][2]: \" + matrix[1][2]);\n        \n        // Number of rows\n        System.out.println(\"Rows: \" + matrix.length);\n        // Number of columns in row 0\n        System.out.println(\"Cols in Row 0: \" + matrix[0].length);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Element at [1][2]: 6\\nRows: 2\\nCols in Row 0: 3",
    "explanation": [
      {
        "code": "int[][]",
        "desc": "Denotes a 2D array."
      },
      {
        "code": "matrix[1][2]",
        "desc": "Accesses the 2nd array (index 1), and the 3rd element inside that array (index 2)."
      }
    ],
    "realWorldExample": "A Tic-Tac-Toe game uses a `char[][] board = new char[3][3];` to represent the 9 squares on the board.",
    "commonMistakes": [
      {
        "error": "Reversing the row and column indices. The first bracket `[row]` is the outer array, the second `[col]` is the inner array.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "When iterating through a 2D array, use a nested loop where the outer loop goes through rows (`matrix.length`) and the inner loop goes through columns (`matrix[i].length`)."
    ],
    "practiceExercise": {
      "task": "Create a 2x2 array and populate it with numbers. Print the element at [0][1].",
      "solution": "(The value you placed at [0][1])"
    },
    "interviewQuestions": [
      "What is a ragged (jagged) array in Java?",
      "How do you find the number of columns in the second row of a 2D array?"
    ],
    "quiz": [
      {
        "question": "Which syntax correctly initializes a 2D array?",
        "options": [
          "int array[][] = new int(2,3);",
          "int[][] array = new int[2][3];",
          "int[2][3] array = new int[][];",
          "int array = new int[2,3];"
        ],
        "correctAnswer": "int[][] array = new int[2][3];"
      }
    ],
    "summary": [
      "Two-dimensional arrays are \"arrays of arrays\", perfectly suited for representing matrices, boards, and tables of data."
    ],
    "references": [
      {
        "label": "Multidimensional Arrays",
        "url": "https://www.geeksforgeeks.org/multidimensional-arrays-in-java/"
      }
    ]
  },
  "java_array_operations": {
    "isStructured": true,
    "title": "30. Array Operations",
    "difficulty": "Intermediate",
    "readingTime": "7 min",
    "definition": "Array operations encompass the common tasks performed on arrays, such as traversing, inserting, updating, deleting, and copying elements.",
    "whyUseIt": "Since arrays have fixed sizes, performing operations like inserting or deleting requires manual logic (like creating new arrays or shifting elements), which is a fundamental computer science concept.",
    "syntax": "// Iteration: for(int i=0; i<arr.length; i++)",
    "codeExample": "import java.util.Arrays;\n\npublic class ArrayOps {\n    public static void main(String[] args) {\n        int[] original = {10, 20, 30};\n        \n        // 1. Copying an array\n        int[] copy = Arrays.copyOf(original, original.length);\n        \n        // 2. Traversal & Updating\n        for (int i = 0; i < copy.length; i++) {\n            copy[i] = copy[i] * 2; // double each value\n        }\n        \n        // 3. Printing an array easily\n        System.out.println(\"Original: \" + Arrays.toString(original));\n        System.out.println(\"Modified: \" + Arrays.toString(copy));\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Original: [10, 20, 30]\\nModified: [20, 40, 60]",
    "explanation": [
      {
        "code": "Arrays.copyOf()",
        "desc": "A built-in utility method to safely duplicate an array without sharing the same memory reference."
      },
      {
        "code": "Arrays.toString()",
        "desc": "Converts an array into a readable string format like `[10, 20]`. If you just print an array directly, you get a memory hash."
      }
    ],
    "realWorldExample": "A photo editing app loads an image as an array of pixels. An operation (like increasing brightness) traverses the array and updates every single pixel value.",
    "commonMistakes": [
      {
        "error": "Copying an array by doing `int[] a = b;`. This does not copy the array; it makes both variables point to the exact same array in memory (reference copy).",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Familiarize yourself with the `java.util.Arrays` class, which provides powerful built-in methods for copying, sorting, and filling arrays."
    ],
    "practiceExercise": {
      "task": "Create an array of 3 numbers. Write a loop to calculate and print the sum of all elements.",
      "solution": "(Sum of the 3 numbers)"
    },
    "interviewQuestions": [
      "Why does printing an array directly (e.g., `System.out.println(arr)`) print gibberish?",
      "What is the difference between shallow copy and deep copy in arrays?",
      "How do you delete an element from a Java array?"
    ],
    "quiz": [
      {
        "question": "Which utility class provides the `toString()` and `copyOf()` methods for arrays?",
        "options": [
          "java.util.Collections",
          "java.util.ArrayUtil",
          "java.util.Arrays",
          "java.lang.Array"
        ],
        "correctAnswer": "java.util.Arrays"
      }
    ],
    "summary": [
      "Manipulating arrays involves iterating through them. The `java.util.Arrays` utility class is your best friend for complex array operations."
    ],
    "references": [
      {
        "label": "java.util.Arrays API",
        "url": "https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html"
      }
    ]
  }
};
