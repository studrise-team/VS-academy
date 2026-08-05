const commonReferences = [
  { label: 'W3Schools Git & GitHub', url: 'https://www.w3schools.com/git/' },
  { label: 'GitHub Official Docs', url: 'https://docs.github.com/' },
  { label: 'Git SCM Documentation', url: 'https://git-scm.com/doc' }
];

export const gitContentBatch6 = {
  'git_versioning': {
    isStructured: true,
    title: '76. Versioning',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Versioning is the system of assigning unique names or numbers to unique states of a software product as it evolves (most commonly using Semantic Versioning principles).',
    whyUseIt: 'Allows developers and users to know exactly what edits are in a release, tracking compatibility and bug fixes accurately.',
    syntax: 'v[Major].[Minor].[Patch]\nExample: v1.4.2',
    codeExample: '# Creating a version release tag:\ngit tag -a v1.0.0 -m "Initial stable release"\ngit push origin v1.0.0',
    expectedOutput: 'Stable release bookmarks visible inside your repository tags list.',
    explanation: [
      { code: 'v1.4.2', desc: '1 = Major version (breaking changes). 4 = Minor version (new features). 2 = Patch version (bug fixes).' }
    ],
    realWorldExample: 'A library updates its database driver, changing its exports. They release this update as version `2.0.0` to warn developers that their old code might break.',
    commonMistakes: [
      { error: 'Bumping numbers arbitrarily', code: '', suffix: 'Don\'t change Major/Minor numbers on a whim. Follow the strict SemVer contract to prevent breaking your users\' automated dependency builds.' }
    ],
    bestPractices: ['Configure changelog generators to read commit messages and increment version tags automatically.'],
    practiceExercise: {
      task: 'Identify what version change is appropriate for a release that only fixes a security bug in a library.',
      expectedOutput: 'Patch version bump (e.g., 1.0.0 to 1.0.1).',
      solution: 'A patch version increment is correct.'
    },
    quiz: [
      { question: 'What does SemVer stand for?', options: ['Secure Versioning', 'Semantic Versioning', 'Server Versioning', 'Standard Versioning'], answer: 'Semantic Versioning' },
      { question: 'In the version number 2.5.3, what does the number "5" represent?', options: ['Major version', 'Minor version (new features added)', 'Patch version', 'Build number'], answer: 'Minor version (new features added)' },
      { question: 'When must the Major version number (e.g., v1.0 to v2.0) be incremented?', options: ['When you fix a typo', 'When you introduce breaking API changes that are not backwards-compatible', 'Every week', 'Only when you compile on Linux'], answer: 'When you introduce breaking API changes that are not backwards-compatible' }
    ],
    interviewQuestions: [
      { q: 'What is the purpose of lock files (like `package-lock.json` or `Gemfile.lock`) in dependency versioning?', a: 'Lock files record the exact versions of dependencies installed. This ensures that every developer and build server installs the identical dependency tree, avoiding build discrepancies.' }
    ],
    summary: ['Structured version identification.', 'Semantic Versioning = Major.Minor.Patch.', 'Tags identify versions in Git history.'],
    references: commonReferences
  },

  'git_backup_strategies': {
    isStructured: true,
    title: '77. Backup Strategies',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Methodologies to ensure your code history is safely stored in multiple physical locations (local folders, cloud registries like GitHub, and offsite archives).',
    whyUseIt: 'Data loss can halt business. If your laptop gets stolen and GitHub suffers a rare outage, backups ensure you do not lose months of work.',
    syntax: '-- Local repository (Clone 1)\n-- GitHub Cloud (Origin Remote)\n-- Backup server (Secondary Remote)',
    codeExample: '# Configure a secondary backup remote:\ngit remote add backup git@github.com:myuser/backup-repo.git\n\n# Push to backup remote:\ngit push backup main',
    expectedOutput: 'Repositories synchronized across multiple cloud storage environments.',
    explanation: [
      { code: 'backup remote', desc: 'Allows you to push your exact history to a secondary server (like GitLab or AWS S3).' }
    ],
    realWorldExample: 'An enterprise pushes their master repositories to private GitHub nodes while running a nightly cron job that duplicates clones to a local offline NAS drive.',
    commonMistakes: [
      { error: 'Relying on local disk storage only', code: '', suffix: 'If your hard drive crashes and you never ran git push, your unsynced commits are permanently gone. Push changes daily.' }
    ],
    bestPractices: ['Treat GitHub as your secondary backup remote and push commits daily to secure your coding work.'],
    practiceExercise: {
      task: 'List all remotes registered in your project directory to audit backup endpoints.',
      expectedOutput: 'List of remotes displaying fetch/push targets.',
      solution: 'git remote -v'
    },
    quiz: [
      { question: 'Why is Git inherently a distributed backup system?', options: ['It is hosted by Google', 'Every cloned repository contains a full copy of the entire project history, files, and branches', 'It zips files automatically', 'It is offline only'], answer: 'Every cloned repository contains a full copy of the entire project history, files, and branches' },
      { question: 'How often should you push code changes to remote servers?', options: ['Once a year', 'Only when the project is 100% finished', 'Daily (or multiple times a day when changes are made)', 'Every minute'], answer: 'Daily (or multiple times a day when changes are made)' },
      { question: 'Can you configure a repository to push to multiple remotes simultaneously?', options: ['No', 'Yes, by adding multiple URLs to the push remote configurations', 'Only on paid accounts', 'Only on Linux'], answer: 'Yes, by adding multiple URLs to the push remote configurations' }
    ],
    interviewQuestions: [
      { q: 'If GitHub is temporarily unavailable, how can a team continue collaborating?', a: 'Since Git is distributed, a developer can host a remote repo on their own machine, or the team can configure a temporary remote pointing to a GitLab, Bitbucket, or private server instance.' }
    ],
    summary: ['Distributed history enables redundancy.', 'Push to remote storage daily.', 'Configure secondary remotes for key assets.'],
    references: commonReferences
  },

  'git_project_portfolio': {
    isStructured: true,
    title: '78. Portfolio Repository',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'A project showcase repository containing your resume details, project summaries, and visual screenshots, hosted live on the web.',
    whyUseIt: 'To showcase your personal brand, skills, and hosted app links in one central place that recruiters can inspect.',
    syntax: '-- Profile Landing Page\n-- Markdown/HTML layouts',
    codeExample: '# Portfolio layout:\n- index.html (Main profile page)\n- projects.js (Dynamic list of works)\n- assets/ (Photos and icons)',
    expectedOutput: 'A beautiful, clean portfolio page listing your active code projects.',
    explanation: [
      { code: 'Hosted URL', desc: 'Usually deployed using GitHub Pages to create a link: username.github.io.' }
    ],
    realWorldExample: 'A frontend engineer builds a clean personal website using HTML/CSS/JS, pushes it to `username.github.io`, and links it in their LinkedIn bio.',
    commonMistakes: [
      { error: 'Including broken links to projects', code: '', suffix: 'Frequently audit your portfolio links. A broken link to a project gives an impression of poor maintenance.' }
    ],
    bestPractices: ['Create a visual grid of project cards with live links and code repository buttons on your portfolio page.'],
    practiceExercise: {
      task: 'Initialize a new repository named `username.github.io` (replace with your username).',
      expectedOutput: 'A repository configured to host your user portfolio site.',
      solution: 'Create repository on GitHub named exactly: your_username.github.io'
    },
    quiz: [
      { question: 'What specific repository name triggers a user-level portfolio site on GitHub Pages?', options: ['portfolio', 'Exactly: username.github.io', 'my-site', 'pages'], answer: 'Exactly: username.github.io' },
      { question: 'What should be highlighted on your developer portfolio?', options: ['Boilerplate code', 'Your best 3-4 projects, technology stack, and hosted demo links', 'Every tutorial you copied', 'Operating system paths'], answer: 'Your best 3-4 projects, technology stack, and hosted demo links' },
      { question: 'Is it free to host a portfolio on GitHub Pages?', options: ['Yes', 'No, hosting costs $5/month', 'Only if you use HTML, CSS is paid', 'Only on Linux'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'What is the benefit of using static site generators (like Jekyll or Astro) for hosting developer portfolios?', a: 'They compile markdown files into optimized, high-performance static HTML pages, making page loading extremely fast and search engine optimized.' }
    ],
    summary: ['Hosts your personal brand online.', 'Use `username.github.io` for user pages.', 'Keep project links updated.'],
    references: commonReferences
  },

  'git_project_html': {
    isStructured: true,
    title: '79. HTML Project',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'A hands-on project to create a static landing page or website, initialize Git tracking locally, and deploy it to GitHub Pages.',
    whyUseIt: 'Builds muscle memory for the core developer workflow: edit files, commit, push, and monitor live URL deployments.',
    syntax: 'mkdir html-project\ncd html-project\ngit init\ntouch index.html',
    codeExample: '# Steps to execute:\nmkdir my-site\ncd my-site\ngit init\necho "<h1>Hello Web</h1>" > index.html\ngit add .\ngit commit -m "Initialize project"\ngit remote add origin <URL>\ngit push -u origin main',
    expectedOutput: 'A live HTML website accessible to anyone on the web.',
    explanation: [
      { code: 'index.html', desc: 'The default entry file parsed by GitHub Pages servers.' }
    ],
    realWorldExample: 'A beginner developer builds a responsive local landing page, pushes it to GitHub, and deploys it to show family their first website.',
    commonMistakes: [
      { error: 'Forgetting to push changes when making edits', code: '', suffix: 'If you edit index.html locally, the website won\'t change until you commit and run git push.' }
    ],
    bestPractices: ['Organize project layouts by saving CSS in `/css` and images in `/images` subfolders.'],
    practiceExercise: {
      task: 'Build a 1-page resume site with index.html, initialize git, and deploy it.',
      expectedOutput: 'Resume page live on github.io.',
      solution: 'Create index.html -> git init -> git add/commit -> push -> Enable Pages.'
    },
    quiz: [
      { question: 'What file acts as the homepage entry point in static hosts?', options: ['main.js', 'index.html', 'style.css', 'home.html'], answer: 'index.html' },
      { question: 'What is the command to create an index.html file in bash?', options: ['touch index.html', 'git init index.html', 'create index.html', 'mkdir index.html'], answer: 'touch index.html' },
      { question: 'How do you check if index.html is modified locally?', options: ['git log', 'git status', 'git diff --cached', 'git remote'], answer: 'git status' }
    ],
    interviewQuestions: [
      { q: 'How do you configure GitHub Pages to deploy from a `/docs` subfolder instead of the root directory?', a: 'Under Repository Settings -> Pages, you can select the source folder dropdown and choose `/docs` instead of the default `/` (root).' }
    ],
    summary: ['Static HTML deploy practice.', 'Requires `index.html` entry.', 'Push updates to sync live site.'],
    references: commonReferences
  },

  'git_project_java': {
    isStructured: true,
    title: '80. Java Project',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Setting up Git version control for a Java console or desktop application, configuring a `.gitignore` specifically for Java build folders, and hosting the repository on GitHub.',
    whyUseIt: 'Java compilers generate massive `.class` and build directories that should never be version-controlled. Configuring Git correctly is essential.',
    syntax: 'project-root/\n├── .gitignore       (ignores target/, .metadata/)\n├── pom.xml\n└── src/\n    └── main/\n        └── java/',
    codeExample: '# Recommended Java .gitignore:\n*.class\ntarget/\n.metadata/\n.recommenders/\n.classpath\n.project\n.settings/',
    expectedOutput: 'Only java source files (`.java`) and build configuration files (`pom.xml`) are tracked in git.',
    explanation: [
      { code: 'target/', desc: 'Ignores the Maven build folder containing compiled bytecodes and jar binaries.' },
      { code: '*.class', desc: 'Ignores individual compiled JVM bytecode files.' }
    ],
    realWorldExample: 'A developer configures a Spring Boot project. They create a standard `.gitignore` so they don\'t upload target build binaries to the server.',
    commonMistakes: [
      { error: 'Committing target/ folders or compiled .class files', code: '', suffix: 'Binary files bloat your repository and cause merge conflicts. Always ignore target directories.' }
    ],
    bestPractices: ['Create a `.gitignore` containing rules for IDEs like Eclipse, IntelliJ, and build tools like Maven/Gradle.'],
    practiceExercise: {
      task: 'Write a basic `.gitignore` file that ignores the `target/` directory and `.class` extensions.',
      expectedOutput: 'File created with the ignore wildcards.',
      solution: 'echo "target/" > .gitignore && echo "*.class" >> .gitignore'
    },
    quiz: [
      { question: 'Which directory should always be ignored in a Maven-based Java project?', options: ['src/', 'target/', 'pom.xml', '.github/'], answer: 'target/' },
      { question: 'What compiled Java files should be added to `.gitignore`?', options: ['.java', '.class', '.md', '.yml'], answer: '.class' },
      { question: 'What file defines dependencies in a Maven project that MUST be committed?', options: ['pom.xml', 'build.gradle', 'package.json', 'dependencies.txt'], answer: 'pom.xml' }
    ],
    interviewQuestions: [
      { q: 'Why is it critical to add IDE configuration folders (like `.settings/` or `.idea/`) to `.gitignore`?', a: 'These folders contain local machine settings (like absolute SDK paths or window layouts) unique to your PC. Committing them breaks the IDE settings for teammates running the project on their own computers.' }
    ],
    summary: ['Ignore target/ and .class files.', 'Commit source code and pom.xml.', 'Clean commits prevent workspace conflicts.'],
    references: commonReferences
  },

  'git_project_fullstack': {
    isStructured: true,
    title: '81. Full Stack Project',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Managing a repository structure containing both front-end (React/Vue) and back-end (Node/Express/Python) folders, utilizing distinct `.gitignore` rules, and managing deployments.',
    whyUseIt: 'Teaches you how to structure complex, multi-layered codebases in Git under a single root or monorepo design.',
    syntax: 'monorepo/\n├── .gitignore (ignores env and dependencies)\n├── client/    (React files)\n└── server/    (Node/Express files)',
    codeExample: '# Folder separation:\nclient/node_modules/ -> Ignored\nserver/node_modules/ -> Ignored\nserver/.env          -> Ignored',
    expectedOutput: 'Organized monorepo with front-end and back-end isolated in their respective folders.',
    explanation: [
      { code: 'client/', desc: 'Contains the client-side UI application.' },
      { code: 'server/', desc: 'Contains server API routes, database connections, and configs.' }
    ],
    realWorldExample: 'A MERN stack developer creates a repository named `e-commerce`. They build the React app in `client/` and the Node API in `server/`, committing commits to main.',
    commonMistakes: [
      { error: 'Committing server secret keys (.env)', code: '', suffix: 'Make sure your backend `.env` file containing database passwords is added to the root `.gitignore` to avoid severe security leaks.' }
    ],
    bestPractices: ['Create separate `.gitignore` files inside the client and server directories if needed, or use relative paths in the root ignore.'],
    practiceExercise: {
      task: 'Create client and server directories and create a root `.gitignore` to ignore secrets.',
      expectedOutput: 'Directories created with ignore parameters.',
      solution: 'mkdir client server && echo "server/.env" > .gitignore'
    },
    quiz: [
      { question: 'What is a repository containing both client and server directories called?', options: ['Splitrepo', 'Monorepo', 'Submodule', 'Microrepo'], answer: 'Monorepo' },
      { question: 'Where should backend environment secrets (.env) be stored?', options: ['In the client folder', 'In a local .env file that is added to .gitignore and never committed', 'In the public folder', 'In README.md'], answer: 'In a local .env file that is added to .gitignore and never committed' },
      { question: 'Can you host both client and server on GitHub Pages?', options: ['Yes', 'No, Pages only hosts the static client; the backend server must be hosted on platforms like Render or AWS', 'Only on weekends', 'Only private repositories'], answer: 'No, Pages only hosts the static client; the backend server must be hosted on platforms like Render or AWS' }
    ],
    interviewQuestions: [
      { q: 'How would you deploy a full-stack project monorepo where client and server require separate hosting?', a: 'I would configure my deployment pipeline (or CI tool) to build only the `client/` folder and deploy the static output to a CDN, and trigger a separate container build for the `server/` directory to deploy to a web service host.' }
    ],
    summary: ['Monorepo manages client and server.', 'Never commit `.env` server keys.', 'Pages hosts client only; server needs backend hosts.'],
    references: commonReferences
  },

  'git_project_team': {
    isStructured: true,
    title: '82. Team Collaboration Project',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A simulated project where multiple developers collaborate on a single repository, creating feature branches, submitting Pull Requests, conducting code reviews, and resolving conflicts.',
    whyUseIt: 'Teaches you how to navigate real-world software workflows where multiple people edit the same codebase simultaneously.',
    syntax: '-- Branch protection configurations\n-- Peer approvals\n-- Conflict resolution workflows',
    codeExample: '# Collaborative flow:\ngit checkout -b feature-a\n# ... code ...\ngit push origin feature-a\n# Open PR -> Teammate reviews and requests fixes -> Commit fix -> Approved and merged',
    expectedOutput: 'Smooth collaborative project delivery with zero broken main branch builds.',
    explanation: [
      { code: 'PR approvals', desc: 'Prevents developers from pushing untested code directly, ensuring team verification.' }
    ],
    realWorldExample: 'At a tech company, a sprint involves 5 developers pushing to feature branches daily. All code goes through PR audits and passes tests before merging.',
    commonMistakes: [
      { error: 'Force-pushing to main to resolve a conflict', code: '', suffix: 'Never run `git push -f origin main`. If you have conflicts, resolve them locally on your feature branch first, then merge safely.' }
    ],
    bestPractices: ['Frequently pull updates from the main branch into your feature branch to stay synchronized and minimize conflicts.'],
    practiceExercise: {
      task: 'Simulate updating your branch with the latest changes from origin main.',
      expectedOutput: 'Local branch is updated with remote main commits.',
      solution: 'git switch your-branch && git pull origin main'
    },
    quiz: [
      { question: 'How should teams protect their main branch from direct pushes?', options: ['Delete the branch', 'Enable Branch Protection Rules in Repository Settings', 'Email team members warnings', 'Make the repo private only'], answer: 'Enable Branch Protection Rules in Repository Settings' },
      { question: 'What is the safest way to resolve a merge conflict in a team setting?', options: ['Delete remote branch', 'Resolve the conflict locally on your feature branch, verify the code compiles, and push the resolved commit', 'Force push your files to main', 'Let AI merge it'], answer: 'Resolve the conflict locally on your feature branch, verify the code compiles, and push the resolved commit' },
      { question: 'How do you pull remote main changes directly into your feature branch?', options: ['git pull origin main while on your feature branch', 'git push origin main', 'git checkout main', 'git init'], answer: 'git pull origin main while on your feature branch' }
    ],
    interviewQuestions: [
      { q: 'Describe the Gitflow workflow and how it structures collaboration.', a: 'Gitflow is a branching model using a stable `main` branch, a `develop` branch for integration, feature branches for development, release branches for shipping, and hotfix branches to quickly patch production bugs.' }
    ],
    summary: ['Use branch protection rules.', 'Pull main frequently to feature branch.', 'Always solve conflicts locally, never on remote main.'],
    references: commonReferences
  },

  'git_project_opensource': {
    isStructured: true,
    title: '83. Open Source Contribution Project',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Participating in a real public repository, identifying a bug or documentation typo, requesting to be assigned, and submitting an approved Pull Request following the fork workflow.',
    whyUseIt: 'Validates your skills in the real world. Having merged open-source contributions on your profile is highly impressive to tech employers.',
    syntax: '-- Fork workflow\n-- Contributing.md rules\n-- PR code review loops',
    codeExample: '# Flow checklist:\n1. Find issue with "good first issue" tag\n2. Comment: "I want to work on this"\n3. Fork, clone, code fix\n4. Push, submit PR, address reviews',
    expectedOutput: 'A merged contribution in a public open-source project and your profile attributed.',
    explanation: [
      { code: 'Contributor badge', desc: 'GitHub tags you as a Contributor on the repository page once your PR is merged.' }
    ],
    realWorldExample: 'A student fixes a minor broken UI link in a popular CSS library. The maintainer merges it. The student is now listed as an active contributor to that library.',
    commonMistakes: [
      { error: 'Pushing without running the project test suite', code: '', suffix: 'Most open-source repos have automated tests. If you push code that breaks their tests, your PR will fail and maintainers won\'t merge it. Run tests locally first.' }
    ],
    bestPractices: ['Read the `README.md` and `CONTRIBUTING.md` guidelines carefully before typing code.'],
    practiceExercise: {
      task: 'Find a public repository and review their open PRs to see how maintainers comment on code reviews.',
      expectedOutput: 'You understand the level of feedback and testing required for open source.',
      solution: 'Navigate to any popular repository (e.g., nodejs) -> Click Pull Requests -> Inspect threads.'
    },
    quiz: [
      { question: 'What is a contributor on GitHub?', options: ['A premium subscriber', 'A developer whose Pull Request was merged into the repository', 'Only the repository creator', 'A system administrator'], answer: 'A developer whose Pull Request was merged into the repository' },
      { question: 'Should you run local tests before submitting a PR to an open-source project?', options: ['No, tests run automatically on GitHub anyway', 'Yes, verifying tests pass locally saves maintainers\' time and proves your code is stable', 'Only on Windows', 'Only if the project is paid'], answer: 'Yes, verifying tests pass locally saves maintainers\' time and proves your code is stable' },
      { question: 'How can you find repositories that welcome contributions?', options: ['By browsing topics like "good-first-issue" or portals like up-for-grabs.net', 'By hacking', 'By emailing GitHub', 'By searching Google for password files'], answer: 'By browsing topics like "good-first-issue" or portals like up-for-grabs.net' }
    ],
    interviewQuestions: [
      { q: 'Why is contributing to open source considered valuable experience for self-taught developers?', a: 'It provides direct experience working in distributed teams, handling code review feedback, writing clean code according to strict guidelines, and demonstrates initiative.' }
    ],
    summary: ['Validates skills in real codebases.', 'Fork and clone to edit.', 'Ensure local test suites pass before PR.'],
    references: commonReferences
  },

  'git_interview_questions': {
    isStructured: true,
    title: '84. Top 50 GitHub Interview Questions',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A curated summary of the most common conceptual Git and GitHub questions asked during software engineering and DevOps job interviews.',
    whyUseIt: 'Allows you to clearly articulate your knowledge of version control, branching strategies, and collaboration workflows to technical interviewers.',
    syntax: '-- Informational Q&A',
    codeExample: '# No code. Review standard Q&A listings.',
    expectedOutput: 'Solid understanding of technical terminology.',
    explanation: [
      { code: 'Q: What is Git Rebase?', desc: 'A: Reapplying commits on top of another base tip, creating a linear history instead of merge commits.' }
    ],
    realWorldExample: 'Interviewer: "How do you undo a commit that was already pushed to GitHub?" You: "You run git revert <hash> to safely record a reversal commit without deleting history."',
    commonMistakes: [
      { error: 'Suggesting git reset for public branches', code: '', suffix: 'Running `git reset` deletes history. If that history was pushed to a shared remote, you will break your teammates\' repositories. Use `git revert` instead.' }
    ],
    bestPractices: ['Focus on explanation of WHY you use a command, not just the command letters.'],
    practiceExercise: {
      task: 'Explain aloud the difference between `git revert` and `git reset`.',
      expectedOutput: 'Verbal confirmation of key difference.',
      solution: 'Revert creates a new commit reversing changes; Reset deletes commits.'
    },
    quiz: [
      { question: 'How do you safely undo a commit that has already been pushed to a public repository?', options: ['git reset --hard', 'git revert [commit_hash]', 'Delete the repository', 'git clear history'], answer: 'git revert [commit_hash]' },
      { question: 'What does `git cherry-pick [hash]` do?', options: ['Deletes a branch', 'Applies a specific commit from one branch onto your current branch', 'Picks a theme', 'Pushes code'], answer: 'Applies a specific commit from one branch onto your current branch' },
      { question: 'What is a "Conflict" in Git?', options: ['Internet loss', 'A clash occurring when two branches edit the same line of a file, requiring manual intervention to choose the correct line', 'A branch delete error', 'A login failure'], answer: 'A clash occurring when two branches edit the same line of a file, requiring manual intervention to choose the correct line' }
    ],
    interviewQuestions: [
      { q: 'What is the three-way merge in Git?', a: 'A three-way merge is Git\'s default merging algorithm. It uses three commits to merge: the two branch tips (heads) and their common ancestor (the point where they diverged), combining changes intelligently.' }
    ],
    summary: ['Be concise in interviews.', 'Never suggest destructive commands for shared branches.', 'Know rebasing and cherry-picking.'],
    references: commonReferences
  },

  'git_vs_github_questions': {
    isStructured: true,
    title: '85. Git vs GitHub Questions',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Common interview questions comparing the core version control tool (Git) with the collaborative cloud platform (GitHub).',
    whyUseIt: 'Hiring managers ask this to verify you understand the basic components of the toolchain.',
    syntax: '-- Informational Q&A',
    codeExample: '# Key differences summary:\n- Git: Offline CLI utility (tracks history)\n- GitHub: Online cloud service (hosts Git history)',
    expectedOutput: 'Perfect clarity between tool boundaries.',
    explanation: [
      { code: 'Git vs GitHub', desc: 'One is local software; the other is a web service.' }
    ],
    realWorldExample: 'You explain in an interview: "Git is the engine that tracks history. GitHub is the parking garage in the cloud where we park and share that history."',
    commonMistakes: [
      { error: 'Using the words interchangeably', code: '', suffix: 'Don\'t say "I pushed changes to Git". You push changes to GitHub (or a remote server) using Git.' }
    ],
    bestPractices: ['Refer to Git as the tool and GitHub as the service platform.'],
    practiceExercise: {
      task: 'Write down 3 features unique to GitHub that are not part of local Git.',
      expectedOutput: 'Pull Requests, Issues dashboard, GitHub Pages.',
      solution: 'GitHub unique: PR review UI, Actions pipelines, Gists forum.'
    },
    quiz: [
      { question: 'Is Git owned by GitHub?', options: ['Yes', 'No, Git is an open-source tool created by Linus Torvalds, while GitHub is a private platform owned by Microsoft', 'Yes, they were created by same team', 'Only on Windows'], answer: 'No, Git is an open-source tool created by Linus Torvalds, while GitHub is a private platform owned by Microsoft' },
      { question: 'Which command syncs local Git commits up to GitHub?', options: ['git pull', 'git push', 'git commit', 'git sync'], answer: 'git push' },
      { question: 'Does Git require internet to track files?', options: ['Yes, always', 'No, it operates entirely locally on your hard drive', 'Only on public repositories', 'Only on Linux'], answer: 'No, it operates entirely locally on your hard drive' }
    ],
    interviewQuestions: [
      { q: 'Can you use a GUI client for Git instead of the terminal?', a: 'Yes. There are many Git GUI clients (like GitHub Desktop, Sourcetree, GitKraken, and built-in VS Code widgets) that let you visual stage, commit, and sync code.' }
    ],
    summary: ['Git is local version control software.', 'GitHub is web cloud hosting.', 'They are separate but complementary.'],
    references: commonReferences
  },

  'git_scenario_questions': {
    isStructured: true,
    title: '86. Scenario-Based Questions',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'Interview prompts that test your practical problem-solving skills when git systems fail or branches diverge.',
    whyUseIt: 'Proves you have actual experience managing code repositories under pressure.',
    syntax: '-- Troubleshooting Q&A',
    codeExample: '# Scenario: "I accidentally committed a massive file and pushed it. How do I fix it?"\ngit filter-branch --tree-filter "rm -f largefile" HEAD  # (Or use BFG repo-cleaner)',
    expectedOutput: 'Actionable solutions for repository disasters.',
    explanation: [
      { code: 'Methodology', desc: 'Isolate changes, audit logs, backup before attempting history rewrites.' }
    ],
    realWorldExample: 'Interviewer: "A developer pushed code that broke production, and we need to revert immediately. What do you do?" You: "I locate the commit hash of the release, run git revert <hash> to cancel it, and push to main immediately."',
    commonMistakes: [
      { error: 'Proposing destructive commands blindly', code: '', suffix: 'Don\'t say "I would run git reset --hard". A reset deletes history and can cause code conflicts for teammates. Use revert.' }
    ],
    bestPractices: ['Always recommend non-destructive options (like `git revert` or stashing) first in interviews.'],
    practiceExercise: {
      task: 'Review a scenario where your local branch pointer has diverged and you need to match remote exactly.',
      expectedOutput: 'Reset local branch command.',
      solution: 'git fetch origin && git reset --hard origin/main'
    },
    quiz: [
      { question: 'Scenario: You want to save your current edits to switch branches but are not ready to commit. What command do you use?', options: ['git checkout -f', 'git stash', 'git reset', 'git push'], answer: 'git stash' },
      { question: 'Scenario: You committed files, then realized you made a typo in the commit message. What command fixes the message of your last commit?', options: ['git commit --amend -m "new message"', 'git commit --edit', 'git reset message', 'git change message'], answer: 'git commit --amend -m "new message"' },
      { question: 'Scenario: You accidentally deleted a local branch. How do you find its commits to recover it?', options: ['git log', 'git reflog (lists all movement of HEAD)', 'git status', 'git checkout'], answer: 'git reflog (lists all movement of HEAD)' }
    ],
    interviewQuestions: [
      { q: 'Scenario: A team member pushed code that modified the same lines you modified. When you pull, a conflict occurs. Detail your steps to resolve it.', a: 'I would open the conflicting files, locate the markers (<<<<===>>>>), consult with my teammate to understand the changes, edit the file to select the correct code, remove the markers, run `git add` to mark resolved, and commit the merge.' }
    ],
    summary: ['Tests troubleshooting capability.', 'Stash saves unfinished work.', '`git reflog` recovers deleted branch pointers.'],
    references: commonReferences
  },

  'git_common_mistakes': {
    isStructured: true,
    title: '87. Common GitHub Mistakes',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A compilation of the most frequent errors developers make when working with Git and GitHub, along with their solutions.',
    whyUseIt: 'To help you recognize, avoid, and debug common pitfalls before they break your repository.',
    syntax: '-- Audit list',
    codeExample: '# Mistake 1: Committing node_modules\n# Fix:\ngit rm -r --cached node_modules\n# Add node_modules/ to .gitignore',
    expectedOutput: 'Vigilant developer habits preventing common repository bugs.',
    explanation: [
      { code: 'git rm --cached', desc: 'Removes files from the Git staging database index while keeping them safe on your local hard drive.' }
    ],
    realWorldExample: 'A developer commits their `.env` file by accident. They revoke their API keys, delete `.env` from git tracking with `git rm --cached`, and update `.gitignore`.',
    commonMistakes: [
      { error: 'Committing code that does not compile', code: '', suffix: 'Never commit broken code to shared branches. Test your build locally before committing and pushing.' }
    ],
    bestPractices: ['Run `git status` frequently to verify exactly what is staged before committing.'],
    practiceExercise: {
      task: 'Remove a dummy file named `secrets.txt` from staging while keeping it on your local disk.',
      expectedOutput: 'File is untracked but remains in directory.',
      solution: 'git rm --cached secrets.txt'
    },
    quiz: [
      { question: 'What command untracks a file in Git database but keeps the file physically on your computer?', options: ['git delete [file]', 'git rm --cached [file]', 'git reset [file]', 'git exclude [file]'], answer: 'git rm --cached [file]' },
      { question: 'What is a common mistake when writing commit messages?', options: ['Writing messages in lowercase', 'Writing vague, uninformative messages like "fix" or "update"', 'Writing messages under 50 characters', 'Using git commit -m'], answer: 'Writing vague, uninformative messages like "fix" or "update"' },
      { question: 'Why shouldn\'t you commit API keys and passwords?', options: ['GitHub charges a fee for them', 'Scanners crawl public repos and will steal and misuse credentials, running up server bills', 'They make commits larger', 'They block compilers'], answer: 'Scanners crawl public repos and will steal and misuse credentials, running up server bills' }
    ],
    interviewQuestions: [
      { q: 'How do you fix a mistake where you committed changes to the `main` branch instead of a feature branch?', a: 'I would create a new feature branch from my current state (`git branch feature-name`). Then, switch back to main (`git switch main`) and reset it to match the remote origin branch (`git reset --hard origin/main`), restoring main to its clean state.' }
    ],
    summary: ['Avoid committing compiled binaries and dependencies.', 'Keep secrets out of repositories.', 'Use `git rm --cached` to untrack files.'],
    references: commonReferences
  },

  'git_cheat_sheet': {
    isStructured: true,
    title: '88. GitHub Cheat Sheet',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'A quick reference guide summarizing essential Git commands for staging, committing, branching, and pushing.',
    whyUseIt: 'Keep this guide bookmarked for quick lookup when you forget a command.',
    syntax: '-- Reference Guide',
    codeExample: '# CHEAT SHEET SUMMARY\ngit init                  : Init repo\ngit status                : Check files\ngit add .                 : Stage all\ngit commit -m "msg"       : Commit staged\ngit push origin main     : Upload branch\ngit pull origin main     : Download/Merge\ngit checkout -b [name]    : Create/Switch branch\ngit merge [name]          : Merge branch',
    expectedOutput: 'Fast lookup guide for terminal commands.',
    explanation: [
      { code: 'Cheat Sheet', desc: 'The 8 commands that represent 95% of your daily command-line interaction with Git.' }
    ],
    realWorldExample: 'You forget the exact syntax to delete a remote branch. You open the cheat sheet and find: `git push origin --delete <name>`.',
    commonMistakes: [
      { error: 'Forgetting commands', code: '', suffix: 'Don\'t try to memorize every git flag. Use cheat sheets or terminal help guides (`git command --help`).' }
    ],
    bestPractices: ['Keep a printed copy or browser bookmark of Git command cheat sheets near your workstation.'],
    practiceExercise: {
      task: 'Print a list of Git help commands in your terminal.',
      expectedOutput: 'A list of basic commands and explanations.',
      solution: 'git --help'
    },
    quiz: [
      { question: 'What command displays the help menu in Git?', options: ['git info', 'git --help', 'git status', 'help-git'], answer: 'git --help' },
      { question: 'What command downloads remote updates without merging them?', options: ['git pull', 'git fetch', 'git clone', 'git merge'], answer: 'git fetch' },
      { question: 'What command discards unstaged edits in a file named index.html?', options: ['git delete index.html', 'git restore index.html', 'git reset index.html', 'git rm index.html'], answer: 'git restore index.html' }
    ],
    interviewQuestions: [
      { q: 'How do you configure Git command shortcuts (aliases) to type shorter commands?', a: 'You can set aliases in git configuration. For example: `git config --global alias.co checkout` lets you type `git co` instead of `git checkout`.' }
    ],
    summary: ['Quick reference for CLI commands.', 'Use `git --help` for local logs.', 'Consolidates daily workflows.'],
    references: commonReferences
  },

  'git_workflow_recap': {
    isStructured: true,
    title: '89. GitHub Workflow Recap',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The final summary. A comprehensive review of the lifecycle of code: from local creation, version tracking, branch isolation, code review, to cloud deployment.',
    whyUseIt: 'To cement the complete end-to-end version control methodology in your mind so you can work confidently in any developer team.',
    syntax: 'Coding -> Staging -> Committing -> Pushing -> Pull Requests -> Deploying',
    codeExample: '# Full Loop review:\ngit checkout -b feat/navbar\n# ... edit code ...\ngit add .\ngit commit -m "feat: implement header navbar UI"\ngit push origin feat/navbar\n# Merge PR -> Actions deploy!',
    expectedOutput: 'Complete mastery of version control workflows.',
    explanation: [
      { code: 'Git Lifecycle', desc: 'Working Dir (edit) -> Staging (add) -> Local Repo (commit) -> Remote Repo (push).' }
    ],
    realWorldExample: 'You join a software team. On day 1, you clone their repository, create a branch, write code, run tests, submit a pull request, get it reviewed, merge it, and watch the site deploy automatically. You are a professional developer.',
    commonMistakes: [
      { error: 'Stopping practice', code: '', suffix: 'Like any language or tool, Git muscle memory fades if you don\'t use it. Use Git and GitHub for every single project you build, no matter how small.' }
    ],
    bestPractices: ['Congratulations! You have completed the Git & GitHub Module. Continue using version control daily to reinforce these concepts.'],
    practiceExercise: {
      task: 'Commit and push your final updates to your repository.',
      expectedOutput: 'Clean branch fully synced to GitHub.',
      solution: 'git add . && git commit -m "Finish course curriculum" && git push'
    },
    quiz: [
      { question: 'What is the correct order of the Git command lifecycle for staging and saving changes?', options: ['git commit -> git add -> git push', 'git add -> git commit -> git push', 'git push -> git add -> git commit', 'git init -> git push -> git commit'], answer: 'git add -> git commit -> git push' },
      { question: 'Which tool handles code compilation validation and automatic deployments?', options: ['git branch', 'GitHub Actions (CI/CD)', 'git status', 'index.html'], answer: 'GitHub Actions (CI/CD)' },
      { question: 'What is the final status of a successfully integrated feature?', options: ['Archived', 'Deleted', 'Merged and Deployed', 'Stashed'], answer: 'Merged and Deployed' }
    ],
    interviewQuestions: [
      { q: 'Explain why version control is the absolute baseline requirement for any professional software engineering role.', a: 'Software development is highly collaborative. Without version control, teams cannot track who modified what, back up progress, roll back buggy changes, isolate experiments, or manage concurrent development pipelines, making product delivery impossible.' }
    ],
    summary: ['Mastered end-to-end coding workflow.', 'Isolate work in branches.', 'Deploy static code using Pages, and build using Actions.'],
    references: commonReferences
  }
};
