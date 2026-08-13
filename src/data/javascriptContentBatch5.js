const commonReferences = [
  { label: 'W3Schools JavaScript Strings', url: 'https://www.w3schools.com/js/js_strings.asp' },
  { label: 'MDN Web Docs - String', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' }
];

export const javascriptContentBatch5 = {
  'js_what_is_string': {
    isStructured: true,
    title: '40. What is a String?',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'A String is a sequence of characters used to represent text. In JavaScript, strings are surrounded by quotes.',
    whyUseIt: 'You use strings whenever you need to store, display, or manipulate text, such as names, messages, or URLs.',
    syntax: 'let myString = "Text goes here";\nlet singleQuotes = \'Also valid\';\nlet backticks = `Modern string`;',
    codeExample: 'let greeting = "Hello";\nlet name = \'John\';\n\nconsole.log(greeting + " " + name);',
    expectedOutput: '"Hello John"',
    explanation: [
      { code: '"Hello"', desc: 'A standard string enclosed in double quotes.' },
      { code: 'greeting + " " + name', desc: 'Concatenation (joining strings together using the + operator).' }
    ],
    realWorldExample: 'Storing a user\'s submitted email address in a database: `let email = "user@example.com";`',
    commonMistakes: [
      { error: 'Mismatched quotes', code: 'let str = "Hello\';', suffix: 'You must start and end a string with the exact same type of quote. You cannot mix double and single quotes.' }
    ],
    bestPractices: ['Pick one style (either single or double quotes) and stick to it throughout your entire project for consistency.'],
    practiceExercise: {
      task: 'Create two string variables, `firstName` and `lastName`. Concatenate them with a space in between and log the result.',
      expectedOutput: '"YourFirstName YourLastName"',
      solution: 'let firstName = "Jane"; let lastName = "Doe"; console.log(firstName + " " + lastName);'
    },
    quiz: [
      { question: 'What is a String in JavaScript?', options: ['A number', 'A sequence of text characters', 'A true/false value', 'A function'], answer: 'A sequence of text characters' },
      { question: 'Which of the following is NOT a valid way to create a string?', options: ['"text"', '\'text\'', '`text`', '<text>'], answer: '<text>' },
      { question: 'What operator is used to join (concatenate) strings together?', options: ['+', '-', '*', '&'], answer: '+' },
      { question: 'What happens if you run `"5" + 5`?', options: ['10', '"55"', 'Error', 'undefined'], answer: '"55"' },
      { question: 'How do you fix this code: `let s = "Hello\';`?', options: ['Change the first quote to single, or the last to double', 'Remove the quotes', 'Add a semicolon', 'It is already correct'], answer: 'Change the first quote to single, or the last to double' }
    ],
    interviewQuestions: [
      { q: 'Are strings mutable or immutable in JavaScript?', a: 'Strings are immutable. Once a string is created, you cannot change its individual characters. String methods like `toUpperCase()` do not change the original string; they return a brand new string.' }
    ],
    summary: ['Represents text.', 'Requires quotes ("", \'\', ``).', 'Can be joined with `+`.'],
    references: commonReferences
  },

  'js_string_length': {
    isStructured: true,
    title: '41. String Length',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `length` property returns the total number of characters in a string, including spaces and punctuation.',
    whyUseIt: 'Used heavily in form validation. For example, checking if a password is at least 8 characters long.',
    syntax: 'string.length',
    codeExample: 'let password = "SecretPassword123";\nlet spaceStr = "a b";\n\nconsole.log(password.length);\nconsole.log(spaceStr.length);',
    expectedOutput: '17\n3',
    explanation: [
      { code: 'password.length', desc: 'Counts every character in the string. There are 17 characters.' },
      { code: 'spaceStr.length', desc: 'Spaces are characters too. "a" (1) + space (2) + "b" (3).' }
    ],
    realWorldExample: 'Twitter limits tweets to 280 characters. The code does `if (tweet.length > 280) { disableSubmitButton(); }`.',
    commonMistakes: [
      { error: 'Adding parentheses to length', code: 'str.length()', suffix: '`length` is a property, not a method/function. Using parentheses will result in a "length is not a function" error.' }
    ],
    bestPractices: ['Always check `.length > 0` before trying to manipulate a string to avoid errors on empty strings.'],
    practiceExercise: {
      task: 'Create `let username = "Admin";`. Write an `if` statement checking if the length is less than 6. If so, log "Too short".',
      expectedOutput: '"Too short"',
      solution: 'let username = "Admin"; if (username.length < 6) { console.log("Too short"); }'
    },
    quiz: [
      { question: 'What does the `.length` property do?', options: ['Measures the physical width of the text', 'Returns the number of characters in a string', 'Returns the number of words', 'Makes the string longer'], answer: 'Returns the number of characters in a string' },
      { question: 'Do spaces count toward the string length?', options: ['Yes', 'No', 'Only at the end', 'Only in strict mode'], answer: 'Yes' },
      { question: 'Is `.length` a property or a method?', options: ['Property', 'Method', 'Function', 'Object'], answer: 'Property' },
      { question: 'What is the length of `""` (empty string)?', options: ['1', '0', 'undefined', 'null'], answer: '0' },
      { question: 'Why is `str.length()` incorrect?', options: ['It should be uppercase', 'length is a property, not a function, so it does not use parentheses', 'It needs an argument', 'It is correct'], answer: 'length is a property, not a function, so it does not use parentheses' }
    ],
    interviewQuestions: [
      { q: 'How would you get the length of an array compared to a string?', a: 'They are exactly the same. Both Strings and Arrays have a `.length` property.' }
    ],
    summary: ['Returns character count.', 'Includes spaces.', 'It is a property (no `()`).'],
    references: commonReferences
  },

  'js_string_indexing': {
    isStructured: true,
    title: '42. String Indexing',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'String indexing allows you to access individual characters within a string using bracket notation. JavaScript strings are zero-indexed, meaning the first character is at position 0.',
    whyUseIt: 'When you need to extract specific characters, like getting the first letter of a name to create an avatar initial.',
    syntax: 'string[indexNumber]',
    codeExample: 'let word = "JavaScript";\n\nconsole.log(word[0]); // First char\nconsole.log(word[4]); // Fifth char\nconsole.log(word[word.length - 1]); // Last char',
    expectedOutput: '"J"\n"S"\n"t"',
    explanation: [
      { code: 'word[0]', desc: 'Gets the character at index 0. J is the 0th character.' },
      { code: 'word.length - 1', desc: 'The most reliable way to get the very last character of a string.' }
    ],
    realWorldExample: 'A user uploads a file `image.png`. The system gets the last 4 characters using index calculations to verify it is an allowed file type.',
    commonMistakes: [
      { error: 'Assuming indexing starts at 1', code: 'word[1]', suffix: '`word[1]` will return the SECOND character, not the first. Always remember programmers count from 0.' }
    ],
    bestPractices: ['To access the last character safely, always use `str[str.length - 1]`, or in modern JS, the `str.at(-1)` method.'],
    practiceExercise: {
      task: 'Declare `let name = "Alex";`. Log the first character and the last character using indexing.',
      expectedOutput: '"A"\n"x"',
      solution: 'let name = "Alex"; console.log(name[0]); console.log(name[name.length - 1]);'
    },
    quiz: [
      { question: 'What is the index of the first character in a string?', options: ['1', '0', '-1', 'undefined'], answer: '0' },
      { question: 'If `let x = "Cat"`, what does `x[2]` return?', options: ['C', 'a', 't', 'undefined'], answer: 't' },
      { question: 'What is the standard formula to get the last character of any string?', options: ['str[str.length]', 'str[0]', 'str[str.length - 1]', 'str.last()'], answer: 'str[str.length - 1]' },
      { question: 'What happens if you try to access an index that doesn\'t exist, like `x[100]`?', options: ['It returns undefined', 'It crashes', 'It returns the last character', 'It returns 0'], answer: 'It returns undefined' },
      { question: 'Which modern JavaScript method can you use instead of bracket notation?', options: ['str.get()', 'str.at()', 'str.char()', 'str.find()'], answer: 'str.at()' }
    ],
    interviewQuestions: [
      { q: 'What happens if you try to change a specific character using its index, like `str[0] = "H";`?', a: 'Nothing happens (in non-strict mode) or an error is thrown (in strict mode). Strings are immutable in JavaScript, meaning you cannot alter individual characters after the string is created.' }
    ],
    summary: ['Starts at index 0.', 'Use brackets `[]`.', 'Last char: `str.length - 1`.'],
    references: commonReferences
  },

  'js_toupper_tolower': {
    isStructured: true,
    title: '43. toUpperCase() & toLowerCase()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'These methods convert a string to all uppercase or all lowercase letters. They do not modify the original string; they return a new one.',
    whyUseIt: 'Crucial for standardizing user input. If one user enters "Admin" and another enters "ADMIN", you convert both to "admin" before comparing them.',
    syntax: 'string.toUpperCase()\nstring.toLowerCase()',
    codeExample: 'let email = "User@Example.COM";\n\nlet lower = email.toLowerCase();\nlet upper = email.toUpperCase();\n\nconsole.log(lower);\nconsole.log(upper);',
    expectedOutput: '"user@example.com"\n"USER@EXAMPLE.COM"',
    explanation: [
      { code: 'toLowerCase()', desc: 'Returns a new string where every character is lowercase.' },
      { code: 'toUpperCase()', desc: 'Returns a new string where every character is uppercase.' }
    ],
    realWorldExample: 'A search bar. When a user searches for "iPhONe", the code runs `searchQuery.toLowerCase()` and searches the database for "iphone".',
    commonMistakes: [
      { error: 'Forgetting the parentheses', code: 'str.toLowerCase', suffix: 'These are methods (functions), so they MUST have parentheses `()` to execute. Without them, it just returns the function definition itself, not the converted string.' }
    ],
    bestPractices: ['Always convert user input (emails, usernames, search queries) to lowercase before saving or comparing to database records.'],
    practiceExercise: {
      task: 'Declare `let text = "sHouT";`. Log the fully uppercase version of this text.',
      expectedOutput: '"SHOUT"',
      solution: 'let text = "sHouT"; console.log(text.toUpperCase());'
    },
    quiz: [
      { question: 'What does `toUpperCase()` do?', options: ['Capitalizes only the first letter', 'Makes all letters uppercase', 'Makes all letters lowercase', 'Reverses the string'], answer: 'Makes all letters uppercase' },
      { question: 'Does `toLowerCase()` change the original string variable?', options: ['Yes', 'No, it returns a new string', 'Only if you use var', 'Only for numbers'], answer: 'No, it returns a new string' },
      { question: 'What happens if you run `"123".toLowerCase()`?', options: ['It errors', 'It returns "123" without changes', 'It returns "one two three"', 'It returns NaN'], answer: 'It returns "123" without changes' },
      { question: 'Why is standardizing case important in programming?', options: ['It saves memory', 'Because "Admin" === "admin" evaluates to false, which can cause login bugs', 'It makes the text bold', 'It is a CSS requirement'], answer: 'Because "Admin" === "admin" evaluates to false, which can cause login bugs' },
      { question: 'What is the correct syntax?', options: ['str.toUpper()', 'str.upperCase()', 'str.toUpperCase()', 'toUpperCase(str)'], answer: 'str.toUpperCase()' }
    ],
    interviewQuestions: [
      { q: 'How would you capitalize only the FIRST letter of a string?', a: 'You take the first character, uppercase it, and concatenate it with the rest of the string sliced from index 1. `str[0].toUpperCase() + str.slice(1);`' }
    ],
    summary: ['Standardizes text case.', 'Returns a NEW string.', 'Requires parentheses `()`.'],
    references: commonReferences
  },

  'js_string_trim': {
    isStructured: true,
    title: '44. trim()',
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

  'js_string_includes': {
    isStructured: true,
    title: '46. includes()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `includes()` method performs a case-sensitive search to determine whether one string may be found within another string, returning `true` or `false`.',
    whyUseIt: 'Used to check if a specific word or character exists inside a paragraph, sentence, or data string.',
    syntax: 'string.includes(searchString, position?)',
    codeExample: 'let sentence = "The quick brown fox";\n\nconsole.log(sentence.includes("fox"));   // true\nconsole.log(sentence.includes("Fox"));   // false (case-sensitive!)\nconsole.log(sentence.includes("cat"));   // false',
    expectedOutput: 'true\nfalse\nfalse',
    explanation: [
      { code: 'includes("fox")', desc: 'Searches the entire sentence for the exact sequence "fox". Finds it, returns true.' },
      { code: 'includes("Fox")', desc: 'Fails because the uppercase "F" does not exist in the string.' }
    ],
    realWorldExample: 'A profanity filter. `if (chatMessage.includes("badword")) { blockMessage(); }`',
    commonMistakes: [
      { error: 'Forgetting it is case-sensitive', code: '"JavaScript".includes("java")', suffix: 'This will return false. To perform a case-insensitive search, you must convert BOTH strings to lowercase first: `str.toLowerCase().includes("java")`.' }
    ],
    bestPractices: ['Use `includes()` when you only need a boolean (true/false) answer. If you need the exact position of the word, use `indexOf()` instead.'],
    practiceExercise: {
      task: 'Declare `let email = "test@user.com"`. Check if the email includes an "@" symbol. Log the boolean result.',
      expectedOutput: 'true',
      solution: 'let email = "test@user.com"; console.log(email.includes("@"));'
    },
    quiz: [
      { question: 'What type of value does `includes()` return?', options: ['Number (index)', 'String', 'Boolean (true/false)', 'Array'], answer: 'Boolean (true/false)' },
      { question: 'Is `includes()` case-sensitive?', options: ['Yes', 'No', 'Only on older browsers', 'Only if you pass true as the second argument'], answer: 'Yes' },
      { question: 'What does `"Hello".includes("H")` return?', options: ['true', 'false', '0', '1'], answer: 'true' },
      { question: 'How can you make a case-insensitive search?', options: ['Use `includesIgnoreCase()`', 'Convert the string to lowercase first, then use `includes()`', 'Pass `false` as an argument', 'You cannot'], answer: 'Convert the string to lowercase first, then use `includes()`' },
      { question: 'What is the optional second argument in `includes(search, position)`?', options: ['A boolean', 'The index position to start searching from', 'The length of the string', 'The replacement word'], answer: 'The index position to start searching from' }
    ],
    interviewQuestions: [
      { q: 'What did developers use before `includes()` was added in ES6?', a: 'They used `indexOf()`. If `indexOf("word")` returned a number greater than or equal to 0, it meant the word was included. If it returned -1, it was not included. `includes()` is much more readable.' }
    ],
    summary: ['Checks if text exists inside a string.', 'Returns Boolean.', 'Case-sensitive.'],
    references: commonReferences
  },

  'js_string_slice': {
    isStructured: true,
    title: '50. slice()',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string.',
    whyUseIt: 'When you need to cut out a specific portion of text, like extracting the area code from a phone number or getting the first name from a full name.',
    syntax: 'string.slice(startIndex, endIndex?)',
    codeExample: 'let str = "Apple, Banana, Kiwi";\n\n// Cut from index 7 up to (but not including) 13\nlet fruit = str.slice(7, 13);\nconsole.log(fruit);\n\n// Cut from index 15 to the end\nconsole.log(str.slice(15));\n\n// Negative indexes count from the end\nconsole.log(str.slice(-4));',
    expectedOutput: '"Banana"\n"Kiwi"\n"Kiwi"',
    explanation: [
      { code: 'slice(7, 13)', desc: 'Starts extracting at index 7 ("B"). Stops BEFORE index 13 (the comma). Returns "Banana".' },
      { code: 'slice(-4)', desc: 'Negative numbers count backward from the end of the string. -4 grabs the last 4 characters.' }
    ],
    realWorldExample: 'A system receives an ID format like "USER_9876". It runs `id.slice(5)` to extract just the "9876" part.',
    commonMistakes: [
      { error: 'Assuming the endIndex is included', code: '"cat".slice(0, 1)', suffix: 'This returns "c", not "ca". The extraction stops BEFORE the end index. It is exclusive.' }
    ],
    bestPractices: ['Use negative indexing with `slice()` when you need to grab the end of a string but don\'t know how long it is.'],
    practiceExercise: {
      task: 'Declare `let date = "2024-12-25";`. Use `slice()` to extract only the year (first 4 characters) and log it.',
      expectedOutput: '"2024"',
      solution: 'let date = "2024-12-25"; console.log(date.slice(0, 4));'
    },
    quiz: [
      { question: 'What does `slice()` do?', options: ['Deletes a string', 'Replaces a word', 'Extracts a section of a string', 'Converts to an array'], answer: 'Extracts a section of a string' },
      { question: 'Does `slice()` modify the original string?', options: ['Yes', 'No, it returns a new string', 'Only if you don\'t provide an end index', 'Only in strict mode'], answer: 'No, it returns a new string' },
      { question: 'Is the `endIndex` included in the extracted string?', options: ['Yes', 'No, it stops extracting BEFORE the end index', 'Only if it is negative', 'Only if it is a space'], answer: 'No, it stops extracting BEFORE the end index' },
      { question: 'What happens if you omit the `endIndex` (e.g., `str.slice(5)`)?', options: ['It crashes', 'It returns 1 character', 'It extracts from the start index all the way to the end of the string', 'It returns undefined'], answer: 'It extracts from the start index all the way to the end of the string' },
      { question: 'What does a negative index do in `slice()`?', options: ['Throws an error', 'Counts backward from the end of the string', 'Reverses the string', 'Makes the string lowercase'], answer: 'Counts backward from the end of the string' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `slice()` and `substring()`?', a: 'They are very similar, but `substring()` cannot accept negative indexes (it treats negative numbers as 0). `slice()` is generally preferred because the negative index feature is very useful.' }
    ],
    summary: ['Extracts portions of text.', 'End index is NOT included.', 'Accepts negative indexes.'],
    references: commonReferences
  }
};
