import { test, expect } from "@playwright/test";
import htmlQuizQuestions from "../src/data/html-quiz";
import { correctModalResponses } from "../src/data/modal-responses";

test.beforeEach(async ({ page }) => {
  await page.goto("/#/quizzes");
});

test("should show 'success' modal after selecting the correct option", async ({
  page
}) => {
  await page.getByRole("button", { name: "HTML" }).click();

  await page.getByRole("button", { name: "10", exact: true }).click();

  // get points num before answering the question
  await expect(page.locator(".quiz-text")).toContainText("Points: 0");

  // find which option is correct
  // 1. get the question text
  const legend = await page.locator("legend");
  const questionText = await legend.textContent();
  // 2. find the question inside questions of the category
  const questionData = htmlQuizQuestions.find(({ Question }) =>
    questionText.includes(Question)
  );

  if (!questionData) {
    console.log("QUESTION NOT FOUND IN LIST!!!");
  }
  // 3. find the 'answer' option
  const questionAnswer = questionData.Answer;
  // 4. select correct option
  await page.getByRole("button", { name: questionAnswer }).click();

  // Click the submit button
  await page.getByRole("button").nth(4).click();

  await expect(page.getByRole("dialog")).toBeVisible();

  const modalDialog = await page.getByRole("dialog");

  // get the contents of modal-text
  const successLocator = await modalDialog.locator("h2");
  let successText = await successLocator.textContent();
  successText = successText.replace("💡", "").replace(" ", "");

  expect(correctModalResponses).toContain(successText);

  await expect(page.getByTestId("modal-points")).toHaveText("Points: 1");
});
