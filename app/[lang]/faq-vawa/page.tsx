import { Metadata } from 'next';
import FAQPageClient from '../../../components/FAQPageClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = {
  title: 'VAWA FAQ 2026: Common Questions About VAWA Self-Petition',
  description: 'Frequently asked questions about VAWA: Is it a visa? Do I need abuser consent? Does it apply to men? Processing times, evidence, confidentiality.',
  keywords: ['VAWA FAQ', 'VAWA questions', 'preguntas VAWA', 'VAWA dudas'],
  alternates: { canonical: 'https://visas-humanitarias.com/faq-vawa' },
};
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return (
    <FAQPageClient
      lang={validLang}
      t={TRANSLATIONS[validLang]}
      dataKey="faq_vawa"
      badgeLabel="VAWA"
      sidebarLinks={[
        { label: 'USCIS — VAWA', url: 'https://www.uscis.gov/green-card/green-card-eligibility/green-card-for-vawa-self-petitioner' },
        { label: 'Form I-360', url: 'https://www.uscis.gov/i-360' },
      ]}
    />
  );
}
