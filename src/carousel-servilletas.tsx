import fs from 'node:fs'
import path from 'node:path'
import { render } from './render.js'
import { getBrand, FEED } from './brands/index.js'

const brand = getBrand('comcer')
const c = brand.colors
const fonts = brand.fonts

const assetsDir = path.resolve(import.meta.dirname, '../assets')
const logoImg = `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, 'logo-comcer.png')).toString('base64')}`

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
          fontSize: 16,
          fontFamily: fonts.sans,
          fontWeight: 600,
          color: '#00A884',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        Hecho en Chile
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
          color: '#00A884',
          marginBottom: 28,
        }}
      >
        PERSONALIZA TU MARCA
      </div>
      <div
        style={{
          fontSize: 64,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: 1.05,
          textTransform: 'uppercase',
        }}
      >
        Servilletas personalizadas con tu logo
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
        Impresión de alta calidad para restaurantes, hoteles, eventos y matrimonios.
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

// ─── SLIDE 2: Por qué elegirnos ─────────────────────────────────
const benefits = [
  {
    number: '01',
    title: 'Calidad de impresión garantizada',
    desc: 'Tecnología avanzada para reproducir tu logo fielmente.',
  },
  {
    number: '02',
    title: 'Envío rápido a todo Chile',
    desc: 'Entrega express en 2-5 días a cualquier región.',
  },
  {
    number: '03',
    title: 'Diseño personalizado',
    desc: 'Adaptamos tu logo o creamos uno según tus necesidades.',
  },
  {
    number: '04',
    title: 'Diferentes tamaños y acabados',
    desc: 'Opciones para cada tipo de negocio y ocasión.',
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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          fontSize: 18,
          fontFamily: fonts.sans,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: c.accent,
          marginBottom: 20,
        }}
      >
        POR QUÉ ELEGIRNOS
      </div>
      <div
        style={{
          fontSize: 48,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          lineHeight: 1.1,
          textTransform: 'uppercase',
        }}
      >
        4 razones para confiar en COMCER
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {benefits.map((b) => (
        <div key={b.number} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 36,
              fontFamily: fonts.display,
              fontWeight: 700,
              color: c.accent,
              width: 72,
            }}
          >
            {b.number}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div
              style={{
                fontSize: 26,
                fontFamily: fonts.sans,
                fontWeight: 700,
                color: c.text.light,
                marginBottom: 6,
              }}
            >
              {b.title}
            </div>
            <div
              style={{
                fontSize: 20,
                fontFamily: fonts.sans,
                fontWeight: 400,
                color: c.textSecondary,
                lineHeight: 1.4,
              }}
            >
              {b.desc}
            </div>
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

// ─── SLIDE 3: Impacto visual ─────────────────────────────────────
const slide3 = (
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
          color: '#00A884',
          marginBottom: 20,
        }}
      >
        IMPACTO VISUAL
      </div>
      <div
        style={{
          fontSize: 48,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          lineHeight: 1.1,
          textTransform: 'uppercase',
        }}
      >
        Transformá la experiencia de tu cliente
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
      <div
        style={{
          fontSize: 26,
          fontFamily: fonts.sans,
          fontWeight: 400,
          color: c.text.light,
          lineHeight: 1.5,
        }}
      >
        Las servilletas con logo no son solo un elemento funcional, son una extensión de tu marca y crean una experiencia memorable.
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          borderRadius: 16,
          padding: 40,
          gap: 24,
        }}
      >
        {[
          'Desde el diseño más simple hasta logos complejos',
          'Impresión de alta calidad que destaca tu marca',
          'Equipo profesional a cargo de cada detalle',
        ].map((item) => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                display: 'flex',
                width: 14,
                height: 14,
                backgroundColor: c.accent,
                borderRadius: 7,
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
      <PageIndicator current={2} total={TOTAL} />
      <SwipeHint />
    </div>
  </div>
)

// ─── SLIDE 4: Cómo funciona ──────────────────────────────────────
const steps = [
  {
    step: '1',
    title: 'Cuéntanos tu idea',
    desc: 'Envíanos tu logo o diseño. Si no tienes uno, te ayudamos a crearlo.',
  },
  {
    step: '2',
    title: 'Diseñamos tu servilleta',
    desc: 'Nuestro equipo adapta tu marca al formato ideal con la mejor calidad.',
  },
  {
    step: '3',
    title: 'Producción e impresión',
    desc: 'Fabricamos tus servilletas con tecnología avanzada y materiales premium.',
  },
  {
    step: '4',
    title: 'Entrega en tu puerta',
    desc: 'Envío rápido a todo Chile. Recibe tu pedido en 2 a 5 días.',
  },
]

const slide4 = (
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
          color: '#00A884',
          marginBottom: 20,
        }}
      >
        CÓMO FUNCIONA
      </div>
      <div
        style={{
          fontSize: 48,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: 1.1,
          textTransform: 'uppercase',
        }}
      >
        De tu idea a tus manos en 4 pasos
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {steps.map((s) => (
        <div key={s.step} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              width: 56,
              height: 56,
              backgroundColor: c.accent,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontFamily: fonts.display,
                fontWeight: 700,
                color: '#ffffff',
              }}
            >
              {s.step}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div
              style={{
                fontSize: 26,
                fontFamily: fonts.sans,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 6,
              }}
            >
              {s.title}
            </div>
            <div
              style={{
                fontSize: 20,
                fontFamily: fonts.sans,
                fontWeight: 400,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.4,
              }}
            >
              {s.desc}
            </div>
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
      <PageIndicator current={3} total={TOTAL} />
      <SwipeHint light />
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
          color: '#00A884',
          marginBottom: 28,
        }}
      >
        COMIENZA HOY
      </div>
      <div
        style={{
          fontSize: 56,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          lineHeight: 1.1,
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        Solicita tu cotización personalizada
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
        Nuestro equipo te guía en cada paso. Desde el diseño hasta la entrega en tu puerta.
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
        {['Calidad garantizada', 'Envío a todo Chile', 'Entrega rápida'].map((b) => (
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
console.log('Generando carrusel servilletas personalizadas...\n')

await render(slide1, { ...FEED, name: 'carousel-servilletas-01' }, brand)
await render(slide2, { ...FEED, name: 'carousel-servilletas-02' }, brand)
await render(slide3, { ...FEED, name: 'carousel-servilletas-03' }, brand)
await render(slide4, { ...FEED, name: 'carousel-servilletas-04' }, brand)
await render(slide5, { ...FEED, name: 'carousel-servilletas-05' }, brand)

console.log('\nListo! 5 slides generados.')
