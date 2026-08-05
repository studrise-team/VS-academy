export const javaContentBatch5 = {
  "java_introduction_to_oop": {
    "isStructured": true,
    "title": "41. Introduction to OOP",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects', which can contain data (attributes) and code (methods). The four main pillars of OOP are Abstraction, Encapsulation, Inheritance, and Polymorphism.",
    "whyUseIt": "OOP makes code easier to maintain, modify, and debug. It allows you to model real-world entities and reuse code efficiently.",
    "syntax": "class ClassName {\n    // Fields (state)\n    // Methods (behavior)\n}",
    "codeExample": "// A simple conceptual representation\nclass Car {\n    String color; // Attribute\n    \n    void drive() { // Method\n        System.out.println(\"The car is driving.\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(); // Object creation\n        myCar.drive();\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "The car is driving.",
    "explanation": [
      {
        "code": "class Car",
        "desc": "A blueprint for creating Car objects."
      },
      {
        "code": "new Car()",
        "desc": "Creates a specific instance (object) based on the Car blueprint."
      }
    ],
    "realWorldExample": "Think of a blueprint for a house. The blueprint is the 'Class'. The actual houses built from that blueprint are the 'Objects'.",
    "commonMistakes": [
      {
        "error": "Confusing a class with an object. A class is a template; an object is a physical instance of that template.",
        "code": "Car.drive();",
        "suffix": "// Error: non-static method drive() cannot be referenced from a static context"
      }
    ],
    "bestPractices": [
      "Use noun names for classes (e.g., `Customer`, `BankAccount`) and verb names for methods (e.g., `withdraw`, `deposit`)."
    ],
    "practiceExercise": {
      "task": "Create a class `Dog` with a method `bark()` that prints 'Woof!'. Instantiate it and call the method.",
      "solution": "class Dog {\n    void bark() {\n        System.out.println(\"Woof!\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Dog myDog = new Dog();\n        myDog.bark();\n    }\n}"
    },
    "interviewQuestions": [
      "What are the four pillars of Object-Oriented Programming?",
      "Why is Java considered an Object-Oriented language?"
    ],
    "quiz": [
      {
        "question": "Which of the following is NOT one of the 4 main pillars of OOP?",
        "options": [
          "Polymorphism",
          "Encapsulation",
          "Compilation",
          "Inheritance"
        ],
        "correctAnswer": "Compilation"
      }
    ],
    "summary": [
      "OOP organizes software design around data, or objects, rather than functions and logic.",
      "A Class is a blueprint, and an Object is an instance of a Class."
    ],
    "references": [
      {
        "label": "OOP Concepts",
        "url": "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/"
      }
    ]
  },
  "java_classes_objects": {
    "isStructured": true,
    "title": "42. Classes & Objects",
    "difficulty": "Beginner",
    "readingTime": "6 min",
    "definition": "A Class is a user-defined blueprint or prototype from which objects are created. An Object is a basic unit of OOP and represents the real-life entities. It has state (fields) and behavior (methods).",
    "whyUseIt": "Classes and objects are the fundamental building blocks of Java. You cannot write a Java program without using at least one class.",
    "syntax": "ClassName objectName = new ClassName();",
    "codeExample": "class Student {\n    int id;\n    String name;\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Creating an object of Student\n        Student s1 = new Student();\n        \n        // Accessing object attributes\n        s1.id = 101;\n        s1.name = \"John Doe\";\n        \n        System.out.println(\"Student ID: \" + s1.id);\n        System.out.println(\"Student Name: \" + s1.name);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Student ID: 101\nStudent Name: John Doe",
    "explanation": [
      {
        "code": "new",
        "desc": "The `new` keyword is used to allocate memory at runtime for the object."
      },
      {
        "code": "s1.name",
        "desc": "The dot `.` operator is used to access the attributes and methods of an object."
      }
    ],
    "realWorldExample": "A `BankAccount` class defines what a bank account is (balance, account number). When you open an account at the bank, an object of `BankAccount` is created specifically for you.",
    "commonMistakes": [
      {
        "error": "Trying to use an object without initializing it with the `new` keyword. This results in a NullPointerException.",
        "code": "Student s1;\ns1.id = 101;",
        "suffix": "// NullPointerException"
      }
    ],
    "bestPractices": [
      "Keep classes focused on a single responsibility. A `Student` class shouldn't handle database connections."
    ],
    "practiceExercise": {
      "task": "Create a `Book` class with `title` and `author` attributes. Create an object, set the values, and print them.",
      "solution": "class Book {\n    String title;\n    String author;\n}\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book();\n        b.title = \"1984\";\n        b.author = \"George Orwell\";\n        System.out.println(b.title + \" by \" + b.author);\n    }\n}"
    },
    "interviewQuestions": [
      "What is the difference between a class and an object?",
      "How are objects stored in memory in Java?"
    ],
    "quiz": [
      {
        "question": "Which keyword is used to instantiate a new object in Java?",
        "options": [
          "create",
          "new",
          "instance",
          "object"
        ],
        "correctAnswer": "new"
      }
    ],
    "summary": [
      "Classes define the structure and behavior of objects.",
      "Objects are individual instances created from classes using the `new` keyword.",
      "The dot (`.`) operator accesses an object's members."
    ],
    "references": [
      {
        "label": "Java Classes/Objects",
        "url": "https://www.w3schools.com/java/java_classes.asp"
      }
    ]
  },
  "java_constructors": {
    "isStructured": true,
    "title": "43. Constructors",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "A constructor is a special method that is used to initialize objects. It is called automatically when an object of a class is created.",
    "whyUseIt": "Constructors guarantee that an object is properly set up and holds valid data from the very moment it is created.",
    "syntax": "public ClassName() {\n    // initialization code\n}",
    "codeExample": "class Car {\n    String model;\n    \n    // Constructor (must match class name perfectly)\n    public Car() {\n        model = \"Mustang\"; // Default value\n        System.out.println(\"Car object created!\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Constructor is called here automatically\n        Car myCar = new Car(); \n        System.out.println(\"Car Model: \" + myCar.model);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Car object created!\nCar Model: Mustang",
    "explanation": [
      {
        "code": "public Car()",
        "desc": "This is the constructor. It has exactly the same name as the class, and NO return type (not even `void`)."
      }
    ],
    "realWorldExample": "When building a new house (object), the constructor is the construction crew that lays the foundation and paints the walls before handing you the keys.",
    "commonMistakes": [
      {
        "error": "Adding a return type like `void` to a constructor. This turns it into a regular method, and it will no longer run automatically.",
        "code": "public void Car() {}",
        "suffix": "// This is now a standard method, NOT a constructor!"
      }
    ],
    "bestPractices": [
      "Use constructors strictly for initializing instance variables. Avoid putting complex business logic or heavy computations inside a constructor."
    ],
    "practiceExercise": {
      "task": "Create a `Person` class with a constructor that sets the `name` attribute to 'Unknown'.",
      "solution": "class Person {\n    String name;\n    public Person() {\n        name = \"Unknown\";\n    }\n}"
    },
    "interviewQuestions": [
      "What are the rules for defining a constructor?",
      "Can a constructor be private?",
      "Does a constructor return a value?"
    ],
    "quiz": [
      {
        "question": "Which of the following is true about constructors?",
        "options": [
          "They must have a void return type",
          "They must have the exact same name as the class",
          "They cannot take parameters",
          "They must be called explicitly using the dot operator"
        ],
        "correctAnswer": "They must have the exact same name as the class"
      }
    ],
    "summary": [
      "Constructors initialize newly created objects.",
      "They run automatically when `new` is used.",
      "They share the class name and have no return type."
    ],
    "references": [
      {
        "label": "Java Constructors",
        "url": "https://www.w3schools.com/java/java_constructors.asp"
      }
    ]
  },
  "java_this_keyword": {
    "isStructured": true,
    "title": "44. this Keyword",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "The `this` keyword is a reference variable in Java that refers to the current object (the object whose method or constructor is being called).",
    "whyUseIt": "It is primarily used to resolve ambiguity between instance variables and parameters that have the exact same name (shadowing).",
    "syntax": "this.variableName = parameterName;",
    "codeExample": "class Employee {\n    String name; // Instance variable\n    \n    public Employee(String name) { // Parameter also called 'name'\n        // If we just write name = name, it assigns the parameter to itself!\n        // We use 'this' to refer to the instance variable.\n        this.name = name;\n    }\n    \n    void printName() {\n        System.out.println(\"Employee name is: \" + this.name);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Employee emp = new Employee(\"Sarah\");\n        emp.printName();\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Employee name is: Sarah",
    "explanation": [
      {
        "code": "this.name",
        "desc": "Refers to the `name` variable belonging to the class object."
      },
      {
        "code": "name",
        "desc": "Refers to the `name` variable passed in as a parameter."
      }
    ],
    "realWorldExample": "If two people named John are in a room, and someone says 'John owes money', it's confusing. Saying 'THIS John owes money' while pointing at one resolves the ambiguity.",
    "commonMistakes": [
      {
        "error": "Trying to use the `this` keyword inside a `static` method. Static methods belong to the class, not an object, so `this` does not exist there.",
        "code": "static void run() { System.out.println(this.name); }",
        "suffix": "// Error: cannot use 'this' in a static context"
      }
    ],
    "bestPractices": [
      "Always use `this` when assigning constructor parameters to instance variables to keep naming consistent and avoid creating weird variable names like `pName` or `_name`."
    ],
    "practiceExercise": {
      "task": "Create a class `Box` with `width` and `height`. Use a constructor that takes `width` and `height` parameters, and assign them using `this`.",
      "solution": "class Box {\n    int width, height;\n    public Box(int width, int height) {\n        this.width = width;\n        this.height = height;\n    }\n}"
    },
    "interviewQuestions": [
      "Can `this` be used to call a constructor from another constructor?",
      "Why can't you use `this` inside the `main` method?"
    ],
    "quiz": [
      {
        "question": "What happens if a parameter and an instance variable have the same name, and you DO NOT use `this`?",
        "options": [
          "Compilation error",
          "The instance variable is updated correctly anyway",
          "The parameter shadows the instance variable, and the instance variable remains unchanged",
          "Java automatically adds `this` for you"
        ],
        "correctAnswer": "The parameter shadows the instance variable, and the instance variable remains unchanged"
      }
    ],
    "summary": [
      "The `this` keyword refers to the current object executing the code.",
      "It is primarily used to eliminate confusion between class attributes and parameters with the same name.",
      "It cannot be used in static contexts."
    ],
    "references": [
      {
        "label": "Java 'this' Keyword",
        "url": "https://www.w3schools.com/java/ref_keyword_this.asp"
      }
    ]
  },
  "java_static_keyword": {
    "isStructured": true,
    "title": "45. static Keyword",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "The `static` keyword in Java means that a member (variable or method) belongs to the class itself, rather than to instances (objects) of the class. It is shared across all objects.",
    "whyUseIt": "It is used for memory management (shared variables) and for creating utility methods that can be called without instantiating the class (like `Math.pow()`).",
    "syntax": "static int count = 0;\nstatic void printMessage() { ... }",
    "codeExample": "class Counter {\n    // Static variable is shared by all instances\n    static int count = 0; \n    \n    public Counter() {\n        count++; // Increment shared count\n        System.out.println(\"Count is: \" + count);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Counter c1 = new Counter();\n        Counter c2 = new Counter();\n        Counter c3 = new Counter();\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Count is: 1\nCount is: 2\nCount is: 3",
    "explanation": [
      {
        "code": "static int count",
        "desc": "Because it is static, memory is allocated only once. `c1`, `c2`, and `c3` all share this exact same `count` variable."
      }
    ],
    "realWorldExample": "A company name is a static variable; all employees (objects) work for the same company. If the company changes its name, it changes for all employees simultaneously.",
    "commonMistakes": [
      {
        "error": "Trying to access a non-static (instance) variable inside a static method.",
        "code": "int speed; \nstatic void run() { speed = 10; }",
        "suffix": "// Compilation error"
      }
    ],
    "bestPractices": [
      "Use `static` for constants (along with `final`) and utility methods that do not rely on object state."
    ],
    "practiceExercise": {
      "task": "Create a `MathUtils` class with a static method `square(int n)`. Call it from main without creating a `MathUtils` object.",
      "solution": "class MathUtils {\n    static int square(int n) { return n * n; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(MathUtils.square(5));\n    }\n}"
    },
    "interviewQuestions": [
      "Why is the `main` method static in Java?",
      "Can you override a static method?",
      "Can we declare a top-level class as static?"
    ],
    "quiz": [
      {
        "question": "Which of the following is true about static methods?",
        "options": [
          "They can only be called by creating an object of the class",
          "They can access non-static instance variables directly",
          "They belong to the class, not the object instances",
          "They cannot take parameters"
        ],
        "correctAnswer": "They belong to the class, not the object instances"
      }
    ],
    "summary": [
      "Static variables are shared among all instances of a class.",
      "Static methods can be called without creating an object.",
      "Static contexts cannot access non-static instance members directly."
    ],
    "references": [
      {
        "label": "Java Static Keyword",
        "url": "https://www.geeksforgeeks.org/static-keyword-java/"
      }
    ]
  },
  "java_final_keyword": {
    "isStructured": true,
    "title": "46. final Keyword",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "The `final` keyword in Java is a non-access modifier used to restrict the user. It can be applied to variables (to make them constants), methods (to prevent overriding), and classes (to prevent inheritance).",
    "whyUseIt": "It provides security and stability to your code by ensuring that critical values, behaviors, or class designs cannot be altered by malicious or mistaken code later on.",
    "syntax": "final int MAX_SPEED = 120;\nfinal void display() { ... }\nfinal class Vehicle { ... }",
    "codeExample": "class Circle {\n    // Final variable: its value cannot be changed once assigned\n    final double PI = 3.14159;\n    \n    public void calculateArea(int radius) {\n        // PI = 3.14; // This would cause a compilation error!\n        double area = PI * radius * radius;\n        System.out.println(\"Area is: \" + area);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Circle c = new Circle();\n        c.calculateArea(5);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Area is: 78.53975",
    "explanation": [
      {
        "code": "final double PI",
        "desc": "Declares `PI` as a constant. Any subsequent attempt to reassign `PI` will fail to compile."
      }
    ],
    "realWorldExample": "Your social security number or date of birth is a `final` variable; once it is set at birth, it can never be changed.",
    "commonMistakes": [
      {
        "error": "Declaring a reference variable as final and assuming the object itself is immutable. `final` only prevents reassigning the reference, but you can still modify the object's internal data.",
        "code": "final int[] arr = {1, 2}; \narr[0] = 5;",
        "suffix": "// Perfectly valid! Only 'arr = new int[]' would be illegal."
      }
    ],
    "bestPractices": [
      "Use ALL_CAPS naming convention for `final` variables (constants) to make them easily identifiable (e.g., `MAX_RETRIES`)."
    ],
    "practiceExercise": {
      "task": "Create a final variable `GRAVITY` with value 9.8. Attempt to change it to 10 in the next line and observe the compiler error.",
      "solution": "final double GRAVITY = 9.8;\n// GRAVITY = 10; // Error: cannot assign a value to final variable GRAVITY"
    },
    "interviewQuestions": [
      "What is a blank final variable?",
      "Can a final method be overloaded?",
      "What is the difference between final, finally, and finalize?"
    ],
    "quiz": [
      {
        "question": "What happens if you mark a Java class as `final`?",
        "options": [
          "It cannot have any variables",
          "It cannot be instantiated using the `new` keyword",
          "It cannot be inherited (extended) by any other class",
          "All its methods automatically become static"
        ],
        "correctAnswer": "It cannot be inherited (extended) by any other class"
      }
    ],
    "summary": [
      "`final` variables cannot be reassigned (they are constants).",
      "`final` methods cannot be overridden by subclasses.",
      "`final` classes cannot be extended (inherited)."
    ],
    "references": [
      {
        "label": "Java final Keyword",
        "url": "https://www.geeksforgeeks.org/final-keyword-in-java/"
      }
    ]
  },
  "java_encapsulation": {
    "isStructured": true,
    "title": "47. Encapsulation",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "Encapsulation is the mechanism of wrapping the data (variables) and code acting on the data (methods) together as a single unit, and hiding the internal state from the outside world.",
    "whyUseIt": "It provides control over the data. You can validate data before it is assigned, make fields read-only, and change internal implementations without breaking other people's code.",
    "syntax": "private dataType variable;\npublic dataType getVariable() { ... }",
    "codeExample": "class Person {\n    // 1. Hide the data\n    private int age;\n    \n    // 2. Provide public method to update data safely\n    public void setAge(int newAge) {\n        if (newAge > 0 && newAge < 150) {\n            this.age = newAge;\n        } else {\n            System.out.println(\"Invalid age provided!\");\n        }\n    }\n    \n    // 3. Provide public method to read data\n    public int getAge() {\n        return this.age;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.setAge(-5); // Will be rejected\n        p.setAge(25); // Will be accepted\n        System.out.println(\"Age is: \" + p.getAge());\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Invalid age provided!\nAge is: 25",
    "explanation": [
      {
        "code": "private int age",
        "desc": "The raw data is completely hidden from other classes."
      },
      {
        "code": "if (newAge > 0)",
        "desc": "Because we force users to go through the `setAge` method, we can add validation logic to protect our data!"
      }
    ],
    "realWorldExample": "A capsule of medicine. You don't interact with the raw chemicals inside; you just swallow the capsule as a complete unit. Or a vending machine: you don't grab the snacks directly (private), you use buttons and coins (public methods) to interact with it safely.",
    "commonMistakes": [
      {
        "error": "Making variables private, but writing setters that do absolutely zero validation, which essentially defeats the main purpose of Encapsulation.",
        "code": "public void setAge(int age) { this.age = age; }",
        "suffix": "// Missed opportunity for validation!"
      }
    ],
    "bestPractices": [
      "Achieve strict encapsulation by making ALL instance variables `private` and generating getters and setters only for variables that absolutely need external access."
    ],
    "practiceExercise": {
      "task": "Create a `BankAccount` class with a private `balance`. Write a `deposit` method that only accepts positive amounts.",
      "solution": "class BankAccount {\n    private double balance;\n    public void deposit(double amt) {\n        if(amt > 0) balance += amt;\n    }\n}"
    },
    "interviewQuestions": [
      "What is data hiding?",
      "How is Encapsulation different from Abstraction?",
      "Can we have a class that is completely read-only?"
    ],
    "quiz": [
      {
        "question": "What is the primary technical mechanism used to achieve Encapsulation in Java?",
        "options": [
          "Using the `static` keyword",
          "Using `private` variables and `public` getter/setter methods",
          "Using the `extends` keyword",
          "Using arrays"
        ],
        "correctAnswer": "Using `private` variables and `public` getter/setter methods"
      }
    ],
    "summary": [
      "Encapsulation is data hiding.",
      "It is achieved by marking variables as `private`.",
      "Access is granted through public `get` and `set` methods which act as gatekeepers."
    ],
    "references": [
      {
        "label": "Java Encapsulation",
        "url": "https://www.w3schools.com/java/java_encapsulation.asp"
      }
    ]
  },
  "java_inheritance": {
    "isStructured": true,
    "title": "48. Inheritance",
    "difficulty": "Intermediate",
    "readingTime": "6 min",
    "definition": "Inheritance is an OOP mechanism in which one object acquires all the properties and behaviors of a parent object. It represents an IS-A relationship.",
    "whyUseIt": "It provides code reusability. You can create a new class built upon an existing class without having to rewrite the shared logic.",
    "syntax": "class ChildClass extends ParentClass { ... }",
    "codeExample": "// Parent Class (Superclass)\nclass Animal {\n    void eat() {\n        System.out.println(\"This animal is eating.\");\n    }\n}\n\n// Child Class (Subclass) inherits from Animal\nclass Dog extends Animal {\n    void bark() {\n        System.out.println(\"The dog is barking.\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog myDog = new Dog();\n        myDog.bark(); // Its own method\n        myDog.eat();  // Inherited method from Animal!\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "The dog is barking.\nThis animal is eating.",
    "explanation": [
      {
        "code": "extends Animal",
        "desc": "The `extends` keyword tells Java that `Dog` is inheriting the non-private members of `Animal`."
      }
    ],
    "realWorldExample": "A Smartphone inherits all features of a Mobile Phone (calling, texting) but adds its own new features (camera, apps).",
    "commonMistakes": [
      {
        "error": "Trying to inherit from multiple classes at the same time. Java does not support multiple inheritance with classes.",
        "code": "class Dog extends Animal, Pet { }",
        "suffix": "// Error: Java only allows extending ONE class."
      }
    ],
    "bestPractices": [
      "Use inheritance only when there is a true \"IS-A\" relationship (e.g., a Car IS-A Vehicle). Do not use it just to reuse random code."
    ],
    "practiceExercise": {
      "task": "Create a `Vehicle` class with a `start()` method. Create a `Car` class that extends `Vehicle` and adds a `honk()` method.",
      "solution": "class Vehicle { void start() { System.out.println(\"Vroom\"); } }\nclass Car extends Vehicle { void honk() { System.out.println(\"Beep\"); } }"
    },
    "interviewQuestions": [
      "Why doesn't Java support multiple inheritance?",
      "What is the superclass of every class in Java?",
      "Can a private method be inherited?"
    ],
    "quiz": [
      {
        "question": "Which keyword is used to inherit a class in Java?",
        "options": [
          "implements",
          "inherits",
          "extends",
          "super"
        ],
        "correctAnswer": "extends"
      }
    ],
    "summary": [
      "Inheritance allows a class to copy functionality from another class.",
      "Use the `extends` keyword to establish inheritance.",
      "Java supports single and multilevel inheritance, but not multiple inheritance."
    ],
    "references": [
      {
        "label": "Java Inheritance",
        "url": "https://www.w3schools.com/java/java_inheritance.asp"
      }
    ]
  },
  "java_polymorphism": {
    "isStructured": true,
    "title": "49. Polymorphism",
    "difficulty": "Intermediate",
    "readingTime": "6 min",
    "definition": "Polymorphism means 'many forms'. It allows us to perform a single action in different ways. In Java, it occurs when we have many classes that are related to each other by inheritance.",
    "whyUseIt": "It allows us to write flexible, reusable code. We can write methods that accept a parent class type, and it will automatically work with any child class passed into it.",
    "syntax": "ParentClass obj = new ChildClass();\nobj.method(); // Executes Child's version of method()",
    "codeExample": "class Animal {\n    public void animalSound() {\n        System.out.println(\"The animal makes a sound\");\n    }\n}\n\nclass Pig extends Animal {\n    public void animalSound() {\n        System.out.println(\"The pig says: wee wee\");\n    }\n}\n\nclass Dog extends Animal {\n    public void animalSound() {\n        System.out.println(\"The dog says: bow wow\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal myAnimal = new Animal();  // Animal object\n        Animal myPig = new Pig();        // Pig acting as an Animal\n        Animal myDog = new Dog();        // Dog acting as an Animal\n        \n        myAnimal.animalSound();\n        myPig.animalSound();\n        myDog.animalSound();\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "The animal makes a sound\nThe pig says: wee wee\nThe dog says: bow wow",
    "explanation": [
      {
        "code": "Animal myPig = new Pig();",
        "desc": "Upcasting. We store a `Pig` object in an `Animal` reference. When `animalSound()` is called, Java dynamically figures out that it's actually a `Pig` and calls the `Pig`'s version."
      }
    ],
    "realWorldExample": "A person can be an employee, a father, and a musician. When you ask them to 'work' (the method), they do it differently depending on what role they are currently acting in.",
    "commonMistakes": [
      {
        "error": "Trying to call a method that exists ONLY in the child class when using a parent reference.",
        "code": "Animal a = new Dog(); \na.fetch();",
        "suffix": "// Error: Animal reference doesn't know about the fetch() method."
      }
    ],
    "bestPractices": [
      "Use Polymorphism to create arrays or lists of parent types that hold multiple different child types, making processing them in loops incredibly clean."
    ],
    "practiceExercise": {
      "task": "Create a `Shape` class with a `draw()` method. Create `Circle` and `Square` classes that override `draw()`. Create an array of `Shape` containing both, and loop through them calling `draw()`.",
      "solution": "// Practice code omitted for brevity. Relies on array: Shape[] shapes = {new Circle(), new Square()};"
    },
    "interviewQuestions": [
      "What is the difference between compile-time and runtime polymorphism?",
      "Can we override a static method to achieve polymorphism?"
    ],
    "quiz": [
      {
        "question": "What is the primary benefit of polymorphism?",
        "options": [
          "It makes code run faster",
          "It prevents other classes from inheriting your code",
          "It allows a parent reference to hold and appropriately interact with any child object",
          "It hides variables from being accessed"
        ],
        "correctAnswer": "It allows a parent reference to hold and appropriately interact with any child object"
      }
    ],
    "summary": [
      "Polymorphism allows objects of different classes to be treated as objects of a common superclass.",
      "It is primarily achieved through method overriding (runtime polymorphism).",
      "It drastically increases code flexibility."
    ],
    "references": [
      {
        "label": "Java Polymorphism",
        "url": "https://www.w3schools.com/java/java_polymorphism.asp"
      }
    ]
  },
  "java_method_overriding": {
    "isStructured": true,
    "title": "50. Method Overriding",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "Method Overriding occurs when a subclass (child class) provides a specific implementation for a method that is already defined in its superclass (parent class).",
    "whyUseIt": "It is the mechanism that makes Runtime Polymorphism possible. It allows a child class to change or expand upon the inherited behavior of its parent.",
    "syntax": "@Override\npublic void existingMethod() { ... }",
    "codeExample": "class Vehicle {\n    void run() {\n        System.out.println(\"Vehicle is moving\");\n    }\n}\n\nclass Bike extends Vehicle {\n    // Overriding the run() method of Vehicle\n    @Override\n    void run() {\n        System.out.println(\"Bike is running safely at 60km/h\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Bike obj = new Bike();\n        obj.run(); // Calls the Bike's version\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Bike is running safely at 60km/h",
    "explanation": [
      {
        "code": "@Override",
        "desc": "An annotation that tells the compiler you intend to override a parent method. If you make a typo in the method name, the compiler will catch it and throw an error!"
      }
    ],
    "realWorldExample": "A generic `Appliance` class has a `turnOn()` method. A `TV` class inherits it, but overrides `turnOn()` to also light up the screen and play a jingle.",
    "commonMistakes": [
      {
        "error": "Changing the method signature (name or parameters) while trying to override. If you change parameters, you are OVERLOADING, not overriding.",
        "code": "void run(int speed)",
        "suffix": "// This is an overload, not an override of void run()"
      }
    ],
    "bestPractices": [
      "Always use the `@Override` annotation. It is optional, but it prevents extremely hard-to-find bugs caused by spelling mistakes in method names."
    ],
    "practiceExercise": {
      "task": "Create a `Bank` class with a method `getInterestRate()` returning 0. Create a `ChaseBank` class that extends `Bank` and overrides the method to return 5.",
      "solution": "class Bank { int getInterestRate() { return 0; } }\nclass ChaseBank extends Bank { @Override int getInterestRate() { return 5; } }"
    },
    "interviewQuestions": [
      "What is the difference between Method Overloading and Method Overriding?",
      "Can we override a private method?",
      "Can we override a final method?"
    ],
    "quiz": [
      {
        "question": "Which of the following rules is TRUE for Method Overriding?",
        "options": [
          "The method must have a different name",
          "The method must be marked as static",
          "The method signature (name and parameters) must perfectly match the parent method",
          "The method must be in the exact same class"
        ],
        "correctAnswer": "The method signature (name and parameters) must perfectly match the parent method"
      }
    ],
    "summary": [
      "Overriding provides a child-specific implementation of a parent method.",
      "The method signature must be identical.",
      "The `@Override` annotation ensures compiler validation."
    ],
    "references": [
      {
        "label": "Method Overriding in Java",
        "url": "https://www.geeksforgeeks.org/overriding-in-java/"
      }
    ]
  }
};
