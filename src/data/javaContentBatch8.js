export const javaContentBatch8 = {
  "java_queue": {
    "isStructured": true,
    "title": "71. Queue",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "A `Queue` is an interface in the Java Collections Framework that represents a First-In-First-Out (FIFO) data structure. Elements are inserted at the end (tail) and removed from the beginning (head).",
    "whyUseIt": "Queues are essential when you need to process data in the exact order it arrived, such as handling web server requests, print jobs, or event processing.",
    "syntax": "Queue<Type> queue = new LinkedList<>();",
    "codeExample": "import java.util.LinkedList;\nimport java.util.Queue;\n\npublic class Main {\n    public static void main(String[] args) {\n        // LinkedList implements the Queue interface\n        Queue<String> line = new LinkedList<>();\n        \n        // add() or offer() adds elements to the tail\n        line.offer(\"Alice\");\n        line.offer(\"Bob\");\n        line.offer(\"Charlie\");\n        \n        // peek() looks at the head without removing it\n        System.out.println(\"Next in line: \" + line.peek());\n        \n        // poll() removes and returns the head of the queue\n        String served = line.poll();\n        System.out.println(\"Served: \" + served);\n        \n        System.out.println(\"Queue now: \" + line);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Next in line: Alice\nServed: Alice\nQueue now: [Bob, Charlie]",
    "explanation": [
      {
        "code": "new LinkedList<>()",
        "desc": "Because Queue is an interface, it cannot be instantiated directly. LinkedList is a common class that implements Queue."
      },
      {
        "code": "line.poll()",
        "desc": "Safely removes the first element. If the queue is empty, it returns `null` instead of crashing."
      }
    ],
    "realWorldExample": "A line at a coffee shop. The first person to get in line is the first person to get served. If you arrive last, you are added to the back of the queue.",
    "commonMistakes": [
      {
        "error": "Using `add()` and `remove()` instead of `offer()` and `poll()`. While both work, `add()` throws an Exception if the queue is full (in restricted-capacity queues), whereas `offer()` safely returns false.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Use `offer()`, `poll()`, and `peek()` instead of `add()`, `remove()`, and `element()` to avoid unexpected exceptions when a queue is empty or full."
    ],
    "practiceExercise": {
      "task": "Create a Queue of Integers. Add 10 and 20. Poll the queue once and print the resulting queue.",
      "solution": "Queue<Integer> q = new LinkedList<>(); q.offer(10); q.offer(20); q.poll(); System.out.println(q);"
    },
    "interviewQuestions": [
      "What is the difference between poll() and remove()?",
      "Why does LinkedList implement the Queue interface?",
      "What is a Deque?"
    ],
    "quiz": [
      {
        "question": "Which processing order does a Queue follow?",
        "options": [
          "LIFO (Last In First Out)",
          "FIFO (First In First Out)",
          "Random access",
          "Sorted access"
        ],
        "correctAnswer": "FIFO (First In First Out)"
      }
    ],
    "summary": [
      "A Queue operates on a FIFO basis.",
      "You cannot instantiate a Queue directly; use `LinkedList` or `PriorityQueue`.",
      "`offer()`, `poll()`, and `peek()` are the safest methods to use."
    ],
    "references": [
      {
        "label": "Java Queue Interface",
        "url": "https://www.geeksforgeeks.org/queue-interface-java/"
      }
    ]
  },
  "java_priorityqueue": {
    "isStructured": true,
    "title": "72. PriorityQueue",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "A `PriorityQueue` is an implementation of the `Queue` interface where elements are NOT processed First-In-First-Out, but rather based on their natural priority (or a custom Comparator).",
    "whyUseIt": "Use it when you need to process items based on importance. For example, a hospital emergency room processes patients based on severity, not arrival time.",
    "syntax": "PriorityQueue<Type> pq = new PriorityQueue<>();",
    "codeExample": "import java.util.PriorityQueue;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Defaults to natural ordering (smallest numbers first)\n        PriorityQueue<Integer> pq = new PriorityQueue<>();\n        \n        // We add them completely out of order\n        pq.offer(500);\n        pq.offer(10);\n        pq.offer(100);\n        \n        // Polling removes them based on priority (smallest to largest)\n        System.out.println(pq.poll()); // 10\n        System.out.println(pq.poll()); // 100\n        System.out.println(pq.poll()); // 500\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "10\n100\n500",
    "explanation": [
      {
        "code": "new PriorityQueue<>()",
        "desc": "By default, numbers are prioritized smallest-first, and Strings are prioritized alphabetically."
      }
    ],
    "realWorldExample": "VIP boarding at an airport. Even if a VIP arrives at the gate last, they are moved to the front of the 'PriorityQueue' because of their ticket status.",
    "commonMistakes": [
      {
        "error": "Printing the PriorityQueue directly and expecting it to be fully sorted. `System.out.println(pq)` only guarantees the FIRST element is the smallest. The internal array structure (a Heap) looks unsorted until you actively `poll()` them.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "If you are putting custom objects (like `Patient`) into a PriorityQueue, they MUST implement the `Comparable` interface, or you must provide a `Comparator`."
    ],
    "practiceExercise": {
      "task": "Create a PriorityQueue of Strings, add 'Zebra', 'Apple', and 'Mango'. Poll the first item. What is it?",
      "solution": "PriorityQueue<String> pq = new PriorityQueue<>(); pq.offer(\"Zebra\"); pq.offer(\"Apple\"); pq.offer(\"Mango\"); System.out.println(pq.poll()); // Apple"
    },
    "interviewQuestions": [
      "What data structure is used internally to implement a PriorityQueue in Java? (Hint: Min-Heap)",
      "How would you create a Max-PriorityQueue (largest first) in Java?",
      "Can a PriorityQueue contain null values?"
    ],
    "quiz": [
      {
        "question": "If you add integers 5, 2, and 8 into a default PriorityQueue, which will be removed first when calling poll()?",
        "options": [
          "5",
          "2",
          "8",
          "It depends on insertion order"
        ],
        "correctAnswer": "2"
      }
    ],
    "summary": [
      "PriorityQueue processes elements based on priority, not arrival time.",
      "Default priority is ascending (natural ordering).",
      "Internally uses a Min-Heap data structure."
    ],
    "references": [
      {
        "label": "PriorityQueue in Java",
        "url": "https://www.geeksforgeeks.org/priority-queue-class-in-java/"
      }
    ]
  },
  "java_hashset": {
    "isStructured": true,
    "title": "73. HashSet",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "A `HashSet` is a collection that implements the `Set` interface. It stores unique elements and uses a mechanism called hashing internally. It does NOT maintain insertion order.",
    "whyUseIt": "It is heavily used to remove duplicates from a list or quickly check if an item exists (`.contains()`) with blazing fast performance (O(1) time).",
    "syntax": "HashSet<Type> set = new HashSet<>();",
    "codeExample": "import java.util.HashSet;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashSet<String> cars = new HashSet<>();\n        \n        cars.add(\"Volvo\");\n        cars.add(\"BMW\");\n        cars.add(\"Ford\");\n        \n        // Trying to add a duplicate\n        cars.add(\"BMW\");\n        \n        System.out.println(\"Set: \" + cars);\n        System.out.println(\"Contains Ford? \" + cars.contains(\"Ford\"));\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Set: [Volvo, Ford, BMW]\nContains Ford? true",
    "explanation": [
      {
        "code": "cars.add(\"BMW\")",
        "desc": "The second 'BMW' is simply ignored. A Set cannot contain duplicates."
      },
      {
        "code": "Set: [Volvo, Ford, BMW]",
        "desc": "Notice the output order is random! HashSet does not care about the order you added things."
      }
    ],
    "realWorldExample": "Keeping track of the IDs of users currently online. An ID can only be in the 'online' list once, and you need to be able to check if a specific user is online instantly.",
    "commonMistakes": [
      {
        "error": "Trying to get an item by index from a HashSet (e.g., `set.get(0)`). Sets do not have indexes! To read data from a Set, you must use a loop or an Iterator.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Use `HashSet` whenever you need a collection of unique items and you don't care what order they are displayed in."
    ],
    "practiceExercise": {
      "task": "Create a HashSet of Integers. Add 10, 10, and 20. Print the size of the set.",
      "solution": "HashSet<Integer> set = new HashSet<>(); set.add(10); set.add(10); set.add(20); System.out.println(set.size()); // Prints 2"
    },
    "interviewQuestions": [
      "What is the internal data structure of a HashSet?",
      "How does HashSet check for duplicates?",
      "What is the difference between List and Set?"
    ],
    "quiz": [
      {
        "question": "Which of the following is true about a HashSet?",
        "options": [
          "It allows duplicate elements",
          "It maintains insertion order",
          "It allows fast access via index numbers",
          "It does not allow duplicate elements"
        ],
        "correctAnswer": "It does not allow duplicate elements"
      }
    ],
    "summary": [
      "`HashSet` stores unique items.",
      "It does NOT guarantee any specific order.",
      "It is incredibly fast for checking if an item exists."
    ],
    "references": [
      {
        "label": "Java HashSet",
        "url": "https://www.w3schools.com/java/java_hashset.asp"
      }
    ]
  },
  "java_linkedhashset": {
    "isStructured": true,
    "title": "74. LinkedHashSet",
    "difficulty": "Intermediate",
    "readingTime": "4 min",
    "definition": "`LinkedHashSet` is a subclass of `HashSet`. It provides the exact same functionality (storing unique items), but it also maintains a doubly-linked list across all elements to remember their insertion order.",
    "whyUseIt": "Use it when you want a collection of unique items (like a HashSet) BUT you also need to iterate through them in the exact order they were originally added.",
    "syntax": "LinkedHashSet<Type> set = new LinkedHashSet<>();",
    "codeExample": "import java.util.LinkedHashSet;\n\npublic class Main {\n    public static void main(String[] args) {\n        LinkedHashSet<String> animals = new LinkedHashSet<>();\n        \n        animals.add(\"Dog\");\n        animals.add(\"Cat\");\n        animals.add(\"Bird\");\n        animals.add(\"Cat\"); // Duplicate ignored\n        \n        // The output is GUARANTEED to be [Dog, Cat, Bird]\n        System.out.println(animals);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "[Dog, Cat, Bird]",
    "explanation": [
      {
        "code": "LinkedHashSet",
        "desc": "Maintains the insertion order while still rejecting duplicates."
      }
    ],
    "realWorldExample": "A cache of recently visited web pages. You don't want duplicates (if they visit the homepage 5 times, only store it once), but you DO want to display them in the exact order they visited them.",
    "commonMistakes": [
      {
        "error": "Using `LinkedHashSet` when order doesn't matter. The linked list overhead makes it slightly slower and use more memory than a standard `HashSet`.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Only use `LinkedHashSet` over `HashSet` when the display order of the elements is a strict business requirement."
    ],
    "practiceExercise": {
      "task": "Create a LinkedHashSet, add 'Z', 'A', 'Y' in that order. Iterate through it. Notice the order matches insertion.",
      "solution": "LinkedHashSet<String> s = new LinkedHashSet<>(); s.add(\"Z\"); s.add(\"A\"); s.add(\"Y\"); System.out.println(s);"
    },
    "interviewQuestions": [
      "What is the difference between HashSet and LinkedHashSet?",
      "Does LinkedHashSet sort elements alphabetically?"
    ],
    "quiz": [
      {
        "question": "What order does a LinkedHashSet maintain?",
        "options": [
          "Alphabetical order",
          "Numerical order",
          "Insertion order",
          "Random order"
        ],
        "correctAnswer": "Insertion order"
      }
    ],
    "summary": [
      "`LinkedHashSet` rejects duplicates.",
      "It maintains insertion order using a linked list.",
      "It is slightly slower than `HashSet`."
    ],
    "references": [
      {
        "label": "LinkedHashSet in Java",
        "url": "https://www.geeksforgeeks.org/linkedhashset-in-java-with-examples/"
      }
    ]
  },
  "java_treeset": {
    "isStructured": true,
    "title": "75. TreeSet",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "`TreeSet` is a collection that implements the `Set` interface. Not only does it ensure unique elements, but it automatically sorts the elements in ascending (natural) order.",
    "whyUseIt": "Use it when you need to store unique items and you always need them to be perfectly sorted. It uses a self-balancing binary search tree (Red-Black tree) internally.",
    "syntax": "TreeSet<Type> set = new TreeSet<>();",
    "codeExample": "import java.util.TreeSet;\n\npublic class Main {\n    public static void main(String[] args) {\n        TreeSet<Integer> numbers = new TreeSet<>();\n        \n        // Added out of order\n        numbers.add(50);\n        numbers.add(10);\n        numbers.add(30);\n        numbers.add(10); // Duplicate ignored\n        \n        // Guaranteed to print sorted: [10, 30, 50]\n        System.out.println(numbers);\n        \n        // TreeSet specific methods\n        System.out.println(\"Smallest: \" + numbers.first());\n        System.out.println(\"Largest: \" + numbers.last());\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "[10, 30, 50]\nSmallest: 10\nLargest: 50",
    "explanation": [
      {
        "code": "TreeSet",
        "desc": "Automatically sorts elements upon insertion."
      },
      {
        "code": "numbers.first()",
        "desc": "Fetches the lowest value in O(log n) time."
      }
    ],
    "realWorldExample": "Creating a leaderboard of high scores in a game. You don't want duplicate entries for the exact same score, and you always need the scores displayed from lowest to highest (or highest to lowest).",
    "commonMistakes": [
      {
        "error": "Putting custom objects (like an `Employee` class) into a TreeSet without implementing `Comparable`. TreeSet doesn't magically know how to sort your custom objects; it will crash with a ClassCastException.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "`TreeSet` is much slower for adding/removing items than `HashSet`. Only use it if you specifically need the data to be continuously sorted."
    ],
    "practiceExercise": {
      "task": "Create a TreeSet of Strings. Add 'Zeta', 'Alpha', 'Charlie'. Print the set to see it sorted alphabetically.",
      "solution": "TreeSet<String> s = new TreeSet<>(); s.add(\"Zeta\"); s.add(\"Alpha\"); s.add(\"Charlie\"); System.out.println(s);"
    },
    "interviewQuestions": [
      "What is the difference between HashSet, LinkedHashSet, and TreeSet?",
      "What is the time complexity of adding an element to a TreeSet? (Answer: O(log n))"
    ],
    "quiz": [
      {
        "question": "Which set automatically sorts its elements in ascending order?",
        "options": [
          "HashSet",
          "TreeSet",
          "LinkedHashSet",
          "ListSet"
        ],
        "correctAnswer": "TreeSet"
      }
    ],
    "summary": [
      "`TreeSet` stores unique elements.",
      "It automatically sorts elements in natural order.",
      "It provides navigation methods like `.first()` and `.last()`."
    ],
    "references": [
      {
        "label": "TreeSet in Java",
        "url": "https://www.geeksforgeeks.org/treeset-in-java-with-examples/"
      }
    ]
  },
  "java_hashmap": {
    "isStructured": true,
    "title": "76. HashMap",
    "difficulty": "Beginner",
    "readingTime": "6 min",
    "definition": "A `HashMap` stores items in 'Key/Value' pairs. You access a value using its unique Key (like a dictionary). It does not maintain insertion order.",
    "whyUseIt": "It is one of the most powerful data structures. Use it whenever you need to look up data instantly using a unique identifier (like looking up an employee's name using their ID number).",
    "syntax": "HashMap<KeyType, ValueType> map = new HashMap<>();",
    "codeExample": "import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Key is String (City), Value is Integer (Population)\n        HashMap<String, Integer> cities = new HashMap<>();\n        \n        // Use put() to add pairs\n        cities.put(\"London\", 9000000);\n        cities.put(\"New York\", 8400000);\n        cities.put(\"Tokyo\", 14000000);\n        \n        // If you put an existing key, it overwrites the value\n        cities.put(\"London\", 9100000);\n        \n        // Access a value using its key\n        System.out.println(\"Tokyo population: \" + cities.get(\"Tokyo\"));\n        \n        // Remove an item\n        cities.remove(\"New York\");\n        \n        System.out.println(cities);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "Tokyo population: 14000000\n{Tokyo=14000000, London=9100000}",
    "explanation": [
      {
        "code": "cities.put()",
        "desc": "Keys must be unique. Values can be duplicates."
      },
      {
        "code": "cities.get(\"Tokyo\")",
        "desc": "Retrieves the value associated with the key 'Tokyo'."
      }
    ],
    "realWorldExample": "A phonebook. The 'Key' is the person's name (must be unique), and the 'Value' is their phone number. If you know the name, you can find the number instantly.",
    "commonMistakes": [
      {
        "error": "Using primitive types for Key or Value generics.",
        "code": "HashMap<String, int> map;",
        "suffix": "// Error! Must use the wrapper class: HashMap<String, Integer>"
      }
    ],
    "bestPractices": [
      "Often used with `.containsKey(key)` to check if a mapping already exists before adding a new one."
    ],
    "practiceExercise": {
      "task": "Create a HashMap mapping Integer (Employee ID) to String (Name). Add ID 1 as 'John', ID 2 as 'Jane'. Print Jane's name using her ID.",
      "solution": "HashMap<Integer, String> emp = new HashMap<>(); emp.put(1, \"John\"); emp.put(2, \"Jane\"); System.out.println(emp.get(2));"
    },
    "interviewQuestions": [
      "How does HashMap work internally in Java? (Hint: Array of Linked Lists / Buckets)",
      "What happens if two keys have the same hashcode in a HashMap?"
    ],
    "quiz": [
      {
        "question": "What happens if you `.put()` a Key-Value pair into a HashMap, but the Key already exists?",
        "options": [
          "It throws an Exception",
          "It ignores the new value",
          "It overwrites the old value with the new value",
          "It allows duplicate keys"
        ],
        "correctAnswer": "It overwrites the old value with the new value"
      }
    ],
    "summary": [
      "`HashMap` stores Key-Value pairs.",
      "Keys must be unique; values can be duplicated.",
      "It is incredibly fast for looking up values if you know the key."
    ],
    "references": [
      {
        "label": "Java HashMap",
        "url": "https://www.w3schools.com/java/java_hashmap.asp"
      }
    ]
  },
  "java_linkedhashmap": {
    "isStructured": true,
    "title": "77. LinkedHashMap",
    "difficulty": "Intermediate",
    "readingTime": "4 min",
    "definition": "`LinkedHashMap` is just like `HashMap` (stores key-value pairs), but it maintains a doubly-linked list running through all its entries. This allows it to maintain the insertion order of the keys.",
    "whyUseIt": "Use it when you need dictionary lookup capabilities (Key/Value pairs), but you also need to iterate over the dictionary in the exact order you populated it.",
    "syntax": "LinkedHashMap<KeyType, ValueType> map = new LinkedHashMap<>();",
    "codeExample": "import java.util.LinkedHashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        LinkedHashMap<String, String> translation = new LinkedHashMap<>();\n        \n        translation.put(\"One\", \"Uno\");\n        translation.put(\"Two\", \"Dos\");\n        translation.put(\"Three\", \"Tres\");\n        \n        // The output order will strictly match insertion order\n        System.out.println(translation);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "{One=Uno, Two=Dos, Three=Tres}",
    "explanation": [
      {
        "code": "LinkedHashMap",
        "desc": "A normal HashMap would print these keys in a scrambled, unpredictable order. LinkedHashMap guarantees order."
      }
    ],
    "realWorldExample": "Building an API response. If you query a database and get columns in a specific order (ID, Name, Email), and you want to convert that to a JSON object using a Map, a `LinkedHashMap` ensures the JSON properties stay in that logical order.",
    "commonMistakes": [
      {
        "error": "Defaulting to LinkedHashMap for everything. Maintaining the linked list takes extra memory and time. Use standard HashMap unless order is required.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "LinkedHashMap can also be configured to maintain 'Access Order' instead of 'Insertion Order', making it perfect for building LRU (Least Recently Used) caches."
    ],
    "practiceExercise": {
      "task": "Create a LinkedHashMap mapping Integer (1,2,3) to Strings ('First', 'Second', 'Third'). Print the map.",
      "solution": "LinkedHashMap<Integer, String> map = new LinkedHashMap<>(); map.put(1, \"First\"); map.put(2, \"Second\"); map.put(3, \"Third\"); System.out.println(map);"
    },
    "interviewQuestions": [
      "What is the difference between HashMap and LinkedHashMap?",
      "How would you implement an LRU cache in Java using LinkedHashMap?"
    ],
    "quiz": [
      {
        "question": "What order does a LinkedHashMap maintain by default?",
        "options": [
          "Alphabetical order of keys",
          "Alphabetical order of values",
          "Insertion order",
          "Random order"
        ],
        "correctAnswer": "Insertion order"
      }
    ],
    "summary": [
      "`LinkedHashMap` stores Key-Value pairs.",
      "It maintains insertion order.",
      "It is useful for generating predictable outputs."
    ],
    "references": [
      {
        "label": "LinkedHashMap in Java",
        "url": "https://www.geeksforgeeks.org/linkedhashmap-class-in-java/"
      }
    ]
  },
  "java_treemap": {
    "isStructured": true,
    "title": "78. TreeMap",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "`TreeMap` implements the `Map` interface. It stores Key-Value pairs, but it automatically sorts the entries based on the natural ordering of the Keys.",
    "whyUseIt": "Use it when you need a dictionary of keys and values, and you need to frequently print or access them in alphabetical/numerical sorted order.",
    "syntax": "TreeMap<KeyType, ValueType> map = new TreeMap<>();",
    "codeExample": "import java.util.TreeMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        TreeMap<Integer, String> students = new TreeMap<>();\n        \n        // Keys are added out of order\n        students.put(3, \"Charlie\");\n        students.put(1, \"Alice\");\n        students.put(2, \"Bob\");\n        \n        // TreeMap automatically sorts by Key (1, 2, 3)\n        System.out.println(students);\n        \n        // Useful TreeMap methods\n        System.out.println(\"First Key: \" + students.firstKey());\n        System.out.println(\"Last Key: \" + students.lastKey());\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "{1=Alice, 2=Bob, 3=Charlie}\nFirst Key: 1\nLast Key: 3",
    "explanation": [
      {
        "code": "TreeMap",
        "desc": "Uses a Red-Black tree internally to keep keys continuously sorted."
      }
    ],
    "realWorldExample": "A contact list app. You map Phone Numbers (Key) to Names (Value), or vice-versa. You want the app to always display the contacts perfectly sorted alphabetically, even when a new contact is added.",
    "commonMistakes": [
      {
        "error": "Trying to sort a TreeMap by VALUES. A TreeMap ONLY sorts by KEYS. If you need to sort by values, you have to extract the entries into a List and sort them manually.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "Avoid `TreeMap` unless sorting is actively required, as inserting data into a `TreeMap` (O(log n)) is significantly slower than a `HashMap` (O(1))."
    ],
    "practiceExercise": {
      "task": "Create a TreeMap where keys are Strings ('Z', 'A') and values are Integers (100, 200). Print the map.",
      "solution": "TreeMap<String, Integer> map = new TreeMap<>(); map.put(\"Z\", 100); map.put(\"A\", 200); System.out.println(map); // {A=200, Z=100}"
    },
    "interviewQuestions": [
      "What is the difference between HashMap, LinkedHashMap, and TreeMap?",
      "Does TreeMap allow null keys?"
    ],
    "quiz": [
      {
        "question": "Which component does the TreeMap use to sort its entries?",
        "options": [
          "The Values",
          "The Keys",
          "The insertion order",
          "Random hash codes"
        ],
        "correctAnswer": "The Keys"
      }
    ],
    "summary": [
      "`TreeMap` stores Key-Value pairs.",
      "It automatically sorts the map based on the KEYS.",
      "It is slower for insertions than a HashMap."
    ],
    "references": [
      {
        "label": "TreeMap in Java",
        "url": "https://www.geeksforgeeks.org/treemap-in-java/"
      }
    ]
  },
  "java_iterator": {
    "isStructured": true,
    "title": "79. Iterator",
    "difficulty": "Beginner",
    "readingTime": "5 min",
    "definition": "An `Iterator` is an object that can be used to loop through collections (like ArrayList, HashSet). It provides a standard, safe way to traverse data structures.",
    "whyUseIt": "While `for-each` loops are easier to read, you CANNOT remove items from a collection inside a `for-each` loop without crashing. An `Iterator` allows you to safely remove items while looping.",
    "syntax": "Iterator<Type> it = collection.iterator();",
    "codeExample": "import java.util.ArrayList;\nimport java.util.Iterator;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> numbers = new ArrayList<>();\n        numbers.add(12);\n        numbers.add(8);\n        numbers.add(2);\n        numbers.add(23);\n        \n        // Get the iterator\n        Iterator<Integer> it = numbers.iterator();\n        \n        // Loop using the iterator\n        while(it.hasNext()) {\n            Integer i = it.next();\n            if(i < 10) {\n                it.remove(); // Safely remove numbers less than 10\n            }\n        }\n        \n        System.out.println(numbers);\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "[12, 23]",
    "explanation": [
      {
        "code": "it.hasNext()",
        "desc": "Returns true if there are more items in the collection."
      },
      {
        "code": "it.next()",
        "desc": "Fetches the next item and moves the internal pointer forward."
      },
      {
        "code": "it.remove()",
        "desc": "Safely removes the item that was just fetched by `.next()`."
      }
    ],
    "realWorldExample": "Reviewing an inbox. The Iterator is your finger scrolling down the screen (`hasNext()`). You look at an email (`next()`). If it's spam, you swipe to delete it (`remove()`) and keep scrolling.",
    "commonMistakes": [
      {
        "error": "Using `collection.remove()` instead of `iterator.remove()` while looping. This causes a `ConcurrentModificationException`.",
        "code": "while(it.hasNext()) { numbers.remove(i); }",
        "suffix": "// CRASH! Use it.remove() instead."
      }
    ],
    "bestPractices": [
      "Use enhanced for-loops (`for (String s : list)`) for reading data. Only use an `Iterator` explicitly when you need to safely delete items during traversal."
    ],
    "practiceExercise": {
      "task": "Create an ArrayList of Strings. Get an Iterator and use a while loop with `hasNext()` and `next()` to print all elements.",
      "solution": "ArrayList<String> list = new ArrayList<>(); list.add(\"Hi\"); Iterator<String> it = list.iterator(); while(it.hasNext()) { System.out.println(it.next()); }"
    },
    "interviewQuestions": [
      "What is the difference between Iterator and ListIterator?",
      "Why does modifying a collection inside a for-each loop throw an Exception?"
    ],
    "quiz": [
      {
        "question": "What is the primary advantage of using an Iterator over a standard for-each loop?",
        "options": [
          "It is much faster",
          "It allows you to modify/remove elements safely while looping",
          "It can traverse arrays backwards",
          "It takes less memory"
        ],
        "correctAnswer": "It allows you to modify/remove elements safely while looping"
      }
    ],
    "summary": [
      "`Iterator` is used to traverse collections.",
      "Use `hasNext()` to check for elements, and `next()` to get them.",
      "Use `it.remove()` to safely delete items while looping."
    ],
    "references": [
      {
        "label": "Java Iterator",
        "url": "https://www.w3schools.com/java/java_iterator.asp"
      }
    ]
  },
  "java_reading_files": {
    "isStructured": true,
    "title": "80. Reading Files",
    "difficulty": "Intermediate",
    "readingTime": "5 min",
    "definition": "Java provides multiple ways to read data from a file on your hard drive. The easiest and most common way for beginners is using the `File` class combined with a `Scanner`.",
    "whyUseIt": "Virtually all applications require data persistence. If you write a game, you need to read the saved high scores from a text file on the user's computer.",
    "syntax": "File myObj = new File(\"filename.txt\");\nScanner myReader = new Scanner(myObj);",
    "codeExample": "import java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            // Create a file object\n            File myObj = new File(\"data.txt\");\n            \n            // Scanner reads from the File instead of System.in\n            Scanner myReader = new Scanner(myObj);\n            \n            // Loop through the file line by line\n            while (myReader.hasNextLine()) {\n                String data = myReader.nextLine();\n                System.out.println(data);\n            }\n            \n            // Always close the scanner to release the file lock\n            myReader.close();\n            \n        } catch (FileNotFoundException e) {\n            System.out.println(\"An error occurred: File not found.\");\n        }\n    }\n}",
    "hasLiveOutput": false,
    "expectedOutput": "(Output depends on the contents of data.txt)",
    "explanation": [
      {
        "code": "new Scanner(myObj)",
        "desc": "The Scanner class is incredibly versatile. It can read from keyboards, Strings, or Files."
      },
      {
        "code": "myReader.hasNextLine()",
        "desc": "Checks if there is another line of text remaining in the file."
      }
    ],
    "realWorldExample": "Loading settings into a video game. The game reads 'config.txt', parses 'Resolution=1920x1080', and configures the graphics accordingly.",
    "commonMistakes": [
      {
        "error": "Forgetting to close the scanner/file reader (`myReader.close()`). This leaves the file 'locked' by Java, preventing other applications from opening or deleting it.",
        "code": "",
        "suffix": ""
      }
    ],
    "bestPractices": [
      "In modern Java, use `Files.readAllLines(Paths.get(\"data.txt\"))` from the `java.nio.file` package for an incredibly fast, one-line way to read entire files into a List."
    ],
    "practiceExercise": {
      "task": "Create a try-catch block for FileNotFoundException that prints 'File Missing'. (You don't need to write the actual file reading logic for this drill).",
      "solution": "try { /* read logic */ } catch (FileNotFoundException e) { System.out.println(\"File Missing\"); }"
    },
    "interviewQuestions": [
      "What is the difference between BufferedReader and Scanner?",
      "Why is reading a file considered a Checked Exception (must be caught) in Java?"
    ],
    "quiz": [
      {
        "question": "Which exception must be handled when attempting to read a file using the Scanner class?",
        "options": [
          "IOException",
          "FileNotFoundException",
          "NullPointerException",
          "ArithmeticException"
        ],
        "correctAnswer": "FileNotFoundException"
      }
    ],
    "summary": [
      "Use `File` and `Scanner` to read text files line-by-line.",
      "File I/O requires a `try-catch` block for `FileNotFoundException`.",
      "Always `.close()` the reader to free up memory and remove file locks."
    ],
    "references": [
      {
        "label": "Java Read Files",
        "url": "https://www.w3schools.com/java/java_files_read.asp"
      }
    ]
  }
};
