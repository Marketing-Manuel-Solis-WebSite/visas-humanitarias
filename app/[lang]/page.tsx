import { Metadata } from 'next';
import { TRANSLATIONS } from '../../data/translations';
import HomeClient from './HomeClient';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEnglish = lang === 'en';

  const title = isEnglish
    ? 'Humanitarian Visas USA 2026: VAWA, SIJS & Visa T — Complete Guide'
    : 'Visas Humanitarias USA 2026: VAWA, SIJS y Visa T — Guía Completa';

  const description = isEnglish
    ? 'Complete guide to humanitarian visas in the U.S. for 2026. VAWA (domestic violence self-petition), SIJS (minors), Visa T (trafficking). Eligibility, process, evidence, and path to permanent residence.'
    : 'Guía completa de visas humanitarias en EE.UU. para 2026. VAWA (autopetición por violencia), SIJS (menores), Visa T (trata). Elegibilidad, proceso, evidencia y camino a la residencia permanente.';

  return {
    title, description,
    alternates: {
      canonical: `https://visas-humanitarias.com/${lang}`,
      languages: { es: 'https://visas-humanitarias.com/es', en: 'https://visas-humanitarias.com/en', 'x-default': 'https://visas-humanitarias.com/es' },
    },
    openGraph: { title, description, url: `https://visas-humanitarias.com/${lang}`, type: 'website', locale: isEnglish ? 'en_US' : 'es_US' },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  const t = TRANSLATIONS[validLang];

  return <HomeClient lang={validLang} t={t} />;
}
