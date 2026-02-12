import fs from 'node:fs'
import path from 'node:path'
import { render } from './render.js'
import { getBrand } from './brands/index.js'

const brand = getBrand('comcer')
const c = brand.colors
const fonts = brand.fonts

const assetsDir = path.resolve(import.meta.dirname, '../assets')
const logoImg = `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, 'logo-comcer.png')).toString('base64')}`

// Popup: 1600x1200 (2x retina, displays at 800x600)
const POPUP = { width: 1600, height: 1200 }

const popup = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
      position: 'relative',
    }}
  >
    {/* Top accent band */}
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: 12,
        background: `linear-gradient(to right, ${c.accent}, #00A884)`,
      }}
    />

    {/* Background decorative circle */}
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        right: -160,
        bottom: -240,
        width: 800,
        height: 800,
        borderRadius: 400,
        background: 'radial-gradient(circle, rgba(152,204,63,0.08) 0%, rgba(152,204,63,0) 70%)',
      }}
    />

    {/* Content */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '72px 112px 80px',
        gap: 56,
      }}
    >
      {/* Logo */}
      <img src={logoImg} height={80} style={{ objectFit: 'contain' }} />

      {/* Year badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          backgroundColor: 'rgba(152,204,63,0.12)',
          padding: '16px 48px',
          borderRadius: 200,
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 16,
            height: 16,
            backgroundColor: c.accent,
            borderRadius: 8,
          }}
        />
        <div
          style={{
            fontSize: 28,
            fontFamily: fonts.sans,
            fontWeight: 700,
            color: '#4a7c10',
            letterSpacing: '0.08em',
          }}
        >
          NOVEDADES 2026
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          display: 'flex',
          fontSize: 72,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.text.light,
          lineHeight: 1.15,
          textAlign: 'center',
        }}
      >
        Mejoramos nuestros valores de envío
      </div>

      {/* Subtitle */}
      <div
        style={{
          display: 'flex',
          fontSize: 36,
          fontFamily: fonts.sans,
          fontWeight: 400,
          color: c.textSecondary,
          lineHeight: 1.5,
          textAlign: 'center',
          maxWidth: 1040,
        }}
      >
        Nuevas tarifas más accesibles a todo Chile, especialmente a regiones.
      </div>

      {/* Highlight cards */}
      <div style={{ display: 'flex', gap: 32, width: '100%' }}>
        {[
          { label: 'Región Metropolitana', value: 'Envío rebajado' },
          { label: 'Regiones', value: 'Nuevos precios' },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#F3F9F5',
              borderRadius: 28,
              padding: '40px 64px',
              flex: 1,
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontFamily: fonts.sans,
                fontWeight: 600,
                color: c.textSecondary,
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 40,
                fontFamily: fonts.display,
                fontWeight: 700,
                color: '#00A884',
                marginTop: 12,
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 36,
          fontFamily: fonts.sans,
          fontWeight: 700,
          color: '#ffffff',
          backgroundColor: c.accent,
          padding: '32px 112px',
          borderRadius: 20,
          boxShadow: '0 12px 48px rgba(152,204,63,0.3)',
        }}
      >
        Ver productos
      </div>
    </div>
  </div>
)

console.log('Generando popup envíos COMCER (2x retina)...\n')
await render(popup, { ...POPUP, name: 'popup-envios-2026' }, brand)
console.log('\nListo!')
