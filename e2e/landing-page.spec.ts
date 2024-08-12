import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("should render the page correctly", async ({ page }) => {
  await expect(page).toHaveTitle(/Developer Quiz/);

  const startButton = page.getByRole("link", {
    name: "Get started (it's free)"
  });
  await expect(startButton).toBeVisible();
  await expect(startButton).toHaveAttribute("href", "#/quizzes");
});
