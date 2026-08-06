const commonReferences = [
  { label: 'Linux Documentation', url: 'https://linux.die.net/' },
  { label: 'Ubuntu Official Docs', url: 'https://help.ubuntu.com/' }
];

export const linuxContentBatch2 = {
  'linux_history_cmd': {
    isStructured: true,
    title: '16. history',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `history` command displays a list of all the commands you have previously typed in the terminal.',
    whyUseIt: 'You typed a really long, complex command yesterday and forgot it. `history` lets you find it and run it again without retyping.',
    syntax: 'history [options]',
    codeExample: 'history\n\n# Run the command corresponding to number 105 in the history list:\n!105',
    hasLiveOutput: false,
    expectedOutput: '103 ls -la\n104 cd /var/log\n105 cat syslog',
    explanation: [
      { code: 'history', desc: 'Lists the commands with an index number next to each.' },
      { code: '!105', desc: 'The exclamation mark followed by a number instantly runs that command from the history.' }
    ],
    realWorldExample: 'A sysadmin uses `history | grep ssh` to figure out which remote server they connected to three days ago.',
    commonMistakes: [
      { error: 'Assuming history is shared', code: '', suffix: 'History is saved per-user. If you run a command as standard user, you won\'t see it in the history of the root user.' }
    ],
    bestPractices: ['Use the `Up Arrow` key to quickly cycle through recent history instead of typing out the `history` command.'],
    practiceExercise: {
      task: 'How do you instantly run command #42 from your history?',
      expectedOutput: '!42',
      solution: '!42'
    },
    quiz: [
      { question: 'What does the `history` command do?', options: ['Shows system uptime', 'Shows previously entered commands', 'Shows login times', 'Deletes old files'], answer: 'Shows previously entered commands' },
      { question: 'What shortcut runs a specific command by its history number?', options: ['#number', '$number', '!number', '@number'], answer: '!number' },
      { question: 'Which keyboard key cycles backwards through your command history?', options: ['Page Up', 'Up Arrow', 'Ctrl + Z', 'Tab'], answer: 'Up Arrow' },
      { question: 'Is command history shared between all users?', options: ['Yes', 'No, it is per-user', 'Only on Ubuntu', 'Only for root'], answer: 'No, it is per-user' },
      { question: 'How can you clear your command history?', options: ['clear', 'history -c', 'rm history', 'history --delete'], answer: 'history -c' }
    ],
    interviewQuestions: [
      { q: 'Where is the bash history physically stored on the hard drive?', a: 'It is typically stored in a hidden file in the user\'s home directory named `.bash_history`.' }
    ],
    summary: ['Shows past commands.', 'Use `!number` to re-run.', 'Saved in `~/.bash_history`.'],
    references: commonReferences
  },

  'linux_mkdir': {
    isStructured: true,
    title: '17. mkdir',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`mkdir` stands for "Make Directory". It is used to create new folders.',
    whyUseIt: 'To organize your files into folders via the command line.',
    syntax: 'mkdir [options] directory_name',
    codeExample: '# Create a single folder\nmkdir projects\n\n# Create multiple folders at once\nmkdir css js images\n\n# Create a nested structure (parent and child folders) all at once\nmkdir -p app/src/components',
    hasLiveOutput: false,
    expectedOutput: 'Folders are created silently (no output means success).',
    explanation: [
      { code: '-p', desc: 'Creates parent directories as needed. Without it, `mkdir a/b` fails if `a` doesn\'t exist.' }
    ],
    realWorldExample: 'A developer setting up a new web project creates the entire folder structure instantly using `mkdir -p project/{css,js,assets}`.',
    commonMistakes: [
      { error: 'Spaces in folder names', code: '', suffix: '`mkdir my folder` creates TWO folders (one named "my", one named "folder"). Use quotes: `mkdir "my folder"` or underscores `mkdir my_folder`.' }
    ],
    bestPractices: ['Always use lowercase letters and underscores/hyphens instead of spaces for Linux folder names.'],
    practiceExercise: {
      task: 'Create a folder named `backup` inside a folder named `data` (which might not exist yet).',
      expectedOutput: 'No output (success).',
      solution: 'mkdir -p data/backup'
    },
    quiz: [
      { question: 'What does `mkdir` do?', options: ['Makes a disk', 'Makes a file', 'Makes a directory', 'Makes a user'], answer: 'Makes a directory' },
      { question: 'What happens if you type `mkdir Hello World`?', options: ['Creates a folder named "Hello World"', 'Creates two folders: "Hello" and "World"', 'Throws an error', 'Creates a file'], answer: 'Creates two folders: "Hello" and "World"' },
      { question: 'Which flag allows you to create nested directories (parents and children) in one command?', options: ['-n', '-p', '-r', '-f'], answer: '-p' },
      { question: 'How do you create a folder with a space in its name?', options: ['mkdir folder space', 'mkdir folder_space', 'mkdir "folder space"', 'mkdir folder-space'], answer: 'mkdir "folder space"' },
      { question: 'What output do you get if `mkdir` is successful?', options: ['"Folder created"', '"Success"', 'Nothing (silent)', 'A beep'], answer: 'Nothing (silent)' }
    ],
    interviewQuestions: [
      { q: 'How would you create 100 directories named dir1 to dir100 in a single command?', a: 'Using brace expansion in bash: `mkdir dir{1..100}`' }
    ],
    summary: ['Creates folders.', 'Use `-p` for nested folders.', 'Avoid spaces in names.'],
    references: commonReferences
  },

  'linux_rmdir': {
    isStructured: true,
    title: '18. rmdir',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`rmdir` stands for "Remove Directory". It deletes EMPTY directories.',
    whyUseIt: 'A safe way to delete a folder, ensuring you don\'t accidentally delete a folder that has important files inside it.',
    syntax: 'rmdir directory_name',
    codeExample: 'rmdir old_projects',
    hasLiveOutput: false,
    expectedOutput: 'Folder is deleted silently.',
    explanation: [
      { code: 'rmdir', desc: 'Fails immediately if there is even a single file or hidden file inside the directory.' }
    ],
    realWorldExample: 'Cleaning up a workspace by removing directories you created by mistake that you know are empty.',
    commonMistakes: [
      { error: 'Trying to use it on a folder with files', code: '', suffix: 'It will throw an error: "Directory not empty". For folders with files, you must use `rm -r`.' }
    ],
    bestPractices: ['Prefer `rmdir` when cleaning up, as it acts as a safety net against deleting files.'],
    practiceExercise: {
      task: 'Delete an empty folder named `test_dir`.',
      expectedOutput: 'No output (success).',
      solution: 'rmdir test_dir'
    },
    quiz: [
      { question: 'What does `rmdir` do?', options: ['Removes files', 'Removes directories and all files inside them', 'Removes only EMPTY directories', 'Renames directories'], answer: 'Removes only EMPTY directories' },
      { question: 'What happens if you use `rmdir` on a folder containing a text file?', options: ['It deletes both', 'It deletes the folder and leaves the file', 'It throws a "Directory not empty" error', 'It prompts for confirmation'], answer: 'It throws a "Directory not empty" error' },
      { question: 'What command must you use instead if the folder is NOT empty?', options: ['rm -r', 'del', 'rmdir -f', 'erase'], answer: 'rm -r' },
      { question: 'Does `rmdir` move the folder to a Trash/Recycle Bin?', options: ['Yes', 'No, it is permanently deleted', 'Only on Ubuntu', 'Only if configured'], answer: 'No, it is permanently deleted' },
      { question: 'Can `rmdir` delete multiple empty folders at once (e.g., `rmdir f1 f2`)?', options: ['Yes', 'No', 'Only with -m', 'Only as root'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'Why does `rmdir` exist when `rm -r` can do everything it does?', a: 'Safety. `rm -r` is highly destructive and will silently delete gigabytes of data if used carelessly. `rmdir` guarantees that you are only deleting a structural folder and no actual file data is lost.' }
    ],
    summary: ['Deletes EMPTY folders.', 'Safest way to remove folders.', 'Use `rm -r` for full folders.'],
    references: commonReferences
  },

  'linux_touch': {
    isStructured: true,
    title: '19. touch',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `touch` command creates a new, empty file. If the file already exists, it updates the file\'s modification timestamp.',
    whyUseIt: 'A quick way to create placeholder files (like `index.html` or `style.css`) without opening a text editor.',
    syntax: 'touch file_name',
    codeExample: '# Create a single empty file\ntouch index.html\n\n# Create multiple files at once\ntouch style.css script.js',
    hasLiveOutput: false,
    expectedOutput: 'Files are created silently.',
    explanation: [
      { code: 'touch', desc: 'Does not write any data into the file; the file size is 0 bytes.' }
    ],
    realWorldExample: 'A developer creating the scaffold for a React component: `touch Button.jsx Button.css`.',
    commonMistakes: [
      { error: 'Assuming touch overwrites files', code: '', suffix: 'If `index.html` already has code in it, running `touch index.html` will NOT delete your code. It just changes the "Last Modified" time to right now.' }
    ],
    bestPractices: ['Use `touch` to rapidly build out file structures before you start coding.'],
    practiceExercise: {
      task: 'Create an empty file called `data.csv`.',
      expectedOutput: 'No output.',
      solution: 'touch data.csv'
    },
    quiz: [
      { question: 'What is the primary use of `touch` for beginners?', options: ['Creating empty files', 'Deleting files', 'Editing text', 'Reading files'], answer: 'Creating empty files' },
      { question: 'What happens if you `touch` a file that already exists and has data in it?', options: ['It deletes the data', 'It throws an error', 'It updates the file\'s modification timestamp', 'It duplicates the file'], answer: 'It updates the file\'s modification timestamp' },
      { question: 'What is the size of a newly `touch`ed file?', options: ['1 KB', '0 bytes', '1 byte', '4096 bytes'], answer: '0 bytes' },
      { question: 'Can `touch` create multiple files at once?', options: ['Yes', 'No', 'Only if they have the same extension', 'Only in Windows'], answer: 'Yes' },
      { question: 'What is a common scenario to use `touch`?', options: ['To install a program', 'To create placeholder files for a new project', 'To format a drive', 'To encrypt a file'], answer: 'To create placeholder files for a new project' }
    ],
    interviewQuestions: [
      { q: 'Historically, what was the actual original purpose of the `touch` command before it became known for creating empty files?', a: 'Its original and actual purpose was to update the access and modification timestamps of files (hence "touching" the file) to trick build systems like `make` into thinking a file was modified so it would trigger a recompile.' }
    ],
    summary: ['Creates empty files.', 'Updates timestamps of existing files.', 'Does not erase data.'],
    references: commonReferences
  },

  'linux_cp': {
    isStructured: true,
    title: '20. cp',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`cp` stands for "Copy". It copies files or directories from one location to another.',
    whyUseIt: 'To create backups of files before editing them, or to duplicate a folder.',
    syntax: 'cp [options] source destination',
    codeExample: '# Copy a file to the same folder with a new name\ncp config.txt config_backup.txt\n\n# Copy a file to another folder\ncp index.html /var/www/html/\n\n# Copy an entire directory and its contents (-r)\ncp -r my_website my_website_backup',
    hasLiveOutput: false,
    expectedOutput: 'Files are copied silently.',
    explanation: [
      { code: '-r', desc: 'Recursive. Required if you are copying a folder. It copies the folder and everything inside it.' }
    ],
    realWorldExample: 'A sysadmin copying a configuration file (`cp nginx.conf nginx.conf.bak`) before making risky changes, so they can restore it if it breaks.',
    commonMistakes: [
      { error: 'Forgetting -r when copying folders', code: '', suffix: 'If you type `cp folder1 folder2`, you will get an error: "-r not specified; omitting directory".' },
      { error: 'Silently overwriting files', code: '', suffix: 'By default, if the destination file already exists, `cp` will overwrite it WITHOUT asking. Use `cp -i` to prompt before overwriting.' }
    ],
    bestPractices: ['Always create `.bak` (backup) copies of important config files before editing them.'],
    practiceExercise: {
      task: 'Copy a directory named `src` to `src_backup`.',
      expectedOutput: 'No output.',
      solution: 'cp -r src src_backup'
    },
    quiz: [
      { question: 'What does `cp` stand for?', options: ['Change Path', 'Copy', 'Compare', 'Compress'], answer: 'Copy' },
      { question: 'What flag must you use to copy a directory?', options: ['-d', '-c', '-r', '-f'], answer: '-r' },
      { question: 'If `destination.txt` already exists, what does `cp source.txt destination.txt` do by default?', options: ['Throws an error', 'Overwrites destination.txt silently', 'Prompts you for confirmation', 'Creates destination(1).txt'], answer: 'Overwrites destination.txt silently' },
      { question: 'Which flag prompts you before overwriting an existing file?', options: ['-p', '-o', '-i', '-w'], answer: '-i' },
      { question: 'What is the standard convention for naming a backup file you just copied?', options: ['file.txt.bak', 'file.txt.copy', 'file_backup.txt', 'Both .bak and _backup are common'], answer: 'Both .bak and _backup are common' }
    ],
    interviewQuestions: [
      { q: 'How can you preserve the original file attributes (like ownership and timestamps) when copying a file?', a: 'You use the `-p` (preserve) flag or the `-a` (archive) flag. `cp -a` is very common for backups as it acts recursively AND preserves all file metadata.' }
    ],
    summary: ['Copies files.', 'Use `-r` for folders.', 'Overwrites existing files silently.'],
    references: commonReferences
  },

  'linux_mv': {
    isStructured: true,
    title: '21. mv',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`mv` stands for "Move". It is used to move files to a different directory, OR to rename files.',
    whyUseIt: 'Unlike Windows where there is a separate "Rename" button, Linux uses `mv` to move a file from its old name to its new name.',
    syntax: 'mv source destination',
    codeExample: '# Rename a file (moving it from old name to new name)\nmv old_name.txt new_name.txt\n\n# Move a file to another directory\nmv report.pdf /home/alice/Documents/\n\n# Move AND rename at the same time\nmv report.pdf /home/alice/Documents/final_report.pdf',
    hasLiveOutput: false,
    expectedOutput: 'File is moved/renamed silently.',
    explanation: [
      { code: 'mv', desc: 'It removes the file from the source and places it in the destination.' }
    ],
    realWorldExample: 'Downloading a file to the `Downloads` folder, and using `mv` to place it into your `Projects` folder.',
    commonMistakes: [
      { error: 'Overwriting files silently', code: '', suffix: 'Just like `cp`, `mv` will overwrite an existing file in the destination without asking. Use `mv -i` for safety.' }
    ],
    bestPractices: ['Be careful when moving a file into a folder. If you forget the trailing slash on the folder (e.g., `mv file folder` when folder doesn\'t exist), it will just rename the file to "folder".'],
    practiceExercise: {
      task: 'Rename `index.htm` to `index.html`.',
      expectedOutput: 'No output.',
      solution: 'mv index.htm index.html'
    },
    quiz: [
      { question: 'What two operations does the `mv` command handle in Linux?', options: ['Move and Copy', 'Move and Delete', 'Move and Rename', 'Rename and Delete'], answer: 'Move and Rename' },
      { question: 'Does `mv` require a recursive flag (`-r`) to move a directory?', options: ['Yes', 'No', 'Only if the directory is large', 'Only as root'], answer: 'No' },
      { question: 'If `new_name.txt` already exists, what happens when you run `mv old_name.txt new_name.txt`?', options: ['Throws an error', 'Overwrites new_name.txt silently', 'Prompts for confirmation', 'Creates new_name(1).txt'], answer: 'Overwrites new_name.txt silently' },
      { question: 'How do you prompt for confirmation before an overwrite?', options: ['mv -c', 'mv -i', 'mv -p', 'mv -w'], answer: '-i' },
      { question: 'What happens to the original source file after a successful `mv`?', options: ['It stays there', 'It is deleted', 'It becomes hidden', 'It is zipped'], answer: 'It is deleted' }
    ],
    interviewQuestions: [
      { q: 'Why is `mv` instantly fast when renaming a file, but takes time when moving a file to a USB drive?', a: 'When renaming a file on the SAME file system, `mv` just updates the filesystem index pointers (instant). When moving across DIFFERENT file systems (like to a USB), it has to physically copy the byte data and then delete the source.' }
    ],
    summary: ['Moves files.', 'Renames files.', 'No `-r` needed for folders.'],
    references: commonReferences
  },

  'linux_rm': {
    isStructured: true,
    title: '22. rm',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: '`rm` stands for "Remove". It is used to delete files and directories permanently.',
    whyUseIt: 'To clean up files you no longer need.',
    syntax: 'rm [options] file_name',
    codeExample: '# Delete a single file\nrm file.txt\n\n# Delete multiple files\nrm file1.txt file2.txt\n\n# Force delete a directory and everything inside it\nrm -rf old_project/',
    hasLiveOutput: false,
    expectedOutput: 'Files are deleted silently.',
    explanation: [
      { code: '-r', desc: 'Recursive. Required to delete directories and their contents.' },
      { code: '-f', desc: 'Force. Ignores nonexistent files and never prompts for confirmation.' }
    ],
    realWorldExample: 'Using `rm -rf node_modules/` to aggressively delete thousands of JavaScript dependency files so you can reinstall them fresh.',
    commonMistakes: [
      { error: 'Typo in rm -rf', code: '', suffix: 'Typing `rm -rf /` as root will literally delete the entire operating system, destroying the computer. NEVER do this.' },
      { error: 'Using wildcard carelessly', code: '', suffix: '`rm * .txt` (notice the space) will delete ALL files in the folder, and then look for `.txt`. It should be `rm *.txt`.' }
    ],
    bestPractices: ['There is no Recycle Bin in the Linux terminal. When you use `rm`, the file is GONE FOREVER. Use it with extreme caution.'],
    practiceExercise: {
      task: 'Delete a folder named `temp` and all its contents without any prompts.',
      expectedOutput: 'Folder is destroyed.',
      solution: 'rm -rf temp'
    },
    quiz: [
      { question: 'What does `rm` do?', options: ['Removes files permanently', 'Moves files to the Recycle Bin', 'Renames files', 'Reads memory'], answer: 'Removes files permanently' },
      { question: 'Which flag is required to delete a folder that contains files?', options: ['-d', '-r', '-f', '-x'], answer: '-r' },
      { question: 'What does the `-f` flag do?', options: ['Formats the drive', 'Finds files', 'Forces deletion without asking for confirmation', 'Frees memory'], answer: 'Forces deletion without asking for confirmation' },
      { question: 'What happens if you run `rm -rf /` as the root user?', options: ['It cleans the temp folder', 'It deletes the entire operating system permanently', 'It restarts the server', 'It throws an error preventing it'], answer: 'It deletes the entire operating system permanently' },
      { question: 'Is there a way to easily "undo" an `rm` command?', options: ['Yes, Ctrl+Z', 'Yes, using the `restore` command', 'No, it is gone permanently', 'Yes, look in the Trash folder'], answer: 'No, it is gone permanently' }
    ],
    interviewQuestions: [
      { q: 'How can you protect a file from being deleted, even by the root user?', a: 'You can use the `chattr +i filename` (change attribute, immutable) command. Even if root tries to `rm -f` the file, it will fail until the immutable flag is removed.' }
    ],
    summary: ['Permanently deletes files.', 'Use `-r` for folders.', 'No recycle bin!'],
    references: commonReferences
  },

  'linux_find': {
    isStructured: true,
    title: '23. find',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: '`find` is a powerful command used to search for files and directories in a directory hierarchy based on criteria like name, size, or modification date.',
    whyUseIt: 'When you know a file exists but have no idea where it is, or when you want to find all files larger than 1GB.',
    syntax: 'find [path] [criteria] [action]',
    codeExample: '# Find a file by name starting from the root directory\nfind / -name "database.yml"\n\n# Find all PDF files in the current folder and subfolders\nfind . -name "*.pdf"\n\n# Find files larger than 100MB\nfind / -size +100M',
    hasLiveOutput: false,
    expectedOutput: '/var/www/config/database.yml',
    explanation: [
      { code: '.', desc: 'The starting point (e.g., `.` means start looking in the current folder).' },
      { code: '-name', desc: 'The criteria to search by file name.' }
    ],
    realWorldExample: 'A server\'s hard drive is full. A sysadmin runs `find / -size +1G` to find massive log files and deletes them to free up space.',
    commonMistakes: [
      { error: 'Forgetting quotes around wildcards', code: '', suffix: '`find . -name *.txt` might fail if the shell expands `*.txt` before `find` runs. Always use quotes: `find . -name "*.txt"`.' }
    ],
    bestPractices: ['`find` can take a long time to run if searching from `/`. Try to narrow down the starting path (like `/var` or `/home`) if possible.'],
    practiceExercise: {
      task: 'Find all files ending in `.log` inside the `/var` directory.',
      expectedOutput: 'List of log files.',
      solution: 'find /var -name "*.log"'
    },
    quiz: [
      { question: 'What does the `find` command do?', options: ['Searches inside the text of a file', 'Searches the file system for files/folders matching criteria', 'Formats a drive', 'Downloads files'], answer: 'Searches the file system for files/folders matching criteria' },
      { question: 'In `find . -name "test.txt"`, what does the `.` mean?', options: ['Hidden file', 'Start searching in the current directory', 'Match exactly', 'Run as root'], answer: 'Start searching in the current directory' },
      { question: 'How would you search for a file strictly by its size (e.g., over 50MB)?', options: ['find . -size +50M', 'find . -large 50M', 'find . -bytes 50000', 'find . -weight 50M'], answer: 'find . -size +50M' },
      { question: 'Why is it recommended to put quotes around wildcards like `*.txt`?', options: ['To make it bold', 'To stop the shell from prematurely expanding it', 'To indicate a string', 'It is not recommended'], answer: 'To stop the shell from prematurely expanding it' },
      { question: 'Can `find` execute commands (like `rm`) on the files it finds automatically?', options: ['Yes, using the -exec flag', 'No, find only lists them', 'Only in Windows', 'Only if they are text files'], answer: 'Yes, using the -exec flag' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `find` and `locate`?', a: '`find` traverses the actual live file system in real-time, making it accurate but potentially slow. `locate` searches a pre-built background database, making it instantly fast, but it won\'t find files created in the last few minutes (unless the database is updated).' }
    ],
    summary: ['Searches for files.', 'Can search by name, size, date.', 'Real-time search.'],
    references: commonReferences
  },

  'linux_locate': {
    isStructured: true,
    title: '24. locate',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`locate` finds files instantly by searching a background database rather than scanning the live hard drive.',
    whyUseIt: 'When you need to find a file immediately and don\'t want to wait 5 minutes for `find` to scan the whole server.',
    syntax: 'locate file_name',
    codeExample: '# Find all files with "nginx" in the name\nlocate nginx\n\n# Update the database manually if you just created a file\nsudo updatedb',
    hasLiveOutput: false,
    expectedOutput: '/etc/nginx/nginx.conf\n/usr/sbin/nginx',
    explanation: [
      { code: 'locate', desc: 'Scans the `/var/lib/mlocate/mlocate.db` file.' },
      { code: 'updatedb', desc: 'The command used to refresh the database.' }
    ],
    realWorldExample: 'Trying to find where the `php.ini` file is stored on a server. `locate php.ini` will spit out the answer instantly.',
    commonMistakes: [
      { error: 'Searching for a newly created file', code: '', suffix: 'If you create a file and immediately run `locate`, it will not find it. The database only updates once a day via a cron job. You must run `sudo updatedb` to find new files.' }
    ],
    bestPractices: ['Use `locate` for system files and configurations, use `find` for files you just downloaded or created.'],
    practiceExercise: {
      task: 'How do you force the `locate` database to update right now?',
      expectedOutput: 'Query OK',
      solution: 'sudo updatedb'
    },
    quiz: [
      { question: 'How is `locate` different from `find`?', options: ['It is slower', 'It searches a database instead of the live file system', 'It only searches text', 'It only works for root'], answer: 'It searches a database instead of the live file system' },
      { question: 'Why is `locate` so much faster than `find`?', options: ['It uses multi-threading', 'It reads from an indexed database', 'It skips hidden files', 'It runs in RAM'], answer: 'It reads from an indexed database' },
      { question: 'What is the major disadvantage of `locate`?', options: ['It costs money', 'It cannot find recently created files until the database updates', 'It deletes files', 'It only works on Ubuntu'], answer: 'It cannot find recently created files until the database updates' },
      { question: 'What command manually refreshes the locate database?', options: ['refreshdb', 'updatedb', 'newdb', 'scandb'], answer: 'updatedb' },
      { question: 'Does `locate` require a starting directory argument (like `.` or `/`)?', options: ['Yes', 'No, it searches the whole DB by default', 'Only if you want', 'Yes, always'], answer: 'No, it searches the whole DB by default' }
    ],
    interviewQuestions: [
      { q: 'If I run `locate secret.txt` as a standard user, can I see files located in `/root`?', a: 'No. Modern versions of `locate` (like `mlocate`) check file permissions before displaying results. If you don\'t have read permissions to the directory where the file lives, `locate` will hide it from your results.' }
    ],
    summary: ['Instantly fast search.', 'Relies on a database.', 'Update with `updatedb`.'],
    references: commonReferences
  },

  'linux_file': {
    isStructured: true,
    title: '25. file',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The `file` command determines the actual type of a file by examining its contents, ignoring its file extension.',
    whyUseIt: 'In Linux, file extensions (like .txt, .jpg) are completely optional and often omitted. The `file` command tells you what a file actually is.',
    syntax: 'file file_name',
    codeExample: '# Someone sent you a file named "mystery_data" with no extension\nfile mystery_data\n\n# Output:\nmystery_data: PNG image data, 800 x 600, 8-bit/color RGB',
    hasLiveOutput: false,
    expectedOutput: 'PNG image data',
    explanation: [
      { code: 'file', desc: 'Reads the "magic numbers" (the first few bytes) of the file to determine its true format.' }
    ],
    realWorldExample: 'You download a backup file named `backup_2023`. You run `file backup_2023` and it tells you it is a "gzip compressed data" file, so now you know you need to use `gunzip` on it.',
    commonMistakes: [
      { error: 'Trusting the extension', code: '', suffix: 'A hacker might upload a PHP script named `image.jpg`. The `file` command will reveal it is "PHP script text", not an image.' }
    ],
    bestPractices: ['Always use `file` when handling unknown downloads or investigating security incidents.'],
    practiceExercise: {
      task: 'Determine the file type of `/bin/ls`.',
      expectedOutput: 'ELF 64-bit LSB shared object...',
      solution: 'file /bin/ls'
    },
    quiz: [
      { question: 'What does the `file` command do?', options: ['Creates a file', 'Deletes a file', 'Determines the actual data type of a file', 'Renames a file'], answer: 'Determines the actual data type of a file' },
      { question: 'Does Linux strictly rely on file extensions (like .exe or .txt) to know what a file is?', options: ['Yes', 'No, extensions are just for human convenience', 'Only on servers', 'Only for images'], answer: 'No, extensions are just for human convenience' },
      { question: 'How does the `file` command figure out the type?', options: ['It guesses based on size', 'It reads the "magic numbers" (headers) inside the file', 'It asks the network', 'It checks the extension'], answer: 'It reads the "magic numbers" (headers) inside the file' },
      { question: 'If you rename `script.sh` to `script.jpg`, what will the `file` command say it is?', options: ['JPEG Image', 'Bourne-Again shell script text', 'Error', 'Unknown'], answer: 'Bourne-Again shell script text' },
      { question: 'What type of file is `/bin/bash` likely to be?', options: ['Text document', 'ELF 64-bit executable', 'Image', 'Zip file'], answer: 'ELF 64-bit executable' }
    ],
    interviewQuestions: [
      { q: 'What are "Magic Numbers" in the context of the `file` command?', a: 'Magic Numbers are a constant numerical or text value used to identify a file format, typically found at the very beginning of the file (e.g., all PDFs start with `%PDF-`). The `file` command checks a database of these numbers to identify the file.' }
    ],
    summary: ['Identifies true file types.', 'Ignores file extensions.', 'Uses magic numbers.'],
    references: commonReferences
  },

  'linux_stat': {
    isStructured: true,
    title: '26. stat',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`stat` displays detailed status and metadata about a file or filesystem, providing much more information than `ls -l`.',
    whyUseIt: 'When you need exact timestamps (Access, Modify, Change) down to the millisecond, or specific block/inode information.',
    syntax: 'stat file_name',
    codeExample: 'stat index.html',
    hasLiveOutput: false,
    expectedOutput: 'File: index.html\nSize: 4096       Blocks: 8          IO Block: 4096   regular file\nAccess: (0644/-rw-r--r--)\nAccess: 2023-10-01 10:00:00.000\nModify: 2023-10-01 10:05:00.000\nChange: 2023-10-01 10:05:00.000',
    explanation: [
      { code: 'Access', desc: 'When the file was last read.' },
      { code: 'Modify', desc: 'When the file contents were last changed.' },
      { code: 'Change', desc: 'When the file metadata (permissions/ownership) was last changed.' }
    ],
    realWorldExample: 'A security auditor investigating a server breach uses `stat` to find out exactly when a malicious script was modified and if its permissions were recently changed.',
    commonMistakes: [
      { error: 'Confusing Modify and Change', code: '', suffix: 'Modify is for data inside the file. Change is for data about the file (like running `chmod`).' }
    ],
    bestPractices: ['Use `stat` instead of `ls -l` when writing scripts that need to parse precise file timestamps.'],
    practiceExercise: {
      task: 'Check the detailed stats of `/etc/passwd`.',
      expectedOutput: 'Detailed metadata.',
      solution: 'stat /etc/passwd'
    },
    quiz: [
      { question: 'What does `stat` provide?', options: ['Network stats', 'Detailed file metadata (timestamps, inodes, permissions)', 'CPU usage', 'Disk space'], answer: 'Detailed file metadata (timestamps, inodes, permissions)' },
      { question: 'How is it different from `ls -l`?', options: ['It is the same', 'It shows less info', 'It shows much more detailed info, including millisecond timestamps and inodes', 'It only works on folders'], answer: 'It shows much more detailed info, including millisecond timestamps and inodes' },
      { question: 'What does the "Modify" timestamp track?', options: ['When the file was opened', 'When the contents of the file were changed', 'When the permissions were changed', 'When the file was deleted'], answer: 'When the contents of the file were changed' },
      { question: 'What does the "Change" timestamp track?', options: ['When the file was opened', 'When the contents changed', 'When the metadata (like permissions/ownership) changed', 'When the server booted'], answer: 'When the metadata (like permissions/ownership) changed' },
      { question: 'What does the "Access" timestamp track?', options: ['When the file was created', 'When the file was last read/opened', 'When the file was zipped', 'When the file was renamed'], answer: 'When the file was last read/opened' }
    ],
    interviewQuestions: [
      { q: 'What is an Inode in Linux?', a: 'An inode is a data structure on a filesystem that stores all information about a file EXCEPT its name and its actual data. It stores permissions, ownership, timestamps, and pointers to the disk blocks where the data is actually kept.' }
    ],
    summary: ['Extremely detailed file info.', 'Shows Access, Modify, Change times.', 'Shows Inode data.'],
    references: commonReferences
  },

  'linux_cat': {
    isStructured: true,
    title: '27. cat',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`cat` stands for "concatenate". It reads data from files and outputs their entire contents directly to the terminal screen.',
    whyUseIt: 'The fastest way to view the contents of a small text file without opening a text editor like Nano or Vim.',
    syntax: 'cat file_name',
    codeExample: '# View a single file\ncat /etc/hostname\n\n# Combine (concatenate) two files into one\ncat file1.txt file2.txt > combined.txt',
    hasLiveOutput: false,
    expectedOutput: 'ubuntu-server',
    explanation: [
      { code: 'cat', desc: 'Dumps the entire file to the screen instantly.' }
    ],
    realWorldExample: 'Quickly checking your SSH public key to copy it: `cat ~/.ssh/id_rsa.pub`.',
    commonMistakes: [
      { error: 'Using cat on massive files', code: '', suffix: 'If you `cat` a 10GB log file, your terminal will be locked up for minutes scrolling through millions of lines. Use `less` or `tail` for big files.' }
    ],
    bestPractices: ['Only use `cat` for short configuration files or scripts. Use `less` for anything longer than one screen.'],
    practiceExercise: {
      task: 'Output the contents of `/etc/os-release` to the screen.',
      expectedOutput: 'OS info printed.',
      solution: 'cat /etc/os-release'
    },
    quiz: [
      { question: 'What does `cat` primarily do?', options: ['Meows', 'Deletes files', 'Outputs the entire contents of a file to the screen', 'Edits files'], answer: 'Outputs the entire contents of a file to the screen' },
      { question: 'What does "concatenate" mean in this context?', options: ['To hide', 'To delete', 'To link things together (like joining two files)', 'To encrypt'], answer: 'To link things together (like joining two files)' },
      { question: 'Why shouldn\'t you use `cat` on a 5GB log file?', options: ['It will delete the file', 'It will print all 5GB to the screen, freezing your terminal', 'It will corrupt the disk', 'It is too fast'], answer: 'It will print all 5GB to the screen, freezing your terminal' },
      { question: 'Can `cat` create a new file?', options: ['Yes, by redirecting output (cat > file.txt)', 'No', 'Only as root', 'Only if the file exists'], answer: 'Yes, by redirecting output (cat > file.txt)' },
      { question: 'Which command is a safer alternative for viewing large files?', options: ['echo', 'ls', 'less', 'touch'], answer: 'less' }
    ],
    interviewQuestions: [
      { q: 'What does the command `cat /dev/null > file.txt` do?', a: 'It empties (truncates) the file to zero bytes without deleting the file itself. `/dev/null` is a special file that contains nothing, so redirecting it into a file overwrites it with nothing.' }
    ],
    summary: ['Prints file contents to screen.', 'Do not use on massive files.', 'Can combine files.'],
    references: commonReferences
  },

  'linux_less': {
    isStructured: true,
    title: '28. less',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`less` is a terminal pager. It allows you to view the contents of a file one screen (page) at a time, rather than dumping it all at once like `cat`.',
    whyUseIt: 'Essential for reading long files, logs, or documentation (man pages) because it lets you scroll up and down and search for text.',
    syntax: 'less file_name',
    codeExample: 'less /var/log/syslog',
    hasLiveOutput: false,
    expectedOutput: 'The first page of the syslog file, waiting for your keyboard input.',
    explanation: [
      { code: 'Spacebar', desc: 'Go forward one page.' },
      { code: 'b', desc: 'Go backward one page.' },
      { code: '/text', desc: 'Search for "text".' },
      { code: 'q', desc: 'Quit and return to the prompt.' }
    ],
    realWorldExample: 'Reading a server manual or a massive error log where you need to carefully scroll through the lines to find the stack trace.',
    commonMistakes: [
      { error: 'Not knowing how to exit', code: '', suffix: 'Many beginners get trapped in `less` because Ctrl+C doesn\'t always work. You MUST press `q` to quit.' }
    ],
    bestPractices: ['"Less is more". It is highly memory efficient because it doesn\'t load the whole file into RAM at once, making it safe for 100GB files.'],
    practiceExercise: {
      task: 'How do you exit the `less` viewer?',
      expectedOutput: 'You return to the prompt.',
      solution: 'Press the "q" key.'
    },
    quiz: [
      { question: 'What does `less` do?', options: ['Compresses files', 'Views files one page at a time', 'Deletes files', 'Renames files'], answer: 'Views files one page at a time' },
      { question: 'How do you quit the `less` command?', options: ['Ctrl + C', 'Esc', 'q', 'Alt + F4'], answer: 'q' },
      { question: 'How do you scroll forward exactly one page?', options: ['Enter', 'Spacebar', 'Tab', 'Shift'], answer: 'Spacebar' },
      { question: 'How do you search for a specific word while inside `less`?', options: ['Type / followed by the word', 'Ctrl + F', 'Alt + S', 'You cannot search'], answer: 'Type / followed by the word' },
      { question: 'Why is `less` better than `cat` for large files?', options: ['It is prettier', 'It doesn\'t load the entire file into memory at once', 'It deletes the file after', 'It translates the file'], answer: 'It doesn\'t load the entire file into memory at once' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `less` and `more`?', a: '`more` is an older, primitive pager that generally only allows scrolling forward. `less` was written as an upgrade ("less is more") that allows both forward and backward scrolling, as well as advanced searching.' }
    ],
    summary: ['Page-by-page viewer.', 'Press `q` to quit.', 'Highly memory efficient.'],
    references: commonReferences
  },

  'linux_more': {
    isStructured: true,
    title: '29. more',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`more` is the predecessor to `less`. It is a primitive pager that lets you view text files one page at a time.',
    whyUseIt: 'You will rarely choose to use it over `less` today, but it is deeply ingrained in Unix history and sometimes pops up in older systems.',
    syntax: 'more file_name',
    codeExample: 'more /etc/passwd',
    hasLiveOutput: false,
    expectedOutput: 'The first page of the file with a "--More--(10%)" prompt at the bottom.',
    explanation: [
      { code: 'more', desc: 'Allows you to read down, but (historically) not scroll up.' }
    ],
    realWorldExample: 'You are SSH\'d into an ancient legacy Unix server from 1999 that doesn\'t have `less` installed.',
    commonMistakes: [
      { error: 'Trying to scroll up', code: '', suffix: 'If you miss something and try to use the Up Arrow, `more` might not let you go back. You have to quit and start over.' }
    ],
    bestPractices: ['Just use `less`. There is almost no reason to use `more` on a modern system.'],
    practiceExercise: {
      task: 'What key do you press in `more` to go to the next page?',
      expectedOutput: 'Next page loads.',
      solution: 'Spacebar'
    },
    quiz: [
      { question: 'What does `more` do?', options: ['Page viewer', 'Deletes files', 'Copies data', 'Shows CPU'], answer: 'Page viewer' },
      { question: 'What is the main limitation of `more` compared to `less`?', options: ['It is too fast', 'Historically, it cannot scroll backwards', 'It deletes files', 'It requires root'], answer: 'Historically, it cannot scroll backwards' },
      { question: 'How do you advance a page in `more`?', options: ['Enter', 'Spacebar', 'Tab', 'Q'], answer: 'Spacebar' },
      { question: 'How do you quit `more`?', options: ['q', 'Esc', 'Alt+F4', 'Backspace'], answer: 'q' },
      { question: 'Which command is the modern, preferred alternative to `more`?', options: ['cat', 'less', 'nano', 'vim'], answer: 'less' }
    ],
    interviewQuestions: [
      { q: 'Why do developers joke that "less is more"?', a: 'It is a Unix pun. The command `less` was explicitly created to be a better, more feature-rich version of the `more` command. Therefore, the command named `less` gives you *more* functionality.' }
    ],
    summary: ['Older version of `less`.', 'Cannot easily scroll up.', 'Avoid using in modern times.'],
    references: commonReferences
  },

  'linux_head': {
    isStructured: true,
    title: '30. head',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`head` outputs the first part (top) of a file. By default, it prints the first 10 lines.',
    whyUseIt: 'To quickly check what a file is about, read column headers in a CSV, or verify a script\'s shebang (`#!/bin/bash`) without opening the whole file.',
    syntax: 'head [options] file_name',
    codeExample: '# Print the first 10 lines\nhead data.csv\n\n# Print the first 3 lines\nhead -n 3 data.csv',
    hasLiveOutput: false,
    expectedOutput: 'id,name,email\n1,Alice,alice@mail.com\n2,Bob,bob@mail.com',
    explanation: [
      { code: '-n 3', desc: 'Specifies exactly how many lines to print (in this case, 3).' }
    ],
    realWorldExample: 'A data scientist downloads a 5-million row CSV file and uses `head -n 5 data.csv` to quickly peek at the column names before writing a Python script.',
    commonMistakes: [
      { error: 'Thinking it modifies the file', code: '', suffix: '`head` only reads and displays. It does not cut or delete the rest of the file.' }
    ],
    bestPractices: ['Combine `head` and `tail` in a pipeline if you need to extract a specific chunk of lines from the middle of a file.'],
    practiceExercise: {
      task: 'Print the first 5 lines of `/etc/passwd`.',
      expectedOutput: 'Top 5 lines.',
      solution: 'head -n 5 /etc/passwd'
    },
    quiz: [
      { question: 'What does the `head` command do?', options: ['Shows CPU usage', 'Outputs the top portion of a file', 'Deletes the top of a file', 'Renames the file'], answer: 'Outputs the top portion of a file' },
      { question: 'How many lines does `head` print by default?', options: ['5', '10', '20', '50'], answer: '10' },
      { question: 'Which flag is used to specify a custom number of lines?', options: ['-c', '-l', '-n', '-x'], answer: '-n' },
      { question: 'If you run `head -n 2 file.txt`, what happens?', options: ['Prints 2 lines', 'Deletes 2 lines', 'Skips 2 lines', 'Fails'], answer: 'Prints 2 lines' },
      { question: 'Does `head` modify the original file?', options: ['Yes', 'No', 'Only as root', 'Only if you use -f'], answer: 'No' }
    ],
    interviewQuestions: [
      { q: 'How would you view exactly line 15 of a file?', a: 'You can combine head and tail. `head -n 15 file.txt | tail -n 1`. `head` grabs the first 15 lines, and `tail` grabs the very last line of that chunk (which is line 15).' }
    ],
    summary: ['Prints the top of a file.', 'Defaults to 10 lines.', 'Use `-n` to specify line count.'],
    references: commonReferences
  }
};