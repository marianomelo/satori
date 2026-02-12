import fs from 'node:fs'
import path from 'node:path'
import { render } from './render.js'
import { getBrand, FEED_VERTICAL } from './brands/index.js'

const brand = getBrand('comcer')
const c = brand.colors
const fonts = brand.fonts

const assetsDir = path.resolve(import.meta.dirname, '../assets')
const rootDir = path.resolve(import.meta.dirname, '..')
const logoImg = `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, 'logo-comcer.png')).toString('base64')}`

const imgDispensadores = `data:image/png;base64,${fs.readFileSync(path.join(rootDir, '853035a1-b72a-4398-bb35-b50b3ba7261a.png')).toString('base64')}`

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

// ─── SLIDE 1: Portada con imagen a la derecha ────────────────────
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
        Higiene profesional
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div
          style={{
            fontSize: 18,
            fontFamily: fonts.sans,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: c.accent,
            marginBottom: 24,
          }}
        >
          DISPENSADORES
        </div>
        <div
          style={{
            fontSize: 52,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.05,
            textTransform: 'uppercase',
          }}
        >
          Soluciones para higiene y limpieza
        </div>
        <div
          style={{
            fontSize: 22,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.5,
            marginTop: 24,
          }}
        >
          Para restaurantes, oficinas, hoteles, casinos y más.
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          width: 420,
          height: 420,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={imgDispensadores} width={420} height={420} style={{ objectFit: 'contain' }} />
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

// ─── SLIDE 2: Servilletas y Papel higiénico ─────────────────────
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
        PAPEL Y SERVILLETAS
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
        Dispensadores de papel
      </div>
    </div>

    <div style={{ display: 'flex', gap: 40, justifyContent: 'center' }}>
      {[
        {
          name: 'Servilletas interfoliadas',
          desc: 'Ideal para restaurantes y oficinas',
          icon: '📋',
        },
        {
          name: 'Papel higiénico interfoliado',
          desc: 'Para baños públicos y privados',
          icon: '🧻',
        },
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
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <div style={{ fontSize: 80, display: 'flex' }}>{p.icon}</div>
            <div
              style={{
                fontSize: 22,
                fontFamily: fonts.sans,
                fontWeight: 600,
                color: c.text.light,
                textAlign: 'center',
                padding: '0 24px',
              }}
            >
              {p.desc}
            </div>
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

// ─── SLIDE 3: Toallas y Jabón ───────────────────────────────────
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
        HIGIENE DE MANOS
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
        Toallas y jabón
      </div>
    </div>

    <div style={{ display: 'flex', gap: 40, justifyContent: 'center' }}>
      {[
        {
          name: 'Toallas en rollo con autocorte',
          desc: 'Para cocinas y áreas de servicio',
          icon: '🧴',
        },
        {
          name: 'Jabón líquido / Alcohol gel',
          desc: 'Esencial para higiene de manos',
          icon: '🫧',
        },
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
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <div style={{ fontSize: 80, display: 'flex' }}>{p.icon}</div>
            <div
              style={{
                fontSize: 22,
                fontFamily: fonts.sans,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.8)',
                textAlign: 'center',
                padding: '0 24px',
              }}
            >
              {p.desc}
            </div>
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
        Fácil recarga — reduce desperdicio — alto tráfico
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

// ─── SLIDE 4: Aplicaciones ──────────────────────────────────────
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
        APLICACIONES
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
        Donde más se necesitan
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
      <div
        style={{
          display: 'flex',
          width: 420,
          height: 420,
          backgroundColor: '#ffffff',
          borderRadius: 24,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img src={imgDispensadores} width={360} height={360} style={{ objectFit: 'contain' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 24 }}>
        {[
          'Restaurantes y cafeterías',
          'Oficinas corporativas',
          'Hoteles y hospedaje',
          'Casinos y centros de eventos',
          'Hospitales y clínicas',
          'Áreas de limpieza industrial',
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
                fontSize: 24,
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

// ─── SLIDE 5: CTA ───────────────────────────────────────────────
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
        Equipa tu espacio con dispensadores
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
        Dispensadores de servilletas, papel higiénico, toallas y jabón para tu negocio. Envío a todo Chile.
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
        {['Envío a todo Chile', 'Fácil recarga', 'Alto tráfico'].map((b) => (
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
console.log('Generando carrusel dispensadores...\n')

await render(slide1, { ...FEED_VERTICAL, name: 'carousel-dispensadores-01' }, brand)
await render(slide2, { ...FEED_VERTICAL, name: 'carousel-dispensadores-02' }, brand)
await render(slide3, { ...FEED_VERTICAL, name: 'carousel-dispensadores-03' }, brand)
await render(slide4, { ...FEED_VERTICAL, name: 'carousel-dispensadores-04' }, brand)
await render(slide5, { ...FEED_VERTICAL, name: 'carousel-dispensadores-05' }, brand)

console.log('\nListo! 5 slides generados.')
