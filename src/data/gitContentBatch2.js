const commonReferences = [
  { label: 'W3Schools Git & GitHub', url: 'https://www.w3schools.com/git/' },
  { label: 'GitHub Official Docs', url: 'https://docs.github.com/' },
  { label: 'Git SCM Documentation', url: 'https://git-scm.com/doc' }
];

export const gitContentBatch2 = {
  'git_pat': {
    isStructured: true,
    title: '16. Personal Access Token (PAT)',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'A Personal Access Token (PAT) is an alternative to using a password for Git authentication. It behaves like a password but allows you to limit access permissions (scopes) and set an expiration date.',
    whyUseIt: 'Required for HTTPS authentication when interacting with GitHub from the command line or using external development tools.',
    syntax: 'Generate via: GitHub Profile -> Settings -> Developer Settings -> Personal Access Tokens',
    codeExample: '# Use token as your password when git prompts:\nUsername: your_username\nPassword: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    expectedOutput: 'Access granted. Git commands complete successfully.',
    explanation: [
      { code: 'ghp_...', desc: 'All Personal Access Tokens (classic) start with this prefix so they are easily recognizable.' },
      { code: 'Scopes', desc: 'Specific checkboxes (like `repo`, `admin:public_key`) to grant limited permissions to the token.' }
    ],
    realWorldExample: 'A developer generates a token with `repo` scope, expires it in 30 days, and uses it to connect their VS Code editor to GitHub.',
    commonMistakes: [
      { error: 'Leaking the token or committing it to a file', code: '', suffix: 'Treat your PAT like a raw password. Never paste it in code or share it.' }
    ],
    bestPractices: ['Use fine-grained Personal Access Tokens if you only need to grant access to specific repositories.'],
    practiceExercise: {
      task: 'Navigate to Developer Settings in GitHub and generate a temporary token with `repo` scopes.',
      expectedOutput: 'A generated ghp_ string displayed once (you must copy it).',
      solution: 'Navigate to https://github.com/settings/tokens'
    },
    quiz: [
      { question: 'What prefix do classic GitHub Personal Access Tokens start with?', options: ['git_', 'ghp_', 'ssh_', 'pwd_'], answer: 'ghp_' },
      { question: 'What is a key benefit of a PAT over a password?', options: ['It is shorter', 'It has custom scopes (permissions) and expiration dates', 'It automatically commits files', 'It does not require internet'], answer: 'It has custom scopes (permissions) and expiration dates' },
      { question: 'Can you see your token again after leaving the generation page?', options: ['Yes, anytime', 'No, it is shown only once; you must copy and save it securely', 'Only if you pay', 'Only on Linux'], answer: 'No, it is shown only once; you must copy and save it securely' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between classic tokens and fine-grained tokens on GitHub?', a: 'Classic tokens grant permissions to all repositories owned by the user. Fine-grained tokens allow you to restrict permissions to specific repositories, enhancing security.' }
    ],
    summary: ['Alternative to password for HTTPS operations.', 'Starts with `ghp_`.', 'Configure limited permissions (scopes).'],
    references: commonReferences
  },

  'git_ssh_keys': {
    isStructured: true,
    title: '17. SSH Keys',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'Secure Shell (SSH) keys are a pair of cryptographic keys (a private key stored on your computer and a public key uploaded to GitHub) used for passwordless authentication.',
    whyUseIt: 'Allows you to push and pull securely without typing your username or token every time.',
    syntax: '# Generate keys:\nssh-keygen -t ed25519 -C "your_email@example.com"\n\n# Test connection:\nssh -T git@github.com',
    codeExample: '# 1. Generate SSH Key:\nssh-keygen -t ed25519 -C "dev@example.com"\n\n# 2. Add public key (~/.ssh/id_ed25519.pub) to GitHub Settings\n\n# 3. Test:\nssh -T git@github.com',
    expectedOutput: 'Hi username! You\'ve successfully authenticated, but GitHub does not provide shell access.',
    explanation: [
      { code: 'ssh-keygen', desc: 'A command line utility to generate a new public/private key pair.' },
      { code: 'ed25519', desc: 'The modern, highly secure cryptographic algorithm recommended for SSH keys.' }
    ],
    realWorldExample: 'A system administrator configures an SSH key for an automated server script so the server can pull updates from a private repo without human interaction.',
    commonMistakes: [
      { error: 'Sharing your private key', code: '', suffix: 'Never share `id_ed25519`. Share ONLY the public key (`id_ed25519.pub`) which ends with `.pub`.' }
    ],
    bestPractices: ['Use the modern Ed25519 algorithm instead of RSA when generating new SSH keys.'],
    practiceExercise: {
      task: 'Check if you have existing SSH keys on your computer.',
      expectedOutput: 'List of files (e.g., id_rsa or id_ed25519).',
      solution: 'ls -la ~/.ssh'
    },
    quiz: [
      { question: 'Which SSH key should you upload to GitHub?', options: ['Your private key (id_ed25519)', 'Your public key (id_ed25519.pub)', 'Both keys', 'Neither'], answer: 'Your public key (id_ed25519.pub)' },
      { question: 'What algorithm is currently recommended by GitHub for generating SSH keys?', options: ['RSA 2048', 'Ed25519', 'SHA-1', 'MD5'], answer: 'Ed25519' },
      { question: 'What command tests your SSH connection to GitHub?', options: ['git ping', 'ssh -T git@github.com', 'ping github.com', 'ssh connection'], answer: 'ssh -T git@github.com' }
    ],
    interviewQuestions: [
      { q: 'How does SSH public key authentication work structurally?', a: 'Your computer sends a signature generated with your private key. GitHub uses the public key you uploaded to verify the signature. Since only your private key could create that signature, you are authenticated securely without transmitting password data.' }
    ],
    summary: ['Uses public/private key pairs.', 'Enables passwordless authentication.', 'Never expose your private key.'],
    references: commonReferences
  },

  'git_connect_local': {
    isStructured: true,
    title: '18. Connecting Local Repository',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Linking an initialized Git repository on your local computer to a remote repository hosted on GitHub.',
    whyUseIt: 'Allows your local repository to know where to push commits or pull updates from.',
    syntax: 'git remote add origin [URL]',
    codeExample: '# Add remote endpoint:\ngit remote add origin https://github.com/username/my-repo.git\n\n# Verify connection:\ngit remote -v',
    expectedOutput: 'origin  https://github.com/username/my-repo.git (fetch)\norigin  https://github.com/username/my-repo.git (push)',
    explanation: [
      { code: 'origin', desc: 'The default nickname Git gives to the primary remote server repository.' },
      { code: 'git remote add', desc: 'Command to register a remote URL with a short nickname.' }
    ],
    realWorldExample: 'You build a local website folder. You go to GitHub, create `website-project`, copy the URL, and run `git remote add origin <URL>` in the folder to connect them.',
    commonMistakes: [
      { error: 'Adding remote that already exists', code: '', suffix: 'If you get "remote origin already exists" error, run `git remote set-url origin [URL]` to change it, or `git remote remove origin` to delete it.' }
    ],
    bestPractices: ['Double-check remote URLs using `git remote -v` to ensure you are pushing to the correct repository.'],
    practiceExercise: {
      task: 'Connect your local repository to a mock remote url `https://github.com/example/test.git`.',
      expectedOutput: 'Origin links successfully to the dummy URL.',
      solution: 'git remote add origin https://github.com/example/test.git && git remote -v'
    },
    quiz: [
      { question: 'What is the default nickname for the main remote repository?', options: ['main', 'master', 'origin', 'remote'], answer: 'origin' },
      { question: 'What command links your local repo to a remote repository URL?', options: ['git link URL', 'git remote add origin URL', 'git connect origin URL', 'git remote set URL'], answer: 'git remote add origin URL' },
      { question: 'What does `git remote -v` do?', options: ['Shows the version', 'Lists all configured remote repositories and their URLs', 'Deletes remotes', 'Shows remote commits'], answer: 'Lists all configured remote repositories and their URLs' }
    ],
    interviewQuestions: [
      { q: 'Can a local Git repository be connected to multiple remote repositories?', a: 'Yes. You can add multiple remotes with different nicknames (e.g., `git remote add upstream URL` or `git remote add backup URL`) to sync your code to different servers.' }
    ],
    summary: ['Links local repo to GitHub.', 'Default remote name is `origin`.', 'Use `git remote -v` to inspect.'],
    references: commonReferences
  },

  'git_first_push': {
    isStructured: true,
    title: '19. First Push to GitHub',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Uploading your local project files and complete commit history to GitHub for the first time, establishing the upstream tracking branch.',
    whyUseIt: 'To publish your code online and set up tracking so future pushes can be done with a simple `git push`.',
    syntax: 'git push -u origin [branch_name]',
    codeExample: '# Push main branch for the first time:\ngit branch -M main\ngit push -u origin main',
    expectedOutput: 'Branch \'main\' set up to track remote branch \'main\' from \'origin\'.',
    explanation: [
      { code: '-M main', desc: 'Renames the default branch name to `main` (if it was `master`).' },
      { code: '-u', desc: 'Upstream. Tells Git to link this local branch to the remote branch, so you can run just `git push` next time.' }
    ],
    realWorldExample: 'A junior developer finishes the initial setup of an application. They type `git push -u origin main` to upload the code to GitHub so their lead can review it.',
    commonMistakes: [
      { error: 'Forgetting -u on first push', code: '', suffix: 'If you push without `-u`, subsequent pushes will require you to specify `git push origin main` every single time.' }
    ],
    bestPractices: ['Ensure your local branch is named `main` (the modern standard) instead of `master` before pushing.'],
    practiceExercise: {
      task: 'Write the command to push a branch named `feature-login` to the remote repository `origin` for the first time.',
      expectedOutput: 'git push -u origin feature-login',
      solution: 'git push -u origin feature-login'
    },
    quiz: [
      { question: 'What does the `-u` flag stand for in `git push -u`?', options: ['User', 'Update', 'Upstream (sets default tracking branch)', 'Unlock'], answer: 'Upstream (sets default tracking branch)' },
      { question: 'What does `git branch -M main` do?', options: ['Deletes the main branch', 'Renames the current local branch to main', 'Pushes the branch', 'Merges code'], answer: 'Renames the current local branch to main' },
      { question: 'After running `git push -u origin main` once, how do you push future commits?', options: ['git push -u origin main', 'git upload', 'git push', 'git push main'], answer: 'git push' }
    ],
    interviewQuestions: [
      { q: 'What does "setting the upstream branch" actually do under the hood?', a: 'It establishes a link between your local branch and the remote branch. This enables shorthand commands like `git push` and `git pull`, and allows Git to tell you if your local branch is "ahead" or "behind" the remote branch.' }
    ],
    summary: ['Uploads local repository to GitHub.', '`-u` sets remote branch association.', 'Renaming to `main` is standard practice.'],
    references: commonReferences
  },

  'git_cloning': {
    isStructured: true,
    title: '20. Cloning a Repository',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Downloading an existing repository from GitHub to your local computer, which includes all files, directories, branches, and the complete commit history.',
    whyUseIt: 'To copy a project from GitHub to your laptop so you can start working on it locally.',
    syntax: 'git clone [Repository_URL]',
    codeExample: '# Clone React repository:\ngit clone https://github.com/facebook/react.git\n\n# Clone via SSH:\ngit clone git@github.com:facebook/react.git',
    expectedOutput: 'Cloning into \'react\'...\nReceiving objects: 100% ... done.',
    explanation: [
      { code: 'git clone', desc: 'Creates a folder with the repository name, downloads all files, initializes `.git`, and automatically configures `origin` remote.' }
    ],
    realWorldExample: 'You join a new company. They send you a GitHub repository link. You run `git clone <link>` in your terminal and immediately open it in VS Code.',
    commonMistakes: [
      { error: 'Cloning a repository inside an existing repository', code: '', suffix: 'Make sure you are not already inside a git repository folder before you clone, or you will create nested repositories which are difficult to manage.' }
    ],
    bestPractices: ['Use the SSH URL for cloning if you have configured SSH keys, avoiding username/token prompts.'],
    practiceExercise: {
      task: 'Clone the repository `https://github.com/octocat/Spoon-Knife.git` to your local machine.',
      expectedOutput: 'A folder named `Spoon-Knife` is created with files inside.',
      solution: 'git clone https://github.com/octocat/Spoon-Knife.git'
    },
    quiz: [
      { question: 'What does `git clone` do?', options: ['Deletes a repository', 'Downloads a full copy of a remote repository (files and history) to your local machine', 'Creates a web backup', 'Compiles code'], answer: 'Downloads a full copy of a remote repository (files and history) to your local machine' },
      { question: 'Does a cloned repository contain the full commit history?', options: ['No, only the latest files', 'Yes, it contains the entire commit history and branches', 'Only if you run git logs', 'Only private repositories do'], answer: 'Yes, it contains the entire commit history and branches' },
      { question: 'Do you need to run `git init` after running `git clone`?', options: ['Yes', 'No, clone automatically sets up the repository and links the remote origin', 'Only on Windows', 'Only if the repo is empty'], answer: 'No, clone automatically sets up the repository and links the remote origin' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `git clone` and `git pull`?', a: '`git clone` is run once on an empty directory to download the entire repository. `git pull` is run inside an already cloned repository to download only new commits and update your existing local branch.' }
    ],
    summary: ['Copies remote repo to local folder.', 'Automatically configures remote connection.', 'Run outside existing Git directories.'],
    references: commonReferences
  },

  'git_status': {
    isStructured: true,
    title: '21. git status',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Displays the state of the working directory and the staging area, showing which files are modified, untracked, or staged.',
    whyUseIt: 'To verify what files are about to be committed and make sure no unwanted files are included.',
    syntax: 'git status',
    codeExample: '# Run status check:\ngit status',
    expectedOutput: 'On branch main\nChanges not staged for commit:\n  modified:   index.html\nUntracked files:\n  src/style.css',
    explanation: [
      { code: 'Changes not staged', desc: 'Files that have been edited but not yet marked with `git add`.' },
      { code: 'Untracked files', desc: 'New files created in the folder that Git is not currently tracking.' }
    ],
    realWorldExample: 'Before committing, a developer runs `git status` to check if they accidentally modified config files they didn\'t mean to touch.',
    commonMistakes: [
      { error: 'Assuming files are committed automatically', code: '', suffix: 'Git requires you to explicitly stage files first. `git status` helps check if you forgot to run `git add`.' }
    ],
    bestPractices: ['Run `git status` before and after running `git add` or `git commit` to monitor file states.'],
    practiceExercise: {
      task: 'Run `git status` in your current local project directory to see the status of your files.',
      expectedOutput: 'A list of tracked, untracked, and modified files.',
      solution: 'git status'
    },
    quiz: [
      { question: 'What does `git status` show?', options: ['Your system configurations', 'The status of files in your working directory and staging area', 'A list of remote servers', 'Commit histories'], answer: 'The status of files in your working directory and staging area' },
      { question: 'If a file is shown in red by git status, what does it mean?', options: ['It is committed', 'It has unstaged modifications or is untracked', 'It has syntax errors', 'It is ignored'], answer: 'It has unstaged modifications or is untracked' },
      { question: 'Does `git status` modify any files?', options: ['Yes, it staging files', 'No, it is a safe, read-only command', 'Only if run as admin', 'Yes, it commits files'], answer: 'No, it is a safe, read-only command' }
    ],
    interviewQuestions: [
      { q: 'What are the three main states/areas in Git that `git status` reports on?', a: '1. Working Directory (unstaged/modified files). 2. Staging Area (indexed files ready for commit). 3. Commit History (committed files).' }
    ],
    summary: ['Safe read-only command.', 'Shows modified, staged, and untracked files.', 'Run frequently during development.'],
    references: commonReferences
  },

  'git_add': {
    isStructured: true,
    title: '22. git add',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Moves changes from the working directory to the staging area, marking them as ready to be included in the next commit.',
    whyUseIt: 'Allows you to selectively bundle changes together. You can edit 5 files but only stage 2 of them to create clean, focused commits.',
    syntax: 'git add [file_name]\ngit add .',
    codeExample: '# Stage a single file:\ngit add index.html\n\n# Stage all changes in project:\ngit add .',
    expectedOutput: 'No console output is printed on success. Running `git status` will show files in green.',
    explanation: [
      { code: 'git add .', desc: 'Stages all modified, created, and deleted files in the current folder and subfolders.' },
      { code: 'Staging Area', desc: 'Also known as the Index. A temporary staging ground for files before writing them into Git history.' }
    ],
    realWorldExample: 'You fix a typo in `README.md` and add a new JS file. You run `git add README.md` to stage only the typo fix first, saving the JS file for a separate commit.',
    commonMistakes: [
      { error: 'Running `git add .` blindly', code: '', suffix: 'Avoid staging huge files, logs, or node_modules. Always run `git status` to see what is untracked before staging everything.' }
    ],
    bestPractices: ['Only stage files that belong to a single logical change. Split unrelated changes into multiple adds and commits.'],
    practiceExercise: {
      task: 'Create a file named `test.txt`, stage it using `git add`, and confirm it is staged using `git status`.',
      expectedOutput: 'Changes to be committed: new file: test.txt (displayed in green).',
      solution: 'touch test.txt && git add test.txt && git status'
    },
    quiz: [
      { question: 'What does `git add` do?', options: ['Saves files to hard drive', 'Adds files to the staging area (index) in preparation for a commit', 'Pushes code to GitHub', 'Initializes repository'], answer: 'Adds files to the staging area (index) in preparation for a commit' },
      { question: 'What command stages ALL modified and new files in the current folder?', options: ['git add all', 'git add .', 'git add -f', 'git stage all'], answer: 'git add .' },
      { question: 'What color does `git status` display staged files in?', options: ['Red', 'Blue', 'Green', 'Yellow'], answer: 'Green' }
    ],
    interviewQuestions: [
      { q: 'How do you unstage a file that you accidentally ran `git add` on?', a: 'You can run `git restore --staged <file>` or `git reset HEAD <file>` (older version) to remove it from staging without losing your modifications.' }
    ],
    summary: ['Prepares files for commits.', 'Saves changes to Staging Area (index).', '`git add .` stages all changes.'],
    references: commonReferences
  },

  'git_commit': {
    isStructured: true,
    title: '23. git commit',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Saves a snapshot of the staged files to the repository history, assigning it a unique ID (SHA-1 hash) and recording a descriptive message.',
    whyUseIt: 'To create a permanent checkpoint in your code history that you can return to if things break in the future.',
    syntax: 'git commit -m "[commit_message]"',
    codeExample: '# Commit with description message:\ngit commit -m "Add navbar component and responsiveness"',
    expectedOutput: '[main 4a8f90b] Add navbar component and responsiveness\n 2 files changed, 45 insertions(+)\n create mode 100644 src/Navbar.jsx',
    explanation: [
      { code: '-m', desc: 'Specifies the message inline. If you omit this, Git will open a default text editor (usually Vim or Nano) and block you until you write a message.' },
      { code: '4a8f90b', desc: 'The first 7 characters of the unique commit SHA-1 hash identifier.' }
    ],
    realWorldExample: 'A developer implements a password reset feature. They stage the changes and commit: `git commit -m "Feat: Add email validation to password reset"`.',
    commonMistakes: [
      { error: 'Writing generic commit messages', code: '', suffix: 'Avoid writing messages like "fix", "update", or "asdf". In a few weeks, you won\'t remember what you changed in those commits.' }
    ],
    bestPractices: ['Write commit messages in the imperative mood, e.g., "Add feature" rather than "Added feature" or "Adds feature".'],
    practiceExercise: {
      task: 'Commit your staged changes with the message "Initial commit".',
      expectedOutput: 'Successful commit output displaying changes and hash.',
      solution: 'git commit -m "Initial commit"'
    },
    quiz: [
      { question: 'What does a commit represent in Git?', options: ['A remote server link', 'A snapshot/checkpoint of your project at a specific point in time', 'A compressed folder', 'An editor theme'], answer: 'A snapshot/checkpoint of your project at a specific point in time' },
      { question: 'What flag allows you to write a commit message directly in the terminal?', options: ['-msg', '-m', '-message', '-x'], answer: '-m' },
      { question: 'What happens if you run `git commit` without the `-m` flag?', options: ['The commit fails', 'Git opens the default terminal text editor to force you to write a message', 'It writes a random message', 'It deletes staged files'], answer: 'Git opens the default terminal text editor to force you to write a message' }
    ],
    interviewQuestions: [
      { q: 'What is a SHA-1 hash in a commit and why is it important?', a: 'It is a unique 40-character checksum identifier generated from the commit contents, metadata (author, date), and parent commit hash. It guarantees cryptographic integrity; if a single character of code changes, the hash will change.' }
    ],
    summary: ['Saves staging area snapshot.', 'Requires a descriptive message.', 'Generates a unique SHA-1 hash.'],
    references: commonReferences
  },

  'git_push': {
    isStructured: true,
    title: '24. git push',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Uploads all local commits of a branch to its corresponding remote repository branch on GitHub, synchronizing histories.',
    whyUseIt: 'To publish your local progress to the cloud so teammates can access it and your portfolio updates.',
    syntax: 'git push [remote_name] [branch_name]',
    codeExample: '# Push current branch changes to origin/main:\ngit push origin main',
    expectedOutput: 'Enumerating objects: 5, done.\nDelta compression using up to 8 threads\nTo https://github.com/user/repo.git\n   a8b9c1d..4a8f90b  main -> main',
    explanation: [
      { code: 'origin', desc: 'The nickname of the remote server.' },
      { code: 'main', desc: 'The branch name to upload.' }
    ],
    realWorldExample: 'You finish coding a layout. You run `git add .`, `git commit -m "Finish header"`, and finally `git push` to send the changes up to GitHub.',
    commonMistakes: [
      { error: 'Pushing changes when local is behind remote', code: '', suffix: 'If a teammate pushed commits to GitHub since you last pulled, your push will be rejected. You must run `git pull` to fetch and merge remote changes first.' }
    ],
    bestPractices: ['Run `git status` and pull before pushing to avoid conflicts.'],
    practiceExercise: {
      task: 'Write the command to push commits on your local `main` branch to the remote repository `origin`.',
      expectedOutput: 'git push origin main',
      solution: 'git push origin main'
    },
    quiz: [
      { question: 'What does `git push` do?', options: ['Downloads changes', 'Uploads local commits to a remote repository', 'Stages files', 'Deletes local branches'], answer: 'Uploads local commits to a remote repository' },
      { question: 'What error occurs if your local repository is behind the remote repository when you push?', options: ['Repository not found', 'Push rejected (non-fast-forward)', 'Syntax error', 'Git resets automatically'], answer: 'Push rejected (non-fast-forward)' },
      { question: 'How do you fix a rejected push due to outdated local code?', options: ['Run git push -f to delete remote changes', 'Run git pull to download and merge remote changes first, resolve any conflicts, and push again', 'Delete the repository', 'Run git init'], answer: 'Run git pull to download and merge remote changes first, resolve any conflicts, and push again' }
    ],
    interviewQuestions: [
      { q: 'Is it ever safe to run `git push -f` (force push)?', a: 'Generally, it is only safe on personal branches that no one else is working on. Force pushing overwrites the remote commit history with your local history. If done on shared branches like `main`, it can delete your teammates\' commits.' }
    ],
    summary: ['Uploads local commits to GitHub.', 'Synchronizes remote history.', 'Can be blocked if remote has newer commits.'],
    references: commonReferences
  },

  'git_pull': {
    isStructured: true,
    title: '25. git pull',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Downloads new commits from the remote repository branch and immediately merges them into your current local branch.',
    whyUseIt: 'To keep your local workspace synchronized with edits made by other developers in the team.',
    syntax: 'git pull [remote_name] [branch_name]',
    codeExample: '# Pull latest changes from origin/main:\ngit pull origin main',
    expectedOutput: 'Updating a8b9c1d..4a8f90b\nFast-forward\n index.html | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)',
    explanation: [
      { code: 'Fast-forward', desc: 'A clean merge that simply moves your local pointers forward because you had no local conflicting commits.' }
    ],
    realWorldExample: 'You start working on the project at 9 AM. The first thing you do is run `git pull origin main` to get the features your teammate pushed overnight.',
    commonMistakes: [
      { error: 'Running git pull with unstaged modifications', code: '', suffix: 'If you have uncommitted changes in the same files that were modified on the remote, Git will block the pull to prevent overwriting your unsaved work. Commit or stash them first.' }
    ],
    bestPractices: ['Run `git pull` frequently, especially before starting new work or creating branches.'],
    practiceExercise: {
      task: 'Write the command to pull updates from the `origin` remote into your local `main` branch.',
      expectedOutput: 'git pull origin main',
      solution: 'git pull origin main'
    },
    quiz: [
      { question: 'What does `git pull` combine under the hood?', options: ['git add and git commit', 'git fetch and git merge', 'git push and git status', 'git clone and git init'], answer: 'git fetch and git merge' },
      { question: 'What happens if you run `git pull` and there are modifications in the same lines of code locally and remotely?', options: ['Git deletes the file', 'A merge conflict occurs, which you must manually resolve', 'Git overrides your local work silently', 'The program crashes'], answer: 'A merge conflict occurs, which you must manually resolve' },
      { question: 'Why run git pull before starting to code?', options: ['To compile code', 'To ensure you are building on top of the latest version of the code, minimizing merge conflicts', 'To check internet speed', 'To reset the database'], answer: 'To ensure you are building on top of the latest version of the code, minimizing merge conflicts' }
    ],
    interviewQuestions: [
      { q: 'What is the default behavior of `git pull` and how can it be configured to use rebase instead?', a: 'By default, `git pull` performs a fetch followed by a merge, creating a merge commit if histories diverged. You can run `git pull --rebase` to fetch and then replay your local commits on top of the remote changes, maintaining a linear history.' }
    ],
    summary: ['Downloads and merges remote changes.', 'Equivalent to `git fetch` + `git merge`.', 'Run it before writing code.'],
    references: commonReferences
  },

  'git_fetch': {
    isStructured: true,
    title: '26. git fetch',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Downloads files and commit history from the remote repository but does NOT merge them into your local files. It updates remote tracking branches.',
    whyUseIt: 'To check what changes your teammates made without modifying your own local working directory.',
    syntax: 'git fetch [remote_name]',
    codeExample: '# Fetch updates from origin:\ngit fetch origin\n\n# Compare local main with remote origin/main:\ngit diff main origin/main',
    expectedOutput: 'From https://github.com/user/repo\n   a8b9c1d..4a8f90b  main       -> origin/main',
    explanation: [
      { code: 'origin/main', desc: 'The remote tracking branch pointer. It represents the state of the main branch on GitHub at the moment of the fetch.' }
    ],
    realWorldExample: 'You are working on a complex feature. You run `git fetch origin` to download remote changes, diff them to make sure they won\'t break your feature, and then merge when ready.',
    commonMistakes: [
      { error: 'Expecting git fetch to update your files', code: '', suffix: '`git fetch` only updates database mappings. Your workspace files will not change until you run `git merge` or `git pull`.' }
    ],
    bestPractices: ['Use `git fetch` followed by `git diff` to safely preview changes before merging them.'],
    practiceExercise: {
      task: 'Fetch all branch metadata from your remote origin without merging.',
      expectedOutput: 'Update listings for remote-tracking branches.',
      solution: 'git fetch origin'
    },
    quiz: [
      { question: 'What is the main difference between `git fetch` and `git pull`?', options: ['Fetch deletes files, Pull adds them', 'Fetch downloads changes without merging; Pull downloads and merges immediately', 'Pull is offline, Fetch is online', 'There is no difference'], answer: 'Fetch downloads changes without merging; Pull downloads and merges immediately' },
      { question: 'Does `git fetch` modify your current local code files?', options: ['Yes', 'No, it only updates remote tracking references inside the .git database', 'Only if you run it as root', 'Only on Linux'], answer: 'No, it only updates remote tracking references inside the .git database' },
      { question: 'What branch reference points to the remote main branch state after fetching?', options: ['main', 'origin/main', 'HEAD', 'master'], answer: 'origin/main' }
    ],
    interviewQuestions: [
      { q: 'How would you review the commits that exist on the remote branch but not on your local branch after a fetch?', a: 'I would run `git log main..origin/main` to see a list of commits that are on `origin/main` but not in my local `main` branch.' }
    ],
    summary: ['Downloads remote metadata safely.', 'Does not touch working files.', 'Excellent for pre-merge inspections.'],
    references: commonReferences
  },

  'git_log': {
    isStructured: true,
    title: '27. git log',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Displays the chronological commit history of the repository, showing commit hashes, authors, dates, and commit messages.',
    whyUseIt: 'To audit what changes were made, who made them, and locate specific commit hashes to roll back changes.',
    syntax: 'git log\ngit log --oneline',
    codeExample: '# View detailed logs:\ngit log\n\n# View compact single-line logs:\ngit log --oneline -n 5',
    expectedOutput: '4a8f90b Add navbar component\na8b9c1d Initial commit',
    explanation: [
      { code: '--oneline', desc: 'Summarizes each commit into a short hash and message on a single line.' },
      { code: '-n 5', desc: 'Limits the log printout to the 5 most recent commits.' }
    ],
    realWorldExample: 'A bug is discovered in the app. The developer runs `git log --oneline` to see what commits were pushed in the last 24 hours to find the culprit.',
    commonMistakes: [
      { error: 'Getting stuck in the git log screen', code: '', suffix: 'If the log is long, Git opens a terminal pager. Press `q` to exit the screen and return to typing commands.' }
    ],
    bestPractices: ['Use `git log --oneline --graph --all` to visualize branch histories and merges.'],
    practiceExercise: {
      task: 'View the last 3 commits in a compact single-line format.',
      expectedOutput: 'A list of 3 commits with hashes and messages.',
      solution: 'git log --oneline -n 3'
    },
    quiz: [
      { question: 'What does `git log` show?', options: ['Active network connections', 'The history of commits in the repository', 'Ignored files', 'List of branches'], answer: 'The history of commits in the repository' },
      { question: 'How do you exit from the `git log` output screen if it is paging?', options: ['Press Ctrl+C', 'Type "exit"', 'Press the "q" key', 'Close the terminal'], answer: 'Press the "q" key' },
      { question: 'Which flag formats the logs into a short, single-line presentation?', options: ['--short', '--oneline', '--compact', '-s'], answer: '--oneline' }
    ],
    interviewQuestions: [
      { q: 'How would you filter the Git commit logs to show only commits made by a specific author?', a: 'I would run `git log --author="Author Name"`.' }
    ],
    summary: ['Displays project revision logs.', 'Use `q` to exit pager.', '`--oneline` provides clean overviews.'],
    references: commonReferences
  },

  'git_diff': {
    isStructured: true,
    title: '28. git diff',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Compares the current modifications in your files against your last commit or staging area, highlighting additions and deletions line-by-line.',
    whyUseIt: 'To inspect exact code line changes before staging them to ensure correctness.',
    syntax: 'git diff\ngit diff --staged',
    codeExample: '# Compare unstaged changes with last commit:\ngit diff\n\n# Compare staged changes with last commit:\ngit diff --staged',
    expectedOutput: '--- a/index.html\n+++ b/index.html\n@@ -5,1 +5,2 @@\n-<h1>Old Header</h1>\n+<h1>New Header</h1>',
    explanation: [
      { code: '- lines', desc: 'Code lines deleted or modified (displayed in red).' },
      { code: '+ lines', desc: 'Code lines added or modified (displayed in green).' }
    ],
    realWorldExample: 'A developer adds styling. Before adding the file, they run `git diff` to make sure they didn\'t accidentally insert diagnostic border styles (`border: 1px solid red`).',
    commonMistakes: [
      { error: 'Running git diff on staged files and seeing nothing', code: '', suffix: 'Once you run `git add`, `git diff` shows nothing because the file is in staging. You must run `git diff --staged` (or `--cached`) to inspect staged changes.' }
    ],
    bestPractices: ['Always run `git diff` or review differences in your code editor before staging files.'],
    practiceExercise: {
      task: 'Modify a file, then inspect your unstaged changes using `git diff`.',
      expectedOutput: 'A detailed diff showing deleted lines in red and added lines in green.',
      solution: 'Modify a file -> Run git diff'
    },
    quiz: [
      { question: 'What does `git diff` show?', options: ['Different branch names', 'Line-by-line code changes between your working files and commit logs', 'Operating system differences', 'File size differences'], answer: 'Line-by-line code changes between your working files and commit logs' },
      { question: 'If you have run `git add .`, which command shows the changes?', options: ['git diff', 'git diff --staged', 'git status --diff', 'git log -p'], answer: 'git diff --staged' },
      { question: 'What does green text prefixed with `+` mean in a diff?', options: ['A branch was added', 'A line of code was added or modified', 'A bug was fixed', 'A commit was pushed'], answer: 'A line of code was added or modified' }
    ],
    interviewQuestions: [
      { q: 'How would you view the differences between two distinct branches?', a: 'I would run `git diff branch1..branch2`.' }
    ],
    summary: ['Displays detailed line changes.', 'Red (-) indicates removals; Green (+) indicates additions.', 'Use `--staged` to view staged changes.'],
    references: commonReferences
  },

  'git_what_is_branch': {
    isStructured: true,
    title: '29. What is a Branch?',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A branch is an independent pointer to a commit in your repository history. It represents an isolated timeline of development where you can write code without affecting other branches (like `main`).',
    whyUseIt: 'Allows you to build new features or experiment safely. If the experiment fails, you delete the branch; if it succeeds, you merge it into the main code.',
    syntax: '-- Lightweight pointer\n-- Isolated coding timeline',
    codeExample: '# Display current local branches:\ngit branch',
    expectedOutput: '* main\n  feature-login',
    explanation: [
      { code: '*', desc: 'The asterisk indicates which branch is currently active (checked out).' },
      { code: 'main', desc: 'The default master branch hosting public, deployment-ready code.' }
    ],
    realWorldExample: 'A team has 3 developers. Developer A builds payment functionality on `feature-payment`, Developer B builds login styling on `feature-login`, while the customer visits the stable site on `main` undisturbed.',
    commonMistakes: [
      { error: 'Coding directly on the main branch in teams', code: '', suffix: 'If you commit experimental code directly to `main` and it crashes the app, you break the site for everyone. Always build features in separate branches.' }
    ],
    bestPractices: ['Keep the `main` branch stable, bug-free, and deployable at all times.'],
    practiceExercise: {
      task: 'List all branches in your repository and identify the active one.',
      expectedOutput: 'A list of branches with an asterisk next to the current branch.',
      solution: 'git branch'
    },
    quiz: [
      { question: 'What is a branch in Git?', options: ['A separate folder on your drive', 'A lightweight, movable pointer to a commit representing an isolated line of development', 'A backup hard drive link', 'A command script'], answer: 'A lightweight, movable pointer to a commit representing an isolated line of development' },
      { question: 'What is the default branch name in modern repositories?', options: ['master', 'trunk', 'main', 'root'], answer: 'main' },
      { question: 'Why use branches?', options: ['To make files smaller', 'To isolate feature development, bug fixes, and experiments safely away from stable production code', 'To download repositories', 'Because Git commands require them to start'], answer: 'To isolate feature development, bug fixes, and experiments safely away from stable production code' }
    ],
    interviewQuestions: [
      { q: 'Why are branches in Git described as "lightweight" compared to other version control systems (like SVN)?', a: 'In Git, a branch is just a 41-byte text file containing the SHA-1 hash of the commit it points to. Creating a branch does not duplicate any project files; it simply creates a pointer, making it instantaneous.' }
    ],
    summary: ['Independent development timelines.', '`main` holds stable deployable code.', 'Cheap and instantaneous to create.'],
    references: commonReferences
  },

  'git_create_branch': {
    isStructured: true,
    title: '30. Creating Branches',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Creating a new branch pointer at your current commit so you can start tracking isolated code changes.',
    whyUseIt: 'To create a workspace for a new feature or bug fix without disturbing the active branch.',
    syntax: 'git branch [branch_name]\ngit checkout -b [branch_name]',
    codeExample: '# Create feature branch:\ngit branch feature-profile\n\n# Create and switch to it immediately (shorthand):\ngit checkout -b feature-chat',
    expectedOutput: 'Switched to a new branch \'feature-chat\'',
    explanation: [
      { code: 'git branch <name>', desc: 'Creates the branch pointer but does not switch your workspace files to it.' },
      { code: '-b flag', desc: 'Tells checkout (or switch) to create the branch first, then immediately check it out.' }
    ],
    realWorldExample: 'A developer receives a ticket to build a shopping cart. They immediately run `git checkout -b feature-cart` to begin coding.',
    commonMistakes: [
      { error: 'Using spaces or symbols in branch names', code: '', suffix: 'Branch names cannot contain spaces. Use hyphens or underscores: `git branch feature login` will throw an error. Use `feature-login`.' }
    ],
    bestPractices: ['Use descriptive, lowercase branch naming structures like `feature/name`, `bugfix/name`, or `hotfix/name`.'],
    practiceExercise: {
      task: 'Create and switch to a branch named `bugfix-navbar` in one command.',
      expectedOutput: 'Switched to a new branch \'bugfix-navbar\'.',
      solution: 'git checkout -b bugfix-navbar'
    },
    quiz: [
      { question: 'What command creates a branch named "feature-payment" without switching to it?', options: ['git checkout feature-payment', 'git branch feature-payment', 'git create branch feature-payment', 'git switch -b feature-payment'], answer: 'git branch feature-payment' },
      { question: 'What does the `-b` flag do in `git checkout -b feature-name`?', options: ['Backs up the files', 'Creates the branch first, then checks it out immediately', 'Makes it bold', 'Deletes the branch'], answer: 'Creates the branch first, then checks it out immediately' },
      { question: 'Which of the following is a valid branch name?', options: ['my new feature', 'feature/login-v2', 'feature*login', 'new branch'], answer: 'feature/login-v2' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `git checkout -b <name>` and the newer `git switch -c <name>`?', a: 'They do the same thing: create and switch to a new branch. `git switch` was introduced in Git 2.23 to separate branch switching from file restoration (which checkout did both of), making commands more intuitive.' }
    ],
    summary: ['Isolates new work.', '`git branch <name>` creates the pointer.', '`git checkout -b <name>` creates and switches.'],
    references: commonReferences
  }
};
