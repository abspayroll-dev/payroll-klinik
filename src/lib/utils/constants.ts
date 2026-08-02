export const TOPICS = [
  {
    id: 'payroll-process',
    icon: 'Calculator',
    title: 'Payroll Process',
    description: 'Perhitungan gaji, lembur, tunjangan, dan potongan yang akurat.',
  },
  {
    id: 'payroll-compliance',
    icon: 'Shield',
    title: 'Payroll Compliance',
    description: 'Kepatuhan regulasi ketenagakerjaan dan pelaporan.',
  },
  {
    id: 'bpjs-kesehatan',
    icon: 'Heart',
    title: 'BPJS Kesehatan',
    description: 'Pengelolaan iuran, pendaftaran, dan klaim BPJS Kesehatan.',
  },
  {
    id: 'bpjs-ketenagakerjaan',
    icon: 'Briefcase',
    title: 'BPJS Ketenagakerjaan',
    description: 'JHT, JKK, JKM, dan JP - perhitungan dan pelaporan.',
  },
  {
    id: 'pph-21',
    icon: 'Receipt',
    title: 'PPh 21',
    description: 'Perhitungan, potongan, dan pelaporan pajak penghasilan karyawan.',
  },
  {
    id: 'hr-administration',
    icon: 'Users',
    title: 'HR Administration',
    description: 'Pengelolaan data karyawan, kontrak, dan administrasi HR.',
  },
  {
    id: 'payroll-technology',
    icon: 'Monitor',
    title: 'Payroll Technology',
    description: 'Automasi payroll, integrasi sistem, dan pemilihan software.',
  },
  {
    id: 'payroll-outsourcing',
    icon: 'Building',
    title: 'Payroll Outsourcing',
    description: 'Evaluasi kebutuhan dan pemilihan vendor payroll outsourcing.',
  },
] as const;

export const PROCESS_PHASES = [
  {
    id: 'discovery',
    title: 'Discovery',
    duration: '15 menit',
    icon: 'Search',
    description: 'Memahami kondisi payroll perusahaan Anda saat ini dan tantangan yang dihadapi.',
  },
  {
    id: 'analisis',
    title: 'Analisis',
    duration: '15 menit',
    icon: 'PieChart',
    description: 'Mengidentifikasi akar masalah dan memberikan insight berdasarkan pengalaman.',
  },
  {
    id: 'resep-solusi',
    title: 'Resep Solusi',
    duration: '15 menit',
    icon: 'ClipboardList',
    description: 'Rekomendasi solusi praktis yang bisa langsung diterapkan di perusahaan Anda.',
  },
  {
    id: 'next-step',
    title: 'Next Step',
    duration: '5 menit',
    icon: 'ArrowRight',
    description: 'Tindak lanjut bila diperlukan, termasuk opsi konsultasi lanjutan atau implementasi.',
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Apa benar gratis? Tidak ada biaya tersembunyi?',
    answer: 'Ya, benar gratis. Sesi konsultasi 30-60 menit ini 100% tidak berbayar. Tidak ada biaya registrasi, hidden fees, atau jebakan apapun.',
  },
  {
    question: 'Apakah ini akan jadi sales call/sales pitch?',
    answer: 'Tidak. Sesi ini murni konsultasi edukatif untuk membantu Anda memahami masalah payroll Anda. Tidak ada sales pitch di sesi ini.',
  },
  {
    question: 'Apakah saya wajib pakai layanan ABS Payroll setelah konsultasi?',
    answer: 'Tidak sama sekali. Sesi ini bersifat non-binding. Anda bebas menentukan langkah selanjutnya, termasuk tidak menggunakan layanan ABS Payroll sama sekali.',
  },
  {
    question: 'Berapa lama sesi konsultasinya?',
    answer: 'Sesi standar berdurasi 30-60 menit, tergantung kompleksitas masalah yang didiskusikan.',
  },
  {
    question: 'Apa yang terjadi setelah saya isi form?',
    answer: 'Tim kami akan menghubungi Anda dalam 2 hari kerja untuk menjadwalkan sesi konsultasi.',
  },
  {
    question: 'Data saya aman? Dipakai untuk apa?',
    answer: 'Data Anda hanya digunakan untuk keperluan konsultasi. Selengkapnya bisa dibaca di Kebijakan Privasi.',
  },
  {
    question: 'Bisa on-site atau hanya online?',
    answer: 'Bisa keduanya. Anda bisa pilih konsultasi online (Zoom/Google Meet) atau on-site di AKMANI HOTEL, Jakarta.',
  },
] as const;

export const NAV_ITEMS = [
  { label: 'Cara Kerja', href: '#cara-kerja', type: 'scroll' as const },
  { label: 'Topik', href: '#topik', type: 'scroll' as const },
  { label: 'Artikel', href: '/artikel', type: 'link' as const },
  { label: 'FAQ', href: '#faq', type: 'scroll' as const },
] as const;

export const INDUSTRI_OPTIONS = [
  'Manufaktur',
  'Retail',
  'Teknologi',
  'Keuangan & Perbankan',
  'Kesehatan',
  'Pendidikan',
  'Transportasi & Logistik',
  'Konstruksi',
  'Properti',
  'Perhotelan & Pariwisata',
  'Media & Komunikasi',
  'E-commerce',
  'Jasa Profesional',
  'Lainnya',
] as const;

export const JUMLAH_KARYAWAN_OPTIONS = [
  { value: '<10', label: '< 10 karyawan' },
  { value: '10-50', label: '10 - 50 karyawan' },
  { value: '51-200', label: '51 - 200 karyawan' },
  { value: '201-500', label: '201 - 500 karyawan' },
  { value: '>500', label: '> 500 karyawan' },
] as const;

export const PREFERENSI_OPTIONS = [
  { value: 'online', label: 'Online' },
  { value: 'offline', label: 'On-site' },
  { value: 'fleksibel', label: 'Fleksibel' },
] as const;

export const SITE_CONFIG = {
  name: 'Payroll Klinik',
  description: 'Konsultasi payroll gratis dengan praktisi berpengalaman. Diskusi BPJS, PPh 21, compliance, dan automasi payroll. Edukatif, non-binding, terjadwal.',
  url: 'https://payrollklinik.id',
  whatsapp: '+6281234567890',
  email: 'team@payrollklinik.id',
  address: 'AKMANI HOTEL Lt. Mezzanine, Jl. K.H. Wahid Hasyim No. 91, Menteng, Jakarta Pusat 10350',
  social: {
    linkedin: '#',
    facebook: '#',
    instagram: 'https://www.instagram.com/payrollklinik/',
  },
} as const;
