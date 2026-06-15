export default function ComponentesUI({ brand }) {
  const { badges } = brand;

  return (
    <section id="componentes" className="section section--white">
      <div className="container">
        <div className="section__header fade-in">
          <span className="section__tag">UI Kit</span>
          <h2 className="section__title">COMPONENTES DE DISEÑO</h2>
          <p className="section__subtitle">Elementos visuales reutilizables que conforman la identidad en pantalla.</p>
        </div>

        {/* Botones */}
        <div className="fade-in" style={{ marginBottom: 56 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 2, marginBottom: 24, color: 'var(--color-negro)' }}>
            BOTONES
          </h3>
          <div className="grid-3">
            <div className="component-showcase">
              <div className="component-showcase__title">PRIMARY</div>
              <button className="btn btn--primary btn--full">Ver Catálogo</button>
              <p className="component-showcase__note">Rojo Eléctrico, texto blanco. Para CTAs principales.</p>
            </div>
            <div className="component-showcase">
              <div className="component-showcase__title">SECONDARY</div>
              <button className="btn btn--secondary btn--full">Más Información</button>
              <p className="component-showcase__note">Borde oscuro, fondo transparente. Acciones secundarias.</p>
            </div>
            <div className="component-showcase">
              <div className="component-showcase__title">GHOST</div>
              <button className="btn btn--ghost btn--full">Explorar</button>
              <p className="component-showcase__note">Texto rojo, sin borde. Acciones terciarias o de navegación.</p>
            </div>
          </div>
        </div>

        {/* Tarjetas */}
        <div className="fade-in" style={{ marginBottom: 56 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 2, marginBottom: 24, color: 'var(--color-negro)' }}>
            TARJETAS
          </h3>
          <div className="grid-3">
            {[
              { titulo: 'Logística Propia', desc: 'Controlamos cada entrega para garantizar confianza.' },
              { titulo: 'Región 96', desc: 'Nacimos en Cancún. Conocemos el barrio y sus rutas.' },
              { titulo: 'Disponibilidad', desc: 'Siempre activos. Entregas rápidas y seguras.' },
            ].map((c, i) => (
              <div key={i} className="card card--accent">
                <div className="card__title">{c.titulo.toUpperCase()}</div>
                <p className="card__body">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="fade-in">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 2, marginBottom: 24, color: 'var(--color-negro)' }}>
            BADGES
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {badges.map((b) => (
              <span key={b} className="badge-tag">{b}</span>
            ))}
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: 'var(--color-gris-texto)' }}>
            Fondo rojo suave, texto rojo. Efecto hover: fondo rojo sólido, texto blanco.
          </p>
        </div>
      </div>
    </section>
  );
}
