const commonReferences = [
  { label: 'React Official Docs', url: 'https://react.dev/learn/javascript-in-jsx_curly_braces' },
  { label: 'MDN Web Docs - Array Methods', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' }
];

export const javascriptContentBatch21 = {
  'js_javascript_for_react': {
    isStructured: true,
    title: '268-280. JavaScript for React',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'React is a JavaScript library. Before learning React, you MUST master specific ES6 JavaScript features. React heavily relies on Array methods (`map`, `filter`, `reduce`), Destructuring, Spread Operators, Arrow Functions, Modules, and Promises.',
    whyUseIt: 'If you jump straight into React without knowing these JS concepts, you will constantly confuse "React features" with "Standard JavaScript features". Mastering these makes React 10x easier.',
    syntax: 'arr.map(item => <Element />)\nconst { prop } = props;\nconst newObj = { ...oldObj, newProp: 1 };',
    codeExample: '// 1. Array .map() (Crucial for rendering lists in React)\nconst users = [{id: 1, name: "Sam"}, {id: 2, name: "Ali"}];\nconst names = users.map(user => user.name.toUpperCase());\n\n// 2. Array .filter() (Crucial for deleting items or search bars)\nconst onlySam = users.filter(user => user.id === 1);\n\n// 3. Object Destructuring (Crucial for React Props)\nconst props = { title: "Hello", color: "red" };\nconst { title, color } = props;\n\n// 4. Spread Operator (Crucial for updating React State)\nconst oldState = { loggedIn: false, theme: "dark" };\nconst newState = { ...oldState, loggedIn: true };\n\nconsole.log(names);\nconsole.log(newState);',
    expectedOutput: '["SAM", "ALI"]\n{ loggedIn: true, theme: "dark" }',
    explanation: [
      { code: 'users.map(user => ...)', desc: '`.map()` creates a NEW array by transforming every item in the old array. In React, you use this to turn an array of data into an array of HTML/JSX elements.' },
      { code: 'users.filter(user => ...)', desc: '`.filter()` creates a NEW array containing only items that match the condition. Used in React to remove items from state.' },
      { code: 'const { title } = props', desc: 'React components receive a single `props` object. We instantly destructure it to use variables directly.' },
      { code: '{ ...oldState, loggedIn: true }', desc: 'In React, state is IMMUTABLE. You never change it directly. You use the spread operator to copy the old state into a new object, and overwrite the pieces you need to change.' }
    ],
    realWorldExample: 'A Shopping Cart in React. You use `map()` to display all items. When a user clicks "Remove", you use `filter()` to create a new array without that item. You use `reduce()` to calculate the total price.',
    commonMistakes: [
      { error: 'Using forEach instead of map in React', code: 'users.forEach(user => { return user.name; });', suffix: '`forEach` returns `undefined`. It just loops. `.map()` actually RETURNS a new array, which React needs in order to render the list to the screen.' }
    ],
    bestPractices: ['Always treat objects and arrays as Immutable. Never do `arr.push(item)` or `obj.name = "new"`. Instead do `const newArr = [...arr, item]` and `const newObj = {...obj, name: "new"}`.'],
    practiceExercise: {
      task: 'Given `const nums = [1, 2, 3];`. Use `.map()` to create a new array where every number is multiplied by 10. Log the new array.',
      expectedOutput: '[10, 20, 30]',
      solution: 'const nums = [1,2,3]; const tens = nums.map(n => n * 10); console.log(tens);'
    },
    quiz: [
      { question: 'Which array method is used in React to loop over an array of data and return UI elements?', options: ['.forEach()', '.map()', '.reduce()', '.loop()'], answer: '.map()' },
      { question: 'Why is the Spread Operator (`...`) used so much in React?', options: ['To delete objects', 'Because React state is immutable; spread allows you to copy old state into a new object safely', 'To make code run faster', 'To compress files'], answer: 'Because React state is immutable; spread allows you to copy old state into a new object safely' },
      { question: 'What does `.filter()` return?', options: ['A single object', 'A boolean', 'A brand new array containing only the items that passed the test', 'undefined'], answer: 'A brand new array containing only the items that passed the test' },
      { question: 'If a React component accepts `props`, what JS feature is used to extract `title` from it? E.g., `const { title } = props;`', options: ['Destructuring', 'Spreading', 'Mapping', 'Slicing'], answer: 'Destructuring' },
      { question: 'What does `.reduce()` do?', options: ['Deletes the array', 'Reduces the array down to a single value (like a sum or a total)', 'Reverses the array', 'Filters the array'], answer: 'Reduces the array down to a single value (like a sum or a total)' }
    ],
    interviewQuestions: [
      { q: 'Why shouldn\'t you mutate an array directly (e.g., `arr.push(newVal)`) in React?', a: 'React determines if it needs to re-render the screen by comparing memory references. If you `push()` to an array, it modifies the existing array in memory. The reference hasn\'t changed, so React thinks nothing changed, and the screen won\'t update. Using `[...arr, newVal]` creates a new array in memory, triggering a re-render.' }
    ],
    summary: ['`.map()` for rendering lists.', '`.filter()` for removing items.', 'Destructuring for clean code.', 'Spread `...` for updating state.'],
    references: commonReferences
  },

  'js_interview_preparation': {
    isStructured: true,
    title: '281-296. Interview Preparation',
    difficulty: 'All Levels',
    readingTime: '6 min',
    definition: 'JavaScript interviews typically focus on core language quirks: Closures, Hoisting, the Event Loop, `this` keyword behavior, and Array methods. They will often ask "Output-Based Questions" where they show you weird code and ask what it logs.',
    whyUseIt: 'Passing an interview requires knowing not just HOW to write code, but WHY JavaScript behaves the way it does under the hood.',
    syntax: 'N/A',
    codeExample: '// Example Output-Based Interview Question:\nconsole.log(a);\nvar a = 10;\n\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1000);\n}\n\n// What does this print?',
    expectedOutput: '"undefined"\n"3" (printed 3 times)',
    explanation: [
      { code: 'console.log(a); var a = 10;', desc: 'Prints `undefined` due to HOISTING. `var a` is hoisted to the top, but the assignment `= 10` is not.' },
      { code: 'for (var i...) setTimeout', desc: 'Because `var` is function-scoped (not block-scoped), the loop finishes running instantly (i becomes 3). 1 second later, the 3 timeouts fire, and they all look at the exact same `i` variable, which is now 3.' },
      { code: 'Fixing the loop', desc: 'Change `var i` to `let i`. Because `let` is block-scoped, it creates a new binding for `i` on every loop iteration, printing 0, 1, 2.' }
    ],
    realWorldExample: 'Interviews test edge cases to see if you understand the JavaScript engine. In the real world, you just use `let` and `const` to avoid these headaches entirely.',
    commonMistakes: [
      { error: 'Assuming JS runs sequentially without thinking of the Event Loop', code: 'setTimeout(func, 0)', suffix: 'Even with 0ms delay, it is pushed to the Web API and Task Queue, meaning synchronous code will ALWAYS finish before the timeout runs.' }
    ],
    bestPractices: ['Practice explaining concepts out loud. An interviewer wants to hear your thought process, not just the final answer.'],
    practiceExercise: {
      task: 'Research the concept of a "Closure". Write a function that returns another function. The inner function should access a variable from the outer function.',
      expectedOutput: '(A working closure)',
      solution: 'function outer() { let count = 0; return function inner() { count++; console.log(count); } } const counter = outer(); counter(); counter();'
    },
    quiz: [
      { question: 'What is Hoisting?', options: ['Lifting elements on the screen', 'JavaScript\'s default behavior of moving declarations to the top of the current scope', 'A CSS property', 'Uploading files'], answer: 'JavaScript\'s default behavior of moving declarations to the top of the current scope' },
      { question: 'What is a Closure?', options: ['Ending a function', 'A function having access to the parent scope, even after the parent function has closed', 'Closing a browser tab', 'Deleting a variable'], answer: 'A function having access to the parent scope, even after the parent function has closed' },
      { question: 'What is the output of `console.log(typeof null)`? (Famous JS bug)', options: ['"null"', '"undefined"', '"object"', '"boolean"'], answer: '"object"' },
      { question: 'What is the difference between `==` and `===`?', options: ['== checks type, === checks value', '== checks value, === checks both value and type (strict equality)', 'No difference', '=== only works on strings'], answer: '== checks value, === checks both value and type (strict equality)' },
      { question: 'What manages asynchronous operations like setTimeout and Promises in the JS Engine?', options: ['The Hard Drive', 'The Event Loop', 'The DOM', 'The Compiler'], answer: 'The Event Loop' }
    ],
    interviewQuestions: [
      { q: 'Explain the Event Loop.', a: 'The Event Loop is a mechanism that constantly checks if the Call Stack is empty. If it is empty, it looks at the Microtask Queue (Promises) and the Macrotask Queue (setTimeout, clicks). It pushes pending callbacks from those queues onto the Call Stack to be executed.' }
    ],
    summary: ['Understand Hoisting (`var` vs `let`).', 'Understand Closures (functions returning functions).', 'Understand the Event Loop (Call Stack, Web APIs, Task Queue).'],
    references: commonReferences
  }
};
