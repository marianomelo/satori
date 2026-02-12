import { render } from './render.js'
import { getBrand } from './brands/index.js'

const brand = getBrand('subdominio')
const fonts = brand.fonts

const profile = (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
    }}
  >
    <div
      style={{
        display: 'flex',
        fontSize: 420,
        fontFamily: fonts.display,
        fontWeight: 700,
        color: '#18181b',
        letterSpacing: '-0.02em',
      }}
    >
      S.
    </div>
  </div>
)

await render(profile, { width: 800, height: 800, name: 'profile' }, brand)
console.log('Listo!')
