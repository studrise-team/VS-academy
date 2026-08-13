const commonReferences = [
  { label: 'MDN Web Docs - Functions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions' },
  { label: 'MDN Web Docs - Scope', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Scope' }
];

export const javascriptContentBatchMissing9 = {
  'js_anonymous_functions': {
    isStructured: true,
    title: '122. Anonymous Functions',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'An anonymous function is simply a function that does not have a name identifier.',
    whyUseIt: 'They are frequently used as arguments passed to other functions (like callbacks) or assigned to variables, because naming them is often unnecessary when they are only used in one specific place.',
    syntax: 'function() { // code }',
    codeExample: '// Assigned to a variable\nconst sayHi = function() {\n  console.log("Hi");\n};\n\n// Passed directly as an argument (callback)\nsetTimeout(function() {\n  console.log("1 second passed");\n}, 1000);',
    expectedOutput: '"Hi"\n"1 second passed" (after 1s)',
    explanation: [
      { code: 'function()', desc: 'Notice there is no name between the `function` keyword and the parentheses `()`. It is anonymous.' }
    ],
    realWorldExample: 'Adding an event listener to a button: `button.addEventListener("click", function() { alert("Clicked!"); });`.',
    commonMistakes: [
      { error: 'Trying to call an anonymous function directly', code: 'function() {}();', suffix: 'This is a syntax error. If you want to execute an anonymous function immediately, you must wrap it in parentheses to create an IIFE: `(function() {})()`.' }
    ],
    bestPractices: ['While anonymous functions are great for quick, inline tasks, giving your callbacks a name (e.g., `function handleClick()`) can make debugging easier because the name will show up in the error stack trace.'],
    practiceExercise: {
      task: 'Use `setTimeout` to log "Time\'s up!" after 2000 milliseconds. Pass an anonymous function directly into `setTimeout`.',
      expectedOutput: '"Time\'s up!" (after 2 seconds)',
      solution: 'setTimeout(function() { console.log("Time\'s up!"); }, 2000);'
    },
    quiz: [
      { question: 'What is an anonymous function?', options: ['A function that deletes its own code', 'A function without a name identifier', 'A function that cannot take parameters', 'A function without a return statement'], answer: 'A function without a name identifier' },
      { question: 'Where are anonymous functions most commonly used?', options: ['As global configurations', 'Inside HTML files', 'As callbacks passed to other functions', 'To replace `var`'], answer: 'As callbacks passed to other functions' },
      { question: 'How do you call an anonymous function if it is assigned to a variable `let myFn = function() {}`?', options: ['call()', 'myFn()', 'myFn.run()', 'function()'], answer: 'myFn()' },
      { question: 'What is one downside of using completely anonymous functions?', options: ['They are slower', 'They take up more memory', 'They show up as "anonymous" in error stack traces, making debugging harder', 'They cannot return values'], answer: 'They show up as "anonymous" in error stack traces, making debugging harder' },
      { question: 'Can Arrow Functions be anonymous?', options: ['No, arrow functions must be named', 'Yes, arrow functions are ALWAYS anonymous', 'Only in strict mode', 'Yes, but only if they have no parameters'], answer: 'Yes, arrow functions are ALWAYS anonymous' }
    ],
    interviewQuestions: [
      { q: 'What is an IIFE (Immediately Invoked Function Expression)?', a: 'It is an anonymous function wrapped in parentheses and immediately executed: `(function() { console.log("ran"); })();`. It is used to create a private scope.' }
    ],
    summary: ['Functions without a name.', 'Commonly used as callbacks.', 'Arrow functions are a modern, shorter way to write anonymous functions.'],
    references: commonReferences
  },
  'js_callback_functions': {
    isStructured: true,
    title: '123. Callback Functions',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'A callback function is a function passed into another function as an argument, which is then invoked (called) inside the outer function to complete some kind of routine or action.',
    whyUseIt: 'Callbacks are the foundation of asynchronous programming in JavaScript. They allow you to wait for something to finish (like a file loading or a timer) and *then* execute your code.',
    syntax: 'function doSomething(callback) { callback(); }',
    codeExample: 'function fetchData(callback) {\n  console.log("Fetching data...");\n  setTimeout(function() {\n    // Data is ready after 1 second\n    callback("Data loaded successfully!");\n  }, 1000);\n}\n\n// Call the function and pass an anonymous function as the callback\nfetchData(function(result) {\n  console.log(result);\n});',
    expectedOutput: '"Fetching data..."\n(1 second delay)\n"Data loaded successfully!"',
    explanation: [
      { code: 'callback', desc: 'Just a parameter name. It receives the function you passed in.' },
      { code: 'callback("Data loaded successfully!")', desc: 'Executes the function you passed in, sending the string back as the `result`.' }
    ],
    realWorldExample: 'Reacting to a user clicking a button: `document.addEventListener("click", myCallbackFunction);`.',
    commonMistakes: [
      { error: 'Adding parentheses when passing the callback', code: 'setTimeout(myCallback(), 1000)', suffix: 'If you add `()`, the function executes *immediately* and passes its *return value* to setTimeout. You must pass the function reference itself: `setTimeout(myCallback, 1000)`.' }
    ],
    bestPractices: ['Avoid "Callback Hell" (nesting many callbacks inside each other). In modern JavaScript, use Promises or async/await for complex asynchronous workflows instead of raw callbacks.'],
    practiceExercise: {
      task: 'Create a function `processArray(arr, callback)`. Inside, loop through `arr` and execute `callback(item)` for each element. Call it with `[1, 2, 3]` and a callback that logs the item.',
      expectedOutput: '1\n2\n3',
      solution: 'function processArray(arr, cb) { for(let i=0; i<arr.length; i++) cb(arr[i]); } processArray([1, 2, 3], function(num) { console.log(num); });'
    },
    quiz: [
      { question: 'What is a callback function?', options: ['A function that calls itself', 'A function passed as an argument to another function', 'A function that returns a Promise', 'A function that stops execution'], answer: 'A function passed as an argument to another function' },
      { question: 'Why are callbacks useful?', options: ['They make code run faster', 'They allow you to execute code *after* an asynchronous task finishes', 'They hide variables from the global scope', 'They are required for all functions'], answer: 'They allow you to execute code *after* an asynchronous task finishes' },
      { question: 'How do you pass a named function `sayHi` as a callback to `setTimeout`?', options: ['setTimeout(sayHi(), 1000)', 'setTimeout("sayHi", 1000)', 'setTimeout(sayHi, 1000)', 'setTimeout(new sayHi, 1000)'], answer: 'setTimeout(sayHi, 1000)' },
      { question: 'What happens if you use `setTimeout(myFunc(), 1000)`?', options: ['It waits 1 second, then runs myFunc', 'It runs myFunc immediately, and passes the return value to setTimeout', 'It throws an error', 'It creates an infinite loop'], answer: 'It runs myFunc immediately, and passes the return value to setTimeout' },
      { question: 'What is "Callback Hell"?', options: ['When a callback throws an error', 'Deeply nesting multiple callbacks, making the code hard to read (Pyramid of Doom)', 'When a callback never executes', 'When you use too many named callbacks'], answer: 'Deeply nesting multiple callbacks, making the code hard to read (Pyramid of Doom)' }
    ],
    interviewQuestions: [
      { q: 'In Node.js, what is the standard signature for a callback function?', a: 'Error-first callbacks. The first argument is always an error object (or null if successful), and the second is the data: `function(err, data) {}`.' }
    ],
    summary: ['A function passed into another function.', 'Used for handling asynchronous events.', 'Pass the reference (no `()`), do not execute it immediately.'],
    references: commonReferences
  },
  'js_higher_order_functions': {
    isStructured: true,
    title: '124. Higher-Order Functions',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A Higher-Order Function (HOF) is a function that does at least one of two things: it takes one or more functions as arguments (callbacks), OR it returns a function as its result.',
    whyUseIt: 'They allow for high levels of abstraction and code reuse. Array methods like `map`, `filter`, and `reduce` are all Higher-Order Functions.',
    syntax: 'function higherOrder(callback) { return function() { /* ... */ } }',
    codeExample: '// Example 1: Taking a function as an argument\nfunction repeat(n, action) {\n  for (let i = 0; i < n; i++) {\n    action(i);\n  }\n}\nrepeat(3, console.log); // Logs 0, 1, 2\n\n// Example 2: Returning a function\nfunction multiplyBy(factor) {\n  return function(number) {\n    return number * factor;\n  };\n}\nconst double = multiplyBy(2);\nconsole.log(double(5)); // 10',
    expectedOutput: '0\n1\n2\n10',
    explanation: [
      { code: 'repeat(3, console.log)', desc: '`repeat` is a HOF because it accepts `console.log` as an argument.' },
      { code: 'return function(number)', desc: '`multiplyBy` is a HOF because it returns a brand new function.' }
    ],
    realWorldExample: 'React components often use HOFs (called Higher-Order Components or HOCs) to wrap a component and inject extra data or styling into it.',
    commonMistakes: [
      { error: 'Confusing HOFs with callbacks', code: '', suffix: 'The *callback* is the function being passed IN. The *Higher-Order Function* is the function receiving it.' }
    ],
    bestPractices: ['Use HOFs to create smaller, composable pieces of logic. `map` and `filter` are excellent examples of this pattern in the standard library.'],
    practiceExercise: {
      task: 'Write a HOF called `createGreeter(greeting)`. It should return a function that takes a `name` and logs `greeting + " " + name`. Create a `sayHello` function using it, and call it with "Alice".',
      expectedOutput: '"Hello Alice"',
      solution: 'function createGreeter(g) { return function(n) { console.log(g + " " + n); } } const sayHello = createGreeter("Hello"); sayHello("Alice");'
    },
    quiz: [
      { question: 'What defines a Higher-Order Function?', options: ['A function with a long execution time', 'A function that takes a function as an argument OR returns a function', 'A function inside an object', 'A function that uses recursion'], answer: 'A function that takes a function as an argument OR returns a function' },
      { question: 'Which of the following is a built-in Higher-Order Function in JavaScript?', options: ['Math.random()', 'Array.prototype.map()', 'parseInt()', 'JSON.stringify()'], answer: 'Array.prototype.map()' },
      { question: 'In the code `setTimeout(myFunc, 1000)`, which is the Higher-Order Function?', options: ['myFunc', 'setTimeout', 'Both', 'Neither'], answer: 'setTimeout' },
      { question: 'If `function x() { return function y() {} }`, what is `x`?', options: ['A callback', 'A Higher-Order Function', 'A closure', 'An anonymous function'], answer: 'A Higher-Order Function' },
      { question: 'Why are HOFs possible in JavaScript?', options: ['Because of strict mode', 'Because functions are "First-Class Citizens" (treated like any other variable)', 'Because of the DOM', 'Because of hoisting'], answer: 'Because functions are "First-Class Citizens" (treated like any other variable)' }
    ],
    interviewQuestions: [
      { q: 'What is Currying?', a: 'Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of nested Higher-Order Functions that each take a single argument. E.g., `add(1,2)` becomes `add(1)(2)`.' }
    ],
    summary: ['Accepts a function as an argument.', 'OR returns a function.', '`map`, `filter`, and `reduce` are HOFs.'],
    references: commonReferences
  },
  'js_scope': {
    isStructured: true,
    title: '125. Scope',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Scope determines the accessibility (visibility) of variables. If a variable is not in the current scope, it cannot be used.',
    whyUseIt: 'Scope prevents variables with the same name from colliding and overwriting each other. It also helps garbage collection clean up memory when variables are no longer needed.',
    syntax: '// Scope is defined by curly braces {} or functions',
    codeExample: 'function myFunc() {\n  // Local Scope\n  let carName = "Volvo";\n  console.log(carName);\n}\n\nmyFunc();\n\n// Error: carName is not defined here\n// console.log(carName);',
    expectedOutput: '"Volvo"\n(ReferenceError if you uncomment the last line)',
    explanation: [
      { code: 'let carName = "Volvo"', desc: 'This variable is born inside `myFunc`. It lives and dies inside `myFunc`.' },
      { code: 'console.log(carName)', desc: 'Outside the function, `carName` does not exist.' }
    ],
    realWorldExample: 'Having a `let index = 0;` inside two completely different loops without them breaking each other.',
    commonMistakes: [
      { error: 'Leaking variables with var', code: 'if(true) { var x = 5; } console.log(x);', suffix: '`var` ignores block scope (`if` statements, `for` loops) and leaks out into the surrounding function or global scope. Always use `let` or `const` to enforce Block Scope.' }
    ],
    bestPractices: ['Always declare variables in the narrowest (smallest) scope possible. Don\'t put a variable at the top of your file if it is only used inside one small `if` statement.'],
    practiceExercise: {
      task: 'Declare a function. Inside it, declare `let secret = 42;`. Try to `console.log(secret)` both inside and outside the function to see scope in action.',
      expectedOutput: '42\nReferenceError: secret is not defined',
      solution: 'function test() { let secret = 42; console.log(secret); } test(); // console.log(secret); causes error'
    },
    quiz: [
      { question: 'What does "Scope" mean in JavaScript?', options: ['The speed at which a function runs', 'The accessibility and visibility of variables', 'The physical length of a file', 'The ability to find elements in the DOM'], answer: 'The accessibility and visibility of variables' },
      { question: 'What happens if you try to use a locally scoped variable outside of its function?', options: ['It returns undefined', 'It throws a ReferenceError', 'It works normally', 'It returns null'], answer: 'It throws a ReferenceError' },
      { question: 'Do `let` and `const` have Block Scope (confined to any `{}` block)?', options: ['Yes', 'No, only Function Scope', 'No, they are always global', 'Only in strict mode'], answer: 'Yes' },
      { question: 'Does `var` have Block Scope?', options: ['Yes', 'No, it only has Function Scope or Global Scope', 'Only if used in a loop', 'Only in strict mode'], answer: 'No, it only has Function Scope or Global Scope' },
      { question: 'Why is scope important?', options: ['It prevents variable name collisions', 'It frees up memory', 'It encapsulates logic', 'All of the above'], answer: 'All of the above' }
    ],
    interviewQuestions: [
      { q: 'What is Lexical Scope?', a: 'Lexical scope means that a function looks for variables in the place where it was *defined* (its physical location in the source code), not where it is *called*.' }
    ],
    summary: ['Determines where variables are visible.', '`let` and `const` are block-scoped.', '`var` is function-scoped.'],
    references: commonReferences
  },
  'js_global_scope': {
    isStructured: true,
    title: '126. Global Scope',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Variables declared globally (outside of any function or block) have Global Scope. Global variables can be accessed from anywhere in a JavaScript program.',
    whyUseIt: 'You use global scope for configuration variables, constants, or data that literally every function in your application needs to read.',
    syntax: 'let globalVar = "I am global";',
    codeExample: '// Global Scope\nlet username = "Admin";\n\nfunction showUser() {\n  // The function can access the global variable\n  console.log("Welcome, " + username);\n}\n\nshowUser();',
    expectedOutput: '"Welcome, Admin"',
    explanation: [
      { code: 'let username', desc: 'Declared at the root of the file. It is globally available.' },
      { code: 'console.log(username)', desc: 'Even though we are inside `showUser`, the function looks up to the global scope to find `username`.' }
    ],
    realWorldExample: 'A `const API_KEY = "12345";` placed at the top of a file so multiple API fetching functions can all access it.',
    commonMistakes: [
      { error: 'Polluting the global scope', code: 'let counter = 0; // used once', suffix: 'If you put too many variables in the global scope, you risk accidentally overwriting them later (Name Collisions). Keep the global scope as empty as possible.' },
      { error: 'Accidental globals', code: 'function oops() { x = 5; }', suffix: 'If you assign a value to a variable without declaring it with `let`, `const`, or `var`, JavaScript automatically creates it as a global variable. Always use strict mode (`"use strict";`) to prevent this.' }
    ],
    bestPractices: ['Avoid global variables whenever possible. Wrap your code in an IIFE or use ES6 Modules (which have their own module scope, not global scope).'],
    practiceExercise: {
      task: 'Declare a global variable `const TAX_RATE = 0.2;`. Create a function `calculateTax(amount)` that multiplies amount by `TAX_RATE` and logs it. Call it with 100.',
      expectedOutput: '20',
      solution: 'const TAX_RATE = 0.2; function calculateTax(amount) { console.log(amount * TAX_RATE); } calculateTax(100);'
    },
    quiz: [
      { question: 'Where is a global variable declared?', options: ['Inside a function', 'Inside a for loop', 'Outside of all functions and blocks', 'Inside an object'], answer: 'Outside of all functions and blocks' },
      { question: 'Where can a global variable be accessed?', options: ['Only in the global scope', 'Only inside functions', 'Anywhere in the program', 'Only in the file it was declared'], answer: 'Anywhere in the program' },
      { question: 'Why is having too many global variables considered bad practice?', options: ['It slows down the browser', 'They can be accidentally overwritten (Name Collisions)', 'They cause infinite loops', 'They cannot hold objects'], answer: 'They can be accidentally overwritten (Name Collisions)' },
      { question: 'In a web browser, what is the global object?', options: ['document', 'window', 'global', 'system'], answer: 'window' },
      { question: 'What happens if you type `x = 10;` inside a function without `let/const/var`?', options: ['Syntax Error', 'It creates a block-scoped variable', 'It accidentally creates a global variable (unless in strict mode)', 'Nothing'], answer: 'It accidentally creates a global variable (unless in strict mode)' }
    ],
    interviewQuestions: [
      { q: 'How do ES6 Modules solve the global scope pollution problem?', a: 'In an ES6 module (a script loaded with `type="module"`), variables declared at the top level are scoped to that specific module, NOT the global `window` object. They must be explicitly exported to be used elsewhere.' }
    ],
    summary: ['Accessible from anywhere.', 'Created outside of functions/blocks.', 'Avoid polluting the global scope.'],
    references: commonReferences
  }
};
