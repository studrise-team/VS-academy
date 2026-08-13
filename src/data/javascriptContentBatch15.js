const commonReferences = [
  { label: 'MDN Web Docs - Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch' },
  { label: 'W3Schools JS JSON', url: 'https://www.w3schools.com/js/js_json_intro.asp' }
];

export const javascriptContentBatch15 = {
  'js_apis_and_json': {
    isStructured: true,
    title: '204-205, 213. APIs & JSON',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'An API (Application Programming Interface) is a way for two computer programs to talk to each other. In web development, it usually means your frontend JavaScript asking a backend server for data. JSON (JavaScript Object Notation) is the standard text format used to send this data back and forth. It looks exactly like a JavaScript object, but it is purely text.',
    whyUseIt: 'You don\'t want to hardcode 10,000 users into your JavaScript file. Instead, your code asks an API (e.g., `https://api.github.com/users`) for the data, and the server replies with a JSON string containing the users.',
    syntax: 'JSON String: \'{"name": "Alice", "age": 25}\'\nJS Object: { name: "Alice", age: 25 }',
    codeExample: '// 1. A JSON string received from a server (note the quotes around keys)\nconst jsonString = \'{"user": "coder99", "active": true}\';\n\n// 2. Convert JSON string into a usable JavaScript object\nconst jsObject = JSON.parse(jsonString);\nconsole.log(jsObject.user);\n\n// 3. Convert JS object back to a JSON string (to send to server)\nconst newString = JSON.stringify(jsObject);\nconsole.log(newString);',
    expectedOutput: '"coder99"\n\'{"user":"coder99","active":true}\'',
    explanation: [
      { code: '\'{"user": "coder99"}\'', desc: 'JSON requires DOUBLE QUOTES around all keys and string values. It cannot contain functions or methods.' },
      { code: 'JSON.parse()', desc: 'Translates the raw text from the server into a real JavaScript object.' },
      { code: 'JSON.stringify()', desc: 'Translates a real JavaScript object back into flat text so it can be sent over the internet.' }
    ],
    realWorldExample: 'A Weather App. Your JS sends the zip code to `weatherapi.com`. The API calculates the weather and sends back a JSON string: `{"temp": 72, "desc": "Sunny"}`. Your JS parses it and updates the DOM.',
    commonMistakes: [
      { error: 'Trying to access properties on a JSON string', code: 'const data = \'{"id": 1}\';\nconsole.log(data.id);', suffix: '`data` is just a string of text. `data.id` will be `undefined`. You MUST run `JSON.parse(data)` first to turn it into an object.' }
    ],
    bestPractices: ['Always wrap `JSON.parse()` in a `try...catch` block if you do not control the API, because parsing broken/malformed JSON will crash your entire application.'],
    practiceExercise: {
      task: 'Given `const dogObj = { breed: "Pug", age: 3 };`. Convert it to a JSON string and log it.',
      expectedOutput: '{"breed":"Pug","age":3}',
      solution: 'const dogObj = { breed: "Pug", age: 3 }; console.log(JSON.stringify(dogObj));'
    },
    quiz: [
      { question: 'What does API stand for?', options: ['Application Programming Interface', 'Automated Program Input', 'Asynchronous Programming Interface', 'Array Parsing Index'], answer: 'Application Programming Interface' },
      { question: 'What format is mostly used to send data between web servers and clients today?', options: ['XML', 'HTML', 'JSON', 'CSV'], answer: 'JSON' },
      { question: 'What is a strict rule of JSON formatting?', options: ['Keys must not have quotes', 'Keys must be enclosed in DOUBLE quotes', 'It must include functions', 'It must end with a semicolon'], answer: 'Keys must be enclosed in DOUBLE quotes' },
      { question: 'Which method turns a JSON string into a JavaScript Object?', options: ['JSON.toObject()', 'JSON.parse()', 'JSON.stringify()', 'JSON.convert()'], answer: 'JSON.parse()' },
      { question: 'Which method turns a JavaScript Object into a JSON string?', options: ['JSON.toString()', 'JSON.parse()', 'JSON.stringify()', 'String(obj)'], answer: 'JSON.stringify()' }
    ],
    interviewQuestions: [
      { q: 'Can you store a JavaScript Function inside JSON?', a: 'No. JSON is a data-only format. It only supports strings, numbers, booleans, null, arrays, and other objects. Functions, Dates, and undefined are stripped out or converted to null.' }
    ],
    summary: ['API = Two programs talking.', 'JSON = The text format they use to talk.', 'Parse (String to Object), Stringify (Object to String).'],
    references: commonReferences
  },

  'js_fetch_api': {
    isStructured: true,
    title: '214-215, 217. The fetch() API (GET Requests)',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'The `fetch()` API is the modern, built-in JavaScript method used to make network requests (like calling an API to get data). It returns a Promise that resolves to the `Response` object representing the response to your request.',
    whyUseIt: 'Without `fetch()`, you cannot pull live data from the internet. It replaced the older, clunkier `XMLHttpRequest` (AJAX).',
    syntax: 'const response = await fetch("https://api.url/data");\nconst data = await response.json();',
    codeExample: 'async function getRandomUser() {\n  try {\n    console.log("Fetching data...");\n    \n    // 1. Make the GET request\n    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");\n    \n    // 2. Check if the server actually said "OK" (Status 200)\n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    \n    // 3. Parse the JSON body of the response\n    const user = await response.json();\n    \n    // 4. Use the data\n    console.log("Got user: " + user.name);\n    \n  } catch (error) {\n    console.error("Could not fetch user:", error);\n  }\n}\n\ngetRandomUser();',
    expectedOutput: '"Fetching data..."\n(Wait for network...)\n"Got user: Leanne Graham"',
    explanation: [
      { code: 'await fetch(url)', desc: 'Sends an HTTP GET request to the URL. It pauses the function until the server replies.' },
      { code: 'response.ok', desc: 'A boolean that is `true` if the HTTP status code is 200-299 (successful). `fetch()` does NOT automatically reject on 404 errors, so you must check this manually.' },
      { code: 'await response.json()', desc: 'Takes the raw data stream from the server and runs `JSON.parse()` on it asynchronously.' }
    ],
    realWorldExample: 'Loading a blog homepage. `fetch("/api/posts")` gets an array of post objects, and then a loop builds `<article>` HTML elements for each one.',
    commonMistakes: [
      { error: 'Forgetting to await the .json() parsing', code: 'const user = response.json();\nconsole.log(user.name);', suffix: '`response.json()` also returns a Promise! You MUST `await` it. Otherwise, `user` is just a pending Promise object, and `user.name` is undefined.' }
    ],
    bestPractices: ['Always handle network errors with `try/catch`. Also, remember to show a Loading Spinner in your UI before calling `fetch`, and hide it in the `finally` block.'],
    practiceExercise: {
      task: 'Use `fetch` to get data from `https://jsonplaceholder.typicode.com/todos/1`. Parse it as JSON, and log the `title` property.',
      expectedOutput: '"delectus aut autem"',
      solution: 'async function getTodo() { const res = await fetch("https://jsonplaceholder.typicode.com/todos/1"); const data = await res.json(); console.log(data.title); } getTodo();'
    },
    quiz: [
      { question: 'What does `fetch()` return?', options: ['JSON data', 'A string', 'A Promise', 'An HTML element'], answer: 'A Promise' },
      { question: 'By default, what type of HTTP request does `fetch()` make?', options: ['POST', 'GET', 'PUT', 'DELETE'], answer: 'GET' },
      { question: 'Does `fetch()` automatically throw an error (reject) if the server returns a 404 Not Found status?', options: ['Yes, always', 'No, it only rejects on a network failure (like no internet)', 'Yes, but only in strict mode', 'No, 404 means the request was successful'], answer: 'No, it only rejects on a network failure (like no internet)' },
      { question: 'Which method reads the response body and parses it as JSON?', options: ['response.body()', 'response.text()', 'response.parse()', 'response.json()'], answer: 'response.json()' },
      { question: 'Why do we need a `try...catch` block around `fetch`?', options: ['To make it faster', 'To handle cases where the user loses internet connection or the server is down', 'To format the JSON', 'To bypass CORS errors'], answer: 'To handle cases where the user loses internet connection or the server is down' }
    ],
    interviewQuestions: [
      { q: 'What is CORS?', a: 'Cross-Origin Resource Sharing. It is a security feature built into browsers that prevents your JS from fetching data from a different domain, unless that other domain explicitly sends a header saying it is allowed.' }
    ],
    summary: ['`fetch(url)` makes a network request.', 'Always check `response.ok`.', 'Use `await response.json()` to parse the data.'],
    references: commonReferences
  },

  'js_fetch_post': {
    isStructured: true,
    title: '216, 208. POST Requests',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'While a GET request asks the server FOR data, a POST request SENDS new data TO the server (like submitting a form, or creating a new user). To do this with `fetch()`, you must provide a configuration object as the second argument.',
    whyUseIt: 'Anytime the user creates something new (registers an account, writes a tweet, uploads a file), you must send a POST request containing their data.',
    syntax: 'fetch(url, { method: "POST", headers: {...}, body: JSON.stringify(data) })',
    codeExample: 'async function createUser() {\n  const newUser = { name: "John", job: "Developer" };\n\n  try {\n    const response = await fetch("https://reqres.in/api/users", {\n      method: "POST",\n      headers: {\n        "Content-Type": "application/json"\n      },\n      body: JSON.stringify(newUser)\n    });\n\n    const data = await response.json();\n    console.log("Server created user with ID:", data.id);\n  } catch (error) {\n    console.error(error);\n  }\n}\n\ncreateUser();',
    expectedOutput: '"Server created user with ID: 412" (ID will vary)',
    explanation: [
      { code: 'method: "POST"', desc: 'Tells the server we want to create something, not just read.' },
      { code: '"Content-Type": "application/json"', desc: 'A header that tells the server: "Hey, the data I am sending you is formatted as JSON, please parse it that way."' },
      { code: 'body: JSON.stringify(newUser)', desc: 'You cannot send a raw JS object over HTTP. You MUST convert it to a JSON string first using `stringify`.' }
    ],
    realWorldExample: 'A "Contact Us" form. When the user hits send, JS gathers the input values into an object, stringifies it, and `fetch POST`s it to the backend mailer server.',
    commonMistakes: [
      { error: 'Forgetting the Content-Type header', code: 'headers: {}', suffix: 'If you don\'t tell the server you are sending JSON, it might assume you are sending plain text and fail to process your data.' },
      { error: 'Forgetting to stringify the body', code: 'body: newUser', suffix: 'Sending `body: newUser` will send the literal string `"[object Object]"`, which the server cannot read.' }
    ],
    bestPractices: ['Create a reusable wrapper function for your API calls (e.g., `apiPost(url, data)`) so you don\'t have to write the headers and `JSON.stringify` every single time.'],
    practiceExercise: {
      task: 'Identify the 3 missing/wrong things in this POST configuration: `{ method: "GET", body: myData }`',
      expectedOutput: '1. method should be "POST", 2. missing headers with Content-Type, 3. myData must be JSON.stringified.',
      solution: '(See expected output)'
    },
    quiz: [
      { question: 'What HTTP method is used to SEND new data to a server?', options: ['GET', 'POST', 'PULL', 'SEND'], answer: 'POST' },
      { question: 'How do you specify a POST request in `fetch()`?', options: ['fetchPost(url, data)', 'fetch(url, { method: "POST" })', 'fetch.post(url, data)', 'It automatically detects it'], answer: 'fetch(url, { method: "POST" })' },
      { question: 'What must you do to your JavaScript object before putting it in the `body` of the fetch request?', options: ['Parse it', 'Encrypt it', 'Convert it to a JSON string with JSON.stringify()', 'Put it in an array'], answer: 'Convert it to a JSON string with JSON.stringify()' },
      { question: 'What does the `Content-Type: application/json` header do?', options: ['Makes the internet faster', 'Tells the server what format the incoming body data is in', 'Downloads JSON to the user', 'Nothing, it is optional'], answer: 'Tells the server what format the incoming body data is in' },
      { question: 'If you want to UPDATE existing data instead of creating new data, what HTTP method is conventionally used?', options: ['POST', 'PUT or PATCH', 'UPDATE', 'GET'], answer: 'PUT or PATCH' }
    ],
    interviewQuestions: [
      { q: 'What is a REST API?', a: 'Representational State Transfer. It is a standard architectural style for APIs that uses standard HTTP methods (GET, POST, PUT, DELETE) mapped to CRUD operations (Create, Read, Update, Delete) on resources (URLs).' }
    ],
    summary: ['POST requests send data.', 'Requires a configuration object in `fetch`.', 'Requires Headers and `JSON.stringify` for the body.'],
    references: commonReferences
  }
};
