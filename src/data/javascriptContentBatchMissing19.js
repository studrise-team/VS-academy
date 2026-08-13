const commonReferences = [
  { label: 'MDN Web Docs - Asynchronous JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous' },
  { label: 'MDN Web Docs - Using Promises', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises' },
  { label: 'MDN Web Docs - setTimeout', url: 'https://developer.mozilla.org/en-US/docs/Web/API/setTimeout' }
];

export const javascriptContentBatchMissing19 = {
  'js_synchronous_vs_asynchronous_javascript': {
    isStructured: true,
    title: '185. Synchronous vs Asynchronous JavaScript',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'JavaScript is traditionally "Synchronous" and "Single-Threaded", meaning it executes one line of code at a time, strictly in order. "Asynchronous" JavaScript is a mechanism that allows the browser to handle long-running tasks (like fetching data over the network) in the background without freezing the entire webpage.',
    whyUseIt: 'If you try to download a 50MB file synchronously, your entire website (buttons, scrolling, animations) will freeze completely until the download finishes. Asynchronous code prevents this "blocking" behavior.',
    syntax: '// Concept, no specific syntax yet',
    codeExample: '// --- Synchronous Code (Blocking) ---\nconsole.log("1. Start");\n\n// Imagine this loop takes 3 seconds to finish (simulating heavy work)\nfor (let i = 0; i < 1000000000; i++) {}\n\nconsole.log("2. Heavy work done");\nconsole.log("3. End");\n// Output strictly in order: 1, 2, 3.\n\n\n// --- Asynchronous Code (Non-Blocking) ---\nconsole.log("A. Start");\n\n// setTimeout simulates an asynchronous task that takes 2 seconds\nsetTimeout(() => {\n  console.log("B. Data fetched from server");\n}, 2000);\n\nconsole.log("C. End");\n// Output: A, C, (wait 2 seconds)... B!',
    expectedOutput: 'The asynchronous example logs A, then C, and then B later, proving it didn\'t wait for B to finish before moving on to C.',
    explanation: [
      { code: 'Single-Threaded', desc: 'JavaScript only has one "cook" in the kitchen. If the cook is stuck chopping carrots for 5 hours (synchronous), nobody else gets their food.' },
      { code: 'Non-Blocking', desc: 'Asynchronous code is like putting a roast in the oven. The cook sets a timer and immediately starts working on the next dish. When the timer goes off, the cook handles the roast.' }
    ],
    realWorldExample: 'Clicking a "Load More Comments" button on YouTube. The page doesn\'t freeze while waiting for the server; instead, a little loading spinner spins (asynchronous) until the data arrives.',
    commonMistakes: [
      { error: 'Assuming code executes in written order', code: 'let data; fetch(url).then(res => data = res); console.log(data);', suffix: 'The `console.log` will print `undefined` because it executes synchronously *before* the asynchronous `fetch` has finished downloading the data.' }
    ],
    bestPractices: ['Whenever you are doing something that relies on the Network, File System, or Timers, you MUST use Asynchronous JavaScript (Callbacks, Promises, or Async/Await).'],
    practiceExercise: {
      task: 'Without writing code, predict the output order of: `console.log("First"); setTimeout(() => console.log("Second"), 1000); console.log("Third");`',
      expectedOutput: 'First, Third, Second.',
      solution: 'First\nThird\nSecond'
    },
    quiz: [
      { question: 'What does it mean that JavaScript is "Synchronous" by default?', options: ['It runs multiple threads at once', 'It executes code one line at a time, strictly in order, and blocks the next line until the current one finishes', 'It requires a server to run', 'It syncs data to the cloud automatically'], answer: 'It executes code one line at a time, strictly in order, and blocks the next line until the current one finishes' },
      { question: 'What happens to a webpage if a synchronous task takes 10 seconds to complete?', options: ['The browser crashes immediately', 'The webpage completely freezes and becomes unresponsive to clicks or scrolling for 10 seconds', 'The browser automatically moves it to the background', 'Nothing'], answer: 'The webpage completely freezes and becomes unresponsive to clicks or scrolling for 10 seconds' },
      { question: 'Which of the following is a classic example of an Asynchronous task?', options: ['Adding two numbers together', 'Iterating over a small array', 'Fetching data from an API over the internet', 'Changing the color of a button'], answer: 'Fetching data from an API over the internet' },
      { question: 'What does "Non-blocking" mean in the context of Async JavaScript?', options: ['The code cannot be stopped', 'The program doesn\'t wait for the async task to finish; it moves on to the next line of code immediately', 'It blocks popups', 'It uses CSS'], answer: 'The program doesn\'t wait for the async task to finish; it moves on to the next line of code immediately' },
      { question: 'In the code `console.log("1"); setTimeout(()=>console.log("2"), 0); console.log("3");`, what is the output?', options: ['1, 2, 3', '1, 3, 2', '2, 1, 3', '3, 2, 1'], answer: '1, 3, 2' }
    ],
    interviewQuestions: [
      { q: 'Can you briefly explain the Event Loop in JavaScript?', a: 'The Event Loop is what allows single-threaded JS to be asynchronous. When an async task (like `setTimeout`) finishes, its callback function is pushed into the "Task Queue". The Event Loop constantly checks if the main Call Stack is empty. When it is empty, it grabs the next callback from the Queue and executes it.' }
    ],
    summary: ['Synchronous = one at a time, blocks the page.', 'Asynchronous = background task, doesn\'t block.', 'Network requests must be async.'],
    references: commonReferences
  },
  'js_callbacks': {
    isStructured: true,
    title: '186. Callbacks',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A callback is simply a function that is passed as an argument into another function. The receiving function promises to "call back" (execute) your function at a later time, usually when an asynchronous task is finished.',
    whyUseIt: 'Before Promises and Async/Await existed, callbacks were the primary way to handle asynchronous code. They tell the computer what to do *after* the async task completes.',
    syntax: 'function doAsyncTask(callback) { /* work */ callback(result); }',
    codeExample: 'function downloadFile(fileName, callbackFunction) {\n  console.log(`Starting download of ${fileName}...`);\n  \n  // Simulating a 3-second download\n  setTimeout(() => {\n    console.log(`Download finished!`);\n    \n    // Now we "call back" the function passed to us, handing it the data\n    callbackFunction("FileData123");\n  }, 3000);\n}\n\n// We pass an anonymous function as the callback\ndownloadFile("image.png", (data) => {\n  console.log(`I received the data: ${data}`);\n  console.log("Now I can display it on the screen.");\n});',
    expectedOutput: 'Starting download...\n(3 seconds pass)\nDownload finished!\nI received the data: FileData123\nNow I can display it...',
    explanation: [
      { code: 'callbackFunction', desc: 'Just a parameter name. It holds the function we passed in on line 12.' },
      { code: 'callbackFunction("FileData123")', desc: 'Executing the callback and passing the simulated downloaded data into it.' }
    ],
    realWorldExample: 'You use callbacks constantly with Event Listeners! `btn.addEventListener("click", () => { ... })`. You are passing a callback function and telling the browser: "Call this back later, when the user clicks."!',
    commonMistakes: [
      { error: 'Executing the callback immediately', code: 'downloadFile("file.txt", displayData())', suffix: 'By adding `()`, you execute `displayData` immediately on line 1 and pass its *result* into `downloadFile`. You must pass the function reference WITHOUT parentheses: `downloadFile("file.txt", displayData)`.' }
    ],
    bestPractices: ['When writing a function that accepts a callback, it is an old Node.js convention to make the callback\'s first argument an `error` object, and the second the `data`. (e.g., `callback(err, data)`).'],
    practiceExercise: {
      task: 'Write a function `greetLater(name, callback)` that uses `setTimeout` to wait 1 second, then calls `callback(name)`.',
      expectedOutput: 'Calls the callback after 1 second.',
      solution: 'function greetLater(name, cb) { setTimeout(() => cb(name), 1000); }'
    },
    quiz: [
      { question: 'What is a callback function?', options: ['A function that calls itself', 'A function passed as an argument to another function, to be executed later', 'A function that returns a Promise', 'A built-in browser API'], answer: 'A function passed as an argument to another function, to be executed later' },
      { question: 'Why are callbacks useful in asynchronous programming?', options: ['They make the code run faster', 'They provide a way to specify what should happen AFTER an asynchronous task completes', 'They turn async code into sync code', 'They prevent errors'], answer: 'They provide a way to specify what should happen AFTER an asynchronous task completes' },
      { question: 'Are event listeners like `addEventListener` examples of using callbacks?', options: ['Yes', 'No, they are Promises', 'Only for clicks', 'No, they are DOM methods'], answer: 'Yes' },
      { question: 'What is the danger of `button.addEventListener("click", myFunc())`?', options: ['It deletes the button', 'It executes `myFunc` immediately when the page loads, rather than waiting for the click', 'It throws a SyntaxError', 'Nothing, it is correct'], answer: 'It executes `myFunc` immediately when the page loads, rather than waiting for the click' },
      { question: 'What is a common naming convention for a callback parameter if you want to abbreviate it?', options: ['cb', 'call', 'back', 'fn'], answer: 'cb' }
    ],
    interviewQuestions: [
      { q: 'Can callbacks be used synchronously?', a: 'Yes! While they are famous for async code, methods like `array.map(callback)` or `array.forEach(callback)` execute the callback synchronously for every item in the array.' }
    ],
    summary: ['Functions passed as arguments.', 'Executed later (after async task).', 'Don\'t add `()` when passing the reference.'],
    references: commonReferences
  },
  'js_settimeout': {
    isStructured: true,
    title: '187. setTimeout()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`setTimeout()` is a built-in browser function that executes a block of code or a function after a specified delay (measured in milliseconds).',
    whyUseIt: 'To create delays, schedule future events, simulate slow network requests for testing, or manage UI animations (like hiding a success notification after 3 seconds).',
    syntax: 'setTimeout(callbackFunction, delayInMilliseconds);',
    codeExample: 'console.log("1. Pizza ordered");\n\n// setTimeout takes a callback function, and a time in ms (3000ms = 3s)\nconst timerId = setTimeout(() => {\n  console.log("3. Pizza delivered!");\n}, 3000);\n\nconsole.log("2. Watching TV while waiting...");\n\n// If we change our mind and want to cancel the timer before it finishes:\n// clearTimeout(timerId);',
    expectedOutput: 'Logs "1. Pizza ordered", then "2. Watching TV...", then 3 seconds later, "3. Pizza delivered!".',
    explanation: [
      { code: 'setTimeout(..., 3000)', desc: 'Schedules the code inside the arrow function to run in roughly 3 seconds. It is asynchronous, so it does not block the rest of the code.' },
      { code: 'timerId', desc: '`setTimeout` returns a unique ID number. You can pass this ID to `clearTimeout(id)` to abort the timer before it triggers.' }
    ],
    realWorldExample: 'A "Toast Notification". When a user successfully saves their profile, a green "Saved!" banner drops down from the top of the screen. `setTimeout` is used to remove that banner exactly 4 seconds later.',
    commonMistakes: [
      { error: 'Passing a string instead of a function', code: 'setTimeout("console.log(\'hi\')", 1000)', suffix: 'Older browsers allowed this, using `eval()` under the hood. It is a massive security risk and heavily discouraged. Always pass a real function.' },
      { error: 'Forgetting ms conversion', code: 'setTimeout(myFunc, 5)', suffix: 'The developer wanted 5 seconds, but wrote 5 milliseconds. It should be 5000.' }
    ],
    bestPractices: ['Using `setTimeout` with a delay of `0` is a common trick to push a piece of synchronous code to the very end of the Execution Queue, allowing the browser to render the UI before the code runs.'],
    practiceExercise: {
      task: 'Write a `setTimeout` that logs "Surprise!" after exactly 2.5 seconds.',
      expectedOutput: 'Logs "Surprise!" after 2500ms.',
      solution: 'setTimeout(() => console.log("Surprise!"), 2500);'
    },
    quiz: [
      { question: 'What does `setTimeout()` do?', options: ['Loops code infinitely', 'Executes a function after a specific delay', 'Measures how long code takes to run', 'Pauses the entire browser'], answer: 'Executes a function after a specific delay' },
      { question: 'What unit of time does `setTimeout` use?', options: ['Seconds', 'Minutes', 'Milliseconds (1/1000th of a second)', 'Microseconds'], answer: 'Milliseconds (1/1000th of a second)' },
      { question: 'Is `setTimeout` synchronous or asynchronous?', options: ['Synchronous', 'Asynchronous', 'Both', 'Neither'], answer: 'Asynchronous' },
      { question: 'How do you cancel a `setTimeout` before it executes?', options: ['stopTimeout()', 'cancelTimer()', 'clearTimeout(id)', 'timeout.stop()'], answer: 'clearTimeout(id)' },
      { question: 'If you set a timeout for 1000ms, is it guaranteed to run in exactly 1.000 seconds?', options: ['Yes, perfectly guaranteed', 'No, it will run *at least* 1000ms later, but might be slightly delayed if the main thread is busy with heavy tasks', 'No, it usually runs faster', 'Only in Chrome'], answer: 'No, it will run *at least* 1000ms later, but might be slightly delayed if the main thread is busy with heavy tasks' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `setTimeout` and `setInterval`?', a: '`setTimeout` runs the code exactly ONCE after the delay. `setInterval` runs the code REPEATEDLY, pausing for the delay amount *between* every single execution, until you call `clearInterval`.' }
    ],
    summary: ['Executes code after a delay.', 'Time is in milliseconds.', 'Use `clearTimeout()` to cancel.'],
    references: commonReferences
  },
  'js_callback_hell': {
    isStructured: true,
    title: '189. Callback Hell',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Callback Hell (also known as the "Pyramid of Doom") is a situation where multiple asynchronous operations depend on one another, resulting in deeply nested callback functions that become impossible to read and maintain.',
    whyUseIt: 'You *don\'t* want to use it. Learning about Callback Hell is important so you understand *why* modern JavaScript created Promises and Async/Await to fix this exact problem.',
    syntax: '// Excessive nesting of functions inside functions',
    codeExample: '// Simulating a database flow:\n// 1. Find user -> 2. Find user\'s posts -> 3. Find comments on first post\n\ngetUser(1, (user) => {\n  console.log("Got user", user);\n  \n  getPosts(user.id, (posts) => {\n    console.log("Got posts", posts);\n    \n    getComments(posts[0].id, (comments) => {\n      console.log("Got comments", comments);\n      \n      // It keeps going deeper and deeper to the right...\n      // Handling errors here is an absolute nightmare.\n    });\n  });\n});',
    expectedOutput: 'The code works, but forms a distinct triangle/pyramid shape as it indents further right.',
    explanation: [
      { code: 'Nesting', desc: 'Because `getPosts` requires data from `getUser`, it MUST be placed inside `getUser`\'s callback. The same applies to `getComments`.' }
    ],
    realWorldExample: 'An old Node.js script that reads a file, encrypts the data, writes it to a new file, uploads it to AWS, and sends an email. Handled with pure callbacks, this would be 5 levels deep.',
    commonMistakes: [
      { error: 'Trying to return data from a callback', code: 'const user = getUser(1, (u) => { return u; })', suffix: 'You CANNOT `return` a value out of a callback to the outer synchronous code. By the time the callback fires, the outer code has already finished executing. You *must* process the data inside the callback (or use Promises).' }
    ],
    bestPractices: ['If you are stuck maintaining old codebase that uses callbacks, you can alleviate Callback Hell slightly by defining your functions independently outside the chain and passing them by name, rather than using anonymous arrow functions.'],
    practiceExercise: {
      task: 'No coding required: What modern JS feature was introduced specifically to flatten the "Pyramid of Doom" caused by callbacks?',
      expectedOutput: 'Promises (and Async/Await).',
      solution: 'Promises (and Async/Await).'
    },
    quiz: [
      { question: 'What is Callback Hell?', options: ['When a callback fails to execute', 'When deep nesting of asynchronous callbacks makes code unreadable and hard to maintain', 'When you use too many variables', 'A server error'], answer: 'When deep nesting of asynchronous callbacks makes code unreadable and hard to maintain' },
      { question: 'What visual shape does Callback Hell usually form in the code editor?', options: ['A straight vertical line', 'A circle', 'A pyramid or triangle (due to constant indentation to the right)', 'A zig-zag'], answer: 'A pyramid or triangle (due to constant indentation to the right)' },
      { question: 'Why is error handling difficult in Callback Hell?', options: ['Errors don\'t exist in async code', 'You have to write an `if (error)` check inside EVERY single nested callback level', 'The browser blocks it', 'You can only check errors once'], answer: 'You have to write an `if (error)` check inside EVERY single nested callback level' },
      { question: 'What modern JavaScript feature was created to solve Callback Hell?', options: ['JSON', 'Promises (and Async/Await)', 'Classes', 'Modules'], answer: 'Promises (and Async/Await)' },
      { question: 'Can you `return` data out of a nested async callback into an outer synchronous variable?', options: ['Yes', 'No, the outer code finishes running before the callback even triggers', 'Only in strict mode', 'Only if you use `var`'], answer: 'No, the outer code finishes running before the callback even triggers' }
    ],
    interviewQuestions: [
      { q: 'Is there any performance penalty to Callback Hell?', a: 'Not intrinsically. The JavaScript engine executes the code just fine. Callback Hell is a *developer experience* (DX) and code maintainability problem, not a machine performance problem.' }
    ],
    summary: ['Deeply nested asynchronous callbacks.', 'Hard to read, hard to handle errors.', 'Solved by Promises and Async/Await.'],
    references: commonReferences
  },
  'js_promises': {
    isStructured: true,
    title: '190. Promises',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It acts like a placeholder for data that you don\'t have yet, but *promise* to have in the future.',
    whyUseIt: 'Promises completely eliminate Callback Hell. They flatten asynchronous code, make error handling vastly easier, and are the foundation of modern APIs like `fetch()`.',
    syntax: 'myPromise.then(result => { ... }).catch(error => { ... });',
    codeExample: '// Imagine fetchUser() returns a Promise\nfetchUser(1)\n  .then((user) => {\n    console.log("Got user", user);\n    // We RETURN the next Promise to chain them flatly!\n    return fetchPosts(user.id);\n  })\n  .then((posts) => {\n    console.log("Got posts", posts);\n    return fetchComments(posts[0].id);\n  })\n  .then((comments) => {\n    console.log("Got comments", comments);\n  })\n  .catch((error) => {\n    // This ONE catch block handles errors for ALL the requests above!\n    console.error("Oh no, something failed:", error);\n  });',
    expectedOutput: 'Logs user, then posts, then comments. Much cleaner than Callback Hell.',
    explanation: [
      { code: '.then()', desc: 'A method on the Promise object. The code inside `.then()` will execute only when the Promise successfully "Resolves" (completes).' },
      { code: '.catch()', desc: 'A method that executes if the Promise "Rejects" (fails, e.g., network error). A single `.catch()` at the end can handle errors from any `.then()` in the chain.' },
      { code: 'return fetchPosts()', desc: 'Returning a Promise inside a `.then()` allows you to chain another `.then()` flatly on the outside, preventing the pyramid shape.' }
    ],
    realWorldExample: 'The modern `fetch()` API for making HTTP requests returns a Promise. `fetch("https://api.catfacts.com").then(res => res.json()).then(data => console.log(data));`',
    commonMistakes: [
      { error: 'Creating "Promise Hell"', code: 'fetch().then(res => { getMore().then(...) })', suffix: 'If you nest a `.then()` inside another `.then()`, you have completely defeated the purpose of Promises. Always `return` the next Promise and chain the `.then()` on the outside.' }
    ],
    bestPractices: ['A Promise has 3 states: Pending (waiting), Fulfilled (success, triggers `.then()`), and Rejected (failed, triggers `.catch()`).'],
    practiceExercise: {
      task: 'Given a Promise called `getWeather()`, chain a `.then()` that logs the `data`, and a `.catch()` that logs the `err`.',
      expectedOutput: 'Handles both success and failure.',
      solution: 'getWeather().then(data => console.log(data)).catch(err => console.log(err));'
    },
    quiz: [
      { question: 'What is a Promise in JavaScript?', options: ['A function that cannot fail', 'An object representing the eventual completion or failure of an async operation', 'A loop that runs forever', 'A way to encrypt data'], answer: 'An object representing the eventual completion or failure of an async operation' },
      { question: 'What are the three possible states of a Promise?', options: ['Start, Middle, End', 'Pending, Fulfilled, Rejected', 'Waiting, Running, Stopped', 'True, False, Null'], answer: 'Pending, Fulfilled, Rejected' },
      { question: 'Which method runs when a Promise successfully fulfills?', options: ['.catch()', '.finally()', '.then()', '.success()'], answer: '.then()' },
      { question: 'Which method is used to handle errors/rejections in a Promise chain?', options: ['.error()', '.fail()', '.catch()', '.stop()'], answer: '.catch()' },
      { question: 'How do you prevent nested `.then()` blocks (Promise Hell)?', options: ['By using callbacks instead', 'By `return`ing the next Promise inside the `.then()`, allowing you to chain the next `.then()` flatly on the outside', 'By wrapping it in an `if` statement', 'It is impossible'], answer: 'By `return`ing the next Promise inside the `.then()`, allowing you to chain the next `.then()` flatly on the outside' }
    ],
    interviewQuestions: [
      { q: 'What does the `.finally()` method do on a Promise?', a: '`.finally()` executes after the Promise settles, *regardless* of whether it was Fulfilled or Rejected. It is perfect for cleanup tasks, like hiding a loading spinner on the UI whether the network request succeeded or failed.' }
    ],
    summary: ['Solves Callback Hell.', 'Use `.then()` for success.', 'Use `.catch()` for errors.'],
    references: commonReferences
  }
};
