import { getTranslations } from 'next-intl/server';
import Container from './Container';

export default async function Footer() {
  const t = await getTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer style={{ padding: '24px 0', borderTop: '1px solid var(--color-bdr)', background: 'var(--color-bg2)', position: 'relative', zIndex: 1 }}>
      <Container className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono" style={{ fontSize: 11, color: 'var(--color-tx4)' }}>
          © {year} Gabriel Pereira · {t('rights')}
        </span>
        <a href="https://studio.guebly.com.br" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, opacity: 0.4, transition: 'opacity .3s' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.4')}>
          <img src="https://studio.guebly.com.br/studio.png" alt="Guebly Studio" style={{ width: 16, height: 16, borderRadius: 4 }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <span className="font-mono" style={{ fontSize: 10, color: 'var(--color-tx4)' }}>Guebly Studio</span>
        </a>
      </Container>
    </footer>
  );
}
