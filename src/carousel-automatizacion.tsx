import { render } from './render.js'
import { getBrand, FEED_VERTICAL } from './brands/index.js'

const brand = getBrand('subdominio')
const c = brand.colors
const fonts = brand.fonts

// ─── Shared components ───────────────────────────────────────────

const TOTAL = 7

const Logo = ({ dark }: { dark?: boolean }) => (
  <div
    style={{
      display: 'flex',
      fontSize: 22,
      fontFamily: fonts.display,
      fontWeight: 400,
      fontStyle: 'italic',
      color: dark ? '#52525b' : c.textMuted,
    }}
  >
    subdominio.
  </div>
)

const PageIndicator = ({ current, dark }: { current: number; dark?: boolean }) => (
  <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
    {Array.from({ length: TOTAL }).map((_, i) => (
      <div
        key={i}
        style={{
          display: 'flex',
          width: i === current ? 28 : 8,
          height: 8,
          backgroundColor: i === current
            ? (dark ? '#f4f4f5' : c.accent)
            : (dark ? '#27272a' : '#e4e4e7'),
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

const Tag = ({ label, dark }: { label: string; dark?: boolean }) => (
  <div
    style={{
      display: 'flex',
      fontSize: 11,
      fontFamily: fonts.sans,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: dark ? '#71717a' : c.textSecondary,
      borderBottom: `2px solid ${dark ? '#f4f4f5' : '#18181b'}`,
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
      backgroundColor: '#ffffff',
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
          color: c.textMuted,
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
          color: c.textMuted,
        }}
      >
        Servicios
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
          color: c.textSecondary,
          marginBottom: 28,
        }}
      >
        Automatizacion
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 50,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          lineHeight: 1.1,
        }}
      >
        Automatizacion real, resultados tangibles
      </div>
      <div
        style={{
          display: 'flex',
          width: 60,
          height: 3,
          backgroundColor: '#18181b',
          marginTop: 32,
        }}
      />
      <div
        style={{
          display: 'flex',
          fontSize: 20,
          fontFamily: fonts.sans,
          fontWeight: 400,
          color: c.textSecondary,
          lineHeight: 1.5,
          marginTop: 24,
        }}
      >
        Eliminamos tareas repetitivas con soluciones a medida, integradas en tus sistemas.
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
          color: c.textMuted,
        }}
      >
        Desliza →
      </div>
    </div>
  </div>
)

// ─── SLIDE 2: Soluciones ─────────────────────────────────────────
const soluciones = [
  {
    title: 'Procesos empresariales',
    desc: 'Inventarios, facturacion, reportes y flujos de aprobacion integrados en tu ERP o CRM.',
  },
  {
    title: 'Contenido con IA',
    desc: 'Textos para productos, respuestas automaticas y optimizacion SEO adaptada a tu negocio.',
  },
  {
    title: 'Integraciones complejas',
    desc: 'Conexion de ERP, CRM, logistica y facturacion electronica via API REST o GraphQL.',
  },
  {
    title: 'Workflows operativos',
    desc: 'Notificaciones, control de estados y validaciones automaticas.',
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
      <Tag label="Soluciones" />
      <SlideNumber n="2" />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          fontSize: 34,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          marginBottom: 36,
        }}
      >
        Automatizacion personalizada
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {soluciones.map((s) => (
          <div
            key={s.title}
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#fafafa',
              borderRadius: 12,
              padding: '24px 28px',
              border: '1px solid #e4e4e7',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 20,
                fontFamily: fonts.sans,
                fontWeight: 600,
                color: c.text.light,
                marginBottom: 8,
              }}
            >
              {s.title}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 16,
                fontFamily: fonts.sans,
                fontWeight: 400,
                color: c.textSecondary,
                lineHeight: 1.5,
              }}
            >
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={1} />
      <Logo />
    </div>
  </div>
)

// ─── SLIDE 3: Caso 01 ───────────────────────────────────────────
const slide3 = (
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
      <Tag label="Caso real" dark />
      <SlideNumber n="3" />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          fontSize: 120,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: '#27272a',
          lineHeight: 1,
          marginBottom: 8,
        }}
      >
        01
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 36,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: '#f4f4f5',
          textAlign: 'center',
          marginBottom: 20,
        }}
      >
        Descripciones con IA
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 18,
          fontFamily: fonts.sans,
          fontWeight: 400,
          color: '#a1a1aa',
          textAlign: 'center',
          lineHeight: 1.5,
          maxWidth: 700,
          marginBottom: 40,
        }}
      >
        500 productos actualizados en 1 hora vs 125 horas de trabajo manual.
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 64,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: '#f4f4f5',
        }}
      >
        -99% tiempo
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={2} dark />
      <Logo dark />
    </div>
  </div>
)

// ─── SLIDE 4: Casos 02 y 03 ─────────────────────────────────────
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
      <Tag label="Casos reales" />
      <SlideNumber n="4" />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Caso 02 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fafafa',
          borderRadius: 12,
          padding: '32px 36px',
          border: '1px solid #e4e4e7',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 14,
              fontFamily: fonts.sans,
              fontWeight: 600,
              color: c.textMuted,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Caso 02
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
            40h/mes liberadas
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.text.light,
            marginBottom: 12,
          }}
        >
          Reportes automaticos
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 17,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: c.textSecondary,
            lineHeight: 1.5,
          }}
        >
          Informes diarios sin intervencion humana, enviados a las 9 AM sin falta.
        </div>
      </div>

      {/* Caso 03 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fafafa',
          borderRadius: 12,
          padding: '32px 36px',
          border: '1px solid #e4e4e7',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 14,
              fontFamily: fonts.sans,
              fontWeight: 600,
              color: c.textMuted,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Caso 03
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
            -95% reclamos
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.text.light,
            marginBottom: 12,
          }}
        >
          Sincronizacion stock
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 17,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: c.textSecondary,
            lineHeight: 1.5,
          }}
        >
          ERP, tienda y marketplace sincronizados en tiempo real. Cero sobreventa.
        </div>
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={3} />
      <Logo />
    </div>
  </div>
)

// ─── SLIDE 5: Diferenciadores ────────────────────────────────────
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
      <Tag label="Diferenciadores" dark />
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
          marginBottom: 40,
        }}
      >
        Por que elegirnos
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {[
          { title: 'Desarrollo 100% a medida', desc: 'Sin dependencias de plataformas externas.' },
          { title: 'Integracion nativa', desc: 'Con tus sistemas existentes.' },
          { title: 'Optimizacion constante', desc: 'Basada en metricas y uso real.' },
          { title: 'Soporte especializado', desc: 'Mantenimiento evolutivo incluido.' },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                fontFamily: fonts.display,
                fontWeight: 700,
                color: '#f4f4f5',
              }}
            >
              {item.title}
            </div>
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
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={4} dark />
      <Logo dark />
    </div>
  </div>
)

// ─── SLIDE 6: Servicios relacionados ─────────────────────────────
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
      <Tag label="Relacionados" />
      <SlideNumber n="6" />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          fontSize: 34,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          marginBottom: 36,
        }}
      >
        Servicios relacionados
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {[
          { name: 'Software a medida', desc: 'Sistemas con automatizacion integrada.' },
          { name: 'E-commerce', desc: 'Automatiza tu tienda online.' },
          { name: 'Desarrollo Web', desc: 'Webs con funciones automatizadas.' },
        ].map((s) => (
          <div
            key={s.name}
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
                fontSize: 24,
                fontFamily: fonts.display,
                fontWeight: 700,
                color: c.text.light,
                marginBottom: 8,
              }}
            >
              {s.name}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 17,
                fontFamily: fonts.sans,
                fontWeight: 400,
                color: c.textSecondary,
                lineHeight: 1.5,
              }}
            >
              {s.desc}
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
        Solicitar consultoria
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 44,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: '#f4f4f5',
          lineHeight: 1.15,
          textAlign: 'center',
          maxWidth: 800,
        }}
      >
        La automatizacion debe adaptarse a tu negocio
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
        Soluciones propias para que tu operacion sea mas rapida, segura y eficiente.
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
        info@subdominio.cl
      </div>
    </div>

    <PageIndicator current={6} dark />
  </div>
)

// ─── Generate ────────────────────────────────────────────────────
console.log('Generando carrusel Automatizacion...\n')

await render(slide1, { ...FEED_VERTICAL, name: 'carousel-automatizacion-01' }, brand)
await render(slide2, { ...FEED_VERTICAL, name: 'carousel-automatizacion-02' }, brand)
await render(slide3, { ...FEED_VERTICAL, name: 'carousel-automatizacion-03' }, brand)
await render(slide4, { ...FEED_VERTICAL, name: 'carousel-automatizacion-04' }, brand)
await render(slide5, { ...FEED_VERTICAL, name: 'carousel-automatizacion-05' }, brand)
await render(slide6, { ...FEED_VERTICAL, name: 'carousel-automatizacion-06' }, brand)
await render(slide7, { ...FEED_VERTICAL, name: 'carousel-automatizacion-07' }, brand)

console.log('\nListo! 7 slides generados.')
