export default function Hero({ brand }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__eyebrow">Fuente única de verdad</span>
        <h1 className="hero__title">DISTRITO</h1>
        <p className="hero__script">Pipa Cancún</p>
        <p className="hero__desc">
          La biblia de marca de Distrito Pipa. Aquí encontrarás la estrategia de negocio,
          la identidad visual y los lineamientos de comunicación para todo lo que construimos.
        </p>
        <div className="hero__north-star">
          <p className="hero__north-star-label">⭐ North Star</p>
          <p className="hero__north-star-text">"{brand.northStar}"</p>
        </div>
      </div>
    </section>
  );
}
