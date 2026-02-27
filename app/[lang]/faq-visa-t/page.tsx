import { Metadata } from 'next';
import FAQPageClient from '../../../components/FAQPageClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = {
  title: 'Visa T FAQ 2026: Common Questions About T Visa for Trafficking Victims',
  description: 'Visa T frequently asked questions: annual cap, cooperation requirement, bona fide determination, family members, extreme hardship, path to green card.',
  keywords: ['Visa T FAQ', 'T visa questions', 'preguntas Visa T', 'Visa T dudas'],
  alternates: { canonical: 'https://visas-humanitarias.com/faq-visa-t' },
};
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return (
    <FAQPageClient
      lang={validLang}
      t={TRANSLATIONS[validLang]}
      dataKey="faq_visat"
      badgeLabel="Visa T"
      sidebarLinks={[
        { label: 'USCIS — Visa T', url: 'https://www.uscis.gov/humanitarian/victims-of-human-trafficking-t-nonimmigrant-status' },
        { label: 'Form I-914', url: 'https://www.uscis.gov/i-914' },
      ]}
    />
  );
}
