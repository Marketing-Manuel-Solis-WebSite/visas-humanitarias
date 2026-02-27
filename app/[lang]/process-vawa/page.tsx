import { Metadata } from 'next';
import ProcessClient from '../../../components/ProcessClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = {
  title: 'VAWA Process Step by Step: Self-Petition, I-360, Adjustment of Status (2026)',
  description: 'Complete VAWA process: evidence gathering, I-360 self-petition, prima facie determination, approval, and adjustment of status to permanent residence.',
  keywords: ['VAWA process', 'VAWA I-360', 'VAWA step by step', 'proceso VAWA', 'autopetición VAWA'],
  alternates: { canonical: 'https://visas-humanitarias.com/process-vawa' },
};
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return (
    <ProcessClient
      lang={validLang}
      t={TRANSLATIONS[validLang]}
      dataKey="process_vawa"
      badgeLabel="VAWA"
      sidebarLinks={[
        { label: 'Form I-360 (USCIS)', url: 'https://www.uscis.gov/i-360' },
        { label: 'Form I-485 (USCIS)', url: 'https://www.uscis.gov/i-485' },
        { label: 'USCIS — VAWA', url: 'https://www.uscis.gov/green-card/green-card-eligibility/green-card-for-vawa-self-petitioner' },
      ]}
    />
  );
}
