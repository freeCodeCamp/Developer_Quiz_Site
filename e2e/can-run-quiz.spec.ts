import { test, expect } from "@playwright/test";

const CATEGORIES = [
  "HTML",
  "CSS",
  "JavaScript",
  "Accessibility",
  "General CS",
  "IT",
  "Linux",
  "Python",
  "SQL",
  "Random"
] as const;

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/#/quizzes");
});

test("select category page has full list of categories", async ({ page }) => {
  // Make sure the list has all the categores.
  await expect(page.getByRole("button")).toHaveText(CATEGORIES);
});

test("clicking HTML category should lead to select-questions-number page ", async ({
  page
}) => {
  await page.getByRole("button", { name: "HTML" }).click();

  expect(page.url()).toContain("HTML");

  await expect(
    page.getByRole("heading", { name: "Choose a length for the Quiz" })
  ).toBeVisible();

  // should display numbers options
  const buttons = await page.$$eval("button", buttons =>
    buttons.map(button => button.textContent.trim())
  );

  // Define the expected button texts
  const expectedButtonTexts = ["10", "25", "50", "100"];

  // Check if the page contains the expected number of buttons
  expect(buttons.length).toBe(5);

  // Check if the buttons have the expected text content
  expect(buttons).toEqual(expect.arrayContaining(expectedButtonTexts));

  expect(buttons[4]).toContain("All");
});

test("clicking '10' option should lead to question page ", async ({ page }) => {
  await page.getByRole("button", { name: "HTML" }).click();

  await page.getByRole("button", { name: "10", exact: true }).click();

  expect(page.url()).toContain("questions/1/of/10");

  await expect(page.getByRole("heading", { name: "Question 1" })).toBeVisible();
});

test("question page should contain 4 options and `submit` button", async ({
  page
}) => {
  await page.getByRole("button", { name: "HTML" }).click();

  await page.getByRole("button", { name: "10", exact: true }).click();

  // Get all buttons at 'question' page
  const buttons = await page.$$("button");

  // Check if the page contains exactly 5 buttons
  expect(buttons.length).toBe(5);

  const lastButtonText = await buttons[4].textContent();

  expect(lastButtonText).toBe("Submit");
});

test("should show modal after selecting one option and click the `submit` button", async ({
  page
}) => {
  await page.getByRole("button", { name: "HTML" }).click();

  await page.getByRole("button", { name: "10", exact: true }).click();

  // Select the first option (no matter if it right or worng)
  await page.getByRole("button").nth(0).click();

  // Click the submit button
  await page.getByRole("button").nth(4).click();

  await expect(page.getByRole("dialog")).toBeVisible();
});
