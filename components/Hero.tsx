'use client';
import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useRef } from 'react';
import Container from './Container';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const ln1 = useRef<HTMLSpanElement>(null);
  const ln2 = useRef<HTMLSpanElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const photoInner = useRef<HTMLDivElement>(null);
  const magRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Typing done
    setTimeout(() => ln1.current?.classList.add('done'), 1500);
    setTimeout(() => ln2.current?.classList.add('done'), 2800);

    // Photo tilt
    const wrap = photoRef.current, inner = photoInner.current;
    if (wrap && inner) {
      const onMove = (e: MouseEvent) => {
        const r = wrap.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        inner.style.transform = `perspective(800px) rotateY(${x * 25}deg) rotateX(${-y * 25}deg) scale(1.04)`;
      };
      const onLeave = () => { inner.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)'; };
      wrap.addEventListener('mousemove', onMove);
      wrap.addEventListener('mouseleave', onLeave);
    }

    // Magnetic button
    const mag = magRef.current;
    if (mag) {
      const inner2 = mag.querySelector('.mag-inner') as HTMLElement;
      const onMove = (e: MouseEvent) => {
        const r = mag.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        inner2.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
      };
      const onLeave = () => { inner2.style.transform = 'translate(0,0)'; };
      mag.addEventListener('mousemove', onMove);
      mag.addEventListener('mouseleave', onLeave);
    }
  }, []);

  return (
    <section style={{ minHeight: '100dvh', display: 'flex', alignItems: 'flex-start', position: 'relative', overflow: 'hidden', paddingBottom: 72, zIndex: 1 }}>
      <Container className="relative z-[2] w-full pt-[clamp(100px,14vh,160px)]">
        {/* Typing name */}
        <div className="font-display" style={{ fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.03em', marginTop: 'clamp(64px, 12vh, 140px)' }}>
          <span ref={ln1} style={{ display: 'block', fontSize: 'clamp(3.8rem, 10vw, 9rem)', overflow: 'hidden', whiteSpace: 'nowrap' as const, borderRight: '3px solid var(--color-ac)', color: 'var(--color-tx)', width: 0, animation: 'typing 1s steps(7) .4s forwards, blink .6s step-end infinite' }} className="ln">GABRIEL</span>
          <span ref={ln2} style={{ display: 'block', fontSize: 'clamp(3.8rem, 10vw, 9rem)', overflow: 'hidden', whiteSpace: 'nowrap' as const, borderRight: '3px solid var(--color-ac)', color: 'var(--color-ac)', width: 0, animation: 'typing 1.1s steps(8) 1.6s forwards, blink .6s step-end 1.6s infinite' }} className="ln">PEREIRA.</span>
        </div>

        {/* Content grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: 24, alignItems: 'start', marginTop: 28 }} className="md:grid-cols-[1fr_240px] md:gap-[40px] md:items-end">
          <div>
            <p className="font-display" style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase' as const, color: 'var(--color-tx3)', opacity: 0, animation: 'fadeIn .6s 2.8s forwards' }}>{t('role')}</p>
            <p style={{ marginTop: 12, fontSize: 15.5, color: 'var(--color-tx3)', lineHeight: 1.75, maxWidth: 480, opacity: 0, animation: 'fadeIn .6s 3s forwards' }}>{t('description')}</p>
            <p style={{ marginTop: 10, fontSize: 15.5, color: 'var(--color-tx3)', lineHeight: 1.75, maxWidth: 480, opacity: 0, animation: 'fadeIn .6s 3.1s forwards' }}>
              {t('body')}
            </p>

            {/* Buttons */}
            <div style={{ marginTop: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' as const, opacity: 0, animation: 'fadeIn .6s 3.2s forwards' }}>
              <div ref={magRef} style={{ display: 'inline-block', position: 'relative' }}>
                <a href="#historia" className="mag-inner font-display" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: 'linear-gradient(135deg, var(--color-ac), var(--color-ac3))', color: '#fff', fontSize: 13, fontWeight: 700, borderRadius: 100, transition: 'transform .15s, box-shadow .3s' }}>{t('cta')} →</a>
              </div>
              <a href="https://guebly.com.br" target="_blank" className="font-display" style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-tx3)', transition: 'color .3s' }}>guebly.com.br ↗</a>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: 6, marginTop: 14, opacity: 0, animation: 'fadeIn .6s 3.4s forwards' }}>
              {[
                { href: 'https://github.com/degabrielofi_', icon: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' },
                { href: 'https://www.linkedin.com/in/degabrielofi_/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { href: 'https://www.youtube.com/@degabrielofi_', icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                { href: 'https://instagram.com/degabrielofi_', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
              ].map(({ href, icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, border: '1px solid var(--color-bdr)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-tx4)', transition: 'all .25s' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d={icon} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div ref={photoRef} style={{ perspective: 800, opacity: 0, animation: 'fadeIn .8s 2.5s forwards', flexShrink: 0 }} className="max-[860px]:self-start">
            <div ref={photoInner} className="w-[130px] h-[175px] md:w-[220px] md:h-[290px]" style={{ position: 'relative', transition: 'transform .4s', transformStyle: 'preserve-3d' as const }}>
              <div style={{ position: 'absolute', inset: -24, borderRadius: 32, background: 'radial-gradient(circle, var(--color-acg2), transparent 65%)', zIndex: -1, opacity: 0.3, transition: 'opacity .4s' }} />
              <div style={{ width: '100%', height: '100%', borderRadius: 18, overflow: 'hidden', border: '1px solid var(--color-bdr)', background: 'var(--color-bg2)', position: 'relative', zIndex: 1 }}>
                <img src="/gabriel.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling && ((e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block'); }} />
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--color-ac3), var(--color-bg3))', display: 'none' }} />
                <div style={{ position: 'absolute', inset: 0, zIndex: 2, borderRadius: 18, pointerEvents: 'none', opacity: 0, transition: 'opacity .4s', background: 'linear-gradient(135deg, rgba(168,85,247,.12), rgba(99,102,241,.08), rgba(192,132,252,.12))', backgroundSize: '200% 200%', mixBlendMode: 'color-dodge' as const }} className="holo" />
              </div>
              <div style={{ position: 'absolute', top: -5, right: -5, width: 13, height: 13, borderRadius: '50%', background: 'var(--color-ac)', border: '3px solid var(--color-bg)', zIndex: 3 }} />
              <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12, padding: '9px 11px', background: 'color-mix(in srgb, var(--color-bg) 82%, transparent)', backdropFilter: 'blur(12px)', borderRadius: 9, border: '1px solid var(--color-bdr)', fontSize: 10, fontWeight: 600, color: 'var(--color-tx)', display: 'flex', alignItems: 'center', gap: 6, zIndex: 3 }} className="font-display">
                <img src="https://guebly.com.br/guebly.png" alt="" style={{ width: 14, height: 14, borderRadius: 3 }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                CEO · Guebly
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: 48, paddingTop: 18, borderTop: '1px solid var(--color-bdr)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12, opacity: 0, animation: 'fadeIn .6s 3.5s forwards' }}>
          <div>
            <div className="font-mono" style={{ display: 'flex', gap: 14, alignItems: 'center', fontSize: 11, color: 'var(--color-tx4)', letterSpacing: '.06em', textTransform: 'uppercase' as const }}>
              <span>São Paulo</span>
              <span style={{ width: 1, height: 10, background: 'var(--color-bdr)' }} />
              <span>Brasil</span>
              <span style={{ width: 1, height: 10, background: 'var(--color-bdr)' }} />
              <span>{new Date().getFullYear()}</span>
            </div>
            <div className="font-mono" style={{ fontSize: 11, color: 'var(--color-tx4)', marginTop: 4 }}>
              {t('allNetworks')} <a href="https://instagram.com/degabrielofi_" target="_blank" style={{ color: 'var(--color-ac)' }}>@degabrielofi_</a>
            </div>
          </div>
          <div className="font-mono" style={{ fontSize: 11, color: 'var(--color-tx4)', letterSpacing: '.08em', textTransform: 'uppercase' as const, display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ animation: 'float 2s ease-in-out infinite' }}>↓</span>
            <span>{t('scroll')}</span>
          </div>
        </div>
      </Container>
      <style>{`
        .ln.done { border-right-color: transparent !important; animation: none !important; width: auto !important; }
        .holo { }
        *:hover > .holo { opacity: 1 !important; animation: holoShift 3s linear infinite !important; }
      `}</style>
    </section>
  );
}
