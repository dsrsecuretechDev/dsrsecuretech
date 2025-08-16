import {
  Code2,
  Globe,
  Smartphone,
  Monitor,
  Link,
  Palette,
  Building,
  Cloud,
  UploadCloud,
  Server,
  GitBranch,
  Box,
  Zap,
  Shield,
  ShieldCheck,
  Search,
  Activity,
  FileSearch,
  Lock,
  ClipboardCheck,
  Globe2,
  Layout,
  ShoppingCart,
  TrendingUp,
  Megaphone,
  FileText,
  Network,
  Bitcoin,
  FileCog,
  HardDriveDownload,
  DatabaseBackup,
  DatabaseZap,
  User,
  CircleFadingPlus,
  BrainCircuit,
  FileChartPie,
  Cpu,
  Bot,
  Volleyball,
  MessageSquareMore,
  Lightbulb,
  SquarePen,
  CalendarSync,
  UsersRound,
  FolderHeart,
  Crown,
  UserCog,
} from "lucide-react";

export const services = [
  {
    category: "Software Development Services",
    description: [
      "<b>Building custom software solutions</b> to meet business needs across web, mobile, and desktop platforms.",
      `Design, train, and deploy AI models to power next-gen applications. You’ll work with deep learning, NLP, and data pipelines to solve complex problems and enhance automation. Design, train, and deploy AI models to power next-gen applications.`,
      `You’ll work with deep learning, NLP, and data pipelines to solve complex problems and enhance automation.Design, train, and deploy AI models to power next-gen applications.`,
      ` You’ll work with deep learning, NLP, and data pipelines to solve complex problems and enhance automation.Design, train, and deploy AI models to power next-gen applications. You’ll work with deep learning, NLP, and data pipelines to solve complex problems and enhance automation.`,
    ],
    icon: Code2,
    services: [
      {
        name: "Custom Web Application Development",
        description: [
          "Applications designed specifically for your business goals and workflows.",
          "Built to grow with your business without compromising performance.",
          `Intuitive interfaces for enhanced usability and engagement.`,
          `Implementing robust security measures from the ground up.`,
          "Seamless performance across devices and browsers.",
          "Easily connect with existing systems, APIs, and third-party services.",
          "Fast, efficient, and reliable applications for smooth operation.",
          "Continuous updates, maintenance, and feature enhancements.",
        ],
        icon: Globe,
      },
      {
        name: "Mobile App Development",
        description: [
          "Apps tailored to your business needs and target audience.",
          "Build once and deploy on iOS and Android with seamless performance.",
          "High-performance apps optimized for specific platforms.",
          "Engaging, intuitive designs that enhance user experience.",
          "Built-in security features to protect user data and privacy.",
          "Connect apps with existing systems, cloud services, and third-party APIs.",
          "Smooth, fast, and responsive apps for better retention.",
          "Continuous improvements, bug fixes, and new features post-launch.",
        ],
        icon: Smartphone,
      },
      {
        name: "Desktop Application Development",
        description: [
          "Applications built to meet your specific business requirements.",
          "Develop apps for Windows, macOS, and Linux with consistent performance.",
          "Optimized for speed, stability, and long-term use.",
          "Intuitive designs for improved usability and productivity.",
          "Advanced security measures to safeguard data and operations.",
          "Seamlessly connect with databases, APIs, and enterprise systems.",
          "Ensure operations continue without internet connectivity.",
          "Regular updates, bug fixes, and feature enhancements.",
        ],
        icon: Monitor,
      },
      {
        name: "API Development & Integration",
        description: [
          "Build APIs tailored to your business logic and workflows.",
          "Seamlessly connect external services and tools to your systems.",
          "Develop modern, scalable, and secure API architectures.",
          "Ensure safe transmission with encryption and authentication protocols.",
          "Enable modular, efficient, and scalable application development.",
          "Integrate APIs for instant updates and live data synchronization.",
          "Modernize and connect older systems to new technologies.",
          "Provide thorough testing and clear documentation for smooth adoption.",
        ],
        icon: Link,
      },
      {
        name: "UI/UX Design Services",
        description: [
          "Create interfaces that prioritize usability and user satisfaction.",
          "Visualize concepts and workflows before development.",
          "Ensure seamless experiences across devices and screen sizes.",
          "Test and refine user journeys with clickable mockups.",
          "Align designs with your brand identity and style guide.",
          "Validate designs with real users for maximum effectiveness.",
          "Design for inclusivity and meet global accessibility standards.",
          "Iteratively enhance designs based on feedback and analytics.",
        ],
        icon: Palette,
      },
      {
        name: "Enterprise Software Solutions",
        description: [
          "Tailored software to meet complex business needs.",
          "Streamline operations and enhance customer relationship management.",
          "Build solutions that grow with your organization.",
          "Optimize workflows and reduce manual effort through automation.",
          "Connect disparate systems for seamless data flow.",
          "Access enterprise tools securely from anywhere.",
          "Protect sensitive business data from threats.",
          "Ensure software stays updated, secure, and efficient.",
        ],
        icon: Building,
      },
    ],
  },
  {
    category: "Cloud & DevOps Services",
    description: [
      "Seamlessly move applications, databases, and workloads to leading cloud platforms (AWS, Azure, GCP) with minimal downtime, enhanced performance, and cost efficiency.",
      "Implement tools like Terraform and Ansible to automate infrastructure provisioning, configuration, and scaling—reducing manual work and human error.",
      `Set up continuous integration and delivery pipelines for faster, more reliable software releases, with automated testing and deployment.`,
      `Build and manage containerized applications using Docker and Kubernetes for portability, scalability, and efficient resource usage.`,
      "Design systems that grow with your business while optimizing speed, load handling, and resource consumption.",
      "Apply best practices and frameworks to protect cloud workloads, ensuring compliance with GDPR, ISO 27001, HIPAA, and other standards.",
      "Use advanced monitoring and alert systems to track application health, performance, and security 24/7, preventing downtime.",
      "Establish robust recovery plans and automated backups to ensure business continuity in case of failures or cyberattacks.",
    ],
    icon: Cloud,
    services: [
      {
        name: "Cloud Migration & Deployment",
        description: [
          "Move applications, data, and workloads to the cloud with minimal downtime.",
          "Deploy across AWS, Azure, Google Cloud, or hybrid environments.",
          "Evaluate systems for compatibility, performance, and security before migration.",
          "Ensure safe transfer while meeting GDPR, HIPAA, and other standards.",
          "Optimize or re-architect apps for cloud-native performance.",
          "Configure resources for efficiency and budget control.",
          "Implement backup and recovery solutions in the cloud.",
          "Continuous monitoring, troubleshooting, and performance tuning.",
        ],
        icon: UploadCloud,
      },
      {
        name: "Infrastructure as Code",
        description: [
          "Deploy and configure servers, networks, and resources through code.",
          "Eliminate manual errors by defining infrastructure in scripts and templates.",
          "Manage infrastructure across AWS, Azure, Google Cloud, and hybrid setups.",
          "Track changes and roll back to previous configurations easily.",
          "Rapidly scale resources up or down as business needs change.",
          "Embed security controls and compliance checks into your code.",
          "Speed up infrastructure setup for development and production environments.",
          "Restore infrastructure quickly from code in case of failures.",
        ],
        icon: Server,
      },
      {
        name: "CI/CD Pipeline Setup",
        description: [
          "Streamline code integration, testing, and deployment.",
          "Automatically merge and test code changes for early issue detection.",
          "Deliver updates to production with minimal manual intervention.",
          "Configure pipelines for dev, staging, and production environments.",
          "Set up with GitHub Actions, GitLab CI, Jenkins, Azure DevOps, and more.",
          "Ensure quality with unit, integration, and performance testing in the pipeline.",
          "Quickly revert to stable builds in case of deployment issues.",
          "Track pipeline performance and deployment metrics in real-time.",
        ],
        icon: GitBranch,
      },
      {
        name: "Containerization & Orchestration",
        description: [
          "Package applications with all dependencies for consistent deployment.",
          "Build, deploy, and manage containers at scale.",
          "Enable modular, scalable, and independent service deployment.",
          "Adjust resources dynamically based on demand.",
          "Ensure uptime with self-healing container orchestration.",
          "Run containers seamlessly across cloud environments.",
          "Implement best practices for container image and runtime security.",
          "Track container health, performance, and usage in real time.",
        ],
        icon: Box,
      },
      {
        name: "Serverless Architecture",
        description: [
          "Build apps that run only when triggered, reducing costs.",
          "Expertise in leading serverless platforms.",
          "Eliminate the need to maintain or provision infrastructure.",
          "Automatically handle varying workloads without manual intervention.",
          "Focus on code and features, not infrastructure setup.",
          "Optimize costs by paying only for actual usage.",
          "Integrate serverless functions seamlessly with APIs and services.",
          "High availability and fault tolerance by design.",
        ],
        icon: Zap,
      },
      {
        name: "Cloud Security & Backup",
        description: [
          "Safeguard applications, data, and workloads from cyber threats.",
          "Secure data at rest and in transit with advanced encryption protocols.",
          "Control and monitor who can access cloud resources.",
          "Proactively identify and mitigate security risks.",
          "Meet industry standards like GDPR, HIPAA, and ISO 27001.",
          "Schedule and execute regular backups for business continuity.",
          "Ensure rapid recovery in case of data loss or outages.",
          "Apply consistent security policies across AWS, Azure, and GCP.",
        ],

        icon: Shield,
      },
    ],
  },
  {
    category: "Cybersecurity Services",
    description: [
      "Building custom software solutions to meet business needs across web, mobile, and desktop platforms.",
      "Design, train, and deploy AI models to power next-gen applications. You’ll work with deep learning, NLP, and data pipelines to solve complex problems and enhance automation. Design, train, and deploy AI models to power next-gen applications.",
      `You’ll work with deep learning, NLP, and data pipelines to solve complex problems and enhance automation.Design, train, and deploy AI models to power next-gen applications.`,
      ` You’ll work with deep learning, NLP, and data pipelines to solve complex problems and enhance automation.Design, train, and deploy AI models to power next-gen applications. You’ll work with deep learning, NLP, and data pipelines to solve complex problems and enhance automation.`,
    ],
    icon: ShieldCheck,
    services: [
      {
        name: "Vulnerability Assessment & Penetration Testing",
        description: ["Identify vulnerabilities and reduce security risks"],
        icon: Search,
      },
      {
        name: "Threat Monitoring & Incident Response",
        description: "Real-time monitoring and quick threat mitigation.",
        icon: Activity,
      },
      {
        name: "Digital Forensics",
        description: "Investigating cyber incidents and recovering data.",
        icon: FileSearch,
      },
      {
        name: "Firewall & Endpoint Security",
        description: "Securing devices and networks from unauthorized access.",
        icon: Lock,
      },
      {
        name: "Compliance & Security Audits",
        description: "Ensuring compliance with ISO, GDPR, and HIPAA.",
        icon: ClipboardCheck,
      },
      {
        name: "Zero Trust Network Access (ZTNA)",
        description:
          "ZTNA verifies every user and device, ensuring secure access without VPNs.",
        icon: Network,
      },
    ],
  },
  {
    category: "Web & Digital Services",
    description: [
      "Craft unique, brand-focused designs that captivate and engage your audience.",
      "Build websites that adapt flawlessly to desktops, tablets, and mobile devices.",
      `Develop secure, scalable online stores with smooth shopping experiences and payment integrations.`,
      `Implement platforms like WordPress, Drupal, or custom CMS for easy content updates.`,
      "Design intuitive interfaces and user journeys to maximize engagement and conversions.",
      "Ensure websites are optimized for search engines from the ground up.",
      "Deliver fast-loading websites that enhance user satisfaction and SEO rankings.",
      "Protect websites from threats with SSL, secure coding practices, and ongoing monitoring.",
      "Provide updates, fixes, and improvements to keep your site running smoothly.",
    ],
    icon: Globe2,
    services: [
      {
        name: "Website Design & Development",
        description: "Responsive, SEO-friendly, and high-performance websites.",
        icon: Layout,
      },
      {
        name: "E-commerce Development",
        description: "Custom online stores with secure payment integration.",
        icon: ShoppingCart,
      },
      {
        name: "SEO Optimization",
        description: "Improving website rankings and online visibility.",
        icon: TrendingUp,
      },
      {
        name: "Digital Marketing",
        description: "Brand building and lead generation campaigns.",
        icon: Megaphone,
      },
      {
        name: "CMS Development",
        description: "Custom or WordPress-based content management systems.",
        icon: FileText,
      },
    ],
  },
  {
    category: "Blockchain Security",
    description: [
      "Review and test smart contracts to detect vulnerabilities, logic flaws, and security gaps before deployment.",
      "Protect consensus mechanisms, nodes, and networks from attacks like 51% exploits and double-spending.",
      `Ensure transaction integrity, prevent manipulation, and secure user assets.`,
      `Mitigate risks in decentralized finance platforms through code audits, penetration testing, and monitoring.`,
      "Safeguard NFT platforms against fraud, unauthorized access, and data tampering.",
      "Quickly detect and respond to blockchain-related breaches or anomalies.",
      "Align blockchain systems with security best practices and legal requirements.",
      "Track blockchain activity in real time to prevent suspicious or malicious actions.",
    ],
    icon: Bitcoin,
    services: [
      {
        name: "Smart Contract Development",
        description:
          "We build and test secure, reliable smart contracts to ensure flawless execution.",
        icon: FileCog,
      },
      {
        name: "Infrastructure Security",
        description:
          "Protect consensus mechanisms, nodes, and networks from attacks like 51% exploits and double-spending.",
        icon: FileCog,
      },
      {
        name: "Transaction Security",
        description:
          "Ensure transaction integrity, prevent manipulation, and secure user assets.",
        icon: FileCog,
      },
      {
        name: "DeFi Security Solutions",
        description:
          "Mitigate risks in decentralized finance platforms through code audits, penetration testing, and monitoring.",
        icon: FileCog,
      },
      {
        name: "NFT Security",
        description:
          "Safeguard NFT platforms against fraud, unauthorized access, and data tampering.",
        icon: FileCog,
      },
      {
        name: "Incident Response & Recovery",
        description:
          "Quickly detect and respond to blockchain-related breaches or anomalies.",
        icon: FileCog,
      },
      {
        name: "Compliance & Risk Management",
        description:
          "Align blockchain systems with security best practices and legal requirements.",
        icon: FileCog,
      },
    ],
  },
  {
    category: "Data Solutions & Security",
    description: [
      "Manage and analyze large datasets through ETL, predictive modeling, and real-time analytics to drive business growth.",
      "Protect sensitive data from unauthorized access, corruption, or loss while ensuring adherence to standards like GDPR, HIPAA, and ISO 27001.",
      `Use advanced analytics, visualization tools, and AI models to uncover trends, optimize performance, and guide decision-making.`,
      `Forecast future outcomes and behaviors using machine learning and statistical techniques.`,
      "Establish policies, standards, and processes to ensure data accuracy, consistency, and availability.",
      "Identify data-related risks and implement strategies to reduce exposure.",
      "Secure data stored and processed in cloud environments with encryption, access controls, and monitoring.",
      "Track data usage and anomalies instantly to prevent breaches or errors.",
    ],
    icon: FileText,
    services: [
      {
        name: "Data Analytics & Insights",
        description:
          "We turn raw data into actionable insights using analytics, visualization, and AI.",
        icon: HardDriveDownload,
      },
      {
        name: "Data Security & Compliance",
        description:
          "We protect sensitive data and ensure compliance with standards like GDPR, HIPAA, and ISO 27001.",
        icon: DatabaseBackup,
      },
      {
        name: "Big Data Processing",
        description:
          "We turn big data into business growth through ETL, predictive modeling, and real-time analytics.",
        icon: DatabaseZap,
      },
    ],
  },
  {
    category: "Political Consultancy",
    description: [
      "Plan, execute, and optimize political campaigns for maximum reach and impact.",
      "Study demographics, sentiment, and behavior to target key voter segments effectively.",
      `Forecast election outcomes, voter turnout, and issue-based responses using AI-driven analytics.`,
      `Run targeted ads, social media campaigns, and online outreach programs.`,
      "Protect and enhance public image through strategic communication and rapid response.",
      "Build a strong, recognizable identity that resonates with voters.",
      "Build a strong, recognizable identity that resonates with voters.",
      "ngage volunteers, supporters, and local communities for ground-level campaign success.",
    ],
    icon: User,
    services: [
      {
        name: "Political Data Analytics",
        description:
          "We use voter data to build predictive models that guide impactful campaign decisions.",
        icon: Layout,
      },
      {
        name: "Political Digital Reputation Management",
        description: "Custom online stores with secure payment integration.",
        icon: CircleFadingPlus,
      },
      {
        name: "Election Management Service",
        description: "Custom online stores with secure payment integration.",
        icon: CircleFadingPlus,
      },
      {
        name: "Office Management Service",
        description: "Custom online stores with secure payment integration.",
        icon: CircleFadingPlus,
      },
      {
        name: "Campaign Strategy & Management",
        description: "Custom online stores with secure payment integration.",
        icon: CircleFadingPlus,
      },
      {
        name: "Voter Data Analysis",
        description: "Custom online stores with secure payment integration.",
        icon: CircleFadingPlus,
      },
      {
        name: "Digital Campaign Management",
        description: "Custom online stores with secure payment integration.",
        icon: CircleFadingPlus,
      },
      {
        name: "Reputation & Crisis Management",
        description: "Custom online stores with secure payment integration.",
        icon: CircleFadingPlus,
      },
      {
        name: "Political Branding",
        description: "Custom online stores with secure payment integration.",
        icon: CircleFadingPlus,
      },
      {
        name: "Speech & Content Development",
        description: "Custom online stores with secure payment integration.",
        icon: CircleFadingPlus,
      },
    ],
  },
  {
    category: "Artificial Intelligence",
    description: [
      "Identify patterns, trends, and insights from complex datasets to drive smarter decisions.",
      "Create content, automate workflows, and enhance creativity using advanced generative AI tools.",
      `Deploy conversational agents for 24/7 customer support, lead generation, and engagement.`,
      `Forecast trends, user behavior, and business or campaign outcomes with AI-powered models.`,
      "Deliver tailored content, recommendations, and offers to individual users.",
      "Automate image and video analysis for security, quality control, and operational insights.",
      "Extract meaning, sentiment, and intent from text and speech for better communication and analysis.",
    ],
    icon: BrainCircuit,
    services: [
      {
        name: "AI-Powered Analytics",
        description:
          "Use machine learning to find patterns, trends, and insights in data.",
        icon: FileChartPie,
      },
      {
        name: "Generative AI Solutions",
        description:
          "Use generative AI to create content, automate tasks, and improve decisions.",
        icon: Cpu,
      },
      {
        name: "Chatbots & Virtual Assistants",
        description: "Deploy AI chatbots for 24/7 support and engagement.",
        icon: Bot,
      },
      {
        name: "Predictive Modeling",
        description:
          "Use AI predictive models to forecast trends, behavior, and outcomes.",
        icon: Volleyball,
      },
      {
        name: "AI-Driven Personalization",
        description:
          "Deliver personalized content, recommendations, and experiences.",
        icon: Volleyball,
      },
    ],
  },
  {
    category: "Social Media Services",
    description: [
      "Develop tailored strategies for Facebook, Instagram, Twitter (X), LinkedIn, YouTube, and emerging platforms to boost reach, engagement, and conversions.",
      "Design and publish high-quality, engaging content optimized for each platform.",
      `Monitor and respond to audience interactions to build strong, loyal relationships.`,
      `Run targeted ad campaigns that maximize ROI and brand visibility.`,
      "Use advanced analytics to track performance, trends, and engagement metrics for continuous improvement.",
      "Protect brand image by responding to negative press or comments swiftly and effectively.",
      "Identify and collaborate with influencers to amplify brand messaging.",
      "Monitor online conversations to understand public sentiment and identify opportunities.",
    ],
    icon: MessageSquareMore,
    services: [
      {
        name: "Social Media Strategy",
        description:
          "Create tailored strategies to boost reach, engagement, and conversions.",
        icon: Lightbulb,
      },
      {
        name: "Content Creation",
        description:
          "Design and produce optimized posts, graphics, and videos.",
        icon: SquarePen,
      },
      {
        name: "Scheduling & Management",
        description: "Plan, publish, and maintain consistent posting.",
        icon: CalendarSync,
      },
      {
        name: "Community Engagement",
        description: "Interact with followers to build strong relationships.",
        icon: UsersRound,
      },
      {
        name: "Social Listening",
        description: "Monitor mentions, sentiment, and industry trends.",
        icon: FolderHeart,
      },
      {
        name: "Reputation Management",
        description: "Protect and enhance online image.",
        icon: Crown,
      },
      {
        name: "Political Campaign Support",
        description:
          "Run targeted, data-driven social campaigns for leaders and parties.",
        icon: UserCog,
      },
    ],
  },
];
