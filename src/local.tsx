import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import fs from 'node:fs'

const element = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#1a1a2e',
      color: '#eaf0f6',
      fontFamily: 'ABeeZee',
    }}
  >
    <div style={{ fontSize: 48, fontWeight: 700 }}>Hello, Satori!</div>
    <div style={{ fontSize: 24, marginTop: 16, color: '#a0aec0' }}>
      Imagen generada localmente con JSX
    </div>
  </div>
)

// load font
const fontData = await fetch(
  'https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/abeezee/ABeeZee-Regular.ttf',
).then((res) => res.arrayBuffer())

// jsx -> svg
const svg = await satori(element, {
  width: 800,
  height: 400,
  fonts: [
    {
      name: 'ABeeZee',
      weight: 400,
      data: fontData,
      style: 'normal',
    },
  ],
})

// svg -> png
const resvg = new Resvg(svg, {})
const pngData = resvg.render()
const pngBuffer = pngData.asPng()

fs.writeFileSync('output.png', pngBuffer)
console.log('Imagen generada: output.png')
