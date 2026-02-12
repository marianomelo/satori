import type { Post } from '../types.js'

export const week1: Post[] = [
  // ═══════════════════════════════════════════════════════════════
  // DIA 1 — LUNES
  // ═══════════════════════════════════════════════════════════════

  // AM — EDU — SEO Chile (carousel 8 slides)
  {
    id: 'sem1/dia01-am-seo-chile',
    pilar: 'EDU',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'Marketing Digital',
        subtitle: 'Guia SEO Chile',
        title: 'Como conseguir clientes sin pagar publicidad',
        desc: 'Posiciona tu negocio en Google con estrategias de SEO local.',
      },
      {
        type: 'text',
        tag: 'Definicion',
        title: 'Que es el SEO y como funciona',
        body: 'Son las tecnicas que mejoran la visibilidad de tu sitio web en los resultados organicos de Google.',
        items: [
          { label: 'Keywords', desc: 'Palabras clave que tus clientes buscan' },
          { label: 'Contenido', desc: 'Informacion relevante y actualizada' },
          { label: 'Experiencia', desc: 'Velocidad, mobile y navegacion' },
          { label: 'Autoridad', desc: 'Backlinks de sitios confiables' },
          { label: 'Tecnico', desc: 'HTML, URLs, sitemaps y datos estructurados' },
        ],
      },
      {
        type: 'table',
        tag: 'Comparativa',
        title: 'SEO vs Publicidad pagada',
        headers: ['Aspecto', 'Ads', 'SEO'],
        rows: [
          ['Costo', 'Pago continuo por clic', 'Inversion inicial, bajo mantenimiento'],
          ['Duracion', 'Se detiene al cortar presupuesto', 'Trafico continuo a largo plazo'],
          ['Confianza', 'Menor credibilidad percibida', 'Mayor credibilidad organica'],
          ['ROI', 'Inmediato pero temporal', 'Crecimiento compuesto'],
        ],
      },
      {
        type: 'list',
        tag: 'Ventajas',
        title: 'Por que SEO en Chile',
        items: [
          { title: 'Segmentacion local', desc: 'Optimiza para busquedas con ubicacion especifica como "ferreteria Puerto Montt" o "abogado Santiago centro".' },
          { title: 'Ventaja competitiva', desc: 'PYMEs pueden superar a grandes empresas que no invierten en SEO local.' },
          { title: 'Eficiencia de presupuesto', desc: 'Alternativa a campanas pagadas costosas. Una vez posicionado, el trafico es gratuito.' },
        ],
      },
      {
        type: 'steps',
        tag: 'Estrategia',
        title: '7 pasos para implementar SEO',
        steps: [
          { title: 'Auditoria inicial', desc: 'Velocidad, estructura tecnica, mobile y errores de indexacion.' },
          { title: 'Investigacion de keywords', desc: 'Identificar los terminos que tus clientes realmente buscan.' },
          { title: 'Optimizacion de contenido', desc: 'Mejorar titulos, encabezados, URLs y texto existente.' },
          { title: 'Creacion de contenido', desc: 'Articulos, guias y casos de estudio que generen autoridad.' },
        ],
      },
      {
        type: 'steps',
        tag: 'Estrategia',
        title: '7 pasos (continuacion)',
        startNum: 5,
        steps: [
          { title: 'SEO tecnico', desc: 'Estructura HTML, metadata, sitemaps y enlaces internos.' },
          { title: 'Link building', desc: 'Obtener menciones y enlaces desde directorios, medios y partners.' },
          { title: 'Monitoreo continuo', desc: 'Google Search Console y Analytics para medir y ajustar.' },
        ],
        footnote: '"El SEO no es un gasto — es una inversion que se acumula con el tiempo."',
      },
      {
        type: 'stats',
        tag: 'Resultados',
        title: 'Que esperar del SEO',
        stats: [
          { label: 'Bases y optimizacion', value: 'Mes 1-3', desc: 'Auditoria, correccion tecnica, primeras mejoras de contenido.' },
          { label: 'Primeros resultados', value: 'Mes 3-6', desc: 'Mejoras visibles en rankings, aumento gradual de trafico organico.' },
          { label: 'Crecimiento compuesto', value: 'Mes 6+', desc: 'Trafico sostenido y creciente. Sin costo por clic.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Lee el articulo completo',
        headline: 'Posiciona tu negocio en Google sin depender de la publicidad',
        desc: 'Disenamos e implementamos estrategias SEO para empresas en Chile. Consulta gratis.',
        ctaText: 'subdominio.cl/blog',
      },
    ],
  },

  // PM — SRV — Automatizacion (carousel 7 slides)
  {
    id: 'sem1/dia01-pm-automatizacion',
    pilar: 'SRV',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        theme: 'light',
        category: 'Servicios',
        subtitle: 'Automatizacion',
        title: 'Automatizacion real, resultados tangibles',
        desc: 'Eliminamos tareas repetitivas con soluciones a medida, integradas en tus sistemas.',
      },
      {
        type: 'cards',
        tag: 'Soluciones',
        title: 'Automatizacion personalizada',
        cards: [
          { title: 'Procesos empresariales', desc: 'Inventarios, facturacion, reportes y flujos de aprobacion integrados en tu ERP o CRM.' },
          { title: 'Contenido con IA', desc: 'Textos para productos, respuestas automaticas y optimizacion SEO adaptada a tu negocio.' },
          { title: 'Integraciones complejas', desc: 'Conexion de ERP, CRM, logistica y facturacion electronica via API REST o GraphQL.' },
          { title: 'Workflows operativos', desc: 'Notificaciones, control de estados y validaciones automaticas.' },
        ],
      },
      {
        type: 'bigstat',
        tag: 'Caso real',
        number: '01',
        title: 'Descripciones con IA',
        desc: '500 productos actualizados en 1 hora vs 125 horas de trabajo manual.',
        stat: '-99% tiempo',
      },
      {
        type: 'cards',
        tag: 'Casos reales',
        title: '',
        cards: [
          { title: 'Reportes automaticos', desc: 'Informes diarios sin intervencion humana, enviados a las 9 AM sin falta.', badge: '40h/mes liberadas' },
          { title: 'Sincronizacion stock', desc: 'ERP, tienda y marketplace sincronizados en tiempo real. Cero sobreventa.', badge: '-95% reclamos' },
        ],
      },
      {
        type: 'list',
        tag: 'Diferenciadores',
        title: 'Por que elegirnos',
        items: [
          { title: 'Desarrollo 100% a medida', desc: 'Sin dependencias de plataformas externas.' },
          { title: 'Integracion nativa', desc: 'Con tus sistemas existentes.' },
          { title: 'Optimizacion constante', desc: 'Basada en metricas y uso real.' },
          { title: 'Soporte especializado', desc: 'Mantenimiento evolutivo incluido.' },
        ],
      },
      {
        type: 'cards',
        tag: 'Relacionados',
        title: 'Servicios relacionados',
        cards: [
          { title: 'Software a medida', desc: 'Sistemas con automatizacion integrada.' },
          { title: 'E-commerce', desc: 'Automatiza tu tienda online.' },
          { title: 'Desarrollo Web', desc: 'Webs con funciones automatizadas.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Solicitar consultoria',
        headline: 'La automatizacion debe adaptarse a tu negocio',
        desc: 'Soluciones propias para que tu operacion sea mas rapida, segura y eficiente.',
        ctaText: 'info@subdominio.cl',
      },
    ],
  },

  // NT — MRK — "Codigo con proposito"
  {
    id: 'sem1/dia01-nt-codigo-proposito',
    pilar: 'MRK',
    format: 'feed',
    feed: {
      variant: 'quote',
      text: 'Codigo con proposito',
      subtitle: 'Estudio digital especializado en crear experiencias web que impulsan negocios reales.',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 2 — MARTES
  // ═══════════════════════════════════════════════════════════════

  // AM — TIP — Velocidad de carga
  {
    id: 'sem1/dia02-am-tip-velocidad',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'Tu sitio web debe cargar en menos de 3 segundos',
      body: '53% de usuarios abandonan si tarda mas. La velocidad afecta directamente tus conversiones y tu posicionamiento en Google.',
      items: [
        'Optimiza y comprime imagenes',
        'Usa CDN para servir contenido estatico',
        'Minimiza JavaScript y CSS innecesario',
      ],
    },
  },

  // PM — PRY — erpsync.app
  {
    id: 'sem1/dia02-pm-pry-erpsync',
    pilar: 'PRY',
    format: 'feed',
    feed: {
      variant: 'project',
      name: 'erpsync.app',
      type: 'SaaS',
      desc: 'Sincroniza Softland ERP con WooCommerce y Shopify en tiempo real. Inventario, precios y pedidos siempre actualizados.',
      stack: ['Astro', 'React', 'Node.js', 'PostgreSQL'],
    },
  },

  // NT — EDU — WooCommerce vs Shopify vs Jumpseller (carousel 7 slides)
  {
    id: 'sem1/dia02-nt-ecommerce-comparativa',
    pilar: 'EDU',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'E-commerce Chile',
        subtitle: 'Comparativa 2025',
        title: 'WooCommerce vs Shopify vs Jumpseller',
        desc: 'Cual es la mejor plataforma para tu tienda online en Chile.',
      },
      {
        type: 'cards',
        tag: 'Resumen',
        title: 'Tres opciones, tres enfoques',
        cards: [
          { title: 'WooCommerce', desc: 'Flexibilidad total y control de datos, sin comisiones de plataforma.', badge: 'Control total' },
          { title: 'Shopify', desc: 'Facilidad de uso excepcional y escalabilidad automatica.', badge: 'Simplicidad' },
          { title: 'Jumpseller', desc: 'Precios en CLP, WebPay nativo y soporte en espanol.', badge: 'Mercado local' },
        ],
      },
      {
        type: 'table',
        tag: 'Costos',
        title: 'Costo total de propiedad',
        headers: ['Plataforma', 'Moneda', 'Comision', 'Ideal para'],
        rows: [
          ['WooCommerce', 'Variable', '0%', 'Control total'],
          ['Shopify', 'USD', 'Si', 'Simplicidad'],
          ['Jumpseller', 'CLP', '0%', 'Mercado local'],
        ],
      },
      {
        type: 'list',
        tag: 'Chile',
        title: 'Pagos y logistica local',
        items: [
          { title: 'WooCommerce', desc: 'WebPay via plugin, sin comision de plataforma. Chilexpress y Starken via plugins.' },
          { title: 'Shopify', desc: 'Sin WebPay nativo, comision extra por pasarela externa. Enviame y Shipit via apps.' },
          { title: 'Jumpseller', desc: 'WebPay nativo, cero comision de plataforma. Couriers nativos con descuentos.' },
        ],
      },
      {
        type: 'table',
        tag: 'Funcionalidades',
        title: 'Comparativa tecnica',
        headers: ['', 'Woo', 'Shopify', 'Jump'],
        rows: [
          ['SEO y contenido', 'Excepcional', 'Solido', 'Correcto'],
          ['Personalizacion', 'Ilimitada', 'APIs + apps', 'Visual + codigo'],
          ['Escalabilidad', 'Con tu hosting', 'Automatica', 'Para PYMEs'],
          ['B2B avanzado', 'Via plugins', 'Shopify Plus', 'Basico'],
          ['Propiedad datos', 'Total', 'Exportable', 'Exportable'],
        ],
      },
      {
        type: 'cards',
        tag: 'Recomendacion',
        title: 'Cual elegir segun tu perfil',
        cards: [
          { title: 'Jumpseller', desc: 'Pagos y envios chilenos listos, soporte en espanol, precios en CLP.', badge: 'Startup local' },
          { title: 'Shopify', desc: 'Escala sin preocuparte por infraestructura, ecosistema masivo de apps.', badge: 'Marca regional' },
          { title: 'WooCommerce', desc: 'Integracion ERP, catalogos privados, control total sin comisiones.', badge: 'B2B complejo' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Lee el articulo completo',
        headline: 'Te ayudamos a elegir e implementar tu tienda online',
        desc: 'Experiencia implementando y optimizando tiendas en WooCommerce, Shopify y Jumpseller.',
        ctaText: 'subdominio.cl/blog',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 3 — MIERCOLES
  // ═══════════════════════════════════════════════════════════════

  // AM — EDU — Que es WooCommerce (carousel 7 slides)
  {
    id: 'sem1/dia03-am-woocommerce',
    pilar: 'EDU',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'E-commerce',
        subtitle: 'Guia WooCommerce',
        title: 'Que es WooCommerce y por que las PYMEs chilenas lo eligen',
        desc: 'La plataforma e-commerce mas flexible del mercado, construida sobre WordPress.',
      },
      {
        type: 'list',
        tag: 'Ventajas',
        title: 'Por que elegir WooCommerce',
        items: [
          { title: 'Codigo abierto', desc: 'Sin licencias mensuales. Tu eres dueno de tu tienda y tus datos.' },
          { title: 'Flexibilidad total', desc: 'Miles de plugins y themes para personalizar cualquier aspecto.' },
          { title: 'SEO nativo', desc: 'WordPress es el CMS mejor optimizado para Google.' },
          { title: 'Comunidad masiva', desc: 'Soporte, documentacion y desarrolladores disponibles en todo el mundo.' },
        ],
      },
      {
        type: 'cards',
        tag: 'Costos',
        title: 'Que necesitas para empezar',
        cards: [
          { title: 'Hosting', desc: 'Desde $5.000/mes en Chile. Hosting compartido o VPS segun trafico.', badge: 'Obligatorio' },
          { title: 'Dominio', desc: '.cl o .com. Renovacion anual desde $8.000.', badge: 'Obligatorio' },
          { title: 'Theme premium', desc: 'Pago unico desde $30 USD. Mejora el diseno y velocidad.', badge: 'Recomendado' },
          { title: 'Plugins premium', desc: 'Segun necesidad: pagos, envio, facturacion.', badge: 'Segun caso' },
        ],
      },
      {
        type: 'list',
        tag: 'Integraciones',
        title: 'Pagos y logistica en Chile',
        items: [
          { title: 'WebPay Plus', desc: 'Pago con tarjetas de credito y debito. El estandar en Chile.' },
          { title: 'Khipu y Flow', desc: 'Transferencias bancarias y pagos alternativos.' },
          { title: 'Chilexpress y Starken', desc: 'Calculo de envio automatico con plugins dedicados.' },
          { title: 'Facturacion electronica', desc: 'Integracion con SII via plugins o APIs.' },
        ],
      },
      {
        type: 'steps',
        tag: 'Proceso',
        title: 'Como implementamos WooCommerce',
        steps: [
          { title: 'Discovery', desc: 'Entendemos tu negocio, productos y clientes objetivo.' },
          { title: 'Diseno y configuracion', desc: 'Theme profesional, estructura de categorias y pagos.' },
          { title: 'Integraciones', desc: 'WebPay, logistica, facturacion y ERP si aplica.' },
          { title: 'Lanzamiento', desc: 'Testing completo, capacitacion y soporte post-lanzamiento.' },
        ],
      },
      {
        type: 'list',
        tag: 'Ideal para',
        title: 'Cuando elegir WooCommerce',
        items: [
          { title: 'Control de datos', desc: 'Necesitas ser dueno de toda tu informacion de clientes y ventas.' },
          { title: 'B2B complejo', desc: 'Precios por volumen, catalogos privados, roles de cliente.' },
          { title: 'Integracion ERP', desc: 'Conexion con Softland, SAP u otros sistemas de gestion.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Implementamos tu tienda',
        headline: 'WooCommerce adaptado a tu negocio en Chile',
        desc: 'Tiendas optimizadas con WebPay, logistica local y soporte en espanol.',
        ctaText: 'subdominio.cl/e-commerce',
      },
    ],
  },

  // PM — SOL — ERPSync (carousel 6 slides)
  {
    id: 'sem1/dia03-pm-erpsync',
    pilar: 'SOL',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'Soluciones',
        subtitle: 'ERPSync',
        title: 'Sincroniza tu ERP con tu tienda online',
        desc: 'Inventario, precios y pedidos actualizados en tiempo real entre Softland y tu e-commerce.',
      },
      {
        type: 'text',
        tag: 'Problema',
        title: 'El problema del stock manual',
        body: 'Actualizar inventario manualmente entre tu ERP y tu tienda genera errores, sobreventas y clientes insatisfechos. Cada minuto de desincronizacion es una venta perdida o un reclamo.',
      },
      {
        type: 'cards',
        tag: 'Solucion',
        title: 'Que hace ERPSync',
        cards: [
          { title: 'Inventario en tiempo real', desc: 'Stock sincronizado automaticamente entre Softland y WooCommerce o Shopify.' },
          { title: 'Precios centralizados', desc: 'Cambia precios en tu ERP y se reflejan al instante en tu tienda.' },
          { title: 'Pedidos bidireccionales', desc: 'Las ventas online se registran automaticamente en Softland.' },
        ],
      },
      {
        type: 'list',
        tag: 'Compatibilidad',
        title: 'Funciona con tu stack',
        items: [
          { title: 'Softland ERP', desc: 'Inventario, contable y facturacion.' },
          { title: 'WooCommerce', desc: 'Sincronizacion nativa via API REST.' },
          { title: 'Shopify', desc: 'Integracion completa de catalogo y pedidos.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Elimina la sincronizacion manual',
        headline: 'Tu ERP y tu tienda, siempre sincronizados',
        desc: 'ERPSync conecta Softland con WooCommerce y Shopify sin intervencion humana.',
        ctaText: 'erpsync.app',
      },
    ],
  },

  // NT — BTS — Proceso de trabajo (story)
  {
    id: 'sem1/dia03-nt-proceso',
    pilar: 'BTS',
    format: 'story',
    story: {
      variant: 'bts',
      title: 'Nuestro proceso de trabajo',
      subtitle: '4 fases para cada proyecto',
      items: [
        'Discovery — Investigamos tu negocio, competencia y objetivos',
        'Diseno — Wireframes, prototipos y validacion visual',
        'Desarrollo — Codigo limpio, testing y optimizacion',
        'Lanzamiento — Deploy, capacitacion y soporte 30 dias',
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 4 — JUEVES
  // ═══════════════════════════════════════════════════════════════

  // AM — TIP — RUT en checkout
  {
    id: 'sem1/dia04-am-tip-rut',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'Agrega RUT y giro en tu checkout WooCommerce',
      body: 'Obligatorio para facturacion electronica en Chile. Sin estos campos, tus clientes B2B no pueden comprar correctamente.',
      items: [
        'Campo RUT con validacion automatica',
        'Giro comercial para facturas',
        'Mejora la conversion B2B',
      ],
    },
  },

  // PM — PRY — dtepdf.cl
  {
    id: 'sem1/dia04-pm-pry-dtepdf',
    pilar: 'PRY',
    format: 'feed',
    feed: {
      variant: 'project',
      name: 'dtepdf.cl',
      type: 'SaaS',
      desc: 'Convierte documentos XML del SII a PDF legible. Conversion masiva y API REST para integracion con sistemas contables.',
      stack: ['Node.js', 'React', 'PDF Generation', 'API REST'],
    },
  },

  // NT — MRK — 20+ anos experiencia
  {
    id: 'sem1/dia04-nt-experiencia',
    pilar: 'MRK',
    format: 'feed',
    feed: {
      variant: 'stat',
      value: '20+',
      label: 'anos de experiencia, 100+ empresas',
      context: 'Division de Tecnologica Chile. Respaldo empresarial con la agilidad de un equipo especializado.',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 5 — VIERNES
  // ═══════════════════════════════════════════════════════════════

  // AM — EDU — Fichas de producto (carousel 7 slides)
  {
    id: 'sem1/dia05-am-fichas-producto',
    pilar: 'EDU',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'E-commerce',
        subtitle: 'Guia practica',
        title: 'Como mejorar fichas de producto para vender mas',
        desc: 'Optimiza cada elemento de tus fichas para aumentar conversiones y visibilidad en Google.',
      },
      {
        type: 'steps',
        tag: 'Elementos clave',
        title: '6 componentes de una ficha efectiva',
        steps: [
          { title: 'Titulo optimizado', desc: 'Incluye la keyword principal, marca y atributo diferenciador.' },
          { title: 'Descripcion persuasiva', desc: 'Beneficios antes que caracteristicas. Responde el "por que comprarlo".' },
          { title: 'Imagenes profesionales', desc: 'Minimo 3-5 fotos de alta calidad. Muestra el producto en uso.' },
        ],
      },
      {
        type: 'steps',
        tag: 'Elementos clave',
        title: '6 componentes (continuacion)',
        startNum: 4,
        steps: [
          { title: 'SEO on-page', desc: 'Meta title, meta description, alt text en imagenes y URL amigable.' },
          { title: 'Urgencia y escasez', desc: 'Stock limitado, ofertas por tiempo y badges de envio gratis.' },
          { title: 'Reviews y testimonios', desc: 'Prueba social que genera confianza y aumenta la tasa de conversion.' },
        ],
      },
      {
        type: 'list',
        tag: 'SEO',
        title: 'Optimizacion para Google',
        items: [
          { title: 'Schema markup', desc: 'Datos estructurados con precio, stock y calificacion para rich snippets.' },
          { title: 'URL amigable', desc: '/producto/nombre-descriptivo en vez de /p?id=123.' },
          { title: 'Contenido unico', desc: 'No copies las descripciones del fabricante. Google penaliza contenido duplicado.' },
        ],
      },
      {
        type: 'cards',
        tag: 'Chile',
        title: 'Adaptacion al mercado local',
        cards: [
          { title: 'Precios en CLP', desc: 'Siempre muestra precio final con IVA incluido.' },
          { title: 'Despacho claro', desc: 'Costos y plazos visibles antes del checkout.' },
          { title: 'Medios de pago', desc: 'WebPay, transferencia y cuotas sin interes como diferenciador.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Optimiza tus fichas',
        headline: 'Fichas de producto que convierten visitas en ventas',
        desc: 'Mejoramos cada detalle de tu e-commerce para maximizar conversion y SEO.',
        ctaText: 'subdominio.cl/e-commerce',
      },
    ],
  },

  // PM — SRV — Desarrollo Web (carousel 7 slides)
  {
    id: 'sem1/dia05-pm-desarrollo-web',
    pilar: 'SRV',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        theme: 'light',
        category: 'Servicios',
        subtitle: 'Desarrollo Web',
        title: 'Paginas que impresionan y funcionan',
        desc: 'Sitios web corporativos, landing pages y aplicaciones web con tecnologia moderna.',
      },
      {
        type: 'cards',
        tag: 'Servicios',
        title: 'Que desarrollamos',
        cards: [
          { title: 'Web corporativa', desc: 'Sitio profesional que refleja tu marca y genera confianza.' },
          { title: 'Landing pages', desc: 'Paginas de conversion optimizadas para campanas y lanzamientos.' },
          { title: 'Aplicaciones web', desc: 'Sistemas a medida con funcionalidad avanzada y UX cuidada.' },
          { title: 'Blog profesional', desc: 'Contenido SEO-optimizado que atrae trafico organico.' },
        ],
      },
      {
        type: 'list',
        tag: 'Tecnologia',
        title: 'Stack moderno',
        items: [
          { title: 'Astro', desc: '0 JS por defecto, velocidad extrema y SEO perfecto para sitios corporativos.' },
          { title: 'Next.js y React', desc: 'Aplicaciones web interactivas con server-side rendering.' },
          { title: 'WordPress', desc: 'CMS confiable con ecosistema masivo cuando el cliente lo necesita.' },
          { title: 'Tailwind CSS', desc: 'Diseno consistente y mantenible sin CSS custom.' },
        ],
      },
      {
        type: 'steps',
        tag: 'Proceso',
        title: 'Como trabajamos',
        steps: [
          { title: 'Discovery', desc: 'Entendemos tu negocio, publico y objetivos.' },
          { title: 'Diseno UI/UX', desc: 'Prototipos navegables antes de escribir codigo.' },
          { title: 'Desarrollo', desc: 'Codigo limpio, responsive y optimizado para velocidad.' },
          { title: 'Lanzamiento', desc: 'Deploy, capacitacion, documentacion y soporte 30 dias.' },
        ],
      },
      {
        type: 'list',
        tag: 'Incluido',
        title: 'En cada proyecto',
        items: [
          { title: 'Responsive design', desc: 'Perfecto en mobile, tablet y desktop.' },
          { title: 'SEO tecnico', desc: 'Estructura, metadata y velocidad optimizados desde el inicio.' },
          { title: 'Capacitacion', desc: 'Videos, documentacion y sesiones 1:1 para autonomia total.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Solicitar presupuesto',
        headline: 'Tu presencia digital empieza con una web profesional',
        desc: 'Precio fijo, sin costos ocultos. Garantia 30 dias post-lanzamiento.',
        ctaText: 'subdominio.cl/desarrollo-web',
      },
    ],
  },

  // NT — BTS — Stack tecnologico (story)
  {
    id: 'sem1/dia05-nt-stack',
    pilar: 'BTS',
    format: 'story',
    story: {
      variant: 'tech',
      title: 'Stack tecnologico que usamos',
      items: ['Next.js', 'React', 'Astro', 'WordPress', 'WooCommerce', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'TypeScript'],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 6 — SABADO
  // ═══════════════════════════════════════════════════════════════

  // AM — TIP — Plugins WooCommerce
  {
    id: 'sem1/dia06-am-tip-plugins',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'No instales mas de 20 plugins en WooCommerce',
      body: 'Cada plugin agrega peso al sitio, riesgo de conflictos entre si y vulnerabilidades de seguridad si no se actualizan.',
      items: [
        'Audita plugins que no usas y desactivalos',
        'Prefiere plugins que resuelvan multiples funciones',
        'Revisa actualizaciones semanalmente',
      ],
    },
  },

  // PM — PRY — comcer.cl
  {
    id: 'sem1/dia06-pm-pry-comcer',
    pilar: 'PRY',
    format: 'feed',
    feed: {
      variant: 'project',
      name: 'comcer.cl',
      type: 'E-commerce',
      desc: 'Tienda online de productos de limpieza ecologicos para empresas. Catalogo B2B con pedidos mayoristas y despacho nacional.',
      stack: ['WooCommerce', 'WordPress', 'WebPay', 'Chilexpress'],
    },
  },

  // NT — MRK — Frase posicionamiento
  {
    id: 'sem1/dia06-nt-frase',
    pilar: 'MRK',
    format: 'feed',
    feed: {
      variant: 'quote',
      text: 'No vendemos horas de desarrollo. Vendemos soluciones que funcionan.',
      subtitle: 'Precio fijo, entrega puntual, garantia incluida.',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 7 — DOMINGO
  // ═══════════════════════════════════════════════════════════════

  // AM — EDU — Pagina web vs Landing vs Tienda (carousel 6 slides)
  {
    id: 'sem1/dia07-am-web-vs-landing',
    pilar: 'EDU',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'Desarrollo Web',
        subtitle: 'Guia basica',
        title: 'Pagina web vs Landing page vs Tienda online',
        desc: 'Cual necesitas segun tu objetivo de negocio.',
      },
      {
        type: 'cards',
        tag: 'Tipos',
        title: 'Tres formatos, tres objetivos',
        cards: [
          { title: 'Pagina web', desc: 'Presencia digital completa: quienes somos, servicios, contacto y blog. Ideal para credibilidad.', badge: 'Credibilidad' },
          { title: 'Landing page', desc: 'Una sola pagina enfocada en conversion: formulario, CTA y persuasion. Ideal para campanas.', badge: 'Conversion' },
          { title: 'Tienda online', desc: 'Catalogo de productos con carrito, pagos y despacho. Ideal para vender.', badge: 'Ventas' },
        ],
      },
      {
        type: 'table',
        tag: 'Comparativa',
        title: 'Cuando usar cada uno',
        headers: ['', 'Web', 'Landing', 'Tienda'],
        rows: [
          ['Objetivo', 'Informar', 'Convertir', 'Vender'],
          ['Paginas', 'Multiples', '1 sola', 'Catalogo'],
          ['Tiempo', '4-8 semanas', '1-2 semanas', '6-12 semanas'],
          ['Inversion', 'Media', 'Baja', 'Alta'],
        ],
      },
      {
        type: 'list',
        tag: 'Recomendacion',
        title: 'Que elegir segun tu etapa',
        items: [
          { title: 'Recien empezando', desc: 'Landing page para validar tu oferta y captar leads rapidamente.' },
          { title: 'Negocio establecido', desc: 'Pagina web completa que transmita profesionalismo y genere confianza.' },
          { title: 'Listo para vender online', desc: 'Tienda con WooCommerce o Shopify segun tus necesidades.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Necesitas ayuda para decidir?',
        headline: 'Te ayudamos a elegir el formato correcto para tu negocio',
        desc: 'Consultoria gratuita. Analizamos tu caso y te recomendamos la mejor opcion.',
        ctaText: 'subdominio.cl',
      },
    ],
  },

  // PM — TIP — HTTPS
  {
    id: 'sem1/dia07-pm-tip-https',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'HTTPS no es opcional',
      body: 'Google penaliza sitios sin SSL desde 2018. Afecta tu posicionamiento SEO, la confianza del usuario y las tasas de conversion.',
      items: [
        'Certificado SSL gratuito con Let\'s Encrypt',
        'Redirige todo el trafico HTTP a HTTPS',
        'Verifica que no haya contenido mixto',
      ],
    },
  },

  // NT — BTS — Valores de Subdominio (story)
  {
    id: 'sem1/dia07-nt-valores',
    pilar: 'BTS',
    format: 'story',
    story: {
      variant: 'bts',
      title: 'Valores de Subdominio',
      subtitle: 'Lo que nos define como equipo',
      items: [
        'Calidad de codigo — Escribimos codigo limpio, documentado y mantenible',
        'Transparencia — Comunicacion clara sobre plazos, costos y avance',
        'Entregas puntuales — Compromisos realistas que cumplimos',
        'Compromiso real — No somos proveedores, somos socios tecnologicos',
      ],
    },
  },
]
