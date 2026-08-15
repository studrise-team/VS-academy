const fs = require('fs');
const path = require('path');

const text = `
📖 Module 1: DevOps Fundamentals

1. What is DevOps?
2. Why DevOps?
3. Problems Before DevOps
4. DevOps Culture
5. DevOps Lifecycle
6. Dev vs Ops
7. DevOps Engineer Role
8. DevOps Tools Overview
9. CI vs CD
10. Continuous Integration
11. Continuous Delivery
12. Continuous Deployment
13. DevOps vs Agile
14. DevOps in Real Companies

📖 Module 2: Linux for DevOps

15. Linux Fundamentals
16. Linux File System
17. Linux Users and Groups
18. File Permissions
19. chmod
20. chown
21. Processes
22. Services
23. systemctl
24. journalctl
25. SSH
26. SCP
27. Environment Variables
28. Bash Scripting
29. Cron Jobs
30. Linux Networking Commands
31. Linux Log Management

📖 Module 3: Networking Fundamentals

32. What is Computer Networking?
33. IP Address
34. Public vs Private IP
35. IPv4 vs IPv6
36. MAC Address
37. DNS
38. DHCP
39. HTTP vs HTTPS
40. TCP vs UDP
41. Ports
42. Firewalls
43. NAT
44. Load Balancing
45. Reverse Proxy
46. Proxy vs Reverse Proxy
47. SSH
48. Common Networking Commands

📖 Module 4: Git & GitHub

49. What is Version Control?
50. Git vs GitHub
51. Git Installation
52. git init
53. git status
54. git add
55. git commit
56. git push
57. git pull
58. git clone
59. Branches
60. Merge
61. Merge Conflicts
62. Git Rebase
63. Git Stash
64. Git Tags
65. GitHub Repository
66. Pull Requests
67. Code Review
68. GitHub Actions Introduction

📖 Module 5: Build Tools

69. What is a Build Tool?
70. Maven Introduction
71. Maven Installation
72. Maven Project Structure
73. pom.xml
74. Maven Lifecycle
75. Dependencies
76. Plugins
77. mvn clean
78. mvn compile
79. mvn test
80. mvn package
81. Artifact Management
82. Nexus Repository

📖 Module 6: Software Testing

83. Why Testing?
84. Unit Testing
85. Integration Testing
86. Functional Testing
87. Automated Testing
88. Test Automation in CI/CD
89. Test Reports
90. Code Quality
91. SonarQube Introduction
92. Static Code Analysis
93. Quality Gates

📖 Module 7: Docker Fundamentals

94. What is Docker?
95. Why Docker?
96. Virtual Machines vs Containers
97. Docker Architecture
98. Docker Engine
99. Docker CLI
100. Images
101. Containers
102. Docker Hub
103. docker pull
104. docker run
105. docker ps
106. docker stop
107. docker start
108. docker restart
109. docker rm
110. docker images
111. docker rmi
112. docker logs
113. docker exec
114. Dockerfile
115. Docker Build
116. Docker Push
117. Docker Volumes
118. Docker Networks
119. Docker Environment Variables

📖 Module 8: Docker Compose

120. What is Docker Compose?
121. docker-compose.yml
122. Multiple Containers
123. Environment Variables
124. Volumes
125. Networks
126. Service Dependencies
127. Build vs Image
128. Docker Compose Commands
129. Multi-Container Application
130. Deploying Application with Compose

📖 Module 9: Nginx & Web Servers

131. What is a Web Server?
132. Apache vs Nginx
133. Installing Nginx
134. Nginx Configuration
135. Serving Static Websites
136. Reverse Proxy
137. Load Balancing
138. SSL/TLS
139. HTTPS Configuration
140. Domain Configuration
141. Nginx Logs

📖 Module 10: CI/CD

142. What is CI/CD?
143. CI/CD Pipeline
144. Pipeline Stages
145. Source
146. Build
147. Test
148. Code Quality
149. Package
150. Docker Build
151. Docker Push
152. Deployment
153. Monitoring
154. Jenkins Introduction
155. Jenkins Installation
156. Jenkins Dashboard
157. Jenkins Jobs
158. Jenkins Pipeline
159. Jenkinsfile
160. Webhooks
161. GitHub + Jenkins
162. Automated Deployment

📖 Module 11: GitHub Actions

163. GitHub Actions Introduction
164. Workflow
165. Events
166. Jobs
167. Steps
168. Runners
169. Actions
170. Secrets
171. Environment Variables
172. Build Pipeline
173. Test Pipeline
174. Docker Pipeline
175. Deployment Pipeline

📖 Module 12: AWS Fundamentals

176. What is Cloud Computing?
177. IaaS
178. PaaS
179. SaaS
180. AWS Introduction
181. AWS Global Infrastructure
182. Regions
183. Availability Zones
184. AWS Management Console
185. IAM
186. Users
187. Groups
188. Policies
189. Roles

📖 Module 13: AWS Core Services

190. EC2
191. EC2 Instance Types
192. AMI
193. Security Groups
194. Key Pairs
195. Elastic IP
196. EBS
197. S3
198. S3 Buckets
199. S3 Objects
200. S3 Permissions
201. CloudWatch
202. Route 53
203. Load Balancer
204. Auto Scaling
205. VPC

📖 Module 14: AWS Networking

206. VPC
207. Subnets
208. Public Subnet
209. Private Subnet
210. Route Tables
211. Internet Gateway
212. NAT Gateway
213. Security Groups
214. Network ACL
215. VPC Architecture
216. Multi-Tier Architecture

📖 Module 15: Terraform

217. What is Infrastructure as Code?
218. Why Terraform?
219. Terraform Architecture
220. Installing Terraform
221. Providers
222. Resources
223. Variables
224. Outputs
225. terraform init
226. terraform plan
227. terraform apply
228. terraform destroy
229. State Files
230. Terraform Modules
231. Terraform with AWS
232. Provisioning EC2
233. Provisioning VPC
234. Terraform Best Practices

📖 Module 16: Kubernetes Fundamentals

235. What is Kubernetes?
236. Why Kubernetes?
237. Docker vs Kubernetes
238. Kubernetes Architecture
239. Control Plane
240. Nodes
241. Pods
242. Deployments
243. Services
244. Namespaces
245. ConfigMaps
246. Secrets
247. ReplicaSets
248. Scaling
249. Rolling Updates
250. Rollbacks

📖 Module 17: Kubernetes Practical

251. kubectl
252. Creating a Cluster
253. Creating a Pod
254. Creating a Deployment
255. Exposing a Service
256. ConfigMap
257. Secrets
258. Volumes
259. Persistent Volumes
260. Ingress
261. Health Checks
262. Resource Limits
263. Horizontal Pod Autoscaling
264. Deploying Docker Applications

📖 Module 18: Monitoring & Logging

265. What is Monitoring?
266. What is Logging?
267. Metrics
268. Logs
269. Alerts
270. Application Monitoring
271. Server Monitoring
272. AWS CloudWatch
273. Prometheus
274. Grafana
275. Dashboards
276. Alerting
277. Log Management

📖 Module 19: DevSecOps

278. What is DevSecOps?
279. DevOps vs DevSecOps
280. Security in CI/CD
281. Secrets Management
282. Dependency Scanning
283. Container Security
284. Code Scanning
285. Vulnerability Scanning
286. Security Testing
287. Least Privilege
288. Secure Docker Images

📖 Module 20: Advanced DevOps Concepts

289. Microservices
290. Monolith vs Microservices
291. Service Discovery
292. API Gateway
293. Load Balancing
294. High Availability
295. Scalability
296. Fault Tolerance
297. Disaster Recovery
298. Backup Strategy
299. Blue-Green Deployment
300. Canary Deployment
301. Rolling Deployment
302. Infrastructure Automation

📖 Module 21: Real-World DevOps Projects

303. Deploy HTML Website on Linux
304. Deploy React Application
305. Dockerize React Application
306. Dockerize Java Application
307. Java + MySQL Docker Project
308. CI Pipeline with Jenkins
309. CI/CD with GitHub Actions
310. SonarQube + Jenkins Pipeline
311. Nexus + Jenkins Pipeline
312. AWS EC2 Deployment
313. AWS Load Balanced Application
314. Terraform AWS Infrastructure
315. Kubernetes Application Deployment
316. Monitoring with Prometheus + Grafana

📖 Module 22: DevOps Capstone Project

317. Complete DevOps Project
`;

const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
let currentModule = '';
const topics = [];

for (const line of lines) {
  if (line.startsWith('📖')) {
    currentModule = line;
  } else if (/^\d+\./.test(line)) {
    const match = line.match(/^(\d+)\.\s+(.*)$/);
    if (match) {
      const num = match[1];
      const title = match[2];
      const id = 'devops_' + title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
      topics.push({ id, title: line, num });
    }
  }
}

const chaptersJson = JSON.stringify(topics.map(t => ({ id: t.id, title: t.title })), null, 2);
fs.writeFileSync('devops_chapters.json', chaptersJson);

// Create batches of 25 topics
const BATCH_SIZE = 25;
const batchCount = Math.ceil(topics.length / BATCH_SIZE);
const batchNames = [];

for (let i = 0; i < batchCount; i++) {
  const batchTopics = topics.slice(i * BATCH_SIZE, (i + 1) * BATCH_SIZE);
  const batchName = 'devopsContentBatch' + (i + 1);
  batchNames.push(batchName);
  
  let content = 'export const ' + batchName + ' = {\n';
  for (let idx = 0; idx < batchTopics.length; idx++) {
    const topic = batchTopics[idx];
    const isLinuxModule = topic.num >= 15 && topic.num <= 31;
    const isAwsModule = topic.num >= 158 && topic.num <= 175;
    const isDocker = topic.num >= 70 && topic.num <= 100;
    const osSpecific = isLinuxModule || isAwsModule || isDocker; // Enable OS toggle for these topics
    const cleanTitle = topic.title.split('. ')[1].replace(/'/g, "\\'");
    
    const codeEx = osSpecific 
      ? { ubuntu: '# Ubuntu command for ' + cleanTitle + '\\napt-get install example', amazon_linux: '# AWS Linux command for ' + cleanTitle + '\\nyum install example' } 
      : '# Standard command for ' + cleanTitle + '\\nexample';
      
    const expOut = osSpecific 
      ? { ubuntu: 'Ubuntu output success', amazon_linux: 'AWS Linux output success' } 
      : 'Success output';

    content += `
  "${topic.id}": {
    id: "${topic.id}",
    title: "${topic.title.replace(/'/g, "\\'")}",
    difficulty: "${topic.num > 150 ? 'Advanced' : (topic.num > 50 ? 'Intermediate' : 'Beginner')}",
    readingTime: "10 min",
    osSpecific: ${osSpecific},
    definition: 'Comprehensive overview of ${cleanTitle} from beginner to advanced.',
    whyUseIt: 'In modern infrastructure, ${cleanTitle} is essential for scaling and reliability.',
    keyConcepts: [
      { term: 'Core Concept', desc: 'Detailed explanation of how ${cleanTitle} works under the hood.' },
      { term: 'Advanced Concept', desc: 'Deep dive into production use cases.' }
    ],
    codeExample: ${JSON.stringify(codeEx)},
    expectedOutput: ${JSON.stringify(expOut)},
    explanation: [
      { code: 'command execution', desc: 'This executes the core operation required for ${cleanTitle}' }
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
      task: 'Implement a basic setup for ${cleanTitle} using best practices.',
      expectedOutput: 'A fully functional and secure configuration.',
      solution: '# Implement solution\\napply_config.sh'
    },
    interviewQuestions: [
      { q: 'Can you explain how ${cleanTitle} improves deployment speed?', a: 'By removing manual bottlenecks and introducing automation, it reduces lead time.' },
      { q: 'What is a common challenge with ${cleanTitle}?', a: 'Managing state and ensuring idempotency in automation scripts.' }
    ],
    quiz: [
      { 
        question: 'What is the primary benefit of ${cleanTitle}?', 
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
  }
  content += '};\n';
  fs.writeFileSync('src/data/' + batchName + '.js', content);
}

// Generate devopsContent.js
let devopsContentFile = '';
for (let i = 0; i < batchNames.length; i++) {
  devopsContentFile += 'import { ' + batchNames[i] + "} from './" + batchNames[i] + "';\n";
}
devopsContentFile += '\nexport const devopsContent = {\n';
for (let i = 0; i < batchNames.length; i++) {
  devopsContentFile += '  ...' + batchNames[i] + ',\n';
}
devopsContentFile += '};\n';
fs.writeFileSync('src/data/devopsContent.js', devopsContentFile);
console.log('Done generating files');
