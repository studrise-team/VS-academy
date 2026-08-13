const commonReferences = [
  { label: 'W3Schools JavaScript HTML DOM', url: 'https://www.w3schools.com/js/js_htmldom.asp' },
  { label: 'MDN Web Docs - Introduction to the DOM', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction' }
];

export const javascriptContentBatch10 = {
  'js_what_is_dom': {
    isStructured: true,
    title: '133-134. What is the DOM?',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'DOM stands for Document Object Model. When a web page is loaded, the browser creates a Document Object Model of the page. It is a tree-like representation of the HTML document, where every HTML element becomes an "Object" that JavaScript can interact with.',
    whyUseIt: 'Without the DOM, JavaScript would have no way to see or change what is on the screen. The DOM provides the API (the bridge) that allows JavaScript to read HTML, change text, change colors, and react to user clicks.',
    syntax: 'document.propertyName;\ndocument.methodName();',
    codeExample: '// The "document" object represents your entire web page\nconsole.log(document.title);\nconsole.log(document.URL);\n\n// You can change the title of the browser tab:\ndocument.title = "My Awesome App";',
    expectedOutput: '"Title of your page"\n"http://localhost:3000/page"\n(Browser tab title changes)',
    explanation: [
      { code: 'document', desc: 'The global object that represents the HTML document in the browser window.' },
      { code: 'document.title', desc: 'A property of the DOM that stores the text inside the `<title>` tags.' }
    ],
    realWorldExample: 'A single-page application (like Gmail or Facebook) uses the DOM to constantly update the screen (showing new messages, notifications) without ever refreshing the actual web page.',
    commonMistakes: [
      { error: 'Trying to access the DOM before it loads', code: '<script>document.getElementById("myTitle").innerText = "Hi";</script>\n<h1 id="myTitle">Hello</h1>', suffix: 'If the script runs before the HTML element is created by the browser, it will fail. Always put your script tags at the very bottom of the `<body>`, or use `defer`.' }
    ],
    bestPractices: ['Remember that DOM operations (reading/writing to the HTML) are slow compared to pure JavaScript logic. Minimize how often you change the DOM to keep your app fast.'],
    practiceExercise: {
      task: 'Log the URL of the current webpage to the console using the `document` object.',
      expectedOutput: '(The URL of the page you are on)',
      solution: 'console.log(document.URL);'
    },
    quiz: [
      { question: 'What does DOM stand for?', options: ['Data Object Model', 'Document Object Model', 'Display Object Management', 'Document Oriented Module'], answer: 'Document Object Model' },
      { question: 'What does the DOM represent?', options: ['The server database', 'The CSS stylesheets only', 'A tree structure of the HTML document', 'The JavaScript engine'], answer: 'A tree structure of the HTML document' },
      { question: 'What global object do you use in JavaScript to access the DOM?', options: ['window', 'html', 'document', 'browser'], answer: 'document' },
      { question: 'Why is the DOM important?', options: ['It makes HTML faster', 'It is required to write CSS', 'It allows JavaScript to interact with and change the webpage', 'It replaces JavaScript'], answer: 'It allows JavaScript to interact with and change the webpage' },
      { question: 'Where is the best place to include your JavaScript file in the HTML to avoid DOM loading errors?', options: ['In the <head>', 'At the very top of the <body>', 'At the very bottom of the <body>', 'Outside the <html> tag'], answer: 'At the very bottom of the <body>' }
    ],
    interviewQuestions: [
      { q: 'Is the DOM part of the JavaScript language?', a: 'No. The DOM is a Web API provided by the browser. JavaScript is simply the language we use to interact with this API. (This is why Node.js has JavaScript, but no DOM).' }
    ],
    summary: ['DOM = Document Object Model.', 'It represents HTML as a tree of objects.', 'Use the global `document` object to access it.'],
    references: commonReferences
  },

  'js_selecting_elements': {
    isStructured: true,
    title: '135-139. Selecting Elements',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Selecting elements is the process of finding specific HTML tags on the page so you can manipulate them. You can select by ID, Class, Tag name, or CSS selectors.',
    whyUseIt: 'Before you can change the color of a button or the text of a heading, you must first "grab" that exact element from the DOM.',
    syntax: 'document.getElementById("id")\ndocument.getElementsByClassName("class")\ndocument.querySelector("css_selector")\ndocument.querySelectorAll("css_selector")',
    codeExample: '// HTML: <h1 id="title">Hello</h1>\n// HTML: <p class="text">Para 1</p> <p class="text">Para 2</p>\n\nconst heading = document.getElementById("title");\nconst paragraphs = document.getElementsByClassName("text");\n\n// querySelector uses CSS syntax (. for class, # for id)\nconst firstPara = document.querySelector(".text");\nconst allParas = document.querySelectorAll(".text");\n\nconsole.log(heading);\nconsole.log(firstPara);',
    expectedOutput: '<h1 id="title">Hello</h1>\n<p class="text">Para 1</p>',
    explanation: [
      { code: 'getElementById("title")', desc: 'Finds the single element with `id="title"`. Very fast.' },
      { code: 'querySelector(".text")', desc: 'Finds the FIRST element that matches the CSS class `.text`.' },
      { code: 'querySelectorAll(".text")', desc: 'Finds ALL elements that match and returns them in a NodeList (similar to an array).' }
    ],
    realWorldExample: 'Selecting all checkboxes on a form using `document.querySelectorAll("input[type=\'checkbox\']")` to see which ones the user checked.',
    commonMistakes: [
      { error: 'Forgetting the dot or hash in querySelector', code: 'document.querySelector("title")', suffix: 'If you want to select by ID, you must use `#title`. If you want class, use `.title`. If you just write `title`, it looks for a `<title>` HTML tag.' },
      { error: 'Treating getElementsByClassName as a single element', code: 'document.getElementsByClassName("btn").style.color = "red";', suffix: 'This returns an HTMLCollection (a list), even if there is only one element. You must use an index: `...[0].style...`.' }
    ],
    bestPractices: ['Modern developers strongly prefer `querySelector()` and `querySelectorAll()` because of their flexibility with CSS syntax.'],
    practiceExercise: {
      task: 'Given `<div id="box" class="container"></div>`. Select this element using its ID and save it to a variable `myBox`.',
      expectedOutput: '(No visible output, but the variable stores the element)',
      solution: 'const myBox = document.getElementById("box");'
    },
    quiz: [
      { question: 'Which method selects a single element by its ID attribute?', options: ['querySelector()', 'getElementById()', 'selectId()', 'getId()'], answer: 'getElementById()' },
      { question: 'What does `document.querySelector(".card")` return?', options: ['All elements with class "card"', 'The first element with class "card"', 'An error', 'An array of strings'], answer: 'The first element with class "card"' },
      { question: 'If you want to select ALL `<li>` elements, which method should you use?', options: ['getElementById("li")', 'querySelector("li")', 'querySelectorAll("li")', 'selectAll("li")'], answer: 'querySelectorAll("li")' },
      { question: 'What symbol is used in `querySelector` to select an ID?', options: ['.', '#', '*', '$'], answer: '#' },
      { question: 'What does `document.getElementsByClassName()` return?', options: ['A single HTML element', 'A string', 'An HTMLCollection (array-like list) of elements', 'A boolean'], answer: 'An HTMLCollection (array-like list) of elements' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between a NodeList (returned by querySelectorAll) and an HTMLCollection (returned by getElementsByClassName)?', a: 'An HTMLCollection is "live", meaning if the DOM changes later, the collection updates automatically. A NodeList from `querySelectorAll` is "static"; it represents a snapshot of the DOM at the exact moment it was called.' }
    ],
    summary: ['`getElementById` for single IDs.', '`querySelector` for the first match using CSS syntax.', '`querySelectorAll` for all matches.'],
    references: commonReferences
  },

  'js_changing_content_styles': {
    isStructured: true,
    title: '140-144. Changing Content and Styles',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Once you select an element, you can change its visible text, its inner HTML tags, its inline CSS styles, or add/remove CSS classes.',
    whyUseIt: 'This is the core of interactive websites. You change content to show a success message, change styles to highlight an error in red, or add a class to trigger a CSS animation.',
    syntax: 'element.textContent = "New Text";\nelement.innerHTML = "<strong>Bold</strong>";\nelement.style.property = "value";\nelement.classList.add("className");',
    codeExample: '// Assume HTML: <p id="msg" class="alert">Old Text</p>\nconst msg = document.getElementById("msg");\n\n// 1. Change Text\nmsg.textContent = "Welcome to the site!";\n\n// 2. Change Style (CSS properties use camelCase)\nmsg.style.backgroundColor = "green";\nmsg.style.fontSize = "20px";\n\n// 3. Manage Classes\nmsg.classList.remove("alert");\nmsg.classList.add("success");',
    expectedOutput: '(The paragraph now says "Welcome to the site!", has a green background, 20px font, and class="success")',
    explanation: [
      { code: 'textContent', desc: 'Safely changes only the text inside the element.' },
      { code: 'innerHTML', desc: 'Changes the HTML inside. Be careful: using this with user input can lead to XSS security vulnerabilities.' },
      { code: 'style.backgroundColor', desc: 'Notice it is `backgroundColor`, not `background-color`. JavaScript requires camelCase for CSS properties with hyphens.' },
      { code: 'classList.add()', desc: 'The cleanest way to change styles is to add a CSS class that is already defined in your stylesheet.' }
    ],
    realWorldExample: 'A Dark Mode toggle button. When clicked, JavaScript runs `document.body.classList.toggle("dark-mode");`.',
    commonMistakes: [
      { error: 'Using hyphens in style properties', code: 'element.style.font-size = "16px";', suffix: 'JavaScript interprets the hyphen as a minus sign. You must use camelCase: `element.style.fontSize`.' }
    ],
    bestPractices: ['Avoid changing inline styles (`element.style...`) directly if possible. It is much better practice to use `classList.add()` and `classList.remove()` to apply classes defined in your CSS.'],
    practiceExercise: {
      task: 'Select an element with id `header`. Change its text to "Dashboard" and add the class "active" to it.',
      expectedOutput: '(The element updates accordingly)',
      solution: 'let hdr = document.getElementById("header"); hdr.textContent = "Dashboard"; hdr.classList.add("active");'
    },
    quiz: [
      { question: 'Which property is safest for changing text, as it prevents HTML injection (XSS)?', options: ['innerHTML', 'innerText', 'textContent', 'outerHTML'], answer: 'textContent' },
      { question: 'How do you change the background color of an element named `box`?', options: ['box.style.background-color = "red"', 'box.style.backgroundColor = "red"', 'box.css.backgroundColor = "red"', 'box.color.background = "red"'], answer: 'box.style.backgroundColor = "red"' },
      { question: 'What is the recommended way to apply a group of styles to an element?', options: ['Write 10 lines of `element.style` code', 'Use `element.classList.add("myClass")`', 'Use `element.innerHTML`', 'Refresh the page'], answer: 'Use `element.classList.add("myClass")`' },
      { question: 'How do you remove a class named "hidden" from an element?', options: ['element.className = ""', 'element.classList.delete("hidden")', 'element.classList.remove("hidden")', 'element.style.display = "block"'], answer: 'element.classList.remove("hidden")' },
      { question: 'What does `element.classList.toggle("active")` do?', options: ['Deletes the element', 'Adds the class if it is missing, removes it if it is present', 'Replaces all classes with "active"', 'Makes the element clickable'], answer: 'Adds the class if it is missing, removes it if it is present' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `innerText` and `textContent`?', a: '`textContent` gets the exact text content of all elements, including hidden ones (`<script>`, `<style>`, `display: none`). `innerText` only shows the "human-readable" text that is currently visible on the screen.' }
    ],
    summary: ['Use `textContent` for plain text.', 'CSS properties in JS use camelCase.', 'Use `classList` to add/remove CSS classes cleanly.'],
    references: commonReferences
  },

  'js_creating_elements': {
    isStructured: true,
    title: '145-147. Creating and Adding Elements',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'You can use JavaScript to create brand new HTML elements from scratch and append (add) them into the existing DOM tree.',
    whyUseIt: 'When fetching data from a database (like a list of 10 new tweets), you use JavaScript to create 10 new `<div>` elements and insert them into the page dynamically.',
    syntax: 'const el = document.createElement("tagName");\nparentElement.appendChild(el);',
    codeExample: '// 1. Create a new <li> element\nconst newListItem = document.createElement("li");\n\n// 2. Add content to it\nnewListItem.textContent = "Learn DOM Manipulation";\nnewListItem.classList.add("highlight");\n\n// 3. Find where to put it\nconst ul = document.getElementById("myList");\n\n// 4. Add it to the page\nul.appendChild(newListItem);',
    expectedOutput: '(A new list item "Learn DOM Manipulation" appears at the bottom of the list on the webpage)',
    explanation: [
      { code: 'createElement("li")', desc: 'Creates the element in memory, but it is NOT on the screen yet.' },
      { code: 'textContent = ...', desc: 'We configure the element while it is in memory.' },
      { code: 'appendChild(newListItem)', desc: 'Inserts the new element as the LAST child of the `ul` element, making it visible on the screen.' }
    ],
    realWorldExample: 'A "To-Do List" app. When the user types a task and clicks "Add", JavaScript creates a new `<li>`, sets the text, and appends it to the `<ul>`.',
    commonMistakes: [
      { error: 'Forgetting to append the element', code: 'const div = document.createElement("div");\ndiv.textContent = "Hello";', suffix: 'If you don\'t call `appendChild`, `prepend`, or `insertBefore` on an existing DOM node, your new element will just sit invisibly in the computer\'s memory forever.' }
    ],
    bestPractices: ['If you need to add 100 items to a list, don\'t use `appendChild` 100 times in a loop (it causes 100 expensive screen redraws). Instead, use a `DocumentFragment`, append everything to the fragment, and then append the fragment to the DOM once.'],
    practiceExercise: {
      task: 'Create a new `<p>` element, set its text to "Generated by JS", and append it to `document.body`.',
      expectedOutput: '(A paragraph appears at the bottom of the page)',
      solution: 'let p = document.createElement("p"); p.textContent = "Generated by JS"; document.body.appendChild(p);'
    },
    quiz: [
      { question: 'Which method creates a new HTML element?', options: ['document.newElement()', 'document.createElement()', 'document.make()', 'document.add()'], answer: 'document.createElement()' },
      { question: 'After creating an element, what must you do to see it on the page?', options: ['Set its innerHTML', 'Add a CSS class', 'Append it to an existing element in the DOM', 'Call document.refresh()'], answer: 'Append it to an existing element in the DOM' },
      { question: 'What does `appendChild()` do?', options: ['Adds an element to the beginning of a parent', 'Adds an element as the last child of a parent', 'Replaces the parent element', 'Deletes the child element'], answer: 'Adds an element as the last child of a parent' },
      { question: 'How do you remove an element named `box` from the DOM?', options: ['box.delete()', 'box.remove()', 'document.erase(box)', 'box.style.display = "none"'], answer: 'box.remove()' },
      { question: 'What argument does `createElement` take?', options: ['The text content', 'The CSS class name', 'The HTML tag name (e.g., "div", "span")', 'The ID'], answer: 'The HTML tag name (e.g., "div", "span")' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `append()` and `appendChild()`?', a: '`appendChild` only allows you to append a single DOM Node object, and it returns the appended node. `append` allows you to append multiple nodes AND strings (text) at once, and it returns `undefined`.' }
    ],
    summary: ['`document.createElement("tag")` makes the element.', 'Configure the element in memory first.', 'Use `parent.appendChild(element)` to show it.'],
    references: commonReferences
  }
};
