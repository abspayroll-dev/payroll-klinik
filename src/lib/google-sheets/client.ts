import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

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

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Leads!A:P',
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
