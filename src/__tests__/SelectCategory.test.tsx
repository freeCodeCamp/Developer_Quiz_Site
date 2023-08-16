import React from "react";
import SelectCategory from "../components/SelectCategory";
import { render, cleanup, RenderResult } from "@testing-library/react";

afterEach(cleanup);

describe("SelectCategory", () => {
  const selectCategoryArr = [
    "HTML",
    "CSS",
    "JavaScript",
    "Accessibility",
    "General CS",
    "IT",
    "Linux",
    "Python",
    "SQL"
  ];

  it("displays the Choose a Category screen", () => {
    const { getByText }: RenderResult = render(
      <SelectCategory
        selectCategoryArr={selectCategoryArr}
        selectQuiz={undefined}
        category={""}
        selectQuizNumber={undefined}
        startRandomQuiz={undefined}
      />
    );
    expect(getByText("Choose a Category")).toBeInTheDocument();
  });

  it("displays the correct categories", () => {
    const { getByText } = render(
      <SelectCategory
        selectCategoryArr={selectCategoryArr}
        selectQuiz={undefined}
        category={""}
        selectQuizNumber={undefined}
        startRandomQuiz={undefined}
      />
    );
    selectCategoryArr.forEach(category => {
      expect(getByText(category)).toBeInTheDocument();
    });
    expect(getByText("HTML")).toBeInTheDocument();
    expect(getByText("CSS")).toBeInTheDocument();
    expect(getByText("JavaScript")).toBeInTheDocument();
  });
});
