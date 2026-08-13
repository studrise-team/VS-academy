const commonReferences = [
  { label: 'MDN Web Docs - Math', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math' },
  { label: 'MDN Web Docs - Array', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' }
];

export const javascriptContentBatchMissing2 = {
  'js_string_practice_problems': {
    isStructured: true,
    title: '55. String Practice Problems',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'This section tests your understanding of the string methods covered so far (length, indexing, toUpperCase, toLowerCase, trim, includes, indexOf, slice, split).',
    whyUseIt: 'Applying multiple methods together is how real programming is done. These practice problems simulate real-world scenarios.',
    syntax: '// No new syntax. Combine what you know!',
    codeExample: 'let email = "   UsEr@ExaMple.com   ";\nlet formattedEmail = email.trim().toLowerCase();\nconsole.log(formattedEmail); // "user@example.com"',
    expectedOutput: '"user@example.com"',
    explanation: [
      { code: 'email.trim().toLowerCase()', desc: 'Method chaining: First removes spaces with trim(), then makes the result lowercase.' }
    ],
    realWorldExample: 'Formatting a user\'s name for a database so the first letter is capitalized and the rest is lowercase, regardless of how they typed it.',
    commonMistakes: [
      { error: 'Forgetting parentheses on methods', code: 'str.toLowerCase.trim', suffix: 'Methods are functions and need `()` to execute. Properties like `length` do not.' }
    ],
    bestPractices: ['Chain methods when possible to keep code clean and concise (e.g., `str.trim().split(" ")`).'],
    practiceExercise: {
      task: 'Declare `let name = " john doe "`. Use string methods to output "John doe" (no spaces on ends, first letter capitalized, rest lowercase).',
      expectedOutput: '"John doe"',
      solution: 'let name = " john doe "; let cleaned = name.trim().toLowerCase(); let result = cleaned[0].toUpperCase() + cleaned.slice(1); console.log(result);'
    },
    quiz: [
      { question: 'What does `str.trim().toLowerCase()` do?', options: ['Removes spaces and makes the string lowercase', 'Causes an error', 'Only makes it lowercase', 'Reverses the string'], answer: 'Removes spaces and makes the string lowercase' },
      { question: 'Which of the following is NOT a method (does not need parentheses)?', options: ['length', 'toUpperCase', 'trim', 'slice'], answer: 'length' },
      { question: 'How do you chain methods?', options: ['Add them with a plus sign', 'Use a dot between them (e.g. str.trim().toLowerCase())', 'Pass them as arguments', 'You cannot chain methods'], answer: 'Use a dot between them (e.g. str.trim().toLowerCase())' },
      { question: 'If `let x = "HELLO"`, what is `x[1].toLowerCase()`?', options: ['h', 'E', 'e', 'Error'], answer: 'e' },
      { question: 'How can you convert a string to an array of characters?', options: ['str.toArray()', 'str.split("")', 'Array(str)', 'str.slice()'], answer: 'str.split("")' }
    ],
    interviewQuestions: [
      { q: 'Can you explain method chaining and why it works?', a: 'Method chaining works because methods like `trim()` return a new String object. You can then immediately call another string method (like `toLowerCase()`) on that returned string in the same line.' }
    ],
    summary: ['Combine string methods.', 'Chain methods with dots.', 'Properties (length) don\'t use `()`, methods do.'],
    references: commonReferences
  },
  'js_math_max': {
    isStructured: true,
    title: '65. Math.max()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `Math.max()` method returns the largest of zero or more numbers provided as input parameters.',
    whyUseIt: 'Used whenever you need to find the highest value among a set of numbers, like finding the highest score in a game or the maximum price in a list.',
    syntax: 'Math.max(value1, value2, ...)',
    codeExample: 'console.log(Math.max(10, 20, 5));\nconsole.log(Math.max(-10, -20, -5));',
    expectedOutput: '20\n-5',
    explanation: [
      { code: 'Math.max(10, 20, 5)', desc: 'Compares the three numbers and returns the largest (20).' },
      { code: 'Math.max(-10, -20, -5)', desc: '-5 is mathematically larger than -10 and -20.' }
    ],
    realWorldExample: 'A shopping cart needs to apply a discount to the most expensive item. `Math.max(price1, price2, price3)` finds that item.',
    commonMistakes: [
      { error: 'Passing an array directly', code: 'Math.max([10, 20, 30])', suffix: '`Math.max` expects individual arguments, not an array. It will return `NaN`. To pass an array, you must use the spread operator: `Math.max(...[10, 20, 30])`.' }
    ],
    bestPractices: ['Use the spread operator (`...`) when you need to find the maximum value in an array: `Math.max(...myArray)`.'],
    practiceExercise: {
      task: 'Find the largest number among 5, 8, 2, 100, and 45 using Math.max and log it.',
      expectedOutput: '100',
      solution: 'console.log(Math.max(5, 8, 2, 100, 45));'
    },
    quiz: [
      { question: 'What does `Math.max()` do?', options: ['Adds numbers', 'Returns the largest number', 'Returns the smallest number', 'Rounds a number up'], answer: 'Returns the largest number' },
      { question: 'What does `Math.max()` return if given no arguments?', options: ['0', 'undefined', '-Infinity', 'NaN'], answer: '-Infinity' },
      { question: 'What will `Math.max([1, 2, 3])` return?', options: ['3', '1', 'NaN', 'Error'], answer: 'NaN' },
      { question: 'How do you fix `Math.max([1, 2, 3])`?', options: ['Math.max.apply([1,2,3])', 'Math.max(...[1, 2, 3])', 'Math.max(Array[1,2,3])', 'You cannot'], answer: 'Math.max(...[1, 2, 3])' },
      { question: 'What is `Math.max(-1, 0, 1)`?', options: ['-1', '0', '1', 'undefined'], answer: '1' }
    ],
    interviewQuestions: [
      { q: 'Why does Math.max() with no arguments return -Infinity?', a: 'Because -Infinity is the initial comparison value. Any number you pass in will be larger than -Infinity, allowing the algorithm to correctly identify the maximum value.' }
    ],
    summary: ['Finds the largest number.', 'Takes comma-separated arguments.', 'Use spread operator (`...`) for arrays.'],
    references: commonReferences
  },
  'js_math_min': {
    isStructured: true,
    title: '66. Math.min()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `Math.min()` method returns the lowest-valued number passed into it.',
    whyUseIt: 'Used to find the smallest value, such as determining the cheapest product, the fastest race time, or preventing a value from dropping below a certain threshold.',
    syntax: 'Math.min(value1, value2, ...)',
    codeExample: 'console.log(Math.min(10, 20, 5));\nconsole.log(Math.min(-10, -20, -5));',
    expectedOutput: '5\n-20',
    explanation: [
      { code: 'Math.min(10, 20, 5)', desc: 'Compares the three numbers and returns the smallest (5).' },
      { code: 'Math.min(-10, -20, -5)', desc: '-20 is mathematically smaller than -10 and -5.' }
    ],
    realWorldExample: 'Preventing a health bar in a game from dropping below 0: `health = Math.max(0, health - damage);` (Wait, that uses max!). For min, capping a value so it doesn\'t exceed a limit: `speed = Math.min(100, currentSpeed + boost);`.',
    commonMistakes: [
      { error: 'Passing non-numbers', code: 'Math.min(10, "hello")', suffix: 'If any of the arguments cannot be converted to a number, `Math.min()` will return `NaN`.' }
    ],
    bestPractices: ['Combine `Math.min` and `Math.max` to clamp a number between a minimum and maximum range (e.g., `Math.min(Math.max(value, 0), 100)` clamps between 0 and 100).'],
    practiceExercise: {
      task: 'Find the lowest number among 50, 23, 11, 89, and 12 using Math.min and log it.',
      expectedOutput: '11',
      solution: 'console.log(Math.min(50, 23, 11, 89, 12));'
    },
    quiz: [
      { question: 'What does `Math.min()` do?', options: ['Returns the smallest number', 'Returns the largest number', 'Subtracts numbers', 'Rounds a number down'], answer: 'Returns the smallest number' },
      { question: 'What does `Math.min()` return if given no arguments?', options: ['0', 'Infinity', '-Infinity', 'NaN'], answer: 'Infinity' },
      { question: 'What is `Math.min(5, 10, "15")`?', options: ['5', 'NaN', '15', 'Error'], answer: '5' },
      { question: 'What is `Math.min(5, 10, "apple")`?', options: ['5', 'NaN', 'apple', 'Error'], answer: 'NaN' },
      { question: 'How do you find the minimum of an array `let arr = [4, 2, 8]`?', options: ['Math.min(arr)', 'Math.min(...arr)', 'arr.min()', 'min(arr)'], answer: 'Math.min(...arr)' }
    ],
    interviewQuestions: [
      { q: 'How would you clamp a variable `x` so it never goes below 0 and never goes above 100?', a: '`let clamped = Math.min(Math.max(x, 0), 100);`' }
    ],
    summary: ['Finds the smallest number.', 'Takes comma-separated arguments.', 'Use spread operator (`...`) for arrays.'],
    references: commonReferences
  },
  'js_math_object_practice': {
    isStructured: true,
    title: '68. Math Object Practice',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'This section combines everything you\'ve learned about the Math object (`Math.round`, `floor`, `ceil`, `random`, `max`, `min`, `pow`, etc.) into practical exercises.',
    whyUseIt: 'Real world algorithms (like random chance in games, calculating geometric distances, or formatting currency) require combining multiple Math methods.',
    syntax: '// Combining Math methods',
    codeExample: '// Generate a random integer between 1 and 10\nlet randomFloat = Math.random() * 10;\nlet randomInt = Math.floor(randomFloat) + 1;\nconsole.log(randomInt);',
    expectedOutput: '7 // (Or any number from 1 to 10)',
    explanation: [
      { code: 'Math.random() * 10', desc: 'Generates a random decimal between 0 (inclusive) and 9.999 (exclusive).' },
      { code: 'Math.floor()', desc: 'Rounds the decimal down to a whole number (0 to 9).' },
      { code: '+ 1', desc: 'Shifts the range from 0-9 up to 1-10.' }
    ],
    realWorldExample: 'A dice rolling function in a board game app uses `Math.floor(Math.random() * 6) + 1`.',
    commonMistakes: [
      { error: 'Using round() instead of floor() for random numbers', code: 'Math.round(Math.random() * 10)', suffix: 'Using `round` creates an uneven distribution. 0 and 10 will have half the chance of being rolled compared to 1-9. Always use `floor`.' }
    ],
    bestPractices: ['Create reusable helper functions for math operations, such as `function getRandomInt(min, max) { ... }`.'],
    practiceExercise: {
      task: 'Create a random number between 0 and 100. Then find the maximum between that random number and 50. Log the result.',
      expectedOutput: 'Either 50, or a random number > 50',
      solution: 'let rand = Math.random() * 100; let result = Math.max(rand, 50); console.log(result);'
    },
    quiz: [
      { question: 'What is the correct formula for a random integer between 1 and 10?', options: ['Math.ceil(Math.random() * 10)', 'Math.floor(Math.random() * 10) + 1', 'Math.round(Math.random() * 10)', 'Math.random(1, 10)'], answer: 'Math.floor(Math.random() * 10) + 1' },
      { question: 'Why is `Math.floor` preferred over `Math.round` for random ranges?', options: ['It is faster', 'It provides an even statistical distribution', 'It uses less memory', 'Math.round throws errors'], answer: 'It provides an even statistical distribution' },
      { question: 'What does `Math.pow(2, 3)` do?', options: ['2 times 3', '2 to the power of 3 (2*2*2)', '3 to the power of 2', 'Square root of 2'], answer: '2 to the power of 3 (2*2*2)' },
      { question: 'Which method rounds to the nearest whole number?', options: ['Math.floor()', 'Math.ceil()', 'Math.round()', 'Math.trunc()'], answer: 'Math.round()' },
      { question: 'What does `Math.random()` return?', options: ['A random integer', 'A random decimal between 0 and 1', 'A string', 'Infinity'], answer: 'A random decimal between 0 and 1' }
    ],
    interviewQuestions: [
      { q: 'Write a function to generate a random integer between a specific `min` and `max` (inclusive).', a: '`function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }`' }
    ],
    summary: ['Combine methods for complex logic.', '`Math.random()` + `Math.floor()` is standard for random integers.', 'Clamp values with `min` and `max`.'],
    references: commonReferences
  },
  'js_array_length': {
    isStructured: true,
    title: '73. Array Length',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `length` property of an array returns the number of elements in that array. It is always one greater than the highest index in the array.',
    whyUseIt: 'Essential for `for` loops to know exactly how many items to iterate over, or checking if an array is empty before trying to use it.',
    syntax: 'array.length',
    codeExample: 'let colors = ["Red", "Green", "Blue"];\nconsole.log(colors.length);\n\ncolors.push("Yellow");\nconsole.log(colors.length);',
    expectedOutput: '3\n4',
    explanation: [
      { code: 'colors.length', desc: 'Initially returns 3 because there are 3 items. After pushing a 4th item, it dynamically updates to 4.' }
    ],
    realWorldExample: 'A shopping cart icon with a badge that displays `cart.length` to show the user how many items they have added.',
    commonMistakes: [
      { error: 'Using parentheses', code: 'arr.length()', suffix: 'Just like strings, array `length` is a property, not a method. You do not use parentheses.' },
      { error: 'Confusing length with index', code: 'arr[arr.length]', suffix: 'Since indices start at 0, `arr.length` is always 1 out of bounds! The last item is always `arr[arr.length - 1]`.' }
    ],
    bestPractices: ['You can actually TRUNCATE an array by manually setting its length property: `arr.length = 2` will delete all items after the second one!'],
    practiceExercise: {
      task: 'Declare an array `let scores = [90, 85, 100];`. Log the length of the array.',
      expectedOutput: '3',
      solution: 'let scores = [90, 85, 100]; console.log(scores.length);'
    },
    quiz: [
      { question: 'What does `array.length` return?', options: ['The size in memory', 'The number of elements in the array', 'The first element', 'The last element'], answer: 'The number of elements in the array' },
      { question: 'Is `.length` a property or a method?', options: ['Property', 'Method', 'Function', 'String'], answer: 'Property' },
      { question: 'If `arr = ["A", "B"]`, what is `arr.length`?', options: ['0', '1', '2', '3'], answer: '2' },
      { question: 'What happens if you run `arr.length = 0`?', options: ['It crashes', 'It empties the entire array', 'It throws an error', 'Nothing'], answer: 'It empties the entire array' },
      { question: 'How do you access the last element of an array?', options: ['arr[arr.length]', 'arr.last()', 'arr[arr.length - 1]', 'arr[-1]'], answer: 'arr[arr.length - 1]' }
    ],
    interviewQuestions: [
      { q: 'What is the fastest way to completely empty an existing array in JavaScript?', a: 'Setting its length property to 0: `arr.length = 0;`. This clears the array while keeping the same reference in memory.' }
    ],
    summary: ['Returns element count.', 'Property, not a method.', 'Can be manually set to truncate arrays.'],
    references: commonReferences
  }
};
