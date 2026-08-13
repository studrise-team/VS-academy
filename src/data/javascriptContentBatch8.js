const commonReferences = [
  { label: 'W3Schools JavaScript Objects', url: 'https://www.w3schools.com/js/js_objects.asp' },
  { label: 'MDN Web Docs - Working with Objects', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects' }
];

export const javascriptContentBatch8 = {
  'js_what_is_an_object': {
    isStructured: true,
    title: '97. What is an Object?',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'An object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.',
    whyUseIt: 'Objects are used to group related data and functions together into a single, logical package. Instead of having separate variables for a user\'s name, age, and email, you combine them into one `user` object.',
    syntax: 'let objectName = {\n  key1: "value1",\n  key2: "value2"\n};',
    codeExample: 'let user = {\n  firstName: "John",\n  lastName: "Doe",\n  age: 30,\n  isActive: true\n};\n\nconsole.log(user);',
    expectedOutput: '{ firstName: "John", lastName: "Doe", age: 30, isActive: true }',
    explanation: [
      { code: 'let user = { ... }', desc: 'Declares an object named `user` using curly braces.' },
      { code: 'firstName: "John"', desc: 'A key-value pair. `firstName` is the property name (key), and `"John"` is the value.' }
    ],
    realWorldExample: 'A video game character. You create a `player` object that stores `health: 100`, `inventory: ["sword", "shield"]`, and `positionX: 50`.',
    commonMistakes: [
      { error: 'Using an equals sign inside the object', code: 'let car = { make = "Toyota" };', suffix: 'Inside an object, you MUST use a colon `:` to separate the key from the value, not an equals sign.' }
    ],
    bestPractices: ['Use objects when you have data that is logically connected. Use arrays when you have a list of similar items.'],
    practiceExercise: {
      task: 'Create an object named `book` with three properties: `title` (string), `author` (string), and `pages` (number). Log the object.',
      expectedOutput: '{ title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310 } (or your own values)',
      solution: 'let book = { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310 }; console.log(book);'
    },
    quiz: [
      { question: 'What brackets are used to define an Object?', options: ['[]', '{}', '()', '<>'], answer: '{}' },
      { question: 'What is the relationship between variables inside an object called?', options: ['Index-Value', 'Key-Value pairs', 'Function-Parameter', 'Object-Array'], answer: 'Key-Value pairs' },
      { question: 'Which character separates the key from the value?', options: ['=', ':', ';', ','], answer: ':' },
      { question: 'Which character separates multiple properties from each other?', options: [';', ':', ',', '.'], answer: ',' },
      { question: 'Why use objects instead of separate variables?', options: ['It is faster', 'It groups related data together, keeping code organized', 'It is required for HTML', 'Objects use less battery'], answer: 'It groups related data together, keeping code organized' }
    ],
    interviewQuestions: [
      { q: 'What happens if you have duplicate keys in a JavaScript object?', a: 'JavaScript will not throw an error, but the last key defined will overwrite the previous ones. An object can only have one unique key of a specific name.' }
    ],
    summary: ['Groups related data.', 'Uses curly braces `{}`.', 'Built with `key: value` pairs.'],
    references: commonReferences
  },

  'js_accessing_properties': {
    isStructured: true,
    title: '100. Accessing Properties',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Once an object is created, you can access its individual properties using either "Dot Notation" or "Bracket Notation".',
    whyUseIt: 'You need to retrieve specific pieces of data from the object, like getting just the email address from a `user` object to send them a message.',
    syntax: 'objectName.propertyName\nobjectName["propertyName"]',
    codeExample: 'let car = {\n  brand: "Tesla",\n  model: "Model 3",\n  "release year": 2017\n};\n\n// Dot Notation\nconsole.log(car.brand);\n\n// Bracket Notation\nconsole.log(car["model"]);\nconsole.log(car["release year"]); // Required for spaces!',
    expectedOutput: '"Tesla"\n"Model 3"\n2017',
    explanation: [
      { code: 'car.brand', desc: 'Dot notation. The most common and easiest way to access a property.' },
      { code: 'car["release year"]', desc: 'Bracket notation. Required if the property name has a space, starts with a number, or contains special characters.' }
    ],
    realWorldExample: 'Extracting data from an API response. `let currentTemp = weatherData.current.temperature;`',
    commonMistakes: [
      { error: 'Forgetting quotes in bracket notation', code: 'car[brand]', suffix: 'If you don\'t put quotes around `"brand"`, JavaScript thinks `brand` is a variable name and will look for a variable that doesn\'t exist, causing an error.' }
    ],
    bestPractices: ['Always use Dot Notation `.` because it is easier to read. Only use Bracket Notation `[]` when the key has spaces or is dynamic (stored in a variable).'],
    practiceExercise: {
      task: 'Given `let person = { name: "Sam", age: 25 };`. Log the name using Dot Notation, and log the age using Bracket Notation.',
      expectedOutput: '"Sam"\n25',
      solution: 'let person = { name: "Sam", age: 25 }; console.log(person.name); console.log(person["age"]);'
    },
    quiz: [
      { question: 'What is the most common way to access an object property?', options: ['Bracket Notation', 'Dot Notation (.)', 'Function Notation', 'Index Notation'], answer: 'Dot Notation (.)' },
      { question: 'If `let x = { a: 1 }`, what does `x.b` return?', options: ['1', 'Error', 'undefined', 'null'], answer: 'undefined' },
      { question: 'When MUST you use Bracket Notation?', options: ['When the key is a string with spaces (e.g., "first name")', 'Always', 'When the value is a number', 'When the object is inside an array'], answer: 'When the key is a string with spaces (e.g., "first name")' },
      { question: 'What is wrong with `obj[keyName]` (assuming keyName is not a defined variable)?', options: ['It should be obj(keyName)', 'It is missing quotes around the string "keyName"', 'It should use a dot', 'Nothing is wrong'], answer: 'It is missing quotes around the string "keyName"' },
      { question: 'Can you use a variable to dynamically access a property using Dot Notation? (e.g., `let prop = "age"; obj.prop`)', options: ['Yes', 'No, dot notation literally looks for a key named "prop". You must use bracket notation `obj[prop]`', 'Only in strict mode', 'Only for numbers'], answer: 'No, dot notation literally looks for a key named "prop". You must use bracket notation `obj[prop]`' }
    ],
    interviewQuestions: [
      { q: 'Explain why `obj.key` might return undefined while `obj[key]` returns the value, assuming `let key = "name";`.', a: '`obj.key` looks for a literal property spelled "k-e-y" inside the object. `obj[key]` evaluates the variable `key`, turns it into "name", and then looks for the property "name".' }
    ],
    summary: ['Dot Notation `obj.key` is standard.', 'Bracket Notation `obj["key"]` allows spaces.', 'Use brackets for dynamic variable keys.'],
    references: commonReferences
  },

  'js_methods': {
    isStructured: true,
    title: '104. Methods & this Keyword',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'A method is simply a function that is stored as an object property. The `this` keyword refers to the object that the method belongs to.',
    whyUseIt: 'Objects shouldn\'t just hold data; they should be able to perform actions related to that data. A `dog` object can have data (`name`, `breed`) and actions/methods (`bark()`).',
    syntax: 'let obj = {\n  prop: "value",\n  methodName: function() { \n    return this.prop;\n  }\n};',
    codeExample: 'let person = {\n  firstName: "Jane",\n  lastName: "Doe",\n  fullName: function() {\n    return this.firstName + " " + this.lastName;\n  }\n};\n\nconsole.log(person.fullName());',
    expectedOutput: '"Jane Doe"',
    explanation: [
      { code: 'fullName: function() { ... }', desc: 'Defines a method. It is just a property where the value happens to be a function.' },
      { code: 'this.firstName', desc: '`this` points to the `person` object. It means "get the firstName property from THIS object".' },
      { code: 'person.fullName()', desc: 'You must use parentheses `()` to EXECUTE the method. Without them, you just get the function code.' }
    ],
    realWorldExample: 'A `shoppingCart` object has an array of items, and a method `calculateTotal()` which loops through `this.items` and returns the final price.',
    commonMistakes: [
      { error: 'Using arrow functions for methods', code: 'fullName: () => { return this.name; }', suffix: 'Arrow functions do NOT bind their own `this`. If you use an arrow function here, `this` will point to the global window object, returning `undefined`.' }
    ],
    bestPractices: ['In modern JavaScript (ES6), you can write methods using a shorter syntax: `fullName() { return ... }` instead of `fullName: function() { ... }`.'],
    practiceExercise: {
      task: 'Create a `rectangle` object with properties `width: 10` and `height: 5`. Add a method `getArea()` that returns `this.width * this.height`. Log `rectangle.getArea()`.',
      expectedOutput: '50',
      solution: 'let rectangle = { width: 10, height: 5, getArea() { return this.width * this.height; } }; console.log(rectangle.getArea());'
    },
    quiz: [
      { question: 'What is a method?', options: ['An array inside an object', 'A function stored as a property in an object', 'A type of loop', 'A global variable'], answer: 'A function stored as a property in an object' },
      { question: 'What does the `this` keyword refer to inside an object method?', options: ['The HTML document', 'The object that "owns" the method', 'The function itself', 'A global variable'], answer: 'The object that "owns" the method' },
      { question: 'Why will `person.fullName` (without parentheses) fail to print the name?', options: ['Because it is private', 'Because without `()`, you are just referencing the function, not executing it', 'Because `this` is undefined', 'Because it requires arguments'], answer: 'Because without `()`, you are just referencing the function, not executing it' },
      { question: 'Can you use an arrow function `() => {}` for an object method that needs to use `this`?', options: ['Yes, it is the modern way', 'No, arrow functions do not have their own `this` context', 'Only in React', 'Only if you pass `this` as an argument'], answer: 'No, arrow functions do not have their own `this` context' },
      { question: 'What is the ES6 shorthand for `sayHi: function() {}`?', options: ['sayHi() {}', 'function sayHi() {}', 'sayHi => {}', 'sayHi: ()'], answer: 'sayHi() {}' }
    ],
    interviewQuestions: [
      { q: 'What will `this` point to if you assign an object method to a variable in the global scope? E.g., `let myFunc = person.fullName; myFunc();`', a: 'It will point to the global `window` object (or be undefined in strict mode). This is because the execution context changed; it was called globally, not as a property of `person`.' }
    ],
    summary: ['Methods are functions in objects.', '`this` refers to the parent object.', 'Do NOT use arrow functions for methods.'],
    references: commonReferences
  },

  'js_object_keys_object_values': {
    isStructured: true,
    title: '106-107. Object.keys() & Object.values()',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`Object.keys()` returns an array containing all the property names (keys) of an object. `Object.values()` returns an array containing all the property values.',
    whyUseIt: 'Objects are not natively iterable like arrays. If you need to find out how many properties an object has, or loop through all of its values, you convert them into arrays first using these methods.',
    syntax: 'Object.keys(obj)\nObject.values(obj)',
    codeExample: 'const car = {\n  brand: "Ford",\n  model: "Mustang",\n  year: 1969\n};\n\nconst keysArray = Object.keys(car);\nconst valuesArray = Object.values(car);\n\nconsole.log(keysArray);\nconsole.log(valuesArray);\nconsole.log("Length: " + keysArray.length);',
    expectedOutput: '["brand", "model", "year"]\n["Ford", "Mustang", 1969]\n"Length: 3"',
    explanation: [
      { code: 'Object.keys(car)', desc: 'Extracts the left side of the colon (the keys) into a brand new array.' },
      { code: 'Object.values(car)', desc: 'Extracts the right side of the colon (the values) into a brand new array.' },
      { code: 'keysArray.length', desc: 'Objects don\'t have a `.length` property. This is the standard way to count how many items are in an object.' }
    ],
    realWorldExample: 'You receive an unknown settings object from an API. You run `Object.keys(settings)` to see exactly what setting flags the server sent you.',
    commonMistakes: [
      { error: 'Calling it on the object instance', code: 'car.keys()', suffix: 'These are STATIC methods on the global `Object` constructor. You must write `Object.keys(car)`, not `car.keys()`.' }
    ],
    bestPractices: ['Use `Object.keys(obj).length === 0` to check if an object is completely empty (e.g., checking if `{}` is empty).'],
    practiceExercise: {
      task: 'Create `const scores = { math: 90, english: 85 };`. Use `Object.values()` to get the numbers, and calculate the sum.',
      expectedOutput: '175',
      solution: 'const scores = { math: 90, english: 85 }; let vals = Object.values(scores); console.log(vals[0] + vals[1]);'
    },
    quiz: [
      { question: 'What does `Object.keys()` return?', options: ['A string', 'An object', 'An array of the property names', 'An array of the property values'], answer: 'An array of the property names' },
      { question: 'How do you find out how many properties are inside an object named `user`?', options: ['user.length', 'Object.keys(user).length', 'user.count()', 'Object.length(user)'], answer: 'Object.keys(user).length' },
      { question: 'Why doesn\'t `car.keys()` work?', options: ['Objects don\'t have keys', 'keys() is a static method on the global Object class, not on the instance', 'It requires an argument', 'It only works in strict mode'], answer: 'keys() is a static method on the global Object class, not on the instance' },
      { question: 'What does `Object.values({a: 1, b: 2})` return?', options: ['["a", "b"]', '[1, 2]', '{a: 1, b: 2}', 'undefined'], answer: '[1, 2]' },
      { question: 'Can you use array methods (like `.map` or `.filter`) on the result of `Object.keys()`?', options: ['Yes, because it returns a standard Array', 'No, it returns a NodeList', 'Only if the object contains numbers', 'Only in ES6'], answer: 'Yes, because it returns a standard Array' }
    ],
    interviewQuestions: [
      { q: 'Is the order of keys returned by `Object.keys()` guaranteed?', a: 'In ES6+, yes, it is generally guaranteed in insertion order for string keys, but integer keys (like "1", "2") will be sorted numerically and placed first. It is best not to rely strictly on object key order.' }
    ],
    summary: ['`keys()` returns an array of property names.', '`values()` returns an array of property values.', 'Use `Object.keys(obj).length` to count properties.'],
    references: commonReferences
  },

  'js_object_destructuring': {
    isStructured: true,
    title: '109. Object Destructuring',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Destructuring assignment is a special syntax that allows you to "unpack" properties from objects into distinct, independent variables in a single line of code.',
    whyUseIt: 'It makes your code much cleaner. Instead of writing `user.name`, `user.age`, `user.email` repeatedly, you unpack them once and use `name`, `age`, and `email` directly.',
    syntax: 'const { key1, key2 } = objectName;',
    codeExample: 'const user = {\n  username: "coder99",\n  role: "admin",\n  country: "USA"\n};\n\n// Destructuring\nconst { username, role } = user;\n\nconsole.log(username);\nconsole.log(role);',
    expectedOutput: '"coder99"\n"admin"',
    explanation: [
      { code: 'const { username, role } = user;', desc: 'JavaScript looks inside `user`, finds properties named `username` and `role`, and creates independent variables holding their values.' },
      { code: 'console.log(username)', desc: 'We no longer have to type `user.username`. The variable stands on its own.' }
    ],
    realWorldExample: 'React components use this extensively. If a component receives a `props` object containing 10 pieces of data, developers destructure the specific 3 pieces they need at the top of the function.',
    commonMistakes: [
      { error: 'Using the wrong variable name', code: 'const { name } = user;', suffix: 'If the object has a property `username`, but you try to destructure `name`, the new variable `name` will be `undefined`. The variable names MUST match the object keys exactly.' }
    ],
    bestPractices: ['You can assign default values while destructuring: `const { role = "guest" } = user;`. If `role` is missing in the object, it defaults to "guest".'],
    practiceExercise: {
      task: 'Given `const config = { theme: "dark", lang: "en" };`. Destructure both properties into variables and log them.',
      expectedOutput: '"dark"\n"en"',
      solution: 'const config = { theme: "dark", lang: "en" }; const { theme, lang } = config; console.log(theme); console.log(lang);'
    },
    quiz: [
      { question: 'What does object destructuring do?', options: ['Deletes an object', 'Unpacks properties into distinct variables', 'Merges two objects', 'Converts an object to an array'], answer: 'Unpacks properties into distinct variables' },
      { question: 'What brackets are used on the LEFT side of the equals sign for object destructuring?', options: ['[]', '{}', '()', '<>'], answer: '{}' },
      { question: 'If `obj = { a: 1, b: 2 }`, and you run `const { c } = obj;`, what is the value of `c`?', options: ['1', '2', 'undefined', 'Error'], answer: 'undefined' },
      { question: 'Does destructuring modify or delete properties from the original object?', options: ['Yes', 'No, it just copies the values', 'Only if you use let instead of const', 'Only in strict mode'], answer: 'No, it just copies the values' },
      { question: 'Can you rename a variable while destructuring?', options: ['No', 'Yes, using a colon (e.g., `const { a: newName } = obj;`)', 'Yes, using an equals sign', 'Only for arrays'], answer: 'Yes, using a colon (e.g., `const { a: newName } = obj;`)' }
    ],
    interviewQuestions: [
      { q: 'How can you destructure a deeply nested object?', a: 'By nesting the curly braces. E.g., `const { user: { address: { city } } } = data;` extracts just the `city` variable from deep inside the object.' }
    ],
    summary: ['Unpacks properties into variables.', 'Variable names must match keys.', 'Creates cleaner code.'],
    references: commonReferences
  }
};
