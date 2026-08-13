const commonReferences = [
  { label: 'MDN Web Docs - JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
];

export const javascriptContentBatchMissing37 = {
  'js_api_questions': {
    isStructured: true,
    title: '291. API Questions',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'This section covers interview questions regarding the Fetch API, RESTful principles, HTTP methods, and handling network responses.',
    whyUseIt: 'Every modern web app communicates with a backend. If you don\'t understand how APIs work, HTTP status codes, or CORS, you cannot integrate a frontend with a database.',
    syntax: '// Q & A Format',
    codeExample: '// Example Question: How do you handle HTTP errors with fetch?\nfetch("https://api.example.com/data")\n  .then(response => {\n    // fetch only rejects on network failure, NOT on 404 or 500!\n    // You MUST check response.ok manually.\n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    return response.json();\n  })\n  .then(data => console.log(data))\n  .catch(error => console.error("Fetch failed:", error));',
    expectedOutput: 'Understanding of Fetch, HTTP verbs, and CORS.',
    explanation: [
      { code: 'response.ok', desc: 'A boolean indicating whether the HTTP status code was in the successful range (200-299).' },
      { code: 'catch()', desc: 'In the context of `fetch`, the catch block is ONLY triggered if the network completely fails (e.g., DNS error, no internet connection), or if you manually throw an error.' }
    ],
    realWorldExample: 'An interviewer asks: "If I use fetch() to request a user profile that doesn\'t exist, and the server returns a 404 Not Found, does the Promise reject and go to the .catch() block?" The answer is NO. It resolves successfully with a Response object containing a 404 status. You must handle it manually.',
    commonMistakes: [
      { error: 'Forgetting to parse JSON', code: 'const data = await fetch(url); console.log(data.id);', suffix: '`fetch` returns a Response stream, not the data itself. You must call `await response.json()` to parse the body stream into a JavaScript object.' }
    ],
    bestPractices: ['Always use try/catch blocks with async/await, and ALWAYS check `if (!response.ok)` immediately after the fetch call.'],
    practiceExercise: {
      task: 'Without coding: What HTTP method is conventionally used to UPDATE existing data on a server?',
      expectedOutput: 'PUT or PATCH.',
      solution: 'PUT (replaces the entire resource) or PATCH (updates partial fields of the resource).'
    },
    quiz: [
      { question: 'What does API stand for?', options: ['Application Programming Interface', 'Automated Program Integration', 'Applied Process Interaction', 'Application Protocol Interface'], answer: 'Application Programming Interface' },
      { question: 'What is the main difference between a GET request and a POST request?', options: ['GET is faster', 'GET is used to retrieve data. POST is used to send new data to the server (often including a body/payload)', 'GET is secure, POST is not', 'POST is only used for images'], answer: 'GET is used to retrieve data. POST is used to send new data to the server (often including a body/payload)' },
      { question: 'When using the Fetch API, in what scenario does the Promise actually reject (triggering the `.catch()` block)?', options: ['When the server returns a 404 (Not Found)', 'When the server returns a 500 (Internal Server Error)', 'Only on a network failure (like the user losing their wifi connection) or if the request is blocked', 'When the JSON is empty'], answer: 'Only on a network failure (like the user losing their wifi connection) or if the request is blocked' },
      { question: 'What is a CORS error?', options: ['Computer Operating Request System error', 'Cross-Origin Resource Sharing error. It happens when your browser blocks a request to a server that is on a different domain, because that server hasn\'t explicitly given your domain permission to access its data', 'A syntax error in your JSON', 'A database failure'], answer: 'Cross-Origin Resource Sharing error. It happens when your browser blocks a request to a server that is on a different domain, because that server hasn\'t explicitly given your domain permission to access its data' },
      { question: 'What does the HTTP status code 200 mean?', options: ['Not Found', 'Internal Server Error', 'OK (Success)', 'Unauthorized'], answer: 'OK (Success)' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between PUT and PATCH?', a: 'Both are used to update data. PUT is expected to send the ENTIRE object to replace the old one (if you omit the `age` field, it might get deleted). PATCH is used for partial updates (you only send the `age` field, and the rest of the object remains untouched).' }
    ],
    summary: ['Master HTTP verbs (GET, POST).', 'Fetch only rejects on network failures.', 'Understand CORS and Status Codes.'],
    references: commonReferences
  },
  'js_es6_questions': {
    isStructured: true,
    title: '292. ES6 Questions',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'ES6 (ECMAScript 2015) was the largest and most important update to the JavaScript language in its history. This section covers the key features introduced in ES6 that modern development relies on.',
    whyUseIt: 'Almost all code written today (especially React/Vue) uses ES6 syntax. Interviewers will ask ES6 questions to verify you aren\'t writing outdated, legacy JavaScript.',
    syntax: '// Q & A Format',
    codeExample: '// Example Question: ES6 Features Summary\n\n// 1. let/const instead of var\nconst name = "Alice";\n\n// 2. Arrow Functions\nconst greet = () => "Hello";\n\n// 3. Template Literals (Backticks)\nconst msg = `${greet()} ${name}`;\n\n// 4. Destructuring\nconst obj = { x: 1, y: 2 };\nconst { x, y } = obj;\n\n// 5. Spread/Rest Operator\nconst arr = [...[1, 2], 3];\n\n// 6. Default Parameters\nfunction multiply(a, b = 1) { return a * b; }\n\n// 7. Classes\nclass Person {}',
    expectedOutput: 'Fluency in modern ES6+ syntax.',
    explanation: [
      { code: 'Template Literals', desc: 'Using backticks (` `) allows for multi-line strings and easy variable interpolation (`${var}`) without messy `+` concatenation.' },
      { code: 'Default Parameters', desc: 'Allows you to initialize a function parameter with a default value if no value (or undefined) is passed to it.' }
    ],
    realWorldExample: 'You are asked to write a function that takes an options object. Instead of `function(opt) { const size = opt.size || 10; }` (old JS), you write `function({ size = 10 }) {}` (ES6 Destructuring + Default Params).',
    commonMistakes: [
      { error: 'Not transpiling ES6 for older browsers', code: '', suffix: 'While all modern browsers support ES6, if you are building an app that must run on Internet Explorer 11, you must use a tool like Babel to transpile your ES6 code back into ES5.' }
    ],
    bestPractices: ['Stop using `var`. Stop using string concatenation `+`. Stop using `function` for simple callbacks. fully embrace ES6.'],
    practiceExercise: {
      task: 'Without coding: What is the ES6 syntax to export a function named `utils` so it can be imported elsewhere?',
      expectedOutput: 'export default utils; OR export const utils...',
      solution: '`export const utils = () => {}` (Named) OR `export default utils` (Default).'
    },
    quiz: [
      { question: 'Which of the following was NOT introduced in ES6 (ECMAScript 2015)?', options: ['Arrow Functions', '`let` and `const`', 'Promises', 'The `var` keyword'], answer: 'The `var` keyword' },
      { question: 'What do Template Literals (using backticks) allow you to do that normal quotes do not?', options: ['They execute faster', 'They allow multi-line strings and variable interpolation using `${}`', 'They encrypt the string', 'They convert strings to numbers'], answer: 'They allow multi-line strings and variable interpolation using `${}`' },
      { question: 'What is a Default Parameter?', options: ['A parameter that cannot be changed', 'A fallback value assigned to a function parameter in case the caller does not provide that argument (e.g., `function(a = 10)`)', 'A parameter used by the DOM', 'A CSS default'], answer: 'A fallback value assigned to a function parameter in case the caller does not provide that argument (e.g., `function(a = 10)`)' },
      { question: 'What ES6 feature allows you to unpack values from arrays or properties from objects into distinct variables?', options: ['Spread Operator', 'Destructuring', 'Classes', 'Modules'], answer: 'Destructuring' },
      { question: 'Which ES6 feature was designed to solve "Callback Hell"?', options: ['Arrow Functions', 'Template Literals', 'Promises', 'Classes'], answer: 'Promises' }
    ],
    interviewQuestions: [
      { q: 'What is Babel?', a: 'Babel is a JavaScript compiler (transpiler). It takes modern ES6+ code (like Arrow Functions and Classes) and converts it backwards into older ES5 code so that older browsers (like Internet Explorer) can still understand and run it.' }
    ],
    summary: ['ES6 modernized JavaScript in 2015.', 'Introduced let, const, arrow functions, promises.', 'Template literals replace string concatenation.'],
    references: commonReferences
  },
  'js_output_based_questions': {
    isStructured: true,
    title: '293. Output-Based Questions',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Output-based questions are tricky code snippets where the interviewer asks "What will be printed to the console?". They are designed to test your knowledge of edge cases, hoisting, and coercion.',
    whyUseIt: 'These questions separate the coders who rely on trial-and-error from the engineers who actually understand how the JavaScript engine reads and executes code.',
    syntax: '// Q & A Format',
    codeExample: '// Trick Question 1: Type Coercion\nconsole.log(1 + "2" + "2");\n// Answer: "122" (1 is coerced to string, then concatenated)\n\nconsole.log(1 + +"2" + "2");\n// Answer: "32" (The unary + before "2" turns it into a number. 1 + 2 = 3. Then 3 + "2" = "32")\n\n// Trick Question 2: Scoping inside loops\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n// Answer: 3, 3, 3 \n// Because `var` is function scoped, the loop finishes (i becomes 3) BEFORE the setTimeouts execute, and they all reference the same `i`.',
    expectedOutput: 'Ability to read code like the JS Engine.',
    explanation: [
      { code: 'var in loops', desc: 'A classic trap. `var` leaks out of the block. By the time the async `setTimeout` runs, the loop is already over and `var` is at its max value. Changing it to `let` fixes this because `let` creates a new scope for every iteration.' },
      { code: 'Unary +', desc: 'Putting a `+` directly in front of a string (like `+"5"`) is a fast way to convert it to a number.' }
    ],
    realWorldExample: 'You will face these constantly in technical screens. They are the "riddles" of the JavaScript world.',
    commonMistakes: [
      { error: 'Assuming left-to-right math is simple', code: 'console.log("A" - "B" + "2");', suffix: '"A" - "B" results in `NaN` (Not a Number). Then `NaN + "2"` results in the string `"NaN2"`.' }
    ],
    bestPractices: ['Read the code slowly. Pay extreme attention to `var` vs `let`, missing `await` keywords, and combinations of strings and numbers using the `+` operator.'],
    practiceExercise: {
      task: 'Without coding: What is the output of `console.log(0 == false);` vs `console.log(0 === false);`?',
      expectedOutput: 'true, false',
      solution: '`true`, then `false`. `==` coerces `0` to a boolean (false). `===` checks types (Number vs Boolean), so it fails.'
    },
    quiz: [
      { question: 'What is the output of `console.log(typeof NaN)`?', options: ['"NaN"', '"undefined"', '"number" (Yes, "Not a Number" is technically of type number)', '"string"'], answer: '"number" (Yes, "Not a Number" is technically of type number)' },
      { question: 'What is the output of `console.log("5" - 3)`?', options: ['"53"', '2 (The `-` operator triggers numeric coercion, converting "5" to a number)', '"NaN"', 'Error'], answer: '2 (The `-` operator triggers numeric coercion, converting "5" to a number)' },
      { question: 'What is the output of: `let a = {}; let b = {}; console.log(a == b);`?', options: ['true', 'false (They are two distinct objects in memory with different reference addresses)', 'undefined', 'Error'], answer: 'false (They are two distinct objects in memory with different reference addresses)' },
      { question: 'What is the output of: `console.log(Math.max());`?', options: ['0', 'undefined', '-Infinity (Because without arguments, it defaults to the lowest possible value to start comparing against)', 'NaN'], answer: '-Infinity (Because without arguments, it defaults to the lowest possible value to start comparing against)' },
      { question: 'If you have a `for(var i=0; i<3; i++)` loop with a `setTimeout` inside printing `i`, why does it print `3, 3, 3` instead of `0, 1, 2`?', options: ['Because `setTimeout` is broken', 'Because `var` is function-scoped. The loop finishes instantly, setting `i` to 3. Then the 3 timeouts execute and all look at the exact same `i` variable', 'Because arrays start at 3', 'Because it runs in parallel'], answer: 'Because `var` is function-scoped. The loop finishes instantly, setting `i` to 3. Then the 3 timeouts execute and all look at the exact same `i` variable' }
    ],
    interviewQuestions: [
      { q: 'What is the output of `console.log(1 < 2 < 3)` and `console.log(3 > 2 > 1)`?', a: '`1 < 2 < 3` is `true`. `3 > 2 > 1` is `false`! Why? It evaluates left to right. `3 > 2` evaluates to `true`. Then it evaluates `true > 1`. `true` is coerced to `1`, and `1 > 1` is `false`.' }
    ],
    summary: ['Master type coercion quirks.', 'Watch out for `var` in loops.', 'Remember Object reference equality.'],
    references: commonReferences
  },
  'js_coding_interview_questions': {
    isStructured: true,
    title: '294. Coding Interview Questions',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'This section covers classic algorithmic coding challenges (like Palindrome, FizzBuzz, or Anagram checking) that test your logic, loop mastery, and string/array manipulation skills.',
    whyUseIt: 'While modern web dev is mostly React and APIs, companies still use algorithms to test your pure problem-solving ability under pressure.',
    syntax: '// Q & A Format',
    codeExample: '// Example Question: Check if a string is a Palindrome (reads same forwards and backwards)\n\n// Solution 1: Built-in methods (Cleanest)\nfunction isPalindrome(str) {\n  const cleanStr = str.toLowerCase().replace(/[\\W_]/g, ""); // Remove spaces/punctuation\n  const reversed = cleanStr.split("").reverse().join("");\n  return cleanStr === reversed;\n}\n\n// Solution 2: Two Pointers (Most efficient, O(N/2) time)\nfunction isPalindromeFast(str) {\n  const s = str.toLowerCase().replace(/[\\W_]/g, "");\n  let left = 0;\n  let right = s.length - 1;\n  \n  while (left < right) {\n    if (s[left] !== s[right]) return false;\n    left++;\n    right--;\n  }\n  return true;\n}',
    expectedOutput: 'Ability to write algorithms on a whiteboard or in an IDE.',
    explanation: [
      { code: 'split("").reverse().join("")', desc: 'The classic JavaScript idiom for reversing a string. Turn it into an array, reverse the array, turn it back into a string.' },
      { code: 'Two Pointers', desc: 'A common algorithmic pattern. Instead of creating new strings (which takes memory), you just look at the first character and the last character, and move inward.' }
    ],
    realWorldExample: 'You are on a Zoom call, sharing your screen, and the interviewer says "Write a function that prints numbers 1 to 100. If divisible by 3, print Fizz. By 5, Buzz. By both, FizzBuzz." (The legendary FizzBuzz question).',
    commonMistakes: [
      { error: 'Checking FizzBuzz in the wrong order', code: 'if (i%3===0) print("Fizz"); else if (i%3===0 && i%5===0) print("FizzBuzz");', suffix: 'If a number is 15, the first `if` (divisible by 3) catches it, prints "Fizz", and exits. It never reaches the FizzBuzz check! The most restrictive condition (divisible by both) MUST go first.' }
    ],
    bestPractices: ['Before writing code, talk out loud. Explain your approach. Interviewers care more about how you think than if you memorize the exact syntax of `.replace()`.'],
    practiceExercise: {
      task: 'Without coding: How do you find the maximum number in an array `[1, 5, 2]` without a loop?',
      expectedOutput: 'Use Math.max with spread.',
      solution: '`Math.max(...[1, 5, 2])`. The spread operator unpacks the array.'
    },
    quiz: [
      { question: 'What is the standard JavaScript one-liner to reverse a string?', options: ['string.reverse()', 'string.split("").reverse().join("")', 'string.flip()', 'Math.reverse(string)'], answer: 'string.split("").reverse().join("")' },
      { question: 'In the classic FizzBuzz problem, which condition must you check FIRST inside the loop?', options: ['If it is divisible by 3', 'If it is divisible by 5', 'If it is divisible by BOTH 3 and 5 (15)', 'If it is an even number'], answer: 'If it is divisible by BOTH 3 and 5 (15)' },
      { question: 'How do you check if a number is divisible by 3?', options: ['if (num / 3 == 0)', 'if (num % 3 === 0) (Using the Modulo operator to check if the remainder is 0)', 'if (num // 3)', 'if (Math.div(num, 3))'], answer: 'if (num % 3 === 0) (Using the Modulo operator to check if the remainder is 0)' },
      { question: 'What is an Anagram?', options: ['A shape', 'A word formed by rearranging the letters of a different word (e.g., "listen" and "silent")', 'A math formula', 'A type of array'], answer: 'A word formed by rearranging the letters of a different word (e.g., "listen" and "silent")' },
      { question: 'How can you easily check if two strings are anagrams of each other?', options: ['Sort the letters of both strings alphabetically and see if the resulting strings are equal (e.g., `str.split("").sort().join("")`)', 'Check their lengths', 'Add them together', 'Use `.includes()`'], answer: 'Sort the letters of both strings alphabetically and see if the resulting strings are equal (e.g., `str.split("").sort().join("")`)' }
    ],
    interviewQuestions: [
      { q: 'Write a function to remove falsy values from an array.', a: '`const clean = arr.filter(Boolean);`. Passing the `Boolean` constructor directly to `filter` automatically returns true for truthy values and false for falsy values, stripping out nulls, undefined, 0, etc.' }
    ],
    summary: ['Master String manipulation.', 'Understand Modulo `%` logic.', 'Practice Two-Pointer patterns.'],
    references: commonReferences
  },
  'js_common_javascript_mistakes': {
    isStructured: true,
    title: '295. Common JavaScript Mistakes',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'This section covers the most frequent, headache-inducing mistakes that developers (both junior and senior) make when writing JavaScript.',
    whyUseIt: 'Learning from the mistakes of others saves you hours of debugging. Recognizing these patterns instantly elevates the quality of your code.',
    syntax: '// Best Practices',
    codeExample: '// 1. The "this" context loss\nconst obj = {\n  name: "Alice",\n  greet: function() { console.log(this.name); }\n};\n// Mistake:\nsetTimeout(obj.greet, 1000); // Prints: undefined\n// Fix:\nsetTimeout(() => obj.greet(), 1000); // Prints: Alice\n\n\n// 2. Accidental Global Variables\nfunction calculate() {\n  // Mistake: Forgot "const" or "let"\n  total = 50 + 50;\n}\ncalculate();\nconsole.log(total); // 100! (total leaked into the global window object!)\n\n\n// 3. Mutating State (Especially in React)\nconst arr = [1, 2];\n// Mistake (Mutation):\narr.push(3);\n// Fix (Immutability):\nconst newArr = [...arr, 3];',
    expectedOutput: 'Fewer bugs, cleaner code.',
    explanation: [
      { code: 'total = 100', desc: 'If you forget `let` or `const`, JavaScript assumes you meant `window.total = 100`. This creates a global variable that can accidentally overwrite other variables and cause massive security/stability issues.' },
      { code: 'Mutation', desc: 'Directly altering an array or object in memory. Modern development strictly avoids this in favor of creating new copies.' }
    ],
    realWorldExample: 'You spend 3 hours trying to figure out why your React UI isn\'t updating when you add an item to a list. You finally realize you used `list.push(item)` instead of `setList([...list, item])`. You made the Mutation mistake.',
    commonMistakes: [
      { error: 'Relying on Automatic Semicolon Insertion (ASI)', code: 'return \n { a: 1 }', suffix: 'If you put a line break immediately after `return`, JavaScript automatically inserts a invisible semicolon there (`return;`). The object below it is ignored, and the function returns `undefined`. Always put the opening brace on the SAME line as `return`.' }
    ],
    bestPractices: ['Use "Strict Mode". Put `"use strict";` at the top of your JS files. It forces JavaScript to throw fatal errors for bad practices (like accidental global variables) instead of failing silently.'],
    practiceExercise: {
      task: 'Without coding: Why is `typeof null` returning "object" considered a mistake?',
      expectedOutput: 'It is a bug in early JS.',
      solution: 'It was a bug in the very first version of JavaScript created in 10 days. It was never fixed because fixing it would break thousands of websites that relied on the bug.'
    },
    quiz: [
      { question: 'What happens if you assign a value to a variable without declaring it first with `let`, `const`, or `var` (e.g., `count = 5;`)?', options: ['It throws a syntax error', 'It creates an accidental Global Variable attached to the `window` object, which is highly dangerous', 'It creates a constant', 'It deletes the variable'], answer: 'It creates an accidental Global Variable attached to the `window` object, which is highly dangerous' },
      { question: 'How can you force JavaScript to throw an error if you accidentally create a global variable?', options: ['Use a try/catch', 'Put `"use strict";` at the top of your file/function', 'Use React', 'Use TypeScript'], answer: 'Put `"use strict";` at the top of your file/function' },
      { question: 'What is the risk of putting a line break immediately after a `return` keyword?', options: ['The code runs faster', 'JavaScript\'s Automatic Semicolon Insertion (ASI) will insert a semicolon after `return`, causing the function to instantly return `undefined` and ignore the rest of the code', 'It creates a loop', 'Nothing, it is fine'], answer: 'JavaScript\'s Automatic Semicolon Insertion (ASI) will insert a semicolon after `return`, causing the function to instantly return `undefined` and ignore the rest of the code' },
      { question: 'Why is `arr.push(newVal)` considered a mistake in state-based frameworks like React?', options: ['Because `push` is slow', 'Because it MUTATES the original array in memory. React relies on Immutability (creating new array references) to know when to trigger a re-render', 'Because arrays cannot hold state', 'Because `push` deletes data'], answer: 'Because it MUTATES the original array in memory. React relies on Immutability (creating new array references) to know when to trigger a re-render' },
      { question: 'If you pass an object method as a callback (e.g., `setTimeout(obj.sayHi, 1000)`), what commonly happens to the `this` keyword inside that method?', options: ['It becomes encrypted', 'It loses its context and defaults to the Global `window` object (or undefined in strict mode), causing errors if the method relies on `this.property`', 'It locks the browser', 'Nothing, it works perfectly'], answer: 'It loses its context and defaults to the Global `window` object (or undefined in strict mode), causing errors if the method relies on `this.property`' }
    ],
    interviewQuestions: [
      { q: 'How do you fix a lost `this` context when passing a method as a callback?', a: 'You have three options: 1) Use an arrow function wrapper: `() => obj.method()`. 2) Use the `.bind()` method: `obj.method.bind(obj)`. 3) Define the original method inside the object using an arrow function.' }
    ],
    summary: ['Avoid accidental globals (use Strict Mode).', 'Watch out for lost `this` context.', 'Do not mutate data structures.'],
    references: commonReferences
  }
};
