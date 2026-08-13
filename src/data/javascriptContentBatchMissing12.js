const commonReferences = [
  { label: 'MDN Web Docs - DOM Manipulation', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents' }
];

export const javascriptContentBatchMissing12 = {
  'js_queryselector': {
    isStructured: true,
    title: '138. querySelector()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`document.querySelector()` returns the first Element within the document that matches the specified CSS selector or group of selectors.',
    whyUseIt: 'It is the most versatile and modern way to select elements. Instead of memorizing `getElementById`, `getElementsByClassName`, and `getElementsByTagName`, you can just use `querySelector` for everything.',
    syntax: 'document.querySelector("css-selector");',
    codeExample: '// HTML: \n// <div class="container">\n//   <p class="text">First</p>\n//   <p class="text">Second</p>\n// </div>\n\n// Select by tag\nconst div = document.querySelector("div");\n\n// Select by class (returns ONLY the first one)\nconst firstText = document.querySelector(".text");\n\n// Complex CSS selector\nconst nestedText = document.querySelector(".container > p");',
    expectedOutput: 'The first matching elements are selected.',
    explanation: [
      { code: 'querySelector(".text")', desc: 'Even though there are TWO paragraphs with the class "text", `querySelector` stops searching as soon as it finds the very first one.' },
      { code: 'querySelector(".container > p")', desc: 'You can use advanced CSS selectors like the child combinator (`>`) to be extremely precise about what you want.' }
    ],
    realWorldExample: 'Grabbing a specific button inside a navigation menu: `const loginBtn = document.querySelector("nav ul li .login-btn");`.',
    commonMistakes: [
      { error: 'Forgetting the CSS symbol', code: 'document.querySelector("container")', suffix: 'This looks for a `<container>` tag. If it is a class, you MUST use `.container`. If it is an ID, you MUST use `#container`.' },
      { error: 'Expecting multiple elements', code: 'const allText = document.querySelector(".text");', suffix: 'It ONLY returns the first match. If you want all of them, use `querySelectorAll(".text")`.' }
    ],
    bestPractices: ['Prefer `querySelector` for most single-element selections due to its flexibility. However, for extremely high-performance scenarios involving IDs, `getElementById` is slightly faster.'],
    practiceExercise: {
      task: 'Write the code to select an element with the ID "submit-btn" using `querySelector`. Assign it to a variable `btn`.',
      expectedOutput: 'Element selected.',
      solution: 'const btn = document.querySelector("#submit-btn");'
    },
    quiz: [
      { question: 'What does `querySelector` return?', options: ['All elements that match', 'Only the first element that matches', 'A boolean', 'An array of classes'], answer: 'Only the first element that matches' },
      { question: 'What type of syntax does `querySelector` use to find elements?', options: ['Regular Expressions', 'XPath', 'CSS Selectors', 'HTML Tags only'], answer: 'CSS Selectors' },
      { question: 'How do you select an element with `id="header"` using `querySelector`?', options: ['querySelector("header")', 'querySelector(".header")', 'querySelector("#header")', 'querySelector(header)'], answer: 'querySelector("#header")' },
      { question: 'What does `querySelector` return if no element matches?', options: ['undefined', 'null', 'false', 'An empty array'], answer: 'null' },
      { question: 'Which method should you use if you want to select ALL elements that share a class?', options: ['querySelector', 'querySelectorAll', 'getElementById', 'selectMany'], answer: 'querySelectorAll' }
    ],
    interviewQuestions: [
      { q: 'Can you call `querySelector` on an element instead of `document`?', a: 'Yes! `myDiv.querySelector(".child")` will only search for `.child` elements that are located *inside* `myDiv`, rather than searching the whole page.' }
    ],
    summary: ['Most versatile selection method.', 'Uses CSS selectors (`.class`, `#id`).', 'Returns only the first match.'],
    references: commonReferences
  },
  'js_changing_text': {
    isStructured: true,
    title: '140. Changing Text',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'You can change the text content of an HTML element using JavaScript by modifying its `textContent` or `innerText` property.',
    whyUseIt: 'Websites need to be dynamic. When a user logs in, you change the text from "Login" to "Welcome, User". When a score increases, you update the score text.',
    syntax: 'element.textContent = "New text";',
    codeExample: '// HTML: <h1 id="title">Hello World</h1>\n\nconst title = document.querySelector("#title");\n\n// Read the current text\nconsole.log(title.textContent);\n\n// Change the text\ntitle.textContent = "Welcome to JavaScript!";',
    expectedOutput: '"Hello World"\n(The web page now displays "Welcome to JavaScript!")',
    explanation: [
      { code: 'title.textContent', desc: 'Reads the exact text currently inside the `<h1>` tag.' },
      { code: 'title.textContent = "Welcome..."', desc: 'Completely overwrites whatever was inside the `<h1>` with the new string.' }
    ],
    realWorldExample: 'Updating a shopping cart counter: `cartCounter.textContent = items.length;`.',
    commonMistakes: [
      { error: 'Trying to add HTML tags', code: 'el.textContent = "<strong>Bold</strong>"', suffix: '`textContent` treats everything as raw text. It will literally display "<strong>Bold</strong>" on the screen, tags and all. If you want to render HTML, you must use `innerHTML`.' }
    ],
    bestPractices: ['Always prefer `textContent` over `innerHTML` when you only need to change text. It is faster and protects against Cross-Site Scripting (XSS) security attacks.'],
    practiceExercise: {
      task: 'Select an element with `id="msg"` and change its text content to "Success!".',
      expectedOutput: 'The element\'s text updates to "Success!".',
      solution: 'document.querySelector("#msg").textContent = "Success!";'
    },
    quiz: [
      { question: 'Which property is best for changing the text of an element?', options: ['element.text', 'element.value', 'element.textContent', 'element.html'], answer: 'element.textContent' },
      { question: 'What is the difference between `textContent` and `innerText`?', options: ['They are exactly the same', '`innerText` is aware of CSS styling and won\'t return hidden text, while `textContent` returns all text regardless of CSS', '`textContent` only works on inputs', '`innerText` is faster'], answer: '`innerText` is aware of CSS styling and won\'t return hidden text, while `textContent` returns all text regardless of CSS' },
      { question: 'What happens if you set `element.textContent = "<h1>Hi</h1>"`?', options: ['It renders a large heading', 'It displays the raw text "<h1>Hi</h1>" on screen', 'It throws an error', 'It deletes the element'], answer: 'It displays the raw text "<h1>Hi</h1>" on screen' },
      { question: 'Does setting `textContent` overwrite everything currently inside the element?', options: ['Yes, including child elements', 'No, it appends to the end', 'Only if it is a `<div>`', 'No, it only overwrites existing text nodes'], answer: 'Yes, including child elements' },
      { question: 'How do you append text rather than overwrite it?', options: ['element.textContent.push("Hi")', 'element.textContent += "Hi"', 'element.appendText("Hi")', 'element.addText("Hi")'], answer: 'element.textContent += "Hi"' }
    ],
    interviewQuestions: [
      { q: 'Why is `textContent` considered safer than `innerHTML`?', a: 'Because `textContent` automatically sanitizes the string, treating it strictly as text. `innerHTML` parses the string as code, opening the door to malicious users injecting `<script>` tags if you are displaying user input.' }
    ],
    summary: ['Use `textContent` to change text.', 'Overwrites everything inside the element.', 'Safe against XSS attacks.'],
    references: commonReferences
  },
  'js_changing_html': {
    isStructured: true,
    title: '141. Changing HTML',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `innerHTML` property allows you to get or set the HTML markup contained within an element.',
    whyUseIt: 'When you want to dynamically inject completely new structures (like a list of items, bold text, images, or entire complex cards) into the page from JavaScript.',
    syntax: 'element.innerHTML = "<p>New HTML</p>";',
    codeExample: '// HTML: <div id="container"></div>\n\nconst container = document.querySelector("#container");\n\n// Inject a brand new unordered list\ncontainer.innerHTML = `\n  <ul>\n    <li>Apple</li>\n    <li>Banana</li>\n  </ul>\n`;',
    expectedOutput: 'The empty <div> now contains a fully rendered, styled bulleted list.',
    explanation: [
      { code: 'container.innerHTML = ...', desc: 'The browser takes this string, parses it as real HTML, and renders it inside the container.' },
      { code: '`...`', desc: 'Template literals (backticks) are perfect for `innerHTML` because they allow multi-line strings.' }
    ],
    realWorldExample: 'Fetching a list of tweets from a server, looping through them, and setting a container\'s `innerHTML` to a giant string of HTML representing all the tweets.',
    commonMistakes: [
      { error: 'XSS (Cross-Site Scripting) Attacks', code: 'div.innerHTML = userInput;', suffix: 'NEVER use `innerHTML` to display data typed by a user without sanitizing it first. If a user types `<script>stealCookies()</script>`, your site will execute it.' },
      { error: 'Overwriting event listeners', code: 'div.innerHTML += "<p>Hi</p>"', suffix: 'Using `+=` with `innerHTML` completely destroys and recreates all child elements inside the div, breaking any click listeners attached to them. Use `insertAdjacentHTML` instead.' }
    ],
    bestPractices: ['Only use `innerHTML` when you absolutely need to render HTML tags. If you are just changing text, use `textContent`.'],
    practiceExercise: {
      task: 'Select `id="box"` and change its inner HTML to display a bold word: `<strong>Warning!</strong>`.',
      expectedOutput: 'The page displays "Warning!" in bold.',
      solution: 'document.querySelector("#box").innerHTML = "<strong>Warning!</strong>";'
    },
    quiz: [
      { question: 'Which property is used to read or change the HTML markup inside an element?', options: ['htmlContent', 'innerHTML', 'outerHTML', 'markup'], answer: 'innerHTML' },
      { question: 'What happens if you set `innerHTML` to `"<em>Wow</em>"`?', options: ['It displays "<em>Wow</em>" as raw text', 'It renders the word "Wow" in italics', 'It throws a syntax error', 'It deletes the element'], answer: 'It renders the word "Wow" in italics' },
      { question: 'What is the major security risk associated with `innerHTML`?', options: ['SQL Injection', 'Cross-Site Request Forgery (CSRF)', 'Cross-Site Scripting (XSS)', 'DDoS attacks'], answer: 'Cross-Site Scripting (XSS)' },
      { question: 'Does `element.innerHTML = ""` do anything?', options: ['No', 'Yes, it completely empties the element by removing all its children', 'It throws an error', 'It hides the element with CSS'], answer: 'Yes, it completely empties the element by removing all its children' },
      { question: 'Why are template literals (backticks) useful with `innerHTML`?', options: ['They run faster', 'They allow you to write multi-line HTML strings easily', 'They automatically sanitize the input', 'They prevent XSS'], answer: 'They allow you to write multi-line HTML strings easily' }
    ],
    interviewQuestions: [
      { q: 'Why is `element.insertAdjacentHTML()` often better than `element.innerHTML += ...`?', a: 'Because `innerHTML +=` destroys and re-parses the entire DOM tree inside the element. `insertAdjacentHTML()` parses the new string and inserts the new nodes *without* destroying existing nodes (saving performance and preserving event listeners).' }
    ],
    summary: ['Renders strings as real HTML.', 'Dangerous if used with unsanitized user input.', 'Use backticks for multi-line HTML strings.'],
    references: commonReferences
  },
  'js_changing_styles': {
    isStructured: true,
    title: '142. Changing Styles',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'You can change the CSS styles of an element directly from JavaScript using the `element.style` property.',
    whyUseIt: 'To create dynamic UI effects, like hiding a modal (`display: none`), changing a button\'s color when clicked, or moving an element based on mouse position.',
    syntax: 'element.style.propertyName = "value";',
    codeExample: '// HTML: <div id="box">Box</div>\n\nconst box = document.querySelector("#box");\n\n// Change text color\nbox.style.color = "red";\n\n// Change background color (Note camelCase!)\nbox.style.backgroundColor = "blue";\n\n// Change font size (MUST include units)\nbox.style.fontSize = "24px";',
    expectedOutput: 'The box becomes blue with red, 24px text.',
    explanation: [
      { code: 'box.style', desc: 'Accesses the inline styles of the element.' },
      { code: 'backgroundColor', desc: 'CSS properties with hyphens (`background-color`) MUST be converted to camelCase (`backgroundColor`) in JavaScript.' },
      { code: '"24px"', desc: 'Values must be strings, and you cannot forget the units (like `px`, `%`, `em`). `box.style.fontSize = 24;` will fail silently.' }
    ],
    realWorldExample: 'Creating a dark mode toggle: `document.body.style.backgroundColor = "black"; document.body.style.color = "white";`.',
    commonMistakes: [
      { error: 'Using CSS hyphen syntax', code: 'box.style.background-color = "blue";', suffix: 'This results in a JavaScript syntax error (it thinks you are trying to subtract the variable `color`). Use camelCase: `backgroundColor`.' },
      { error: 'Forgetting units', code: 'box.style.marginTop = 10;', suffix: 'This does nothing. You must include the unit as a string: `"10px"`.' }
    ],
    bestPractices: ['Directly changing `style` modifies the element\'s *inline* styles. While this works, it is often much better practice to toggle CSS classes (e.g., `element.classList.add("dark-mode")`) and leave the styling rules in your CSS file.'],
    practiceExercise: {
      task: 'Select an element with `id="circle"`. Change its `border-radius` to "50%" and its `display` to "none".',
      expectedOutput: 'The element becomes a circle and disappears.',
      solution: 'const circle = document.querySelector("#circle"); circle.style.borderRadius = "50%"; circle.style.display = "none";'
    },
    quiz: [
      { question: 'Which property is used to access inline CSS styles?', options: ['element.css', 'element.style', 'element.styling', 'element.format'], answer: 'element.style' },
      { question: 'How do you write the CSS property `margin-top` in JavaScript?', options: ['margin-top', 'margin_top', 'marginTop', 'MarginTop'], answer: 'marginTop' },
      { question: 'What is wrong with `box.style.width = 50;`?', options: ['width is not a valid property', '50 must be a string and include units, e.g., `"50px"`', 'It should be `box.width = 50;`', 'Nothing is wrong'], answer: '50 must be a string and include units, e.g., `"50px"`' },
      { question: 'Does modifying `element.style` change the external CSS file?', options: ['Yes', 'No, it only adds inline styles to that specific HTML element', 'Sometimes', 'Only if you save the file'], answer: 'No, it only adds inline styles to that specific HTML element' },
      { question: 'What is generally preferred over modifying dozens of `element.style` properties?', options: ['Using `element.html`', 'Adding/removing CSS classes via `classList`', 'Using a completely new HTML file', 'Using jQuery'], answer: 'Adding/removing CSS classes via `classList`' }
    ],
    interviewQuestions: [
      { q: 'How do you read the *actual* applied styles of an element, rather than just its inline styles?', a: 'You use `window.getComputedStyle(element)`. `element.style` only reads inline styles; it cannot read styles applied from external CSS stylesheets.' }
    ],
    summary: ['Convert CSS hyphens to JS camelCase.', 'Values must be strings with units (`"10px"`).', 'Modifies inline styles.'],
    references: commonReferences
  },
  'js_adding_classes': {
    isStructured: true,
    title: '143. Adding Classes',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `classList` property returns the class names of an element. It comes with built-in methods like `add()`, `remove()`, and `toggle()` to easily manipulate classes.',
    whyUseIt: 'Adding/removing CSS classes is the absolute best way to change an element\'s appearance. Instead of modifying 10 individual `style` properties in JS, you just add an `.active` class and let CSS handle the styling.',
    syntax: 'element.classList.add("class-name");',
    codeExample: '// CSS:\n// .hidden { display: none; }\n// .highlight { border: 2px solid yellow; }\n\nconst modal = document.querySelector("#my-modal");\n\n// Add a class\nmodal.classList.add("highlight");\n\n// Remove a class\nmodal.classList.remove("hidden");',
    expectedOutput: 'The modal loses the "hidden" class (becoming visible) and gains the "highlight" class (getting a border).',
    explanation: [
      { code: 'classList.add("highlight")', desc: 'Appends "highlight" to the element\'s list of classes. Does not overwrite existing classes.' },
      { code: 'classList.remove("hidden")', desc: 'Safely removes "hidden". If it wasn\'t there to begin with, it just ignores it without throwing an error.' }
    ],
    realWorldExample: 'Validating a form field. If the user types an invalid email, run `emailInput.classList.add("error-border");`.',
    commonMistakes: [
      { error: 'Including the dot (.)', code: 'box.classList.add(".active")', suffix: 'Do NOT use the dot. `classList` already knows it is dealing with classes. Passing ".active" will literally add a class named ".active", which breaks CSS.' },
      { error: 'Using the old `className` property', code: 'box.className = "active"', suffix: 'Using `className` overwrites *every single class* on the element. If it had `btn btn-primary`, it now ONLY has `active`. `classList.add()` is much safer.' }
    ],
    bestPractices: ['Keep styling logic in CSS. Keep state logic in JS. Use `classList` as the bridge between them.'],
    practiceExercise: {
      task: 'Select an element with `id="alert"`. Add the class "danger" and remove the class "success" using `classList`.',
      expectedOutput: 'Classes are updated safely.',
      solution: 'const alert = document.querySelector("#alert"); alert.classList.add("danger"); alert.classList.remove("success");'
    },
    quiz: [
      { question: 'Which property is used to easily add or remove classes?', options: ['element.classes', 'element.style', 'element.classList', 'element.css'], answer: 'element.classList' },
      { question: 'What is the method to add a class?', options: ['classList.push("new-class")', 'classList.add("new-class")', 'classList.insert("new-class")', 'classList += "new-class"'], answer: 'classList.add("new-class")' },
      { question: 'Should you include the dot (.) when adding a class (e.g., `classList.add(".active")`)?', options: ['Yes, always', 'No, never include the dot', 'Only if the class already exists', 'Only in strict mode'], answer: 'No, never include the dot' },
      { question: 'What is the danger of using `element.className = "active"`?', options: ['It is slower', 'It completely overwrites all existing classes on the element', 'It deletes the element', 'It throws an error in ES6'], answer: 'It completely overwrites all existing classes on the element' },
      { question: 'What happens if you try to remove a class that an element doesn\'t actually have?', options: ['It throws an error', 'It returns false', 'It safely ignores the command and does nothing', 'It adds it instead'], answer: 'It safely ignores the command and does nothing' }
    ],
    interviewQuestions: [
      { q: 'Is it possible to add multiple classes at once using `classList.add()`?', a: 'Yes! You can pass multiple strings separated by commas: `element.classList.add("btn", "btn-primary", "active");`.' }
    ],
    summary: ['Use `classList` instead of `className`.', 'Use `.add()` and `.remove()`.', 'Do NOT include the `.` in the class name string.'],
    references: commonReferences
  }
};
