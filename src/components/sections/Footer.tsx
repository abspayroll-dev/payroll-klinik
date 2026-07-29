import { Container } from '@/components/shared/Container';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/utils/constants';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#567354] text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-lg font-bold">Payroll Klinik</h3>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Layanan konsultasi payroll gratis untuk perusahaan Indonesia dari praktisi berpengalaman.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Navigation
            </h4>
            <nav className="mt-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-white/80 hover:text-white hover:underline transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Kontak
            </h4>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="break-all">{SITE_CONFIG.email}</span>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 flex-shrink-0" />
                <span>{SITE_CONFIG.whatsapp}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  AKMANI HOTEL Lt. Mezzanine<br />
                  Jl. K.H. Wahid Hasyim No. 91,<br />
                  Menteng, Jakarta Pusat 10350
                </span>
              </div>
            </div>
          </div>

          {/* Legal & Social Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Legal & Social
            </h4>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <Link
                href="/kebijakan-privasi"
                className="block hover:text-white hover:underline transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={SITE_CONFIG.social.linkedin}
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={SITE_CONFIG.social.instagram}
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a
                  href={SITE_CONFIG.social.facebook}
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Trust Badge */}
        <div className="mt-12 rounded-lg bg-white/10 p-4 text-center text-sm text-white/90">
          <span className="inline-flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            Jaminan Kerahasiaan Data (Non-Disclosure Statement Included). Data payroll &amp; gaji perusahaan Anda 100% aman.
          </span>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-xs text-white/60">
          <p>© {new Date().getFullYear()} Payroll Klinik. All rights reserved. | Powered by ABS Payroll</p>
        </div>
      </Container>
    </footer>
  );
}