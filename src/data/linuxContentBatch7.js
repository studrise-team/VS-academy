const commonReferences = [
  { label: 'Linux Documentation', url: 'https://linux.die.net/' },
  { label: 'Ubuntu Official Docs', url: 'https://help.ubuntu.com/' }
];

export const linuxContentBatch7 = {
  'linux_systemctl': {
    isStructured: true,
    title: '91. systemctl',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: '`systemctl` is the central command used to control the `systemd` system and service manager. It is how you start, stop, and manage background services (daemons) on modern Linux.',
    whyUseIt: 'When you install a web server (like Nginx) or a database (like MySQL), it runs in the background. You use `systemctl` to turn it on, turn it off, or make it start automatically when the server boots up.',
    syntax: 'sudo systemctl [action] [service_name]',
    codeExample: '# Start the web server immediately\nsudo systemctl start nginx\n\n# Stop the web server\nsudo systemctl stop nginx\n\n# Enable the web server to start automatically when the computer turns on\nsudo systemctl enable nginx\n\n# Check if it is running\nsystemctl status nginx',
    hasLiveOutput: false,
    expectedOutput: 'Action performs silently, except for `status` which prints detailed service info.',
    explanation: [
      { code: 'start/stop', desc: 'Affects the service RIGHT NOW.' },
      { code: 'enable/disable', desc: 'Affects the service ON THE NEXT REBOOT. (Enable creates a symlink so it boots on startup).' }
    ],
    realWorldExample: 'You install Redis. To ensure it comes back online if the server crashes and reboots in the middle of the night, you MUST run `sudo systemctl enable redis`.',
    commonMistakes: [
      { error: 'Confusing start and enable', code: '', suffix: 'If you run `systemctl start apache2`, the server comes online. But if the machine reboots, apache2 will NOT come back online unless you also ran `systemctl enable apache2`.' }
    ],
    bestPractices: ['Whenever you edit a configuration file for a service (e.g., changing a port in nginx.conf), you must run `sudo systemctl restart nginx` or `reload nginx` for the changes to take effect.'],
    practiceExercise: {
      task: 'Restart the `ssh` service.',
      expectedOutput: 'Service restarts.',
      solution: 'sudo systemctl restart ssh'
    },
    quiz: [
      { question: 'What is `systemctl` used for?', options: ['Controlling the system clock', 'Managing systemd background services (starting, stopping, enabling)', 'Checking network cables', 'Compiling code'], answer: 'Managing systemd background services (starting, stopping, enabling)' },
      { question: 'What does `systemctl start nginx` do?', options: ['Installs Nginx', 'Starts the Nginx service immediately', 'Sets Nginx to start on reboot', 'Stops Nginx'], answer: 'Starts the Nginx service immediately' },
      { question: 'What does `systemctl enable nginx` do?', options: ['Starts Nginx immediately', 'Configures Nginx to start automatically whenever the server boots up', 'Upgrades Nginx', 'Uninstalls Nginx'], answer: 'Configures Nginx to start automatically whenever the server boots up' },
      { question: 'If you change a configuration file for a running service, what must you do?', options: ['Nothing', 'systemctl restart [service] (or reload)', 'Reboot the whole server', 'Reinstall the service'], answer: 'systemctl restart [service] (or reload)' },
      { question: 'How do you check if a service is currently running or crashed?', options: ['systemctl status [service]', 'ps find [service]', 'systemctl check [service]', 'look [service]'], answer: 'systemctl status [service]' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `systemctl restart` and `systemctl reload`?', a: '`restart` completely shuts down the service process and starts a new one, briefly disrupting active connections. `reload` tells the running service to re-read its configuration files without killing active connections (if the service supports it).' }
    ],
    summary: ['Manages background services.', '`start`/`stop` for right now.', '`enable`/`disable` for bootup.'],
    references: commonReferences
  },

  'linux_journalctl': {
    isStructured: true,
    title: '92. journalctl',
    difficulty: 'Advanced',
    readingTime: '3 min',
    definition: '`journalctl` is used to query and read logs collected by `systemd`. It provides a centralized, searchable database of logs for the kernel and all system services.',
    whyUseIt: 'If `systemctl start nginx` fails, it usually just says "Job failed." You must use `journalctl` to actually see the detailed error message explaining WHY it failed.',
    syntax: 'journalctl [options]',
    codeExample: '# Show logs for a specific service (like Nginx)\njournalctl -u nginx\n\n# Follow new logs as they are written in real-time\njournalctl -f\n\n# Show only logs from today\njournalctl --since today',
    hasLiveOutput: false,
    expectedOutput: 'Pages of system log text.',
    explanation: [
      { code: '-u', desc: 'Unit. Filters logs to show only the specific service you name.' },
      { code: '-f', desc: 'Follow. Exactly like `tail -f`, it locks the screen and prints new logs as they happen.' }
    ],
    realWorldExample: 'A database crashes. The sysadmin runs `sudo journalctl -u mysql -e` (e for end) to jump straight to the bottom of the MySQL logs and see the exact out-of-memory error that killed it.',
    commonMistakes: [
      { error: 'Not using sudo', code: '', suffix: 'Standard users can run `journalctl`, but they will only see their own user logs. To see system logs or service logs, you MUST use `sudo journalctl`.' }
    ],
    bestPractices: ['Combine flags: `sudo journalctl -u nginx --since "1 hour ago" -f` is extremely powerful for troubleshooting live issues.'],
    practiceExercise: {
      task: 'Follow the logs of the `ssh` service in real-time.',
      expectedOutput: 'Live log tail.',
      solution: 'sudo journalctl -u ssh -f'
    },
    quiz: [
      { question: 'What does `journalctl` do?', options: ['Writes journal entries', 'Reads and queries the centralized systemd logs', 'Formats the drive', 'Controls background services'], answer: 'Reads and queries the centralized systemd logs' },
      { question: 'Which flag is used to filter logs for a specific Unit/Service (like nginx)?', options: ['-s', '-service', '-u (unit)', '-f'], answer: '-u (unit)' },
      { question: 'Which flag makes `journalctl` act like `tail -f`, updating the screen with new logs in real-time?', options: ['-live', '-tail', '-f (follow)', '-r'], answer: '-f (follow)' },
      { question: 'If `systemctl start apache2` fails, what is the best command to see why?', options: ['cat /var/log/syslog', 'dmesg', 'journalctl -u apache2', 'ps aux'], answer: 'journalctl -u apache2' },
      { question: 'Why might `journalctl -u ssh` show nothing, but `sudo journalctl -u ssh` shows hundreds of lines?', options: ['Because ssh is root only', 'Standard users do not have permission to view system-level service logs', 'Sudo decrypts the logs', 'Sudo restarts the logger'], answer: 'Standard users do not have permission to view system-level service logs' }
    ],
    interviewQuestions: [
      { q: 'How does `journalctl` handle log rotation and disk space compared to old plain-text log files in `/var/log/`?', a: '`systemd-journald` stores logs in a binary format, not plain text. It automatically rotates and manages disk space based on configuration in `/etc/systemd/journald.conf` (e.g., `SystemMaxUse=500M`), preventing logs from accidentally filling up the entire hard drive.' }
    ],
    summary: ['Reads system logs.', 'Use `-u` for specific services.', 'Use `-f` to follow live.'],
    references: commonReferences
  },

  'linux_crontab': {
    isStructured: true,
    title: '93. crontab',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: '`crontab` is a file that contains a list of scripts/commands to run on a specific schedule using the `cron` daemon.',
    whyUseIt: 'If you need to backup a database every night at 3 AM, you don\'t stay awake to do it. You write a script and put it in your crontab to run automatically.',
    syntax: 'crontab [options]',
    codeExample: '# Edit your crontab file\ncrontab -e\n\n# Example inside the file: Run backup.sh every day at 3:30 AM\n30 3 * * * /home/bob/backup.sh',
    hasLiveOutput: false,
    expectedOutput: 'Opens an editor to modify your schedule.',
    explanation: [
      { code: '30 3 * * *', desc: 'The 5 time fields: Minute(0-59), Hour(0-23), Day of Month(1-31), Month(1-12), Day of Week(0-7). Asterisk (*) means "every".' }
    ],
    realWorldExample: 'A system administrator configures a cron job: `0 0 * * 0 /scripts/certbot_renew.sh` to renew SSL certificates every Sunday at midnight.',
    commonMistakes: [
      { error: 'Assuming cron has your environment variables', code: '', suffix: 'Cron runs in a severely stripped-down environment. It doesn\'t load your `.bashrc`. Always use ABSOLUTE PATHS inside cron scripts (e.g., `/usr/bin/python3 /home/bob/script.py`, not just `python3 script.py`).' }
    ],
    bestPractices: ['Always redirect cron output to a log file, otherwise cron will try to email the output to the local user (which usually fails). E.g., `* * * * * script.sh >> /var/log/script.log 2>&1`.'],
    practiceExercise: {
      task: 'Open your crontab for editing.',
      expectedOutput: 'Text editor opens.',
      solution: 'crontab -e'
    },
    quiz: [
      { question: 'What is `crontab` used for?', options: ['Scheduling commands or scripts to run automatically at specified times', 'Opening tabs in the terminal', 'Formatting drives', 'Monitoring network traffic'], answer: 'Scheduling commands or scripts to run automatically at specified times' },
      { question: 'How many time fields define a cron schedule?', options: ['3', '5 (Minute, Hour, Day, Month, Day of Week)', '7', '1'], answer: '5 (Minute, Hour, Day, Month, Day of Week)' },
      { question: 'What does `* * * * *` mean in a crontab?', options: ['Run once a year', 'Run every minute of every hour of every day', 'Run at midnight', 'Never run'], answer: 'Run every minute of every hour of every day' },
      { question: 'What does the `-e` flag do in `crontab -e`?', options: ['Erases the crontab', 'Edits the crontab file', 'Evaluates a script', 'Executes a command'], answer: 'Edits the crontab file' },
      { question: 'Why do commands that work in your terminal often fail when put in a crontab?', options: ['Cron doesn\'t like you', 'Cron uses a minimal environment and doesn\'t know your PATH, so you must use absolute file paths', 'Cron requires root', 'Cron requires Wi-Fi'], answer: 'Cron uses a minimal environment and doesn\'t know your PATH, so you must use absolute file paths' }
    ],
    interviewQuestions: [
      { q: 'How would you schedule a job to run every 5 minutes?', a: 'You use the step operator `/`. The syntax is `*/5 * * * * /path/to/script`.' }
    ],
    summary: ['Schedules recurring tasks.', '5 fields: Min, Hr, Day, Mth, DOW.', 'Use absolute paths!'],
    references: commonReferences
  },

  'linux_at': {
    isStructured: true,
    title: '94. at',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: '`at` executes commands at a specified time in the future. Unlike `cron` (which is recurring), `at` is for one-time jobs.',
    whyUseIt: 'You want to reboot the server at 4:00 AM when traffic is lowest, but you want to go to sleep now.',
    syntax: 'echo "command" | at [time]',
    codeExample: '# Reboot the server at 4:00 AM\necho "reboot" | sudo at 4:00 AM\n\n# Run a script 5 hours from now\necho "/root/script.sh" | at now + 5 hours',
    hasLiveOutput: false,
    expectedOutput: 'warning: commands will be executed using /bin/sh\njob 1 at Wed Aug  5 04:00:00 2026',
    explanation: [
      { code: 'at now + 5 hours', desc: 'Accepts very human-readable time formats.' }
    ],
    realWorldExample: 'A developer is running a massive data import that locks the database. They want it to run during the weekend, so they queue it with `at 2:00 AM Saturday`.',
    commonMistakes: [
      { error: 'Not installed', code: '', suffix: 'Unlike `cron`, `at` is frequently NOT installed by default on modern servers. You usually have to `sudo apt install at`.' }
    ],
    bestPractices: ['Use the `atq` command to list all pending one-time jobs in the queue, and `atrm [job_id]` to cancel a job.'],
    practiceExercise: {
      task: 'Queue the command `touch /tmp/hello` to run in 2 minutes.',
      expectedOutput: 'Job added to queue.',
      solution: 'echo "touch /tmp/hello" | at now + 2 minutes'
    },
    quiz: [
      { question: 'How is `at` different from `cron`?', options: ['`at` is faster', '`cron` is for recurring tasks; `at` is for one-time tasks', '`at` is for Windows', 'They are identical'], answer: '`cron` is for recurring tasks; `at` is for one-time tasks' },
      { question: 'Does `at` accept human-readable times like "now + 2 hours"?', options: ['Yes', 'No, only Unix timestamps', 'Only on Mac', 'Only as root'], answer: 'Yes' },
      { question: 'If you want to view the queue of pending `at` jobs, what command do you use?', options: ['atlist', 'atq', 'jobs', 'ps'], answer: 'atq' },
      { question: 'How do you pipe a command into `at`?', options: ['at < "command"', 'echo "command" | at time', 'at -c "command"', 'at --run command'], answer: 'echo "command" | at time' },
      { question: 'Is `at` always installed by default on Ubuntu?', options: ['Yes', 'No, you often have to install it manually', 'Only on the Desktop version', 'Only on older versions'], answer: 'No, you often have to install it manually' }
    ],
    interviewQuestions: [
      { q: 'Where does the standard output (like echo statements) of an `at` job go since you aren\'t at the terminal when it runs?', a: 'By default, the `atd` daemon will attempt to email the output of the job to the user who submitted it, using the local mail system (similar to cron).' }
    ],
    summary: ['Schedules one-time tasks.', 'Accepts human-readable time.', 'Use `atq` to check queue.'],
    references: commonReferences
  },

  'linux_uptime': {
    isStructured: true,
    title: '95. uptime',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`uptime` tells you how long the system has been running since its last reboot.',
    whyUseIt: 'If you log into a server that is acting strangely, you check `uptime` to see if someone recently restarted it, or if it has been running without patches for 3 years.',
    syntax: 'uptime',
    codeExample: 'uptime',
    hasLiveOutput: false,
    expectedOutput: ' 10:15:32 up 45 days,  2:14,  1 user,  load average: 0.05, 0.03, 0.01',
    explanation: [
      { code: 'up 45 days', desc: 'The server has not been rebooted in 45 days.' },
      { code: 'load average', desc: 'System load over the last 1, 5, and 15 minutes.' }
    ],
    realWorldExample: 'A user complains the application is down. You SSH in, type `uptime`, and see `up 2 min`. You realize the server just crashed and automatically rebooted itself 2 minutes ago.',
    commonMistakes: [
      { error: 'Ignoring the load average', code: '', suffix: '`uptime` is not just for time. The load average numbers at the end are critical. If they are higher than your CPU core count, the server is overwhelmed.' }
    ],
    bestPractices: ['Check `uptime` immediately when logging into a production server to orient yourself.'],
    practiceExercise: {
      task: 'Check how long your current Linux machine has been running.',
      expectedOutput: 'Time info.',
      solution: 'uptime'
    },
    quiz: [
      { question: 'What does the `uptime` command tell you?', options: ['The current time', 'How long the system has been running since the last boot', 'How much RAM is used', 'The network speed'], answer: 'How long the system has been running since the last boot' },
      { question: 'Besides the time running, what other critical metric does `uptime` show at the end of the line?', options: ['IP Address', 'Disk space', 'Load Average (1, 5, 15 minutes)', 'User passwords'], answer: 'Load Average (1, 5, 15 minutes)' },
      { question: 'If `uptime` says `up 1 min`, what likely just happened?', options: ['A virus hit', 'The server was just rebooted', 'The network dropped', 'Nothing'], answer: 'The server was just rebooted' },
      { question: 'Does `uptime` require sudo?', options: ['Yes', 'No', 'Sometimes', 'Only for load averages'], answer: 'No' },
      { question: 'If you have a 4-core CPU and the load average is `8.00`, what is happening?', options: ['The server is perfectly fine', 'The server is heavily overloaded (processes are waiting for CPU time)', 'The server is off', 'The RAM is full'], answer: 'The server is heavily overloaded (processes are waiting for CPU time)' }
    ],
    interviewQuestions: [
      { q: 'Where does the `uptime` command get its information from?', a: 'It reads from `/proc/uptime` and `/proc/loadavg`, which are virtual files maintained directly by the Linux kernel in RAM.' }
    ],
    summary: ['Shows time since last reboot.', 'Shows load average.', 'No sudo needed.'],
    references: commonReferences
  },

  'linux_free': {
    isStructured: true,
    title: '96. free',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`free` displays the total amount of free and used physical and swap memory (RAM) in the system.',
    whyUseIt: 'If your server is crashing, you run `free -h` to see if you have run out of RAM.',
    syntax: 'free [options]',
    codeExample: 'free -h',
    hasLiveOutput: false,
    expectedOutput: '              total        used        free      shared  buff/cache   available\nMem:           7.8G        2.1G        1.2G        500M        4.5G        5.0G\nSwap:          2.0G          0B        2.0G',
    explanation: [
      { code: '-h', desc: 'Human-readable (Gigabytes/Megabytes instead of bytes).' },
      { code: 'available', desc: 'The most important column. This is the amount of memory ACTUALLY available for starting new applications.' }
    ],
    realWorldExample: 'A MySQL database is getting killed by the Out-Of-Memory (OOM) killer. The admin runs `free -h` and sees `available: 50M`. They need to upgrade the server RAM.',
    commonMistakes: [
      { error: 'Panicking over the "free" column', code: '', suffix: 'Linux intentionally uses almost all "free" RAM to cache disk files to speed up the OS (`buff/cache`). This memory is immediately given back to applications if they need it. Ignore the "free" column. Only look at the "available" column!' }
    ],
    bestPractices: ['Always use `free -h` so you don\'t have to count zeroes to figure out if it\'s megabytes or gigabytes.'],
    practiceExercise: {
      task: 'Check your available RAM in human-readable format.',
      expectedOutput: 'RAM stats.',
      solution: 'free -h'
    },
    quiz: [
      { question: 'What does the `free` command check?', options: ['Free disk space', 'Free software', 'Free and used RAM (memory)', 'Free IP addresses'], answer: 'Free and used RAM (memory)' },
      { question: 'What does the `-h` flag do?', options: ['Halts the system', 'Human-readable format (MB/GB)', 'Hides the output', 'Help'], answer: 'Human-readable format (MB/GB)' },
      { question: 'Which column is the true indicator of how much memory you have left for new applications?', options: ['total', 'used', 'free', 'available'], answer: 'available' },
      { question: 'Why does Linux intentionally keep the "free" column very low?', options: ['It is a bug', 'It uses unused RAM to cache disk reads to speed up the system (buff/cache)', 'Viruses hide in it', 'Swap space steals it'], answer: 'It uses unused RAM to cache disk reads to speed up the system (buff/cache)' },
      { question: 'What is "Swap" memory?', options: ['Shared memory', 'Hard drive space used as slow, emergency "fake RAM" when physical RAM is full', 'Video card memory', 'CPU cache'], answer: 'Hard drive space used as slow, emergency "fake RAM" when physical RAM is full' }
    ],
    interviewQuestions: [
      { q: 'Explain the difference between buffers and cache in the `buff/cache` column.', a: 'Buffers represent memory used to hold filesystem metadata (like directories and permissions) before it is written to disk. Cache represents the actual file contents that have been read from the disk and are kept in RAM for faster future access.' }
    ],
    summary: ['Checks RAM usage.', 'Use `-h`.', 'Look at `available`, not `free`.'],
    references: commonReferences
  },

  'linux_lsof': {
    isStructured: true,
    title: '97. lsof',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: '`lsof` stands for "List Open Files". It reports a list of all open files and the processes that opened them.',
    whyUseIt: 'In Linux, EVERYTHING is a file (including network ports, hardware devices, and directories). `lsof` is the ultimate diagnostic tool to figure out exactly what program is holding a file or port hostage.',
    syntax: 'lsof [options]',
    codeExample: '# Find out what program is listening on port 80\nsudo lsof -i :80\n\n# Find out what program is holding a specific file open\nsudo lsof /var/log/syslog',
    hasLiveOutput: false,
    expectedOutput: 'COMMAND   PID   USER   FD   TYPE DEVICE SIZE/OFF NODE NAME\nnginx    1234   root  10u  IPv4  12345      0t0  TCP *:http (LISTEN)',
    explanation: [
      { code: '-i', desc: 'Internet/Network. Lists open network connections and ports.' }
    ],
    realWorldExample: 'You are trying to unmount a USB drive (`/mnt/usb`), but Linux says "Target is busy". You run `sudo lsof +D /mnt/usb` to see exactly which bash terminal or script is inside the folder holding it open.',
    commonMistakes: [
      { error: 'Not using sudo', code: '', suffix: 'Standard users can run `lsof`, but it will only show files opened by their own processes. For troubleshooting, you almost always need `sudo lsof` to see root processes.' }
    ],
    bestPractices: ['Use `lsof -i :[port]` as a faster alternative to `netstat -tulnp | grep [port]` when you just want to know who is hogging a single port.'],
    practiceExercise: {
      task: 'Find out what process is using network port 22.',
      expectedOutput: 'Info about SSH daemon.',
      solution: 'sudo lsof -i :22'
    },
    quiz: [
      { question: 'What does `lsof` stand for?', options: ['List Software', 'List Open Files', 'Local System Off', 'List Server Options'], answer: 'List Open Files' },
      { question: 'Why is `lsof` so powerful in Linux?', options: ['It has root access automatically', 'Because in Linux, almost everything (including network sockets and directories) is treated as a file', 'It deletes viruses', 'It bypasses firewalls'], answer: 'Because in Linux, almost everything (including network sockets and directories) is treated as a file' },
      { question: 'Which flag is used to check for open network ports?', options: ['-n', '-p', '-i (internet)', '-net'], answer: '-i (internet)' },
      { question: 'If you try to unmount a drive and get "target is busy", how can `lsof` help?', options: ['It can force the unmount', 'It can tell you exactly which program is holding a file open on that drive', 'It reboots the drive', 'It formats the drive'], answer: 'It can tell you exactly which program is holding a file open on that drive' },
      { question: 'Do you usually need sudo to use `lsof` effectively?', options: ['Yes, to see files opened by other users/root', 'No', 'Only on Ubuntu', 'Only for text files'], answer: 'Yes, to see files opened by other users/root' }
    ],
    interviewQuestions: [
      { q: 'How would you use `lsof` to find deleted files that are still taking up disk space because a process is keeping them open?', a: 'You run `sudo lsof | grep deleted`. This is the classic way to troubleshoot a situation where `df` shows 100% full, but `du` says there is space.' }
    ],
    summary: ['Lists open files.', 'Finds port hogs (`-i`).', 'Troubleshoots "device busy".'],
    references: commonReferences
  },

  'linux_which': {
    isStructured: true,
    title: '98. which',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`which` locates the executable file associated with a given command by searching the directories listed in your `$PATH` environment variable.',
    whyUseIt: 'You have multiple versions of Python installed (Python 2 and Python 3). You want to know exactly which one executes when you just type `python`.',
    syntax: 'which [command_name]',
    codeExample: '# Find where the python executable is located\nwhich python3\n# Output: /usr/bin/python3',
    hasLiveOutput: false,
    expectedOutput: 'The absolute path to the executable file.',
    explanation: [
      { code: 'which', desc: 'It stops searching and returns the FIRST match it finds in your PATH, because that is the one the terminal will run.' }
    ],
    realWorldExample: 'A script fails because it says "node: command not found", but you know you installed it. You run `which node`. If it returns nothing, node is not in your system PATH.',
    commonMistakes: [
      { error: 'Trying to find normal files', code: '', suffix: '`which` ONLY searches for executable commands in your PATH. If you run `which my_document.txt`, it will return nothing. Use `find` or `locate` for normal files.' }
    ],
    bestPractices: ['When writing bash scripts, use the output of `which` (e.g., `#!/usr/bin/env bash`) rather than hardcoding paths, but `which` is great for interactive debugging.'],
    practiceExercise: {
      task: 'Find the absolute path of the `bash` executable.',
      expectedOutput: '/bin/bash or /usr/bin/bash',
      solution: 'which bash'
    },
    quiz: [
      { question: 'What does the `which` command do?', options: ['Tells you which user you are', 'Locates the executable file path for a command', 'Finds text files', 'Chooses a random number'], answer: 'Locates the executable file path for a command' },
      { question: 'Where does `which` look for executables?', options: ['The whole hard drive', 'Only in the directories listed in your $PATH variable', 'Only in /home', 'Only in /opt'], answer: 'Only in the directories listed in your $PATH variable' },
      { question: 'Can `which` find a photo named "vacation.jpg"?', options: ['Yes', 'No, it only searches for executable commands in the PATH', 'Only if you use sudo', 'Yes, if it is in PATH'], answer: 'No, it only searches for executable commands in the PATH' },
      { question: 'If `which python` returns nothing, what does that mean?', options: ['Python is uninstalled', 'The python executable is not in any directory listed in your $PATH', 'Python is broken', 'You need root access'], answer: 'The python executable is not in any directory listed in your $PATH' },
      { question: 'If you have two `node` executables in your PATH, which one does `which` return?', options: ['Both', 'The largest one', 'The first one it finds (the one that actually executes when you type the command)', 'The newest one'], answer: 'The first one it finds (the one that actually executes when you type the command)' }
    ],
    interviewQuestions: [
      { q: 'Is `which` a built-in bash command or an external binary?', a: 'On most systems, `which` is an external binary (e.g., `/usr/bin/which`). In modern bash, `type -a` or `command -v` are actually built-in and often preferred for scripting.' }
    ],
    summary: ['Finds executable paths.', 'Searches `$PATH`.', 'Only finds commands.'],
    references: commonReferences
  },

  'linux_whereis': {
    isStructured: true,
    title: '99. whereis',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: '`whereis` locates the binary, source, and manual (man) page files for a command.',
    whyUseIt: 'While `which` only tells you the single binary that will run, `whereis` gives you a broader picture, showing you where the binary is, where the documentation is, and where the source code is.',
    syntax: 'whereis [command_name]',
    codeExample: '# Find all associated files for nginx\nwhereis nginx\n# Output: nginx: /usr/sbin/nginx /etc/nginx /usr/share/nginx /usr/share/man/man8/nginx.8.gz',
    hasLiveOutput: false,
    expectedOutput: 'command: /path/to/binary /path/to/source /path/to/manpage',
    explanation: [
      { code: 'whereis', desc: 'Searches a broader set of standard system directories, not just your PATH.' }
    ],
    realWorldExample: 'You need to edit the Nginx configuration, but you don\'t know where Nginx was installed. You run `whereis nginx` and spot `/etc/nginx` in the output, locating the config folder.',
    commonMistakes: [
      { error: 'Using it to find user files', code: '', suffix: 'Just like `which`, `whereis` is not a general search tool. It only looks in standard Linux binary and manual directories. It will not find files in your `/home` folder.' }
    ],
    bestPractices: ['Use `which` to ask "What runs?". Use `whereis` to ask "Where are the program\'s files?"'],
    practiceExercise: {
      task: 'Locate the binary, source, and man page for the `ls` command.',
      expectedOutput: 'Multiple paths for ls.',
      solution: 'whereis ls'
    },
    quiz: [
      { question: 'How is `whereis` different from `which`?', options: ['It is slower', '`which` only finds the executable; `whereis` finds the executable, source, and manual pages', 'It searches Windows', 'It requires sudo'], answer: '`which` only finds the executable; `whereis` finds the executable, source, and manual pages' },
      { question: 'Can `whereis` find normal text files in your Documents folder?', options: ['Yes', 'No, it only searches standard system directories for program files', 'Only if you are root', 'Yes, if you use -a'], answer: 'No, it only searches standard system directories for program files' },
      { question: 'If you want to find the configuration folder for a service like apache2, which command might give you a hint?', options: ['which apache2', 'whereis apache2', 'ps apache2', 'find apache2'], answer: 'whereis apache2' },
      { question: 'What does the `.gz` file in the `whereis` output usually represent?', options: ['A virus', 'The compressed manual (man) page for the command', 'Source code', 'A backup'], answer: 'The compressed manual (man) page for the command' },
      { question: 'Does `whereis` search only the $PATH variable?', options: ['Yes', 'No, it has a hardcoded list of standard system directories it searches', 'Only on Ubuntu', 'Only for root'], answer: 'No, it has a hardcoded list of standard system directories it searches' }
    ],
    interviewQuestions: [
      { q: 'What flags can you use to restrict `whereis` to ONLY search for binaries or ONLY search for man pages?', a: 'Use `-b` to search only for binaries. Use `-m` to search only for manuals (man pages).' }
    ],
    summary: ['Finds binary, source, man pages.', 'Broader than `which`.', 'Good for finding configs.'],
    references: commonReferences
  },

  'linux_alias': {
    isStructured: true,
    title: '100. alias',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`alias` creates a custom shortcut name for a longer command or sequence of commands.',
    whyUseIt: 'If you constantly type `ls -la --color=auto`, you can create a shortcut so you only have to type `ll`. It saves thousands of keystrokes.',
    syntax: 'alias shortcut_name="command to run"',
    codeExample: '# Create a temporary shortcut\nalias update="sudo apt update && sudo apt upgrade -y"\n\n# Run it\nupdate',
    hasLiveOutput: false,
    expectedOutput: 'The shortcut is created silently.',
    explanation: [
      { code: 'alias', desc: 'Typing just `alias` with no arguments will list all currently active shortcuts on your system.' }
    ],
    realWorldExample: 'A developer creates an alias: `alias gs="git status"`. Now they can check their git repo instantly by typing two letters.',
    commonMistakes: [
      { error: 'Assuming aliases are permanent', code: '', suffix: 'If you run `alias x="command"` in the terminal, it is DELETED the moment you close the window. To make it permanent, you MUST save it in your `~/.bashrc` file.' }
    ],
    bestPractices: ['Avoid creating aliases that overwrite standard commands (like `alias cd="rm -rf"`), as it will cause chaos. Use custom names like `mycd`.'],
    practiceExercise: {
      task: 'Create an alias named `c` that runs the `clear` command.',
      expectedOutput: 'Alias created.',
      solution: 'alias c="clear"'
    },
    quiz: [
      { question: 'What does the `alias` command do?', options: ['Changes your username', 'Creates a custom shortcut for a longer command', 'Encrypts files', 'Downloads software'], answer: 'Creates a custom shortcut for a longer command' },
      { question: 'What is the correct syntax to create an alias?', options: ['alias x = y', 'alias name="command"', 'alias: name command', 'alias command as name'], answer: 'alias name="command"' },
      { question: 'Are aliases created in the terminal permanent?', options: ['Yes', 'No, they disappear when you close the terminal session', 'Only on Ubuntu', 'Only for root'], answer: 'No, they disappear when you close the terminal session' },
      { question: 'How do you make an alias permanent?', options: ['Use sudo alias', 'Save the alias command inside your ~/.bashrc or ~/.zshrc file', 'You cannot', 'Use the -p flag'], answer: 'Save the alias command inside your ~/.bashrc or ~/.zshrc file' },
      { question: 'How do you list all currently active aliases?', options: ['alias list', 'Type just `alias` and press Enter', 'ls alias', 'show alias'], answer: 'Type just `alias` and press Enter' }
    ],
    interviewQuestions: [
      { q: 'How can you temporarily bypass an alias and run the original command?', a: 'You can prefix the command with a backslash. For example, if you have `alias ls="ls -l"`, typing `\ls` will run the original `ls` command without the `-l`.' }
    ],
    summary: ['Creates command shortcuts.', 'Temporary by default.', 'Save in `~/.bashrc`.'],
    references: commonReferences
  },

  'linux_unalias': {
    isStructured: true,
    title: '101. unalias',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`unalias` removes an alias that was previously created.',
    whyUseIt: 'If you created an alias that conflicts with a real command, or you just want to remove a shortcut you no longer need.',
    syntax: 'unalias [shortcut_name]',
    codeExample: '# Remove the "update" alias we created earlier\nunalias update',
    hasLiveOutput: false,
    expectedOutput: 'Alias is removed silently.',
    explanation: [
      { code: '-a', desc: 'Removes ALL aliases for the current session.' }
    ],
    realWorldExample: 'A user accidentally ran `alias ls="exit"`. Now every time they list files, their terminal closes. They reopen the terminal and quickly run `unalias ls` to fix the mistake.',
    commonMistakes: [
      { error: 'Trying to unalias permanent aliases', code: '', suffix: 'If an alias is defined in your `~/.bashrc`, running `unalias` will remove it for your current session, but it will come right back the next time you open a terminal. You must delete the line from `~/.bashrc` to permanently kill it.' }
    ],
    bestPractices: ['If you are writing a bash script that depends on standard commands behaving normally, you can use `unalias -a` at the top of the script to ensure no user aliases mess up your code.'],
    practiceExercise: {
      task: 'Remove the alias named `c` that you created in the previous exercise.',
      expectedOutput: 'Alias removed.',
      solution: 'unalias c'
    },
    quiz: [
      { question: 'What does `unalias` do?', options: ['Creates an alias', 'Removes an active alias', 'Reveals hidden files', 'Uninstalls software'], answer: 'Removes an active alias' },
      { question: 'What happens if you `unalias` a shortcut that is written in your ~/.bashrc file?', options: ['It is deleted from the file', 'It is removed for the current session, but will return the next time you open a terminal', 'The computer crashes', 'It errors'], answer: 'It is removed for the current session, but will return the next time you open a terminal' },
      { question: 'How do you remove ALL currently active aliases at once?', options: ['unalias all', 'unalias *', 'unalias -a', 'rm aliases'], answer: 'unalias -a' },
      { question: 'Can `unalias` remove actual system commands?', options: ['Yes', 'No, it only removes custom shortcuts', 'Only if you use sudo', 'Only text files'], answer: 'No, it only removes custom shortcuts' },
      { question: 'What happens if you try to `unalias` a name that doesn\'t exist?', options: ['It crashes the terminal', 'It prints an error "not found"', 'It creates it', 'Nothing'], answer: 'It prints an error "not found"' }
    ],
    interviewQuestions: [
      { q: 'Are aliases passed to child processes or bash scripts by default?', a: 'No. Aliases are strictly for interactive shell sessions. If you run a script, it will not have access to the aliases you defined in your terminal unless you explicitly enable them using `shopt -s expand_aliases`.' }
    ],
    summary: ['Removes aliases.', 'Use `-a` to remove all.', 'Does not edit `.bashrc`.'],
    references: commonReferences
  },

  'linux_export': {
    isStructured: true,
    title: '102. export',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`export` marks an environment variable so that it is passed on (exported) to any child processes or scripts started from the current terminal session.',
    whyUseIt: 'You need to set a database password (`DB_PASS="secret"`) so that a Python script you are about to run can read it. If you don\'t use `export`, the Python script cannot see the variable.',
    syntax: 'export VARIABLE_NAME="value"',
    codeExample: '# Normal variable (only visible to this exact shell)\nMY_VAR="hello"\n\n# Exported variable (visible to any script you run next)\nexport API_KEY="12345"',
    hasLiveOutput: false,
    expectedOutput: 'Variable is exported silently.',
    explanation: [
      { code: 'export', desc: 'Typing `export` by itself lists all currently exported environment variables in the system.' }
    ],
    realWorldExample: 'A Node.js developer runs `export NODE_ENV="production"` before starting their server, so the server code knows to run in production mode.',
    commonMistakes: [
      { error: 'Assuming it is permanent', code: '', suffix: 'Just like aliases, exported variables vanish the moment you close the terminal. To make them permanent across reboots, add the export command to `~/.bashrc` or `/etc/environment`.' }
    ],
    bestPractices: ['By convention, environment variables are always written in ALL CAPS.'],
    practiceExercise: {
      task: 'Export a variable named `APP_MODE` with the value `testing`.',
      expectedOutput: 'Variable exported.',
      solution: 'export APP_MODE="testing"'
    },
    quiz: [
      { question: 'What does the `export` command do?', options: ['Exports data to a file', 'Makes an environment variable available to child processes and scripts', 'Saves the terminal session', 'Zips files'], answer: 'Makes an environment variable available to child processes and scripts' },
      { question: 'What happens to `export API_KEY="123"` when you close the terminal?', options: ['It is saved to disk', 'It is permanently deleted (lost)', 'It is mailed to root', 'It becomes a command'], answer: 'It is permanently deleted (lost)' },
      { question: 'By convention, how should environment variable names be formatted?', options: ['lowercase', 'camelCase', 'ALL_CAPS', 'kebab-case'], answer: 'ALL_CAPS' },
      { question: 'How do you make an exported variable permanent for your user?', options: ['Use sudo', 'Add the export command to your ~/.bashrc file', 'Run it twice', 'You cannot'], answer: 'Add the export command to your ~/.bashrc file' },
      { question: 'If you type `export` with no arguments, what happens?', options: ['It errors', 'It prints a list of all currently exported environment variables', 'It logs you out', 'It clears the screen'], answer: 'It prints a list of all currently exported environment variables' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `VAR="val"` and `export VAR="val"`?', a: '`VAR="val"` creates a local shell variable. If you run a bash script, that script cannot see `VAR`. `export VAR="val"` promotes it to an environment variable, which is inherited by any child processes or scripts spawned from that shell.' }
    ],
    summary: ['Shares variables with scripts.', 'ALL CAPS naming.', 'Lost on exit unless in `.bashrc`.'],
    references: commonReferences
  },

  'linux_env': {
    isStructured: true,
    title: '103. env',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: '`env` prints a list of all current environment variables, or runs a command in a modified environment.',
    whyUseIt: 'To check if an API key or configuration variable was actually exported correctly before you run your code.',
    syntax: 'env [options] [variable=value] [command]',
    codeExample: '# Print all environment variables\nenv\n\n# Filter to find a specific variable\nenv | grep API_KEY\n\n# Run a command with a temporary environment variable (bypassing export)\nenv DEBUG=true python3 script.py',
    hasLiveOutput: false,
    expectedOutput: 'List of key=value pairs (e.g., USER=admin, HOME=/home/admin).',
    explanation: [
      { code: 'env', desc: 'Often used at the top of scripts (e.g., `#!/usr/bin/env bash`) to locate the bash executable dynamically rather than hardcoding `/bin/bash`.' }
    ],
    realWorldExample: 'A developer\'s code is crashing because it can\'t find the database credentials. They run `env | grep DB` to verify if the server actually has the variables loaded.',
    commonMistakes: [
      { error: 'Confusing set, env, and export', code: '', suffix: '`set` shows ALL variables (local and exported) plus shell functions. `env` and `export -p` only show EXPORTED environment variables.' }
    ],
    bestPractices: ['Use `env | grep [NAME]` to quickly verify if your application secrets are loaded correctly.'],
    practiceExercise: {
      task: 'List all environment variables and filter for the word "USER".',
      expectedOutput: 'USER=your_username',
      solution: 'env | grep USER'
    },
    quiz: [
      { question: 'What does `env` do when run without arguments?', options: ['Sets up the environment', 'Prints a list of all exported environment variables', 'Deletes all variables', 'Opens an editor'], answer: 'Prints a list of all exported environment variables' },
      { question: 'How is `env` typically used in the first line of a bash or python script?', options: ['To install the language', 'To dynamically find the interpreter (e.g., #!/usr/bin/env python3)', 'To set passwords', 'To define functions'], answer: 'To dynamically find the interpreter (e.g., #!/usr/bin/env python3)' },
      { question: 'Can `env` run a command with temporary variables without altering the main shell?', options: ['Yes (e.g., env VAR=1 command)', 'No', 'Only as root', 'Only on Ubuntu'], answer: 'Yes (e.g., env VAR=1 command)' },
      { question: 'What command is commonly paired with `env` to find a specific variable?', options: ['find', 'grep', 'locate', 'cat'], answer: 'grep' },
      { question: 'Does `env` show local shell variables that were NOT exported?', options: ['Yes', 'No, only exported variables', 'Only for root', 'Sometimes'], answer: 'No, only exported variables' }
    ],
    interviewQuestions: [
      { q: 'Why is `#!/usr/bin/env bash` preferred over `#!/bin/bash` at the top of scripts?', a: 'Because bash isn\'t always installed in `/bin/` on every Unix system (FreeBSD, macOS, custom Linux setups). `env` searches the `$PATH` to find where bash is actually installed, making your script more portable.' }
    ],
    summary: ['Prints environment variables.', 'Used in script headers.', 'Runs commands with temporary vars.'],
    references: commonReferences
  },

  'linux_source': {
    isStructured: true,
    title: '104. source',
    difficulty: 'Advanced',
    readingTime: '3 min',
    definition: '`source` reads and executes commands from a file in the CURRENT shell environment. (It can also be written as a simple dot `.`).',
    whyUseIt: 'When you edit your `~/.bashrc` file to add a new alias, the terminal won\'t know about it until you log out and log back in. Running `source ~/.bashrc` reloads the file instantly without rebooting.',
    syntax: 'source filename (or . filename)',
    codeExample: '# Reload bash configuration instantly\nsource ~/.bashrc\n\n# Load variables from an .env file into the current terminal\nsource .env',
    hasLiveOutput: false,
    expectedOutput: 'Commands in the file are executed silently.',
    explanation: [
      { code: 'source', desc: 'Unlike running `./script.sh` (which creates a child process), `source` runs the commands IN YOUR CURRENT TERMINAL. This allows the script to change your current directory or set your current variables.' }
    ],
    realWorldExample: 'A Python developer creates a virtual environment. To activate it, they must run `source venv/bin/activate` so the activation script can change the PATH of their current terminal.',
    commonMistakes: [
      { error: 'Running instead of sourcing', code: '', suffix: 'If you run `./venv/bin/activate`, the script runs in a child process, modifies the child\'s PATH, and then dies. Your terminal remains unchanged. You MUST use `source`.' }
    ],
    bestPractices: ['Keep a `.env` file with your project variables and use `source .env` to load them into your terminal before testing code.'],
    practiceExercise: {
      task: 'Reload your `.bashrc` file in the home directory.',
      expectedOutput: 'Reloads silently.',
      solution: 'source ~/.bashrc'
    },
    quiz: [
      { question: 'What does `source` do?', options: ['Finds the source code of a program', 'Reads and executes a script within the CURRENT shell environment', 'Downloads code from GitHub', 'Compiles code'], answer: 'Reads and executes a script within the CURRENT shell environment' },
      { question: 'What is the most common use case for `source`?', options: ['Installing Windows', 'Reloading ~/.bashrc after making changes, without logging out', 'Deleting files', 'Zipping files'], answer: 'Reloading ~/.bashrc after making changes, without logging out' },
      { question: 'What is the shorthand symbol for the `source` command?', options: ['/ (slash)', '- (dash)', '. (dot)', '* (asterisk)'], answer: '. (dot)' },
      { question: 'What happens if you run a script with `./script.sh` instead of `source script.sh`?', options: ['It crashes', 'It runs in a child process, meaning it cannot change your current terminal\'s variables or directory', 'It requires root', 'Nothing'], answer: 'It runs in a child process, meaning it cannot change your current terminal\'s variables or directory' },
      { question: 'Is `source` a built-in bash command or an external binary?', options: ['External binary', 'Built-in bash command', 'Part of apt', 'A GUI tool'], answer: 'Built-in bash command' }
    ],
    interviewQuestions: [
      { q: 'If a script containing `cd /var/log` is executed via `./script.sh`, where are you when it finishes? What if you use `source script.sh`?', a: 'If executed with `./script.sh`, you remain in your original directory (the child process changed directories and then died). If executed with `source script.sh`, you will be moved to `/var/log` because the command executed in your current shell.' }
    ],
    summary: ['Executes scripts in the current shell.', 'Reloads `.bashrc`.', 'Shorthand is a dot `.`.'],
    references: commonReferences
  },

  'linux_echo': {
    isStructured: true,
    title: '105. echo',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`echo` prints text or the value of variables to the terminal (Standard Output).',
    whyUseIt: 'To print messages in bash scripts, check the value of environment variables, or pipe text directly into files without opening an editor.',
    syntax: 'echo [text or $VARIABLE]',
    codeExample: '# Print a simple string\necho "Hello World"\n\n# Print the value of the PATH variable\necho $PATH\n\n# Write text directly into a new file\necho "Server Name" > config.txt',
    hasLiveOutput: false,
    expectedOutput: 'The text or variable value is printed.',
    explanation: [
      { code: '$', desc: 'The dollar sign tells the terminal to evaluate the word as a variable, not a literal string.' },
      { code: '>', desc: 'Redirects the output of echo into a file instead of the screen.' }
    ],
    realWorldExample: 'A developer needs to check which user they are logged in as during a script. They use `echo $USER`.',
    commonMistakes: [
      { error: 'Single vs Double Quotes', code: '', suffix: '`echo "$USER"` will print "admin" (variable evaluated). `echo \'$USER\'` will literally print "$USER" (variable ignored). Single quotes are literal.' }
    ],
    bestPractices: ['Use `echo -e` to enable interpretation of backslash escapes like `\\n` (newline) or `\\t` (tab) inside your strings.'],
    practiceExercise: {
      task: 'Print the value of your HOME environment variable.',
      expectedOutput: '/home/your_username',
      solution: 'echo $HOME'
    },
    quiz: [
      { question: 'What does `echo` do?', options: ['Repeats your typing forever', 'Prints text or variable values to the screen', 'Checks the network', 'Reboots the server'], answer: 'Prints text or variable values to the screen' },
      { question: 'How do you tell `echo` to print a variable instead of literal text?', options: ['Use quotes', 'Prepend a $ symbol (e.g., $USER)', 'Use sudo', 'Use parentheses'], answer: 'Prepend a $ symbol (e.g., $USER)' },
      { question: 'What happens if you type `echo \'$USER\'` (with single quotes)?', options: ['It prints your actual username', 'It prints the literal characters $ U S E R', 'It crashes', 'It deletes the user'], answer: 'It prints the literal characters $ U S E R' },
      { question: 'What does `echo "hello" > file.txt` do?', options: ['It errors', 'It creates/overwrites file.txt with the word "hello"', 'It searches file.txt for "hello"', 'It appends to the file'], answer: 'It creates/overwrites file.txt with the word "hello"' },
      { question: 'Which flag enables `echo` to interpret special characters like `\\n` for newlines?', options: ['-n', '-e', '-x', '-c'], answer: '-e' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `echo "text" > file` and `echo "text" >> file`?', a: 'The single bracket `>` OVERWRITES the entire file with the new text. The double bracket `>>` APPENDS the text to the bottom of the existing file without destroying what is already there.' }
    ],
    summary: ['Prints text.', 'Use `$` for variables.', '`>` to overwrite, `>>` to append.'],
    references: commonReferences
  }
};