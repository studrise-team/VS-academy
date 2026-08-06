const commonReferences = [
  { label: 'W3Schools CSS Transitions', url: 'https://www.w3schools.com/css/css3_transitions.asp' },
  { label: 'MDN Web Docs: CSS Transitions', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions' },
  { label: 'MDN Web Docs: CSS Animations', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations' }
];

export const cssContentBatch9 = {
  'css_transitions': {
    isStructured: true,
    title: '73. CSS Transitions',
    difficulty: 'Intermediate',
    readingTime: '3 Minutes',
    definition: 'CSS transitions allows you to change property values smoothly, over a given duration, rather than having them snap instantly.',
    whyUseIt: 'When a user hovers over a button, changing the color instantly feels jarring and cheap. A smooth, 0.3-second fade transition makes the website feel premium, interactive, and polished.',
    syntax: `selector {
    /* Shorthand: property | duration | timing-function | delay */
    transition: background-color 0.3s ease-in-out;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    
    /* THE TRANSITION */
    /* Tells the browser: if ANY property changes on hover, animate it over 0.5 seconds */
    transition: all 0.5s ease;
  }
  
  /* The state we are transitioning TO */
  button:hover {
    background-color: #008CBA; /* Blue */
    transform: scale(1.1); /* Grow 10% larger */
    box-shadow: 0px 10px 15px rgba(0,0,0,0.2); /* Add a shadow */
  }
</style>
<body>
  <h3>Hover over the button!</h3>
  <button>Hover Me</button>
</body>
</html>`,
    hasLiveOutput: true,
    expectedOutput: `<div>
  <h4 style="margin-top: 0;">Hover over the button!</h4>
  <button style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; font-size: 16px; cursor: pointer; border-radius: 5px; transition: all 0.5s ease;" onmouseover="this.style.backgroundColor='#008CBA'; this.style.transform='scale(1.1)'; this.style.boxShadow='0px 10px 15px rgba(0,0,0,0.2)';" onmouseout="this.style.backgroundColor='#4CAF50'; this.style.transform='scale(1)'; this.style.boxShadow='none';">Hover Me</button>
</div>`,
    explanation: [
        { code: 'transition: all', desc: 'The property we are animating. "all" means if background color, size, OR shadow changes, animate them all. You can also target just one (e.g., transition: background-color).' },
        { code: '0.5s', desc: 'The duration. Half a second.' },
        { code: 'ease', desc: 'The timing function. It starts slow, speeds up in the middle, and ends slow for a natural feel.' }
    ],
    realWorldExample: 'Every modern website uses transitions on `<a>` links and `<button>` elements so they smoothly change color when the user mouses over them. It provides critical micro-feedback that an element is clickable.',
    commonMistakes: [
      { error: 'Putting the transition on the :hover state.', code: 'button:hover { transition: 0.5s; }', suffix: 'If you put the transition on the hover state, it will animate smoothly when you hover ON, but it will instantly snap back when you hover OFF. Always put the transition on the base element (e.g., button).' }
    ],
    bestPractices: [
      'Keep UI transitions fast. 0.2s or 0.3s is the sweet spot. Anything longer than 0.5s makes the website feel sluggish and unresponsive.'
    ],
    practiceExercise: {
      task: 'Write a shorthand transition rule that animates ALL properties over 0.2 seconds.',
      expectedOutput: 'transition: all 0.2s;',
      solution: `transition: all 0.2s;`
    },
    quiz: [
      { question: 'What is the primary purpose of a CSS transition?', options: ['To move elements across the page permanently', 'To smoothly animate property changes (like hover effects) over time', 'To create 3D graphics', 'To load images asynchronously'], answer: 'To smoothly animate property changes (like hover effects) over time' },
      { question: 'Where should the transition property be declared?', options: ['On the :hover pseudo-class', 'On the base element (the normal state)', 'In the HTML tag', 'In the JavaScript file'], answer: 'On the base element (the normal state)' },
      { question: 'What does "transition: all 0.3s;" do?', options: ['It animates only the color', 'It animates every CSS property that changes on hover simultaneously over 0.3 seconds', 'It hides the element', 'It delays the hover effect for 0.3 seconds'], answer: 'It animates every CSS property that changes on hover simultaneously over 0.3 seconds' }
    ],
    interviewQuestions: [
      { q: 'Why is it better to animate opacity and transform rather than width, height, or margin?', a: 'Performance. Animating properties like width, height, or margin forces the browser to recalculate the entire page layout on every single frame of the animation (called "reflow" or "layout thrashing"), which causes lag on cheap mobile devices. Animating `opacity` and `transform` only triggers "compositing", which is offloaded to the GPU and runs at a buttery smooth 60fps.' }
    ],
    summary: [
      'Transitions make property changes smooth.',
      'Shorthand: property duration timing-function delay.',
      'Always apply the transition to the base element, not the :hover state.',
      'Keep UI hover transitions short (0.2s - 0.3s).'
    ],
    references: commonReferences
  },

  'css_transition_property': {
    isStructured: true,
    title: '74. transition-property',
    difficulty: 'Intermediate',
    readingTime: '2 Minutes',
    definition: 'The transition-property specifies the name of the CSS property the transition effect is for.',
    whyUseIt: 'While `transition: all` is easy, it is bad for performance because the browser has to watch every single property for changes. Specifying exactly which property to animate is highly optimized and prevents accidental animations.',
    syntax: `selector {
    /* Only animate the background-color */
    transition-property: background-color; 
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .box {
    width: 100px;
    height: 100px;
    background: red;
    color: white;
    padding: 10px;
    
    /* We ONLY want to animate the background color. */
    /* The width change will snap instantly! */
    transition-property: background-color;
    transition-duration: 2s;
  }
  
  .box:hover {
    background: blue; /* This will fade slowly over 2 seconds */
    width: 300px; /* This will snap instantly! */
  }
</style>
<body>
  <div class="box">Hover Me!</div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'background-color', desc: 'Tells the browser to ONLY calculate animation frames for the background color.' },
        { code: 'Multiple properties', desc: 'You can comma-separate properties if you want to animate a few specific things: `transition-property: background-color, transform;`' }
    ],
    realWorldExample: 'A complex dropdown menu. When you hover, the menu drops down (transform), the background changes (background-color), and the shadow appears (box-shadow). You would specify just those 3 properties to keep the browser running fast, rather than blindly using `all`.',
    commonMistakes: [
      { error: 'Trying to transition display: none.', code: '', suffix: 'You CANNOT transition the "display" property. If you want an element to fade out, you must transition the "opacity" from 1 to 0, and then (optionally) use JavaScript to set display: none after the animation finishes.' }
    ],
    bestPractices: [
      'Avoid `transition-property: all;` in production applications to save CPU/GPU cycles on mobile devices.'
    ],
    practiceExercise: {
      task: 'Write the CSS to specifically tell the browser to ONLY transition the "opacity" property.',
      expectedOutput: 'transition-property: opacity;',
      solution: `transition-property: opacity;`
    },
    quiz: [
      { question: 'Why is it better to specify a transition-property rather than using "all"?', options: ['It is a CSS requirement', 'It improves performance by telling the browser exactly what to calculate', 'It makes the animation look prettier', 'It prevents the browser from crashing'], answer: 'It improves performance by telling the browser exactly what to calculate' },
      { question: 'Can you transition the "display" property (e.g., smoothly fading from block to none)?', options: ['Yes', 'No, the display property cannot be animated. You must use opacity.'], answer: 'No, the display property cannot be animated. You must use opacity.' },
      { question: 'How do you target multiple specific properties?', options: ['Space separate them', 'Use multiple transition-property lines', 'Comma separate them (e.g., color, background-color)', 'You cannot'], answer: 'Comma separate them (e.g., color, background-color)' }
    ],
    interviewQuestions: [
      { q: 'What happens if you transition a property from a hardcoded px value to "auto"?', a: 'CSS transitions cannot interpolate between a number (like 0px) and the keyword "auto". The animation will fail and snap instantly. A common workaround for accordion dropdowns is animating `max-height` from 0px to something massive like 1000px.' }
    ],
    summary: [
      'transition-property isolates which CSS property gets animated.',
      'It improves performance over using "all".',
      'You cannot transition the display property.'
    ],
    references: commonReferences
  },

  'css_transition_duration': {
    isStructured: true,
    title: '75. transition-duration',
    difficulty: 'Beginner',
    readingTime: '1 Minute',
    definition: 'The transition-duration property specifies how many seconds or milliseconds a transition effect takes to complete.',
    whyUseIt: 'Without a duration, the transition happens instantly (0s). This property is absolutely required for any animation to be visible.',
    syntax: `selector {
    transition-duration: 0.5s; /* 0.5 seconds */
    /* OR */
    transition-duration: 500ms; /* 500 milliseconds */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .box {
    width: 100px;
    height: 100px;
    background: coral;
    margin-bottom: 10px;
    transition-property: width;
  }
  
  .fast { transition-duration: 0.2s; }
  .slow { transition-duration: 3s; }
  
  .box:hover {
    width: 300px;
  }
</style>
<body>
  <div class="box fast">Hover: Fast (0.2s)</div>
  <div class="box slow">Hover: Slow (3s)</div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: '0.2s', desc: 'Very fast. Perfect for UI button hovers.' },
        { code: '3s', desc: 'Very slow. Useful for slow background color shifts on a landing page.' }
    ],
    realWorldExample: 'A "Loading" progress bar filling up might have a duration of several seconds to indicate work is being done, while a simple checkbox checking animation should be near-instant (0.15s).',
    commonMistakes: [
      { error: 'Forgetting the "s" or "ms".', code: 'transition-duration: 2;', suffix: 'CSS requires a unit. Just typing "2" is invalid and will break the animation. You must use "2s" or "2000ms".' }
    ],
    bestPractices: [
      'Use 0.15s to 0.3s for micro-interactions (hovering, clicking).',
      'Use 0.4s to 0.6s for macro-interactions (sliding a sidebar menu open).'
    ],
    practiceExercise: {
      task: 'Set the transition duration to 800 milliseconds.',
      expectedOutput: 'transition-duration: 800ms;',
      solution: `transition-duration: 800ms;`
    },
    quiz: [
      { question: 'Which property is REQUIRED for a transition to be visible?', options: ['transition-delay', 'transition-property', 'transition-duration', 'transition-timing-function'], answer: 'transition-duration' },
      { question: 'Which of the following is a valid transition-duration value?', options: ['3', '3seconds', '3s', 'fast'], answer: '3s' },
      { question: 'What is the recommended duration for a simple button hover effect?', options: ['2s', '500ms', '0.2s to 0.3s', '0s'], answer: '0.2s to 0.3s' }
    ],
    interviewQuestions: [
      { q: 'Can you specify different durations for different properties?', a: 'Yes! If you comma-separate your properties, you can also comma-separate your durations. For example: `transition-property: color, background; transition-duration: 0.2s, 1s;` will fade the color in 0.2s, but take 1s to fade the background.' }
    ],
    summary: [
      'transition-duration sets the time length.',
      'Must include the unit "s" (seconds) or "ms" (milliseconds).',
      'Without it, transitions default to 0s (instant).'
    ],
    references: commonReferences
  },

  'css_transition_timing_function': {
    isStructured: true,
    title: '76. transition-timing-function',
    difficulty: 'Advanced',
    readingTime: '3 Minutes',
    definition: 'The transition-timing-function specifies the speed curve of the transition effect.',
    whyUseIt: 'In real life, objects do not start moving at top speed instantly, nor do they stop instantly (physics/momentum). Timing functions allow animations to accelerate and decelerate, making them feel natural instead of robotic.',
    syntax: `selector {
    transition-timing-function: ease-in-out; /* linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .track { width: 400px; border-bottom: 2px solid black; padding-bottom: 5px; margin-bottom: 10px; }
  .box { width: 50px; height: 50px; background: coral; transition: transform 2s; }
  
  .linear { transition-timing-function: linear; }
  .ease { transition-timing-function: ease; } /* The Default */
  .ease-in { transition-timing-function: ease-in; }
  
  /* Trigger the animation when hovering the parent track */
  .track:hover .box { transform: translateX(350px); }
</style>
<body>
  Hover over the lines to watch the speed curves race!
  
  <div class="track">
    <div class="box linear">Linear</div>
    Constant robotic speed from start to finish.
  </div>
  
  <div class="track">
    <div class="box ease">Ease</div>
    Fast start, slows down smoothly at the end. (Best for UI)
  </div>
  
  <div class="track">
    <div class="box ease-in">Ease-In</div>
    Starts slow, accelerates rapidly. (Like a car pulling away)
  </div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'ease', desc: 'Default. Starts slightly slow, speeds up in the middle, slows down beautifully at the end. Best for 99% of UI interactions.' },
        { code: 'linear', desc: 'Constant speed. Looks robotic. Used for continuous looping animations (like a spinning loading wheel).' },
        { code: 'ease-out', desc: 'Starts at top speed, decelerates at the end. Good for elements entering the screen.' }
    ],
    realWorldExample: 'When a modal window pops up on screen, it usually uses `ease-out`. It flies onto the screen fast, and softly decelerates to a stop, ensuring it grabs attention without feeling like it slammed into a wall.',
    commonMistakes: [
      { error: 'Using linear for UI elements.', code: '', suffix: 'Linear feels very unnatural for moving UI elements like sidebars and menus. Always rely on "ease" or "ease-out" for these.' }
    ],
    bestPractices: [
      'Use `cubic-bezier()` to create custom bouncy or snappy spring physics animations. You can generate these at cubic-bezier.com.'
    ],
    practiceExercise: {
      task: 'Set the transition timing function to "linear".',
      expectedOutput: 'transition-timing-function: linear;',
      solution: `transition-timing-function: linear;`
    },
    quiz: [
      { question: 'What does the timing function control?', options: ['The time it takes to complete', 'The speed curve (acceleration/deceleration)', 'The delay before it starts', 'The properties being animated'], answer: 'The speed curve (acceleration/deceleration)' },
      { question: 'Which timing function maintains a constant speed from start to finish?', options: ['ease', 'ease-in', 'linear', 'ease-out'], answer: 'linear' },
      { question: 'Which timing function is the default and looks most natural for hover effects?', options: ['linear', 'ease', 'cubic-bezier', 'step-end'], answer: 'ease' }
    ],
    interviewQuestions: [
      { q: 'What is a cubic-bezier in CSS?', a: 'It is a mathematical curve defined by four points that dictates the exact speed of an animation. The built-in keywords (ease, linear) are actually just predefined cubic-bezier functions. By writing custom cubic-bezier values, you can create animations that overshoot their target and bounce back.' }
    ],
    summary: [
      'Timing functions control acceleration/deceleration.',
      'ease is the default and best for general UI.',
      'linear is best for looping animations like spinners.'
    ],
    references: commonReferences
  },

  'css_transition_delay': {
    isStructured: true,
    title: '77. transition-delay',
    difficulty: 'Beginner',
    readingTime: '1 Minute',
    definition: 'The transition-delay property specifies when the transition effect will start.',
    whyUseIt: 'Allows you to stagger animations. If a user hovers over a dropdown menu, you might want a 0.2s delay before it opens to prevent accidental triggers when the user is just moving their mouse across the screen.',
    syntax: `selector {
    transition-delay: 0.5s; /* Wait half a second before starting */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  .box {
    width: 100px;
    height: 100px;
    background: coral;
    transition: width 1s ease;
    
    /* Do not start the 1s animation until 0.5s has passed! */
    transition-delay: 0.5s; 
  }
  
  .box:hover {
    width: 300px;
  }
</style>
<body>
  <div class="box">Hover Me (Wait for it...)</div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'transition-delay: 0.5s', desc: 'The hover state is triggered instantly, but the browser holds the animation for 0.5 seconds before executing the actual transition.' }
    ],
    realWorldExample: 'Dropdown navigation menus (mega menus). If there is no delay, the massive menu flashes open every time the user accidentally sweeps their mouse past the button. Adding a `0.2s` delay ensures the menu only opens if the user intentionally rests their mouse on the button.',
    commonMistakes: [
      { error: 'Confusing duration and delay in the shorthand.', code: 'transition: width 0.5s 1s;', suffix: 'In the shorthand property, the FIRST time value is ALWAYS the duration. The SECOND time value is ALWAYS the delay.' }
    ],
    bestPractices: [
      'Use delays to stagger entrance animations (e.g., Item 1 fades in instantly, Item 2 fades in after 0.2s, Item 3 after 0.4s) to create a beautiful cascading waterfall effect.'
    ],
    practiceExercise: {
      task: 'Set a delay of 2 seconds before the transition begins.',
      expectedOutput: 'transition-delay: 2s;',
      solution: `transition-delay: 2s;`
    },
    quiz: [
      { question: 'What does transition-delay do?', options: ['Slows down the animation', 'Forces the user to wait to click', 'Pauses the start of the animation for a specified time', 'Makes the animation repeat'], answer: 'Pauses the start of the animation for a specified time' },
      { question: 'In the shorthand `transition: opacity 1s 2s;`, what does the `2s` represent?', options: ['The duration', 'The delay', 'The total time', 'The timing function'], answer: 'The delay' },
      { question: 'Why are small delays used on hover dropdown menus?', options: ['To prevent accidental flashes when the mouse quickly swipes past', 'To make the website load faster', 'To add a 3D effect', 'To force users to read the text'], answer: 'To prevent accidental flashes when the mouse quickly swipes past' }
    ],
    interviewQuestions: [
      { q: 'Can transition-delay be a negative value?', a: 'Yes! A negative delay (e.g., `-1s`) means the transition will execute immediately, but it will begin 1 second INTO the animation. It effectively skips the first 1 second of the transition.' }
    ],
    summary: [
      'transition-delay pauses before starting the animation.',
      'Useful for preventing accidental hover triggers.',
      'Useful for staggering multiple animations in sequence.'
    ],
    references: commonReferences
  },

  'css_animations': {
    isStructured: true,
    title: '78. CSS Animations',
    difficulty: 'Advanced',
    readingTime: '3 Minutes',
    definition: 'CSS Animations make it possible to animate transitions from one CSS style configuration to another without using JavaScript.',
    whyUseIt: 'Transitions only go from Point A to Point B (usually triggered by a hover). Animations can go from Point A to B to C to D, can run automatically on page load, and can loop infinitely (like a loading spinner).',
    syntax: `selector {
    animation-name: slideIn;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  /* 1. Define the animation keyframes */
  @keyframes spinAndColor {
    0%   { transform: rotate(0deg); background-color: red; }
    50%  { transform: rotate(180deg); background-color: yellow; }
    100% { transform: rotate(360deg); background-color: red; }
  }

  /* 2. Apply it to an element */
  .spinner {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 50px;
    
    /* Run the 'spinAndColor' animation over 2 seconds, linearly, forever */
    animation: spinAndColor 2s linear infinite;
  }
</style>
<body>
  <div class="spinner"></div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: '@keyframes', desc: 'This is the blueprint of the animation. It defines the specific CSS styles at specific percentages of the timeline.' },
        { code: 'animation property', desc: 'You attach the blueprint to an HTML element and tell it how long to run, how many times to run, etc.' }
    ],
    realWorldExample: 'A "Loading" icon. You draw a circular div with a border, and apply an infinite rotating animation to it. It spins constantly without needing a single line of JavaScript.',
    commonMistakes: [
      { error: 'Forgetting to name the keyframes.', code: '', suffix: 'The animation-name property MUST perfectly match the name you gave to your @keyframes block.' }
    ],
    bestPractices: [
      'Just like transitions, stick to animating `transform` and `opacity` inside your keyframes for buttery smooth 60fps performance.'
    ],
    practiceExercise: {
      task: 'Write the shorthand animation rule to run an animation named "bounce" for 3 seconds, infinitely.',
      expectedOutput: 'animation: bounce 3s infinite;',
      solution: `animation: bounce 3s infinite;`
    },
    quiz: [
      { question: 'What is the main difference between a Transition and an Animation?', options: ['Transitions require JavaScript', 'Animations can only go from A to B', 'Transitions need a trigger (like :hover) and go A to B. Animations can run automatically, have multiple steps, and loop.', 'There is no difference'], answer: 'Transitions need a trigger (like :hover) and go A to B. Animations can run automatically, have multiple steps, and loop.' },
      { question: 'Which at-rule is used to define the steps of an animation?', options: ['@animation', '@keyframes', '@steps', '@timeline'], answer: '@keyframes' },
      { question: 'Can an animation loop infinitely?', options: ['Yes', 'No, they max out at 999 loops'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'Is it better to use CSS Animations or JavaScript (like GSAP) for animations?', a: 'For simple UI interactions (spinners, hovering, basic slide-ins), CSS animations are vastly superior due to native browser optimization and simplicity. However, for complex, timeline-based, heavily sequenced animations (like a complex interactive web game or storytelling site), JavaScript animation libraries are required for the advanced control.' }
    ],
    summary: [
      'Animations don\'t require a hover trigger; they can run automatically.',
      'They can loop infinitely.',
      'They rely on a two-step process: @keyframes (the blueprint) and the animation property (the execution).'
    ],
    references: commonReferences
  },

  'css_keyframes': {
    isStructured: true,
    title: '79. @keyframes',
    difficulty: 'Advanced',
    readingTime: '4 Minutes',
    definition: 'The @keyframes rule specifies the animation code. It defines what the CSS styles should look like at specific moments during the animation cycle.',
    whyUseIt: 'It gives you absolute control over a timeline. You can make an element shake back and forth by defining styles at 10%, 20%, 30%, etc.',
    syntax: `@keyframes myAnimationName {
    from { background-color: red; }
    to { background-color: yellow; }
}

/* OR USING PERCENTAGES */
@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(10px); }
    50% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
    100% { transform: translateX(0); }
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  @keyframes colorChange {
    /* 0% is the start, 100% is the end */
    0%   { background-color: red;    left: 0px;   top: 0px; }
    25%  { background-color: yellow; left: 200px; top: 0px; }
    50%  { background-color: blue;   left: 200px; top: 200px; }
    75%  { background-color: green;  left: 0px;   top: 200px; }
    100% { background-color: red;    left: 0px;   top: 0px; }
  }

  .box {
    width: 100px;
    height: 100px;
    position: relative;
    /* Connect the box to the keyframes above */
    animation: colorChange 4s infinite;
  }
</style>
<body>
  <div class="box">I travel in a square!</div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'from / to', desc: 'Used for simple 2-step animations. `from` is equivalent to 0%, `to` is equivalent to 100%.' },
        { code: 'Percentages', desc: 'Allows for complex, multi-step animations. The browser automatically calculates the smooth transition (interpolation) between your defined percentage points.' }
    ],
    realWorldExample: 'A "Notification Bell" icon. When you get a new message, you want the bell to ring (shake side-to-side). You write a `@keyframes ring` rule with percentages swaying the rotation from -10deg to 10deg repeatedly, then apply it to the bell icon.',
    commonMistakes: [
      { error: 'Forgetting 0% or 100%.', code: '', suffix: 'While modern browsers are smart and will guess the start/end states based on the element\'s default CSS, it is best practice to always explicitly define the 0% and 100% states to prevent jittering.' }
    ],
    bestPractices: [
      'If you want a looping animation to look seamless, make sure the CSS styles at 0% and 100% are exactly identical. Otherwise, the animation will snap harshly back to the start.'
    ],
    practiceExercise: {
      task: 'Write a basic @keyframes block named "fade" that goes from opacity: 0 to opacity: 1.',
      expectedOutput: '@keyframes fade { from { opacity: 0; } to { opacity: 1; } }',
      solution: `@keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
}`
    },
    quiz: [
      { question: 'What does the @keyframes rule do?', options: ['It links to an external CSS file', 'It creates responsive breakpoints', 'It defines the CSS states at specific percentages of an animation timeline', 'It adds a drop shadow'], answer: 'It defines the CSS states at specific percentages of an animation timeline' },
      { question: 'What is the "from" keyword equivalent to in @keyframes?', options: ['10%', '100%', '0%', '50%'], answer: '0%' },
      { question: 'How do you ensure an infinite looping animation does not visibly "snap" when it restarts?', options: ['Use a 10s duration', 'Make the 0% and 100% states exactly identical', 'Use linear timing', 'You cannot prevent the snap'], answer: 'Make the 0% and 100% states exactly identical' }
    ],
    interviewQuestions: [
      { q: 'Can you animate the "content" property in CSS keyframes to change text?', a: 'No, you cannot smoothly animate content or text strings. Keyframes rely on numerical interpolation (calculating intermediate values). You cannot mathematically calculate the halfway point between the letter "A" and the letter "B".' }
    ],
    summary: [
      '@keyframes is the timeline blueprint for an animation.',
      'Use percentages (0% to 100%) to define multi-step changes.',
      'The browser calculates all the smooth frames in between your percentages automatically.'
    ],
    references: commonReferences
  },

  'css_animation_name_duration': {
    isStructured: true,
    title: '80. animation-name & duration',
    difficulty: 'Beginner',
    readingTime: '2 Minutes',
    definition: 'animation-name specifies the name of the @keyframes binding. animation-duration defines how long the animation takes to complete one cycle.',
    whyUseIt: 'These are the two mandatory properties. Without linking the name, nothing happens. Without a duration, the animation completes instantly (0s).',
    syntax: `selector {
    animation-name: slideIn;
    animation-duration: 2s; /* 2 seconds */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  @keyframes grow {
    from { transform: scale(1); }
    to { transform: scale(2); }
  }

  .box1 {
    width: 50px; height: 50px; background: red; margin: 30px;
    
    /* Connect to the 'grow' keyframes and run for 1 second */
    animation-name: grow;
    animation-duration: 1s;
  }
  
  .box2 {
    width: 50px; height: 50px; background: blue; margin: 30px;
    
    /* Connect to the SAME keyframes, but run for 5 seconds */
    animation-name: grow;
    animation-duration: 5s;
  }
</style>
<body>
  <div class="box1">Fast</div>
  <div class="box2">Slow</div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'Reusability', desc: 'Notice how BOTH boxes use the exact same @keyframes (grow). You only write the blueprint once, but you can apply it to multiple elements with different durations!' }
    ],
    realWorldExample: 'A confetti effect. You write one `@keyframes fall` blueprint. You generate 100 div "confetti" pieces, and assign them all `animation-name: fall`, but give them slightly different `animation-duration` values so they fall at different speeds.',
    commonMistakes: [
      { error: 'Typo in the animation name.', code: '', suffix: 'If your keyframes are named "SlideIn" (capital S), and your animation-name is "slidein" (lowercase), it will fail. It is case-sensitive.' }
    ],
    bestPractices: [
      'Use highly descriptive names for your keyframes (e.g., `fadeInUp`, `pulseHeartbeat`) so they are easily reusable across your entire CSS file.'
    ],
    practiceExercise: {
      task: 'Bind an animation named "spin" to a duration of 1500 milliseconds.',
      expectedOutput: 'animation-name: spin; animation-duration: 1500ms;',
      solution: `animation-name: spin;
animation-duration: 1500ms;`
    },
    quiz: [
      { question: 'Which property connects an HTML element to a @keyframes blueprint?', options: ['animation-link', 'animation-blueprint', 'animation-name', 'keyframe-name'], answer: 'animation-name' },
      { question: 'What happens if you provide an animation-name, but forget the animation-duration?', options: ['It runs for 1 second', 'It defaults to 0s (completes instantly, so nothing appears to happen)', 'It loops infinitely', 'An error is thrown'], answer: 'It defaults to 0s (completes instantly, so nothing appears to happen)' },
      { question: 'Can multiple elements share the same animation-name?', options: ['Yes', 'No, names must be unique per element'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'Is animation-name case sensitive?', a: 'Yes. `@keyframes FadeIn` and `animation-name: fadeIn` will not link together properly. They must match exactly.' }
    ],
    summary: [
      'animation-name links the element to the @keyframes rule.',
      'animation-duration dictates the time of one complete cycle.',
      'You can reuse the same keyframes on many elements.'
    ],
    references: commonReferences
  },

  'css_animation_timing_delay': {
    isStructured: true,
    title: '81. animation-timing & delay',
    difficulty: 'Intermediate',
    readingTime: '2 Minutes',
    definition: 'animation-timing-function specifies the speed curve (ease, linear, etc.). animation-delay specifies when the animation should start.',
    whyUseIt: 'Exactly identical to transition timing and delay, these properties allow you to add realistic physics (acceleration) and sequence multiple animations (staggering).',
    syntax: `selector {
    animation-timing-function: ease-in-out;
    animation-delay: 2s; /* Wait 2 seconds before starting */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  @keyframes slide {
    from { transform: translateX(0); }
    to { transform: translateX(300px); }
  }

  .box {
    width: 50px; height: 50px; margin-bottom: 10px; background: coral;
    animation-name: slide;
    animation-duration: 2s;
  }
  
  .delay {
    background: lightblue;
    /* This box waits 1 second before starting the race! */
    animation-delay: 1s; 
  }
  
  .linear {
    background: lightgreen;
    /* This box moves at a constant robotic speed */
    animation-timing-function: linear; 
  }
</style>
<body>
  <div class="box">Normal (Ease)</div>
  <div class="box linear">Linear (Constant speed)</div>
  <div class="box delay">Delayed by 1s</div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'animation-timing-function', desc: 'Accepts linear, ease, ease-in, ease-out, ease-in-out, and cubic-bezier().' },
        { code: 'animation-delay', desc: 'Accepts seconds (s) or milliseconds (ms).' }
    ],
    realWorldExample: 'A landing page has a title, a subtitle, and a button. You want them all to fade in. You give them all the same `fadeIn` animation. Title delay: 0s. Subtitle delay: 0.2s. Button delay: 0.4s. This creates a beautiful cascading entrance effect on page load.',
    commonMistakes: [
      { error: 'Assuming the element is visible during the delay.', code: '', suffix: 'If your animation fades an element from opacity: 0 to 1, and you set a 2s delay, the element will actually be VISIBLE (opacity: 1 - its default state) during the 2s wait, then disappear and fade in. To fix this, you must use the `animation-fill-mode: backwards;` property (covered next!).' }
    ],
    bestPractices: [
      'Use `steps(4)` as a timing function to create choppy, frame-by-frame animations (great for old-school 8-bit sprite sheets!).'
    ],
    practiceExercise: {
      task: 'Set the animation to wait 500ms before starting, and to use the "ease-out" timing function.',
      expectedOutput: 'animation-delay: 500ms; animation-timing-function: ease-out;',
      solution: `animation-delay: 500ms;
animation-timing-function: ease-out;`
    },
    quiz: [
      { question: 'Which timing function creates a constant, unvarying speed?', options: ['ease', 'ease-in-out', 'linear', 'constant'], answer: 'linear' },
      { question: 'How do you create a staggered entrance effect for 3 items?', options: ['Give them different animation-names', 'Give them increasing animation-delays (e.g., 0s, 0.2s, 0.4s)', 'Put them in different divs', 'Use JavaScript timeouts'], answer: 'Give them increasing animation-delays (e.g., 0s, 0.2s, 0.4s)' },
      { question: 'What is the default timing function?', options: ['linear', 'ease-in', 'ease-out', 'ease'], answer: 'ease' }
    ],
    interviewQuestions: [
      { q: 'How does the steps() timing function work?', a: 'Instead of calculating a smooth interpolation of frames between 0% and 100%, `steps(4)` chops the animation into 4 distinct, instant jumps. It is heavily used in web games to animate CSS sprite sheets (like a character walking) frame-by-frame.' }
    ],
    summary: [
      'timing-function dictates acceleration/deceleration physics.',
      'delay dictates when the animation begins.',
      'Crucial for sequencing multiple animations.'
    ],
    references: commonReferences
  },

  'css_animation_iteration_direction': {
    isStructured: true,
    title: '82. animation-iteration & direction',
    difficulty: 'Advanced',
    readingTime: '3 Minutes',
    definition: 'iteration-count specifies how many times an animation should run. direction specifies whether an animation should play forward, backward, or alternate.',
    whyUseIt: 'Used to create infinite looping animations (like spinners or pulsing notification dots), and "alternate" is the secret to creating smooth back-and-forth animations (like a swinging pendulum) without writing double the keyframes.',
    syntax: `selector {
    animation-iteration-count: infinite; /* 1, 2, 3, infinite */
    animation-direction: alternate; /* normal | reverse | alternate | alternate-reverse */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<style>
  @keyframes pulse {
    from { transform: scale(1); background: red; }
    to { transform: scale(1.5); background: blue; }
  }

  .box {
    width: 50px; height: 50px; border-radius: 50%;
    margin-bottom: 30px;
    
    animation-name: pulse;
    animation-duration: 1s;
    
    /* Play forever */
    animation-iteration-count: infinite;
  }
  
  .normal {
    /* Snaps violently back to the start every time it finishes */
    animation-direction: normal; 
  }
  
  .alternate {
    /* Plays 0 to 100, then plays 100 back to 0. Buttery smooth! */
    animation-direction: alternate; 
  }
</style>
<body>
  <div class="box normal">Normal</div>
  <div class="box alternate">Alternate</div>
</body>
</html>`,
    hasLiveOutput: false,
    expectedOutput: 'N/A',
    explanation: [
        { code: 'iteration-count', desc: 'Can be a specific number (like 3) or the keyword "infinite".' },
        { code: 'direction: alternate', desc: 'The animation cycle goes forwards (0% to 100%), and then runs completely backwards (100% to 0%), resulting in a perfect seamless loop.' }
    ],
    realWorldExample: 'A "Live" pulsing dot on a video player. You write a keyframe that scales the dot from 1 to 1.5. You set `iteration-count: infinite` and `direction: alternate`. It will smoothly pulse in and out forever.',
    commonMistakes: [
      { error: 'Trying to manually write the back-and-forth keyframes.', code: '0% {scale: 1} 50% {scale: 2} 100% {scale: 1}', suffix: 'While this works, it is unnecessary. Just write 0% {scale: 1} and 100% {scale: 2}, and use animation-direction: alternate. Let the browser do the reverse math!' }
    ],
    bestPractices: [
      'Use the shorthand property to save space: `animation: pulse 1s infinite alternate ease-in-out;`'
    ],
    practiceExercise: {
      task: 'Set an animation to run exactly 5 times, and play backwards (reverse).',
      expectedOutput: 'animation-iteration-count: 5; animation-direction: reverse;',
      solution: `animation-iteration-count: 5;
animation-direction: reverse;`
    },
    quiz: [
      { question: 'Which keyword makes an animation run forever?', options: ['forever', 'infinite', 'loop', 'never-stop'], answer: 'infinite' },
      { question: 'What does animation-direction: alternate do?', options: ['It plays a different animation every time', 'It changes the colors automatically', 'It plays the animation forwards, then backwards, then forwards...', 'It reverses the keyframes permanently'], answer: 'It plays the animation forwards, then backwards, then forwards...' },
      { question: 'If iteration-count is set to 2, and direction is alternate, what happens?', options: ['It plays forwards once, and stops', 'It plays forwards once, then backwards once, and stops', 'It plays forwards twice', 'It plays backwards twice'], answer: 'It plays forwards once, then backwards once, and stops' }
    ],
    interviewQuestions: [
      { q: 'What is "animation-fill-mode"?', a: 'When an animation finishes running (e.g., after 1 iteration), the element snaps back to its original pre-animated CSS state. If you want the element to STAY in the final 100% state of the keyframes when it finishes, you apply `animation-fill-mode: forwards;`.' }
    ],
    summary: [
      'iteration-count dictates how many times the loop runs.',
      'infinite is heavily used for spinners/pulses.',
      'alternate creates smooth back-and-forth yo-yo effects.'
    ],
    references: commonReferences
  }
};
