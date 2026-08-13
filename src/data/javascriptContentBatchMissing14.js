const commonReferences = [
  { label: 'MDN Web Docs - Event reference', url: 'https://developer.mozilla.org/en-US/docs/Web/Events' }
];

export const javascriptContentBatchMissing14 = {
  'js_onclick': {
    isStructured: true,
    title: '151. onclick',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `onclick` property is an older way to assign a click event handler to an element. It fires when the user clicks the left mouse button on the element.',
    whyUseIt: 'While `addEventListener("click", ...)` is the modern standard, you will often see `.onclick = ...` in legacy code or very simple scripts because it is slightly shorter to type.',
    syntax: 'element.onclick = function() { ... };',
    codeExample: '// HTML: <button id="btn">Click Me!</button>\n\nconst btn = document.querySelector("#btn");\n\n// Using the onclick property\nbtn.onclick = function() {\n  console.log("Button clicked!");\n};\n\n// WARNING: If you assign it again, it OVERWRITES the first one!\nbtn.onclick = function() {\n  console.log("This replaces the previous function.");\n};',
    expectedOutput: 'Only the second message ("This replaces...") logs when clicked.',
    explanation: [
      { code: 'btn.onclick = ...', desc: 'Directly assigns a function to the `onclick` property of the button object.' },
      { code: 'Overwrites', desc: 'Because `onclick` is just an object property, assigning a new function to it completely erases any function that was assigned there previously.' }
    ],
    realWorldExample: 'A simple script on a landing page: `document.getElementById("close-ad").onclick = () => ad.remove();`.',
    commonMistakes: [
      { error: 'Overwriting event handlers', code: 'window.onclick = func1; window.onclick = func2;', suffix: 'Only `func2` will run. If you need multiple functions to run on the same click, you MUST use `addEventListener("click", ...)` instead.' }
    ],
    bestPractices: ['Avoid using `.onclick`. Always use `.addEventListener("click", ...)` in modern JavaScript to prevent accidentally overwriting other event handlers.'],
    practiceExercise: {
      task: 'Select an element with `id="alert-btn"`. Assign an arrow function to its `onclick` property that triggers an `alert("Hi!")`.',
      expectedOutput: 'Clicking the button shows an alert.',
      solution: 'document.querySelector("#alert-btn").onclick = () => alert("Hi!");'
    },
    quiz: [
      { question: 'What does the `onclick` property do?', options: ['Simulates a click on an element', 'Assigns a function to run when the element is clicked', 'Counts how many times an element was clicked', 'Prevents clicking'], answer: 'Assigns a function to run when the element is clicked' },
      { question: 'What is the biggest drawback of using `.onclick = ...` instead of `addEventListener`?', options: ['It is slower', 'It only works in older browsers', 'It can only hold ONE function at a time; assigning a new one overwrites the old one', 'It does not support arrow functions'], answer: 'It can only hold ONE function at a time; assigning a new one overwrites the old one' },
      { question: 'Are `<button onclick="doSomething()">` (in HTML) and `button.onclick = doSomething` (in JS) related?', options: ['Yes, they both modify the exact same internal property', 'No, they are completely different', 'Yes, but the HTML one is faster', 'No, the HTML one uses addEventListener'], answer: 'Yes, they both modify the exact same internal property' },
      { question: 'Can you assign `.onclick` to the `window` object?', options: ['Yes, to detect clicks anywhere on the page', 'No, only to HTML elements', 'Yes, but it crashes the browser', 'Only in strict mode'], answer: 'Yes, to detect clicks anywhere on the page' },
      { question: 'Which is the recommended modern approach?', options: ['element.onclick', 'HTML onclick attribute', 'element.addEventListener("click", ...)', 'element.bindClick()'], answer: 'element.addEventListener("click", ...)' }
    ],
    interviewQuestions: [
      { q: 'How would you remove an event handler that was added using `.onclick = myFunc`?', a: 'You simply set it to null: `element.onclick = null;`' }
    ],
    summary: ['Older way to handle clicks.', 'Assigning a new function overwrites the old one.', 'Prefer `addEventListener`.'],
    references: commonReferences
  },
  'js_mouse_events': {
    isStructured: true,
    title: '153. Mouse Events',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Mouse events trigger when the user interacts with a pointing device (mouse, trackpad). Examples include `mouseenter`, `mouseleave`, `mousemove`, and `dblclick`.',
    whyUseIt: 'To create rich, interactive UI components like hover dropdown menus, drag-and-drop interfaces, custom tooltips, or drawing applications on an HTML canvas.',
    syntax: 'element.addEventListener("mouseenter", callback);',
    codeExample: 'const box = document.querySelector("#box");\n\n// Triggers when mouse enters the element (like CSS :hover)\nbox.addEventListener("mouseenter", () => {\n  box.style.backgroundColor = "yellow";\n});\n\n// Triggers when mouse leaves the element\nbox.addEventListener("mouseleave", () => {\n  box.style.backgroundColor = "white";\n});\n\n// Triggers continuously as the mouse moves over the element\nbox.addEventListener("mousemove", (event) => {\n  console.log(`Mouse is at X: ${event.clientX}, Y: ${event.clientY}`);\n});',
    expectedOutput: 'The box turns yellow when hovered, white when left. Console rapidly logs coordinates when moving inside.',
    explanation: [
      { code: '"mouseenter" / "mouseleave"', desc: 'JavaScript equivalents of CSS `:hover`, but allow you to execute complex logic rather than just changing styles.' },
      { code: 'event.clientX', desc: 'The Event Object contains precise data about the mouse\'s physical location on the screen.' }
    ],
    realWorldExample: 'A "zoom-in" feature on an e-commerce product image that tracks the user\'s mouse using `mousemove` to adjust the background position of the zoomed image.',
    commonMistakes: [
      { error: 'Using `mouseover` instead of `mouseenter`', code: 'box.addEventListener("mouseover", ...)', suffix: '`mouseover` triggers every time the mouse moves over a CHILD element inside the box (event bubbling), causing flickering. `mouseenter` only triggers once when entering the box itself. Prefer `mouseenter`.' }
    ],
    bestPractices: ['`mousemove` fires dozens of times per second. Avoid doing heavy calculations or complex DOM manipulations inside a `mousemove` handler, or you will cause the browser to lag (use techniques like "throttling" if necessary).'],
    practiceExercise: {
      task: 'Select an element with `id="btn"`. Add a `dblclick` (double click) event listener that logs "Double Clicked!".',
      expectedOutput: 'Logs "Double Clicked!" only when clicked twice rapidly.',
      solution: 'document.querySelector("#btn").addEventListener("dblclick", () => console.log("Double Clicked!"));'
    },
    quiz: [
      { question: 'Which event acts most like the CSS `:hover` pseudo-class?', options: ['click', 'mouseenter', 'mousemove', 'mousedown'], answer: 'mouseenter' },
      { question: 'Where can you find the exact X and Y coordinates of the mouse cursor during a `mousemove` event?', options: ['In the global `window` object', 'Inside the Event Object passed to the callback function (e.g., `event.clientX`)', 'By calling `document.getMousePosition()`', 'In the element\'s style property'], answer: 'Inside the Event Object passed to the callback function (e.g., `event.clientX`)' },
      { question: 'What is the difference between `mouseenter` and `mouseover`?', options: ['There is no difference', 'mouseenter bubbles, mouseover does not', 'mouseover bubbles (triggers when entering child elements), mouseenter does not', 'mouseenter is faster'], answer: 'mouseover bubbles (triggers when entering child elements), mouseenter does not' },
      { question: 'Which event fires when the user presses the mouse button down, BEFORE they let go?', options: ['click', 'mousedown', 'mouseup', 'dblclick'], answer: 'mousedown' },
      { question: 'Why should you be careful with `mousemove` events?', options: ['They break CSS animations', 'They fire incredibly fast and can cause performance lag if the code inside is too heavy', 'They only work with mice, not trackpads', 'They overwrite click events'], answer: 'They fire incredibly fast and can cause performance lag if the code inside is too heavy' }
    ],
    interviewQuestions: [
      { q: 'How would you implement basic Drag and Drop?', a: 'You listen for `mousedown` to start dragging, then attach a `mousemove` listener to the `document` to update the element\'s position, and finally a `mouseup` listener to drop it and remove the `mousemove` listener.' }
    ],
    summary: ['Respond to mouse movements.', 'Use `mouseenter`/`mouseleave` for hover effects.', 'Access coordinates via the Event Object.'],
    references: commonReferences
  },
  'js_keyboard_events': {
    isStructured: true,
    title: '154. Keyboard Events',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Keyboard events trigger when the user interacts with the keyboard. The main events are `keydown` (key is pressed), `keyup` (key is released), and `keypress` (deprecated).',
    whyUseIt: 'To create keyboard shortcuts (like Ctrl+S to save), control characters in a web game using WASD/Arrow keys, or submit a form when the user presses "Enter".',
    syntax: 'element.addEventListener("keydown", (event) => { ... });',
    codeExample: '// Listen for ANY key press on the whole page\ndocument.addEventListener("keydown", (event) => {\n  console.log(`Key pressed: ${event.key}`);\n  \n  // Check for specific keys\n  if (event.key === "Enter") {\n    console.log("Enter key was pressed!");\n  }\n  \n  // Check for modifier keys (Ctrl, Shift, Alt)\n  if (event.ctrlKey && event.key === "s") {\n    event.preventDefault(); // Stop browser from opening "Save Page" dialog\n    console.log("Custom Save Triggered!");\n  }\n});',
    expectedOutput: 'Logs the name of the key pressed. Prevents default save if Ctrl+S is used.',
    explanation: [
      { code: 'document.addEventListener(...)', desc: 'We often attach keyboard events to `document` or `window` so we can detect typing no matter where the user is focused on the page.' },
      { code: 'event.key', desc: 'Returns the actual character or key name (e.g., "a", "A", "Enter", "ArrowUp", "Escape").' }
    ],
    realWorldExample: 'Closing a modal window if the user presses the Escape key: `if(event.key === "Escape") closeModal();`.',
    commonMistakes: [
      { error: 'Using event.keyCode', code: 'if(event.keyCode === 13)', suffix: '`event.keyCode` is deeply deprecated. You had to memorize arbitrary numbers (13 = Enter). Always use the modern `event.key` property, which returns readable strings.' }
    ],
    bestPractices: ['When creating keyboard shortcuts, always remember to use `event.preventDefault()` if that shortcut normally does something else in the browser (like Ctrl+F for search).'],
    practiceExercise: {
      task: 'Listen for a `keyup` event on the `document`. If the `event.key` is exactly " ", log "Spacebar released!".',
      expectedOutput: 'Logs "Spacebar released!" when spacebar is lifted.',
      solution: 'document.addEventListener("keyup", e => { if(e.key === " ") console.log("Spacebar released!"); });'
    },
    quiz: [
      { question: 'Which keyboard event fires continuously if the user holds a key down?', options: ['keyup', 'keydown', 'keyhold', 'keyrepeat'], answer: 'keydown' },
      { question: 'How do you know exactly which key the user pressed?', options: ['By checking `event.mousePos`', 'By checking the modern `event.key` string', 'By using a switch statement on the element', 'By reading the DOM'], answer: 'By checking the modern `event.key` string' },
      { question: 'How do you check if the user was holding the Shift key while pressing another key?', options: ['Check if `event.key === "Shift"`', 'Check the boolean property `event.shiftKey`', 'Check `event.capsLock`', 'It is not possible'], answer: 'Check the boolean property `event.shiftKey`' },
      { question: 'Why should you avoid `event.keyCode`?', options: ['It is too slow', 'It only works for numbers', 'It is deprecated and requires memorizing arbitrary numbers instead of readable strings', 'It doesn\'t work on Macs'], answer: 'It is deprecated and requires memorizing arbitrary numbers instead of readable strings' },
      { question: 'Where is the most common place to attach a global keyboard event listener?', options: ['To the <body> tag', 'To a specific <input>', 'To the `document` or `window` object', 'To a <button>'], answer: 'To the `document` or `window` object' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `keydown` and `keyup` when reading input field values?', a: 'If you read the input value during `keydown`, you get the value *before* the new character is added to the screen. If you read it during `keyup`, you get the value *after* the character was added. (For inputs, the `input` event is better than both).' }
    ],
    summary: ['Use `keydown` and `keyup`.', 'Use `event.key` to see what was pressed.', 'Check `event.ctrlKey` for modifiers.'],
    references: commonReferences
  },
  'js_form_events': {
    isStructured: true,
    title: '155. Form Events',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Form events trigger when users interact with HTML `<form>` elements. The most critical event is the `submit` event, which fires when a form is submitted (via button click or hitting Enter).',
    whyUseIt: 'Forms natively want to send data to a server and refresh the webpage. Using the `submit` event allows you to intercept that action, validate the data with JavaScript, and send it asynchronously without reloading the page.',
    syntax: 'formElement.addEventListener("submit", (e) => { e.preventDefault(); ... });',
    codeExample: 'const form = document.querySelector("#login-form");\n\nform.addEventListener("submit", (event) => {\n  // CRITICAL: Stop the page from refreshing!\n  event.preventDefault();\n  \n  console.log("Form intercepted!");\n  \n  // Now we can manually gather data and validate it\n  const username = document.querySelector("#username").value;\n  if (username === "") {\n    console.log("Error: Username is required.");\n  } else {\n    console.log("Sending data to server...");\n  }\n});',
    expectedOutput: 'The page does NOT reload. The console logs either an error or a success message.',
    explanation: [
      { code: 'form.addEventListener("submit", ...)', desc: 'We attach the listener to the `<form>` itself, NOT the submit button. This ensures it catches submissions triggered by hitting the "Enter" key too.' },
      { code: 'event.preventDefault()', desc: 'The most important line. It tells the browser: "Do not do your default behavior (refreshing the page/sending a GET/POST request). Let my JavaScript handle this."' }
    ],
    realWorldExample: 'Validating that a "Confirm Password" field matches the "Password" field before allowing an account to be created.',
    commonMistakes: [
      { error: 'Listening for a click on the submit button', code: 'submitBtn.addEventListener("click", ...)', suffix: 'If you only listen for a click, you will miss users who submit the form by hitting "Enter" on their keyboard while inside an input field. Always listen for "submit" on the form itself.' }
    ],
    bestPractices: ['Always use `event.preventDefault()` on Single Page Applications (SPAs like React or Vue) or when using `fetch()` to send data, as a page reload will destroy your application state.'],
    practiceExercise: {
      task: 'Listen for a "submit" event on `#my-form`. Prevent the default behavior, then log "Form submitted safely!".',
      expectedOutput: 'Page does not reload, logs message.',
      solution: 'document.querySelector("#my-form").addEventListener("submit", e => { e.preventDefault(); console.log("Form submitted safely!"); });'
    },
    quiz: [
      { question: 'What does `event.preventDefault()` do in a form submit event?', options: ['Clears all the inputs', 'Submits the form twice', 'Stops the browser from performing its default action (reloading the page)', 'Deletes the form from the DOM'], answer: 'Stops the browser from performing its default action (reloading the page)' },
      { question: 'Which element should you attach a "submit" event listener to?', options: ['The <button type="submit">', 'The whole <form> element', 'The first <input>', 'The `document` object'], answer: 'The whole <form> element' },
      { question: 'Why is it better to listen for "submit" on the form rather than "click" on the button?', options: ['It is faster', 'It automatically prevents default', 'It catches submissions triggered by hitting the "Enter" key on the keyboard', 'It encrypts the data'], answer: 'It catches submissions triggered by hitting the "Enter" key on the keyboard' },
      { question: 'How do you read what the user typed into an input field?', options: ['inputElement.text', 'inputElement.innerHTML', 'inputElement.value', 'inputElement.content'], answer: 'inputElement.value' },
      { question: 'What happens if you FORGET `event.preventDefault()` on a standard HTML form?', options: ['The JavaScript runs, then the page reloads instantly, wiping out the console and your JS state', 'Nothing', 'The browser crashes', 'The form refuses to submit'], answer: 'The JavaScript runs, then the page reloads instantly, wiping out the console and your JS state' }
    ],
    interviewQuestions: [
      { q: 'What is the `FormData` object?', a: '`FormData` is a built-in API that makes it easy to extract all the values from a form at once. E.g., `new FormData(formElement)` creates an object containing all the names and values of the inputs in that form.' }
    ],
    summary: ['Listen for `submit` on the `<form>`.', 'CRITICAL: Call `event.preventDefault()`.', 'Used for JS validation and AJAX.'],
    references: commonReferences
  },
  'js_input_events': {
    isStructured: true,
    title: '156. Input Events',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `input` event fires *every single time* the value of an `<input>`, `<textarea>`, or `<select>` element changes. This includes typing, pasting, deleting, or even using voice dictation.',
    whyUseIt: 'To provide real-time feedback to the user. For example, showing a live character countdown ("24/100 chars left"), live search filtering, or checking password strength as they type.',
    syntax: 'inputElement.addEventListener("input", (e) => { ... });',
    codeExample: '// HTML: <input type="text" id="username">\n// HTML: <p id="preview"></p>\n\nconst input = document.querySelector("#username");\nconst preview = document.querySelector("#preview");\n\ninput.addEventListener("input", (event) => {\n  // Read the current value of the input\n  const text = event.target.value;\n  \n  // Update the preview paragraph instantly\n  preview.textContent = text;\n});',
    expectedOutput: 'As the user types into the input box, the paragraph below it instantly mirrors exactly what is being typed.',
    explanation: [
      { code: '"input"', desc: 'The best event for tracking changes. It is much better than `keyup` or `keydown`.' },
      { code: 'event.target', desc: 'A reference to the exact element that triggered the event (the input box).' },
      { code: 'event.target.value', desc: 'The exact string currently inside the input box.' }
    ],
    realWorldExample: 'A search bar that instantly filters a list of products below it without the user ever having to hit "Search" or "Enter".',
    commonMistakes: [
      { error: 'Using `change` instead of `input`', code: 'input.addEventListener("change", ...)', suffix: 'The `change` event only fires AFTER the user clicks outside the input box (loses focus) or hits Enter. If you want instant, keystroke-by-keystroke feedback, you MUST use `input`.' }
    ],
    bestPractices: ['If you are doing something heavy (like fetching search results from a server) on the `input` event, you should "debounce" the function so you don\'t spam the server on every single keystroke.'],
    practiceExercise: {
      task: 'Select an input `#chat`. Listen for the "input" event. Inside the callback, log the current value of the input.',
      expectedOutput: 'Logs the text every time a character is typed or deleted.',
      solution: 'document.querySelector("#chat").addEventListener("input", e => console.log(e.target.value));'
    },
    quiz: [
      { question: 'Which event is best for detecting live, real-time typing in an input field?', options: ['keydown', 'change', 'input', 'keypress'], answer: 'input' },
      { question: 'What is the main difference between the `input` event and the `change` event?', options: ['`input` fires on every keystroke/change instantly. `change` only fires after the input loses focus or Enter is pressed.', 'There is no difference', '`change` is for text, `input` is for checkboxes', '`input` is slower'], answer: '`input` fires on every keystroke/change instantly. `change` only fires after the input loses focus or Enter is pressed.' },
      { question: 'How do you access the element that triggered the event from inside the callback function?', options: ['event.source', 'event.trigger', 'event.target', 'event.element'], answer: 'event.target' },
      { question: 'How do you read the text inside an input element?', options: ['element.text', 'element.innerHTML', 'element.value', 'element.textContent'], answer: 'element.value' },
      { question: 'Does the `input` event fire if a user pastes text using their mouse (Right Click -> Paste)?', options: ['Yes', 'No, only keyboard events fire it', 'Only in Chrome', 'Only if the text is short'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'What is "debouncing" in the context of an `input` event?', a: 'Debouncing is a technique used to delay the execution of a function until a certain amount of time has passed since the *last* time it was called. It prevents an API from being called 10 times if a user types a 10-letter word quickly.' }
    ],
    summary: ['Fires instantly on every single change.', 'Better than `change` or `keyup` for live feedback.', 'Read text using `event.target.value`.'],
    references: commonReferences
  }
};
