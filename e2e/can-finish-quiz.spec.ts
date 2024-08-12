import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/#/quizzes");

  await page.getByRole("button", { name: "HTML" }).click();

  await page.getByRole("button", { name: "10", exact: true }).click();
});

test("should show the results after the user has answered answer all questions", async ({
  page
}) => {
  // loop through all the questions.
  for (let i = 1; i <= 10; i++) {
    expect(page.url()).toContain(`${i}/of/10`);

    // Select the first option (no matter if it right or worng)
    await page.getByRole("button").first().click();

    await page.getByRole("button", { name: "Submit", exact: true }).click();

    const dialog = page.getByRole("dialog");

    await expect(dialog).toBeVisible();
    await expect(dialog.getByText("Points:")).toBeVisible();
    await expect(dialog.getByText("Your answer:")).toBeVisible();
    await expect(dialog.getByText("Answer:", { exact: true })).toBeVisible();
    await dialog.getByRole("button", { name: "Next Question" }).click();
  }

  // After the 10th question, the results page shows up
  await page.waitForURL("/#/quizzes/HTML/results");

  await expect(page.getByRole("heading", { name: "Results" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Play again?" })).toBeVisible();
});
