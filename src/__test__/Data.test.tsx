import { ALL_CATEGORIES } from "../constants";

describe("Every question is valid", () => {
  test.each(ALL_CATEGORIES)(
    "Every question has an answer, explanation, a link and three distractions",
    input => {
      expect(input).toHaveProperty("Question");
      expect(input).toHaveProperty("Answer");
      expect(input).toHaveProperty("Distractor1");
      expect(input).toHaveProperty("Distractor2");
      expect(input).toHaveProperty("Distractor3");
      expect(input).toHaveProperty("Explanation");
      expect(input).toHaveProperty("Link");
    }
  );
  test.each(ALL_CATEGORIES)(
    "There are no empty answers, explanations,links or distractions.",
    input => {
      expect(input.Question.length).toBeGreaterThan(0);
      expect(input.Answer.length).toBeGreaterThan(0);
      expect(input.Distractor1.length).toBeGreaterThan(0);
      expect(input.Distractor2.length).toBeGreaterThan(0);
      expect(input.Distractor3.length).toBeGreaterThan(0);
      expect(input.Explanation.length).toBeGreaterThan(0);
      expect(input.Link.length).toBeGreaterThan(0);
    }
  );
});
