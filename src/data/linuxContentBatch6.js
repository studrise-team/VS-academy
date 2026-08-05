const commonReferences = [
  { label: 'Linux Documentation', url: 'https://linux.die.net/' },
  { label: 'Ubuntu Official Docs', url: 'https://help.ubuntu.com/' }
];

export const linuxContentBatch6 = {
  'linux_lsblk': {
    isStructured: true,
    title: '76. lsblk',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: '`lsblk` stands for "List Block Devices". It displays information about all available or specified block devices (like hard drives, SSDs, and USB drives) in a tree-like format.',
    whyUseIt: 'Before you can format or mount a new hard drive, you must figure out what name Linux assigned to it (e.g., `/dev/sdb`). `lsblk` safely shows you this without requiring root.',
    syntax: 'lsblk [options]',
    codeExample: 'lsblk',
    hasLiveOutput: false,
    expectedOutput: 'NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda      8:0    0   50G  0 disk \n└─sda1   8:1    0   50G  0 part /\nsdb      8:16   0  100G  0 disk ',
    explanation: [
      { code: 'disk', desc: 'The physical hard drive (e.g., sda).' },
      { code: 'part', desc: 'A partition on that hard drive (e.g., sda1).' }
    ],
    realWorldExample: 'You plug in a 1TB USB drive. You run `lsblk` and see a new 1000G device called `sdc`. Now you know you need to mount `/dev/sdc1`.',
    commonMistakes: [
      { error: 'Assuming lsblk shows free space', code: '', suffix: '`lsblk` only shows the TOTAL size of the block device. It does not show how much space is used or free. Use `df -h` for that.' }
    ],
    bestPractices: ['Always run `lsblk` before running destructive commands like `fdisk` or `mkfs` to ensure you are targeting the correct drive.'],
    practiceExercise: {
      task: 'List all block devices on your system.',
      expectedOutput: 'Tree of drives.',
      solution: 'lsblk'
    },
    quiz: [
      { question: 'What does `lsblk` do?', options: ['Lists blacklisted IPs', 'Lists block devices (hard drives)', 'Lists blank files', 'Lists background tasks'], answer: 'Lists block devices (hard drives)' },
      { question: 'What is a "block device"?', options: ['A blocked user', 'A storage device like an SSD or HDD that reads/writes data in blocks', 'A network port', 'A locked file'], answer: 'A storage device like an SSD or HDD that reads/writes data in blocks' },
      { question: 'Does `lsblk` show how much free space is left on the drive?', options: ['Yes', 'No, it only shows the total capacity of the hardware', 'Only as root', 'Only on Ubuntu'], answer: 'No, it only shows the total capacity of the hardware' },
      { question: 'If `lsblk` shows `sda` and underneath it `sda1` and `sda2`, what are they?', options: ['sda is the physical disk, sda1 and sda2 are partitions on that disk', 'They are three separate physical disks', 'sda1 is a virus', 'sda2 is a backup'], answer: 'sda is the physical disk, sda1 and sda2 are partitions on that disk' },
      { question: 'Does `lsblk` require sudo?', options: ['Yes', 'No', 'Sometimes', 'Only for USBs'], answer: 'No' }
    ],
    interviewQuestions: [
      { q: 'What does the `-f` flag do in `lsblk -f`?', a: 'It outputs info about filesystems. It will show you the UUID of the partition and what format it is (e.g., ext4, xfs, vfat), which is crucial when editing `/etc/fstab`.' }
    ],
    summary: ['Lists physical hard drives.', 'Tree format.', 'Safe to run without sudo.'],
    references: commonReferences
  },

  'linux_fdisk': {
    isStructured: true,
    title: '77. fdisk (Introduction)',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: '`fdisk` is a command-line utility used to view, create, delete, and modify partitions on a hard drive.',
    whyUseIt: 'When you buy a brand new hard drive and plug it into a Linux server, it is completely blank. You must use `fdisk` to create a partition table before you can format and mount it.',
    syntax: 'sudo fdisk [device]',
    codeExample: '# View all current partitions\nsudo fdisk -l\n\n# Open the interactive prompt to modify a specific drive\nsudo fdisk /dev/sdb',
    hasLiveOutput: false,
    expectedOutput: 'Interactive fdisk prompt (Command (m for help): ).',
    explanation: [
      { code: '-l', desc: 'List mode. Just prints the partitions and exits safely.' },
      { code: 'fdisk /dev/sdb', desc: 'Enters dangerous interactive mode. `n` creates a new partition, `d` deletes, `w` writes the changes.' }
    ],
    realWorldExample: 'A DevOps engineer adds a 500GB volume to a server. They run `fdisk /dev/xvdc`, press `n` for new, `p` for primary, and `w` to save the partition.',
    commonMistakes: [
      { error: 'Writing changes without double checking', code: '', suffix: 'Inside the interactive prompt, if you press `d` (delete) and then `w` (write), that partition is gone. Always press `p` (print) to double check your changes before pressing `w`.' }
    ],
    bestPractices: ['`fdisk` is for older MBR partition tables and disks under 2TB. For modern servers and disks larger than 2TB, use `parted` or `gdisk` (GPT).'],
    practiceExercise: {
      task: 'Safely list all partitions on the system without modifying anything.',
      expectedOutput: 'List of partitions.',
      solution: 'sudo fdisk -l'
    },
    quiz: [
      { question: 'What is `fdisk` used for?', options: ['Formatting text', 'Managing hard drive partitions', 'Finding files on a disk', 'Testing disk speed'], answer: 'Managing hard drive partitions' },
      { question: 'Which flag safely lists all partitions without entering interactive mode?', options: ['-r', '-s', '-l', '-p'], answer: '-l' },
      { question: 'What happens if you run `fdisk /dev/sda`?', options: ['It formats sda', 'It enters an interactive prompt where you can modify the partitions on sda', 'It deletes sda', 'It mounts sda'], answer: 'It enters an interactive prompt where you can modify the partitions on sda' },
      { question: 'Inside the `fdisk` interactive prompt, what key do you press to explicitly save and write your changes to the disk?', options: ['s', 'save', 'w', 'q'], answer: 'w' },
      { question: 'Is `fdisk` recommended for 10TB hard drives?', options: ['Yes', 'No, it struggles with disks over 2TB (use parted/gdisk instead)', 'Only on Ubuntu', 'Only for SSDs'], answer: 'No, it struggles with disks over 2TB (use parted/gdisk instead)' }
    ],
    interviewQuestions: [
      { q: 'After using `fdisk` to create `/dev/sdb1`, can you immediately mount it and put files on it?', a: 'No. `fdisk` only creates the partition boundaries. You must first lay down a filesystem on it using a command like `mkfs.ext4 /dev/sdb1` before it can be mounted and used.' }
    ],
    summary: ['Creates and deletes partitions.', 'Interactive prompt.', 'Use `-l` to just look safely.'],
    references: commonReferences
  },

  'linux_ip': {
    isStructured: true,
    title: '78. ip',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'The `ip` command is the modern, powerful tool used to show and manipulate routing, network devices, interfaces, and tunnels.',
    whyUseIt: 'To find out your computer\'s IP address, check if your network cable is connected (link status), or troubleshoot routing issues.',
    syntax: 'ip [options] object [command]',
    codeExample: '# Show your IP addresses\nip a\n\n# Show if your network cables are physically UP or DOWN\nip link\n\n# Show the routing table (Default Gateway)\nip route',
    hasLiveOutput: false,
    expectedOutput: '2: eth0: <BROADCAST,MULTICAST,UP> ... inet 192.168.1.10/24',
    explanation: [
      { code: 'ip a', desc: 'Short for `ip address show`. Lists all network interfaces (like eth0 or wlan0) and their IP addresses.' },
      { code: 'inet', desc: 'The line containing your IPv4 address.' }
    ],
    realWorldExample: 'A server cannot reach the internet. The sysadmin runs `ip a` to ensure it actually has an IP address, then `ip route` to ensure it has a default gateway.',
    commonMistakes: [
      { error: 'Looking for 127.0.0.1', code: '', suffix: '`ip a` will always show the `lo` (loopback) interface with `127.0.0.1`. This is your local machine talking to itself. Your actual network IP will be under `eth0` or `enp3s0`.' }
    ],
    bestPractices: ['Stop using `ifconfig`. The `ip` command is the modern replacement and is built into all new Linux distributions by default.'],
    practiceExercise: {
      task: 'Find your computer\'s current IP address.',
      expectedOutput: 'Output showing eth0/wlan0 and an inet address.',
      solution: 'ip a'
    },
    quiz: [
      { question: 'What does the `ip` command manage?', options: ['Installed Programs', 'Network interfaces, IP addresses, and routing', 'Inter-Process communication', 'Input/Output ports'], answer: 'Network interfaces, IP addresses, and routing' },
      { question: 'What is the quickest way to find your IP address?', options: ['ip find', 'ip address show (or ip a)', 'ip config', 'ip net'], answer: 'ip address show (or ip a)' },
      { question: 'What does `ip route` display?', options: ['The physical cable route', 'The routing table, showing how traffic leaves your server (default gateway)', 'Traceroute data', 'Firewall rules'], answer: 'The routing table, showing how traffic leaves your server (default gateway)' },
      { question: 'When looking at `ip a`, what does `lo` stand for?', options: ['Low priority', 'Loopback (127.0.0.1, the machine talking to itself)', 'Local network', 'Lost connection'], answer: 'Loopback (127.0.0.1, the machine talking to itself)' },
      { question: 'Is `ip` considered the modern replacement for `ifconfig`?', options: ['Yes', 'No, ifconfig is newer', 'They do completely different things', 'Only on Mac'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'How would you temporarily bring down a network interface (e.g., eth0) to simulate a network outage?', a: 'You would use `sudo ip link set eth0 down`. To bring it back up, `sudo ip link set eth0 up`.' }
    ],
    summary: ['Modern network tool.', '`ip a` shows your IP.', 'Replaces `ifconfig`.'],
    references: commonReferences
  },

  'linux_ifconfig': {
    isStructured: true,
    title: '79. ifconfig',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`ifconfig` (Interface Configuration) is the classic, legacy command used to view and configure network interfaces.',
    whyUseIt: 'While deprecated in favor of `ip`, millions of tutorials online still reference `ifconfig`, and you will often find it on older Unix/Linux systems and macOS.',
    syntax: 'ifconfig [interface]',
    codeExample: 'ifconfig',
    hasLiveOutput: false,
    expectedOutput: 'eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 192.168.1.15  netmask 255.255.255.0  broadcast 192.168.1.255',
    explanation: [
      { code: 'ifconfig', desc: 'Displays all active interfaces.' }
    ],
    realWorldExample: 'You are working on a 10-year-old legacy server where the `ip` command doesn\'t exist. You run `ifconfig` to find the server\'s IP address.',
    commonMistakes: [
      { error: 'Command not found', code: '', suffix: 'On modern Ubuntu systems, `ifconfig` is not installed by default. If you try to run it, it will fail. You have to run `sudo apt install net-tools` to get it.' }
    ],
    bestPractices: ['Learn to read its output, but practice typing `ip a` instead.'],
    practiceExercise: {
      task: 'Run `ifconfig` to view network stats (assuming net-tools is installed).',
      expectedOutput: 'Network info.',
      solution: 'ifconfig'
    },
    quiz: [
      { question: 'What does `ifconfig` stand for?', options: ['Internet Format Config', 'Interface Configuration', 'Internal Firewall Config', 'IP Finder Config'], answer: 'Interface Configuration' },
      { question: 'Is `ifconfig` the modern standard for Linux networking?', options: ['Yes', 'No, it is deprecated in favor of the `ip` command', 'Only on Ubuntu', 'Yes, since 2020'], answer: 'No, it is deprecated in favor of the `ip` command' },
      { question: 'If you type `ifconfig` on a fresh Ubuntu install and get "command not found", what package is missing?', options: ['network-manager', 'net-tools', 'ip-utils', 'apache'], answer: 'net-tools' },
      { question: 'What does `ifconfig` display by default?', options: ['Only down interfaces', 'Active network interfaces and their IP addresses', 'Routing tables', 'DNS servers'], answer: 'Active network interfaces and their IP addresses' },
      { question: 'Does macOS still use `ifconfig` by default?', options: ['Yes', 'No', 'Only on older versions', 'macOS uses ip a'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'Why was `ifconfig` deprecated in Linux?', a: 'It lacked support for many modern networking features, handled IPv6 poorly, and relied on older kernel APIs (ioctls). The `ip` command from the `iproute2` suite was built natively around the modern Linux Netlink socket API.' }
    ],
    summary: ['Legacy network tool.', 'Replaced by `ip a`.', 'Requires `net-tools` package.'],
    references: commonReferences
  },

  'linux_ping': {
    isStructured: true,
    title: '80. ping',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`ping` sends ICMP Echo Request packets to a network host (like a website or another computer) to test if it is reachable.',
    whyUseIt: 'It is the very first step in network troubleshooting. If the internet isn\'t working, you ping a known server to see if your computer can reach the outside world.',
    syntax: 'ping [options] hostname_or_ip',
    codeExample: '# Ping Google to test internet connectivity\nping google.com\n\n# Ping exactly 4 times and then stop (-c)\nping -c 4 8.8.8.8',
    hasLiveOutput: false,
    expectedOutput: '64 bytes from 142.250.190.46: icmp_seq=1 ttl=116 time=12.4 ms',
    explanation: [
      { code: 'time=12.4 ms', desc: 'The latency (how long the round trip took). Lower is better.' },
      { code: '-c 4', desc: 'Count. Tells ping to stop after 4 attempts.' }
    ],
    realWorldExample: 'A user complains the database is down. The sysadmin runs `ping 10.0.0.5` (the DB IP). If it responds, the network is fine and the database software itself is broken. If it doesn\'t respond, the server is offline.',
    commonMistakes: [
      { error: 'Not knowing how to stop it', code: '', suffix: 'Unlike Windows where ping stops after 4 times automatically, Linux `ping` will run FOREVER until you explicitly press `Ctrl+C` to stop it.' }
    ],
    bestPractices: ['Ping `8.8.8.8` (Google\'s DNS). If it succeeds, you have internet. If you then ping `google.com` and it fails, you know your DNS is broken, not your internet connection.'],
    practiceExercise: {
      task: 'Ping `localhost` exactly 3 times.',
      expectedOutput: '3 replies and a statistics summary.',
      solution: 'ping -c 3 localhost'
    },
    quiz: [
      { question: 'What does the `ping` command test?', options: ['Download speed', 'Basic network connectivity and reachability to another host', 'Disk health', 'CPU load'], answer: 'Basic network connectivity and reachability to another host' },
      { question: 'How do you stop a standard `ping` command in Linux?', options: ['It stops automatically after 4 pings', 'Press Ctrl+C', 'Press Esc', 'Type exit'], answer: 'Press Ctrl+C' },
      { question: 'What does the `time=... ms` field indicate?', options: ['The time of day', 'The latency (how long the data took to travel there and back)', 'How long ping has been running', 'CPU time'], answer: 'The latency (how long the data took to travel there and back)' },
      { question: 'Which flag limits the number of pings sent?', options: ['-n', '-l', '-c (count)', '-limit'], answer: '-c (count)' },
      { question: 'If `ping 8.8.8.8` works, but `ping google.com` fails, what is the most likely problem?', options: ['Your network cable is unplugged', 'Google is down', 'Your DNS resolution is broken', 'Your firewall is blocking ICMP'], answer: 'Your DNS resolution is broken' }
    ],
    interviewQuestions: [
      { q: 'What protocol does `ping` use under the hood?', a: 'It uses the ICMP (Internet Control Message Protocol). Specifically, it sends an ICMP Echo Request and waits for an ICMP Echo Reply.' }
    ],
    summary: ['Tests network connectivity.', 'Runs forever; press Ctrl+C to stop.', 'Uses ICMP protocol.'],
    references: commonReferences
  },

  'linux_netstat': {
    isStructured: true,
    title: '81. netstat',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`netstat` (Network Statistics) displays active network connections, routing tables, and a number of network interface statistics.',
    whyUseIt: 'To figure out what programs are listening on what ports. (e.g., Is Nginx actually listening on port 80? Who is currently connected to my server?)',
    syntax: 'netstat [options]',
    codeExample: '# Show all listening TCP/UDP ports and the programs using them\nsudo netstat -tulnp',
    hasLiveOutput: false,
    expectedOutput: 'tcp  0  0 0.0.0.0:80  0.0.0.0:*  LISTEN  1234/nginx',
    explanation: [
      { code: '-t', desc: 'TCP connections.' },
      { code: '-u', desc: 'UDP connections.' },
      { code: '-l', desc: 'Listening ports (ports waiting for a connection).' },
      { code: '-n', desc: 'Numeric (shows IPs and port numbers instead of resolving names).' },
      { code: '-p', desc: 'Program (shows the PID and name of the program listening). Requires sudo.' }
    ],
    realWorldExample: 'You try to start Apache but get a "Port 80 is in use" error. You run `sudo netstat -tulnp | grep :80` and discover Skype is hogging port 80.',
    commonMistakes: [
      { error: 'Forgetting sudo for the -p flag', code: '', suffix: 'If you run `-p` without sudo, `netstat` will show the ports, but the "Program Name" column will be blank for processes you don\'t own.' }
    ],
    bestPractices: ['Like `ifconfig`, `netstat` is considered deprecated in modern Linux. The modern equivalent is the `ss` command.'],
    practiceExercise: {
      task: 'Find out what program is listening on port 22 (SSH).',
      expectedOutput: 'Listening port info.',
      solution: 'sudo netstat -tulnp | grep :22'
    },
    quiz: [
      { question: 'What does `netstat` do?', options: ['Tests network speed', 'Shows active network connections and listening ports', 'Downloads files', 'Changes IP addresses'], answer: 'Shows active network connections and listening ports' },
      { question: 'What does the famous combo `-tulnp` stand for?', options: ['Time, User, Local, Net, Protocol', 'TCP, UDP, Listening, Numeric, Program', 'Transfer, Upload, Link, Name, Port', 'Nothing'], answer: 'TCP, UDP, Listening, Numeric, Program' },
      { question: 'Why must you use `sudo` with `netstat -p`?', options: ['To encrypt the output', 'To have permission to view the Process ID/Name of programs owned by other users/root', 'To write to a file', 'Because netstat is a virus'], answer: 'To have permission to view the Process ID/Name of programs owned by other users/root' },
      { question: 'If a port state says "LISTEN", what does that mean?', options: ['The port is broken', 'A server program is actively waiting for incoming connections on that port', 'Data is transferring', 'The port is blocked by firewall'], answer: 'A server program is actively waiting for incoming connections on that port' },
      { question: 'Is `netstat` the most modern tool for this job?', options: ['Yes', 'No, it is deprecated in favor of `ss`', 'Only on Ubuntu', 'Only on Mac'], answer: 'No, it is deprecated in favor of `ss`' }
    ],
    interviewQuestions: [
      { q: 'In `netstat` output, what is the difference between `0.0.0.0` and `127.0.0.1` in the Local Address column?', a: '`127.0.0.1` means the program is listening on the loopback interface, meaning ONLY other programs on the SAME machine can connect to it. `0.0.0.0` means the program is listening on ALL network interfaces, meaning anyone on the internet/network can connect to it.' }
    ],
    summary: ['Shows listening ports.', 'Use `-tulnp`.', 'Replaced by `ss`.'],
    references: commonReferences
  },

  'linux_ss': {
    isStructured: true,
    title: '82. ss',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`ss` stands for "Socket Statistics". It is the modern, faster replacement for `netstat`.',
    whyUseIt: 'It can display more TCP and state information than `netstat`, and it queries the kernel directly, making it vastly faster on busy servers with thousands of connections.',
    syntax: 'ss [options]',
    codeExample: '# Show all listening TCP/UDP ports and the programs using them\nsudo ss -tulnp',
    hasLiveOutput: false,
    expectedOutput: 'LISTEN   0    128   0.0.0.0:80   0.0.0.0:*   users:(("nginx",pid=1234,fd=6))',
    explanation: [
      { code: '-tulnp', desc: 'The exact same flags you used in `netstat` work perfectly in `ss`!' }
    ],
    realWorldExample: 'A high-traffic web server is dealing with 50,000 active connections. Running `netstat` would take minutes to output and spike CPU. Running `ss` dumps the data instantly.',
    commonMistakes: [
      { error: 'Not using sudo', code: '', suffix: 'Just like `netstat`, `ss` cannot show you the names of processes you don\'t own unless you run it with `sudo`.' }
    ],
    bestPractices: ['Whenever you feel the urge to type `netstat`, type `ss` instead. It is faster and already installed on modern systems.'],
    practiceExercise: {
      task: 'Use the modern command to show listening TCP/UDP ports.',
      expectedOutput: 'Port list.',
      solution: 'sudo ss -tulnp'
    },
    quiz: [
      { question: 'What does `ss` stand for?', options: ['Secure Shell', 'Socket Statistics', 'System Services', 'Super Server'], answer: 'Socket Statistics' },
      { question: 'Which older command is `ss` designed to replace?', options: ['ifconfig', 'ping', 'netstat', 'nmap'], answer: 'netstat' },
      { question: 'Why is `ss` better than the older command it replaced?', options: ['It uses colors', 'It queries the kernel directly, making it incredibly fast even with massive numbers of connections', 'It installs software', 'It works on Windows'], answer: 'It queries the kernel directly, making it incredibly fast even with massive numbers of connections' },
      { question: 'Do the common flags from `netstat` (like `-tulnp`) work in `ss`?', options: ['Yes', 'No, ss uses completely different syntax', 'Only on CentOS', 'Only the -t flag works'], answer: 'Yes' },
      { question: 'What does the `-n` flag do in `ss -tulnp`?', options: ['New connections', 'Numeric (shows IPs/Ports instead of trying to resolve them to names like "http")', 'Null', 'Network'], answer: 'Numeric (shows IPs/Ports instead of trying to resolve them to names like "http")' }
    ],
    interviewQuestions: [
      { q: 'How would you use `ss` to show only established TCP connections, filtering out listening ports?', a: 'You would use `ss -t -a state established`.' }
    ],
    summary: ['Modern replacement for `netstat`.', 'Incredibly fast.', 'Uses same `-tulnp` flags.'],
    references: commonReferences
  },

  'linux_curl': {
    isStructured: true,
    title: '83. curl',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: '`curl` is a command-line tool for transferring data over various network protocols (most commonly HTTP/HTTPS).',
    whyUseIt: 'To test REST APIs, download files, or check if a web server is responding properly without needing a graphical web browser.',
    syntax: 'curl [options] [URL]',
    codeExample: '# Fetch the HTML of a webpage and print it to the terminal\ncurl https://example.com\n\n# Download a file and save it with its original name (-O)\ncurl -O https://example.com/file.zip\n\n# Send a POST request to an API\ncurl -X POST -d "name=alice" https://api.example.com/users',
    hasLiveOutput: false,
    expectedOutput: 'The raw HTML or JSON response from the server.',
    explanation: [
      { code: '-O', desc: 'Uppercase O saves the file with the same name it has on the server.' },
      { code: '-I', desc: 'Uppercase i fetches ONLY the HTTP headers (useful to check if a site returns a 200 OK or a 404 Error).' }
    ],
    realWorldExample: 'A backend developer writes a new API endpoint. They use `curl` to quickly send a JSON payload to it to test if it returns a 200 OK.',
    commonMistakes: [
      { error: 'Forgetting -L for redirects', code: '', suffix: 'If you curl `http://google.com`, it might just return an empty "301 Moved Permanently" response. You must use `curl -L` to tell curl to follow the redirect to the HTTPS version.' }
    ],
    bestPractices: ['Use `curl -v` (verbose) when debugging APIs to see the exact headers being sent and received.'],
    practiceExercise: {
      task: 'Check the HTTP headers (only headers, not the body) of `https://example.com`.',
      expectedOutput: 'HTTP/2 200 OK...',
      solution: 'curl -I https://example.com'
    },
    quiz: [
      { question: 'What does `curl` do?', options: ['Styles text', 'Transfers data to or from a network server (like HTTP requests)', 'Deletes files', 'Formats drives'], answer: 'Transfers data to or from a network server (like HTTP requests)' },
      { question: 'What happens if you run `curl https://example.com` without any flags?', options: ['It opens Firefox', 'It downloads a file', 'It prints the raw HTML source code of the page to your terminal', 'It errors'], answer: 'It prints the raw HTML source code of the page to your terminal' },
      { question: 'Which flag is used to save the output to a file using its original name?', options: ['-s', '-o', '-O (uppercase)', '-f'], answer: '-O (uppercase)' },
      { question: 'If a website redirects HTTP to HTTPS, which flag tells `curl` to follow the redirect?', options: ['-R', '-L', '-F', '-go'], answer: '-L' },
      { question: 'Which flag is used to fetch ONLY the HTTP headers?', options: ['-I (uppercase i)', '-H', '-T', '-top'], answer: '-I (uppercase i)' }
    ],
    interviewQuestions: [
      { q: 'How do you send a custom HTTP header using `curl`?', a: 'You use the `-H` flag. For example, to send an authorization token: `curl -H "Authorization: Bearer myToken" https://api.com/data`.' }
    ],
    summary: ['Swiss army knife for HTTP.', 'Tests APIs.', 'Use `-O` to download files.'],
    references: commonReferences
  },

  'linux_wget': {
    isStructured: true,
    title: '84. wget',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`wget` (World Wide Web Get) is a command-line utility specifically designed to download files from the web.',
    whyUseIt: 'While `curl` is for interacting with APIs and streams, `wget` is built purely for downloading. It handles large files, resumes broken downloads, and can even recursively download entire websites.',
    syntax: 'wget [options] [URL]',
    codeExample: '# Download a file\nwget https://example.com/linux.iso\n\n# Resume a download that got interrupted (-c)\nwget -c https://example.com/linux.iso',
    hasLiveOutput: false,
    expectedOutput: 'A progress bar appears, and the file is saved to the current directory.',
    explanation: [
      { code: 'wget', desc: 'Automatically saves the file to the disk without needing extra flags (unlike curl).' },
      { code: '-c', desc: 'Continue. Crucial for massive files if your internet drops.' }
    ],
    realWorldExample: 'A sysadmin needs to install a specific version of Java. They find the direct download link on the Oracle website and run `wget [link]` to pull it directly onto the server.',
    commonMistakes: [
      { error: 'Not realizing it downloads to the current folder', code: '', suffix: 'If you run `wget` while in `/etc`, it will try to save the file there and fail with "Permission denied". Always `cd` to `/tmp` or `~` before downloading.' }
    ],
    bestPractices: ['Use `wget -c` for any file larger than 100MB so you don\'t have to start over if the SSH connection drops.'],
    practiceExercise: {
      task: 'Download a file from `https://example.com/test.txt`.',
      expectedOutput: 'File is saved.',
      solution: 'wget https://example.com/test.txt'
    },
    quiz: [
      { question: 'What is `wget` primarily used for?', options: ['Testing APIs', 'Downloading files from the web', 'Uploading files', 'Browsing the web'], answer: 'Downloading files from the web' },
      { question: 'How does standard `wget` behave differently from standard `curl`?', options: ['`wget` prints to screen, `curl` saves to disk', '`wget` automatically saves the file to disk; `curl` prints it to the screen', '`wget` is a GUI', 'They are exactly the same'], answer: '`wget` automatically saves the file to disk; `curl` prints it to the screen' },
      { question: 'Which flag allows `wget` to resume a partially downloaded file?', options: ['-r (resume)', '-c (continue)', '-p (pause)', '-a (append)'], answer: '-c (continue)' },
      { question: 'Where does `wget` save the downloaded file by default?', options: ['The /Downloads folder', 'The /tmp folder', 'The current working directory of your terminal', 'The desktop'], answer: 'The current working directory of your terminal' },
      { question: 'Can `wget` download an entire website (recursively)?', options: ['Yes, using the -r flag', 'No, only single files', 'Only on Ubuntu', 'Only text files'], answer: 'Yes, using the -r flag' }
    ],
    interviewQuestions: [
      { q: 'What does it mean to run `wget -qO- https://example.com/script.sh | bash`?', a: 'This is a common (but dangerous) installation pattern. `-q` makes it quiet (no progress bar). `-O-` tells it to output the downloaded file to Standard Output instead of saving it. The pipe `|` sends that output directly into `bash`, which executes the script instantly.' }
    ],
    summary: ['Downloads files.', 'Saves automatically.', 'Use `-c` to resume.'],
    references: commonReferences
  },

  'linux_ssh': {
    isStructured: true,
    title: '85. ssh',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: '`ssh` stands for Secure Shell. It is a cryptographic network protocol used to operate network services securely over an unsecured network. It is the standard way to log into remote Linux servers.',
    whyUseIt: 'Servers (like AWS EC2 instances) don\'t have keyboards or monitors. You must use `ssh` from your laptop to get a terminal session on the remote server.',
    syntax: 'ssh [username]@[IP_or_Hostname]',
    codeExample: '# Log in with a password\nssh root@192.168.1.50\n\n# Log in using a specific SSH Key file (-i)\nssh -i mykey.pem ubuntu@ec2-54-1-2-3.compute.amazonaws.com',
    hasLiveOutput: false,
    expectedOutput: 'Prompt changes to the remote server.',
    explanation: [
      { code: 'username', desc: 'The user account you are logging into ON THE REMOTE SERVER, not your local laptop user.' },
      { code: '-i', desc: 'Identity file. Specifies the private key to use for authentication (much more secure than passwords).' }
    ],
    realWorldExample: 'A developer opens their Mac terminal and types `ssh ubuntu@myapp.com` to log into their production web server and check the logs.',
    commonMistakes: [
      { error: 'Bad permissions on the private key', code: '', suffix: 'If your `mykey.pem` file has 777 permissions, SSH will refuse to use it because it is "too open". You must run `chmod 600 mykey.pem` first.' }
    ],
    bestPractices: ['Never use password authentication for SSH on internet-facing servers. Always configure SSH Keys.'],
    practiceExercise: {
      task: 'Connect to `10.0.0.5` as the user `admin`.',
      expectedOutput: 'Prompts for admin password.',
      solution: 'ssh admin@10.0.0.5'
    },
    quiz: [
      { question: 'What does `ssh` stand for?', options: ['System Shell', 'Secure Shell', 'Server Socket', 'Simple Server'], answer: 'Secure Shell' },
      { question: 'What is `ssh` used for?', options: ['Encrypting files', 'Logging into and executing commands on remote servers securely', 'Downloading websites', 'Formatting disks'], answer: 'Logging into and executing commands on remote servers securely' },
      { question: 'In `ssh root@192.168.1.5`, what does `root` represent?', options: ['The user on your local laptop', 'The user you want to log in as on the REMOTE server', 'The password', 'The server name'], answer: 'The user you want to log in as on the REMOTE server' },
      { question: 'What does the `-i` flag do?', options: ['Interactive mode', 'Ignore errors', 'Specifies an Identity file (private key) for authentication', 'Installs ssh'], answer: 'Specifies an Identity file (private key) for authentication' },
      { question: 'What port does SSH use by default?', options: ['80', '443', '21', '22'], answer: '22' }
    ],
    interviewQuestions: [
      { q: 'How does SSH public key authentication actually work?', a: 'You generate a key pair. The Public Key is placed on the remote server (in `~/.ssh/authorized_keys`). The Private Key stays on your laptop. When you connect, the server uses the public key to encrypt a challenge message, which only your private key can decrypt. If your laptop decrypts it successfully, access is granted.' }
    ],
    summary: ['Securely logs into remote servers.', 'Uses Port 22.', 'Keys are safer than passwords.'],
    references: commonReferences
  },

  'linux_scp': {
    isStructured: true,
    title: '86. scp',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: '`scp` stands for Secure Copy. It is used to securely copy files and directories between a local computer and a remote server (or between two remote servers) using the SSH protocol.',
    whyUseIt: 'You wrote a script on your laptop and need to transfer it to your cloud server without setting up an FTP server.',
    syntax: 'scp [options] source destination',
    codeExample: '# Copy a local file TO a remote server\nscp script.py admin@192.168.1.50:/home/admin/\n\n# Copy a file FROM a remote server to your local machine (current directory `.`)\nscp admin@192.168.1.50:/var/log/syslog .',
    hasLiveOutput: false,
    expectedOutput: 'A progress bar showing the file transfer.',
    explanation: [
      { code: 'user@ip:/path', desc: 'The standard SSH syntax, followed by a colon `:`. The colon is critical; it separates the server address from the file path.' },
      { code: '.', desc: 'Often used as the destination to mean "my current local folder".' }
    ],
    realWorldExample: 'A developer needs to analyze a massive 2GB database dump from production. They use `scp` to pull the file from the AWS server down to their local MacBook.',
    commonMistakes: [
      { error: 'Forgetting the colon', code: '', suffix: 'If you type `scp file admin@10.0.0.5 /tmp/`, it will fail. You MUST have a colon: `scp file admin@10.0.0.5:/tmp/`.' }
    ],
    bestPractices: ['Use the `-r` flag to copy entire folders recursively, exactly like the standard `cp` command.'],
    practiceExercise: {
      task: 'Copy `index.html` from your current folder to the `/var/www/` folder on a remote server at `example.com` as the `root` user.',
      expectedOutput: 'File uploads.',
      solution: 'scp index.html root@example.com:/var/www/'
    },
    quiz: [
      { question: 'What does `scp` stand for?', options: ['Server Copy Protocol', 'Secure Copy', 'System Copy Paste', 'Simple Configuration Protocol'], answer: 'Secure Copy' },
      { question: 'What underlying protocol does `scp` use to transfer data?', options: ['FTP', 'HTTP', 'SSH', 'Telnet'], answer: 'SSH' },
      { question: 'What is the correct syntax to upload a file to a remote server?', options: ['scp file.txt -> user@ip', 'scp file.txt user@ip:/path/', 'scp user@ip file.txt', 'scp -to user@ip file.txt'], answer: 'scp file.txt user@ip:/path/' },
      { question: 'What crucial character separates the remote server address from the file path?', options: ['Slash (/)', 'Comma (,)', 'Colon (:)', 'Dash (-)'], answer: 'Colon (:)' },
      { question: 'Which flag is required to copy an entire directory?', options: ['-d', '-all', '-R (or -r)', '-f'], answer: '-R (or -r)' }
    ],
    interviewQuestions: [
      { q: 'Why is `rsync` often preferred over `scp` for large transfers?', a: '`scp` is a dumb copier; if a 10GB transfer fails at 9GB, you have to start over. `rsync` checks what is already on the destination and only transfers the missing/changed bytes, allowing you to resume interrupted transfers instantly.' }
    ],
    summary: ['Securely transfers files.', 'Uses SSH.', 'Syntax: `user@ip:/path`.'],
    references: commonReferences
  },

  'linux_zip': {
    isStructured: true,
    title: '87. zip',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`zip` compresses files and directories into a single `.zip` archive file, making them smaller and easier to transfer.',
    whyUseIt: 'The `.zip` format is universally supported across Windows, Mac, and Linux, making it the best choice when sending files to a non-Linux user.',
    syntax: 'zip [options] archive_name.zip file_or_folder',
    codeExample: '# Zip a single file\nzip report.zip report.pdf\n\n# Zip multiple files\nzip images.zip img1.jpg img2.jpg\n\n# Zip an entire directory recursively (-r)\nzip -r project_backup.zip my_project_folder/',
    hasLiveOutput: false,
    expectedOutput: 'Adding: report.pdf (deflated 12%)',
    explanation: [
      { code: '-r', desc: 'Recursive. Essential when zipping folders, otherwise you just get an empty folder structure in the zip.' }
    ],
    realWorldExample: 'A developer needs to email 5 log files to IT support. They run `zip logs.zip *.log` to bundle them into one small attachment.',
    commonMistakes: [
      { error: 'Forgetting -r', code: '', suffix: 'If you run `zip backup.zip my_folder`, it will create a zip containing the folder name, but absolutely none of the files inside it.' }
    ],
    bestPractices: ['While `zip` is great for sharing with Windows users, natively on Linux, `tar.gz` is heavily preferred because it preserves Linux file permissions natively.'],
    practiceExercise: {
      task: 'Zip an entire folder named `src` into an archive called `source_code.zip`.',
      expectedOutput: 'Zips all files.',
      solution: 'zip -r source_code.zip src/'
    },
    quiz: [
      { question: 'What does the `zip` command do?', options: ['Extracts files', 'Compresses files into a .zip archive', 'Deletes files', 'Downloads files'], answer: 'Compresses files into a .zip archive' },
      { question: 'What flag is absolutely required to zip a folder and all the files inside it?', options: ['-f', '-d', '-r (recursive)', '-all'], answer: '-r (recursive)' },
      { question: 'If you type `zip target.zip file.txt`, which is the name of the new archive being created?', options: ['file.txt', 'target.zip', 'It creates target.zip.txt', 'Error'], answer: 'target.zip' },
      { question: 'Why is `.zip` popular even on Linux?', options: ['It compresses better than anything else', 'It is universally supported natively on Windows and macOS', 'It is faster', 'It encrypts better'], answer: 'It is universally supported natively on Windows and macOS' },
      { question: 'Can `zip` compress multiple files at once?', options: ['Yes (e.g., zip bundle.zip file1 file2)', 'No, only one at a time', 'Only on Ubuntu', 'Only as root'], answer: 'Yes (e.g., zip bundle.zip file1 file2)' }
    ],
    interviewQuestions: [
      { q: 'How can you password protect a zip file from the command line?', a: 'Use the `-e` (encrypt) flag: `zip -e secret.zip file.txt`. It will prompt you to enter and verify a password before creating the archive.' }
    ],
    summary: ['Compresses files.', 'Use `-r` for folders.', 'Universal compatibility.'],
    references: commonReferences
  },

  'linux_unzip': {
    isStructured: true,
    title: '88. unzip',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`unzip` extracts files and directories from a `.zip` archive.',
    whyUseIt: 'You downloaded a software package or codebase from GitHub as a `.zip` file and need to extract it.',
    syntax: 'unzip [options] archive.zip',
    codeExample: '# Extract files into the current directory\nunzip project.zip\n\n# Extract files into a specific directory (-d)\nunzip project.zip -d /var/www/html/',
    hasLiveOutput: false,
    expectedOutput: 'Inflating: file1.txt\nInflating: file2.txt',
    explanation: [
      { code: '-d', desc: 'Destination. Tells unzip where to put the extracted files.' }
    ],
    realWorldExample: 'Downloading the latest WordPress release (`latest.zip`) and running `unzip latest.zip -d /var/www/html/` to deploy it to the web server.',
    commonMistakes: [
      { error: 'Cluttering your directory', code: '', suffix: 'If a zip file doesn\'t have a parent folder inside it, and just contains 100 loose files, running `unzip` will dump 100 files right into your current directory, making a huge mess. Check the contents first with `unzip -l archive.zip`.' }
    ],
    bestPractices: ['Always use `unzip -l file.zip` (list) to peek inside the archive before actually extracting it.'],
    practiceExercise: {
      task: 'Extract `backup.zip` into a folder called `/tmp/restore`.',
      expectedOutput: 'Extracts to specific folder.',
      solution: 'unzip backup.zip -d /tmp/restore'
    },
    quiz: [
      { question: 'What does `unzip` do?', options: ['Compresses files', 'Extracts files from a .zip archive', 'Deletes zip files', 'Checks zip files for viruses'], answer: 'Extracts files from a .zip archive' },
      { question: 'Where does `unzip` place the extracted files by default?', options: ['The /tmp folder', 'The desktop', 'The current working directory', 'The /home folder'], answer: 'The current working directory' },
      { question: 'Which flag allows you to extract the files into a different, specific directory?', options: ['-o', '-f', '-d (destination)', '-dir'], answer: '-d (destination)' },
      { question: 'Which flag allows you to peek inside the zip and LIST the files without extracting them?', options: ['-p', '-show', '-l (list)', '-see'], answer: '-l (list)' },
      { question: 'Is `unzip` installed by default on all minimal Linux servers?', options: ['Yes', 'No, often you must `apt install unzip`', 'Only on Red Hat', 'Only as root'], answer: 'No, often you must `apt install unzip`' }
    ],
    interviewQuestions: [
      { q: 'What happens if you run `unzip` and the files being extracted already exist in the directory?', a: 'By default, `unzip` will pause and prompt you, asking if you want to replace, keep, or rename the files. You can force it to overwrite everything silently using the `-o` (overwrite) flag.' }
    ],
    summary: ['Extracts `.zip` files.', 'Use `-d` to specify destination.', 'Use `-l` to peek inside.'],
    references: commonReferences
  },

  'linux_tar': {
    isStructured: true,
    title: '89. tar',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: '`tar` (Tape Archive) groups multiple files and directories into a single archive file. It is the gold standard for archiving in Linux.',
    whyUseIt: 'Unlike `zip`, `tar` preserves Linux-specific file permissions, symlinks, and ownership perfectly. It is how almost all Linux source code is distributed.',
    syntax: 'tar [flags] archive_name files_to_archive',
    codeExample: '# CREATE a new archive (-c)\ntar -cvf archive.tar folder/\n\n# EXTRACT an archive (-x)\ntar -xvf archive.tar\n\n# Combine creation with GZIP compression (-z)\ntar -czvf archive.tar.gz folder/',
    hasLiveOutput: false,
    expectedOutput: 'Lists files as they are archived or extracted.',
    explanation: [
      { code: '-c', desc: 'Create a new archive.' },
      { code: '-x', desc: 'Extract an archive.' },
      { code: '-v', desc: 'Verbose (show progress).' },
      { code: '-f', desc: 'File (specifies the name of the archive). Must ALWAYS be the last flag.' },
      { code: '-z', desc: 'Compress the archive using gzip (creates a .tar.gz file).' }
    ],
    realWorldExample: 'A sysadmin needs to back up a website. They run `tar -czvf website_backup.tar.gz /var/www/html`. This bundles 10,000 files into one file and compresses it to save disk space.',
    commonMistakes: [
      { error: 'Putting the -f flag in the wrong spot', code: '', suffix: 'The `-f` flag expects the very next word to be the filename. If you type `tar -cfv archive.tar folder`, tar thinks the file is named "v" and crashes.' }
    ],
    bestPractices: ['Memorize `tar -czvf` (Create Zip Verbose File) for making archives, and `tar -xzvf` (eXtract Zip Verbose File) for opening them.'],
    practiceExercise: {
      task: 'Extract a file named `software.tar.gz`.',
      expectedOutput: 'Files are extracted.',
      solution: 'tar -xzvf software.tar.gz'
    },
    quiz: [
      { question: 'What does `tar` stand for?', options: ['Total Archive', 'Tape Archive', 'Target Area', 'Transfer All Records'], answer: 'Tape Archive' },
      { question: 'Why is `tar` preferred over `zip` in Linux?', options: ['It is a newer format', 'It natively preserves Linux file permissions, symlinks, and ownership', 'It is made by Apple', 'It is easier to type'], answer: 'It natively preserves Linux file permissions, symlinks, and ownership' },
      { question: 'By default, does `tar -cvf archive.tar` actually compress the files to make them smaller?', options: ['Yes', 'No, it only bundles them together. You must add `-z` to compress', 'Only text files', 'Only on Ubuntu'], answer: 'No, it only bundles them together. You must add `-z` to compress' },
      { question: 'What flag must always be at the end of your flag block because it expects the filename immediately after it?', options: ['-c', '-x', '-z', '-f'], answer: '-f' },
      { question: 'Which combination of flags EXTRACTS a `.tar.gz` file?', options: ['-czvf', '-xzvf', '-tzvf', '-ezvf'], answer: '-xzvf' }
    ],
    interviewQuestions: [
      { q: 'How do you extract a `tar` file into a specific directory instead of the current directory?', a: 'You use the `-C` (Change directory) flag at the end of the command. Example: `tar -xzvf archive.tar.gz -C /opt/destination/`.' }
    ],
    summary: ['Standard Linux archiver.', 'Preserves permissions.', '`czvf` to create, `xzvf` to extract.'],
    references: commonReferences
  },

  'linux_gzip': {
    isStructured: true,
    title: '90. gzip',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`gzip` is a compression utility designed to reduce the size of a single file.',
    whyUseIt: 'To shrink massive log files or database dumps to save hard drive space.',
    syntax: 'gzip file_name',
    codeExample: '# Compress a file\ngzip access.log\n# Output: Creates access.log.gz AND deletes the original access.log',
    hasLiveOutput: false,
    expectedOutput: 'File is compressed and renamed.',
    explanation: [
      { code: 'gzip', desc: 'Unlike zip, gzip can only compress ONE file at a time. It cannot bundle a folder. That is why it is almost always paired with `tar` (which bundles the folder into one file, which gzip then shrinks).' }
    ],
    realWorldExample: 'A cron job runs at midnight to compress yesterday\'s 5GB log file into a 200MB `.gz` file using `gzip access.log.1`.',
    commonMistakes: [
      { error: 'Thinking gzip works on folders', code: '', suffix: 'If you run `gzip my_folder`, it will fail. You must `tar` the folder first, or use `gzip -r` which bizarrely compresses every file inside the folder individually.' },
      { error: 'Losing the original file', code: '', suffix: 'By default, gzip deletes the original file after compressing it. If you want to keep the original, use `gzip -k file.txt`.' }
    ],
    bestPractices: ['Instead of using `gzip` manually, just use the `-z` flag inside your `tar` command to bundle and compress all at once.'],
    practiceExercise: {
      task: 'Compress `database.sql` but keep the original uncompressed file intact.',
      expectedOutput: 'database.sql and database.sql.gz now exist.',
      solution: 'gzip -k database.sql'
    },
    quiz: [
      { question: 'What does `gzip` do?', options: ['Extracts files', 'Compresses a single file to save space', 'Bundles folders together', 'Encrypts files'], answer: 'Compresses a single file to save space' },
      { question: 'Can `gzip` bundle an entire directory into a single archive file on its own?', options: ['Yes', 'No, it can only compress single files (must be paired with tar)', 'Only with the -d flag', 'Only as root'], answer: 'No, it can only compress single files (must be paired with tar)' },
      { question: 'What happens to the original file when you run standard `gzip file.txt`?', options: ['It stays there', 'It is deleted and replaced by file.txt.gz', 'It is moved to tmp', 'It is locked'], answer: 'It is deleted and replaced by file.txt.gz' },
      { question: 'Which flag tells `gzip` to KEEP the original file?', options: ['-c', '-k (keep)', '-s (save)', '-o (original)'], answer: '-k (keep)' },
      { question: 'What file extension does `gzip` automatically append to the file?', options: ['.zip', '.tar', '.gz', '.bz2'], answer: '.gz' }
    ],
    interviewQuestions: [
      { q: 'How can you read the contents of a `.gz` text file without uncompressing it first?', a: 'You can use the `zcat` or `zless` commands. `zcat file.log.gz | grep ERROR` decompresses the file on-the-fly in RAM and passes the text directly to grep.' }
    ],
    summary: ['Compresses single files.', 'Deletes original by default.', 'Use `-k` to keep original.'],
    references: commonReferences
  }
};