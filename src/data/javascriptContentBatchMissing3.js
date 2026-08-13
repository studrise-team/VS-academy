const commonReferences = [
  { label: 'MDN Web Docs - Array', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' }
];

export const javascriptContentBatchMissing3 = {
  'js_shift': {
    isStructured: true,
    title: '76. shift()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `shift()` method removes the **first** element from an array and returns that removed element. This method changes the length of the array.',
    whyUseIt: 'Used when you need to process items in the exact order they were added (a Queue). Think of a line of people: the first person to join the line is the first one served and removed from the line.',
    syntax: 'array.shift()',
    codeExample: 'let queue = ["Alice", "Bob", "Charlie"];\n\nlet served = queue.shift();\n\nconsole.log(served); // "Alice"\nconsole.log(queue); // ["Bob", "Charlie"]',
    expectedOutput: '"Alice"\n["Bob", "Charlie"]',
    explanation: [
      { code: 'queue.shift()', desc: 'Removes "Alice" from index 0, shifts "Bob" and "Charlie" down to index 0 and 1, and returns "Alice".' }
    ],
    realWorldExample: 'A ticketing system where customer support handles the oldest ticket first. `let currentTicket = tickets.shift();` retrieves and removes it from the waiting list.',
    commonMistakes: [
      { error: 'Using shift() on an empty array', code: '[].shift()', suffix: 'It doesn\'t crash, but it returns `undefined`. Always check if `array.length > 0` if your logic depends on a valid item being returned.' },
      { error: 'Performance issues', code: 'hugeArray.shift()', suffix: 'Because `shift()` removes the first item, every single other item in the array has to have its index updated. For very large arrays, this can be slow compared to `pop()`.' }
    ],
    bestPractices: ['Remember that `shift()` modifies the original array (mutates it). If you just want to read the first item without removing it, use `array[0]`.'],
    practiceExercise: {
      task: 'Declare `let colors = ["Red", "Blue", "Green"]`. Use `shift()` to remove the first color, and log both the removed color and the updated array.',
      expectedOutput: '"Red"\n["Blue", "Green"]',
      solution: 'let colors = ["Red", "Blue", "Green"]; let removed = colors.shift(); console.log(removed); console.log(colors);'
    },
    quiz: [
      { question: 'What does `shift()` do?', options: ['Adds an item to the beginning', 'Removes the first item', 'Removes the last item', 'Reverses the array'], answer: 'Removes the first item' },
      { question: 'Does `shift()` change the original array?', options: ['Yes', 'No, it returns a new array', 'Only in strict mode', 'Yes, but only if it contains numbers'], answer: 'Yes' },
      { question: 'What does `shift()` return?', options: ['The new length of the array', 'The removed element', 'A new array without the first element', 'true'], answer: 'The removed element' },
      { question: 'What happens if you use `shift()` on an empty array?', options: ['It crashes', 'It throws an error', 'It returns undefined', 'It returns null'], answer: 'It returns undefined' },
      { question: 'Which is faster on a massive array, `pop()` or `shift()`?', options: ['pop()', 'shift()', 'They are exactly the same speed', 'It depends on the browser'], answer: 'pop()' }
    ],
    interviewQuestions: [
      { q: 'Explain why `shift()` can be a performance bottleneck in large arrays compared to `pop()`.', a: 'When you use `pop()`, the last item is removed, and nothing else changes. When you use `shift()`, the first item is removed, so the engine has to re-index every single remaining element (shifting them down by 1), which takes O(n) time.' }
    ],
    summary: ['Removes the first element.', 'Returns the removed element.', 'Mutates the original array.'],
    references: commonReferences
  },
  'js_slice_1': {
    isStructured: true,
    title: '78. slice()',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.',
    whyUseIt: 'Whenever you need to grab a sub-section of an array WITHOUT altering the original array, such as grabbing the top 3 scores or copying an array.',
    syntax: 'array.slice(startIndex, endIndex?)',
    codeExample: 'let animals = ["Ant", "Bison", "Camel", "Duck", "Elephant"];\n\nconsole.log(animals.slice(2)); // ["Camel", "Duck", "Elephant"]\nconsole.log(animals.slice(2, 4)); // ["Camel", "Duck"]\nconsole.log(animals.slice(-2)); // ["Duck", "Elephant"]',
    expectedOutput: '["Camel", "Duck", "Elephant"]\n["Camel", "Duck"]\n["Duck", "Elephant"]',
    explanation: [
      { code: 'slice(2)', desc: 'Slices from index 2 to the end of the array.' },
      { code: 'slice(2, 4)', desc: 'Slices from index 2 up to (but not including) index 4.' },
      { code: 'slice(-2)', desc: 'Using a negative number counts backwards from the end of the array.' }
    ],
    realWorldExample: 'Implementing pagination. If you have 100 items and want to show items 11-20 on page 2: `let pageItems = allItems.slice(10, 20);`',
    commonMistakes: [
      { error: 'Assuming it mutates the array', code: 'arr.slice(0, 2)', suffix: '`slice()` does not modify the original array. If you don\'t assign the result to a variable (`let sliced = arr.slice(0, 2)`), the sliced array is lost.' }
    ],
    bestPractices: ['A common trick to create a shallow copy (clone) of an entire array is to use `slice()` with no arguments: `let copy = arr.slice();`.'],
    practiceExercise: {
      task: 'Declare `let letters = ["A", "B", "C", "D", "E"]`. Use `slice()` to extract `["B", "C"]` and log it.',
      expectedOutput: '["B", "C"]',
      solution: 'let letters = ["A", "B", "C", "D", "E"]; console.log(letters.slice(1, 3));'
    },
    quiz: [
      { question: 'Does `slice()` modify the original array?', options: ['Yes', 'No', 'Sometimes', 'Only if you provide negative numbers'], answer: 'No' },
      { question: 'Is the `endIndex` included in the new array?', options: ['Yes', 'No', 'Only if the array contains numbers', 'Only if it is the last item'], answer: 'No' },
      { question: 'What does `slice()` with no arguments do?', options: ['Returns an empty array', 'Returns undefined', 'Returns a copy of the entire array', 'Throws an error'], answer: 'Returns a copy of the entire array' },
      { question: 'What does a negative index do in `slice()`?', options: ['Throws an error', 'Returns an empty array', 'Counts backwards from the end of the array', 'Removes items'], answer: 'Counts backwards from the end of the array' },
      { question: 'What happens if `startIndex` is greater than `endIndex`?', options: ['It swaps the arguments', 'It returns an empty array', 'It throws an error', 'It returns the whole array'], answer: 'It returns an empty array' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `slice()` and `splice()`?', a: '`slice()` extracts a section of an array and returns a new array, leaving the original unchanged. `splice()` adds or removes items from an array, directly modifying (mutating) the original array.' }
    ],
    summary: ['Extracts a section of an array.', 'Does NOT modify the original array.', 'End index is not included.'],
    references: commonReferences
  },
  'js_includes_1': {
    isStructured: true,
    title: '82. includes()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `includes()` method determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.',
    whyUseIt: 'The easiest and most readable way to check if an item exists in an array. Perfect for simple conditional logic.',
    syntax: 'array.includes(searchElement, fromIndex?)',
    codeExample: 'let pets = ["cat", "dog", "bat"];\n\nconsole.log(pets.includes("dog")); // true\nconsole.log(pets.includes("bird")); // false',
    expectedOutput: 'true\nfalse',
    explanation: [
      { code: 'includes("dog")', desc: 'Searches the array for "dog". Since it exists, it returns true.' }
    ],
    realWorldExample: 'Checking if a user has a specific role: `if (user.roles.includes("admin")) { showAdminPanel(); }`',
    commonMistakes: [
      { error: 'Case sensitivity', code: '["Apple"].includes("apple")', suffix: 'Like string includes, array includes is case-sensitive, so this returns false.' },
      { error: 'Checking objects', code: '[{id: 1}].includes({id: 1})', suffix: '`includes` checks object references, not values. These are two different objects in memory, so it returns false.' }
    ],
    bestPractices: ['Prefer `includes()` over `indexOf() !== -1` when you only need to know IF something exists, because it is much easier to read and understand.'],
    practiceExercise: {
      task: 'Declare `let allowedExtensions = [".jpg", ".png", ".gif"]`. Check if ".pdf" is in the array and log the boolean result.',
      expectedOutput: 'false',
      solution: 'let allowedExtensions = [".jpg", ".png", ".gif"]; console.log(allowedExtensions.includes(".pdf"));'
    },
    quiz: [
      { question: 'What does `includes()` return?', options: ['The index of the item', 'The item itself', 'A boolean (true/false)', 'An array'], answer: 'A boolean (true/false)' },
      { question: 'Is `includes()` case-sensitive for strings?', options: ['Yes', 'No', 'Only in strict mode', 'Sometimes'], answer: 'Yes' },
      { question: 'Which is more readable for checking existence: `arr.includes(x)` or `arr.indexOf(x) !== -1`?', options: ['arr.indexOf(x) !== -1', 'arr.includes(x)', 'They are equally readable', 'Neither, use a for loop'], answer: 'arr.includes(x)' },
      { question: 'Will `[NaN].includes(NaN)` return true?', options: ['Yes', 'No', 'Throws an error', 'Returns undefined'], answer: 'Yes' },
      { question: 'Can you specify a starting index to search from?', options: ['No', 'Yes, as the second argument', 'Yes, as the first argument', 'Only for strings, not arrays'], answer: 'Yes, as the second argument' }
    ],
    interviewQuestions: [
      { q: 'Why might you use `includes()` instead of `indexOf()` when dealing with `NaN` values?', a: 'Because `indexOf(NaN)` always returns -1 (since `NaN !== NaN` in JS). However, `includes(NaN)` correctly returns `true` if `NaN` is in the array, making it much safer for checking existence.' }
    ],
    summary: ['Checks for existence in array.', 'Returns true or false.', 'Safer than indexOf for checking NaN.'],
    references: commonReferences
  },
  'js_join': {
    isStructured: true,
    title: '83. join()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `join()` method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.',
    whyUseIt: 'The exact opposite of a String\'s `split()` method. Used to combine array data into a readable string format, like creating a comma-separated list for display.',
    syntax: 'array.join(separator?)',
    codeExample: 'let elements = ["Fire", "Air", "Water"];\n\nconsole.log(elements.join()); // "Fire,Air,Water"\nconsole.log(elements.join(" - ")); // "Fire - Air - Water"\nconsole.log(elements.join("")); // "FireAirWater"',
    expectedOutput: '"Fire,Air,Water"\n"Fire - Air - Water"\n"FireAirWater"',
    explanation: [
      { code: 'join()', desc: 'If you provide no separator, it defaults to a comma.' },
      { code: 'join(" - ")', desc: 'Joins the array elements using " - " between each one.' },
      { code: 'join("")', desc: 'Passing an empty string mashes all elements together with nothing between them.' }
    ],
    realWorldExample: 'Taking an array of CSS classes `["btn", "btn-primary", "active"]` and joining them into a string for the DOM: `element.className = classes.join(" ");`',
    commonMistakes: [
      { error: 'Null or undefined elements', code: '[1, null, 3].join("-")', suffix: 'If an element is `undefined` or `null`, it is converted to an empty string. The output here is `"1--3"`.' }
    ],
    bestPractices: ['Chain `join()` after methods like `map()` or `filter()` to quickly generate HTML strings from data arrays.'],
    practiceExercise: {
      task: 'Declare `let words = ["Hello", "World", "JS"]`. Use `join()` to create a single string separated by spaces, and log it.',
      expectedOutput: '"Hello World JS"',
      solution: 'let words = ["Hello", "World", "JS"]; console.log(words.join(" "));'
    },
    quiz: [
      { question: 'What does `join()` return?', options: ['An array', 'A boolean', 'A string', 'A number'], answer: 'A string' },
      { question: 'What is the default separator if you don\'t provide one?', options: ['A space', 'A comma', 'An empty string', 'A dash'], answer: 'A comma' },
      { question: 'What is the opposite of array.join()?', options: ['string.concat()', 'string.split()', 'array.slice()', 'array.toString()'], answer: 'string.split()' },
      { question: 'What happens to `null` or `undefined` values when joined?', options: ['They throw an error', 'They are printed as "null" and "undefined"', 'They are treated as empty strings', 'The join stops executing'], answer: 'They are treated as empty strings' },
      { question: 'If `arr = ["A"]`, what does `arr.join("-")` return?', options: ['"A-"', '"-A"', '"A"', '""'], answer: '"A"' }
    ],
    interviewQuestions: [
      { q: 'How would you reverse the characters in a string?', a: 'You can combine `split`, `reverse`, and `join`. Example: `"hello".split("").reverse().join("")`.' }
    ],
    summary: ['Converts an array to a string.', 'Requires a separator (defaults to comma).', 'Opposite of String.split().'],
    references: commonReferences
  },
  'js_reverse': {
    isStructured: true,
    title: '84. reverse()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `reverse()` method reverses an array **in place**. The first array element becomes the last, and the last array element becomes the first.',
    whyUseIt: 'Used when you need to change the order of items to backwards. For example, showing a list of messages from newest to oldest instead of oldest to newest.',
    syntax: 'array.reverse()',
    codeExample: 'let numbers = [1, 2, 3];\nnumbers.reverse();\n\nconsole.log(numbers); // [3, 2, 1]',
    expectedOutput: '[3, 2, 1]',
    explanation: [
      { code: 'numbers.reverse()', desc: 'Flips the order of the array. The original `numbers` array is permanently changed.' }
    ],
    realWorldExample: 'You fetch a list of blog posts which are ordered oldest first. You run `posts.reverse()` so the UI displays the newest ones at the top of the page.',
    commonMistakes: [
      { error: 'Forgetting it mutates the array', code: 'let copy = arr.reverse();', suffix: 'Because `reverse()` changes the original array, `arr` is now reversed too. `copy` and `arr` are the EXACT same array in memory. If you want to reverse a copy, you must copy it first: `let copy = [...arr].reverse();`.' }
    ],
    bestPractices: ['If you need to keep the original array intact, clone it first using the spread operator before reversing: `[...arr].reverse()`.'],
    practiceExercise: {
      task: 'Declare `let letters = ["a", "b", "c"]`. Reverse the array and log it.',
      expectedOutput: '["c", "b", "a"]',
      solution: 'let letters = ["a", "b", "c"]; console.log(letters.reverse());'
    },
    quiz: [
      { question: 'Does `reverse()` change the original array?', options: ['Yes, it mutates it in place', 'No, it returns a new reversed array', 'Only if the array has numbers', 'Only in strict mode'], answer: 'Yes, it mutates it in place' },
      { question: 'What does `reverse()` return?', options: ['undefined', 'A boolean', 'The reversed array (a reference to the mutated original)', 'The length of the array'], answer: 'The reversed array (a reference to the mutated original)' },
      { question: 'How can you reverse an array WITHOUT modifying the original?', options: ['arr.reverse().copy()', '[...arr].reverse()', 'arr.slice().reverse()', 'Both B and C'], answer: 'Both B and C' },
      { question: 'Can `reverse()` be used on a string directly?', options: ['Yes', 'No, strings don\'t have a reverse method', 'Only in Node.js', 'Yes, if it is a template literal'], answer: 'No, strings don\'t have a reverse method' },
      { question: 'How do you reverse a string?', options: ['str.reverse()', 'str.split("").reverse().join("")', 'reverse(str)', 'You have to use a for loop'], answer: 'str.split("").reverse().join("")' }
    ],
    interviewQuestions: [
      { q: 'Write a function to check if a string is a palindrome using array methods.', a: '`function isPalindrome(str) { return str === str.split("").reverse().join(""); }`' }
    ],
    summary: ['Reverses elements in an array.', 'Mutates the original array.', 'Clone first if you need to keep the original.'],
    references: commonReferences
  }
};
