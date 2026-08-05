const commonReferences = [
  { label: 'W3Schools Git & GitHub', url: 'https://www.w3schools.com/git/' },
  { label: 'GitHub Official Docs', url: 'https://docs.github.com/' },
  { label: 'Git SCM Documentation', url: 'https://git-scm.com/doc' }
];

export const gitContentBatch1 = {
  'git_what_is_github': {
    isStructured: true,
    title: '1. What is GitHub?',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'GitHub is a web-based platform that uses Git, a version control system, to let multiple developers work together on projects from anywhere in the world. It acts as a cloud-based storage system for repositories.',
    whyUseIt: 'It provides a central location to store code, track versions, share work, and host portfolios. It is the industry standard for team collaboration.',
    syntax: '-- Web-based cloud platform\n-- No terminal syntax needed, managed via github.com',
    codeExample: '# Visit GitHub website:\nhttps://github.com/',
    expectedOutput: 'A web portal showing developer accounts, code repositories, discussions, and project boards.',
    explanation: [
      { code: 'GitHub UI', desc: 'Allows you to view files, code history, open pull requests, and manage issues through a browser.' },
      { code: 'Cloud Hosting', desc: 'Saves your code safely off your local computer so you never lose it.' }
    ],
    realWorldExample: 'A software company with developers in USA, Germany, and India host their code on GitHub so everyone can push changes daily.',
    commonMistakes: [
      { error: 'Confusing Git with GitHub', code: '', suffix: 'Git is the local tool that tracks history. GitHub is the website that hosts that history in the cloud.' }
    ],
    bestPractices: ['Create a GitHub account early to build a portfolio showing your coding journey.'],
    practiceExercise: {
      task: 'Go to github.com and search for a famous open-source project like "vscode" or "react".',
      expectedOutput: 'You find the vscode repository showing files, commit history, and branches.',
      solution: 'Navigate to https://github.com/microsoft/vscode in your browser.'
    },
    quiz: [
      { question: 'What is GitHub?', options: ['A text editor', 'A version control command-line tool', 'A web-based platform for hosting and collaborating on Git repositories', 'A programming language'], answer: 'A web-based platform for hosting and collaborating on Git repositories' },
      { question: 'Who uses GitHub?', options: ['Only single developers', 'Only Microsoft employees', 'Developers, companies, and open-source contributors worldwide', 'Only web designers'], answer: 'Developers, companies, and open-source contributors worldwide' },
      { question: 'Does GitHub run directly inside your computer terminal?', options: ['Yes, always', 'No, it is a cloud website (though it integrates with CLI tools)', 'Only on Linux', 'Only on macOS'], answer: 'No, it is a cloud website (though it integrates with CLI tools)' },
      { question: 'In what year was GitHub founded?', options: ['1995', '2008', '2015', '2001'], answer: '2008' },
      { question: 'Which company acquired GitHub in 2018?', options: ['Google', 'Facebook', 'Microsoft', 'Apple'], answer: 'Microsoft' }
    ],
    interviewQuestions: [
      { q: 'What is the key difference between Git and GitHub?', a: 'Git is a local version control software used by a developer to track changes. GitHub is a hosting service for Git repositories that enables collaboration, project management, and hosting.' }
    ],
    summary: ['GitHub hosts Git repositories in the cloud.', 'Enables global collaboration.', 'Acquired by Microsoft in 2018.'],
    references: commonReferences
  },

  'git_why_use': {
    isStructured: true,
    title: '2. Why Use GitHub?',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'GitHub solves the problem of code management in teams. It replaces unsafe practices like emailing zip files of code and manually merging changes.',
    whyUseIt: 'To prevent overlapping edits from breaking the code, to back up progress securely, and to display your achievements to hiring managers.',
    syntax: '-- Collaboration features\n-- Backup security\n-- Issue tracking',
    codeExample: '# Collaboration flow:\nDeveloper A pushes to GitHub -> Developer B pulls latest code from GitHub',
    expectedOutput: 'Seamless synchronization of files across multiple developer machines.',
    explanation: [
      { code: 'Syncing', desc: 'Allows everyone on the team to stay updated with the latest progress.' },
      { code: 'Portfolio', desc: 'Your public profile shows green blocks representing your daily contributions to code.' }
    ],
    realWorldExample: 'Two students working on a React app use GitHub. Student A builds the login form, Student B builds the dashboard, and GitHub merges them automatically.',
    commonMistakes: [
      { error: 'Not using GitHub for personal projects', code: '', suffix: 'Even for solo projects, GitHub acts as an offsite backup and shows recruiters that you know version control.' }
    ],
    bestPractices: ['Commit and push your changes daily to build your GitHub activity graph (green grass).'],
    practiceExercise: {
      task: 'Explore a developer\'s GitHub profile and locate their contribution graph.',
      expectedOutput: 'A grid of green squares representing their contributions over the past year.',
      solution: 'Go to https://github.com/torvalds (creator of Linux) and check his profile.'
    },
    quiz: [
      { question: 'Which of the following is a key reason to use GitHub?', options: ['To compile Java code', 'To back up code, collaborate, and manage project workflows', 'To write CSS stylesheets', 'To buy domains'], answer: 'To back up code, collaborate, and manage project workflows' },
      { question: 'How does GitHub make team collaboration safer?', options: ['It locks files so only one person can write code at a time', 'It automatically merges changes and flags conflicts if two people modify the same line', 'It deletes conflicting files', 'It charges a fee for edits'], answer: 'It automatically merges changes and flags conflicts if two people modify the same line' },
      { question: 'What does a green block on the GitHub contribution graph represent?', options: ['A payment made', 'A bug in the code', 'A contribution (commit, pull request, or issue) made on that day', 'An inactive day'], answer: 'A contribution (commit, pull request, or issue) made on that day' },
      { question: 'Can you host static websites on GitHub for free?', options: ['No, GitHub has no hosting capabilities', 'Yes, using GitHub Pages', 'Yes, but only for 1 day', 'Only if you pay $100/month'], answer: 'Yes, using GitHub Pages' },
      { question: 'Why is GitHub important for job seekers?', options: ['It guarantees a job', 'It acts as an interactive resume showing actual code you wrote', 'It hosts video interviews', 'It automatically builds resumes'], answer: 'It acts as an interactive resume showing actual code you wrote' }
    ],
    interviewQuestions: [
      { q: 'How does GitHub help in backup and disaster recovery?', a: 'Every developer who clones a repository has a complete copy of the code and history on their local machine. If GitHub or a server crashes, the repository can be fully restored from any developer\'s machine.' }
    ],
    summary: ['Secure, offsite code backup.', 'Eliminates file-sharing issues.', 'Essential for developer resumes.'],
    references: commonReferences
  },

  'git_vs_github': {
    isStructured: true,
    title: '3. Git vs GitHub',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Git is the local software engine that manages code history. GitHub is the cloud platform that hosts Git repositories online and wraps them in a user-friendly web interface.',
    whyUseIt: 'Understanding this difference prevents confusion when working with commands vs configuring settings on the web.',
    syntax: 'Git = CommandLine Utility\nGitHub = Web Browser Service',
    codeExample: '# Git command (local):\ngit commit -m "My update"\n\n# GitHub action (web):\nVisiting https://github.com/my-repo/settings',
    expectedOutput: 'Git runs in the command prompt. GitHub is opened in Chrome/Firefox.',
    explanation: [
      { code: 'Git', desc: 'No internet required to track files locally.' },
      { code: 'GitHub', desc: 'Requires internet to sync local changes up to the cloud.' }
    ],
    realWorldExample: 'Imagine Git is a local journaling app on your phone. GitHub is a blogging platform where you publish your journal entries online for the world to read.',
    commonMistakes: [
      { error: 'Thinking you need internet to use Git', code: '', suffix: 'You can track changes on a flight with no Wi-Fi using Git. You only need internet when you want to sync it with GitHub.' }
    ],
    bestPractices: ['Master Git commands locally before trying to manage everything through the GitHub web UI.'],
    practiceExercise: {
      task: 'Explain to a friend or write down in a sentence the difference between Git and GitHub.',
      expectedOutput: 'A concise definition mapping Git to local tracking and GitHub to cloud collaboration.',
      solution: 'Git is the local tool; GitHub is the online hosting platform.'
    },
    quiz: [
      { question: 'Which statement is TRUE?', options: ['Git and GitHub are different names for the same company', 'Git is local version control; GitHub is cloud hosting', 'GitHub runs without an internet connection', 'Git was created by Microsoft'], answer: 'Git is local version control; GitHub is cloud hosting' },
      { question: 'Do you need a GitHub account to run Git on your computer?', options: ['Yes, always', 'No, Git works completely offline on your computer', 'Only on Windows', 'Only if you use VS Code'], answer: 'No, Git works completely offline on your computer' },
      { question: 'Which was created first?', options: ['GitHub', 'Git', 'They were created at the same time', 'Vite'], answer: 'Git' },
      { question: 'Who created Git?', options: ['Bill Gates', 'Linus Torvalds', 'Steve Jobs', 'Guido van Rossum'], answer: 'Linus Torvalds' },
      { question: 'Which of the following is a GitHub feature but NOT a Git feature?', options: ['Branching', 'Pull Requests and Web Discussions', 'Commits', 'File Diffing'], answer: 'Pull Requests and Web Discussions' }
    ],
    interviewQuestions: [
      { q: 'Can you use Git without using GitHub?', a: 'Yes. You can use Git entirely locally, or you can host your remote repositories on other platforms like GitLab, Bitbucket, or self-hosted servers.' }
    ],
    summary: ['Git is the core tracking engine.', 'GitHub is the collaborative cloud platform.', 'They are separate tools that work together.'],
    references: commonReferences
  },

  'git_features': {
    isStructured: true,
    title: '4. Features of GitHub',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'GitHub provides a suite of tools for the modern software development lifecycle, including code hosting, collaboration pipelines, automation runner, security scans, and community chats.',
    whyUseIt: 'To manage entire software products (tasks, documentation, code, testing, deployment) in one unified ecosystem.',
    syntax: '-- Repositories (Code)\n-- Issues (Task list)\n-- Pull Requests (Code review)\n-- Actions (Automation)',
    codeExample: '# Common tools:\n- Repositories: Code base\n- Pull Requests: Review and merge changes\n- Actions: CI/CD scripts',
    expectedOutput: 'A complete developer ecosystem.',
    explanation: [
      { code: 'Pull Requests', desc: 'Allows you to review another developer\'s code before it gets added to the main branch.' },
      { code: 'Issues', desc: 'A built-in checklist where users can report bugs or suggest new features.' }
    ],
    realWorldExample: 'A user reports that a website button doesn\'t work. They open an "Issue" on GitHub. A developer fixes it, opens a "Pull Request", and "GitHub Actions" automatically deploys the fix to the live server.',
    commonMistakes: [
      { error: 'Using external task boards unnecessarily', code: '', suffix: 'GitHub has a built-in Projects board that links directly to your code and commits, making external trackers redundant for many teams.' }
    ],
    bestPractices: ['Utilize GitHub Issues and Projects to plan and track your tasks directly alongside your code.'],
    practiceExercise: {
      task: 'Navigate to a repository on GitHub and locate the "Issues", "Pull Requests", and "Actions" tabs at the top.',
      expectedOutput: 'You see the tabs and can browse active bug reports and work items.',
      solution: 'Visit https://github.com/facebook/react and click on "Issues".'
    },
    quiz: [
      { question: 'Which tab on GitHub is used to report bugs or suggest features?', options: ['Wiki', 'Pull Requests', 'Issues', 'Settings'], answer: 'Issues' },
      { question: 'What is the purpose of GitHub Actions?', options: ['To chat with developers', 'To automate testing, building, and deployment (CI/CD) of your code', 'To edit profile pictures', 'To host databases'], answer: 'To automate testing, building, and deployment (CI/CD) of your code' },
      { question: 'What is a Pull Request?', options: ['A request to download a repository', 'A request to merge code changes from one branch to another, allowing for code review', 'A security warning', 'An invitation to a repository'], answer: 'A request to merge code changes from one branch to another, allowing for code review' },
      { question: 'What does GitHub Wiki provide?', options: ['General encyclopedias', 'Documentation pages specifically for that repository', 'Compiler tools', 'HTML layouts'], answer: 'Documentation pages specifically for that repository' },
      { question: 'Is GitHub completely free for open source and private repositories?', options: ['No, private repos cost money', 'Yes, both public and private repositories are free for basic user accounts', 'No, all accounts are paid', 'Only free on weekends'], answer: 'Yes, both public and private repositories are free for basic user accounts' }
    ],
    interviewQuestions: [
      { q: 'What is a GitHub Project Board and how does it relate to Agile/Kanban?', a: 'A GitHub Project Board is a visual Kanban board consisting of columns (like To Do, In Progress, Done). It helps teams manage tasks and issues in an agile workflow, allowing you to link cards directly to code commits and Pull Requests.' }
    ],
    summary: ['Built-in Issue and project trackers.', 'Integrated CI/CD with GitHub Actions.', 'Pull Requests for secure team code reviews.'],
    references: commonReferences
  },

  'git_create_account': {
    isStructured: true,
    title: '5. Creating a GitHub Account',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Setting up a personal developer profile on github.com. This gives you a public namespace (e.g., `github.com/yourusername`) to display your work.',
    whyUseIt: 'A GitHub account is a prerequisite for syncing your local repositories to the cloud and collaborating on any project.',
    syntax: 'Step 1: Go to github.com\nStep 2: Click "Sign up"\nStep 3: Verify email',
    codeExample: '# Enter details:\nEmail -> Password -> Username -> Verification Code',
    expectedOutput: 'Access to your personalized GitHub home dashboard.',
    explanation: [
      { code: 'Username', desc: 'Choose a professional username (e.g., `john-doe-dev`) because employers will see this.' },
      { code: 'Verification', desc: 'Ensures account security and links commits to your real email.' }
    ],
    realWorldExample: 'A fresh college graduate signs up with the username `alexsmith-dev` and starts uploading their university projects to build a portfolio.',
    commonMistakes: [
      { error: 'Choosing a silly or unprofessional username', code: '', suffix: 'Avoid names like `gamerpro123`. A professional name like `first-last` or `firstlast-dev` looks much better on a resume.' }
    ],
    bestPractices: ['Use the same email address for your GitHub account that you use for configuring Git on your local computer.'],
    practiceExercise: {
      task: 'Sign up for a GitHub account (if you don\'t have one) or review your profile settings.',
      expectedOutput: 'A completed profile page with your name, bio, and avatar.',
      solution: 'Register at github.com and fill in the Profile details in Settings.'
    },
    quiz: [
      { question: 'What is the first step to create a GitHub account?', options: ['Run git init in command prompt', 'Visit github.com and click "Sign up"', 'Install Visual Studio Code', 'Buy a server'], answer: 'Visit github.com and click "Sign up"' },
      { question: 'Why should you choose a professional username?', options: ['Because GitHub charges for unprofessional ones', 'It makes your code compile faster', 'Hiring managers and teammates will see it on your resume', 'It increases disk space'], answer: 'Hiring managers and teammates will see it on your resume' },
      { question: 'Can you change your username later?', options: ['No, never', 'Yes, but it resets your repositories', 'Yes, in your account settings, but it is best to choose a good one from the start to avoid broken links', 'Only if you buy a premium plan'], answer: 'Yes, in your account settings, but it is best to choose a good one from the start to avoid broken links' },
      { question: 'Is email verification required?', options: ['No', 'Yes, to secure your account and allow you to push code', 'Only for business accounts', 'Only on Linux'], answer: 'Yes, to secure your account and allow you to push code' },
      { question: 'How much does a basic GitHub account cost?', options: ['$7/month', 'Free', '$12/year', 'Free for only 30 days'], answer: 'Free' }
    ],
    interviewQuestions: [
      { q: 'Why is it important to align your local Git config email with your GitHub email?', a: 'GitHub associates commits with your account based on the email address in the commit metadata. If they match, your profile shows the commits on your contribution graph (green squares) and attributes them to you.' }
    ],
    summary: ['Sign up professional at github.com.', 'Link email to your local Git config.', 'Basic accounts are 100% free.'],
    references: commonReferences
  },

  'git_dashboard_overview': {
    isStructured: true,
    title: '6. GitHub Dashboard Overview',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The main user landing page on GitHub. It displays updates from developers you follow, repositories you star, and shortcuts to create repositories.',
    whyUseIt: 'To quickly navigate to your projects, inspect team activity feed, and monitor notifications.',
    syntax: '-- Left Sidebar: Repositories & Teams\n-- Center Feed: Feed & Announcements\n-- Top Bar: Search, Notifications, Profile settings',
    codeExample: '# Main layout blocks:\n- Repositories panel (list of projects)\n- Explore tab (trending repositories)\n- Notification bell (alerts for updates)',
    expectedOutput: 'Fast access to all code bases and notifications.',
    explanation: [
      { code: 'Explore panel', desc: 'Suggests open-source projects based on your interests.' },
      { code: 'Notification center', desc: 'Tracks updates on repositories you contribute to.' }
    ],
    realWorldExample: 'An engineer opens GitHub in the morning. They check their notifications, see that a teammate requested a review on a PR, and click it directly from the dashboard.',
    commonMistakes: [
      { error: 'Ignoring the Notification settings', code: '', suffix: 'If you join big open-source projects, you will get hundreds of emails. Configure notifications to "Participating" rather than "Watching".' }
    ],
    bestPractices: ['Frequently clean up your dashboard notifications to ensure you don\'t miss messages from teammates.'],
    practiceExercise: {
      task: 'Log into your GitHub account, locate the "New" repository button on the dashboard, and check your notification inbox.',
      expectedOutput: 'You see the dashboard UI and list of current repositories.',
      solution: 'Navigate to https://github.com/notifications to inspect notifications.'
    },
    quiz: [
      { question: 'What is displayed on the left side of your main GitHub dashboard?', options: ['Your computer files', 'A list of your repositories and recent activity', 'System settings', 'Chat room'], answer: 'A list of your repositories and recent activity' },
      { question: 'What does the search bar at the top of GitHub search for?', options: ['Google results', 'Repositories, code, users, and issues across all of GitHub', 'Your local computer files', 'Nothing, it is static'], answer: 'Repositories, code, users, and issues across all of GitHub' },
      { question: 'What does the bell icon at the top right represent?', options: ['A clock', 'Your notification inbox for PRs, issues, and discussions', 'Support chat', 'A payment alert'], answer: 'Your notification inbox for PRs, issues, and discussions' },
      { question: 'How do you create a new repository from the dashboard?', options: ['Type a terminal command', 'Click the green "New" button in the repositories section', 'Email GitHub support', 'Right-click the page'], answer: 'Click the green "New" button in the repositories section' },
      { question: 'What is the "Explore" feed on the dashboard?', options: ['A maps program', 'A feed showing popular or trending repositories based on your interests', 'A file manager', 'An advertising board'], answer: 'A feed showing popular or trending repositories based on your interests' }
    ],
    interviewQuestions: [
      { q: 'How do you customize your public profile page to show specific repositories instead of default ones?', a: 'On your public profile, you can click "Customize your pins" in the Pinned section and choose up to 6 repositories to showcase.' }
    ],
    summary: ['Center of your GitHub navigation.', 'Provides notifications for issues and PRs.', 'Quick links to repository creation.'],
    references: commonReferences
  },

  'git_install': {
    isStructured: true,
    title: '7. Installing Git',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'Setting up the Git command line program on your operating system so you can track local files.',
    whyUseIt: 'You cannot use GitHub offline or run Git commands without installing the CLI program first.',
    syntax: '# Windows (via winget or installer):\nwinget install --id Git.Git -e --source winget\n\n# macOS (via Homebrew):\nbrew install git\n\n# Ubuntu/Debian:\nsudo apt update && sudo apt install git',
    codeExample: '# Verify installation:\ngit --version\n\n# Configure user:\ngit config --global user.name "John Doe"\ngit config --global user.email "johndoe@example.com"',
    expectedOutput: 'git version 2.45.0 (or newer)',
    explanation: [
      { code: 'git --version', desc: 'Checks if the command is recognized and prints the installed version.' },
      { code: 'git config --global', desc: 'Sets default name and email variables used to sign your commits.' }
    ],
    realWorldExample: 'A developer buys a new laptop. First, they install Git via terminal, configure their global identity, and verify it with `git --version`.',
    commonMistakes: [
      { error: 'Forgetting to configure name and email', code: '', suffix: 'If you don\'t set user.name and user.email, Git will block you when you attempt your first commit and demand you set them.' }
    ],
    bestPractices: ['Always use `--global` when configuring your user name and email on a personal computer.'],
    practiceExercise: {
      task: 'Install Git, check its version, and configure your global username and email.',
      expectedOutput: 'A printed version number and no errors when setting configs.',
      solution: 'git --version && git config --global user.name "Your Name" && git config --global user.email "your@email.com"'
    },
    quiz: [
      { question: 'What is the command to verify if Git is installed correctly?', options: ['git install', 'git --version', 'git status', 'check-git'], answer: 'git --version' },
      { question: 'Which command sets your global username for commits?', options: ['git set name', 'git config --global user.name "Name"', 'git username "Name"', 'config git.name'], answer: 'git config --global user.name "Name"' },
      { question: 'On Ubuntu Linux, what command installs Git?', options: ['brew install git', 'sudo apt install git', 'yum install git', 'install-git'], answer: 'sudo apt install git' },
      { question: 'What does the `--global` flag mean in Git configurations?', options: ['Configures Git for the entire internet', 'Applies the settings to all repositories on your current computer user account', 'Encrypts the config file', 'Makes it run faster'], answer: 'Applies the settings to all repositories on your current computer user account' },
      { question: 'Where does Git store global configurations?', options: ['In a database', 'In a hidden .gitconfig file in your user home directory', 'In the registry', 'In C:\\Windows'], answer: 'In a hidden .gitconfig file in your user home directory' }
    ],
    interviewQuestions: [
      { q: 'How do you check your current global Git configurations?', a: 'You can run the command `git config --list` or `git config --global --list` to print all configurations.' }
    ],
    summary: ['Install Git using package managers or direct installer.', 'Verify using `git --version`.', 'Set `user.name` and `user.email` globally.'],
    references: commonReferences
  },

  'git_create_repo': {
    isStructured: true,
    title: '8. Creating Your First Repository',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A repository (repo) is the digital container holding all project folders and files, along with their revision history. Creating one establishes tracking.',
    whyUseIt: 'You must initialize a repository to begin using Git commands to track your progress and store code on GitHub.',
    syntax: '# Create local repository:\nmkdir my-project\ncd my-project\ngit init',
    codeExample: '# Create via terminal:\nmkdir portfolio-website\ncd portfolio-website\ngit init',
    expectedOutput: 'Initialized empty Git repository in D:/Btech/PROJECTS/my-project/.git/',
    explanation: [
      { code: 'git init', desc: 'Creates a hidden `.git` folder in your project directory. This folder is the brain of Git, storing all commit history.' }
    ],
    realWorldExample: 'A freelancer starts a new client project. They create a folder named `landing-page`, open it in the terminal, run `git init`, and create their first file.',
    commonMistakes: [
      { error: 'Running `git init` inside your Home directory', code: '', suffix: 'Never run `git init` directly in `/home/user` or `C:\\Users\\name`. Doing this will track your entire computer, causing lags. Always create a dedicated project subfolder first.' }
    ],
    bestPractices: ['Create one Git repository per project. Do not nest Git repositories inside one another.'],
    practiceExercise: {
      task: 'Create a new folder named `git-test`, navigate into it, and initialize a Git repository.',
      expectedOutput: 'Successful initialization output.',
      solution: 'mkdir git-test && cd git-test && git init'
    },
    quiz: [
      { question: 'What command initializes a new local Git repository?', options: ['git new', 'git start', 'git init', 'git create'], answer: 'git init' },
      { question: 'What is a repository?', options: ['A text editor', 'A project folder containing all code files and their entire Git history', 'A database server', 'A website hosting platform'], answer: 'A project folder containing all code files and their entire Git history' },
      { question: 'What folder is created when you run `git init`?', options: ['.github', '.git (hidden)', 'src', 'bin'], answer: '.git (hidden)' }
    ],
    interviewQuestions: [
      { q: 'What is inside the hidden `.git` directory?', a: 'The `.git` directory contains the Git object database, configuration files, hooks, references to branches/tags, and HEAD pointing to the current branch. If you delete this folder, you lose your entire commit history.' }
    ],
    summary: ['A repository holds files and history.', '`git init` initializes tracking.', 'Never run `git init` in root directories.'],
    references: commonReferences
  },

  'git_public_private': {
    isStructured: true,
    title: '9. Public vs Private Repositories',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'GitHub repository access levels. Public repos are open for anyone on the internet to see. Private repos are restricted to you and specific collaborators.',
    whyUseIt: 'To ensure open-source codes are public for portfolio building, while proprietary code or database passwords remain hidden and secure.',
    syntax: '-- Public: Anyone can see and clone code\n-- Private: Only users granted permission can view code',
    codeExample: '# Set visibility during creation:\nSelect: (o) Public   OR   (o) Private',
    expectedOutput: 'Access control configured for your repository.',
    explanation: [
      { code: 'Public', desc: 'Great for resumes and open-source contributions.' },
      { code: 'Private', desc: 'Ideal for proprietary schoolwork, business code, or drafts.' }
    ],
    realWorldExample: 'A startup developer writes code for a proprietary backend database (Private repository) but keeps their UI helper library public (Public repository).',
    commonMistakes: [
      { error: 'Publishing API keys in public repositories', code: '', suffix: 'If you push sensitive tokens, database passwords, or secret keys to a public repository, automated scanners will steal them in seconds.' }
    ],
    bestPractices: ['Keep repositories private by default if you are working with secrets or school assignments to prevent plagiarism issues.'],
    practiceExercise: {
      task: 'Go to GitHub, create a repository, and select "Private" visibility.',
      expectedOutput: 'A repository with a small padlock icon indicating private status.',
      solution: 'Navigate to GitHub -> Create Repository -> Select "Private" -> Click Create.'
    },
    quiz: [
      { question: 'Who can see a Public repository?', options: ['Only you', 'Only people you invite', 'Anyone on the internet', 'Only GitHub admins'], answer: 'Anyone on the internet' },
      { question: 'Who can see a Private repository?', options: ['Only you and explicit collaborators you invite', 'Everyone on the internet', 'Nobody except Microsoft employees', 'Only premium users'], answer: 'Only you and explicit collaborators you invite' },
      { question: 'Does a private repository cost money on GitHub?', options: ['Yes', 'No, private repos are free for basic user accounts', 'Only if they exceed 5 files', 'Only on weekends'], answer: 'No, private repos are free for basic user accounts' }
    ],
    interviewQuestions: [
      { q: 'What happens if you accidentally push API keys to a public repository?', a: 'You must immediately revoke (change) the keys. Git remembers history, so even if you delete the file in a new commit, the keys remain visible in older commits. You would have to overwrite the history or delete the repository.' }
    ],
    summary: ['Public repos are visible to everyone.', 'Private repos require invitations to view.', 'Keep secrets out of public repos.'],
    references: commonReferences
  },

  'git_repo_structure': {
    isStructured: true,
    title: '10. Repository Structure',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The standard layout of files in a Git repository, including project files, the hidden `.git` directory, `.gitignore`, and the `.github` workflow directory.',
    whyUseIt: 'Following standard repository structures keeps the codebase organized and enables automated workflows to run properly.',
    syntax: 'project-root/\n├── .git/            (hidden)\n├── .github/         (GitHub workflows)\n├── .gitignore       (ignored files)\n├── README.md        (documentation)\n└── src/             (source files)',
    codeExample: '# Tree display of project:\ntree /a',
    expectedOutput: 'A structured list of directories and configuration files.',
    explanation: [
      { code: '.github/', desc: 'Contains YAML workflow configuration files for GitHub Actions.' },
      { code: 'src/', desc: 'The folder containing all developer source code files.' }
    ],
    realWorldExample: 'A professional React project has components in `src/components`, static assets in `public`, and custom Actions workflows in `.github/workflows/deploy.yml`.',
    commonMistakes: [
      { error: 'Messing with files in the .git folder', code: '', suffix: 'Do not modify folders inside `.git/` manually unless you are an expert, as you can easily corrupt the repository history.' }
    ],
    bestPractices: ['Keep configuration files in the root folder, and place source code files inside a `/src` directory.'],
    practiceExercise: {
      task: 'Create a structure containing folders `src`, `.github`, and a file `README.md`.',
      expectedOutput: 'Folder structure created.',
      solution: 'mkdir src .github && touch README.md'
    },
    quiz: [
      { question: 'Which directory stores the history of all your commits?', options: ['.github', '.git', 'src', 'config'], answer: '.git' },
      { question: 'Where do GitHub Action workflow files reside?', options: ['In the root folder', 'Inside .github/workflows/', 'Inside the src folder', 'In the settings tab'], answer: 'Inside .github/workflows/' },
      { question: 'What is the purpose of a `/src` directory?', options: ['To hold images', 'To separate source files from settings and config files in the root', 'To hold licenses', 'To run Git commands'], answer: 'To separate source files from settings and config files in the root' }
    ],
    interviewQuestions: [
      { q: 'What is the root of a Git repository?', a: 'The root is the top-level directory containing the hidden `.git` folder. All paths inside the repo are tracked relative to this root folder.' }
    ],
    summary: ['Keep root directories clean.', 'Use subfolders for code.', 'Do not touch `.git` contents.'],
    references: commonReferences
  },

  'git_readme': {
    isStructured: true,
    title: '11. README.md',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A documentation file written in Markdown (`.md`) that is automatically displayed at the bottom of the repository page on GitHub.',
    whyUseIt: 'It is the face of your project. It explains what the project is, how to install it, how to run it, and how to use it.',
    syntax: '# Headers\n## Subheaders\n- Bullet points\n**Bold Text**\n`Code snippets`',
    codeExample: '# README.md contents:\n# My React App\nThis is a simple React application.\n\n## Installation\n```bash\nnpm install\nnpm run dev\n```',
    expectedOutput: 'A formatted HTML page displaying headers, text, lists, and code blocks under the files list.',
    explanation: [
      { code: '#', desc: 'Represents an H1 HTML header.' },
      { code: '```bash', desc: 'Starts a fenced code block with bash syntax highlighting.' }
    ],
    realWorldExample: 'A developer creates a library. They write a detailed `README.md` with GIFs showing the product and code blocks showing how to use the API.',
    commonMistakes: [
      { error: 'Leaving README.md empty or auto-generated', code: '', suffix: 'Hiring managers check the README. If it is empty, they won\'t understand how to run your project.' }
    ],
    bestPractices: ['Always include an "Installation" and "Usage" section in your README.md.'],
    practiceExercise: {
      task: 'Create a `README.md` file in a text editor and add an H1 header and a bulleted list.',
      expectedOutput: 'A file containing markdown text.',
      solution: 'echo "# Test Project" > README.md && echo "- Bullet 1" >> README.md'
    },
    quiz: [
      { question: 'What does the `.md` extension stand for?', options: ['Module Document', 'Markdown', 'Metadata', 'Media Data'], answer: 'Markdown' },
      { question: 'Where is the README.md content displayed on GitHub?', options: ['Only inside the code viewer', 'At the bottom of the repository homepage', 'In the settings tab', 'In the profile page only'], answer: 'At the bottom of the repository homepage' },
      { question: 'How do you create an H2 header in Markdown?', options: ['<h1>', '## Header', '# Header', '**Header**'], answer: '## Header' }
    ],
    interviewQuestions: [
      { q: 'Why is README.md critical for Open Source projects?', a: 'It onboard contributors. It details prerequisites, deployment instructions, guidelines to submit PRs, and credits licenses.' }
    ],
    summary: ['Acts as the homepage documentation.', 'Written in user-friendly Markdown.', 'Must document setup and launch instructions.'],
    references: commonReferences
  },

  'git_gitignore': {
    isStructured: true,
    title: '12. .gitignore',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A plain text file where you list filenames, directory paths, and wildcards that Git should completely ignore and never track.',
    whyUseIt: 'To prevent large folders (like `node_modules`), temporary files (like `.DS_Store`), builds, and secrets from cluttering the repository history.',
    syntax: '# Ignore specific folder:\nnode_modules/\n\n# Ignore all .env files:\n*.env\n\n# Ignore log files:\n*.log',
    codeExample: '# Create a .gitignore file:\nnode_modules/\ndist/\n.env\n*.log',
    expectedOutput: 'Ignored files turn grey in VS Code and are ignored when running `git status`.',
    explanation: [
      { code: 'node_modules/', desc: 'Ignores the massive dependencies folder (which can be rebuilt with `npm install`).' },
      { code: '*.env', desc: 'Ignores files containing local environment secrets.' }
    ],
    realWorldExample: 'A Node.js developer creates a `.gitignore` containing `node_modules/` before staging files to avoid pushing 100MB of dependencies to GitHub.',
    commonMistakes: [
      { error: 'Committing node_modules or secret files', code: '', suffix: 'If you commit `node_modules` and then add it to `.gitignore` later, it will NOT work. You must untrack the files first with `git rm --cached`.' }
    ],
    bestPractices: ['Create your `.gitignore` file during the very first commit of your repository.'],
    practiceExercise: {
      task: 'Create a `.gitignore` file and write a rule to ignore all `.env` files.',
      expectedOutput: 'File created with correct wildcard.',
      solution: 'echo "*.env" > .gitignore'
    },
    quiz: [
      { question: 'What is the purpose of a `.gitignore` file?', options: ['To compress files', 'To tell Git which files and folders to ignore and not track', 'To delete files permanently', 'To secure files with passwords'], answer: 'To tell Git which files and folders to ignore and not track' },
      { question: 'How do you tell Git to ignore all files ending with `.log`?', options: ['ignore .log', 'delete *.log', '*.log', 'exclude *.log'], answer: '*.log' },
      { question: 'If a file is already tracked, will adding it to `.gitignore` stop Git from tracking it?', options: ['Yes, immediately', 'No, you must run git rm --cached first to remove it from staging', 'Yes, on the next reboot', 'Only if the file is deleted'], answer: 'No, you must run git rm --cached first to remove it from staging' }
    ],
    interviewQuestions: [
      { q: 'Why shouldn\'t we push `node_modules` or dependencies to GitHub?', a: 'Dependency folders are massive and slow down the git repository sync. Anyone who clones the repo can easily recreate them locally using `npm install` (or equivalent tool) based on package.json.' }
    ],
    summary: ['Ignores temporary, build, and secret files.', 'Prevents repository bloat.', 'Created at the start of a project.'],
    references: commonReferences
  },

  'git_license': {
    isStructured: true,
    title: '13. LICENSE File',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A file in the root of the repository containing the legal terms under which others can use, modify, and distribute your code.',
    whyUseIt: 'Without a license, default copyright laws apply, meaning other developers cannot copy or use your open-source code.',
    syntax: 'MIT License\nApache License 2.0\nGNU GPLv3',
    codeExample: '# Common options:\n- MIT: Highly permissive (do whatever you want)\n- Apache 2.0: Permissive, includes patent rights\n- GPLv3: Copyleft (must make derivative work open-source)',
    expectedOutput: 'A legal disclaimer protecting your code and enabling open sharing.',
    explanation: [
      { code: 'MIT License', desc: 'Allows everyone to copy, modify, publish, and sell the code, with no liability on you.' }
    ],
    realWorldExample: 'A developer publishes a library on GitHub. They choose the MIT License so other developers can use it in commercial software.',
    commonMistakes: [
      { error: 'Not adding a license to open source projects', code: '', suffix: 'If you want people to collaborate on your public project, you MUST add a license. Otherwise, corporations will avoid it.' }
    ],
    bestPractices: ['Use GitHub\'s "Add License" template wizard when creating a new repository.'],
    practiceExercise: {
      task: 'Visit choosealicense.com and select the best license for a simple personal project.',
      expectedOutput: 'You identify the MIT License as the most appropriate permissive license.',
      solution: 'Navigate to https://choosealicense.com/ to read licenses.'
    },
    quiz: [
      { question: 'What happens if you do NOT add a license to your public repository?', options: ['It is public domain', 'Default copyright laws apply, and others legally cannot copy or use your code', 'GitHub deletes it', 'It becomes paid software'], answer: 'Default copyright laws apply, and others legally cannot copy or use your code' },
      { question: 'Which license is highly permissive and allows commercial use, modification, and sublicensing?', options: ['MIT License', 'GPLv3', 'Creative Commons', 'No License'], answer: 'MIT License' },
      { question: 'What does a copyleft license (like GPLv3) require?', options: ['You must pay to use it', 'Any derivative code must also be made open source under the same license', 'It can only be run on Linux', 'No commercial usage allowed'], answer: 'Any derivative code must also be made open source under the same license' }
    ],
    interviewQuestions: [
      { q: 'Why do companies prefer MIT or Apache licenses over GPL licenses in libraries they use?', a: 'GPL licenses have copyleft clauses requiring any software importing the library to also become GPL (open source). MIT and Apache allow companies to keep their main software proprietary.' }
    ],
    summary: ['Defines legal terms of use.', 'Permissive vs Copyleft.', 'Use choosealicense.com to decide.'],
    references: commonReferences
  },

  'git_repo_settings': {
    isStructured: true,
    title: '14. Repository Settings',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The web-based administration panel on GitHub where you manage repository properties like renaming, collaborators, branches, and visibility.',
    whyUseIt: 'To invite teammates, configure branch protection rules, delete repositories, or toggle GitHub Pages.',
    syntax: '-- Navigated via the "Settings" gear icon on the repository web page',
    codeExample: '# Web Settings Options:\n- General (Rename, Archive, Delete)\n- Collaborators (Invite teams)\n- Branches (Branch protection rules)',
    expectedOutput: 'Settings updated successfully.',
    explanation: [
      { code: 'Danger Zone', desc: 'Found at the bottom of the Settings page. Used to change visibility, transfer, or delete the repository.' }
    ],
    realWorldExample: 'An engineer wants to delete a temporary test repository. They scroll to the bottom of Settings, click "Delete this repository", and type the repo name to confirm.',
    commonMistakes: [
      { error: 'Leaving default branch unprotected', code: '', suffix: 'In team environments, always configure "Branch Protection Rules" on the main branch to prevent developers from force-pushing and overwriting history.' }
    ],
    bestPractices: ['Keep the "Danger Zone" operations locked with multi-factor authentication (MFA).'],
    practiceExercise: {
      task: 'Navigate to the Settings tab of any repository you own and find the "Danger Zone" section.',
      expectedOutput: 'You see options to change visibility, transfer ownership, or delete.',
      solution: 'Click the Settings tab -> Scroll to bottom -> Inspect Danger Zone.'
    },
    quiz: [
      { question: 'Where on the repository page is the Settings tab located?', options: ['Inside the code files', 'In the top tab bar (represented by a gear icon)', 'In your user profile dropdown', 'In the footer'], answer: 'In the top tab bar (represented by a gear icon)' },
      { question: 'What is the "Danger Zone"?', options: ['A game section', 'An area in Settings for high-risk actions (renaming, archiving, deleting) that requires password confirmation', 'A security warning about code bugs', 'A page of active servers'], answer: 'An area in Settings for high-risk actions (renaming, archiving, deleting) that requires password confirmation' },
      { question: 'How do you invite a collaborator to a private repository?', options: ['Email them the files', 'Go to Settings -> Collaborators -> Click "Add people" and enter their username', 'Make the repository public', 'They can access it automatically'], answer: 'Go to Settings -> Collaborators -> Click "Add people" and enter their username' }
    ],
    interviewQuestions: [
      { q: 'What is a branch protection rule and why is it used?', a: 'It is a setting that prevents direct pushes to a branch (like `main`). It requires developer changes to go through Pull Requests, code reviews, and pass automated tests before merging.' }
    ],
    summary: ['Controls repository attributes.', 'Collaborators can be invited.', 'Danger Zone handles deletions.'],
    references: commonReferences
  },

  'git_auth': {
    isStructured: true,
    title: '15. GitHub Authentication',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'The protocol of verifying your identity when connecting your local computer to your remote GitHub account for secure pushing/pulling.',
    whyUseIt: 'GitHub disabled standard password authentication in 2021 to prevent credential interception. You must authenticate using secure tokens or SSH.',
    syntax: '-- Personal Access Tokens (HTTPS)\n-- SSH Keys (SSH)',
    codeExample: '# Attempting to push with username and account password (DEPRECATED):\nUsername: myuser\nPassword: <account-password> -> ERROR: Support for password authentication was removed!',
    expectedOutput: 'Successful authentication token verification.',
    explanation: [
      { code: 'HTTPS', desc: 'Secure web connection using tokens as temporary passwords.' },
      { code: 'SSH', desc: 'Cryptographic handshake between your private computer key and your public GitHub key.' }
    ],
    realWorldExample: 'A developer attempts to push code, gets a password deprecation error, and immediately switches to SSH authentication to bypass typing credentials.',
    commonMistakes: [
      { error: 'Trying to push with account password', code: '', suffix: 'Standard login passwords DO NOT work for git command line operations anymore. You must use a PAT or SSH key.' }
    ],
    bestPractices: ['Prefer SSH authentication over HTTPS/PAT because it uses cryptography and does not require typing keys or credentials.'],
    practiceExercise: {
      task: 'Identify whether your current Git setup uses HTTPS or SSH URLs.',
      expectedOutput: 'Url format showing either https:// or git@github.com.',
      solution: 'git remote -v'
    },
    quiz: [
      { question: 'Why can\'t you use your normal GitHub password to push code from the terminal?', options: ['GitHub is down', 'Password authentication for command-line Git operations was deprecated in 2021 for security', 'Terminal doesn\'t support letters', 'Passwords only work on Windows'], answer: 'Password authentication for command-line Git operations was deprecated in 2021 for security' },
      { question: 'What are the two modern ways to authenticate with GitHub from your local terminal?', options: ['Username/Password and SMS OTP', 'Personal Access Tokens (PAT) and SSH Keys', 'Facebook login and Google login', 'None, you can\'t connect them'], answer: 'Personal Access Tokens (PAT) and SSH Keys' },
      { question: 'Which protocol is generally preferred for automated, passwordless connections?', options: ['HTTPS', 'SSH', 'FTP', 'HTTP'], answer: 'SSH' }
    ],
    interviewQuestions: [
      { q: 'Why did GitHub deprecate account password authentication for CLI operations?', a: 'Passwords are vulnerable to brute force and phishing attacks. Tokens (PATs) and SSH keys can be scoped to specific permissions, expired, and revoked individually without changing the main account password.' }
    ],
    summary: ['Passwords are deprecated for CLI operations.', 'Must use SSH or PAT.', 'SSH is recommended for passwordless syncs.'],
    references: commonReferences
  }
};
