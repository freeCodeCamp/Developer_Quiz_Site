import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});
//do not use system suffix
// eslint-disable-next-line no-empty-pattern
test.beforeEach(async ({}, testInfo) => {
  testInfo.snapshotSuffix = "";
});

test("should render the page correctly", async ({ page }) => {
  await expect(page).toHaveTitle(/Developer Quiz/);

  const startButton = page.getByRole("link", {
    name: "Get started (it's free)"
  });
  await expect(startButton).toBeVisible();
  await expect(startButton).toHaveAttribute("href", "#/quizzes");
  // snapshot test for first section
  const learnSection = page
    .locator("div")
    .filter({
      hasText:
        "Learn to Code RPG QuizPractice with 1200+ QuestionsGet started (it's free)"
    })
    .nth(1);
  await expect(learnSection).toHaveScreenshot();
});
