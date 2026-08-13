const commonReferences = [
  { label: 'MDN Web Docs - Scope', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Scope' },
  { label: 'MDN Web Docs - Closures', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures' }
];

export const javascriptContentBatchMissing10 = {
  'js_local_scope': {
    isStructured: true,
    title: '127. Local Scope',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Local scope refers to variables that are declared inside a function or a block. They are only accessible within that specific function or block and are completely hidden from the outside world.',
    whyUseIt: 'Local scope allows you to use the same variable names (like `i`, `count`, or `result`) in different functions without them colliding or overwriting each other.',
    syntax: 'function example() { let localVariable = 1; }',
    codeExample: 'function calculate() {\n  // "total" is locally scoped to this function\n  let total = 100;\n  console.log("Inside:", total);\n}\n\ncalculate();\n// console.log("Outside:", total); // ReferenceError: total is not defined',
    expectedOutput: '"Inside: 100"\n(ReferenceError if outside log is uncommented)',
    explanation: [
      { code: 'let total = 100', desc: 'The variable is born here.' },
      { code: 'console.log("Outside:", total)', desc: 'Fails because the variable `total` ceases to exist as soon as the `calculate` function finishes running.' }
    ],
    realWorldExample: 'A temporary variable used to hold a calculation before returning it from a function: `let temp = a + b; return temp;`.',
    commonMistakes: [
      { error: 'Forgetting the declaration keyword', code: 'function calc() { total = 100; }', suffix: 'If you forget `let`, `const`, or `var`, JavaScript will accidentally create `total` in the GLOBAL scope, ruining the encapsulation.' }
    ],
    bestPractices: ['Always declare your variables with `let` or `const` inside functions to ensure they remain safely in the local scope.'],
    practiceExercise: {
      task: 'Create a function `sayHi()`. Inside it, declare a local variable `let msg = "Hello"`. Try logging `msg` inside the function, and then outside the function.',
      expectedOutput: '"Hello"\nReferenceError',
      solution: 'function sayHi() { let msg = "Hello"; console.log(msg); } sayHi(); // console.log(msg); will error'
    },
    quiz: [
      { question: 'What is a local variable?', options: ['A variable declared globally', 'A variable declared inside a function or block', 'A variable without a value', 'A variable that can be seen everywhere'], answer: 'A variable declared inside a function or block' },
      { question: 'Why is local scope useful?', options: ['It makes code run faster', 'It prevents variable names in different functions from interfering with each other', 'It allows variables to be saved to the hard drive', 'It makes the code shorter'], answer: 'It prevents variable names in different functions from interfering with each other' },
      { question: 'What happens when a function finishes executing?', options: ['Its local variables are saved for later', 'Its local variables are added to the global scope', 'Its local variables are destroyed (garbage collected)', 'Nothing'], answer: 'Its local variables are destroyed (garbage collected)' },
      { question: 'Can two different functions both have a local variable named `counter`?', options: ['No, that causes a naming collision', 'Yes, because they are in separate local scopes', 'Only if they are inside the same file', 'Only in strict mode'], answer: 'Yes, because they are in separate local scopes' },
      { question: 'What happens if you omit `let`/`const`/`var` when declaring a variable inside a function?', options: ['Syntax Error', 'It becomes a local variable anyway', 'It becomes a global variable (in non-strict mode)', 'It returns undefined'], answer: 'It becomes a global variable (in non-strict mode)' }
    ],
    interviewQuestions: [
      { q: 'What is the "Scope Chain"?', a: 'When a variable is used, JavaScript looks for it in the current local scope. If it doesn\'t find it, it moves up to the outer (parent) scope, and continues up the chain until it reaches the global scope.' }
    ],
    summary: ['Variables inside functions/blocks are local.', 'They cannot be accessed from the outside.', 'Prevents naming collisions.'],
    references: commonReferences
  },
  'js_block_scope': {
    isStructured: true,
    title: '128. Block Scope',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Block scope means a variable is only accessible within the specific block (defined by curly braces `{}`) in which it was declared. `let` and `const` provide block scope, while `var` does not.',
    whyUseIt: 'It makes your code much safer. If you declare a variable inside an `if` statement or a `for` loop, you don\'t want it leaking out into the rest of the function.',
    syntax: 'if (true) { let blockScoped = true; }',
    codeExample: 'function testScope() {\n  if (true) {\n    let blockLet = "I am safe in here";\n    var functionVar = "I leak everywhere!";\n  }\n  \n  // console.log(blockLet); // ReferenceError\n  console.log(functionVar); // "I leak everywhere!"\n}\n\ntestScope();',
    expectedOutput: '"I leak everywhere!"',
    explanation: [
      { code: 'let blockLet', desc: 'Because it uses `let`, it is trapped inside the `{}` of the `if` statement.' },
      { code: 'var functionVar', desc: '`var` ignores the `if` block entirely and attaches itself to the outer `testScope` function, allowing it to leak out and be accessed below.' }
    ],
    realWorldExample: 'A `for` loop: `for (let i = 0; i < 5; i++) { ... }`. The variable `i` is block-scoped to the loop. You cannot access `i` after the loop finishes.',
    commonMistakes: [
      { error: 'Using `var` in a loop', code: 'for(var i = 0; i < 3; i++) {} console.log(i);', suffix: 'This will log `3`. `var` leaked out of the loop. If you had used `let`, the log would correctly throw a ReferenceError.' }
    ],
    bestPractices: ['Never use `var`. Always use `const` (for values that won\'t change) and `let` (for values that will). This guarantees strict block scoping.'],
    practiceExercise: {
      task: 'Write an `if(true)` block. Inside, declare `const msg = "Hi"`. Outside the block, try to log `msg`. Observe the error.',
      expectedOutput: 'ReferenceError: msg is not defined',
      solution: 'if (true) { const msg = "Hi"; } // console.log(msg); causes error'
    },
    quiz: [
      { question: 'What characters define a "block" in JavaScript?', options: ['Parentheses ()', 'Square brackets []', 'Curly braces {}', 'Angle brackets <>'], answer: 'Curly braces {}' },
      { question: 'Which keywords provide Block Scope?', options: ['var only', 'let and const', 'var, let, and const', 'function'], answer: 'let and const' },
      { question: 'If you declare `var x = 5` inside an `if` block, can you access `x` outside the `if` block?', options: ['Yes', 'No', 'Only if the if condition was true', 'It throws an error'], answer: 'Yes' },
      { question: 'Why is `let` preferred over `var` in `for` loops?', options: ['It is faster', 'It scopes the loop counter to the loop itself, preventing it from leaking', 'It allows infinite loops', 'It automatically increments'], answer: 'It scopes the loop counter to the loop itself, preventing it from leaking' },
      { question: 'Can you have a block scope without an `if` or `for` statement?', options: ['No', 'Yes, by simply putting code inside `{}`', 'Only inside a function', 'Only in strict mode'], answer: 'Yes, by simply putting code inside `{}`' }
    ],
    interviewQuestions: [
      { q: 'What happens if you declare `let x = 1` in the global scope, and `let x = 2` inside an `if` block?', a: 'This is called "shadowing". The inner `x` will temporarily hide the outer `x` while inside the block. Outside the block, the outer `x` (1) remains unaffected.' }
    ],
    summary: ['Confined to `{}` blocks.', '`let` and `const` use block scope.', '`var` ignores block scope.'],
    references: commonReferences
  },
  'js_function_scope': {
    isStructured: true,
    title: '129. Function Scope',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: 'Function scope means that variables declared inside a function are only accessible within that function and any nested functions. `var` is the classic example of a keyword that ONLY respects function scope.',
    whyUseIt: 'Historically (before ES6 introduced `let` and `const`), Function Scope was the *only* way to create local variables in JavaScript.',
    syntax: 'function test() { var x = 1; }',
    codeExample: 'function myFunc() {\n  var message = "Hello";\n  \n  if (true) {\n    var message = "Goodbye"; // Re-declares the SAME variable\n    console.log("Inside IF:", message);\n  }\n  \n  console.log("Outside IF:", message);\n}\n\nmyFunc();',
    expectedOutput: '"Inside IF: Goodbye"\n"Outside IF: Goodbye"',
    explanation: [
      { code: 'var message', desc: 'Because `var` only cares about the *function*, the second `var message` inside the `if` block actually overwrites the first one. It completely ignores the `{}` block.' }
    ],
    realWorldExample: 'Legacy codebases often use IIFEs (Immediately Invoked Function Expressions) like `(function(){ var private = 1; })()` purely to fake block scope by wrapping code in a function.',
    commonMistakes: [
      { error: 'Expecting `var` to stay inside a block', code: 'for(var i=0; i<10; i++){} console.log(i);', suffix: 'Developers coming from C++ or Java often expect `i` to be dead after the loop. In JS, `var i` survives until the end of the *function*.' }
    ],
    bestPractices: ['Understanding Function Scope is crucial for reading older JavaScript code. However, when writing new code, avoid `var` entirely to bypass function scope confusion.'],
    practiceExercise: {
      task: 'Create a function `test()`. Inside, write an `if(true)` block that declares `var a = 1` and `let b = 2`. Outside the `if` block (but still inside the function), log `a` and try to log `b`.',
      expectedOutput: '1\nReferenceError (for b)',
      solution: 'function test() { if(true) { var a = 1; let b = 2; } console.log(a); /* console.log(b); errors */ } test();'
    },
    quiz: [
      { question: 'Which keyword is strictly Function Scoped?', options: ['let', 'const', 'var', 'global'], answer: 'var' },
      { question: 'Does `var` respect block scope (e.g., inside an `if` statement)?', options: ['Yes', 'No, it leaks out to the surrounding function', 'Sometimes', 'Only in ES6'], answer: 'No, it leaks out to the surrounding function' },
      { question: 'If you declare `var x = 10` inside a function, can you access `x` outside that function?', options: ['Yes', 'No', 'Only if returned', 'Only in strict mode'], answer: 'No' },
      { question: 'What was the primary method developers used to contain `var` before ES6?', options: ['The `const` keyword', 'IIFEs (Immediately Invoked Function Expressions)', 'The `block` keyword', 'They didn\'t'], answer: 'IIFEs (Immediately Invoked Function Expressions)' },
      { question: 'Why is `var` considered bad practice today?', options: ['It is slower', 'Its function-scoping behavior is confusing and leads to bugs', 'It uses more memory', 'It was removed from JS'], answer: 'Its function-scoping behavior is confusing and leads to bugs' }
    ],
    interviewQuestions: [
      { q: 'Explain Hoisting in the context of Function Scope and `var`.', a: 'When you declare a `var` anywhere inside a function, JavaScript "hoists" the declaration (but not the value) to the very top of that function. This means you can reference the variable before the line it was written on, resulting in `undefined` rather than an error.' }
    ],
    summary: ['`var` is Function Scoped.', 'It ignores `{}` blocks.', 'Avoid using `var` in modern code.'],
    references: commonReferences
  },
  'js_closures': {
    isStructured: true,
    title: '130. Closures',
    difficulty: 'Advanced',
    readingTime: '6 min',
    definition: 'A closure is a feature where an inner function has access to the outer (enclosing) function\'s variables—even after the outer function has finished executing.',
    whyUseIt: 'Closures allow you to create "private" variables in JavaScript, maintaining state securely without polluting the global scope. They are used heavily in functional programming and React Hooks.',
    syntax: 'function outer() { let x = 1; return function inner() { x++; return x; } }',
    codeExample: 'function createCounter() {\n  let count = 0; // This variable is protected\n  \n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst counter1 = createCounter();\nconsole.log(counter1()); // 1\nconsole.log(counter1()); // 2\n\nconst counter2 = createCounter();\nconsole.log(counter2()); // 1',
    expectedOutput: '1\n2\n1',
    explanation: [
      { code: 'createCounter()', desc: 'When this runs, it creates `count` and returns the inner function. Normally, `count` would be destroyed when the function finishes.' },
      { code: 'const counter1 = ...', desc: '`counter1` now holds the inner function. Because of the Closure, that inner function *remembers* the environment it was created in, keeping `count` alive in memory permanently just for itself.' }
    ],
    realWorldExample: 'React `useState`. The state variable is kept alive across component re-renders through the power of closures.',
    commonMistakes: [
      { error: 'The `var` loop problem', code: 'for(var i=0; i<3; i++) { setTimeout(() => console.log(i), 1000) }', suffix: 'This prints `3, 3, 3`. Because `var` is not block-scoped, there is only ONE `i` variable shared by all three closures. By the time the timeout runs, `i` is 3. Fix: Use `let i=0`.' }
    ],
    bestPractices: ['Use closures when you need to associate some data (the lexical environment) with a function that operates on that data (similar to object-oriented programming with private properties).'],
    practiceExercise: {
      task: 'Create a function `makeMultiplier(multiplier)`. It should return a function that takes `x` and returns `x * multiplier`. Create a `double` function from it. Call `double(5)`.',
      expectedOutput: '10',
      solution: 'function makeMultiplier(m) { return function(x) { return x * m; }; } const double = makeMultiplier(2); console.log(double(5));'
    },
    quiz: [
      { question: 'What is a closure?', options: ['A function that closes the browser window', 'An inner function that remembers the variables of its outer function even after the outer function has returned', 'A syntax error', 'A way to stop a loop'], answer: 'An inner function that remembers the variables of its outer function even after the outer function has returned' },
      { question: 'What is the primary benefit of closures?', options: ['They execute faster', 'They allow for data privacy (encapsulation) by hiding variables from the global scope', 'They use less memory', 'They allow you to use `this`'], answer: 'They allow for data privacy (encapsulation) by hiding variables from the global scope' },
      { question: 'In the `createCounter` example, can you access the `count` variable directly from the outside (e.g., `counter1.count`)?', options: ['Yes', 'No, it is private and completely hidden', 'Only in strict mode', 'Only if you use `var`'], answer: 'No, it is private and completely hidden' },
      { question: 'When is a closure created?', options: ['When you use the `closure` keyword', 'When a function is called', 'Every time a function is created, at function creation time', 'When the script finishes loading'], answer: 'Every time a function is created, at function creation time' },
      { question: 'If you call `createCounter()` twice and save the results to two different variables, do they share the same `count`?', options: ['Yes', 'No, they each get their own independent closure and state', 'Sometimes', 'Throws an error'], answer: 'No, they each get their own independent closure and state' }
    ],
    interviewQuestions: [
      { q: 'What is the memory impact of closures?', a: 'Because closures keep outer variables alive, those variables cannot be Garbage Collected. If you create many closures storing large objects, it can lead to a memory leak.' }
    ],
    summary: ['Inner functions remember outer variables.', 'Keeps state alive after outer function finishes.', 'Perfect for data privacy.'],
    references: commonReferences
  },
  'js_recursion': {
    isStructured: true,
    title: '131. Recursion',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Recursion is a technique where a function calls *itself* in order to solve a problem. It breaks a complex problem down into smaller, identical sub-problems.',
    whyUseIt: 'Recursion is the cleanest, most elegant way to traverse deeply nested, unpredictable data structures (like a file system directory tree, or a complex HTML DOM tree).',
    syntax: 'function recursive() { if (baseCase) return; recursive(); }',
    codeExample: '// Calculate factorial of a number (e.g., 5! = 5 * 4 * 3 * 2 * 1)\nfunction factorial(n) {\n  // 1. Base Case (When to stop)\n  if (n === 1 || n === 0) {\n    return 1;\n  }\n  \n  // 2. Recursive Case (Call itself)\n  return n * factorial(n - 1);\n}\n\nconsole.log(factorial(5)); // 120',
    expectedOutput: '120',
    explanation: [
      { code: 'if (n === 1)', desc: 'The Base Case. Without this, the function would call itself forever and crash the program.' },
      { code: 'factorial(n - 1)', desc: 'The function calls itself, but with a *smaller* piece of the problem (4, then 3, then 2). Once it hits 1, it stops and multiplies back up the chain.' }
    ],
    realWorldExample: 'Crawling a web page. You find all the links on a page, and for every link, you call your `crawl()` function again on the new page.',
    commonMistakes: [
      { error: 'Maximum call stack size exceeded', code: 'function loop() { loop(); }', suffix: 'Forgetting to include a Base Case, or passing the exact same data to the recursive call, results in an infinite loop that blows up the call stack and crashes the browser.' }
    ],
    bestPractices: ['Always define your Base Case (exit condition) FIRST before writing the recursive logic.'],
    practiceExercise: {
      task: 'Write a recursive function `countdown(n)`. If `n <= 0`, log "Done!". Otherwise, log `n`, and call `countdown(n - 1)`. Run `countdown(3)`.',
      expectedOutput: '3\n2\n1\n"Done!"',
      solution: 'function countdown(n) { if (n <= 0) { console.log("Done!"); return; } console.log(n); countdown(n - 1); } countdown(3);'
    },
    quiz: [
      { question: 'What is recursion?', options: ['A function that returns another function', 'A function that calls itself', 'A loop that never ends', 'A way to reverse an array'], answer: 'A function that calls itself' },
      { question: 'What is a "Base Case" in recursion?', options: ['The lowest value allowed', 'The condition that stops the recursion', 'The first call to the function', 'An error handler'], answer: 'The condition that stops the recursion' },
      { question: 'What happens if you forget the Base Case?', options: ['The function returns undefined', 'The function skips the recursion', 'The program enters an infinite loop and crashes with a Stack Overflow', 'Nothing'], answer: 'The program enters an infinite loop and crashes with a Stack Overflow' },
      { question: 'Which data structure is recursion best suited for?', options: ['A flat array of numbers', 'A deeply nested tree (like HTML elements or file folders)', 'A simple string', 'A boolean'], answer: 'A deeply nested tree (like HTML elements or file folders)' },
      { question: 'Can every recursive function be written as a standard `for` or `while` loop?', options: ['Yes', 'No, some things require recursion', 'Only in strict mode', 'No, loops are less powerful'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'If any recursive function can be written as a `while` loop, why use recursion at all?', a: 'While loops can be more memory efficient, recursion often results in significantly cleaner, shorter, and more readable code when dealing with complex data structures like trees or graphs.' }
    ],
    summary: ['A function that calls itself.', 'MUST have a base case to stop.', 'Great for nested trees and data structures.'],
    references: commonReferences
  }
};
