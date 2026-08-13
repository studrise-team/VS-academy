const commonReferences = [
  { label: 'MDN Web Docs - Document.createElement()', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement' },
  { label: 'MDN Web Docs - Events', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events' }
];

export const javascriptContentBatchMissing13 = {
  'js_creating_elements': {
    isStructured: true,
    title: '145. Creating Elements',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'You can create brand new HTML elements completely from scratch using `document.createElement()`, configure them, and then physically insert them into the DOM.',
    whyUseIt: 'Unlike `innerHTML` which uses raw text strings, creating elements piece-by-piece is safer (no XSS risks), preserves event listeners, and gives you fine-grained control over every attribute and child node.',
    syntax: 'const el = document.createElement("tagName"); parent.append(el);',
    codeExample: '// 1. Create a new <p> element\nconst newParagraph = document.createElement("p");\n\n// 2. Add some text to it\nnewParagraph.textContent = "I was created by JavaScript!";\n\n// 3. Add a class to it\nnewParagraph.classList.add("highlight");\n\n// 4. Attach it to the DOM so the user can see it\nconst container = document.querySelector("#container");\ncontainer.append(newParagraph);',
    expectedOutput: 'A new paragraph appears inside the #container on the webpage.',
    explanation: [
      { code: 'document.createElement("p")', desc: 'Creates the element in memory. At this point, it is NOT on the web page yet.' },
      { code: 'container.append(...)', desc: 'Takes the element from memory and officially adds it to the DOM as the last child of `container`.' }
    ],
    realWorldExample: 'Building a "To-Do List" app. Every time the user hits "Add", you create a new `<li>`, add the task text, and append it to the `<ul>`.',
    commonMistakes: [
      { error: 'Forgetting to append', code: 'const div = document.createElement("div"); div.textContent="Hi";', suffix: 'If you don\'t use `.append()`, `.appendChild()`, or `.prepend()`, the element exists only in the computer\'s memory and will never appear on the screen.' }
    ],
    bestPractices: ['Configure the element completely (add text, classes, attributes) *before* appending it to the DOM. Appending triggers a browser re-render, so you want to do it only once the element is ready.'],
    practiceExercise: {
      task: 'Create a new `<h1>` element. Set its text to "Welcome". Append it to `document.body`.',
      expectedOutput: 'A new <h1> appears at the bottom of the page.',
      solution: 'const h1 = document.createElement("h1"); h1.textContent = "Welcome"; document.body.append(h1);'
    },
    quiz: [
      { question: 'Which method creates a new HTML element in memory?', options: ['document.newElement()', 'document.createElement()', 'document.makeNode()', 'document.add()'], answer: 'document.createElement()' },
      { question: 'Does `document.createElement("div")` immediately show the div on the webpage?', options: ['Yes', 'No, it only creates it in memory. You must append it to the DOM.', 'Only if you add text to it', 'Only in strict mode'], answer: 'No, it only creates it in memory. You must append it to the DOM.' },
      { question: 'What does `parent.append(child)` do?', options: ['Replaces the parent with the child', 'Adds the child as the LAST element inside the parent', 'Adds the child as the FIRST element inside the parent', 'Deletes the child'], answer: 'Adds the child as the LAST element inside the parent' },
      { question: 'What is the difference between `append()` and `prepend()`?', options: ['They are exactly the same', 'append adds to the end, prepend adds to the beginning', 'append is for text, prepend is for elements', 'append is faster'], answer: 'append adds to the end, prepend adds to the beginning' },
      { question: 'Why is `createElement` generally preferred over `innerHTML +=`?', options: ['It is faster and safer (prevents XSS and doesn\'t destroy existing event listeners)', 'It uses less code', 'It allows you to write raw HTML strings', 'It applies CSS automatically'], answer: 'It is faster and safer (prevents XSS and doesn\'t destroy existing event listeners)' }
    ],
    interviewQuestions: [
      { q: 'What is a DocumentFragment and why is it useful?', a: 'A DocumentFragment is a lightweight, invisible DOM container. You can append 100 new elements to a fragment in memory, and then append the fragment to the DOM once. This triggers only 1 reflow/re-render instead of 100, massively improving performance.' }
    ],
    summary: ['Use `createElement` to build elements safely.', 'Configure them in memory first.', 'Use `append()` to attach them to the live DOM.'],
    references: commonReferences
  },
  'js_removing_elements': {
    isStructured: true,
    title: '146. Removing Elements',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'You can remove an element entirely from the DOM using the `.remove()` method.',
    whyUseIt: 'To delete items from a list, close a modal window, or remove a loading spinner once data has finished fetching.',
    syntax: 'element.remove();',
    codeExample: '// HTML: <div id="ad-banner">Buy Now!</div>\n\nconst banner = document.querySelector("#ad-banner");\n\n// Remove the element completely\nbanner.remove();',
    expectedOutput: 'The #ad-banner div disappears from the webpage and is deleted from the DOM tree.',
    explanation: [
      { code: 'banner.remove()', desc: 'Directly calls the remove method on the element you want to destroy. It removes the element and all of its children.' }
    ],
    realWorldExample: 'A user clicks the "X" button on a popup. The JavaScript selects the popup wrapper `<div>` and calls `.remove()` on it.',
    commonMistakes: [
      { error: 'Using the old `removeChild` method unnecessarily', code: 'element.parentNode.removeChild(element);', suffix: 'Before ES6, `.remove()` didn\'t exist, so you had to find the parent and ask it to remove the child. You will see this in old tutorials, but `.remove()` is the modern, simpler way.' }
    ],
    bestPractices: ['If you might need the element again later, consider hiding it with CSS (`element.style.display = "none"`) instead of permanently `.remove()`ing it.'],
    practiceExercise: {
      task: 'Select an element with the class `spinner`. Call the method to remove it from the page.',
      expectedOutput: 'The spinner element is deleted.',
      solution: 'document.querySelector(".spinner").remove();'
    },
    quiz: [
      { question: 'What is the modern method to delete an element from the DOM?', options: ['element.delete()', 'element.remove()', 'document.destroy(element)', 'element.clear()'], answer: 'element.remove()' },
      { question: 'If you remove an element that contains child elements (like a `<ul>` containing `<li>`s), what happens to the children?', options: ['They are moved to the body', 'They throw an error', 'They are removed along with the parent', 'They become global variables'], answer: 'They are removed along with the parent' },
      { question: 'What was the older, more complex way to remove an element before `.remove()` existed?', options: ['element.hide()', 'element.parentNode.removeChild(element)', 'element.innerHTML = null', 'element.style.display = "none"'], answer: 'element.parentNode.removeChild(element)' },
      { question: 'Does removing an element from the DOM delete the JavaScript variable pointing to it?', options: ['Yes', 'No, the variable still holds the element in memory, it is just no longer on the screen', 'Only in strict mode', 'Yes, it becomes undefined'], answer: 'No, the variable still holds the element in memory, it is just no longer on the screen' },
      { question: 'Which is better for an element you want to show again later (like a dropdown menu)?', options: ['element.remove()', 'element.style.display = "none"', 'element.innerHTML = ""', 'document.deleteNode()'], answer: 'element.style.display = "none"' }
    ],
    interviewQuestions: [
      { q: 'If I call `element.remove()`, but I have an event listener attached to that element, does the listener cause a memory leak?', a: 'Modern browsers have good garbage collection. If there are no other JavaScript references to that element, the element and its listeners will be safely garbage collected.' }
    ],
    summary: ['Use `.remove()` to delete an element.', 'Removes the element and all its children.', 'Consider hiding (`display: none`) if you need it later.'],
    references: commonReferences
  },
  'js_attributes': {
    isStructured: true,
    title: '148. Attributes',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Attributes are the extra values attached to HTML tags, like `src` in `<img>`, `href` in `<a>`, or custom `data-*` attributes. JavaScript can read, change, or remove these attributes.',
    whyUseIt: 'To change where an image points, disable a button, change the link destination, or read custom data embedded in the HTML.',
    syntax: 'element.getAttribute("name"); element.setAttribute("name", "value");',
    codeExample: '// HTML: <img id="hero" src="day.png" alt="Daytime">\n\nconst img = document.querySelector("#hero");\n\n// 1. Get an attribute\nconsole.log(img.getAttribute("src")); // "day.png"\n\n// 2. Set/Change an attribute\nimg.setAttribute("src", "night.png");\n\n// 3. Remove an attribute\nimg.removeAttribute("alt");',
    expectedOutput: 'The image instantly changes from day.png to night.png.',
    explanation: [
      { code: 'getAttribute("src")', desc: 'Reads the current value of the `src` attribute.' },
      { code: 'setAttribute("src", "night.png")', desc: 'Changes the attribute. Since changing an image `src` tells the browser to load a new image, the webpage will update automatically.' }
    ],
    realWorldExample: 'Toggling a password input between dots and text: `input.setAttribute("type", "text");` to show the password, and `input.setAttribute("type", "password");` to hide it.',
    commonMistakes: [
      { error: 'Confusing attributes with properties', code: 'input.setAttribute("value", "Hi")', suffix: 'While `setAttribute` works for HTML attributes, it is often better to directly modify the DOM property: `input.value = "Hi"`. Attributes initialize the DOM; Properties are the live, current state.' }
    ],
    bestPractices: ['Use `data-*` attributes (e.g., `data-user-id="123"`) in your HTML to store custom data, and read it in JS using `element.dataset.userId`.'],
    practiceExercise: {
      task: 'Select an `<a>` tag with the id "link". Use `setAttribute` to change its `href` to "https://google.com".',
      expectedOutput: 'The link destination is changed.',
      solution: 'document.querySelector("#link").setAttribute("href", "https://google.com");'
    },
    quiz: [
      { question: 'Which method is used to read the value of an HTML attribute?', options: ['element.readAttribute()', 'element.getAttribute()', 'element.attribute()', 'element.get()'], answer: 'element.getAttribute()' },
      { question: 'How many arguments does `setAttribute` take?', options: ['1', '2 (the attribute name, and the new value)', '3', '0'], answer: '2 (the attribute name, and the new value)' },
      { question: 'How would you completely remove the `disabled` attribute from a button?', options: ['button.setAttribute("disabled", false)', 'button.disabled = "none"', 'button.removeAttribute("disabled")', 'button.delete("disabled")'], answer: 'button.removeAttribute("disabled")' },
      { question: 'What is the `dataset` property used for?', options: ['Storing information in a database', 'Reading custom `data-*` attributes (like `data-id="5"`)', 'Setting dates', 'Applying CSS'], answer: 'Reading custom `data-*` attributes (like `data-id="5"`)' },
      { question: 'Is `element.id = "new"` the same as `element.setAttribute("id", "new")`?', options: ['Yes, for standard properties like id, src, and href, directly modifying the property does the same thing', 'No, they are completely different', 'Only in strict mode', 'The first one throws an error'], answer: 'Yes, for standard properties like id, src, and href, directly modifying the property does the same thing' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between an HTML Attribute and a DOM Property?', a: 'Attributes are defined in the HTML string and represent the *initial* state. Properties are values on the living DOM object in JavaScript and represent the *current* state. Changing the `value` property of an `<input>` does NOT change its `value` HTML attribute.' }
    ],
    summary: ['Use `getAttribute` to read HTML attributes.', 'Use `setAttribute` to change them.', 'Use `removeAttribute` to delete them.'],
    references: commonReferences
  },
  'js_dom_traversal': {
    isStructured: true,
    title: '149. DOM Traversal',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'DOM Traversal means "walking" through the DOM tree. Instead of selecting an element directly, you select an element based on its relationship to another element (e.g., finding the parent, the children, or the siblings).',
    whyUseIt: 'Sometimes you don\'t have a class or ID to select the exact element you want, but you *do* know it is the parent or sibling of an element you already have.',
    syntax: 'element.parentElement; element.children; element.nextElementSibling;',
    codeExample: '// HTML:\n// <ul>\n//   <li class="active">First</li>\n//   <li>Second</li>\n// </ul>\n\nconst firstLi = document.querySelector(".active");\n\n// Go UP to the parent\nconst ul = firstLi.parentElement;\n\n// Go SIDEWAYS to the next sibling\nconst secondLi = firstLi.nextElementSibling;\n\n// Go DOWN to the children of the UL\nconst allChildren = ul.children;',
    expectedOutput: 'You successfully navigate between related HTML elements.',
    explanation: [
      { code: 'parentElement', desc: 'Returns the direct container of the element (in this case, the `<ul>`).' },
      { code: 'nextElementSibling', desc: 'Returns the very next element on the same level (the second `<li>`).' }
    ],
    realWorldExample: 'A user clicks a "Delete" button inside a shopping cart row. The JavaScript uses `button.parentElement.remove()` to delete the entire row that the button belongs to.',
    commonMistakes: [
      { error: 'Confusing Node traversal with Element traversal', code: 'element.nextSibling', suffix: '`nextSibling` might return a hidden Text Node (like a line break in your HTML code). Always use `nextElementSibling` to ensure you are getting an actual HTML tag.' }
    ],
    bestPractices: ['Prefer `closest(".class")` if you need to travel UP multiple levels to find a specific ancestor, rather than chaining `parentElement.parentElement`. `closest()` searches up the tree until it finds a match.'],
    practiceExercise: {
      task: 'Given `const btn = document.querySelector(".btn");`, write code to select the button\'s parent element and assign it to a variable `parent`.',
      expectedOutput: 'The parent element is selected.',
      solution: 'const parent = btn.parentElement;'
    },
    quiz: [
      { question: 'What does `element.parentElement` return?', options: ['All ancestors', 'The direct HTML element that contains this element', 'The previous sibling', 'An array of children'], answer: 'The direct HTML element that contains this element' },
      { question: 'How do you get all the HTML elements immediately inside a `div`?', options: ['div.childNodes', 'div.children', 'div.innerElements', 'div.descendants'], answer: 'div.children' },
      { question: 'Why is `nextElementSibling` preferred over `nextSibling`?', options: ['It is faster', 'It ignores empty text nodes (like line breaks in HTML) and only returns actual HTML elements', 'It returns multiple elements', 'It supports CSS selectors'], answer: 'It ignores empty text nodes (like line breaks in HTML) and only returns actual HTML elements' },
      { question: 'What does the `.closest("selector")` method do?', options: ['Finds the nearest sibling', 'Searches UP the DOM tree (ancestors) until it finds an element matching the selector', 'Searches DOWN the DOM tree', 'Calculates pixel distance'], answer: 'Searches UP the DOM tree (ancestors) until it finds an element matching the selector' },
      { question: 'If an element has no previous sibling, what does `previousElementSibling` return?', options: ['undefined', 'false', 'null', 'An empty string'], answer: 'null' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `children` and `childNodes`?', a: '`children` only contains Element nodes (HTML tags). `childNodes` contains EVERYTHING, including Text nodes (whitespace/line breaks) and Comment nodes.' }
    ],
    summary: ['Travel UP with `parentElement` or `closest()`.', 'Travel DOWN with `children`.', 'Travel SIDEWAYS with `nextElementSibling` / `previousElementSibling`.'],
    references: commonReferences
  },
  'js_what_are_events': {
    isStructured: true,
    title: '150. What are Events?',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Events are "things" that happen in the browser, usually triggered by the user (like clicking, typing, scrolling) or by the browser itself (like the page finishing loading).',
    whyUseIt: 'JavaScript is entirely event-driven. You write code that essentially says: "Wait here doing nothing. WHEN this specific event happens, THEN run this function."',
    syntax: '// We use Event Listeners to respond to Events',
    codeExample: '// The Event: "click"\n// The Response: A function\n\nconst button = document.querySelector("button");\n\nbutton.addEventListener("click", function() {\n  console.log("The button was clicked!");\n});',
    expectedOutput: 'Nothing happens initially. When the user clicks the button, the message logs.',
    explanation: [
      { code: '"click"', desc: 'The name of the event we are listening for.' },
      { code: 'function() { ... }', desc: 'The "Event Handler" or "Callback function". It only executes when the event actually occurs.' }
    ],
    realWorldExample: 'Listening for a "submit" event on a login form so you can validate the password before sending it to the server.',
    commonMistakes: [
      { error: 'Executing the function immediately', code: 'button.addEventListener("click", myFunc());', suffix: 'Adding `()` runs `myFunc` immediately when the page loads, instead of waiting for the click. Pass the function reference instead: `button.addEventListener("click", myFunc);`.' }
    ],
    bestPractices: ['Always use `addEventListener` rather than old inline HTML attributes (like `<button onclick="doSomething()">`), as `addEventListener` allows you to attach multiple different functions to the same event cleanly.'],
    practiceExercise: {
      task: 'Select `id="btn"`. Use `addEventListener` to listen for a "mouseover" event. When it happens, log "Hovered!".',
      expectedOutput: 'Logs "Hovered!" when the mouse passes over the button.',
      solution: 'document.querySelector("#btn").addEventListener("mouseover", () => console.log("Hovered!"));'
    },
    quiz: [
      { question: 'What is an event in JavaScript?', options: ['A function that loops forever', 'An action that happens in the browser, like a click or a keypress', 'A server request', 'A CSS animation'], answer: 'An action that happens in the browser, like a click or a keypress' },
      { question: 'Which method is the standard way to attach a response to an event?', options: ['element.onEvent()', 'element.listen()', 'element.addEventListener()', 'element.attach()'], answer: 'element.addEventListener()' },
      { question: 'What are the two most important arguments you must pass to `addEventListener`?', options: ['The element ID and a function', 'The event type (e.g., "click") and a callback function', 'Two callback functions', 'An event type and a CSS style'], answer: 'The event type (e.g., "click") and a callback function' },
      { question: 'Why is `button.addEventListener("click", sayHi())` wrong?', options: ['It should be "onclick"', 'The `()` causes the function to run immediately on page load, rather than waiting for the click', 'It is missing a semicolon', 'sayHi is not a valid name'], answer: 'The `()` causes the function to run immediately on page load, rather than waiting for the click' },
      { question: 'Which of these is NOT a standard DOM event?', options: ['"scroll"', '"keydown"', '"think"', '"submit"'], answer: '"think"' }
    ],
    interviewQuestions: [
      { q: 'What is the Event Object?', a: 'When an event triggers, the browser automatically passes an Event Object as the first argument to your callback function (e.g., `function(e) {}`). This object contains data about the event, like the exact mouse coordinates or which keyboard key was pressed.' }
    ],
    summary: ['Events are actions (clicks, typing).', 'Use `addEventListener` to react to them.', 'Pass a callback function, don\'t execute it immediately.'],
    references: commonReferences
  }
};
