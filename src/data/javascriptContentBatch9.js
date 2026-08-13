const commonReferences = [
  { label: 'W3Schools JavaScript Functions', url: 'https://www.w3schools.com/js/js_functions.asp' },
  { label: 'MDN Web Docs - Functions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions' },
  { label: 'W3Schools JavaScript Arrow Functions', url: 'https://www.w3schools.com/js/js_arrow_function.asp' }
];

export const javascriptContentBatch9 = {
  'js_what_is_a_function': {
    isStructured: true,
    title: '114. What is a Function?',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'A JavaScript function is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it).',
    whyUseIt: 'Functions allow you to write code once and reuse it many times. Without functions, if you wanted to do the same math calculation 5 times, you would have to write the same code 5 times. Functions keep code DRY (Don\'t Repeat Yourself).',
    syntax: 'function functionName() {\n  // Code to be executed\n}\n\n// Call the function\nfunctionName();',
    codeExample: 'function greet() {\n  console.log("Hello, World!");\n}\n\n// The function won\'t run until we call it\ngreet();\ngreet();',
    expectedOutput: '"Hello, World!"\n"Hello, World!"',
    explanation: [
      { code: 'function greet()', desc: 'The `function` keyword creates the function. `greet` is the name we chose.' },
      { code: '{ ... }', desc: 'The curly braces contain the code that belongs to this function.' },
      { code: 'greet();', desc: 'This is the "invocation" or "call". It tells JavaScript to go find the `greet` function and run the code inside it.' }
    ],
    realWorldExample: 'A `calculateTax()` function. On an e-commerce site, you call this function every time a user adds an item to their cart, rather than rewriting the tax math everywhere.',
    commonMistakes: [
      { error: 'Forgetting to call the function', code: 'function sayHi() { console.log("Hi"); }\n// Nothing happens here', suffix: 'Defining a function does NOT run it. You must add `sayHi();` to actually execute the code.' }
    ],
    bestPractices: ['Name functions using verbs (action words) like `getUser()`, `calculateTotal()`, or `validateForm()`, because functions perform actions.'],
    practiceExercise: {
      task: 'Create a function named `sayGoodbye` that logs "Goodbye!". Then call the function once.',
      expectedOutput: '"Goodbye!"',
      solution: 'function sayGoodbye() { console.log("Goodbye!"); } sayGoodbye();'
    },
    quiz: [
      { question: 'What keyword is used to create a function?', options: ['method', 'func', 'function', 'def'], answer: 'function' },
      { question: 'What must you do to make a function actually run?', options: ['Define it', 'Call/invoke it using its name followed by parentheses `()`', 'Put it inside an array', 'Use the `run` keyword'], answer: 'Call/invoke it using its name followed by parentheses `()`' },
      { question: 'What does DRY stand for in programming?', options: ['Do Rewrite Yourself', 'Don\'t Repeat Yourself', 'Data Required Yearly', 'Dynamic Render Yield'], answer: 'Don\'t Repeat Yourself' },
      { question: 'Which is a good naming convention for a function?', options: ['userNames', 'calculateTotal', 'blue', 'dataList'], answer: 'calculateTotal' },
      { question: 'What characters hold the block of code inside a function?', options: ['[]', '()', '{}', '<>'], answer: '{}' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between defining a function and invoking a function?', a: 'Defining a function is just writing the instructions (saving them for later). Invoking a function is telling JavaScript to execute those instructions right now.' }
    ],
    summary: ['Functions are reusable blocks of code.', 'Created using the `function` keyword.', 'Must be "called" with `()` to execute.'],
    references: commonReferences
  },

  'js_parameters_and_arguments': {
    isStructured: true,
    title: '117-118. Parameters and Arguments',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Parameters are variables listed as a part of the function definition. Arguments are the actual values passed to the function when it is invoked.',
    whyUseIt: 'Without parameters, a function would do exactly the same thing every time. Parameters act as placeholders, allowing the function to process different data each time you call it.',
    syntax: 'function name(parameter1, parameter2) {\n  // Code uses parameter1 and parameter2\n}\n\nname(argument1, argument2);',
    codeExample: 'function greetUser(firstName, lastName) {\n  console.log("Welcome, " + firstName + " " + lastName);\n}\n\n// Calling with different arguments\ngreetUser("Alice", "Smith");\ngreetUser("Bob", "Johnson");',
    expectedOutput: '"Welcome, Alice Smith"\n"Welcome, Bob Johnson"',
    explanation: [
      { code: '(firstName, lastName)', desc: 'These are PARAMETERS. They are empty variables waiting to receive data when the function runs.' },
      { code: '("Alice", "Smith")', desc: 'These are ARGUMENTS. They are the actual string values being sent into the function.' },
      { code: 'greetUser("Bob", ...)', desc: 'The function can be reused with completely different arguments to produce a different output.' }
    ],
    realWorldExample: 'A `sendEmail(recipient, subject, body)` function. You write the function once, but you pass different emails and messages (arguments) every time you use it.',
    commonMistakes: [
      { error: 'Passing too few arguments', code: 'greetUser("Alice");', suffix: 'If you provide fewer arguments than parameters, the missing parameters will be set to `undefined`. Output would be: "Welcome, Alice undefined".' }
    ],
    bestPractices: ['Keep the number of parameters small (ideally 1-3). If a function needs 5 or 6 parameters, consider passing a single Object instead.'],
    practiceExercise: {
      task: 'Write a function named `multiply` that takes two parameters: `a` and `b`. Inside the function, log the result of `a * b`. Call the function with the arguments 5 and 10.',
      expectedOutput: '50',
      solution: 'function multiply(a, b) { console.log(a * b); } multiply(5, 10);'
    },
    quiz: [
      { question: 'What is a parameter?', options: ['The actual value passed to a function', 'A variable declared inside the function parentheses to hold incoming data', 'A type of loop', 'The output of a function'], answer: 'A variable declared inside the function parentheses to hold incoming data' },
      { question: 'What is an argument?', options: ['The actual value passed into the function when calling it', 'An error message', 'The name of the function', 'A placeholder variable'], answer: 'The actual value passed into the function when calling it' },
      { question: 'What happens if a function expects 2 parameters, but you only pass 1 argument?', options: ['It throws an error', 'The second parameter becomes `null`', 'The second parameter becomes `undefined`', 'The function doesn\'t run'], answer: 'The second parameter becomes `undefined`' },
      { question: 'Which is the parameter and which is the argument in: `function calc(x) {} calc(5);`?', options: ['Both are parameters', 'x is parameter, 5 is argument', '5 is parameter, x is argument', 'Both are arguments'], answer: 'x is parameter, 5 is argument' },
      { question: 'How do you separate multiple parameters in a function definition?', options: ['With spaces', 'With semicolons', 'With colons', 'With commas'], answer: 'With commas' }
    ],
    interviewQuestions: [
      { q: 'Is it possible to pass more arguments to a function than there are defined parameters?', a: 'Yes. JavaScript will not throw an error. The extra arguments are simply ignored (though they can still be accessed via the hidden `arguments` object in non-arrow functions).' }
    ],
    summary: ['Parameters are variables in the definition.', 'Arguments are the real values passed in.', 'Missing arguments become `undefined`.'],
    references: commonReferences
  },

  'js_return_statement': {
    isStructured: true,
    title: '119. Return Statement',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The `return` statement stops the execution of a function and returns a value from that function to the code that called it.',
    whyUseIt: 'Most of the time, you don\'t want a function to just `console.log` something. You want it to calculate a value and give that value back to you so you can use it elsewhere in your program.',
    syntax: 'function name() {\n  return value;\n}',
    codeExample: 'function add(a, b) {\n  let sum = a + b;\n  return sum;\n  console.log("This will never run!");\n}\n\nlet result = add(5, 3);\nconsole.log("The total is: " + result);',
    expectedOutput: '"The total is: 8"',
    explanation: [
      { code: 'return sum;', desc: 'This line spits the value of `sum` (8) out of the function.' },
      { code: 'let result = add(5, 3);', desc: 'The function call `add(5, 3)` turns into the number `8`. That number is then saved into the `result` variable.' },
      { code: 'console.log(...)', desc: 'Any code written AFTER a `return` statement inside a function is ignored. `return` exits the function immediately.' }
    ],
    realWorldExample: 'A `calculateDiscount(price)` function returns a new number. You then take that returned number and pass it to a `chargeCreditCard()` function.',
    commonMistakes: [
      { error: 'Forgetting the return keyword', code: 'function add(a, b) { a + b; }', suffix: 'If you don\'t explicitly use the `return` keyword, the function automatically returns `undefined`. The math happens, but the answer is thrown away.' }
    ],
    bestPractices: ['A function should ideally do one thing, and return one result. Try to avoid side effects (like modifying external variables or logging to the console) inside functions that return data.'],
    practiceExercise: {
      task: 'Write a function `doubleNumber` that takes one parameter `num` and RETURNS `num * 2`. Call the function with 10, save it to a variable, and log the variable.',
      expectedOutput: '20',
      solution: 'function doubleNumber(num) { return num * 2; } let doubled = doubleNumber(10); console.log(doubled);'
    },
    quiz: [
      { question: 'What does the `return` keyword do?', options: ['Starts a function', 'Loops code', 'Outputs a value from the function and stops its execution', 'Prints to the console'], answer: 'Outputs a value from the function and stops its execution' },
      { question: 'What is the default return value of a function if you don\'t use the `return` keyword?', options: ['0', 'null', 'undefined', 'false'], answer: 'undefined' },
      { question: 'What happens to code written immediately after a `return` statement inside a function?', options: ['It runs twice', 'It throws an error', 'It is executed normally', 'It is completely ignored (unreachable code)'], answer: 'It is completely ignored (unreachable code)' },
      { question: 'Can you assign the result of a function call to a variable?', options: ['Yes, if the function has a return statement', 'No, functions can only log data', 'Only for math functions', 'Only if the variable is a constant'], answer: 'Yes, if the function has a return statement' },
      { question: 'Can a function return a boolean (true/false)?', options: ['No, only numbers', 'No, only strings', 'Yes, a function can return any data type', 'Only if it is an arrow function'], answer: 'Yes, a function can return any data type' }
    ],
    interviewQuestions: [
      { q: 'Can a function have multiple `return` statements?', a: 'Yes, usually inside `if/else` blocks. For example, `if (age < 18) return false; else return true;`. As soon as one `return` is hit, the function ends.' }
    ],
    summary: ['`return` gives data back to the caller.', 'It immediately stops function execution.', 'Without it, functions return `undefined`.'],
    references: commonReferences
  },

  'js_arrow_functions': {
    isStructured: true,
    title: '121. Arrow Functions',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Arrow functions (introduced in ES6) provide a shorter, more concise syntax for writing function expressions. They also behave differently regarding the `this` keyword.',
    whyUseIt: 'They make code easier to read, especially for short, single-line functions commonly used in array methods like `.map()` or `.filter()`.',
    syntax: 'const functionName = (parameters) => {\n  // Code\n};',
    codeExample: '// Traditional Function\nconst addTrad = function(a, b) {\n  return a + b;\n};\n\n// Arrow Function\nconst addArrow = (a, b) => {\n  return a + b;\n};\n\n// Arrow Function (Implicit Return - 1 line)\nconst multiply = (a, b) => a * b;\n\nconsole.log(addArrow(5, 5));\nconsole.log(multiply(4, 3));',
    expectedOutput: '10\n12',
    explanation: [
      { code: '(a, b) => { ... }', desc: 'The `=>` (fat arrow) replaces the `function` keyword.' },
      { code: '(a, b) => a * b', desc: 'Implicit Return: If the function is just one line of code, you can omit the `{}` brackets and the `return` keyword. It automatically returns the result.' }
    ],
    realWorldExample: 'Filtering a list of users. Instead of a long traditional function: `users.filter(user => user.age > 18);`',
    commonMistakes: [
      { error: 'Using `{}` without `return`', code: 'const multiply = (a, b) => { a * b };', suffix: 'If you use curly braces `{}`, you lose the "implicit return" feature. You MUST type the word `return` inside curly braces. This example will return `undefined`.' }
    ],
    bestPractices: ['If an arrow function has exactly ONE parameter, you can omit the parentheses around it: `const square = num => num * num;`'],
    practiceExercise: {
      task: 'Convert this to an arrow function with an implicit return: `function subtract(x, y) { return x - y; }`',
      expectedOutput: '(You should test it by calling it with (10, 5) to get 5)',
      solution: 'const subtract = (x, y) => x - y; console.log(subtract(10, 5));'
    },
    quiz: [
      { question: 'What symbol is used to create an arrow function?', options: ['->', '=>', '<=', '<-'], answer: '=>' },
      { question: 'When can you omit the `return` keyword in an arrow function?', options: ['Always', 'Never', 'When the function body is a single expression and you omit the curly braces {}', 'When there are no parameters'], answer: 'When the function body is a single expression and you omit the curly braces {}' },
      { question: 'If you have exactly one parameter in an arrow function, what can you omit?', options: ['The arrow =>', 'The parentheses () around the parameter', 'The variable name', 'The equals sign ='], answer: 'The parentheses () around the parameter' },
      { question: 'What does this function return? `const getNum = () => { 5 };`', options: ['5', 'undefined', 'An error', '0'], answer: 'undefined' },
      { question: 'What is a major difference between arrow functions and traditional functions?', options: ['Arrow functions cannot take parameters', 'Arrow functions do not bind their own `this` context', 'Arrow functions are slower', 'Arrow functions can only be used with React'], answer: 'Arrow functions do not bind their own `this` context' }
    ],
    interviewQuestions: [
      { q: 'Can you use an arrow function as a constructor (with the `new` keyword)?', a: 'No. Arrow functions do not have their own `this`, nor do they have a `prototype` property, so they cannot be used as constructors.' }
    ],
    summary: ['Shorter syntax using `=>`.', 'Implicit return for single-line statements.', 'Does not bind its own `this`.'],
    references: commonReferences
  }
};
