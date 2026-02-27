import { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = { title: 'Privacy Policy | Visas Humanitarias', robots: { index: false, follow: true } };
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return <PrivacyClient lang={validLang} />;
}
