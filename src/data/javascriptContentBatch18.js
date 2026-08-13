const commonReferences = [
  { label: 'MDN Web Docs - Classes', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes' },
  { label: 'W3Schools JS Classes', url: 'https://www.w3schools.com/js/js_classes.asp' }
];

export const javascriptContentBatch18 = {
  'js_classes_constructors_objects': {
    isStructured: true,
    title: '238-241. Classes, Constructors & Objects',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Object-Oriented Programming (OOP) revolves around "Classes". A Class is like a blueprint for creating objects. The `constructor` is a special method inside the class that is automatically called when a new object is created from that blueprint.',
    whyUseIt: 'If you need to create 100 `User` objects in your app, typing out 100 object literals `{name: ..., age: ...}` is terrible. A Class lets you define the structure ONCE, and then stamp out as many users as you need using the `new` keyword.',
    syntax: 'class ClassName {\n  constructor(params) { ... }\n  methodName() { ... }\n}\nconst obj = new ClassName(args);',
    codeExample: 'class Car {\n  // 1. The constructor sets up the initial data\n  constructor(brand, year) {\n    this.brand = brand;\n    this.year = year;\n  }\n\n  // 2. Methods define the actions the object can take\n  startEngine() {\n    return this.brand + " engine is starting... Vroom!";\n  }\n}\n\n// 3. Creating instances (Objects) using the blueprint\nconst myCar = new Car("Toyota", 2020);\nconst yourCar = new Car("Ford", 2022);\n\nconsole.log(myCar.brand);\nconsole.log(yourCar.startEngine());',
    expectedOutput: '"Toyota"\n"Ford engine is starting... Vroom!"',
    explanation: [
      { code: 'class Car', desc: 'Defines the blueprint. Class names ALWAYS start with a capital letter by convention.' },
      { code: 'constructor(brand, year)', desc: 'The setup function. It receives arguments and assigns them to `this` (the specific object being created).' },
      { code: 'new Car(...)', desc: 'The `new` keyword is required! It tells JavaScript to look at the `Car` class, run its constructor, and return a brand new object.' }
    ],
    realWorldExample: 'A video game. You create a `class Enemy`. Whenever the player enters a new room, the game runs `new Enemy("Goblin", 100)` five times to spawn 5 enemies with their own health bars.',
    commonMistakes: [
      { error: 'Forgetting the `new` keyword', code: 'const car = Car("Toyota", 2020);', suffix: 'Calling a class without `new` will throw a TypeError. A class is not a regular function.' }
    ],
    bestPractices: ['Keep your classes focused on a single responsibility. A `User` class should handle user data, not database connections.'],
    practiceExercise: {
      task: 'Create a class `Rectangle` with a constructor that takes `width` and `height`. Add a method `getArea()` that returns width * height. Instantiate it with 5 and 10, and log the area.',
      expectedOutput: '50',
      solution: 'class Rectangle { constructor(w, h) { this.w = w; this.h = h; } getArea() { return this.w * this.h; } } let r = new Rectangle(5, 10); console.log(r.getArea());'
    },
    quiz: [
      { question: 'What is a Class in JavaScript?', options: ['A function that runs once', 'A styling rule', 'A blueprint for creating objects', 'An HTML element'], answer: 'A blueprint for creating objects' },
      { question: 'Which method is automatically called when a new object is created from a class?', options: ['init()', 'start()', 'constructor()', 'render()'], answer: 'constructor()' },
      { question: 'What keyword MUST you use to create an object from a class?', options: ['create', 'new', 'make', 'this'], answer: 'new' },
      { question: 'What does `this` refer to inside a class constructor?', options: ['The class itself', 'The global window', 'The specific instance (object) currently being created', 'Nothing'], answer: 'The specific instance (object) currently being created' },
      { question: 'By convention, how should class names be written?', options: ['camelCase', 'PascalCase (Capitalized first letter)', 'snake_case', 'UPPERCASE'], answer: 'PascalCase (Capitalized first letter)' }
    ],
    interviewQuestions: [
      { q: 'Are JavaScript Classes the same as Classes in Java or C#?', a: 'No. JavaScript is fundamentally a "Prototype-based" language. ES6 Classes in JS are essentially "syntactic sugar" over JavaScript\'s existing prototype-based inheritance. They just make it easier to read and write.' }
    ],
    summary: ['Classes are blueprints.', '`constructor()` initializes the data.', 'Use `new` to create objects (instances) from the class.'],
    references: commonReferences
  },

  'js_inheritance': {
    isStructured: true,
    title: '242. Inheritance',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'Inheritance allows a new Class to inherit (copy) all the properties and methods from an existing Class. This is done using the `extends` keyword. The child class can also use `super()` to call the parent\'s constructor.',
    whyUseIt: 'Code reuse. If you have a `class Animal` with methods like `eat()` and `sleep()`, you don\'t want to rewrite those methods for `class Dog` and `class Cat`. They can just inherit them from `Animal`.',
    syntax: 'class Child extends Parent {\n  constructor() {\n    super();\n  }\n}',
    codeExample: 'class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  eat() {\n    return `${this.name} is eating.`;\n  }\n}\n\n// Dog INHERITS from Animal\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name); // Calls the Animal constructor!\n    this.breed = breed;\n  }\n  bark() {\n    return "Woof!";\n  }\n}\n\nconst myDog = new Dog("Rex", "German Shepherd");\nconsole.log(myDog.bark());\nconsole.log(myDog.eat()); // Inherited method!',
    expectedOutput: '"Woof!"\n"Rex is eating."',
    explanation: [
      { code: 'class Dog extends Animal', desc: 'The `extends` keyword links the two classes. `Dog` is the child, `Animal` is the parent.' },
      { code: 'super(name)', desc: 'Inside the child constructor, you MUST call `super()` before using `this`. It calls the parent\'s constructor to set up `this.name`.' },
      { code: 'myDog.eat()', desc: 'Even though `eat()` is not written inside the `Dog` class, `myDog` can use it because it inherited it from `Animal`.' }
    ],
    realWorldExample: 'UI Components. `class Button extends Component`. The `Component` class handles drawing to the screen and event listeners, while `Button` just adds text and click animations.',
    commonMistakes: [
      { error: 'Forgetting `super()`', code: 'class Dog extends Animal { constructor(name) { this.name = name; } }', suffix: 'If a class `extends` another class and has a constructor, you MUST call `super()` inside it. Otherwise, JavaScript throws a ReferenceError.' }
    ],
    bestPractices: ['Don\'t create deep inheritance chains (e.g., A extends B extends C extends D). It makes code incredibly hard to follow. Prefer "Composition" over deep Inheritance.'],
    practiceExercise: {
      task: 'Create `class Vehicle` with a `move()` method. Create `class Car extends Vehicle` with a `honk()` method. Instantiate a Car and call both methods.',
      expectedOutput: '(Output of both methods)',
      solution: 'class Vehicle { move() { console.log("Moving"); } } class Car extends Vehicle { honk() { console.log("Beep"); } } let c = new Car(); c.move(); c.honk();'
    },
    quiz: [
      { question: 'Which keyword is used to create a child class that inherits from a parent?', options: ['inherits', 'extends', 'copies', 'from'], answer: 'extends' },
      { question: 'What does the `super()` function do?', options: ['Makes the class faster', 'Calls the parent class\'s constructor', 'Returns a boolean', 'Deletes the parent class'], answer: 'Calls the parent class\'s constructor' },
      { question: 'Can a child class have its own unique methods that the parent doesn\'t have?', options: ['Yes', 'No', 'Only if the parent allows it', 'Only if they are static'], answer: 'Yes' },
      { question: 'What happens if you use `this` before calling `super()` in a child constructor?', options: ['It works fine', 'It creates a global variable', 'It throws a ReferenceError', 'It returns null'], answer: 'It throws a ReferenceError' },
      { question: 'Why use inheritance?', options: ['To encrypt data', 'To make code run faster in the browser', 'To reuse code and share common functionality across multiple classes', 'To style HTML'], answer: 'To reuse code and share common functionality across multiple classes' }
    ],
    interviewQuestions: [
      { q: 'What is Method Overriding?', a: 'If a child class defines a method with the exact same name as a method in the parent class, the child\'s method "overrides" (replaces) the parent\'s method for instances of the child class.' }
    ],
    summary: ['`extends` links classes.', '`super()` calls the parent constructor.', 'Children get all parent methods for free.'],
    references: commonReferences
  }
};
