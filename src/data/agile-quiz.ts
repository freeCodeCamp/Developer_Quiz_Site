const agileQuiz = [
  {
    Question: "What are the first steps of Test Driven Development (TDD)?",
    Answer: "Deciding what the program should do (the specifications) and formulating a failing test",
    Distractor1: "Analyzing the code and deciding how many tests are needed",
    Distractor2: "Writing out documentation and pseudo code so that the product owner knows the testing standards",
    Distractor3: "Updating the program requirements and rendering the foundation to meet testing regulations",
    Explanation:
      "Before any actual code is written, the specifications and a failing test are set up. Then, the code that's written should make the test pass.",
    Link: "https://www.freecodecamp.org/news/an-introduction-to-test-driven-development-c4de6dce5c/"
  }, 
  {
    Question: "Which development process did Behavior Driven Development (BDD) emerge from?",
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
  }
];

export default agileQuiz;
