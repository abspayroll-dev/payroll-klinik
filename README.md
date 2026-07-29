# Payroll Klinik

Website lead generation funnel untuk layanan konsultasi payroll gratis dari ABS Payroll.

Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS + Sanity CMS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **CMS:** Sanity.io (headless)
- **Form Data:** Google Sheets API
- **Email:** Resend
- **Hosting:** Vercel

## Getting Started

### 1. Prerequisites

- Node.js 18+
- npm

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Setiap variable harus diisi dengan nilai yang sesuai.

### 4. Setup Backend Services

#### Sanity CMS

1. Buat project di [sanity.io](https://sanity.io) (free tier cukup)
2. Copy Project ID ke `NEXT_PUBLIC_SANITY_PROJECT_ID` di `.env.local`
3. Generate API Token (Read+Write) dan set ke `SANITY_API_TOKEN`
4. Dataset: `production` (default)

#### Google Sheets

1. Buat project di [Google Cloud Console](https://console.cloud.google.com)
2. Enable Google Sheets API
3. Create Service Account, download JSON credentials
4. Copy `client_email` ke `GOOGLE_SHEETS_CLIENT_EMAIL`
5. Copy `private_key` ke `GOOGLE_SHEETS_PRIVATE_KEY` (ganti `\n` dengan `\\n`)
6. Buat spreadsheet di Google Sheets, copy ID dari URL ke `GOOGLE_SHEETS_SPREADSHEET_ID`
7. Share spreadsheet ke service account email (Editor)

#### Resend

1. Daftar di [resend.com](https://resend.com)
2. Buat API key dan set ke `RESEND_API_KEY`
3. Set `NOTIFICATION_EMAIL` ke email yang akan menerima notifikasi lead

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 6. Access Sanity Studio

Open [http://localhost:3000/studio](http://localhost:3000/studio) to access the CMS admin panel.

## Project Structure

```
payroll-klinik/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (routes)/           # Public routes
│   │   │   ├── artikel/        # Article index & detail
│   │   │   ├── kebijakan-privasi/
│   │   │   └── terima-kasih/
│   │   ├── (admin)/            # Admin routes
│   │   │   └── studio/         # Sanity Studio
│   │   ├── api/
│   │   │   └── submit-form/    # Form submission API
│   │   ├── page.tsx            # Homepage
│   │   └── layout.tsx          # Root layout
│   ├── components/
│   │   ├── sections/           # Page sections
│   │   ├── form/               # Multi-step form
│   │   ├── shared/             # Shared components
│   │   └── ui/                 # shadcn/ui components
│   ├── lib/
│   │   ├── sanity/             # Sanity client & queries
│   │   ├── google-sheets/      # Google Sheets API
│   │   ├── email/              # Resend email
│   │   ├── analytics/          # GA4 helpers
│   │   └── utils/              # Utilities
│   └── sanity/                 # Sanity schemas & config
│       └── schemas/
├── .env.local                  # Environment variables
├── .env.example                # Template
├── next.config.ts
└── package.json
```

## Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

Deploy to [Vercel](https://vercel.com) (recommended):

```bash
npx vercel --prod
```

Set all environment variables in Vercel dashboard.
