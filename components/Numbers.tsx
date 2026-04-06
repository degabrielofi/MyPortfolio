'use client';
import { useTranslations } from 'next-intl';
import { useRef, useEffect, useState } from 'react';
import Container from './Container';

function Counter({ target }: { target: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !counted.current) {
        counted.current = true;
        let c = 0;
        const s = Math.max(1, Math.ceil(target / 25));
        const i = setInterval(() => { c = Math.min(c + s, target); setVal(c); if (c >= target) clearInterval(i); }, 35);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <div ref={ref} className="font-display" style={{ fontWeight: 900, fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: 'var(--color-tx)', lineHeight: 1 }}>{val}</div>;
}

export default function Numbers() {
  const t = useTranslations('numbers');
  const items = t.raw('items') as Array<{ value: string; label: string }>;
  return (
    <section style={{ padding: '80px 0', borderBottom: '1px solid var(--color-bdr)', background: 'var(--color-bg2)', position: 'relative', zIndex: 1 }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} className="max-[600px]:grid-cols-2 max-[600px]:gap-y-9">
          {items.map((item, i) => (
            <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
              <Counter target={parseInt(item.value)} />
              <div className="font-mono" style={{ marginTop: 6, fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--color-tx4)' }}>{item.label}</div>
              {i < items.length - 1 && <div style={{ position: 'absolute', right: 0, top: '10%', height: '80%', width: 1, background: 'var(--color-bdr)' }} className="max-[600px]:hidden" />}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
