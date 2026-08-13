const commonReferences = [
  { label: 'MDN Web Docs - Destructuring assignment', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment' },
  { label: 'MDN Web Docs - Spread syntax', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax' },
  { label: 'MDN Web Docs - Arrow function expressions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions' }
];

export const javascriptContentBatchMissing17 = {
  'js_building_a_registration_form': {
    isStructured: true,
    title: '171. Building a Registration Form',
    difficulty: 'Intermediate',
    readingTime: '6 min',
    definition: 'Building a Registration Form ties together everything you\'ve learned about DOM manipulation, event listeners, form data extraction, and input validation into one cohesive, real-world project.',
    whyUseIt: 'Almost every web application requires users to input data. Knowing how to capture that data, validate it safely, and provide feedback to the user is a foundational skill in web development.',
    syntax: '// Combining Events, DOM Traversal, and Validation',
    codeExample: 'const form = document.querySelector("#reg-form");\nconst message = document.querySelector("#message");\n\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  \n  const formData = new FormData(form);\n  const email = formData.get("email");\n  const password = formData.get("password");\n  const confirm = formData.get("confirm");\n  \n  // Validation\n  if (password.length < 8) {\n    message.textContent = "Password must be 8+ chars.";\n    message.style.color = "red";\n  } else if (password !== confirm) {\n    message.textContent = "Passwords do not match.";\n    message.style.color = "red";\n  } else {\n    message.textContent = "Registration Successful!";\n    message.style.color = "green";\n    form.reset(); // Clears the form\n  }\n});',
    expectedOutput: 'The form validates the inputs. If valid, it shows a green success message and clears the inputs.',
    explanation: [
      { code: 'e.preventDefault()', desc: 'Crucial for preventing the page reload, allowing us to show the error messages dynamically.' },
      { code: 'form.reset()', desc: 'A handy built-in method that instantly clears all inputs inside the form, returning them to their default empty state.' }
    ],
    realWorldExample: 'A complete sign-up page for a new Social Media app, ensuring users have strong passwords and valid emails before sending their data to the server API.',
    commonMistakes: [
      { error: 'Validating too late', code: '', suffix: 'Waiting until the user clicks "Submit" to tell them their password is too short is bad UX. Use the `input` event on the password field to validate it *while* they are typing.' }
    ],
    bestPractices: ['Keep validation logic organized. Instead of writing a massive 100-line submit event listener, break your validation down into smaller functions (e.g., `isValidEmail(email)`, `isStrongPassword(pw)`).'],
    practiceExercise: {
      task: 'Given a `form` element, write the line of code that completely clears all input fields inside it after a successful submission.',
      expectedOutput: 'The form is cleared.',
      solution: 'form.reset();'
    },
    quiz: [
      { question: 'What is the most important method to call at the start of a form submit event handler?', options: ['form.reset()', 'event.stopPropagation()', 'event.preventDefault()', 'event.submit()'], answer: 'event.preventDefault()' },
      { question: 'Which built-in API makes it easy to extract all input values from a form at once?', options: ['FormExtract', 'JSON.parse()', 'FormData', 'HTMLCollection'], answer: 'FormData' },
      { question: 'How can you instantly clear all text inputs in a form using JavaScript?', options: ['Loop through all inputs and set their value to ""', 'Reload the page', 'Call `form.reset()`', 'Call `form.clear()`'], answer: 'Call `form.reset()`' },
      { question: 'Why is it a good practice to break validation into smaller functions?', options: ['It makes the code run faster', 'It makes the code cleaner, easier to read, and easier to test', 'It is required by strict mode', 'It encrypts the data'], answer: 'It makes the code cleaner, easier to read, and easier to test' },
      { question: 'When building a real registration form, where does the ultimate, final validation happen?', options: ['In the HTML using `required`', 'In the JavaScript using `submit`', 'On the backend server, because client-side JS can be bypassed', 'In the CSS'], answer: 'On the backend server, because client-side JS can be bypassed' }
    ],
    interviewQuestions: [
      { q: 'How would you handle showing multiple error messages at once (e.g., "Email is invalid" AND "Password is too short")?', a: 'I would create an `errors` array. During validation, I would `push()` any failed rules into the array. Finally, if the array length is > 0, I would join the array into an HTML string and display it; otherwise, proceed with registration.' }
    ],
    summary: ['Combines DOM, Events, and Validation.', 'Always use `e.preventDefault()`.', 'Use `form.reset()` to clear inputs.'],
    references: commonReferences
  },
  'js_arrow_functions_1': {
    isStructured: true,
    title: '173. Arrow Functions',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'Arrow functions (introduced in ES6) provide a shorter, cleaner syntax for writing function expressions. They use the `=>` token instead of the `function` keyword.',
    whyUseIt: 'They make your code much more concise, especially when writing small callback functions for array methods like `map` or `filter`. They also handle the `this` keyword differently (lexical scoping).',
    syntax: 'const add = (a, b) => { return a + b; };',
    codeExample: '// Old Way (Function Expression)\nconst multiply = function(a, b) {\n  return a * b;\n};\n\n// New Way (Arrow Function)\nconst multiplyArrow = (a, b) => {\n  return a * b;\n};\n\n// EVEN SHORTER (Implicit Return)\n// If there is only ONE line of code, you can remove {} and "return"\nconst multiplyShort = (a, b) => a * b;\n\nconsole.log(multiplyShort(5, 5)); // 25',
    expectedOutput: '25',
    explanation: [
      { code: '=>', desc: 'The "fat arrow" symbol. It takes the place of the `function` keyword.' },
      { code: '=> a * b', desc: 'Implicit Return. If you remove the curly braces `{}`, JavaScript automatically returns whatever the expression evaluates to. No `return` keyword needed!' }
    ],
    realWorldExample: 'Filtering an array in one line of code: `const adults = users.filter(user => user.age >= 18);`.',
    commonMistakes: [
      { error: 'Forgetting parentheses on multiple parameters', code: 'const add = a, b => a + b;', suffix: 'If you have zero parameters, or more than one parameter, you MUST use parentheses: `(a, b) => ...`. You can only omit them if there is exactly ONE parameter: `x => x * 2`.' },
      { error: 'Returning an object implicitly', code: 'const makeObj = (name) => { name: name }', suffix: 'JavaScript thinks `{}` is the start of a function block, not an object. To implicitly return an object, wrap it in parentheses: `=> ({ name: name })`.' }
    ],
    bestPractices: ['Use arrow functions for callbacks and array methods. Use standard `function` declarations for top-level global functions or object methods where you might need a dynamic `this`.'],
    practiceExercise: {
      task: 'Rewrite this function as a one-line arrow function with an implicit return: `function double(n) { return n * 2; }`.',
      expectedOutput: 'A working one-line function.',
      solution: 'const double = n => n * 2;'
    },
    quiz: [
      { question: 'Which symbol is used to create an arrow function?', options: ['->', '=>', '==>', '<-'], answer: '=>' },
      { question: 'When can you omit the curly braces `{}` and the `return` keyword?', options: ['When the function takes no arguments', 'When the function body is exactly one expression', 'When you use strict mode', 'Never'], answer: 'When the function body is exactly one expression' },
      { question: 'When can you omit the parentheses `()` around the parameters?', options: ['When there are zero parameters', 'When there is exactly ONE parameter', 'When there are two or more parameters', 'Always'], answer: 'When there is exactly ONE parameter' },
      { question: 'How do you implicitly return an object from an arrow function?', options: ['x => { age: x }', 'x => return { age: x }', 'x => ({ age: x })', 'x => Object(age: x)'], answer: 'x => ({ age: x })' },
      { question: 'What keyword do arrow functions NOT have their own binding to?', options: ['return', 'this', 'const', 'super'], answer: 'this' }
    ],
    interviewQuestions: [
      { q: 'Explain how `this` behaves differently in an arrow function versus a regular function.', a: 'A regular function gets its own `this` context based on HOW it is called (e.g., the object calling it). An arrow function does NOT have its own `this`. It inherits `this` lexically from whatever scope it was defined in.' }
    ],
    summary: ['Shorter syntax using `=>`.', 'Implicit returns for single-line functions.', 'No bindings for `this`.'],
    references: commonReferences
  },
  'js_destructuring': {
    isStructured: true,
    title: '175. Destructuring',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'Destructuring allows you to unpack (extract) values from arrays, or properties from objects, into distinct variables in a single line of code.',
    whyUseIt: 'It dramatically reduces boilerplate code. Instead of writing `const x = obj.x; const y = obj.y;`, you can extract everything you need on one clean line.',
    syntax: 'const { prop1, prop2 } = object; const [item1, item2] = array;',
    codeExample: '// 1. Object Destructuring\nconst user = { name: "Alice", age: 25, role: "Admin" };\n\n// Extracts the "name" and "age" properties into matching variables\nconst { name, age } = user;\nconsole.log(name, age); // "Alice" 25\n\n// 2. Array Destructuring\nconst colors = ["red", "green", "blue"];\n\n// Extracts based on POSITION (index)\nconst [primary, secondary] = colors;\nconsole.log(primary); // "red"\nconsole.log(secondary); // "green"',
    expectedOutput: '"Alice" 25\n"red"\n"green"',
    explanation: [
      { code: 'const { name } = user', desc: 'Looks inside `user` for a property called `name`, and creates a new `const name` variable holding its value.' },
      { code: 'const [primary] = colors', desc: 'Looks at the first item in the array, and creates a new `const primary` variable holding that item.' }
    ],
    realWorldExample: 'Extracting data from an API response: `const { id, title, price } = productData;`. Also heavily used in React (e.g., `const [state, setState] = useState(0);`).',
    commonMistakes: [
      { error: 'Using the wrong brackets', code: 'const { first } = [1, 2, 3];', suffix: 'If destructuring an Array, use `[]`. If destructuring an Object, use `{}`.' },
      { error: 'Wrong variable name in objects', code: 'const { title } = { name: "Bob" };', suffix: 'For objects, the variable name MUST match the property name exactly. (To rename it, use `const { name: title } = ...`).' }
    ],
    bestPractices: ['You can set default values during destructuring to prevent `undefined`: `const { role = "Guest" } = user;`. This is very useful when dealing with optional API data.'],
    practiceExercise: {
      task: 'Given `const point = { x: 10, y: 20 };`, use destructuring to create variables `x` and `y`.',
      expectedOutput: 'Variables x and y exist.',
      solution: 'const { x, y } = point;'
    },
    quiz: [
      { question: 'What does destructuring do?', options: ['Deletes properties from objects', 'Unpacks values from arrays or objects into distinct variables', 'Converts arrays to objects', 'Destroys the DOM'], answer: 'Unpacks values from arrays or objects into distinct variables' },
      { question: 'When destructuring an Object, how does JS know which property to extract?', options: ['By index position', 'By the variable name matching the property name', 'By random selection', 'By the data type'], answer: 'By the variable name matching the property name' },
      { question: 'When destructuring an Array, how does JS know which value to extract?', options: ['By index position', 'By the variable name', 'By the length', 'By the data type'], answer: 'By index position' },
      { question: 'What is the syntax to destructure the first two items of an array called `nums`?', options: ['const {a, b} = nums;', 'const [a, b] = nums;', 'const a, b = nums;', 'const nums[a, b];'], answer: 'const [a, b] = nums;' },
      { question: 'Can you provide a default value in case the property doesn\'t exist?', options: ['Yes, e.g., `const { age = 18 } = user;`', 'No', 'Only for arrays', 'Only in strict mode'], answer: 'Yes, e.g., `const { age = 18 } = user;`' }
    ],
    interviewQuestions: [
      { q: 'How can you skip an item when destructuring an array?', a: 'Leave an empty space between the commas. E.g., `const [first, , third] = [1, 2, 3];` will extract 1 and 3, completely ignoring 2.' }
    ],
    summary: ['Extract object properties using `{}`.', 'Extract array elements using `[]`.', 'Massively reduces boilerplate code.'],
    references: commonReferences
  },
  'js_spread_operator_1': {
    isStructured: true,
    title: '176. Spread Operator',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The Spread operator (`...`) allows an iterable (like an array or string) or an object to be expanded in places where zero or more arguments or elements are expected.',
    whyUseIt: 'It is the easiest way to copy arrays, combine arrays, merge objects, or pass an array of numbers into a math function that expects individual arguments.',
    syntax: 'const newArray = [...oldArray, 4, 5];',
    codeExample: '// 1. Spreading Arrays (Copying & Combining)\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5];\nconst combined = [...arr1, ...arr2, 6];\nconsole.log(combined); // [1, 2, 3, 4, 5, 6]\n\n// 2. Spreading Objects (Merging)\nconst user = { name: "Bob" };\nconst details = { age: 30, city: "NYC" };\nconst fullUser = { ...user, ...details };\nconsole.log(fullUser); // { name: "Bob", age: 30, city: "NYC" }\n\n// 3. Spreading into Function Arguments\nconst numbers = [5, 12, 8];\nconsole.log(Math.max(...numbers)); // 12',
    expectedOutput: '[1, 2, 3, 4, 5, 6]\n{ name: "Bob", age: 30, city: "NYC" }\n12',
    explanation: [
      { code: '[...arr1]', desc: 'Takes all the elements *inside* `arr1` and dumps them out into the new array wrapper.' },
      { code: 'Math.max(...numbers)', desc: '`Math.max` expects individual numbers (`Math.max(5, 12, 8)`). It fails if you pass an array. The spread operator unpacks the array into individual arguments.' }
    ],
    realWorldExample: 'React state updates. To add a new item to a state array without mutating the original, you do: `setItems([...oldItems, newItem])`.',
    commonMistakes: [
      { error: 'Shallow Copies', code: 'const copy = [...nestedArray]', suffix: 'Spread only creates a "shallow copy". If your array contains objects or other arrays, those internal objects are still passed by reference, not fully cloned.' }
    ],
    bestPractices: ['Use the spread operator instead of `Object.assign()` for merging objects, or `.concat()` for merging arrays. It is much more readable.'],
    practiceExercise: {
      task: 'Given `const arr = ["b", "c"];`, create a new array `alphabet` that uses spread to make `["a", "b", "c", "d"]`.',
      expectedOutput: 'An array with four letters.',
      solution: 'const alphabet = ["a", ...arr, "d"];'
    },
    quiz: [
      { question: 'What is the syntax for the spread operator?', options: ['---', '***', '...', '+++'], answer: '...' },
      { question: 'What happens if you do `[...[1, 2], ...[3, 4]]`?', options: ['[[1, 2], [3, 4]]', '[1, 2, 3, 4]', 'An error', 'A string'], answer: '[1, 2, 3, 4]' },
      { question: 'Can the spread operator be used on Objects?', options: ['Yes, to merge properties into a new object', 'No, only on arrays', 'Only in strict mode', 'Yes, but it converts them to arrays'], answer: 'Yes, to merge properties into a new object' },
      { question: 'What does `Math.max(...[10, 20, 30])` evaluate to?', options: ['NaN', 'An array', '30', 'Error'], answer: '30' },
      { question: 'Does spreading an array mutate (change) the original array?', options: ['Yes', 'No, it creates a shallow copy', 'Only if you use `let`', 'Yes, it empties it'], answer: 'No, it creates a shallow copy' }
    ],
    interviewQuestions: [
      { q: 'What happens if you spread two objects that share the exact same property key? E.g., `{...{x: 1}, ...{x: 2}}`.', a: 'The last object spread "wins". The result will be `{x: 2}`. This is incredibly useful for overwriting specific default settings.' }
    ],
    summary: ['Unpacks arrays and objects.', 'Uses the `...` syntax.', 'Great for combining arrays and cloning objects.'],
    references: commonReferences
  },
  'js_default_parameters_1': {
    isStructured: true,
    title: '178. Default Parameters',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Default parameters allow you to initialize a function parameter with a default value if no value (or `undefined`) is passed to it when the function is called.',
    whyUseIt: 'It makes your functions more robust and prevents `undefined` or `NaN` errors when someone forgets to pass an argument.',
    syntax: 'function name(param1 = defaultValue) { }',
    codeExample: '// "Guest" is the default value for "user"\nfunction greet(user = "Guest") {\n  console.log(`Hello, ${user}!`);\n}\n\n// Calling it WITH an argument\ngreet("Alice"); // "Hello, Alice!"\n\n// Calling it WITHOUT an argument\ngreet(); // "Hello, Guest!"',
    expectedOutput: '"Hello, Alice!"\n"Hello, Guest!"',
    explanation: [
      { code: 'user = "Guest"', desc: 'If the function is called and nothing is provided for `user`, JavaScript automatically assigns it the string "Guest".' }
    ],
    realWorldExample: 'A function that calculates tax. You might have `function calcTax(price, taxRate = 0.05)`. If the user doesn\'t specify a rate, it defaults to 5%, but they can override it if they want.',
    commonMistakes: [
      { error: 'Putting default parameters first', code: 'function config(theme = "dark", username) {}', suffix: 'If you call `config("Alice")`, "Alice" gets assigned to `theme`! Always put parameters with default values at the END of your parameter list.' }
    ],
    bestPractices: ['Default parameters only trigger if the argument is strictly `undefined` (or entirely missing). If you explicitly pass `null` or `false` or `0`, the default parameter will NOT trigger.'],
    practiceExercise: {
      task: 'Write a function `multiply(a, b = 1)`. It should return `a * b`. Call it with `multiply(5)`.',
      expectedOutput: '5',
      solution: 'function multiply(a, b = 1) { return a * b; } console.log(multiply(5));'
    },
    quiz: [
      { question: 'What do default parameters do?', options: ['They prevent the function from taking arguments', 'They provide a fallback value if an argument is missing or undefined', 'They make the parameter a constant', 'They convert strings to numbers'], answer: 'They provide a fallback value if an argument is missing or undefined' },
      { question: 'What is the syntax for a default parameter?', options: ['param : value', 'param == value', 'param = value', 'param || value'], answer: 'param = value' },
      { question: 'Where should default parameters be placed in the function signature?', options: ['At the beginning', 'At the end, after all required parameters', 'It doesn\'t matter', 'In a separate object'], answer: 'At the end, after all required parameters' },
      { question: 'If `function test(x = 10)` is called with `test(null)`, what is the value of `x`?', options: ['10', 'undefined', 'null', 'Error'], answer: 'null' },
      { question: 'What was the old way of writing default parameters before ES6?', options: ['x = x || 10', 'if(x) return 10', 'x ? 10 : x', 'let x = 10'], answer: 'x = x || 10' }
    ],
    interviewQuestions: [
      { q: 'Can a default parameter reference previous parameters in the same function signature?', a: 'Yes! For example, `function greet(name, greeting = "Hello " + name)` is perfectly valid. The parameters are evaluated left-to-right.' }
    ],
    summary: ['Provides a fallback value.', 'Triggers on `undefined`.', 'Put them at the end of the parameter list.'],
    references: commonReferences
  }
};
