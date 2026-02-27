import { Metadata } from 'next';
import FAQPageClient from '../../../components/FAQPageClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = {
  title: 'SIJS FAQ 2026: Common Questions About Special Immigrant Juvenile Status',
  description: 'SIJS frequently asked questions: What is SIJS? Green card wait time? Can I petition parents? Court order requirements. Age limit.',
  keywords: ['SIJS FAQ', 'SIJS questions', 'preguntas SIJS', 'SIJS dudas'],
  alternates: { canonical: 'https://visas-humanitarias.com/faq-sijs' },
};
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return (
    <FAQPageClient
      lang={validLang}
      t={TRANSLATIONS[validLang]}
      dataKey="faq_sijs"
      badgeLabel="SIJS"
      sidebarLinks={[
        { label: 'USCIS — SIJS', url: 'https://www.uscis.gov/green-card/green-card-eligibility/green-card-based-on-special-immigrant-juvenile-classification' },
        { label: 'Form I-360', url: 'https://www.uscis.gov/i-360' },
      ]}
    />
  );
}
