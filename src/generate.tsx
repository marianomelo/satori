import { getBrand, listBrands } from './brands/index.js'

const brandName = process.argv[2]

if (!brandName) {
  console.log('Uso: npx tsx src/generate.tsx <marca>\n')
  console.log(`Marcas disponibles: ${listBrands().join(', ')}`)
  process.exit(1)
}

const brand = getBrand(brandName)

console.log(`\nGenerando imagenes para: ${brand.logo}\n`)

// Cargar templates de la marca
const templates = await import(`./templates/${brandName}.js`)
await templates.generate(brand)

console.log('\nListo!')
