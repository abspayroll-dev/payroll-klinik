# Jurnal Aktivitas — Payroll Klinik

---

## Hari 1 — 21 Juli 2026

### Yang Dikerjakan
- **Sanity Studio setup**: Project baru `1bl2tj8i`, dataset `production`
- **`.env.local` dikonfigurasi**: Project ID, API version, token (full access)
- **Root `sanity.config.ts` diperbaiki**: Fallback projectId `1bl2tj8i` karena `.env.local` tidak terbaca oleh Vite
- **CORS origin ditambahkan**: `http://localhost:3333` (localhost + credentials)
- **Sanity CLI login**: Akun `hartono.abspayroll@gmail.com` (via email)
- **Frontend koneksi Sanity**: Client, queries, fallback articles sudah ada di `src/lib/sanity/`

### Status
| Komponen | Status |
|----------|--------|
| Sanity Studio | ✅ Berjalan (`npm run sanity`, port 3333) |
| Next.js Frontend | ✅ Berjalan (`npm run dev`, port 3000) |
| Sanity API | ✅ Terhubung (12 dokumen, 1 artikel "Test Artikel") |
| Token | ✅ Full access, valid |
| CORS | ✅ Aktif |

### Dokumen Baru
- `docs/panduan-konten.md` — Panduan struktur konten & aturan penulisan
- `docs/template-prompt-ai.md` — Template prompt untuk AI membuat artikel
- `docs/JOURNAL.md` — Jurnal ini

### Keputusan Penting
- Sanity config di-root tetap pakai fallback `'1bl2tj8i'` untuk kompatibilitas
- Frontend menggunakan fallback articles jika Sanity tidak tersedia
- Struktur artikel: Topic → Consultant → Article (banyak-ke-satu)

### Belum Dikerjakan
- Isi konten: Topic (PPh 21, BPJS, dll), Consultant, Article
- Buat `SiteSettings` document
- Deploy Sanity Studio ke Sanity hosting
- Setelah cukup konten, deploy Next.js ke Vercel

---

_(Jurnal ini di-append di akhir setiap sesi kerja)_
