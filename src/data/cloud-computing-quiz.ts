const cloudComputingQuiz = [
  {
    Question:
      "What is one of the key benefits of following CNCF standards in cloud-native app development?",
    Answer:
      "Ensuring apps are built in the right way and reducing vendor lock-in",
    Distractor1: "Increased vendor lock-in",
    Distractor2: "Slower development process",
    Distractor3: "Reduced compatibility with other services",
    Explanation:
      "Following CNCF standards ensures that cloud-native apps are built using best practices, reducing the risk of vendor lock-in and promoting compatibility with a wide range of cloud services and tools.",
    Link: "https://www.freecodecamp.org/news/get-started-with-cloud-native/"
  },
  {
    Question:
      "Which organization champions standards for cloud-native services and helps reduce vendor lock-in?",
    Answer: "CNCF (Cloud Native Computing Foundation)",
    Distractor1: "AWS (Amazon Web Services)",
    Distractor2: "Microsoft Azure",
    Distractor3: "Google Cloud",
    Explanation:
      "The CNCF (Cloud Native Computing Foundation) is known for championing standards in cloud-native services. Following these standards helps reduce vendor lock-in and ensures compatibility across different services.",
    Link: "https://www.freecodecamp.org/news/get-started-with-cloud-native/"
  },
  {
    Question:
      "Which of the following is a benefit for developing cloud-native apps?",
    Answer: "Scalability",
    Distractor1: "Advanced algorithms",
    Distractor2: "Significant amounts of downtime",
    Distractor3: "Static application structure",
    Explanation:
      "Scalability is a benefit because it allows cloud-native applications to have flexible deployment options across the network making it easier to develop, deploy, and iterate on the application.",
    Link: "https://www.freecodecamp.org/news/get-started-with-cloud-native/"
  },
  {
    Question:
      "How does container orchestration, such as Kubernetes, help in deploying software updates in cloud-native apps?",
    Answer:
      "It automatically replaces downed instances with minimal or zero downtime",
    Distractor1: "It causes significant downtime during updates",
    Distractor2: "It delays the deployment of software updates",
    Distractor3: "It requires manual intervention for every update",
    Explanation:
      "Container orchestration systems like Kubernetes automatically manage the deployment of containers, ensuring that if an instance goes down, it's replaced quickly to minimize or eliminate downtime.",
    Link: "https://www.freecodecamp.org/news/get-started-with-cloud-native/"
  },
  {
    Question:
      "Which model do cloud-native apps typically follow for software updates, allowing for immediate deployment?",
    Answer: "Continuous delivery model",
    Distractor1: "Waterfall model",
    Distractor2: "Agile model",
    Distractor3: "V-Model",
    Explanation:
      "Cloud-native apps commonly follow the continuous delivery model, enabling software updates to be shipped immediately, leading to faster development and deployment cycles.",
    Link: "https://www.freecodecamp.org/news/get-started-with-cloud-native/"
  },
  {
    Question:
      "What architectural approach do cloud-native apps typically use to build independently deployable components?",
    Answer: "Microservices architecture",
    Distractor1: "Monolithic architecture",
    Distractor2: "Hybrid architecture",
    Distractor3: "Serverless architecture",
    Explanation:
      "Cloud-native apps often use the microservices architecture, which breaks down applications into small, independent components that can be developed, managed, and deployed separately. This architectural approach enhances independence and flexibility.",
    Link: "https://www.freecodecamp.org/news/get-started-with-cloud-native/"
  },
  {
    Question:
      "How does the use of microservices in cloud-native apps affect their independence?",
    Answer:
      "It allows components to be built, managed, and deployed independently",
    Distractor1: "It makes them dependent on each other",
    Distractor2: "It requires all components to be deployed simultaneously",
    Distractor3: "It slows down the development process.",
    Explanation:
      "Microservices architecture allows individual components to be developed, managed, and deployed independently, promoting independence and reducing the impact of changes in one component on others.",
    Link: "https://www.freecodecamp.org/news/get-started-with-cloud-native/"
  },
  {
    Question:
      "What is the key advantage of file storage compared to block storage regarding multiple compute instances?",
    Answer:
      "Multiple instances can be mounted on the same file storage device in file storage.",
    Distractor1: "Block storage is more scalable for multiple instances.",
    Distractor2:
      "File storage is not suitable for use with multiple compute instances.",
    Distractor3:
      "Block storage allows instances to share data more efficiently.",
    Explanation:
      "In file storage, multiple compute instances can share and access the same file storage device, making it easier to collaborate and share data among different instances. This is a key advantage over block storage, which is often more limited in this regard.",
    Link: "https://www.freecodecamp.org/news/cloud-storage-options/"
  },
  {
    Question: "Which major cloud providers offer file storage options?",
    Answer: "AWS, GCP, and Azure.",
    Distractor1: "AWS, GCP, and IBM Cloud.",
    Distractor2: "Microsoft, Oracle, and Google Cloud.",
    Distractor3: "AWS, Azure, and Alibaba Cloud.",
    Explanation:
      "Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure are major cloud providers that offer file storage solutions, such as AWS Elastic File Storage (EFS), GCP Cloud Filestore, and Azure Files.",
    Link: "https://www.freecodecamp.org/news/cloud-storage-options/"
  },
  {
    Question:
      "In the context of file storage, what is the role of the operating system?",
    Answer:
      "To abstract away the block storage and create a file cabinet-like structure.",
    Distractor1: "To expose the underlying block storage to applications.",
    Distractor2: "To provide a low-level interface for data manipulation.",
    Distractor3: "To optimize file storage for performance.",
    Explanation:
      "In file storage, the operating system abstracts the underlying block storage, presenting a hierarchical file structure to users and applications. This abstraction simplifies data access and management.",
    Link: "https://www.freecodecamp.org/news/cloud-storage-options/"
  },
  {
    Question:
      "How does file storage improve data management compared to block storage?",
    Answer:
      "File storage groups related blocks into files and organizes them into directories.",
    Distractor1:
      "File storage simplifies access to applications by exposing the underlying block addresses.",
    Distractor2:
      "File storage allows you to read and write individual data blocks directly.",
    Distractor3: "File storage is more cost-effective for all use cases.",
    Explanation:
      "File storage improves data management by grouping related blocks into files and organizing those files within directories, providing a more intuitive and structured way to access and manage data.",
    Link: "https://www.freecodecamp.org/news/cloud-storage-options/"
  },
  {
    Question:
      "Which of the following best describes file storage's hierarchical structure?",
    Answer:
      "The arrangement of files and directories for organizing and managing data.",
    Distractor1: "A bookshelf-like organization of blocks.",
    Distractor2: "A low-level interface for reading and writing data blocks.",
    Distractor3: "A complex system of block addresses for data retrieval.",
    Explanation:
      "File storage's hierarchical structure refers to the way data is organized into files and directories, allowing for efficient data management and access.",
    Link: "https://www.freecodecamp.org/news/cloud-storage-options/"
  },
  {
    Question:
      "What is the primary difference between block storage and file storage?",
    Answer:
      "File storage introduces the concept of files and directories on top of block storage.",
    Distractor1: "Block storage is more abstract than file storage.",
    Distractor2:
      "Block storage is hierarchical, while file storage deals with individual blocks",
    Distractor3:
      "Block storage is typically used for cloud storage, while file storage is used for local storage.",
    Explanation:
      "Block storage is a low-level storage abstraction that deals with individual data blocks but lacks the concept of files and directories. File storage, on the other hand, builds on top of block storage and introduces the organizational structure of files and directories.",
    Link: "https://www.freecodecamp.org/news/cloud-storage-options/"
  },
  {
    Question:
      "What types of applications are now available as online software equivalents through the growing marketplace of SaaS tools?",
    Answer:
      "Accounting, computer-assisted design (CAD), and graphic design solutions",
    Distractor1: "Hardware management tools",
    Distractor2: "Operating system utilities",
    Distractor3: "Gaming software",
    Explanation:
      "The growing marketplace of SaaS tools offers online software equivalents for various applications, including accounting, CAD, and graphic design solutions. This allows users to access and use these applications in the cloud without the need for standalone workstations.",
    Link: "https://www.freecodecamp.org/news/modern-compute-platforms/"
  },
  {
    Question:
      "What are Microsoft's Office 365 and Google's G Suite examples of?",
    Answer: "SaaS office productivity tools",
    Distractor1: "IaaS solutions",
    Distractor2: "PaaS solutions",
    Distractor3: "Graphic design solutions",
    Explanation:
      "Both Microsoft Office 365 and Google G Suite are cloud based examples of Software as a Service (SaaS) office productivity tools, providing applications like word processing, spreadsheets, and email as online services.",
    Link: "https://www.freecodecamp.org/news/modern-compute-platforms/"
  },
  {
    Question: "Which of the following is an example of a major IaaS player?",
    Answer: "Amazon EC2",
    Distractor1: "AWS Elastic Beanstalk",
    Distractor2: "Salesforce Lightning Platform",
    Distractor3: "Google G Suite",
    Explanation:
      "Amazon Elastic Compute Cloud (EC2) is a well-known and widely used Infrastructure as a Service (IaaS) offering provided by Amazon Web Services (AWS).",
    Link: "https://www.freecodecamp.org/news/modern-compute-platforms/"
  },
  {
    Question:
      "What is the primary responsibility of users in an Infrastructure as a Service (IaaS) environment?",
    Answer: "Managing the operating system and software.",
    Distractor1: "Managing hardware, networking, and security elements.",
    Distractor2: "Managing end-user interfaces.",
    Distractor3: "Managing data and code deployment.",
    Explanation:
      "In an IaaS environment, the provider takes care of the underlying hardware, networking, and security, while users are responsible for managing the operating system and any additional software they install on their virtual server instances.",
    Link: "https://www.freecodecamp.org/news/modern-compute-platforms/"
  },
  {
    Question:
      "Which cloud platforms offer serverless computing services mentioned in the text?",
    Answer: "Amazon Lambda and Azure Functions.",
    Distractor1: "Amazon Elastic Beanstalk and Google Cloud Functions.",
    Distractor2: "Amazon Elastic Beanstalk and Azure App Service.",
    Distractor3: "Google Cloud Run and AWS Fargate.",
    Explanation:
      "Amazon Lambda and Azure Functions are examples of serverless computing platforms that provide services for running code without having to manage server infrastructure.",
    Link: "https://www.freecodecamp.org/news/modern-compute-platforms/"
  },
  {
    Question:
      "Which of the following statements accurately describes serverless computing?",
    Answer:
      "Serverless computing is a form of virtualization that abstracts everything, including application code.",
    Distractor1:
      "Serverless computing involves running software code without any underlying server infrastructure.",
    Distractor2:
      "Serverless computing is similar to virtualization but requires extensive configuration.",
    Distractor3:
      "Serverless platforms like Amazon Lambda and Azure Functions are equivalent to dedicated servers.",
    Explanation:
      "Serverless computing is a form of cloud computing that abstracts server management, including server instance settings, and allows developers to focus only on writing application code.",
    Link: "https://www.freecodecamp.org/news/modern-compute-platforms/"
  },
  {
    Question:
      "What is the main difference between serverless computing and traditional server computing?",
    Answer:
      "Serverless computing doesn't require configuring server instance settings, while traditional computing does.",
    Distractor1:
      "Serverless computing uses physical servers, while traditional computing uses virtual servers.",
    Distractor2:
      "Serverless computing is more cost effective than traditional computing.",
    Distractor3:
      "Serverless computing requires you to see the server physically.",
    Explanation:
      "In traditional server computing, you typically need to configure server instance settings, such as CPU, memory, and networking, which is not required in serverless computing.",
    Link: "https://www.freecodecamp.org/news/modern-compute-platforms/"
  },
  {
    Question:
      "What is the key benefit of deploying Edge Computing resources in managing data from IoT devices?",
    Answer: "Consuming and transforming IoT data faster at the network edges.",
    Distractor1: "Encouraging IoT devices to move closer to data centers.",
    Distractor2:
      "The act of asking customers to move closer to server locations.",
    Distractor3:
      "Increasing the physical distance between IoT devices and servers.",
    Explanation:
      "The key benefit of deploying Edge Computing for managing IoT data is the ability to process and transform data quickly at the network edges, improving responsiveness and efficiency in IoT applications.",
    Link: "https://www.freecodecamp.org/news/modern-compute-platforms/"
  },
  {
    Question: "What is Edge Computing?",
    Answer:
      "The installation of distributed networks of smaller servers to reduce latency.",
    Distractor1:
      "The process of magically reducing latency without any physical changes.",
    Distractor2:
      "The act of asking customers to move closer to server locations.",
    Distractor3:
      "The use of long-distance data transfer to improve network efficiency.",
    Explanation:
      "Edge Computing refers to the strategy of placing smaller servers or computing resources closer to the location where data is generated or needed, such as near end-users or IoT devices. This approach is used to improve the speed and responsiveness of network services and applications.",
    Link: "https://www.freecodecamp.org/news/modern-compute-platforms/"
  },
  {
    Question:
      "In a cloud-native architecture, which of the following is not considered a core component?",
    Answer: "Monolithic architecture",
    Distractor1: "Microservices architecture",
    Distractor2: "Containerization",
    Distractor3: "CI/CD (Continuous Integration/Continuous Deployment)",
    Explanation:
      "Cloud-native architecture often focuses on the use of microservices, containers, and continuous integration/continuous deployment (CI/CD) practices, which are more agile and scalable than monolithic architectures.",
    Link: "https://www.freecodecamp.org/news/get-started-with-cloud-native/"
  },
  {
    Question: "Which statement is incorrect for block storage?",
    Answer: "It stores all data as objects in a flat structure",
    Distractor1: "It is the lowest level abstraction of storage.",
    Distractor2: "It is bootable.",
    Distractor3:
      "Block storage devices are usually only attached to a single instance.",
    Explanation:
      "Block storage does not store data as objects in a flat structure. Instead, it divides data into fixed-sized blocks and provides low-level access to these blocks. Object storage, on the other hand, stores data as objects in a flat structure with associated metadata.",
    Link: "https://www.freecodecamp.org/news/cloud-storage-options/"
  },
  {
    Question:
      "Which cloud computing delivery model focuses on providing infrastructure as a service to users?",
    Answer: "IaaS",
    Distractor1: "FaaS",
    Distractor2: "Saas",
    Distractor3: "PaaS",
    Explanation:
      "IaaS cloud computing delivery model focuses on providing infrastructure like servers, networking technology, storage, and data center space as a service to users. This gives users the autonomy to decide what infrastructure is provisioned based on the different needs of their application.",
    Link: "https://www.freecodecamp.org/news/get-started-with-cloud-native/"
  },
  {
    Question:
      "Which cloud computing strategy is often referred to as 'Lift and Shift'?",
    Answer: "Rehosting",
    Distractor1: "Repurchase",
    Distractor2: "Replatform",
    Distractor3: "Rearchitect",
    Explanation:
      "The Rehosting strategy is often referred to as 'Lift and Shift' because you are moving your existing data and systems to the cloud with no changes. The advantage of this strategy is that it has a lower risk when migrating to the cloud",
    Link: "https://www.freecodecamp.org/news/advantages-of-cloud-computing/"
  },
  {
    Question:
      "Which of the following is NOT a common strategy in cloud migration?",
    Answer: "Redecorating",
    Distractor1: "Rehosting",
    Distractor2: "Repurchasing",
    Distractor3: "Refactoring",
    Explanation:
      "The term 'Redecorating' is not a recognized strategy in cloud migration. While Rehosting, Repurchasing, and Refactoring are established methods for migrating applications and services to the cloud.",
    Link: "https://www.freecodecamp.org/news/advantages-of-cloud-computing/"
  },
  {
    Question:
      "Which of the following is NOT considered an advantage of cloud computing?",
    Answer: "Depends on network connectivity",
    Distractor1: "Scalability",
    Distractor2: "Globalization",
    Distractor3: "Agility",
    Explanation:
      " Cloud services rely on an internet connection, and if the network experiences downtime or slowdowns, it can affect access to cloud resources and services.",
    Link: "https://www.freecodecamp.org/news/advantages-of-cloud-computing/"
  },
  {
    Question:
      "What cloud computing term refers to the ability to quickly scale resources up or down based on demand?",
    Answer: "Elasticity",
    Distractor1: "Resilience",
    Distractor2: "Orchestration",
    Distractor3: "Virtualization",
    Explanation:
      "Elasticity allows cloud resources to be easily adjusted to handle changing workloads.",
    Link: "https://www.freecodecamp.org/news/aws-and-elasticity-keeping-ahead-of-user-demand/"
  },
  {
    Question: "What is the primary goal of cloud load balancing?",
    Answer: "Distribute traffic evenly across multiple servers or resources",
    Distractor1: "Minimize latency within the cloud network",
    Distractor2: "Increase server capacity",
    Distractor3: "Enhance data encryption in transit",
    Explanation:
      "Cloud load balancing ensures that incoming network traffic is distributed evenly across multiple servers or resources for improved performance.",
    Link: "https://www.freecodecamp.org/news/high-availability-concepts-and-theory/"
  },
  {
    Question:
      "What is the primary advantage of using a serverless architecture in cloud computing?",
    Answer: "Automatic scaling and resource management",
    Distractor1: "Low latency network connections",
    Distractor2: "Complete control over server configuration",
    Distractor3: "Reduced cost of hardware",
    Explanation:
      "Serverless computing automatically scales resources up or down based on demand, eliminating the need for manual resource management.",
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
