const commonReferences = [
  { label: 'W3Schools JavaScript Numbers', url: 'https://www.w3schools.com/js/js_numbers.asp' },
  { label: 'MDN Web Docs - Numbers', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number' },
  { label: 'W3Schools JavaScript Math', url: 'https://www.w3schools.com/js/js_math.asp' },
  { label: 'MDN Web Docs - Math', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math' }
];

export const javascriptContentBatch6 = {
  'js_numbers': {
    isStructured: true,
    title: '56. Numbers',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'JavaScript has only one type of number. Numbers can be written with or without decimals. They are stored as double-precision 64-bit floats.',
    whyUseIt: 'Numbers are fundamental for calculations, tracking scores, physics, counters, and managing financial data.',
    syntax: 'let intNumber = 42;\nlet floatNumber = 3.14;',
    codeExample: 'let age = 25;\nlet price = 9.99;\nlet scientific = 123e5; // 12300000\n\nconsole.log(age);\nconsole.log(price);\nconsole.log(scientific);',
    expectedOutput: '25\n9.99\n12300000',
    explanation: [
      { code: '25', desc: 'An integer (whole number).' },
      { code: '9.99', desc: 'A floating-point number (decimal).' },
      { code: '123e5', desc: 'Scientific notation. e5 means multiply by 10 to the 5th power.' }
    ],
    realWorldExample: 'A shopping cart application tracks `itemPrice` and `totalQuantity` as numbers to calculate the final checkout total.',
    commonMistakes: [
      { error: 'Floating point imprecision', code: 'console.log(0.2 + 0.1);', suffix: 'Because of how computers store decimals in binary, 0.2 + 0.1 outputs 0.30000000000000004, not 0.3. Be careful with financial calculations!' }
    ],
    bestPractices: ['When dealing with money, multiply the amount by 100 to convert to integers (cents) before calculating, then divide by 100 before displaying.'],
    practiceExercise: {
      task: 'Declare `let a = 10;` and `let b = 3.5;`. Multiply them together and log the result.',
      expectedOutput: '35',
      solution: 'let a = 10; let b = 3.5; console.log(a * b);'
    },
    quiz: [
      { question: 'Does JavaScript have separate data types for Integers and Floats (decimals)?', options: ['Yes', 'No, they are all just "Number"', 'Only in strict mode', 'Only in modern ES6'], answer: 'No, they are all just "Number"' },
      { question: 'How is 1.5e3 written in standard notation?', options: ['15', '150', '1500', '15000'], answer: '1500' },
      { question: 'What is a common issue with floating-point math in JavaScript?', options: ['It is too slow', 'It causes slight inaccuracies (e.g., 0.1 + 0.2)', 'It only works with negative numbers', 'It requires an external library'], answer: 'It causes slight inaccuracies (e.g., 0.1 + 0.2)' },
      { question: 'What is the safest way to handle currency calculations in JS?', options: ['Use `Math.money()`', 'Calculate using integer cents, not dollar decimals', 'Store it as a string', 'Convert to Boolean'], answer: 'Calculate using integer cents, not dollar decimals' },
      { question: 'Which keyword is used to declare a number?', options: ['int', 'float', 'let/const/var', 'number'], answer: 'let/const/var' }
    ],
    interviewQuestions: [
      { q: 'What is the maximum safe integer in JavaScript?', a: 'It is 2^53 - 1, accessible via `Number.MAX_SAFE_INTEGER`. If you need to safely calculate larger numbers, you must use the newer `BigInt` data type (e.g., `12345678901234567890n`).' }
    ],
    summary: ['One single `Number` data type.', 'Handles integers and decimals.', 'Beware of decimal math inaccuracies.'],
    references: commonReferences
  },

  'js_number_conversion': {
    isStructured: true,
    title: '57. Number Conversion',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Number conversion is the process of changing a String (or other data type) into a Number data type using the `Number()` function.',
    whyUseIt: 'HTML input fields (like `<input type="number">`) always return Strings. If a user types "5", and you add 2 to it, you get "52" (string concatenation) instead of 7. You must convert it to a Number first.',
    syntax: 'Number(value)',
    codeExample: 'let input = "10";\nlet amount = Number(input);\n\nconsole.log(typeof input);  // "string"\nconsole.log(typeof amount); // "number"\n\nconsole.log(amount + 5);    // 15',
    expectedOutput: '"string"\n"number"\n15',
    explanation: [
      { code: 'Number("10")', desc: 'Takes the string "10" and strictly converts it to the mathematical number 10.' },
      { code: 'amount + 5', desc: 'Because it was converted, standard math works (10 + 5 = 15).' }
    ],
    realWorldExample: 'A tip calculator app. The user enters "15" for tip percentage. The app converts it using `Number()` before calculating the final bill.',
    commonMistakes: [
      { error: 'Converting words', code: 'Number("Hello")', suffix: 'If the string cannot be interpreted as a number, it returns `NaN` (Not a Number).' }
    ],
    bestPractices: ['Use the Unary Plus operator `+` as a shorthand for `Number()`. Example: `let num = +"10";` (this converts "10" to 10).'],
    practiceExercise: {
      task: 'Declare `let str = "50";`. Convert it to a number using `Number()`, subtract 10, and log the result.',
      expectedOutput: '40',
      solution: 'let str = "50"; let num = Number(str); console.log(num - 10);'
    },
    quiz: [
      { question: 'Why do we need to convert string numbers to actual numbers?', options: ['To save memory', 'Because `+` performs string concatenation instead of addition if either value is a string', 'To make them uppercase', 'Because strings cannot be logged'], answer: 'Because `+` performs string concatenation instead of addition if either value is a string' },
      { question: 'What does `Number("99")` return?', options: ['"99"', '99 (as a number)', 'NaN', 'undefined'], answer: '99 (as a number)' },
      { question: 'What does `Number("Apple")` return?', options: ['0', 'undefined', 'NaN', 'Error'], answer: 'NaN' },
      { question: 'What does `<input type="number">` return in JavaScript by default?', options: ['A Number', 'A Boolean', 'A String', 'An Object'], answer: 'A String' },
      { question: 'What is the shorthand for `Number("5")`?', options: ['"5"()', '#5', '+"5"', '-5'], answer: '+"5"' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `Number(x)` and `new Number(x)`?', a: '`Number(x)` is a function that performs type conversion, returning a primitive number. `new Number(x)` is a constructor that returns a Number Object, which is generally discouraged as it complicates equality comparisons (`typeof` will be "object", not "number").' }
    ],
    summary: ['Converts data to Numbers.', 'Prevents string concatenation bugs.', 'Returns `NaN` if invalid.'],
    references: commonReferences
  },

  'js_parseint': {
    isStructured: true,
    title: '58. parseInt()',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: 'The `parseInt()` function parses a string argument and returns an integer (whole number). It strips away decimals and non-numeric characters trailing the number.',
    whyUseIt: 'When dealing with CSS values (like "15px") or when you strictly need a whole number and want to drop decimals without rounding.',
    syntax: 'parseInt(string)',
    codeExample: 'console.log(parseInt("10"));\nconsole.log(parseInt("10.99"));\nconsole.log(parseInt("15px"));\nconsole.log(parseInt("width: 20"));',
    expectedOutput: '10\n10\n15\nNaN',
    explanation: [
      { code: 'parseInt("10.99")', desc: 'Drops the decimal. It does NOT round up. It returns 10.' },
      { code: 'parseInt("15px")', desc: 'Reads from left to right. Stops when it hits "p". Returns 15.' },
      { code: 'parseInt("width: 20")', desc: 'Starts with "w" (not a number), so it immediately fails and returns NaN.' }
    ],
    realWorldExample: 'Extracting the numeric value from a DOM element\'s computed style. E.g., converting `element.style.marginTop = "25px"` to the number `25`.',
    commonMistakes: [
      { error: 'Assuming it rounds numbers', code: 'parseInt("5.9")', suffix: 'It returns 5, not 6. It simply chops off (truncates) the decimal part.' }
    ],
    bestPractices: ['Use `parseInt(value, 10)` (adding the radix 10 as the second argument) to ensure the engine always parses it in base-10 (decimal), preventing bugs with leading zeros in older environments.'],
    practiceExercise: {
      task: 'Declare `let weight = "200.5kg";`. Extract the integer using `parseInt()` and log it.',
      expectedOutput: '200',
      solution: 'let weight = "200.5kg"; console.log(parseInt(weight));'
    },
    quiz: [
      { question: 'What does `parseInt("3.14")` return?', options: ['3.14', '3', '4', 'NaN'], answer: '3' },
      { question: 'What does `parseInt("100px")` return?', options: ['100px', '100', '0', 'NaN'], answer: '100' },
      { question: 'What does `parseInt("px100")` return?', options: ['100', '0', 'NaN', 'Error'], answer: 'NaN' },
      { question: 'Does `parseInt()` round numbers up?', options: ['Yes', 'No, it truncates (chops off) the decimal', 'Only if it is above .5', 'Only in strict mode'], answer: 'No, it truncates (chops off) the decimal' },
      { question: 'What is the purpose of the second argument in `parseInt(str, radix)`?', options: ['To set the maximum limit', 'To define the numerical base (e.g., 10 for decimal, 2 for binary)', 'To round the number', 'To add trailing zeros'], answer: 'To define the numerical base (e.g., 10 for decimal, 2 for binary)' }
    ],
    interviewQuestions: [
      { q: 'What is the main difference between `Number("10px")` and `parseInt("10px")`?', a: '`Number("10px")` tries to convert the ENTIRE string, fails because of the "px", and returns `NaN`. `parseInt("10px")` reads left-to-right, stopping at the first non-number character, successfully returning `10`.' }
    ],
    summary: ['Returns whole numbers.', 'Truncates decimals (no rounding).', 'Ignores trailing text (e.g., "px").'],
    references: commonReferences
  },

  'js_parsefloat': {
    isStructured: true,
    title: '59. parseFloat()',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: 'The `parseFloat()` function parses a string argument and returns a floating-point number (a number with a decimal). Like `parseInt()`, it ignores trailing text.',
    whyUseIt: 'When you need to extract numerical data that includes decimals from strings, like parsing a price string ("$19.99").',
    syntax: 'parseFloat(string)',
    codeExample: 'console.log(parseFloat("10.99"));\nconsole.log(parseFloat("3.14rem"));\nconsole.log(parseFloat("20"));\nconsole.log(parseFloat("$9.99"));',
    expectedOutput: '10.99\n3.14\n20\nNaN',
    explanation: [
      { code: 'parseFloat("10.99")', desc: 'Successfully keeps the decimal.' },
      { code: 'parseFloat("3.14rem")', desc: 'Reads the number, stops at "r". Returns 3.14.' },
      { code: 'parseFloat("$9.99")', desc: 'Fails immediately because the first character "$" is not a number. Returns NaN.' }
    ],
    realWorldExample: 'Scraping price data from an HTML page (`<span id="price">19.99 USD</span>`) and using `parseFloat` to extract the `19.99` so you can apply a 10% discount to it.',
    commonMistakes: [
      { error: 'Using it on strings starting with symbols', code: 'parseFloat("€5.50")', suffix: 'It will return NaN. You must remove/replace the currency symbol before parsing.' }
    ],
    bestPractices: ['If you are certain the string contains NO letters (e.g., "10.5"), simply using `Number(val)` or `+val` is slightly faster than `parseFloat()`.'],
    practiceExercise: {
      task: 'Declare `let measurement = "12.75cm";`. Use `parseFloat()` to extract the number, add 2 to it, and log the result.',
      expectedOutput: '14.75',
      solution: 'let measurement = "12.75cm"; let num = parseFloat(measurement); console.log(num + 2);'
    },
    quiz: [
      { question: 'What is the difference between `parseInt()` and `parseFloat()`?', options: ['They are exactly the same', '`parseInt` keeps decimals, `parseFloat` chops them off', '`parseInt` chops off decimals, `parseFloat` keeps them', '`parseFloat` only works on CSS'], answer: '`parseInt` chops off decimals, `parseFloat` keeps them' },
      { question: 'What does `parseFloat("5.55abc")` return?', options: ['5', '5.55', 'NaN', 'Error'], answer: '5.55' },
      { question: 'What does `parseFloat("abc5.55")` return?', options: ['5.55', '0', 'NaN', 'Error'], answer: 'NaN' },
      { question: 'What does `parseFloat("10")` return?', options: ['10.0', '10', 'NaN', '0'], answer: '10' },
      { question: 'When would `Number()` be preferred over `parseFloat()`?', options: ['When dealing with "10px"', 'When you want strict conversion and expect NO letters in the string', 'When you want to round up', 'You should never use Number()'], answer: 'When you want strict conversion and expect NO letters in the string' }
    ],
    interviewQuestions: [
      { q: 'How would you extract the number from "$1,999.50"?', a: 'You cannot use `parseFloat()` directly because it starts with `$` and the `,` breaks the parsing. You must first replace them: `parseFloat(str.replace("$", "").replace(",", ""))`.' }
    ],
    summary: ['Returns decimal numbers.', 'Ignores trailing text.', 'Fails if string starts with a non-number.'],
    references: commonReferences
  },

  'js_isnan': {
    isStructured: true,
    title: '60. Number.isNaN()',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: '`Number.isNaN()` determines whether the passed value is specifically the value `NaN` (Not a Number) and its type is `Number`. It is the safest way to check for `NaN`.',
    whyUseIt: 'When converting strings to numbers, or performing math operations, things can fail resulting in `NaN`. You need a reliable way to check if the result is invalid before continuing.',
    syntax: 'Number.isNaN(value)',
    codeExample: 'let badMath = "Apple" / 2;\nconsole.log(badMath); // NaN\n\nif (Number.isNaN(badMath)) {\n  console.log("Error: Calculation failed.");\n}',
    expectedOutput: 'NaN\n"Error: Calculation failed."',
    explanation: [
      { code: '"Apple" / 2', desc: 'You cannot divide a word by 2. The result is NaN.' },
      { code: 'Number.isNaN(badMath)', desc: 'Checks if the variable strictly holds the NaN value. Returns true.' }
    ],
    realWorldExample: 'Validating form input. If a user types "Bob" in an "Age" field, `parseInt("Bob")` yields `NaN`. You check `Number.isNaN()` and display a "Please enter a valid number" error.',
    commonMistakes: [
      { error: 'Comparing NaN to NaN directly', code: 'if (badMath === NaN)', suffix: 'In JavaScript, `NaN` does NOT equal `NaN`. `NaN === NaN` evaluates to false! You MUST use the `.isNaN()` method to check it.' }
    ],
    bestPractices: ['Always use the modern `Number.isNaN(val)` instead of the older global `isNaN(val)` function, as the global one tries to convert the value to a number first, leading to confusing bugs.'],
    practiceExercise: {
      task: 'Declare `let result = Number("Hi");`. Write an `if` statement using `Number.isNaN()`. If true, log "Invalid format".',
      expectedOutput: '"Invalid format"',
      solution: 'let result = Number("Hi"); if (Number.isNaN(result)) { console.log("Invalid format"); }'
    },
    quiz: [
      { question: 'What does NaN stand for?', options: ['Not a Null', 'Not a Name', 'Not a Node', 'Not a Number'], answer: 'Not a Number' },
      { question: 'What does `NaN === NaN` evaluate to?', options: ['true', 'false', 'undefined', 'Syntax Error'], answer: 'false' },
      { question: 'What is the only reliable way to check if a value is NaN?', options: ['val == NaN', 'val === "NaN"', 'Number.isNaN(val)', 'typeof val == "NaN"'], answer: 'Number.isNaN(val)' },
      { question: 'Why is `Number.isNaN()` preferred over the global `isNaN()`?', options: ['It is shorter to type', 'It does not coerce (convert) the value first, making it strictly accurate', 'It is the only one that works on Macs', 'It is faster'], answer: 'It does not coerce (convert) the value first, making it strictly accurate' },
      { question: 'What is the `typeof NaN`?', options: ['undefined', 'string', 'object', 'number (Ironically, the type of "Not a Number" is Number)'], answer: 'number (Ironically, the type of "Not a Number" is Number)' }
    ],
    interviewQuestions: [
      { q: 'Explain the difference between `isNaN("Hello")` and `Number.isNaN("Hello")`.', a: 'The global `isNaN("Hello")` coerces the string to a number (which becomes NaN), so it returns `true`. The modern `Number.isNaN("Hello")` strictly checks if the value is ALREADY the NaN primitive. Since the value is a string, it returns `false`. This strictness makes it much safer.' }
    ],
    summary: ['Checks specifically for `NaN`.', 'Never use `=== NaN`.', 'Use `Number.isNaN()` over global `isNaN()`.'],
    references: commonReferences
  },

  'js_math_round_floor_ceil': {
    isStructured: true,
    title: '61-63. Math.round(), Math.floor(), Math.ceil()',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'These are built-in methods on the `Math` object used to remove decimals and return integers, but they do so using different rounding rules.',
    whyUseIt: 'You can\'t sell 2.5 tickets or have 3.14 users. You must round numbers logically depending on the situation (e.g., always rounding up for page pagination).',
    syntax: 'Math.round(x)\nMath.floor(x)\nMath.ceil(x)',
    codeExample: 'let num = 4.5;\n\nconsole.log(Math.round(num)); // 5 (Standard rounding)\nconsole.log(Math.floor(num)); // 4 (Always rounds down)\nconsole.log(Math.ceil(num));  // 5 (Always rounds up)',
    expectedOutput: '5\n4\n5',
    explanation: [
      { code: 'Math.round(4.5)', desc: 'Standard math rules: .5 and above rounds UP, below .5 rounds DOWN.' },
      { code: 'Math.floor(4.9)', desc: 'Floor pushes the number DOWN to the nearest integer, regardless of the decimal. (4.9 becomes 4).' },
      { code: 'Math.ceil(4.1)', desc: 'Ceiling pushes the number UP to the nearest integer. (4.1 becomes 5).' }
    ],
    realWorldExample: 'Pagination. If you have 21 items and show 10 per page. `21 / 10 = 2.1`. You must use `Math.ceil(2.1)` to get `3` pages. A 3rd page is required to hold that 1 remaining item.',
    commonMistakes: [
      { error: 'Using the wrong method for negative numbers', code: 'Math.floor(-4.2)', suffix: 'Floor always goes DOWN towards negative infinity. Therefore, `Math.floor(-4.2)` is `-5`, not `-4`!' }
    ],
    bestPractices: ['Use `Math.floor()` when generating random numbers (array indexes). Use `Math.ceil()` for layout calculations like pagination grids.'],
    practiceExercise: {
      task: 'Declare `let x = 7.2;`. Log the `Math.ceil()` of this number.',
      expectedOutput: '8',
      solution: 'let x = 7.2; console.log(Math.ceil(x));'
    },
    quiz: [
      { question: 'Which method always rounds a number DOWN?', options: ['Math.ceil()', 'Math.round()', 'Math.floor()', 'Math.down()'], answer: 'Math.floor()' },
      { question: 'What does `Math.round(2.49)` return?', options: ['2', '3', '2.5', 'NaN'], answer: '2' },
      { question: 'What does `Math.ceil(5.01)` return?', options: ['5', '6', '5.1', 'NaN'], answer: '6' },
      { question: 'If you have 11 items and fit 5 per box, what method gives you the total number of boxes needed (3)?', options: ['Math.floor(11/5)', 'Math.round(11/5)', 'Math.ceil(11/5)', 'parseInt(11/5)'], answer: 'Math.ceil(11/5)' },
      { question: 'What does `Math.floor(-2.5)` return?', options: ['-2', '-3', '2', '3'], answer: '-3' }
    ],
    interviewQuestions: [
      { q: 'Is there a method to just chop off the decimal entirely, regardless of whether it is positive or negative, without rounding logic?', a: 'Yes, `Math.trunc(x)` was introduced in ES6. `Math.trunc(4.9)` is 4, and `Math.trunc(-4.9)` is -4.' }
    ],
    summary: ['round(): nearest integer.', 'floor(): always round down.', 'ceil(): always round up.'],
    references: commonReferences
  },

  'js_math_random': {
    isStructured: true,
    title: '64. Math.random()',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`Math.random()` returns a random floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but strictly exclusive of 1).',
    whyUseIt: 'Crucial for game development (enemy spawns, dice rolls, loot drops), generating random IDs, and selecting random items from arrays.',
    syntax: 'Math.random()',
    codeExample: 'console.log(Math.random());\n\n// Generate a random integer from 0 to 9\nlet randomZeroToNine = Math.floor(Math.random() * 10);\nconsole.log(randomZeroToNine);\n\n// Generate a random integer from 1 to 10\nlet oneToTen = Math.floor(Math.random() * 10) + 1;\nconsole.log(oneToTen);',
    expectedOutput: '0.845123984 (Example)\n7 (Example)\n10 (Example)',
    explanation: [
      { code: 'Math.random() * 10', desc: 'Produces a decimal from 0.000... to 9.999...' },
      { code: 'Math.floor(...)', desc: 'Chops off the decimal. Now you have an integer from 0 to 9.' },
      { code: '+ 1', desc: 'Shifts the entire range up by 1. Now it is 1 to 10.' }
    ],
    realWorldExample: 'Selecting a random winner from a list of contestants. `let winner = contestants[Math.floor(Math.random() * contestants.length)];`',
    commonMistakes: [
      { error: 'Using Math.round() instead of Math.floor()', code: 'Math.round(Math.random() * 10)', suffix: 'If you use `round()`, the numbers 0 and 10 will appear half as often as the numbers 1-9. Always use `Math.floor()` for even probability distribution.' }
    ],
    bestPractices: ['Create a reusable helper function: `const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;`'],
    practiceExercise: {
      task: 'Generate and log a random integer between 1 and 5 (inclusive).',
      expectedOutput: 'A number like 1, 2, 3, 4, or 5',
      solution: 'console.log(Math.floor(Math.random() * 5) + 1);'
    },
    quiz: [
      { question: 'What is the output range of `Math.random()`?', options: ['0 to 100', '1 to 10', '0.0 (inclusive) to 1.0 (exclusive)', 'Negative infinity to positive infinity'], answer: '0.0 (inclusive) to 1.0 (exclusive)' },
      { question: 'Can `Math.random()` ever return exactly 1.0?', options: ['Yes', 'No', 'Only sometimes', 'Only in strict mode'], answer: 'No' },
      { question: 'Why do we multiply `Math.random()` by a number?', options: ['To make it run faster', 'To scale the result up to a larger range (like 0 to 9)', 'To convert it to a string', 'To make it negative'], answer: 'To scale the result up to a larger range (like 0 to 9)' },
      { question: 'Which rounding method should be paired with `Math.random()` for fair probability?', options: ['Math.round()', 'Math.ceil()', 'Math.floor()', 'parseInt()'], answer: 'Math.floor()' },
      { question: 'If `Math.random()` generates 0.5, what does `Math.floor(0.5 * 10)` return?', options: ['0', '5', '5.0', '10'], answer: '5' }
    ],
    interviewQuestions: [
      { q: 'Is `Math.random()` cryptographically secure? Can I use it to generate passwords?', a: 'No, it is a pseudo-random number generator and is NOT secure. For passwords or security tokens, you must use the Web Crypto API: `window.crypto.getRandomValues()`.' }
    ],
    summary: ['Returns decimal between 0 and 0.999...', 'Multiply to scale range.', 'Use `floor()` for integers.'],
    references: commonReferences
  }
};
