import { getTranslations } from 'next-intl/server';
import Container from './Container';
import FooterStudioLink from './FooterStudioLink';

export default async function Footer() {
  const t = await getTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer style={{ padding: '24px 0', borderTop: '1px solid var(--color-bdr)', background: 'var(--color-bg2)', position: 'relative', zIndex: 1 }}>
      <Container className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono" style={{ fontSize: 11, color: 'var(--color-tx4)' }}>
          © {year} Gabriel Pereira · {t('rights')}
        </span>
        <FooterStudioLink />
      </Container>
    </footer>
  );
}
