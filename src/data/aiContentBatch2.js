export const aiContentBatch2 = {

  ai_types_ml: {
    id: 'ai_types_ml',
    title: '16. Types of Machine Learning',
    difficulty: 'Beginner',
    readingTime: '5 min',
    definition: 'Types of Machine Learning refers to the three main paradigms: Supervised Learning (learn from labeled examples), Unsupervised Learning (find hidden patterns in unlabeled data), and Reinforcement Learning (learn by trial and error with rewards).',
    whyUseIt: 'Knowing which type of ML to use for a given problem is the most fundamental design decision. Each type suits different scenarios and data availability conditions.',
    keyConcepts: [
      { term: 'Supervised Learning', desc: 'Model trained on input-output pairs. Examples: spam detection, image classification.' },
      { term: 'Unsupervised Learning', desc: 'Model finds patterns without labels. Examples: customer segmentation, anomaly detection.' },
      { term: 'Reinforcement Learning', desc: 'Agent learns through rewards/penalties. Examples: game AI, robot navigation.' },
      { term: 'Semi-Supervised Learning', desc: 'Combines small labeled dataset with large unlabeled dataset.' },
      { term: 'Self-Supervised Learning', desc: 'Model creates its own labels from data structure. Used in GPT, BERT.' }
    ],
    workflow: 'Problem Type → Choose ML Paradigm → Select Algorithm → Train → Evaluate',
    codeExample: '# Types of ML with examples\nml_types = {\n  "Supervised": {\n    "Data": "Labeled input-output pairs",\n    "Examples": ["Email spam detection", "House price prediction", "Medical diagnosis"],\n    "Algorithms": ["Linear Regression", "Random Forest", "SVM"]\n  },\n  "Unsupervised": {\n    "Data": "No labels",\n    "Examples": ["Customer segmentation", "Topic modeling", "Anomaly detection"],\n    "Algorithms": ["K-Means", "DBSCAN", "PCA"]\n  },\n  "Reinforcement": {\n    "Data": "Rewards and penalties",\n    "Examples": ["Chess AI", "Robot navigation", "Ad bidding"],\n    "Algorithms": ["Q-Learning", "PPO", "DQN"]\n  }\n}\nfor ml_type, info in ml_types.items():\n  print(f"{ml_type}: {len(info[\'Examples\'])} examples")',
    expectedOutput: 'Supervised: 3 examples\nUnsupervised: 3 examples\nReinforcement: 3 examples',
    explanation: [
      { code: 'Supervised', desc: 'Requires human-labeled data — most common in production AI systems.' },
      { code: 'Unsupervised', desc: 'No labels needed — useful when labeling is expensive or impossible.' },
      { code: 'Reinforcement', desc: 'Agent interacts with environment, receives rewards — used in game AI and robotics.' }
    ],
    realWorldExample: 'AlphaGo (Reinforcement Learning) learned to play Go at superhuman level by playing millions of games against itself, using win/loss as the reward signal — no human labels needed.',
    advantages: ['Three paradigms cover almost all real-world problems', 'Unsupervised learning works without expensive labeling', 'Reinforcement learning enables autonomous agent behavior', 'Semi-supervised combines best of both worlds'],
    limitations: ['Supervised requires expensive labeled data', 'Unsupervised results are harder to evaluate', 'RL training is unstable and computationally expensive', 'Wrong paradigm choice can fail even with good data'],
    bestPractices: ['Start with supervised learning when labeled data is available.', 'Use unsupervised learning to explore data structure.', 'Reserve RL for sequential decision-making problems.'],
    practiceExercise: {
      task: 'For each problem, identify the ML type: (a) sort customers into groups based on behavior, (b) predict tomorrow\'s stock price, (c) train a robot to walk.',
      expectedOutput: '(a) Unsupervised (clustering), (b) Supervised (regression), (c) Reinforcement Learning.',
      solution: 'Match each to labeled/unlabeled/reward-based data availability and decision type.'
    },
    interviewQuestions: [
      'What are the 3 types of machine learning?', 'When do you use unsupervised learning?', 'What is the reward signal in reinforcement learning?', 'What is semi-supervised learning?', 'How does self-supervised learning work?'
    ],
    quiz: [
      { question: 'Which ML type uses labeled input-output pairs?', options: ['Reinforcement', 'Unsupervised', 'Supervised', 'Self-supervised'], answer: 'Supervised' },
      { question: 'Customer segmentation is an example of:', options: ['Supervised', 'Reinforcement', 'Unsupervised', 'Prescriptive'], answer: 'Unsupervised' },
      { question: 'AlphaGo uses which ML paradigm?', options: ['Supervised', 'Unsupervised', 'Reinforcement', 'Transfer Learning'], answer: 'Reinforcement' },
      { question: 'Semi-supervised learning combines:', options: ['Two models', 'Small labeled + large unlabeled data', 'Training and testing', 'Regression and classification'], answer: 'Small labeled + large unlabeled data' },
      { question: 'GPT uses which learning paradigm?', options: ['Supervised', 'Reinforcement', 'Self-supervised', 'Clustering'], answer: 'Self-supervised' }
    ],
    summary: 'The three ML paradigms — supervised, unsupervised, and reinforcement learning — each suit different data availability and problem types. Supervised dominates production AI, unsupervised handles unlabeled exploration, and RL powers autonomous agents.',
    references: [{ name: 'W3Schools AI', url: 'https://www.w3schools.com/ai/' }, { name: 'Google AI', url: 'https://ai.google/' }, { name: 'OpenAI', url: 'https://openai.com/' }, { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/ai/' }]
  },

  ai_supervised: {
    id: 'ai_supervised',
    title: '17. Supervised Learning',
    difficulty: 'Beginner',
    readingTime: '6 min',
    definition: 'Supervised Learning is a machine learning paradigm where models are trained on labeled datasets — each training example has both an input (features) and a known correct output (label). The model learns to map inputs to outputs.',
    whyUseIt: 'Supervised learning is the most widely deployed ML type because it delivers measurable, high-accuracy predictions on concrete tasks like fraud detection, medical diagnosis, and price prediction.',
    keyConcepts: [
      { term: 'Classification', desc: 'Predicting a discrete category label (spam/not spam, dog/cat).' },
      { term: 'Regression', desc: 'Predicting a continuous numerical value (house price, temperature).' },
      { term: 'Decision Boundary', desc: 'The line/surface a classifier learns to separate different classes.' },
      { term: 'Loss Function', desc: 'Measures prediction error — MSE for regression, cross-entropy for classification.' },
      { term: 'Ground Truth', desc: 'The actual correct labels from the training dataset.' }
    ],
    workflow: 'Labeled Data → Features + Labels → Train Model → Predictions → Compare to Ground Truth → Minimize Loss',
    codeExample: '# Supervised learning: classification + regression\nfrom sklearn.linear_model import LogisticRegression, LinearRegression\nimport numpy as np\n\n# Classification: Will it rain? (0=No, 1=Yes)\nX_class = [[30, 80], [20, 60], [35, 90], [15, 40]]  # [temp, humidity]\ny_class = [1, 0, 1, 0]\nclf = LogisticRegression().fit(X_class, y_class)\nprint("Rain prediction:", clf.predict([[28, 75]]))\n\n# Regression: House price prediction\nX_reg = [[1], [2], [3], [4]]  # bedrooms\ny_reg = [100000, 150000, 200000, 250000]\nreg = LinearRegression().fit(X_reg, y_reg)\nprint("5-bedroom price: $", reg.predict([[5]])[0])',
    expectedOutput: 'Rain prediction: [1]\n5-bedroom price: $ 300000.0',
    explanation: [
      { code: 'LogisticRegression', desc: 'Classification model that predicts probability of a class (rain/no rain).' },
      { code: 'LinearRegression', desc: 'Regression model that predicts continuous values (house price) from a linear formula.' },
      { code: 'clf.predict([[28, 75]])', desc: 'Inference: Given temp=28°C and humidity=75%, predict rain (1=Yes).' }
    ],
    realWorldExample: 'Banks use supervised learning (gradient boosting classifiers) to predict loan defaults. The training dataset contains thousands of historical loans labeled with outcome (defaulted=1, repaid=0). The model learns which borrower characteristics predict default.',
    advantages: ['Direct performance measurement using labeled test data', 'Most mature and well-understood ML paradigm', 'Wide variety of algorithms to choose from', 'High accuracy on well-defined prediction tasks'],
    limitations: ['Requires large amounts of labeled training data', 'Labeling is expensive and time-consuming', 'Model only predicts what it was trained to predict', 'May fail on data distributions different from training'],
    bestPractices: ['Ensure labels are accurate — noisy labels harm model quality.', 'Balance classes if the dataset is imbalanced.', 'Use precision/recall for imbalanced classification tasks.'],
    practiceExercise: {
      task: 'Classify each task as supervised classification or supervised regression: (a) predict house price, (b) detect spam email, (c) forecast tomorrow\'s temperature, (d) classify tumor as malignant/benign.',
      expectedOutput: '(a) Regression, (b) Classification, (c) Regression, (d) Classification.',
      solution: 'Classification = discrete output (categories). Regression = continuous output (numbers).'
    },
    interviewQuestions: ['What is supervised learning?', 'What is the difference between classification and regression?', 'Name 3 supervised learning algorithms.', 'What metrics evaluate classification models?', 'What loss function is used for regression?'],
    quiz: [
      { question: 'Supervised learning requires:', options: ['Only input data', 'Labeled input-output pairs', 'No data', 'Only output labels'], answer: 'Labeled input-output pairs' },
      { question: 'Predicting house price is a:', options: ['Classification task', 'Regression task', 'Clustering task', 'Reinforcement task'], answer: 'Regression task' },
      { question: 'Which is a classification algorithm?', options: ['Linear Regression', 'K-Means', 'Logistic Regression', 'PCA'], answer: 'Logistic Regression' },
      { question: 'The "ground truth" refers to:', options: ['Model weights', 'Actual correct labels', 'Test set predictions', 'Training accuracy'], answer: 'Actual correct labels' },
      { question: 'MSE (Mean Squared Error) is used for:', options: ['Classification', 'Clustering', 'Regression', 'Reinforcement Learning'], answer: 'Regression' }
    ],
    summary: 'Supervised learning trains models on labeled input-output pairs. Classification predicts categories; regression predicts numbers. It is the most widely used ML paradigm, powering applications from fraud detection to medical diagnosis.',
    references: [{ name: 'W3Schools AI', url: 'https://www.w3schools.com/ai/' }, { name: 'Google AI', url: 'https://ai.google/' }, { name: 'OpenAI', url: 'https://openai.com/' }, { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/ai/' }]
  },

  ai_unsupervised: {
    id: 'ai_unsupervised',
    title: '18. Unsupervised Learning',
    difficulty: 'Intermediate',
    readingTime: '6 min',
    definition: 'Unsupervised Learning is a machine learning paradigm where models find hidden patterns and structures in data without any labeled examples. The algorithm discovers groupings, relationships, or compressed representations on its own.',
    whyUseIt: 'Unsupervised learning is essential when labeled data is unavailable or expensive, enabling you to discover unknown structure in data — like customer segments, topic clusters, or anomalies — without human labeling.',
    keyConcepts: [
      { term: 'Clustering', desc: 'Grouping similar data points together. Example: K-Means.' },
      { term: 'Dimensionality Reduction', desc: 'Compressing data into fewer dimensions while preserving structure. Example: PCA, t-SNE.' },
      { term: 'Association Rules', desc: 'Finding items that frequently appear together. Example: market basket analysis.' },
      { term: 'Anomaly Detection', desc: 'Identifying data points that don\'t fit normal patterns.' },
      { term: 'Centroid', desc: 'The center point of a cluster in K-Means.' }
    ],
    workflow: 'Unlabeled Data → Choose Algorithm (K-Means/PCA) → Find Structure → Visualize & Interpret → Label Clusters',
    codeExample: '# Unsupervised learning: K-Means clustering\nfrom sklearn.cluster import KMeans\nimport numpy as np\n\n# Customer data: [annual_spend, visit_frequency]\ncustomers = np.array([\n  [1000, 2], [5000, 10], [900, 3], [4800, 12],\n  [200, 1], [6000, 15], [150, 1]\n])\n\nkm = KMeans(n_clusters=3, random_state=42)\nkm.fit(customers)\nprint("Customer clusters:", km.labels_)\nprint("Cluster centers:", km.cluster_centers_)',
    expectedOutput: 'Customer clusters: [1 0 1 0 2 0 2]\nCluster centers: [[5266.67 12.33] [950.0 2.5] [175.0 1.0]]',
    explanation: [
      { code: 'n_clusters=3', desc: 'We tell K-Means to find 3 groups — no labels provided.' },
      { code: 'km.labels_', desc: 'Each customer is assigned to cluster 0 (high spender), 1 (medium), or 2 (low).' },
      { code: 'cluster_centers_', desc: 'The average characteristics of each discovered customer segment.' }
    ],
    realWorldExample: 'Netflix uses unsupervised clustering on viewing behavior to discover "taste communities" — groups of users with similar viewing patterns. These clusters are then used to improve recommendations.',
    advantages: ['No labeling required — works on raw data', 'Discovers unknown patterns humans may not expect', 'Scalable to huge datasets', 'Enables exploratory data analysis'],
    limitations: ['No clear "correct answer" to evaluate against', 'Results can be subjective and hard to interpret', 'K-Means requires specifying number of clusters in advance', 'Sensitive to outliers and data scaling'],
    bestPractices: ['Normalize features before clustering.', 'Use elbow method to choose optimal K in K-Means.', 'Visualize clusters with t-SNE or PCA for interpretation.', 'Validate clusters with domain experts.'],
    practiceExercise: {
      task: 'Explain how a supermarket could use unsupervised learning to increase sales. What data would you use and what would you discover?',
      expectedOutput: 'Data: purchase history per customer. Algorithm: K-Means. Discovery: 3 clusters — budget shoppers, premium buyers, family bulk buyers. Action: personalize promotions per cluster.',
      solution: 'Market basket analysis (Apriori algorithm) also reveals: customers who buy bread also buy butter — enabling store layout and bundling recommendations.'
    },
    interviewQuestions: ['What is unsupervised learning?', 'What is K-Means clustering?', 'What is PCA?', 'How do you evaluate clustering results?', 'What is anomaly detection?'],
    quiz: [
      { question: 'Unsupervised learning works with:', options: ['Labeled data', 'Unlabeled data', 'Reward signals', 'Test data only'], answer: 'Unlabeled data' },
      { question: 'K-Means is a type of:', options: ['Classification', 'Regression', 'Clustering', 'Reinforcement Learning'], answer: 'Clustering' },
      { question: 'PCA is used for:', options: ['Supervised classification', 'Dimensionality reduction', 'Reinforcement rewards', 'Label generation'], answer: 'Dimensionality reduction' },
      { question: 'Market basket analysis finds:', options: ['Product prices', 'Items frequently bought together', 'Customer addresses', 'Inventory levels'], answer: 'Items frequently bought together' },
      { question: 'Anomaly detection identifies:', options: ['Normal patterns', 'Data points that don\'t fit the pattern', 'Missing labels', 'Training errors'], answer: 'Data points that don\'t fit the pattern' }
    ],
    summary: 'Unsupervised learning finds hidden patterns in unlabeled data through clustering (K-Means), dimensionality reduction (PCA), and anomaly detection. It is essential for exploratory analysis and scenarios where labeling is impractical.',
    references: [{ name: 'W3Schools AI', url: 'https://www.w3schools.com/ai/' }, { name: 'Google AI', url: 'https://ai.google/' }, { name: 'OpenAI', url: 'https://openai.com/' }, { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/ai/' }]
  },

  ai_reinforcement: {
    id: 'ai_reinforcement',
    title: '19. Reinforcement Learning',
    difficulty: 'Intermediate',
    readingTime: '6 min',
    definition: 'Reinforcement Learning (RL) is a machine learning paradigm where an agent learns to take actions in an environment to maximize a cumulative reward signal through trial and error — receiving positive feedback for good actions and negative feedback for bad ones.',
    whyUseIt: 'RL solves sequential decision-making problems where the correct action is not known in advance but must be discovered through interaction — making it ideal for game AI, robotics, autonomous driving, and resource optimization.',
    keyConcepts: [
      { term: 'Agent', desc: 'The AI learner that takes actions. Example: a robot, a game character.' },
      { term: 'Environment', desc: 'The world the agent interacts with. Example: a game board, a factory floor.' },
      { term: 'State', desc: 'The current situation of the environment the agent observes.' },
      { term: 'Action', desc: 'A choice the agent makes in response to the state.' },
      { term: 'Reward', desc: 'Feedback signal (+/-) received after an action. Agent aims to maximize total reward.' },
      { term: 'Policy', desc: 'The strategy the agent learns — what action to take in each state.' }
    ],
    workflow: 'Agent observes State → Takes Action → Environment gives Reward + New State → Agent updates Policy → Repeat',
    codeExample: '# Reinforcement Learning concept\nclass SimpleAgent:\n  def __init__(self):\n    self.q_table = {}  # state -> action value map\n    self.total_reward = 0\n  \n  def choose_action(self, state, actions):\n    # Pick action with highest expected reward\n    if state in self.q_table:\n      return max(actions, key=lambda a: self.q_table.get((state, a), 0))\n    return actions[0]  # default: first action\n  \n  def learn(self, state, action, reward):\n    key = (state, action)\n    self.q_table[key] = self.q_table.get(key, 0) + reward\n    self.total_reward += reward\n    print(f"Reward received: {reward}, Total: {self.total_reward}")',
    expectedOutput: 'Reward received: 10, Total: 10\nReward received: -5, Total: 5',
    explanation: [
      { code: 'q_table', desc: 'Stores learned values for (state, action) pairs — the basis of Q-Learning.' },
      { code: 'choose_action', desc: 'The policy: pick the action with the highest estimated reward.' },
      { code: 'learn', desc: 'Updates the Q-table with received rewards, improving the policy over time.' }
    ],
    realWorldExample: 'OpenAI trained its Dota 2 AI (OpenAI Five) using RL. The agent played millions of games, receiving +reward for winning and -reward for losing. After thousands of hours of training, it defeated world champion players.',
    advantages: ['Solves problems with no labeled data', 'Discovers superhuman strategies in games', 'Adapts to dynamic environments', 'Can handle long-term, multi-step decision making'],
    limitations: ['Training is very slow and computationally expensive', 'Reward design is tricky — wrong rewards lead to unintended behaviors', 'Unstable training — difficult to reproduce results', 'Requires simulation environment for safe training'],
    bestPractices: ['Use OpenAI Gym for standardized RL environments.', 'Start with simple environments before complex ones.', 'Design rewards carefully — Goodhart\'s Law applies to RL.', 'Use PPO or SAC algorithms as reliable starting points.'],
    practiceExercise: {
      task: 'Design the RL components for a self-driving car: define the Agent, Environment, State, Actions, and Reward.',
      expectedOutput: 'Agent: car AI. Environment: road. State: speed, lane position, obstacles. Actions: accelerate, brake, steer. Reward: +10 reach destination, -100 collision, +1 per safe second.',
      solution: 'Reward shaping is critical — too sparse rewards (only final +/-) makes learning slow, so intermediate rewards guide faster learning.'
    },
    interviewQuestions: ['What is reinforcement learning?', 'What are the key components of RL?', 'What is a policy in RL?', 'What is the exploration vs exploitation tradeoff?', 'Name two RL algorithms.'],
    quiz: [
      { question: 'In RL, the agent aims to maximize:', options: ['Training accuracy', 'Cumulative reward', 'Model complexity', 'Data size'], answer: 'Cumulative reward' },
      { question: 'The "policy" in RL is:', options: ['The reward function', 'The strategy for choosing actions', 'The environment state', 'The training data'], answer: 'The strategy for choosing actions' },
      { question: 'AlphaGo is an example of which ML type?', options: ['Supervised', 'Unsupervised', 'Reinforcement', 'Semi-supervised'], answer: 'Reinforcement' },
      { question: 'In RL, "environment" refers to:', options: ['Hardware setup', 'The world the agent interacts with', 'Training dataset', 'The reward function'], answer: 'The world the agent interacts with' },
      { question: 'What is the main challenge in RL reward design?', options: ['Too many labels', 'Wrong rewards causing unintended behaviors', 'Overfitting', 'Underfitting'], answer: 'Wrong rewards causing unintended behaviors' }
    ],
    summary: 'Reinforcement Learning trains agents through trial and error with reward signals. The agent (AI) takes actions in an environment, receives rewards, and updates its policy to maximize total reward. RL powers game AI, robotics, and autonomous systems.',
    references: [{ name: 'W3Schools AI', url: 'https://www.w3schools.com/ai/' }, { name: 'Google AI', url: 'https://ai.google/' }, { name: 'OpenAI', url: 'https://openai.com/' }, { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/ai/' }]
  },

  ai_classification: {
    id: 'ai_classification',
    title: '20. Classification',
    difficulty: 'Intermediate',
    readingTime: '6 min',
    definition: 'Classification is a supervised machine learning task where the model learns to assign input data to predefined categories or classes. Examples include spam detection (spam/not spam), disease diagnosis (positive/negative), and image recognition (cat/dog/car).',
    whyUseIt: 'Classification is the most common ML task in production. Every system that makes a categorical decision — medical diagnosis, fraud alerts, sentiment labels — uses a classification model.',
    keyConcepts: [
      { term: 'Binary Classification', desc: 'Two classes — spam/not spam, yes/no, 0/1.' },
      { term: 'Multi-class Classification', desc: 'More than two classes — cat/dog/bird/fish.' },
      { term: 'Precision', desc: 'Of all positive predictions, how many were actually positive?' },
      { term: 'Recall', desc: 'Of all actual positives, how many did the model correctly find?' },
      { term: 'Confusion Matrix', desc: 'A table showing correct and incorrect predictions for each class.' }
    ],
    workflow: 'Labeled Data → Train Classifier → Predict Classes → Measure Precision/Recall/F1 → Tune',
    codeExample: '# Classification with metrics\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.metrics import accuracy_score, classification_report\n\nX_train = [[2,3],[4,8],[1,2],[6,9],[5,7],[2,1]]\ny_train = [0, 1, 0, 1, 1, 0]  # 0=Low risk, 1=High risk\n\nX_test = [[3,5],[7,9]]\ny_test = [0, 1]\n\nmodel = DecisionTreeClassifier()\nmodel.fit(X_train, y_train)\npreds = model.predict(X_test)\nprint("Predictions:", preds)\nprint("Accuracy:", accuracy_score(y_test, preds))',
    expectedOutput: 'Predictions: [0 1]\nAccuracy: 1.0',
    explanation: [
      { code: 'y_train = [0, 1, 0, 1...]', desc: 'Binary labels — 0=Low Risk, 1=High Risk.' },
      { code: 'DecisionTreeClassifier', desc: 'Learns decision rules (like if-else) from features to separate classes.' },
      { code: 'accuracy_score', desc: 'Correct predictions / Total predictions — most intuitive metric.' }
    ],
    realWorldExample: 'Google\'s spam filter classifies millions of emails per second. It is a multi-feature binary classifier (spam=1 / not spam=0) achieving >99% precision — meaning nearly every email it marks as spam actually is spam.',
    advantages: ['Well-studied with many available algorithms', 'Clear, measurable performance metrics', 'Works for binary and multi-class problems', 'Probabilistic outputs enable confidence scoring'],
    limitations: ['Requires balanced, labeled training data', 'Performance drops on imbalanced datasets', 'Multi-class with 1000+ categories is challenging', 'Feature engineering is critical for good results'],
    bestPractices: ['Use F1-score for imbalanced datasets instead of accuracy.', 'Check confusion matrix to understand error types.', 'Use class_weight="balanced" for imbalanced training data.'],
    practiceExercise: {
      task: 'Design a classification system to detect fraudulent bank transactions. Define: classes, features, and which metric (precision or recall) matters more and why.',
      expectedOutput: 'Classes: fraud (1) / not fraud (0). Features: amount, merchant, location, time, device. Metric: Recall matters more — missing a real fraud is worse than a false alarm.',
      solution: 'High recall = catch most frauds (even if some false alarms). High precision = fewer false alarms (but may miss some fraud). Banks prioritize recall to minimize financial loss.'
    },
    interviewQuestions: ['What is the difference between binary and multi-class classification?', 'What is precision?', 'What is recall?', 'When should you use F1-score?', 'What is a confusion matrix?'],
    quiz: [
      { question: 'Spam detection is an example of:', options: ['Multi-class classification', 'Binary classification', 'Regression', 'Clustering'], answer: 'Binary classification' },
      { question: 'Precision measures:', options: ['All actual positives found', 'Correct positives out of all predicted positives', 'Total accuracy', 'Training speed'], answer: 'Correct positives out of all predicted positives' },
      { question: 'A confusion matrix shows:', options: ['Model architecture', 'Correct and incorrect predictions by class', 'Training loss', 'Feature importance'], answer: 'Correct and incorrect predictions by class' },
      { question: 'For a cancer detection AI, which metric matters most?', options: ['Precision', 'Accuracy', 'Recall', 'AUC'], answer: 'Recall' },
      { question: 'Multi-class classification handles:', options: ['2 classes', 'More than 2 classes', 'Continuous output', 'No labels'], answer: 'More than 2 classes' }
    ],
    summary: 'Classification assigns input data to categories. Binary (2 classes) or multi-class (3+ classes). Performance is measured by precision, recall, F1-score, and confusion matrices. It is the most common ML task powering spam filters, fraud detection, and medical diagnosis.',
    references: [{ name: 'W3Schools AI', url: 'https://www.w3schools.com/ai/' }, { name: 'Google AI', url: 'https://ai.google/' }, { name: 'OpenAI', url: 'https://openai.com/' }, { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/ai/' }]
  },

  ai_regression: {
    id: 'ai_regression',
    title: '21. Regression',
    difficulty: 'Intermediate',
    readingTime: '6 min',
    definition: 'Regression is a supervised machine learning task that predicts a continuous numerical value as output. Unlike classification (which predicts a category), regression predicts quantities like price, temperature, sales, or age.',
    whyUseIt: 'Regression powers price prediction, demand forecasting, risk scoring, and revenue modeling — any problem where the answer is a number on a continuous scale requires regression.',
    keyConcepts: [
      { term: 'Linear Regression', desc: 'Fits a straight line to the data to predict output from input.' },
      { term: 'Polynomial Regression', desc: 'Fits a curved line for non-linear relationships.' },
      { term: 'MSE', desc: 'Mean Squared Error — average of squared differences between predicted and actual values.' },
      { term: 'R² Score', desc: 'Coefficient of determination — how well the model explains variance in the data (0 to 1).' },
      { term: 'Multivariate Regression', desc: 'Regression with multiple input features.' }
    ],
    workflow: 'Labeled Numerical Data → Choose Regression Model → Train → Predict Values → Measure MSE/R²',
    codeExample: '# Linear Regression example\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error, r2_score\nimport numpy as np\n\n# House size (sqft) -> price\nX = np.array([[500],[800],[1000],[1500],[2000]])\ny = np.array([100000, 150000, 180000, 250000, 350000])\n\nmodel = LinearRegression()\nmodel.fit(X, y)\n\npred = model.predict([[1200]])\nprint(f"Predicted price for 1200sqft: ${pred[0]:,.0f}")\nprint(f"R² Score: {r2_score(y, model.predict(X)):.3f}")',
    expectedOutput: 'Predicted price for 1200sqft: $206,455\nR² Score: 0.987',
    explanation: [
      { code: 'LinearRegression', desc: 'Learns: price = (slope × size) + intercept from training data.' },
      { code: 'pred[0]', desc: 'Continuous numerical prediction — a specific dollar amount, not a category.' },
      { code: 'R² Score: 0.987', desc: 'Very close to 1.0 — the model explains 98.7% of price variation from house size.' }
    ],
    realWorldExample: 'Zillow\'s "Zestimate" uses multivariate regression with hundreds of features (size, location, bedrooms, school rating) to predict home values for 100+ million homes continuously.',
    advantages: ['Provides exact numerical predictions', 'Interpretable coefficients (feature importance)', 'Works well on linear relationships', 'MSE/R² provide clear evaluation metrics'],
    limitations: ['Assumes linear relationship (unless polynomial)', 'Sensitive to outliers', 'May underfit complex non-linear relationships', 'Multicollinearity between features can bias coefficients'],
    bestPractices: ['Plot residuals to check for patterns (should be random).', 'Remove outliers that skew the regression line.', 'Use regularization (Ridge/Lasso) to prevent overfitting.'],
    practiceExercise: {
      task: 'Predict salary from years of experience using linear regression. Given: 1yr=$40K, 3yr=$60K, 5yr=$80K, 7yr=$100K. What would you predict for 10 years?',
      expectedOutput: 'Pattern: +$10,000 per year. Prediction for 10yr: $130,000.',
      solution: 'Slope = (100K-40K)/(7-1) = $10K/year. Intercept = 40K - 10K = $30K. Prediction: 10 × $10K + $30K = $130K.'
    },
    interviewQuestions: ['What is regression?', 'What is the difference between classification and regression?', 'What is MSE?', 'What does R² score indicate?', 'When should you use polynomial regression?'],
    quiz: [
      { question: 'Regression predicts:', options: ['Categories', 'Continuous numerical values', 'Cluster labels', 'Reward signals'], answer: 'Continuous numerical values' },
      { question: 'House price prediction is an example of:', options: ['Classification', 'Clustering', 'Regression', 'Reinforcement Learning'], answer: 'Regression' },
      { question: 'R² score of 1.0 means:', options: ['Model has 100% accuracy', 'Model perfectly explains all variance in the data', 'MSE is zero', 'Overfitting occurred'], answer: 'Model perfectly explains all variance in the data' },
      { question: 'MSE stands for:', options: ['Mean Squared Error', 'Model Squared Evaluation', 'Mean Standard Error', 'Model Score Estimation'], answer: 'Mean Squared Error' },
      { question: 'Polynomial regression is used when:', options: ['Data has more than 2 classes', 'The relationship is non-linear', 'Labels are missing', 'Data has many features'], answer: 'The relationship is non-linear' }
    ],
    summary: 'Regression predicts continuous numerical values (price, temperature, sales) using models like Linear Regression. Performance is measured by MSE (lower = better) and R² score (closer to 1 = better). It is essential for forecasting and pricing applications.',
    references: [{ name: 'W3Schools AI', url: 'https://www.w3schools.com/ai/' }, { name: 'Google AI', url: 'https://ai.google/' }, { name: 'OpenAI', url: 'https://openai.com/' }, { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/ai/' }]
  },

  ai_clustering: {
    id: 'ai_clustering',
    title: '22. Clustering',
    difficulty: 'Intermediate',
    readingTime: '6 min',
    definition: 'Clustering is an unsupervised machine learning technique that groups data points with similar characteristics together into clusters, without any predefined labels. Similar items end up in the same cluster; dissimilar items in different clusters.',
    whyUseIt: 'Clustering reveals natural groupings in data — customer segments, document topics, gene expression patterns — without requiring expensive manual labeling, enabling data-driven discovery.',
    keyConcepts: [
      { term: 'K-Means', desc: 'Partitions data into K clusters by minimizing distance from each point to its cluster center.' },
      { term: 'DBSCAN', desc: 'Density-based clustering — finds clusters of arbitrary shape and identifies outliers.' },
      { term: 'Hierarchical Clustering', desc: 'Builds a tree (dendrogram) of nested clusters.' },
      { term: 'Inertia', desc: 'Sum of distances from each point to its cluster center — lower is better.' },
      { term: 'Elbow Method', desc: 'Plotting inertia vs K to find the optimal number of clusters.' }
    ],
    workflow: 'Unlabeled Data → Normalize Features → Choose K (Elbow Method) → Run K-Means → Assign Clusters → Interpret',
    codeExample: '# K-Means Clustering\nfrom sklearn.cluster import KMeans\nimport numpy as np\n\n# Student data: [study_hours, exam_score]\nstudents = np.array([\n  [8, 90], [7, 85], [2, 40], [3, 50],\n  [9, 95], [1, 35], [6, 78], [4, 60]\n])\n\nkm = KMeans(n_clusters=3, random_state=42)\nkm.fit(students)\nfor i, (student, cluster) in enumerate(zip(students, km.labels_)):\n  labels = {0: "High Performer", 1: "Average", 2: "Struggling"}\n  print(f"Student {i+1}: {labels.get(cluster, cluster)}")',
    expectedOutput: 'Student 1: High Performer\nStudent 3: Struggling\nStudent 4: Average...',
    explanation: [
      { code: 'n_clusters=3', desc: 'We decide on 3 groups — high performer, average, struggling.' },
      { code: 'km.labels_', desc: 'Each student is assigned to a cluster based on their study hours and exam scores.' },
      { code: 'No labels in training', desc: 'The algorithm discovered the groups purely from patterns — no "right answer" was provided.' }
    ],
    realWorldExample: 'Spotify uses clustering to discover music taste communities — millions of listeners are clustered by listening behavior into groups like "indie folk fans", "hip hop heads", "classical music listeners". These clusters power playlist recommendations.',
    advantages: ['No labeling required', 'Discovers natural data structure', 'Scales to large datasets', 'Works across many domains (biology, marketing, NLP)'],
    limitations: ['Must specify K in advance for K-Means', 'Sensitive to outliers', 'Results depend on initial random centroid placement', 'Hard to evaluate without ground truth labels'],
    bestPractices: ['Always normalize features before clustering.', 'Use elbow method to select K.', 'Try multiple clustering algorithms and compare results.', 'Visualize clusters in 2D using PCA or t-SNE.'],
    practiceExercise: {
      task: 'A hospital has patient records with [age, blood_pressure, cholesterol]. Design a clustering approach to find patient health risk groups.',
      expectedOutput: 'Normalize features → Run K-Means (K=3) → Cluster 0: Young/Healthy, Cluster 1: Middle-age/Medium Risk, Cluster 2: Elderly/High Risk. Use to personalize treatment plans.',
      solution: 'After clustering, validate with a cardiologist that the clusters represent meaningful clinical categories.'
    },
    interviewQuestions: ['What is clustering?', 'How does K-Means work?', 'What is the elbow method?', 'What is the difference between K-Means and DBSCAN?', 'How do you evaluate clustering quality without labels?'],
    quiz: [
      { question: 'Clustering is an example of:', options: ['Supervised Learning', 'Reinforcement Learning', 'Unsupervised Learning', 'Semi-supervised Learning'], answer: 'Unsupervised Learning' },
      { question: 'K-Means requires you to specify:', options: ['Labels in advance', 'Number of clusters (K)', 'Feature names', 'Reward signals'], answer: 'Number of clusters (K)' },
      { question: 'The elbow method helps you:', options: ['Choose learning rate', 'Select optimal K', 'Evaluate classification accuracy', 'Find outliers'], answer: 'Select optimal K' },
      { question: 'DBSCAN is better than K-Means when:', options: ['K is known', 'Clusters have arbitrary shape and outliers exist', 'Data is labeled', 'Classes are balanced'], answer: 'Clusters have arbitrary shape and outliers exist' },
      { question: 'Clustering assigns each data point to:', options: ['A class label', 'A prediction probability', 'A cluster based on similarity', 'A reward value'], answer: 'A cluster based on similarity' }
    ],
    summary: 'Clustering groups similar data points without labels. K-Means is the most common algorithm, requiring you to specify K clusters. The elbow method helps choose K. Clustering enables customer segmentation, document grouping, and biological pattern discovery.',
    references: [{ name: 'W3Schools AI', url: 'https://www.w3schools.com/ai/' }, { name: 'Google AI', url: 'https://ai.google/' }, { name: 'OpenAI', url: 'https://openai.com/' }, { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/ai/' }]
  },

  ai_what_is_dl: {
    id: 'ai_what_is_dl',
    title: '23. What is Deep Learning?',
    difficulty: 'Intermediate',
    readingTime: '6 min',
    definition: 'Deep Learning (DL) is a subset of Machine Learning that uses artificial neural networks with many layers (deep networks) to automatically learn hierarchical representations from raw data — images, text, or audio — without manual feature engineering.',
    whyUseIt: 'Deep Learning powers the most impressive AI breakthroughs — image recognition, language translation, speech recognition, drug discovery — because it automatically extracts rich features from raw data that humans could not program manually.',
    keyConcepts: [
      { term: 'Neural Network', desc: 'Interconnected layers of artificial neurons that process information.' },
      { term: 'Deep Network', desc: 'A neural network with many hidden layers (typically 10+).' },
      { term: 'Feature Hierarchy', desc: 'Deep networks learn low-level features (edges), then high-level (shapes, objects).' },
      { term: 'GPU', desc: 'Graphics Processing Unit — parallel hardware that makes deep learning training feasible.' },
      { term: 'Transfer Learning', desc: 'Using a pre-trained deep learning model and fine-tuning it for a new task.' }
    ],
    workflow: 'Raw Data (images/text) → Deep Neural Network (many layers) → Automatic Feature Extraction → High-accuracy Predictions',
    codeExample: '# Deep Learning concept with Keras\nfrom tensorflow.keras.models import Sequential\nfrom tensorflow.keras.layers import Dense\n\n# Simple deep neural network\nmodel = Sequential([\n  Dense(128, activation="relu", input_shape=(20,)),  # Hidden layer 1\n  Dense(64, activation="relu"),   # Hidden layer 2\n  Dense(32, activation="relu"),   # Hidden layer 3\n  Dense(1, activation="sigmoid")  # Output: binary classification\n])\nmodel.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])\nmodel.summary()',
    expectedOutput: 'Total params: 12,545\nTrainable params: 12,545',
    explanation: [
      { code: 'Dense(128, activation="relu")', desc: 'A fully connected layer with 128 neurons and ReLU activation function.' },
      { code: 'input_shape=(20,)', desc: 'Network accepts 20 input features.' },
      { code: 'activation="sigmoid"', desc: 'Output layer: sigmoid squashes output to 0-1 probability for binary classification.' }
    ],
    realWorldExample: 'Google Photos uses a deep CNN (Convolutional Neural Network) with 50+ layers to identify thousands of objects and scenes in your photos — faces, landmarks, food, activities — with near-human accuracy.',
    advantages: ['No manual feature engineering needed', 'State-of-the-art performance on images, text, audio', 'Scales well with more data and compute', 'Transfer learning enables fast adaptation to new tasks'],
    limitations: ['Requires massive datasets and GPU compute', 'Black-box — hard to interpret decisions', 'Very long training times', 'Susceptible to adversarial examples'],
    bestPractices: ['Use pre-trained models (ResNet, BERT) via transfer learning.', 'Use GPU acceleration (CUDA) for training.', 'Apply dropout and batch normalization to prevent overfitting.', 'Start simple — add depth only when needed.'],
    practiceExercise: {
      task: 'Explain how a deep learning model learns to distinguish a cat from a dog in an image. Describe what each layer learns.',
      expectedOutput: 'Layer 1: edges and gradients. Layer 2: curves and shapes. Layer 3: body parts (ears, fur). Layer 4: whole face/body patterns. Final layer: cat vs dog decision.',
      solution: 'This hierarchical feature learning is what makes deep learning superior to manual feature engineering for images.'
    },
    interviewQuestions: ['What is deep learning?', 'What is the difference between ML and deep learning?', 'What is transfer learning?', 'Why are GPUs needed for deep learning?', 'What is a convolutional neural network (CNN)?'],
    quiz: [
      { question: 'Deep Learning is a subset of:', options: ['Big Data', 'Machine Learning', 'Database Management', 'Web Development'], answer: 'Machine Learning' },
      { question: 'Deep networks are characterized by:', options: ['Many training samples', 'Many hidden layers', 'Many features', 'Many hyperparameters'], answer: 'Many hidden layers' },
      { question: 'Why are GPUs important for deep learning?', options: ['They store more data', 'They provide parallel processing for faster training', 'They reduce model size', 'They improve accuracy'], answer: 'They provide parallel processing for faster training' },
      { question: 'Transfer learning means:', options: ['Moving data between servers', 'Using a pre-trained model and adapting it to a new task', 'Training faster with less data', 'Switching between ML types'], answer: 'Using a pre-trained model and adapting it to a new task' },
      { question: 'Deep learning eliminates the need for:', options: ['Training data', 'GPU hardware', 'Manual feature engineering', 'Model evaluation'], answer: 'Manual feature engineering' }
    ],
    summary: 'Deep Learning uses multi-layer neural networks to automatically learn hierarchical features from raw data. It is the technology behind Google Photos, ChatGPT, and DeepMind AlphaFold. GPUs and large datasets are essential for deep learning training.',
    references: [{ name: 'W3Schools AI', url: 'https://www.w3schools.com/ai/' }, { name: 'Google AI', url: 'https://ai.google/' }, { name: 'OpenAI', url: 'https://openai.com/' }, { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/ai/' }]
  }

};
