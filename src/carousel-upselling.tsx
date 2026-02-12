import { render } from './render.js'
import { getBrand, FEED } from './brands/index.js'

const brand = getBrand('subdominio')
const c = brand.colors
const fonts = brand.fonts

// ─── Shared components ───────────────────────────────────────────

const TOTAL = 7

const Logo = () => (
  <div
    style={{
      display: 'flex',
      fontSize: 22,
      fontFamily: fonts.display,
      fontWeight: 400,
      fontStyle: 'italic',
      color: c.textMuted,
    }}
  >
    subdominio.
  </div>
)

const PageIndicator = ({ current }: { current: number }) => (
  <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
    {Array.from({ length: TOTAL }).map((_, i) => (
      <div
        key={i}
        style={{
          display: 'flex',
          width: i === current ? 28 : 8,
          height: 8,
          backgroundColor: i === current ? c.accent : '#e4e4e7',
          borderRadius: 4,
        }}
      />
    ))}
  </div>
)

const SlideNumber = ({ n }: { n: string }) => (
  <div
    style={{
      display: 'flex',
      fontSize: 13,
      fontFamily: fonts.sans,
      fontWeight: 500,
      color: c.textMuted,
      letterSpacing: '0.12em',
    }}
  >
    {n} / {TOTAL}
  </div>
)

const Tag = ({ label }: { label: string }) => (
  <div
    style={{
      display: 'flex',
      fontSize: 11,
      fontFamily: fonts.sans,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: c.textSecondary,
      borderBottom: '2px solid #18181b',
      paddingBottom: 6,
      alignSelf: 'flex-start',
    }}
  >
    {label}
  </div>
)

// ─── SLIDE 1: Portada ────────────────────────────────────────────
const slide1 = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: '#09090b',
      padding: 72,
      justifyContent: 'space-between',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: 22,
          fontFamily: fonts.display,
          fontWeight: 400,
          fontStyle: 'italic',
          color: '#52525b',
        }}
      >
        subdominio.
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 12,
          fontFamily: fonts.sans,
          fontWeight: 500,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#52525b',
        }}
      >
        WooCommerce
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          fontSize: 12,
          fontFamily: fonts.sans,
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#a1a1aa',
          marginBottom: 28,
        }}
      >
        Guía práctica
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 56,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: '#f4f4f5',
          lineHeight: 1.1,
        }}
      >
        Ventas cruzadas y upselling en WooCommerce
      </div>
      <div
        style={{
          display: 'flex',
          width: 60,
          height: 3,
          backgroundColor: '#f4f4f5',
          marginTop: 32,
        }}
      />
      <div
        style={{
          display: 'flex',
          fontSize: 22,
          fontFamily: fonts.sans,
          fontWeight: 400,
          color: '#71717a',
          lineHeight: 1.5,
          marginTop: 24,
        }}
      >
        Aumenta el valor promedio de pedido sin gastar más en publicidad.
      </div>
    </div>

    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <PageIndicator current={0} />
      <div
        style={{
          display: 'flex',
          fontSize: 14,
          fontFamily: fonts.sans,
          fontWeight: 400,
          color: '#52525b',
        }}
      >
        Desliza →
      </div>
    </div>
  </div>
)

// ─── SLIDE 2: Conceptos clave ────────────────────────────────────
const slide2 = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
      padding: 72,
      justifyContent: 'space-between',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Tag label="Conceptos clave" />
      <SlideNumber n="2" />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {/* Upselling */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.text.light,
            marginBottom: 12,
          }}
        >
          Upselling
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: c.textSecondary,
            lineHeight: 1.5,
          }}
        >
          Motiva a tu cliente a comprar la versión premium del producto que ya eligió. Mayor valor por unidad.
        </div>
      </div>

      {/* Divider */}
      <div style={{ display: 'flex', width: '100%', height: 1, backgroundColor: '#e4e4e7' }} />

      {/* Cross-selling */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.text.light,
            marginBottom: 12,
          }}
        >
          Cross-selling
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: c.textSecondary,
            lineHeight: 1.5,
          }}
        >
          Ofrece productos complementarios para aumentar el tamaño del pedido. Más unidades por transacción.
        </div>
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={1} />
      <Logo />
    </div>
  </div>
)

// ─── SLIDE 3: Dónde implementar ──────────────────────────────────
const locations = [
  { place: 'Página de producto', type: 'Upsells' },
  { place: 'Carrito de compras', type: 'Cross-sells' },
  { place: 'Checkout', type: 'Ofertas limitadas' },
  { place: 'Emails post-compra', type: 'Recomendaciones' },
  { place: 'Páginas de categoría', type: 'Productos relacionados' },
]

const slide3 = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: '#fafafa',
      padding: 72,
      justifyContent: 'space-between',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Tag label="Ubicaciones" />
      <SlideNumber n="3" />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          fontSize: 36,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          marginBottom: 36,
        }}
      >
        Dónde implementar cada estrategia
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {locations.map((loc, i) => (
          <div
            key={loc.place}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 0',
              borderBottom: i < locations.length - 1 ? '1px solid #e4e4e7' : 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div
                style={{
                  display: 'flex',
                  fontSize: 16,
                  fontFamily: fonts.sans,
                  fontWeight: 500,
                  color: c.textMuted,
                  width: 28,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 22,
                  fontFamily: fonts.sans,
                  fontWeight: 600,
                  color: c.text.light,
                }}
              >
                {loc.place}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 14,
                fontFamily: fonts.sans,
                fontWeight: 500,
                color: c.textSecondary,
                backgroundColor: '#ffffff',
                padding: '6px 16px',
                borderRadius: 50,
                border: '1px solid #e4e4e7',
              }}
            >
              {loc.type}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={2} />
      <Logo />
    </div>
  </div>
)

// ─── SLIDE 4: Estrategias clave ──────────────────────────────────
const strategies = [
  {
    title: 'Bundles con descuento',
    desc: 'Agrupa productos complementarios con 10-20% de descuento. Más valor percibido.',
  },
  {
    title: 'Versión premium visible',
    desc: 'Muestra comparativa visual: básico, popular y deluxe. Marca el del medio como "Más elegido".',
  },
  {
    title: 'Máximo 3 en el carrito',
    desc: 'No satures. Sugiere solo 3 productos relacionados con compra en un clic.',
  },
]

const slide4 = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
      padding: 72,
      justifyContent: 'space-between',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Tag label="Estrategias" />
      <SlideNumber n="4" />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div
        style={{
          display: 'flex',
          fontSize: 36,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          marginBottom: 8,
        }}
      >
        3 tácticas que funcionan
      </div>
      {strategies.map((s, i) => (
        <div
          key={s.title}
          style={{
            display: 'flex',
            gap: 24,
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 48,
              height: 48,
              backgroundColor: '#09090b',
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 20,
                fontFamily: fonts.display,
                fontWeight: 700,
                color: '#f4f4f5',
              }}
            >
              {i + 1}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                fontFamily: fonts.sans,
                fontWeight: 600,
                color: c.text.light,
                marginBottom: 6,
              }}
            >
              {s.title}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 18,
                fontFamily: fonts.sans,
                fontWeight: 400,
                color: c.textSecondary,
                lineHeight: 1.5,
              }}
            >
              {s.desc}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={3} />
      <Logo />
    </div>
  </div>
)

// ─── SLIDE 5: Mercado chileno ────────────────────────────────────
const chiletips = [
  'Enfatiza el ahorro real y la relación calidad-precio',
  'Ofrece WebPay Plus y cuotas sin interés',
  'Usa despacho mismo día en Santiago como gatillo de urgencia',
  'Establece umbrales de envío gratis para pedidos más grandes',
]

const slide5 = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: '#09090b',
      padding: 72,
      justifyContent: 'space-between',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          fontSize: 11,
          fontFamily: fonts.sans,
          fontWeight: 600,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#71717a',
          borderBottom: '2px solid #f4f4f5',
          paddingBottom: 6,
        }}
      >
        Mercado chileno
      </div>
      <SlideNumber n="5" />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          fontSize: 36,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: '#f4f4f5',
          marginBottom: 36,
        }}
      >
        Adapta tu estrategia al mercado local
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {chiletips.map((tip, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
            <div
              style={{
                display: 'flex',
                width: 6,
                height: 6,
                backgroundColor: '#f4f4f5',
                borderRadius: 3,
                marginTop: 10,
              }}
            />
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                fontFamily: fonts.sans,
                fontWeight: 400,
                color: '#d4d4d8',
                lineHeight: 1.5,
                flex: 1,
              }}
            >
              {tip}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={4} />
      <div
        style={{
          display: 'flex',
          fontSize: 22,
          fontFamily: fonts.display,
          fontWeight: 400,
          fontStyle: 'italic',
          color: '#52525b',
        }}
      >
        subdominio.
      </div>
    </div>
  </div>
)

// ─── SLIDE 6: Métricas ──────────────────────────────────────────
const metrics = [
  { kpi: 'AOV', label: 'Valor promedio de pedido', target: '+20-40%' },
  { kpi: 'UPT', label: 'Unidades por transacción', target: '+15-25%' },
  { kpi: 'Cross-sell rate', label: 'Tasa de adopción', target: '15-25%' },
]

const slide6 = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
      padding: 72,
      justifyContent: 'space-between',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Tag label="Métricas" />
      <SlideNumber n="6" />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          fontSize: 36,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          marginBottom: 40,
        }}
      >
        Qué medir y cuánto esperar
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {metrics.map((m) => (
          <div
            key={m.kpi}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fafafa',
              padding: '28px 32px',
              borderRadius: 12,
              border: '1px solid #e4e4e7',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  fontSize: 12,
                  fontFamily: fonts.sans,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: c.textMuted,
                  marginBottom: 4,
                }}
              >
                {m.kpi}
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontFamily: fonts.sans,
                  fontWeight: 600,
                  color: c.text.light,
                }}
              >
                {m.label}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 32,
                fontFamily: fonts.display,
                fontWeight: 700,
                color: c.text.light,
              }}
            >
              {m.target}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={5} />
      <Logo />
    </div>
  </div>
)

// ─── SLIDE 7: CTA ───────────────────────────────────────────────
const slide7 = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: '#09090b',
      padding: 72,
      justifyContent: 'space-between',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: 22,
          fontFamily: fonts.display,
          fontWeight: 400,
          fontStyle: 'italic',
          color: '#52525b',
        }}
      >
        subdominio.
      </div>
      <SlideNumber n="7" />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          fontSize: 12,
          fontFamily: fonts.sans,
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#71717a',
          marginBottom: 28,
        }}
      >
        Lee el artículo completo
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 48,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: '#f4f4f5',
          lineHeight: 1.15,
          textAlign: 'center',
          maxWidth: 800,
        }}
      >
        Implementamos upselling y cross-selling en tu tienda
      </div>
      <div
        style={{
          display: 'flex',
          width: 50,
          height: 3,
          backgroundColor: '#f4f4f5',
          marginTop: 32,
          marginBottom: 28,
        }}
      />
      <div
        style={{
          display: 'flex',
          fontSize: 20,
          fontFamily: fonts.sans,
          fontWeight: 400,
          color: '#71717a',
          lineHeight: 1.5,
          textAlign: 'center',
          maxWidth: 640,
        }}
      >
        Estrategias personalizadas para maximizar el valor de cada cliente en WooCommerce.
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 18,
          fontFamily: fonts.sans,
          fontWeight: 600,
          color: '#18181b',
          backgroundColor: '#e4e4e7',
          padding: '18px 52px',
          borderRadius: 0,
          marginTop: 40,
        }}
      >
        subdominio.cl/blog
      </div>
    </div>

    <PageIndicator current={6} />
  </div>
)

// ─── Generate ────────────────────────────────────────────────────
console.log('Generando carrusel ventas cruzadas & upselling...\n')

await render(slide1, { ...FEED, name: 'carousel-upselling-01' }, brand)
await render(slide2, { ...FEED, name: 'carousel-upselling-02' }, brand)
await render(slide3, { ...FEED, name: 'carousel-upselling-03' }, brand)
await render(slide4, { ...FEED, name: 'carousel-upselling-04' }, brand)
await render(slide5, { ...FEED, name: 'carousel-upselling-05' }, brand)
await render(slide6, { ...FEED, name: 'carousel-upselling-06' }, brand)
await render(slide7, { ...FEED, name: 'carousel-upselling-07' }, brand)

console.log('\nListo! 7 slides generados.')
