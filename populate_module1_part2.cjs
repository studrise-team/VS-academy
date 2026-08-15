const fs = require('fs');

const topicsData = {
  "devops_ci_vs_cd": {
    id: "devops_ci_vs_cd",
    title: "9. CI vs CD",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: false,
    definition: "CI (Continuous Integration) is the practice of automatically building and testing code changes. CD stands for either Continuous Delivery (ensuring code is always ready to deploy) or Continuous Deployment (automatically deploying to production).",
    whyUseIt: "Understanding the difference is critical for designing pipelines. You can't have CD without CI. Together, they form the backbone of automated software delivery.",
    keyConcepts: [
      { term: "Continuous Integration", desc: "Merge code to main frequently. Automated builds and tests run." },
      { term: "Continuous Delivery", desc: "Code is automatically prepared for a release to production, but requires a manual click to deploy." },
      { term: "Continuous Deployment", desc: "Every change that passes automated tests is deployed to production automatically without human intervention." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A startup might use Continuous Deployment to push updates 50 times a day. A bank might use Continuous Delivery, requiring a manager to click 'Approve' before Friday's release.",
    commonMistakes: [
      { error: "Confusing Delivery and Deployment", code: "", suffix: "Delivery is manual approval. Deployment is fully automated." }
    ],
    bestPractices: [
      "Master CI before attempting CD.",
      "Ensure test coverage is near 100% before enabling Continuous Deployment."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "What is the difference between Continuous Delivery and Continuous Deployment?", a: "Delivery requires manual approval to go to production. Deployment is fully automated." }
    ],
    quiz: [
      { 
        question: "Which practice requires a human to press an 'Approve' button before production deployment?", 
        options: ["Continuous Integration", "Continuous Delivery", "Continuous Deployment", "Continuous Development"], 
        answer: "Continuous Delivery", 
        explanation: "Continuous Delivery keeps the software in a deployable state, but stops short of automated deployment to production." 
      }
    ],
    quickRevision: [
      "CI = Automate Build + Test.",
      "CD (Delivery) = Automate Release Prep.",
      "CD (Deployment) = Automate Release."
    ],
    references: ["Atlassian CI/CD Guide"]
  },
  "devops_continuous_integration": {
    id: "devops_continuous_integration",
    title: "10. Continuous Integration",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: false,
    definition: "Continuous Integration (CI) is a software development practice where developers regularly merge their code changes into a central repository, after which automated builds and tests are run.",
    whyUseIt: "CI prevents the 'integration hell' that happens when multiple developers try to merge weeks of isolated work. It catches bugs immediately.",
    keyConcepts: [
      { term: "Version Control", desc: "The single source of truth (e.g., Git repository)." },
      { term: "Build Automation", desc: "Automatically compiling code (e.g., Maven, npm)." },
      { term: "Automated Testing", desc: "Running unit and integration tests on every commit." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A developer commits a new feature to GitHub. GitHub Actions automatically spins up a runner, installs dependencies, and runs 500 unit tests. If any test fails, the commit is marked with a red 'X'.",
    commonMistakes: [
      { error: "Ignoring broken builds", code: "", suffix: "If the CI build fails, fixing it must be the team's top priority." }
    ],
    bestPractices: [
      "Commit code at least once a day.",
      "Keep the build fast (under 10 minutes) so developers get quick feedback."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "What are the key benefits of Continuous Integration?", a: "Early bug detection, reduced integration conflicts, and always having a deployable main branch." }
    ],
    quiz: [
      { 
        question: "What is the primary goal of Continuous Integration?", 
        options: ["To deploy to production", "To merge code frequently and detect bugs early", "To provision infrastructure", "To write code faster"], 
        answer: "To merge code frequently and detect bugs early", 
        explanation: "CI focuses on frequent integration and automated testing to catch issues as soon as code is committed." 
      }
    ],
    quickRevision: [
      "Commit often.",
      "Automate builds.",
      "Automate tests."
    ],
    references: []
  },
  "devops_continuous_delivery": {
    id: "devops_continuous_delivery",
    title: "11. Continuous Delivery",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: false,
    definition: "Continuous Delivery is an extension of CI. It ensures that you can release new changes to your customers quickly in a sustainable way. Every change is ready to be deployed at the push of a button.",
    whyUseIt: "It decouples the technical process of deploying from the business decision of releasing.",
    keyConcepts: [
      { term: "Release Readiness", desc: "The main branch is always in a deployable state." },
      { term: "Staging Environments", desc: "Deploying to an environment identical to production for final manual testing/QA." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A mobile app team uses CI to build the APK. The CD pipeline uploads the APK to TestFlight for beta testers. The product manager decides when to click 'Publish' to the App Store.",
    commonMistakes: [
      { error: "Staging differs from production", code: "", suffix: "If your staging database is completely different from production, your tests are invalid." }
    ],
    bestPractices: [
      "Use Infrastructure as Code to ensure staging and production are identical.",
      "Automate the deployment pipeline so deployments are boring and repeatable."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "Why would a company choose Continuous Delivery over Continuous Deployment?", a: "For business reasons (timing marketing campaigns), regulatory reasons (compliance sign-offs), or user-experience reasons (batching changes)." }
    ],
    quiz: [
      { 
        question: "In Continuous Delivery, who decides when software goes to production?", 
        options: ["The developer", "An automated script", "A human (business or release manager)", "The cloud provider"], 
        answer: "A human (business or release manager)", 
        explanation: "Continuous Delivery stops just before production, requiring a manual business decision to release." 
      }
    ],
    quickRevision: [
      "Automated pipeline all the way to Staging.",
      "Manual push to Production."
    ],
    references: []
  },
  "devops_continuous_deployment": {
    id: "devops_continuous_deployment",
    title: "12. Continuous Deployment",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: false,
    definition: "Continuous Deployment goes one step further than Continuous Delivery. Every change that passes all stages of your production pipeline is released to your customers automatically, with no human intervention.",
    whyUseIt: "It accelerates the feedback loop with customers and removes the bottleneck of manual release approvals.",
    keyConcepts: [
      { term: "No Human Intervention", desc: "If the tests pass, the code is live." },
      { term: "Feature Toggles (Flags)", desc: "Code is deployed but the feature is hidden from users until ready." },
      { term: "Canary Releases", desc: "Deploying the change to 1% of users first to monitor for errors." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A developer at Netflix merges a fix. 15 minutes later, the automated pipeline has tested it, built it, and silently deployed it to millions of users without anyone pushing an 'Approve' button.",
    commonMistakes: [
      { error: "Implementing without robust monitoring", code: "", suffix: "If you deploy automatically, you must have automated rollbacks if errors spike." }
    ],
    bestPractices: [
      "Use feature flags to separate deployment from release.",
      "Implement rigorous automated testing (unit, integration, E2E)."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "What is required to safely implement Continuous Deployment?", a: "Extensive automated testing, feature flags, robust monitoring, and automated rollback capabilities." }
    ],
    quiz: [
      { 
        question: "What happens when a commit passes all tests in a Continuous Deployment pipeline?", 
        options: ["It waits for QA approval", "It is automatically deployed to production", "It is deleted", "It is sent via email"], 
        answer: "It is automatically deployed to production", 
        explanation: "Continuous Deployment means zero human intervention between code merge and production deployment." 
      }
    ],
    quickRevision: [
      "Total automation.",
      "Tests are the only gatekeeper to production."
    ],
    references: []
  },
  "devops_devops_vs_agile": {
    id: "devops_devops_vs_agile",
    title: "13. DevOps vs Agile",
    difficulty: "Beginner",
    readingTime: "8 min",
    osSpecific: false,
    definition: "Agile is a software development methodology focused on iterative planning, rapid delivery of working software, and customer feedback. DevOps is the practice of bridging development and operations to automate the delivery of that software.",
    whyUseIt: "Many companies confuse the two. You need Agile to figure out WHAT to build quickly, and DevOps to figure out HOW to deliver it quickly.",
    keyConcepts: [
      { term: "Agile", desc: "Focuses on process, planning (Sprints/Scrum), and adapting to changing requirements." },
      { term: "DevOps", desc: "Focuses on engineering practices, CI/CD, automation, and infrastructure." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A product team uses Agile (Jira, daily standups, 2-week sprints) to build a new checkout flow. They use DevOps (GitLab CI, Terraform, Kubernetes) to actually deploy the checkout flow 5 times a day.",
    commonMistakes: [
      { error: "Doing Agile without DevOps", code: "", suffix: "You can write code quickly in sprints, but if deployment takes 3 months, you aren't truly Agile." }
    ],
    bestPractices: [
      "Combine them. Agile defines the culture of development; DevOps defines the culture of delivery."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "Can DevOps exist without Agile?", a: "Technically yes, you can automate deployments of Waterfall projects. But they are best used together." }
    ],
    quiz: [
      { 
        question: "What is the relationship between Agile and DevOps?", 
        options: ["They are the exact same thing", "Agile replaces DevOps", "Agile focuses on what to build and how teams work; DevOps focuses on how to automate and deliver it", "DevOps is only for networking teams"], 
        answer: "Agile focuses on what to build and how teams work; DevOps focuses on how to automate and deliver it", 
        explanation: "Agile is a software development philosophy; DevOps provides the technical practices to deliver that software continuously." 
      }
    ],
    quickRevision: [
      "Agile = Software Development methodology.",
      "DevOps = Software Delivery and Operations methodology."
    ],
    references: []
  },
  "devops_devops_in_real_companies": {
    id: "devops_devops_in_real_companies",
    title: "14. DevOps in Real Companies",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: false,
    definition: "Real-world implementations of DevOps vary massively depending on company size, regulatory requirements, and existing technical debt.",
    whyUseIt: "Understanding how tech giants and traditional enterprises implement DevOps gives you perspective on industry standards.",
    keyConcepts: [
      { term: "Tech Giants (Netflix/Amazon)", desc: "Pioneers of microservices, Chaos Engineering, and thousands of deployments per day." },
      { term: "Enterprises (Banks/Healthcare)", desc: "Slower adoption due to compliance, heavy reliance on Continuous Delivery rather than Deployment." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "Netflix uses 'Chaos Monkey' to randomly shut down production servers during business hours. Because they have a mature DevOps culture and automated failovers, customers never notice.",
    commonMistakes: [
      { error: "Copying Netflix blindly", code: "", suffix: "Don't introduce Chaos Engineering if your basic CI pipeline isn't even stable yet." }
    ],
    bestPractices: [
      "Adopt DevOps practices that solve your specific bottlenecks.",
      "Focus on low-hanging fruit (like automating tests) before attempting complex orchestrations."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "Why might a highly regulated bank implement DevOps differently than a social media startup?", a: "Banks require strict compliance, auditing, and segregation of duties, meaning they lean heavily on Continuous Delivery (manual approvals) rather than fully automated Deployment." }
    ],
    quiz: [
      { 
        question: "What tool did Netflix invent to test system resiliency in production?", 
        options: ["Jenkins", "Chaos Monkey", "Terraform", "Docker"], 
        answer: "Chaos Monkey", 
        explanation: "Chaos Monkey randomly terminates instances in production to ensure that engineers build resilient, self-healing systems." 
      }
    ],
    quickRevision: [
      "Context matters. Don't adopt a practice just because Google does it."
    ],
    references: []
  },
  "devops_linux_fundamentals": {
    id: "devops_linux_fundamentals",
    title: "15. Linux Fundamentals",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: true,
    definition: "Linux is an open-source, Unix-like operating system kernel. It is the foundation for almost all modern cloud servers and DevOps tooling.",
    whyUseIt: "Most DevOps tools (Docker, Kubernetes, Ansible) are native to Linux. You cannot manage servers or automate infrastructure without a solid understanding of the Linux CLI.",
    keyConcepts: [
      { term: "Kernel", desc: "The core of the OS that manages CPU, memory, and devices." },
      { term: "Shell", desc: "The command-line interface (e.g., Bash) that allows users to interact with the kernel." },
      { term: "Package Manager", desc: "Tools to install software (apt, yum)." }
    ],
    codeExample: {
        ubuntu: "# Update package lists\\nsudo apt-get update\\n\\n# Install curl\\nsudo apt-get install -y curl",
        amazon_linux: "# Update packages\\nsudo yum update -y\\n\\n# Install curl\\nsudo yum install -y curl"
    },
    expectedOutput: {
        ubuntu: "Reading package lists... Done\\nBuilding dependency tree... Done",
        amazon_linux: "Loaded plugins: extras_suggestions, langpacks...\\nNo packages marked for update"
    },
    explanation: [
        { code: "apt-get update / yum update", desc: "Refreshes the local cache of available software packages from the repositories." },
        { code: "install -y", desc: "Installs the package and automatically answers 'yes' to any prompts." }
    ],
    realWorldExample: "A DevOps engineer writes a startup script (user data) to automatically install Node.js and Nginx on a brand new Linux EC2 instance as soon as it boots.",
    commonMistakes: [
      { error: "Forgetting to update before installing", code: "apt-get install nginx", suffix: "Always run 'update' first to ensure you get the latest version." }
    ],
    bestPractices: [
      "Never log in as the 'root' user directly. Log in as a standard user and use 'sudo' for administrative commands."
    ],
    practiceExercise: {
        task: "Update your package manager and install 'htop' and 'git'.",
        expectedOutput: "Both packages are installed successfully.",
        solution: "sudo apt-get update\\nsudo apt-get install -y htop git"
    },
    interviewQuestions: [
      { q: "What is the difference between apt and yum?", a: "They are package managers for different Linux distributions. 'apt' is used by Debian/Ubuntu, while 'yum' is used by RedHat/CentOS/Amazon Linux." }
    ],
    quiz: [
      { 
        question: "What does the 'sudo' command do?", 
        options: ["Shuts down the server", "Executes a command with superuser (root) privileges", "Searches for a file", "Installs a package"], 
        answer: "Executes a command with superuser (root) privileges", 
        explanation: "Sudo stands for 'Superuser do', allowing authorized users to execute administrative commands safely." 
      }
    ],
    quickRevision: [
      "Linux is the OS of the cloud.",
      "Ubuntu uses apt; AWS Linux uses yum."
    ],
    references: []
  },
  "devops_linux_file_system": {
    id: "devops_linux_file_system",
    title: "16. Linux File System",
    difficulty: "Beginner",
    readingTime: "12 min",
    osSpecific: true,
    definition: "The Linux file system is a hierarchical directory structure starting at the 'root' directory (represented by a forward slash '/'). In Linux, everything is considered a file.",
    whyUseIt: "DevOps engineers constantly read logs, edit configuration files, and manage application binaries across the file system.",
    keyConcepts: [
      { term: "/", desc: "The root directory. The top of the file system hierarchy." },
      { term: "/etc", desc: "Contains system-wide configuration files." },
      { term: "/var", desc: "Contains variable data files, most notably system and application logs (/var/log)." },
      { term: "/home", desc: "Contains personal directories for standard users." }
    ],
    codeExample: {
        ubuntu: "# Navigate to the logs directory\\ncd /var/log\\n\\n# List files with detailed information\\nls -la\\n\\n# Print the current working directory\\npwd",
        amazon_linux: "# Navigate to the logs directory\\ncd /var/log\\n\\n# List files with detailed information\\nls -la\\n\\n# Print the current working directory\\npwd"
    },
    expectedOutput: {
        ubuntu: "/var/log\\ntotal 1204\\ndrwxrwxr-x 10 root syslog  4096 Aug 15 10:00 .\\ndrwxr-xr-x 14 root root    4096 Jul 20 08:30 ..",
        amazon_linux: "/var/log\\ntotal 1204\\ndrwxrwxr-x 10 root root  4096 Aug 15 10:00 .\\ndrwxr-xr-x 14 root root  4096 Jul 20 08:30 .."
    },
    explanation: [
        { code: "cd", desc: "Change directory." },
        { code: "ls -la", desc: "List files. '-l' shows long format (permissions, owner, size). '-a' shows hidden files." },
        { code: "pwd", desc: "Print working directory. Tells you exactly where you are." }
    ],
    realWorldExample: "When an Nginx web server crashes, an engineer immediately types 'cd /var/log/nginx' and reads the error log files to diagnose the problem.",
    commonMistakes: [
      { error: "Confusing relative and absolute paths", code: "cd etc/nginx", suffix: "Without a leading slash, the system looks inside your current directory. Use 'cd /etc/nginx'." }
    ],
    bestPractices: [
      "Use tab completion to quickly type long directory paths and avoid typos."
    ],
    practiceExercise: {
        task: "Navigate to the configuration directory and list all hidden files.",
        expectedOutput: "You are in /etc and see files like .pwd.lock",
        solution: "cd /etc\\nls -a"
    },
    interviewQuestions: [
      { q: "Where would you typically find system logs in Linux?", a: "/var/log" },
      { q: "What is stored in the /etc directory?", a: "System-wide configuration files (e.g., /etc/passwd, /etc/nginx/nginx.conf)." }
    ],
    quiz: [
      { 
        question: "What does the 'pwd' command do?", 
        options: ["Prints the working directory", "Changes the password", "Lists processes", "Ping web domains"], 
        answer: "Prints the working directory", 
        explanation: "'pwd' stands for Print Working Directory, showing your current location in the file system." 
      }
    ],
    quickRevision: [
      "/etc = Configs.",
      "/var/log = Logs.",
      "/home = User folders."
    ],
    references: []
  },
  "devops_linux_users_and_groups": {
    id: "devops_linux_users_and_groups",
    title: "17. Linux Users and Groups",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: true,
    definition: "Linux is a multi-user operating system. It relies on Users (individual accounts) and Groups (collections of users) to manage access and security.",
    whyUseIt: "DevOps engineers create specific users to run specific applications (like creating a 'jenkins' user) to ensure that if an application is compromised, the attacker doesn't get full root access.",
    keyConcepts: [
      { term: "Root User", desc: "The superuser with absolute power over the system." },
      { term: "System Users", desc: "Users created specifically to run background services (e.g., nginx, postgres)." },
      { term: "/etc/passwd", desc: "The file that stores user account information." }
    ],
    codeExample: {
        ubuntu: "# Create a new user\\nsudo adduser devops_guy\\n\\n# Add user to the sudo group\\nsudo usermod -aG sudo devops_guy",
        amazon_linux: "# Create a new user\\nsudo useradd devops_guy\\n\\n# Add user to the wheel group (sudo access)\\nsudo usermod -aG wheel devops_guy"
    },
    expectedOutput: {
        ubuntu: "Adding user `devops_guy' ...\\nAdding new group `devops_guy' (1001) ...",
        amazon_linux: "User created."
    },
    explanation: [
        { code: "adduser / useradd", desc: "Creates a new user account on the system." },
        { code: "usermod -aG", desc: "Modifies a user by Appending (-a) them to a supplementary Group (-G)." }
    ],
    realWorldExample: "A company hires a new junior engineer. The DevOps lead creates a user account for them and assigns them to the 'developers' group, which only has read access to the application logs.",
    commonMistakes: [
      { error: "Forgetting the -a flag with usermod", code: "usermod -G sudo user", suffix: "Without '-a', the user is removed from all other groups and ONLY added to sudo." }
    ],
    bestPractices: [
      "Never share the root password. Give individuals their own accounts and grant them sudo access if needed."
    ],
    practiceExercise: {
        task: "Create a group called 'deployers' and add a new user 'deploybot' to it.",
        expectedOutput: "Group and user exist and are linked.",
        solution: "sudo groupadd deployers\\nsudo useradd deploybot\\nsudo usermod -aG deployers deploybot"
    },
    interviewQuestions: [
      { q: "Where is group information stored in Linux?", a: "In the /etc/group file." }
    ],
    quiz: [
      { 
        question: "Why should you run applications as a specific system user rather than root?", 
        options: ["It makes the application run faster", "Security: it limits the damage if the application is hacked", "It saves disk space", "Root cannot run web servers"], 
        answer: "Security: it limits the damage if the application is hacked", 
        explanation: "The principle of least privilege ensures an application only has access to the files it needs, mitigating security breaches." 
      }
    ],
    quickRevision: [
      "Users have IDs (UIDs), Groups have IDs (GIDs).",
      "/etc/passwd stores users, /etc/group stores groups."
    ],
    references: []
  },
  "devops_file_permissions": {
    id: "devops_file_permissions",
    title: "18. File Permissions",
    difficulty: "Intermediate",
    readingTime: "12 min",
    osSpecific: true,
    definition: "Linux file permissions determine who can read, write, or execute a file. They are divided into three categories: Owner, Group, and Others.",
    whyUseIt: "Permissions are the foundation of Linux security. Incorrect permissions can either break an application (it can't read its config) or expose sensitive data (anyone can read passwords).",
    keyConcepts: [
      { term: "Read (r)", desc: "Ability to view the contents of a file or list a directory." },
      { term: "Write (w)", desc: "Ability to modify a file or create/delete files in a directory." },
      { term: "Execute (x)", desc: "Ability to run a file as a program or enter a directory." }
    ],
    codeExample: {
        ubuntu: "# Check permissions of a file\\nls -l script.sh\\n\\n# Output format: -rwxr-xr-- 1 user group 1024 Aug 15 10:00 script.sh",
        amazon_linux: "# Check permissions of a file\\nls -l script.sh\\n\\n# Output format: -rwxr-xr-- 1 user group 1024 Aug 15 10:00 script.sh"
    },
    expectedOutput: {
        ubuntu: "-rwxr-xr-- 1 devops developers 1024 Aug 15 script.sh",
        amazon_linux: "-rwxr-xr-- 1 devops developers 1024 Aug 15 script.sh"
    },
    explanation: [
        { code: "-rwxr-xr--", desc: "First character '-' means it's a file. Next 3 (rwx) are Owner permissions. Next 3 (r-x) are Group permissions. Last 3 (r--) are Others permissions." }
    ],
    realWorldExample: "An SSH key file (id_rsa) must have strict permissions. If 'Others' have read access to it, the SSH client will throw a 'bad permissions' error and refuse to connect for security reasons.",
    commonMistakes: [
      { error: "Setting everything to 777 to fix a permission denied error", code: "chmod 777 file.txt", suffix: "This grants read, write, and execute access to EVERYONE on the system. It is a massive security risk." }
    ],
    bestPractices: [
      "Always apply the principle of least privilege. Give only the exact permissions needed."
    ],
    practiceExercise: {
        task: "Identify the owner and group of the /etc/passwd file.",
        expectedOutput: "Owner: root, Group: root",
        solution: "ls -l /etc/passwd"
    },
    interviewQuestions: [
      { q: "If a file has permissions rwxr-xr--, what can the group do?", a: "The group can Read and Execute the file, but cannot Write (modify) it." }
    ],
    quiz: [
      { 
        question: "What does the first character in the permission string 'drwxr-xr-x' represent?", 
        options: ["Delete", "Directory", "Device", "Download"], 
        answer: "Directory", 
        explanation: "A 'd' at the beginning of the permissions string indicates that the item is a directory, not a regular file." 
      }
    ],
    quickRevision: [
      "r = 4, w = 2, x = 1.",
      "Owner | Group | Others."
    ],
    references: []
  },
  "devops_chmod": {
    id: "devops_chmod",
    title: "19. chmod",
    difficulty: "Intermediate",
    readingTime: "10 min",
    osSpecific: true,
    definition: "chmod stands for 'change mode'. It is the command used to change the read, write, and execute permissions of files and directories in Linux.",
    whyUseIt: "Whenever you write a new bash script, you must use chmod to make it executable before you can run it.",
    keyConcepts: [
      { term: "Symbolic Mode", desc: "Using letters to change permissions (e.g., u+x means give user execute)." },
      { term: "Numeric (Octal) Mode", desc: "Using numbers to change permissions (e.g., 755). r=4, w=2, x=1." }
    ],
    codeExample: {
        ubuntu: "# Symbolic mode: Give owner execute permission\\nchmod u+x deploy.sh\\n\\n# Numeric mode: Set permissions to rwxr-xr-x\\nchmod 755 deploy.sh",
        amazon_linux: "# Symbolic mode: Give owner execute permission\\nchmod u+x deploy.sh\\n\\n# Numeric mode: Set permissions to rwxr-xr-x\\nchmod 755 deploy.sh"
    },
    expectedOutput: {
        ubuntu: "",
        amazon_linux: ""
    },
    explanation: [
        { code: "u+x", desc: "User (owner) gets (+) eXecute permission." },
        { code: "755", desc: "7 (4+2+1) for User: rwx. 5 (4+1) for Group: r-x. 5 (4+1) for Others: r-x." }
    ],
    realWorldExample: "A Jenkins CI pipeline pulls a deployment script from Git. Before it can run the script, it executes 'chmod +x deploy.sh' to ensure it has the rights to execute the file.",
    commonMistakes: [
      { error: "Using recursive chmod carelessly", code: "chmod -R 777 /var/www", suffix: "This makes every file and folder fully accessible, causing severe security vulnerabilities." }
    ],
    bestPractices: [
      "Use numeric mode for bulk exact permission setting, and symbolic mode for quick, single tweaks."
    ],
    practiceExercise: {
        task: "Make a file 'secret.txt' readable and writable ONLY by the owner.",
        expectedOutput: "-rw------- permissions",
        solution: "chmod 600 secret.txt"
    },
    interviewQuestions: [
      { q: "What does the command 'chmod 644 file.txt' do?", a: "It sets the permissions to rw-r--r--, meaning the owner can read/write, and the group and others can only read." }
    ],
    quiz: [
      { 
        question: "In numeric permission mode, what number represents read, write, and execute (rwx)?", 
        options: ["5", "6", "7", "8"], 
        answer: "7", 
        explanation: "Read is 4, Write is 2, and Execute is 1. 4 + 2 + 1 = 7." 
      }
    ],
    quickRevision: [
      "chmod changes permissions.",
      "777 = Everyone can do everything (Avoid!).",
      "600 = Only owner can read/write (Good for secrets)."
    ],
    references: []
  },
  "devops_chown": {
    id: "devops_chown",
    title: "20. chown",
    difficulty: "Beginner",
    readingTime: "8 min",
    osSpecific: true,
    definition: "chown stands for 'change owner'. It is used to change the user ownership and group ownership of files and directories.",
    whyUseIt: "When an application is installed, or files are moved by root, they might end up owned by root. You use chown to give ownership back to the application user (like 'nginx' or 'mysql') so the application can access its files.",
    keyConcepts: [
      { term: "User Ownership", desc: "The specific user account that owns the file." },
      { term: "Group Ownership", desc: "The group account that owns the file." }
    ],
    codeExample: {
        ubuntu: "# Change owner to 'nginx' and group to 'www-data'\\nsudo chown nginx:www-data /var/www/html/index.html\\n\\n# Recursively change ownership of a whole directory\\nsudo chown -R myuser:mygroup /app",
        amazon_linux: "# Change owner to 'nginx' and group to 'nginx'\\nsudo chown nginx:nginx /usr/share/nginx/html/index.html\\n\\n# Recursively change ownership\\nsudo chown -R myuser:mygroup /app"
    },
    expectedOutput: {
        ubuntu: "",
        amazon_linux: ""
    },
    explanation: [
        { code: "nginx:www-data", desc: "The syntax is user:group." },
        { code: "-R", desc: "Recursive flag. Applies the change to the directory and all files inside it." }
    ],
    realWorldExample: "A developer uploads website files via SCP as the 'ubuntu' user. The web server (running as 'www-data') tries to read the files but gets a Permission Denied error. The DevOps engineer runs 'sudo chown -R www-data:www-data /var/www' to fix it.",
    commonMistakes: [
      { error: "Changing ownership of critical system files", code: "chown -R myuser /etc", suffix: "This will break your operating system entirely." }
    ],
    bestPractices: [
      "Double-check your path before using the -R (recursive) flag."
    ],
    practiceExercise: {
        task: "Change the owner of 'config.yml' to 'jenkins' without changing the group.",
        expectedOutput: "Owner is jenkins",
        solution: "sudo chown jenkins config.yml"
    },
    interviewQuestions: [
      { q: "What is the difference between chmod and chown?", a: "chmod changes WHAT actions can be performed (permissions), while chown changes WHO owns the file." }
    ],
    quiz: [
      { 
        question: "Which command changes the owner of a file to 'bob' and the group to 'admins'?", 
        options: ["chown bob,admins file", "chmod bob:admins file", "chown bob:admins file", "chgrp bob admins file"], 
        answer: "chown bob:admins file", 
        explanation: "The correct syntax for chown is chown user:group filename." 
      }
    ],
    quickRevision: [
      "chown user:group filename.",
      "Use -R for directories."
    ],
    references: []
  },
  "devops_processes": {
    id: "devops_processes",
    title: "21. Processes",
    difficulty: "Intermediate",
    readingTime: "12 min",
    osSpecific: true,
    definition: "A process is simply a running instance of a program in Linux. Every command you run and every background service is tracked by the kernel as a process with a unique Process ID (PID).",
    whyUseIt: "When a server is slow or an application crashes, DevOps engineers must inspect running processes to find CPU/Memory hogs or kill hung applications.",
    keyConcepts: [
      { term: "PID", desc: "Process ID - a unique number assigned to every running process." },
      { term: "Foreground vs Background", desc: "Foreground blocks your terminal. Background (using '&') lets you keep typing." },
      { term: "Top / Htop", desc: "Interactive tools to view real-time process resource usage." }
    ],
    codeExample: {
        ubuntu: "# List all currently running processes\\nps aux | grep nginx\\n\\n# Force kill a process by its PID (e.g., 1234)\\nkill -9 1234",
        amazon_linux: "# List all currently running processes\\nps aux | grep nginx\\n\\n# Force kill a process by its PID (e.g., 1234)\\nkill -9 1234"
    },
    expectedOutput: {
        ubuntu: "root      1234  0.0  0.1  12345  6789 ?        Ss   10:00   0:00 nginx: master process",
        amazon_linux: "root      1234  0.0  0.1  12345  6789 ?        Ss   10:00   0:00 nginx: master process"
    },
    explanation: [
        { code: "ps aux", desc: "Displays all running processes for all users." },
        { code: "kill -9", desc: "Sends the SIGKILL signal to forcefully terminate a process immediately." }
    ],
    realWorldExample: "An alert fires that a server's CPU is at 100%. The engineer logs in, types 'top', sees a runaway Java process consuming 99% CPU, finds its PID, and runs 'kill -9' to terminate it and restore service.",
    commonMistakes: [
      { error: "Using kill -9 as the first resort", code: "kill -9 1234", suffix: "kill -9 doesn't allow the program to save data or shut down cleanly. Try 'kill 1234' (SIGTERM) first." }
    ],
    bestPractices: [
      "Always use 'kill' (SIGTERM) before 'kill -9' (SIGKILL).",
      "Use 'htop' instead of 'top' for a much more readable, colorized interface."
    ],
    practiceExercise: {
        task: "Find the PID of a running 'python' script and terminate it gracefully.",
        expectedOutput: "The script stops.",
        solution: "ps aux | grep python\\nkill <PID>"
    },
    interviewQuestions: [
      { q: "What is a zombie process in Linux?", a: "A process that has completed execution but still has an entry in the process table because its parent hasn't read its exit status yet." }
    ],
    quiz: [
      { 
        question: "Which command provides a real-time, dynamic view of running processes and system resource usage?", 
        options: ["ps", "ls", "top", "grep"], 
        answer: "top", 
        explanation: "'top' (and 'htop') continuously update to show CPU and memory usage of active processes." 
      }
    ],
    quickRevision: [
      "ps aux = snapshot of processes.",
      "top = real-time processes.",
      "kill = terminate gently, kill -9 = murder."
    ],
    references: []
  },
  "devops_services": {
    id: "devops_services",
    title: "22. Services",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: true,
    definition: "Services (or daemons) are background processes that run continuously, listening for requests or performing periodic tasks without user intervention (e.g., a web server, a database).",
    whyUseIt: "When you install software like Nginx, Docker, or MySQL, they run as services. You need to know how to start, stop, and ensure they run automatically when the server boots.",
    keyConcepts: [
      { term: "Daemon", desc: "A computer program that runs as a background process (usually ends with 'd', like sshd or httpd)." },
      { term: "Systemd", desc: "The initialization system and service manager for most modern Linux distributions." }
    ],
    codeExample: {
        ubuntu: "# Check the status of the SSH service\\nservice ssh status\\n\\n# Restart the Nginx service\\nservice nginx restart",
        amazon_linux: "# Check the status of the SSH service\\nservice sshd status\\n\\n# Restart the Nginx service\\nservice nginx restart"
    },
    expectedOutput: {
        ubuntu: " * ssh is running",
        amazon_linux: "sshd (pid  1234) is running..."
    },
    explanation: [
        { code: "service <name> status", desc: "Displays whether the background service is running, stopped, or crashed." }
    ],
    realWorldExample: "After deploying new configuration files for a web server, a DevOps engineer must run 'service nginx reload' to make the background service read the new configuration without dropping active connections.",
    commonMistakes: [
      { error: "Forgetting to enable a service", code: "", suffix: "You started the service, but if the server reboots, it won't start automatically unless you 'enable' it." }
    ],
    bestPractices: [
      "Check service logs immediately if a service fails to start."
    ],
    practiceExercise: {
        task: "Stop the cron service.",
        expectedOutput: "Cron is stopped.",
        solution: "sudo service cron stop"
    },
    interviewQuestions: [
      { q: "What is the difference between restarting and reloading a service?", a: "Restart shuts down the process completely and starts it again (dropping connections). Reload tells the running process to re-read its configuration files without dropping active connections." }
    ],
    quiz: [
      { 
        question: "What is a 'daemon' in Linux?", 
        options: ["A computer virus", "A background process that runs continuously", "A specific text editor", "A user group"], 
        answer: "A background process that runs continuously", 
        explanation: "Daemons handle system tasks in the background, such as web servers (httpd) or remote access (sshd)." 
      }
    ],
    quickRevision: [
      "Services run in the background.",
      "The 'service' command is the legacy way to manage them (systemctl is the modern way)."
    ],
    references: []
  },
  "devops_systemctl": {
    id: "devops_systemctl",
    title: "23. systemctl",
    difficulty: "Intermediate",
    readingTime: "12 min",
    osSpecific: true,
    definition: "systemctl is the central management command for systemd, the modern init system used by Ubuntu, CentOS, and Amazon Linux to manage services, system states, and logs.",
    whyUseIt: "It is the modern, powerful replacement for the old 'service' command. DevOps engineers use it to control exactly how and when applications run on a server.",
    keyConcepts: [
      { term: "Unit File", desc: "A configuration file (e.g., nginx.service) that tells systemd how to run the application." },
      { term: "Enable / Disable", desc: "Determines whether the service should start automatically on system boot." }
    ],
    codeExample: {
        ubuntu: "# Start a service\\nsudo systemctl start nginx\\n\\n# Enable service to start on boot\\nsudo systemctl enable nginx\\n\\n# Check detailed status\\nsudo systemctl status nginx",
        amazon_linux: "# Start a service\\nsudo systemctl start nginx\\n\\n# Enable service to start on boot\\nsudo systemctl enable nginx\\n\\n# Check detailed status\\nsudo systemctl status nginx"
    },
    expectedOutput: {
        ubuntu: "● nginx.service - A high performance web server and a reverse proxy server\\n   Loaded: loaded (/lib/systemd/system/nginx.service; enabled)\\n   Active: active (running)",
        amazon_linux: "● nginx.service - The nginx HTTP and reverse proxy server\\n   Loaded: loaded (/usr/lib/systemd/system/nginx.service; enabled)\\n   Active: active (running)"
    },
    explanation: [
        { code: "start", desc: "Turns the service on right now." },
        { code: "enable", desc: "Creates a symlink so the service starts on the next system boot." },
        { code: "status", desc: "Shows whether it is running, enabled, and the most recent log outputs." }
    ],
    realWorldExample: "A DevOps engineer creates a custom Node.js application. They write a 'myapp.service' unit file and use systemctl to ensure the app stays running forever, even if it crashes or the server restarts.",
    commonMistakes: [
      { error: "Editing a unit file without reloading", code: "", suffix: "If you change a .service file, you MUST run 'sudo systemctl daemon-reload' before restarting it." }
    ],
    bestPractices: [
      "Always use systemctl over the legacy 'service' command on modern systems.",
      "Check 'systemctl status' first when troubleshooting a crashed application."
    ],
    practiceExercise: {
        task: "Restart the docker service and check its status.",
        expectedOutput: "Status shows 'active (running)'.",
        solution: "sudo systemctl restart docker\\nsudo systemctl status docker"
    },
    interviewQuestions: [
      { q: "You started a service and it works, but after a server reboot, it didn't start. What did you forget?", a: "You forgot to run 'systemctl enable <service>', which sets it to start automatically on boot." }
    ],
    quiz: [
      { 
        question: "Which command is required after modifying a systemd .service file?", 
        options: ["systemctl restart", "systemctl update", "systemctl daemon-reload", "systemctl reload-all"], 
        answer: "systemctl daemon-reload", 
        explanation: "Systemd caches service files. You must run daemon-reload to tell it to re-read the configuration from disk." 
      }
    ],
    quickRevision: [
      "start/stop/restart = manages right now.",
      "enable/disable = manages boot behavior."
    ],
    references: []
  },
  "devops_journalctl": {
    id: "devops_journalctl",
    title: "24. journalctl",
    difficulty: "Intermediate",
    readingTime: "10 min",
    osSpecific: true,
    definition: "journalctl is a command-line utility used to query and read log data collected by systemd. It centralizes logs from the kernel, initrd, and all services managed by systemd.",
    whyUseIt: "Instead of hunting through dozens of text files in /var/log, journalctl gives DevOps engineers a powerful, centralized way to filter and search logs by time, service, or priority.",
    keyConcepts: [
      { term: "Centralized Logging", desc: "All system and service logs are stored in a binary format managed by systemd-journald." },
      { term: "Filtering", desc: "You can easily view logs for a specific timeframe or a specific service." }
    ],
    codeExample: {
        ubuntu: "# View logs for a specific service\\njournalctl -u nginx.service\\n\\n# Tail the logs in real-time\\njournalctl -f\\n\\n# View logs since the system booted\\njournalctl -b",
        amazon_linux: "# View logs for a specific service\\njournalctl -u nginx.service\\n\\n# Tail the logs in real-time\\njournalctl -f\\n\\n# View logs since the system booted\\njournalctl -b"
    },
    expectedOutput: {
        ubuntu: "Aug 15 10:00:01 server systemd[1]: Started A high performance web server...",
        amazon_linux: "Aug 15 10:00:01 server systemd[1]: Started The nginx HTTP and reverse proxy server..."
    },
    explanation: [
        { code: "-u", desc: "Filters logs by Unit (service name)." },
        { code: "-f", desc: "Follows the journal, printing new entries as they are added (like tail -f)." }
    ],
    realWorldExample: "A custom API service crashes on startup. The engineer runs 'journalctl -u my-api.service -f' and sees a Python traceback error indicating a missing database connection string.",
    commonMistakes: [
      { error: "Forgetting to run with sudo", code: "journalctl -u docker", suffix: "Standard users often can't see service logs. Use sudo." }
    ],
    bestPractices: [
      "Use time filters like '--since \"1 hour ago\"' to narrow down massive logs during an incident."
    ],
    practiceExercise: {
        task: "View only the error messages (priority 3) for the sshd service.",
        expectedOutput: "Only error level logs are displayed.",
        solution: "sudo journalctl -u sshd -p 3"
    },
    interviewQuestions: [
      { q: "How do you view the logs generated since the last server reboot?", a: "By using the command 'journalctl -b'." }
    ],
    quiz: [
      { 
        question: "What does the '-f' flag do in journalctl?", 
        options: ["Forces the logs to delete", "Follows the logs in real-time", "Filters by file name", "Formats the output to JSON"], 
        answer: "Follows the logs in real-time", 
        explanation: "Like 'tail -f', 'journalctl -f' outputs the most recent logs and stays open to stream new ones as they happen." 
      }
    ],
    quickRevision: [
      "journalctl manages systemd logs.",
      "-u for service, -f for follow, -since for time."
    ],
    references: []
  },
  "devops_ssh": {
    id: "devops_ssh",
    title: "25. SSH",
    difficulty: "Beginner",
    readingTime: "12 min",
    osSpecific: true,
    definition: "SSH (Secure Shell) is a cryptographic network protocol for operating network services securely over an unsecured network. It is the primary way DevOps engineers access remote Linux servers.",
    whyUseIt: "You cannot physically plug a monitor into an AWS cloud server. SSH provides a secure, encrypted terminal session to manage remote servers anywhere in the world.",
    keyConcepts: [
      { term: "Public/Private Keys", desc: "An asymmetric cryptography pair. The public key is put on the server; the private key stays on your laptop." },
      { term: "Port 22", desc: "The default networking port used by the SSH protocol." }
    ],
    codeExample: {
        ubuntu: "# Generate a new SSH key pair\\nssh-keygen -t rsa -b 4096\\n\\n# Connect to a remote server\\nssh ubuntu@192.168.1.10 -i ~/.ssh/mykey.pem",
        amazon_linux: "# Generate a new SSH key pair\\nssh-keygen -t rsa -b 4096\\n\\n# Connect to an AWS EC2 instance\\nssh ec2-user@192.168.1.10 -i ~/.ssh/aws-key.pem"
    },
    expectedOutput: {
        ubuntu: "Welcome to Ubuntu 22.04 LTS...\\nubuntu@server:~$",
        amazon_linux: "Amazon Linux 2023...\\n[ec2-user@ip-192-168-1-10 ~]$"
    },
    explanation: [
        { code: "ssh-keygen", desc: "Creates the cryptographic key pair." },
        { code: "ssh user@ip", desc: "Initiates the connection as the specified user to the specified IP address." },
        { code: "-i", desc: "Specifies the identity file (private key) to use for authentication." }
    ],
    realWorldExample: "A developer provisions a new EC2 instance in AWS. They download the .pem file, open their terminal, and SSH into the server to install Docker and start their application.",
    commonMistakes: [
      { error: "Incorrect private key permissions", code: "", suffix: "If your private key is readable by others (e.g., 777), SSH will reject it. It must be chmod 400 or 600." }
    ],
    bestPractices: [
      "Disable password authentication on servers entirely; rely only on SSH keys.",
      "Never share your private key with anyone."
    ],
    practiceExercise: {
        task: "Connect to a server at 10.0.0.5 as the 'root' user.",
        expectedOutput: "Connected to a shell prompt.",
        solution: "ssh root@10.0.0.5"
    },
    interviewQuestions: [
      { q: "Why is key-based authentication preferred over passwords for SSH?", a: "Keys are cryptographically stronger, immune to brute-force guessing attacks, and allow for automated script connections without interactive prompts." }
    ],
    quiz: [
      { 
        question: "What file permission must your private SSH key have for the SSH client to accept it?", 
        options: ["777 (Everyone)", "644 (Read for all)", "400 or 600 (Only owner read/write)", "000 (No access)"], 
        answer: "400 or 600 (Only owner read/write)", 
        explanation: "SSH enforces strict permissions on private keys. If anyone else can read the file, the client throws a 'WARNING: UNPROTECTED PRIVATE KEY FILE' error and aborts." 
      }
    ],
    quickRevision: [
      "Public key = lock on the server.",
      "Private key = key on your laptop.",
      "Default port = 22."
    ],
    references: []
  }
};


let output = 'export const devopsContentBatch1 = {\n';

const fsData = fs.readFileSync('src/data/devopsContentBatch1.js', 'utf8');

// We want to keep topics 1-8 which are currently in the file.
// Let's parse the string to extract them.
// Actually, it is easier to just append the string block for 9-25.
// Wait, to do this perfectly, let's just grab the topics 1-8 from our old script
// No, I can just use JSON.stringify for the new ones, and prepend the old ones.

const startOfTopic9 = fsData.indexOf('"devops_ci_vs_cd"');
if (startOfTopic9 !== -1) {
    const first8 = fsData.substring(0, startOfTopic9);
    output = first8;
} else {
    // Fallback if not found
    output = 'export const devopsContentBatch1 = {\n';
}

const batch1Ids = [
  "devops_ci_vs_cd", "devops_continuous_integration", "devops_continuous_delivery", "devops_continuous_deployment", 
  "devops_devops_vs_agile", "devops_devops_in_real_companies", "devops_linux_fundamentals", "devops_linux_file_system", 
  "devops_linux_users_and_groups", "devops_file_permissions", "devops_chmod", "devops_chown", "devops_processes", 
  "devops_services", "devops_systemctl", "devops_journalctl", "devops_ssh"
];

batch1Ids.forEach((id) => {
  const custom = topicsData[id];
  output += `  "${id}": ${JSON.stringify(custom, null, 4)},\n`;
});

output += '};\n';

fs.writeFileSync('src/data/devopsContentBatch1.js', output);
console.log('devopsContentBatch1.js regenerated with real content for topics 9-25.');
