const commonReferences = [
  { label: 'MDN Web Docs: CSS Custom Properties (Variables)', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties' },
  { label: 'MDN Web Docs: CSS Functions', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions' },
  { label: 'BEM Methodology', url: 'https://en.bem.info/methodology/quick-start/' }
];

export const cssContentBatch11 = {
  'css_variables': {
    isStructured: true,
    title: '91. CSS Variables',
    difficulty: 'Intermediate',
    readingTime: '4 Minutes',
    definition: 'CSS Variables (Custom Properties) allow you to store a value in one place and reuse it throughout your entire CSS file.',
    whyUseIt: 'If you use a specific shade of blue (`#007bff`) for 50 different buttons and links, and your boss asks you to change the brand color to purple, finding and replacing 50 instances of the hex code is a nightmare. With variables, you change the value in ONE place, and the entire website updates instantly.',
    syntax: `/* 1. Define the variable in the root */
:root {
    --primary-color: #007bff;
}

/* 2. Use the variable */
selector {
    color: var(--primary-color);
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  /* Define global variables */
  :root {
    --brand-main: tomato;
    --text-color: #333;
    --spacing: 20px;
  }
  
  /* Apply variables */
  body {
    color: var(--text-color);
    padding: var(--spacing);
  }
  
  .header {
    border-bottom: 2px solid var(--brand-main);
  }
  
  .btn {
    background-color: var(--brand-main);
    color: white;
    padding: 10px var(--spacing); /* You can mix variables with hardcoded units! */
    border: none;
    border-radius: 5px;
  }
</style>
<body>
  <h2 class="header">Brand Variables</h2>
  <p>The border line above and the button below both use the EXACT same variable.</p>
  <button class="btn">Click Me</button>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <h2 style="border-bottom: 2px solid tomato; color: #333; padding-bottom: 5px;">Brand Variables</h2>
  <p style="color: #333;">The border line above and the button below both use the EXACT same variable.</p>
  <button style="background-color: tomato; color: white; padding: 10px 20px; border: none; border-radius: 5px;">Click Me</button>
</div>`,
    explanation: [
        { code: ':root', desc: 'A pseudo-class that represents the <html> element. Defining variables here makes them globally available to the entire document.' },
        { code: '--', desc: 'Variables MUST start with two dashes.' },
        { code: 'var()', desc: 'The function used to access and apply the variable\'s value.' }
    ],
    realWorldExample: 'Dark Mode. You define `--bg-color: white;` and `--text-color: black;`. When the user clicks the "Dark Mode" toggle, JavaScript simply changes the root variables to `--bg-color: black;` and `--text-color: white;`. Because the whole site uses the `var()` function, the entire website instantly flips to Dark Mode!',
    commonMistakes: [
      { error: 'Forgetting the dashes.', code: 'primary-color: red;', suffix: 'CSS variables must start with `--` to distinguish them from standard CSS properties.' }
    ],
    bestPractices: [
      'Create a "Design System" at the very top of your CSS file defining your core colors, fonts, and spacing as variables.'
    ],
    practiceExercise: {
      task: 'Define a variable named `--accent` with a value of `coral` in the `:root`. Then, apply it to the background color of a button.',
      expectedOutput: ':root { --accent: coral; } button { background-color: var(--accent); }',
      solution: `:root {
    --accent: coral;
}

button {
    background-color: var(--accent);
}`
    },
    quiz: [
      { question: 'What syntax must a CSS variable start with?', options: ['$', '@', 'var-', '--'], answer: '--' },
      { question: 'Which pseudo-class is typically used to define global CSS variables?', options: [':global', ':root', ':document', ':html'], answer: ':root' },
      { question: 'What is the primary benefit of CSS Variables?', options: ['They make the code run faster', 'You can change a value in one place and have it update everywhere instantly', 'They add animations automatically', 'They allow you to use JavaScript in CSS'], answer: 'You can change a value in one place and have it update everywhere instantly' }
    ],
    interviewQuestions: [
      { q: 'Can you redefine a CSS variable inside a specific component?', a: 'Yes! This is called "scoping". If you have `:root { --btn-color: blue; }`, but you write `.danger-zone { --btn-color: red; }`, any button inside the danger zone will use the red variable, while the rest of the site uses blue. This is incredibly powerful for component-based architecture.' }
    ],
    summary: [
      'Variables make CSS maintainable (change once, update everywhere).',
      'Declare globally in :root with --name.',
      'Access using the var(--name) function.'
    ],
    references: commonReferences
  },

  'css_math': {
    isStructured: true,
    title: '92. CSS Math (calc, min, max, clamp)',
    difficulty: 'Advanced',
    readingTime: '4 Minutes',
    definition: 'CSS provides built-in math functions that allow you to dynamically calculate values on the fly based on the user\'s screen size.',
    whyUseIt: 'Allows you to mix units! E.g., making a div take up 100% of the screen width, MINUS 50 pixels for a sidebar.',
    syntax: `selector {
    width: calc(100% - 50px);
    font-size: clamp(1rem, 5vw, 3rem);
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  /* calc: Mixes percentages and pixels safely! */
  .calc-box {
    width: calc(100% - 40px); /* 100% wide, minus 20px padding on each side */
    background: lightblue;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  /* clamp: (Minimum Size, Preferred Responsive Size, Maximum Size) */
  .fluid-text {
    /* Never smaller than 1rem, scales with the viewport (5vw), never larger than 3rem */
    font-size: clamp(1rem, 5vw, 3rem); 
    font-weight: bold;
    color: tomato;
  }
</style>
<body>
  <div class="calc-box">
    My width is exactly 100% of the screen MINUS 40px.
  </div>
  
  <p class="fluid-text">
    Resize the browser window! I scale up and down smoothly, but I have strict minimum and maximum limits!
  </p>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'calc()', desc: 'Performs basic math (+, -, *, /). The most important feature is that you can mix units (like % and px).' },
        { code: 'clamp(min, val, max)', desc: 'The holy grail of responsive typography. It takes three values: a floor, a preferred flexible value, and a ceiling. It completely replaces the need for complex media queries for font sizes.' }
    ],
    realWorldExample: 'A fixed sidebar is 250px wide. You want the main content area to take up the rest of the screen. You use `width: calc(100% - 250px);`. It calculates perfectly on any screen size!',
    commonMistakes: [
      { error: 'Forgetting the spaces in calc().', code: 'calc(100%-50px)', suffix: 'This is invalid! You MUST have spaces around the plus and minus operators, like this: calc(100% - 50px). The browser will ignore the rule otherwise.' }
    ],
    bestPractices: [
      'Use `clamp()` for responsive H1 headers. It guarantees the text scales smoothly on mobile, but stops growing before it gets ridiculously massive on 4K monitors.'
    ],
    practiceExercise: {
      task: 'Set the width to be 50% of the parent container, plus an extra 20 pixels.',
      expectedOutput: 'width: calc(50% + 20px);',
      solution: `width: calc(50% + 20px);`
    },
    quiz: [
      { question: 'What is the primary benefit of calc()?', options: ['It runs complex physics calculations', 'It allows you to perform math combining different CSS units (like % and px)', 'It creates variables', 'It rounds numbers up'], answer: 'It allows you to perform math combining different CSS units (like % and px)' },
      { question: 'Why is `calc(100%-20px)` invalid CSS?', options: ['You cannot subtract pixels from percentages', 'There must be spaces around the minus operator', 'calc only does multiplication', '100% is not a valid unit'], answer: 'There must be spaces around the minus operator' },
      { question: 'In the function `clamp(1rem, 5vw, 3rem)`, what does the 3rem represent?', options: ['The starting size', 'The flexible size', 'The maximum allowed size (the ceiling)', 'The minimum allowed size'], answer: 'The maximum allowed size (the ceiling)' }
    ],
    interviewQuestions: [
      { q: 'How does the CSS min() function work?', a: '`min(50%, 300px)` asks the browser to evaluate both values and pick the SMALLER one. On a 1000px screen, 50% is 500px, so it picks 300px. On a 400px mobile screen, 50% is 200px, so it picks the 50%. It is a smart way to create a responsive max-width without writing two lines of code.' }
    ],
    summary: [
      'calc() mixes units for dynamic calculations.',
      'Remember the spaces around operators in calc().',
      'clamp(min, val, max) is perfect for fluid, responsive typography.'
    ],
    references: commonReferences
  },

  'css_filters': {
    isStructured: true,
    title: '93. CSS Filters',
    difficulty: 'Intermediate',
    readingTime: '2 Minutes',
    definition: 'The filter property applies graphical effects like blur or color shifting to an element.',
    whyUseIt: 'Previously, if you wanted an image to be grayscale, you had to open Photoshop, edit the image, and upload a second file. Now, you can do it natively in the browser with one line of CSS.',
    syntax: `selector {
    filter: blur(5px);
    /* Functions: blur(), brightness(), contrast(), grayscale(), drop-shadow(), etc. */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  img {
    width: 200px;
    border-radius: 8px;
    margin-right: 15px;
    transition: filter 0.3s ease;
  }
  
  .blur { filter: blur(4px); }
  .gray { filter: grayscale(100%); }
  
  /* Drop shadow creates a shadow based on the ALPHA channel of the image, 
     meaning it traces the actual shape of a transparent PNG, unlike box-shadow! */
  .shadow { filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.5)); }
  
  /* Instagram style hover effect! */
  .insta:hover {
    filter: contrast(120%) saturate(150%) sepia(30%);
  }
</style>
<body>
  <img class="blur" src="https://picsum.photos/id/1025/200">
  <img class="gray" src="https://picsum.photos/id/1025/200">
  
  <br><br>
  Hover over the image below for an Instagram filter effect!<br>
  <img class="insta" src="https://picsum.photos/id/1025/200">
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'blur()', desc: 'Applies a Gaussian blur. Great for blurring background images.' },
        { code: 'grayscale()', desc: 'Converts to black and white (0 to 100%).' },
        { code: 'drop-shadow()', desc: 'Unlike box-shadow (which draws a square behind the element), drop-shadow literally traces the transparent edges of an image/SVG and draws the shadow perfectly behind the shape!' }
    ],
    realWorldExample: 'A "Partners" or "Sponsors" section. Companies often upload logos in varying bright colors which clash with your website design. You can apply `filter: grayscale(100%) opacity(50%);` to all partner logos to make them look uniform and sleek.',
    commonMistakes: [
      { error: 'Overusing blur on large elements.', code: 'body { filter: blur(10px); }', suffix: 'Applying filters (especially blur) to very large DOM elements requires a massive amount of CPU/GPU processing and will lag cheap phones significantly.' }
    ],
    bestPractices: [
      'Use `filter: drop-shadow()` instead of `box-shadow` when working with transparent PNGs or SVGs so the shadow traces the actual art.'
    ],
    practiceExercise: {
      task: 'Make an image completely black and white using a filter.',
      expectedOutput: 'filter: grayscale(100%);',
      solution: `filter: grayscale(100%);`
    },
    quiz: [
      { question: 'What does the CSS filter property do?', options: ['Sorts data in a table', 'Removes HTML tags', 'Applies graphical effects like blur and grayscale', 'Filters out spam comments'], answer: 'Applies graphical effects like blur and grayscale' },
      { question: 'What is the main advantage of filter: drop-shadow() over the standard box-shadow property?', options: ['It is faster', 'It traces the actual transparent shape of a PNG/SVG instead of just drawing a square box', 'It has more colors', 'It works on older browsers'], answer: 'It traces the actual transparent shape of a PNG/SVG instead of just drawing a square box' },
      { question: 'Can you combine multiple filters on one element?', options: ['Yes (e.g., filter: contrast(120%) saturate(150%);)', 'No'], answer: 'Yes (e.g., filter: contrast(120%) saturate(150%);)' }
    ],
    interviewQuestions: [
      { q: 'What is backdrop-filter?', a: 'While `filter` blurs the element ITSELF, `backdrop-filter` blurs the elements BEHIND it. This is how Apple achieves the famous "Glassmorphism" effect (a frosted, semi-transparent glass pane hovering over background content).' }
    ],
    summary: [
      'Filters apply visual effects (blur, grayscale, brightness).',
      'You can combine them by space-separating.',
      'drop-shadow() is superior to box-shadow for transparent images.'
    ],
    references: commonReferences
  },

  'css_object_fit': {
    isStructured: true,
    title: '94. object-fit',
    difficulty: 'Intermediate',
    readingTime: '2 Minutes',
    definition: 'The object-fit property specifies how an <img> or <video> should be resized to fit its container.',
    whyUseIt: 'It solves the squished image problem. It acts exactly like `background-size: cover`, but it works on ACTUAL `<img>` tags!',
    syntax: `img {
    width: 100%;
    height: 300px;
    object-fit: cover; /* fill | contain | cover | scale-down | none */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  img {
    width: 250px;
    height: 150px;
    border: 2px solid black;
    margin-bottom: 10px;
    background: #eee;
  }
  
  /* The original image is a perfect square, but our <img> tag is a wide rectangle! */
  
  .fill { object-fit: fill; } /* Default: Stretches and looks terrible */
  
  .contain { object-fit: contain; } /* Fits the whole square inside, leaving blank space on sides */
  
  .cover { object-fit: cover; } /* Fills the rectangle perfectly, safely cropping the top/bottom */
</style>
<body>
  <!-- Original 500x500 square image -->
  <img class="fill" src="https://picsum.photos/id/237/500/500">
  <img class="contain" src="https://picsum.photos/id/237/500/500">
  <img class="cover" src="https://picsum.photos/id/237/500/500">
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'cover', desc: 'The image keeps its aspect ratio and fills the given dimension. The image will be safely cropped to fit.' },
        { code: 'contain', desc: 'The image keeps its aspect ratio, but is resized to fit completely within the given dimension (leaving letterboxes).' }
    ],
    realWorldExample: 'A Grid of Blog Cards. Every card needs an image that is exactly 200px tall. But authors upload images of all different sizes (portraits, landscapes, squares). By applying `width: 100%; height: 200px; object-fit: cover;` to the `<img>` tag, the browser automatically crops them all perfectly without any stretching.',
    commonMistakes: [
      { error: 'Forgetting to set a height.', code: 'img { width: 100%; object-fit: cover; }', suffix: 'object-fit only works if the image is forced into a specific bounding box. If you don\'t set a height, the image will just naturally scale its height to match the width, and object-fit won\'t actually do anything.' }
    ],
    bestPractices: [
      'Combine `object-fit: cover;` with `object-position: center top;` if you want to ensure the top of the cropped image (like a person\'s face) isn\'t cut off.'
    ],
    practiceExercise: {
      task: 'Force an image to fill a 300x300 box without stretching, allowing the edges to be cropped.',
      expectedOutput: 'object-fit: cover;',
      solution: `object-fit: cover;`
    },
    quiz: [
      { question: 'What does object-fit do?', options: ['It fits text inside a div', 'It controls how an <img> or <video> is resized to fit its container', 'It creates background images', 'It aligns flexbox items'], answer: 'It controls how an <img> or <video> is resized to fit its container' },
      { question: 'Which object-fit value fills the container perfectly without stretching, cropping the image if necessary?', options: ['fill', 'contain', 'cover', 'scale'], answer: 'cover' },
      { question: 'Why is object-fit: cover preferred over the default object-fit: fill?', options: ['It loads faster', 'fill stretches and distorts the image if the aspect ratio doesn\'t match, cover maintains the aspect ratio safely', 'It allows for animations'], answer: 'fill stretches and distorts the image if the aspect ratio doesn\'t match, cover maintains the aspect ratio safely' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between object-fit and background-size?', a: 'They do the exact same visual calculations (`cover` and `contain`). The difference is the HTML element. `background-size` applies to CSS background images on a `<div>`. `object-fit` applies to actual semantic `<img>` and `<video>` tags in the HTML.' }
    ],
    summary: [
      'object-fit solves squished <img> tags.',
      'cover crops safely.',
      'contain leaves empty space.',
      'Requires a defined width and height on the image.'
    ],
    references: commonReferences
  },

  'css_scroll_behavior': {
    isStructured: true,
    title: '95. scroll-behavior',
    difficulty: 'Beginner',
    readingTime: '1 Minute',
    definition: 'The scroll-behavior property specifies whether to smoothly animate the scroll position instead of a straight jump.',
    whyUseIt: 'When a user clicks an anchor link (e.g., "Jump to Section 3"), the browser normally teleports instantly. Adding one line of CSS makes the page glide beautifully down to the section.',
    syntax: `html {
    scroll-behavior: smooth; /* auto | smooth */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  /* THIS ONE LINE CHANGES EVERYTHING! */
  html {
    scroll-behavior: smooth;
  }
  
  .section {
    height: 800px; /* Make the page long enough to scroll */
    padding: 50px;
  }
  
  #sec1 { background: lightblue; }
  #sec2 { background: lightcoral; }
</style>
<body>
  <div id="sec1" class="section">
    <h2>Section 1</h2>
    <!-- This link points to the ID of section 2 -->
    <a href="#sec2">Smooth scroll down to Section 2 ↓</a>
  </div>
  
  <div id="sec2" class="section">
    <h2>Section 2</h2>
    <!-- This link points to the ID of section 1 -->
    <a href="#sec1">Smooth scroll back up to Section 1 ↑</a>
  </div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'html { ... }', desc: 'You MUST apply this to the `html` element for it to affect the entire webpage\'s scrolling.' },
        { code: 'smooth', desc: 'The browser calculates the distance and automatically glides the screen.' }
    ],
    realWorldExample: 'Single-page portfolio websites usually have a fixed navigation bar at the top (About, Projects, Contact). Clicking "Contact" smoothly glides the user down to the footer of the page.',
    commonMistakes: [
      { error: 'Applying it to the body.', code: 'body { scroll-behavior: smooth; }', suffix: 'While some browsers might accept this, the specification says it should be applied to the root scrolling element, which is the <html> tag.' }
    ],
    bestPractices: [
      'Accessibility: Some users get motion sickness from smooth scrolling. It is best practice to wrap this rule in a media query that respects user OS preferences: `@media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }`'
    ],
    practiceExercise: {
      task: 'Write the CSS to enable smooth scrolling for the entire HTML document.',
      expectedOutput: 'html { scroll-behavior: smooth; }',
      solution: `html {
    scroll-behavior: smooth;
}`
    },
    quiz: [
      { question: 'What does scroll-behavior: smooth do?', options: ['It slows down the user\'s mouse wheel', 'It makes anchor links glide the page to the target instead of teleporting instantly', 'It adds a custom scrollbar', 'It prevents scrolling'], answer: 'It makes anchor links glide the page to the target instead of teleporting instantly' },
      { question: 'Which element should you apply scroll-behavior: smooth to if you want it to affect the whole page?', options: ['body', 'div', 'html', '*'], answer: 'html' },
      { question: 'Why might a developer wrap scroll-behavior in a `prefers-reduced-motion` media query?', options: ['To save battery on mobile', 'Because smooth scrolling can cause motion sickness for some users with vestibular disorders', 'Because older browsers crash', 'To make the scroll faster'], answer: 'Because smooth scrolling can cause motion sickness for some users with vestibular disorders' }
    ],
    interviewQuestions: [
      { q: 'If you have a fixed navigation bar that is 80px tall, and you smooth scroll to an ID, the navigation bar will cover up the top 80px of the section. How do you fix this?', a: 'You use the `scroll-margin-top` property! By adding `scroll-margin-top: 80px;` to your sections, the browser will stop scrolling 80 pixels early, perfectly aligning the section just below your fixed header.' }
    ],
    summary: [
      'scroll-behavior: smooth replaces instant anchor link jumps with gliding animations.',
      'Apply it to the html tag.',
      'Be mindful of users who prefer reduced motion.'
    ],
    references: commonReferences
  },

  'css_architecture_bem': {
    isStructured: true,
    title: '96. CSS Architecture (BEM)',
    difficulty: 'Advanced',
    readingTime: '5 Minutes',
    definition: 'BEM (Block, Element, Modifier) is a methodology that helps you create reusable components and code sharing in front-end development.',
    whyUseIt: 'As projects grow, naming CSS classes becomes chaotic. You write `.title`, but there are 5 different types of titles on the site. BEM provides a strict naming convention that prevents CSS conflicts, keeps specificity incredibly low, and makes your code self-documenting.',
    syntax: `/* Block */
.card { }

/* Element (Two underscores) */
.card__title { }
.card__image { }

/* Modifier (Two dashes) */
.card--featured { }`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  /* --- THE BLOCK --- */
  /* The main container of the component */
  .button {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    font-family: sans-serif;
  }
  
  /* --- THE ELEMENTS --- */
  /* Things that exist INSIDE the block (uses __ ) */
  .button__icon {
    margin-right: 8px;
    font-size: 18px;
  }
  
  .button__text {
    font-weight: bold;
  }

  /* --- THE MODIFIERS --- */
  /* Different visual versions of the Block (uses -- ) */
  .button--primary {
    background-color: blue;
    color: white;
  }
  
  .button--danger {
    background-color: red;
    color: white;
  }
  
  .button--large {
    padding: 20px 40px;
    font-size: 24px;
  }
</style>
<body>
  <!-- A standard primary button -->
  <button class="button button--primary">
    <span class="button__icon">★</span>
    <span class="button__text">Submit</span>
  </button>
  
  <br><br>
  
  <!-- A large danger button -->
  <button class="button button--danger button--large">
    <span class="button__icon">✖</span>
    <span class="button__text">Delete Everything</span>
  </button>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'Block', desc: 'A standalone entity that is meaningful on its own. (e.g., `header`, `container`, `menu`, `checkbox`).' },
        { code: 'Element', desc: 'A part of a block that has no standalone meaning and is semantically tied to its block. Uses two underscores. (e.g., `menu__item`, `checkbox__label`).' },
        { code: 'Modifier', desc: 'A flag on a block or element. Use them to change appearance or behavior. Uses two dashes. (e.g., `menu--hidden`, `button--disabled`).' }
    ],
    realWorldExample: 'Without BEM, a developer might style `.card img`. If the card gets complex and gets a second image (like an author avatar), `.card img` breaks everything. With BEM, you name them `.card__banner-image` and `.card__author-avatar`. They never conflict, and the CSS is totally flat (Specificity score: 10).',
    commonMistakes: [
      { error: 'Nesting Elements in the name.', code: '.card__header__title', suffix: 'BEM names should never have multiple elements chained. An element is just a part of the block. It should just be .card__title. The hierarchy is defined by the HTML, not the class name.' }
    ],
    bestPractices: [
      'BEM classes are ugly, but that is the point. They are robust, highly descriptive, and prevent massive production bugs. Embrace the underscores!'
    ],
    practiceExercise: {
      task: 'Using BEM, write the class name for a "dark" modifier applied to a "navbar" block.',
      expectedOutput: '.navbar--dark',
      solution: `.navbar--dark {
    /* Styles */
}`
    },
    quiz: [
      { question: 'What does BEM stand for?', options: ['Basic Element Modeling', 'Block Element Modifier', 'Border Effect Margin', 'Browser Engine Module'], answer: 'Block Element Modifier' },
      { question: 'In BEM, what syntax is used to connect an Element to a Block (e.g., a title inside a card)?', options: ['A single dash (-)', 'Two dashes (--)', 'Two underscores (__)', 'A period (.)'], answer: 'Two underscores (__)' },
      { question: 'In BEM, what syntax is used to create a Modifier (a different visual state)?', options: ['Two dashes (--)', 'Two underscores (__)', 'A colon (:)', 'CamelCase'], answer: 'Two dashes (--)' },
      { question: 'Why do large teams use BEM?', options: ['It makes CSS load faster', 'It prevents class name conflicts and keeps specificity very low', 'It is required by HTML5', 'It adds automatic animations'], answer: 'It prevents class name conflicts and keeps specificity very low' }
    ],
    interviewQuestions: [
      { q: 'How does BEM solve CSS Specificity wars?', a: 'Because BEM relies almost entirely on single, descriptive class names (like `.card__title`), almost every single rule in a BEM codebase has a specificity score of exactly 10. You never have to write `.container .card div h2` (score 22) to force an override. You just add a modifier `.card__title--large` (score 10), keeping the CSS architecture perfectly flat and predictable.' }
    ],
    summary: [
      'BEM organizes CSS into Blocks, Elements (__), and Modifiers (--).',
      'It creates flat, predictable CSS.',
      'It is the industry standard for writing maintainable raw CSS at scale.'
    ],
    references: commonReferences
  }
};
