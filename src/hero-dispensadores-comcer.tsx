import fs from 'node:fs'
import path from 'node:path'
import { render } from './render.js'
import { getBrand } from './brands/index.js'

const brand = getBrand('comcer')
const c = brand.colors
const fonts = brand.fonts

const rootDir = path.resolve(import.meta.dirname, '..')
const productImg = `data:image/png;base64,${fs.readFileSync(path.join(rootDir, '853035a1-b72a-4398-bb35-b50b3ba7261a.png')).toString('base64')}`

// Hero slider: 1920x520
const HERO = { width: 1920, height: 520 }

const hero = (
  <div
    style={{
      display: 'flex',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #0a3d3d 0%, #0e4f4a 30%, #1a6b5a 60%, #2a8a6e 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Decorative circle top-right */}
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        right: 160,
        top: -200,
        width: 700,
        height: 700,
        borderRadius: 350,
        border: '1.5px solid rgba(255,255,255,0.06)',
      }}
    />
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        right: 220,
        top: -140,
        width: 580,
        height: 580,
        borderRadius: 290,
        border: '1.5px solid rgba(255,255,255,0.03)',
      }}
    />

    {/* Soft glow behind product area */}
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        right: 60,
        top: -40,
        width: 900,
        height: 600,
        borderRadius: 450,
        background: 'radial-gradient(ellipse, rgba(152,204,63,0.08) 0%, rgba(152,204,63,0) 70%)',
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
        height: 5,
        background: `linear-gradient(to right, ${c.accent}, #00A884)`,
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
          maxWidth: 800,
        }}
      >
        {/* Badge pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
            gap: 12,
            backgroundColor: 'rgba(152,204,63,0.15)',
            padding: '10px 24px',
            borderRadius: 100,
            marginBottom: 24,
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
              fontSize: 14,
              fontFamily: fonts.sans,
              fontWeight: 700,
              color: c.accent,
              letterSpacing: '0.06em',
            }}
          >
            Higiene profesional
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: 58,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.08,
          }}
        >
          Dispensadores
        </div>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            width: 60,
            height: 4,
            backgroundColor: c.accent,
            borderRadius: 2,
            marginTop: 20,
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            fontSize: 21,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.55,
            marginTop: 18,
            maxWidth: 520,
          }}
        >
          Soluciones para servilletas, papel higiénico, toallas y jabón. Orden, higiene y eficiencia en cada espacio.
        </div>

        {/* Feature pills */}
        <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
          {['Fácil recarga', 'Reduce desperdicio', 'Alto tráfico'].map((pill) => (
            <div
              key={pill}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '8px 20px',
                borderRadius: 100,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: 8,
                  height: 8,
                  backgroundColor: '#00A884',
                  borderRadius: 4,
                }}
              />
              <div
                style={{
                  fontSize: 14,
                  fontFamily: fonts.sans,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                {pill}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 20, marginTop: 32 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 18,
              fontFamily: fonts.sans,
              fontWeight: 700,
              color: '#ffffff',
              backgroundColor: c.accent,
              padding: '16px 44px',
              borderRadius: 8,
              boxShadow: '0 6px 24px rgba(152,204,63,0.3)',
            }}
          >
            Ver productos
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 18,
              fontFamily: fonts.sans,
              fontWeight: 600,
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.12)',
              padding: '16px 44px',
              borderRadius: 8,
              border: '1.5px solid rgba(255,255,255,0.2)',
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
        {/* Radial glow behind product */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            width: 700,
            height: 500,
            borderRadius: 350,
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 65%)',
          }}
        />
        {/* Shadow platform */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: -24,
            width: 500,
            height: 50,
            borderRadius: 250,
            background: 'radial-gradient(ellipse, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 70%)',
          }}
        />
        <img
          src={productImg}
          width={600}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  </div>
)

console.log('Generando hero dispensadores COMCER...\n')
await render(hero, { ...HERO, name: 'hero-dispensadores' }, brand)
console.log('\nListo!')
