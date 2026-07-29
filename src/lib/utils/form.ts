export interface FormData {
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
  privacyConsent: boolean;
}

export type FormErrors = Partial<Record<keyof FormData, string>>;

export const initialFormData: FormData = {
  nama: '',
  jabatan: '',
  perusahaan: '',
  industri: '',
  jumlahKaryawan: '',
  email: '',
  whatsapp: '',
  topik: [],
  tantangan: '',
  preferensi: '',
  privacyConsent: false,
};

export function validateStep1(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (data.nama.trim().length < 2) errors.nama = 'Nama minimal 2 karakter';
  if (data.jabatan.trim().length < 2) errors.jabatan = 'Jabatan minimal 2 karakter';
  if (data.perusahaan.trim().length < 2) errors.perusahaan = 'Nama perusahaan minimal 2 karakter';
  if (!data.industri) errors.industri = 'Pilih industri';
  if (!data.jumlahKaryawan) errors.jumlahKaryawan = 'Pilih jumlah karyawan';
  return errors;
}

export function validateStep2(data: FormData): FormErrors {
  const errors: FormErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) errors.email = 'Format email tidak valid';
  const phoneRegex = /^(\+62|62|0)[0-9]{8,13}$/;
  if (!phoneRegex.test(data.whatsapp.replace(/[\s-]/g, ''))) {
    errors.whatsapp = 'Format WhatsApp tidak valid (contoh: 08123456789)';
  }
  return errors;
}

export function validateStep3(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.preferensi) errors.preferensi = 'Pilih preferensi konsultasi';
  if (!data.privacyConsent) errors.privacyConsent = 'Anda harus menyetujui kebijakan privasi';
  return errors;
}
