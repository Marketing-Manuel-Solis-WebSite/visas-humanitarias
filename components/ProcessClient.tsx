'use client';

import React from 'react';
import { FileText, CheckCircle, AlertTriangle, ExternalLink, Scale } from 'lucide-react';
import ContentPage from './ContentPage';

interface ProcessStep {
  title: string;
  desc: string;
  points?: string[];
  findings?: string[];
  note?: string;
}

interface ProcessData {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  docs_title: string;
  docs: string[];
  errors_title: string;
  errors: string[];
}

function buildProcessData(d: any): ProcessData {
  const steps: ProcessStep[] = [];

  if (d.step1_title) steps.push({ title: d.step1_title, desc: d.step1_desc, points: d.step1_points, findings: d.step1_findings, note: d.step1_note });
  if (d.step2_title) steps.push({ title: d.step2_title, desc: d.step2_desc, points: d.step2_points });
  if (d.step3_title) steps.push({ title: d.step3_title, desc: d.step3_desc, points: d.step3_points });
  if (d.step4_title) steps.push({ title: d.step4_title, desc: d.step4_desc, points: d.step4_points });
  if (d.step5_title) steps.push({ title: d.step5_title, desc: d.step5_desc, points: d.step5_points });

  return { title: d.title, subtitle: d.subtitle, steps, docs_title: d.docs_title, docs: d.docs, errors_title: d.errors_title, errors: d.errors };
}

export default function ProcessClient({ lang, t, dataKey, badgeLabel, sidebarLinks }: {
  lang: string; t: any; dataKey: string; badgeLabel: string;
  sidebarLinks: { label: string; url: string }[];
}) {
  const d = (t as any)[dataKey];
  const data = buildProcessData(d);

  return (
    <ContentPage lang={lang} t={t} breadcrumb={badgeLabel} badge={lang === 'en' ? 'Step-by-Step' : 'Paso a Paso'} badgeIcon={<FileText size={14} />} title={data.title} subtitle={data.subtitle}
      sidebar={
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md">
          <h3 className="font-bold text-slate-800 text-lg font-serif mb-4">{lang === 'en' ? 'Official Forms' : 'Formularios Oficiales'}</h3>
          <ul className="space-y-3 text-sm">
            {sidebarLinks.map((link, i) => (
              <li key={i}><a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#7c2d3e] hover:underline"><ExternalLink size={14} className="mr-2" />{link.label}</a></li>
            ))}
          </ul>
        </div>
      }
    >
      {data.steps.map((step, idx) => (
        <section key={idx} className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#7c2d3e] font-serif mb-4 flex items-center">
            <span className="bg-rose-100 text-[#7c2d3e] w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans mr-3 font-bold">{idx + 1}</span>
            {step.title}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>

          {step.findings && (
            <div className="space-y-3 mb-4">
              {step.findings.map((finding: string, i: number) => (
                <div key={i} className="flex items-start gap-3 bg-amber-50 p-3 rounded border border-amber-100">
                  <Scale size={16} className="text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-amber-900">{finding}</span>
                </div>
              ))}
            </div>
          )}

          {step.points && (
            <div className="space-y-3">
              {step.points.map((point: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          )}

          {step.note && (
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r mt-4">
              <div className="flex items-start gap-2">
                <AlertTriangle size={18} className="text-amber-700 mt-0.5 shrink-0" />
                <p className="text-sm text-amber-900">{step.note}</p>
              </div>
            </div>
          )}
        </section>
      ))}

      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#7c2d3e] font-serif mb-6">{data.docs_title}</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {data.docs.map((doc: string, i: number) => (
            <div key={i} className="flex items-start gap-3 bg-slate-50 p-3 rounded border border-slate-100">
              <FileText size={16} className="text-slate-500 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{doc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-rose-50 border border-rose-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-rose-900 font-serif mb-6 flex items-center">
          <AlertTriangle size={24} className="mr-3" />{data.errors_title}
        </h2>
        <div className="space-y-3">
          {data.errors.map((error: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <AlertTriangle size={16} className="text-rose-600 mt-0.5 shrink-0" />
              <span className="text-sm text-rose-800">{error}</span>
            </div>
          ))}
        </div>
      </section>
    </ContentPage>
  );
}
