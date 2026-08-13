export const projectsData = [
  // 1. AI & Machine Learning
  {
    id: 1,
    title: "AI-Powered Resume Reviewer",
    category: "AI & Machine Learning",
    description: "Develop a web application that provides AI-driven feedback on resumes, including formatting, keyword optimization, and content suggestions.",
    problem: "Job seekers struggle to tailor their resumes to ATS (Applicant Tracking Systems) and often get rejected automatically before a human reads them.",
    solution: "An AI system that parses PDF resumes, compares them against industry-standard ATS rules, and uses GPT models to suggest keyword optimizations and structural improvements.",
    existingSolutions: "Novoresume, ResumeWorded, TopResume.",
    techStack: ["React", "FastAPI", "OpenAI API", "TailwindCSS"],
    features: ["Resume scoring", "PDF export", "LinkedIn optimization suggestions"],
    videoId: "bMknfKXIFA8", // Placeholder typical AI project video
  },
  {
    id: 2,
    title: "AI Interview Coach",
    category: "AI & Machine Learning",
    description: "Create an AI-powered tool that simulates interviews, asks questions, and provides feedback based on the user's resume.",
    problem: "Students and job seekers lack access to realistic mock interview environments and constructive, immediate feedback on their answers and tone.",
    solution: "A web platform that uses Speech-to-Text to listen to user answers, and GPT to grade responses based on the STAR method, offering actionable improvements.",
    existingSolutions: "Pramp, Google Interview Warmup.",
    techStack: ["React", "FastAPI", "Whisper", "GPT-4"],
    features: ["Progress tracking", "Mock scoring", "Voice emotion analysis"],
    videoId: "w7ejDZ8SWv8", 
  },
  {
    id: 3,
    title: "Traffic Sign Recognition System",
    category: "AI & Machine Learning",
    description: "Implement a computer vision and deep learning-based system to accurately detect and classify road signs for self-driving cars.",
    problem: "Autonomous vehicles need highly accurate, real-time recognition of traffic signs under varying lighting and weather conditions to ensure safety.",
    solution: "A Convolutional Neural Network (CNN) trained on datasets like GTSRB to classify video frames in real-time, integrating OpenCV for image preprocessing.",
    existingSolutions: "Tesla Autopilot Vision, Mobileye.",
    techStack: ["Python", "OpenCV", "TensorFlow/Keras", "CNNs"],
    features: ["Real-time detection", "Integration with simulated driving environment"],
    videoId: "i_LwzRVP7bg",
  },
  
  // 2. Internet of Things (IoT)
  {
    id: 4,
    title: "Smart Home Automation System",
    category: "Internet of Things (IoT)",
    description: "Develop an IoT-based system for controlling household appliances, lighting, and temperature remotely.",
    problem: "Homeowners waste energy and lack centralized control over older, non-smart appliances when they are away from home.",
    solution: "An ESP32/Raspberry Pi based central hub that connects via MQTT to a mobile app, allowing users to toggle relays and monitor energy consumption.",
    existingSolutions: "Google Home, Amazon Alexa, Home Assistant.",
    techStack: ["MQTT", "Arduino/Raspberry Pi", "Python", "Flutter"],
    features: ["Energy consumption monitoring", "Occupancy detection", "Voice control"],
    videoId: "aircAruvnKk",
  },
  {
    id: 5,
    title: "IoT-Based Air Quality Monitoring",
    category: "Internet of Things (IoT)",
    description: "Develop a system to monitor air quality parameters (PM2.5, CO2, VOCs) in real-time using IoT sensors.",
    problem: "Urban populations suffer from poor indoor and outdoor air quality, often without real-time data to take preventative action.",
    solution: "A network of MQ-series gas sensors connected to ESP32 nodes that push live data to Firebase, visualized on a React dashboard with predictive alerts.",
    existingSolutions: "AirVisual, Plume Labs, Dyson Purifier Apps.",
    techStack: ["Air quality sensors", "ESP32", "Firebase", "React"],
    features: ["Predictive analytics", "Mobile alerts", "Smart city integration"],
    videoId: "rfscVS0vtbw",
  },

  // 3. Web Development
  {
    id: 6,
    title: "Real Estate Listing Platform",
    category: "Web Development",
    description: "Develop a full-stack web application for property listings, allowing realtors to post properties and users to filter and explore.",
    problem: "Finding a home online often involves cluttered interfaces, lack of verified listings, and poor communication channels between buyers and sellers.",
    solution: "A clean, modern Next.js application with PostgreSQL for robust data storage, featuring advanced map-based filtering, secure authentication, and a dedicated admin dashboard.",
    existingSolutions: "Zillow, MagicBricks, Housing.com.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
    features: ["User messaging", "Property recommendations", "Analytics dashboard"],
    videoId: "_uQrJ0TkZlc",
  },
  {
    id: 7,
    title: "E-learning Platform with Gamification",
    category: "Web Development",
    description: "Create a Udemy-style website where students can enroll in courses, track progress, and complete quizzes with gamified elements.",
    problem: "Online learners suffer from low completion rates due to a lack of engagement and interactive motivation in traditional video-only platforms.",
    solution: "A MERN stack application that tracks video watch time, awards experience points (XP) for quiz completion, and features a global leaderboard to foster healthy competition.",
    existingSolutions: "Udemy, Coursera, Duolingo.",
    techStack: ["MERN stack", "React", "Node.js", "Firebase"],
    features: ["Real-time quizzes", "Leaderboards", "AI tutor integration"],
    videoId: "zJ-LqeX_fLU",
  },

  // 4. Cybersecurity & Blockchain
  {
    id: 8,
    title: "Secure Online Voting System",
    category: "Cybersecurity & Blockchain",
    description: "Develop a decentralized voting system that ensures transparency, immutability, and security of votes using blockchain.",
    problem: "Traditional electronic and paper voting systems are vulnerable to tampering, miscounting, and lack of transparent audit trails.",
    solution: "A Web3 application utilizing Ethereum Smart Contracts (Solidity) to cast votes as immutable transactions, verifiable by anyone on the public ledger.",
    existingSolutions: "Voatz, Follow My Vote.",
    techStack: ["Solidity", "Ethereum", "Web3.js", "React"],
    features: ["Voter identity verification", "Audit trails", "Tamper resistance"],
    videoId: "pWbOOmU13X8",
  },
  {
    id: 9,
    title: "AI-based Phishing Detection",
    category: "Cybersecurity & Blockchain",
    description: "Create an AI-powered system to detect and warn users about phishing URLs and emails using NLP.",
    problem: "Cyber criminals continuously generate new, undetected phishing domains that bypass traditional blacklist-based security filters.",
    solution: "A browser extension that uses a Machine Learning model (Random Forest/SVM) to analyze URL lexical features and page DOM in real-time before the page loads.",
    existingSolutions: "Google Safe Browsing, McAfee WebAdvisor.",
    techStack: ["Python", "Scikit-learn", "NLP", "Web scraping"],
    features: ["Browser extension", "Real-time URL analysis", "User reporting"],
    videoId: "F9UcSunNn-E",
  },

  // 5. Embedded Systems & Robotics
  {
    id: 10,
    title: "Smart Wheelchair for Disabled",
    category: "Embedded Systems",
    description: "Develop a voice or gesture-controlled smart wheelchair with safety monitoring systems.",
    problem: "Individuals with severe motor disabilities often cannot operate traditional joystick-controlled electric wheelchairs.",
    solution: "An Arduino-based control system that interfaces with Flex sensors or a Voice Recognition module to translate intuitive human actions into motor commands.",
    existingSolutions: "Scewo, Invacare specialized controls.",
    techStack: ["Arduino/Raspberry Pi", "Voice module", "Motor drivers"],
    features: ["Obstacle avoidance", "GPS navigation", "Remote monitoring"],
    videoId: "fqvtLxiX9R0",
  },
  
  // 6. Data Science & Analytics
  {
    id: 11,
    title: "Stock Market Dashboard with AI",
    category: "Data Science & Analytics",
    description: "Create a platform that pulls real-time stock data, visualizes it, and offers AI-powered trend predictions.",
    problem: "Retail investors are overwhelmed by raw financial data and lack access to institutional-grade predictive analytics.",
    solution: "A Streamlit dashboard that ingests yFinance data, applies Facebook Prophet for time-series forecasting, and runs sentiment analysis on recent financial news.",
    existingSolutions: "TradingView, Bloomberg Terminal, Yahoo Finance.",
    techStack: ["Python", "Streamlit", "yFinance", "Prophet"],
    features: ["Sentiment analysis", "Portfolio optimization", "Backtesting"],
    videoId: "3c-iZaI71cI",
  },

  // 7. Cloud Computing & DevOps
  {
    id: 12,
    title: "Serverless E-commerce Backend",
    category: "Cloud & DevOps",
    description: "Develop a backend for an e-commerce app using serverless functions and a NoSQL database.",
    problem: "Traditional monolithic backends struggle to scale during sudden traffic spikes (like Black Friday) and incur high costs when idle.",
    solution: "An AWS Lambda / Google Cloud Functions architecture that scales to zero, using DynamoDB for lightning-fast, highly concurrent inventory reads/writes.",
    existingSolutions: "Shopify (managed), AWS Serverless Application Model.",
    techStack: ["AWS Lambda", "DynamoDB", "API Gateway", "Node.js"],
    features: ["Firebase Auth", "Payment gateway", "Real-time inventory"],
    videoId: "M576WGiDBdQ",
  },

  // 8. Biomedical & Healthcare
  {
    id: 13,
    title: "AI Medical Image Analysis",
    category: "Biomedical & Healthcare",
    description: "Develop a deep learning model to analyze medical images for early detection of diseases like pneumonia or tumors.",
    problem: "Radiologists are overwhelmed with high volumes of scans, leading to fatigue and potential diagnostic errors or delays.",
    solution: "A PyTorch-based CNN that acts as a second opinion tool, highlighting anomalous regions in X-rays or MRIs with high precision and recall.",
    existingSolutions: "Zebra Medical Vision, Aidoc.",
    techStack: ["Python", "PyTorch", "OpenCV", "DICOM libraries"],
    features: ["3D image reconstruction", "Explainable AI (Grad-CAM)", "PACS integration"],
    videoId: "yubzJw0uiE4",
  },

  // 9. Renewable Energy & Smart Systems
  {
    id: 14,
    title: "Smart Grid Load Balancing",
    category: "Renewable Energy",
    description: "Develop an AI-powered system to optimize power distribution in a smart grid, predicting energy demand.",
    problem: "Renewable energy sources (solar/wind) are intermittent, causing grid instability when supply doesn't match peak demand.",
    solution: "A time-series forecasting algorithm that predicts peak loads and automatically routes stored battery energy to mitigate grid stress and prevent blackouts.",
    existingSolutions: "Tesla Autobidder, GE Grid Solutions.",
    techStack: ["Python", "TensorFlow", "SCADA integration", "Time series"],
    features: ["Renewable integration", "Fault detection", "Demand-side management"],
    videoId: "Kmw_B4Z6VbM",
  },

  // 10. Mobile Application Development
  {
    id: 15,
    title: "Augmented Reality (AR) Interior Design",
    category: "Mobile App Development",
    description: "Create a mobile app that allows users to visualize furniture in their own homes using AR technology.",
    problem: "Consumers struggle to visualize how a piece of furniture will fit and look in their specific room before purchasing, leading to high return rates.",
    solution: "A React Native app leveraging ARCore/ARKit to project true-to-scale 3D models of furniture into the camera viewport, anchoring them to real-world floor planes.",
    existingSolutions: "IKEA Place, Houzz AR.",
    techStack: ["ARCore/ARKit", "Unity", "Flutter/React Native"],
    features: ["Measurement tools", "Social sharing", "E-commerce integration"],
    videoId: "U_P23SqJaDc",
  },
  // --- ADDITIONAL PROJECTS ---
  // 5. Embedded Systems & Robotics
  {
    id: 16,
    title: "Drone-Based Object Detection",
    category: "Embedded Systems",
    description: "Build a drone equipped with a camera and an embedded system for real-time object detection and tracking.",
    problem: "Traditional surveillance and search-and-rescue operations are slow and require putting human operators in dangerous environments.",
    solution: "A Raspberry Pi-powered drone that uses a TensorFlow Lite model to scan the ground below, identifying missing persons or tracking wildlife autonomously.",
    existingSolutions: "DJI Enterprise, Skydio.",
    techStack: ["Raspberry Pi", "TensorFlow Lite", "OpenCV", "Python"],
    features: ["Autonomous navigation", "Object classification", "Payload delivery"],
    videoId: "WbV3zRgpw_E"
  },
  {
    id: 17,
    title: "Gesture-Controlled Robotic Arm",
    category: "Embedded Systems",
    description: "Develop a robotic arm that can be controlled using hand gestures, captured by sensors.",
    problem: "Industrial robotic arms often require complex programming, making them inaccessible for quick, intuitive tasks or teleoperation.",
    solution: "A wearable glove with flex sensors and accelerometers that maps human hand movements directly to servo motors on the robotic arm via Bluetooth.",
    existingSolutions: "Festo, Universal Robots.",
    techStack: ["Arduino", "Flex sensors", "Servo motors", "C++"],
    features: ["Haptic feedback", "Pre-programmed movements", "Object grasping"],
    videoId: "KdgQvgE3ji4"
  },

  // 6. Data Science & Analytics
  {
    id: 18,
    title: "Fraud Detection System",
    category: "Data Science & Analytics",
    description: "Build a machine learning model to identify and prevent fraudulent online transactions.",
    problem: "E-commerce platforms lose billions annually to credit card fraud, requiring dynamic detection that adapts to new threat patterns.",
    solution: "An XGBoost or Random Forest model trained on historical transaction datasets with heavy feature engineering to flag anomalies in real-time.",
    existingSolutions: "Stripe Radar, Sift.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Flask"],
    features: ["Real-time fraud scoring", "Rule-based integration", "Explainable AI"],
    videoId: "7eh4d6sabA0"
  },
  {
    id: 19,
    title: "Student Performance Predictor",
    category: "Data Science & Analytics",
    description: "Develop a model to predict student academic performance based on various factors like attendance and past grades.",
    problem: "Educators struggle to identify at-risk students early enough in the semester to provide meaningful interventions.",
    solution: "A predictive dashboard that analyzes historical demographic and behavioral data to forecast final grades and recommend customized study plans.",
    existingSolutions: "Canvas Analytics, Blackboard Predict.",
    techStack: ["Python", "Jupyter", "Streamlit", "Pandas"],
    features: ["Intervention recommendations", "Real-time feedback", "Data visualization"],
    videoId: "3hLmDS179YE"
  },

  // 7. Cloud Computing & DevOps
  {
    id: 20,
    title: "Containerized Microservices Architecture",
    category: "Cloud & DevOps",
    description: "Design and implement an application using a microservices architecture, orchestrated with Kubernetes.",
    problem: "Monolithic applications become difficult to scale and deploy as teams grow and features become complex.",
    solution: "A decoupled architecture where services (Auth, Payment, Inventory) are containerized in Docker and managed by Kubernetes for auto-healing and scaling.",
    existingSolutions: "Netflix/Uber engineering architectures.",
    techStack: ["Docker", "Kubernetes", "Node.js", "PostgreSQL"],
    features: ["Service mesh (Istio)", "Centralized logging", "Prometheus monitoring"],
    videoId: "VwVg9jCtqaU"
  },
  {
    id: 21,
    title: "Cloud Infrastructure via Terraform",
    category: "Cloud & DevOps",
    description: "Use Terraform to define and provision cloud infrastructure (EC2 instances, VPCs, databases) as code.",
    problem: "Manual cloud resource provisioning through the AWS console is error-prone, non-repeatable, and hard to audit.",
    solution: "An Infrastructure as Code (IaC) repository that automatically spins up a highly available, load-balanced web architecture with a single command.",
    existingSolutions: "AWS CloudFormation, Pulumi.",
    techStack: ["Terraform", "AWS", "Git", "Bash"],
    features: ["Multi-cloud deployment", "CI/CD integration", "Cost optimization"],
    videoId: "8hly31xKli0"
  },

  // 8. Biomedical & Healthcare
  {
    id: 22,
    title: "Wearable Health Monitoring Device",
    category: "Biomedical & Healthcare",
    description: "Design a wearable device that continuously monitors vital signs and sends alerts in emergencies.",
    problem: "Elderly patients with chronic conditions require constant monitoring, but frequent hospital visits are impractical and expensive.",
    solution: "An ESP32-based custom wearable with pulse-oximeter and ECG sensors that streams data to a React Native app and alerts caregivers automatically.",
    existingSolutions: "Apple Watch Health, Fitbit.",
    techStack: ["Arduino/ESP32", "Biometric sensors", "React Native", "Firebase"],
    features: ["Predictive analytics", "Medication reminders", "GPS tracking"],
    videoId: "qz0aGYrrlhU"
  },
  {
    id: 23,
    title: "Telemedicine Platform with AI",
    category: "Biomedical & Healthcare",
    description: "Build a telemedicine platform that allows remote consultations and includes an AI-powered symptom checker.",
    problem: "Patients face long wait times for basic medical advice, while doctors are overwhelmed with minor triage consultations.",
    solution: "A web platform integrating WebRTC for video calls and a Dialogflow chatbot trained on medical ontologies to pre-screen patient symptoms.",
    existingSolutions: "Teladoc, Amwell, Babylon Health.",
    techStack: ["React", "Node.js", "PostgreSQL", "WebRTC"],
    features: ["EHR integration", "Prescription management", "Symptom NLP analysis"],
    videoId: "WXsD0ZgxjRw"
  },

  // 9. Renewable Energy & Smart Systems
  {
    id: 24,
    title: "Solar Energy Prediction System",
    category: "Renewable Energy",
    description: "Create a system that predicts solar energy generation based on weather data and optimizes solar panel orientation.",
    problem: "Fixed solar panels lose up to 30% of potential daily energy capture due to suboptimal alignment with the sun's path and cloud cover.",
    solution: "A dual-axis solar tracker driven by Arduino that dynamically adjusts to the sun, combined with a Python backend forecasting weather efficiency.",
    existingSolutions: "Nextracker, Array Technologies.",
    techStack: ["Python", "IoT sensors", "Weather APIs", "Arduino"],
    features: ["Battery management", "Real-time dashboard", "Cost-benefit analysis"],
    videoId: "Zz6eOINPUZA"
  },
  {
    id: 25,
    title: "Smart Home Energy Management",
    category: "Renewable Energy",
    description: "Develop a system that learns user energy consumption patterns and optimizes home appliance usage.",
    problem: "Consumers lack visibility into which appliances are driving up their electricity bills and when they should run them to save money.",
    solution: "A machine learning model integrated with smart plugs that shifts heavy appliance usage (like washing machines) to off-peak grid hours automatically.",
    existingSolutions: "Sense Energy Monitor, Nest.",
    techStack: ["Python", "Scikit-learn", "Home Assistant", "IoT smart plugs"],
    features: ["Dynamic pricing response", "Personalized recommendations", "Smart meter integration"],
    videoId: "dGvHIN_eJkk"
  },

  // 10. Mobile Application Development
  {
    id: 26,
    title: "Smart City Navigation App",
    category: "Mobile App Development",
    description: "Create an app that provides optimized routes for public transport, identifies available parking, and offers real-time city services.",
    problem: "Urban commuters use fragmented apps for parking, buses, and trains, leading to inefficient and stressful daily travel.",
    solution: "A comprehensive Flutter application utilizing Google Maps APIs and local city transit APIs to provide a unified, multi-modal routing experience.",
    existingSolutions: "Citymapper, Transit, Google Maps.",
    techStack: ["Flutter/React Native", "Google Maps API", "Public Transport APIs"],
    features: ["Accessibility features", "Event notifications", "Parking availability"],
    videoId: "J2Z_lE8y25M"
  },
  {
    id: 27,
    title: "Fitness Tracker App with Gamification",
    category: "Mobile App Development",
    description: "Create a mobile application that tracks user workouts, calories burned, and other health statistics using phone sensors.",
    problem: "Many fitness apps struggle with long-term user retention because working out can feel monotonous and solitary.",
    solution: "An Android/iOS app that integrates with HealthKit, offering RPG-style leveling up, weekly community challenges, and detailed chart visualizations.",
    existingSolutions: "Strava, MyFitnessPal, Nike Training Club.",
    techStack: ["Kotlin/Swift", "Firebase", "HealthKit/Google Fit API"],
    features: ["Personalized plans", "Social sharing", "Gamification elements"],
    videoId: "3Q_oYDQ2wNM"
  },
  {
    id: 28,
    title: "Personalized News Aggregator",
    category: "Mobile App Development",
    description: "Develop an app that aggregates news from various sources and provides a personalized feed based on user interests.",
    problem: "Users are bombarded with clickbait and irrelevant news, spending too much time filtering out noise to find quality journalism.",
    solution: "A Python backend that scrapes RSS feeds, passes them through NLP for topic categorization, and a mobile frontend that learns from user swipe behavior.",
    existingSolutions: "Flipboard, Apple News, Google Discover.",
    techStack: ["React Native", "RSS Feed Parsers", "NLP libraries", "Node.js"],
    features: ["Offline reading", "Custom sources", "Sentiment analysis of articles"],
    videoId: "QZeMcvX3oH8"
  },
  
  // 11. New Additions (AI, Web, Cybersecurity, etc.)
  {
    id: 29,
    title: "AI-Powered Customer Support Chatbot",
    category: "AI & Machine Learning",
    description: "Build an intelligent chatbot that can handle customer queries 24/7, escalating to humans only when necessary.",
    problem: "Small businesses cannot afford round-the-clock human support, leading to lost sales and frustrated customers out of hours.",
    solution: "A custom fine-tuned LLM using RAG (Retrieval-Augmented Generation) trained on the company's FAQ and documentation to provide accurate, instant answers.",
    existingSolutions: "Intercom, Zendesk AI, Drift.",
    techStack: ["Python", "LangChain", "OpenAI API", "React"],
    features: ["RAG documentation parsing", "Human handoff", "Multi-language support"],
    videoId: "L8bZkG9oP5M"
  },
  {
    id: 30,
    title: "Serverless E-Commerce Backend",
    category: "Cloud Computing",
    description: "Develop a highly scalable e-commerce backend utilizing serverless architecture to minimize infrastructure costs.",
    problem: "Traditional monolithic backends struggle to handle sudden traffic spikes (like Black Friday) without over-provisioning expensive servers.",
    solution: "An AWS Lambda-based architecture using API Gateway and DynamoDB that scales instantly to infinite traffic and costs zero dollars when idle.",
    existingSolutions: "Shopify, Vercel Commerce.",
    techStack: ["AWS Lambda", "DynamoDB", "Node.js", "Serverless Framework"],
    features: ["Auto-scaling", "Microservices architecture", "Stripe payment integration"],
    videoId: "B3R5Z5gU0sU"
  },
  {
    id: 31,
    title: "Blockchain-Based Supply Chain Tracker",
    category: "Cybersecurity & Blockchain",
    description: "A decentralized application to track the provenance of goods from manufacturer to consumer.",
    problem: "Consumers and distributors cannot verify the authenticity of luxury goods or organic foods due to opaque supply chains.",
    solution: "A smart contract system on the Ethereum blockchain where every handover of a product is logged immutably, verifiable via a QR code scan.",
    existingSolutions: "IBM Food Trust, VeChain.",
    techStack: ["Solidity", "Hardhat", "React", "Ethers.js"],
    features: ["QR code scanning", "Immutable audit trail", "Role-based access"],
    videoId: "q-XzL45J_8M"
  },
  {
    id: 32,
    title: "Automated Greenhouse Control System",
    category: "Internet of Things (IoT)",
    description: "An IoT system that monitors and automatically adjusts climate conditions for optimal plant growth.",
    problem: "Farmers manually monitoring temperature, humidity, and soil moisture risk crop failure if conditions change rapidly.",
    solution: "A network of Arduino-powered sensors that automatically trigger water pumps, fans, and grow lights based on specific plant profiles.",
    existingSolutions: "FarmBot, Priva.",
    techStack: ["Arduino", "Raspberry Pi", "MQTT", "React Dashboard"],
    features: ["Automated watering", "Live sensor dashboard", "Historical data graphing"],
    videoId: "F5h6q7eA-gE"
  },
  {
    id: 33,
    title: "Kanban Project Management Tool",
    category: "Web Development",
    description: "Build a drag-and-drop Kanban board for agile teams to manage tasks and sprints.",
    problem: "Many small teams find Jira too complex and expensive, but need more structure than a simple to-do list.",
    solution: "A sleek, fast MERN stack application utilizing react-beautiful-dnd for seamless drag-and-drop functionality and WebSockets for real-time collaboration.",
    existingSolutions: "Trello, Asana, Linear.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    features: ["Drag and drop", "Real-time updates", "Column customization"],
    videoId: "Vqa9NMzF3xc"
  },
  {
    id: 34,
    title: "Predictive Maintenance for Machinery",
    category: "Data Science & Analytics",
    description: "Analyze sensor data from industrial machines to predict failures before they happen.",
    problem: "Factories lose millions of dollars to unexpected machine downtime and schedule-based maintenance that replaces parts too early.",
    solution: "A Machine Learning model (Random Forest/XGBoost) trained on historical vibration and temperature sensor data to predict the Remaining Useful Life (RUL) of components.",
    existingSolutions: "Uptake, C3.ai.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    features: ["Anomaly detection", "Remaining Useful Life prediction", "Alert dashboard"],
    videoId: "s6O8f01pU9g"
  }
];
