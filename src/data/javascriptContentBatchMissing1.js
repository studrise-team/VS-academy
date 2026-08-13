const commonReferences = [
  { label: 'MDN Web Docs - String', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' },
  { label: 'W3Schools JavaScript Strings', url: 'https://www.w3schools.com/js/js_string_methods.asp' }
];

export const javascriptContentBatchMissing1 = {
  'js_trim': {
    isStructured: true,
    title: '45. trim()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `trim()` method removes whitespace (spaces, tabs, newlines) from BOTH ends of a string. It does not remove spaces between words.',
    whyUseIt: 'Users often accidentally add leading or trailing spaces when filling out forms (like copy-pasting an email). `trim()` cleans this up.',
    syntax: 'string.trim()',
    codeExample: 'let badInput = "   hello world   ";\n\nlet cleanInput = badInput.trim();\n\nconsole.log(cleanInput); // "hello world"',
    expectedOutput: '"hello world"',
    explanation: [
      { code: 'badInput.trim()', desc: 'Strips the spaces off the far left and far right. Notice the space between "hello" and "world" remains untouched.' }
    ],
    realWorldExample: 'Cleaning up a username field on a registration form so that " JohnDoe " becomes "JohnDoe" before it hits the database.',
    commonMistakes: [
      { error: 'Expecting trim to remove internal spaces', code: '"a b".trim()', suffix: '`trim()` only touches the edges. If you need to remove all spaces everywhere, you must use `replace()` or `replaceAll()`.' }
    ],
    bestPractices: ['Chain `trim()` with case conversion when handling forms: `input.trim().toLowerCase()`. (This removes spaces AND standardizes case).'],
    practiceExercise: {
      task: 'Declare `let code = "   JS   ";`. Trim the spaces and log the length of the new string to prove it worked.',
      expectedOutput: '2',
      solution: 'let code = "   JS   "; let clean = code.trim(); console.log(clean.length);'
    },
    quiz: [
      { question: 'What does `trim()` remove?', options: ['All spaces in a string', 'Only leading and trailing whitespace', 'Only numbers', 'Only uppercase letters'], answer: 'Only leading and trailing whitespace' },
      { question: 'Does `trim()` change the original string variable?', options: ['Yes', 'No, it returns a new string', 'Only in strict mode', 'Yes, but only the spaces'], answer: 'No, it returns a new string' },
      { question: 'What happens to the space in `"John Doe".trim()`?', options: ['It is removed', 'It is replaced by a dash', 'Nothing, it remains', 'An error is thrown'], answer: 'Nothing, it remains' },
      { question: 'What is a common use case for `trim()`?', options: ['Math calculations', 'Cleaning up user form inputs', 'Styling text', 'Connecting to databases'], answer: 'Cleaning up user form inputs' },
      { question: 'Are there methods to trim just one side?', options: ['Yes, trimStart() and trimEnd()', 'No, only trim() exists', 'Yes, trimLeft() and trimRight() (but they are deprecated)', 'Both A and C are correct'], answer: 'Both A and C are correct' }
    ],
    interviewQuestions: [
      { q: 'How would you remove ALL spaces in a string, not just the ones at the ends?', a: 'You would use the `replaceAll()` method: `str.replaceAll(" ", "")`, or a Regular Expression: `str.replace(/\\s/g, "")`.' }
    ],
    summary: ['Removes edge whitespace.', 'Leaves internal spaces intact.', 'Essential for form validation.'],
    references: commonReferences
  },
  'js_endswith': {
    isStructured: true,
    title: '48. endsWith()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `endsWith()` method determines whether a string ends with the characters of a specified string, returning `true` or `false` as appropriate.',
    whyUseIt: 'Very useful for validating file extensions (like checking if a file is a `.jpg`), checking URL routes, or verifying sentence punctuation.',
    syntax: 'string.endsWith(searchString, length?)',
    codeExample: 'let filename = "profile_picture.jpg";\n\nconsole.log(filename.endsWith(".jpg")); // true\nconsole.log(filename.endsWith(".png")); // false',
    expectedOutput: 'true\nfalse',
    explanation: [
      { code: 'endsWith(".jpg")', desc: 'Checks the very end of the string. Since it ends exactly with ".jpg", it returns true.' }
    ],
    realWorldExample: 'A file upload component that checks `if (!file.name.endsWith(".pdf")) { alert("Only PDFs allowed"); }`.',
    commonMistakes: [
      { error: 'Case sensitivity', code: '"hello.JPG".endsWith(".jpg")', suffix: '`endsWith()` is case-sensitive, so this will return false. You might want to `.toLowerCase()` the string first.' }
    ],
    bestPractices: ['Use the optional `length` parameter if you only want to check a specific portion of the string as if it were the end: `str.endsWith("world", 11)`.'],
    practiceExercise: {
      task: 'Create a variable `website = "https://example.com"`. Check if it ends with ".com" and log the result.',
      expectedOutput: 'true',
      solution: 'let website = "https://example.com"; console.log(website.endsWith(".com"));'
    },
    quiz: [
      { question: 'What does `endsWith()` return?', options: ['A number', 'A string', 'A boolean (true/false)', 'An array'], answer: 'A boolean (true/false)' },
      { question: 'Is `endsWith()` case-sensitive?', options: ['Yes', 'No', 'Sometimes', 'Only for numbers'], answer: 'Yes' },
      { question: 'What will `"Hello World".endsWith("World")` return?', options: ['true', 'false', 'undefined', 'null'], answer: 'true' },
      { question: 'Can you specify a length to `endsWith()` to act as the virtual end of the string?', options: ['Yes, it is the second parameter', 'No, it only checks the absolute end', 'Yes, but only in Node.js', 'No, that is what substring is for'], answer: 'Yes, it is the second parameter' },
      { question: 'Which is a common use case for `endsWith()`?', options: ['Math calculations', 'Checking file extensions (e.g. .jpg, .pdf)', 'Sorting arrays', 'Replacing words'], answer: 'Checking file extensions (e.g. .jpg, .pdf)' }
    ],
    interviewQuestions: [
      { q: 'How could you achieve what `endsWith()` does without using it?', a: 'You could use a regular expression like `/searchString$/` or check if `str.lastIndexOf(searchString) === str.length - searchString.length`.' }
    ],
    summary: ['Checks if a string ends with specific text.', 'Returns a Boolean.', 'Case-sensitive.'],
    references: commonReferences
  },
  'js_indexof': {
    isStructured: true,
    title: '49. indexOf()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The `indexOf()` method returns the index of the first occurrence of a specified text in a string. If the text is not found, it returns `-1`.',
    whyUseIt: 'When you need to know exactly *where* a substring is located, or you want to extract everything before or after a certain character.',
    syntax: 'string.indexOf(searchValue, startIndex?)',
    codeExample: 'let email = "john.doe@example.com";\n\nlet atSymbolIndex = email.indexOf("@");\nconsole.log(atSymbolIndex);\n\nlet missingChar = email.indexOf("#");\nconsole.log(missingChar);',
    expectedOutput: '8\n-1',
    explanation: [
      { code: 'indexOf("@")', desc: 'Searches for "@". It finds it at the 8th index position (remember, indexing starts at 0).' },
      { code: 'indexOf("#")', desc: 'Because "#" is not in the string, the method returns -1.' }
    ],
    realWorldExample: 'Extracting just the username from an email address: `let username = email.slice(0, email.indexOf("@"));`.',
    commonMistakes: [
      { error: 'Treating 0 as false', code: 'if (str.indexOf("A"))', suffix: 'If "A" is the very first character, `indexOf` returns 0. In JavaScript, 0 is falsy, so the `if` block won\'t execute! Always use `if (str.indexOf("A") !== -1)`.' }
    ],
    bestPractices: ['If you just want to know IF a string contains a word (and don\'t care about the position), use `includes()` instead. It returns a boolean and is easier to read.'],
    practiceExercise: {
      task: 'Declare `let sentence = "Find the needle in the haystack."`. Find and log the index of the word "needle".',
      expectedOutput: '9',
      solution: 'let sentence = "Find the needle in the haystack."; console.log(sentence.indexOf("needle"));'
    },
    quiz: [
      { question: 'What does `indexOf()` return if the text is NOT found?', options: ['false', 'undefined', '0', '-1'], answer: '-1' },
      { question: 'What does `indexOf()` return if the text IS found?', options: ['The text itself', 'true', 'The index number of the first occurrence', 'An array of all occurrences'], answer: 'The index number of the first occurrence' },
      { question: 'Is `indexOf()` case-sensitive?', options: ['Yes', 'No', 'Only for numbers', 'Only in strict mode'], answer: 'Yes' },
      { question: 'What happens if the text appears multiple times?', options: ['It returns the index of the last occurrence', 'It returns an array of all indices', 'It returns the index of the first occurrence', 'It throws an error'], answer: 'It returns the index of the first occurrence' },
      { question: 'How do you check if a substring exists using `indexOf`?', options: ['if (str.indexOf(sub) == true)', 'if (str.indexOf(sub) !== -1)', 'if (str.indexOf(sub) > 0)', 'if (str.indexOf(sub) === 0)'], answer: 'if (str.indexOf(sub) !== -1)' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `indexOf()` and `lastIndexOf()`?', a: '`indexOf()` searches from the beginning of the string and returns the first match. `lastIndexOf()` searches from the end backwards and returns the last match.' }
    ],
    summary: ['Returns index of first match.', 'Returns -1 if not found.', 'Case-sensitive.'],
    references: commonReferences
  },
  'js_substring': {
    isStructured: true,
    title: '51. substring()',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `substring()` method extracts characters from a string, between two specified indices, and returns the new sub string.',
    whyUseIt: 'Used for extracting parts of strings when you know the start and end positions, like grabbing a specific code block from a larger text string.',
    syntax: 'string.substring(startIndex, endIndex?)',
    codeExample: 'let str = "Hello JavaScript";\n\nlet word1 = str.substring(0, 5);\nconsole.log(word1);\n\n// If endIndex is omitted, it extracts to the end\nlet word2 = str.substring(6);\nconsole.log(word2);',
    expectedOutput: '"Hello"\n"JavaScript"',
    explanation: [
      { code: 'substring(0, 5)', desc: 'Extracts characters from index 0 up to (but not including) index 5.' },
      { code: 'substring(6)', desc: 'Extracts from index 6 to the very end of the string.' }
    ],
    realWorldExample: 'Extracting a short preview or excerpt from a long blog post: `let excerpt = postBody.substring(0, 100) + "...";`',
    commonMistakes: [
      { error: 'Using negative numbers', code: 'str.substring(-3)', suffix: 'Unlike `slice()`, `substring()` does NOT support negative indices. It treats any negative number as 0.' }
    ],
    bestPractices: ['Most modern developers prefer `slice()` over `substring()` because `slice()` handles negative indices nicely, whereas `substring()` does not.'],
    practiceExercise: {
      task: 'Declare `let course = "Web Development"`. Use `substring()` to extract the word "Web" and log it.',
      expectedOutput: '"Web"',
      solution: 'let course = "Web Development"; console.log(course.substring(0, 3));'
    },
    quiz: [
      { question: 'What does `substring()` do?', options: ['Replaces text', 'Removes text', 'Extracts a portion of a string', 'Converts to uppercase'], answer: 'Extracts a portion of a string' },
      { question: 'Is the `endIndex` character included in the returned string?', options: ['Yes', 'No, it stops extracting BEFORE the endIndex', 'Only if it is negative', 'Only if the string is long enough'], answer: 'No, it stops extracting BEFORE the endIndex' },
      { question: 'What does `substring()` do if you pass a negative number?', options: ['Counts from the end of the string', 'Throws an error', 'Treats it as 0', 'Returns undefined'], answer: 'Treats it as 0' },
      { question: 'What happens if `startIndex` is greater than `endIndex` (e.g., `substring(5, 2)`)?', options: ['Throws an error', 'Returns an empty string', 'It swaps the two arguments and extracts from 2 to 5', 'Returns undefined'], answer: 'It swaps the two arguments and extracts from 2 to 5' },
      { question: 'What happens if you omit the `endIndex`?', options: ['It extracts 1 character', 'It returns the whole string unchanged', 'It extracts to the end of the string', 'It throws an error'], answer: 'It extracts to the end of the string' }
    ],
    interviewQuestions: [
      { q: 'What is the main difference between `substring()` and `slice()`?', a: 'If start > end, `substring()` will swap them, while `slice()` returns an empty string. Also, `slice()` accepts negative indices (counts from the end), while `substring()` treats negatives as 0.' }
    ],
    summary: ['Extracts text between indices.', 'End index is NOT included.', 'Treats negative numbers as 0.'],
    references: commonReferences
  },
  'js_split': {
    isStructured: true,
    title: '53. split()',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `split()` method takes a string and divides it into an Array of substrings by separating the string at each instance of a specified separator string.',
    whyUseIt: 'Extremely useful for converting comma-separated data (CSV) into an array, or splitting a sentence into individual words.',
    syntax: 'string.split(separator, limit?)',
    codeExample: 'let fruits = "Apple, Banana, Orange";\nlet arr = fruits.split(", ");\nconsole.log(arr);\n\nlet word = "Hello";\nlet chars = word.split("");\nconsole.log(chars);',
    expectedOutput: '["Apple", "Banana", "Orange"]\n["H", "e", "l", "l", "o"]',
    explanation: [
      { code: 'split(", ")', desc: 'Splits the string everywhere it sees a comma followed by a space. Returns an array of 3 items.' },
      { code: 'split("")', desc: 'Passing an empty string as the separator splits the text into an array of individual characters.' }
    ],
    realWorldExample: 'Processing a search query. If a user types "red shoes", the code runs `let tags = query.split(" ")` to get `["red", "shoes"]` and searches the database for each tag.',
    commonMistakes: [
      { error: 'Forgetting the separator', code: 'str.split()', suffix: 'If you omit the separator, the entire original string is returned as the only item in an array: `["Apple, Banana"]`.' }
    ],
    bestPractices: ['Chain `split()` with array methods. For example, to reverse a string: `str.split("").reverse().join("")`.'],
    practiceExercise: {
      task: 'Declare `let path = "home/user/documents"`. Use `split()` with the `/` separator to create an array and log it.',
      expectedOutput: '["home", "user", "documents"]',
      solution: 'let path = "home/user/documents"; console.log(path.split("/"));'
    },
    quiz: [
      { question: 'What does `split()` return?', options: ['A string', 'An array of strings', 'A boolean', 'A number'], answer: 'An array of strings' },
      { question: 'What happens if you use `""` (empty string) as the separator?', options: ['It crashes', 'It splits by spaces', 'It splits every single character into its own array item', 'It returns the full string'], answer: 'It splits every single character into its own array item' },
      { question: 'What happens if the separator is not found in the string?', options: ['It returns an empty array', 'It returns the entire string as the only item in an array', 'It throws an error', 'It returns undefined'], answer: 'It returns the entire string as the only item in an array' },
      { question: 'What is the purpose of the optional second parameter (limit)?', options: ['To limit the number of splits found in the returned array', 'To limit the length of each string', 'To limit the characters checked', 'To specify a second separator'], answer: 'To limit the number of splits found in the returned array' },
      { question: 'How would you reverse a string using `split()`?', options: ['str.split().reverse()', 'str.split("").reverse().join("")', 'str.split("reverse")', 'You cannot'], answer: 'str.split("").reverse().join("")' }
    ],
    interviewQuestions: [
      { q: 'How would you split a string by multiple different separators (e.g., both spaces and commas)?', a: 'You can pass a Regular Expression to `split()`. For example, `str.split(/[ ,]+/)` splits by spaces or commas.' }
    ],
    summary: ['Converts String to Array.', 'Splits based on a separator.', 'Empty string `""` splits by character.'],
    references: commonReferences
  }
};
