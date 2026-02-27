'use client';

import React from 'react';
import { CheckCircle, AlertTriangle, ExternalLink, Shield, Info, Clock } from 'lucide-react';
import ContentPage from '../../../components/ContentPage';

export default function EligibilityVisaTClient({ lang, t }: { lang: string; t: any }) {
  const d = t.eligibility_visat;
  return (
    <ContentPage lang={lang} t={t} breadcrumb="Visa T" badge={lang === 'en' ? 'Eligibility' : 'Elegibilidad'} badgeIcon={<Shield size={14} />} title={d.title} subtitle={d.subtitle}
      sidebar={
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md">
          <h3 className="font-bold text-slate-800 text-lg font-serif mb-4">{lang === 'en' ? 'Official Resources' : 'Recursos Oficiales'}</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="https://www.uscis.gov/humanitarian/victims-of-human-trafficking-t-nonimmigrant-status" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#7c2d3e] hover:underline"><ExternalLink size={14} className="mr-2" />USCIS — Visa T</a></li>
            <li><a href="https://www.uscis.gov/i-914" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#7c2d3e] hover:underline"><ExternalLink size={14} className="mr-2" />Form I-914</a></li>
          </ul>
        </div>
      }
    >
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#7c2d3e] font-serif mb-4 flex items-center">
          <Shield size={24} className="mr-3 text-purple-600" />{d.what_title}
        </h2>
        <p className="text-slate-600 leading-relaxed">{d.what_desc}</p>
      </section>

      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#7c2d3e] font-serif mb-6">{d.reqs_title}</h2>
        <div className="space-y-4">
          {d.reqs.map((req: { label: string; desc: string }, i: number) => (
            <div key={i} className="flex items-start gap-4 p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
              <CheckCircle size={18} className="text-emerald-600 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{req.label}</h3>
                <p className="text-sm text-slate-600">{req.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-purple-50 border border-purple-200 rounded-xl p-6">
        <div className="flex gap-4">
          <Clock className="text-purple-600 shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-purple-900 mb-2">{d.cap_title}</h3>
            <p className="text-purple-800 text-sm leading-relaxed">{d.cap_desc}</p>
          </div>
        </div>
      </section>

      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#7c2d3e] font-serif mb-4 flex items-center">
          <Info size={24} className="mr-3 text-purple-600" />{d.bfd_title}
        </h2>
        <p className="text-slate-600 leading-relaxed">{d.bfd_desc}</p>
      </section>

      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#7c2d3e] font-serif mb-4">{d.evidence_title}</h2>
        <div className="space-y-3">
          {d.evidence_points.map((point: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle size={16} className="text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{point}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-purple-50 border border-purple-200 rounded-xl p-6">
        <h3 className="font-bold text-[#7c2d3e] mb-2">{d.sites_title}</h3>
        <p className="text-slate-600 text-sm mb-2">{d.sites_desc}</p>
        <a href={d.sites_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#7c2d3e] font-bold hover:underline">
          {d.sites_link} <ExternalLink size={14} className="ml-2" />
        </a>
      </section>
    </ContentPage>
  );
}
