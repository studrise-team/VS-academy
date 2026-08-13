const commonReferences = [
  { label: 'MDN Web Docs - Microtasks', url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide' },
  { label: 'MDN Web Docs - Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' }
];

export const javascriptContentBatchMissing22 = {
  'js_microtask_queue': {
    isStructured: true,
    title: '203. Microtask Queue',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'The Microtask Queue is a special, high-priority waiting area in the Event Loop. It is primarily used for Promise callbacks (`.then()` and `.catch()`). The Event Loop will completely empty the Microtask Queue before it even looks at the standard Callback (Macrotask) Queue.',
    whyUseIt: 'Understanding the Microtask Queue explains why Promises seem to resolve faster or "jump the line" ahead of `setTimeout` calls, even if the `setTimeout` was triggered first.',
    syntax: '// Conceptual Architecture, not code syntax',
    codeExample: 'console.log("1. Sync code starts");\n\n// 1. Goes to Macrotask Queue\nsetTimeout(() => {\n  console.log("4. setTimeout (Macrotask)");\n}, 0);\n\n// 2. Goes to Microtask Queue\nPromise.resolve().then(() => {\n  console.log("3. Promise (Microtask)");\n});\n\nconsole.log("2. Sync code ends");\n\n// Output Order:\n// 1. Sync code starts\n// 2. Sync code ends\n// 3. Promise (Microtask)\n// 4. setTimeout (Macrotask)',
    expectedOutput: 'The Promise logs BEFORE the setTimeout, even though the setTimeout was written first in the code and both had a 0ms delay.',
    explanation: [
      { code: 'Micro vs Macro', desc: '`setTimeout`, `setInterval`, and DOM events (clicks) go to the Macrotask Queue. Promises and `queueMicrotask()` go to the Microtask Queue.' },
      { code: 'The Priority Rule', desc: 'When the Call Stack empties, the Event Loop checks the Microtask Queue first. If there are 5 Promises waiting, it executes all 5. ONLY when the Microtask Queue is 100% empty will it execute exactly ONE Macrotask (like a timeout), and then it immediately checks the Microtask queue again.' }
    ],
    realWorldExample: 'If a user clicks a button (Macrotask), but a network request Promise (Microtask) resolves at the exact same millisecond, the browser will execute the Promise data handling before it executes the button click handler.',
    commonMistakes: [
      { error: 'Infinite Microtasks block rendering', code: 'function loop() { Promise.resolve().then(loop); }', suffix: 'If a Microtask creates another Microtask, the Event Loop gets stuck emptying the Microtask Queue forever. It will never render the UI and never process Macrotasks (like clicks). Your page will freeze. (Unlike Macrotasks, which yield to the renderer between executions).' }
    ],
    bestPractices: ['You can manually schedule a microtask if you need a tiny piece of code to run immediately after the current synchronous code finishes, but before the browser repaints the screen: `queueMicrotask(() => { ... })`.'],
    practiceExercise: {
      task: 'Without coding: Between a `setTimeout(fn, 0)` and a `Promise.resolve().then(fn)`, which one executes first when the main thread finishes?',
      expectedOutput: 'The Promise.',
      solution: 'The Promise, because it goes to the high-priority Microtask Queue.'
    },
    quiz: [
      { question: 'What is the Microtask Queue?', options: ['A queue exclusively for small functions under 10 lines of code', 'A high-priority queue in the Event Loop primarily used for Promise callbacks', 'A queue for CSS animations', 'A deprecated feature'], answer: 'A high-priority queue in the Event Loop primarily used for Promise callbacks' },
      { question: 'Which of the following goes into the Macrotask (Callback) Queue rather than the Microtask Queue?', options: ['Promise.then()', 'Promise.catch()', 'queueMicrotask()', 'setTimeout()'], answer: 'setTimeout()' },
      { question: 'If both the Microtask Queue and the Macrotask Queue have items waiting, which does the Event Loop process first?', options: ['The Macrotask Queue', 'The Microtask Queue (it completely empties it first)', 'It alternates between them one by one', 'It picks randomly'], answer: 'The Microtask Queue (it completely empties it first)' },
      { question: 'What happens if a Microtask continuously queues another Microtask infinitely?', options: ['The browser runs smoothly', 'The Event Loop gets stuck forever, freezing the page and preventing UI rendering or clicks', 'It throws a SyntaxError', 'It automatically converts them to Macrotasks'], answer: 'The Event Loop gets stuck forever, freezing the page and preventing UI rendering or clicks' },
      { question: 'In the code `setTimeout(()=>console.log("A"), 0); Promise.resolve().then(()=>console.log("B"));`, what is logged first?', options: ['A', 'B', 'They log at exactly the same time', 'Error'], answer: 'B' }
    ],
    interviewQuestions: [
      { q: 'Why do Promises use the Microtask Queue instead of the Macrotask Queue?', a: 'To ensure consistency. If Promises used the Macrotask Queue, they would have to wait behind user clicks and UI renders, causing unpredictable delays in data handling. Microtasks ensure that once the current JS execution finishes, the Promise data is handled *immediately*.' }
    ],
    summary: ['High-priority waiting area.', 'Promises go here, timeouts go to Macrotask.', 'Event Loop empties Microtasks FIRST.'],
    references: commonReferences
  },
  'js_what_is_an_api': {
    isStructured: true,
    title: '204. What is an API?',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'API stands for Application Programming Interface. It is a set of rules and protocols that allows one software application to talk to another software application.',
    whyUseIt: 'Without APIs, every app would have to build everything from scratch. If you want a map in your app, you don\'t launch a satellite; you just use the Google Maps API. If you want weather data, you don\'t build a meteorology station; you ask a Weather API.',
    syntax: '// Conceptual, no code syntax',
    codeExample: '// Analogy: A Restaurant\n\n// 1. You (The Client / Frontend Web App)\n// You read the menu and know what you want, but you are not allowed in the kitchen.\n\n// 2. The Kitchen (The Server / Database)\n// Where the food (Data) is actually stored and prepared.\n\n// 3. The Waiter (The API!)\n// You give your order (Request) to the waiter.\n// The waiter takes it to the kitchen.\n// The kitchen makes the food.\n// The waiter brings the food (Response) back to your table.',
    expectedOutput: 'Understanding of the Client-API-Server relationship.',
    explanation: [
      { code: 'Client', desc: 'The application making the request (e.g., your browser running JavaScript).' },
      { code: 'Server', desc: 'The powerful computer somewhere else in the world holding the data.' },
      { code: 'API (The Waiter)', desc: 'The middleman. It receives the request from the client, tells the server what to do, and delivers the server\'s response back to the client.' }
    ],
    realWorldExample: 'When you buy something online and use PayPal, the store\'s website sends your total to the PayPal API. PayPal processes the secure payment on their servers, and the PayPal API tells the store: "Payment successful!"',
    commonMistakes: [
      { error: 'Thinking APIs are only for the internet', code: '', suffix: 'Web APIs (like fetching data over HTTP) are the most common for web developers, but the browser itself provides APIs! `document.querySelector` is part of the "DOM API". It is an interface that lets your JS talk to the browser\'s HTML engine.' }
    ],
    bestPractices: ['Read the documentation! Every API is a waiter that speaks a different language. The documentation is the "menu" that tells you exactly how to order your data.'],
    practiceExercise: {
      task: 'In the Restaurant analogy, if your JavaScript code is the Customer, and the Database is the Kitchen, what role does the API play?',
      expectedOutput: 'The Waiter.',
      solution: 'The Waiter (The messenger between the two).'
    },
    quiz: [
      { question: 'What does API stand for?', options: ['Application Programming Interface', 'Automated Program Integration', 'Advanced Programming Internet', 'Apple Processing Interface'], answer: 'Application Programming Interface' },
      { question: 'What is the primary function of an API?', options: ['To design the CSS of a website', 'To allow two different software applications to communicate and share data', 'To compile JavaScript', 'To host a website'], answer: 'To allow two different software applications to communicate and share data' },
      { question: 'In the Restaurant Analogy, who represents the API?', options: ['The Customer (Client)', 'The Kitchen (Server/Database)', 'The Menu (HTML)', 'The Waiter (The Messenger)'], answer: 'The Waiter (The Messenger)' },
      { question: 'If you want to display the current stock price of Apple on your website, what would you do?', options: ['Build a stock market exchange from scratch', 'Connect directly to Wall Street servers', 'Use a Financial API to request the data', 'Write a complex math algorithm'], answer: 'Use a Financial API to request the data' },
      { question: 'Are APIs only used for internet communication?', options: ['Yes', 'No, operating systems and browsers have local APIs too (like the DOM API)', 'Only in Node.js', 'Only for mobile apps'], answer: 'No, operating systems and browsers have local APIs too (like the DOM API)' }
    ],
    interviewQuestions: [
      { q: 'What is a Third-Party API?', a: 'An API provided by a different company that you use in your app. Examples include Stripe (payments), Twilio (SMS), or Google Maps. You usually have to sign up for an API Key to use them.' }
    ],
    summary: ['Allows apps to talk to each other.', 'Acts as the middleman (the waiter).', 'Saves you from reinventing the wheel.'],
    references: commonReferences
  },
  'js_rest_api_basics': {
    isStructured: true,
    title: '205. REST API Basics',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'REST (Representational State Transfer) is the most popular architectural style for designing Web APIs. A REST API uses standard HTTP methods and URLs to manage data, treating everything as a "Resource".',
    whyUseIt: 'Because it relies on standard HTTP conventions, it is predictable. Once you know how to use one REST API, you generally know how to use almost all of them.',
    syntax: '// Conceptual, no code syntax',
    codeExample: '// In REST, everything is a "Resource" represented by a URL endpoint.\n// Let us assume we are managing a database of Users.\n\n// 1. The Base URL (Where the API lives)\n// https://api.mywebsite.com\n\n// 2. The Endpoint (The Resource we want)\n// /users\n\n// Putting it together:\n// GET request to https://api.mywebsite.com/users -> Returns a list of all users\n// GET request to https://api.mywebsite.com/users/5 -> Returns the user with ID 5\n// DELETE request to https://api.mywebsite.com/users/5 -> Deletes user 5',
    expectedOutput: 'Predictable URL structures that describe exactly what data is being interacted with.',
    explanation: [
      { code: 'Resource', desc: 'A noun (Users, Posts, Comments). Good REST APIs always use plural nouns for their endpoints, not verbs (e.g., `/users`, not `/getUsers`).' },
      { code: 'Endpoints', desc: 'The specific URL paths you send requests to in order to access specific resources.' }
    ],
    realWorldExample: 'The GitHub REST API. To see a user\'s profile, you send a GET request to `https://api.github.com/users/torvalds`. To see their repositories, you go to `https://api.github.com/users/torvalds/repos`. It makes logical sense!',
    commonMistakes: [
      { error: 'Using verbs in REST URLs', code: 'https://api.com/deleteUser/5', suffix: 'This breaks REST conventions. The URL should only contain nouns (`/users/5`). The *action* (deleting) is determined by the HTTP Method (sending a DELETE request instead of a GET request).' }
    ],
    bestPractices: ['A true REST API is "Stateless". This means every single request you send to the API must contain all the information necessary to authenticate and process it (like an API token). The server does not remember you between requests.'],
    practiceExercise: {
      task: 'Following REST conventions, what should the URL endpoint look like if you want to access a specific "Post" with an ID of 42?',
      expectedOutput: '/posts/42',
      solution: '/posts/42'
    },
    quiz: [
      { question: 'What does REST stand for?', options: ['Rapid Execution Software Tool', 'Representational State Transfer', 'Remote Encrypted Server Technology', 'Real-time Event System Transfer'], answer: 'Representational State Transfer' },
      { question: 'In REST, what is a "Resource"?', options: ['A CSS file', 'A piece of data represented by a noun (like a User, Post, or Product)', 'A JavaScript function', 'The server\'s hard drive'], answer: 'A piece of data represented by a noun (like a User, Post, or Product)' },
      { question: 'Which of the following is a properly formatted REST endpoint?', options: ['/getUsers', '/users/getAll', '/users', '/create-user'], answer: '/users' },
      { question: 'How do you specify exactly *which* user you want to get in a REST URL?', options: ['/users?get=5', '/users(5)', '/users/5', '/user5'], answer: '/users/5' },
      { question: 'What does it mean that REST APIs are "Stateless"?', options: ['They have no database', 'The server does not remember previous requests; every request must contain all necessary info/authentication', 'They can only return strings, not objects', 'They cannot be updated'], answer: 'The server does not remember previous requests; every request must contain all necessary info/authentication' }
    ],
    interviewQuestions: [
      { q: 'What is a JSON API?', a: 'While a REST API dictates the *architecture* (URLs and Methods), a JSON API means the actual data being sent back and forth in the body of the requests and responses is formatted as JSON (JavaScript Object Notation), which is the modern standard.' }
    ],
    summary: ['Standard architecture for APIs.', 'Uses URLs for nouns (Resources).', 'Relies on HTTP methods for verbs (Actions).'],
    references: commonReferences
  },
  'js_http_methods': {
    isStructured: true,
    title: '206. HTTP Methods',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'HTTP Methods (also known as HTTP Verbs) indicate the desired action to be performed on the given resource (URL endpoint). They are the verbs of the internet.',
    whyUseIt: 'When you talk to a REST API, you need a way to say whether you want to read data, create new data, update existing data, or delete data. HTTP Methods provide exactly that.',
    syntax: '// 5 Main Methods: GET, POST, PUT, PATCH, DELETE',
    codeExample: '// The API Endpoint: https://api.store.com/products\n\n// 1. GET\n// Action: Read / Retrieve data.\n// Result: Returns a list of all products.\n\n// 2. POST\n// Action: Create new data.\n// Result: Sends a new product (like a T-Shirt) to the database to be saved.\n\n// The API Endpoint: https://api.store.com/products/99\n\n// 3. PUT\n// Action: Update data (Full Replacement).\n// Result: Overwrites the entire product #99 with the new data you send.\n\n// 4. PATCH\n// Action: Update data (Partial Update).\n// Result: Only updates the specific fields you send (e.g., just changing the price of product #99).\n\n// 5. DELETE\n// Action: Delete data.\n// Result: Removes product #99 from the database entirely.',
    expectedOutput: 'Understanding of CRUD (Create, Read, Update, Delete) mapping to HTTP methods.',
    explanation: [
      { code: 'CRUD', desc: 'A common acronym in databases. Create (POST), Read (GET), Update (PUT/PATCH), Delete (DELETE).' },
      { code: 'URL + Method', desc: 'The exact same URL (`/products`) does completely different things depending on which HTTP method you send the request with.' }
    ],
    realWorldExample: 'Updating your Twitter bio. When you hit "Save", your browser sends a PATCH or PUT request to `/users/your_id` containing your new bio text.',
    commonMistakes: [
      { error: 'Using GET to send sensitive data or create things', code: '', suffix: 'GET requests should NEVER change data on the server, and they send all their data visibly in the URL (query strings). If you are creating a user or sending a password, you MUST use POST.' }
    ],
    bestPractices: ['Always follow standard conventions. Don\'t build an API where sending a GET request deletes a user. That breaks the foundational rules of the web and will cause chaos.'],
    practiceExercise: {
      task: 'If you want to create a brand new User in a database, which HTTP method should you use?',
      expectedOutput: 'POST',
      solution: 'POST'
    },
    quiz: [
      { question: 'Which HTTP method is used to READ or retrieve data from a server?', options: ['POST', 'PUT', 'GET', 'FETCH'], answer: 'GET' },
      { question: 'Which HTTP method is used to CREATE brand new data on a server?', options: ['CREATE', 'POST', 'PATCH', 'GET'], answer: 'POST' },
      { question: 'What is the main difference between PUT and PATCH?', options: ['PUT is for databases, PATCH is for files', 'PUT replaces the entire resource, PATCH only updates specific fields (partial update)', 'There is no difference', 'PATCH is faster'], answer: 'PUT replaces the entire resource, PATCH only updates specific fields (partial update)' },
      { question: 'Which HTTP method is used to remove data from the server?', options: ['REMOVE', 'DESTROY', 'DELETE', 'ERASE'], answer: 'DELETE' },
      { question: 'Can the exact same URL endpoint (e.g., `/users`) do different things based on the HTTP Method used?', options: ['Yes, GET reads them, while POST creates a new one', 'No, every URL can only do one thing', 'Only in strict mode', 'Only if the server is Node.js'], answer: 'Yes, GET reads them, while POST creates a new one' }
    ],
    interviewQuestions: [
      { q: 'What does it mean for an HTTP Method to be "Idempotent"?', a: 'Idempotent means that making the exact same request multiple times has the same effect as making it once. GET, PUT, and DELETE are idempotent (deleting a user 5 times still results in the user being deleted). POST is NOT idempotent (sending a POST request 5 times creates 5 separate, duplicate users).' }
    ],
    summary: ['GET = Read.', 'POST = Create.', 'PUT/PATCH = Update.', 'DELETE = Delete.'],
    references: commonReferences
  },
  'js_get': {
    isStructured: true,
    title: '207. GET',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The GET method is the most common HTTP request. It is used exclusively to request (read) data from a specified resource. It should never be used to modify data.',
    whyUseIt: 'Every time you type a URL into your browser and hit Enter, your browser is making a GET request behind the scenes to fetch the HTML for that page. In JavaScript, you use GET to fetch JSON data from APIs.',
    syntax: 'fetch("https://api.url.com/data"); // By default, fetch() uses GET',
    codeExample: '// We use the browser\'s built-in fetch() API to make the request\n// Because we don\'t specify a method, it defaults to GET\n\nfetch("https://jsonplaceholder.typicode.com/users/1")\n  .then(response => {\n    // We must check if the response was successful (HTTP 200)\n    if (!response.ok) {\n      throw new Error("Network response was not ok");\n    }\n    // Parse the raw HTTP response body into a JavaScript object\n    return response.json();\n  })\n  .then(data => {\n    // Now we have the actual data to use in our app!\n    console.log("User Name:", data.name);\n    console.log("User Email:", data.email);\n  })\n  .catch(error => {\n    console.error("Fetch error:", error);\n  });',
    expectedOutput: 'User Name: Leanne Graham\nUser Email: Sincere@april.biz',
    explanation: [
      { code: 'fetch(url)', desc: 'The modern way to make HTTP requests in JS. It always returns a Promise.' },
      { code: 'response.json()', desc: 'The data comes back as a text string. This crucial step parses that JSON string into a usable JavaScript object.' }
    ],
    realWorldExample: 'Building a weather app. You send a GET request to `api.weather.com/london`, receive the temperature data, and display it on the screen.',
    commonMistakes: [
      { error: 'Trying to send a "body" in a GET request', code: 'fetch(url, { method: "GET", body: JSON.stringify(data) })', suffix: 'GET requests are strictly for reading. The HTTP specification explicitly states GET requests should not have a "body" (payload). If you need to send lots of data, use POST.' }
    ],
    bestPractices: ['Since GET requests don\'t have a body, if you need to pass parameters (like a search query or a page number), you must append them directly to the URL as a "Query String" (e.g., `?search=cats&page=2`).'],
    practiceExercise: {
      task: 'Write a basic `fetch()` call to "https://api.example.com/data". Chain a `.then()` to parse the `res.json()`, and another to log the `data`.',
      expectedOutput: 'Makes a GET request and logs data.',
      solution: 'fetch("https://api.example.com/data").then(res => res.json()).then(data => console.log(data));'
    },
    quiz: [
      { question: 'What is the default HTTP method used by the `fetch()` API if you don\'t specify one?', options: ['POST', 'PUT', 'GET', 'None'], answer: 'GET' },
      { question: 'What is the ONLY purpose of a GET request?', options: ['To create new users', 'To delete data', 'To read/retrieve data from the server', 'To update passwords'], answer: 'To read/retrieve data from the server' },
      { question: 'Are you allowed to include a data "body" (payload) in a GET request?', options: ['Yes', 'No, GET requests should not have a body', 'Only in strict mode', 'Only if the data is encrypted'], answer: 'No, GET requests should not have a body' },
      { question: 'How do you parse the raw response from `fetch()` into a usable JavaScript object?', options: ['JSON.parse(response)', 'response.toObject()', 'response.json()', 'parse(response)'], answer: 'response.json()' },
      { question: 'How do you send parameters (like a search term) in a GET request?', options: ['In the request body', 'In a separate POST request', 'By appending them to the URL as a Query String (e.g., `?search=dogs`)', 'You cannot send parameters in a GET request'], answer: 'By appending them to the URL as a Query String (e.g., `?search=dogs`)' }
    ],
    interviewQuestions: [
      { q: 'What does `response.ok` check for in a fetch request?', a: '`fetch` only rejects its Promise if there is a literal network failure (like the wifi drops). If the server successfully returns a 404 (Not Found) or 500 (Server Error), the Promise *fulfills*. You must manually check `response.ok` (which is true for status codes 200-299) to see if the request was actually successful.' }
    ],
    summary: ['Used to retrieve data.', 'Default method for `fetch()`.', 'Remember to call `response.json()`.'],
    references: commonReferences
  }
};
