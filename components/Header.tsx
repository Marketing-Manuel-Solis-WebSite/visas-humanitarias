'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps { lang: string; t: any; }

export default function Header({ lang, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const getSwitchLangUrl = () => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = lang === 'en' ? 'es' : 'en';
    return segments.join('/');
  };

  const NavLink = ({ target, label }: { target: string; label: string }) => {
    const isActive = pathname?.includes(target);
    return (
      <Link
        href={`/${lang}/${target}`}
        className={`flex items-center py-2 px-3 rounded transition-colors font-medium text-sm ${
          isActive
            ? 'text-[#7c2d3e] bg-rose-50 border-b-2 border-[#7c2d3e]'
            : 'text-slate-600 hover:text-[#7c2d3e] hover:bg-rose-50/50'
        }`}
        onClick={() => { setMobileMenuOpen(false); setDropdownOpen(null); }}
      >
        <span>{label}</span>
      </Link>
    );
  };

  const DropdownMenu = ({ label, items, id }: { label: string; items: { target: string; label: string }[]; id: string }) => (
    <div className="relative" onMouseEnter={() => setDropdownOpen(id)} onMouseLeave={() => setDropdownOpen(null)}>
      <button className="flex items-center py-2 px-3 rounded transition-colors font-medium text-sm text-slate-600 hover:text-[#7c2d3e] hover:bg-rose-50/50">
        {label} <ChevronDown size={14} className="ml-1" />
      </button>
      {dropdownOpen === id && (
        <div className="absolute top-full left-0 bg-white border border-slate-200 rounded-lg shadow-lg py-2 min-w-48 z-50">
          {items.map((item) => (
            <Link key={item.target} href={`/${lang}/${item.target}`} className="block px-4 py-2 text-sm text-slate-600 hover:bg-rose-50 hover:text-[#7c2d3e] transition-colors" onClick={() => setDropdownOpen(null)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className="bg-[#fdf2f4] border-b border-rose-200 py-1 px-4 text-xs flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-slate-600 font-medium">
            {lang === 'en' ? 'Informational Resource — Not Legal Advice' : 'Recurso Informativo — No Es Asesoría Legal'}
          </span>
        </div>
        <div className="flex space-x-4">
          <Link href={getSwitchLangUrl()} className="font-bold text-[#7c2d3e] hover:underline flex items-center space-x-1">
            <Globe size={12} />
            <span>{lang === 'en' ? 'Español' : 'English'}</span>
          </Link>
        </div>
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href={`/${lang}`} className="flex items-center space-x-3 cursor-pointer">
            <div className="w-11 h-11 bg-[#7c2d3e] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg font-serif">VH</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-tight text-[#7c2d3e] leading-none font-serif">
                Visas Humanitarias
              </h1>
              <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
                VAWA · SIJS · Visa T
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex space-x-1 items-center">
            <DropdownMenu
              id="vawa"
              label="VAWA"
              items={[
                { target: 'eligibility-vawa', label: t.nav.eligibility_vawa },
                { target: 'process-vawa', label: t.nav.process_vawa },
                { target: 'faq-vawa', label: t.nav.faq_vawa },
              ]}
            />
            <DropdownMenu
              id="sijs"
              label="SIJS"
              items={[
                { target: 'eligibility-sijs', label: t.nav.eligibility_sijs },
                { target: 'process-sijs', label: t.nav.process_sijs },
                { target: 'faq-sijs', label: t.nav.faq_sijs },
              ]}
            />
            <DropdownMenu
              id="visat"
              label="Visa T"
              items={[
                { target: 'eligibility-visa-t', label: t.nav.eligibility_visat },
                { target: 'process-visa-t', label: t.nav.process_visat },
                { target: 'faq-visa-t', label: t.nav.faq_visat },
              ]}
            />
          </nav>

          <button
            className="lg:hidden text-[#7c2d3e]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 p-4 space-y-1 shadow-lg absolute w-full z-50">
            <p className="text-xs font-bold text-[#7c2d3e] uppercase tracking-wider px-3 pt-2">VAWA</p>
            <NavLink target="eligibility-vawa" label={t.nav.eligibility_vawa} />
            <NavLink target="process-vawa" label={t.nav.process_vawa} />
            <NavLink target="faq-vawa" label={t.nav.faq_vawa} />
            <hr className="border-slate-100 my-2" />
            <p className="text-xs font-bold text-[#7c2d3e] uppercase tracking-wider px-3 pt-2">SIJS</p>
            <NavLink target="eligibility-sijs" label={t.nav.eligibility_sijs} />
            <NavLink target="process-sijs" label={t.nav.process_sijs} />
            <NavLink target="faq-sijs" label={t.nav.faq_sijs} />
            <hr className="border-slate-100 my-2" />
            <p className="text-xs font-bold text-[#7c2d3e] uppercase tracking-wider px-3 pt-2">Visa T</p>
            <NavLink target="eligibility-visa-t" label={t.nav.eligibility_visat} />
            <NavLink target="process-visa-t" label={t.nav.process_visat} />
            <NavLink target="faq-visa-t" label={t.nav.faq_visat} />
          </div>
        )}
      </header>
    </>
  );
}
