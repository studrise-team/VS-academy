const commonReferences = [
  { label: 'Linux Documentation', url: 'https://linux.die.net/' },
  { label: 'Ubuntu Official Docs', url: 'https://help.ubuntu.com/' }
];

export const linuxContentBatch4 = {
  'linux_chgrp': {
    isStructured: true,
    title: '46. chgrp',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: '`chgrp` stands for "Change Group". It is specifically used to change the group ownership of a file or directory.',
    whyUseIt: 'While `chown` can change both user and group, `chgrp` is a quicker, dedicated command if you only want to change the group.',
    syntax: 'chgrp [group] file_name',
    codeExample: '# Change the group of a file to "developers"\nchgrp developers project.txt\n\n# Recursively change a directory\nchgrp -R www-data /var/www/',
    hasLiveOutput: false,
    expectedOutput: 'Group is changed silently.',
    explanation: [
      { code: 'chgrp', desc: 'Changes the group. Standard users can use this IF they belong to the target group.' }
    ],
    realWorldExample: 'You create a shared folder and run `chgrp admins shared/` so everyone in the admins group can access it.',
    commonMistakes: [
      { error: 'Trying to change to a group you don\'t belong to', code: '', suffix: 'Unless you are root (using sudo), you can only use `chgrp` to change a file to a group that you are actually a member of.' }
    ],
    bestPractices: ['Most sysadmins just use `chown :groupname file` instead, as it means learning one less command.'],
    practiceExercise: {
      task: 'Change the group of `report.pdf` to `managers`.',
      expectedOutput: 'No output.',
      solution: 'chgrp managers report.pdf'
    },
    quiz: [
      { question: 'What does `chgrp` do?', options: ['Changes file group ownership', 'Changes passwords', 'Creates a group', 'Deletes a group'], answer: 'Changes file group ownership' },
      { question: 'What command can do exactly the same thing as `chgrp`?', options: ['chmod', 'chown', 'useradd', 'usermod'], answer: 'chown' },
      { question: 'Which flag makes `chgrp` change all files inside a directory?', options: ['-r', '-R', '-f', '-d'], answer: '-R' },
      { question: 'Can a standard user use `chgrp` to change a file to the "root" group?', options: ['Yes', 'No, they must be a member of the target group or use sudo', 'Only if the file is text', 'Yes, always'], answer: 'No, they must be a member of the target group or use sudo' },
      { question: 'If `chgrp` is successful, what output is displayed?', options: ['Group changed', 'Success', 'Nothing (silent)', 'A beep'], answer: 'Nothing (silent)' }
    ],
    interviewQuestions: [
      { q: 'Why might `chgrp` fail with "Operation not permitted" even if you own the file?', a: 'Because you are trying to change the group to a group that you (the user) do not belong to. Security rules prevent users from assigning files to arbitrary groups they aren\'t part of.' }
    ],
    summary: ['Changes group ownership.', 'Standard users can use it if they belong to the group.', 'Use `-R` for folders.'],
    references: commonReferences
  },

  'linux_umask': {
    isStructured: true,
    title: '47. umask',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: '`umask` (User File-Creation Mode Mask) determines the default permissions assigned to newly created files and directories.',
    whyUseIt: 'If you want every new file you create to automatically be hidden from other users, you change your umask instead of running `chmod` every single time.',
    syntax: 'umask [mask]',
    codeExample: '# View current umask\numask\n# Output: 0022\n\n# Set a new umask (removes all access for others)\numask 0077',
    hasLiveOutput: false,
    expectedOutput: 'The current 4-digit octal mask.',
    explanation: [
      { code: '0022', desc: 'The default mask. It SUBTRACTS permissions. Default file is 666. 666 - 022 = 644 (rw-r--r--).' }
    ],
    realWorldExample: 'A system administrator sets the umask in `/etc/profile` to 0077 so that all files created by any user on the server are strictly private by default.',
    commonMistakes: [
      { error: 'Adding instead of subtracting', code: '', suffix: 'umask is a MASK. It strips away permissions. A umask of 077 means you are taking away 7 (rwx) from the group and others.' }
    ],
    bestPractices: ['Do not change your umask unless you fully understand octal permissions, as it can break application functionality.'],
    practiceExercise: {
      task: 'Check your current umask value.',
      expectedOutput: 'A 4-digit number (e.g., 0022).',
      solution: 'umask'
    },
    quiz: [
      { question: 'What does `umask` do?', options: ['Hides files', 'Sets default permissions for newly created files', 'Masks your IP', 'Encrypts data'], answer: 'Sets default permissions for newly created files' },
      { question: 'Does `umask` ADD or SUBTRACT permissions from the system maximum?', options: ['Add', 'Subtract', 'Multiply', 'Divide'], answer: 'Subtract' },
      { question: 'What is the default umask on most Linux systems?', options: ['0000', '0777', '0022', '0600'], answer: '0022' },
      { question: 'If the base file permission is 666, and the umask is 022, what is the final file permission?', options: ['688', '644', '622', '000'], answer: '644' },
      { question: 'Is `umask` a permanent setting if you just run it in the terminal?', options: ['Yes', 'No, it resets when you close the terminal', 'Only for root', 'Yes, it writes to disk'], answer: 'No, it resets when you close the terminal' }
    ],
    interviewQuestions: [
      { q: 'Why are newly created files never executable, even if the umask is 0000?', a: 'For security reasons, the Linux kernel sets the base starting permission for files to 666 (rw-rw-rw-), never 777. Since the base doesn\'t have the execute bit, no umask can add it. You MUST explicitly use `chmod +x`.' }
    ],
    summary: ['Sets default file permissions.', 'Mask SUBTRACTS permissions.', 'Default is usually 0022.'],
    references: commonReferences
  },

  'linux_rwx': {
    isStructured: true,
    title: '48. Understanding rwx Permissions',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'In Linux, every file and folder has three basic permissions: Read (r), Write (w), and Execute (x). These are applied to three entities: the User, the Group, and Others.',
    whyUseIt: 'You must understand this to secure files, run scripts, and fix "Permission denied" errors.',
    syntax: '-- Conceptual',
    codeExample: '# ls -l output shows the permission string\n-rwxr-xr-- 1 alice staff 1024 Aug 5 file.sh',
    hasLiveOutput: false,
    expectedOutput: 'rwxr-xr--',
    explanation: [
      { code: 'rwx', desc: 'First 3 chars: User (Owner) has Read, Write, Execute.' },
      { code: 'r-x', desc: 'Next 3 chars: Group has Read and Execute (no write).' },
      { code: 'r--', desc: 'Last 3 chars: Others have Read only.' }
    ],
    realWorldExample: 'A web server needs to read `index.html`. If the Others permission is `---`, the public cannot view your website. It must be `r--`.',
    commonMistakes: [
      { error: 'Not realizing execute is required for folders', code: '', suffix: 'If you remove `x` from a folder (e.g., `chmod 644 dir`), nobody can `cd` into it, even if they have read access.' }
    ],
    bestPractices: ['Standard files should be 644 (`rw-r--r--`). Scripts should be 755 (`rwxr-xr-x`). Private keys should be 600 (`rw-------`).'],
    practiceExercise: {
      task: 'Translate `rwxr-xr-x` into its numeric (octal) equivalent.',
      expectedOutput: '755',
      solution: '755'
    },
    quiz: [
      { question: 'What do `r`, `w`, and `x` stand for?', options: ['Run, Wait, eXit', 'Read, Write, Execute', 'Root, Window, X-server', 'Record, Write, eXtend'], answer: 'Read, Write, Execute' },
      { question: 'What does the Execute (`x`) permission do on a DIRECTORY?', options: ['Runs it as a program', 'Allows you to enter it (cd)', 'Deletes it', 'Hides it'], answer: 'Allows you to enter it (cd)' },
      { question: 'In the string `-rwxr--r--`, what permissions does the Owner (User) have?', options: ['Read only', 'Read and Write', 'Read, Write, Execute', 'None'], answer: 'Read, Write, Execute' },
      { question: 'What numeric value does Read (r) have in octal notation?', options: ['1', '2', '4', '7'], answer: '4' },
      { question: 'What does a permission of `600` mean?', options: ['Everyone can read', 'Owner can read/write, everyone else is blocked', 'Owner can execute', 'File is deleted'], answer: 'Owner can read/write, everyone else is blocked' }
    ],
    interviewQuestions: [
      { q: 'Explain the SetUID (SUID) bit.', a: 'When the SUID bit is set on an executable file (shows as an `s` instead of `x`, like `rwsr-xr-x`), it means whoever runs the file executes it with the permissions of the file\'s OWNER, not the user running it. (e.g., the `passwd` command uses SUID so standard users can temporarily act as root to change their password).' }
    ],
    summary: ['r=4, w=2, x=1.', 'Applies to User, Group, Others.', 'Directories require `x` to enter.'],
    references: commonReferences
  },

  'linux_useradd': {
    isStructured: true,
    title: '49. useradd',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`useradd` is the low-level command used to create a new user account on a Linux system.',
    whyUseIt: 'When a new employee joins, or when you are installing a new software service that requires its own isolated user account.',
    syntax: 'sudo useradd [options] username',
    codeExample: '# Create a user with a home directory and bash shell\nsudo useradd -m -s /bin/bash bob',
    hasLiveOutput: false,
    expectedOutput: 'User is created silently.',
    explanation: [
      { code: '-m', desc: 'Creates the user\'s home directory (e.g., `/home/bob`). Without this, the user has no home.' },
      { code: '-s', desc: 'Defines the default shell (e.g., `/bin/bash`).' }
    ],
    realWorldExample: 'A sysadmin creating an account for a new database admin: `sudo useradd -m -s /bin/bash dbadmin`.',
    commonMistakes: [
      { error: 'Forgetting the -m flag', code: '', suffix: 'If you just run `useradd bob`, Bob will be created but he won\'t have a `/home/bob` directory, which breaks many graphical applications.' }
    ],
    bestPractices: ['On Debian/Ubuntu systems, prefer using `adduser` instead of `useradd`. `adduser` is an interactive script that automatically creates the home folder and prompts for a password.'],
    practiceExercise: {
      task: 'Create a user named `testuser` with a home directory.',
      expectedOutput: 'Query OK',
      solution: 'sudo useradd -m testuser'
    },
    quiz: [
      { question: 'What does `useradd` do?', options: ['Adds a user to a group', 'Creates a new user account', 'Deletes a user', 'Logs in a user'], answer: 'Creates a new user account' },
      { question: 'Does `useradd` require sudo/root privileges?', options: ['Yes', 'No', 'Only on Ubuntu', 'Only for system users'], answer: 'Yes' },
      { question: 'What happens if you run `useradd bob` without the `-m` flag?', options: ['Bob gets deleted', 'Bob gets root access', 'Bob is created but has no home directory', 'Command fails'], answer: 'Bob is created but has no home directory' },
      { question: 'What does the `-s /bin/bash` flag do?', options: ['Sets the password', 'Sets the user\'s default shell to Bash', 'Skips creation', 'Saves the user'], answer: 'Sets the user\'s default shell to Bash' },
      { question: 'What interactive command is often preferred over `useradd` on Ubuntu?', options: ['newuser', 'createuser', 'adduser', 'makeuser'], answer: 'adduser' }
    ],
    interviewQuestions: [
      { q: 'Where are the default files stored that get copied into a new user\'s home directory upon creation?', a: 'They are stored in `/etc/skel/`. Whatever files exist in that skeleton directory (like default `.bashrc` files) are copied to the new user\'s home directory.' }
    ],
    summary: ['Creates new users.', 'Requires `sudo`.', 'Use `-m` to create a home folder.'],
    references: commonReferences
  },

  'linux_passwd': {
    isStructured: true,
    title: '50. passwd',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The `passwd` command is used to set or change user passwords.',
    whyUseIt: 'You must set a password for newly created users, or change your own password if it is compromised.',
    syntax: 'passwd [username]',
    codeExample: '# Change your own password\npasswd\n\n# Change ANOTHER user\'s password (requires sudo)\nsudo passwd bob',
    hasLiveOutput: false,
    expectedOutput: 'Prompts to enter New password.',
    explanation: [
      { code: 'passwd', desc: 'When run by a standard user without arguments, it changes their own password.' }
    ],
    realWorldExample: 'An employee forgets their password. The sysadmin logs in and runs `sudo passwd employee_name` to force a reset.',
    commonMistakes: [
      { error: 'Thinking it is broken because nothing types on screen', code: '', suffix: 'When typing a password in Linux, absolutely nothing shows on screen (not even asterisks `***`). This is a security feature. Just keep typing and hit Enter.' }
    ],
    bestPractices: ['Use `sudo passwd -l username` to temporarily lock a user account (e.g., if an employee leaves) without deleting their files.'],
    practiceExercise: {
      task: 'Change your own password.',
      expectedOutput: 'Password updated successfully.',
      solution: 'passwd'
    },
    quiz: [
      { question: 'What does the `passwd` command do?', options: ['Shows passwords in cleartext', 'Changes passwords', 'Deletes passwords', 'Bypasses passwords'], answer: 'Changes passwords' },
      { question: 'Why does nothing show on the screen when you type your new password?', options: ['The keyboard is broken', 'It is a security feature to prevent shoulder-surfing', 'Your shell is frozen', 'You need root access'], answer: 'It is a security feature to prevent shoulder-surfing' },
      { question: 'Can Alice change Bob\'s password?', options: ['Yes', 'No, only Bob or Root can change Bob\'s password', 'Only if they share a group', 'Yes, anytime'], answer: 'No, only Bob or Root can change Bob\'s password' },
      { question: 'What does running `sudo passwd root` do?', options: ['Deletes root', 'Changes the password for the root user', 'Logs you in as root', 'Fails'], answer: 'Changes the password for the root user' },
      { question: 'Which file stores the actual encrypted password hashes?', options: ['/etc/passwd', '/etc/shadow', '/var/pass', '/root/pass'], answer: '/etc/shadow' }
    ],
    interviewQuestions: [
      { q: 'How can you force a user to change their password the very next time they log in?', a: 'Using the expire flag: `sudo passwd -e username`. This immediately expires their password, forcing a reset on next login.' }
    ],
    summary: ['Changes passwords.', 'Typing is invisible.', 'Root can change anyone\'s password.'],
    references: commonReferences
  },

  'linux_usermod': {
    isStructured: true,
    title: '51. usermod',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`usermod` stands for User Modify. It changes the properties of an existing user account.',
    whyUseIt: 'To add a user to a new group, change their home directory, or change their login shell.',
    syntax: 'sudo usermod [options] username',
    codeExample: '# Add "bob" to the "docker" group without removing his other groups (-aG)\nsudo usermod -aG docker bob',
    hasLiveOutput: false,
    expectedOutput: 'User properties updated silently.',
    explanation: [
      { code: '-aG', desc: 'Append Group. Extremely important. It ADDS the user to the group without removing them from their existing secondary groups.' }
    ],
    realWorldExample: 'A developer needs admin rights, so the sysadmin runs `sudo usermod -aG sudo alice` to grant her sudo privileges.',
    commonMistakes: [
      { error: 'Using -G instead of -aG', code: '', suffix: 'If you run `usermod -G docker bob`, Bob will be added to docker, but removed from ALL other secondary groups he was in. Always use `-a` (append) with `-G`!' }
    ],
    bestPractices: ['Always double-check group additions. The user must log out and back in for `usermod` group changes to apply.'],
    practiceExercise: {
      task: 'Add user `testuser` to the `www-data` group.',
      expectedOutput: 'Query OK',
      solution: 'sudo usermod -aG www-data testuser'
    },
    quiz: [
      { question: 'What does `usermod` do?', options: ['Creates a user', 'Deletes a user', 'Modifies an existing user account', 'Logs in a user'], answer: 'Modifies an existing user account' },
      { question: 'Which flag combination is used to safely ADD a user to a new secondary group?', options: ['-g', '-G', '-aG', '-add'], answer: '-aG' },
      { question: 'What happens if you use `-G` without `-a`?', options: ['Command fails', 'The user is added to the new group, but REMOVED from all other secondary groups', 'Nothing', 'Root is deleted'], answer: 'The user is added to the new group, but REMOVED from all other secondary groups' },
      { question: 'Does `usermod` require sudo?', options: ['Yes', 'No', 'Sometimes', 'Only for root'], answer: 'Yes' },
      { question: 'When do group changes made by `usermod` take effect for the user?', options: ['Instantly', 'After reboot', 'After the user logs out and logs back in', 'Never'], answer: 'After the user logs out and logs back in' }
    ],
    interviewQuestions: [
      { q: 'How would you use `usermod` to change a user\'s login name (rename the user)?', a: 'You use the `-l` (login) flag: `usermod -l newname oldname`. You usually also need to use `-d` and `-m` to move their home directory to match the new name.' }
    ],
    summary: ['Modifies existing users.', 'Use `-aG` to add to groups safely.', 'Requires logout to take effect.'],
    references: commonReferences
  },

  'linux_userdel': {
    isStructured: true,
    title: '52. userdel',
    difficulty: 'Intermediate',
    readingTime: '2 min',
    definition: '`userdel` stands for User Delete. It deletes a user account from the system.',
    whyUseIt: 'To remove access for employees who have left the company, maintaining server security.',
    syntax: 'sudo userdel [options] username',
    codeExample: '# Delete the user account, but LEAVE their files on disk\nsudo userdel bob\n\n# Delete the user AND destroy their home directory and files\nsudo userdel -r bob',
    hasLiveOutput: false,
    expectedOutput: 'User deleted silently.',
    explanation: [
      { code: '-r', desc: 'Recursive/Remove. Deletes the `/home/bob` directory and the user\'s mail spool.' }
    ],
    realWorldExample: 'An intern finishes their summer program. The sysadmin runs `sudo userdel intern` to revoke their access but keeps their files just in case they are needed later.',
    commonMistakes: [
      { error: 'Forgetting the -r flag', code: '', suffix: 'If you don\'t use `-r`, the user is gone, but their 50GB home folder stays on the hard drive forever, wasting space.' }
    ],
    bestPractices: ['Before deleting a user with `-r`, ensure they do not own any critical scripts or files used by the system outside of their home directory.'],
    practiceExercise: {
      task: 'Delete the user `testuser` AND their home directory.',
      expectedOutput: 'Query OK',
      solution: 'sudo userdel -r testuser'
    },
    quiz: [
      { question: 'What does `userdel` do?', options: ['Creates a user', 'Modifies a user', 'Deletes a user account', 'Locks a user'], answer: 'Deletes a user account' },
      { question: 'By default, does `userdel bob` delete Bob\'s files?', options: ['Yes', 'No, his home directory is left intact', 'Only on Ubuntu', 'Only if he is root'], answer: 'No, his home directory is left intact' },
      { question: 'Which flag must be used to completely wipe the user\'s home directory?', options: ['-f', '-wipe', '-r', '-all'], answer: '-r' },
      { question: 'Does `userdel` require sudo privileges?', options: ['Yes', 'No', 'Only for admins', 'Sometimes'], answer: 'Yes' },
      { question: 'What happens if you try to `userdel` a user who is currently logged in?', options: ['It kills their session instantly', 'It warns you and fails', 'It deletes them but leaves them logged in', 'It reboots the server'], answer: 'It warns you and fails' }
    ],
    interviewQuestions: [
      { q: 'If you delete a user WITHOUT the `-r` flag, what happens to the ownership of their files on the system?', a: 'The files remain, but their ownership is shown as the deleted user\'s numerical UID (e.g., `1001`) instead of a name, because the name no longer exists in `/etc/passwd`. These are called "orphaned files".' }
    ],
    summary: ['Deletes user accounts.', 'Use `-r` to delete their files.', 'Requires `sudo`.'],
    references: commonReferences
  },

  'linux_groupadd': {
    isStructured: true,
    title: '53. groupadd',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`groupadd` creates a new group on the system.',
    whyUseIt: 'To create a centralized team permission bucket (like "hr" or "developers") before adding users to it.',
    syntax: 'sudo groupadd groupname',
    codeExample: 'sudo groupadd developers',
    hasLiveOutput: false,
    expectedOutput: 'Group created silently.',
    explanation: [
      { code: 'groupadd', desc: 'Simply adds a new line to `/etc/group`.' }
    ],
    realWorldExample: 'A new department is formed. The sysadmin runs `sudo groupadd marketing` so they can create a shared folder owned by that group.',
    commonMistakes: [
      { error: 'Thinking groupadd adds users', code: '', suffix: '`groupadd` ONLY creates the empty group bucket. You must use `usermod` to actually put users into the group.' }
    ],
    bestPractices: ['Group names should be descriptive, lowercase, and contain no spaces.'],
    practiceExercise: {
      task: 'Create a new group called `admins`.',
      expectedOutput: 'Query OK',
      solution: 'sudo groupadd admins'
    },
    quiz: [
      { question: 'What does `groupadd` do?', options: ['Adds a user to a group', 'Creates a new, empty group', 'Deletes a group', 'Changes group passwords'], answer: 'Creates a new, empty group' },
      { question: 'Which system file is updated when you run `groupadd`?', options: ['/etc/passwd', '/etc/shadow', '/etc/group', '/var/groups'], answer: '/etc/group' },
      { question: 'Does `groupadd` put your current user into the new group?', options: ['Yes', 'No, it just creates the group', 'Only as root', 'Only if specified'], answer: 'No, it just creates the group' },
      { question: 'Does this command require sudo?', options: ['Yes', 'No', 'Sometimes', 'Only on Sundays'], answer: 'Yes' },
      { question: 'What command do you use AFTER `groupadd` to put users into it?', options: ['useradd', 'usermod', 'groupmod', 'chmod'], answer: 'usermod' }
    ],
    interviewQuestions: [
      { q: 'How can you specify a specific numerical GID (Group ID) when creating a group?', a: 'By using the `-g` flag: `sudo groupadd -g 1050 developers`. This is useful when synchronizing groups across multiple servers.' }
    ],
    summary: ['Creates an empty group.', 'Does not add users.', 'Requires `sudo`.'],
    references: commonReferences
  },

  'linux_groupdel': {
    isStructured: true,
    title: '54. groupdel',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`groupdel` stands for Group Delete. It removes an existing group from the system.',
    whyUseIt: 'To clean up old team groups that are no longer used.',
    syntax: 'sudo groupdel groupname',
    codeExample: 'sudo groupdel marketing',
    hasLiveOutput: false,
    expectedOutput: 'Group deleted silently.',
    explanation: [
      { code: 'groupdel', desc: 'Removes the group from `/etc/group`.' }
    ],
    realWorldExample: 'A project finishes and the temporary team is disbanded. The sysadmin runs `sudo groupdel project_temp` to clean up permissions.',
    commonMistakes: [
      { error: 'Deleting a user\'s Primary Group', code: '', suffix: 'You cannot use `groupdel` to delete a group if it is the Primary Group of an existing user. You must delete the user first, or change their primary group.' }
    ],
    bestPractices: ['Before deleting a group, run `find / -group groupname` to ensure no files are currently owned by that group, otherwise they will become orphaned.'],
    practiceExercise: {
      task: 'Delete the group `admins`.',
      expectedOutput: 'Query OK',
      solution: 'sudo groupdel admins'
    },
    quiz: [
      { question: 'What does `groupdel` do?', options: ['Deletes files', 'Deletes a user', 'Deletes a group', 'Deletes passwords'], answer: 'Deletes a group' },
      { question: 'What happens to the users that were in a Secondary Group when that group is deleted?', options: ['The users are deleted', 'The users lose the group\'s permissions, but their accounts are fine', 'The server crashes', 'Nothing'], answer: 'The users lose the group\'s permissions, but their accounts are fine' },
      { question: 'Can you delete a group that is currently set as a user\'s Primary Group?', options: ['Yes', 'No, the system will prevent it', 'Only as root', 'Only with -f'], answer: 'No, the system will prevent it' },
      { question: 'Does `groupdel` automatically delete files owned by the group?', options: ['Yes', 'No, it leaves them as orphaned files', 'Only on Ubuntu', 'Only if empty'], answer: 'No, it leaves them as orphaned files' },
      { question: 'Does `groupdel` require sudo?', options: ['Yes', 'No', 'Sometimes', 'Only for system groups'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'What happens to the group ownership of a file after the group is deleted via `groupdel`?', a: 'The file retains the numerical GID (Group ID). If you run `ls -l`, instead of showing the group name (e.g., `marketing`), it will show the raw GID number (e.g., `1005`).' }
    ],
    summary: ['Deletes groups.', 'Does not delete files.', 'Cannot delete Primary groups of active users.'],
    references: commonReferences
  },

  'linux_sudo': {
    isStructured: true,
    title: '55. sudo',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`sudo` stands for "SuperUser DO". It allows a permitted user to execute a command as the superuser (root).',
    whyUseIt: 'Logging in directly as `root` is dangerous. `sudo` allows you to run your daily tasks as a safe standard user, and only elevate your privileges for specific commands.',
    syntax: 'sudo [command]',
    codeExample: '# Fails (Permission denied)\napt install nginx\n\n# Succeeds (Prompts for YOUR password, then runs as root)\nsudo apt install nginx',
    hasLiveOutput: false,
    expectedOutput: 'Command executes with root privileges.',
    explanation: [
      { code: 'sudo', desc: 'Temporarily elevates your permissions for a single command.' }
    ],
    realWorldExample: 'You are editing a system configuration file like `/etc/nginx/nginx.conf`. Standard users cannot save changes to it. You must open it with `sudo nano /etc/nginx/nginx.conf`.',
    commonMistakes: [
      { error: 'Typing the root password', code: '', suffix: 'When `sudo` asks for a password, it wants YOUR user password, not the root password. It is verifying that YOU are authorized to use sudo.' },
      { error: 'Using sudo for everything', code: '', suffix: 'Do not use `sudo` to create files in your own Home directory, or those files will be owned by root and you won\'t be able to edit them later.' }
    ],
    bestPractices: ['If you run a command and get "Permission denied", press the Up Arrow to get the command back, press Home to go to the start of the line, type `sudo ` and hit enter.'],
    practiceExercise: {
      task: 'Update the system package manager cache, which requires admin rights.',
      expectedOutput: 'Packages update.',
      solution: 'sudo apt update'
    },
    quiz: [
      { question: 'What does `sudo` stand for?', options: ['SuperUser DO', 'System Update DO', 'Secure User Data Object', 'SuperUser Data Order'], answer: 'SuperUser DO' },
      { question: 'What is the purpose of `sudo`?', options: ['To install games', 'To execute a command with root/administrator privileges', 'To delete files', 'To switch users permanently'], answer: 'To execute a command with root/administrator privileges' },
      { question: 'When `sudo` asks for a password, whose password does it want?', options: ['The root password', 'YOUR user password', 'The admin password', 'No password'], answer: 'YOUR user password' },
      { question: 'Why is `sudo` preferred over just logging in as root?', options: ['It is faster', 'It prevents accidental system-wide destruction by making you consciously type sudo for dangerous commands', 'It saves memory', 'Root is illegal'], answer: 'It prevents accidental system-wide destruction by making you consciously type sudo for dangerous commands' },
      { question: 'Which configuration file controls who is allowed to use the `sudo` command?', options: ['/etc/sudoers', '/etc/passwd', '/etc/admin', '/root/config'], answer: '/etc/sudoers' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `su` and `sudo`?', a: '`su` (Switch User) completely switches your shell session to become the root user, requiring the root password. `sudo` temporarily elevates a single command and requires your own password, which is much safer and easier to audit.' }
    ],
    summary: ['SuperUser DO.', 'Runs commands as root.', 'Requires your password, not root\'s.'],
    references: commonReferences
  },

  'linux_apt': {
    isStructured: true,
    title: '56. apt',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: '`apt` (Advanced Package Tool) is the primary package manager for Debian and Ubuntu-based Linux distributions. It is used to install, update, and remove software.',
    whyUseIt: 'Unlike Windows where you download `.exe` files from random websites, Linux downloads verified software from centralized, secure repositories using `apt`.',
    syntax: 'sudo apt [action] [package_name]',
    codeExample: '# 1. Update the list of available software\nsudo apt update\n\n# 2. Install a program\nsudo apt install htop\n\n# 3. Remove a program\nsudo apt remove htop',
    hasLiveOutput: false,
    expectedOutput: 'Downloads and installs the software automatically.',
    explanation: [
      { code: 'update', desc: 'Does NOT install anything. It just refreshes the catalog so your computer knows about the latest versions.' },
      { code: 'install', desc: 'Downloads and installs the actual software.' }
    ],
    realWorldExample: 'A developer needs a database. Instead of Googling for a download link, they simply type `sudo apt install mysql-server` and it installs in 10 seconds.',
    commonMistakes: [
      { error: 'Forgetting to run apt update first', code: '', suffix: 'If you try to install software on a fresh server without running `sudo apt update` first, it will fail because its catalog is completely empty.' }
    ],
    bestPractices: ['Always run `sudo apt update` before attempting to install new software.'],
    practiceExercise: {
      task: 'Install the `tree` command line utility.',
      expectedOutput: 'Tree installs successfully.',
      solution: 'sudo apt install tree'
    },
    quiz: [
      { question: 'What does `apt` stand for?', options: ['Automated Program Tracker', 'Advanced Package Tool', 'Application Port Transfer', 'Apple Package Tool'], answer: 'Advanced Package Tool' },
      { question: 'What is `apt` used for?', options: ['Writing documents', 'Installing, updating, and removing software', 'Configuring the network', 'Rebooting the server'], answer: 'Installing, updating, and removing software' },
      { question: 'What does `sudo apt update` do?', options: ['Upgrades all your software', 'Restarts the computer', 'Refreshes the catalog/list of available software', 'Installs Windows'], answer: 'Refreshes the catalog/list of available software' },
      { question: 'Why does `apt` require `sudo`?', options: ['It does not', 'Installing software system-wide modifies system folders, which requires root privileges', 'To encrypt data', 'To use the internet'], answer: 'Installing software system-wide modifies system folders, which requires root privileges' },
      { question: 'Which family of Linux uses `apt`?', options: ['Red Hat / CentOS', 'Arch', 'Debian / Ubuntu', 'Alpine'], answer: 'Debian / Ubuntu' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `apt update` and `apt upgrade`?', a: '`apt update` only fetches the latest package lists from the repositories (like refreshing a menu). `apt upgrade` actually downloads and installs the newer versions of the software you currently have installed.' }
    ],
    summary: ['Package manager for Ubuntu.', 'Downloads secure software.', 'Always `update` before `install`.'],
    references: commonReferences
  },

  'linux_apt_get': {
    isStructured: true,
    title: '57. apt-get',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`apt-get` is the older, lower-level predecessor to the newer `apt` command. It is used for package management in Debian-based systems.',
    whyUseIt: 'While humans should use the newer `apt` command (it has better colors and progress bars), automated Bash scripts and Dockerfiles should strictly use `apt-get` because its output is more stable and predictable.',
    syntax: 'sudo apt-get [action] [package]',
    codeExample: '# Inside a Dockerfile (Automated script)\nRUN apt-get update && apt-get install -y curl',
    hasLiveOutput: false,
    expectedOutput: 'Installs software without fancy formatting.',
    explanation: [
      { code: 'apt-get', desc: 'Stable, backward-compatible package management.' },
      { code: '-y', desc: 'Auto-answers "Yes" to prompts, essential for automated scripts.' }
    ],
    realWorldExample: 'A DevOps engineer writing a Dockerfile uses `apt-get update` instead of `apt update` to prevent warnings about unstable CLI interfaces during the build process.',
    commonMistakes: [
      { error: 'Using apt in scripts', code: '', suffix: 'If you use `apt` in a bash script, you might get a warning: "WARNING: apt does not have a stable CLI interface. Use with caution in scripts."' }
    ],
    bestPractices: ['Use `apt` when you are typing on the keyboard. Use `apt-get` when you are writing a script.'],
    practiceExercise: {
      task: 'Write the command to update package lists inside a non-interactive bash script.',
      expectedOutput: 'Query OK',
      solution: 'apt-get update'
    },
    quiz: [
      { question: 'How is `apt-get` related to `apt`?', options: ['It is a virus', 'It is the older, lower-level backend that `apt` is built on top of', 'It is for Mac', 'It is a network tool'], answer: 'It is the older, lower-level backend that `apt` is built on top of' },
      { question: 'When should you use `apt-get` instead of `apt`?', options: ['Never', 'When writing automated scripts or Dockerfiles', 'When you want pretty colors', 'When playing games'], answer: 'When writing automated scripts or Dockerfiles' },
      { question: 'Why is `apt` discouraged in automated scripts?', options: ['It is too fast', 'Its text output formatting changes often and is meant for humans, not parsers', 'It costs money', 'It requires rebooting'], answer: 'Its text output formatting changes often and is meant for humans, not parsers' },
      { question: 'What does the `-y` flag do in `apt-get install -y nginx`?', options: ['Yellow color', 'Auto-answers "Yes" to the installation prompt', 'Yields process', 'Yanks files'], answer: 'Auto-answers "Yes" to the installation prompt' },
      { question: 'Does `apt-get` require sudo?', options: ['Yes', 'No', 'Only on Sundays', 'Only for root'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'What is the purpose of `apt-get autoremove`?', a: 'It removes packages that were automatically installed to satisfy dependencies for other packages and are now no longer needed (because the original package was deleted).' }
    ],
    summary: ['Older version of `apt`.', 'Use exclusively for Bash/Docker scripts.', 'Use `-y` for automation.'],
    references: commonReferences
  },

  'linux_dpkg': {
    isStructured: true,
    title: '58. dpkg',
    difficulty: 'Advanced',
    readingTime: '4 min',
    definition: '`dpkg` (Debian Package) is the core package manager for Debian/Ubuntu at the lowest level. It is used to manually install `.deb` files you downloaded directly.',
    whyUseIt: 'Sometimes a piece of software (like Google Chrome or VS Code) is not in the central `apt` repository. You must download the `.deb` file from their website and install it manually using `dpkg`.',
    syntax: 'sudo dpkg -i file_name.deb',
    codeExample: '# Install a manually downloaded package\nsudo dpkg -i google-chrome-stable_current_amd64.deb',
    hasLiveOutput: false,
    expectedOutput: 'Unpacks and installs the .deb file.',
    explanation: [
      { code: '-i', desc: 'Install.' }
    ],
    realWorldExample: 'Downloading the Discord or Slack client for Linux as a `.deb` file and installing it via the terminal using `dpkg -i`.',
    commonMistakes: [
      { error: 'Dependency Hell', code: '', suffix: 'Unlike `apt`, `dpkg` DOES NOT download missing dependencies. If Chrome requires a library you don\'t have, `dpkg` will fail. You must run `sudo apt --fix-broken install` immediately after to fix it.' }
    ],
    bestPractices: ['Modern `apt` can actually install `.deb` files directly AND resolve dependencies simultaneously (`sudo apt install ./file.deb`). This is heavily preferred over `dpkg`.'],
    practiceExercise: {
      task: 'Install a downloaded file named `vscode.deb` using dpkg.',
      expectedOutput: 'Installs the package.',
      solution: 'sudo dpkg -i vscode.deb'
    },
    quiz: [
      { question: 'What does `dpkg` do?', options: ['Deletes files', 'Installs local `.deb` files manually', 'Downloads from the internet', 'Formats drives'], answer: 'Installs local `.deb` files manually' },
      { question: 'What file extension does `dpkg` work with?', options: ['.exe', '.rpm', '.deb', '.tar'], answer: '.deb' },
      { question: 'What is the main weakness of `dpkg` compared to `apt`?', options: ['It is slow', 'It does not automatically resolve and download missing dependencies', 'It requires Windows', 'It requires rebooting'], answer: 'It does not automatically resolve and download missing dependencies' },
      { question: 'Which flag is used to install a package with `dpkg`?', options: ['-r', '-d', '-i', '-install'], answer: '-i' },
      { question: 'If `dpkg` fails due to missing dependencies, what command fixes it?', options: ['dpkg --fix', 'sudo apt --fix-broken install', 'reboot', 'rm -rf'], answer: 'sudo apt --fix-broken install' }
    ],
    interviewQuestions: [
      { q: 'How can you list all software currently installed on the system using `dpkg`?', a: 'You can use `dpkg -l`. This will output a massive list of every single package installed by the package manager.' }
    ],
    summary: ['Low-level package installer.', 'Installs `.deb` files.', 'Does not fix dependencies.'],
    references: commonReferences
  },

  'linux_snap': {
    isStructured: true,
    title: '59. snap',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`snap` is a modern software packaging system developed by Canonical (the makers of Ubuntu). Snaps are self-contained applications that bundle all their dependencies together.',
    whyUseIt: 'Snaps work across almost all Linux distributions, they auto-update automatically, and they run in a secure sandbox isolated from the rest of the OS.',
    syntax: 'sudo snap install [package_name]',
    codeExample: '# Install an app via snap\nsudo snap install postman\n\n# List installed snaps\nsnap list',
    hasLiveOutput: false,
    expectedOutput: 'Downloads and mounts the self-contained app.',
    explanation: [
      { code: 'snap', desc: 'The command used to interact with the Snap Store.' }
    ],
    realWorldExample: 'Installing heavy desktop applications like Spotify, Slack, or Postman. They are often provided as Snaps so developers don\'t have to package them 50 different ways for 50 different Linux distros.',
    commonMistakes: [
      { error: 'Wondering why it takes up so much disk space', code: '', suffix: 'Because Snaps bundle ALL their dependencies (even if you already have them installed), they take up significantly more hard drive space than `apt` packages.' }
    ],
    bestPractices: ['For core system tools and servers (like Nginx, Node.js), use `apt`. For large, graphical desktop applications, `snap` is acceptable.'],
    practiceExercise: {
      task: 'Install the `spotify` application using the snap package manager.',
      expectedOutput: 'Installs Spotify.',
      solution: 'sudo snap install spotify'
    },
    quiz: [
      { question: 'What is a "Snap" package?', options: ['A photo', 'A self-contained app that bundles all its dependencies', 'A kernel module', 'A zip file'], answer: 'A self-contained app that bundles all its dependencies' },
      { question: 'Who developed the Snap package system?', options: ['Red Hat', 'Canonical (Ubuntu)', 'Microsoft', 'Google'], answer: 'Canonical (Ubuntu)' },
      { question: 'What is a major advantage of Snap packages?', options: ['They use very little disk space', 'They run across almost all Linux distributions and update automatically', 'They don\'t require a GUI', 'They are completely open source'], answer: 'They run across almost all Linux distributions and update automatically' },
      { question: 'What is a major disadvantage of Snap packages?', options: ['They require Windows', 'They are often slower to start up and take up much more disk space', 'They delete your files', 'They require manual updates'], answer: 'They are often slower to start up and take up much more disk space' },
      { question: 'How do you list all currently installed snaps?', options: ['snap view', 'snap list', 'apt list snaps', 'ls snaps'], answer: 'snap list' }
    ],
    interviewQuestions: [
      { q: 'How does a Snap package interact with the file system compared to an apt package?', a: 'Apt packages extract their files into the host file system (e.g., binaries in `/usr/bin`, configs in `/etc`). Snaps are actually compressed filesystem images (SquashFS) that are mounted as read-only loop devices at runtime.' }
    ],
    summary: ['Modern, self-contained apps.', 'Cross-distribution.', 'Auto-updating but heavy.'],
    references: commonReferences
  },

  'linux_install_software': {
    isStructured: true,
    title: '60. Installing Software (Summary)',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'A conceptual summary of the three main ways to install software on an Ubuntu/Debian system.',
    whyUseIt: 'Knowing which tool to use is critical for maintaining a clean, stable Linux system.',
    syntax: '-- Conceptual',
    codeExample: '# Method 1: The standard repository (Best for system tools/servers)\nsudo apt install htop\n\n# Method 2: Downloaded .deb file (When not in apt)\nsudo apt install ./discord.deb\n\n# Method 3: Snap (Best for large desktop apps)\nsudo snap install slack',
    hasLiveOutput: false,
    expectedOutput: 'Understanding of the Linux package ecosystem.',
    explanation: [
      { code: 'apt', desc: 'The gold standard. Use this 90% of the time.' },
      { code: 'snap', desc: 'Use for modern, bulky GUI apps.' }
    ],
    realWorldExample: 'A developer uses `apt` to install `python3` (a core tool), but uses `snap` to install `pycharm-community` (a heavy IDE).',
    commonMistakes: [
      { error: 'Compiling from source', code: '', suffix: 'Avoid downloading `.tar.gz` source code files and running `make install` unless absolutely necessary. It bypasses the package manager, making the software incredibly difficult to update or remove later.' }
    ],
    bestPractices: ['Stick to `apt` whenever possible. It integrates best with the OS.'],
    practiceExercise: {
      task: 'What is the safest and most standard command used to install software on Ubuntu?',
      expectedOutput: 'apt',
      solution: 'sudo apt install [package]'
    },
    quiz: [
      { question: 'Which tool should you use 90% of the time to install software on Ubuntu?', options: ['snap', 'dpkg', 'apt', 'make'], answer: 'apt' },
      { question: 'If an app is not available via `apt`, but provides a `.deb` download, what is the best way to install it?', options: ['Double click it', 'sudo apt install ./file.deb', 'snap', 'yum'], answer: 'sudo apt install ./file.deb' },
      { question: 'Why should you avoid compiling software from source (make install) if an `apt` package is available?', options: ['It is illegal', 'It bypasses the package manager, making it hard to update or cleanly remove', 'It requires a GUI', 'It uses more RAM'], answer: 'It bypasses the package manager, making it hard to update or cleanly remove' },
      { question: 'Which installation method isolates the application in a security sandbox?', options: ['apt', 'dpkg', 'snap', 'tar'], answer: 'snap' },
      { question: 'If you want to install the Apache Web Server, which tool should you use?', options: ['snap', 'apt', 'dpkg', 'flatpak'], answer: 'apt' }
    ],
    interviewQuestions: [
      { q: 'Explain the concept of a PPA (Personal Package Archive).', a: 'A PPA is an external software repository hosted by individuals or teams on Launchpad. If software is too new for the official Ubuntu repositories, you can add a PPA to your system, which allows `apt` to download the newer software directly from the developer.' }
    ],
    summary: ['Use `apt` as the default.', 'Use `.deb` for manual downloads.', 'Use `snap` for heavy desktop apps.'],
    references: commonReferences
  }
};