'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/shared/Container';
import { CTAButton } from '@/components/shared/CTAButton';
import { NAV_ITEMS } from '@/lib/utils/constants';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const handleNavClick = (href: string, type: 'scroll' | 'link') => {
    if (type === 'link') {
      window.location.href = href;
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `/${href}`;
      }
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 bg-white lg:hidden">
      <div className="flex h-16 items-center justify-between px-4">
        <img src="/payroll-klinik-logo.svg" alt="Payroll Klinik" className="h-6" />
        <button
          onClick={onClose}
          className="rounded-md p-2 text-[#6B6B65] hover:bg-[#F3F4F6]"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="px-4 py-6">
        <div className="space-y-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href, item.type)}
              className="block w-full text-left rounded-lg px-4 py-3 text-lg font-medium text-[#2E2E2A] hover:bg-[#F3F4F6]"
            >
              {item.label}
            </button>
          ))}
           <div className="pt-4">
            <CTAButton 
              className="w-full"
              onClick={() => {
                const formSection = document.querySelector('#daftar-periksa');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#daftar-periksa';
                }
                onClose();
              }}
            >
              Daftar Konsultasi
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopNavigation() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#hero', '#cara-kerja', '#topik', '#faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const { offsetTop, offsetHeight } = element as HTMLElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string, type: 'scroll' | 'link' = 'scroll') => {
    if (type === 'link') {
      window.location.href = href;
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.href}
          onClick={(e) => {
            e.preventDefault();
            handleClick(item.href, item.type);
          }}
          className={`
            text-base font-medium transition-colors
            ${activeSection === item.href
              ? 'text-[#567354]'
              : 'text-[#2E2E2A] hover:text-[#567354]'
            }
          `}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.querySelector('#daftar-periksa');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#daftar-periksa';
    }
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-md py-2'
            : 'bg-white py-4'
          }
        `}
      >
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2"> {/* Tambahkan wrapper untuk hamburger dan logo */}
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden rounded-md p-2 text-[#6B6B65] hover:bg-[#F3F4F6]"
              >
                <Menu className="h-6 w-6" />
              </button>

              {/* Logo */}
              <Link href="/" className="transition-colors">
                <img src="/payroll-klinik-logo.svg" alt="Payroll Klinik" className="h-6" />
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <DesktopNavigation />

              {/* Desktop CTA Button */}
              <div className="hidden lg:block">
                <CTAButton onClick={scrollToForm}>
              Daftar Konsultasi
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
