'use client';
import { useTranslations, useLocale } from 'next-intl';
import Container from './Container';
import FadeIn from './FadeIn';

const logos: Record<string, string> = {
  'Guebly Studio': 'https://www.guebly.com.br/static/media/icon.fcd35f208b00195e8b83.png',
  'Guebly Pay': 'https://pay.guebly.com.br/logo.png',
  'Plataforma Contábil': 'https://www.guebly.com.br/static/media/icon.4f6075887e5438ff3c7a.png',
  'Trocaí': 'https://www.guebly.com.br/static/media/icon.0ed38af3e1fecaed9e9d.png',
  'Guebly Games': 'https://www.guebly.com.br/static/media/icon.48da9786c064d3a7c187.png',
  'Ayon': 'https://www.guebly.com.br/ayon.png',
  'Sentrion': 'https://www.sentrion.com.br/logo-square.png',
  'Guebly Contábil': 'https://www.guebly.com.br/static/media/icon.4f6075887e5438ff3c7a.png',
};

const allVentures = [
  { name: 'Guebly Studio', status: 'live', url: 'https://studio.guebly.com.br' },
  { name: 'Guebly Pay', status: 'live', url: 'https://pay.guebly.com.br' },
  { name: 'Guebly Contábil', status: 'live' },
  { name: 'Trocaí', status: 'dev', year: '2025' },
  { name: 'Guebly Games', status: 'dev', year: '2025' },
  { name: 'Ayon', status: 'dev', sector: 'Audiovisual' },
  { name: 'Sentrion', status: 'dev', sector: 'Segurança', url: 'https://sentrion.com.br' },
];

export default function Ventures() {
  const t = useTranslations('ecossistema');
  const locale = useLocale();
  return (
    <section id="ventures" style={{ padding: '160px 0', borderBottom: '1px solid var(--color-bdr)', position: 'relative', zIndex: 1 }}>
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
              <h2 className="font-display" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-tx)', lineHeight: 1.1, marginBottom: 12 }}>Ventures.</h2>
              <p style={{ fontSize: 15.5, color: 'var(--color-tx3)', maxWidth: 500, lineHeight: 1.75 }}>{t('subtitle')}</p>
            </div>
            <a href={`/${locale}/ecossistema`} className="font-mono" style={{ fontSize: 11, fontWeight: 500, color: 'var(--color-ac)', padding: '6px 14px', border: '1px solid var(--color-bdr)', borderRadius: 100, transition: 'all .3s' }}>{t('viewEcosystem')}</a>
          </div>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }} className="max-[600px]:grid-cols-2 max-[380px]:grid-cols-1">
          {allVentures.map((v, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              {v.url ? (
                <a href={v.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '28px 16px', borderRadius: 16, background: 'var(--color-bg2)', border: '1px solid var(--color-bdr)', transition: 'all .3s', textAlign: 'center', cursor: 'pointer', textDecoration: 'none' }}>
                {logos[v.name] ? (
                  <img src={logos[v.name]} alt="" style={{ width: 52, height: 52, borderRadius: 14, border: '1px solid var(--color-bdr)', objectFit: 'cover', display: 'block', flexShrink: 0 }} onError={(e) => { (e.currentTarget as HTMLImageElement).outerHTML = `<span class="font-display" style="width:52px;height:52px;border-radius:14px;border:1px solid var(--color-bdr);display:flex;align-items:center;justify-content:center;background:var(--color-bg4);font-weight:900;font-size:18px;color:var(--color-ac)">${v.name[0]}</span>`; }} />
                ) : (
                  <span className="font-display" style={{ width: 52, height: 52, borderRadius: 14, border: '1px solid var(--color-bdr)', background: 'var(--color-bg4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: 'var(--color-ac)', flexShrink: 0 }}>{v.name[0]}</span>
                )}
                <div className="font-display" style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-tx)' }}>{v.name}</div>
                {v.status === 'live' ? (
                  <div className="font-mono" style={{ fontSize: 10, color: 'var(--color-ac)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--color-ac)', animation: 'pulse 2s infinite' }} />
                    {t('live')}
                  </div>
                ) : (
                  <div className="font-mono" style={{ fontSize: 10, color: 'var(--color-tx4)' }}>{(v as { year?: string; sector?: string }).year || (v as { year?: string; sector?: string }).sector}</div>
                )}
                </a>
              ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '28px 16px', borderRadius: 16, background: 'var(--color-bg2)', border: '1px solid var(--color-bdr)', transition: 'all .3s', textAlign: 'center', cursor: 'default' }}>
                {logos[v.name] ? (
                  <img src={logos[v.name]} alt="" style={{ width: 52, height: 52, borderRadius: 14, border: '1px solid var(--color-bdr)', objectFit: 'cover', display: 'block', flexShrink: 0 }} onError={(e) => { (e.currentTarget as HTMLImageElement).outerHTML = `<span class="font-display" style="width:52px;height:52px;border-radius:14px;border:1px solid var(--color-bdr);display:flex;align-items:center;justify-content:center;background:var(--color-bg4);font-weight:900;font-size:18px;color:var(--color-ac)">${v.name[0]}</span>`; }} />
                ) : (
                  <span className="font-display" style={{ width: 52, height: 52, borderRadius: 14, border: '1px solid var(--color-bdr)', background: 'var(--color-bg4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: 'var(--color-ac)', flexShrink: 0 }}>{v.name[0]}</span>
                )}
                <div className="font-display" style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-tx)' }}>{v.name}</div>
                {v.status === 'live' ? (
                  <div className="font-mono" style={{ fontSize: 10, color: 'var(--color-ac)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--color-ac)', animation: 'pulse 2s infinite' }} />
                    {t('live')}
                  </div>
                ) : (
                  <div className="font-mono" style={{ fontSize: 10, color: 'var(--color-tx4)' }}>{v.year || v.sector}</div>
                )}
              </div>
              )}
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
