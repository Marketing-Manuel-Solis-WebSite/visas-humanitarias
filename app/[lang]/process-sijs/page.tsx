import { Metadata } from 'next';
import ProcessClient from '../../../components/ProcessClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = {
  title: 'SIJS Process Step by Step: State Court, I-360, EB-4, I-485 (2026)',
  description: 'Complete SIJS process: state court order with findings, I-360 petition, EB-4 visa wait, adjustment of status I-485.',
  keywords: ['SIJS process', 'I-360 SIJS', 'SIJS step by step', 'proceso SIJS', 'SIJS green card process'],
  alternates: { canonical: 'https://visas-humanitarias.com/process-sijs' },
};
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return (
    <ProcessClient
      lang={validLang}
      t={TRANSLATIONS[validLang]}
      dataKey="process_sijs"
      badgeLabel="SIJS"
      sidebarLinks={[
        { label: 'Form I-360 (USCIS)', url: 'https://www.uscis.gov/i-360' },
        { label: 'Form I-485 (USCIS)', url: 'https://www.uscis.gov/i-485' },
        { label: 'Visa Bulletin', url: 'https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html' },
      ]}
    />
  );
}
