import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { FormData } from '@/lib/utils/form';
import { TOPICS, PREFERENSI_OPTIONS } from '@/lib/utils/constants';

interface Step3NeedsProps {
  formData: FormData;
  errors: Record<string, string>;
  onChange: (field: keyof FormData, value: any) => void;
}

export function Step3Needs({ formData, errors, onChange }: Step3NeedsProps) {
  const toggleTopic = (topicId: string) => {
    const current = formData.topik;
    const newTopics = current.includes(topicId)
      ? current.filter((t) => t !== topicId)
      : [...current, topicId];
    onChange('topik', newTopics);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-[#2E2E2A]">Kebutuhan Konsultasi</h3>
        <p className="text-sm text-[#6B6B65] mt-1">Beri tahu kami apa yang Anda butuhkan</p>
      </div>

      {/* Topics */}
      <div>
        <label className="block text-sm font-medium text-[#2E2E2A] mb-3">
          Topik Konsultasi (pilih yang sesuai)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TOPICS.map((topic) => (
            <label
              key={topic.id}
              className={`flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                formData.topik.includes(topic.id)
                  ? 'border-[#567354] bg-[#567354]/5'
                  : 'border-[#D1D5DB] hover:border-[#567354]/30'
              }`}
            >
              <Checkbox
                checked={formData.topik.includes(topic.id)}
                onChange={() => toggleTopic(topic.id)}
              />
              <span className="text-sm text-[#2E2E2A]">{topic.title}</span>
            </label>
          ))}
          <label
            className={`flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
              formData.topik.includes('lainnya')
                ? 'border-[#567354] bg-[#567354]/5'
                : 'border-[#D1D5DB] hover:border-[#567354]/30'
            }`}
          >
            <Checkbox
              checked={formData.topik.includes('lainnya')}
              onChange={() => toggleTopic('lainnya')}
            />
            <span className="text-sm text-[#2E2E2A]">Lainnya</span>
          </label>
        </div>
      </div>

      {/* Challenges */}
      <div>
        <label htmlFor="tantangan" className="block text-sm font-medium text-[#2E2E2A] mb-1.5">
          Tantangan yang Sedang Dihadapi
        </label>
        <Textarea
          id="tantangan"
          placeholder="Contoh: Sering ada kesalahan perhitungan lembur dan potongan BPJS."
          value={formData.tantangan}
          onChange={(e) => onChange('tantangan', e.target.value)}
        />
      </div>

      {/* Preference */}
      <div>
        <label className="block text-sm font-medium text-[#2E2E2A] mb-3">
          Preferensi Konsultasi <span className="text-[#EF4444]">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PREFERENSI_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className={`flex items-center justify-center gap-2 rounded-lg border p-4 cursor-pointer transition-colors ${
                formData.preferensi === opt.value
                  ? 'border-[#567354] bg-[#567354]/5 text-[#567354] font-medium'
                  : 'border-[#D1D5DB] hover:border-[#567354]/30'
              }`}
            >
              <input
                type="radio"
                name="preferensi"
                value={opt.value}
                checked={formData.preferensi === opt.value}
                onChange={(e) => onChange('preferensi', e.target.value)}
                className="sr-only"
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
        {errors.preferensi && <p className="mt-1.5 text-sm text-[#EF4444]">{errors.preferensi}</p>}
      </div>

      {/* Privacy Consent */}
      <div className="rounded-lg bg-[#FDFBF7] p-4 border border-[#E5E5E0]">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={formData.privacyConsent}
            onChange={(e) => onChange('privacyConsent', e.target.checked)}
            className="mt-0.5 h-5 w-5 rounded border-[#D1D5DB] text-[#567354] focus:ring-[#567354]"
          />
          <span className="text-sm text-[#6B6B65]">
            Saya setuju data ini digunakan untuk keperluan konsultasi.
            Selengkapnya baca <a href="/kebijakan-privasi" className="text-[#567354] underline">Kebijakan Privasi</a>.
          </span>
        </label>
        {errors.privacyConsent && (
          <p className="mt-1.5 text-sm text-[#EF4444] ml-8">{errors.privacyConsent}</p>
        )}
      </div>
    </div>
  );
}