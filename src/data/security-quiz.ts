const securityQuiz = [
  {
    Question: "Which of the following is not an Attack model in cryptanalysis?",
    Answer: "CVA (Chosen Vector Attack)",
    Distractor1: "CPA (Chosen Plaintext Attack)",
    Distractor2: "CCA (Chosen Ciphertext Attack)",
    Distractor3: "COA (Ciphertext Only Attack)",
    Explanation: "There is no attack model named CVA (Chosen vector attack).",
    Link: "https://en.wikipedia.org/wiki/Attack_model"
  },
  {
    Question:
      "Which of the following reasons makes HTTPS more secure than HTTP?",
    Answer: "In HTTPS, all communications are encrypted",
    Distractor1: "HTTPS communications are in plain text",
    Distractor2: "HTTPS communications are beautiful",
    Distractor3: "HTTPS uses port 80 by default, therefore it is more secure",
    Explanation:
      "HTTPS ensures that all communications between a client(web browser) and a web server are completely encrypted.",
    Link: "https://www.freecodecamp.org/news/http-vs-https/"
  },
  {
    Question: "What does GPG stand for?",
    Answer: "GNU Privacy Guard",
    Distractor1: "Good Privacy Gate",
    Distractor2: "Gratification Public Guard ",
    Distractor3: "Guard Privacy Guide",
    Explanation:
      "GNU Privacy Guard allows one to create cryptographic asymmetric key pairs that can be used for encryption and digital signature.",
    Link: "https://www.freecodecamp.org/news/what-is-commit-signing-in-git/"
  },
  {
    Question:
      "Which of the following Cryptography types consists of a key pair?",
    Answer: "Asymmetric key cryptography",
    Distractor1: "Symmetric key cryptography",
    Distractor2: "Hash function",
    Distractor3: "Systematical key cryptography",
    Explanation:
      "Asymmetric cryptography is a type of cryptography that uses a pair of related keys. Each key pair consists of a public key and a corresponding private key.",
    Link: "https://www.freecodecamp.org/news/http-vs-https/"
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
    Link: "https://www.freecodecamp.org/news/ethical-hacking-lifecycle-five-stages-of-a-penetration-test/"
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
    Link: "https://www.freecodecamp.org/news/what-is-hacking/"
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
    Link: "https://www.freecodecamp.org/news/what-is-hacking/"
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
    Link: "https://www.freecodecamp.org/news/http-vs-https/"
  },
  {
    Question: "Which of the following is a communication protocol for email?",
    Answer: "SMTP",
    Distractor1: "SFTP",
    Distractor2: "HTTP",
    Distractor3: "SSL",
    Explanation:
      " SMTP, or Simple Mail Transfer Protocol, is a communication protocol used to send mails to mail servers.",
    Link: "https://www.freecodecamp.org/news/how-does-email-work/"
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
    Link: " https://www.freecodecamp.org/news/web-security-an-introduction-to-http-5fa07140f9b3/ "
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
      "Free wifi hot spots are often targeted by hackers and can put you at risk of MitM attacks (Man in the Middle Attacks) where a hacker spies on your internet traffic, and may even modify it without you knowing.",
    Link: "https://www.freecodecamp.org/news/personal-digital-security-an-intro/"
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
    Link: "https://www.freecodecamp.org/news/introduction-to-homomorphic-encryption/"
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
    Link: "https://www.freecodecamp.org/news/ssh-keygen-how-to-generate-an-ssh-public-key-for-rsa-login/"
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
    Link: "https://www.freecodecamp.org/news/the-cia-triad-confidentiality-integrity-and-availability-explained/"
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
    Link: "https://www.freecodecamp.org/news/how-did-someone-get-my-password-2/"
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
    Link: "https://www.freecodecamp.org/news/cross-site-scripting-what-is-xss/"
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
    Link: "https://www.freecodecamp.org/news/buffer-overflow-attacks/"
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
    Link: "https://www.freecodecamp.org/news/what-is-nmap-and-how-to-use-it-a-tutorial-for-the-greatest-scanning-tool-of-all-time/"
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
    Link: "https://www.freecodecamp.org/news/white-hat-black-hat-red-hat-hackers/"
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
    Link: "https://www.freecodecamp.org/news/white-hat-black-hat-red-hat-hackers/"
  },
  {
    Question: "What is a common exploited Web security vulnerability?",
    Answer: "SQL injection",
    Distractor1: "NoSQL Injection",
    Distractor2: "XPATH Injection",
    Distractor3: "CSS Injection",
    Explanation:
      "SQL injection is one of the most common, old and effective ways of getting to your data for retrieving or destroying it. ",
    Link: "https://www.freecodecamp.org/news/learn-the-basics-of-sql-injection-and-how-to-protect-your-web-apps/"
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
    Link: "https://www.youtube.com/watch?v=2nXOxLpeu80&t=1h37m41s"
  },
  {
    Question: "Which of the following is NOT a JWT segment?",
    Answer: "Transit",
    Distractor1: "Header",
    Distractor2: "Payload",
    Distractor3: "Crypto",
    Explanation:
      "JSON Web Tokens are composed of three URL-safe string segments. Header Segment,Payload Segment & Crypto/Signature Segment",
    Link: "https://www.freecodecamp.org/news/how-to-sign-and-validate-json-web-tokens/"
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
    Link: "https://www.freecodecamp.org/news/introduction-to-homomorphic-encryption/"
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
    Link: "https://www.freecodecamp.org/news/introduction-to-homomorphic-encryption/"
  },
  {
    Question: "What does TLS stand for?",
    Answer: "Transport Layer Security",
    Distractor1: "Transport Layer Socket",
    Distractor2: "Transmission Layer Security",
    Distractor3: "Transmission Layer Socket",
    Explanation:
      "TLS, or Transport Layer Security, refers to a protocol. The transport layer part of TLS simply refers to host-to-host communication, such as how a client and a server interact, in the Internet protocol suite model.",
    Link: "https://www.freecodecamp.org/news/what-is-tls-transport-layer-security-encryption-explained-in-plain-english/"
  },
  {
    Question: "What is the practice of hiding messages in plain sight?",
    Answer: "Steganography",
    Distractor1: "Cryptography",
    Distractor2: "Encryption",
    Distractor3: "Forensics",
    Explanation:
      "Steganography is the practice of hiding messages in a way that looks like nothing is hidden.",
    Link: "https://www.freecodecamp.org/news/steganography-explained-in-plain-english/"
  },
  {
    Question: "What does RSA stand for?",
    Answer: "Rivest, Shamir, and Adleman",
    Distractor1: "Really Secure Algorithm",
    Distractor2: "Router Safe Agreement",
    Distractor3: "Right Serious Answer",
    Explanation:
      "RSA, named after its creators (Rivest, Shamir, and Adleman), is an encryption technique that takes advantage of the fact that factoring large prime numbers is hard.",
    Link: "https://www.freecodecamp.org/news/understanding-encryption-algorithms/"
  },
  {
    Question:
      "Which of these was NOT a 2021 OWASP top 10 security vulnerability?",
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
    Link: "https://www.freecodecamp.org/news/introduction-to-homomorphic-encryption/"
  },
  {
    Question: "What does SSL stand for?",
    Answer: "Secure Sockets Layer",
    Distractor1: "Serial Sockets Layer",
    Distractor2: "Serial Secure Layer",
    Distractor3: "Series Socket Layer",
    Explanation:
      "Transport Layer Security (TLS), formerly known as Secure Sockets Layer (SSL), is the protocol used to encrypt communications. It is the newer and more secure version of SSL",
    Link: "https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/"
  },
  {
    Question: "What does IPFS stand for?",
    Answer: "InterPlanetary File System",
    Distractor1: "Internet Public File System",
    Distractor2: "Internet Protocol File Sharing",
    Distractor3: "Inter Peer File Sharing",
    Explanation:
      "The InterPlanetary File System is a protocol that stores and shares content and is meant to make the web faster and safer to use.",
    Link: "https://www.freecodecamp.org/news/technical-guide-to-ipfs-decentralized-storage-of-web3/"
  },
  {
    Question:
      "Which versions of SSL/TLS were impacted during the 2011 SSL BEAST Attack?",
    Answer: "SSL 3.0 and TLS 1.0",
    Distractor1: "SSL 2.0 and TLS 2.0",
    Distractor2: "SSL 2.0 and TLS 1.0",
    Distractor3: "SSL 1.0 and TLS 1.0",
    Explanation:
      "BEAST stands for Browser Exploit Against SSL/TLS (BEAST) and it is a type of attack that exploits vulnerabilities in SSL and TLS protocols.",
    Link: "https://www.freecodecamp.org/news/attacks-on-ssl-tls-and-how-to-protect-your-system/"
  },
  {
    Question:
      "Which of the following techniques is a Block Cipher modeled after?",
    Answer: "PRP(Pseudo Random Permutation)",
    Distractor1: "PRF(Pseudo Random Function)",
    Distractor2: "OTP(One Time Pad)",
    Distractor3: "PRG(Pseudo Random Generator)",
    Explanation:
      "The Block Cipher cryptographic scheme is based on the principle of Pseudo Random Permutations.",
    Link: "https://www.freecodecamp.org/news/what-is-a-block-cipher/"
  },
  {
    Question:
      "Which cryptographic hashing technique is used for validating Ethereum Transactions?",
    Answer: "Keccak-256",
    Distractor1: "SHA-256",
    Distractor2: "MD5",
    Distractor3: "SHA-1",
    Explanation:
      "The Ethereum Blockchain uses the Keccak-256 hash for its Transactions and consensus mechanism.",
    Link: "https://www.freecodecamp.org/news/tag/ethereum/"
  },
  {
    Question: "Which wireless security protocol is the least secure?",
    Answer: "WEP",
    Distractor1: "WPA",
    Distractor2: "WPA2",
    Distractor3: "WPA3",
    Explanation:
      "The WEP protocol is now deprecated and considered to be the lest secure option from the list.",
    Link: "https://www.freecodecamp.org/news/wifi-security-explained/"
  },
  {
    Question: "What does PoLP stand for in Cybersecurity?",
    Answer: "Principle of Least Privilege",
    Distractor1: "Principle of Lasting Promise",
    Distractor2: "Passing of Least Privilege ",
    Distractor3: "Programming of Least Privilege",
    Explanation:
      "The Principle of Least Privilege (PoLP) is the practice of limiting access to resources for members of an organization.",
    Link: "https://www.freecodecamp.org/news/principle-of-lease-privilege-meaning-cybersecurity/"
  },
  {
    Question:
      "What is the name of the popular open-source tool that automatically finds and exploits SQL injection vulnerabilities?",
    Answer: "SQLmap",
    Distractor1: "SQL security 2.0",
    Distractor2: "SQL injection tester",
    Distractor3: "SQL injection destroyer",
    Explanation:
      "SQLmap is an open-source tool that automatically finds and exploits SQL injection vulnerabilities. We can use it to test web applications for SQL injection vulnerabilities and gain access to a vulnerable database.",
    Link: "https://www.freecodecamp.org/news/how-to-protect-against-sql-injection-attacks/"
  },
  {
    Question:
      "Which of the following is NOT a good way to protect against SQL Injection Attacks?",
    Answer: "Never sanitizing user inputs",
    Distractor1: "using parameterized queries when interacting with a database",
    Distractor2:
      "Watching your database for suspicious activity and set alerts",
    Distractor3:
      "having strong authentication and access controls to our database",
    Explanation:
      "It is important to sanitize user inputs because we want make sure the input does not contain any dangerous characters or malicious code.",
    Link: "https://www.freecodecamp.org/news/how-to-protect-against-sql-injection-attacks/"
  },
  {
    Question: "What is Cybersecurity?",
    Answer:
      "The act of securing computers and networks against malicious attackers",
    Distractor1: "the act of providing security only for Google products",
    Distractor2: "the act of providing security only for mobile phones",
    Distractor3: "the act of providing security only for Linux users",
    Explanation:
      "The act of securing computers and networks against malicious attackers",
    Link: "https://en.wikipedia.org/wiki/Computer_security"
  },
  {
    Question: "What is spoofing in Cybersecurity?",
    Answer:
      "the act of impersonating a valid service as a means of getting hold of a user's sensitive information",
    Distractor1:
      "the act of changing a user's password without their knowledge",
    Distractor2: "the act of erasing a user's data on their computer",
    Distractor3: "the act of logging out a user from a service",
    Explanation:
      "Spoofing is the act of impersonating a valid service as a means of getting hold of a user's sensitive information.",
    Link: "https://en.wikipedia.org/wiki/Spoofing_attack"
  },
  {
    Question: "What is a cyber attack?",
    Answer:
      "an attack on computer systems with the intent of stealing information",
    Distractor1:
      "an attack with malicious intent that only targets Google products",
    Distractor2: "an attack that was only used during the 1990's",
    Distractor3:
      "an attack with malicious intent that only affects Apple products",
    Explanation:
      "A cyber attack is when a malicious user launches an attack on a computer system when the intent of stealing personal information and doing harm.",
    Link: "https://en.wikipedia.org/wiki/Cyberattack"
  },
  {
    Question: "What is a Trojan horse?",
    Answer:
      "a type of malware downloaded to a computer that looks legitimate but performs malicious activity instead",
    Distractor1: "a type of software that will write emails for you",
    Distractor2: "a type of software used to delete text messages for you",
    Distractor3:
      "a type of software that will speed up downloading games to your computer",
    Explanation:
      "A Trojan horse is a type of malware downloaded to a computer that looks legitimate but performs malicious activity instead",
    Link: "https://en.wikipedia.org/wiki/Cyberattack#Trojan_horses"
  },
  {
    Question: "Which of the following is NOT a common threat in Cybersecurity?",
    Answer: "spot logging",
    Distractor1: "spoofing",
    Distractor2: "Man-in-the-middle attack",
    Distractor3: "Trojan horse",
    Explanation:
      "Common forms of threats in Cybersecurity include spoofing, Man-in-the-middle attack, and Trojan horses.",
    Link: "https://en.wikipedia.org/wiki/Cybersecurity_information_technology_list#Threats"
  },
  {
    Question: "What is Phishing?",
    Answer:
      "the act of sending messages to users with the intent of tricking them to reveal sensitive information",
    Distractor1:
      "the act of deleting someone's text messages without their knowledge",
    Distractor2: "the act of reading someone's emails without their knowledge",
    Distractor3: "the act of changing someone's computer password",
    Explanation:
      "Phishing is where a malicious user will send fraudulent messages to a user with the intent of getting them to reveal sensitive information.",
    Link: "https://en.wikipedia.org/wiki/Phishing"
  },
  {
    Question: "What is spyware?",
    Answer:
      "software that is downloaded onto your computer and monitors your activity",
    Distractor1:
      "the act of sending messages to users with the intent of tricking them to reveal sensitive information",
    Distractor2: "the act of logging out a user from a service",
    Distractor3: "an attack where hackers can send emails with fake links",
    Explanation:
      "Spyware is a type of software that is downloaded to your computer without your knowledge with the intent of monitoring your activity.",
    Link: "https://en.wikipedia.org/wiki/Spyware"
  },
  {
    Question: "What is a computer worm in Cybersecurity?",
    Answer:
      "a type of malware that duplicates itself and spreads to other computers",
    Distractor1:
      "a type of software that reads someone's emails without their knowledge",
    Distractor2: "a type of software used to delete text messages for you",
    Distractor3:
      "a type of software that sends messages to users with the intent of tricking them to reveal sensitive information",
    Explanation:
      "A computer worm is a type of malware that duplicates itself and spreads to other computers.",
    Link: "https://en.wikipedia.org/wiki/Computer_worm"
  },
  {
    Question:
      "Which attack aims to overwhelm a target system or network with a flood of traffic, rendering it inaccessible to legitimate users?",
    Answer: "Denial of Service",
    Distractor1: "Spear phishing",
    Distractor2: "Man in the Middle",
    Distractor3: "SQL Injection",
    Explanation:
      "Denial of Service (DoS) attacks aim to flood the victim servers with fake requests, thus preventing them from serving legitimate users.",
    Link: "https://www.freecodecamp.org/news/how-we-handled-a-denial-of-service-attack-a-simple-security-lesson-8cdd542d4def/"
  },
  {
    Question:
      "In password protection, what is the name of a random string of data used to modify a password hash called?",
    Answer: "Salt",
    Distractor1: "Bridge",
    Distractor2: "Bypass",
    Distractor3: "Sheep dip",
    Explanation:
      "Salt is added to the password before hashing it to increase its security and prevent attacks",
    Link: "https://www.freecodecamp.org/news/learn-to-speak-the-security-lingo/"
  },
  {
    Question:
    "What is a common method to protect sensitive data in transit over the internet?",
    Answer: "Using HTTPS (Hypertext Transfer Protocol Secure) for secure communication.",
    Distractor1: "Encrypting data only at the server-side.",
    Distractor2: "Sharing data through plain HTTP.",
    Distractor3: "Storing sensitive data in plaintext on the server.",
    Explanation:
      "HTTPS encrypts the data transmitted between a user's web browser and the web server, ensuring confidentiality and integrity during transit.",
    Link: "https://www.freecodecamp.org/news/what-is-https-a-guide-to-secure-web-browsing-and-browser-encryption/"
  }
];

export default securityQuiz;
