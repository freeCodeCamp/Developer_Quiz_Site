import React from "react";
import ReactDOM from "react-dom";
import SelectQuiz from "../components/SelectQuiz";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

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
