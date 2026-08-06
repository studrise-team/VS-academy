const commonReferences = [
  { label: 'W3Schools Git & GitHub', url: 'https://www.w3schools.com/git/' },
  { label: 'GitHub Official Docs', url: 'https://docs.github.com/' },
  { label: 'Git SCM Documentation', url: 'https://git-scm.com/doc' }
];

export const gitContentBatch5 = {
  'git_fork_workflow': {
    isStructured: true,
    title: '61. Fork Workflow',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'The standard multi-step development loop for contributing to public projects: Fork on GitHub, clone locally, create feature branch, commit changes, push to your fork, and submit a Pull Request.',
    whyUseIt: 'It is the universal methodology for open-source contributions. It keeps original codebases secure while letting anyone suggest additions.',
    syntax: '# 1. Fork on web UI\n# 2. Clone fork:\ngit clone [Fork_URL]\n\n# 3. Create branch:\ngit checkout -b [branch_name]\n\n# 4. Push branch:\ngit push origin [branch_name]',
    codeExample: '# Complete CLI command flow:\ngit clone git@github.com:myuser/original-project.git\ncd original-project\ngit checkout -b patch-1\n# ... edit files ...\ngit add .\ngit commit -m "Fix syntax typo in landing page"\ngit push origin patch-1',
    expectedOutput: 'Your branch is uploaded to your GitHub fork, ready for PR submission.',
    explanation: [
      { code: 'origin', desc: 'Points to YOUR fork on GitHub (where you have write permission).' },
      { code: 'upstream', desc: 'Points to the ORIGINAL repository on GitHub (where you only have read permission).' }
    ],
    realWorldExample: 'You contribute a translation file to a project. You follow the Fork Workflow to safely upload your translation branch and send the PR.',
    commonMistakes: [
      { error: 'Cloning original repo and trying to push directly', code: '', suffix: 'If you push directly to the original repository without being an authorized collaborator, your push will fail with "Permission Denied". Always push to your fork!' }
    ],
    bestPractices: ['Configure the original repository as the `upstream` remote so you can pull updates and stay in sync.'],
    practiceExercise: {
      task: 'Link a local clone of your fork to the original repository URL named as `upstream`.',
      expectedOutput: 'Upstream remote listed in git remote settings.',
      solution: 'git remote add upstream https://github.com/original-author/repo.git && git remote -v'
    },
    quiz: [
      { question: 'What remote nickname commonly refers to the original repository you forked from?', options: ['origin', 'upstream', 'master', 'source'], answer: 'upstream' },
      { question: 'Where do you push your local branch changes in the Fork Workflow?', options: ['Directly to the original repository', 'To your forked repository (origin) on GitHub', 'To a ZIP file', 'Nowhere, it stays offline'], answer: 'To your forked repository (origin) on GitHub' },
      { question: 'What is the command to download changes from the original repository upstream into your local main?', options: ['git pull origin main', 'git pull upstream main', 'git push upstream main', 'git clone upstream'], answer: 'git pull upstream main' }
    ],
    interviewQuestions: [
      { q: 'Why configure a remote named "upstream" in the Fork Workflow?', a: 'It allows you to fetch changes made by other developers to the original repository and merge them into your local workspace, keeping your fork synchronized and resolving conflicts before submitting a PR.' }
    ],
    summary: ['Universal open-source collaboration loop.', 'Push to `origin` (your fork).', 'Pull updates from `upstream` (original repo).'],
    references: commonReferences
  },

  'git_first_contribution': {
    isStructured: true,
    title: '62. Making Your First Contribution',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'Successfully submitting a pull request to a public repository to correct a bug, write docs, or add a feature, which is accepted and merged by the project author.',
    whyUseIt: 'To experience the actual developer collaboration flow, build your resume, and give back to open-source software.',
    syntax: 'Step 1: Fork and clone\nStep 2: Edit and test files\nStep 3: Commit and push\nStep 4: Create Pull Request',
    codeExample: '# Standard workflow check:\ngit status\ngit diff\ngit add .\ngit commit -m "docs: Fix spelling of parameter in config description"\ngit push origin doc-fix',
    expectedOutput: 'A green PR approved and successfully merged into the public project.',
    explanation: [
      { code: 'docs: prefix', desc: 'Following conventional commit standards to categorize changes as documentation edits.' }
    ],
    realWorldExample: 'You find a broken link in a developer tutorial page on GitHub. You fork it, fix the link, push the branch, and submit the PR. The author merges it and thanks you.',
    commonMistakes: [
      { error: 'Making massive, undocumented changes', code: '', suffix: 'Don\'t submit a PR that touches 50 files without explaining what you did. Maintainers will reject it immediately. Keep contributions small.' }
    ],
    bestPractices: ['Read the project\'s `CONTRIBUTING.md` file carefully before writing code or formatting your commits.'],
    practiceExercise: {
      task: 'Locate and read the `CONTRIBUTING.md` file in a popular project like React or VS Code.',
      expectedOutput: 'You understand their coding guidelines, formatting rules, and branch structures.',
      solution: 'Navigate to https://github.com/facebook/react/blob/main/CONTRIBUTING.md'
    },
    quiz: [
      { question: 'Which file contains the guidelines and rules for contributing to a repository?', options: ['LICENSE', 'README.md', 'CONTRIBUTING.md', '.gitignore'], answer: 'CONTRIBUTING.md' },
      { question: 'What is a good way to start making contributions?', options: ['Rewriting the entire engine', 'Correcting typos, improving documentation, or fixing simple CSS layouts', 'Deleting files', 'Opening duplicate issues'], answer: 'Correcting typos, improving documentation, or fixing simple CSS layouts' },
      { question: 'Who reviews and decides whether to merge your contribution?', options: ['GitHub support staff', 'The repository owner or project maintainers', 'Any user on the internet', 'Nobody, it merges automatically'], answer: 'The repository owner or project maintainers' }
    ],
    interviewQuestions: [
      { q: 'How would you handle a situation where a maintainer requests edits to your pull request?', a: 'I would make the requested code modifications locally, test them, commit them, and push them to the same branch. The Pull Request will automatically update with the new commits, and I would notify the maintainer in the chat.' }
    ],
    summary: ['Fork, edit, push, and PR.', 'Read `CONTRIBUTING.md` rules.', 'Start with small documentation edits.'],
    references: commonReferences
  },

  'git_pr_etiquette': {
    isStructured: true,
    title: '63. Pull Request Etiquette',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The professional behavior, communication style, and formatting rules to follow when submitting code changes to public projects.',
    whyUseIt: 'Maintainers are often unpaid volunteers. Writing polite, clear, and well-structured PRs respects their time and speeds up merge approvals.',
    syntax: '-- Clear PR titles\n-- Detailed checklists\n-- Polite comment replies',
    codeExample: '# Good PR Description:\n## What does this change?\nFixes search bar layout on screens smaller than 375px.\n\n## How was this tested?\nTested manually in Chrome DevTools using iPhone SE emulator.',
    expectedOutput: 'A professional, reviewable pull request that maintainers can easily understand.',
    explanation: [
      { code: 'What & Why', desc: 'Explaining the rationale of the change helps reviewers evaluate the solution.' }
    ],
    realWorldExample: 'A developer opens a PR, links it to issue #4, writes a description, includes a before/after screenshot of the UI, and thanks the maintainers for their time.',
    commonMistakes: [
      { error: 'Demanding immediate reviews or merging', code: '', suffix: 'Never tag maintainers on social media demanding they review your code. Be patient; open-source developers have separate full-time jobs.' }
    ],
    bestPractices: ['Always link the PR to the relevant issue using "Fixes #issue_number" to auto-close tasks.'],
    practiceExercise: {
      task: 'Draft a polite pull request description layout for a feature that adds dark mode toggles.',
      expectedOutput: 'A markdown template detailing purpose, changes, and tests.',
      solution: 'Write template: Description, Screenshots, Test Steps.'
    },
    quiz: [
      { question: 'Why is PR etiquette important?', options: ['Because GitHub blocks impolite users', 'It shows respect for maintainers\' time, increases coding trust, and speeds up code approval', 'It decreases file sizes', 'It is required for compile runs'], answer: 'It shows respect for maintainers\' time, increases coding trust, and speeds up code approval' },
      { question: 'What should be included in a PR description that modifies the UI layout?', options: ['None, code is enough', 'Before and After screenshots or GIFs showing the visual difference', 'A list of your system specs', 'Your phone number'], answer: 'Before and After screenshots or GIFs showing the visual difference' },
      { question: 'How should you respond to negative or critical feedback on your PR?', options: ['Delete your fork', 'Argue or ignore them', 'Be polite, seek clarification, and address the code issues constructively', 'Report the maintainer'], answer: 'Be polite, seek clarification, and address the code issues constructively' }
    ],
    interviewQuestions: [
      { q: 'Describe the attributes of a high-quality pull request.', a: 'A high-quality PR has a descriptive title, links to open issues, details changes, includes testing screenshots, passes all automated CI builds, contains clean commits, and is small/focused.' }
    ],
    summary: ['Explain what and why you changed.', 'Include screenshots for visual changes.', 'Be polite and patient with reviews.'],
    references: commonReferences
  },

  'git_code_review_process': {
    isStructured: true,
    title: '64. Code Review Process',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'The structured workflow where developers inspect code changes, provide feedback, discuss optimization, and ensure stable builds before merging changes into the production code.',
    whyUseIt: 'It acts as the primary defense against shipping security vulnerabilities, architectural errors, or bugs to live systems.',
    syntax: 'Push -> CI Tests -> Peer Review -> Requested Edits -> Approval -> Merge',
    codeExample: '# Common pipeline steps:\n1. Developer commits work\n2. PR triggers automated checks\n3. Peers check diffs and request improvements\n4. Developer pushes fixes -> Approved!',
    expectedOutput: 'High quality code standard maintained across the team.',
    explanation: [
      { code: 'Peer Review', desc: 'Having at least one other developer review your code before it is added to the main branch.' }
    ],
    realWorldExample: 'At a bank, no code can go live without two senior developer approvals and passing automated vulnerability scanning pipelines.',
    commonMistakes: [
      { error: 'Taking code reviews personally', code: '', suffix: 'Comments on a PR target the CODE, not you. Critique helps you grow as an engineer; don\'t feel offended.' }
    ],
    bestPractices: ['Review other people\'s PRs. It is one of the fastest ways to learn new programming patterns and expand your knowledge.'],
    practiceExercise: {
      task: 'Write a Checklist of 3 things to look for when reviewing a teammate\'s code.',
      expectedOutput: 'Checklist (e.g., Code readability, error handling, performance).',
      solution: '1. Readability & Comments, 2. Exception handling, 3. Testing coverage.'
    },
    quiz: [
      { question: 'What is the primary goal of the Code Review Process?', options: ['To evaluate developer speed', 'To maintain high code quality, verify security, and catch bugs before deployment', 'To rewrite files', 'To train AI models'], answer: 'To maintain high code quality, verify security, and catch bugs before deployment' },
      { question: 'How should review comments be interpreted?', options: ['As personal attacks', 'As professional feedback to improve the codebase and share knowledge', 'As syntax errors', 'As indicators to delete files'], answer: 'As professional feedback to improve the codebase and share knowledge' },
      { question: 'Who typically participates in code reviews?', options: ['Only the CEO', 'The author and peer developers (reviewers) in the team', 'Only external customers', 'Nobody, it is automated only'], answer: 'The author and peer developers (reviewers) in the team' }
    ],
    interviewQuestions: [
      { q: 'How do you handle a disagreement during a code review?', a: 'I discuss the options constructively, citing official documentation, performance benchmarks, or coding style guides. If needed, I loop in a tech lead to make a final decision, keeping the discussion objective.' }
    ],
    summary: ['Defends codebase from bugs and styling issues.', 'Provides learning opportunities.', 'Separates personal feelings from technical feedback.'],
    references: commonReferences
  },

  'git_releases': {
    isStructured: true,
    title: '65. Releases',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'GitHub Releases are software packaging points based on Git tags. They include release notes describing updates, and pre-compiled binaries (ZIP, EXE) for users to download.',
    whyUseIt: 'To ship stable, versioned editions of your product that users can download directly, separating active code from finished software.',
    syntax: '-- Created via: GitHub web interface -> Releases -> Create a new release',
    codeExample: '# Create Tag (terminal):\ngit tag -a v1.0.0 -m "Release version 1.0.0"\ngit push origin v1.0.0',
    expectedOutput: 'A dedicated download page on GitHub hosting `v1.0.0.zip` and listing update notes.',
    explanation: [
      { code: 'Release notes', desc: 'A changelog list of fixes and features shipped in this version.' },
      { code: 'Source code zip', desc: 'GitHub automatically packages the repository files at that exact tag point.' }
    ],
    realWorldExample: 'VS Code maintainers package the monthly updates into a GitHub Release page so users can download installer files.',
    commonMistakes: [
      { error: 'Publishing releases with no description', code: '', suffix: 'Always list the fixes and changes in the release notes so users know what was modified since the last version.' }
    ],
    bestPractices: ['Follow Semantic Versioning (Major.Minor.Patch) when naming your release versions.'],
    practiceExercise: {
      task: 'Navigate to the Releases section of a major framework (like Node.js) on GitHub and check their changelog.',
      expectedOutput: 'You see version notes, contributor credits, and download files.',
      solution: 'Navigate to https://github.com/nodejs/node/releases'
    },
    quiz: [
      { question: 'What is a GitHub Release?', options: ['A branch delete command', 'A packaged version of software based on a Git tag, containing download files and update descriptions', 'A legal document', 'An email newsletter'], answer: 'A packaged version of software based on a Git tag, containing download files and update descriptions' },
      { question: 'What versioning format is standard for software releases?', options: ['Random numbers', 'Semantic Versioning (e.g., v1.3.2)', 'File sizes', 'Creation dates'], answer: 'Semantic Versioning (e.g., v1.3.2)' },
      { question: 'Does GitHub automatically package the source code into a ZIP file for a release?', options: ['No, you must upload it manually', 'Yes, it bundles the repo files at that specific tag point automatically', 'Only for paid accounts', 'Only on Linux'], answer: 'Yes, it bundles the repo files at that specific tag point automatically' }
    ],
    interviewQuestions: [
      { q: 'What is Semantic Versioning (SemVer) and what do the three numbers represent?', a: 'SemVer uses the format MAJOR.MINOR.PATCH (e.g., 2.1.0). MAJOR is bumped for breaking API changes, MINOR for backwards-compatible new features, and PATCH for backwards-compatible bug fixes.' }
    ],
    summary: ['Stable versions for software shipping.', 'Uses Git tags under the hood.', 'Provides ZIP/TAR downloads of code.'],
    references: commonReferences
  },

  'git_tags': {
    isStructured: true,
    title: '66. Tags',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Git tags are permanent bookmarks pointing to specific commits in history. Unlike branches, tags do not move when you add new commits.',
    whyUseIt: 'To mark specific release points (like `v1.0.0`, `v2.0.0-beta`) permanently in your code history.',
    syntax: '# Create a lightweight tag:\ngit tag v1.0.0\n\n# Create an annotated tag (recommended):\ngit tag -a v1.0.0 -m "Release v1.0.0"\n\n# Push tags to GitHub:\ngit push origin --tags',
    codeExample: '# Create, verify, and push a tag:\ngit tag -a v1.2.0 -m "Add shopping cart features"\ngit tag  # Lists tags\ngit push origin v1.2.0',
    expectedOutput: '* [new tag]         v1.2.0 -> v1.2.0',
    explanation: [
      { code: '-a flag', desc: 'Creates an annotated tag, which stores the author, date, and description message in the Git database.' },
      { code: '--tags', desc: 'Pushes all local tags that are not yet on the remote server.' }
    ],
    realWorldExample: 'A release engineer creates an annotated tag `v2.4.1` on the commit that passed staging audits, locking it as the official version.',
    commonMistakes: [
      { error: 'Assuming git push uploads tags', code: '', suffix: 'Running `git push` does NOT upload tags to GitHub. You must explicitly run `git push origin [tag_name]` or `git push origin --tags`.' }
    ],
    bestPractices: ['Always use annotated tags (`-a`) for public releases as they store creator details for auditing.'],
    practiceExercise: {
      task: 'Create an annotated tag named `v1.0.0-test` with a message, list it, and push it to origin.',
      expectedOutput: 'Tag is successfully pushed to the remote repository.',
      solution: 'git tag -a v1.0.0-test -m "Test tag" && git tag && git push origin v1.0.0-test'
    },
    quiz: [
      { question: 'What is the key difference between a branch and a tag?', options: ['Branches are public, tags are private', 'Branches move forward with new commits; tags remain pointing to the same commit permanently', 'Tags use more database memory', 'Tags are only run on servers'], answer: 'Branches move forward with new commits; tags remain pointing to the same commit permanently' },
      { question: 'Which command creates an annotated tag with a message?', options: ['git tag v1.0', 'git tag -a v1.0 -m "message"', 'git tag add v1.0', 'git mark v1.0'], answer: 'git tag -a v1.0 -m "message"' },
      { question: 'Does `git push` upload local tags to GitHub by default?', options: ['Yes', 'No, you must use git push origin --tags or name the specific tag', 'Only for public repositories', 'Only on macOS'], answer: 'No, you must use git push origin --tags or name the specific tag' }
    ],
    interviewQuestions: [
      { q: 'How would you delete a tag locally and remotely?', a: 'To delete locally: `git tag -d <tag_name>`. To delete remotely: `git push origin --delete <tag_name>`.' }
    ],
    summary: ['Static bookmarks to specific commits.', 'Ideal for labeling version releases.', 'Pushed separately using `--tags`.'],
    references: commonReferences
  },

  'git_packages': {
    isStructured: true,
    title: '67. GitHub Packages',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'GitHub Packages is a package hosting service that lets you publish dependency packages (NPM, NuGet, Maven, RubyGems) directly alongside your code.',
    whyUseIt: 'Allows your organization to host private or public dependency libraries in the same security ecosystem as your source code.',
    syntax: '-- Configured using package manager registries\n-- Uses Personal Access Tokens for access',
    codeExample: '# Publish npm package to GitHub Packages (.npmrc):\nregistry=https://npm.pkg.github.com/your-username',
    expectedOutput: 'Package successfully compiled and hosted on GitHub package manager repository.',
    explanation: [
      { code: 'pkg.github.com', desc: 'The base host registry domain for GitHub packages.' }
    ],
    realWorldExample: 'A bank builds a private encryption helper library. They publish it to GitHub Packages as an NPM module so their other private websites can import it securely.',
    commonMistakes: [
      { error: 'Hardcoding NPM login tokens in config files', code: '', suffix: 'Never write raw tokens inside your files. Use environment variables (like `NODE_AUTH_TOKEN`) in your CI pipeline.' }
    ],
    bestPractices: ['Integrate publishing tasks into your GitHub Actions workflows so package uploads trigger automatically on version tags.'],
    practiceExercise: {
      task: 'Map out the basic configuration file needed to set up NPM package publishing on GitHub.',
      expectedOutput: 'A `.npmrc` layout pointing to npm.pkg.github.com.',
      solution: 'Create .npmrc containing registry URL and package token placeholder.'
    },
    quiz: [
      { question: 'What is GitHub Packages?', options: ['A mailing service', 'A package hosting service for publishing dependencies (NPM, NuGet, etc.) alongside code', 'A folder zip utility', 'An IDE plugin'], answer: 'A package hosting service for publishing dependencies (NPM, NuGet, etc.) alongside code' },
      { question: 'How is security managed for private GitHub Packages?', options: ['Through standard website passwords', 'Using GitHub Personal Access Tokens with package permissions', 'They are unsecured', 'Using SMS verification only'], answer: 'Using GitHub Personal Access Tokens with package permissions' },
      { question: 'Can you host private packages on GitHub?', options: ['No, packages must be public', 'Yes, and access can be restricted to members of your organization', 'Only for 10 users', 'Only on Linux servers'], answer: 'Yes, and access can be restricted to members of your organization' }
    ],
    interviewQuestions: [
      { q: 'Why choose GitHub Packages over public package registries like npmjs.com for internal company packages?', a: 'It consolidates billing, permissions, and security into a single platform (GitHub), avoiding the need to manage separate accounts on public package websites.' }
    ],
    summary: ['Hosts dependency libraries (NPM, NuGet).', 'Sits alongside code repositories.', 'Excellent for internal private utilities.'],
    references: commonReferences
  },

  'git_wikis': {
    isStructured: true,
    title: '68. Wikis',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A built-in documentation system inside GitHub repositories, providing separate wiki pages that developers can edit collaboratively.',
    whyUseIt: 'To host long-form documentation, API specs, architectural diagrams, or guides that are too large to fit in a single `README.md`.',
    syntax: '-- Enabled via: Repository Settings -> Features -> Check "Wiki"\n-- Edited in browser or cloned as a separate Git repository',
    codeExample: '# Create Wiki Sidebar page:\n- [Home](Home)\n- [API Guide](API-Guide)\n- [Installation](Installation)',
    expectedOutput: 'A styled documentation portal next to your code files on GitHub.',
    explanation: [
      { code: 'Wiki Git Repo', desc: 'Every GitHub Wiki is actually a separate Git repository that you can clone, edit locally, and push!' }
    ],
    realWorldExample: 'A software team uses the Wiki tab to write extensive installation guides for different environments (Windows setup, Linux setup).',
    commonMistakes: [
      { error: 'Letting documentation get outdated', code: '', suffix: 'Keep the wiki updated. If the code API changes, update the Wiki immediately so new team members don\'t read broken guides.' }
    ],
    bestPractices: ['Toggle wiki edit permissions to "Only collaborators" for public repos to prevent spam edits from the internet.'],
    practiceExercise: {
      task: 'Enable the Wiki feature in one of your repository settings and create your first Wiki page.',
      expectedOutput: 'An active Wiki page displaying formatted markdown.',
      solution: 'Settings -> Features -> Check Wiki -> Go to Wiki tab -> Create page.'
    },
    quiz: [
      { question: 'What is a GitHub Wiki?', options: ['A general encyclopedia', 'A collaborative documentation portal embedded in your repository', 'A chat forum', 'A coding environment'], answer: 'A collaborative documentation portal embedded in your repository' },
      { question: 'Is a GitHub Wiki technically a separate Git repository under the hood?', options: ['No, it is just database entries', 'Yes, you can clone and push to it just like standard code repositories', 'Only on paid accounts', 'Only on Linux'], answer: 'Yes, you can clone and push to it just like standard code repositories' },
      { question: 'Who can edit your Wiki by default in a public repository?', options: ['Anyone on the internet', 'Only repository collaborators', 'Only GitHub staff', 'Nobody'], answer: 'Only repository collaborators' }
    ],
    interviewQuestions: [
      { q: 'When should you place documentation in a Wiki vs in the code repository itself (e.g., in a `/docs` folder)?', a: 'Wiki is best for user-facing documentation, FAQs, and guides. Internal codebase docs, architectural design records (ADRs), or tests are better kept inside the code repo so they version-control alongside branches.' }
    ],
    summary: ['Hosts long-form guides and specs.', 'Clonable as a separate Git repo.', 'Keep updated with API changes.'],
    references: commonReferences
  },

  'git_security_tab': {
    isStructured: true,
    title: '69. Security Tab',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The hub in your GitHub repository hosting native security tools like secret scanning alerts, vulnerability disclosures, and dependency updates.',
    whyUseIt: 'To identify, audit, and fix security flaws in your code and packages before hackers exploit them.',
    syntax: '-- Accessed via the "Security" tab on the GitHub repository navigation bar',
    codeExample: '# Common tools:\n- Dependabot alerts (updates vulnerable packages)\n- Code scanning (checks code for SQLi/XSS)\n- Secret scanning (detects leaked keys)',
    expectedOutput: 'Security alerts and actionable patching recommendations.',
    explanation: [
      { code: 'Secret Scanning', desc: 'Scans commits for patterns matching AWS keys, Slack tokens, or passwords, and alerts you immediately.' }
    ],
    realWorldExample: 'A developer accidentally pushes a Google Cloud API key. The Security tab flags it instantly, notifying the developer that the key is leaked.',
    commonMistakes: [
      { error: 'Ignoring security notifications', code: '', suffix: 'Always resolve security warnings. A leaked API key can run up thousands of dollars of server bills in hours.' }
    ],
    bestPractices: ['Review the Security tab weekly and apply automated security fixes immediately.'],
    practiceExercise: {
      task: 'Navigate to the Security tab of a repository you own and review the available features.',
      expectedOutput: 'You see panels for Dependabot, Code scanning, and Advisories.',
      solution: 'Navigate to Repository -> Click Security tab.'
    },
    quiz: [
      { question: 'What is the purpose of the Security tab?', options: ['To lock repositories with passwords', 'To scan and monitor your repository for vulnerabilities, leaked secrets, and outdated dependencies', 'To change account emails', 'To host firewalls'], answer: 'To scan and monitor your repository for vulnerabilities, leaked secrets, and outdated dependencies' },
      { question: 'What does Secret Scanning detect?', options: ['Code formatting bugs', 'Leaked credentials, tokens, or API keys committed to the repository', 'Compiler warnings', 'File size overages'], answer: 'Leaked credentials, tokens, or API keys committed to the repository' },
      { question: 'Is the Security tab available for free repositories?', options: ['No', 'Yes, basic security features are free for all public repositories', 'Only for business plans', 'Only on weekends'], answer: 'Yes, basic security features are free for all public repositories' }
    ],
    interviewQuestions: [
      { q: 'What is a CVE (Common Vulnerabilities and Exposures) advisory?', a: 'A CVE is a standardized list of publicly disclosed information security vulnerabilities. GitHub references CVE lists to flag if packages in your project have known security flaws.' }
    ],
    summary: ['Monitors project vulnerability risk.', 'Identifies leaked tokens immediately.', 'Includes Dependabot and code scans.'],
    references: commonReferences
  },

  'git_dependabot': {
    isStructured: true,
    title: '70. Dependabot',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'An automated security bot on GitHub that scans your dependency files (`package.json`, `pom.xml`) for known vulnerabilities and automatically opens Pull Requests to update packages.',
    whyUseIt: 'Keeps your projects secure and up-to-date automatically, reducing manual maintenance time.',
    syntax: '-- Configured via: .github/dependabot.yml\n-- Automatically runs on repository scans',
    codeExample: '# dependabot.yml example:\nversion: 2\nupdates:\n  - package-ecosystem: "npm"\n    directory: "/"\n    schedule:\n      interval: "weekly"',
    expectedOutput: 'Automated Pull Requests titled "Bump [package] from [old_version] to [new_version]".',
    explanation: [
      { code: 'package-ecosystem', desc: 'Specifies which manager to track (e.g., npm, pip, maven, cargo).' },
      { code: 'schedule', desc: 'Sets how often to check for package updates (daily, weekly, monthly).' }
    ],
    realWorldExample: 'A react app uses an older package with a prototype pollution vulnerability. Dependabot scans it, opens a PR to update it, and the developer merges it in one click.',
    commonMistakes: [
      { error: 'Merging Dependabot PRs without running tests', code: '', suffix: 'Updating a dependency can introduce breaking changes. Always run tests to confirm the bump doesn\'t crash your application.' }
    ],
    bestPractices: ['Configure automated unit test workflows to run on Dependabot branches to ensure updates are safe.'],
    practiceExercise: {
      task: 'Draft a `dependabot.yml` config that updates NPM packages on a daily schedule.',
      expectedOutput: 'YAML structure with ecosystem: npm and interval: daily.',
      solution: 'Write YAML: version: 2 -> npm updates block -> interval: daily.'
    },
    quiz: [
      { question: 'What is Dependabot?', options: ['A chat bot', 'An automated tool that scans project dependencies for security vulnerabilities and opens PRs to patch them', 'A code formatter', 'A cloud hosting platform'], answer: 'An automated tool that scans project dependencies for security vulnerabilities and opens PRs to patch them' },
      { question: 'How do you configure custom schedules for Dependabot checks?', options: ['In your profile bio', 'In a configuration file saved at `.github/dependabot.yml`', 'Through command line inputs only', 'It is not customizable'], answer: 'In a configuration file saved at `.github/dependabot.yml`' },
      { question: 'Why shouldn\'t you merge Dependabot PRs instantly without checking?', options: ['It costs money to merge', 'It might introduce breaking changes that crash your application', 'It resets the commit logs', 'It deletes branches'], answer: 'It might introduce breaking changes that crash your application' }
    ],
    interviewQuestions: [
      { q: 'How does Dependabot detect that a package has a security vulnerability?', a: 'GitHub maintains a database of advisories (GitHub Advisory Database). Dependabot matches the package names and versions in your lock file against known vulnerable entries in this database.' }
    ],
    summary: ['Autodetects vulnerable packages.', 'Creates automatic patch PRs.', 'Configured via `.github/dependabot.yml`.'],
    references: commonReferences
  },

  'git_code_scanning': {
    isStructured: true,
    title: '71. Code Scanning',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'Analyzing your source code for security vulnerabilities, bugs, and coding flaws using tools like CodeQL during your build/Actions runs.',
    whyUseIt: 'To automatically audit your code logic (e.g. checking for SQL Injection, Cross-Site Scripting, or hardcoded passwords) before it goes live.',
    syntax: 'name: CodeQL\non: [push]\njobs:\n  analyze:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: github/codeql-action/init@v3',
    codeExample: '# CodeQL analysis trigger yml:\nuses: github/codeql-action/init@v3\nwith:\n  languages: javascript',
    expectedOutput: 'Analysis logs scanning lines of code and reporting flaws in the Security tab.',
    explanation: [
      { code: 'CodeQL', desc: 'The semantic code analysis engine developed by GitHub that treats code as a queryable database.' }
    ],
    realWorldExample: 'A developer commits code containing a database query. CodeQL scans the logic, detects a missing prepared statement that allows SQLi, and blocks the merge.',
    commonMistakes: [
      { error: 'Running scanners on test folders unnecessarily', code: '', suffix: 'Configure your scanner to ignore test directories to speed up CI execution times.' }
    ],
    bestPractices: ['Enable CodeQL scanning on the `main` branch and all pull requests to guard your production code.'],
    practiceExercise: {
      task: 'Look up how to configure CodeQL on a repository in the GitHub settings Security tab.',
      expectedOutput: 'Identify the CodeQL setup wizard in Settings.',
      solution: 'Navigate to Security -> Code scanning -> Set up CodeQL.'
    },
    quiz: [
      { question: 'What is CodeQL?', options: ['A text editor', 'GitHub\'s code analysis engine used to scan code for vulnerabilities and logic flaws', 'A database query language', 'A branch manager'], answer: 'GitHub\'s code analysis engine used to scan code for vulnerabilities and logic flaws' },
      { question: 'What type of security flaws does Code Scanning detect?', options: ['Syntax missing semicolons only', 'Critical issues like SQL Injection, Cross-Site Scripting (XSS), and logic bugs', 'Image compression quality', 'Git commit spelling'], answer: 'Critical issues like SQL Injection, Cross-Site Scripting (XSS), and logic bugs' },
      { question: 'Where are Code Scanning alert details displayed on GitHub?', options: ['In the pull request chat only', 'In the Security tab under "Code scanning alerts"', 'In the Settings tab', 'They are sent by post mail'], answer: 'In the Security tab under "Code scanning alerts"' }
    ],
    interviewQuestions: [
      { q: 'What is SAST and how does CodeQL fit into it?', a: 'SAST stands for Static Application Security Testing. CodeQL is a SAST tool because it analyzes the static source code (without executing the application) to identify potential security flaws and compliance issues.' }
    ],
    summary: ['Static security logic analysis.', 'Detects SQLi, XSS, and secrets.', 'CodeQL integrates via GitHub Actions.'],
    references: commonReferences
  },

  'git_writing_commits': {
    isStructured: true,
    title: '72. Writing Good Commits',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Structuring clear, concise, and standard commit messages to document code edits for clean team tracking.',
    whyUseIt: 'Saves time during debugging. A repository with clean commits is much easier to review, debug, and release version updates for.',
    syntax: '[type]([scope]): [subject]\n\n[body]\n\n[footer]',
    codeExample: '# Conventional commit style:\nfeat(auth): add OAuth login via Google account\n\n- Integrate passport-google-oauth2\n- Create database fields for googleId\n\nFixes #104',
    expectedOutput: 'A clean history readable by humans and automations alike.',
    explanation: [
      { code: 'feat', desc: 'Commit type: indicates a new feature is added.' },
      { code: 'fix', desc: 'Commit type: indicates a bug fix.' },
      { code: 'docs', desc: 'Commit type: indicates documentation modifications.' }
    ],
    realWorldExample: 'A professional team enforces Conventional Commits. Commits are validated by a hook, ensuring logs are readable and changelogs can be generated automatically.',
    commonMistakes: [
      { error: 'Writing useless commit titles', code: '', suffix: 'Do not commit: `git commit -m "fixed stuff"`. Instead, write `git commit -m "fix(navbar): correct vertical alignment on mobile layouts"`.' }
    ],
    bestPractices: ['Keep the subject line short (under 50 characters) and separate the title from the body with a blank line.'],
    practiceExercise: {
      task: 'Write a conventional commit message for a task that fixes a login form validation bug.',
      expectedOutput: 'fix(login): correct empty email error validation trigger',
      solution: 'fix(login): correct empty email validation error message'
    },
    quiz: [
      { question: 'Which commit message follows conventional commit guidelines?', options: ['git commit -m "changes"', 'git commit -m "feat(cart): add item removal functionality"', 'git commit -m "made css look nice"', 'git commit -m "bug fixed"'], answer: 'git commit -m "feat(cart): add item removal functionality"' },
      { question: 'What does the imperative mood commit message "Add navbar" indicate?', options: ['What the commit will do if applied', 'What the developer did yesterday', 'A command to delete code', 'Nothing'], answer: 'What the commit will do if applied' },
      { question: 'Why use scope (like `auth` or `cart`) in commit messages?', options: ['To make them compile', 'To specify which module or section of the codebase the changes affect', 'To encrypt messages', 'To reduce file size'], answer: 'To specify which module or section of the codebase the changes affect' }
    ],
    interviewQuestions: [
      { q: 'Why is it recommended to separate the commit title from the body with a blank line?', a: 'Command line utilities and Git web interfaces use the first line as the summary. If you omit the blank line, Git displays the entire body text concatenated onto the summary title, looking messy.' }
    ],
    summary: ['Use Conventional Commits standard.', 'Keep titles under 50 characters.', 'Imperative mood: "Add button", not "Added button".'],
    references: commonReferences
  },

  'git_organize_repos': {
    isStructured: true,
    title: '73. Organizing Repositories',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Configuring descriptions, topics, readme documents, folder layouts, and archiving to maintain codebases.',
    whyUseIt: 'A well-organized repository helps team members onboard quickly and allows external users to discover your tools on GitHub.',
    syntax: '-- Topics: Keywords added on repository page\n-- Folders: `/src`, `/docs`, `/tests` layouts',
    codeExample: '# Topics configuration on GitHub:\nTags: javascript, react, frontend, portfolio',
    expectedOutput: 'A clean, well-indexed, and searchable repository page.',
    explanation: [
      { code: 'Topics', desc: 'Search tags that index your repository in GitHub explore registries, increasing views.' }
    ],
    realWorldExample: 'An agency labels their 50 repositories with topics like `client-project`, `active`, or `archived` so they can filter their dashboards instantly.',
    commonMistakes: [
      { error: 'Leaving repository descriptions blank', code: '', suffix: 'Without a description, users browsing your profile have to guess what your project does. Always write a 1-sentence description.' }
    ],
    bestPractices: ['Clean up outdated or experimental repositories by archiving them to hide them from your active search lists.'],
    practiceExercise: {
      task: 'Go to one of your repositories and add 4 topics (e.g. `tutorial`, `html`, `practice`).',
      expectedOutput: 'Repository page displaying color tags below the project description.',
      solution: 'Navigate to repo -> Click gear icon near "About" -> Add topics -> Save.'
    },
    quiz: [
      { question: 'What is the purpose of adding "Topics" to a repository?', options: ['To write code', 'To tag and index the project so it is categorized and searchable on GitHub', 'To change compilers', 'To host websites'], answer: 'To tag and index the project so it is categorized and searchable on GitHub' },
      { question: 'Where is the repository description displayed on the homepage?', options: ['Under the Settings tab', 'On the right-sidebar "About" section', 'Inside index.html', 'In the code comments'], answer: 'On the right-sidebar "About" section' },
      { question: 'What should you do to a finished project you don\'t maintain anymore but want to keep visible?', options: ['Delete it', 'Archive the repository (makes it read-only)', 'Make it private', 'Zip it'], answer: 'Archive the repository (makes it read-only)' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between deleting and archiving a repository on GitHub?', a: 'Deleting deletes all files and commit history permanently. Archiving marks it read-only, disabling issues and PRs, but preserves the repository, files, and commit logs online.' }
    ],
    summary: ['Write a clear, 1-sentence description.', 'Add tags (topics) for discoverability.', 'Archive obsolete repositories.'],
    references: commonReferences
  },

  'git_readme_practices': {
    isStructured: true,
    title: '74. README Best Practices',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Writing comprehensive documentation for your project including setup steps, screenshots, licensing, contribution guides, and demo links.',
    whyUseIt: 'A great README elevates a simple project into an elite codebase, making it easy for users to run and buy in.',
    syntax: '-- Markdown sections\n-- Badges and statistics\n-- Deployed live URLs',
    codeExample: '# Checklist for a great README:\n1. Title & description\n2. Live Demo link\n3. Installation & Run instructions\n4. Technology tags\n5. Licensing details',
    expectedOutput: 'A clean, well-formatted, professional landing page for your code.',
    explanation: [
      { code: 'Installation instructions', desc: 'Must detail prerequisites (e.g., node version) and exact commands to execute.' }
    ],
    realWorldExample: 'A candidate pins a React weather dashboard. The README contains a screenshot of the dashboard, a link to the live hosted site, and 3 commands to run it locally.',
    commonMistakes: [
      { error: 'Assuming users know how to run your code', code: '', suffix: 'Always write installation commands. Never assume someone knows they need to run `npm install` or configure `.env` variables.' }
    ],
    bestPractices: ['Include before/after screenshots or terminal code gifs in your README.md to make it visually engaging.'],
    practiceExercise: {
      task: 'Add a "Features" bulleted list and a "Technologies Used" section to your test repository README.md.',
      expectedOutput: 'Markdown file updated and formatted on GitHub.',
      solution: 'Edit README.md -> Add Markdown headers and lists -> Commit and push.'
    },
    quiz: [
      { question: 'What section is critical for anyone trying to download and test your code locally?', options: ['Bio', 'Installation & Run guide', 'Issues list', 'License copy only'], answer: 'Installation & Run guide' },
      { question: 'What is a best practice for README layouts?', options: ['Keep it blank', 'Use clear markdown headings, lists, code blocks, and include a link to a live hosted demo', 'Write in one giant paragraph', 'Avoid using code blocks'], answer: 'Use clear markdown headings, lists, code blocks, and include a link to a live hosted demo' },
      { question: 'Should you include screenshots of your app in the README?', options: ['No, screenshots slow down pages', 'Yes, visual proof of your working UI is highly engaging for visitors and recruiters', 'Only if you pay', 'Only for mobile apps'], answer: 'Yes, visual proof of your working UI is highly engaging for visitors and recruiters' }
    ],
    interviewQuestions: [
      { q: 'Why is it important to provide a link to a live deployment in your repository README?', a: 'Hiring managers review hundreds of portfolios and rarely have time to clone, install, and run your code locally. A live link allows them to instantly interact with your working project.' }
    ],
    summary: ['Face of your codebase.', 'Include prerequisites and run commands.', 'Provide a live deployment URL.'],
    references: commonReferences
  },

  'git_documentation': {
    isStructured: true,
    title: '75. Documentation',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Creating supplementary markdown documents (`CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `/docs/` folders) to manage project architecture and compliance.',
    whyUseIt: 'Ensures larger projects remain maintainable as they scale, and guides external contributors on coding guidelines.',
    syntax: 'project-root/\n├── CONTRIBUTING.md\n├── CODE_OF_CONDUCT.md\n└── docs/\n    ├── api.md\n    └── setup.md',
    codeExample: '# CONTRIBUTING.md layout:\n1. Coding standards\n2. Branch rules\n3. PR checklist\n4. Setup development environment instructions',
    expectedOutput: 'A documented project ready for enterprise scale and public contributions.',
    explanation: [
      { code: 'CODE_OF_CONDUCT.md', desc: 'Sets standards for community behavior, ensuring a welcoming environment.' }
    ],
    realWorldExample: 'The Kubernetes project has hundreds of pages of documentation, helping contributors follow security protocols when writing code.',
    commonMistakes: [
      { error: 'Outdated API documentation', code: '', suffix: 'If you change your code interface, update the documentation files in the same commit. Outdated documentation is worse than no documentation.' }
    ],
    bestPractices: ['Use tools like Docusaurus or GitBook to compile your markdown documentation folder into a searchable website.'],
    practiceExercise: {
      task: 'Create a `docs` folder with an `architecture.md` file detailing the tech stack of your app.',
      expectedOutput: 'Folder and markdown file created.',
      solution: 'mkdir docs && touch docs/architecture.md'
    },
    quiz: [
      { question: 'What file establishes behavior standards for open-source project communities?', options: ['LICENSE', 'CODE_OF_CONDUCT.md', 'README.md', 'CONTRIBUTING.md'], answer: 'CODE_OF_CONDUCT.md' },
      { question: 'Where is it best to place extensive API manuals in a repository?', options: ['Inside index.js comments only', 'In a dedicated `/docs` directory or Wiki page', 'In the README.md directly', 'In .gitignore'], answer: 'In a dedicated `/docs` directory or Wiki page' },
      { question: 'Why keep documentation files version-controlled in the same Git repo?', options: ['To make files larger', 'To ensure that docs change alongside code changes in branch histories', 'To block PRs', 'Because GitHub demands it'], answer: 'To ensure that docs change alongside code changes in branch histories' }
    ],
    interviewQuestions: [
      { q: 'What are Architecture Decision Records (ADRs) and why are they documented?', a: 'An ADR is a short text file capturing a significant design or architectural decision (e.g., switching from REST to GraphQL) with context and consequences, serving as historical records for the team.' }
    ],
    summary: ['CONTRIBUTING.md guides developers.', 'CODE_OF_CONDUCT.md sets behavior standards.', 'Keep docs version-controlled alongside code.'],
    references: commonReferences
  }
};
