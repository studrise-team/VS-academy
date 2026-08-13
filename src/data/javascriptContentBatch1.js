const commonReferences = [
  { label: 'W3Schools JavaScript', url: 'https://www.w3schools.com/js/' },
  { label: 'MDN Web Docs - JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
];

export const javascriptContentBatch1 = {
  'js_what_is_javascript': {
    isStructured: true,
    title: '1. What is JavaScript?',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'JavaScript (JS) is a programming language that allows you to implement complex features on web pages. While HTML structures the content and CSS styles it, JavaScript makes the web page interactive and dynamic.',
    whyUseIt: 'We use JavaScript to build interactive elements like image sliders, form validations, dynamic content updates without reloading the page, and even entire web applications or games.',
    syntax: '// JavaScript is written in plain text\nconsole.log("Hello, World!");',
    codeExample: 'let message = "Welcome to JavaScript!";\nalert(message);',
    expectedOutput: 'A pop-up alert box displaying "Welcome to JavaScript!".',
    explanation: [
      { code: 'let message = ...', desc: 'Declares a variable named message and stores the text string in it.' },
      { code: 'alert(message);', desc: 'A built-in browser function that displays a pop-up alert containing the message.' }
    ],
    realWorldExample: 'When you click a "Like" button on Facebook and the icon turns blue instantly without the page refreshing, that interactivity is powered by JavaScript.',
    commonMistakes: [
      { error: 'Confusing JavaScript with Java', code: '', suffix: 'Java and JavaScript are entirely different languages with different purposes. They are as similar as "Car" and "Carpet".' }
    ],
    bestPractices: ['Always use JavaScript for behavior (logic/interactivity) and avoid using it for things CSS can do (like simple hover effects).'],
    practiceExercise: {
      task: 'Open your browser\'s Developer Tools (F12 or Right Click -> Inspect), go to the Console tab, and make an alert popup appear.',
      expectedOutput: 'An alert box appears on your current web page.',
      solution: 'alert("I am learning JavaScript!");'
    },
    quiz: [
      { question: 'What is the primary role of JavaScript on a web page?', options: ['To structure content', 'To add styling and colors', 'To make the page interactive and dynamic', 'To host databases'], answer: 'To make the page interactive and dynamic' },
      { question: 'Are Java and JavaScript the same thing?', options: ['Yes, JavaScript is a lighter version of Java', 'No, they are completely different languages', 'Yes, they are owned by the same company', 'Only on mobile devices'], answer: 'No, they are completely different languages' },
      { question: 'Where does JavaScript typically run?', options: ['On a database server', 'Inside the user\'s web browser', 'Inside the CPU cache directly', 'Only on Linux'], answer: 'Inside the user\'s web browser' },
      { question: 'Which built-in JS function triggers a browser popup box?', options: ['console.log()', 'prompt()', 'alert()', 'popup()'], answer: 'alert()' },
      { question: 'If a webpage has a button that toggles dark mode without reloading the page, what technology is likely driving that feature?', options: ['HTML', 'JavaScript', 'SQL', 'Python'], answer: 'JavaScript' }
    ],
    interviewQuestions: [
      { q: 'What is JavaScript?', a: 'JavaScript is a high-level, interpreted programming language primarily used to add interactivity, complex features, and logic to web pages.' }
    ],
    summary: ['JavaScript makes web pages interactive.', 'It runs directly in the user\'s web browser.', 'It is completely different from the Java programming language.'],
    references: commonReferences
  },

  'js_javascript_history': {
    isStructured: true,
    title: '2. JavaScript History',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'JavaScript was created by Brendan Eich in 1995 while he was working at Netscape Communications. It was famously written in just 10 days.',
    whyUseIt: 'Understanding the history helps explain some of JS\'s quirks (like type coercion) and why modern JavaScript (ES6+) is so different from the original version.',
    syntax: '// 1995: Mocha -> LiveScript -> JavaScript\n// 1997: ECMAScript standard created\n// 2015: ES6 released (massive update)',
    codeExample: '// Old JS (pre-2015)\nvar oldWay = "Hello";\n\n// Modern JS (ES6+)\nconst newWay = "Hello";',
    expectedOutput: 'Both do the same thing, but modern JS introduces safer and cleaner syntax.',
    explanation: [
      { code: 'var', desc: 'The original way to declare variables. It has scoping flaws.' },
      { code: 'const', desc: 'Introduced in ES6 (2015) to create variables that cannot be reassigned.' }
    ],
    realWorldExample: 'A developer maintains an old codebase from 2010 full of `var` and callbacks. They update it using modern ES6 syntax (`const`, `let`, `Promises`) to make the code cleaner and less error-prone.',
    commonMistakes: [
      { error: 'Thinking ECMAScript is a different language', code: '', suffix: 'ECMAScript is the official specification/standard. JavaScript is the implementation of that standard.' }
    ],
    bestPractices: ['Always write modern ES6+ JavaScript. Avoid outdated practices like using `var`.'],
    practiceExercise: {
      task: 'Search online for "ES6 JavaScript features" and list 3 major additions that changed how we write JS.',
      expectedOutput: 'You find features like Arrow Functions, let/const, and Promises.',
      solution: 'Navigate to MDN or W3Schools and read the ES6 documentation.'
    },
    quiz: [
      { question: 'Who created JavaScript?', options: ['Bill Gates', 'Linus Torvalds', 'Brendan Eich', 'Mark Zuckerberg'], answer: 'Brendan Eich' },
      { question: 'How long did it take to write the first version of JavaScript?', options: ['1 year', '10 days', '3 months', '5 years'], answer: '10 days' },
      { question: 'What is the official standardization name for JavaScript?', options: ['JScript', 'MochaScript', 'ECMAScript', 'WebScript'], answer: 'ECMAScript' },
      { question: 'In what year was the massive ES6 update released?', options: ['1999', '2005', '2015', '2020'], answer: '2015' },
      { question: 'What was the original name of JavaScript?', options: ['JavaLite', 'Mocha', 'WebCode', 'NetScript'], answer: 'Mocha' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between JavaScript and ECMAScript?', a: 'ECMAScript is the standard specification that defines how the language should work. JavaScript is the programming language that implements the ECMAScript standard.' }
    ],
    summary: ['Created by Brendan Eich in 10 days in 1995.', 'Standardized as ECMAScript.', 'ES6 (2015) revolutionized the language.'],
    references: commonReferences
  },

  'js_javascript_vs_html_vs_css': {
    isStructured: true,
    title: '3. JavaScript vs HTML vs CSS',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'These three languages form the core foundation of the web. HTML is the structure, CSS is the style, and JavaScript is the behavior.',
    whyUseIt: 'You need to know which language to use for which task. If you want a button, use HTML. If you want it red, use CSS. If you want it to fetch data when clicked, use JavaScript.',
    syntax: '<!-- HTML: Structure -->\n<button id="btn">Click</button>\n\n/* CSS: Style */\n#btn { color: red; }\n\n// JavaScript: Logic\ndocument.getElementById("btn").onclick = function() { alert("Clicked!"); };',
    codeExample: '<!-- Combined Example -->\n<p id="demo" style="color: blue;">Hello</p>\n<script>\n  document.getElementById("demo").innerHTML = "World!";\n</script>',
    expectedOutput: 'The text displayed on the screen will be a blue "World!".',
    explanation: [
      { code: 'style="color: blue;"', desc: 'CSS changes the visual appearance to blue.' },
      { code: '.innerHTML = "World!";', desc: 'JavaScript dynamically replaces the HTML content "Hello" with "World!".' }
    ],
    realWorldExample: 'Building a house: HTML is the bricks and structure. CSS is the paint and interior design. JavaScript is the electricity and plumbing that makes things work.',
    commonMistakes: [
      { error: 'Using JavaScript for simple hover animations', code: '', suffix: 'CSS is much more efficient for visual transitions and hover states. Only use JS for logic and data handling.' }
    ],
    bestPractices: ['Keep concerns separated: put HTML in .html files, CSS in .css files, and JavaScript in .js files.'],
    practiceExercise: {
      task: 'Identify which language should handle this requirement: "When a user submits a form with a blank password, show a red error message."',
      expectedOutput: 'You understand the separation of concerns.',
      solution: 'JavaScript is used to check if the password is blank and to show the error message. CSS is used to make the message red.'
    },
    quiz: [
      { question: 'Which language is responsible for the structure of a web page?', options: ['CSS', 'JavaScript', 'HTML', 'Python'], answer: 'HTML' },
      { question: 'Which language is responsible for styling (colors, layout)?', options: ['JavaScript', 'HTML', 'CSS', 'PHP'], answer: 'CSS' },
      { question: 'Which language handles user interactions like button clicks?', options: ['HTML', 'JavaScript', 'CSS', 'XML'], answer: 'JavaScript' },
      { question: 'In the house analogy, what does CSS represent?', options: ['The bricks and walls', 'The paint and interior design', 'The electricity and plumbing', 'The roof'], answer: 'The paint and interior design' },
      { question: 'Can you build a fully functioning modern web app using ONLY HTML and CSS?', options: ['Yes', 'No, you need JavaScript to handle dynamic logic and user data', 'Yes, but it will be very slow', 'Only on mobile devices'], answer: 'No, you need JavaScript to handle dynamic logic and user data' }
    ],
    interviewQuestions: [
      { q: 'What is the concept of "Separation of Concerns" in web development?', a: 'It means keeping structure (HTML), presentation (CSS), and behavior (JavaScript) in separate files rather than mixing them all together inline. This makes code easier to maintain and read.' }
    ],
    summary: ['HTML = Structure.', 'CSS = Style.', 'JavaScript = Behavior/Logic.'],
    references: commonReferences
  },

  'js_how_javascript_works': {
    isStructured: true,
    title: '4. How JavaScript Works',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'JavaScript is a single-threaded, non-blocking, interpreted language. Browsers contain a "JavaScript Engine" (like Chrome\'s V8) that reads your JS code and converts it into machine code that the computer understands.',
    whyUseIt: 'Understanding how JS executes helps you write faster code and prevents bugs related to timing (like code running before data is loaded).',
    syntax: '-- Source Code -> JS Engine (V8) -> Machine Code -> Execution',
    codeExample: 'console.log("Start");\nsetTimeout(() => console.log("Timeout"), 0);\nconsole.log("End");',
    expectedOutput: 'Start\nEnd\nTimeout',
    explanation: [
      { code: 'console.log("Start");', desc: 'Executes immediately on the main thread.' },
      { code: 'setTimeout(...)', desc: 'Sent to the Web APIs to wait, allowing the rest of the code to keep running (non-blocking).' },
      { code: 'console.log("End");', desc: 'Executes immediately. Then the timeout callback finishes and executes.' }
    ],
    realWorldExample: 'A restaurant waiter (single thread) takes your order and gives it to the kitchen (Web API). Instead of waiting at your table for the food to cook (blocking), they go serve other tables. When your food is ready (callback), they bring it to you.',
    commonMistakes: [
      { error: 'Assuming code always runs top-to-bottom sequentially', code: '', suffix: 'Because JS is asynchronous, functions like fetch() or setTimeout() will finish later, meaning lines below them might execute first.' }
    ],
    bestPractices: ['Do not write "blocking" code (like massive while loops) that freeze the main thread, as it will freeze the user\'s entire web page.'],
    practiceExercise: {
      task: 'Run the Sample Code in your browser console and observe the order of the output.',
      expectedOutput: 'The output prints out of sequential order.',
      solution: 'Open console, paste code, press Enter. Notice "End" prints before "Timeout".'
    },
    quiz: [
      { question: 'What executes JavaScript code inside the Google Chrome browser?', options: ['SpiderMonkey', 'V8 Engine', 'Node.js', 'Blink'], answer: 'V8 Engine' },
      { question: 'What does "single-threaded" mean in JavaScript?', options: ['It can only run on one monitor', 'It has only one main call stack and can do only one thing at a time', 'It can only process one user at a time', 'It cannot use variables'], answer: 'It has only one main call stack and can do only one thing at a time' },
      { question: 'Does JavaScript wait for a setTimeout to finish before moving to the next line of code?', options: ['Yes, always', 'No, it is non-blocking and will continue executing subsequent lines', 'Only if the delay is more than 1 second', 'Only in strict mode'], answer: 'No, it is non-blocking and will continue executing subsequent lines' },
      { question: 'Which engine does Firefox use for JavaScript?', options: ['V8', 'Chakra', 'SpiderMonkey', 'WebKit'], answer: 'SpiderMonkey' },
      { question: 'Is JavaScript compiled or interpreted?', options: ['Strictly compiled to binary before runtime', 'Interpreted (often Just-In-Time compiled by the browser engine)', 'It is an assembly language', 'Neither'], answer: 'Interpreted (often Just-In-Time compiled by the browser engine)' }
    ],
    interviewQuestions: [
      { q: 'Explain the difference between the Call Stack and the Web APIs in the browser.', a: 'The Call Stack executes your synchronous JS code step-by-step. Web APIs (provided by the browser) handle asynchronous tasks like HTTP requests, DOM events, and timers outside the main thread, pushing callbacks back to the stack when done.' }
    ],
    summary: ['JS is single-threaded.', 'Engines like V8 compile it just-in-time.', 'Asynchronous code is handled by browser Web APIs.'],
    references: commonReferences
  },

  'js_adding_javascript_to_html': {
    isStructured: true,
    title: '5. Adding JavaScript to HTML',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'You can insert JavaScript into HTML either internally using the `<script>` tag, inline via attributes, or externally by linking a `.js` file.',
    whyUseIt: 'You must link your JS code to the HTML document so the browser knows to execute it when the page loads.',
    syntax: '<!-- Internal -->\n<script>\n  // code\n</script>\n\n<!-- External -->\n<script src="script.js"></script>',
    codeExample: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>My Page</h1>\n  <!-- External JS file linked at the bottom of body -->\n  <script src="app.js"></script>\n</body>\n</html>',
    expectedOutput: 'The HTML loads, and then executes the code inside app.js.',
    explanation: [
      { code: '<script src="app.js">', desc: 'The src attribute points to a separate file named app.js containing only JavaScript.' },
      { code: 'Placed at bottom of <body>', desc: 'Ensures the HTML elements are loaded before the JS tries to manipulate them.' }
    ],
    realWorldExample: 'A large web application has thousands of lines of JS. Instead of clogging the `index.html` file, developers put the code in `main.js` and link it using `<script src="main.js"></script>`.',
    commonMistakes: [
      { error: 'Putting scripts in the <head> without the "defer" attribute', code: '', suffix: 'If you load JS in the head, it pauses HTML parsing. The script might try to modify an HTML element that hasn\'t been drawn yet, causing a crash.' }
    ],
    bestPractices: ['Always use external `.js` files for clean code. Link them at the end of the `<body>` or use `<script src="..." defer></script>` in the `<head>`.'],
    practiceExercise: {
      task: 'Create an `index.html` file and a `script.js` file. Link them together and make `script.js` trigger an alert.',
      expectedOutput: 'When opening index.html in the browser, an alert appears.',
      solution: 'HTML: <script src="script.js"></script> JS: alert("Connected!");'
    },
    quiz: [
      { question: 'Which HTML tag is used to embed or link JavaScript?', options: ['<javascript>', '<script>', '<js>', '<code>'], answer: '<script>' },
      { question: 'What attribute specifies the path to an external JavaScript file?', options: ['href', 'src', 'link', 'file'], answer: 'src' },
      { question: 'Why is it recommended to place <script> tags at the bottom of the <body>?', options: ['It makes the code run faster', 'So the HTML renders first, preventing the script from blocking the page load', 'Because CSS goes at the top', 'It is an old rule that no longer applies'], answer: 'So the HTML renders first, preventing the script from blocking the page load' },
      { question: 'Can you have multiple <script> tags in one HTML document?', options: ['No, only one is allowed', 'Yes, you can include as many as you need', 'Only if they are external', 'Only in the <head>'], answer: 'Yes, you can include as many as you need' },
      { question: 'What does the `defer` attribute do in a <script> tag?', options: ['Deletes the script', 'Tells the browser to download the script in the background and execute it only after the HTML is fully parsed', 'Runs the script immediately and stops HTML parsing', 'Compresses the file'], answer: 'Tells the browser to download the script in the background and execute it only after the HTML is fully parsed' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between inline, internal, and external JavaScript?', a: 'Inline is written directly inside HTML tags (e.g., onclick="..."). Internal is written inside a <script> tag within the HTML file. External is written in a separate .js file and linked using the src attribute. External is best for maintainability.' }
    ],
    summary: ['Use `<script>` tags to add JS.', 'External files use `src="file.js"`.', 'Load scripts at the bottom of the body or use `defer`.'],
    references: commonReferences
  },

  'js_console_log': {
    isStructured: true,
    title: '6. console.log()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'A built-in function used to print messages, variables, or data to the browser\'s web console.',
    whyUseIt: 'It is the most essential tool for debugging. Developers use it to check if code is running and to inspect the values of variables behind the scenes.',
    syntax: 'console.log(data_to_print);',
    codeExample: 'let score = 100;\nconsole.log("The game has started.");\nconsole.log("Current Score:", score);',
    expectedOutput: 'The game has started.\nCurrent Score: 100',
    explanation: [
      { code: 'console.log(...)', desc: 'Outputs whatever is inside the parentheses to the developer console.' },
      { code: '"Current Score:", score', desc: 'You can pass multiple items separated by commas to log them together.' }
    ],
    realWorldExample: 'A developer is building a login form but clicking submit does nothing. They add `console.log("Button Clicked!")` inside the function. If the console remains empty, they know the button click event isn\'t hooked up correctly.',
    commonMistakes: [
      { error: 'Leaving console.log in production code', code: '', suffix: 'End-users don\'t look at the console, but other developers can see your logs. It\'s unprofessional to leave dozens of debug logs in live websites.' }
    ],
    bestPractices: ['Use console.log heavily while building, but delete or comment them out before publishing your website.'],
    practiceExercise: {
      task: 'Open the browser developer console (F12) and use console.log to print your name.',
      expectedOutput: 'Your name appears in the console window.',
      solution: 'Type `console.log("My Name");` and press Enter.'
    },
    quiz: [
      { question: 'What does console.log() do?', options: ['Prints a message to the user screen', 'Prints data to the developer tools console for debugging', 'Logs the user out of the website', 'Saves data to a database'], answer: 'Prints data to the developer tools console for debugging' },
      { question: 'How do you print a string and a variable together in console.log?', options: ['console.log("String" AND var);', 'console.log("String", var);', 'console.log = "String" + var;', 'print("String", var);'], answer: 'console.log("String", var);' },
      { question: 'Where do you view the output of console.log?', options: ['In the browser Developer Tools (Console tab)', 'On the main web page', 'In a text file on your desktop', 'In the server logs'], answer: 'In the browser Developer Tools (Console tab)' },
      { question: 'Can console.log() print complex data like objects and arrays?', options: ['No, only text and numbers', 'Yes, it can print complex data structures interactively', 'Only arrays, not objects', 'Only if converted to strings first'], answer: 'Yes, it can print complex data structures interactively' },
      { question: 'Is console.log() visible to regular users browsing the website?', options: ['Yes, it shows as a popup', 'No, unless they open the developer tools', 'Yes, it appears at the bottom of the page', 'No, it is strictly server-side'], answer: 'No, unless they open the developer tools' }
    ],
    interviewQuestions: [
      { q: 'Besides console.log, name two other console methods used for debugging.', a: 'console.error() is used to print errors in red. console.warn() is used to print warnings in yellow. console.table() is used to print arrays/objects as a neat table.' }
    ],
    summary: ['Used primarily for debugging.', 'Outputs to the DevTools Console.', 'Can accept multiple comma-separated arguments.'],
    references: commonReferences
  },

  'js_comments': {
    isStructured: true,
    title: '7. Comments',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Comments are notes written in the code that the JavaScript engine completely ignores. They are used to explain what the code does or to temporarily disable code.',
    whyUseIt: 'Code is read more often than it is written. Comments help other developers (and your future self) understand complex logic.',
    syntax: '// Single line comment\n\n/* \n  Multi-line \n  comment \n*/',
    codeExample: 'let tax = 0.20; // Set standard VAT tax rate to 20%\n\n/* \n  The below function calculates total price\n  including shipping and taxes.\n*/\nfunction calculate() {\n  // console.log("Calculating..."); \n}',
    expectedOutput: 'The code runs, but none of the commented text is executed or displayed.',
    explanation: [
      { code: '// Set standard...', desc: 'A single-line comment explaining the variable.' },
      { code: '/* ... */', desc: 'A multi-line block comment explaining the whole function.' },
      { code: '// console.log(...)', desc: 'This line is "commented out", meaning the code is temporarily disabled.' }
    ],
    realWorldExample: 'A developer writes a highly complex math algorithm. They write a multi-line comment above it explaining the mathematical formula used, so the next developer doesn\'t break it.',
    commonMistakes: [
      { error: 'Commenting obvious code', code: 'let a = 5; // sets a to 5', suffix: 'Don\'t write comments that simply repeat the code. Comments should explain the "Why", not the "What".' }
    ],
    bestPractices: ['Use comments to explain complex logic, business rules, or why you chose a specific approach. Don\'t over-comment.'],
    practiceExercise: {
      task: 'Write a JavaScript file that has one single-line comment, one multi-line comment, and a console.log that actually runs.',
      expectedOutput: 'File executes successfully, logging one item.',
      solution: '// My note\n/* Multi \n note */\nconsole.log("Runs");'
    },
    quiz: [
      { question: 'What symbol is used for a single-line comment in JavaScript?', options: ['<!--', '#', '//', '/*'], answer: '//' },
      { question: 'What symbols surround a multi-line block comment?', options: ['/* and */', '<!-- and -->', '## and ##', '[[ and ]]'], answer: '/* and */' },
      { question: 'Does the JavaScript engine execute commented code?', options: ['Yes, it runs it silently', 'No, it completely ignores it', 'Only in strict mode', 'Only if there are no errors in it'], answer: 'No, it completely ignores it' },
      { question: 'What is a good reason to use comments?', options: ['To make the file size larger', 'To explain the "Why" behind complex logic to other developers', 'To add styling to the output', 'To trigger animations'], answer: 'To explain the "Why" behind complex logic to other developers' },
      { question: 'What does "commenting out" code mean?', options: ['Deleting the code permanently', 'Placing comment syntax around code to temporarily disable it during debugging', 'Writing insults in the code', 'Encrypting the code'], answer: 'Placing comment syntax around code to temporarily disable it during debugging' }
    ],
    interviewQuestions: [
      { q: 'Should you commit code with large blocks of "commented out" code?', a: 'No. Version control systems like Git track history, so you can always recover old code. Leaving large blocks of disabled code clutters the file and confuses other developers.' }
    ],
    summary: ['`//` for single line.', '`/* */` for multi-line.', 'Ignored by the JS Engine.'],
    references: commonReferences
  },

  'js_variables': {
    isStructured: true,
    title: '8. Variables',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Variables are named containers for storing data values. Once a value is stored in a variable, you can use that name to refer to the data throughout your code.',
    whyUseIt: 'Without variables, you would have to hardcode every piece of data. Variables allow you to store user inputs, calculation results, and dynamic data.',
    syntax: 'let variableName = value;',
    codeExample: 'let playerName = "Alex";\nlet score = 0;\n\nscore = score + 10; // Update score\n\nconsole.log(playerName, "has", score, "points.");',
    expectedOutput: 'Alex has 10 points.',
    explanation: [
      { code: 'let playerName = "Alex";', desc: 'Creates a variable called playerName and assigns the string "Alex" to it.' },
      { code: 'score = score + 10;', desc: 'Variables created with `let` can have their values updated or reassigned later.' }
    ],
    realWorldExample: 'In an e-commerce cart, the total price changes as you add items. A variable named `cartTotal` holds that number and updates continuously.',
    commonMistakes: [
      { error: 'Invalid variable names', code: 'let 1stPlace = "John";', suffix: 'Variable names cannot start with a number. They also cannot contain spaces or hyphens.' }
    ],
    bestPractices: ['Use camelCase for variable names (e.g., `userFirstName`). Give variables descriptive names (`userAge` instead of `x`).'],
    practiceExercise: {
      task: 'Declare a variable called `age` set to 20. Then, on the next line, update it to 21. Log it to the console.',
      expectedOutput: '21',
      solution: 'let age = 20;\nage = 21;\nconsole.log(age);'
    },
    quiz: [
      { question: 'What is a variable?', options: ['A function that does math', 'A named container for storing data values', 'A type of error', 'An HTML tag'], answer: 'A named container for storing data values' },
      { question: 'Which of the following is a valid variable name in JavaScript?', options: ['1stUser', 'first-user', 'firstUser', 'first user'], answer: 'firstUser' },
      { question: 'What naming convention is standard for JavaScript variables?', options: ['snake_case', 'PascalCase', 'camelCase', 'kebab-case'], answer: 'camelCase' },
      { question: 'Can you change the value of a variable declared with `let` after it is created?', options: ['Yes', 'No', 'Only if it is a number', 'Only once'], answer: 'Yes' },
      { question: 'What is the assignment operator used to assign a value to a variable?', options: ['==', '=>', '=', '::'], answer: '=' }
    ],
    interviewQuestions: [
      { q: 'Why shouldn\'t you use single-letter variable names like `a` or `x` (except in short loops)?', a: 'Single-letter names make code very difficult to read and maintain. A variable named `userEmail` clearly states its purpose, whereas `e` is ambiguous.' }
    ],
    summary: ['Variables store data.', 'Use `let` to declare them.', 'Use descriptive, camelCase naming.'],
    references: commonReferences
  },

  'js_var_vs_let_vs_const': {
    isStructured: true,
    title: '9. var vs let vs const',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'JavaScript has three keywords to declare variables. `var` is the old way. `let` and `const` were introduced in ES6 (2015) to fix the scoping and reassignment issues of `var`.',
    whyUseIt: 'You must choose the right keyword to communicate intent (e.g., this value shouldn\'t change) and to prevent bugs caused by data leaking outside of its intended block.',
    syntax: 'var oldVar = 1;\nlet newVar = 2;   // Can be reassigned\nconst constant = 3; // Cannot be reassigned',
    codeExample: 'const birthYear = 1990;\n// birthYear = 1991; // ERROR: Assignment to constant variable\n\nlet age = 30;\nage = 31; // Valid, let allows reassignment',
    expectedOutput: 'Trying to reassign a const will crash the script with a TypeError.',
    explanation: [
      { code: 'const', desc: 'Creates a constant variable. The pointer cannot be reassigned.' },
      { code: 'let', desc: 'Creates a block-scoped variable that can be updated later.' }
    ],
    realWorldExample: 'A developer stores an API URL. They use `const apiUrl = "https://..."` so no one can accidentally overwrite it. They use `let loginAttempts = 0` because that number will change.',
    commonMistakes: [
      { error: 'Using var in modern JavaScript', code: 'var name = "Bob";', suffix: '`var` is function-scoped and can be re-declared, causing nasty bugs where variables overwrite each other silently. Avoid using it.' }
    ],
    bestPractices: ['Default to using `const`. Only use `let` if you know the value will change (like in a loop or counter). Never use `var`.'],
    practiceExercise: {
      task: 'Declare a `const` for a user\'s ID, and a `let` for their username. Attempt to reassign both.',
      expectedOutput: 'Reassigning the let works, but reassigning the const throws an error.',
      solution: 'const id = 123; let name = "A"; name = "B"; // id = 124; throws error.'
    },
    quiz: [
      { question: 'Which keyword creates a variable that CANNOT be reassigned?', options: ['let', 'var', 'const', 'static'], answer: 'const' },
      { question: 'Which keyword should you generally AVOID using in modern JavaScript?', options: ['let', 'var', 'const', 'function'], answer: 'var' },
      { question: 'If you need a counter variable inside a loop that increments, which keyword is best?', options: ['const', 'var', 'let', 'int'], answer: 'let' },
      { question: 'What type of scoping do `let` and `const` use?', options: ['Global scope only', 'Function scope', 'Block scope', 'No scope'], answer: 'Block scope' },
      { question: 'Can you re-declare a `let` variable with the exact same name in the same scope?', options: ['Yes', 'No, it throws a SyntaxError', 'Yes, but it gives a warning', 'Only if the value is the same'], answer: 'No, it throws a SyntaxError' }
    ],
    interviewQuestions: [
      { q: 'What is the main difference in scoping between `var` and `let`?', a: '`var` is function-scoped, meaning it ignores block statements like `if` or `for` loops and can leak out. `let` is block-scoped, meaning it only exists within the nearest curly braces `{}`.' }
    ],
    summary: ['`const`: Cannot be reassigned (Default choice).', '`let`: Can be reassigned (Use for counters/updates).', '`var`: Outdated, avoid using.'],
    references: commonReferences
  },

  'js_data_types': {
    isStructured: true,
    title: '10. Data Types',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Data types define what kind of data can be stored and manipulated within a program. JavaScript categorizes data into types like text (String), numbers (Number), true/false (Boolean), etc.',
    whyUseIt: 'The computer needs to know the type to understand what operations are allowed. You can do math with Numbers, but not with Booleans.',
    syntax: 'let str = "Hello";    // String\nlet num = 42;         // Number\nlet bool = true;      // Boolean\nlet empty = null;     // Null\nlet missing;          // Undefined',
    codeExample: 'let name = "Alice";       // String\nlet age = 25;           // Number\nlet isOnline = false;   // Boolean\nlet userCar = null;     // Null (intentionally empty)\nlet futureValue;        // Undefined (declared but not assigned)',
    expectedOutput: 'Variables hold different types of data correctly.',
    explanation: [
      { code: '"Alice"', desc: 'Text surrounded by quotes is a String.' },
      { code: '25', desc: 'Numbers do not have quotes.' },
      { code: 'false', desc: 'A Boolean is strictly true or false, used for logic.' },
      { code: 'null', desc: 'Explicitly setting a variable to hold "nothing".' }
    ],
    realWorldExample: 'In an app, the user\'s username is a String, their age is a Number, and their subscription status (`isSubscribed`) is a Boolean.',
    commonMistakes: [
      { error: 'Putting quotes around numbers or booleans', code: 'let age = "25"; let isOnline = "true";', suffix: 'If you wrap it in quotes, it becomes a String. You cannot do math on a string age, and a string "false" actually evaluates to true in conditionals.' }
    ],
    bestPractices: ['Ensure variables hold the correct data type for their purpose to avoid logic errors.'],
    practiceExercise: {
      task: 'Create three variables: one string, one number, and one boolean, and log them.',
      expectedOutput: 'The values are printed to the console.',
      solution: 'let city = "NY"; let pop = 8000000; let isBig = true; console.log(city, pop, isBig);'
    },
    quiz: [
      { question: 'What data type is `let score = 99;`?', options: ['String', 'Number', 'Boolean', 'Object'], answer: 'Number' },
      { question: 'What data type is `let isActive = true;`?', options: ['String', 'Number', 'Boolean', 'Undefined'], answer: 'Boolean' },
      { question: 'What is the value of a variable that is declared but never assigned a value?', options: ['0', '"" (empty string)', 'null', 'undefined'], answer: 'undefined' },
      { question: 'What is the difference between `null` and `undefined`?', options: ['They are exactly the same', '`undefined` means a variable has been declared but has not yet been assigned a value. `null` is an assignment value that means "no value".', '`null` is a string, `undefined` is a number', '`null` causes an error, `undefined` does not'], answer: '`undefined` means a variable has been declared but has not yet been assigned a value. `null` is an assignment value that means "no value".' },
      { question: 'What data type is `"false"` (with quotes)?', options: ['Boolean', 'Number', 'String', 'Null'], answer: 'String' }
    ],
    interviewQuestions: [
      { q: 'Is JavaScript a statically typed or dynamically typed language?', a: 'Dynamically typed. You do not have to declare the type (like `int` or `string`) when creating a variable, and a variable can hold a string and later be reassigned to a number.' }
    ],
    summary: ['Strings for text, Numbers for math.', 'Booleans for true/false logic.', 'Null is intentional emptiness, Undefined is uninitialized.'],
    references: commonReferences
  },

  'js_primitive_vs_reference_data_types': {
    isStructured: true,
    title: '11. Primitive vs Reference Data Types',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'JavaScript separates data into two categories based on how they are stored in memory. Primitives (String, Number, Boolean) are stored by their actual value. Reference types (Objects, Arrays) are stored by a reference (pointer) to a location in memory.',
    whyUseIt: 'Understanding this is crucial. If you don\'t, you will accidentally overwrite data in arrays and objects because you thought you made a copy, but you actually just copied the pointer.',
    syntax: '// Primitive (Value)\nlet a = 10; let b = a;\n\n// Reference (Pointer)\nlet obj1 = { val: 10 }; let obj2 = obj1;',
    codeExample: 'let a = 10;\nlet b = a;\nb = 20;\nconsole.log(a); // Output: 10 (Independent)\n\nlet arr1 = [1, 2];\nlet arr2 = arr1;\narr2.push(3);\nconsole.log(arr1); // Output: [1, 2, 3] (Mutated!)',
    expectedOutput: 'Primitives stay independent. References mutate the original data.',
    explanation: [
      { code: 'let b = a;', desc: 'For primitives, this copies the actual value. They are completely independent.' },
      { code: 'let arr2 = arr1;', desc: 'For references, this copies the memory address. Both variables now point to the exact same array.' },
      { code: 'arr2.push(3);', desc: 'Modifying arr2 modifies the shared array in memory, so arr1 also sees the change.' }
    ],
    realWorldExample: 'Primitives are like giving a friend a photocopy of a document; they can scribble on it without ruining yours. References are like giving a friend the link to a Google Doc; if they delete a paragraph, it is deleted for you too.',
    commonMistakes: [
      { error: 'Trying to copy an object/array using =', code: 'let copy = myObject;', suffix: 'This does not create a copy. It creates a second pointer to the same object. Use the spread operator `...` to make true copies.' }
    ],
    bestPractices: ['Be extremely careful when passing arrays and objects into functions or assigning them to new variables, as you might mutate the original.'],
    practiceExercise: {
      task: 'Create an object `user = { name: "John" }`. Assign it to `admin = user`. Change `admin.name = "Jane"`. Log `user.name`.',
      expectedOutput: 'Jane',
      solution: 'let user = { name: "John" }; let admin = user; admin.name = "Jane"; console.log(user.name); // Jane'
    },
    quiz: [
      { question: 'Which of the following is a Reference Data Type?', options: ['String', 'Number', 'Boolean', 'Array'], answer: 'Array' },
      { question: 'Which of the following is a Primitive Data Type?', options: ['Object', 'Function', 'Array', 'String'], answer: 'String' },
      { question: 'How are Primitive data types stored in variables?', options: ['By Reference (Memory Address)', 'By Value', 'In a database', 'As an object'], answer: 'By Value' },
      { question: 'If `let x = [1]; let y = x; y.push(2);`, what is the value of `x`?', options: ['[1]', '[2]', '[1, 2]', 'Error'], answer: '[1, 2]' },
      { question: 'If `let a = "cat"; let b = a; b = "dog";`, what is the value of `a`?', options: ['"cat"', '"dog"', 'undefined', 'Error'], answer: '"cat"' }
    ],
    interviewQuestions: [
      { q: 'How do you create a true copy (clone) of an object or array without pointing to the same reference?', a: 'You can use the spread operator (e.g., `let newArr = [...oldArr]`) for a shallow copy, or `structuredClone()` / `JSON.parse(JSON.stringify())` for a deep copy.' }
    ],
    summary: ['Primitives (Strings, Numbers) are passed by Value.', 'Objects and Arrays are passed by Reference (memory address).', 'Modifying a copied reference modifies the original.'],
    references: commonReferences
  },

  'js_type_checking_with_typeof': {
    isStructured: true,
    title: '12. Type Checking with typeof',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `typeof` operator is used to determine the data type of a variable or value. It returns a string representing the type (like "string", "number", "boolean").',
    whyUseIt: 'When fetching data from an API or getting user input, you often need to verify if the data is a number or a string before performing math on it.',
    syntax: 'typeof value;',
    codeExample: 'console.log(typeof "Hello");  // "string"\nconsole.log(typeof 42);       // "number"\nconsole.log(typeof true);     // "boolean"\nconsole.log(typeof undefined);// "undefined"',
    expectedOutput: 'The type names printed to the console.',
    explanation: [
      { code: 'typeof 42', desc: 'Evaluates the number and returns the string "number".' }
    ],
    realWorldExample: 'A function calculates a discount. Inside the function, it checks `if (typeof price !== "number")` and throws an error if a user passed a text string instead of a price.',
    commonMistakes: [
      { error: 'Using typeof on arrays or null', code: 'typeof null; typeof [1,2];', suffix: 'Because of a historical bug in JavaScript, `typeof null` returns "object". `typeof` an Array also returns "object". To check if something is an array, use `Array.isArray()`.' }
    ],
    bestPractices: ['Use `typeof` to validate function arguments to prevent runtime crashes.'],
    practiceExercise: {
      task: 'Declare a variable with the value `false`. Use typeof to log its type to the console.',
      expectedOutput: '"boolean"',
      solution: 'let val = false; console.log(typeof val);'
    },
    quiz: [
      { question: 'What does `typeof "100"` return?', options: ['"number"', '"string"', '"NaN"', '"undefined"'], answer: '"string"' },
      { question: 'What does `typeof 100` return?', options: ['"number"', '"string"', '"object"', '"boolean"'], answer: '"number"' },
      { question: 'Due to a historical bug in JS, what does `typeof null` return?', options: ['"null"', '"undefined"', '"object"', '"boolean"'], answer: '"object"' },
      { question: 'What does `typeof undefined` return?', options: ['"object"', '"null"', '"error"', '"undefined"'], answer: '"undefined"' },
      { question: 'How should you check if a variable is an Array, since typeof returns "object"?', options: ['typeof myArray == "array"', 'myArray.is_array()', 'Array.isArray(myArray)', 'typeof(Array)'], answer: 'Array.isArray(myArray)' }
    ],
    interviewQuestions: [
      { q: 'Why is type checking important in a dynamically typed language like JavaScript?', a: 'Because variables can hold any type of data, operations might fail or produce weird results (like "5" + 5 = "55") if you don\'t ensure the variable is the expected type before operating on it.' }
    ],
    summary: ['Returns the data type as a string.', 'Crucial for input validation.', '`typeof null` incorrectly returns "object".'],
    references: commonReferences
  },

  'js_type_conversion': {
    isStructured: true,
    title: '13. Type Conversion',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Type conversion (or Type Casting) is the manual, explicit process of changing data from one type to another, such as converting a string to a number.',
    whyUseIt: 'HTML inputs and prompts always return data as Strings. If a user types "5" in a quantity box, you must manually convert it to a Number before multiplying it by the price.',
    syntax: 'Number(value)\nString(value)\nBoolean(value)',
    codeExample: 'let input = "25"; // String\nlet age = Number(input); // Now a Number\n\nlet num = 100;\nlet text = String(num); // Now a String',
    expectedOutput: 'Data changes types explicitly.',
    explanation: [
      { code: 'Number("25")', desc: 'Forces the string "25" to become the math-ready number 25.' },
      { code: 'String(100)', desc: 'Converts the number into text for display purposes.' }
    ],
    realWorldExample: 'A calculator app reads the first input field as `"10"` and the second as `"5"`. Before adding them (which would result in `"105"`), it explicitly converts them `Number("10") + Number("5")` to get 15.',
    commonMistakes: [
      { error: 'Converting letters to numbers', code: 'Number("Hello")', suffix: 'If you try to convert a non-numeric string to a number, JavaScript returns `NaN` (Not a Number), which will ruin any math calculations that follow.' }
    ],
    bestPractices: ['Always explicitly convert inputs to Numbers before doing math on them to prevent bugs.'],
    practiceExercise: {
      task: 'Create a string variable `"50"`. Convert it to a number and add 10 to it. Log the result.',
      expectedOutput: '60',
      solution: 'let str = "50"; let num = Number(str) + 10; console.log(num);'
    },
    quiz: [
      { question: 'Which built-in function explicitly converts a string to a number?', options: ['toNum()', 'Number()', 'parseNum()', 'Integer()'], answer: 'Number()' },
      { question: 'What happens if you run `Number("apple")`?', options: ['It returns 0', 'It throws an error', 'It returns NaN (Not a Number)', 'It returns "apple"'], answer: 'It returns NaN (Not a Number)' },
      { question: 'Which function converts a number to a string?', options: ['String()', 'text()', 'toStringType()', 'stringify()'], answer: 'String()' },
      { question: 'HTML text inputs always return values as what data type?', options: ['Number', 'String', 'Object', 'Boolean'], answer: 'String' },
      { question: 'What does `Boolean(1)` return?', options: ['false', '1', 'true', '"1"'], answer: 'true' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between explicit type conversion and implicit type coercion?', a: 'Explicit type conversion is when the developer manually uses functions like Number() or String() to change types. Implicit coercion is when the JavaScript engine changes the type automatically behind the scenes (e.g., "5" - 1 = 4).' }
    ],
    summary: ['Explicitly changing data types.', 'Use `Number()`, `String()`, `Boolean()`.', 'Invalid numbers convert to `NaN`.'],
    references: commonReferences
  },

  'js_type_coercion': {
    isStructured: true,
    title: '14. Type Coercion',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Type Coercion is JavaScript\'s automatic, implicit conversion of values from one data type to another when it encounters an operation involving mismatched types.',
    whyUseIt: 'You need to understand it to avoid bugs. JavaScript tries to be "helpful" by guessing what you meant, but this often leads to very confusing results.',
    syntax: '// Handled automatically by JS Engine',
    codeExample: 'console.log("5" + 2);   // "52" (Number 2 coerced to String)\nconsole.log("5" - 2);   // 3 (String "5" coerced to Number)\nconsole.log("5" * "2"); // 10 (Both coerced to Numbers)',
    expectedOutput: '"52", 3, 10',
    explanation: [
      { code: '"5" + 2', desc: 'The `+` operator prefers Strings. It converts 2 to a string and concatenates them.' },
      { code: '"5" - 2', desc: 'The `-` operator only works for math, so JS forces "5" into a number.' }
    ],
    realWorldExample: 'A developer accidentally adds an input string to a cart total: `let total = 100; total = total + "50";`. The total becomes `"10050"` instead of 150 because of coercion.',
    commonMistakes: [
      { error: 'Relying on coercion', code: 'if (input == 5)', suffix: 'Relying on the engine to guess types is dangerous. Always convert types explicitly and use strict equality (`===`).' }
    ],
    bestPractices: ['Never rely on type coercion. Always explicitly convert data types so your code is predictable.'],
    practiceExercise: {
      task: 'Predict the output of `"10" - "5"` and `"10" + "5"`. Run it in the console.',
      expectedOutput: '5, "105"',
      solution: 'console.log("10" - "5"); console.log("10" + "5");'
    },
    quiz: [
      { question: 'What is Type Coercion?', options: ['Manually changing a type using Number()', 'JavaScript automatically converting a type behind the scenes', 'An error caused by wrong types', 'Encrypting data'], answer: 'JavaScript automatically converting a type behind the scenes' },
      { question: 'What is the output of `"10" + 5`?', options: ['15', '"15"', '"105"', 'NaN'], answer: '"105"' },
      { question: 'What is the output of `"10" - 5`?', options: ['5', '"105"', '"5"', 'NaN'], answer: '5' },
      { question: 'Why does the `+` operator behave differently with strings than `-`, `*`, and `/`?', options: ['It is broken', 'The `+` operator is overloaded to also mean String Concatenation, so it prefers combining strings', 'It only does math', 'Because strings are numbers'], answer: 'The `+` operator is overloaded to also mean String Concatenation, so it prefers combining strings' },
      { question: 'How can you prevent bugs caused by coercion when comparing values?', options: ['Use `===` instead of `==`', 'Never use numbers', 'Use older versions of JS', 'Only use strings'], answer: 'Use `===` instead of `==`' }
    ],
    interviewQuestions: [
      { q: 'Explain the output of `[] + []` and `[] + {}` in JavaScript.', a: 'Due to extreme coercion rules, `[] + []` coerces to empty strings and results in `""`. `[] + {}` coerces the array to `""` and the object to `"[object Object]"`, resulting in `"[object Object]"`. This highlights why relying on coercion is bad practice.' }
    ],
    summary: ['JS guesses data types automatically.', '`+` prefers strings (Concatenation).', '`-`, `*`, `/` prefer numbers (Math).'],
    references: commonReferences
  }
};
