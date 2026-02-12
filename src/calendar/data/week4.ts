import type { Post } from '../types.js'
import { week1 } from './week1.js'
import { week2 } from './week2.js'

// Helper to clone carousel slides from existing posts for reprises
function getSlides(posts: Post[], id: string) {
  const post = posts.find(p => p.id === id)
  return post?.slides ?? []
}

export const week4: Post[] = [
  // ═══════════════════════════════════════════════════════════════
  // DIA 22 — LUNES
  // ═══════════════════════════════════════════════════════════════

  // AM — EDU — SEO Chile reprise (carousel 8 slides)
  {
    id: 'sem4/dia22-am-seo-reprise',
    pilar: 'EDU',
    format: 'carousel',
    slides: getSlides(week1, 'sem1/dia01-am-seo-chile'),
  },

  // PM — PRY — hostingsistemas.cl
  {
    id: 'sem4/dia22-pm-pry-hosting',
    pilar: 'PRY',
    format: 'feed',
    feed: {
      variant: 'project',
      name: 'hostingsistemas.cl',
      type: 'Hosting especializado',
      desc: 'Hosting dedicado para Softland ERP. 15+ anos de experiencia, soporte tecnico 24/7 y uptime garantizado.',
      stack: ['Linux', 'Windows Server', 'SQL Server', 'Softland ERP'],
    },
  },

  // NT — MRK — Mision de marca
  {
    id: 'sem4/dia22-nt-mision',
    pilar: 'MRK',
    format: 'feed',
    feed: {
      variant: 'quote',
      text: 'Transformamos ideas en soluciones digitales innovadoras',
      subtitle: 'Nuestra mision: crear tecnologia que impulse negocios reales en Chile y Latinoamerica.',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 23 — MARTES
  // ═══════════════════════════════════════════════════════════════

  // AM — TIP — URLs amigables
  {
    id: 'sem4/dia23-am-tip-urls',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'Estructura URLs amigables',
      body: '/producto/nombre-producto es mejor que /p?id=123. Las URLs limpias mejoran SEO y la experiencia del usuario.',
      items: [
        'Usa palabras descriptivas separadas por guiones',
        'Evita parametros y numeros sin significado',
        'Configura permalinks en WordPress correctamente',
      ],
    },
  },

  // PM — SRV — Automatizacion 3 casos (carousel 7 slides)
  {
    id: 'sem4/dia23-pm-automatizacion-casos',
    pilar: 'SRV',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        theme: 'light',
        category: 'Servicios',
        subtitle: 'Casos reales',
        title: 'Automatizacion: 3 casos reales con metricas',
        desc: 'Resultados concretos de automatizacion empresarial en Chile.',
      },
      {
        type: 'bigstat',
        tag: 'Caso 01',
        number: '01',
        title: 'Descripciones con IA',
        desc: '500 fichas de producto generadas y optimizadas para SEO en una fraccion del tiempo manual.',
        stat: '-99% tiempo',
      },
      {
        type: 'bigstat',
        theme: 'light',
        tag: 'Caso 02',
        number: '02',
        title: 'Reportes automaticos',
        desc: 'Informes diarios de ventas, inventario y KPIs enviados automaticamente a las 9 AM.',
        stat: '40h/mes',
      },
      {
        type: 'bigstat',
        tag: 'Caso 03',
        number: '03',
        title: 'Sincronizacion de stock',
        desc: 'ERP, tienda online y marketplace sincronizados en tiempo real. Cero sobreventa.',
        stat: '-95% reclamos',
      },
      {
        type: 'list',
        tag: 'Patron comun',
        title: 'Que tienen en comun estos casos',
        items: [
          { title: 'Proceso manual repetitivo', desc: 'Tareas que consumen horas sin agregar valor estrategico.' },
          { title: 'Solucion 100% a medida', desc: 'Desarrollada para el flujo especifico de cada cliente.' },
          { title: 'Resultados medibles', desc: 'Metricas claras de ahorro de tiempo y reduccion de errores.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Automatiza tu operacion',
        headline: 'Cada hora que ahorras es una hora para crecer',
        desc: 'Consultoria gratuita. Analizamos tu operacion y proponemos automatizaciones concretas.',
        ctaText: 'info@subdominio.cl',
      },
    ],
  },

  // NT — EDU — WooCommerce vs Shopify reprise (carousel 7 slides)
  {
    id: 'sem4/dia23-nt-ecommerce-reprise',
    pilar: 'EDU',
    format: 'carousel',
    slides: getSlides(week1, 'sem1/dia02-nt-ecommerce-comparativa'),
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 24 — MIERCOLES
  // ═══════════════════════════════════════════════════════════════

  // AM — EDU — Fichas de producto reprise (carousel 6 slides)
  {
    id: 'sem4/dia24-am-fichas-reprise',
    pilar: 'EDU',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'E-commerce',
        subtitle: 'Checklist visual',
        title: 'Fichas de producto que venden',
        desc: 'Titulo + descripcion + imagenes + reviews + SEO. Todo lo que necesitas en cada ficha.',
      },
      {
        type: 'steps',
        tag: 'Checklist',
        title: 'Los 6 elementos que no pueden faltar',
        steps: [
          { title: 'Titulo con keyword', desc: 'Nombre del producto + atributo principal + marca.' },
          { title: 'Descripcion persuasiva', desc: 'Beneficios primero, caracteristicas despues. Responde el "por que".' },
          { title: 'Imagenes de calidad', desc: '3-5 fotos profesionales. Al menos una del producto en uso.' },
        ],
      },
      {
        type: 'steps',
        tag: 'Checklist',
        title: 'Elementos (continuacion)',
        startNum: 4,
        steps: [
          { title: 'Reviews y testimonios', desc: 'Prueba social que genera confianza inmediata.' },
          { title: 'SEO on-page', desc: 'Meta title, description, alt text y schema markup.' },
          { title: 'Precio claro + CTA', desc: 'Precio con IVA, stock visible y boton de compra prominente.' },
        ],
      },
      {
        type: 'table',
        tag: 'Antes y despues',
        title: 'El impacto de optimizar fichas',
        headers: ['Metrica', 'Sin optimizar', 'Optimizada'],
        rows: [
          ['Tasa de conversion', '1-2%', '3-5%'],
          ['Tiempo en pagina', '30s', '2+ min'],
          ['Posicion Google', 'Pagina 3+', 'Top 10'],
          ['Tasa de devolucion', '15-20%', '5-8%'],
        ],
      },
      {
        type: 'cta',
        topLabel: 'Optimiza tus fichas',
        headline: 'Cada ficha es una oportunidad de venta',
        desc: 'Auditamos y optimizamos las fichas de producto de tu e-commerce.',
        ctaText: 'subdominio.cl/e-commerce',
      },
    ],
  },

  // PM — PRY — asistenciaerp.cl
  {
    id: 'sem4/dia24-pm-pry-asistenciaerp',
    pilar: 'PRY',
    format: 'feed',
    feed: {
      variant: 'project',
      name: 'asistenciaerp.cl',
      type: 'Consultoria',
      desc: 'Consultoria especializada en Softland ERP. Reportes custom, optimizacion de procesos y soporte tecnico experto.',
      stack: ['Softland ERP', 'SQL Server', 'Crystal Reports', 'API REST'],
    },
  },

  // NT — BTS — Herramientas diarias (story)
  {
    id: 'sem4/dia24-nt-herramientas',
    pilar: 'BTS',
    format: 'story',
    story: {
      variant: 'tech',
      title: 'Herramientas que usamos a diario',
      items: ['VS Code', 'GitHub', 'Figma', 'Vercel', 'Linear', 'Sentry', 'Slack', 'Notion'],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 25 — JUEVES
  // ═══════════════════════════════════════════════════════════════

  // AM — TIP — Facturacion electronica
  {
    id: 'sem4/dia25-am-tip-facturacion',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'Implementa facturacion electronica en tu e-commerce',
      body: 'Es obligatorio en Chile para todas las empresas. Integra tu tienda online con el SII para emision automatica de DTE.',
      items: [
        'Captura RUT y giro en el checkout',
        'Emision automatica al confirmar pago',
        'Envio de PDF al cliente por email',
      ],
    },
  },

  // PM — SOL — Resumen soluciones (carousel 6 slides)
  {
    id: 'sem4/dia25-pm-soluciones-resumen',
    pilar: 'SOL',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'Soluciones',
        subtitle: 'Ecosistema',
        title: 'Soluciones Subdominio: ecosistema completo',
        desc: 'ERPSync, ERPBackup, APIRCV, Softland API y mas. Todo conectado.',
      },
      {
        type: 'cards',
        tag: 'Integracion',
        title: 'Soluciones ERP',
        cards: [
          { title: 'ERPSync', desc: 'Sincroniza Softland con WooCommerce y Shopify en tiempo real.', badge: 'Disponible' },
          { title: 'ERPBackup', desc: 'Backup automatico de Softland a la nube con restauracion facil.', badge: 'Disponible' },
          { title: 'Softland API REST', desc: 'Endpoints completos para inventario, clientes y ventas.', badge: 'Disponible' },
        ],
      },
      {
        type: 'cards',
        tag: 'Tributario',
        title: 'Soluciones SII',
        cards: [
          { title: 'APIRCV', desc: 'Consulta masiva de compras y ventas del SII via API.', badge: 'Disponible' },
          { title: 'DTEPDF', desc: 'Conversion de XML del SII a PDF legible.', badge: 'Disponible' },
          { title: 'Plugin Bsale', desc: 'Sincronizacion de catalogo entre Bsale y e-commerce.', badge: 'Pronto' },
        ],
      },
      {
        type: 'list',
        tag: 'Beneficios',
        title: 'Por que un ecosistema integrado',
        items: [
          { title: 'Un solo proveedor', desc: 'Soporte centralizado para todas tus integraciones.' },
          { title: 'Compatibilidad garantizada', desc: 'Soluciones disenadas para funcionar juntas.' },
          { title: 'Escalabilidad', desc: 'Agrega soluciones a medida que crece tu operacion.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Conoce nuestras soluciones',
        headline: 'Tu operacion digital, completamente integrada',
        desc: 'ERP, e-commerce, facturacion y automatizacion en un ecosistema coherente.',
        ctaText: 'subdominio.cl/soluciones',
      },
    ],
  },

  // NT — MRK — Todo Chile
  {
    id: 'sem4/dia25-nt-todo-chile',
    pilar: 'MRK',
    format: 'feed',
    feed: {
      variant: 'stat',
      value: '100%',
      label: 'Servimos a todo Chile',
      context: 'Santiago, Valparaiso, Concepcion y todas las regiones. Trabajo remoto con la misma calidad y compromiso.',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 26 — VIERNES
  // ═══════════════════════════════════════════════════════════════

  // AM — EDU — Seguridad WooCommerce reprise (carousel 7 slides)
  {
    id: 'sem4/dia26-am-seguridad-reprise',
    pilar: 'EDU',
    format: 'carousel',
    slides: getSlides(week2, 'sem2/dia09-nt-seguridad-woo'),
  },

  // PM — PRY — IIBP ERP
  {
    id: 'sem4/dia26-pm-pry-iibp',
    pilar: 'PRY',
    format: 'feed',
    feed: {
      variant: 'project',
      name: 'IIBP ERP',
      type: 'Modernizacion',
      desc: 'Migracion de PHP 5.4 a 8.1. Modernizacion de codigo legacy empresarial con mantenimiento de funcionalidad completa.',
      stack: ['PHP 8.1', 'MySQL', 'Laravel', 'Docker'],
    },
  },

  // NT — BTS — Proceso de discovery (story)
  {
    id: 'sem4/dia26-nt-discovery',
    pilar: 'BTS',
    format: 'story',
    story: {
      variant: 'bts',
      title: 'Proceso de discovery',
      subtitle: 'Como investigamos tu negocio antes de escribir codigo',
      items: [
        'Entrevista con stakeholders — Objetivos, pain points, metricas',
        'Analisis de competencia — Que hacen bien y donde puedes diferenciarte',
        'Auditoria tecnica — Estado actual de tu stack y oportunidades',
        'Propuesta documentada — Alcance, cronograma y presupuesto fijo',
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 27 — SABADO
  // ═══════════════════════════════════════════════════════════════

  // AM — TIP — Alt text
  {
    id: 'sem4/dia27-am-tip-alt',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'No ignores el alt text de imagenes',
      body: 'El texto alternativo es esencial para accesibilidad y SEO. Google no puede "ver" tus imagenes — necesita que le describas que hay en ellas.',
      items: [
        'Describe la imagen en 5-10 palabras',
        'Incluye keywords relevantes naturalmente',
        'No uses "imagen de..." — se directamente descriptivo',
      ],
    },
  },

  // PM — SRV — E-commerce Chile completo (carousel 7 slides)
  {
    id: 'sem4/dia27-pm-ecommerce-completo',
    pilar: 'SRV',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        theme: 'light',
        category: 'E-commerce',
        subtitle: 'Guia completa',
        title: 'E-commerce Chile: todo lo que necesitas',
        desc: 'Plataformas, pagos, logistica, SEO y automatizacion para tu tienda online.',
      },
      {
        type: 'cards',
        tag: 'Plataformas',
        title: 'Elige tu plataforma',
        cards: [
          { title: 'WooCommerce', desc: 'Maximo control, sin comisiones, ideal para B2B y proyectos complejos.', badge: 'Flexibilidad' },
          { title: 'Shopify', desc: 'Facilidad de uso, escalabilidad automatica, ecosistema de apps.', badge: 'Simplicidad' },
          { title: 'Jumpseller', desc: 'Precios en CLP, WebPay nativo, soporte en espanol.', badge: 'Local' },
        ],
      },
      {
        type: 'list',
        tag: 'Pagos',
        title: 'Medios de pago en Chile',
        items: [
          { title: 'WebPay Plus', desc: 'Tarjetas de credito y debito. El estandar del mercado.' },
          { title: 'Khipu', desc: 'Transferencias bancarias directas. Sin comision para el comprador.' },
          { title: 'Flow', desc: 'Pasarela multi-medio con checkout embebido.' },
          { title: 'Mercado Pago', desc: 'Wallet digital con cuotas y proteccion al comprador.' },
        ],
      },
      {
        type: 'list',
        tag: 'Logistica',
        title: 'Envios y despacho',
        items: [
          { title: 'Chilexpress', desc: 'Cobertura nacional con integracion via API.' },
          { title: 'Starken', desc: 'Alternativa competitiva para envios a regiones.' },
          { title: 'Enviame / Shipit', desc: 'Agregadores que comparan tarifas entre couriers.' },
        ],
      },
      {
        type: 'list',
        tag: 'Crecimiento',
        title: 'SEO y automatizacion',
        items: [
          { title: 'SEO para e-commerce', desc: 'Fichas de producto optimizadas, blog y schema markup.' },
          { title: 'Integracion ERP', desc: 'Sincroniza inventario, precios y pedidos automaticamente.' },
          { title: 'Email marketing', desc: 'Carritos abandonados, post-compra y newsletters.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Lanza tu tienda online',
        headline: 'E-commerce completo para el mercado chileno',
        desc: 'Implementamos tu tienda con pagos, logistica, facturacion y SEO desde el dia 1.',
        ctaText: 'subdominio.cl/e-commerce',
      },
    ],
  },

  // NT — MRK — Tecnologia con valor
  {
    id: 'sem4/dia27-nt-tecnologia-valor',
    pilar: 'MRK',
    format: 'feed',
    feed: {
      variant: 'quote',
      text: 'Tecnologia moderna cuando aporta valor real',
      subtitle: 'No seguimos hype. Elegimos la herramienta correcta para cada proyecto. A veces es React, a veces es WordPress.',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 28 — DOMINGO
  // ═══════════════════════════════════════════════════════════════

  // AM — TIP — Core Web Vitals
  {
    id: 'sem4/dia28-am-tip-cwv',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'Revisa tus Core Web Vitals',
      body: 'LCP, FID y CLS son las metricas que Google usa para medir la experiencia de tu sitio. Afectan directamente tu ranking.',
      items: [
        'LCP < 2.5s — Velocidad de carga del contenido principal',
        'FID < 100ms — Tiempo de respuesta a la primera interaccion',
        'CLS < 0.1 — Estabilidad visual al cargar la pagina',
      ],
    },
  },

  // PM — PRY — Recap 12 proyectos (feed vertical project)
  {
    id: 'sem4/dia28-pm-pry-recap',
    pilar: 'PRY',
    format: 'feed',
    feed: {
      variant: 'stat',
      value: '12',
      label: 'proyectos en nuestro portafolio',
      context: 'E-commerce, SaaS, sitios corporativos y soluciones empresariales. Cada uno con tecnologia elegida segun la necesidad real del cliente.',
    },
  },

  // NT — MRK — CTA cierre de mes
  {
    id: 'sem4/dia28-nt-cta-cierre',
    pilar: 'MRK',
    format: 'feed',
    feed: {
      variant: 'stat',
      value: 'Iniciemos',
      label: 'tu proyecto',
      context: 'info@subdominio.cl | 800 914 659 | subdominio.cl',
    },
  },
]
