'use client';
import { useTranslations } from 'next-intl';
import Container from '@/components/Container';
import FadeIn from '@/components/FadeIn';

export default function HistoriaPage() {
  const t = useTranslations('historia');
  const chapters = t.raw('chapters') as Array<{ num: string; year: string; title: string; paragraphs: string[]; quote?: string }>;
  return (
    <section style={{ paddingTop: 160, paddingBottom: 80, position: 'relative', zIndex: 1 }}>
      <Container>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
            <span className="font-mono" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--color-ac)' }}>{t('badge')}</span>
            <span style={{ width: 32, height: 1, background: 'var(--color-bdr)' }} />
          </div>
          <h1 className="font-display" style={{ fontWeight: 900, fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', lineHeight: 1.02, color: 'var(--color-tx)', maxWidth: 700 }}>{t('title')}</h1>
          <p style={{ marginTop: 20, fontSize: 18, color: 'var(--color-tx3)', maxWidth: 560, lineHeight: 1.75 }}>{t('intro')}</p>
        </FadeIn>
        <div style={{ width: 40, height: 1, background: 'var(--color-bdr)', margin: '64px 0' }} />
        {chapters.map((ch, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <article style={{ marginBottom: i < chapters.length - 1 ? 80 : 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                <span className="font-mono" style={{ fontSize: 48, fontWeight: 500, color: 'var(--color-ac)', opacity: 0.25, lineHeight: 1 }}>{ch.num}</span>
                <div><div className="font-mono" style={{ fontSize: 11, color: 'var(--color-tx4)', letterSpacing: '.08em' }}>{ch.year}</div><div style={{ width: 40, height: 1, background: 'var(--color-bdr)', marginTop: 4 }} /></div>
              </div>
              <h2 className="font-display" style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', lineHeight: 1.12, color: 'var(--color-tx)', marginBottom: 28, maxWidth: 600 }}>{ch.title.replace(/\\n/g, ' ')}</h2>
              <div style={{ maxWidth: 640 }}>
                {ch.paragraphs.map((p, j) => (<p key={j} style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--color-tx2)', marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: p }} />))}
              </div>
              {ch.quote && (
                <blockquote className="font-display" style={{ marginTop: 32, padding: '24px 0 24px 24px', borderLeft: '2px solid var(--color-ac3)', fontWeight: 800, fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', lineHeight: 1.35, color: 'var(--color-tx)', maxWidth: 500 }}>{ch.quote}</blockquote>
              )}
              {i === chapters.length - 1 && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 24, padding: '8px 18px', borderRadius: 100, background: 'var(--color-acg)', border: '1px solid rgba(168,85,247,.15)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-ac)', animation: 'pulse 2s infinite' }} />
                  <span className="font-mono" style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--color-ac)', fontWeight: 500 }}>{t('now')}</span>
                </div>
              )}
              {i < chapters.length - 1 && <div style={{ width: 40, height: 1, background: 'var(--color-bdr)', marginTop: 48 }} />}
            </article>
          </FadeIn>
        ))}
      </Container>
    </section>
  );
}
