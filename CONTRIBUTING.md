# Contributing Documentation

Thank you for your interest in contributing to the Developer Quiz site. [developerquiz.org](https://developerquiz.org/) is the companion website to the [Learn to Code RPG Game](https://www.freecodecamp.org/news/learn-to-code-rpg/), a visual novel game developed by freeCodeCamp to help you learn how to code.

## How to setup the project locally

Here are directions on how to fork the `freeCodeCamp/Developer_Quiz_Site` repository:<br>
https://docs.github.com/en/get-started/quickstart/fork-a-repo

In the command line:

1. Clone the repo by typing `git clone https://github.com/YOUR-GITHUB-USERNAME/Developer_Quiz_Site.git`
2. Then type `cd Developer_Quiz_Site` to go into the project's directory.
3. Ensure Node.js and NPM are installed on machine
4. Install dependencies with `npm install`
5. Test local changes:
   - Option A: NPM
     1. Run the project with `npm start`
   - Option B: Docker
     1. Ensure docker is installed on machine. Installations instructions can be found on the [official Docker docs](https://docs.docker.com/get-docker/).
     2. Build the docker image with `docker build -t developer-quiz-site .`
     3. Run the docker container: `docker container run --rm -it -p 3000:3000 developer-quiz-site` or alternatively, `npm run start:local-docker`.
     4. Visit `localhost:3000` in a browser to view the site!
6. Have fun 🚀

## Guidelines for adding quiz questions

We are looking to add more quiz questions for the following categories:

- Linux
- SQL
- Computer Science
- Quality Assurance
- Agile
- Security

The quiz question categories can be found in the `data` folder.
https://github.com/freeCodeCamp/Developer_Quiz_Site/tree/main/src/data

Before you add any quiz questions, please check to make sure that it does not already exist in the file.

All questions follow this format:

```
  {
    Question: "Which one of these data structures follows the FIFO (First In First Out) method?",
    Answer: "Queue",
    Distractor1: "Stack",
    Distractor2: "Array",
    Distractor3: "Linked List",
    Explanation: "A queue follows the First In First Out (FIFO) method as the element which gets inserted first gets removed first.",
    Link: "https://youtu.be/B31LgI4Y4DQ?t=16410",
  },
```

For the `Explanation` field, please keep your explanations to a couple of sentences. For the `link` field, please make sure to use a freeCodeCamp article, freeCodeCamp YouTube video or official documentation.
If you choose to reference a video, please make sure to include the timestamp for the topic covered.

You can read more about how to create timestamps in this [helpful article](https://www.lifewire.com/link-to-specific-part-of-youtube-video-1616414).

**PLEASE NOTE: Any PR's that have questions taken from other quiz sites will not accepted. Please come up with your own quiz questions.**

### Quiz questions with code samples

Please refrain from creating quiz questions that have code samples. The reason for this is that we have found that these types of questions don't end up displaying well in the current layout and they are sometimes hard to read.

## Issues available for contribution

### Open to multiple contributors label

Any open issue that is marked with the `open to multiple contributors` label is free for anyone to work on and will not be assigned to just one person.

### Available for assignment label

Any open issue that is marked with the `Available for assignment` label will open for the first person that replies back to the issue asking to be assigned. Once that person has been assigned then they are free to start work on the issue.

### Already Assigned label

Open issues that have the `already assigned` label are not available for pickup. If someone has been assigned to this issue and there has been no movement on it for weeks, then the maintainers will reach out to the individual to ask if they are still interested in working on it. If the individual has decided not to pursue the issue anymore, then the maintainers will open it back up for contribution and remove the `already assigned` label.

**NOTE: Only the person assigned to the issue is free to create a PR. Other contributors that create a PR for an already assigned issue will have their PR closed.**

## How to contribute and make a pull request

1. In the command line, make sure you are in the Developer Quiz directory. `cd Developer_Quiz_Site`
2. Create and switch to a new branch by using the following command: `git checkout -b new-branch-name`
3. Add your changes to the project.
4. In the command line, stage your changes by using the `git add .` command.
5. Commit your changes by using the `git commit -m "commit message"` command.
6. Push up your changes to the remote branch on GitHub by using the `git push -u origin branch_name` command.
7. Open up a pull request (PR) directed to our `main` branch.
8. Then the maintainers will review your PR and either request changes or approve it.

If you need any help, please reach out in the [discussions tab](https://github.com/freeCodeCamp/Developer_Quiz_Site/discussions).

## How to propose new features

If you are interested in proposing new features, please open up a new [GitHub discussion](https://github.com/freeCodeCamp/Developer_Quiz_Site/discussions) with details for the proposed feature.

Please do not create a PR for a new feature without first discussing it with the maintainers. If you create a PR for a new feature without discussing it first, then your PR will be closed.

## How to report bugs in the codebase and typos in the documentation

If you spot a bug in the codebase or issues with the documentation, please open up a [GitHub issue](https://github.com/freeCodeCamp/Developer_Quiz_Site/issues) detailing the problem.
