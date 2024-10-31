import React from "react";
import SelectQuestionsTotal from "../components/SelectQuestionsTotal";
import { render, cleanup } from "@testing-library/react";
import { expect, afterEach, describe, it, vi } from "vitest";

afterEach(cleanup);

describe("Select Quiz", () => {
  it("renders without crashing", () => {
    render(<SelectQuestionsTotal startQuiz={vi.fn()} totalQuestions={0} />);
  });
  it("has a button for every quiz question amount under 600", () => {
    const { getByText } = render(
      <SelectQuestionsTotal startQuiz={vi.fn()} totalQuestions={600} />
    );
    expect(getByText("10").textContent).toBeDefined();
    expect(getByText("25").textContent).toBeDefined();
    expect(getByText("50").textContent).toBeDefined();
    expect(getByText("All (600)").textContent).toBeDefined();
  });

  it("Has a button for max amount equal to 601", () => {
    const { getByText } = render(
      <SelectQuestionsTotal startQuiz={vi.fn()} totalQuestions={601} />
    );
    expect(getByText("All (601)").textContent).toBeDefined();
  });
});
