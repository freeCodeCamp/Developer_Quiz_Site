const gitQuiz = [
  {
    Question:
      "In Git, how can you save uncommitted changes on your local machine so you can work on it later?",
    Answer: "git stash",
    Distractor1: "git copy into notepad.exe",
    Distractor2: "git save code",
    Distractor3: "git clone --for later",
    Explanation:
      "Stashes are temporary storage spaces where you can store your code. When you’re done, you can put your code back from the stash using git stash pop. You won’t have to worry about losing any uncommitted changes!",
    Link: "https://www.freecodecamp.org/news/how-to-use-git-stash-as-temporary-storage-84a0a1e37a43/",
  },
  {
    Question: "In Git, how can you check your configuration?",
    Answer: "git config -l",
    Distractor1: "git config -check",
    Distractor2: "git checkconfig -l",
    Distractor3: "git checkconfig -m",
    Explanation:
      "The command git config -l returns a list of information about your git configuration including user name and email",
    Link: "https://www.freecodecamp.org/news/git-cheat-sheet/",
  },
  {
    Question:
      "In Git, how do you integrate changes from one branch to another?",
    Answer: "git merge",
    Distractor1: "git copy into",
    Distractor2: "git merge --docs",
    Distractor3: "git clone --docs",
    Explanation:
      "In the command line, you can use git merge to integrate changes from one branch to another",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In Git, what is a modified state?",
    Answer:
      "changes have been made to the files but those changes are not saved yet",
    Distractor1: "a new local repository has been created",
    Distractor2: "a new remote repository has been created",
    Distractor3:
      "the files have been saved and need to be pushed to the remote repository",
    Explanation:
      "The modified state is when changes have been made to the files but those changes are not saved yet",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question:
      "In Git, how can you list all the commits in a local repository in reverse chronological order?",
    Answer: "git log",
    Distractor1: "git show",
    Distractor2: "git ls",
    Distractor3: "git commits",
    Explanation:
      "You can use git log to see the commits in a repository in reverse chronological order.",
    Link: "https://www.freecodecamp.org/news/what-is-git-learn-git-version-control/",
  },
  {
    Question:
      "In Git, how can you list all the local branches in your repository?",
    Answer: "git branch",
    Distractor1: "git list",
    Distractor2: "git ls",
    Distractor3: "git branches",
    Explanation:
      "You can use git branch to list all the local branches in the repository. ",
    Link: "https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/",
  },
  {
    Question: "What is the committed state in Git?",
    Answer:
      "all of the files have been saved to the local repo and are ready to be pushed to the remote repo",
    Distractor1: "the files need to be saved to the local repo",
    Distractor2: "the files have been successfully pushed to the remote repo",
    Distractor3: "the files have been deleted from the local repo",
    Explanation:
      "The committed state is when all of the files have been saved to the local repo and are ready to be pushed to the remote repo",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In Git, how do you push a local branch to a remote repository?",
    Answer: "git push -u <remote> <branch-name>",
    Distractor1: "git push -u <branch-name> <remote>",
    Distractor2: "git copy url <branch-name> <remote>",
    Distractor3: "git pull url <branch-name> <remote>",
    Explanation:
      "In the command line, you can use git push -u <remote> <branch-name> to push a branch from a local Git repository to a remote repository.",

    Link: "https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/",
  },
  {
    Question:
      "In Git, how do you set your username for commits you make on all cloned repositories on your computer?",
    Answer: 'git config --global user.name "YOUR_USERNAME"',
    Distractor1: 'git config --global password "YOUR_USERNAME"',
    Distractor2: 'git config &user "YOUR_USERNAME"',
    Distractor3: 'git create --user "YOUR_USERNAME"',
    Explanation:
      'In the command line, you can use git config --global user.name "YOUR_USERNAME"',
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In Git, how do you initialize a new Git repository?",
    Answer: "git init",
    Distractor1: "git create new repo",
    Distractor2: "git config init repo",
    Distractor3: "git new repo",
    Explanation:
      "In the command line, you can use git init to initialize a new Git repository",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In Git, how do you add a specific file to be committed?",
    Answer: "git add filename",
    Distractor1: "git add < filename",
    Distractor2: "git add *filename",
    Distractor3: "git add %filename",
    Explanation:
      "In the command line, you can use git add filename to add a specific file.",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "What is Git?",
    Answer: "A popular type of version control system ",
    Distractor1: "A sorting algorithm",
    Distractor2: "A data type",
    Distractor3: "A non-relational database",
    Explanation:
      "Git is an open source version control system that tracks changes to your files. ",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question:
      "In Git, how do you create a connection between a local repository and a remote one?",
    Answer: "git remote add origin git-url",
    Distractor1: "git add remote and local",
    Distractor2: "git remote local",
    Distractor3: "git local remote",
    Explanation:
      "In the command line, you can use git remote add origin git-url to connect the local repository to the remote one.",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In Git, how can you create a new branch and switch to it?",
    Answer: "git checkout -b branch-name",
    Distractor1: "git switch branch-name",
    Distractor2: "git switch to branch-name",
    Distractor3: "git change branch-name",
    Explanation:
      "In the command line, you can use git checkout -b branch-name to switch to a different branch",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In Git, how do you commit files to the history of changes?",
    Answer: 'git commit -m "commit message"',
    Distractor1: "git commit --add message",
    Distractor2: "git commit < add message",
    Distractor3: "git add message",
    Explanation:
      'In the command line, you can use git commit -m "commit message" to commit your changes.',
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question:
      "In Git, how do you push changes from the main branch of a local Git repository to a remote repository (origin)?",
    Answer: "git push -u origin main",
    Distractor1: "git push changes",
    Distractor2: "git push all changes",
    Distractor3: "git push --to main branch",
    Explanation:
      "In the command line, you can use git push -u origin main to push your changes from the main branch of a local Git repository to a remote repository.",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In Git, how can you delete a branch from a repository?",
    Answer: "git branch -d <branch-name>",
    Distractor1: "git branch <branch-name>",
    Distractor2: "git delete <branch-name>",
    Distractor3: "git del <branch-name>",
    Explanation:
      "You can use git branch -d <branch-name> to delete a branch from the repository.",
    Link: "https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/",
  },
  {
    Question:
      "In Git, how do you add all of the files in the local Git repository?",
    Answer: "git add .",
    Distractor1: "git add all files",
    Distractor2: "git add --all files",
    Distractor3: "git add <all files",
    Explanation:
      "In the command line, you can use git add . to add all of the files in your local repository.",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In Git, what is a staged state?",
    Answer: "the files are ready to be committed",
    Distractor1: "the files are ready to be deleted",
    Distractor2: "a new local repository has been created",
    Distractor3: "the files need to be saved to the remote repository",
    Explanation: "The staged state is when the files are ready to be committed",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "What is GitHub?",
    Answer: "A hosting platform for Git repositories ",
    Distractor1: "An online IDE",
    Distractor2: "A popular database",
    Distractor3: "A subscription based platform to sell coding classes",
    Explanation:
      "GitHub is a popular hosting platform for developers to store their Git repositories and collaborate with other developers all around the world.",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question:
      "In Git, how do you check for the version of Git installed on your machine?",
    Answer: "git --version",
    Distractor1: "git &version",
    Distractor2: "git <version>",
    Distractor3: "git /version",
    Explanation:
      "In the command line, you can use git --version to check which version of Git is installed on your local machine",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In Git, how can you pull changes made to the remote repository?",
    Answer: "git pull <remote>",
    Distractor1: "git <remote> pull",
    Distractor2: "git push <remote>",
    Distractor3: "git pul <remote>",
    Explanation:
      "You can pull changes from the remote repository with git pull <remote>.",
    Link: "https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/",
  },
  {
    Question: "In Git, how do you clone a remote repository?",
    Answer: "git clone",
    Distractor1: "git copy",
    Distractor2: "git copy url",
    Distractor3: "git clone --copy",
    Explanation:
      "In the command line, you can use git clone followed by the remote url address for the repository you want to clone into your local machine",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question:
      "In Git, how can you see the current status of the current branch?",
    Answer: "git status",
    Distractor1: "git info",
    Distractor2: "git show status",
    Distractor3: "git show",
    Explanation:
      "You can see the status of the current branch with git status in Git.",
    Link: "https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/",
  },
  {
    Question: "In Git, how can you add color to git command outputs?",
    Answer: "git config --global color.ui true",
    Distractor1: "git config --global color.ui false",
    Distractor2: "git set --global color.ui true",
    Distractor3: "git config --global true",
    Explanation:
      "You can use git config --global color.ui true to add color to Git output.",
    Link: "https://www.freecodecamp.org/news/best-git-tutorial/",
  },
  {
    Question: "In Git, how do you switch back to the main branch?",
    Answer: "git checkout main",
    Distractor1: "git switch main",
    Distractor2: "git change main",
    Distractor3: "git go to main",
    Explanation:
      "In the command line, you can use git checkout main to switch over to the main branch",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "What is the -m flag in Git?",
    Answer: "Shorthand for message",
    Distractor1: "Shorthand for main",
    Distractor2: "Shorthand for mistake",
    Distractor3: "Shorthand for merge",
    Explanation: "The -m flag in Git is shorthand for message.",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In Git, how do you set your email associated with your commits?",
    Answer: 'git config --global user.email "YOUR_EMAIL"',
    Distractor1: 'git config --global set email address "YOUR_EMAIL"',
    Distractor2: 'git config --email address "YOUR_EMAIL"',
    Distractor3: 'git create user email "YOUR_EMAIL"',
    Explanation:
      'In the command line, you can use git config --global user.email "YOUR_EMAIL" to set your email address in Git.',
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question:
      "In Git, how can you change the text editor used to write commit messages?",
    Answer: "git config --global core.editor <editor>",
    Distractor1: "git config email <editor>",
    Distractor2: "git set editor <editor>",
    Distractor3: "git config <editor>",
    Explanation:
      "You can use git config --global core.editor <editor> to set the text editor that will be used to write commit messages and to work with Git in general.",
    Link: "https://www.freecodecamp.org/news/best-git-tutorial/",
  },
  {
    Question:
      "In Git, how can you check for the status of your working directory?",
    Answer: "git status",
    Distractor1: "git check status",
    Distractor2: "git share status",
    Distractor3: "git show status",
    Explanation:
      "In the command line, you can use git status to check the current status of your working directory",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In Git, how do you create a new branch and switch to it?",
    Answer: "git checkout -b new-branch-name",
    Distractor1: "git create -b new-branch-name",
    Distractor2: "git change -b new-branch-name",
    Distractor3: "git create --change -b new-branch-name",
    Explanation:
      "In the command line, you can use git checkout -b new-branch-name to create a new branch and switch to it",
    Link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    Question: "In Git, how do you rename the current branch?",
    Answer: "git branch -m new-name",
    Distractor1: "git rename -b new-name",
    Distractor2: "git change -b new-branch-name",
    Distractor3: "git branch --rename new-name",
    Explanation:
      "In the command line, you can use git branch -m new-name to rename the current branch.",
    Link: "https://www.freecodecamp.org/news/renaming-a-git-branch-how-to-rename-the-current-branch-in-git/",
  },
  {
    Question:
      "In Git, which command is used to list differences between your current working directory and your staging area?",
    Answer: "git diff",
    Distractor1: "git different",
    Distractor2: "git status",
    Distractor3: "git update",
    Explanation:
      "In the command line, you can use git diff to show all the differences between your current working directory and your staging area.",
    Link: "https://www.freecodecamp.org/news/git-diff-command/",
  },
  {
    Question:
      "In Git, what do you do right after resovling a merge conflict in a file?",
    Answer: "git add file_that_had_conflict",
    Distractor1: "git commit",
    Distractor2: "git status",
    Distractor3: "git update",
    Explanation:
      "In the command line, after resolving the conflict you will need to stage the changes.",
    Link: "https://www.freecodecamp.org/news/resolve-merge-conflicts-in-git-a-practical-guide/",
  },
  {
    Question: "In Git, what command is used to revert changes?",
    Answer: "git revert",
    Distractor1: "git undo",
    Distractor2: "git stash",
    Distractor3: "git update",
    Explanation:
      "In the command line, to undo unwanted changes you can run git revert with the hash of the commit you want to revert back to.",
    Link: "https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/",
  },
  {
    Question:
      "In Git, which command is used to reset a branch to a previous commit?",
    Answer: "git reset",
    Distractor1: "git revert",
    Distractor2: "git rebase",
    Distractor3: "git reflog",
    Explanation:
      "The git reset command is used to reset your current HEAD to a specified state.",
    Link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-git-reset-and-git-revert/",
  },
  {
    Question:
      "In Git, how do you see your commit history including changes in files?",
    Answer: "git log -p",
    Distractor1: "git log --show",
    Distractor2: "git log -c",
    Distractor3: "git log",
    Explanation:
      "The git log -p command shows the commit's history including all files and their changes.",
    Link: "https://www.freecodecamp.org/news/git-cheat-sheet/",
  },
  {
    Question:
      "In Git, which command is used to list all of the remote branches that Git is tracking?",
    Answer: "git branch -r",
    Distractor1: "git branch --show -r",
    Distractor2: "git -b -d",
    Distractor3: "git branch",
    Explanation:
      "The git branch -r command shows the name of all remote branches that Git is tracking for the current repository.",
    Link: "https://www.freecodecamp.org/news/git-cheat-sheet/",
  },
];

export default gitQuiz;
