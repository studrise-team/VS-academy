export const javaContentBatch9 = {
  "java_writing_files": {
    "isStructured": true,
    "title": "81. Writing Files",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "Java allows you to write data to files on your hard drive using classes like `FileWriter`. This is used to save data permanently.",
    "whyUseIt": "If your program collects user data, logs errors, or processes results, you need a way to save that data so it doesn't disappear when the program closes.",
    "syntax": "FileWriter writer = new FileWriter(\"filename.txt\");\nwriter.write(\"Hello World\");\nwriter.close();",
    "codeExample": "import java.io.FileWriter;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            // Creates a file if it doesn't exist, and opens it for writing\n            FileWriter myWriter = new FileWriter(\"output.txt\");\n            \n            myWriter.write(\"Java File Handling is awesome!\\n\");\n            myWriter.write(\"This is the second line.\");\n            \n            // You MUST close the writer to physically save the file to the disk\n            myWriter.close();\n            System.out.println(\"Successfully wrote to the file.\");\n            \n        } catch (IOException e) {\n            System.out.println(\"An error occurred.\");\n            e.printStackTrace();\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Successfully wrote to the file.",
    "explanation": [
      {
        "code": "new FileWriter(\"output.txt\")",
        "desc": "By default, this overwrites the entire file. To append (add to the end), use `new FileWriter(\"output.txt\", true)`."
      },
      {
        "code": "myWriter.close()",
        "desc": "Flushes the data from memory into the physical hard drive. Without this, your file might be empty!"
      }
    ],
    "realWorldExample": "Creating a server log. Every time a user logs in, the backend uses `FileWriter(..., true)` to append 'User 55 logged in at 10:00 AM' to a log.txt file.",
    "commonMistakes": [
      {
        "error": "Forgetting to close the writer. The data often sits in a memory buffer and never actually gets written to the hard drive until `.close()` is called.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Always put your `close()` method inside a `finally` block or use a 'try-with-resources' statement to guarantee the file is closed even if an exception occurs."
    ],
    "practiceExercise": {
      "task": "Write a program that uses FileWriter to create a file called 'hello.txt' and writes 'Hello World' inside it.",
      "solution": "try { FileWriter w = new FileWriter(\"hello.txt\"); w.write(\"Hello World\"); w.close(); } catch(IOException e) {}"
    },
    "interviewQuestions": [
      "What happens if you use FileWriter on a file that doesn't exist?",
      "How do you append text to an existing file instead of overwriting it?"
    ],
    "quiz": [
      {
        "question": "What is the second parameter in `new FileWriter(\"file.txt\", true)` used for?",
        "options": [
          "To enable encryption",
          "To append data rather than overwrite the file",
          "To read the file as well as write",
          "To format the text as HTML"
        ],
        "correctAnswer": "To append data rather than overwrite the file"
      }
    ],
    "summary": [
      "Use `FileWriter` to output text to a file.",
      "File I/O requires catching `IOException`.",
      "Always call `.close()` to flush and save the data."
    ],
    "references": [
      {
        "label": "Java Write to Files",
        "url": "https://www.w3schools.com/java/java_files_create.asp"
      }
    ]
  },
  "java_bufferedreader": {
    "isStructured": true,
    "title": "82. BufferedReader",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "`BufferedReader` reads text from a character-input stream, buffering characters so as to provide for the efficient reading of characters, arrays, and lines.",
    "whyUseIt": "It is significantly faster than using a `Scanner` when reading very large files (e.g., millions of lines) because it grabs large chunks of data at once (buffering) rather than reading character-by-character from the hard drive.",
    "syntax": "BufferedReader reader = new BufferedReader(new FileReader(\"file.txt\"));",
    "codeExample": "import java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            BufferedReader reader = new BufferedReader(new FileReader(\"data.txt\"));\n            String line;\n            \n            // Read lines until there are no more (returns null)\n            while ((line = reader.readLine()) != null) {\n                System.out.println(line);\n            }\n            \n            reader.close();\n        } catch (IOException e) {\n            System.out.println(\"Error reading file\");\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "(Contents of data.txt)",
    "explanation": [
      {
        "code": "new FileReader(\"data.txt\")",
        "desc": "The raw reader that talks directly to the hard drive."
      },
      {
        "code": "new BufferedReader(...)",
        "desc": "A 'wrapper' that sits on top of FileReader to make it much faster and provides the convenient `.readLine()` method."
      }
    ],
    "realWorldExample": "Reading a 500MB CSV dataset for machine learning. Using `Scanner` might take 10 seconds. Using `BufferedReader` might take 1 second because it limits how often Java has to ask the hard drive for data.",
    "commonMistakes": [
      {
        "error": "Using `while (reader.readLine() != null)` and then calling `reader.readLine()` AGAIN inside the loop. This skips every other line!",
        "code": "while(reader.readLine() != null) { System.out.println(reader.readLine()); }",
        "suffix": "// WRONG! You must store it in a variable first."
      }
    ],
    "bestPractices": [
      "Use 'try-with-resources' to automatically close the reader: `try (BufferedReader br = new BufferedReader(...)) { ... }`."
    ],
    "practiceExercise": {
      "task": "What method in `BufferedReader` returns the next line of text as a String, or `null` if the end of the file is reached?",
      "solution": "readLine()"
    },
    "interviewQuestions": [
      "Why is BufferedReader faster than Scanner?",
      "What is the default buffer size of a BufferedReader in Java? (Answer: 8192 characters)"
    ],
    "quiz": [
      {
        "question": "What does `BufferedReader.readLine()` return when it reaches the end of the file?",
        "options": [
          "An empty string \"\"",
          "An IOException",
          "null",
          "-1"
        ],
        "correctAnswer": "null"
      }
    ],
    "summary": [
      "`BufferedReader` is used for highly efficient file reading.",
      "It wraps around a `FileReader`.",
      "Use `.readLine()` inside a loop to read text line-by-line."
    ],
    "references": [
      {
        "label": "BufferedReader in Java",
        "url": "https://www.geeksforgeeks.org/java-io-bufferedreader-class-java/"
      }
    ]
  },
  "java_bufferedwriter": {
    "isStructured": true,
    "title": "83. BufferedWriter",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "`BufferedWriter` writes text to a character-output stream, buffering characters to provide for the efficient writing of single characters, arrays, and strings.",
    "whyUseIt": "Just like `BufferedReader`, it is significantly faster than using a raw `FileWriter` when writing large amounts of data to a file.",
    "syntax": "BufferedWriter writer = new BufferedWriter(new FileWriter(\"file.txt\"));",
    "codeExample": "import java.io.BufferedWriter;\nimport java.io.FileWriter;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) {\n        // try-with-resources (Auto-closes the writer!)\n        try (BufferedWriter writer = new BufferedWriter(new FileWriter(\"log.txt\"))) {\n            \n            writer.write(\"System Booted\");\n            writer.newLine(); // Cross-platform way to write a new line\n            writer.write(\"Loading modules...\");\n            \n            System.out.println(\"Log written efficiently.\");\n            \n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Log written efficiently.",
    "explanation": [
      {
        "code": "try (BufferedWriter writer = ...)",
        "desc": "This syntax (Java 7+) automatically calls `.close()` at the end of the block, preventing memory leaks!"
      },
      {
        "code": "writer.newLine()",
        "desc": "Safer than writing `\\n`, because Windows uses `\\r\\n` while Mac/Linux use `\\n`. This method picks the right one automatically."
      }
    ],
    "realWorldExample": "Exporting a 1,000,000 row database table to a CSV file. `BufferedWriter` bundles the text into big chunks in RAM before writing it to the hard drive, massively speeding up the export.",
    "commonMistakes": [
      {
        "error": "Assuming the data is instantly written to the file. It is held in the buffer (RAM) until the buffer is full, or until you call `.flush()` or `.close()`.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Always wrap `FileWriter` in a `BufferedWriter` for production code. Always use `try-with-resources` to ensure it is closed properly."
    ],
    "practiceExercise": {
      "task": "What method should you use in `BufferedWriter` to move to the next line safely across all operating systems?",
      "solution": "newLine()"
    },
    "interviewQuestions": [
      "What is the purpose of the `.flush()` method?",
      "What does 'try-with-resources' do?"
    ],
    "quiz": [
      {
        "question": "If you don't call `.close()` or `.flush()` on a BufferedWriter, what might happen?",
        "options": [
          "The file gets encrypted",
          "The data might stay in memory and never physically write to the file",
          "The program will crash with an OutOfMemory error",
          "It writes automatically after 5 seconds"
        ],
        "correctAnswer": "The data might stay in memory and never physically write to the file"
      }
    ],
    "summary": [
      "`BufferedWriter` makes writing large files much faster.",
      "It requires a `.close()` or `.flush()` to finalize writing.",
      "Use `.newLine()` for cross-platform carriage returns."
    ],
    "references": [
      {
        "label": "BufferedWriter in Java",
        "url": "https://www.geeksforgeeks.org/java-io-bufferedwriter-class-java/"
      }
    ]
  },
  "java_file_class": {
    "isStructured": true,
    "title": "84. File Class",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "The `File` class from the `java.io` package allows you to represent file and directory pathnames. It doesn't read or write data, but it helps you manage files (create, delete, check if they exist).",
    "whyUseIt": "Before you try to read a file, you should check if it exists. If your app creates logs, you might need to check file sizes or create new folders (`mkdir`).",
    "syntax": "File myFile = new File(\"C:\\\\path\\\\to\\\\file.txt\");",
    "codeExample": "import java.io.File;\n\npublic class Main {\n    public static void main(String[] args) {\n        File myObj = new File(\"data.txt\");\n        \n        if (myObj.exists()) {\n            System.out.println(\"File name: \" + myObj.getName());\n            System.out.println(\"Absolute path: \" + myObj.getAbsolutePath());\n            System.out.println(\"Writeable: \" + myObj.canWrite());\n            System.out.println(\"Readable: \" + myObj.canRead());\n            System.out.println(\"File size in bytes: \" + myObj.length());\n            // myObj.delete(); // This would delete the file\n        } else {\n            System.out.println(\"The file does not exist.\");\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "The file does not exist.\n(Output varies depending on if data.txt exists)",
    "explanation": [
      {
        "code": "myObj.exists()",
        "desc": "Returns true if the file physically exists on the hard drive."
      },
      {
        "code": "myObj.length()",
        "desc": "Returns the size of the file in bytes."
      }
    ],
    "realWorldExample": "An installer program. Before installing a game, it uses `myObj.length()` on the hard drive to check if there is enough free space, and `myObj.mkdir()` to create the 'Program Files/MyGame' folder.",
    "commonMistakes": [
      {
        "error": "Thinking that `new File(\"file.txt\")` actually creates a file on the hard drive. It doesn't! It just creates a Java object pointing to that path. You have to call `.createNewFile()` to physically create it.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Always use `File.separator` instead of hardcoding `\\` or `/` in file paths, so your code works on both Windows and Mac/Linux."
    ],
    "practiceExercise": {
      "task": "Create a File object pointing to 'test.txt'. Write an if statement that checks if it exists, and if so, deletes it.",
      "solution": "File f = new File(\"test.txt\"); if(f.exists()) { f.delete(); }"
    },
    "interviewQuestions": [
      "Does `new File(\"abc.txt\")` create a file on the disk?",
      "How do you create a directory using the File class?"
    ],
    "quiz": [
      {
        "question": "Which method of the File class physically creates a new, empty file on the hard drive?",
        "options": [
          "create()",
          "newFile()",
          "createNewFile()",
          "makeFile()"
        ],
        "correctAnswer": "createNewFile()"
      }
    ],
    "summary": [
      "The `File` class manages files and directories.",
      "It allows you to get metadata (size, path, permissions).",
      "It is used to `.delete()`, `.exists()`, and `.mkdir()`."
    ],
    "references": [
      {
        "label": "Java File Handling",
        "url": "https://www.w3schools.com/java/java_files.asp"
      }
    ]
  },
  "java_threads": {
    "isStructured": true,
    "title": "85. Threads",
    "difficulty": "Advanced",
    "readingTime": "6 min",
    "definition": "A `Thread` is a lightweight sub-process, the smallest unit of processing. Multithreading in Java is the process of executing two or more threads concurrently to maximize CPU utilization.",
    "whyUseIt": "If your app is downloading a large file on the main thread, the app will freeze and say 'Not Responding' until it finishes. By using a second thread, the download happens in the background while the UI remains responsive.",
    "syntax": "class MyThread extends Thread { public void run() { ... } }\nMyThread t = new MyThread();\nt.start();",
    "codeExample": "class DownloadTask extends Thread {\n    // The code inside run() executes in a separate background thread\n    public void run() {\n        for (int i = 1; i <= 5; i++) {\n            System.out.println(\"Downloading chunk \" + i + \"...\");\n            try { Thread.sleep(500); } catch(Exception e) {}\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        DownloadTask task = new DownloadTask();\n        \n        // Use start(), NOT run() to spin up the new thread!\n        task.start(); \n        \n        // This loop runs AT THE SAME TIME as the download on the Main thread\n        for (int i = 1; i <= 5; i++) {\n            System.out.println(\"Main thread is doing other work: \" + i);\n            try { Thread.sleep(500); } catch(Exception e) {}\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Downloading chunk 1...\nMain thread is doing other work: 1\nDownloading chunk 2...\nMain thread is doing other work: 2\n(Output intertwines unpredictably)",
    "explanation": [
      {
        "code": "extends Thread",
        "desc": "Converts a normal class into a Thread class."
      },
      {
        "code": "task.start()",
        "desc": "Tells the JVM to create a new thread and then execute the `run()` method."
      }
    ],
    "realWorldExample": "A web browser. One thread handles rendering the webpage you are looking at, another thread is downloading a file in the background, and another thread is playing a YouTube video's audio.",
    "commonMistakes": [
      {
        "error": "Calling `task.run()` instead of `task.start()`. If you call `run()`, it just executes like a normal method on the main thread, and you get NO multithreading benefits.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Always use `start()` to begin a thread. Threading can introduce complex bugs (race conditions), so keep shared variables to a minimum."
    ],
    "practiceExercise": {
      "task": "Create a class `Ping` that extends `Thread`. Override `run()` to print 'Ping!'. Instantiate and `.start()` it in main.",
      "solution": "class Ping extends Thread { public void run() { System.out.println(\"Ping!\"); } }\n// inside main: new Ping().start();"
    },
    "interviewQuestions": [
      "What is the difference between multiprocessing and multithreading?",
      "Why must we call start() instead of run()?"
    ],
    "quiz": [
      {
        "question": "Which method must you override when you extend the Thread class?",
        "options": [
          "start()",
          "execute()",
          "run()",
          "init()"
        ],
        "correctAnswer": "run()"
      }
    ],
    "summary": [
      "Threads allow concurrent execution of code.",
      "You define thread logic by overriding the `run()` method.",
      "You spin up the thread by calling `.start()`."
    ],
    "references": [
      {
        "label": "Multithreading in Java",
        "url": "https://www.geeksforgeeks.org/multithreading-in-java/"
      }
    ]
  },
  "java_thread_lifecycle": {
    "isStructured": true,
    "title": "86. Thread Lifecycle",
    "difficulty": "Advanced",
    "readingTime": "5 min",
    "definition": "A thread goes through various states in its lifecycle: New, Runnable, Running, Waiting/Blocked, and Dead/Terminated.",
    "whyUseIt": "Understanding thread states is crucial for debugging complex multithreaded applications, avoiding deadlocks, and optimizing performance.",
    "syntax": "// Concepts of Thread states via methods like sleep(), wait(), and join()",
    "codeExample": "public class Main {\n    public static void main(String[] args) throws InterruptedException {\n        Thread t = new Thread(() -> {\n            try {\n                Thread.sleep(2000); // Thread goes into TIMED_WAITING state\n            } catch (InterruptedException e) {}\n        });\n        \n        System.out.println(\"State after creation: \" + t.getState()); // NEW\n        \n        t.start();\n        System.out.println(\"State after start: \" + t.getState()); // RUNNABLE\n        \n        Thread.sleep(500); // Give 't' time to go to sleep\n        System.out.println(\"State while sleeping: \" + t.getState()); // TIMED_WAITING\n        \n        t.join(); // Main thread waits here until 't' finishes\n        System.out.println(\"State after finish: \" + t.getState()); // TERMINATED\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "State after creation: NEW\nState after start: RUNNABLE\nState while sleeping: TIMED_WAITING\nState after finish: TERMINATED",
    "explanation": [
      {
        "code": "t.getState()",
        "desc": "Returns an Enum representing exactly what the thread is currently doing."
      },
      {
        "code": "t.join()",
        "desc": "Forces the current thread (Main) to stop and wait until thread 't' has completely finished executing."
      }
    ],
    "realWorldExample": "A worker making a pizza. NEW: Worker hired. RUNNABLE: Worker is at the counter, ready. RUNNING: Kneading dough. BLOCKED/WAITING: Waiting for the oven to heat up. TERMINATED: Pizza is done, shift over.",
    "commonMistakes": [
      {
        "error": "Trying to call `.start()` on a Thread that is already TERMINATED. You cannot revive a dead thread. You must create a new object.",
        "code": "t.start(); t.join(); t.start();",
        "suffix": "// Error: IllegalThreadStateException"
      }
    ],
    "bestPractices": [
      "Use `Thread.sleep()` to simulate long-running tasks during testing, but avoid hardcoded sleep times in production logic; use proper synchronization/wait-notify instead."
    ],
    "practiceExercise": {
      "task": "What thread method is used to pause the current thread for a specified number of milliseconds?",
      "solution": "Thread.sleep(milliseconds);"
    },
    "interviewQuestions": [
      "What are the 5 states of a Thread lifecycle?",
      "What is the difference between sleep() and wait()?",
      "What does the join() method do?"
    ],
    "quiz": [
      {
        "question": "What state is a thread in immediately after `new Thread()` is called, but before `.start()` is called?",
        "options": [
          "RUNNABLE",
          "NEW",
          "WAITING",
          "BLOCKED"
        ],
        "correctAnswer": "NEW"
      }
    ],
    "summary": [
      "Threads transition through NEW -> RUNNABLE -> RUNNING -> TERMINATED.",
      "Threads can be paused into a WAITING or BLOCKED state.",
      "`join()` makes one thread wait for another to finish."
    ],
    "references": [
      {
        "label": "Lifecycle of a Thread",
        "url": "https://www.geeksforgeeks.org/lifecycle-and-states-of-a-thread-in-java/"
      }
    ]
  },
  "java_runnable_interface": {
    "isStructured": true,
    "title": "87. Runnable Interface",
    "difficulty": "Advanced",
    "readingTime": "5 min",
    "definition": "The `Runnable` interface should be implemented by any class whose instances are intended to be executed by a thread. It contains a single method: `run()`.",
    "whyUseIt": "Java only allows single inheritance. If your class `extends Thread`, it CANNOT extend any other class. If your class `implements Runnable`, it can still inherit from another class!",
    "syntax": "class MyTask implements Runnable { public void run() { ... } }\nThread t = new Thread(new MyTask());\nt.start();",
    "codeExample": "// We can extend another class AND implement Runnable!\nclass GameCharacter { }\n\nclass Player extends GameCharacter implements Runnable {\n    public void run() {\n        System.out.println(\"Player logic running in a background thread.\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Player myPlayer = new Player();\n        \n        // Pass the Runnable object into a new Thread constructor\n        Thread playerThread = new Thread(myPlayer);\n        \n        playerThread.start();\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Player logic running in a background thread.",
    "explanation": [
      {
        "code": "implements Runnable",
        "desc": "Frees up our ability to `extends` other classes."
      },
      {
        "code": "new Thread(myPlayer)",
        "desc": "A `Thread` object needs to know what code to run. We hand it our `Runnable` object as a target."
      }
    ],
    "realWorldExample": "Hiring a contractor. The `Thread` is the literal worker. The `Runnable` is the blueprint of instructions you hand them. You can hand the same blueprint to 5 different workers.",
    "commonMistakes": [
      {
        "error": "Forgetting to wrap the Runnable in a Thread. A Runnable by itself cannot start a background process.",
        "code": "Player p = new Player(); p.start();",
        "suffix": "// Error: Player does not have a start() method."
      }
    ],
    "bestPractices": [
      "In modern Java, you almost ALWAYS use `implements Runnable` instead of `extends Thread`. It is the preferred, more flexible design pattern."
    ],
    "practiceExercise": {
      "task": "Create an anonymous Runnable using lambda syntax and pass it directly into a Thread constructor: `new Thread(() -> { ... }).start();`",
      "solution": "new Thread(() -> { System.out.println(\"Inline thread\"); }).start();"
    },
    "interviewQuestions": [
      "Why is implementing Runnable preferred over extending Thread?",
      "Can we call the run() method directly on a Runnable object?"
    ],
    "quiz": [
      {
        "question": "Which of the following is the CORRECT way to start a Runnable named 'task'?",
        "options": [
          "task.start()",
          "task.run()",
          "new Thread(task).start()",
          "Thread.start(task)"
        ],
        "correctAnswer": "new Thread(task).start()"
      }
    ],
    "summary": [
      "`Runnable` is an interface with one method: `run()`.",
      "It allows you to create threaded tasks without burning your single class inheritance.",
      "You pass a `Runnable` into a `Thread` constructor to execute it."
    ],
    "references": [
      {
        "label": "Runnable Interface in Java",
        "url": "https://www.geeksforgeeks.org/runnable-interface-in-java/"
      }
    ]
  },
  "java_synchronization": {
    "isStructured": true,
    "title": "88. Synchronization",
    "difficulty": "Advanced",
    "readingTime": "6 min",
    "definition": "Synchronization is the capability to control the access of multiple threads to any shared resource. It prevents 'Thread Interference' and memory consistency errors.",
    "whyUseIt": "If two threads try to modify the exact same variable at the exact same time, the data can become corrupted (a Race Condition). Synchronization ensures only ONE thread accesses the code block at a time.",
    "syntax": "synchronized void myMethod() { ... }",
    "codeExample": "class BankAccount {\n    private int balance = 100;\n\n    // The 'synchronized' keyword acts as a lock.\n    // Only one thread can be inside this method at a time.\n    public synchronized void withdraw(int amount) {\n        if (balance >= amount) {\n            System.out.println(Thread.currentThread().getName() + \" is withdrawing...\");\n            balance -= amount;\n            System.out.println(\"Success! Balance: \" + balance);\n        } else {\n            System.out.println(\"Not enough money for \" + Thread.currentThread().getName());\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        BankAccount account = new BankAccount();\n        \n        // Two threads trying to withdraw from the same account at the same time\n        Runnable task = () -> account.withdraw(100);\n        \n        Thread t1 = new Thread(task, \"Husband\");\n        Thread t2 = new Thread(task, \"Wife\");\n        \n        t1.start();\n        t2.start();\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Husband is withdrawing...\nSuccess! Balance: 0\nNot enough money for Wife",
    "explanation": [
      {
        "code": "synchronized",
        "desc": "Without this keyword, both threads might check the balance at the same time, see $100, and both withdraw $100, leaving the bank with -$100 (a Race Condition bug)."
      }
    ],
    "realWorldExample": "A public restroom with one stall. Only one person (Thread) can enter at a time. They lock the door (`synchronized`). Others must wait in the `BLOCKED` state until the person leaves and unlocks the door.",
    "commonMistakes": [
      {
        "error": "Over-synchronizing. Putting `synchronized` on every method slows down the application massively because threads spend all their time waiting in line.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Instead of synchronizing entire methods, use synchronized blocks `synchronized(this) { ... }` to lock only the specific 2-3 lines of code that modify shared variables."
    ],
    "practiceExercise": {
      "task": "What keyword is used to ensure a method is completely thread-safe?",
      "solution": "synchronized"
    },
    "interviewQuestions": [
      "What is a Race Condition?",
      "What is a Deadlock in multithreading?",
      "What is the difference between synchronized method and synchronized block?"
    ],
    "quiz": [
      {
        "question": "What problem does the `synchronized` keyword solve?",
        "options": [
          "It makes code run faster",
          "It allows multiple inheritance",
          "It prevents multiple threads from executing a block of code at the same time",
          "It handles exceptions automatically"
        ],
        "correctAnswer": "It prevents multiple threads from executing a block of code at the same time"
      }
    ],
    "summary": [
      "Synchronization prevents data corruption from concurrent thread access.",
      "It acts as a 'lock' on a method or code block.",
      "It causes performance overhead, so use it sparingly."
    ],
    "references": [
      {
        "label": "Synchronization in Java",
        "url": "https://www.geeksforgeeks.org/synchronization-in-java/"
      }
    ]
  },
  "java_executor_framework": {
    "isStructured": true,
    "title": "89. Executor Framework",
    "difficulty": "Advanced",
    "readingTime": "6 min",
    "definition": "The `ExecutorService` framework (introduced in Java 5) simplifies the execution of tasks in asynchronous mode. Instead of manually creating and managing `Thread` objects, you hand tasks to a Thread Pool.",
    "whyUseIt": "Creating a new `Thread` for every single task is computationally expensive. A Thread Pool creates a fixed number of threads and reuses them, massively improving performance for server applications.",
    "syntax": "ExecutorService pool = Executors.newFixedThreadPool(3);\npool.execute(new MyRunnable());",
    "codeExample": "import java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Create a pool of exactly 2 reusable threads\n        ExecutorService pool = Executors.newFixedThreadPool(2);\n        \n        // Submit 5 tasks to the pool\n        for (int i = 1; i <= 5; i++) {\n            int taskNumber = i;\n            pool.execute(() -> {\n                System.out.println(\"Executing task \" + taskNumber + \" on \" + Thread.currentThread().getName());\n            });\n        }\n        \n        // You MUST shut down the pool, otherwise your program will never exit!\n        pool.shutdown();\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Executing task 1 on pool-1-thread-1\nExecuting task 2 on pool-1-thread-2\nExecuting task 3 on pool-1-thread-1\nExecuting task 4 on pool-1-thread-2\nExecuting task 5 on pool-1-thread-1\n(Notice only thread-1 and thread-2 are ever used)",
    "explanation": [
      {
        "code": "newFixedThreadPool(2)",
        "desc": "Creates the workers. If 5 tasks arrive, the 2 workers process the first two, while the other 3 wait in a Queue."
      },
      {
        "code": "pool.shutdown()",
        "desc": "Stops accepting new tasks and tells the threads to die gracefully once they finish their current work."
      }
    ],
    "realWorldExample": "A restaurant with 5 waiters (Thread Pool of 5). If 20 tables need serving (Tasks), you don't hire 15 new waiters instantly (creating new Threads). The 5 waiters just cycle through the 20 tasks efficiently.",
    "commonMistakes": [
      {
        "error": "Forgetting to call `pool.shutdown()`. The JVM keeps Thread Pools alive in the background waiting for more work. Your console will just hang forever when the main method ends.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "In modern Java applications (like Spring Boot servers), you NEVER manually call `new Thread()`. You always use an `ExecutorService`."
    ],
    "practiceExercise": {
      "task": "What utility class in `java.util.concurrent` is used to create a Fixed Thread Pool?",
      "solution": "Executors"
    },
    "interviewQuestions": [
      "What is a Thread Pool and why is it used?",
      "What is the difference between execute() and submit() in ExecutorService?",
      "What is the difference between shutdown() and shutdownNow()?"
    ],
    "quiz": [
      {
        "question": "If you have a FixedThreadPool of size 3, and you submit 10 tasks simultaneously, what happens?",
        "options": [
          "7 tasks are rejected and throw an Exception",
          "The pool temporarily creates 7 more threads",
          "3 tasks execute immediately, 7 wait in a queue",
          "The program crashes"
        ],
        "correctAnswer": "3 tasks execute immediately, 7 wait in a queue"
      }
    ],
    "summary": [
      "The Executor Framework manages pools of reusable threads.",
      "It is vastly more efficient than creating threads manually.",
      "Always call `.shutdown()` when finished."
    ],
    "references": [
      {
        "label": "Java Executor Framework",
        "url": "https://www.geeksforgeeks.org/executor-framework-in-java/"
      }
    ]
  },
  "java_lambda_expressions": {
    "isStructured": true,
    "title": "90. Lambda Expressions",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "Lambda expressions (introduced in Java 8) provide a clear and concise way to represent a method using an expression. They are essentially anonymous functions (methods without a name).",
    "whyUseIt": "They drastically reduce boilerplate code. Instead of writing a 5-line anonymous inner class, you can write a 1-line lambda expression.",
    "syntax": "(parameter1, parameter2) -> { code block }",
    "codeExample": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> numbers = new ArrayList<>();\n        numbers.add(5);\n        numbers.add(9);\n        numbers.add(8);\n        numbers.add(1);\n        \n        // The old way (External iteration)\n        // for(Integer n : numbers) { System.out.println(n); }\n        \n        // The new way using a Lambda Expression!\n        numbers.forEach( (n) -> { \n            System.out.println(n); \n        });\n        \n        // Even shorter (One-liner doesn't need curly braces)\n        // numbers.forEach( n -> System.out.println(n) );\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "5\n9\n8\n1",
    "explanation": [
      {
        "code": "(n) ->",
        "desc": "`n` is the parameter (representing each item in the list). The `->` is the lambda operator, meaning 'do this'."
      },
      {
        "code": "forEach",
        "desc": "A modern method added to Collections that expects a function to execute on every single element."
      }
    ],
    "realWorldExample": "Delegating work. Instead of giving an employee a massive binder of policies (a full Class), you just hand them a sticky note that says 'Multiply everything by 2' (a Lambda).",
    "commonMistakes": [
      {
        "error": "Trying to change a local variable from outside the lambda, from inside the lambda. Local variables referenced from a lambda expression must be `final` or effectively final.",
        "code": "int count = 0; \nlist.forEach(n -> count++);",
        "suffix": "// Compilation error!"
      }
    ],
    "bestPractices": [
      "Use lambdas with the modern Java Streams API to filter and map data with incredible conciseness."
    ],
    "practiceExercise": {
      "task": "Rewrite this using a lambda: `button.addActionListener(new ActionListener() { public void actionPerformed(ActionEvent e) { doSomething(); } });`",
      "solution": "button.addActionListener(e -> doSomething());"
    },
    "interviewQuestions": [
      "What are Lambda expressions in Java?",
      "Why must variables used in lambdas be effectively final?"
    ],
    "quiz": [
      {
        "question": "Which operator is used to separate the parameters from the body in a Lambda expression?",
        "options": [
          "=>",
          "::",
          "->",
          "~>"
        ],
        "correctAnswer": "->"
      }
    ],
    "summary": [
      "Lambdas are anonymous, unnamed functions.",
      "They use the `->` operator.",
      "They drastically reduce boilerplate code, especially in Collections and UI events."
    ],
    "references": [
      {
        "label": "Java Lambda Expressions",
        "url": "https://www.w3schools.com/java/java_lambda.asp"
      }
    ]
  }
};
