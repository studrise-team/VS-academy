import { htmlContent } from './htmlContent';

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
  }
};
