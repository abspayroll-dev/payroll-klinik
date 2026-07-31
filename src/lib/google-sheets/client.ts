import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

const SHEET_NAME = 'Leads';

const HEADERS = [
  'Timestamp',
  'Nama',
  'Jabatan',
  'Perusahaan',
  'Industri',
  'Jumlah Karyawan',
  'Email',
  'WhatsApp',
  'Topik',
  'Tantangan',
  'Preferensi',
  'UTM Source',
  'UTM Medium',
  'UTM Campaign',
  'Status',
  'Catatan',
];

function getColumnLetter(index: number): string {
  let letter = '';
  let n = index;
  while (n >= 0) {
    letter = String.fromCharCode(65 + (n % 26)) + letter;
    n = Math.floor(n / 26) - 1;
  }
  return letter;
}

async function ensureHeaders(spreadsheetId: string): Promise<void> {
  const headerRange = `${SHEET_NAME}!A1:${getColumnLetter(HEADERS.length - 1)}1`;
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: headerRange,
  });
  const firstRow = existing.data.values?.[0] || [];
  const isEmpty = firstRow.every((v) => !v || String(v).trim() === '');

  if (isEmpty) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: headerRange,
      valueInputOption: 'RAW',
      requestBody: { values: [HEADERS] },
    });
  }
}

export async function appendToSheet(data: {
  nama: string;
  jabatan: string;
  perusahaan: string;
  industri: string;
  jumlahKaryawan: string;
  email: string;
  whatsapp: string;
  topik: string[];
  tantangan: string;
  preferensi: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is not set');
  }

  await ensureHeaders(spreadsheetId);

  const values = [
    [
      new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }),
      data.nama,
      data.jabatan,
      data.perusahaan,
      data.industri,
      data.jumlahKaryawan,
      data.email,
      data.whatsapp,
      (data.topik || []).join(', '),
      data.tantangan,
      data.preferensi,
      data.utmSource || '',
      data.utmMedium || '',
      data.utmCampaign || '',
      'New',
      '',
    ],
  ];

  const lastCol = getColumnLetter(HEADERS.length - 1);

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${SHEET_NAME}!A1:${lastCol}`,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values },
  });

  return response.data;
}

export async function verifySheetAccess(spreadsheetId: string): Promise<boolean> {
  try {
    await sheets.spreadsheets.get({ spreadsheetId });
    return true;
  } catch {
    return false;
  }
}