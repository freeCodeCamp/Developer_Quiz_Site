# freeCodeCamp Developer Quiz

![Learn to Code RPG Main Menu](Splash_Art.png)

The [developerquiz.org](https://developerquiz.org/) website is the companion to [Learn to Code RPG Game](https://freecodecamp.itch.io/learn-to-code-rpg), a visual novel game developed by [freeCodeCamp](https://www.freecodecamp.org) to help you learn how to code. 😺

[developerquiz.org](https://developerquiz.org/) hosts all **1200+** multiple choice questions featured in the game on the following topics:

- HTML 🖊️
- CSS 🎨
- JavaScript ⚙️
- Linux 🐧
- Python 🐍
- Git 📁
- SQL 📊
- IT 🖥️
- Quality Assurance ✅
- Agile ⏩
- Security 🔒
- and Computer Science Concepts 🤖

All questions are beginner friendly and approachable to all levels, so they are ideal for refreshing your programming knowledge.

If you are brand new to programming, learn to code for free and start your programming journey with [freeCodeCamp](https://www.freecodecamp.org/).

freeCodeCamp creates thousands of articles, videos and courses on a variety of coding topics.

All of the helpful and thoughtful resources are made possible by the generous donations of kind people.

Have a look [here](https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp/) at the different ways you can support our non-profit's mission and make tech education accessible to all.

## How to work on the project using Gitpod

Gitpod is an online environment, where you can work on projects without installing anything on your machine. To setup the Developer Quiz Site with Gitpod, visit this [link](https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/Developer_Quiz_Site/)

## How to run the project locally

Here are directions on how to fork the freeCodeCamp/Developer_Quiz_Site repository:<br>
https://docs.github.com/en/get-started/quickstart/fork-a-repo

In the command line:

1. Clone the repo by typing `git clone https://github.com/YOUR-GITHUB-USERNAME/Developer_Quiz_Site.git`
2. Then type `cd Developer_Quiz_Site` to go into the project's directory.
3. Install dependencies with `pnpm install`
4. Run the project with `pnpm start`
5. Have fun 🚀

### Using Docker Compose

Ensure you have `Docker` and `Docker Compose` installed on your machine.

1. Clone the repo by typing `git clone https://github.com/YOUR-GITHUB-USERNAME/Developer_Quiz_Site.git`
2. Then type `cd Developer_Quiz_Site` to go into the project's directory.
3. Run the project with `docker-compose up`
4. Access the project at `http://localhost:3000` or via the host network IP address, typically `http://HOST_IP_ADDRESS:3000`
5. Have fun 🚀

### How to contribute

This open source project is a work in progress and ever evolving.

We welcome all contributions, suggestions and ideas for improvement from the community.

You can contribute by fixing bugs in the codebase, proposing new features or adding new questions.

Make sure to first read through the [Code of Conduct](https://www.freecodecamp.org/news/code-of-conduct/).

Then, read through our [Contributing Documentation](CONTRIBUTING.md).

### How to run the unit tests

Once you are finished making changes, you will need to run the test suite to make sure your code doesn't break anything.
Here is terminal command for running tests: `pnpm test` (or, even shorter: `pnpm t` )  
alternativetly (and also cool!) - you can install [vscode vitest extension](https://github.com/vitest-dev/vscode)

### How to run the e2e tests

This repo uses [Playwright](https://playwright.dev/) for end-to-end testing.

- To run the tests in UI mode, run:
  ```
  pnpm run e2e:ui
  ```
- To run the tests in headless mode, run:

  ```
  pnpm run e2e:ci
  ```

Note: e2e tests cannot be run in Gitpod environment.

### How to report bugs

Found a bug while playing?

Read through [this helpful article](https://forum.freecodecamp.org/t/how-to-report-a-bug-to-the-freecodecamp-open-source-community/19543) on how to report bugs.

Then, report them by opening a **GitHub Issue**.

### Our Contributors

<a href="https://github.com/freeCodeCamp/Developer_Quiz_Site/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=freeCodeCamp/Developer_Quiz_Site&columns=15" />
</a>

### License

Copyright © 2024 freeCodeCamp.org, All rights reserved.
