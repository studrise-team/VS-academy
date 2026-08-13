const commonReferences = [
  { label: 'MDN Web Docs - JavaScript modules', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules' },
  { label: 'MDN Web Docs - Optional chaining (?.)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining' },
  { label: 'MDN Web Docs - Nullish coalescing operator (??)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing' }
];

export const javascriptContentBatchMissing18 = {
  'js_modules': {
    isStructured: true,
    title: '179. Modules',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'Modules allow you to break your JavaScript code up into separate files. This makes it easier to maintain, reuse, and organize your code, rather than having one massive 10,000-line `script.js` file.',
    whyUseIt: 'Without modules, all variables in all your scripts share the same global scope. If two scripts define a variable named `count`, they will collide and crash. Modules encapsulate code so it doesn\'t leak globally.',
    syntax: '// math.js: export const pi = 3.14;\n// main.js: import { pi } from "./math.js";',
    codeExample: '// --- File: math.js ---\n// We use the "export" keyword to make these available outside this file\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\n\n// We can also have a "default" export for the main thing in the file\nexport default function Calculator() {\n  console.log("Calculator starting...");\n}\n\n// --- File: app.js ---\n// (Covered in the next topic, but this is how you pull them in)\n// import Calculator, { add, subtract } from "./math.js";',
    expectedOutput: 'The code is cleanly separated into two logical files. Variables inside `math.js` do not interfere with variables in `app.js`.',
    explanation: [
      { code: 'export const ...', desc: 'A "named export". You can have as many of these as you want in a single file.' },
      { code: 'export default ...', desc: 'A "default export". You can only have ONE default export per file. It is usually used for the main class or function the file is built around (like a React component).' }
    ],
    realWorldExample: 'In a React application, every single UI component (Button, Header, Footer) is written in its own module file and exported, then imported together in the main `App.js` file.',
    commonMistakes: [
      { error: 'Forgetting type="module" in HTML', code: '<script src="app.js"></script>', suffix: 'If you try to use `import` and `export` in the browser natively, it will crash unless you tell the browser it is a module: `<script type="module" src="app.js"></script>`.' }
    ],
    bestPractices: ['Group related functions into single modules (e.g., `apiUtils.js`, `stringHelpers.js`). Don\'t put completely unrelated logic into the same file.'],
    practiceExercise: {
      task: 'Write a file `greetings.js`. Export a constant `hello = "Hi"` as a named export. Then, export a function `sayBye` as the default export.',
      expectedOutput: 'Variables are exported correctly.',
      solution: 'export const hello = "Hi"; export default function sayBye() { console.log("Bye"); }'
    },
    quiz: [
      { question: 'What is the primary purpose of JavaScript modules?', options: ['To make code execute faster', 'To break code into smaller, reusable files and prevent global scope pollution', 'To connect to a database', 'To compile CSS'], answer: 'To break code into smaller, reusable files and prevent global scope pollution' },
      { question: 'How many `default` exports can you have in a single file?', options: ['0', '1', 'As many as you want', 'It depends on the browser'], answer: '1' },
      { question: 'How many `named` exports can you have in a single file?', options: ['1', '5', 'As many as you want', '0'], answer: 'As many as you want' },
      { question: 'What attribute MUST you add to your HTML `<script>` tag to use modules natively in the browser?', options: ['defer', 'async', 'type="module"', 'rel="module"'], answer: 'type="module"' },
      { question: 'Do variables declared inside a module automatically leak into the global `window` object?', options: ['Yes', 'No, they are scoped only to that module unless explicitly exported', 'Only in strict mode', 'Only if they use `var`'], answer: 'No, they are scoped only to that module unless explicitly exported' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between CommonJS and ES Modules?', a: 'CommonJS uses `require()` and `module.exports` and is the older standard primarily used in Node.js. ES Modules (ESM) use `import` and `export` and are the modern standard natively supported by browsers and newer versions of Node.js.' }
    ],
    summary: ['Break code into separate files.', 'Use `export` to expose variables.', 'Prevents global scope pollution.'],
    references: commonReferences
  },
  'js_import': {
    isStructured: true,
    title: '180. import',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `import` statement is used to bring in functions, objects, or primitives that have been exported from another module (another JavaScript file).',
    whyUseIt: 'It allows you to piece your application together. Without `import`, the `export` keyword is useless. It acts as the bridge connecting your separate files.',
    syntax: 'import defaultExport, { namedExport } from "./module.js";',
    codeExample: '// Assuming a file named "utils.js" has:\n// export const max = 100;\n// export function double(n) { return n * 2; }\n// export default class User {}\n\n// --- Inside main.js ---\n\n// 1. Importing the Default export (can be named anything you want!)\nimport MyUserClass from "./utils.js";\n\n// 2. Importing Named exports (MUST be wrapped in {} and match the exact name)\nimport { max, double } from "./utils.js";\n\n// 3. You can even combine them on one line!\n// import MyUserClass, { max, double } from "./utils.js";\n\nconsole.log(max); // 100\nconsole.log(double(50)); // 100',
    expectedOutput: 'Successfully imports and uses variables from another file.',
    explanation: [
      { code: 'import MyUser...', desc: 'When importing a `default` export, you do not use curly braces. You can name the imported variable whatever you want (though it\'s best practice to keep the name the same).' },
      { code: 'import { max }...', desc: 'When importing `named` exports, you MUST use curly braces `{}`, and the variable name MUST match the exported name exactly.' }
    ],
    realWorldExample: 'Importing the `React` library and specific hooks into a component: `import React, { useState, useEffect } from "react";`.',
    commonMistakes: [
      { error: 'Forgetting the .js extension', code: 'import { max } from "./utils"', suffix: 'In native browser JavaScript, you MUST include the `.js` file extension in the string path. (Note: tools like Webpack/Vite and frameworks like React/Next.js often allow you to omit it, which causes confusion for beginners).' },
      { error: 'Using {} for default exports', code: 'import { MyUserClass } from "./utils.js"', suffix: 'This will fail if `MyUserClass` was a default export. Remember: Default = No Braces. Named = Braces.' }
    ],
    bestPractices: ['You can rename a named export as you import it using the `as` keyword to avoid naming conflicts: `import { max as maximumAllowed } from "./utils.js";`.'],
    practiceExercise: {
      task: 'Write the line of code to import a named export `formatDate` from a file called `./dateHelpers.js`.',
      expectedOutput: 'Valid import statement.',
      solution: 'import { formatDate } from "./dateHelpers.js";'
    },
    quiz: [
      { question: 'Which keyword is used to bring variables from another file into the current file?', options: ['require', 'include', 'import', 'fetch'], answer: 'import' },
      { question: 'When importing a `named` export, what syntax must you use?', options: ['import namedExport from ...', 'import { namedExport } from ...', 'import [namedExport] from ...', 'import * as namedExport from ...'], answer: 'import { namedExport } from ...' },
      { question: 'When importing a `default` export, what syntax must you use?', options: ['import { defaultExport } from ...', 'import [defaultExport] from ...', 'import defaultExport from ...', 'import default from ...'], answer: 'import defaultExport from ...' },
      { question: 'Can you name a `default` import whatever you want?', options: ['Yes, e.g., `import Cat from "./Dog.js"` is valid (though confusing)', 'No, it must match the original name perfectly', 'Only if it is a class', 'Only in Node.js'], answer: 'Yes, e.g., `import Cat from "./Dog.js"` is valid (though confusing)' },
      { question: 'How can you rename a named import to avoid variable name collisions?', options: ['import { oldName = newName }', 'import { oldName as newName }', 'import oldName: newName', 'You cannot rename them'], answer: 'import { oldName as newName }' }
    ],
    interviewQuestions: [
      { q: 'How would you import EVERY named export from a file at once without typing them all out?', a: 'You can use the wildcard syntax: `import * as Utils from "./utils.js";`. You would then access them like `Utils.max` or `Utils.double(5)`.' }
    ],
    summary: ['Use `import` to bring in code.', 'Curly braces `{}` for named exports.', 'No braces for default exports.'],
    references: commonReferences
  },
  'js_optional_chaining_1': {
    isStructured: true,
    title: '182. Optional Chaining',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Optional Chaining (`?.`) is a safe way to access deeply nested properties in an object. If the reference is `null` or `undefined`, the expression safely short-circuits and returns `undefined` instead of throwing a massive error.',
    whyUseIt: 'Without it, if you try to read `user.address.street`, but `user.address` is `undefined`, your entire JavaScript application will crash with "Cannot read properties of undefined (reading \'street\')".',
    syntax: 'const val = object?.property?.subProperty;',
    codeExample: 'const user1 = {\n  name: "Alice",\n  contact: {\n    email: "alice@test.com"\n  }\n};\n\nconst user2 = {\n  name: "Bob"\n  // Note: Bob has no "contact" object!\n};\n\n// ❌ The Old Way (Long and ugly)\nconst email1 = user2.contact ? user2.contact.email : undefined;\n\n// ✅ The Modern Way (Optional Chaining)\n// "Does user2.contact exist? If yes, get email. If no, stop and return undefined."\nconst email2 = user2.contact?.email;\n\nconsole.log(email2); // undefined (No crash!)',
    expectedOutput: 'undefined',
    explanation: [
      { code: '?.', desc: 'The optional chaining operator. It asks: "Is the thing on the left null/undefined? If yes, stop immediately. If no, proceed to the right."' }
    ],
    realWorldExample: 'Fetching data from an API. You ask for a user\'s profile, but they haven\'t uploaded an avatar yet. `const imgUrl = response.data?.profile?.avatar?.url;` safely handles the missing data.',
    commonMistakes: [
      { error: 'Using it on the root object', code: 'user?.name', suffix: 'If the variable `user` was never declared at all, `user?.name` will still throw a ReferenceError. Optional chaining only protects against properties of variables that are declared but hold null/undefined.' }
    ],
    bestPractices: ['You can also use optional chaining with arrays (`users?.[0]?.name`) and even function calls (`user.getDetails?.()`). This is incredibly powerful!'],
    practiceExercise: {
      task: 'Given an object `data`, write a line of code to safely extract `data.settings.theme` using optional chaining, storing it in a variable `theme`.',
      expectedOutput: 'Extracts theme or returns undefined safely.',
      solution: 'const theme = data?.settings?.theme;'
    },
    quiz: [
      { question: 'What does the Optional Chaining operator `?.` do?', options: ['It checks if two variables are equal', 'It safely accesses nested object properties, returning undefined if an intermediate property is null/undefined instead of throwing an error', 'It creates an optional parameter', 'It deletes a property'], answer: 'It safely accesses nested object properties, returning undefined if an intermediate property is null/undefined instead of throwing an error' },
      { question: 'What error does optional chaining prevent?', options: ['SyntaxError', 'Cannot read properties of undefined', 'Out of memory', 'Network Error'], answer: 'Cannot read properties of undefined' },
      { question: 'If `person.job` is undefined, what does `person.job?.title` evaluate to?', options: ['null', '"" (empty string)', 'undefined', 'Throws an error'], answer: 'undefined' },
      { question: 'Can you use optional chaining with arrays?', options: ['Yes, e.g., `arr?.[0]`', 'No, only objects', 'Only for strings', 'Only in TypeScript'], answer: 'Yes, e.g., `arr?.[0]`' },
      { question: 'Can you use optional chaining to safely call a function that might not exist?', options: ['Yes, e.g., `myFunc?.()`', 'No', 'Only if the function is async', 'Only in classes'], answer: 'Yes, e.g., `myFunc?.()`' }
    ],
    interviewQuestions: [
      { q: 'Is it good practice to use optional chaining on *every single* property access just to be safe?', a: 'No. You should only use it when you actually expect a value might legitimately be missing. Overusing it can hide genuine bugs in your code where a value *should* exist but doesn\'t.' }
    ],
    summary: ['Safely access nested properties.', 'Uses the `?.` syntax.', 'Prevents "Cannot read property of undefined" crashes.'],
    references: commonReferences
  },
  'js_nullish_coalescing': {
    isStructured: true,
    title: '183. Nullish Coalescing',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The Nullish Coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is strictly `null` or `undefined`, and otherwise returns its left-hand side operand.',
    whyUseIt: 'It is a safer, more accurate replacement for the Logical OR (`||`) operator when you want to provide default values, because it does NOT trigger on falsey values like `0`, `""`, or `false`.',
    syntax: 'const value = userInput ?? defaultValue;',
    codeExample: 'const score = 0;\nconst name = "";\n\n// ❌ The Old Way (Using ||)\n// || checks for ANY falsey value (0, "", false, null, undefined)\nconst finalScoreBad = score || 100;\nconsole.log(finalScoreBad); // 100 (BUG! The user scored 0, but we gave them 100!)\n\n// ✅ The Modern Way (Using ??)\n// ?? ONLY checks for null or undefined.\nconst finalScoreGood = score ?? 100;\nconsole.log(finalScoreGood); // 0 (Correct! 0 is not null/undefined)\n\nconst userName = name ?? "Guest";\nconsole.log(userName); // "" (It kept the empty string!)',
    expectedOutput: '100\n0\n""',
    explanation: [
      { code: 'score ?? 100', desc: 'Reads as: "If score is strictly null or undefined, use 100. Otherwise, use whatever score is (even if it is 0 or false)."' }
    ],
    realWorldExample: 'Building a configuration object. If a user sets `showSidebar: false`, using `config.showSidebar || true` would force it back to `true`. Using `config.showSidebar ?? true` correctly respects their `false` choice.',
    commonMistakes: [
      { error: 'Mixing ?? with && and || without parentheses', code: 'a || b ?? c', suffix: 'JavaScript will throw a SyntaxError if you mix `??` directly with `&&` or `||`. You MUST use parentheses to clarify logic: `(a || b) ?? c`.' }
    ],
    bestPractices: ['Optional Chaining (`?.`) and Nullish Coalescing (`??`) are meant to be used together! Example: `const city = user?.address?.city ?? "Unknown";`.'],
    practiceExercise: {
      task: 'Given `let volume = 0;`, use `??` to create a `finalVolume` variable that defaults to `50` only if `volume` is null/undefined.',
      expectedOutput: 'finalVolume is 0.',
      solution: 'const finalVolume = volume ?? 50;'
    },
    quiz: [
      { question: 'Which values will cause the Nullish Coalescing operator (`??`) to return the right-hand side?', options: ['Only `false`', 'Only `0` and `""`', 'Only `null` and `undefined`', 'Any falsey value'], answer: 'Only `null` and `undefined`' },
      { question: 'Why is `??` safer than `||` for providing default values?', options: ['It is faster', 'It preserves legitimate falsey values like `0` or `false` that the user might have intentionally provided', 'It works on arrays', 'It compiles to machine code'], answer: 'It preserves legitimate falsey values like `0` or `false` that the user might have intentionally provided' },
      { question: 'If `let x = false;`, what does `x ?? true` evaluate to?', options: ['true', 'false', 'null', 'undefined'], answer: 'false' },
      { question: 'What is the syntax for the Nullish Coalescing operator?', options: ['??', '||', '&&', '?.'], answer: '??' },
      { question: 'What is a common use case for combining `?.` and `??`?', options: ['Math calculations', 'Safely accessing nested API data and providing a default string like "Not Found" if the data is missing', 'Looping through arrays', 'DOM manipulation'], answer: 'Safely accessing nested API data and providing a default string like "Not Found" if the data is missing' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between a "falsy" value and a "nullish" value in JavaScript?', a: 'Falsy values include `false`, `0`, `""`, `NaN`, `null`, and `undefined`. Nullish values *only* include `null` and `undefined`.' }
    ],
    summary: ['Provides default values safely.', 'Only triggers on `null` or `undefined`.', 'Protects intentional `0` and `false` values.'],
    references: commonReferences
  },
  'js_enhanced_object_literals': {
    isStructured: true,
    title: '184. Enhanced Object Literals',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Enhanced Object Literals (introduced in ES6) provide syntax shortcuts that make it faster and cleaner to define objects, especially when your variable names match your object property names.',
    whyUseIt: 'It prevents you from repeating yourself typing `name: name, age: age` when constructing objects from variables.',
    syntax: 'const obj = { name, age };',
    codeExample: 'const name = "Alice";\nconst role = "Admin";\n\n// ❌ The Old Way\nconst oldUser = {\n  name: name,\n  role: role,\n  sayHi: function() {\n    console.log("Hi!");\n  }\n};\n\n// ✅ The Modern Way (Enhanced Object Literals)\nconst newUser = {\n  // 1. Property Shorthand: If the key and variable name match, just write it once!\n  name,\n  role,\n  \n  // 2. Method Shorthand: No need for the "function" keyword!\n  sayHi() {\n    console.log("Hi!");\n  }\n};\n\nconsole.log(newUser.name); // "Alice"\nnewUser.sayHi(); // "Hi!"',
    expectedOutput: '"Alice"\n"Hi!"',
    explanation: [
      { code: 'name,', desc: 'JavaScript sees this and automatically expands it to `name: name`. It looks for a variable in scope called `name` and assigns its value.' },
      { code: 'sayHi() {}', desc: 'A cleaner way to define methods inside an object.' }
    ],
    realWorldExample: 'Creating an object to send in a POST request. `const payload = { username, email, password };` instead of typing them all out twice.',
    commonMistakes: [
      { error: 'Assuming the variable name doesn\'t matter', code: 'const first = "Bob"; const user = { name };', suffix: 'This throws a ReferenceError. The shorthand ONLY works if a variable named `name` actually exists in your current scope.' }
    ],
    bestPractices: ['Use property shorthand whenever possible. It makes your code significantly cleaner and easier to read, especially in Redux or Context API state management.'],
    practiceExercise: {
      task: 'Given `const id = 5;` and `const title = "Post";`, create an object `post` using enhanced object literal shorthand.',
      expectedOutput: 'Object created cleanly.',
      solution: 'const post = { id, title };'
    },
    quiz: [
      { question: 'What does the property shorthand in Enhanced Object Literals do?', options: ['Deletes duplicate properties', 'Allows you to write `{ name }` instead of `{ name: name }` if the variable name matches the key', 'Sorts the object alphabetically', 'Encrypts the object'], answer: 'Allows you to write `{ name }` instead of `{ name: name }` if the variable name matches the key' },
      { question: 'What is the syntax for the method shorthand?', options: ['method: function() {}', 'method() {}', 'method => {}', 'function method() {}'], answer: 'method() {}' },
      { question: 'If `let x = 10;`, what is `const obj = { x };` equivalent to?', options: ['const obj = { 10: x };', 'const obj = { x: 10 };', 'const obj = { "x": "10" };', 'Error'], answer: 'const obj = { x: 10 };' },
      { question: 'Which version of JavaScript introduced Enhanced Object Literals?', options: ['ES3', 'ES5', 'ES6 (ES2015)', 'ES2022'], answer: 'ES6 (ES2015)' },
      { question: 'Can you mix shorthand properties and traditional properties in the same object?', options: ['Yes (e.g., `{ name, age: 25 }`)', 'No, it throws an error', 'Only in strict mode', 'Only in classes'], answer: 'Yes (e.g., `{ name, age: 25 }`)' }
    ],
    interviewQuestions: [
      { q: 'What is "Computed Property Names" in ES6 object literals?', a: 'It allows you to use a variable or expression wrapped in brackets `[]` as the key name when creating an object. E.g., `const key = "age"; const obj = { [key]: 25 };` results in `{ age: 25 }`.' }
    ],
    summary: ['Use `{ name }` instead of `{ name: name }`.', 'Use `sayHi() {}` instead of `sayHi: function() {}`.', 'Reduces boilerplate code.'],
    references: commonReferences
  }
};
