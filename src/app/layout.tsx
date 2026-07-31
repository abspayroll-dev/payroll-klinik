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
  description: 'Konsultasi payroll gratis 50 menit dengan praktisi berpengalaman. Diagnosa PPh 21 TER, BPJS, compliance payroll untuk HR & Finance Manager. Online/Offline.',
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
      { url: '/Favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/Favicon.svg', type: 'image/svg+xml' },
    ],
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
