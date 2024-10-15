const { test, describe, expect, beforeEach } = require("@playwright/test")

describe("Pokedex", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("")
    await expect(page.getByText("ivysaur")).toBeVisible()
    await expect(
      page.getByText(
        "Pokémon and Pokémon character names are trademarks of Nintendo."
      )
    ).toBeVisible()
  })

  test("front page allows users to navigate to the page of a particular Pokemon", async ({
    page,
  }) => {
    await page.goto("")
    await page.getByText("ivysaur").click()
    await expect(page.getByText("chlorophyll")).toBeVisible()
  })
})
