const securityQuiz = [
  {
    Question:
      "Which set among the following is the correct set of three types of Linux file users?",
    Answer: "{user, group, other}",
    Distractor1: "{whoami, users, group}",
    Distractor2: "{whoami, user, others}",
    Distractor3: "{user, group, all}",
    Explanation:
      "In Linux, there are three types of users: user, group and other.",
    Link: "https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/",
  },
  {
    Question:
      "Which of the following is NOT a category of file permissions in Linux?",
    Answer: "compile",
    Distractor1: "execute",
    Distractor2: "read",
    Distractor3: "write",
    Explanation:
      "In Linux, file permissions fall into three categories: read, write and execute.",
    Link: "https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/",
  },
  {
   Question:
      "Which of the following terms involves sending packets of data to the target and interpreting their response?",
    Answer: "Scanning",
    Distractor1: "Exploitation",
    Distractor2: "Reconnaissance",
    Distractor3: "Reporting",
    Explanation:
      "Scanning involves sending packets of data to the target and interpreting their response.",
    Link: "https://www.freecodecamp.org/news/ethical-hacking-lifecycle-five-stages-of-a-penetration-test/",
  },
  {
    Question:
      "What is the term for getting information about a target without having to interact with them?",
    Answer: "Reconnaissance",
    Distractor1: "Enumeration",
    Distractor2: " Exploitation",
    Distractor3: "Reporting",
    Explanation:
      "Recon (aka footprinting) is the first, longest, and most important step. This entails getting as much information as you can about the target without interacting directly with the target.",
    Link: "https://www.freecodecamp.org/news/what-is-hacking/",
  },
  {
    Question:
      "What is the term for gathering information on a target for the purpose of looking for a vulnerability?",
    Answer: "Enumeration",
    Distractor1: "Reporting",
    Distractor2: " Exploitation",
    Distractor3: "Reconnaissance",
    Explanation:
      "This is like reconnaissance, except you gain information about the target by interacting with it for the purpose of looking for a vulnerability.",
    Link: "https://www.freecodecamp.org/news/what-is-hacking/",
  },
  {
    Question:
      "Which of the following protocols is a way through which communication can happen securely between your browser and the site you want to visit (web server)?",
    Answer: "HTTPS",
    Distractor1: "HTTP",
    Distractor2: "SMTP",
    Distractor3: "SFTP",
    Explanation:
      "Hyper Text Transfer Protocol Secure, or HTTPS, is a way that communication can happen SECURELY between your browser and the site you want to visit (web server).",
    Link: "https://www.freecodecamp.org/news/http-vs-https/",
  },
  {
    Question: "Which of the following is a communication protocol for email?",
    Answer: "SMTP",
    Distractor1: "SFTP",
    Distractor2: "HTTP",
    Distractor3: "SSL",
    Explanation:
      " SMTP, or Simple Mail Transfer Protocol, is a communication protocol used to send mails to mail servers.",
    Link: "https://www.freecodecamp.org/news/how-does-email-work/",
  },
  {
    Question:
      "Which protocol/cipher is used which ensures parties without prior knowledge establish a shared secret without anyone else being able to sniff it ?",
    Answer: " Diffie-Hellman key exchange protocol ",
    Distractor1: "Caesar Cipher",
    Distractor2: " Secure Remote Password protocol ",
    Distractor3: " Pre-Shared Key Algorithm",
    Explanation:
      " Variations of the Diffie-Hellman key exchange protocol are used which involves a bit of math. Once the secret is established, a client and a server can communicate without having to fear that someone might intercept their messages. Even if attackers do so, they will not have the common secret that's necessary to decrypt the messages. ",
    Link: " https://www.freecodecamp.org/news/web-security-an-introduction-to-http-5fa07140f9b3/ ",
  },

  {
    Question: "In digital security, what is a Man in the Middle Attack?",
    Answer:
      "an attack where hackers can spy on your internet traffic and modify it",
    Distractor1: "an attack where hackers can send emails with fake links",
    Distractor2:
      "an attack where hackers can encrypt your files and demand payment",
    Distractor3:
      "an attack where hackers can flood the system with network requests",
    Explanation:
      "Free wifi hotspots are often targeted by hackers and can put you at risk of MitM attacks (Man in the Middle Attacks) where a hacker spies on your internet traffic, and may even modify it without you knowing.",
    Link: "https://www.freecodecamp.org/news/personal-digital-security-an-intro/",
  },
  {
    Question:
      "A form of encryption that allows users to perform binary operations on encrypted data without ever decrypting the data is known as?",
    Answer: "Homomorphic Encryption",
    Distractor1: "Symmetric Encryption",
    Distractor2: "Asymmetric Encryption",
    Distractor3: "Advanced Encryption",
    Explanation:
      "Homomorphic Encryption is a form of encryption that allows users to perform binary operations on encrypted data without ever decrypting the data.",
    Link: "https://www.freecodecamp.org/news/introduction-to-homomorphic-encryption/",
  },
  {
    Question:
      "Which of the following is a cryptographic network protocol for operating network services securely over an unsecured network?",
    Answer: "SSH",
    Distractor1: "SFTP",
    Distractor2: "HTTPS",
    Distractor3: "OSPF",
    Explanation:
      "The SSH(Secure Shell Protocol) is a secure way for users to access a computer over an unsecured network.",
    Link: "https://www.freecodecamp.org/news/ssh-keygen-how-to-generate-an-ssh-public-key-for-rsa-login/",
  },
  {
    Question:
      "Which of the following is a mechanism to ensure non-repudiation?",
    Answer: "Asymmetric-key encryption",
    Distractor1: "MD5",
    Distractor2: "Symmetric-key encryption",
    Distractor3: "Caesar cipher",
    Explanation:
      "Asymmetric-key encryption is a mechanism to ensure non-repudiation because it uses two keys,one public and one private.The public key is used to encrypt the message and the private key is used to decrypt the message.This ensures that the sender cannot deny sending the message because the message can only be decrypted with the private key.",
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
      "Black Hat Hackers exploit vulnerable computers over the internet by installing backdoors, malware, sending phishing emails and links , thereby getting access to private and sensitive data",
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
    Question: "What is a common exploited Web security vulnerability?",
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
      "Sanitizing your user input is a basic common rule in security. It is important to not directly add GET or POST variables in your code without a proper sanitizing function. ",
    Link: "https://www.youtube.com/watch?v=2nXOxLpeu80&t=1h37m41s",
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
  {
    Question:
      "Which of the following is not a key advantage of homomorphic encryption?",
    Answer:
      "Homomorphic encryption handles speed and storage requirements efficiently.",
    Distractor1:
      "Homomorphic encryption allows encrypted information to be processed without requiring decryption first.",
    Distractor2:
      "Homomorphic encryption is particularly useful in cases where data is shared with third parties.",
    Distractor3:
      "Homomorphic encryption ensures regulatory compliance in industries like healthcare and finance.",
    Explanation:
      "Despite the many benefits homomorphic encryption has to offer, it lacks the efficiency and optimization requirements to be considered a practical solution.",
    Link: "https://www.freecodecamp.org/news/introduction-to-homomorphic-encryption/",
  },
  {
    Question:
      "Which of the following is not a primary type of homomorphic encryption?",
    Answer: "Chunked Homomorphic Encryption (CHE)",
    Distractor1: "Partially Homomorphic Encryption (PHE)",
    Distractor2: "Somewhat Homomorphic Encryption (SHE)",
    Distractor3: "Fully Homomorphic Encryption (FHE)",
    Explanation:
      "The three main types of homomorphic encryption are: Partially Homomorphic Encryption (PHE), Somewhat Homomorphic Encryption (SHE), and Fully Homomorphic Encryption (FHE).",
    Link: "https://www.freecodecamp.org/news/introduction-to-homomorphic-encryption/",
  },
  {
    Question: "What does TLS stand for?",
    Answer: "Transport Layer Security",
    Distractor1: "Transport Layer Socket",
    Distractor2: "Transmission Layer Security",
    Distractor3: "Transmission Layer Socket",
    Explanation:
      "TLS, or Transport Layer Security, refers to a protocol. The transport layer part of TLS simply refers to host-to-host communication, such as how a client and a server interact, in the Internet protocol suite model.",
    Link: "https://www.freecodecamp.org/news/what-is-tls-transport-layer-security-encryption-explained-in-plain-english/",
  },
  {
    Question: "What is the practice of hiding messages in plain sight?",
    Answer: "Steganography",
    Distractor1: "Cryptography",
    Distractor2: "Encryption",
    Distractor3: "Forensics",
    Explanation:
      "Steganography is the practice of hiding messages in a way that looks like nothing is hidden.",
    Link: "https://www.freecodecamp.org/news/steganography-explained-in-plain-english/",
  },
  {
    Question: "What does RSA stand for?",
    Answer: "Rivest, Shamir, and Adleman",
    Distractor1: "Really Secure Algorithm",
    Distractor2: "Router Safe Agreement",
    Distractor3: "Right Serious Answer",
    Explanation:
      "RSA, named after its creators (Rivest, Shamir, and Adleman), is an encryption technique that takes advantage of the fact that factoring large prime numbers is hard.",
    Link: "https://www.freecodecamp.org/news/understanding-encryption-algorithms/",
  },
  {
    Question: "Which of these was NOT a 2021 OWASP top 10 security vulnerability?",
    Answer: "Buffer Vulnerability",
    Distractor1: "Sensitive Data Exposure", 
    Distractor2: "Broken Authentication",
    Distractor3: "Injection Vulnerability",
    Explanation: 
      "A buffer vulnerability is an important security risk, but it was not part of OWASP's 2021 Top 10 common vulnerabilities.",
    Link: "https://www.freecodecamp.org/news/technical-dive-into-owasp/"
  },
  {
    Question:
      "Which type of Homomorphic Encryption allows only one operation to be performed on the ciphertext an infinite number of times?",
    Answer: "Partially Homomorphic Encryption (PHE)",
    Distractor1: "Somewhat Homomorphic Encryption (SHE)",
    Distractor2: "Fully Homomorphic Encryption (FHE)",
    Distractor3: "Somewhat Fully Homomorphic Encryption (SFHE)",
    Explanation:
      "Partial Homomorphic Encryption (PHE) allows only one operation to be performed on the ciphertext an infinite number of times. This operation can be only addition or only multiplication.",
    Link: "https://www.freecodecamp.org/news/introduction-to-homomorphic-encryption/",
  },
];

export default securityQuiz;
