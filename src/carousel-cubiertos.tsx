import fs from 'node:fs'
import path from 'node:path'
import { render } from './render.js'
import { getBrand, FEED_VERTICAL } from './brands/index.js'

const brand = getBrand('comcer')
const c = brand.colors
const fonts = brand.fonts

const assetsDir = path.resolve(import.meta.dirname, '../assets')
const logoImg = `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, 'logo-comcer.png')).toString('base64')}`

const loadImg = (name: string) =>
  `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, name)).toString('base64')}`

const imgRevolvedor14 = loadImg('cubierto-revolvedor-14.png')
const imgRevolvedor18 = loadImg('cubierto-revolvedor-18.png')
const imgTenedor = loadImg('cubierto-tenedor.png')
const imgCuchillo = loadImg('cubierto-cuchillo.png')
const imgCuchara = loadImg('cubierto-cuchara.png')

// ─── Shared components ───────────────────────────────────────────

const Logo = ({ size = 60 }: { size?: number }) => (
  <img src={logoImg} height={size} style={{ objectFit: 'contain' }} />
)

const PageIndicator = ({ current, total }: { current: number; total: number }) => (
  <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
    {Array.from({ length: total }).map((_, i) => (
      <div
        key={i}
        style={{
          display: 'flex',
          width: i === current ? 32 : 10,
          height: 10,
          backgroundColor: i === current ? c.accent : '#d4d4d8',
          borderRadius: 5,
        }}
      />
    ))}
  </div>
)

const SwipeHint = ({ light = false }: { light?: boolean }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    }}
  >
    <div
      style={{
        fontSize: 18,
        fontFamily: fonts.sans,
        fontWeight: 400,
        color: light ? 'rgba(255,255,255,0.5)' : c.textSecondary,
      }}
    >
      Desliza
    </div>
    <div
      style={{
        fontSize: 24,
        fontFamily: fonts.sans,
        color: light ? 'rgba(255,255,255,0.5)' : c.textSecondary,
      }}
    >
      →
    </div>
  </div>
)

const TOTAL = 5

// ─── SLIDE 1: Portada ────────────────────────────────────────────
const slide1 = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: c.background.dark,
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
      <Logo size={56} />
      <div
        style={{
          display: 'flex',
          fontSize: 15,
          fontFamily: fonts.sans,
          fontWeight: 700,
          color: c.accent,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          backgroundColor: 'rgba(152,204,63,0.15)',
          padding: '10px 20px',
          borderRadius: 8,
        }}
      >
        Eco-friendly
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          fontSize: 18,
          fontFamily: fonts.sans,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: c.accent,
          marginBottom: 28,
        }}
      >
        VAJILLA ECOAMIGABLE
      </div>
      <div
        style={{
          fontSize: 60,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: 1.05,
          textTransform: 'uppercase',
        }}
      >
        Cubiertos de madera compostables
      </div>
      <div
        style={{
          fontSize: 26,
          fontFamily: fonts.sans,
          fontWeight: 400,
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.5,
          marginTop: 28,
        }}
      >
        Ideales para food service, eventos y catering. 100% biodegradables y compostables.
      </div>
    </div>

    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <PageIndicator current={0} total={TOTAL} />
      <SwipeHint light />
    </div>
  </div>
)

// ─── SLIDE 2: Revolvedores ───────────────────────────────────────
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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          fontSize: 18,
          fontFamily: fonts.sans,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: c.accent,
          marginBottom: 16,
        }}
      >
        REVOLVEDORES
      </div>
      <div
        style={{
          fontSize: 44,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          lineHeight: 1.1,
          textTransform: 'uppercase',
        }}
      >
        Dos tamaños para cada necesidad
      </div>
    </div>

    <div style={{ display: 'flex', gap: 40, justifyContent: 'center' }}>
      {[
        { img: imgRevolvedor14, name: 'Revolvedor 14 cm', price: '$12.990 + IVA', qty: '1.000 un.' },
        { img: imgRevolvedor18, name: 'Revolvedor 18 cm', price: '$17.990 + IVA', qty: '1.000 un.' },
      ].map((p) => (
        <div
          key={p.name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 400,
              height: 400,
              backgroundColor: c.background.light,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <img src={p.img} width={340} height={340} style={{ objectFit: 'contain' }} />
          </div>
          <div
            style={{
              fontSize: 24,
              fontFamily: fonts.sans,
              fontWeight: 700,
              color: c.text.light,
              marginTop: 20,
              textAlign: 'center',
            }}
          >
            {p.name}
          </div>
          <div
            style={{
              fontSize: 20,
              fontFamily: fonts.sans,
              fontWeight: 400,
              color: c.textSecondary,
              marginTop: 6,
            }}
          >
            {p.qty}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              fontFamily: fonts.display,
              fontWeight: 700,
              color: c.accent,
              marginTop: 10,
            }}
          >
            {p.price}
          </div>
        </div>
      ))}
    </div>

    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <PageIndicator current={1} total={TOTAL} />
      <SwipeHint />
    </div>
  </div>
)

// ─── SLIDE 3: Cubiertos principales ──────────────────────────────
const slide3 = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: c.background.dark,
      padding: 72,
      justifyContent: 'space-between',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          fontSize: 18,
          fontFamily: fonts.sans,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: c.accent,
          marginBottom: 16,
        }}
      >
        CUBIERTOS PRINCIPALES
      </div>
      <div
        style={{
          fontSize: 44,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: 1.1,
          textTransform: 'uppercase',
        }}
      >
        Tenedor y cuchillo de madera
      </div>
    </div>

    <div style={{ display: 'flex', gap: 40, justifyContent: 'center' }}>
      {[
        { img: imgTenedor, name: 'Tenedor de madera', price: '$14.990 + IVA', qty: '1.000 un.' },
        { img: imgCuchillo, name: 'Cuchillo de madera', price: '$14.990 + IVA', qty: '1.000 un.' },
      ].map((p) => (
        <div
          key={p.name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 400,
              height: 400,
              backgroundColor: 'rgba(255,255,255,0.08)',
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <img src={p.img} width={340} height={340} style={{ objectFit: 'contain' }} />
          </div>
          <div
            style={{
              fontSize: 24,
              fontFamily: fonts.sans,
              fontWeight: 700,
              color: '#ffffff',
              marginTop: 20,
              textAlign: 'center',
            }}
          >
            {p.name}
          </div>
          <div
            style={{
              fontSize: 20,
              fontFamily: fonts.sans,
              fontWeight: 400,
              color: 'rgba(255,255,255,0.55)',
              marginTop: 6,
            }}
          >
            {p.qty}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              fontFamily: fonts.display,
              fontWeight: 700,
              color: c.accent,
              marginTop: 10,
            }}
          >
            {p.price}
          </div>
        </div>
      ))}
    </div>

    <div
      style={{
        display: 'flex',
        backgroundColor: 'rgba(152,204,63,0.15)',
        borderRadius: 12,
        padding: '16px 28px',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 12,
          height: 12,
          backgroundColor: c.accent,
          borderRadius: 6,
        }}
      />
      <div
        style={{
          fontSize: 20,
          fontFamily: fonts.sans,
          fontWeight: 600,
          color: c.accent,
        }}
      >
        100% compostable — se degrada en 90 días
      </div>
    </div>

    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <PageIndicator current={2} total={TOTAL} />
      <SwipeHint light />
    </div>
  </div>
)

// ─── SLIDE 4: Cuchara de sopa ────────────────────────────────────
const slide4 = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: c.background.light,
      padding: 72,
      justifyContent: 'space-between',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          fontSize: 18,
          fontFamily: fonts.sans,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: c.accent,
          marginBottom: 16,
        }}
      >
        PRODUCTO DESTACADO
      </div>
      <div
        style={{
          fontSize: 44,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          lineHeight: 1.1,
          textTransform: 'uppercase',
        }}
      >
        Cuchara de sopa de madera
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
      <div
        style={{
          display: 'flex',
          width: 480,
          height: 480,
          backgroundColor: '#ffffff',
          borderRadius: 24,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img src={imgCuchara} width={400} height={400} style={{ objectFit: 'contain' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 20 }}>
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.accent,
          }}
        >
          $14.990 + IVA
        </div>
        <div
          style={{
            fontSize: 22,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: c.textSecondary,
          }}
        >
          1.000 unidades
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            marginTop: 16,
          }}
        >
          {[
            'Madera de abedul natural',
            'Resistente y funcional',
            'Ideal para sopas y caldos',
            'Compostable y biodegradable',
          ].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  display: 'flex',
                  width: 12,
                  height: 12,
                  backgroundColor: c.accent,
                  borderRadius: 6,
                }}
              />
              <div
                style={{
                  fontSize: 22,
                  fontFamily: fonts.sans,
                  fontWeight: 600,
                  color: c.text.light,
                }}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <PageIndicator current={3} total={TOTAL} />
      <SwipeHint />
    </div>
  </div>
)

// ─── SLIDE 5: CTA ────────────────────────────────────────────────
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
    <Logo size={64} />

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          fontSize: 18,
          fontFamily: fonts.sans,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: c.accent,
          marginBottom: 28,
        }}
      >
        COTIZA HOY
      </div>
      <div
        style={{
          fontSize: 52,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          lineHeight: 1.1,
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        Cotiza tu pedido de cubiertos
      </div>
      <div
        style={{
          fontSize: 24,
          fontFamily: fonts.sans,
          fontWeight: 400,
          color: c.textSecondary,
          lineHeight: 1.5,
          textAlign: 'center',
          marginTop: 24,
          maxWidth: 800,
        }}
      >
        Cubiertos de madera compostables para tu negocio. Envío a todo Chile.
      </div>

      <div
        style={{
          display: 'flex',
          fontSize: 26,
          fontFamily: fonts.sans,
          fontWeight: 700,
          color: '#ffffff',
          backgroundColor: c.accent,
          padding: '22px 64px',
          borderRadius: 12,
          marginTop: 48,
        }}
      >
        Cotizar ahora
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 40 }}>
        {['Envío a todo Chile', 'Compostable', 'Eco-friendly'].map((b) => (
          <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                display: 'flex',
                width: 10,
                height: 10,
                backgroundColor: c.accent,
                borderRadius: 5,
              }}
            />
            <div
              style={{
                fontSize: 18,
                fontFamily: fonts.sans,
                fontWeight: 600,
                color: c.text.light,
              }}
            >
              {b}
            </div>
          </div>
        ))}
      </div>
      <PageIndicator current={4} total={TOTAL} />
    </div>
  </div>
)

// ─── Generate ────────────────────────────────────────────────────
console.log('Generando carrusel cubiertos de madera...\n')

await render(slide1, { ...FEED_VERTICAL, name: 'carousel-cubiertos-01' }, brand)
await render(slide2, { ...FEED_VERTICAL, name: 'carousel-cubiertos-02' }, brand)
await render(slide3, { ...FEED_VERTICAL, name: 'carousel-cubiertos-03' }, brand)
await render(slide4, { ...FEED_VERTICAL, name: 'carousel-cubiertos-04' }, brand)
await render(slide5, { ...FEED_VERTICAL, name: 'carousel-cubiertos-05' }, brand)

console.log('\nListo! 5 slides generados.')
