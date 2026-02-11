import { subdominio } from './subdominio.js'
import { comcer } from './comcer.js'
import type { Brand } from './types.js'

export type { Brand } from './types.js'
export { FEED, STORY } from './types.js'

const brands: Record<string, Brand> = {
  subdominio,
  comcer,
}

export function getBrand(name: string): Brand {
  const brand = brands[name]
  if (!brand) {
    const available = Object.keys(brands).join(', ')
    console.error(`Marca "${name}" no encontrada. Disponibles: ${available}`)
    process.exit(1)
  }
  return brand
}

export function listBrands(): string[] {
  return Object.keys(brands)
}
