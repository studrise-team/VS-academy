import { htmlContent } from './htmlContent';
import { mysqlContent } from './mysqlContent';

export const subjectsData = {
  java: {
    id: 'java',
    name: 'Java',
    chapters: [
      { id: 'intro', title: 'Introduction' },
      { id: 'history', title: 'History' },
      { id: 'variables', title: 'Variables' },
      { id: 'oop', title: 'Object Oriented Programming' },
    ],
    content: {
      'intro': `
# Introduction to Java
Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.

## Why Learn Java?
- **Platform Independent:** Write Once, Run Anywhere (WORA).
- **Object-Oriented:** Allows you to create modular programs and reusable code.
- **Large Community:** Massive support and open-source libraries.

### Basic Syntax Example
Here is a simple Hello World program in Java:

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`
      `
    }
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
  }
};
