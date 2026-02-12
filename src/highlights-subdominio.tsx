import { render } from './render.js'
import { getBrand, STORY } from './brands/index.js'

const brand = getBrand('subdominio')
const fonts = brand.fonts
const c = brand.colors

const services = [
  {
    n: '01',
    name: 'Desarrollo Web',
    desc: 'Paginas web que impresionan y funcionan de verdad.',
    items: ['Web corporativa', 'Landing pages', 'Aplicaciones web', 'Blog profesional'],
    tag: 'web',
  },
  {
    n: '02',
    name: 'E-commerce',
    desc: 'Tiendas online que convierten visitantes en clientes.',
    items: ['Tiendas B2C y B2B', 'Marketplace', 'Suscripciones', 'Integraciones'],
    tag: 'ecommerce',
  },
  {
    n: '03',
    name: 'Automatizacion',
    desc: 'Eliminamos tareas repetitivas y creamos procesos inteligentes.',
    items: ['Procesos empresariales', 'Contenido con IA', 'Integraciones', 'Workflows'],
    tag: 'automation',
  },
  {
    n: '04',
    name: 'Software a medida',
    desc: 'Aplicaciones y sistemas completamente personalizados.',
    items: ['Sistemas de gestion', 'Dashboards', 'Portales web', 'PWA'],
    tag: 'software',
  },
]

for (const service of services) {
  const slide = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        padding: '100px 80px',
      }}
    >
      {/* Header */}
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
            fontSize: 18,
            fontFamily: fonts.sans,
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: c.textSecondary,
            borderBottom: '3px solid #18181b',
            paddingBottom: 8,
          }}
        >
          Servicios
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            fontFamily: fonts.sans,
            fontWeight: 500,
            color: c.textMuted,
            letterSpacing: '0.12em',
          }}
        >
          {service.n} / 04
        </div>
      </div>

      {/* Main content */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Number */}
        <div
          style={{
            display: 'flex',
            fontSize: 120,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: '#e4e4e7',
            lineHeight: 1,
            marginBottom: 12,
          }}
        >
          {service.n}
        </div>

        {/* Service name */}
        <div
          style={{
            display: 'flex',
            fontSize: 80,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.text.light,
            lineHeight: 1.1,
            marginBottom: 28,
          }}
        >
          {service.name}
        </div>

        {/* Description */}
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: c.textSecondary,
            lineHeight: 1.5,
            marginBottom: 56,
            maxWidth: 820,
          }}
        >
          {service.desc}
        </div>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: 2,
            backgroundColor: c.border,
            marginBottom: 44,
          }}
        />

        {/* Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {service.items.map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: 10,
                  height: 10,
                  backgroundColor: c.text.light,
                  borderRadius: 5,
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  fontSize: 32,
                  fontFamily: fonts.sans,
                  fontWeight: 500,
                  color: c.text.light,
                }}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
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
            fontSize: 32,
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
            fontSize: 22,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: c.textSecondary,
          }}
        >
          subdominio.cl
        </div>
      </div>
    </div>
  )

  await render(slide, { ...STORY, name: `highlight-${service.tag}` }, brand)
}

console.log('Listo! 4 highlights generados.')
