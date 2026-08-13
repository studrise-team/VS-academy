const commonReferences = [
  { label: 'MDN Web Docs - Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch' },
  { label: 'MDN Web Docs - Window.localStorage', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage' }
];

export const javascriptContentBatchMissing24 = {
  'js_sending_get_requests': {
    isStructured: true,
    title: '215. Sending GET Requests',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Sending a GET request via the `fetch()` API is the standard way to read data from a server in JavaScript. Because GET is the default method for `fetch()`, you only need to provide the URL.',
    whyUseIt: 'You use it to download JSON data (like a list of movies, weather forecasts, or a user profile) so you can dynamically display it on your webpage without needing to refresh the browser.',
    syntax: 'const response = await fetch("https://api.example.com/data");\nconst data = await response.json();',
    codeExample: 'async function getRandomJoke() {\n  try {\n    // 1. Send the GET request to the Joke API\n    // (GET is default, so no { method: "GET" } is needed)\n    const response = await fetch("https://official-joke-api.appspot.com/random_joke");\n    \n    // 2. Check for HTTP errors (e.g., 404 Not Found)\n    if (!response.ok) {\n      throw new Error("Could not fetch the joke!");\n    }\n    \n    // 3. Parse the JSON text into a JavaScript Object\n    const joke = await response.json();\n    \n    // 4. Use the data!\n    console.log(`Setup: ${joke.setup}`);\n    console.log(`Punchline: ${joke.punchline}`);\n    \n  } catch (error) {\n    // 5. Handle network errors or the 404 we threw above\n    console.error("Oops:", error.message);\n  }\n}',
    expectedOutput: 'Setup: Why do programmers prefer dark mode?\nPunchline: Because light attracts bugs.',
    explanation: [
      { code: 'fetch(url)', desc: 'Initiates the HTTP GET request.' },
      { code: 'if (!response.ok)', desc: 'Crucial for catching 400 and 500 level errors, since `fetch` only rejects on network failures.' }
    ],
    realWorldExample: 'Loading a product catalog on an eCommerce site. When the page loads, a GET request is fired to `/api/products` and the resulting array is used to render the item cards.',
    commonMistakes: [
      { error: 'Trying to pass data in the body', code: 'fetch(url, { method: "GET", body: JSON.stringify(data) })', suffix: 'GET requests cannot have a body. If you need to send data (like a search term), you must put it in the URL as a query string: `fetch(url + "?search=cats")`.' }
    ],
    bestPractices: ['Always handle potential errors. Network requests are fragile; the user might be on a train and lose cell service exactly when the request is sent.'],
    practiceExercise: {
      task: 'Write a basic async function `getUsers()` that fetches from `https://jsonplaceholder.typicode.com/users` and logs the resulting array.',
      expectedOutput: 'Logs an array of user objects.',
      solution: 'async function getUsers() { const res = await fetch("https://jsonplaceholder.typicode.com/users"); const data = await res.json(); console.log(data); }'
    },
    quiz: [
      { question: 'What is the default HTTP method when using `fetch(url)`?', options: ['POST', 'GET', 'PUT', 'DELETE'], answer: 'GET' },
      { question: 'What is the purpose of `await response.json()`?', options: ['To convert the JavaScript object into a string', 'To parse the raw JSON text from the server into a usable JavaScript object', 'To check if the response was a 200 OK', 'To encrypt the data'], answer: 'To parse the raw JSON text from the server into a usable JavaScript object' },
      { question: 'If you want to send a search parameter to the server in a GET request, where does it go?', options: ['In the request body', 'In a separate POST request', 'Directly in the URL as a query string (e.g., `?q=searchterm`)', 'In the headers'], answer: 'Directly in the URL as a query string (e.g., `?q=searchterm`)' },
      { question: 'When does `fetch()` throw an error (reject its Promise) automatically?', options: ['When it gets a 404 Not Found', 'When it gets a 500 Server Error', 'Only on an actual network failure (like the wifi disconnecting)', 'Whenever the JSON is empty'], answer: 'Only on an actual network failure (like the wifi disconnecting)' },
      { question: 'How do you manually check if the server returned a successful status code (200-299)?', options: ['if (response.success)', 'if (response.ok)', 'if (response.status === "good")', 'if (response.isDone)'], answer: 'if (response.ok)' }
    ],
    interviewQuestions: [
      { q: 'Is it possible to abort a fetch request that is taking too long?', a: 'Yes! You can use the `AbortController` API. You create a new controller, pass its `signal` into the fetch options object, and then call `controller.abort()` to cancel the request.' }
    ],
    summary: ['Used to retrieve data.', 'GET is the default for fetch.', 'Always check `response.ok`.'],
    references: commonReferences
  },
  'js_sending_post_requests': {
    isStructured: true,
    title: '216. Sending POST Requests',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'Sending a POST request via the `fetch()` API allows you to send new data to the server to be created or processed. Unlike GET, POST requests require a configuration object to specify the method, headers, and the data payload (body).',
    whyUseIt: 'You must use POST anytime you submit a form, create a new user account, upload a file, or send sensitive data (like a password) that should not be visible in the URL.',
    syntax: 'fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });',
    codeExample: 'async function createPost() {\n  // 1. The data we want to send to the server\n  const newPost = {\n    title: "My First Blog Post",\n    content: "Learning JavaScript is fun!",\n    authorId: 42\n  };\n\n  try {\n    // 2. The fetch call with the configuration object\n    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {\n      method: "POST", // Specify the method\n      headers: {\n        // Tell the server we are sending JSON data\n        "Content-Type": "application/json"\n      },\n      // Convert our JS object into a JSON string\n      body: JSON.stringify(newPost) \n    });\n\n    if (!response.ok) throw new Error("Failed to create post");\n\n    // 3. The server usually returns the newly created object (including its new ID)\n    const savedPost = await response.json();\n    console.log("Successfully saved! New ID:", savedPost.id);\n    \n  } catch (error) {\n    console.error(error.message);\n  }\n}',
    expectedOutput: 'Successfully saved! New ID: 101',
    explanation: [
      { code: 'method: "POST"', desc: 'Overrides the default GET behavior.' },
      { code: '"Content-Type": "application/json"', desc: 'Without this, the server might think you are sending plain text or HTML and fail to parse your data.' },
      { code: 'JSON.stringify(newPost)', desc: 'Crucial! You cannot send a raw JavaScript object over the network.' }
    ],
    realWorldExample: 'A "Contact Us" form. When the user clicks Submit, a POST request is fired containing `{ name, email, message }`, and the server receives it and triggers an email to the admin.',
    commonMistakes: [
      { error: 'Forgetting JSON.stringify()', code: 'body: newPost', suffix: 'If you just pass the object, JavaScript will implicitly call `.toString()` on it, sending the useless string `"[object Object]"` to the server.' }
    ],
    bestPractices: ['Always expect the server to return the created object. A good REST API will generate a unique ID for your new data and send the complete object back to you in the response.'],
    practiceExercise: {
      task: 'Without writing the full `fetch`, write just the options object `{ ... }` required to send a POST request with the data `{ score: 100 }`.',
      expectedOutput: 'An object with method, headers, and body.',
      solution: '{ method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ score: 100 }) }'
    },
    quiz: [
      { question: 'When must you use a POST request instead of a GET request?', options: ['When fetching a list of items', 'When sending new data to the server to be created/saved', 'When updating a single field', 'When deleting data'], answer: 'When sending new data to the server to be created/saved' },
      { question: 'What happens if you forget to `JSON.stringify` the body in a fetch POST request?', options: ['The server fixes it automatically', 'The data is sent as the string `"[object Object]"`, causing a server error', 'It sends HTML', 'It crashes the browser'], answer: 'The data is sent as the string `"[object Object]"`, causing a server error' },
      { question: 'Why is the `Content-Type: application/json` header important?', options: ['It encrypts the data', 'It tells the server how to interpret and parse the data string you are sending', 'It compresses the data', 'It speeds up the wifi'], answer: 'It tells the server how to interpret and parse the data string you are sending' },
      { question: 'What does a well-designed REST API usually return in the response after a successful POST request?', options: ['An empty string', 'A boolean `true`', 'The newly created object, usually including its newly generated ID', 'An HTML page'], answer: 'The newly created object, usually including its newly generated ID' },
      { question: 'Can POST requests send data visibly in the URL like GET requests can?', options: ['Yes, always', 'No, POST data is securely tucked inside the request "body" and not visible in the URL', 'Only in strict mode', 'Only if it is a short string'], answer: 'No, POST data is securely tucked inside the request "body" and not visible in the URL' }
    ],
    interviewQuestions: [
      { q: 'Can you send things other than JSON in a POST request?', a: 'Yes! `application/json` is just the most common. You can send `multipart/form-data` (used for uploading images/files), `application/x-www-form-urlencoded` (standard HTML forms), or even plain text.' }
    ],
    summary: ['Used to SEND/CREATE data.', 'Requires `method`, `headers`, and `body`.', 'Always `JSON.stringify()` your data.'],
    references: commonReferences
  },
  'js_loading_states': {
    isStructured: true,
    title: '218. Loading States',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A Loading State is a UI (User Interface) pattern used to visually indicate to the user that an asynchronous operation (like a `fetch()` request) is currently happening in the background.',
    whyUseIt: 'If you click a button to load data and the screen does nothing for 3 seconds, users will think the app is broken and click the button 10 more times. Showing a loading spinner or skeleton prevents this frustration.',
    syntax: '// Pseudo-code concept:\n// 1. isLoading = true\n// 2. Show spinner on screen\n// 3. fetch(data)\n// 4. isLoading = false\n// 5. Hide spinner, show data',
    codeExample: 'const button = document.getElementById("loadBtn");\nconst content = document.getElementById("content");\n\nasync function loadUserData() {\n  // 1. SET LOADING STATE\n  button.disabled = true;\n  button.innerText = "Loading...";\n  content.innerHTML = "<div class=\'spinner\'></div>";\n\n  try {\n    // 2. DO THE ASYNC WORK\n    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");\n    const user = await res.json();\n    \n    // 3. SHOW THE DATA\n    content.innerHTML = `<h2>${user.name}</h2>`;\n  } catch (error) {\n    // SHOW ERROR STATE\n    content.innerHTML = `<p class="error">Failed to load data.</p>`;\n  } finally {\n    // 4. REMOVE LOADING STATE (Runs whether success or failure!)\n    button.disabled = false;\n    button.innerText = "Load User";\n  }\n}',
    expectedOutput: 'The button becomes unclickable and says "Loading..." while the spinner shows. When finished, the data appears and the button returns to normal.',
    explanation: [
      { code: 'button.disabled = true', desc: 'Crucial! This prevents the user from clicking the button multiple times and firing off 10 duplicate network requests.' },
      { code: 'finally { ... }', desc: 'The `finally` block is perfect for turning off loading states, because it is guaranteed to run whether the `try` block succeeded or the `catch` block caught an error.' }
    ],
    realWorldExample: 'YouTube "Skeleton Screens". When you open YouTube, before the thumbnails load, you see grey flashing boxes where the videos will eventually be. This is a highly polished loading state.',
    commonMistakes: [
      { error: 'Forgetting to reset the loading state on error', code: '', suffix: 'If your fetch fails and jumps to the `catch` block, but your code to hide the spinner is at the bottom of the `try` block, the spinner will spin forever! Always use `finally` to hide spinners.' }
    ],
    bestPractices: ['Never assume a network request is "fast enough" to skip a loading state. Networks are unpredictable. Always provide visual feedback.'],
    practiceExercise: {
      task: 'Without coding: What keyword is used in a try/catch block to execute code (like hiding a spinner) regardless of whether the fetch succeeded or failed?',
      expectedOutput: 'finally',
      solution: 'finally'
    },
    quiz: [
      { question: 'Why is it important to implement Loading States in JavaScript?', options: ['To make the code run faster', 'To provide visual feedback to the user so they know the app isn\'t frozen while waiting for network requests', 'To encrypt data', 'To fix CSS bugs'], answer: 'To provide visual feedback to the user so they know the app isn\'t frozen while waiting for network requests' },
      { question: 'What is a critical action to take on a "Submit" button while a POST request is loading?', options: ['Change its color to red', 'Delete it from the DOM', 'Disable it (`button.disabled = true`) to prevent the user from clicking it 10 times and sending duplicate requests', 'Nothing'], answer: 'Disable it (`button.disabled = true`) to prevent the user from clicking it 10 times and sending duplicate requests' },
      { question: 'Which block in a `try...catch` statement is the best place to put the code that turns OFF the loading state?', options: ['At the very top of `try`', 'At the bottom of `catch`', 'In the `finally` block, because it is guaranteed to run regardless of success or failure', 'Outside the function'], answer: 'In the `finally` block, because it is guaranteed to run regardless of success or failure' },
      { question: 'What happens if a fetch fails, and you put `isLoading = false` at the very end of your `try` block?', options: ['It works fine', 'The `try` block aborts early on the error, jumping to `catch`, so `isLoading` stays true forever and the spinner never stops', 'It crashes the server', 'It automatically runs'], answer: 'The `try` block aborts early on the error, jumping to `catch`, so `isLoading` stays true forever and the spinner never stops' },
      { question: 'What is a "Skeleton Screen"?', options: ['A spooky Halloween theme', 'A modern loading state that shows grey outlines/boxes of where the content will be, instead of a spinning circle', 'A wireframe tool', 'A database schema'], answer: 'A modern loading state that shows grey outlines/boxes of where the content will be, instead of a spinning circle' }
    ],
    interviewQuestions: [
      { q: 'How would you handle a loading state in a modern framework like React?', a: 'You would use a state variable, e.g., `const [isLoading, setIsLoading] = useState(false);`. You set it to true before the fetch, false in a `finally` block, and use conditional rendering in your JSX: `{isLoading ? <Spinner /> : <Data />}`.' }
    ],
    summary: ['Provides visual feedback during async tasks.', 'Disable buttons to prevent duplicate clicks.', 'Use `finally` to hide the spinner.'],
    references: commonReferences
  },
  'js_building_an_api_based_project': {
    isStructured: true,
    title: '219. Building an API-Based Project',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'An API-Based project is a web application where the frontend (HTML/CSS/JS) contains no hardcoded data. Instead, it relies entirely on fetching dynamic data from an external API and rendering it into the DOM.',
    whyUseIt: 'This is how 99% of modern web applications (like Twitter, Netflix, and Amazon) are built. The frontend is just an empty shell that fetches data and displays it.',
    syntax: '// Conceptual Workflow:\n// 1. Setup HTML shell\n// 2. Fetch data (GET)\n// 3. Loop over data\n// 4. Create DOM elements & append',
    codeExample: '<!-- index.html -->\n<div id="movie-container"></div>\n\n// script.js\nconst container = document.getElementById("movie-container");\n\nasync function renderMovies() {\n  container.innerHTML = "Loading movies..."; // Loading State\n\n  try {\n    // 1. Fetch the data\n    const res = await fetch("https://dummyapi.online/api/movies");\n    const movies = await res.json();\n\n    // Clear the loading text\n    container.innerHTML = "";\n\n    // 2. Loop over the array of data\n    movies.forEach(movie => {\n      // 3. Create a new DOM element for each item\n      const card = document.createElement("div");\n      card.className = "movie-card";\n      \n      // 4. Populate with dynamic data\n      card.innerHTML = `\n        <h3>${movie.movie}</h3>\n        <p>Rating: ${movie.rating}</p>\n      `;\n\n      // 5. Append to the page\n      container.appendChild(card);\n    });\n\n  } catch (err) {\n    container.innerHTML = "Error loading movies.";\n  }\n}\n\n// Run on page load\nrenderMovies();',
    expectedOutput: 'The page starts with "Loading...", then dynamically populates with multiple movie cards fetched from the internet.',
    explanation: [
      { code: 'movies.forEach(...)', desc: 'The most critical pattern in API projects: Fetching an array of data, looping over it, and generating identical HTML structures for every item in the array.' },
      { code: 'document.createElement', desc: 'We build the HTML dynamically in JavaScript, rather than hardcoding it in the `.html` file.' }
    ],
    realWorldExample: 'A Weather App. You have an empty HTML page with an input box. User types "London", you fetch the London data from a Weather API, and inject the temperature and a sun/cloud icon into the DOM.',
    commonMistakes: [
      { error: 'Appending inside the loop inefficiently', code: 'container.innerHTML += "<div>...</div>"', suffix: 'Using `innerHTML +=` inside a loop forces the browser to re-parse and redraw the ENTIRE container every single iteration. It is much better to use `createElement` and `appendChild`, or build a massive string first and set `innerHTML` only ONCE at the end.' }
    ],
    bestPractices: ['Separate your concerns! Have one function strictly responsible for `fetching` the data, and a completely separate function responsible for `rendering` the data to the DOM. This keeps your code clean.'],
    practiceExercise: {
      task: 'Without coding: What are the 3 main steps to rendering a list of API data on the screen?',
      expectedOutput: 'Fetch, Loop, Append.',
      solution: '1. Fetch the data. 2. Loop over the array. 3. Create and append DOM elements for each item.'
    },
    quiz: [
      { question: 'What defines an "API-Based Project" on the frontend?', options: ['The data is hardcoded into the HTML', 'The frontend relies entirely on fetching dynamic data from an external server to populate the UI', 'It does not use JavaScript', 'It only works offline'], answer: 'The frontend relies entirely on fetching dynamic data from an external server to populate the UI' },
      { question: 'If an API returns an array of 50 users, what JavaScript array method is most commonly used to generate HTML for all of them?', options: ['splice()', 'push()', 'forEach() or map()', 'reduce()'], answer: 'forEach() or map()' },
      { question: 'Why is it a bad idea to use `container.innerHTML += ...` inside a loop with 1000 items?', options: ['It will cause a syntax error', 'It forces the browser to completely wipe and redraw the DOM 1000 times, destroying performance', 'It deletes the container', 'It is actually the best way'], answer: 'It forces the browser to completely wipe and redraw the DOM 1000 times, destroying performance' },
      { question: 'What is a better alternative to `innerHTML +=` inside a loop?', options: ['Using `document.createElement()` and `appendChild()`', 'Using `alert()`', 'Using `console.log()`', 'You shouldn\'t use loops'], answer: 'Using `document.createElement()` and `appendChild()`' },
      { question: 'Why is it considered a "Best Practice" to separate your `fetch` logic from your `render` logic?', options: ['Because `fetch` doesn\'t work otherwise', 'It keeps the code modular, readable, and easier to test or debug', 'Because HTML requires it', 'Because of CSS specificity'], answer: 'It keeps the code modular, readable, and easier to test or debug' }
    ],
    interviewQuestions: [
      { q: 'What is a DocumentFragment and how does it help performance in an API project?', a: 'A `DocumentFragment` is a lightweight, invisible DOM node. Instead of appending 100 items to the live DOM one by one (causing 100 repaints), you append all 100 items to the fragment, and then append the fragment to the DOM ONCE. It is a massive performance boost.' }
    ],
    summary: ['Fetch the data.', 'Loop over the array.', 'Dynamically generate and append DOM elements.'],
    references: commonReferences
  },
  'js_localstorage': {
    isStructured: true,
    title: '220. localStorage',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`localStorage` is a built-in browser API that allows you to save key/value pairs in the user\'s web browser. Data saved in `localStorage` persists even if the user closes the browser tab or restarts their computer.',
    whyUseIt: 'It is perfect for saving user preferences (like "Dark Mode"), shopping cart items for guest users, or high scores in a web game, without needing a backend database.',
    syntax: 'localStorage.setItem("key", "value");\nconst val = localStorage.getItem("key");',
    codeExample: '// 1. Saving Data\n// Parameters: ("key_name", "value")\nlocalStorage.setItem("theme", "dark");\nlocalStorage.setItem("username", "Alice");\n\n// 2. Retrieving Data\nconst currentTheme = localStorage.getItem("theme");\nconsole.log(currentTheme); // "dark"\n\n// 3. Removing a specific item\nlocalStorage.removeItem("username");\n\n// 4. Clearing EVERYTHING in localStorage for this domain\n// localStorage.clear();',
    expectedOutput: 'Data is saved directly into the browser\'s memory and can be retrieved instantly.',
    explanation: [
      { code: 'setItem / getItem', desc: 'The two primary methods. You always set data using a unique string "key", and you retrieve it later using that exact same "key".' },
      { code: 'Strings Only', desc: '`localStorage` can ONLY store strings. If you try to save a number, it is converted to a string. If you want to save objects or arrays, you must stringify them first!' }
    ],
    realWorldExample: 'A "Dark Mode" toggle switch. When the user clicks it, you run `localStorage.setItem("mode", "dark")`. The next day, when they visit your site, your JavaScript checks `localStorage.getItem("mode")` on page load and immediately applies the dark theme.',
    commonMistakes: [
      { error: 'Trying to save an object directly', code: 'localStorage.setItem("user", { name: "Bob" })', suffix: 'Because localStorage only accepts strings, JavaScript will convert the object into the literal string `"[object Object]"`. When you try to retrieve it later, all your data is gone. You MUST use JSON.stringify() first (covered in the next topic!).' }
    ],
    bestPractices: ['Never store sensitive information (like passwords, API keys, or credit card numbers) in `localStorage`. It is not encrypted and can be easily accessed by malicious scripts (XSS attacks).'],
    practiceExercise: {
      task: 'Write a line of code to save a high score of "999" under the key "highscore", and a second line to retrieve it into a variable called `score`.',
      expectedOutput: 'Uses setItem and getItem.',
      solution: 'localStorage.setItem("highscore", "999"); const score = localStorage.getItem("highscore");'
    },
    quiz: [
      { question: 'What is `localStorage` used for?', options: ['To save data on a backend server', 'To save key/value pairs locally in the user\'s browser that persist even after closing the tab', 'To encrypt passwords', 'To clear the cache'], answer: 'To save key/value pairs locally in the user\'s browser that persist even after closing the tab' },
      { question: 'What data type is `localStorage` restricted to storing?', options: ['Objects', 'Arrays', 'Strings only', 'Numbers'], answer: 'Strings only' },
      { question: 'Which method is used to retrieve a value from `localStorage`?', options: ['localStorage.fetch("key")', 'localStorage.getItem("key")', 'localStorage.read("key")', 'localStorage.pull("key")'], answer: 'localStorage.getItem("key")' },
      { question: 'If you want to delete just ONE specific item from `localStorage`, which method do you use?', options: ['localStorage.clear()', 'localStorage.deleteItem("key")', 'localStorage.removeItem("key")', 'localStorage.destroy("key")'], answer: 'localStorage.removeItem("key")' },
      { question: 'Is it safe to store a user\'s password or credit card in `localStorage`?', options: ['Yes, it is highly encrypted', 'No, it is easily accessible by anyone with access to the browser and vulnerable to XSS attacks', 'Only if you use strict mode', 'Only on HTTPS sites'], answer: 'No, it is easily accessible by anyone with access to the browser and vulnerable to XSS attacks' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `localStorage` and `sessionStorage`?', a: 'They have the exact same API (setItem, getItem). The difference is lifespan: `localStorage` persists forever until manually deleted, whereas `sessionStorage` is automatically cleared the moment the user closes that specific browser tab.' }
    ],
    summary: ['Saves data in the browser.', 'Persists after closing the tab.', 'Can ONLY store strings.'],
    references: commonReferences
  }
};
