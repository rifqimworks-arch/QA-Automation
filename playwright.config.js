// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const bddConfig = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.js',
});

export default defineConfig({
  testDir: bddConfig, 
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  
  /* 1. ATUR DI SINI UNTUK PENGATURAN GLOBAL */
  use: {
    trace: 'on-first-retry',
    screenshot: 'on', 
    // Wajib set viewport ke null agar browser bisa mengikuti ukuran layar monitor Anda
    viewport: null, 
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // Setel properti di bawah ini ke undefined agar tidak bentrok dengan viewport null
        viewport: null, 
        deviceScaleFactor: undefined,
        isMobile: undefined,
        hasTouch: undefined,
        
        launchOptions: {
          args: ['--start-maximized'] 
        }
      },
    },
  ],

});
