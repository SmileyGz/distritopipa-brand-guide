export default function ValoresMarca({ brand }) {
  const { valores, mision } = brand;

  return (
    <section id="valores" className="section section--gray">
      <div className="container">
        <div className="section__header fade-in">
          <span className="section__tag">Esencia</span>
          <h2 className="section__title">VALORES DE MARCA</h2>
          <p className="section__subtitle">Los principios que guían cada decisión de negocio y comunicación.</p>
        </div>

        <div className="grid-4 fade-in">
          {valores.map((v, i) => (
            <div key={i} className="valor-card">
              <span className="valor-card__icon">{v.icono}</span>
              <div className="valor-card__title">{v.titulo.toUpperCase()}</div>
              <p className="valor-card__desc">{v.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="mision-banner fade-in">
          <div className="mision-banner__label">Misión</div>
          <p className="mision-banner__text">"{mision}"</p>
        </div>
      </div>
    </section>
  );
}
