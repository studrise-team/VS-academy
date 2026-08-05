import { javaContent } from './javaContent';
import { htmlContent } from './htmlContent';
import { mysqlContent } from './mysqlContent';
import { linuxContent } from './linuxContent';
import { gitContent } from './gitContent';

export const subjectsData = {
    java: {
    id: 'java',
    name: 'Java',
    chapters: [
          {
                "id": "java_introduction_to_java",
                "title": "1. Introduction to Java"
          },
          {
                "id": "java_history_of_java",
                "title": "2. History of Java"
          },
          {
                "id": "java_features_of_java",
                "title": "3. Features of Java"
          },
          {
                "id": "java_java_architecture_jdk_jre_jvm",
                "title": "4. Java Architecture (JDK, JRE, JVM)"
          },
          {
                "id": "java_installing_java",
                "title": "5. Installing Java"
          },
          {
                "id": "java_installing_vs_code_intellij_idea",
                "title": "6. Installing VS Code / IntelliJ IDEA"
          },
          {
                "id": "java_writing_your_first_java_program",
                "title": "7. Writing Your First Java Program"
          },
          {
                "id": "java_java_program_structure",
                "title": "8. Java Program Structure"
          },
          {
                "id": "java_compilation_execution_process",
                "title": "9. Compilation & Execution Process"
          },
          {
                "id": "java_variables",
                "title": "10. Variables"
          },
          {
                "id": "java_data_types",
                "title": "11. Data Types"
          },
          {
                "id": "java_type_casting",
                "title": "12. Type Casting"
          },
          {
                "id": "java_operators",
                "title": "13. Operators"
          },
          {
                "id": "java_user_input_scanner",
                "title": "14. User Input (Scanner)"
          },
          {
                "id": "java_comments",
                "title": "15. Comments"
          },
          {
                "id": "java_keywords",
                "title": "16. Keywords"
          },
          {
                "id": "java_identifiers",
                "title": "17. Identifiers"
          },
          {
                "id": "java_literals",
                "title": "18. Literals"
          },
          {
                "id": "java_if_statement",
                "title": "19. if Statement"
          },
          {
                "id": "java_if_else_statement",
                "title": "20. if-else Statement"
          },
          {
                "id": "java_nested_if",
                "title": "21. Nested if"
          },
          {
                "id": "java_switch_statement",
                "title": "22. switch Statement"
          },
          {
                "id": "java_for_loop",
                "title": "23. for Loop"
          },
          {
                "id": "java_while_loop",
                "title": "24. while Loop"
          },
          {
                "id": "java_do_while_loop",
                "title": "25. do-while Loop"
          },
          {
                "id": "java_break_statement",
                "title": "26. break Statement"
          },
          {
                "id": "java_continue_statement",
                "title": "27. continue Statement"
          },
          {
                "id": "java_one_dimensional_arrays",
                "title": "28. One-Dimensional Arrays"
          },
          {
                "id": "java_two_dimensional_arrays",
                "title": "29. Two-Dimensional Arrays"
          },
          {
                "id": "java_array_operations",
                "title": "30. Array Operations"
          },
          {
                "id": "java_enhanced_for_loop",
                "title": "31. Enhanced for Loop"
          },
          {
                "id": "java_array_sorting",
                "title": "32. Array Sorting"
          },
          {
                "id": "java_searching_in_arrays",
                "title": "33. Searching in Arrays"
          },
          {
                "id": "java_array_practice_problems",
                "title": "34. Array Practice Problems"
          },
          {
                "id": "java_introduction_to_methods",
                "title": "35. Introduction to Methods"
          },
          {
                "id": "java_method_parameters",
                "title": "36. Method Parameters"
          },
          {
                "id": "java_return_type",
                "title": "37. Return Type"
          },
          {
                "id": "java_method_overloading",
                "title": "38. Method Overloading"
          },
          {
                "id": "java_recursion",
                "title": "39. Recursion"
          },
          {
                "id": "java_variable_scope",
                "title": "40. Variable Scope"
          },
          {
                "id": "java_introduction_to_oop",
                "title": "41. Introduction to OOP"
          },
          {
                "id": "java_classes_objects",
                "title": "42. Classes & Objects"
          },
          {
                "id": "java_constructors",
                "title": "43. Constructors"
          },
          {
                "id": "java_this_keyword",
                "title": "44. this Keyword"
          },
          {
                "id": "java_static_keyword",
                "title": "45. static Keyword"
          },
          {
                "id": "java_final_keyword",
                "title": "46. final Keyword"
          },
          {
                "id": "java_encapsulation",
                "title": "47. Encapsulation"
          },
          {
                "id": "java_inheritance",
                "title": "48. Inheritance"
          },
          {
                "id": "java_polymorphism",
                "title": "49. Polymorphism"
          },
          {
                "id": "java_method_overriding",
                "title": "50. Method Overriding"
          },
          {
                "id": "java_method_overloading_oop",
                "title": "51. Method Overloading"
          },
          {
                "id": "java_abstraction",
                "title": "52. Abstraction"
          },
          {
                "id": "java_interfaces",
                "title": "53. Interfaces"
          },
          {
                "id": "java_string_class",
                "title": "54. String Class"
          },
          {
                "id": "java_string_methods",
                "title": "55. String Methods"
          },
          {
                "id": "java_stringbuilder",
                "title": "56. StringBuilder"
          },
          {
                "id": "java_stringbuffer",
                "title": "57. StringBuffer"
          },
          {
                "id": "java_string_comparison",
                "title": "58. String Comparison"
          },
          {
                "id": "java_string_practice_problems",
                "title": "59. String Practice Problems"
          },
          {
                "id": "java_introduction_to_exceptions",
                "title": "60. Introduction to Exceptions"
          },
          {
                "id": "java_try_catch",
                "title": "61. try-catch"
          },
          {
                "id": "java_finally",
                "title": "62. finally"
          },
          {
                "id": "java_throw",
                "title": "63. throw"
          },
          {
                "id": "java_throws",
                "title": "64. throws"
          },
          {
                "id": "java_custom_exceptions",
                "title": "65. Custom Exceptions"
          },
          {
                "id": "java_introduction_to_collections",
                "title": "66. Introduction to Collections"
          },
          {
                "id": "java_arraylist",
                "title": "67. ArrayList"
          },
          {
                "id": "java_linkedlist",
                "title": "68. LinkedList"
          },
          {
                "id": "java_vector",
                "title": "69. Vector"
          },
          {
                "id": "java_stack",
                "title": "70. Stack"
          },
          {
                "id": "java_queue",
                "title": "71. Queue"
          },
          {
                "id": "java_priorityqueue",
                "title": "72. PriorityQueue"
          },
          {
                "id": "java_hashset",
                "title": "73. HashSet"
          },
          {
                "id": "java_linkedhashset",
                "title": "74. LinkedHashSet"
          },
          {
                "id": "java_treeset",
                "title": "75. TreeSet"
          },
          {
                "id": "java_hashmap",
                "title": "76. HashMap"
          },
          {
                "id": "java_linkedhashmap",
                "title": "77. LinkedHashMap"
          },
          {
                "id": "java_treemap",
                "title": "78. TreeMap"
          },
          {
                "id": "java_iterator",
                "title": "79. Iterator"
          },
          {
                "id": "java_reading_files",
                "title": "80. Reading Files"
          },
          {
                "id": "java_writing_files",
                "title": "81. Writing Files"
          },
          {
                "id": "java_bufferedreader",
                "title": "82. BufferedReader"
          },
          {
                "id": "java_bufferedwriter",
                "title": "83. BufferedWriter"
          },
          {
                "id": "java_file_class",
                "title": "84. File Class"
          },
          {
                "id": "java_threads",
                "title": "85. Threads"
          },
          {
                "id": "java_thread_lifecycle",
                "title": "86. Thread Lifecycle"
          },
          {
                "id": "java_runnable_interface",
                "title": "87. Runnable Interface"
          },
          {
                "id": "java_synchronization",
                "title": "88. Synchronization"
          },
          {
                "id": "java_executor_framework",
                "title": "89. Executor Framework"
          },
          {
                "id": "java_lambda_expressions",
                "title": "90. Lambda Expressions"
          },
          {
                "id": "java_functional_interfaces",
                "title": "91. Functional Interfaces"
          },
          {
                "id": "java_stream_api",
                "title": "92. Stream API"
          },
          {
                "id": "java_method_references",
                "title": "93. Method References"
          },
          {
                "id": "java_optional_class",
                "title": "94. Optional Class"
          },
          {
                "id": "java_date_time_api",
                "title": "95. Date & Time API"
          },
          {
                "id": "java_jdbc_introduction",
                "title": "96. JDBC Introduction"
          },
          {
                "id": "java_connecting_java_with_mysql",
                "title": "97. Connecting Java with MySQL"
          },
          {
                "id": "java_crud_operations_using_jdbc",
                "title": "98. CRUD Operations using JDBC"
          },
          {
                "id": "java_preparedstatement",
                "title": "99. PreparedStatement"
          },
          {
                "id": "java_resultset",
                "title": "100. ResultSet"
          },
          {
                "id": "java_student_management_system",
                "title": "101. Student Management System"
          },
          {
                "id": "java_bank_management_system",
                "title": "102. Bank Management System"
          },
          {
                "id": "java_library_management_system",
                "title": "103. Library Management System"
          },
          {
                "id": "java_atm_simulation",
                "title": "104. ATM Simulation"
          },
          {
                "id": "java_employee_management_system",
                "title": "105. Employee Management System"
          },
          {
                "id": "java_quiz_application",
                "title": "106. Quiz Application"
          },
          {
                "id": "java_expense_tracker",
                "title": "107. Expense Tracker"
          },
          {
                "id": "java_contact_management_system",
                "title": "108. Contact Management System"
          },
          {
                "id": "java_time_complexity_basics",
                "title": "109. Time Complexity Basics"
          },
          {
                "id": "java_common_coding_patterns",
                "title": "110. Common Coding Patterns"
          },
          {
                "id": "java_string_problems",
                "title": "111. String Problems"
          },
          {
                "id": "java_array_problems",
                "title": "112. Array Problems"
          },
          {
                "id": "java_oop_interview_questions",
                "title": "113. OOP Interview Questions"
          },
          {
                "id": "java_collections_interview_questions",
                "title": "114. Collections Interview Questions"
          },
          {
                "id": "java_exception_handling_interview_questions",
                "title": "115. Exception Handling Interview Questions"
          },
          {
                "id": "java_java_coding_interview_questions",
                "title": "116. Java Coding Interview Questions"
          },
          {
                "id": "java_servlet_basics",
                "title": "117. Servlet Basics"
          },
          {
                "id": "java_jsp_basics",
                "title": "118. JSP Basics"
          },
          {
                "id": "java_maven",
                "title": "119. Maven"
          },
          {
                "id": "java_spring_boot_introduction",
                "title": "120. Spring Boot Introduction"
          },
          {
                "id": "java_rest_apis",
                "title": "121. REST APIs"
          },
          {
                "id": "java_json_handling",
                "title": "122. JSON Handling"
          },
          {
                "id": "java_dependency_injection",
                "title": "123. Dependency Injection"
          },
          {
                "id": "java_spring_data_jpa",
                "title": "124. Spring Data JPA"
          },
          {
                "id": "java_hibernate_basics",
                "title": "125. Hibernate Basics"
          },
          {
                "id": "java_top_100_java_interview_questions",
                "title": "126. Top 100 Java Interview Questions"
          },
          {
                "id": "java_scenario_based_questions",
                "title": "127. Scenario-Based Questions"
          },
          {
                "id": "java_java_cheat_sheet",
                "title": "128. Java Cheat Sheet"
          },
          {
                "id": "java_coding_challenges",
                "title": "129. Coding Challenges"
          },
          {
                "id": "java_java_roadmap",
                "title": "130. Java Roadmap"
          }
    ],
    content: javaContent
  },
  html: {
    id: 'html',
    name: 'HTML',
    chapters: [
      { id: 'html_intro', title: '1. Introduction' },
      { id: 'html_editors', title: '2. HTML Editors' },
      { id: 'html_basic_structure', title: '3. Basic Structure' },
      { id: 'html_elements', title: '4. HTML Elements' },
      { id: 'html_attributes', title: '5. Attributes' },
      { id: 'html_headings', title: '6. Headings' },
      { id: 'html_paragraphs', title: '7. Paragraphs' },
      { id: 'html_formatting', title: '8. Formatting' },
      { id: 'html_comments', title: '9. Comments' },
      { id: 'html_colors', title: '10. Colors' },
      { id: 'html_links', title: '11. Links' },
      { id: 'html_images', title: '12. Images' },
      { id: 'html_favicon', title: '13. Favicon' },
      { id: 'html_tables', title: '14. Tables' },
      { id: 'html_lists', title: '15. Lists' },
      { id: 'html_block_inline', title: '16. Block vs Inline' },
      { id: 'html_div', title: '17. Div' },
      { id: 'html_span', title: '18. Span' },
      { id: 'html_classes', title: '19. Classes' },
      { id: 'html_ids', title: '20. IDs' },
      { id: 'html_iframe', title: '21. Iframe' },
      { id: 'html_forms', title: '22. Forms' },
      { id: 'html_input_types', title: '23. Input Types' },
      { id: 'html_form_validation', title: '24. Form Validation' },
      { id: 'html_semantic', title: '25. Semantic HTML' },
      { id: 'html_audio', title: '26. Audio' },
      { id: 'html_video', title: '27. Video' },
      { id: 'html_canvas', title: '28. Canvas' },
      { id: 'html_svg', title: '29. SVG' },
      { id: 'html_meta_tags', title: '30. Meta Tags' },
      { id: 'html_seo_basics', title: '31. SEO Basics' },
      { id: 'html_accessibility', title: '32. Accessibility' },
      { id: 'html_best_practices', title: '33. Best Practices' },
      { id: 'html_mini_project', title: '34. Mini Project' },
      { id: 'html_interview_questions', title: '35. Interview Questions' },
      { id: 'html_cheat_sheet', title: '36. Cheat Sheet' }
    ],
    content: htmlContent
  },
  mysql: {
    id: 'mysql',
    name: 'MySQL',
    chapters: [
      { id: 'mysql_what_is_db',       title: '1. What is a Database?' },
      { id: 'mysql_types_of_db',      title: '2. Types of Databases' },
      { id: 'mysql_what_is_mysql',    title: '3. What is MySQL?' },
      { id: 'mysql_features',         title: '4. Features of MySQL' },
      { id: 'mysql_installing_mysql', title: '5. Installing MySQL' },
      { id: 'mysql_workbench',        title: '6. MySQL Workbench' },
      { id: 'mysql_first_database',   title: '7. Creating Your First Database' },
      { id: 'mysql_sql_intro',        title: '8. SQL Introduction' },
      { id: 'mysql_sql_syntax',       title: '9. SQL Syntax' },
      { id: 'mysql_data_types',       title: '10. SQL Data Types' },
      { id: 'mysql_create_db',        title: '11. Creating a Database' },
      { id: 'mysql_create_table',     title: '12. Creating Tables' },
      { id: 'mysql_show',             title: '13. SHOW Databases & Tables' },
      { id: 'mysql_drop',             title: '14. DROP Database & Table' },
      { id: 'mysql_alter',            title: '15. ALTER Table' },
      { id: 'mysql_truncate',         title: '16. TRUNCATE Table' },
      { id: 'mysql_insert',           title: '17. INSERT Statement' },
      { id: 'mysql_select',           title: '18. SELECT Statement' },
      { id: 'mysql_where',            title: '19. WHERE Clause' },
      { id: 'mysql_update',           title: '20. UPDATE Statement' },
      { id: 'mysql_delete',           title: '21. DELETE Statement' },
      { id: 'mysql_limit',            title: '22. LIMIT Clause' },
      { id: 'mysql_order_by',         title: '23. ORDER BY' },
      { id: 'mysql_distinct',         title: '24. DISTINCT' },
      { id: 'mysql_aliases',          title: '25. Aliases (AS)' },
      { id: 'mysql_and',              title: '26. AND Operator' },
      { id: 'mysql_or',               title: '27. OR Operator' },
      { id: 'mysql_not',              title: '28. NOT Operator' },
      { id: 'mysql_between',          title: '29. BETWEEN' },
      { id: 'mysql_in',               title: '30. IN Operator' },
      { id: 'mysql_like',             title: '31. LIKE Operator' },
      { id: 'mysql_wildcards',        title: '32. Wildcards' },
      { id: 'mysql_is_null',          title: '33. IS NULL' },
      { id: 'mysql_is_not_null',      title: '34. IS NOT NULL' },
      { id: 'mysql_count',            title: '35. COUNT()' },
      { id: 'mysql_sum',              title: '36. SUM()' },
      { id: 'mysql_avg',              title: '37. AVG()' },
      { id: 'mysql_min',              title: '38. MIN()' },
      { id: 'mysql_max',              title: '39. MAX()' },
      { id: 'mysql_round',            title: '40. ROUND()' },
      { id: 'mysql_concat',           title: '41. CONCAT()' },
      { id: 'mysql_length',           title: '42. LENGTH()' },
      { id: 'mysql_upper_lower',      title: '43-44. UPPER() & LOWER()' },
      { id: 'mysql_group_by',         title: '45. GROUP BY' },
      { id: 'mysql_having',           title: '46. HAVING' },
      { id: 'mysql_aggregate_functions', title: '47. Aggregate Functions' },
      { id: 'mysql_case',             title: '48. CASE Statement' },
      { id: 'mysql_joins_intro',      title: '49. Introduction to Joins' },
      { id: 'mysql_inner_join',       title: '50. INNER JOIN' },
      { id: 'mysql_left_join',        title: '51. LEFT JOIN' },
      { id: 'mysql_right_join',       title: '52. RIGHT JOIN' },
      { id: 'mysql_full_join',        title: '53. FULL JOIN (Concept)' },
      { id: 'mysql_self_join',        title: '54. SELF JOIN' },
      { id: 'mysql_cross_join',       title: '55. CROSS JOIN' },
      { id: 'mysql_primary_key',      title: '56. Primary Key' },
      { id: 'mysql_foreign_key',      title: '57. Foreign Key' },
      { id: 'mysql_candidate_key',    title: '58. Candidate Key' },
      { id: 'mysql_composite_key',    title: '59. Composite Key' },
      { id: 'mysql_unique_key',       title: '60. Unique Key' },
      { id: 'mysql_auto_increment',   title: '61. Auto Increment' },
      { id: 'mysql_constraints',      title: '62. Constraints' },
      { id: 'mysql_subqueries',       title: '63. Subqueries' },
      { id: 'mysql_nested_queries',   title: '64. Nested Queries' },
      { id: 'mysql_union',            title: '65. UNION' },
      { id: 'mysql_union_all',        title: '66. UNION ALL' },
      { id: 'mysql_views',            title: '67. Views' },
      { id: 'mysql_indexes',          title: '68. Indexes' },
      { id: 'mysql_stored_procedures', title: '69. Stored Procedures' },
      { id: 'mysql_functions',        title: '70. Functions' },
      { id: 'mysql_triggers',         title: '71. Triggers' },
      { id: 'mysql_transactions',     title: '72. Transactions' },
      { id: 'mysql_commit',           title: '73. COMMIT' },
      { id: 'mysql_rollback',         title: '74. Rollback' },
      { id: 'mysql_er_diagram',       title: '75. ER Diagram' },
      { id: 'mysql_normalization',    title: '76. Database Normalization' },
      { id: 'mysql_1nf',              title: '77. First Normal Form (1NF)' },
      { id: 'mysql_2nf',              title: '78. Second Normal Form (2NF)' },
      { id: 'mysql_3nf',              title: '79. Third Normal Form (3NF)' },
      { id: 'mysql_denormalization',  title: '80. Denormalization' },
      { id: 'mysql_with_java',        title: '81. MySQL with Java (JDBC)' },
      { id: 'mysql_with_php',         title: '82. MySQL with PHP' },
      { id: 'mysql_with_nodejs',      title: '83. MySQL with Node.js' },
      { id: 'mysql_with_python',      title: '84. MySQL with Python' },
      { id: 'mysql_vs_firebase',      title: '85. MySQL vs Firebase' },
      { id: 'mysql_project_student',  title: '86. Student Management System' },
      { id: 'mysql_project_employee', title: '87. Employee Management System' },
      { id: 'mysql_project_library',  title: '88. Library Management System' },
      { id: 'mysql_project_banking',  title: '89. Banking Database' },
      { id: 'mysql_project_hospital', title: '90. Hospital Database' },
      { id: 'mysql_project_ecommerce', title: '91. E-Commerce Database' },
      { id: 'mysql_project_exam',     title: '92. Online Examination Database' },
      { id: 'mysql_project_college',  title: '93. College Management Database' },
      { id: 'mysql_project_railway',  title: '94. Railway Reservation Database' },
      { id: 'mysql_project_inventory', title: '95. Inventory Management System' },
      { id: 'mysql_interview_questions', title: '96. Top 50 Interview Questions' },
      { id: 'mysql_query_questions',  title: '97. Top 25 Query Questions' },
      { id: 'mysql_scenario_questions', title: '98. Scenario-Based Questions' },
      { id: 'mysql_common_mistakes',  title: '99. Common SQL Mistakes' },
      { id: 'mysql_cheat_sheet',      title: '100. MySQL Cheat Sheet' },
    ],
    content: mysqlContent
  },

  linux: {
    id: 'linux',
    name: 'Linux',
    description: 'Master Linux fundamentals, commands, bash scripting, and DevOps essentials.',
    chapters: [
      { id: 'linux_what_is', title: '1. What is Linux?' },
      { id: 'linux_history', title: '2. History of Linux' },
      { id: 'linux_distributions', title: '3. Linux Distributions' },
      { id: 'linux_architecture', title: '4. Linux Architecture' },
      { id: 'linux_install_ubuntu', title: '5. Installing Ubuntu' },
      { id: 'linux_virtualbox', title: '6. VirtualBox Setup' },
      { id: 'linux_wsl', title: '7. WSL (Windows Subsystem for Linux)' },
      { id: 'linux_file_system', title: '8. Linux File System Overview' },
      { id: 'linux_terminal_basics', title: '9. Terminal Basics' },
      { id: 'linux_first_command', title: '10. First Linux Command' },
      { id: 'linux_pwd', title: '11. pwd' },
      { id: 'linux_ls', title: '12. ls' },
      { id: 'linux_cd', title: '13. cd' },
      { id: 'linux_tree', title: '14. tree' },
      { id: 'linux_clear', title: '15. clear' },
      { id: 'linux_history_cmd', title: '16. history' },
      { id: 'linux_mkdir', title: '17. mkdir' },
      { id: 'linux_rmdir', title: '18. rmdir' },
      { id: 'linux_touch', title: '19. touch' },
      { id: 'linux_cp', title: '20. cp' },
      { id: 'linux_mv', title: '21. mv' },
      { id: 'linux_rm', title: '22. rm' },
      { id: 'linux_find', title: '23. find' },
      { id: 'linux_locate', title: '24. locate' },
      { id: 'linux_file', title: '25. file' },
      { id: 'linux_stat', title: '26. stat' },
      { id: 'linux_cat', title: '27. cat' },
      { id: 'linux_less', title: '28. less' },
      { id: 'linux_more', title: '29. more' },
      { id: 'linux_head', title: '30. head' },
      { id: 'linux_tail', title: '31. tail' },
      { id: 'linux_nl', title: '32. nl' },
      { id: 'linux_wc', title: '33. wc' },
      { id: 'linux_grep', title: '34. grep' },
      { id: 'linux_sort', title: '35. sort' },
      { id: 'linux_uniq', title: '36. uniq' },
      { id: 'linux_cut', title: '37. cut' },
      { id: 'linux_paste', title: '38. paste' },
      { id: 'linux_tr', title: '39. tr' },
      { id: 'linux_sed', title: '40. sed (Basics)' },
      { id: 'linux_awk', title: '41. awk (Basics)' },
      { id: 'linux_users', title: '42. Linux Users' },
      { id: 'linux_groups', title: '43. Groups' },
      { id: 'linux_chmod', title: '44. chmod' },
      { id: 'linux_chown', title: '45. chown' },
      { id: 'linux_chgrp', title: '46. chgrp' },
      { id: 'linux_umask', title: '47. umask' },
      { id: 'linux_rwx', title: '48. Understanding rwx Permissions' },
      { id: 'linux_useradd', title: '49. useradd' },
      { id: 'linux_passwd', title: '50. passwd' },
      { id: 'linux_usermod', title: '51. usermod' },
      { id: 'linux_userdel', title: '52. userdel' },
      { id: 'linux_groupadd', title: '53. groupadd' },
      { id: 'linux_groupdel', title: '54. groupdel' },
      { id: 'linux_sudo', title: '55. sudo' },
      { id: 'linux_apt', title: '56. apt' },
      { id: 'linux_apt_get', title: '57. apt-get' },
      { id: 'linux_dpkg', title: '58. dpkg' },
      { id: 'linux_snap', title: '59. snap' },
      { id: 'linux_install_software', title: '60. Installing Software' },
      { id: 'linux_update_packages', title: '61. Updating Packages' },
      { id: 'linux_remove_packages', title: '62. Removing Packages' },
      { id: 'linux_ps', title: '63. ps' },
      { id: 'linux_top', title: '64. top' },
      { id: 'linux_htop', title: '65. htop' },
      { id: 'linux_kill', title: '66. kill' },
      { id: 'linux_killall', title: '67. killall' },
      { id: 'linux_jobs', title: '68. jobs' },
      { id: 'linux_bg', title: '69. bg' },
      { id: 'linux_fg', title: '70. fg' },
      { id: 'linux_nohup', title: '71. nohup' },
      { id: 'linux_df', title: '72. df' },
      { id: 'linux_du', title: '73. du' },
      { id: 'linux_mount', title: '74. mount' },
      { id: 'linux_umount', title: '75. umount' },
      { id: 'linux_lsblk', title: '76. lsblk' },
      { id: 'linux_fdisk', title: '77. fdisk (Introduction)' },
      { id: 'linux_ip', title: '78. ip' },
      { id: 'linux_ifconfig', title: '79. ifconfig' },
      { id: 'linux_ping', title: '80. ping' },
      { id: 'linux_netstat', title: '81. netstat' },
      { id: 'linux_ss', title: '82. ss' },
      { id: 'linux_curl', title: '83. curl' },
      { id: 'linux_wget', title: '84. wget' },
      { id: 'linux_ssh', title: '85. ssh' },
      { id: 'linux_scp', title: '86. scp' },
      { id: 'linux_zip', title: '87. zip' },
      { id: 'linux_unzip', title: '88. unzip' },
      { id: 'linux_tar', title: '89. tar' },
      { id: 'linux_gzip', title: '90. gzip' },
      { id: 'linux_gunzip', title: '91. gunzip' },
      { id: 'linux_env_vars', title: '92. Environment Variables' },
      { id: 'linux_path_var', title: '93. PATH Variable' },
      { id: 'linux_bash_basics', title: '94. Bash Basics' },
      { id: 'linux_aliases', title: '95. Aliases' },
      { id: 'linux_shell_scripts', title: '96. Shell Scripts' },
      { id: 'linux_variables', title: '97. Variables' },
      { id: 'linux_conditionals', title: '98. Conditional Statements' },
      { id: 'linux_loops', title: '99. Loops' },
      { id: 'linux_functions', title: '100. Functions' },
      { id: 'linux_nginx', title: '101. Nginx Basics' },
      { id: 'linux_apache', title: '102. Apache Basics' },
      { id: 'linux_systemctl', title: '103. Systemctl' },
      { id: 'linux_journalctl', title: '104. Journalctl' },
      { id: 'linux_cron_jobs', title: '105. Cron Jobs' },
      { id: 'linux_services', title: '106. Services' },
      { id: 'linux_logs', title: '107. Logs' },
      { id: 'linux_devops_env_vars', title: '108. Environment Variables (DevOps)' },
      { id: 'linux_install_git', title: '109. Git Installation' },
      { id: 'linux_install_java', title: '110. Java Installation' },
      { id: 'linux_install_python', title: '111. Python Installation' },
      { id: 'linux_install_nodejs', title: '112. Node.js Installation' },
      { id: 'linux_install_docker', title: '113. Docker Installation' },
      { id: 'linux_install_vscode', title: '114. VS Code Installation' },
      { id: 'linux_install_maven', title: '115. Maven Installation' },
      { id: 'linux_ec2_ssh', title: '116. Connecting to EC2 using SSH' },
      { id: 'linux_ec2_upload', title: '117. Uploading Files' },
      { id: 'linux_ec2_install', title: '118. Installing Packages' },
      { id: 'linux_ec2_deploy', title: '119. Deploying a Website' },
      { id: 'linux_ec2_commands', title: '120. Common EC2 Commands' },
      { id: 'linux_project_file_org', title: '121. File Organizer Script' },
      { id: 'linux_project_backup', title: '122. Backup Script' },
      { id: 'linux_project_usermgmt', title: '123. User Management Script' },
      { id: 'linux_project_log_analyzer', title: '124. Log Analyzer' },
      { id: 'linux_project_deploy_site', title: '125. Website Deployment' },
      { id: 'linux_project_cron_sched', title: '126. Cron Job Scheduler' },
      { id: 'linux_project_health_mon', title: '127. Server Health Monitor' },
      { id: 'linux_interview_questions', title: '128. Top 50 Linux Interview Questions' },
      { id: 'linux_scenario_questions', title: '129. Scenario-Based Linux Questions' },
      { id: 'linux_frequent_commands', title: '130. Frequently Used Linux Commands' },
      { id: 'linux_cheat_sheet', title: '131. Linux Cheat Sheet' },
      { id: 'linux_command_practice', title: '132. Linux Command Practice' }
    ],
    content: linuxContent
  },

  github: {
    id: 'github',
    name: 'Git & GitHub',
    description: 'Master version control with Git and collaboration with GitHub.',
    chapters: [
      // Module 1: Introduction to GitHub
      { id: 'git_what_is_github', title: '1. What is GitHub?' },
      { id: 'git_why_use', title: '2. Why Use GitHub?' },
      { id: 'git_vs_github', title: '3. Git vs GitHub' },
      { id: 'git_features', title: '4. Features of GitHub' },
      { id: 'git_create_account', title: '5. Creating a GitHub Account' },
      { id: 'git_dashboard_overview', title: '6. GitHub Dashboard Overview' },
      { id: 'git_install', title: '7. Installing Git' },

      // Module 2: Getting Started
      { id: 'git_create_repo', title: '8. Creating Your First Repository' },
      { id: 'git_public_private', title: '9. Public vs Private Repositories' },
      { id: 'git_repo_structure', title: '10. Repository Structure' },
      { id: 'git_readme', title: '11. README.md' },
      { id: 'git_gitignore', title: '12. .gitignore' },
      { id: 'git_license', title: '13. LICENSE File' },
      { id: 'git_repo_settings', title: '14. Repository Settings' },

      // Module 3: Connecting Git with GitHub
      { id: 'git_auth', title: '15. GitHub Authentication' },
      { id: 'git_pat', title: '16. Personal Access Token (PAT)' },
      { id: 'git_ssh_keys', title: '17. SSH Keys' },
      { id: 'git_connect_local', title: '18. Connecting Local Repository' },
      { id: 'git_first_push', title: '19. First Push to GitHub' },
      { id: 'git_cloning', title: '20. Cloning a Repository' },

      // Module 4: Daily GitHub Workflow
      { id: 'git_status', title: '21. git status' },
      { id: 'git_add', title: '22. git add' },
      { id: 'git_commit', title: '23. git commit' },
      { id: 'git_push', title: '24. git push' },
      { id: 'git_pull', title: '25. git pull' },
      { id: 'git_fetch', title: '26. git fetch' },
      { id: 'git_log', title: '27. git log' },
      { id: 'git_diff', title: '28. git diff' },

      // Module 5: Branching
      { id: 'git_what_is_branch', title: '29. What is a Branch?' },
      { id: 'git_create_branch', title: '30. Creating Branches' },
      { id: 'git_switch_branch', title: '31. Switching Branches' },
      { id: 'git_merge_branch', title: '32. Merging Branches' },
      { id: 'git_merge_conflicts', title: '33. Resolving Merge Conflicts' },
      { id: 'git_delete_branch', title: '34. Deleting Branches' },

      // Module 6: Collaboration
      { id: 'git_forking', title: '35. Forking Repositories' },
      { id: 'git_create_pr', title: '36. Creating Pull Requests' },
      { id: 'git_review_pr', title: '37. Reviewing Pull Requests' },
      { id: 'git_merge_pr', title: '38. Merging Pull Requests' },
      { id: 'git_issues', title: '39. Issues' },
      { id: 'git_discussions', title: '40. Discussions' },
      { id: 'git_projects_board', title: '41. Projects Board' },

      // Module 7: Portfolio Building
      { id: 'git_portfolio_profile', title: '42. Creating an Attractive GitHub Profile' },
      { id: 'git_profile_readme', title: '43. GitHub Profile README' },
      { id: 'git_pin_repos', title: '44. Pinning Repositories' },
      { id: 'git_contrib_graph', title: '45. GitHub Contribution Graph' },
      { id: 'git_add_badges', title: '46. Adding Badges' },
      { id: 'git_stats_cards', title: '47. GitHub Stats Cards' },

      // Module 8: GitHub Pages
      { id: 'git_what_is_pages', title: '48. What is GitHub Pages?' },
      { id: 'git_deploy_html', title: '49. Deploying HTML Website' },
      { id: 'git_deploy_react', title: '50. Deploying React Website' },
      { id: 'git_custom_domain', title: '51. Custom Domain' },
      { id: 'git_update_live_site', title: '52. Updating Live Website' },

      // Module 9: GitHub Actions
      { id: 'git_intro_ci_cd', title: '53. Introduction to CI/CD' },
      { id: 'git_actions_overview', title: '54. GitHub Actions Overview' },
      { id: 'git_first_workflow', title: '55. Creating First Workflow' },
      { id: 'git_auto_build', title: '56. Automatic Build' },
      { id: 'git_auto_deploy', title: '57. Automatic Deployment' },

      // Module 10: Open Source
      { id: 'git_what_is_open_source', title: '58. What is Open Source?' },
      { id: 'git_find_projects', title: '59. Finding Beginner-Friendly Projects' },
      { id: 'git_good_first_issue', title: '60. Good First Issue' },
      { id: 'git_fork_workflow', title: '61. Fork Workflow' },
      { id: 'git_first_contribution', title: '62. Making Your First Contribution' },
      { id: 'git_pr_etiquette', title: '63. Pull Request Etiquette' },
      { id: 'git_code_review_process', title: '64. Code Review Process' },

      // Module 11: Advanced GitHub
      { id: 'git_releases', title: '65. Releases' },
      { id: 'git_tags', title: '66. Tags' },
      { id: 'git_packages', title: '67. GitHub Packages' },
      { id: 'git_wikis', title: '68. Wikis' },
      { id: 'git_security_tab', title: '69. Security Tab' },
      { id: 'git_dependabot', title: '70. Dependabot' },
      { id: 'git_code_scanning', title: '71. Code Scanning' },

      // Module 12: Best Practices
      { id: 'git_writing_commits', title: '72. Writing Good Commits' },
      { id: 'git_organize_repos', title: '73. Organizing Repositories' },
      { id: 'git_readme_practices', title: '74. README Best Practices' },
      { id: 'git_documentation', title: '75. Documentation' },
      { id: 'git_versioning', title: '76. Versioning' },
      { id: 'git_backup_strategies', title: '77. Backup Strategies' },

      // Module 13: Real-World Projects
      { id: 'git_project_portfolio', title: '78. Portfolio Repository' },
      { id: 'git_project_html', title: '79. HTML Project' },
      { id: 'git_project_java', title: '80. Java Project' },
      { id: 'git_project_fullstack', title: '81. Full Stack Project' },
      { id: 'git_project_team', title: '82. Team Collaboration Project' },
      { id: 'git_project_opensource', title: '83. Open Source Contribution Project' },

      // Module 14: Interview Preparation
      { id: 'git_interview_questions', title: '84. Top 50 GitHub Interview Questions' },
      { id: 'git_vs_github_questions', title: '85. Git vs GitHub Questions' },
      { id: 'git_scenario_questions', title: '86. Scenario-Based Questions' },
      { id: 'git_common_mistakes', title: '87. Common GitHub Mistakes' },
      { id: 'git_cheat_sheet', title: '88. GitHub Cheat Sheet' },
      { id: 'git_workflow_recap', title: '89. GitHub Workflow Recap' }
    ],
    content: gitContent
  }
};
