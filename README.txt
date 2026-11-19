# REPOSITORY // NATHARA ARCHIVE

**Serial SKETSA** — repositori digital sastra dan serial prosa liris oleh Nathara Archive's.

Serial prosa liris yang mengangkat perasaan, kenangan, dan berbagai pengalaman manusia, dibaca lewat pembaca manuskrip interaktif.

🔗 **Baca di sini:** https://nathanieltee.github.io/natharaarchive/
📷 **Instagram:** [@natharaarchive](https://www.instagram.com/natharaarchive/)

---

## Isi repositori

| File | Fungsi |
| --- | --- |
| `index.html` | Struktur halaman dan meta tag (SEO, pratinjau link) |
| `style.css` | Seluruh tampilan |
| `script.js` | Data seluruh volume (`SKETSA_FOLDERS`) dan logika pembaca |
| `assets/` | `favicon.png` dan `portrait.png` (kartu About) |
| `og-card.png` | Gambar pratinjau saat link dibagikan (1200×630) |
| `robots.txt`, `sitemap.xml` | Untuk mesin pencari |

## Menambah atau mengubah karya

Semua konten ada di `SKETSA_FOLDERS` di dalam `script.js`. Untuk menambah volume baru, tambahkan satu objek folder dengan status `"established"`, dan jumlah volume di navigasi akan terhitung otomatis.

Setelah mengubah file, kirim ke GitHub:

```bash
git add .
git commit -m "deskripsi perubahan"
git push
```

Situs akan terbarui sendiri dalam 1–2 menit.

## Fitur

- Pembaca slide dengan navigasi keyboard dan geser (swipe)
- Bookmark, riwayat baca, dan progres membaca (tersimpan di peramban)
- Pencarian arsip dan glosarium istilah Sanskerta & Kawi
- Tombol **Salin Teks** dengan atribusi dan tautan langsung ke setiap karya
- Tautan langsung per karya, misalnya `#jiwa/01`

## Hak cipta

© 2026 Nathara Archive's. Seluruh hak dilindungi. Tulisan, desain, dan ilustrasi dalam repositori ini tidak boleh disalin, diunggah ulang, atau dipakai untuk keperluan lain tanpa izin tertulis.
