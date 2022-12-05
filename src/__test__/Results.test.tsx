import Results from "../components/Results";
import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import { CATEGORY_NAMES } from "../constants";

const defaultAllCorrectAnswers = {
  accessibilityQuestionsCorrect: 3,
  agileQuestionsCorrect: 3,
  cloudComputingQuestionsCorrect: 0,
  cssQuestionsCorrect: 0,
  freeCodeCampQuestionsCorrect: 0,
  generalCSQuestionsCorrect: 0,
  gitQuestionsCorrect: 0,
  htmlQuestionsCorrect: 0,
  infoTechQuestionsCorrect: 0,
  javascriptQuestionsCorrect: 0,
  linuxQuestionsCorrect: 2,
  pythonQuestionsCorrect: 2,
  qualityAssuranceQuestionsCorrect: 0,
  regexQuestionsCorrect: 0,
  securityQuestionsCorrect: 0,
  sqlQuestionsCorrect: 0
};

const allWrongAnswers = {
  accessibilityQuestionsCorrect: 0,
  agileQuestionsCorrect: 0,
  cloudComputingQuestionsCorrect: 0,
  cssQuestionsCorrect: 0,
  freeCodeCampQuestionsCorrect: 0,
  generalCSQuestionsCorrect: 0,
  gitQuestionsCorrect: 0,
  htmlQuestionsCorrect: 0,
  infoTechQuestionsCorrect: 0,
  javascriptQuestionsCorrect: 0,
  linuxQuestionsCorrect: 0,
  pythonQuestionsCorrect: 0,
  qualityAssuranceQuestionsCorrect: 0,
  regexQuestionsCorrect: 0,
  securityQuestionsCorrect: 0,
  sqlQuestionsCorrect: 0
};

afterEach(cleanup);
describe("Results", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Results
        points={0}
        totalPoints={10}
        resetQuiz={undefined}
        show={false}
        hideResultsBreakdown={undefined}
        questionCategories={defaultAllCorrectAnswers}
      />,
      div
    );
  });
  it("Displays the accurate score for wrong answers", () => {
    const { getByText } = render(
      <Results
        points={0}
        totalPoints={10}
        resetQuiz={undefined}
        show={false}
        hideResultsBreakdown={undefined}
        questionCategories={allWrongAnswers}
      />
    );
    expect(
      getByText("You received 0 out of 10 points").textContent
    ).toBeDefined();
  });
  it("Displays the perfect score message if all answers are correct", () => {
    const { getByText } = render(
      <Results
        points={10}
        totalPoints={10}
        resetQuiz={undefined}
        show={false}
        hideResultsBreakdown={undefined}
        questionCategories={allWrongAnswers}
      />
    );
    expect(
      getByText("Wow! Perfect Score! 10 out of 10 points").textContent
    ).toBeDefined();
  });
  it("Does not display the score modal if show is false", () => {
    const { getByText } = render(
      <Results
        points={10}
        totalPoints={10}
        resetQuiz={undefined}
        show={false}
        hideResultsBreakdown={undefined}
        questionCategories={defaultAllCorrectAnswers}
      />
    );
    expect(() => getByText(CATEGORY_NAMES.ACCESSIBILITY + ":")).toThrow(
      "Unable to find an element"
    );
  });
  it("Displays the score modal if show is true", () => {
    const { getByText } = render(
      <Results
        points={10}
        totalPoints={10}
        resetQuiz={undefined}
        show={true}
        hideResultsBreakdown={undefined}
        questionCategories={defaultAllCorrectAnswers}
      />
    );
    expect(
      getByText(CATEGORY_NAMES.ACCESSIBILITY + ":").textContent
    ).toBeDefined();
  });
  it("Displays the correct score", () => {
    const { getAllByText } = render(
      <Results
        points={10}
        totalPoints={10}
        resetQuiz={undefined}
        show={true}
        hideResultsBreakdown={undefined}
        questionCategories={defaultAllCorrectAnswers}
      />
    );
    expect(getAllByText("3")[0].textContent).toBeDefined();
  });
});
