import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

// PENTING: Pastikan menyertakan 'And' di sini jika menggunakannya di file .feature
const { Given, When, Then } = createBdd();

Given('Pengguna membuka halaman utama Sauce Demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
});

When('Pengguna memasukkan username {string} dan password {string}', async ({ page }, username, password) => {
  await page.fill('[data-test="username"]', username);
  await page.fill('[data-test="password"]', password);
});

When('Pengguna menekan tombol login Sauce Demo', async ({ page }) => {
  await page.click('[data-test="login-button"]');
});

Then('Pengguna menambahkan produk {string} ke keranjang belanja', async ({ page }, Backpack) => {
  const productLocator = page.locator(`.inventory_item:has-text("${Backpack}")`);
  await productLocator.locator('button').click();

});

Then('pengguna masuk ke halaman keranjang belanja dan melihat produk {string} di dalamnya', async ({ page }, Backpack) => {
  await page.click('.shopping_cart_link');
  const cartItemLocator = page.locator(`.cart_item:has-text("${Backpack}")`);
  await expect(cartItemLocator).toBeVisible();
});

Then('pengguna menekan tombol checkout dan diarahkan ke halaman checkout', async ({ page }) => {
  await page.click('[data-test="checkout"]');
  await expect(page).toHaveURL(/.*checkout-step-one.html/);
});

Then('pengguna mengisi informasi checkout dengan nama depan {string}, nama belakang {string}, dan kode pos {string}', async ({ page }, firstName, lastName, postalCode) => {
  await page.fill('[data-test="firstName"]', firstName);
  await page.fill('[data-test="lastName"]', lastName);
  await page.fill('[data-test="postalCode"]', postalCode);
});

Then('pengguna menekan tombol continue dan diarahkan ke halaman overview', async ({ page }) => {
  await page.click('[data-test="continue"]');
  await expect(page).toHaveURL(/.*checkout-step-two.html/);
});

Then('pengguna menekan tombol finish dan diarahkan ke halaman konfirmasi pesanan', async ({ page }) => {
  await page.click('[data-test="finish"]');
  await expect(page).toHaveURL(/.*checkout-complete.html/);
});

Then('pengguna melihat pesan konfirmasi {string}', async ({ page }, thankYouMessage) => {
  const confirmationLocator = page.locator('.complete-header');
  
  // Perbaikan: Tambahkan properti ignoreCase agar mengabaikan perbedaan huruf besar/kecil
  await expect(confirmationLocator).toHaveText(thankYouMessage, { ignoreCase: true });
});

