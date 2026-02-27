'use client';

import React from 'react';
import { CheckCircle, AlertTriangle, ExternalLink, Heart, Shield, Info } from 'lucide-react';
import ContentPage from '../../../components/ContentPage';

export default function EligibilityVAWAClient({ lang, t }: { lang: string; t: any }) {
  const d = t.eligibility_vawa;
  return (
    <ContentPage lang={lang} t={t} breadcrumb="VAWA" badge={lang === 'en' ? 'Eligibility' : 'Elegibilidad'} badgeIcon={<Heart size={14} />} title={d.title} subtitle={d.subtitle}
      sidebar={
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md">
          <h3 className="font-bold text-slate-800 text-lg font-serif mb-4">{lang === 'en' ? 'Official Resources' : 'Recursos Oficiales'}</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="https://www.uscis.gov/green-card/green-card-eligibility/green-card-for-vawa-self-petitioner" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#7c2d3e] hover:underline"><ExternalLink size={14} className="mr-2" />USCIS — VAWA</a></li>
            <li><a href="https://www.uscis.gov/i-360" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#7c2d3e] hover:underline"><ExternalLink size={14} className="mr-2" />Form I-360</a></li>
          </ul>
        </div>
      }
    >
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#7c2d3e] font-serif mb-4 flex items-center">
          <Shield size={24} className="mr-3 text-rose-600" />{d.what_title}
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

      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#7c2d3e] font-serif mb-4">{d.key_title}</h2>
        <div className="space-y-3">
          {d.key_points.map((point: string, i: number) => (
            <div key={i} className="flex items-start gap-3 bg-rose-50 p-3 rounded border border-rose-100">
              <Info size={16} className="text-[#7c2d3e] mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{point}</span>
            </div>
          ))}
        </div>
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

      <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex gap-4">
          <AlertTriangle className="text-amber-600 shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-amber-900 mb-2">{d.important_title}</h3>
            <p className="text-amber-800 text-sm leading-relaxed">{d.important_desc}</p>
          </div>
        </div>
      </section>

      <section className="bg-rose-50 border border-rose-200 rounded-xl p-6">
        <h3 className="font-bold text-[#7c2d3e] mb-2">{d.sites_title}</h3>
        <p className="text-slate-600 text-sm mb-2">{d.sites_desc}</p>
        <a href={d.sites_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#7c2d3e] font-bold hover:underline">
          {d.sites_link} <ExternalLink size={14} className="ml-2" />
        </a>
      </section>
    </ContentPage>
  );
}
