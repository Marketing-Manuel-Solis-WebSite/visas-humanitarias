import { Metadata } from 'next';
import EligibilityVisaTClient from './EligibilityVisaTClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = {
  title: 'Visa T Eligibility 2026: Do I Qualify? Trafficking Victims Requirements',
  description: 'Visa T eligibility: victim of severe trafficking, presence in U.S., cooperation with law enforcement, extreme hardship. 5,000 annual cap.',
  keywords: ['Visa T eligibility', 'trafficking visa', 'T visa requirements', 'elegibilidad Visa T', 'trata de personas visa'],
  alternates: { canonical: 'https://visas-humanitarias.com/eligibility-visa-t' },
};
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return <EligibilityVisaTClient lang={validLang} t={TRANSLATIONS[validLang]} />;
}
