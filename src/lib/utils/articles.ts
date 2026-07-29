export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  topic: string;
  readTime: number;
  publishedAt: string;
  content: string;
  body?: any[];
  coverImage?: string | null;
  author?: { name: string; title?: string; photo?: string | null } | null;
}

export interface SanityArticle {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string | null;
  author?: { name: string; title?: string; photo?: string | null } | null;
  publishedAt: string;
  topic: string;
  readTime: number;
  body?: any[];
  content?: string;
  seo?: { metaTitle?: string; metaDescription?: string; ogImage?: any };
}

const FALLBACK_ARTICLES: Article[] = [
  {
    slug: 'cara-menghitung-pph-21',
    title: 'Bagaimana Menghitung PPh 21 yang Benar untuk Karyawan Tetap?',
    excerpt: 'Panduan lengkap perhitungan PPh 21 untuk karyawan tetap, termasuk PTKP, tarif progresif, dan contoh kasus nyata.',
    topic: 'PPh 21',
    readTime: 8,
    publishedAt: '2026-07-10',
    content: `
Perhitungan PPh 21 untuk karyawan tetap sering jadi sumber masalah di banyak perusahaan. Mulai dari kurangnya potongan, keterlambatan setor, sampai tagihan pajak yang datang di akhir tahun. Artikel ini membahas cara menghitung PPh 21 yang benar supaya payroll Anda tidak bermasalah.

## **Dasar Perhitungan PPh 21**

PPh 21 adalah pajak atas penghasilan yang diterima Wajib Pajak orang pribadi dalam negeri dari pekerjaan, jasa, atau kegiatan. Untuk karyawan tetap, perusahaan biasanya memotong PPh 21 setiap bulan dari gaji karyawan, lalu menyetorkannya ke kas negara.

Ada dua metode yang umum dipakai, yaitu metode gross (gaji kotor dipotong pajak) dan metode gross up (pajak ditanggung perusahaan melalui tunjangan pajak). Pilih metode yang sesuai dengan kebijakan perusahaan Anda.

### **Komponen Penghasilan Bruto**

Penghasilan bruto adalah total seluruh penerimaan karyawan yang menjadi dasar perhitungan pajak. Komponennya antara lain:

- Gaji pokok
- Tunjangan tetap seperti transportasi dan makan
- Bonus dan insentif berkala
- Tunjangan tidak tetap yang diterima rutin
- Natura dan kenikmatan yang dikenakan pajak

Pastikan semua komponen ini tercantum dalam slip gaji dan dihitung dalam bruto, karena kelalaian di satu komponen saja bisa membuat perhitungan jadi meleset.

### **Pengurangan yang Diperbolehkan**

Sebelum sampai ke angka pajak, penghasilan bruto dikurangi dulu dengan pos-pos berikut:

- Biaya jabatan sebesar 5% dari penghasilan bruto, maksimal Rp 500.000 per bulan
- Iuran pensiun atau iuran THT/JHT yang dibayar sendiri oleh karyawan
- Iuran JKK dan JKM yang menjadi tanggungan karyawan

Pengurangan ini berlaku untuk semua karyawan tetap, jadi pastikan tim HR Anda memahami aturan mainnya.

### **PTKP (Penghasilan Tidak Kena Pajak) 2026**

PTKP menentukan berapa penghasilan yang tidak dikenai pajak. Besaran PTKP yang berlaku saat ini:

- TK/0: Rp 54.000.000 per tahun
- K/0: Rp 58.500.000 per tahun
- K/1: Rp 63.000.000 per tahun
- K/2: Rp 67.500.000 per tahun
- K/3: Rp 72.000.000 per tahun

Status PTKP harus selalu di-update sesuai kondisi riil karyawan. Kalau ada perubahan pernikahan atau jumlah tanggungan, segera sesuaikan di sistem payroll.

### **Tarif Progresif PPh 21**

Setelah dapat Penghasilan Kena Pajak (PKP), tarif yang berlaku adalah:

- Sampai dengan Rp 60.000.000: 5%
- Rp 60.000.000 sampai Rp 250.000.000: 15%
- Rp 250.000.000 sampai Rp 500.000.000: 25%
- Di atas Rp 500.000.000: 30%

Ingat, tarif ini progresif, jadi setiap lapisan dihitung sendiri-sendiri, bukan flat rate.

## **Contoh Perhitungan**

Berikut contoh kasus sederhana untuk karyawan tetap dengan data sebagai berikut:

**Data Karyawan:**

- Gaji pokok: Rp 10.000.000 per bulan
- Tunjangan tetap: Rp 2.000.000 per bulan
- Status PTKP: K/1
- Iuran pensiun: Rp 200.000 per bulan

**Langkah Perhitungan:**

1. Hitung penghasilan bruto setahun: (Rp 10.000.000 + Rp 2.000.000) dikali 12 = Rp 144.000.000
2. Hitung biaya jabatan: 5% dikali Rp 144.000.000 = Rp 7.200.000, tapi kena plafon maksimal Rp 6.000.000
3. Hitung iuran pensiun setahun: Rp 200.000 dikali 12 = Rp 2.400.000
4. Hitung penghasilan neto: Rp 144.000.000 dikurangi Rp 6.000.000 dikurangi Rp 2.400.000 = Rp 135.600.000
5. Kurangkan dengan PTKP K/1: Rp 135.600.000 dikurangi Rp 63.000.000 = Rp 72.600.000 (PKP)
6. Hitung PPh 21 terutang:
    - Rp 60.000.000 dikali 5% = Rp 3.000.000
    - Rp 12.600.000 dikali 15% = Rp 1.890.000
    - Total PPh 21 setahun: Rp 4.890.000 atau sekitar Rp 407.500 per bulan

## **Kesalahan yang Sering Terjadi**

Dari pengalaman menangani banyak kasus, ada beberapa kesalahan yang paling sering ditemukan di perusahaan:

- **Tidak update PTKP**. Status pernikahan atau jumlah anak berubah tapi PTKP di sistem payroll tidak disesuaikan
- **Salah hitung biaya jabatan**. Banyak yang lupa ada plafon maksimal Rp 500.000 per bulan
- **Lupa masukkan tunjangan tidak tetap**. Bonus, insentif, atau THR sering tidak dihitung dalam bruto bulanan
- **Salah pilih metode gross atau gross up**. Tanpa kebijakan yang jelas, perhitungan bisa tidak konsisten antar departemen

Kesalahan-kesalahan ini sering baru ketahuan saat ada pemeriksaan pajak atau saat karyawan komplain karena slip gaji tidak sesuai.

## **Penutup**

Perhitungan PPh 21 memang terlihat mudah di atas kertas, tapi praktiknya cukup rentan salah kalau tidak ada sistem yang rapi. Membangun checklist internal dan melakukan review berkala biasanya sudah cukup menekan risiko kesalahan.

Kalau perusahaan Anda belum punya SOP perhitungan PPh 21 yang jelas, atau ingin memastikan perhitungan yang lama sudah benar, sesi konsultasi gratis dari tim kami bisa jadi langkah awal yang tepat.

**Mau diskusi langsung soal PPh 21 di perusahaan Anda?**
    `.trim(),
  },
  {
    slug: 'bpjs-ketenagakerjaan-perhitungan',
    title: 'BPJS Ketenagakerjaan: Perhitungan JHT, JKK, JKM yang Sering Salah',
    excerpt: 'Kesalahan umum dalam perhitungan iuran BPJS Ketenagakerjaan dan cara menghindarinya.',
    topic: 'BPJS Ketenagakerjaan',
    readTime: 7,
    publishedAt: '2026-07-08',
    content: `
Iuran BPJS Ketenagakerjaan sering dianggap urusan sepele oleh sebagian perusahaan. Padahal, kesalahan hitung bisa berujung pada denda keterlambatan, sanksi administratif, bahkan masalah saat klaim karyawan. Artikel ini mengupas perhitungan JHT, JKK, dan JKM, plus kesalahan yang paling sering terjadi di lapangan.

## **Apa itu BPJS Ketenagakerjaan?**

BPJS Ketenagakerjaan adalah program jaminan sosial yang wajib diikuti oleh semua perusahaan di Indonesia. Program ini terdiri dari beberapa komponen: Jaminan Hari Tua (JHT), Jaminan Kecelakaan Kerja (JKK), Jaminan Kematian (JKM), dan Jaminan Pensiun (JP).

Setiap komponen punya aturan perhitungan yang berbeda. Tapi dari pengalaman, tiga yang paling sering salah hitung adalah JHT, JKK, dan JKM.

### **JHT (Jaminan Hari Tua)**

JHT dihitung dari upah bulanan karyawan. Besarannya:

- 3,7% ditanggung perusahaan
- 2% ditanggung karyawan
- Total 5,7% dari upah bulanan

Upah yang dimaksud adalah gaji pokok ditambah tunjangan tetap, tanpa batas maksimum. Artinya, makin besar gaji, makin besar juga iuran JHT-nya.

Yang sering salah: perusahaan lupa memasukkan tunjangan tetap ke dalam dasar perhitungan. Misalnya si karyawan punya tunjangan transportasi Rp 500.000 per bulan, itu harus dihitung sebagai bagian dari upah.

### **JKK (Jaminan Kecelakaan Kerja)**

JKK sepenuhnya ditanggung perusahaan. Tarifnya tergantung tingkat risiko pekerjaan:

- Risiko sangat rendah: 0,24% dari upah
- Risiko rendah: 0,54% dari upah
- Risiko sedang: 0,89% dari upah
- Risiko tinggi: 1,27% dari upah
- Risiko sangat tinggi: 1,74% dari upah

Kesalahan yang sering terjadi: perusahaan memilih kategori risiko yang salah, misalnya kantor administrasi dikategorikan sebagai risiko tinggi karena ada satu dua karyawan yang kerja di lapangan. Akibatnya, iuran jadi membengkak tidak perlu.

### **JKM (Jaminan Kematian)**

JKM juga ditanggung penuh oleh perusahaan dengan tarif 0,3% dari upah. Tidak ada variasi tarif, jadi perhitungannya cukup lurus. Tapi yang sering terlewat adalah ketika ada perubahan status karyawan (masuk, keluar, atau mutasi) yang tidak segera dilaporkan.

## **Cara Hitung Total Iuran Bulanan**

Supaya lebih jelas, berikut simulasi untuk karyawan dengan upah Rp 8.000.000 per bulan di perusahaan kategori risiko rendah:

- JHT: 3,7% dari Rp 8.000.000 = Rp 296.000 (perusahaan) + 2% = Rp 160.000 (karyawan)
- JKK: 0,54% dari Rp 8.000.000 = Rp 43.200 (perusahaan)
- JKM: 0,3% dari Rp 8.000.000 = Rp 24.000 (perusahaan)

Total yang harus dibayar perusahaan per bulan per karyawan: Rp 296.000 + Rp 43.200 + Rp 24.000 = Rp 363.200. Ditambah potongan karyawan Rp 160.000.

Kalau dikalikan jumlah karyawan, angka yang harus disetor setiap bulan cukup signifikan. Maka dari itu, perhitungan yang akurat sangat penting supaya tidak ada selisih yang baru ketahuan di akhir tahun.

## **Kesalahan yang Paling Sering Terjadi**

Dari pemeriksaan yang pernah kami lakukan di beberapa perusahaan, ini pola kesalahan yang selalu muncul:

- **Salah menentukan kategori risiko JKK**. Akibatnya iuran terlalu besar atau terlalu kecil
- **Tidak update upah bulanan**. Kenaikan gaji tidak diikuti penyesuaian iuran
- **Telat setor iuran**. Denda keterlambatan lumayan besar dan akumulatif
- **Lupa lapor perubahan data karyawan**. Karyawan resign atau masuk baru tidak langsung dilaporkan

## **Penutup**

BPJS Ketenagakerjaan mungkin terlihat sederhana, tapi detailnya cukup banyak. Satu kesalahan kecil bisa berdampak panjang, terutama saat karyawan ingin klaim JHT atau saat ada insiden kecelakaan kerja.

Kalau perusahaan Anda masih pakai cara manual atau belum ada sistem yang memonitor iuran BPJS secara otomatis, mungkin sudah saatnya untuk evaluasi.

**Butuh bantuan ngecek ulang perhitungan BPJS Ketenagakerjaan?**
    `.trim(),
  },
  {
    slug: 'memilih-software-payroll-ukm',
    title: 'Panduan Memilih Software Payroll untuk UKM di Indonesia',
    excerpt: 'Kriteria penting dalam memilih software payroll yang sesuai dengan kebutuhan UKM Anda.',
    topic: 'Payroll Technology',
    readTime: 10,
    publishedAt: '2026-07-05',
    content: `
Banyak pemilik UKM berpikir software payroll hanya perlu untuk perusahaan besar. Padahal, semakin cepat bisnis beralih dari sistem manual ke software, semakin kecil risiko kesalahan yang bisa muncul. Tapi masalahnya, software payroll di Indonesia jumlahnya puluhan, dari yang gratis sampai yang berlangganan jutaan per bulan. Mana yang cocok untuk UKM?

## **Apa yang Harus Diperhatikan?**

Sebelum memutuskan, penting untuk tahu dulu kebutuhan spesifik perusahaan. Beberapa hal yang perlu dipertimbangkan:

### **Skala dan Jumlah Karyawan**

Software payroll biasanya punya tiering harga berdasarkan jumlah karyawan. Kalau karyawan masih di bawah 50 orang, Anda tidak perlu software mahal dengan fitur kompleks. Produk entry-level biasanya sudah mencukupi.

Sebaliknya, kalau sudah di atas 100 orang, Anda perlu software yang punya fitur batch processing dan integrasi perbankan. Cek dulu apakah software yang dilirik mendukung penambahan data massal atau hanya input satu-satu.

### **Fitur yang Benar-benar Dipakai**

Banyak UKM tergoda fitur yang terlihat canggih tapi tidak pernah dipakai. Fokus pada fitur dasar yang benar-benar diperlukan:

- Perhitungan gaji pokok, tunjangan, dan potongan
- Perhitungan PPh 21 otomatis
- Perhitungan BPJS Kesehatan dan Ketenagakerjaan
- Slip gaji digital
- Laporan penggajian bulanan
- Integrasi dengan bank untuk transfer gaji

Fitur tambahan seperti request cuti, absensi online, atau performance management bisa ditambahkan nanti seiring pertumbuhan bisnis. Tidak perlu ambil semuanya dari awal.

### **Kepatuhan dengan Regulasi Indonesia**

Ini sering dilupakan. Software buatan luar negeri biasanya tidak mengakomodasi aturan perpajakan dan BPJS Indonesia. Akibatnya, Anda tetap harus hitung manual.

Pastikan software yang dipilih memiliki fitur:

- Perhitungan PPh 21 dengan tarif progresif terbaru
- Perhitungan BPJS Kesehatan dan Ketenagakerjaan sesuai kelas
- Format laporan yang sesuai dengan standar DJP
- Update regulasi otomatis saat ada perubahan aturan

Kalau software tidak update sendiri, Anda harus pantau perubahan aturan setiap tahun dan sesuaikan manual. Repot.

## **Perbandingan Jenis Software**

Secara garis besar, software payroll di Indonesia bisa dibagi tiga kategori:

**Software Entry-Level (Rp 0 - 200.000/bulan)**

Cocok untuk UKM dengan kurang dari 50 karyawan. Biasanya berbasis cloud, fitur terbatas pada hitung gaji dan PPh 21 dasar. Contoh: aplikasi payroll lokal untuk UKM.

**Software Menengah (Rp 300.000 - 1.000.000/bulan)**

Untuk perusahaan dengan 50 sampai 200 karyawan. Fitur lebih lengkap: integrasi bank, BPJS otomatis, laporan pajak. Beberapa juga sudah menyediakan modul HR dasar.

**Software Enterprise (Rp 1.500.000+/bulan)**

Untuk perusahaan besar dengan 200+ karyawan atau struktur organisasi kompleks. Fitur end-to-end dari rekrutmen sampai payroll. Biasanya butuh implementasi beberapa bulan.

UKM yang baru mau migrasi dari Excel cukup mulai dari entry-level. Tidak perlu langsung ambil yang enterprise.

## **Kesalahan yang Harus Dihindari**

Berdasarkan pengalaman membantu perusahaan memilih software payroll, ini beberapa jebakan yang sering terjadi:

- **Pilih software tanpa trial**. Tampilan menarik belum tentu cocok dengan alur kerja Anda
- **Terlalu fokus pada harga**. Yang murah sering tidak punya fitur BPJS atau PPh 21 yang akurat
- **Tidak cek support lokal**. Software dari luar negeri jarang punya dukungan untuk aturan Indonesia
- **Lupa hitung biaya migrasi data**. Pindah dari Excel ke software baru butuh waktu dan biaya untuk bersihkan data

## **Penutup**

Memilih software payroll tidak perlu rumit. Mulai dari daftar kebutuhan, coba trial beberapa produk, lalu evaluasi mana yang paling pas dengan anggaran dan alur kerja tim HR.

Yang penting, jangan sampai tetap bertahan di Excel hanya karena tidak mau repot migrasi. Risiko salah hitung gaji dan pajak akibat sistem manual biasanya jauh lebih besar daripada biaya langganan software payroll.

**Mau diskusi lebih lanjut soal software payroll yang cocok?**
    `.trim(),
  },
];

let sanityAvailable: boolean | null = null;

async function isSanityAvailable(): Promise<boolean> {
  if (sanityAvailable !== null) return sanityAvailable;
  try {
    const { client } = await import('@/lib/sanity/client');
    await client.fetch('count(*[_type == "article"])');
    sanityAvailable = true;
  } catch {
    sanityAvailable = false;
  }
  return sanityAvailable;
}

function convertSanityToArticle(sanity: SanityArticle): Article {
  return {
    slug: sanity.slug,
    title: sanity.title,
    excerpt: sanity.excerpt,
    topic: sanity.topic || '',
    readTime: sanity.readTime || Math.round((sanity.body ? JSON.stringify(sanity.body).length : 0) / 1500) || 5,
    publishedAt: sanity.publishedAt || new Date().toISOString(),
    content: sanity.content || '',
    body: sanity.body,
    coverImage: sanity.coverImage,
    author: sanity.author,
  };
}

export async function getArticles(): Promise<Article[]> {
  try {
    if (await isSanityAvailable()) {
      const { getArticles: fetchFromSanity } = await import('@/lib/sanity/queries');
      const sanityArticles = await fetchFromSanity();
      if (sanityArticles && sanityArticles.length > 0) {
        return sanityArticles.map(convertSanityToArticle);
      }
    }
  } catch {}
  return FALLBACK_ARTICLES;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    if (await isSanityAvailable()) {
      const { getArticleBySlug: fetchFromSanity } = await import('@/lib/sanity/queries');
      const article = await fetchFromSanity(slug);
      if (article) {
        return convertSanityToArticle(article);
      }
    }
  } catch {}
  return FALLBACK_ARTICLES.find((a) => a.slug === slug) || null;
}

export async function getRelatedArticles(currentSlug: string, topic: string, limit: number = 3): Promise<Article[]> {
  const all = await getArticles();
  const sameTopic = all.filter((a) => a.slug !== currentSlug && a.topic === topic);
  if (sameTopic.length >= limit) return sameTopic.slice(0, limit);
  const remaining = all.filter((a) => a.slug !== currentSlug && a.topic !== topic);
  return [...sameTopic, ...remaining].slice(0, limit);
}

export async function getArticleSlugs(): Promise<{ slug: string }[]> {
  try {
    if (await isSanityAvailable()) {
      const { getArticleSlugs: fetchFromSanity } = await import('@/lib/sanity/queries');
      const slugs = await fetchFromSanity();
      if (slugs && slugs.length > 0) {
        return slugs;
      }
    }
  } catch {}
  return FALLBACK_ARTICLES.map((a) => ({ slug: a.slug }));
}

export function renderContent(content: string): string {
  return content
    .replace(/^#{1,3} \*\*(.+?)\*\*$/gm, '<div class="article-subheading"><strong>$1</strong></div>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '• $1');
}
