import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics, MetaPixel, LinkedInInsight } from '@/components/analytics/Analytics';
import { StructuredData } from '@/components/StructuredData';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://payrollklinik.id'),
  title: {
    default: 'Payroll Klinik - Konsultasi Payroll Gratis untuk Perusahaan',
    template: '%s | Payroll Klinik'
  },
  description: 'Konsultasi payroll gratis 50 menit dengan praktisi berpengalaman. Diagnosa PPh 21 TER, BPJS, compliance payroll untuk HR & Finance Manager. Online/On-site.',
  keywords: ['payroll', 'konsultasi', 'BPJS', 'PPh 21', 'HR', 'payroll Indonesia', 'gratis'],
  authors: [{ name: 'ABS Payroll' }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://payrollklinik.id',
    siteName: 'Payroll Klinik',
    title: 'Payroll Klinik - Konsultasi Payroll Gratis',
    description: 'Konsultasi payroll gratis dengan praktisi berpengalaman',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payroll Klinik - Konsultasi Payroll Gratis',
    description: 'Konsultasi payroll gratis dengan praktisi berpengalaman',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32 16x16', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/Favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: [
      { url: '/favicon.ico', sizes: '32x32 16x16', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/Favicon.svg', type: 'image/svg+xml' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#567354',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <GoogleAnalytics />
        <MetaPixel />
        <LinkedInInsight />
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
