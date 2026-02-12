import fs from 'node:fs'
import path from 'node:path'
import { render } from './render.js'
import { getBrand } from './brands/index.js'

const brand = getBrand('comcer')
const c = brand.colors
const fonts = brand.fonts

const assetsDir = path.resolve(import.meta.dirname, '../assets')
const logoImg = `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, 'logo-comcer.png')).toString('base64')}`
const productImg = `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, 'produtos-eco-vajilla-conv.png')).toString('base64')}`

// Hero slider: 3840x960 (2x retina, aspect ratio 4:1)
const HERO = { width: 3840, height: 960 }

const hero = (
  <div
    style={{
      display: 'flex',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #f0f7e8 0%, #dcedc8 35%, #c5e1a5 70%, #aed581 100%)',
      position: 'relative',
    }}
  >
    {/* Large soft circle top-right for depth */}
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        right: -200,
        top: -400,
        width: 1600,
        height: 1600,
        borderRadius: 800,
        background: 'radial-gradient(circle, rgba(152,204,63,0.18) 0%, rgba(152,204,63,0) 70%)',
      }}
    />

    {/* Smaller soft circle bottom-left */}
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        left: -120,
        bottom: -240,
        width: 800,
        height: 800,
        borderRadius: 400,
        background: 'radial-gradient(circle, rgba(152,204,63,0.12) 0%, rgba(152,204,63,0) 70%)',
      }}
    />

    {/* Accent bar bottom */}
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: 10,
        background: `linear-gradient(to right, ${c.accent}, #00A884)`,
      }}
    />

    {/* Main content */}
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: '80px 200px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Left: text block */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 1640,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
            gap: 20,
            backgroundColor: 'rgba(152,204,63,0.15)',
            padding: '20px 44px',
            borderRadius: 100,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 20,
              height: 20,
              backgroundColor: c.accent,
              borderRadius: 10,
            }}
          />
          <div
            style={{
              fontSize: 32,
              fontFamily: fonts.sans,
              fontWeight: 700,
              color: '#4a7c10',
              letterSpacing: '0.04em',
            }}
          >
            Nueva línea
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: 96,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.text.light,
            lineHeight: 1.05,
          }}
        >
          Vajilla eco amigable
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: '#4a5e3a',
            lineHeight: 1.4,
            marginTop: 32,
            maxWidth: 1040,
          }}
        >
          Packs de cubiertos, platos y bowls 100% compostables. Calidad premium para tu negocio.
        </div>

        {/* Feature pills */}
        <div style={{ display: 'flex', gap: 32, marginTop: 40 }}>
          {['100% biodegradable', 'Envío a todo Chile', 'Entrega en 2-5 días'].map((pill) => (
            <div
              key={pill}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                backgroundColor: 'rgba(255,255,255,0.7)',
                padding: '16px 36px',
                borderRadius: 100,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: 16,
                  height: 16,
                  backgroundColor: '#00A884',
                  borderRadius: 8,
                }}
              />
              <div
                style={{
                  fontSize: 28,
                  fontFamily: fonts.sans,
                  fontWeight: 600,
                  color: c.text.light,
                }}
              >
                {pill}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: 40, marginTop: 48 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 40,
              fontFamily: fonts.sans,
              fontWeight: 700,
              color: '#ffffff',
              backgroundColor: c.accent,
              padding: '28px 80px',
              borderRadius: 100,
              boxShadow: '0 8px 40px rgba(152,204,63,0.4)',
            }}
          >
            Ver productos
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 40,
              fontFamily: fonts.sans,
              fontWeight: 600,
              color: c.text.light,
              backgroundColor: 'rgba(255,255,255,0.6)',
              padding: '28px 80px',
              borderRadius: 100,
            }}
          >
            Cotizar ahora
          </div>
        </div>
      </div>

      {/* Right: product image with glow */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Soft glow behind product */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            width: 960,
            height: 640,
            borderRadius: 480,
            background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)',
          }}
        />
        <img
          src={productImg}
          height={640}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  </div>
)

console.log('Generando hero slider COMCER...\n')
await render(hero, { ...HERO, name: 'hero-vajilla-eco' }, brand)
console.log('\nListo!')
