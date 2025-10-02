import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Chatbot from '@/components/chat/Chatbot';
import LoadingProvider from '@/components/loading/LoadingProvider';
import "./globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "ALAM - Alliance des Loyaux et Adeptes de Mahdi",
  description: "Consortium d'organisations multisectorielles caractérisé par un système d'administration socioéconomique centralisé aux dimensions internationales.",
  icons: {
    icon: [
      { url: '/images/logo_alam_00.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo_alam_00.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/images/logo_alam_00.png',
    apple: [
      { url: '/images/logo_alam_00.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  openGraph: {
    title: "ALAM - Alliance des Loyaux et Adeptes de Mahdi",
    description: "Consortium d'organisations multisectorielles caractérisé par un système d'administration socioéconomique centralisé aux dimensions internationales.",
    images: ['/images/logo_alam_00.png'],
    siteName: 'ALAM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ALAM - Alliance des Loyaux et Adeptes de Mahdi",
    description: "Consortium d'organisations multisectorielles caractérisé par un système d'administration socioéconomique centralisé aux dimensions internationales.",
    images: ['/images/logo_alam_00.png'],
  },
  manifest: '/manifest.json',
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await params before accessing its properties
  const { locale } = await params;
  
  // S'assurer que la locale entrante est valide
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Fournir tous les messages au côté client
  // est la façon la plus simple de commencer
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <LoadingProvider>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
                <Chatbot />
              </div>
            </LoadingProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


