const commonReferences = [
  { label: 'MDN Web Docs - Array Methods', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' },
  { label: 'MDN Web Docs - Objects', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects' }
];

export const javascriptContentBatchMissing5 = {
  'js_some': {
    isStructured: true,
    title: '91. some()',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: 'The `some()` method tests whether **at least one** element in the array passes the test implemented by the provided function. It returns true if it finds one, otherwise false.',
    whyUseIt: 'When you want to know if *any* item in an array matches a condition without needing to know which one or getting the object back (unlike `find`).',
    syntax: 'array.some(function(currentValue, index, arr))',
    codeExample: 'let scores = [45, 60, 30, 95, 20];\n\n// Did anyone score above 90?\nlet hasA = scores.some(score => score > 90);\nconsole.log(hasA); // true',
    expectedOutput: 'true',
    explanation: [
      { code: 'some(score => score > 90)', desc: 'Loops through the array. Once it hits `95`, it immediately returns `true` and stops checking the rest of the array (short-circuiting).' }
    ],
    realWorldExample: 'Checking if a user is an admin. `let isAdmin = userRoles.some(role => role.name === "Admin");`',
    commonMistakes: [
      { error: 'Treating `some` like `filter`', code: 'let passed = scores.some(s => s > 50)', suffix: '`passed` will be `true` or `false`, NOT an array of the scores that passed. Use `filter()` if you want the actual elements.' }
    ],
    bestPractices: ['Because `some()` short-circuits (stops early), it is very performant for simple existence checks on large arrays.'],
    practiceExercise: {
      task: 'Declare `let names = ["John", "Paul", "George", "Ringo"]`. Check if any name has exactly 4 letters using `some()`. Log the result.',
      expectedOutput: 'true',
      solution: 'let names = ["John", "Paul", "George", "Ringo"]; console.log(names.some(name => name.length === 4));'
    },
    quiz: [
      { question: 'What does `some()` return?', options: ['An array of matches', 'The first matched element', 'A boolean (true/false)', 'The index of the match'], answer: 'A boolean (true/false)' },
      { question: 'Does `some()` check every single element in the array?', options: ['Yes, always', 'No, it stops as soon as it finds a true condition', 'Only if the array has numbers', 'Only if you provide a second argument'], answer: 'No, it stops as soon as it finds a true condition' },
      { question: 'What is the difference between `some()` and `includes()`?', options: ['`some()` is for strings, `includes()` is for arrays', '`includes()` takes a specific value to find, `some()` takes a callback function to test a condition', 'They are exactly the same', '`includes()` returns an array'], answer: '`includes()` takes a specific value to find, `some()` takes a callback function to test a condition' },
      { question: 'What does `some()` return for an empty array `[].some(...)`?', options: ['true', 'false', 'undefined', 'An error'], answer: 'false' },
      { question: 'Does `some()` mutate the array?', options: ['Yes', 'No', 'Sometimes', 'Only if the condition is true'], answer: 'No' }
    ],
    interviewQuestions: [
      { q: 'Why does `[].some(fn)` always return `false` regardless of the function?', a: 'Because `some()` asks "does *at least one* element pass?" In an empty array, there are no elements to test, so the answer is always no (false).' }
    ],
    summary: ['Checks if ANY element passes a test.', 'Returns a boolean.', 'Short-circuits (stops early).'],
    references: commonReferences
  },
  'js_every': {
    isStructured: true,
    title: '92. every()',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: 'The `every()` method tests whether **all** elements in the array pass the test implemented by the provided function. It returns a Boolean value.',
    whyUseIt: 'When you need to verify that an entire dataset meets a strict requirement, like checking if every student passed a test, or if every field in a form is filled out.',
    syntax: 'array.every(function(currentValue, index, arr))',
    codeExample: 'let scores = [85, 90, 78, 92];\n\n// Did everyone pass? (score > 50)\nlet allPassed = scores.every(score => score > 50);\nconsole.log(allPassed); // true\n\nlet allAs = scores.every(score => score > 90);\nconsole.log(allAs); // false',
    expectedOutput: 'true\nfalse',
    explanation: [
      { code: 'every(score => score > 50)', desc: 'Checks every item. Since 85, 90, 78, and 92 are all > 50, it returns true.' },
      { code: 'every(score => score > 90)', desc: 'As soon as it hits 85 (which is not > 90), it instantly returns false and stops checking.' }
    ],
    realWorldExample: 'Form validation: `let isFormValid = formFields.every(field => field.value !== "");`',
    commonMistakes: [
      { error: 'Confusing every() with some()', code: 'if (arr.every(cond))', suffix: '`every` means ALL items must pass. `some` means AT LEAST ONE item must pass.' }
    ],
    bestPractices: ['Like `some()`, `every()` short-circuits. It stops looping the exact moment it finds a `false` condition.'],
    practiceExercise: {
      task: 'Declare `let ages = [21, 25, 30, 19, 40]`. Use `every()` to check if ALL ages are >= 18. Log the result.',
      expectedOutput: 'true',
      solution: 'let ages = [21, 25, 30, 19, 40]; console.log(ages.every(age => age >= 18));'
    },
    quiz: [
      { question: 'What does `every()` return?', options: ['An array', 'A number', 'A boolean', 'undefined'], answer: 'A boolean' },
      { question: 'When does `every()` stop looping?', options: ['It never stops early', 'When it finds a true condition', 'When it finds a false condition', 'When the array is empty'], answer: 'When it finds a false condition' },
      { question: 'What does `[].every(fn)` return?', options: ['false', 'true', 'undefined', 'Error'], answer: 'true' },
      { question: 'What is the opposite of `every()`?', options: ['none()', 'all()', 'some()', 'map()'], answer: 'some()' },
      { question: 'If `arr = [2, 4, 6]`, what does `arr.every(x => x % 2 === 0)` return?', options: ['true', 'false', 'undefined', '6'], answer: 'true' }
    ],
    interviewQuestions: [
      { q: 'Why does `[].every(fn)` always return `true`?', a: 'This is known as "vacuous truth" in mathematics. Because there are no elements that *fail* the test, it is technically true that "every" element present passes.' }
    ],
    summary: ['Checks if ALL elements pass a test.', 'Returns a boolean.', 'Short-circuits on the first false.'],
    references: commonReferences
  },
  'js_reduce': {
    isStructured: true,
    title: '93. reduce()',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'The `reduce()` method executes a "reducer" callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result is a single value.',
    whyUseIt: 'The ultimate tool for aggregating data. Used to sum up numbers, find averages, or convert an array into an entirely different data structure (like an object).',
    syntax: 'array.reduce(function(accumulator, currentValue), initialValue)',
    codeExample: 'let numbers = [10, 20, 30];\n\nlet sum = numbers.reduce((acc, curr) => {\n  return acc + curr;\n}, 0);\n\nconsole.log(sum); // 60',
    expectedOutput: '60',
    explanation: [
      { code: 'acc', desc: 'The "accumulator" keeps track of the running total.' },
      { code: 'curr', desc: 'The "currentValue" is the current item from the array being looped over.' },
      { code: '0', desc: 'The initial value of the accumulator. (0 + 10 = 10, then 10 + 20 = 30, then 30 + 30 = 60).' }
    ],
    realWorldExample: 'Calculating the total price of a shopping cart: `let total = cart.reduce((total, item) => total + item.price, 0);`',
    commonMistakes: [
      { error: 'Forgetting the initial value', code: 'arr.reduce((acc, curr) => acc + curr.price)', suffix: 'If you don\'t provide an initial value (like 0), `reduce` uses the first item in the array as the initial value. If your array has objects, it will try to add an object to a number, causing bugs.' },
      { error: 'Forgetting to return', code: 'arr.reduce((acc, curr) => { acc + curr }, 0)', suffix: 'You MUST return the new accumulator value, otherwise the next iteration\'s accumulator will be `undefined`.' }
    ],
    bestPractices: ['Always provide an `initialValue`. It makes your code safer and prevents errors if the array happens to be empty.'],
    practiceExercise: {
      task: 'Declare `let scores = [5, 10, 15]`. Use `reduce` to multiply all the numbers together (product). Log the result. (Hint: Initial value should be 1, not 0!).',
      expectedOutput: '750',
      solution: 'let scores = [5, 10, 15]; console.log(scores.reduce((acc, curr) => acc * curr, 1));'
    },
    quiz: [
      { question: 'What is the main purpose of `reduce()`?', options: ['To filter out values', 'To boil down an array into a single value', 'To create a new array of the same length', 'To sort an array'], answer: 'To boil down an array into a single value' },
      { question: 'What are the two main parameters of the reducer function?', options: ['value, index', 'accumulator, currentValue', 'index, array', 'previous, next'], answer: 'accumulator, currentValue' },
      { question: 'What happens if you forget to provide an initial value?', options: ['It throws an error', 'It defaults to 0', 'It defaults to undefined', 'It uses the first element of the array as the initial value'], answer: 'It uses the first element of the array as the initial value' },
      { question: 'What will `[].reduce((a, b) => a + b)` do without an initial value?', options: ['Returns 0', 'Returns undefined', 'Throws a TypeError', 'Returns null'], answer: 'Throws a TypeError' },
      { question: 'Can `reduce()` return an object instead of a number?', options: ['No, only numbers and strings', 'Yes, if you set the initial value to `{}` and update it', 'Only in Node.js', 'Only if the array contains objects'], answer: 'Yes, if you set the initial value to `{}` and update it' }
    ],
    interviewQuestions: [
      { q: 'How would you use `reduce()` to flatten an array of arrays? (e.g. `[[1,2], [3,4]]` to `[1,2,3,4]`)', a: '`let flat = arr.reduce((acc, curr) => acc.concat(curr), []);`' }
    ],
    summary: ['Reduces an array to a single value.', 'Passes an accumulator between iterations.', 'Always supply an initial value.'],
    references: commonReferences
  },
  'js_spread_operator': {
    isStructured: true,
    title: '95. Spread Operator',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The spread operator (`...`) allows an iterable (like an array or string) to be expanded in places where zero or more arguments or elements are expected.',
    whyUseIt: 'The easiest way to copy arrays, combine arrays, or pass array elements as separate arguments to a function without using `.concat()` or `.apply()`.',
    syntax: '[...arrayName]',
    codeExample: 'let arr1 = [1, 2];\nlet arr2 = [3, 4];\n\n// Combine arrays\nlet combined = [...arr1, ...arr2];\nconsole.log(combined); // [1, 2, 3, 4]\n\n// Copy an array\nlet copy = [...arr1];\n\n// Pass arguments\nconsole.log(Math.max(...combined)); // 4',
    expectedOutput: '[1, 2, 3, 4]\n4',
    explanation: [
      { code: '[...arr1, ...arr2]', desc: 'Takes all items out of `arr1` and `arr2` and dumps them into a brand new array.' },
      { code: 'Math.max(...combined)', desc: 'Math.max expects comma-separated numbers (1,2,3,4). The spread operator unpacks the array so it works perfectly.' }
    ],
    realWorldExample: 'Adding a new item to a React state array without mutating the original: `setTodos([...todos, newTask]);`',
    commonMistakes: [
      { error: 'Shallow copying', code: 'let copy = [...arr];', suffix: 'The spread operator creates a *shallow* copy. If your array contains objects (e.g. `[{id:1}]`), the objects inside the copied array still reference the original objects in memory.' }
    ],
    bestPractices: ['Use the spread operator instead of `array.concat()`, as it is much more readable and flexible (you can insert items in the middle: `[1, ...arr, 4]`).'],
    practiceExercise: {
      task: 'Declare `let parts = ["shoulders", "knees"]`. Use the spread operator to create a new array `["head", ...parts, "and", "toes"]`. Log it.',
      expectedOutput: '["head", "shoulders", "knees", "and", "toes"]',
      solution: 'let parts = ["shoulders", "knees"]; let song = ["head", ...parts, "and", "toes"]; console.log(song);'
    },
    quiz: [
      { question: 'What is the syntax for the spread operator?', options: ['...', '&&', '||', '=>'], answer: '...' },
      { question: 'What does `[...[1, 2], ...[3, 4]]` evaluate to?', options: ['[[1, 2], [3, 4]]', '[1, 2, 3, 4]', 'An error', 'undefined'], answer: '[1, 2, 3, 4]' },
      { question: 'Is `let copy = [...arr]` a deep copy or shallow copy?', options: ['Deep copy', 'Shallow copy', 'Neither', 'Both'], answer: 'Shallow copy' },
      { question: 'Why use `Math.max(...arr)` instead of `Math.max(arr)`?', options: ['Because max() expects individual arguments, not an array', 'Because the spread operator is faster', 'Because max() only accepts strings', 'You don\'t have to, both work'], answer: 'Because max() expects individual arguments, not an array' },
      { question: 'Can you use the spread operator on strings?', options: ['Yes, `[..."hello"]` becomes `["h","e","l","l","o"]`', 'No, it only works on arrays', 'Only in strict mode', 'Yes, but it just copies the string'], answer: 'Yes, `[..."hello"]` becomes `["h","e","l","l","o"]`' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between the Spread operator and the Rest parameter?', a: 'They look identical (`...`), but Spread *expands* an array into individual elements, while Rest *collects* multiple individual elements into an array (used in function parameters).' }
    ],
    summary: ['Unpacks arrays into individual elements.', 'Great for combining and copying arrays.', 'Creates shallow copies.'],
    references: commonReferences
  },
  'js_creating_objects': {
    isStructured: true,
    title: '98. Creating Objects',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'An object is a collection of related data and/or functionality, usually consisting of several variables and functions (called properties and methods). The most common way to create an object is using Object Literal syntax.',
    whyUseIt: 'Objects are used to group related variables together. Instead of having `carMake`, `carModel`, `carYear`, you just have one `car` object.',
    syntax: 'let obj = { key: value, key2: value2 };',
    codeExample: 'let person = {\n  firstName: "John",\n  lastName: "Doe",\n  age: 30,\n  isEmployed: true\n};\n\nconsole.log(person);\nconsole.log(typeof person);',
    expectedOutput: '{firstName: "John", lastName: "Doe", age: 30, isEmployed: true}\n"object"',
    explanation: [
      { code: '{}', desc: 'The curly braces define an Object Literal.' },
      { code: 'key: value', desc: 'Properties are defined as key-value pairs, separated by colons. Each pair is separated by a comma.' }
    ],
    realWorldExample: 'Representing a user profile retrieved from a database: `{ id: 42, username: "gamer99", email: "g@mer.com" }`.',
    commonMistakes: [
      { error: 'Using `=` instead of `:`', code: '{ name = "John" }', suffix: 'Inside an object literal, you MUST use a colon `:` to assign a value to a key, not an equals sign.' },
      { error: 'Forgetting commas', code: '{ age: 30 name: "John" }', suffix: 'You must separate each key-value pair with a comma.' }
    ],
    bestPractices: ['Always use the Object Literal syntax `{}` rather than `new Object()`. It is faster to type, easier to read, and universally preferred.'],
    practiceExercise: {
      task: 'Create an object called `book` with properties `title` ("1984") and `author` ("George Orwell"). Log the object.',
      expectedOutput: '{title: "1984", author: "George Orwell"}',
      solution: 'let book = { title: "1984", author: "George Orwell" }; console.log(book);'
    },
    quiz: [
      { question: 'What symbols are used to create an Object Literal?', options: ['[]', '{}', '()', '<>'], answer: '{}' },
      { question: 'How do you assign a value to a key inside an object literal?', options: ['With an equals sign (=)', 'With a colon (:)', 'With an arrow (=>)', 'With a hyphen (-)'], answer: 'With a colon (:)' },
      { question: 'What are the variables inside an object called?', options: ['Elements', 'Items', 'Properties', 'Methods'], answer: 'Properties' },
      { question: 'How do you separate multiple properties inside an object?', options: ['With a semicolon (;)', 'With a comma (,)', 'With a period (.)', 'With a space'], answer: 'With a comma (,)' },
      { question: 'Is `new Object()` the recommended way to create an object?', options: ['Yes', 'No, Object Literal `{}` is preferred', 'Only in old browsers', 'Yes, for performance'], answer: 'No, Object Literal `{}` is preferred' }
    ],
    interviewQuestions: [
      { q: 'What is a JSON object?', a: 'JSON (JavaScript Object Notation) is a string format that looks exactly like a JS object literal, but all keys MUST be wrapped in double quotes. It is used for transmitting data.' }
    ],
    summary: ['Group related data together.', 'Use Object Literal `{}` syntax.', 'Use `key: value` pairs separated by commas.'],
    references: commonReferences
  }
};
