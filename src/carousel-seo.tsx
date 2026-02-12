import { render } from './render.js'
import { getBrand, FEED_VERTICAL } from './brands/index.js'

const brand = getBrand('subdominio')
const c = brand.colors
const fonts = brand.fonts

// ─── Shared components ───────────────────────────────────────────

const TOTAL = 8

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
        Marketing Digital
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
        Guia SEO Chile
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 52,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: '#f4f4f5',
          lineHeight: 1.1,
        }}
      >
        Como conseguir clientes sin pagar publicidad
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
        Posiciona tu negocio en Google con estrategias de SEO local.
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

// ─── SLIDE 2: Que es SEO ─────────────────────────────────────────
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
      <Tag label="Definicion" />
      <SlideNumber n="2" />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          fontSize: 38,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          marginBottom: 32,
          lineHeight: 1.2,
        }}
      >
        Que es el SEO y como funciona
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 20,
          fontFamily: fonts.sans,
          fontWeight: 400,
          color: c.textSecondary,
          lineHeight: 1.6,
          marginBottom: 36,
        }}
      >
        Son las tecnicas que mejoran la visibilidad de tu sitio web en los resultados organicos de Google.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { label: 'Keywords', desc: 'Palabras clave que tus clientes buscan' },
          { label: 'Contenido', desc: 'Informacion relevante y actualizada' },
          { label: 'Experiencia', desc: 'Velocidad, mobile y navegacion' },
          { label: 'Autoridad', desc: 'Backlinks de sitios confiables' },
          { label: 'Tecnico', desc: 'HTML, URLs, sitemaps y datos estructurados' },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                width: 8,
                height: 8,
                backgroundColor: '#18181b',
                borderRadius: 4,
                flexShrink: 0,
              }}
            />
            <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
              <div
                style={{
                  display: 'flex',
                  fontSize: 18,
                  fontFamily: fonts.sans,
                  fontWeight: 600,
                  color: c.text.light,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 16,
                  fontFamily: fonts.sans,
                  fontWeight: 400,
                  color: c.textMuted,
                }}
              >
                — {item.desc}
              </div>
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

// ─── SLIDE 3: SEO vs Publicidad ──────────────────────────────────
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
      <Tag label="Comparativa" />
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
        SEO vs Publicidad pagada
      </div>

      {/* Table header */}
      <div
        style={{
          display: 'flex',
          padding: '16px 0',
          borderBottom: '2px solid #18181b',
        }}
      >
        <div style={{ display: 'flex', flex: 2, fontSize: 13, fontFamily: fonts.sans, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.textMuted }}>
          Aspecto
        </div>
        <div style={{ display: 'flex', flex: 2, fontSize: 13, fontFamily: fonts.sans, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.textMuted }}>
          Ads
        </div>
        <div style={{ display: 'flex', flex: 2, fontSize: 13, fontFamily: fonts.sans, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.textMuted }}>
          SEO
        </div>
      </div>

      {/* Rows */}
      {[
        { aspect: 'Costo', ads: 'Pago continuo por clic', seo: 'Inversion inicial, bajo mantenimiento' },
        { aspect: 'Duracion', ads: 'Se detiene al cortar presupuesto', seo: 'Trafico continuo a largo plazo' },
        { aspect: 'Confianza', ads: 'Menor credibilidad percibida', seo: 'Mayor credibilidad organica' },
        { aspect: 'ROI', ads: 'Inmediato pero temporal', seo: 'Crecimiento compuesto' },
      ].map((row, i) => (
        <div
          key={row.aspect}
          style={{
            display: 'flex',
            padding: '18px 0',
            borderBottom: i < 3 ? '1px solid #e4e4e7' : 'none',
          }}
        >
          <div style={{ display: 'flex', flex: 2, fontSize: 18, fontFamily: fonts.sans, fontWeight: 600, color: c.text.light }}>
            {row.aspect}
          </div>
          <div style={{ display: 'flex', flex: 2, fontSize: 16, fontFamily: fonts.sans, fontWeight: 400, color: c.textMuted }}>
            {row.ads}
          </div>
          <div style={{ display: 'flex', flex: 2, fontSize: 16, fontFamily: fonts.sans, fontWeight: 600, color: c.text.light }}>
            {row.seo}
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

// ─── SLIDE 4: Ventajas para empresas chilenas ────────────────────
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
      <Tag label="Ventajas" dark />
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
        Por que SEO en Chile
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {[
          {
            title: 'Segmentacion local',
            desc: 'Optimiza para busquedas con ubicacion especifica como "ferreteria Puerto Montt" o "abogado Santiago centro".',
          },
          {
            title: 'Ventaja competitiva',
            desc: 'PYMEs pueden superar a grandes empresas que no invierten en SEO local.',
          },
          {
            title: 'Eficiencia de presupuesto',
            desc: 'Alternativa a campanas pagadas costosas. Una vez posicionado, el trafico es gratuito.',
          },
        ].map((item) => (
          <div
            key={item.title}
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
              {item.title}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 17,
                fontFamily: fonts.sans,
                fontWeight: 400,
                color: '#a1a1aa',
                lineHeight: 1.5,
              }}
            >
              {item.desc}
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

// ─── SLIDE 5: Pasos 1–4 ─────────────────────────────────────────
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
      <Tag label="Estrategia" />
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
          marginBottom: 36,
        }}
      >
        7 pasos para implementar SEO
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[
          { n: '01', title: 'Auditoria inicial', desc: 'Velocidad, estructura tecnica, mobile y errores de indexacion.' },
          { n: '02', title: 'Investigacion de keywords', desc: 'Identificar los terminos que tus clientes realmente buscan.' },
          { n: '03', title: 'Optimizacion de contenido', desc: 'Mejorar titulos, encabezados, URLs y texto existente.' },
          { n: '04', title: 'Creacion de contenido', desc: 'Articulos, guias y casos de estudio que generen autoridad.' },
        ].map((step) => (
          <div
            key={step.n}
            style={{
              display: 'flex',
              gap: 20,
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 32,
                fontFamily: fonts.display,
                fontWeight: 700,
                color: '#e4e4e7',
                lineHeight: 1,
                width: 56,
                flexShrink: 0,
              }}
            >
              {step.n}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div
                style={{
                  display: 'flex',
                  fontSize: 20,
                  fontFamily: fonts.sans,
                  fontWeight: 600,
                  color: c.text.light,
                }}
              >
                {step.title}
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
                {step.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={4} />
      <Logo />
    </div>
  </div>
)

// ─── SLIDE 6: Pasos 5–7 ─────────────────────────────────────────
const slide6 = (
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
      <Tag label="Estrategia" dark />
      <SlideNumber n="6" />
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
        7 pasos (continuacion)
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {[
          { n: '05', title: 'SEO tecnico', desc: 'Estructura HTML, metadata, sitemaps y enlaces internos.' },
          { n: '06', title: 'Link building', desc: 'Obtener menciones y enlaces desde directorios, medios y partners.' },
          { n: '07', title: 'Monitoreo continuo', desc: 'Google Search Console y Analytics para medir y ajustar.' },
        ].map((step) => (
          <div
            key={step.n}
            style={{
              display: 'flex',
              gap: 20,
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 32,
                fontFamily: fonts.display,
                fontWeight: 700,
                color: '#3f3f46',
                lineHeight: 1,
                width: 56,
                flexShrink: 0,
              }}
            >
              {step.n}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div
                style={{
                  display: 'flex',
                  fontSize: 20,
                  fontFamily: fonts.sans,
                  fontWeight: 600,
                  color: '#f4f4f5',
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 16,
                  fontFamily: fonts.sans,
                  fontWeight: 400,
                  color: '#a1a1aa',
                  lineHeight: 1.5,
                }}
              >
                {step.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          width: '100%',
          height: 1,
          backgroundColor: '#27272a',
          marginTop: 36,
          marginBottom: 28,
        }}
      />

      <div
        style={{
          display: 'flex',
          fontSize: 17,
          fontFamily: fonts.sans,
          fontWeight: 400,
          fontStyle: 'italic',
          color: '#71717a',
          lineHeight: 1.5,
        }}
      >
        "El SEO no es un gasto — es una inversion que se acumula con el tiempo."
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={5} />
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

// ─── SLIDE 7: Resultados esperados ──────────────────────────────
const slide7 = (
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
      <Tag label="Resultados" />
      <SlideNumber n="7" />
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
        Que esperar del SEO
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Timeline items */}
        {[
          {
            time: 'Mes 1–3',
            title: 'Bases y optimizacion',
            desc: 'Auditoria, correccion tecnica, primeras mejoras de contenido.',
          },
          {
            time: 'Mes 3–6',
            title: 'Primeros resultados',
            desc: 'Mejoras visibles en rankings, aumento gradual de trafico organico.',
          },
          {
            time: 'Mes 6+',
            title: 'Crecimiento compuesto',
            desc: 'Trafico sostenido y creciente. Sin costo por clic.',
          },
        ].map((item) => (
          <div
            key={item.time}
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
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: 26,
                  fontFamily: fonts.display,
                  fontWeight: 700,
                  color: c.text.light,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 13,
                  fontFamily: fonts.sans,
                  fontWeight: 600,
                  color: '#18181b',
                  backgroundColor: '#e4e4e7',
                  padding: '4px 16px',
                  borderRadius: 4,
                }}
              >
                {item.time}
              </div>
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
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <PageIndicator current={6} />
      <Logo />
    </div>
  </div>
)

// ─── SLIDE 8: CTA ───────────────────────────────────────────────
const slide8 = (
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
      <SlideNumber n="8" />
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
        Lee el articulo completo
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
        Posiciona tu negocio en Google sin depender de la publicidad
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
        Disenamos e implementamos estrategias SEO para empresas en Chile. Consulta gratis.
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

    <PageIndicator current={7} />
  </div>
)

// ─── Generate ────────────────────────────────────────────────────
console.log('Generando carrusel SEO Chile...\n')

await render(slide1, { ...FEED_VERTICAL, name: 'carousel-seo-01' }, brand)
await render(slide2, { ...FEED_VERTICAL, name: 'carousel-seo-02' }, brand)
await render(slide3, { ...FEED_VERTICAL, name: 'carousel-seo-03' }, brand)
await render(slide4, { ...FEED_VERTICAL, name: 'carousel-seo-04' }, brand)
await render(slide5, { ...FEED_VERTICAL, name: 'carousel-seo-05' }, brand)
await render(slide6, { ...FEED_VERTICAL, name: 'carousel-seo-06' }, brand)
await render(slide7, { ...FEED_VERTICAL, name: 'carousel-seo-07' }, brand)
await render(slide8, { ...FEED_VERTICAL, name: 'carousel-seo-08' }, brand)

console.log('\nListo! 8 slides generados.')
