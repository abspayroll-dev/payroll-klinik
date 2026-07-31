import { NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/google-sheets/client';
import { sendLeadNotification, sendErrorNotification } from '@/lib/email/resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      nama,
      jabatan,
      perusahaan,
      industri,
      jumlahKaryawan,
      email,
      whatsapp,
      topik,
      tantangan,
      preferensi,
      utmSource,
      utmMedium,
      utmCampaign,
    } = body;

    const preferensiText = preferensi === 'offline' ? 'On-site' : preferensi.charAt(0).toUpperCase() + preferensi.slice(1);

    const formData = {
      nama,
      jabatan,
      perusahaan,
      industri,
      jumlahKaryawan,
      email,
      whatsapp,
      topik,
      tantangan,
      preferensi: preferensiText,
    };

    let sheetsSuccess = true;

    try {
      await appendToSheet({
        ...formData,
        utmSource,
        utmMedium,
        utmCampaign,
      });
    } catch (sheetsError) {
      sheetsSuccess = false;
      console.error('Google Sheets error:', sheetsError);
      try {
        await sendErrorNotification(
          sheetsError instanceof Error ? sheetsError : new Error('Google Sheets error'),
          formData
        );
      } catch (emailError) {
        console.error('Error notification email failed:', emailError);
      }
    }

    if (sheetsSuccess) {
      try {
        await sendLeadNotification(formData);
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: sheetsSuccess
        ? 'Form submitted successfully'
        : 'Form submitted with fallback (email notification sent)',
    });
  } catch (error) {
    console.error('Form submission error:', error);

    try {
      await sendErrorNotification(
        error instanceof Error ? error : new Error('Unknown error'),
        { rawBody: 'Failed to parse request body' }
      );
    } catch (emailError) {
      console.error('Fallback email failed:', emailError);
    }

    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}
