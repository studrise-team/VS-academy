const commonReferences = [
  { label: 'MDN Web Docs - Window.localStorage', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage' },
  { label: 'W3Schools Web Storage API', url: 'https://www.w3schools.com/html/html5_webstorage.asp' }
];

export const javascriptContentBatch16 = {
  'js_local_storage': {
    isStructured: true,
    title: '220-225. localStorage & sessionStorage',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'Web Storage API allows you to store data directly in the user\'s browser. `localStorage` saves data permanently (until manually deleted by the user or code). `sessionStorage` saves data temporarily (it gets deleted as soon as the browser tab is closed).',
    whyUseIt: 'You want to save a user\'s preference (like Dark Mode) so they don\'t have to click the button every time they visit your site. Or, you want to save a draft of a form so if they accidentally refresh, they don\'t lose their typing.',
    syntax: 'localStorage.setItem("key", "value");\nconst val = localStorage.getItem("key");',
    codeExample: '// 1. Save data\nlocalStorage.setItem("theme", "dark");\n\n// 2. Read data\nconst currentTheme = localStorage.getItem("theme");\nconsole.log("Your theme is: " + currentTheme);\n\n// 3. Delete specific data\nlocalStorage.removeItem("theme");\n\n// 4. Delete EVERYTHING for this website\n// localStorage.clear();',
    expectedOutput: '"Your theme is: dark"',
    explanation: [
      { code: 'setItem("theme", "dark")', desc: 'Requires two arguments: a Key (the name of the data) and a Value (the actual data).' },
      { code: 'getItem("theme")', desc: 'Requires one argument: the Key. It returns the Value, or `null` if the key doesn\'t exist.' },
      { code: 'removeItem("theme")', desc: 'Deletes only the specified key-value pair.' }
    ],
    realWorldExample: 'A shopping cart on a guest checkout. The cart items are saved in `localStorage`. If the user leaves the site and comes back tomorrow, their items are still in the cart.',
    commonMistakes: [
      { error: 'Assuming localStorage is secure', code: 'localStorage.setItem("password", "12345");', suffix: 'NEVER store sensitive information (passwords, social security numbers, secure API keys) in localStorage. Any JavaScript running on the page (even malicious third-party scripts) can read it.' }
    ],
    bestPractices: ['Check if data exists before using it. `if (localStorage.getItem("theme") !== null) { ... }`'],
    practiceExercise: {
      task: 'Set an item in `sessionStorage` with key "username" and value "coder123". Then, retrieve it and log it to the console.',
      expectedOutput: '"coder123"',
      solution: 'sessionStorage.setItem("username", "coder123"); console.log(sessionStorage.getItem("username"));'
    },
    quiz: [
      { question: 'What is the main difference between localStorage and sessionStorage?', options: ['localStorage is faster', 'sessionStorage deletes data when the browser tab is closed; localStorage persists', 'localStorage is for objects, sessionStorage is for strings', 'There is no difference'], answer: 'sessionStorage deletes data when the browser tab is closed; localStorage persists' },
      { question: 'Which method is used to save data to localStorage?', options: ['localStorage.save()', 'localStorage.push()', 'localStorage.add()', 'localStorage.setItem()'], answer: 'localStorage.setItem()' },
      { question: 'What does `localStorage.getItem("missingKey")` return if the key does not exist?', options: ['An error', 'undefined', 'null', '"" (empty string)'], answer: 'null' },
      { question: 'How do you completely empty all localStorage data for your website?', options: ['localStorage.delete()', 'localStorage.removeItem("all")', 'localStorage.clear()', 'localStorage = {}'], answer: 'localStorage.clear()' },
      { question: 'Is it safe to store a user\'s password in localStorage?', options: ['Yes, it is encrypted', 'Yes, only they can see it', 'No, any script on the page can access it', 'Only in strict mode'], answer: 'No, any script on the page can access it' }
    ],
    interviewQuestions: [
      { q: 'What is the storage limit for localStorage?', a: 'It varies by browser, but it is generally around 5MB per origin (domain). This is much larger than cookies, which are typically limited to 4KB.' }
    ],
    summary: ['`localStorage` persists forever.', '`sessionStorage` clears on tab close.', 'Use `setItem`, `getItem`, `removeItem`, and `clear`.'],
    references: commonReferences
  },

  'js_storage_json': {
    isStructured: true,
    title: '226-227. Storage with JSON',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The Web Storage API (localStorage) can ONLY store strings. It cannot store arrays or objects. To store complex data, you must convert it to a JSON string first, and convert it back when reading it.',
    whyUseIt: 'If you want to save a user\'s shopping cart (an array of objects), `localStorage` will silently break your array. You must use `JSON.stringify()` to save it, and `JSON.parse()` to read it.',
    syntax: 'localStorage.setItem("key", JSON.stringify(object));\nconst obj = JSON.parse(localStorage.getItem("key"));',
    codeExample: 'const cart = [{ id: 1, item: "Apple" }, { id: 2, item: "Banana" }];\n\n// 1. Convert to string and Save\nlocalStorage.setItem("myCart", JSON.stringify(cart));\n\n// 2. Read and convert back to Array\nconst savedCartString = localStorage.getItem("myCart");\nconst parsedCart = JSON.parse(savedCartString);\n\nconsole.log(parsedCart[0].item);',
    expectedOutput: '"Apple"',
    explanation: [
      { code: 'JSON.stringify(cart)', desc: 'Turns the array of objects into a flat string of text: `\'[{"id":1,"item":"Apple"},...] \'`' },
      { code: 'setItem(...)', desc: 'Saves that text string into localStorage.' },
      { code: 'JSON.parse(savedCartString)', desc: 'Reads the text string from storage and rebuilds it back into a fully functional JavaScript array.' }
    ],
    realWorldExample: 'A "To-Do List" app. Every time the user adds or deletes a task, the entire `tasks` array is `JSON.stringify`\'d and saved to localStorage.',
    commonMistakes: [
      { error: 'Forgetting to parse', code: 'const cart = localStorage.getItem("myCart");\nconsole.log(cart[0]);', suffix: 'If you forget to `parse`, `cart` is just a string. `cart[0]` will return the very first character of the string (which is a `[` bracket), not the first object.' }
    ],
    bestPractices: ['When reading from storage, always account for the fact that the data might be `null` (first time user). `const tasks = JSON.parse(localStorage.getItem("tasks")) || [];` (Defaults to an empty array if null).'],
    practiceExercise: {
      task: 'Create an object `let user = { name: "Tom" };`. Save it to localStorage under the key "user". Retrieve it, parse it, and log the name.',
      expectedOutput: '"Tom"',
      solution: 'let user = {name:"Tom"}; localStorage.setItem("user", JSON.stringify(user)); let retrieved = JSON.parse(localStorage.getItem("user")); console.log(retrieved.name);'
    },
    quiz: [
      { question: 'What data type is localStorage capable of saving?', options: ['Objects', 'Arrays', 'Strings only', 'Any data type'], answer: 'Strings only' },
      { question: 'What happens if you try to save an object directly? `localStorage.setItem("obj", {a: 1})`', options: ['It works fine', 'It throws an error', 'It saves the string "[object Object]"', 'It saves it as XML'], answer: 'It saves the string "[object Object]"' },
      { question: 'Which method prepares an object to be saved in localStorage?', options: ['JSON.parse()', 'JSON.toString()', 'JSON.stringify()', 'String()'], answer: 'JSON.stringify()' },
      { question: 'Which method rebuilds an object when reading from localStorage?', options: ['JSON.parse()', 'JSON.build()', 'JSON.stringify()', 'Object.create()'], answer: 'JSON.parse()' },
      { question: 'What is a good way to handle a missing array in localStorage?', options: ['Try/Catch block', '`JSON.parse(getItem("arr")) || []`', 'Restart browser', 'Throw an error'], answer: '`JSON.parse(getItem("arr")) || []`' }
    ],
    interviewQuestions: [
      { q: 'Why might `JSON.parse(localStorage.getItem("key"))` throw a SyntaxError?', a: 'If the data in localStorage was corrupted, or manually altered by the user in DevTools to be invalid JSON, `JSON.parse` will crash. It is safest to wrap parsing in a try/catch block.' }
    ],
    summary: ['localStorage only holds strings.', 'Use `JSON.stringify()` before `setItem`.', 'Use `JSON.parse()` after `getItem`.'],
    references: commonReferences
  }
};
