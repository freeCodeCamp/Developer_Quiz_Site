const securityQuiz = [
  {
    Question:
      "Which programming language is most susceptible to buffer overflow attacks?",
    Answer: "C",
    Distractor1: "Java",
    Distractor2: "Python",
    Distractor3: "Ruby",
    Explanation:
      "C is a low-level language that allows for direct memory manipulation. This makes it more susceptible to buffer overflow attacks.",
    Link: "https://www.freecodecamp.org/news/buffer-overflow-attacks/",
  },
  {
    Question:
      "Which option is an open-source solution to scanning a network for active hosts and open ports?",
    Answer: "Nmap",
    Distractor1: "Snort",
    Distractor2: "Autopsy",
    Distractor3: "Wireshark",
    Explanation:
      "Nmap is a free and open-source network scanner that can be used to scan a network for active hosts and open ports.  It is also used to detect the operating system and services running on a host.",
    Link: "https://www.freecodecamp.org/news/what-is-nmap-and-how-to-use-it-a-tutorial-for-the-greatest-scanning-tool-of-all-time/",
  },
  {
    Question:
      "Which of the following type of Hackers look for vulnerable computers over the internet, exploit them and use them for their advantage?",
    Answer: "Black Hat Hackers",
    Distractor1: "Red Hat Hackers",
    Distractor2: "White Hat Hackers",
    Distractor3: "Grey Hat Hackers",
    Explanation:
      "Black Hat Hackers exploit vulnerable computers over the internet by installing backdoors, malwares, sending phishing emails and links , therby getting access to private and sensitive data",
    Link: "https://www.freecodecamp.org/news/white-hat-black-hat-red-hat-hackers/",
  },
  {
    Question:
      "Which of the following type of Hackers protect civilians and organizations by finding and reporting vulnerabilities in the system?",
    Answer: "White Hat Hackers",
    Distractor1: "Grey Hat Hackers",
    Distractor2: "Black Hat Hackers",
    Distractor3: "Red Hat Hackers",
    Explanation:
      "White Hat Hackers work for organizations as Cybersecurity Engineers, Penetration Testers, etc.  where they perform tasks like ethically hacking the system to find and report vulnerabilities. ",
    Link: "https://www.freecodecamp.org/news/white-hat-black-hat-red-hat-hackers/",
  },
  {
    Question: "What is a common exploited Web security vulnerability",
    Answer: "SQL injection",
    Distractor1: "NoSQL Injection",
    Distractor2: "XPATH Injection",
    Distractor3: "CSS Injection",
    Explanation:
      "SQL injection is one of the most common, old and effective ways of getting to your data for retrieving or destroying it. ",
    Link: "https://www.freecodecamp.org/news/learn-the-basics-of-sql-injection-and-how-to-protect-your-web-apps/",
  },
  {
    Question:
      "What is the first line of defense against SQL injection attacks?",
    Answer: "Sanitizing and validating user inputs",
    Distractor1: "Good Firewall setup",
    Distractor2: "IP white- and blacklist",
    Distractor3: "Good Antivirus",
    Explanation:
      "Sanitizing your user input is a basic common rule in security, make sure not to add directly GET or POST variables in your code without a proper sanitizing function. ",
    Link: "https://www.youtube.com/watch?v=2nXOxLpeu80&t=1h37m41s",
  },
];

export default securityQuiz;
