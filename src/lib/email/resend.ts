import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendLeadNotification(data: {
  nama: string;
  jabatan: string;
  perusahaan: string;
  email: string;
  whatsapp: string;
  topik: string[];
  tantangan: string;
  preferensi: string;
}) {
  return resend.emails.send({
    from: 'Payroll Klinik <noreply@payrollklinik.id>',
    to: process.env.NOTIFICATION_EMAIL!,
    subject: `Lead Baru - ${data.perusahaan} - ${data.topik.join(', ')}`,
    html: LEAD_NOTIFICATION_TEMPLATE(data),
  });
}

export async function sendErrorNotification(error: Error, formData: Record<string, any>) {
  return resend.emails.send({
    from: 'Payroll Klinik <noreply@payrollklinik.id>',
    to: process.env.NOTIFICATION_EMAIL!,
    subject: 'Form Submission Error - Manual Review Needed',
    html: ERROR_NOTIFICATION_TEMPLATE(error, formData),
  });
}

const LEAD_NOTIFICATION_TEMPLATE = (data: any) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lead Baru - ${data.perusahaan}</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #567354; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #567354; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Lead Baru - ${data.perusahaan}</h1>
      <p>Dikirim pada: ${new Date().toLocaleString('id-ID')}</p>
    </div>
    <div class="content">
      <h2>Informasi Perusahaan</h2>
      <div class="field"><span class="label">Nama:</span> ${data.nama}</div>
      <div class="field"><span class="label">Jabatan:</span> ${data.jabatan}</div>
      <div class="field"><span class="label">Perusahaan:</span> ${data.perusahaan}</div>
      <div class="field"><span class="label">Industri:</span> ${data.industri}</div>
      <div class="field"><span class="label">Jumlah Karyawan:</span> ${data.jumlahKaryawan}</div>
      <h2>Kontak</h2>
      <div class="field"><span class="label">Email:</span> ${data.email}</div>
      <div class="field"><span class="label">WhatsApp:</span> ${data.whatsapp}</div>
      <h2>Kebutuhan</h2>
      <div class="field"><span class="label">Topik Konsultasi:</span> ${data.topik.join(', ')}</div>
      <div class="field"><span class="label">Tantangan:</span> ${data.tantangan}</div>
      <div class="field"><span class="label">Preferensi Konsultasi:</span> ${data.preferensi}</div>
    </div>
  </div>
</body>
</html>`;

const ERROR_NOTIFICATION_TEMPLATE = (error: Error, data: any) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Form Error - Manual Review</title>
</head>
<body>
  <h1>Form Submission Error</h1>
  <p>Error: ${error.message}</p>
  <h2>Data yang gagal disimpan:</h2>
  <pre>${JSON.stringify(data, null, 2)}</pre>
  <p>Harap tambahkan data ini secara manual ke Google Sheets.</p>
</body>
</html>`;
