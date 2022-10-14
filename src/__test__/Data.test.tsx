import { ALL_CATEGORIES } from "../constants";

describe("Every question is valid", () => {
  test.each(ALL_CATEGORIES)(
    "Every question has an answer, explanation, a link and three distractions",
    (input) => {
      expect(input).toHaveProperty("Question");
      expect(input).toHaveProperty("Answer");
      expect(input).toHaveProperty("Distractor1");
      expect(input).toHaveProperty("Distractor2");
      expect(input).toHaveProperty("Distractor3");
      expect(input).toHaveProperty("Explanation");
      expect(input).toHaveProperty("Link");
    }
  );
});
