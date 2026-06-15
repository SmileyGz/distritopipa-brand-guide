export default function SistemaProducto({ brand }) {
  const { productos } = brand;

  return (
    <section id="producto" className="section section--gray">
      <div className="container">
        <div className="section__header fade-in">
          <span className="section__tag">Catálogo</span>
          <h2 className="section__title">SISTEMA DE PRODUCTO</h2>
          <p className="section__subtitle">Precios retail por pieza y tarifas de mayoreo para revendedores.</p>
        </div>

        {/* Retail */}
        <div className="fade-in" style={{ marginBottom: 48 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: 2, marginBottom: 24, color: 'var(--color-negro)' }}>
            PRECIOS RETAIL — PIEZA INDIVIDUAL
          </h3>
          <div className="grid-3">
            {productos.retail.map((p, i) => (
              <div
                key={i}
                className={`producto-card ${p.nombre === 'Sencilla' ? 'producto-card--featured' : ''}`}
              >
                {p.nombre === 'Sencilla' && <span className="producto-badge">POPULAR</span>}
                <div className="producto-card__name">{p.nombre.toUpperCase()}</div>
                <div className="producto-card__costo">Costo: ${p.costo} MXN</div>
                {p.venta ? (
                  <>
                    <div className="producto-card__precio">${p.venta}</div>
                    <div className="producto-card__precio-label">MXN / pieza</div>
                    <div style={{ marginTop: 16, fontSize: 13, color: '#22C55E', fontWeight: 700 }}>
                      Margen ~{p.margen}%
                    </div>
                  </>
                ) : (
                  <div style={{ fontSize: 14, color: 'var(--color-gris-texto)', marginTop: 12 }}>
                    Precio a definir
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mayoreo */}
        <div className="fade-in">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: 2, marginBottom: 24, color: 'var(--color-negro)' }}>
            MAYOREO — PRECIO POR DOCENA
          </h3>
          <div style={{ maxWidth: 520 }}>
            <table className="mayoreo-table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio por Pieza</th>
                  <th>Por Docena</th>
                </tr>
              </thead>
              <tbody>
                {productos.mayoreo.map((p, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>{p.nombre}</td>
                    <td>${p.precioPorPieza} MXN/pz</td>
                    <td>${p.precioPorPieza * 12} MXN</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="callout callout--info" style={{ maxWidth: 520, marginTop: 20 }}>
            <span className="callout__icon">ℹ️</span>
            <p className="callout__text">
              El sistema de mayoreo activa el canal de revendedores — Meta 3 del roadmap de crecimiento.
              Nuevas líneas de producto se documentarán aquí al momento de lanzarse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
