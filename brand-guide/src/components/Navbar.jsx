import { useState, useEffect } from 'react';

export default function Navbar({ activeTab, setActiveTab, sections }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections, activeTab]);

  return (
    <nav className="navbar" style={{ borderBottomColor: scrolled ? 'rgba(255,255,255,0.1)' : 'transparent' }}>
      <div className="container navbar__inner">
        <div className="navbar__logo">
          <div className="navbar__logo-badge">DP</div>
          <div>
            <div className="navbar__logo-text-top">DISTRITO</div>
            <div className="navbar__logo-text-bot">Pipa</div>
          </div>
        </div>

        <div className="navbar__tabs">
          <button
            className={`navbar__tab ${activeTab === 'brain' ? 'active' : ''}`}
            onClick={() => setActiveTab('brain')}
          >
            🧠 Brand Brain
          </button>
          <button
            className={`navbar__tab ${activeTab === 'visual' ? 'active' : ''}`}
            onClick={() => setActiveTab('visual')}
          >
            🎨 Guía Visual
          </button>
        </div>

        <ul className="navbar__nav">
          {sections.map(s => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`navbar__link ${activeSection === s.id ? 'active' : ''}`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
