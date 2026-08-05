const commonReferences = [
  { label: 'Linux Documentation', url: 'https://linux.die.net/' },
  { label: 'Ubuntu Official Docs', url: 'https://help.ubuntu.com/' }
];

export const linuxContentBatch9 = {
  'linux_project_file_org': {
    isStructured: true,
    title: '121. File Organizer Script',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'A practical bash script project that automatically organizes a messy directory (like your Downloads folder) by moving files into subfolders based on their extensions (.jpg, .pdf, .txt).',
    whyUseIt: 'Scripting repetitive tasks is the core of Linux automation. This project teaches loops, variables, string manipulation, and file moving.',
    syntax: 'bash organize.sh',
    codeExample: '#!/bin/bash\n# organize.sh\n\nTARGET_DIR="$1"\ncd "$TARGET_DIR" || exit\n\nfor file in *; do\n  if [ -f "$file" ]; then\n    # Extract extension\n    ext="${file##*.}"\n    \n    # Create folder if it doesnt exist\n    mkdir -p "$ext"\n    \n    # Move the file\n    mv "$file" "$ext/"\n  fi\ndone\n\necho "Organization complete!"',
    hasLiveOutput: false,
    expectedOutput: 'All files are neatly sorted into folders named `txt`, `jpg`, `pdf`, etc.',
    explanation: [
      { code: 'TARGET_DIR="$1"', desc: 'Takes the first argument passed to the script (e.g., `bash organize.sh /Downloads`).' },
      { code: '${file##*.}', desc: 'Bash parameter expansion. It strips away everything up to the last dot, leaving only the file extension.' },
      { code: 'mkdir -p', desc: 'Creates the directory, but doesn\'t throw an error if the directory already exists.' }
    ],
    realWorldExample: 'A data engineer receives a folder with 10,000 mixed CSV, JSON, and XML files. They run this script to instantly separate them before processing.',
    commonMistakes: [
      { error: 'Forgetting quotes around variables', code: '', suffix: 'If a file is named `my photo.jpg` (with a space), `mv $file $ext/` expands to `mv my photo.jpg jpg/` and crashes. ALWAYS use quotes: `mv "$file" "$ext/"`.' }
    ],
    bestPractices: ['Always add `|| exit` after a `cd` command in a script. If the `cd` fails (folder deleted), the script will exit instead of running destructive commands in the wrong directory.'],
    practiceExercise: {
      task: 'Create the `organize.sh` script, make it executable, and run it on a test directory.',
      expectedOutput: 'Files are organized.',
      solution: 'chmod +x organize.sh && ./organize.sh ./test_folder'
    },
    quiz: [
      { question: 'What does `${file##*.}` do in bash?', options: ['Deletes the file', 'Extracts the file extension by stripping everything before the last dot', 'Makes it hidden', 'Changes permissions'], answer: 'Extracts the file extension by stripping everything before the last dot' },
      { question: 'What does `mkdir -p` do?', options: ['Makes private', 'Makes a directory, and ignores the command silently if the directory already exists', 'Makes a printout', 'Deletes a directory'], answer: 'Makes a directory, and ignores the command silently if the directory already exists' },
      { question: 'Why is `cd "$TARGET_DIR" || exit` a best practice?', options: ['It is faster', 'If the directory doesn\'t exist, the script safely stops instead of executing the rest of the commands in the wrong place', 'It logs you out', 'It encrypts data'], answer: 'If the directory doesn\'t exist, the script safely stops instead of executing the rest of the commands in the wrong place' },
      { question: 'Why MUST you put quotes around variables containing file names (like `"$file"`)?', options: ['Because bash requires it for colors', 'To prevent the script from breaking if the file name contains spaces', 'To make it run as root', 'To compress it'], answer: 'To prevent the script from breaking if the file name contains spaces' },
      { question: 'What does the `*` do in the loop `for file in *; do`?', options: ['Multiplies numbers', 'Expands to match every file and folder in the current directory', 'Deletes everything', 'Points to the internet'], answer: 'Expands to match every file and folder in the current directory' }
    ],
    interviewQuestions: [
      { q: 'How would you modify the script to ONLY organize `.jpg` and `.png` files, ignoring everything else?', a: 'Change the loop condition from `for file in *` to `for file in *.jpg *.png`.' }
    ],
    summary: ['Automates file sorting.', 'Teaches bash parameter expansion.', 'Always quote variables!'],
    references: commonReferences
  },

  'linux_project_backup': {
    isStructured: true,
    title: '122. Backup Script',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A practical project to create a script that compresses a target directory into a `.tar.gz` archive, appends the current date to the filename, and saves it to a backup location.',
    whyUseIt: 'Data loss is a nightmare. Automating backups ensures you never forget to save your work, your database, or your website files.',
    syntax: 'bash backup.sh',
    codeExample: '#!/bin/bash\n# backup.sh\n\nSOURCE="/var/www/html"\nDEST="/backups"\nDATE=$(date +"%Y-%m-%d_%H-%M")\nFILENAME="website_backup_$DATE.tar.gz"\n\necho "Starting backup of $SOURCE..."\n\n# Create backup directory if needed\nmkdir -p "$DEST"\n\n# Compress the source into the destination\ntar -czvf "$DEST/$FILENAME" "$SOURCE"\n\necho "Backup complete: $DEST/$FILENAME"',
    hasLiveOutput: false,
    expectedOutput: 'A compressed file like `website_backup_2026-08-05_14-30.tar.gz` is created.',
    explanation: [
      { code: '$(...)', desc: 'Command substitution. It runs the `date` command and saves its output into the `DATE` variable.' },
      { code: 'tar -czvf', desc: 'Create, Zip (gzip), Verbose, File. The standard way to compress folders in Linux.' }
    ],
    realWorldExample: 'A system administrator puts this exact script into the `/etc/cron.daily/` folder so the server automatically backs up the database to a separate hard drive every night at midnight.',
    commonMistakes: [
      { error: 'Absolute vs Relative paths in tar', code: '', suffix: 'When you run `tar` on `/var/www/html`, it will compress the full folder structure. When you extract it, it will create a folder called `var`, with `www` inside it, etc. If you only want the contents, `cd` into the directory first.' }
    ],
    bestPractices: ['After writing a backup script, ALWAYS test the restoration process. A backup is useless if you don\'t know how to extract it when the server crashes.'],
    practiceExercise: {
      task: 'Run the backup script to backup your `Documents` folder.',
      expectedOutput: 'A .tar.gz file.',
      solution: './backup.sh /home/user/Documents /tmp/backups'
    },
    quiz: [
      { question: 'What does the syntax `DATE=$(date +"%Y-%m-%d")` do in bash?', options: ['Sets the system clock', 'Runs the date command and saves its text output into the DATE variable', 'Creates a calendar', 'Throws an error'], answer: 'Runs the date command and saves its text output into the DATE variable' },
      { question: 'What tool is used in the script to compress the folder?', options: ['zip', 'rar', 'tar -czvf', 'gzip'], answer: 'tar -czvf' },
      { question: 'Why is it important to append the date to the backup filename?', options: ['Because Linux requires it', 'To ensure each backup gets a unique name so tomorrow\'s backup doesn\'t overwrite today\'s', 'To make the file smaller', 'To encrypt it'], answer: 'To ensure each backup gets a unique name so tomorrow\'s backup doesn\'t overwrite today\'s' },
      { question: 'What is the purpose of `mkdir -p "$DEST"` in the script?', options: ['To print the destination', 'To ensure the backup folder actually exists before trying to save a file into it', 'To make it private', 'To delete the destination'], answer: 'To ensure the backup folder actually exists before trying to save a file into it' },
      { question: 'Where would you place this script if you wanted Linux to run it automatically every night?', options: ['/usr/bin', '/home', 'Inside a Cron job (like /etc/cron.daily/)', '/tmp'], answer: 'Inside a Cron job (like /etc/cron.daily/)' }
    ],
    interviewQuestions: [
      { q: 'How would you add a feature to this script that automatically deletes backups older than 7 days to save disk space?', a: 'You would add the command: `find "$DEST" -type f -name "*.tar.gz" -mtime +7 -exec rm {} \\;`' }
    ],
    summary: ['Automates `.tar.gz` creation.', 'Uses command substitution `$(date)`.', 'Perfect for cron jobs.'],
    references: commonReferences
  },

  'linux_project_usermgmt': {
    isStructured: true,
    title: '123. User Management Script',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A project that automates the creation of a new user, assigns them to groups, and creates a default directory structure for them.',
    whyUseIt: 'When a new developer joins the company, manually running `useradd`, `usermod`, `passwd`, and `mkdir` takes 10 minutes and is prone to errors. A script does it in 1 second.',
    syntax: 'sudo bash create_user.sh [username]',
    codeExample: '#!/bin/bash\n# create_user.sh\n\nNEW_USER="$1"\n\nif [ -z "$NEW_USER" ]; then\n  echo "Usage: $0 <username>"\n  exit 1\nfi\n\n# Create user with a home directory and bash shell\nuseradd -m -s /bin/bash "$NEW_USER"\n\n# Add them to the docker group\nusermod -aG docker "$NEW_USER"\n\n# Set a default password\necho "$NEW_USER:changeme123" | chpasswd\n\necho "User $NEW_USER created successfully!"',
    hasLiveOutput: false,
    expectedOutput: 'User is created, added to groups, and password set.',
    explanation: [
      { code: '-z "$NEW_USER"', desc: 'Checks if the variable is empty (Zero length). This ensures the script doesn\'t crash if you forget to type a name.' },
      { code: 'useradd -m -s /bin/bash', desc: 'Creates the Home folder (`-m`) and sets their default terminal to bash (`-s`).' },
      { code: 'chpasswd', desc: 'A secure utility that reads "username:password" pairs from standard input and updates the password instantly without an interactive prompt.' }
    ],
    realWorldExample: 'An HR system triggers this script automatically whenever an employee is hired, instantly provisioning their Linux server access.',
    commonMistakes: [
      { error: 'Running without sudo', code: '', suffix: 'User management commands modify `/etc/passwd` and `/etc/shadow`. If you run this script as a normal user, every single command inside it will fail with "Permission denied".' }
    ],
    bestPractices: ['Instead of setting a default password, force the user to change it on their first login using `passwd -e "$NEW_USER"` (Expire password).'],
    practiceExercise: {
      task: 'Write a script that creates a user named `intern` and adds them to the `www-data` group.',
      expectedOutput: 'Intern user created.',
      solution: 'useradd -m intern && usermod -aG www-data intern'
    },
    quiz: [
      { question: 'Why automate user creation with a script?', options: ['It uses less CPU', 'To save time and prevent human error when setting up standard permissions and groups', 'Because Linux requires it', 'To bypass security'], answer: 'To save time and prevent human error when setting up standard permissions and groups' },
      { question: 'What does `if [ -z "$NEW_USER" ];` check for?', options: ['If the user is an admin', 'If the variable is empty (zero length), meaning the script was run without providing a username', 'If the user exists', 'If the user is sleeping'], answer: 'If the variable is empty (zero length), meaning the script was run without providing a username' },
      { question: 'What flag tells `useradd` to automatically create a home directory (e.g., `/home/username`)?', options: ['-d', '-h', '-m', '-home'], answer: '-m' },
      { question: 'How does the script set a password without pausing to ask the user to type it?', options: ['It modifies /etc/shadow directly', 'It pipes a string into the `chpasswd` utility', 'It uses useradd -p', 'It doesn\'t set a password'], answer: 'It pipes a string into the `chpasswd` utility' },
      { question: 'What permissions are required to run this script successfully?', options: ['Standard user', 'Network admin', 'root (sudo)', 'Nobody'], answer: 'root (sudo)' }
    ],
    interviewQuestions: [
      { q: 'How would you ensure that every new user automatically gets a copy of a company `README.txt` file placed in their home folder upon creation?', a: 'I would place the `README.txt` file inside the `/etc/skel/` directory. `useradd -m` automatically copies everything in `/etc/skel/` into the new user\'s home directory.' }
    ],
    summary: ['Automates onboarding.', 'Uses `useradd -m`.', 'Pipes to `chpasswd` for passwords.'],
    references: commonReferences
  },

  'linux_project_log_analyzer': {
    isStructured: true,
    title: '124. Log Analyzer Script',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A project that uses `grep`, `awk`, and `sort` to parse a massive web server access log, extracting valuable metrics like "Top 5 IP addresses making requests".',
    whyUseIt: 'You are under a DDoS attack. You have a 2GB Nginx access log. You need to instantly find out which IP address is hitting you the most so you can block it in the firewall.',
    syntax: 'bash analyze.sh access.log',
    codeExample: '#!/bin/bash\n# analyze.sh\n\nLOG_FILE="$1"\n\necho "Top 5 IP Addresses:"\n# 1. awk prints the 1st column (the IP)\n# 2. sort groups identical IPs together\n# 3. uniq -c counts how many times each IP appears\n# 4. sort -nr sorts the counts numerically in reverse (highest first)\n# 5. head -n 5 shows only the top 5\nawk \'{print $1}\' "$LOG_FILE" | sort | uniq -c | sort -nr | head -n 5',
    hasLiveOutput: false,
    expectedOutput: '   5024 192.168.1.5\n   1200 10.0.0.2\n    450 8.8.8.8...',
    explanation: [
      { code: 'uniq -c', desc: 'Count. It collapses identical adjacent lines into a single line, and prefixes it with the number of times it appeared.' },
      { code: 'sort -nr', desc: 'Numeric Reverse. Sorts the output of `uniq -c` so the biggest number is at the top.' }
    ],
    realWorldExample: 'A security engineer uses this exact one-liner to parse Apache logs. They find that IP `203.0.113.50` requested the login page 10,000 times in one minute. They immediately run `iptables -A INPUT -s 203.0.113.50 -j DROP`.',
    commonMistakes: [
      { error: 'Forgetting to sort BEFORE uniq', code: '', suffix: 'The `uniq` command ONLY compares adjacent lines (lines right next to each other). If the same IP appears on line 1 and line 10, `uniq` will miss it. You MUST pipe it through `sort` first to group them together.' }
    ],
    bestPractices: ['This specific combination (`awk | sort | uniq -c | sort -nr | head`) is arguably the most famous and useful data parsing pipeline in all of Linux. Memorize it.'],
    practiceExercise: {
      task: 'Extract the top 3 most requested URLs (usually column 7 in an Nginx log) from `access.log`.',
      expectedOutput: 'Top 3 URLs.',
      solution: 'awk \'{print $7}\' access.log | sort | uniq -c | sort -nr | head -n 3'
    },
    quiz: [
      { question: 'What is the purpose of this script?', options: ['To create logs', 'To extract the most frequent items (like IPs) from a massive text file', 'To delete logs', 'To compress logs'], answer: 'To extract the most frequent items (like IPs) from a massive text file' },
      { question: 'What does `awk \'{print $1}\'` do?', options: ['Prints the whole line', 'Extracts ONLY the first column (which is usually the IP address in a web log)', 'Adds numbers', 'Deletes the first line'], answer: 'Extracts ONLY the first column (which is usually the IP address in a web log)' },
      { question: 'Why MUST you use `sort` right before `uniq -c`?', options: ['To make it alphabetical', 'Because `uniq` only counts identical lines if they are directly next to each other', 'To make it run faster', 'Because awk requires it'], answer: 'Because `uniq` only counts identical lines if they are directly next to each other' },
      { question: 'What does `sort -nr` do?', options: ['Sorts No Records', 'Sorts Numerically and in Reverse order (highest numbers at the top)', 'Sorts Names Randomly', 'Sorts Newest Records'], answer: 'Sorts Numerically and in Reverse order (highest numbers at the top)' },
      { question: 'If you are under a DDoS attack, how does this script help?', options: ['It stops the attack', 'It instantly identifies the attacker\'s IP address so you can block it in the firewall', 'It restarts the server', 'It emails the police'], answer: 'It instantly identifies the attacker\'s IP address so you can block it in the firewall' }
    ],
    interviewQuestions: [
      { q: 'How would you modify the script to find how many 404 Not Found errors occurred?', a: 'I would add a `grep " 404 "` at the beginning of the pipeline: `grep " 404 " access.log | awk \'{print $7}\' | sort | uniq -c | sort -nr`' }
    ],
    summary: ['Master pipeline: `awk | sort | uniq -c | sort -nr`.', 'Finds top IPs/URLs.', 'Vital for incident response.'],
    references: commonReferences
  },

  'linux_project_deploy_site': {
    isStructured: true,
    title: '125. Website Deployment Script',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A continuous delivery (CD) script that automatically pulls the latest code from GitHub, installs dependencies, builds a React/Vue app, and moves it to the Nginx public folder.',
    whyUseIt: 'You shouldn\'t be manually dragging and dropping files using SCP every time you update your website. You write a deployment script and run it once.',
    syntax: 'bash deploy.sh',
    codeExample: '#!/bin/bash\n# deploy.sh\n\necho "Starting deployment..."\n\n# 1. Go to project directory\ncd /home/ubuntu/my-website || exit\n\n# 2. Pull latest code\ngit pull origin main\n\n# 3. Install dependencies\nnpm install\n\n# 4. Build the production files\nnpm run build\n\n# 5. Copy the build folder to Nginx\nsudo rm -rf /var/www/html/*\nsudo cp -r build/* /var/www/html/\n\n# 6. Restart Nginx just in case\nsudo systemctl restart nginx\n\necho "Deployment Successful! Site is live."',
    hasLiveOutput: false,
    expectedOutput: 'Website is updated to the latest GitHub version on the internet.',
    explanation: [
      { code: 'git pull', desc: 'Downloads the newest changes from the repository.' },
      { code: 'npm run build', desc: 'Compiles the raw React code into optimized, minified HTML/JS.' },
      { code: 'rm -rf /var/www/html/*', desc: 'Clears out the old website files before pasting in the new ones, ensuring no old unused files are left behind.' }
    ],
    realWorldExample: 'A developer types `git push` on their laptop. A GitHub Action triggers this `deploy.sh` script on the server. 30 seconds later, the website updates automatically for users worldwide.',
    commonMistakes: [
      { error: 'Permissions on the script', code: '', suffix: 'If you pull this script from GitHub, it will not be executable. You must run `chmod +x deploy.sh` before you can run it.' }
    ],
    bestPractices: ['Instead of `cp -r` and `rm -rf`, professional deployments often use `rsync -av --delete` or create symbolic links (`ln -s`) to instantly switch between website versions with zero downtime.'],
    practiceExercise: {
      task: 'Write a script that pulls a git repo and restarts the `apache2` service.',
      expectedOutput: 'Service restarts with new code.',
      solution: 'git pull origin main && sudo systemctl restart apache2'
    },
    quiz: [
      { question: 'What is the purpose of a deployment script?', options: ['To create websites', 'To automate the manual process of pulling code, building it, and moving it to the web server directory', 'To hack servers', 'To install Ubuntu'], answer: 'To automate the manual process of pulling code, building it, and moving it to the web server directory' },
      { question: 'What does `git pull origin main` do?', options: ['Deletes the code', 'Downloads the latest changes from the main branch of the GitHub repository', 'Uploads the code', 'Installs Git'], answer: 'Downloads the latest changes from the main branch of the GitHub repository' },
      { question: 'Why do we run `npm run build` for React/Vue apps?', options: ['To install npm', 'To compile the raw developer code into optimized, browser-ready HTML/CSS/JS', 'To start a database', 'To test the code'], answer: 'To compile the raw developer code into optimized, browser-ready HTML/CSS/JS' },
      { question: 'Why does the script run `sudo rm -rf /var/www/html/*` before copying the new files?', options: ['To break the server', 'To clear out the old website files so unused/deleted files don\'t pile up on the server forever', 'To format the hard drive', 'Because Nginx requires an empty folder'], answer: 'To clear out the old website files so unused/deleted files don\'t pile up on the server forever' },
      { question: 'What must you do to the `deploy.sh` file before you can run it?', options: ['Nothing', 'Make it executable using `chmod +x deploy.sh`', 'Zip it', 'Compile it'], answer: 'Make it executable using `chmod +x deploy.sh`' }
    ],
    interviewQuestions: [
      { q: 'How would you achieve "Zero Downtime Deployment" instead of using `rm -rf` and `cp`?', a: 'I would clone the new code into a timestamped folder (e.g., `/releases/v2`). Once the build is complete, I would instantly change a symbolic link (`/var/www/html`) to point to `/releases/v2` instead of `/releases/v1`. The switch takes 1 millisecond, meaning users never see a broken page.' }
    ],
    summary: ['Automates CD.', 'Pulls, Builds, Copies.', 'Ensure script is executable.'],
    references: commonReferences
  },

  'linux_project_cron_sched': {
    isStructured: true,
    title: '126. Cron Job Scheduler',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'Cron is the time-based job scheduler in Linux. You use it to run scripts, commands, or backups automatically at specified intervals (every minute, day, week).',
    whyUseIt: 'You wrote the backup script in Topic 122. But if you have to log in and type `bash backup.sh` manually every day, it\'s not a true backup. Cron automates it.',
    syntax: 'crontab -e',
    codeExample: '# Open your personal cron file for editing\ncrontab -e\n\n# ADD THIS LINE TO THE FILE:\n# Run backup.sh every day at 2:30 AM\n30 2 * * * /home/ubuntu/backup.sh >> /home/ubuntu/backup.log 2>&1\n\n# Run a cleanup script every 5 minutes\n*/5 * * * * /home/ubuntu/cleanup.sh',
    hasLiveOutput: false,
    expectedOutput: 'Cron installs the new schedule and runs in the background.',
    explanation: [
      { code: '30 2 * * *', desc: 'The Cron syntax. (Minute, Hour, Day of Month, Month, Day of Week). 30 2 means 2:30 AM every day.' },
      { code: '>> file.log 2>&1', desc: 'Captures both normal output and error output, and appends it to a log file. If a cron job fails and you don\'t do this, the error vanishes into the void.' }
    ],
    realWorldExample: 'An SSL certificate expires every 90 days. The admin adds `0 0 1 * * certbot renew` to cron, which checks for renewals on the 1st of every month automatically.',
    commonMistakes: [
      { error: 'Assuming Cron has your PATH', code: '', suffix: 'Cron runs in a very limited environment. It might not know where `node`, `python3`, or even `tar` is installed. ALWAYS use absolute paths in your scripts (e.g., `/usr/bin/python3 script.py`).' }
    ],
    bestPractices: ['Use the website `crontab.guru` to easily generate and understand the 5-asterisk cron syntax.'],
    practiceExercise: {
      task: 'Write the cron syntax to run a script at 5:00 PM every Friday.',
      expectedOutput: '0 17 * * 5',
      solution: '0 17 * * 5 /path/to/script.sh'
    },
    quiz: [
      { question: 'What is Cron?', options: ['A text editor', 'The Linux time-based job scheduler that runs commands automatically', 'A web browser', 'A firewall rule'], answer: 'The Linux time-based job scheduler that runs commands automatically' },
      { question: 'What command opens your cron configuration file for editing?', options: ['cron edit', 'crontab -e', 'nano /cron', 'systemctl edit cron'], answer: 'crontab -e' },
      { question: 'What does the cron syntax `0 0 * * *` mean?', options: ['Never run', 'Run at midnight (00:00) every single day', 'Run every minute', 'Run once a year'], answer: 'Run at midnight (00:00) every single day' },
      { question: 'Why should you always use absolute paths (like `/usr/bin/node` instead of just `node`) inside cron jobs?', options: ['It is faster', 'Cron runs in a stripped-down environment and might not load your $PATH variables, causing commands to fail', 'It looks professional', 'It saves memory'], answer: 'Cron runs in a stripped-down environment and might not load your $PATH variables, causing commands to fail' },
      { question: 'What does `>> log.txt 2>&1` do at the end of a cron command?', options: ['Deletes the log', 'Captures both normal output and error messages and saves them to a file so you can debug if the cron job fails', 'Runs it twice', 'Emails the output'], answer: 'Captures both normal output and error messages and saves them to a file so you can debug if the cron job fails' }
    ],
    interviewQuestions: [
      { q: 'If you want a cron job to run as the `root` user, how do you edit it?', a: 'You run `sudo crontab -e`. Every user on the system has their own individual crontab file, so running it with sudo edits the root user\'s crontab.' }
    ],
    summary: ['Automates scheduling.', 'Syntax: Min Hr Day Mo DoW.', 'Always use absolute paths.'],
    references: commonReferences
  },

  'linux_project_health_mon': {
    isStructured: true,
    title: '127. Server Health Monitor',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A script that checks critical system resources (CPU, RAM, Disk) and alerts you (e.g., prints a warning) if any of them exceed a dangerous threshold.',
    whyUseIt: 'Proactive monitoring prevents outages. Instead of waiting for the server to crash because the disk is full, this script warns you when it hits 90%.',
    syntax: 'bash health.sh',
    codeExample: '#!/bin/bash\n# health.sh\n\n# Get current disk usage percentage of the root partition (/)\nDISK_USAGE=$(df -h / | awk \'NR==2 {print $5}\' | sed \'s/%//\')\n\n# Get available RAM in MB\nFREE_RAM=$(free -m | awk \'NR==2 {print $7}\')\n\necho "Disk Usage: $DISK_USAGE%"\necho "Available RAM: ${FREE_RAM}MB"\n\nif [ "$DISK_USAGE" -gt 90 ]; then\n  echo "CRITICAL: Disk is over 90% full!"\n  # Real world: mail -s "Disk Alert" admin@company.com\nfi\n\nif [ "$FREE_RAM" -lt 500 ]; then\n  echo "WARNING: Less than 500MB of RAM available!"\nfi',
    hasLiveOutput: false,
    expectedOutput: 'Prints the stats and fires warnings if thresholds are breached.',
    explanation: [
      { code: 'NR==2', desc: 'Awk command meaning "Number of Record is 2". It skips the header row and only reads the second line of the `df` or `free` output.' },
      { code: 'sed \'s/%//\'', desc: 'Strips the `%` character off the disk usage so bash can treat it as a pure integer for math comparisons (`-gt`).' }
    ],
    realWorldExample: 'A sysadmin hooks this script up to cron to run every 5 minutes. If a memory leak occurs in the app and RAM drops below 500MB, the script automatically pings their Slack channel using a webhook URL.',
    commonMistakes: [
      { error: 'Comparing strings in bash', code: '', suffix: 'If you don\'t remove the `%` sign, `[ "90%" -gt 90 ]` will throw a bash error because "90%" is a string, and `-gt` (greater than) only works on pure integers.' }
    ],
    bestPractices: ['For enterprise environments, don\'t write this from scratch. Use professional monitoring tools like Prometheus, Grafana, or Datadog. This script is excellent for learning, though!'],
    practiceExercise: {
      task: 'Extract just the integer percentage of your root disk usage.',
      expectedOutput: 'A number (e.g., 45)',
      solution: 'df -h / | awk \'NR==2 {print $5}\' | sed \'s/%//\''
    },
    quiz: [
      { question: 'What is the goal of a health monitor script?', options: ['To fix computers', 'To proactively check system resources (Disk/RAM) and alert you before a crash happens', 'To install antivirus', 'To cool the CPU'], answer: 'To proactively check system resources (Disk/RAM) and alert you before a crash happens' },
      { question: 'What does the awk command `NR==2` do?', options: ['Multiplies by 2', 'Skips the header row and targets only the 2nd line of the output', 'Deletes the second column', 'Finds network routes'], answer: 'Skips the header row and targets only the 2nd line of the output' },
      { question: 'Why did the script use `sed \'s/%//\'` on the disk usage output?', options: ['To format the text', 'Bash math comparisons (-gt, -lt) require pure integers; the % sign must be removed', 'To save memory', 'Because awk requires it'], answer: 'Bash math comparisons (-gt, -lt) require pure integers; the % sign must be removed' },
      { question: 'What does `-gt` stand for in bash `if` statements?', options: ['Go To', 'Greater Than', 'Get Text', 'Global Time'], answer: 'Greater Than' },
      { question: 'In the real world, how is a script like this usually executed?', options: ['Manually by the admin every hour', 'Automatically by a Cron job every 5 minutes', 'On startup only', 'Through a web browser'], answer: 'Automatically by a Cron job every 5 minutes' }
    ],
    interviewQuestions: [
      { q: 'How would you send an alert to a Slack channel from this bash script?', a: 'I would use the `curl` command to send an HTTP POST request containing a JSON payload directly to a Slack Webhook URL.' }
    ],
    summary: ['Monitors Disk and RAM.', 'Strips `%` for bash math.', 'Pair with cron for automation.'],
    references: commonReferences
  },

  'linux_interview_questions': {
    isStructured: true,
    title: '128. Top 50 Linux Interview Questions',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'A curated summary of the most common Linux questions asked in DevOps, Cloud Computing, and SysAdmin job interviews.',
    whyUseIt: 'You know the commands, but you need to know how to articulate your knowledge to a technical interviewer.',
    syntax: '-- Informational',
    codeExample: '# No code. Read the explanations below.',
    hasLiveOutput: false,
    expectedOutput: 'Knowledge secured.',
    explanation: [
      { code: 'Q: What is a zombie process?', desc: 'A: A process that has finished execution but still has an entry in the process table because its parent process hasn\'t read its exit status.' },
      { code: 'Q: What is an inode?', desc: 'A: A data structure that stores all information about a file (permissions, owner, physical location on disk), EXCEPT its actual name and data.' },
      { code: 'Q: Describe the boot process.', desc: 'A: BIOS -> MBR/Bootloader (GRUB) -> Kernel -> Init (systemd) -> Runlevel/Targets.' }
    ],
    realWorldExample: 'Interviewer: "I have a file with permissions 755. What does that mean?" You: "Owner can Read/Write/Execute. Group can Read/Execute. Others can Read/Execute."',
    commonMistakes: [
      { error: 'Rambling', code: '', suffix: 'In interviews, answer the specific command first, then elaborate. If asked how to find a file, say `find / -name file.txt`, not a 5-minute story about grep.' }
    ],
    bestPractices: ['Don\'t memorize answers. Understand the underlying concepts (like why Everything is a File in Linux).'],
    practiceExercise: {
      task: 'Explain what a Zombie process is aloud.',
      expectedOutput: 'Verbal explanation.',
      solution: 'A dead process waiting for its parent.'
    },
    quiz: [
      { question: 'What is a Zombie process?', options: ['A virus', 'A process that has finished, but its parent hasn\'t acknowledged its death (read its exit status)', 'A background task', 'A frozen GUI'], answer: 'A process that has finished, but its parent hasn\'t acknowledged its death (read its exit status)' },
      { question: 'What does an `inode` store?', options: ['The file\'s name', 'The file\'s text data', 'Metadata about the file (permissions, owner, physical disk blocks), but NOT the name', 'Network packets'], answer: 'Metadata about the file (permissions, owner, physical disk blocks), but NOT the name' },
      { question: 'What is the first process started by the Linux kernel (PID 1)?', options: ['bash', 'systemd (or init)', 'ssh', 'sudo'], answer: 'systemd (or init)' },
      { question: 'What command gives you the absolute path of the directory you are currently in?', options: ['pwd', 'cd', 'ls', 'dir'], answer: 'pwd' },
      { question: 'What is the difference between TCP and UDP? (Common network question)', options: ['TCP is slow, UDP is secure', 'TCP guarantees delivery (handshake); UDP just sends data instantly without checking if it arrived', 'They are the same', 'TCP is for Macs, UDP for Linux'], answer: 'TCP guarantees delivery (handshake); UDP just sends data instantly without checking if it arrived' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between a Hard Link and a Soft Link?', a: 'A Soft link points to the file PATH. If the original is deleted, the link breaks. A Hard link points directly to the INODE. If the original filename is deleted, the data remains accessible via the hard link.' }
    ],
    summary: ['Know inodes and zombies.', 'Know the boot process.', 'Be concise.'],
    references: commonReferences
  },

  'linux_scenario_questions': {
    isStructured: true,
    title: '129. Scenario-Based Linux Questions',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Interviews often test troubleshooting methodology rather than rote command memorization. These are practical "What would you do?" scenarios.',
    whyUseIt: 'Proves you can actually solve problems when a server crashes at 2 AM.',
    syntax: '-- Informational',
    codeExample: '# Scenario 1: "I get Permission Denied when writing to a file, but I am root!"\nlsattr file.txt  # Check if the immutable flag (+i) is set.\n\n# Scenario 2: "The website is down."\nsystemctl status nginx\njournalctl -xe\nss -tulnp | grep 80',
    hasLiveOutput: false,
    expectedOutput: 'Problem solved.',
    explanation: [
      { code: 'Methodology', desc: 'Always check Logs first. Never guess.' }
    ],
    realWorldExample: 'Interviewer: "A user deleted a file that a critical app was writing to, but `df -h` shows the disk is still 100% full. Why?" You: "Because the app still has the file handle open! Linux won\'t free the disk space until the app is restarted (using `lsof | grep deleted`)."',
    commonMistakes: [
      { error: 'Jumping to conclusions', code: '', suffix: 'Don\'t say "I would reboot the server." Say "I would check the system load with `uptime`, check logs with `journalctl`, and then..."' }
    ],
    bestPractices: ['Use the OODA loop: Observe (Logs/Metrics), Orient (Identify component), Decide (Plan fix), Act (Run command).'],
    practiceExercise: {
      task: 'A process is bound to port 8080 and won\'t let your app start. Find its PID.',
      expectedOutput: 'PID found.',
      solution: 'sudo ss -tulnp | grep 8080'
    },
    quiz: [
      { question: 'Scenario: Your web server returns a "502 Bad Gateway". What is the first thing you check?', options: ['Reboot', 'Check the Nginx/Apache error logs and see if the backend application (like Node or Python) is running', 'Buy a new server', 'Format the disk'], answer: 'Check the Nginx/Apache error logs and see if the backend application (like Node or Python) is running' },
      { question: 'Scenario: You deleted a massive 10GB log file with `rm`, but `df -h` says the disk is still full. Why?', options: ['It is in the trash', 'The process that created the log is still running and holding the file open in memory; you must restart the process', 'df -h is broken', 'It takes an hour to update'], answer: 'The process that created the log is still running and holding the file open in memory; you must restart the process' },
      { question: 'Scenario: A server is extremely slow. `free -h` shows plenty of RAM. What do you check next?', options: ['The time', 'Run `top` or `uptime` to check CPU load averages and see what process is eating the CPU', 'Buy RAM', 'Ping google'], answer: 'Run `top` or `uptime` to check CPU load averages and see what process is eating the CPU' },
      { question: 'Scenario: You are `root` but get "Operation not permitted" when trying to delete a file. Why?', options: ['Root is broken', 'The file has the immutable attribute (+i) set; you must use `chattr -i` first', 'The file is too small', 'You need a GUI'], answer: 'The file has the immutable attribute (+i) set; you must use `chattr -i` first' },
      { question: 'Scenario: You can\'t SSH into a new AWS server. What is the most likely cause?', options: ['Linux is broken', 'The AWS Security Group firewall isn\'t allowing Port 22 Inbound traffic', 'Your keyboard is broken', 'You need an antivirus'], answer: 'The AWS Security Group firewall isn\'t allowing Port 22 Inbound traffic' }
    ],
    interviewQuestions: [
      { q: 'Scenario: A cron job runs a bash script perfectly manually, but fails when cron runs it. Why?', a: 'Cron has a very minimal environment and does not load your `.bashrc`. It likely doesn\'t have the correct `$PATH` or environment variables needed by the script. You must specify absolute paths (e.g., `/usr/bin/node`) inside the script.' }
    ],
    summary: ['Check logs first.', 'Deleted files held open don\'t free space.', 'Security groups block SSH.'],
    references: commonReferences
  },

  'linux_frequent_commands': {
    isStructured: true,
    title: '130. Frequently Used Linux Commands',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'A recap of the 10 commands you will type every single day as a Linux user.',
    whyUseIt: 'Muscle memory is key. You should be able to type these without thinking.',
    syntax: '-- Review',
    codeExample: 'ls -la\ncd /var/log\npwd\ncat file.txt\nmkdir new_folder\nrm -rf old_folder\ncp file1 file2\nmv file1 /tmp/\ngrep "error" app.log\nsudo systemctl restart nginx',
    hasLiveOutput: false,
    expectedOutput: 'Familiarity.',
    explanation: [
      { code: 'ls -la', desc: 'List all files, including hidden ones, in a detailed format.' },
      { code: 'rm -rf', desc: 'Remove recursively and forcefully. Dangerous.' }
    ],
    realWorldExample: 'A typical 5-minute session: `cd /var/www`, `ls -la`, `nano config.json`, `sudo systemctl restart myapp`, `tail -f /var/log/myapp.log`.',
    commonMistakes: [
      { error: 'Typing out full paths manually', code: '', suffix: 'Use the `TAB` key! If you type `cd /va` and press TAB, Linux auto-completes it to `/var/`. This saves thousands of keystrokes.' }
    ],
    bestPractices: ['Use `ctrl+r` to reverse search your command history instead of pressing the UP arrow 50 times.'],
    practiceExercise: {
      task: 'List all files in your current directory, including hidden files.',
      expectedOutput: 'List of files.',
      solution: 'ls -la'
    },
    quiz: [
      { question: 'What command shows your current directory path?', options: ['cd', 'pwd', 'path', 'whereami'], answer: 'pwd' },
      { question: 'What command searches for a specific word inside a file?', options: ['find', 'search', 'grep', 'locate'], answer: 'grep' },
      { question: 'What is the most dangerous command to run as root if you aren\'t paying attention?', options: ['ls', 'cd', 'rm -rf /', 'uptime'], answer: 'rm -rf /' },
      { question: 'What keyboard shortcut auto-completes file and folder names?', options: ['Enter', 'Shift', 'Tab', 'Ctrl+C'], answer: 'Tab' },
      { question: 'What command views the end of a log file?', options: ['head', 'tail', 'cat', 'less'], answer: 'tail' }
    ],
    interviewQuestions: [
      { q: 'How do you view your command history, and how do you instantly re-run command number 42?', a: 'Run `history`. Then type `!42` and hit enter.' }
    ],
    summary: ['`ls -la`, `cd`, `pwd`.', '`grep` for text.', 'USE THE TAB KEY.'],
    references: commonReferences
  },

  'linux_cheat_sheet': {
    isStructured: true,
    title: '131. Linux Cheat Sheet',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'A quick reference guide for essential Linux shortcuts and concepts.',
    whyUseIt: 'Print this out or bookmark it when you are learning.',
    syntax: '-- Reference',
    codeExample: '# SHORTCUTS\nCtrl + C : Cancel current running command\nCtrl + L : Clear terminal screen\nCtrl + R : Search history\nCtrl + D : Logout / Exit terminal\nCtrl + A : Move cursor to start of line\nCtrl + E : Move cursor to end of line\n\n# DIRECTORIES\n/      : Root directory (the base of the OS)\n~      : Your home directory (/home/username)\n/etc   : Configuration files\n/var   : Variable data (Logs, Databases)\n/tmp   : Temporary files (cleared on reboot)',
    hasLiveOutput: false,
    expectedOutput: 'A cheat sheet.',
    explanation: [
      { code: 'Ctrl + C', desc: 'The most important shortcut. If a program is frozen or outputting endless text, this stops it.' }
    ],
    realWorldExample: 'You type a long command but realize you forgot `sudo` at the beginning. You press `Ctrl + A` to instantly jump to the front of the line, type `sudo `, and press Enter.',
    commonMistakes: [
      { error: 'Using Ctrl+V to paste', code: '', suffix: 'In the Linux terminal, `Ctrl+V` often doesn\'t paste. You must use `Ctrl+Shift+V`, or simply Right-Click your mouse.' }
    ],
    bestPractices: ['Memorize `Ctrl + A` and `Ctrl + E`. They make editing long bash commands significantly less frustrating.'],
    practiceExercise: {
      task: 'Clear your terminal screen using a keyboard shortcut.',
      expectedOutput: 'Screen clears.',
      solution: 'Ctrl + L'
    },
    quiz: [
      { question: 'How do you forcefully stop a command that is currently running and stuck?', options: ['Alt+F4', 'Esc', 'Ctrl + C', 'Ctrl + Z'], answer: 'Ctrl + C' },
      { question: 'What does `Ctrl + L` do?', options: ['Logs you out', 'Clears the terminal screen (same as `clear` command)', 'Locks the screen', 'Lists files'], answer: 'Clears the terminal screen (same as `clear` command)' },
      { question: 'Which directory holds global system configuration files?', options: ['/bin', '/home', '/etc', '/var'], answer: '/etc' },
      { question: 'Which directory holds system log files?', options: ['/tmp', '/etc', '/var (specifically /var/log)', '/root'], answer: '/var (specifically /var/log)' },
      { question: 'What does the `~` (tilde) symbol represent in a path?', options: ['The root directory', 'The internet', 'Your user\'s Home directory', 'A deleted file'], answer: 'Your user\'s Home directory' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `Ctrl+C` and `Ctrl+Z`?', a: '`Ctrl+C` sends the SIGINT signal, cleanly terminating/killing the process. `Ctrl+Z` sends the SIGTSTP signal, which PAUSES the process and throws it into the background. You can resume it later with the `fg` command.' }
    ],
    summary: ['Ctrl+C kills.', 'Ctrl+L clears.', `/etc` = config, `/var` = logs.'],
    references: commonReferences
  },

  'linux_command_practice': {
    isStructured: true,
    title: '132. Linux Command Practice',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'The final topic. A series of exercises to prove you have mastered the Linux command line.',
    whyUseIt: 'Reading about riding a bike is different from riding one. You must practice.',
    syntax: '-- Challenge',
    codeExample: '# Challenge 1: Find all files in /var/log ending in .log that were modified in the last 7 days.\n# Challenge 2: Find the PID of Nginx and kill it.\n# Challenge 3: Append the word "SUCCESS" to a file owned by root (without getting permission denied).',
    hasLiveOutput: false,
    expectedOutput: 'Mastery.',
    explanation: [
      { code: 'Challenge 1 Solution', desc: '`find /var/log -name "*.log" -mtime -7`' },
      { code: 'Challenge 2 Solution', desc: '`pidof nginx` or `pgrep nginx`, followed by `sudo kill [PID]`.' },
      { code: 'Challenge 3 Solution', desc: '`echo "SUCCESS" | sudo tee -a /root/file.txt` (Using sudo with echo > fails, `tee` is required).' }
    ],
    realWorldExample: 'You are handed a laptop with Ubuntu installed and told to deploy a website. You confidently open the terminal, install packages, configure the firewall, and get it running in 10 minutes without Googling basic commands.',
    commonMistakes: [
      { error: 'Fear of breaking things', code: '', suffix: 'Set up a free Virtual Machine (VirtualBox or AWS EC2 Free Tier) and break it intentionally. Delete /etc. Try a fork bomb. Learning how a system breaks teaches you how it works.' }
    ],
    bestPractices: ['Congratulations on completing the Linux Module. Your next step should be learning Shell Scripting in depth, or moving on to Cloud/DevOps tools like Docker and Terraform.'],
    practiceExercise: {
      task: 'Celebrate. You know Linux.',
      expectedOutput: 'Hooray!',
      solution: 'echo "I have mastered the terminal!"'
    },
    quiz: [
      { question: 'What command finds files based on name, size, or modification date?', options: ['locate', 'search', 'find', 'grep'], answer: 'find' },
      { question: 'If `sudo echo "text" > /root/file.txt` fails with Permission Denied, what command should you pipe into instead?', options: ['cat', 'tee', 'write', 'sed'], answer: 'tee' },
      { question: 'What is the best way to truly master Linux?', options: ['Read books', 'Watch videos', 'Set up a Virtual Machine and force yourself to use the terminal daily to build muscle memory', 'Take multiple choice quizzes'], answer: 'Set up a Virtual Machine and force yourself to use the terminal daily to build muscle memory' },
      { question: 'What command securely copies a file to a remote server?', options: ['cp', 'ssh', 'scp', 'ftp'], answer: 'scp' },
      { question: 'Are you a Linux expert?', options: ['Yes', 'Getting there!', 'Definitely', 'Absolutely'], answer: 'Getting there!' }
    ],
    interviewQuestions: [
      { q: 'How do you redirect standard output AND standard error to a file at the same time?', a: 'You use `> file.log 2>&1` (older syntax) or `&> file.log` (newer bash syntax).' }
    ],
    summary: ['Practice makes perfect.', 'Use Virtual Machines.', 'You are ready.'],
    references: commonReferences
  }
};