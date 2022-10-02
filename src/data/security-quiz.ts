const securityQuiz = [
  {
    Question:
      "What is the most common way to get hacked?",
    Answer: "MitM attacks (Man in the Middle Attacks),
    Distractor1: "Simple passwords",
    Distractor2: "Dating a hacker",
    Distractor3: "Bluetooth",
    Explanation:
      "Free wifi hotspots are often targeted by hackers and can put you at risk of MitM attacks (Man in the Middle Attacks) where a hacker spies on your internet traffic, and may even modify it without you knowing.",
    Link: "https://www.freecodecamp.org/news/personal-digital-security-an-intro/",
  },
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
    Question: "Which of the following is NOT a JWT segment?",
    Answer: "Transit",
    Distractor1: "Header",
    Distractor2: "Payload",
    Distractor3: "Crypto",
    Explanation:
      "JSON Web Tokens are composed of three URL-safe string segments. Header Segment,Payload Segment & Crypto/Signature Segment",
    Link: "https://www.freecodecamp.org/news/how-to-sign-and-validate-json-web-tokens/",
  },
];

export default securityQuiz;
