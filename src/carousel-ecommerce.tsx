import { render } from './render.js'
import { getBrand, FEED_VERTICAL } from './brands/index.js'

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
        E-commerce Chile
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
        Comparativa 2025
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 54,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: '#f4f4f5',
          lineHeight: 1.1,
        }}
      >
        WooCommerce vs Shopify vs Jumpseller
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
        Cuál es la mejor plataforma para tu tienda online en Chile.
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

// ─── SLIDE 2: Resumen rápido ─────────────────────────────────────
const platforms = [
  {
    name: 'WooCommerce',
    strength: 'Flexibilidad total y control de datos, sin comisiones de plataforma.',
    tradeoff: 'Requiere mantención técnica',
  },
  {
    name: 'Shopify',
    strength: 'Facilidad de uso excepcional y escalabilidad automática.',
    tradeoff: 'Cobra en USD + comisiones extra',
  },
  {
    name: 'Jumpseller',
    strength: 'Precios en CLP, WebPay nativo y soporte en español.',
    tradeoff: 'Ecosistema de apps limitado',
  },
]

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
      <Tag label="Resumen" />
      <SlideNumber n="2" />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {platforms.map((p) => (
        <div
          key={p.name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fafafa',
            borderRadius: 12,
            padding: '28px 32px',
            border: '1px solid #e4e4e7',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 12,
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 28,
                fontFamily: fonts.display,
                fontWeight: 700,
                color: c.text.light,
              }}
            >
              {p.name}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 12,
                fontFamily: fonts.sans,
                fontWeight: 500,
                color: c.textMuted,
                backgroundColor: '#ffffff',
                padding: '4px 14px',
                borderRadius: 50,
                border: '1px solid #e4e4e7',
              }}
            >
              {p.tradeoff}
            </div>
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
            {p.strength}
          </div>
        </div>
      ))}
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={1} />
      <Logo />
    </div>
  </div>
)

// ─── SLIDE 3: Costos ─────────────────────────────────────────────
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
      <Tag label="Costos" />
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
        Costo total de propiedad
      </div>

      {/* Table header */}
      <div
        style={{
          display: 'flex',
          padding: '16px 0',
          borderBottom: '2px solid #18181b',
          gap: 0,
        }}
      >
        <div style={{ display: 'flex', width: 220, fontSize: 13, fontFamily: fonts.sans, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.textMuted }}>
          Plataforma
        </div>
        <div style={{ display: 'flex', flex: 1, fontSize: 13, fontFamily: fonts.sans, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.textMuted }}>
          Moneda
        </div>
        <div style={{ display: 'flex', flex: 1, fontSize: 13, fontFamily: fonts.sans, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.textMuted }}>
          Comisión
        </div>
        <div style={{ display: 'flex', flex: 1, fontSize: 13, fontFamily: fonts.sans, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.textMuted }}>
          Ideal para
        </div>
      </div>

      {/* Rows */}
      {[
        { name: 'WooCommerce', currency: 'Variable', commission: '0%', ideal: 'Control total' },
        { name: 'Shopify', currency: 'USD', commission: 'Sí', ideal: 'Simplicidad' },
        { name: 'Jumpseller', currency: 'CLP', commission: '0%', ideal: 'Mercado local' },
      ].map((row, i) => (
        <div
          key={row.name}
          style={{
            display: 'flex',
            padding: '20px 0',
            borderBottom: i < 2 ? '1px solid #e4e4e7' : 'none',
          }}
        >
          <div style={{ display: 'flex', width: 220, fontSize: 20, fontFamily: fonts.sans, fontWeight: 600, color: c.text.light }}>
            {row.name}
          </div>
          <div style={{ display: 'flex', flex: 1, fontSize: 18, fontFamily: fonts.sans, fontWeight: 400, color: c.textSecondary }}>
            {row.currency}
          </div>
          <div style={{ display: 'flex', flex: 1, fontSize: 18, fontFamily: fonts.sans, fontWeight: 600, color: row.commission === '0%' ? '#18181b' : c.textSecondary }}>
            {row.commission}
          </div>
          <div style={{ display: 'flex', flex: 1, fontSize: 18, fontFamily: fonts.sans, fontWeight: 400, color: c.textSecondary }}>
            {row.ideal}
          </div>
        </div>
      ))}
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={2} />
      <Logo />
    </div>
  </div>
)

// ─── SLIDE 4: Pagos y logística Chile ────────────────────────────
const slide4 = (
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
        Chile
      </div>
      <SlideNumber n="4" />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          fontSize: 36,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: '#f4f4f5',
          marginBottom: 40,
        }}
      >
        Pagos y logística local
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {[
          { name: 'WooCommerce', pay: 'WebPay vía plugin, sin comisión de plataforma', ship: 'Chilexpress, Starken vía plugins' },
          { name: 'Shopify', pay: 'Sin WebPay nativo, comisión extra por pasarela externa', ship: 'Envíame, Shipit vía apps' },
          { name: 'Jumpseller', pay: 'WebPay nativo, cero comisión de plataforma', ship: 'Couriers nativos con descuentos' },
        ].map((p) => (
          <div
            key={p.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 24,
                fontFamily: fonts.display,
                fontWeight: 700,
                color: '#f4f4f5',
              }}
            >
              {p.name}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div
                style={{
                  display: 'flex',
                  fontSize: 17,
                  fontFamily: fonts.sans,
                  fontWeight: 400,
                  color: '#a1a1aa',
                  lineHeight: 1.4,
                }}
              >
                Pagos: {p.pay}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 17,
                  fontFamily: fonts.sans,
                  fontWeight: 400,
                  color: '#71717a',
                  lineHeight: 1.4,
                }}
              >
                Envío: {p.ship}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={3} />
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

// ─── SLIDE 5: SEO y personalización ──────────────────────────────
const features = [
  { feature: 'SEO y contenido', woo: 'Excepcional', shop: 'Sólido', jump: 'Correcto' },
  { feature: 'Personalización', woo: 'Ilimitada', shop: 'APIs + apps', jump: 'Visual + código' },
  { feature: 'Escalabilidad', woo: 'Con tu hosting', shop: 'Automática', jump: 'Para PYMEs' },
  { feature: 'B2B avanzado', woo: 'Vía plugins', shop: 'Shopify Plus', jump: 'Básico' },
  { feature: 'Propiedad datos', woo: 'Total', shop: 'Exportable', jump: 'Exportable' },
]

const slide5 = (
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
      <Tag label="Funcionalidades" />
      <SlideNumber n="5" />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          fontSize: 36,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          marginBottom: 32,
        }}
      >
        Comparativa técnica
      </div>

      {/* Header */}
      <div style={{ display: 'flex', padding: '14px 0', borderBottom: '2px solid #18181b' }}>
        <div style={{ display: 'flex', flex: 2, fontSize: 12, fontFamily: fonts.sans, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.textMuted }} />
        <div style={{ display: 'flex', flex: 1, fontSize: 12, fontFamily: fonts.sans, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.textMuted }}>
          Woo
        </div>
        <div style={{ display: 'flex', flex: 1, fontSize: 12, fontFamily: fonts.sans, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.textMuted }}>
          Shopify
        </div>
        <div style={{ display: 'flex', flex: 1, fontSize: 12, fontFamily: fonts.sans, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.textMuted }}>
          Jump
        </div>
      </div>

      {features.map((f, i) => (
        <div
          key={f.feature}
          style={{
            display: 'flex',
            padding: '16px 0',
            borderBottom: i < features.length - 1 ? '1px solid #f4f4f5' : 'none',
          }}
        >
          <div style={{ display: 'flex', flex: 2, fontSize: 17, fontFamily: fonts.sans, fontWeight: 600, color: c.text.light }}>
            {f.feature}
          </div>
          <div style={{ display: 'flex', flex: 1, fontSize: 16, fontFamily: fonts.sans, fontWeight: 400, color: c.textSecondary }}>
            {f.woo}
          </div>
          <div style={{ display: 'flex', flex: 1, fontSize: 16, fontFamily: fonts.sans, fontWeight: 400, color: c.textSecondary }}>
            {f.shop}
          </div>
          <div style={{ display: 'flex', flex: 1, fontSize: 16, fontFamily: fonts.sans, fontWeight: 400, color: c.textSecondary }}>
            {f.jump}
          </div>
        </div>
      ))}
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={4} />
      <Logo />
    </div>
  </div>
)

// ─── SLIDE 6: Recomendaciones por perfil ─────────────────────────
const profiles = [
  {
    profile: 'Startup local, poco tiempo',
    platform: 'Jumpseller',
    reason: 'Pagos y envíos chilenos listos, soporte en español, precios en CLP.',
  },
  {
    profile: 'Marca regional, equipo pequeño',
    platform: 'Shopify',
    reason: 'Escala sin preocuparte por infraestructura, ecosistema masivo de apps.',
  },
  {
    profile: 'B2B o requisitos complejos',
    platform: 'WooCommerce',
    reason: 'Integración ERP, catálogos privados, control total sin comisiones.',
  },
]

const slide6 = (
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
      <Tag label="Recomendación" />
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
          marginBottom: 36,
        }}
      >
        Cuál elegir según tu perfil
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {profiles.map((p) => (
          <div
            key={p.platform}
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#ffffff',
              borderRadius: 12,
              padding: '28px 32px',
              border: '1px solid #e4e4e7',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: 14,
                  fontFamily: fonts.sans,
                  fontWeight: 500,
                  color: c.textSecondary,
                }}
              >
                {p.profile}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 14,
                  fontFamily: fonts.sans,
                  fontWeight: 600,
                  color: '#18181b',
                  backgroundColor: '#e4e4e7',
                  padding: '4px 16px',
                  borderRadius: 4,
                }}
              >
                {p.platform}
              </div>
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
              {p.reason}
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
          fontSize: 46,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: '#f4f4f5',
          lineHeight: 1.15,
          textAlign: 'center',
          maxWidth: 800,
        }}
      >
        Te ayudamos a elegir e implementar tu tienda online
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
        Experiencia implementando y optimizando tiendas en WooCommerce, Shopify y Jumpseller.
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
console.log('Generando carrusel WooCommerce vs Shopify vs Jumpseller...\n')

await render(slide1, { ...FEED_VERTICAL, name: 'carousel-ecommerce-01' }, brand)
await render(slide2, { ...FEED_VERTICAL, name: 'carousel-ecommerce-02' }, brand)
await render(slide3, { ...FEED_VERTICAL, name: 'carousel-ecommerce-03' }, brand)
await render(slide4, { ...FEED_VERTICAL, name: 'carousel-ecommerce-04' }, brand)
await render(slide5, { ...FEED_VERTICAL, name: 'carousel-ecommerce-05' }, brand)
await render(slide6, { ...FEED_VERTICAL, name: 'carousel-ecommerce-06' }, brand)
await render(slide7, { ...FEED_VERTICAL, name: 'carousel-ecommerce-07' }, brand)

console.log('\nListo! 7 slides generados.')
