import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/#/quizzes");

  await page.getByRole("button", { name: "HTML" }).click();

  await page.getByRole("button", { name: "10", exact: true }).click();
});

test("after answer all the questions user should see 'results' page", async ({
  page
}) => {
  // loop through all the questions.
  for (let i = 1; i <= 10; i++) {
    // Select the first option (no matter if it right or worng)
    await page.getByRole("button").nth(0).click();

    // Click the submit button
    await page.getByRole("button").nth(4).click();

    await expect(page.getByRole("dialog")).toBeVisible();
    // Find the modal-dialog element
    const modalDialog = await page.$(".modal-dialog");

    // Ensure the modal-dialog element exists
    expect(modalDialog).not.toBeNull();

    // Find the button inside the modal-dialog element
    const button = await modalDialog.$("button");

    // Click 'Next Question' button
    await button.click();

    if (i === 10) {
      expect(page.url()).toContain("results");
    }
  }
});
