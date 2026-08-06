const commonReferences = [
  { label: 'Linux Documentation', url: 'https://linux.die.net/' },
  { label: 'Ubuntu Official Docs', url: 'https://help.ubuntu.com/' }
];

export const linuxContentBatch5 = {
  'linux_update_packages': {
    isStructured: true,
    title: '61. Updating Packages',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Updating packages is a two-step process in Linux: first you refresh the list of available updates (`update`), then you actually install them (`upgrade`).',
    whyUseIt: 'To patch security vulnerabilities, fix bugs, and get new features for your installed software.',
    syntax: 'sudo apt update && sudo apt upgrade -y',
    codeExample: '# Step 1: Fetch the latest catalog of software\nsudo apt update\n\n# Step 2: Actually download and install the newer versions\nsudo apt upgrade',
    hasLiveOutput: false,
    expectedOutput: 'System checks for updates, prompts you for confirmation, and installs them.',
    explanation: [
      { code: '&&', desc: 'A bash operator that means "Run the first command, and if it succeeds, run the second command immediately after".' }
    ],
    realWorldExample: 'A sysadmin logs into a server every Monday morning and runs `sudo apt update && sudo apt upgrade -y` to keep the server secure against new hacker exploits.',
    commonMistakes: [
      { error: 'Assuming `update` updates the software', code: '', suffix: 'This is the most common beginner mistake. `apt update` does NOT update your software. It only updates the *list* of what software exists. You MUST run `upgrade` to actually change your software.' }
    ],
    bestPractices: ['Run updates regularly. Do not ignore them on internet-facing servers, or you will be hacked.'],
    practiceExercise: {
      task: 'Write a single line command to both update the package list and upgrade all software without asking for confirmation.',
      expectedOutput: 'Updates install automatically.',
      solution: 'sudo apt update && sudo apt upgrade -y'
    },
    quiz: [
      { question: 'What does `apt update` actually do?', options: ['Updates your installed software', 'Refreshes the local database of available software from the internet', 'Reboots the server', 'Upgrades the Linux kernel'], answer: 'Refreshes the local database of available software from the internet' },
      { question: 'Which command actually installs the new versions of your software?', options: ['apt update', 'apt upgrade', 'apt install', 'apt fresh'], answer: 'apt upgrade' },
      { question: 'What does the `&&` operator do in `apt update && apt upgrade`?', options: ['Runs both at the exact same time', 'Runs the second command only if the first succeeds', 'Adds the outputs together', 'Fails the command'], answer: 'Runs the second command only if the first succeeds' },
      { question: 'What does the `-y` flag do when upgrading?', options: ['Yellow output', 'Automatically answers Yes to the "Do you want to continue?" prompt', 'Yields process', 'Checks yesterday\'s updates'], answer: 'Automatically answers Yes to the "Do you want to continue?" prompt' },
      { question: 'How often should you update an internet-facing Linux server?', options: ['Never', 'Once a year', 'Regularly (weekly/monthly) to patch security flaws', 'Every minute'], answer: 'Regularly (weekly/monthly) to patch security flaws' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `apt upgrade` and `apt full-upgrade`?', a: 'Standard `upgrade` will only upgrade existing packages and will NOT remove any currently installed packages. `full-upgrade` might actually remove some installed packages if that is necessary to resolve complex dependency changes when upgrading the system.' }
    ],
    summary: ['Two step process.', '`update` refreshes the list.', '`upgrade` installs the software.'],
    references: commonReferences
  },

  'linux_remove_packages': {
    isStructured: true,
    title: '62. Removing Packages',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Removing packages deletes software from your Linux system. There are different commands depending on whether you want to keep or delete the configuration files associated with the software.',
    whyUseIt: 'To free up disk space and reduce the attack surface of your server by removing software you no longer need.',
    syntax: 'sudo apt [remove|purge|autoremove] [package]',
    codeExample: '# Remove the software, but KEEP its configuration files\nsudo apt remove nginx\n\n# Remove the software AND DELETE all its configuration files\nsudo apt purge nginx\n\n# Clean up unused dependencies that were left behind\nsudo apt autoremove',
    hasLiveOutput: false,
    expectedOutput: 'Uninstalls the software.',
    explanation: [
      { code: 'remove', desc: 'Safe delete. Leaves configs intact in case you reinstall later.' },
      { code: 'purge', desc: 'Total wipe. Deletes the software and all its customized settings in `/etc/`.' },
      { code: 'autoremove', desc: 'Deletes orphan packages (dependencies that were automatically installed for an app you have since deleted).' }
    ],
    realWorldExample: 'You installed MySQL but messed up the configuration file so badly it won\'t start. You run `sudo apt purge mysql-server` to wipe it completely, then reinstall it fresh.',
    commonMistakes: [
      { error: 'Using remove instead of purge', code: '', suffix: 'If you use `remove` and then reinstall the app, it will load the exact same broken config file you were trying to escape from. Use `purge` to start fresh.' }
    ],
    bestPractices: ['Run `sudo apt autoremove` every few months to clean up megabytes of useless orphaned libraries.'],
    practiceExercise: {
      task: 'Completely wipe the `apache2` package and all its configuration files from the system.',
      expectedOutput: 'Query OK',
      solution: 'sudo apt purge apache2'
    },
    quiz: [
      { question: 'What does `apt remove` do?', options: ['Hides the software', 'Uninstalls the software but keeps the configuration files', 'Uninstalls everything completely', 'Moves the software'], answer: 'Uninstalls the software but keeps the configuration files' },
      { question: 'What does `apt purge` do?', options: ['Cleans the screen', 'Uninstalls the software AND deletes all configuration files', 'Deletes all user data', 'Formats the drive'], answer: 'Uninstalls the software AND deletes all configuration files' },
      { question: 'If you want to reinstall an app with a totally fresh, default configuration, which command should you use first?', options: ['remove', 'purge', 'autoremove', 'delete'], answer: 'purge' },
      { question: 'What does `apt autoremove` do?', options: ['Automatically removes random software', 'Removes orphaned dependency libraries that are no longer needed by any installed app', 'Removes viruses', 'Removes old logs'], answer: 'Removes orphaned dependency libraries that are no longer needed by any installed app' },
      { question: 'Are user files in `/home` deleted when you use `apt purge`?', options: ['Yes', 'No, package managers only touch system files, never user personal data', 'Only as root', 'Only for images'], answer: 'No, package managers only touch system files, never user personal data' }
    ],
    interviewQuestions: [
      { q: 'What does the `apt clean` command do?', a: 'When apt downloads packages to install them, it keeps the `.deb` files cached in `/var/cache/apt/archives/`. `apt clean` deletes all these cached installation files to free up disk space.' }
    ],
    summary: ['`remove` keeps configs.', '`purge` wipes everything.', '`autoremove` cleans orphans.'],
    references: commonReferences
  },

  'linux_ps': {
    isStructured: true,
    title: '63. ps',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`ps` stands for "Process Status". It displays a snapshot of the currently running processes (programs) on the system.',
    whyUseIt: 'To check if a specific program (like a web server or database) is currently running, or to find a program\'s Process ID (PID) so you can kill it.',
    syntax: 'ps [options]',
    codeExample: '# Show processes for the current terminal\nps\n\n# Show ALL processes running on the system (BSD syntax)\nps aux\n\n# Show ALL processes and format as a tree (System V syntax)\nps -ef',
    hasLiveOutput: false,
    expectedOutput: 'USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.1 168076 11728 ?        Ss   Aug01   0:05 /sbin/init',
    explanation: [
      { code: 'PID', desc: 'Process ID. A unique number assigned to every running program.' },
      { code: 'aux', desc: 'a = all users, u = show user/owner info, x = include processes not attached to a terminal (like background servers).' }
    ],
    realWorldExample: 'A Node.js server crashed, but the port is still locked. You run `ps aux | grep node` to find the stuck process and its PID.',
    commonMistakes: [
      { error: 'Thinking ps is real-time', code: '', suffix: '`ps` is just a snapshot. It shows what was running at the exact millisecond you pressed Enter. If you want real-time updates, you must use `top` or `htop`.' }
    ],
    bestPractices: ['Memorize `ps aux | grep [name]`. It is the most common way to find a running program in Linux.'],
    practiceExercise: {
      task: 'List all running processes and filter for the word "nginx".',
      expectedOutput: 'List of Nginx processes.',
      solution: 'ps aux | grep nginx'
    },
    quiz: [
      { question: 'What does `ps` do?', options: ['Plays sound', 'Shows a snapshot of running processes', 'Post Script', 'Pauses system'], answer: 'Shows a snapshot of running processes' },
      { question: 'What is a PID?', options: ['Private ID', 'Process ID (a unique number for a running program)', 'Public ID', 'Program Interface Data'], answer: 'Process ID (a unique number for a running program)' },
      { question: 'What does the standard command `ps aux` do?', options: ['Shows only your processes', 'Shows every process running on the system with detailed user information', 'Kills all processes', 'Sorts processes by CPU'], answer: 'Shows every process running on the system with detailed user information' },
      { question: 'Does `ps` update in real-time on your screen?', options: ['Yes', 'No, it is a one-time snapshot', 'Only if you add -live', 'Only on Ubuntu'], answer: 'No, it is a one-time snapshot' },
      { question: 'How do you commonly find a specific process, like Python, using `ps`?', options: ['ps find python', 'ps python', 'ps aux | grep python', 'ps -python'], answer: 'ps aux | grep python' }
    ],
    interviewQuestions: [
      { q: 'In the output of `ps aux`, you see a process with a STAT of `Z`. What does this mean?', a: '`Z` stands for Zombie. A zombie process is a process that has completed execution but still has an entry in the process table. It happens when a child process finishes, but its parent process hasn\'t read its exit status yet.' }
    ],
    summary: ['Shows running processes.', '`ps aux` shows everything.', 'Outputs PID numbers.'],
    references: commonReferences
  },

  'linux_top': {
    isStructured: true,
    title: '64. top',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`top` is a task manager program that provides a dynamic, real-time view of a running system. It displays CPU, RAM, and process information.',
    whyUseIt: 'When your server is suddenly very slow, you run `top` to immediately see which program is eating up 100% of your CPU or RAM.',
    syntax: 'top',
    codeExample: 'top',
    hasLiveOutput: false,
    expectedOutput: 'A constantly updating screen showing system load, memory usage, and a list of processes sorted by CPU usage.',
    explanation: [
      { code: 'load average', desc: 'Shows system load over the last 1, 5, and 15 minutes. 1.0 means 1 CPU core is 100% utilized.' },
      { code: '%CPU', desc: 'Percentage of the CPU the task is currently using.' }
    ],
    realWorldExample: 'A website goes down due to heavy traffic. The sysadmin SSHes in, runs `top`, and sees that MySQL is using 99% CPU.',
    commonMistakes: [
      { error: 'Not knowing how to exit', code: '', suffix: 'Just like `less`, `top` takes over your screen. You must press `q` to quit.' }
    ],
    bestPractices: ['While running `top`, press `M` (capital M) to instantly sort the processes by Memory usage instead of CPU usage.'],
    practiceExercise: {
      task: 'How do you exit the `top` command?',
      expectedOutput: 'Return to prompt.',
      solution: 'Press q'
    },
    quiz: [
      { question: 'How is `top` different from `ps`?', options: ['It is slower', 'It updates in real-time, while ps is a static snapshot', 'It only works for root', 'It shows network traffic'], answer: 'It updates in real-time, while ps is a static snapshot' },
      { question: 'By default, what does `top` sort the running processes by?', options: ['Memory Usage', 'Alphabetically', 'CPU Usage (highest first)', 'Process ID (PID)'], answer: 'CPU Usage (highest first)' },
      { question: 'What does "load average: 2.00, 1.50, 1.00" mean on a single-core system?', options: ['The system is idle', 'The system is overloaded (200% capacity in the last minute)', 'The network is down', 'The RAM is full'], answer: 'The system is overloaded (200% capacity in the last minute)' },
      { question: 'How do you quit the `top` interface?', options: ['Ctrl + C', 'Esc', 'q', 'Alt + F4'], answer: 'q' },
      { question: 'Which keyboard shortcut inside `top` sorts the list by Memory usage?', options: ['Shift + M', 'Shift + C', 'Enter', 'Space'], answer: 'Shift + M' }
    ],
    interviewQuestions: [
      { q: 'In `top`, what do the CPU states `us`, `sy`, and `id` mean?', a: '`us` is User CPU time (time spent running user applications). `sy` is System CPU time (time spent running kernel tasks). `id` is Idle time (CPU doing nothing).' }
    ],
    summary: ['Real-time task manager.', 'Shows CPU and RAM usage.', 'Press `q` to quit.'],
    references: commonReferences
  },

  'linux_htop': {
    isStructured: true,
    title: '65. htop',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`htop` is an interactive, visually appealing, modern alternative to `top`.',
    whyUseIt: 'It provides a much easier-to-read, color-coded interface with graphical bars for CPU/RAM. It also lets you scroll with your mouse and kill processes easily.',
    syntax: 'htop',
    codeExample: 'htop',
    hasLiveOutput: false,
    expectedOutput: 'A colorful, interactive task manager.',
    explanation: [
      { code: 'F3', desc: 'Search for a specific process by name.' },
      { code: 'F9', desc: 'Kill the currently highlighted process.' }
    ],
    realWorldExample: 'A developer prefers `htop` over `top` because they can visually see all 8 CPU cores as separate bar graphs at the top of the screen.',
    commonMistakes: [
      { error: 'Assuming it is installed by default', code: '', suffix: 'Unlike `top`, `htop` is usually NOT installed on a fresh server. You have to install it first (`sudo apt install htop`).' }
    ],
    bestPractices: ['Install `htop` on every server you manage. It makes troubleshooting significantly easier.'],
    practiceExercise: {
      task: 'Install and run htop.',
      expectedOutput: 'Interactive dashboard.',
      solution: 'sudo apt install htop && htop'
    },
    quiz: [
      { question: 'What is `htop`?', options: ['A web server', 'A modern, colorful, interactive alternative to top', 'A compiler', 'A database'], answer: 'A modern, colorful, interactive alternative to top' },
      { question: 'Is `htop` installed by default on Ubuntu?', options: ['Yes', 'No, you must apt install it', 'Only on desktop', 'Only for root'], answer: 'No, you must apt install it' },
      { question: 'Can you use your mouse in `htop`?', options: ['Yes, it supports mouse clicking and scrolling', 'No, strictly keyboard', 'Only in Windows', 'Only if configured'], answer: 'Yes, it supports mouse clicking and scrolling' },
      { question: 'Which F-key is used to quickly kill a process in `htop`?', options: ['F1', 'F2', 'F5', 'F9'], answer: 'F9' },
      { question: 'How is CPU usage displayed in `htop`?', options: ['As a single number', 'As individual color-coded bar graphs for each CPU core', 'It is not displayed', 'As text only'], answer: 'As individual color-coded bar graphs for each CPU core' }
    ],
    interviewQuestions: [
      { q: 'In `htop` memory bars, what does the yellow/orange color typically represent?', a: 'Memory bars in htop are color-coded: Green is used memory, Blue is buffers, and Yellow/Orange is cache (memory used by the system to cache disk reads to speed up the OS, which can be freed immediately if apps need it).' }
    ],
    summary: ['Modern replacement for `top`.', 'Must be installed.', 'Supports mouse and F-keys.'],
    references: commonReferences
  },

  'linux_kill': {
    isStructured: true,
    title: '66. kill',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'The `kill` command is used to send a signal to a process. Despite its aggressive name, it is primarily used to request a process to terminate gracefully.',
    whyUseIt: 'When a program freezes or gets stuck in an infinite loop, you use `kill` to shut it down.',
    syntax: 'kill [signal] PID',
    codeExample: '# Gracefully ask process 1234 to shut down (SIGTERM)\nkill 1234\n\n# Forcefully murder process 1234 immediately (SIGKILL)\nkill -9 1234',
    hasLiveOutput: false,
    expectedOutput: 'Process terminates.',
    explanation: [
      { code: 'PID', desc: 'You MUST know the Process ID (from `ps` or `top`) to use this command.' },
      { code: '-9', desc: 'Signal 9 (SIGKILL). This tells the Linux kernel to destroy the process immediately without letting the process save data or clean up.' }
    ],
    realWorldExample: 'A Python script gets stuck in a `while(True)` loop. You run `ps aux | grep python` to find it has PID 5678, then run `kill 5678`.',
    commonMistakes: [
      { error: 'Using kill -9 immediately', code: '', suffix: 'Always try a normal `kill` first (which sends signal 15). This allows the program to save data and close database connections cleanly. Only use `kill -9` if the program completely refuses to die.' }
    ],
    bestPractices: ['Never `kill -9` a database process (like MySQL). It can corrupt your data.'],
    practiceExercise: {
      task: 'Forcefully kill a process with PID 4040.',
      expectedOutput: 'Process ends instantly.',
      solution: 'kill -9 4040'
    },
    quiz: [
      { question: 'What does the `kill` command do?', options: ['Deletes files', 'Sends a signal (usually a terminate signal) to a running process', 'Shuts down the server', 'Formats the drive'], answer: 'Sends a signal (usually a terminate signal) to a running process' },
      { question: 'What piece of information MUST you provide to the `kill` command?', options: ['The program name', 'The Process ID (PID)', 'The user name', 'The file path'], answer: 'The Process ID (PID)' },
      { question: 'What does `kill -9` do?', options: ['Kills 9 processes', 'Sends a SIGKILL, forcefully terminating the process immediately without allowing it to clean up', 'Pauses the process', 'Restarts the process'], answer: 'Sends a SIGKILL, forcefully terminating the process immediately without allowing it to clean up' },
      { question: 'Why is `kill -9` dangerous for databases?', options: ['It uninstalls them', 'It stops them instantly before they can save data to disk, causing data corruption', 'It changes the password', 'It opens security holes'], answer: 'It stops them instantly before they can save data to disk, causing data corruption' },
      { question: 'What signal does `kill` send by default if you don\'t specify one?', options: ['SIGKILL (9)', 'SIGTERM (15)', 'SIGINT (2)', 'SIGHUP (1)'], answer: 'SIGTERM (15)' }
    ],
    interviewQuestions: [
      { q: 'What is SIGHUP (Signal 1) and how is it used?', a: 'SIGHUP originally meant "Hang Up" (from when modems disconnected). Today, many daemon processes (like Nginx) use a SIGHUP signal (`kill -1 PID` or `kill -HUP PID`) as a trigger to reload their configuration files without completely stopping the server.' }
    ],
    summary: ['Terminates processes.', 'Requires a PID.', 'Use `-9` only as a last resort.'],
    references: commonReferences
  },

  'linux_killall': {
    isStructured: true,
    title: '67. killall',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`killall` kills all processes that share a specific name, rather than requiring you to find their individual PIDs.',
    whyUseIt: 'If you have 15 different Google Chrome processes running and it freezes, looking up 15 PIDs is annoying. `killall chrome` terminates them all at once.',
    syntax: 'killall [program_name]',
    codeExample: '# Kill all instances of node.js\nkillall node\n\n# Force kill all instances\nkillall -9 node',
    hasLiveOutput: false,
    expectedOutput: 'All matching processes terminate.',
    explanation: [
      { code: 'killall', desc: 'Takes a string name instead of a number.' }
    ],
    realWorldExample: 'A web server spawns 10 worker processes that are all stuck. `killall nginx` shuts them all down cleanly in one command.',
    commonMistakes: [
      { error: 'Careless usage', code: '', suffix: '`killall python` will kill EVERY python script running on the server, not just yours. If the system is running a critical Python background task, you just broke the system.' }
    ],
    bestPractices: ['Use `killall` on your personal desktop. On shared servers, take the time to find the specific PID and use `kill`.'],
    practiceExercise: {
      task: 'Kill every process named `firefox`.',
      expectedOutput: 'Firefox closes.',
      solution: 'killall firefox'
    },
    quiz: [
      { question: 'How is `killall` different from `kill`?', options: ['It kills the server', 'It accepts a program name instead of a PID, and kills all instances of it', 'It only works as root', 'It deletes files'], answer: 'It accepts a program name instead of a PID, and kills all instances of it' },
      { question: 'What happens if you run `killall python`?', options: ['It kills a snake', 'It terminates EVERY process named "python" running on the machine', 'It uninstalls Python', 'It pauses Python'], answer: 'It terminates EVERY process named "python" running on the machine' },
      { question: 'Can you use the `-9` force flag with `killall`?', options: ['Yes', 'No', 'Only on Ubuntu', 'Only for system apps'], answer: 'Yes' },
      { question: 'Why might `killall` be dangerous on a shared enterprise server?', options: ['It formats the disk', 'You might accidentally kill another user\'s program if it shares the same name', 'It requires rebooting', 'It sends an email'], answer: 'You might accidentally kill another user\'s program if it shares the same name' },
      { question: 'If you want to kill only a specific instance of a program, which command is safer?', options: ['killall', 'kill', 'halt', 'shutdown'], answer: 'kill' }
    ],
    interviewQuestions: [
      { q: 'Is the behavior of `killall` the same on Linux as it is on Solaris/System V Unix?', a: 'NO! On standard Linux, `killall` kills processes by name. On older Unix systems (like Solaris), `killall` literally kills ALL processes on the machine, effectively halting the server. Unix admins moving to Linux are often terrified of this command.' }
    ],
    summary: ['Kills by name, not PID.', 'Kills ALL instances.', 'Use with caution on servers.'],
    references: commonReferences
  },

  'linux_jobs': {
    isStructured: true,
    title: '68. jobs',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The `jobs` command lists all processes that you have suspended or are currently running in the background of your current terminal session.',
    whyUseIt: 'Linux terminals support multitasking. You can pause a running command, do something else, and use `jobs` to see your paused tasks.',
    syntax: 'jobs',
    codeExample: '# Start a long process\nsleep 100\n# Press Ctrl+Z to pause it (Terminal says: [1]+  Stopped)\n\n# See paused jobs\njobs\n# Output: [1]+  Stopped                 sleep 100',
    hasLiveOutput: false,
    expectedOutput: 'List of background jobs with their job ID.',
    explanation: [
      { code: 'Ctrl+Z', desc: 'This keyboard shortcut pauses (suspends) the current running foreground task and gives you your terminal prompt back.' }
    ],
    realWorldExample: 'You are editing a file in `nano`, but realize you need to check an IP address. You press `Ctrl+Z` to pause nano, type `ip a`, and then use `jobs` to find nano so you can resume editing.',
    commonMistakes: [
      { error: 'Confusing jobs with ps', code: '', suffix: '`ps` shows all processes managed by the OS. `jobs` only shows processes attached specifically to your current terminal window.' }
    ],
    bestPractices: ['Remember that closing the terminal window will terminate all jobs attached to it.'],
    practiceExercise: {
      task: 'List the jobs currently suspended in your terminal.',
      expectedOutput: 'List of jobs.',
      solution: 'jobs'
    },
    quiz: [
      { question: 'What does the `jobs` command do?', options: ['Shows available careers', 'Lists background and suspended tasks in the current terminal', 'Lists all OS processes', 'Creates a cron job'], answer: 'Lists background and suspended tasks in the current terminal' },
      { question: 'Which keyboard shortcut suspends (pauses) a running command and sends it to the background?', options: ['Ctrl + C', 'Ctrl + Z', 'Ctrl + X', 'Esc'], answer: 'Ctrl + Z' },
      { question: 'What is the difference between Ctrl+C and Ctrl+Z?', options: ['No difference', 'Ctrl+C kills the program permanently; Ctrl+Z just pauses it in the background', 'Ctrl+C copies, Ctrl+Z un-does', 'Ctrl+Z kills the program'], answer: 'Ctrl+C kills the program permanently; Ctrl+Z just pauses it in the background' },
      { question: 'If you close your terminal window, what happens to your background jobs?', options: ['They keep running forever', 'They are usually terminated', 'They are saved to disk', 'They move to a new window'], answer: 'They are usually terminated' },
      { question: 'How are jobs identified in the `jobs` output?', options: ['By a PID (e.g., 1024)', 'By a small Job ID number in brackets (e.g., [1])', 'By name only', 'By user'], answer: 'By a small Job ID number in brackets (e.g., [1])' }
    ],
    interviewQuestions: [
      { q: 'How would you start a long-running script so that it immediately goes into the background as a job, without tying up your terminal?', a: 'Append an ampersand (`&`) to the end of the command. For example: `./long_script.sh &`. It will start running immediately in the background, yielding the prompt back to you.' }
    ],
    summary: ['Lists background tasks.', '`Ctrl+Z` pauses tasks.', 'Specific to your terminal window.'],
    references: commonReferences
  },

  'linux_bg': {
    isStructured: true,
    title: '69. bg',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: '`bg` stands for Background. It resumes a suspended job, allowing it to continue running in the background.',
    whyUseIt: 'You started downloading a massive file, realized it will take an hour, so you pause it with `Ctrl+Z`, and use `bg` so it finishes downloading while you do other things.',
    syntax: 'bg %[job_id]',
    codeExample: '# Assume job [1] is stopped\nbg %1',
    hasLiveOutput: false,
    expectedOutput: 'The job resumes running, but your terminal prompt remains available.',
    explanation: [
      { code: '%1', desc: 'Refers to Job ID 1 (found using the `jobs` command).' }
    ],
    realWorldExample: 'You start a database backup. It is taking too long. You press `Ctrl+Z`, then type `bg`. The backup continues running invisibly while you check server logs.',
    commonMistakes: [
      { error: 'Backgrounding interactive apps', code: '', suffix: 'If you use `bg` on a text editor like `nano`, it will immediately suspend again because an editor requires active keyboard input and cannot run in the background.' }
    ],
    bestPractices: ['Combine with the `&` operator when launching commands if you know you want them in the background immediately (`ping google.com &`).'],
    practiceExercise: {
      task: 'Resume suspended job number 2 in the background.',
      expectedOutput: 'Job resumes.',
      solution: 'bg %2'
    },
    quiz: [
      { question: 'What does `bg` do?', options: ['Changes terminal background', 'Resumes a suspended job and lets it run in the background', 'Kills a job', 'Brings a job to the foreground'], answer: 'Resumes a suspended job and lets it run in the background' },
      { question: 'What symbol is used to reference a specific job ID?', options: ['$', '#', '%', '@'], answer: '%' },
      { question: 'Can you continue using your terminal while a `bg` job is running?', options: ['Yes, the prompt is freed up', 'No, the terminal is locked', 'Only as root', 'Only if the job is text'], answer: 'Yes, the prompt is freed up' },
      { question: 'What happens if a background job tries to print text to the screen?', options: ['It crashes', 'The text will randomly print over whatever you are currently typing', 'It is silenced', 'It goes to a log file'], answer: 'The text will randomly print over whatever you are currently typing' },
      { question: 'What command shows you the job ID you need to pass to `bg`?', options: ['ps', 'jobs', 'list', 'top'], answer: 'jobs' }
    ],
    interviewQuestions: [
      { q: 'If a background job is printing annoying text over your prompt, how can you stop it?', a: 'You bring it back to the foreground using `fg`, and then either kill it with `Ctrl+C` or redirect its output properly.' }
    ],
    summary: ['Resumes tasks in the background.', 'Frees up your terminal.', 'Use `%id` syntax.'],
    references: commonReferences
  },

  'linux_fg': {
    isStructured: true,
    title: '70. fg',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: '`fg` stands for Foreground. It brings a background or suspended job back to the foreground, taking control of your terminal again.',
    whyUseIt: 'You suspended `nano` with `Ctrl+Z` to check something. Now you want to go back to editing the file.',
    syntax: 'fg %[job_id]',
    codeExample: '# Resume job 1 in the foreground\nfg %1',
    hasLiveOutput: false,
    expectedOutput: 'The program takes over your screen/terminal again.',
    explanation: [
      { code: 'fg', desc: 'Without arguments, it brings the most recently suspended job to the foreground.' }
    ],
    realWorldExample: 'A sysadmin pauses a `top` monitoring session to run a quick command, then types `fg` to bring the `top` dashboard back to the screen.',
    commonMistakes: [
      { error: 'Forgetting what is running', code: '', suffix: 'If you have a background job printing text and you don\'t know how to stop it, typing `fg` will bring it forward so you can press `Ctrl+C`.' }
    ],
    bestPractices: ['`Ctrl+Z`, do a quick task, `fg`. This is the standard workflow for power users who don\'t want to open multiple terminal tabs.'],
    practiceExercise: {
      task: 'Bring the most recently suspended job back to the foreground.',
      expectedOutput: 'Program resumes control.',
      solution: 'fg'
    },
    quiz: [
      { question: 'What does `fg` do?', options: ['Finds groups', 'Brings a background/suspended job to the foreground', 'Forces a quit', 'Formats graphics'], answer: 'Brings a background/suspended job to the foreground' },
      { question: 'What happens to your terminal prompt when you run `fg`?', options: ['Nothing', 'It disappears because the program takes control of the terminal again', 'It changes color', 'It duplicates'], answer: 'It disappears because the program takes control of the terminal again' },
      { question: 'If you type `fg` with no arguments, which job is brought forward?', options: ['Job 1', 'The most recently suspended job', 'All jobs', 'It errors'], answer: 'The most recently suspended job' },
      { question: 'What is the full lifecycle of pausing and resuming a text editor?', options: ['Esc -> wait -> Enter', 'Ctrl+C -> wait -> start', 'Ctrl+Z to pause -> do work -> fg to resume', 'Alt+Tab'], answer: 'Ctrl+Z to pause -> do work -> fg to resume' },
      { question: 'If you want to permanently kill a job that is in the background, what is the easiest way?', options: ['Unplug the computer', 'Run `fg` to bring it forward, then press `Ctrl+C`', 'Delete the file', 'Log out'], answer: 'Run `fg` to bring it forward, then press `Ctrl+C`' }
    ],
    interviewQuestions: [
      { q: 'Can you use the `kill` command directly on a job ID without bringing it to the foreground?', a: 'Yes. You can run `kill %1` to terminate job #1 while it is still in the background, without needing to look up its PID.' }
    ],
    summary: ['Brings tasks to foreground.', 'Takes over the terminal.', 'Used to resume editors.'],
    references: commonReferences
  },

  'linux_nohup': {
    isStructured: true,
    title: '71. nohup',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: '`nohup` stands for "No Hangup". It allows a command to keep running in the background even if you close your terminal or your SSH connection drops.',
    whyUseIt: 'You need to run a database backup that takes 6 hours. If you just use `&`, the process will die the moment you close your laptop or lose Wi-Fi. `nohup` prevents this.',
    syntax: 'nohup command &',
    codeExample: '# Run a script that takes hours, detach it from the terminal\nnohup ./long_script.sh &',
    hasLiveOutput: false,
    expectedOutput: 'nohup: ignoring input and appending output to \'nohup.out\'',
    explanation: [
      { code: 'nohup', desc: 'Intercepts the SIGHUP (hangup) signal sent by the terminal when it closes, protecting the program from dying.' },
      { code: 'nohup.out', desc: 'Because the terminal might close, `nohup` automatically saves all `echo` or print statements from the program into a file called `nohup.out`.' }
    ],
    realWorldExample: 'Starting a Python machine learning script on a remote AWS server that will take 3 days to calculate. You use `nohup`, close your laptop, and check back on Friday.',
    commonMistakes: [
      { error: 'Forgetting the ampersand (&)', code: '', suffix: 'If you run `nohup script.sh` without the `&`, it protects the process, but it DOES NOT put it in the background. Your terminal is stuck waiting for it.' }
    ],
    bestPractices: ['Modern alternatives like `tmux` or `screen` are generally preferred because they allow you to re-attach and visually see the terminal again, whereas `nohup` just runs it invisibly.'],
    practiceExercise: {
      task: 'Run `python3 server.py` so it survives if you close the terminal.',
      expectedOutput: 'Runs in background securely.',
      solution: 'nohup python3 server.py &'
    },
    quiz: [
      { question: 'What does `nohup` stand for?', options: ['No Hangup', 'No Hurry Up', 'Not Open Host', 'New Output'], answer: 'No Hangup' },
      { question: 'What is the primary purpose of `nohup`?', options: ['To speed up processing', 'To keep a command running even if the user logs out or the terminal closes', 'To elevate privileges', 'To compress files'], answer: 'To keep a command running even if the user logs out or the terminal closes' },
      { question: 'Where does `nohup` send the text output of the program by default?', options: ['To the printer', 'To /dev/null', 'To a file named nohup.out', 'To syslog'], answer: 'To a file named nohup.out' },
      { question: 'Why is the `&` symbol usually added to the end of a `nohup` command?', options: ['To make it run as root', 'To place the command in the background, freeing up the terminal', 'To save memory', 'Because it is required syntax'], answer: 'To place the command in the background, freeing up the terminal' },
      { question: 'What is a more modern, fully interactive alternative to `nohup`?', options: ['tmux (or screen)', 'sudo', 'bash', 'cron'], answer: 'tmux (or screen)' }
    ],
    interviewQuestions: [
      { q: 'How would you redirect the output of a nohup command to a specific log file instead of `nohup.out`, while also suppressing errors?', a: 'You redirect standard output (1) and standard error (2). `nohup ./script.sh > custom.log 2>&1 &`.' }
    ],
    summary: ['Protects processes from terminal closure.', 'Creates `nohup.out`.', 'Combine with `&`.'],
    references: commonReferences
  },

  'linux_df': {
    isStructured: true,
    title: '72. df',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`df` stands for "Disk Free". It reports the amount of available and used disk space on all mounted file systems.',
    whyUseIt: 'When a server crashes or a database stops accepting writes, the very first thing you check is if the hard drive is 100% full using `df`.',
    syntax: 'df [options]',
    codeExample: '# Show disk space in human-readable format (MB/GB)\ndf -h',
    hasLiveOutput: false,
    expectedOutput: 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        50G   40G  7.5G  85% /',
    explanation: [
      { code: '-h', desc: 'Human-readable. Converts raw byte counts into Gigabytes (G) or Megabytes (M).' },
      { code: 'Use%', desc: 'The most important column. If this says 100% on `/`, your system is likely broken.' }
    ],
    realWorldExample: 'An application is throwing "No space left on device" errors. The developer runs `df -h` and sees the `/var` partition is at 100%.',
    commonMistakes: [
      { error: 'Forgetting -h', code: '', suffix: 'Running just `df` outputs sizes in 1K blocks (e.g., 51240392). Unless you are a math genius, always use `df -h`.' }
    ],
    bestPractices: ['Set up monitoring alerts (like Prometheus/Datadog) to warn you when `df` reports over 90% usage, so you have time to fix it before a crash.'],
    practiceExercise: {
      task: 'Check your server\'s disk space in a human-readable format.',
      expectedOutput: 'List of drives in GB/MB.',
      solution: 'df -h'
    },
    quiz: [
      { question: 'What does `df` stand for?', options: ['Directory Format', 'Disk Free', 'Data Find', 'Delete File'], answer: 'Disk Free' },
      { question: 'What does `df` report?', options: ['CPU usage', 'RAM usage', 'Total and available hard drive space for mounted filesystems', 'Network speed'], answer: 'Total and available hard drive space for mounted filesystems' },
      { question: 'What does the `-h` flag do?', options: ['Hides drives', 'Shows output in Human-readable format (GB/MB instead of bytes)', 'Halts the system', 'Help'], answer: 'Shows output in Human-readable format (GB/MB instead of bytes)' },
      { question: 'Which column in the `df` output is usually the most important for troubleshooting?', options: ['Filesystem', 'Use%', 'Mounted on', 'Size'], answer: 'Use%' },
      { question: 'If `df -h` shows `/dev/sda1` is mounted on `/`, what does that mean?', options: ['It is a USB drive', 'It is the main root partition of the operating system', 'It is a network drive', 'It is broken'], answer: 'It is the main root partition of the operating system' }
    ],
    interviewQuestions: [
      { q: '`df` shows the disk is 100% full, but `du` (disk usage) shows the files only add up to 50% of the disk. How is this possible?', a: 'This is a classic Linux issue. It happens when a massive file (like a log) is deleted via `rm`, but a running process (like a web server) still has the file actively open. The OS removes the file name, but the data block cannot be freed until the process is restarted.' }
    ],
    summary: ['Checks hard drive space.', 'Always use `-h`.', 'Crucial for troubleshooting.'],
    references: commonReferences
  },

  'linux_du': {
    isStructured: true,
    title: '73. du',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`du` stands for "Disk Usage". While `df` tells you the overall drive capacity, `du` calculates the size of specific directories and files.',
    whyUseIt: '`df` tells you the drive is 100% full. `du` helps you find EXACTLY which folder or file is eating up all that space.',
    syntax: 'du [options] [directory]',
    codeExample: '# Show the size of a specific folder\ndu -sh /var/log\n\n# List the size of all folders in the current directory, sorted by size\ndu -sh * | sort -h',
    hasLiveOutput: false,
    expectedOutput: '4.5G    /var/log',
    explanation: [
      { code: '-s', desc: 'Summary. Without this, `du` will print a line for every single file in the folder, flooding your screen. `-s` just gives the total size of the folder.' },
      { code: '-h', desc: 'Human-readable (GB/MB).' }
    ],
    realWorldExample: 'A sysadmin runs `du -sh /home/*` to see which user is hoarding 500GB of movies on the company server.',
    commonMistakes: [
      { error: 'Running du on root without sudo', code: '', suffix: 'If you run `du -sh /`, you will get hundreds of "Permission denied" errors for system folders, and the final calculation will be inaccurate. Use `sudo du`.' }
    ],
    bestPractices: ['Combine `du -sh *` with `sort -h` (human-readable sort) to easily generate a list of the largest folders.'],
    practiceExercise: {
      task: 'Find the total summary size of the `/etc` folder in human-readable format.',
      expectedOutput: 'A single size (e.g., 12M).',
      solution: 'sudo du -sh /etc'
    },
    quiz: [
      { question: 'What does `du` stand for?', options: ['Disk Usage', 'Data Unlock', 'Delete Users', 'Drive Unmount'], answer: 'Disk Usage' },
      { question: 'How is `du` different from `df`?', options: ['`df` shows overall partition space; `du` calculates the size of specific files/folders', 'There is no difference', '`df` is for RAM, `du` is for Disks', '`du` is faster'], answer: '`df` shows overall partition space; `du` calculates the size of specific files/folders' },
      { question: 'What does the `-s` flag do?', options: ['Silent mode', 'Summary (provides a total for the folder instead of listing every file inside it)', 'System files only', 'Sorts output'], answer: 'Summary (provides a total for the folder instead of listing every file inside it)' },
      { question: 'What does `du -sh *` do?', options: ['Deletes everything', 'Shows the summary size of all items in the current directory in GB/MB', 'Shows hidden files', 'Searches for files'], answer: 'Shows the summary size of all items in the current directory in GB/MB' },
      { question: 'Why might `du` take a long time to run on the `/` directory?', options: ['It is downloading data', 'It has to physically read the metadata of millions of files to calculate the total size', 'It pauses the CPU', 'It waits for network'], answer: 'It has to physically read the metadata of millions of files to calculate the total size' }
    ],
    interviewQuestions: [
      { q: 'How would you find the top 5 largest directories within `/var`?', a: '`sudo du -h /var | sort -rh | head -n 5`. This calculates all folder sizes, sorts them in reverse human-readable order, and grabs the top 5.' }
    ],
    summary: ['Calculates folder sizes.', 'Use `-sh` for a human-readable summary.', 'Helps find space hogs.'],
    references: commonReferences
  },

  'linux_mount': {
    isStructured: true,
    title: '74. mount',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: '`mount` attaches a storage device (like a USB drive, a secondary hard drive, or a network share) to a specific directory (the mount point) in the Linux file system tree.',
    whyUseIt: 'Unlike Windows, Linux does not automatically assign "D:" or "E:" letters when you plug in a drive. You must explicitly `mount` the hardware to a folder to access its files.',
    syntax: 'sudo mount [device] [directory]',
    codeExample: '# Mount a USB drive (identified as /dev/sdb1) to a folder\nsudo mount /dev/sdb1 /mnt/usb',
    hasLiveOutput: false,
    expectedOutput: 'No output if successful. The files are now accessible at /mnt/usb.',
    explanation: [
      { code: '/dev/sdb1', desc: 'The hardware device file representing the physical partition.' },
      { code: '/mnt/usb', desc: 'An empty folder on your main drive that will act as the "doorway" to the USB drive.' }
    ],
    realWorldExample: 'A cloud engineer adds a new 1TB block storage volume to an AWS EC2 instance. They must format it, then use `mount /dev/xvdf /data` so the database can save files to it.',
    commonMistakes: [
      { error: 'Mounting over a folder with data', code: '', suffix: 'If `/mnt/usb` already contains files, and you mount a drive to it, the old files become hidden and inaccessible until the drive is unmounted. Always mount to an EMPTY directory.' }
    ],
    bestPractices: ['Manual `mount` commands do not survive a reboot. To make a mount permanent, you must add it to the `/etc/fstab` file.'],
    practiceExercise: {
      task: 'Mount a theoretical drive `/dev/sdc1` to the folder `/backup`.',
      expectedOutput: 'Query OK',
      solution: 'sudo mount /dev/sdc1 /backup'
    },
    quiz: [
      { question: 'What does the `mount` command do?', options: ['Ejects a CD', 'Attaches a physical storage device to a directory in the Linux file system', 'Formats a hard drive', 'Installs software'], answer: 'Attaches a physical storage device to a directory in the Linux file system' },
      { question: 'Does Linux use drive letters (like D: or E:)?', options: ['Yes', 'No, all drives are mounted as folders within the single `/` root tree', 'Only on Ubuntu', 'Only for USBs'], answer: 'No, all drives are mounted as folders within the single `/` root tree' },
      { question: 'What is a "Mount Point"?', options: ['A screw holding the hard drive', 'An empty directory where the contents of the drive will appear', 'A network switch', 'A USB port'], answer: 'An empty directory where the contents of the drive will appear' },
      { question: 'What happens if you reboot the server after running a `mount` command?', options: ['The mount remains', 'The mount is lost (unless added to /etc/fstab)', 'The drive is erased', 'The server crashes'], answer: 'The mount is lost (unless added to /etc/fstab)' },
      { question: 'Does `mount` require root/sudo?', options: ['Yes', 'No', 'Sometimes', 'Only for CDs'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'What is a "bind mount"?', a: 'A bind mount (`mount --bind /dir1 /dir2`) allows you to mount an existing directory to another location in the file system, effectively creating an alias where the same files are accessible from two different paths without copying data.' }
    ],
    summary: ['Attaches drives to folders.', 'Requires empty mount point.', 'Not permanent without `/etc/fstab`.'],
    references: commonReferences
  },

  'linux_umount': {
    isStructured: true,
    title: '75. umount',
    difficulty: 'Advanced',
    readingTime: '3 min',
    definition: '`umount` (Unmount) detaches a mounted file system, safely flushing pending data to the disk so the device can be removed.',
    whyUseIt: 'If you unplug a USB drive without unmounting it, data that was waiting in the RAM cache to be written will be lost, corrupting the drive.',
    syntax: 'sudo umount [device OR directory]',
    codeExample: '# Unmount by specifying the directory (mount point)\nsudo umount /mnt/usb\n\n# Or unmount by specifying the device\nsudo umount /dev/sdb1',
    hasLiveOutput: false,
    expectedOutput: 'No output. The drive is safely detached.',
    explanation: [
      { code: 'umount', desc: 'Notice it is spelled "umount" with no "n" after the u. (u-mount).' }
    ],
    realWorldExample: 'A sysadmin finishes copying backups to an external drive. They run `sudo umount /backup` before physically unplugging the drive from the server.',
    commonMistakes: [
      { error: 'Target is busy', code: '', suffix: 'If you are currently `cd`\'d inside `/mnt/usb`, and you try to `umount /mnt/usb`, it will fail with "target is busy". You must `cd ~` to step out of the directory before you can unmount it.' }
    ],
    bestPractices: ['If a device is stubbornly busy, you can use the `lsof +D /mnt/usb` command to see exactly which program is holding the drive open.'],
    practiceExercise: {
      task: 'Safely detach the drive mounted at `/data`.',
      expectedOutput: 'Query OK',
      solution: 'sudo umount /data'
    },
    quiz: [
      { question: 'What does `umount` do?', options: ['Mounts a drive', 'Safely detaches a mounted drive', 'Formats a drive', 'Deletes a folder'], answer: 'Safely detaches a mounted drive' },
      { question: 'How is the command spelled?', options: ['unmount', 'umount', 'dismount', 'eject'], answer: 'umount' },
      { question: 'Why is it important to unmount a USB drive before unplugging it?', options: ['To save electricity', 'To ensure cached data in RAM is actually written to the disk, preventing corruption', 'To update the antivirus', 'It is not important'], answer: 'To ensure cached data in RAM is actually written to the disk, preventing corruption' },
      { question: 'What does the error "target is busy" mean?', options: ['The CPU is overloaded', 'A user or program is currently accessing a file on the drive (or your terminal is inside the folder)', 'The drive is broken', 'You lack sudo rights'], answer: 'A user or program is currently accessing a file on the drive (or your terminal is inside the folder)' },
      { question: 'Can you unmount a drive if your terminal is currently inside the mount directory?', options: ['Yes', 'No, you must `cd` out of it first', 'Only as root', 'Only with -f'], answer: 'No, you must `cd` out of it first' }
    ],
    interviewQuestions: [
      { q: 'If `umount` says the device is busy, what is a highly aggressive (and risky) way to force it to unmount?', a: 'You can use lazy unmounting: `umount -l /mnt`. This detaches the filesystem from the directory hierarchy immediately, and cleans up all references in the background once it is no longer busy. It is risky because data might still be writing in the background.' }
    ],
    summary: ['Detaches drives safely.', 'Spelled `umount`.', 'Fails if you are inside the folder.'],
    references: commonReferences
  }
};