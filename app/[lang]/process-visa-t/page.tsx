import { Metadata } from 'next';
import ProcessClient from '../../../components/ProcessClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = {
  title: 'Visa T Process Step by Step: I-914, BFD, T Status, Green Card (2026)',
  description: 'Complete Visa T process: evidence gathering, I-914, bona fide determination, T visa approval, and path to permanent residence for trafficking victims.',
  keywords: ['Visa T process', 'I-914', 'T visa step by step', 'proceso Visa T', 'trata de personas proceso'],
  alternates: { canonical: 'https://visas-humanitarias.com/process-visa-t' },
};
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return (
    <ProcessClient
      lang={validLang}
      t={TRANSLATIONS[validLang]}
      dataKey="process_visat"
      badgeLabel="Visa T"
      sidebarLinks={[
        { label: 'Form I-914 (USCIS)', url: 'https://www.uscis.gov/i-914' },
        { label: 'USCIS — Visa T', url: 'https://www.uscis.gov/humanitarian/victims-of-human-trafficking-t-nonimmigrant-status' },
        { label: 'Form I-192 (Waiver)', url: 'https://www.uscis.gov/i-192' },
      ]}
    />
  );
}
