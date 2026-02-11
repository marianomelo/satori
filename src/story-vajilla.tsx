import fs from 'node:fs'
import path from 'node:path'
import { render } from './render.js'
import { getBrand, STORY } from './brands/index.js'

const brand = getBrand('comcer')
const c = brand.colors
const fonts = brand.fonts

const assetsDir = path.resolve(import.meta.dirname, '../assets')
const productImg = `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, 'vajilla-eco.png')).toString('base64')}`
const logoImg = `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, 'logo-comcer.png')).toString('base64')}`

const storyVajilla = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
    }}
  >
    {/* Top bar: Logo */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '48px 60px',
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
        height: 700,
        backgroundColor: '#F3F9F5',
      }}
    >
      <img
        src={productImg}
        width={580}
        height={580}
        style={{ objectFit: 'contain' }}
      />
    </div>

    {/* Info area */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: '48px 60px 60px',
        justifyContent: 'space-between',
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
          marginBottom: 20,
        }}
      >
        VAJILLA ECOAMIGABLE
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 56,
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
          fontSize: 28,
          fontFamily: fonts.sans,
          fontWeight: 400,
          color: c.textSecondary,
          lineHeight: 1.5,
          marginTop: 24,
        }}
      >
        Para restaurantes, casinos y catering. Materiales kraft y polipapel impermeables.
      </div>

      {/* Products list */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          marginTop: 36,
        }}
      >
        {[
          'Vasos polipapel hot',
          'Potes de carton kraft',
          'Cubiertos de madera compostable',
          'Bandejas y platos kraft',
        ].map((item) => (
          <div
            key={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
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

      {/* CTA */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 48,
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            fontFamily: fonts.sans,
            fontWeight: 700,
            color: '#ffffff',
            backgroundColor: c.accent,
            padding: '20px 0',
            borderRadius: 12,
            justifyContent: 'center',
            width: '100%',
          }}
        >
          Ver todos los productos
        </div>
      </div>

      {/* Swipe hint */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 28,
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: c.textSecondary,
          }}
        >
          Desliza para ver mas
        </div>
      </div>
    </div>
  </div>
)

console.log('Generando story vajilla ecoamigable...\n')
await render(storyVajilla, { ...STORY, name: 'story-vajilla-eco' }, brand)
console.log('\nListo!')
