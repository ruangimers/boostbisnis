# Veo3 Prompt Generator

Ini adalah aplikasi web sederhana yang dibuat dengan HTML, CSS, dan JavaScript untuk membantu membuat prompt yang terstruktur dan detail untuk model AI video seperti Google Veo.

## Fitur

-   **14 Kolom Input**: Mencakup semua aspek penting dari sebuah adegan video, mulai dari subjek hingga gaya visual.
-   **Opsi Terstruktur**: Banyak pilihan dropdown untuk gerakan kamera, pencahayaan, gaya, dan lainnya untuk mempercepat proses.
-   **Output Dua Bahasa**: Menghasilkan prompt dalam Bahasa Indonesia (dapat diedit) dan Bahasa Inggris (final, siap pakai).
-   **Pengembangan Prompt**: Logika JavaScript menggabungkan input menjadi narasi yang koheren, bukan hanya daftar kata kunci.
-   **Desain Modern**: Antarmuka yang bersih, responsif, dan mudah digunakan.

## Cara Menggunakan

1.  **Lokal**:
    *   Clone atau unduh repositori ini.
    *   Buka file `index.html` di browser web modern pilihan Anda (Chrome, Firefox, Edge, dll.).

2.  **Deployment ke GitHub Pages**:
    *   Buat repositori baru di akun GitHub Anda.
    *   Unggah file `index.html`, `style.css`, dan `script.js` ke repositori tersebut.
    *   Masuk ke menu **Settings** > **Pages** di repositori Anda.
    *   Di bawah bagian "Build and deployment", pilih sumber (`Source`) ke **Deploy from a branch**.
    *   Pilih branch `main` (atau `master`) dan folder `/root`, lalu klik **Save**.
    *   Tunggu beberapa menit, dan aplikasi Anda akan tersedia di `https://<username>.github.io/<repository-name>/`.

## Struktur File

-   `index.html`: Struktur utama aplikasi.
-   `style.css`: Styling untuk antarmuka.
-   `script.js`: Logika untuk menghasilkan dan menerjemahkan prompt.

---
Dibuat sebagai respons terhadap permintaan pengguna.
