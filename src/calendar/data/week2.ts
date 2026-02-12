import type { Post } from '../types.js'

export const week2: Post[] = [
  // ═══════════════════════════════════════════════════════════════
  // DIA 8 — LUNES
  // ═══════════════════════════════════════════════════════════════

  // AM — EDU — Ventas cruzadas y upselling (carousel 7 slides)
  {
    id: 'sem2/dia08-am-upselling',
    pilar: 'EDU',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'WooCommerce',
        subtitle: 'Guia practica',
        title: 'Ventas cruzadas y upselling en WooCommerce',
        desc: 'Aumenta el valor promedio de pedido sin gastar mas en publicidad.',
      },
      {
        type: 'text',
        tag: 'Conceptos clave',
        title: 'Upselling vs Cross-selling',
        body: 'Upselling motiva a comprar la version premium del producto elegido. Cross-selling ofrece productos complementarios para aumentar el tamano del pedido.',
      },
      {
        type: 'steps',
        tag: 'Ubicaciones',
        title: 'Donde implementar cada estrategia',
        steps: [
          { title: 'Pagina de producto', desc: 'Upsells — Muestra la version superior del producto.' },
          { title: 'Carrito de compras', desc: 'Cross-sells — Sugiere complementos relevantes.' },
          { title: 'Checkout', desc: 'Ofertas limitadas — Descuento exclusivo por tiempo.' },
          { title: 'Emails post-compra', desc: 'Recomendaciones personalizadas basadas en historial.' },
        ],
      },
      {
        type: 'list',
        tag: 'Estrategias',
        title: '3 tacticas que funcionan',
        items: [
          { title: 'Bundles con descuento', desc: 'Agrupa productos complementarios con 10-20% de descuento. Mas valor percibido.' },
          { title: 'Version premium visible', desc: 'Comparativa visual: basico, popular y deluxe. Marca el del medio como "Mas elegido".' },
          { title: 'Maximo 3 en el carrito', desc: 'No satures. Sugiere solo 3 productos relacionados con compra en un clic.' },
        ],
      },
      {
        type: 'list',
        tag: 'Mercado chileno',
        title: 'Adapta tu estrategia al mercado local',
        items: [
          { title: 'Ahorro real', desc: 'Enfatiza la relacion calidad-precio sobre el lujo.' },
          { title: 'Cuotas sin interes', desc: 'WebPay Plus y pagos en cuotas como gatillo de conversion.' },
          { title: 'Envio gratis', desc: 'Establece umbrales de envio gratuito para pedidos mas grandes.' },
        ],
      },
      {
        type: 'stats',
        tag: 'Metricas',
        title: 'Que medir y cuanto esperar',
        stats: [
          { label: 'Valor promedio de pedido (AOV)', value: '+20-40%' },
          { label: 'Unidades por transaccion (UPT)', value: '+15-25%' },
          { label: 'Tasa de adopcion cross-sell', value: '15-25%' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Lee el articulo completo',
        headline: 'Implementamos upselling y cross-selling en tu tienda',
        desc: 'Estrategias personalizadas para maximizar el valor de cada cliente en WooCommerce.',
        ctaText: 'subdominio.cl/blog',
      },
    ],
  },

  // PM — SOL — APIRCV (carousel 6 slides)
  {
    id: 'sem2/dia08-pm-apircv',
    pilar: 'SOL',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'Soluciones',
        subtitle: 'APIRCV',
        title: 'Consulta masiva de compras y ventas SII',
        desc: 'API rapida para tracking tributario automatizado.',
      },
      {
        type: 'text',
        tag: 'Problema',
        title: 'El dolor de consultar al SII manualmente',
        body: 'Contadores y ERPs necesitan consultar compras y ventas en el SII constantemente. El proceso manual es lento, propenso a errores y no escala cuando tienes multiples empresas.',
      },
      {
        type: 'cards',
        tag: 'Solucion',
        title: 'Que ofrece APIRCV',
        cards: [
          { title: 'Consulta masiva', desc: 'Miles de documentos consultados en segundos via API REST.' },
          { title: 'Tracking automatico', desc: 'Monitoreo continuo de nuevos documentos emitidos y recibidos.' },
          { title: 'Integracion directa', desc: 'Conecta con tu ERP, sistema contable o dashboard propio.' },
        ],
      },
      {
        type: 'list',
        tag: 'Casos de uso',
        title: 'Quien lo necesita',
        items: [
          { title: 'Estudios contables', desc: 'Gestion de multiples empresas con consulta centralizada.' },
          { title: 'ERPs y sistemas de gestion', desc: 'Alimentar datos tributarios automaticamente.' },
          { title: 'Empresas con alto volumen', desc: 'Facturacion masiva que requiere conciliacion continua.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Automatiza tus consultas al SII',
        headline: 'APIRCV: datos tributarios en tiempo real',
        desc: 'API REST segura y documentada para consulta masiva de compras y ventas.',
        ctaText: 'subdominio.cl/soluciones',
      },
    ],
  },

  // NT — MRK — Precio fijo
  {
    id: 'sem2/dia08-nt-precio-fijo',
    pilar: 'MRK',
    format: 'feed',
    feed: {
      variant: 'quote',
      text: 'Precio fijo, sin costos ocultos',
      subtitle: 'Presupuesto cerrado desde el dia 1 + garantia 30 dias post-lanzamiento incluida.',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 9 — MARTES
  // ═══════════════════════════════════════════════════════════════

  // AM — TIP — Lazy loading
  {
    id: 'sem2/dia09-am-tip-lazy',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'Usa lazy loading en imagenes',
      body: 'Reduce el tiempo de carga inicial un 40-60%. Es nativo en HTML moderno con un simple atributo.',
      items: [
        'Agrega loading="lazy" a tus tags <img>',
        'Usa width y height para evitar layout shift',
        'Prioriza las imagenes above-the-fold sin lazy',
      ],
    },
  },

  // PM — PRY — baseapi.cl
  {
    id: 'sem2/dia09-pm-pry-baseapi',
    pilar: 'PRY',
    format: 'feed',
    feed: {
      variant: 'project',
      name: 'baseapi.cl',
      type: 'Plataforma API',
      desc: 'Plataforma API empresarial para integracion con SII, ERP y automatizacion tributaria. Endpoints seguros con autenticacion por tokens.',
      stack: ['Node.js', 'PostgreSQL', 'API REST', 'Docker'],
    },
  },

  // NT — EDU — Seguridad WooCommerce (carousel 7 slides)
  {
    id: 'sem2/dia09-nt-seguridad-woo',
    pilar: 'EDU',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'WooCommerce',
        subtitle: 'Seguridad',
        title: 'Proteger datos y seguridad en WooCommerce',
        desc: 'Guia completa para mantener tu tienda segura y proteger los datos de tus clientes.',
      },
      {
        type: 'list',
        tag: 'Fundamentos',
        title: 'Seguridad basica obligatoria',
        items: [
          { title: 'Certificado SSL', desc: 'HTTPS obligatorio. Cifra toda la comunicacion entre tu tienda y el cliente.' },
          { title: 'Backups automaticos', desc: 'Respaldo diario de base de datos y archivos. UpdraftPlus o similar.' },
          { title: 'Actualizaciones', desc: 'WordPress, WooCommerce y plugins siempre en su ultima version.' },
        ],
      },
      {
        type: 'steps',
        tag: 'Avanzado',
        title: 'Medidas de proteccion avanzadas',
        steps: [
          { title: 'Autenticacion 2FA', desc: 'Doble factor en el login de administradores y editores.' },
          { title: 'Firewall WAF', desc: 'Bloquea ataques comunes: SQL injection, XSS y fuerza bruta.' },
          { title: 'Roles de usuario', desc: 'Permisos minimos necesarios para cada tipo de usuario.' },
          { title: 'Monitoreo de actividad', desc: 'Registra cambios y accesos para detectar anomalias.' },
        ],
      },
      {
        type: 'cards',
        tag: 'Plugins',
        title: 'Herramientas recomendadas',
        cards: [
          { title: 'Wordfence', desc: 'Firewall, escaneo de malware y bloqueo de IPs sospechosas.' },
          { title: 'UpdraftPlus', desc: 'Backups automaticos a Google Drive, Dropbox o S3.' },
          { title: 'WP 2FA', desc: 'Autenticacion de dos factores para todos los roles.' },
        ],
      },
      {
        type: 'list',
        tag: 'Chile',
        title: 'Cumplimiento legal en Chile',
        items: [
          { title: 'Ley de datos personales', desc: 'Proteccion de datos de clientes segun normativa chilena vigente.' },
          { title: 'Facturacion electronica', desc: 'Datos tributarios requieren seguridad adicional en almacenamiento.' },
          { title: 'PCI DSS', desc: 'Si procesas pagos, cumple con estandares de seguridad de tarjetas.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Protege tu tienda',
        headline: 'La seguridad no es opcional cuando vendes online',
        desc: 'Auditamos y fortalecemos la seguridad de tu WooCommerce.',
        ctaText: 'subdominio.cl/e-commerce',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 10 — MIERCOLES
  // ═══════════════════════════════════════════════════════════════

  // AM — EDU — Velocidad WooCommerce (carousel 7 slides)
  {
    id: 'sem2/dia10-am-velocidad-woo',
    pilar: 'EDU',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'WooCommerce',
        subtitle: 'Performance',
        title: 'Optimizar velocidad WooCommerce',
        desc: 'Cada segundo de carga extra reduce tus conversiones un 7%. Asi lo solucionas.',
      },
      {
        type: 'steps',
        tag: 'Optimizacion',
        title: '6 acciones para acelerar tu tienda',
        steps: [
          { title: 'Cache de pagina', desc: 'WP Super Cache o LiteSpeed Cache. Reduce tiempo de respuesta un 70%.' },
          { title: 'CDN global', desc: 'Cloudflare o similar. Sirve contenido estatico desde el servidor mas cercano.' },
          { title: 'Imagenes WebP', desc: 'Convierte a WebP automaticamente. 30-50% mas liviano que JPG.' },
        ],
      },
      {
        type: 'steps',
        tag: 'Optimizacion',
        title: '6 acciones (continuacion)',
        startNum: 4,
        steps: [
          { title: 'Hosting optimizado', desc: 'No uses hosting compartido barato. Un VPS o hosting WooCommerce dedicado marca la diferencia.' },
          { title: 'Limpieza de base de datos', desc: 'Elimina revisiones, transients y datos huerfanos periodicamente.' },
          { title: 'Plugins livianos', desc: 'Menos plugins = menos queries. Reemplaza plugins pesados por alternativas ligeras.' },
        ],
      },
      {
        type: 'stats',
        tag: 'Impacto',
        title: 'Metricas que importan',
        stats: [
          { label: 'Tiempo de carga ideal', value: '< 3s', desc: 'El 53% de usuarios abandona si tarda mas de 3 segundos.' },
          { label: 'Peso de pagina ideal', value: '< 2 MB', desc: 'Imagenes optimizadas y codigo minificado.' },
          { label: 'Core Web Vitals', value: 'Verde', desc: 'LCP, FID y CLS en rango bueno para Google.' },
        ],
      },
      {
        type: 'cards',
        tag: 'Herramientas',
        title: 'Mide y monitorea',
        cards: [
          { title: 'PageSpeed Insights', desc: 'Analisis gratuito de Google con recomendaciones especificas.' },
          { title: 'GTmetrix', desc: 'Metricas detalladas de carga y waterfall de recursos.' },
          { title: 'Query Monitor', desc: 'Plugin para detectar queries lentas y plugins pesados.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Optimiza tu tienda',
        headline: 'Un sitio rapido vende mas',
        desc: 'Auditamos y optimizamos la velocidad de tu WooCommerce.',
        ctaText: 'subdominio.cl/e-commerce',
      },
    ],
  },

  // PM — SRV — E-commerce (carousel 7 slides)
  {
    id: 'sem2/dia10-pm-ecommerce-srv',
    pilar: 'SRV',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        theme: 'light',
        category: 'Servicios',
        subtitle: 'E-commerce',
        title: 'Tiendas online que convierten',
        desc: 'Desarrollamos e-commerce B2C, B2B y marketplace con tecnologia probada.',
      },
      {
        type: 'cards',
        tag: 'Tipos',
        title: 'Que tipo de tienda necesitas',
        cards: [
          { title: 'B2C directo', desc: 'Venta directa al consumidor final. Catalogo, carrito y checkout optimizado.' },
          { title: 'B2B especializado', desc: 'Precios por volumen, catalogos privados y roles de cliente.' },
          { title: 'Marketplace', desc: 'Multiples vendedores en una sola plataforma.' },
          { title: 'Suscripciones', desc: 'Productos recurrentes con cobro automatico mensual.' },
        ],
      },
      {
        type: 'list',
        tag: 'Integraciones',
        title: 'Conectamos todo tu ecosistema',
        items: [
          { title: 'Pagos locales', desc: 'WebPay Plus, Khipu, Flow y transferencia bancaria.' },
          { title: 'Logistica', desc: 'Chilexpress, Starken, Enviame con calculo automatico.' },
          { title: 'ERP y facturacion', desc: 'Softland, SAP y facturacion electronica SII.' },
          { title: 'Marketing', desc: 'Google Analytics, Meta Pixel, email marketing.' },
        ],
      },
      {
        type: 'list',
        tag: 'Diferenciadores',
        title: 'Por que nosotros',
        items: [
          { title: 'Precio fijo', desc: 'Sin sorpresas. Presupuesto cerrado desde el inicio.' },
          { title: 'Capacitacion incluida', desc: 'Videos, docs y sesiones para que administres tu tienda.' },
          { title: 'Garantia 30 dias', desc: 'Corregimos cualquier bug sin costo post-lanzamiento.' },
        ],
      },
      {
        type: 'stats',
        tag: 'Resultados',
        title: 'Lo que logramos',
        stats: [
          { label: 'Proyectos e-commerce', value: '50+' },
          { label: 'Tiempo de entrega promedio', value: '8 sem' },
          { label: 'Satisfaccion del cliente', value: '98%' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Solicitar presupuesto',
        headline: 'Tu tienda online, lista para vender',
        desc: 'Implementamos e-commerce completo con pagos, logistica y facturacion chilena.',
        ctaText: 'subdominio.cl/e-commerce',
      },
    ],
  },

  // NT — BTS — Como entregamos (story)
  {
    id: 'sem2/dia10-nt-entrega',
    pilar: 'BTS',
    format: 'story',
    story: {
      variant: 'bts',
      title: 'Como entregamos un proyecto',
      subtitle: 'Capacitacion incluida en cada entrega',
      items: [
        'Videos tutoriales grabados para tu equipo',
        'Documentacion tecnica y de usuario',
        'Sesiones 1:1 de capacitacion en vivo',
        'Soporte 30 dias post-lanzamiento',
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 11 — JUEVES
  // ═══════════════════════════════════════════════════════════════

  // AM — TIP — Meta titles
  {
    id: 'sem2/dia11-am-tip-meta',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'Optimiza tus meta titles para Google',
      body: 'El meta title es lo primero que ven tus potenciales clientes en los resultados de busqueda. Un buen titulo aumenta el CTR.',
      items: [
        'Maximo 60 caracteres para no cortarse',
        'Keyword principal al inicio del titulo',
        'Incluye tu ciudad si eres negocio local',
      ],
    },
  },

  // PM — PRY — agroalfalfa.cl
  {
    id: 'sem2/dia11-pm-pry-agroalfalfa',
    pilar: 'PRY',
    format: 'feed',
    feed: {
      variant: 'project',
      name: 'agroalfalfa.cl',
      type: 'E-commerce',
      desc: 'Sitio de venta de forraje con cotizacion personalizada y despacho a mas de 70 comunas en Chile.',
      stack: ['Next.js', 'React', 'Tailwind', 'PostgreSQL'],
    },
  },

  // NT — MRK — Equipos dedicados
  {
    id: 'sem2/dia11-nt-equipos',
    pilar: 'MRK',
    format: 'feed',
    feed: {
      variant: 'quote',
      text: 'Equipos dedicados, no solo tickets',
      subtitle: 'Cada proyecto tiene atencion personalizada, no un sistema de soporte generico.',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 12 — VIERNES
  // ═══════════════════════════════════════════════════════════════

  // AM — EDU — Tendencias e-commerce 2025 (carousel 7 slides)
  {
    id: 'sem2/dia12-am-tendencias',
    pilar: 'EDU',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'E-commerce',
        subtitle: 'Tendencias 2025',
        title: 'Tendencias tecnologicas e-commerce Chile',
        desc: 'Lo que viene y como preparar tu tienda online para el futuro.',
      },
      {
        type: 'list',
        tag: 'IA y personalizacion',
        title: 'Inteligencia artificial en e-commerce',
        items: [
          { title: 'Descripciones con IA', desc: 'Generacion automatica de textos de producto optimizados para SEO.' },
          { title: 'Chatbots inteligentes', desc: 'Atencion 24/7 con respuestas contextuales basadas en tu catalogo.' },
          { title: 'Recomendaciones', desc: 'Productos sugeridos basados en comportamiento real del usuario.' },
        ],
      },
      {
        type: 'list',
        tag: 'Pagos',
        title: 'Pagos digitales avanzados',
        items: [
          { title: 'Wallet digitales', desc: 'Apple Pay, Google Pay y pagos con un toque.' },
          { title: 'BNPL', desc: 'Compra ahora, paga despues. Cada vez mas popular en Chile.' },
          { title: 'Criptomonedas', desc: 'Adopcion incipiente pero creciente en nichos especificos.' },
        ],
      },
      {
        type: 'list',
        tag: 'Experiencia',
        title: 'Omnicanalidad y experiencia',
        items: [
          { title: 'Compra online, retira en tienda', desc: 'BOPIS como diferenciador para tiendas con punto fisico.' },
          { title: 'Social commerce', desc: 'Venta directa desde Instagram, TikTok y WhatsApp.' },
          { title: 'PWA', desc: 'Aplicaciones web progresivas que funcionan como apps nativas.' },
        ],
      },
      {
        type: 'cards',
        tag: 'Sostenibilidad',
        title: 'Tendencias en sostenibilidad',
        cards: [
          { title: 'Packaging eco', desc: 'Envases reciclables y reduccion de plastico en despachos.' },
          { title: 'Huella de carbono', desc: 'Compensacion de emisiones en envios como valor agregado.' },
          { title: 'Economia circular', desc: 'Programas de devolucion, reuso y reciclaje de productos.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Prepara tu tienda',
        headline: 'Implementamos las tendencias que aportan valor real',
        desc: 'No seguimos hype. Elegimos la tecnologia correcta para cada proyecto.',
        ctaText: 'subdominio.cl/e-commerce',
      },
    ],
  },

  // PM — SOL — Softland API REST (carousel 6 slides)
  {
    id: 'sem2/dia12-pm-softland-api',
    pilar: 'SOL',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'Soluciones',
        subtitle: 'Softland API',
        title: 'Conecta tu ERP Softland con todo',
        desc: 'API REST completa para integracion de inventario, clientes y ventas.',
      },
      {
        type: 'cards',
        tag: 'Endpoints',
        title: 'Que puedes conectar',
        cards: [
          { title: 'Inventario', desc: 'Consulta y actualiza stock en tiempo real desde cualquier sistema.' },
          { title: 'Clientes', desc: 'Sincroniza datos de clientes entre tu ERP y tu plataforma.' },
          { title: 'Ventas y pedidos', desc: 'Registra ventas automaticamente desde e-commerce o POS.' },
          { title: 'Facturacion', desc: 'Emision y consulta de documentos tributarios electronicos.' },
        ],
      },
      {
        type: 'list',
        tag: 'Seguridad',
        title: 'Acceso seguro y controlado',
        items: [
          { title: 'Autenticacion por tokens', desc: 'JWT con expiracion configurable y refresh automatico.' },
          { title: 'Rate limiting', desc: 'Proteccion contra abusos y sobrecarga del servidor.' },
          { title: 'Logs de acceso', desc: 'Registro completo de cada llamada a la API para auditoria.' },
        ],
      },
      {
        type: 'list',
        tag: 'Integraciones',
        title: 'Sistemas compatibles',
        items: [
          { title: 'WooCommerce y Shopify', desc: 'Sincronizacion bidireccional via ERPSync.' },
          { title: 'Dashboards BI', desc: 'Alimenta Power BI, Metabase o tu sistema de reportes.' },
          { title: 'Sistemas propios', desc: 'API REST estandar, documentada con Swagger/OpenAPI.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Integra tu Softland',
        headline: 'Tu ERP conectado con el mundo digital',
        desc: 'API REST documentada, segura y lista para produccion.',
        ctaText: 'subdominio.cl/soluciones',
      },
    ],
  },

  // NT — BTS — Tecnologias que dominamos (story)
  {
    id: 'sem2/dia12-nt-tecnologias',
    pilar: 'BTS',
    format: 'story',
    story: {
      variant: 'tech',
      title: 'Tecnologias que dominamos',
      items: ['React', 'Next.js', 'Astro', 'WordPress', 'WooCommerce', 'Node.js', 'PHP', 'PostgreSQL', 'MySQL', 'TypeScript'],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 13 — SABADO
  // ═══════════════════════════════════════════════════════════════

  // AM — TIP — Schema markup
  {
    id: 'sem2/dia13-am-tip-schema',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'Usa schema markup en tus productos',
      body: 'Los rich snippets con precio, disponibilidad y reviews mejoran el CTR en Google entre un 20-30%.',
      items: [
        'Product schema con precio y moneda (CLP)',
        'AggregateRating para mostrar estrellas',
        'Offer con availability y stock',
      ],
    },
  },

  // PM — PRY — tienda.sagita.cl
  {
    id: 'sem2/dia13-pm-pry-sagita',
    pilar: 'PRY',
    format: 'feed',
    feed: {
      variant: 'project',
      name: 'tienda.sagita.cl',
      type: 'E-commerce B2B',
      desc: 'E-commerce de equipos de seguridad industrial. Venta B2B con catalogo especializado y despacho a todo Chile.',
      stack: ['WooCommerce', 'WordPress', 'WebPay', 'API REST'],
    },
  },

  // NT — MRK — Codigo documentado
  {
    id: 'sem2/dia13-nt-codigo',
    pilar: 'MRK',
    format: 'feed',
    feed: {
      variant: 'quote',
      text: 'Codigo documentado y mantenible',
      subtitle: 'Entregamos codigo que otro desarrollador puede entender y mantener sin depender de nosotros.',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DIA 14 — DOMINGO
  // ═══════════════════════════════════════════════════════════════

  // AM — EDU — Sitio web profesional y valor de marca (carousel 6 slides)
  {
    id: 'sem2/dia14-am-valor-marca',
    pilar: 'EDU',
    format: 'carousel',
    slides: [
      {
        type: 'cover',
        category: 'Desarrollo Web',
        subtitle: 'Branding digital',
        title: 'Como un sitio web profesional aumenta el valor de tu marca',
        desc: 'Tu sitio web es tu carta de presentacion digital. Primeras impresiones que cierran negocios.',
      },
      {
        type: 'list',
        tag: 'Impacto',
        title: 'Que comunica tu sitio web',
        items: [
          { title: 'Primera impresion', desc: 'El 75% de la credibilidad de una empresa se basa en el diseno de su sitio web.' },
          { title: 'Profesionalismo', desc: 'Un sitio rapido, moderno y funcional transmite confianza inmediata.' },
          { title: 'Disponibilidad 24/7', desc: 'Tu mejor vendedor trabaja todo el dia, todos los dias.' },
        ],
      },
      {
        type: 'list',
        tag: 'SEO',
        title: 'Visibilidad organica',
        items: [
          { title: 'Aparece en Google', desc: 'Un sitio bien estructurado atrae trafico organico continuo.' },
          { title: 'Contenido que posiciona', desc: 'Blog y paginas de servicio que responden preguntas de tus clientes.' },
          { title: 'SEO local', desc: 'Posicionate en busquedas de tu ciudad y region.' },
        ],
      },
      {
        type: 'stats',
        tag: 'Datos',
        title: 'Numeros que importan',
        stats: [
          { label: 'Confianza por diseno web', value: '75%', desc: 'De la credibilidad se basa en el diseno del sitio.' },
          { label: 'Buscan online antes de comprar', value: '87%', desc: 'De los consumidores investigan online antes de decidir.' },
          { label: 'Abandonan sitios lentos', value: '53%', desc: 'Si tu sitio tarda mas de 3 segundos en cargar.' },
        ],
      },
      {
        type: 'cta',
        topLabel: 'Mejora tu presencia digital',
        headline: 'Tu marca merece un sitio web a su altura',
        desc: 'Disenamos sitios web que generan confianza, trafico y conversiones.',
        ctaText: 'subdominio.cl/desarrollo-web',
      },
    ],
  },

  // PM — TIP — Backup automatico
  {
    id: 'sem2/dia14-pm-tip-backup',
    pilar: 'TIP',
    format: 'feed',
    feed: {
      variant: 'tip',
      title: 'Configura backup automatico diario',
      body: 'Una caida sin backup puede costar semanas de trabajo. No te arriesgues — automatiza tus respaldos hoy.',
      items: [
        'UpdraftPlus para WordPress/WooCommerce',
        'Guarda en Google Drive, Dropbox o S3',
        'Prueba restaurar al menos una vez al mes',
      ],
    },
  },

  // NT — BTS — Por que Astro (story)
  {
    id: 'sem2/dia14-nt-astro',
    pilar: 'BTS',
    format: 'story',
    story: {
      variant: 'bts',
      title: 'Por que elegimos Astro para sitios corporativos',
      subtitle: 'La herramienta correcta para cada proyecto',
      items: [
        '0 JavaScript por defecto — velocidad extrema',
        'SEO perfecto — HTML estatico, no SPA',
        'Islands architecture — interactividad donde necesitas',
        'Compatible con React, Vue o Svelte',
      ],
    },
  },
]
