const commonReferences = [
  { label: 'W3Schools CSS Selectors', url: 'https://www.w3schools.com/css/css_selectors.asp' },
  { label: 'MDN Web Docs: CSS Selectors', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors' }
];

export const cssContentBatch10 = {
  'css_combinators': {
    isStructured: true,
    title: '83. Combinators',
    difficulty: 'Intermediate',
    readingTime: '5 Minutes',
    definition: 'A combinator is something that explains the relationship between the selectors. CSS uses combinators to target elements based on their exact position in the HTML tree relative to other elements.',
    whyUseIt: 'Without combinators, you have to add a custom `class="..."` to every single HTML element to style it. Combinators allow you to style elements automatically based on where they live (e.g., "Style all paragraphs, but ONLY if they are inside an article tag").',
    syntax: `/* Descendant selector (space) */
div p { background: yellow; }

/* Child selector (>) */
div > p { background: yellow; }

/* Adjacent sibling (+) */
div + p { background: yellow; }

/* General sibling (~) */
div ~ p { background: yellow; }`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  /* 1. Descendant (Space): ANY <p> that is inside the div, no matter how deep */
  .descendant p { color: red; font-weight: bold; }
  
  /* 2. Direct Child (>): ONLY a <p> that is directly inside the div. 
        If the <p> is inside a <section> inside the div, it is ignored! */
  .child > p { color: blue; font-weight: bold; }
  
  /* 3. Adjacent Sibling (+): ONLY the VERY FIRST <p> immediately AFTER the div */
  .adjacent + p { color: green; text-decoration: underline; }
</style>
<body>
  <h3>Descendant (Space)</h3>
  <div class="descendant">
    <p>Direct child paragraph (Red)</p>
    <section>
      <p>Grandchild paragraph (Red because it is still inside the div!)</p>
    </section>
  </div>
  
  <hr>
  
  <h3>Child (>)</h3>
  <div class="child">
    <p>Direct child paragraph (Blue)</p>
    <section>
      <p>Grandchild paragraph (Normal! Not a DIRECT child)</p>
    </section>
  </div>
  
  <hr>
  
  <h3>Adjacent Sibling (+)</h3>
  <div class="adjacent" style="border:1px solid black;">I am the div</div>
  <p>I am the very first paragraph after the div (Green)</p>
  <p>I am the second paragraph. I am ignored.</p>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'Space (Descendant)', desc: 'The most common. Selects ALL matching elements inside the parent, regardless of how deeply nested they are.' },
        { code: '> (Direct Child)', desc: 'Selects ONLY elements that are immediate children of the parent. Does not penetrate into grandchildren.' },
        { code: '+ (Adjacent Sibling)', desc: 'Selects ONLY the single element immediately following the first element, provided they share the same parent.' }
    ],
    realWorldExample: 'If you have an article with a header, and you want the very first paragraph following the header to have a larger font (a common magazine style called a "lead paragraph"), you use the adjacent sibling combinator: `h1 + p { font-size: 1.5rem; }`.',
    commonMistakes: [
      { error: 'Confusing space and >.', code: 'ul > a', suffix: 'If your HTML is <ul><li><a>, using `ul > a` will fail because the <a> is a grandchild of the <ul>, not a direct child. You must use `ul a` or `ul > li > a`.' }
    ],
    bestPractices: [
      'Avoid deeply nested descendant selectors (e.g., `body div section ul li a`). They are terrible for browser performance and create specificity nightmares. Rely on simple classes where possible.'
    ],
    practiceExercise: {
      task: 'Write a selector using a combinator to target ONLY the immediate direct child `<li>` elements of a `<ul>`.',
      expectedOutput: 'ul > li',
      solution: `ul > li {
    /* Styles here */
}`
    },
    quiz: [
      { question: 'Which combinator selects ALL matching elements inside a parent, regardless of nesting depth?', options: ['The Child Combinator (>)', 'The Descendant Combinator (Space)', 'The Sibling Combinator (+)', 'The General Sibling Combinator (~)'], answer: 'The Descendant Combinator (Space)' },
      { question: 'If you want to style a <p> tag ONLY if it is immediately directly following an <h2> tag, which combinator do you use?', options: ['h2 > p', 'h2 p', 'h2 ~ p', 'h2 + p'], answer: 'h2 + p' },
      { question: 'What does `div > p` select?', options: ['All <p> elements on the page', 'Any <p> element inside a div', 'Only <p> elements that are DIRECT children of a div', 'The very first <p> element after a div'], answer: 'Only <p> elements that are DIRECT children of a div' }
    ],
    interviewQuestions: [
      { q: 'What is the General Sibling Combinator (~) and how does it differ from the Adjacent Sibling (+)?', a: 'The Adjacent Sibling (`+`) selects ONLY the immediately following element. The General Sibling (`~`) selects ALL matching sibling elements that follow it, even if they aren\'t immediately next to it, as long as they share the same parent.' }
    ],
    summary: [
      'Space selects all descendants.',
      '> selects only direct children.',
      '+ selects the immediately following sibling.',
      'Combinators reduce the need to write endless HTML classes.'
    ],
    references: commonReferences
  },

  'css_pseudo_classes': {
    isStructured: true,
    title: '84. Pseudo-classes (:hover, :focus, :active)',
    difficulty: 'Beginner',
    readingTime: '3 Minutes',
    definition: 'A pseudo-class is used to define a special STATE of an element (like when a mouse hovers over it, or when a text input is clicked into).',
    whyUseIt: 'They add interactivity. Without pseudo-classes, websites would be completely static and unresponsive to user actions like clicking and hovering.',
    syntax: `selector:pseudo-class {
    property: value;
}

/* Example */
button:hover {
    background-color: blue;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .btn {
    background: #4CAF50;
    color: white;
    padding: 15px 30px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
  }
  
  /* Triggered when the mouse rests on it */
  .btn:hover {
    background: #45a049;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
  }
  
  /* Triggered ONLY in the exact moment the mouse clicks DOWN */
  .btn:active {
    background: #3e8e41;
    transform: scale(0.95); /* Shrinks slightly like a real physical button! */
  }
  
  .input-field {
    padding: 10px;
    border: 2px solid gray;
    outline: none;
  }
  
  /* Triggered when the user clicks into the text box to type */
  .input-field:focus {
    border-color: #2196F3;
    box-shadow: 0px 0px 5px #2196F3;
  }
</style>
<body>
  <button class="btn">Hover & Click Me!</button>
  <br><br>
  <input type="text" class="input-field" placeholder="Click in here!">
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <button style="background: #4CAF50; color: white; padding: 15px 30px; border: none; cursor: pointer;" onmouseover="this.style.background='#45a049';" onmouseout="this.style.background='#4CAF50';" onmousedown="this.style.transform='scale(0.95)';" onmouseup="this.style.transform='scale(1)';">Hover & Click Me!</button>
  <br><br>
  <input type="text" placeholder="Click in here!" style="padding: 10px; border: 2px solid gray;">
</div>`,
    explanation: [
        { code: ':hover', desc: 'Activates when the mouse pointer is over the element. Essential for links and buttons.' },
        { code: ':active', desc: 'Activates during the physical mouse-down click. Great for creating a "pressed" button effect.' },
        { code: ':focus', desc: 'Activates when an element (like an input field) is selected to receive keyboard input.' }
    ],
    realWorldExample: 'Accessibility requires `:focus`. When users navigate a website using the "Tab" key on their keyboard, the browser must highlight which link or form input they are currently on. If you remove the default focus outline, you MUST replace it with a custom `:focus` state.',
    commonMistakes: [
      { error: 'Removing outlines without replacing them.', code: 'input:focus { outline: none; }', suffix: 'This is a massive accessibility violation. If you remove the default blue outline on focus, keyboard-only users will have no idea where they are on the page. Always add a custom border or box-shadow instead.' }
    ],
    bestPractices: [
      'The order matters for links! Use LVHA: :link, :visited, :hover, :active.'
    ],
    practiceExercise: {
      task: 'Change the background color of an input field to yellow when the user clicks into it.',
      expectedOutput: 'input:focus { background-color: yellow; }',
      solution: `input:focus {
    background-color: yellow;
}`
    },
    quiz: [
      { question: 'What character is used to denote a pseudo-class?', options: ['A period (.)', 'A hash (#)', 'A colon (:)', 'Two colons (::)'], answer: 'A colon (:)' },
      { question: 'Which pseudo-class represents a text field that a user is actively typing in?', options: ['active', 'hover', 'focus', 'typing'], answer: 'focus' },
      { question: 'Which pseudo-class represents the exact moment a user is holding down the mouse click on a button?', options: ['hover', 'down', 'click', 'active'], answer: 'active' },
      { question: 'Why is it critical to style the :focus pseudo-class?', options: ['It makes the website load faster', 'It is required for users who navigate via keyboards instead of mice', 'It improves SEO', 'It fixes bugs in Safari'], answer: 'It is required for users who navigate via keyboards instead of mice' }
    ],
    interviewQuestions: [
      { q: 'What is the :focus-within pseudo-class?', a: '`:focus-within` is a modern pseudo-class applied to a PARENT container. It triggers if ANY of its children receive focus. It is incredibly useful for highlighting an entire "Form Group" div (icon + input field) when the user clicks into the input field.' }
    ],
    summary: [
      'Pseudo-classes target element STATES.',
      ':hover is for mousing over.',
      ':active is for clicking down.',
      ':focus is for keyboard/input selection.'
    ],
    references: commonReferences
  },

  'css_first_last_child': {
    isStructured: true,
    title: '85. :first-child & :last-child',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'These pseudo-classes match elements based on their position among a group of siblings (e.g., the very first item in a list).',
    whyUseIt: 'Allows you to apply specific styling to the edges of a list (like removing the bottom border from the very last item) without needing to clutter your HTML with custom `class="last"` attributes.',
    syntax: `selector:first-child {
    property: value;
}
selector:last-child {
    property: value;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  ul {
    list-style-type: none;
    padding: 0;
    width: 200px;
    border: 1px solid black;
  }
  
  li {
    padding: 10px;
    border-bottom: 1px solid gray; /* Adds a line under EVERY item */
  }
  
  /* The first item gets a special green background */
  li:first-child {
    background: lightgreen;
    font-weight: bold;
  }
  
  /* We don't want a double border at the bottom of the list! 
     Target the last item and remove its bottom border. */
  li:last-child {
    border-bottom: none; 
    background: coral;
  }
</style>
<body>
  <ul>
    <li>First Item (Targeted!)</li>
    <li>Middle Item</li>
    <li>Middle Item</li>
    <li>Last Item (Targeted!)</li>
  </ul>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <ul style="list-style-type: none; padding: 0; width: 200px; border: 1px solid black; margin:0;">
    <li style="padding: 10px; border-bottom: 1px solid gray; background: lightgreen; font-weight: bold;">First Item</li>
    <li style="padding: 10px; border-bottom: 1px solid gray;">Middle Item</li>
    <li style="padding: 10px; border-bottom: 1px solid gray;">Middle Item</li>
    <li style="padding: 10px; background: coral;">Last Item (No border)</li>
  </ul>
</div>`,
    explanation: [
        { code: ':first-child', desc: 'Selects an element only if it is the very first child of its parent.' },
        { code: ':last-child', desc: 'Selects an element only if it is the very last child of its parent.' }
    ],
    realWorldExample: 'Dropdown Menus. The items usually have `border-bottom: 1px solid #ccc;` to separate them. But the final item touching the bottom of the dropdown shouldn\'t have a border. You use `:last-child { border-bottom: none; }` to fix it cleanly.',
    commonMistakes: [
      { error: 'Assuming :first-child targets the first matching element.', code: 'p:first-child', suffix: 'If your HTML is <div> <h2>Title</h2> <p>Text</p> </div>, the rule p:first-child will fail. Why? Because the <p> is NOT the first child of the div (the <h2> is). If you want the first <p> regardless of what comes before it, you must use p:first-of-type.' }
    ],
    bestPractices: [
      'Use `:first-of-type` and `:last-of-type` if you are targeting specific tags mixed in with other HTML elements.'
    ],
    practiceExercise: {
      task: 'Remove the margin-bottom from the very last paragraph inside an article.',
      expectedOutput: 'article p:last-child { margin-bottom: 0; }',
      solution: `article p:last-child {
    margin-bottom: 0;
}`
    },
    quiz: [
      { question: 'What does :first-child select?', options: ['The first child of the body tag', 'An element that is the very first child of its parent', 'The first element with a specific class', 'The first letter of a paragraph'], answer: 'An element that is the very first child of its parent' },
      { question: 'Why is :last-child commonly used in lists and menus?', options: ['To make the last item bold', 'To add a drop shadow', 'To remove trailing borders or margins on the final item so it sits flush with the container', 'To hide the last item'], answer: 'To remove trailing borders or margins on the final item so it sits flush with the container' },
      { question: 'If a <div> contains an <h1>, followed by three <p> tags, will `p:first-child` select the first <p>?', options: ['Yes', 'No, because the <p> is the second child of the div, not the first.'], answer: 'No, because the <p> is the second child of the div, not the first.' }
    ],
    interviewQuestions: [
      { q: 'Explain the difference between :last-child and :last-of-type.', a: '`:last-child` specifically looks at the physical DOM order. If the targeted element is not the absolute last element inside its parent, it fails. `:last-of-type` looks for the last instance of that specific tag (like a `<p>`), even if there is a `<footer>` tag after it.' }
    ],
    summary: [
      ':first-child targets the very first sibling.',
      ':last-child targets the very last sibling.',
      'Extremely useful for removing borders/margins from the edges of lists.'
    ],
    references: commonReferences
  },

  'css_nth_child': {
    isStructured: true,
    title: '86. :nth-child()',
    difficulty: 'Advanced',
    readingTime: '4 Minutes',
    definition: 'The :nth-child(n) pseudo-class matches elements based on their position in a group of siblings using mathematical formulas.',
    whyUseIt: 'Allows you to style alternating rows in a table (zebra striping), or target specific columns in a grid (like selecting every 3rd item) without touching the HTML.',
    syntax: `selector:nth-child(formula) {
    property: value;
}

/* Examples */
li:nth-child(2) /* Selects exactly the 2nd item */
li:nth-child(even) /* Selects items 2, 4, 6, 8... */
li:nth-child(3n) /* Selects every 3rd item (3, 6, 9...) */`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  ul { list-style-type: none; padding: 0; }
  li { padding: 10px; border: 1px solid #ccc; margin-bottom: 2px; }
  
  /* Target exactly the 2nd item */
  li:nth-child(2) {
    border-left: 5px solid red;
  }
  
  /* Target EVERY ODD item (1, 3, 5, 7) */
  li:nth-child(odd) {
    background: #f2f2f2; /* Light gray */
  }
  
  /* Target EVERY 3rd item (3, 6, 9) */
  li:nth-child(3n) {
    color: blue;
    font-weight: bold;
  }
</style>
<body>
  <ul>
    <li>Item 1 (Odd: Gray background)</li>
    <li>Item 2 (Exactly 2: Red border)</li>
    <li>Item 3 (Odd: Gray background | 3n: Blue text)</li>
    <li>Item 4 (Even: White background)</li>
    <li>Item 5 (Odd: Gray background)</li>
    <li>Item 6 (Even: White background | 3n: Blue text)</li>
  </ul>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'Number (e.g., 2)', desc: 'Targets that exact index. Note: CSS is 1-indexed, not 0-indexed!' },
        { code: 'Keywords (even / odd)', desc: 'The most common use case. Perfect for coloring alternating table rows.' },
        { code: 'Formula (an + b)', desc: '`n` is a counter that starts at 0. `3n` means (3*0, 3*1, 3*2) = (0, 3, 6). `3n+1` means (1, 4, 7).' }
    ],
    realWorldExample: 'Zebra Striping in Data Tables. A table with 100 rows of data is hard to read. You apply `tr:nth-child(even) { background-color: #f2f2f2; }`. Instantly, every alternating row is tinted gray, making it incredibly easy to track rows across the screen.',
    commonMistakes: [
      { error: 'Thinking nth-child is 0-indexed like JavaScript arrays.', code: '', suffix: 'In CSS, the first item is 1, not 0.' }
    ],
    bestPractices: [
      'Use `:nth-child(even)` to vastly improve readability on long lists and tables.'
    ],
    practiceExercise: {
      task: 'Target all EVEN rows of a table (<tr>) and change their background to light blue.',
      expectedOutput: 'tr:nth-child(even) { background-color: lightblue; }',
      solution: `tr:nth-child(even) {
    background-color: lightblue;
}`
    },
    quiz: [
      { question: 'Which pseudo-class allows you to target alternating rows (like 2, 4, 6, 8)?', options: ['first-child', 'last-child', 'nth-child(even)', 'nth-child(odd)'], answer: 'nth-child(even)' },
      { question: 'Are CSS nth-child indexes 0-indexed or 1-indexed?', options: ['0-indexed (starts at 0)', '1-indexed (starts at 1)'], answer: '1-indexed (starts at 1)' },
      { question: 'What does the formula :nth-child(3n) select?', options: ['The 3rd item only', 'Every item EXCEPT the 3rd', 'Every 3rd item (3, 6, 9...)', 'The first 3 items only'], answer: 'Every 3rd item (3, 6, 9...)' }
    ],
    interviewQuestions: [
      { q: 'How would you use nth-child to select only the FIRST 3 elements of a list?', a: 'I would use a negative formula: `:nth-child(-n+3)`. The math evaluates to (-0+3 = 3), (-1+3 = 2), (-2+3 = 1), (-3+3 = 0, invalid). Therefore, it perfectly targets items 1, 2, and 3.' }
    ],
    summary: [
      ':nth-child(number) targets a specific index.',
      ':nth-child(even/odd) is perfect for zebra-striping tables.',
      ':nth-child(an+b) allows for complex mathematical targeting.'
    ],
    references: commonReferences
  },

  'css_pseudo_elements': {
    isStructured: true,
    title: '87. Pseudo-elements (::before, ::after)',
    difficulty: 'Advanced',
    readingTime: '5 Minutes',
    definition: 'A pseudo-element is used to style specific parts of an element, or to inject completely new content before or after an element\'s actual content, purely through CSS.',
    whyUseIt: 'It allows you to add icons, decorative borders, or tooltip arrows without cluttering your HTML with empty `<span>` tags. It keeps your HTML semantic and pushes decoration into CSS where it belongs.',
    syntax: `selector::before {
    content: "★";
}
selector::after {
    content: " (Read more)";
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  /* IMPORTANT: You MUST include the 'content' property, even if it's empty, or the pseudo-element will not render. */
  
  .required::after {
    content: " *";
    color: red;
  }
  
  .quote::before {
    content: "❝";
    font-size: 30px;
    color: gray;
    margin-right: 5px;
  }
  
  .quote::after {
    content: "❞";
    font-size: 30px;
    color: gray;
    margin-left: 5px;
  }
  
  /* Advanced: Using an empty pseudo-element for decoration */
  .decorative-heading {
    position: relative;
    display: inline-block;
  }
  
  .decorative-heading::after {
    content: ""; /* Empty content! */
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50%; /* A half-width underline */
    height: 4px;
    background: coral;
  }
</style>
<body>
  <label class="required">Email Address</label><br><br>
  
  <p class="quote">CSS is awesome.</p>
  
  <h2 class="decorative-heading">Cool Section</h2>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <label>Email Address<span style="color:red;"> *</span></label><br><br>
  <p><span style="font-size:30px; color:gray;">❝</span>CSS is awesome.<span style="font-size:30px; color:gray;">❞</span></p>
  <h2 style="border-bottom: 4px solid coral; display: inline-block; padding-bottom: 2px;">Cool Section</h2>
</div>`,
    explanation: [
        { code: '::', desc: 'Notice the double colon. Pseudo-classes (hover) use one colon. Pseudo-elements (before/after) use two colons to distinguish them.' },
        { code: 'content: ""', desc: 'This property is ABSOLUTELY MANDATORY. If you forget `content`, the pseudo-element simply will not exist in the DOM.' }
    ],
    realWorldExample: 'Tooltips. When you hover over an icon, a black box with text appears above it. The black box and the little triangle pointing down are created entirely using `::before` and `::after`, keeping the HTML totally clean.',
    commonMistakes: [
      { error: 'Forgetting the content property.', code: 'div::after { background: red; width: 10px; height: 10px; }', suffix: 'This will render nothing. You must add `content: "";` for it to exist.' }
    ],
    bestPractices: [
      'Use `::after` with an empty content string, `position: absolute`, and CSS shapes to draw complex decorative elements (like the CSS Clearfix hack!).'
    ],
    practiceExercise: {
      task: 'Use a pseudo-element to add a right arrow symbol "→" after every anchor <a> tag with class ".external".',
      expectedOutput: 'a.external::after { content: " →"; }',
      solution: `a.external::after {
    content: " →";
}`
    },
    quiz: [
      { question: 'What character syntax differentiates a pseudo-element from a pseudo-class?', options: ['Pseudo-elements use a dot (.)', 'Pseudo-elements use double colons (::)', 'Pseudo-elements use a hash (#)', 'There is no syntax difference'], answer: 'Pseudo-elements use double colons (::)' },
      { question: 'Which property is absolutely REQUIRED for ::before and ::after to render anything?', options: ['display', 'position', 'content', 'width'], answer: 'content' },
      { question: 'What is the main benefit of using ::before/::after?', options: ['They make JavaScript faster', 'They allow you to add visual decoration without cluttering the HTML with empty tags', 'They replace images', 'They are required for responsive design'], answer: 'They allow you to add visual decoration without cluttering the HTML with empty tags' }
    ],
    interviewQuestions: [
      { q: 'Can you select a ::before pseudo-element with JavaScript?', a: 'No, you cannot select them using traditional DOM methods (like `document.querySelector`) because they are not actually part of the DOM; they are injected into the rendering tree by CSS. (Note: You can read their styles via `getComputedStyle(el, "::before")`, but you cannot modify them directly).' }
    ],
    summary: [
      'Pseudo-elements use double colons (::).',
      'They inject content or shapes before/after an element.',
      'The content property is mandatory.'
    ],
    references: commonReferences
  },

  'css_attribute_selectors': {
    isStructured: true,
    title: '88. Attribute Selectors',
    difficulty: 'Intermediate',
    readingTime: '3 Minutes',
    definition: 'The attribute selector is used to select elements with a specific attribute or attribute value.',
    whyUseIt: 'HTML forms rely heavily on the `<input>` tag, but there are text inputs, checkboxes, and radio buttons. You can\'t just target `input { ... }`. Attribute selectors let you target specifically `input[type="text"]`.',
    syntax: `/* Selects elements with a specific attribute value */
selector[attribute="value"] {
    property: value;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  /* 1. Exact Match */
  input[type="text"] {
    border: 2px solid blue;
    padding: 5px;
  }
  
  input[type="button"] {
    background: coral;
    color: white;
    border: none;
    padding: 10px 20px;
  }
  
  /* 2. Contains (Asterisk *) */
  /* Targets any link where the href contains the word "google" */
  a[href*="google"] {
    color: red;
    font-weight: bold;
  }
  
  /* 3. Ends With (Dollar Sign $) */
  /* Targets any link that ends in .pdf */
  a[href$=".pdf"]::after {
    content: " (PDF File)";
    color: gray;
    font-size: 12px;
  }
</style>
<body>
  <input type="text" placeholder="I am a text field">
  <input type="button" value="I am a button">
  
  <br><br>
  
  <a href="https://www.google.com">Search Engine Link</a><br>
  <a href="document.pdf">Download Document</a>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: '[attr="value"]', desc: 'Exact match.' },
        { code: '[attr*="value"]', desc: 'Contains (Useful for matching partial URLs).' },
        { code: '[attr$="value"]', desc: 'Ends with (Incredibly useful for styling links based on their file extension, like .pdf or .zip).' },
        { code: '[attr^="value"]', desc: 'Starts with (e.g., targeting links that start with "https" to style secure links).' }
    ],
    realWorldExample: 'If your website has external links and internal links, you can use `a[href^="http"]` (starts with http) to automatically add a little "external link" icon via `::after` to all links leaving your website, while ignoring local internal links like `/about`.',
    commonMistakes: [
      { error: 'Forgetting the quotes around the value.', code: 'input[type=text]', suffix: 'While some browsers might forgive this, the specification requires quotes around the attribute value (e.g., "text") if it contains special characters. It is best practice to always include them.' }
    ],
    bestPractices: [
      'Always use `input[type="..."]` to style form elements. Never use generic classes on inputs if you can avoid it, as attribute selectors are much more robust.'
    ],
    practiceExercise: {
      task: 'Target all input elements that are checkboxes.',
      expectedOutput: 'input[type="checkbox"] { /* styles */ }',
      solution: `input[type="checkbox"] {
    /* styles */
}`
    },
    quiz: [
      { question: 'Which syntax represents an attribute selector?', options: ['input(type="text")', 'input{type="text"}', 'input[type="text"]', 'input<type="text">'], answer: 'input[type="text"]' },
      { question: 'Why are attribute selectors essential for styling HTML forms?', options: ['Because form tags don\'t support classes', 'Because the <input> tag is used for 10 different types of UI elements (text, checkbox, submit), and you need to style them differently', 'They make the form submit faster'], answer: 'Because the <input> tag is used for 10 different types of UI elements (text, checkbox, submit), and you need to style them differently' },
      { question: 'What does the ^= symbol mean in an attribute selector (e.g., [href^="https"])?', options: ['Contains', 'Ends with', 'Exact match', 'Starts with'], answer: 'Starts with' }
    ],
    interviewQuestions: [
      { q: 'Can you use attribute selectors to style based on custom HTML "data-*" attributes?', a: 'Absolutely. This is a very powerful pattern. You can add `data-state="loading"` to an element via JavaScript, and target it in CSS using `button[data-state="loading"]` to show a spinner, perfectly separating JS logic from CSS styling.' }
    ],
    summary: [
      'Attribute selectors use square brackets [].',
      'Essential for styling inputs (type="text").',
      'Can do powerful regex-like matching (starts with ^, ends with $, contains *).'
    ],
    references: commonReferences
  },

  'css_specificity': {
    isStructured: true,
    title: '89. Specificity Rules',
    difficulty: 'Advanced',
    readingTime: '5 Minutes',
    definition: 'Specificity is the algorithm calculated by browsers to determine which CSS rule gets applied if two rules conflict and target the exact same element.',
    whyUseIt: 'If you set a paragraph to be Red in one place, and Blue in another place, the browser has to decide which rule wins. Understanding specificity stops you from ripping your hair out when your CSS "isn\'t working".',
    syntax: `/* The Hierarchy (Lowest to Highest) */
1. Element selector (div, p) -> Value: 1
2. Class selector (.card, .btn) -> Value: 10
3. ID selector (#header) -> Value: 100
4. Inline styles (style="color:red;") -> Value: 1000`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  /* 1. Element Selector (Weakest - Score: 1) */
  p { color: black; }
  
  /* 2. Class Selector (Stronger - Score: 10) */
  .text-red { color: red; }
  
  /* 3. ID Selector (Strongest - Score: 100) */
  #text-blue { color: blue; }
  
  /* 
     What happens here? 
     This is a combination: 
     ID (100) + Class (10) + Element (1) = Score 111!
  */
  #text-blue .text-red p { color: green; }
</style>
<body>
  <!-- This paragraph has conflicting rules! Which color wins? -->
  <p class="text-red" id="text-blue">
    I am BLUE. The ID selector (#) scores 100, crushing the Class (.) which only scores 10.
  </p>
  
  <!-- INLINE styles crush everything (Score 1000) -->
  <p class="text-red" id="text-blue" style="color: purple;">
    I am PURPLE. Inline styles in the HTML override all external CSS.
  </p>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'Calculation', desc: 'When selectors are combined (e.g., `div.card #title`), their values are added together. Whichever selector has the highest total score wins.' },
        { code: 'The Tie-Breaker', desc: 'If two conflicting rules have the EXACT same specificity score, the one written LAST in the CSS file wins (the Cascade).' }
    ],
    realWorldExample: 'You download a CSS Framework like Bootstrap. Bootstrap styles buttons using classes (Score: 10). You try to override it by writing `button { background: red; }` (Score: 1). Your color doesn\'t work! You must match or exceed their specificity: `.my-custom-btn { background: red; }`.',
    commonMistakes: [
      { error: 'Using IDs for styling.', code: '#header { background: black; }', suffix: 'Because IDs score 100, they are almost impossible to override later on without writing even messier CSS. Best practice: NEVER use IDs for CSS styling. Only use Classes.' }
    ],
    bestPractices: [
      'Keep your specificity as low as possible. Write flat CSS (using BEM methodology like `.card-title`) rather than deeply nested CSS (`.card div h2 span`).'
    ],
    practiceExercise: {
      task: 'Which selector is more specific? `ul li a` OR `.nav-link`?',
      expectedOutput: 'ul li a = 3 points. .nav-link = 10 points. .nav-link wins!',
      solution: `ul li a = 3 points.
.nav-link = 10 points.
.nav-link wins!`
    },
    quiz: [
      { question: 'What is CSS Specificity?', options: ['The speed at which CSS loads', 'The algorithm that determines which CSS rule wins when there is a conflict', 'A rule for naming variables', 'The file size of the CSS'], answer: 'The algorithm that determines which CSS rule wins when there is a conflict' },
      { question: 'Which selector has the HIGHEST specificity (overrides all others)?', options: ['A Class selector (.name)', 'An Element selector (div)', 'An ID selector (#name)', 'An inline style (style="...")'], answer: 'An inline style (style="...")' },
      { question: 'If two rules have the exact same specificity score, which one wins?', options: ['The one written first', 'The one written last (lowest down in the file)', 'The browser chooses randomly', 'They mix together'], answer: 'The one written last (lowest down in the file)' },
      { question: 'Why is it a bad idea to use ID selectors for CSS styling?', options: ['They are deprecated', 'They break JavaScript', 'Their specificity is so high that they are very difficult to override later', 'They load slower'], answer: 'Their specificity is so high that they are very difficult to override later' }
    ],
    interviewQuestions: [
      { q: 'What happens if you have 11 classes chained together vs 1 ID?', a: 'Historically, people thought 11 classes (11 * 10 = 110) would beat 1 ID (100). This is FALSE. Specificity isn\'t actually base-10 math; it\'s a tiered bracket system. An ID will ALWAYS beat any number of classes, even if you chain 100 classes together. It works like Version Numbers (1.0.0 beats 0.99.0).' }
    ],
    summary: [
      'Specificity resolves conflicting rules.',
      'Hierarchy: Inline > ID > Class > Element.',
      'Ties are broken by the Cascade (last rule wins).',
      'Keep specificity low by relying on Classes.'
    ],
    references: commonReferences
  },

  'css_important': {
    isStructured: true,
    title: '90. !important',
    difficulty: 'Intermediate',
    readingTime: '2 Minutes',
    definition: 'The !important rule is a declaration that overrides ALL standard specificity rules and forces a property to be applied.',
    whyUseIt: 'It is a nuclear option. It is primarily used when you are using a 3rd party library (where you cannot edit their CSS file) and you absolutely MUST force an override.',
    syntax: `selector {
    property: value !important;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  /* Base style */
  .button {
    background-color: blue;
  }
  
  /* Highly specific rule */
  #main-content .sidebar .button {
    background-color: red;
  }
  
  /* A weak rule, BUT it has the nuclear option */
  .override-btn {
    background-color: green !important;
  }
</style>
<body>
  <!-- The ID rule should win (red), but the nuclear class forces it to be Green! -->
  <div id="main-content">
    <div class="sidebar">
      <button class="button override-btn">I am GREEN!</button>
    </div>
  </div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: '!important', desc: 'Placed at the very end of the declaration, right before the semicolon. It ignores specificity scores completely.' }
    ],
    realWorldExample: 'You are using a WordPress theme. The theme hardcodes the navigation text to be black. You don\'t want to edit the core theme files (because updates will erase your edits). In your custom CSS panel, you write `.nav-link { color: blue !important; }`. It smashes the theme\'s rules and forces the blue color.',
    commonMistakes: [
      { error: 'Using !important to fix bad CSS architecture.', code: '', suffix: 'If your CSS isn\'t working, your specificity is a mess. Restructure your CSS. DO NOT just slap !important on it to "make it work". If you do, the only way to override that new rule is with ANOTHER !important, leading to unmaintainable code.' }
    ],
    bestPractices: [
      'Avoid using `!important` at all costs. Only use it when overriding external libraries/plugins.'
    ],
    practiceExercise: {
      task: 'Force a paragraph with class ".alert" to be red, overriding any other potential inline styles or IDs.',
      expectedOutput: '.alert { color: red !important; }',
      solution: `.alert {
    color: red !important;
}`
    },
    quiz: [
      { question: 'What does the !important declaration do?', options: ['Makes the text bold', 'Highlights the code in the editor', 'Overrides all standard specificity rules and forces the style to apply', 'Marks the code for deletion'], answer: 'Overrides all standard specificity rules and forces the style to apply' },
      { question: 'Where is the !important keyword placed?', options: ['At the start of the CSS file', 'Before the property name', 'After the property value, just before the semicolon', 'Inside the HTML tag'], answer: 'After the property value, just before the semicolon' },
      { question: 'Is it considered a best practice to use !important frequently?', options: ['Yes, it makes sure your CSS always works', 'No, it breaks the natural cascade and makes CSS unmaintainable'], answer: 'No, it breaks the natural cascade and makes CSS unmaintainable' }
    ],
    interviewQuestions: [
      { q: 'If two conflicting rules BOTH use !important, which one wins?', a: 'The browser falls back to the standard rules. It will calculate the normal Specificity score of the selectors. If those tie, it falls back to the Cascade (whichever is written last wins).' }
    ],
    summary: [
      '!important is the nuclear option that breaks specificity.',
      'Only use it to override 3rd party code.',
      'Never use it as a lazy fix for poorly written CSS.'
    ],
    references: commonReferences
  }
};
