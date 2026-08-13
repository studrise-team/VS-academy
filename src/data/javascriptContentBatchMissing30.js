const commonReferences = [
  { label: 'MDN Web Docs - import()', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import' }
];

export const javascriptContentBatchMissing30 = {
  'js_dynamic_imports': {
    isStructured: true,
    title: '253. Dynamic Imports',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'Dynamic Imports allow you to load JavaScript modules asynchronously and on-demand (only when they are actually needed), rather than forcing the browser to download all the code at the very beginning when the page first loads.',
    whyUseIt: 'It dramatically improves the initial loading speed of your website. If your app has a massive "Video Editor" feature that is 5 Megabytes of code, but only 10% of users click it, you shouldn\'t force 100% of users to download it. You dynamically import it only *when* the user clicks the button.',
    syntax: 'import("./module.js").then((module) => { ... });\n\n// Or with async/await\nconst module = await import("./module.js");',
    codeExample: '// Standard (Static) Import - Forces the browser to load this immediately\n// import { loadChart } from "./heavyChartLibrary.js";\n\nconst btn = document.getElementById("showChartBtn");\n\nbtn.addEventListener("click", async () => {\n  console.log("Button clicked! Downloading the chart code NOW...");\n  \n  try {\n    // DYNAMIC IMPORT\n    // The browser physically fetches "heavyChartLibrary.js" over the network right now.\n    const chartModule = await import("./heavyChartLibrary.js");\n    \n    // Once downloaded and evaluated, we can use the functions inside it\n    chartModule.loadChart();\n    console.log("Chart loaded successfully!");\n  } catch (error) {\n    console.error("Failed to download the chart module", error);\n  }\n});',
    expectedOutput: 'The network tab in DevTools will show `heavyChartLibrary.js` downloading ONLY AFTER the user clicks the button.',
    explanation: [
      { code: 'import()', desc: 'Unlike static `import { x } from "..."` which goes at the top of the file, `import()` acts like a function that returns a Promise.' },
      { code: 'await import(...)', desc: 'Because downloading a file over the network takes time, you must use `await` (or `.then()`) to pause execution until the module is fully loaded.' }
    ],
    realWorldExample: 'React uses this heavily with `React.lazy()`. When a user visits the "Home" page, React only downloads the code for the Home page. When they click "Settings", React dynamically imports the "Settings" page code.',
    commonMistakes: [
      { error: 'Forgetting await', code: 'const module = import("./file.js"); module.doSomething();', suffix: '`import()` returns a PROMISE, not the module itself! If you don\'t `await` it, `module` will just be a pending Promise object, and calling `.doSomething()` on it will throw an error.' }
    ],
    bestPractices: ['Use dynamic imports for heavy third-party libraries (like PDF generators, charts, or 3D renderers) or for routing (loading different pages of a Single Page Application only when the user navigates to them).'],
    practiceExercise: {
      task: 'Without coding: Does a static `import` at the top of a file return a Promise?',
      expectedOutput: 'No.',
      solution: 'No. Static imports are synchronous and block execution until they are resolved. Only dynamic `import()` returns a Promise.'
    },
    quiz: [
      { question: 'What is the primary benefit of Dynamic Imports?', options: ['They make the code shorter', 'They allow you to load code only when it is needed, drastically speeding up the initial page load time (Code Splitting)', 'They encrypt the code', 'They allow importing CSS'], answer: 'They allow you to load code only when it is needed, drastically speeding up the initial page load time (Code Splitting)' },
      { question: 'What does the dynamic `import()` syntax return?', options: ['The module directly', 'A string', 'A Promise that resolves to the module object', 'An HTML element'], answer: 'A Promise that resolves to the module object' },
      { question: 'Where can you place a dynamic `import()` statement?', options: ['Only at the very top of the file', 'Anywhere in the code, including inside `if` statements or event listeners', 'Only in React', 'Only inside the HTML file'], answer: 'Anywhere in the code, including inside `if` statements or event listeners' },
      { question: 'If `math.js` has `export const add = (a,b) => a+b;`, how do you use it after a dynamic import?', options: ['const math = await import("./math.js"); math.add(2, 3);', 'import math from "./math.js"', 'const add = import("./math.js")', 'await import("./math.js").add()'], answer: 'const math = await import("./math.js"); math.add(2, 3);' },
      { question: 'Why must you use `await` or `.then()` with a dynamic import?', options: ['Because it looks cool', 'Because downloading a file over the internet takes time, so it is an asynchronous operation', 'Because it prevents hackers', 'It is optional'], answer: 'Because downloading a file over the internet takes time, so it is an asynchronous operation' }
    ],
    interviewQuestions: [
      { q: 'What happens if you dynamically import the same file twice?', a: 'Just like static imports, the browser caches the module. The second time you call `import("./file.js")`, it instantly resolves with the cached module rather than downloading it from the network again.' }
    ],
    summary: ['Loads code on-demand.', 'Improves initial page load speed.', 'Returns a Promise (`await import()`).'],
    references: commonReferences
  },
  'js_calculator': {
    isStructured: true,
    title: '255. Calculator',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Building a web-based Calculator is a classic JavaScript project that combines DOM manipulation, event delegation, and managing complex state (tracking previous numbers, current numbers, and chosen operations).',
    whyUseIt: 'It is the perfect project to practice logic. A calculator seems simple, but handling edge cases (like pressing "." twice, or dividing by zero, or changing the operation halfway through) forces you to think like a software engineer.',
    syntax: '// No specific syntax, this is a conceptual project.',
    codeExample: '// Simplified Calculator Logic\nlet currentInput = "0";\nlet previousInput = "";\nlet operator = null;\n\nfunction appendNumber(number) {\n  if (currentInput === "0") currentInput = number.toString();\n  else currentInput += number.toString();\n  updateDisplay();\n}\n\nfunction chooseOperator(op) {\n  if (currentInput === "") return;\n  if (previousInput !== "") calculate(); // Chain operations\n  operator = op;\n  previousInput = currentInput;\n  currentInput = "";\n}\n\nfunction calculate() {\n  let curr = parseFloat(currentInput);\n  let prev = parseFloat(previousInput);\n  if (isNaN(prev) || isNaN(curr)) return;\n\n  let result;\n  switch (operator) {\n    case "+": result = prev + curr; break;\n    case "-": result = prev - curr; break;\n    case "*": result = prev * curr; break;\n    case "/": result = prev / curr; break;\n    default: return;\n  }\n  \n  currentInput = result.toString();\n  operator = null;\n  previousInput = "";\n  updateDisplay();\n}\n\nfunction updateDisplay() {\n  console.log(`Display: ${currentInput}`); // In reality, update the DOM here\n}\n\n// Simulation\nappendNumber(5);\nchooseOperator("+");\nappendNumber(10);\ncalculate(); // Display: 15',
    expectedOutput: 'Display: 5\nDisplay: 15',
    explanation: [
      { code: 'State Management', desc: 'Notice how we need three variables (`currentInput`, `previousInput`, `operator`) to track the exact state of the calculator at any given moment.' },
      { code: 'Chaining Operations', desc: 'If the user types `5 + 5 +`, the calculator needs to calculate the first `5+5` the moment the second `+` is pressed.' }
    ],
    realWorldExample: 'The built-in calculator app on your phone. Every button press updates an internal state machine before updating the screen.',
    commonMistakes: [
      { error: 'Using the JS `eval()` function', code: 'eval("5 + 5")', suffix: 'Many beginners build calculators by just appending strings like `"5+5"` and running `eval("5+5")`. This is dangerous and considered very bad practice, as `eval()` can execute malicious code if you aren\'t careful.' }
    ],
    bestPractices: ['Use Event Delegation for the buttons. Instead of adding 20 individual event listeners to 20 different buttons, add ONE event listener to the grid container, and figure out which button was clicked using `e.target`.'],
    practiceExercise: {
      task: 'Without coding: In the example above, what prevents the user from typing "5.5.5"?',
      expectedOutput: 'Nothing currently.',
      solution: 'Nothing in the code above! A real calculator needs a check: `if (number === "." && currentInput.includes(".")) return;`'
    },
    quiz: [
      { question: 'Why is a Calculator a good project for learning JavaScript?', options: ['It teaches you how to write CSS', 'It forces you to manage complex state (previous numbers, current numbers, operators) and handle edge cases', 'It requires an API', 'It teaches you React'], answer: 'It forces you to manage complex state (previous numbers, current numbers, operators) and handle edge cases' },
      { question: 'What is a dangerous function that beginners often use to easily calculate strings like `"5+5"`?', options: ['Math.abs()', 'eval()', 'calculate()', 'parseInt()'], answer: 'eval()' },
      { question: 'If a user clicks `5`, then `+`, then `5`, then `+` again, what should happen when the second `+` is clicked?', options: ['It should crash', 'It should calculate the first `5+5` (showing `10`) and prepare for the next number', 'It should ignore the click', 'It should add `+` to the screen'], answer: 'It should calculate the first `5+5` (showing `10`) and prepare for the next number' },
      { question: 'What is the best way to handle the click events for 20 different calculator buttons?', options: ['Write 20 separate `addEventListener` functions', 'Use Event Delegation by adding ONE listener to the parent container and checking `e.target`', 'Don\'t use JavaScript, use HTML onclick attributes', 'Use a loop to create 20 if statements'], answer: 'Use Event Delegation by adding ONE listener to the parent container and checking `e.target`' },
      { question: 'What data type should `currentInput` be while the user is typing (before calculation)?', options: ['A number', 'A boolean', 'A string (so you can easily append characters like "." and "0")', 'An array'], answer: 'A string (so you can easily append characters like "." and "0")' }
    ],
    interviewQuestions: [
      { q: 'How would you handle floating-point math errors in a JavaScript calculator (e.g., 0.1 + 0.2 = 0.30000000000000004)?', a: 'You can multiply the numbers by a power of 10 to make them integers, perform the math, and then divide them back down. Alternatively, use `Number(result.toFixed(10))` to round off the tiny floating-point errors.' }
    ],
    summary: ['Great project for state management.', 'Handle edge cases (decimals, zero).', 'Avoid using `eval()`.'],
    references: commonReferences
  },
  'js_digital_clock': {
    isStructured: true,
    title: '256. Digital Clock',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Building a Digital Clock is a project that utilizes the built-in `Date` object and the `setInterval` function to update the DOM every single second, creating a live, ticking clock.',
    whyUseIt: 'It teaches you how to work with JavaScript\'s notoriously tricky Date methods, and how to create recurring actions using intervals.',
    syntax: '// Conceptual approach\nsetInterval(updateClock, 1000);',
    codeExample: 'function updateClock() {\n  const now = new Date();\n  \n  // Extract hours, minutes, and seconds\n  let hours = now.getHours();\n  let minutes = now.getMinutes();\n  let seconds = now.getSeconds();\n  \n  // Format AM/PM\n  const ampm = hours >= 12 ? "PM" : "AM";\n  \n  // Convert 24-hour time to 12-hour time\n  hours = hours % 12;\n  hours = hours ? hours : 12; // if hour is 0 (midnight), make it 12\n  \n  // Add leading zeros if necessary (e.g., "9" becomes "09")\n  minutes = minutes < 10 ? "0" + minutes : minutes;\n  seconds = seconds < 10 ? "0" + seconds : seconds;\n  \n  // Construct the final string\n  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;\n  \n  // In a real app, update the DOM:\n  // document.getElementById("clock").textContent = timeString;\n  console.log(timeString);\n}\n\n// Run it once immediately so there is no 1-second delay at the start\nupdateClock();\n\n// Run it every 1000 milliseconds (1 second)\n// setInterval(updateClock, 1000);',
    expectedOutput: 'e.g., 02:45:09 PM',
    explanation: [
      { code: 'new Date()', desc: 'When called without arguments, it grabs the exact current time from the user\'s operating system.' },
      { code: 'minutes < 10 ? "0" + minutes', desc: 'A very common requirement. `getMinutes()` returns `5`, not `"05"`. You must manually pad single-digit numbers with a zero so the clock doesn\'t jump around.' }
    ],
    realWorldExample: 'Any dashboard or widget (like the clock on the Windows taskbar). It reads the system time and uses an interval loop to redraw the UI every second.',
    commonMistakes: [
      { error: 'Forgetting to call the function immediately', code: 'setInterval(updateClock, 1000)', suffix: 'If you only use `setInterval`, the clock will be completely blank for the first 1 second after the page loads. Always call `updateClock()` manually right before setting the interval.' }
    ],
    bestPractices: ['Instead of manually adding leading zeros, you can use modern JavaScript: `minutes.toString().padStart(2, "0")`. This cleanly ensures the string is always at least 2 characters long, padding with "0" if needed.'],
    practiceExercise: {
      task: 'Without coding: What does `now.getHours()` return at 2:00 PM?',
      expectedOutput: '14',
      solution: '14. The `Date` object naturally returns 24-hour time (0-23).'
    },
    quiz: [
      { question: 'What JavaScript function is used to make the clock update repeatedly every second?', options: ['setTimeout', 'setInterval', 'loop()', 'requestAnimationFrame'], answer: 'setInterval' },
      { question: 'How do you get the current time in JavaScript?', options: ['new Time()', 'new Date()', 'Date.now', 'time.current()'], answer: 'new Date()' },
      { question: 'What format does `getHours()` return?', options: ['12-hour time (1-12)', '24-hour time (0-23)', 'Seconds since 1970', 'A string like "1PM"'], answer: '24-hour time (0-23)' },
      { question: 'Why do we need to check if minutes/seconds are `< 10`?', options: ['To convert them to hours', 'Because JavaScript returns single digits (e.g., `5`), and clocks are expected to show double digits (`05`)', 'To stop the clock', 'Because intervals break under 10'], answer: 'Because JavaScript returns single digits (e.g., `5`), and clocks are expected to show double digits (`05`)' },
      { question: 'What modern String method makes adding a leading zero easy?', options: ['String.addZero()', 'String.padStart(2, "0")', 'String.format()', 'String.padLeft()'], answer: 'String.padStart(2, "0")' }
    ],
    interviewQuestions: [
      { q: 'Is `setInterval` guaranteed to run exactly every 1000 milliseconds?', a: 'No. `setInterval` is not perfectly precise. If the main thread is blocked doing heavy calculations, the interval will be delayed. For highly precise animations, `requestAnimationFrame` is preferred, though for a basic clock, `setInterval` is fine.' }
    ],
    summary: ['Use `new Date()` for time.', 'Use `setInterval` for ticking.', 'Pad single digits with zeros.'],
    references: commonReferences
  },
  'js_to_do_list': {
    isStructured: true,
    title: '257. To-Do List',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'A To-Do List is the ultimate "Hello World" of web development. It proves you understand CRUD operations (Create, Read, Update, Delete) in the DOM and how to manage state.',
    whyUseIt: 'Almost every web application is just a glorified To-Do list. Facebook is a To-Do list of posts. Amazon is a To-Do list of products. If you can build a To-Do list, you understand the fundamentals of application architecture.',
    syntax: '// Conceptual project focusing on CRUD',
    codeExample: 'let todos = [];\n\n// CREATE\nfunction addTodo(text) {\n  const newTodo = { id: Date.now(), text: text, completed: false };\n  todos.push(newTodo);\n  render();\n}\n\n// DELETE\nfunction deleteTodo(id) {\n  todos = todos.filter(todo => todo.id !== id);\n  render();\n}\n\n// UPDATE\nfunction toggleComplete(id) {\n  const todo = todos.find(t => t.id === id);\n  if (todo) todo.completed = !todo.completed;\n  render();\n}\n\n// READ (Render)\nfunction render() {\n  console.log("--- Current To-Do List ---");\n  todos.forEach(todo => {\n    const status = todo.completed ? "[X]" : "[ ]";\n    console.log(`${status} ${todo.text} (ID: ${todo.id})`);\n  });\n}\n\n// Simulation\naddTodo("Learn JavaScript");\naddTodo("Build a React app");\ntoggleComplete(todos[0].id);\naddTodo("Master CSS");\ndeleteTodo(todos[1].id);',
    expectedOutput: '--- Current To-Do List ---\n[X] Learn JavaScript (ID: 1...)\n[ ] Master CSS (ID: 1...)',
    explanation: [
      { code: 'id: Date.now()', desc: 'A quick and dirty way to generate a unique ID for each item. When deleting or updating an item, you MUST target it by its unique ID, not its index in the array.' },
      { code: 'render()', desc: 'Notice how every action (add, delete, toggle) calls `render()` at the end. This guarantees the UI always perfectly matches the `todos` array in memory.' }
    ],
    realWorldExample: 'Jira, Trello, or Apple Reminders. They all follow this exact architecture: an array of objects in memory, functions to modify that array, and a render function to draw the array on the screen.',
    commonMistakes: [
      { error: 'Relying on the DOM for state', code: '', suffix: 'Beginners often try to delete items by just removing the HTML element from the DOM (`element.remove()`), completely forgetting to remove the data from the JavaScript array. When they save to localStorage, the deleted item comes back. Always update the JS Array FIRST, then re-render the DOM.' }
    ],
    bestPractices: ['Store your data as an array of Objects (not an array of strings). An object allows you to store multiple properties for a single item (text, completed status, unique ID).'],
    practiceExercise: {
      task: 'Without coding: Why is it dangerous to delete a To-Do item based on its index in the array (e.g., `todos.splice(index, 1)`)?',
      expectedOutput: 'Because indexes change.',
      solution: 'If you delete an item, all subsequent items shift down, changing their indexes. If the user clicks delete on an item while an animation is playing, the index might be wrong. Unique IDs never change.'
    },
    quiz: [
      { question: 'What does CRUD stand for in web development?', options: ['Create, Read, Update, Delete', 'Code, Review, Update, Deploy', 'Compile, Run, Undo, Debug', 'Copy, Read, Upload, Download'], answer: 'Create, Read, Update, Delete' },
      { question: 'Why should each To-Do item be an Object rather than a simple String?', options: ['Objects look cooler', 'Objects allow you to store a unique ID, the text, and the "completed" status all together', 'Strings cannot be saved in arrays', 'Strings take up more memory'], answer: 'Objects allow you to store a unique ID, the text, and the "completed" status all together' },
      { question: 'Why is `Date.now()` often used in simple To-Do lists?', options: ['To tell the user what time they added it', 'To generate a reasonably unique ID for the item so it can be safely found and deleted later', 'To make the code run faster', 'To format the date'], answer: 'To generate a reasonably unique ID for the item so it can be safely found and deleted later' },
      { question: 'What is the most robust way to delete an item from the array?', options: ['Using a `for` loop to find the index and `splice`', 'Using the `.filter()` method to create a new array containing everything EXCEPT the item with the matching ID', 'Using `.pop()`', 'Using `.shift()`'], answer: 'Using the `.filter()` method to create a new array containing everything EXCEPT the item with the matching ID' },
      { question: 'What is the "State First" rule of building apps?', options: ['Update the HTML first, then figure out the JavaScript later', 'Update your JavaScript data array first, and then run a function that redraws the HTML based on that data', 'State must be stored in CSS', 'Always use React'], answer: 'Update your JavaScript data array first, and then run a function that redraws the HTML based on that data' }
    ],
    interviewQuestions: [
      { q: 'How would you add persistence to this To-Do list so data isn\'t lost on refresh?', a: 'Inside the `render()` function, I would add `localStorage.setItem("todos", JSON.stringify(todos))`. Then, when the page loads, initialize the array with `JSON.parse(localStorage.getItem("todos")) || []`.' }
    ],
    summary: ['Master CRUD operations.', 'Use objects with unique IDs.', 'Update state first, then render.'],
    references: commonReferences
  },
  'js_counter_app': {
    isStructured: true,
    title: '258. Counter App',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'A Counter App is the simplest possible interactive web application. It features a number on the screen, an "Increment" button, and a "Decrement" button.',
    whyUseIt: 'It is the absolute most basic demonstration of connecting HTML buttons to JavaScript functions, updating a variable, and pushing that variable back to the DOM.',
    syntax: '// Conceptual project',
    codeExample: '// HTML: \n// <h1 id="count">0</h1>\n// <button id="btn-dec">-</button>\n// <button id="btn-inc">+</button>\n\nlet count = 0;\n\n// 1. Grab the DOM elements\nconst countDisplay = document.getElementById("count");\nconst btnInc = document.getElementById("btn-inc");\nconst btnDec = document.getElementById("btn-dec");\n\n// 2. Add event listeners\nbtnInc.addEventListener("click", () => {\n  count++; // Update state\n  countDisplay.textContent = count; // Update UI\n});\n\nbtnDec.addEventListener("click", () => {\n  count--; // Update state\n  countDisplay.textContent = count; // Update UI\n});',
    expectedOutput: 'Clicking the + button increases the number on screen. Clicking the - button decreases it.',
    explanation: [
      { code: 'let count = 0', desc: 'This is our "State". It is the single source of truth for what the number actually is.' },
      { code: 'countDisplay.textContent = count', desc: 'This is the "Render" step. We take the JavaScript state and physically push it into the HTML so the user can see it.' }
    ],
    realWorldExample: 'Adding items to a shopping cart. You click "+", the number goes up. This is exactly a Counter App.',
    commonMistakes: [
      { error: 'Forgetting to update the DOM', code: 'btnInc.addEventListener("click", () => { count++; });', suffix: 'If you forget the `textContent` line, the variable `count` will go up in memory, but the user will still see "0" on the screen because you never updated the HTML!' }
    ],
    bestPractices: ['Keep your state (the `count` variable) separate from the DOM. Don\'t try to read the number out of the HTML (e.g., `parseInt(countDisplay.textContent)`), add 1 to it, and put it back. Let JS hold the real number.'],
    practiceExercise: {
      task: 'Without coding: Add a feature concept. How would you add a "Reset" button?',
      expectedOutput: 'Set count to 0 and update DOM.',
      solution: 'Create a button, add a click listener, inside the listener set `count = 0`, and update `countDisplay.textContent = count`.'
    },
    quiz: [
      { question: 'In a Counter App, what happens when the "Increment" button is clicked?', options: ['The page reloads', 'A JavaScript function runs, adds 1 to a variable, and updates the HTML to show the new number', 'The CSS changes color', 'A database is created'], answer: 'A JavaScript function runs, adds 1 to a variable, and updates the HTML to show the new number' },
      { question: 'Why is it better to store the count in a JavaScript variable `let count = 0` rather than constantly reading the text out of the HTML element?', options: ['It uses less battery', 'Reading from the DOM is slower, and it is best practice to treat JavaScript variables as the "Single Source of Truth" for your app\'s state', 'It prevents CSS issues', 'It is not better'], answer: 'Reading from the DOM is slower, and it is best practice to treat JavaScript variables as the "Single Source of Truth" for your app\'s state' },
      { question: 'What DOM property is best for updating the number inside the `<h1>` tag?', options: ['innerHTML', 'value', 'textContent', 'src'], answer: 'textContent' },
      { question: 'What does `count++` do?', options: ['Adds 2 to count', 'Multiplies count by itself', 'Adds 1 to count', 'Creates a new variable'], answer: 'Adds 1 to count' },
      { question: 'If you click the button 5 times, but forget to include `countDisplay.textContent = count`, what number is visible on the screen?', options: ['5', '0', 'undefined', 'NaN'], answer: '0' }
    ],
    interviewQuestions: [
      { q: 'How would you prevent the counter from going below zero?', a: 'Inside the decrement event listener, I would add a simple guard clause: `if (count <= 0) return;` before the `count--` executes.' }
    ],
    summary: ['Simplest interactive app.', 'Connects buttons to state.', 'Must manually push state back to DOM.'],
    references: commonReferences
  }
};
