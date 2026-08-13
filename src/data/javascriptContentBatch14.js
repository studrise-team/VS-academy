const commonReferences = [
  { label: 'MDN Web Docs - Asynchronous JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous' },
  { label: 'W3Schools JS Async', url: 'https://www.w3schools.com/js/js_async.asp' }
];

export const javascriptContentBatch14 = {
  'js_sync_vs_async': {
    isStructured: true,
    title: '185-188. Sync vs Async & Timers',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'Synchronous means code runs in sequence from top to bottom, waiting for each line to finish before moving to the next. Asynchronous means code can start now and finish later, allowing the rest of the code to keep running without being blocked. `setTimeout` and `setInterval` are basic ways to make code run asynchronously in the future.',
    whyUseIt: 'If you have a function that takes 5 seconds to download an image, and your code is Synchronous, the entire webpage will freeze for 5 seconds. Asynchronous code allows the webpage to stay responsive while the image downloads in the background.',
    syntax: 'setTimeout(callbackFunction, delayInMilliseconds);\nsetInterval(callbackFunction, delayInMilliseconds);',
    codeExample: 'console.log("1. Start");\n\n// Asynchronous: Wait 2 seconds (2000ms), then run\nsetTimeout(() => {\n  console.log("2. Timeout Finished");\n}, 2000);\n\nconsole.log("3. End");\n\n// Notice the output order! 3 prints before 2.',
    expectedOutput: '"1. Start"\n"3. End"\n(Wait 2 seconds...)\n"2. Timeout Finished"',
    explanation: [
      { code: 'console.log("1. Start")', desc: 'Runs immediately.' },
      { code: 'setTimeout(..., 2000)', desc: 'Tells the browser: "Hey, run this arrow function in 2 seconds." The browser handles the timer in the background, and JavaScript immediately moves to the next line of code.' },
      { code: 'console.log("3. End")', desc: 'Runs immediately after the setTimeout is registered, without waiting 2 seconds.' }
    ],
    realWorldExample: 'A "Session Expiring" warning. When a user logs in, you use `setTimeout` to show a popup warning exactly 14 minutes later, without freezing the app in the meantime.',
    commonMistakes: [
      { error: 'Adding parentheses to the callback', code: 'setTimeout(myFunction(), 1000);', suffix: 'This runs `myFunction` IMMEDIATELY. You must pass the function reference: `setTimeout(myFunction, 1000)` or wrap it in an arrow function `setTimeout(() => myFunction(), 1000)`.' }
    ],
    bestPractices: ['Always store the ID returned by `setInterval` (e.g., `let id = setInterval(...)`) so you can stop it later using `clearInterval(id)`. Otherwise, it will run forever and cause memory leaks.'],
    practiceExercise: {
      task: 'Write a `setTimeout` that logs "Hello from the future!" after 3 seconds (3000ms).',
      expectedOutput: '(Wait 3 seconds...)\n"Hello from the future!"',
      solution: 'setTimeout(() => { console.log("Hello from the future!"); }, 3000);'
    },
    quiz: [
      { question: 'What does Asynchronous mean in JavaScript?', options: ['Code that runs faster', 'Code that runs in sequence, blocking the next line', 'Code that starts now and finishes later without blocking the main thread', 'Code that only runs on a server'], answer: 'Code that starts now and finishes later without blocking the main thread' },
      { question: 'What is the output order of: log(1); setTimeout(()=>log(2), 0); log(3);?', options: ['1, 2, 3', '1, 3, 2', '2, 1, 3', '3, 2, 1'], answer: '1, 3, 2' },
      { question: 'What does `setInterval` do?', options: ['Runs a function once after a delay', 'Runs a function repeatedly, waiting a specific delay between each run', 'Sets the clock on the computer', 'Pauses the code'], answer: 'Runs a function repeatedly, waiting a specific delay between each run' },
      { question: 'How do you stop a `setInterval` from running forever?', options: ['stopInterval()', 'clearTimeout()', 'clearInterval()', 'pause()'], answer: 'clearInterval()' },
      { question: 'What is the unit of time used in `setTimeout`?', options: ['Seconds', 'Microseconds', 'Milliseconds (1000ms = 1s)', 'Minutes'], answer: 'Milliseconds (1000ms = 1s)' }
    ],
    interviewQuestions: [
      { q: 'Why does `setTimeout(fn, 0)` not run immediately?', a: 'Because `setTimeout` is a Web API. Even with 0ms delay, the callback is sent to the Macrotask Queue. It must wait for the current synchronous Call Stack to empty entirely before the Event Loop pushes it back to the stack to run.' }
    ],
    summary: ['Sync code is blocking; Async code is non-blocking.', '`setTimeout` runs once after a delay.', '`setInterval` runs repeatedly.'],
    references: commonReferences
  },

  'js_promises': {
    isStructured: true,
    title: '190-194. Promises',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It is a "promise" that you will eventually get a value. It has 3 states: Pending, Fulfilled (Resolved), or Rejected.',
    whyUseIt: 'Before Promises, developers used "Callbacks", leading to "Callback Hell" (deeply nested, unreadable code). Promises flatten asynchronous code and make handling success (`.then()`) and errors (`.catch()`) much cleaner.',
    syntax: 'const myPromise = new Promise((resolve, reject) => { ... });\nmyPromise.then(success => { ... }).catch(error => { ... });',
    codeExample: 'const checkWeather = new Promise((resolve, reject) => {\n  let isRaining = false;\n  \n  setTimeout(() => {\n    if (isRaining) {\n      reject("It is raining, event cancelled.");\n    } else {\n      resolve("Sunny skies, event is on!");\n    }\n  }, 1000);\n});\n\n// Consuming the promise\ncheckWeather\n  .then((message) => console.log("Success: " + message))\n  .catch((error) => console.log("Error: " + error))\n  .finally(() => console.log("Weather check complete."));',
    expectedOutput: '(Wait 1 second...)\n"Success: Sunny skies, event is on!"\n"Weather check complete."',
    explanation: [
      { code: 'new Promise((resolve, reject) => ...)', desc: 'Creates the promise. `resolve` is called if successful. `reject` is called if it fails.' },
      { code: '.then()', desc: 'This block executes ONLY if the promise was `resolve`d.' },
      { code: '.catch()', desc: 'This block executes ONLY if the promise was `reject`ed.' },
      { code: '.finally()', desc: 'This block executes NO MATTER WHAT happens (success or failure). Great for hiding loading spinners.' }
    ],
    realWorldExample: 'Fetching data from a database. The database request returns a Promise. If it finds the user, it `resolve`s with the data. If the server crashes, it `reject`s with an error message.',
    commonMistakes: [
      { error: 'Forgetting to return a Promise inside a .then() chain', code: '.then(data => { fetchMoreData(data); }).then(...)', suffix: 'If you want to chain multiple `.then()` blocks that run asynchronous tasks sequentially, the first `.then()` MUST `return` a new Promise.' }
    ],
    bestPractices: ['Always attach a `.catch()` block to the end of your Promise chains to handle unexpected errors and prevent the app from crashing silently.'],
    practiceExercise: {
      task: 'Create a Promise that automatically `resolve`s with the string "Done" after 2 seconds. Use `.then()` to log the result.',
      expectedOutput: '(Wait 2 seconds...)\n"Done"',
      solution: 'let p = new Promise((resolve) => setTimeout(() => resolve("Done"), 2000)); p.then(msg => console.log(msg));'
    },
    quiz: [
      { question: 'What are the three states of a Promise?', options: ['Start, Middle, End', 'Pending, Fulfilled, Rejected', 'Waiting, Success, Failure', 'Null, Object, String'], answer: 'Pending, Fulfilled, Rejected' },
      { question: 'Which block runs when a Promise is successfully resolved?', options: ['.catch()', '.finally()', '.then()', '.success()'], answer: '.then()' },
      { question: 'Which block is used to handle errors if a Promise is rejected?', options: ['.error()', '.catch()', '.fail()', '.then()'], answer: '.catch()' },
      { question: 'What does the `.finally()` block do?', options: ['It only runs if the promise is successful', 'It only runs if the promise fails', 'It runs regardless of whether the promise was resolved or rejected', 'It stops the promise from executing'], answer: 'It runs regardless of whether the promise was resolved or rejected' },
      { question: 'Why were Promises introduced to JavaScript?', options: ['To make code run faster', 'To solve the problem of Callback Hell and make async code cleaner', 'To replace loops', 'To add multi-threading'], answer: 'To solve the problem of Callback Hell and make async code cleaner' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `Promise.all()` and `Promise.race()`?', a: '`Promise.all(arrayOfPromises)` waits for ALL promises in the array to resolve and returns an array of all results (or rejects immediately if ANY single promise fails). `Promise.race()` returns as soon as the FIRST promise finishes (whether it resolves or rejects), ignoring the rest.' }
    ],
    summary: ['Promises represent future values.', '`resolve` triggers `.then()`.', '`reject` triggers `.catch()`.', 'Use `.finally()` for cleanup.'],
    references: commonReferences
  },

  'js_async_await': {
    isStructured: true,
    title: '195-197. async / await',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: '`async` and `await` are modern syntax (ES8) built on top of Promises. They allow you to write asynchronous, Promise-based code in a way that looks and behaves like synchronous, blocking code. This makes it much easier to read.',
    whyUseIt: 'While `.then()` and `.catch()` are better than callbacks, a long chain of `.then()` can still get messy. `async/await` completely flattens the code, letting you read it top-to-bottom like a normal script.',
    syntax: 'async function myFunc() {\n  try {\n    const result = await promise;\n  } catch (error) {\n    // handle error\n  }\n}',
    codeExample: '// A dummy function that returns a Promise\nfunction getUser() {\n  return new Promise(resolve => setTimeout(() => resolve("Alice"), 1000));\n}\n\n// Using async / await\nasync function displayUser() {\n  try {\n    console.log("Loading...");\n    // Code STOPS here and waits for getUser() to finish\n    const name = await getUser(); \n    console.log("User is: " + name);\n  } catch (error) {\n    console.log("Failed to get user", error);\n  }\n}\n\ndisplayUser();',
    expectedOutput: '"Loading..."\n(Wait 1 second...)\n"User is: Alice"',
    explanation: [
      { code: 'async function', desc: 'The `async` keyword tells JavaScript this function will use `await`. Async functions automatically return a Promise.' },
      { code: 'await getUser()', desc: 'The `await` keyword pauses the execution of THIS specific function until the Promise resolves. The rest of your app keeps running in the background.' },
      { code: 'try { ... } catch (error) { ... }', desc: 'Because we aren\'t using `.catch()`, we must use standard `try/catch` blocks to handle errors if the `await`ed promise rejects.' }
    ],
    realWorldExample: 'Fetching data: `const response = await fetch("api/users"); const data = await response.json();`. It reads exactly like plain English.',
    commonMistakes: [
      { error: 'Using await outside an async function', code: 'const data = await fetch(url);', suffix: 'In older JS environments, `await` MUST be inside an `async function`. (Note: Top-level await is now supported in modern ES modules, but putting it in a function is still standard practice).' }
    ],
    bestPractices: ['Always wrap `await` calls inside a `try...catch` block. If a promise rejects and you aren\'t catching it, your function will silently fail and crash.'],
    practiceExercise: {
      task: 'Create an `async function getData()`. Inside, `await` a Promise that resolves with the number `100`. Log the number.',
      expectedOutput: '"100"',
      solution: 'async function getData() { let num = await Promise.resolve(100); console.log(num); } getData();'
    },
    quiz: [
      { question: 'What does the `async` keyword do to a function?', options: ['Makes it run in parallel', 'Automatically makes the function return a Promise', 'Makes it run instantly', 'Prevents it from accepting arguments'], answer: 'Automatically makes the function return a Promise' },
      { question: 'What does the `await` keyword do?', options: ['Pauses the whole browser', 'Waits for the user to click', 'Pauses the execution of the async function until the Promise resolves', 'Throws an error'], answer: 'Pauses the execution of the async function until the Promise resolves' },
      { question: 'Can you use `await` on a normal string (e.g., `await "Hello"`)?', options: ['Yes, it will just wrap it in a resolved promise instantly', 'No, it throws a syntax error', 'Yes, it waits 1 second', 'No, it crashes the browser'], answer: 'Yes, it will just wrap it in a resolved promise instantly' },
      { question: 'How do you handle errors when using async/await?', options: ['.catch()', 'if(error)', 'try...catch blocks', 'error() function'], answer: 'try...catch blocks' },
      { question: 'What is the main benefit of async/await?', options: ['It runs 10x faster than Promises', 'It uses less memory', 'It makes asynchronous code look synchronous and easier to read', 'It is required by React'], answer: 'It makes asynchronous code look synchronous and easier to read' }
    ],
    interviewQuestions: [
      { q: 'If you have two independent API calls, should you await them sequentially or parallelly?', a: 'Parallelly! If you do `await fetch(a); await fetch(b);`, you wait for `a`, then wait for `b`. Instead, you should use `const [resA, resB] = await Promise.all([fetch(a), fetch(b)]);` so they download at the same time.' }
    ],
    summary: ['`async` functions return Promises.', '`await` pauses the function until the Promise resolves.', 'Use `try...catch` for error handling.'],
    references: commonReferences
  }
};
