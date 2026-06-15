import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { brand } from './src/data/brandBrain.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateMarkdown = (brand) => {
  return `# 🧠 Distrito Pipa — Brand Brain
> **Fuente única de verdad.** Este documento combina la estrategia de negocio y los lineamientos visuales de Distrito Pipa.
> Última actualización: ${new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}

---

## 📌 ¿Qué es Distrito Pipa?
${brand.fullName} es una marca local con entregas rápidas en Cancún.
No vende únicamente productos. Vende:
${brand.descripcion.map(item => `- ${item}`).join('\n')}

**Categorías de producto:**
${brand.categorias.map(item => `- ${item}`).join('\n')}

---

## ⭐ North Star (Estrella Guía)
> *"${brand.northStar}"*

*(Todo lo que se haga debe reforzar esta idea.)*

---

## 🎯 Posicionamiento

**Posición:** "${brand.posicionamiento.declaracion}"

**Contraste con el mercado:**
| Tipo | Descripción | Problema |
|------|-------------|----------|
${brand.posicionamiento.competencia.map(c => `| **${c.tipo}** | ${c.descripcion} | ${c.problema} |`).join('\n')}

**La Ventaja Cancún:**
La mayoría de vendedores parecen perfiles personales sin identidad. Distrito Pipa ya tiene:
${brand.posicionamiento.ventajas.map(v => `- ✅ ${v}`).join('\n')}

---

## 🎨 Identidad Visual

**Nombre:** ${brand.fullName} *(ayuda al SEO local, búsquedas en Facebook, reconocimiento local)*

### Paleta de Colores
| Color | Nombre | Hex | Uso |
|-------|--------|-----|-----|
${brand.colores.map(c => {
  const emoji = c.hex === '#DC143C' ? '🔴' : c.hex === '#1A1A1A' ? '⚫' : c.hex === '#FFFFFF' ? '⬜' : '🩶';
  return `| ${emoji} | ${c.nombre} | \`${c.hex}\` | ${c.rol} |`;
}).join('\n')}

*Transmiten: Urbano, Moderno, Directo*

### Tipografía
| Fuente | Uso | Peso |
|--------|-----|------|
${brand.tipografia.map(t => `| **${t.nombre}** | ${t.uso} | ${t.peso} |`).join('\n')}

### Logotipo
- "DISTRITO" en Bebas Neue (bold, uppercase, tracking amplio)
- "Pipa" en Great Vibes (script elegante)
- "CANCÚN" en Inter small caps debajo
- Color primario: Rojo Eléctrico \`#DC143C\`
- Mantener espacio negativo alrededor del logo siempre

---

## 🗣️ Voz & Tono de Marca

**Somos:** ${brand.voz.descripcion}

### Atributos de Voz
${brand.voz.atributos.map(a => `- ✓ ${a}`).join('\n')}

### Tono por Canal
| Canal | Tono |
|-------|------|
${brand.voz.tonoPorCanal.map(t => `| ${t.canal} | ${t.tono} |`).join('\n')}

### Ejemplos
${brand.voz.ejemplos.map(e => `**✅ ${e.tipo.toUpperCase()}:** *${e.texto}*\n→ ${e.nota}`).join('\n\n')}

---

## 💎 Valores de Marca

${brand.valores.map((v, i) => `${i + 1}. **${v.titulo} ${v.icono}** — ${v.descripcion}`).join('\n')}

**Misión:**
> ${brand.mision}

---

## 📦 Sistema de Producto

### Línea Principal — Precios Retail (Pieza)
| Producto | Costo | Precio Venta | Margen |
|----------|-------|-------------|--------|
${brand.productos.retail.map(p => `| ${p.nombre} | $${p.costo} | ${p.venta ? `$${p.venta}` : '—'} | ${p.margen ? `~${p.margen}%` : '—'} |`).join('\n')}

### Mayoreo (por docena)
| Producto | Precio x Pieza |
|----------|---------------|
${brand.productos.mayoreo.map(p => `| ${p.nombre} | $${p.precioPorPieza}/pz |`).join('\n')}

---

## 🚚 Experiencia de Compra

### Puntos de Entrega en Persona
${brand.entrega.puntosPresenciales.map(p => `- **${p}**`).join('\n')}

### Tarifas de Envío
| Distancia | Horario Día | Después de 8 PM |
|-----------|------------|----------------|
${brand.entrega.tarifas.map(t => `| ${t.distancia} | $${t.dia} | $${t.noche} |`).join('\n')}

### Sistema de Anticipo
- **Anticipo:** $${brand.entrega.anticipo.monto} MXN
- ${brand.entrega.anticipo.nota}

---

## 📱 Ecosistema Digital

| Plataforma | Rol | Uso |
|-----------|-----|-----|
${brand.ecosistema.map(e => `| **${e.plataforma}** | ${e.rol} | ${e.uso} |`).join('\n')}

---

## 📊 Estrategia de Contenido

**Meta:** ${brand.contenido.meta}

### Los 5 Pilares de Contenido
| # | Pilar | Descripción |
|---|-------|-------------|
${brand.contenido.pilares.map(p => `| ${p.numero} | **${p.nombre}** | ${p.descripcion} |`).join('\n')}

---

## 🚀 Sistema de Crecimiento

### Roadmap de Metas (en orden)
${brand.crecimiento.roadmap.map(r => `${r.paso}. **${r.meta}** — ${r.descripcion}`).join('\n')}

### Scorecard Actual (${new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })})
| Área | Puntaje | Estado |
|------|---------|--------|
${brand.crecimiento.scorecard.map(s => `| ${s.area} | ${s.puntaje}/10 | ${s.nota} |`).join('\n')}

---

## ⚠️ Pendientes por Desarrollar
- [ ] Definir voz de marca unificada (tono específico por tipo de post)
- [ ] Calendario editorial con los 5 pilares
- [ ] Documentar nuevas líneas de producto al lanzarse
- [ ] Sistema de seguimiento de clientes recurrentes
- [ ] Onboarding de revendedores (materiales, precios, reglas)
`;
};

const writeDocs = () => {
  const mdContent = generateMarkdown(brand);
  // Guardamos en la raíz del proyecto DistritoPipa
  const outputPath = path.resolve(__dirname, '../brand_brain.md');
  fs.writeFileSync(outputPath, mdContent, 'utf8');
  console.log('✅ brand_brain.md ha sido sincronizado con brandBrain.js');
};

writeDocs();
