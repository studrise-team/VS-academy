const commonReferences = [
  { label: 'W3Schools Git & GitHub', url: 'https://www.w3schools.com/git/' },
  { label: 'GitHub Official Docs', url: 'https://docs.github.com/' },
  { label: 'Git SCM Documentation', url: 'https://git-scm.com/doc' }
];

export const gitContentBatch4 = {
  'git_add_badges': {
    isStructured: true,
    title: '46. Adding Badges',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Using SVG icons (like shields.io) in your Markdown README files to visually showcase technologies, builds status, licenses, or repo information.',
    whyUseIt: 'Instantly improves the visual aesthetic of your profile or project page, giving it a premium look and summarizing details at a glance.',
    syntax: '![Label](https://img.shields.io/badge/subject-status-color?style=flat&logo=logoName)',
    codeExample: '# Markdown shields examples:\n![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)\n![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)',
    expectedOutput: 'Clean, colored flat badge cards displaying technology names and official logos in the readme.',
    explanation: [
      { code: 'img.shields.io', desc: 'The API service used to generate custom badges dynamically on request.' },
      { code: 'logo=react', desc: 'Queries shields to insert the official React SVG vector logo inside the badge.' }
    ],
    realWorldExample: 'A developer adds badges for `JavaScript`, `React`, and `Tailwind CSS` to the top of their profile README so visitors immediately know their primary tech stack.',
    commonMistakes: [
      { error: 'Adding too many blinking or irrelevant badges', code: '', suffix: 'Keep badges clean and professional. A wall of 50 badges looks cluttered and hard to read.' }
    ],
    bestPractices: ['Use the "for-the-badge" style for profile readmes, and the smaller "flat" style for codebase readmes.'],
    practiceExercise: {
      task: 'Write the Markdown code to render a blue badge showing "Git" with a Git logo.',
      expectedOutput: 'Markdown image tag pointing to shields.io.',
      solution: '![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)'
    },
    quiz: [
      { question: 'What service is commonly used to generate badges for readmes?', options: ['Google Images', 'shields.io', 'npm', 'GitHub Settings'], answer: 'shields.io' },
      { question: 'What syntax is used to embed a badge in Markdown?', options: ['<a> tags', '<img /> tags only', 'Markdown image syntax: ![Alt Text](Image URL)', 'CSS imports'], answer: 'Markdown image syntax: ![Alt Text](Image URL)' },
      { question: 'Can you specify colors on custom shields.io badges?', options: ['No, colors are randomized', 'Yes, by appending a hex code or color name to the API URL query', 'Only grey and green', 'Only if you buy a premium plan'], answer: 'Yes, by appending a hex code or color name to the API URL query' }
    ],
    interviewQuestions: [
      { q: 'What are dynamic status badges and how do they work in READMEs?', a: 'They are badges that dynamically update their content, such as a "Build passing/failing" badge. The URL points to a GitHub Action run, and when the workflow runs, GitHub updates the image file automatically.' }
    ],
    summary: ['Enriches Markdown readmes.', 'Uses shields.io API links.', 'Keeps layouts clean and scannable.'],
    references: commonReferences
  },

  'git_stats_cards': {
    isStructured: true,
    title: '47. GitHub Stats Cards',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Dynamic SVG panels embedded in your profile README that connect to public APIs to summarize your commits, stars, contributions, and top languages.',
    whyUseIt: 'Adds an interactive dashboard directly to your profile, proving your active engagement and coding stats without manual updating.',
    syntax: '[![Stats](https://github-readme-stats.vercel.app/api?username=your_username&show_icons=true)](https://github.com/anuraghazra/github-readme-stats)',
    codeExample: '# Stats Card Markdown:\n[![Jane\'s Stats](https://github-readme-stats.vercel.app/api?username=janedoe&show_icons=true&theme=radical)](https://github.com/anuraghazra/github-readme-stats)',
    expectedOutput: 'A styled statistics card showing total stars, commits, PRs, and issues in a box.',
    explanation: [
      { code: 'theme=radical', desc: 'Applies a curated color palette (dark slate/red) to match your profile theme.' },
      { code: 'show_icons=true', desc: 'Includes small glyph icons next to metric numbers (star, code branch).' }
    ],
    realWorldExample: 'A candidate includes a "Most Used Languages" pie chart widget on their GitHub profile, instantly showing they write 80% TypeScript and 20% Rust.',
    commonMistakes: [
      { error: 'Forgetting to replace "your_username" in the template link', code: '', suffix: 'If you paste the template without editing the query, the card will throw an error or display someone else\'s stats.' }
    ],
    bestPractices: ['Choose a card theme that coordinates with your GitHub dark/light mode choice.'],
    practiceExercise: {
      task: 'Write the markdown code to embed a top languages card for user `octocat`.',
      expectedOutput: 'Link pointing to vercel app endpoint with username=octocat.',
      solution: '[![Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=octocat)](https://github.com/anuraghazra/github-readme-stats)'
    },
    quiz: [
      { question: 'What is a GitHub Stats Card?', options: ['A payment card', 'A dynamically generated image/SVG showing metrics like commits, stars, and PRs', 'A physical certificate', 'A dashboard widget for CPU usage'], answer: 'A dynamically generated image/SVG showing metrics like commits, stars, and PRs' },
      { question: 'How do these cards keep their statistics up to date?', options: ['You must edit the file daily', 'The API queries the GitHub database in real-time when the profile is loaded', 'GitHub updates them monthly', 'They don\'t update'], answer: 'The API queries the GitHub database in real-time when the profile is loaded' },
      { question: 'Can you customize the theme and colors of these stats cards?', options: ['No', 'Yes, by passing a theme parameter in the API query string', 'Only via custom CSS stylesheets', 'Only if you download the source code'], answer: 'Yes, by passing a theme parameter in the API query string' }
    ],
    interviewQuestions: [
      { q: 'How do you secure your private repository commits from being counted in public stats cards?', a: 'GitHub Readme Stats has a `count_private=true` parameter. You must authorize the vercel server to access your account tokens, otherwise private commits are excluded by default.' }
    ],
    summary: ['Displays real-time coding metrics.', 'Embeds as Markdown images.', 'Configured via query parameters.'],
    references: commonReferences
  },

  'git_what_is_pages': {
    isStructured: true,
    title: '48. What is GitHub Pages?',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A static website hosting service that takes HTML, CSS, and JavaScript files directly from a repository on GitHub and publishes them as a live website.',
    whyUseIt: 'Allows you to deploy your frontend projects (portfolios, landing pages, static apps) for free, with zero setup or hosting fees.',
    syntax: '-- Free hosting service\n-- URL format: username.github.io/repository-name',
    codeExample: '# Go to Settings -> Pages -> Build and deployment\nSource: Deploy from a branch\nBranch: main / (root)',
    expectedOutput: 'Your site is live at: https://username.github.io/repo/',
    explanation: [
      { code: 'Static hosting', desc: 'Only processes HTML/CSS/JS. Server-side code (Node, Python, PHP, databases) CANNOT be run on GitHub Pages.' }
    ],
    realWorldExample: 'A student builds their personal resume page with HTML and CSS. They push it to GitHub, enable GitHub Pages, and put the live URL on their resume.',
    commonMistakes: [
      { error: 'Trying to deploy Node/PHP backend code', code: '', suffix: 'GitHub Pages is ONLY for static files. If your project has a `server.js` or uses Express/databases, it will NOT run. Use platforms like Render or Heroku instead.' }
    ],
    bestPractices: ['Name your main HTML file exactly `index.html` (lowercase) in the root directory so Pages knows it is the home page.'],
    practiceExercise: {
      task: 'Check the URL format for a repository named `my-portfolio` owned by user `johndoe`.',
      expectedOutput: 'johndoe.github.io/my-portfolio',
      solution: 'https://johndoe.github.io/my-portfolio'
    },
    quiz: [
      { question: 'What is GitHub Pages?', options: ['A text editing website', 'A free static web hosting service directly integrated into GitHub repositories', 'A database storage engine', 'An advertising agency'], answer: 'A free static web hosting service directly integrated into GitHub repositories' },
      { question: 'Which files CANNOT be run on GitHub Pages?', options: ['index.html', 'style.css', 'app.js', 'server.js (Node.js backend)'], answer: 'server.js (Node.js backend)' },
      { question: 'What name must your main entry file have to load automatically on the web?', options: ['main.html', 'index.html', 'home.js', 'default.css'], answer: 'index.html' }
    ],
    interviewQuestions: [
      { q: 'Is it possible to host multiple static websites on a single GitHub account using Pages?', a: 'Yes. You can have one primary user site (named `username.github.io`) and unlimited project sites (accessible via `username.github.io/repository-name`).' }
    ],
    summary: ['Free static file web hosting.', 'Requires `index.html` in the root folder.', 'No backend server capabilities.'],
    references: commonReferences
  },

  'git_deploy_html': {
    isStructured: true,
    title: '49. Deploying HTML Website',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The process of configuring and enabling GitHub Pages on a simple repository containing HTML, CSS, and JS files to make it publicly accessible on the web.',
    whyUseIt: 'To deploy static landing pages, resume pages, or vanilla Javascript games in seconds.',
    syntax: '1. Commit files to main branch\n2. Open Repository on GitHub -> Settings -> Pages\n3. Set Branch to: main -> Save',
    codeExample: '# Standard HTML project structure:\nindex.html\nstyle.css\nscript.js',
    expectedOutput: 'GitHub generates a live URL and deploys your HTML page within 1-2 minutes.',
    explanation: [
      { code: 'Branch setting', desc: 'Tells Pages which branch to scan for files (usually main or gh-pages).' }
    ],
    realWorldExample: 'A web developer commits a responsive portfolio layout, goes to Settings -> Pages, selects `main` branch, and the website goes live instantly.',
    commonMistakes: [
      { error: 'Case sensitivity in filenames', code: '', suffix: 'Windows is case-insensitive, but GitHub Pages servers (Linux) are case-sensitive. If you write `<img src="Photo.JPG">` but the file is named `photo.jpg`, the image will break on the live site.' }
    ],
    bestPractices: ['Ensure all links in your HTML use relative paths (e.g., `./about.html`) so they resolve correctly on sub-paths.'],
    practiceExercise: {
      task: 'Write a basic HTML hello world file, commit it, and deploy it to Pages.',
      expectedOutput: 'Website is live and shows Hello World on the browser screen.',
      solution: 'Create index.html -> Commit and Push -> Settings -> Pages -> Select main -> Deploy'
    },
    quiz: [
      { question: 'What branch is typically selected to deploy a standard static website?', options: ['test', 'main', 'development', 'None'], answer: 'main' },
      { question: 'How long does a deployment take to go live after enabling settings?', options: ['24 Hours', 'Usually 1 to 2 minutes', 'Instantly in 1 millisecond', '3 days'], answer: 'Usually 1 to 2 minutes' },
      { question: 'Why might an image link work locally on your PC but break on GitHub Pages?', options: ['Pages doesn\'t support images', 'Case sensitivity mismatch in filenames (e.g., Photo.jpg vs photo.jpg)', 'The image is too high resolution', 'Pages requires png format only'], answer: 'Case sensitivity mismatch in filenames (e.g., Photo.jpg vs photo.jpg)' }
    ],
    interviewQuestions: [
      { q: 'How does GitHub Pages handle routing for Single Page Applications (SPAs) like React Router when a user refreshes the page?', a: 'Pages is a static host. If a user refreshes `/about`, the server returns a 404 because the file `about` doesn\'t exist. You must configure a custom `404.html` fallback or use HashRouter to bypass this.' }
    ],
    summary: ['Very easy static deployment.', 'Select branch in settings.', 'Verify relative links and file casing.'],
    references: commonReferences
  },

  'git_deploy_react': {
    isStructured: true,
    title: '50. Deploying React Website',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Configuring a build pipeline (like Vite or Create React App) to compile the React components and deploy the static build folder to GitHub Pages.',
    whyUseIt: 'Unlike raw HTML, React code must be compiled (built) before browsers can read it. You need a build step to compile and deploy.',
    syntax: '# Install gh-pages package:\nnpm install gh-pages --save-dev\n\n# Configure package.json scripts:\n"predeploy": "npm run build",\n"deploy": "gh-pages -d dist"',
    codeExample: '# package.json modification:\n{\n  "homepage": "https://username.github.io/repo-name",\n  "scripts": {\n    "predeploy": "npm run build",\n    "deploy": "gh-pages -d dist"\n  }\n}',
    expectedOutput: 'Running `npm run deploy` builds the app and uploads it to a `gh-pages` branch on GitHub.',
    explanation: [
      { code: 'homepage', desc: 'Required so React knows the root URL path to fetch static chunks (JS/CSS) from.' },
      { code: 'gh-pages -d dist', desc: 'Deploys the contents of the `dist` folder to the `gh-pages` branch in your repository.' }
    ],
    realWorldExample: 'A React student configures the `gh-pages` script, runs `npm run deploy`, and their React dashboard app goes live.',
    commonMistakes: [
      { error: 'Forgetting to specify the "homepage" field', code: '', suffix: 'If you omit the "homepage" property, the browser will look for javascript bundle files at the root domain (`username.github.io`) instead of your project subfolder, causing a blank screen.' }
    ],
    bestPractices: ['Ensure you configure base paths correctly in your build configuration tool (like `base: "/repo-name/"` in `vite.config.js`).'],
    practiceExercise: {
      task: 'Install the `gh-pages` module and configure the deploy scripts in your package.json.',
      expectedOutput: 'Deploy scripts present in package.json.',
      solution: 'npm install gh-pages --save-dev && Add scripts block in package.json.'
    },
    quiz: [
      { question: 'What npm package is commonly used to automate React deployment to GitHub Pages?', options: ['react-deploy', 'gh-pages', 'pages-deploy', 'npm-pages'], answer: 'gh-pages' },
      { question: 'Why do we need a "predeploy" script in package.json?', options: ['To test internet connection', 'To automatically run the build command (npm run build) before uploading files', 'To clear history', 'To format files'], answer: 'To automatically run the build command (npm run build) before uploading files' },
      { question: 'What configuration is needed in `vite.config.js` for subfolder deployments?', options: ['A backend url', 'Setting the base option to "/repository-name/"', 'Setting base to "/"', 'None'], answer: 'Setting the base option to "/repository-name/"' }
    ],
    interviewQuestions: [
      { q: 'What branch does the `gh-pages` package create and push the built bundle to?', a: 'It creates a branch named `gh-pages` containing only the compiled static production assets (from `build/` or `dist/` folders) and sets GitHub Pages to deploy from that branch.' }
    ],
    summary: ['React must be built before hosting.', 'Use `gh-pages` npm package.', 'Specify `homepage` and `base` config.'],
    references: commonReferences
  },

  'git_custom_domain': {
    isStructured: true,
    title: '51. Custom Domain',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'Mapping a custom web domain (like `www.yourname.com`) to replace the default `username.github.io` URL for your GitHub Pages website.',
    whyUseIt: 'To build a personal brand and look highly professional. A custom domain removes the "github.io" label.',
    syntax: '-- GitHub Settings -> Pages -> Custom Domain\n-- DNS settings: Configure CNAME and A records at registrar',
    codeExample: '# In DNS Registrar settings (A Records pointing to GitHub IPs):\n185.199.108.153\n185.199.109.153\n185.199.110.153\n185.199.111.153',
    expectedOutput: 'Your custom domain redirects visitors to your GitHub Pages code securely (via HTTPS).',
    explanation: [
      { code: 'CNAME file', desc: 'A plain text file containing your domain name generated by GitHub in your repository root when setting a domain.' }
    ],
    realWorldExample: 'A designer buys `myportfolio.com` on GoDaddy. They configure A records pointing to GitHub, add `myportfolio.com` to Pages settings, and link the site.',
    commonMistakes: [
      { error: 'Forgetting to check the "Enforce HTTPS" box', code: '', suffix: 'Always check "Enforce HTTPS" to ensure visitors connect securely and browsers don\'t throw security alerts.' }
    ],
    bestPractices: ['Wait up to 24 hours for DNS changes to propagate globally before testing the domain connection.'],
    practiceExercise: {
      task: 'Map out the DNS records needed to connect a custom domain to GitHub Pages.',
      expectedOutput: 'A list of 4 A-records and 1 CNAME record.',
      solution: 'Configure 185.199.x.x IPs for A records and username.github.io for CNAME.'
    },
    quiz: [
      { question: 'What type of DNS record maps your root domain (e.g., example.com) to GitHub\'s servers?', options: ['CNAME', 'A Records pointing to GitHub IPs', 'MX Records', 'TXT Records'], answer: 'A Records pointing to GitHub IPs' },
      { question: 'What file does GitHub create in your repo root when you add a custom domain via settings?', options: ['domain.json', 'CNAME (with no extension)', 'dns.txt', '.gitignore'], answer: 'CNAME (with no extension)' },
      { question: 'Why enforce HTTPS on a custom domain?', options: ['To make it load faster', 'To secure data transfer and avoid browsers warning users about insecure sites', 'It is required by law', 'To make it responsive'], answer: 'To secure data transfer and avoid browsers warning users about insecure sites' }
    ],
    interviewQuestions: [
      { q: 'How does GitHub Pages handle CNAME conflicts?', a: 'A domain name can only be used by one GitHub repository globally. If a user tries to add a custom domain already mapped by another user, GitHub blocks it and requires proof of domain ownership via TXT records.' }
    ],
    summary: ['Replaces `github.io` with custom URLs.', 'Requires DNS configuration at your registrar.', 'Always check "Enforce HTTPS".'],
    references: commonReferences
  },

  'git_update_live_site': {
    isStructured: true,
    title: '52. Updating Live Website',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Making changes to your local files, committing them, and pushing to the tracked branch to trigger an automatic redeployment of your live website.',
    whyUseIt: 'Ensures your hosted website automatically updates whenever you modify, fix, or add code to your repository.',
    syntax: 'git add .\ngit commit -m "Update text"\ngit push origin main',
    codeExample: '# Make changes locally, then run:\ngit add index.html\ngit commit -m "Update bio description text"\ngit push origin main',
    expectedOutput: 'GitHub Pages re-runs the deployment workflow and publishes updates in 1 minute.',
    explanation: [
      { code: 'git push', desc: 'Triggers the internal GitHub Pages builder to rebuild the site automatically.' }
    ],
    realWorldExample: 'You add a new project to your local HTML file. You commit and push. In a minute, you refresh your live domain and see the new project listed.',
    commonMistakes: [
      { error: 'Assuming local edits go live immediately without pushing', code: '', suffix: 'Editing files on your local computer does not change the internet. You MUST push commits to GitHub to update the site.' }
    ],
    bestPractices: ['Monitor the "Actions" tab on your repository to verify that the Pages build and deployment workflow completes successfully.'],
    practiceExercise: {
      task: 'Edit your index.html homepage title, commit, push, and inspect the Actions tab.',
      expectedOutput: 'Actions tab displays a green checkmark indicating successful redeployment.',
      solution: 'Modify file -> Push changes -> Check Repository -> Actions'
    },
    quiz: [
      { question: 'How do you update a website hosted on GitHub Pages?', options: ['By emailing GitHub support', 'By committing and pushing changes to the deployed branch (like main)', 'By restarting your local server', 'By recreating the repository'], answer: 'By committing and pushing changes to the deployed branch (like main)' },
      { question: 'Where can you monitor the real-time status of your website deployment build?', options: ['In the Issues tab', 'In the Actions tab', 'In your local terminal only', 'In the Settings tab'], answer: 'In the Actions tab' },
      { question: 'What indicates a successful deployment in the Actions log?', options: ['A red cross', 'A yellow circle', 'A green checkmark next to the "pages-build-deployment" workflow', 'A warning bell'], answer: 'A green checkmark next to the "pages-build-deployment" workflow' }
    ],
    interviewQuestions: [
      { q: 'How would you revert a live GitHub Pages site to a previous commit state?', a: 'I would run `git revert <commit-hash>` to create a new commit reversing the changes, and push it, or force-push an older commit hash to the deployed branch to trigger a redeployment.' }
    ],
    summary: ['Pushing commits triggers deployments.', 'Monitor progress via the Actions tab.', 'Updates take roughly a minute.'],
    references: commonReferences
  },

  'git_intro_ci_cd': {
    isStructured: true,
    title: '53. Introduction to CI/CD',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'Continuous Integration (CI) and Continuous Delivery/Deployment (CD) is a software engineering practice where code changes are automatically tested, built, and deployed to production.',
    whyUseIt: 'Prevents buggy code from reaching users. It replaces manual testing and manual server uploads with fully automated scripts.',
    syntax: 'CI = Automated Testing & Building\nCD = Automated Deployment',
    codeExample: '# Typical CI/CD Pipeline:\nDeveloper pushes code -> Tests run automatically (CI) -> If tests pass, deploy to production (CD)',
    expectedOutput: 'Automated validation checks guarding the code pipeline.',
    explanation: [
      { code: 'Continuous Integration', desc: 'Merging code multiple times a day, triggering automated unit and integration tests.' },
      { code: 'Continuous Deployment', desc: 'Deploying the code changes automatically as soon as they pass tests.' }
    ],
    realWorldExample: 'Netflix uses CI/CD. When a developer pushes a fix, automated tools test it, build it, and deploy it to users without manual QA intervention.',
    commonMistakes: [
      { error: 'Skipping testing in the CI phase', code: '', suffix: 'Deploying automatically (CD) without testing (CI) is dangerous, as you will automatically push bugs and breakages to production.' }
    ],
    bestPractices: ['Always write automated unit tests to protect your CI/CD pipeline from deploying broken builds.'],
    practiceExercise: {
      task: 'Draft a visual diagram or list representing the steps in a standard CI/CD pipeline.',
      expectedOutput: 'Commit -> Build -> Test -> Release -> Deploy.',
      solution: 'Plan: Code -> Push -> Run tests -> Package -> Deploy.'
    },
    quiz: [
      { question: 'What does CI stand for?', options: ['Computer Integrity', 'Continuous Integration', 'Code Inspector', 'Continuous Installer'], answer: 'Continuous Integration' },
      { question: 'What does CD stand for in deployment?', options: ['Computer Disk', 'Continuous Delivery or Continuous Deployment', 'Code Designer', 'Database Collector'], answer: 'Continuous Delivery or Continuous Deployment' },
      { question: 'Why is CI/CD important?', options: ['It uses less RAM', 'It automates code testing and deployment, reducing manual errors and speed-to-market', 'It replaces Git completely', 'It is a programming language'], answer: 'It automates code testing and deployment, reducing manual errors and speed-to-market' }
    ],
    interviewQuestions: [
      { q: 'Explain the difference between Continuous Delivery and Continuous Deployment.', a: 'Continuous Delivery compiles and tests code automatically but requires manual approval (a human clicking "Deploy") to release. Continuous Deployment automates the release step, pushing code directly to production without manual intervention.' }
    ],
    summary: ['Automates builds, tests, and deploys.', 'CI verifies code quality.', 'CD ships code to production.'],
    references: commonReferences
  },

  'git_actions_overview': {
    isStructured: true,
    title: '54. GitHub Actions Overview',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'GitHub\'s built-in automation and CI/CD platform. It allows you to run custom shell commands, test scripts, and build tasks inside virtual containers managed by GitHub.',
    whyUseIt: 'To build automated workflows directly inside your repository without needing third-party servers like Jenkins or CircleCI.',
    syntax: '-- Configured using YAML files\n-- Files reside in: .github/workflows/',
    codeExample: '# Simple workflow file structure (.github/workflows/main.yml):\nname: My CI\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - run: echo "Running tests..."',
    expectedOutput: 'GitHub spins up a Linux runner, executes commands, and reports success.',
    explanation: [
      { code: 'on: [push]', desc: 'Trigger event. Tells GitHub to run this workflow every time someone pushes code.' },
      { code: 'runs-on', desc: 'Specifies the operating system of the virtual machine running the script.' }
    ],
    realWorldExample: 'An open-source team uses GitHub Actions. Whenever a contributor submits a PR, a workflow spins up, runs ESLint and Jest tests, and flags if the PR has errors.',
    commonMistakes: [
      { error: 'Indentation errors in YAML configurations', code: '', suffix: 'YAML relies strictly on spacing. Tabs are not allowed and wrong spacing will prevent the workflow from executing.' }
    ],
    bestPractices: ['Start with pre-built GitHub actions templates for Node, Python, or Java to avoid writing complex YAML from scratch.'],
    practiceExercise: {
      task: 'Create the directory path `.github/workflows/` inside a local repository.',
      expectedOutput: 'Subfolders nested inside the project root.',
      solution: 'mkdir -p .github/workflows'
    },
    quiz: [
      { question: 'What file format is used to write GitHub Action configurations?', options: ['JSON', 'XML', 'YAML', 'HTML'], answer: 'YAML' },
      { question: 'Where must GitHub Action workflow files be saved?', options: ['In the root folder', 'Inside .github/workflows/', 'Inside src/', 'In Settings'], answer: 'Inside .github/workflows/' },
      { question: 'What event triggers a workflow if configured with `on: [push]`?', options: ['Opening an issue', 'Pushing commits to the repository', 'Inviting a collaborator', 'Deleting a branch'], answer: 'Pushing commits to the repository' }
    ],
    interviewQuestions: [
      { q: 'What is a "runner" in GitHub Actions?', a: 'A runner is a virtual machine (virtual container running Ubuntu, Windows, or macOS) that GitHub provisions to execute the jobs defined in your workflow file.' }
    ],
    summary: ['Native GitHub CI/CD platform.', 'Uses YAML configuration files.', 'Runs scripts inside clean virtual machines.'],
    references: commonReferences
  },

  'git_first_workflow': {
    isStructured: true,
    title: '55. Creating First Workflow',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'Writing and pushing a basic YAML configuration to execute shell scripts on GitHub when changes are made.',
    whyUseIt: 'To learn how to structure jobs, step blocks, triggers, and inspect run logs on GitHub.',
    syntax: 'name: CI\non: [push]\njobs:\n  say-hello:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Hello step\n        run: echo "Hello World!"',
    codeExample: '# Create .github/workflows/hello.yml:\nname: Greeting\non: [push]\njobs:\n  greet:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Print welcome\n        run: echo "Welcome to GitHub Actions!"',
    expectedOutput: 'In the Actions tab, a green workflow run displays the output: "Welcome to GitHub Actions!".',
    explanation: [
      { code: 'jobs', desc: 'A collection of tasks that run on the same runner. Workflows can have multiple parallel jobs.' },
      { code: 'steps', desc: 'Individual sequential commands executed one-by-one inside the job.' }
    ],
    realWorldExample: 'A developer pushes a script. GitHub Actions triggers `Greeting`, prints diagnostics, and logs execution times for debugging.',
    commonMistakes: [
      { error: 'Mispelling YAML keys', code: '', suffix: 'Keywords are case-sensitive. Writing `Runs-on` instead of `runs-on` will crash the workflow interpreter.' }
    ],
    bestPractices: ['Give each step a clear, human-readable name using the `name` property to make logs easy to read.'],
    practiceExercise: {
      task: 'Write a workflow that prints "Building App..." and run it by pushing it to GitHub.',
      expectedOutput: 'Actions logs display "Building App..." under the step name.',
      solution: 'Create YAML with run: echo "Building App..." -> Push to github.'
    },
    quiz: [
      { question: 'What is the root property that defines the workflow name?', options: ['title', 'name', 'job', 'id'], answer: 'name' },
      { question: 'Under which key do you specify the commands to run?', options: ['execute', 'command', 'run', 'script'], answer: 'run' },
      { question: 'Can you run multiple commands in a single step using the `run` key?', options: ['No', 'Yes, by using the pipe character (|) and writing commands on new lines', 'Only on Windows runners', 'Only if they are comments'], answer: 'Yes, by using the pipe character (|) and writing commands on new lines' }
    ],
    interviewQuestions: [
      { q: 'How do you tell a step in your workflow to download your repository code onto the runner?', a: 'I would use the official checkout action by adding the step: `- uses: actions/checkout@v4`.' }
    ],
    summary: ['Creates automated pipelines.', 'Uses steps and run blocks.', 'Inspect output logs in the Actions tab.'],
    references: commonReferences
  },

  'git_auto_build': {
    isStructured: true,
    title: '56. Automatic Build',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'A workflow that checks out your project, installs dependencies, and runs the build command (e.g. webpack, vite compile) to ensure there are no compilation errors.',
    whyUseIt: 'Ensures that a developer doesn\'t push broken code or missing import syntax that prevents the app from compiling.',
    syntax: 'name: Build Test\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm install\n      - run: npm run build',
    codeExample: '# Complete build validation script:\nname: Node CI\non: [push, pull_request]\njobs:\n  build-app:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Setup Node\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - name: Install dependencies\n        run: npm ci\n      - name: Build project\n        run: npm run build',
    expectedOutput: 'GitHub Actions successfully installs libraries and outputs compiled code without warnings or crashes.',
    explanation: [
      { code: 'actions/setup-node@v4', desc: 'An official, pre-made action that configures Node.js on the clean virtual machine.' },
      { code: 'npm ci', desc: 'Clean Install. Installs dependencies based strictly on `package-lock.json` for fast, reproducible CI builds.' }
    ],
    realWorldExample: 'A developer submits a PR. A GitHub action automatically checks out the code, compiles it, and validates it. If there is a missing semicolon that breaks the build, the action fails and alerts the developer.',
    commonMistakes: [
      { error: 'Not pushing package-lock.json', code: '', suffix: 'If you don\'t commit package-lock.json, `npm ci` will fail. Always commit lock files to ensure matching dependencies.' }
    ],
    bestPractices: ['Run builds on both `push` and `pull_request` triggers to protect your codebase branches.'],
    practiceExercise: {
      task: 'Write a workflow that sets up Node.js v18 and executes `npm install`.',
      expectedOutput: 'A YAML file executing correct npm installation steps.',
      solution: 'Configure setup-node with node-version: 18 -> run: npm install.'
    },
    quiz: [
      { question: 'What does `npm ci` do in a build pipeline?', options: ['Initializes npm', 'Installs packages cleanly using package-lock.json for absolute consistency', 'Compiles React files', 'Compiles C# code'], answer: 'Installs packages cleanly using package-lock.json for absolute consistency' },
      { question: 'Which action downloads the source code onto the GitHub actions virtual machine?', options: ['actions/download', 'actions/checkout@v4', 'setup-node', 'git init'], answer: 'actions/checkout@v4' },
      { question: 'What indicates a failed build in GitHub Actions?', options: ['A warning email', 'A red cross next to the workflow run in the Actions tab', 'A browser alert', 'A computer beep'], answer: 'A red cross next to the workflow run in the Actions tab' }
    ],
    interviewQuestions: [
      { q: 'Why is it critical to validate the build step in Continuous Integration before merging code?', a: 'It guarantees the code is free of compilation errors, missing modules, or syntax mistakes that would break the production environment, ensuring main branch stability.' }
    ],
    summary: ['Checks compiler safety.', 'Uses `actions/checkout` and setup actions.', 'Protects branches from broken builds.'],
    references: commonReferences
  },

  'git_auto_deploy': {
    isStructured: true,
    title: '57. Automatic Deployment',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Automating the upload/deployment of build artifacts to a web hosting provider (like GitHub Pages, AWS, Firebase, or Render) once code builds successfully.',
    whyUseIt: 'Allows you to push code and see updates live on your site immediately without manually running build and deploy scripts.',
    syntax: '# Uses GitHub Pages deploy action:\n- name: Deploy to GitHub Pages\n  uses: JamesIves/github-pages-deploy-action@v4\n  with:\n    folder: dist\n    branch: gh-pages',
    codeExample: '# Complete Build & Deploy YAML:\nname: Deploy Site\non:\n  push:\n    branches: [main]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm install\n      - run: npm run build\n      - name: Auto-deploy\n        uses: JamesIves/github-pages-deploy-action@v4\n        with:\n          folder: dist\n          branch: gh-pages',
    expectedOutput: 'Successful build triggers JamesIves deploy script, which pushes compiled assets to gh-pages branch and updates site.',
    explanation: [
      { code: 'JamesIves/...@v4', desc: 'A popular open-source community action that automates pushing files to specific branches.' },
      { code: 'folder: dist', desc: 'Tells the action to copy the contents of the `dist` build directory.' }
    ],
    realWorldExample: 'A developer pushes a blog post markdown file. Actions builds the static site, runs the deploy task, and updates the blog URL without manual file transfers.',
    commonMistakes: [
      { error: 'Insufficient write permissions for the action token', code: '', suffix: 'By default, GitHub Actions might have read-only tokens. You must go to Repository Settings -> Actions -> General -> Workflow permissions -> Select "Read and write permissions" to let it deploy.' }
    ],
    bestPractices: ['Secure all API tokens or deployment keys using "GitHub Actions Secrets" (encrypted variables) instead of hardcoding them.'],
    practiceExercise: {
      task: 'Locate where Workflow Permissions are configured in GitHub Settings.',
      expectedOutput: 'Identify the "Read and write permissions" selection under Actions settings.',
      solution: 'Navigate to Settings -> Actions -> General -> Workflow permissions.'
    },
    quiz: [
      { question: 'What must you enable in Repository settings to allow Actions to push code back to a branch (like gh-pages)?', options: ['Premium account', 'Workflow permissions -> Read and write permissions', 'Public database link', 'None'], answer: 'Workflow permissions -> Read and write permissions' },
      { question: 'Where do you securely store server passwords or API keys needed during actions deployment?', options: ['In the YAML file directly', 'In GitHub Actions Secrets (Settings -> Secrets and variables -> Actions)', 'In README.md', 'In .gitignore only'], answer: 'In GitHub Actions Secrets (Settings -> Secrets and variables -> Actions)' },
      { question: 'Which branch is target branch in the deployment block code example?', options: ['main', 'dist', 'gh-pages', 'master'], answer: 'gh-pages' }
    ],
    interviewQuestions: [
      { q: 'How do you reference an encrypted secret in your workflow YAML file?', a: 'I would use the secrets context syntax: `${{ secrets.SECRET_NAME }}`.' }
    ],
    summary: ['Fully automates deployment.', 'Uses specialized deploy actions.', 'Always secure API keys in Settings Secrets.'],
    references: commonReferences
  },

  'git_what_is_open_source': {
    isStructured: true,
    title: '58. What is Open Source?',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Open Source Software (OSS) is code that is made publicly available for anyone to view, modify, redistribute, and collaborate on.',
    whyUseIt: 'Promotes peer-review and collaboration. Operating systems like Linux, databases like MySQL, and frameworks like React are open-source.',
    syntax: '-- Public source code\n-- Collaborative ecosystem\n-- Licensing rules (MIT, GPL)',
    codeExample: '# Open source components:\n- Open code (browse files on GitHub)\n- Public issues (bug checklists)\n- Community collaboration',
    expectedOutput: 'Global developer communities collaborating transparently.',
    explanation: [
      { code: 'Transparency', desc: 'Allows developers to verify security and code implementation details directly.' }
    ],
    realWorldExample: 'Linux was started as a student project. Thanks to open-source contributions from thousands of global programmers, it now powers 90% of the internet.',
    commonMistakes: [
      { error: 'Assuming open source has no rules', code: '', suffix: 'Open source projects are governed by licenses. Always inspect the LICENSE file before copy-pasting code into commercial apps.' }
    ],
    bestPractices: ['Start contributing to open-source to build real-world team experience and improve your coding skills.'],
    practiceExercise: {
      task: 'Identify three major open-source tools you use on your computer daily.',
      expectedOutput: 'VS Code, Git, Linux, Python, etc.',
      solution: 'Review your tools and verify their license details.'
    },
    quiz: [
      { question: 'What is Open Source Software?', options: ['Software with private code', 'Software whose source code is publicly accessible for anyone to view, modify, and distribute', 'Paid software', 'Operating systems only'], answer: 'Software whose source code is publicly accessible for anyone to view, modify, and distribute' },
      { question: 'Which of the following is an open-source project?', options: ['Microsoft Windows', 'Linux Kernel', 'Adobe Photoshop', 'Mac OS'], answer: 'Linux Kernel' },
      { question: 'Can anyone legally contribute to open-source projects on GitHub?', options: ['No, only authorized employees', 'Yes, anyone can suggest edits by submitting Pull Requests', 'Only if they pay a fee', 'Only on Linux machines'], answer: 'Yes, anyone can suggest edits by submitting Pull Requests' }
    ],
    interviewQuestions: [
      { q: 'What is the significance of open-source contributions for a developer\'s career?', a: 'It demonstrates teamwork, code review experience, familiarity with version control workflows, coding standards, and provides public evidence of your programming capabilities.' }
    ],
    summary: ['Publicly viewable and modifiable code.', 'Powered by community collaboration.', 'Governed by licensing terms.'],
    references: commonReferences
  },

  'git_find_projects': {
    isStructured: true,
    title: '59. Finding Beginner-Friendly Projects',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Locating public code repositories on GitHub that actively welcome and support new developers making their first code contributions.',
    whyUseIt: 'Large codebases can be intimidating. Starting with beginner-friendly projects ensures you receive guidance and build confidence.',
    syntax: 'Search tags: label:"good first issue" language:javascript',
    codeExample: '# Search queries on GitHub search bar:\nis:issue label:"good first issue" is:open\nis:issue label:"help wanted" language:python',
    expectedOutput: 'A list of active, open issues specifically designated for newcomers.',
    explanation: [
      { code: 'label:"good first issue"', desc: 'Filters search results to return issues that maintainers marked as easy starter tasks.' }
    ],
    realWorldExample: 'A student searches GitHub for `label:"good first issue" language:html`. They find an issue to update a documentation footer, write the fix, and contribute.',
    commonMistakes: [
      { error: 'Trying to fix complex core engine bugs on day one', code: '', suffix: 'Don\'t try to refactor React\'s virtual DOM for your first contribution. Start with typo fixes, documentation updates, or simple bugs.' }
    ],
    bestPractices: ['Use portals like up-for-grabs.net or firstcontributions.github.io to find starter repositories.'],
    practiceExercise: {
      task: 'Search GitHub issues for open javascript tasks labeled "good first issue".',
      expectedOutput: 'A filtered list of active issues matching parameters.',
      solution: 'Search: is:open is:issue label:"good first issue" language:javascript'
    },
    quiz: [
      { question: 'Which search filter finds issues flagged for beginners?', options: ['label:hard', 'label:"good first issue"', 'language:all', 'stars:>1000'], answer: 'label:"good first issue"' },
      { question: 'What is a great portal to find beginner open-source tasks?', options: ['Google Search only', 'firstcontributions.github.io', 'eBay', 'Facebook'], answer: 'firstcontributions.github.io' },
      { question: 'Should you start contributing by rewriting core framework logic?', options: ['Yes', 'No, start with small documentation updates, styling fixes, or simple bugs to learn the workflow first', 'Only if you use Windows', 'Only if they pay you'], answer: 'No, start with small documentation updates, styling fixes, or simple bugs to learn the workflow first' }
    ],
    interviewQuestions: [
      { q: 'How do you identify if an open-source project has a welcoming community before contributing?', a: 'I check their `CONTRIBUTING.md` file, the responsiveness of maintainers on active Pull Requests, and read comments in closed issues to assess their collaboration tone.' }
    ],
    summary: ['Search using `label:"good first issue"`.', 'Start with documentation and simple fixes.', 'Utilize helper directory portals.'],
    references: commonReferences
  },

  'git_good_first_issue': {
    isStructured: true,
    title: '60. Good First Issue',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A specific label applied by repository maintainers to issues that are self-contained, low complexity, and excellent for developers making their very first contribution.',
    whyUseIt: 'To help beginners identify where they can contribute without getting bogged down in complex architecture discussions.',
    syntax: '-- Label: "good first issue"\n-- Usually accompanied by "help wanted" or "documentation" labels',
    codeExample: '# Example issue titles:\n- "Fix typo in install instructions in README.md"\n- "Add CSS hover state to buttons in profile component"',
    expectedOutput: 'Clear, well-defined bug reports that require minimal codebase knowledge to solve.',
    explanation: [
      { code: 'good first issue', desc: 'Standard label recognized across the GitHub ecosystem for onboarding new developers.' }
    ],
    realWorldExample: 'A junior developer visits a repository, opens the "good first issue" tag, finds a bug to fix a misaligned button, submits the fix, and is merged.',
    commonMistakes: [
      { error: 'Taking multiple issues and not completing them', code: '', suffix: 'Only claim one issue at a time. If you claim 5 issues and disappear, you block others who want to contribute.' }
    ],
    bestPractices: ['Comment on the issue requesting maintainers to assign it to you before you start writing code.'],
    practiceExercise: {
      task: 'Identify a "good first issue" in a repository of your choice and write a comment expressing interest to work on it.',
      expectedOutput: 'A polite request comment written on the issue thread.',
      solution: 'Comment: "Hi! I would love to work on this issue. Could you please assign it to me?"'
    },
    quiz: [
      { question: 'What is "good first issue"?', options: ['A programming language', 'A standardized label on GitHub for beginner-friendly tasks', 'A security warning', 'A premium account feature'], answer: 'A standardized label on GitHub for beginner-friendly tasks' },
      { question: 'What is a best practice before coding an open issue?', options: ['Code immediately and push to main', 'Comment on the issue requesting to be assigned to it, ensuring you don\'t duplicate someone else\'s work', 'Delete the issue', 'Email the CEO'], answer: 'Comment on the issue requesting to be assigned to it, ensuring you don\'t duplicate someone else\'s work' },
      { question: 'Can you claim multiple starter issues at the same time?', options: ['Yes, as many as you want', 'No, only claim one at a time to be fair to other learners', 'Only if you pay', 'Only on Linux'], answer: 'No, only claim one at a time to be fair to other learners' }
    ],
    interviewQuestions: [
      { q: 'Why do open-source maintainers dedicate time to write "good first issues"?', a: 'It helps onboard new contributors who may eventually become core maintainers of the project, helping sustain and grow the open-source software community.' }
    ],
    summary: ['Starter tasks flagged by maintainers.', 'Comment to request assignment first.', 'Complete one issue before starting another.'],
    references: commonReferences
  }
};
