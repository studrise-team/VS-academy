const commonReferences = [
  { label: 'MDN Web Docs - Objects', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects' }
];

export const javascriptContentBatchMissing6 = {
  'js_properties': {
    isStructured: true,
    title: '99. Properties',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Properties are the values associated with a JavaScript object. They are defined as key-value pairs (also called name-value pairs).',
    whyUseIt: 'Properties are how an object stores its state or data. For a `car` object, properties would be `make`, `model`, and `color`.',
    syntax: 'let obj = { propertyName: propertyValue };',
    codeExample: 'let user = {\n  username: "johndoe",\n  age: 25,\n  isAdmin: false,\n  "home address": "123 Main St"\n};\n\nconsole.log(user.username);\nconsole.log(user["home address"]);',
    expectedOutput: '"johndoe"\n"123 Main St"',
    explanation: [
      { code: 'username: "johndoe"', desc: '`username` is the key (the name of the property), and `"johndoe"` is the value.' },
      { code: '"home address"', desc: 'Keys are strings. If a key has spaces or special characters, you MUST wrap it in quotes and access it using bracket notation.' }
    ],
    realWorldExample: 'A configuration object for an app: `const config = { theme: "dark", notifications: true, volume: 80 };`.',
    commonMistakes: [
      { error: 'Using reserved keywords', code: '{ return: "value" }', suffix: 'While modern JS allows using reserved words (like `return`, `for`, `class`) as property names, it\'s considered a bad practice as it can confuse other developers.' }
    ],
    bestPractices: ['Name your properties clearly (e.g., `firstName` instead of `fn`). Use camelCase for multi-word property names.'],
    practiceExercise: {
      task: 'Create an object `phone` with properties `brand` ("Apple") and `model` ("iPhone 14"). Log the entire object.',
      expectedOutput: '{brand: "Apple", model: "iPhone 14"}',
      solution: 'let phone = { brand: "Apple", model: "iPhone 14" }; console.log(phone);'
    },
    quiz: [
      { question: 'What makes up a property in an object?', options: ['A key and a value', 'A function and a variable', 'An index and a string', 'A name and a method'], answer: 'A key and a value' },
      { question: 'What data type is a property key by default?', options: ['Number', 'String', 'Boolean', 'Array'], answer: 'String' },
      { question: 'Do you need quotes around keys like `age: 30`?', options: ['Yes, always', 'No, JavaScript automatically treats it as a string', 'Only if the value is a string', 'Only in strict mode'], answer: 'No, JavaScript automatically treats it as a string' },
      { question: 'When MUST you use quotes around a property key?', options: ['Never', 'If the key contains a space or a hyphen (e.g., "first-name")', 'Always', 'Only if it starts with a number'], answer: 'If the key contains a space or a hyphen (e.g., "first-name")' },
      { question: 'Can an object property hold another object?', options: ['Yes', 'No', 'Only if it\'s an array', 'Only in Node.js'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between a property and a method?', a: 'A property is a variable attached to an object (holds data). A method is a function attached to an object (performs an action).' }
    ],
    summary: ['Properties hold data.', 'Consist of key-value pairs.', 'Keys with spaces need quotes.'],
    references: commonReferences
  },
  'js_updating_properties': {
    isStructured: true,
    title: '101. Updating Properties',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'You can update or change the value of an existing property by reassigning it using dot notation or bracket notation.',
    whyUseIt: 'Objects represent state. When a user changes their username, or a character in a game levels up, you need to update the object\'s properties.',
    syntax: 'objectName.propertyName = newValue;',
    codeExample: 'let user = {\n  name: "Alice",\n  score: 10\n};\n\n// Update name\nuser.name = "Alice Smith";\n\n// Increment score\nuser.score += 5;\n\nconsole.log(user);',
    expectedOutput: '{name: "Alice Smith", score: 15}',
    explanation: [
      { code: 'user.name = "Alice Smith"', desc: 'Overwrites the existing value "Alice" with the new string.' },
      { code: 'user.score += 5', desc: 'Reads the current score (10), adds 5, and assigns 15 back to the score property.' }
    ],
    realWorldExample: 'A user updates their profile picture url. `userProfile.avatarUrl = newUrl;`',
    commonMistakes: [
      { error: 'Updating a string as if it was an object', code: 'let str = "hi"; str.name = "Bob";', suffix: 'Primitive types (like strings and numbers) are immutable. You cannot add or update properties on them. It won\'t throw an error, but it won\'t work.' }
    ],
    bestPractices: ['If you want to prevent an object\'s properties from being updated entirely, you can use `Object.freeze(obj)`. If you want to allow updates but prevent adding/deleting, use `Object.seal(obj)`.'],
    practiceExercise: {
      task: 'Declare `let car = { make: "Ford", speed: 60 }`. Increase the speed to 80. Log the object.',
      expectedOutput: '{make: "Ford", speed: 80}',
      solution: 'let car = { make: "Ford", speed: 60 }; car.speed = 80; console.log(car);'
    },
    quiz: [
      { question: 'How do you change the value of an existing property?', options: ['You cannot change properties', 'object.key = newValue', 'object.update("key", newValue)', 'object.change(key)'], answer: 'object.key = newValue' },
      { question: 'What happens if you update a `const` object\'s property: `const obj = {x: 1}; obj.x = 2;`?', options: ['Throws an error because it is a const', 'It successfully updates to 2', 'It creates a new object', 'It crashes the browser'], answer: 'It successfully updates to 2' },
      { question: 'Wait, why does updating a `const` object work?', options: ['It is a bug in JS', 'const only prevents reassignment of the variable itself, not the contents of the object it points to', 'const only applies to numbers', 'const means constant updates are allowed'], answer: 'const only prevents reassignment of the variable itself, not the contents of the object it points to' },
      { question: 'How do you increment a numeric property?', options: ['obj.score.increment()', 'obj.score++', 'obj.score = obj.score.add(1)', 'obj.score = +1'], answer: 'obj.score++' },
      { question: 'Can you update properties using bracket notation?', options: ['No', 'Yes (e.g. `obj["name"] = "Bob"`)', 'Only for numbers', 'Only if the property has a space'], answer: 'Yes (e.g. `obj["name"] = "Bob"`)' }
    ],
    interviewQuestions: [
      { q: 'How can you completely lock down an object so that its properties cannot be updated, added, or deleted?', a: 'You pass the object into `Object.freeze(obj)`.' }
    ],
    summary: ['Use dot or bracket notation to update.', '`const` objects can still have their properties updated.', 'Use `Object.freeze()` to prevent updates.'],
    references: commonReferences
  },
  'js_adding_properties': {
    isStructured: true,
    title: '102. Adding Properties',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'You can add new properties to an existing object at any time just by assigning a value to a key that does not currently exist.',
    whyUseIt: 'Objects are dynamic in JavaScript. You might fetch user data from a server and then want to attach a new property like `isLoggedIn: true` before passing it to your UI.',
    syntax: 'objectName.newProperty = value;',
    codeExample: 'let user = { name: "John" };\n\n// Add a new property\nuser.age = 25;\n\n// Add a property with spaces\nuser["has premium"] = true;\n\nconsole.log(user);',
    expectedOutput: '{name: "John", age: 25, "has premium": true}',
    explanation: [
      { code: 'user.age = 25', desc: 'Because `age` did not exist on the `user` object, JavaScript creates it and sets it to 25.' },
      { code: 'user["has premium"]', desc: 'Because the key has a space, we MUST use bracket notation to add it.' }
    ],
    realWorldExample: 'Adding a timestamp to a data payload before sending it to a database: `payload.timestamp = Date.now();`.',
    commonMistakes: [
      { error: 'Adding a property to undefined', code: 'let user; user.age = 25;', suffix: 'You cannot add properties to `undefined` or `null`. You will get a "Cannot set properties of undefined" error. The variable must first be initialized as an object: `let user = {};`.' }
    ],
    bestPractices: ['While you CAN add properties anytime, it is often better for performance and code readability to define all expected properties when you create the object, even if they are initially `null`.'],
    practiceExercise: {
      task: 'Declare an empty object `let cat = {}`. Add a property `color` with the value "Black". Log the object.',
      expectedOutput: '{color: "Black"}',
      solution: 'let cat = {}; cat.color = "Black"; console.log(cat);'
    },
    quiz: [
      { question: 'How do you add a new property to an existing object?', options: ['obj.add("key", "value")', 'obj.key = "value"', 'push(obj, "key", "value")', 'obj.insert("key: value")'], answer: 'obj.key = "value"' },
      { question: 'What happens if you assign a value to a property that already exists?', options: ['It adds a second property with the same name', 'It throws an error', 'It overwrites (updates) the existing property', 'It ignores the new assignment'], answer: 'It overwrites (updates) the existing property' },
      { question: 'Can you add a property whose name is stored in a variable?', options: ['Yes, using bracket notation (e.g., `obj[myVar] = value`)', 'No, keys must be hardcoded', 'Yes, using dot notation (e.g., `obj.myVar = value`)', 'Only if the variable is a string'], answer: 'Yes, using bracket notation (e.g., `obj[myVar] = value`)' },
      { question: 'What error occurs if you try `let x = null; x.name = "Bob"`?', options: ['Syntax Error', 'Cannot set properties of null', 'Invalid variable assignment', 'No error'], answer: 'Cannot set properties of null' },
      { question: 'Is it possible to add a function as a property to an existing object?', options: ['Yes, it becomes a method', 'No, functions must be added when the object is created', 'Yes, but it won\'t work', 'Only if you use `new Function()`'], answer: 'Yes, it becomes a method' }
    ],
    interviewQuestions: [
      { q: 'How would you prevent developers from adding new properties to an object, but still allow them to update existing ones?', a: 'You use `Object.seal(obj)`.' }
    ],
    summary: ['Add properties by assigning to a new key.', 'Use bracket notation for dynamic keys.', 'Initialize empty objects first (`{}`).'],
    references: commonReferences
  },
  'js_deleting_properties': {
    isStructured: true,
    title: '103. Deleting Properties',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: 'The `delete` operator removes a given property from an object. If the deletion is successful, the property is completely removed (not just set to undefined).',
    whyUseIt: 'When you want to remove sensitive data (like a password) from an object before sending that object to the front-end or saving it to a log file.',
    syntax: 'delete object.property;',
    codeExample: 'let user = {\n  id: 1,\n  name: "Jane",\n  password: "supersecret"\n};\n\n// Remove the password property\ndelete user.password;\n\nconsole.log(user);',
    expectedOutput: '{id: 1, name: "Jane"}',
    explanation: [
      { code: 'delete user.password', desc: 'The `password` key and its value are permanently removed from the object.' }
    ],
    realWorldExample: 'Removing an internal database `_id` before sending a user object to the client API response: `delete responseData._id;`.',
    commonMistakes: [
      { error: 'Trying to delete a variable', code: 'let age = 10; delete age;', suffix: 'The `delete` keyword ONLY works on object properties. It cannot delete standard variables declared with `let`, `const`, or `var`. It will return false in strict mode.' }
    ],
    bestPractices: ['Using `delete` can negatively impact JavaScript engine optimization (it changes the hidden class of the object). Often, setting the property to `null` or `undefined` is preferred for performance.'],
    practiceExercise: {
      task: 'Declare `let dog = { breed: "Pug", age: 3 }`. Delete the `age` property. Log the object.',
      expectedOutput: '{breed: "Pug"}',
      solution: 'let dog = { breed: "Pug", age: 3 }; delete dog.age; console.log(dog);'
    },
    quiz: [
      { question: 'What keyword is used to remove a property from an object?', options: ['remove', 'delete', 'clear', 'destroy'], answer: 'delete' },
      { question: 'Does `delete` set the property to undefined or completely remove the key?', options: ['It sets the value to undefined', 'It sets the value to null', 'It completely removes the key and value', 'It hides the property'], answer: 'It completely removes the key and value' },
      { question: 'Can you use `delete` to remove a regular variable (e.g., `let x = 5; delete x`)?', options: ['Yes', 'No, it only works on object properties', 'Only if the variable is a string', 'Yes, but only in strict mode'], answer: 'No, it only works on object properties' },
      { question: 'What does the `delete` operator return?', options: ['The deleted value', 'The object itself', 'A boolean indicating success or failure', 'undefined'], answer: 'A boolean indicating success or failure' },
      { question: 'Can you delete a property from an array? (e.g. `delete arr[1]`)', options: ['No, only from objects', 'Yes, it removes the item and shifts everything down', 'Yes, but it leaves an `empty` hole in the array (length does not change)', 'It crashes'], answer: 'Yes, but it leaves an `empty` hole in the array (length does not change)' }
    ],
    interviewQuestions: [
      { q: 'Why is setting a property to `null` often preferred over using the `delete` operator?', a: 'Because modern JS engines like V8 optimize objects based on their "shape" (hidden classes). Deleting a property changes the shape, which de-optimizes the object and makes access slower. Setting to `null` preserves the shape.' }
    ],
    summary: ['Use `delete obj.prop` to remove properties.', 'Only works on objects, not variables.', 'Can cause performance issues in V8.'],
    references: commonReferences
  },
  'js_this_keyword': {
    isStructured: true,
    title: '105. this Keyword',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'In JavaScript, the `this` keyword refers to the object that is currently executing the code. Inside an object method, `this` refers to the object itself.',
    whyUseIt: 'It allows a method to read and update the properties of its own object without needing to know the name of the variable the object is assigned to.',
    syntax: 'this.propertyName',
    codeExample: 'let user = {\n  firstName: "Tony",\n  lastName: "Stark",\n  getFullName: function() {\n    // "this" refers to the user object\n    return this.firstName + " " + this.lastName;\n  }\n};\n\nconsole.log(user.getFullName());',
    expectedOutput: '"Tony Stark"',
    explanation: [
      { code: 'this.firstName', desc: 'Because `getFullName` was called ON the `user` object (`user.getFullName()`), `this` equals `user`.' }
    ],
    realWorldExample: 'A game character object that needs to lower its own health: `takeDamage: function(amount) { this.health -= amount; }`.',
    commonMistakes: [
      { error: 'Using arrow functions for object methods', code: 'getFullName: () => { return this.name; }', suffix: 'Arrow functions do NOT get their own `this`. They inherit `this` from the outer scope (usually the `window` object). Always use regular functions (`function() {}`) for object methods.' },
      { error: 'Losing "this" when passing a method as a callback', code: 'setTimeout(user.getFullName, 1000)', suffix: 'When passed as a callback, the method is disconnected from the object. `this` becomes undefined or the window. Fix: `setTimeout(() => user.getFullName(), 1000)`.' }
    ],
    bestPractices: ['Use the ES6 method shorthand: instead of `getName: function() {}`, just write `getName() {}`.'],
    practiceExercise: {
      task: 'Create an object `counter` with a property `count: 0` and a method `increment()` that uses `this` to increase `count` by 1. Call the method and log the object.',
      expectedOutput: '{count: 1, increment: ƒ}',
      solution: 'let counter = { count: 0, increment: function() { this.count++; } }; counter.increment(); console.log(counter);'
    },
    quiz: [
      { question: 'What does `this` refer to inside an object\'s method?', options: ['The global window object', 'The object that owns the method', 'The function itself', 'undefined'], answer: 'The object that owns the method' },
      { question: 'Should you use an arrow function for an object method if you need to use `this`?', options: ['Yes, it is the modern way', 'No, arrow functions do not have their own `this`', 'Only if the object has no properties', 'Yes, but only in strict mode'], answer: 'No, arrow functions do not have their own `this`' },
      { question: 'If you console.log `this` in the global scope (not inside any object or function), what does it output in a browser?', options: ['undefined', 'null', 'The Window object', 'An error'], answer: 'The Window object' },
      { question: 'How can you write a method shorter in ES6?', options: ['myMethod: () => {}', 'myMethod() {}', 'function myMethod() {}', 'method: myMethod'], answer: 'myMethod() {}' },
      { question: 'What happens to `this` if you pass a method as a callback (e.g., `btn.addEventListener("click", obj.method)`)?', options: ['It still refers to the object', 'It refers to the element that was clicked', 'It crashes', 'It is deleted'], answer: 'It refers to the element that was clicked' }
    ],
    interviewQuestions: [
      { q: 'How can you manually set the value of `this` for a function?', a: 'You can use the `.bind()`, `.call()`, or `.apply()` methods on the function. For example, `const boundFn = user.getName.bind(user);`.' }
    ],
    summary: ['`this` points to the object calling the method.', 'Do NOT use arrow functions for methods.', '`this` can change context if passed as a callback.'],
    references: commonReferences
  }
};
