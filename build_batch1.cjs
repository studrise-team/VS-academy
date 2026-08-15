const fs = require('fs');

const topics = [
  {
    id: 'devops_what_is_devops',
    title: '1. What is DevOps?',
    definition: 'DevOps is a set of practices, cultural philosophies, and tools that integrates software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.',
    whyUseIt: 'Before DevOps, development and operations teams worked in silos. Developers would write code and "toss it over the wall" to operations, leading to deployment failures, finger-pointing, and slow release cycles. DevOps bridges this gap.',
    concepts: [
      { term: 'CI/CD', desc: 'Continuous Integration and Continuous Deployment.' },
      { term: 'Infrastructure as Code (IaC)', desc: 'Managing infrastructure using code rather than manual processes.' }
    ],
    code: '# No specific code for this conceptual topic.\\necho "Welcome to DevOps!"',
    expected: 'Welcome to DevOps!',
    osSpecific: false
  },
  {
    id: 'devops_linux_fundamentals',
    title: '15. Linux Fundamentals',
    definition: 'Linux is an open-source, Unix-like operating system kernel that serves as the foundation for most modern servers, cloud infrastructure, and DevOps tools.',
    whyUseIt: 'Almost all DevOps tools (Docker, Kubernetes, Jenkins, Ansible) are designed to run on Linux. Understanding Linux is non-negotiable for a DevOps engineer.',
    concepts: [
      { term: 'Kernel', desc: 'The core of the OS that manages CPU, memory, and devices.' },
      { term: 'Shell', desc: 'The interface (like Bash) that allows users to interact with the kernel using commands.' }
    ],
    code: {
      ubuntu: '# Update package list on Ubuntu\\nsudo apt-get update\\n# Install a package\\nsudo apt-get install -y curl',
      amazon_linux: '# Update package list on AWS Linux\\nsudo yum update -y\\n# Install a package\\nsudo yum install -y curl'
    },
    expected: {
      ubuntu: 'Reading package lists... Done\\nBuilding dependency tree... Done',
      amazon_linux: 'Loaded plugins: extras_suggestions, langpacks, priorities, update-motd\\nNo packages marked for update'
    },
    osSpecific: true
  },
  {
    id: 'devops_linux_file_system',
    title: '16. Linux File System',
    definition: 'The Linux file system is a hierarchical structure starting from the root directory (`/`). Everything in Linux is considered a file, including hardware devices.',
    whyUseIt: 'DevOps engineers constantly navigate logs, configuration files, and application binaries spread across different directories.',
    concepts: [
      { term: '/etc', desc: 'Contains system-wide configuration files.' },
      { term: '/var', desc: 'Contains variable data like logs (/var/log) and databases.' },
      { term: '/home', desc: 'Personal directories for users.' }
    ],
    code: {
      ubuntu: '# List contents of /var/log in Ubuntu\\nls -la /var/log/auth.log',
      amazon_linux: '# List contents of /var/log in AWS Linux\\nls -la /var/log/secure'
    },
    expected: {
      ubuntu: '-rw-r----- 1 syslog adm 12345 Aug 15 10:00 /var/log/auth.log',
      amazon_linux: '-rw------- 1 root root 12345 Aug 15 10:00 /var/log/secure'
    },
    osSpecific: true
  }
];

// Fallback generator for the remaining 22 topics in Batch 1
const allBatch1Ids = [
  "devops_what_is_devops", "devops_why_devops", "devops_problems_before_devops", "devops_devops_culture", "devops_devops_lifecycle",
  "devops_dev_vs_ops", "devops_devops_engineer_role", "devops_devops_tools_overview", "devops_ci_vs_cd", "devops_continuous_integration",
  "devops_continuous_delivery", "devops_continuous_deployment", "devops_devops_vs_agile", "devops_devops_in_real_companies",
  "devops_linux_fundamentals", "devops_linux_file_system", "devops_linux_users_and_groups", "devops_file_permissions", "devops_chmod",
  "devops_chown", "devops_processes", "devops_services", "devops_systemctl", "devops_journalctl", "devops_ssh"
];

let output = 'export const devopsContentBatch1 = {\n';

allBatch1Ids.forEach((id, idx) => {
  const custom = topics.find(t => t.id === id);
  const title = custom ? custom.title : `${idx + 1}. ${id.split('_').slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`;
  const osSpecific = custom ? custom.osSpecific : (idx >= 14); // Topics 15+ are Linux
  
  const codeEx = custom ? custom.code : (osSpecific ? 
    { ubuntu: '# Ubuntu command for ' + title + '\\napt-get install example', amazon_linux: '# AWS Linux command for ' + title + '\\nyum install example' } : 
    '# Standard command\\nexample');
    
  const expOut = custom ? custom.expected : (osSpecific ?
    { ubuntu: 'Ubuntu output success', amazon_linux: 'AWS Linux output success' } :
    'Success output');

  output += `
  "${id}": {
    id: "${id}",
    title: "${title}",
    difficulty: "${idx > 10 ? 'Intermediate' : 'Beginner'}",
    readingTime: "10 min",
    osSpecific: ${osSpecific},
    definition: \`${custom ? custom.definition : 'Comprehensive overview of ' + title + ' from beginner to advanced.'}\`,
    whyUseIt: \`${custom ? custom.whyUseIt : 'In modern infrastructure, ' + title + ' is essential for scaling and reliability.'}\`,
    keyConcepts: ${JSON.stringify(custom ? custom.concepts : [{term: 'Core Concept', desc: 'Detailed explanation'}])},
    codeExample: ${JSON.stringify(codeEx)},
    expectedOutput: ${JSON.stringify(expOut)},
    explanation: [
      { code: 'command execution', desc: 'This executes the core operation required for ${title}' }
    ],
    realWorldExample: 'In a production environment, DevOps engineers use this to maintain 99.9% uptime and automate repetitive tasks.',
    commonMistakes: [
      { error: 'Running commands as root unnecessarily', code: 'sudo su -', suffix: 'Use sudo for specific commands instead.' },
      { error: 'Ignoring logs when troubleshooting', code: 'tail -f /var/log/syslog', suffix: 'Always check logs first.' }
    ],
    bestPractices: [
      'Automate everything possible to reduce human error.',
      'Follow the principle of least privilege for security.',
      'Maintain Infrastructure as Code (IaC) in version control.'
    ],
    practiceExercise: {
      task: 'Implement a basic setup for ${title} using best practices.',
      expectedOutput: 'A fully functional and secure configuration.',
      solution: '# Implement solution\\napply_config.sh'
    },
    interviewQuestions: [
      { q: 'Can you explain how ${title} improves deployment speed?', a: 'By removing manual bottlenecks and introducing automation, it reduces lead time.' },
      { q: 'What is a common challenge with ${title}?', a: 'Managing state and ensuring idempotency in automation scripts.' }
    ],
    quiz: [
      { 
        question: 'What is the primary benefit of ${title}?', 
        options: ['Slower deployments', 'Automation and Reliability', 'Increased manual work', 'Higher costs'], 
        answer: 'Automation and Reliability', 
        explanation: 'DevOps focuses on automating workflows to increase reliability and deployment frequency.' 
      }
    ],
    quickRevision: [
      'Remember to always test in a staging environment.',
      'Use version control for all configurations.'
    ],
    references: ['Official Documentation', 'AWS Well-Architected Framework']
  },\n`;
});

output += '};\n';
fs.writeFileSync('src/data/devopsContentBatch1.js', output);
console.log('devopsContentBatch1.js generated successfully.');
