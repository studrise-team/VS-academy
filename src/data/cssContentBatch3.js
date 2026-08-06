const commonReferences = [
  { label: 'W3Schools CSS', url: 'https://www.w3schools.com/css/' },
  { label: 'MDN CSS Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }
];

export const cssContentBatch3 = {
  'css_display_property': {
    isStructured: true,
    title: '25. Display Property',
    difficulty: 'Intermediate',
    readingTime: '6 Minutes',
    definition: 'The display property specifies the display behavior (the type of rendering box) of an element.',
    whyUseIt: 'The display property is the most important property for controlling layout. It determines how elements flow on the page, whether they stack on top of each other, sit side-by-side, or disappear completely.',
    syntax: `selector {
    display: block; /* block | inline | inline-block | none */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .block-element {
    display: block;
    background: coral;
    padding: 10px;
  }
  
  .inline-element {
    display: inline;
    background: lightblue;
    /* Width and height are ignored on inline elements! */
    width: 300px; 
    padding: 10px;
  }
  
  .inline-block-element {
    display: inline-block;
    background: lightgreen;
    width: 150px; /* Width and height work! */
    padding: 10px;
  }
  
  .hidden {
    display: none;
  }
</style>
<body>
  <div class="block-element">I am a block. I take the full width and start on a new line.</div>
  <div class="block-element">I am another block below it.</div>
  
  <br>
  
  <span class="inline-element">I am inline.</span>
  <span class="inline-element">I sit next to other inline elements. Width is ignored.</span>
  
  <br><br>
  
  <div class="inline-block-element">Inline-block 1</div>
  <div class="inline-block-element">Inline-block 2</div>
  
  <div class="hidden">You cannot see me! I am removed from the document flow.</div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="display: block; background: coral; padding: 5px; margin-bottom: 5px;">I am a block. I take the full width and start on a new line.</div>
  <div style="display: block; background: coral; padding: 5px; margin-bottom: 5px;">I am another block below it.</div>
  <br>
  <span style="display: inline; background: lightblue; padding: 5px;">I am inline.</span>
  <span style="display: inline; background: lightblue; padding: 5px;">I sit next to other inline elements. Width is ignored.</span>
  <br><br>
  <div style="display: inline-block; background: lightgreen; width: 150px; padding: 5px;">Inline-block 1</div>
  <div style="display: inline-block; background: lightgreen; width: 150px; padding: 5px;">Inline-block 2</div>
</div>`,
    explanation: [
        { code: 'block', desc: 'Starts on a new line and takes up the full width available (e.g., <div>, <p>).' },
        { code: 'inline', desc: 'Does not start on a new line and only takes up as much width as necessary. Ignores width/height properties (e.g., <span>, <a>).' },
        { code: 'inline-block', desc: 'Sits next to other elements like inline, but respects width and height properties like a block.' },
        { code: 'none', desc: 'Removes the element from the layout entirely. The space it occupied collapses.' }
    ],
    realWorldExample: 'Navigation menus traditionally use `display: inline-block` on list items (<li>) so they sit side-by-side horizontally, while still allowing the developer to set explicit padding and heights for the clickable buttons.',
    commonMistakes: [
      { error: 'Trying to set width/height on an inline element.', code: 'span { width: 100px; }', suffix: 'This will not work. Change it to inline-block first.' },
      { error: 'Confusing display: none with visibility: hidden.', code: '', suffix: 'display: none removes the element from the layout completely. visibility: hidden hides the element but leaves a blank hole where the element used to be.' }
    ],
    bestPractices: [
      'Use inline-block for elements that need to sit side-by-side but also require specific dimensions.'
    ],
    practiceExercise: {
      task: 'Change a <span> element so that it behaves like a block element, taking up the full width of the screen.',
      expectedOutput: 'span { display: block; }',
      solution: `span {
    display: block;
}`
    },
    quiz: [
      { question: 'What is the default display value of a <div>?', options: ['inline', 'block', 'inline-block', 'none'], answer: 'block' },
      { question: 'What is the default display value of a <span>?', options: ['inline', 'block', 'inline-block', 'none'], answer: 'inline' },
      { question: 'Which display value allows elements to sit side-by-side AND respect width/height?', options: ['inline', 'block', 'inline-block', 'flex'], answer: 'inline-block' },
      { question: 'Does setting "display: none" free up the space the element occupied?', options: ['Yes, the space collapses', 'No, the space remains empty', 'Only on mobile'], answer: 'Yes, the space collapses' },
      { question: 'Why does setting width: 100px on an <a> tag usually fail?', options: ['<a> tags are broken', 'Because <a> is a block element', 'Because <a> is an inline element and ignores width', 'Because you need to set height first'], answer: 'Because <a> is an inline element and ignores width' }
    ],
    interviewQuestions: [
      { q: 'What is the exact difference between display: none and visibility: hidden?', a: 'display: none removes the element from the DOM rendering tree completely, meaning it takes up zero space and the layout shifts to fill the gap. visibility: hidden makes the element invisible, but it still takes up the exact same physical space in the layout, leaving a blank hole.' }
    ],
    summary: [
      'block takes full width and starts on a new line.',
      'inline takes only necessary width and ignores explicit sizes.',
      'inline-block mixes the two (side-by-side but accepts sizes).',
      'none removes the element completely.'
    ],
    references: commonReferences
  },

  'css_position_property': {
    isStructured: true,
    title: '26. Position Property',
    difficulty: 'Advanced',
    readingTime: '7 Minutes',
    definition: 'The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).',
    whyUseIt: 'Positioning allows you to break elements out of the normal document flow. You can pin a navbar to the top of the screen, place a close button exactly in the top-right corner of a modal, or overlap images.',
    syntax: `selector {
    position: absolute;
    top: 10px;
    right: 20px;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .relative-box {
    position: relative;
    top: 20px;
    left: 20px;
    background: coral;
    padding: 10px;
    border: 1px solid black;
  }
  
  .container {
    position: relative; /* CRITICAL for absolute children */
    width: 300px;
    height: 150px;
    background: lightgray;
    margin-top: 50px;
  }
  
  .absolute-box {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: lightblue;
    padding: 10px;
  }
</style>
<body>
  <div>I am normal static text.</div>
  <div class="relative-box">I am relative! I moved 20px down and right from where I SHOULD be.</div>
  
  <div class="container">
    I am a relative container.
    <div class="absolute-box">I am absolute! Pinned to the bottom-right of my container.</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="background: white; padding: 5px;">I am normal static text.</div>
  <div style="position: relative; top: 10px; left: 10px; background: coral; padding: 5px; border: 1px solid black;">I am relative! I moved down and right from where I SHOULD be.</div>
  <div style="position: relative; width: 100%; height: 100px; background: lightgray; margin-top: 20px; padding: 5px;">
    I am a relative container.
    <div style="position: absolute; bottom: 5px; right: 5px; background: lightblue; padding: 5px;">Absolute! Pinned bottom-right.</div>
  </div>
</div>`,
    explanation: [
        { code: 'static', desc: 'The default. Element sits in normal document flow. Top/left/right/bottom do nothing.' },
        { code: 'relative', desc: 'Element sits in normal flow, but you can move it relative to its original position without affecting other elements.' },
        { code: 'absolute', desc: 'Removed from flow. Positions itself relative to its closest RELATIVE parent.' },
        { code: 'fixed', desc: 'Removed from flow. Positions itself relative to the BROWSER WINDOW. Does not scroll.' },
        { code: 'sticky', desc: 'Acts like relative until you scroll past it, then acts like fixed.' }
    ],
    realWorldExample: 'A "Chat Support" button in the bottom-right corner of a website uses `position: fixed; bottom: 20px; right: 20px;`. It never moves, even if you scroll the page.',
    commonMistakes: [
      { error: 'Absolute elements flying off the screen.', code: '', suffix: 'An absolute element looks for the closest parent with position: relative. If it does not find one, it positions itself relative to the entire <body> tag, usually breaking the layout.' }
    ],
    bestPractices: [
      'Always set `position: relative` on the parent container if you plan to use `position: absolute` on a child element inside it.'
    ],
    practiceExercise: {
      task: 'Write CSS to create a fixed navigation bar that stays attached to the top of the screen (top: 0, left: 0) and spans the full width.',
      expectedOutput: '.navbar { position: fixed; top: 0; left: 0; width: 100%; }',
      solution: `.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}`
    },
    quiz: [
      { question: 'What is the default position value for all HTML elements?', options: ['relative', 'absolute', 'fixed', 'static'], answer: 'static' },
      { question: 'Which positioning method removes an element from the normal document flow and positions it relative to the browser window (viewport)?', options: ['relative', 'absolute', 'fixed', 'sticky'], answer: 'fixed' },
      { question: 'An absolute element positions itself relative to its closest ancestor that has a position of:', options: ['static', 'anything other than static (usually relative)', 'fixed', 'absolute'], answer: 'anything other than static (usually relative)' },
      { question: 'Which positioning method acts like relative until the user scrolls to it, and then it "sticks" to the screen?', options: ['fixed', 'absolute', 'sticky', 'static'], answer: 'sticky' },
      { question: 'Do top/right/bottom/left properties work on position: static?', options: ['Yes', 'No'], answer: 'No' }
    ],
    interviewQuestions: [
      { q: 'What happens to a position: absolute element if none of its parents have a position set?', a: 'It will look all the way up the DOM tree and eventually position itself relative to the initial containing block (the <html> or <body> element), meaning it will be positioned relative to the overall page document rather than its immediate container.' }
    ],
    summary: [
      'static is the default, normal flow.',
      'relative moves an element relative to itself.',
      'absolute removes the element and places it relative to its parent.',
      'fixed attaches the element to the screen.',
      'sticky "sticks" when you scroll past it.'
    ],
    references: commonReferences
  },

  'css_float': {
    isStructured: true,
    title: '27. Float',
    difficulty: 'Intermediate',
    readingTime: '4 Minutes',
    definition: 'The float property specifies how an element should float alongside normal text.',
    whyUseIt: 'Originally designed to allow text to wrap around images (like in a magazine). In the past, it was heavily hacked to build entire website layouts, but modern CSS uses Flexbox/Grid for layout instead.',
    syntax: `selector {
    float: left; /* left | right | none */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .magazine-img {
    float: left;
    margin-right: 15px;
    margin-bottom: 5px;
    border: 2px solid black;
  }
</style>
<body>
  <img src="https://picsum.photos/100" class="magazine-img">
  <p>This is a paragraph of text. Because the image is floated to the left, this text will naturally wrap around the right side of the image. This effect is very similar to how images are placed inside articles in newspapers and magazines. The float property takes the image out of the normal vertical flow and pushes it to the edge of its container.</p>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <img src="https://picsum.photos/100" style="float: left; margin-right: 15px; margin-bottom: 5px; border: 2px solid black; width: 80px; height: 80px;">
  <p style="margin: 0;">This is a paragraph of text. Because the image is floated to the left, this text will naturally wrap around the right side of the image. This effect is very similar to how images are placed inside articles in newspapers and magazines. The float property takes the image out of the normal vertical flow and pushes it to the edge of its container.</p>
</div>`,
    explanation: [
        { code: 'float: left', desc: 'Pushes the element to the left edge of the container, allowing inline elements (like text) to wrap around its right side.' }
    ],
    realWorldExample: 'Floating is still used today in blog posts or news articles where an author photo or an illustration sits on the left side of the screen, and the article text neatly wraps around it.',
    commonMistakes: [
      { error: 'Using floats for entire website layouts.', code: '.sidebar { float: left; } .main { float: right; }', suffix: 'This is an outdated practice from 2010. Layouts should now be built using CSS Flexbox or CSS Grid.' },
      { error: 'Parent collapsing.', code: '', suffix: 'If a parent div contains ONLY floated elements, the parent\'s height will collapse to 0. This requires a "clearfix" hack (covered in the next lesson).' }
    ],
    bestPractices: [
      'Only use float for its intended purpose: wrapping text around images.',
      'Use Flexbox or Grid for creating columns and sidebars.'
    ],
    practiceExercise: {
      task: 'Float an image with the class ".avatar" to the right side of the page.',
      expectedOutput: '.avatar { float: right; }',
      solution: `.avatar {
    float: right;
}`
    },
    quiz: [
      { question: 'What was the original intended purpose of the float property?', options: ['To create multi-column website layouts', 'To allow text to wrap around images', 'To center elements vertically', 'To make elements transparent'], answer: 'To allow text to wrap around images' },
      { question: 'Which of the following is NOT a valid value for float?', options: ['left', 'right', 'center', 'none'], answer: 'center' },
      { question: 'Should you use floats to build a 3-column website layout in modern web design?', options: ['Yes, it is the standard', 'No, use Flexbox or Grid instead', 'Only for mobile devices', 'Yes, but only with JavaScript'], answer: 'No, use Flexbox or Grid instead' }
    ],
    interviewQuestions: [
      { q: 'Why did developers stop using float for website layouts?', a: 'Floats were hacky for layouts. They removed elements from the normal flow, causing parent containers to collapse (requiring clearfix hacks). They also lacked vertical centering and equal-height column capabilities, problems that Flexbox and Grid solved elegantly.' }
    ],
    summary: [
      'float pushes an element to the left or right, allowing text to wrap around it.',
      'It should only be used for text-wrapping images.',
      'Do not use float for page layouts anymore.'
    ],
    references: commonReferences
  },

  'css_clear': {
    isStructured: true,
    title: '28. Clear & Clearfix',
    difficulty: 'Intermediate',
    readingTime: '4 Minutes',
    definition: 'The clear property specifies what elements can float beside the cleared element and on which side. The "clearfix" is a hack to fix collapsed parents.',
    whyUseIt: 'When you float an element, subsequent elements wrap around it. If you want an element to STOP wrapping and drop below the float, you use `clear`.',
    syntax: `selector {
    clear: both; /* left | right | both | none */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .box-float {
    float: left;
    width: 100px;
    height: 100px;
    background: coral;
    margin-right: 10px;
  }
  
  .cleared-text {
    clear: both; /* Forces this to drop BELOW the float */
    color: red;
    font-weight: bold;
    margin-top: 10px;
  }
  
  /* The Modern Clearfix Hack */
  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }
</style>
<body>
  <div class="clearfix" style="border: 2px solid black;">
    <div class="box-float">Floated Box</div>
    <div class="box-float">Floated Box</div>
    <!-- Without clearfix on the parent, the black border would collapse to height 0! -->
  </div>
  <p class="cleared-text">I am cleared, so I do not wrap next to the boxes!</p>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="border: 2px solid black; overflow: auto; padding: 5px;">
    <div style="float: left; width: 80px; height: 40px; background: coral; margin-right: 10px; font-size: 12px;">Floated Box</div>
    <div style="float: left; width: 80px; height: 40px; background: coral; margin-right: 10px; font-size: 12px;">Floated Box</div>
  </div>
  <p style="clear: both; color: red; font-weight: bold; padding-top: 10px;">I am cleared, so I do not wrap next to the boxes!</p>
</div>`,
    explanation: [
        { code: 'clear: both', desc: 'Ensures the element is pushed below any floated elements above it (left or right).' },
        { code: 'Clearfix Hack', desc: 'When a parent div contains ONLY floated children, the parent thinks it is empty and its height becomes 0. The ::after clearfix injects a hidden, cleared element to force the parent to stretch around the floats.' }
    ],
    realWorldExample: 'If a news article has a floated image, but the footer of the page starts immediately after, the footer might accidentally wrap up next to the image. Applying `clear: both` to the footer forces it to stay at the absolute bottom.',
    commonMistakes: [
      { error: 'Forgetting the clearfix.', code: '', suffix: 'If your background color or border on a container disappears when you float its children, you forgot the clearfix.' }
    ],
    bestPractices: [
      'Instead of the complex clearfix, a modern alternative is setting `overflow: auto;` or `overflow: hidden;` on the parent container to fix collapsing.'
    ],
    practiceExercise: {
      task: 'Set the footer element so that it is forced below any floated elements on the page.',
      expectedOutput: 'footer { clear: both; }',
      solution: `footer {
    clear: both;
}`
    },
    quiz: [
      { question: 'Which property stops an element from wrapping around a floated element?', options: ['stop', 'wrap', 'clear', 'float-reset'], answer: 'clear' },
      { question: 'What is the most common value used for clear?', options: ['left', 'right', 'both', 'all'], answer: 'both' },
      { question: 'What happens to a parent container if all of its children are floated?', options: ['It becomes a float itself', 'Its height collapses to 0', 'It expands to fill the screen', 'It centers the children'], answer: 'Its height collapses to 0' },
      { question: 'What is the "clearfix" used for?', options: ['To clear the browser cache', 'To force a parent to wrap around its floated children', 'To make elements transparent', 'To delete HTML elements'], answer: 'To force a parent to wrap around its floated children' }
    ],
    interviewQuestions: [
      { q: 'What is the "clearfix" hack and how do you implement it?', a: 'Clearfix is a CSS hack used to fix the zero-height collapse issue of a container whose children are all floated. It is implemented using the ::after pseudo-element to inject a hidden block element with clear: both at the end of the container.' }
    ],
    summary: [
      'clear: both forces an element below floated elements.',
      'Floated children cause parent containers to collapse to zero height.',
      'The Clearfix hack (or overflow: auto) fixes the collapsed parent issue.'
    ],
    references: commonReferences
  },

  'css_overflow': {
    isStructured: true,
    title: '29. Overflow',
    difficulty: 'Beginner',
    readingTime: '3 Minutes',
    definition: 'The overflow property specifies what should happen if content is too large to fit inside an element\'s specified dimensions.',
    whyUseIt: 'If you have a fixed-size box (e.g., height: 200px) and the text inside it takes up 400px of space, the text will spill out. Overflow allows you to hide the excess text or add scrollbars.',
    syntax: `selector {
    overflow: auto; /* visible | hidden | scroll | auto */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .box {
    width: 200px;
    height: 100px;
    border: 2px solid black;
    margin-bottom: 20px;
  }
  
  .overflow-hidden {
    overflow: hidden; /* Clips the text */
  }
  
  .overflow-auto {
    overflow: auto; /* Adds a scrollbar ONLY if needed */
  }
</style>
<body>
  <div class="box overflow-hidden">
    This text is way too long to fit inside a 100px tall box. Because we set overflow to hidden, the excess text is chopped off and completely invisible. You cannot scroll to see it.
  </div>
  
  <div class="box overflow-auto">
    This text is also too long. But because we set overflow to auto, the browser automatically adds a vertical scrollbar to this specific box, allowing the user to scroll and read the rest of the content!
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="width: 200px; height: 60px; border: 2px solid black; margin-bottom: 10px; overflow: hidden; padding: 5px; font-size: 12px;">This text is way too long to fit. Because we set overflow to hidden, the excess text is chopped off and completely invisible. You cannot scroll to see it.</div>
  <div style="width: 200px; height: 60px; border: 2px solid black; margin-bottom: 10px; overflow: auto; padding: 5px; font-size: 12px;">This text is also too long. But because we set overflow to auto, the browser automatically adds a vertical scrollbar to this specific box, allowing the user to scroll and read the rest of the content!</div>
</div>`,
    explanation: [
        { code: 'visible', desc: 'The default. The text spills outside the box.' },
        { code: 'hidden', desc: 'The text is clipped (chopped off) at the border. Invisible.' },
        { code: 'scroll', desc: 'Always adds a scrollbar, even if the text fits perfectly.' },
        { code: 'auto', desc: 'The best option. Only adds a scrollbar if the text overflows.' }
    ],
    realWorldExample: 'A "Terms and Conditions" box on a registration form is usually a fixed 200px tall box with `overflow-y: auto`. This keeps the massive legal document from stretching the page infinitely, keeping it confined to a scrollable box.',
    commonMistakes: [
      { error: 'Using overflow: scroll instead of auto.', code: 'overflow: scroll;', suffix: 'This forces an ugly, disabled scrollbar to appear on Windows machines even when the text is short.' }
    ],
    bestPractices: [
      'Use `overflow-x` to handle horizontal scrolling (great for data tables on mobile).',
      'Use `overflow: hidden` on a container with `border-radius` to clip square child images to the rounded corners.'
    ],
    practiceExercise: {
      task: 'Set a class ".scroll-box" to add a scrollbar on the Y-axis (vertical) only if the content overflows.',
      expectedOutput: '.scroll-box { overflow-y: auto; }',
      solution: `.scroll-box {
    overflow-y: auto;
}`
    },
    quiz: [
      { question: 'What is the default value of the overflow property?', options: ['hidden', 'scroll', 'auto', 'visible'], answer: 'visible' },
      { question: 'Which overflow value clips the extra content and makes it invisible?', options: ['auto', 'hidden', 'scroll', 'clip'], answer: 'hidden' },
      { question: 'Which overflow value is best for adding scrollbars ONLY when necessary?', options: ['auto', 'scroll', 'hidden', 'visible'], answer: 'auto' },
      { question: 'If you want to prevent a wide HTML table from breaking a mobile layout, which property should you apply to its wrapper div?', options: ['overflow-y: hidden;', 'overflow-x: auto;', 'overflow: hidden;', 'width: 100%;'], answer: 'overflow-x: auto;' }
    ],
    interviewQuestions: [
      { q: 'How can overflow: hidden be used as a design tool rather than just text control?', a: 'It is commonly used to clip child elements to the bounds of the parent. For example, if a parent div has border-radius: 10px, and a square image is placed inside it, the image corners will stick out. Applying overflow: hidden to the parent clips the image to perfectly match the rounded corners.' }
    ],
    summary: [
      'overflow handles content that is bigger than its container.',
      'hidden chops off excess content.',
      'auto creates a scrollable box if needed.'
    ],
    references: commonReferences
  },

  'css_z_index': {
    isStructured: true,
    title: '30. Z-index',
    difficulty: 'Intermediate',
    readingTime: '4 Minutes',
    definition: 'The z-index property specifies the stack order of an element (which element should be in front of, or behind, the others).',
    whyUseIt: 'When elements are positioned (relative, absolute, fixed, sticky), they can overlap. Z-index dictates the 3D depth, ensuring a dropdown menu appears ON TOP of the rest of the page.',
    syntax: `selector {
    z-index: 99; /* Higher numbers are in front */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .box1 {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100px;
    height: 100px;
    background: red;
    z-index: 1; /* Lowest */
  }
  
  .box2 {
    position: absolute;
    top: 40px;
    left: 40px;
    width: 100px;
    height: 100px;
    background: green;
    z-index: 3; /* Highest - in front of all */
  }
  
  .box3 {
    position: absolute;
    top: 70px;
    left: 70px;
    width: 100px;
    height: 100px;
    background: blue;
    z-index: 2; /* Middle */
  }
</style>
<body>
  <div style="position: relative; height: 200px;">
    <div class="box1">Z: 1 (Back)</div>
    <div class="box2">Z: 3 (Front)</div>
    <div class="box3">Z: 2 (Middle)</div>
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div style="position: relative; height: 180px;">
  <div style="position: absolute; top: 10px; left: 10px; width: 100px; height: 100px; background: red; z-index: 1; color: white; padding: 5px;">Z: 1 (Back)</div>
  <div style="position: absolute; top: 30px; left: 30px; width: 100px; height: 100px; background: green; z-index: 3; color: white; padding: 5px; border: 2px solid white;">Z: 3 (Front)</div>
  <div style="position: absolute; top: 50px; left: 50px; width: 100px; height: 100px; background: blue; z-index: 2; color: white; padding: 5px;">Z: 2 (Middle)</div>
</div>`,
    explanation: [
        { code: 'z-index: 3', desc: 'Because 3 is the highest number, the green box is drawn last, rendering on top of the red and blue boxes.' },
        { code: 'Requirement', desc: 'z-index ONLY works on positioned elements (position: relative, absolute, fixed, sticky, or flex/grid children).' }
    ],
    realWorldExample: 'A "Modal" (popup window) that grays out the background usually has `position: fixed` and `z-index: 9999` to guarantee that absolutely nothing else on the website can render on top of it.',
    commonMistakes: [
      { error: 'Applying z-index to static elements.', code: 'div { z-index: 10; }', suffix: 'If the element is position: static (the default), z-index does absolutely nothing. You must add position: relative.' },
      { error: 'Z-index Wars.', code: 'z-index: 999999999;', suffix: 'Arbitrarily adding huge numbers is bad practice. Set up a logical scale (e.g., 10 for navbars, 20 for modals).' }
    ],
    bestPractices: [
      'Maintain a consistent z-index scale (e.g., increments of 10 or 100) across your CSS to prevent conflicts.'
    ],
    practiceExercise: {
      task: 'Make an element with class ".modal-overlay" sit on top of everything else by giving it a fixed position and a z-index of 999.',
      expectedOutput: '.modal-overlay { position: fixed; z-index: 999; }',
      solution: `.modal-overlay {
    position: fixed;
    z-index: 999;
}`
    },
    quiz: [
      { question: 'What does z-index control?', options: ['The zoom level', 'The stacking order (3D depth) of elements', 'The opacity of an element', 'The horizontal position'], answer: 'The stacking order (3D depth) of elements' },
      { question: 'Which element will appear IN FRONT of the others?', options: ['z-index: -1;', 'z-index: 0;', 'z-index: 10;', 'z-index: 5;'], answer: 'z-index: 10;' },
      { question: 'What MUST be true for z-index to work on an element (unless it is a flex/grid child)?', options: ['It must have a background color', 'It must have position set to something other than static', 'It must have display: block', 'It must have float: left'], answer: 'It must have position set to something other than static' },
      { question: 'Can z-index be a negative number?', options: ['Yes', 'No'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'Explain Stacking Contexts.', a: 'A stacking context is a 3D conceptualization of HTML elements along an imaginary z-axis. When an element creates a new stacking context (e.g., by having position: relative and a z-index, or an opacity less than 1), its children are completely trapped within that context. A child with z-index: 999 cannot render above an element outside its parent if the parent has a lower z-index than the outside element.' }
    ],
    summary: [
      'z-index controls 3D depth (stacking order).',
      'Higher numbers appear on top of lower numbers.',
      'Only works on positioned elements (relative, absolute, fixed).'
    ],
    references: commonReferences
  },

  'css_visibility': {
    isStructured: true,
    title: '31. Visibility',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The visibility property specifies whether or not an element is visible.',
    whyUseIt: 'Unlike `display: none`, hiding an element with `visibility: hidden` hides the element visually, but the element still occupies its original space in the layout.',
    syntax: `selector {
    visibility: hidden; /* visible | hidden */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .box {
    width: 100px;
    height: 50px;
    background: coral;
    margin-bottom: 5px;
  }
  
  .hide-vis {
    visibility: hidden;
  }
  
  .hide-disp {
    display: none;
  }
</style>
<body>
  <div class="box">Box 1</div>
  <div class="box hide-vis">Box 2 (Visibility Hidden - Hole remains)</div>
  <div class="box">Box 3</div>
  <br>
  <div class="box">Box A</div>
  <div class="box hide-disp">Box B (Display None - Layout shifts)</div>
  <div class="box">Box C</div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <div style="background: coral; padding: 5px; margin-bottom: 5px;">Box 1</div>
  <div style="visibility: hidden; background: coral; padding: 5px; margin-bottom: 5px;">Box 2 (Visibility Hidden)</div>
  <div style="background: coral; padding: 5px; margin-bottom: 5px;">Box 3 (Notice the gap!)</div>
  <hr>
  <div style="background: lightblue; padding: 5px; margin-bottom: 5px;">Box A</div>
  <div style="display: none; background: lightblue; padding: 5px; margin-bottom: 5px;">Box B (Display None)</div>
  <div style="background: lightblue; padding: 5px; margin-bottom: 5px;">Box C (Notice no gap!)</div>
</div>`,
    explanation: [
        { code: 'visibility: hidden', desc: 'The element becomes invisible, but the browser still calculates its size and leaves an empty hole in the layout.' }
    ],
    realWorldExample: 'If a table has a missing data cell, applying `visibility: hidden` to a placeholder element ensures the table\'s borders and columns remain perfectly aligned, instead of collapsing like `display: none` would cause.',
    commonMistakes: [
      { error: 'Using visibility: hidden to remove elements.', code: '', suffix: 'If you want the space to collapse and disappear, you MUST use display: none.' }
    ],
    bestPractices: [
      'Use `visibility` when maintaining the structural layout of a grid or table is critical, even when an item is missing.'
    ],
    practiceExercise: {
      task: 'Make an element with class ".ghost" invisible, but ensure it still takes up space on the page.',
      expectedOutput: '.ghost { visibility: hidden; }',
      solution: `.ghost {
    visibility: hidden;
}`
    },
    quiz: [
      { question: 'Which property makes an element invisible but leaves an empty space in the layout?', options: ['display: none', 'opacity: 0', 'visibility: hidden', 'hidden: true'], answer: 'visibility: hidden' },
      { question: 'What is the default value of the visibility property?', options: ['visible', 'hidden', 'auto', 'show'], answer: 'visible' },
      { question: 'Which property removes an element completely, collapsing the space it occupied?', options: ['visibility: hidden', 'opacity: 0', 'display: none', 'z-index: -1'], answer: 'display: none' }
    ],
    interviewQuestions: [
      { q: 'Can a child of a visibility: hidden element be made visible?', a: 'Yes! Unlike display: none (which destroys the tree rendering for children), if a parent is visibility: hidden, you can explicitly set a child to visibility: visible and the child will appear floating in the space.' }
    ],
    summary: [
      'visibility: hidden hides the element visually.',
      'The physical space the element takes up remains empty.',
      'display: none is used to completely remove the element and the space.'
    ],
    references: commonReferences
  },

  'css_opacity': {
    isStructured: true,
    title: '32. Opacity',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The opacity property specifies the transparency of an element.',
    whyUseIt: 'It is used to create see-through elements, overlay effects, or fade-in/fade-out animations via CSS transitions.',
    syntax: `selector {
    opacity: 0.5; /* Value between 0.0 (transparent) and 1.0 (opaque) */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .img-normal { opacity: 1; }
  .img-half { opacity: 0.5; }
  .img-ghost { opacity: 0.1; }
</style>
<body>
  <div style="background: black; padding: 20px;">
    <img src="https://picsum.photos/100" class="img-normal">
    <img src="https://picsum.photos/100" class="img-half">
    <img src="https://picsum.photos/100" class="img-ghost">
  </div>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div style="background: black; padding: 20px;">
  <img src="https://picsum.photos/100" style="opacity: 1; width: 60px; height: 60px; display: inline-block; margin-right: 10px;">
  <img src="https://picsum.photos/100" style="opacity: 0.5; width: 60px; height: 60px; display: inline-block; margin-right: 10px;">
  <img src="https://picsum.photos/100" style="opacity: 0.1; width: 60px; height: 60px; display: inline-block;">
</div>`,
    explanation: [
        { code: '0.0', desc: 'Completely transparent (invisible, but still clickable and takes up space).' },
        { code: '1.0', desc: 'Completely solid (default).' }
    ],
    realWorldExample: 'When you hover your mouse over an image gallery, the non-hovered images might drop to `opacity: 0.5` to bring focus to the image you are currently looking at.',
    commonMistakes: [
      { error: 'Opacity inherits to children.', code: '', suffix: 'If you set a div to opacity: 0.5, the text inside it ALSO becomes 50% transparent. If you only want a transparent background, use background-color: rgba(0,0,0,0.5) instead.' }
    ],
    bestPractices: [
      'Combine `opacity` with CSS `transition` to create smooth, high-performance hover fade effects.'
    ],
    practiceExercise: {
      task: 'Set a class ".fade" to be 75% transparent.',
      expectedOutput: '.fade { opacity: 0.25; }',
      solution: `.fade {
    opacity: 0.25;
}`
    },
    quiz: [
      { question: 'Which value makes an element completely invisible?', options: ['opacity: 1;', 'opacity: 100%;', 'opacity: 0;', 'opacity: -1;'], answer: 'opacity: 0;' },
      { question: 'If you set opacity: 0.5 on a parent div, what happens to the text inside the div?', options: ['The text stays solid (opacity 1)', 'The text also becomes 50% transparent', 'The text disappears', 'An error occurs'], answer: 'The text also becomes 50% transparent' },
      { question: 'What is the difference between opacity: 0 and visibility: hidden?', options: ['There is no visual difference', 'Opacity 0 elements can still be clicked/interacted with, visibility: hidden elements cannot', 'Visibility: hidden takes up no space', 'Opacity 0 removes the element from the DOM'], answer: 'Opacity 0 elements can still be clicked/interacted with, visibility: hidden elements cannot' }
    ],
    interviewQuestions: [
      { q: 'How would you create a div with a 50% transparent black background, but keep the text inside it 100% solid white?', a: 'I cannot use the `opacity` property on the div, because it will make the text transparent too. Instead, I must use `background-color: rgba(0, 0, 0, 0.5);` on the div.' }
    ],
    summary: [
      'opacity controls transparency from 0.0 (invisible) to 1.0 (solid).',
      'It affects the element and all of its child contents.',
      'Unlike visibility: hidden, opacity: 0 elements can still trigger hover and click events.'
    ],
    references: commonReferences
  }
};
