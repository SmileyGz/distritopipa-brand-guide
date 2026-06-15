import { useState } from 'react';

export default function IdentidadVisual({ brand, showToast }) {
  const { colores, tipografia } = brand;
  const [copied, setCopied] = useState(null);

  const copyHex = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    showToast(`¡Copiado! ${hex}`);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="identidad" className="section section--gray">
      <div className="container">
        <div className="section__header fade-in">
          <span className="section__tag">Guía Visual</span>
          <h2 className="section__title">IDENTIDAD VISUAL</h2>
          <p className="section__subtitle">Logo, paleta de colores y tipografía que conforman la marca.</p>
        </div>

        {/* Logotipo */}
        <div className="fade-in" style={{ marginBottom: 64 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 2, marginBottom: 24, color: 'var(--color-negro)' }}>
            LOGOTIPO
          </h3>
          <div className="grid-2">
            {/* Light version */}
            <div className="logo-preview logo-preview--light">
              <div style={{ textAlign: 'center' }}>
                <div className="logo-display__name" style={{ color: 'var(--color-negro)' }}>DISTRITO</div>
                <div className="logo-display__script" style={{ color: 'var(--color-rojo)' }}>Pipa</div>
                <div className="logo-display__sub" style={{ color: '#999' }}>CANCÚN</div>
              </div>
            </div>
            {/* Dark version */}
            <div className="logo-preview logo-preview--dark">
              <div style={{ textAlign: 'center' }}>
                <div className="logo-display__name" style={{ color: 'white' }}>DISTRITO</div>
                <div className="logo-display__script" style={{ color: 'var(--color-rojo-light)' }}>Pipa</div>
                <div className="logo-display__sub" style={{ color: 'rgba(255,255,255,0.35)' }}>CANCÚN</div>
              </div>
            </div>
          </div>
          <div className="callout callout--info" style={{ marginTop: 24 }}>
            <span className="callout__icon">ℹ️</span>
            <p className="callout__text">
              <strong>Regla de construcción:</strong> "DISTRITO" en Bebas Neue (bold, uppercase, tracking 8px) y
              "Pipa" en Great Vibes (script elegante). Color primario: Rojo Eléctrico <code>#DC143C</code>.
              Siempre mantener espacio negativo alrededor del logo.
            </p>
          </div>
        </div>

        {/* Paleta */}
        <div className="fade-in" style={{ marginBottom: 64 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 2, marginBottom: 24, color: 'var(--color-negro)' }}>
            PALETA DE COLORES
          </h3>
          <div className="grid-4">
            {colores.map((c) => (
              <div key={c.hex} className="color-swatch" onClick={() => copyHex(c.hex)}>
                <div className="color-swatch__preview" style={{ background: c.hex, border: c.hex === '#FFFFFF' ? '1px solid #eee' : 'none' }} />
                <div className="color-swatch__info">
                  <div className="color-swatch__name">{c.nombre}</div>
                  <div className="color-swatch__rol">{c.rol}</div>
                  <div className="color-swatch__hex">
                    <span>{c.hex}</span>
                    {copied === c.hex
                      ? <span style={{ marginLeft: 'auto', color: '#22c55e', fontSize: 11, fontWeight: 700 }}>✓ Copiado</span>
                      : <span style={{ marginLeft: 'auto', fontSize: 11, color: '#999' }}>copiar</span>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tipografía */}
        <div className="fade-in">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 2, marginBottom: 24, color: 'var(--color-negro)' }}>
            TIPOGRAFÍA
          </h3>
          <div className="grid-3">
            {tipografia.map((t, i) => (
              <div key={i} className="typo-card">
                {i === 0 && <div className="typo-card__sample-display">BEBAS NEUE</div>}
                {i === 1 && <div className="typo-card__sample-script">Great Vibes</div>}
                {i === 2 && <div className="typo-card__sample-inter">Inter — Cuerpo de texto claro y legible.</div>}
                <p style={{ fontSize: 14, color: 'var(--color-gris-texto)', marginBottom: 16, lineHeight: 1.6 }}>{t.descripcion}</p>
                <div className="typo-card__meta">
                  <div><strong>Uso:</strong> {t.uso}</div>
                  <div><strong>Peso:</strong> {t.peso}</div>
                  <div><strong>Tipo:</strong> {t.tipo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
