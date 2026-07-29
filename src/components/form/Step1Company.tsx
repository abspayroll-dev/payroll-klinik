'use client';

import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { INDUSTRI_OPTIONS, JUMLAH_KARYAWAN_OPTIONS } from '@/lib/utils/constants';
import { FormData } from '@/lib/utils/form';

interface Step1CompanyProps {
  formData: FormData;
  errors: Record<string, string>;
  onChange: (field: keyof FormData, value: string) => void;
}

export function Step1Company({ formData, errors, onChange }: Step1CompanyProps) {
  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(field, e.target.value);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-[#2E2E2A]">Informasi Perusahaan</h3>
        <p className="text-sm text-[#6B6B65] mt-1">Isi data dasar perusahaan Anda</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label htmlFor="nama" className="block text-sm font-medium text-[#2E2E2A] mb-1.5">
            Nama Lengkap <span className="text-[#EF4444]">*</span>
          </label>
          <Input
            id="nama"
            type="text"
            placeholder="Contoh: Rina Wijaya"
            value={formData.nama}
            onChange={handleChange('nama')}
            error={!!errors.nama}
            autoComplete="name"
          />
          {errors.nama && <p className="mt-1.5 text-sm text-[#EF4444]">{errors.nama}</p>}
        </div>

        <div>
          <label htmlFor="jabatan" className="block text-sm font-medium text-[#2E2E2A] mb-1.5">
            Jabatan <span className="text-[#EF4444]">*</span>
          </label>
          <Input
            id="jabatan"
            type="text"
            placeholder="Contoh: HR Manager"
            value={formData.jabatan}
            onChange={handleChange('jabatan')}
            error={!!errors.jabatan}
            autoComplete="job-title"
          />
          {errors.jabatan && <p className="mt-1.5 text-sm text-[#EF4444]">{errors.jabatan}</p>}
        </div>

        <div>
          <label htmlFor="perusahaan" className="block text-sm font-medium text-[#2E2E2A] mb-1.5">
            Nama Perusahaan <span className="text-[#EF4444]">*</span>
          </label>
          <Input
            id="perusahaan"
            type="text"
            placeholder="Contoh: PT Maju Bersama"
            value={formData.perusahaan}
            onChange={handleChange('perusahaan')}
            error={!!errors.perusahaan}
            autoComplete="organization"
          />
          {errors.perusahaan && <p className="mt-1.5 text-sm text-[#EF4444]">{errors.perusahaan}</p>}
        </div>

        <div>
          <label htmlFor="industri" className="block text-sm font-medium text-[#2E2E2A] mb-1.5">
            Industri <span className="text-[#EF4444]">*</span>
          </label>
          <Select
            id="industri"
            value={formData.industri}
            onChange={handleChange('industri')}
            error={!!errors.industri}
          >
            <option value="">Pilih industri</option>
            {INDUSTRI_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </Select>
          {errors.industri && <p className="mt-1.5 text-sm text-[#EF4444]">{errors.industri}</p>}
        </div>

        <div>
          <label htmlFor="jumlahKaryawan" className="block text-sm font-medium text-[#2E2E2A] mb-1.5">
            Jumlah Karyawan <span className="text-[#EF4444]">*</span>
          </label>
          <Select
            id="jumlahKaryawan"
            value={formData.jumlahKaryawan}
            onChange={handleChange('jumlahKaryawan')}
            error={!!errors.jumlahKaryawan}
          >
            <option value="">Pilih rentang</option>
            {JUMLAH_KARYAWAN_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </Select>
          {errors.jumlahKaryawan && <p className="mt-1.5 text-sm text-[#EF4444]">{errors.jumlahKaryawan}</p>}
        </div>
      </div>
    </div>
  );
}