export default function Posicionamiento({ brand }) {
  const { posicionamiento } = brand;

  return (
    <section id="posicionamiento" className="section section--white">
      <div className="container">
        <div className="section__header fade-in">
          <span className="section__tag">Estrategia</span>
          <h2 className="section__title">POSICIONAMIENTO</h2>
          <p className="section__subtitle">{posicionamiento.declaracion}</p>
        </div>

        <div className="grid-2 fade-in" style={{ gap: 40, marginBottom: 48 }}>
          {/* Tabla de competencia */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 2, marginBottom: 20, color: 'var(--color-negro)' }}>
              MAPA COMPETITIVO
            </h3>
            <table className="comp-table">
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Descripción</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                {posicionamiento.competencia.map((c, i) => (
                  <tr key={i}>
                    <td>{c.tipo}</td>
                    <td>{c.descripcion}</td>
                    <td>{c.problema}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Ventajas */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 2, marginBottom: 20, color: 'var(--color-negro)' }}>
              VENTAJA CANCÚN
            </h3>
            <div className="ventajas-list">
              {posicionamiento.ventajas.map((v, i) => (
                <div className="ventaja-item" key={i}>
                  <div className="ventaja-item__check">✓</div>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categorías */}
        <div className="fade-in">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 2, marginBottom: 20, color: 'var(--color-negro)' }}>
            CATEGORÍAS DE PRODUCTO
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {brand.categorias.map((cat, i) => (
              <div key={i} className="ventaja-item">
                <div className="ventaja-item__check" style={{ background: i === 0 ? 'var(--color-rojo)' : 'var(--color-gris-oscuro)' }}>
                  {i + 1}
                </div>
                <span>{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
