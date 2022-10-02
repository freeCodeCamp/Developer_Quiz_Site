const securityQuiz = [
  {
    Question:
      "In digital security, what is a Man in the Middle Attack?",
    Answer: "an attack where hackers can spy on your internet traffic and modify it",
    Distractor1: "an attack where hackers can send emails with fake links",
    Distractor2: "an attack where hackers can encrypt your files and demand payment",
    Distractor3: "an attack where hackers can flood the system with network requests",
    Explanation:
      "Free wifi hotspots are often targeted by hackers and can put you at risk of MitM attacks (Man in the Middle Attacks) where a hacker spies on your internet traffic, and may even modify it without you knowing.",
    Link: "https://www.freecodecamp.org/news/personal-digital-security-an-intro/",
  },
  {
    Question:
      "Which of the following is a mechanism to ensure non-repudiation?",
    Answer: "Assymetric-key encryption",
    Distractor1: "MD5",
    Distractor2: "Symmetric-key encryption",
    Distractor3: "Caesar cipher",
    Explanation:
      "Assymetric-key encryption is a mechanism to ensure non-repudiation because it uses two keys,one public and one private.The public key is used to encrypt the message and the private key is used to decrypt the message.This ensures that the sender cannot deny sending the message because the message can only be decrypted with the private key.",
    Link: "https://www.freecodecamp.org/news/the-cia-triad-confidentiality-integrity-and-availability-explained/",
  },
  {
    Question:
      "What kind of application lurks in the process list,leverages Windows Hooks to intercept user inputs and has the potential to attack both the user's machine and their internet login information?",
    Answer: "Keylogger",
    Distractor1: "typethief",
    Distractor2: "trojan",
    Distractor3: "worm",
    Explanation:
      "Keylogger is a type of malware that records every keystroke made by the user. It is widely used to steal passwords, credit card numbers, and other sensitive information. It can also be used to monitor the user's activity and send the information to a third party.",
    Link: "https://www.freecodecamp.org/news/how-did-someone-get-my-password-2/",
  },
  {
    Question:
      "Which of the following attack exploits input validation vulnerabilities?",
    Answer: "Cross-site scripting(XSS)",
    Distractor1: "DNS poisoning",
    Distractor2: "SQL injection",
    Distractor3: "ARP spoofing",
    Explanation:
      "Cross-site scripting(XSS) is a type of attack that exploits input validation vulnerabilities. It is a type of injection attack that allows an attacker to inject client-side scripts into web pages viewed by other users. The attacker can then execute scripts in the victim's browser, which can hijack user sessions ,deface web sites, or redirect the user to malicious sites.",
    Link: "https://www.freecodecamp.org/news/cross-site-scripting-what-is-xss/",
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
