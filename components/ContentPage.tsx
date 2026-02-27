'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Scale } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface ContentPageProps {
  lang: string;
  t: any;
  breadcrumb: string;
  badge: string;
  badgeIcon: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export default function ContentPage({ lang, t, breadcrumb, badge, badgeIcon, title, subtitle, children, sidebar }: ContentPageProps) {
  const goHome = () => { if (typeof window !== 'undefined') window.location.href = `/${lang}`; };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header lang={lang} t={t} />
      <main className="flex-grow py-12">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center text-sm text-slate-500 mb-8 border-b border-slate-200 pb-4">
            <button onClick={goHome} className="hover:text-[#7c2d3e] transition-colors flex items-center font-medium">
              <ChevronLeft size={16} className="mr-1" />{lang === 'en' ? 'Back to Home' : 'Regresar al Inicio'}
            </button>
            <ChevronRight size={16} className="mx-2 text-slate-300" />
            <span className="font-bold text-[#7c2d3e]">{breadcrumb}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
              <header>
                <div className="inline-flex items-center space-x-2 bg-[#7c2d3e] text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                  {badgeIcon}<span>{badge}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-[#7c2d3e] font-serif mb-6 leading-tight">{title}</h1>
                <p className="text-xl text-slate-600 leading-relaxed">{subtitle}</p>
              </header>
              {children}
            </div>

            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                {sidebar}
                <div className="bg-[#7c2d3e] text-white p-8 rounded-xl text-center shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10"><Scale size={100} /></div>
                  <h4 className="font-bold font-serif text-2xl mb-3 relative z-10">
                    {lang === 'en' ? 'Need Legal Help?' : '¿Necesitas Ayuda Legal?'}
                  </h4>
                  <p className="text-rose-100 text-sm mb-6 relative z-10 leading-relaxed">
                    {lang === 'en'
                      ? 'Humanitarian visas involve complex immigration law. An experienced attorney can evaluate your specific case.'
                      : 'Las visas humanitarias involucran ley migratoria compleja. Un abogado con experiencia puede evaluar tu caso específico.'}
                  </p>
                  <a href="https://manuelsolis.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full bg-white text-[#7c2d3e] font-bold py-4 px-6 rounded-lg hover:bg-rose-50 transition-colors shadow-md relative z-10">
                    {lang === 'en' ? 'Legal Consultation' : 'Consulta Legal'} <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer lang={lang} t={t} />
    </div>
  );
}
