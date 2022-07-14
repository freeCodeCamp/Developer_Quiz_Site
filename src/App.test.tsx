import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SelectQuiz from "./components/SelectQuiz";
import WelcomePage from "./components/WelcomePage";
import { render, fireEvent, cleanup } from "@testing-library/react";
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
      <SelectQuiz
        startQuiz={undefined}
        selectQuizArr={[10, 25, 50, 100, 599]}
      />
    );
    expect(getByText("10").textContent).toBeDefined();
    expect(getByText("25").textContent).toBeDefined();
    expect(getByText("50").textContent).toBeDefined();
    expect(getByText("100").textContent).toBeDefined();
    // TODO: Ensure it isn't supposed to be All (599) here
    expect(getByText("599").textContent).toBeDefined();
  });
  it("Has a button for every quiz question amount for max amount equal to 600", () => {
    const { getByText } = render(
      <SelectQuiz
        startQuiz={undefined}
        selectQuizArr={[10, 25, 50, 100, 600]}
      />
    );
    expect(getByText("10").textContent).toBeDefined();
    expect(getByText("25").textContent).toBeDefined();
    expect(getByText("50").textContent).toBeDefined();
    expect(getByText("100").textContent).toBeDefined();
    // TODO: Ensure it isn't supposed to be All (600) here
    expect(getByText("600").textContent).toBeDefined();
  });
  it("Has a button for every quiz question for max amount equal to 601", () => {
    const { getByText } = render(
      <SelectQuiz
        startQuiz={undefined}
        selectQuizArr={[10, 25, 50, 100, 601]}
      />
    );
    expect(getByText("10").textContent).toBeDefined();
    expect(getByText("25").textContent).toBeDefined();
    expect(getByText("50").textContent).toBeDefined();
    expect(getByText("100").textContent).toBeDefined();
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
  it("Displays score accurately if wrong answers", () => {
    const { getByText } = render(
      <Results points={0} totalPoints={10} resetQuiz={undefined} />
    );
    expect(
      getByText("You received 0 out of 10 points").textContent
    ).toBeDefined();
  });
  it("Displays score accurately if all answers correct", () => {
    const { getByText } = render(
      <Results points={10} totalPoints={10} resetQuiz={undefined} />
    );
    expect(
      getByText("Wow! Perfect Score! 10 out of 10 points").textContent
    ).toBeDefined();
  });
});
