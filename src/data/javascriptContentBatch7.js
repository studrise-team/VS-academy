const commonReferences = [
  { label: 'W3Schools JavaScript Arrays', url: 'https://www.w3schools.com/js/js_arrays.asp' },
  { label: 'MDN Web Docs - Array', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' }
];

export const javascriptContentBatch7 = {
  'js_what_is_an_array': {
    isStructured: true,
    title: '69. What is an Array?',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'An array is a special variable that can hold more than one value at a time. It is a list-like object whose prototype has methods to perform traversal and mutation operations.',
    whyUseIt: 'If you have a list of items (like a list of car names), storing them in single variables could look like this: `car1 = "Saab"; car2 = "Volvo"; car3 = "BMW";`. What if you had 300 cars? The solution is an array.',
    syntax: 'let array_name = [item1, item2, ...];',
    codeExample: 'let cars = ["Saab", "Volvo", "BMW"];\nlet empty = [];\n\nconsole.log(cars);',
    expectedOutput: '["Saab", "Volvo", "BMW"]',
    explanation: [
      { code: '["Saab", "Volvo", "BMW"]', desc: 'Creates an array with 3 string elements.' },
      { code: '[]', desc: 'An empty array, ready to have items added to it later.' }
    ],
    realWorldExample: 'A database query returning a list of all users who signed up today. The data is delivered to your frontend JavaScript as an array of user objects.',
    commonMistakes: [
      { error: 'Forgetting the brackets', code: 'let colors = "red", "blue";', suffix: 'Without the square brackets `[]`, you are just declaring variables improperly, which causes a syntax error.' }
    ],
    bestPractices: ['Always declare arrays with `const`. The array itself can be modified (items added/removed) even if declared with `const`. It prevents accidentally reassigning the entire variable to a new data type.'],
    practiceExercise: {
      task: 'Declare an array named `fruits` containing three string values: "Apple", "Banana", "Cherry". Log the array.',
      expectedOutput: '["Apple", "Banana", "Cherry"]',
      solution: 'let fruits = ["Apple", "Banana", "Cherry"]; console.log(fruits);'
    },
    quiz: [
      { question: 'What brackets are used to define an array?', options: ['{} (Curly)', '() (Parentheses)', '[] (Square)', '<> (Angle)'], answer: '[] (Square)' },
      { question: 'Why are arrays useful?', options: ['They make code run faster', 'They allow you to store multiple values in a single variable', 'They encrypt data', 'They are required for CSS'], answer: 'They allow you to store multiple values in a single variable' },
      { question: 'Can an array be empty?', options: ['Yes, `[]`', 'No, it must have at least one item', 'Only in strict mode', 'Only if declared with var'], answer: 'Yes, `[]`' },
      { question: 'Can a JavaScript array hold mixed data types (e.g., Strings and Numbers together)?', options: ['No, all items must be the same type', 'Yes, JavaScript arrays can hold mixed types', 'Only if you use an object', 'Only in Node.js'], answer: 'Yes, JavaScript arrays can hold mixed types' },
      { question: 'What keyword is recommended for declaring arrays?', options: ['var', 'let', 'const', 'array'], answer: 'const' }
    ],
    interviewQuestions: [
      { q: 'Is a JavaScript array actually an object?', a: 'Yes. In JavaScript, arrays are a specialized type of object. If you run `typeof [1, 2, 3]`, it returns `"object"`. To truly check if a variable is an array, you must use `Array.isArray(myVar)`.' }
    ],
    summary: ['Stores lists of data.', 'Uses square brackets `[]`.', 'Can hold mixed data types.'],
    references: commonReferences
  },

  'js_accessing_array_elements': {
    isStructured: true,
    title: '71. Accessing Array Elements',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'You access an array element by referring to the index number. Array indexes start with 0. [0] is the first element, [1] is the second element, etc.',
    whyUseIt: 'You need to read specific data out of the list to display it to the user or perform logic on it.',
    syntax: 'arrayName[indexNumber]',
    codeExample: 'const cars = ["Saab", "Volvo", "BMW"];\n\nlet firstCar = cars[0];\nlet lastCar = cars[cars.length - 1];\n\nconsole.log(firstCar);\nconsole.log(lastCar);',
    expectedOutput: '"Saab"\n"BMW"',
    explanation: [
      { code: 'cars[0]', desc: 'Gets the very first item in the array.' },
      { code: 'cars[cars.length - 1]', desc: 'Gets the last item. Length is 3. 3 - 1 = 2. cars[2] is "BMW".' }
    ],
    realWorldExample: 'Getting the top score from a sorted array of leaderboard scores: `let topScore = leaderboard[0];`',
    commonMistakes: [
      { error: 'Assuming it starts at 1', code: 'cars[1]', suffix: 'This gets the SECOND item ("Volvo"), not the first. Indexes are zero-based.' }
    ],
    bestPractices: ['In modern JS (ES2022+), use the `.at()` method for cleaner syntax when getting the last item: `cars.at(-1)`.'],
    practiceExercise: {
      task: 'Declare `const colors = ["Red", "Green", "Blue", "Yellow"];`. Log the 3rd color ("Blue").',
      expectedOutput: '"Blue"',
      solution: 'const colors = ["Red", "Green", "Blue", "Yellow"]; console.log(colors[2]);'
    },
    quiz: [
      { question: 'What is the index of the first item in an array?', options: ['1', '0', '-1', 'null'], answer: '0' },
      { question: 'If `arr = [10, 20, 30]`, what does `arr[1]` return?', options: ['10', '20', '30', 'undefined'], answer: '20' },
      { question: 'How do you get the last item of an array dynamically?', options: ['arr.last()', 'arr[arr.length]', 'arr[arr.length - 1]', 'arr.end()'], answer: 'arr[arr.length - 1]' },
      { question: 'What happens if you try to access an index that doesn\'t exist (e.g., `arr[100]`)?', options: ['It returns undefined', 'It crashes the program', 'It throws an error', 'It returns 0'], answer: 'It returns undefined' },
      { question: 'Which new array method allows negative indexing like `arr.at(-1)`?', options: ['get()', 'fetch()', 'index()', 'at()'], answer: 'at()' }
    ],
    interviewQuestions: [
      { q: 'Why do arrays start at index 0 in most programming languages?', a: 'It originated from the C language, where the array name points to a memory address, and the index represents an "offset" from that starting address. An offset of 0 means the exact starting address.' }
    ],
    summary: ['Zero-indexed (starts at 0).', 'Use bracket notation `[]`.', 'Last item: `length - 1`.'],
    references: commonReferences
  },

  'js_push_pop': {
    isStructured: true,
    title: '74-75. push() & pop()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`push()` adds one or more elements to the END of an array. `pop()` removes the LAST element from an array. Both methods mutate (change) the original array.',
    whyUseIt: 'Used to manage lists dynamically, like adding a new item to a shopping cart (`push`), or removing the most recent notification (`pop`).',
    syntax: 'array.push(item)\narray.pop()',
    codeExample: 'const cart = ["Apple"];\n\n// Add to end\ncart.push("Banana");\ncart.push("Orange");\nconsole.log(cart);\n\n// Remove from end\nlet removedItem = cart.pop();\nconsole.log("Removed: " + removedItem);\nconsole.log(cart);',
    expectedOutput: '["Apple", "Banana", "Orange"]\n"Removed: Orange"\n["Apple", "Banana"]',
    explanation: [
      { code: 'cart.push("Banana")', desc: 'Adds "Banana" to the very end of the array.' },
      { code: 'cart.pop()', desc: 'Removes the last item ("Orange") and returns it, allowing you to save it in a variable.' }
    ],
    realWorldExample: 'A browser history stack. When you visit a new page, the URL is `push()`ed to the array. When you click the Back button, the URL is `pop()`ped off the array.',
    commonMistakes: [
      { error: 'Providing arguments to pop', code: 'cart.pop("Banana")', suffix: '`pop()` takes NO arguments. It ALWAYS removes the very last item, regardless of what you type inside the parentheses.' }
    ],
    bestPractices: ['`push` and `pop` are very fast operations (O(1) time complexity) because they don\'t require re-indexing the rest of the array.'],
    practiceExercise: {
      task: 'Create `const tasks = ["Eat"];`. Push "Sleep" and "Code". Then pop once. Log the final array.',
      expectedOutput: '["Eat", "Sleep"]',
      solution: 'const tasks = ["Eat"]; tasks.push("Sleep"); tasks.push("Code"); tasks.pop(); console.log(tasks);'
    },
    quiz: [
      { question: 'Where does `push()` add the new element?', options: ['At the beginning', 'In the middle', 'At the end', 'In a random spot'], answer: 'At the end' },
      { question: 'What does `pop()` remove?', options: ['The first element', 'The last element', 'A specific element by name', 'All elements'], answer: 'The last element' },
      { question: 'Does `push()` modify the original array?', options: ['Yes', 'No, it returns a new array', 'Only in strict mode', 'Only if declared with var'], answer: 'Yes' },
      { question: 'Can `push()` add multiple items at once?', options: ['No', 'Yes (e.g., `arr.push("A", "B")`)', 'Only numbers', 'Only if you use an array inside it'], answer: 'Yes (e.g., `arr.push("A", "B")`)' },
      { question: 'What does the `pop()` method return?', options: ['The new length of the array', 'The array itself', 'The element that was removed', 'undefined'], answer: 'The element that was removed' }
    ],
    interviewQuestions: [
      { q: 'What data structure behaves exactly like `push` and `pop`?', a: 'A Stack (LIFO - Last In, First Out). The last item pushed onto the stack is the first one popped off.' }
    ],
    summary: ['`push()` adds to the end.', '`pop()` removes from the end.', 'Both change the original array.'],
    references: commonReferences
  },

  'js_shift_unshift': {
    isStructured: true,
    title: '76-77. shift() & unshift()',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`unshift()` adds new elements to the BEGINNING of an array. `shift()` removes the FIRST element of an array. They are the opposites of push/pop.',
    whyUseIt: 'When you need to add an item to the top of a list, like placing a brand new high-score at the #1 spot, or processing tasks in a queue.',
    syntax: 'array.unshift(item)\narray.shift()',
    codeExample: 'const queue = ["Bob", "Charlie"];\n\n// Add to front\nqueue.unshift("Alice");\nconsole.log(queue);\n\n// Remove from front\nlet nextPerson = queue.shift();\nconsole.log("Serving: " + nextPerson);\nconsole.log(queue);',
    expectedOutput: '["Alice", "Bob", "Charlie"]\n"Serving: Alice"\n["Bob", "Charlie"]',
    explanation: [
      { code: 'queue.unshift("Alice")', desc: 'Forces "Alice" into index 0. Bob is pushed to index 1, Charlie to index 2.' },
      { code: 'queue.shift()', desc: 'Removes the item at index 0 ("Alice") and shifts everything else down one slot.' }
    ],
    realWorldExample: 'A customer support ticketing system. New VIP tickets are `unshift()`ed to the front of the line so they are processed next. Regular tickets are `shift()`ed off the front as agents resolve them.',
    commonMistakes: [
      { error: 'Using shift/unshift unnecessarily on large arrays', code: '', suffix: 'These operations are slow! If you `unshift` an item into an array of 1,000,000 items, the computer must re-assign the index numbers for all 1,000,000 existing items.' }
    ],
    bestPractices: ['Prefer `push/pop` over `shift/unshift` whenever possible for better performance.'],
    practiceExercise: {
      task: 'Create `const days = ["Tuesday", "Wednesday"];`. Use `unshift()` to add "Monday". Then `shift()` it back off. Log the array.',
      expectedOutput: '["Tuesday", "Wednesday"]',
      solution: 'const days = ["Tuesday", "Wednesday"]; days.unshift("Monday"); days.shift(); console.log(days);'
    },
    quiz: [
      { question: 'Where does `unshift()` add the new element?', options: ['At the end', 'In the middle', 'At the beginning (index 0)', 'It replaces the whole array'], answer: 'At the beginning (index 0)' },
      { question: 'What does `shift()` remove?', options: ['The last element', 'The first element (index 0)', 'All elements', 'Numbers only'], answer: 'The first element (index 0)' },
      { question: 'Why are `shift` and `unshift` slower than `push` and `pop`?', options: ['They have more letters in their name', 'They require the entire array to be re-indexed', 'They use more memory', 'They are not slower'], answer: 'They require the entire array to be re-indexed' },
      { question: 'What does `shift()` return?', options: ['The new length of the array', 'The array itself', 'The removed element', 'undefined'], answer: 'The removed element' },
      { question: 'Does `unshift()` change the original array?', options: ['Yes', 'No, returns a new array', 'Only in strict mode', 'No, it only adds to a copy'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'What data structure uses `push` to add items, but `shift` to remove them?', a: 'A Queue (FIFO - First In, First Out). Like a line at a grocery store, the first person in is the first person served.' }
    ],
    summary: ['`unshift()` adds to front.', '`shift()` removes from front.', 'Slower than push/pop.'],
    references: commonReferences
  },

  'js_slice_vs_splice': {
    isStructured: true,
    title: '78-79. slice() vs splice()',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: '`slice()` extracts a piece of an array and returns a NEW array (does not modify the original). `splice()` changes the contents of the ORIGINAL array by removing, replacing, or adding elements.',
    whyUseIt: 'Use `slice` for safely copying data. Use `splice` for destructively modifying an array in the middle (like deleting a specific user from a list).',
    syntax: 'array.slice(start, end)\narray.splice(start, deleteCount, item1, item2, ...)',
    codeExample: 'const arr1 = [10, 20, 30, 40, 50];\n// SLICE (Safe Copy)\nconst sliced = arr1.slice(1, 4);\nconsole.log(sliced); // [20, 30, 40]\nconsole.log(arr1);   // Original untouched!\n\n// SPLICE (Destructive)\nconst arr2 = ["A", "B", "C", "D"];\narr2.splice(1, 2, "X", "Y"); // Start at index 1, delete 2 items, insert X and Y\nconsole.log(arr2); // ["A", "X", "Y", "D"]',
    expectedOutput: '[20, 30, 40]\n[10, 20, 30, 40, 50]\n["A", "X", "Y", "D"]',
    explanation: [
      { code: 'slice(1, 4)', desc: 'Copies from index 1 up to (but NOT including) index 4.' },
      { code: 'splice(1, 2, "X", "Y")', desc: 'Goes to index 1 ("B"). Deletes 2 items ("B", "C"). Inserts "X" and "Y" in their place. Modifies arr2 directly.' }
    ],
    realWorldExample: 'A user clicks the "X" button to remove an item from their shopping cart. `cart.splice(itemIndex, 1)` deletes that specific item from the array.',
    commonMistakes: [
      { error: 'Confusing the two', code: '', suffix: 'This is the most common array mistake in JavaScript. Remember: `slice` = Safe copy. `splice` = Destructive.' }
    ],
    bestPractices: ['Use `slice()` or the spread operator `[...arr]` to create copies of arrays before manipulating them in modern React/Redux applications where immutability is required.'],
    practiceExercise: {
      task: 'Create `let letters = ["a", "b", "c", "d"];`. Use `splice()` to remove "b" and "c", and replace them with "z". Log the array.',
      expectedOutput: '["a", "z", "d"]',
      solution: 'let letters = ["a", "b", "c", "d"]; letters.splice(1, 2, "z"); console.log(letters);'
    },
    quiz: [
      { question: 'Which method modifies the ORIGINAL array?', options: ['slice()', 'splice()', 'Both', 'Neither'], answer: 'splice()' },
      { question: 'Which method is used to extract a portion of an array without altering the original?', options: ['splice()', 'slice()', 'split()', 'cut()'], answer: 'slice()' },
      { question: 'What does the second argument in `splice(start, X)` represent?', options: ['The end index', 'The number of items to delete', 'The item to insert', 'The speed of the operation'], answer: 'The number of items to delete' },
      { question: 'Can `splice()` be used to insert items WITHOUT deleting any?', options: ['No', 'Yes, by setting the deleteCount to 0', 'Only at the end of the array', 'Only in strict mode'], answer: 'Yes, by setting the deleteCount to 0' },
      { question: 'What happens if you omit the end index in `slice(2)`?', options: ['It crashes', 'It extracts from index 2 to the end of the array', 'It extracts 1 item', 'It returns undefined'], answer: 'It extracts from index 2 to the end of the array' }
    ],
    interviewQuestions: [
      { q: 'What does `arr.splice(0)` do?', a: 'It starts at index 0 and deletes everything to the end of the array, effectively emptying the array. It also returns all the deleted items.' }
    ],
    summary: ['`slice` copies data safely.', '`splice` mutates data directly.', '`splice` can delete and insert.'],
    references: commonReferences
  },

  'js_map_filter': {
    isStructured: true,
    title: '87-88. map() & filter()',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Higher-order array methods. `map()` creates a NEW array by running a function on every element. `filter()` creates a NEW array with elements that pass a test condition.',
    whyUseIt: 'These are the backbone of modern JavaScript (and frameworks like React). They allow you to transform and search data without using clunky `for` loops.',
    syntax: 'array.map((element) => { ... })\narray.filter((element) => { ... })',
    codeExample: 'const numbers = [1, 2, 3, 4, 5];\n\n// MAP: Multiply all by 10\nconst tens = numbers.map(num => num * 10);\nconsole.log(tens);\n\n// FILTER: Keep only numbers greater than 2\nconst large = numbers.filter(num => num > 2);\nconsole.log(large);',
    expectedOutput: '[10, 20, 30, 40, 50]\n[3, 4, 5]',
    explanation: [
      { code: 'num => num * 10', desc: 'Map runs this arrow function 5 times. It takes 1, returns 10. Takes 2, returns 20. Builds a new array.' },
      { code: 'num => num > 2', desc: 'Filter runs a true/false test. If true (3 > 2), the item is kept. If false (1 > 2), it is discarded.' }
    ],
    realWorldExample: 'You have an array of users. You use `map()` to extract just their email addresses to send a newsletter. You use `filter()` to only select users who are marked as "active".',
    commonMistakes: [
      { error: 'Forgetting to return a value', code: 'arr.map(num => { num * 10; })', suffix: 'If you use curly braces `{}` in an arrow function, you MUST use the `return` keyword. Otherwise, it returns an array of `undefined`.' }
    ],
    bestPractices: ['Chain them together! `users.filter(u => u.active).map(u => u.email)` gets the emails of all active users in one clean line.'],
    practiceExercise: {
      task: 'Given `const prices = [5, 10, 15];`. Use `map()` to create a new array with 1 added to each price. Log it.',
      expectedOutput: '[6, 11, 16]',
      solution: 'const prices = [5, 10, 15]; const newPrices = prices.map(p => p + 1); console.log(newPrices);'
    },
    quiz: [
      { question: 'What does `map()` return?', options: ['A string', 'The original array', 'A new array with transformed elements', 'A boolean'], answer: 'A new array with transformed elements' },
      { question: 'What does `filter()` return?', options: ['A new array containing only the elements that passed the test (returned true)', 'The first element that passes the test', 'A boolean', 'undefined'], answer: 'A new array containing only the elements that passed the test (returned true)' },
      { question: 'Do `map()` and `filter()` modify the original array?', options: ['Yes', 'No, they are non-destructive and return new arrays', 'Only filter does', 'Only map does'], answer: 'No, they are non-destructive and return new arrays' },
      { question: 'What happens if no elements pass the `filter()` test?', options: ['It returns false', 'It throws an error', 'It returns an empty array `[]`', 'It returns undefined'], answer: 'It returns an empty array `[]`' },
      { question: 'If you map an array of 5 items, how long will the new array be?', options: ['Depends on the function', '5', '0', '1'], answer: '5' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `forEach()` and `map()`?', a: '`forEach()` executes a function for each element but returns `undefined`. It is used for side-effects (like logging or manipulating the DOM). `map()` executes a function and returns a brand NEW array containing the results of that function.' }
    ],
    summary: ['`map` transforms data.', '`filter` removes unwanted data.', 'Neither modifies the original array.'],
    references: commonReferences
  }
};
