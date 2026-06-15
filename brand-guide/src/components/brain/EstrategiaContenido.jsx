export default function EstrategiaContenido({ brand }) {
  const { contenido } = brand;

  return (
    <section id="contenido" className="section section--white">
      <div className="container">
        <div className="section__header fade-in">
          <span className="section__tag">Contenido</span>
          <h2 className="section__title">ESTRATEGIA DE CONTENIDO</h2>
          <p className="section__subtitle">5 pilares que guían todo lo que publicamos.</p>
        </div>

        {/* Meta banner */}
        <div className="meta-banner fade-in">
          <span className="meta-banner__icon">🎯</span>
          <div>
            <div className="meta-banner__label">Meta de contenido</div>
            <div className="meta-banner__text">{contenido.meta}</div>
          </div>
        </div>

        {/* 5 pilares */}
        <div className="grid-3 fade-in" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {contenido.pilares.map((p) => (
            <div key={p.numero} className="pilar-card" data-number={p.numero}>
              <span className="pilar-card__icon">{p.icono}</span>
              <div className="pilar-card__titulo">{`0${p.numero}. ${p.nombre.toUpperCase()}`}</div>
              <p className="pilar-card__desc">{p.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="callout callout--info fade-in" style={{ marginTop: 40 }}>
          <span className="callout__icon">💡</span>
          <p className="callout__text">
            <strong>Voz unificada:</strong> No mezclar motivación, dinero, ventas y memes sin sentido.
            Cada post debe ser clasificable en uno de los 5 pilares y reforzar el North Star.
          </p>
        </div>
      </div>
    </section>
  );
}
