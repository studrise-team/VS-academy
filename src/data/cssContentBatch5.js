const commonReferences = [
  { label: 'W3Schools CSS', url: 'https://www.w3schools.com/css/' },
  { label: 'MDN CSS Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { label: 'CSS Tricks: A Complete Guide to Grid', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/' }
];

export const cssContentBatch5 = {
  'css_introduction_to_grid': {
    isStructured: true,
    title: '43. Introduction to Grid',
    difficulty: 'Advanced',
    readingTime: '5 Minutes',
    definition: 'CSS Grid Layout is a two-dimensional layout system for the web.',
    whyUseIt: 'While Flexbox is designed for 1-dimensional layouts (a row OR a column), Grid is designed for 2-dimensional layouts (rows AND columns simultaneously). It is the most powerful layout system available in CSS.',
    syntax: `selector {
    display: grid;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .grid-container {
    display: grid;
    /* Create 3 equal columns */
    grid-template-columns: auto auto auto;
    background-color: #2196F3;
    padding: 10px;
  }
  
  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }
</style>
<body>

<h1>The Grid Layout</h1>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
</div>

</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <h2 style="margin-top:0;">The Grid Layout</h2>
  <div style="display: grid; grid-template-columns: auto auto auto; background-color: #2196F3; padding: 10px;">
    <div style="background-color: rgba(255, 255, 255, 0.8); border: 1px solid rgba(0, 0, 0, 0.8); padding: 15px; font-size: 24px; text-align: center;">1</div>
    <div style="background-color: rgba(255, 255, 255, 0.8); border: 1px solid rgba(0, 0, 0, 0.8); padding: 15px; font-size: 24px; text-align: center;">2</div>
    <div style="background-color: rgba(255, 255, 255, 0.8); border: 1px solid rgba(0, 0, 0, 0.8); padding: 15px; font-size: 24px; text-align: center;">3</div>  
    <div style="background-color: rgba(255, 255, 255, 0.8); border: 1px solid rgba(0, 0, 0, 0.8); padding: 15px; font-size: 24px; text-align: center;">4</div>
    <div style="background-color: rgba(255, 255, 255, 0.8); border: 1px solid rgba(0, 0, 0, 0.8); padding: 15px; font-size: 24px; text-align: center;">5</div>
    <div style="background-color: rgba(255, 255, 255, 0.8); border: 1px solid rgba(0, 0, 0, 0.8); padding: 15px; font-size: 24px; text-align: center;">6</div>  
  </div>
</div>`,
    explanation: [
        { code: 'Grid Container', desc: 'The parent element that has display: grid applied to it.' },
        { code: 'Grid Items', desc: 'The direct children of the grid container. They are automatically placed into the grid cells.' }
    ],
    realWorldExample: 'A photo gallery with a masonry layout, or a complex web application dashboard with a sidebar on the left, a header on the top, and main content in the middle. Grid allows you to define this entire skeleton in just 4 or 5 lines of CSS.',
    commonMistakes: [
      { error: 'Using Grid when Flexbox is better.', code: '', suffix: 'If you just need to align items in a single row (like a navbar), Flexbox is much easier. Use Grid when you need strict alignment in both rows and columns.' }
    ],
    bestPractices: [
      'Use Grid for the macro-layout (the skeleton of the page).',
      'Use Flexbox for the micro-layout (aligning items inside the grid cells).'
    ],
    practiceExercise: {
      task: 'Turn a div with class ".dashboard" into a grid container.',
      expectedOutput: '.dashboard { display: grid; }',
      solution: `.dashboard {
    display: grid;
}`
    },
    quiz: [
      { question: 'What is the main difference between Flexbox and Grid?', options: ['Grid is older', 'Grid is 1-dimensional, Flexbox is 2-dimensional', 'Grid is 2-dimensional (Rows AND Columns), Flexbox is 1-dimensional', 'There is no difference'], answer: 'Grid is 2-dimensional (Rows AND Columns), Flexbox is 1-dimensional' },
      { question: 'Which property activates CSS Grid?', options: ['grid: on', 'layout: grid', 'display: grid', 'align: grid'], answer: 'display: grid' },
      { question: 'When should you use CSS Grid?', options: ['To align items in a simple row', 'To create complex page layouts with rows and columns', 'To center text', 'To add background images'], answer: 'To create complex page layouts with rows and columns' }
    ],
    interviewQuestions: [
      { q: 'Should I use CSS Grid or Flexbox?', a: 'They are designed to work together. Use CSS Grid for the overall layout of the page (the skeleton, defining major sections). Use Flexbox inside those sections to align the individual UI elements (like centering an icon next to text).' }
    ],
    summary: [
      'Grid is a 2-dimensional layout system.',
      'It controls both rows and columns simultaneously.',
      'It is activated using display: grid.'
    ],
    references: commonReferences
  },

  'css_grid_container': {
    isStructured: true,
    title: '44. Grid Container',
    difficulty: 'Advanced',
    readingTime: '3 Minutes',
    definition: 'An HTML element becomes a grid container when its display property is set to grid or inline-grid.',
    whyUseIt: 'The container is where you define the overarching rules of the grid: how many columns exist, how many rows exist, and how big they are.',
    syntax: `selector {
    display: grid;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .block-grid {
    display: grid;
    background: coral;
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .inline-grid {
    display: inline-grid; /* Behaves like an inline element */
    background: lightblue;
    padding: 10px;
  }
  
  .item { background: white; padding: 10px; margin: 2px; }
</style>
<body>
  <h3>display: grid</h3>
  <div class="block-grid">
    <div class="item">I take up the full width of the page</div>
  </div>
  
  <h3>display: inline-grid</h3>
  <div class="inline-grid">
    <div class="item">I only take up</div>
  </div>
  <div class="inline-grid">
    <div class="item">as much width as needed</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <h4 style="margin: 0;">display: grid</h4>
  <div style="display: grid; background: coral; padding: 10px; margin-bottom: 10px;">
    <div style="background: white; padding: 5px;">I take up the full width of the page</div>
  </div>
  <h4 style="margin: 0;">display: inline-grid</h4>
  <div style="display: inline-grid; background: lightblue; padding: 10px;">
    <div style="background: white; padding: 5px;">I only take up</div>
  </div>
  <div style="display: inline-grid; background: lightblue; padding: 10px;">
    <div style="background: white; padding: 5px;">as much width as needed</div>
  </div>
</div>`,
    explanation: [
        { code: 'display: grid', desc: 'Creates a block-level grid container (takes up 100% width).' },
        { code: 'display: inline-grid', desc: 'Creates an inline-level grid container (takes up only as much width as its content).' }
    ],
    realWorldExample: 'Just like `display: flex`, setting `display: grid` is the required first step before you can use any of the powerful grid features to build a website layout.',
    commonMistakes: [
      { error: 'Applying grid properties to children.', code: '', suffix: 'Properties like grid-template-columns MUST be placed on the container, not on the individual grid items.' }
    ],
    bestPractices: [
      'Almost always use `display: grid`. `inline-grid` is rarely used in modern layouts.'
    ],
    practiceExercise: {
      task: 'Turn the `<main>` tag into a block-level grid container.',
      expectedOutput: 'main { display: grid; }',
      solution: `main {
    display: grid;
}`
    },
    quiz: [
      { question: 'Which property turns an element into a block-level Grid Container?', options: ['display: flex', 'display: block', 'display: grid', 'display: inline-grid'], answer: 'display: grid' },
      { question: 'What is the difference between grid and inline-grid?', options: ['grid is for rows, inline-grid is for columns', 'inline-grid takes up the full width of the page', 'grid is a block element, inline-grid only takes up as much width as it needs', 'There is no difference'], answer: 'grid is a block element, inline-grid only takes up as much width as it needs' },
      { question: 'Where do you define the number of columns in a grid?', options: ['On the Grid Items', 'On the Grid Container', 'In the HTML tags'], answer: 'On the Grid Container' }
    ],
    interviewQuestions: [
      { q: 'Can a Grid Item also be a Grid Container?', a: 'Yes! This is called nested grids. You can apply `display: grid` to an element that is already a child of another grid, allowing you to create complex sub-layouts.' }
    ],
    summary: [
      'display: grid establishes a new grid formatting context.',
      'It must be applied to the parent element.',
      'All direct children automatically become grid items.'
    ],
    references: commonReferences
  },

  'css_grid_items': {
    isStructured: true,
    title: '45. Grid Items',
    difficulty: 'Advanced',
    readingTime: '4 Minutes',
    definition: 'The direct children of a grid container automatically become grid items.',
    whyUseIt: 'While the container defines the overall grid, the items can be assigned properties to span multiple columns or rows, breaking out of standard 1x1 cells.',
    syntax: `selector {
    grid-column: 1 / 3; /* Start at line 1, end at line 3 */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: navy;
    padding: 10px;
    gap: 10px;
  }
  
  .item { background: white; padding: 20px; text-align: center; }
  
  .item1 {
    grid-column: 1 / 3; /* Spans from column line 1 to column line 3 */
    background: coral;
  }
  
  .item3 {
    grid-row: 2 / 4; /* Spans from row line 2 to row line 4 */
    background: lightgreen;
  }
</style>
<body>
  <div class="grid-container">
    <div class="item item1">1 (Spans 2 Cols)</div>
    <div class="item">2</div>
    <div class="item item3">3 (Spans 2 Rows)</div>  
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'grid-column: 1 / 3', desc: 'Tells the item to start at grid line 1 and stretch until grid line 3 (taking up 2 full columns).' },
        { code: 'Grid Lines', desc: 'CSS Grid relies on numbered lines. In a 3-column grid, there are 4 vertical lines (left edge, line between col 1/2, line between col 2/3, right edge).' }
    ],
    realWorldExample: 'In a photo gallery, most images are small squares (1x1). However, a "featured" image might be given `grid-column: 1 / 3; grid-row: 1 / 3;` to make it take up a massive 2x2 square block, making the gallery look dynamic.',
    commonMistakes: [
      { error: 'Confusing grid lines with columns.', code: 'grid-column: 1 / 2', suffix: 'This only spans 1 column! To span 2 columns, you must go from line 1 to line 3 (grid-column: 1 / 3).' }
    ],
    bestPractices: [
      'Use the `span` keyword (e.g., `grid-column: span 2;`) instead of exact line numbers if you just want the item to take up 2 columns wherever it naturally lands.'
    ],
    practiceExercise: {
      task: 'Make an element with class ".hero" span 3 columns using the "span" keyword.',
      expectedOutput: '.hero { grid-column: span 3; }',
      solution: `.hero {
    grid-column: span 3;
}`
    },
    quiz: [
      { question: 'Which elements become grid items?', options: ['All elements on the page', 'The direct children of a grid container', 'Elements with the class "grid-item"', 'Elements with display: block'], answer: 'The direct children of a grid container' },
      { question: 'If you want an item to stretch across two columns, what do you write?', options: ['grid-width: 2;', 'grid-column: span 2;', 'columns: 2;', 'width: 200%;'], answer: 'grid-column: span 2;' },
      { question: 'In a 3-column grid, how many vertical grid LINES are there?', options: ['2', '3', '4', '6'], answer: '4' }
    ],
    interviewQuestions: [
      { q: 'How does z-index work with CSS Grid Items?', a: 'Unlike standard block elements, CSS Grid items automatically create a stacking context. You can use z-index directly on grid items (without needing `position: relative`) to control which item appears on top if you force them to overlap in the same grid cell.' }
    ],
    summary: [
      'Grid items are placed into grid cells automatically.',
      'You can force them to span multiple cells using grid-column and grid-row.',
      'Grid uses a numbered line system (Line 1 is the starting edge).'
    ],
    references: commonReferences
  },

  'css_grid_template_columns': {
    isStructured: true,
    title: '46. Grid Template Columns',
    difficulty: 'Advanced',
    readingTime: '5 Minutes',
    definition: 'The grid-template-columns property defines the number of columns in your grid layout, and specifies the width of each column.',
    whyUseIt: 'This is the most powerful property in CSS Grid. It allows you to explicitly define the blueprint of your website\'s vertical columns using pixels, percentages, or the magical `fr` unit.',
    syntax: `selector {
    /* 3 columns: 100px wide, 50% wide, and whatever is left */
    grid-template-columns: 100px 50% 1fr; 
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .grid-container {
    display: grid;
    /* 1st col: 100px. 2nd col: 2 parts space. 3rd col: 1 part space. */
    grid-template-columns: 100px 2fr 1fr;
    background: navy;
    gap: 10px;
    padding: 10px;
  }
  
  .item { background: coral; padding: 10px; color: white; text-align: center; }
</style>
<body>
  <div class="grid-container">
    <div class="item">100px</div>
    <div class="item">2fr (Twice as big as 1fr)</div>
    <div class="item">1fr</div>  
    <div class="item">100px</div>
    <div class="item">2fr</div>
    <div class="item">1fr</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="display: grid; grid-template-columns: 100px 2fr 1fr; background: navy; gap: 10px; padding: 10px;">
    <div style="background: coral; padding: 10px; color: white; text-align: center; font-size: 12px;">100px</div>
    <div style="background: coral; padding: 10px; color: white; text-align: center; font-size: 12px;">2fr</div>
    <div style="background: coral; padding: 10px; color: white; text-align: center; font-size: 12px;">1fr</div>  
  </div>
</div>`,
    explanation: [
        { code: 'The "fr" unit', desc: 'Stands for "fractional unit". It automatically calculates the remaining free space in the grid and distributes it.' },
        { code: '2fr 1fr', desc: 'The remaining space is divided into 3 pieces. The first column gets 2 pieces, the second column gets 1 piece.' }
    ],
    realWorldExample: 'A classic website layout: A left sidebar (fixed at 250px) and a main content area that fills the rest of the screen. You can build this effortlessly with: `grid-template-columns: 250px 1fr;`.',
    commonMistakes: [
      { error: 'Using % instead of fr.', code: 'grid-template-columns: 50% 50%;', suffix: 'If you add a gap: 20px, the total width becomes 50% + 50% + 20px, causing a horizontal scrollbar. The fr unit automatically subtracts gaps from the calculation!' }
    ],
    bestPractices: [
      'Use the `repeat()` function to save time. E.g., `grid-template-columns: repeat(4, 1fr);` creates 4 equal columns instantly.'
    ],
    practiceExercise: {
      task: 'Create 3 columns. The first and last columns should be exactly 50px wide. The middle column should take up all the remaining space.',
      expectedOutput: 'grid-template-columns: 50px 1fr 50px;',
      solution: `grid-template-columns: 50px 1fr 50px;`
    },
    quiz: [
      { question: 'What does the "fr" unit stand for?', options: ['Frame Rate', 'Fixed Ratio', 'Fractional Unit', 'Free Range'], answer: 'Fractional Unit' },
      { question: 'Why is the "fr" unit better than percentages in Grid?', options: ['It loads faster', 'It automatically factors in gaps and padding without causing overflow', 'It works on older browsers', 'It is required for mobile devices'], answer: 'It automatically factors in gaps and padding without causing overflow' },
      { question: 'How do you create 3 equal columns using Grid?', options: ['grid-template-columns: 33% 33% 33%;', 'grid-template-columns: auto auto auto;', 'grid-template-columns: repeat(3, 1fr);', 'All of the above will work'], answer: 'All of the above will work' },
      { question: 'If you write "grid-template-columns: 1fr 3fr;", how much of the space does the second column get?', options: ['30%', '50%', '75% (3/4 of the space)', '300px'], answer: '75% (3/4 of the space)' }
    ],
    interviewQuestions: [
      { q: 'Explain the repeat() and minmax() functions in CSS Grid.', a: '`repeat(3, 1fr)` is shorthand for writing `1fr 1fr 1fr`. `minmax(200px, 1fr)` is a powerful function that ensures a column never shrinks below 200px on small screens, but allows it to grow and take up 1fr of space on large screens.' }
    ],
    summary: [
      'grid-template-columns defines the width of vertical columns.',
      'The number of values you write dictates the number of columns.',
      'The "fr" unit dynamically consumes available space.'
    ],
    references: commonReferences
  },

  'css_grid_template_rows': {
    isStructured: true,
    title: '47. Grid Template Rows',
    difficulty: 'Advanced',
    readingTime: '3 Minutes',
    definition: 'The grid-template-rows property defines the height of each row in the grid.',
    whyUseIt: 'While columns are usually explicitly defined, rows are often left to size themselves automatically based on content. However, if you need a fixed header, a fluid body, and a fixed footer, grid-template-rows makes it easy.',
    syntax: `selector {
    /* 3 rows: 100px high, auto-sizing, 50px high */
    grid-template-rows: 100px auto 50px; 
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .grid-container {
    display: grid;
    /* Create a 1-column layout */
    grid-template-columns: 1fr;
    
    /* 1st row: 50px. 2nd row: 150px. */
    grid-template-rows: 50px 150px;
    background: navy;
    gap: 10px;
    padding: 10px;
  }
  
  .item { background: coral; padding: 10px; color: white; text-align: center; }
</style>
<body>
  <div class="grid-container">
    <div class="item">Header (Fixed 50px)</div>
    <div class="item">Main Content (Fixed 150px)</div>
    <!-- The 3rd row is not defined, so it will fall back to 'auto' -->
    <div class="item">Footer (Auto-sizes to content height)</div>  
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="display: grid; grid-template-columns: 1fr; grid-template-rows: 50px 100px; background: navy; gap: 10px; padding: 10px;">
    <div style="background: coral; color: white; text-align: center; display:flex; align-items:center; justify-content:center;">Header (Fixed 50px)</div>
    <div style="background: coral; color: white; text-align: center; display:flex; align-items:center; justify-content:center;">Main Content (Fixed 100px)</div>
    <div style="background: coral; color: white; text-align: center; padding:5px;">Footer (Auto-sizes to content)</div>  
  </div>
</div>`,
    explanation: [
        { code: 'grid-template-rows: 50px 150px', desc: 'Strictly enforces the height of the first two rows.' },
        { code: 'Implicit Rows', desc: 'If you put 5 items in a grid, but only define 2 rows, the browser automatically creates "implicit" rows for the remaining items. By default, they are sized to "auto" (the height of their content).' }
    ],
    realWorldExample: 'A "Holy Grail" full-screen layout. You set the `body` to `height: 100vh`. Then you set `grid-template-rows: 80px 1fr 60px;`. This guarantees an 80px header, a 60px footer, and the main content expands perfectly to fill the middle.',
    commonMistakes: [
      { error: 'Defining rows for dynamic content.', code: 'grid-template-rows: repeat(10, 100px);', suffix: 'If you have a blog with varying text lengths, defining a strict 100px row height will cause text overflow. Let rows size themselves naturally with "auto".' }
    ],
    bestPractices: [
      'Generally, only use `grid-template-rows` for the macro-skeleton of a full-page layout. For most grids (like a grid of products), leave it blank and let the items dictate their own height.'
    ],
    practiceExercise: {
      task: 'Define 2 rows for a grid container. The first row should be 200px tall, and the second row should take up the rest of the available space.',
      expectedOutput: 'grid-template-rows: 200px 1fr;',
      solution: `grid-template-rows: 200px 1fr;`
    },
    quiz: [
      { question: 'Which property sets the height of rows in CSS Grid?', options: ['grid-rows', 'grid-template-rows', 'row-height', 'grid-height'], answer: 'grid-template-rows' },
      { question: 'What happens if you have 4 grid items, but only define 2 rows in grid-template-rows?', options: ['An error occurs', 'Items 3 and 4 disappear', 'Items 3 and 4 are placed in "implicit" rows that are auto-sized', 'Items 3 and 4 are crammed into the 2nd row'], answer: 'Items 3 and 4 are placed in "implicit" rows that are auto-sized' },
      { question: 'Which value automatically adjusts the row height to fit the text inside it?', options: ['1fr', 'fit-content', 'auto', 'stretch'], answer: 'auto' }
    ],
    interviewQuestions: [
      { q: 'How would you build a sticky footer layout using CSS Grid?', a: 'I would set the body to `min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto;`. This makes the header and footer take up exactly as much space as they need (auto), and the main content expands (1fr) to push the footer to the bottom of the screen.' }
    ],
    summary: [
      'grid-template-rows defines the height of horizontal rows.',
      'It is incredibly useful for full-page application layouts.',
      'Undefined rows become "implicit" and size automatically.'
    ],
    references: commonReferences
  },

  'css_grid_gap': {
    isStructured: true,
    title: '48. Grid Gap',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The gap property defines the size of the gap between the rows and columns in a Grid layout.',
    whyUseIt: 'It creates uniform spacing between your grid cells without the headache of applying margins to individual items and calculating edge cases.',
    syntax: `selector {
    gap: 20px; /* Applies to both rows and columns */
    row-gap: 10px; /* Only applies between rows */
    column-gap: 30px; /* Only applies between columns */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    background: navy;
    padding: 10px;
    
    /* 50px between rows, 10px between columns */
    row-gap: 50px;
    column-gap: 10px;
  }
  
  .item { background: coral; padding: 20px; color: white; text-align: center; }
</style>
<body>
  <div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; background: navy; padding: 10px; row-gap: 20px; column-gap: 5px;">
    <div style="background: coral; padding: 10px; color: white; text-align: center;">1</div>
    <div style="background: coral; padding: 10px; color: white; text-align: center;">2</div>
    <div style="background: coral; padding: 10px; color: white; text-align: center;">3</div>
    <div style="background: coral; padding: 10px; color: white; text-align: center;">4</div>
    <div style="background: coral; padding: 10px; color: white; text-align: center;">5</div>
    <div style="background: coral; padding: 10px; color: white; text-align: center;">6</div>
  </div>
</div>`,
    explanation: [
        { code: 'gap', desc: 'Is the modern shorthand for grid-gap. It applies spacing strictly between the grid tracks (not on the outer edges).' }
    ],
    realWorldExample: 'A photo gallery with 20 images. Setting `gap: 15px;` creates a perfect 15px gutter between every single photo, ensuring none of them touch each other.',
    commonMistakes: [
      { error: 'Adding margins to grid items.', code: '.item { margin: 10px; }', suffix: 'Do not use margins for grid spacing. It ruins the fr calculations. ALWAYS use the gap property on the container instead.' }
    ],
    bestPractices: [
      'You can use the shorthand `gap: 50px 10px;` (Row gap 50px, Column gap 10px).'
    ],
    practiceExercise: {
      task: 'Set a uniform gap of 2rem between all rows and columns in a grid.',
      expectedOutput: 'gap: 2rem;',
      solution: `gap: 2rem;`
    },
    quiz: [
      { question: 'Which property creates space between grid cells?', options: ['margin', 'padding', 'gap', 'cell-spacing'], answer: 'gap' },
      { question: 'If you use gap: 20px 40px;, what does it mean?', options: ['20px on the outside, 40px on the inside', '20px row gap, 40px column gap', '20px column gap, 40px row gap', '20px top gap, 40px bottom gap'], answer: '20px row gap, 40px column gap' },
      { question: 'Is gap applied to the Grid Container or the Grid Items?', options: ['Grid Container', 'Grid Items'], answer: 'Grid Container' }
    ],
    interviewQuestions: [
      { q: 'What happened to the grid-gap property?', a: 'Originally, the property was named grid-gap. However, because Flexbox adopted the feature, the CSS working group renamed it to simply `gap` so it could be shared across both layout systems.' }
    ],
    summary: [
      'gap controls the gutters between rows and columns.',
      'It must be applied to the parent container.',
      'Shorthand order is: row-gap column-gap.'
    ],
    references: commonReferences
  },

  'css_grid_area': {
    isStructured: true,
    title: '49. Grid Area',
    difficulty: 'Advanced',
    readingTime: '6 Minutes',
    definition: 'The grid-area property is a shorthand for grid-row-start, grid-column-start, grid-row-end, and grid-column-end. It can also be used with grid-template-areas to assign names to grid items.',
    whyUseIt: 'Grid Areas are the most visual and intuitive way to build a complex layout. You can literally "draw" your layout using strings of text in CSS.',
    syntax: `/* Method 1: Shorthand */
.item { grid-area: 1 / 2 / 3 / 4; /* row-start / col-start / row-end / col-end */ }

/* Method 2: Named Areas (The cool way!) */
.header { grid-area: head; }
.container {
    grid-template-areas: 
      "head head head"
      "side main main"
      "foot foot foot";
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .item1 { grid-area: header; background: coral; }
  .item2 { grid-area: menu; background: lightblue; }
  .item3 { grid-area: main; background: lightgreen; height: 100px; }
  .item4 { grid-area: footer; background: gray; }

  .grid-container {
    display: grid;
    /* Draw the layout visually! */
    grid-template-areas:
      'header header header header'
      'menu main main main'
      'menu footer footer footer';
    gap: 10px;
    padding: 10px;
    background: navy;
  }
  
  .grid-container > div { padding: 20px; text-align: center; color: white; font-weight: bold; }
</style>
<body>
  <div class="grid-container">
    <div class="item1">Header</div>
    <div class="item2">Menu</div>
    <div class="item3">Main Content</div>  
    <div class="item4">Footer</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="display: grid; grid-template-areas: 'header header header' 'menu main main' 'menu footer footer'; gap: 5px; background: navy; padding: 5px;">
    <div style="grid-area: header; background: coral; padding: 10px; color: white; text-align: center; font-weight: bold;">Header</div>
    <div style="grid-area: menu; background: lightblue; padding: 10px; color: white; text-align: center; font-weight: bold; height: 100px;">Menu</div>
    <div style="grid-area: main; background: lightgreen; padding: 10px; color: white; text-align: center; font-weight: bold;">Main Content</div>  
    <div style="grid-area: footer; background: gray; padding: 10px; color: white; text-align: center; font-weight: bold;">Footer</div>
  </div>
</div>`,
    explanation: [
        { code: 'grid-area: name', desc: 'Assigns an arbitrary name (like "header") to a child item.' },
        { code: 'grid-template-areas', desc: 'Used on the parent. You write out strings mapping the names to a physical grid. If you write "header" four times in a row, the header element stretches across 4 columns!' }
    ],
    realWorldExample: 'This is the absolute best way to build application dashboards. When shifting to mobile devices, you use a media query to completely redraw the grid (e.g., `grid-template-areas: "header" "main" "menu" "footer";`) without touching the HTML structure.',
    commonMistakes: [
      { error: 'Non-rectangular areas.', code: '', suffix: 'A grid area MUST form a perfect rectangle. You cannot create "L" shapes using grid-template-areas. The browser will ignore the rule entirely.' }
    ],
    bestPractices: [
      'Use a period (`.`) in the grid-template-areas string to leave a grid cell completely empty.'
    ],
    practiceExercise: {
      task: 'Assign the class ".ad-banner" to a grid area named "ad".',
      expectedOutput: '.ad-banner { grid-area: ad; }',
      solution: `.ad-banner {
    grid-area: ad;
}`
    },
    quiz: [
      { question: 'What does grid-template-areas allow you to do?', options: ['Visually draw the layout of the grid using strings', 'Set the width of columns', 'Color the background of specific cells', 'Add animations to grid items'], answer: 'Visually draw the layout of the grid using strings' },
      { question: 'How do you leave an empty cell when using grid-template-areas?', options: ['Use the word "empty"', 'Use a period (.)', 'Leave a blank space', 'Use the number 0'], answer: 'Use a period (.)' },
      { question: 'Can a grid-area form an "L" shape?', options: ['Yes', 'No, they must be perfect rectangles'], answer: 'No, they must be perfect rectangles' }
    ],
    interviewQuestions: [
      { q: 'Why is grid-template-areas considered better than using grid-column and grid-row numbers for main layouts?', a: 'Because it drastically improves CSS readability. Instead of seeing `grid-column: 1 / 4`, you see exactly how the page is structured visually in the CSS file. Furthermore, rearranging the entire layout for mobile requires changing just one property block, rather than updating line numbers on every individual child element.' }
    ],
    summary: [
      'grid-area assigns a name to a child element.',
      'grid-template-areas uses those names to draw the layout.',
      'Areas must be rectangular.'
    ],
    references: commonReferences
  },

  'css_grid_alignment': {
    isStructured: true,
    title: '50. Grid Alignment',
    difficulty: 'Intermediate',
    readingTime: '4 Minutes',
    definition: 'CSS Grid provides properties to align the entire grid inside its container, and to align the individual items inside their grid cells.',
    whyUseIt: 'Grid cells act like mini-containers. Sometimes you want the text inside a grid cell to be pushed to the top-right corner of that cell. Alignment properties allow total control over this.',
    syntax: `selector {
    justify-content: center; /* Aligns the WHOLE grid horizontally */
    align-content: center;   /* Aligns the WHOLE grid vertically */
    
    justify-items: center;   /* Aligns the items inside their cells horizontally */
    align-items: center;     /* Aligns the items inside their cells vertically */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    height: 300px;
    background: navy;
    gap: 5px;
    
    /* Aligns the entire grid block inside the navy container */
    justify-content: center;
    align-content: center;
  }
  
  .item {
    background: coral;
    border: 1px solid white;
    
    /* We are NOT stretching to fill the cell. 
       We are staying small and centering ourselves INSIDE the cell! */
    justify-self: center; /* Horizontal center inside cell */
    align-self: center;   /* Vertical center inside cell */
    padding: 10px;
    color: white;
  }
</style>
<body>
  <div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="display: grid; grid-template-columns: 60px 60px 60px; height: 150px; background: navy; gap: 5px; justify-content: center; align-content: center;">
    <div style="background: coral; border: 1px solid white; justify-self: center; align-self: center; padding: 5px; color: white;">1</div>
    <div style="background: coral; border: 1px solid white; justify-self: center; align-self: center; padding: 5px; color: white;">2</div>
    <div style="background: coral; border: 1px solid white; justify-self: center; align-self: center; padding: 5px; color: white;">3</div>
    <div style="background: coral; border: 1px solid white; justify-self: center; align-self: center; padding: 5px; color: white;">4</div>
    <div style="background: coral; border: 1px solid white; justify-self: center; align-self: center; padding: 5px; color: white;">5</div>
    <div style="background: coral; border: 1px solid white; justify-self: center; align-self: center; padding: 5px; color: white;">6</div>
  </div>
</div>`,
    explanation: [
        { code: 'justify-*', desc: 'Always deals with horizontal alignment.' },
        { code: 'align-*', desc: 'Always deals with vertical alignment.' },
        { code: '*-content', desc: 'Aligns the entire grid system.' },
        { code: '*-items', desc: 'Aligns all the items inside their respective cells.' },
        { code: '*-self', desc: 'Applied to a SINGLE child item to override the container\'s *-items rule.' }
    ],
    realWorldExample: 'If a Grid cell is 300x300px, but the image inside it is only 100x100px, you use `justify-items: center; align-items: center;` to place the image perfectly in the middle of the large cell.',
    commonMistakes: [
      { error: 'Using justify-content instead of justify-items.', code: '', suffix: 'justify-content moves the columns themselves. justify-items moves the content inside the columns. It is easy to mix these up.' }
    ],
    bestPractices: [
      'Use the `place-items: center;` shorthand property to perfectly center an item horizontally and vertically inside its grid cell.'
    ],
    practiceExercise: {
      task: 'Use the shorthand property to center all items horizontally and vertically inside their grid cells.',
      expectedOutput: 'place-items: center;',
      solution: `place-items: center;`
    },
    quiz: [
      { question: 'Which property aligns the items vertically inside their grid cells?', options: ['justify-items', 'align-items', 'align-content', 'justify-content'], answer: 'align-items' },
      { question: 'Which property aligns the ENTIRE grid horizontally inside the container?', options: ['justify-items', 'align-items', 'align-content', 'justify-content'], answer: 'justify-content' },
      { question: 'What is the default value for align-items and justify-items in Grid?', options: ['center', 'start', 'stretch', 'end'], answer: 'stretch' },
      { question: 'What shorthand property combines align-items and justify-items?', options: ['place-items', 'align-justify', 'grid-center', 'center-items'], answer: 'place-items' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between align-items and align-self in CSS Grid?', a: '`align-items` is applied to the parent Grid Container and sets the default vertical alignment for ALL grid items. `align-self` is applied to an individual Grid Item and overrides the default alignment for just that specific item.' }
    ],
    summary: [
      'justify is horizontal. align is vertical.',
      'content targets the whole grid structure.',
      'items targets the content inside the cells.',
      'place-items: center; is the ultimate centering shorthand.'
    ],
    references: commonReferences
  }
};
