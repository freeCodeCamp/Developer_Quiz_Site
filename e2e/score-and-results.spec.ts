import { test, expect } from "@playwright/test";
import htmlQuizQuestions from "../src/data/html-quiz";

test.beforeEach(async ({ page }) => {
  await page.goto("/#/quizzes");
});

test("should show 'success' modal after selecting the correct option", async ({
  page
}) => {
  await page.getByRole("button", { name: "HTML" }).click();

  await page.getByRole("button", { name: "10", exact: true }).click();

  // find which option is correct
  // 1. get the qusetion text
  const legend = await page.$("legend");
  const questionText = await legend.textContent();

  const questionData = htmlQuizQuestions.find(({ Question }) =>
    questionText.includes(Question)
  );

  if (!questionData) {
    console.log("QUESTION NOT FOUND IN LIST!!!");
  }

  const questionAnswer = questionData.Answer;
  // Select correct option
  await page.getByRole("button", { name: questionAnswer }).click();

  // Click the submit button
  await page.getByRole("button").nth(4).click();

  await expect(page.getByRole("dialog")).toBeVisible();

  const modalDialog = await page.$(".modal-dialog");
  // get the contents of modal-text
  const modalHeading = await modalDialog.$("h2");

  const modalHeadingText = await modalHeading.textContent();
  expect(modalHeadingText).toContain("💡");
});
