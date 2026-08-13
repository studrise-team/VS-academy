const commonReferences = [
  { label: 'MDN Web Docs - JavaScript modules', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules' },
  { label: 'React Docs - Thinking in React', url: 'https://react.dev/learn/thinking-in-react' }
];

export const javascriptContentBatchMissing34 = {
  'js_modules_1': {
    isStructured: true,
    title: '275. Modules',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'JavaScript Modules (ES6 Modules) allow you to break your code into separate files. You can `export` variables, functions, or classes from one file and `import` them into another.',
    whyUseIt: 'Without modules, you would have to write all your JavaScript in one massive 10,000-line file, or rely on a chaotic global scope with dozens of `<script>` tags. Modules keep code organized, reusable, and maintainable. React is built entirely around this concept.',
    syntax: '// file1.js\nexport const myVar = 1;\n\n// file2.js\nimport { myVar } from "./file1.js";',
    codeExample: '// --- mathUtils.js ---\n// Named Exports: You can export multiple things from one file\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\n\n// Default Export: You can have exactly ONE default export per file\nconst PI = 3.14159;\nexport default PI;\n\n\n// --- app.js ---\n// Importing Default (You can name it whatever you want!)\nimport MyPiValue from "./mathUtils.js";\n\n// Importing Named (Must use curly braces and exact names)\nimport { add, subtract } from "./mathUtils.js";\n\nconsole.log(MyPiValue); // 3.14159\nconsole.log(add(5, 5)); // 10',
    expectedOutput: '3.14159\n10',
    explanation: [
      { code: 'export default', desc: 'Used when a file has one primary purpose (like a single React Component). When importing it, you do not use `{}`.' },
      { code: 'export const', desc: 'Named exports. A file can have dozens of these. When importing, you MUST use `{}` and the exact variable name.' }
    ],
    realWorldExample: 'In React, every UI component is its own file. You create a `Button.js` file, write `export default Button`, and then in `App.js` you write `import Button from "./Button.js"`.',
    commonMistakes: [
      { error: 'Forgetting the .js extension in Vanilla JS', code: 'import { add } from "./mathUtils"', suffix: 'In pure Vanilla JavaScript in the browser, you MUST include the `.js` extension. Tools like React (Webpack/Vite) hide this requirement, causing beginners to fail when they try it without a framework.' }
    ],
    bestPractices: ['Keep one logical unit per file. Don\'t put your User logic and your Product logic in the same file. Create `user.js` and `product.js`.'],
    practiceExercise: {
      task: 'Without coding: If `utils.js` has `export const API_KEY = "123";`, how do you import it into `main.js`?',
      expectedOutput: 'import { API_KEY } from "./utils.js";',
      solution: 'import { API_KEY } from "./utils.js"; (Curly braces are required because it is a named export, not a default export).'
    },
    quiz: [
      { question: 'What is the primary benefit of ES6 Modules?', options: ['They make the code run faster', 'They allow you to split your code into multiple organized files instead of one giant file', 'They encrypt the code', 'They allow JavaScript to write CSS'], answer: 'They allow you to split your code into multiple organized files instead of one giant file' },
      { question: 'How many `export default` statements can you have in a single file?', options: ['Zero', 'Exactly one', 'As many as you want', 'Two'], answer: 'Exactly one' },
      { question: 'When importing a Named Export (e.g., `export const add = ...`), what syntax MUST you use?', options: ['Curly braces: `import { add } from "./file.js"`', 'Square brackets: `import [add] from "./file.js"`', 'No braces: `import add from "./file.js"`', 'Asterisk: `import * from "./file.js"`'], answer: 'Curly braces: `import { add } from "./file.js"`' },
      { question: 'When importing a Default Export, what is true about the imported name?', options: ['It must exactly match the original variable name', 'You can name it whatever you want (e.g., `import MyCustomName from ...`)', 'It must be capitalized', 'It must be wrapped in `{}`'], answer: 'You can name it whatever you want (e.g., `import MyCustomName from ...`)' },
      { question: 'What is a common mistake when using ES6 modules natively in the browser (without React/Webpack)?', options: ['Forgetting to capitalize `Import`', 'Forgetting the `.js` file extension in the import path', 'Using semicolons', 'Importing too many things'], answer: 'Forgetting the `.js` file extension in the import path' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `require()` and `import`?', a: '`require()` is the older CommonJS module system used traditionally by Node.js. `import` is the modern ES6 standard used natively by browsers and modern JavaScript frameworks (like React and modern Node).' }
    ],
    summary: ['Organize code into files.', 'Use `export default` for main things.', 'Use `export const` (named) for utilities.'],
    references: commonReferences
  },
  'js_promises_1': {
    isStructured: true,
    title: '276. Promises',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It acts as a placeholder for a value that you don\'t have yet (like data from a network request).',
    whyUseIt: 'Before Promises, dealing with asynchronous code (like fetching data) required "Callbacks", which led to deeply nested, unreadable code known as "Callback Hell". Promises flatten this out and make error handling much easier.',
    syntax: 'const myPromise = new Promise((resolve, reject) => { ... });\nmyPromise.then(result => ...).catch(error => ...);',
    codeExample: '// 1. CREATING A PROMISE (Simulating a network request)\nconst checkWeather = new Promise((resolve, reject) => {\n  console.log("Checking weather...");\n  \n  setTimeout(() => {\n    const success = true;\n    if (success) {\n      resolve("Sunny"); // Promise Fulfilled!\n    } else {\n      reject("Network Error"); // Promise Rejected!\n    }\n  }, 2000);\n});\n\n// 2. CONSUMING THE PROMISE\n// We cannot just do `console.log(checkWeather)` because it takes 2 seconds.\n// We must use .then() to wait for the resolve, and .catch() for the reject.\n\ncheckWeather\n  .then((data) => {\n    console.log(`Weather update: It is ${data}`);\n  })\n  .catch((error) => {\n    console.error(`Failed to get weather: ${error}`);\n  })\n  .finally(() => {\n    console.log("Operation complete.");\n  });',
    expectedOutput: 'Checking weather...\n(2 seconds later)\nWeather update: It is Sunny\nOperation complete.',
    explanation: [
      { code: 'resolve, reject', desc: 'These are functions passed into your Promise. You call `resolve(data)` when the operation succeeds, and `reject(error)` if it fails.' },
      { code: '.then() / .catch()', desc: '`.then()` receives whatever data you passed into `resolve()`. `.catch()` receives whatever error you passed into `reject()`.' }
    ],
    realWorldExample: 'Ordering food at a restaurant. You pay and receive a buzzer (the Promise). The buzzer is currently "Pending". When your food is ready, the buzzer flashes (Resolved -> .then). If they run out of food, the cashier comes to tell you (Rejected -> .catch).',
    commonMistakes: [
      { error: 'Thinking Promises stop execution', code: '', suffix: 'If you run `console.log("Done")` immediately after a `.then()` block, "Done" will print BEFORE the promise finishes! The rest of your synchronous code keeps running while the Promise waits in the background.' }
    ],
    bestPractices: ['Always, always, always include a `.catch()` at the end of a promise chain. Unhandled promise rejections can crash your application silently.'],
    practiceExercise: {
      task: 'Without coding: What are the three possible states of a Promise?',
      expectedOutput: 'Pending, Fulfilled, Rejected.',
      solution: 'Pending (waiting), Fulfilled (resolved successfully), and Rejected (failed).'
    },
    quiz: [
      { question: 'What does a Promise represent in JavaScript?', options: ['A strict contract', 'A function that runs instantly', 'The eventual completion or failure of an asynchronous operation', 'A boolean value'], answer: 'The eventual completion or failure of an asynchronous operation' },
      { question: 'What are the two callback functions provided inside the Promise constructor?', options: ['start and stop', 'resolve and reject', 'true and false', 'then and catch'], answer: 'resolve and reject' },
      { question: 'Which method is used to handle the successful data returned by a `resolve()`?', options: ['.catch()', '.finally()', '.then()', '.success()'], answer: '.then()' },
      { question: 'Which method is used to handle an error returned by a `reject()`?', options: ['.then()', '.finally()', '.error()', '.catch()'], answer: '.catch()' },
      { question: 'What is the state of a Promise while it is waiting for a `setTimeout` or a network request to finish?', options: ['Fulfilled', 'Rejected', 'Pending', 'Undefined'], answer: 'Pending' }
    ],
    interviewQuestions: [
      { q: 'What is "Callback Hell" and how do Promises solve it?', a: 'Callback Hell is when you have multiple nested asynchronous functions (callbacks inside callbacks inside callbacks), creating a triangle shape that is impossible to read. Promises solve this by allowing you to chain `.then().then().then()` in a flat, vertical structure.' }
    ],
    summary: ['Represents future values.', 'States: Pending, Fulfilled, Rejected.', 'Consume with `.then()` and `.catch()`.'],
    references: commonReferences
  },
  'js_async_await': {
    isStructured: true,
    title: '277. async/await',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: '`async / await` is a modern JavaScript syntax (introduced in ES2017) that allows you to write asynchronous, Promise-based code in a way that looks and behaves like normal, synchronous code.',
    whyUseIt: 'While Promises `.then().catch()` were a huge improvement over callbacks, chaining multiple `.then()`s can still be hard to read. `async/await` makes your code perfectly linear and incredibly easy to understand.',
    syntax: 'async function myFunc() {\n  const result = await somePromise();\n}',
    codeExample: '// Simulating a database fetch (Returns a Promise)\nconst fetchUser = () => new Promise(res => setTimeout(() => res({ name: "Bob" }), 1000));\n\n// --- THE OLD WAY (Promises with .then) ---\nfunction getUserOldWay() {\n  console.log("Fetching old...");\n  fetchUser().then(user => {\n    console.log("Old Way User:", user.name);\n  });\n}\n\n// --- THE MODERN WAY (async/await) ---\n// 1. Add "async" to the function declaration\nasync function getUserNewWay() {\n  console.log("Fetching new...");\n  \n  try {\n    // 2. Add "await" before the Promise. \n    // JS will PAUSE this function right here until the data arrives!\n    const user = await fetchUser();\n    \n    // 3. We can just use the variable normally now!\n    console.log("New Way User:", user.name);\n  } catch (error) {\n    console.error("Error:", error);\n  }\n}\n\ngetUserNewWay();',
    expectedOutput: 'Fetching new...\n(1 second later)\nNew Way User: Bob',
    explanation: [
      { code: 'async', desc: 'You MUST put this word in front of the function. It tells JavaScript "Hey, this function contains asynchronous code". By definition, an `async` function always returns a Promise itself.' },
      { code: 'await', desc: 'The magic word. It literally pauses the execution of THAT SPECIFIC FUNCTION until the Promise resolves. It replaces `.then()` entirely.' }
    ],
    realWorldExample: 'React components often use `async/await` inside `useEffect` hooks to fetch data from an API before rendering the page. It reads top-to-bottom like a script.',
    commonMistakes: [
      { error: 'Using await without async', code: 'function get() { await fetch(); }', suffix: 'This will throw a SyntaxError. You can ONLY use the `await` keyword inside a function that has been explicitly labeled with `async`.' }
    ],
    bestPractices: ['Always wrap `await` calls in a `try...catch` block. Since you aren\'t using `.catch()` anymore, a `try...catch` is the only way to handle network failures gracefully.'],
    practiceExercise: {
      task: 'Without coding: Does `await` pause the entire JavaScript engine and freeze the browser?',
      expectedOutput: 'No, only that specific async function.',
      solution: 'No! It only pauses the execution of THAT SPECIFIC async function. The rest of the browser (UI, clicks, other scripts) continues running perfectly.'
    },
    quiz: [
      { question: 'What is the primary purpose of `async/await`?', options: ['To make the browser run faster', 'To write asynchronous code that looks and reads like clean, synchronous code, avoiding `.then()` chains', 'To run tasks in parallel', 'To replace HTML'], answer: 'To write asynchronous code that looks and reads like clean, synchronous code, avoiding `.then()` chains' },
      { question: 'Where must the `await` keyword be used?', options: ['Anywhere', 'Only inside a function that is declared with the `async` keyword', 'Only in React', 'Inside a `.then()` block'], answer: 'Only inside a function that is declared with the `async` keyword' },
      { question: 'What does the `await` keyword actually do to the execution of the function?', options: ['It skips the line', 'It pauses the execution of that specific function until the Promise resolves, and then unpacks the value', 'It freezes the entire browser', 'It returns a boolean'], answer: 'It pauses the execution of that specific function until the Promise resolves, and then unpacks the value' },
      { question: 'Since you don\'t use `.catch()` with async/await, how do you handle errors?', options: ['You ignore them', 'You use an `if/else` statement', 'You wrap your `await` code inside a standard `try...catch` block', 'You restart the browser'], answer: 'You wrap your `await` code inside a standard `try...catch` block' },
      { question: 'What does an `async` function ALWAYS return, even if you just write `return 5;`?', options: ['A number', 'A Promise (that resolves to 5)', 'Undefined', 'An array'], answer: 'A Promise (that resolves to 5)' }
    ],
    interviewQuestions: [
      { q: 'Can you use `await` at the top level of a file, outside of any function?', a: 'Historically, no. But modern JavaScript (and Node) now supports "Top-Level Await" if the file is an ES Module. However, in older codebases, you still have to wrap it in an async IIFE (Immediately Invoked Function Expression).' }
    ],
    summary: ['Syntactic sugar for Promises.', 'Reads like synchronous code.', 'Requires `try...catch` for errors.'],
    references: commonReferences
  },
  'js_api_calls': {
    isStructured: true,
    title: '278. API Calls',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'An API (Application Programming Interface) Call is the process of a front-end application asking a remote backend server for data (usually in JSON format) over the internet.',
    whyUseIt: 'Without API calls, your front-end is just a static, isolated shell. API calls are how a React app gets the list of movies from Netflix\'s database, or how a Weather App gets live temperatures. It is the bridge between the UI and the Database.',
    syntax: 'const response = await fetch("https://api.example.com/data");\nconst data = await response.json();',
    codeExample: '// The standard modern pattern for an API call using fetch + async/await\nasync function getRandomDog() {\n  const apiUrl = "https://dog.ceo/api/breeds/image/random";\n  \n  try {\n    console.log("1. Sending Request to Dog API...");\n    \n    // GET request by default\n    const response = await fetch(apiUrl);\n    \n    // Critical: Check if the HTTP status is 200-299\n    if (!response.ok) {\n      throw new Error(`HTTP Error! Status: ${response.status}`);\n    }\n    \n    console.log("2. Response received! Parsing JSON...");\n    const data = await response.json();\n    \n    // Use the data!\n    console.log("3. Data:", data);\n    console.log(`Image URL: ${data.message}`);\n    \n    // In real life: document.getElementById("img").src = data.message;\n    \n  } catch (error) {\n    // Handles network failures (e.g., wifi goes down) or custom HTTP errors thrown above\n    console.error("API Call Failed:", error.message);\n  }\n}\n\ngetRandomDog();',
    expectedOutput: '1. Sending Request to Dog API...\n2. Response received! Parsing JSON...\n3. Data: {message: "https://...", status: "success"}\nImage URL: https://...',
    explanation: [
      { code: 'fetch(apiUrl)', desc: 'The built-in browser API for making network requests. It returns a Promise.' },
      { code: 'response.json()', desc: 'The network response arrives as a raw stream of data. You must call `.json()` (which is also async, hence `await`) to parse it into a usable JavaScript object.' }
    ],
    realWorldExample: 'Logging into a website. You type your email/password, hit submit, and JS makes an API call sending your data to the server. The server checks the database and responds with `{ success: true, token: "xyz" }`.',
    commonMistakes: [
      { error: 'CORS Errors', code: '', suffix: 'If you try to fetch data from an API that doesn\'t explicitly allow your website to access it, the browser will block the request and throw a CORS (Cross-Origin Resource Sharing) error. This is a security feature, not a bug in your code.' }
    ],
    bestPractices: ['Separate your API logic from your UI logic. Don\'t put `fetch` directly inside an HTML button click handler. Create an `api.js` file with functions like `getUsers()` and import them where needed.'],
    practiceExercise: {
      task: 'Without coding: If you want to SEND data to an API (like saving a new user), what HTTP method do you use instead of the default GET?',
      expectedOutput: 'POST',
      solution: 'You use POST. You pass a second argument to fetch: `fetch(url, { method: "POST", body: JSON.stringify(data) })`.'
    },
    quiz: [
      { question: 'What is the built-in JavaScript function used to make API calls?', options: ['request()', 'http()', 'fetch()', 'api()'], answer: 'fetch()' },
      { question: 'What data format do modern APIs almost universally use to send data back to the browser?', options: ['XML', 'HTML', 'JSON (JavaScript Object Notation)', 'CSV'], answer: 'JSON (JavaScript Object Notation)' },
      { question: 'Why must you use `await` (or `.then()`) when calling `.json()` on the response?', options: ['To fix formatting', 'Because parsing a potentially massive stream of data from the network takes time, so it returns a Promise', 'Because JSON requires it', 'To prevent hacking'], answer: 'Because parsing a potentially massive stream of data from the network takes time, so it returns a Promise' },
      { question: 'What does a CORS error mean?', options: ['Your internet is disconnected', 'You typed the URL wrong', 'The browser blocked the request because the remote server\'s security policy doesn\'t allow your specific website to access its data', 'Your JSON is invalid'], answer: 'The browser blocked the request because the remote server\'s security policy doesn\'t allow your specific website to access its data' },
      { question: 'If `response.ok` is false, what does it usually mean?', options: ['The server sent back a 404 (Not Found) or 500 (Server Error) status code', 'The JSON is broken', 'The fetch failed completely', 'The data is too large'], answer: 'The server sent back a 404 (Not Found) or 500 (Server Error) status code' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between a GET request and a POST request?', a: 'GET is used to retrieve data from a server (like reading a tweet). POST is used to send data TO a server to create something new (like writing a tweet). GET requests shouldn\'t have a body, while POST requests include a body (payload).' }
    ],
    summary: ['Bridge between frontend and backend.', 'Uses `fetch` and `.json()`.', 'Handle HTTP status codes manually.'],
    references: commonReferences
  },
  'js_components_thinking': {
    isStructured: true,
    title: '279. Components Thinking',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Component Thinking is a mental model for web development. Instead of viewing a website as one giant HTML document, you view it as a collection of small, reusable, independent building blocks (Components).',
    whyUseIt: 'It is the absolute foundational philosophy behind React, Vue, and Angular. Before you write a single line of React code, you must train your brain to look at a UI mockup and break it down into boxes.',
    syntax: '// Conceptual. No strict syntax.',
    codeExample: '// --- TRADITIONAL HTML THINKING ---\n// "I need to build a sidebar with a user profile, a navigation list, and a logout button."\n// *Writes 500 lines of HTML in index.html*\n\n\n// --- COMPONENT THINKING ---\n// "The Sidebar is a component. Inside it, there is a <UserProfile />, a <NavigationMenu />, and a <LogoutButton />."\n\n/*\nApp\n └── Sidebar\n      ├── UserProfile\n      ├── NavigationMenu\n      └── LogoutButton\n └── MainContent\n      ├── Feed\n      └── RightAdPanel\n*/\n\nconsole.log("Component thinking makes apps modular and scalable.");',
    expectedOutput: 'Component thinking makes apps modular and scalable.',
    explanation: [
      { code: 'Reusability', desc: 'If you need a `LogoutButton` in the Sidebar AND in the Header, you don\'t copy-paste the HTML. You just place the `<LogoutButton />` component in two different places.' },
      { code: 'Isolation', desc: 'If the `NavigationMenu` has a bug, you know exactly which file to open (`NavigationMenu.js`). You don\'t have to scroll through 10,000 lines of spaghetti code.' }
    ],
    realWorldExample: 'Lego bricks. You don\'t buy a pre-molded plastic castle. You buy tiny, generic bricks (a 2x4 blue brick, a window piece) and combine them to build the castle. A web Component is just a Lego brick.',
    commonMistakes: [
      { error: 'Building monolithic components', code: '', suffix: 'Beginners using React often create an `App.js` file that contains the entire header, sidebar, footer, and main content. This defeats the entire purpose of React. Break it down!' }
    ],
    bestPractices: ['The Single Responsibility Principle. A component should ideally do one thing. If a component grows too large or does too many things, it should be broken down into smaller sub-components.'],
    practiceExercise: {
      task: 'Without coding: Look at Twitter (X). Break down a single "Tweet" into 3-4 sub-components.',
      expectedOutput: 'Avatar, Header, Body, Actions.',
      solution: 'A <Tweet /> component contains: <UserAvatar />, <TweetHeader /> (Name/Handle), <TweetBody /> (The text), and <ActionButtons /> (Like, Retweet, Reply).'
    },
    quiz: [
      { question: 'What is Component Thinking?', options: ['Writing all code in one file', 'Breaking a complex UI down into small, isolated, reusable building blocks', 'Using CSS Frameworks', 'Writing backend code on the frontend'], answer: 'Breaking a complex UI down into small, isolated, reusable building blocks' },
      { question: 'Why is Component Thinking essential for modern web development?', options: ['It is required by HTML5', 'It is the core philosophy behind every modern framework like React, making large apps maintainable and reusable', 'It makes the website load instantly', 'It generates CSS automatically'], answer: 'It is the core philosophy behind every modern framework like React, making large apps maintainable and reusable' },
      { question: 'If you have a customized "Subscribe" button that appears in the Header, the Footer, and the Sidebar, how do you handle it in a component-based architecture?', options: ['Copy and paste the HTML/JS three times', 'Create one `<SubscribeButton />` component and use it three times', 'Use an iframe', 'It is impossible'], answer: 'Create one `<SubscribeButton />` component and use it three times' },
      { question: 'What is the "Single Responsibility Principle" as applied to components?', options: ['A component should only be used once', 'A component should ideally do one specific thing. If it does too much, break it into smaller pieces', 'A component should only have one line of code', 'A component should only have one color'], answer: 'A component should ideally do one specific thing. If it does too much, break it into smaller pieces' },
      { question: 'Which real-world toy is the best analogy for web components?', options: ['A remote control car', 'Lego bricks', 'A puzzle', 'A kite'], answer: 'Lego bricks' }
    ],
    interviewQuestions: [
      { q: 'How do you decide when to split a piece of UI into its own separate component?', a: 'I split it if it meets one of two criteria: 1) Reusability: Am I going to need this exact UI somewhere else? 2) Complexity: Is this piece of UI so complex (lots of state/logic) that it is cluttering up the parent component?' }
    ],
    summary: ['Break UI into Lego bricks.', 'Promotes reusability and isolation.', 'The foundation of React.'],
    references: commonReferences
  }
};
