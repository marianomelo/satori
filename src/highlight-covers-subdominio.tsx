import { render } from './render.js'
import { getBrand } from './brands/index.js'

const brand = getBrand('subdominio')
const fonts = brand.fonts

const covers = [
  { top: 'Servi-', bottom: 'cios', tag: 'servicios' },
  { top: 'Proyec-', bottom: 'tos', tag: 'proyectos' },
]

for (const cover of covers) {
  const slide = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
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
          flexDirection: 'column',
          alignItems: 'center',
          lineHeight: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 148,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: '#18181b',
          }}
        >
          {cover.top}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 148,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: '#18181b',
          }}
        >
          {cover.bottom}
        </div>
      </div>
    </div>
  )

  await render(slide, { width: 800, height: 800, name: `highlight-cover-${cover.tag}` }, brand)
}

console.log('Listo! 2 portadas generadas.')
