'use client';
import { useTranslations } from 'next-intl';
import Container from './Container';
import FadeIn from './FadeIn';

export default function Quote() {
  const t = useTranslations('belief');
  return (
    <section style={{ padding: '140px 0', textAlign: 'center', position: 'relative', overflow: 'hidden', zIndex: 1 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, var(--color-acg) 0%, transparent 50%)', pointerEvents: 'none' }} />
      <Container>
        <FadeIn>
          <p className="font-body" style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(20px, 3.5vw, 28px)', lineHeight: 1.5, color: 'var(--color-tx)', maxWidth: 560, margin: '0 auto', position: 'relative' }}>
            &ldquo;{t('quoteStart')}<em style={{ fontStyle: 'normal', color: 'var(--color-ac)' }}>{t('quoteEnd')}</em>&rdquo;
          </p>
          <p className="font-mono" style={{ marginTop: 16, fontSize: 12, color: 'var(--color-tx4)', letterSpacing: '.08em', position: 'relative' }}>— Gabriel Pereira</p>
        </FadeIn>
      </Container>
    </section>
  );
}
