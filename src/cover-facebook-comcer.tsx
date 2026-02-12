import fs from 'node:fs'
import path from 'node:path'
import { render } from './render.js'
import { getBrand } from './brands/index.js'

const brand = getBrand('comcer')
const c = brand.colors
const fonts = brand.fonts

const assetsDir = path.resolve(import.meta.dirname, '../assets')
const logoImg = `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, 'logo-comcer.png')).toString('base64')}`

// Facebook cover: 1640x624 (2x retina of 820x312)
const COVER = { width: 1640, height: 624 }

const cover = (
  <div
    style={{
      display: 'flex',
      width: '100%',
      height: '100%',
      backgroundColor: c.background.dark,
      position: 'relative',
    }}
  >
    {/* Decorative accent bar left */}
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        left: 0,
        top: 0,
        width: 8,
        height: '100%',
        backgroundColor: c.accent,
      }}
    />

    {/* Decorative circles */}
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        right: -80,
        top: -80,
        width: 320,
        height: 320,
        borderRadius: 160,
        border: `3px solid rgba(152,204,63,0.15)`,
      }}
    />
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        right: 40,
        bottom: -120,
        width: 400,
        height: 400,
        borderRadius: 200,
        border: `3px solid rgba(152,204,63,0.08)`,
      }}
    />

    {/* Main content */}
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: '60px 80px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Left: text block */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 900,
          gap: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 16,
            fontFamily: fonts.sans,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: c.accent,
          }}
        >
          Productos 100% biodegradables
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 52,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            textTransform: 'uppercase',
          }}
        >
          Soluciones de aseo y vajilla ecoamigable
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 22,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.5,
            maxWidth: 700,
          }}
        >
          Calidad premium para tu negocio. Envío a todo Chile en 2 a 5 días.
        </div>

        {/* Badges */}
        <div style={{ display: 'flex', gap: 24, marginTop: 12 }}>
          {['Envío a todo Chile', 'Calidad garantizada', 'Eco-amigable'].map((badge) => (
            <div
              key={badge}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
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
                  fontSize: 16,
                  fontFamily: fonts.sans,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {badge}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: logo */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <img src={logoImg} height={80} style={{ objectFit: 'contain' }} />
        <div
          style={{
            fontSize: 14,
            fontFamily: fonts.sans,
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          Hecho en Chile
        </div>
      </div>
    </div>
  </div>
)

console.log('Generando portada Facebook COMCER...\n')
await render(cover, { ...COVER, name: 'cover-facebook' }, brand)
console.log('\nListo!')
