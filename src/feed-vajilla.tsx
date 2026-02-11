import fs from 'node:fs'
import path from 'node:path'
import { render } from './render.js'
import { getBrand, FEED } from './brands/index.js'

const brand = getBrand('comcer')
const c = brand.colors
const fonts = brand.fonts

// Load images as base64
const assetsDir = path.resolve(import.meta.dirname, '../assets')
const productImg = `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, 'vajilla-eco.png')).toString('base64')}`
const logoImg = `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, 'logo-comcer.png')).toString('base64')}`

const feedVajilla = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
    }}
  >
    {/* Top bar: Logo + Badge */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px 60px',
      }}
    >
      <img
        src={logoImg}
        height={72}
        style={{ objectFit: 'contain' }}
      />
      <div
        style={{
          display: 'flex',
          backgroundColor: '#00A884',
          color: '#ffffff',
          fontSize: 20,
          fontFamily: fonts.sans,
          fontWeight: 700,
          padding: '14px 28px',
          borderRadius: 10,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        100% Biodegradable
      </div>
    </div>

    {/* Product image */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 440,
        backgroundColor: '#F3F9F5',
      }}
    >
      <img
        src={productImg}
        width={400}
        height={400}
        style={{ objectFit: 'contain' }}
      />
    </div>

    {/* Info area */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: '40px 60px 52px',
      }}
    >
      {/* Category */}
      <div
        style={{
          fontSize: 22,
          fontFamily: fonts.sans,
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: c.accent,
          marginBottom: 16,
        }}
      >
        VAJILLA ECOAMIGABLE
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 52,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          lineHeight: 1.1,
          textTransform: 'uppercase',
        }}
      >
        Vasos, potes y cubiertos de papel kraft
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: 26,
          fontFamily: fonts.sans,
          fontWeight: 400,
          color: c.textSecondary,
          lineHeight: 1.45,
          marginTop: 20,
        }}
      >
        Para restaurantes, casinos y catering. Materiales kraft y polipapel impermeables.
      </div>

      {/* Tags + CTA */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 32,
        }}
      >
        <div style={{ display: 'flex', gap: 16 }}>
          {['Kraft', 'Polipapel', 'Compostable'].map((tag) => (
            <div
              key={tag}
              style={{
                display: 'flex',
                fontSize: 20,
                fontFamily: fonts.sans,
                fontWeight: 600,
                color: '#0E252C',
                backgroundColor: '#E8F5E9',
                padding: '12px 24px',
                borderRadius: 28,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            fontFamily: fonts.sans,
            fontWeight: 700,
            color: '#ffffff',
            backgroundColor: c.accent,
            padding: '16px 40px',
            borderRadius: 10,
          }}
        >
          Ver productos
        </div>
      </div>
    </div>
  </div>
)

console.log('Generando feed vajilla ecoamigable...\n')
await render(feedVajilla, { ...FEED, name: 'feed-vajilla-eco' }, brand)
console.log('\nListo!')
