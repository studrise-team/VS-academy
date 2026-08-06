export const javaContentBatch1 = {
  "java_introduction_to_java": {
    "isStructured": true,
    "title": "1. Introduction to Java",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA).",
    "whyUseIt": "Platform Independence, Object-Oriented structure, Strong memory management (Garbage Collection), Secure, and massive community support.",
    "syntax": "public class Main {\\n    public static void main(String[] args) {\\n        // Code goes here\\n    }\\n}",
    "codeExample": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Welcome to Java!\");\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Welcome to Java!",
    "explanation": [
      {
        "code": "public class Main",
        "desc": "Declares a class named Main. In Java, all code must be inside a class."
      },
      {
        "code": "public static void main(String[] args)",
        "desc": "The main method where the program starts executing."
      },
      {
        "code": "System.out.println()",
        "desc": "Prints text to the console."
      }
    ],
    "realWorldExample": "Java is used extensively in enterprise software, Android mobile app development, financial services (like ATMs), and big data technologies (like Hadoop).",
    "commonMistakes": [
      {
        "error": "Forgetting semicolons at the end of statements.\\n❌ Misspelling keywords (e.g., writing Public instead of public).",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Always name your classes starting with a Capital letter (PascalCase).\\nKeep your file name the same as your public class name."
    ],
    "practiceExercise": {
      "task": "Write a program to print your name and your favorite programming language on two separate lines.",
      "solution": "John Doe\\nJava"
    },
    "interviewQuestions": [
      "What is Java?",
      "Why is Java considered platform-independent?",
      "What is the meaning of Write Once, Run Anywhere (WORA)?"
    ],
    "quiz": [
      {
        "question": "Which method is the entry point for any Java program?",
        "options": [
          "start()",
          "init()",
          "main()",
          "run()"
        ],
        "correctAnswer": "main()"
      }
    ],
    "summary": [
      "Java is a powerful, object-oriented, and platform-independent language used across many industries. Every Java application begins with a class and a main method."
    ],
    "references": [
      {
        "label": "Oracle Java Docs",
        "url": "https://docs.oracle.com/en/java/"
      }
    ]
  },
  "java_history_of_java": {
    "isStructured": true,
    "title": "2. History of Java",
    "difficulty": "Beginner",
    "readingTime": "4 min",
    "definition": "Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle) and released in 1995. It was originally called \"Oak\".",
    "whyUseIt": "Understanding the history helps developers appreciate the design decisions of Java, such as its focus on platform independence and security for the early web.",
    "syntax": "// Not applicable for history",
    "codeExample": "// First versions of Java focused heavily on Applets\npublic class HistoryFact {\n    public static void main(String[] args) {\n        System.out.println(\"Java was released in 1995 by Sun Microsystems.\");\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Java was released in 1995 by Sun Microsystems.",
    "explanation": [
      {
        "code": "James Gosling",
        "desc": "Known as the father of Java."
      },
      {
        "code": "Oak",
        "desc": "The original name of the Java programming language."
      }
    ],
    "realWorldExample": "Java was initially designed for interactive television, but it was too advanced for the digital cable television industry at the time. It instead found its home on the World Wide Web.",
    "commonMistakes": [
      {
        "error": "Confusing Java with JavaScript (they are completely different languages).",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Stay updated with the latest Long-Term Support (LTS) releases of Java (e.g., Java 8, 11, 17, 21)."
    ],
    "practiceExercise": {
      "task": "Print the name of the creator of Java and the year it was created.",
      "solution": "Creator: James Gosling\\nYear: 1995"
    },
    "interviewQuestions": [
      "Who invented Java?",
      "What was the original name of Java?",
      "Is Java related to JavaScript?"
    ],
    "quiz": [
      {
        "question": "Who is known as the father of Java?",
        "options": [
          "Bjarne Stroustrup",
          "Dennis Ritchie",
          "James Gosling",
          "Guido van Rossum"
        ],
        "correctAnswer": "James Gosling"
      }
    ],
    "summary": [
      "Created in 1995 by James Gosling at Sun Microsystems, Java has evolved from a language for interactive TV to one of the most popular enterprise programming languages in the world."
    ],
    "references": [
      {
        "label": "History of Java (Oracle)",
        "url": "https://www.oracle.com/java/technologies/java-history.html"
      }
    ]
  },
  "java_features_of_java": {
    "isStructured": true,
    "title": "3. Features of Java",
    "difficulty": "Beginner",
    "readingTime": "6 min",
    "definition": "Features of Java (often called Java Buzzwords) highlight the key capabilities of the language, such as Object-Oriented, Simple, Secure, Platform-Independent, Robust, Portable, and Multithreaded.",
    "whyUseIt": "Knowing the features helps you decide when to use Java for a project. For instance, if you need secure, cross-platform enterprise software, Java is a top choice.",
    "syntax": "// Concept-based topic",
    "codeExample": "public class FeatureDemo {\n    public static void main(String[] args) {\n        String[] features = {\"Simple\", \"Object-Oriented\", \"Portable\", \"Platform Independent\", \"Secured\", \"Robust\", \"Architecture Neutral\", \"Interpreted\", \"High Performance\", \"Multithreaded\", \"Distributed\", \"Dynamic\"};\n        \n        System.out.println(\"Key feature: \" + features[3]);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Key feature: Platform Independent",
    "explanation": [
      {
        "code": "Platform Independent",
        "desc": "Code compiled on one OS can run on any other OS with a JVM."
      },
      {
        "code": "Robust",
        "desc": "Strong memory management and automatic garbage collection."
      },
      {
        "code": "Secure",
        "desc": "No explicit pointers, and programs run inside a virtual machine sandbox."
      }
    ],
    "realWorldExample": "Because Java is secure and robust, it is widely used in banking applications (like Goldman Sachs and Citigroup) for transaction processing.",
    "commonMistakes": [
      {
        "error": "Assuming Java is purely interpreted. It is actually compiled to bytecode, and then the JVM interprets (or JIT compiles) that bytecode.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Leverage Java's object-oriented features to write modular and reusable code."
    ],
    "practiceExercise": {
      "task": "Write a program that prints exactly 3 features of Java.",
      "solution": "1. Secure\\n2. Portable\\n3. Object-Oriented"
    },
    "interviewQuestions": [
      "What are the main features of Java?",
      "Why is Java considered a robust language?",
      "How does Java achieve security?"
    ],
    "quiz": [
      {
        "question": "Which of the following is NOT a feature of Java?",
        "options": [
          "Object-Oriented",
          "Use of pointers",
          "Portable",
          "Dynamic"
        ],
        "correctAnswer": "Use of pointers"
      }
    ],
    "summary": [
      "Java is known for its buzzwords: Simple, Object-Oriented, Robust, Secure, and Platform-Independent, making it versatile for many applications."
    ],
    "references": [
      {
        "label": "Java Features",
        "url": "https://www.javatpoint.com/features-of-java"
      }
    ]
  },
  "java_java_architecture_jdk_jre_jvm": {
    "isStructured": true,
    "title": "4. Java Architecture (JDK, JRE, JVM)",
    "difficulty": "Intermediate",
    "readingTime": "8 min",
    "definition": "Java Architecture consists of three main components: JDK (Java Development Kit), JRE (Java Runtime Environment), and JVM (Java Virtual Machine).",
    "whyUseIt": "Understanding these components is essential for troubleshooting Java execution and knowing what tools you need to build vs. run Java applications.",
    "syntax": "JDK = JRE + Development Tools\\nJRE = JVM + Library Classes",
    "codeExample": "public class Architecture {\n    public static void main(String[] args) {\n        System.out.println(\"JVM executes the bytecode.\");\n        System.out.println(\"JRE provides the environment to run the JVM.\");\n        System.out.println(\"JDK provides tools like javac to compile code.\");\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "JVM executes the bytecode.\\nJRE provides the environment to run the JVM.\\nJDK provides tools like javac to compile code.",
    "explanation": [
      {
        "code": "JVM",
        "desc": "An abstract machine that provides a runtime environment in which Java bytecode can be executed. It is platform-dependent."
      },
      {
        "code": "JRE",
        "desc": "The implementation of JVM. It physically exists and contains a set of libraries and other files that JVM uses at runtime."
      },
      {
        "code": "JDK",
        "desc": "A software development environment used to develop Java applications and applets. It physically exists."
      }
    ],
    "realWorldExample": "If you want to play a Java game on your PC, you only need the JRE. If you want to build a Java game, you need the JDK.",
    "commonMistakes": [
      {
        "error": "Confusing JVM with JDK. You cannot compile code with just the JVM/JRE.\\n❌ Thinking the JVM is platform-independent. The JVM is specific to the OS (Windows JVM, Mac JVM), but it makes the Java bytecode platform-independent.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Ensure your JDK version matches the target JRE version of your deployment environment to avoid \"UnsupportedClassVersionError\"."
    ],
    "practiceExercise": {
      "task": "Write a print statement that explains what JDK stands for.",
      "solution": "JDK stands for Java Development Kit."
    },
    "interviewQuestions": [
      "What is the difference between JDK, JRE, and JVM?",
      "Is JVM platform-independent?",
      "What does JIT stand for in JVM?"
    ],
    "quiz": [
      {
        "question": "Which component is responsible for converting bytecode into machine-specific code?",
        "options": [
          "JDK",
          "JRE",
          "JVM",
          "Javac"
        ],
        "correctAnswer": "JVM"
      }
    ],
    "summary": [
      "The JDK is used to develop Java apps, the JRE provides the libraries to run them, and the JVM actually executes the compiled bytecode."
    ],
    "references": [
      {
        "label": "Oracle JVM Docs",
        "url": "https://docs.oracle.com/en/java/javase/17/vm/index.html"
      }
    ]
  },
  "java_installing_java": {
    "isStructured": true,
    "title": "5. Installing Java",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "Installing Java means downloading and configuring the JDK (Java Development Kit) on your operating system so you can write and compile Java code.",
    "whyUseIt": "You cannot develop or compile Java applications on your computer without installing the JDK and setting up the environment variables.",
    "syntax": "java -version\\njavac -version",
    "codeExample": "// Open your terminal or command prompt and type:\n// java -version\n// If installed correctly, you will see output similar to:\n// java version \"17.0.1\" 2021-10-19 LTS",
    "hasLiveOutput": false,
    "expectedOutput": "java version \"17.0.1\" 2021-10-19 LTS",
    "explanation": [
      {
        "code": "java -version",
        "desc": "Checks if the JRE/JVM is installed and available in the system PATH."
      },
      {
        "code": "javac -version",
        "desc": "Checks if the Java compiler (from the JDK) is installed."
      }
    ],
    "realWorldExample": "When setting up a new developer laptop at a company, the first step is usually installing the JDK and setting the JAVA_HOME environment variable.",
    "commonMistakes": [
      {
        "error": "Installing only the JRE when you need to write code (you need the JDK).\\n❌ Forgetting to add the JDK bin directory to the system PATH variable on Windows.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Set the JAVA_HOME environment variable to point to your JDK installation directory. This is required by many build tools like Maven and Gradle."
    ],
    "practiceExercise": {
      "task": "Open your terminal/command prompt and run `java -version`. Write down the version you have.",
      "solution": "java version \"xx.x.x\""
    },
    "interviewQuestions": [
      "What is the purpose of the JAVA_HOME environment variable?",
      "What happens if the JDK bin folder is not in the system PATH?"
    ],
    "quiz": [
      {
        "question": "Which command is used to check the version of the Java compiler?",
        "options": [
          "java -version",
          "javac -version",
          "java --version",
          "compiler -v"
        ],
        "correctAnswer": "javac -version"
      }
    ],
    "summary": [
      "Installing the JDK and setting the PATH variables are the first critical steps to starting Java development on any machine."
    ],
    "references": [
      {
        "label": "Download Java",
        "url": "https://www.oracle.com/java/technologies/downloads/"
      }
    ]
  },
  "java_installing_vs_code_intellij_idea": {
    "isStructured": true,
    "title": "6. Installing VS Code / IntelliJ IDEA",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "An IDE (Integrated Development Environment) like IntelliJ IDEA or an editor like VS Code provides tools to write, debug, and run Java code efficiently.",
    "whyUseIt": "While you can write Java in Notepad, IDEs provide syntax highlighting, code completion, error detection, and built-in terminals, saving massive amounts of time.",
    "syntax": "// IDE setup concept",
    "codeExample": "// Once installed, you can simply click \"Run\" in IntelliJ or VS Code.\npublic class IDETest {\n    public static void main(String[] args) {\n        System.out.println(\"Hello from my new IDE!\");\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Hello from my new IDE!",
    "explanation": [
      {
        "code": "IntelliJ IDEA",
        "desc": "A powerful, industry-standard IDE specifically built for Java by JetBrains."
      },
      {
        "code": "VS Code",
        "desc": "A lightweight code editor by Microsoft that supports Java via extensions."
      },
      {
        "code": "Extension Pack for Java",
        "desc": "The required extension in VS Code to run Java."
      }
    ],
    "realWorldExample": "Professional Java developers almost exclusively use IntelliJ IDEA, Eclipse, or VS Code to manage massive projects containing thousands of files.",
    "commonMistakes": [
      {
        "error": "Trying to run a Java file in VS Code without installing the \"Extension Pack for Java\".\\n❌ Not having the JDK installed before setting up the IDE.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Learn your IDEs keyboard shortcuts (like formatting code, auto-importing classes, and running the file) to code much faster."
    ],
    "practiceExercise": {
      "task": "Install IntelliJ IDEA Community Edition or VS Code, write a basic Hello World program, and click the Run button.",
      "solution": "Hello World printed in the IDE console window."
    },
    "interviewQuestions": [
      "What is an IDE?",
      "Name two popular IDEs for Java development.",
      "Why is an IDE preferred over a simple text editor?"
    ],
    "quiz": [
      {
        "question": "Which company developed IntelliJ IDEA?",
        "options": [
          "Microsoft",
          "Oracle",
          "JetBrains",
          "Eclipse Foundation"
        ],
        "correctAnswer": "JetBrains"
      }
    ],
    "summary": [
      "Installing a robust IDE like IntelliJ IDEA or configuring VS Code transforms the development experience with intelligent code completion and debugging."
    ],
    "references": [
      {
        "label": "IntelliJ IDEA",
        "url": "https://www.jetbrains.com/idea/"
      },
      {
        "label": "Java in VS Code",
        "url": "https://code.visualstudio.com/docs/java/java-tutorial"
      }
    ]
  },
  "java_writing_your_first_java_program": {
    "isStructured": true,
    "title": "7. Writing Your First Java Program",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "Writing your first program typically involves creating a class, adding a main method, and printing text to the screen.",
    "whyUseIt": "It confirms that your JDK and IDE are installed correctly and introduces you to the basic syntax requirements of the language.",
    "syntax": "public class ClassName {\\n    public static void main(String[] args) {\\n        // statements;\\n    }\\n}",
    "codeExample": "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"My first Java program is running!\");\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "My first Java program is running!",
    "explanation": [
      {
        "code": "public",
        "desc": "An access modifier that allows the class or method to be accessible everywhere."
      },
      {
        "code": "class",
        "desc": "Keyword used to declare a class in Java."
      },
      {
        "code": "static",
        "desc": "Allows the main method to be called without having to instantiate the class."
      },
      {
        "code": "void",
        "desc": "Indicates that the main method does not return any value."
      }
    ],
    "realWorldExample": "Every large-scale application, from Minecraft to enterprise banking software, relies on this exact structural entry point (`public static void main`) to start the application.",
    "commonMistakes": [
      {
        "error": "Forgetting the `String[] args` inside the main method.\\n❌ Naming the file `helloworld.java` when the class is `HelloWorld` (case sensitivity matters).",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Always properly indent your code (using tabs or 4 spaces) inside the class and method blocks for readability."
    ],
    "practiceExercise": {
      "task": "Write a Java program that prints \"Learning Java is fun!\"",
      "solution": "Learning Java is fun!"
    },
    "interviewQuestions": [
      "Why is the main method static in Java?",
      "What happens if you remove the String[] args from the main method?"
    ],
    "quiz": [
      {
        "question": "What is the correct signature of the main method in Java?",
        "options": [
          "public void main(String[] args)",
          "static void main(String args)",
          "public static void main(String[] args)",
          "public static int main(String[] args)"
        ],
        "correctAnswer": "public static void main(String[] args)"
      }
    ],
    "summary": [
      "Your first Java program introduces the basic skeleton required by the language: a public class and a public static void main method."
    ],
    "references": [
      {
        "label": "First Java Program (W3Schools)",
        "url": "https://www.w3schools.com/java/java_getstarted.asp"
      }
    ]
  },
  "java_java_program_structure": {
    "isStructured": true,
    "title": "8. Java Program Structure",
    "difficulty": "Beginner",
    "readingTime": "6 min",
    "definition": "A typical Java program structure consists of a package declaration, import statements, a class declaration, and methods (including the main method).",
    "whyUseIt": "Understanding the structure ensures you put code in the correct places, avoiding compilation errors related to misplaced imports or class definitions.",
    "syntax": "package packageName;\\nimport packageName.ClassName;\\npublic class ClassName {\\n    // variables\\n    // methods\\n}",
    "codeExample": "package com.example.demo;\n\nimport java.util.Scanner;\n\npublic class StructureDemo {\n    // Class variable\n    static String message = \"Structure is important!\";\n\n    // Main method\n    public static void main(String[] args) {\n        System.out.println(message);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Structure is important!",
    "explanation": [
      {
        "code": "package",
        "desc": "Groups related classes together. Must be the first line in the file."
      },
      {
        "code": "import",
        "desc": "Brings in classes from other packages (like java.util.Scanner)."
      },
      {
        "code": "class",
        "desc": "The blueprint where logic and data are defined."
      }
    ],
    "realWorldExample": "In a large web application, you might have `package com.company.controllers;` for API routes and `package com.company.models;` for database tables to keep things organized.",
    "commonMistakes": [
      {
        "error": "Placing an import statement before the package declaration.\\n❌ Writing method logic directly inside the class body outside of any method.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Keep one public class per file. Organize files into meaningful packages (like reverse domain names e.g., com.yourcompany.app)."
    ],
    "practiceExercise": {
      "task": "Write a complete file structure that includes a package named `com.practice`, an import for `java.util.Random`, and a main class.",
      "solution": "(Code compiles successfully)"
    },
    "interviewQuestions": [
      "What is the purpose of the package statement?",
      "Can we have multiple public classes in a single Java file?",
      "What is the correct order of package, import, and class declarations?"
    ],
    "quiz": [
      {
        "question": "Which statement must be the very first line of code in a Java file (ignoring comments)?",
        "options": [
          "import statement",
          "class declaration",
          "package statement",
          "main method"
        ],
        "correctAnswer": "package statement"
      }
    ],
    "summary": [
      "A well-structured Java file begins with a package, followed by imports, the class definition, and finally the methods and variables."
    ],
    "references": [
      {
        "label": "Java Packages (Oracle)",
        "url": "https://docs.oracle.com/javase/tutorial/java/concepts/package.html"
      }
    ]
  },
  "java_compilation_execution_process": {
    "isStructured": true,
    "title": "9. Compilation & Execution Process",
    "difficulty": "Intermediate",
    "readingTime": "7 min",
    "definition": "In Java, source code (.java) is first compiled into bytecode (.class) by the compiler (javac). Then, the JVM interprets or JIT compiles this bytecode to run on the host machine.",
    "whyUseIt": "Knowing this process helps you understand how Java achieves platform independence and helps in debugging \"Class Not Found\" or compilation errors.",
    "syntax": "javac FileName.java\\njava FileName",
    "codeExample": "// 1. Write this in a file named Hello.java\npublic class Hello {\n    public static void main(String[] args) {\n        System.out.println(\"Hello Compilation!\");\n    }\n}\n// 2. Compile in terminal: javac Hello.java (produces Hello.class)\n// 3. Run in terminal: java Hello",
    "hasLiveOutput": false,
    "expectedOutput": "Hello Compilation!",
    "explanation": [
      {
        "code": "javac",
        "desc": "The Java compiler that translates readable source code into JVM-understandable bytecode."
      },
      {
        "code": ".class file",
        "desc": "The file containing the compiled bytecode."
      },
      {
        "code": "java",
        "desc": "The command that launches the JVM to execute the .class file."
      }
    ],
    "realWorldExample": "When you download a Minecraft mod, you are downloading a .jar file, which is just a ZIP archive of hundreds of compiled .class files ready to be executed by your JVM.",
    "commonMistakes": [
      {
        "error": "Typing `java Hello.class` instead of `java Hello` to run the program.\\n❌ Forgetting to recompile (`javac`) after making changes to the source code.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "In modern development, use build tools like Maven or Gradle which handle the compilation, testing, and packaging process automatically."
    ],
    "practiceExercise": {
      "task": "Create `Test.java`, write a print statement, compile it using `javac`, and run it using `java` in your terminal.",
      "solution": "(Your print statement text)"
    },
    "interviewQuestions": [
      "What is bytecode in Java?",
      "How does Java achieve Write Once, Run Anywhere?",
      "What is the JIT compiler?"
    ],
    "quiz": [
      {
        "question": "Which tool is used to compile Java source code?",
        "options": [
          "java",
          "jvm",
          "javac",
          "javap"
        ],
        "correctAnswer": "javac"
      }
    ],
    "summary": [
      "Java is a two-stage language: it is compiled into bytecode by `javac` and then interpreted/executed by the JVM using the `java` command."
    ],
    "references": [
      {
        "label": "How Java Works",
        "url": "https://www.geeksforgeeks.org/how-java-works/"
      }
    ]
  },
  "java_variables": {
    "isStructured": true,
    "title": "10. Variables",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "Variables are named memory locations used to store data. They allow programs to save information such as numbers, text, and boolean values.",
    "whyUseIt": "Store user input, Perform calculations, Save temporary data, Improve code readability",
    "syntax": "datatype variableName = value;",
    "codeExample": "public class Main {\n    public static void main(String[] args) {\n\n        int age = 21;\n        String name = \"Rahul\";\n\n        System.out.println(name);\n        System.out.println(age);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Rahul\n21",
    "explanation": [
      {
        "code": "int",
        "desc": "stores integer values."
      },
      {
        "code": "String",
        "desc": "stores text."
      },
      {
        "code": "age and name",
        "desc": "are variable names."
      },
      {
        "code": "System.out.println()",
        "desc": "prints values to the console."
      }
    ],
    "realWorldExample": "An online shopping application stores Customer Name, Product Price, Quantity, and Order ID using variables before saving them to the database.",
    "commonMistakes": [
      {
        "error": "Using reserved keywords as variable names (e.g., int class = 10;)",
        "code": "",
        "suffix": ""
      },
      {
        "error": "Using variables before initialization (e.g., int age; System.out.println(age);)",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Use meaningful names (studentName instead of x).",
      "Follow camelCase naming convention.",
      "Initialize variables before use.",
      "Choose appropriate data types."
    ],
    "practiceExercise": {
      "task": "Create a program that stores Your Name, College Name, Age, and CGPA and prints them.",
      "solution": "Name : Rahul\nCollege : ABC Engineering College\nAge : 21\nCGPA : 8.9"
    },
    "interviewQuestions": [
      "What is a variable?",
      "What is the difference between declaration and initialization?",
      "Can a variable name start with a number?",
      "What are the naming conventions in Java?",
      "What is the default value of local variables?"
    ],
    "quiz": [
      {
        "question": "Which keyword is used to declare an integer variable?",
        "options": [
          "string",
          "int",
          "integer",
          "number"
        ],
        "correctAnswer": "int"
      }
    ],
    "summary": [
      "Variables are essential for storing data in Java. Always declare them with the appropriate type and initialize them before use."
    ],
    "references": [
      {
        "label": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "label": "W3Schools Java",
        "url": "https://www.w3schools.com/java/"
      },
      {
        "label": "GeeksforGeeks Java",
        "url": "https://www.geeksforgeeks.org/java/"
      }
    ]
  }
};
