'use client';

import React from 'react';
import Link from 'next/link';
import {
  Shield, ChevronRight, ExternalLink, AlertTriangle,
  CheckCircle, Scale, FileText, Heart, Users, Lock
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface HomeClientProps { lang: string; t: any; }

export default function HomeClient({ lang, t }: HomeClientProps) {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      <Header lang={lang} t={t} />

      <main className="flex-grow">
        {/* HERO */}
        <section className="bg-[#7c2d3e] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-96 h-96 bg-rose-400 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-amber-300 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 text-rose-200 mb-4 font-semibold tracking-wider text-xs uppercase">
                <Shield size={16} />
                <span>{lang === 'en' ? 'Humanitarian Immigration Protection' : 'Protección Migratoria Humanitaria'}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-serif tracking-tight">{t.hero.title}</h1>
              <p className="text-xl text-rose-100 mb-8 leading-relaxed max-w-3xl font-light">{t.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#guide" className="inline-flex items-center justify-center bg-white text-[#7c2d3e] hover:bg-rose-50 font-bold py-4 px-8 rounded shadow-md transition-all text-lg">
                  <CheckCircle size={20} className="mr-2" />{t.hero.cta_primary}
                </a>
                <a href="https://manuelsolis.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-transparent border border-white text-white hover:bg-rose-900/50 font-semibold py-4 px-8 rounded transition-all text-lg">
                  {t.hero.cta_secondary}<ExternalLink size={20} className="ml-2" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-rose-800/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">VAWA</div>
                  <div className="text-xs text-rose-200 font-medium uppercase tracking-wide">{t.timeline_section.vawa_label}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">SIJS</div>
                  <div className="text-xs text-rose-200 font-medium uppercase tracking-wide">{t.timeline_section.sijs_label}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">Visa T</div>
                  <div className="text-xs text-rose-200 font-medium uppercase tracking-wide">{t.timeline_section.visat_label}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NAVIGATION CARDS — Eligibility */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#7c2d3e] font-serif mb-3">
                {lang === 'en' ? 'Eligibility by Visa Type' : 'Elegibilidad por Tipo de Visa'}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                {lang === 'en'
                  ? 'Each humanitarian visa serves a different situation. Explore the eligibility requirements for each.'
                  : 'Cada visa humanitaria atiende una situación diferente. Explora los requisitos de elegibilidad de cada una.'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { href: 'eligibility-vawa', icon: Heart, title: t.cards.vawa_title, desc: t.cards.vawa_desc, color: 'text-rose-600' },
                { href: 'eligibility-sijs', icon: Users, title: t.cards.sijs_title, desc: t.cards.sijs_desc, color: 'text-amber-600' },
                { href: 'eligibility-visa-t', icon: Shield, title: t.cards.visat_title, desc: t.cards.visat_desc, color: 'text-purple-600' },
              ].map((card) => (
                <Link key={card.href} href={`/${lang}/${card.href}`} className="group bg-white border border-slate-200 hover:border-[#7c2d3e] p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
                  <div className={`mb-6 ${card.color} group-hover:scale-110 transition-transform origin-left`}>
                    <card.icon size={40} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl font-bold text-[#7c2d3e] mb-3">{card.title}</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">{card.desc}</p>
                  <span className="inline-flex items-center text-sm text-[#7c2d3e] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {lang === 'en' ? 'Learn More' : 'Ver Más'} <ChevronRight size={16} className="ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS CARDS */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#7c2d3e] font-serif mb-3">
                {lang === 'en' ? 'Step-by-Step Process' : 'Proceso Paso a Paso'}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                {lang === 'en'
                  ? 'Understand the full process for each visa type — from evidence gathering to permanent residence.'
                  : 'Entiende el proceso completo de cada tipo de visa — desde la recopilación de evidencia hasta la residencia permanente.'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { href: 'process-vawa', icon: FileText, title: t.cards.process_vawa_title, desc: t.cards.process_vawa_desc },
                { href: 'process-sijs', icon: Scale, title: t.cards.process_sijs_title, desc: t.cards.process_sijs_desc },
                { href: 'process-visa-t', icon: FileText, title: t.cards.process_visat_title, desc: t.cards.process_visat_desc },
              ].map((card) => (
                <Link key={card.href} href={`/${lang}/${card.href}`} className="group bg-white border border-slate-200 hover:border-[#7c2d3e] p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-left">
                  <div className="mb-6 text-[#7c2d3e] group-hover:scale-110 transition-transform origin-left">
                    <card.icon size={36} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl font-bold text-[#7c2d3e] mb-3">{card.title}</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">{card.desc}</p>
                  <span className="inline-flex items-center text-sm text-[#7c2d3e] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {lang === 'en' ? 'See Process' : 'Ver Proceso'} <ChevronRight size={16} className="ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK GUIDE */}
        <section id="guide" className="py-16 bg-slate-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#7c2d3e] font-serif mb-3 text-center">{t.guide.title}</h2>
            <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">{t.guide.subtitle}</p>

            <div className="space-y-6">
              {/* VAWA */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Heart size={24} className="text-rose-600" />
                  <h3 className="text-xl font-bold text-[#7c2d3e]">{t.guide.vawa_label}</h3>
                </div>
                <p className="text-slate-700 font-medium mb-3">{t.guide.vawa_if}</p>
                <div className="space-y-2 mb-4">
                  {t.guide.vawa_points.map((p: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-rose-600 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-600">{p}</span>
                    </div>
                  ))}
                </div>
                <Link href={`/${lang}/eligibility-vawa`} className="inline-flex items-center text-sm text-[#7c2d3e] font-medium hover:underline">
                  {t.guide.vawa_link} <ChevronRight size={14} className="ml-1" />
                </Link>
              </div>

              {/* SIJS */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Users size={24} className="text-amber-600" />
                  <h3 className="text-xl font-bold text-[#7c2d3e]">{t.guide.sijs_label}</h3>
                </div>
                <p className="text-slate-700 font-medium mb-3">{t.guide.sijs_if}</p>
                <div className="space-y-2 mb-4">
                  {t.guide.sijs_points.map((p: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-amber-600 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-600">{p}</span>
                    </div>
                  ))}
                </div>
                <Link href={`/${lang}/eligibility-sijs`} className="inline-flex items-center text-sm text-[#7c2d3e] font-medium hover:underline">
                  {t.guide.sijs_link} <ChevronRight size={14} className="ml-1" />
                </Link>
              </div>

              {/* Visa T */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={24} className="text-purple-600" />
                  <h3 className="text-xl font-bold text-[#7c2d3e]">{t.guide.visat_label}</h3>
                </div>
                <p className="text-slate-700 font-medium mb-3">{t.guide.visat_if}</p>
                <div className="space-y-2 mb-4">
                  {t.guide.visat_points.map((p: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-purple-600 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-600">{p}</span>
                    </div>
                  ))}
                </div>
                <Link href={`/${lang}/eligibility-visa-t`} className="inline-flex items-center text-sm text-[#7c2d3e] font-medium hover:underline">
                  {t.guide.visat_link} <ChevronRight size={14} className="ml-1" />
                </Link>
              </div>

              {/* Not Sure */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex gap-4">
                  <AlertTriangle className="text-amber-600 shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2">{t.guide.unsure}</h3>
                    <p className="text-amber-800 text-sm leading-relaxed">{t.guide.unsure_desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEY FACTS */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#7c2d3e] font-serif mb-8 text-center">{t.timeline_section.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3"><Heart size={20} /><span className="font-bold text-sm uppercase tracking-wide">{t.timeline_section.vawa_label}</span></div>
                <p className="text-sm leading-relaxed">{t.timeline_section.vawa_text}</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3"><Users size={20} /><span className="font-bold text-sm uppercase tracking-wide">{t.timeline_section.sijs_label}</span></div>
                <p className="text-sm leading-relaxed">{t.timeline_section.sijs_text}</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 text-purple-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3"><Shield size={20} /><span className="font-bold text-sm uppercase tracking-wide">{t.timeline_section.visat_label}</span></div>
                <p className="text-sm leading-relaxed">{t.timeline_section.visat_text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONFIDENTIALITY */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Lock size={24} className="text-[#7c2d3e]" />
                <h2 className="text-2xl font-bold text-[#7c2d3e] font-serif">{t.confidentiality.title}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">{t.confidentiality.desc}</p>
              <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 mb-3">
                <p className="text-rose-900 font-bold text-sm">{t.confidentiality.emergency}</p>
              </div>
              <p className="text-slate-500 text-sm">{t.confidentiality.nonemergency}</p>
            </div>
          </div>
        </section>

        {/* DEDICATED SITES */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#7c2d3e] font-serif mb-8 text-center">
              {lang === 'en' ? 'Dedicated Resources' : 'Recursos Dedicados'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://visa-vawa.com" target="_blank" rel="noopener noreferrer" className="bg-rose-50 border border-rose-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow group">
                <Heart size={32} className="text-rose-600 mx-auto mb-3" />
                <h3 className="font-bold text-[#7c2d3e] text-lg mb-2">visa-vawa.com</h3>
                <p className="text-sm text-slate-600">{lang === 'en' ? 'Complete VAWA resource' : 'Recurso completo de VAWA'}</p>
                <ExternalLink size={14} className="text-[#7c2d3e] mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://visa-sijs.com" target="_blank" rel="noopener noreferrer" className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow group">
                <Users size={32} className="text-amber-600 mx-auto mb-3" />
                <h3 className="font-bold text-[#7c2d3e] text-lg mb-2">visa-sijs.com</h3>
                <p className="text-sm text-slate-600">{lang === 'en' ? 'Complete SIJS resource' : 'Recurso completo de SIJS'}</p>
                <ExternalLink size={14} className="text-[#7c2d3e] mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://visa-t.com" target="_blank" rel="noopener noreferrer" className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow group">
                <Shield size={32} className="text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-[#7c2d3e] text-lg mb-2">visa-t.com</h3>
                <p className="text-sm text-slate-600">{lang === 'en' ? 'Complete Visa T resource' : 'Recurso completo de Visa T'}</p>
                <ExternalLink size={14} className="text-[#7c2d3e] mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} t={t} />
    </div>
  );
}
