import { render } from './render.js'
import { getBrand, FEED } from './brands/index.js'

const brand = getBrand('comcer')

const test = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
      padding: 80,
      gap: 40,
    }}
  >
    <div style={{ fontSize: 48, fontFamily: 'Montserrat', fontWeight: 700, color: '#0E252C' }}>
      DISEÑO TAMAÑO SEÑAL
    </div>
    <div style={{ fontSize: 48, fontFamily: 'Open Sans', fontWeight: 400, color: '#0E252C' }}>
      diseño tamaño señal ñoño
    </div>
    <div style={{ fontSize: 48, fontFamily: 'Open Sans', fontWeight: 700, color: '#0E252C' }}>
      Asesoría Cotización Región
    </div>
  </div>
)

await render(test, { ...FEED, name: 'test-chars' }, brand)
