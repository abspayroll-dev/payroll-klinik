import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { FormData } from '@/lib/utils/form';

interface Step2ContactProps {
  formData: FormData;
  errors: Record<string, string>;
  onChange: (field: keyof FormData, value: string) => void;
}

export function Step2Contact({ formData, errors, onChange }: Step2ContactProps) {
  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(field, e.target.value);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-[#2E2E2A]">Informasi Kontak</h3>
        <p className="text-sm text-[#6B6B65] mt-1">Bagaimana cara kami menghubungi Anda?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-[#2E2E2A] mb-1.5">
            Email <span className="text-[#EF4444]">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="contoh@perusahaan.com"
            value={formData.email}
            onChange={handleChange('email')}
            error={!!errors.email}
            autoComplete="email"
          />
          {errors.email && <p className="mt-1.5 text-sm text-[#EF4444]">{errors.email}</p>}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="whatsapp" className="block text-sm font-medium text-[#2E2E2A] mb-1.5">
            WhatsApp / Nomor Telepon <span className="text-[#EF4444]">*</span>
          </label>
          <Input
            id="whatsapp"
            type="tel"
            placeholder="08123456789 atau +6281234567890"
            value={formData.whatsapp}
            onChange={handleChange('whatsapp')}
            error={!!errors.whatsapp}
            autoComplete="tel"
          />
          {errors.whatsapp && <p className="mt-1.5 text-sm text-[#EF4444]">{errors.whatsapp}</p>}
          <p className="mt-1.5 text-xs text-[#6B6B65]">
            Format: 08123456789 atau +6281234567890
          </p>
        </div>
      </div>
    </div>
  );
}
