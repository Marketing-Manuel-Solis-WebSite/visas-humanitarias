import React from 'react';
import Link from 'next/link';
import { ExternalLink, Globe, AlertTriangle, ChevronRight, Scale, FileText } from 'lucide-react';

interface FooterProps { lang: string; t: any; }

export default function Footer({ lang, t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1015] text-slate-300 border-t border-slate-800 font-sans" role="contentinfo">
      <div className="bg-[#2a1a22] py-3 px-4 border-b border-slate-700">
        <div className="container mx-auto flex items-center justify-center text-center gap-2 text-xs md:text-sm text-slate-400">
          <AlertTriangle size={14} className="text-slate-300 shrink-0" aria-hidden="true" />
          <span>{t.footer.safety_warning}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="space-y-5">
            <div className="flex items-center space-x-3 text-white mb-2">
              <div className="w-10 h-10 bg-[#7c2d3e] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm font-serif">VH</span>
              </div>
              <span className="text-xl font-bold font-serif tracking-tight text-white">Visas Humanitarias</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">{t.footer.about_desc}</p>
            <div className="pt-2 flex gap-3">
              <Link href={`/${lang === 'en' ? 'es' : 'en'}`} className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 hover:text-white transition text-slate-400" aria-label={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}>
                <Globe size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <nav aria-label={lang === 'en' ? 'Quick resources' : 'Recursos rápidos'}>
            <h3 className="text-white font-semibold text-lg mb-6">{t.footer.resources_title}</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'VAWA', href: `/${lang}/eligibility-vawa` },
                { label: 'SIJS', href: `/${lang}/eligibility-sijs` },
                { label: 'Visa T', href: `/${lang}/eligibility-visa-t` },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="flex items-center text-slate-400 hover:text-white transition-colors group">
                    <ChevronRight size={14} className="mr-2 text-slate-600 group-hover:text-slate-300 transition-colors" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t.footer.safety_title}</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Scale size={16} className="text-slate-500 mt-0.5 shrink-0" />
                <a href="https://www.uscis.gov/green-card/green-card-eligibility/green-card-for-vawa-self-petitioner" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">USCIS — VAWA</a>
              </li>
              <li className="flex items-start gap-3">
                <FileText size={16} className="text-slate-500 mt-0.5 shrink-0" />
                <a href="https://www.uscis.gov/green-card/green-card-eligibility/green-card-based-on-special-immigrant-juvenile-classification" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">USCIS — SIJS</a>
              </li>
              <li className="flex items-start gap-3">
                <FileText size={16} className="text-slate-500 mt-0.5 shrink-0" />
                <a href="https://www.uscis.gov/humanitarian/victims-of-human-trafficking-t-nonimmigrant-status" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">USCIS — Visa T</a>
              </li>
              <li className="flex items-start gap-3">
                <FileText size={16} className="text-slate-500 mt-0.5 shrink-0" />
                <a href="https://www.uscis.gov/i-360" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Form I-360</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t.footer.contact_title}</h3>
            <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {lang === 'en'
                  ? 'Humanitarian visas involve complex federal immigration law. For personalized advice, consult with a qualified attorney experienced in immigration law.'
                  : 'Las visas humanitarias involucran ley federal de inmigración compleja. Para asesoría personalizada, consulta con un abogado calificado con experiencia en ley de inmigración.'}
              </p>
              <a href="https://manuelsolis.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-white font-medium hover:text-rose-300 transition-colors gap-1.5 text-sm">
                {lang === 'en' ? 'Find Legal Help' : 'Buscar Ayuda Legal'}
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0d0a0b] py-8 border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400">
          <div className="text-center md:text-left max-w-xl">
            <p className="mb-2 leading-relaxed">{t.footer.disclaimer}</p>
            <p>&copy; {currentYear} Visas-Humanitarias.com — {t.footer.rights_reserved}</p>
          </div>
          <nav className="flex gap-6 shrink-0" aria-label="Legal links">
            <Link href={`/${lang}/privacy`} className="hover:text-slate-200 transition text-left">{t.footer.privacy_policy}</Link>
            <Link href={`/${lang}/terms`} className="hover:text-slate-200 transition text-left">{t.footer.terms_of_use}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
