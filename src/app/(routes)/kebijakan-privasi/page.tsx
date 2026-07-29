import { Container } from '@/components/shared/Container';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';

export default function KebijakanPrivasiPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-[#567354] mb-6">
              Kebijakan Privasi
            </h1>
            <p className="text-sm text-[#6B6B65] mb-8">
              Terakhir diperbarui: 16 Juli 2026
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-[#2E2E2A] mb-4">1. Pendahuluan</h2>
                <p className="text-[#6B6B65] leading-relaxed">
                  Payroll Klinik ("kami", "kita") menghormati privasi Anda dan berkomitmen untuk melindungi 
                  data pribadi yang Anda berikan. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, 
                  menggunakan, dan melindungi informasi Anda sesuai dengan Undang-Undang Perlindungan Data Pribadi.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2E2E2A] mb-4">2. Informasi yang Kami Kumpulkan</h2>
                <p className="text-[#6B6B65] leading-relaxed mb-3">
                  Ketika Anda mengisi formulir "Daftar Periksa" di situs kami, kami mengumpulkan informasi berikut:
                </p>
                <ul className="list-disc list-inside text-[#6B6B65] space-y-2 ml-4">
                  <li>Nama lengkap dan jabatan Anda</li>
                  <li>Nama perusahaan, industri, dan jumlah karyawan</li>
                  <li>Email dan nomor WhatsApp/telepon</li>
                  <li>Topik konsultasi yang Anda pilih</li>
                  <li>Deskripsi tantangan payroll yang Anda hadapi</li>
                  <li>Preferensi konsultasi (online/offline)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2E2E2A] mb-4">3. Penggunaan Data Anda</h2>
                <p className="text-[#6B6B65] leading-relaxed mb-3">
                  Kami menggunakan informasi yang Anda berikan untuk:
                </p>
                <ul className="list-disc list-inside text-[#6B6B65] space-y-2 ml-4">
                  <li>Melakukan screening dan penjadwalan sesi konsultasi</li>
                  <li>Menghubungi Anda melalui WhatsApp atau email</li>
                  <li>Mempersiapkan materi konsultasi yang relevan dengan kebutuhan Anda</li>
                  <li>Memberikan rekomendasi dan solusi payroll yang sesuai</li>
                  <li>Mengirimkan informasi terkait layanan ABS Payroll (jika relevan)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2E2E2A] mb-4">4. Penyimpanan dan Keamanan Data</h2>
                <p className="text-[#6B6B65] leading-relaxed">
                  Data Anda disimpan dengan aman menggunakan sistem terenkripsi dan hanya dapat diakses oleh 
                  tim internal yang berwenang. Kami menerapkan langkah-langkah keamanan teknis dan organisasi 
                  untuk melindungi data Anda dari akses, penggunaan, atau pengungkapan yang tidak sah.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2E2E2A] mb-4">5. Berbagi Data</h2>
                <p className="text-[#6B6B65] leading-relaxed">
                  Kami tidak akan menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga 
                  tanpa persetujuan Anda, kecuali jika diwajibkan oleh hukum. Data Anda hanya digunakan secara 
                  internal oleh tim Payroll Klinik dan ABS Payroll.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2E2E2A] mb-4">6. Hak Anda</h2>
                <p className="text-[#6B6B65] leading-relaxed mb-3">
                  Sesuai dengan peraturan perlindungan data, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside text-[#6B6B65] space-y-2 ml-4">
                  <li>Mengakses data pribadi yang kami simpan tentang Anda</li>
                  <li>Meminta koreksi jika data Anda tidak akurat</li>
                  <li>Meminta penghapusan data Anda</li>
                  <li>Menarik persetujuan penggunaan data kapan saja</li>
                  <li>Mengajukan keberatan atas pemrosesan data Anda</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2E2E2A] mb-4">7. Cookies</h2>
                <p className="text-[#6B6B65] leading-relaxed">
                  Situs kami menggunakan cookies untuk meningkatkan pengalaman pengguna dan menganalisis lalu lintas 
                  situs. Anda dapat mengatur browser Anda untuk menolak cookies, namun beberapa fitur situs mungkin 
                  tidak berfungsi dengan optimal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2E2E2A] mb-4">8. Perubahan Kebijakan</h2>
                <p className="text-[#6B6B65] leading-relaxed">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diposting di 
                  halaman ini dengan tanggal "Terakhir diperbarui" yang baru.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2E2E2A] mb-4">9. Hubungi Kami</h2>
                <p className="text-[#6B6B65] leading-relaxed">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak Anda 
                  terkait data pribadi, silakan hubungi kami:
                </p>
                <div className="mt-4 rounded-lg bg-[#FDFBF7] border border-[#E5E5E0] p-4">
                  <p className="text-[#2E2E2A]">
                    <strong>Email:</strong> team@payrollklinik.id<br />
                    <strong>WhatsApp:</strong> +62 812-3456-7890<br />
                    <strong>Alamat:</strong> AKMANI HOTEL Lt. Mezzanine, Jl. K.H. Wahid Hasyim No. 91, 
                    Menteng, Jakarta Pusat 10350
                  </p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
