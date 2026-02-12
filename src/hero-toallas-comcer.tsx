import fs from 'node:fs'
import path from 'node:path'
import { render } from './render.js'
import { getBrand } from './brands/index.js'

const brand = getBrand('comcer')
const c = brand.colors
const fonts = brand.fonts

const assetsDir = path.resolve(import.meta.dirname, '../assets')
const productImg = `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, 'toallas-interfoliadas.png')).toString('base64')}`

// Hero slider: 1920x520
const HERO = { width: 1920, height: 520 }

const hero = (
  <div
    style={{
      display: 'flex',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(160deg, #ffffff 0%, #f4faf7 20%, #e0f2ec 50%, #c8ebe0 80%, #a8dfd0 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Geometric accent — large circle right */}
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        right: 200,
        top: -160,
        width: 680,
        height: 680,
        borderRadius: 340,
        border: '1.5px solid rgba(0,168,132,0.1)',
      }}
    />
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        right: 260,
        top: -100,
        width: 560,
        height: 560,
        borderRadius: 280,
        border: '1.5px solid rgba(0,168,132,0.06)',
      }}
    />

    {/* Thin top accent line */}
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: 4,
        background: 'linear-gradient(to right, #00A884, #98CC3F, rgba(152,204,63,0))',
      }}
    />

    {/* Main content */}
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: '0 100px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Left: text block */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 760,
        }}
      >
        {/* Category label */}
        <div
          style={{
            display: 'flex',
            fontSize: 13,
            fontFamily: fonts.sans,
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#00A884',
            marginBottom: 20,
          }}
        >
          Higiene profesional
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: 58,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.text.light,
            lineHeight: 1.08,
          }}
        >
          Toallas interfoliadas
        </div>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            width: 60,
            height: 4,
            backgroundColor: '#00A884',
            borderRadius: 2,
            marginTop: 24,
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            fontSize: 21,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: '#526b60',
            lineHeight: 1.55,
            marginTop: 20,
            maxWidth: 520,
          }}
        >
          Previene enfermedades por contaminación cruzada y humedad. Máxima absorción y resistencia.
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', marginTop: 36 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 18,
              fontFamily: fonts.sans,
              fontWeight: 700,
              color: '#ffffff',
              backgroundColor: '#00A884',
              padding: '16px 44px',
              borderRadius: 8,
              boxShadow: '0 6px 24px rgba(0,168,132,0.3)',
            }}
          >
            Ver productos
          </div>
        </div>
      </div>

      {/* Right: product image — large and prominent */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginRight: -20,
        }}
      >
        {/* Subtle shadow platform */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: -10,
            width: 700,
            height: 60,
            borderRadius: 350,
            background: 'radial-gradient(ellipse, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 70%)',
          }}
        />
        <img
          src={productImg}
          width={740}
          style={{ objectFit: 'contain' }}
        />

        {/* Eco stamp */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            right: 10,
            bottom: 20,
            width: 110,
            height: 110,
            borderRadius: 55,
            border: '3px solid #98CC3F',
            backgroundColor: 'rgba(255,255,255,0.9)',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 11,
              fontFamily: fonts.sans,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#98CC3F',
            }}
          >
            100%
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 13,
              fontFamily: fonts.display,
              fontWeight: 700,
              color: c.text.light,
              textTransform: 'uppercase',
              marginTop: 2,
            }}
          >
            ECO
          </div>
          <div
            style={{
              display: 'flex',
              width: 30,
              height: 1.5,
              backgroundColor: '#98CC3F',
              marginTop: 4,
              marginBottom: 4,
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: 9,
              fontFamily: fonts.sans,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#526b60',
            }}
          >
            Friendly
          </div>
        </div>
      </div>
    </div>
  </div>
)

console.log('Generando hero toallas interfoliadas COMCER...\n')
await render(hero, { ...HERO, name: 'hero-toallas-interfoliadas' }, brand)
console.log('\nListo!')
