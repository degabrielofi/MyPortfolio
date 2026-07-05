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

const BIRTH = new Date('2006-09-05');
function getAge() {
  const today = new Date();
  let age = today.getFullYear() - BIRTH.getFullYear();
  if (today < new Date(today.getFullYear(), BIRTH.getMonth(), BIRTH.getDate())) age--;
  return age;
}

const META: Record<string, { title: string; description: string }> = {
  'pt-BR': {
    title: 'Gabriel Pereira — Fundador & CEO da Guebly',
    description: `${getAge()} anos. Autodidata. Da periferia de São Paulo a uma holding de tecnologia com 4 CNPJs e 14 unidades de negócio.`,
  },
  'en': {
    title: 'Gabriel Pereira — Founder & CEO of Guebly',
    description: `${getAge()} years old. Self-taught. From the outskirts of São Paulo to a tech holding with 4 companies and 14 business units.`,
  },
  'es': {
    title: 'Gabriel Pereira — Fundador & CEO de Guebly',
    description: `${getAge()} años. Autodidacta. De la periferia de São Paulo a un holding tecnológico con 4 empresas y 14 unidades de negocio.`,
  },
  'it': {
    title: 'Gabriel Pereira — Fondatore & CEO di Guebly',
    description: `${getAge()} anni. Autodidatta. Dalla periferia di São Paulo a una holding tecnologica con 4 aziende e 14 unità di business.`,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = META[locale] ?? META['pt-BR'];
  return {
    title: meta.title,
    description: meta.description,
    icons: { icon: '/icon.png' },
    metadataBase: new URL('https://me.degabrielofi.com.br'),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://me.degabrielofi.com.br/${locale}`,
      siteName: 'Gabriel Pereira',
      images: [{ url: '/gabriel.png', width: 800, height: 1000, alt: 'Gabriel Pereira' }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/gabriel.png'],
    },
  };
}

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
