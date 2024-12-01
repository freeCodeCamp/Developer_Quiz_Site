import { test, expect } from "@playwright/test";
import { CATEGORIES, QUESTION_NUMS } from "../src/constants";

test.beforeEach(async ({ page }) => {
  await page.goto("/#/quizzes");
});

test("should display a list of categories", async ({ page }) => {
  await expect(
    page.getByRole("heading", { name: "Choose a Category" })
  ).toBeVisible();

  for (let i = 0; i < CATEGORIES.length; i++) {
    await expect(
      page.getByRole("button", { name: CATEGORIES[0], exact: true })
    ).toBeVisible();
  }
});

test("should allow selecting the number of questions", async ({ page }) => {
  await page.getByRole("button", { name: "HTML" }).click();

  await page.waitForURL("#/quizzes/HTML/questionsTotal");

  await expect(
    page.getByRole("heading", { name: "Choose a length for the Quiz" })
  ).toBeVisible();

  for (let i = 0; i < QUESTION_NUMS.length; i++) {
    await expect(
      page.getByRole("button", {
        name: QUESTION_NUMS[i].toString(),
        exact: true
      })
    ).toBeVisible();
  }

  await expect(page.getByRole("button", { name: /All/ })).toBeVisible();
});

test("should start the first question after the user has selected the number of questions", async ({
  page
}) => {
  await page.getByRole("button", { name: "HTML" }).click();

  await page.getByRole("button", { name: "10", exact: true }).click();

  await page.waitForURL("/#/quizzes/HTML/questions/1/of/10");

  await expect(page.getByRole("heading", { name: "Question 1" })).toBeVisible();
});

test("question page should contain 4 options and `submit` button", async ({
  page
}) => {
  await page.getByRole("button", { name: "HTML" }).click();

  await page.getByRole("button", { name: "10", exact: true }).click();

  const options = page.getByRole("list");
  await expect(options.getByRole("button")).toHaveCount(4);

  await page.getByRole("button", { name: "Submit", exact: true }).click();
});

test("selected first option must be checked", async ({ page }) => {
  await page.getByRole("button", { name: "HTML" }).click();

  await page.getByRole("button", { name: "10", exact: true }).click();

  const firstOptionText = await page.getByRole("button").first().textContent();
  // Select the first option (no matter if it's right or wrong)
  await page.getByRole("button").first().click();

  // Check if the first radio is checked
  const hiddenRadioButton = page.locator(`input[id='${firstOptionText}']`);
  await expect(hiddenRadioButton).toBeChecked();
});

test("should show a modal after selecting one option and click the `submit` button", async ({
  page
}) => {
  await page.getByRole("button", { name: "HTML" }).click();

  await page.getByRole("button", { name: "10", exact: true }).click();

  // Select the first option (no matter if it's right or worng)
  await page.getByRole("button").first().click();

  await page.getByRole("button", { name: "Submit", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
});
