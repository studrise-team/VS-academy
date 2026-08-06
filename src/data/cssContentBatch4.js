const commonReferences = [
  { label: 'W3Schools CSS', url: 'https://www.w3schools.com/css/' },
  { label: 'MDN CSS Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { label: 'CSS Tricks: A Guide to Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' }
];

export const cssContentBatch4 = {
  'css_introduction_to_flexbox': {
    isStructured: true,
    title: '33. Introduction to Flexbox',
    difficulty: 'Intermediate',
    readingTime: '5 Minutes',
    definition: 'The Flexible Box Layout Module (Flexbox) makes it easier to design flexible responsive layout structures without using floats or positioning.',
    whyUseIt: 'Before Flexbox, centering an element vertically or creating equal height columns was incredibly difficult and hacky. Flexbox was designed specifically to lay out items in a single dimension (in a row or a column).',
    syntax: `/* Flexbox requires a parent container and child items */
.flex-container {
    display: flex;
}
.flex-item {
    /* Child properties */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .flex-container {
    display: flex;
    background-color: DodgerBlue;
  }
  
  .flex-container > div {
    background-color: #f1f1f1;
    margin: 10px;
    padding: 20px;
    font-size: 30px;
  }
</style>
<body>

<h1>The Flexbox Layout</h1>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>

</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <h2 style="margin-top:0;">The Flexbox Layout</h2>
  <div style="display: flex; background-color: DodgerBlue; padding: 10px;">
    <div style="background-color: #f1f1f1; margin: 5px; padding: 15px; font-size: 24px;">1</div>
    <div style="background-color: #f1f1f1; margin: 5px; padding: 15px; font-size: 24px;">2</div>
    <div style="background-color: #f1f1f1; margin: 5px; padding: 15px; font-size: 24px;">3</div>  
  </div>
</div>`,
    explanation: [
        { code: 'Flex Container', desc: 'The parent element that has display: flex applied to it.' },
        { code: 'Flex Items', desc: 'The direct children of the flex container. They automatically become flexible.' }
    ],
    realWorldExample: 'A website\'s top Navigation Bar. You want the logo on the far left, the links in the middle, and the login button on the far right. Flexbox can do this with 2 lines of CSS, whereas floats took 20 lines of CSS and broke frequently.',
    commonMistakes: [
      { error: 'Applying flex properties to the wrong element.', code: '', suffix: 'Remember: properties like justify-content go on the PARENT container, not the child items.' }
    ],
    bestPractices: [
      'Use Flexbox for 1-dimensional layouts (a row OR a column). Use CSS Grid for 2-dimensional layouts (rows AND columns).'
    ],
    practiceExercise: {
      task: 'Turn a div with class ".nav" into a flex container.',
      expectedOutput: '.nav { display: flex; }',
      solution: `.nav {
    display: flex;
}`
    },
    quiz: [
      { question: 'What was Flexbox designed to replace?', options: ['CSS Colors', 'Float-based layouts', 'HTML Forms', 'JavaScript Animations'], answer: 'Float-based layouts' },
      { question: 'Flexbox is best suited for layouts in how many dimensions?', options: ['1 Dimension (Row OR Column)', '2 Dimensions (Row AND Column)', '3 Dimensions (Z-axis)', '0 Dimensions'], answer: '1 Dimension (Row OR Column)' },
      { question: 'What are the two main components of a Flexbox layout?', options: ['Rows and Columns', 'Blocks and Inlines', 'Flex Container and Flex Items', 'Floats and Clears'], answer: 'Flex Container and Flex Items' }
    ],
    interviewQuestions: [
      { q: 'What problem does Flexbox solve?', a: 'It solves the problem of aligning and distributing space among items in a container, even when their size is unknown or dynamic. Specifically, it solves vertical centering and equal-height columns, which were notoriously difficult in older CSS.' }
    ],
    summary: [
      'Flexbox makes 1-dimensional layouts easy.',
      'You must define a parent Flex Container using display: flex.',
      'The direct children automatically become Flex Items.'
    ],
    references: commonReferences
  },

  'css_display_flex': {
    isStructured: true,
    title: '34. display: flex',
    difficulty: 'Intermediate',
    readingTime: '2 Minutes',
    definition: 'The display: flex property turns a standard HTML element into a Flex Container.',
    whyUseIt: 'This is the ON switch for Flexbox. Without this single line of code, none of the other Flexbox properties will work.',
    syntax: `selector {
    display: flex; /* or inline-flex */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .normal-divs {
    background: gray;
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .flex-container {
    display: flex;
    background: navy;
    padding: 10px;
  }
  
  .box {
    background: coral;
    padding: 10px;
    border: 1px solid black;
    color: white;
  }
</style>
<body>
  <h3>Standard Block Divs (Stack Vertically)</h3>
  <div class="normal-divs">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
  </div>
  
  <h3>Display: Flex (Align Horizontally by Default!)</h3>
  <div class="flex-container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <h4 style="margin: 0;">Standard Block Divs</h4>
  <div style="background: gray; padding: 10px; margin-bottom: 20px;">
    <div style="background: coral; padding: 10px; border: 1px solid black; color: white;">Box 1</div>
    <div style="background: coral; padding: 10px; border: 1px solid black; color: white;">Box 2</div>
  </div>
  <h4 style="margin: 0;">Display: Flex</h4>
  <div style="display: flex; background: navy; padding: 10px;">
    <div style="background: coral; padding: 10px; border: 1px solid black; color: white;">Box 1</div>
    <div style="background: coral; padding: 10px; border: 1px solid black; color: white;">Box 2</div>
  </div>
</div>`,
    explanation: [
        { code: 'display: flex', desc: 'Activates Flexbox on the parent. Notice how the children instantly sit side-by-side without any floats or inline-block hacks!' }
    ],
    realWorldExample: 'Every time you need elements to sit side-by-side (like buttons in a toolbar, or icons next to text), wrapping them in a div and applying `display: flex` is the modern standard.',
    commonMistakes: [
      { error: 'Applying flex to the children.', code: '.child { display: flex; }', suffix: 'This turns the child into a container. You must apply it to the PARENT.' }
    ],
    bestPractices: [
      'Use `display: inline-flex` if you want the flex container itself to behave like an inline element (not taking up the full width).'
    ],
    practiceExercise: {
      task: 'Turn the ".header" class into a flexbox container.',
      expectedOutput: '.header { display: flex; }',
      solution: `.header {
    display: flex;
}`
    },
    quiz: [
      { question: 'Which property activates Flexbox?', options: ['flex: on', 'layout: flex', 'display: flex', 'align: flex'], answer: 'display: flex' },
      { question: 'When you apply display: flex to a container, what happens to its direct children by default?', options: ['They disappear', 'They stack vertically', 'They align horizontally in a row', 'They turn into flex containers'], answer: 'They align horizontally in a row' },
      { question: 'Which element do you apply display: flex to?', options: ['The parent container', 'The child items', 'The <body> tag', 'The CSS stylesheet'], answer: 'The parent container' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between flex and inline-flex?', a: '`display: flex` makes the container a block-level element (it takes up the full width). `display: inline-flex` makes the container act like an inline element (it only takes up as much width as its content), while its children still behave as flex items.' }
    ],
    summary: [
      'display: flex is the "ON" switch for Flexbox.',
      'It must be applied to the parent container.',
      'By default, it aligns children in a horizontal row.'
    ],
    references: commonReferences
  },

  'css_flex_direction': {
    isStructured: true,
    title: '35. flex-direction',
    difficulty: 'Intermediate',
    readingTime: '3 Minutes',
    definition: 'The flex-direction property defines in which direction the container wants to stack the flex items.',
    whyUseIt: 'It allows you to instantly switch a layout from a horizontal row (desktop) to a vertical column (mobile) with one line of code.',
    syntax: `selector {
    flex-direction: row; /* row | row-reverse | column | column-reverse */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .flex-container {
    display: flex;
    background: navy;
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .row { flex-direction: row; }
  .column { flex-direction: column; }
  .row-reverse { flex-direction: row-reverse; }
  
  .box { background: coral; padding: 10px; margin: 5px; color: white; }
</style>
<body>
  <h3>flex-direction: row (Default)</h3>
  <div class="flex-container row">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
  
  <h3>flex-direction: column</h3>
  <div class="flex-container column">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
  
  <h3>flex-direction: row-reverse</h3>
  <div class="flex-container row-reverse">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <h4 style="margin: 0;">row (Default)</h4>
  <div style="display: flex; flex-direction: row; background: navy; padding: 5px; margin-bottom: 10px;">
    <div style="background: coral; padding: 5px 10px; margin: 2px; color: white;">1</div><div style="background: coral; padding: 5px 10px; margin: 2px; color: white;">2</div><div style="background: coral; padding: 5px 10px; margin: 2px; color: white;">3</div>
  </div>
  <h4 style="margin: 0;">column</h4>
  <div style="display: flex; flex-direction: column; background: navy; padding: 5px; margin-bottom: 10px;">
    <div style="background: coral; padding: 5px 10px; margin: 2px; color: white;">1</div><div style="background: coral; padding: 5px 10px; margin: 2px; color: white;">2</div><div style="background: coral; padding: 5px 10px; margin: 2px; color: white;">3</div>
  </div>
</div>`,
    explanation: [
        { code: 'row', desc: 'Items sit side-by-side left to right (Default).' },
        { code: 'column', desc: 'Items stack top to bottom.' },
        { code: 'row-reverse', desc: 'Items sit side-by-side but start from the right and go left (visually reverses the DOM order).' }
    ],
    realWorldExample: 'Responsive Design: A pricing page has 3 pricing cards side-by-side (`flex-direction: row`) on desktop. When viewed on a mobile phone, a media query changes it to `flex-direction: column` so the cards stack vertically.',
    commonMistakes: [
      { error: 'Forgetting that flex-direction changes the Main Axis.', code: '', suffix: 'If you change to column, justify-content now aligns vertically, not horizontally! (Explained in next lesson).' }
    ],
    bestPractices: [
      'Use row-reverse for right-to-left language support, or to visually swap the order of an image and text block on alternating rows without changing the HTML.'
    ],
    practiceExercise: {
      task: 'Set the flex direction of ".mobile-menu" so that the items stack vertically.',
      expectedOutput: '.mobile-menu { flex-direction: column; }',
      solution: `.mobile-menu {
    flex-direction: column;
}`
    },
    quiz: [
      { question: 'What is the default flex-direction?', options: ['column', 'row', 'row-reverse', 'inline'], answer: 'row' },
      { question: 'Which property stacks flex items vertically?', options: ['flex-direction: vertical', 'flex-direction: stack', 'flex-direction: column', 'align-items: column'], answer: 'flex-direction: column' },
      { question: 'Which property reverses the visual order of the HTML elements horizontally?', options: ['flex-direction: row-reverse', 'justify-content: reverse', 'order: -1', 'flex-wrap: reverse'], answer: 'flex-direction: row-reverse' },
      { question: 'Does flex-direction apply to the container or the child items?', options: ['Child items', 'Container'], answer: 'Container' }
    ],
    interviewQuestions: [
      { q: 'Explain the concept of the Main Axis and Cross Axis in Flexbox.', a: 'The Main Axis is defined by the flex-direction. If flex-direction is row (default), the Main Axis is horizontal and the Cross Axis is vertical. If flex-direction is column, the axes swap: the Main Axis becomes vertical and the Cross Axis becomes horizontal.' }
    ],
    summary: [
      'flex-direction defines the Main Axis.',
      'row is horizontal (default).',
      'column is vertical.',
      'reverse options invert the flow.'
    ],
    references: commonReferences
  },

  'css_justify_content': {
    isStructured: true,
    title: '36. justify-content',
    difficulty: 'Intermediate',
    readingTime: '5 Minutes',
    definition: 'The justify-content property aligns the flexible container\'s items along the MAIN axis.',
    whyUseIt: 'It is the ultimate tool for distributing extra space. You can use it to push all items to the right, center them, or space them out evenly.',
    syntax: `selector {
    /* flex-start | flex-end | center | space-between | space-around | space-evenly */
    justify-content: center; 
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .flex-container {
    display: flex;
    background: lightgray;
    padding: 10px;
    margin-bottom: 10px;
  }
  .center { justify-content: center; }
  .space-between { justify-content: space-between; }
  .flex-end { justify-content: flex-end; }
  
  .box { background: coral; padding: 10px; color: white; border: 1px solid black; }
</style>
<body>
  <h3>justify-content: center</h3>
  <div class="flex-container center">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
  
  <h3>justify-content: space-between</h3>
  <div class="flex-container space-between">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
  
  <h3>justify-content: flex-end</h3>
  <div class="flex-container flex-end">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <h4 style="margin: 0;">center</h4>
  <div style="display: flex; justify-content: center; background: lightgray; padding: 5px; margin-bottom: 10px;">
    <div style="background: coral; padding: 5px 10px; margin: 0 5px; color: white;">1</div><div style="background: coral; padding: 5px 10px; margin: 0 5px; color: white;">2</div><div style="background: coral; padding: 5px 10px; margin: 0 5px; color: white;">3</div>
  </div>
  <h4 style="margin: 0;">space-between</h4>
  <div style="display: flex; justify-content: space-between; background: lightgray; padding: 5px; margin-bottom: 10px;">
    <div style="background: coral; padding: 5px 10px; color: white;">1</div><div style="background: coral; padding: 5px 10px; color: white;">2</div><div style="background: coral; padding: 5px 10px; color: white;">3</div>
  </div>
  <h4 style="margin: 0;">flex-end</h4>
  <div style="display: flex; justify-content: flex-end; background: lightgray; padding: 5px; margin-bottom: 10px;">
    <div style="background: coral; padding: 5px 10px; margin: 0 5px; color: white;">1</div><div style="background: coral; padding: 5px 10px; margin: 0 5px; color: white;">2</div><div style="background: coral; padding: 5px 10px; margin: 0 5px; color: white;">3</div>
  </div>
</div>`,
    explanation: [
        { code: 'flex-start', desc: 'Items pack to the start of the line (Default).' },
        { code: 'flex-end', desc: 'Items pack to the end of the line.' },
        { code: 'center', desc: 'Items pack in the center.' },
        { code: 'space-between', desc: 'First item is on the start line, last item on the end line, remaining items distributed evenly in between.' }
    ],
    realWorldExample: 'A Navigation bar has a Logo and a list of Links. Apply `display: flex` and `justify-content: space-between` to the navbar. The logo shoots to the far left, the links shoot to the far right. Perfect layout in 2 lines of CSS.',
    commonMistakes: [
      { error: 'Assuming justify-content is always horizontal.', code: '', suffix: 'If flex-direction is column, the Main Axis is vertical, meaning justify-content will now align items up and down!' }
    ],
    bestPractices: [
      'Use `space-between` for navbars and headers.',
      'Use `center` to instantly horizontally center a div (goodbye margin: 0 auto).'
    ],
    practiceExercise: {
      task: 'Set the flex container ".navbar" to push the first item to the left edge and the last item to the right edge.',
      expectedOutput: '.navbar { justify-content: space-between; }',
      solution: `.navbar {
    justify-content: space-between;
}`
    },
    quiz: [
      { question: 'Which axis does justify-content align items along?', options: ['The Cross Axis', 'The Main Axis', 'The Z Axis', 'The Absolute Axis'], answer: 'The Main Axis' },
      { question: 'Which value pushes the first item to the far left and the last item to the far right?', options: ['center', 'space-around', 'space-between', 'space-evenly'], answer: 'space-between' },
      { question: 'Which value pushes all items to the right side (end) of the container?', options: ['right', 'end', 'flex-end', 'flex-right'], answer: 'flex-end' },
      { question: 'If flex-direction is set to column, which way does justify-content align items?', options: ['Horizontally (Left/Right)', 'Vertically (Top/Bottom)'], answer: 'Vertically (Top/Bottom)' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between space-between and space-around?', a: 'space-between distributes equal space BETWEEN the items, but pushes the first and last items flush against the container edges. space-around puts equal space AROUND each item, meaning the space at the edges is half the size of the space between the items.' }
    ],
    summary: [
      'justify-content aligns items on the MAIN axis.',
      'It distributes empty space in the container.',
      'space-between is the most commonly used value for headers.'
    ],
    references: commonReferences
  },

  'css_align_items': {
    isStructured: true,
    title: '37. align-items',
    difficulty: 'Intermediate',
    readingTime: '4 Minutes',
    definition: 'The align-items property vertically aligns the flexible container\'s items along the CROSS axis.',
    whyUseIt: 'Before Flexbox, vertically centering an element inside a taller container was notoriously difficult. `align-items: center` solves this instantly.',
    syntax: `selector {
    /* flex-start | flex-end | center | stretch | baseline */
    align-items: center; 
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .flex-container {
    display: flex;
    height: 120px; /* Container is taller than the items! */
    background: lightgray;
    margin-bottom: 10px;
  }
  .center { align-items: center; }
  .flex-start { align-items: flex-start; }
  .stretch { align-items: stretch; } /* Default */
  
  .box { background: coral; padding: 10px; border: 1px solid black; }
</style>
<body>
  <h3>align-items: center (Holy Grail of CSS!)</h3>
  <div class="flex-container center">
    <div class="box">1</div><div class="box">2</div>
  </div>
  
  <h3>align-items: flex-start</h3>
  <div class="flex-container flex-start">
    <div class="box">1</div><div class="box">2</div>
  </div>
  
  <h3>align-items: stretch (Default)</h3>
  <div class="flex-container stretch">
    <div class="box">1 (I stretch to fill height!)</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <h4 style="margin: 0;">center</h4>
  <div style="display: flex; align-items: center; height: 80px; background: lightgray; padding: 5px; margin-bottom: 10px;">
    <div style="background: coral; padding: 10px; margin: 0 5px;">1</div><div style="background: coral; padding: 10px; margin: 0 5px;">2</div>
  </div>
  <h4 style="margin: 0;">stretch</h4>
  <div style="display: flex; align-items: stretch; height: 80px; background: lightgray; padding: 5px; margin-bottom: 10px;">
    <div style="background: coral; padding: 10px; margin: 0 5px;">1 (I stretched!)</div>
  </div>
</div>`,
    explanation: [
        { code: 'center', desc: 'Vertically centers the items within the container.' },
        { code: 'stretch', desc: 'The default behavior. Items stretch to fill the height of the container.' },
        { code: 'flex-start', desc: 'Aligns items to the top.' }
    ],
    realWorldExample: 'A button has an icon and text inside it. The icon is 24px tall, the text is 16px tall. Applying `display: flex; align-items: center;` to the button ensures the icon and text are perfectly vertically aligned with each other.',
    commonMistakes: [
      { error: 'Align-items not working.', code: '', suffix: 'If the container does not have a defined height, there is no extra vertical space to align items within. The container wraps tight, so align-items appears to do nothing.' }
    ],
    bestPractices: [
      'To perfectly center a div vertically AND horizontally in the middle of the screen, apply this to the body: `display: flex; justify-content: center; align-items: center; height: 100vh;`'
    ],
    practiceExercise: {
      task: 'Set the items in a flex container to vertically center themselves.',
      expectedOutput: '.container { align-items: center; }',
      solution: `.container {
    align-items: center;
}`
    },
    quiz: [
      { question: 'Which axis does align-items align items along?', options: ['The Main Axis', 'The Cross Axis', 'The Z Axis', 'The Y Axis'], answer: 'The Cross Axis' },
      { question: 'Which value perfectly vertically centers elements in a standard row flexbox?', options: ['vertical-center', 'middle', 'center', 'align-center'], answer: 'center' },
      { question: 'What is the default value of align-items?', options: ['flex-start', 'center', 'stretch', 'auto'], answer: 'stretch' },
      { question: 'What happens if you use align-items: center but the flex container has no height set?', options: ['The items center on the page', 'An error occurs', 'Nothing visible happens because the container wraps tight to the items', 'The container becomes 100vh'], answer: 'Nothing visible happens because the container wraps tight to the items' }
    ],
    interviewQuestions: [
      { q: 'How would you perfectly center a div inside the entire browser window using Flexbox?', a: 'I would set the body (or a wrapper div) to `height: 100vh; display: flex; justify-content: center; align-items: center;`. `justify-content` centers it horizontally on the main axis, and `align-items` centers it vertically on the cross axis.' }
    ],
    summary: [
      'align-items aligns items on the CROSS axis.',
      'Use center to vertically center items in a row.',
      'The default is stretch (which is why columns in flexbox naturally have equal heights!).'
    ],
    references: commonReferences
  },

  'css_flex_wrap': {
    isStructured: true,
    title: '38. flex-wrap',
    difficulty: 'Intermediate',
    readingTime: '3 Minutes',
    definition: 'The flex-wrap property specifies whether the flex items should wrap onto multiple lines or squeeze onto a single line.',
    whyUseIt: 'By default, Flexbox will try to squeeze ALL items onto one single row, causing them to shrink or overflow. `flex-wrap: wrap` allows items to drop to the next line when they run out of space, creating grid-like layouts.',
    syntax: `selector {
    flex-wrap: wrap; /* nowrap | wrap | wrap-reverse */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .flex-container {
    display: flex;
    width: 300px; /* Constrained width */
    background: navy;
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .nowrap { flex-wrap: nowrap; } /* Default */
  .wrap { flex-wrap: wrap; }
  
  .box { 
    background: coral; 
    padding: 10px; 
    margin: 5px; 
    width: 100px; /* Wants to be 100px wide */
    color: white; 
  }
</style>
<body>
  <h3>nowrap (Default - Items SHRINK to fit)</h3>
  <div class="flex-container nowrap">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div><div class="box">4</div>
  </div>
  
  <h3>wrap (Items drop to new line!)</h3>
  <div class="flex-container wrap">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div><div class="box">4</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <h4 style="margin: 0;">nowrap (Default - Items SHRINK)</h4>
  <div style="display: flex; flex-wrap: nowrap; width: 250px; background: navy; padding: 5px; margin-bottom: 10px;">
    <div style="background: coral; padding: 5px; margin: 2px; width: 100px; color: white;">1</div><div style="background: coral; padding: 5px; margin: 2px; width: 100px; color: white;">2</div><div style="background: coral; padding: 5px; margin: 2px; width: 100px; color: white;">3</div><div style="background: coral; padding: 5px; margin: 2px; width: 100px; color: white;">4</div>
  </div>
  <h4 style="margin: 0;">wrap (Items drop to next line)</h4>
  <div style="display: flex; flex-wrap: wrap; width: 250px; background: navy; padding: 5px; margin-bottom: 10px;">
    <div style="background: coral; padding: 5px; margin: 2px; width: 100px; color: white;">1</div><div style="background: coral; padding: 5px; margin: 2px; width: 100px; color: white;">2</div><div style="background: coral; padding: 5px; margin: 2px; width: 100px; color: white;">3</div><div style="background: coral; padding: 5px; margin: 2px; width: 100px; color: white;">4</div>
  </div>
</div>`,
    explanation: [
        { code: 'nowrap', desc: 'Forces all items to stay on one line, regardless of their specified width.' },
        { code: 'wrap', desc: 'Allows items to drop to a new line if the container is too narrow.' }
    ],
    realWorldExample: 'An image gallery containing 20 photos. You set the container to `display: flex; flex-wrap: wrap;`. As the user resizes their browser, the images naturally flow down into 4 columns, then 3, then 2, then 1 column on mobile.',
    commonMistakes: [
      { error: 'Wondering why elements are shrinking.', code: '', suffix: 'If you set width: 300px on 3 children, but the parent is only 500px wide, Flexbox will ignore your 300px and shrink them. Add flex-wrap: wrap so they retain their 300px size and drop down.' }
    ],
    bestPractices: [
      'Use the shorthand property `flex-flow: row wrap;` to set flex-direction and flex-wrap at the same time.'
    ],
    practiceExercise: {
      task: 'Set the flex container to allow its children to wrap onto multiple lines.',
      expectedOutput: '.container { flex-wrap: wrap; }',
      solution: `.container {
    flex-wrap: wrap;
}`
    },
    quiz: [
      { question: 'What is the default value of flex-wrap?', options: ['wrap', 'nowrap', 'wrap-reverse', 'auto'], answer: 'nowrap' },
      { question: 'What happens to flex items if flex-wrap is nowrap and they exceed the container\'s width?', options: ['They overflow out of the container', 'They drop to the next line', 'They shrink to fit onto one line', 'They disappear'], answer: 'They shrink to fit onto one line' },
      { question: 'Which shorthand property combines flex-direction and flex-wrap?', options: ['flex-layout', 'flex-style', 'flex-flow', 'flex-box'], answer: 'flex-flow' }
    ],
    interviewQuestions: [
      { q: 'In a responsive grid of cards, why might you use flex-wrap: wrap instead of just using @media queries?', a: 'flex-wrap provides intrinsic responsiveness. Instead of manually coding breakpoints to change column counts, flex-wrap allows items to naturally wrap based on their base width and the available container width, creating fluid layouts with less CSS.' }
    ],
    summary: [
      'By default, Flexbox forces everything onto one line.',
      'flex-wrap: wrap allows elements to wrap to the next line.',
      'Essential for creating multi-row responsive grids with Flexbox.'
    ],
    references: commonReferences
  },

  'css_align_content': {
    isStructured: true,
    title: '39. align-content',
    difficulty: 'Advanced',
    readingTime: '3 Minutes',
    definition: 'The align-content property aligns MULTIPLE lines of flex items vertically (on the cross axis) when there is extra space in the flex container.',
    whyUseIt: 'Unlike align-items (which aligns items within a single line), align-content aligns the ENTIRE block of wrapped lines within a tall container.',
    syntax: `selector {
    /* flex-start | flex-end | center | space-between | space-around | stretch */
    align-content: center; 
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .flex-container {
    display: flex;
    flex-wrap: wrap; /* CRITICAL requirement */
    height: 300px;   /* Must be taller than content */
    background: navy;
  }
  
  .flex-container.center {
    align-content: center; /* Centers the whole block of lines */
  }
  
  .box { background: coral; padding: 10px; margin: 5px; width: 100px; color: white; }
</style>
<body>
  <div class="flex-container center">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
    <div class="box">4</div><div class="box">5</div><div class="box">6</div>
  </div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'align-content', desc: 'Modifies the behavior of flex-wrap. It dictates how the space between wrapped rows is handled.' },
        { code: 'Requirement', desc: 'This property does ABSOLUTELY NOTHING if flex-wrap is set to nowrap (the default).' }
    ],
    realWorldExample: 'If you have a full-screen image gallery (100vh height) containing two rows of images, `align-content: space-between` will push the top row to the ceiling and the bottom row to the floor.',
    commonMistakes: [
      { error: 'Confusing align-items with align-content.', code: '', suffix: 'align-items aligns items inside a SINGLE row. align-content distributes space BETWEEN multiple wrapped rows. If there is only one row, align-content does nothing.' }
    ],
    bestPractices: [
      'Only use align-content if you have a multi-line flex container (`flex-wrap: wrap`) with a defined `height` that is larger than the content.'
    ],
    practiceExercise: {
      task: 'Center a multi-line group of wrapped flex items vertically inside a tall container.',
      expectedOutput: '.container { align-content: center; }',
      solution: `.container {
    align-content: center;
}`
    },
    quiz: [
      { question: 'What is the main difference between align-items and align-content?', options: ['align-items is horizontal, align-content is vertical', 'align-items is for single lines, align-content is for spacing multiple wrapped lines', 'There is no difference', 'align-content works on block elements'], answer: 'align-items is for single lines, align-content is for spacing multiple wrapped lines' },
      { question: 'What property MUST be active for align-content to have any effect?', options: ['flex-direction: column', 'justify-content', 'flex-wrap: wrap', 'display: inline'], answer: 'flex-wrap: wrap' },
      { question: 'If a flex container only has one line of items, will align-content do anything?', options: ['Yes', 'No'], answer: 'No' }
    ],
    interviewQuestions: [
      { q: 'Why is my align-content: center property not working?', a: 'There are two common reasons: 1. You did not set `flex-wrap: wrap`, so there is only one line of items. 2. The container does not have a defined `height` that is larger than the items, so there is no extra vertical space to distribute.' }
    ],
    summary: [
      'align-content aligns multiple wrapped rows.',
      'It only works if flex-wrap: wrap is applied.',
      'It only works if there are multiple lines.'
    ],
    references: commonReferences
  },

  'css_flex_grow': {
    isStructured: true,
    title: '40. flex-grow',
    difficulty: 'Advanced',
    readingTime: '3 Minutes',
    definition: 'The flex-grow property specifies how much a flex item will grow relative to the rest of the flexible items inside the same container.',
    whyUseIt: 'It allows elements to dynamically consume leftover empty space. Instead of using % widths, flex-grow distributes the exact remaining pixels logically.',
    syntax: `selector {
    flex-grow: 1; /* Unitless number */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .flex-container {
    display: flex;
    background: navy;
    padding: 10px;
  }
  
  .item-static {
    background: coral;
    width: 100px; /* Fixed width */
  }
  
  .item-grow {
    background: lightgreen;
    flex-grow: 1; /* Consumes ALL leftover space! */
  }
</style>
<body>
  <div class="flex-container">
    <div class="item-static">Fixed Logo</div>
    <div class="item-grow">Search Bar (Grows to fill space)</div>
    <div class="item-static">Fixed Profile</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="display: flex; background: navy; padding: 10px;">
    <div style="background: coral; padding: 5px; width: 80px;">Logo</div>
    <div style="background: lightgreen; padding: 5px; flex-grow: 1; margin: 0 10px;">Search Bar (I grew!)</div>
    <div style="background: coral; padding: 5px; width: 80px;">Profile</div>
  </div>
</div>`,
    explanation: [
        { code: 'flex-grow: 0', desc: 'The default. Items do not grow beyond their content/specified width.' },
        { code: 'flex-grow: 1', desc: 'Takes up 1 "share" of the remaining empty space.' },
        { code: 'Proportions', desc: 'If item A has flex-grow: 1 and item B has flex-grow: 2, item B will take twice as much of the leftover space as item A.' }
    ],
    realWorldExample: 'A common layout is a Sidebar and Main Content. The Sidebar is fixed at 250px. The Main Content has `flex-grow: 1`. As the browser stretches from 1000px to 4000px, the sidebar stays 250px, and the main content seamlessly absorbs all the extra screen space.',
    commonMistakes: [
      { error: 'Applying flex-grow to the container.', code: '.container { flex-grow: 1; }', suffix: 'flex-grow is a CHILD property. It must be applied to the flex items themselves.' }
    ],
    bestPractices: [
      'Use `flex: 1;` (the shorthand for flex-grow: 1; flex-shrink: 1; flex-basis: 0%) to easily create equal-width columns.'
    ],
    practiceExercise: {
      task: 'Write a rule for an input field with class ".search" to consume all available remaining space in a flex navbar.',
      expectedOutput: '.search { flex-grow: 1; }',
      solution: `.search {
    flex-grow: 1;
}`
    },
    quiz: [
      { question: 'What does flex-grow do?', options: ['Increases font size', 'Allows an item to consume remaining empty space in the container', 'Makes the container taller', 'Prevents items from shrinking'], answer: 'Allows an item to consume remaining empty space in the container' },
      { question: 'What is the default value of flex-grow?', options: ['1', '0', 'auto', '100%'], answer: '0' },
      { question: 'If Item A has flex-grow: 1 and Item B has flex-grow: 2, what happens to the extra space?', options: ['Item B gets twice as much extra space as Item A', 'They split it equally', 'Item B gets all of it', 'An error occurs'], answer: 'Item B gets twice as much extra space as Item A' },
      { question: 'Is flex-grow applied to the parent container or the child items?', options: ['Parent Container', 'Child Items'], answer: 'Child Items' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between setting width: 100% and flex-grow: 1 on a flex item?', a: '`width: 100%` blindly demands the full width of the container, ignoring sibling elements, which forces siblings to shrink or overflow. `flex-grow: 1` politely asks for all the *remaining* empty space *after* sibling elements have taken their required width.' }
    ],
    summary: [
      'flex-grow is a CHILD property.',
      'It dictates how items consume leftover space.',
      'flex-grow: 1 is heavily used to make main content areas fill the screen.'
    ],
    references: commonReferences
  },

  'css_flex_shrink': {
    isStructured: true,
    title: '41. flex-shrink',
    difficulty: 'Advanced',
    readingTime: '3 Minutes',
    definition: 'The flex-shrink property specifies how much a flex item will shrink relative to the rest of the flex items when there is not enough space.',
    whyUseIt: 'By default, all flex items are allowed to shrink (`flex-shrink: 1`) to prevent overflow. Sometimes, you have an element (like an Avatar image) that should NEVER shrink, even if the screen gets tiny.',
    syntax: `selector {
    flex-shrink: 0; /* 0 means do NOT shrink */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .flex-container {
    display: flex;
    width: 300px; /* Small screen */
    background: navy;
  }
  
  .shrinkable {
    background: lightblue;
    width: 250px;
    /* Default is flex-shrink: 1, so it shrinks! */
  }
  
  .no-shrink {
    background: coral;
    width: 150px;
    flex-shrink: 0; /* Refuses to shrink! */
  }
</style>
<body>
  <!-- Total width wanted: 400px. Container is only 300px. -->
  <div class="flex-container">
    <div class="no-shrink">I stay 150px!</div>
    <div class="shrinkable">I shrunk to fit!</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="display: flex; width: 250px; background: navy; padding: 5px;">
    <div style="background: coral; width: 100px; flex-shrink: 0; padding: 5px; color: white;">Fixed 100px</div>
    <div style="background: lightblue; width: 200px; padding: 5px;">I was forced to shrink!</div>
  </div>
</div>`,
    explanation: [
        { code: 'flex-shrink: 1', desc: 'The default. Items will shrink proportionally if there is not enough space.' },
        { code: 'flex-shrink: 0', desc: 'The item refuses to shrink. It will maintain its defined width or content width, even if it causes overflow.' }
    ],
    realWorldExample: 'A chat application UI. You have a round profile picture next to a message bubble. As the browser narrows, you want the text bubble to squeeze and wrap text, but you want the profile picture to stay perfectly round and 50x50px. You apply `flex-shrink: 0` to the profile picture.',
    commonMistakes: [
      { error: 'Using width to prevent shrinking.', code: 'width: 500px;', suffix: 'In Flexbox, width is just a suggestion. If the container is 300px, the 500px item will still shrink. You MUST use flex-shrink: 0 to enforce it.' }
    ],
    bestPractices: [
      'Use `flex-shrink: 0` on icons, logos, and avatars in flex containers.'
    ],
    practiceExercise: {
      task: 'Write a rule for an image class ".avatar" so that it never shrinks in a flex container.',
      expectedOutput: '.avatar { flex-shrink: 0; }',
      solution: `.avatar {
    flex-shrink: 0;
}`
    },
    quiz: [
      { question: 'What is the default value of flex-shrink?', options: ['0', '1', 'auto', '-1'], answer: '1' },
      { question: 'Which value prevents a flex item from shrinking?', options: ['1', '0', 'none', 'false'], answer: '0' },
      { question: 'Is flex-shrink applied to the container or the child items?', options: ['Container', 'Child Items'], answer: 'Child Items' }
    ],
    interviewQuestions: [
      { q: 'Explain the "flex" shorthand property.', a: 'The `flex` property is shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`. For example, `flex: 0 1 auto;` is the default. `flex: 1;` implies `flex: 1 1 0%;`, which is a common pattern to make elements equal size and fully flexible.' }
    ],
    summary: [
      'flex-shrink dictates if an element shrinks when space is tight.',
      'Default is 1 (yes, it shrinks).',
      'Set to 0 to prevent shrinking (crucial for fixed-size icons).'
    ],
    references: commonReferences
  },

  'css_gap': {
    isStructured: true,
    title: '42. gap',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The gap property defines the size of the gap between the rows and columns in Flexbox and Grid layouts.',
    whyUseIt: 'Before `gap` was supported in Flexbox, developers had to use messy margins (`margin-right: 10px`) on items, and then use negative margins on the parent to fix the edges. `gap` solves this beautifully by only applying space BETWEEN items, not on the outer edges.',
    syntax: `selector {
    /* Applied to the PARENT container */
    gap: 20px; 
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .flex-container {
    display: flex;
    background: navy;
    padding: 10px;
    gap: 20px; /* 20px space between items! */
  }
  
  .box { background: coral; padding: 20px; color: white; }
</style>
<body>
  <div class="flex-container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="display: flex; gap: 20px; background: navy; padding: 10px;">
    <div style="background: coral; padding: 15px; color: white;">1</div>
    <div style="background: coral; padding: 15px; color: white;">2</div>
    <div style="background: coral; padding: 15px; color: white;">3</div>
  </div>
</div>`,
    explanation: [
        { code: 'gap: 20px', desc: 'Adds exactly 20px of space between the flex items. Notice there is no extra 20px space on the far left or far right.' },
        { code: 'column-gap / row-gap', desc: 'You can target specific axes (useful if flex-wrap is wrapping items onto new rows).' }
    ],
    realWorldExample: 'A row of social media icons (Twitter, Facebook, Instagram) needs 15px of space between them. Apply `display: flex; gap: 15px;` to their container. No more `margin-right: 15px;` and manually removing it from the `:last-child`.',
    commonMistakes: [
      { error: 'Applying gap to the child items.', code: '.item { gap: 10px; }', suffix: 'gap is a property for the PARENT container (the display: flex element).' }
    ],
    bestPractices: [
      'Stop using margin to space out flex items! Use `gap`.'
    ],
    practiceExercise: {
      task: 'Set a 1rem gap between items in a flex container.',
      expectedOutput: '.container { gap: 1rem; }',
      solution: `.container {
    gap: 1rem;
}`
    },
    quiz: [
      { question: 'Where does the gap property apply spacing?', options: ['Around the outside of the container', 'ONLY between the flex items', 'Inside the flex items (like padding)', 'On the top and bottom only'], answer: 'ONLY between the flex items' },
      { question: 'Do you apply the gap property to the parent container or the child items?', options: ['Parent Container', 'Child Items'], answer: 'Parent Container' },
      { question: 'Which older, messier CSS technique does gap replace for spacing flex items?', options: ['Padding', 'Floats', 'Margins + Negative Margins / :last-child hacks', 'Position absolute'], answer: 'Margins + Negative Margins / :last-child hacks' }
    ],
    interviewQuestions: [
      { q: 'Is the gap property supported in Flexbox?', a: 'Yes! Originally, the gap property was only supported in CSS Grid. However, modern browsers have fully adopted gap for Flexbox as well, making it the standard way to space flex items without relying on margins.' }
    ],
    summary: [
      'gap creates space BETWEEN items.',
      'It is applied to the PARENT container.',
      'It replaces the need for margin hacks on flex items.'
    ],
    references: commonReferences
  }
};
