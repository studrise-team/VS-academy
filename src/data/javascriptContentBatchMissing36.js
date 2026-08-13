const commonReferences = [
  { label: 'MDN Web Docs - JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
];

export const javascriptContentBatchMissing36 = {
  'js_object_interview_questions': {
    isStructured: true,
    title: '286. Object Interview Questions',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'This section tests your knowledge of how JavaScript objects work under the hood, including prototypes, copying (shallow vs deep), object methods, and the `this` keyword inside objects.',
    whyUseIt: 'Objects are the most important data structure in JavaScript (even arrays are technically objects). Interviewers will heavily test your ability to manipulate, merge, and clone objects without causing reference bugs.',
    syntax: '// Q & A Format',
    codeExample: '// Example Question: Deep Copy vs Shallow Copy\nconst original = { a: 1, b: { c: 2 } };\n\n// Shallow Copy (Spread Operator)\nconst shallow = { ...original };\nshallow.b.c = 99;\nconsole.log(original.b.c); // 99 (Uh oh! The nested object was mutated!)\n\n// Deep Copy (JSON method)\nconst originalTwo = { a: 1, b: { c: 2 } };\nconst deep = JSON.parse(JSON.stringify(originalTwo));\ndeep.b.c = 99;\nconsole.log(originalTwo.b.c); // 2 (Safe!)',
    expectedOutput: 'Understanding object references, shallow copies, and deep copies.',
    explanation: [
      { code: 'Shallow Copy', desc: 'Methods like `...spread` or `Object.assign()` only copy the first level of properties. If a property is another object, it just copies the memory reference to that nested object.' },
      { code: 'Deep Copy', desc: 'Creates a completely new, disconnected clone of the entire object, including all nested objects. `structuredClone(obj)` is the modern way to do this.' }
    ],
    realWorldExample: 'In Redux or React State, you are strictly forbidden from mutating state. If you accidentally make a Shallow Copy of your state object and modify a nested property, you are mutating the original state, and your React app will fail to re-render.',
    commonMistakes: [
      { error: 'Comparing objects with ===', code: 'if (obj1 === obj2)', suffix: 'This checks if they point to the exact same memory address. Even if two objects have the exact same keys and values (`{a:1} === {a:1}`), it will return `false` because they are two different objects in memory.' }
    ],
    bestPractices: ['To check if an object is empty, do not use `if (obj === {})`. Use `if (Object.keys(obj).length === 0)`.'],
    practiceExercise: {
      task: 'Without coding: What does `Object.keys({ name: "Bob", age: 20 })` return?',
      expectedOutput: 'An array of strings.',
      solution: 'An array of the object\'s keys: `["name", "age"]`.'
    },
    quiz: [
      { question: 'What is the difference between a Shallow Copy and a Deep Copy?', options: ['Shallow copy is for small objects, Deep copy is for large objects', 'Shallow copy duplicates the top-level properties but shares memory references for nested objects. Deep copy creates a completely independent clone of everything', 'They are the exact same thing', 'Shallow copy uses less RAM'], answer: 'Shallow copy duplicates the top-level properties but shares memory references for nested objects. Deep copy creates a completely independent clone of everything' },
      { question: 'What is the modern, built-in JavaScript function for creating a Deep Copy of an object?', options: ['Object.copy()', 'structuredClone(obj)', 'obj.clone()', 'Object.assign()'], answer: 'structuredClone(obj)' },
      { question: 'How do you check if two different objects have the exact same properties and values?', options: ['Use `obj1 === obj2`', 'Use `obj1 == obj2`', 'You must manually write a function to iterate through and compare every single key/value, or use a library like Lodash `_.isEqual()`', 'Use `Object.is()`'], answer: 'You must manually write a function to iterate through and compare every single key/value, or use a library like Lodash `_.isEqual()`' },
      { question: 'What does `Object.entries(obj)` return?', options: ['The number of entries', 'An array of the object\'s values', 'An array of arrays, where each sub-array is a `[key, value]` pair', 'A boolean'], answer: 'An array of arrays, where each sub-array is a `[key, value]` pair' },
      { question: 'If you want to prevent an object from having new properties added, existing properties removed, AND existing properties modified, what method do you use?', options: ['Object.freeze(obj)', 'Object.seal(obj)', 'Object.lock(obj)', 'const'], answer: 'Object.freeze(obj)' }
    ],
    interviewQuestions: [
      { q: 'What is prototypal inheritance?', a: 'Unlike class-based languages (Java), JavaScript objects inherit properties and methods directly from other objects via a hidden `[[Prototype]]` linkage. When you call `obj.toString()`, JS looks on `obj`. If it isn\'t there, it looks up the prototype chain until it finds it on `Object.prototype`.' }
    ],
    summary: ['Master Shallow vs Deep copies.', 'Know `Object.keys`, `values`, `entries`.', 'Understand prototype delegation.'],
    references: commonReferences
  },
  'js_dom_interview_questions': {
    isStructured: true,
    title: '287. DOM Interview Questions',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'This section tests your knowledge of the Document Object Model (DOM), how JavaScript interacts with HTML, and the performance implications of manipulating it.',
    whyUseIt: 'Before frameworks existed, manipulating the DOM manually was the only way to build web apps. Interviewers want to ensure you understand the underlying mechanics that React/Vue are abstracting away from you.',
    syntax: '// Q & A Format',
    codeExample: '// Example Question: What is Event Delegation?\n// Instead of this (bad performance):\n// document.querySelectorAll("li").forEach(li => li.addEventListener("click", ...))\n\n// Do this (Event Delegation - excellent performance):\ndocument.getElementById("parent-ul").addEventListener("click", (e) => {\n  if (e.target && e.target.nodeName === "LI") {\n    console.log("List item clicked: ", e.target.textContent);\n  }\n});',
    expectedOutput: 'Understanding of DOM APIs, Repaints, and Reflows.',
    explanation: [
      { code: 'Event Delegation', desc: 'Attaching ONE event listener to a parent element rather than attaching 100 event listeners to 100 child elements. It utilizes "Event Bubbling" to catch clicks as they travel up the DOM tree.' }
    ],
    realWorldExample: 'If you build a To-Do list with 10,000 items, attaching an event listener to every single "Delete" button will crash the browser. You MUST use event delegation on the parent `<ul>`.',
    commonMistakes: [
      { error: 'Causing excessive Reflows', code: 'for(let i=0; i<100; i++) div.style.width = i+"px";', suffix: 'Every time you change the layout of the DOM (width, height, position), the browser has to recalculate the positions of everything on the page (a Reflow). Doing this inside a tight loop destroys performance.' }
    ],
    bestPractices: ['When adding many elements to the DOM at once, use a `DocumentFragment`. You append all your new `<li>` elements to the invisible fragment in memory, and then append the fragment to the DOM ONCE, causing only one reflow.'],
    practiceExercise: {
      task: 'Without coding: What is the difference between `textContent` and `innerHTML`?',
      expectedOutput: 'Text vs HTML parsing.',
      solution: '`textContent` gets/sets pure raw text. `innerHTML` parses HTML tags (like `<strong>`). Never use `innerHTML` with user input, as it causes XSS security vulnerabilities.'
    },
    quiz: [
      { question: 'What does DOM stand for?', options: ['Data Object Model', 'Document Object Model', 'Document Oriented Model', 'Dynamic Object Memory'], answer: 'Document Object Model' },
      { question: 'What is Event Delegation?', options: ['Deleting events', 'Delegating the event listener to a parent element to handle events triggered by its children, taking advantage of event bubbling', 'A CSS property', 'Running events in parallel'], answer: 'Delegating the event listener to a parent element to handle events triggered by its children, taking advantage of event bubbling' },
      { question: 'Why is manipulating the DOM considered "expensive" (slow)?', options: ['It costs money', 'Because changing the DOM forces the browser to recalculate layouts (Reflow) and redraw pixels on the screen (Repaint), which takes significant CPU power', 'Because JavaScript is slow', 'It is actually very fast'], answer: 'Because changing the DOM forces the browser to recalculate layouts (Reflow) and redraw pixels on the screen (Repaint), which takes significant CPU power' },
      { question: 'What is a DocumentFragment used for?', options: ['To delete the DOM', 'To build up a chunk of DOM elements in memory first, and then append them to the live DOM all at once to minimize reflows/repaints', 'To parse JSON', 'To save data to the server'], answer: 'To build up a chunk of DOM elements in memory first, and then append them to the live DOM all at once to minimize reflows/repaints' },
      { question: 'Why is `innerHTML` dangerous when dealing with user input (like a comments section)?', options: ['It is too slow', 'It allows users to inject malicious `<script>` tags that the browser will execute (Cross-Site Scripting or XSS attacks)', 'It breaks CSS', 'It limits character count'], answer: 'It allows users to inject malicious `<script>` tags that the browser will execute (Cross-Site Scripting or XSS attacks)' }
    ],
    interviewQuestions: [
      { q: 'What is the Virtual DOM, and why does React use it?', a: 'The Virtual DOM is a lightweight JavaScript object representation of the real DOM. When state changes, React updates the Virtual DOM instantly, compares it to the previous Virtual DOM (Diffing), and then surgically updates ONLY the changed nodes in the real DOM. This minimizes expensive reflows.' }
    ],
    summary: ['Master Event Delegation.', 'Understand Reflows and Repaints.', 'Use `textContent` for safety.'],
    references: commonReferences
  },
  'js_event_interview_questions': {
    isStructured: true,
    title: '288. Event Interview Questions',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'This section tests your knowledge of how the browser handles user interactions (clicks, typing, scrolling) through the Event API, focusing on Propagation, Bubbling, and Capturing.',
    whyUseIt: 'If you click a button inside a `div` inside a `section`, which element gets the click event first? Understanding this flow is critical for building complex, interactive UIs without causing bug collisions.',
    syntax: '// Q & A Format',
    codeExample: '// Example Question: e.stopPropagation()\nconst div = document.getElementById("parent");\nconst btn = document.getElementById("childBtn");\n\ndiv.addEventListener("click", () => console.log("Div clicked!"));\n\nbtn.addEventListener("click", (e) => {\n  e.stopPropagation(); // Magic happens here\n  console.log("Button clicked!");\n});\n// If you click the button, ONLY "Button clicked!" prints.\n// Without stopPropagation, BOTH would print (bubbling).',
    expectedOutput: 'Understanding of Event Bubbling and Event Capturing.',
    explanation: [
      { code: 'Event Bubbling', desc: 'When you click an element, the event fires on that element FIRST, and then "bubbles" upwards to its parent, then its grandparent, all the way to the `window`.' },
      { code: 'e.stopPropagation()', desc: 'Stops the bubbling immediately. The event fires on the target, but does not travel upwards to the parents.' }
    ],
    realWorldExample: 'You have a Modal overlay (a gray background) with a white box in the center. Clicking the gray background should close the modal. But if you click the white box, it accidentally closes the modal because the click "bubbles" up to the background! You must put `e.stopPropagation()` on the white box to fix this.',
    commonMistakes: [
      { error: 'Confusing preventDefault and stopPropagation', code: '', suffix: '`preventDefault()` stops the browser\'s default behavior (like a form refreshing the page, or a link jumping to a URL). `stopPropagation()` stops the event from bubbling up the DOM tree. They do completely different things.' }
    ],
    bestPractices: ['Use `e.currentTarget` inside event listeners when you want to refer to the element the listener was ATTACHED to. `e.target` refers to the exact element the user clicked (which might be a nested `<span>` inside the button).'],
    practiceExercise: {
      task: 'Without coding: What are the three phases of event propagation in the DOM?',
      expectedOutput: 'Capturing, Target, Bubbling.',
      solution: '1. Capturing Phase (travels down from Window to target), 2. Target Phase (fires on target), 3. Bubbling Phase (travels back up from target to Window).'
    },
    quiz: [
      { question: 'What is Event Bubbling?', options: ['Events disappearing', 'When an event triggers on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors', 'When an event copies itself', 'A CSS animation effect'], answer: 'When an event triggers on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors' },
      { question: 'How do you stop an event from bubbling up to parent elements?', options: ['event.preventDefault()', 'event.stop()', 'event.stopPropagation()', 'event.halt()'], answer: 'event.stopPropagation()' },
      { question: 'What does `event.preventDefault()` do?', options: ['Stops bubbling', 'Stops the browser from executing the default action associated with the event (e.g., stops a submit button from refreshing the page)', 'Deletes the event', 'Pauses JavaScript'], answer: 'Stops the browser from executing the default action associated with the event (e.g., stops a submit button from refreshing the page)' },
      { question: 'What is Event Capturing (Trickling)?', options: ['It is the opposite of bubbling; the event travels DOWN the DOM tree from the window to the target element BEFORE it bubbles back up', 'Taking a screenshot of the event', 'Storing events in an array', 'It is a deprecated feature'], answer: 'It is the opposite of bubbling; the event travels DOWN the DOM tree from the window to the target element BEFORE it bubbles back up' },
      { question: 'What is the difference between `event.target` and `event.currentTarget`?', options: ['They are identical', '`target` is the actual element clicked (e.g., an icon inside a button). `currentTarget` is the element the event listener was actually attached to (e.g., the button itself)', '`target` is the parent, `currentTarget` is the child', '`target` is for mouse events, `currentTarget` is for keyboards'], answer: '`target` is the actual element clicked (e.g., an icon inside a button). `currentTarget` is the element the event listener was actually attached to (e.g., the button itself)' }
    ],
    interviewQuestions: [
      { q: 'How do you attach an event listener that triggers during the Capturing phase instead of the Bubbling phase?', a: 'You pass `{ capture: true }` (or just `true`) as the third argument to `addEventListener`. e.g., `element.addEventListener("click", handler, true);`' }
    ],
    summary: ['Master Bubbling vs Capturing.', 'Know `stopPropagation` vs `preventDefault`.', 'Understand `target` vs `currentTarget`.'],
    references: commonReferences
  },
  'js_async_javascript_questions': {
    isStructured: true,
    title: '289. Async JavaScript Questions',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'This section tests your deep understanding of how JavaScript handles concurrency, specifically the Event Loop, Call Stack, Task Queue, and Microtask Queue.',
    whyUseIt: 'Asynchronous JavaScript is the hardest part of the language. If you don\'t understand the Event Loop, you cannot accurately predict what order your code will execute in, leading to impossible-to-debug race conditions.',
    syntax: '// Q & A Format',
    codeExample: '// Example Question: Predict the output order\nconsole.log("1");\n\nsetTimeout(() => console.log("2"), 0);\n\nPromise.resolve().then(() => console.log("3"));\n\nconsole.log("4");\n\n// Output:\n// 1\n// 4\n// 3 (Microtask - Promises)\n// 2 (Macrotask - setTimeout)',
    expectedOutput: 'Understanding of the Event Loop and execution order.',
    explanation: [
      { code: 'Call Stack', desc: 'Where standard synchronous code executes. It must be completely empty before the Event Loop will allow any asynchronous callbacks to run.' },
      { code: 'Microtasks vs Macrotasks', desc: 'Promises go into the Microtask queue, which has HIGHER priority. `setTimeout` goes into the Macrotask queue, which has LOWER priority.' }
    ],
    realWorldExample: 'You write a `setTimeout(func, 1000)`. You expect it to run in exactly 1 second. But you also wrote a massive `for` loop that takes 5 seconds to run on the main thread. The `setTimeout` will NOT run until the 5 seconds are over, because the Call Stack is blocked.',
    commonMistakes: [
      { error: 'Assuming setTimeout is precise', code: 'setTimeout(fn, 0)', suffix: '`setTimeout(fn, 0)` does NOT mean "run instantly". It means "run this as soon as the Call Stack is completely empty". It pushes the function to the end of the line.' }
    ],
    bestPractices: ['Never write heavy, CPU-intensive synchronous calculations (like processing a 100MB image array) on the main thread. It blocks the Event Loop, completely freezing the user\'s browser tab. Use Web Workers for heavy math.'],
    practiceExercise: {
      task: 'Without coding: Does a `fetch` request block the Call Stack while waiting for the server to reply?',
      expectedOutput: 'No.',
      solution: 'No! The browser offloads the network request to a background thread (Web APIs). The Call Stack is free to continue running other JS code. When the network finishes, the callback is pushed to the queue.'
    },
    quiz: [
      { question: 'What is the Call Stack?', options: ['A database', 'A data structure that records where in the program we are. If we step into a function, we push it to the stack. If we return, we pop it off', 'An array of objects', 'A queue'], answer: 'A data structure that records where in the program we are. If we step into a function, we push it to the stack. If we return, we pop it off' },
      { question: 'What is the Event Loop?', options: ['A `while` loop', 'A mechanism that constantly checks if the Call Stack is empty, and if so, pushes waiting callbacks from the queues onto the Call Stack to be executed', 'A CSS animation', 'An error handler'], answer: 'A mechanism that constantly checks if the Call Stack is empty, and if so, pushes waiting callbacks from the queues onto the Call Stack to be executed' },
      { question: 'In the Event Loop, which queue has higher priority and executes first when the Call Stack empties?', options: ['The Macrotask Queue (`setTimeout`, `setInterval`)', 'The Microtask Queue (Promises `.then()`)', 'They alternate randomly', 'Neither'], answer: 'The Microtask Queue (Promises `.then()`)' },
      { question: 'If you run a `while(true)` infinite loop, what happens to your asynchronous `setTimeout` callbacks?', options: ['They run normally', 'They are executed in parallel', 'They NEVER execute, and the browser freezes, because the Call Stack never empties to allow the Event Loop to push them', 'They are deleted'], answer: 'They NEVER execute, and the browser freezes, because the Call Stack never empties to allow the Event Loop to push them' },
      { question: 'What is Web API in the context of the browser?', options: ['A server you build', 'Background threads provided by the browser (written in C++) that handle things like `setTimeout`, DOM events, and HTTP requests outside of the main JS thread', 'A React library', 'JSON data'], answer: 'Background threads provided by the browser (written in C++) that handle things like `setTimeout`, DOM events, and HTTP requests outside of the main JS thread' }
    ],
    interviewQuestions: [
      { q: 'Explain concurrency in JavaScript.', a: 'JavaScript is single-threaded, meaning it has one Call Stack and executes one command at a time. It achieves concurrency (doing multiple things at once) by offloading asynchronous tasks (like network calls or timers) to the browser\'s Web APIs. When those finish, their callbacks enter a queue, and the Event Loop pushes them back to the Call Stack when it is empty.' }
    ],
    summary: ['JS is single-threaded.', 'Microtasks (Promises) beat Macrotasks (Timers).', 'Never block the Call Stack.'],
    references: commonReferences
  },
  'js_promise_questions': {
    isStructured: true,
    title: '290. Promise Questions',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'This section focuses on advanced Promise orchestration, specifically how to handle MULTIPLE promises at the same time using methods like `Promise.all` and `Promise.race`.',
    whyUseIt: 'In the real world, you rarely make just one API call. You often need to fetch the User Data, the User Settings, and the User Friends all at the same time. Knowing how to orchestrate these in parallel is crucial for app performance.',
    syntax: '// Q & A Format',
    codeExample: '// Example Question: How do you run promises in parallel?\nconst p1 = fetch("/users");\nconst p2 = fetch("/posts");\n\n// Bad (Sequential - Takes twice as long):\n// const users = await p1;\n// const posts = await p2;\n\n// Good (Parallel - Runs at the same time!)\nasync function getAllData() {\n  try {\n    const [users, posts] = await Promise.all([p1, p2]);\n    console.log("Both finished successfully!");\n  } catch (error) {\n    // If ANY single promise fails, the whole Promise.all rejects instantly\n    console.log("One of them failed!");\n  }\n}',
    expectedOutput: 'Understanding of Promise.all and Promise.allSettled.',
    explanation: [
      { code: 'Promise.all', desc: 'Takes an array of promises and runs them in parallel. It returns a single Promise that resolves with an array of the results. It is "All or Nothing"—if one fails, it entirely rejects.' },
      { code: 'Promise.allSettled', desc: 'Similar to `all`, but it NEVER rejects. It waits for all promises to finish (whether they succeed or fail) and returns an array describing the outcome of each.' }
    ],
    realWorldExample: 'Loading a Dashboard. You need analytics data, user profile data, and unread message count. Using `Promise.all`, you trigger all 3 network requests simultaneously. The page loads in 1 second instead of 3 seconds.',
    commonMistakes: [
      { error: 'Accidental Sequential Execution', code: 'for (let user of users) { await fetch(user.id) }', suffix: 'Using `await` inside a standard `for` loop forces the loop to pause. It fetches user 1, waits to finish, then fetches user 2. Use `Promise.all(users.map(u => fetch(u.id)))` to fetch them all instantly in parallel.' }
    ],
    bestPractices: ['Use `Promise.allSettled` if you are fetching data from 5 different sources and you still want to render the page even if 1 of the sources fails.'],
    practiceExercise: {
      task: 'Without coding: What does `Promise.race([p1, p2])` do?',
      expectedOutput: 'Returns the fastest one.',
      solution: 'It returns a promise that resolves or rejects as soon as the FASTEST promise in the array finishes, completely ignoring the others.'
    },
    quiz: [
      { question: 'What is the purpose of `Promise.all()`?', options: ['To delete all promises', 'To execute an array of promises in parallel and wait for ALL of them to resolve successfully before continuing', 'To run promises one by one', 'To combine promises into a string'], answer: 'To execute an array of promises in parallel and wait for ALL of them to resolve successfully before continuing' },
      { question: 'What happens if you pass 5 promises into `Promise.all()`, and the 3rd one fails (rejects)?', options: ['It skips the 3rd one and returns the other 4', 'It returns a partial array', 'The entire `Promise.all()` immediately rejects and throws an error to the `.catch()` block, ignoring the successful ones (All or Nothing)', 'It crashes the browser'], answer: 'The entire `Promise.all()` immediately rejects and throws an error to the `.catch()` block, ignoring the successful ones (All or Nothing)' },
      { question: 'If you want to run 5 promises in parallel, but you want the results even if some of them fail, which method should you use?', options: ['Promise.all()', 'Promise.race()', 'Promise.any()', 'Promise.allSettled()'], answer: 'Promise.allSettled()' },
      { question: 'What does `Promise.race()` do?', options: ['Sorts the promises by speed', 'Returns the result of whichever promise finishes FIRST (whether it resolves or rejects), ignoring the rest', 'Makes the network faster', 'Runs them sequentially'], answer: 'Returns the result of whichever promise finishes FIRST (whether it resolves or rejects), ignoring the rest' },
      { question: 'Why is using `await` inside a standard `for` loop generally considered bad practice for network requests?', options: ['It causes a syntax error', 'It forces the requests to happen sequentially (one after the other), destroying performance. You should usually use `Promise.all` with `.map` to run them in parallel', 'It uses too much RAM', 'Loops cannot be async'], answer: 'It forces the requests to happen sequentially (one after the other), destroying performance. You should usually use `Promise.all` with `.map` to run them in parallel' }
    ],
    interviewQuestions: [
      { q: 'What is `Promise.any()`?', a: '`Promise.any()` takes an array of promises and resolves as soon as ANY SINGLE ONE of them resolves successfully. It ignores rejections unless ALL of them reject. (Useful for querying multiple redundant servers and just taking whichever responds first).' }
    ],
    summary: ['Master `Promise.all` for parallel execution.', 'Use `allSettled` to tolerate failures.', 'Avoid accidental sequential `await` loops.'],
    references: commonReferences
  }
};
