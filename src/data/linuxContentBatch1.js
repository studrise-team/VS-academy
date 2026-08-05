const commonReferences = [
  { label: 'Linux Documentation', url: 'https://linux.die.net/' },
  { label: 'Ubuntu Official Docs', url: 'https://help.ubuntu.com/' }
];

export const linuxContentBatch1 = {
  'linux_what_is': {
    isStructured: true,
    title: '1. What is Linux?',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'Linux is a free, open-source operating system (OS) kernel that manages hardware resources and provides a platform for applications to run.',
    whyUseIt: 'Unlike Windows or macOS, Linux is incredibly stable, highly secure, deeply customizable, and powers the majority of the world\'s servers, smartphones (Android), and supercomputers.',
    syntax: '-- Conceptual',
    codeExample: '# Checking your Linux version\nuname -a',
    hasLiveOutput: false,
    expectedOutput: 'Linux hostname 5.15.0-71-generic #78-Ubuntu SMP... x86_64 GNU/Linux',
    explanation: [
      { code: 'Kernel', desc: 'The core of the OS that talks directly to the CPU, Memory, and Devices.' },
      { code: 'Open Source', desc: 'The source code is freely available for anyone to view, modify, and distribute.' }
    ],
    realWorldExample: 'When you browse a website, there is a 90% chance the web server delivering that site is running Linux.',
    commonMistakes: [
      { error: 'Thinking Linux is a single OS like Windows', code: '', suffix: 'Linux is just a kernel. It is packaged into hundreds of different operating systems called "Distributions" (like Ubuntu, Fedora).' }
    ],
    bestPractices: ['Embrace the command line terminal—it is where Linux truly shines compared to GUI-based systems.'],
    practiceExercise: {
      task: 'What is the core component of the Linux operating system called?',
      expectedOutput: 'Kernel',
      solution: 'Kernel'
    },
    quiz: [
      { question: 'What is Linux?', options: ['An application', 'An open-source operating system kernel', 'A web browser', 'A programming language'], answer: 'An open-source operating system kernel' },
      { question: 'Which of the following relies heavily on Linux?', options: ['Android', 'Web Servers', 'Supercomputers', 'All of the above'], answer: 'All of the above' },
      { question: 'Is Linux completely free to use?', options: ['Yes', 'No, requires a license', 'Only for non-commercial use', 'Only on weekends'], answer: 'Yes' },
      { question: 'What does "Open Source" mean?', options: ['The code is hidden', 'The code is freely available to modify and share', 'It is made by Apple', 'It is immune to viruses'], answer: 'The code is freely available to modify and share' },
      { question: 'What is the core of the Linux OS that interacts with the hardware called?', options: ['The Shell', 'The Terminal', 'The Kernel', 'The GUI'], answer: 'The Kernel' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between Linux and an Operating System like Ubuntu?', a: 'Linux strictly refers to the kernel (the core that talks to the hardware). Ubuntu is a complete Operating System (a "Distribution") that bundles the Linux kernel with a graphical interface, package manager, and applications.' }
    ],
    summary: ['Linux is an open-source OS kernel.', 'Powers most of the internet.', 'Highly secure and stable.'],
    references: commonReferences
  },

  'linux_history': {
    isStructured: true,
    title: '2. History of Linux',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'Linux was created in 1991 by a Finnish student named Linus Torvalds as a free alternative to the MINIX operating system.',
    whyUseIt: 'Understanding its history explains why Linux is open-source and why there are so many different versions (distributions) today.',
    syntax: '-- Conceptual',
    codeExample: '# The first announcement by Linus Torvalds:\n"I\'m doing a (free) operating system (just a hobby, won\'t be big and professional like gnu)..."',
    hasLiveOutput: false,
    expectedOutput: 'A legendary historical quote.',
    explanation: [
      { code: 'Linus Torvalds', desc: 'The original creator and current principal developer of the Linux kernel.' },
      { code: 'GNU Project', desc: 'Started by Richard Stallman to create a free OS. It provided the tools, Linux provided the kernel (GNU/Linux).' }
    ],
    realWorldExample: 'Because of its open-source history, companies like Google, IBM, and Microsoft now actively contribute millions of dollars to Linux development.',
    commonMistakes: [
      { error: 'Calling it just "Linux" instead of "GNU/Linux"', code: '', suffix: 'While colloquially called Linux, the full system is technically GNU/Linux, as the GNU project provided the compiler, shell, and utilities.' }
    ],
    bestPractices: ['Remember that Linux thrives on community contribution. Consider contributing to open-source projects!'],
    practiceExercise: {
      task: 'Who created the Linux kernel?',
      expectedOutput: 'Linus Torvalds',
      solution: 'Linus Torvalds'
    },
    quiz: [
      { question: 'Who created Linux?', options: ['Bill Gates', 'Steve Jobs', 'Linus Torvalds', 'Richard Stallman'], answer: 'Linus Torvalds' },
      { question: 'In what year was Linux announced?', options: ['1981', '1991', '2001', '2011'], answer: '1991' },
      { question: 'What OS was Linus Torvalds trying to create a free alternative to?', options: ['Windows', 'macOS', 'MINIX/Unix', 'DOS'], answer: 'MINIX/Unix' },
      { question: 'What project provided the essential utilities (like the shell and compiler) that run on top of the Linux kernel?', options: ['The Apache Project', 'The GNU Project', 'The Mozilla Project', 'The Android Project'], answer: 'The GNU Project' },
      { question: 'What animal is the official mascot of Linux?', options: ['A Dog', 'A Penguin (Tux)', 'A Cat', 'A Lion'], answer: 'A Penguin (Tux)' }
    ],
    interviewQuestions: [
      { q: 'Why is it often referred to as GNU/Linux rather than just Linux?', a: 'Because the Linux kernel alone is useless without applications. Richard Stallman\'s GNU project provided the core utilities, C compiler, and bash shell that allowed the Linux kernel to actually function as a usable operating system.' }
    ],
    summary: ['Created by Linus Torvalds in 1991.', 'Combined with GNU utilities.', 'Mascot is Tux the Penguin.'],
    references: commonReferences
  },

  'linux_distributions': {
    isStructured: true,
    title: '3. Linux Distributions',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'A Linux Distribution (or "Distro") is an operating system made from a software collection that is based upon the Linux kernel and, often, a package management system.',
    whyUseIt: 'Different users need different things. Servers need stability (CentOS/Ubuntu Server), hackers need security tools (Kali Linux), and daily users need ease of use (Ubuntu/Mint).',
    syntax: '-- Conceptual',
    codeExample: '# Check which distribution you are running:\ncat /etc/os-release',
    hasLiveOutput: false,
    expectedOutput: 'PRETTY_NAME="Ubuntu 22.04 LTS"\nNAME="Ubuntu"',
    explanation: [
      { code: 'Debian Family', desc: 'Includes Ubuntu, Linux Mint, Kali. Uses .deb packages.' },
      { code: 'Red Hat Family', desc: 'Includes Fedora, CentOS, RHEL. Uses .rpm packages.' },
      { code: 'Arch Family', desc: 'Includes Arch Linux, Manjaro. Rolling release model.' }
    ],
    realWorldExample: 'A software company might use Ubuntu for their developer laptops (ease of use) but deploy their code to CentOS servers (enterprise stability).',
    commonMistakes: [
      { error: 'Assuming all commands work on all distros', code: '', suffix: 'While basic commands (`ls`, `cd`) work everywhere, package managers vary wildly (`apt` on Ubuntu vs `yum` on CentOS).' }
    ],
    bestPractices: ['If you are a beginner, start with Ubuntu or Linux Mint. They have the largest community support.'],
    practiceExercise: {
      task: 'What family of Linux does Ubuntu belong to?',
      expectedOutput: 'Debian',
      solution: 'Debian'
    },
    quiz: [
      { question: 'What is a Linux "Distro"?', options: ['A virus', 'A complete OS built around the Linux kernel', 'A text editor', 'A hardware component'], answer: 'A complete OS built around the Linux kernel' },
      { question: 'Which distribution is heavily favored by beginners and has huge community support?', options: ['Arch Linux', 'Gentoo', 'Ubuntu', 'Slackware'], answer: 'Ubuntu' },
      { question: 'Which family does CentOS and Fedora belong to?', options: ['Debian', 'Red Hat (RHEL)', 'Arch', 'SUSE'], answer: 'Red Hat (RHEL)' },
      { question: 'Kali Linux is a distro designed specifically for what purpose?', options: ['Gaming', 'Video Editing', 'Penetration Testing / Cybersecurity', 'Database Hosting'], answer: 'Penetration Testing / Cybersecurity' },
      { question: 'Which file shows you what distribution you are currently running?', options: ['/etc/os-release', '/var/log', '/home/user', '/bin/bash'], answer: '/etc/os-release' }
    ],
    interviewQuestions: [
      { q: 'What is the primary difference between the Debian (Ubuntu) and Red Hat (CentOS) families?', a: 'The primary difference is their package management systems. Debian-based systems use `apt` and `.deb` files, whereas Red Hat-based systems use `yum`/`dnf` and `.rpm` files. They also have different file system hierarchies and default configurations.' }
    ],
    summary: ['Distros are OS flavors.', 'Ubuntu is great for beginners.', 'Servers often use RHEL/Ubuntu Server.'],
    references: commonReferences
  },

  'linux_architecture': {
    isStructured: true,
    title: '4. Linux Architecture',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'The Linux architecture consists of distinct layers: Hardware, Kernel, Shell, and Applications/Utilities.',
    whyUseIt: 'Understanding how layers interact helps you troubleshoot why a command fails or a device doesn\'t work.',
    syntax: '-- Conceptual',
    codeExample: 'Applications (e.g., Firefox, Vim)\n       ↑↓\nShell (e.g., Bash, Zsh)\n       ↑↓\nKernel (Linux)\n       ↑↓\nHardware (CPU, RAM, Disk)',
    hasLiveOutput: false,
    expectedOutput: 'Conceptual diagram.',
    explanation: [
      { code: 'Hardware', desc: 'The physical components.' },
      { code: 'Kernel', desc: 'The core OS that manages memory, CPU, and devices.' },
      { code: 'Shell', desc: 'The interface that takes your commands and translates them for the kernel.' },
      { code: 'Applications', desc: 'The software you run.' }
    ],
    realWorldExample: 'When you type `ls` in the terminal (Shell), the Shell asks the Kernel to read the hard drive (Hardware), and then the Application displays the output to you.',
    commonMistakes: [
      { error: 'Confusing the Terminal with the Shell', code: '', suffix: 'The Terminal is just a window (the GUI). The Shell (like Bash) is the program running inside it that actually processes your commands.' }
    ],
    bestPractices: ['Learn bash scripting to automate interactions between the shell and kernel.'],
    practiceExercise: {
      task: 'What layer sits immediately above the Kernel and interprets user commands?',
      expectedOutput: 'The Shell',
      solution: 'The Shell (e.g., Bash)'
    },
    quiz: [
      { question: 'What is the bottom-most layer of the Linux Architecture?', options: ['The Shell', 'The Hardware', 'The Kernel', 'Applications'], answer: 'The Hardware' },
      { question: 'Which component interacts directly with the hardware?', options: ['The Shell', 'The Kernel', 'The Terminal', 'The User'], answer: 'The Kernel' },
      { question: 'What does the Shell do?', options: ['Cooling the CPU', 'Taking user commands and passing them to the kernel', 'Rendering graphics', 'Storing files'], answer: 'Taking user commands and passing them to the kernel' },
      { question: 'Bash is an example of what?', options: ['A Kernel', 'A Shell', 'A Hardware component', 'A Web Browser'], answer: 'A Shell' },
      { question: 'Is the GUI (Graphical User Interface) mandatory in Linux?', options: ['Yes', 'No, Linux can run entirely from the command line shell', 'Only on servers', 'Only on desktops'], answer: 'No, Linux can run entirely from the command line shell' }
    ],
    interviewQuestions: [
      { q: 'Explain the difference between User Space and Kernel Space.', a: 'Kernel Space is strictly reserved for running a privileged OS kernel, kernel extensions, and most device drivers. User Space is where user applications run. Applications must use System Calls to request the kernel to perform tasks (like writing a file) on their behalf.' }
    ],
    summary: ['Hardware -> Kernel -> Shell -> Applications.', 'The Shell translates commands.', 'GUI is optional.'],
    references: commonReferences
  },

  'linux_install_ubuntu': {
    isStructured: true,
    title: '5. Installing Ubuntu',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'Ubuntu is one of the most popular Linux distributions. Installing it involves downloading an ISO file and booting it on your hardware or a virtual machine.',
    whyUseIt: 'To get a fully functional, beginner-friendly Linux environment for development, hosting, or daily use.',
    syntax: '-- Conceptual setup process',
    codeExample: '1. Download Ubuntu Desktop ISO from ubuntu.com\n2. Create a bootable USB using Rufus (Windows) or BalenaEtcher\n3. Boot from USB\n4. Follow the GUI installer (Erase disk or Dual Boot)',
    hasLiveOutput: false,
    expectedOutput: 'A working Ubuntu Desktop environment.',
    explanation: [
      { code: 'ISO File', desc: 'A single file containing the entire operating system image.' },
      { code: 'Dual Boot', desc: 'Installing Linux alongside Windows so you can choose which to start when turning on the PC.' }
    ],
    realWorldExample: 'A developer wiping Windows off an old laptop and installing Ubuntu to create a dedicated programming machine that runs much faster.',
    commonMistakes: [
      { error: 'Accidentally wiping your main hard drive', code: '', suffix: 'Always back up your data before installing a new OS. Pay close attention to the "Erase Disk" vs "Install Alongside" options.' }
    ],
    bestPractices: ['If you are scared of breaking Windows, use a Virtual Machine (VirtualBox) or WSL instead of a bare-metal installation first.'],
    practiceExercise: {
      task: 'What type of file must you download from Ubuntu.com to install it?',
      expectedOutput: 'An ISO file.',
      solution: 'An ISO file (.iso)'
    },
    quiz: [
      { question: 'What file format is the Ubuntu installer downloaded as?', options: ['.exe', '.dmg', '.iso', '.zip'], answer: '.iso' },
      { question: 'What is a "Live USB"?', options: ['A USB that requires internet', 'A USB drive that you can boot into to test Linux without installing it', 'A fast USB', 'A broken USB'], answer: 'A USB drive that you can boot into to test Linux without installing it' },
      { question: 'What does "Dual Boot" mean?', options: ['Using two monitors', 'Having two operating systems installed on one computer', 'Booting twice', 'Using two keyboards'], answer: 'Having two operating systems installed on one computer' },
      { question: 'Which tool is commonly used on Windows to make a bootable USB?', options: ['Photoshop', 'Rufus', 'Excel', 'Notepad'], answer: 'Rufus' },
      { question: 'Should you back up your files before installing Linux bare-metal?', options: ['No, it is 100% safe', 'Yes, partitioning mistakes can permanently delete your data', 'Only if using a Mac', 'It does not matter'], answer: 'Yes, partitioning mistakes can permanently delete your data' }
    ],
    interviewQuestions: [
      { q: 'What is a Swap partition and do you need one during installation?', a: 'Swap space is an area on the hard disk used as virtual memory when RAM is full. Modern Ubuntu installations often use a swap file instead of a dedicated partition, but having swap is highly recommended to prevent system crashes during high memory usage.' }
    ],
    summary: ['Download an ISO.', 'Create a bootable USB.', 'Backup data before Dual Booting.'],
    references: commonReferences
  },

  'linux_virtualbox': {
    isStructured: true,
    title: '6. VirtualBox Setup',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'Oracle VirtualBox is a free hypervisor that allows you to run multiple operating systems (Virtual Machines) inside your current OS.',
    whyUseIt: 'The safest way to learn Linux. If you break the Linux virtual machine, it does not affect your host Windows/Mac computer at all.',
    syntax: '-- Conceptual',
    codeExample: '1. Install VirtualBox\n2. Click "New"\n3. Allocate RAM (e.g., 4096MB)\n4. Create Virtual Hard Disk (e.g., 25GB)\n5. Mount Ubuntu ISO in Storage settings\n6. Click "Start"',
    hasLiveOutput: false,
    expectedOutput: 'Ubuntu running in a window on your desktop.',
    explanation: [
      { code: 'Hypervisor', desc: 'The software that creates and runs virtual machines.' },
      { code: 'Host OS', desc: 'Your main computer (e.g., Windows).' },
      { code: 'Guest OS', desc: 'The OS running inside VirtualBox (e.g., Ubuntu).' }
    ],
    realWorldExample: 'A cybersecurity student running Kali Linux in a VM to practice penetration testing safely without exposing their main host machine.',
    commonMistakes: [
      { error: 'Allocating too much RAM', code: '', suffix: 'If your host PC has 8GB of RAM, do not give the VM 8GB. Give it 2-4GB, otherwise your host PC will crash.' }
    ],
    bestPractices: ['Install "VirtualBox Guest Additions" inside the Linux VM immediately to enable fullscreen resolution and copy/paste between Host and Guest.'],
    practiceExercise: {
      task: 'If Windows is your main OS and you run Ubuntu in VirtualBox, which is the Guest OS?',
      expectedOutput: 'Ubuntu',
      solution: 'Ubuntu'
    },
    quiz: [
      { question: 'What is a Virtual Machine (VM)?', options: ['A robot', 'A software computer that, like a physical computer, runs an OS and applications', 'A cloud server', 'A hard drive'], answer: 'A software computer that, like a physical computer, runs an OS and applications' },
      { question: 'What is the "Host" OS?', options: ['The OS inside VirtualBox', 'The physical computer\'s main operating system', 'The internet', 'The BIOS'], answer: 'The physical computer\'s main operating system' },
      { question: 'Why use VirtualBox for learning Linux?', options: ['It is faster than installing it natively', 'It is 100% safe and won\'t break your host PC', 'It improves graphics', 'It is required by law'], answer: 'It is 100% safe and won\'t break your host PC' },
      { question: 'What must you install in the VM to get fullscreen resolution?', options: ['Chrome', 'VirtualBox Guest Additions', 'Antivirus', 'Java'], answer: 'VirtualBox Guest Additions' },
      { question: 'What happens if you give the VM all of your computer\'s RAM?', options: ['It runs incredibly fast', 'Your host PC will likely freeze or crash', 'Nothing', 'VirtualBox prevents it automatically'], answer: 'Your host PC will likely freeze or crash' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between a Type 1 and Type 2 Hypervisor?', a: 'VirtualBox is a Type 2 hypervisor, meaning it runs as an application ON TOP of a host OS (like Windows). A Type 1 hypervisor (like VMware ESXi or Proxmox) runs directly on the bare metal hardware, offering much better performance for enterprise servers.' }
    ],
    summary: ['Safest way to learn Linux.', 'Runs an OS inside an OS.', 'Install Guest Additions for fullscreen.'],
    references: commonReferences
  },

  'linux_wsl': {
    isStructured: true,
    title: '7. WSL (Windows Subsystem for Linux)',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'WSL is a compatibility layer developed by Microsoft that allows Windows 10/11 users to run a Linux environment natively, without the overhead of a traditional Virtual Machine.',
    whyUseIt: 'It provides near-native Linux performance right inside Windows. It is the preferred way for developers on Windows to use Linux command-line tools (Docker, Node, Python).',
    syntax: 'wsl --install',
    codeExample: '# Open Windows PowerShell as Administrator and type:\nwsl --install\n\n# After reboot, type `wsl` or `bash` in your terminal to enter Linux.',
    hasLiveOutput: false,
    expectedOutput: 'Ubuntu is installed and integrated into Windows Terminal.',
    explanation: [
      { code: 'wsl --install', desc: 'Installs the WSL2 kernel and downloads the default Ubuntu distribution automatically.' }
    ],
    realWorldExample: 'A web developer using Windows for Adobe Photoshop, but using WSL2 to run their Node.js web server because Node runs much faster on Linux.',
    commonMistakes: [
      { error: 'Storing project files in the Windows file system', code: '', suffix: 'While WSL can access the Windows C: drive (at `/mnt/c/`), doing file I/O across the OS boundary is very slow. Always store your coding projects in the Linux home directory (`~`).' }
    ],
    bestPractices: ['Use Windows Terminal and VS Code (with the WSL extension). VS Code seamlessly connects into the WSL environment.'],
    practiceExercise: {
      task: 'What command installs WSL on Windows 10/11?',
      expectedOutput: 'wsl --install',
      solution: 'wsl --install'
    },
    quiz: [
      { question: 'What does WSL stand for?', options: ['Windows System Logic', 'Windows Subsystem for Linux', 'Web Server Linux', 'Wide Screen Linux'], answer: 'Windows Subsystem for Linux' },
      { question: 'How is WSL2 different from a traditional VM like VirtualBox?', options: ['It is slower', 'It boots instantly, uses fewer resources, and integrates natively with Windows', 'It requires an ISO download', 'It only runs Debian'], answer: 'It boots instantly, uses fewer resources, and integrates natively with Windows' },
      { question: 'Where should you store your code projects when using WSL2 for best performance?', options: ['On the Windows Desktop', 'In the C:\\ drive', 'Inside the Linux file system (e.g., ~/)', 'On a USB drive'], answer: 'Inside the Linux file system (e.g., ~/)' },
      { question: 'Which code editor integrates perfectly with WSL?', options: ['Notepad', 'Visual Studio Code (via WSL extension)', 'Eclipse', 'Sublime Text'], answer: 'Visual Studio Code (via WSL extension)' },
      { question: 'How can you access your Windows C drive from inside WSL?', options: ['/mnt/c/', '/windows/', 'C:\\', 'You cannot'], answer: '/mnt/c/' }
    ],
    interviewQuestions: [
      { q: 'What is the architectural difference between WSL1 and WSL2?', a: 'WSL1 acted as a translation layer that translated Linux system calls into Windows system calls. WSL2 uses a real, Microsoft-built Linux kernel running in a highly optimized, lightweight Hyper-V utility VM, providing 100% system call compatibility and much faster file IO performance.' }
    ],
    summary: ['Run Linux natively inside Windows.', 'Use `wsl --install`.', 'Store files in the Linux filesystem.'],
    references: commonReferences
  },

  'linux_file_system': {
    isStructured: true,
    title: '8. Linux File System Overview',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'In Linux, "Everything is a file". The file system is a hierarchical tree structure starting at the root (`/`). There are no C: or D: drives.',
    whyUseIt: 'You must understand the hierarchy to know where to find software, configurations, and your own personal files.',
    syntax: '-- Conceptual',
    codeExample: '/         (Root directory)\n├── bin   (Essential command binaries like ls, cd)\n├── etc   (System configuration files)\n├── home  (User personal directories)\n├── var   (Variable data like logs)\n└── tmp   (Temporary files)',
    hasLiveOutput: false,
    expectedOutput: 'Understanding of the tree structure.',
    explanation: [
      { code: '/', desc: 'The absolute top level of the hard drive. Everything branches from here.' },
      { code: '~', desc: 'A shortcut representing the current user\'s home directory (e.g., /home/alice).' }
    ],
    realWorldExample: 'If a web server breaks, a sysadmin immediately knows to look in `/var/log` for the error logs and `/etc/nginx` for the configuration files.',
    commonMistakes: [
      { error: 'Looking for a C: drive', code: '', suffix: 'Windows uses drive letters. Linux mounts all drives and partitions under the single `/` tree (e.g., a USB drive might appear at `/media/usb`).' }
    ],
    bestPractices: ['Never mess with files outside your `/home` directory unless you absolutely know what you are doing. Modifying `/etc` or `/bin` carelessly can break your system.'],
    practiceExercise: {
      task: 'What symbol represents the absolute top root of the Linux filesystem?',
      expectedOutput: '/',
      solution: '/'
    },
    quiz: [
      { question: 'In Linux, the absolute top-level directory is called what?', options: ['C:', 'Root (/)', 'Home', 'Admin'], answer: 'Root (/)' },
      { question: 'Where are user personal files (like Documents and Downloads) stored?', options: ['/usr', '/bin', '/home', '/etc'], answer: '/home' },
      { question: 'Where are system-wide configuration files typically stored?', options: ['/config', '/etc', '/sys', '/var'], answer: '/etc' },
      { question: 'What famous phrase describes the Linux philosophy regarding hardware and processes?', options: ['Everything is an object', 'Everything is a file', 'GUI is king', 'Reboot to fix'], answer: 'Everything is a file' },
      { question: 'Where would you look to find application error logs?', options: ['/var/log', '/etc/log', '/home/log', '/bin/log'], answer: '/var/log' }
    ],
    interviewQuestions: [
      { q: 'What is the purpose of the `/usr` directory?', a: 'Historically it stood for User Services and Routines. Today, it contains user utilities and applications, read-only data, libraries, and binaries that are not strictly required for the system to boot (which are in `/bin`).' }
    ],
    summary: ['Everything is a file.', 'Root is `/`.', 'Personal files in `/home`.'],
    references: commonReferences
  },

  'linux_terminal_basics': {
    isStructured: true,
    title: '9. Terminal Basics',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: 'The Terminal is the text-based interface where you type commands to interact with the Linux Shell.',
    whyUseIt: 'It is vastly faster, uses fewer system resources, and allows for automation (scripting) compared to clicking through menus.',
    syntax: 'user@hostname:~$ command -options arguments',
    codeExample: 'alice@ubuntu:~$ ls -l /var/log',
    hasLiveOutput: false,
    expectedOutput: 'A list of files inside the log directory.',
    explanation: [
      { code: 'alice', desc: 'The current user.' },
      { code: 'ubuntu', desc: 'The name of the computer (hostname).' },
      { code: '~', desc: 'Your current directory (Home).' },
      { code: '$', desc: 'Indicates you are a standard user. If you see `#`, you are the root (admin) user.' }
    ],
    realWorldExample: 'A developer logs into a remote AWS server. Servers do not have monitors or mice; the terminal is the ONLY way to control them.',
    commonMistakes: [
      { error: 'Ignoring case sensitivity', code: '', suffix: 'In Linux, `File.txt`, `file.txt`, and `FILE.TXT` are three completely different files. The terminal is strictly case-sensitive.' }
    ],
    bestPractices: ['Use the TAB key! Pressing TAB will auto-complete file names and commands, saving you hundreds of keystrokes.'],
    practiceExercise: {
      task: 'If your prompt ends in a `#` instead of a `$`, what does that mean?',
      expectedOutput: 'You are the root (admin) user.',
      solution: 'You are logged in as the root user.'
    },
    quiz: [
      { question: 'Is the Linux terminal case-sensitive?', options: ['Yes, always', 'No', 'Only for passwords', 'Only on Ubuntu'], answer: 'Yes, always' },
      { question: 'What does the `$` symbol at the end of a command prompt mean?', options: ['You owe money', 'You are a standard user', 'You are the root administrator', 'The system is broken'], answer: 'You are a standard user' },
      { question: 'What does the `#` symbol at the end of a command prompt mean?', options: ['Comment', 'You are a standard user', 'You are the root (superuser)', 'End of line'], answer: 'You are the root (superuser)' },
      { question: 'Which keyboard key will auto-complete a file name you are typing?', options: ['Enter', 'Space', 'Shift', 'Tab'], answer: 'Tab' },
      { question: 'If you want to stop a running command, what keyboard shortcut do you press?', options: ['Ctrl + C', 'Ctrl + X', 'Esc', 'Alt + F4'], answer: 'Ctrl + C' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between a Terminal, a Console, and a Shell?', a: 'A Terminal is the program/window that receives keyboard input and displays text (the GUI). A Console is the physical hardware (screen/keyboard). The Shell is the actual program (like Bash) running in the background that parses the commands and executes them.' }
    ],
    summary: ['Terminal is text-based control.', 'Strictly case-sensitive.', 'Use TAB for autocomplete.'],
    references: commonReferences
  },

  'linux_first_command': {
    isStructured: true,
    title: '10. First Linux Command',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'Your first interaction with the shell. We will use the `echo` command to print text back to the screen.',
    whyUseIt: 'To verify the terminal is working and understand basic command structure.',
    syntax: 'echo [text]',
    codeExample: 'echo "Hello, Linux World!"',
    hasLiveOutput: false,
    expectedOutput: 'Hello, Linux World!',
    explanation: [
      { code: 'echo', desc: 'The command itself. It repeats what you tell it.' },
      { code: '"Hello..."', desc: 'The argument passed to the command.' }
    ],
    realWorldExample: 'Using `echo` inside a script to print status updates to the screen, like `echo "Backup completed successfully."`',
    commonMistakes: [
      { error: 'Forgetting closing quotes', code: '', suffix: 'If you type `echo "Hello`, the terminal will wait forever on a new line (indicated by a `>`) for you to finish the quote.' }
    ],
    bestPractices: ['Always wrap text with spaces in quotes so the terminal treats it as a single argument.'],
    practiceExercise: {
      task: 'Print your own name to the terminal.',
      expectedOutput: 'Your name',
      solution: 'echo "John Doe"'
    },
    quiz: [
      { question: 'What does the `echo` command do?', options: ['Records audio', 'Prints text to the terminal', 'Deletes files', 'Checks the network'], answer: 'Prints text to the terminal' },
      { question: 'What is the output of `echo Hello World`?', options: ['Hello', 'World', 'Hello World', 'Error'], answer: 'Hello World' },
      { question: 'What happens if you type `echo "Test` (missing closing quote) and press Enter?', options: ['Syntax error', 'Prints Test', 'The terminal shows a `>` prompt waiting for you to finish the string', 'The terminal crashes'], answer: 'The terminal shows a `>` prompt waiting for you to finish the string' },
      { question: 'Can `echo` be used in bash scripts to display messages?', options: ['Yes', 'No', 'Only by root', 'Only if compiled'], answer: 'Yes' },
      { question: 'If you want to cancel the `>` prompt because you forgot a quote, what do you press?', options: ['Enter', 'Ctrl + C', 'Esc', 'Backspace'], answer: 'Ctrl + C' }
    ],
    interviewQuestions: [
      { q: 'How would you use the `echo` command to write text into a file instead of the screen?', a: 'You use output redirection. `echo "Hello" > file.txt` will create or overwrite `file.txt` with the word Hello. `echo "Hello" >> file.txt` will append it to the end of the file.' }
    ],
    summary: ['`echo` prints text.', 'Quotes matter.', 'Use Ctrl+C to cancel.'],
    references: commonReferences
  },

  'linux_pwd': {
    isStructured: true,
    title: '11. pwd',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`pwd` stands for "Print Working Directory". It outputs the absolute path of the directory you are currently in.',
    whyUseIt: 'Unlike a graphical folder window, a terminal doesn\'t always show your full path. `pwd` tells you exactly where you are in the filesystem tree.',
    syntax: 'pwd',
    codeExample: 'pwd',
    hasLiveOutput: false,
    expectedOutput: '/home/alice/Documents',
    explanation: [
      { code: 'pwd', desc: 'No arguments needed. It simply returns your current location.' }
    ],
    realWorldExample: 'You are deeply nested in some log folders and lost track of where you are. You type `pwd` to get the full path to copy/paste into a script.',
    commonMistakes: [
      { error: 'Confusing ~ with the actual path', code: '', suffix: 'The prompt might just say `~`, but `pwd` will reveal that you are actually in `/home/yourusername`.' }
    ],
    bestPractices: ['Run `pwd` before running destructive commands like `rm -rf *` to ensure you are in the correct folder!'],
    practiceExercise: {
      task: 'Find out your current absolute directory path.',
      expectedOutput: 'A path starting with /',
      solution: 'pwd'
    },
    quiz: [
      { question: 'What does `pwd` stand for?', options: ['Password', 'Print Working Directory', 'Process Window Display', 'Public Web Domain'], answer: 'Print Working Directory' },
      { question: 'What is the output of `pwd`?', options: ['Your password', 'The files in your folder', 'The absolute path to your current directory', 'Your IP address'], answer: 'The absolute path to your current directory' },
      { question: 'Does `pwd` require arguments?', options: ['Yes', 'No', 'Only if root', 'Only in Windows'], answer: 'No' },
      { question: 'If your prompt says `alice@ubuntu:~$`, what will `pwd` likely output?', options: ['~', '/root', '/home/alice', 'C:\\Users\\alice'], answer: '/home/alice' },
      { question: 'What type of path does `pwd` print?', options: ['Relative path', 'Absolute path', 'Network path', 'Encrypted path'], answer: 'Absolute path' }
    ],
    interviewQuestions: [
      { q: 'Is `pwd` an external executable or a shell built-in?', a: 'In most modern shells like Bash, `pwd` is a shell built-in command, though an external binary `/bin/pwd` also exists. The built-in tracks your logical path (including symlinks), while `/bin/pwd` resolves physical paths.' }
    ],
    summary: ['Stands for Print Working Directory.', 'Tells you where you are.', 'Prints an absolute path.'],
    references: commonReferences
  },

  'linux_ls': {
    isStructured: true,
    title: '12. ls',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: '`ls` stands for "List". It lists the contents (files and folders) of a directory.',
    whyUseIt: 'To see what files are in your current folder, view hidden files, or check file permissions and sizes.',
    syntax: 'ls [options] [directory]',
    codeExample: '# List standard files\nls\n\n# List all files (including hidden ones)\nls -a\n\n# Long format (shows permissions, sizes, dates)\nls -l\n\n# Combine flags (long format + all files)\nls -la',
    hasLiveOutput: false,
    expectedOutput: 'drwxr-xr-x 2 alice alice 4096 Aug  5 10:00 Desktop\n-rw-r--r-- 1 alice alice 1024 Aug  5 10:05 file.txt',
    explanation: [
      { code: '-l', desc: 'Long format. Shows permissions, owner, size, and modification date.' },
      { code: '-a', desc: 'All files. Shows hidden files (files that start with a dot, e.g., `.bashrc`).' }
    ],
    realWorldExample: 'A developer uses `ls -la` to find a hidden configuration file (`.env`) that isn\'t showing up in standard `ls`.',
    commonMistakes: [
      { error: 'Not seeing hidden files', code: '', suffix: 'In Linux, any file starting with a dot is hidden. You MUST use `ls -a` to see them.' }
    ],
    bestPractices: ['Get in the habit of typing `ls -la` instead of just `ls`. It gives you much more context.'],
    practiceExercise: {
      task: 'List all files, including hidden ones, in a detailed list format, ordered by file size.',
      expectedOutput: 'Detailed list',
      solution: 'ls -laS'
    },
    quiz: [
      { question: 'What does `ls` do?', options: ['Loads system', 'Lists directory contents', 'Locks screen', 'Logs status'], answer: 'Lists directory contents' },
      { question: 'Which flag is used to show hidden files?', options: ['-h', '-a', '-l', '-x'], answer: '-a' },
      { question: 'How is a hidden file named in Linux?', options: ['It ends in .hid', 'It is encrypted', 'It starts with a dot (.)', 'It has no extension'], answer: 'It starts with a dot (.)' },
      { question: 'Which flag shows detailed information (permissions, size, owner)?', options: ['-a', '-l', '-d', '-f'], answer: '-l' },
      { question: 'Can you combine flags in Linux (e.g., `ls -l -a` into `ls -la`)?', options: ['Yes', 'No', 'Only on Ubuntu', 'Only as root'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'What does the command `ls -lh` do?', a: 'It lists files in long format (`-l`), but the `-h` stands for "human-readable", which formats the file sizes into easily readable units like K, M, or G (e.g., 5.2M instead of 5452595 bytes).' }
    ],
    summary: ['`ls` lists files.', '`-a` shows hidden files.', '`-l` shows details (permissions/size).'],
    references: commonReferences
  },

  'linux_cd': {
    isStructured: true,
    title: '13. cd',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`cd` stands for "Change Directory". It is used to navigate around the Linux file system.',
    whyUseIt: 'You need `cd` to move from your home folder into your projects folder, logs folder, etc.',
    syntax: 'cd [path]',
    codeExample: '# Move into the Documents folder (relative path)\ncd Documents\n\n# Move to the absolute root directory\ncd /\n\n# Move up one directory (parent directory)\ncd ..\n\n# Go straight to your Home directory\ncd ~',
    hasLiveOutput: false,
    expectedOutput: 'Your prompt changes to reflect the new directory.',
    explanation: [
      { code: 'cd ..', desc: 'The two dots represent the parent directory (move up one level).' },
      { code: 'cd ~', desc: 'The tilde represents your home directory. It\'s a quick way to go home from anywhere.' }
    ],
    realWorldExample: 'A sysadmin logs in, types `cd /var/log/nginx` to navigate to the web server logs, and begins reading them.',
    commonMistakes: [
      { error: 'Forgetting the space', code: '', suffix: 'Typing `cd..` (like in Windows DOS) will often throw a "command not found" error in Linux. You must type `cd ..` with a space.' }
    ],
    bestPractices: ['Use `cd -` to instantly jump back to the previous directory you were just in (like a back button).'],
    practiceExercise: {
      task: 'Navigate up one directory level.',
      expectedOutput: 'You are now in the parent folder.',
      solution: 'cd ..'
    },
    quiz: [
      { question: 'What does `cd` stand for?', options: ['Create Directory', 'Change Directory', 'Copy Data', 'Check Disk'], answer: 'Change Directory' },
      { question: 'How do you navigate UP one directory level?', options: ['cd up', 'cd /', 'cd ..', 'cd ~'], answer: 'cd ..' },
      { question: 'What command takes you instantly to your user\'s home directory from anywhere?', options: ['cd /', 'cd home', 'cd ~', 'cd .'], answer: 'cd ~' },
      { question: 'What happens if you type `cd` and hit enter with no arguments?', options: ['Error', 'Moves up one level', 'Takes you to your home directory', 'Takes you to root'], answer: 'Takes you to your home directory' },
      { question: 'What is the difference between `cd /etc` and `cd etc`?', options: ['No difference', 'The first is an absolute path from root, the second looks for "etc" in the current folder', 'First is for root user only', 'Second is for root user only'], answer: 'The first is an absolute path from root, the second looks for "etc" in the current folder' }
    ],
    interviewQuestions: [
      { q: 'Explain the difference between absolute and relative paths when using `cd`.', a: 'An absolute path starts with a forward slash `/` and specifies the exact path from the root of the file system (e.g., `cd /var/log`). A relative path does not start with a slash and is calculated relative to your CURRENT working directory (e.g., `cd Documents`).' }
    ],
    summary: ['`cd` changes directories.', '`..` means up one level.', '`~` means Home.'],
    references: commonReferences
  },

  'linux_tree': {
    isStructured: true,
    title: '14. tree',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`tree` is a command that lists the contents of directories in a tree-like, visual hierarchical format.',
    whyUseIt: 'While `ls` only shows the current level, `tree` shows you the entire nested folder structure at a glance.',
    syntax: 'tree [directory]',
    codeExample: 'tree my_project/',
    hasLiveOutput: false,
    expectedOutput: 'my_project/\n├── index.html\n├── css\n│   └── style.css\n└── js\n    └── app.js\n\n2 directories, 3 files',
    explanation: [
      { code: 'tree', desc: 'Recursively descends into folders and draws lines to show structure.' }
    ],
    realWorldExample: 'A developer joins a new project and runs `tree` to understand how the React components and assets are organized in the codebase.',
    commonMistakes: [
      { error: 'Running tree on the root directory (/)', code: '', suffix: 'If you run `tree /`, it will try to print every single file on your hard drive to the screen. Press Ctrl+C quickly to stop it!' }
    ],
    bestPractices: ['If a directory is too deep, use `tree -L 2` to limit the output to only 2 levels deep.'],
    practiceExercise: {
      task: 'Show the tree structure, but only 1 level deep.',
      expectedOutput: 'A shallow tree.',
      solution: 'tree -L 1'
    },
    quiz: [
      { question: 'What does the `tree` command do?', options: ['Plants a virtual tree', 'Lists files in a visual hierarchy', 'Deletes folders recursively', 'Compresses files'], answer: 'Lists files in a visual hierarchy' },
      { question: 'Is `tree` installed by default on all Linux systems?', options: ['Yes', 'No, it often needs to be installed (e.g., `sudo apt install tree`)', 'Only on Red Hat', 'Only on macOS'], answer: 'No, it often needs to be installed (e.g., `sudo apt install tree`)' },
      { question: 'How do you limit the depth of the tree?', options: ['tree -limit 2', 'tree -depth 2', 'tree -L 2', 'tree -2'], answer: 'tree -L 2' },
      { question: 'What happens if you run `tree /` as root?', options: ['It shows 10 files', 'It lists every single file on the entire computer', 'It deletes the drive', 'It shows network connections'], answer: 'It lists every single file on the entire computer' },
      { question: 'How do you cancel a runaway command like a massive `tree` output?', options: ['Alt+F4', 'Esc', 'Ctrl+C', 'Backspace'], answer: 'Ctrl+C' }
    ],
    interviewQuestions: [
      { q: 'How would you use `tree` to only show directories, hiding all files?', a: 'Use the `-d` flag: `tree -d`. This is very useful for just understanding the folder architecture without cluttering the screen with hundreds of file names.' }
    ],
    summary: ['Visualizes folder structure.', 'Use `-L` to limit depth.', 'Use `-d` for directories only.'],
    references: commonReferences
  },

  'linux_clear': {
    isStructured: true,
    title: '15. clear',
    difficulty: 'Beginner',
    readingTime: '1 min',
    definition: 'The `clear` command clears the terminal screen of all previous commands and output, pushing the prompt to the top of the window.',
    whyUseIt: 'Terminals get cluttered very quickly. `clear` gives you a clean slate to work on.',
    syntax: 'clear',
    codeExample: 'clear',
    hasLiveOutput: false,
    expectedOutput: 'A completely blank terminal screen with the prompt at the top left.',
    explanation: [
      { code: 'clear', desc: 'Takes no arguments.' }
    ],
    realWorldExample: 'After tailing a massive log file, your screen is covered in text. You type `clear` before starting your next task to reduce distraction.',
    commonMistakes: [
      { error: 'Thinking `clear` deletes history', code: '', suffix: '`clear` does NOT delete your command history or the previous output. It just scrolls the screen down. You can still scroll up with your mouse wheel to see the old text.' }
    ],
    bestPractices: ['Instead of typing `clear`, use the keyboard shortcut `Ctrl + L`.'],
    practiceExercise: {
      task: 'Clear your terminal screen using a keyboard shortcut.',
      expectedOutput: 'Screen clears.',
      solution: 'Press Ctrl + L'
    },
    quiz: [
      { question: 'What does the `clear` command do?', options: ['Deletes the current folder', 'Clears the terminal screen', 'Deletes command history', 'Kills all processes'], answer: 'Clears the terminal screen' },
      { question: 'Does `clear` permanently delete the previous terminal output?', options: ['Yes', 'No, it just scrolls it out of view (you can scroll back up)', 'Only as root', 'Only if you use `-f`'], answer: 'No, it just scrolls it out of view (you can scroll back up)' },
      { question: 'What is the standard keyboard shortcut that does the exact same thing as `clear`?', options: ['Ctrl + C', 'Ctrl + X', 'Ctrl + L', 'Ctrl + D'], answer: 'Ctrl + L' },
      { question: 'Does `clear` take any mandatory arguments?', options: ['Yes', 'No', 'Only on Windows', 'Only file names'], answer: 'No' },
      { question: 'What command would actually delete your command history?', options: ['clear', 'history -c', 'rm history', 'clear -all'], answer: 'history -c' }
    ],
    interviewQuestions: [
      { q: 'Is there a way to truly clear the terminal so that a user cannot scroll up?', a: 'Yes, in some terminal emulators, using the `reset` command or `clear -x` (depending on the OS/ncurses version) will completely flush the scrollback buffer.' }
    ],
    summary: ['Cleans up the screen.', 'Does not delete history.', 'Shortcut is Ctrl+L.'],
    references: commonReferences
  }
};