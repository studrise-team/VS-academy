const commonReferences = [
  { label: 'MDN Web Docs - Functions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions' }
];

export const javascriptContentBatchMissing8 = {
  'js_object_practice_problems': {
    isStructured: true,
    title: '113. Object Practice Problems',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'This section tests your understanding of JavaScript Objects. Objects are the core data structure in JavaScript, and mastering them is essential for any web developer.',
    whyUseIt: 'Practicing these concepts solidifies your ability to create, update, loop through, and manipulate objects, which you will do every single day as a developer.',
    syntax: '// Practice Exercises Below',
    codeExample: '// Sample data for the exercises\nconst library = [\n  { title: "The Hobbit", author: "J.R.R. Tolkien", status: { read: true } },\n  { title: "1984", author: "George Orwell", status: { read: false } }\n];',
    expectedOutput: '',
    explanation: [
      { code: 'library', desc: 'An array of objects. Notice the nested `status` object.' }
    ],
    realWorldExample: 'A coding interview where you are asked to manipulate a JSON response from an API.',
    commonMistakes: [
      { error: 'Forgetting to return from a map/filter function', code: 'library.map(b => { b.title })', suffix: 'Returns undefined.' },
      { error: 'Mutating original objects accidentally', code: 'let copy = obj; copy.name = "Test";', suffix: 'Both objects now have name "Test" because it was a reference, not a copy.' }
    ],
    bestPractices: ['Try to solve the problems using modern array methods (map, filter, reduce) and object destructuring.'],
    practiceExercise: {
      task: 'Given the `library` array above, write a line of code using `.map()` to return an array of just the book titles.',
      expectedOutput: '["The Hobbit", "1984"]',
      solution: 'let titles = library.map(book => book.title); console.log(titles);'
    },
    quiz: [
      { question: 'Problem 1: How do you add a new property `rating: 5` to the FIRST book in the library array?', options: ['library[1].rating = 5;', 'library[0].rating = 5;', 'library.rating = 5;', 'library[0].push({rating: 5})'], answer: 'library[0].rating = 5;' },
      { question: 'Problem 2: How do you filter the library to only get books that have been read (`status.read === true`)?', options: ['library.filter(b => b.status.read === true)', 'library.find(b => b.status.read)', 'library.map(b => b.status.read)', 'library.filter(b => b.read)'], answer: 'library.filter(b => b.status.read === true)' },
      { question: 'Problem 3: Write code to log the author of the second book.', options: ['console.log(library.author[1])', 'console.log(library[1].author)', 'console.log(library[2].author)', 'console.log(library[1]["author"])'], answer: 'console.log(library[1].author)' },
      { question: 'Problem 4: How do you safely copy the FIRST book object without copying its reference? (Shallow copy)', options: ['let copy = library[0]', 'let copy = Object.assign({}, library[0])', 'let copy = { ...library[0] }', 'Both B and C are correct'], answer: 'Both B and C are correct' },
      { question: 'Problem 5: How do you delete the `author` property from the first book?', options: ['delete library[0].author', 'library[0].author = null', 'remove library[0].author', 'library[0].delete("author")'], answer: 'delete library[0].author' }
    ],
    interviewQuestions: [
      { q: 'Given an array of user objects, how would you write a function to calculate the average age of all users?', a: '`const getAverage = users => users.reduce((sum, u) => sum + u.age, 0) / users.length;`' }
    ],
    summary: ['Master arrays of objects.', 'Use dot notation and bracket notation appropriately.', 'Combine objects with array methods like map and filter.'],
    references: commonReferences
  },
  'js_function_declaration': {
    isStructured: true,
    title: '115. Function Declaration',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'A function declaration (or function statement) defines a function with the specified parameters. A key feature of function declarations is that they are "hoisted", meaning they can be called BEFORE they are defined in the code.',
    whyUseIt: 'Functions allow you to write a block of code once and reuse it many times. Declarations are the most standard and traditional way to create a function in JavaScript.',
    syntax: 'function name(parameters) { // code }',
    codeExample: '// Calling the function BEFORE it is declared (Hoisting)\nsayHello();\n\nfunction sayHello() {\n  console.log("Hello, World!");\n}',
    expectedOutput: '"Hello, World!"',
    explanation: [
      { code: 'function', desc: 'The keyword used to declare a function.' },
      { code: 'sayHello', desc: 'The name of the function. Used to invoke (call) it later.' },
      { code: 'sayHello()', desc: 'Even though this is at the top of the script, it works perfectly because JavaScript hoists the entire function declaration to the top before running the code.' }
    ],
    realWorldExample: 'A utility function placed at the bottom of a file to calculate taxes, which is called by various main functions at the top of the file.',
    commonMistakes: [
      { error: 'Forgetting to call the function', code: 'function run() { console.log("running"); }', suffix: 'Defining the function does not execute it. You must explicitly call it: `run();`.' }
    ],
    bestPractices: ['Use descriptive, action-oriented names for functions (e.g., `calculateTotal`, `fetchUserData`, `validateEmail`).'],
    practiceExercise: {
      task: 'Declare a function named `greet` that logs "Welcome!". Call the function.',
      expectedOutput: '"Welcome!"',
      solution: 'function greet() { console.log("Welcome!"); } greet();'
    },
    quiz: [
      { question: 'What keyword is used to start a function declaration?', options: ['def', 'func', 'function', 'method'], answer: 'function' },
      { question: 'What is "hoisting" in relation to function declarations?', options: ['The function is moved to another file', 'The function can be called before it appears in the code', 'The function executes faster', 'The function is protected from being overwritten'], answer: 'The function can be called before it appears in the code' },
      { question: 'How do you execute (call) a function named `myFunc`?', options: ['myFunc;', 'call myFunc()', 'myFunc()', 'execute myFunc'], answer: 'myFunc()' },
      { question: 'Can a function declaration have no parameters?', options: ['No, it must have at least one', 'Yes, indicated by empty parentheses `()`', 'Yes, by omitting the parentheses entirely', 'Only if it returns nothing'], answer: 'Yes, indicated by empty parentheses `()`' },
      { question: 'Where is a good place to put utility function declarations in a file?', options: ['At the very top', 'At the bottom, because hoisting allows them to be used anywhere', 'In the middle', 'Inside other functions'], answer: 'At the bottom, because hoisting allows them to be used anywhere' }
    ],
    interviewQuestions: [
      { q: 'Can a function declaration be reassigned?', a: 'Yes, unfortunately. If you write `function myFunc() {}` and later write `myFunc = "hello"`, the function is destroyed and becomes a string. This is why many developers prefer Function Expressions with `const`.' }
    ],
    summary: ['Defined with the `function` keyword.', 'They are fully hoisted.', 'Must be invoked with `()`.'],
    references: commonReferences
  },
  'js_function_expression': {
    isStructured: true,
    title: '116. Function Expression',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'A function expression defines a function inside an expression. This usually involves assigning an anonymous function (a function without a name) to a variable.',
    whyUseIt: 'Unlike function declarations, function expressions assigned to `const` or `let` are NOT hoisted. This enforces a cleaner top-to-bottom coding style (you must define it before you use it) and prevents accidental reassignment.',
    syntax: 'const name = function(parameters) { // code };',
    codeExample: '// This would cause an error because greet is not initialized yet:\n// greet(); \n\nconst greet = function() {\n  console.log("Hello from expression!");\n};\n\ngreet();',
    expectedOutput: '"Hello from expression!"',
    explanation: [
      { code: 'const greet', desc: 'The function is stored in a variable named `greet`. Because it is a `const`, it can never be accidentally overwritten by another variable named `greet`.' },
      { code: 'function()', desc: 'This is an "anonymous" function. It has no name between the `function` keyword and the `()`.' }
    ],
    realWorldExample: 'Assigning a function to a variable based on a condition: `let action = isMobile ? function() { swipe() } : function() { click() };`.',
    commonMistakes: [
      { error: 'Trying to call it before it is defined', code: 'run(); const run = function() {};', suffix: 'Throws a ReferenceError. Function expressions are NOT hoisted like function declarations.' }
    ],
    bestPractices: ['Many modern codebases strictly use Function Expressions (specifically Arrow Functions) assigned to `const` variables to prevent hoisting confusion and variable reassignment.'],
    practiceExercise: {
      task: 'Create a function expression assigned to a `const` variable called `sayBye`. Have it log "Goodbye". Call it.',
      expectedOutput: '"Goodbye"',
      solution: 'const sayBye = function() { console.log("Goodbye"); }; sayBye();'
    },
    quiz: [
      { question: 'What is a function expression?', options: ['A function that returns a mathematical expression', 'A function assigned to a variable', 'A function that executes automatically', 'A function inside a string'], answer: 'A function assigned to a variable' },
      { question: 'Are function expressions hoisted in the same way as function declarations?', options: ['Yes', 'No, they cannot be called before they are defined', 'Only if assigned to `var`', 'Only in strict mode'], answer: 'No, they cannot be called before they are defined' },
      { question: 'What is an "anonymous" function?', options: ['A function that cannot be traced', 'A function without a name identifier', 'A function that returns undefined', 'A function without parameters'], answer: 'A function without a name identifier' },
      { question: 'Why use `const` for a function expression?', options: ['It makes it run faster', 'It prevents the function from being accidentally reassigned to something else later', 'It allows hoisting', 'It is required by JavaScript'], answer: 'It prevents the function from being accidentally reassigned to something else later' },
      { question: 'Which syntax represents a function expression?', options: ['function myFunc() {}', 'const myFunc = function() {}', 'myFunc function() {}', 'declare function myFunc() {}'], answer: 'const myFunc = function() {}' }
    ],
    interviewQuestions: [
      { q: 'If a function expression uses `var` instead of `const`, is it hoisted?', a: 'The *variable declaration* is hoisted (so `myFunc` exists), but its *assignment* is not. If you call it before definition, it will throw `TypeError: myFunc is not a function` because it is currently `undefined`.' }
    ],
    summary: ['Function stored in a variable.', 'Not hoisted (cannot use before definition).', 'Often uses anonymous functions.'],
    references: commonReferences
  },
  'js_parameters': {
    isStructured: true,
    title: '117. Parameters',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Parameters are the names listed in the function definition. Arguments are the actual values passed to the function when it is called. Parameters act as local variables inside the function.',
    whyUseIt: 'Without parameters, a function would do the exact same thing every time. Parameters allow you to pass data into a function so it can operate dynamically.',
    syntax: 'function name(param1, param2) { // use param1 and param2 }',
    codeExample: '// "name" and "age" are the parameters\nfunction greet(name, age) {\n  console.log("Hi " + name + ", you are " + age);\n}\n\n// "Alice" and 25 are the arguments\ngreet("Alice", 25);\ngreet("Bob", 30);',
    expectedOutput: '"Hi Alice, you are 25"\n"Hi Bob, you are 30"',
    explanation: [
      { code: 'function greet(name, age)', desc: 'Declares that this function expects two pieces of data.' },
      { code: 'greet("Alice", 25)', desc: 'Passes "Alice" into the `name` parameter, and 25 into the `age` parameter.' }
    ],
    realWorldExample: 'A function that calculates a shopping cart total: `function applyDiscount(total, discountPercent) { ... }`.',
    commonMistakes: [
      { error: 'Passing too few arguments', code: 'greet("Alice");', suffix: 'If you don\'t pass enough arguments, the missing parameters will be `undefined`. `greet("Alice")` results in "Hi Alice, you are undefined".' }
    ],
    bestPractices: ['Keep the number of parameters small (ideally 1-3). If a function needs 5 or more parameters, consider passing a single Object instead.'],
    practiceExercise: {
      task: 'Write a function `multiply` that takes two parameters, `a` and `b`. Inside the function, log the result of `a * b`. Call it with 5 and 4.',
      expectedOutput: '20',
      solution: 'function multiply(a, b) { console.log(a * b); } multiply(5, 4);'
    },
    quiz: [
      { question: 'What is the difference between a parameter and an argument?', options: ['They are the exact same thing', 'Parameters are in the definition, arguments are the values passed during the call', 'Arguments are in the definition, parameters are the values passed', 'Parameters are for numbers, arguments for strings'], answer: 'Parameters are in the definition, arguments are the values passed during the call' },
      { question: 'What happens if you pass MORE arguments than there are parameters?', options: ['An error is thrown', 'The extra arguments are ignored (but can be accessed via the `arguments` object)', 'The function breaks', 'The extra arguments overwrite the first ones'], answer: 'The extra arguments are ignored (but can be accessed via the `arguments` object)' },
      { question: 'What happens if you pass FEWER arguments than there are parameters?', options: ['Error', 'The missing parameters become `null`', 'The missing parameters become `undefined`', 'The function won\'t run'], answer: 'The missing parameters become `undefined`' },
      { question: 'Are parameters available outside the function?', options: ['Yes, always', 'No, they are local to the function', 'Only if declared with var', 'Yes, if returned'], answer: 'No, they are local to the function' },
      { question: 'What is the recommended approach if a function needs 10 parameters?', options: ['Write them all out sequentially', 'Pass a single object containing all the data', 'Break it into 10 functions', 'Use global variables'], answer: 'Pass a single object containing all the data' }
    ],
    interviewQuestions: [
      { q: 'How can you capture all arguments passed to a function, even if you didn\'t define any parameters?', a: 'You can use the Rest parameter `...args` in the definition (e.g. `function(...args)`), or the legacy `arguments` object inside a regular function.' }
    ],
    summary: ['Parameters receive data.', 'Arguments are the actual data passed.', 'Missing arguments become `undefined`.'],
    references: commonReferences
  },
  'js_default_parameters': {
    isStructured: true,
    title: '120. Default Parameters',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Default parameters allow named parameters to be initialized with default values if no value or `undefined` is passed to the function.',
    whyUseIt: 'It prevents errors and removes the need for clunky `if (param === undefined)` checks inside your function body.',
    syntax: 'function name(param = defaultValue) { }',
    codeExample: 'function greet(name = "Guest", greeting = "Hello") {\n  console.log(greeting + ", " + name + "!");\n}\n\n// No arguments passed, uses defaults\ngreet(); \n\n// One argument passed, overrides "name", uses default for "greeting"\ngreet("Sarah");\n\n// Both arguments passed, overrides both defaults\ngreet("John", "Welcome");',
    expectedOutput: '"Hello, Guest!"\n"Hello, Sarah!"\n"Welcome, John!"',
    explanation: [
      { code: 'name = "Guest"', desc: 'If the caller does not provide a name, it defaults to the string "Guest".' },
      { code: 'greet()', desc: 'Because nothing was passed, both `name` and `greeting` fall back to their defaults.' }
    ],
    realWorldExample: 'A function that creates a user profile might have `function createUser(name, role = "Subscriber")`.',
    commonMistakes: [
      { error: 'Passing null', code: 'greet(null)', suffix: 'Default parameters only kick in for `undefined` or omitted arguments. If you explicitly pass `null`, the parameter will be `null`, not the default.' },
      { error: 'Putting default parameters first', code: 'function(a = 1, b)', suffix: 'If you have a mix of required and default parameters, always put the ones with defaults at the END of the list.' }
    ],
    bestPractices: ['Always put parameters with default values at the end of the parameter list so the caller doesn\'t have to pass `undefined` just to reach the next parameter.'],
    practiceExercise: {
      task: 'Write a function `multiply(a, b = 1)` that logs the product. Call it with just the number 5.',
      expectedOutput: '5',
      solution: 'function multiply(a, b = 1) { console.log(a * b); } multiply(5);'
    },
    quiz: [
      { question: 'What happens if a parameter has a default value but an argument IS provided?', options: ['An error occurs', 'The default value is used', 'The provided argument overwrites the default', 'Both are combined'], answer: 'The provided argument overwrites the default' },
      { question: 'Which value triggers a default parameter?', options: ['null', 'false', '0', 'undefined (or omitting the argument)'], answer: 'undefined (or omitting the argument)' },
      { question: 'If `function test(x = 5)` is called with `test(null)`, what is `x`?', options: ['5', 'null', 'undefined', 'Error'], answer: 'null' },
      { question: 'Where should default parameters be placed in the parameter list?', options: ['At the beginning', 'At the end', 'In alphabetical order', 'It doesn\'t matter'], answer: 'At the end' },
      { question: 'Can a default parameter be an expression, like `param = Date.now()`?', options: ['Yes, it is evaluated at call time', 'No, it must be a primitive value', 'Only in strict mode', 'Yes, but it is evaluated at compile time'], answer: 'Yes, it is evaluated at call time' }
    ],
    interviewQuestions: [
      { q: 'Can a default parameter reference previous parameters?', a: 'Yes! `function doMath(a, b = a * 2)` is perfectly valid. If you call `doMath(5)`, `b` becomes 10.' }
    ],
    summary: ['Set fallbacks with `= value`.', 'Only triggers on `undefined`.', 'Put default parameters at the end of the list.'],
    references: commonReferences
  }
};
