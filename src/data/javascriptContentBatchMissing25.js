const commonReferences = [
  { label: 'MDN Web Docs - Window.sessionStorage', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage' },
  { label: 'MDN Web Docs - JSON', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON' }
];

export const javascriptContentBatchMissing25 = {
  'js_sessionstorage': {
    isStructured: true,
    title: '221. sessionStorage',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`sessionStorage` is exactly like `localStorage`, except for its lifespan: data stored in `sessionStorage` is automatically deleted the moment the user closes the specific browser tab or window.',
    whyUseIt: 'Use it when you want to save temporary data that should ONLY exist while the user is actively working in that single tab. For example, a multi-step checkout form where you want to remember their inputs if they accidentally hit the "Back" button, but you want all that data wiped out once they close the tab.',
    syntax: 'sessionStorage.setItem("key", "value");\nconst val = sessionStorage.getItem("key");',
    codeExample: '// 1. Saving Data\nsessionStorage.setItem("formStep", "2");\n\n// 2. Retrieving Data\nconst currentStep = sessionStorage.getItem("formStep");\nconsole.log(`User is on step ${currentStep}`);\n\n// 3. What happens next?\n// If the user refreshes the page, the data is STILL THERE.\n// If the user CLOSES the tab, the data is DESTROYED.',
    expectedOutput: 'Data is saved temporarily and destroyed upon tab closure.',
    explanation: [
      { code: 'sessionStorage vs localStorage', desc: '`localStorage` lives forever (until cleared). `sessionStorage` lives only for the duration of the page session (tab open).' },
      { code: 'Independent Tabs', desc: 'If you open your website in Tab 1, and then open the exact same website in Tab 2, they will have COMPLETELY DIFFERENT `sessionStorage` objects. They do not share data.' }
    ],
    realWorldExample: 'A bank website. If you log in, they might store a temporary session token in `sessionStorage`. When you close the tab, the token vanishes, logging you out immediately for security reasons.',
    commonMistakes: [
      { error: 'Expecting data to share across tabs', code: 'Tab 1: sessionStorage.setItem("user", "Alice");\nTab 2: console.log(sessionStorage.getItem("user")); // null!', suffix: 'Unlike `localStorage`, which shares data across all open tabs of the same website, `sessionStorage` is strictly isolated to the single tab where it was created.' }
    ],
    bestPractices: ['Use `sessionStorage` for sensitive but non-critical temporary state, like scroll position, form drafts, or UI toggles that shouldn\'t persist across days.'],
    practiceExercise: {
      task: 'Without coding: You save "x=1" in localStorage and "y=2" in sessionStorage. You close the tab and reopen the website. What variables still exist?',
      expectedOutput: 'Only x=1.',
      solution: 'Only localStorage survives tab closures. So x=1 is there, but y=2 is gone.'
    },
    quiz: [
      { question: 'What is the primary difference between `localStorage` and `sessionStorage`?', options: ['`sessionStorage` is much faster', '`sessionStorage` data is cleared when the browser tab is closed', '`sessionStorage` can store objects, `localStorage` only stores strings', '`sessionStorage` requires an internet connection'], answer: '`sessionStorage` data is cleared when the browser tab is closed' },
      { question: 'Does data in `sessionStorage` survive a page refresh (F5)?', options: ['Yes, it survives page reloads and restores', 'No, refreshing clears it', 'Only on Mac', 'Only if you use `await`'], answer: 'Yes, it survives page reloads and restores' },
      { question: 'If you open "mysite.com" in Tab 1, and open "mysite.com" again in Tab 2, do they share the same `sessionStorage` data?', options: ['Yes, always', 'No, `sessionStorage` is isolated strictly per tab', 'Only if you log in', 'Only if they are in the same window'], answer: 'No, `sessionStorage` is isolated strictly per tab' },
      { question: 'Which API is generally safer for storing a temporary authentication token (though still vulnerable to XSS)?', options: ['localStorage', 'sessionStorage (because it wipes on tab close)', 'cookies without HttpOnly', 'IndexedDB'], answer: 'sessionStorage (because it wipes on tab close)' },
      { question: 'What data type can you store in `sessionStorage`?', options: ['Arrays', 'Objects', 'Strings only', 'Booleans only'], answer: 'Strings only' }
    ],
    interviewQuestions: [
      { q: 'What happens to `sessionStorage` if a browser crashes and the user uses the "Restore Previous Session" feature?', a: 'Surprisingly, modern browsers WILL restore the `sessionStorage` data if a tab is restored using the browser\'s built-in session recovery tools!' }
    ],
    summary: ['Temporary browser storage.', 'Data is cleared when the tab is closed.', 'Isolated per tab (tabs don\'t share data).'],
    references: commonReferences
  },
  'js_setitem': {
    isStructured: true,
    title: '222. setItem()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `setItem()` method is used to save a key/value pair into either `localStorage` or `sessionStorage`.',
    whyUseIt: 'Whenever you need to write or update data in the browser\'s memory, this is the function you call.',
    syntax: 'storageObject.setItem(keyName, keyValue);',
    codeExample: '// 1. Basic string\nlocalStorage.setItem("username", "JohnDoe");\n\n// 2. Numbers are converted to strings!\nlocalStorage.setItem("age", 25); \n\n// 3. Updating an existing key (overwrites the old value)\nlocalStorage.setItem("username", "JaneDoe");\n\n// 4. Storing a boolean\nlocalStorage.setItem("isLoggedIn", true);',
    expectedOutput: 'The data is saved into the browser\'s DevTools under Application -> Local Storage.',
    explanation: [
      { code: 'keyName', desc: 'A string representing the name of the slot where you want to save the data.' },
      { code: 'keyValue', desc: 'The actual data. If it is not a string, JavaScript will automatically run `.toString()` on it before saving it.' }
    ],
    realWorldExample: 'A user clicks a "Dismiss" button on a cookie banner. Your code runs `localStorage.setItem("cookieBannerDismissed", "true")`.',
    commonMistakes: [
      { error: 'Saving objects without stringifying', code: 'localStorage.setItem("user", { name: "Bob" })', suffix: 'This is the most common mistake in JavaScript storage. The object is converted to `"[object Object]"`. You must use `JSON.stringify()` first.' }
    ],
    bestPractices: ['Prefix your keys if you are on a shared domain (like localhost). E.g., use `"myApp_theme"` instead of just `"theme"`, to avoid colliding with other projects.'],
    practiceExercise: {
      task: 'Write a line of code to save the word "English" under the key "language" in sessionStorage.',
      expectedOutput: 'Uses sessionStorage.setItem.',
      solution: 'sessionStorage.setItem("language", "English");'
    },
    quiz: [
      { question: 'What does `setItem()` do?', options: ['Reads data from the database', 'Saves a key/value pair into browser storage', 'Deletes an item', 'Creates an array'], answer: 'Saves a key/value pair into browser storage' },
      { question: 'What happens if you run `setItem("score", "10")` and then immediately run `setItem("score", "20")`?', options: ['You get an error', 'You have an array `["10", "20"]`', 'The value is overwritten, and the final value is "20"', 'The values are added to make "30"'], answer: 'The value is overwritten, and the final value is "20"' },
      { question: 'What happens if you try to save a number like `setItem("age", 42)`?', options: ['It crashes', 'It saves it as a number', 'It converts the number 42 into the string "42" and saves it', 'It throws a warning'], answer: 'It converts the number 42 into the string "42" and saves it' },
      { question: 'What happens if you run `setItem("data", { a: 1 })`?', options: ['It saves the object perfectly', 'It saves the string `"[object Object]"`', 'It saves `undefined`', 'It breaks the browser'], answer: 'It saves the string `"[object Object]"`' },
      { question: 'How many arguments does `setItem()` take?', options: ['0', '1', '2 (the key, and the value)', '3'], answer: '2 (the key, and the value)' }
    ],
    interviewQuestions: [
      { q: 'Is `setItem()` synchronous or asynchronous?', a: 'It is synchronous. This means if you try to save a massive 5MB string using `setItem()`, it will temporarily freeze the main thread and block the UI until it finishes saving.' }
    ],
    summary: ['Used to SAVE data.', 'Requires a `key` and a `value`.', 'Overwrites existing keys.'],
    references: commonReferences
  },
  'js_getitem': {
    isStructured: true,
    title: '223. getItem()',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `getItem()` method is used to retrieve a value from `localStorage` or `sessionStorage` by providing its corresponding key.',
    whyUseIt: 'When a user opens your web app, you use `getItem()` to read their saved preferences, scores, or tokens so you can adjust the UI accordingly.',
    syntax: 'const value = localStorage.getItem("keyName");',
    codeExample: '// Assume we previously ran: localStorage.setItem("score", "150");\n\n// 1. Retrieve the data\nconst savedScore = localStorage.getItem("score");\nconsole.log(savedScore); // Outputs the string "150"\n\n// 2. Retrieving a key that DOES NOT EXIST\nconst missingData = localStorage.getItem("favoriteColor");\nconsole.log(missingData); // Outputs: null',
    expectedOutput: '"150"\nnull',
    explanation: [
      { code: 'Returns a String', desc: 'Even if you originally saved the number `150`, `getItem` will ALWAYS return the string `"150"`. You must manually convert it back to a number using `Number()` or `parseInt()` if you want to do math with it.' },
      { code: 'Returns null', desc: 'If the key doesn\'t exist, it doesn\'t throw an error, it just gracefully returns `null`.' }
    ],
    realWorldExample: 'Checking if a user is logged in. On page load, `const token = localStorage.getItem("jwt_token")`. If `token` is null, show the Login page. If it exists, show the Dashboard.',
    commonMistakes: [
      { error: 'Doing math on a string', code: 'let score = localStorage.getItem("score");\nscore = score + 10; // If score was "10", it is now "1010"!', suffix: 'Always remember to convert numerical strings back to actual numbers before doing arithmetic.' }
    ],
    bestPractices: ['Always handle the `null` case! Assume that `getItem` might fail because the user is visiting for the very first time.'],
    practiceExercise: {
      task: 'Retrieve the value of "volume" from localStorage and store it in a variable called `vol`.',
      expectedOutput: 'Uses getItem.',
      solution: 'const vol = localStorage.getItem("volume");'
    },
    quiz: [
      { question: 'What does `getItem()` return if you ask for a key that does not exist?', options: ['undefined', 'false', 'null', 'It throws an Error'], answer: 'null' },
      { question: 'If you saved the number `99` using `setItem("age", 99)`, what exactly does `getItem("age")` return?', options: ['The number 99', 'The string "99"', 'An object', 'An array'], answer: 'The string "99"' },
      { question: 'How many arguments does `getItem()` take?', options: ['0', '1 (the key you want to read)', '2', '3'], answer: '1 (the key you want to read)' },
      { question: 'How would you correctly add 5 to a score retrieved from localStorage?', options: ['localStorage.getItem("score") + 5', 'Number(localStorage.getItem("score")) + 5', 'It adds it automatically', 'You cannot do math on localStorage items'], answer: 'Number(localStorage.getItem("score")) + 5' },
      { question: 'Can `getItem()` be used on both localStorage AND sessionStorage?', options: ['Yes', 'No, only localStorage', 'No, only sessionStorage', 'Only in strict mode'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'How would you provide a default value if `getItem` returns null?', a: 'You can use the Logical OR operator (`||`) or Nullish Coalescing (`??`). Example: `const theme = localStorage.getItem("theme") || "light";`' }
    ],
    summary: ['Used to READ data.', 'Always returns a string.', 'Returns `null` if the key doesn\'t exist.'],
    references: commonReferences
  },
  'js_removeitem': {
    isStructured: true,
    title: '224. removeItem()',
    difficulty: 'Beginner',
    readingTime: '1 min',
    definition: 'The `removeItem()` method deletes a specific key/value pair from `localStorage` or `sessionStorage`.',
    whyUseIt: 'When a user clicks "Log Out", you need to destroy their authentication token. When they clear their shopping cart, you need to remove the cart data.',
    syntax: 'localStorage.removeItem("keyName");',
    codeExample: '// 1. We have some data saved\nlocalStorage.setItem("username", "Alice");\nlocalStorage.setItem("theme", "dark");\n\n// 2. We only want to delete the username, but keep the theme\nlocalStorage.removeItem("username");\n\n// 3. Verify it is gone\nconsole.log(localStorage.getItem("username")); // null\nconsole.log(localStorage.getItem("theme")); // "dark" (still there!)',
    expectedOutput: 'null\n"dark"',
    explanation: [
      { code: 'removeItem("username")', desc: 'Permanently deletes the "username" slot from the browser storage.' },
      { code: 'Silent failure', desc: 'If you try to `removeItem()` on a key that doesn\'t exist, it simply does nothing. It does not throw an error.' }
    ],
    realWorldExample: 'A "Logout" function. It runs `localStorage.removeItem("authToken")` and then redirects the user to the login page.',
    commonMistakes: [
      { error: 'Using clear() instead of removeItem()', code: 'localStorage.clear()', suffix: '`clear()` wipes out EVERY SINGLE PIECE OF DATA your website has ever saved. If you just want to delete one thing, always use `removeItem()` so you don\'t accidentally delete user preferences.' }
    ],
    bestPractices: ['Always clean up your storage! Browsers only give you about 5MB of `localStorage` per domain. If you stop using a key, use `removeItem` to free up space.'],
    practiceExercise: {
      task: 'Write a single line of code to delete the key "shoppingCart" from sessionStorage.',
      expectedOutput: 'Uses removeItem.',
      solution: 'sessionStorage.removeItem("shoppingCart");'
    },
    quiz: [
      { question: 'What does `removeItem("score")` do?', options: ['Deletes EVERYTHING in storage', 'Sets the score to 0', 'Completely deletes the "score" key and its value from storage', 'Hides it temporarily'], answer: 'Completely deletes the "score" key and its value from storage' },
      { question: 'What happens if you call `removeItem("ghost")` but "ghost" doesn\'t exist in storage?', options: ['The browser crashes', 'It throws a syntax error', 'Nothing happens, it fails silently', 'It creates the key'], answer: 'Nothing happens, it fails silently' },
      { question: 'What is the difference between `removeItem("key")` and `clear()`?', options: ['They are exactly the same', '`removeItem` deletes one specific key, `clear()` deletes absolutely everything for that domain', '`removeItem` is for localStorage, `clear()` is for sessionStorage', '`removeItem` is faster'], answer: '`removeItem` deletes one specific key, `clear()` deletes absolutely everything for that domain' },
      { question: 'How many arguments does `removeItem()` take?', options: ['0', '1 (the key to delete)', '2 (key and value)', 'Infinite'], answer: '1 (the key to delete)' },
      { question: 'After calling `removeItem("jwt")`, what will `getItem("jwt")` return?', options: ['undefined', 'false', '"" (empty string)', 'null'], answer: 'null' }
    ],
    interviewQuestions: [
      { q: 'Is there a way to listen for when another tab calls `removeItem`?', a: 'Yes! The `window.addEventListener("storage", callback)` event fires whenever `localStorage` is changed (including removals) by *another* tab on the same domain.' }
    ],
    summary: ['Used to DELETE specific data.', 'Requires the exact key name.', 'Does nothing if the key doesn\'t exist.'],
    references: commonReferences
  },
  'js_json_stringify': {
    isStructured: true,
    title: '226. JSON.stringify()',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: '`JSON.stringify()` is a built-in function that takes a JavaScript object or array and converts it into a flat, raw JSON text string.',
    whyUseIt: 'You CANNOT send JavaScript objects over the internet (via `fetch`), and you CANNOT save JavaScript objects in `localStorage`. You must convert them to strings first. `JSON.stringify()` does this perfectly.',
    syntax: 'const jsonString = JSON.stringify(myObject);',
    codeExample: 'const user = {\n  id: 1,\n  name: "Alice",\n  isAdmin: true,\n  hobbies: ["reading", "gaming"]\n};\n\n// 1. Convert the object to a JSON string\nconst stringifiedUser = JSON.stringify(user);\n\nconsole.log(typeof stringifiedUser); // "string"\nconsole.log(stringifiedUser); \n// Output: {"id":1,"name":"Alice","isAdmin":true,"hobbies":["reading","gaming"]}\n\n// 2. Now it is safe to save in localStorage!\nlocalStorage.setItem("currentUser", stringifiedUser);',
    expectedOutput: 'The object is flattened into a single string of text, complete with double quotes around all keys and string values.',
    explanation: [
      { code: 'Flattening', desc: 'A JS object is a complex structure in memory. `stringify` flattens it into plain text so it can be transmitted via HTTP or saved to a text file.' },
      { code: 'Double Quotes', desc: 'Notice how the output string has double quotes around the keys (like `"id"` and `"name"`). This is strict JSON syntax.' }
    ],
    realWorldExample: 'Anytime you make a `fetch(url, { method: "POST", body: ... })` request, you must use `JSON.stringify()` on the body data before sending it.',
    commonMistakes: [
      { error: 'Trying to stringify functions', code: 'JSON.stringify({ func: () => console.log("hi") })', suffix: 'JSON only supports data (strings, numbers, booleans, arrays, objects). It does NOT support functions or methods. If you try to stringify an object with a function, that function is completely silently ignored and removed from the resulting string.' }
    ],
    bestPractices: ['Use the optional formatting arguments if you want to log pretty JSON to the console: `JSON.stringify(obj, null, 2)` adds 2 spaces of indentation to the string.'],
    practiceExercise: {
      task: 'Write code to convert the array `["apple", "banana"]` into a JSON string and store it in a variable called `str`.',
      expectedOutput: 'A string representation of the array.',
      solution: 'const str = JSON.stringify(["apple", "banana"]);'
    },
    quiz: [
      { question: 'What is the exact purpose of `JSON.stringify()`?', options: ['To convert a string back into an object', 'To convert a JavaScript object or array into a JSON text string', 'To encrypt data', 'To make strings uppercase'], answer: 'To convert a JavaScript object or array into a JSON text string' },
      { question: 'Why is `JSON.stringify()` required before saving an object to `localStorage`?', options: ['Because localStorage is too small', 'Because localStorage only accepts strings', 'Because objects are not secure', 'It is not required'], answer: 'Because localStorage only accepts strings' },
      { question: 'What happens if you try to `JSON.stringify()` an object that contains a function?', options: ['It crashes the browser', 'The function is converted to a string', 'The function is completely ignored and omitted from the resulting JSON string', 'It throws an error'], answer: 'The function is completely ignored and omitted from the resulting JSON string' },
      { question: 'What happens if you try to `JSON.stringify()` an object that contains `undefined`?', options: ['The key/value pair is omitted from the JSON string', 'It converts it to `null`', 'It converts it to the string "undefined"', 'It throws an error'], answer: 'The key/value pair is omitted from the JSON string' },
      { question: 'How can you format a JSON string to have 2 spaces of indentation (pretty print)?', options: ['JSON.stringify(obj, 2)', 'JSON.stringify(obj, null, 2)', 'JSON.pretty(obj)', 'JSON.stringify(obj).format()'], answer: 'JSON.stringify(obj, null, 2)' }
    ],
    interviewQuestions: [
      { q: 'What happens if you try to stringify an object with a circular reference (e.g., object A references object B, and object B references object A)?', a: '`JSON.stringify()` will throw a `TypeError: Converting circular structure to JSON`. It cannot handle infinite loops.' }
    ],
    summary: ['Converts JS objects to JSON strings.', 'Required for localStorage and fetch POST bodies.', 'Ignores functions and `undefined`.'],
    references: commonReferences
  }
};
