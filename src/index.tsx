import * as BunnySDK from '@bunny.net/edgescript-sdk'
import { initSatori } from 'bunny-satori'
import { initResvg } from 'bunny-resvg'

let satori: Awaited<ReturnType<typeof initSatori>>
let resvg: Awaited<ReturnType<typeof initResvg>>

BunnySDK.net.http.serve(async (request: Request): Promise<Response> => {
  // keep script startup time under 500ms limit
  if (!satori || !resvg) {
    ;[satori, resvg] = await Promise.all([initSatori(), initResvg()])
  }

  // jsx elements
  const element = <div style={{ color: 'black' }}>hello, world</div>

  // generate svg image
  const svg = await satori(element, {
    width: 600,
    height: 400,
    fonts: [
      // if text is rendered, at least one font must be loaded
      {
        name: 'ABeeZee',
        weight: 400,
        data: await fetch(
          'https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/abeezee/ABeeZee-Regular.ttf',
        ).then((res) => res.arrayBuffer()),
        style: 'normal',
      },
    ],
  })

  // generate png image
  const resvgJS = new resvg.Resvg(svg, {})
  const pngData = resvgJS.render()
  const pngBuffer = pngData.asPng()

  // return image response
  return new Response(pngBuffer, {
    headers: {
      'Content-Type': 'image/png',
    },
  })
})
