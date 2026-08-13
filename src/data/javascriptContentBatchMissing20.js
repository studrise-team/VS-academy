const commonReferences = [
  { label: 'MDN Web Docs - Promise', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise' },
  { label: 'MDN Web Docs - async function', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function' },
  { label: 'MDN Web Docs - await', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await' }
];

export const javascriptContentBatchMissing20 = {
  'js_promise_states': {
    isStructured: true,
    title: '191. Promise States',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A Promise in JavaScript is always in exactly one of three mutually exclusive states: **Pending** (initial state, neither fulfilled nor rejected), **Fulfilled** (the operation completed successfully), or **Rejected** (the operation failed).',
    whyUseIt: 'Understanding these states is crucial because they dictate which callback methods (`.then()` or `.catch()`) the Promise will trigger once it settles.',
    syntax: '// A Promise is Pending until it resolves (Fulfilled) or rejects (Rejected).',
    codeExample: 'const myPromise = new Promise((resolve, reject) => {\n  // 1. Initially, the promise is PENDING.\n  console.log("Promise is PENDING...");\n  \n  setTimeout(() => {\n    const success = true;\n    if (success) {\n      // 2. We change the state to FULFILLED.\n      resolve("Data fetched successfully!");\n    } else {\n      // OR 3. We change the state to REJECTED.\n      reject("Network error occurred.");\n    }\n  }, 2000);\n});\n\n// How we react to the states:\nmyPromise\n  .then(data => console.log(data)) // Reacts to FULFILLED\n  .catch(err => console.log(err)); // Reacts to REJECTED',
    expectedOutput: 'Promise is PENDING...\n(2 seconds later)\nData fetched successfully!',
    explanation: [
      { code: 'Pending', desc: 'The starting state. The asynchronous work (like a network request) is currently happening in the background.' },
      { code: 'resolve()', desc: 'A function that transitions the Promise from Pending to Fulfilled. You pass the successful data into it.' },
      { code: 'reject()', desc: 'A function that transitions the Promise from Pending to Rejected. You pass the error message into it.' }
    ],
    realWorldExample: 'Ordering food at a restaurant. **Pending**: You are waiting for the food. **Fulfilled**: The waiter brings your food. **Rejected**: The waiter comes out and says they are out of ingredients.',
    commonMistakes: [
      { error: 'Thinking a Promise can change states multiple times', code: 'resolve("A"); reject("B");', suffix: 'A Promise is "settled" once it hits Fulfilled or Rejected. Its state and value become permanently locked. If you call `reject()` after already calling `resolve()`, the `reject()` is completely ignored.' }
    ],
    bestPractices: ['Whenever you create a new Promise, always ensure there is a clear path for it to eventually reach either the Fulfilled or Rejected state. If it stays Pending forever, you have a memory leak.'],
    practiceExercise: {
      task: 'If a Promise successfully calls the `resolve("Hi")` function, what state does it enter?',
      expectedOutput: 'Fulfilled',
      solution: 'Fulfilled'
    },
    quiz: [
      { question: 'What is the initial state of a newly created Promise?', options: ['Fulfilled', 'Rejected', 'Pending', 'Waiting'], answer: 'Pending' },
      { question: 'If the asynchronous operation is successful, what state does the Promise transition into?', options: ['Resolved', 'Fulfilled', 'Complete', 'Done'], answer: 'Fulfilled' },
      { question: 'If the asynchronous operation fails (e.g., server goes offline), what state does the Promise transition into?', options: ['Pending', 'Failed', 'Error', 'Rejected'], answer: 'Rejected' },
      { question: 'What does the term "Settled" mean regarding a Promise?', options: ['The Promise is currently Pending', 'The Promise has completed (either Fulfilled OR Rejected) and its state is locked', 'The Promise was successfully Fulfilled', 'The Promise crashed'], answer: 'The Promise has completed (either Fulfilled OR Rejected) and its state is locked' },
      { question: 'Can a Promise go from Fulfilled back to Pending?', options: ['Yes', 'No, once a Promise is settled, its state cannot be changed', 'Only if you call `reset()`', 'Only in Node.js'], answer: 'No, once a Promise is settled, its state cannot be changed' }
    ],
    interviewQuestions: [
      { q: 'Is there a difference between "Resolved" and "Fulfilled"?', a: 'In casual conversation, developers use them interchangeably. Technically, a Promise is "resolved" if it is settled or if it is "locked in" to match the state of another Promise. "Fulfilled" specifically means it resulted in a successful value.' }
    ],
    summary: ['Three states: Pending, Fulfilled, Rejected.', '`resolve()` transitions to Fulfilled.', '`reject()` transitions to Rejected.'],
    references: commonReferences
  },
  'js_then': {
    isStructured: true,
    title: '192. then()',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `.then()` method is attached to a Promise. It takes a callback function that will be executed *only if* the Promise successfully transitions into the **Fulfilled** state.',
    whyUseIt: 'It is the standard way to access the data that was retrieved by an asynchronous operation (like fetching user data from an API).',
    syntax: 'promise.then((result) => { /* use result */ });',
    codeExample: '// Simulating an API call that returns a Promise\nfunction getUsername() {\n  return Promise.resolve("Alice123"); // Instantly returns a Fulfilled Promise\n}\n\n// We call the function, and attach .then() to handle the success\ngetUsername().then((name) => {\n  console.log(`The username is ${name}`);\n});\n\n// You can chain multiple .then() calls!\ngetUsername()\n  .then((name) => {\n    return name.toUpperCase(); // We pass this modified data down the chain\n  })\n  .then((upperName) => {\n    console.log(`Uppercase: ${upperName}`);\n  });',
    expectedOutput: 'The username is Alice123\nUppercase: ALICE123',
    explanation: [
      { code: '.then((name) => ...)', desc: 'The variable `name` holds whatever value the Promise was resolved with.' },
      { code: 'return name.toUpperCase()', desc: 'If you return a value inside a `.then()`, the next `.then()` in the chain will receive that value as its argument.' }
    ],
    realWorldExample: 'Fetching JSON data from a server. The first `.then()` converts the raw HTTP response into a JavaScript object, and the second `.then()` renders that object to the DOM.',
    commonMistakes: [
      { error: 'Forgetting to return', code: '.then(data => { const num = data * 2; }).then(res => console.log(res))', suffix: 'If you don\'t explicitly `return` a value inside a block arrow function `{ }`, it returns `undefined`. The second `.then()` will log `undefined`.' }
    ],
    bestPractices: ['Always keep your `.then()` chains as flat as possible. Never nest a `.then()` inside another `.then()`. Return the inner Promise instead to keep it flat.'],
    practiceExercise: {
      task: 'Given a resolved Promise `p = Promise.resolve(5);`, write a `.then()` chain that multiplies the value by 2, and then a second `.then()` that logs the result (10).',
      expectedOutput: 'Logs 10.',
      solution: 'p.then(num => num * 2).then(res => console.log(res));'
    },
    quiz: [
      { question: 'When does the callback inside a `.then()` execute?', options: ['Immediately', 'When the Promise enters the Pending state', 'When the Promise enters the Rejected state', 'When the Promise enters the Fulfilled state'], answer: 'When the Promise enters the Fulfilled state' },
      { question: 'What does the parameter inside the `.then()` callback represent (e.g., `.then((data) => ...)`?', options: ['An error message', 'The successful value that the Promise resolved with', 'A new Promise', 'The window object'], answer: 'The successful value that the Promise resolved with' },
      { question: 'What happens if you `return` a value inside a `.then()`?', options: ['It stops the program', 'It throws an error', 'The value is passed down to the next `.then()` in the chain', 'It deletes the Promise'], answer: 'The value is passed down to the next `.then()` in the chain' },
      { question: 'Can you chain multiple `.then()` methods together on a single Promise?', options: ['Yes', 'No, you can only have one', 'Only in strict mode', 'Only if the Promise is a string'], answer: 'Yes' },
      { question: 'Does a `.then()` handle errors by default?', options: ['Yes', 'No, that is what `.catch()` is for', 'Sometimes', 'Only if you pass a boolean'], answer: 'No, that is what `.catch()` is for' }
    ],
    interviewQuestions: [
      { q: 'Can `.then()` take a second argument?', a: 'Yes. The full signature is `.then(onFulfilled, onRejected)`. You can pass an error-handling callback as the second argument, though modern convention strongly prefers using `.catch()` at the end of the chain instead.' }
    ],
    summary: ['Executes when a Promise fulfills.', 'Receives the successful data.', 'Can be chained flatly.'],
    references: commonReferences
  },
  'js_catch': {
    isStructured: true,
    title: '193. catch()',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `.catch()` method is attached to a Promise to handle errors. Its callback function executes *only if* the Promise transitions into the **Rejected** state, or if an error is thrown anywhere inside a preceding `.then()` block.',
    whyUseIt: 'Without `.catch()`, if a network request fails (e.g., the user loses internet connection), your JavaScript app might crash with an "Unhandled Promise Rejection" error. `.catch()` allows you to gracefully show an error message to the user.',
    syntax: 'promise.then(data => { ... }).catch(error => { ... });',
    codeExample: '// Simulating an API call that fails\nfunction getSecretData() {\n  return Promise.reject(new Error("Database connection failed"));\n}\n\ngetSecretData()\n  .then((data) => {\n    // This code will be completely SKIPPED because the Promise rejected.\n    console.log("Success:", data);\n  })\n  .catch((err) => {\n    // The rejection falls straight down into this catch block.\n    console.log("Uh oh! We caught an error:");\n    console.error(err.message);\n  });',
    expectedOutput: 'Uh oh! We caught an error: Database connection failed',
    explanation: [
      { code: '.catch((err) => ...)', desc: 'The variable `err` holds whatever error message or Error object the Promise rejected with.' },
      { code: 'Skipping .then()', desc: 'If a Promise rejects, it immediately jumps past all `.then()` blocks until it finds a `.catch()` block.' }
    ],
    realWorldExample: 'Trying to log a user in. If the server says "Invalid Password", the Promise rejects, jumps to the `.catch()` block, and you use JS to show a red "Invalid Password" tooltip under the input box.',
    commonMistakes: [
      { error: 'Forgetting to add a catch block', code: 'fetch(url).then(res => res.json())', suffix: 'If the fetch fails and you don\'t have a `.catch()`, it creates a silent or fatal error. ALWAYS put a `.catch()` at the end of your Promise chains.' }
    ],
    bestPractices: ['A single `.catch()` placed at the very bottom of a long `.then()` chain will catch errors that occur *anywhere* in that chain. You don\'t need a `.catch()` after every `.then()`.'],
    practiceExercise: {
      task: 'Given a rejecting promise `const p = Promise.reject("Failed");`, write a `.catch()` block that logs the exact string it received.',
      expectedOutput: 'Logs "Failed".',
      solution: 'p.catch(err => console.log(err));'
    },
    quiz: [
      { question: 'When does the callback inside a `.catch()` execute?', options: ['When the Promise is Fulfilled', 'When the Promise is Pending', 'When the Promise is Rejected or throws an error', 'Every time'], answer: 'When the Promise is Rejected or throws an error' },
      { question: 'What happens to the `.then()` blocks in a chain if the initial Promise rejects?', options: ['They run anyway', 'They are completely skipped, and execution jumps straight to the `.catch()` block', 'They throw a SyntaxError', 'They loop infinitely'], answer: 'They are completely skipped, and execution jumps straight to the `.catch()` block' },
      { question: 'If you have a chain of 5 `.then()` methods, how many `.catch()` methods do you need to handle errors for all of them?', options: ['5', '1 at the very end of the chain', '0', '10'], answer: '1 at the very end of the chain' },
      { question: 'What is the danger of NOT including a `.catch()` on a Promise chain?', options: ['It runs slower', 'It might result in an "Unhandled Promise Rejection" error, which can crash Node.js applications', 'The HTML gets deleted', 'It prevents CSS from loading'], answer: 'It might result in an "Unhandled Promise Rejection" error, which can crash Node.js applications' },
      { question: 'Can a `.catch()` block catch errors thrown manually using `throw new Error()` inside a `.then()` block?', options: ['Yes', 'No, only network errors', 'No, it only catches rejected promises', 'Only in strict mode'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'Can you chain a `.then()` AFTER a `.catch()`?', a: 'Yes! If the `.catch()` successfully handles the error and doesn\'t throw a new one, the Promise chain is "recovered", and any subsequent `.then()` blocks will execute.' }
    ],
    summary: ['Executes when a Promise rejects.', 'Catches errors anywhere in the chain.', 'Always put one at the end of a chain.'],
    references: commonReferences
  },
  'js_async': {
    isStructured: true,
    title: '195. async',
    difficulty: 'Advanced',
    readingTime: '3 min',
    definition: 'The `async` keyword is placed before a function declaration to turn it into an "Async Function". An async function always returns a Promise, even if you explicitly return a simple string or number.',
    whyUseIt: 'The `async` keyword is one half of the "async/await" duo. It enables the use of the `await` keyword inside the function, allowing you to write asynchronous code that looks and behaves like synchronous code.',
    syntax: 'async function getData() { return "Hello"; }',
    codeExample: '// 1. Regular Function\nfunction normalFunc() {\n  return 5;\n}\nconsole.log(normalFunc()); // 5\n\n// 2. Async Function\nasync function myAsyncFunc() {\n  return 5;\n}\nconsole.log(myAsyncFunc()); // Promise { <fulfilled>: 5 }\n\n// Because it returns a Promise, we can use .then() on it!\nmyAsyncFunc().then(val => console.log("Value inside promise:", val));',
    expectedOutput: '5\nPromise { 5 }\nValue inside promise: 5',
    explanation: [
      { code: 'async function', desc: 'Tells the JavaScript engine: "This function is going to deal with asynchronous operations. Wrap whatever it returns inside a Promise automatically."' }
    ],
    realWorldExample: 'Marking a function `async function fetchUserData(id) { ... }` so that inside it, you can pause execution to wait for database queries to finish.',
    commonMistakes: [
      { error: 'Trying to use `await` without `async`', code: 'function get() { await fetch(url); }', suffix: 'If you try to use the `await` keyword inside a normal function, JavaScript will throw a SyntaxError. You MUST put `async` in front of the function first.' }
    ],
    bestPractices: ['You can use `async` with arrow functions too! Syntax: `const fetchData = async () => { ... };`'],
    practiceExercise: {
      task: 'Write an arrow function called `greet` that is marked as `async` and returns the string "Hi". Then chain a `.then()` to it to log the result.',
      expectedOutput: 'Logs "Hi".',
      solution: 'const greet = async () => "Hi"; greet().then(console.log);'
    },
    quiz: [
      { question: 'What does the `async` keyword do when placed before a function?', options: ['It makes the function run instantly', 'It guarantees the function will always return a Promise', 'It deletes the function', 'It makes the function synchronous'], answer: 'It guarantees the function will always return a Promise' },
      { question: 'If an async function has the code `return "Done";`, what exactly is returned to the code that called it?', options: ['The string "Done"', 'A pending Promise', 'A Fulfilled Promise containing the value "Done"', 'An error'], answer: 'A Fulfilled Promise containing the value "Done"' },
      { question: 'What keyword are you allowed to use INSIDE a function only if it is marked as `async`?', options: ['return', 'yield', 'await', 'this'], answer: 'await' },
      { question: 'How do you create an async arrow function?', options: ['async () => {}', '() => async {}', '() async => {}', '=> async {}'], answer: 'async () => {}' },
      { question: 'Can an `async` function reject a Promise?', options: ['Yes, by throwing an error (`throw new Error(...)`)', 'No, they always succeed', 'Only if it returns false', 'Only in Node.js'], answer: 'Yes, by throwing an error (`throw new Error(...)`)' }
    ],
    interviewQuestions: [
      { q: 'Is there any situation where you can use `await` without an `async` function?', a: 'Yes, modern JavaScript introduced "Top-Level Await". In ES Modules (files with `type="module"`), you can use `await` at the very top level of the file outside of any function.' }
    ],
    summary: ['Always returns a Promise.', 'Unlocks the `await` keyword.', 'Can be used on arrow functions (`async () => {}`).'],
    references: commonReferences
  },
  'js_await': {
    isStructured: true,
    title: '196. await',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'The `await` keyword can only be used inside an `async` function. It pauses the execution of that specific function until a Promise settles (fulfills or rejects), and then extracts the resolved value from the Promise.',
    whyUseIt: 'It completely removes the need for `.then()` chains. It makes asynchronous code look exactly like clean, top-to-bottom synchronous code, making it drastically easier to read and write.',
    syntax: 'const data = await somePromise();',
    codeExample: '// ❌ The Promise/.then() way\nfunction fetchUserOldWay() {\n  fetch("https://jsonplaceholder.typicode.com/users/1")\n    .then(response => response.json())\n    .then(user => console.log(user.name));\n}\n\n// ✅ The modern async/await way\nasync function fetchUserNewWay() {\n  // Execution PAUSES on this line until the fetch is complete\n  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");\n  \n  // Execution PAUSES here until the JSON parsing is complete\n  const user = await response.json();\n  \n  console.log(user.name);\n}',
    expectedOutput: 'Both functions do the exact same thing, but the async/await version reads like a normal synchronous script without nested callbacks.',
    explanation: [
      { code: 'const response = await fetch(...)', desc: 'Instead of passing a callback to `.then(response => ...)`, `await` pauses the function, waits for the Promise to resolve, and literally dumps the successful result straight into the `response` variable on the left!' }
    ],
    realWorldExample: 'Almost all modern React, Vue, and Node.js code uses async/await to interact with databases and APIs because it is so much cleaner than `.then()` chaining.',
    commonMistakes: [
      { error: 'Forgetting to handle errors', code: 'const data = await fetch(badUrl);', suffix: 'If the Promise rejects, `await` throws an exception that will crash your app. With `.then()`, you used `.catch()`. With `async/await`, you MUST wrap your code in a standard `try...catch` block to handle errors safely.' },
      { error: 'Using await inside a forEach loop', code: 'users.forEach(async (u) => { await save(u); })', suffix: '`forEach` is not built to handle Promises. It will fire off all the `save()` calls simultaneously and not wait for them. If you want them to happen one after the other, use a standard `for...of` loop instead.' }
    ],
    bestPractices: ['Wrap your `await` calls in a `try/catch` block to handle network failures gracefully.'],
    practiceExercise: {
      task: 'Given a Promise function `getScore()`, write an `async function run()` that uses `await` to get the score, assigns it to a variable `score`, and logs it.',
      expectedOutput: 'Valid async/await syntax.',
      solution: 'async function run() { const score = await getScore(); console.log(score); }'
    },
    quiz: [
      { question: 'What does the `await` keyword do?', options: ['Makes the code run faster', 'Pauses the async function until the Promise resolves, then extracts its value', 'Cancels a Promise', 'Loops a function'], answer: 'Pauses the async function until the Promise resolves, then extracts its value' },
      { question: 'Where is the ONLY place you can normally use the `await` keyword?', options: ['Inside a `for` loop', 'Inside a `.then()` block', 'Inside a function declared with the `async` keyword', 'Anywhere in JavaScript'], answer: 'Inside a function declared with the `async` keyword' },
      { question: 'What traditional Promise method does `await` replace the need for?', options: ['.catch()', '.finally()', '.then()', 'Promise.all()'], answer: '.then()' },
      { question: 'How do you handle errors (like a network failure) when using `await`?', options: ['By chaining `.catch()` to the end of the async function', 'By using a standard synchronous `try...catch` block around the `await` statements', 'By returning false', 'It handles errors automatically'], answer: 'By using a standard synchronous `try...catch` block around the `await` statements' },
      { question: 'Why do developers prefer `async/await` over `.then()` chains?', options: ['It executes much faster in the browser', 'It makes asynchronous code look synchronous, top-to-bottom, making it easier to read and maintain', 'It works on older browsers', 'It encrypts data automatically'], answer: 'It makes asynchronous code look synchronous, top-to-bottom, making it easier to read and maintain' }
    ],
    interviewQuestions: [
      { q: 'What happens if you `await` a value that is NOT a Promise (e.g., `const x = await 5;`)?', a: 'JavaScript will automatically wrap the value in a resolved Promise (like `Promise.resolve(5)`), immediately resolve it, and proceed. It won\'t cause an error, but it is unnecessary.' }
    ],
    summary: ['Pauses execution until Promise settles.', 'Replaces `.then()` chains.', 'Must use `try...catch` for errors.'],
    references: commonReferences
  }
};
