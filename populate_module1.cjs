const fs = require('fs');

const module1Content = {
  "devops_what_is_devops": {
    id: "devops_what_is_devops",
    title: "1. What is DevOps?",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: false,
    definition: "DevOps is a set of practices, cultural philosophies, and tools that integrates software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.",
    whyUseIt: "DevOps eliminates the traditional silos between development and operations. By fostering collaboration and using automation, it allows organizations to deploy features faster, resolve issues quicker, and innovate at scale.",
    keyConcepts: [
      { term: "CI/CD", desc: "Continuous Integration and Continuous Deployment - automating the build, test, and release process." },
      { term: "Infrastructure as Code (IaC)", desc: "Managing and provisioning computing infrastructure through machine-readable definition files." },
      { term: "Microservices", desc: "Building an application as a suite of small services, each running in its own process." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "Amazon and Netflix deploy thousands of times a day using DevOps practices. Instead of massive quarterly updates that require downtime, they push small, automated updates seamlessly.",
    commonMistakes: [
      { error: "Thinking DevOps is just a tool", code: "", suffix: "DevOps is primarily a culture and methodology; tools just support it." }
    ],
    bestPractices: [
      "Prioritize culture and communication over tools.",
      "Automate repetitive tasks like testing and deployment.",
      "Embrace continuous feedback loops."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "What is the primary goal of DevOps?", a: "To shorten the development lifecycle, increase deployment frequency, and create more dependable releases in close alignment with business objectives." },
      { q: "Is DevOps a role or a culture?", a: "Fundamentally, DevOps is a culture of collaboration. While 'DevOps Engineer' is a common job title, true DevOps requires an organizational shift." }
    ],
    quiz: [
      { 
        question: "Which of the following best describes DevOps?", 
        options: ["A specific programming language", "A cultural shift bridging Dev and Ops", "A cloud provider", "A type of database"], 
        answer: "A cultural shift bridging Dev and Ops", 
        explanation: "DevOps is a methodology and culture that unites development and operations, not a specific tool or language." 
      }
    ],
    quickRevision: [
      "DevOps = Development + Operations.",
      "Core pillars: Culture, Automation, Measurement, Sharing (CAMS)."
    ],
    references: ["The Phoenix Project (Book)", "AWS DevOps Documentation"]
  },
  "devops_why_devops": {
    id: "devops_why_devops",
    title: "2. Why DevOps?",
    difficulty: "Beginner",
    readingTime: "8 min",
    osSpecific: false,
    definition: "Organizations adopt DevOps to survive in a highly competitive, fast-paced digital world. It is the answer to the classic struggle between releasing features quickly and maintaining system stability.",
    whyUseIt: "Without DevOps, developers push code and walk away, while operations struggle to keep the servers from crashing. DevOps aligns their goals, making everyone responsible for both speed and stability.",
    keyConcepts: [
      { term: "Time to Market", desc: "The length of time it takes from a product being conceived until it's available for sale. DevOps drastically reduces this." },
      { term: "Mean Time To Recovery (MTTR)", desc: "The average time it takes to recover from a product or system failure. Automation reduces MTTR." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A bank moving from 4 releases a year to 50 releases a week. If a bug is introduced, the automated pipeline detects it, or the rollback process fixes it in minutes rather than hours.",
    commonMistakes: [
      { error: "Implementing tools without changing culture", code: "", suffix: "If Dev and Ops still don't talk, Jenkins won't save you." }
    ],
    bestPractices: [
      "Align KPIs across both Development and Operations teams.",
      "Focus on reducing the feedback loop from production back to developers."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "What business problems does DevOps solve?", a: "Slow release cycles, high failure rates of new releases, slow recovery times, and poor communication between teams." }
    ],
    quiz: [
      { 
        question: "What is MTTR in the context of DevOps?", 
        options: ["Mean Time To Release", "Mean Time To Recovery", "Maximum Time To Run", "Minimum Time To Recovery"], 
        answer: "Mean Time To Recovery", 
        explanation: "MTTR stands for Mean Time To Recovery, which DevOps aims to minimize through monitoring and automation." 
      }
    ],
    quickRevision: [
      "DevOps solves the 'Wall of Confusion' between Dev and Ops.",
      "It balances agility (speed) with reliability (stability)."
    ],
    references: ["Accelerate by Nicole Forsgren"]
  },
  "devops_problems_before_devops": {
    id: "devops_problems_before_devops",
    title: "3. Problems Before DevOps",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: false,
    definition: "Before DevOps, the standard methodology was the Waterfall model combined with isolated operations teams, leading to a phenomenon known as the 'Wall of Confusion'.",
    whyUseIt: "Understanding the pain points of the past helps engineers appreciate why DevOps practices are structured the way they are.",
    keyConcepts: [
      { term: "The Wall of Confusion", desc: "The invisible barrier between Dev (who want to push changes) and Ops (who want system stability)." },
      { term: "Manual Deployments", desc: "Deployments required 20-page runbooks and engineers working overnight on weekends." },
      { term: "It works on my machine", desc: "The classic developer excuse when code fails in production due to environmental differences." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "In 2012, Knight Capital lost $460 million in 45 minutes due to a manual deployment error where new code was deployed to 7 out of 8 servers. DevOps automation prevents this.",
    commonMistakes: [
      { error: "Blaming individuals for system failures", code: "", suffix: "Pre-DevOps cultures often focused on blame rather than fixing the systemic process." }
    ],
    bestPractices: [
      "Implement blameless post-mortems.",
      "Use containers to solve the 'it works on my machine' problem."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "What is the 'Wall of Confusion'?", a: "The conflicting goals of Development (driven by change/features) and Operations (driven by stability/uptime) causing friction and delays." }
    ],
    quiz: [
      { 
        question: "Which of the following was a major problem before DevOps?", 
        options: ["Too much automation", "The 'It works on my machine' syndrome", "Deployments were too fast", "Over-communication between teams"], 
        answer: "The 'It works on my machine' syndrome", 
        explanation: "Because environments were not standardized, code that worked on a developer's laptop often broke on the production server." 
      }
    ],
    quickRevision: [
      "Pre-DevOps: Manual, slow, error-prone, siloed.",
      "Conflicting goals: Dev wants change, Ops wants stability."
    ],
    references: []
  },
  "devops_devops_culture": {
    id: "devops_devops_culture",
    title: "4. DevOps Culture",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: false,
    definition: "DevOps culture is characterized by increased collaboration, decreasing silos, shared responsibility, autonomous teams, improving quality, valuing feedback and increasing automation.",
    whyUseIt: "You cannot buy DevOps in a box. Tools are useless if the culture doesn't support transparency, trust, and continuous improvement.",
    keyConcepts: [
      { term: "Shared Responsibility", desc: "Developers are responsible for their code in production. Ops are involved in the design phase." },
      { term: "Blameless Post-mortems", desc: "When a failure occurs, the focus is on what broke in the process, not who made the mistake." },
      { term: "Continuous Learning", desc: "Allocating time for experimentation and learning from failures." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "At Etsy, if a developer breaks the site, they are not fired. Instead, they are celebrated for helping discover a flaw in the testing and deployment pipeline, which is then fixed.",
    commonMistakes: [
      { error: "Creating a 'DevOps Team' silo", code: "", suffix: "If the DevOps team is just a new silo sitting between Dev and Ops, the culture has failed." }
    ],
    bestPractices: [
      "Promote psychological safety in your teams.",
      "Ensure developers have access to production logs and monitoring."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "What does CAMS stand for?", a: "Culture, Automation, Measurement, and Sharing. It is the core acronym describing DevOps." }
    ],
    quiz: [
      { 
        question: "What is the purpose of a blameless post-mortem?", 
        options: ["To find out who to fire", "To identify process and system flaws without punishing individuals", "To shift blame to the cloud provider", "To write a report for HR"], 
        answer: "To identify process and system flaws without punishing individuals", 
        explanation: "Blameless post-mortems focus on systemic failures and process improvements rather than punishing human error." 
      }
    ],
    quickRevision: [
      "Culture > Tools.",
      "Shared responsibility means Devs wear pagers too."
    ],
    references: []
  },
  "devops_devops_lifecycle": {
    id: "devops_devops_lifecycle",
    title: "5. DevOps Lifecycle",
    difficulty: "Beginner",
    readingTime: "12 min",
    osSpecific: false,
    definition: "The DevOps lifecycle is a continuous loop comprising continuous development, integration, testing, deployment, and monitoring.",
    whyUseIt: "It visualizes the infinity loop of software delivery, ensuring that software is always in a releasable state and feedback continuously informs the next iteration.",
    keyConcepts: [
      { term: "Plan", desc: "Defining requirements and planning the sprint." },
      { term: "Code & Build", desc: "Writing code and compiling it into an artifact." },
      { term: "Test", desc: "Automated unit, integration, and security testing." },
      { term: "Release & Deploy", desc: "Pushing the artifact to production environments." },
      { term: "Operate & Monitor", desc: "Managing the live application and gathering metrics." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A developer pushes code to GitHub (Code). Jenkins automatically compiles it (Build) and runs Selenium tests (Test). If it passes, it is deployed to Kubernetes (Deploy). Datadog tracks its performance (Monitor).",
    commonMistakes: [
      { error: "Skipping the automated testing phase", code: "", suffix: "Without automated testing, CI/CD just deploys bugs faster." }
    ],
    bestPractices: [
      "Every phase must be as automated as possible.",
      "Feedback from the Monitor phase must directly inform the next Plan phase."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "Why is the DevOps lifecycle represented as an infinity loop?", a: "Because software development is never 'finished'. Monitoring live applications feeds directly into planning new features and fixes, creating a continuous loop." }
    ],
    quiz: [
      { 
        question: "Which phase directly follows 'Deploy' in the DevOps lifecycle?", 
        options: ["Plan", "Code", "Build", "Operate & Monitor"], 
        answer: "Operate & Monitor", 
        explanation: "Once code is deployed, it must be operated and monitored to ensure it functions correctly and to gather feedback." 
      }
    ],
    quickRevision: [
      "Plan -> Code -> Build -> Test -> Release -> Deploy -> Operate -> Monitor."
    ],
    references: []
  },
  "devops_dev_vs_ops": {
    id: "devops_dev_vs_ops",
    title: "6. Dev vs Ops",
    difficulty: "Beginner",
    readingTime: "8 min",
    osSpecific: false,
    definition: "Dev (Development) is responsible for creating software. Ops (Operations) is responsible for running and maintaining it. Historically, they had diametrically opposed incentives.",
    whyUseIt: "Understanding the traditional differences highlights exactly what DevOps is trying to fix.",
    keyConcepts: [
      { term: "Development (Dev)", desc: "Includes programmers, QA, and product managers. Goal: Push new features quickly." },
      { term: "Operations (Ops)", desc: "Includes sysadmins, DBAs, and network engineers. Goal: Maintain 99.99% uptime and prevent breaking changes." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "In a traditional company, Dev gets a bonus for releasing 10 features a month. Ops gets a bonus if the server never crashes. Because features cause crashes, Ops inherently wants to block Dev.",
    commonMistakes: [
      { error: "Measuring Dev and Ops with different metrics", code: "", suffix: "Both should be measured by successful delivery to the end user." }
    ],
    bestPractices: [
      "Cross-train teams (Ops learn to code, Devs learn infrastructure).",
      "Unify the toolchain so both teams speak the same language (e.g., Git)."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "How do you align Dev and Ops?", a: "By using shared metrics, giving developers responsibility for production support, and treating infrastructure as code." }
    ],
    quiz: [
      { 
        question: "Traditionally, what was the primary goal of the Operations team?", 
        options: ["Writing code", "System stability and uptime", "Designing UI", "Agile planning"], 
        answer: "System stability and uptime", 
        explanation: "Operations teams were historically evaluated on uptime, which made them resistant to change." 
      }
    ],
    quickRevision: [
      "Dev = Change/Agility.",
      "Ops = Stability/Reliability."
    ],
    references: []
  },
  "devops_devops_engineer_role": {
    id: "devops_devops_engineer_role",
    title: "7. DevOps Engineer Role",
    difficulty: "Beginner",
    readingTime: "10 min",
    osSpecific: false,
    definition: "A DevOps Engineer is an IT professional who understands both software engineering and infrastructure operations. They build and maintain the CI/CD pipelines, automate infrastructure, and ensure system reliability.",
    whyUseIt: "It clarifies the career path and responsibilities for someone entering the field.",
    keyConcepts: [
      { term: "Pipeline Builder", desc: "Creating the automation that takes code from Git to Production." },
      { term: "Cloud Administrator", desc: "Managing AWS/Azure/GCP resources." },
      { term: "SRE (Site Reliability Engineer)", desc: "A specific implementation of DevOps focused on reliability and software engineering approaches to operations." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A typical day might involve writing a Terraform script to spin up a database, fixing a broken Jenkins build pipeline, and configuring Datadog alerts for CPU usage.",
    commonMistakes: [
      { error: "Thinking a DevOps engineer is just a sysadmin who knows bash", code: "", suffix: "Modern DevOps requires software engineering practices (Git, testing, coding)." }
    ],
    bestPractices: [
      "Automate yourself out of a job.",
      "Document architectures and pipelines thoroughly."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "What is the difference between DevOps and SRE?", a: "DevOps is a philosophy and culture. SRE (Site Reliability Engineering) is a specific prescriptive way of implementing DevOps, pioneered by Google." }
    ],
    quiz: [
      { 
        question: "Which of the following is a primary responsibility of a DevOps Engineer?", 
        options: ["Writing the core business application code", "Designing the company logo", "Building CI/CD pipelines and automating infrastructure", "Answering customer support calls"], 
        answer: "Building CI/CD pipelines and automating infrastructure", 
        explanation: "DevOps engineers focus on the tooling and infrastructure that allow developers to ship code securely and quickly." 
      }
    ],
    quickRevision: [
      "DevOps engineers are the bridge between code and production.",
      "Key skills: Linux, Scripting (Python/Bash), CI/CD, Cloud, Containers."
    ],
    references: []
  },
  "devops_devops_tools_overview": {
    id: "devops_devops_tools_overview",
    title: "8. DevOps Tools Overview",
    difficulty: "Beginner",
    readingTime: "12 min",
    osSpecific: false,
    definition: "The DevOps toolchain consists of multiple tools that facilitate the different stages of the DevOps lifecycle, from planning to monitoring.",
    whyUseIt: "To navigate the massive ecosystem of DevOps, you need to understand which tool fits into which phase of the lifecycle.",
    keyConcepts: [
      { term: "Source Code Management (SCM)", desc: "Git, GitHub, GitLab, Bitbucket." },
      { term: "CI/CD & Automation", desc: "Jenkins, GitLab CI, GitHub Actions, CircleCI." },
      { term: "Configuration Management", desc: "Ansible, Chef, Puppet." },
      { term: "Containerization & Orchestration", desc: "Docker, Kubernetes." },
      { term: "Infrastructure as Code (IaC)", desc: "Terraform, AWS CloudFormation." },
      { term: "Monitoring", desc: "Prometheus, Grafana, Datadog, ELK Stack." }
    ],
    codeExample: null,
    expectedOutput: null,
    explanation: [],
    realWorldExample: "A standard modern stack: Code in GitHub, Pipeline in GitHub Actions, Images built with Docker, Infrastructure managed by Terraform, running on AWS Kubernetes (EKS), monitored by Datadog.",
    commonMistakes: [
      { error: "Learning every tool simultaneously", code: "", suffix: "Focus on learning ONE tool per category (e.g., learn Terraform, don't try to learn Terraform AND CloudFormation at the same time)." }
    ],
    bestPractices: [
      "Choose tools based on community support and team familiarity.",
      "Avoid vendor lock-in where practical, but don't over-engineer."
    ],
    practiceExercise: null,
    interviewQuestions: [
      { q: "What is the difference between Terraform and Ansible?", a: "Terraform is an orchestration tool designed to provision infrastructure (servers, networks). Ansible is a configuration management tool designed to configure the software on those servers." }
    ],
    quiz: [
      { 
        question: "Which category does Docker fall into?", 
        options: ["Source Code Management", "Containerization", "Monitoring", "Configuration Management"], 
        answer: "Containerization", 
        explanation: "Docker is the industry standard for packaging applications into containers." 
      }
    ],
    quickRevision: [
      "SCM: Git",
      "CI/CD: Jenkins/GitHub Actions",
      "IaC: Terraform",
      "Containers: Docker/Kubernetes"
    ],
    references: []
  }
};

// Next 6 topics (9-14) to complete Module 1, plus fallback for Module 2 (15-25)
const allBatch1Ids = [
  "devops_what_is_devops", "devops_why_devops", "devops_problems_before_devops", "devops_devops_culture", "devops_devops_lifecycle",
  "devops_dev_vs_ops", "devops_devops_engineer_role", "devops_devops_tools_overview", "devops_ci_vs_cd", "devops_continuous_integration",
  "devops_continuous_delivery", "devops_continuous_deployment", "devops_devops_vs_agile", "devops_devops_in_real_companies",
  "devops_linux_fundamentals", "devops_linux_file_system", "devops_linux_users_and_groups", "devops_file_permissions", "devops_chmod",
  "devops_chown", "devops_processes", "devops_services", "devops_systemctl", "devops_journalctl", "devops_ssh"
];

let output = 'export const devopsContentBatch1 = {\\n';

allBatch1Ids.forEach((id, idx) => {
  const custom = module1Content[id];
  const title = custom ? custom.title : `${idx + 1}. ${id.split('_').slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`;
  const osSpecific = custom ? custom.osSpecific : (idx >= 14); 
  
  if (custom) {
    output += `
  "${id}": ${JSON.stringify(custom, null, 4)},\n`;
  } else {
    // Fallback template for topics 9-25
    const codeEx = osSpecific 
      ? { ubuntu: '# Ubuntu command for ' + title + '\\napt-get install example', amazon_linux: '# AWS Linux command for ' + title + '\\nyum install example' } 
      : '# Standard command\\nexample';
      
    const expOut = osSpecific ? { ubuntu: 'Ubuntu output success', amazon_linux: 'AWS Linux output success' } : 'Success output';

    output += `
  "${id}": {
    id: "${id}",
    title: "${title}",
    difficulty: "${idx > 10 ? 'Intermediate' : 'Beginner'}",
    readingTime: "10 min",
    osSpecific: ${osSpecific},
    definition: 'Comprehensive overview of ${title} from beginner to advanced.',
    whyUseIt: 'In modern infrastructure, ${title} is essential for scaling and reliability.',
    keyConcepts: [{term: 'Core Concept', desc: 'Detailed explanation'}],
    codeExample: ${JSON.stringify(codeEx)},
    expectedOutput: ${JSON.stringify(expOut)},
    explanation: [
      { code: 'command execution', desc: 'This executes the core operation required for ${title}' }
    ],
    realWorldExample: 'In a production environment, DevOps engineers use this to maintain 99.9% uptime and automate repetitive tasks.',
    commonMistakes: [
      { error: 'Running commands as root unnecessarily', code: 'sudo su -', suffix: 'Use sudo for specific commands instead.' }
    ],
    bestPractices: [
      'Automate everything possible to reduce human error.',
      'Maintain Infrastructure as Code (IaC) in version control.'
    ],
    practiceExercise: {
      task: 'Implement a basic setup for ${title} using best practices.',
      expectedOutput: 'A fully functional and secure configuration.',
      solution: '# Implement solution\\napply_config.sh'
    },
    interviewQuestions: [
      { q: 'Can you explain how ${title} improves deployment speed?', a: 'By removing manual bottlenecks and introducing automation, it reduces lead time.' }
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
      'Remember to always test in a staging environment.'
    ],
    references: ['Official Documentation']
  },\n`;
  }
});

output += '};\\n';
fs.writeFileSync('src/data/devopsContentBatch1.js', output);
console.log('devopsContentBatch1.js regenerated with real content for first 8 topics.');
