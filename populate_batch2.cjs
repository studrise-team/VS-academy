const fs = require('fs');

const topicsData = {
  "devops_scp": {
    id: "devops_scp",
    title: "26. SCP",
    difficulty: "Beginner",
    readingTime: "8 min",
    osSpecific: true,
    definition: "SCP (Secure Copy Protocol) is a command-line utility that allows you to securely transfer files and directories between two locations—usually between your local machine and a remote Linux server.",
    whyUseIt: "Before CI/CD pipelines, DevOps engineers manually pushed code and configuration files to servers. SCP remains essential for quick transfers, moving backups, or downloading logs for local analysis.",
    keyConcepts: [
      { term: "SSH Underlying", desc: "SCP uses SSH for data transfer and provides the same authentication and level of security." },
      { term: "Directional", desc: "You can copy from Local to Remote, Remote to Local, or even Remote to Remote." }
    ],
    codeExample: {
      ubuntu: "# Copy file from local to remote\\nscp ./app.js ubuntu@192.168.1.10:/var/www/\\n\\n# Copy entire directory from remote to local\\nscp -r ubuntu@192.168.1.10:/var/log/nginx ./local_logs",
      amazon_linux: "# Copy file from local to remote using key\\nscp -i ~/.ssh/aws-key.pem ./app.js ec2-user@10.0.0.5:/home/ec2-user/\\n\\n# Copy directory from remote to local\\nscp -r -i ~/.ssh/aws-key.pem ec2-user@10.0.0.5:/var/log/ ./logs"
    },
    expectedOutput: {
      ubuntu: "app.js                                100% 1200     1.2MB/s   00:00",
      amazon_linux: "app.js                                100% 1200     1.2MB/s   00:00"
    },
    explanation: [
      { code: "-r", desc: "Recursive flag for copying directories." },
      { code: "-i", desc: "Identity file (private key) for authentication." }
    ],
    realWorldExample: "A database goes down in production. The DevOps engineer uses SCP to securely download a 5GB SQL dump file from the cloud server to their local machine to inspect it without risking further damage to production.",
    commonMistakes: [
      { error: "Forgetting the colon ':' after the IP", code: "scp file.txt user@ip /tmp", suffix: "Without the colon, SCP thinks you want to rename the local file." }
    ],
    bestPractices: [
      "Use rsync instead of SCP for very large or resuming transfers, as SCP will restart from zero if the connection drops."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "Which protocol does SCP rely on for secure data transfer?", 
        options: ["FTP", "HTTP", "SSH", "TCP"], 
        answer: "SSH", 
        explanation: "SCP (Secure Copy Protocol) runs over an SSH connection, ensuring data is encrypted in transit." 
      }
    ],
    quickRevision: [
      "SCP = Secure Copy.",
      "Local to Remote OR Remote to Local."
    ],
    references: []
  },
  "devops_environment_variables": {
    id: "devops_environment_variables",
    title: "27. Environment Variables",
    difficulty: "Intermediate",
    readingTime: "10 min",
    osSpecific: true,
    definition: "Environment Variables are dynamic, named values stored by the operating system that can affect the way running processes behave. They are key-value pairs.",
    whyUseIt: "Hardcoding API keys or database passwords into your code is a massive security risk. Environment variables allow you to configure applications dynamically without changing the code.",
    keyConcepts: [
      { term: "$PATH", desc: "A system variable that tells Linux where to look for executable programs." },
      { term: "export", desc: "The command used in Bash to set a variable so child processes can see it." }
    ],
    codeExample: {
      ubuntu: "# Set a variable\\nexport DB_PASSWORD=supersecret\\n\\n# Read a variable\\necho $DB_PASSWORD\\n\\n# See all variables\\nprintenv",
      amazon_linux: "# Set a variable\\nexport DB_PASSWORD=supersecret\\n\\n# Read a variable\\necho $DB_PASSWORD\\n\\n# See all variables\\nenv"
    },
    expectedOutput: {
      ubuntu: "supersecret",
      amazon_linux: "supersecret"
    },
    explanation: [
      { code: "export", desc: "Makes the variable available to all programs launched from this terminal session." }
    ],
    realWorldExample: "A Node.js app connects to a database using 'process.env.DB_URL'. In development, the variable points to localhost. In production, Docker sets the variable to an AWS RDS instance. The code never changes.",
    commonMistakes: [
      { error: "Spaces around the equals sign", code: "export VAR = value", suffix: "Bash is strict. It must be 'export VAR=value' without spaces." }
    ],
    bestPractices: [
      "Use uppercase letters for environment variable names.",
      "Store persistent variables in ~/.bashrc or ~/.profile."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "What is the purpose of the $PATH environment variable?", 
        options: ["To store the root password", "To specify directories where the system looks for executable files", "To configure network interfaces", "To store SSH keys"], 
        answer: "To specify directories where the system looks for executable files", 
        explanation: "When you type a command like 'ls', the system checks every directory listed in $PATH to find the 'ls' executable." 
      }
    ],
    quickRevision: [
      "export VAR=value.",
      "No spaces around '='.",
      "Never hardcode secrets."
    ],
    references: []
  },
  "devops_bash_scripting": {
    id: "devops_bash_scripting",
    title: "28. Bash Scripting",
    difficulty: "Intermediate",
    readingTime: "12 min",
    osSpecific: true,
    definition: "A Bash script is a plain text file containing a series of commands. These commands are executed sequentially by the Bash shell.",
    whyUseIt: "DevOps is all about automation. If you have to type the same three commands every day, you should write a bash script to do it for you.",
    keyConcepts: [
      { term: "Shebang (#!/bin/bash)", desc: "The first line of the script that tells the OS which interpreter to use." },
      { term: "Variables", desc: "Used to store data (e.g., NAME='John')." },
      { term: "Control Flow", desc: "if/else statements and loops (for, while)." }
    ],
    codeExample: {
      ubuntu: "#!/bin/bash\\n# A simple backup script\\nBACKUP_DIR='/backup'\\nSOURCE_DIR='/var/www/html'\\n\\necho 'Starting backup...'\\ntar -czf $BACKUP_DIR/website_backup_$(date +%F).tar.gz $SOURCE_DIR\\necho 'Backup complete!'",
      amazon_linux: "#!/bin/bash\\n# A simple backup script\\nBACKUP_DIR='/backup'\\nSOURCE_DIR='/var/www/html'\\n\\necho 'Starting backup...'\\ntar -czf $BACKUP_DIR/website_backup_$(date +%F).tar.gz $SOURCE_DIR\\necho 'Backup complete!'"
    },
    expectedOutput: {
      ubuntu: "Starting backup...\\nBackup complete!",
      amazon_linux: "Starting backup...\\nBackup complete!"
    },
    explanation: [
      { code: "tar -czf", desc: "Creates a compressed tarball archive." },
      { code: "$(date +%F)", desc: "Command substitution. Runs the 'date' command and inserts the result (e.g., 2026-08-15) into the filename." }
    ],
    realWorldExample: "A Jenkins CI pipeline runs a bash script called 'build.sh' that automatically fetches dependencies, compiles the code, and creates a Docker image.",
    commonMistakes: [
      { error: "Forgetting to make the script executable", code: "./script.sh", suffix: "Results in 'Permission denied'. You must run 'chmod +x script.sh' first." }
    ],
    bestPractices: [
      "Use 'set -e' at the top of your scripts to make them exit immediately if any command fails.",
      "Quote your variables to prevent word splitting (e.g., \"$VAR\")."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "What does the 'shebang' (#!/bin/bash) do at the top of a script?", 
        options: ["It makes the file executable", "It is just a comment", "It specifies the interpreter to be used to execute the script", "It imports libraries"], 
        answer: "It specifies the interpreter to be used to execute the script", 
        explanation: "The OS reads the shebang to know whether to pass the file to bash, python, or another interpreter." 
      }
    ],
    quickRevision: [
      "Always start with #!/bin/bash.",
      "Use set -e for safety.",
      "chmod +x to run."
    ],
    references: []
  },
  "devops_cron_jobs": {
    id: "devops_cron_jobs",
    title: "29. Cron Jobs",
    difficulty: "Intermediate",
    readingTime: "10 min",
    osSpecific: true,
    definition: "Cron is a time-based job scheduler in Unix-like operating systems. Users set up cron jobs to schedule scripts or commands to run periodically at fixed times, dates, or intervals.",
    whyUseIt: "Essential for automating recurring maintenance tasks like nightly database backups, log rotation, or periodic health checks.",
    keyConcepts: [
      { term: "crontab", desc: "The command used to edit the list of cron jobs (cron table)." },
      { term: "Syntax", desc: "Five asterisks representing: Minute, Hour, Day of Month, Month, Day of Week." }
    ],
    codeExample: {
      ubuntu: "# Open the crontab editor\\ncrontab -e\\n\\n# Add this line to run a backup script every day at 2:30 AM\\n30 2 * * * /opt/scripts/backup.sh >> /var/log/backup.log 2>&1",
      amazon_linux: "# Open the crontab editor\\ncrontab -e\\n\\n# Add this line to run a backup script every day at 2:30 AM\\n30 2 * * * /opt/scripts/backup.sh >> /var/log/backup.log 2>&1"
    },
    expectedOutput: {
      ubuntu: "crontab: installing new crontab",
      amazon_linux: "crontab: installing new crontab"
    },
    explanation: [
      { code: "30 2 * * *", desc: "30th minute of the 2nd hour (2:30 AM), every day, every month, every day of the week." },
      { code: ">> file 2>&1", desc: "Appends both standard output and error output to a log file." }
    ],
    realWorldExample: "A DevOps engineer configures a cron job to run a Python script every 5 minutes (`*/5 * * * *`) that checks if the website is up, and sends a Slack alert if it is down.",
    commonMistakes: [
      { error: "Assuming cron has the same $PATH as your terminal", code: "", suffix: "Cron runs in a very restricted environment. Always use absolute paths (e.g., /usr/bin/node instead of node)." }
    ],
    bestPractices: [
      "Always capture the output of cron jobs to a log file, otherwise errors fail silently.",
      "Use tools like crontab.guru to verify your syntax."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "What schedule does the cron syntax '0 0 * * 0' represent?", 
        options: ["Every day at midnight", "Every Sunday at midnight", "Every hour", "Never"], 
        answer: "Every Sunday at midnight", 
        explanation: "Minute 0, Hour 0, Any day of month, Any month, Day of week 0 (Sunday)." 
      }
    ],
    quickRevision: [
      "Min Hr DoM Mth DoW.",
      "Use absolute paths in scripts.",
      "Log everything."
    ],
    references: []
  },
  "devops_linux_networking_commands": {
    id: "devops_linux_networking_commands",
    title: "30. Linux Networking Commands",
    difficulty: "Beginner",
    readingTime: "12 min",
    osSpecific: true,
    definition: "Linux provides a suite of CLI tools for diagnosing network connectivity, resolving DNS names, and inspecting open ports.",
    whyUseIt: "When an application cannot reach the database, or users cannot reach your website, these commands are your first line of defense to find out WHY.",
    keyConcepts: [
      { term: "ping", desc: "Checks basic connectivity to an IP or domain using ICMP." },
      { term: "curl", desc: "Transfers data to/from a server (great for testing APIs)." },
      { term: "netstat / ss", desc: "Shows open ports and active connections on the machine." }
    ],
    codeExample: {
      ubuntu: "# Check if Google is reachable\\nping -c 4 google.com\\n\\n# Get HTTP headers from a website\\ncurl -I https://google.com\\n\\n# See what ports are listening on the server\\nsudo ss -tuln",
      amazon_linux: "# Check if Google is reachable\\nping -c 4 google.com\\n\\n# Get HTTP headers from a website\\ncurl -I https://google.com\\n\\n# See what ports are listening on the server\\nsudo ss -tuln"
    },
    expectedOutput: {
      ubuntu: "HTTP/2 200\\n...\\nState   Recv-Q   Send-Q   Local Address:Port   Peer Address:Port\\nLISTEN  0        128      0.0.0.0:80           0.0.0.0:*",
      amazon_linux: "HTTP/2 200\\n...\\nState   Recv-Q   Send-Q   Local Address:Port   Peer Address:Port\\nLISTEN  0        128      0.0.0.0:80           0.0.0.0:*"
    },
    explanation: [
      { code: "ss -tuln", desc: "TCP, UDP, Listening, Numeric ports. Shows all open ports." }
    ],
    realWorldExample: "A web server isn't loading. The engineer runs 'ss -tuln' and notices port 80 is not listed. They realize Nginx crashed and isn't listening for traffic.",
    commonMistakes: [
      { error: "Assuming ping proves a port is open", code: "ping 10.0.0.5", suffix: "Ping only checks if the server is alive. It does NOT check if port 80 (HTTP) or 3306 (MySQL) is open. Use telnet or nc for that." }
    ],
    bestPractices: [
      "Use 'curl -v' for verbose output when debugging complex API handshake issues."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "Which command shows the network ports currently listening on your Linux machine?", 
        options: ["ping", "top", "ss (or netstat)", "chmod"], 
        answer: "ss (or netstat)", 
        explanation: "'ss' (socket statistics) is the modern replacement for netstat, used to view open ports and connections." 
      }
    ],
    quickRevision: [
      "ping = basic connection.",
      "curl = web requests.",
      "ss = listening ports."
    ],
    references: []
  },
  "devops_linux_log_management": {
    id: "devops_linux_log_management",
    title: "31. Linux Log Management",
    difficulty: "Intermediate",
    readingTime: "10 min",
    osSpecific: true,
    definition: "Log management involves capturing, storing, rotating, and analyzing text files generated by the OS and applications that record events and errors.",
    whyUseIt: "Logs are the only way to perform post-mortem analysis. If a server crashed at 2 AM, logs tell you why.",
    keyConcepts: [
      { term: "/var/log", desc: "The standard directory where almost all Linux logs are stored." },
      { term: "logrotate", desc: "A utility that compresses and deletes old logs to prevent the hard drive from filling up completely." }
    ],
    codeExample: {
      ubuntu: "# View the last 50 lines of the system log\\ntail -n 50 /var/log/syslog\\n\\n# Search for 'error' in a log file\\ngrep -i 'error' /var/log/nginx/error.log",
      amazon_linux: "# View the last 50 lines of the system log\\ntail -n 50 /var/log/messages\\n\\n# Search for 'error' in a log file\\ngrep -i 'error' /var/log/nginx/error.log"
    },
    expectedOutput: {
      ubuntu: "2026/08/15 10:00:01 [error] 1234#0: *1 open() failed (2: No such file or directory)",
      amazon_linux: "2026/08/15 10:00:01 [error] 1234#0: *1 open() failed (2: No such file or directory)"
    },
    explanation: [
      { code: "tail -n 50", desc: "Outputs the last 50 lines of a file." },
      { code: "grep -i", desc: "Searches for a string, case-insensitive." }
    ],
    realWorldExample: "A server suddenly runs out of disk space. The engineer finds that an application generated a 100GB log file because 'logrotate' was never configured. They configure logrotate to zip and delete logs older than 7 days.",
    commonMistakes: [
      { error: "Opening massive logs with 'cat' or 'vim'", code: "cat /var/log/syslog", suffix: "If the log is 5GB, 'cat' will flood your terminal and 'vim' will crash your server by eating all RAM. Use 'less' or 'tail'." }
    ],
    bestPractices: [
      "Forward logs to a centralized server (like ELK or Datadog) so they aren't lost if the server dies."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "What tool prevents log files from growing indefinitely and consuming all disk space?", 
        options: ["tail", "grep", "logrotate", "journalctl"], 
        answer: "logrotate", 
        explanation: "logrotate automatically rotates, compresses, and removes old log files." 
      }
    ],
    quickRevision: [
      "tail -f = live logs.",
      "grep = search logs.",
      "logrotate = manage disk space."
    ],
    references: []
  },
  "devops_what_is_computer_networking": {
    id: "devops_what_is_computer_networking",
    title: "32. What is Computer Networking?",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: false,
    definition: "Computer networking is the practice of connecting computers and devices together so they can share resources, data, and applications.",
    whyUseIt: "Cloud computing and DevOps rely entirely on networking. Without networks, APIs can't communicate, users can't reach your servers, and databases are isolated.",
    keyConcepts: [
      { term: "LAN / WAN", desc: "Local Area Network (e.g., your house or office) vs Wide Area Network (e.g., the Internet)." },
      { term: "Packets", desc: "Data is chopped into small chunks called packets, sent across the wire, and reassembled at the destination." },
      { term: "OSI Model", desc: "A 7-layer conceptual model used to understand how networks operate (Physical to Application)." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "When a user types 'netflix.com' into their browser, their laptop (Node A) sends packets through their home router, across multiple ISP routers (WAN), until it reaches AWS servers (Node B) hosting Netflix.",
    commonMistakes: [
      { error: "Ignoring the network as a software engineer", code: "", suffix: "You can write perfect code, but if a firewall blocks your API port, the application is completely broken." }
    ],
    bestPractices: [
      "Always assume the network is unreliable. Build retries and timeouts into your applications."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "In networking, what is a packet?", 
        options: ["A physical cable", "A small, formatted unit of data transmitted over a network", "A type of server", "A firewall rule"], 
        answer: "A small, formatted unit of data transmitted over a network", 
        explanation: "Networks break large files into small packets for efficient and reliable transmission." 
      }
    ],
    quickRevision: [
      "Networks connect nodes.",
      "Data travels in packets.",
      "Cloud relies entirely on networking."
    ],
    references: []
  },
  "devops_ip_address": {
    id: "devops_ip_address",
    title: "33. IP Address",
    difficulty: "Beginner",
    readingTime: "8 min",
    osSpecific: false,
    definition: "An IP (Internet Protocol) address is a unique numerical label assigned to every device connected to a computer network. It serves as both an identifier and a location address.",
    whyUseIt: "IP addresses are how computers find each other on the internet. In DevOps, you configure DNS to point to IP addresses, and firewalls to allow or block specific IP addresses.",
    keyConcepts: [
      { term: "Identifier", desc: "Like a phone number for your computer." },
      { term: "Location", desc: "Routing protocols use it to figure out how to send packets to you." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A web server in AWS is assigned the IP address 54.210.10.15. When you deploy a firewall, you write a rule: 'Allow traffic on Port 80, but only to IP 54.210.10.15'.",
    commonMistakes: [
      { error: "Confusing dynamic and static IPs", code: "", suffix: "Cloud instances often change their IP when rebooted (Dynamic) unless you explicitly assign an Elastic/Static IP." }
    ],
    bestPractices: [
      "Never hardcode IP addresses in your application code. Use DNS names instead."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "What is the primary function of an IP address?", 
        options: ["To encrypt data", "To identify a device and its location on a network", "To store files", "To block viruses"], 
        answer: "To identify a device and its location on a network", 
        explanation: "Like a mailing address, an IP allows data to be routed exactly to your device." 
      }
    ],
    quickRevision: [
      "IP = Logical Address.",
      "Dynamic = Changes on reboot.",
      "Static = Permanent."
    ],
    references: []
  },
  "devops_public_vs_private_ip": {
    id: "devops_public_vs_private_ip",
    title: "34. Public vs Private IP",
    difficulty: "Intermediate",
    readingTime: "10 min",
    osSpecific: false,
    definition: "Public IPs are globally unique and routable on the open Internet. Private IPs are restricted to local networks (like a home or corporate network) and cannot be reached directly from the Internet.",
    whyUseIt: "For security and IP conservation, DevOps engineers place databases and internal microservices on Private IPs so hackers cannot access them directly. Only load balancers and web servers get Public IPs.",
    keyConcepts: [
      { term: "Public IP", desc: "Accessible from anywhere. Must be unique globally." },
      { term: "Private IP Ranges (RFC 1918)", desc: "10.x.x.x, 172.16.x.x, and 192.168.x.x. You can use these safely inside your own Virtual Private Cloud (VPC)." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "In an AWS VPC, you create a Public Subnet with a web server (Public IP: 54.2.3.4) and a Private Subnet with a MySQL database (Private IP: 10.0.1.5). The web server can talk to the internet and the database, but the internet cannot reach the database directly.",
    commonMistakes: [
      { error: "Assigning public IPs to databases", code: "", suffix: "This is a massive security risk. Databases should always have private IPs." }
    ],
    bestPractices: [
      "Default to Private IPs for all servers. Only use Public IPs for Load Balancers and Bastion Hosts."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "Can two computers in the world have the same Private IP?", a: "Yes. Millions of home routers assign 192.168.1.10 to a laptop. They are only unique within their own local network." }
    ],
    quiz: [
      { 
        question: "Which of the following is a Private IP address?", 
        options: ["8.8.8.8", "54.210.15.5", "192.168.1.50", "1.1.1.1"], 
        answer: "192.168.1.50", 
        explanation: "The 192.168.x.x block is reserved globally for private, local networks." 
      }
    ],
    quickRevision: [
      "Public = Internet accessible.",
      "Private = Local/VPC only.",
      "Hide databases on Private IPs."
    ],
    references: []
  },
  "devops_ipv4_vs_ipv6": {
    id: "devops_ipv4_vs_ipv6",
    title: "35. IPv4 vs IPv6",
    difficulty: "Beginner",
    readingTime: "8 min",
    osSpecific: false,
    definition: "IPv4 and IPv6 are two versions of the Internet Protocol. IPv4 uses 32-bit addresses (allowing ~4.3 billion devices). IPv6 uses 128-bit addresses, creating a virtually infinite number of IPs.",
    whyUseIt: "We ran out of IPv4 addresses years ago. IPv6 is the modern standard necessary to support the explosion of smartphones, IoT devices, and cloud servers.",
    keyConcepts: [
      { term: "IPv4 Format", desc: "Four decimal numbers separated by dots (e.g., 192.168.1.1)." },
      { term: "IPv6 Format", desc: "Eight groups of hexadecimal numbers separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334)." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A cloud provider charges extra for IPv4 addresses because they are scarce. A company migrates their internal Kubernetes cluster to 'IPv6-only' to save money and simplify network routing.",
    commonMistakes: [
      { error: "Writing regex that only matches IPv4", code: "", suffix: "If your application validates user IPs using an IPv4 regex, it will break for users connecting via mobile networks (which heavily use IPv6)." }
    ],
    bestPractices: [
      "Ensure all custom applications and firewalls support 'Dual Stack' (handling both IPv4 and IPv6 simultaneously)."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "Why was IPv6 created?", 
        options: ["To make the internet faster", "Because the world ran out of available IPv4 addresses", "To replace MAC addresses", "To improve Wi-Fi range"], 
        answer: "Because the world ran out of available IPv4 addresses", 
        explanation: "The 4.3 billion limit of IPv4 was exhausted, requiring a new protocol with 128-bit addressing." 
      }
    ],
    quickRevision: [
      "IPv4 = 32-bit (Numbers/Dots).",
      "IPv6 = 128-bit (Hex/Colons)."
    ],
    references: []
  },
  "devops_mac_address": {
    id: "devops_mac_address",
    title: "36. MAC Address",
    difficulty: "Beginner",
    readingTime: "8 min",
    osSpecific: false,
    definition: "A MAC (Media Access Control) address is a physical, unique hardware identifier burned into a network interface card (NIC) at the factory.",
    whyUseIt: "While IP addresses are used for routing data across the internet (Layer 3), MAC addresses are used for delivering data on the local, physical network segment (Layer 2).",
    keyConcepts: [
      { term: "Format", desc: "Six groups of two hexadecimal digits (e.g., 00:1A:2B:3C:4D:5E)." },
      { term: "Permanent", desc: "IP addresses change when you move networks. MAC addresses are permanent hardware IDs (though they can be spoofed in software)." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "When a packet arrives at your home router from the internet, the router uses an ARP table to translate the Private IP (192.168.1.10) to your laptop's MAC address so the WiFi chip knows exactly which device gets the data.",
    commonMistakes: [
      { error: "Trying to filter global traffic by MAC address", code: "", suffix: "MAC addresses do not cross routers. If a user connects from Starbucks, your AWS server only sees the MAC address of the AWS router, not the user's laptop." }
    ],
    bestPractices: [
      "Use MAC addresses for DHCP reservations (ensuring a specific server always gets the same Private IP)."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "Which of the following is true about MAC addresses?", 
        options: ["They change when you connect to a different WiFi network", "They are physical addresses burned into the network card", "They are used to route traffic across the global internet", "They are 32-bit numbers"], 
        answer: "They are physical addresses burned into the network card", 
        explanation: "MAC addresses operate at Layer 2 and are hardware-specific, unlike logical IP addresses." 
      }
    ],
    quickRevision: [
      "MAC = Physical hardware ID.",
      "Operates on Local Network only.",
      "Cannot cross routers."
    ],
    references: []
  },
  "devops_dns": {
    id: "devops_dns",
    title: "37. DNS",
    difficulty: "Beginner",
    readingTime: "12 min",
    osSpecific: false,
    definition: "DNS (Domain Name System) is the phonebook of the Internet. It translates human-readable domain names (like google.com) into machine-readable IP addresses (like 142.250.190.46).",
    whyUseIt: "Humans cannot remember IP addresses. DevOps engineers manage DNS records to route user traffic to the correct cloud load balancers and servers.",
    keyConcepts: [
      { term: "A Record", desc: "Maps a domain name directly to an IPv4 address." },
      { term: "CNAME Record", desc: "Maps an alias name to a true (canonical) domain name (e.g., www.site.com -> site.com)." },
      { term: "TTL (Time to Live)", desc: "How long DNS resolvers (like your ISP) should cache the record before checking for updates." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A company moves their website from an old server to AWS. The DevOps engineer updates the A Record in Route 53 to point to the new AWS Load Balancer IP. Because the TTL was set to 5 minutes, global users seamlessly hit the new server within minutes.",
    commonMistakes: [
      { error: "Leaving TTL at 24 hours before a migration", code: "", suffix: "If you change the IP, users whose ISPs cached the old IP will be broken for up to 24 hours. Lower the TTL a day before migrating." }
    ],
    bestPractices: [
      "Use Infrastructure as Code (like Terraform) to manage DNS records to prevent accidental deletions."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "What happens if the DNS server goes down?", a: "Users won't be able to reach your website by typing the domain name, even if your actual web servers and IP addresses are perfectly healthy." }
    ],
    quiz: [
      { 
        question: "Which DNS record type maps a domain name to another domain name?", 
        options: ["A Record", "AAAA Record", "TXT Record", "CNAME Record"], 
        answer: "CNAME Record", 
        explanation: "A Canonical Name (CNAME) record maps an alias to another domain, acting as a redirect." 
      }
    ],
    quickRevision: [
      "DNS = Internet Phonebook.",
      "A Record = Domain -> IP.",
      "TTL = Cache timer."
    ],
    references: []
  },
  "devops_dhcp": {
    id: "devops_dhcp",
    title: "38. DHCP",
    difficulty: "Beginner",
    readingTime: "8 min",
    osSpecific: false,
    definition: "DHCP (Dynamic Host Configuration Protocol) is a network protocol used to automatically assign IP addresses and network parameters (like DNS servers) to devices on a network.",
    whyUseIt: "In cloud environments, servers spin up and down by the hundreds. Manually typing static IP configurations into each server is impossible. DHCP automates this entirely.",
    keyConcepts: [
      { term: "Lease", desc: "DHCP gives an IP address to a device for a specific duration (a lease). When it expires, it must be renewed." },
      { term: "DORA Process", desc: "Discover, Offer, Request, Acknowledge - the 4-step handshake process of DHCP." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "When an AWS Auto Scaling group launches 5 new EC2 instances, the AWS DHCP server automatically assigns each one a Private IP from the VPC's CIDR block and configures their default gateways so they instantly have network access.",
    commonMistakes: [
      { error: "Running out of IPs in the DHCP pool", code: "", suffix: "If your subnet only has 254 IPs, and you try to launch 300 Docker containers, DHCP will fail and the extra containers won't get network access." }
    ],
    bestPractices: [
      "Use DHCP reservations for infrastructure (like databases) that need a predictable IP, rather than hardcoding static IPs in the OS."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "What is the primary purpose of DHCP?", 
        options: ["To translate domain names to IPs", "To encrypt network traffic", "To automatically assign IP addresses to devices", "To block unauthorized access"], 
        answer: "To automatically assign IP addresses to devices", 
        explanation: "DHCP eliminates the need for manual IP configuration by automating the assignment." 
      }
    ],
    quickRevision: [
      "DHCP automates IP assignment.",
      "Cloud uses DHCP extensively."
    ],
    references: []
  },
  "devops_http_vs_https": {
    id: "devops_http_vs_https",
    title: "39. HTTP vs HTTPS",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: false,
    definition: "HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. HTTPS is the secure version, where communications are encrypted by TLS/SSL.",
    whyUseIt: "HTTPS is mandatory for modern applications. Without it, anyone on the network (like a public Wi-Fi hacker) can read passwords, session cookies, and sensitive data in plain text.",
    keyConcepts: [
      { term: "Encryption", desc: "Data is scrambled in transit so only the server and client can read it." },
      { term: "Authentication", desc: "SSL Certificates prove the server is actually who it claims to be (e.g., verifying you are on the real bank.com)." },
      { term: "Port 80 vs 443", desc: "HTTP uses Port 80; HTTPS uses Port 443." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A DevOps engineer configures an Application Load Balancer to terminate HTTPS connections. It holds the SSL certificate, decrypts the traffic, and sends standard HTTP traffic to the backend servers to save CPU power.",
    commonMistakes: [
      { error: "Letting SSL certificates expire", code: "", suffix: "If a certificate expires, browsers will throw a massive red warning blocking users from your site." }
    ],
    bestPractices: [
      "Use Let's Encrypt or AWS Certificate Manager for automated, free SSL renewals.",
      "Force redirect all Port 80 (HTTP) traffic to Port 443 (HTTPS)."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "How does HTTPS protect against Man-in-the-Middle attacks?", a: "By encrypting the traffic (so it can't be read) and using certificate authorities to verify the server's identity (so traffic can't be silently intercepted)." }
    ],
    quiz: [
      { 
        question: "Which default port is used by HTTPS?", 
        options: ["21", "80", "443", "8080"], 
        answer: "443", 
        explanation: "HTTP uses 80, while the secure HTTPS protocol defaults to 443." 
      }
    ],
    quickRevision: [
      "HTTPS = HTTP + Encryption.",
      "Requires an SSL/TLS Certificate.",
      "Port 443."
    ],
    references: []
  },
  "devops_tcp_vs_udp": {
    id: "devops_tcp_vs_udp",
    title: "40. TCP vs UDP",
    difficulty: "Intermediate",
    readingTime: "12 min",
    osSpecific: false,
    definition: "TCP and UDP are the two primary transport layer protocols. TCP is reliable and ordered. UDP is fast, fire-and-forget, and unreliable.",
    whyUseIt: "DevOps engineers configure firewalls and load balancers. You must know whether an application uses TCP (like databases and web servers) or UDP (like DNS or video streaming) to configure routing properly.",
    keyConcepts: [
      { term: "TCP (Transmission Control Protocol)", desc: "Connection-oriented. Uses a 3-way handshake. Guarantees delivery (re-sends lost packets)." },
      { term: "UDP (User Datagram Protocol)", desc: "Connectionless. Just throws packets at the destination. No guarantees, but much lower latency." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A company runs a web app (HTTP uses TCP) and a real-time multiplayer game (uses UDP). When setting up the AWS Security Group, the engineer opens TCP port 443 for the web app, and UDP port 9000 for the game servers.",
    commonMistakes: [
      { error: "Opening TCP in a firewall when the app uses UDP", code: "", suffix: "For example, DNS runs on UDP Port 53. If you only open TCP Port 53, DNS resolution will fail." }
    ],
    bestPractices: [
      "Use TCP for anything requiring accuracy (File transfers, Web, Databases).",
      "Use UDP for anything requiring real-time speed where dropped frames are okay (VoIP, Video, Gaming)."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "Why does HTTP use TCP instead of UDP?", a: "Because a webpage cannot be missing random chunks of HTML/CSS. TCP guarantees that every byte of the webpage arrives in the correct order." }
    ],
    quiz: [
      { 
        question: "Which protocol establishes a connection using a '3-way handshake' before sending data?", 
        options: ["UDP", "ICMP", "TCP", "IP"], 
        answer: "TCP", 
        explanation: "TCP requires a SYN, SYN-ACK, ACK handshake to establish a reliable connection." 
      }
    ],
    quickRevision: [
      "TCP = Reliable, ordered, slower (Web, DBs).",
      "UDP = Unreliable, fast (Video, Games)."
    ],
    references: []
  },
  "devops_ports": {
    id: "devops_ports",
    title: "41. Ports",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: false,
    definition: "A port is a logical endpoint for communication. While an IP address identifies a specific machine, a port identifies a specific application running on that machine.",
    whyUseIt: "A server only has one IP address, but it might run a Web Server, an SSH server, and a Database. Ports allow the OS to route incoming traffic to the correct application.",
    keyConcepts: [
      { term: "Range", desc: "Ports range from 0 to 65535." },
      { term: "Well-Known Ports (0-1023)", desc: "Reserved for standard services (e.g., 80 for HTTP, 22 for SSH)." },
      { term: "Ephemeral Ports", desc: "Temporary, high-numbered ports used by client applications when making outbound connections." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "You deploy a Node.js API that listens on Port 3000. You must configure your cloud firewall to allow inbound traffic on Port 3000, otherwise users hitting `http://ip:3000` will be blocked.",
    commonMistakes: [
      { error: "Port conflicts", code: "", suffix: "Only one application can bind to a port at a time. If Apache is using port 80, Nginx cannot start on port 80. You will get a 'bind: address already in use' error." }
    ],
    bestPractices: [
      "Memorize common ports: SSH (22), HTTP (80), HTTPS (443), MySQL (3306), Postgres (5432)."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "Which port is traditionally used for Secure Shell (SSH)?", 
        options: ["21", "22", "80", "3306"], 
        answer: "22", 
        explanation: "Port 22 is the standard port for SSH access." 
      }
    ],
    quickRevision: [
      "IP = Building address.",
      "Port = Apartment number."
    ],
    references: []
  },
  "devops_firewalls": {
    id: "devops_firewalls",
    title: "42. Firewalls",
    difficulty: "Intermediate",
    readingTime: "10 min",
    osSpecific: false,
    definition: "A firewall is a network security device (or software) that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies.",
    whyUseIt: "Firewalls are the primary perimeter defense. Without them, every port on your server is exposed to the public internet, inviting automated hacking bots.",
    keyConcepts: [
      { term: "Inbound vs Outbound Rules", desc: "Controlling traffic coming IN to the server vs traffic going OUT." },
      { term: "Stateful Firewalls", desc: "If they allow an inbound connection, they automatically allow the return outbound response." },
      { term: "Security Groups", desc: "The AWS implementation of software firewalls attached to EC2 instances." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A DevOps engineer configures a database firewall (Security Group). The rule states: Allow inbound TCP Port 3306 ONLY from the IP address of the Web Server. All other internet traffic is dropped.",
    commonMistakes: [
      { error: "0.0.0.0/0 on sensitive ports", code: "", suffix: "Allowing Port 22 (SSH) or Port 3306 (DB) from 0.0.0.0/0 (the entire internet) guarantees you will be brute-forced." }
    ],
    bestPractices: [
      "Default Deny: Block everything by default, and only explicitly allow what is needed (Principle of Least Privilege)."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "What is the difference between an AWS Security Group and a Network ACL?", a: "Security Groups are stateful and operate at the instance level. Network ACLs are stateless and operate at the subnet level." }
    ],
    quiz: [
      { 
        question: "What does the CIDR block 0.0.0.0/0 represent in a firewall rule?", 
        options: ["The localhost", "The entire internet (All IPv4 addresses)", "Only the local network", "A specific private IP"], 
        answer: "The entire internet (All IPv4 addresses)", 
        explanation: "0.0.0.0/0 matches every possible IPv4 address, effectively opening the port to the public." 
      }
    ],
    quickRevision: [
      "Firewalls block/allow traffic.",
      "Default Deny is best practice.",
      "AWS uses Security Groups."
    ],
    references: []
  },
  "devops_nat": {
    id: "devops_nat",
    title: "43. NAT",
    difficulty: "Intermediate",
    readingTime: "10 min",
    osSpecific: false,
    definition: "NAT (Network Address Translation) is a method of mapping multiple Private IP addresses into a single Public IP address before transferring the information to the Internet.",
    whyUseIt: "It conserves public IPs and adds security. Servers in private subnets cannot talk to the internet. A NAT Gateway allows them to download updates from the internet without being directly exposed to it.",
    keyConcepts: [
      { term: "NAT Gateway", desc: "A managed cloud device that sits in a Public Subnet but serves instances in a Private Subnet." },
      { term: "Outbound Only", desc: "NAT allows private instances to initiate outbound connections to the internet, but blocks unsolicited inbound connections from the internet." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A backend database sitting on a Private IP needs to download a security patch from Ubuntu's servers. Its traffic goes to the NAT Gateway, which masks the database's Private IP with its own Public IP, fetches the patch, and returns it securely to the database.",
    commonMistakes: [
      { error: "Putting NAT Gateways in private subnets", code: "", suffix: "A NAT Gateway must live in a PUBLIC subnet with an Internet Gateway, otherwise it can't reach the internet either." }
    ],
    bestPractices: [
      "Use managed NAT Gateways instead of self-hosted NAT instances for high availability and maintenance-free operation."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "Why would you use a NAT Gateway in AWS?", 
        options: ["To load balance web traffic", "To allow instances in a private subnet to access the internet securely", "To provide SSH access to developers", "To speed up database queries"], 
        answer: "To allow instances in a private subnet to access the internet securely", 
        explanation: "NAT translates the private IPs to a public IP, enabling outbound internet access without allowing inbound access." 
      }
    ],
    quickRevision: [
      "NAT translates Private to Public.",
      "Enables secure outbound internet for private servers."
    ],
    references: []
  },
  "devops_load_balancing": {
    id: "devops_load_balancing",
    title: "44. Load Balancing",
    difficulty: "Intermediate",
    readingTime: "12 min",
    osSpecific: false,
    definition: "Load balancing refers to efficiently distributing incoming network traffic across a group of backend servers, also known as a server farm or server pool.",
    whyUseIt: "A single server will crash under heavy traffic. Load balancers allow you to scale horizontally (add more servers) and provide high availability if one server dies.",
    keyConcepts: [
      { term: "Health Checks", desc: "The LB constantly pings backend servers. If one stops responding, it stops sending traffic to it." },
      { term: "Algorithms", desc: "Round Robin (taking turns), Least Connections (send to the least busy server)." },
      { term: "SSL Termination", desc: "The LB handles the heavy cryptographic work of HTTPS, relieving the backend servers." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "During Black Friday, a retailer scales from 2 to 20 web servers. The Load Balancer automatically detects the new servers and spreads user requests evenly across all 20, ensuring no single server is overwhelmed.",
    commonMistakes: [
      { error: "Storing session state on servers", code: "", suffix: "If a user logs in on Server A, and the LB sends their next request to Server B, they will be logged out. Use sticky sessions, or better, store sessions in Redis." }
    ],
    bestPractices: [
      "Always design stateless applications to make load balancing seamless.",
      "Use Application Load Balancers (Layer 7) for HTTP routing based on URL paths."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "What happens if a backend server fails behind a Load Balancer?", a: "The Load Balancer's health checks fail. It removes the dead server from the pool and routes all new traffic to the remaining healthy servers." }
    ],
    quiz: [
      { 
        question: "What mechanism does a Load Balancer use to ensure it doesn't send traffic to a crashed server?", 
        options: ["Round Robin", "SSL Termination", "Health Checks", "DNS Caching"], 
        answer: "Health Checks", 
        explanation: "Health checks continuously monitor the backend; if a server fails, it is temporarily removed from the rotation." 
      }
    ],
    quickRevision: [
      "Distributes traffic.",
      "Enables high availability and scaling.",
      "Requires stateless apps."
    ],
    references: []
  },
  "devops_reverse_proxy": {
    id: "devops_reverse_proxy",
    title: "45. Reverse Proxy",
    difficulty: "Intermediate",
    readingTime: "10 min",
    osSpecific: false,
    definition: "A reverse proxy is a server that sits in front of web servers and forwards client requests to those web servers. It acts as an intermediary, shielding the backend servers from direct internet exposure.",
    whyUseIt: "DevOps uses tools like Nginx or HAProxy as reverse proxies to provide caching, compression, SSL termination, and security. It hides the internal network architecture from the outside world.",
    keyConcepts: [
      { term: "Nginx / HAProxy", desc: "The most common open-source reverse proxy software." },
      { term: "Single Entry Point", desc: "Clients only ever talk to the proxy; they never know the backend server exists." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "You have a Node.js app running on Port 3000, and a Python API on Port 5000. You set up Nginx as a reverse proxy on Port 80. Nginx reads the URL path and silently routes traffic to Node or Python appropriately.",
    commonMistakes: [
      { error: "Losing the client's real IP", code: "", suffix: "Because the proxy forwards the request, the backend server thinks every request comes from the proxy's IP. You must configure the proxy to forward the 'X-Forwarded-For' header." }
    ],
    bestPractices: [
      "Use reverse proxies to handle static files (images, CSS) so your application servers can focus on dynamic logic."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "Which popular open-source software is widely used as a reverse proxy?", 
        options: ["MySQL", "Nginx", "Git", "Jenkins"], 
        answer: "Nginx", 
        explanation: "Nginx is renowned for its high performance as both a web server and a reverse proxy." 
      }
    ],
    quickRevision: [
      "Sits in front of backend servers.",
      "Hides backend infrastructure.",
      "Handles SSL and routing."
    ],
    references: []
  },
  "devops_proxy_vs_reverse_proxy": {
    id: "devops_proxy_vs_reverse_proxy",
    title: "46. Proxy vs Reverse Proxy",
    difficulty: "Intermediate",
    readingTime: "8 min",
    osSpecific: false,
    definition: "A Forward Proxy protects CLIENTS (acting on behalf of users). A Reverse Proxy protects SERVERS (acting on behalf of the backend).",
    whyUseIt: "Understanding the direction of traffic is vital. You configure forward proxies to control what your employees can browse. You configure reverse proxies to control how the internet reaches your applications.",
    keyConcepts: [
      { term: "Forward Proxy", desc: "Sits in front of client machines. (e.g., A corporate proxy that blocks Facebook for employees)." },
      { term: "Reverse Proxy", desc: "Sits in front of web servers. (e.g., Nginx accepting public traffic and routing it to internal microservices)." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A school uses a FORWARD proxy to stop students from visiting gaming sites. Netflix uses a REVERSE proxy to route your movie request to the least busy internal server.",
    commonMistakes: [
      { error: "Confusing the terminology", code: "", suffix: "Remember: Forward protects the sender. Reverse protects the receiver." }
    ],
    bestPractices: [
      "Implement forward proxies in corporate networks for egress filtering (stopping malware from phoning home)."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "Which type of proxy is used by a company to hide and protect its internal backend web servers?", 
        options: ["Forward Proxy", "Reverse Proxy", "Transparent Proxy", "Anonymous Proxy"], 
        answer: "Reverse Proxy", 
        explanation: "A reverse proxy sits in front of web servers, handling incoming internet traffic on their behalf." 
      }
    ],
    quickRevision: [
      "Forward Proxy = Shields Clients.",
      "Reverse Proxy = Shields Servers."
    ],
    references: []
  },
  "devops_ssh_networking": {
    id: "devops_ssh",
    title: "47. SSH",
    difficulty: "Intermediate",
    readingTime: "10 min",
    osSpecific: true,
    definition: "SSH (Secure Shell) as a networking tool goes beyond simple terminal access. It is heavily used in DevOps for secure file transfers, automated remote execution, and network port forwarding (tunneling).",
    whyUseIt: "You can use SSH tunneling to securely access a private database from your local machine, without exposing the database to the public internet.",
    keyConcepts: [
      { term: "Local Port Forwarding", desc: "Forwarding a local port on your machine through the SSH connection to a remote internal server." },
      { term: "Bastion Host / Jump Server", desc: "A secure, public-facing SSH server used exclusively to 'jump' into private servers in a VPC." }
    ],
    codeExample: {
      ubuntu: "# Port Forwarding: Map local port 8080 to a remote private DB on 3306\\nssh -L 8080:10.0.1.5:3306 ubuntu@bastion-ip",
      amazon_linux: "# Port Forwarding: Map local port 8080 to a remote private DB on 3306\\nssh -L 8080:10.0.1.5:3306 ec2-user@bastion-ip"
    },
    expectedOutput: {
      ubuntu: "",
      amazon_linux: ""
    },
    explanation: [
      { code: "-L", desc: "Specifies local port forwarding." },
      { code: "8080:10.0.1.5:3306", desc: "Local port 8080 is tunneled to Private IP 10.0.1.5 on port 3306." }
    ],
    realWorldExample: "A database is completely sealed off in a Private Subnet. To run a SQL query from their laptop, a developer creates an SSH tunnel through a Bastion host. They connect their local SQL GUI to 'localhost:8080', and SSH securely tunnels the traffic to the private DB.",
    commonMistakes: [
      { error: "Leaving tunnels open", code: "", suffix: "Always close tunnels when finished, as they represent a backdoor into the private network." }
    ],
    bestPractices: [
      "Use SSH Config files (~/.ssh/config) to simplify complex jump-host commands."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "What is a 'Bastion Host' or 'Jump Box'?", 
        options: ["A load balancer", "A heavily secured, public-facing server used solely to SSH into private internal servers", "A database server", "A DNS resolver"], 
        answer: "A heavily secured, public-facing server used solely to SSH into private internal servers", 
        explanation: "Bastion hosts reduce the attack surface by being the single, tightly monitored entry point into a private network." 
      }
    ],
    quickRevision: [
      "SSH Tunneling = Securely route ports.",
      "Bastion Host = Jump server for private networks."
    ],
    references: []
  },
  "devops_common_networking_commands": {
    id: "devops_common_networking_commands",
    title: "48. Common Networking Commands",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: true,
    definition: "A recap of essential diagnostic tools: ping, traceroute, dig, and nslookup. These are the daily drivers for troubleshooting network flow.",
    whyUseIt: "When an application fails, you must isolate the layer. Is it a DNS issue? A routing issue? A blocked port? These commands give you the answer.",
    keyConcepts: [
      { term: "traceroute", desc: "Shows the exact path (and every router) packets take to reach a destination." },
      { term: "dig", desc: "Queries DNS servers to return specific DNS records (A, CNAME, TXT)." }
    ],
    codeExample: {
      ubuntu: "# Trace the route to Google\\ntraceroute google.com\\n\\n# Perform a DNS lookup\\ndig google.com",
      amazon_linux: "# Trace the route to Google\\ntraceroute google.com\\n\\n# Perform a DNS lookup\\ndig google.com"
    },
    expectedOutput: {
      ubuntu: "; <<>> DiG 9.16.1-Ubuntu <<>> google.com\\n;; ANSWER SECTION:\\ngoogle.com.             246     IN      A       142.250.190.46",
      amazon_linux: "; <<>> DiG 9.16.1 <<>> google.com\\n;; ANSWER SECTION:\\ngoogle.com.             246     IN      A       142.250.190.46"
    },
    explanation: [
      { code: "dig", desc: "Domain Information Groper. Returns detailed DNS resolution data." }
    ],
    realWorldExample: "A user complains they can't reach the API. The engineer runs 'dig api.company.com' and sees it resolves to an old IP address. They realize the DNS cache hasn't cleared yet.",
    commonMistakes: [
      { error: "Confusing ping failures with downtime", code: "", suffix: "Many modern firewalls (including AWS by default) block ICMP ping requests. A server might be perfectly healthy but won't respond to ping." }
    ],
    bestPractices: [
      "Use 'dig' over the legacy 'nslookup' for DNS troubleshooting, as it provides much richer output."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "Which command is used to query DNS servers for information about domain names?", 
        options: ["ping", "traceroute", "dig", "curl"], 
        answer: "dig", 
        explanation: "'dig' is a powerful tool for interrogating DNS name servers." 
      }
    ],
    quickRevision: [
      "traceroute = see the path.",
      "dig = test DNS."
    ],
    references: []
  },
  "devops_what_is_version_control": {
    id: "devops_what_is_version_control",
    title: "49. What is Version Control?",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: false,
    definition: "Version Control Systems (VCS) are software tools that help teams manage changes to source code over time. They keep track of every modification to the code in a special kind of database.",
    whyUseIt: "Without VCS, developers overwrite each other's work, and if a bug is introduced, there is no way to revert to the previous working version. It is the absolute foundation of DevOps.",
    keyConcepts: [
      { term: "History", desc: "You can see exactly who changed what line of code, why, and when." },
      { term: "Branching", desc: "Allows developers to work on new features in isolated parallel universes without breaking the main codebase." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A developer deletes a critical configuration file by accident. Because the project uses Version Control, the DevOps engineer simply types 'git revert' to magically restore the file to exactly how it was 5 minutes ago.",
    commonMistakes: [
      { error: "Copy-pasting folders", code: "", suffix: "Using folders named 'Project_v1', 'Project_v2_Final' is an anti-pattern. VCS solves this." }
    ],
    bestPractices: [
      "Everything as Code: Not just app code, but infrastructure (Terraform) and CI/CD pipelines must be stored in Version Control."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "Why is Version Control considered step zero of DevOps?", a: "Because automation requires a single source of truth. CI/CD pipelines are triggered by Version Control events (like a commit)." }
    ],
    quiz: [
      { 
        question: "What is the primary benefit of Version Control?", 
        options: ["It writes code for you", "It tracks history and prevents developers from overwriting each other's work", "It compiles code faster", "It hosts websites"], 
        answer: "It tracks history and prevents developers from overwriting each other's work", 
        explanation: "VCS acts as a time machine and collaboration tool for code." 
      }
    ],
    quickRevision: [
      "VCS tracks all changes.",
      "Allows collaboration and reverting."
    ],
    references: []
  },
  "devops_git_vs_github": {
    id: "devops_git_vs_github",
    title: "50. Git vs GitHub",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: false,
    definition: "Git is the actual software installed on your local computer that manages version control. GitHub is a cloud-based hosting service that lets you manage Git repositories on the internet.",
    whyUseIt: "This is a common point of confusion for beginners. You use Git offline to track your changes. You use GitHub online to share those changes with your team.",
    keyConcepts: [
      { term: "Git (The Engine)", desc: "The command-line tool you run locally (e.g., git commit)." },
      { term: "GitHub (The Cloud)", desc: "A website (like GitLab or Bitbucket) that hosts your Git repositories so others can see them." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "You use GIT on your laptop during a flight without wifi to save versions of your code. When you land and get internet, you push that code to GITHUB so your coworkers in another country can review it.",
    commonMistakes: [
      { error: "Thinking GitHub is the only option", code: "", suffix: "Git is universal. You can push Git code to GitHub, GitLab, Bitbucket, or even your own private server." }
    ],
    bestPractices: [
      "Use GitHub (or GitLab) features like Pull Requests and Issue Tracking to manage project management alongside the code."
    ],
    practiceExercise: null,
    interviewQuestions: [],
    quiz: [
      { 
        question: "Which of the following is true?", 
        options: ["Git requires an internet connection", "GitHub is the command-line tool installed on your PC", "Git is the version control software; GitHub is a cloud hosting service for Git", "They are the exact same thing"], 
        answer: "Git is the version control software; GitHub is a cloud hosting service for Git", 
        explanation: "Git is the engine running locally. GitHub is the cloud platform hosting the repositories." 
      }
    ],
    quickRevision: [
      "Git = Local Tool.",
      "GitHub = Cloud Host."
    ],
    references: []
  }
};


let output = 'export const devopsContentBatch2 = {\n';

const batch2Ids = [
  "devops_scp", "devops_environment_variables", "devops_bash_scripting", "devops_cron_jobs", 
  "devops_linux_networking_commands", "devops_linux_log_management", "devops_what_is_computer_networking", 
  "devops_ip_address", "devops_public_vs_private_ip", "devops_ipv4_vs_ipv6", "devops_mac_address", 
  "devops_dns", "devops_dhcp", "devops_http_vs_https", "devops_tcp_vs_udp", "devops_ports", 
  "devops_firewalls", "devops_nat", "devops_load_balancing", "devops_reverse_proxy", 
  "devops_proxy_vs_reverse_proxy", "devops_ssh", "devops_common_networking_commands", 
  "devops_what_is_version_control", "devops_git_vs_github"
];

batch2Ids.forEach((id) => {
  const custom = topicsData[id];
  output += `  "${id}": ${JSON.stringify(custom, null, 4)},\n`;
});

output += '};\n';

// Write to devopsContentBatch2.js
fs.writeFileSync('src/data/devopsContentBatch2.js', output);
console.log('devopsContentBatch2.js regenerated with real content for topics 26-50.');
