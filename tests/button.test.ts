import { test, expect, chromium, type BrowserContext } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('Extension popup contains button', async () => {
  const pathToExtension = path.join(__dirname, './../dist');
  console.log('Extension path:', pathToExtension);

  const context = await chromium.launchPersistentContext('', {
    headless: false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  });

  const [background] = await context.serviceWorkers();
  if (!background) {
    await context.waitForEvent('serviceworker');
  }

  const extensionId = background.url().split('/')[2];

  const extensionPopupUrl = `chrome-extension://${extensionId}/popup/index.html`;

  const page = await context.newPage();
  await page.goto(extensionPopupUrl);

  await page.waitForSelector('button');
  const button = await page.locator('button');
  await expect(button).toBeVisible();
  await expect(button).toHaveText(/Analyzovat stránku/i);

  await button.click();
  await expect(button).toHaveText(/Analyzuji.../i);

  await context.close();
});
