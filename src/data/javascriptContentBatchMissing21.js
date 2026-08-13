const commonReferences = [
  { label: 'MDN Web Docs - Promise.all()', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all' },
  { label: 'MDN Web Docs - Promise.race()', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race' },
  { label: 'MDN Web Docs - The event loop', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop' }
];

export const javascriptContentBatchMissing21 = {
  'js_promise_all': {
    isStructured: true,
    title: '198. Promise.all()',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: '`Promise.all()` takes an array of multiple Promises and runs them concurrently (all at the same time). It returns a single new Promise that fulfills only when ALL of the input promises have fulfilled, or rejects immediately if ANY of the input promises reject.',
    whyUseIt: 'If you need to fetch a user\'s Profile, their Posts, and their Friends list from an API, doing them one by one (`await profile`, then `await posts`...) is extremely slow. `Promise.all()` allows you to fetch all three at the exact same time, drastically speeding up your application.',
    syntax: 'const resultsArray = await Promise.all([promise1, promise2]);',
    codeExample: 'async function fetchDashboardData() {\n  console.time("Dashboard Load Time");\n  \n  // Simulating 3 separate API calls\n  const p1 = new Promise(resolve => setTimeout(() => resolve("Profile"), 2000));\n  const p2 = new Promise(resolve => setTimeout(() => resolve("Posts"), 2000));\n  const p3 = new Promise(resolve => setTimeout(() => resolve("Friends"), 2000));\n  \n  // Wait for all 3 to finish AT THE SAME TIME.\n  // This takes ~2 seconds total, NOT 6 seconds!\n  const [profileData, postsData, friendsData] = await Promise.all([p1, p2, p3]);\n  \n  console.log(`Loaded: ${profileData}, ${postsData}, ${friendsData}`);\n  console.timeEnd("Dashboard Load Time");\n}',
    expectedOutput: 'Loaded: Profile, Posts, Friends\nDashboard Load Time: ~2000ms',
    explanation: [
      { code: '[p1, p2, p3]', desc: 'You must pass an array of Promises into `Promise.all()`.' },
      { code: 'const [profile, posts...] = await ...', desc: 'Because `Promise.all()` returns an Array containing the results in the exact same order as the input array, we usually use Array Destructuring to extract the data cleanly.' }
    ],
    realWorldExample: 'A photo gallery app. To display a grid of 10 thumbnails, you use `Promise.all()` to download all 10 images concurrently, rather than waiting for image 1 to finish before starting image 2.',
    commonMistakes: [
      { error: 'Ignoring the "Fail-Fast" behavior', code: '', suffix: 'If you pass 10 Promises into `Promise.all()`, and 9 succeed but 1 fails, the ENTIRE `Promise.all()` immediately rejects and throws an error, discarding the 9 successful results. (If you want to keep the successes, use `Promise.allSettled()` instead).' }
    ],
    bestPractices: ['Use `Promise.all()` whenever you have multiple asynchronous tasks that do NOT depend on each other. If Task B requires the result of Task A, you cannot use `Promise.all()`; you must run them sequentially.'],
    practiceExercise: {
      task: 'Given two promises `pA` and `pB`, write a line of code using `Promise.all()` to await them both, destructuring the results into variables `resA` and `resB`.',
      expectedOutput: 'Variables contain the resolved data.',
      solution: 'const [resA, resB] = await Promise.all([pA, pB]);'
    },
    quiz: [
      { question: 'What does `Promise.all()` do?', options: ['Runs a series of promises one by one', 'Runs an array of promises concurrently (at the same time) and waits for all of them to finish', 'Cancels all promises', 'Selects the fastest promise'], answer: 'Runs an array of promises concurrently (at the same time) and waits for all of them to finish' },
      { question: 'What data structure does `Promise.all()` return when successful?', options: ['A boolean', 'An object', 'An Array containing the results of all the promises in the same order', 'A string'], answer: 'An Array containing the results of all the promises in the same order' },
      { question: 'What happens if ONE out of five promises passed into `Promise.all()` rejects?', options: ['It returns the 4 successful ones and ignores the error', 'It retries the failed promise', 'The entire `Promise.all()` immediately rejects with that error', 'It pauses execution'], answer: 'The entire `Promise.all()` immediately rejects with that error' },
      { question: 'If you have 3 API calls that each take 2 seconds, how long will they take if run with `Promise.all()`?', options: ['6 seconds', '2 seconds', '0 seconds', '3 seconds'], answer: '2 seconds' },
      { question: 'When should you NOT use `Promise.all()`?', options: ['When you are fetching data', 'When you have more than 10 promises', 'When the second Promise requires data returned from the first Promise to work', 'In Node.js'], answer: 'When the second Promise requires data returned from the first Promise to work' }
    ],
    interviewQuestions: [
      { q: 'What is `Promise.allSettled()` and how does it differ from `Promise.all()`?', a: '`Promise.allSettled()` waits for all promises to finish regardless of success or failure. It never rejects. Instead, it returns an array of objects detailing which ones fulfilled and which ones rejected.' }
    ],
    summary: ['Runs multiple Promises concurrently.', 'Returns an array of results.', 'Fails completely if even ONE promise rejects.'],
    references: commonReferences
  },
  'js_promise_race': {
    isStructured: true,
    title: '199. Promise.race()',
    difficulty: 'Advanced',
    readingTime: '3 min',
    definition: '`Promise.race()` takes an array of Promises and returns a single Promise that settles as soon as the **very first** Promise in the array settles (whether it fulfills OR rejects).',
    whyUseIt: 'It is a literal race. You use it when you only care about the fastest result and want to ignore everything else. A classic use case is implementing a "timeout" mechanism for a fetch request that is taking too long.',
    syntax: 'const fastest = await Promise.race([promise1, promise2]);',
    codeExample: 'async function downloadRace() {\n  // Promise 1 takes 3 seconds\n  const p1 = new Promise(resolve => setTimeout(() => resolve("Server A: 3s"), 3000));\n  \n  // Promise 2 takes 1 second\n  const p2 = new Promise(resolve => setTimeout(() => resolve("Server B: 1s"), 1000));\n  \n  // Promise.race() returns whichever finishes first\n  const winner = await Promise.race([p1, p2]);\n  \n  console.log(`The winner is: ${winner}`);\n}\n\ndownloadRace();',
    expectedOutput: 'The winner is: Server B: 1s',
    explanation: [
      { code: 'Promise.race([p1, p2])', desc: 'Because `p2` settled in 1000ms, the race is over. The `.race()` Promise fulfills with "Server B: 1s". The slower `p1` is completely ignored.' }
    ],
    realWorldExample: 'Fetch Timeout: You race a `fetch("http://api.com")` against a `setTimeout` that rejects after 5 seconds. If the API doesn\'t respond in 5 seconds, the timeout "wins" the race, rejects, and allows you to show an error to the user instead of hanging forever.',
    commonMistakes: [
      { error: 'Assuming race only looks for successes', code: '', suffix: 'If the very first Promise to finish is a REJECTION, then `Promise.race()` rejects! If you want the first *successful* promise (ignoring fast failures), you should use `Promise.any()` instead.' }
    ],
    bestPractices: ['Use `Promise.race()` for timeouts. Use `Promise.any()` for checking multiple fallback servers (e.g., getting data from Server A, B, or C, taking whichever succeeds first).'],
    practiceExercise: {
      task: 'No code required: If `p1` rejects in 1 second, and `p2` fulfills in 2 seconds, what does `Promise.race([p1, p2])` do?',
      expectedOutput: 'It rejects.',
      solution: 'It rejects (because p1 settled first).'
    },
    quiz: [
      { question: 'What does `Promise.race()` do?', options: ['Returns an array of all results in the order they finished', 'Waits for all promises to finish', 'Returns the result of the VERY FIRST promise to settle, ignoring the rest', 'Cancels slow promises'], answer: 'Returns the result of the VERY FIRST promise to settle, ignoring the rest' },
      { question: 'If the fastest Promise in a `Promise.race()` array Rejects, what happens?', options: ['It ignores it and waits for a successful one', 'The `Promise.race()` rejects immediately with that error', 'It returns undefined', 'It throws a SyntaxError'], answer: 'The `Promise.race()` rejects immediately with that error' },
      { question: 'What is a common real-world use case for `Promise.race()`?', options: ['Fetching user profile and posts simultaneously', 'Waiting for multiple CSS animations to finish', 'Implementing a "timeout" mechanism to abort a network request that takes too long', 'Parsing JSON data'], answer: 'Implementing a "timeout" mechanism to abort a network request that takes too long' },
      { question: 'Which similar method should you use if you want the first SUCCESSFUL promise, ignoring any fast rejections?', options: ['Promise.all()', 'Promise.any()', 'Promise.first()', 'Promise.success()'], answer: 'Promise.any()' },
      { question: 'Does `Promise.race()` actually cancel the slower background network requests?', options: ['Yes, it stops the HTTP request entirely', 'No, the slower promises still run in the background, but JavaScript just ignores their results', 'Only in Chrome', 'Only if you use strict mode'], answer: 'No, the slower promises still run in the background, but JavaScript just ignores their results' }
    ],
    interviewQuestions: [
      { q: 'How would you write a timeout function using Promise.race()?', a: '`const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 5000));` Then: `await Promise.race([fetch(url), timeout]);`.' }
    ],
    summary: ['Returns the first Promise to settle.', 'Can be a fulfillment OR rejection.', 'Excellent for implementing network timeouts.'],
    references: commonReferences
  },
  'js_event_loop': {
    isStructured: true,
    title: '200. Event Loop',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'The Event Loop is the secret mechanism that allows JavaScript—which is strictly single-threaded—to perform non-blocking, asynchronous operations. It constantly monitors the "Call Stack" and the "Callback Queue".',
    whyUseIt: 'You don\'t write code for the Event Loop, but understanding it is mandatory for senior JavaScript developers. It explains *why* `setTimeout(fn, 0)` doesn\'t execute instantly, and how JavaScript handles millions of clicks and HTTP requests without freezing.',
    syntax: '// Conceptual Architecture, not code syntax',
    codeExample: 'console.log("1. Script starts");\n\nsetTimeout(() => {\n  console.log("3. setTimeout callback fires");\n}, 0);\n\nconsole.log("2. Script ends");\n\n// Output:\n// 1. Script starts\n// 2. Script ends\n// 3. setTimeout callback fires',
    expectedOutput: 'Even though the timeout is 0 milliseconds, it executes LAST.',
    explanation: [
      { code: 'The Call Stack', desc: 'Where synchronous code executes. JS puts `console.log("1")` here, runs it, pops it off. Then it sees `setTimeout`. It sends the timer to the browser\'s Web APIs in the background and moves on to `console.log("2")`.' },
      { code: 'The Queue', desc: 'When the Web API timer finishes (in 0ms), it puts the callback into the Callback Queue.' },
      { code: 'The Event Loop', desc: 'The Event Loop spins forever, checking: "Is the Call Stack empty?" It won\'t move anything from the Queue until the Stack is completely empty. That is why "3" logs last!' }
    ],
    realWorldExample: 'If you have a massive `while` loop that takes 5 seconds to run on the main thread, the Event Loop is blocked. Even if a user clicks a button 50 times during that 5 seconds, the click callbacks are stuck in the Queue waiting for the `while` loop to finish.',
    commonMistakes: [
      { error: 'Assuming a 0ms timeout means instant execution', code: 'setTimeout(fn, 0)', suffix: 'A 0ms timeout simply means "move this function out of the synchronous flow and put it at the back of the Callback Queue to run as soon as the main thread is idle."' }
    ],
    bestPractices: ['Avoid heavy, long-running mathematical calculations (synchronous code) on the main thread. If you block the Call Stack, the Event Loop cannot process user clicks or UI updates, and the browser will look frozen.'],
    practiceExercise: {
      task: 'Without coding, what is the single condition the Event Loop looks for before moving a callback from the Queue to the Stack?',
      expectedOutput: 'The Call Stack must be empty.',
      solution: 'The Call Stack must be empty.'
    },
    quiz: [
      { question: 'What is the primary job of the Event Loop?', options: ['To compile JavaScript into machine code', 'To constantly check if the Call Stack is empty, and if so, push the next callback from the Queue onto the Stack', 'To render CSS animations', 'To encrypt data'], answer: 'To constantly check if the Call Stack is empty, and if so, push the next callback from the Queue onto the Stack' },
      { question: 'Why does `setTimeout(fn, 0)` run after the rest of the synchronous code?', options: ['Because 0ms is actually 10ms in JS', 'Because it is pushed to the Web APIs, then to the Queue, and the Event Loop waits for the synchronous Call Stack to be empty before executing it', 'Because it has lower priority', 'It is a bug in the language'], answer: 'Because it is pushed to the Web APIs, then to the Queue, and the Event Loop waits for the synchronous Call Stack to be empty before executing it' },
      { question: 'Is JavaScript multi-threaded?', options: ['Yes', 'No, the main engine is single-threaded (one Call Stack)', 'Only on Macs', 'Only in strict mode'], answer: 'No, the main engine is single-threaded (one Call Stack)' },
      { question: 'What happens if you run an infinite `while(true)` loop in synchronous JavaScript?', options: ['The browser creates a new thread', 'The Event Loop is blocked forever, the Queue backs up, and the browser tab freezes completely', 'The Event Loop skips it', 'It throws a SyntaxError'], answer: 'The Event Loop is blocked forever, the Queue backs up, and the browser tab freezes completely' },
      { question: 'Where do asynchronous callbacks (like click handlers or timer functions) wait before they are executed?', options: ['The Call Stack', 'The Browser Cache', 'The Callback Queue', 'The Hard Drive'], answer: 'The Callback Queue' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between the Macrotask Queue and the Microtask Queue?', a: 'Promises (`.then()`) go into the Microtask Queue. `setTimeout` goes into the Macrotask Queue. The Event Loop ALWAYS empties the entire Microtask Queue before it touches anything in the Macrotask Queue. Therefore, Promises have higher priority than timeouts.' }
    ],
    summary: ['Coordinates the Stack and the Queue.', 'Allows single-threaded JS to be non-blocking.', 'Stack must be empty to process the Queue.'],
    references: commonReferences
  },
  'js_call_stack': {
    isStructured: true,
    title: '201. Call Stack',
    difficulty: 'Advanced',
    readingTime: '3 min',
    definition: 'The Call Stack is a data structure the JavaScript engine uses to keep track of its place in a script that calls multiple functions. It operates on a "Last In, First Out" (LIFO) principle.',
    whyUseIt: 'Understanding the Call Stack helps you understand synchronous code execution, recursion, and how to read the "Stack Traces" you see in the console when your app crashes.',
    syntax: '// Conceptual Architecture, not code syntax',
    codeExample: 'function multiply(a, b) {\n  return a * b;\n}\n\nfunction square(n) {\n  // 2. square calls multiply. multiply is pushed onto the top of the stack.\n  return multiply(n, n);\n}\n\nfunction printSquare(n) {\n  // 1. printSquare is called and pushed onto the stack.\n  const squared = square(n);\n  console.log(squared);\n}\n\n// START HERE:\nprintSquare(5);',
    expectedOutput: '25',
    explanation: [
      { code: 'LIFO (Last In, First Out)', desc: 'Think of the Call Stack like a stack of plates. You put `printSquare` on the table. You put `square` on top of it. You put `multiply` on top of that. The JS engine must finish (pop off) the top plate (`multiply`) before it can get back to the plates underneath.' }
    ],
    realWorldExample: 'When your code throws an error, the browser prints a "Stack Trace" (e.g., `Error at multiply, called by square, called by printSquare`). This is literally the browser printing out the current state of the Call Stack plates so you can trace the bug back to its origin.',
    commonMistakes: [
      { error: 'Stack Overflow', code: 'function inception() { inception(); }', suffix: 'If a function calls itself infinitely without a stopping condition (infinite recursion), the JS engine keeps stacking plates until it runs out of memory. The browser will crash and throw a "Maximum call stack size exceeded" error.' }
    ],
    bestPractices: ['When reading a Stack Trace in your console errors, always read from the TOP down. The very top line is the exact function where the error occurred.'],
    practiceExercise: {
      task: 'No coding required: If Function A calls Function B, which function is higher up (on top of) the Call Stack?',
      expectedOutput: 'Function B',
      solution: 'Function B is on top.'
    },
    quiz: [
      { question: 'What data structure principle does the Call Stack use?', options: ['FIFO (First In, First Out)', 'LIFO (Last In, First Out)', 'Random Access', 'Tree structure'], answer: 'LIFO (Last In, First Out)' },
      { question: 'If Function A calls Function B, and Function B calls Function C, which function finishes and is popped off the stack FIRST?', options: ['Function A', 'Function B', 'Function C', 'They all finish at the same time'], answer: 'Function C' },
      { question: 'What causes a "Maximum call stack size exceeded" error?', options: ['Using too many variables', 'Downloading a very large file', 'Infinite recursion (a function calling itself endlessly without stopping)', 'CSS parsing errors'], answer: 'Infinite recursion (a function calling itself endlessly without stopping)' },
      { question: 'What does a "Stack Trace" in the console show you?', options: ['The memory usage of your app', 'The exact sequence of function calls that led to an error, allowing you to trace it backwards', 'The list of variables in scope', 'The network requests'], answer: 'The exact sequence of function calls that led to an error, allowing you to trace it backwards' },
      { question: 'Is asynchronous code (like a `setTimeout` callback) executed directly on the Call Stack immediately?', options: ['Yes', 'No, it is sent to the Web APIs and eventually moves through the Queue before reaching the Stack', 'Only in strict mode', 'Only if it is fast'], answer: 'No, it is sent to the Web APIs and eventually moves through the Queue before reaching the Stack' }
    ],
    interviewQuestions: [
      { q: 'How many Call Stacks does standard browser JavaScript have?', a: 'Exactly one. JavaScript is inherently single-threaded. (Though modern tools like Web Workers allow you to spin up separate background threads with their own stacks).' }
    ],
    summary: ['Tracks synchronous function execution.', 'Operates Last-In, First-Out (LIFO).', 'Infinite recursion causes Stack Overflow.'],
    references: commonReferences
  },
  'js_callback_queue': {
    isStructured: true,
    title: '202. Callback Queue',
    difficulty: 'Advanced',
    readingTime: '3 min',
    definition: 'The Callback Queue (also called the Task Queue or Message Queue) is a data structure where asynchronous callbacks wait in line to be executed by the main thread.',
    whyUseIt: 'Without the Queue, async callbacks would just randomly inject themselves into the middle of running synchronous code, causing catastrophic bugs. The Queue organizes them so they execute safely and in order.',
    syntax: '// Conceptual Architecture, not code syntax',
    codeExample: 'console.log("Start");\n\n// 1. Sent to Web API. Finishes in 0ms. Goes to Queue.\nsetTimeout(() => console.log("Timeout 1"), 0);\n\n// 2. Sent to Web API. Finishes in 0ms. Goes to Queue BEHIND Timeout 1.\nsetTimeout(() => console.log("Timeout 2"), 0);\n\nconsole.log("End");\n// Event Loop sees Call Stack is empty. Grabs Timeout 1 from Queue.\n// Event Loop sees Call Stack is empty again. Grabs Timeout 2 from Queue.',
    expectedOutput: 'Start\nEnd\nTimeout 1\nTimeout 2',
    explanation: [
      { code: 'FIFO (First In, First Out)', desc: 'Unlike the Call Stack (LIFO), the Queue operates like a line at a grocery store. The first callback to enter the Queue is the first one to be pushed to the Call Stack.' },
      { code: 'Waiting Area', desc: 'Callbacks sit here patiently. They will NEVER execute until the main Call Stack is completely empty.' }
    ],
    realWorldExample: 'A user clicks a button 3 times rapidly while the page is frozen loading data. Those 3 "click" callbacks go into the Queue. Once the page unfreezes, the Event Loop rapidly processes all 3 clicks in the exact order they happened.',
    commonMistakes: [
      { error: 'Assuming strict timing', code: 'setTimeout(fn, 1000)', suffix: '`setTimeout` guarantees a MINIMUM delay of 1000ms. If the Call Stack is busy doing heavy synchronous math for 5 seconds, the callback will sit in the Queue for 5 seconds. It does not interrupt the stack.' }
    ],
    bestPractices: ['Remember that Promises actually go into a special VIP queue called the "Microtask Queue", which has higher priority than the standard Callback (Macrotask) Queue used by `setTimeout`.'],
    practiceExercise: {
      task: 'No coding required: What structural principle does the Callback Queue use (LIFO or FIFO)?',
      expectedOutput: 'FIFO',
      solution: 'FIFO (First In, First Out).'
    },
    quiz: [
      { question: 'What is the Callback Queue?', options: ['Where variables are stored in memory', 'A waiting area where asynchronous callbacks sit in line until the main thread is ready to execute them', 'The list of functions currently running', 'A CSS parser'], answer: 'A waiting area where asynchronous callbacks sit in line until the main thread is ready to execute them' },
      { question: 'What data structure principle does the Callback Queue use?', options: ['LIFO (Last In, First Out)', 'FIFO (First In, First Out)', 'Random Access', 'Alphabetical'], answer: 'FIFO (First In, First Out)' },
      { question: 'What checks the Callback Queue and moves items to the Call Stack?', options: ['The garbage collector', 'The Event Loop', 'The DOM engine', 'The network tab'], answer: 'The Event Loop' },
      { question: 'Will an item in the Callback Queue ever execute while the Call Stack is busy running synchronous code?', options: ['Yes, it interrupts the stack', 'No, it MUST wait until the Call Stack is completely empty', 'Only on fast computers', 'Only if it is a Promise'], answer: 'No, it MUST wait until the Call Stack is completely empty' },
      { question: 'If two callbacks enter the Queue at the exact same time, how is order determined?', options: ['By alphabetical order of function name', 'By whichever one entered the Queue first (FIFO)', 'By random selection', 'By the length of the code'], answer: 'By whichever one entered the Queue first (FIFO)' }
    ],
    interviewQuestions: [
      { q: 'What goes into the Microtask Queue vs the Macrotask (Callback) Queue?', a: 'Promise `.then()` and `.catch()` callbacks, and `MutationObserver` callbacks go into the Microtask Queue. `setTimeout`, `setInterval`, and DOM event listeners (clicks) go into the Macrotask Queue. Microtasks always run first.' }
    ],
    summary: ['Holds async callbacks waiting to execute.', 'Operates First-In, First-Out (FIFO).', 'Processed by the Event Loop.'],
    references: commonReferences
  }
};
