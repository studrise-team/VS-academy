const commonReferences = [
  { label: 'MDN Web Docs - JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
];

export const javascriptContentBatchMissing35 = {
  'js_javascript_basics_interview_questions': {
    isStructured: true,
    title: '281. JavaScript Basics Interview Questions',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'This section covers the most common interview questions regarding the core fundamentals and architecture of the JavaScript language itself.',
    whyUseIt: 'Interviewers ask these questions to ensure you actually understand how the language works under the hood, rather than just knowing how to copy-paste code.',
    syntax: '// Q & A Format',
    codeExample: '// Example Question: Is JavaScript single-threaded?\nconsole.log("1. Start");\nsetTimeout(() => console.log("2. Timeout"), 0);\nconsole.log("3. End");\n\n// Output:\n// 1. Start\n// 3. End\n// 2. Timeout\n// (This demonstrates the Event Loop!)',
    expectedOutput: 'A strong understanding of JavaScript theory.',
    explanation: [
      { code: 'Single-Threaded', desc: 'JavaScript runs on a single main thread, meaning it can theoretically only do one thing at a time. It uses the Event Loop to handle asynchronous operations (like network requests) without freezing the browser.' }
    ],
    realWorldExample: 'During a junior developer interview, you will almost certainly be asked to explain what JavaScript is and how it differs from Java (hint: they are completely unrelated).',
    commonMistakes: [
      { error: 'Confusing Java and JavaScript', code: '', suffix: 'Never say they are related. JavaScript was named "JavaScript" purely as a marketing gimmick in the 1990s to ride the hype of the Java language.' }
    ],
    bestPractices: ['When answering basics, always try to provide a tiny code example or a real-world analogy (like a restaurant kitchen) to prove you understand the concept deeply.'],
    practiceExercise: {
      task: 'Without coding: Explain what the DOM is in one sentence.',
      expectedOutput: 'The Document Object Model.',
      solution: 'The DOM is a tree-like representation of an HTML document that JavaScript can read and manipulate to change what the user sees on the screen.'
    },
    quiz: [
      { question: 'What is JavaScript primarily used for in web development?', options: ['Styling the page', 'Creating the database', 'Adding interactive behavior and logic to web pages', 'Writing the server operating system'], answer: 'Adding interactive behavior and logic to web pages' },
      { question: 'Is JavaScript a compiled or interpreted language?', options: ['Compiled (like C++)', 'Interpreted (or Just-In-Time compiled by modern browser engines like V8)', 'Neither, it is a markup language', 'It is assembly code'], answer: 'Interpreted (or Just-In-Time compiled by modern browser engines like V8)' },
      { question: 'What is the "Event Loop"?', options: ['A `for` loop', 'A mechanism that allows JavaScript to perform non-blocking asynchronous operations despite being single-threaded', 'An error state', 'A CSS animation'], answer: 'A mechanism that allows JavaScript to perform non-blocking asynchronous operations despite being single-threaded' },
      { question: 'What is the difference between JavaScript and ECMAScript?', options: ['They are competitors', 'ECMAScript is the official specification/standard, and JavaScript is the actual programming language that implements that standard', 'JavaScript is for the backend, ECMAScript is for the frontend', 'There is no difference at all'], answer: 'ECMAScript is the official specification/standard, and JavaScript is the actual programming language that implements that standard' },
      { question: 'Where does JavaScript code run?', options: ['Only on Apple computers', 'Strictly on the server', 'Inside the user\'s web browser (Client-side), though Node.js allows it to run on servers too', 'Inside the database'], answer: 'Inside the user\'s web browser (Client-side), though Node.js allows it to run on servers too' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between client-side and server-side JavaScript?', a: 'Client-side JS runs in the user\'s browser (handling UI, DOM, and browser APIs). Server-side JS (like Node.js) runs on a backend server, handling databases, file systems, and API requests.' },
      { q: 'What does "JavaScript is dynamically typed" mean?', a: 'It means variables do not have fixed types. A variable can hold a string, and later be reassigned to a number (`let x = "Hello"; x = 5;`). Languages like TypeScript or Java are statically typed.' }
    ],
    summary: ['JS is single-threaded but asynchronous.', 'ECMAScript is the standard.', 'Client-side vs Server-side.'],
    references: commonReferences
  },
  'js_variables_interview_questions': {
    isStructured: true,
    title: '282. Variables Interview Questions',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'This section tests your knowledge of how JavaScript stores data, specifically focusing on the differences between `var`, `let`, and `const`, as well as the concepts of Scope and Hoisting.',
    whyUseIt: 'Understanding variable scope is critical. A huge percentage of bugs in JavaScript are caused by variables being accessed in the wrong scope or being accidentally overwritten.',
    syntax: '// Q & A Format',
    codeExample: '// Example Question: Explain Hoisting\nconsole.log(myVar); // Outputs: undefined\nvar myVar = 10;\n\n// console.log(myLet); // Error: Cannot access before initialization\nlet myLet = 20;',
    expectedOutput: 'Understanding variable scoping and hoisting rules.',
    explanation: [
      { code: 'Hoisting', desc: 'JavaScript moves variable DECLARATIONS to the top of their scope before code execution. However, it only hoists the declaration, not the initialization (the value).' },
      { code: 'Block Scope', desc: '`let` and `const` are blocked scoped (trapped inside `{}`). `var` is function scoped, which often leads to leaks.' }
    ],
    realWorldExample: 'In an interview, you will often be handed a tricky piece of code with nested `if` statements and `for` loops and asked, "What does `console.log(x)` output at the end of this script?"',
    commonMistakes: [
      { error: 'Using var', code: 'var count = 0;', suffix: 'In modern JavaScript (ES6+), you should almost never use `var`. Always default to `const`. If you know the variable will change, use `let`.' }
    ],
    bestPractices: ['Use `const` by default. It tells other developers "this value shouldn\'t change", making the code much easier to reason about.'],
    practiceExercise: {
      task: 'Without coding: Can you modify the properties of an object declared with `const`?',
      expectedOutput: 'Yes.',
      solution: 'Yes! `const` prevents you from REASSIGNING the variable to a completely new object, but it does NOT freeze the object\'s internal properties. You can still do `const user = { age: 20 }; user.age = 21;`.'
    },
    quiz: [
      { question: 'What is the main difference between `let` and `var`?', options: ['`let` is for numbers, `var` is for strings', '`let` is Block Scoped (confined to `{}`), while `var` is Function Scoped', '`var` cannot be reassigned', 'There is no difference'], answer: '`let` is Block Scoped (confined to `{}`), while `var` is Function Scoped' },
      { question: 'What happens if you try to reassign a variable declared with `const`?', options: ['It works fine', 'It creates a new variable', 'JavaScript throws a TypeError: Assignment to constant variable', 'It changes the variable type'], answer: 'JavaScript throws a TypeError: Assignment to constant variable' },
      { question: 'What is "Hoisting"?', options: ['Uploading code to a server', 'JavaScript\'s default behavior of moving variable and function declarations to the top of their current scope before code execution', 'Deleting old variables', 'Converting variables to strings'], answer: 'JavaScript\'s default behavior of moving variable and function declarations to the top of their current scope before code execution' },
      { question: 'Can you change the properties of an array or object declared with `const` (e.g., `const arr = []; arr.push(1);`)?', options: ['Yes, `const` only prevents reassignment of the variable identifier itself, it does not freeze the internal contents of objects/arrays', 'No, it throws an error', 'Only arrays, not objects', 'Only in React'], answer: 'Yes, `const` only prevents reassignment of the variable identifier itself, it does not freeze the internal contents of objects/arrays' },
      { question: 'Which variable declaration should you default to using in modern JavaScript?', options: ['var', 'let', 'const', 'global'], answer: 'const' }
    ],
    interviewQuestions: [
      { q: 'What is the "Temporal Dead Zone" (TDZ)?', a: 'When using `let` or `const`, the variables are hoisted, but they are placed in a "Temporal Dead Zone" from the start of the block until the declaration line is reached. If you try to access them while in the TDZ, JavaScript throws a ReferenceError.' }
    ],
    summary: ['Understand `var` vs `let` vs `const`.', 'Master Block Scope vs Function Scope.', 'Understand Hoisting and the TDZ.'],
    references: commonReferences
  },
  'js_data_types_interview_questions': {
    isStructured: true,
    title: '283. Data Types Interview Questions',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'This section tests your knowledge of JavaScript\'s primitive types vs reference types, type coercion (how JS converts types implicitly), and equality checking.',
    whyUseIt: 'JavaScript is notoriously weird with data types (e.g., `"5" + 1 === "51"`, but `"5" - 1 === 4`). Interviewers use these questions to see if you understand these quirks.',
    syntax: '// Q & A Format',
    codeExample: '// Example Question: Primitive vs Reference Types\nlet a = 10;\nlet b = a;\nb = 20;\nconsole.log(a); // 10 (Primitives copy by VALUE)\n\nlet obj1 = { name: "Bob" };\nlet obj2 = obj1;\nobj2.name = "Alice";\nconsole.log(obj1.name); // "Alice" (Objects copy by REFERENCE)',
    expectedOutput: 'Understanding of Value vs Reference in memory.',
    explanation: [
      { code: 'Primitive Types', desc: 'String, Number, Boolean, Null, Undefined, Symbol. They are stored directly in the variable location. When you assign them to a new variable, JS creates a perfect, independent copy.' },
      { code: 'Reference Types', desc: 'Objects, Arrays, Functions. The variable only holds a POINTER to a location in memory. If `let obj2 = obj1`, they both point to the exact same memory. Changing one changes both.' }
    ],
    realWorldExample: 'You are building a shopping cart. You do `let currentCart = masterCart`, then you delete an item from `currentCart`. Suddenly the item vanishes from `masterCart` too! Why? Because they are the same reference in memory. You failed the data types test.',
    commonMistakes: [
      { error: 'Using == instead of ===', code: 'if ("5" == 5)', suffix: 'The double equals `==` performs Type Coercion. It tries to force the string into a number before comparing, so `"5" == 5` is `true`. Always use `===` which checks both Value AND Type, so `"5" === 5` is `false`.' }
    ],
    bestPractices: ['Never use `==`. Always use `===`. If you need to check if an object is empty, do not do `if (obj === {})` (this will always be false because they are different references in memory). Use `Object.keys(obj).length === 0`.'],
    practiceExercise: {
      task: 'Without coding: What is the data type of `typeof null`?',
      expectedOutput: '"object"',
      solution: '"object". This is a famous, heavily-asked bug in the original implementation of JavaScript that was never fixed because it would break too many old websites.'
    },
    quiz: [
      { question: 'What is the difference between `undefined` and `null`?', options: ['They are identical', '`undefined` means a variable has been declared but not assigned a value. `null` is an intentional, explicit assignment of "nothing" or "empty"', '`null` is a string, `undefined` is a number', '`undefined` is an error'], answer: '`undefined` means a variable has been declared but not assigned a value. `null` is an intentional, explicit assignment of "nothing" or "empty"' },
      { question: 'Why does `"5" + 3` equal `"53"`, but `"5" - 3` equal `2`?', options: ['Because JavaScript is broken', 'Because the `+` operator prefers String Concatenation, while the `-` operator only works on numbers, forcing Type Coercion', 'Because 5 is larger than 3', 'Because it is a feature of React'], answer: 'Because the `+` operator prefers String Concatenation, while the `-` operator only works on numbers, forcing Type Coercion' },
      { question: 'What does `typeof typeof 1` return?', options: ['"number"', '"string" (because `typeof 1` returns the string "number", and the typeof that string is "string")', 'Error', 'undefined'], answer: '"string" (because `typeof 1` returns the string "number", and the typeof that string is "string")' },
      { question: 'Why does `[1, 2] === [1, 2]` evaluate to `false`?', options: ['Because arrays cannot be compared', 'Because they are Reference Types. You are comparing two completely different memory addresses, not their contents', 'Because the numbers are too small', 'Because you need to use `==`'], answer: 'Because they are Reference Types. You are comparing two completely different memory addresses, not their contents' },
      { question: 'What is the universally accepted best practice for equality checking in JavaScript?', options: ['Always use `==`', 'Always use `===` (Strict Equality) to prevent unexpected type coercion bugs', 'Always use `=`', 'Always use `!==`'], answer: 'Always use `===` (Strict Equality) to prevent unexpected type coercion bugs' }
    ],
    interviewQuestions: [
      { q: 'What are "Truthy" and "Falsy" values?', a: 'When evaluating a condition (like `if (x)`), JS converts `x` to a boolean. "Falsy" values evaluate to false: `0`, `""` (empty string), `null`, `undefined`, `NaN`, and `false`. EVERYTHING else (including empty arrays `[]` and empty objects `{}`) is "Truthy".' }
    ],
    summary: ['Primitives copy by value.', 'Objects copy by reference.', 'Always use `===`.'],
    references: commonReferences
  },
  'js_functions_interview_questions': {
    isStructured: true,
    title: '284. Functions Interview Questions',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'This section tests your knowledge of advanced function concepts: First-Class Functions, Higher-Order Functions, Closures, and the `this` keyword.',
    whyUseIt: 'Functions are the absolute core of JavaScript. JavaScript treats functions differently than almost any other language (treating them as objects), which allows for powerful functional programming patterns.',
    syntax: '// Q & A Format',
    codeExample: '// Example Question: What is a Closure?\nfunction createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst counter1 = createCounter();\nconsole.log(counter1()); // 1\nconsole.log(counter1()); // 2\n// The inner function REMEMBERS the `count` variable from its parent, \n// even after the parent function has finished executing!',
    expectedOutput: 'Understanding of Closures and Higher Order Functions.',
    explanation: [
      { code: 'Closure', desc: 'A closure is a function that remembers the variables from its outer scope, even after that outer scope has finished running. It is used constantly to create "private" variables in JS.' },
      { code: 'Higher-Order Function', desc: 'A function that either takes ANOTHER function as an argument (like `.map(callback)`) or returns a function.' }
    ],
    realWorldExample: 'Event listeners. When you do `button.addEventListener("click", () => alert(message))`, you are using a closure! The arrow function remembers the `message` variable from the surrounding code when the user eventually clicks the button.',
    commonMistakes: [
      { error: 'Losing `this` context', code: 'setTimeout(user.sayHello, 1000)', suffix: 'If `user.sayHello` relies on `this.name`, passing it like this detaches the function from the `user` object. When it runs a second later, `this` becomes the Window, and `this.name` is undefined. You must use `.bind()` or an arrow function.' }
    ],
    bestPractices: ['If you need a function to strictly retain the `this` context of where it was defined, always use an Arrow Function.'],
    practiceExercise: {
      task: 'Without coding: What is a "Callback" function?',
      expectedOutput: 'A function passed as an argument.',
      solution: 'A callback is simply a function that is passed as an argument into another function, to be executed later (e.g., `setTimeout(myCallback, 1000)`).'
    },
    quiz: [
      { question: 'What does it mean that functions are "First-Class Citizens" in JavaScript?', options: ['They get priority execution', 'They can be treated like any other variable: stored in arrays, assigned to variables, passed as arguments, or returned from other functions', 'They are written in classes', 'They cannot crash'], answer: 'They can be treated like any other variable: stored in arrays, assigned to variables, passed as arguments, or returned from other functions' },
      { question: 'What is a Closure?', options: ['A function that closes the browser', 'A function that remembers the variables from its lexical scope even when the function is executed outside that scope', 'A syntax error', 'An array method'], answer: 'A function that remembers the variables from its lexical scope even when the function is executed outside that scope' },
      { question: 'What is a Higher-Order Function?', options: ['A function written at the top of the file', 'A function that executes very fast', 'A function that takes another function as an argument, or returns a function', 'A recursive function'], answer: 'A function that takes another function as an argument, or returns a function' },
      { question: 'How is the `this` keyword determined in a traditional `function() {}`?', options: ['By where the function is written', 'By HOW the function is called (the object to the left of the dot at execution time)', 'It is always the Window object', 'It is undefined'], answer: 'By HOW the function is called (the object to the left of the dot at execution time)' },
      { question: 'How is the `this` keyword determined in an Arrow Function `() => {}`?', options: ['It does not have its own `this`. It inherits `this` lexically from the surrounding scope where it was defined', 'By the object calling it', 'It is always `null`', 'By the DOM'], answer: 'It does not have its own `this`. It inherits `this` lexically from the surrounding scope where it was defined' }
    ],
    interviewQuestions: [
      { q: 'What is an IIFE (Immediately Invoked Function Expression)?', a: 'It is a function that runs immediately as soon as it is defined: `(function() { console.log("Run"); })();`. Historically, it was used to create private scopes and avoid polluting the global namespace before `let` and `const` existed.' }
    ],
    summary: ['Master Closures.', 'Understand Higher-Order functions.', 'Know how `this` differs in arrow functions.'],
    references: commonReferences
  },
  'js_array_interview_questions': {
    isStructured: true,
    title: '285. Array Interview Questions',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'This section covers advanced array manipulation, deeply testing your knowledge of immutability, array methods (`map`, `filter`, `reduce`), and performance considerations.',
    whyUseIt: 'Almost all data in modern web apps is sent as JSON Arrays. If you cannot confidently manipulate arrays, you cannot build frontend applications.',
    syntax: '// Q & A Format',
    codeExample: '// Example Question: Remove duplicates from an array\nconst numbers = [1, 2, 2, 3, 4, 4, 5];\n\n// Solution 1: using Set (Modern, Best)\nconst unique = [...new Set(numbers)];\nconsole.log(unique); // [1, 2, 3, 4, 5]\n\n// Solution 2: using filter and indexOf\nconst unique2 = numbers.filter((val, index) => numbers.indexOf(val) === index);',
    expectedOutput: 'Ability to solve common algorithmic array problems instantly.',
    explanation: [
      { code: 'new Set()', desc: 'A `Set` is a built-in JS object that CANNOT contain duplicate values. Passing an array into a Set instantly destroys all duplicates. We then use the spread operator `...` to turn the Set back into a standard Array.' }
    ],
    realWorldExample: 'You are building an E-Commerce filter sidebar. The user selects "Red" and "Blue". You have an array of 5,000 products. You must write an optimized function to filter those products. Do you use `.map`? No. `.forEach`? No. `.filter`? Yes.',
    commonMistakes: [
      { error: 'Mutating arrays in React', code: 'arr.push(newVal); setArr(arr);', suffix: 'If you push to an array and pass it to React state, React will NOT re-render the page because the memory address of the array hasn\'t changed. You must ALWAYS use immutability: `setArr([...arr, newVal])`.' }
    ],
    bestPractices: ['Know the difference between Mutating methods (change original) and Non-Mutating methods (return new). Mutating: `push`, `pop`, `splice`, `sort`, `reverse`. Non-Mutating: `map`, `filter`, `reduce`, `slice`, `concat`.'],
    practiceExercise: {
      task: 'Without coding: Does `.sort()` return a new array or modify the original array?',
      expectedOutput: 'Modifies the original.',
      solution: 'It modifies (mutates) the original array! If you want to sort an array immutably, you must copy it first: `const sorted = [...arr].sort();`'
    },
    quiz: [
      { question: 'What is the most concise, modern way to remove duplicate values from an array in JavaScript?', options: ['Using a double for-loop', 'Using `[...new Set(array)]`', 'Using `.map()`', 'Using `.splice()`'], answer: 'Using `[...new Set(array)]`' },
      { question: 'Which of the following array methods MUTATES (permanently alters) the original array?', options: ['.map()', '.filter()', '.slice()', '.splice()'], answer: '.splice()' },
      { question: 'What is the difference between `.slice()` and `.splice()`?', options: ['They are the same', '`.slice()` returns a shallow copy of a portion of an array without modifying the original. `.splice()` modifies the original array by removing or adding elements', '`.slice()` is for strings only', '`.splice()` is faster'], answer: '`.slice()` returns a shallow copy of a portion of an array without modifying the original. `.splice()` modifies the original array by removing or adding elements' },
      { question: 'How does the default `.sort()` method work in JavaScript if you don\'t provide a comparison function?', options: ['It sorts numbers mathematically', 'It converts everything to strings and sorts them alphabetically (so 10 comes before 2)', 'It throws an error', 'It randomizes the array'], answer: 'It converts everything to strings and sorts them alphabetically (so 10 comes before 2)' },
      { question: 'How do you check if an unknown variable `myVar` is actually an array?', options: ['typeof myVar === "array"', 'myVar.isArray()', 'Array.isArray(myVar)', 'myVar === []'], answer: 'Array.isArray(myVar)' }
    ],
    interviewQuestions: [
      { q: 'How would you flatten a multi-dimensional array (e.g., `[1, [2, [3, 4]]]` into `[1, 2, 3, 4]`)?', a: 'Modern JavaScript has a built-in method for this: `array.flat(Infinity)`. Before that existed, you had to use recursion combined with `.reduce()`.' }
    ],
    summary: ['Master Set for unique values.', 'Know Mutating vs Non-Mutating methods.', 'Understand `slice` vs `splice`.'],
    references: commonReferences
  }
};
