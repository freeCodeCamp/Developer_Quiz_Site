const linuxQuiz = [
  {
    Question:
      "In Linux, Which command is used to convert and copy files with specific size?",
    Answer: "dd",
    Distractor1: "cp",
    Distractor2: "mv",
    Distractor3: "df",
    Explanation:
      "The dd command is used to convert data along with copying files of specific size.",
    Link: "https://www.freecodecamp.org/news/linux-example-bash-command-line/#linux-dd-command-example"
  },
  {
    Question:
      "In Linux, Which command is used to export variables to child processes?",
    Answer: "export",
    Distractor1: "env",
    Distractor2: "move",
    Distractor3: "df",
    Explanation:
      "The export command is used to export variables to child processes.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-export-command"
  },
  {
    Question:
      "In Linux, which command option is used to perform a case-insensitive search when searching for text patterns?",
    Answer: "grep -i",
    Distractor1: "grep -c",
    Distractor2: "grep -v",
    Distractor3: "grep -s",
    Explanation:
      "The grep -i command is used to perform a case-insensitive search, allowing you to find text patterns ignoring the case.",
    Link: "https://man7.org/linux/man-pages/man1/grep.1.html"
  },
  {
    Question: "In Linux, which command is used to set limits on a file size?",
    Answer: "ulimit",
    Distractor1: "fsize",
    Distractor2: "flimit -r",
    Distractor3: "usize",
    Explanation:
      "ulimit is a Linux command that is used to get and set a limit on a file size.",
    Link: "https://man7.org/linux/man-pages/man3/ulimit.3.html"
  },
  {
    Question:
      "In Linux, which one of the following commands can be used to create a symbolic link between files?",
    Answer: "ln",
    Distractor1: "ls",
    Distractor2: "ln",
    Distractor3: "link",
    Explanation:
      "In Linux, the ln command is used to make links between files.",
    Link: "https://man7.org/linux/man-pages/man1/ln.1.html"
  },
  {
    Question: "Which command finds memory being used by Linux?",
    Answer: "All of these",
    Distractor1: "free-m",
    Distractor2: "htop",
    Distractor3: "vmstat",
    Explanation:
      "The top command is used to display dynamic real-time information. You can use free-m, htop, top or vmstat to find memory being used by Linux.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-top-command"
  },
  {
    Question:
      "In Linux, which option is used with the uname command to print the processor architecture name?",
    Answer: "-p",
    Distractor1: "-arch",
    Distractor2: "-ps",
    Distractor3: "-pname",
    Explanation:
      "In Linux, the -p option can be used with the uname command to print the processor architecture name.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command"
  },
  {
    Question:
      "In Linux, which option is used with the uname command to print the node network name?",
    Answer: "-n",
    Distractor1: "-network",
    Distractor2: "-node",
    Distractor3: "-ntwrk",
    Explanation:
      "In Linux, the -n option can be used with the uname command to print the node network name.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command"
  },
  {
    Question:
      "In Linux, which command converts input and uses it as an argument for another command?",
    Answer: "xargs",
    Distractor1: "convert",
    Distractor2: "stdin",
    Distractor3: "argv",
    Explanation:
      "The xargs command is used in a UNIX shell to convert input from the standard input and use it as an argument for another command.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-xargs-command"
  },
  {
    Question:
      "In Linux, which command is used to display all the users logged in to the system?",
    Answer: "who",
    Distractor1: "all-users",
    Distractor2: "show",
    Distractor3: "whoami",
    Explanation: "The who command displays the users logged in to the system.",
    Link: "https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/"
  },
  {
    Question:
      "In Linux, which command is used to remove the writing and executing permissions for 'group' and 'other'?",
    Answer: "chmod go-wx list",
    Distractor1: "chmod go+wx list",
    Distractor2: "chmod a-wx list",
    Distractor3: "chmod go+r list",
    Explanation:
      "The 'chmod go-wx list' is used to remove the writing and executing permissions for 'group' and 'other' for a file named list.",
    Link: "https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/"
  },
  {
    Question:
      "In Linux, which one of the following commands determines file type?",
    Answer: "file",
    Distractor1: "kind",
    Distractor2: "wget",
    Distractor3: "which",
    Explanation: "The command 'file' determines file type.",
    Link: "https://man7.org/linux/man-pages/man1/file.1.html"
  },
  {
    Question:
      "In Linux, which one of the following commands locates the binary, source, and manual page files for a command?",
    Answer: "whereis <command>",
    Distractor1: "locate <command>",
    Distractor2: "wget <command>",
    Distractor3: "which <command>",
    Explanation:
      "The command 'whereis' locates the binary, source, and manual page files for a command.",
    Link: "https://man7.org/linux/man-pages/man1/whereis.1.html"
  },
  {
    Question:
      "In Linux, which one of the following commands lists threads of a process?",
    Answer: "ps -T -p <PID>",
    Distractor1: "ps -ef",
    Distractor2: "top thread <PID>",
    Distractor3: "show_thread <PID>",
    Explanation:
      "The option '-p' selects the process by PID, and the option '-T' is to show threads.",
    Link: "https://man7.org/linux/man-pages/man1/ps.1.html"
  },
  {
    Question:
      "In Linux, which one of the following commands concatenates and prints files in reverse?",
    Answer: "tac",
    Distractor1: "catr",
    Distractor2: "cat_reverse",
    Distractor3: "print_reverse",
    Explanation: "The command 'tac' prints files in reverse.",
    Link: "https://man7.org/linux/man-pages/man1/tac.1.html"
  },
  {
    Question:
      "In Linux, which one of the following commands repeatedly outputs a line with all specified string(s) or just 'y'?",
    Answer: "yes",
    Distractor1: "no",
    Distractor2: "loop",
    Distractor3: "iterate",
    Explanation:
      "The command 'yes' repeatedly outputs a line with all specified string(s), or 'y'.",
    Link: "https://man7.org/linux/man-pages/man1/yes.1.html"
  },
  {
    Question: "In Linux, which one is not a communication command?",
    Answer: "grep",
    Distractor1: "mesg",
    Distractor2: "mail",
    Distractor3: "write",
    Explanation:
      "The grep filter searches a file for a particular pattern of characters, and displays all lines that contain that pattern.",
    Link: "https://www.freecodecamp.org/news/grep-command-tutorial-how-to-search-for-a-file-in-linux-and-unix/"
  },
  {
    Question:
      "Which of the following commands creates a file without opening it?",
    Answer: "touch <filename>",
    Distractor1: "nano <filename>",
    Distractor2: "cat <filename>",
    Distractor3: "cp <filename>",
    Explanation:
      "The touch <filename> command creates a new file without opening it which can be verified using the ls command.",
    Link: "https://www.freecodecamp.org/news/linux-basics/"
  },
  {
    Question: "In Linux, which command grants every permission to everyone?",
    Answer: "chmod 777",
    Distractor1: "chmod 111",
    Distractor2: "chmod 724",
    Distractor3: "chmod 666",
    Explanation:
      "The command chmod 777 activates all the permission access to owner, group and others by summing 4, 2, 1 on the octal base.",
    Link: "https://www.freecodecamp.org/news/how-to-change-file-permissions-with-the-chmod-command-on-linux/"
  },
  {
    Question:
      "In Linux, which command helps in listing all the environment variables?",
    Answer: "printenv",
    Distractor1: "lsenv",
    Distractor2: "listenv",
    Distractor3: "printvar",
    Explanation:
      "The command printenv helps in listing all the environment variables, set either by the system, or by your own shell scripts and configuration.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-printenv-command"
  },
  {
    Question: "In Linux, what is a maximum length for a filename?",
    Answer: "255 Bytes",
    Distractor1: "225 Bytes",
    Distractor2: "235 Bytes",
    Distractor3: "295 Bytes",
    Explanation:
      "The maximum length for a file name is 255 bytes. The maximum combined length of both the file name and path name is 4096 bytes.",
    Link: "https://www.ibm.com/docs/en/spectrum-protect/8.1.9?topic=parameters-file-specification-syntax"
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
    Link: "http://manpages.ubuntu.com/manpages/bionic/man8/resize2fs.8.html"
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
    Link: "https://docs.oracle.com/cd/E88353_01/html/E72487/fuser-8.html"
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
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-pwd-command"
  },
  {
    Question: "In Linux, which of the following is the pipe symbol?",
    Answer: "|",
    Distractor1: "/",
    Distractor2: "+",
    Distractor3: "[]",
    Explanation:
      "With the pipe symbol (|), the output of one command serves as the input to another.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cd-command"
  },
  {
    Question: "In Linux, which command is used to send HTTP requests?",
    Answer: "curl",
    Distractor1: "tar",
    Distractor2: "uname",
    Distractor3: "gzip",
    Explanation:
      "Curl is a command-line tool that allows us to do HTTP requests from shell",
    Link: "https://www.freecodecamp.org/news/how-to-start-using-curl-and-why-a-hands-on-introduction-ea1c913caaaa/"
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
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
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
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question:
      "In the vim editor, which mode helps us to copy, paste and delete the text?",
    Answer: "visual mode",
    Distractor1: "yanking mode",
    Distractor2: "insert mode",
    Distractor3: "normal mode",
    Explanation:
      "Visual Mode in vim helps the user to copy, paste and delete the text like a normal editor.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-vim-editor-command"
  },
  {
    Question: "In Linux, which is the default shell?",
    Answer: "Bourne Again SHell",
    Distractor1: "PowerSHell",
    Distractor2: "Emacs",
    Distractor3: "Fish",
    Explanation:
      "Bash (short for Bourne Again SHell) is the most widely used shell, packaged by default for most Linux distributions",
    Link: "https://www.freecodecamp.org/news/linux-command-line-bash-tutorial/"
  },
  {
    Question: "In Linux, which command is used to create an archive?",
    Answer: "tar",
    Distractor1: "gzip",
    Distractor2: "gunzip",
    Distractor3: "diff",
    Explanation:
      "The tar command is used to create an archive, grouping multiple files in a single file, without compressing them",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-tar-command"
  },
  {
    Question: "What is the grep command used for?",
    Answer: "Searching through text in the given file",
    Distractor1: "Move the contents of a file to another one",
    Distractor2: "Rename the file",
    Distractor3: "Delete all text in a file",
    Explanation:
      "grep stands for Globally Search For Regular Expression and Print out. It is a command line tool used in UNIX and Linux systems to search a specified pattern in a file or group of files.",
    Link: "https://www.freecodecamp.org/news/grep-command-tutorial-how-to-search-for-a-file-in-linux-and-unix/"
  },
  {
    Question: "In Linux, which command is used to rename files and folders?",
    Answer: "mv",
    Distractor1: "touch",
    Distractor2: "mkdir",
    Distractor3: "rm",
    Explanation:
      "You rename files and folders by using the mv(short for move)  command.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question: "In Linux, what does the ls -a command do?",
    Answer: "lists out the directories and files - including all hidden files",
    Distractor1: "lists only the hidden files",
    Distractor2: "lists files and then deletes them",
    Distractor3: "show deleted files",
    Explanation:
      "The ls -a(short for all) command lists all directories(folders) and files in the current directory. This includes all hidden files. The -a flag(or option) shows hidden files. Hidden files are files that start with a dot (.)",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#introductiontolinuxandshells"
  },
  {
    Question:
      "In Linux, which command is used to change the owner of a file/directory?",
    Answer: "chown",
    Distractor1: "uname",
    Distractor2: "whoami",
    Distractor3: "echo",
    Explanation:
      "Every file/directory in an Operating System like Linux or macOS (and every UNIX system in general) has an owner. The owner of a file can do everything with it. It can decide the fate of that file. The owner (and the root user) can change the owner to another user, too, using the chown command.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question:
      "In grep, which wildcard can you use to select ALL files in a directory?",
    Answer: "*",
    Distractor1: "?",
    Distractor2: "[]",
    Distractor3: "!",
    Explanation:
      "You can use the wildcard (*) to select all files in a directory. For example the ls * command would list ALL files in the current directory.",
    Link: "https://www.freecodecamp.org/news/grep-command-tutorial-how-to-search-for-a-file-in-linux-and-unix/"
  },
  {
    Question:
      "In Linux, which command displays information about the Operating System?",
    Answer: "uname",
    Distractor1: "echo",
    Distractor2: "man",
    Distractor3: "find",
    Explanation:
      "Calling uname without any options will return the Operating System codename. The m option shows the hardware name and the p option prints the processor architecture name.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command"
  },
  {
    Question:
      "In the Vim text editor, which command is used to move the cursor one character to the left?",
    Answer: "h",
    Distractor1: "j",
    Distractor2: "k",
    Distractor3: "l",
    Explanation:
      "To move the cursor one character to the left, use the h command.",
    Link: "https://www.freecodecamp.org/news/vim-editor-modes-explained/"
  },
  {
    Question: "In Linux, which command is used for creating files?",
    Answer: "touch",
    Distractor1: "mv",
    Distractor2: "man",
    Distractor3: "mkdir",
    Explanation:
      "You create an empty file using the touch command, followed by the name of the file e.g. touch demo.txt",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-touch-command"
  },
  {
    Question:
      "In Linux, which command is used for counting the total amount of lines, words, and bytes in a file?",
    Answer: "wc",
    Distractor1: "countl",
    Distractor2: "countw",
    Distractor3: "countwl",
    Explanation:
      "The wc command gives us useful information about a file. The first column returned in the output  is the number of lines. The second is the number of words. The third is the number of bytes.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command"
  },
  {
    Question: "In Linux, which command is used to move into a directory?",
    Answer: "cd",
    Distractor1: "mv",
    Distractor2: "pwd",
    Distractor3: "rm",
    Explanation:
      "Once you've created a folder, you can move into it with the cd command(which stands for change directory). You invoke it specifying a folder to move into. You can specify a folder name, or an entire path.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question:
      "In Linux, which command deletes a directory with files inside it?",
    Answer: "rm -rf",
    Distractor1: "rmdir",
    Distractor2: "rm",
    Distractor3: "ls",
    Explanation:
      "To delete folders with files in them, you use the more generic rm command which deletes files . The -rf option is used to recursively and forcefully delete all files contained in the directory.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-rmdir-command"
  },
  {
    Question:
      "In Linux, which command is used to count JUST the number of bytes in a file?",
    Answer: "wc -c",
    Distractor1: "wc -w",
    Distractor2: "wc -l",
    Distractor3: "wc -z",
    Explanation:
      "To count just the number of bytes in a file you use the wc command with the -c option.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command"
  },
  {
    Question: "In Linux, what does the cd command stand for?",
    Answer: "change directory",
    Distractor1: "create directory",
    Distractor2: "created directory",
    Distractor3: "changed directory",
    Explanation: "cd stands for change directory",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cd-command"
  },
  {
    Question:
      "In Linux, which command is used to remove all previous commands and output from the terminal?",
    Answer: "clear",
    Distractor1: "exit",
    Distractor2: "deleting",
    Distractor3: "rm",
    Explanation:
      "The clear command removes all previous commands that were run in the current terminal. The screen will clear and you will just see the prompt at the top.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question:
      "In Vim, pressing this keystroke allows you start typing in the editor.",
    Answer: "i",
    Distractor1: "esc",
    Distractor2: ":q!",
    Distractor3: ":wq",
    Explanation:
      "The i command( for 'insert'), immediately switches vim to insert mode. Once you are in insert mode, you can insert characters just like a regular text editor.",
    Link: "https://www.freecodecamp.org/news/vim-editor-modes-explained/"
  },
  {
    Question: "What is the name of the penguin mascot of Linux?",
    Answer: "Tux",
    Distractor1: "Tail",
    Distractor2: "Ping",
    Distractor3: "Flux",
    Explanation: "Linux's mascot is a penguin named “Tux”.",
    Link: "https://www.freecodecamp.org/news/linux-is-25-yay-lets-celebrate-with-25-rad-facts-about-linux-c8d8ac30076d/"
  },
  {
    Question:
      "In Linux, which command is used for creating directories (folders)?",
    Answer: "mkdir",
    Distractor1: "mkcd",
    Distractor2: "cd",
    Distractor3: "rm",
    Explanation:
      "You create folders using the mkdir command, followed by the name of the directory e.g. mkdir photos",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-mkdir-command"
  },
  {
    Question:
      "In Unix, which command is used for exiting VIM WITHOUT saving the changes you made?",
    Answer: ":q!",
    Distractor1: ":wq",
    Distractor2: ":i",
    Distractor3: ":r",
    Explanation:
      "If you made some changes and would rather discard them, type :q! to forcefully quit, and press Enter/return.",
    Link: "https://www.freecodecamp.org/news/how-to-exit-vim/"
  },
  {
    Question: "Who created Linux?",
    Answer: "Linus Torvalds",
    Distractor1: "Bill Gates",
    Distractor2: "Mark Zuckerberg",
    Distractor3: "Sergey Brin",
    Explanation:
      "Linus Torvalds created Linux as a college student in Finland in 1991.",
    Link: "https://www.freecodecamp.org/news/linux-is-25-yay-lets-celebrate-with-25-rad-facts-about-linux-c8d8ac30076d/"
  },
  {
    Question:
      "In Linux, which keyboard shortcut will stop running the ping command?",
    Answer: "Ctrl-C",
    Distractor1: "command-D",
    Distractor2: "ctrl-D",
    Distractor3: "exit",
    Explanation:
      "The ping command, keeps sending multiple requests every second, by default. It will keep running until you stop it with Ctrl-C.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question: "In awk, how do you print all columns in a file named demo.txt?",
    Answer: "awk '{print $0}' demo.txt",
    Distractor1: "awk '{print $1}' demo.txt",
    Distractor2: "awk '{print $1, $2}' demo.txt",
    Distractor3: "awk '/^print/' demo.txt",
    Explanation:
      "To print all columns in a file you can use the awk command. The action you specify inside the curly braces is print $0.",
    Link: "https://www.freecodecamp.org/news/the-linux-awk-command-linux-and-unix-usage-syntax-examples/"
  },
  {
    Question:
      "In Vim, which command is used for exiting AND saving the changes you made on a file?",
    Answer: ":wq",
    Distractor1: ":q!",
    Distractor2: ":h",
    Distractor3: ":j",
    Explanation:
      "If you made some changes and would like to keep them, type :wq(short for write and quit) and press Enter/return.",
    Link: "https://www.freecodecamp.org/news/how-to-exit-vim/"
  },
  {
    Question: "In Linux, what does .. mean in a directory path?",
    Answer: "Refers to the parent folder",
    Distractor1: "Refers to the current folder",
    Distractor2: "Refers to no directory",
    Distractor3: "Refers to the root of the file structure",
    Explanation:
      "The .. is a special path and means one level up. It refers to the parent directory.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question: 'What is the main component, the "core", of Linux?',
    Answer: "The kernel",
    Distractor1: "The shell",
    Distractor2: "The commands",
    Distractor3: "The terminal window",
    Explanation:
      "The main component of linux and its core is the kernel. It's the interface between the Operating System and all the hardware components and it manages all the processes.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#introductiontolinuxandshells"
  },
  {
    Question: "In what year was the Linux Operating System created?",
    Answer: "1991",
    Distractor1: "1990",
    Distractor2: "1989",
    Distractor3: "1992",
    Explanation:
      "Linus Torvalds created Linux as a college student in Finland in 1991.",
    Link: "https://www.freecodecamp.org/news/linux-is-25-yay-lets-celebrate-with-25-rad-facts-about-linux-c8d8ac30076d/"
  },
  {
    Question: "In Linux, which command is used to compress files?",
    Answer: "gzip",
    Distractor1: "tar",
    Distractor2: "chown",
    Distractor3: "diff",
    Explanation: "The gzip command is used to compress a file to save space",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-gzip-command"
  },
  {
    Question:
      "In Linux, which flag (or option) is used with the ln command to create a soft link?",
    Answer: "-s",
    Distractor1: "-l",
    Distractor2: "-a",
    Distractor3: "-la",
    Explanation:
      "You create soft links using the -s option of ln. For example, ln -s <original> <link>",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-ln-command"
  },
  {
    Question: "In Linux, which command calculates the size of a directory?",
    Answer: "du",
    Distractor1: "wc",
    Distractor2: "wc -c",
    Distractor3: "man",
    Explanation:
      "The du command will calculate the size of a directory as a whole.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question: "In Linux, which command opens the VIM command-line editor?",
    Answer: "vi",
    Distractor1: "open",
    Distractor2: "open vim",
    Distractor3: "open vi",
    Explanation: "You start up VIM  by running vi in the command line.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-vim-editor-command"
  },
  {
    Question: "Which of the following is NOT a Unix shell?",
    Answer: "pwd",
    Distractor1: "ksh",
    Distractor2: "csh",
    Distractor3: "bash",
    Explanation:
      "There are many different kind of shells available on Linux and macOS computers. A few of them that dominate the space are bash, csh, zsh, and fish.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#introductiontolinuxandshells"
  },
  {
    Question:
      "In Linux, which of the following commands is used to showcase the contents stored in a file?",
    Answer: "less",
    Distractor1: "open",
    Distractor2: "man",
    Distractor3: "rm",
    Explanation: "The less command shows the content stored inside a file.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question:
      "In Linux, which command is used to copy the contents of one file to another one?",
    Answer: "cp",
    Distractor1: "rm ",
    Distractor2: "rmdir",
    Distractor3: "touching",
    Explanation: "You can copy a file using the cp command.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question: "In Linux, which command verifies that an IP address exists?",
    Answer: "ping",
    Distractor1: "which",
    Distractor2: "uname",
    Distractor3: "chown",
    Explanation:
      "The ping command pings a specific network host, on the local network or on the Internet. It verifies IP level connectivity to another computer.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question:
      "Which one of these options is layer 1 in the Open Systems Interconnection (OSI) model?",
    Answer: "The physical layer",
    Distractor1: "The network layer",
    Distractor2: "The transport Layer",
    Distractor3: "The application layer",
    Explanation:
      "Layer 1 is the physical layer. There's a lot of technology in Layer 1 - everything from physical network devices, cabling, to how the cables hook up to the devices.",
    Link: "https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/"
  },
  {
    Question:
      "In Linux, which command is used to display the NAME of the operating system?",
    Answer: "uname -o",
    Distractor1: "uname -r",
    Distractor2: "uname -k",
    Distractor3: "uname -u",
    Explanation: "The uname -o command prints the Operating System name",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command"
  },
  {
    Question: "What does Bash stand for?",
    Answer: "Bourne-again shell",
    Distractor1: "Born-again shell",
    Distractor2: "Basic shell",
    Distractor3: "Bourne-another shell",
    Explanation:
      "All shells originate from the Bourne Shell and the name Bourne is used because its creator was Steve Bourne. Bash means Bourne-again shell. ",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cd-command"
  },
  {
    Question:
      "In Linux, which command is used to count JUST the words in a file?",
    Answer: "wc -w",
    Distractor1: "wc -l",
    Distractor2: "wc -c",
    Distractor3: "wc  -5",
    Explanation:
      "To count just the words inside a file you use the wc command with the -w option.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command"
  },
  {
    Question:
      "In Linux, which command is used for creating links between files?",
    Answer: "ln",
    Distractor1: "ls",
    Distractor2: "link",
    Distractor3: "cat",
    Explanation:
      "The ln command is used for creating links. A link is like a pointer to another file, or a file that points to another file.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-ln-command"
  },
  {
    Question:
      "In Linux, which command is used to copy a whole folder and its contents?",
    Answer: "cp -r",
    Distractor1: "cp -saving",
    Distractor2: "mv",
    Distractor3: "mkdir",
    Explanation:
      "To copy folders you need to add the -r option to recursively copy the whole folder contents.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question:
      "In Linux, which command is used to display the current running processes?",
    Answer: "ps",
    Distractor1: "ls",
    Distractor2: "pwd",
    Distractor3: "echo",
    Explanation:
      "You can list running processes using the ps command (ps means process status). The ps command displays your current running processes in real-time.",
    Link: "https://www.freecodecamp.org/news/linux-list-processes-how-to-check-running-processes/"
  },
  {
    Question:
      "In Linux, which command deletes a directory that has NO files inside it?",
    Answer: "rmdir",
    Distractor1: "mkdir",
    Distractor2: "rm",
    Distractor3: "touch",
    Explanation:
      "You can delete a folder using rmdir. That folder must be empty.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-rmdir-command"
  },
  {
    Question:
      "In Linux, which command prints to the terminal the argument that is passed to it?",
    Answer: "echo",
    Distractor1: "man",
    Distractor2: "print",
    Distractor3: "ls",
    Explanation:
      "The echo command prints to the terminal the argument passed to it. For example, the command echo 'hello world' will print hello world to the terminal.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question:
      "In Linux, which command provides information on all other commands available?",
    Answer: "man",
    Distractor1: "echo",
    Distractor2: "ls",
    Distractor3: "pwd",
    Explanation:
      "The man command (short for manual), provides a manual page. The page gives you a very quick overview of a command, with some handy examples of common usage scenarios.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-man-command"
  },
  {
    Question: "Which of the following is NOT a Linux distribution?",
    Answer: "multicsxz",
    Distractor1: "CentOS",
    Distractor2: "Debian",
    Distractor3: "RHEL",
    Explanation:
      "There are different versions of Linux (called distributions)  that allow the user varying degrees of personalization and control of the operating system. This means that users can choose their Linux distributions based on their wants and needs. Some popular ones are: Ubuntu, Linux Mint, CentOS, RHEL,Arch Linux.",
    Link: "https://www.freecodecamp.org/news/the-best-linux-tutorials/"
  },
  {
    Question: "In Linux, which command lists the contents of a directory?",
    Answer: "ls",
    Distractor1: "ln",
    Distractor2: "look",
    Distractor3: "less",
    Explanation:
      "The ls command (short for list) is used to list files or directories in Linux and other Unix-based operating systems. It allows you to list all files or directories in the current directory.",
    Link: "https://www.freecodecamp.org/news/the-linux-ls-command-how-to-list-files-in-a-directory-with-options/"
  },
  {
    Question:
      "In Linux, which command is used for displaying the name of the current user logged in the terminal?",
    Answer: "whoami",
    Distractor1: "cat",
    Distractor2: "echo",
    Distractor3: "pwd",
    Explanation:
      "The whoami command prints the username currently logged in to the terminal session.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-whoami-command"
  },
  {
    Question: "In Linux, which command shows all previously executed commands?",
    Answer: "history",
    Distractor1: "memory",
    Distractor2: "review",
    Distractor3: "man",
    Explanation:
      "Every time you run a command, it's memorized in the history. You can display all the history using the history command.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question: "In Linux, what does . mean in a directory path?",
    Answer: "Refers to the current folder",
    Distractor1: "Refers to the parent folder",
    Distractor2: "Refers to the root of the file structure",
    Distractor3: "Refers to no directory",
    Explanation:
      "The . is a special path indicator. It indicates the current folder.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question: "In Linux, which command deletes a file?",
    Answer: "rm",
    Distractor1: "rmdirs",
    Distractor2: "touch",
    Distractor3: "ls",
    Explanation:
      "The rm (short for remove) command when used without options deletes files.",
    Link: "https://www.freecodecamp.org/news/remove-a-directory-in-linux-how-to-delete-directories-and-contents-from-the-command-line/"
  },
  {
    Question:
      "In Linux, which command is used to count JUST the lines in a file?",
    Answer: "wc -l",
    Distractor1: "wc -9",
    Distractor2: "wc -w",
    Distractor3: "wc -c ",
    Explanation:
      "To count just the lines inside a file you use the wc command with the -l option.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command"
  },
  {
    Question: "What does GNU stand for?",
    Answer: "GNU's not UNIX",
    Distractor1: "GeNeral Unix",
    Distractor2: "Great New Unix",
    Distractor3: "Greatly Needed Unix",
    Explanation: "GNU is a recursive acronym for 'GNU's not UNIX'.",
    Link: "https://forum.freecodecamp.org/t/the-origins-of-linux-and-the-free-software-movement-a-brief-history/19527"
  },
  {
    Question: "Which command prints the Linux version?",
    Answer: "uname -r",
    Distractor1: "uname -s",
    Distractor2: "uname -u",
    Distractor3: "uname -k",
    Explanation: "The r option of the uname command prints the release",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command"
  },
  {
    Question:
      "In Linux, which command is used to sort the contents of a file alphabetically and numerically?",
    Answer: "sort",
    Distractor1: "wc",
    Distractor2: "cat",
    Distractor3: "tail",
    Explanation:
      "The sort command helps you sort a file's contents in a particular order(either numerical or alphabetical).",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question: "In Linux, which command changes passwords for user accounts?",
    Answer: "passwd",
    Distractor1: "chpass",
    Distractor2: "chpasswd",
    Distractor3: "cpasswd",
    Explanation:
      "Users in Linux have a password assigned. You can change the password using the passwd command.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question:
      "In Linux, how do you change permissions using the chmod command?",
    Answer: "chmod permissions filename",
    Distractor1: "permissions filename chmod",
    Distractor2: "chmod filename",
    Distractor3: "chmod permissions",
    Explanation:
      "'permissions' can be read, write, execute or a combination of them. 'filename' is the name of the file for which the permissions need to change.",
    Link: "https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/"
  },
  {
    Question:
      "In Linux, how do you change user and group ownership simultaneously?",
    Answer: "chown user:group filename",
    Distractor1: "chmod user:group filename",
    Distractor2: "chown user::group filename",
    Distractor3: "chmod user::group filename",
    Explanation: "We can use chown to change user and group simultaneously",
    Link: "https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/"
  },
  {
    Question:
      "In Linux, what is the correct syntax for changing permissions using absolute mode?",
    Answer: "chmod 451 file-name",
    Distractor1: "permissions 451 file-name",
    Distractor2: "change 451 file-name",
    Distractor3: "chown 451 file-name",
    Explanation:
      "Absolute mode uses numbers to represent permissions and mathematical operators to modify them.",
    Link: "https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/"
  },
  {
    Question:
      "In Linux, which command is used to display network status and generate protocol statistics?",
    Answer: "netstat",
    Distractor1: "ipconfig",
    Distractor2: "ifconfig",
    Distractor3: "netlist",
    Explanation:
      "The netstat command can be used to display network connections and various protocol statistics.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question: "In Linux, which command can be used to terminate a program?",
    Answer: "kill",
    Distractor1: "end",
    Distractor2: "stop",
    Distractor3: "finish",
    Explanation:
      "The kill command sends a signal which terminates or kills a particular process or group of processes.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-kill-command"
  },
  {
    Question: "In Linux, which command can be used for cron jobs?",
    Answer: "crontab",
    Distractor1: "cronaction",
    Distractor2: "cronset",
    Distractor3: "cronedit",
    Explanation:
      "The crontab command can used to perform various actions on cron jobs.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-crontab-command"
  },
  {
    Question:
      "In Linux, which command is used to view, modify, delete, and copy partitions on a hard drive?",
    Answer: "fdisk",
    Distractor1: "df",
    Distractor2: "split",
    Distractor3: "ps",
    Explanation:
      "fdisk is used to view, create, delete, change, resize, copy and move partitions on a hard drive.",
    Link: "https://www.freecodecamp.org/news/how-to-install-arch-linux/"
  },
  {
    Question: "The sudo command stands for ___.",
    Answer: "superuser do",
    Distractor1: "su",
    Distractor2: "superuser does",
    Distractor3: "super do",
    Explanation: "The sudo command stands for superuser do.",
    Link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-linux-creating-a-sudo-user/"
  },
  {
    Question:
      "In Linux, which one is the correct syntax for renaming a file called abc.txt to pqr.txt?",
    Answer: "mv abc.txt pqr.txt",
    Distractor1: "mv pqr.txt abc.txt",
    Distractor2: "mv -a pqr.txt abc.txt",
    Distractor3: "mv -all pqr.txt abc.txt",
    Explanation:
      "The correct syntax for renaming a file called abc.txt to pqr.txt is mv abc.txt pqr.txt",
    Link: "https://www.freecodecamp.org/news/rename-file-linux-bash-command/"
  },
  {
    Question:
      "Which Linux command is used to go up one level to a parent folder?",
    Answer: "cd ..",
    Distractor1: "cd",
    Distractor2: "cd/",
    Distractor3: "chdir",
    Explanation:
      ".. is a special path used to indicate the parent folder. cd .. is used to go up one level to a parent folder.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-pwd-command"
  },
  {
    Question: "What does Vim stand for?",
    Answer: "Vi Improved",
    Distractor1: "Vi IMitation",
    Distractor2: "Vi Manual",
    Distractor3: "Vi Moolenaar",
    Explanation:
      "Vim stands for Vi IMproved and it is a popular open-source text editor.",
    Link: "https://www.freecodecamp.org/news/learn-vim-beginners-tutorial/"
  },
  {
    Question: "Which Linux desktop environment has a similar UI to Windows?",
    Answer: "KDE Plasma",
    Distractor1: "GNOME",
    Distractor2: "Xfce",
    Distractor3: "Mate",
    Explanation:
      "KDE is a popular desktop environment which resembles the Windows user interface.",
    Link: "https://www.freecodecamp.org/news/linux-basics/"
  },
  {
    Question:
      "Which set among the following is the correct set of three types of Linux file users?",
    Answer: "{user, group, other}",
    Distractor1: "{whoami, users, group}",
    Distractor2: "{whoami, user, others}",
    Distractor3: "{user, group, all}",
    Explanation:
      "In Linux, there are three types of users: user, group and other.",
    Link: "https://www.freecodecamp.org/news/linux-basics/"
  },
  {
    Question:
      "Which of the following is NOT a category of file permissions in Linux?",
    Answer: "compile",
    Distractor1: "execute",
    Distractor2: "write",
    Distractor3: "read",
    Explanation:
      "In Linux, file permissions fall into three categories: read, write and execute.",
    Link: "https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/"
  },
  {
    Question:
      "In Linux, which command is used to find files/folders matching a particular search pattern?",
    Answer: "find",
    Distractor1: "who",
    Distractor2: "which",
    Distractor3: "search",
    Explanation:
      "The find command can be used to find files or folders matching a particular search pattern. It searches recursively.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question:
      "Which of the following Linux commands calculates the total number of lines, words, and characters in a file?",
    Answer: "wc",
    Distractor1: "wordcount",
    Distractor2: "wordc",
    Distractor3: "lc",
    Explanation:
      "The wc command calculates the total number of lines, words, and characters in a file.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question:
      "In Linux, which command is used to show a user a list of groups they belong to?",
    Answer: "groups",
    Distractor1: "showgroup",
    Distractor2: "members",
    Distractor3: "groupadd",
    Explanation:
      "The groups command is used to show a user a list of groups for which they belong to. Primary and secondary are the two types of groups in Linux.",
    Link: "https://www.freecodecamp.org/news/learn-the-basics-of-the-linux-operating-system/"
  },
  {
    Question:
      "Which Linux commands can be used to show who is logged on and what they are doing?",
    Answer: "w",
    Distractor1: "top",
    Distractor2: "whoami",
    Distractor3: "which user",
    Explanation:
      "w displays information about the users currently on the machine, and their processes. The header shows, in this order, the current time, how long the system has been running, how many users are currently logged on, and the system load averages for the past 1, 5, and 15 minutes.",
    Link: "https://man7.org/linux/man-pages/man1/w.1.html"
  },
  {
    Question: "In Linux, which option is used with gzip to decompress a file?",
    Answer: "-d",
    Distractor1: "-kv",
    Distractor2: "-r",
    Distractor3: "-c",
    Explanation:
      "gzip can also be used to decompress a file, using the -d option: gzip -d filename.gz",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question: "In Linux, what does the dmesg command do?",
    Answer: "shows kernel logs",
    Distractor1: "shows authentication logs",
    Distractor2: "shows syslog file",
    Distractor3: "shows daemon logs",
    Explanation:
      "The dmesg command is a Linux utility that shows kernel-related messages that have been taken from the kernel ring buffer.",
    Link: "https://en.wikipedia.org/wiki/Dmesg"
  },
  {
    Question: "In Linux, what does the inode mean?",
    Answer: "Unique name given by the operating system to each file",
    Distractor1: "kernel nodes",
    Distractor2: "does not exist",
    Distractor3: "linux nodes",
    Explanation:
      "Each file is given a unique name by the operating system which is called as the inode.",
    Link: "https://en.wikipedia.org/wiki/Inode"
  },
  {
    Question: "What does CLI stand for?",
    Answer: "Command Line Interface",
    Distractor1: "Computer Linux Index",
    Distractor2: "Code Line Interface",
    Distractor3: "Code Line Index",
    Explanation: "CLI stands for Command Line Interface",
    Link: "https://en.wikipedia.org/wiki/Command-line_interface"
  },
  {
    Question: "In Linux, what does the ls -d command do?",
    Answer: "lists out only the directories themselves,not their contents ",
    Distractor1: "lists only the files starting with",
    Distractor2: "lists files and sorts them alphabetically",
    Distractor3: "show deleted files",
    Explanation:
      "In Linux, the -d or --directory option is used to list the directories but not the directory contents.",
    Link: "https://man7.org/linux/man-pages/man1/ls.1.html"
  },
  {
    Question:
      "In Linux, how do you print the last column of a file named demo.txt?",
    Answer: "awk '{print $NF}' demo.txt",
    Distractor1: "awk '{print $0}' demo.txt",
    Distractor2: "awk '{print $1, $4}' demo.txt",
    Distractor3: "awk '/^print/' demo.txt",
    Explanation:
      "While using the awk command, you can use $NF which represents the last field in a record, to print the last column of a file",
    Link: "https://www.freecodecamp.org/news/the-linux-awk-command-linux-and-unix-usage-syntax-examples/"
  },
  {
    Question:
      "In Linux, which command is used to strip directory and suffix from filenames?",
    Answer: "basename",
    Distractor1: "dirname",
    Distractor2: "pwd",
    Distractor3: "ls",
    Explanation:
      "The basename command can be used to print the filename from the given pathname. It will delete any prefix up to the last forward-slash character and return the result.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-basename-command"
  },
  {
    Question:
      "In Linux, which command is used to display the amount of available free disk space for file systems?",
    Answer: "df",
    Distractor1: "du",
    Distractor2: "free",
    Distractor3: "top",
    Explanation:
      "The df command stands for disk-free and it is used to check the available disk space in Linux.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-df-command"
  },
  {
    Question:
      "In Linux, which command is used to go back to the user's home directory?",
    Answer: "cd ~",
    Distractor1: "cd /",
    Distractor2: "clear",
    Distractor3: "ls -la",
    Explanation:
      "The cd ~ command can be used to get back to home directory in Linux.",
    Link: "https://www.freecodecamp.org/news/linux-command-line-tutorial/"
  },
  {
    Question:
      "Which command is used in the Vim editor to delete a single character?",
    Answer: "x",
    Distractor1: "y",
    Distractor2: "a",
    Distractor3: "z",
    Explanation:
      "If you want to delete a single character in the Vim editor, you can use the x command.",
    Link: "https://www.freecodecamp.org/news/vim-editor-modes-explained/"
  },
  {
    Question:
      "In Linux, which command is used to find the difference between two files?",
    Answer: "diff",
    Distractor1: "uniq",
    Distractor2: "echo",
    Distractor3: "chown",
    Explanation:
      "In Linux, you can use the diff command to display the difference between two files'.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-diff-command"
  },
  {
    Question:
      "In Linux, which command is used to used to securely remove data?",
    Answer: "shred",
    Distractor1: "rm",
    Distractor2: "mkdir",
    Distractor3: "dd",
    Explanation:
      "The shred command helps to overwrite the data in place several times. This makes it harder for third party software and hardware probing to recover the data. That is why it's commonly used to securely remove data.",
    Link: "https://www.freecodecamp.org/news/securely-erasing-a-disk-and-file-using-linux-command-shred/"
  },
  {
    Question:
      "In Linux, which the command is used to remove an empty directory?",
    Answer: "rmdir",
    Distractor1: "remove",
    Distractor2: "rdir",
    Distractor3: "delete",
    Explanation:
      "If you have an empty directory that you would like to remove, then you can use the rmdir command in the terminal.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-rmdir-command"
  },
  {
    Question:
      "In Linux, which command is used to create a new file and open it in the Vim editor?",
    Answer: "vi filename.extension",
    Distractor1: "new filename.extension",
    Distractor2: "create filename",
    Distractor3: "None of the above",
    Explanation:
      "vi filename.extension is used to create a new file using the terminal and open it in the Vim editor.",
    Link: "https://www.freecodecamp.org/news/learn-vim-beginners-tutorial/"
  },
  {
    Question:
      "In Linux, which command is used to list the last 10 lines of a file?",
    Answer: "tail -10 filename",
    Distractor1: "bottom -10 filename",
    Distractor2: "last -10 filename",
    Distractor3: "filename -10",
    Explanation:
      "tail -10 filename is used to list the last 10 lines of a file.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook"
  },
  {
    Question:
      "In Linux, which command is used to display the first 10 lines of a file?",
    Answer: "head -10 'filename'",
    Distractor1: "filename -10",
    Distractor2: "filename -f",
    Distractor3: "ls filename -10",
    Explanation:
      "The head -10 'filename' command is used to display the first 10 lines of a file.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook"
  },
  {
    Question:
      "In Linux, which command is used to list files with its permissions and users access?",
    Answer: "ls -l",
    Distractor1: "ls allusers",
    Distractor2: "ls all",
    Distractor3: "None of These",
    Explanation:
      "In Linux, the ls -l command is used to long list the files which displays the permissions of files and user access",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook"
  },
  {
    Question:
      "In Linux, which command is used to list all files with the .js extension?",
    Answer: "ls *.js",
    Distractor1: "ls js",
    Distractor2: "ls .js files",
    Distractor3: "None of These",
    Explanation:
      "In Linux, this formatter with the ls command can be used to list all files with similar postfix or extension",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook"
  },
  {
    Question:
      "In Linux, which command is used to list the file extensions in alphabetical order?",
    Answer: "ls -X",
    Distractor1: "ls -a",
    Distractor2: "ls alpha",
    Distractor3: "ls -extension",
    Explanation:
      "The ls -X command is used to list the file extensions in alphabetical order.",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question:
      "In Linux, which command is used to concatenate two files and display the output?",
    Answer: "cat file1 file2 file3",
    Distractor1: "Cat file1 + file2",
    Distractor2: "Cat file1 file2 > file3",
    Distractor3: "Cat file1 > file2",
    Explanation:
      "The cat command prints a file's content to the standard output",
    Link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
  },
  {
    Question:
      "In Linux, what are four operations that can be done with the cat command?",
    Answer: "create, read, write and append files",
    Distractor1: "create, delete, reverse and append files",
    Distractor2: "sort, destroy, move and append files",
    Distractor3: "reverse, read, write and multiply files",
    Explanation: "The cat command can create, read, write and append files.",
    Link: "https://www.freecodecamp.org/news/the-cat-command-in-linux-how-to-create-a-text-file-with-cat-or-touch/"
  },
  {
    Question:
      "In Linux, which of the following options is the correct way to create a new file?",
    Answer: "> filename.extension",
    Distractor1: "cd filename.extension",
    Distractor2: "ls filename.extension",
    Distractor3: "None of the above",
    Explanation:
      "> greater than operator is used to create a new file in Linux.",
    Link: "https://www.freecodecamp.org/news/learn-the-50-most-used-linux-terminal-commands/"
  },
  {
    Question: "In Linux, what does elif stand for?",
    Answer: "else if",
    Distractor1: "elif condition",
    Distractor2: "elif statement",
    Distractor3: "None of the above",
    Explanation: "elif is an else if statement in Shell Scripting.",
    Link: "https://www.freecodecamp.org/news/shell-scripting-crash-course-how-to-write-bash-scripts-in-linux/"
  },
  {
    Question: "In Linux, Which command is used to stop a running process?",
    Answer: "kill -9 [process ID]",
    Distractor1: "pidof [OPTIONS] NAME",
    Distractor2: "ps -ef",
    Distractor3: "stop [signal] PID",
    Explanation: "The kill command is used to stop a running process.",
    Link: "https://www.linuxfoundation.org/blog/blog/classic-sysadmin-how-to-kill-a-process-from-the-command-line"
  }
];

export default linuxQuiz;
