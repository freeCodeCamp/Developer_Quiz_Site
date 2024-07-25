import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test("has title", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Developer Quiz/);
});

test("pressing get started link should lead to select categories page", async ({
  page
}) => {
  // Click the get started link.
  await page.getByRole("link", { name: "Get started (it's free)" }).click();

  expect(page.url()).toContain("quizzes");
  // Expects page to have a heading that says 'Choose a Category'.
  await expect(
    page.getByRole("heading", { name: "Choose a Category" })
  ).toBeVisible();
});
