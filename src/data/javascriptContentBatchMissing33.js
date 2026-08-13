const commonReferences = [
  { label: 'MDN Web Docs - Array filter', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter' },
  { label: 'MDN Web Docs - Destructuring assignment', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment' }
];

export const javascriptContentBatchMissing33 = {
  'js_filter_1': {
    isStructured: true,
    title: '270. filter()',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `.filter()` method creates a brand new array filled with elements that pass a test provided by a function.',
    whyUseIt: 'It is the standard way to search through an array and pull out specific items (e.g., getting all users who are over 18, or removing a deleted item from a shopping cart) without destroying the original array.',
    syntax: 'const newArray = oldArray.filter((item) => {\n  return condition === true;\n});',
    codeExample: 'const numbers = [5, 10, 15, 20, 25];\n\n// 1. Keep only numbers greater than 15\nconst bigNumbers = numbers.filter(num => num > 15);\nconsole.log(bigNumbers); // [20, 25]\n\n// 2. Real-world object example\nconst products = [\n  { name: "Laptop", price: 1000, inStock: true },\n  { name: "Mouse", price: 25, inStock: false },\n  { name: "Keyboard", price: 75, inStock: true }\n];\n\n// Get only products that are currently in stock\nconst availableProducts = products.filter(product => product.inStock === true);\nconsole.log(availableProducts);\n// [{ name: "Laptop", ... }, { name: "Keyboard", ... }]\n\n// 3. Deleting an item (React style)\n// Keep everything EXCEPT the Mouse\nconst cartAfterDelete = products.filter(p => p.name !== "Mouse");',
    expectedOutput: '[20, 25]\n[{name: "Laptop"...}, {name: "Keyboard"...}]',
    explanation: [
      { code: 'num > 15', desc: 'The function MUST return a boolean (`true` or `false`). If it returns `true`, the item is copied into the new array. If `false`, it is skipped.' },
      { code: 'p.name !== "Mouse"', desc: 'The most common way to "delete" an item from an array in modern JavaScript (especially in React). You "delete" by filtering out the one you don\'t want.' }
    ],
    realWorldExample: 'An E-Commerce site. When you click the checkbox for "Show only items under $50", the app takes the master array of 10,000 products and runs `.filter(p => p.price < 50)` to generate the list you see on screen.',
    commonMistakes: [
      { error: 'Returning the item instead of a boolean', code: 'arr.filter(item => item)', suffix: 'If you do this, JavaScript tries to convert the item to a boolean (Truthiness). If the item is `0` or `""` (falsy), it gets accidentally filtered out!' }
    ],
    bestPractices: ['Chain `.filter()` and `.map()` together. E.g., `users.filter(u => u.age >= 18).map(u => u.email)` gets you an array of just the emails of adult users.'],
    practiceExercise: {
      task: 'Given `const scores = [45, 80, 95, 30];`, use `.filter()` to create an array called `passing` containing only scores 50 or higher.',
      expectedOutput: 'An array [80, 95].',
      solution: 'const passing = scores.filter(score => score >= 50);'
    },
    quiz: [
      { question: 'What does `.filter()` return?', options: ['The original array, modified', 'A single boolean value', 'A brand new array containing only the elements that passed the test condition', 'A string'], answer: 'A brand new array containing only the elements that passed the test condition' },
      { question: 'What type of value MUST the callback function inside `.filter()` return for each element?', options: ['A string', 'A number', 'The element itself', 'A boolean (`true` to keep it, `false` to skip it)'], answer: 'A boolean (`true` to keep it, `false` to skip it)' },
      { question: 'If you have an array `[1, 2, 3]` and you run `.filter(num => num > 5)`, what is the result?', options: ['An error', '`null`', '`undefined`', 'An empty array `[]`'], answer: 'An empty array `[]`' },
      { question: 'In React and modern JavaScript, what is the standard way to "delete" an item with `id: 2` from an array of objects?', options: ['Using `delete array[index]`', 'Using `.splice()`', 'Using `.filter(item => item.id !== 2)` to create a new array without that item', 'Using `.pop()`'], answer: 'Using `.filter(item => item.id !== 2)` to create a new array without that item' },
      { question: 'Can you chain `.filter()` directly into `.map()`?', options: ['No, that causes an error', 'Yes, because `.filter()` returns an array, and `.map()` operates on arrays', 'Only in strict mode', 'Yes, but it is very slow'], answer: 'Yes, because `.filter()` returns an array, and `.map()` operates on arrays' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `.find()` and `.filter()`?', a: '`.find()` returns the FIRST single element that matches the condition (an object/string/number), and then stops looking. `.filter()` searches the entire array and returns a NEW ARRAY containing ALL elements that matched the condition.' }
    ],
    summary: ['Returns a new array.', 'Requires a function returning true/false.', 'Standard way to "delete" items immutably.'],
    references: commonReferences
  },
  'js_reduce_1': {
    isStructured: true,
    title: '271. reduce()',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'The `.reduce()` method executes a "reducer" function on each element of the array, passing in the return value from the calculation on the preceding element. The final result is a single value.',
    whyUseIt: 'While `map` changes every item, and `filter` removes items, `reduce` is used when you want to take an array of many things and squash them down into ONE thing (like a total sum, a single object, or a single string).',
    syntax: 'array.reduce((accumulator, currentValue) => {\n  return updatedAccumulator;\n}, initialValue);',
    codeExample: 'const cart = [\n  { item: "Apple", price: 2 },\n  { item: "Bread", price: 3 },\n  { item: "Milk", price: 4 }\n];\n\n// Goal: Find the total price of the cart\n\n// 1. (acc) Accumulator: The running total\n// 2. (curr) Current Value: The current item in the loop\n// 3. 0: The initial starting value of the accumulator\nconst total = cart.reduce((acc, curr) => {\n  return acc + curr.price;\n}, 0);\n\nconsole.log(`Total: $${total}`); // Total: $9\n\n\n// Advanced: Grouping an array of strings into an object\nconst votes = ["Yes", "No", "Yes", "Yes", "No"];\nconst results = votes.reduce((acc, curr) => {\n  if (!acc[curr]) {\n    acc[curr] = 1; // If it doesn\'t exist, set to 1\n  } else {\n    acc[curr]++;   // If it does, increment\n  }\n  return acc;\n}, {}); // Start with an empty object!\n\nconsole.log(results); // { Yes: 3, No: 2 }',
    expectedOutput: 'Total: $9\n{ Yes: 3, No: 2 }',
    explanation: [
      { code: 'accumulator (acc)', desc: 'Think of this as a snowball rolling down a hill. Whatever you `return` from the function becomes the new snowball for the next loop.' },
      { code: ', 0)', desc: 'The Initial Value. Crucial! If you are summing numbers, start with `0`. If you are building an object, start with `{}`. If you omit this, JavaScript uses the first element of the array as the initial value, which often causes bizarre bugs.' }
    ],
    realWorldExample: 'Calculating a shopping cart total, or parsing a giant array of raw database logs into a single neatly organized summary object.',
    commonMistakes: [
      { error: 'Forgetting to return the accumulator', code: 'arr.reduce((acc, val) => { acc += val; }, 0)', suffix: 'If you use curly braces, you MUST return the accumulator. If you don\'t, `acc` becomes `undefined` on the second loop, and `undefined + number` results in `NaN`.' }
    ],
    bestPractices: ['Always explicitly provide an initial value (like `0` or `{}`). It makes the code much easier to read and prevents edge-case crashes when the array is empty.'],
    practiceExercise: {
      task: 'Given `const arr = [1, 2, 3];`, write a `.reduce()` function to find the sum of all elements. Set the initial value to 0.',
      expectedOutput: '6',
      solution: 'const sum = arr.reduce((acc, val) => acc + val, 0);'
    },
    quiz: [
      { question: 'What is the primary purpose of the `.reduce()` method?', options: ['To make the array smaller', 'To transform an array of items into a single final value (like a sum, or a combined object)', 'To delete items', 'To sort items'], answer: 'To transform an array of items into a single final value (like a sum, or a combined object)' },
      { question: 'What does the `accumulator` argument represent in the callback function?', options: ['The battery life of the device', 'The current item in the loop', 'The index of the array', 'The running total/result that gets passed from one loop iteration to the next'], answer: 'The running total/result that gets passed from one loop iteration to the next' },
      { question: 'Why is the "initial value" argument (e.g., `, 0` or `, {}`) placed after the callback function so important?', options: ['It isn\'t, it is a formatting preference', 'It tells the accumulator what its starting value should be before the first loop begins', 'It stops the loop early', 'It sets the array length'], answer: 'It tells the accumulator what its starting value should be before the first loop begins' },
      { question: 'If you forget to `return` the accumulator inside a multi-line reduce function, what will the final result be?', options: ['The correct answer', 'A syntax error', '`undefined` (or `NaN` if you were trying to do math on it)', '`0`'], answer: '`undefined` (or `NaN` if you were trying to do math on it)' },
      { question: 'Can `.reduce()` output a completely different data type than what was in the array (e.g., turning an array of strings into a single Object)?', options: ['Yes, depending entirely on what you set the initial value to and how you build it', 'No, reduce on an array of strings can only return a string', 'No, it can only return numbers', 'Only in strict mode'], answer: 'Yes, depending entirely on what you set the initial value to and how you build it' }
    ],
    interviewQuestions: [
      { q: 'What happens if you run `.reduce()` on an empty array without providing an initial value?', a: 'JavaScript will instantly throw a `TypeError: Reduce of empty array with no initial value`. This is why providing the initial value (like `0`) is a strict best practice.' }
    ],
    summary: ['Reduces an array to a single value.', 'Requires an accumulator and a return.', 'ALWAYS set an initial value.'],
    references: commonReferences
  },
  'js_destructuring_1': {
    isStructured: true,
    title: '272. Destructuring',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Destructuring is a modern JavaScript syntax that allows you to easily extract values from arrays or properties from objects and instantly assign them to distinct variables.',
    whyUseIt: 'It eliminates repetitive, boilerplate code like `const name = user.name; const age = user.age; const email = user.email;`. It is arguably the most frequently used ES6 feature in modern frameworks like React.',
    syntax: 'const { name, age } = userObj;\nconst [first, second] = myArray;',
    codeExample: '// --- OBJECT DESTRUCTURING ---\nconst user = {\n  firstName: "Tony",\n  lastName: "Stark",\n  heroName: "Iron Man"\n};\n\n// Old way:\n// const firstName = user.firstName;\n// const heroName = user.heroName;\n\n// Modern Destructuring:\n// Create variables that exactly match the object property names\nconst { firstName, heroName } = user;\nconsole.log(firstName); // "Tony"\n\n\n// --- ARRAY DESTRUCTURING ---\nconst colors = ["Red", "Green", "Blue"];\n\n// Old way:\n// const primary = colors[0];\n// const secondary = colors[1];\n\n// Modern Destructuring:\n// Variables are assigned strictly by their ORDER in the array\nconst [primary, secondary] = colors;\nconsole.log(primary); // "Red"\nconsole.log(secondary); // "Green"',
    expectedOutput: 'Tony\nRed\nGreen',
    explanation: [
      { code: 'const { firstName } = user', desc: 'Object destructuring uses curly braces. The variable name MUST exactly match the key in the object.' },
      { code: 'const [primary] = colors', desc: 'Array destructuring uses square brackets. The variable names can be anything you want; they are assigned based on the index order.' }
    ],
    realWorldExample: 'React Props. Instead of `function Card(props) { return <p>{props.name}</p> }`, developers use destructuring in the parameters: `function Card({ name }) { return <p>{name}</p> }`.',
    commonMistakes: [
      { error: 'Destructuring undefined', code: 'const { name } = undefined', suffix: 'If the object you are trying to destructure is `null` or `undefined`, JavaScript will throw a fatal TypeError and crash. Always ensure the object exists before destructuring it.' }
    ],
    bestPractices: ['You can set default values during destructuring to prevent undefined variables: `const { name, role = "Guest" } = user;`. If `user.role` is missing, it defaults to "Guest".'],
    practiceExercise: {
      task: 'Given `const coords = { x: 50, y: 100 };`, use object destructuring to create variables `x` and `y`.',
      expectedOutput: 'Variables x and y.',
      solution: 'const { x, y } = coords;'
    },
    quiz: [
      { question: 'What is the main benefit of Destructuring?', options: ['It encrypts variables', 'It allows you to cleanly unpack values from arrays or objects into distinct variables without writing repetitive code', 'It destroys old variables to save memory', 'It converts arrays to strings'], answer: 'It allows you to cleanly unpack values from arrays or objects into distinct variables without writing repetitive code' },
      { question: 'When destructuring an Object, how does JavaScript know which value to grab?', options: ['By the order of the variables', 'By the curly braces', 'The variable name must exactly match the property key name in the object', 'It guesses'], answer: 'The variable name must exactly match the property key name in the object' },
      { question: 'When destructuring an Array, how does JavaScript know which value to grab?', options: ['The variable name must match the string exactly', 'It assigns values strictly based on the index order (first variable gets index 0, second gets index 1, etc.)', 'By alphabetical order', 'You must specify the index number'], answer: 'It assigns values strictly based on the index order (first variable gets index 0, second gets index 1, etc.)' },
      { question: 'If `const user = { name: "Bob" }`, what is the value of `age` if you write `const { name, age } = user;`?', options: ['An error is thrown', '`0`', '`undefined`', '`null`'], answer: '`undefined`' },
      { question: 'How can you provide a fallback value so `age` isn\'t undefined?', options: ['const { name, age || 18 } = user;', 'const { name, age = 18 } = user;', 'const { name, age : 18 } = user;', 'You cannot do this in destructuring'], answer: 'const { name, age = 18 } = user;' }
    ],
    interviewQuestions: [
      { q: 'How do you rename a variable while destructuring an object?', a: 'You use a colon. For example: `const { firstName: name } = user;`. This grabs `user.firstName` but assigns it to a new local variable called `name`.' }
    ],
    summary: ['Unpacks arrays and objects cleanly.', 'Objects use `{ }` and exact names.', 'Arrays use `[ ]` and index order.'],
    references: commonReferences
  },
  'js_spread_operator_2': {
    isStructured: true,
    title: '273. Spread Operator',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The Spread Operator (`...`) allows an iterable (like an array or string) or an object to be expanded in places where zero or more arguments or elements are expected.',
    whyUseIt: 'It is the cleanest way to copy arrays, merge objects, or pass an array of numbers into a function that expects individual arguments (like `Math.max`). It replaces older, clunky methods like `Object.assign()` or `concat()`.',
    syntax: 'const newArr = [...oldArr, 4, 5];\nconst newObj = { ...oldObj, newProp: true };',
    codeExample: '// --- ARRAYS ---\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5];\n\n// 1. Copying an array (Creates a brand new array in memory)\nconst copyArr = [...arr1];\n\n// 2. Merging arrays seamlessly\nconst merged = [...arr1, ...arr2, 6];\nconsole.log(merged); // [1, 2, 3, 4, 5, 6]\n\n\n// --- OBJECTS ---\nconst user = { name: "Alice", age: 25 };\n\n// 3. Merging and updating objects\nconst updatedUser = { \n  ...user, // Spreads out name and age\n  age: 26, // Overwrites age\n  location: "NY" // Adds a new property\n};\nconsole.log(updatedUser); // { name: "Alice", age: 26, location: "NY" }\n\n// 4. Function Arguments\nconst numbers = [10, 50, 20];\n// Math.max expects Math.max(10, 50, 20). It fails if you pass an array.\n// Spread "unpacks" the array into individual arguments!\nconsole.log(Math.max(...numbers)); // 50',
    expectedOutput: '[1, 2, 3, 4, 5, 6]\n{ name: "Alice", age: 26, location: "NY" }\n50',
    explanation: [
      { code: '[...arr1]', desc: 'Think of `...` as taking the array out of its brackets and dumping the raw contents onto the table. Then the new `[]` brackets wrap around those contents.' },
      { code: '{ ...user, age: 26 }', desc: 'Order matters! If you put `age: 26` FIRST, and `...user` SECOND, the spread operator will overwrite your `26` with the old `25`.' }
    ],
    realWorldExample: 'React State updates. In React, you cannot mutate state directly. To add an item to an array, you NEVER use `.push()`. Instead, you use the spread operator to create a new array: `setItems([...oldItems, newItem])`.',
    commonMistakes: [
      { error: 'Shallow Copies', code: 'const copy = [...arr]', suffix: 'The spread operator only creates a "Shallow Copy". If your array contains nested objects (e.g., `[{id:1}]`), the outer array is new, but the inner objects are still memory references to the original objects!' }
    ],
    bestPractices: ['Use the spread operator instead of `.push()` or modifying objects directly. This embraces "Immutability", a core concept in modern web development that drastically reduces bugs.'],
    practiceExercise: {
      task: 'Given `const part1 = ["a", "b"];` and `const part2 = ["c"];`, use the spread operator to create a single array `["a", "b", "c"]`.',
      expectedOutput: 'An array ["a", "b", "c"].',
      solution: 'const combined = [...part1, ...part2];'
    },
    quiz: [
      { question: 'What syntax represents the Spread Operator?', options: ['&&&', '###', '...', '+++'], answer: '...' },
      { question: 'If `const a = [1, 2]` and `const b = [...a, 3]`, what is `b`?', options: ['[[1, 2], 3]', '[1, 2, 3]', '[3, 1, 2]', 'undefined'], answer: '[1, 2, 3]' },
      { question: 'Why is `const copy = [...original]` better than `const copy = original`?', options: ['It isn\'t better', '`const copy = original` just creates a reference to the exact same array in memory. Modifying one modifies both. Spread creates a brand new independent shallow copy', 'It is faster', 'It uses less memory'], answer: '`const copy = original` just creates a reference to the exact same array in memory. Modifying one modifies both. Spread creates a brand new independent shallow copy' },
      { question: 'If `const user = { id: 1 }`, what is `{ ...user, id: 2 }`?', options: ['{ id: 1, id: 2 }', '{ id: 1 }', '{ id: 2 }', 'Error'], answer: '{ id: 2 }' },
      { question: 'How does the spread operator help when using `Math.max()` with an array of numbers?', options: ['It does the math for you', '`Math.max` requires separate arguments (e.g., `max(1, 2)`). The spread operator unpacks the array into separate individual arguments seamlessly', 'It sorts the array first', 'It converts strings to numbers'], answer: '`Math.max` requires separate arguments (e.g., `max(1, 2)`). The spread operator unpacks the array into separate individual arguments seamlessly' }
    ],
    interviewQuestions: [
      { q: 'What is the "Rest" parameter, and how is it different from "Spread"?', a: 'They use the exact same `...` syntax, but do the opposite. Spread UNPACKS an array. Rest is used in function definitions (e.g., `function add(...args)`) to PACK multiple separate arguments into a single array variable.' }
    ],
    summary: ['Unpacks arrays and objects.', 'Creates clean shallow copies.', 'Use to merge data immutably.'],
    references: commonReferences
  },
  'js_arrow_functions_2': {
    isStructured: true,
    title: '274. Arrow Functions',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Arrow functions are a compact alternative to traditional function expressions. Introduced in ES6, they use the `=>` syntax and have specific rules regarding the `this` keyword.',
    whyUseIt: 'They make code incredibly concise, especially when writing small callback functions for array methods like `.map()` or `.filter()`. They also fix the notoriously confusing behavior of the `this` keyword in traditional functions.',
    syntax: 'const myFunc = (param) => { return param * 2; };\n// Implicit return syntax:\nconst shortFunc = param => param * 2;',
    codeExample: '// 1. Traditional Function\nconst addOld = function(a, b) {\n  return a + b;\n};\n\n// 2. Standard Arrow Function\nconst addNew = (a, b) => {\n  return a + b;\n};\n\n// 3. Implicit Return (The superpower of Arrow Functions)\n// If there is only ONE line of code, you can remove the { } and the "return" keyword!\nconst multiply = (a, b) => a * b;\n\nconsole.log(multiply(5, 5)); // 25\n\n// 4. One Parameter rule\n// If there is exactly ONE parameter, you can remove the ( ) too!\nconst square = x => x * x;\n\nconsole.log(square(4)); // 16\n\n// Extremely clean array methods:\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(n => n * 2);',
    expectedOutput: '25\n16',
    explanation: [
      { code: 'Implicit Return', desc: 'When you omit the curly braces `{}`, the arrow function automatically assumes that the single expression immediately following the arrow is what you want to `return`.' },
      { code: 'n => n * 2', desc: 'Look how clean that is compared to `function(n) { return n * 2; }`. This is why arrow functions are universally used in React and array methods.' }
    ],
    realWorldExample: 'Any modern JavaScript codebase. You will almost never see the `function` keyword used for callbacks anymore; they are exclusively written as `() => {}`.',
    commonMistakes: [
      { error: 'Implicitly returning an Object', code: 'const getObj = () => { id: 1 }', suffix: 'This is a SyntaxError! JavaScript thinks the `{}` are the function body block, not an object. To implicitly return an object, you MUST wrap it in parentheses: `const getObj = () => ({ id: 1 })`.' }
    ],
    bestPractices: ['Use standard `function` declarations for top-level utility functions in your file, but use arrow functions for ALL callbacks and inline methods to keep things clean.'],
    practiceExercise: {
      task: 'Convert this to an arrow function with implicit return: `function isEven(num) { return num % 2 === 0; }`',
      expectedOutput: 'A concise arrow function.',
      solution: 'const isEven = num => num % 2 === 0;'
    },
    quiz: [
      { question: 'What symbol defines an Arrow Function?', options: ['->', '=>', '==>', '<='], answer: '=>' },
      { question: 'What is an "Implicit Return"?', options: ['A function that returns undefined', 'When you omit the `{}` brackets, the arrow function automatically returns the value of the single expression without needing the `return` keyword', 'A return that happens in the background', 'A function that returns a Promise'], answer: 'When you omit the `{}` brackets, the arrow function automatically returns the value of the single expression without needing the `return` keyword' },
      { question: 'If an arrow function has exactly ONE parameter, what can you optionally remove?', options: ['The `=>` symbol', 'The parameter name', 'The parentheses `()` around the parameter', 'The entire function'], answer: 'The parentheses `()` around the parameter' },
      { question: 'Why does `const getObj = () => { name: "Bob" };` fail to return the object?', options: ['Bob is an invalid name', 'Because JavaScript interprets the `{ }` as the start of a multi-line function block, not as an Object. You must wrap the object in parentheses: `() => ({ name: "Bob" })`', 'You cannot return objects', 'Because there is no parameter'], answer: 'Because JavaScript interprets the `{ }` as the start of a multi-line function block, not as an Object. You must wrap the object in parentheses: `() => ({ name: "Bob" })`' },
      { question: 'Where are arrow functions most commonly used?', options: ['Inside HTML tags', 'As short, concise callback functions inside array methods like `.map()` or event listeners', 'To create CSS styles', 'As database queries'], answer: 'As short, concise callback functions inside array methods like `.map()` or event listeners' }
    ],
    interviewQuestions: [
      { q: 'How does the `this` keyword behave differently in Arrow Functions compared to traditional functions?', a: 'Traditional functions create their own internal `this` context based on HOW they are called. Arrow functions DO NOT create their own `this`; they inherit (or "lexically bind") the `this` value from whatever scope they were created inside. This makes them perfect for callbacks inside Classes.' }
    ],
    summary: ['Concise syntax using `=>`.', 'Implicit returns without `{}` or `return`.', 'No parentheses needed for single parameters.'],
    references: commonReferences
  }
};
