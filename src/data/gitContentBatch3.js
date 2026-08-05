const commonReferences = [
  { label: 'W3Schools Git & GitHub', url: 'https://www.w3schools.com/git/' },
  { label: 'GitHub Official Docs', url: 'https://docs.github.com/' },
  { label: 'Git SCM Documentation', url: 'https://git-scm.com/doc' }
];

export const gitContentBatch3 = {
  'git_switch_branch': {
    isStructured: true,
    title: '31. Switching Branches',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Moving your active work directory pointer (HEAD) from one branch to another, changing the files on your physical drive to match that branch.',
    whyUseIt: 'To toggle between working on a new feature branch and reviewing code on the stable `main` branch.',
    syntax: 'git checkout [branch_name]\ngit switch [branch_name]',
    codeExample: '# Switch using checkout:\ngit checkout feature-login\n\n# Switch using modern switch command:\ngit switch main',
    expectedOutput: 'Switched to branch \'main\'',
    explanation: [
      { code: 'git switch', desc: 'The modern, dedicated command for changing branches without any file restoration overlap.' }
    ],
    realWorldExample: 'You are coding on `feature-profile` when a critical bug is reported on `main`. You switch to `main`, write the hotfix, then switch back to `feature-profile`.',
    commonMistakes: [
      { error: 'Switching with uncommitted changes', code: '', suffix: 'If you have modified files that clash with files on the target branch, Git will block the switch to prevent data loss. You must commit or stash your changes before switching.' }
    ],
    bestPractices: ['Keep your working directory clean (committed or stashed) before switching branches.'],
    practiceExercise: {
      task: 'Switch to the `main` branch in your repository.',
      expectedOutput: 'Switched to branch \'main\'.',
      solution: 'git switch main'
    },
    quiz: [
      { question: 'What modern command is used specifically for switching between branches?', options: ['git branch', 'git switch', 'git change', 'git move'], answer: 'git switch' },
      { question: 'What happens to your local code files when you switch branches?', options: ['Nothing, they remain unchanged', 'Git updates the files on your hard drive to match the state of the target branch', 'They are deleted', 'They are zipped'], answer: 'Git updates the files on your hard drive to match the state of the target branch' },
      { question: 'What pointer moves to the new branch when you switch?', options: ['origin', 'HEAD', 'master', 'fetch'], answer: 'HEAD' }
    ],
    interviewQuestions: [
      { q: 'What is a "detached HEAD" state and how do you get out of it?', a: 'A detached HEAD state occurs when you checkout a specific commit hash rather than a branch pointer. Git is pointing directly to a historical commit. To get out, switch back to an active branch: `git switch main`.' }
    ],
    summary: ['Changes working directory state.', '`git switch` is the modern syntax.', 'Requires clean workspace or stash.'],
    references: commonReferences
  },

  'git_merge_branch': {
    isStructured: true,
    title: '32. Merging Branches',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'Combining the histories and changes from two different branches into a single branch.',
    whyUseIt: 'To integrate completed features from a feature branch back into the main stable codebase.',
    syntax: 'git merge [branch_name]',
    codeExample: '# 1. Go to destination branch:\ngit switch main\n\n# 2. Merge target branch changes into it:\ngit merge feature-login',
    expectedOutput: 'Updating a8b9c1d..4a8f90b\nFast-forward\n src/login.js | 10 +++++++++\n 1 file changed, 10 insertions(+)',
    explanation: [
      { code: 'git merge <name>', desc: 'Merges the specified branch into the CURRENT active branch.' }
    ],
    realWorldExample: 'You complete the user profile page on `feature-profile`. You switch to `main` and run `git merge feature-profile` to make the profiles live on the website.',
    commonMistakes: [
      { error: 'Merging the wrong way', code: '', suffix: 'If you want to add feature branch code to `main`, you must switch to `main` first and merge the feature. Running git merge main while on the feature branch does the reverse.' }
    ],
    bestPractices: ['Pull the latest changes on `main` before merging your feature branch to ensure clean history.'],
    practiceExercise: {
      task: 'Merge a branch named `feature-logout` into `main`.',
      expectedOutput: 'Merge successful or fast-forward message.',
      solution: 'git switch main && git merge feature-logout'
    },
    quiz: [
      { question: 'To merge branch A into branch B, which branch must you be currently checked out on?', options: ['Branch A', 'Branch B', 'Any branch', 'None, it runs globally'], answer: 'Branch B' },
      { question: 'What is a Fast-forward merge?', options: ['A merge that runs double speed', 'A merge where the destination branch hasn\'t diverged; Git simply moves the branch pointer forward', 'A merge that deletes history', 'An automated conflict solver'], answer: 'A merge where the destination branch hasn\'t diverged; Git simply moves the branch pointer forward' },
      { question: 'What command merges a branch named "theme" into your current branch?', options: ['git combine theme', 'git merge theme', 'git checkout theme', 'git remote merge theme'], answer: 'git merge theme' }
    ],
    interviewQuestions: [
      { q: 'What is a merge commit and when is it created?', a: 'A merge commit is a special commit that has two parent commits. It is created when you merge two branches that have diverged (both have new commits since they split), which requires Git to combine changes and record the join.' }
    ],
    summary: ['Integrates feature branches.', 'Always checkout the destination first.', 'Supports fast-forward and 3-way merges.'],
    references: commonReferences
  },

  'git_merge_conflicts': {
    isStructured: true,
    title: '33. Resolving Merge Conflicts',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A merge conflict occurs when two branches make changes to the exact same line of a file, and Git stops the merge because it cannot determine which version to keep.',
    whyUseIt: 'Understanding conflicts prevents panic. You must know how to inspect the conflicting markers and choose the correct code code.',
    syntax: '<<<<<<< HEAD\n[Your changes]\n=======\n[Remote changes]\n>>>>>>> branch-name',
    codeExample: '# Conflicts marked in file:\n<<<<<<< HEAD\nconsole.log("Logged in as user");\n=======\nconsole.log("Welcome back user!");\n>>>>>>> feature-login',
    expectedOutput: 'Automatic merge failed; fix conflicts and then commit the result.',
    explanation: [
      { code: '<<<<<<< HEAD', desc: 'Marks the start of the changes on your current active branch.' },
      { code: '=======', desc: 'The divider between the clashing changes.' },
      { code: '>>>>>>> branch-name', desc: 'Marks the end of the remote changes.' }
    ],
    realWorldExample: 'You and a teammate edit the page title on line 12. When you pull, Git pauses. You open the file in VS Code, choose "Accept incoming change", remove the markers, stage, and commit.',
    commonMistakes: [
      { error: 'Committing with conflict markers left in the code', code: '', suffix: 'If you don\'t delete the `<<<<<<<`, `=======`, and `>>>>>>>` markers, they will remain as text in your files and crash your compiler.' }
    ],
    bestPractices: ['Communicate with your teammate to understand why they wrote their version before choosing which change to accept.'],
    practiceExercise: {
      task: 'Simulate a conflict, open the file, delete conflict markers, and choose the incoming change.',
      expectedOutput: 'File matches incoming code and markers are removed.',
      solution: 'Edit conflict in file -> git add [file] -> git commit'
    },
    quiz: [
      { question: 'Why does a merge conflict occur?', options: ['The internet disconnected', 'Git is out of memory', 'Two branches modified the same line of the same file, and Git doesn\'t know which one to keep', 'You used a capital letter in a command'], answer: 'Two branches modified the same line of the same file, and Git doesn\'t know which one to keep' },
      { question: 'What symbol separates the clashing lines of code in a conflict file?', options: ['+++++++', '=======', '<<<<<<<', '#######'], answer: '=======' },
      { question: 'What must you do after editing a file to resolve conflict markers?', options: ['Run git init', 'Stage the resolved file (git add) and commit the merge', 'Delete the file', 'Run git checkout -f'], answer: 'Stage the resolved file (git add) and commit the merge' }
    ],
    interviewQuestions: [
      { q: 'How would you abort a merge process that has resulted in complex conflicts you are not ready to solve?', a: 'I would run `git merge --abort` to cancel the merge and restore the files to their pre-merge state.' }
    ],
    summary: ['Occurs on overlapping line edits.', 'Marked by `< < < <`, `====`, `> > > >`.', 'Resolve, stage, and commit.'],
    references: commonReferences
  },

  'git_delete_branch': {
    isStructured: true,
    title: '34. Deleting Branches',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Removing a branch pointer from your local repository or the remote GitHub server once the feature has been successfully merged.',
    whyUseIt: 'To keep your repository clean and prevent developers from working on stale, outdated branches.',
    syntax: 'git branch -d [branch_name]\ngit push origin --delete [branch_name]',
    codeExample: '# Delete merged branch locally:\ngit branch -d feature-login\n\n# Force delete unmerged branch:\ngit branch -D temp-experiment\n\n# Delete remote branch on GitHub:\ngit push origin --delete feature-login',
    expectedOutput: 'Deleted branch feature-login (was 4a8f90b).',
    explanation: [
      { code: '-d', desc: 'Safe delete. Git checks if the branch is fully merged before deleting it.' },
      { code: '-D', desc: 'Force delete. Deletes the branch immediately, even if changes are unmerged and would be lost.' }
    ],
    realWorldExample: 'After merging a pull request on GitHub, the developer clicks "Delete branch" on the website and runs `git branch -d <name>` in their terminal.',
    commonMistakes: [
      { error: 'Trying to delete the active branch', code: '', suffix: 'You cannot delete the branch you are currently checked out on. Switch to `main` first before deleting your feature branch.' }
    ],
    bestPractices: ['Delete feature branches immediately after merging to avoid confusion over active lines of work.'],
    practiceExercise: {
      task: 'Switch to `main` and delete a merged local branch named `feature-test`.',
      expectedOutput: 'Branch deleted message.',
      solution: 'git switch main && git branch -d feature-test'
    },
    quiz: [
      { question: 'What command safely deletes a local branch named "dev"?', options: ['git branch -d dev', 'git branch -D dev', 'git delete branch dev', 'git remove dev'], answer: 'git branch -d dev' },
      { question: 'Can you delete the branch you are currently checked out on?', options: ['Yes', 'No, you must switch to another branch first', 'Only if you use -D', 'Only on Linux'], answer: 'No, you must switch to another branch first' },
      { question: 'What does `git branch -D` do?', options: ['Downloads a branch', 'Force deletes a branch even if it contains unmerged changes that would be lost', 'Deletes all branches', 'Checks out a branch'], answer: 'Force deletes a branch even if it contains unmerged changes that would be lost' }
    ],
    interviewQuestions: [
      { q: 'Does deleting a branch delete the commits it pointed to immediately?', a: 'No. The commits remain in the Git object database as "dangling commits". They are eventually garbage collected and deleted by Git\'s internal `git gc` process, unless referenced by another pointer.' }
    ],
    summary: ['Cleans up project clutter.', '`-d` is safe; `-D` is forced.', 'Delete remotes using `git push origin --delete`.'],
    references: commonReferences
  },

  'git_forking': {
    isStructured: true,
    title: '35. Forking Repositories',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Creating a personal copy of another user\'s repository on your own GitHub account. This copy is completely independent but maintains a link to the original project.',
    whyUseIt: 'Allows you to freely make changes to someone else\'s project without affecting the original. Essential for contributing to open-source software.',
    syntax: '-- Performed via the "Fork" button in the top right of the GitHub repository page',
    codeExample: '# Step 1: Click Fork on github.com/original/repo\n# Step 2: Clone your fork locally:\ngit clone https://github.com/yourusername/repo.git',
    expectedOutput: 'A new repository created under your account containing the identical code base.',
    explanation: [
      { code: 'Fork link', desc: 'Allows you to easily create Pull Requests back to the original repository to share your changes.' }
    ],
    realWorldExample: 'You want to contribute to React. You cannot write code directly to Facebook\'s repo, so you Fork React to your profile, edit it, and suggest a pull request.',
    commonMistakes: [
      { error: 'Cloning the original repository instead of your fork', code: '', suffix: 'If you clone the original repository, you will get "Permission Denied" when trying to push. You must clone your own forked copy instead.' }
    ],
    bestPractices: ['Keep your fork synchronized with the original (upstream) repository using GitHub\'s "Sync Fork" button.'],
    practiceExercise: {
      task: 'Navigate to any open-source repository on GitHub and click the "Fork" button.',
      expectedOutput: 'A copy of the repository appears under your own GitHub account username.',
      solution: 'Visit a repository on GitHub -> Click Fork.'
    },
    quiz: [
      { question: 'What is a fork on GitHub?', options: ['A branching command', 'A personal copy of another repository hosted on your own GitHub account', 'A database merge tool', 'A payment plan'], answer: 'A personal copy of another repository hosted on your own GitHub account' },
      { question: 'If you push changes to your fork, does it affect the original repository directly?', options: ['Yes, instantly', 'No, it is independent; you must submit a Pull Request to share changes with the original repo', 'Only if the original repo is public', 'Yes, on reboot'], answer: 'No, it is independent; you must submit a Pull Request to share changes with the original repo' },
      { question: 'Where is the Fork button located on a GitHub repository page?', options: ['In the Settings tab', 'In the top right corner', 'In the code files list', 'In the footer'], answer: 'In the top right corner' }
    ],
    interviewQuestions: [
      { q: 'What is the workflow difference between cloning a repository you collaborate on vs forking a public repository?', a: 'If you are an official collaborator, you clone the repo directly and push to branches. If you are an external contributor (open-source), you fork the repo, clone your fork, push to your fork, and submit a Pull Request.' }
    ],
    summary: ['Copies remote repo to your profile.', 'Foundation of open-source contributions.', 'Allows safe experimentation.'],
    references: commonReferences
  },

  'git_create_pr': {
    isStructured: true,
    title: '36. Creating Pull Requests',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A Pull Request (PR) is a GitHub feature that proposes changes you made on a branch to the main repository, inviting teammates to review the code before it is merged.',
    whyUseIt: 'Ensures quality control. It allows team leads to review code, run automated tests, and discuss changes before updating the production site.',
    syntax: '-- Created via the GitHub web interface: Click "Compare & pull request"',
    codeExample: '# Workflow:\n1. Push branch: git push origin feature-login\n2. Open GitHub -> Click "Compare & pull request"\n3. Write description -> Click "Create pull request"',
    expectedOutput: 'An open PR page displaying code commits, diffs, comments, and status checks.',
    explanation: [
      { code: 'Base branch', desc: 'The target branch you want to merge changes INTO (usually main).' },
      { code: 'Head branch', desc: 'The source branch containing the new changes you wrote.' }
    ],
    realWorldExample: 'A developer completes a profile page. They push `feature-profile` and create a PR to merge it into `main`. The tech lead reviews the code and merges it.',
    commonMistakes: [
      { error: 'Writing empty or vague PR descriptions', code: '', suffix: 'Always explain WHAT changes were made, WHY they were made, and HOW to test them, so reviewers understand your code.' }
    ],
    bestPractices: ['Keep Pull Requests small and focused on a single feature or bug fix to make reviewing easy.'],
    practiceExercise: {
      task: 'Push a test branch to GitHub and prepare a Pull Request on the web UI.',
      expectedOutput: 'The PR creation screen displaying differences.',
      solution: 'git push origin local-branch -> Click "Compare & pull request" on GitHub.'
    },
    quiz: [
      { question: 'What is a Pull Request (PR) on GitHub?', options: ['A command to download files', 'A feature that proposes code changes from one branch to another, inviting review and discussion', 'A git init config', 'A support ticket'], answer: 'A feature that proposes code changes from one branch to another, inviting review and discussion' },
      { question: 'Which branch is the "Base" branch in a PR?', options: ['The branch containing the new code changes', 'The target branch you want to merge your changes INTO (e.g., main)', 'The branch on your local machine', 'The remote backup branch'], answer: 'The target branch you want to merge your changes INTO (e.g., main)' },
      { question: 'Can you continue adding commits to a branch after opening a PR?', options: ['No, the PR locks the branch', 'Yes, new commits pushed to that branch will automatically update the PR page', 'Only if you close and reopen the PR', 'Only with admin permissions'], answer: 'Yes, new commits pushed to that branch will automatically update the PR page' }
    ],
    interviewQuestions: [
      { q: 'What is the purpose of drafting a Pull Request (Draft PR) on GitHub?', a: 'A Draft PR signals to the team that your work is still in progress. It allows you to share code, ask for feedback, and run CI/CD tests without letting reviewers merge the changes until you mark it as "Ready for Review".' }
    ],
    summary: ['Proposes branch merges.', 'Enables code review and discussion.', 'Automatically updates with new pushes.'],
    references: commonReferences
  },

  'git_review_pr': {
    isStructured: true,
    title: '37. Reviewing Pull Requests',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'The process of inspecting another developer\'s proposed code changes on GitHub, leaving comments, suggesting modifications, and approving or requesting changes.',
    whyUseIt: 'To catch bugs, ensure coding standards are followed, share knowledge, and prevent broken code from reaching production.',
    syntax: '-- Performed under the "Files changed" tab of an open Pull Request on GitHub',
    codeExample: '# Review Action States:\n- Comment (General feedback)\n- Approve (LGTM - Looks good to merge)\n- Request Changes (Requires fixes before merge)',
    expectedOutput: 'Approved PR ready to merge, or requested fixes pending.',
    explanation: [
      { code: 'File Diff', desc: 'Shows exact lines added (green) and removed (red) in the PR.' },
      { code: 'Line Comments', desc: 'Allows you to click on a specific line of code and start a thread about it.' }
    ],
    realWorldExample: 'A senior developer reviews a junior\'s PR. They notice a SQL injection vulnerability on line 42, leave a comment pointing it out, and select "Request Changes".',
    commonMistakes: [
      { error: 'Leaving generic or rude review comments', code: '', suffix: 'Be constructive. Instead of saying "this code is bad", say "we should use a map here for better time complexity".' }
    ],
    bestPractices: ['Review code thoroughly. Test the branch locally if the changes affect critical layouts or components.'],
    practiceExercise: {
      task: 'Navigate to an open PR in a public repository and inspect the "Files changed" tab.',
      expectedOutput: 'You see the line diffs and any code comments left by reviewers.',
      solution: 'Visit a public repository PR -> Click Files changed tab.'
    },
    quiz: [
      { question: 'Which PR review state indicates the code is approved and ready to merge?', options: ['Comment', 'Request Changes', 'Approve', 'Draft'], answer: 'Approve' },
      { question: 'How do you leave a comment on a specific line of code in a PR?', options: ['Write a global comment', 'Hover over the line in the "Files changed" tab and click the blue "+" icon to add a comment', 'Email the developer', 'Modify the file directly'], answer: 'Hover over the line in the "Files changed" tab and click the blue "+" icon to add a comment' },
      { question: 'What does "Request Changes" do to a PR?', options: ['Deletes the PR', 'Blocks the PR from being merged until the developer addresses comments and the reviewer approves', 'Sends a warning email to GitHub', 'Resets the branch'], answer: 'Blocks the PR from being merged until the developer addresses comments and the reviewer approves' }
    ],
    interviewQuestions: [
      { q: 'What is the significance of the acronym "LGTM" in code reviews?', a: 'LGTM stands for "Looks Good To Me". It is a common developer shorthand used in reviews to signal approval of the proposed changes.' }
    ],
    summary: ['Maintains code quality.', 'Line-by-line comments for discussions.', 'Approve vs Request Changes.'],
    references: commonReferences
  },

  'git_merge_pr': {
    isStructured: true,
    title: '38. Merging Pull Requests',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The final step of code review where approved changes from a pull request branch are merged into the target repository branch (e.g. main) on GitHub.',
    whyUseIt: 'To permanently apply features or bug fixes to the live code repository.',
    syntax: '-- Done by clicking the green "Merge pull request" button on the PR page',
    codeExample: '# Merge Options on GitHub:\n- Create a merge commit (Preserves all history)\n- Squash and merge (Combines commits into one clean commit)\n- Rebase and merge (Replays commits linearly)',
    expectedOutput: 'Pull request successfully merged and closed. Head branch can be deleted.',
    explanation: [
      { code: 'Squash and merge', desc: 'Very popular in teams. It takes 10 small commits from the PR branch and merges them as one clean commit on main.' }
    ],
    realWorldExample: 'A developer completes their PR, gets approval from the tech lead, and clicks "Squash and merge" to add the clean, single commit to main.',
    commonMistakes: [
      { error: 'Merging a PR before automated tests pass', code: '', suffix: 'If your project has CI checks configured, never merge if the build is red (failing), as this will break main.' }
    ],
    bestPractices: ['Choose "Squash and merge" for feature branches to keep the main branch history clean and readable.'],
    practiceExercise: {
      task: 'Inspect the merge strategies available on a repository you own.',
      expectedOutput: 'You see options for standard merge, squash, and rebase in Settings.',
      solution: 'Go to your Repository Settings -> General -> Pull Requests section.'
    },
    quiz: [
      { question: 'What color is the Merge button on a healthy, review-approved GitHub PR?', options: ['Red', 'Blue', 'Green', 'Yellow'], answer: 'Green' },
      { question: 'Which merge strategy on GitHub combines all commits from the PR into a single clean commit on the base branch?', options: ['Create a merge commit', 'Squash and merge', 'Rebase and merge', 'Fast-forward only'], answer: 'Squash and merge' },
      { question: 'What is a best practice immediately after merging a PR?', options: ['Delete the repository', 'Delete the merged feature branch on GitHub and locally', 'Reboot the server', 'Change your password'], answer: 'Delete the merged feature branch on GitHub and locally' }
    ],
    interviewQuestions: [
      { q: 'What is the main advantage of "Squash and merge" over "Create a merge commit"?', a: 'Squash and merge keeps the main branch history linear and clean by hiding all intermediate, messy WIP commits (e.g., "fix typo", "add console.log") created during development.' }
    ],
    summary: ['Applies approved code changes.', 'Squash merges keep history clean.', 'Automated checks should pass before merging.'],
    references: commonReferences
  },

  'git_issues': {
    isStructured: true,
    title: '39. Issues',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'GitHub\'s built-in issue tracker. It is a system for tracking bugs, tasks, feature requests, and project discussions directly alongside the repository code.',
    whyUseIt: 'Allows developers, users, and managers to document bugs, discuss fixes, assign tasks, and track project roadmap progress for free.',
    syntax: '-- Opened via the "Issues" tab on the GitHub repository page',
    codeExample: '# Common workflow:\nCreate Issue (Bug report) -> Assign to Developer -> Link to PR -> Close Issue',
    expectedOutput: 'An issue card with comments, labels (bug, enhancement), milestone targets, and assignees.',
    explanation: [
      { code: 'Labels', desc: 'Color-coded tags (e.g., `bug`, `documentation`, `good first issue`) to catalog issues.' },
      { code: 'Assignees', desc: 'Specifies which developer is responsible for resolving the issue.' }
    ],
    realWorldExample: 'A user notices the signup form crashes on safari. They open an issue named "Bug: Signup crashes on Safari", label it `bug` and `high-priority`, and attach a screenshot.',
    commonMistakes: [
      { error: 'Opening duplicates or vague bug reports', code: '', suffix: 'Before opening an issue, always search existing issues to see if someone already reported it. Avoid title like "help please".' }
    ],
    bestPractices: ['Use GitHub Issue Templates to ensure users provide reproducible steps, operating systems, and screenshots when reporting bugs.'],
    practiceExercise: {
      task: 'Create an issue in a repository you own, label it as a "bug", and assign it to yourself.',
      expectedOutput: 'An active issue displaying your details and labels.',
      solution: 'Navigate to Repository -> Issues tab -> New Issue -> Fill details -> Set labels and assignee -> Submit.'
    },
    quiz: [
      { question: 'What is the purpose of GitHub Issues?', options: ['To compile code', 'To track bugs, project tasks, and feature requests', 'To download repositories', 'To chat with customers'], answer: 'To track bugs, project tasks, and feature requests' },
      { question: 'Which label indicates a task is suitable for beginner open-source contributors?', options: ['invalid', 'good first issue', 'wontfix', 'duplicate'], answer: 'good first issue' },
      { question: 'How do you close an issue automatically via a commit message?', options: ['Write "delete issue #1"', 'Write "Fixes #1" or "Closes #1" in the commit message or PR description', 'Issues cannot be closed automatically', 'Type "close 1"'], answer: 'Write "Fixes #1" or "Closes #1" in the commit message or PR description' }
    ],
    interviewQuestions: [
      { q: 'How do you link a Pull Request to a specific GitHub Issue?', a: 'You can write "Closes #<issue_number>" or "Fixes #<issue_number>" in the PR description. When the PR is merged into `main`, GitHub will automatically close the linked issue.' }
    ],
    summary: ['Built-in bug and task tracker.', 'Organized with labels and milestones.', 'Link to commits/PRs for auto-closure.'],
    references: commonReferences
  },

  'git_discussions': {
    isStructured: true,
    title: '40. Discussions',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A collaborative forum feature on GitHub for open discussions, questions, ideas, and community announcements that are not specific bugs or tasks.',
    whyUseIt: 'To separate community chats, general questions, and brainstorming sessions from the structured "Issues" tracker.',
    syntax: '-- Found under the "Discussions" tab on the GitHub repository homepage',
    codeExample: '# Categories:\n- Q&A (Answered questions can be marked as resolved)\n- Ideas (Brainstorming features)\n- General (Community updates)',
    expectedOutput: 'An active discussion forum index displaying threads, answers, and upvotes.',
    explanation: [
      { code: 'Resolve', desc: 'Allows the original poster or maintainers to mark a comment as the accepted answer to a question.' }
    ],
    realWorldExample: 'A developer using Next.js is not sure how to configure routing. They ask in the Next.js "Discussions" Q&A forum, and another user provides a solution, which is marked as "Answered".',
    commonMistakes: [
      { error: 'Posting general questions as Issues', code: '', suffix: 'Don\'t open an "Issue" to ask "How do I do X?". Issues are for bugs and tasks. Use "Discussions" or "Q&A" for questions.' }
    ],
    bestPractices: ['Use Discussions to foster community engagement and brainstorm design decisions before locking them into issues.'],
    practiceExercise: {
      task: 'Browse the discussions section of a major framework (like Tailwind or Next.js) and find a thread marked as "Answered".',
      expectedOutput: 'A thread showing the green checkmark next to the solution comment.',
      solution: 'Navigate to https://github.com/tailwindlabs/tailwindcss/discussions'
    },
    quiz: [
      { question: 'What is the key difference between Issues and Discussions?', options: ['Issues are public, Discussions are private', 'Issues track actual tasks/bugs; Discussions are general forum spaces for questions and community ideas', 'Discussions cost money', 'They are the same'], answer: 'Issues track actual tasks/bugs; Discussions are general forum spaces for questions and community ideas' },
      { question: 'Can community questions be marked as "Answered" in discussions?', options: ['No', 'Yes, similar to StackOverflow, maintainers can pin the resolving answer', 'Only if they pay', 'Only on Linux projects'], answer: 'Yes, similar to StackOverflow, maintainers can pin the resolving answer' },
      { question: 'Which category is best for suggesting a vague, futuristic feature idea?', options: ['Show and Tell', 'Ideas', 'Q&A', 'Announcements'], answer: 'Ideas' }
    ],
    interviewQuestions: [
      { q: 'Why is it important for open-source maintainers to separate Issues from Discussions?', a: 'It prevents the backlog of bugs (Issues) from being cluttered by support questions, tutorials, and general developer chats, allowing maintainers to focus on bugs and development tasks.' }
    ],
    summary: ['Collaborative forum space.', 'Separates Q&A from bugs/tasks.', 'Pin resolved answers.'],
    references: commonReferences
  },

  'git_projects_board': {
    isStructured: true,
    title: '41. Projects Board',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'GitHub Projects (beta) is an interactive, spreadsheet-like tool and Kanban board used to track and manage issues and PRs across multiple repositories.',
    whyUseIt: 'To manage sprint planning, visualize task pipelines, and track team velocity directly inside GitHub.',
    syntax: '-- Accessed via the "Projects" tab in your profile or repository page',
    codeExample: '# Layouts:\n- Board (Kanban: To Do -> In Progress -> Done)\n- Table (Spreadsheet with custom fields)\n- Roadmap (Gantt chart)',
    expectedOutput: 'A visual task dashboard dynamically updating as issues change state.',
    explanation: [
      { code: 'Kanban Board', desc: 'Allows you to drag task cards across columns. Cards update automatically when linked PRs are closed.' }
    ],
    realWorldExample: 'A scrum master configures a project board for the next sprint. They add issue cards to the "To Do" column and assign them to developers.',
    commonMistakes: [
      { error: 'Manually moving cards that could be automated', code: '', suffix: 'Set up board workflows so that when a Pull Request is merged, its corresponding Issue card automatically moves to the "Done" column.' }
    ],
    bestPractices: ['Link your Project Boards directly to repository issues to leverage automated card movement.'],
    practiceExercise: {
      task: 'Create a basic GitHub Project board and add three columns: "To Do", "In Progress", and "Done".',
      expectedOutput: 'An empty board layout with the three custom columns.',
      solution: 'Navigate to Projects -> New Project -> Choose Board -> Create Columns.'
    },
    quiz: [
      { question: 'What visual layout is commonly used in GitHub Projects?', options: ['Circular graph', 'Kanban Board (columns of cards)', 'Mind map', 'Calendar only'], answer: 'Kanban Board (columns of cards)' },
      { question: 'Can GitHub Projects pull issues from multiple repositories?', options: ['No, only from one repo', 'Yes, a project board can collect issues and PRs from any repository in the organization', 'Only private repositories', 'Only public repositories'], answer: 'Yes, a project board can collect issues and PRs from any repository in the organization' },
      { question: 'What is a Gantt-style view in Projects called?', options: ['Sprint', 'Table', 'Roadmap', 'Milestone'], answer: 'Roadmap' }
    ],
    interviewQuestions: [
      { q: 'How does GitHub Projects support Scrum/Agile workflows?', a: 'It supports custom fields (like Size, Priority, Sprints), iteration tracking, automated boards, and chart generation, letting teams plan sprints and monitor backlogs directly alongside their source code.' }
    ],
    summary: ['Sprint planning Kanban board.', 'Aggregates tasks across repositories.', 'Automated column movements.'],
    references: commonReferences
  },

  'git_portfolio_profile': {
    isStructured: true,
    title: '42. Creating an Attractive GitHub Profile',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Designing and customizing your public user profile page on GitHub to present a professional resume/portfolio for recruiters.',
    whyUseIt: 'Your profile is your digital resume. A clean profile with details, avatar, bio, and highlighted work dramatically increases job callback rates.',
    syntax: 'Customize via Profile -> Edit Profile (Bio, Location, Website, Social Links)',
    codeExample: '# Essential components:\n- Professional Avatar\n- Clear Bio (e.g., "Frontend Developer specialized in React")\n- Linked Personal Website / Portfolio',
    expectedOutput: 'A clean, welcoming landing page for hiring managers.',
    explanation: [
      { code: 'Bio', desc: 'A short sentence summarizing your tech stack and current focus.' },
      { code: 'Socials', desc: 'Direct links to LinkedIn, Twitter, or personal blog site.' }
    ],
    realWorldExample: 'A candidate applies for a coding job. The recruiter clicks their GitHub link, sees a nice photo, a clear bio, and links to hosted project demos.',
    commonMistakes: [
      { error: 'Leaving profile completely empty', code: '', suffix: 'If your profile has no avatar, no bio, and no location, it looks like an inactive bot account.' }
    ],
    bestPractices: ['Upload a high-quality headshot or clean avatar, and keep your bio updated with your current skills.'],
    practiceExercise: {
      task: 'Update your GitHub profile page by adding your location, bio, and linking your portfolio or LinkedIn profile.',
      expectedOutput: 'Changes saved and displayed on your public profile.',
      solution: 'Navigate to github.com/settings/profile -> Edit details -> Save.'
    },
    quiz: [
      { question: 'What is a developer\'s public GitHub profile equivalent to?', options: ['An operating system', 'A digital developer resume/portfolio', 'A compiler', 'A database schema'], answer: 'A digital developer resume/portfolio' },
      { question: 'What profile details should you always keep updated?', options: ['Your system memory details', 'Bio, location, portfolio website, and social links', 'Your internet browser version', 'Your local computer paths'], answer: 'Bio, location, portfolio website, and social links' },
      { question: 'Which username is most appropriate for a developer profile?', options: ['coderboy9999', 'sarah-jones-dev', 'anonymous_user', 'asdf12345'], answer: 'sarah-jones-dev' }
    ],
    interviewQuestions: [
      { q: 'Why do technical interviewers look at a candidate\'s GitHub profile?', a: 'They want to review actual code style, commit habits, documentation structure in readmes, active contributions, and see if the candidate has experience using Git branch-based workflows.' }
    ],
    summary: ['Serves as your coding resume.', 'Keep details and avatar professional.', 'Link to your live website.'],
    references: commonReferences
  },

  'git_profile_readme': {
    isStructured: true,
    title: '43. GitHub Profile README',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'A special repository named exactly after your username (e.g. `github.com/john/john`) containing a README.md that is rendered at the top of your public profile.',
    whyUseIt: 'Allows you to create a completely customized, beautiful landing page for your profile containing skills, badges, stats, and animations.',
    syntax: '1. Create Repository named: [your_username]\n2. Check: [x] Initialize with a README\n3. Push Markdown changes to README.md',
    codeExample: '# README.md in username repo:\n# Hi, I\'m Jane Doe 👋\n- 🔭 I’m currently working on React apps.\n- 🌱 I’m learning Docker and Linux.\n- 💬 Ask me about UI Design.',
    expectedOutput: 'A beautiful, custom greeting displaying layout cards and bio on your public profile page.',
    explanation: [
      { code: 'Special Repository', desc: 'Must be exactly case-sensitive to your username to trigger the custom profile card display.' }
    ],
    realWorldExample: 'A candidate creates a repository named `alexsmith`. In the README, they add dynamic widgets showing their coding stats, technology badges, and a custom greeting.',
    commonMistakes: [
      { error: 'Mispelling the repository name', code: '', suffix: 'If your username is `coder1`, naming the repository `coder-1` or `Coder1` (wrong case) won\'t trigger the special profile homepage. It must match EXACTLY.' }
    ],
    bestPractices: ['Use Markdown icons and shields.io badges to visually represent your tech stack (e.g., HTML, CSS, React badges).'],
    practiceExercise: {
      task: 'Create your special username repository on GitHub to initialize your profile README.',
      expectedOutput: 'GitHub alerts you with a green notice that you found a secret repository.',
      solution: 'Navigate to GitHub -> New Repository -> Set repository name exactly to your username.'
    },
    quiz: [
      { question: 'What is the secret repository name to create a GitHub Profile README?', options: ['profile', 'readme', 'Exactly your own GitHub username (case-sensitive)', 'my-bio'], answer: 'Exactly your own GitHub username (case-sensitive)' },
      { question: 'Which file in the special username repository is displayed on your profile page?', options: ['index.html', 'README.md', 'profile.json', 'main.js'], answer: 'README.md' },
      { question: 'What indicator does GitHub display when you type your username as the repository name?', options: ['An error message', 'A special notice indicating you found a secret and are creating a profile readme', 'A payment warning', 'Nothing'], answer: 'A special notice indicating you found a secret and are creating a profile readme' }
    ],
    interviewQuestions: [
      { q: 'How would you include dynamic charts or real-time contribution statistics in your profile README?', a: 'I would use public APIs like `github-readme-stats` and embed them as markdown images in my README.md, which fetch and render SVGs of my coding stats dynamically.' }
    ],
    summary: ['Special repo matching username.', 'README.md displays on public profile.', 'Permits custom cards, badges, and stats.'],
    references: commonReferences
  },

  'git_pin_repos': {
    isStructured: true,
    title: '44. Pinning Repositories',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Selecting up to six specific repositories to display prominently at the top of your public GitHub profile, replacing the default chronological display.',
    whyUseIt: 'To showcase your best, fully completed work (with high-quality code) rather than cluttering your profile with dummy test repositories.',
    syntax: 'Configure via: Profile -> Customize your pins -> Check/Uncheck projects -> Save',
    codeExample: '# Best pinning strategy:\n- Pin 2-3 completed, deployed projects\n- Pin 1 active open-source contribution\n- Avoid pinning empty/boilerplate test folders',
    expectedOutput: 'Your selected projects displayed as elegant card panels at the top of your profile.',
    explanation: [
      { code: Pins, desc: 'A custom order of cards showing repositories with their programming language, star counts, and descriptions.' }
    ],
    realWorldExample: 'A candidate has 50 repositories (most are tutorial copycats). They customize their profile pins to show only their 3 major real-world projects.',
    commonMistakes: [
      { error: 'Pinning half-finished tutorials or empty repos', code: '', suffix: 'Recruiters check pinned projects. If they open a pinned project and find only a single commit and empty folders, it leaves a bad impression.' }
    ],
    bestPractices: ['Only pin repositories that have a clear README.md, a description, and a link to a live deployed demo.'],
    practiceExercise: {
      task: 'Navigate to your public profile page, click "Customize your pins", and select your top projects.',
      expectedOutput: 'Pins updated and locked on the profile homepage.',
      solution: 'Navigate to Profile -> Click "Customize your pins" -> Choose items -> Save.'
    },
    quiz: [
      { question: 'How many repositories can you pin to the top of your GitHub profile?', options: ['3', '6', '10', 'Unlimited'], answer: '6' },
      { question: 'What is the default display behavior of repositories on your profile if you don\'t pin any?', options: ['They are hidden', 'They show in order of creation (oldest first)', 'They show in order of recent updates (most recently active first)', 'They show alphabetically'], answer: 'They show in order of recent updates (most recently active first)' },
      { question: 'Which repository is best to pin?', options: ['An empty repository from git init', 'A completed project with a README, clean code, and a live demo link', 'A copied tutorial project with no edits', 'A draft folder'], answer: 'A completed project with a README, clean code, and a live demo link' }
    ],
    interviewQuestions: [
      { q: 'How do you ensure a pinned repository card displays a specific programming language color?', a: 'GitHub detects languages based on the file volume. You can override or adjust classification using a `.gitattributes` file in the repository root to define language mappings.' }
    ],
    summary: ['Showcases your top 6 repositories.', 'Replaces default chronologic feed.', 'Always pin code with good readmes.'],
    references: commonReferences
  },

  'git_contrib_graph': {
    isStructured: true,
    title: '45. GitHub Contribution Graph',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A visual grid on your GitHub profile displaying your daily activity (commits, pull requests, issues, and code reviews) over the past year using color-coded green blocks.',
    whyUseIt: 'Serves as visual evidence of your active coding habits and dedication. A consistent green graph indicates a highly active programmer.',
    syntax: '-- Automatic visualization\n-- Colors: Grey (No activity) -> Light Green -> Dark Green (High activity)',
    codeExample: '# Activities that trigger a contribution:\n- Commits pushed to the default branch\n- Opening an Issue\n- Submitting a Pull Request\n- Conducting a code review',
    expectedOutput: 'A colored grid summarizing your coding history.',
    explanation: [
      { code: 'Contribution', desc: 'Any of the tracked activities done on public or private repositories linked to your email.' }
    ],
    realWorldExample: 'A student sets a challenge to code every day for 100 days. Their contribution graph shows a solid block of green squares, demonstrating consistency.',
    commonMistakes: [
      { error: 'Expecting local commits to show up immediately without pushing', code: '', suffix: 'GitHub cannot read your computer. Commits only show up on the grid AFTER you run `git push` to upload them.' }
    ],
    bestPractices: ['Ensure private contributions are enabled in your profile settings so your work is visible without exposing confidential code.'],
    practiceExercise: {
      task: 'Go to your profile settings and make sure "Private contributions" are enabled in your Contribution settings.',
      expectedOutput: 'Private activity is displayed as anonymous contributions on your public graph.',
      solution: 'Profile -> Settings -> Public profile -> Contribution settings -> Toggle "Private contributions".'
    },
    quiz: [
      { question: 'Which of the following activities does NOT count as a contribution on the graph?', options: ['Opening an issue', 'Creating a local commit and not pushing it', 'Merging a pull request', 'Conducting a code review'], answer: 'Creating a local commit and not pushing it' },
      { question: 'What does a darker green color square mean compared to a light green square?', options: ['High code complexity', 'More contributions were made on that specific day', 'A payment made', 'A critical compiler bug'], answer: 'More contributions were made on that specific day' },
      { question: 'Can you show private repository activity on your public contribution graph?', options: ['No, never', 'Yes, as anonymous blocks showing "Made X contributions" without revealing code details', 'Only if you make the repository public', 'Only with premium plans'], answer: 'Yes, as anonymous blocks showing "Made X contributions" without revealing code details' }
    ],
    interviewQuestions: [
      { q: 'Why might commits pushed to a feature branch not show up on your contribution graph?', a: 'GitHub only registers commits on the graph if they are pushed to the default branch (usually `main`) or merged. Pushing to feature branches won\'t trigger a block until they are merged into the main line.' }
    ],
    summary: ['Visual grid of coding history.', 'Triggered by commits, issues, reviews, and PRs.', 'Enable private commits to show anonymous blocks.'],
    references: commonReferences
  }
};
