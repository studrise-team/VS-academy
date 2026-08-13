const commonReferences = [
  { label: 'MDN Web Docs - throw', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw' },
  { label: 'MDN Web Docs - Classes', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes' }
];

export const javascriptContentBatchMissing27 = {
  'js_throw': {
    isStructured: true,
    title: '234. throw',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `throw` statement allows you to create a custom error. When JavaScript executes a `throw` statement, the current function stops instantly, and control is passed to the nearest `catch` block (or the program crashes if there is no catch block).',
    whyUseIt: 'You use `throw` when the user does something fundamentally wrong (like entering an age of -5) that your program cannot reasonably handle, and you want to trigger an error state immediately rather than letting the bad data corrupt the rest of the application.',
    syntax: 'throw new Error("Something went wrong!");',
    codeExample: 'function withdrawMoney(amount, balance) {\n  // 1. Check for invalid data\n  if (amount > balance) {\n    // 2. Intentionally throw an error!\n    throw new Error("Insufficient funds");\n  }\n  if (amount <= 0) {\n    throw new Error("Withdrawal amount must be greater than zero");\n  }\n  \n  // 3. If we get here, the data is good\n  return balance - amount;\n}\n\ntry {\n  // This will trigger the first throw statement\n  const newBalance = withdrawMoney(1000, 500);\n  console.log("Success! New Balance:", newBalance);\n} catch (error) {\n  // The thrown error is caught here\n  console.log("Transaction failed:", error.message);\n}',
    expectedOutput: 'Transaction failed: Insufficient funds',
    explanation: [
      { code: 'throw', desc: 'The keyword that actually triggers the crash/exception.' },
      { code: 'new Error("...")', desc: 'You can technically `throw "a string"`, but you should ALWAYS throw a proper `Error` object because it contains a stack trace (showing you exactly where the error originated).' }
    ],
    realWorldExample: 'A login function. If the user forgets to type their password, you don\'t want to waste time sending a network request to the server. You just `throw new Error("Password cannot be blank")` instantly.',
    commonMistakes: [
      { error: 'Throwing strings instead of Error objects', code: 'throw "Something broke";', suffix: 'If you throw a raw string, the `catch` block will receive that string, but it won\'t have a `.stack` property, making it incredibly difficult to debug where the error came from in a large codebase.' }
    ],
    bestPractices: ['Use `throw` defensively. "Fail fast and fail loudly." If a function requires a number but is given an array, throw an error immediately before the array causes bizarre bugs 10 lines further down.'],
    practiceExercise: {
      task: 'Write a function `checkAge(age)` that throws an Error with the message "Too young" if age is less than 18.',
      expectedOutput: 'Throws an error conditionally.',
      solution: 'function checkAge(age) { if (age < 18) throw new Error("Too young"); }'
    },
    quiz: [
      { question: 'What does the `throw` keyword do?', options: ['It throws a variable into the garbage collector', 'It creates a custom exception/error and stops the execution of the current function', 'It sends data to the server', 'It catches errors'], answer: 'It creates a custom exception/error and stops the execution of the current function' },
      { question: 'What happens immediately after a `throw` statement is executed?', options: ['The code on the very next line runs', 'The program pauses for 5 seconds', 'Execution instantly stops and jumps to the nearest `catch` block (or crashes if uncaught)', 'It opens the debugger'], answer: 'Execution instantly stops and jumps to the nearest `catch` block (or crashes if uncaught)' },
      { question: 'Why is it better to `throw new Error("msg")` rather than `throw "msg"`?', options: ['Because strings are too short', 'Because the `Error` object automatically captures a "stack trace" (the file and line number where it happened), making debugging much easier', 'It is actually illegal to throw strings', 'They are exactly the same'], answer: 'Because the `Error` object automatically captures a "stack trace" (the file and line number where it happened), making debugging much easier' },
      { question: 'If you wrap a `throw` statement inside a `try` block, what happens?', options: ['The script crashes completely', 'The error is instantly caught by the corresponding `catch` block', 'The error is ignored', 'It causes an infinite loop'], answer: 'The error is instantly caught by the corresponding `catch` block' },
      { question: 'What is the philosophy of "Failing Fast"?', options: ['Writing code quickly', 'Crashing your app constantly', 'Validating data at the very beginning of a function and `throwing` an error immediately if the data is bad, rather than letting bad data cause confusing bugs later on', 'Ignoring try/catch blocks entirely'], answer: 'Validating data at the very beginning of a function and `throwing` an error immediately if the data is bad, rather than letting bad data cause confusing bugs later on' }
    ],
    interviewQuestions: [
      { q: 'Can you `throw` custom error classes?', a: 'Yes! You can create your own Error classes by extending the built-in Error object: `class ValidationError extends Error {}`. Then you can `throw new ValidationError("Invalid email")` and catch specific types of errors.' }
    ],
    summary: ['Used to create custom errors.', 'Execution stops instantly.', 'Always throw `new Error()`, not raw strings.'],
    references: commonReferences
  },
  'js_debugging_with_browser_devtools': {
    isStructured: true,
    title: '236. Debugging with Browser DevTools',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Browser DevTools (F12 or Right-Click -> Inspect) provide a powerful suite of tools to pause, step through, and analyze your JavaScript code while it is running, rather than relying solely on `console.log`.',
    whyUseIt: 'If you have a bug where a variable is undefined, putting `console.log` everywhere takes forever and requires reloading. DevTools let you freeze time and look at EVERY variable simultaneously.',
    syntax: '// Trigger the debugger automatically from your code\ndebugger;',
    codeExample: 'function calculateTotal(price, tax) {\n  // When the browser hits this keyword (and DevTools is open),\n  // it will FREEZE the page right here.\n  debugger;\n  \n  const total = price + (price * tax);\n  return total;\n}\n\ncalculateTotal(100, 0.05);',
    expectedOutput: 'The browser execution pauses, allowing you to inspect the values of `price` and `tax` directly in the browser UI.',
    explanation: [
      { code: 'The "Sources" Tab', desc: 'This is where JavaScript debugging happens in Chrome/Edge. You can view your files, click on line numbers to add "Breakpoints", and step through the code.' },
      { code: 'Breakpoints', desc: 'A blue/red arrow on a line of code. When JavaScript reaches that line, it pauses execution entirely.' }
    ],
    realWorldExample: 'You have a complex math formula calculating a shopping cart total, and the result is `NaN`. You add a breakpoint before the math happens, trigger the calculation, and check every single variable. You instantly see that `taxRate` is `undefined`, solving the bug in 10 seconds.',
    commonMistakes: [
      { error: 'Leaving debugger; in production code', code: '', suffix: 'If you push code with the word `debugger;` in it, and a user happens to have their console open, your website will literally freeze for them. Always remove it before deploying!' }
    ],
    bestPractices: ['Learn the shortcut keys! F10 (Step Over) executes the next line. F11 (Step Into) goes INSIDE the function being called. F8 (Resume) unpauses the code until the next breakpoint.'],
    practiceExercise: {
      task: 'Without coding: How do you open the Developer Tools in Chrome on Windows/Linux?',
      expectedOutput: 'F12',
      solution: 'F12, or Ctrl+Shift+I, or Right-Click -> Inspect.'
    },
    quiz: [
      { question: 'What does the `debugger;` statement do in JavaScript?', options: ['It fixes bugs automatically', 'If the DevTools are open, it freezes the execution of the code at that exact line', 'It deletes the console', 'It restarts the browser'], answer: 'If the DevTools are open, it freezes the execution of the code at that exact line' },
      { question: 'Which tab in Chrome DevTools is primarily used for pausing and stepping through JavaScript code?', options: ['Elements', 'Console', 'Network', 'Sources'], answer: 'Sources' },
      { question: 'What is a "Breakpoint"?', options: ['A time to rest', 'A specific line of code where you have told the browser to pause execution so you can inspect variables', 'An error that crashes the page', 'A CSS media query'], answer: 'A specific line of code where you have told the browser to pause execution so you can inspect variables' },
      { question: 'Why is stepping through code with a debugger often better than `console.log()`?', options: ['It is a newer feature', 'It allows you to freeze time and inspect the value of EVERY variable in scope at once, rather than having to manually log them one by one', '`console.log` is deprecated', 'It makes the code run faster'], answer: 'It allows you to freeze time and inspect the value of EVERY variable in scope at once, rather than having to manually log them one by one' },
      { question: 'What happens if you leave `debugger;` in your live, deployed code?', options: ['Nothing, browsers ignore it on live sites', 'If a user opens their DevTools, the website will freeze when that code runs, ruining their experience', 'It crashes the server', 'It deletes their localStorage'], answer: 'If a user opens their DevTools, the website will freeze when that code runs, ruining their experience' }
    ],
    interviewQuestions: [
      { q: 'What is a Conditional Breakpoint?', a: 'In the Sources tab, you can right-click a line number and add a "Conditional Breakpoint". It will ONLY pause execution if a specific condition is true (e.g., `user.id === 5`). This is incredible for debugging loops that run 1,000 times, allowing you to pause only on the iteration that is causing problems.' }
    ],
    summary: ['Use `debugger;` to freeze code.', 'Use the Sources tab in DevTools.', 'Inspect variables in real-time.'],
    references: commonReferences
  },
  'js_classes': {
    isStructured: true,
    title: '238. Classes',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A `class` in JavaScript is a blueprint for creating objects. It encapsulates data (properties) and behavior (methods) into a single, reusable structure.',
    whyUseIt: 'If you are building a game and need 50 Enemy objects, writing 50 separate objects by hand is a nightmare. Instead, you create one `Enemy` class blueprint, and then use it to instantly stamp out 50 identical enemies.',
    syntax: 'class ClassName {\n  // properties and methods go here\n}',
    codeExample: '// 1. Define the Blueprint\nclass User {\n  // A method inside the class\n  login() {\n    console.log("User logged in!");\n  }\n  \n  logout() {\n    console.log("User logged out!");\n  }\n}\n\n// 2. Use the blueprint to create an actual Object (an "Instance")\nconst user1 = new User();\nconst user2 = new User();\n\n// 3. Both objects have access to the methods\nuser1.login(); // "User logged in!"\nuser2.logout(); // "User logged out!"',
    expectedOutput: 'User logged in!\nUser logged out!',
    explanation: [
      { code: 'class User', desc: 'Class names are always Capitalized by convention (PascalCase).' },
      { code: 'new User()', desc: 'The `new` keyword tells JavaScript to take the blueprint and construct a brand new, independent object in memory.' }
    ],
    realWorldExample: 'React Components. Before React Hooks took over, every React component was built using a `class` (e.g., `class App extends React.Component`).',
    commonMistakes: [
      { error: 'Using commas between methods', code: 'class User { login() {}, logout() {} }', suffix: 'Unlike standard JavaScript objects, you DO NOT use commas to separate methods inside a class body. It will cause a SyntaxError.' }
    ],
    bestPractices: ['Use classes when you need to create multiple objects that share the exact same structure and behavior. If you only need one object (like a global configuration setting), just use a standard `{}` object literal.'],
    practiceExercise: {
      task: 'Define an empty class called `Car` and create a new instance of it stored in a variable called `myCar`.',
      expectedOutput: 'class Car {} const myCar = new Car();',
      solution: 'class Car {} \nconst myCar = new Car();'
    },
    quiz: [
      { question: 'What is a JavaScript Class?', options: ['A CSS styling rule', 'A blueprint or template for creating objects with shared properties and methods', 'A type of loop', 'A built-in array method'], answer: 'A blueprint or template for creating objects with shared properties and methods' },
      { question: 'What naming convention is strictly used for Class names?', options: ['camelCase', 'snake_case', 'PascalCase (capitalized first letter)', 'kebab-case'], answer: 'PascalCase (capitalized first letter)' },
      { question: 'What keyword is required to create a real object from a Class blueprint?', options: ['create', 'make', 'new', 'instance'], answer: 'new' },
      { question: 'Do you use commas to separate methods inside a `class` body?', options: ['Yes, always', 'No, it will cause a SyntaxError', 'Only in strict mode', 'Yes, but it is optional'], answer: 'No, it will cause a SyntaxError' },
      { question: 'If `user1` and `user2` are both created from `new User()`, do they share the exact same methods in memory?', options: ['Yes, they inherit them from the Class prototype, saving memory', 'No, every object gets a totally separate copy of the function, wasting memory', 'Only if they are numbers', 'They don\'t have methods'], answer: 'Yes, they inherit them from the Class prototype, saving memory' }
    ],
    interviewQuestions: [
      { q: 'Are JavaScript Classes "Real" classes like in Java or C++?', a: 'No. JavaScript is fundamentally a Prototype-based language. The `class` keyword (introduced in ES6) is mostly "syntactic sugar" over JavaScript\'s existing prototype chain. Under the hood, it is still just creating constructor functions and modifying prototypes.' }
    ],
    summary: ['A blueprint for creating objects.', 'Use `PascalCase` for names.', 'Instantiate using the `new` keyword.'],
    references: commonReferences
  },
  'js_constructors': {
    isStructured: true,
    title: '239. Constructors',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'The `constructor` is a special method inside a class that is called automatically the exact moment you use the `new` keyword. It is used to initialize the object\'s starting data.',
    whyUseIt: 'If you create 50 `Enemy` objects, you don\'t want them all to have the same name. You use the constructor to pass unique data (like `new Enemy("Goblin")`) so each object is initialized with its own distinct properties.',
    syntax: 'class ClassName {\n  constructor(param1, param2) {\n    this.property = param1;\n  }\n}',
    codeExample: 'class Player {\n  // 1. The constructor runs automatically when "new" is used\n  constructor(playerName, startingHealth) {\n    // "this" refers to the specific object being created\n    this.name = playerName;\n    this.health = startingHealth;\n    this.level = 1; // Default value for everyone\n  }\n\n  // 2. Methods can use "this" to access the data\n  takeDamage(amount) {\n    this.health -= amount;\n    console.log(`${this.name} took damage! Health is now ${this.health}`);\n  }\n}\n\n// 3. Passing unique data into the constructor\nconst player1 = new Player("Arthur", 100);\nconst player2 = new Player("Merlin", 60);\n\nplayer1.takeDamage(10); // "Arthur took damage! Health is now 90"',
    expectedOutput: 'Arthur took damage! Health is now 90',
    explanation: [
      { code: 'constructor(...)', desc: 'You can only have ONE constructor per class. It is the setup function.' },
      { code: 'this.name = ...', desc: 'The `this` keyword is incredibly important here. It means "attach this property to the specific object currently being built".' }
    ],
    realWorldExample: 'A Shopping Cart Item. `class CartItem { constructor(name, price, quantity) { ... } }`. When a user clicks "Add to Cart", you run `new CartItem("Shoes", 50, 1)`, immediately setting up the item with its correct data.',
    commonMistakes: [
      { error: 'Forgetting `this`', code: 'constructor(name) { name = name; }', suffix: 'If you don\'t use `this.name = name`, the data is just saved to a temporary local variable inside the constructor function, and instantly deleted when the constructor finishes. The object itself will be totally empty!' }
    ],
    bestPractices: ['Keep constructors simple. They should only assign properties. Don\'t put complex logic or network requests (`fetch`) inside a constructor.'],
    practiceExercise: {
      task: 'Create a class `Dog`. Give it a constructor that takes a `breed` parameter and assigns it to `this.breed`.',
      expectedOutput: 'A class with a constructor assigning this.breed.',
      solution: 'class Dog { constructor(breed) { this.breed = breed; } }'
    },
    quiz: [
      { question: 'What is the purpose of the `constructor` method in a class?', options: ['To destroy the object', 'To render HTML', 'To initialize the object with starting data the moment it is created', 'To define methods'], answer: 'To initialize the object with starting data the moment it is created' },
      { question: 'When does the `constructor` method run?', options: ['When the page loads', 'Automatically and instantly when you use the `new` keyword to create an instance', 'When you call it manually via `object.constructor()`', 'When the object is deleted'], answer: 'Automatically and instantly when you use the `new` keyword to create an instance' },
      { question: 'What does the `this` keyword refer to inside the constructor?', options: ['The HTML document', 'The class blueprint itself', 'The specific, brand new object instance currently being created', 'The previous object'], answer: 'The specific, brand new object instance currently being created' },
      { question: 'How many `constructor` methods can you have inside a single class?', options: ['Zero', 'Exactly one', 'Up to three', 'Unlimited'], answer: 'Exactly one' },
      { question: 'If you write `new User("Alice")`, where does the string "Alice" go?', options: ['It becomes the class name', 'It is passed as an argument directly into the `constructor` function', 'It is ignored', 'It is saved to localStorage'], answer: 'It is passed as an argument directly into the `constructor` function' }
    ],
    interviewQuestions: [
      { q: 'What happens if you don\'t define a `constructor` in your class?', a: 'JavaScript automatically provides a hidden, default empty constructor behind the scenes (e.g., `constructor() {}`). The object will still be created, it just won\'t have any properties assigned upon creation.' }
    ],
    summary: ['The setup function for a class.', 'Runs automatically on `new`.', 'Use `this.property` to assign data.'],
    references: commonReferences
  },
  'js_objects': {
    isStructured: true,
    title: '240. Objects',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'In Object-Oriented Programming (OOP), an Object is an "instance" created from a Class blueprint. It is a bundle of related state (properties/data) and behavior (methods/functions).',
    whyUseIt: 'Objects allow you to model real-world concepts in your code. Instead of having 5 disconnected variables (`userName`, `userAge`, `userEmail`), you group them into one coherent `user` Object.',
    syntax: 'const myObj = new MyClass();\nmyObj.property = "value";\nmyObj.method();',
    codeExample: 'class BankAccount {\n  constructor(ownerName, startingBalance) {\n    this.owner = ownerName;\n    this.balance = startingBalance;\n  }\n\n  deposit(amount) {\n    this.balance += amount;\n  }\n}\n\n// 1. "aliceAccount" is the Object (Instance)\nconst aliceAccount = new BankAccount("Alice", 500);\n\n// 2. "bobAccount" is a COMPLETELY DIFFERENT Object\nconst bobAccount = new BankAccount("Bob", 100);\n\n// 3. Modifying Alice\'s object has NO effect on Bob\'s object\naliceAccount.deposit(200);\n\nconsole.log(aliceAccount.balance); // 700\nconsole.log(bobAccount.balance); // 100 (Unchanged)',
    expectedOutput: '700\n100',
    explanation: [
      { code: 'Instance', desc: 'When you hear the word "Instance" in programming, it just means "a specific object created from a class". Alice\'s account is an instance of BankAccount.' },
      { code: 'Encapsulation', desc: 'Notice how the `balance` and the `deposit()` function are grouped together inside the object. The function directly operates on its own internal data using `this`.' }
    ],
    realWorldExample: 'A video game. The class is `Car`. The objects (instances) are the 10 specific cars currently driving on the screen. Each has the same methods (`accelerate()`, `brake()`), but different properties (`color: "red"`, `speed: 85`).',
    commonMistakes: [
      { error: 'Confusing the Class with the Object', code: 'BankAccount.deposit(100)', suffix: 'You cannot call a standard method directly on the blueprint! You must create an object first using `new`, and call the method on the resulting object.' }
    ],
    bestPractices: ['Treat objects as independent entities. If an object needs to change its own data, it should do so through its own methods (like `deposit()`), rather than some external function reaching in and changing it.'],
    practiceExercise: {
      task: 'Without coding: If you create two objects `c1` and `c2` from a `Car` class, and you change the color of `c1` to red, what color is `c2`?',
      expectedOutput: 'Whatever it was originally.',
      solution: 'It remains unchanged. Objects created from classes are completely independent of each other.'
    },
    quiz: [
      { question: 'What is the relationship between a Class and an Object?', options: ['They are opposites', 'A Class is the blueprint, an Object is the actual item built from that blueprint', 'An Object is the blueprint, a Class is the actual item', 'They are exactly the same thing'], answer: 'A Class is the blueprint, an Object is the actual item built from that blueprint' },
      { question: 'What is another word for an Object created from a class?', options: ['A blueprint', 'An instance', 'A prototype', 'A module'], answer: 'An instance' },
      { question: 'If you create two instances from the same class, do they share the same data properties (like `this.balance`)?', options: ['Yes, changing one changes the other', 'No, each instance has its own completely independent copy of the properties', 'Only if they are arrays', 'Only in strict mode'], answer: 'No, each instance has its own completely independent copy of the properties' },
      { question: 'What does "Encapsulation" mean in Object-Oriented Programming?', options: ['Encrypting passwords', 'Grouping related data (properties) and the functions that operate on that data (methods) together into a single object', 'Making code run faster', 'Using the `fetch` API'], answer: 'Grouping related data (properties) and the functions that operate on that data (methods) together into a single object' },
      { question: 'Can you call an instance method directly on the Class name (e.g., `MyClass.myMethod()`)?', options: ['Yes, always', 'No, you must create an instance first and call it on the instance (unless it is a `static` method)', 'Yes, if you use the `function` keyword', 'Only in React'], answer: 'No, you must create an instance first and call it on the instance (unless it is a `static` method)' }
    ],
    interviewQuestions: [
      { q: 'What is a `static` method?', a: 'A static method is a function attached directly to the Class itself, NOT to the individual object instances. You call it like `Math.random()`. It is used for utility functions that don\'t need to read data from a specific object.' }
    ],
    summary: ['An Object is an instance of a Class.', 'Groups data and behavior together.', 'Each object is completely independent.'],
    references: commonReferences
  }
};
