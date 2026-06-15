export default function Footer({ brand }) {
  return (
    <footer className="footer">
      <div className="footer__logo-top">DISTRITO PIPA</div>
      <div className="footer__logo-script">Brand Brain</div>
      <p className="footer__tagline">{brand.tagline}</p>
      <div className="footer__divider" />
      <p className="footer__copy">© 2026 Distrito Pipa. Todos los derechos reservados. | Región 96, Cancún, México</p>
    </footer>
  );
}
