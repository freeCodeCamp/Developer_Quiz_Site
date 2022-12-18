const devopsQuiz = [
  {
    Question: "What is DevOps?",
    Answer:
      "a combination of software development and IT operations with the goal of shortening the systems development life cycle ",
    Distractor1: "a popular JavaScript library",
    Distractor2: "a popular SQL database",
    Distractor3: "a popular Python library",
    Explanation:
      "DevOps combines software development and IT operations with the goal of shortening the systems development life cycle and providing continuous delivery of software. ",
    Link: "https://www.freecodecamp.org/news/devops-engineering-course-for-beginners/"
  },
  {
    Question: "What is Continuous Integration?",
    Answer:
      "the act of pushing small changes to a repository and running tests on those changes",
    Distractor1: "the act of cloning an entire repository to another computer",
    Distractor2: "the act of resolving a merge conflict in a repository",
    Distractor3: "the act of creating a new branch on a repository",
    Explanation:
      "Continuous Integration(CI) is the act of continuously pushing small changes to a central repository numerous times per day. And those changes are verified by automated computer software that runs the tests that the programmers have defined.",
    Link: "https://www.freecodecamp.org/news/devops-engineering-course-for-beginners/"
  },
  {
    Question: "What is code coverage in DevOps?",
    Answer:
      "a metric used to determine how much of the codebase has been tested",
    Distractor1:
      "a metric used to determine how many commits were pushed to the project in a day",
    Distractor2:
      "a metric used to determine how many developers worked on the project that day",
    Distractor3:
      "a metric used to determine how many project files were added that day",
    Explanation:
      "Code coverage is a metric used to determine how much of the codebase has been tested.",
    Link: "https://youtu.be/j5Zsa_eOXeY?t=2085"
  },
  {
    Question: "What is an ephemeral environment in DevOps?",
    Answer:
      "temporary environments that contain a self contained version of the entire application",
    Distractor1: "environments that will write all of your unit tests for you",
    Distractor2: "environments that will perform code reviews for you",
    Distractor3: "environments that will fix your mistakes as you code",
    Explanation:
      "Ephemeral environments are temporary environments that contain a self contained version of the entire application. Generally, for every feature branch, they're often spun up by a slack bot, or automatically on every commit using DevOps platforms like later ci itself, or Heroku.",
    Link: "https://youtu.be/j5Zsa_eOXeY?t=3456"
  },
  {
    Question: "What is a virtual machine?",
    Answer: "a virtual instance of a computer that can run applications",
    Distractor1: "a type of software that installs project dependencies",
    Distractor2: "a type of software used to remove malware from computers",
    Distractor3:
      "a virtual instance of a computer only used to build mobile games",
    Explanation:
      "A Virtual Machine(VM) is a virtual instance of a computer that can run applications.",
    Link: "https://youtu.be/j5Zsa_eOXeY?t=4255"
  },
  {
    Question: "What is a container in DevOps?",
    Answer:
      "a package that consists of the entire application and its dependencies",
    Distractor1: "a special tool used to install dependencies into a project",
    Distractor2: "a tool used to clone a repository from GitHub",
    Distractor3: "a package used to create unit tests for the project",
    Explanation:
      "A container is a package that consists of the entire application and its dependencies.",
    Link: "https://youtu.be/j5Zsa_eOXeY?t=4255"
  },
  {
    Question: "What are rolling deployments in DevOps?",
    Answer:
      "a deployment strategy for replacing old versions of the app with new versions",
    Distractor1:
      "a deployment strategy for copying an entire application and its dependencies",
    Distractor2:
      "a strategy used to roll back the application to a prior state",
    Distractor3:
      "a strategy used to run test suites multiple times before deploying an application",
    Explanation:
      "Rolling deployments are a popular deployment strategy used to replace old versions of the app with new versions.",
    Link: "https://youtu.be/j5Zsa_eOXeY?t=5002"
  },
  {
    Question: "What is Continuous Deployment in DevOps?",
    Answer:
      "a strategy used to push code into production that passed automated testing",
    Distractor1:
      "a strategy used to roll back the application to a prior state",
    Distractor2:
      "a strategy used to determine how much of the codebase has been tested",
    Distractor3:
      "a deployment strategy for replacing old versions of the app with new versions",
    Explanation:
      "Continuous Deployment is a strategy used to push code into production that passed automated testing",
    Link: "https://youtu.be/j5Zsa_eOXeY?t=5315"
  },
  {
    Question: "Which of the following is NOT a common practice in DevOps?",
    Answer: "Continuous rebasing",
    Distractor1: "Continuous development",
    Distractor2: "Continuous deployment",
    Distractor3: "Continuous integration",
    Explanation:
      "Some common practices in DevOps include Continuous development, Continuous deployment and Continuous integration.",
    Link: "https://youtu.be/j5Zsa_eOXeY"
  },
  {
    Question: "Which of the following is NOT a common method used in DevOps?",
    Answer: "Divide and Conquer strategy",
    Distractor1: "Agile",
    Distractor2: "Scrum",
    Distractor3: "Kanban",
    Explanation:
      "Some common methods in DevOps include Agile, Scrum and Kanban.",
    Link: "https://youtu.be/j5Zsa_eOXeY"
  },
  {
    Question:
      "Which of the following testing tools is commonly used in DevOps?",
    Answer: "Selenium",
    Distractor1: "PyTorch",
    Distractor2: "Apache Commons",
    Distractor3: "jQuery",
    Explanation:
      "JUnit, Jenkins, and Selenium are some commonly used testing tools used in DevOps.",
    Link: "https://youtu.be/j5Zsa_eOXeY"
  }
];
export default devopsQuiz;
