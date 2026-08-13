const commonReferences = [
  { label: 'MDN Web Docs - Objects', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects' }
];

export const javascriptContentBatchMissing7 = {
  'js_object_keys': {
    isStructured: true,
    title: '106. Object.keys()',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: 'The `Object.keys()` static method returns an array of a given object\'s own enumerable string-keyed property names (the keys).',
    whyUseIt: 'Because objects don\'t have a `.length` property, and you can\'t use standard `for` loops or array methods like `map()` directly on objects. `Object.keys()` gives you an array of the keys, unlocking all array methods.',
    syntax: 'Object.keys(obj)',
    codeExample: 'let user = {\n  id: 1,\n  name: "Alice",\n  role: "Admin"\n};\n\nlet keys = Object.keys(user);\nconsole.log(keys);\nconsole.log("Length:", keys.length);',
    expectedOutput: '["id", "name", "role"]\nLength: 3',
    explanation: [
      { code: 'Object.keys(user)', desc: 'Extracts the property names ("id", "name", "role") and puts them into an array.' },
      { code: 'keys.length', desc: 'A common trick to find out how many properties an object has.' }
    ],
    realWorldExample: 'Checking if a settings object is completely empty before saving it to a database: `if (Object.keys(settings).length === 0) { ... }`.',
    commonMistakes: [
      { error: 'Calling it on the instance', code: 'user.keys()', suffix: '`keys()` is a STATIC method on the global `Object` constructor. You must call `Object.keys(user)`, not `user.keys()`.' }
    ],
    bestPractices: ['Combine `Object.keys()` with `forEach()` or `map()` to iterate over an object\'s properties dynamically.'],
    practiceExercise: {
      task: 'Declare `let car = { make: "Toyota", year: 2020 }`. Get the keys in an array, and log the array.',
      expectedOutput: '["make", "year"]',
      solution: 'let car = { make: "Toyota", year: 2020 }; console.log(Object.keys(car));'
    },
    quiz: [
      { question: 'What does `Object.keys()` return?', options: ['An array of the object\'s keys', 'An array of the object\'s values', 'A string', 'The length of the object'], answer: 'An array of the object\'s keys' },
      { question: 'How do you find the number of properties in an object `obj`?', options: ['obj.length', 'Object.keys(obj).length', 'obj.size', 'obj.count'], answer: 'Object.keys(obj).length' },
      { question: 'Is `keys()` called on the object itself (e.g., `myObj.keys()`)?', options: ['Yes', 'No, it must be called as `Object.keys(myObj)`', 'Only in strict mode', 'Yes, but it is deprecated'], answer: 'No, it must be called as `Object.keys(myObj)`' },
      { question: 'What does `Object.keys({})` return?', options: ['undefined', 'null', '[] (an empty array)', 'Error'], answer: '[] (an empty array)' },
      { question: 'Can you use `forEach` directly on an object?', options: ['Yes', 'No, you must use Object.keys() first to get an array', 'Only if the object has numbers', 'Only in ES6'], answer: 'No, you must use Object.keys() first to get an array' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `for...in` and `Object.keys()`?', a: '`Object.keys()` returns an array of the object\'s *own* enumerable properties. `for...in` iterates over the object\'s *own* properties AND properties inherited from its prototype chain.' }
    ],
    summary: ['Returns an array of property names (keys).', 'Called as `Object.keys(obj)`.', 'Used to find the "length" of an object.'],
    references: commonReferences
  },
  'js_object_entries': {
    isStructured: true,
    title: '108. Object.entries()',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `Object.entries()` static method returns an array of a given object\'s own enumerable string-keyed property `[key, value]` pairs.',
    whyUseIt: 'The absolute best way to loop over both the keys and values of an object simultaneously. It turns an object into a 2D array.',
    syntax: 'Object.entries(obj)',
    codeExample: 'let scores = { math: 90, science: 85 };\n\nlet entries = Object.entries(scores);\nconsole.log(entries);\n\n// Very common looping pattern:\nfor (let [subject, score] of Object.entries(scores)) {\n  console.log(subject + " = " + score);\n}',
    expectedOutput: '[ ["math", 90], ["science", 85] ]\nmath = 90\nscience = 85',
    explanation: [
      { code: 'Object.entries(scores)', desc: 'Creates an array containing smaller arrays. Each inner array is `[key, value]`.' },
      { code: 'let [subject, score]', desc: 'Uses array destructuring in the `for...of` loop to instantly create variables for the key and value on each iteration.' }
    ],
    realWorldExample: 'Converting a JSON object representing URL query parameters into an actual query string: `Object.entries(params).map(([k, v]) => k + "=" + v).join("&");`',
    commonMistakes: [
      { error: 'Calling it on the instance', code: 'obj.entries()', suffix: 'Just like `keys()` and `values()`, this is a static method on the `Object` constructor. Use `Object.entries(obj)`.' }
    ],
    bestPractices: ['Use `Object.entries()` combined with array destructuring `([key, value])` for the cleanest, most readable way to iterate over objects.'],
    practiceExercise: {
      task: 'Declare `let user = { id: 1, admin: true }`. Use `Object.entries()` and log the resulting 2D array.',
      expectedOutput: '[ ["id", 1], ["admin", true] ]',
      solution: 'let user = { id: 1, admin: true }; console.log(Object.entries(user));'
    },
    quiz: [
      { question: 'What does `Object.entries()` return?', options: ['An array of keys', 'An array of values', 'An array of [key, value] arrays', 'A string'], answer: 'An array of [key, value] arrays' },
      { question: 'What is the output of `Object.entries({a: 1})`?', options: ['["a", 1]', '[ ["a", 1] ]', '{"a": 1}', '["a"]'], answer: '[ ["a", 1] ]' },
      { question: 'Which loop is most commonly paired with `Object.entries()`?', options: ['for loop', 'while loop', 'for...of loop', 'do...while loop'], answer: 'for...of loop' },
      { question: 'What does `Object.entries({})` return?', options: ['[]', 'undefined', 'null', 'Error'], answer: '[]' },
      { question: 'How can you quickly reconstruct an object from the array returned by `Object.entries()`?', options: ['Object.fromEntries(arr)', 'arr.toObject()', 'new Object(arr)', 'You cannot'], answer: 'Object.fromEntries(arr)' }
    ],
    interviewQuestions: [
      { q: 'How would you filter an object to remove any properties whose values are `null`?', a: '`Object.fromEntries(Object.entries(obj).filter(([key, value]) => value !== null));`' }
    ],
    summary: ['Returns a 2D array of `[key, value]`.', 'Perfect for iterating with `for...of`.', 'Combine with array destructuring for clean code.'],
    references: commonReferences
  },
  'js_spread_operator_with_objects': {
    isStructured: true,
    title: '110. Spread Operator with Objects',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The spread operator (`...`) can be used inside object literals to copy the own enumerable properties from a provided object onto a new object.',
    whyUseIt: 'It is the modern, cleanest way to merge multiple objects together or clone an object while adding/updating specific properties.',
    syntax: 'let newObj = { ...oldObj, newProperty: value };',
    codeExample: 'let defaultSettings = { volume: 50, theme: "light" };\nlet userSettings = { theme: "dark", notifications: true };\n\n// Merge them. userSettings overwrites defaultSettings where keys overlap.\nlet finalSettings = { ...defaultSettings, ...userSettings };\n\nconsole.log(finalSettings);',
    expectedOutput: '{volume: 50, theme: "dark", notifications: true}',
    explanation: [
      { code: '...defaultSettings', desc: 'Unpacks all properties of `defaultSettings` into the new object.' },
      { code: '...userSettings', desc: 'Unpacks all properties of `userSettings` into the new object. Because `theme` exists in both, the one that comes LAST ("dark") wins and overwrites the earlier one.' }
    ],
    realWorldExample: 'In React, updating a single property in a state object: `setUserState({ ...userState, loggedIn: true });`.',
    commonMistakes: [
      { error: 'Shallow copy warning', code: 'let copy = { ...obj };', suffix: 'Just like with arrays, spreading an object only creates a shallow copy. If the object contains nested objects, those nested objects are passed by reference, not copied.' },
      { error: 'Order matters', code: '{ theme: "dark", ...defaults }', suffix: 'If `defaults` has `theme: "light"`, it will overwrite your "dark" setting because the spread happens AFTER your manual property. Always put the defaults first.' }
    ],
    bestPractices: ['Use the spread operator instead of `Object.assign()`. It does the exact same thing but is much more readable.'],
    practiceExercise: {
      task: 'Declare `let p1 = { x: 10 }` and `let p2 = { y: 20 }`. Create a new object `point` that merges both using the spread operator. Log `point`.',
      expectedOutput: '{x: 10, y: 20}',
      solution: 'let p1 = { x: 10 }; let p2 = { y: 20 }; let point = { ...p1, ...p2 }; console.log(point);'
    },
    quiz: [
      { question: 'What does the spread operator do when used on an object?', options: ['Converts it to an array', 'Unpacks its properties into a new object', 'Deletes the object', 'Freezes the object'], answer: 'Unpacks its properties into a new object' },
      { question: 'What happens if two objects being merged have the same key?', options: ['An error is thrown', 'Both keys are kept', 'The first object\'s value wins', 'The last object\'s value wins (overwrites)'], answer: 'The last object\'s value wins (overwrites)' },
      { question: 'Is `{ ...obj }` a deep copy or a shallow copy?', options: ['Deep copy', 'Shallow copy', 'Neither', 'Both'], answer: 'Shallow copy' },
      { question: 'What is the older alternative to the object spread operator?', options: ['Object.merge()', 'Object.assign()', 'Object.concat()', 'Object.copy()'], answer: 'Object.assign()' },
      { question: 'What will `let o = { a: 1, ...{a: 2, b: 3} };` result in?', options: ['{a: 1, b: 3}', '{a: 2, b: 3}', 'Error', 'undefined'], answer: '{a: 2, b: 3}' }
    ],
    interviewQuestions: [
      { q: 'How can you remove a property from an object using the REST operator (which looks like the spread operator)?', a: 'Using object destructuring: `let { unwantedKey, ...rest } = obj;`. The `rest` object will now have everything EXCEPT the unwanted key, effectively removing it without mutating the original object.' }
    ],
    summary: ['Unpacks object properties.', 'Merges objects easily.', 'Properties defined later overwrite earlier ones.'],
    references: commonReferences
  },
  'js_nested_objects': {
    isStructured: true,
    title: '111. Nested Objects',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A nested object is simply an object placed inside another object as a property value. Because an object can hold any data type, it can hold other objects.',
    whyUseIt: 'Real-world data is rarely flat. A user has a profile, and that profile has an address, and that address has a city and zip code. Nested objects model this hierarchical data perfectly.',
    syntax: 'let obj = { prop: { innerProp: value } };',
    codeExample: 'let user = {\n  id: 101,\n  name: "Sarah",\n  contact: {\n    email: "sarah@test.com",\n    phone: "555-1234"\n  }\n};\n\nconsole.log(user.name); // "Sarah"\nconsole.log(user.contact.email); // "sarah@test.com"',
    expectedOutput: '"Sarah"\n"sarah@test.com"',
    explanation: [
      { code: 'contact: { ... }', desc: 'The `contact` property doesn\'t hold a string or number, it holds an entirely new object.' },
      { code: 'user.contact.email', desc: 'You "chain" the dot notation to drill down into the nested object.' }
    ],
    realWorldExample: 'Almost all APIs (like weather APIs or social media APIs) return highly nested objects, like `response.data.current.temperature`.',
    commonMistakes: [
      { error: 'Cannot read properties of undefined', code: 'user.address.city', suffix: 'If `address` does not exist on `user`, `user.address` is `undefined`. Trying to read `.city` of `undefined` throws a fatal error and crashes your app. Use Optional Chaining (`user.address?.city`) to fix this.' }
    ],
    bestPractices: ['When accessing deeply nested properties that might not exist, always use the Optional Chaining operator (`?.`) to prevent fatal crashes.'],
    practiceExercise: {
      task: 'Declare an object `student` with a property `grades` which is an object containing `math: 90`. Log the math grade.',
      expectedOutput: '90',
      solution: 'let student = { grades: { math: 90 } }; console.log(student.grades.math);'
    },
    quiz: [
      { question: 'What is a nested object?', options: ['An array of objects', 'An object inside an array', 'An object that is a property of another object', 'A frozen object'], answer: 'An object that is a property of another object' },
      { question: 'How do you access `email` in `{ contact: { email: "a@b.com" } }` assuming the object is `user`?', options: ['user[email]', 'user.contact.email', 'user.email.contact', 'contact.email'], answer: 'user.contact.email' },
      { question: 'What happens if you try to access `user.profile.age` but `profile` is undefined?', options: ['It returns undefined', 'It returns null', 'It throws a TypeError (Cannot read properties of undefined)', 'It creates the profile object'], answer: 'It throws a TypeError (Cannot read properties of undefined)' },
      { question: 'How can you safely read a nested property without crashing if a parent object is missing?', options: ['Use Optional Chaining (`user.profile?.age`)', 'Use a try/catch block', 'You can\'t', 'Both A and B'], answer: 'Both A and B' },
      { question: 'Can an object be nested indefinitely?', options: ['No, limit is 3 levels', 'No, limit is 10 levels', 'Yes, limited only by computer memory', 'Yes, but only in Node.js'], answer: 'Yes, limited only by computer memory' }
    ],
    interviewQuestions: [
      { q: 'How do you make a deep copy (clone) of a nested object so that modifying the copy does not modify the original?', a: 'The modern way is `structuredClone(obj)`. The older hacky way is `JSON.parse(JSON.stringify(obj))`.' }
    ],
    summary: ['Objects within objects.', 'Access with chained dot notation.', 'Prone to undefined errors; use Optional Chaining (`?.`).'],
    references: commonReferences
  },
  'js_array_of_objects': {
    isStructured: true,
    title: '112. Array of Objects',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'An array of objects is simply an array where every item inside it is an object. This is the most common data structure in modern web development.',
    whyUseIt: 'When you have a list of complex items. For example, a list of products in a store, a list of users, or a list of tweets.',
    syntax: 'let arr = [ { key: value }, { key: value } ];',
    codeExample: 'let products = [\n  { id: 1, name: "Laptop", price: 1000 },\n  { id: 2, name: "Mouse", price: 50 },\n  { id: 3, name: "Keyboard", price: 80 }\n];\n\n// Loop over the array of objects\nproducts.forEach(p => {\n  console.log(p.name + " costs $" + p.price);\n});',
    expectedOutput: '"Laptop costs $1000"\n"Mouse costs $50"\n"Keyboard costs $80"',
    explanation: [
      { code: '[ {...}, {...} ]', desc: 'The outer structure is an array. The inner elements are objects.' },
      { code: 'p.name', desc: 'During the loop, `p` represents the current object. We use dot notation to grab its `name` property.' }
    ],
    realWorldExample: 'Every time you fetch data from a REST API or a database (like a list of movies or posts), it almost always comes back as an array of objects (JSON).',
    commonMistakes: [
      { error: 'Trying to access properties directly on the array', code: 'products.name', suffix: 'The array itself doesn\'t have a `name`. You must access an specific index first: `products[0].name`, or loop through the array.' }
    ],
    bestPractices: ['Combine an Array of Objects with array methods like `map()`, `filter()`, and `reduce()` to incredibly powerful effect. E.g., `let cheapItems = products.filter(p => p.price < 100);`.'],
    practiceExercise: {
      task: 'Declare `let cars = [{brand: "Ford"}, {brand: "BMW"}]`. Log the brand of the second car.',
      expectedOutput: '"BMW"',
      solution: 'let cars = [{brand: "Ford"}, {brand: "BMW"}]; console.log(cars[1].brand);'
    },
    quiz: [
      { question: 'What is an array of objects?', options: ['An object that contains arrays', 'An array where each element is an object', 'A special data type in JS', 'A JSON string'], answer: 'An array where each element is an object' },
      { question: 'If `let users = [{name: "A"}, {name: "B"}]`, how do you get "A"?', options: ['users.name', 'users[0].name', 'users.0.name', 'users[1].name'], answer: 'users[0].name' },
      { question: 'Which data format is identical in structure to a JS array of objects?', options: ['XML', 'HTML', 'JSON', 'CSV'], answer: 'JSON' },
      { question: 'How would you get an array of just the names from an array of user objects?', options: ['users.forEach(u => u.name)', 'users.map(u => u.name)', 'users.filter(u => u.name)', 'users.names()'], answer: 'users.map(u => u.name)' },
      { question: 'How do you find a specific object in an array of objects by its ID?', options: ['arr.find(obj => obj.id === targetId)', 'arr.includes(targetId)', 'arr[targetId]', 'arr.indexOf(targetId)'], answer: 'arr.find(obj => obj.id === targetId)' }
    ],
    interviewQuestions: [
      { q: 'Given an array of objects with a `category` property, how would you group them into an object where the keys are the categories and the values are arrays of items?', a: 'You can use `reduce()`: `items.reduce((acc, item) => { acc[item.category] = acc[item.category] || []; acc[item.category].push(item); return acc; }, {});`' }
    ],
    summary: ['Most common data structure (JSON).', 'Array methods (map/filter) are used heavily.', 'Access via index, then dot notation.'],
    references: commonReferences
  }
};
