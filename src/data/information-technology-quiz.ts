const informationTechnologyQuiz = [
  {
    Question: "Which of the following validates the integrity of data?",
    Answer:
      "Hashing",
    Distractor1: "Compression",
    Distractor2: "Stenography",
    Distractor3: "Symmetric Encryption",
    Explanation:
      "Hashing is a one-way function that takes an input and produces a fixed-length output. It is used to validate the integrity of data.",
    Link: "https://www.freecodecamp.org/news/what-is-hashing/",
  },
  {
    Question: "What is PRAM?",
    Answer:
      "A battery powered RAM for older Mac computers that holds important information for your system",
    Distractor1: "A newer type of RAM for Mac computers",
    Distractor2: "A newer type of RAM for Windows Computers",
    Distractor3:
      "A battery powered RAM for older PC computers that holds important information for your system",
    Explanation:
      "Parameter Random Access Memory is a battery powered RAM for older Mac computers that holds important information for your system.",
    Link: "https://www.freecodecamp.org/news/pram-definition/",
  },
  {
    Question: "What does LCD stand for?",
    Answer: "Liquid Crystal Display",
    Distractor1: "Label Crystal Display",
    Distractor2: "Liquid Cache Display",
    Distractor3: "Liquid Crystal Dictionary",
    Explanation:
      "Liquid Crystal Display is a type of display that uses liquid crystals to display images.",
    Link: "https://www.freecodecamp.org/news/lcd-definition/",
  },
  {
    Question:
      "Which hardware component has all of its data wiped when the power turns off? ",
    Answer: "RAM (Random Access Memory)",
    Distractor1: "HDD (Hard Disk Drive)",
    Distractor2: "SSD (Solid State Drive)",
    Distractor3: "CPU (Central Processing Unit)",
    Explanation:
      "RAM (short for Random Access Memory), or the main memory, is a volatile, short-term type of memory that only stores information temporarily while a computer is powered by electricity. It is used when you open and are using an application or file. When the power turns off, any files you created or updates you made and didn't save, will be lost and will be hard to retrieve.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/",
  },
  {
    Question:
      "Which part of the CPU is responsible for carrying out mathematical operations?",
    Answer: "The Arithmetic Logic Unit",
    Distractor1: "The Control Unit",
    Distractor2: "Registers",
    Distractor3: "Cache Memory",
    Explanation:
      "The ALU (short for Arithmetic Logic Unit), is a digital circuit that performs arithmetic operations such as addition, subtraction, multiplication, and division.",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/",
  },
  {
    Question: "What is a Solid State Drive?",
    Answer:
      "A type of storage device that uses flash memory to store and access data",
    Distractor1: "A device to record text to a disk",
    Distractor2: "A device to translate code from one language to another ",
    Distractor3: "A screen editor used for Unix",
    Explanation:
      "A type of storage device that uses flash memory to store and access data",
    Link: "https://www.freecodecamp.org/news/ssd-solid-state-drive-definition/",
  },
  {
    Question: "In Windows, what is a maximum length for a filename?",
    Answer: "32,767 characters",
    Distractor1: "225 characters",
    Distractor2: "256 characters",
    Distractor3: "300,000 characters",
    Explanation:
      "The maximum length for a file name is 32,767 characters.",
    Link: "https://www.ibm.com/docs/en/spectrum-protect/8.1.9?topic=parameters-file-specification-syntax",
  },
  {
    Question: "What does DNS stand for?",
    Answer: "Domain Name System",
    Distractor1: "Dynamic Name System",
    Distractor2: "Domain Naming System",
    Distractor3: "Domain Network System",
    Explanation: "DNS is an abbreviation for Domain Name System",
    Link: "https://www.freecodecamp.org/news/what-is-dns/",
  },
  {
    Question: "What does IP stand for?",
    Answer: "Internet Protocol",
    Distractor1: "Interconnection Protocol",
    Distractor2: "International Passenger",
    Distractor3: "Internal Product",
    Explanation:
      "The IP address is a special number that makes sure that the information sent through the internet reaches the right destination. ",
    Link: "https://www.freecodecamp.org/news/what-is-my-ip-address-for-my-router-how-to-find-your-wifi-address/",
  },
  {
    Question: "Which OSI layer is responsible for email and file transfers?",
    Answer: "The application layer",
    Distractor1: "The network layer",
    Distractor2: "The session layer ",
    Distractor3: "The presentation layer",
    Explanation:
      "Layer 7 is the application layer. Electronic mail programs, for example, are specifically created to run over a network and utilize networking functionality, such as email protocols, which fall under Layer 7. ",
    Link: "https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/",
  },
  {
    Question: "How many versions of the Internet Protocol are there?",
    Answer: "2",
    Distractor1: "4",
    Distractor2: "6",
    Distractor3: "1",
    Explanation:
      "IPv4 is the first, and most widely used, version of the Internet Protocol. IPv6 is the latest version of the Internet Protocol. It's the successor of IPv4 and there will be a slow shift towards it in the future.",
    Link: "https://www.freecodecamp.org/news/ipv4-vs-ipv6-what-is-the-difference-between-ip-addressing-schemes/",
  },
  {
    Question: "What is a Ping?",
    Answer:
      "The process of sending signals to other devices and waiting for a response",
    Distractor1:
      "A protocol that allows users to send files from one computer to another",
    Distractor2:
      "A way to share a single processor for multiple independent jobs",
    Distractor3: "A portion of memory used to store messages",
    Explanation:
      "A ping is the process of sending signals to other devices and waiting for a response",
    Link: "https://www.freecodecamp.org/news/ping-definition/",
  },
  {
    Question: "What does UDP stand for?",
    Answer: "User Datagram Protocol",
    Distractor1: "Unified Datagram Protocol",
    Distractor2: "User Database Protocol",
    Distractor3: "User Datagram Patch",
    Explanation:
      'User Datagram Protocol of "UDP" is a type of connectionless protocol online.',
    Link: "https://www.freecodecamp.org/news/tcp-vs-udp/",
  },
  {
    Question:
      "Which layer of the Open Systems Interconnection (OSI) model is responsible for logical addressing and routing?",
    Answer: "The network layer",
    Distractor1: "The presentation layer",
    Distractor2: "The session layer",
    Distractor3: "The transport layer",
    Explanation:
      "The network layer is layer 3 of the Open Systems Interconnection (OSI) model. This is where we send information between and across networks through the use of routers. ",
    Link: "https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/",
  },
  {
    Question:
      "Which layer of the Open Systems Interconnection (OSI) model is responsible for data formatting and encryption?",
    Answer: "The presentation layer",
    Distractor1: "The application layer",
    Distractor2: "Layer 1",
    Distractor3: "Layer 5",
    Explanation:
      "The presentation layer is layer 6 in the Open Systems Interconnection (OSI) model. This layer is responsible for data formatting, such as character encoding and conversions, and data encryption.",
    Link: "https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/",
  },
  {
    Question: "How many bits are there in an IPv4 address?",
    Answer: "32",
    Distractor1: "64",
    Distractor2: "16",
    Distractor3: "8",
    Explanation:
      "IPv4 is a 32-bit address and it's made up of 4 blocks. Each block is separated by a dot, and looks something like this: XXX.XXX.XXX.XXX",
    Link: "https://www.freecodecamp.org/news/ipv4-vs-ipv6-what-is-the-difference-between-ip-addressing-schemes/",
  },
  {
    Question: "What does TCP stand for?",
    Answer: "Transmission Control Protocol",
    Distractor1: "Terabyte Control Protocol",
    Distractor2: "Transmission Carrier Protocol",
    Distractor3: "Transmission Control Patch",
    Explanation:
      'Transmission Control Protocol or "TCP" is a type of networking protocol online',
    Link: "https://www.freecodecamp.org/news/tcp-vs-udp/",
  },
  {
    Question: "What does DNS do?",
    Answer: "Maps domain names to IP addresses",
    Distractor1: "Is responsible for encrypting HTTP connections",
    Distractor2:
      "Provides the web client with web files during client-server communication",
    Distractor3: "Breaks down web information into smaller chunks, or packets",
    Explanation:
      "The Domain Name System (DNS) maps human-readable domain names to IP addresses (unique identifiers). For example, DNS translates and maps the domain freeCodeCamp.org to the IP address 104.26.2.33.",
    Link: "https://www.freecodecamp.org/news/what-is-dns/",
  },
  {
    Question: "What is a Subnet?",
    Answer: "A smaller network that is nested inside a large network.",
    Distractor1: "A protocol that sends and receives data from a remote device",
    Distractor2:
      "A protocol that assures accurate time by referring to clocks on the internet",
    Distractor3: "A feature that allows users to access remote services",
    Explanation:
      "A Subnet is a smaller network that is nested inside a large network.",
    Link: "https://www.freecodecamp.org/news/subnet-definition/",
  },
  {
    Question: "What does HTTPS stand for?",
    Answer: "HyperText Transfer Protocol Secure",
    Distractor1: "HyperText Transfer Protocol Standard",
    Distractor2: "HyperTransfer Text Protocol Secure",
    Distractor3: "HyperText Transfer Protocol Set",
    Explanation:
      "HTTPS is a secure way of transferring data between a web server and a web browser",
    Link: "https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/",
  },
  {
    Question:
      "Which layer of the Open Systems Interconnection (OSI) model is responsible for error detection?",
    Answer: "The data link layer",
    Distractor1: "The transport layer",
    Distractor2: "The network layer",
    Distractor3: "The physical layer",
    Explanation:
      "The data link layer is layer 2 in the Open Systems Interconnection (OSI) model. Layer 2 defines how data is formatted for transmission, how much data can flow between nodes, for how long, and what to do when errors are detected in this flow.",
    Link: "https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/",
  },
  {
    Question: "What is a username?",
    Answer: "A unique name for a user on a website",
    Distractor1: "A secret set of characters",
    Distractor2: "A data type",
    Distractor3: "A special type of object",
    Explanation: "A username is a unique name for a user on a website.",
    Link: "https://www.freecodecamp.org/news/username-definition/",
  },
  {
    Question: "Which protocol secures communication between computer networks?",
    Answer: "HTTPS ",
    Distractor1: "HTTP",
    Distractor2: "FTP",
    Distractor3: "SMTP",
    Explanation:
      "HTTPS is a more secure and confidential version of HTTP. It's the safest way to transfer data between a browser and a server.",
    Link: "https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/",
  },
  {
    Question: "What does Mbps stand for?",
    Answer: "Megabits per second",
    Distractor1: "Megabytes per second",
    Distractor2: "Megabits per sound",
    Distractor3: "Megabytes per system",
    Explanation:
      "Mbps stands for Megabits per second, not to be confused with MBps (with a capital B) that stands for Megabytes per second.",
    Link: "https://en.wikipedia.org/wiki/Data-rate_units#Megabit_per_second",
  },
  {
    Question: "Which port is used for HTTP?",
    Answer: "80",
    Distractor1: "443",
    Distractor2: "40",
    Distractor3: "60",
    Explanation:
      "By default, HTTP uses Port-80 (HTTP stands for HyperText Transfer Protocol)",
    Link: "https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/",
  },
  {
    Question: "What is P2P?",
    Answer: "A network where two devices communicate directly.",
    Distractor1: "A way to request data from a server.",
    Distractor2: "A special type of file system.",
    Distractor3: "A special programming library.",
    Explanation:
      'Peer to Peer or "P2P" is a network where two devices communicate directly.',
    Link: "https://www.freecodecamp.org/news/p2p-definition/",
  },
  {
    Question: "What does URL stand for?",
    Answer: "Universal Resource Locator",
    Distractor1: "Unified Resource Locator",
    Distractor2: "Universal Redirect Locator",
    Distractor3: "Universal Resource Label",
    Explanation:
      "URL stands for Universal Resource Locator and it serves as the location of an online resource",
    Link: "https://www.freecodecamp.org/news/url-definition/",
  },
  {
    Question: "How many bits are there in an IPv6 address?",
    Answer: "128",
    Distractor1: "32",
    Distractor2: "126",
    Distractor3: "64",
    Explanation:
      "IPv6 is a 128-bit address, meaning that there are 2^128 addresses available.",
    Link: "https://www.freecodecamp.org/news/ipv4-vs-ipv6-what-is-the-difference-between-ip-addressing-schemes/",
  },
  {
    Question: "What's the difference between HTTP and HTTPS?",
    Answer: "HTTPS is the secure version of HTTP. It's HTTP with encryption.",
    Distractor1:
      "HTTP sends HyperText data between a web server and a web browser and HTTPS doesn't",
    Distractor2: "There is no difference",
    Distractor3: "SSL certificates are required for HTTP, but not for HTTPS",
    Explanation:
      "HTTPS is the secure version of HTTP, the basic network protocol for sending hypertext over the web. In HTTPS there are additional steps for security, such as TSL/SSL certificates and the TSL/SSL handshake.",
    Link: "https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/",
  },
  {
    Question:
      "Which layer of the Open Systems Interconnection (OSI) model is responsible for establishing, maintaining, and terminating a communication session?",
    Answer: "Layer 5",
    Distractor1: "Layer 1",
    Distractor2: "Layer 4",
    Distractor3: "Layer 3",
    Explanation:
      "Layer 5 is the session layer of the Open Systems Interconnection (OSI) model. This layer establishes, maintains, and terminates sessions.",
    Link: "https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/",
  },
  {
    Question:
      "Which protocol is used for transferring files between a client and server over a network?",
    Answer: "FTP",
    Distractor1: "SMTP",
    Distractor2: "PTP",
    Distractor3: "POP",
    Explanation:
      "File Transfer Protocol (FTP) is a standard protocol used for transferring files between a client and a server over a network.",
    Link: "https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/",
  },
  {
    Question:
      "Which layer of the Open Systems Interconnection (OSI) model is responsible for providing reliable end to end transmission of a message?",
    Answer: "The transport layer",
    Distractor1: "The physical layer",
    Distractor2: "The data link layer",
    Distractor3: "The session layer",
    Explanation:
      "The transport layer is layer 4 of the Open Systems Interconnection (OSI) model and it provides end-to-end transmission of a message by segmenting a message into multiple data packets. The layer supports connection-oriented and connectionless communication.",
    Link: "https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/",
  },
  {
    Question: "What is a Subnet Mask?",
    Answer: "Creates a range for IP addresses used in a subnet",
    Distractor1: "A type of software life cycle described by W. W. Royce",
    Distractor2:
      "A device that performs restricted operations on time-sharing systems",
    Distractor3: "A device that reboots the system",
    Explanation:
      "A Subnet Mask is used to creates a range for IP addresses used in a subnet. ",
    Link: "https://www.freecodecamp.org/news/subnet-mask-definition/",
  },
  {
    Question: "Which one is NOT a main component of a CPU?",
    Answer: "AXLE",
    Distractor1: "Control Unit",
    Distractor2: "Arithmetic Logic Unit",
    Distractor3: "Registers",
    Explanation:
      "The Control Unit, Arithmetic Logic Unit, and Registers are important parts of the CPU. ",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/",
  },
  {
    Question: "Where is the CPU located on a computer?",
    Answer: "The motherboard",
    Distractor1: "Graphics Processing Unit",
    Distractor2: "Random Access Memory",
    Distractor3: "Solid State Drive",
    Explanation: "The CPU is located on the motherboard of a computer.",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/",
  },
  {
    Question: "What are registers inside a CPU responsible for?",
    Answer: "They temporarily hold data the CPU needs fast access to",
    Distractor1: "They help improve the speed of your computer",
    Distractor2:
      "They check and confirm every process that is happening on your computer",
    Distractor3:
      "They are responsible for carrying out all mathematical and logical operations",
    Explanation:
      "Registers are an extremely fast memory location. The data and instructions that are being processed during the fetch-execute cycle a CPU performs are stored there, for quick access by the processor.",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/",
  },
  {
    Question: "What is a Hard Disk Drive?",
    Answer:
      "A type of storage device that holds data including the operating system, applications, and files",
    Distractor1: "A device to record sound to a disk",
    Distractor2: "A device for the computer's short term memory",
    Distractor3: "A port used to connect to a computer to other devices",
    Explanation:
      "A type of storage device that holds data including the operating system, applications, and files",
    Link: "https://www.freecodecamp.org/news/hdd-hard-disk-drive-definition/",
  },
  {
    Question:
      "Which of the following is NOT considered a piece of computer hardware?",
    Answer: "The Operating System  ",
    Distractor1: "The CPU (Central Processing Unit)",
    Distractor2: "The keyboard",
    Distractor3: "The mouse",
    Explanation:
      "Hardware are the physical components you can touch, and they are located on both the outside and the inside of a computer.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/",
  },
  {
    Question: "Which of the following is an example of volatile memory?",
    Answer: "RAM (Random Access Memory)",
    Distractor1: "SSD (Solid State Drive)",
    Distractor2: "MRAM ",
    Distractor3: "ROM",
    Explanation:
      "While RAM is very fast, it is a type of volatile memory. This means that it only stores information while the computer is on. Unlike an HDD or SSD, once you shut down your computer, everything stored in RAM is lost.",
    Link: "https://www.freecodecamp.org/news/ram-definition/",
  },
  {
    Question: "An application software for accessing the World Wide Web is known as...",
    Answer: "Browser",
    Distractor1: "IDE",
    Distractor2: "API",
    Distractor3: "Bug",
    Explanation:
      "An application software for accessing the World Wide Web is known as the browser.",
    Link: "https://www.freecodecamp.org/news/web-application-security-understanding-the-browser-5305ed2f1dac/",
  },
  {
    Question: "What does WWW stand for?",
    Answer: "World Wide Web",
    Distractor1: "World Web Wide",
    Distractor2: "Wide World Web",
    Distractor3: "World World Web",
    Explanation: "WWW stands for World Wide Web.",
    Link: "https://www.britannica.com/topic/World-Wide-Web",
  },
  {
    Question: "Which one is NOT an internal piece of hardware in a computer?",
    Answer: "GAMMA",
    Distractor1: "motherboard",
    Distractor2: "Central Processing Unit",
    Distractor3: "Graphics Processing Unit",
    Explanation:
      "Some important pieces of a computer's internal hardware include a motherboard, CPU, GPU, RAM and HDD.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/",
  },
  {
    Question: "What CPU component is responsible for comparing data?",
    Answer: "The Arithmetic Logic Unit",
    Distractor1: "The Control Unit",
    Distractor2: "Registers",
    Distractor3: "RAM",
    Explanation:
      "The ALU (short for Arithmetic Logic Unit), is the part where all mathematical calculations take place, such as addition, subtraction, multiplication, and division. The ALU is also responsible for all of the logical operations for decision making, such as comparing data.",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/",
  },
  {
    Question:
      "Which one of these options is layer 1 in the Open Systems Interconnection (OSI) model?",
    Answer: "The physical layer",
    Distractor1: "The transport Layer",
    Distractor2: "The network layer",
    Distractor3: "The application layer",
    Explanation:
      "Layer 1 is the physical layer. There’s a lot of technology in Layer 1 - everything from physical network devices, cabling, to how the cables hook up to the devices.",
    Link: "https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/",
  },
];

export default informationTechnologyQuiz;
