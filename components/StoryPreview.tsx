'use client';
import { useTranslations, useLocale } from 'next-intl';
import FadeIn from '@/components/ui/FadeIn';
import Container from '@/components/Container';

export default function StoryPreview() {
  const t = useTranslations('story');
  const locale = useLocale();
  const acts = t.raw('acts') as Array<{ year: string; title: string; text: string }>;

  return (
    <section
      id="historia"
      style={{
        paddingTop: 'clamp(120px, 16vh, 200px)',
        paddingBottom: 'clamp(120px, 16vh, 200px)',
        background: 'var(--color-bg)',
      }}
    >
      <Container>
        {/* Label */}
        <FadeIn>
          <div className="section-label">
            <span>{t('badge')}</span>
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.08}>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              color: 'var(--color-text)',
              marginBottom: 8,
            }}
          >
            {t('title')}
          </h2>
          <p
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              color: 'var(--color-text-dim)',
            }}
          >
            {t('subtitle')}
          </p>
        </FadeIn>

        {/* Timeline */}
        <div style={{ marginTop: 80, position: 'relative' }}>
          {/* Vertical line */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              left: 140,
              top: 6,
              bottom: 0,
              width: 1,
              background: 'var(--color-border)',
            }}
            className="hidden md:block"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {acts.map((act, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  style={{
                    display: 'flex',
                    gap: 0,
                    paddingBottom: i < acts.length - 1 ? 64 : 0,
                    position: 'relative',
                  }}
                >
                  {/* Year — desktop */}
                  <div
                    className="hidden md:block"
                    style={{
                      width: 140,
                      paddingRight: 32,
                      textAlign: 'right',
                      flexShrink: 0,
                      paddingTop: 3,
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{
                        fontSize: 12,
                        color: 'var(--color-text-muted)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {act.year}
                    </span>
                  </div>

                  {/* Dot — desktop */}
                  <div
                    className="hidden md:block"
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background:
                        i === acts.length - 1 ? 'var(--color-accent)' : 'var(--color-bg-elevated)',
                      border: `2px solid ${
                        i === acts.length - 1 ? 'var(--color-accent)' : 'var(--color-border)'
                      }`,
                      flexShrink: 0,
                      marginTop: 4,
                      boxShadow:
                        i === acts.length - 1 ? '0 0 18px rgba(168,85,247,0.45)' : 'none',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  />

                  {/* Content */}
                  <div
                    style={{
                      flex: 1,
                      paddingLeft: 40,
                    }}
                    className="pl-0 md:pl-10"
                  >
                    {/* Year — mobile */}
                    <span
                      className="font-mono md:hidden"
                      style={{
                        display: 'block',
                        fontSize: 11,
                        color: 'var(--color-text-muted)',
                        letterSpacing: '0.1em',
                        marginBottom: 8,
                      }}
                    >
                      {act.year}
                    </span>

                    <h3
                      className="font-display"
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: 'var(--color-text)',
                        marginBottom: 10,
                        lineHeight: 1.3,
                      }}
                    >
                      {act.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 16,
                        lineHeight: 1.8,
                        color: 'var(--color-text-body)',
                        maxWidth: 520,
                      }}
                    >
                      {act.text}
                    </p>

                    {i === acts.length - 1 && (
                      <div
                        style={{
                          marginTop: 16,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 8,
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: 'var(--color-accent)',
                            animation: 'pulse 2s infinite',
                          }}
                        />
                        <span
                          className="font-mono"
                          style={{
                            fontSize: 11,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'var(--color-accent)',
                          }}
                        >
                          {t('now')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA */}
        <FadeIn delay={0.35}>
          <div style={{ marginTop: 64, display: 'flex', justifyContent: 'center' }}>
            <a
              href={`/${locale}/historia`}
              className="font-display"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 32px',
                border: '1px solid var(--color-border)',
                borderRadius: 9999,
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--color-text-dim)',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--color-accent)';
                el.style.color = 'var(--color-accent)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--color-border)';
                el.style.color = 'var(--color-text-dim)';
              }}
            >
              {t('readMore')}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
