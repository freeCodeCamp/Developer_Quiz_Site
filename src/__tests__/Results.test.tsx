import Results from "../components/Results";
import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);
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
