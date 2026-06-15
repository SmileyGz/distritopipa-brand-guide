import { useEffect, useRef, useState } from 'react';

function ScoreBar({ puntaje, max }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth((puntaje / max) * 100); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [puntaje, max]);

  return (
    <div className="score-bar" ref={ref}>
      <div className="score-bar__fill" style={{ width: `${width}%` }} />
    </div>
  );
}

export default function SistemaCrecimiento({ brand }) {
  const { crecimiento } = brand;

  return (
    <section id="crecimiento" className="section section--gray">
      <div className="container">
        <div className="section__header fade-in">
          <span className="section__tag">Escala</span>
          <h2 className="section__title">SISTEMA DE CRECIMIENTO</h2>
          <p className="section__subtitle">Metas concretas en orden. Sin likes, sin seguidores — pedidos reales.</p>
        </div>

        <div className="grid-2 fade-in" style={{ gap: 48, alignItems: 'start' }}>
          {/* Roadmap */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: 2, marginBottom: 32, color: 'var(--color-negro)' }}>
              ROADMAP DE METAS
            </h3>
            <div className="roadmap">
              {crecimiento.roadmap.map((paso, i) => (
                <div key={i} className="roadmap-step">
                  <div className="roadmap-step__dot">{paso.paso}</div>
                  <div className="roadmap-step__content">
                    <div className={`roadmap-step__meta roadmap-step__meta--pending`}>
                      Paso {paso.paso} — Pendiente
                    </div>
                    <div className="roadmap-step__title">{paso.meta.toUpperCase()}</div>
                    <p className="roadmap-step__desc">{paso.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scorecard */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: 2, marginBottom: 32, color: 'var(--color-negro)' }}>
              SCORECARD — JUNIO 2026
            </h3>
            <div className="scorecard">
              {crecimiento.scorecard.map((s, i) => (
                <div key={i} className="score-item">
                  <div className="score-item__header">
                    <span className="score-item__area">{s.area.toUpperCase()}</span>
                    <span className="score-item__value">{s.puntaje}/{s.max}</span>
                  </div>
                  <ScoreBar puntaje={s.puntaje} max={s.max} />
                  <p className="score-item__nota">{s.nota}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
