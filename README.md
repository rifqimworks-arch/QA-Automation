# QA Automation with Playwright

Proyek ini adalah repositori untuk otomatisasi pengujian (QA Automation) menggunakan **Playwright** berbasis Node.js. Pengujian dirancang untuk memastikan kualitas, fungsionalitas, dan performa aplikasi web secara otomatis.

## 🚀 Fitur Utama
- **Cross-Browser Testing**: Pengujian berjalan lancar di Chromium (Chrome/Edge), Firefox, dan WebKit (Safari).
- **Execution Speed**: Eksekusi tes yang cepat berkat arsitektur berbasis *browser konteks*.
- **Auto-Wait**: Playwright otomatis menunggu elemen siap sebelum berinteraksi, meminimalisir tes yang *flaky* (gagal-tahu-kenapa).
- **Rich Reporting**: Menyediakan laporan hasil tes dalam bentuk HTML interaktif.

## 🛠️ Prasyarat
Sebelum menjalankan proyek ini, pastikan Anda sudah menginstal:
- [Node.js](https://nodejs.org) (Versi LTS sangat direkomendasikan)
- Git

## 📦 Instalasi

1. Clone repositori ini ke komputer lokal Anda:
   ```bash
   git clone https://github.com/rifqimworks-arch/QA-Automation.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd QA-Automation
   ```
3. Instal semua *dependencies* (termasuk Playwright dan browser bawaannya):
   ```bash
   npm install
   ```

## 🧪 Menjalankan Pengujian

Berikut adalah beberapa perintah untuk mengeksekusi pengujian:

- **Menjalankan semua tes (Mode Headless):**
  ```bash
  npx playwright test
  ```
- **Menjalankan tes dengan UI/Layar (Mode Headed):**
  ```bash
  npx playwright test --headed
  ```
- **Menjalankan tes pada browser tertentu saja (misal: Chrome):**
  ```bash
  npx playwright test --project=chromium
  ```
- **Membuka antarmuka UI interaktif Playwright:**
  ```bash
  npx playwright test --ui
  ```

## 📊 Laporan Pengujian (Reports)

Setelah pengujian selesai dijalankan, Anda dapat melihat laporan HTML lengkap dengan mengetik perintah:
```bash
npx playwright show-report
```

## 📂 Struktur Folder Proyek
```text
├── tests/               # Tempat menyimpan file script pengujian (*.spec.js / *.spec.ts)
├── playwright.config.js # File konfigurasi utama Playwright
├── package.json         # File konfigurasi dependencies Node.js
└── README.md            # Dokumentasi proyek
```
