# Panduan Struktur Konten Payroll Klinik

## 1. Hierarki Dokumen

```
Topic ─────────────────┐
  (kategori konten)    │
                       ├──► Article (wajib punya Topic & Consultant)
Consultant ────────────┘
(penulis/narasumber)

SiteSettings (opsional, cukup 1 dokumen global)
```

Relasi:
- **Article → Topic**: banyak-ke-satu (1 artikel = 1 topik)
- **Article → Consultant**: banyak-ke-satu (1 artikel = 1 penulis)

---

## 2. Urutan Pembuatan di Studio

| Urutan | Dokumen | Field Wajib | Contoh Isi |
|--------|---------|-------------|------------|
| 1️⃣ | **Topic** | `title` | PPh 21, BPJS Ketenagakerjaan, Payroll Technology |
| 2️⃣ | **Consultant** | `name` | Tim Payroll Klinik, Andi Pratama, S.Pd. |
| 3️⃣ | **Article** | title, slug, excerpt, author, topic, body | (lihat template) |
| 4️⃣ | **SiteSettings** | - | Contact info, social links |

Catatan: Topic dan Consultant harus dibuat **sebelum** Article karena Article me-reference keduanya.

---

## 3. Daftar Topik yang Disarankan

| Topik | Deskripsi | Contoh Judul |
|-------|-----------|--------------|
| **PPh 21** | Perhitungan, pelaporan, gross up, tip pajak | *"Panduan Lengkap PPh 21 2026"*, *"Cara Gross Up PPh 21"* |
| **BPJS Ketenagakerjaan** | JHT, JKK, JKM, JP, klaim | *"Perhitungan BPJS yang Sering Salah"* |
| **BPJS Kesehatan** | Iuran, kelas, tata cara pendaftaran | *"Update Iuran BPJS Kesehatan 2026"* |
| **Payroll Technology** | Software, otomatisasi, perbandingan | *"Panduan Memilih Software Payroll untuk UKM"* |
| **Regulasi & Compliance** | Aturan baru, UU Cipta Kerja, sanksi | *"Dampak UU Cipta Kerja ke Payroll"* |
| **Tips HR & Payroll** | Best practices, SOP, studi kasus | *"Cara Membuat Slip Gaji yang Benar"* |

---

## 4. Template Artikel

```
┌─ JUDUL (title)
│   • Max 60 karakter
│   • Menarik + menyebut manfaat
│   • Contoh: "Cara Menghitung PPh 21 yang Benar untuk Karyawan Tetap"
│
├─ SLUG (slug — otomatis dari judul)
│   • Contoh: cara-menghitung-pph-21
│
├─ RINGKASAN (excerpt)
│   • Max 160 karakter
│   • Hook + value proposition dalam 1-2 kalimat
│
├─ GAMBAR COVER (coverImage)
│   • Ukuran: 1200×630px (rasio 1.91:1)
│   • Format: WebP atau JPEG
│   • Aktifkan hotspot untuk crop otomatis
│
├─ PENULIS (author → ref Consultant)
│   • Pilih dari Consultant yang sudah dibuat
│
├─ TANGGAL PUBLIKASI (publishedAt)
│   • Default: hari ini
│   • Bisa dijadwalkan di masa depan
│
├─ TOPIK (topic → ref Topic)
│   • Pilih dari Topic yang sudah dibuat
│
├─ KONTEN (body)
│   • Gunakan heading (H2, H3) untuk sub-bagian
│   • Sisipkan bullet/numbered list untuk langkah
│   • Masukkan CTA Block 1-2x per artikel
│   • Minimum 300 kata, ideal 800-1500 kata
│   • Gaya bahasa: edukatif, formal ringan, langsung ke inti
│
└─ SEO (object opsional)
    ├─ Meta Title — fallback ke judul
    ├─ Meta Description — fallback ke excerpt
    └─ OG Image — fallback ke coverImage
```

### Format CTA Block

Di bagian body, sisipkan CTA Block seperti ini:

| Field | Isi |
|-------|-----|
| **Text** | "Butuh bantuan? Konsultasi gratis dengan praktisi Payroll Klinik" |
| **Link** | /#daftar-periksa |

---

## 5. Aturan Penulisan

### Gaya Bahasa
- **Target pembaca**: HR, finance manager, owner UKM (bukan payroll expert)
- **Nada**: edukatif, percaya diri, solutif — bukan jualan
- **Struktur**: problem → penjelasan → solusi → CTA
- **Panjang paragraf**: maksimal 4-5 baris
- **Gunakan contoh nyata / studi kasus** di setiap artikel

### SEO
- Slug: huruf kecil, pakai tanda hubung, max 96 karakter
- Meta description: mengandung kata kunci utama di awal
- Internal link: arahkan ke halaman konsultasi (`/#daftar-periksa`)
- Heading: gunakan H2 untuk sub-bagian utama, H3 untuk sub-bagian

### Gambar
- Cover image wajib
- Alt text: otomatis dari judul (dapat diisi manual jika perlu)
- Ukuran file: maksimal 500KB untuk performa

---

## 6. Checklist Publikasi

- [ ] Topic sudah dibuat dan dipilih
- [ ] Consultant sudah dibuat dan dipilih
- [ ] Cover image terupload (format WebP/JPEG, 1200×630)
- [ ] Excerpt ≤ 160 karakter
- [ ] Body ≥ 800 kata
- [ ] Minimal 3 subheading (H2) di body
- [ ] CTA Block terpasang (minimal 1)
- [ ] Slug unik dan benar
- [ ] Preview tampil normal
- [ ] Meta description terisi (opsional, untuk kontrol SEO)

---

## 7. Cara Melihat Hasil

```bash
# Terminal 1: Sanity Studio
npm run sanity        # → http://localhost:3333

# Terminal 2: Frontend
npm run dev           # → http://localhost:3000/artikel
```

Frontend otomatis menampilkan artikel dari Sanity. Jika Sanity tidak bisa dijangkau, fallback artikel akan ditampilkan.
