import type { Post } from '../types.js'

export const week3: Post[] = [
  // ═══════════════════════════════════════════════════════════════
  // DIA 15 — LUNES
  // ═══════════════════════════════════════════════════════════════

  // AM — EDU — Exceso de plugins (carousel 7 slides)
  {
    id: 'sem3/dia15-am-exceso-plugins',
    pilar: 'EDU',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'WooCommerce',
        subtitle: 'Rendimiento',
        title: 'Exceso de plugins WooCommerce: riesgos ocultos',
        desc: 'Mas plugins no significa mas funcionalidad. A veces significa mas problemas.',
      },
      {
        type: 'list',
        tag: 'Riesgos',
        title: 'Que pasa con demasiados plugins',
        items: [
          { title: 'Performance degradada', desc: 'Cada plugin agrega queries a la base de datos y peso al frontend.' },
          { title: 'Conflictos entre plugins', desc: 'Dos plugins modificando la misma funcion = errores impredecibles.' },
          { title: 'Vulnerabilidades', desc: 'Plugins desactualizados son la principal puerta de entrada de hackers.' },
          { title: 'Dependencia del proveedor', desc: 'Si el plugin deja de mantenerse, tu funcionalidad se rompe.' },
        ],
      },
      {
        type: 'stats',
        tag: 'Datos',
        title: 'El impacto real',
        stats: [
          { label: 'Plugins promedio en WooCommerce', value: '30-50', desc: 'La mayoria de tiendas tiene muchos mas de los necesarios.' },
          { label: 'Recomendado mantener bajo', value: '< 20', desc: 'Solo los esenciales, bien mantenidos y actualizados.' },
          { label: 'Vulnerabilidades por plugins', value: '97%', desc: 'De las brechas de seguridad en WordPress.' },
        ],
      },
      {
        type: 'steps',
        tag: 'Solucion',
        title: 'Como reducir plugins sin perder funcionalidad',
        steps: [
          { title: 'Auditoria completa', desc: 'Lista todos tus plugins y evalua cuales son realmente necesarios.' },
          { title: 'Consolidar funciones', desc: 'Un plugin multiproposito vs 5 plugins especificos.' },
          { title: 'Codigo custom liviano', desc: 'Funciones simples mejor como snippets que como plugins.' },
          { title: 'Monitorear rendimiento', desc: 'Query Monitor para detectar plugins que ralentizan.' },
        ],
      },
      {
        type: 'list',
        tag: 'Alternativas',
        title: 'Reemplazos inteligentes',
        items: [
          { title: 'Theme builders pesados', desc: 'Reemplaza con themes ligeros como Kadence o GeneratePress.' },
          { title: 'Sliders y carruseles', desc: 'CSS puro o lazy-loaded en vez de plugins pesados de sliders.' },
          { title: 'SEO + cache + seguridad', desc: 'Consolida en 2-3 plugins bien elegidos.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Optimiza tu tienda',
        headline: 'Menos plugins, mas rendimiento',
        desc: 'Auditamos tu WooCommerce y eliminamos lo innecesario sin perder funcionalidad.',
        ctaText: 'subdominio.cl/e-commerce',
      },
    ],
  },

  // PM — SRV — Software a medida (carousel 7 slides)
  {
    id: 'sem3/dia15-pm-software-medida',
    pilar: 'SRV',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        theme: 'light',
        category: 'Servicios',
        subtitle: 'Software a medida',
        title: 'Software que se adapta a tu negocio',
        desc: 'Sistemas de gestion, dashboards y portales web desarrollados para tus necesidades exactas.',
      },
      {
        type: 'cards',
        tag: 'Soluciones',
        title: 'Que desarrollamos',
        cards: [
          { title: 'Sistemas de gestion', desc: 'CRM, ERP complementario, control de inventario y flujos de trabajo.' },
          { title: 'Dashboards y BI', desc: 'Visualizacion de datos en tiempo real para toma de decisiones.' },
          { title: 'Portales web', desc: 'Plataformas para clientes, proveedores o equipos internos.' },
          { title: 'PWA', desc: 'Aplicaciones web progresivas con experiencia mobile nativa.' },
        ],
      },
      {
        type: 'list',
        tag: 'Ventajas',
        title: 'Por que software a medida',
        items: [
          { title: 'Adaptado a tu flujo', desc: 'No adaptas tu negocio al software, el software se adapta a ti.' },
          { title: 'Sin licencias mensuales', desc: 'Pagas una vez por el desarrollo. El sistema es tuyo.' },
          { title: 'Escalable', desc: 'Crece con tu negocio sin limitaciones de plataforma.' },
        ],
      },
      {
        type: 'steps',
        tag: 'Proceso',
        title: 'Metodologia de desarrollo',
        steps: [
          { title: 'Levantamiento', desc: 'Documentamos procesos, pain points y requerimientos.' },
          { title: 'Prototipo', desc: 'Wireframes interactivos para validar antes de desarrollar.' },
          { title: 'Desarrollo iterativo', desc: 'Entregas parciales para feedback continuo.' },
          { title: 'Entrega y capacitacion', desc: 'Deploy, documentacion y soporte post-lanzamiento.' },
        ],
      },
      {
        type: 'list',
        tag: 'Stack',
        title: 'Tecnologias que usamos',
        items: [
          { title: 'Frontend', desc: 'React, Next.js, Astro, Tailwind CSS.' },
          { title: 'Backend', desc: 'Node.js, Python, PHP segun el caso.' },
          { title: 'Base de datos', desc: 'PostgreSQL, MySQL, Redis para cache.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Contanos tu idea',
        headline: 'Transformamos tu proceso en un sistema eficiente',
        desc: 'Precio fijo, entrega puntual, codigo documentado y mantenible.',
        ctaText: 'subdominio.cl/software',
      },
    ],
  },

  // NT — MRK — Division Tecnologica Chile
  {
    id: 'sem3/dia15-nt-division',
    pilar: 'MRK',
    format: 'feed',
    feed: {
      variant: 'stat',
      value: '20+',
      label: 'Division de Tecnologica Chile',
      context: 'Respaldados por 20+ anos en tecnologia empresarial. Solidez corporativa con agilidad de startup.',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 16 — MARTES
  // ═══════════════════════════════════════════════════════════════

  // AM — TIP — Comprimir imagenes
  {
    id: 'sem3/dia16-am-tip-imagenes',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'Comprime imagenes antes de subirlas',
      body: 'WebP reduce 30-50% el tamano vs JPG sin perdida visible de calidad. Tu tienda carga mas rapido y Google te premia.',
      items: [
        'Usa Sharp o Squoosh para conversion automatica',
        'TinyPNG para compresion rapida online',
        'Tamano maximo recomendado: 200KB por imagen',
      ],
    },
  },

  // PM — PRY — clandent.cl
  {
    id: 'sem3/dia16-pm-pry-clandent',
    pilar: 'PRY',
    format: 'feed',
    feed: {
      variant: 'project',
      name: 'clandent.cl',
      type: 'E-commerce',
      desc: 'E-commerce de insumos dentales para profesionales de salud. Catalogo especializado con filtros avanzados y pedidos recurrentes.',
      stack: ['WooCommerce', 'WordPress', 'Elementor', 'WebPay'],
    },
  },

  // NT — EDU — Venta mayorista B2B (carousel 7 slides)
  {
    id: 'sem3/dia16-nt-b2b-woo',
    pilar: 'EDU',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'WooCommerce',
        subtitle: 'B2B',
        title: 'Venta mayorista con WooCommerce B2B',
        desc: 'Configura precios por volumen, catalogos privados y roles de cliente para ventas mayoristas.',
      },
      {
        type: 'list',
        tag: 'Funcionalidades',
        title: 'Que necesita un B2B en WooCommerce',
        items: [
          { title: 'Precios por volumen', desc: 'Descuentos automaticos segun cantidad o rango de compra.' },
          { title: 'Catalogo privado', desc: 'Productos visibles solo para clientes registrados y aprobados.' },
          { title: 'Roles de cliente', desc: 'Diferentes precios y condiciones segun tipo de comprador.' },
          { title: 'Pedidos minimos', desc: 'Cantidades minimas por producto o monto total del pedido.' },
        ],
      },
      {
        type: 'cards',
        tag: 'Plugins',
        title: 'Herramientas recomendadas',
        cards: [
          { title: 'B2BKing', desc: 'Suite completa para B2B: precios, roles, cotizaciones y mas.' },
          { title: 'WooCommerce Wholesale', desc: 'Precios mayoristas por rol de usuario.' },
          { title: 'YITH Request a Quote', desc: 'Sistema de cotizaciones para pedidos grandes.' },
        ],
      },
      {
        type: 'steps',
        tag: 'Implementacion',
        title: 'Como lo montamos',
        steps: [
          { title: 'Analisis de flujo B2B', desc: 'Entendemos tus procesos de venta mayorista y aprobacion.' },
          { title: 'Configuracion de roles', desc: 'Tipos de cliente, precios y permisos diferenciados.' },
          { title: 'Integracion ERP', desc: 'Conectamos con Softland u otro ERP para sincronizar inventario.' },
          { title: 'Portal de cliente', desc: 'Dashboard donde tu cliente ve pedidos, facturas e historial.' },
        ],
      },
      {
        type: 'list',
        tag: 'Chile',
        title: 'Consideraciones para Chile',
        items: [
          { title: 'Facturacion electronica', desc: 'Emision automatica de facturas via integracion con SII.' },
          { title: 'Campos RUT y giro', desc: 'Obligatorios para facturacion B2B en Chile.' },
          { title: 'Despacho nacional', desc: 'Cotizacion automatica con couriers locales.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Implementa tu B2B',
        headline: 'WooCommerce B2B adaptado al mercado chileno',
        desc: 'Tiendas mayoristas con facturacion, ERP y logistica local integrada.',
        ctaText: 'subdominio.cl/e-commerce',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 17 — MIERCOLES
  // ═══════════════════════════════════════════════════════════════

  // AM — EDU — Campos RUT y facturacion (carousel 7 slides)
  {
    id: 'sem3/dia17-am-rut-facturacion',
    pilar: 'EDU',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'WooCommerce Chile',
        subtitle: 'Facturacion',
        title: 'Campos RUT y facturacion en WooCommerce Chile',
        desc: 'Implementacion, validacion e integracion con facturacion electronica del SII.',
      },
      {
        type: 'text',
        tag: 'Contexto',
        title: 'Por que es obligatorio en Chile',
        body: 'Toda empresa que vende online en Chile necesita emitir factura electronica. Para eso, tu checkout debe capturar RUT, razon social y giro del comprador B2B.',
      },
      {
        type: 'steps',
        tag: 'Implementacion',
        title: 'Como agregar campos RUT al checkout',
        steps: [
          { title: 'Campo RUT con validacion', desc: 'Algoritmo modulo 11 para validar formato y digito verificador.' },
          { title: 'Tipo de documento', desc: 'Selector: boleta (persona) o factura (empresa).' },
          { title: 'Campos condicionales', desc: 'Razon social y giro aparecen solo si elige factura.' },
          { title: 'Almacenamiento seguro', desc: 'Datos guardados en el pedido para emision posterior.' },
        ],
      },
      {
        type: 'cards',
        tag: 'Integracion',
        title: 'Facturacion electronica automatica',
        cards: [
          { title: 'Emision automatica', desc: 'Factura generada al confirmar el pago, sin intervencion manual.' },
          { title: 'Envio al SII', desc: 'DTE enviado electronicamente al Servicio de Impuestos Internos.' },
          { title: 'PDF al cliente', desc: 'Factura en PDF enviada por email junto con la confirmacion.' },
        ],
      },
      {
        type: 'list',
        tag: 'Plugins',
        title: 'Herramientas recomendadas',
        items: [
          { title: 'Chilean Bundle for WooCommerce', desc: 'Campos RUT, comunas, regiones y formatos chilenos.' },
          { title: 'Integracion SII custom', desc: 'Via API REST para emision automatica de DTE.' },
          { title: 'DTEPDF.cl', desc: 'Conversion de XML del SII a PDF legible.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Implementa facturacion',
        headline: 'WooCommerce con facturacion chilena completa',
        desc: 'Checkout con RUT, emision automatica de DTE y envio al SII.',
        ctaText: 'subdominio.cl/e-commerce',
      },
    ],
  },

  // PM — SOL — ERPBackup (carousel 6 slides)
  {
    id: 'sem3/dia17-pm-erpbackup',
    pilar: 'SOL',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'Soluciones',
        subtitle: 'ERPBackup',
        title: 'Protege tu Softland ERP',
        desc: 'Backup automatico a OneDrive o Google Drive. Restauracion con un clic.',
      },
      {
        type: 'text',
        tag: 'Problema',
        title: 'El riesgo de no tener backup del ERP',
        body: 'Tu base de datos Softland contiene anos de informacion contable, inventario y clientes. Un fallo de hardware, ransomware o error humano puede destruirla en minutos.',
      },
      {
        type: 'cards',
        tag: 'Solucion',
        title: 'Que hace ERPBackup',
        cards: [
          { title: 'Backup automatico', desc: 'Respaldo programado diario, semanal o a demanda.' },
          { title: 'Almacenamiento en nube', desc: 'OneDrive, Google Drive o S3 para maxima seguridad.' },
          { title: 'Restauracion facil', desc: 'Recupera tu base de datos con un clic en minutos.' },
        ],
      },
      {
        type: 'list',
        tag: 'Beneficios',
        title: 'Tranquilidad operativa',
        items: [
          { title: 'Sin intervencion manual', desc: 'Se ejecuta automaticamente segun tu horario configurado.' },
          { title: 'Historico de versiones', desc: 'Multiples puntos de restauracion disponibles.' },
          { title: 'Notificaciones', desc: 'Alertas por email si un backup falla.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Protege tu ERP',
        headline: 'Tu Softland, siempre respaldado',
        desc: 'Backup automatico en la nube con restauracion inmediata.',
        ctaText: 'subdominio.cl/soluciones',
      },
    ],
  },

  // NT — BTS — Caso IA 500 productos (story)
  {
    id: 'sem3/dia17-nt-caso-ia',
    pilar: 'BTS',
    format: 'story',
    story: {
      variant: 'case',
      title: '500 productos descritos con IA en 1 hora',
      stat: '-99%',
      statLabel: 'reduccion de tiempo',
      desc: 'vs 125 horas de trabajo manual. Automatizacion con proposito: la IA como herramienta, no como reemplazo.',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 18 — JUEVES
  // ═══════════════════════════════════════════════════════════════

  // AM — TIP — Breadcrumbs
  {
    id: 'sem3/dia18-am-tip-breadcrumbs',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'Agrega breadcrumbs a tu sitio',
      body: 'Los breadcrumbs mejoran la navegacion, la experiencia de usuario y el SEO. Google los muestra directamente en los resultados de busqueda.',
      items: [
        'Estructura: Inicio > Categoria > Producto',
        'Schema BreadcrumbList para Google',
        'Plugin Yoast SEO los incluye automaticamente',
      ],
    },
  },

  // PM — PRY — tecnologicachile.cl
  {
    id: 'sem3/dia18-pm-pry-tecnologica',
    pilar: 'PRY',
    format: 'feed',
    feed: {
      variant: 'project',
      name: 'tecnologicachile.cl',
      type: 'Sitio corporativo',
      desc: 'Sitio web corporativo de proveedor de software empresarial. Diseno moderno con Astro para maxima velocidad y SEO.',
      stack: ['Astro', 'React', 'Tailwind CSS', 'Vercel'],
    },
  },

  // NT — MRK — Garantia 30 dias
  {
    id: 'sem3/dia18-nt-garantia',
    pilar: 'MRK',
    format: 'feed',
    feed: {
      variant: 'quote',
      text: 'Garantia 30 dias post-lanzamiento',
      subtitle: 'Corregimos cualquier bug sin costo adicional despues de la entrega. Compromiso real con tu proyecto.',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 19 — VIERNES
  // ═══════════════════════════════════════════════════════════════

  // AM — EDU — Performance WordPress (carousel 7 slides)
  {
    id: 'sem3/dia19-am-performance-wp',
    pilar: 'EDU',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'WordPress',
        subtitle: 'Guia completa',
        title: 'Performance en WordPress: todo lo que necesitas saber',
        desc: 'Optimiza cada aspecto de tu WordPress para velocidad maxima.',
      },
      {
        type: 'steps',
        tag: 'Servidor',
        title: 'Hosting y servidor',
        steps: [
          { title: 'Hosting WordPress managed', desc: 'Kinsta, WP Engine o Cloudways. Optimizados para WordPress.' },
          { title: 'PHP actualizado', desc: 'PHP 8.1+ es 3x mas rapido que PHP 7.0.' },
          { title: 'HTTP/2 o HTTP/3', desc: 'Carga paralela de recursos. La mayoria de hosts modernos lo soportan.' },
        ],
      },
      {
        type: 'steps',
        tag: 'Frontend',
        title: 'Optimizacion del frontend',
        steps: [
          { title: 'Imagenes WebP', desc: 'Conversion automatica con ShortPixel o Imagify.' },
          { title: 'Lazy loading', desc: 'Nativo con loading="lazy" en imagenes y iframes.' },
          { title: 'Minificacion', desc: 'CSS y JS comprimidos. Autoptimize o WP Rocket.' },
          { title: 'Critical CSS', desc: 'Inline del CSS above-the-fold para render mas rapido.' },
        ],
      },
      {
        type: 'steps',
        tag: 'Cache',
        title: 'Estrategia de cache',
        steps: [
          { title: 'Page cache', desc: 'WP Super Cache, LiteSpeed Cache o WP Rocket.' },
          { title: 'Object cache', desc: 'Redis o Memcached para queries repetitivas.' },
          { title: 'CDN', desc: 'Cloudflare para servir assets desde el edge mas cercano.' },
        ],
      },
      {
        type: 'steps',
        tag: 'Base de datos',
        title: 'Limpieza y mantenimiento',
        steps: [
          { title: 'Eliminar revisiones', desc: 'Limita revisiones de posts a 3-5 y purga las antiguas.' },
          { title: 'Limpiar transients', desc: 'Datos temporales que se acumulan y ralentizan queries.' },
          { title: 'Optimizar tablas', desc: 'Ejecuta OPTIMIZE TABLE periodicamente o usa WP-Optimize.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Optimiza tu WordPress',
        headline: 'Un WordPress rapido es un WordPress que vende',
        desc: 'Auditamos y optimizamos la velocidad de tu sitio WordPress.',
        ctaText: 'subdominio.cl/desarrollo-web',
      },
    ],
  },

  // PM — SRV — Nuestros 4 servicios (carousel 7 slides)
  {
    id: 'sem3/dia19-pm-4-servicios',
    pilar: 'SRV',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        theme: 'light',
        category: 'Subdominio',
        subtitle: 'Servicios',
        title: 'Nuestros 4 servicios principales',
        desc: 'Soluciones digitales completas para empresas en Chile.',
      },
      {
        type: 'text',
        tag: 'Desarrollo Web',
        title: 'Sitios web que impresionan',
        body: 'Sitios corporativos, landing pages y blogs con tecnologia moderna. Astro, Next.js o WordPress segun tu necesidad. Responsive, rapidos y optimizados para SEO.',
      },
      {
        type: 'text',
        tag: 'E-commerce',
        title: 'Tiendas que convierten',
        body: 'WooCommerce, Shopify o Jumpseller. B2C, B2B y marketplace. Pagos locales, logistica integrada y facturacion electronica para el mercado chileno.',
      },
      {
        type: 'text',
        tag: 'Automatizacion',
        title: 'Procesos mas eficientes',
        body: 'Eliminamos tareas repetitivas con soluciones a medida. IA para contenido, reportes automaticos, integraciones ERP y workflows operativos.',
      },
      {
        type: 'text',
        tag: 'Software a medida',
        title: 'Sistemas a tu medida',
        body: 'CRM, dashboards, portales web y PWA. Codigo limpio, documentado y escalable. React, Node.js y PostgreSQL.',
      },
      {
        type: 'list',
        tag: 'Incluido',
        title: 'En todos nuestros servicios',
        items: [
          { title: 'Precio fijo', desc: 'Presupuesto cerrado sin sorpresas.' },
          { title: 'Capacitacion', desc: 'Videos, docs y sesiones 1:1.' },
          { title: 'Garantia 30 dias', desc: 'Bugs corregidos sin costo post-lanzamiento.' },
          { title: 'Codigo tuyo', desc: 'Documentado y mantenible por cualquier dev.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Conoce nuestros servicios',
        headline: 'Soluciones digitales con codigo y proposito',
        desc: 'Desarrollo web, e-commerce, automatizacion y software a medida para empresas en Chile.',
        ctaText: 'subdominio.cl',
      },
    ],
  },

  // NT — BTS — Reportes automaticos (story)
  {
    id: 'sem3/dia19-nt-caso-reportes',
    pilar: 'BTS',
    format: 'story',
    story: {
      variant: 'case',
      title: 'Reportes automaticos a las 9 AM',
      stat: '40h',
      statLabel: 'mensuales liberadas',
      desc: 'Informes diarios enviados sin intervencion humana. El equipo se enfoca en analisis, no en extraer datos.',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 20 — SABADO
  // ═══════════════════════════════════════════════════════════════

  // AM — TIP — Google Search Console
  {
    id: 'sem3/dia20-am-tip-gsc',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'Usa Google Search Console',
      body: 'Gratis y esencial. Te muestra que buscan tus clientes, errores de indexacion y el rendimiento de tu sitio en Google.',
      items: [
        'Verifica tu dominio y envía tu sitemap',
        'Revisa el informe de rendimiento semanal',
        'Corrige errores de cobertura e indexacion',
      ],
    },
  },

  // PM — PRY — rycferretero.cl
  {
    id: 'sem3/dia20-pm-pry-rycferretero',
    pilar: 'PRY',
    format: 'feed',
    feed: {
      variant: 'project',
      name: 'rycferretero.cl',
      type: 'E-commerce',
      desc: 'Ferreteria online con materiales de construccion y despacho a todo Chile. Catalogo extenso con filtros por categoria y marca.',
      stack: ['WooCommerce', 'WordPress', 'WebPay', 'Chilexpress'],
    },
  },

  // NT — MRK — Capacitacion incluida
  {
    id: 'sem3/dia20-nt-capacitacion',
    pilar: 'MRK',
    format: 'feed',
    feed: {
      variant: 'quote',
      text: 'Capacitacion incluida en cada proyecto',
      subtitle: 'Videos tutoriales, documentacion completa y sesiones 1:1 para que seas 100% autonomo.',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 21 — DOMINGO
  // ═══════════════════════════════════════════════════════════════

  // AM — TIP — Mobile first
  {
    id: 'sem3/dia21-am-tip-mobile',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'Mobile first no es opcional',
      body: '70%+ del trafico web en Chile viene de dispositivos moviles. Si tu sitio no funciona bien en celular, pierdes la mayoria de tus visitas.',
      items: [
        'Disena primero para movil, luego adapta a desktop',
        'Botones de al menos 44x44px para touch',
        'Texto legible sin hacer zoom (minimo 16px)',
      ],
    },
  },

  // PM — SOL — Plugin Bsale (carousel 5 slides)
  {
    id: 'sem3/dia21-pm-bsale',
    pilar: 'SOL',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'Soluciones',
        subtitle: 'Coming Soon',
        title: 'Plugin Bsale: Sincroniza tu POS con tu e-commerce',
        desc: 'Sincronizacion automatica de catalogo entre Bsale y WooCommerce.',
      },
      {
        type: 'text',
        tag: 'Problema',
        title: 'El desafio de dos sistemas desconectados',
        body: 'Vendes en tu tienda fisica con Bsale y online con WooCommerce. Actualizar stock y precios manualmente es lento, propenso a errores y genera sobreventas.',
      },
      {
        type: 'cards',
        tag: 'Solucion',
        title: 'Que hara el plugin Bsale',
        cards: [
          { title: 'Sync de catalogo', desc: 'Productos, variantes y precios sincronizados automaticamente.' },
          { title: 'Stock en tiempo real', desc: 'Venta en tienda o online actualiza ambos sistemas al instante.' },
          { title: 'Pedidos unificados', desc: 'Todas las ventas visibles en un solo lugar.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Proximamente',
        headline: 'Bsale + WooCommerce, conectados',
        desc: 'Registrate para ser notificado cuando el plugin este disponible.',
        ctaText: 'subdominio.cl/soluciones',
      },
    ],
  },

  // NT — BTS — Stock sincronizado (story)
  {
    id: 'sem3/dia21-nt-caso-stock',
    pilar: 'BTS',
    format: 'story',
    story: {
      variant: 'case',
      title: 'Stock sincronizado, -95% reclamos',
      stat: '-95%',
      statLabel: 'reduccion de reclamos',
      desc: 'ERP + tienda + marketplace sincronizados en tiempo real. Cero sobreventa. El cliente siempre ve stock actualizado.',
    },
  },
]
