'use client';
import { useTranslations } from 'next-intl';
import Container from '@/components/Container';
import FadeIn from '@/components/FadeIn';

interface Sub { name: string; sector: string; status: 'live' | 'dev' }
interface Branch { name: string; type: string; description: string; subs: Sub[] }

export default function EcossistemaPage() {
  const t = useTranslations('ecossistema');
  const branches = t.raw('branches') as Branch[];
  return (
    <section style={{ paddingTop: 160, paddingBottom: 80, position: 'relative', zIndex: 1 }}>
      <Container>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
            <span className="font-mono" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--color-ac)' }}>{t('badge')}</span>
            <span style={{ width: 32, height: 1, background: 'var(--color-bdr)' }} />
          </div>
          <h1 className="font-display" style={{ fontWeight: 900, fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', lineHeight: 1, color: 'var(--color-tx)' }}>{t('title')}</h1>
          <p style={{ marginTop: 16, fontSize: 16, color: 'var(--color-tx3)', maxWidth: 540, lineHeight: 1.7 }}>{t('subtitle')}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ background: 'var(--color-bg3)', border: '1px solid var(--color-bdr)', borderRadius: 20, padding: '32px 36px', marginTop: 48, marginBottom: 16, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--color-ac3), var(--color-ac), var(--color-ac2), var(--color-ac3))', opacity: 0.5 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, overflow: 'hidden', border: '1px solid var(--color-bdr)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-acg)' }}>
                <img src="https://guebly.com.br/guebly.png" alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} onError={(e) => { (e.currentTarget as HTMLImageElement).outerHTML = '<span style="font-weight:900;font-size:16px;color:var(--color-ac)">G</span>'; }} />
              </div>
              <h2 className="font-display" style={{ fontWeight: 900, fontSize: 24, color: 'var(--color-tx)' }}>Guebly Holding LTDA</h2>
            </div>
            <p style={{ fontSize: 15, color: 'var(--color-tx3)' }}>{t('holdingDesc')}</p>
            <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[t('holdingType'), 'CNPJ 64.938.092/0001-38', 'São Paulo, SP', 'Gabriel Pereira — CEO'].map(tag => (
                <span key={tag} className="font-mono" style={{ fontSize: 10, color: 'var(--color-tx4)', letterSpacing: '.05em', padding: '5px 14px', borderRadius: 100, background: 'var(--color-acg)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }} className="max-[800px]:grid-cols-1">
          {branches.map((b, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div style={{ background: 'var(--color-bg3)', border: '1px solid var(--color-bdr)', borderRadius: 18, padding: 28, height: '100%', display: 'flex', flexDirection: 'column', transition: 'all .3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <h3 className="font-display" style={{ fontWeight: 700, fontSize: 17, color: 'var(--color-tx)' }}>{b.name}</h3>
                  <span className="font-mono" style={{ fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--color-ac)', padding: '4px 12px', borderRadius: 100, background: 'var(--color-acg)' }}>{b.type}</span>
                </div>
                <p style={{ fontSize: 14, color: 'var(--color-tx3)', lineHeight: 1.6, marginBottom: 16 }}>{b.description}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginTop: 'auto' }}>
                  {b.subs.map((s, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,.015)', border: '1px solid rgba(255,255,255,.025)', transition: 'all .25s' }}>
                      <span className="font-display" style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-tx2)' }}>{s.name}</span>
                      {s.status === 'live' ? (
                        <span className="font-mono" style={{ fontSize: 10, color: 'var(--color-ac)', display: 'flex', alignItems: 'center', gap: 5 }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-ac)', animation: 'pulse 2s infinite' }} />
                          {t('live')}
                        </span>
                      ) : (
                        <span className="font-mono" style={{ fontSize: 10, color: 'var(--color-tx4)' }}>{s.sector}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
