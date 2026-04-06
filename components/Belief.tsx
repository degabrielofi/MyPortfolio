'use client';
import { useTranslations } from 'next-intl';
import FadeIn from '@/components/ui/FadeIn';
import Container from '@/components/Container';

export default function Belief() {
  const t = useTranslations('belief');

  return (
    <section
      style={{
        paddingTop: 'clamp(120px, 16vh, 200px)',
        paddingBottom: 'clamp(120px, 16vh, 200px)',
        background: 'var(--color-bg)',
      }}
    >
      <Container className="text-center">
        <FadeIn>
          {/* Decorative line */}
          <div
            style={{
              width: 40,
              height: 1,
              background: 'var(--color-accent)',
              margin: '0 auto 48px',
            }}
          />

          <p
            className="font-display"
            style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.18,
              color: 'var(--color-text)',
              maxWidth: 720,
              margin: '0 auto',
            }}
          >
            &ldquo;{t('quote')}&rdquo;
          </p>

          <p
            className="font-mono"
            style={{
              marginTop: 32,
              fontSize: 12,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
            }}
          >
            — Gabriel Pereira
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
