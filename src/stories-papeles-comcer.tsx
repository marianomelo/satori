import fs from 'node:fs'
import path from 'node:path'
import { render } from './render.js'
import { getBrand, STORY } from './brands/index.js'

const brand = getBrand('comcer')
const c = brand.colors
const fonts = brand.fonts

const assetsDir = path.resolve(import.meta.dirname, '../assets')
const logoImg = `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, 'logo-comcer.png')).toString('base64')}`

function loadImg(filename: string) {
  return `data:image/jpeg;base64,${fs.readFileSync(path.join(assetsDir, filename)).toString('base64')}`
}

const products = [
  {
    name: 'Papel higiénico doble hoja premium jumbo',
    spec: '6 rollos x 250 metros',
    price: '$19.428',
    oldPrice: '$23.990',
    sku: '221014',
    image: 'ph-jumbo-250mt-doble-hoja.jpg',
    badge: 'Premium',
    features: ['Doble hoja', 'Formato jumbo', 'Alta resistencia'],
  },
  {
    name: 'Papel higiénico jumbo hoja simple',
    spec: '6 rollos x 500 metros',
    price: '$16.990',
    oldPrice: '$21.200',
    sku: '221013',
    image: 'ph-jumbo-6x500-simple.jpg',
    badge: 'Alto rendimiento',
    features: ['Hoja simple', '500 mt por rollo', 'Gran duración'],
  },
  {
    name: 'Papel higiénico Natureza jumbo',
    spec: '8 rollos x 300 metros',
    price: '$12.990',
    oldPrice: '$16.275',
    sku: '331003',
    image: 'ph-natureza-8x300.jpg',
    badge: 'Eco',
    features: ['Línea Natureza', '8 rollos', '300 mt c/u'],
  },
  {
    name: 'Papel higiénico doble hoja 50 metros',
    spec: 'Pack de 32 rollos',
    price: '$16.990',
    oldPrice: '$28.590',
    sku: '221012',
    image: 'ph-doble-hoja-32x50mt.jpg',
    badge: 'Oferta',
    features: ['Doble hoja', '32 rollos', 'Formato hogar'],
  },
  {
    name: 'Papel higiénico interfoliado doble hoja',
    spec: '8.000 hojas',
    price: '$26.989',
    oldPrice: '$28.500',
    sku: '221008',
    image: 'ph-interfoliado-8000.jpg',
    badge: 'Profesional',
    features: ['Interfoliado', 'Doble hoja', '8.000 hojas'],
  },
  {
    name: 'Papel higiénico Natureza jumbo',
    spec: '8 rollos x 500 metros',
    price: '$22.990',
    oldPrice: '$33.690',
    sku: '331001',
    image: 'ph-natureza-8x500.jpg',
    badge: 'Eco',
    features: ['Línea Natureza', '8 rollos', '500 mt c/u'],
  },
  {
    name: 'Papel higiénico doble hoja',
    spec: '48 rollos x 27 metros',
    price: '$13.000',
    oldPrice: '$17.590',
    sku: '221006',
    image: 'ph-doble-hoja-48x27mt.jpg',
    badge: 'Pack grande',
    features: ['Doble hoja', '48 rollos', 'Formato hogar'],
  },
  {
    name: 'Papel higiénico doble hoja',
    spec: '24 rollos x 27 metros',
    price: '$6.990',
    oldPrice: '$8.795',
    sku: '221007',
    image: 'ph-doble-hoja-24x27mt.jpg',
    badge: 'Económico',
    features: ['Doble hoja', '24 rollos', 'Formato hogar'],
  },
  {
    name: 'Papel higiénico jumbo',
    spec: '6 rollos x 500 metros',
    price: '$20.984',
    oldPrice: '$21.990',
    sku: '221003',
    image: 'ph-jumbo-6x500-agotado.jpg',
    badge: 'Jumbo',
    features: ['Hoja simple', '6 rollos', '500 mt c/u'],
  },
]

function ProductStory({ product, index }: { product: typeof products[0]; index: number }) {
  const num = String(index + 1).padStart(2, '0')
  const productImg = loadImg(product.image)

  return (
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
      {/* Top accent bar */}
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: 6,
          background: `linear-gradient(to right, ${c.accent}, #00A884)`,
        }}
      />

      {/* Header: Logo + counter */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '52px 60px 0',
        }}
      >
        <img
          src={logoImg}
          height={64}
          style={{ objectFit: 'contain' }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            fontFamily: fonts.sans,
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: c.textSecondary,
          }}
        >
          {num} / {String(products.length).padStart(2, '0')}
        </div>
      </div>

      {/* Badge */}
      <div
        style={{
          display: 'flex',
          padding: '24px 60px 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            backgroundColor: 'rgba(152,204,63,0.12)',
            padding: '10px 24px',
            borderRadius: 100,
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
              fontSize: 18,
              fontFamily: fonts.sans,
              fontWeight: 700,
              color: '#4a7c10',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {product.badge}
          </div>
        </div>
      </div>

      {/* Product image area */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 680,
          position: 'relative',
        }}
      >
        {/* Soft circle behind product */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            width: 560,
            height: 560,
            borderRadius: 280,
            background: 'radial-gradient(circle, rgba(152,204,63,0.08) 0%, rgba(152,204,63,0) 70%)',
          }}
        />
        <img
          src={productImg}
          width={520}
          height={520}
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Info area */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '0 60px 60px',
          justifyContent: 'space-between',
        }}
      >
        {/* Product name + spec */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 22,
              fontFamily: fonts.sans,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#00A884',
              marginBottom: 16,
            }}
          >
            Papeles higiénicos
          </div>
          <div
            style={{
              fontSize: 48,
              fontFamily: fonts.display,
              fontWeight: 700,
              color: c.text.light,
              lineHeight: 1.1,
            }}
          >
            {product.name}
          </div>
          <div
            style={{
              fontSize: 28,
              fontFamily: fonts.sans,
              fontWeight: 400,
              color: c.textSecondary,
              marginTop: 12,
            }}
          >
            {product.spec}
          </div>

          {/* Divider */}
          <div
            style={{
              display: 'flex',
              width: 60,
              height: 4,
              backgroundColor: c.accent,
              borderRadius: 2,
              marginTop: 28,
              marginBottom: 28,
            }}
          />

          {/* Features */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {product.features.map((f) => (
              <div
                key={f}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  backgroundColor: '#F3F9F5',
                  padding: '10px 22px',
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
                    fontSize: 20,
                    fontFamily: fonts.sans,
                    fontWeight: 600,
                    color: c.text.light,
                  }}
                >
                  {f}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
            <div
              style={{
                fontSize: 56,
                fontFamily: fonts.display,
                fontWeight: 700,
                color: c.text.light,
              }}
            >
              {product.price}
            </div>
            <div
              style={{
                fontSize: 28,
                fontFamily: fonts.sans,
                fontWeight: 400,
                color: c.textSecondary,
                textDecoration: 'line-through',
              }}
            >
              {product.oldPrice}
            </div>
            <div
              style={{
                fontSize: 16,
                fontFamily: fonts.sans,
                fontWeight: 400,
                color: c.textSecondary,
              }}
            >
              + IVA
            </div>
          </div>

          {/* CTA Button */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 24,
              fontFamily: fonts.sans,
              fontWeight: 700,
              color: '#ffffff',
              backgroundColor: c.accent,
              padding: '22px 0',
              borderRadius: 12,
              width: '100%',
              boxShadow: '0 6px 24px rgba(152,204,63,0.3)',
            }}
          >
            Comprar en comcer.cl
          </div>

          {/* SKU */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: 16,
              fontFamily: fonts.sans,
              fontWeight: 400,
              color: c.textSecondary,
            }}
          >
            SKU: {product.sku} · Envío a todo Chile
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Generate ────────────────────────────────────────────────────
console.log('Generando stories papeles higiénicos COMCER...\n')

for (let i = 0; i < products.length; i++) {
  const element = <ProductStory product={products[i]} index={i} />
  await render(
    element,
    { ...STORY, name: `story-ph-${String(i + 1).padStart(2, '0')}-${products[i].sku}` },
    brand,
  )
}

console.log(`\nListo! ${products.length} stories generadas.`)
