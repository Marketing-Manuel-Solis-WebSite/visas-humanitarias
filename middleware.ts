import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ['es', 'en'] as const;
const defaultLocale = 'es';

function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') || '';
  const languages = acceptLanguage.split(',').map(lang => {
    const [code, quality] = lang.trim().split(';q=');
    return { code: code.split('-')[0].toLowerCase(), q: quality ? parseFloat(quality) : 1.0 };
  }).sort((a, b) => b.q - a.q);

  for (const lang of languages) {
    if ((locales as readonly string[]).includes(lang.code)) return lang.code;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next();
  }

  const normalizedPath = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const pathSegments = normalizedPath.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  const hasValidLocale = (locales as readonly string[]).includes(firstSegment);

  if (hasValidLocale) {
    if (normalizedPath !== pathname) {
      const url = request.nextUrl.clone();
      url.pathname = normalizedPath;
      return NextResponse.redirect(url, 308);
    }
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const targetPath = `/${locale}${normalizedPath === '/' ? '' : normalizedPath}`;
  const url = request.nextUrl.clone();
  url.pathname = targetPath;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico|css|js|woff|woff2|ttf|eot|mp4|mp3|pdf|zip|json|xml)).*)',
  ],
};
