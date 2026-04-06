'use client';
import { useTranslations } from 'next-intl';
import Container from './Container';
import FadeIn from './FadeIn';

const colors = ['#7c3aed33,#6366f133', '#059669aa,#10b981aa', '#f59e0b33,#eab30833', '#3b82f633,#6366f133', '#ef444433,#f9737333'];

export default function Projects() {
  const t = useTranslations('projetos');
  const items = t.raw('items') as Array<{ name: string; description: string; tech: string[]; url: string }>;
  return (
    <section id="projects" style={{ padding: '160px 0', borderBottom: '1px solid var(--color-bdr)', position: 'relative', zIndex: 1 }}>
      <Container>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
            <span className="font-mono" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--color-ac)' }}>{t('badge')}</span>
            <span style={{ width: 32, height: 1, background: 'var(--color-bdr)' }} />
          </div>
        </FadeIn>
        <FadeIn>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 48 }}>
            <h2 className="font-display" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-tx)', lineHeight: 1.1 }}>Featured Work.</h2>
            <a href="https://github.com/degabrielofi_" target="_blank" className="font-mono" style={{ fontSize: 11, fontWeight: 500, color: 'var(--color-ac)', padding: '6px 14px', border: '1px solid var(--color-bdr)', borderRadius: 100, transition: 'all .3s' }}>{t('github')}</a>
          </div>
        </FadeIn>
        {items.map((p, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', borderRadius: 16, overflow: 'hidden', background: 'var(--color-bg2)', border: '1px solid var(--color-bdr)', marginBottom: i < items.length - 1 ? 20 : 0, transition: 'all .3s' }}>
              <div style={{ width: '100%', height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--color-bdr)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.2, background: `linear-gradient(135deg, ${colors[i % colors.length]})` }} />
                <span className="font-display" style={{ position: 'relative', zIndex: 1, fontWeight: 800, fontSize: 26, color: 'var(--color-tx)', opacity: 0.5 }}>{p.name}</span>
              </div>
              <div style={{ padding: '18px 22px' }}>
                <div className="font-mono" style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 6, fontSize: 11, color: 'var(--color-tx4)' }}>
                  {p.tech.map((tag, j) => (<span key={j}>{j > 0 && <span style={{ margin: '0 4px' }}>·</span>}{tag}</span>))}
                </div>
                <h3 className="font-display" style={{ fontWeight: 600, fontSize: 15, color: 'var(--color-tx)', lineHeight: 1.4 }}>{p.name} — {p.description.split('.')[0]}</h3>
                <p style={{ fontSize: 14, color: 'var(--color-tx3)', marginTop: 4, lineHeight: 1.6 }}>{p.description}</p>
              </div>
            </a>
          </FadeIn>
        ))}
      </Container>
    </section>
  );
}
