const commonReferences = [
  { label: 'MDN Web Docs - DOM Introduction', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction' }
];

export const javascriptContentBatchMissing11 = {
  'js_function_practice_problems': {
    isStructured: true,
    title: '132. Function Practice Problems',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'This section tests your understanding of JavaScript Functions, including parameters, returns, scope, callbacks, and closures.',
    whyUseIt: 'Functions are the building blocks of any JavaScript program. Mastering them is essential for writing clean, reusable, and efficient code.',
    syntax: '// Practice Exercises Below',
    codeExample: '// Example problem: Write a function that returns the square of a number\nfunction square(n) {\n  return n * n;\n}\nconsole.log(square(5)); // 25',
    expectedOutput: '25',
    explanation: [
      { code: 'return n * n', desc: 'The function takes `n` as an argument and returns the product of `n` multiplied by itself.' }
    ],
    realWorldExample: 'A coding interview where you are asked to write a function that filters an array of objects based on a specific condition.',
    commonMistakes: [
      { error: 'Forgetting the return keyword', code: 'function add(a, b) { a + b; }', suffix: 'This function returns `undefined`. You must explicitly write `return a + b;`.' },
      { error: 'Confusing parameters and arguments', code: 'function greet("Alice") {}', suffix: 'Parameters are variables in the definition (e.g., `function greet(name)`). Arguments are values passed during the call (e.g., `greet("Alice")`).' }
    ],
    bestPractices: ['Keep functions small and focused on doing one thing well (Single Responsibility Principle).'],
    practiceExercise: {
      task: 'Write a function `isEven(num)` that returns `true` if `num` is even, and `false` otherwise. Call it with 4 and 7.',
      expectedOutput: 'true\nfalse',
      solution: 'function isEven(num) { return num % 2 === 0; } console.log(isEven(4)); console.log(isEven(7));'
    },
    quiz: [
      { question: 'Problem 1: How do you write a function expression assigned to a variable named `multiply`?', options: ['const multiply = function(a, b) { return a * b; }', 'function multiply(a, b) { return a * b; }', 'const multiply(a, b) => { return a * b; }', 'let function multiply(a, b) {}'], answer: 'const multiply = function(a, b) { return a * b; }' },
      { question: 'Problem 2: What is the output of `(function() { return 5; })()`?', options: ['undefined', '5', 'An error', 'A function'], answer: '5' },
      { question: 'Problem 3: Write a higher-order function `callTwice(fn)` that calls the passed function `fn` twice.', options: ['function callTwice(fn) { fn(); fn(); }', 'function callTwice() { fn(2); }', 'function callTwice(fn) { return fn * 2; }', 'function callTwice(fn) { fn.call(2); }'], answer: 'function callTwice(fn) { fn(); fn(); }' },
      { question: 'Problem 4: How do you set a default value of 10 for parameter `y` in `function foo(x, y)`?', options: ['function foo(x, y || 10)', 'function foo(x, y = 10)', 'function foo(x, y: 10)', 'function foo(x, y == 10)'], answer: 'function foo(x, y = 10)' },
      { question: 'Problem 5: What is a closure?', options: ['A function without a name', 'A function that remembers its outer variables even after the outer function has returned', 'A function that cannot be modified', 'A function that runs immediately'], answer: 'A function that remembers its outer variables even after the outer function has returned' }
    ],
    interviewQuestions: [
      { q: 'Write a function `sum` that can be called like this: `sum(2)(3)` and returns 5.', a: '`function sum(a) { return function(b) { return a + b; }; }` (This is currying!)' }
    ],
    summary: ['Practice writing clean, focused functions.', 'Understand how closures and callbacks work.', 'Remember to `return` values when necessary.'],
    references: commonReferences
  },
  'js_what_is_the_dom': {
    isStructured: true,
    title: '133. What is the DOM?',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs (like JavaScript) can change the document structure, style, and content.',
    whyUseIt: 'Without the DOM, JavaScript would have no way to interact with the HTML on a webpage. The DOM is what allows you to build dynamic, interactive websites instead of static pages.',
    syntax: '// Access the DOM using the global `document` object',
    codeExample: '// The entire HTML document is stored in the "document" object\nconsole.log(document);\n\n// We can access specific parts of it\nconsole.log(document.title);\nconsole.log(document.body);',
    expectedOutput: '#document\n"My Website Title"\n<body>...</body>',
    explanation: [
      { code: 'document', desc: 'The global object representing the HTML page. It is the entry point to the DOM.' },
      { code: 'document.title', desc: 'Reads the `<title>` tag from the HTML `<head>`.' }
    ],
    realWorldExample: 'When you log into a website and your name appears in the top corner, JavaScript used the DOM to find that specific `<span>` and change its text to your name.',
    commonMistakes: [
      { error: 'Confusing the DOM with HTML', code: '', suffix: 'HTML is the raw text code you write. The DOM is the live, in-memory representation of that HTML inside the browser. If JavaScript modifies the page, the DOM changes, but your original HTML file on the server remains untouched.' }
    ],
    bestPractices: ['DOM operations (changing elements, adding elements) are generally slow compared to pure JavaScript logic. Minimize DOM manipulations for better performance.'],
    practiceExercise: {
      task: 'Use `console.log` to print out the URL of the current page using the `document` object. (Hint: look for a property related to the URL).',
      expectedOutput: '"https://..." (the current page URL)',
      solution: 'console.log(document.URL);'
    },
    quiz: [
      { question: 'What does DOM stand for?', options: ['Data Object Model', 'Document Object Model', 'Dynamic Output Method', 'Document Oriented Model'], answer: 'Document Object Model' },
      { question: 'What is the DOM essentially?', options: ['A JavaScript framework', 'A database for web pages', 'A tree-like representation of the HTML document', 'A CSS styling language'], answer: 'A tree-like representation of the HTML document' },
      { question: 'What is the entry point object to interact with the DOM in JavaScript?', options: ['window', 'html', 'dom', 'document'], answer: 'document' },
      { question: 'Are the DOM and your raw HTML file the exact same thing?', options: ['Yes', 'No, the DOM is a live, memory representation that JS can alter', 'Only on the first load', 'Yes, but the DOM is compressed'], answer: 'No, the DOM is a live, memory representation that JS can alter' },
      { question: 'Which of the following is NOT part of the DOM?', options: ['HTML elements (div, p, etc.)', 'CSS styles applied to those elements', 'The Node.js file system API', 'Text inside HTML elements'], answer: 'The Node.js file system API' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between the `window` object and the `document` object?', a: '`window` represents the browser tab/window itself (global variables, setTimeout, alert). `document` represents the HTML content *inside* that window.' }
    ],
    summary: ['Document Object Model.', 'Tree representation of HTML.', 'Accessed via the global `document` object.'],
    references: commonReferences
  },
  'js_selecting_elements': {
    isStructured: true,
    title: '135. Selecting Elements',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Selecting elements is the process of finding specific HTML nodes in the DOM tree so you can read from them or modify them using JavaScript.',
    whyUseIt: 'Before you can change the text of a paragraph, hide a menu, or make a button interactive, you first have to "grab" (select) that element from the page.',
    syntax: 'document.querySelector("selector");',
    codeExample: '// HTML: <h1 id="main-title" class="title">Hello</h1>\n\n// Selecting by tag name\nconst heading1 = document.querySelector("h1");\n\n// Selecting by class\nconst heading2 = document.querySelector(".title");\n\n// Selecting by ID\nconst heading3 = document.querySelector("#main-title");',
    expectedOutput: 'All three variables now point to the exact same <h1> HTML element in memory.',
    explanation: [
      { code: 'document.querySelector()', desc: 'The most versatile selector. It uses standard CSS selectors to find elements.' },
      { code: '".title"', desc: 'The dot `.` indicates a class, just like in CSS.' },
      { code: '"#main-title"', desc: 'The hash `#` indicates an ID, just like in CSS.' }
    ],
    realWorldExample: 'Selecting a form input to read what the user typed: `let emailInput = document.querySelector("#email");`.',
    commonMistakes: [
      { error: 'Forgetting the dot or hash in querySelector', code: 'document.querySelector("title")', suffix: 'This looks for a `<title>` HTML tag, NOT an element with `class="title"`. You must include the dot: `.title`.' }
    ],
    bestPractices: ['Whenever possible, use IDs or specific classes to select elements rather than relying on tag names or complex structural selectors (like `ul > li:nth-child(2)`), as structural selectors break easily if the HTML changes.'],
    practiceExercise: {
      task: 'Write the code to select a `<button class="submit-btn">` using `querySelector` and assign it to a `const btn`.',
      expectedOutput: 'The button element is selected.',
      solution: 'const btn = document.querySelector(".submit-btn");'
    },
    quiz: [
      { question: 'Why do you need to select elements?', options: ['To make them load faster', 'Because JS cannot modify an element until it has a reference to it', 'To apply CSS automatically', 'To delete the HTML file'], answer: 'Because JS cannot modify an element until it has a reference to it' },
      { question: 'What syntax does `querySelector` use to find elements?', options: ['XPath', 'Regular Expressions', 'CSS Selectors', 'SQL queries'], answer: 'CSS Selectors' },
      { question: 'How do you select an element with `class="card"` using `querySelector`?', options: ['querySelector("card")', 'querySelector(".card")', 'querySelector("#card")', 'querySelector(class=card)'], answer: 'querySelector(".card")' },
      { question: 'What does `querySelector` return if it finds multiple matching elements?', options: ['An array of all matches', 'An error', 'Only the FIRST matching element it finds', 'The LAST matching element'], answer: 'Only the FIRST matching element it finds' },
      { question: 'What does `querySelector` return if NO matches are found?', options: ['undefined', 'false', 'null', 'An empty array'], answer: 'null' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `querySelector` and `querySelectorAll`?', a: '`querySelector` returns the single FIRST element that matches. `querySelectorAll` returns a NodeList (like an array) of ALL elements that match.' }
    ],
    summary: ['Select elements to manipulate them.', 'Use `querySelector` for CSS-like selection.', 'Returns the first match or null.'],
    references: commonReferences
  },
  'js_getelementbyid': {
    isStructured: true,
    title: '136. getElementById()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`getElementById()` is a method that returns the element that has the ID attribute with the specified value.',
    whyUseIt: 'It is the fastest and most efficient way to select a single, unique element from the DOM. Since IDs must be unique in an HTML document, it is guaranteed to return at most one element.',
    syntax: 'document.getElementById("id-name");',
    codeExample: '// HTML: <div id="app-container">App</div>\n\nconst container = document.getElementById("app-container");\n\nconsole.log(container);',
    expectedOutput: '<div id="app-container">App</div>',
    explanation: [
      { code: 'document.getElementById()', desc: 'The specific method for finding by ID.' },
      { code: '"app-container"', desc: 'The name of the ID. Notice there is NO hash (`#`) here! The method already knows it\'s looking for an ID.' }
    ],
    realWorldExample: 'Grabbing the main canvas element in a game: `const canvas = document.getElementById("game-canvas");`.',
    commonMistakes: [
      { error: 'Including the hash (#)', code: 'document.getElementById("#app")', suffix: '`getElementById` does NOT use CSS selectors. Do not include the `#`. Just pass the string "app".' },
      { error: 'Using it for classes', code: 'document.getElementById("btn")', suffix: 'If the HTML is `<button class="btn">`, this will return `null` because it only looks at the `id` attribute.' }
    ],
    bestPractices: ['If you know the ID of an element, prefer `getElementById` over `querySelector` as it is slightly faster and clearly signals intent (that this element is unique).'],
    practiceExercise: {
      task: 'Write code to select an element with `id="nav-menu"` using `getElementById` and assign it to a variable `menu`.',
      expectedOutput: 'Element selected.',
      solution: 'const menu = document.getElementById("nav-menu");'
    },
    quiz: [
      { question: 'What does `getElementById` return?', options: ['A single element', 'An array of elements', 'A string', 'A NodeList'], answer: 'A single element' },
      { question: 'Do you need to include a `#` in the string passed to `getElementById`?', options: ['Yes, always', 'No, never', 'Only in strict mode', 'Only if the ID contains a number'], answer: 'No, never' },
      { question: 'What happens if two elements have the same ID (which is bad HTML practice) and you use `getElementById`?', options: ['It returns an array of both', 'It throws an error', 'It returns the FIRST element it finds with that ID', 'It returns null'], answer: 'It returns the FIRST element it finds with that ID' },
      { question: 'What does it return if the ID does not exist?', options: ['undefined', 'false', 'null', 'Error'], answer: 'null' },
      { question: 'Which is generally faster: `getElementById("box")` or `querySelector("#box")`?', options: ['querySelector is faster', 'getElementById is faster', 'They are exactly the same speed', 'It depends on the browser'], answer: 'getElementById is faster' }
    ],
    interviewQuestions: [
      { q: 'Is it possible to call `getElementById` on an individual element (e.g., `myDiv.getElementById("child")`)?', a: 'No. `getElementById` is only available on the global `document` object, because IDs are meant to be globally unique across the entire document.' }
    ],
    summary: ['Fastest way to select a single element.', 'Does NOT use the `#` symbol.', 'Returns `null` if not found.'],
    references: commonReferences
  },
  'js_getelementsbyclassname': {
    isStructured: true,
    title: '137. getElementsByClassName()',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`getElementsByClassName()` returns a live HTMLCollection containing all elements in the document that have the specified class name.',
    whyUseIt: 'When you need to select multiple elements at once that share the same styling or purpose, such as all the "cards" in a grid, or all the "error-messages" in a form.',
    syntax: 'document.getElementsByClassName("class-name");',
    codeExample: '// HTML:\n// <div class="item">1</div>\n// <div class="item">2</div>\n\nconst items = document.getElementsByClassName("item");\n\nconsole.log(items.length); // 2\nconsole.log(items[0]); // <div class="item">1</div>',
    expectedOutput: '2\n<div class="item">1</div>',
    explanation: [
      { code: '"item"', desc: 'The name of the class. Do NOT include a dot (`.`).' },
      { code: 'items[0]', desc: 'The result is a collection (similar to an array), so you must access individual elements using brackets and an index.' }
    ],
    realWorldExample: 'Selecting all checkboxes in a list to mark them as checked: `const boxes = document.getElementsByClassName("checkbox");`.',
    commonMistakes: [
      { error: 'Including the dot (.)', code: 'document.getElementsByClassName(".item")', suffix: 'Do not use CSS selectors here. Just pass the raw class name "item".' },
      { error: 'Trying to use array methods like map or forEach', code: 'items.forEach(i => ...)', suffix: 'It returns an `HTMLCollection`, which is Array-*like*, but not an actual Array. It does not have `.forEach()`. You must use a standard `for` loop, or convert it to an array first: `Array.from(items).forEach(...)`.' }
    ],
    bestPractices: ['Be aware that `HTMLCollection` is "live". If an element with that class is added or removed from the DOM *after* you selected it, the collection will automatically update to reflect the change. (Unlike `querySelectorAll` which is static).'],
    practiceExercise: {
      task: 'Select all elements with the class "btn". Assign the collection to a variable `buttons`. Then, log the length of the collection.',
      expectedOutput: 'Number of elements',
      solution: 'const buttons = document.getElementsByClassName("btn"); console.log(buttons.length);'
    },
    quiz: [
      { question: 'What does `getElementsByClassName` return?', options: ['A single element', 'A standard JavaScript Array', 'An HTMLCollection', 'A NodeList'], answer: 'An HTMLCollection' },
      { question: 'Do you need to use a dot (`.`) before the class name?', options: ['Yes', 'No', 'Only if there are multiple classes', 'Only in strict mode'], answer: 'No' },
      { question: 'Can you use `.forEach()` directly on the result of `getElementsByClassName`?', options: ['Yes', 'No, because it is an HTMLCollection, not an Array', 'Only in Chrome', 'Yes, but it is slow'], answer: 'No, because it is an HTMLCollection, not an Array' },
      { question: 'How do you access the first element in the returned collection?', options: ['collection.first()', 'collection[0]', 'collection.get(1)', 'collection(0)'], answer: 'collection[0]' },
      { question: 'What does it mean that the returned HTMLCollection is "live"?', options: ['It has event listeners attached', 'It automatically updates if the DOM changes', 'It consumes more battery', 'It can animate CSS'], answer: 'It automatically updates if the DOM changes' }
    ],
    interviewQuestions: [
      { q: 'How do you convert an HTMLCollection into a true JavaScript array so you can use `.map()` or `.filter()`?', a: 'You can use `Array.from(collection)` or the spread operator `[...collection]`.' }
    ],
    summary: ['Selects multiple elements by class.', 'Returns a live HTMLCollection.', 'Does NOT have array methods like `.forEach()`.'],
    references: commonReferences
  }
};
