export default function ExperienciaCompra({ brand }) {
  const { entrega } = brand;

  return (
    <section id="entrega" className="section section--dark">
      <div className="container">
        <div className="section__header fade-in">
          <span className="section__tag" style={{ color: 'var(--color-rojo-light)' }}>Logística</span>
          <h2 className="section__title">EXPERIENCIA DE COMPRA</h2>
          <p className="section__subtitle">Sistema de entregas, tarifas y anticipo que filtra compradores serios.</p>
        </div>

        <div className="entrega-grid fade-in">
          {/* Puntos presenciales */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: 2, marginBottom: 20, color: 'white' }}>
              ENTREGA EN PERSONA
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {entrega.puntosPresenciales.map((punto, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  display: 'flex', alignItems: 'center', gap: 14,
                  fontSize: 14, color: 'rgba(255,255,255,0.8)'
                }}>
                  <span style={{ fontSize: 22 }}>📍</span>
                  <span>{punto}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tarifas */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: 2, marginBottom: 20, color: 'white' }}>
              TARIFAS DE ENVÍO
            </h3>
            <table className="tarifa-table">
              <thead>
                <tr>
                  <th>Distancia</th>
                  <th>Día</th>
                  <th>Después 8 PM</th>
                </tr>
              </thead>
              <tbody>
                {entrega.tarifas.map((t, i) => (
                  <tr key={i}>
                    <td>{t.distancia}</td>
                    <td>${t.dia}</td>
                    <td>${t.noche}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Anticipo */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: 2, marginBottom: 20, color: 'white' }}>
              ANTICIPO
            </h3>
            <div className="anticipo-card">
              <div className="anticipo-card__amount">${entrega.anticipo.monto}</div>
              <div className="anticipo-card__label">MXN de anticipo</div>
              <p className="anticipo-card__note">{entrega.anticipo.nota}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
