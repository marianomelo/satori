import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import fs from 'node:fs'
import path from 'node:path'
import type { Brand } from './brands/index.js'

const outputBase = path.resolve(import.meta.dirname, '../output')

export async function render(
  element: React.ReactElement,
  options: { width: number; height: number; name: string },
  brand: Brand,
) {
  const outputDir = path.join(outputBase, brand.name)
  fs.mkdirSync(outputDir, { recursive: true })

  const svg = await satori(element, {
    width: options.width,
    height: options.height,
    fonts: brand.fontFiles,
  })

  const resvg = new Resvg(svg, {})
  const pngData = resvg.render()
  const pngBuffer = pngData.asPng()

  const filePath = path.join(outputDir, `${options.name}.png`)
  fs.writeFileSync(filePath, pngBuffer)
  console.log(`  -> ${options.name}.png`)
}
