const commonReferences = [
  { label: 'MDN Web Docs - JavaScript modules', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules' }
];

export const javascriptContentBatchMissing29 = {
  'js_why_modules': {
    isStructured: true,
    title: '248. Why Modules?',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Modules are a way to split your JavaScript code into multiple separate files, rather than writing a 10,000-line script in a single `main.js` file.',
    whyUseIt: 'As projects grow, a single file becomes impossible to maintain. Modules allow you to organize code logically (e.g., all math functions in `math.js`, all user data functions in `user.js`), making the code readable, reusable, and easy to collaborate on.',
    syntax: '// No specific syntax, just the concept of splitting code across files.',
    codeExample: '// BAD: One giant file (spaghetti code)\n// --- app.js ---\nfunction calculateTax() { /* 50 lines */ }\nfunction renderHeader() { /* 100 lines */ }\nfunction fetchUserData() { /* 200 lines */ }\n// ... 5000 lines later ...\nrenderHeader();\n\n// GOOD: Modular approach\n// --- tax.js ---\nexport function calculateTax() { ... }\n\n// --- ui.js ---\nexport function renderHeader() { ... }\n\n// --- app.js (The main entry point) ---\nimport { calculateTax } from "./tax.js";\nimport { renderHeader } from "./ui.js";\n\nrenderHeader();',
    expectedOutput: 'The code works exactly the same, but is vastly easier for humans to read and manage.',
    explanation: [
      { code: 'Maintainability', desc: 'If there is a bug in the header, you know exactly to open `ui.js`. You don\'t have to scroll through thousands of lines in a main file.' },
      { code: 'Scope Isolation', desc: 'Before modules, variables declared in one file could accidentally overwrite variables in another file (Global Scope Pollution). Modules fix this by giving every file its own private scope.' }
    ],
    realWorldExample: 'Building a car. You don\'t build the entire car from a single massive block of metal. You have a steering wheel module, an engine module, and a tire module, which are built separately and assembled together at the end.',
    commonMistakes: [
      { error: 'Forgetting type="module" in HTML', code: '<script src="app.js"></script>', suffix: 'If you use modules in the browser, you MUST tell the browser it is a module by using `<script type="module" src="app.js"></script>`. Otherwise, you will get a SyntaxError.' }
    ],
    bestPractices: ['Keep modules focused on a single responsibility. A file named `auth.js` should only contain code related to logging in/out, nothing else.'],
    practiceExercise: {
      task: 'Without coding: Name two major benefits of splitting JavaScript into modules.',
      expectedOutput: 'Maintainability and avoiding global scope pollution.',
      solution: '1. Better organization/maintainability. 2. Prevents global variables from colliding across different files.'
    },
    quiz: [
      { question: 'What is the primary purpose of JavaScript Modules?', options: ['To make the code run faster in the browser', 'To split a massive codebase into smaller, manageable, reusable files', 'To encrypt JavaScript code', 'To convert JavaScript into CSS'], answer: 'To split a massive codebase into smaller, manageable, reusable files' },
      { question: 'What problem do Modules solve regarding variables?', options: ['They allow variables to hold more data', 'They prevent variables in one file from accidentally overwriting variables in another file (Global Scope Pollution)', 'They make all variables `const`', 'They automatically delete variables when not used'], answer: 'They prevent variables in one file from accidentally overwriting variables in another file (Global Scope Pollution)' },
      { question: 'If you want to use ES6 Modules directly in an HTML file, what attribute must you add to the `<script>` tag?', options: ['module="true"', 'type="module"', 'src="module"', 'defer'], answer: 'type="module"' },
      { question: 'In a modular project, what is the purpose of the `app.js` or `main.js` file?', options: ['To hold every single function in the app', 'To serve as the main entry point that `imports` pieces from other files and starts the application', 'To store CSS', 'To run tests'], answer: 'To serve as the main entry point that `imports` pieces from other files and starts the application' },
      { question: 'What does "Separation of Concerns" mean in the context of modules?', options: ['Worrying about different parts of the code', 'Each file/module should handle one specific job (e.g., one file for math, one for API calls)', 'Keeping HTML and CSS in the same file', 'Deleting old code'], answer: 'Each file/module should handle one specific job (e.g., one file for math, one for API calls)' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between CommonJS and ES6 Modules?', a: 'CommonJS (`require()` and `module.exports`) is the older system created for Node.js. ES6 Modules (`import` and `export`) is the modern, official standard built directly into the JavaScript language and supported by both browsers and modern Node.js.' }
    ],
    summary: ['Splits code into manageable files.', 'Prevents global variable collisions.', 'Use `<script type="module">` in HTML.'],
    references: commonReferences
  },
  'js_export_1': {
    isStructured: true,
    title: '249. export',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `export` keyword is used to expose variables, functions, or classes from one module so they can be used in other files.',
    whyUseIt: 'By default, everything inside a module is strictly private to that file. If you write a helpful `formatDate` function in `utils.js` and want to use it in `app.js`, you MUST explicitly `export` it first.',
    syntax: 'export const myVar = 42;\nexport function myFunc() {}',
    codeExample: '// --- mathUtils.js ---\n\n// This function is PRIVATE. Only this file can see it.\nfunction hiddenHelper() {\n  return 2;\n}\n\n// This function is EXPORTED. Other files can import it.\nexport function add(a, b) {\n  return a + b;\n}\n\n// Variables can be exported too\nexport const PI = 3.14159;\n\n// Classes can be exported\nexport class Calculator {\n  // ...\n}',
    expectedOutput: 'The `add`, `PI`, and `Calculator` elements are now publicly available to the rest of the application.',
    explanation: [
      { code: 'export keyword', desc: 'Acts as a permission slip. It tells JavaScript, "It is okay for other files to access this specific piece of code."' },
      { code: 'hiddenHelper', desc: 'Because it lacks the `export` keyword, it is completely invisible to the outside world, acting like a private variable.' }
    ],
    realWorldExample: 'A restaurant kitchen. The chefs (`hiddenHelper`) and the ovens are private. The only thing they `export` out of the kitchen doors to the customer is the finished plate of food.',
    commonMistakes: [
      { error: 'Trying to export without a declaration', code: 'export 42;', suffix: 'You cannot export raw values like that in a named export. You must attach it to a variable: `export const num = 42;` (or use a Default export, covered soon).' }
    ],
    bestPractices: ['Only export what is absolutely necessary. Keep helper functions private to the module to reduce clutter and prevent other developers from relying on internal logic.'],
    practiceExercise: {
      task: 'Write the code to export a constant arrow function named `sayHi` that logs "Hello".',
      expectedOutput: 'An exported arrow function.',
      solution: 'export const sayHi = () => { console.log("Hello"); };'
    },
    quiz: [
      { question: 'What does the `export` keyword do?', options: ['It sends data to a server', 'It makes a variable, function, or class available to be imported by other files', 'It deletes a file', 'It creates a backup of the code'], answer: 'It makes a variable, function, or class available to be imported by other files' },
      { question: 'By default, if you write a function in a module file but DO NOT use the `export` keyword, who can use that function?', options: ['Any file in the project', 'Only files in the same folder', 'Only the file it was written in (it is completely private)', 'The HTML file'], answer: 'Only the file it was written in (it is completely private)' },
      { question: 'Which of the following is valid syntax?', options: ['export const age = 25;', 'export 25;', 'export const = 25;', 'const export age = 25;'], answer: 'export const age = 25;' },
      { question: 'Can you export a Class?', options: ['Yes, `export class MyClass {}`', 'No, only functions', 'No, only variables', 'Only in React'], answer: 'Yes, `export class MyClass {}`' },
      { question: 'Why wouldn\'t you just export every single thing in a file?', options: ['It uses too much memory', 'It is better to keep internal helper logic private (Encapsulation) so other files don\'t rely on code that might change', 'You can only export 5 things per file', 'It causes Syntax Errors'], answer: 'It is better to keep internal helper logic private (Encapsulation) so other files don\'t rely on code that might change' }
    ],
    interviewQuestions: [
      { q: 'Can you export things at the bottom of the file instead of inline?', a: 'Yes! You can define everything normally, and then write `export { add, PI, Calculator };` at the very bottom of the file. This is often preferred because it gives a clean summary of the file\'s public API.' }
    ],
    summary: ['Makes code available to other files.', 'Code without `export` remains private.', 'Can export variables, functions, or classes.'],
    references: commonReferences
  },
  'js_import_1': {
    isStructured: true,
    title: '250. import',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `import` keyword is used to bring in variables, functions, or classes that have been exported by another module.',
    whyUseIt: 'It connects your files together. Without `import`, the `export` keyword is useless. It allows your `app.js` file to grab the specific tools it needs from various helper files.',
    syntax: 'import { item1, item2 } from "./filename.js";',
    codeExample: '// --- mathUtils.js ---\nexport const PI = 3.14;\nexport function add(a, b) { return a + b; }\n\n\n// --- main.js ---\n// 1. We import EXACTLY what we need using curly braces { }\nimport { PI, add } from "./mathUtils.js";\n\n// 2. Now we can use them as if they were defined in this file!\nconsole.log(PI); // 3.14\nconsole.log(add(5, 10)); // 15\n\n// THIS WILL FAIL:\n// console.log(subtract(10, 5)); // We didn\'t import it!',
    expectedOutput: '3.14\n15',
    explanation: [
      { code: '{ PI, add }', desc: 'This is called "Destructuring". You are telling JavaScript to look inside `mathUtils.js` and extract only those specific named items.' },
      { code: '"./mathUtils.js"', desc: 'The relative path to the file. `./` means "in the same folder as the current file". In native browser JS, you MUST include the `.js` extension.' }
    ],
    realWorldExample: 'Shopping at a hardware store. The store (`tools.js`) has thousands of tools (exports). When you start a project at home (`main.js`), you don\'t bring the whole store into your house; you just `import { hammer, nails } from "./tools.js"`.',
    commonMistakes: [
      { error: 'Forgetting the ./ in the path', code: 'import { add } from "mathUtils.js";', suffix: 'If you omit the `./`, JavaScript thinks you are trying to import an external NPM package (like "react"), not a local file. Always use `./` or `../` for your own files.' }
    ],
    bestPractices: ['Put all your `import` statements at the very top of the file. This makes it instantly obvious what dependencies the file requires.'],
    practiceExercise: {
      task: 'Write a statement to import a function called `validateEmail` from a file named `validators.js` located in the same folder.',
      expectedOutput: 'An import statement with curly braces.',
      solution: 'import { validateEmail } from "./validators.js";'
    },
    quiz: [
      { question: 'What does the `import` keyword do?', options: ['It uploads a file to the server', 'It brings in specific code that was exported from another module', 'It copies and pastes the entire file', 'It compiles CSS'], answer: 'It brings in specific code that was exported from another module' },
      { question: 'When importing named exports, what syntax surrounds the item names?', options: ['Square brackets `[ ]`', 'Parentheses `( )`', 'Curly braces `{ }`', 'Quotes `" "`'], answer: 'Curly braces `{ }`' },
      { question: 'Why is the `./` prefix critical when importing your own local files?', options: ['It isn\'t, it is optional', 'It tells JavaScript to look in the local folder. Without it, JS assumes you are looking for an installed Node package (like "react")', 'It makes the code faster', 'It stands for "JavaScript"'], answer: 'It tells JavaScript to look in the local folder. Without it, JS assumes you are looking for an installed Node package (like "react")' },
      { question: 'Can you import a function that was NOT exported in the original file?', options: ['Yes', 'No, trying to import something that isn\'t exported will throw an error', 'Only if you use strict mode', 'Yes, but it runs slower'], answer: 'No, trying to import something that isn\'t exported will throw an error' },
      { question: 'Where should `import` statements be placed in your file?', options: ['At the very bottom', 'Inside functions as needed', 'At the very top of the file', 'In a separate HTML file'], answer: 'At the very top of the file' }
    ],
    interviewQuestions: [
      { q: 'What happens if you import the same file in 5 different places in your app?', a: 'JavaScript modules are "Singletons". The imported file is evaluated exactly ONCE. If that file runs `console.log("Loaded")`, it will only print once, regardless of how many other files import it. They all share the exact same instance in memory.' }
    ],
    summary: ['Brings code in from other files.', 'Uses `{ }` for specific items.', 'Path must start with `./` or `../`.'],
    references: commonReferences
  },
  'js_named_exports': {
    isStructured: true,
    title: '251. Named Exports',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A "Named Export" is the standard way to export multiple items from a single file. Each item is exported by its specific name, and must be imported using that exact same name.',
    whyUseIt: 'Use Named Exports when you have a file containing a collection of tools (like a `math.js` file with `add`, `subtract`, `multiply`). It allows the importing file to pick and choose exactly which specific tools it needs.',
    syntax: 'export const x = 1;\nimport { x } from "./file.js";',
    codeExample: '// --- stringUtils.js ---\nexport const capitalize = (str) => str.toUpperCase();\nexport const lowercase = (str) => str.toLowerCase();\nexport const trimSpaces = (str) => str.trim();\n\n\n// --- app.js ---\n// We only want 2 of the 3 functions. We MUST use their exact names.\nimport { capitalize, trimSpaces } from "./stringUtils.js";\n\nconsole.log(capitalize("hello")); // "HELLO"\n\n// If we want to rename them to avoid a collision, we use "as":\nimport { lowercase as makeSmall } from "./stringUtils.js";\nconsole.log(makeSmall("WORLD")); // "world"',
    expectedOutput: 'HELLO\nworld',
    explanation: [
      { code: 'Exact Names', desc: 'If you `export const capitalize`, you MUST `import { capitalize }`. You cannot arbitrarily rename it in the curly braces without using the `as` keyword.' },
      { code: 'as keyword', desc: 'Incredibly useful if you import two functions from different files that happen to share the same name (e.g., `import { render as renderHeader } from "./header.js"; import { render as renderFooter } from "./footer.js";`).' }
    ],
    realWorldExample: 'React Hooks. The React library exports dozens of hooks. When you need one, you import exactly what you need by name: `import { useState, useEffect } from "react";`.',
    commonMistakes: [
      { error: 'Importing without curly braces', code: 'import capitalize from "./stringUtils.js";', suffix: 'Without the curly braces `{ }`, JavaScript looks for a "Default Export", which will fail if the file only has Named Exports.' }
    ],
    bestPractices: ['Prefer Named Exports over Default Exports in large projects. They force consumers to use the exact variable name you defined, which makes searching the codebase for usages infinitely easier.'],
    practiceExercise: {
      task: 'Write an import statement to get `userAge` from `./user.js`, but rename it to `age` during the import.',
      expectedOutput: 'Uses the as keyword.',
      solution: 'import { userAge as age } from "./user.js";'
    },
    quiz: [
      { question: 'What is the main characteristic of a Named Export?', options: ['You can only have one per file', 'It must be imported using its exact specific name wrapped in curly braces `{ }`', 'It doesn\'t require the `export` keyword', 'It can only export strings'], answer: 'It must be imported using its exact specific name wrapped in curly braces `{ }`' },
      { question: 'How many Named Exports can you have in a single file?', options: ['Only 1', 'Exactly 5', 'As many as you want', 'Zero'], answer: 'As many as you want' },
      { question: 'If a file exports `calculateTotal`, what happens if you try `import { calc } from "./file.js"`?', options: ['It works fine', 'It magically renames it', 'It throws an error because the exact name `calc` does not exist in the exports', 'It imports the whole file'], answer: 'It throws an error because the exact name `calc` does not exist in the exports' },
      { question: 'How do you rename a Named Export during import to avoid naming conflicts?', options: ['import { origName = newName }', 'import { origName as newName }', 'import { origName : newName }', 'import origName to newName'], answer: 'import { origName as newName }' },
      { question: 'Why might a developer prefer Named Exports?', options: ['They are faster', 'They enforce consistent naming across the entire codebase, making code easier to search and refactor', 'They use less memory', 'They don\'t require curly braces'], answer: 'They enforce consistent naming across the entire codebase, making code easier to search and refactor' }
    ],
    interviewQuestions: [
      { q: 'How can you import EVERY named export from a file into a single object?', a: 'You can use the wildcard syntax: `import * as Utils from "./utils.js";`. Then you can access them via `Utils.add(5)` or `Utils.PI`.' }
    ],
    summary: ['Multiple exports per file.', 'Must use exact names in `{ }`.', 'Use `as` to rename.'],
    references: commonReferences
  },
  'js_default_exports': {
    isStructured: true,
    title: '252. Default Exports',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A "Default Export" is used when a module is designed to export only ONE main thing (like a single Class or a main Component). There can only be ONE default export per file.',
    whyUseIt: 'It makes importing cleaner because you don\'t need curly braces, and the importing file can name the imported item whatever it wants.',
    syntax: 'export default function() {}\nimport AnyName from "./file.js";',
    codeExample: '// --- User.js ---\nexport default class User {\n  constructor(name) { this.name = name; }\n}\n// You CANNOT have a second `export default` in this file!\n\n\n// --- main.js ---\n// 1. NO curly braces { } needed!\n// 2. We can name it whatever we want!\nimport UserClass from "./User.js";\nimport WhateverIWant from "./User.js";\n\nconst u1 = new UserClass("Alice");\nconst u2 = new WhateverIWant("Bob");\n// Both work perfectly and refer to the exact same Class!',
    expectedOutput: 'You successfully imported the default class twice under two different names.',
    explanation: [
      { code: 'export default', desc: 'Marks this specific item as the primary "main event" of this file.' },
      { code: 'import Name from', desc: 'Because the file only has ONE default export, JavaScript knows exactly what you are grabbing. Therefore, you don\'t need curly braces, and you can name the variable whatever you want locally.' }
    ],
    realWorldExample: 'React Components. Every time you create a new UI component in React, you usually write `export default function Button() { ... }`, and then import it elsewhere with `import Button from "./Button";`.',
    commonMistakes: [
      { error: 'Adding curly braces to a default import', code: 'import { User } from "./User.js";', suffix: 'If you use `{ }`, JavaScript looks for a NAMED export called "User". If the file used a DEFAULT export, this will fail. Default imports must NOT have curly braces.' }
    ],
    bestPractices: ['Use Default Exports for files that contain one primary Class or Component. Use Named Exports for files that contain a collection of utility functions.'],
    practiceExercise: {
      task: 'Write a file `config.js` that has a default export of the number `42`.',
      expectedOutput: 'Uses export default.',
      solution: 'export default 42;'
    },
    quiz: [
      { question: 'How many Default Exports can a single JavaScript file have?', options: ['Zero', 'Exactly One', 'Five', 'Unlimited'], answer: 'Exactly One' },
      { question: 'Do you use curly braces `{ }` when importing a Default Export?', options: ['Yes, always', 'No, default imports never use curly braces', 'Only in strict mode', 'Yes, if it is a Class'], answer: 'No, default imports never use curly braces' },
      { question: 'If `car.js` exports a default class named `Toyota`, which of the following is a valid import?', options: ['import { Toyota } from "./car.js";', 'import MyCar from "./car.js";', 'import default from "./car.js";', 'import * as Toyota from "./car.js";'], answer: 'import MyCar from "./car.js";' },
      { question: 'Why can you name a Default Import whatever you want (e.g., `import X from "./file.js"`)?', options: ['Because JavaScript guesses the name', 'Because there is only ONE default export in the file, so JavaScript knows exactly what you are asking for regardless of the name you assign it', 'Because it is a bug', 'You cannot do this'], answer: 'Because there is only ONE default export in the file, so JavaScript knows exactly what you are asking for regardless of the name you assign it' },
      { question: 'Can a file have both a Default Export AND several Named Exports?', options: ['Yes', 'No', 'Only in React', 'Only on servers'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'If a file has both a Default Export and Named Exports, how do you import them both on one line?', a: 'You combine the syntax: `import DefaultItem, { namedItem1, namedItem2 } from "./file.js";`' }
    ],
    summary: ['Used for the ONE main export of a file.', 'Imported WITHOUT curly braces.', 'Can be named anything upon import.'],
    references: commonReferences
  }
};
