import { Metadata } from 'next';
import EligibilityVAWAClient from './EligibilityVAWAClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = {
  title: 'VAWA Eligibility 2026: Do I Qualify? Self-Petition Requirements',
  description: 'VAWA eligibility requirements: qualifying relationship, abuse or extreme cruelty, good faith marriage, residence, good moral character. Self-petition without abuser.',
  keywords: ['VAWA eligibility', 'VAWA requirements', 'VAWA self-petition', 'domestic violence immigration', 'elegibilidad VAWA'],
  alternates: { canonical: 'https://visas-humanitarias.com/eligibility-vawa' },
};
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return <EligibilityVAWAClient lang={validLang} t={TRANSLATIONS[validLang]} />;
}
