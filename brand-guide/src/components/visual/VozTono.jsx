export default function VozTono({ brand }) {
  const { voz } = brand;

  return (
    <section id="voz" className="section section--white">
      <div className="container">
        <div className="section__header fade-in">
          <span className="section__tag">Comunicación</span>
          <h2 className="section__title">VOZ & TONO</h2>
          <p className="section__subtitle">Cómo habla Distrito Pipa — en todos los canales, siempre coherente.</p>
        </div>

        {/* Voz + Tono por canal */}
        <div className="grid-2 fade-in" style={{ marginBottom: 48 }}>
          <div className="voice-card">
            <div className="voice-card__title">VOZ DE MARCA</div>
            <p className="voice-card__body">{voz.descripcion}</p>
            <ul className="voice-list">
              {voz.atributos.map((a, i) => (
                <li key={i} className="voice-list__item">{a}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="voice-card__title" style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 2, marginBottom: 20 }}>
              TONO POR CANAL
            </div>
            <table className="tone-table">
              <thead>
                <tr>
                  <th>Canal</th>
                  <th>Tono</th>
                </tr>
              </thead>
              <tbody>
                {voz.tonoPorCanal.map((t, i) => (
                  <tr key={i}>
                    <td>{t.canal}</td>
                    <td style={{ color: 'var(--color-negro)' }}>{t.tono}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ejemplos */}
        <div className="fade-in">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 2, marginBottom: 24, color: 'var(--color-negro)' }}>
            EJEMPLOS DE COMUNICACIÓN
          </h3>
          <div className="grid-2">
            {voz.ejemplos.map((e, i) => (
              <div key={i} className={`example-block example-block--${e.tipo === 'correcto' ? 'ok' : 'bad'}`}>
                <div className="example-block__label">
                  {e.tipo === 'correcto' ? '✓ Correcto' : '✗ Incorrecto'}
                </div>
                <p className="example-block__quote">{e.texto}</p>
                <p className="example-block__note">{e.nota}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
