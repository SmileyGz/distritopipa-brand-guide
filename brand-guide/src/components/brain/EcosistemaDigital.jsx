export default function EcosistemaDigital({ brand }) {
  const { ecosistema } = brand;

  return (
    <section id="ecosistema" className="section section--gray">
      <div className="container">
        <div className="section__header fade-in">
          <span className="section__tag">Plataformas</span>
          <h2 className="section__title">ECOSISTEMA DIGITAL</h2>
          <p className="section__subtitle">Cada plataforma tiene un rol específico. No se mezclan funciones.</p>
        </div>

        <div className="grid-3 fade-in">
          {ecosistema.map((item, i) => (
            <div key={i} className="eco-card">
              <span className="eco-card__icon">{item.icono}</span>
              <div className="eco-card__plataforma">{item.plataforma.toUpperCase()}</div>
              <div className="eco-card__rol">{item.rol}</div>
              <p className="eco-card__uso">{item.uso}</p>
            </div>
          ))}
        </div>

        <div className="callout callout--warning fade-in" style={{ marginTop: 40 }}>
          <span className="callout__icon">⚠️</span>
          <p className="callout__text">
            <strong>Regla de ecosistema:</strong> WhatsApp NO es para prospectar. Es exclusivamente para
            confirmar pedidos, enviar comprobantes y dar seguimiento post-venta. El tráfico entra por
            Facebook Marketplace.
          </p>
        </div>
      </div>
    </section>
  );
}
