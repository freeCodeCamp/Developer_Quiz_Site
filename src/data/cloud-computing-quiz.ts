const cloudComputingQuiz = [
  {
    Question: "Which cloud computing strategy is often referred to as 'Lift and Shift'?",
    Answer: "Rehosting",
    Distractor1: "Repurchase",
    Distractor2: "Replatform",
    Distractor3: "Rearchitect",
    Explanation: "The Rehosting strategy is often referred to as 'Lift and Shift' because you are moving your existing data and systems to the cloud with no changes. The advantage of this strategy is that it has a lower risk when migrating to the cloud",
    Link: "https://www.freecodecamp.org/news/advantages-of-cloud-computing/"
  },
  {
    Question: "Which of the following is NOT a common strategy in cloud migration?",
    Answer: "Redecorating",
    Distractor1: "Rehosting",
    Distractor2: "Repurchasing",
    Distractor3: "Refactoring",
    Explanation: "The term 'Redecorating' is not a recognized strategy in cloud migration. While Rehosting, Repurchasing, and Refactoring are established methods for migrating applications and services to the cloud.",
    Link: "https://www.freecodecamp.org/news/advantages-of-cloud-computing/"
  },
  {
    Question: "Which of the following is NOT considered an advantage of cloud computing?",
    Answer: "Depends on network connectivity",
    Distractor1: "Scalability",
    Distractor2: "Globalization",
    Distractor3: "Agility",
    Explanation: " Cloud services rely on an internet connection, and if the network experiences downtime or slowdowns, it can affect access to cloud resources and services.",
    Link: "https://www.freecodecamp.org/news/advantages-of-cloud-computing/"
  },
  {
    Question: "What cloud computing term refers to the ability to quickly scale resources up or down based on demand?",
    Answer: "Elasticity",
    Distractor1: "Resilience",
    Distractor2: "Orchestration",
    Distractor3: "Virtualization",
    Explanation: "Elasticity allows cloud resources to be easily adjusted to handle changing workloads.",
    Link: "https://www.freecodecamp.org/news/aws-and-elasticity-keeping-ahead-of-user-demand/"
  },
  {
    Question: "What is the primary goal of cloud load balancing?",
    Answer: "Distribute traffic evenly across multiple servers or resources",
    Distractor1: "Minimize latency within the cloud network",
    Distractor2: "Increase server capacity",
    Distractor3: "Enhance data encryption in transit",
    Explanation: "Cloud load balancing ensures that incoming network traffic is distributed evenly across multiple servers or resources for improved performance.",
    Link: "https://www.freecodecamp.org/news/high-availability-concepts-and-theory/"
  },
  {
    Question: "What is the primary advantage of using a serverless architecture in cloud computing?",
    Answer: "Automatic scaling and resource management",
    Distractor1: "Low latency network connections",
    Distractor2: "Complete control over server configuration",
    Distractor3: "Reduced cost of hardware",
    Explanation: "Serverless computing automatically scales resources up or down based on demand, eliminating the need for manual resource management.",
    Link: "https://www.freecodecamp.org/news/how-to-get-started-with-serverless-architecture/"
  },
  {
    Question:
      "Which type of cloud computing focuses on designing a product that is run and managed by the service provider?",
    Answer: "Software as a Service",
    Distractor1: "Platform as a Service",
    Distractor2: "Infrastructure as a Service",
    Distractor3: "Function as a Service",
    Explanation:
      "SaaS is a cloud-based software solution in which software providers deliver applications to users over the internet. SaaS companies provide access to their software most commonly via a website or an app.",
    Link: "https://en.wikipedia.org/wiki/Software_as_a_service"
  },
  {
    Question:
      "Which type of cloud computing focuses on the deployment and management of your apps?",
    Answer: "Platform as a Service",
    Distractor1: "Software as a Service",
    Distractor2: "Infrastructure as a Service",
    Distractor3: "Function as a Service",
    Explanation:
      "PaaS provides access to a platform for companies to create apps, perform web development, or manage other programming projects.",
    Link: "https://www.freecodecamp.org/news/advantages-of-cloud-computing/"
  },
  {
    Question:
      "Which type of cloud computing serves as the basic building blocks for cloud IT?",
    Answer: "Infrastructure as a Service",
    Distractor1: "Platform as a Service",
    Distractor2: "Software as a Service",
    Distractor3: "Function as a Service",
    Explanation:
      "Infrastructure as a Service providers allow users to forgo physical servers or data centers. With IaaS, the provider manages the infrastructure and the clients manage their software and applications.",
    Link: "https://www.freecodecamp.org/news/advantages-of-cloud-computing/"
  },
  {
    Question:
      "Which cloud deployment model is when everything is built on a Cloud Service Provider?",
    Answer: "Public Cloud",
    Distractor1: "Private Cloud",
    Distractor2: "Hybrid Cloud",
    Distractor3: "Multi-Cloud",
    Explanation:
      "Public clouds are the most common type of cloud computing deployment. The cloud resources (like servers and storage) are owned and operated by a third-party cloud service provider and delivered over the internet.",
    Link: "https://www.freecodecamp.org/news/advantages-of-cloud-computing/"
  },
  {
    Question:
      "Which cloud deployment model is when everything is built on a company's own data center?",
    Answer: "Private Cloud",
    Distractor1: "Public Cloud",
    Distractor2: "Hybrid Cloud",
    Distractor3: "Multi-Cloud",
    Explanation:
      "A private cloud consists of cloud computing resources used exclusively by one business or organization. The private cloud can be physically located at your organization's on-site data center, or it can be hosted by a third-party service provider.",
    Link: "https://www.freecodecamp.org/news/advantages-of-cloud-computing/"
  },
  {
    Question:
      "Which cloud deployment model has workloads running across both a company's own data center and a Cloud Service Provider?",
    Answer: "Hybrid Cloud",
    Distractor1: "Public Cloud",
    Distractor2: "Private Cloud",
    Distractor3: "Multi-Cloud",
    Explanation:
      "Hybrid cloud computing refers to a computing environment that combines public cloud and on-premises infrastructure, including private cloud, by allowing data and applications to be shared between them.",
    Link: "https://www.freecodecamp.org/news/advantages-of-cloud-computing/"
  },
  {
    Question:
      "Which cloud deployment model utilizes multiple Cloud Service Providers?",
    Answer: "Multi-Cloud",
    Distractor1: "Public Cloud",
    Distractor2: "Hybrid Cloud",
    Distractor3: "Public Cloud",
    Explanation:
      "Multi-Cloud computing refers to the use of multiple cloud computing services from more than one cloud provider—including private and public clouds—in a heterogeneous environment.",
    Link: "https://www.freecodecamp.org/news/advantages-of-cloud-computing/"
  },
  {
    Question:
      "What cloud term describes when a company decides to build their web application first on a Cloud Service Provider?",
    Answer: "Cloud-First",
    Distractor1: "Cloud-Native",
    Distractor2: "Cloud Platform",
    Distractor3: "Cloud-Last",
    Explanation:
      "Cloud first is considering the cloud before any other possible solution, either when optimizing IT spend or launching new projects",
    Link: "https://www.freecodecamp.org/news/advantages-of-cloud-computing/"
  },
  {
    Question: "What does CSP stand for in Cloud Computing?",
    Answer: "Cloud Service Provider",
    Distractor1: "Cloud Systems Provisioning",
    Distractor2: "Cloud Software Platform",
    Distractor3: "Cloud Systems Platform",
    Explanation:
      "A cloud service provider is a third-party company offering a cloud-based platform, infrastructure, application or storage services.",
    Link: "https://www.freecodecamp.org/news/advantages-of-cloud-computing/"
  },
  {
    Question: "What does VPS stand for in Cloud Computing?",
    Answer: "Virtual Private Server",
    Distractor1: "Virtual Platform Service",
    Distractor2: "Video Platform System",
    Distractor3: "Varied Python Status",
    Explanation:
      "A Virtual Private Server (VPS) is a virtual machine sold as a service by an Internet hosting service.",
    Link: "https://en.wikipedia.org/wiki/Virtual_private_server"
  },
  {
    Question:
      "What phenomenon is closely connected with Technology life cycles?",
    Answer: "K-Waves",
    Distractor1: "K-Pop",
    Distractor2: "Omega Directive",
    Distractor3: "SDLC",
    Explanation: "Cloud is speculated to be the current new K-Wave",
    Link: "https://en.wikipedia.org/wiki/Kondratiev_wave"
  }
];
export default cloudComputingQuiz;
