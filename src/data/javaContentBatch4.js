export const javaContentBatch4 = {
  "java_enhanced_for_loop": {
    "isStructured": true,
    "title": "31. Enhanced for Loop",
    "difficulty": "Beginner",
    "readingTime": "4 min",
    "definition": "The enhanced for loop (also called the for-each loop) is a simpler way to iterate through arrays and collections. It eliminates the need for an index variable.",
    "whyUseIt": "It makes the code cleaner, easier to read, and prevents off-by-one errors (IndexOutOfBoundsException) because it automatically handles the array bounds.",
    "syntax": "for (dataType variable : arrayName) {\\n    // code block to execute\\n}",
    "codeExample": "public class ForEachDemo {\n    public static void main(String[] args) {\n        String[] cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n        \n        // Classic for loop: for(int i=0; i<cars.length; i++)\n        \n        // Enhanced for loop:\n        for (String car : cars) {\n            System.out.println(car);\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Volvo\\nBMW\\nFord\\nMazda",
    "explanation": [
      {
        "code": "String car",
        "desc": "A temporary variable that holds the current element in the iteration. Its type must match the array type."
      },
      {
        "code": ":",
        "desc": "Read as \"in\". So `for(String car : cars)` reads as \"for every String car in cars\"."
      }
    ],
    "realWorldExample": "Processing a list of pending emails. `for (Email e : outbox) { send(e); }`. You don't care what index the email is at, you just want to process all of them.",
    "commonMistakes": [
      {
        "error": "Trying to use a for-each loop to modify the elements of an array. The loop variable is a copy, so modifying it does not change the original array.\\n❌ Trying to iterate backwards; for-each only goes forwards from start to finish.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Always default to the enhanced for loop when iterating over arrays or lists, UNLESS you specifically need the index (e.g., to print \"Item 3 of 10\")."
    ],
    "practiceExercise": {
      "task": "Create an array of integers (1, 2, 3, 4, 5). Use an enhanced for loop to print each number.",
      "solution": "1\\n2\\n3\\n4\\n5"
    },
    "interviewQuestions": [
      "What are the limitations of the enhanced for loop compared to a regular for loop?",
      "Can you iterate an array in reverse using an enhanced for loop?",
      "How does the enhanced for loop prevent IndexOutOfBoundsExceptions?"
    ],
    "quiz": [
      {
        "question": "What is the symbol used to separate the variable declaration and the array name in an enhanced for loop?",
        "options": [
          ";",
          ",",
          ":",
          "in"
        ],
        "correctAnswer": ":"
      }
    ],
    "summary": [
      "The for-each loop is a cleaner, safer, and more readable alternative to the standard for loop when you need to process every element in an array or collection."
    ],
    "references": [
      {
        "label": "For-Each Loop",
        "url": "https://www.geeksforgeeks.org/for-each-loop-in-java/"
      }
    ]
  },
  "java_array_sorting": {
    "isStructured": true,
    "title": "32. Array Sorting",
    "difficulty": "Intermediate",
    "readingTime": "6 min",
    "definition": "Array sorting is the process of arranging the elements in a specific order (ascending or descending). Java provides built-in methods to do this efficiently.",
    "whyUseIt": "Sorting data is a foundational task in computing. Displaying high scores, alphabetizing names, or finding the median all require sorted data.",
    "syntax": "Arrays.sort(arrayName);",
    "codeExample": "import java.util.Arrays;\nimport java.util.Collections;\n\npublic class SortDemo {\n    public static void main(String[] args) {\n        int[] numbers = {45, 12, 85, 32, 89, 39, 69, 44, 42, 1, 6, 8};\n        \n        // Sorts the array in ascending order (modifies original array)\n        Arrays.sort(numbers);\n        \n        System.out.println(\"Sorted Array: \" + Arrays.toString(numbers));\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Sorted Array: [1, 6, 8, 12, 32, 39, 42, 44, 45, 69, 85, 89]",
    "explanation": [
      {
        "code": "Arrays.sort()",
        "desc": "A static method that sorts the specified array into ascending numerical or alphabetical order. It uses a Dual-Pivot Quicksort algorithm."
      },
      {
        "code": "Collections.reverseOrder()",
        "desc": "Used in combination with `Arrays.sort()` to sort in descending order (only works with object wrappers like `Integer[]`, not `int[]`)."
      }
    ],
    "realWorldExample": "An online store retrieves a list of products from the database and sorts them by price (lowest to highest) before displaying them to the user.",
    "commonMistakes": [
      {
        "error": "Expecting `Arrays.sort()` to return a new sorted array. It is a `void` method that sorts the array in-place, meaning the original array is modified.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "For primitive types, `Arrays.sort()` is extremely fast. If you need to sort custom objects (like a `Student` class), you must implement the `Comparable` interface."
    ],
    "practiceExercise": {
      "task": "Create an array of Strings with 4 random names. Sort the array and print the first name alphabetically.",
      "solution": "(The name that comes first alphabetically)"
    },
    "interviewQuestions": [
      "What sorting algorithm does `Arrays.sort()` use internally for primitives?",
      "How do you sort an array in descending order in Java?",
      "Does `Arrays.sort()` modify the original array?"
    ],
    "quiz": [
      {
        "question": "Which class provides the static `sort()` method for arrays?",
        "options": [
          "java.util.Collections",
          "java.util.List",
          "java.util.Arrays",
          "java.lang.System"
        ],
        "correctAnswer": "java.util.Arrays"
      }
    ],
    "summary": [
      "Sorting arrays is simple with `Arrays.sort()`. It modifies the array in-place and provides highly optimized performance."
    ],
    "references": [
      {
        "label": "Sorting Arrays",
        "url": "https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#sort-int:A-"
      }
    ]
  },
  "java_searching_in_arrays": {
    "isStructured": true,
    "title": "33. Searching in Arrays",
    "difficulty": "Intermediate",
    "readingTime": "6 min",
    "definition": "Searching is the process of finding the index of a specific element within an array. The two most common algorithms are Linear Search and Binary Search.",
    "whyUseIt": "Whenever you need to check if an item exists in a dataset, or need to retrieve a record based on an ID, searching is required.",
    "syntax": "Arrays.binarySearch(arrayName, key);",
    "codeExample": "import java.util.Arrays;\n\npublic class SearchDemo {\n    public static void main(String[] args) {\n        int[] ids = {501, 102, 305, 908, 404};\n        \n        // 1. Linear Search (Manual - works on unsorted arrays)\n        int target = 305;\n        for (int i = 0; i < ids.length; i++) {\n            if (ids[i] == target) {\n                System.out.println(\"Linear Search: Found at index \" + i);\n                break;\n            }\n        }\n        \n        // 2. Binary Search (Requires sorted array!)\n        Arrays.sort(ids); // Now: {102, 305, 404, 501, 908}\n        int index = Arrays.binarySearch(ids, 305);\n        System.out.println(\"Binary Search: Found at new index \" + index);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Linear Search: Found at index 2\\nBinary Search: Found at new index 1",
    "explanation": [
      {
        "code": "Linear Search",
        "desc": "Checks every element one by one from index 0 to the end. Slow for massive arrays, but works on unsorted data."
      },
      {
        "code": "Binary Search",
        "desc": "Extremely fast. It splits the array in half repeatedly, but the array MUST be sorted first."
      },
      {
        "code": "Arrays.binarySearch()",
        "desc": "Returns the index of the element, or a negative number if it was not found."
      }
    ],
    "realWorldExample": "When you type a word into a digital dictionary app, it uses binary search on a sorted database of words to find the definition in milliseconds.",
    "commonMistakes": [
      {
        "error": "Calling `Arrays.binarySearch()` on an unsorted array. The result is completely unpredictable and will likely fail to find the element.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "For small or unsorted datasets, use a linear loop. For massive datasets, always sort first (or keep it sorted) and use binary search."
    ],
    "practiceExercise": {
      "task": "Write a linear search that checks if the word \"apple\" is in a String array `{\"banana\", \"orange\", \"apple\"}`.",
      "solution": "Found at index 2"
    },
    "interviewQuestions": [
      "What is the time complexity of binary search vs linear search?",
      "What is the fundamental prerequisite for using binary search?",
      "What does `Arrays.binarySearch()` return if the element is not found?"
    ],
    "quiz": [
      {
        "question": "Which search algorithm is generally faster for very large, sorted arrays?",
        "options": [
          "Linear Search",
          "Binary Search",
          "Random Search",
          "Sequential Search"
        ],
        "correctAnswer": "Binary Search"
      }
    ],
    "summary": [
      "Searching is a core programming task. Use simple linear loops for unsorted arrays, and the highly-efficient `Arrays.binarySearch()` for sorted ones."
    ],
    "references": [
      {
        "label": "Binary Search in Java",
        "url": "https://www.geeksforgeeks.org/binary-search/"
      }
    ]
  },
  "java_array_practice_problems": {
    "isStructured": true,
    "title": "34. Array Practice Problems",
    "difficulty": "Intermediate",
    "readingTime": "10 min",
    "definition": "This topic focuses on combining all array concepts (initialization, iteration, sorting, and searching) to solve common algorithmic problems.",
    "whyUseIt": "Solving practice problems builds your logical thinking and prepares you for coding interviews, which heavily feature array manipulations.",
    "syntax": "// Applied logic and algorithms",
    "codeExample": "public class ArrayPractice {\n    public static void main(String[] args) {\n        int[] arr = {23, 56, 12, 89, 43};\n        \n        // Problem 1: Find the Maximum element\n        int max = arr[0];\n        for (int i = 1; i < arr.length; i++) {\n            if (arr[i] > max) {\n                max = arr[i];\n            }\n        }\n        System.out.println(\"Maximum value is: \" + max);\n        \n        // Problem 2: Reverse the array\n        System.out.print(\"Reversed: \");\n        for (int i = arr.length - 1; i >= 0; i--) {\n            System.out.print(arr[i] + \" \");\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Maximum value is: 89\\nReversed: 43 89 12 56 23 ",
    "explanation": [
      {
        "code": "max = arr[i]",
        "desc": "Updates the maximum value if the current element is larger than the previously known maximum."
      },
      {
        "code": "i = arr.length - 1",
        "desc": "The starting condition for a reverse loop. Since arrays are 0-indexed, the last element is always length minus 1."
      }
    ],
    "realWorldExample": "Finding the maximum value in an array is the exact logic used to find the highest scoring player on a leaderboard.",
    "commonMistakes": [
      {
        "error": "Starting a reverse loop at `i = arr.length` instead of `arr.length - 1`, causing an immediate OutOfBounds exception.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Trace your loop logic on paper for the first and last iterations to ensure you don't have off-by-one errors."
    ],
    "practiceExercise": {
      "task": "Write a program to calculate the average (mean) of all elements in an integer array.",
      "solution": "(The calculated average)"
    },
    "interviewQuestions": [
      "How do you find the second largest element in an array?",
      "How do you remove duplicates from an array?",
      "How can you rotate an array by K steps?"
    ],
    "quiz": [
      {
        "question": "In an array of size N, what is the correct condition to iterate from the last element down to the first?",
        "options": [
          "for(int i = N; i > 0; i--)",
          "for(int i = N - 1; i >= 0; i--)",
          "for(int i = N; i >= 0; i--)",
          "for(int i = N - 1; i > 0; i--)"
        ],
        "correctAnswer": "for(int i = N - 1; i >= 0; i--)"
      }
    ],
    "summary": [
      "Mastering arrays requires practice. Operations like finding max/min, reversing, and averaging form the building blocks of more complex algorithms."
    ],
    "references": [
      {
        "label": "Array Questions",
        "url": "https://www.geeksforgeeks.org/array-data-structure/"
      }
    ]
  },
  "java_introduction_to_methods": {
    "isStructured": true,
    "title": "35. Introduction to Methods",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "A method is a block of code which only runs when it is called. You can pass data (parameters) into a method. Methods are used to perform certain actions, and they are also known as functions.",
    "whyUseIt": "Methods promote code reusability. Instead of writing the same code multiple times, you write it once in a method and call it whenever needed.",
    "syntax": "modifier returnType methodName(parameters) {\\n    // method body\\n}",
    "codeExample": "public class Main {\n    // Method definition\n    static void sayHello() {\n        System.out.println(\"Hello, World!\");\n    }\n\n    public static void main(String[] args) {\n        sayHello(); // Method call\n        sayHello(); // Calling it again\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Hello, World!\\nHello, World!",
    "explanation": [
      {
        "code": "static void",
        "desc": "`static` means the method belongs to the Main class and not an object of the Main class. `void` means this method does not return any value."
      },
      {
        "code": "sayHello()",
        "desc": "The name of the method. We call it by writing its name followed by parentheses `()`."
      }
    ],
    "realWorldExample": "Think of a microwave's `start()` button. You press it (call the method), and it runs the sequence to heat food without you needing to know how the wires work inside.",
    "commonMistakes": [
      {
        "error": "Forgetting to write parentheses when calling a method: `sayHello;` instead of `sayHello();`",
        "code": "sayHello;",
        "suffix": "// Error: not a statement"
      }
    ],
    "bestPractices": [
      "Method names should be in camelCase and start with a verb (e.g., `calculateTotal`, `printReport`)."
    ],
    "practiceExercise": {
      "task": "Create a method named `greetUser()` that prints \"Welcome to Java!\". Call it from the `main` method.",
      "solution": "public class Main {\n    static void greetUser() {\n        System.out.println(\"Welcome to Java!\");\n    }\n    public static void main(String[] args) {\n        greetUser();\n    }\n}"
    },
    "interviewQuestions": [
      "What is the difference between a method and a function?",
      "Why do we use the `static` keyword in the `main` method?"
    ],
    "quiz": [
      {
        "question": "Which of the following is the correct way to call a method named `myMethod`?",
        "options": [
          "myMethod;",
          "call myMethod();",
          "myMethod();",
          "myMethod[]"
        ],
        "correctAnswer": "myMethod();"
      }
    ],
    "summary": [
      "Methods are blocks of reusable code.",
      "They help break down complex programs into smaller, manageable chunks."
    ],
    "references": [
      {
        "label": "Java Methods",
        "url": "https://www.w3schools.com/java/java_methods.asp"
      }
    ]
  },
  "java_method_parameters": {
    "isStructured": true,
    "title": "36. Method Parameters",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "Information can be passed to methods as parameter. Parameters act as variables inside the method.",
    "whyUseIt": "Parameters allow you to pass specific data to a method, making it dynamic and flexible rather than hardcoding values.",
    "syntax": "static void myMethod(String name, int age) {\\n    // Use name and age here\\n}",
    "codeExample": "public class Main {\n    static void greet(String name, int age) {\n        System.out.println(\"Hello \" + name + \", you are \" + age + \" years old.\");\n    }\n\n    public static void main(String[] args) {\n        greet(\"Alice\", 25);\n        greet(\"Bob\", 30);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Hello Alice, you are 25 years old.\\nHello Bob, you are 30 years old.",
    "explanation": [
      {
        "code": "String name, int age",
        "desc": "These are parameters. When the method is defined, we specify what type of data it expects to receive."
      },
      {
        "code": "\"Alice\", 25",
        "desc": "These are arguments. This is the actual data passed into the method when it is called."
      }
    ],
    "realWorldExample": "A coffee machine's `makeCoffee(type, size)` method. You pass the type ('Espresso') and size ('Large') as arguments to get your specific coffee.",
    "commonMistakes": [
      {
        "error": "Passing arguments in the wrong order. If a method expects `(String, int)`, passing `(25, \"Alice\")` will cause a compilation error.",
        "code": "greet(25, \"Alice\");",
        "suffix": "// Error: incompatible types"
      }
    ],
    "bestPractices": [
      "Keep the number of parameters small (ideally 3 or fewer) so the method remains easy to read and call."
    ],
    "practiceExercise": {
      "task": "Create a method `printMultiply(int a, int b)` that prints the product of a and b. Call it with 5 and 4.",
      "solution": "public class Main {\n    static void printMultiply(int a, int b) {\n        System.out.println(a * b);\n    }\n    public static void main(String[] args) {\n        printMultiply(5, 4);\n    }\n}"
    },
    "interviewQuestions": [
      "What is the difference between a parameter and an argument in Java?",
      "Can a method have zero parameters?"
    ],
    "quiz": [
      {
        "question": "If a method is defined as `void calc(int x, double y)`, which is a valid call?",
        "options": [
          "calc(10.5, 5);",
          "calc(5, 10.5);",
          "calc(\"5\", 10);",
          "calc(5);"
        ],
        "correctAnswer": "calc(5, 10.5);"
      }
    ],
    "summary": [
      "Parameters allow methods to take inputs.",
      "Parameters are defined in the method signature, while arguments are the actual values passed during the call."
    ],
    "references": [
      {
        "label": "Java Method Parameters",
        "url": "https://www.w3schools.com/java/java_methods_param.asp"
      }
    ]
  },
  "java_return_type": {
    "isStructured": true,
    "title": "37. Return Type",
    "difficulty": "Intermediate",
    "readingTime": "6 min",
    "definition": "The void keyword indicates that a method should not return a value. If you want a method to return a value, you can use a primitive data type (such as int, char, etc.) instead of void, and use the return keyword inside the method.",
    "whyUseIt": "Returning values allows a method to calculate or process data and hand the result back to the caller, so the caller can use that result in further logic.",
    "syntax": "static int add(int x, int y) {\\n    return x + y;\\n}",
    "codeExample": "public class Main {\n    static int addNumbers(int a, int b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        int result = addNumbers(10, 5);\n        System.out.println(\"The sum is: \" + result);\n        \n        // You can also use it directly in expressions\n        System.out.println(\"Double the sum: \" + (addNumbers(10, 5) * 2));\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "The sum is: 15\\nDouble the sum: 30",
    "explanation": [
      {
        "code": "static int",
        "desc": "The `int` specifies that this method will output an integer value when it finishes executing."
      },
      {
        "code": "return",
        "desc": "The keyword used to send the value back to the caller and exit the method."
      }
    ],
    "realWorldExample": "A calculator's `multiply()` function. It doesn't just print the result; it returns the result to the screen so you can use it in your next calculation.",
    "commonMistakes": [
      {
        "error": "Forgetting the `return` statement when a method has a non-void return type, or returning the wrong data type.",
        "code": "static String getName() { return 10; }",
        "suffix": "// Error: incompatible types"
      }
    ],
    "bestPractices": [
      "A method should ideally have a single exit point (one return statement at the end), though early returns are acceptable to avoid deep nesting (guard clauses)."
    ],
    "practiceExercise": {
      "task": "Create a method `isEven(int number)` that returns `true` if the number is even, and `false` otherwise.",
      "solution": "public class Main {\n    static boolean isEven(int number) {\n        return number % 2 == 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(isEven(4)); // true\n        System.out.println(isEven(7)); // false\n    }\n}"
    },
    "interviewQuestions": [
      "Can a method return multiple values in Java?",
      "What happens to code placed immediately after a return statement?"
    ],
    "quiz": [
      {
        "question": "What is the output type of a method defined as `static double getPrice()`?",
        "options": [
          "void",
          "int",
          "double",
          "String"
        ],
        "correctAnswer": "double"
      }
    ],
    "summary": [
      "Return types allow methods to give data back to the caller.",
      "The `void` type means nothing is returned.",
      "Use the `return` keyword to send a value back."
    ],
    "references": [
      {
        "label": "Oracle: Returning a Value",
        "url": "https://docs.oracle.com/javase/tutorial/java/javaOO/returnvalue.html"
      }
    ]
  },
  "java_method_overloading": {
    "isStructured": true,
    "title": "38. Method Overloading",
    "difficulty": "Intermediate",
    "readingTime": "6 min",
    "definition": "Method overloading is a feature that allows a class to have more than one method having the same name, as long as their parameter lists are different.",
    "whyUseIt": "It increases the readability of the program. Instead of defining `addInts()`, `addDoubles()`, and `addThreeInts()`, you can just use `add()` for all of them.",
    "syntax": "int add(int a, int b) { ... }\\ndouble add(double a, double b) { ... }",
    "codeExample": "public class MathUtils {\n    // Method 1: Adds two integers\n    static int add(int a, int b) {\n        return a + b;\n    }\n    \n    // Method 2: Adds three integers (different number of parameters)\n    static int add(int a, int b, int c) {\n        return a + b + c;\n    }\n    \n    // Method 3: Adds two doubles (different data types)\n    static double add(double a, double b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(add(5, 5));          // Calls Method 1\n        System.out.println(add(5, 5, 5));       // Calls Method 2\n        System.out.println(add(2.5, 3.5));      // Calls Method 3\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "10\\n15\\n6.0",
    "explanation": [
      {
        "code": "Overloading by type",
        "desc": "Java knows to call Method 3 when we pass decimals (doubles) instead of integers."
      },
      {
        "code": "Overloading by count",
        "desc": "Java knows to call Method 2 when we pass three arguments instead of two."
      }
    ],
    "realWorldExample": "The `System.out.println()` method is overloaded. You can pass it a String, an int, a boolean, or an object. You don't have to call `printString()`, `printInt()`, etc.",
    "commonMistakes": [
      {
        "error": "Trying to overload a method by only changing its return type. Java does not allow this because the compiler cannot determine which method to call.",
        "code": "int get() {return 1;} \\ndouble get() {return 1.5;}",
        "suffix": "// Error: method get() is already defined"
      }
    ],
    "bestPractices": [
      "Overload methods only when they perform the exact same semantic task but on different data types."
    ],
    "practiceExercise": {
      "task": "Create a class with two overloaded methods named `multiply`. One multiplies two ints, the other multiplies two doubles.",
      "solution": "class Multiplier {\n    static int multiply(int a, int b) {\n        return a * b;\n    }\n    static double multiply(double a, double b) {\n        return a * b;\n    }\n}"
    },
    "interviewQuestions": [
      "Can we overload methods by changing only the return type?",
      "Is method overloading an example of compile-time or run-time polymorphism?"
    ],
    "quiz": [
      {
        "question": "Which of the following is NOT a valid way to overload a method?",
        "options": [
          "Change the number of parameters",
          "Change the data types of parameters",
          "Change the order of parameters",
          "Change only the return type"
        ],
        "correctAnswer": "Change only the return type"
      }
    ],
    "summary": [
      "Method overloading allows multiple methods to share the same name.",
      "They must have different parameter lists (number of params, data types, or sequence).",
      "It represents Compile-Time Polymorphism."
    ],
    "references": [
      {
        "label": "GeeksforGeeks: Method Overloading",
        "url": "https://www.geeksforgeeks.org/method-overloading-in-java/"
      }
    ]
  },
  "java_recursion": {
    "isStructured": true,
    "title": "39. Recursion",
    "difficulty": "Advanced",
    "readingTime": "8 min",
    "definition": "Recursion is the technique of making a function call itself. This technique provides a way to break complicated problems down into simple problems which are easier to solve.",
    "whyUseIt": "It is extremely useful for mathematical problems (like factorials or Fibonacci sequences) and traversing complex data structures like Trees and Graphs.",
    "syntax": "void myMethod() {\\n    myMethod(); // Calls itself\\n}",
    "codeExample": "public class RecursionExample {\n    // Method to calculate factorial (e.g., 5! = 5 * 4 * 3 * 2 * 1)\n    static int factorial(int n) {\n        // Base case (stopping condition)\n        if (n == 0 || n == 1) {\n            return 1;\n        }\n        // Recursive call\n        return n * factorial(n - 1);\n    }\n\n    public static void main(String[] args) {\n        int result = factorial(5);\n        System.out.println(\"Factorial of 5 is: \" + result);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Factorial of 5 is: 120",
    "explanation": [
      {
        "code": "Base Case",
        "desc": "`if (n == 0 || n == 1)` - Every recursive function MUST have a condition that stops it from calling itself infinitely."
      },
      {
        "code": "Recursive Call",
        "desc": "`n * factorial(n - 1)` - The method calls itself with a slightly smaller/simpler input."
      }
    ],
    "realWorldExample": "Navigating a folder structure on your computer. If you open a folder and find a sub-folder, you run the 'search folder' process on that sub-folder recursively until you hit a file (base case).",
    "commonMistakes": [
      {
        "error": "Forgetting the base case, which results in infinite recursion and eventually a `StackOverflowError`.",
        "code": "void run() { run(); }",
        "suffix": "// Causes StackOverflowError"
      }
    ],
    "bestPractices": [
      "Always define the base case before writing the recursive step to ensure the recursion will always terminate."
    ],
    "practiceExercise": {
      "task": "Write a recursive method that calculates the sum of numbers from 1 to N. Example: sum(5) = 5 + 4 + 3 + 2 + 1.",
      "solution": "static int sum(int n) {\n    if (n == 1) return 1;\n    return n + sum(n - 1);\n}"
    },
    "interviewQuestions": [
      "What is a StackOverflowError and how does recursion cause it?",
      "What is the difference between recursion and iteration?",
      "What is tail recursion?"
    ],
    "quiz": [
      {
        "question": "What is the critical component that stops a recursive method from running infinitely?",
        "options": [
          "The recursive call",
          "The return statement",
          "The base case",
          "The compiler"
        ],
        "correctAnswer": "The base case"
      }
    ],
    "summary": [
      "Recursion is when a method calls itself.",
      "Every recursive method requires a 'base case' to terminate.",
      "It's elegant for math and trees, but uses more memory than standard loops."
    ],
    "references": [
      {
        "label": "W3Schools: Java Recursion",
        "url": "https://www.w3schools.com/java/java_recursion.asp"
      }
    ]
  },
  "java_variable_scope": {
    "isStructured": true,
    "title": "40. Variable Scope",
    "difficulty": "Beginner",
    "readingTime": "4 min",
    "definition": "In Java, variables are only accessible inside the region they are created. This is called scope.",
    "whyUseIt": "Scope prevents naming conflicts (you can have an `x` in two different methods safely) and helps manage memory by destroying variables once they are out of scope.",
    "syntax": "{\\n    int x = 10; // x exists in these braces\\n}",
    "codeExample": "public class ScopeExample {\n    \n    // Class/Global scope variable\n    static int classLevel = 100;\n\n    public static void main(String[] args) {\n        // Method scope variable\n        int methodLevel = 50;\n        \n        if (true) {\n            // Block scope variable\n            int blockLevel = 10;\n            System.out.println(blockLevel);   // Works\n            System.out.println(methodLevel);  // Works (child can see parent)\n            System.out.println(classLevel);   // Works\n        }\n        \n        // System.out.println(blockLevel); // ERROR: blockLevel is out of scope here!\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "10\\n50\\n100",
    "explanation": [
      {
        "code": "Block Scope",
        "desc": "Variables declared inside `{ }` blocks (like `if` or `for` loops) only exist within those specific braces."
      },
      {
        "code": "Method Scope",
        "desc": "Variables declared directly inside a method exist anywhere within that method, but not outside of it."
      }
    ],
    "realWorldExample": "Think of scope like a house. A global variable is the TV in the living room (everyone sees it). A block variable is a diary in someone's private bedroom (only accessible within that room).",
    "commonMistakes": [
      {
        "error": "Trying to access a variable declared inside a `for` loop outside of that loop.",
        "code": "for(int i=0; i<5; i++){ } \nSystem.out.print(i);",
        "suffix": "// Error: cannot find symbol 'i'"
      }
    ],
    "bestPractices": [
      "Always declare variables in the narrowest scope possible. Don't declare a class variable if it's only needed inside one method."
    ],
    "practiceExercise": {
      "task": "Identify why this code fails: `if(true){ int count = 5; } System.out.print(count);`",
      "solution": "The variable `count` is declared inside the `if` block, so it is destroyed as soon as the block ends. It cannot be printed outside."
    },
    "interviewQuestions": [
      "What is the difference between local, instance, and static variables?",
      "Can a child block shadow a variable from a parent block in Java?"
    ],
    "quiz": [
      {
        "question": "Where is a variable accessible if it is declared inside a `while` loop?",
        "options": [
          "Anywhere in the class",
          "Anywhere in the method",
          "Only inside the while loop",
          "Nowhere"
        ],
        "correctAnswer": "Only inside the while loop"
      }
    ],
    "summary": [
      "Scope determines the visibility of variables.",
      "Block scope is limited by curly braces `{}`.",
      "Variables are destroyed in memory when they go out of scope."
    ],
    "references": [
      {
        "label": "Java Scope",
        "url": "https://www.w3schools.com/java/java_scope.asp"
      }
    ]
  }
};
