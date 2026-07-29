# Template Prompt untuk Membuat Artikel Payroll Klinik

Gunakan template ini untuk meminta AI (ChatGPT, Claude, Gemini) membuat artikel yang siap diinput ke Sanity CMS.

---

## Cara Pakai

1. Copy template prompt di bawah
2. Ganti bagian dalam `[kurung siku]` dengan nilai yang sesuai
3. Paste ke AI dan jalankan
4. Review output, lalu buka Studio (http://localhost:3333) → Article → Create New
5. Isi field sesuai hasil AI

---

## Template Prompt Dasar

```
Anda adalah penulis konten SEO spesialis payroll dan HR untuk pasar Indonesia.
Target pembaca: HR manager, finance manager, dan owner UKM (usaha kecil menengah).

Buatkan sebuah artikel edukatif untuk website Payroll Klinik dengan spesifikasi berikut:

## Informasi Artikel
- Judul: [judul artikel]
- Topik: [nama topik]
- Penulis: [nama penulis / "Tim Payroll Klinik"]
- Target kata: [800-1000 / 1000-1500 / 1500-2000] kata

## Struktur Output
Berikan output dalam format berikut:

=== META ===
Title: [judul, max 60 karakter]
Slug: [slug otomatis]
Excerpt: [1-2 kalimat hook, max 160 karakter]
MetaTitle: [opsional, fallback ke judul]
MetaDescription: [opsional, fallback ke excerpt, max 160 karakter]

=== BODY ===
Gunakan format markdown dengan struktur:

## [Sub-heading 1]

[Paragraf pembuka — jelaskan problem yang dialami pembaca]

## [Sub-heading 2]

[Penjelasan konsep/langkah, gunakan bullet/numbered list jika perlu]

### [Sub-heading 3 jika perlu]

[Detail lebih lanjut]

## [Sub-heading terakhir — solusi / kesimpulan]

[Kesimpulan + ajakan bertindak]

=== CTA ===
Sisipkan ajakan konsultasi di tengah artikel dan di akhir artikel:
"Butuh bantuan? Diskusikan langsung dengan praktisi Payroll Klinik. [Link: /#daftar-periksa]"

## Aturan Penulisan
1. Gaya bahasa: edukatif, tidak menggurui, formal ringan (seperti konsultan ngobrol dengan klien)
2. Setiap klaim/angka harus akurat dan sesuai regulasi Indonesia yang berlaku
3. Hindari kata "Anda harus", ganti dengan "Sebaiknya" atau "Disarankan"
4. Gunakan contoh kasus nyata dalam perhitungan
5. Paragraf maksimal 4-5 baris
6. Minimal 3 sub-heading (H2)
7. Target pembaca bukan expert payroll — jelaskan istilah teknis
8. Akhiri dengan CTA ke konsultasi gratis
```

---

## Contoh Prompt Siap Pakai (copy-paste langsung)

### Contoh 1: PPh 21

```
Anda adalah penulis konten SEO spesialis payroll dan HR untuk pasar Indonesia.
Target pembaca: HR manager, finance manager, dan owner UKM.

Buatkan sebuah artikel edukatif untuk website Payroll Klinik dengan spesifikasi berikut:

## Informasi Artikel
- Judul: Panduan Lengkap PPh 21 2026: Cara Hitung, Potong, dan Lapor
- Topik: PPh 21
- Penulis: Tim Payroll Klinik
- Target kata: 1000-1500 kata

## Struktur Output
Berikan output dalam format berikut:

=== META ===
Title: [judul, max 60 karakter]
Slug: [slug otomatis]
Excerpt: [1-2 kalimat hook, max 160 karakter]
MetaDescription: [max 160 karakter]

=== BODY ===
Gunakan format markdown dengan struktur heading H2 dan H3.

=== CTA ===
Sisipkan 2 ajakan konsultasi: di tengah artikel dan di akhir.
"Butuh bantuan? Diskusikan langsung dengan praktisi Payroll Klinik."

## Aturan Penulisan
1. Gaya edukatif, formal ringan, seperti konsultan ngobrol dengan klien
2. Gunakan contoh perhitungan dengan angka spesifik
3. Minimal 3 sub-heading
4. Paragraf maksimal 5 baris
5. Akhiri dengan CTA konsultasi gratis
```

### Contoh 2: BPJS Ketenagakerjaan

```
Anda adalah penulis konten SEO spesialis payroll dan HR.
Target pembaca: HR manager dan owner UKM.

Buatkan artikel edukatif untuk Payroll Klinik:

## Informasi Artikel
- Judul: BPJS Ketenagakerjaan: Perhitungan JHT, JKK, JKM yang Sering Salah
- Topik: BPJS Ketenagakerjaan
- Penulis: Tim Payroll Klinik
- Target kata: 1000-1500 kata

## Output Format
=== META ===
Title, Slug, Excerpt, MetaDescription

=== BODY ===
Markdown dengan minimal 4 sub-heading.
Sertakan tabel perbandingan tarif risiko JKK.
Sertakan simulasi perhitungan dengan angka.

=== CTA ===
Sisipkan di tengah dan akhir.

## Aturan
1. Target HR/owner UKM — jelaskan istilah teknis
2. Contoh dengan angka riil (gunakan upah Rp 5.000.000 untuk simulasi)
3. Bahas kesalahan umum yang sering terjadi
4. Akhiri dengan CTA konsultasi
```

### Contoh 3: Payroll Technology

```
Anda adalah penulis konten SEO spesialis payroll dan HR.
Target pembaca: owner UKM yang masih pakai Excel/manual.

Buatkan artikel edukatif untuk Payroll Klinik:

## Informasi Artikel
- Judul: Panduan Memilih Software Payroll untuk UKM di Indonesia
- Topik: Payroll Technology
- Penulis: Tim Payroll Klinik
- Target kata: 1000-1500 kata

## Output Format
=== META ===
Title, Slug, Excerpt, MetaDescription

=== BODY ===
Markdown.
Struktur: problem (kenapa harus pindah dari Excel) → kriteria pemilihan → perbandingan kategori → rekomendasi → kesimpulan.
Gunakan tabel untuk perbandingan fitur/kategori.

=== CTA ===
Sisipkan di tengah dan akhir.

## Aturan
1. Fokus pada kebutuhan UKM Indonesia
2. Sebutkan fitur spesifik yang penting: PPh 21, BPJS, integrasi bank
3. Bahasa: praktis, langsung ke inti, tidak teknis berlebihan
4. Akhiri dengan CTA konsultasi gratis
```

---

## Pedoman Output untuk Setiap Artikel

Setiap artikel dari AI harus mencakup:

| Elemen | Wajib? | Keterangan |
|--------|--------|------------|
| Judul (≤60 char) | ✅ | Menarik, mengandung keyword, menyebut manfaat |
| Slug | ✅ | Otomatis dari judul, lowercase, pakai dash |
| Excerpt (≤160 char) | ✅ | Hook + value prop, mengandung keyword utama |
| Body ≥800 kata | ✅ | Edukatif, contoh nyata, 3+ sub-heading |
| CTA Block (2x) | ✅ | Tengah + akhir artikel |
| Meta Description | ⬜ | Opsional, fallback ke excerpt |
| Cover image | ⬜ | Upload manual di Studio (1200×630px) |

---

## Tips Review Sebelum Upload ke Studio

- [ ] Judul ≤ 60 karakter
- [ ] Excerpt ≤ 160 karakter
- [ ] Body ≥ 800 kata (cek word counter)
- [ ] Minimal 3 sub-heading
- [ ] CTA terpasang minimal 1x
- [ ] Angka/kalkulasi akurat (verifikasi manual untuk artikel teknis)
- [ ] Sesuai regulasi Indonesia terbaru (periksa tahun aturan)
