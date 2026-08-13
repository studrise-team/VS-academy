const commonReferences = [
  { label: 'MDN Web Docs - Array', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' }
];

export const javascriptContentBatchMissing4 = {
  'js_sort': {
    isStructured: true,
    title: '85. sort()',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'The `sort()` method sorts the elements of an array *in place* and returns the reference to the same array, now sorted. By default, it sorts values as strings in alphabetical and ascending order.',
    whyUseIt: 'Essential for organizing data. You can sort users alphabetically by name, or sort products by price (highest to lowest).',
    syntax: 'array.sort(compareFunction?)',
    codeExample: 'let fruits = ["Banana", "Orange", "Apple", "Mango"];\nconsole.log(fruits.sort()); // ["Apple", "Banana", "Mango", "Orange"]\n\nlet numbers = [40, 100, 1, 5, 25, 10];\n// To sort numbers correctly, you MUST provide a compare function\nnumbers.sort((a, b) => a - b);\nconsole.log(numbers); // [1, 5, 10, 25, 40, 100]',
    expectedOutput: '["Apple", "Banana", "Mango", "Orange"]\n[1, 5, 10, 25, 40, 100]',
    explanation: [
      { code: 'fruits.sort()', desc: 'Alphabetical sorting works perfectly out of the box.' },
      { code: 'numbers.sort((a, b) => a - b)', desc: 'Without the function, 100 would come BEFORE 25 because "1" is less than "2". The function `(a, b) => a - b` tells it to sort numerically.' }
    ],
    realWorldExample: 'A user clicks the "Price: Low to High" button on an e-commerce store. You run `products.sort((a, b) => a.price - b.price);` to reorder the displayed items.',
    commonMistakes: [
      { error: 'Sorting numbers without a compare function', code: '[10, 2].sort()', suffix: 'It returns `[10, 2]` because it compares them as strings ("10" comes before "2").' },
      { error: 'Forgetting it mutates the array', code: 'let sorted = arr.sort();', suffix: '`arr` is also sorted now! To sort a copy, use `[...arr].sort()`.' }
    ],
    bestPractices: ['For numeric sorting, remember the golden rules: `(a, b) => a - b` for Ascending, and `(a, b) => b - a` for Descending.'],
    practiceExercise: {
      task: 'Declare `let ages = [33, 12, 20, 16, 5, 54]`. Sort them in DESCENDING order (highest first) and log the array.',
      expectedOutput: '[54, 33, 20, 16, 12, 5]',
      solution: 'let ages = [33, 12, 20, 16, 5, 54]; ages.sort((a, b) => b - a); console.log(ages);'
    },
    quiz: [
      { question: 'What is the default sorting behavior of `sort()`?', options: ['Numerical ascending', 'Numerical descending', 'Alphabetical ascending (as strings)', 'Random order'], answer: 'Alphabetical ascending (as strings)' },
      { question: 'Does `sort()` mutate the original array?', options: ['Yes', 'No', 'Only for numbers', 'Only if you provide a compare function'], answer: 'Yes' },
      { question: 'What happens if you run `[2, 10, 1].sort()`?', options: ['[1, 2, 10]', '[10, 2, 1]', '[1, 10, 2]', 'Error'], answer: '[1, 10, 2]' },
      { question: 'What compare function sorts numbers in descending order (highest to lowest)?', options: ['(a, b) => a - b', '(a, b) => b - a', '(a, b) => a > b', '(a, b) => a < b'], answer: '(a, b) => b - a' },
      { question: 'How do you sort a copy of an array without mutating the original?', options: ['arr.sort().copy()', 'arr.slice().sort()', 'sort(arr)', 'arr.clone().sort()'], answer: 'arr.slice().sort()' }
    ],
    interviewQuestions: [
      { q: 'How would you sort an array of objects by a specific string property (e.g., sort users by name)?', a: 'You use `localeCompare()`: `users.sort((a, b) => a.name.localeCompare(b.name))`.' }
    ],
    summary: ['Sorts an array in place.', 'Default sort is alphabetical.', 'Requires `(a, b) => a - b` for numeric sorting.'],
    references: commonReferences
  },
  'js_foreach': {
    isStructured: true,
    title: '86. forEach()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The `forEach()` method executes a provided function once for each array element. It is a cleaner, more readable alternative to a standard `for` loop.',
    whyUseIt: 'When you want to perform an action on every item in an array (like logging to the console, or inserting items into the DOM) and you don\'t need to return a new array.',
    syntax: 'array.forEach(function(currentValue, index, arr))',
    codeExample: 'let fruits = ["Apple", "Banana", "Cherry"];\n\nfruits.forEach((fruit, index) => {\n  console.log(index + ": " + fruit);\n});',
    expectedOutput: '0: Apple\n1: Banana\n2: Cherry',
    explanation: [
      { code: 'forEach((fruit, index) => { ... })', desc: 'The loop automatically passes the current item (`fruit`) and its position (`index`) into your arrow function on every iteration.' }
    ],
    realWorldExample: 'Looping through an array of comments to append each one to an HTML `<div>` on the page.',
    commonMistakes: [
      { error: 'Trying to return a new array', code: 'let newArr = arr.forEach(...)', suffix: '`forEach` ALWAYS returns `undefined`. If you want to transform an array into a new one, you must use `map()`, not `forEach()`.' },
      { error: 'Trying to `break` the loop', code: 'if (x) break;', suffix: 'You cannot use `break` or `continue` inside a `forEach` loop. If you need to stop early, use a standard `for` loop, `for...of`, or `some()`.' }
    ],
    bestPractices: ['Use `forEach` for side effects (like API calls, logging, modifying external variables) and `map` for data transformation.'],
    practiceExercise: {
      task: 'Declare an array `numbers = [1, 2, 3]`. Use `forEach` to add each number to a variable `let sum = 0`, then log the sum.',
      expectedOutput: '6',
      solution: 'let numbers = [1, 2, 3]; let sum = 0; numbers.forEach(n => sum += n); console.log(sum);'
    },
    quiz: [
      { question: 'What does `forEach()` return?', options: ['A new array', 'undefined', 'true', 'The modified original array'], answer: 'undefined' },
      { question: 'Can you use the `break` keyword inside a `forEach` loop?', options: ['Yes', 'No', 'Only in strict mode', 'Yes, but you must use `return break`'], answer: 'No' },
      { question: 'What arguments are passed to the `forEach` callback function?', options: ['(value)', '(index, value)', '(value, index, array)', '(array, value, index)'], answer: '(value, index, array)' },
      { question: 'Is `forEach` faster than a standard `for` loop?', options: ['Yes, much faster', 'No, standard `for` loops are generally faster', 'They run at the exact same speed', 'It depends if it has strings or numbers'], answer: 'No, standard `for` loops are generally faster' },
      { question: 'What is `forEach` best used for?', options: ['Transforming data into a new array', 'Filtering out bad data', 'Executing side effects (like logging or DOM updates)', 'Sorting data'], answer: 'Executing side effects (like logging or DOM updates)' }
    ],
    interviewQuestions: [
      { q: 'Since you cannot `break` a `forEach` loop, what array methods would you use if you needed to short-circuit (stop early)?', a: 'You can use `Array.some()` or `Array.every()`, which stop iterating as soon as they return a truthy or falsy value respectively, or simply use a `for...of` loop.' }
    ],
    summary: ['Loops through an array.', 'Returns `undefined`.', 'Cannot be broken/stopped early.'],
    references: commonReferences
  },
  'js_map': {
    isStructured: true,
    title: '87. map()',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `map()` method creates a **new array** populated with the results of calling a provided function on every element in the calling array.',
    whyUseIt: 'The absolute best way to transform data. You have an array of data, and you want a *new* array where every item has been modified or extracted.',
    syntax: 'array.map(function(currentValue, index, arr))',
    codeExample: 'let numbers = [1, 2, 3];\nlet doubled = numbers.map(num => num * 2);\n\nconsole.log(numbers); // [1, 2, 3]\nconsole.log(doubled); // [2, 4, 6]',
    expectedOutput: '[1, 2, 3]\n[2, 4, 6]',
    explanation: [
      { code: 'map(num => num * 2)', desc: 'Loops through `numbers`. For each item, multiplies it by 2, and pushes the result into the newly created `doubled` array.' }
    ],
    realWorldExample: 'You have an array of user objects: `[{id: 1, name: "Bob"}, {id: 2, name: "Sue"}]`. You just want an array of the names. `let names = users.map(u => u.name);`',
    commonMistakes: [
      { error: 'Forgetting to return', code: 'arr.map(x => { x * 2 })', suffix: 'If you use curly braces `{}` in an arrow function, you MUST use the `return` keyword, otherwise your new array will be filled with `undefined`! Correct: `arr.map(x => x * 2)` or `arr.map(x => { return x * 2; })`.' },
      { error: 'Using map for side effects', code: 'arr.map(x => console.log(x))', suffix: 'If you aren\'t creating a new array from the return values, use `forEach()`. Don\'t use `map()` just to loop.' }
    ],
    bestPractices: ['In React, `map()` is used constantly to transform an array of data into an array of JSX elements (like `<li>` tags).'],
    practiceExercise: {
      task: 'Declare `let prices = [10, 20, 30]`. Use `map()` to create a new array with a 10% tax added (multiply by 1.1) and log it.',
      expectedOutput: '[11, 22, 33]',
      solution: 'let prices = [10, 20, 30]; let withTax = prices.map(p => p * 1.1); console.log(withTax);'
    },
    quiz: [
      { question: 'What does `map()` return?', options: ['undefined', 'A new array', 'The modified original array', 'A single value'], answer: 'A new array' },
      { question: 'Does `map()` mutate the original array?', options: ['Yes', 'No', 'Only if you use it on objects', 'Yes, if you don\'t return anything'], answer: 'No' },
      { question: 'What happens if you forget the `return` statement inside the map callback?', options: ['The map loop breaks', 'It throws an error', 'The new array is filled with `undefined`', 'It returns the original array'], answer: 'The new array is filled with `undefined`' },
      { question: 'When should you choose `map()` over `forEach()`?', options: ['When you want to log data', 'When you want to transform data and get a new array back', 'When you want to mutate the original array', 'When you want the loop to run faster'], answer: 'When you want to transform data and get a new array back' },
      { question: 'If `arr = [1, 2, 3]`, what is `arr.map(x => "A")`?', options: ['["A", "A", "A"]', '["A1", "A2", "A3"]', '[1, 2, 3]', 'undefined'], answer: '["A", "A", "A"]' }
    ],
    interviewQuestions: [
      { q: 'Is it possible to chain `map()` with other array methods like `filter()`?', a: 'Yes! Because `map()` returns an array, you can chain it directly: `arr.filter(x => x > 10).map(x => x * 2)`.' }
    ],
    summary: ['Transforms an array into a new array.', 'Original array is unaffected.', 'Always `return` a value in the callback.'],
    references: commonReferences
  },
  'js_find': {
    isStructured: true,
    title: '89. find()',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `find()` method returns the **first element** in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.',
    whyUseIt: 'When you have an array of complex objects and you need to pull out exactly one object based on a unique property (like an ID).',
    syntax: 'array.find(function(currentValue, index, arr))',
    codeExample: 'let users = [\n  { id: 1, name: "Alice" },\n  { id: 2, name: "Bob" },\n  { id: 3, name: "Charlie" }\n];\n\nlet bob = users.find(u => u.name === "Bob");\nconsole.log(bob); // { id: 2, name: "Bob" }',
    expectedOutput: '{ id: 2, name: "Bob" }',
    explanation: [
      { code: 'find(u => u.name === "Bob")', desc: 'It loops through the array. When it reaches Bob, the condition is `true`. It instantly stops looping and returns the Bob object.' }
    ],
    realWorldExample: 'A user clicks on a product page for a specific item. You use `products.find(p => p.id === clickedId)` to get the data for that product.',
    commonMistakes: [
      { error: 'Expecting it to return multiple items', code: 'users.find(u => u.age > 18)', suffix: '`find` ONLY returns the VERY FIRST match it finds, and then stops. If you want ALL users over 18, you must use `filter()`.' }
    ],
    bestPractices: ['Always handle the case where `find()` might return `undefined`! E.g., `let user = users.find(...); if (user) { ... } else { console.log("Not found"); }`'],
    practiceExercise: {
      task: 'Declare `let numbers = [5, 12, 8, 130, 44]`. Use `find()` to get the first number that is greater than 10 and log it.',
      expectedOutput: '12',
      solution: 'let numbers = [5, 12, 8, 130, 44]; console.log(numbers.find(n => n > 10));'
    },
    quiz: [
      { question: 'What does `find()` return if a match is found?', options: ['An array of matches', 'The index of the match', 'The first matched element itself', 'true'], answer: 'The first matched element itself' },
      { question: 'What does `find()` return if NO match is found?', options: ['false', 'undefined', 'null', '-1'], answer: 'undefined' },
      { question: 'Does `find()` keep searching after it finds a match?', options: ['Yes, it searches the whole array', 'No, it stops immediately (short-circuits)', 'Only if you tell it to', 'Only if the array contains numbers'], answer: 'No, it stops immediately (short-circuits)' },
      { question: 'If you want ALL elements that match a condition, what should you use instead of `find()`?', options: ['map()', 'filter()', 'forEach()', 'includes()'], answer: 'filter()' },
      { question: 'If `arr = [10, 20, 30]`, what does `arr.find(x => x > 15)` return?', options: ['[20, 30]', '20', '1', 'true'], answer: '20' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `find()` and `filter()`?', a: '`find()` returns a single item (the first match) or undefined. `filter()` returns an array of ALL items that match the condition (or an empty array if none match).' }
    ],
    summary: ['Returns the FIRST matched element.', 'Stops looping once a match is found.', 'Returns `undefined` if not found.'],
    references: commonReferences
  },
  'js_findindex': {
    isStructured: true,
    title: '90. findIndex()',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: 'The `findIndex()` method returns the **index** of the first element in the array that satisfies the provided testing function. Otherwise, it returns `-1`.',
    whyUseIt: 'When you need to know *where* an object is in an array so you can remove it with `splice()` or update it directly. (If it was a simple string/number, you\'d just use `indexOf()`).',
    syntax: 'array.findIndex(function(currentValue, index, arr))',
    codeExample: 'let users = [\n  { id: 1, name: "Alice" },\n  { id: 2, name: "Bob" },\n  { id: 3, name: "Charlie" }\n];\n\nlet index = users.findIndex(u => u.name === "Bob");\nconsole.log(index); // 1',
    expectedOutput: '1',
    explanation: [
      { code: 'findIndex(u => u.name === "Bob")', desc: 'It finds Bob, but instead of returning the object `{id: 2, name: "Bob"}`, it returns `1`, which is the index where Bob is located.' }
    ],
    realWorldExample: 'A user wants to delete a task from a Todo list. You find its index: `let index = todos.findIndex(t => t.id === taskId);`, then delete it: `todos.splice(index, 1);`.',
    commonMistakes: [
      { error: 'Treating 0 as false', code: 'if (arr.findIndex(condition))', suffix: 'Just like `indexOf`, if the match is at index 0, this evaluates to false. Always check `if (index !== -1)`.' }
    ],
    bestPractices: ['If you just need to find the index of a simple primitive value (like a string "apple" or the number 5), use `indexOf("apple")` instead. Use `findIndex` for objects or complex conditions.'],
    practiceExercise: {
      task: 'Declare `let scores = [45, 60, 90, 100]`. Use `findIndex()` to find the index of the first score that is >= 90. Log it.',
      expectedOutput: '2',
      solution: 'let scores = [45, 60, 90, 100]; console.log(scores.findIndex(s => s >= 90));'
    },
    quiz: [
      { question: 'What does `findIndex()` return if a match is found?', options: ['The element itself', 'The index of the first match', 'An array of indices', 'true'], answer: 'The index of the first match' },
      { question: 'What does `findIndex()` return if NO match is found?', options: ['-1', 'undefined', 'null', 'false'], answer: '-1' },
      { question: 'When should you use `findIndex()` instead of `indexOf()`?', options: ['When searching for strings', 'When searching based on a condition or searching inside objects', 'When the array is very large', 'You should always use indexOf'], answer: 'When searching based on a condition or searching inside objects' },
      { question: 'How do you check if `findIndex` was successful?', options: ['if (index === true)', 'if (index !== -1)', 'if (index > 0)', 'if (index)'], answer: 'if (index !== -1)' },
      { question: 'Does `findIndex` mutate the array?', options: ['Yes', 'No', 'Sometimes', 'Only for objects'], answer: 'No' }
    ],
    interviewQuestions: [
      { q: 'Can you use `findIndex()` to find an item from the end of the array instead of the beginning?', a: 'As of ES2023, you can use `findLastIndex()` for that. `findIndex()` always searches from the beginning (index 0).' }
    ],
    summary: ['Returns the index of the first match.', 'Returns -1 if not found.', 'Great for locating objects in an array to update/delete them.'],
    references: commonReferences
  }
};
