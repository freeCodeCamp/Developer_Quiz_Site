import { test, expect } from "@playwright/test";
import htmlQuizQuestions from "../src/data/html-quiz";
import {
  correctModalResponses,
  incorrectModalResponses
} from "../src/data/modal-responses";

test.beforeEach(async ({ page }) => {
  await page.goto("/#/quizzes");
});

test("should show 'success' modal after selecting the correct option", async ({
  page
}) => {
  await page.getByRole("button", { name: "HTML" }).click();

  await page.getByRole("button", { name: "10", exact: true }).click();

  await expect(page.getByText("Points: 0")).toBeVisible();

  const question = await page.locator("legend").textContent();
  // Find the question inside questions of the category
  const questionData = htmlQuizQuestions.find(({ Question }) =>
    question.includes(Question)
  );

  if (!questionData) {
    console.log("Question not found.");
  }

  const answer = questionData.Answer;

  await page.getByRole("button", { name: answer }).click();
  await page.getByRole("button", { name: "Submit", exact: true }).click();

  const dialog = page.getByRole("dialog");
  const message = await dialog.getByRole("heading", { level: 2 }).textContent();
  const isMessageInExpectedSet = correctModalResponses.some(response =>
    message.includes(response)
  );

  await expect(dialog).toBeVisible();
  expect(isMessageInExpectedSet).toEqual(true);
  await expect(dialog.getByText("Points: 1")).toBeVisible();
});

test("should show 'failure' modal after selecting the wrong option", async ({
  page
}) => {
  await page.getByRole("button", { name: "HTML" }).click();

  await page.getByRole("button", { name: "10", exact: true }).click();

  await expect(page.getByText("Points: 0")).toBeVisible();

  const question = await page.locator("legend").textContent();
  // Find the question inside questions of the category
  const questionData = htmlQuizQuestions.find(({ Question }) =>
    question.includes(Question)
  );

  if (!questionData) {
    console.log("Question not found.");
  }

  const distractor = questionData.Distractor1;

  await page.getByRole("button", { name: distractor }).click();
  await page.getByRole("button", { name: "Submit", exact: true }).click();

  const dialog = page.getByRole("dialog");
  const message = await dialog.getByRole("heading", { level: 2 }).textContent();
  const isMessageInExpectedSet = incorrectModalResponses.some(response =>
    message.includes(response)
  );

  await expect(dialog).toBeVisible();
  expect(isMessageInExpectedSet).toEqual(true);
  await expect(dialog.getByText("Points: 0")).toBeVisible();
});
