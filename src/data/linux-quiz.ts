const linuxQuiz = [
    {
        Question: "In Linux, what is a maximum length for a filename?",
        Answer: "255 Bytes",
        Distractor1: "225 Bytes",
        Distractor2: "235 Bytes",
        Distractor3: "295 Bytes",
        Explanation:
          "The maximum length for a file name is 255 bytes. The maximum combined length of both the file name and path name is 4096 bytes.",
        Link: "https://www.ibm.com/docs/en/spectrum-protect/8.1.9?topic=parameters-file-specification-syntax",
      },
      {
        Question: "In Linux, what does the resize2fs command do?",
        Answer:
          "This can be used to change the size of an ext2 or ext3 filesystem.",
        Distractor1: "This is used manipulate the size of partitions.",
        Distractor2: "This is used to create an ext2, ext3, or ext4 filesystem",
        Distractor3: "This is used to check the family of filesystems.",
        Explanation:
          "The resize2fs program will resize ext2, ext3, or ext4 file systems. It can be used to enlarge or shrink an unmounted file system located on the device. The resize2fs program does not manipulate the size of partitions.",
        Link: "http://manpages.ubuntu.com/manpages/bionic/man8/resize2fs.8.html",
      },
      {
        Question:
          "In Linux, which command is used to display information about the processes using a filesystem?",
        Answer: "fuser",
        Distractor1: "ps",
        Distractor2: "top",
        Distractor3: "grep",
        Explanation:
          "The fuser utility displays the process IDs of the processes that are using the files specified as arguments.",
        Link: "https://docs.oracle.com/cd/E88353_01/html/E72487/fuser-8.html",
      },
      {
        Question:
          "In Linux, which command prints the path to the current directory you are in?",
        Answer: "pwd",
        Distractor1: "cat",
        Distractor2: "cd",
        Distractor3: "ls",
        Explanation:
          "pwd(short for print working directory) prints the current folder path and is helpful when you are lost in the terminal.",
        Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-pwd-command",
      },
      {
        Question: "In Linux, which of the following is the pipe symbol?",
        Answer: "|",
        Distractor1: "/",
        Distractor2: "+",
        Distractor3: "[]",
        Explanation:
          "With the pipe symbol (|), the output of one command serves as the input to another.",
        Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cd-command",
      },
      {
        Question: "In Linux, which command is used to send HTTP requests?",
        Answer: "curl",
        Distractor1: "tar",
        Distractor2: "uname",
        Distractor3: "gzip",
        Explanation:
          "Curl is a command-line tool that allows us to do HTTP requests from shell",
        Link: "https://www.freecodecamp.org/news/how-to-start-using-curl-and-why-a-hands-on-introduction-ea1c913caaaa/",
      },
      {
        Question:
          "In Linux, which command is used to remove adjacent duplicate lines inside a file?",
        Answer: "uniq",
        Distractor1: "sort",
        Distractor2: "rm",
        Distractor3: "rmdir",
        Explanation:
          "The uniq command removes duplicate lines in a file, by default.",
        Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
      },
      {
        Question:
          "In Linux, which command is used to create multiple nested folders?",
        Answer: "mkdir -p",
        Distractor1: "mkdir -27",
        Distractor2: "makedir",
        Distractor3: "makedir -p",
        Explanation:
          "You can create multiple nested folders by adding the -p option to the mkdir command.",
        Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
      },
];

export default linuxQuiz;