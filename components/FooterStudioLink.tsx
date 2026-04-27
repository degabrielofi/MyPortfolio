'use client';

export default function FooterStudioLink() {
  return (
    <a
      href="https://studio.guebly.com.br"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        opacity: 0.5,
        textDecoration: 'none',
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.5'; }}
    >
      <img
        src="https://studio.guebly.com.br/studio.png"
        alt="Guebly Studio"
        style={{ width: 20, height: 20, objectFit: 'contain' }}
        onError={e => { e.currentTarget.style.display = 'none'; }}
      />
      <span
        style={{
          fontFamily: 'var(--font-ibm)',
          fontSize: 10,
          color: 'var(--color-muted)',
          letterSpacing: '0.06em',
        }}
      >
        Desenvolvido por Guebly Studio
      </span>
    </a>
  );
}
