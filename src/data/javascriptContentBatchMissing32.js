const commonReferences = [
  { label: 'MDN Web Docs - Array.prototype.map()', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map' }
];

export const javascriptContentBatchMissing32 = {
  'js_student_management_system': {
    isStructured: true,
    title: '264. Student Management System',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A Student Management System is a comprehensive project that combines Object-Oriented Programming (Classes), Array manipulation (CRUD operations), Data Validation, and DOM rendering.',
    whyUseIt: 'It is a fantastic capstone project for Vanilla JavaScript. It proves you can design a complex data model (Students having multiple properties and grades) and manage interactions between different parts of the system.',
    syntax: '// Conceptual project focusing on OOP and Data Models',
    codeExample: 'class Student {\n  constructor(id, name, age, course) {\n    this.id = id;\n    this.name = name;\n    this.age = age;\n    this.course = course;\n    this.grades = [];\n  }\n\n  addGrade(grade) {\n    if (grade >= 0 && grade <= 100) {\n      this.grades.push(grade);\n    }\n  }\n\n  getAverage() {\n    if (this.grades.length === 0) return 0;\n    const sum = this.grades.reduce((acc, curr) => acc + curr, 0);\n    return (sum / this.grades.length).toFixed(2);\n  }\n}\n\nclass System {\n  constructor() {\n    this.students = [];\n  }\n\n  enrollStudent(name, age, course) {\n    const newId = this.students.length + 1;\n    const student = new Student(newId, name, age, course);\n    this.students.push(student);\n    return student;\n  }\n\n  printReport() {\n    console.log("--- Student Report ---");\n    this.students.forEach(s => {\n      console.log(`[${s.id}] ${s.name} (${s.course}) - Avg: ${s.getAverage()}`);\n    });\n  }\n}\n\n// Simulation\nconst school = new System();\nconst s1 = school.enrollStudent("Alice", 20, "Computer Science");\nconst s2 = school.enrollStudent("Bob", 22, "Mathematics");\n\ns1.addGrade(90);\ns1.addGrade(95);\ns2.addGrade(75);\n\nschool.printReport();',
    expectedOutput: '--- Student Report ---\n[1] Alice (Computer Science) - Avg: 92.50\n[2] Bob (Mathematics) - Avg: 75.00',
    explanation: [
      { code: 'class Student', desc: 'The data model. It defines what a student IS and what a single student can DO (like calculating their own average).' },
      { code: 'class System', desc: 'The orchestrator. It manages the collection (array) of students. This separation of concerns makes the code much cleaner.' }
    ],
    realWorldExample: 'A university portal like Blackboard or Canvas. They have classes for `Course`, `Student`, and `Assignment`, and orchestrate how they interact.',
    commonMistakes: [
      { error: 'Putting all logic in one massive function', code: '', suffix: 'Beginners often try to manage the array, calculate averages, and render HTML all in one giant 200-line function. By separating it into Classes, each piece of code has one specific job.' }
    ],
    bestPractices: ['Implement a search/filter function. e.g., `getStudentsByCourse(courseName) { return this.students.filter(s => s.course === courseName); }`.'],
    practiceExercise: {
      task: 'Without coding: In the example above, if you wanted to find a student by their ID to edit their name, what array method would you use inside the `System` class?',
      expectedOutput: '.find()',
      solution: 'You would use `this.students.find(s => s.id === searchId)`.'
    },
    quiz: [
      { question: 'Why is it beneficial to separate `Student` and `System` into two different Classes?', options: ['It uses less memory', 'It follows the principle of "Separation of Concerns". The Student manages their own data, while the System manages the collection of students', 'It is required by JavaScript', 'It makes the code shorter'], answer: 'It follows the principle of "Separation of Concerns". The Student manages their own data, while the System manages the collection of students' },
      { question: 'What array method is perfectly suited for calculating a student\'s average grade?', options: ['.map()', '.reduce()', '.filter()', '.splice()'], answer: '.reduce()' },
      { question: 'If you wanted to add a feature to show ONLY students in the "Computer Science" course, which array method would you use?', options: ['.map()', '.reduce()', '.filter()', '.sort()'], answer: '.filter()' },
      { question: 'What does `.toFixed(2)` do when calculating the average?', options: ['Fixes bugs in the code', 'Ensures the number is rounded to exactly 2 decimal places, returning a string', 'Converts it to a percentage', 'Multiplies it by 2'], answer: 'Ensures the number is rounded to exactly 2 decimal places, returning a string' },
      { question: 'In a real DOM-based version of this app, when should you trigger the function that redraws the HTML table of students?', options: ['Only on page load', 'Every 5 seconds', 'Every time the `this.students` array is modified (enroll, update, delete)', 'When the user clicks the background'], answer: 'Every time the `this.students` array is modified (enroll, update, delete)' }
    ],
    interviewQuestions: [
      { q: 'How would you ensure that two students cannot have the exact same ID?', a: 'Instead of using `this.students.length + 1` (which breaks if you delete a student in the middle of the array), I would use `Date.now()` or a UUID generator library to guarantee a unique ID upon enrollment.' }
    ],
    summary: ['Combines OOP and Arrays.', 'Separate data models from system orchestrators.', 'Master array iteration.'],
    references: commonReferences
  },
  'js_e_commerce_cart': {
    isStructured: true,
    title: '265. E-Commerce Cart',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'An E-Commerce Cart project focuses on managing an array of product objects, handling duplicate additions (increasing quantity instead of adding a new row), calculating subtotals, and managing complex DOM updates.',
    whyUseIt: 'It is the most common feature in modern web development. If you want to get hired as a front-end developer, you absolutely must know how to build a shopping cart from scratch.',
    syntax: '// Conceptual project focusing on Array.find and Object manipulation',
    codeExample: 'let cart = [];\n\nfunction addToCart(productId, name, price) {\n  // 1. Check if the item is ALREADY in the cart\n  const existingItem = cart.find(item => item.id === productId);\n  \n  if (existingItem) {\n    // 2. If it exists, just increase the quantity\n    existingItem.quantity += 1;\n    console.log(`Increased quantity of ${name} to ${existingItem.quantity}`);\n  } else {\n    // 3. If it is new, push a new object\n    cart.push({ id: productId, name: name, price: price, quantity: 1 });\n    console.log(`Added new item: ${name}`);\n  }\n  renderCart();\n}\n\nfunction calculateTotal() {\n  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);\n}\n\nfunction renderCart() {\n  console.log(`--- Cart Summary ---`);\n  cart.forEach(item => {\n    console.log(`${item.name} x${item.quantity} - $${item.price * item.quantity}`);\n  });\n  console.log(`TOTAL: $${calculateTotal()}\\n`);\n}\n\n// Simulation\naddToCart(101, "Shoes", 50);\naddToCart(102, "Hat", 20);\naddToCart(101, "Shoes", 50); // User clicks "Add to Cart" on shoes again',
    expectedOutput: 'Added new item: Shoes\n--- Cart Summary ---\nShoes x1 - $50\nTOTAL: $50\n\nAdded new item: Hat\n--- Cart Summary ---\nShoes x1 - $50\nHat x1 - $20\nTOTAL: $70\n\nIncreased quantity of Shoes to 2\n--- Cart Summary ---\nShoes x2 - $100\nHat x1 - $20\nTOTAL: $120',
    explanation: [
      { code: 'cart.find(...)', desc: 'The crucial step. Before adding to the array, you must check if the item is already there. If you skip this, clicking "Add to Cart" twice will result in two separate lines for "Shoes" instead of one line saying "Shoes x2".' },
      { code: 'price * quantity', desc: 'Inside the `reduce` function, you must remember to multiply the base price by the quantity to get the accurate subtotal for that specific item line.' }
    ],
    realWorldExample: 'Amazon. You click "Add to Cart" 3 times on the same shirt. Amazon doesn\'t show 3 separate lines in your cart; it shows one line with a dropdown that says "Qty: 3".',
    commonMistakes: [
      { error: 'Floating point math errors', code: '0.1 + 0.2', suffix: 'If your shoes are $19.99, JavaScript might calculate the total as $19.989999999. You must format the final output using `.toFixed(2)`.' }
    ],
    bestPractices: ['Never trust the front-end for the final price. A malicious user could open DevTools, change the JS object so `price: 1`, and buy a TV for a dollar. The front-end cart is just for visual display; the actual price calculation MUST happen on a secure backend server during checkout.'],
    practiceExercise: {
      task: 'Without coding: How would you write a `removeFromCart(productId)` function?',
      expectedOutput: 'Use filter or find and decrease quantity.',
      solution: 'Find the item. If quantity > 1, decrement quantity. If quantity === 1, use `.filter()` to completely remove the object from the array.'
    },
    quiz: [
      { question: 'Why is `cart.find()` used inside the `addToCart` function?', options: ['To delete the item', 'To check if the item is already in the cart so we can increase its `quantity` rather than adding a duplicate row', 'To sort the cart', 'To find the cheapest item'], answer: 'To check if the item is already in the cart so we can increase its `quantity` rather than adding a duplicate row' },
      { question: 'What is the correct logic for calculating the total price of the entire cart?', options: ['Summing all the prices', 'Summing all the quantities', 'Iterating through the cart, multiplying each item\'s `price` by its `quantity`, and summing those results', 'Asking the database'], answer: 'Iterating through the cart, multiplying each item\'s `price` by its `quantity`, and summing those results' },
      { question: 'Why must you NOT trust the front-end JavaScript cart to calculate the final price charged to the user\'s credit card?', options: ['Because JS is bad at math', 'Because a user can easily use DevTools to change the `price` variables in memory. The backend must independently verify prices based on the product IDs', 'Because it slows down the browser', 'You CAN trust the front-end'], answer: 'Because a user can easily use DevTools to change the `price` variables in memory. The backend must independently verify prices based on the product IDs' },
      { question: 'If a user clicks "Remove" on an item that has a quantity of 3, what is the standard expected behavior?', options: ['Delete the entire item instantly', 'Decrease the quantity to 2', 'Empty the entire cart', 'Charge their credit card'], answer: 'Decrease the quantity to 2' },
      { question: 'What method should you use on the final total to ensure it looks like standard currency (e.g., exactly two decimal places)?', options: ['Math.round()', 'Math.floor()', '.toFixed(2)', 'String()'], answer: '.toFixed(2)' }
    ],
    interviewQuestions: [
      { q: 'How would you handle saving the cart state so the user doesn\'t lose their items if they accidentally close the tab?', a: 'Every time the `renderCart()` function is called (meaning the cart array was modified), I would save the array to `localStorage`. On page load, I would initialize the cart array from `localStorage`.' }
    ],
    summary: ['Handle quantity increments vs new items.', 'Calculate totals accurately.', 'Never trust front-end prices for actual billing.'],
    references: commonReferences
  },
  'js_portfolio_website': {
    isStructured: true,
    title: '266. Portfolio Website',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A Portfolio Website is a personal showcase. While mostly HTML/CSS, Vanilla JavaScript is used to add interactivity: smooth scrolling, dark mode toggles, typing text animations, and form validation.',
    whyUseIt: 'It is your resume. Building it with pure JavaScript (no heavy frameworks) proves to employers that you understand the underlying DOM API before relying on React or Vue.',
    syntax: '// Conceptual project focusing on UI enhancements',
    codeExample: '// 1. Dark Mode Toggle\nconst themeBtn = document.getElementById("themeToggle");\nthemeBtn.addEventListener("click", () => {\n  document.body.classList.toggle("dark-mode");\n  // Save preference to localStorage\n  const isDark = document.body.classList.contains("dark-mode");\n  localStorage.setItem("theme", isDark ? "dark" : "light");\n});\n\n// 2. Smooth Scrolling for Navigation Links\nconst navLinks = document.querySelectorAll("nav a");\nnavLinks.forEach(link => {\n  link.addEventListener("click", (e) => {\n    e.preventDefault(); // Stop default instant jump\n    const targetId = link.getAttribute("href");\n    const targetSection = document.querySelector(targetId);\n    \n    // Scroll smoothly via JS\n    targetSection.scrollIntoView({ behavior: "smooth" });\n  });\n});\n\n// 3. Contact Form Validation\nconst form = document.getElementById("contactForm");\nform.addEventListener("submit", (e) => {\n  const email = document.getElementById("email").value;\n  if (!email.includes("@")) {\n    e.preventDefault(); // Stop form submission\n    alert("Please enter a valid email address.");\n  }\n});',
    expectedOutput: 'A highly interactive UI with themes, smooth scrolling, and protected forms.',
    explanation: [
      { code: 'classList.toggle("dark-mode")', desc: 'The cleanest way to handle themes. You define `.dark-mode { background: black; }` in your CSS, and JS simply turns that class on and off.' },
      { code: 'e.preventDefault()', desc: 'Crucial for modern UI. By default, clicking a link `#about` jumps instantly. By default, submitting a form refreshes the page. We use `preventDefault` to stop those jarring behaviors so JS can handle them smoothly.' }
    ],
    realWorldExample: 'Look at any modern developer\'s portfolio. The flashy typing animations in the header or the smooth reveal of projects as you scroll down are all powered by these exact Vanilla JS techniques.',
    commonMistakes: [
      { error: 'Over-engineering', code: '', suffix: 'Do not build a simple 3-page portfolio website as a massive React Single Page Application. A simple static HTML site with a sprinkle of Vanilla JS is faster, better for SEO, and shows you know the right tool for the job.' }
    ],
    bestPractices: ['Use the Intersection Observer API for scroll animations (like fading in projects as they appear on screen) rather than listening to the `window.onscroll` event, which can cause massive performance lag.'],
    practiceExercise: {
      task: 'Without coding: How do you make the browser remember the user\'s Dark Mode choice if they close the tab?',
      expectedOutput: 'Use localStorage.',
      solution: 'Save their choice in `localStorage`. On page load, read `localStorage` and apply the `dark-mode` class immediately before the page finishes rendering to prevent a white flash.'
    },
    quiz: [
      { question: 'What is the best way to implement a Dark Mode toggle using JavaScript?', options: ['Write JS to manually change the `style.backgroundColor` of every single element', 'Toggle a specific class (like `.dark-theme`) on the `document.body` and let CSS handle the rest', 'Reload the page with a different HTML file', 'It is impossible without React'], answer: 'Toggle a specific class (like `.dark-theme`) on the `document.body` and let CSS handle the rest' },
      { question: 'What method stops a form from refreshing the page when the "Submit" button is clicked?', options: ['event.stop()', 'event.pause()', 'event.preventDefault()', 'form.halt()'], answer: 'event.preventDefault()' },
      { question: 'How do you make the page scroll smoothly to a specific section using JavaScript?', options: ['element.scrollSmooth()', 'element.scrollIntoView({ behavior: "smooth" })', 'window.scroll(slowly)', 'CSS only'], answer: 'element.scrollIntoView({ behavior: "smooth" })' },
      { question: 'Why is it better to build a simple portfolio with HTML/CSS and Vanilla JS rather than a heavy framework like React?', options: ['React is illegal for portfolios', 'It results in a much faster initial page load, better SEO, and proves you understand web fundamentals', 'It looks better', 'React cannot be hosted'], answer: 'It results in a much faster initial page load, better SEO, and proves you understand web fundamentals' },
      { question: 'What modern JS API is best for triggering animations when an element scrolls into view?', options: ['window.onscroll', 'setInterval', 'Intersection Observer API', 'setTimeout'], answer: 'Intersection Observer API' }
    ],
    interviewQuestions: [
      { q: 'How would you handle a "Typewriter" text effect in the header of your portfolio?', a: 'I would store an array of strings (e.g., ["Developer", "Designer"]). Using `setTimeout` or `setInterval`, I would add one character at a time to a DOM element\'s `textContent`, pause, then delete them one by one, and move to the next string.' }
    ],
    summary: ['Enhance static HTML with JS.', 'Use `classList.toggle` for themes.', 'Use `preventDefault` for smooth UI.'],
    references: commonReferences
  },
  'js_why_learn_javascript_before_react': {
    isStructured: true,
    title: '268. Why Learn JavaScript Before React?',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'React is not a new language; it is a JavaScript library. Everything you write in React IS JavaScript. Learning the core JS language first is non-negotiable for becoming a competent developer.',
    whyUseIt: 'If you jump straight to React, you won\'t know if a bug is a "React problem" or a "JavaScript problem". You will struggle with basic concepts like mapping over arrays, destructuring props, and managing async API calls, because React assumes you already know them.',
    syntax: '// React code is just JavaScript code',
    codeExample: '// --- React Component Example ---\n// This looks like "React magic", but it is 100% standard JavaScript features!\n\nimport { useState } from "react"; // ES6 Modules (import)\n\n// ES6 Arrow Function & Object Destructuring\nconst UserCard = ({ name, age }) => {\n  \n  // Array Destructuring\n  const [likes, setLikes] = useState(0);\n  \n  // Event Listener Callback (Standard JS concept)\n  const handleLike = () => setLikes(likes + 1);\n\n  return (\n    <div>\n      {/* Template Literals / JS Expressions */}\n      <h1>{name.toUpperCase()}</h1>\n      <p>Age: {age > 18 ? "Adult" : "Minor"}</p>\n      <button onClick={handleLike}>Likes: {likes}</button>\n    </div>\n  );\n};',
    expectedOutput: 'Understanding that the code above relies heavily on modern JS features (Destructuring, Arrow Functions, Ternary Operators).',
    explanation: [
      { code: 'Object Destructuring', desc: `The \`{ name, age }\` in the parameters. If you don't know JS destructuring, you will be completely lost on day 1 of React.` },
      { code: 'Array Destructuring', desc: `The \`const [likes, setLikes]\` pattern. React's \`useState\` hook relies entirely on standard JS array destructuring.` }
    ],
    realWorldExample: 'Learning to drive a manual transmission car (JavaScript) before driving an automatic (React). If you learn manual, you understand exactly how the gears work. If the automatic transmission breaks, you at least understand the mechanics behind it.',
    commonMistakes: [
      { error: 'Tutorial Hell', code: '', suffix: 'Following a "Build a React clone of Netflix" tutorial without knowing JS. You will successfully copy the code, but the moment you need to add a custom feature, you will be completely paralyzed because you don\'t understand the underlying language.' }
    ],
    bestPractices: ['Master these 5 JS concepts before touching React: 1) Arrow Functions. 2) Destructuring. 3) Array Methods (map, filter, reduce). 4) Promises & Async/Await. 5) ES6 Modules (import/export).'],
    practiceExercise: {
      task: 'Without coding: Look at this React code: `{users.map(u => <li>{u.name}</li>)}`. What core JavaScript method is being used?',
      expectedOutput: 'Array.prototype.map()',
      solution: 'The `map()` array method. React doesn\'t have a special loop syntax; it expects you to use standard JS array methods to render lists.'
    },
    quiz: [
      { question: 'Is React a completely separate programming language from JavaScript?', options: ['Yes', 'No, it is just a library built with JavaScript. You are writing JavaScript when you write React', 'It is a mix of Python and HTML', 'Yes, it compiles to C++'], answer: 'No, it is just a library built with JavaScript. You are writing JavaScript when you write React' },
      { question: 'Which JavaScript feature is heavily used when writing `const [count, setCount] = useState(0);` in React?', options: ['Classes', 'Generators', 'Array Destructuring', 'Object Destructuring'], answer: 'Array Destructuring' },
      { question: 'How does React handle looping through data to render lists of HTML elements?', options: ['Using a custom `<for>` tag', 'By requiring you to use the standard JavaScript `.map()` array method', 'It does it automatically', 'Using a `while` loop'], answer: 'By requiring you to use the standard JavaScript `.map()` array method' },
      { question: 'Why is jumping straight to React a bad idea for beginners?', options: ['Because React is dying', 'Because you won\'t be able to distinguish between a JavaScript bug and a React bug, leading to massive confusion', 'Because React is too fast', 'Because you have to pay for React'], answer: 'Because you won\'t be able to distinguish between a JavaScript bug and a React bug, leading to massive confusion' },
      { question: 'Which of the following Vanilla JS concepts is NOT strictly required before starting React?', options: ['Promises / Async Await', 'Destructuring', 'Complex HTML Canvas 3D rendering', 'Arrow Functions'], answer: 'Complex HTML Canvas 3D rendering' }
    ],
    interviewQuestions: [
      { q: 'What is JSX?', a: 'JSX is a syntax extension for JavaScript used by React. It looks like HTML, but under the hood, a compiler (like Babel) transforms it into standard JavaScript functions like `React.createElement("div", null, "Hello")`.' }
    ],
    summary: ['React is just JavaScript.', 'Master ES6 features first.', 'Know map, filter, and destructuring.'],
    references: commonReferences
  },
  'js_array_map': {
    isStructured: true,
    title: '269. Array map()',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `map()` method creates a brand new array populated with the results of calling a provided function on every single element in the original array.',
    whyUseIt: 'It is the ultimate tool for transforming data. If you have an array of prices `[10, 20]`, and you want an array of those prices with tax added `[11, 22]`, `map()` does it cleanly without modifying the original array.',
    syntax: 'const newArray = oldArray.map((element, index) => {\n  return transformedElement;\n});',
    codeExample: 'const numbers = [1, 2, 3, 4];\n\n// Goal: Multiply every number by 10\n\n// 1. The old way (using a for loop)\nconst multipliedOld = [];\nfor (let i = 0; i < numbers.length; i++) {\n  multipliedOld.push(numbers[i] * 10);\n}\n\n// 2. The modern way using .map()\nconst multipliedNew = numbers.map(num => num * 10);\n\nconsole.log(multipliedNew); // [10, 20, 30, 40]\n\n\n// 3. Very common real-world use case: Extracting specific data from objects\nconst users = [\n  { id: 1, name: "Alice", age: 25 },\n  { id: 2, name: "Bob", age: 30 },\n  { id: 3, name: "Charlie", age: 35 }\n];\n\n// Extract just the names into a simple array of strings\nconst namesOnly = users.map(user => user.name);\nconsole.log(namesOnly); // ["Alice", "Bob", "Charlie"]',
    expectedOutput: '[10, 20, 30, 40]\n["Alice", "Bob", "Charlie"]',
    explanation: [
      { code: 'numbers.map(num => ...)', desc: '`map` automatically loops through the array. On the first loop, `num` is 1. On the second, `num` is 2. It takes whatever you return and places it into a NEW array at the same index.' },
      { code: 'Returns a NEW array', desc: 'Crucially, `map()` does NOT change the original `numbers` array. It is non-destructive (pure).' }
    ],
    realWorldExample: 'React uses `.map()` exclusively to render lists of UI components. You have an array of strings `["Apple", "Banana"]`, and you use `map()` to transform them into an array of HTML elements `[<li>Apple</li>, <li>Banana</li>]`.',
    commonMistakes: [
      { error: 'Forgetting to return', code: 'const arr = [1,2].map(n => { n * 2; })', suffix: 'If you use curly braces `{}` in an arrow function, you MUST explicitly use the `return` keyword. Otherwise, `map` will just return an array of `[undefined, undefined]`.' }
    ],
    bestPractices: ['Do not use `.map()` if you aren\'t actually going to use the new array it returns. If you just want to loop through an array to print things to the console or update the DOM, use `.forEach()` instead.'],
    practiceExercise: {
      task: 'Given `const prices = [5, 10];`, use `.map()` to create a new array called `doubled` where each price is multiplied by 2.',
      expectedOutput: 'An array [10, 20].',
      solution: 'const doubled = prices.map(price => price * 2);'
    },
    quiz: [
      { question: 'What does the `.map()` method do?', options: ['Sorts the array', 'Loops through an array, runs a function on each element, and returns a completely NEW array with the transformed results', 'Filters out elements that don\'t match a condition', 'Modifies the original array directly'], answer: 'Loops through an array, runs a function on each element, and returns a completely NEW array with the transformed results' },
      { question: 'Does `.map()` alter or destroy the original array?', options: ['Yes, always', 'No, it is non-destructive and returns a brand new array', 'Only if the array contains objects', 'Yes, it empties the old array'], answer: 'No, it is non-destructive and returns a brand new array' },
      { question: 'If an array has 5 elements, how many elements will the new array returned by `.map()` have?', options: ['It depends on the function', 'Exactly 5. Map always returns an array of the exact same length as the original', '1 (a single combined value)', '0'], answer: 'Exactly 5. Map always returns an array of the exact same length as the original' },
      { question: 'What is a common mistake when using `.map()` with curly braces in an arrow function `map(x => { ... })`?', options: ['Putting a semicolon', 'Forgetting the `return` keyword inside the block, resulting in an array of `undefined` values', 'Using variables', 'Calling it on a string'], answer: 'Forgetting the `return` keyword inside the block, resulting in an array of `undefined` values' },
      { question: 'If you just want to loop through an array to `console.log` every item, but you don\'t need a new array returned, which method is more appropriate than `.map()`?', options: ['.reduce()', '.filter()', '.forEach()', '.sort()'], answer: '.forEach()' }
    ],
    interviewQuestions: [
      { q: 'How would you use `.map()` to format an array of strings to have capital first letters?', a: '`const capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());`' }
    ],
    summary: ['Transforms every element.', 'Returns a brand NEW array.', 'Always returns the same length as the original.'],
    references: commonReferences
  }
};
