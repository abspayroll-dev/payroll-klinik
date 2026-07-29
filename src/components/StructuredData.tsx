const FAQ_SCHEMA = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Apa benar gratis? Tidak ada biaya tersembunyi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya, benar gratis. Sesi konsultasi 30-60 menit ini 100% tidak berbayar. Tidak ada biaya registrasi, hidden fees, atau jebakan apapun.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah ini akan jadi sales call/sales pitch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tidak. Sesi ini murni konsultasi edukatif untuk membantu Anda memahami masalah payroll Anda. Tidak ada sales pitch di sesi ini.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah saya wajib pakai layanan ABS Payroll setelah konsultasi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tidak sama sekali. Sesi ini bersifat non-binding. Anda bebas menentukan langkah selanjutnya, termasuk tidak menggunakan layanan ABS Payroll sama sekali.',
      },
    },
    {
      '@type': 'Question',
      name: 'Berapa lama sesi konsultasinya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sesi standar berdurasi 30-60 menit, tergantung kompleksitas masalah yang didiskusikan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apa yang terjadi setelah saya isi form?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tim kami akan menghubungi Anda dalam 2 hari kerja untuk menjadwalkan sesi konsultasi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Data saya aman? Dipakai untuk apa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Data Anda hanya digunakan untuk keperluan konsultasi. Kami menyertakan Non-Disclosure Statement untuk menjamin kerahasiaan data payroll dan gaji perusahaan Anda.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bisa offline atau hanya online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bisa keduanya. Anda bisa pilih konsultasi online (Zoom/Google Meet) atau offline di AKMANI HOTEL, Jakarta.',
      },
    },
  ],
};

export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Payroll Klinik',
        url: process.env.NEXT_PUBLIC_SITE_URL || 'https://payrollklinik.id',
        logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://payrollklinik.id'}/payroll-klinik-logo.svg`,
        description: 'Layanan konsultasi payroll gratis untuk perusahaan Indonesia',
        founder: {
          '@type': 'Organization',
          name: 'ABS Payroll',
        },
      },
      {
        '@type': 'LocalBusiness',
        name: 'Payroll Klinik',
        image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://payrollklinik.id'}/payroll-klinik-logo.svg`,
        '@id': process.env.NEXT_PUBLIC_SITE_URL || 'https://payrollklinik.id',
        url: process.env.NEXT_PUBLIC_SITE_URL || 'https://payrollklinik.id',
        telephone: `+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890'}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jl. K.H. Wahid Hasyim No. 91, AKMANI HOTEL Lt. Mezzanine',
          addressLocality: 'Jakarta Pusat',
          postalCode: '10350',
          addressCountry: 'ID',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -6.192795,
          longitude: 106.828707,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
        priceRange: 'Free consultation',
      },
      FAQ_SCHEMA,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
