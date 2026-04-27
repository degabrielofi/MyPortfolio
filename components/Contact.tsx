'use client';
import { useTranslations } from 'next-intl';
import Container from './Container';
import FadeIn from './FadeIn';

const socials = [
  { href: 'https://www.linkedin.com/in/degabrielofi/', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { href: 'https://github.com/degabrielofi', d: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' },
  { href: 'https://www.youtube.com/@degabrielofi', d: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
];

export default function Contact() {
  const t = useTranslations('contato');
  return (
    <section id="contact" style={{ padding: '160px 0 80px', position: 'relative', zIndex: 1 }}>
      <Container>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
            <span className="font-mono" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--color-ac)' }}>{t('badge')}</span>
            <span style={{ width: 32, height: 1, background: 'var(--color-bdr)' }} />
          </div>
        </FadeIn>
        <FadeIn>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40 }}>
            <div>
              <h2 className="font-display" style={{ fontWeight: 900, fontSize: 'clamp(2.4rem, 6vw, 4rem)', lineHeight: 0.94, color: 'var(--color-tx)' }}>{t('titleLine1')}<br /><em style={{ fontStyle: 'normal', color: 'var(--color-ac)' }}>{t('titleLine2')}</em></h2>
              <p style={{ marginTop: 14, fontSize: 15, color: 'var(--color-tx3)', maxWidth: 380, lineHeight: 1.7 }}>{t('subtitle')}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <div className="font-mono" style={{ fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--color-tx4)', marginBottom: 4 }}>Email</div>
                <a href="mailto:gabriel@guebly.com.br" className="font-display" style={{ fontSize: 15, fontWeight: 500, color: 'var(--color-tx)', transition: 'color .3s' }}>gabriel@guebly.com.br</a>
              </div>
              <div>
                <div className="font-mono" style={{ fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--color-tx4)', marginBottom: 4 }}>Links</div>
                <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                  {socials.map(({ href, d }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ width: 38, height: 38, border: '1px solid var(--color-bdr)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-tx4)', transition: 'all .25s' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
                    </a>
                  ))}
                  <a href="https://guebly.com.br" target="_blank" rel="noopener noreferrer" className="font-display" style={{ height: 38, padding: '0 14px', border: '1px solid var(--color-bdr)', borderRadius: 10, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'var(--color-tx4)', transition: 'all .25s' }}>guebly.com.br ↗</a>
                </div>
                <div className="font-mono" style={{ fontSize: 12, color: 'var(--color-tx4)', marginTop: 6 }}><a href="https://instagram.com/degabrielofi_" target="_blank" style={{ color: 'var(--color-ac)' }}>@degabrielofi_</a> {t('allNetworks')}</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
