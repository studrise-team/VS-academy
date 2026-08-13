const commonReferences = [
  { label: 'MDN Web Docs - ES6 Features', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference' },
  { label: 'W3Schools JavaScript ES6', url: 'https://www.w3schools.com/js/js_es6.asp' }
];

export const javascriptContentBatch13 = {
  'js_let_and_const': {
    isStructured: true,
    title: '172. let and const',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`let` and `const` were introduced in ES6 (ECMAScript 2015) as modern replacements for `var`. `let` allows you to declare variables that can change later. `const` allows you to declare variables that can NEVER be reassigned.',
    whyUseIt: 'The old `var` keyword had confusing scoping rules (it was function-scoped, not block-scoped) and allowed accidental redeclarations. `let` and `const` make code safer, more predictable, and less prone to bugs.',
    syntax: 'let variableName = value;\nconst CONSTANT_NAME = value;',
    codeExample: 'let score = 10;\nscore = 15; // Valid, score can change\n\nconst API_KEY = "xyz123";\n// API_KEY = "abc"; // ERROR! Cannot reassign a const\n\nif (true) {\n  let blockScoped = "I only exist inside these braces";\n}\n// console.log(blockScoped); // ERROR! Not defined here.',
    expectedOutput: '(No visible output if successful, but errors if rules are broken)',
    explanation: [
      { code: 'let score = 10;', desc: 'Use `let` for variables like counters, scores, or user input that will change over time.' },
      { code: 'const API_KEY', desc: 'Use `const` for configurations, imported modules, or elements selected from the DOM that should never be overwritten.' },
      { code: 'blockScoped', desc: 'Both `let` and `const` are BLOCK-scoped. They die as soon as the `{}` block they were created in ends.' }
    ],
    realWorldExample: 'Selecting a form element from the DOM: `const form = document.getElementById("form");`. You don\'t want to accidentally overwrite the `form` variable with a string later, so `const` protects it.',
    commonMistakes: [
      { error: 'Assuming const objects cannot change', code: 'const user = { age: 20 };\nuser.age = 21; // This works!', suffix: '`const` prevents REASSIGNING the variable name to a new value (like `user = "Bob"`). It does NOT freeze the object inside it. You can still modify the properties of a `const` object or array.' }
    ],
    bestPractices: ['Default to `const` for EVERYTHING. Only switch to `let` if you realize the variable explicitly needs to change (like a loop counter). Never use `var` in modern code.'],
    practiceExercise: {
      task: 'Declare a constant for your birth year. Declare a `let` for your current age. Log both.',
      expectedOutput: '(Your year and age)',
      solution: 'const birthYear = 2000; let age = 25; console.log(birthYear, age);'
    },
    quiz: [
      { question: 'Which keyword allows you to change a variable\'s value later?', options: ['const', 'let', 'static', 'fixed'], answer: 'let' },
      { question: 'What happens if you try to reassign a `const` variable? (e.g., const x = 1; x = 2;)', options: ['It works fine', 'It throws a TypeError', 'It changes the type to let', 'It returns undefined'], answer: 'It throws a TypeError' },
      { question: 'What does "block-scoped" mean?', options: ['The variable is available globally', 'The variable only exists within the curly braces {} it was defined in', 'The variable cannot be changed', 'The variable blocks other code from running'], answer: 'The variable only exists within the curly braces {} it was defined in' },
      { question: 'Can you change the properties of an object declared with `const`?', options: ['Yes', 'No', 'Only if the properties are strings', 'Only in strict mode'], answer: 'Yes' },
      { question: 'Which keyword should you use by default in modern JavaScript?', options: ['var', 'let', 'const', 'None'], answer: 'const' }
    ],
    interviewQuestions: [
      { q: 'Explain the difference between `var`, `let`, and `const` regarding "Hoisting".', a: 'All three are hoisted to the top of their scope. However, `var` is initialized with `undefined`, so you can access it before declaration (getting undefined). `let` and `const` are placed in a "Temporal Dead Zone" and will throw a ReferenceError if accessed before their actual declaration line.' }
    ],
    summary: ['Use `const` by default.', 'Use `let` if the value will change.', 'Both are block-scoped.'],
    references: commonReferences
  },

  'js_template_literals': {
    isStructured: true,
    title: '174. Template Literals',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Template Literals are a new way to create strings in ES6. Instead of using single or double quotes, you use backticks (\\`). They allow for easy multi-line strings and string interpolation (embedding variables directly inside the string).',
    whyUseIt: 'Before ES6, combining strings and variables meant a lot of clunky plus signs and quotes (`"Hello " + name + ", you are " + age`). Template literals make formatting strings much cleaner and easier to read.',
    syntax: 'const string = `Text ${variable} text`;',
    codeExample: 'const name = "Alice";\nconst items = 5;\n\n// Old way:\nconst oldMsg = "Hi " + name + ", you have " + items + " items.";\n\n// ES6 Template Literal way:\nconst newMsg = `Hi ${name}, you have ${items} items.`;\n\n// Multi-line\nconst email = `\n  Hello ${name},\n  Thank you for joining!\n`;\n\nconsole.log(newMsg);',
    expectedOutput: '"Hi Alice, you have 5 items."',
    explanation: [
      { code: '\\`Hi...\\`', desc: 'Note the backticks (usually above the Tab key), not regular quotes.' },
      { code: '${name}', desc: 'The dollar sign and curly braces allow you to inject any JavaScript variable or expression directly into the string.' }
    ],
    realWorldExample: 'Generating HTML in JavaScript. `const card = \\`<div class="card"> <h2>${user.name}</h2> </div>\\`;`',
    commonMistakes: [
      { error: 'Using regular quotes', code: 'const msg = "Hi ${name}";', suffix: 'If you use single or double quotes, JavaScript will literally print "${name}" to the screen. Interpolation ONLY works with backticks.' }
    ],
    bestPractices: ['Use template literals whenever you need to concatenate variables into a string. It is cleaner and less prone to spacing errors.'],
    practiceExercise: {
      task: 'Given `let item = "Apple";` and `let price = 2;`. Use a template literal to log "An Apple costs $2".',
      expectedOutput: '"An Apple costs $2"',
      solution: 'let item = "Apple"; let price = 2; console.log(`An ${item} costs $${price}`);'
    },
    quiz: [
      { question: 'Which character is used to create a Template Literal?', options: ['Single quote (\')', 'Double quote (")', 'Backtick (`)', 'Tilde (~)'], answer: 'Backtick (`)' },
      { question: 'What syntax is used to inject a variable into a template literal?', options: ['#{var}', '${var}', '{{var}}', '+ var +'], answer: '${var}' },
      { question: 'Can template literals span multiple lines?', options: ['Yes, automatically', 'No', 'Only if you use \\n', 'Only in React'], answer: 'Yes, automatically' },
      { question: 'What will `` `2 + 2 = ${2+2}` `` output?', options: ['"2 + 2 = ${2+2}"', '"2 + 2 = 2+2"', '"2 + 2 = 4"', 'Error'], answer: '"2 + 2 = 4"' },
      { question: 'Why are template literals preferred over string concatenation (using +)?', options: ['They run faster', 'They are more readable and less prone to spacing errors', 'They use less memory', 'They encrypt the string'], answer: 'They are more readable and less prone to spacing errors' }
    ],
    interviewQuestions: [
      { q: 'Can you call a function inside a template literal interpolation?', a: 'Yes. Any valid JavaScript expression can go inside `${}`. For example: `Hello ${getName()}`.' }
    ],
    summary: ['Use backticks (\\`).', 'Inject variables using `${}`.', 'Supports multi-line strings natively.'],
    references: commonReferences
  },

  'js_spread_rest': {
    isStructured: true,
    title: '176-177. Spread & Rest Operators',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'Both operators use the exact same syntax: three dots (`...`). The Spread operator EXPANDS an array or object into individual elements. The Rest operator COLLECTS multiple elements and condenses them into a single array.',
    whyUseIt: 'Spread is perfect for quickly copying arrays or combining objects without mutating the originals (crucial in React). Rest is perfect for functions that need to accept an unknown number of arguments.',
    syntax: 'Spread: [...array1, ...array2] or {...obj1, ...obj2}\nRest: function myFunc(...args)',
    codeExample: '// --- SPREAD (Expands) ---\nconst arr1 = [1, 2];\nconst arr2 = [...arr1, 3, 4]; // Copies arr1 and adds 3, 4\nconsole.log(arr2);\n\n// --- REST (Collects) ---\nfunction sumAll(...numbers) {\n  // numbers is an array of whatever was passed in\n  return numbers.reduce((total, num) => total + num, 0);\n}\nconsole.log(sumAll(5, 10, 15));',
    expectedOutput: '[1, 2, 3, 4]\n30',
    explanation: [
      { code: '[...arr1, 3, 4]', desc: 'Spread takes the items OUT of `arr1` and spreads them into the new array.' },
      { code: 'function sumAll(...numbers)', desc: 'Rest takes the 3 separate arguments (5, 10, 15) and bundles them into one array named `numbers`.' }
    ],
    realWorldExample: 'Spread is used constantly in React state management to update objects: `setUser({ ...user, age: 26 });` (Keep all existing user properties, but overwrite age).',
    commonMistakes: [
      { error: 'Putting Rest parameter in the wrong place', code: 'function doMath(...numbers, multiplier)', suffix: 'A Rest parameter MUST be the very last parameter in the function definition, because it collects "the rest" of the arguments.' }
    ],
    bestPractices: ['Use the Spread operator to create shallow copies of arrays `const copy = [...original];` instead of using older methods like `slice()`.'],
    practiceExercise: {
      task: 'Given `const a = [1, 2];` and `const b = [3, 4];`. Use the spread operator to create a new array `c` that combines them into `[1, 2, 3, 4]`.',
      expectedOutput: '[1, 2, 3, 4]',
      solution: 'const a = [1,2]; const b = [3,4]; const c = [...a, ...b]; console.log(c);'
    },
    quiz: [
      { question: 'What symbol is used for both Spread and Rest operators?', options: ['&&', '||', '...', '***'], answer: '...' },
      { question: 'What does the Spread operator do?', options: ['Multiplies numbers', 'Expands iterables (like arrays) into individual elements', 'Combines elements into an array', 'Deletes an array'], answer: 'Expands iterables (like arrays) into individual elements' },
      { question: 'What does the Rest operator do?', options: ['Deletes the rest of the code', 'Pauses execution', 'Collects multiple elements into a single array', 'Expands an array'], answer: 'Collects multiple elements into a single array' },
      { question: 'Where is the Rest operator used?', options: ['Inside array brackets', 'In function parameter definitions', 'In CSS', 'Inside object literals'], answer: 'In function parameter definitions' },
      { question: 'Which creates a safe copy of an array using spread?', options: ['const copy = array;', 'const copy = [...array];', 'const copy = ...array;', 'const copy = array...;'], answer: 'const copy = [...array];' }
    ],
    interviewQuestions: [
      { q: 'Is the Spread operator a deep copy or a shallow copy?', a: 'It is a shallow copy. If you spread an array of objects, the new array has different references for the array itself, but the objects INSIDE the array still point to the same memory locations.' }
    ],
    summary: ['Spread (`...`) unpacks elements.', 'Rest (`...`) packs elements into an array.', 'Spread is great for copying and merging.'],
    references: commonReferences
  },

  'js_modules_import_export': {
    isStructured: true,
    title: '179-181. Modules (import / export)',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'JavaScript Modules allow you to break up your code into separate files. You use `export` to make variables or functions available outside of a file, and `import` to bring them into another file.',
    whyUseIt: 'If you put 10,000 lines of code in one `script.js` file, it becomes impossible to maintain. Modules allow you to organize code logically (e.g., all math functions in `math.js`, all UI functions in `ui.js`).',
    syntax: 'export const name = "Alice";\nimport { name } from "./file.js";',
    codeExample: '// --- file1.js ---\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\n\n// --- file2.js ---\nimport { add, subtract } from "./file1.js";\n\nconsole.log(add(5, 5));\nconsole.log(subtract(10, 2));',
    expectedOutput: '10\n8',
    explanation: [
      { code: 'export const add...', desc: 'We export the specific functions we want others to be able to use. This is called a "Named Export".' },
      { code: 'import { add } from "./file1.js"', desc: 'We import exactly what we need. The names in the curly braces must match the exported names exactly.' }
    ],
    realWorldExample: 'In React, every single UI component is its own file. You `export default Button` from `Button.js`, and `import Button from "./Button"` inside your App file.',
    commonMistakes: [
      { error: 'Forgetting type="module" in HTML', code: '<script src="app.js"></script>', suffix: 'Browsers do not support `import/export` by default. You MUST add `type="module"` to your script tag: `<script type="module" src="app.js"></script>`.' }
    ],
    bestPractices: ['Use "Named Exports" (with `{}`) when exporting multiple utility functions. Use "Default Exports" (`export default FuncName;`) when a file contains one main thing (like a single Class or React component).'],
    practiceExercise: {
      task: 'Write the syntax to import a named function called `calculateTax` from a file named `utils.js` located in the same folder.',
      expectedOutput: '(Syntax only)',
      solution: 'import { calculateTax } from "./utils.js";'
    },
    quiz: [
      { question: 'What is the main purpose of JS modules?', options: ['To make code run faster', 'To separate code into different files for better organization and maintainability', 'To encrypt code', 'To style the page'], answer: 'To separate code into different files for better organization and maintainability' },
      { question: 'Which keyword makes a variable available to other files?', options: ['import', 'expose', 'export', 'public'], answer: 'export' },
      { question: 'Which keyword brings an exported variable into the current file?', options: ['require', 'include', 'import', 'fetch'], answer: 'import' },
      { question: 'If you export using `export const name = "Bob";`, how must you import it?', options: ['import name from "./file.js"', 'import { name } from "./file.js"', 'import * as name', 'import "Bob"'], answer: 'import { name } from "./file.js"' },
      { question: 'What attribute must be added to the `<script>` tag in HTML to use modules?', options: ['class="module"', 'type="text/javascript"', 'type="module"', 'defer'], answer: 'type="module"' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between a Default Export and a Named Export?', a: 'You can have multiple Named Exports per file, and they must be imported with their exact names inside `{}`. A file can only have ONE Default Export, and it can be imported without `{}` and named whatever you want upon import.' }
    ],
    summary: ['Break code into files.', '`export` makes things public.', '`import` brings things in.', 'Use `<script type="module">` in browsers.'],
    references: commonReferences
  }
};
