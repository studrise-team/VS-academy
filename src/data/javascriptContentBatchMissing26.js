const commonReferences = [
  { label: 'MDN Web Docs - Error Handling', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling' },
  { label: 'MDN Web Docs - try...catch', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch' }
];

export const javascriptContentBatchMissing26 = {
  'js_building_a_notes_app': {
    isStructured: true,
    title: '228. Building a Notes App',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Building a Notes App is a classic project that combines DOM Manipulation, Event Listeners, JSON serialization, and `localStorage` to create a fully functional, persistent web application.',
    whyUseIt: 'It proves you can tie multiple core JavaScript concepts together. A Notes app requires you to read user input, render dynamic HTML, and save data so it isn\'t lost when the browser refreshes.',
    syntax: '// Conceptual Workflow:\n// 1. Read existing notes from localStorage on page load\n// 2. Render notes to the DOM\n// 3. Listen for "Save" button clicks\n// 4. Update the array, stringify it, and overwrite localStorage\n// 5. Re-render the DOM',
    codeExample: 'const input = document.getElementById("noteInput");\nconst saveBtn = document.getElementById("saveBtn");\nconst list = document.getElementById("notesList");\n\n// 1. Load notes (or empty array if none exist)\nlet notes = JSON.parse(localStorage.getItem("myNotes")) || [];\n\n// 2. Render function\nfunction renderNotes() {\n  list.innerHTML = ""; // Clear existing\n  notes.forEach((note, index) => {\n    const li = document.createElement("li");\n    li.textContent = note;\n    \n    // Add a delete button\n    const delBtn = document.createElement("button");\n    delBtn.textContent = "X";\n    delBtn.onclick = () => {\n      notes.splice(index, 1); // Remove from array\n      saveAndRender();\n    };\n    \n    li.appendChild(delBtn);\n    list.appendChild(li);\n  });\n}\n\n// 3. Save logic\nfunction saveAndRender() {\n  localStorage.setItem("myNotes", JSON.stringify(notes));\n  renderNotes();\n}\n\n// 4. Listen for user input\nsaveBtn.addEventListener("click", () => {\n  if (input.value.trim() !== "") {\n    notes.push(input.value);\n    input.value = ""; // Clear input box\n    saveAndRender();\n  }\n});\n\n// 5. Initial render on page load\nrenderNotes();',
    expectedOutput: 'A fully functional app where typing a note and clicking "Save" adds it to a list. Refreshing the page keeps the notes intact.',
    explanation: [
      { code: 'JSON.parse(...) || []', desc: 'Crucial pattern. It tries to load existing data, but if `getItem` returns `null` (because it is the user\'s first visit), it gracefully defaults to an empty array `[]`.' },
      { code: 'saveAndRender()', desc: 'A helper function that keeps our "State" (the `notes` array), our "Database" (`localStorage`), and our "UI" (the DOM) perfectly in sync.' }
    ],
    realWorldExample: 'Google Keep or Apple Notes web versions. They operate on this exact principle, except instead of saving to `localStorage`, they save to a remote database via `fetch()`.',
    commonMistakes: [
      { error: 'Forgetting to call render on load', code: '', suffix: 'If you only call `renderNotes()` when the user clicks save, the screen will be completely blank when they first open the page, even if there are 100 notes saved in localStorage.' }
    ],
    bestPractices: ['Always sanitize user input or use `textContent` instead of `innerHTML` when rendering user-generated notes. Using `innerHTML` opens you up to Cross-Site Scripting (XSS) attacks where users can type malicious `<script>` tags into their notes.'],
    practiceExercise: {
      task: 'Without coding: Why do we use `JSON.parse` when reading the notes from localStorage, and `JSON.stringify` when saving them?',
      expectedOutput: 'Because localStorage only holds strings.',
      solution: 'localStorage can only hold strings. We use `stringify` to convert the `notes` array into a string for storage, and `parse` to convert that string back into a real JavaScript array when we load it.'
    },
    quiz: [
      { question: 'Why is `JSON.parse(localStorage.getItem("notes")) || []` a common pattern?', options: ['Because `parse` is slow', 'Because if "notes" doesn\'t exist, it returns `null`, and `null || []` ensures our variable starts as an empty array instead of crashing', 'To encrypt the data', 'To clear the database'], answer: 'Because if "notes" doesn\'t exist, it returns `null`, and `null || []` ensures our variable starts as an empty array instead of crashing' },
      { question: 'In a Notes app, when should you update `localStorage`?', options: ['Only on page load', 'Only when the user clicks a specific "Save to Disk" button', 'Every single time the `notes` array is modified (added, edited, or deleted) to ensure it stays in sync', 'Every 5 seconds using a timer'], answer: 'Every single time the `notes` array is modified (added, edited, or deleted) to ensure it stays in sync' },
      { question: 'Why should you use `textContent` rather than `innerHTML` when rendering user-typed notes to the screen?', options: ['It is a nice color', 'It prevents XSS (Cross-Site Scripting) attacks where a user types malicious HTML/script tags into the input', 'It makes the text bold', 'It is required by localStorage'], answer: 'It prevents XSS (Cross-Site Scripting) attacks where a user types malicious HTML/script tags into the input' },
      { question: 'If you delete an item from the DOM list, but forget to update `localStorage`, what happens when you refresh the page?', options: ['The item stays deleted forever', 'The item magically reappears, because the DOM was changed but the "database" was not', 'The browser crashes', 'The whole list is deleted'], answer: 'The item magically reappears, because the DOM was changed but the "database" was not' },
      { question: 'What is the "State" in the context of this Notes app?', options: ['The HTML file', 'The `notes` array holding the current data in memory', 'The CSS styles', 'The user\'s keyboard'], answer: 'The `notes` array holding the current data in memory' }
    ],
    interviewQuestions: [
      { q: 'How would you optimize the `renderNotes` function if the list gets very large (e.g., 10,000 notes)?', a: 'Currently, the function clears the entire list and rebuilds all 10,000 DOM nodes every time ONE note is added. To optimize, you would either only append the *newest* note to the existing DOM, or use a framework like React that utilizes a Virtual DOM to only update what changed.' }
    ],
    summary: ['Combine DOM, events, and storage.', 'Keep State, UI, and Storage in sync.', 'Use `parse` to read, `stringify` to save.'],
    references: commonReferences
  },
  'js_javascript_errors': {
    isStructured: true,
    title: '229. JavaScript Errors',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'An Error in JavaScript is an event that occurs when the engine encounters code it cannot execute. When an error is thrown, the program completely stops (crashes) unless the error is explicitly caught and handled.',
    whyUseIt: 'Understanding errors is fundamental. You cannot write perfect code 100% of the time. Knowing how to read red text in the console is the first step to becoming a senior developer.',
    syntax: '// Creating a custom error manually\nthrow new Error("Something went terribly wrong!");',
    codeExample: 'console.log("Step 1");\n\n// This will throw a ReferenceError because \'myVar\' does not exist\nconsole.log(myVar);\n\n// THIS LINE NEVER RUNS!\n// The program crashed on the line above.\nconsole.log("Step 2");',
    expectedOutput: 'Step 1\nUncaught ReferenceError: myVar is not defined',
    explanation: [
      { code: 'Uncaught', desc: 'Means the error was thrown, but your code did not have a safety net (like a `try...catch` block) to catch it, so the script died.' },
      { code: 'Execution stops', desc: 'In JavaScript, an uncaught error in a script immediately halts all further execution of that specific script.' }
    ],
    realWorldExample: 'A user clicks "Checkout" on a shopping cart. The code tries to read `user.creditCard.number`, but `user.creditCard` is null. An error is thrown, the script dies, and the checkout spinner spins forever because the code never reached the next line.',
    commonMistakes: [
      { error: 'Ignoring the console', code: '', suffix: 'Many beginners stare at a broken website for hours without opening the Developer Tools Console. The console will literally tell you the exact line number where the error occurred.' }
    ],
    bestPractices: ['Read the error message! It usually contains the exact filename, the line number, and a description of what went wrong.'],
    practiceExercise: {
      task: 'Without coding: If an error is thrown on line 5, will line 6 execute (assuming no try/catch is used)?',
      expectedOutput: 'No',
      solution: 'No. An uncaught error instantly halts the execution of the script.'
    },
    quiz: [
      { question: 'What happens to a JavaScript program when an "Uncaught Error" is thrown?', options: ['It skips that line and continues', 'It instantly halts execution and the rest of the script does not run', 'It alerts the user', 'It automatically fixes the bug'], answer: 'It instantly halts execution and the rest of the script does not run' },
      { question: 'Where is the best place to look to see if your JavaScript has errors?', options: ['The HTML body', 'The CSS file', 'The Browser Developer Tools Console', 'The server logs'], answer: 'The Browser Developer Tools Console' },
      { question: 'What keyword can you use to intentionally crash your own program by creating an error?', options: ['stop', 'crash', 'throw', 'halt'], answer: 'throw' },
      { question: 'Does an error in `script.js` prevent a completely separate file `otherScript.js` from running?', options: ['Yes', 'No, errors only halt the specific script/execution context they occurred in', 'Only on Mac', 'Yes, it closes the browser'], answer: 'No, errors only halt the specific script/execution context they occurred in' },
      { question: 'What does "Uncaught" mean in an error message?', options: ['The error was hiding', 'The code didn\'t use a `try...catch` block to handle the error safely', 'The antivirus missed it', 'It means the error is unfixable'], answer: 'The code didn\'t use a `try...catch` block to handle the error safely' }
    ],
    interviewQuestions: [
      { q: 'What is the Error object?', a: '`Error` is a built-in constructor in JavaScript. When an error happens, an instance of this object is created, containing a `message` property (e.g., "myVar is not defined") and a `stack` property (the trace of exactly which functions were called leading up to the crash).' }
    ],
    summary: ['Errors stop script execution immediately.', 'Always check the Console.', 'Can be thrown manually using `throw`.'],
    references: commonReferences
  },
  'js_syntax_errors': {
    isStructured: true,
    title: '230. Syntax Errors',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'A `SyntaxError` occurs when the JavaScript engine cannot even parse your code because you violated the fundamental grammar rules of the language (like missing a bracket or a quote).',
    whyUseIt: 'You don\'t "use" them, you fix them! Unlike Runtime errors which happen while the code is running, Syntax errors prevent the code from even starting.',
    syntax: 'Uncaught SyntaxError: Unexpected token ...',
    codeExample: '// 1. Missing a closing quote\n// const name = "Alice; // SyntaxError: Invalid or unexpected token\n\n// 2. Missing a closing bracket\n// if (true) { console.log("hi"); \n// SyntaxError: Unexpected end of input\n\n// 3. Using a reserved keyword as a variable name\n// const let = 5; // SyntaxError: let is a reserved word',
    expectedOutput: 'The browser console displays a red SyntaxError and the script completely fails to run.',
    explanation: [
      { code: 'Parsing Phase', desc: 'Before JavaScript runs your code, it reads it top-to-bottom to check for grammar (Parsing). If it finds a Syntax Error, it refuses to execute ANY of the code, even the lines before the error.' }
    ],
    realWorldExample: 'Writing an essay and forgetting the period at the end of a sentence. The teacher (JavaScript engine) looks at it, says "This isn\'t valid English grammar", and refuses to grade it.',
    commonMistakes: [
      { error: 'Thinking a try/catch can catch it', code: 'try { const a = "hi; } catch(e) {}', suffix: 'You CANNOT catch a SyntaxError with a try/catch block. Because the code is grammatically invalid, the JavaScript engine refuses to even begin executing the script, meaning the try/catch never even runs!' }
    ],
    bestPractices: ['Use a modern Code Editor (like VS Code). It will highlight Syntax Errors in red with a squiggly line before you even save the file, saving you countless hours.'],
    practiceExercise: {
      task: 'Identify the syntax error in this line: `const user = { name: "Bob", age: 30 }`',
      expectedOutput: 'Nothing is strictly wrong, but missing a semicolon is bad practice.',
      solution: 'Trick question! There is no syntax error. However, `const user = { name: "Bob" age: 30 }` (missing the comma) WOULD be a syntax error.'
    },
    quiz: [
      { question: 'When does a SyntaxError occur?', options: ['While the code is running', 'When the user clicks a button', 'During the parsing phase, before the code even begins to execute', 'When the internet disconnects'], answer: 'During the parsing phase, before the code even begins to execute' },
      { question: 'Can a `try...catch` block catch a SyntaxError in the same script?', options: ['Yes, always', 'No, because the script cannot even begin executing to reach the `try` block', 'Only if you use `await`', 'Only in strict mode'], answer: 'No, because the script cannot even begin executing to reach the `try` block' },
      { question: 'Which of the following will cause a SyntaxError?', options: ['Calling a function that doesn\'t exist', 'Writing `const myVar = "Hello;` (missing the closing quote)', 'Dividing by zero', 'Fetching a bad URL'], answer: 'Writing `const myVar = "Hello;` (missing the closing quote)' },
      { question: 'If you have a `console.log("Start");` on line 1, and a SyntaxError on line 10, will "Start" be printed to the console?', options: ['Yes', 'No, the entire script is rejected before execution begins', 'Sometimes', 'Yes, but in red'], answer: 'No, the entire script is rejected before execution begins' },
      { question: 'What is the best tool for preventing SyntaxErrors?', options: ['A calculator', 'A modern code editor (IDE) with syntax highlighting and linting', 'A database', 'A strong wifi connection'], answer: 'A modern code editor (IDE) with syntax highlighting and linting' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between Syntax Errors and Runtime Errors?', a: 'Syntax errors happen during the parsing phase (compile-time) because the code violates language grammar rules. The code never runs. Runtime errors happen during execution; the code was grammatically correct, but tried to do something impossible (like reading a property of undefined).' }
    ],
    summary: ['Violations of language grammar.', 'Caught BEFORE the code executes.', 'Cannot be caught by try/catch.'],
    references: commonReferences
  },
  'js_runtime_errors': {
    isStructured: true,
    title: '231. Runtime Errors',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A Runtime Error occurs during the actual execution of the code. The code is grammatically correct (no Syntax Errors), but it attempts an impossible operation, causing the engine to crash at that specific moment.',
    whyUseIt: 'These are the most common bugs in programming. They happen because of unpredictable data, like an API returning `null` when you expected an object, or a user typing a string when you expected a number.',
    syntax: 'Uncaught ReferenceError: x is not defined\nUncaught TypeError: Cannot read properties of undefined',
    codeExample: 'console.log("Program starts");\n\nfunction printName(user) {\n  // If user is null, this throws a TypeError!\n  console.log(user.name);\n}\n\n// This works fine\nprintName({ name: "Alice" });\n\n// RUNTIME ERROR! The script crashes here.\nprintName(null); \n\n// This line will NEVER run\nconsole.log("Program ends");',
    expectedOutput: 'Program starts\nAlice\nUncaught TypeError: Cannot read properties of null (reading \'name\')',
    explanation: [
      { code: 'TypeError', desc: 'The most common runtime error. It happens when you try to use a value in a way that its type does not support (e.g., trying to call a string like a function, or reading a property of `undefined`).' },
      { code: 'ReferenceError', desc: 'Happens when you try to use a variable that does not exist or hasn\'t been declared yet.' }
    ],
    realWorldExample: 'A user loads their profile. The database fails and returns `undefined` for their avatar object. Your code tries to do `avatar.url`. Boom. TypeError. The page goes blank.',
    commonMistakes: [
      { error: 'Assuming data will always be perfect', code: 'apiResponse.data.items[0].title', suffix: 'If ANY part of that chain is null or undefined (e.g., the API returned an empty array, so `items[0]` is undefined), attempting to read `.title` throws a TypeError and crashes the app. Always use Optional Chaining (`?.`) to prevent this!' }
    ],
    bestPractices: ['Use Optional Chaining (`user?.name`) to safely read properties that might be undefined, completely preventing `TypeError` crashes.'],
    practiceExercise: {
      task: 'Without coding: What type of error is thrown if you write `const obj = {}; obj.myFunction();`?',
      expectedOutput: 'TypeError',
      solution: 'TypeError (specifically "obj.myFunction is not a function"). The object exists, but you are trying to call `undefined` as if it were a function.'
    },
    quiz: [
      { question: 'When does a Runtime Error occur?', options: ['Before the code runs, during parsing', 'While the code is actively executing line-by-line', 'Only on servers', 'Only when the user clicks a button'], answer: 'While the code is actively executing line-by-line' },
      { question: 'If you have a `console.log("Start")` on line 1, and a Runtime Error on line 5, will "Start" be printed?', options: ['Yes, because execution happened up until the crash on line 5', 'No, the whole script is rejected', 'Only in strict mode', 'No'], answer: 'Yes, because execution happened up until the crash on line 5' },
      { question: 'What error is thrown when you try to read a property of `null` or `undefined` (e.g., `null.name`)?', options: ['SyntaxError', 'ReferenceError', 'TypeError', 'RangeError'], answer: 'TypeError' },
      { question: 'What error is thrown when you try to use a variable that has never been declared?', options: ['SyntaxError', 'ReferenceError', 'TypeError', 'URIError'], answer: 'ReferenceError' },
      { question: 'Can Runtime Errors be caught and handled gracefully without crashing the app?', options: ['No', 'Yes, by wrapping the risky code in a `try...catch` block', 'Only in React', 'Only if you use `const`'], answer: 'Yes, by wrapping the risky code in a `try...catch` block' }
    ],
    interviewQuestions: [
      { q: 'What is a RangeError?', a: 'A RangeError is a specific runtime error that occurs when a number is outside an allowable range. For example, trying to create an array with a negative length: `new Array(-1)`.' }
    ],
    summary: ['Happens during execution.', 'Usually TypeErrors or ReferenceErrors.', 'Can be caught using `try...catch`.'],
    references: commonReferences
  },
  'js_try_catch_1': {
    isStructured: true,
    title: '233. try...catch',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'The `try...catch` statement provides a way to handle Runtime Errors gracefully. Instead of the error crashing your entire application, you "catch" the error and decide what to do next.',
    whyUseIt: 'You wrap "risky" code inside the `try` block. If it succeeds, great. If it fails and throws an error, the code instantly jumps to the `catch` block, allowing your app to stay alive and show a friendly error message to the user instead of a blank white screen.',
    syntax: 'try {\n  // Risky code\n} catch (error) {\n  // What to do if an error happens\n}',
    codeExample: 'console.log("App Started");\n\ntry {\n  // RISKY CODE\n  // Let\'s pretend we misspelled a variable name\n  const result = someUndefinedVariable * 10;\n  console.log("This line will never run");\n} catch (error) {\n  // We caught the crash!\n  console.log("Whoops! We caught an error.");\n  console.log("Error Message:", error.message);\n}\n\n// Because we caught the error, the app IS STILL ALIVE!\nconsole.log("App Continued Successfully");',
    expectedOutput: 'App Started\nWhoops! We caught an error.\nError Message: someUndefinedVariable is not defined\nApp Continued Successfully',
    explanation: [
      { code: 'try block', desc: 'The engine attempts to execute this code. If an error occurs on line 2, it instantly aborts lines 3 and 4 and jumps straight to `catch`.' },
      { code: 'catch (error)', desc: 'The `error` object is automatically passed into the catch block. It contains a `.message` property describing what went wrong.' }
    ],
    realWorldExample: 'Handling `JSON.parse()`. If you try to parse a string that isn\'t valid JSON (like `"Hello"`), it throws a fatal error. You should always wrap `JSON.parse` in a try/catch if you don\'t trust the source of the string.',
    commonMistakes: [
      { error: 'Wrapping the entire file in one giant try/catch', code: '', suffix: 'Don\'t do this. Only wrap the specific lines of code that are "risky" (like network requests, parsing JSON, or accessing deeply nested unpredictable data). Overusing try/catch makes bugs harder to track down.' }
    ],
    bestPractices: ['Never leave a `catch` block completely empty (`catch(e) {}`). This is called "swallowing the error". If you swallow it, the code fails silently and you will spend days trying to figure out why your app isn\'t working. Always at least `console.error(e)`.'],
    practiceExercise: {
      task: 'Write a try/catch block. In the try, call `fakeFunction()`. In the catch, log "Function missing!".',
      expectedOutput: 'Handles the ReferenceError gracefully.',
      solution: 'try { fakeFunction(); } catch (err) { console.log("Function missing!"); }'
    },
    quiz: [
      { question: 'What is the primary purpose of a `try...catch` block?', options: ['To fix syntax errors automatically', 'To prevent Runtime Errors from crashing the entire application', 'To make loops run faster', 'To format code'], answer: 'To prevent Runtime Errors from crashing the entire application' },
      { question: 'If an error occurs on line 2 inside a `try` block that has 10 lines, what happens?', options: ['The engine skips line 2 and runs line 3', 'The engine instantly aborts the rest of the try block and jumps to the `catch` block', 'The browser crashes', 'It runs all 10 lines anyway'], answer: 'The engine instantly aborts the rest of the try block and jumps to the `catch` block' },
      { question: 'What does the variable passed into the catch block (e.g., `catch(error)`) contain?', options: ['A string', 'An Error object containing details like `error.message` and `error.stack`', 'A boolean', 'undefined'], answer: 'An Error object containing details like `error.message` and `error.stack`' },
      { question: 'Can a `try...catch` block catch a SyntaxError (like a missing bracket)?', options: ['Yes', 'No, because Syntax Errors prevent the script from even starting', 'Only if placed at the very top of the file', 'Sometimes'], answer: 'No, because Syntax Errors prevent the script from even starting' },
      { question: 'Why is it a bad idea to leave a `catch` block completely empty?', options: ['It causes a Syntax Error', 'It "swallows" the error, meaning the code fails silently and you have no idea a bug occurred', 'It deletes the database', 'It uses too much memory'], answer: 'It "swallows" the error, meaning the code fails silently and you have no idea a bug occurred' }
    ],
    interviewQuestions: [
      { q: 'What is the `finally` block?', a: 'You can add `finally { ... }` after the `catch` block. The code inside `finally` is guaranteed to run NO MATTER WHAT—whether the `try` block succeeded, or whether the `catch` block handled an error. It is commonly used for cleanup tasks, like turning off loading spinners.' }
    ],
    summary: ['Prevents crashes from Runtime Errors.', 'Jumps to `catch` immediately on failure.', 'Keeps the rest of the app alive.'],
    references: commonReferences
  }
};
