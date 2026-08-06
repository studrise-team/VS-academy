const commonReferences = [
  { label: 'Linux Documentation', url: 'https://linux.die.net/' },
  { label: 'Ubuntu Official Docs', url: 'https://help.ubuntu.com/' }
];

export const linuxContentBatch8 = {
  'linux_services': {
    isStructured: true,
    title: '106. Services',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Services (or Daemons) are background processes that run continuously on a Linux system, such as web servers (Nginx), databases (MySQL), or SSH.',
    whyUseIt: 'You need to know how to manage services to ensure your applications and servers stay running even after you log out of the terminal.',
    syntax: 'sudo systemctl [start|stop|status|restart] [service]',
    codeExample: '# Check the status of the SSH service\nsudo systemctl status ssh\n\n# Restart a web server after config changes\nsudo systemctl restart nginx',
    hasLiveOutput: false,
    expectedOutput: 'Service status or confirmation of state change.',
    explanation: [
      { code: 'systemctl', desc: 'The command used to control the systemd system and service manager.' },
      { code: 'status', desc: 'Shows whether the service is running, crashed, or stopped.' }
    ],
    realWorldExample: 'A developer deploys a new backend API. They configure it as a service so that if the server reboots, the API starts automatically without human intervention.',
    commonMistakes: [
      { error: 'Confusing start and enable', code: '', suffix: '`start` turns it on NOW. `enable` ensures it turns on automatically on the next REBOOT. You usually need to run both.' }
    ],
    bestPractices: ['Always check the `status` of a service immediately after starting it to ensure it didn\'t crash silently.'],
    practiceExercise: {
      task: 'Check the status of the `cron` service.',
      expectedOutput: 'Status: active (running)',
      solution: 'sudo systemctl status cron'
    },
    quiz: [
      { question: 'What is a Linux service?', options: ['A customer support portal', 'A background process that runs continuously, often starting at boot', 'A graphical application', 'A type of file'], answer: 'A background process that runs continuously, often starting at boot' },
      { question: 'What is the modern command used to manage services?', options: ['service', 'systemctl', 'run', 'start'], answer: 'systemctl' },
      { question: 'How do you check if a service is currently running?', options: ['systemctl check [service]', 'systemctl view [service]', 'systemctl status [service]', 'systemctl run [service]'], answer: 'systemctl status [service]' },
      { question: 'What does `systemctl enable` do?', options: ['Turns on the service immediately', 'Configures the service to start automatically whenever the server boots up', 'Gives the service root permissions', 'Installs the service'], answer: 'Configures the service to start automatically whenever the server boots up' },
      { question: 'If you edit an Nginx configuration file, what must you do to apply the changes?', options: ['systemctl stop nginx', 'systemctl delete nginx', 'systemctl restart nginx', 'Reboot the server'], answer: 'systemctl restart nginx' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `systemctl restart` and `systemctl reload`?', a: '`restart` completely shuts down the service process and starts a new one, which drops active connections. `reload` tells the running process to re-read its configuration files without dropping active connections (if the service supports it).' }
    ],
    summary: ['Services run in the background.', 'Managed by `systemctl`.', 'Use `status` to troubleshoot.'],
    references: commonReferences
  },

  'linux_logs': {
    isStructured: true,
    title: '107. Logs',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Logs are text files where the operating system and applications record events, errors, and informational messages.',
    whyUseIt: 'When a service crashes or a system acts weird, the answer is almost always written in a log file. You cannot troubleshoot Linux without reading logs.',
    syntax: 'tail -f /var/log/[logfile] OR journalctl',
    codeExample: '# View the last 50 lines of the system authentication log\nsudo tail -n 50 /var/log/auth.log\n\n# Watch a log in real-time as it updates\nsudo tail -f /var/log/syslog\n\n# View logs for a specific service using systemd\nsudo journalctl -u nginx',
    hasLiveOutput: false,
    expectedOutput: 'Continuous stream of log entries.',
    explanation: [
      { code: '/var/log/', desc: 'The standard directory where almost all traditional log files are stored.' },
      { code: 'tail -f', desc: 'Follows the log file, printing new lines to the screen the exact moment they are written.' }
    ],
    realWorldExample: 'A user complains they can\'t SSH into the server. The admin runs `tail -f /var/log/auth.log`, asks the user to try again, and instantly sees "Failed password for root" pop up on the screen.',
    commonMistakes: [
      { error: 'Using cat on huge logs', code: '', suffix: 'Never run `cat /var/log/syslog`. It might be gigabytes in size and will lock up your terminal. Always use `less` or `tail`.' }
    ],
    bestPractices: ['Familiarize yourself with `journalctl`, as modern Linux distributions are moving away from plain text files in `/var/log` toward centralized systemd logging.'],
    practiceExercise: {
      task: 'Watch the system log (`/var/log/syslog`) in real-time.',
      expectedOutput: 'Waiting for new log lines...',
      solution: 'sudo tail -f /var/log/syslog'
    },
    quiz: [
      { question: 'Where are most traditional log files stored in Linux?', options: ['/etc/logs', '/var/log', '/home/logs', '/usr/bin'], answer: '/var/log' },
      { question: 'Which command is best for watching a log file update in real-time?', options: ['cat', 'less', 'tail -f', 'head'], answer: 'tail -f' },
      { question: 'Why should you avoid using `cat` on log files?', options: ['It deletes them', 'Log files can be massive, and `cat` will flood your terminal and freeze it', 'It requires root', 'It encrypts the text'], answer: 'Log files can be massive, and `cat` will flood your terminal and freeze it' },
      { question: 'What modern tool is used to read logs managed by systemd?', options: ['syslog', 'logctl', 'journalctl', 'systemlog'], answer: 'journalctl' },
      { question: 'Which log file usually tracks SSH logins and security events (on Debian/Ubuntu)?', options: ['/var/log/syslog', '/var/log/auth.log', '/var/log/dmesg', '/var/log/boot.log'], answer: '/var/log/auth.log' }
    ],
    interviewQuestions: [
      { q: 'What is `logrotate` and why is it important?', a: 'Logrotate is a system utility that automatically archives old log files, compresses them, and deletes very old ones. Without it, log files would eventually grow infinitely and consume 100% of the hard drive.' }
    ],
    summary: ['Stored in `/var/log`.', 'Watch live with `tail -f`.', 'Modern logs use `journalctl`.'],
    references: commonReferences
  },

  'linux_devops_env_vars': {
    isStructured: true,
    title: '108. Environment Variables (DevOps)',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'In DevOps, environment variables are securely injected into applications (like Docker containers or CI/CD pipelines) to configure them without hardcoding secrets into the source code.',
    whyUseIt: 'You should NEVER put a database password inside your `app.js` file and push it to GitHub. Instead, your app should read a `$DB_PASSWORD` environment variable provided by the server.',
    syntax: 'export VAR="value"',
    codeExample: '# Set an environment variable in the terminal\nexport DATABASE_URL="mysql://user:pass@localhost:3306/db"\n\n# Run a Node app that uses that variable\nnode app.js\n\n# In Docker:\ndocker run -e DATABASE_URL="mysql..." my-app',
    hasLiveOutput: false,
    expectedOutput: 'The application reads the config dynamically.',
    explanation: [
      { code: 'export', desc: 'Makes the variable available to child processes (like your Node.js or Python app).' },
      { code: '-e', desc: 'Docker flag to inject an environment variable into a container.' }
    ],
    realWorldExample: 'A single Docker image is built for a React app. When deployed to the test server, it receives `API_ENDPOINT=test.com`. When deployed to production, it receives `API_ENDPOINT=prod.com`. The code never changes.',
    commonMistakes: [
      { error: 'Assuming exports are permanent', code: '', suffix: 'If you type `export SECRET=123` and close the terminal, it is GONE. To make it permanent, you must add it to `.bashrc`, `.profile`, or a `.env` file.' }
    ],
    bestPractices: ['Follow the "Twelve-Factor App" methodology: Store all config and secrets in environment variables, completely separating config from code.'],
    practiceExercise: {
      task: 'Create an environment variable named `ENV` with the value `production` and export it.',
      expectedOutput: 'Variable exported.',
      solution: 'export ENV="production"'
    },
    quiz: [
      { question: 'Why are environment variables heavily used in DevOps?', options: ['To make code run faster', 'To separate configuration and secrets (like passwords) from the actual source code', 'To change the Linux theme', 'To encrypt the hard drive'], answer: 'To separate configuration and secrets (like passwords) from the actual source code' },
      { question: 'What happens if you hardcode a database password in your code and push to a public GitHub repo?', options: ['It gets encrypted automatically', 'Hackers will scrape it in seconds and steal your data', 'GitHub deletes it', 'Nothing'], answer: 'Hackers will scrape it in seconds and steal your data' },
      { question: 'What command makes a variable available to applications running in the terminal?', options: ['save', 'set', 'export', 'publish'], answer: 'export' },
      { question: 'How do you pass an environment variable into a Docker container?', options: ['docker --env VAR=val', 'docker -e VAR=val', 'docker -v VAR=val', 'docker inject VAR=val'], answer: 'docker -e VAR=val' },
      { question: 'Are `export` commands typed in the terminal permanent?', options: ['Yes', 'No, they disappear when you close the terminal session', 'Only on Ubuntu', 'Only if you are root'], answer: 'No, they disappear when you close the terminal session' }
    ],
    interviewQuestions: [
      { q: 'What is a `.env` file and how is it used?', a: 'A `.env` file is a plain text file containing key-value pairs (e.g., `DB_PASS=123`). Applications use libraries (like `dotenv` in Node.js) to load this file into memory as environment variables. The `.env` file must ALWAYS be added to `.gitignore` so it is not committed to version control.' }
    ],
    summary: ['Keeps secrets out of code.', 'Crucial for Docker/CI-CD.', 'Use `.env` files for persistence.'],
    references: commonReferences
  },

  'linux_install_git': {
    isStructured: true,
    title: '109. Git Installation',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Git is the industry-standard version control system. It must be installed to clone repositories from GitHub, GitLab, or Bitbucket.',
    whyUseIt: 'Almost all software development requires Git to pull down code, track changes, and collaborate with a team.',
    syntax: 'sudo apt install git',
    codeExample: '# Update package lists first\nsudo apt update\n\n# Install Git\nsudo apt install git -y\n\n# Verify installation\ngit --version',
    hasLiveOutput: false,
    expectedOutput: 'git version 2.34.1',
    explanation: [
      { code: '-y', desc: 'Automatically answers "Yes" to any installation prompts.' },
      { code: 'git --version', desc: 'Confirms that Git was installed successfully and is in your PATH.' }
    ],
    realWorldExample: 'You spin up a brand new EC2 instance to host a website. The very first thing you do is `sudo apt install git` so you can run `git clone` to download your website source code onto the server.',
    commonMistakes: [
      { error: 'Forgetting to configure identity', code: '', suffix: 'After installing Git, if you try to make a commit, it will yell at you. You MUST run `git config --global user.name "Name"` and `user.email "Email"` before your first commit.' }
    ],
    bestPractices: ['Always run `sudo apt update` before installing any package to ensure you download the latest version from the package manager.'],
    practiceExercise: {
      task: 'Write the command to verify which version of Git is installed.',
      expectedOutput: 'git version X.X.X',
      solution: 'git --version'
    },
    quiz: [
      { question: 'What command installs Git on Ubuntu/Debian?', options: ['sudo yum install git', 'sudo apt install git', 'sudo pacman -S git', 'npm install git'], answer: 'sudo apt install git' },
      { question: 'Why is Git required on a production server?', options: ['To play games', 'Usually to pull (clone) the latest application source code from a repository', 'To secure the server', 'To compile C++ code'], answer: 'Usually to pull (clone) the latest application source code from a repository' },
      { question: 'What does the `-y` flag do when using `apt install`?', options: ['Installs yesterday\'s version', 'Automatically answers Yes to the confirmation prompt', 'Installs yellow themes', 'Yanks the package'], answer: 'Automatically answers Yes to the confirmation prompt' },
      { question: 'How do you check if Git successfully installed?', options: ['git check', 'git status', 'git --version', 'whereis git'], answer: 'git --version' },
      { question: 'What must you configure immediately after installing Git if you plan to write code?', options: ['Your password', 'Your global user.name and user.email', 'Your IP address', 'A firewall rule'], answer: 'Your global user.name and user.email' }
    ],
    interviewQuestions: [
      { q: 'Is there a difference between Git and GitHub?', a: 'Yes. Git is the local command-line software that tracks version history. GitHub is a remote cloud-hosting service that stores Git repositories online for collaboration.' }
    ],
    summary: ['Essential for source code.', '`sudo apt install git`.', 'Verify with `git --version`.'],
    references: commonReferences
  },

  'linux_install_java': {
    isStructured: true,
    title: '110. Java Installation',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Installing Java (JDK or JRE) is required to run Java applications like Tomcat, Jenkins, Spring Boot apps, or Minecraft servers.',
    whyUseIt: 'Unlike scripting languages, Java requires a Runtime Environment (JRE) to execute compiled `.class` or `.jar` files.',
    syntax: 'sudo apt install default-jdk',
    codeExample: '# Install the default Java Development Kit\nsudo apt update\nsudo apt install default-jdk -y\n\n# Verify installation\njava -version\njavac -version',
    hasLiveOutput: false,
    expectedOutput: 'openjdk version "11.0.X"...',
    explanation: [
      { code: 'default-jdk', desc: 'Installs the complete Java Development Kit (includes compilers). Required if you are writing or compiling Java code.' },
      { code: 'default-jre', desc: 'Installs only the Runtime Environment. Sufficient if you only need to RUN a pre-built .jar file.' }
    ],
    realWorldExample: 'A DevOps engineer is setting up a Jenkins CI/CD server. Jenkins is a Java application, so the very first step is installing `default-jdk`.',
    commonMistakes: [
      { error: 'Not setting JAVA_HOME', code: '', suffix: 'Many enterprise applications (like Tomcat, Maven, Hadoop) require the `JAVA_HOME` environment variable to be explicitly set in `/etc/environment` pointing to the JDK installation folder.' }
    ],
    bestPractices: ['For production servers, avoid `default-jdk` and explicitly install the exact version your app requires (e.g., `sudo apt install openjdk-17-jdk`) to prevent version mismatch crashes later.'],
    practiceExercise: {
      task: 'Check the currently installed Java runtime version.',
      expectedOutput: 'openjdk version...',
      solution: 'java -version'
    },
    quiz: [
      { question: 'What is the difference between JDK and JRE?', options: ['They are the same', 'JDK is for compiling/developing; JRE is only for running pre-built apps', 'JDK is for Mac, JRE is for Linux', 'JRE is faster'], answer: 'JDK is for compiling/developing; JRE is only for running pre-built apps' },
      { question: 'What package installs the default Java Development Kit on Ubuntu?', options: ['java-latest', 'default-jdk', 'java-dev', 'jdk-all'], answer: 'default-jdk' },
      { question: 'How do you check the installed version of the Java compiler?', options: ['java -c', 'javac -version', 'java -compile', 'jdk --version'], answer: 'javac -version' },
      { question: 'Which environment variable is heavily relied upon by Java enterprise applications?', options: ['JAVA_BIN', 'JDK_DIR', 'JAVA_HOME', 'JAVA_PATH'], answer: 'JAVA_HOME' },
      { question: 'Why might you install `openjdk-17-jdk` instead of `default-jdk`?', options: ['It is cheaper', 'To ensure your application runs on a specific, explicitly defined Java version rather than whatever Ubuntu considers "default"', 'It is faster', 'It avoids viruses'], answer: 'To ensure your application runs on a specific, explicitly defined Java version rather than whatever Ubuntu considers "default"' }
    ],
    interviewQuestions: [
      { q: 'If you have both Java 11 and Java 17 installed on the same Linux machine, how do you switch the default version?', a: 'You use the command `sudo update-alternatives --config java`. It provides an interactive menu to select the active Java executable.' }
    ],
    summary: ['JDK = Compile, JRE = Run.', 'Verify with `java -version`.', 'Set `$JAVA_HOME`.'],
    references: commonReferences
  },

  'linux_install_python': {
    isStructured: true,
    title: '111. Python Installation',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'Python is a widely used programming language. Modern Linux distributions usually come with Python pre-installed, but you often need to install `pip` (the package manager) and `venv` (virtual environments).',
    whyUseIt: 'Python is the backbone of Linux scripting, AI, data science, and DevOps tools (like Ansible).',
    syntax: 'sudo apt install python3 python3-pip',
    codeExample: '# Install Python3 and PIP\nsudo apt update\nsudo apt install python3 python3-pip python3-venv -y\n\n# Verify\npython3 --version\npip3 --version',
    hasLiveOutput: false,
    expectedOutput: 'Python 3.10.x',
    explanation: [
      { code: 'python3-pip', desc: 'Installs `pip`, the tool used to download community Python libraries (like requests, numpy).' },
      { code: 'python3-venv', desc: 'Allows you to create isolated Python environments so project dependencies don\'t conflict.' }
    ],
    realWorldExample: 'A data scientist needs to run a machine learning script on a cloud server. They install Python3, PIP, create a virtual environment, and then run `pip3 install pandas scikit-learn`.',
    commonMistakes: [
      { error: 'Typing `python` instead of `python3`', code: '', suffix: 'On many modern Linux systems, typing `python` throws an error. You must explicitly type `python3` because Python 2 is officially dead and removed.' }
    ],
    bestPractices: ['Never run `sudo pip install [package]`. It alters system-wide Python libraries and can break the OS. Always use a Virtual Environment (`python3 -m venv env`).'],
    practiceExercise: {
      task: 'Check the version of `pip3` installed on your system.',
      expectedOutput: 'pip X.X.X',
      solution: 'pip3 --version'
    },
    quiz: [
      { question: 'Why do you usually install `python3` instead of just `python` on modern Linux?', options: ['Python 1 and 2 are deprecated/dead, and `python3` is the explicit command for modern Python', 'Python 3 is 3x faster', 'Python 3 requires less RAM', 'Python 3 is a paid version'], answer: 'Python 1 and 2 are deprecated/dead, and `python3` is the explicit command for modern Python' },
      { question: 'What is `pip`?', options: ['A compression tool', 'The Python package installer, used to download third-party libraries', 'A logging framework', 'A firewall'], answer: 'The Python package installer, used to download third-party libraries' },
      { question: 'What is the package `python3-venv` used for?', options: ['Video rendering', 'Creating isolated virtual environments to prevent library conflicts between projects', 'Connecting to VPNs', 'Making Python run faster'], answer: 'Creating isolated virtual environments to prevent library conflicts between projects' },
      { question: 'Why is `sudo pip3 install` considered extremely dangerous?', options: ['It formats the hard drive', 'It modifies system-level Python packages, which can accidentally break critical Linux OS tools that rely on specific library versions', 'It charges money', 'It is not dangerous'], answer: 'It modifies system-level Python packages, which can accidentally break critical Linux OS tools that rely on specific library versions' },
      { question: 'How do you check the Python version?', options: ['python -v', 'python3 --version', 'python --check', 'check-python'], answer: 'python3 --version' }
    ],
    interviewQuestions: [
      { q: 'What is the standard way to activate a Python virtual environment once it is created with `python3 -m venv myenv`?', a: 'You run `source myenv/bin/activate`. Your terminal prompt will change to indicate the environment is active, and any `pip install` commands will only apply to that folder.' }
    ],
    summary: ['Use `python3`, not `python`.', 'Always install `pip`.', 'Use virtual environments.'],
    references: commonReferences
  },

  'linux_install_nodejs': {
    isStructured: true,
    title: '112. Node.js Installation',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Node.js allows you to run JavaScript on the server side. It includes `npm` (Node Package Manager).',
    whyUseIt: 'You need Node to run modern web backends (Express), frontend build tools (React/Vite/Webpack), or full-stack frameworks (Next.js).',
    syntax: 'curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && sudo apt-get install -y nodejs',
    codeExample: '# Method 1: Default apt (Often gives a very old version!)\nsudo apt install nodejs npm\n\n# Method 2: NodeSource (Recommended for specific versions like Node 20)\ncurl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -\nsudo apt-get install -y nodejs\n\n# Verify\nnode -v\nnpm -v',
    hasLiveOutput: false,
    expectedOutput: 'v20.x.x',
    explanation: [
      { code: 'setup_20.x', desc: 'A script that adds the official Node.js repository to your system so `apt` can find the newest versions, rather than the outdated one in the default Ubuntu repository.' }
    ],
    realWorldExample: 'A developer tries to run a React app on a new server, but gets syntax errors. They run `node -v` and see `v10.x`. They use NodeSource to upgrade to `v20.x`, and the app runs perfectly.',
    commonMistakes: [
      { error: 'Using the default Ubuntu repo', code: '', suffix: 'If you just `sudo apt install nodejs`, you will likely get a version of Node that is 4 to 5 years old, and modern `npm` packages will completely fail to install.' }
    ],
    bestPractices: ['Many professionals prefer to use NVM (Node Version Manager) to install Node. It allows you to have multiple versions of Node installed on one computer and switch between them instantly.'],
    practiceExercise: {
      task: 'Check the installed version of `npm`.',
      expectedOutput: 'x.x.x',
      solution: 'npm -v'
    },
    quiz: [
      { question: 'What does Node.js do?', options: ['Runs Python code', 'Allows you to execute JavaScript on a server outside of a web browser', 'Secures network traffic', 'Formats hard drives'], answer: 'Allows you to execute JavaScript on a server outside of a web browser' },
      { question: 'What is `npm`?', options: ['Node Process Monitor', 'Node Package Manager (downloads JS libraries)', 'Network Ping Module', 'New Password Maker'], answer: 'Node Package Manager (downloads JS libraries)' },
      { question: 'Why should you avoid just typing `sudo apt install nodejs` on an older Ubuntu system?', options: ['It costs money', 'The default Ubuntu repositories often contain severely outdated versions of Node.js', 'It installs a virus', 'It deletes your code'], answer: 'The default Ubuntu repositories often contain severely outdated versions of Node.js' },
      { question: 'What tool is heavily recommended to manage multiple different versions of Node on the same machine?', options: ['apt', 'NodeSource', 'NVM (Node Version Manager)', 'Docker'], answer: 'NVM (Node Version Manager)' },
      { question: 'How do you verify the Node version?', options: ['node --check', 'node -v', 'npm node', 'js -v'], answer: 'node -v' }
    ],
    interviewQuestions: [
      { q: 'What is `npx` and how does it differ from `npm`?', a: '`npm` is for installing packages. `npx` (which comes with npm) is a package runner. It allows you to execute a Node package (like `create-react-app`) directly from the internet once, without having to permanently install it globally on your system.' }
    ],
    summary: ['Runs JS on servers.', 'Avoid default `apt` version.', 'Use NodeSource or NVM.'],
    references: commonReferences
  },

  'linux_install_docker': {
    isStructured: true,
    title: '113. Docker Installation',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: 'Docker is a platform for developing, shipping, and running applications inside isolated containers. Installing it is the first step of modern DevOps.',
    whyUseIt: 'Instead of manually installing Java, Node, MySQL, and configuring them all to play nicely, you can just run Docker containers that have everything pre-configured perfectly.',
    syntax: 'sudo apt install docker.io',
    codeExample: '# Install Docker\nsudo apt update\nsudo apt install docker.io -y\n\n# Start and enable the service\nsudo systemctl start docker\nsudo systemctl enable docker\n\n# Run a test container\nsudo docker run hello-world',
    hasLiveOutput: false,
    expectedOutput: 'Hello from Docker! This message shows that your installation appears to be working correctly.',
    explanation: [
      { code: 'docker.io', desc: 'The package name in Ubuntu repositories. (Note: the official Docker repository uses `docker-ce`).' },
      { code: 'docker run', desc: 'Downloads an image from the internet and runs it in an isolated container.' }
    ],
    realWorldExample: 'Instead of following a 2-hour tutorial to install and secure a Postgres database, an admin just types `docker run -d -p 5432:5432 postgres` and has a working database in 10 seconds.',
    commonMistakes: [
      { error: 'Forgetting to add yourself to the docker group', code: '', suffix: 'By default, you must type `sudo` before every docker command. To fix this, run `sudo usermod -aG docker $USER`, then log out and back in.' }
    ],
    bestPractices: ['For production environments, follow the official Docker documentation to add their custom APT repository, so you get `docker-ce` (Community Edition) rather than the older `docker.io` package.'],
    practiceExercise: {
      task: 'Verify Docker is installed by running the `hello-world` test container.',
      expectedOutput: 'Hello from Docker!',
      solution: 'sudo docker run hello-world'
    },
    quiz: [
      { question: 'What is Docker?', options: ['A web browser', 'A platform for running applications inside lightweight, isolated containers', 'A text editor', 'A backup tool'], answer: 'A platform for running applications inside lightweight, isolated containers' },
      { question: 'What package name is commonly used to install Docker from the default Ubuntu repos?', options: ['docker-app', 'docker.io', 'dockerd', 'linux-docker'], answer: 'docker.io' },
      { question: 'After installing Docker, what must you do to ensure it survives a reboot?', options: ['docker save', 'systemctl enable docker', 'Nothing', 'Edit /etc/fstab'], answer: 'systemctl enable docker' },
      { question: 'If you want to run `docker` without typing `sudo` every time, what must you do?', options: ['Install a hack', 'Add your user to the `docker` group using usermod', 'Chmod 777 docker', 'Run as root forever'], answer: 'Add your user to the `docker` group using usermod' },
      { question: 'What command downloads and tests a basic Docker container?', options: ['docker test', 'docker run hello-world', 'docker check', 'docker init'], answer: 'docker run hello-world' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between a Virtual Machine (VM) and a Docker Container?', a: 'A VM virtualizes the hardware; it requires a massive, complete Operating System (Guest OS) to be installed, taking GBs of RAM. A Container virtualizes the OS; it shares the host\'s Linux kernel, meaning it has no OS overhead, boots in milliseconds, and takes very little RAM.' }
    ],
    summary: ['Runs apps in containers.', 'Enable the systemd service.', 'Add user to docker group.'],
    references: commonReferences
  },

  'linux_install_vscode': {
    isStructured: true,
    title: '114. VS Code Installation',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Visual Studio Code is a highly popular, GUI-based source code editor. Installing it on a Linux desktop environment provides a powerful development workspace.',
    whyUseIt: 'While `vim` and `nano` are great for quick terminal edits, building a full React or Python project is much easier with VS Code\'s extensions, file tree, and integrated terminal.',
    syntax: 'sudo snap install code --classic',
    codeExample: '# Method 1: Using Snap (The easiest way on Ubuntu)\nsudo snap install code --classic\n\n# Method 2: Using apt (Requires adding Microsoft repo)\n# ... (Too complex for a quick install, use snap!)\n\n# Open VS Code from the terminal\ncode .',
    hasLiveOutput: false,
    expectedOutput: 'VS Code GUI opens.',
    explanation: [
      { code: 'snap', desc: 'Ubuntu\'s universal package manager. It bundles all dependencies so apps install flawlessly.' },
      { code: '--classic', desc: 'Required flag. Grants VS Code full access to your filesystem (which an editor needs) rather than sandboxing it securely.' },
      { code: 'code .', desc: 'Opens VS Code with the current directory (`.`) already loaded in the file explorer pane.' }
    ],
    realWorldExample: 'A developer clones a GitHub repo into `~/projects/website`. They `cd` into that folder and type `code .` to instantly open the entire project in the Visual Studio Code GUI.',
    commonMistakes: [
      { error: 'Trying to run on a headless server', code: '', suffix: 'VS Code is a GUI application. If you SSH into an EC2 server that has no graphical desktop installed, typing `code` will just throw an error. Use `nano` or `vim` on servers.' }
    ],
    bestPractices: ['Instead of installing VS Code on a remote server, install it locally on your Windows/Mac laptop, and use the "Remote - SSH" extension to edit files directly on the server seamlessly.'],
    practiceExercise: {
      task: 'Open the current directory in VS Code from the terminal.',
      expectedOutput: 'VS Code opens.',
      solution: 'code .'
    },
    quiz: [
      { question: 'What is the easiest way to install VS Code on a modern Ubuntu Desktop?', options: ['Compile from source', 'Use the Snap package manager: `sudo snap install code --classic`', 'Download a zip file', 'apt-get install vscode'], answer: 'Use the Snap package manager: `sudo snap install code --classic`' },
      { question: 'What command opens VS Code from the terminal?', options: ['visualstudio', 'vscode', 'code', 'edit'], answer: 'code' },
      { question: 'What does typing `code .` do?', options: ['Creates a hidden file', 'Opens VS Code and loads the current directory as the project workspace', 'Closes VS Code', 'Updates the code'], answer: 'Opens VS Code and loads the current directory as the project workspace' },
      { question: 'Why does Snap require the `--classic` flag for VS Code?', options: ['For classic themes', 'Because normal snap apps are heavily sandboxed/restricted, but an editor needs full read/write access to your entire filesystem', 'To make it run faster', 'For Windows compatibility'], answer: 'Because normal snap apps are heavily sandboxed/restricted, but an editor needs full read/write access to your entire filesystem' },
      { question: 'Will installing VS Code work on an Amazon EC2 server with no GUI?', options: ['Yes, it falls back to text mode', 'No, it requires a Graphical User Interface (Desktop Environment) to run', 'Yes, over SSH', 'Yes, it opens in a web browser'], answer: 'No, it requires a Graphical User Interface (Desktop Environment) to run' }
    ],
    interviewQuestions: [
      { q: 'How does the "Remote - SSH" extension in VS Code work?', a: 'It runs the VS Code UI locally on your laptop, but installs a small "VS Code Server" agent on the remote Linux machine via SSH. The local UI communicates with the remote agent, allowing you to edit files, run terminals, and debug exactly as if the code was on your laptop.' }
    ],
    summary: ['Best installed via `snap`.', 'Type `code .` to open project.', 'GUI app, not for headless servers.'],
    references: commonReferences
  },

  'linux_install_maven': {
    isStructured: true,
    title: '115. Maven Installation',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: 'Apache Maven is a build automation and dependency management tool used primarily for Java projects.',
    whyUseIt: 'If you download a Java project (like a Spring Boot app) with a `pom.xml` file, you need Maven to download all the libraries (dependencies) and compile it into a `.jar` file.',
    syntax: 'sudo apt install maven',
    codeExample: '# Install Maven (Requires Java to be installed first!)\nsudo apt update\nsudo apt install maven -y\n\n# Verify\nmvn -version\n\n# Build a project (run this inside a folder with a pom.xml)\nmvn clean install',
    hasLiveOutput: false,
    expectedOutput: 'Apache Maven x.x.x',
    explanation: [
      { code: 'mvn', desc: 'The terminal command for Maven.' },
      { code: 'clean install', desc: 'The most common Maven command. It deletes old compiled files (`clean`) and compiles/packages the project into a fresh JAR (`install`).' }
    ],
    realWorldExample: 'A developer clones a Java repo. They run `mvn clean package`. Maven reads the `pom.xml`, downloads 50 internet libraries into the `~/.m2` folder, compiles the code, and creates `app.jar`.',
    commonMistakes: [
      { error: 'Installing Maven without Java', code: '', suffix: 'Maven is written in Java and compiles Java. If `default-jdk` is not installed, Maven will either fail or force-install Java as a dependency automatically.' }
    ],
    bestPractices: ['Many modern Java projects include a file called `mvnw` (Maven Wrapper). You run `./mvnw clean install` instead of `mvn`. This downloads the exact version of Maven the project needs automatically, meaning you don\'t even need to install Maven globally!'],
    practiceExercise: {
      task: 'Check the installed version of Maven.',
      expectedOutput: 'Apache Maven...',
      solution: 'mvn -version'
    },
    quiz: [
      { question: 'What is Maven used for?', options: ['Writing essays', 'Building Java projects and managing their dependencies (libraries)', 'Creating graphics', 'Managing databases'], answer: 'Building Java projects and managing their dependencies (libraries)' },
      { question: 'What is the command line invocation for Maven?', options: ['maven', 'mvn', 'java-build', 'make'], answer: 'mvn' },
      { question: 'What file does Maven look for to know how to build a project?', options: ['build.gradle', 'package.json', 'pom.xml', 'Makefile'], answer: 'pom.xml' },
      { question: 'What does the command `mvn clean install` do?', options: ['Installs Maven', 'Deletes old builds and compiles a fresh version of the Java project', 'Cleans the hard drive', 'Installs Linux'], answer: 'Deletes old builds and compiles a fresh version of the Java project' },
      { question: 'What prerequisite must be installed before you can effectively use Maven?', options: ['Python', 'Node.js', 'Java Development Kit (JDK)', 'Docker'], answer: 'Java Development Kit (JDK)' }
    ],
    interviewQuestions: [
      { q: 'Where does Maven store the downloaded dependencies (JAR files) so it doesn\'t have to redownload them for every project?', a: 'It caches them globally for your user in a hidden directory at `~/.m2/repository/`.' }
    ],
    summary: ['Builds Java projects.', 'Reads `pom.xml`.', 'Command is `mvn`.'],
    references: commonReferences
  },

  'linux_ec2_ssh': {
    isStructured: true,
    title: '116. Connecting to EC2 using SSH',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'Amazon EC2 (Elastic Compute Cloud) provides virtual Linux servers. To access them, you must use SSH (Secure Shell) with a `.pem` private key file.',
    whyUseIt: 'EC2 servers do not have monitors or keyboards attached. The ONLY way to control them is to remotely access their terminal over the internet using SSH.',
    syntax: 'ssh -i [key.pem] [user]@[ip_address]',
    codeExample: '# Fix permissions on your downloaded key (CRITICAL!)\nchmod 400 my-key.pem\n\n# Connect to an Ubuntu EC2 instance\nssh -i my-key.pem ubuntu@54.123.45.67',
    hasLiveOutput: false,
    expectedOutput: 'Terminal prompt changes to `ubuntu@ip-172-31-xx-xx`.',
    explanation: [
      { code: '-i my-key.pem', desc: 'Identity file. You provide the private key file AWS gave you instead of typing a password.' },
      { code: 'chmod 400', desc: 'SSH will REFUSE to use your key if other users on your computer can read it. You must make it read-only for yourself.' },
      { code: 'ubuntu@', desc: 'The default username for Ubuntu EC2 instances. (Amazon Linux uses `ec2-user`).' }
    ],
    realWorldExample: 'An admin creates a server on AWS, downloads `prod-key.pem`, opens their terminal, and types `ssh -i prod-key.pem ubuntu@api.mycompany.com` to log in and install software.',
    commonMistakes: [
      { error: 'Unprotected Private Key error', code: '', suffix: 'If you get "Permissions 0644 for my-key.pem are too open", it means you skipped the `chmod 400` step. SSH forces you to secure your key file.' }
    ],
    bestPractices: ['Never upload your `.pem` file to GitHub or share it via Slack. If someone gets that file, they own your server.'],
    practiceExercise: {
      task: 'Set the correct permissions for `key.pem` so SSH will accept it.',
      expectedOutput: 'Permissions updated.',
      solution: 'chmod 400 key.pem'
    },
    quiz: [
      { question: 'What protocol is used to remotely connect to the terminal of an AWS EC2 instance?', options: ['FTP', 'HTTP', 'SSH (Secure Shell)', 'RDP'], answer: 'SSH (Secure Shell)' },
      { question: 'What file replaces a password when connecting to EC2?', options: ['A .exe file', 'A .pem private key file', 'A .txt file', 'A .zip file'], answer: 'A .pem private key file' },
      { question: 'What is the default username for an Ubuntu EC2 instance?', options: ['root', 'admin', 'ubuntu', 'ec2-user'], answer: 'ubuntu' },
      { question: 'What command MUST you run on your `.pem` file before SSH will allow you to use it?', options: ['chmod 777', 'chmod 400 (Read-only for owner)', 'chown root', 'cat'], answer: 'chmod 400 (Read-only for owner)' },
      { question: 'What happens if your `.pem` file permissions are "too open"?', options: ['It connects faster', 'SSH aborts the connection for security reasons', 'It asks for a password', 'AWS deletes the server'], answer: 'SSH aborts the connection for security reasons' }
    ],
    interviewQuestions: [
      { q: 'If your SSH connection just times out and hangs forever, what AWS configuration is most likely broken?', a: 'The AWS Security Group (Firewall). You must ensure an Inbound Rule exists allowing Port 22 (SSH) traffic from your specific IP address.' }
    ],
    summary: ['Requires a `.pem` file.', 'Must `chmod 400 key.pem`.', 'Default user is `ubuntu` or `ec2-user`.'],
    references: commonReferences
  },

  'linux_ec2_upload': {
    isStructured: true,
    title: '117. Uploading Files to EC2',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'To get code from your local laptop onto a remote EC2 server, you use `scp` (Secure Copy), which copies files over the encrypted SSH protocol.',
    whyUseIt: 'You wrote a `server.js` file on your laptop. You need to upload it to the EC2 server so it can run on the internet.',
    syntax: 'scp -i [key.pem] [local_file] [user]@[ip]:[remote_path]',
    codeExample: '# Upload a single file to the home directory (~)\nscp -i my-key.pem index.html ubuntu@54.123.45.67:~\n\n# Upload an entire folder recursively (-r)\nscp -i my-key.pem -r ./my-website/ ubuntu@54.123.45.67:~/website/',
    hasLiveOutput: false,
    expectedOutput: 'index.html    100%   15KB   1.5MB/s   00:00',
    explanation: [
      { code: 'scp', desc: 'Functions exactly like the `cp` command, but across the internet.' },
      { code: ':', desc: 'The colon is CRITICAL. It separates the server IP from the folder path on that server.' }
    ],
    realWorldExample: 'A developer finishes building a React app locally. They run `npm run build` and then use `scp -i key.pem -r build/ ubuntu@server:/var/www/html/` to upload the finished files.',
    commonMistakes: [
      { error: 'Permission Denied on destination', code: '', suffix: 'You cannot SCP a file directly into `/var/www/html` if the `ubuntu` user doesn\'t own that folder. Upload it to `~` (home) first, then SSH in and `sudo mv` it to the final location.' }
    ],
    bestPractices: ['For frequent uploads or large projects, use `rsync` or `git pull` on the server instead of `scp`. `scp` is best for one-off file transfers.'],
    practiceExercise: {
      task: 'Write a command to SCP `app.py` to the home directory of an EC2 instance at `1.2.3.4` using `key.pem`.',
      expectedOutput: 'File uploads.',
      solution: 'scp -i key.pem app.py ubuntu@1.2.3.4:~'
    },
    quiz: [
      { question: 'What command is used to securely copy files from your laptop to an EC2 server?', options: ['cp', 'ftp', 'scp (Secure Copy)', 'mv'], answer: 'scp (Secure Copy)' },
      { question: 'What flag is required in `scp` to upload an entire directory?', options: ['-d', '-r (recursive)', '-f', '-all'], answer: '-r (recursive)' },
      { question: 'In the command `scp file.txt ubuntu@IP:/home/ubuntu`, what is the purpose of the colon (:) ?', options: ['It looks cool', 'It separates the remote server address from the destination directory path', 'It is a typo', 'It encrypts the file'], answer: 'It separates the remote server address from the destination directory path' },
      { question: 'Why might `scp file.txt ubuntu@IP:/etc/` result in "Permission Denied"?', options: ['The file is too big', 'The `ubuntu` user does not have root permissions to write directly into the `/etc/` directory', 'The internet is down', 'You need a zip file'], answer: 'The `ubuntu` user does not have root permissions to write directly into the `/etc/` directory' },
      { question: 'What underlying protocol does `scp` use to transfer data?', options: ['HTTP', 'SSH', 'TCP', 'UDP'], answer: 'SSH' }
    ],
    interviewQuestions: [
      { q: 'Is SCP considered a modern, high-performance protocol?', a: 'No. OpenSSH actually considers SCP deprecated and recommends using `sftp` or `rsync` for better performance and security, though `scp` remains universally used out of habit.' }
    ],
    summary: ['Securely copies files over SSH.', 'Use `-r` for folders.', 'Don\'t forget the `:` colon!'],
    references: commonReferences
  },

  'linux_ec2_install': {
    isStructured: true,
    title: '118. Installing Packages on EC2',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Once connected to a raw EC2 instance, you must install the software stack (like web servers, databases, or languages) required to run your application.',
    whyUseIt: 'A fresh EC2 instance is completely empty. It doesn\'t even have a web server. You have to install it yourself.',
    syntax: 'sudo apt update && sudo apt install [package]',
    codeExample: '# Step 1: ALWAYS update the package list first\nsudo apt update\n\n# Step 2: Install Nginx (Web Server)\nsudo apt install nginx -y\n\n# Step 3: Verify it is running\nsudo systemctl status nginx',
    hasLiveOutput: false,
    expectedOutput: 'Packages download and install automatically.',
    explanation: [
      { code: 'apt update', desc: 'Downloads the latest list of available software from Ubuntu servers. If you don\'t run this, the installation might fail trying to download an outdated link.' }
    ],
    realWorldExample: 'You spin up an EC2 instance for a WordPress site. You SSH in and immediately run `sudo apt update && sudo apt install apache2 mysql-server php -y` to build a LAMP stack.',
    commonMistakes: [
      { error: 'Different OS, Different package manager', code: '', suffix: 'If you selected "Amazon Linux 2023" instead of "Ubuntu" when launching the EC2 instance, `apt` will not exist. You must use `sudo yum install` or `sudo dnf install` instead.' }
    ],
    bestPractices: ['Automate this! When launching an EC2 instance in AWS, you can put these installation commands in the "User Data" section so they run automatically the first time the server boots.'],
    practiceExercise: {
      task: 'Update the package list and install `git` in a single line using `&&`.',
      expectedOutput: 'Downloads and installs.',
      solution: 'sudo apt update && sudo apt install git -y'
    },
    quiz: [
      { question: 'What must you almost always run BEFORE installing a package on a fresh Ubuntu EC2 instance?', options: ['sudo reboot', 'sudo apt update', 'sudo rm -rf /', 'sudo apt upgrade'], answer: 'sudo apt update' },
      { question: 'What package manager is used if you launch an Ubuntu EC2 instance?', options: ['yum', 'dnf', 'apt', 'pacman'], answer: 'apt' },
      { question: 'What package manager is used if you launch an Amazon Linux or CentOS EC2 instance?', options: ['yum / dnf', 'apt', 'snap', 'brew'], answer: 'yum / dnf' },
      { question: 'How can you run two commands sequentially, only running the second if the first succeeds?', options: ['Command1 | Command2', 'Command1 && Command2', 'Command1 & Command2', 'Command1 > Command2'], answer: 'Command1 && Command2' },
      { question: 'How can you bypass the [Y/n] confirmation prompt during an apt install?', options: ['-f', '-y', '-yes', '--force'], answer: '-y' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `apt update` and `apt upgrade`?', a: '`update` simply downloads the catalog/directory of the newest available software versions. `upgrade` actually downloads and installs those updates for every program currently on your system.' }
    ],
    summary: ['Update before installing.', 'Ubuntu uses `apt`.', 'Amazon Linux uses `yum`.'],
    references: commonReferences
  },

  'linux_ec2_deploy': {
    isStructured: true,
    title: '119. Deploying a Website to EC2',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: 'Deploying a static website (HTML/CSS/JS) to an EC2 instance involves moving your files into the default directory served by a web server like Nginx or Apache.',
    whyUseIt: 'You want the world to type your EC2\'s public IP address into a browser and see your website.',
    syntax: 'sudo cp file /var/www/html/',
    codeExample: '# 1. SSH into the server\nssh -i key.pem ubuntu@EC2_IP\n\n# 2. Install Nginx\nsudo apt update && sudo apt install nginx -y\n\n# 3. Create a basic HTML file in your home directory\necho "<h1>Hello World from EC2</h1>" > index.html\n\n# 4. Move it to the public web directory\nsudo cp index.html /var/www/html/',
    hasLiveOutput: false,
    expectedOutput: 'Visiting the EC2 IP in a browser displays "Hello World from EC2".',
    explanation: [
      { code: '/var/www/html/', desc: 'The default "Document Root". This is the folder that Apache and Nginx are hard-coded to expose to the internet by default.' }
    ],
    realWorldExample: 'A developer builds a portfolio. They upload their `index.html` and `style.css` via SCP to the EC2 server, then run `sudo cp * /var/www/html/`. Their portfolio is instantly live.',
    commonMistakes: [
      { error: 'Browser says "Site cant be reached"', code: '', suffix: 'If you installed Nginx and moved the files, but the site won\'t load, 99% of the time it is the AWS Security Group. You MUST open Port 80 (HTTP) in the AWS Console firewall rules.' }
    ],
    bestPractices: ['Instead of manually copying files, professionals `git clone` their repository directly onto the server and configure Nginx to point to the repository folder.'],
    practiceExercise: {
      task: 'Copy `index.html` from your current directory into the default Nginx web root directory.',
      expectedOutput: 'File is copied.',
      solution: 'sudo cp index.html /var/www/html/'
    },
    quiz: [
      { question: 'What is the default directory where Nginx and Apache look for website files on Ubuntu?', options: ['/etc/web/', '/home/ubuntu/website/', '/var/www/html/', '/usr/bin/html/'], answer: '/var/www/html/' },
      { question: 'Why do you need `sudo` to copy files into `/var/www/html/`?', options: ['Because HTML is secure', 'Because that directory is owned by the `root` user, not the `ubuntu` user', 'To compress the files', 'To encrypt the files'], answer: 'Because that directory is owned by the `root` user, not the `ubuntu` user' },
      { question: 'If you perfectly configure Nginx but the website simply times out when you visit the IP in Chrome, what is the likely culprit?', options: ['Chrome is broken', 'The AWS Security Group is blocking Port 80 (HTTP) traffic', 'The HTML is invalid', 'You need more RAM'], answer: 'The AWS Security Group is blocking Port 80 (HTTP) traffic' },
      { question: 'What service must be running for your website to be accessible?', options: ['A web server like Nginx or Apache', 'A database like MySQL', 'Docker', 'Python'], answer: 'A web server like Nginx or Apache' },
      { question: 'How can you quickly create a text file with content directly from the terminal?', options: ['Use the print command', 'echo "Text" > filename.txt', 'touch text filename.txt', 'write filename.txt'], answer: 'echo "Text" > filename.txt' }
    ],
    interviewQuestions: [
      { q: 'How would you deploy a Node.js API (running on port 3000) so it is accessible via standard Port 80?', a: 'You configure Nginx as a "Reverse Proxy". You tell Nginx to listen on Port 80 and invisibly forward all incoming traffic to `localhost:3000` where the Node app is running.' }
    ],
    summary: ['Web root is `/var/www/html`.', 'AWS Security Groups block Port 80.', 'Requires `sudo`.'],
    references: commonReferences
  },

  'linux_ec2_commands': {
    isStructured: true,
    title: '120. Common EC2 Commands',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'A quick reference of the most frequently used commands when navigating and managing an AWS EC2 Linux instance.',
    whyUseIt: 'When you log into a cloud server, you immediately need to know how healthy it is, how much space is left, and what is running.',
    syntax: 'Various commands',
    codeExample: '# 1. See how long the server has been running\nuptime\n\n# 2. Check available RAM\nfree -h\n\n# 3. Check available hard drive space\ndf -h\n\n# 4. View real-time CPU usage\ntop\n\n# 5. Check if your web server is running\nsudo systemctl status nginx',
    hasLiveOutput: false,
    expectedOutput: 'Vital system statistics.',
    explanation: [
      { code: '-h', desc: 'Human-readable. Converts raw byte numbers into MB or GB.' },
      { code: 'uptime', desc: 'Shows time, how many users are logged in, and system load.' }
    ],
    realWorldExample: 'An alarm goes off that the website is down. The admin SSHes into EC2, runs `df -h`, and sees `/dev/xvda1` is 100% full. Logs filled the disk and crashed the database.',
    commonMistakes: [
      { error: 'Ignoring system load in uptime', code: '', suffix: '`uptime` shows load averages (e.g., 2.50, 1.20, 0.80). If you have a 1-core EC2 instance and the load is 5.0, your server is massively overwhelmed and incredibly slow.' }
    ],
    bestPractices: ['Run `df -h` and `free -h` the moment you log into a server experiencing issues. Resource exhaustion is the #1 cause of cloud outages.'],
    practiceExercise: {
      task: 'Check the available RAM on the system in human-readable format.',
      expectedOutput: 'Total, Used, Free memory in MB/GB.',
      solution: 'free -h'
    },
    quiz: [
      { question: 'Which command shows how long the EC2 instance has been running without a reboot?', options: ['time', 'date', 'uptime', 'running'], answer: 'uptime' },
      { question: 'Which command checks for free hard drive space?', options: ['free', 'df -h', 'diskspace', 'ls -l'], answer: 'df -h' },
      { question: 'Which command checks for free RAM (memory)?', options: ['free -h', 'df -h', 'ram', 'top'], answer: 'free -h' },
      { question: 'What does the `-h` flag do in these commands?', options: ['Help', 'Hides files', 'Formats output into Human-readable sizes (Megabytes/Gigabytes)', 'Halts the system'], answer: 'Formats output into Human-readable sizes (Megabytes/Gigabytes)' },
      { question: 'Which command provides a real-time, constantly updating view of CPU usage?', options: ['uptime', 'ps', 'top (or htop)', 'cpu'], answer: 'top (or htop)' }
    ],
    interviewQuestions: [
      { q: 'In the `uptime` or `top` load average (e.g., `1.00, 0.75, 0.50`), what do the three numbers represent?', a: 'They represent the system load over the last 1 minute, 5 minutes, and 15 minutes, respectively.' }
    ],
    summary: ['`uptime` for duration.', '`df -h` for Disk.', '`free -h` for RAM.'],
    references: commonReferences
  }
};