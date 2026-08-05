const commonReferences = [
  { label: 'Linux Documentation', url: 'https://linux.die.net/' },
  { label: 'Ubuntu Official Docs', url: 'https://help.ubuntu.com/' }
];

export const linuxContentBatch3 = {
  'linux_tail': {
    isStructured: true,
    title: '31. tail',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`tail` outputs the last part (bottom) of a file. By default, it prints the last 10 lines.',
    whyUseIt: 'Extremely useful for viewing the most recent entries in log files, as new data is typically appended to the bottom.',
    syntax: 'tail [options] file_name',
    codeExample: '# Print the last 10 lines\ntail error.log\n\n# Follow the file in real-time as it updates\ntail -f error.log',
    hasLiveOutput: false,
    expectedOutput: 'The most recent log entries are printed to the screen.',
    explanation: [
      { code: '-n', desc: 'Specify the number of lines (e.g., `tail -n 20`).' },
      { code: '-f', desc: 'Follow mode. The terminal stays open and prints new lines to the screen the exact millisecond they are added to the file.' }
    ],
    realWorldExample: 'A developer deploys a new web app and runs `tail -f /var/log/nginx/access.log` to watch incoming web traffic live in real-time.',
    commonMistakes: [
      { error: 'Not knowing how to stop tail -f', code: '', suffix: '`tail -f` will run forever waiting for new lines. You MUST press `Ctrl+C` to stop it and return to the prompt.' }
    ],
    bestPractices: ['Use `tail -f` when debugging live applications to instantly see errors as they happen.'],
    practiceExercise: {
      task: 'Watch the `syslog` file in real-time.',
      expectedOutput: 'Live log stream.',
      solution: 'tail -f /var/log/syslog'
    },
    quiz: [
      { question: 'What does `tail` do by default?', options: ['Prints the first 10 lines', 'Prints the last 10 lines', 'Deletes the last 10 lines', 'Follows the file'], answer: 'Prints the last 10 lines' },
      { question: 'Which flag allows you to watch a file update in real-time?', options: ['-r', '-w', '-f', '-live'], answer: '-f' },
      { question: 'How do you stop a `tail -f` process?', options: ['Press Q', 'Press Esc', 'Press Ctrl+C', 'Type exit'], answer: 'Press Ctrl+C' },
      { question: 'How do you print the last 50 lines of a file?', options: ['tail -l 50', 'tail -50', 'tail -n 50', 'Both tail -50 and tail -n 50 work'], answer: 'Both tail -50 and tail -n 50 work' },
      { question: 'What type of files is `tail` most commonly used for?', options: ['Images', 'Log files', 'Audio files', 'Executable binaries'], answer: 'Log files' }
    ],
    interviewQuestions: [
      { q: 'If a log file is rotated (moved and recreated) while you are running `tail -f`, what happens?', a: 'Standard `tail -f` tracks the file descriptor. If the file is rotated, `tail` keeps tracking the old (now rotated) file. To track the actual filename even if it is replaced, use `tail -F`.' }
    ],
    summary: ['Prints the bottom of a file.', 'Use `-f` to watch live logs.', 'Press Ctrl+C to exit.'],
    references: commonReferences
  },

  'linux_nl': {
    isStructured: true,
    title: '32. nl',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: '`nl` stands for "Number Lines". It reads a file and outputs it to the terminal with line numbers added to the left side.',
    whyUseIt: 'When you are reviewing a script or data file and need to reference specific line numbers to a colleague.',
    syntax: 'nl file_name',
    codeExample: 'nl script.sh',
    hasLiveOutput: false,
    expectedOutput: '     1	#!/bin/bash\n     2	echo "Hello"\n     3	exit 0',
    explanation: [
      { code: 'nl', desc: 'By default, it numbers all non-empty lines.' }
    ],
    realWorldExample: 'An error message says "Syntax error on line 45". You run `nl script.py | head -n 50` to easily find line 45.',
    commonMistakes: [
      { error: 'Assuming it alters the file', code: '', suffix: '`nl` only formats the output on your screen. The actual file on the hard drive is untouched.' }
    ],
    bestPractices: ['You can also achieve this by using `cat -n file_name`, which is often easier to remember.'],
    practiceExercise: {
      task: 'Print `data.txt` with line numbers.',
      expectedOutput: 'Numbered list.',
      solution: 'nl data.txt'
    },
    quiz: [
      { question: 'What does `nl` do?', options: ['New Line', 'Number Lines', 'Null List', 'Next Level'], answer: 'Number Lines' },
      { question: 'Does `nl` write the line numbers permanently into the file?', options: ['Yes', 'No, it only formats the output to the screen', 'Only as root', 'Only if you save it'], answer: 'No, it only formats the output to the screen' },
      { question: 'What is a common alternative to `nl`?', options: ['ls -n', 'cat -n', 'grep -n', 'head -n'], answer: 'cat -n' },
      { question: 'By default, does `nl` number completely empty lines?', options: ['Yes', 'No', 'Sometimes', 'Only at the end'], answer: 'No' },
      { question: 'Why would you use `nl`?', options: ['To encrypt data', 'To help locate a syntax error by line number', 'To sort a file', 'To compress it'], answer: 'To help locate a syntax error by line number' }
    ],
    interviewQuestions: [
      { q: 'How would you use `nl` to number EVERY line, including completely empty lines?', a: 'You use the `-b a` flag (body numbering style: all). `nl -b a file.txt`.' }
    ],
    summary: ['Adds line numbers to output.', 'Does not modify the file.', 'Alternative to `cat -n`.'],
    references: commonReferences
  },

  'linux_wc': {
    isStructured: true,
    title: '33. wc',
    difficulty: 'Beginner',
    readingTime: '3 min',
    definition: '`wc` stands for "Word Count". It counts the number of lines, words, and bytes (characters) in a file or data stream.',
    whyUseIt: 'To figure out how many rows are in a massive CSV, or to count how many files are in a directory by piping `ls | wc -l`.',
    syntax: 'wc [options] file_name',
    codeExample: '# Count lines, words, and bytes\nwc document.txt\n\n# Count ONLY lines\nwc -l data.csv',
    hasLiveOutput: false,
    expectedOutput: '  100  1050 12050 document.txt',
    explanation: [
      { code: '-l', desc: 'Lines only.' },
      { code: '-w', desc: 'Words only.' },
      { code: '-c', desc: 'Bytes/Characters only.' }
    ],
    realWorldExample: 'A developer wants to know how many times the word "ERROR" appears in a log. They run `grep "ERROR" app.log | wc -l` to get an exact count.',
    commonMistakes: [
      { error: 'Forgetting the flag', code: '', suffix: 'Running just `wc` gives you three numbers, which can be confusing. Usually, you only care about lines, so always use `wc -l`.' }
    ],
    bestPractices: ['`wc -l` is one of the most powerful tools in Linux when combined with pipes (`|`) to count the output of other commands.'],
    practiceExercise: {
      task: 'Count exactly how many lines are in `/etc/passwd`.',
      expectedOutput: 'A single number.',
      solution: 'wc -l /etc/passwd'
    },
    quiz: [
      { question: 'What does `wc` stand for?', options: ['Water Closet', 'Word Count', 'Web Client', 'Window Capture'], answer: 'Word Count' },
      { question: 'What does `wc` output by default (without flags)?', options: ['Lines, Words, Bytes', 'Just Lines', 'Just Words', 'Error'], answer: 'Lines, Words, Bytes' },
      { question: 'Which flag is used to count ONLY the number of lines?', options: ['-lines', '-n', '-l', '-c'], answer: '-l' },
      { question: 'What does `ls | wc -l` accomplish?', options: ['Lists files with sizes', 'Counts the number of files/folders in the current directory', 'Deletes files', 'Errors out'], answer: 'Counts the number of files/folders in the current directory' },
      { question: 'Which flag counts characters/bytes?', options: ['-c', '-b', '-char', '-w'], answer: '-c' }
    ],
    interviewQuestions: [
      { q: 'Is there a difference between `wc -c` and `wc -m`?', a: 'Yes. `-c` counts the number of bytes. `-m` counts the number of characters. In ASCII, they are the same. But with multi-byte Unicode characters (like emojis), `-c` will be higher than `-m`.' }
    ],
    summary: ['Stands for Word Count.', 'Use `-l` for line counts.', 'Extremely useful with pipes.'],
    references: commonReferences
  },

  'linux_grep': {
    isStructured: true,
    title: '34. grep',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: '`grep` (Global Regular Expression Print) searches through text files (or piped output) for lines matching a specific pattern or word, and prints those lines.',
    whyUseIt: 'It is the ultimate search tool. You use it to find errors in logs, find specific variables in code, or filter output.',
    syntax: 'grep [options] "pattern" file_name',
    codeExample: '# Find all lines containing "ERROR"\ngrep "ERROR" /var/log/syslog\n\n# Case-insensitive search (-i)\ngrep -i "failed" auth.log\n\n# Search recursively through a whole folder (-r)\ngrep -r "TODO" src/',
    hasLiveOutput: false,
    expectedOutput: 'Any line containing the match is printed.',
    explanation: [
      { code: '-i', desc: 'Case insensitive (matches Error, ERROR, error).' },
      { code: '-v', desc: 'Invert match (shows lines that DO NOT contain the word).' }
    ],
    realWorldExample: 'Your web app is broken. You run `grep -i "exception" server.log` to instantly pull out the exact crash messages from a 10,000 line log file.',
    commonMistakes: [
      { error: 'Searching a folder without -r', code: '', suffix: 'If you run `grep "text" folder_name`, it will error saying "Is a directory". You must use `grep -r` to search inside folders.' }
    ],
    bestPractices: ['Master `grep` with pipes. E.g., `ps aux | grep node` (list all processes, then filter for "node" to see if your server is running).'],
    practiceExercise: {
      task: 'Search `/etc/passwd` for the user "root".',
      expectedOutput: 'root:x:0:0:root:/root:/bin/bash',
      solution: 'grep "root" /etc/passwd'
    },
    quiz: [
      { question: 'What does `grep` do?', options: ['Deletes files', 'Searches text for a specific pattern', 'Zips files', 'Changes permissions'], answer: 'Searches text for a specific pattern' },
      { question: 'Which flag makes `grep` case-insensitive?', options: ['-c', '-v', '-i', '-r'], answer: '-i' },
      { question: 'Which flag makes `grep` search recursively through all files in a folder?', options: ['-f', '-R', '-v', '-l'], answer: '-R (or -r)' },
      { question: 'What does `grep -v "success"` do?', options: ['Verifies success', 'Inverts the search: shows all lines that DO NOT contain "success"', 'Errors out', 'Makes it verbose'], answer: 'Inverts the search: shows all lines that DO NOT contain "success"' },
      { question: 'What does `cat file.txt | grep "apple"` do?', options: ['Fails', 'Takes the output of cat and filters it for the word "apple"', 'Replaces apple with file', 'Deletes apple'], answer: 'Takes the output of cat and filters it for the word "apple"' }
    ],
    interviewQuestions: [
      { q: 'How would you use `grep` to count the NUMBER of times a word appears, rather than printing the lines?', a: 'Use the `-c` (count) flag. `grep -c "ERROR" log.txt` will output a single integer representing the number of matching lines.' }
    ],
    summary: ['The ultimate text search tool.', 'Use `-i` for case-insensitive.', 'Use `-v` to invert.'],
    references: commonReferences
  },

  'linux_sort': {
    isStructured: true,
    title: '35. sort',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`sort` takes lines of text from a file (or standard input) and sorts them alphabetically or numerically.',
    whyUseIt: 'To organize raw data, alphabetize a list of names, or find the largest file sizes.',
    syntax: 'sort [options] file_name',
    codeExample: '# Sort alphabetically (A-Z)\nsort names.txt\n\n# Sort in reverse (Z-A)\nsort -r names.txt\n\n# Sort numerically (1, 2, 10, instead of 1, 10, 2)\nsort -n numbers.txt',
    hasLiveOutput: false,
    expectedOutput: 'Sorted lines of text.',
    explanation: [
      { code: '-n', desc: 'Numeric sort. Without this, "10" comes before "2" because "1" is alphabetically before "2".' },
      { code: '-r', desc: 'Reverse sort.' }
    ],
    realWorldExample: 'Extracting a list of IP addresses from a log file and sorting them numerically to group them by subnet.',
    commonMistakes: [
      { error: 'Forgetting -n for numbers', code: '', suffix: 'Standard `sort` is strictly alphabetical. If you have numbers 1, 2, 11, standard sort returns 1, 11, 2. You MUST use `-n` for numbers.' }
    ],
    bestPractices: ['`sort` is almost always used in combination with `uniq` to find and count duplicate entries in log files.'],
    practiceExercise: {
      task: 'Sort a file `scores.txt` numerically in descending (reverse) order.',
      expectedOutput: 'Numbers sorted highest to lowest.',
      solution: 'sort -nr scores.txt'
    },
    quiz: [
      { question: 'What does `sort` do by default?', options: ['Sorts numerically', 'Sorts alphabetically A-Z', 'Sorts by file size', 'Reverses the file'], answer: 'Sorts alphabetically A-Z' },
      { question: 'Which flag is required to sort numbers correctly (e.g., 2 before 10)?', options: ['-a', '-num', '-n', '-k'], answer: '-n' },
      { question: 'Which flag sorts in reverse order (Z-A or highest-to-lowest)?', options: ['-rev', '-z', '-r', '-b'], answer: '-r' },
      { question: 'Does `sort` change the original file permanently?', options: ['Yes', 'No, it only formats the output to the screen', 'Only as root', 'Only if `-f` is used'], answer: 'No, it only formats the output to the screen' },
      { question: 'How would you save the sorted output to a new file?', options: ['sort file.txt > new.txt', 'sort -save new.txt', 'sort file.txt -to new.txt', 'sort file.txt new.txt'], answer: 'sort file.txt > new.txt' }
    ],
    interviewQuestions: [
      { q: 'How do you sort a CSV file based on the 3rd column?', a: 'Use the `-k` (key) flag and the `-t` (delimiter) flag. `sort -t "," -k 3 file.csv`.' }
    ],
    summary: ['Sorts text lines.', 'Alphabetical by default.', 'Use `-n` for numbers, `-r` for reverse.'],
    references: commonReferences
  },

  'linux_uniq': {
    isStructured: true,
    title: '36. uniq',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: '`uniq` filters out ADJACENT duplicate lines from a file or input stream.',
    whyUseIt: 'To remove duplicates from a list, or to count how many times a duplicate occurred.',
    syntax: 'uniq [options] file_name',
    codeExample: '# Assume file has: Apple, Apple, Banana\nuniq fruits.txt\n# Output: Apple, Banana\n\n# Count the duplicates\nuniq -c fruits.txt\n# Output: 2 Apple, 1 Banana',
    hasLiveOutput: false,
    expectedOutput: 'Deduplicated list.',
    explanation: [
      { code: '-c', desc: 'Prefixes each line with a count of how many times it occurred.' }
    ],
    realWorldExample: 'Extracting all the IP addresses that accessed your web server today, and running `sort | uniq -c` to find out which IP hit you the most (useful for finding hackers/DDoS).',
    commonMistakes: [
      { error: 'Running uniq on an unsorted file', code: '', suffix: '`uniq` ONLY compares ADJACENT lines (lines directly next to each other). If "Apple" is on line 1 and line 5, `uniq` will not remove it. You MUST run `sort file.txt | uniq`.' }
    ],
    bestPractices: ['Always pipe `sort` into `uniq` (`sort data.txt | uniq`). They are best friends.'],
    practiceExercise: {
      task: 'Sort `ips.txt` and count the unique occurrences.',
      expectedOutput: 'List of IPs with counts.',
      solution: 'sort ips.txt | uniq -c'
    },
    quiz: [
      { question: 'What does `uniq` do?', options: ['Removes all duplicates in a file', 'Removes ADJACENT duplicate lines', 'Creates unique IDs', 'Deletes empty lines'], answer: 'Removes ADJACENT duplicate lines' },
      { question: 'What command MUST usually be run before `uniq` to ensure all duplicates are removed?', options: ['cat', 'grep', 'sort', 'awk'], answer: 'sort' },
      { question: 'What does the `-c` flag do?', options: ['Copies the file', 'Counts how many times a line was duplicated', 'Creates a file', 'Changes case'], answer: 'Counts how many times a line was duplicated' },
      { question: 'What does `uniq -d` do?', options: ['Deletes files', 'Prints ONLY the duplicate lines', 'Downloads files', 'Deduplicates instantly'], answer: 'Prints ONLY the duplicate lines' },
      { question: 'Why does `uniq` only compare adjacent lines?', options: ['Memory efficiency (it only has to remember the previous line)', 'It is a bug', 'Because Linux is old', 'To speed up network requests'], answer: 'Memory efficiency (it only has to remember the previous line)' }
    ],
    interviewQuestions: [
      { q: 'After running `sort | uniq -c`, how do you find the MOST frequent item?', a: 'You pipe it back into sort! `sort file.txt | uniq -c | sort -nr`. This sorts the list, counts the duplicates, and then sorts the resulting counts numerically in descending order.' }
    ],
    summary: ['Removes adjacent duplicates.', 'Always use with `sort`.', 'Use `-c` to count.'],
    references: commonReferences
  },

  'linux_cut': {
    isStructured: true,
    title: '37. cut',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: '`cut` extracts specific columns or fields from each line of a file.',
    whyUseIt: 'When you have a CSV or delimited file and you only want to extract one specific column (like extracting only the emails from a user database).',
    syntax: 'cut -d "delimiter" -f column_number file_name',
    codeExample: '# Extract the 1st column from a CSV (comma separated)\ncut -d "," -f 1 data.csv\n\n# Extract the 1st and 3rd columns from /etc/passwd (colon separated)\ncut -d ":" -f 1,3 /etc/passwd',
    hasLiveOutput: false,
    expectedOutput: 'Only the requested columns are printed.',
    explanation: [
      { code: '-d', desc: 'Delimiter. The character that separates the columns (e.g., "," or ":").' },
      { code: '-f', desc: 'Field. Which column number you want to extract.' }
    ],
    realWorldExample: 'Extracting just the usernames (column 1) from `/etc/passwd` to see a clean list of all users on the server.',
    commonMistakes: [
      { error: 'Assuming space is the default delimiter', code: '', suffix: 'The default delimiter for `cut` is the TAB character, not a space. If your file is space-separated, you must explicitly use `-d " "`.' }
    ],
    bestPractices: ['`cut` works best on perfectly structured data (like CSVs). If the data has variable amounts of whitespace between columns, use `awk` instead.'],
    practiceExercise: {
      task: 'Extract the 2nd column from a space-separated file named `log.txt`.',
      expectedOutput: 'Column 2 data.',
      solution: 'cut -d " " -f 2 log.txt'
    },
    quiz: [
      { question: 'What does `cut` do?', options: ['Deletes files', 'Extracts specific columns/fields from text', 'Copies text to clipboard', 'Trims whitespace'], answer: 'Extracts specific columns/fields from text' },
      { question: 'What does the `-d` flag specify?', options: ['Directory', 'Delete', 'Delimiter (the separator character)', 'Data'], answer: 'Delimiter (the separator character)' },
      { question: 'What does the `-f` flag specify?', options: ['File name', 'Field (column) number', 'Force', 'Format'], answer: 'Field (column) number' },
      { question: 'What is the default delimiter if `-d` is not provided?', options: ['Space', 'Comma', 'TAB character', 'Newline'], answer: 'TAB character' },
      { question: 'How do you extract columns 1 and 4?', options: ['-f 1-4', '-f 1,4', '-f 1 and 4', '-col 1,4'], answer: '-f 1,4' }
    ],
    interviewQuestions: [
      { q: 'Why does `cut` fail on output from `ls -l`?', a: '`ls -l` separates its columns using a variable number of spaces (to align them visually). `cut` expects exactly one delimiter character. `awk` is much better for parsing `ls -l` because it treats any amount of whitespace as a single delimiter.' }
    ],
    summary: ['Extracts columns.', '`-d` for delimiter.', '`-f` for field number.'],
    references: commonReferences
  },

  'linux_paste': {
    isStructured: true,
    title: '38. paste',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`paste` merges lines from multiple files horizontally. It is the opposite of `cut`.',
    whyUseIt: 'If you have a file of First Names and a file of Last Names, `paste` will stick them together side-by-side into a single file.',
    syntax: 'paste file1 file2',
    codeExample: '# names.txt has: Alice, Bob\n# jobs.txt has: Dev, Ops\npaste names.txt jobs.txt\n# Output:\n# Alice   Dev\n# Bob     Ops',
    hasLiveOutput: false,
    expectedOutput: 'Merged columns separated by TAB.',
    explanation: [
      { code: 'paste', desc: 'Matches line 1 of File A with line 1 of File B, etc.' },
      { code: '-d', desc: 'Specify a custom delimiter (default is TAB).' }
    ],
    realWorldExample: 'A data engineer receives 3 separate lists (Names, Emails, Phone numbers) and uses `paste -d "," f1 f2 f3 > combined.csv` to build a valid CSV.',
    commonMistakes: [
      { error: 'Mismatched line counts', code: '', suffix: 'If file1 has 10 lines and file2 has 5 lines, `paste` will just leave the right side blank for the last 5 lines. It does not intelligently join data.' }
    ],
    bestPractices: ['Ensure the files you are pasting together have the exact same number of lines and are sorted in the exact same order.'],
    practiceExercise: {
      task: 'Paste `col1.txt` and `col2.txt` together, separated by a comma.',
      expectedOutput: 'Comma separated data.',
      solution: 'paste -d "," col1.txt col2.txt'
    },
    quiz: [
      { question: 'What does `paste` do?', options: ['Pastes from clipboard', 'Merges files vertically (like UNION)', 'Merges files horizontally (side-by-side)', 'Installs software'], answer: 'Merges files horizontally (side-by-side)' },
      { question: 'What command is considered the opposite of `paste`?', options: ['copy', 'cut', 'grep', 'rm'], answer: 'cut' },
      { question: 'What is the default delimiter used to separate the joined lines?', options: ['Space', 'Comma', 'TAB', 'Newline'], answer: 'TAB' },
      { question: 'How do you change the delimiter to a comma?', options: ['paste -c ","', 'paste -d ","', 'paste --comma', 'paste -s ","'], answer: 'paste -d ","' },
      { question: 'What happens if File A has more lines than File B?', options: ['Error', 'File B lines repeat', 'The missing lines in File B are left blank', 'It deletes the extra lines'], answer: 'The missing lines in File B are left blank' }
    ],
    interviewQuestions: [
      { q: 'What does `paste -s file.txt` do?', a: 'The `-s` (serial) flag pastes the lines of a single file sequentially on the same line, effectively converting a vertical list into a single horizontal row.' }
    ],
    summary: ['Merges files side-by-side.', 'Default delimiter is TAB.', 'Opposite of `cut`.'],
    references: commonReferences
  },

  'linux_tr': {
    isStructured: true,
    title: '39. tr',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`tr` stands for "Translate". It translates (replaces) or deletes characters from standard input.',
    whyUseIt: 'To convert lowercase to uppercase, remove unwanted characters (like replacing tabs with spaces), or strip out punctuation.',
    syntax: 'echo "text" | tr [set1] [set2]',
    codeExample: '# Convert lowercase to uppercase\necho "hello" | tr "a-z" "A-Z"\n# Output: HELLO\n\n# Replace spaces with underscores\necho "my file name" | tr " " "_"\n# Output: my_file_name\n\n# Delete all numbers from a string\necho "user123" | tr -d "0-9"\n# Output: user',
    hasLiveOutput: false,
    expectedOutput: 'Translated text.',
    explanation: [
      { code: '-d', desc: 'Delete the specified characters.' },
      { code: 'tr', desc: 'Only works with standard input (pipes or redirects). It cannot read a file directly (e.g., `tr a b file.txt` fails, you must do `cat file.txt | tr a b`).' }
    ],
    realWorldExample: 'Cleaning up a messy dataset by replacing all carriage returns (Windows `\\r`) with Unix newlines (`\\n`) using `cat file | tr "\\r" "\\n"`.',
    commonMistakes: [
      { error: 'Trying to pass a file name directly', code: '', suffix: '`tr` does not accept file arguments. You must use `< file` or pipe into it.' }
    ],
    bestPractices: ['Use `tr -d` to quickly sanitize inputs in bash scripts (e.g., removing quotes from a string).'],
    practiceExercise: {
      task: 'Translate all commas to spaces in `data.csv`.',
      expectedOutput: 'Space separated text.',
      solution: 'cat data.csv | tr "," " "'
    },
    quiz: [
      { question: 'What does `tr` stand for?', options: ['Tree', 'Translate', 'Truncate', 'Transfer'], answer: 'Translate' },
      { question: 'What does `tr` do?', options: ['Translates languages', 'Translates/replaces characters', 'Moves files', 'Zips files'], answer: 'Translates/replaces characters' },
      { question: 'Can `tr` read a file directly (e.g., `tr "a" "b" file.txt`)?', options: ['Yes', 'No, it only reads from standard input (pipes/redirects)', 'Only as root', 'Only if the file is small'], answer: 'No, it only reads from standard input (pipes/redirects)' },
      { question: 'What does the `-d` flag do?', options: ['Downloads', 'Duplicates', 'Deletes the specified characters', 'Directories'], answer: 'Deletes the specified characters' },
      { question: 'How do you convert all lowercase letters to uppercase?', options: ['tr -upper', 'tr "A-Z" "a-z"', 'tr "a-z" "A-Z"', 'tr -u'], answer: 'tr "a-z" "A-Z"' }
    ],
    interviewQuestions: [
      { q: 'How would you use `tr` to squeeze multiple consecutive spaces into a single space?', a: 'Use the `-s` (squeeze-repeats) flag. `echo "a    b" | tr -s " "` will output "a b".' }
    ],
    summary: ['Translates characters.', 'Deletes characters (`-d`).', 'Only reads from Standard Input.'],
    references: commonReferences
  },

  'linux_sed': {
    isStructured: true,
    title: '40. sed (Basics)',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: '`sed` stands for Stream Editor. It performs text transformations (like find and replace) on a file or data stream.',
    whyUseIt: 'The ultimate tool for automating text replacement without opening an editor. Great for tweaking config files in scripts.',
    syntax: 'sed "s/search/replace/g" file_name',
    codeExample: '# Replace the first instance of "apple" with "orange" on each line\nsed "s/apple/orange/" fruits.txt\n\n# Replace ALL instances on every line (Global flag "g")\nsed "s/apple/orange/g" fruits.txt\n\n# Actually save the changes back to the file (-i)\nsed -i "s/apple/orange/g" fruits.txt',
    hasLiveOutput: false,
    expectedOutput: 'File with text replaced.',
    explanation: [
      { code: 's', desc: 'Substitute command.' },
      { code: 'g', desc: 'Global flag. Without it, sed only replaces the FIRST match on each line.' },
      { code: '-i', desc: 'In-place. Edits the file permanently instead of just printing to the screen.' }
    ],
    realWorldExample: 'A DevOps engineer writing a deployment script uses `sed -i "s/DEBUG=True/DEBUG=False/g" .env` to prepare the app for production automatically.',
    commonMistakes: [
      { error: 'Forgetting the -i flag', code: '', suffix: 'If you don\'t use `-i`, the changes are only printed to your screen, and the file remains unchanged.' },
      { error: 'Slash collisions', code: '', suffix: 'If your search string contains a slash (like `/var/www`), `s//var/www/dir/g` breaks. You can change the delimiter: `s|/var/www|dir|g`.' }
    ],
    bestPractices: ['Always test your `sed` command WITHOUT the `-i` flag first to make sure it works perfectly, then add `-i` to save it.'],
    practiceExercise: {
      task: 'Permanently replace "localhost" with "127.0.0.1" in `config.yml`.',
      expectedOutput: 'File updated.',
      solution: 'sed -i "s/localhost/127.0.0.1/g" config.yml'
    },
    quiz: [
      { question: 'What does `sed` stand for?', options: ['Simple Editor', 'Stream Editor', 'System Edit', 'Secure Edit'], answer: 'Stream Editor' },
      { question: 'What is the standard syntax for substitution in `sed`?', options: ['r/find/replace/', 's/find/replace/', 'c/find/replace/', 'rep/find/replace/'], answer: 's/find/replace/' },
      { question: 'What does the `g` flag at the end of the sed command do?', options: ['Go', 'Global (replaces all matches on a line, not just the first)', 'Get', 'Grep'], answer: 'Global (replaces all matches on a line, not just the first)' },
      { question: 'Which flag permanently modifies the file (in-place editing)?', options: ['-p', '-m', '-i', '-f'], answer: '-i' },
      { question: 'Can you use delimiters other than `/` if your text contains slashes?', options: ['Yes (e.g., s|find|replace|)', 'No', 'Only in macOS', 'Only as root'], answer: 'Yes (e.g., s|find|replace|)' }
    ],
    interviewQuestions: [
      { q: 'How would you use `sed` to delete specific lines, say lines 1 through 5?', a: 'You use the `d` (delete) command instead of `s`. `sed "1,5d" file.txt` will print the file with lines 1-5 removed.' }
    ],
    summary: ['Stream editor.', 'Perfect for find & replace.', 'Use `-i` to save changes.'],
    references: commonReferences
  },

  'linux_awk': {
    isStructured: true,
    title: '41. awk (Basics)',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: '`awk` is a full programming language designed for advanced text processing and data extraction, particularly for data structured in columns.',
    whyUseIt: 'When `cut` isn\'t powerful enough. `awk` can do math, conditionals, and handle variable whitespace between columns perfectly.',
    syntax: 'awk \'{print $N}\' file_name',
    codeExample: '# Print the 1st and 3rd columns\nawk \'{print $1, $3}\' data.txt\n\n# Print the 1st column ONLY IF the 3rd column is greater than 50\nawk \'$3 > 50 {print $1}\' data.txt\n\n# Print the entire line if it contains the word "Error"\nawk \'/Error/ {print $0}\' data.txt',
    hasLiveOutput: false,
    expectedOutput: 'Highly customized text extraction.',
    explanation: [
      { code: '$1, $2, $3', desc: 'Represents Column 1, Column 2, etc.' },
      { code: '$0', desc: 'Represents the entire line.' },
      { code: '{print ...}', desc: 'The action to take.' }
    ],
    realWorldExample: 'Extracting just the memory usage (column 4) from the output of the `free` command, or parsing complex log files where columns don\'t align perfectly.',
    commonMistakes: [
      { error: 'Confusing shell variables with awk variables', code: '', suffix: 'In bash, `$1` is an argument. Inside the `awk` single quotes, `$1` specifically means Column 1.' }
    ],
    bestPractices: ['Use `awk` instead of `cut` when your data columns are separated by multiple spaces or tabs.'],
    practiceExercise: {
      task: 'Use awk to print the 2nd column of `ls -l`.',
      expectedOutput: 'The link counts.',
      solution: 'ls -l | awk \'{print $2}\''
    },
    quiz: [
      { question: 'What is `awk`?', options: ['A text editor like nano', 'A powerful text processing language', 'A compression tool', 'A network tool'], answer: 'A powerful text processing language' },
      { question: 'In `awk`, how do you refer to the very first column of data?', options: ['Col1', '$1', '%1', '#1'], answer: '$1' },
      { question: 'In `awk`, what does `$0` represent?', options: ['Null', 'The entire current line', 'The last column', 'An error'], answer: 'The entire current line' },
      { question: 'Why is `awk` often preferred over `cut`?', options: ['It is spelled shorter', 'It gracefully handles variable whitespace between columns', 'It deletes files', 'It creates users'], answer: 'It gracefully handles variable whitespace between columns' },
      { question: 'How would you print the first column using awk?', options: ['awk \'{output $1}\'', 'awk \'{print $1}\'', 'awk \'{show 1}\'', 'awk \'{get $1}\''], answer: 'awk \'{print $1}\'' }
    ],
    interviewQuestions: [
      { q: 'How do you change the default column delimiter in `awk` (which is whitespace) to a comma (for CSVs)?', a: 'You use the `-F` (field separator) flag. `awk -F "," \'{print $1}\' data.csv`.' }
    ],
    summary: ['Advanced text processing.', '`$1` = column 1, `$0` = whole line.', 'Handles whitespace perfectly.'],
    references: commonReferences
  },

  'linux_users': {
    isStructured: true,
    title: '42. Linux Users',
    difficulty: 'Beginner',
    readingTime: '4 min',
    definition: 'Linux is a multi-user operating system. Every process, file, and action is associated with a specific User Account.',
    whyUseIt: 'Security. By having different users, you ensure a web server program cannot accidentally delete the database files, because it runs under a limited user.',
    syntax: '-- Conceptual',
    codeExample: '# Find out who you are logged in as\nwhoami\n\n# View the system file containing all users\ncat /etc/passwd',
    hasLiveOutput: false,
    expectedOutput: 'Information about the users on the system.',
    explanation: [
      { code: 'root', desc: 'The superuser. Has absolute power to do anything, including destroying the system.' },
      { code: 'Standard Users', desc: 'Normal humans (e.g., alice, bob) who have home directories.' },
      { code: 'System Users', desc: 'Accounts created just to run software (e.g., www-data for Nginx, mysql for databases). They usually cannot log in.' }
    ],
    realWorldExample: 'A server has a `root` user for the sysadmin, an `alice` user for a developer, and a `www-data` user that just runs the web server securely.',
    commonMistakes: [
      { error: 'Running everything as root', code: '', suffix: 'Logging in as `root` is dangerous. A single typo can destroy the OS. Always log in as a standard user and use `sudo` when needed.' }
    ],
    bestPractices: ['Never allow direct SSH login for the `root` user. Secure servers disable root login entirely.'],
    practiceExercise: {
      task: 'What command tells you your current username?',
      expectedOutput: 'Your username.',
      solution: 'whoami'
    },
    quiz: [
      { question: 'What is the most powerful user on a Linux system called?', options: ['admin', 'supervisor', 'root', 'god'], answer: 'root' },
      { question: 'Can multiple users be logged into a Linux server at the exact same time?', options: ['Yes', 'No', 'Only two at a time', 'Only on Ubuntu'], answer: 'Yes' },
      { question: 'What is a "System User"?', options: ['A robotic user', 'An account used solely by software (like a web server) for security, usually without login rights', 'The root user', 'A deleted user'], answer: 'An account used solely by software (like a web server) for security, usually without login rights' },
      { question: 'What command shows your current username?', options: ['who', 'whoami', 'id', 'All of the above'], answer: 'All of the above' },
      { question: 'Which file contains a list of all users on the system?', options: ['/etc/users', '/etc/shadow', '/etc/passwd', '/var/users'], answer: '/etc/passwd' }
    ],
    interviewQuestions: [
      { q: 'In the `/etc/passwd` file, you see `root:x:0:0...`. What does the `x` and the `0:0` mean?', a: 'The `x` means the password is encrypted and stored in a different file (`/etc/shadow`). The first `0` is the User ID (UID), and the second `0` is the Group ID (GID). A UID of 0 strictly defines the root user.' }
    ],
    summary: ['Multi-user OS.', '`root` is the admin.', 'System users run software.'],
    references: commonReferences
  },

  'linux_groups': {
    isStructured: true,
    title: '43. Groups',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'A Group is a collection of Linux users. Permissions can be assigned to a Group, and all users in that group inherit those permissions.',
    whyUseIt: 'Efficiency. Instead of giving 50 developers access to a folder one by one, you give access to the "developers" group, and add the 50 users to that group.',
    syntax: '-- Conceptual',
    codeExample: '# See what groups you belong to\ngroups\n\n# View the system file containing all groups\ncat /etc/group',
    hasLiveOutput: false,
    expectedOutput: 'alice sudo developers docker',
    explanation: [
      { code: 'Primary Group', desc: 'When a user creates a file, the file is assigned to this group (usually named the same as the user).' },
      { code: 'Secondary Groups', desc: 'Additional groups the user belongs to (like `sudo` for admin rights, or `docker`).' }
    ],
    realWorldExample: 'Adding a user to the `docker` group so they can run Docker containers without needing to type `sudo` every time.',
    commonMistakes: [
      { error: 'Forgetting to log out', code: '', suffix: 'If you add yourself to a new group, the OS doesn\'t apply it to your current session. You MUST log out and log back in for group changes to take effect.' }
    ],
    bestPractices: ['Use groups for shared directories (like `/var/www` for web developers).'],
    practiceExercise: {
      task: 'Check what groups your current user belongs to.',
      expectedOutput: 'List of groups.',
      solution: 'groups'
    },
    quiz: [
      { question: 'What is a Linux Group?', options: ['A chat room', 'A collection of users that share the same permissions', 'A cluster of servers', 'A folder'], answer: 'A collection of users that share the same permissions' },
      { question: 'What is the main benefit of using Groups?', options: ['Faster CPU', 'Easier permission management for multiple users at once', 'Saves disk space', 'Encrypts files'], answer: 'Easier permission management for multiple users at once' },
      { question: 'Which file stores information about all groups on the system?', options: ['/etc/users', '/etc/passwd', '/etc/group', '/etc/sudoers'], answer: '/etc/group' },
      { question: 'If you add a user to a new group, when does it take effect?', options: ['Instantly', 'After a server reboot', 'After the user logs out and logs back in', 'Never'], answer: 'After the user logs out and logs back in' },
      { question: 'What command lists the groups your user is currently active in?', options: ['whoami', 'groups', 'id', 'Both groups and id work'], answer: 'Both groups and id work' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between a Primary Group and a Secondary Group?', a: 'Every user has exactly one Primary Group (defined in `/etc/passwd`). Any file the user creates is owned by this group by default. A user can belong to zero or many Secondary Groups to gain additional permissions.' }
    ],
    summary: ['Groups manage permissions efficiently.', 'Primary vs Secondary groups.', 'Stored in `/etc/group`.'],
    references: commonReferences
  },

  'linux_chmod': {
    isStructured: true,
    title: '44. chmod',
    difficulty: 'Advanced',
    readingTime: '5 min',
    definition: '`chmod` stands for "Change Mode". It is used to change the access permissions (read, write, execute) of files and directories.',
    whyUseIt: 'To secure files (stopping others from reading your secrets) or to make a script executable so you can run it.',
    syntax: 'chmod [permissions] file_name',
    codeExample: '# Symbolic mode (give User execute permission)\nchmod u+x script.sh\n\n# Numeric mode (755 = rwx for user, rx for group, rx for others)\nchmod 755 script.sh\n\n# Absolute privacy (600 = read/write for user, NOTHING for anyone else)\nchmod 600 secret.txt',
    hasLiveOutput: false,
    expectedOutput: 'Permissions are updated silently.',
    explanation: [
      { code: 'u, g, o', desc: 'User, Group, Others.' },
      { code: '+, -, =', desc: 'Add, Remove, Set exact.' },
      { code: 'r, w, x', desc: 'Read (4), Write (2), Execute (1).' }
    ],
    realWorldExample: 'You download a `.sh` bash script from the internet. You must run `chmod +x script.sh` to make it executable before Linux will allow you to run it.',
    commonMistakes: [
      { error: 'chmod 777', code: '', suffix: '`chmod 777` gives read, write, and execute permissions to EVERYONE on the server. This is a massive security vulnerability. Never use it just to "make things work".' }
    ],
    bestPractices: ['Learn the numeric (octal) system. 7=rwx, 6=rw, 5=rx, 4=r, 0=none.'],
    practiceExercise: {
      task: 'Make a file named `run.sh` executable for the user only.',
      expectedOutput: 'Query OK',
      solution: 'chmod u+x run.sh'
    },
    quiz: [
      { question: 'What does `chmod` do?', options: ['Changes file owner', 'Changes file permissions (read, write, execute)', 'Changes passwords', 'Changes directories'], answer: 'Changes file permissions (read, write, execute)' },
      { question: 'What does the `+x` mean in `chmod +x`?', options: ['Delete', 'Execute', 'Extract', 'Exit'], answer: 'Add Execute permission' },
      { question: 'In numeric permissions, what number represents Read, Write, and Execute (rwx)?', options: ['4', '5', '6', '7'], answer: '7 (4+2+1)' },
      { question: 'Why is `chmod 777` dangerous?', options: ['It deletes the file', 'It gives every user on the system full ability to read, modify, and execute the file', 'It encrypts the file', 'It locks the file'], answer: 'It gives every user on the system full ability to read, modify, and execute the file' },
      { question: 'What does `chmod 600` do?', options: ['Full access for everyone', 'Read/Write for the owner only, nobody else has access', 'Read only for everyone', 'Execute only'], answer: 'Read/Write for the owner only, nobody else has access' }
    ],
    interviewQuestions: [
      { q: 'What does the "Execute" (`x`) permission mean on a Directory (folder) compared to a File?', a: 'On a file, `x` means you can run it as a program. On a directory, `x` means you are allowed to enter it (using `cd`). Without `x` on a directory, you cannot access its contents, even if you have read (`r`) permission.' }
    ],
    summary: ['Changes permissions.', 'Numeric (755) or Symbolic (u+x).', 'Never use 777.'],
    references: commonReferences
  },

  'linux_chown': {
    isStructured: true,
    title: '45. chown',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: '`chown` stands for "Change Owner". It changes the user and/or group ownership of a file or directory.',
    whyUseIt: 'If you create a file using `sudo`, it is owned by `root`. Standard users cannot edit it. You must `chown` it back to the standard user.',
    syntax: 'chown [user]:[group] file_name',
    codeExample: '# Change owner to "alice"\nchown alice file.txt\n\n# Change owner to "alice" AND group to "developers"\nchown alice:developers file.txt\n\n# Recursively change an entire directory (-R)\nchown -R www-data:www-data /var/www/html',
    hasLiveOutput: false,
    expectedOutput: 'Ownership is updated silently.',
    explanation: [
      { code: '-R', desc: 'Recursive. Changes the folder and every single file inside it.' },
      { code: 'user:group', desc: 'The colon separates the User owner from the Group owner.' }
    ],
    realWorldExample: 'Deploying web files to a server. You upload them as your user, but Nginx needs to read them, so you run `sudo chown -R www-data:www-data /var/www/html`.',
    commonMistakes: [
      { error: 'Trying to run chown without sudo', code: '', suffix: 'Only the `root` user can give a file away to another user. If you are a standard user, you must use `sudo chown ...`.' }
    ],
    bestPractices: ['Always use `-R` carefully. Running `chown -R` on the wrong directory (like `/`) will destroy the OS.'],
    practiceExercise: {
      task: 'Change the owner of `app.js` to `bob`.',
      expectedOutput: 'Query OK',
      solution: 'sudo chown bob app.js'
    },
    quiz: [
      { question: 'What does `chown` do?', options: ['Changes passwords', 'Changes file permissions', 'Changes file ownership (user/group)', 'Changes directories'], answer: 'Changes file ownership (user/group)' },
      { question: 'What character separates the user and the group in the syntax?', options: ['Comma (,)', 'Slash (/)', 'Colon (:)', 'Dash (-)'], answer: 'Colon (:)' },
      { question: 'Which flag changes ownership for a folder and everything inside it?', options: ['-r', '-R', '-all', '-f'], answer: '-R' },
      { question: 'Can a standard user use `chown` to give their file to the root user?', options: ['Yes', 'No, giving files away requires root/sudo privileges', 'Only on Ubuntu', 'Only if it is text'], answer: 'No, giving files away requires root/sudo privileges' },
      { question: 'If you see `chown www-data:www-data`, what is being set?', options: ['User=www, Group=data', 'User=www-data, Group=www-data', 'Error', 'Nothing'], answer: 'User=www-data, Group=www-data' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between `chown` and `chgrp`?', a: '`chown` can change BOTH the User owner and the Group owner (e.g., `chown user:group`). `chgrp` is a specialized command that ONLY changes the Group owner.' }
    ],
    summary: ['Changes User and Group owner.', 'Requires `sudo`.', 'Use `-R` for recursive folders.'],
    references: commonReferences
  }
};