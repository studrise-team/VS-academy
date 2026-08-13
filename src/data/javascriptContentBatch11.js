const commonReferences = [
  { label: 'W3Schools JavaScript Events', url: 'https://www.w3schools.com/js/js_events.asp' },
  { label: 'MDN Web Docs - Introduction to events', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events' }
];

export const javascriptContentBatch11 = {
  'js_what_are_events': {
    isStructured: true,
    title: '150-152. Events & addEventListener()',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them. Examples: clicking a button, pressing a key, or resizing the window. `addEventListener()` is the modern way to set up a function to be called whenever a specific event is delivered to the target.',
    whyUseIt: 'Without events, web pages are static. Events allow you to execute JavaScript code in response to user interactions, making the page dynamic and interactive.',
    syntax: 'element.addEventListener("eventType", functionToRun);',
    codeExample: '// HTML: <button id="myBtn">Click Me</button>\n\nconst button = document.getElementById("myBtn");\n\n// Add the event listener\nbutton.addEventListener("click", function() {\n  console.log("Button was clicked!");\n  document.body.style.backgroundColor = "lightblue";\n});',
    expectedOutput: '(When the user clicks the button, "Button was clicked!" appears in the console and the background turns light blue)',
    explanation: [
      { code: 'addEventListener', desc: 'A built-in method applied to a DOM element that listens for specific actions.' },
      { code: '"click"', desc: 'The name of the event we are listening for. Must be a string.' },
      { code: 'function() { ... }', desc: 'The callback function. This code ONLY runs when the click actually happens.' }
    ],
    realWorldExample: 'A "Submit" button on a login form. When clicked (`click` event), the code grabs the email and password, validates them, and logs the user in.',
    commonMistakes: [
      { error: 'Adding parentheses to the callback function', code: 'button.addEventListener("click", myFunc());', suffix: 'If you add `()`, the function runs immediately when the page loads! You must pass the function reference: `button.addEventListener("click", myFunc);`' },
      { error: 'Using "on" in the event name', code: 'button.addEventListener("onclick", ...)', suffix: 'In HTML attributes it is `onclick`, but in `addEventListener`, it is just `"click"`.' }
    ],
    bestPractices: ['Always use `addEventListener()` instead of HTML attributes (`onclick="myFunc()"`) or DOM properties (`element.onclick = myFunc`). `addEventListener` allows you to attach multiple different functions to the same event on the same element.'],
    practiceExercise: {
      task: 'Select an element with id `box`. Add an event listener so that when it is clicked, its text content changes to "Clicked!".',
      expectedOutput: '(The text changes upon clicking)',
      solution: 'document.getElementById("box").addEventListener("click", function() { this.textContent = "Clicked!"; });'
    },
    quiz: [
      { question: 'What is a JavaScript Event?', options: ['A type of variable', 'An action that happens in the browser that you can react to', 'A loop that runs forever', 'A CSS animation'], answer: 'An action that happens in the browser that you can react to' },
      { question: 'What is the modern, recommended way to listen for events?', options: ['element.onclick', 'The <event> HTML tag', 'element.addEventListener()', 'document.listen()'], answer: 'element.addEventListener()' },
      { question: 'Which is the correct syntax for a click event listener?', options: ['btn.addEventListener("onclick", func)', 'btn.addEventListener("click", func)', 'btn.addEvent("click", func)', 'btn.on("click", func)'], answer: 'btn.addEventListener("click", func)' },
      { question: 'Why shouldn\'t you write `btn.addEventListener("click", runApp());`?', options: ['runApp is not a valid name', 'The parentheses () cause the function to run immediately, instead of waiting for the click', 'It requires an arrow function', 'You must use double quotes'], answer: 'The parentheses () cause the function to run immediately, instead of waiting for the click' },
      { question: 'What happens if you use `addEventListener` to attach three different click functions to the same button?', options: ['Only the last one works', 'An error is thrown', 'All three functions will run when the button is clicked', 'Only the first one works'], answer: 'All three functions will run when the button is clicked' }
    ],
    interviewQuestions: [
      { q: 'How do you remove an event listener?', a: 'By using `removeEventListener("event", functionName)`. Note: You cannot remove anonymous functions (functions without a name); you must pass the exact same named function reference that you used in `addEventListener`.' }
    ],
    summary: ['Events are user actions (clicks, typing).', 'Use `addEventListener("event", function)` to listen.', 'Pass the function reference, don\'t execute it with `()`.'],
    references: commonReferences
  },

  'js_event_object': {
    isStructured: true,
    title: '158 & 161. Event Object & preventDefault()',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'When an event occurs, the browser automatically passes an "Event Object" to the callback function. This object contains massive amounts of data about the event. `preventDefault()` is a method on this object used to stop the browser\'s default behavior.',
    whyUseIt: 'You need the Event Object to know *which* key was pressed in a keyboard event, or *where* the mouse was on the screen during a click. You need `preventDefault()` to stop forms from refreshing the page when submitted.',
    syntax: 'element.addEventListener("click", function(event) {\n  // use event object\n  event.preventDefault();\n});',
    codeExample: '// HTML: <a id="myLink" href="https://google.com">Go to Google</a>\n\nconst link = document.getElementById("myLink");\n\nlink.addEventListener("click", function(event) {\n  // Stop the link from actually navigating to Google\n  event.preventDefault();\n  \n  console.log("Link click prevented!");\n  console.log("You clicked at X coordinate: " + event.clientX);\n});',
    expectedOutput: '"Link click prevented!"\n"You clicked at X coordinate: 152" \n(The page does NOT navigate to Google)',
    explanation: [
      { code: 'function(event)', desc: 'We add a parameter (commonly named `event` or `e`) to the callback. The browser automatically fills this with the Event Object.' },
      { code: 'event.preventDefault()', desc: 'Stops the default HTML action. For links, it stops navigation. For forms, it stops page reloading.' },
      { code: 'event.clientX', desc: 'A property of the event object containing the X coordinate of the mouse click.' }
    ],
    realWorldExample: 'A contact form. When the user clicks "Send", a `submit` event fires. You use `e.preventDefault()` to stop the page from reloading, check if the email is valid using JS, and then send the data via an API in the background.',
    commonMistakes: [
      { error: 'Forgetting the event parameter', code: 'element.addEventListener("click", function() { event.preventDefault(); });', suffix: 'If you don\'t define `event` or `e` as a parameter in your function, you cannot use it.' }
    ],
    bestPractices: ['Always use `e.preventDefault()` when handling form submissions in single-page applications (like React/Angular) or when doing AJAX/fetch requests.'],
    practiceExercise: {
      task: 'Select a form element. Add a "submit" event listener. Inside the listener, prevent the default submission and log "Form submitted via JS!".',
      expectedOutput: '(Page does not reload, console shows the message)',
      solution: 'document.querySelector("form").addEventListener("submit", function(e) { e.preventDefault(); console.log("Form submitted via JS!"); });'
    },
    quiz: [
      { question: 'What is the Event Object?', options: ['An object representing the HTML element', 'An object containing details about the event that just happened', 'A CSS styling object', 'A method to stop events'], answer: 'An object containing details about the event that just happened' },
      { question: 'How do you access the Event Object in an event listener?', options: ['By typing EventObject.get()', 'By using the `window.event` global', 'By accepting it as the first parameter in your callback function (e.g., `function(e)`)', 'It is not possible'], answer: 'By accepting it as the first parameter in your callback function (e.g., `function(e)`)' },
      { question: 'What does `event.preventDefault()` do?', options: ['Deletes the element', 'Stops the event listener from running', 'Prevents the default browser behavior (like form reloading or link navigating)', 'Closes the browser'], answer: 'Prevents the default browser behavior (like form reloading or link navigating)' },
      { question: 'If you want to know which key a user pressed during a "keydown" event, where do you look?', options: ['document.key', 'The event object (e.g., `e.key`)', 'The element\'s value', 'You can\'t know'], answer: 'The event object (e.g., `e.key`)' },
      { question: 'Why is `preventDefault()` almost always used on HTML <form> submit events?', options: ['Because forms are deprecated', 'To stop the browser from refreshing the page, allowing JavaScript to handle the data sending', 'To clear the inputs', 'To encrypt the data'], answer: 'To stop the browser from refreshing the page, allowing JavaScript to handle the data sending' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `event.target` and `event.currentTarget`?', a: '`event.target` is the exact element that triggered the event (e.g., the specific span inside a button that was clicked). `event.currentTarget` is the element that the event listener is actually attached to (e.g., the button itself).' }
    ],
    summary: ['The Event Object (`e`) contains data about the event.', 'Accept it as the first parameter of the callback.', '`e.preventDefault()` stops default browser actions (reloads, navigation).'],
    references: commonReferences
  },

  'js_event_bubbling_delegation': {
    isStructured: true,
    title: '159 & 162. Event Bubbling & Delegation',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Event Bubbling means when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. Event Delegation is a technique where you attach a single event listener to a parent element to handle events on its multiple children, taking advantage of bubbling.',
    whyUseIt: 'If you have a list of 1000 items and want a click event on all of them, attaching 1000 separate event listeners uses a lot of memory and slows down the app. Event Delegation allows you to attach exactly ONE listener to the parent `<ul>` instead.',
    syntax: 'parentElement.addEventListener("click", function(e) {\n  if(e.target.matches(".childClass")) {\n    // do something\n  }\n});',
    codeExample: '// HTML: <ul id="list"> <li>Item 1</li> <li>Item 2</li> </ul>\n\nconst list = document.getElementById("list");\n\n// We attach ONE listener to the <ul>, not the <li>s\nlist.addEventListener("click", function(e) {\n  // e.target is the specific element that was clicked\n  if (e.target.tagName === "LI") {\n    console.log("You clicked on: " + e.target.textContent);\n    e.target.style.textDecoration = "line-through";\n  }\n});',
    expectedOutput: '(Clicking "Item 1" logs "You clicked on: Item 1" and strikes it out. The <ul> handled it!)',
    explanation: [
      { code: 'list.addEventListener', desc: 'The listener is on the parent container.' },
      { code: 'e.target', desc: 'Because of Bubbling, clicking the `<li>` bubbles the click up to the `<ul>`. `e.target` tells us EXACTLY what was clicked (the `<li>`).' },
      { code: 'if (e.target.tagName === "LI")', desc: 'We check if the user clicked an actual list item, and not the empty space inside the `<ul>`.' }
    ],
    realWorldExample: 'A dynamic shopping cart. Items are constantly added and removed via JavaScript. If you put listeners directly on "Delete" buttons, new buttons won\'t have the listener. By putting ONE listener on the cart container (delegation), it automatically handles clicks for new buttons added later.',
    commonMistakes: [
      { error: 'Assuming e.currentTarget is the clicked item', code: 'console.log(e.currentTarget.textContent);', suffix: 'In delegation, `e.currentTarget` is the PARENT (the element with the listener). You must use `e.target` to get the actual CHILD that was clicked.' }
    ],
    bestPractices: ['Use `e.stopPropagation()` ONLY if you absolutely need to stop an event from bubbling up the tree. Overusing it can break analytics or other delegation scripts on the page.'],
    practiceExercise: {
      task: 'Use event delegation. Attach a click listener to `document.body`. If `e.target.tagName === "BUTTON"`, log "Button clicked".',
      expectedOutput: '(Clicking any button on the page logs the message)',
      solution: 'document.body.addEventListener("click", function(e) { if(e.target.tagName === "BUTTON") console.log("Button clicked"); });'
    },
    quiz: [
      { question: 'What is Event Bubbling?', options: ['An animation effect', 'When an event triggers on an element, and then triggers on its parent, grandparent, etc., moving up the DOM tree', 'When an event moves down the DOM tree', 'When memory leaks occur'], answer: 'When an event triggers on an element, and then triggers on its parent, grandparent, etc., moving up the DOM tree' },
      { question: 'What is Event Delegation?', options: ['Delegating work to a Web Worker', 'Attaching a single listener to a parent element to manage events for its children', 'Removing event listeners', 'Using a framework like React'], answer: 'Attaching a single listener to a parent element to manage events for its children' },
      { question: 'Why is Event Delegation useful for dynamically created elements?', options: ['It makes them load faster', 'New elements don\'t need their own listeners; the parent catches their bubbled events automatically', 'It prevents XSS attacks', 'It automatically styles them'], answer: 'New elements don\'t need their own listeners; the parent catches their bubbled events automatically' },
      { question: 'In a delegation setup on a `<ul>`, what does `e.target` represent when a user clicks an `<li>`?', options: ['The <ul> element', 'The <li> element that was actually clicked', 'The document', 'Null'], answer: 'The <li> element that was actually clicked' },
      { question: 'What method stops an event from bubbling up the tree?', options: ['e.preventDefault()', 'e.stop()', 'e.stopPropagation()', 'e.cancelBubble()'], answer: 'e.stopPropagation()' }
    ],
    interviewQuestions: [
      { q: 'Explain the three phases of JavaScript event propagation.', a: '1. Capturing Phase: The event goes down from the Window to the target element. 2. Target Phase: The event reaches the target element. 3. Bubbling Phase: The event bubbles up from the target back to the Window.' }
    ],
    summary: ['Bubbling: events travel UP the DOM tree.', 'Delegation: attach one listener to a parent.', 'Use `e.target` to identify the actual clicked child.'],
    references: commonReferences
  }
};
