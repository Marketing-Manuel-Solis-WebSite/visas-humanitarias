import { Metadata } from 'next';
import EligibilitySIJSClient from './EligibilitySIJSClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = {
  title: 'SIJS Eligibility 2026: Do I Qualify? Requirements, Age, Court Findings',
  description: 'SIJS eligibility requirements: age under 21, unmarried, state court findings of abuse/neglect/abandonment, dependency, best interest.',
  keywords: ['SIJS eligibility', 'SIJS requirements', 'SIJS age limit', 'elegibilidad SIJS', 'requisitos SIJS'],
  alternates: { canonical: 'https://visas-humanitarias.com/eligibility-sijs' },
};
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return <EligibilitySIJSClient lang={validLang} t={TRANSLATIONS[validLang]} />;
}
