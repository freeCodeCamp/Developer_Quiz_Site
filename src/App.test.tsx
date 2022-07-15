import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SelectQuiz from "./components/SelectQuiz";
import WelcomePage from "./components/WelcomePage";
import { render, cleanup } from "@testing-library/react";
import Results from "./components/Results";

afterEach(cleanup);

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});

describe("Welcome Page", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<WelcomePage start={undefined} />, div);
  });
});

describe("Select Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <SelectQuiz
        startQuiz={undefined}
        selectQuizArr={[10, 25, 50, 100, 681]}
      />,
      div
    );
  });
  it("Has a button for every quiz question amount under 600", () => {
    const { getByText } = render(
      <SelectQuiz startQuiz={undefined} selectQuizArr={[10, 25, 50, 100]} />
    );
    expect(getByText("10").textContent).toBeDefined();
    expect(getByText("25").textContent).toBeDefined();
    expect(getByText("50").textContent).toBeDefined();
    expect(getByText("All (100)").textContent).toBeDefined();
  });

  it("Has a button for max amount equal to 601", () => {
    const { getByText } = render(
      <SelectQuiz startQuiz={undefined} selectQuizArr={[600, 601]} />
    );
    expect(getByText("All (601)").textContent).toBeDefined();
  });
});

describe("Results", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Results points={0} totalPoints={10} resetQuiz={undefined} />,
      div
    );
  });
  it("Displays the accurate score for wrong answers", () => {
    const { getByText } = render(
      <Results points={0} totalPoints={10} resetQuiz={undefined} />
    );
    expect(
      getByText("You received 0 out of 10 points").textContent
    ).toBeDefined();
  });
  it("Displays the perfect score message if all answers are correct", () => {
    const { getByText } = render(
      <Results points={10} totalPoints={10} resetQuiz={undefined} />
    );
    expect(
      getByText("Wow! Perfect Score! 10 out of 10 points").textContent
    ).toBeDefined();
  });
});
