const commonReferences = [
  { label: 'MDN Web Docs - Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch' },
  { label: 'MDN Web Docs - DOM Manipulation', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents' }
];

export const javascriptContentBatchMissing31 = {
  'js_quiz_application': {
    isStructured: true,
    title: '259. Quiz Application',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'A Quiz Application is a project that tests your ability to handle arrays of objects (the questions), track an index (current question), calculate a score, and dynamically re-render the DOM when the user clicks an answer.',
    whyUseIt: 'It is a fantastic exercise in "State Machine" architecture. The app has distinct states: "Start Screen", "Question X Screen", and "End Screen". Managing transitions between these states is a core skill for any front-end developer.',
    syntax: '// Conceptual project focusing on State Management',
    codeExample: 'const quizData = [\n  { q: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },\n  { q: "Capital of France?", options: ["Rome", "Paris", "Berlin"], answer: "Paris" }\n];\n\nlet currentQuestionIndex = 0;\nlet score = 0;\n\nfunction loadQuestion() {\n  if (currentQuestionIndex >= quizData.length) {\n    return showResults();\n  }\n  \n  const currentQ = quizData[currentQuestionIndex];\n  console.log(`\\nQuestion: ${currentQ.q}`);\n  currentQ.options.forEach((opt, idx) => {\n    console.log(`${idx + 1}: ${opt}`);\n  });\n}\n\nfunction selectAnswer(userAnswer) {\n  const currentQ = quizData[currentQuestionIndex];\n  if (userAnswer === currentQ.answer) {\n    score++;\n    console.log("Correct!");\n  } else {\n    console.log("Wrong!");\n  }\n  \n  currentQuestionIndex++; // Move to next question\n  loadQuestion(); // Re-render\n}\n\nfunction showResults() {\n  console.log(`\\nQuiz Over! You scored ${score} out of ${quizData.length}.`);\n}\n\n// Simulation\nloadQuestion();\nselectAnswer("4");     // User selects correct answer\nselectAnswer("Rome");  // User selects wrong answer',
    expectedOutput: 'Question: What is 2 + 2?\n1: 3\n2: 4\n3: 5\nCorrect!\nQuestion: Capital of France?\n1: Rome\n2: Paris\n3: Berlin\nWrong!\nQuiz Over! You scored 1 out of 2.',
    explanation: [
      { code: 'currentQuestionIndex', desc: 'This is the most critical variable. By simply incrementing this number and re-running `loadQuestion()`, the entire UI updates to show the next piece of data.' },
      { code: 'Data Structure', desc: 'Structuring the data as an array of objects (`{ q, options, answer }`) makes the rendering logic incredibly simple. If you want to add 100 questions, you just add them to the array; you don\'t touch the logic at all.' }
    ],
    realWorldExample: 'Any online test or survey form. They maintain a strict index of what page you are on, validate your input, store your score/responses in memory, and advance the index when you click "Next".',
    commonMistakes: [
      { error: 'Hardcoding HTML for every question', code: 'if (q === 1) showHtml1(); else showHtml2();', suffix: 'Never do this. You should only have ONE generic block of HTML (an `h2` for the question, some `buttons` for answers). You use JavaScript to inject the current data into that generic HTML.' }
    ],
    bestPractices: ['Shuffle the questions! Use `quizData.sort(() => Math.random() - 0.5)` when the app starts so the quiz is different every time.'],
    practiceExercise: {
      task: 'Without coding: What would happen if you forgot to add `currentQuestionIndex++` inside `selectAnswer`?',
      expectedOutput: 'Infinite loop on the first question.',
      solution: 'The user would be stuck on the first question forever. Clicking an answer would just re-render the exact same question.'
    },
    quiz: [
      { question: 'What is the most effective data structure to store the questions for a Quiz App?', options: ['A massive single string', 'An Array of Objects (each containing the question, options, and correct answer)', '50 separate variables', 'A CSS file'], answer: 'An Array of Objects (each containing the question, options, and correct answer)' },
      { question: 'How do you keep track of which question the user is currently on?', options: ['By storing an integer variable (like `currentIndex`) and incrementing it when they answer', 'By deleting the question from the array', 'By checking the HTML', 'By asking the user'], answer: 'By storing an integer variable (like `currentIndex`) and incrementing it when they answer' },
      { question: 'What happens when `currentQuestionIndex` becomes equal to `quizData.length`?', options: ['It crashes', 'It restarts the quiz', 'It means there are no more questions, so you should trigger the `showResults()` function', 'It creates a new question'], answer: 'It means there are no more questions, so you should trigger the `showResults()` function' },
      { question: 'Why is it a bad idea to write a separate HTML file for every single question?', options: ['It is actually a great idea', 'Because it violates the DRY (Don\'t Repeat Yourself) principle. You should have one generic HTML layout and use JS to dynamically swap the text', 'Because HTML is too slow', 'It uses too much CSS'], answer: 'Because it violates the DRY (Don\'t Repeat Yourself) principle. You should have one generic HTML layout and use JS to dynamically swap the text' },
      { question: 'If `quizData.sort(() => Math.random() - 0.5)` is run before the quiz starts, what happens?', options: ['The quiz gets deleted', 'The questions are shown in a randomized, shuffled order', 'All the answers are set to true', 'The text becomes italicized'], answer: 'The questions are shown in a randomized, shuffled order' }
    ],
    interviewQuestions: [
      { q: 'How would you prevent a user from inspecting the HTML to find the correct answer?', a: 'Do not put the correct answer inside the HTML (like `<button data-correct="true">`). Store the correct answers strictly in your JavaScript array. When the user clicks a button, check the button\'s text against the JS array in memory.' }
    ],
    summary: ['Master state transitions.', 'Use arrays of objects for data.', 'Dynamically update one generic HTML layout.'],
    references: commonReferences
  },
  'js_weather_application': {
    isStructured: true,
    title: '260. Weather Application',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A Weather Application is the quintessential project for learning API Integration. It involves taking a user\'s input (a city name), fetching live JSON data from a remote server (like OpenWeatherMap), and displaying it on the screen.',
    whyUseIt: 'It forces you to deal with asynchronous code (`async`/`await`), error handling (what if the user types a city that doesn\'t exist?), and parsing complex, deeply nested JSON responses.',
    syntax: '// Conceptual project focusing on fetch()',
    codeExample: 'async function getWeather(city) {\n  const API_KEY = "YOUR_API_KEY_HERE"; // Never expose this in real production apps if possible\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;\n\n  try {\n    console.log(`Fetching weather for ${city}...`);\n    \n    // 1. Make the network request\n    const response = await fetch(url);\n    \n    // 2. Handle HTTP errors (e.g., 404 City Not Found)\n    if (!response.ok) {\n      throw new Error("City not found or API error.");\n    }\n    \n    // 3. Parse the JSON\n    const data = await response.json();\n    \n    // 4. Extract specific data from the deeply nested JSON object\n    const temp = data.main.temp;\n    const condition = data.weather[0].description;\n    \n    console.log(`Success! It is currently ${temp}°C and ${condition} in ${data.name}.`);\n    \n    // In a real app, update the DOM here\n    // document.getElementById("temp").textContent = temp;\n    \n  } catch (error) {\n    console.error("Failed:", error.message);\n    // In a real app, show a red error message to the user here\n  }\n}\n\n// Simulation (Assume the API key works)\n// getWeather("London");',
    expectedOutput: 'Fetching weather for London...\nSuccess! It is currently 15°C and scattered clouds in London.',
    explanation: [
      { code: 'await fetch(url)', desc: 'The code stops here and waits for the remote server to respond. This might take 50 milliseconds or 5 seconds, depending on the user\'s internet.' },
      { code: 'if (!response.ok)', desc: 'CRITICAL step. `fetch` does not throw an error on 404s (Not Found). You MUST check `response.ok` manually and throw your own error if it is false.' }
    ],
    realWorldExample: 'Virtually every modern web app relies on fetching JSON from a server. Twitter fetching tweets, Netflix fetching movie data, Amazon fetching prices—they all use this exact pattern.',
    commonMistakes: [
      { error: 'Forgetting to parse the JSON', code: 'const data = await fetch(url); console.log(data.main.temp);', suffix: 'The `fetch` command returns a "Response" stream, not a JavaScript object. You MUST run `await response.json()` to convert that stream into a usable JS object before reading properties from it.' }
    ],
    bestPractices: ['Add a loading spinner! Before calling `fetch`, show a spinner in the DOM. In the `finally` block of your try/catch, hide the spinner. This prevents users from thinking the app is frozen while waiting for the network.'],
    practiceExercise: {
      task: 'Without coding: Why do we use a `try...catch` block when fetching data from an API?',
      expectedOutput: 'To handle network failures gracefully.',
      solution: 'Because network requests fail frequently (user loses internet, API server is down, etc.). If you don\'t catch the error, your entire app will crash.'
    },
    quiz: [
      { question: 'What is the main learning objective of building a Weather App?', options: ['CSS Grid', 'Understanding how to fetch and process live JSON data from a third-party API', 'Writing loops', 'Building databases'], answer: 'Understanding how to fetch and process live JSON data from a third-party API' },
      { question: 'What JavaScript keyword is used to pause the function until the API responds with data?', options: ['stop', 'pause', 'await', 'delay'], answer: 'await' },
      { question: 'After getting the `response` from `fetch()`, what is the necessary next step before you can read the data?', options: ['`response.toString()`', '`await response.json()`', '`response.parse()`', 'Nothing, you can read it instantly'], answer: '`await response.json()`' },
      { question: 'Does `fetch()` automatically throw an error if the user searches for a city that doesn\'t exist (resulting in a 404 Not Found)?', options: ['Yes', 'No, you must manually check `if (!response.ok)` and handle it yourself', 'Only in React', 'Sometimes'], answer: 'No, you must manually check `if (!response.ok)` and handle it yourself' },
      { question: 'Why is it important to use a `try...catch` block when making API calls?', options: ['To format the JSON automatically', 'To handle unpredictable network failures (like lost wifi or server downtime) without crashing the app', 'To make the request faster', 'To hide your API key'], answer: 'To handle unpredictable network failures (like lost wifi or server downtime) without crashing the app' }
    ],
    interviewQuestions: [
      { q: 'How do you protect your API key in a front-end application?', a: 'You literally cannot. Any API key shipped to the browser can be stolen via DevTools. The proper way to secure it is to build a small backend server. The front-end asks your backend for weather, and your backend (which securely holds the key) asks the Weather API.' }
    ],
    summary: ['Master `fetch` and JSON.', 'Handle network errors gracefully.', 'Navigate deeply nested object data.'],
    references: commonReferences
  },
  'js_expense_tracker': {
    isStructured: true,
    title: '261. Expense Tracker',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'An Expense Tracker is a project that focuses heavily on Array Methods (`reduce`, `filter`, `map`) to take a raw list of data and calculate totals, balances, and categorized lists dynamically.',
    whyUseIt: 'While a To-Do list just displays data, an Expense Tracker requires you to *process* that data. You must calculate the total income, total expenses, and current balance every time a new transaction is added.',
    syntax: '// Conceptual project focusing on Array Methods',
    codeExample: 'let transactions = [\n  { id: 1, text: "Salary", amount: 5000 },\n  { id: 2, text: "Groceries", amount: -150 },\n  { id: 3, text: "Rent", amount: -1200 }\n];\n\nfunction updateDashboard() {\n  // 1. Calculate Total Balance\n  const balance = transactions.reduce((acc, curr) => acc + curr.amount, 0);\n\n  // 2. Calculate Total Income (only positive numbers)\n  const income = transactions\n    .filter(t => t.amount > 0)\n    .reduce((acc, curr) => acc + curr.amount, 0);\n\n  // 3. Calculate Total Expenses (only negative numbers)\n  const expense = transactions\n    .filter(t => t.amount < 0)\n    .reduce((acc, curr) => acc + curr.amount, 0);\n\n  console.log(`--- DASHBOARD ---`);\n  console.log(`Balance: $${balance}`);\n  console.log(`Income: $${income} | Expenses: $${Math.abs(expense)}`);\n}\n\nfunction addTransaction(text, amount) {\n  transactions.push({ id: Date.now(), text, amount });\n  updateDashboard();\n}\n\n// Simulation\nupdateDashboard();\nconsole.log("\\nUser buys a coffee...");\naddTransaction("Coffee", -5);',
    expectedOutput: '--- DASHBOARD ---\nBalance: $3650\nIncome: $5000 | Expenses: $1350\n\nUser buys a coffee...\n--- DASHBOARD ---\nBalance: $3645\nIncome: $5000 | Expenses: $1355',
    explanation: [
      { code: '.filter(t => t.amount > 0)', desc: 'This elegantly extracts ONLY the income transactions. We then immediately chain `.reduce()` onto it to sum them up.' },
      { code: 'Math.abs(expense)', desc: 'Expenses are stored as negative numbers, but on the dashboard, we want to display "Expenses: $150", not "Expenses: $-150". `Math.abs` converts negative numbers to positive.' }
    ],
    realWorldExample: 'Your banking app. They don\'t store your "Total Balance" in a database. They store a massive array of every transaction you\'ve ever made, and use `.reduce()` (or the database equivalent) to calculate your balance on the fly when you log in.',
    commonMistakes: [
      { error: 'Storing totals in variables manually', code: 'let total = 0; function add(amt) { total += amt; }', suffix: 'If you do this, deleting an expense becomes a nightmare because you have to manually undo the math. The best practice is to have the `transactions` array be the ONLY state, and calculate the totals from scratch every single time using `reduce`.' }
    ],
    bestPractices: ['Store amounts as positive/negative numbers, not as strings. Storing them as negative numbers makes calculating the total balance as simple as a single `.reduce()` call.'],
    practiceExercise: {
      task: 'Without coding: If you delete the "Salary" transaction from the array, how do you update the balance?',
      expectedOutput: 'Just run updateDashboard() again.',
      solution: 'Just run `updateDashboard()`! Because it uses `.reduce()` to recalculate everything from scratch based on the current array, it will automatically fix the balance without any manual math required.'
    },
    quiz: [
      { question: 'What is the most useful array method for summing up all the transaction amounts to find the total balance?', options: ['.map()', '.reduce()', '.filter()', '.sort()'], answer: '.reduce()' },
      { question: 'How do you extract ONLY the expenses from an array of mixed transactions?', options: ['By looping manually', 'By using `.filter(t => t.amount < 0)`', 'By using `.map()`', 'By using `.slice()`'], answer: 'By using `.filter(t => t.amount < 0)`' },
      { question: 'Why is it better to recalculate the totals from the array every time, rather than keeping a separate `let total = 0` variable and modifying it?', options: ['It isn\'t better', 'It prevents bugs. If you delete or edit a past transaction, recalculating the whole array guarantees the total is 100% accurate, whereas manually updating a variable is prone to errors', 'It makes the code run faster', 'It saves memory'], answer: 'It prevents bugs. If you delete or edit a past transaction, recalculating the whole array guarantees the total is 100% accurate, whereas manually updating a variable is prone to errors' },
      { question: 'What does `Math.abs(-50)` return?', options: ['-50', '0', '50 (the absolute positive value)', 'undefined'], answer: '50 (the absolute positive value)' },
      { question: 'If you want to chain methods to find the total income, what does the syntax look like?', options: ['transactions.reduce().filter()', 'transactions.filter(t => t.amount > 0).reduce(...)', 'transactions.map().reduce()', 'transactions.sort().filter()'], answer: 'transactions.filter(t => t.amount > 0).reduce(...)' }
    ],
    interviewQuestions: [
      { q: 'How would you handle decimal precision issues with currency in JavaScript (e.g., $10.10 + $10.20 = $20.2999999)?', a: 'Never store currency as floats in JavaScript. Always store currency in the lowest common denominator (e.g., Cents). Store $10.10 as `1010`. Do all math using integers, and only divide by 100 right before rendering it to the UI.' }
    ],
    summary: ['Master `.reduce()` and `.filter()`.', 'Calculate totals dynamically.', 'Store currency carefully.'],
    references: commonReferences
  },
  'js_notes_application': {
    isStructured: true,
    title: '262. Notes Application',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'A Notes Application is an expansion on the basic To-Do list, focusing heavily on `localStorage` for persistence, and often introducing concepts like editing existing data and handling multiple fields (Title and Body).',
    whyUseIt: 'It solidifies your understanding of Web Storage. Users expect apps to remember their data. Without a database, `localStorage` is the only way to save a user\'s notes so they survive a browser refresh.',
    syntax: '// Conceptual project focusing on localStorage',
    codeExample: 'let notes = JSON.parse(localStorage.getItem("myNotes")) || [];\n\nfunction saveNotes() {\n  localStorage.setItem("myNotes", JSON.stringify(notes));\n  renderNotes();\n}\n\nfunction addNote(title, body) {\n  const newNote = {\n    id: Date.now(),\n    title: title,\n    body: body,\n    lastEdited: new Date().toLocaleDateString()\n  };\n  notes.push(newNote);\n  saveNotes();\n}\n\nfunction editNote(id, newTitle, newBody) {\n  const note = notes.find(n => n.id === id);\n  if (note) {\n    note.title = newTitle;\n    note.body = newBody;\n    note.lastEdited = new Date().toLocaleDateString();\n    saveNotes();\n  }\n}\n\nfunction renderNotes() {\n  console.log(`\\n--- You have ${notes.length} saved notes ---`);\n  notes.forEach(note => {\n    console.log(`[${note.title}] - ${note.body} (Edited: ${note.lastEdited})`);\n  });\n}\n\n// Simulation\naddNote("Grocery List", "Milk, Eggs, Bread");\naddNote("Idea", "Build a startup");\neditNote(notes[0].id, "Grocery List", "Milk, Eggs, Bread, Butter!");',
    expectedOutput: '\n--- You have 1 saved notes ---\n[Grocery List] - Milk, Eggs, Bread (Edited: ...)\n\n--- You have 2 saved notes ---\n[Grocery List] - Milk, Eggs, Bread (Edited: ...)\n[Idea] - Build a startup (Edited: ...)\n\n--- You have 2 saved notes ---\n[Grocery List] - Milk, Eggs, Bread, Butter! (Edited: ...)\n[Idea] - Build a startup (Edited: ...)',
    explanation: [
      { code: 'JSON.stringify(notes)', desc: 'localStorage can ONLY store text. You must convert your array of objects into a JSON string before saving it.' },
      { code: 'notes.find(n => n.id === id)', desc: 'The most reliable way to edit an object. You search the array for the exact ID, modify the object directly, and then overwrite localStorage with the updated array.' }
    ],
    realWorldExample: 'Google Keep. It is essentially this exact app, just saving the JSON string to a cloud database instead of your local browser storage.',
    commonMistakes: [
      { error: 'Forgetting JSON.parse', code: 'let notes = localStorage.getItem("notes"); notes.push(obj);', suffix: 'This will crash! `getItem` returns a STRING. You cannot `.push()` to a string. You must use `JSON.parse()` to turn it back into a real JavaScript array first.' }
    ],
    bestPractices: ['Wrap your `JSON.parse` in a `try...catch` block. If the data in localStorage gets corrupted and isn\'t valid JSON, `parse` will throw a fatal error and crash your whole app.'],
    practiceExercise: {
      task: 'Without coding: What is the purpose of `|| []` in the first line of the code example?',
      expectedOutput: 'Provides a default value if localStorage is empty.',
      solution: 'If the user visits the site for the first time, `getItem` returns `null`. `JSON.parse(null)` is `null`. The `|| []` ensures that if it is null, the `notes` variable starts as an empty array instead of crashing.'
    },
    quiz: [
      { question: 'What is the primary feature of a Notes App that makes it different from a basic Counter app?', options: ['It uses CSS', 'It uses `localStorage` to persist data so it survives a page refresh', 'It is faster', 'It uses the `fetch` API'], answer: 'It uses `localStorage` to persist data so it survives a page refresh' },
      { question: 'Why must you use `JSON.stringify` when saving an array to `localStorage`?', options: ['To encrypt it', 'Because `localStorage` can only accept Strings, not JavaScript Arrays or Objects', 'To make it run faster', 'To compress the file size'], answer: 'Because `localStorage` can only accept Strings, not JavaScript Arrays or Objects' },
      { question: 'What happens if you try to `localStorage.setItem("data", [1, 2, 3])` without stringifying it?', options: ['It works perfectly', 'JavaScript implicitly converts it to a useless string like `"1,2,3"` losing all array structure', 'It crashes the browser', 'It creates a database'], answer: 'JavaScript implicitly converts it to a useless string like `"1,2,3"` losing all array structure' },
      { question: 'Why is `notes.find(n => n.id === id)` used when editing a note?', options: ['To delete it', 'To locate the exact specific note object in the array so you can modify its properties', 'To duplicate it', 'To sort the array'], answer: 'To locate the exact specific note object in the array so you can modify its properties' },
      { question: 'What does `JSON.parse(localStorage.getItem("notes")) || []` do?', options: ['Deletes the notes', 'Attempts to load the saved notes, but defaults to an empty array `[]` if no notes exist yet', 'Creates an infinite loop', 'Throws an error'], answer: 'Attempts to load the saved notes, but defaults to an empty array `[]` if no notes exist yet' }
    ],
    interviewQuestions: [
      { q: 'What is the storage limit of `localStorage`, and what happens if you exceed it?', a: 'Most browsers limit `localStorage` to about 5MB per domain. If you try to save a massive string that exceeds this limit, the browser will throw a `QuotaExceededError`. You should always wrap `setItem` in a try/catch if dealing with large amounts of user text.' }
    ],
    summary: ['Master Web Storage (localStorage).', 'Always parse and stringify data.', 'Use unique IDs for editing.'],
    references: commonReferences
  },
  'js_movie_search_application': {
    isStructured: true,
    title: '263. Movie Search Application',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A Movie Search App combines input forms, event listeners, API fetching (e.g., using OMDB or TMDB API), and dynamic DOM generation to create a fully functional search engine.',
    whyUseIt: 'It introduces the concept of "Query Parameters". Instead of just fetching a static URL, you must read what the user typed, inject that text into the URL, fetch the resulting data, and build a grid of images dynamically.',
    syntax: '// Conceptual project focusing on dynamic fetch requests',
    codeExample: 'async function searchMovies(query) {\n  if (!query) return;\n  \n  // Example URL using OMDB API. The \'s\' parameter stands for search.\n  const API_KEY = "demo_key"; // Fictional key\n  const url = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;\n  \n  try {\n    console.log(`Searching database for: "${query}"...`);\n    const response = await fetch(url);\n    const data = await response.json();\n    \n    // 1. Check if the API returned an error (e.g., "Movie not found!")\n    if (data.Response === "False") {\n      console.log(`Error: ${data.Error}`);\n      return;\n    }\n    \n    // 2. The API returns an array of movies under the "Search" property\n    const movies = data.Search;\n    \n    console.log(`Found ${movies.length} results:`);\n    // 3. Loop through and "render" them\n    movies.forEach(movie => {\n      console.log(`- ${movie.Title} (${movie.Year})`);\n    });\n    \n  } catch (error) {\n    console.error("Network error occurred.");\n  }\n}\n\n// Simulation\nsearchMovies("Batman");',
    expectedOutput: 'Searching database for: "Batman"...\nFound 10 results:\n- Batman Begins (2005)\n- The Batman (2022)\n- ...',
    explanation: [
      { code: '?s=${query}', desc: 'This is a Query Parameter. By injecting the user\'s typed text into the URL string, we tell the remote server exactly what to search its database for.' },
      { code: 'data.Response === "False"', desc: 'Many APIs return a 200 OK HTTP status even if the search failed, but include a custom error message inside the JSON. You must read the API documentation carefully to know how to handle these custom errors.' }
    ],
    realWorldExample: 'Amazon search. When you type "Shoes" and hit enter, it injects "Shoes" into a URL query parameter, sends it to the server, and the server replies with an array of shoe objects to render.',
    commonMistakes: [
      { error: 'Not encoding the query', code: '`?s=${query}`', suffix: 'If the user searches for "Spider Man" (with a space), it might break the URL. You should ideally use `encodeURIComponent(query)` to safely convert spaces to `%20` so the URL remains valid.' }
    ],
    bestPractices: ['Implement "Debouncing" on the search input. If the user types quickly, you don\'t want to fire a network request for every single letter ("B", "Ba", "Bat"). Debouncing forces the app to wait until the user stops typing for 500ms before firing the `fetch`.'],
    practiceExercise: {
      task: 'Without coding: If you want to search for "Iron Man", why is the URL `?s=Iron Man` potentially bad?',
      expectedOutput: 'Spaces break URLs.',
      solution: 'URLs cannot contain raw spaces. It needs to be encoded to `?s=Iron%20Man`.'
    },
    quiz: [
      { question: 'What is the purpose of injecting the user\'s input into the URL (e.g., `?s=${query}`)?', options: ['To encrypt the URL', 'To pass the search term to the API server via Query Parameters so it knows what to look for', 'To style the page', 'To speed up the network'], answer: 'To pass the search term to the API server via Query Parameters so it knows what to look for' },
      { question: 'Why might an API return a successful HTTP status, but still fail to find the movie?', options: ['It is a bug', 'Because the network request succeeded, but the internal database search found zero results. The API will usually return a custom JSON property like `Response: "False"` to indicate this', 'Because APIs are fake', 'Because of CSS'], answer: 'Because the network request succeeded, but the internal database search found zero results. The API will usually return a custom JSON property like `Response: "False"` to indicate this' },
      { question: 'What JavaScript function should you use to safely encode user input (like spaces) before putting it into a URL?', options: ['String.safe()', 'JSON.stringify()', 'encodeURIComponent()', 'URL.fix()'], answer: 'encodeURIComponent()' },
      { question: 'What is "Debouncing" in the context of a search bar?', options: ['Making the text bounce on screen', 'Delaying the `fetch` request until the user stops typing for a moment, preventing 10 API calls from firing while they type a 10-letter word', 'Deleting old search results', 'Encrypting the keyboard input'], answer: 'Delaying the `fetch` request until the user stops typing for a moment, preventing 10 API calls from firing while they type a 10-letter word' },
      { question: 'When the API returns an array of 10 movies, what is the best way to render them?', options: ['Write 10 separate `if` statements', 'Use a `.forEach()` or `.map()` loop to iterate over the array and generate identical HTML for each movie dynamically', 'Only show the first one', 'Use a `while` loop'], answer: 'Use a `.forEach()` or `.map()` loop to iterate over the array and generate identical HTML for each movie dynamically' }
    ],
    interviewQuestions: [
      { q: 'How would you handle displaying Images from the API if some movies don\'t have a poster (returning "N/A")?', a: 'Inside the loop, I would use a ternary operator: `const imageSrc = movie.Poster === "N/A" ? "placeholder.png" : movie.Poster;` to ensure a broken image icon doesn\'t appear.' }
    ],
    summary: ['Master URL Query Parameters.', 'Handle empty search results.', 'Dynamically render arrays of data.'],
    references: commonReferences
  }
};
