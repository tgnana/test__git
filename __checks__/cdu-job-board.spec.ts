import { test, expect } from '@playwright/test'

test('CDU job board shows available vacancies', async ({ page }) => {
  // Start from the CDU careers page
  await page.goto(process.env.ENVIRONMENT_URL ?? 'https://www.cdu.edu.au/careers-cdu')

  // Close the student-type selection dialog if it appears
  const closeButton = page.getByRole('button', { name: 'Close' })
  if (await closeButton.isVisible({ timeout: 5000 }).catch(() => false)) {
    await closeButton.click()
  }

  // Click through to the TechnologyOne workplace portal
  await page.getByRole('link', { name: 'CDU job opportunities' }).click()

  // Wait for the CiA Workplace intermediary page to load
  await expect(page.getByRole('heading', { name: 'Available Jobs', level: 4 })).toBeVisible({ timeout: 15000 })

  // Click the Available Jobs tile link (the overlay link covering the heading)
  await page.locator('a.tileTooltip[aria-description="Available Jobs"]').click()

  // Wait for the full job board page to load with the level 1 heading
  await expect(page.getByRole('heading', { name: 'Available Jobs', level: 1 })).toBeVisible({ timeout: 15000 })

  // Verify that job listings are present and loaded
  await expect(page.getByText(/\d+ - \d+ of \d+ Jobs/)).toBeVisible({ timeout: 15000 })
})
