import { expect, test } from '@playwright/test';

const locales = [
	{ path: '/docs/', lang: 'en', title: 'Kabuk documentation' },
	{ path: '/docs/tr/', lang: 'tr', title: 'Kabuk belgeleri' },
	{ path: '/docs/kk/', lang: 'kk', title: 'Kabuk құжаттамасы' },
	{ path: '/docs/ru/', lang: 'ru', title: 'Документация Kabuk' }
];

for (const l of locales) {
	test(`${l.lang} home opens under /docs/`, async ({ page }) => {
		await page.goto(l.path);
		await expect(page.locator('html')).toHaveAttribute('lang', l.lang);
		await expect(page.getByRole('heading', { level: 1 })).toContainText(l.title);
	});
}

test('install page says not released yet', async ({ page }) => {
	await page.goto('/docs/install');
	await expect(page.locator('main')).toContainText('not been released');
});
