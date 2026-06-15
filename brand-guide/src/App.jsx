import { useState, useEffect, useRef } from 'react';
import { brand } from './data/brandBrain';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Toast from './components/Toast';
// Tab 1 — Brand Brain
import Posicionamiento from './components/brain/Posicionamiento';
import SistemaProducto from './components/brain/SistemaProducto';
import ExperienciaCompra from './components/brain/ExperienciaCompra';
import EcosistemaDigital from './components/brain/EcosistemaDigital';
import EstrategiaContenido from './components/brain/EstrategiaContenido';
import SistemaCrecimiento from './components/brain/SistemaCrecimiento';
// Tab 2 — Brand Guidelines
import IdentidadVisual from './components/visual/IdentidadVisual';
import VozTono from './components/visual/VozTono';
import ValoresMarca from './components/visual/ValoresMarca';
import ComponentesUI from './components/visual/ComponentesUI';

export default function App() {
  const [activeTab, setActiveTab] = useState('brain');
  const [toast, setToast] = useState({ show: false, text: '' });

  const showToast = (text) => {
    setToast({ show: true, text });
    setTimeout(() => setToast({ show: false, text: '' }), 2500);
  };

  // Fade-in observer
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [activeTab]);

  const brainSections = [
    { id: 'posicionamiento', label: 'Posicionamiento' },
    { id: 'producto', label: 'Producto' },
    { id: 'entrega', label: 'Entrega' },
    { id: 'ecosistema', label: 'Ecosistema' },
    { id: 'contenido', label: 'Contenido' },
    { id: 'crecimiento', label: 'Crecimiento' },
  ];

  const visualSections = [
    { id: 'identidad', label: 'Identidad' },
    { id: 'voz', label: 'Voz & Tono' },
    { id: 'valores', label: 'Valores' },
    { id: 'componentes', label: 'Componentes' },
  ];

  const sections = activeTab === 'brain' ? brainSections : visualSections;

  return (
    <>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sections={sections}
      />

      <main>
        <Hero brand={brand} />

        {activeTab === 'brain' ? (
          <>
            <Posicionamiento brand={brand} />
            <SistemaProducto brand={brand} />
            <ExperienciaCompra brand={brand} />
            <EcosistemaDigital brand={brand} />
            <EstrategiaContenido brand={brand} />
            <SistemaCrecimiento brand={brand} />
          </>
        ) : (
          <>
            <IdentidadVisual brand={brand} showToast={showToast} />
            <VozTono brand={brand} />
            <ValoresMarca brand={brand} />
            <ComponentesUI brand={brand} />
          </>
        )}

        <Footer brand={brand} />
      </main>

      <Toast show={toast.show} text={toast.text} />
    </>
  );
}
