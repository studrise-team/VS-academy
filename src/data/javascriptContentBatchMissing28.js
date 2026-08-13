const commonReferences = [
  { label: 'MDN Web Docs - Classes', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes' },
  { label: 'MDN Web Docs - Private class features', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields' }
];

export const javascriptContentBatchMissing28 = {
  'js_encapsulation': {
    isStructured: true,
    title: '243. Encapsulation',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'Encapsulation is one of the core pillars of Object-Oriented Programming (OOP). It means bundling data (properties) and the methods that operate on that data into a single unit (an object), and restricting direct outside access to some of that data.',
    whyUseIt: 'It prevents other parts of your program from accidentally (or maliciously) changing an object\'s internal state in an invalid way. You force other code to use your approved methods to interact with the data.',
    syntax: 'class MyClass {\n  #privateField = 0;\n  \n  publicMethod() {\n    this.#privateField++;\n  }\n}',
    codeExample: 'class BankAccount {\n  // The "#" symbol makes this property PRIVATE.\n  // It can ONLY be accessed from inside this class.\n  #balance = 0;\n\n  constructor(owner) {\n    this.owner = owner;\n  }\n\n  // This is the public interface (API) for the class\n  deposit(amount) {\n    if (amount > 0) {\n      this.#balance += amount;\n      console.log(`Deposited ${amount}.`);\n    } else {\n      console.log("Invalid deposit amount.");\n    }\n  }\n\n  getBalance() {\n    return this.#balance;\n  }\n}\n\nconst myAccount = new BankAccount("Alice");\nmyAccount.deposit(100);\nconsole.log(myAccount.getBalance()); // 100\n\n// THIS WILL CAUSE AN ERROR! \n// You cannot access private fields from the outside.\n// console.log(myAccount.#balance); // SyntaxError',
    expectedOutput: 'Deposited 100.\n100',
    explanation: [
      { code: '#balance', desc: 'In modern JavaScript, prefixing a property with a hash `#` makes it strictly private. Before this was added, developers used an underscore `_balance` as a "gentleman\'s agreement" to pretend it was private, but it was still technically accessible.' },
      { code: 'Public API', desc: 'The `deposit()` and `getBalance()` methods are the "Public API" of the object. They act as gatekeepers, ensuring `balance` is only changed according to the rules (e.g., amount > 0).' }
    ],
    realWorldExample: 'A coffee machine. You don\'t open the machine and manually mix hot water and beans (modifying internal state). You press the "Make Coffee" button (a public method), and the machine handles its own internal mechanics (private data) safely.',
    commonMistakes: [
      { error: 'Trying to dynamically create private fields', code: 'this.#newField = "hello";', suffix: 'You CANNOT dynamically create private fields inside the constructor. All private fields MUST be declared at the very top of the class body before the constructor.' }
    ],
    bestPractices: ['Make properties private by default. Only expose what is absolutely necessary. This reduces bugs because you know exactly which methods are allowed to change the data.'],
    practiceExercise: {
      task: 'Define a class `User` with a private field `#password`. Write a constructor that assigns a string to it.',
      expectedOutput: 'A class using the # prefix.',
      solution: 'class User { #password; constructor(pw) { this.#password = pw; } }'
    },
    quiz: [
      { question: 'What is Encapsulation?', options: ['Running code inside a capsule', 'Bundling data and methods together into an object, and hiding the internal state from the outside', 'Inheriting methods from a parent class', 'Converting objects to JSON'], answer: 'Bundling data and methods together into an object, and hiding the internal state from the outside' },
      { question: 'How do you make a class property strictly private in modern JavaScript?', options: ['Prefix it with an underscore (e.g., `_balance`)', 'Use the `private` keyword', 'Prefix it with a hash (e.g., `#balance`)', 'Put it inside a closure'], answer: 'Prefix it with a hash (e.g., `#balance`)' },
      { question: 'What happens if you try to do `console.log(myAccount.#balance)` from outside the class?', options: ['It prints the balance', 'It prints undefined', 'It throws a SyntaxError (Private field must be declared in an enclosing class)', 'It returns null'], answer: 'It throws a SyntaxError (Private field must be declared in an enclosing class)' },
      { question: 'Before the `#` syntax was introduced, what was the standard naming convention to indicate to other developers that a property *should* be treated as private?', options: ['ALL_CAPS', 'Prefixing it with an underscore (e.g., `_name`)', 'Prefixing it with `$name`', 'Using `let` instead of `const`'], answer: 'Prefixing it with an underscore (e.g., `_name`)' },
      { question: 'Why is it good practice to use private fields?', options: ['It makes the code run faster', 'It saves memory', 'It prevents external code from putting the object into an invalid state (like manually setting a bank balance to a negative string)', 'It is required by React'], answer: 'It prevents external code from putting the object into an invalid state (like manually setting a bank balance to a negative string)' }
    ],
    interviewQuestions: [
      { q: 'How did developers achieve strict encapsulation before ES6/ES2022 introduced Classes and private fields?', a: 'By using Closures. You could create a function that returned an object with methods. The local variables inside the function were inaccessible from the outside, acting exactly like private properties.' }
    ],
    summary: ['Hides internal state from the outside.', 'Use `#` to declare private fields.', 'Forces interaction through public methods.'],
    references: commonReferences
  },
  'js_polymorphism': {
    isStructured: true,
    title: '244. Polymorphism',
    difficulty: 'Advanced',
    readingTime: '3 min',
    definition: 'Polymorphism (meaning "many forms") is an OOP concept where different classes can provide their own unique implementation of a method that shares the same name as a method in a parent class.',
    whyUseIt: 'It allows you to treat different objects in the exact same way. If you have an array of 50 different `Animal` objects, you can loop through them and call `.makeSound()` on all of them, and each animal will automatically do the right thing without you needing 50 `if/else` statements.',
    syntax: 'class Child extends Parent {\n  methodName() {\n    // Overrides the parent\'s methodName()\n  }\n}',
    codeExample: 'class Animal {\n  makeSound() {\n    console.log("Some generic animal noise");\n  }\n}\n\nclass Dog extends Animal {\n  // Polymorphism: Overriding the parent\'s method\n  makeSound() {\n    console.log("Woof! Woof!");\n  }\n}\n\nclass Cat extends Animal {\n  // Polymorphism: Overriding the parent\'s method\n  makeSound() {\n    console.log("Meow!");\n  }\n}\n\nconst zoo = [new Animal(), new Dog(), new Cat()];\n\n// We don\'t care what specific type of animal it is,\n// we just call makeSound() and Polymorphism handles the rest!\nzoo.forEach(animal => animal.makeSound());',
    expectedOutput: 'Some generic animal noise\nWoof! Woof!\nMeow!',
    explanation: [
      { code: 'Overriding', desc: 'Because `Dog` has its own `makeSound` method, JavaScript uses it. If `Dog` didn\'t have one, it would fall back to the `Animal` class\'s version.' },
      { code: 'Shared Interface', desc: 'The beauty of polymorphism is that the main program (`zoo.forEach`) doesn\'t need to know the difference between a Dog and a Cat. It just knows they all share the `makeSound` interface.' }
    ],
    realWorldExample: 'A graphics program. You have a `Shape` class, and child classes `Circle`, `Square`, and `Triangle`. They all have a `.draw()` method. The main canvas renderer just loops through an array of shapes and calls `.draw()` on all of them, and they each draw themselves correctly.',
    commonMistakes: [
      { error: 'Overusing inheritance for polymorphism', code: '', suffix: 'While extending classes is the classic way to achieve polymorphism, JavaScript\'s dynamic nature (Duck Typing) means that as long as two totally unrelated objects happen to both have a `.draw()` method, they can be treated polymorphically!' }
    ],
    bestPractices: ['Use polymorphism to eliminate giant `switch` statements or long chains of `if (type === "dog") { ... } else if (type === "cat") { ... }`.'],
    practiceExercise: {
      task: 'Without coding: If `Bird` extends `Animal` but DOES NOT define its own `makeSound` method, what happens when you call `new Bird().makeSound()`?',
      expectedOutput: 'It falls back to the parent.',
      solution: 'It will log "Some generic animal noise" (it inherits the parent\'s exact method).'
    },
    quiz: [
      { question: 'What does Polymorphism mean in programming?', options: ['Changing shapes dynamically', 'The ability of different classes to provide their own specific implementation of a shared method name', 'Encrypting data in multiple forms', 'Using multiple APIs at once'], answer: 'The ability of different classes to provide their own specific implementation of a shared method name' },
      { question: 'What happens if a child class defines a method with the exact same name as a method in its parent class?', options: ['SyntaxError', 'The child method "overrides" the parent method, so the child\'s version is executed', 'The parent method overrides the child method', 'Both methods execute simultaneously'], answer: 'The child method "overrides" the parent method, so the child\'s version is executed' },
      { question: 'What major code smell does Polymorphism help eliminate?', options: ['Variables', 'Massive `switch` statements or `if/else` chains checking object types', 'CSS styling', 'Arrow functions'], answer: 'Massive `switch` statements or `if/else` chains checking object types' },
      { question: 'If `class Duck` does not have a `fly()` method, but it extends `class Bird` which does have `fly()`, what happens if you call `new Duck().fly()`?', options: ['It crashes', 'It executes the `Bird` class\'s `fly()` method', 'It does nothing', 'It creates a new method automatically'], answer: 'It executes the `Bird` class\'s `fly()` method' },
      { question: 'Polymorphism allows a main program to interact with an array of different objects in what way?', options: ['By strictly checking the type of every single object', 'By treating them all identically, trusting they share the same method names', 'By converting them to strings', 'By flattening them into one object'], answer: 'By treating them all identically, trusting they share the same method names' }
    ],
    interviewQuestions: [
      { q: 'What is "Duck Typing" in JavaScript?', a: '"If it walks like a duck and quacks like a duck, it is a duck." In strictly typed languages (like Java), objects must explicitly implement an Interface to be treated polymorphically. In JavaScript, you don\'t need strict inheritance; if an object happens to have the correct method name, it will work.' }
    ],
    summary: ['Means "Many Forms".', 'Child classes override parent methods.', 'Allows treating different objects identically.'],
    references: commonReferences
  },
  'js_getters': {
    isStructured: true,
    title: '245. Getters',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A `getter` is a special method inside a class that is accessed as if it were a standard property, rather than being called as a function (no parentheses `()`).',
    whyUseIt: 'Getters are perfect for "computed properties"—values that need to be calculated on the fly based on other data in the object, but you want them to look clean and simple when you access them.',
    syntax: 'class MyClass {\n  get propertyName() {\n    return this.data;\n  }\n}',
    codeExample: 'class Person {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n\n  // This is a GETTER\n  get fullName() {\n    // It calculates the value dynamically\n    return `${this.firstName} ${this.lastName}`;\n  }\n}\n\nconst user = new Person("Tony", "Stark");\n\n// Look carefully! We DO NOT use parentheses.\n// It looks like a normal property, but it runs the function under the hood.\nconsole.log(user.fullName); // "Tony Stark"\n\n// If we change the first name...\nuser.firstName = "Morgan";\n// ...the getter instantly reflects the new calculated state!\nconsole.log(user.fullName); // "Morgan Stark"',
    expectedOutput: 'Tony Stark\nMorgan Stark',
    explanation: [
      { code: 'get fullName()', desc: 'The `get` keyword transforms this from a standard method into a property accessor.' },
      { code: 'user.fullName', desc: 'Notice the lack of `()`. If you tried to write `user.fullName()`, it would throw a TypeError because JavaScript treats it as a property, not a function.' }
    ],
    realWorldExample: 'Arrays in JavaScript use a getter for `.length`. You don\'t write `arr.length()`, you write `arr.length`. Under the hood, the Array class is likely using a getter to calculate that number dynamically.',
    commonMistakes: [
      { error: 'Adding parentheses when calling', code: 'user.fullName()', suffix: 'This is the most common mistake. Because you used the `get` keyword when defining it, you MUST access it without parentheses.' }
    ],
    bestPractices: ['Use getters to expose private fields (e.g., `get balance() { return this.#balance; }`). This allows outside code to read the balance, but completely prevents them from modifying it.'],
    practiceExercise: {
      task: 'Create a class `Square` with a constructor taking `side`. Write a getter called `area` that returns `this.side * this.side`.',
      expectedOutput: 'A class with a get keyword.',
      solution: 'class Square { constructor(s) { this.side = s; } get area() { return this.side * this.side; } }'
    },
    quiz: [
      { question: 'What keyword is used to define a Getter method?', options: ['fetch', 'get', 'return', 'read'], answer: 'get' },
      { question: 'How do you access a getter named `fullName` on an object `user`?', options: ['user.fullName()', 'user.get("fullName")', 'user.fullName', 'user->fullName'], answer: 'user.fullName' },
      { question: 'What happens if you try to call a getter with parentheses, like `user.fullName()`?', options: ['It works normally', 'It runs twice', 'It throws a TypeError (user.fullName is not a function)', 'It deletes the property'], answer: 'It throws a TypeError (user.fullName is not a function)' },
      { question: 'What is a "Computed Property"?', options: ['A property generated by a computer', 'A property whose value is dynamically calculated on the fly using other data, perfectly suited for getters', 'A math equation', 'A CSS rule'], answer: 'A property whose value is dynamically calculated on the fly using other data, perfectly suited for getters' },
      { question: 'Are getters useful for interacting with private fields?', options: ['Yes, a getter can return a private field, allowing the outside world to read it without being able to modify it', 'No, getters cannot see private fields', 'Only if the getter is also private', 'Only in strict mode'], answer: 'Yes, a getter can return a private field, allowing the outside world to read it without being able to modify it' }
    ],
    interviewQuestions: [
      { q: 'Can a getter take arguments?', a: 'No. A getter must have exactly zero parameters. If you try to define a getter with parameters like `get fullName(prefix) { ... }`, JavaScript will throw a SyntaxError.' }
    ],
    summary: ['Acts like a property, runs like a method.', 'Great for computed values.', 'Do not use parentheses to call it.'],
    references: commonReferences
  },
  'js_setters': {
    isStructured: true,
    title: '246. Setters',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A `setter` is a special method inside a class that allows you to intercept attempts to assign a value to a property. Like getters, they look like normal property assignments from the outside.',
    whyUseIt: 'Setters are perfect for Data Validation. If someone tries to set an age to `-5`, the setter catches the assignment, runs a check, and can either reject it (throw an error) or fix it.',
    syntax: 'class MyClass {\n  set propertyName(value) {\n    this.data = value;\n  }\n}',
    codeExample: 'class User {\n  #age = 0; // Private field\n\n  // This is a SETTER\n  set age(newAge) {\n    if (newAge < 0) {\n      console.log("Error: Age cannot be negative.");\n      return; // Reject the change\n    }\n    if (newAge > 120) {\n      console.log("Error: Invalid age.");\n      return; // Reject the change\n    }\n    \n    // If validation passes, actually update the private field\n    this.#age = newAge;\n  }\n\n  get age() {\n    return this.#age;\n  }\n}\n\nconst player = new User();\n\n// Looks like a normal assignment, but it secretly runs the SETTER function!\nplayer.age = 25;\nconsole.log(player.age); // 25\n\nplayer.age = -10; // "Error: Age cannot be negative."\nconsole.log(player.age); // Still 25! The setter protected the data.',
    expectedOutput: '25\nError: Age cannot be negative.\n25',
    explanation: [
      { code: 'set age(newAge)', desc: 'The `set` keyword transforms this into a property interceptor. It MUST accept exactly one parameter.' },
      { code: 'player.age = 25', desc: 'When JavaScript sees this assignment, it notices the `set age()` method exists, and passes `25` into it as the `newAge` parameter.' }
    ],
    realWorldExample: 'Updating the `innerHTML` of an element in the DOM. When you write `element.innerHTML = "hi"`, you aren\'t just changing a string. That assignment triggers a massive internal browser Setter that parses the HTML and draws it on the screen.',
    commonMistakes: [
      { error: 'Infinite loops', code: 'set age(val) { this.age = val; }', suffix: 'If your setter has the name `age`, and inside it you write `this.age = val`, that assignment triggers the setter AGAIN, which triggers it AGAIN... causing a "Maximum call stack size exceeded" crash. Setters must update a *different* property (usually a private one like `#age`).' }
    ],
    bestPractices: ['Always pair a Setter with a Getter. If you allow someone to set a property, they generally expect to be able to read it back.'],
    practiceExercise: {
      task: 'Without coding: How many parameters MUST a setter function have?',
      expectedOutput: 'Exactly 1.',
      solution: 'Exactly 1 (the value being assigned).'
    },
    quiz: [
      { question: 'What keyword is used to define a Setter method?', options: ['put', 'set', 'assign', 'write'], answer: 'set' },
      { question: 'What is the primary use case for a Setter?', options: ['To make the code faster', 'To encrypt data', 'To intercept property assignments to run validation or side-effects before updating the actual data', 'To delete properties'], answer: 'To intercept property assignments to run validation or side-effects before updating the actual data' },
      { question: 'How do you trigger a setter named `score`?', options: ['object.score(100)', 'object.set("score", 100)', 'object.score = 100', 'object.score += 100'], answer: 'object.score = 100' },
      { question: 'How many parameters must a setter function accept?', options: ['Zero', 'Exactly one (the value being assigned)', 'Two (key and value)', 'Unlimited'], answer: 'Exactly one (the value being assigned)' },
      { question: 'What happens if a setter named `temperature` contains the code `this.temperature = val;`?', options: ['It works perfectly', 'It creates an infinite recursive loop and crashes, because assigning to `this.temperature` triggers the setter again', 'It deletes the value', 'It creates a private field'], answer: 'It creates an infinite recursive loop and crashes, because assigning to `this.temperature` triggers the setter again' }
    ],
    interviewQuestions: [
      { q: 'Can you have a getter without a setter?', a: 'Yes! This creates a "Read-Only" property. You can read the value, but if you try to assign a new value to it, the assignment will simply be ignored (or throw an error in strict mode).' }
    ],
    summary: ['Intercepts property assignments.', 'Used for data validation.', 'Must accept exactly one parameter.'],
    references: commonReferences
  },
  'js_static_methods': {
    isStructured: true,
    title: '247. Static Methods',
    difficulty: 'Advanced',
    readingTime: '3 min',
    definition: 'A `static` method is a function that belongs to the Class itself, NOT to the individual object instances created from the class.',
    whyUseIt: 'Static methods are used for utility functions related to the class that don\'t need access to specific instance data (like `this.name`).',
    syntax: 'class MyClass {\n  static myUtility() {\n    // ...\n  }\n}',
    codeExample: 'class Calculator {\n  // A normal instance method\n  add(a, b) {\n    return a + b;\n  }\n\n  // A STATIC method\n  static multiply(a, b) {\n    return a * b;\n  }\n}\n\n// 1. To use the instance method, we MUST create an object first\nconst calcObj = new Calculator();\nconsole.log(calcObj.add(2, 3)); // 5\n\n// 2. To use the STATIC method, we call it directly on the Class blueprint!\nconsole.log(Calculator.multiply(2, 3)); // 6\n\n// THIS WILL FAIL:\n// console.log(calcObj.multiply(2, 3)); // TypeError: calcObj.multiply is not a function',
    expectedOutput: '5\n6',
    explanation: [
      { code: 'static multiply', desc: 'The `static` keyword attaches this function to the `Calculator` blueprint itself, preventing instances from inheriting it.' },
      { code: 'Calculator.multiply', desc: 'We skip the `new` keyword entirely. We just use the Class name as a namespace.' }
    ],
    realWorldExample: 'The built-in `Math` object in JavaScript. You don\'t write `new Math().random()`. You just write `Math.random()`. `random()` is a static method on the Math class.',
    commonMistakes: [
      { error: 'Trying to use `this` inside a static method', code: 'static logName() { console.log(this.name); }', suffix: 'Inside a static method, `this` refers to the Class itself, NOT an instance. You cannot access instance properties like `this.balance` from inside a static method, because there is no instance!' }
    ],
    bestPractices: ['Use static methods for helper/utility functions, or for "factory methods" (e.g., `static createGuestUser() { return new User("Guest"); }`).'],
    practiceExercise: {
      task: 'Without coding: Why does `Array.isArray([])` work without needing the `new` keyword?',
      expectedOutput: 'Because it is a static method.',
      solution: 'Because `isArray` is a static method attached directly to the global `Array` class.'
    },
    quiz: [
      { question: 'What does the `static` keyword do to a class method?', options: ['It makes it unchangeable', 'It attaches the method to the Class itself, rather than to instances created from the class', 'It makes the method private', 'It speeds up execution'], answer: 'It attaches the method to the Class itself, rather than to instances created from the class' },
      { question: 'How do you call a static method named `validate()` on a class named `Helper`?', options: ['new Helper().validate()', 'Helper.validate()', 'validate.Helper()', 'Helper->validate()'], answer: 'Helper.validate()' },
      { question: 'If `const obj = new Helper()`, what happens if you try to run `obj.validate()`?', options: ['It works perfectly', 'It throws a TypeError because static methods are not inherited by instances', 'It runs twice', 'It returns undefined'], answer: 'It throws a TypeError because static methods are not inherited by instances' },
      { question: 'What does the `this` keyword refer to inside a static method?', options: ['The specific instance object', 'The global `window` object', 'The Class blueprint itself', '`undefined`'], answer: 'The Class blueprint itself' },
      { question: 'Which built-in JavaScript object is essentially just a collection of static methods?', options: ['Array', 'Object', 'Math (e.g., Math.random, Math.round)', 'String'], answer: 'Math (e.g., Math.random, Math.round)' }
    ],
    interviewQuestions: [
      { q: 'Can you have static properties as well as static methods?', a: 'Yes! In modern JavaScript, you can write `static maxHealth = 100;`. It is accessed via `ClassName.maxHealth` and is shared globally rather than copied to every instance.' }
    ],
    summary: ['Attached to the Class, not the Object.', 'Call via `ClassName.method()`.', 'Cannot access instance `this`.'],
    references: commonReferences
  }
};
