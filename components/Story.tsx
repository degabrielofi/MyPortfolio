'use client';
import { useTranslations, useLocale } from 'next-intl';
import Container from './Container';
import FadeIn from './FadeIn';

export default function Story() {
  const t = useTranslations('story');
  const th = useTranslations('historia');
  const locale = useLocale();
  const chapters = th.raw('chapters') as Array<{ num: string; year: string; title: string; paragraphs: string[]; quote?: string }>;

  return (
    <section id="historia" style={{ padding: '160px 0', borderBottom: '1px solid var(--color-bdr)', position: 'relative', zIndex: 1 }}>
      <Container>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
            <span className="font-mono" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--color-ac)' }}>{t('badge')}</span>
            <span style={{ width: 32, height: 1, background: 'var(--color-bdr)' }} />
          </div>
        </FadeIn>
        <FadeIn>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 48 }}>
            <div>
              <h2 className="font-display" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-tx)', lineHeight: 1.1, marginBottom: 16 }}>A história completa.</h2>
              <p style={{ fontSize: 15.5, color: 'var(--color-tx3)', maxWidth: 540, lineHeight: 1.75 }}>{th('intro')}</p>
            </div>
            <a href={`/${locale}/historia`} className="font-mono" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.04em', color: 'var(--color-ac)', padding: '6px 14px', border: '1px solid var(--color-bdr)', borderRadius: 100, transition: 'all .3s' }}>Ler completa</a>
          </div>
        </FadeIn>

        {chapters.map((ch, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div style={{ marginBottom: i < chapters.length - 1 ? 48 : 0, paddingBottom: i < chapters.length - 1 ? 48 : 0, borderBottom: i < chapters.length - 1 ? '1px solid var(--color-bdr)' : 'none' }}>
              <div className="font-mono" style={{ fontSize: 11, color: 'var(--color-ac)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 8 }}>{ch.year}</div>
              <h3 className="font-display" style={{ fontWeight: 700, fontSize: 20, color: 'var(--color-tx)', marginBottom: 14, lineHeight: 1.3 }}>{ch.title.replace(/\\n/g, ' ')}</h3>
              {ch.paragraphs.map((p, j) => (
                <p key={j} style={{ fontSize: 15.5, color: 'var(--color-tx3)', lineHeight: 1.8, maxWidth: 600, marginBottom: j < ch.paragraphs.length - 1 ? 12 : 0 }} dangerouslySetInnerHTML={{ __html: p.replace(/<strong>/g, '<strong style="color:var(--color-tx2);font-weight:500">') }} />
              ))}
              {ch.quote && (
                <div className="font-display" style={{ marginTop: 20, padding: '16px 0 16px 20px', borderLeft: '2px solid var(--color-ac3)', fontWeight: 700, fontSize: 17, color: 'var(--color-tx)', maxWidth: 480, lineHeight: 1.45 }}>{ch.quote}</div>
              )}
              {i === chapters.length - 1 && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16, padding: '6px 14px', borderRadius: 100, background: 'var(--color-acg)' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-ac)', animation: 'pulse 2s infinite' }} />
                  <span className="font-mono" style={{ fontSize: 11, color: 'var(--color-ac)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{t('now')}</span>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </Container>
    </section>
  );
}
