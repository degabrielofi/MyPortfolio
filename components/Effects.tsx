'use client';
import { useEffect, useRef } from 'react';

export default function Effects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const meshRef = useRef<HTMLDivElement>(null);
  const curRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });

  useEffect(() => {
    const M = mouse.current;
    const onMove = (e: MouseEvent) => { M.x = e.clientX; M.y = e.clientY; };
    document.addEventListener('mousemove', onMove);

    // ═══ CURSOR ═══
    const cur = curRef.current!, dot = dotRef.current!;
    let cx = 0, cy = 0;
    function animCursor() {
      cx += (M.x - cx) * 0.1;
      cy += (M.y - cy) * 0.1;
      cur.style.left = cx - 10 + 'px';
      cur.style.top = cy - 10 + 'px';
      dot.style.left = M.x - 2.5 + 'px';
      dot.style.top = M.y - 2.5 + 'px';
      requestAnimationFrame(animCursor);
    }
    animCursor();

    // Hover states
    const addBig = () => cur.classList.add('big');
    const remBig = () => cur.classList.remove('big');
    const observe = () => {
      document.querySelectorAll('a,button').forEach(el => {
        el.addEventListener('mouseenter', addBig);
        el.addEventListener('mouseleave', remBig);
      });
    };
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    // ═══ TRAIL ═══
    const TC = 10;
    const trails: { el: HTMLDivElement; x: number; y: number }[] = [];
    for (let i = 0; i < TC; i++) {
      const d = document.createElement('div');
      Object.assign(d.style, {
        position: 'fixed', borderRadius: '50%', pointerEvents: 'none', zIndex: '9999',
        background: 'var(--color-ac)', width: (TC - i) * 0.35 + 'px', height: (TC - i) * 0.35 + 'px', opacity: '0',
      });
      document.body.appendChild(d);
      trails.push({ el: d, x: 0, y: 0 });
    }
    function animTrail() {
      let px = M.x, py = M.y;
      trails.forEach((t, i) => {
        t.x += (px - t.x) * (0.28 - i * 0.014);
        t.y += (py - t.y) * (0.28 - i * 0.014);
        t.el.style.left = t.x - 1 + 'px';
        t.el.style.top = t.y - 1 + 'px';
        t.el.style.opacity = String(0.2 - i * 0.016);
        px = t.x;
        py = t.y;
      });
      requestAnimationFrame(animTrail);
    }
    animTrail();

    // ═══ MESH ═══
    const mesh = meshRef.current!;
    function animMesh() {
      const x = M.x / innerWidth * 100, y = M.y / innerHeight * 100;
      mesh.style.background = `radial-gradient(500px circle at ${x}% ${y}%, var(--color-acg2), transparent 60%)`;
      requestAnimationFrame(animMesh);
    }
    animMesh();

    // ═══ PARTICLES ═══
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let W = canvas.width = innerWidth, H = canvas.height = innerHeight;
    const onResize = () => { W = canvas.width = innerWidth; H = canvas.height = innerHeight; };
    window.addEventListener('resize', onResize);

    class Pt {
      x: number; y: number; ox: number; oy: number; r: number; vx = 0; vy = 0; a: number;
      constructor() {
        this.x = this.ox = Math.random() * W;
        this.y = this.oy = Math.random() * H;
        this.r = Math.random() * 1.3 + 0.3;
        this.a = Math.random() * 0.2 + 0.03;
      }
      update() {
        const dx = this.x - M.x, dy = this.y - M.y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) { const f = (120 - d) / 120 * 1.8; this.vx += dx / d * f; this.vy += dy / d * f; }
        this.vx += (this.ox - this.x) * 0.012; this.vy += (this.oy - this.y) * 0.012;
        this.vx *= 0.94; this.vy *= 0.94; this.x += this.vx; this.y += this.vy;
      }
      draw() {
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        const dk = document.documentElement.classList.contains('light') === false;
        ctx.fillStyle = dk ? `rgba(168,85,247,${this.a})` : `rgba(124,58,237,${this.a * 0.5})`;
        ctx.fill();
      }
    }
    const pts: Pt[] = [];
    for (let i = 0; i < 70; i++) pts.push(new Pt());

    function drawLines() {
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 90) {
          const dk = !document.documentElement.classList.contains('light');
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = dk ? `rgba(168,85,247,${0.03 * (1 - d / 90)})` : `rgba(124,58,237,${0.02 * (1 - d / 90)})`;
          ctx.lineWidth = 0.4; ctx.stroke();
        }
      }
    }
    function animParticles() {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => { p.update(); p.draw(); });
      drawLines();
      requestAnimationFrame(animParticles);
    }
    animParticles();

    return () => {
      document.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      mo.disconnect();
      trails.forEach(t => t.el.remove());
    };
  }, []);

  return (
    <>
      {/* Cursor */}
      <div ref={curRef} id="cur" style={{ position: 'fixed', width: 20, height: 20, border: '1.5px solid var(--color-ac)', borderRadius: '50%', pointerEvents: 'none', zIndex: 10000, transition: 'width .2s, height .2s, margin .2s, background .2s', mixBlendMode: 'difference' }} className="max-md:hidden" />
      <div ref={dotRef} style={{ position: 'fixed', width: 5, height: 5, background: 'var(--color-ac)', borderRadius: '50%', pointerEvents: 'none', zIndex: 10001 }} className="max-md:hidden" />

      {/* Gradient mesh */}
      <div ref={meshRef} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

      {/* Particles */}
      <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

      {/* Aurora */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '200%', height: 300, filter: 'blur(80px)', opacity: 0.06, background: 'linear-gradient(90deg,transparent,var(--color-ac),#6366f1,var(--color-ac2),transparent)', top: '8%', left: '-50%', animation: 'auroraMove1 14s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: '200%', height: 200, filter: 'blur(80px)', opacity: 0.06, background: 'linear-gradient(90deg,transparent,#6366f1,var(--color-ac3),var(--color-ac),transparent)', top: '35%', left: '-30%', animation: 'auroraMove2 18s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: '200%', height: 220, filter: 'blur(80px)', opacity: 0.06, background: 'linear-gradient(90deg,transparent,var(--color-ac2),var(--color-ac),#818cf8,transparent)', bottom: '15%', left: '-40%', animation: 'auroraMove3 22s ease-in-out infinite' }} />
      </div>

      {/* CSS for cursor big state */}
      <style>{`
        #cur.big { width: 55px; height: 55px; margin: -17px 0 0 -17px; background: rgba(168,85,247,.06); }
        @media (max-width: 768px) { #cur, #cur + div { display: none !important; } }
      `}</style>
    </>
  );
}
