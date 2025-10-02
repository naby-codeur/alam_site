import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Correspond uniquement aux chemins internationalisés
  matcher: ['/', '/(fr|en|ar|es|it|de|pt|tr|nl|ru|zh|ja|hi|id)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};







