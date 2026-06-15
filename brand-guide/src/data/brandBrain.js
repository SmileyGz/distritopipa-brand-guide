// brandBrain.js — Fuente única de verdad para Distrito Pipa Brand Guide

export const brand = {
  name: "Distrito Pipa",
  fullName: "Distrito Pipa Cancún",
  tagline: "Arte en vidrio artesanal. Comunidad en movimiento. Entrega en tu región.",
  northStar: "La opción local de confianza en Cancún — entrega rápida, productos de calidad, trato cercano.",
  mision: "Ser la opción de referencia para clientes de Cancún que valoran la calidad, la confianza y la cercanía. Crear una comunidad donde cada cliente es conocido, valorado y atendido con excelencia.",

  descripcion: [
    "Disponibilidad inmediata",
    "Facilidad de compra",
    "Cercanía local",
    "Experiencia sencilla",
  ],

  categorias: [
    "Accesorios de vidrio artesanal (línea principal)",
    "Accesorios de uso personal (categoría amplia)",
    "Próximas líneas en desarrollo",
  ],

  colores: [
    { nombre: "Rojo Eléctrico", hex: "#DC143C", rol: "Primario — CTAs, accentos" },
    { nombre: "Negro Carbón", hex: "#1A1A1A", rol: "Oscuro — fondos, texto principal" },
    { nombre: "Blanco Humo", hex: "#FFFFFF", rol: "Claro — fondos, texto sobre oscuro" },
    { nombre: "Gris Cemento", hex: "#2A2A2A", rol: "Secundario — fondos cards" },
  ],

  tipografia: [
    {
      nombre: "Bebas Neue",
      tipo: "Display",
      uso: "Títulos principales, nombres de secciones",
      peso: "Bold 700",
      descripcion: "Tipografía bold y geométrica para headlines. Transmite fuerza, modernidad y comunidad.",
    },
    {
      nombre: "Great Vibes",
      tipo: "Script",
      uso: "Logo, elementos decorativos",
      peso: "Regular 400",
      descripcion: "Script elegante para elementos decorativos. Aporta sofisticación y artesanía.",
    },
    {
      nombre: "Inter",
      tipo: "Sans-serif",
      uso: "Cuerpo de texto, descripciones",
      peso: "400, 500, 600, 700",
      descripcion: "Tipografía sans-serif legible para body text. Clara y moderna.",
    },
  ],

  voz: {
    descripcion: "Somos directos, auténticos y cercanos. Hablamos como un amigo experto que conoce su barrio. Sin pretensiones, pero con orgullo por lo que hacemos.",
    atributos: [
      "Accesible pero profesional",
      "Local pero aspiracional",
      "Casual pero confiable",
      "Moderno pero con raíces",
    ],
    tonoPorCanal: [
      { canal: "Redes Sociales", tono: "Casual, conversacional, con emojis" },
      { canal: "Sitio Web", tono: "Informativo, elegante, profesional" },
      { canal: "Atención al Cliente", tono: "Amable, rápido, directo" },
      { canal: "Publicidad", tono: "Impactante, memorable, aspiracional" },
    ],
    ejemplos: [
      {
        tipo: "correcto",
        texto: '"Listos para entrega. Gracias por la confianza, amigo. Seguimos activos con entregas en Cancún."',
        nota: "Directo, agradecido, cercano",
      },
      {
        tipo: "incorrecto",
        texto: '"Su pedido ha sido procesado exitosamente. Nuestro equipo de logística premium..."',
        nota: "Demasiado formal, impersonal",
      },
    ],
  },

  valores: [
    { titulo: "Autenticidad Local", icono: "🏘️", descripcion: "Nacimos en Cancún. Conocemos el barrio, sus necesidades y su energía." },
    { titulo: "Artesanía Funcional", icono: "🎨", descripcion: "Cada producto es elegido por su calidad, diseño y utilidad real." },
    { titulo: "Transparencia", icono: "🔍", descripcion: "Sin terceros. Controlamos cada entrega. Sin sorpresas desagradables." },
    { titulo: "Cercanía", icono: "🤝", descripcion: "Somos vecinos. Entregas rápidas, atención personal, relaciones duraderas." },
  ],

  posicionamiento: {
    declaracion: "Accesorios disponibles en Cancún, entrega rápida y proceso simple.",
    competencia: [
      { tipo: "Tipo A — Tiendas físicas", descripcion: "Horarios fijos, traslados, precios altos", problema: "Poco conveniente" },
      { tipo: "Tipo B — Marketplaces", descripcion: "Vendedores genéricos, sin identidad", problema: "Poca confianza" },
      { tipo: "Distrito Pipa ✅", descripcion: "Local, rápido, con marca propia", problema: "La solución" },
    ],
    ventajas: [
      "Logo y stickers propios",
      "Packaging kraft con QR",
      "WhatsApp Business",
      "Presencia en Facebook Marketplace",
      "Sistema de anticipos y entregas estructurado",
    ],
  },

  productos: {
    retail: [
      { nombre: "Mini", costo: 4, venta: null, margen: null },
      { nombre: "Sencilla", costo: 6, venta: 69, margen: 91 },
      { nombre: "Reforzada", costo: 9, venta: 99, margen: 91 },
    ],
    mayoreo: [
      { nombre: "Mini", precioPorPieza: 9 },
      { nombre: "Sencilla", precioPorPieza: 14 },
      { nombre: "Reforzada", precioPorPieza: 20 },
    ],
  },

  entrega: {
    puntosPresenciales: ["Región 96 — Coppel Nichupté", "Región 96 — Soriana Nichupté"],
    tarifas: [
      { distancia: "1 – 6 km", dia: 50, noche: 80 },
      { distancia: "6 – 10 km", dia: 80, noche: 100 },
    ],
    anticipo: {
      monto: 50,
      nota: "Se descuenta del total. Filtra clientes no comprometidos y reduce cancelaciones.",
    },
  },

  ecosistema: [
    { plataforma: "Facebook Marketplace", rol: "Canal Principal", uso: "Tráfico, comunidad, grupos, catálogo", icono: "📘" },
    { plataforma: "WhatsApp Business", rol: "Cierre y Seguimiento", uso: "Comprobantes, confirmaciones. NO prospección.", icono: "💬" },
    { plataforma: "Packaging Kraft", rol: "Branding Físico", uso: "Bolsa kraft + sticker exterior (QR + menú) + sticker cierre (DP minimalista)", icono: "📦" },
  ],

  contenido: {
    meta: "NO seguidores. NO likes. → Pedidos reales.",
    pilares: [
      { numero: 1, nombre: "Producto", descripcion: "Fotos y videos del producto, demos de uso", icono: "📸" },
      { numero: 2, nombre: "Prueba Social", descripcion: "Pedidos entregados, transferencias, bolsas listas", icono: "⭐" },
      { numero: 3, nombre: "Entretenimiento", descripcion: "Memes, contenido viral local", icono: "😂" },
      { numero: 4, nombre: "Comunidad Cancún", descripcion: "Posts locales, referencias al barrio", icono: "🌴" },
      { numero: 5, nombre: "Reventa", descripcion: "Captación de revendedores, sistema mayoreo", icono: "🤝" },
    ],
  },

  crecimiento: {
    roadmap: [
      { paso: 1, meta: "100 clientes", descripcion: "Construir la base de compradores", completado: false },
      { paso: 2, meta: "20 compradores recurrentes", descripcion: "Fidelizar y generar ingresos estables", completado: false },
      { paso: 3, meta: "5 revendedores activos", descripcion: "Escalar sin incrementar operación propia", completado: false },
    ],
    scorecard: [
      { area: "Marca", puntaje: 7, nota: "Ya tiene identidad", max: 10 },
      { area: "Operación", puntaje: 8, nota: "Entregas, anticipos y flujo funcionando", max: 10 },
      { area: "Marketing", puntaje: 5, nota: "Falta estructura de contenido", max: 10 },
      { area: "Escalabilidad", puntaje: 8, nota: "Mayoreo y revendedores disponibles", max: 10 },
    ],
  },

  badges: ["Artesanal", "Local", "Confiable", "Rápido", "Seguro", "Premium"],
};
