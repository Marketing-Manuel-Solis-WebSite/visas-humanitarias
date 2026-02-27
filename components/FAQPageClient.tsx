'use client';

import React from 'react';
import { HelpCircle, ExternalLink } from 'lucide-react';
import ContentPage from './ContentPage';
import FAQItem from './FAQ';

export default function FAQPageClient({ lang, t, dataKey, badgeLabel, sidebarLinks }: {
  lang: string; t: any; dataKey: string; badgeLabel: string;
  sidebarLinks: { label: string; url: string }[];
}) {
  const d = (t as any)[dataKey];

  return (
    <ContentPage lang={lang} t={t} breadcrumb={badgeLabel} badge="FAQ" badgeIcon={<HelpCircle size={14} />} title={d.title} subtitle={lang === 'en' ? 'Find answers to common questions.' : 'Encuentra respuestas a preguntas comunes.'}
      sidebar={
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md">
          <h3 className="font-bold text-slate-800 text-lg font-serif mb-4">{lang === 'en' ? 'Official Resources' : 'Recursos Oficiales'}</h3>
          <ul className="space-y-3 text-sm">
            {sidebarLinks.map((link, i) => (
              <li key={i}><a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#7c2d3e] hover:underline"><ExternalLink size={14} className="mr-2" />{link.label}</a></li>
            ))}
          </ul>
        </div>
      }
    >
      <section className="space-y-2">
        {d.items.map((item: { q: string; a: string }, i: number) => (
          <FAQItem key={i} q={item.q} a={item.a} />
        ))}
      </section>
    </ContentPage>
  );
}
