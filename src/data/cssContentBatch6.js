const commonReferences = [
  { label: 'W3Schools Responsive Design', url: 'https://www.w3schools.com/css/css_rwd_intro.asp' },
  { label: 'MDN Web Docs: Responsive design', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design' }
];

export const cssContentBatch6 = {
  'css_media_queries': {
    isStructured: true,
    title: '51. Media Queries',
    difficulty: 'Intermediate',
    readingTime: '5 Minutes',
    definition: 'Media queries allow you to apply CSS styles only when a specific condition is met, such as the screen width being larger or smaller than a certain size.',
    whyUseIt: 'They are the core technology behind Responsive Web Design. They allow a website to look completely different on a mobile phone (stacked columns) compared to a desktop computer (side-by-side columns).',
    syntax: `@media only screen and (max-width: 600px) {
    /* CSS rules applied only on screens 600px or smaller */
    selector { property: value; }
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .box {
    background: green;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 24px;
  }
  
  /* When the screen is 600px wide OR LESS, apply this CSS */
  @media only screen and (max-width: 600px) {
    .box {
      background: red;
      font-size: 16px;
    }
  }
</style>
<body>
  <!-- Resize your browser window to see the color change! -->
  <div class="box">
    I am GREEN on Desktop, but RED on Mobile!
  </div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: '@media', desc: 'The CSS rule that initiates the media query.' },
        { code: 'screen', desc: 'Specifies that this targets computer/phone screens (not printers).' },
        { code: '(max-width: 600px)', desc: 'The breakpoint condition. If the screen is 600px or smaller, the CSS inside the brackets is activated. If it is 601px, the CSS is ignored.' }
    ],
    realWorldExample: 'A navigation bar has horizontal links (`display: flex`) on desktop. You write a media query `(max-width: 768px)` that hides the links (`display: none`) and shows a "Hamburger Menu" icon instead for iPad and Mobile users.',
    commonMistakes: [
      { error: 'Putting the media query at the top of the file.', code: '', suffix: 'CSS cascades. If your media query changes the background to red at the top of the file, but your base CSS sets it to green at the bottom of the file, it will ALWAYS be green. Media queries should generally be placed at the bottom of the stylesheet.' }
    ],
    bestPractices: [
      'Use common "Breakpoints". 768px is the standard breakpoint for Tablets (iPad portrait), and 1024px is standard for Desktop.'
    ],
    practiceExercise: {
      task: 'Write an empty media query that targets screens larger than 1024px (Desktop).',
      expectedOutput: '@media (min-width: 1024px) { }',
      solution: `@media (min-width: 1024px) {
    /* Desktop styles go here */
}`
    },
    quiz: [
      { question: 'What is the purpose of a Media Query?', options: ['To add audio and video to HTML', 'To apply CSS only when specific device conditions (like screen width) are met', 'To query databases using CSS', 'To make images load faster'], answer: 'To apply CSS only when specific device conditions (like screen width) are met' },
      { question: 'What keyword initiates a media query?', options: ['@query', '@responsive', '@media', '@screen'], answer: '@media' },
      { question: 'If you want styles to apply only to phones (screens smaller than 600px), which condition should you use?', options: ['(min-width: 600px)', '(max-width: 600px)', '(width: 600px)', '(device: phone)'], answer: '(max-width: 600px)' },
      { question: 'Where is the best place to put media queries in your CSS file?', options: ['At the very top', 'Inside the HTML', 'At the bottom, after the base styles', 'It does not matter'], answer: 'At the bottom, after the base styles' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between max-width and min-width in a Media Query?', a: '`max-width: 768px` means the styles apply from 0px UP TO 768px (targeting mobile). `min-width: 768px` means the styles apply from 768px AND LARGER (targeting desktop). You use max-width when doing "Desktop First" design, and min-width when doing "Mobile First" design.' }
    ],
    summary: [
      'Media queries apply conditional CSS based on screen size.',
      'max-width targets screens smaller than a value.',
      'min-width targets screens larger than a value.'
    ],
    references: commonReferences
  },

  'css_mobile_first_design': {
    isStructured: true,
    title: '52. Mobile First Design',
    difficulty: 'Intermediate',
    readingTime: '4 Minutes',
    definition: 'Mobile First Design is a strategy where you write CSS for mobile devices by default, and then use min-width media queries to add complexity for larger screens.',
    whyUseIt: 'Mobile layouts are usually simple (stacked columns). Desktop layouts are complex. By designing the simple version first as the default, you write less CSS, avoid overriding complex rules, and make the website load faster on phones.',
    syntax: `/* 1. Base styles (Mobile First - applies everywhere) */
.col { width: 100%; }

/* 2. Add complexity for Desktop */
@media (min-width: 768px) {
    .col { width: 50%; }
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  /* --- MOBILE FIRST APPROACH --- */
  /* These are the default styles for phones */
  .grid {
    display: flex;
    flex-direction: column; /* Stacked on mobile */
    gap: 10px;
  }
  
  .box { background: coral; padding: 20px; text-align: center; }

  /* --- TABLET & DESKTOP --- */
  /* Only activated if screen is wider than 768px */
  @media (min-width: 768px) {
    .grid {
      flex-direction: row; /* Side-by-side on desktop! */
    }
    .box {
      flex-grow: 1; /* Make them fill the row evenly */
    }
  }
</style>
<body>
  <div class="grid">
    <div class="box">Column 1</div>
    <div class="box">Column 2</div>
  </div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'Mobile Styles', desc: 'Written completely outside of any media queries. These are the default rules.' },
        { code: 'min-width', desc: 'Used to scale the design UP. If the screen is big enough, the desktop styles activate and override the mobile defaults.' }
    ],
    realWorldExample: 'A navigation menu. By default (mobile first), the links are `display: none` and a Hamburger menu is visible. When the screen hits `min-width: 1024px`, the media query kicks in, hiding the Hamburger menu and setting the links to `display: flex`.',
    commonMistakes: [
      { error: 'Mixing min-width and max-width randomly.', code: '', suffix: 'Pick one strategy and stick to it. If you are doing Mobile First, you should almost exclusively use min-width media queries.' }
    ],
    bestPractices: [
      'Almost every modern framework (like Tailwind, Bootstrap) is built on a Mobile First philosophy. You should adopt it as your default workflow.'
    ],
    practiceExercise: {
      task: 'Write a Mobile First setup for an H1 tag. Make it 24px by default, and 48px on screens larger than 768px.',
      expectedOutput: 'h1 { font-size: 24px; } @media (min-width: 768px) { h1 { font-size: 48px; } }',
      solution: `h1 {
    font-size: 24px;
}

@media (min-width: 768px) {
    h1 {
        font-size: 48px;
    }
}`
    },
    quiz: [
      { question: 'What is the core philosophy of Mobile First Design?', options: ['Design for desktop, then squish it for mobile', 'Write CSS for mobile devices first as the default, then add media queries for larger screens', 'Only build websites for mobile phones', 'Use JavaScript to detect the device'], answer: 'Write CSS for mobile devices first as the default, then add media queries for larger screens' },
      { question: 'Which media query type is heavily used in Mobile First Design?', options: ['max-width', 'min-width', 'max-height', 'device-width'], answer: 'min-width' },
      { question: 'Why is Mobile First considered a better approach?', options: ['Mobile layouts are simpler, so writing them as the default base requires less code overriding', 'It looks better on old computers', 'It uses max-width exclusively', 'It prevents users from using desktops'], answer: 'Mobile layouts are simpler, so writing them as the default base requires less code overriding' }
    ],
    interviewQuestions: [
      { q: 'Explain the difference between Mobile First and Desktop First approaches.', a: 'Mobile First (Progressive Enhancement) writes the simple mobile layout as the default base CSS, and uses `min-width` queries to add complexity for desktops. Desktop First (Graceful Degradation) writes the complex desktop layout as the default base, and uses `max-width` queries to rip out functionality and simplify the layout for mobile.' }
    ],
    summary: [
      'Write mobile CSS outside of media queries.',
      'Use @media (min-width: 768px) to add tablet/desktop styles.',
      'It reduces CSS complexity and overrides.'
    ],
    references: commonReferences
  },

  'css_responsive_images': {
    isStructured: true,
    title: '53. Responsive Images',
    difficulty: 'Beginner',
    readingTime: '3 Minutes',
    definition: 'Responsive images automatically adjust to fit the size of the screen or container.',
    whyUseIt: 'If you put a 2000px wide image on a mobile phone, it will cause massive horizontal scrollbars and ruin the layout. Images must scale down naturally.',
    syntax: `img {
    max-width: 100%;
    height: auto;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .fixed-img {
    /* Bad practice for responsive design */
    width: 600px;
  }
  
  .responsive-img {
    /* The Golden Rule for Images! */
    max-width: 100%;
    height: auto;
  }
</style>
<body>
  <!-- If the screen is smaller than 600px, this image will break the layout -->
  <h3>Fixed Image (Bad)</h3>
  <img src="https://picsum.photos/600/200" class="fixed-img">
  
  <!-- This image will safely shrink to fit the screen -->
  <h3>Responsive Image (Good)</h3>
  <img src="https://picsum.photos/600/200" class="responsive-img">
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'max-width: 100%', desc: 'Ensures the image is NEVER wider than its parent container. If the container shrinks, the image shrinks.' },
        { code: 'height: auto', desc: 'Maintains the image\'s aspect ratio. If the width shrinks, the height shrinks proportionally so the image doesn\'t look stretched or squished.' }
    ],
    realWorldExample: 'Every modern CMS (like WordPress) or CSS Framework (like Bootstrap) applies `max-width: 100%; height: auto;` to every single `<img>` tag by default so they never break the mobile layout.',
    commonMistakes: [
      { error: 'Using width: 100% instead of max-width: 100%.', code: '', suffix: 'If you use width: 100%, an image that is naturally 200px wide will stretch to fill a 1000px container, becoming incredibly blurry. max-width allows it to shrink, but prevents it from stretching larger than its natural size.' }
    ],
    bestPractices: [
      'Apply `max-width: 100%; height: auto;` to all images globally in your CSS reset.',
      'For background images, use `background-size: cover;` to make them responsive.'
    ],
    practiceExercise: {
      task: 'Write the two CSS properties required to make an image responsive without stretching it past its original size.',
      expectedOutput: 'img { max-width: 100%; height: auto; }',
      solution: `img {
    max-width: 100%;
    height: auto;
}`
    },
    quiz: [
      { question: 'Which property combination makes an image perfectly responsive?', options: ['width: 100%; height: 100%;', 'max-width: 100%; height: auto;', 'size: responsive;', 'width: auto; max-height: 100%;'], answer: 'max-width: 100%; height: auto;' },
      { question: 'Why is max-width: 100% better than width: 100% for images?', options: ['It loads faster', 'It prevents small images from stretching and becoming blurry on large screens', 'It works on older browsers', 'It centers the image automatically'], answer: 'It prevents small images from stretching and becoming blurry on large screens' },
      { question: 'What does height: auto do when paired with max-width: 100%?', options: ['It maintains the aspect ratio of the image as it shrinks', 'It crops the image', 'It makes the image a perfect square', 'It makes the height equal to the width'], answer: 'It maintains the aspect ratio of the image as it shrinks' }
    ],
    interviewQuestions: [
      { q: 'How would you serve different image files to mobile and desktop users to save bandwidth?', a: 'Using CSS, I could use media queries to swap the `background-image` URL. Using HTML, I would use the `<picture>` tag with multiple `<source>` elements containing `media="(min-width: ...)"` attributes to serve smaller image files to mobile devices.' }
    ],
    summary: [
      'Images overflow mobile screens by default.',
      'max-width: 100% allows them to shrink.',
      'height: auto prevents aspect ratio distortion.'
    ],
    references: commonReferences
  },

  'css_responsive_layout': {
    isStructured: true,
    title: '54. Responsive Layout',
    difficulty: 'Intermediate',
    readingTime: '5 Minutes',
    definition: 'A responsive layout is an arrangement of elements (grids, columns, navbars) that smoothly adapts to different screen sizes using Flexbox, Grid, and Media Queries.',
    whyUseIt: 'Users visit websites on 4-inch phones, 10-inch tablets, and 30-inch monitors. A static layout looks terrible on most of them. A responsive layout ensures a perfect user experience across all devices.',
    syntax: `/* The typical pattern */
.container { display: grid; grid-template-columns: 1fr; }

@media (min-width: 768px) {
    .container { grid-template-columns: 1fr 1fr; } /* 2 columns on tablet */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  /* Mobile First: 1 Column */
  .layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .card { background: coral; padding: 20px; color: white; text-align: center; }

  /* Tablet: 2 Columns */
  @media (min-width: 600px) {
    .layout {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* Desktop: 4 Columns */
  @media (min-width: 1000px) {
    .layout {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
<body>
  <h2>Responsive Grid (Resize Browser!)</h2>
  <div class="layout">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
  </div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'Base CSS', desc: 'Sets up a single column (1fr). This ensures perfect viewing on a phone.' },
        { code: 'min-width: 600px', desc: 'When the screen is wide enough to fit two cards, the grid transforms into 2 columns.' },
        { code: 'min-width: 1000px', desc: 'On large desktops, it transforms again into 4 columns.' }
    ],
    realWorldExample: 'An online store\'s product page. On mobile, you see 1 product per row. On an iPad, you see 2 products per row. On a 4K TV, you see 6 products per row. This is entirely managed by redefining `grid-template-columns` at different breakpoints.',
    commonMistakes: [
      { error: 'Using fixed widths for columns.', code: '.col { width: 300px; }', suffix: 'Fixed widths destroy responsive layouts. Always use % or fr units so columns can breathe and stretch between breakpoints.' }
    ],
    bestPractices: [
      'Design for content, not specific devices. Add a media query breakpoint when your layout starts looking bad, rather than blindly targeting exact phone models (like iPhone 12).'
    ],
    practiceExercise: {
      task: 'Write a media query for screens larger than 800px that changes a flex container with class ".row" to use flex-direction: row.',
      expectedOutput: '@media (min-width: 800px) { .row { flex-direction: row; } }',
      solution: `@media (min-width: 800px) {
    .row {
        flex-direction: row;
    }
}`
    },
    quiz: [
      { question: 'Which two CSS features are combined to create responsive layouts?', options: ['Colors and Fonts', 'Flexbox/Grid and Media Queries', 'Animations and Transitions', 'Margins and Padding'], answer: 'Flexbox/Grid and Media Queries' },
      { question: 'In a Mobile First responsive layout, how many columns should your base CSS typically define?', options: ['4 columns', '2 columns', '1 column', 'It depends on the desktop size'], answer: '1 column' },
      { question: 'Why should you avoid using fixed widths (like 500px) in a responsive layout?', options: ['They cause horizontal scrollbars on smaller screens', 'They load slower', 'They disable media queries', 'They are deprecated in HTML5'], answer: 'They cause horizontal scrollbars on smaller screens' }
    ],
    interviewQuestions: [
      { q: 'How can CSS Grid create a responsive layout WITHOUT using media queries?', a: 'By using `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`. This magical formula tells the grid to automatically create as many 250px columns as will fit on the screen. If the screen is 800px, it makes 3 columns. If it shrinks to 400px, it drops to 1 column. All without a single @media query.' }
    ],
    summary: [
      'Start with a single column (Mobile First).',
      'Use Media Queries to increase columns on wider screens.',
      'Rely on Flexbox and Grid, avoiding fixed widths.'
    ],
    references: commonReferences
  },

  'css_viewport': {
    isStructured: true,
    title: '55. Viewport',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'The viewport is the user\'s visible area of a web page. It varies with the device, and will be smaller on a mobile phone than on a computer screen.',
    whyUseIt: 'Without the Viewport meta tag, mobile browsers will assume your website is a desktop site and scale it down to a tiny, unreadable size. This tag is mandatory for mobile responsive design.',
    syntax: `<!-- Placed in the <head> of the HTML document -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <!-- THE MOST IMPORTANT TAG FOR RESPONSIVE DESIGN -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <style>
    body { font-size: 20px; }
  </style>
</head>
<body>
  <h1>Hello World</h1>
  <p>If you remove the viewport meta tag, this text will look incredibly tiny on an iPhone because the phone will try to render it at 980px wide and shrink it to fit the 375px screen.</p>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'width=device-width', desc: 'Sets the width of the page to follow the screen-width of the device (which will vary depending on the device).' },
        { code: 'initial-scale=1.0', desc: 'Sets the initial zoom level when the page is first loaded by the browser.' }
    ],
    realWorldExample: 'If you have ever visited an old website on your phone where the text was so tiny you had to double-tap or pinch-to-zoom just to read a sentence, that website forgot to include the viewport meta tag.',
    commonMistakes: [
      { error: 'Disabling user zooming.', code: 'maximum-scale=1.0, user-scalable=no', suffix: 'Adding this to the viewport tag prevents users with visual impairments from zooming in on your text. This is a massive accessibility violation.' }
    ],
    bestPractices: [
      'Every HTML file you ever write should have the standard viewport meta tag in the `<head>`.'
    ],
    practiceExercise: {
      task: 'Write the complete HTML meta tag required to configure the viewport for responsive design.',
      expectedOutput: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      solution: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    },
    quiz: [
      { question: 'What does the viewport refer to?', options: ['The server hosting the website', 'The user\'s visible area of a web page', 'The HTML <body> tag', 'The CSS stylesheet'], answer: 'The user\'s visible area of a web page' },
      { question: 'What happens if you do NOT include the viewport meta tag on a mobile responsive site?', options: ['Media queries will not trigger correctly and the site will look tiny', 'The site will crash', 'The browser will auto-generate it perfectly', 'The text will become huge'], answer: 'Media queries will not trigger correctly and the site will look tiny' },
      { question: 'Where must the viewport meta tag be placed?', options: ['At the end of the <body>', 'In the CSS file', 'Inside the <head> section of the HTML', 'Before the <!DOCTYPE html> declaration'], answer: 'Inside the <head> section of the HTML' }
    ],
    interviewQuestions: [
      { q: 'Why is user-scalable=no considered an anti-pattern in the viewport meta tag?', a: 'It completely disables the user\'s ability to pinch-to-zoom on mobile devices. This ruins accessibility for visually impaired users who need to zoom in to read small text.' }
    ],
    summary: [
      'The viewport is the visible screen area.',
      'The <meta name="viewport"> tag is absolutely mandatory.',
      'Without it, mobile devices will render your site as a tiny desktop site.'
    ],
    references: commonReferences
  },

  'css_units': {
    isStructured: true,
    title: '56. CSS Units (px, %, em, rem, vh, vw)',
    difficulty: 'Intermediate',
    readingTime: '6 Minutes',
    definition: 'CSS has several different units for expressing a length, size, or distance.',
    whyUseIt: 'Using the right unit is critical for responsive design. Hardcoding pixels (px) creates rigid, broken layouts. Relative units (%, rem, vh) create layouts that scale perfectly on any device.',
    syntax: `selector {
    width: 100%;
    height: 50vh;
    font-size: 2rem;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  html { font-size: 16px; } /* The Root font size */
  
  .box-px { width: 300px; background: red; margin-bottom: 5px;}
  .box-percent { width: 50%; background: blue; color: white; margin-bottom: 5px;}
  
  .text-rem { font-size: 2rem; } /* 2 * 16px = 32px */
  
  .fullscreen-box {
    width: 100vw;  /* 100% of Viewport Width */
    height: 100vh; /* 100% of Viewport Height */
    background: green;
  }
</style>
<body>
  <div class="box-px">Absolute: 300px wide.</div>
  <div class="box-percent">Relative: 50% of parent width.</div>
  
  <p class="text-rem">I am 2rem (32px) tall!</p>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'px (Pixels)', desc: 'Absolute unit. 1px is 1 pixel on the screen. Does not scale.' },
        { code: '% (Percentage)', desc: 'Relative to the PARENT element. (e.g. 50% of the parent\'s width).' },
        { code: 'rem', desc: 'Relative to the ROOT (<html>) font-size. If html is 16px, 2rem = 32px. Best for fonts!' },
        { code: 'em', desc: 'Relative to the PARENT\'S font-size. Can cause compounding math nightmares.' },
        { code: 'vw / vh', desc: 'Viewport Width / Viewport Height. 100vh equals the exact height of the user\'s screen.' }
    ],
    realWorldExample: 'Hero Sections on modern websites often use `height: 100vh;`. This ensures that no matter what phone or monitor the user is on, that top banner will perfectly fill their entire screen upon loading.',
    commonMistakes: [
      { error: 'Using "em" for padding/margins in deeply nested divs.', code: '', suffix: 'Because em is relative to the parent, if a parent is 2em, and a child is 2em, the child is actually 4x the base size. Use "rem" instead to avoid this compounding effect.' }
    ],
    bestPractices: [
      'Use `px` for borders and shadows.',
      'Use `%` or `fr` for layout widths.',
      'Use `rem` for font-sizes and padding/margins.',
      'Use `vh` for full-screen hero sections.'
    ],
    practiceExercise: {
      task: 'Set the font size of an h2 to be exactly 3 times the size of the root html font size.',
      expectedOutput: 'h2 { font-size: 3rem; }',
      solution: `h2 {
    font-size: 3rem;
}`
    },
    quiz: [
      { question: 'Which unit is relative to the font-size of the ROOT (html) element?', options: ['em', 'rem', '%', 'px'], answer: 'rem' },
      { question: 'Which unit is absolute and will never scale when the screen resizes?', options: ['%', 'vw', 'rem', 'px'], answer: 'px' },
      { question: 'Which unit would you use to make a div perfectly match the height of the user\'s screen?', options: ['100%', '100px', '100vh', '100rem'], answer: '100vh' },
      { question: 'What does 50vw mean?', options: ['50% of the Viewport Width', '50% of the Viewport Height', '50 pixels', '50% of the Parent Width'], answer: '50% of the Viewport Width' }
    ],
    interviewQuestions: [
      { q: 'Why is it better to use rem instead of px for font sizes?', a: 'Accessibility. Users can change their browser\'s default font size (e.g., to 24px) if they have bad eyesight. If you use `font-size: 16px`, you override their preference. If you use `font-size: 1rem`, your text scales proportionally based on their 24px base preference.' }
    ],
    summary: [
      'Absolute units (px) are rigid.',
      'Relative units (%, rem, vh) scale dynamically.',
      'rem is the gold standard for typography and spacing.',
      'vh/vw are incredibly useful for screen-sized layouts.'
    ],
    references: commonReferences
  }
};
