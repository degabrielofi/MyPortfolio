import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Outfit, Newsreader, IBM_Plex_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Effects from '@/components/Effects';
import '../globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader', display: 'swap', weight: ['300','400','500','600'] });
const ibm = IBM_Plex_Mono({ subsets: ['latin'], variable: '--font-ibm', display: 'swap', weight: ['400','500'] });

export const metadata: Metadata = {
  title: 'Gabriel Pereira — Fundador & CEO da Guebly',
  description: '19 anos. Autodidata. Da periferia de São Paulo a uma holding de tecnologia com 4 CNPJs e 14 unidades de negócio.',
  icons: { icon: '/favicon-logo.png' },
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) notFound();
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return (
    <html lang={locale} suppressHydrationWarning className={`${outfit.variable} ${newsreader.variable} ${ibm.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Effects />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
