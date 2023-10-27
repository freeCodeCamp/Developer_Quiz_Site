const agileQuiz = [
  {
    Question:
      "Which of the following is the primary role of a Scrum Product Owner?",
    Answer: "Define and prioritize the product backlog",
    Distractor1: "Lead daily standup meetings",
    Distractor2: "writes test for the product",
    Distractor3: "Remove impediments for the team",
    Explanation:
      "The Product Owner is responsible for managing the product backlog and defining priorities.The Product Owner is the voice of the customer and stakeholders",
    Link: "https://www.freecodecamp.org/news/agile-software-development-handbook/"
  },
  {
    Question:
      "Which of the following Agile methodologies is known for its emphasis on continuous delivery and flow-based development?",
    Answer: "Kanban",
    Distractor1: "Extreme Programming (XP)",
    Distractor2: "Scrum",
    Distractor3: "Lean Software Development",
    Explanation:
      "Kanban is known for its focus on continuous delivery and flow-based development.",
    Link: "https://www.freecodecamp.org/news/agile-software-development-handbook/"
  },
  {
    Question: "What is the primary focus of Kanban boards?",
    Answer: "Visualizing the workflow and work in progress",
    Distractor1: "Defining sprint goals",
    Distractor2: "Creating the product backlog",
    Distractor3: "Facilitating daily standup meetings",
    Explanation: "Kanban boards visualize the workflow and work in progress.",
    Link: "https://www.freecodecamp.org/news/agile-software-development-handbook/"
  },
  {
    Question: "How are work items typically represented on a Kanban board?",
    Answer: "Cards",
    Distractor1: "Tasks",
    Distractor2: "Stories",
    Distractor3: "Points",
    Explanation:
      "Work items in Kanban are often represented as cards on the board",
    Link: "https://www.freecodecamp.org/news/agile-software-development-handbook/"
  },
  {
    Question: "What is the average duration for sprints?",
    Answer: "2 weeks to a month",
    Distractor1: "3 weeks to 6 weeks",
    Distractor2: "1 month to 3 months",
    Distractor3: "3 months to 6 months",
    Explanation:
      "The average duration for sprints is usually two weeks to a month which can vary based on the projects and the team size involved",
    Link: "https://www.freecodecamp.org/news/being-agile-kanban-vs-scrum/"
  },
  {
    Question:
      "What is the main purpose of continuous integration and continuous delivery(CI/CD)?",
    Answer: "To automate the software development and delivery process",
    Distractor1: "To reduce the cost of software development.",
    Distractor2: "To improve the quality of software.",
    Distractor3:
      "To increase the number of features released in a given period of time.",
    Explanation:
      "CI/CD tools can be used to automate software building, testing, and deployment, and they often work together with build automation tools to deliver software to production more frequently and with less risk.",
    Link: "https://www.freecodecamp.org/news/how-devops-works/"
  },
  {
    Question: "What are the two most popular CI/CD tools?",
    Answer: "Jenkins and GitHub Actions",
    Distractor1: "Selenium",
    Distractor2: "Docker",
    Distractor3: "Kubernetes",
    Explanation:
      "Both Jenkins and GitHub Actions are powerful CI/CD tools that can help to deliver software faster, with higher quality, and with less risk.",
    Link: "https://www.freecodecamp.org/news/how-devops-works/"
  },
  {
    Question:
      "What are the three primary roles in Scrum and their key responsibilities?",
    Answer: "Product Owner, Scrum Master, and Team Member",
    Distractor1: "CEO, CTO, web master",
    Distractor2: "Scrum Master, CFO, CTO",
    Distractor3: "Product Owner, COO, Scrum Master",
    Explanation:
      "The three primary roles in Scrum are Product Owner, Scrum Master, and Team Member. The Product Owner maximizes ROI, the Scrum Master guides team performance, and Team Members have authority over work methods.",
    Link: "https://www.freecodecamp.org/news/scrum-for-startups-or-for-any-project-for-that-matter-93ad0db17a84/"
  },
  {
    Question:
      "What is the core concept behind the Agile development methodology?",
    Answer: "Iterative and incremental development",
    Distractor1: "Comprehensive documentation",
    Distractor2: "Long-term planning",
    Distractor3: "Hierarchical decision-making",
    Explanation:
      "Agile focuses on iterative and incremental development, allowing for flexibility and adaptability.",
    Link: "https://www.freecodecamp.org/news/agile-methods-and-methodology-for-beginners/"
  },
  {
    Question:
      "What is the primary purpose of the Daily Stand-up meeting in Scrum?",
    Answer: "To provide a quick status update and identify any impediments",
    Distractor1: "To discuss long-term project goals",
    Distractor2: "To assign tasks for the day",
    Distractor3: "To review the entire project timeline",
    Explanation:
      "The Daily Stand-up meeting in Scrum aims to keep the team informed, identify issues, and ensure alignment on daily tasks.",
    Link: "https://www.freecodecamp.org/news/scrum-the-hard-parts/"
  },
  {
    Question:
      'According to Lean Software Development, what is the goal when considering "change requests" in software development?',
    Answer:
      'The goal is to minimize the time that each "change request" is on the assembly line before being delivered',
    Distractor1:
      'The goal is to maximize the number of "change requests" in the pipeline',
    Distractor2:
      'The goal is to delay the processing of "change requests" as much as possible',
    Distractor3: 'The goal is to eliminate all "change requests"',
    Explanation:
      'In Lean Software Development, the focus is on reducing lead time and delivering value quickly. Therefore, the goal with "change requests" is to process them efficiently and minimize the time they spend in the development pipeline before they are delivered.',
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question: "What is the primary focus of Lean Software Development?",
    Answer:
      "It focuses on using techniques that minimize extra work and wasted effort in the software development process",
    Distractor1: "It emphasizes extensive documentation",
    Distractor2: "It prioritizes speed over quality",
    Distractor3: "It borrows techniques from the automotive industry",
    Explanation:
      "Lean Software Development is the process of building software with the focus on using techniques which minimize extra work and wasted effort. These techniques are borrowed from the Lean manufacturing movement and applied to the context of software development.",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question: "In Agile, what is meant by Integration Hell?",
    Answer:
      "The phase where multiple components or modules are integrated into a single system, often causing unexpected issues",
    Distractor1:
      "A stage in Agile development where teams struggle to integrate user stories",
    Distractor2:
      "A term used to describe smooth and seamless integration processes",
    Distractor3: "A project management technique to prevent integration issues",
    Explanation:
      "Integration Hell is a slang term for when all the members of a development team goes through the process of implementing their code at random times with no way to incorporate the different pieces of code into one seamless string of code.",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question:
      "What is the purpose of a retrospective meeting in Agile Methodology?",
    Answer:
      "To reflect on the previous iteration and identify areas for improvement",
    Distractor1: "To plan the tasks for the next iteration",
    Distractor2: "To review and approve user stories",
    Distractor3: "To demo the product to stakeholders",
    Explanation:
      "The purpose of an Agile retrospective is to reflect on the previous iteration and identify what went well and what could be improved. It allows the team to continuously adapt and enhance their processes and practices.",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question: "What are the first steps of Test Driven Development (TDD)?",
    Answer:
      "Deciding what the program should do (the specifications) and formulating a failing test",
    Distractor1: "Analyzing the code and deciding how many tests are needed",
    Distractor2:
      "Writing out documentation and pseudo code so that the product owner knows the testing standards",
    Distractor3:
      "Updating the program requirements and rendering the foundation to meet testing regulations",
    Explanation:
      "Before any actual code is written, the specifications and a failing test are set up. Then, the code that's written should make the test pass.",
    Link: "https://www.freecodecamp.org/news/an-introduction-to-test-driven-development-c4de6dce5c/"
  },
  {
    Question:
      "Which development process did Behavior Driven Development (BDD) emerge from?",
    Answer: "Test Driven Development (TDD)",
    Distractor1: "Feature Driven Development (FDD)",
    Distractor2: "User Driven Development (UDD)",
    Distractor3: "Configuration Driven Development (CDD)",
    Explanation:
      "Behavior Driven Development combines the general techniques and principles of TDD with ideas from domain-driven design and object-oriented analysis and design ",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question: "In Agile, what are epics?",
    Answer:
      "epics are a way to group pieces of work together to represent a feature.",
    Distractor1: "epics are another term for scrum master",
    Distractor2: "epics do not exist in agile",
    Distractor3: "epics are another term for standup meetings",
    Explanation:
      " Stories have a goal of defining a bite-sized piece of work, epics are a way to group those pieces of work together to represent a feature.",
    Link: "https://www.freecodecamp.org/news/what-is-agile-and-how-youcan-become-an-epic-storyteller/#sprints"
  },
  {
    Question: "What are the five Scrum values?",
    Answer: "Commitment, Focus, Openness, Respect, and Courage.",
    Distractor1: "Commitment, Respect, Honesty, Loyalty, Truth .",
    Distractor2: "Focus, Loyalty, Courage, Patience, Openness.",
    Distractor3: "Openness, Commitment, Honesty, Discipline, Patience.",
    Explanation:
      "The five values that people should master in order to successfully apply Scrum are commitment, focus, openness, respect and courage.",
    Link: "https://scrumguides.org/scrum-guide.html"
  },
  {
    Question: "In Agile, when might a Sprint be abnormally cancelled?",
    Answer: "When the Sprint Goal becomes obsolete.",
    Distractor1:
      "When it becomes clear that not everything will be finished by the end of the Sprint.",
    Distractor2: "When the Developers feel that the work is too hard.",
    Distractor3: "When the sales department has an important new opportunity.",
    Explanation:
      "The Product Owner can cancel a Sprint if the Sprint Goal becomes obsolete.",
    Link: "https://scrumguides.org/scrum-guide.html"
  },
  {
    Question:
      "Which of the following development models is a very linear approach to building a product and also has little room for feedback or iteration until the product is completely built and tested?",
    Answer: "Waterfall Development",
    Distractor1: "Kanban Development",
    Distractor2: "Linear Development",
    Distractor3: "Rigid Development",
    Explanation:
      "Waterfall development is a very linear approach to building a product. It has little to no room for feedback or iteration until the product is completely built and tested.",
    Link: "https://www.freecodecamp.org/news/agile-methods-and-methodology-for-beginners/"
  },
  {
    Question:
      "Which of the following is typically the smallest defined piece of work in the Agile framework?",
    Answer: "Story",
    Distractor1: "Plot",
    Distractor2: "Plan",
    Distractor3: "Outline",
    Explanation:
      "A story is typically the smallest defined piece of work within the Agile framework.",
    Link: "https://www.freecodecamp.org/news/what-is-agile-and-how-youcan-become-an-epic-storyteller/"
  },
  {
    Question: "Who is responsible for the sprint meeting?",
    Answer: "Scrum master",
    Distractor1: "Product owner",
    Distractor2: "Scrum team",
    Distractor3: "All of the above.",
    Explanation:
      "The Scrum Master ensures that the team discusses how to improve on the delivery or software products.",
    Link: "https://www.freecodecamp.org/news/what-is-a-scrum-master-the-agile-role-and-responsibilities-explained/"
  },
  {
    Question: "What is a Sprint Review?",
    Answer: "an opportunity for inspection of the Sprint outcome",
    Distractor1: "Activity to improve Scrum Processes",
    Distractor2: "Activity to plan for the next Sprint",
    Distractor3: "Activity to plan for the release",
    Explanation:
      "A Sprint Review involves seeking feedback from stakeholders and incorporating that feedback into the software product.",
    Link: "https://scrumguides.org/scrum-guide.html#sprint-review"
  },
  {
    Question: "In Agile, what is the term for combining Kanban with Scrum?",
    Answer: "Scrumban",
    Distractor1: "KanScrum",
    Distractor2: "ScrumKanban",
    Distractor3: "Kanrum",
    Explanation:
      "Kanban is very flexible and it can be used in combination with Scrum, which is called Scrumban.",
    Link: "https://www.freecodecamp.org/news/what-is-kanban-the-agile-methodology-defined-and-how-to-use-it-for-your-software-development-team-2/"
  },
  {
    Question:
      "According to the Agile Manifesto, your highest priority is to _____________.",
    Answer: "satisfy the customer/client requirements",
    Distractor1: "achieve the desired Return of Investment",
    Distractor2: "minimize change requests from the customer/client",
    Distractor3: "deliver the project on time",
    Explanation:
      "According to the Agile Manifesto,your highest priority is to satisfy the customer through early and continuous delivery of valuable software.",
    Link: "https://forum.freecodecamp.org/t/the-agile-manifesto-explained/16151"
  },
  {
    Question: "In a Scrum team, what is a Scrum Master?",
    Answer:
      "A servant leader whose role is to support the rest of the team and the organization",
    Distractor1:
      "A project manager who's main role is to ensure the Developers deliver in time",
    Distractor2:
      "An external resource temporarily assigned to the team to audit their work",
    Distractor3:
      "Scrum Master is not a role officially recognized by the Scrum guide",
    Explanation:
      "The Scrum Master is a leader who supports their colleagues in their activities and does more than just assign tasks.",
    Link: "https://www.freecodecamp.org/news/what-is-a-scrum-master-the-agile-role-and-responsibilities-explained/"
  },
  {
    Question: "In a Scrum team, who is responsible for stories estimation?",
    Answer: "The Developers",
    Distractor1: "The Product Owner",
    Distractor2: "The Scrum Master",
    Distractor3: "The Product Owner and the Scrum Master",
    Explanation:
      "According to the Scrum Guide, only members of the development team are allowed to estimate development effort. Neither Scrum Master, nor Product Owner.",
    Link: "https://www.freecodecamp.org/news/scrum-the-hard-parts/"
  },
  {
    Question: "In a Scrum team, who is responsible for setting priorities?",
    Answer: "The Product Owner",
    Distractor1: "The Developers",
    Distractor2: "The Scrum Master",
    Distractor3: "The Product Owner and the Scrum Master",
    Explanation:
      "According to the Scrum Guide, the Product Owner has the final say when prioritizing the Product Backlog.",
    Link: "https://www.freecodecamp.org/news/scrum-the-hard-parts/"
  },
  {
    Question:
      "In a project adopting the Scrum framework, when is the Product Backlog completed?",
    Answer: "Never",
    Distractor1: "Before the project starts",
    Distractor2:
      "There is no precise limit, but it is advised to complete it before the fourth Sprint",
    Distractor3:
      "It is mandatory for the Product Backlog to be completed before the fourth Sprint",
    Explanation:
      "According to the Scrum Guide, the Product Backlog is never complete. Initially, it contains only the best-understood requirements.",
    Link: "https://www.freecodecamp.org/news/scrum-the-hard-parts-2-sprint-harder/"
  },
  {
    Question:
      "Which of the following is NOT one of the four core principles of the Agile methodology?",
    Answer: "Comprehensive documentation over working software",
    Distractor1: "Individuals and interactions over processes and tools",
    Distractor2: "Responding to change over following a plan",
    Distractor3: "Customer collaboration over contract negotiation",
    Explanation:
      "Instead of detailed specifications and planning, Agile prioritizes shipping working software and making incremental changes based on feedback.",
    Link: "https://www.freecodecamp.org/news/agile-methods-and-methodology-for-beginners/"
  },
  {
    Question: "Which of the following is NOT an Agile framework?",
    Answer: "Waterfall",
    Distractor1: "Scrum",
    Distractor2: "Kanban",
    Distractor3: "XP (Extreme Programming)",
    Explanation:
      "Waterfall is an opposing project management methodology that has little to no room for feedback or iteration until the product is completely built and tested.",
    Link: "https://www.freecodecamp.org/news/agile-methods-and-methodology-for-beginners/"
  },
  {
    Question: "In the Agile framework, what is a user story?",
    Answer:
      "A simple description of a software feature from the perspective of a user or customer",
    Distractor1:
      "A simple description of a software feature from the perspective of a developer",
    Distractor2:
      "A simple description of a software feature from the perspective of the Scrum Master",
    Distractor3:
      "A simple description of a software feature from the perspective of the Product Owner",
    Explanation:
      "A user story is an informal, general explanation of a software feature written from the perspective of the end user.",
    Link: "https://www.freecodecamp.org/news/how-to-write-user-stories-epics-pesonas/"
  },
  {
    Question:
      "In Agile, which of the following is NOT one of notable features of story points?",
    Answer: "points are assigned in a odd-like sequence: 1, 3, 5, 7, 9...",
    Distractor1: "points represent the contributions of the whole team",
    Distractor2: "points estimate the 'size' of stories relative to each other",
    Distractor3: "points do not equate directly to time the task might take",
    Explanation:
      "Points estimate the amount of effort required to deliver a user story and are assigned using the Fibonacci sequence",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question: "In Agile, what is Planning Poker?",
    Answer:
      "It is used to estimate the development effort required for a user story or a feature",
    Distractor1: "It is used for the elaboration of the backlog",
    Distractor2:
      "It is used to estimate the development cost needed for a user story or feature",
    Distractor3:
      "It is used to estimate what would be development in each user story",
    Explanation:
      "Planning poker is an estimation and planning technique in the Agile development model. It is used to estimate the development effort required for a user story or a feature.",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question: "What types of environments work best for Agile principles?",
    Answer: "It works great in dynamic environments.",
    Distractor1: "It works great in static environments.",
    Distractor2: "It works great in customer environments.",
    Distractor3: "Agile has been proven to not work in any good environment.",
    Explanation:
      "The Agile environment appeals to quick actions, discussions, evaluations, and considerations for different approaches.  It works great in dynamic environments where there is a potential for changing or evolving requirements.",
    Link: "https://www.freecodecamp.org/news/applying-agile-methodology-to-data-science-projects/"
  },
  {
    Question: "In Agile, which of the following options is a high priority?",
    Answer: "Working software",
    Distractor1: "Comprehensive documentation",
    Distractor2: "Processes and tools",
    Distractor3: "Contract negotiation",
    Explanation:
      "Agile projects are characterized by a series of tasks that are conceived, executed and adapted as the situation demands and one of the priorities is working software.",
    Link: "https://www.freecodecamp.org/news/applying-agile-methodology-to-data-science-projects/"
  },
  {
    Question: "In Agile, what is Timeboxing?",
    Answer: "set amount of time for an activity to occur",
    Distractor1: "It's a new Agile framework",
    Distractor2: "Not related to Agile",
    Distractor3: "It's a way to write code faster",
    Explanation:
      "In Agile, Timeboxing is a set amount of time for a planned activity to take place. This technique is often used in project management to help with productivity for projects. ",
    Link: "https://en.wikipedia.org/wiki/Timeboxing"
  },
  {
    Question: "In Agile, what are Story Points?",
    Answer:
      "An estimate of the amount of effort required to deliver a user story",
    Distractor1:
      "An estimate of the amount of sprints required to deliver a user story",
    Distractor2:
      "An estimate of the amount of days required to deliver a user story",
    Distractor3:
      "An estimate of the amount of hours required to deliver a user story",
    Explanation:
      "Story points are used to estimate the amount of effort required to deliver a user story for a project.",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/#story-points-and-complexity-points"
  },
  {
    Question:
      "What is the name for the process that focuses on continuously building, testing, and gathering feedback for software products?",
    Answer: "Agile",
    Distractor1: "Bugzilla",
    Distractor2: "Apache",
    Distractor3: "Espresso",
    Explanation:
      "Agile is a project management process that focuses on continuously building, testing, and gathering feedback for software products.",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question:
      "What are the four important meetings or ceremonies in Agile Development Methodology?",
    Answer:
      "Sprint Planning, Daily Stand-up, Sprint Review and Sprint Retrospective",
    Distractor1:
      "Monthly Planning, Weekly Stand-up, Sprint Review and Sprint Retrospective",
    Distractor2:
      "Sprint Review, Daily Stand-up, Sprint Development and Sprint Retrospective",
    Distractor3:
      "Backlog Planning, Weekly Stand-up, Sprint Review and Sprint Retrospective",
    Explanation:
      "Agile ceremonies are the meetings that happen in following sequence Sprint Planning, Daily Stand-up, Sprint Review and Sprint Retrospective before, within, and after a sprint cycle.",
    Link: "https://en.wikipedia.org/wiki/Scrum_(software_development)"
  },
  {
    Question: "In Agile, what does FDD stand for?",
    Answer: "Feature Driven Development",
    Distractor1: "Feature Design Development",
    Distractor2: "Feature Driven Design",
    Distractor3: "Feature Driven Difference",
    Explanation:
      "Feature Driven Development (FDD) is the practice of incrementally developing and frequently releasing new features for software products.",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question:
      "In Agile, which methodology has no defined roles or functions where each member can assume the available tasks?",
    Answer: "Kanban",
    Distractor1: "Scrum",
    Distractor2: "Lean",
    Distractor3: "Agile Inception ",
    Explanation:
      "The Kanban method does not prescribe roles or meetings unlike other frameworks such as Scrum.",
    Link: "https://www.freecodecamp.org/news/being-agile-kanban-vs-scrum/"
  },
  {
    Question:
      "In a Scrum team, who needs to comply with the Definition of Done?",
    Answer: "The Scrum Team",
    Distractor1: "The Product Owner",
    Distractor2: "The Scrum Master",
    Distractor3: "The Product Owner and the Scrum Master",
    Explanation:
      "In Agile, the developers will decided when the work is finished.",
    Link: "https://scrumguides.org/scrum-guide.html"
  },
  {
    Question:
      "Who is accountable for establishing Scrum and Scrum Team's effectiveness?",
    Answer: "The Scrum Master",
    Distractor1: "The Scrum Team",
    Distractor2: "The Product Owner and the Scrum Master",
    Distractor3: "The Product Owner",
    Explanation:
      "The Scrum Master is responsible for establishing scrum within the team & organizational level.",
    Link: "https://scrumguides.org/scrum-guide.html"
  },
  {
    Question: "Who has the authority to cancel the Sprint?",
    Answer: "The Product Owner",
    Distractor1: "The Scrum Team",
    Distractor2: "The Scrum Master",
    Distractor3: "The Developers",
    Explanation:
      "In Agile, the Product Owner has the ability to cancel a Sprint.",
    Link: "https://scrumguides.org/scrum-guide.html"
  },
  {
    Question: "For Agile teams, the primary measure of progress is:",
    Answer: "Working software",
    Distractor1: "Burndown charts",
    Distractor2: "Kanban board",
    Distractor3: "Customer satisfaction",
    Explanation:
      "Working software is the primary measure of progress in Agile, according to the seventh principle of the Agile Manifesto. This means that Agile teams focus on delivering software that meets the customer’s needs and provides value. By delivering working software frequently, Agile teams can demonstrate their progress and achievements",
    Link: "https://www.freecodecamp.org/news/you-say-your-team-is-agile-but-that-word-may-not-mean-what-you-think-6dd26eaf9b21/"
  },
  {
    Question:
      "In agile, why is it generally advisable to avoid assigning a very high number of points (e.g 13 points) to a single user story?",
    Answer:
      "Because high point stories cannot be completed in a single sprint.",
    Distractor1:
      "Because high point stories are reserved for critical features only.",
    Distractor2:
      "Because high point stories indicate a lack of detail in the user story.",
    Distractor3:
      "Because it is a convention to use lower points values for better accuracy.",
    Explanation:
      "In Agile, assigning a very high number of points to a single user story is generally discouraged because it indicates that the story is too large to be completed within a sprint.",
    Link: "https://www.freecodecamp.org/news/what-is-agile-and-how-youcan-become-an-epic-storyteller/"
  },
  {
    Question:
      "In agile, what is the primary purpose of a recurring meeting (Dev Huddle) for developers?",
    Answer: "To align developers' expectations and make technical decisions",
    Distractor1: "To discuss project timelines and deadlines",
    Distractor2: "To plan a vacation program",
    Distractor3: "To provide status updates to stakeholders",
    Explanation:
      "A 'Dev Huddle' or a recurring meeting in agile development serve as a forum for developers to discuss technical topics, make decisions regarding architecture, conventions, and other aspects of the tech stack.",
    Link: "https://www.freecodecamp.org/news/how-to-use-the-dev-huddle-to-get-your-developers-on-the-same-page/"
  },
  {
    Question: "What is the purpose of a burndown chart in Agile development?",
    Answer: "To track the progress of user stories throughout a sprint.",
    Distractor1: "To estimate the total cost of a project.",
    Distractor2: "To assign tasks to team members.",
    Distractor3: "To prioritize backlog items.",
    Explanation:
      "A burndown chart in Agile development is used to track the progress of user stories or tasks throughout a sprint. It visually represents the amount of work remaining over time, helping the team to manage their workload effectively.",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question: "What is the purpose of a daily stand-up meeting in Agile?",
    Answer:
      "To provide team members with a quick, daily update on progress, identify and address issues, and synchronize their work.",
    Distractor1: "To discuss long-term project strategy and planning.",
    Distractor2: "To assign tasks for the entire sprint.",
    Distractor3: "To review the project's final deliverables.",
    Explanation:
      "Daily stand-up meetings in Agile, also known as daily scrums, serve to provide team members with a daily opportunity to share updates on their work, identify any issues, and ensure that the team is aligned and focused on the sprint goal.",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question: "What is the role of a Scrum Master in Agile development?",
    Answer:
      "To facilitate the Scrum process, remove impediments, and ensure the team follows Agile principles and practices.",
    Distractor1: "To manage the project's finances and budgets.",
    Distractor2: "To write code for the project.",
    Distractor3: "To prioritize backlog items.",
    Explanation:
      "The Scrum Master acts as a servant-leader for the team, helping them understand and apply Agile principles, facilitating meetings, and removing obstacles that may hinder the team's progress.",
    Link: "https://www.freecodecamp.org/news/what-is-a-scrum-master-the-agile-role-and-responsibilities-explained/"
  },
  {
    Question: "In Agile, what is Acceptance Criteria?",
    Answer: "Tells the Delivery Team how the code should behave.",
    Distractor1: "The estimated time required to complete a user story.",
    Distractor2: "A list of tasks to be completed by the development team.",
    Distractor3: "A document outlining the entire project plan and timelines.",
    Explanation:
      "In agile, if a story does not meet each of the Acceptance Criteria, then the Product Owner should not be accepting the story at the end of the iteration. Additionally, acceptance criteria can be viewed as an instrument to protect the Delivery Team. ",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/#acceptance-criteria"
  },
  {
    Question:
      "In Agile, which of the following is not part of the standard agenda for Daily Stand-up (DSU)?",
    Answer: "Deep discussions on architecture or paradigms.",
    Distractor1: "What you have done since the last DSU.",
    Distractor2: "What you will be doing after this DSU.",
    Distractor3: "Deep discussions on frameworks and libraries",
    Explanation:
      "The Daily Standup (DSU) or Daily Scrum meeting is a meeting held daily at the same time or in the same location. It's an integral part of Scrum that allows team members to listen to each other's contributions and attempt to identify areas where they can assist each other's progress.",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/#daily-stand-up-and-daily-scrum"
  },
  {
    Question: "What is a 'User Story' in Agile development?",
    Answer:
      "A simple, informal description of a software feature from an end user's perspective.",
    Distractor1:
      "A comprehensive project plan for the entire development process.",
    Distractor2: "A technical document used by developers to write code.",
    Distractor3:
      "A formal contract between the development team and stakeholders.",
    Explanation:
      "User Stories are a common way of expressing software requirements in a way that's easy to understand by both developers and non-technical stakeholders.",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question: "What is 'Velocity' in the context of Agile project management?",
    Answer:
      "A measure of the amount of work a team can complete in a single iteration (sprint).",
    Distractor1:
      "The speed at which the team conducts daily stand-up meetings.",
    Distractor2:
      "The number of bugs or defects found in the software during testing.",
    Distractor3: "The total budget allocated for an Agile project.",
    Explanation:
      "Velocity is used to estimate the team's capacity and helps with sprint planning by forecasting how much work can be completed.",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question: "What's the difference between a burndown and a burnup chart?",
    Answer:
      "Burndown charts show how much work is left to be done, while burnup charts show the work that has been completed",
    Distractor1:
      "Burndown charts show the total amount of work completed, while burnup charts show the work left to be done versus",
    Distractor2:
      "Burndown charts show the total amount of work completed, while burnup charts show the work that has been done",
    Distractor3:
      "Burndown charts show the work completed, while burnup charts show todo list items.",
    Explanation:
      'Burndown and burnup charts are very similar and are used to measure progress of a project. Burndown charts usually have 2 lines - an "Ideal Work Remaining Line" and an "Actual Work Remaining Line". Burnup charts have 3 lines that are typically used - an ideal line, a completed work line, and a total work line.',
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question:
      "What does it mean in a Burnup Chart when a portion of the completed work line is below the ideal work line?",
    Answer: "It typically means that the team is behind schedule.",
    Distractor1: "It typically means the team is ahead of schedule ",
    Distractor2:
      "It typically means the team is on track with the planned schedule.",
    Distractor3: "It represents the total scope of work needed.",
    Explanation:
      "Burnup charts show the work that has been completed versus the total amount of work and time remaining. In this chart, the total work line should be somewhat steady across the top of the chart, and is a good representation of scope change. The completed work line should move steadily up towards the total work line for the amount of time in the project— its ideal trajectory is shown by the ideal line.",
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question: "What are nonfunctional requirements?",
    Answer:
      "A requirement that specifies criteria that can be used to judge the operation of a system, rather than specific behaviors.",
    Distractor1:
      "A requirement that specifies behaviors of how a system should work. ",
    Distractor2:
      "They are useless requirements that do not add value to the system.",
    Distractor3:
      "A requirement that focuses on the personnel needed to complete a task.",
    Explanation:
      'A non-functional requirement (NFR) is a requirement that specifies criteria that can be used to judge the operation of a system, rather than specific behaviors (a functional requirement). Non-functional requirements are often called "quality attributes", "constraints" or "non-behavioral requirements".',
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  },
  {
    Question: "Which of the following are not nonfunctional requirements?",
    Answer:
      "The system must allow users to log into their account by entering their email and password.",
    Distractor1:
      "The printer should print 5 seconds after the button is pressed.",
    Distractor2: "The code should be written in Java.",
    Distractor3: "The UI should be easily navigable.",
    Explanation:
      'A non-functional requirement (NFR) is a requirement that specifies criteria that can be used to judge the operation of a system, rather than specific behaviors (a functional requirement). Non-functional requirements are often called "quality attributes", "constraints" or "non-behavioral requirements".',
    Link: "https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/"
  }
];

export default agileQuiz;
