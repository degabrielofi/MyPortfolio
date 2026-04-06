'use client';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTheme } from 'next-themes';

const LOCALES = [
  { code: 'pt-BR', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' },
];

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    { href: `/${locale}#historia`, label: t('story') },
    { href: `/${locale}/ecossistema`, label: t('ecosystem') },
    { href: `/${locale}/projetos`, label: t('projects') },
    { href: `/${locale}/contato`, label: t('contact') },
  ];

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all .5s',
        ...(scrolled ? { background: 'color-mix(in srgb, var(--color-bg) 82%, transparent)', backdropFilter: 'blur(20px) saturate(1.6)', borderBottom: '1px solid var(--color-bdr)' } : {}),
      }}
    >
      <div style={{ width: '100%', maxWidth: 1060, paddingLeft: 'max(40px, 10vw)', paddingRight: 'max(40px, 10vw)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href={`/${locale}`} className="font-display" style={{ fontWeight: 700, fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'var(--color-tx3)', transition: 'color .3s' }}>
          Gabriel Pereira
        </a>

        <nav style={{ display: 'flex', gap: 24, alignItems: 'center' }} className="max-md:hidden">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="font-display" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase' as const, color: 'var(--color-tx4)', transition: 'color .3s' }}>
              {label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="max-md:hidden" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {LOCALES.map(({ code, label }, i) => (
              <span key={code} style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={() => router.replace(pathname, { locale: code })} className="font-mono" style={{ fontSize: 11, fontWeight: 500, padding: '2px 4px', border: 'none', background: 'none', cursor: 'pointer', color: locale === code ? 'var(--color-ac)' : 'var(--color-tx4)', transition: 'color .3s' }}>
                  {label}
                </button>
                {i < LOCALES.length - 1 && <span style={{ color: 'var(--color-tx4)', fontSize: 10, margin: '0 2px' }}>·</span>}
              </span>
            ))}
          </div>

          {mounted && (
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid var(--color-bdr)', background: 'none', color: 'var(--color-tx4)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .3s' }} aria-label="Toggle theme">
              {theme === 'dark' ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              ) : (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
              )}
            </button>
          )}

          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-ac)', animation: 'pulse 2.5s infinite' }} className="max-md:hidden" />
        </div>
      </div>
    </header>
  );
}
