const commonReferences = [
  { label: 'MDN Web Docs - Event interface', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Event' },
  { label: 'MDN Web Docs - Event Bubbling and Capture', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture' }
];

export const javascriptContentBatchMissing15 = {
  'js_submit_events': {
    isStructured: true,
    title: '157. Submit Events',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `submit` event fires when a `<form>` is submitted. This occurs when the user clicks a `<button type="submit">` inside the form, or presses the Enter key while focused on an input field.',
    whyUseIt: 'By default, submitting a form refreshes the webpage. Intercepting the `submit` event allows you to validate user data (like checking if passwords match) and send the data to a server using JavaScript without reloading the page.',
    syntax: 'formElement.addEventListener("submit", function(event) { event.preventDefault(); });',
    codeExample: '// HTML: <form id="signup-form"> ... </form>\n\nconst form = document.querySelector("#signup-form");\n\nform.addEventListener("submit", function(event) {\n  // 1. Prevent the page from refreshing\n  event.preventDefault();\n  \n  // 2. Do your custom logic\n  console.log("Form submission intercepted!");\n  \n  // 3. Send data manually using fetch() (covered later)\n});',
    expectedOutput: 'Clicking "Submit" on the form will log the message to the console instead of reloading the page.',
    explanation: [
      { code: 'form.addEventListener("submit", ...)', desc: 'Always attach the listener to the `<form>` tag itself, never just to the submit button.' },
      { code: 'event.preventDefault()', desc: 'This is the most crucial line. It stops the browser from doing its default behavior (sending an HTTP request and refreshing the page).' }
    ],
    realWorldExample: 'Validating a registration form: if the "Email" field is empty when the user hits submit, you use `event.preventDefault()` and show a red error message instead of letting the form submit.',
    commonMistakes: [
      { error: 'Listening for a "click" on the submit button', code: 'button.addEventListener("click", ...)', suffix: 'If you only listen for a button click, you will miss users who submit the form by pressing the "Enter" key on their keyboard. Always listen for "submit" on the form.' }
    ],
    bestPractices: ['Use the HTML5 `required` attribute on inputs to let the browser handle basic validation for you before the `submit` event even fires.'],
    practiceExercise: {
      task: 'Select a form with `id="contact"`. Listen for the "submit" event, prevent the default behavior, and log "Success".',
      expectedOutput: 'The page does not reload and logs "Success".',
      solution: 'document.querySelector("#contact").addEventListener("submit", e => { e.preventDefault(); console.log("Success"); });'
    },
    quiz: [
      { question: 'When does the `submit` event fire?', options: ['When a user clicks a regular button', 'When a form is submitted (via submit button or Enter key)', 'When an input field loses focus', 'When the page loads'], answer: 'When a form is submitted (via submit button or Enter key)' },
      { question: 'Which element should you attach the `submit` event listener to?', options: ['The <button> element', 'The <input> element', 'The <form> element', 'The `window` object'], answer: 'The <form> element' },
      { question: 'What is the most important method to call inside a `submit` event handler to prevent a page refresh?', options: ['event.stopPropagation()', 'event.preventDefault()', 'form.stop()', 'event.cancel()'], answer: 'event.preventDefault()' },
      { question: 'Why is it better to listen for "submit" instead of a button "click"?', options: ['It is faster', 'It catches users submitting the form by pressing the "Enter" key', 'It automatically validates data', 'It is required by React'], answer: 'It catches users submitting the form by pressing the "Enter" key' },
      { question: 'What happens if you do NOT call `event.preventDefault()`?', options: ['The form throws an error', 'The browser attempts to send the data to the URL specified in the form\'s `action` attribute and refreshes the page', 'The form is deleted', 'Nothing'], answer: 'The browser attempts to send the data to the URL specified in the form\'s `action` attribute and refreshes the page' }
    ],
    interviewQuestions: [
      { q: 'Can you manually trigger a form submission using JavaScript?', a: 'Yes, you can call `formElement.submit()`. However, calling this method directly via JavaScript does NOT fire the `submit` event listener.' }
    ],
    summary: ['Listen for `submit` on `<form>`.', 'Use `event.preventDefault()` to stop page refresh.', 'Catches both clicks and the Enter key.'],
    references: commonReferences
  },
  'js_event_object': {
    isStructured: true,
    title: '158. Event Object',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'When an event occurs, the browser automatically creates an Event Object containing detailed information about what just happened (e.g., which key was pressed, mouse coordinates, or the element clicked) and passes it as the first argument to your callback function.',
    whyUseIt: 'Without the event object, you would know a click happened, but you wouldn\'t know *where*. You would know a key was pressed, but you wouldn\'t know *which one*.',
    syntax: 'element.addEventListener("click", function(event) { console.log(event); });',
    codeExample: 'const box = document.querySelector("#box");\n\n// We usually name the parameter "event" or just "e"\nbox.addEventListener("click", function(e) {\n  // What kind of event was this?\n  console.log(e.type); // "click"\n  \n  // Which specific element triggered the event?\n  console.log(e.target); // <div id="box">\n  \n  // Where was the mouse?\n  console.log(`X: ${e.clientX}, Y: ${e.clientY}`);\n});',
    expectedOutput: 'Logs "click", the HTML element, and the exact X/Y pixel coordinates of the mouse.',
    explanation: [
      { code: 'function(e)', desc: 'You must define a parameter in your callback function to "catch" the event object the browser throws to you.' },
      { code: 'e.target', desc: 'One of the most useful properties. It refers to the exact DOM element that originated the event.' }
    ],
    realWorldExample: 'A drawing app on a canvas. You need the `e.offsetX` and `e.offsetY` from the Event Object to know exactly where to draw the line.',
    commonMistakes: [
      { error: 'Forgetting the parameter', code: 'btn.addEventListener("click", function() { console.log(e.target); })', suffix: 'If you don\'t put `e` (or `event`) inside the parentheses of your callback function, JavaScript will throw a ReferenceError because `e` is undefined.' }
    ],
    bestPractices: ['It is common convention to name the event object `e`, `evt`, or `event`. Use whichever you prefer, but be consistent.'],
    practiceExercise: {
      task: 'Listen for a `keydown` event on the `document`. Console log the `e.key` property to see which key was pressed.',
      expectedOutput: 'Logs the name of the key (e.g., "a", "Enter", "Shift").',
      solution: 'document.addEventListener("keydown", e => console.log(e.key));'
    },
    quiz: [
      { question: 'What is the Event Object?', options: ['A function that creates events', 'An object automatically passed to your event handler containing details about the event', 'A method to stop events', 'A CSS property'], answer: 'An object automatically passed to your event handler containing details about the event' },
      { question: 'How do you access the Event Object?', options: ['By calling `getEvent()`', 'By checking `window.eventInfo`', 'By adding a parameter (like `e` or `event`) to your callback function', 'By reading the DOM'], answer: 'By adding a parameter (like `e` or `event`) to your callback function' },
      { question: 'Which property of the Event Object tells you which exact element was clicked?', options: ['event.element', 'event.source', 'event.target', 'event.origin'], answer: 'event.target' },
      { question: 'If you want to know the mouse\'s X coordinate during a click, which property do you use?', options: ['event.xPosition', 'event.clientX', 'event.mouse[0]', 'event.target.x'], answer: 'event.clientX' },
      { question: 'Does every type of event (click, keydown, submit) have the exact same properties in its Event Object?', options: ['Yes', 'No, a keyboard event will have `.key`, while a mouse event will have `.clientX`, etc.', 'Only in strict mode', 'Yes, but some are hidden'], answer: 'No, a keyboard event will have `.key`, while a mouse event will have `.clientX`, etc.' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `event.target` and `event.currentTarget`?', a: '`event.target` is the exact, deepest element that actually triggered the event (like a `<span>` inside a `<button>`). `event.currentTarget` is the element that the event listener is currently attached to (the `<button>`).' }
    ],
    summary: ['Automatically passed to the callback.', 'Contains details (coordinates, keys).', 'Use `event.target` to find the source.'],
    references: commonReferences
  },
  'js_event_bubbling': {
    isStructured: true,
    title: '159. Event Bubbling',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'Event Bubbling is a concept where an event triggered on a deeply nested element (like a `<button>`) "bubbles up" through all its ancestors in the DOM tree, triggering their event listeners too.',
    whyUseIt: 'Understanding bubbling is crucial for "Event Delegation" (attaching one listener to a parent instead of 100 listeners to 100 children), and for preventing weird bugs where clicking a button accidentally triggers a click on the container behind it.',
    syntax: 'event.stopPropagation();',
    codeExample: '// HTML:\n// <div id="parent">\n//   <button id="child">Click Me</button>\n// </div>\n\ndocument.querySelector("#parent").addEventListener("click", () => {\n  console.log("Parent clicked!");\n});\n\ndocument.querySelector("#child").addEventListener("click", (e) => {\n  console.log("Child clicked!");\n  // e.stopPropagation(); // Uncomment this to stop bubbling\n});',
    expectedOutput: 'If you click the child button, it logs: "Child clicked!", and THEN logs "Parent clicked!".',
    explanation: [
      { code: 'Bubbling', desc: 'When you click the button, the browser says: "The button was clicked. Is the button inside anything? Yes, the parent div. Then the parent div was technically clicked too! Is the div inside anything? Yes, the body..."' },
      { code: 'e.stopPropagation()', desc: 'Calling this method tells the browser: "Stop here. Do not let this event bubble up to the ancestors."' }
    ],
    realWorldExample: 'You have a clickable "Card" that opens an article. Inside the card is a "Like" button. If you click "Like", you want to like the article, but you do NOT want to open the article. You must use `e.stopPropagation()` on the Like button.',
    commonMistakes: [
      { error: 'Confusing stopPropagation with preventDefault', code: 'e.preventDefault()', suffix: '`preventDefault` stops default *browser* actions (like submitting forms or following links). `stopPropagation` stops the event from *bubbling* up your HTML tree. They do two completely different things.' }
    ],
    bestPractices: ['Don\'t use `stopPropagation` unless you absolutely have to. It can create architectural bugs where a parent component relies on hearing events from its children, but a child silently swallows the event.'],
    practiceExercise: {
      task: 'Inside a click event listener for `#my-btn`, write the single line of code that prevents the click event from bubbling up to parent elements.',
      expectedOutput: 'The event does not reach parent elements.',
      solution: 'e.stopPropagation();'
    },
    quiz: [
      { question: 'What is Event Bubbling?', options: ['When an event triggers multiple times rapidly', 'When an event triggers on a child element, and then triggers on all its parent elements in order', 'When an event crashes the browser', 'When CSS bubbles appear on click'], answer: 'When an event triggers on a child element, and then triggers on all its parent elements in order' },
      { question: 'In what order does bubbling happen?', options: ['From the outermost element (document) down to the target element', 'From the target element up to the outermost element (document)', 'Simultaneously', 'Randomly'], answer: 'From the target element up to the outermost element (document)' },
      { question: 'How do you stop an event from bubbling up the tree?', options: ['event.preventDefault()', 'event.stopBubbling()', 'event.stopPropagation()', 'event.cancel()'], answer: 'event.stopPropagation()' },
      { question: 'If you click a `<span>` inside a `<p>` inside a `<div>`, what gets the click event first during the bubbling phase?', options: ['The <div>', 'The <p>', 'The <span>', 'The body'], answer: 'The <span>' },
      { question: 'Does `event.preventDefault()` stop bubbling?', options: ['Yes', 'No, it only stops default browser behaviors (like following a link)', 'Only for forms', 'Sometimes'], answer: 'No, it only stops default browser behaviors (like following a link)' }
    ],
    interviewQuestions: [
      { q: 'What is Event Delegation?', a: 'Because events bubble up, instead of adding 100 event listeners to 100 `<li>` elements, you can add just ONE listener to the parent `<ul>`. When an `<li>` is clicked, the event bubbles to the `<ul>`, and you use `event.target` to figure out which exact `<li>` was clicked.' }
    ],
    summary: ['Events travel UP the DOM tree.', 'Child first, then parents.', 'Use `e.stopPropagation()` to stop it.'],
    references: commonReferences
  },
  'js_event_capturing': {
    isStructured: true,
    title: '160. Event Capturing',
    difficulty: 'Advanced',
    readingTime: '3 min',
    definition: 'Event Capturing (also known as "Trickling") is the opposite of Bubbling. It is the first phase of an event, where the event travels DOWN from the `document`, through the ancestors, until it reaches the target element.',
    whyUseIt: 'You rarely use capturing in day-to-day development. It is mostly used for advanced scenarios where a parent element absolutely must intercept an event *before* the child element gets a chance to handle it.',
    syntax: 'element.addEventListener("click", callback, { capture: true });',
    codeExample: '// HTML: <div id="parent"><button id="child">Click</button></div>\n\ndocument.querySelector("#parent").addEventListener("click", () => {\n  console.log("Parent clicked (Capture Phase)!");\n}, { capture: true }); // Notice the third argument!\n\ndocument.querySelector("#child").addEventListener("click", () => {\n  console.log("Child clicked!");\n});',
    expectedOutput: 'If you click the child, it logs: "Parent clicked (Capture Phase)!", and THEN "Child clicked!". (The reverse of bubbling).',
    explanation: [
      { code: '{ capture: true }', desc: 'By default, `addEventListener` listens during the Bubbling phase (going UP). By passing `{ capture: true }` as the third argument, you tell it to listen during the Capturing phase (going DOWN) instead.' },
      { code: 'The Order', desc: 'When you click, the browser goes DOWN the tree (Capture phase), hits the target element, and then goes UP the tree (Bubbling phase).' }
    ],
    realWorldExample: 'A modal window overlay. You want clicks on the darkened background to close the modal *before* anything inside the modal has a chance to process the click.',
    commonMistakes: [
      { error: 'Assuming { capture: true } stops the event', code: '', suffix: 'Capturing just changes *when* the listener fires. If you want to stop the event from continuing down to the child, you still have to call `e.stopPropagation()` inside the capturing listener.' }
    ],
    bestPractices: ['99% of the time, you should use standard Event Bubbling. Only use Capturing if you have a very specific architectural reason to intercept events before children see them.'],
    practiceExercise: {
      task: 'Add a click event listener to `document.body` that listens during the capture phase and logs "Captured!".',
      expectedOutput: 'Logs "Captured!" before any inner elements trigger their click events.',
      solution: 'document.body.addEventListener("click", () => console.log("Captured!"), { capture: true });'
    },
    quiz: [
      { question: 'What is the order of the Event Phases in the DOM?', options: ['1. Bubbling, 2. Target, 3. Capturing', '1. Capturing (Trickling), 2. Target, 3. Bubbling', 'They happen at the exact same time', 'It depends on the browser'], answer: '1. Capturing (Trickling), 2. Target, 3. Bubbling' },
      { question: 'In which direction does an event travel during the Capturing phase?', options: ['From the target element UP to the document', 'From the document DOWN to the target element', 'Sideways to siblings', 'It doesn\'t travel'], answer: 'From the document DOWN to the target element' },
      { question: 'By default, do event listeners created with `addEventListener` fire during the Capture phase or the Bubbling phase?', options: ['Capture phase', 'Bubbling phase', 'Both', 'Neither'], answer: 'Bubbling phase' },
      { question: 'How do you force an event listener to fire during the Capture phase?', options: ['element.addCaptureListener()', 'Pass `{ capture: true }` as the third argument to `addEventListener`', 'Call `event.capture()` inside the function', 'It is not possible'], answer: 'Pass `{ capture: true }` as the third argument to `addEventListener`' },
      { question: 'If a parent element uses Capturing and calls `event.stopPropagation()`, will the target child element ever receive the event?', options: ['Yes', 'No, the event is killed before it reaches the child', 'Only in strict mode', 'Only if the child also uses Capturing'], answer: 'No, the event is killed before it reaches the child' }
    ],
    interviewQuestions: [
      { q: 'Can you listen to both the Capture phase and the Bubbling phase on the same element?', a: 'Yes, but you have to call `addEventListener` twice: once with `{capture: true}` and once without it (or `{capture: false}`).' }
    ],
    summary: ['Events travel DOWN first (Capturing).', 'Then they travel UP (Bubbling).', 'Use `{capture: true}` to listen early.'],
    references: commonReferences
  },
  'js_reading_form_data': {
    isStructured: true,
    title: '163. Reading Form Data',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'Reading form data involves extracting the values a user has typed or selected in HTML inputs, textareas, and selects.',
    whyUseIt: 'You need to read this data to validate it (e.g., checking if an email is valid) before sending it to your backend server or using it to update the UI.',
    syntax: 'const val = document.querySelector("#my-input").value;',
    codeExample: '// Method 1: The Old Way (Reading individual inputs)\nconst name = document.querySelector("#name").value;\nconst age = document.querySelector("#age").value;\n\n// Method 2: The Modern Way (FormData API)\nconst form = document.querySelector("#my-form");\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  \n  // Create a FormData object from the form\n  const formData = new FormData(form);\n  \n  // Extract values using the "name" attribute from the HTML\n  const userName = formData.get("username"); \n  const userEmail = formData.get("email");\n  \n  // Or convert the whole thing to a regular object instantly!\n  const dataObj = Object.fromEntries(formData);\n  console.log(dataObj); // { username: "Bob", email: "bob@test.com" }\n});',
    expectedOutput: 'An object containing all the form data mapped to their HTML "name" attributes.',
    explanation: [
      { code: 'element.value', desc: 'The standard property to read what is inside a text input or textarea.' },
      { code: 'new FormData(form)', desc: 'A built-in browser API that automatically gathers every single input inside a form, provided those inputs have a `name` attribute in the HTML.' },
      { code: 'Object.fromEntries(formData)', desc: 'A modern trick to instantly convert the clunky FormData object into a clean, easy-to-use JavaScript object.' }
    ],
    realWorldExample: 'Gathering the data from a massive 20-field registration form. Instead of writing 20 `querySelector` lines, you use 2 lines of `FormData` code.',
    commonMistakes: [
      { error: 'Forgetting the "name" attribute', code: '<input type="text" id="user">', suffix: 'If you use the `FormData` API, it completely ignores inputs that do not have a `name` attribute (e.g., `name="username"`). IDs are not enough.' },
      { error: 'Reading `.value` on non-inputs', code: 'document.querySelector("div").value', suffix: 'Divs and paragraphs do not have a `value` property. They use `textContent`. Only form elements (input, select, textarea) have a `value`.' }
    ],
    bestPractices: ['For forms with more than 2 or 3 inputs, always use the `FormData` API. It is much cleaner and automatically handles complex inputs like radio buttons, checkboxes, and file uploads correctly.'],
    practiceExercise: {
      task: 'Given a `form` element reference, write the line of code to create a `FormData` object and convert it to a standard JavaScript object called `data`.',
      expectedOutput: 'Object created.',
      solution: 'const data = Object.fromEntries(new FormData(form));'
    },
    quiz: [
      { question: 'Which property do you use to read the text a user typed into an `<input>`?', options: ['input.text', 'input.content', 'input.value', 'input.innerHTML'], answer: 'input.value' },
      { question: 'What does the `FormData` API do?', options: ['It creates a new HTML form on the page', 'It automatically gathers all the values from a form\'s inputs', 'It validates passwords', 'It sends data to a database'], answer: 'It automatically gathers all the values from a form\'s inputs' },
      { question: 'What HTML attribute MUST an input have for `FormData` to find it?', options: ['id', 'class', 'name', 'type'], answer: 'name' },
      { question: 'How do you extract a specific value from a FormData object if the input had `name="email"`?', options: ['formData.email', 'formData["email"]', 'formData.get("email")', 'formData.fetch("email")'], answer: 'formData.get("email")' },
      { question: 'What is the fastest way to convert a FormData object into a standard JSON-like object?', options: ['JSON.stringify(formData)', 'Object.fromEntries(formData)', 'formData.toObject()', 'Array.from(formData)'], answer: 'Object.fromEntries(formData)' }
    ],
    interviewQuestions: [
      { q: 'How do you read the value of a `<select>` dropdown menu?', a: 'You simply select the `<select>` element and read its `.value` property. It will return the value of whichever `<option>` is currently selected.' }
    ],
    summary: ['Use `.value` for single inputs.', 'Use `FormData` for whole forms.', 'Inputs MUST have `name` attributes for FormData.'],
    references: commonReferences
  }
};
