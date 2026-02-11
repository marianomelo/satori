import type { Brand } from '../brands/index.js'
import { render } from '../render.js'
import { FEED, STORY } from '../brands/index.js'

export async function generate(brand: Brand) {
  const { colors, fonts } = brand
  const c = colors

  // ─── FEED 1: Producto destacado ─────────────────────────────────
  await render(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        backgroundColor: c.background.light,
        padding: 80,
      }}
    >
      {/* Top: logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 48,
            height: 48,
            backgroundColor: c.accent,
            borderRadius: 8,
          }}
        />
        <div
          style={{
            fontSize: 28,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.accent,
            letterSpacing: '0.05em',
          }}
        >
          {brand.logo}
        </div>
      </div>

      {/* Center: content */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            fontSize: 13,
            fontFamily: fonts.sans,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#00A884',
            marginBottom: 24,
          }}
        >
          PRODUCTO DESTACADO
        </div>

        <div
          style={{
            fontSize: 48,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.text.light,
            lineHeight: 1.2,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
          }}
        >
          Servilletas personalizadas 100% biodegradables
        </div>

        <div
          style={{
            fontSize: 20,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: c.textSecondary,
            lineHeight: 1.6,
            marginTop: 20,
          }}
        >
          Calidad de impresion garantizada. Ideales para restaurantes, hoteles y catering.
        </div>
      </div>

      {/* Bottom: CTA */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 14,
              fontFamily: fonts.sans,
              fontWeight: 400,
              color: c.textSecondary,
            }}
          >
            100% biodegradable
          </div>
          <div style={{ display: 'flex', fontSize: 14, color: c.textSecondary }}>
            ·
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 14,
              fontFamily: fonts.sans,
              fontWeight: 400,
              color: c.textSecondary,
            }}
          >
            Envio a todo Chile
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 14,
            fontFamily: fonts.sans,
            fontWeight: 700,
            color: c.cta.text,
            backgroundColor: c.cta.bg,
            padding: '14px 32px',
            borderRadius: 8,
          }}
        >
          Ver producto
        </div>
      </div>
    </div>,
    { ...FEED, name: 'feed-producto' },
    brand,
  )

  // ─── FEED 2: Dato eco / Sostenibilidad ──────────────────────────
  await render(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: c.background.dark,
        padding: 80,
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontFamily: fonts.sans,
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#00A884',
          marginBottom: 48,
        }}
      >
        PRODUCCION RESPONSABLE
      </div>

      {/* Big number */}
      <div
        style={{
          fontSize: 120,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.accent,
          lineHeight: 1,
        }}
      >
        98%
      </div>

      <div
        style={{
          fontSize: 28,
          fontFamily: fonts.sans,
          fontWeight: 400,
          color: c.text.dark,
          textAlign: 'center',
          lineHeight: 1.5,
          marginTop: 32,
          maxWidth: 700,
        }}
      >
        del agua que utilizamos en produccion es reutilizada gracias a procesos de filtrado y decantacion.
      </div>

      {/* Divider */}
      <div
        style={{
          display: 'flex',
          width: 60,
          height: 3,
          backgroundColor: c.accent,
          marginTop: 48,
          marginBottom: 48,
          borderRadius: 2,
        }}
      />

      <div
        style={{
          fontSize: 18,
          fontFamily: fonts.sans,
          fontWeight: 600,
          color: c.accent,
          letterSpacing: '0.05em',
        }}
      >
        {brand.logo}
      </div>
    </div>,
    { ...FEED, name: 'feed-eco' },
    brand,
  )

  // ─── FEED 3: Distribuidor / CTA ─────────────────────────────────
  await render(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        padding: 80,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: 13,
            fontFamily: fonts.sans,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: c.accent,
            marginBottom: 32,
          }}
        >
          SE PARTE DE NUESTRA RED
        </div>

        <div
          style={{
            fontSize: 46,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.text.light,
            lineHeight: 1.2,
            textTransform: 'uppercase',
          }}
        >
          Unete como distribuidor COMCER
        </div>

        <div
          style={{
            fontSize: 20,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: c.textSecondary,
            lineHeight: 1.6,
            marginTop: 24,
          }}
        >
          Margenes atractivos, soporte comercial dedicado y promociones exclusivas para tu negocio.
        </div>
      </div>

      {/* Benefits */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: 2,
            backgroundColor: c.accent,
            opacity: 0.3,
          }}
        />
        <div style={{ display: 'flex', gap: 40 }}>
          {['Descuentos por volumen', 'Envio a todo Chile', 'Asesoria dedicada'].map(
            (benefit) => (
              <div
                key={benefit}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: 8,
                    height: 8,
                    backgroundColor: c.accent,
                    borderRadius: 4,
                  }}
                />
                <div
                  style={{
                    fontSize: 15,
                    fontFamily: fonts.sans,
                    fontWeight: 600,
                    color: c.text.light,
                  }}
                >
                  {benefit}
                </div>
              </div>
            ),
          )}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 12,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontFamily: fonts.display,
              fontWeight: 700,
              color: c.accent,
              letterSpacing: '0.05em',
            }}
          >
            {brand.logo}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 14,
              fontFamily: fonts.sans,
              fontWeight: 700,
              color: c.cta.text,
              backgroundColor: c.cta.bg,
              padding: '14px 32px',
              borderRadius: 8,
            }}
          >
            Contactar ahora
          </div>
        </div>
      </div>
    </div>,
    { ...FEED, name: 'feed-distribuidor' },
    brand,
  )

  // ─── STORY 1: Dato eco ──────────────────────────────────────────
  await render(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        backgroundColor: c.background.dark,
        padding: 80,
      }}
    >
      {/* Top logo */}
      <div
        style={{
          display: 'flex',
          fontSize: 24,
          fontFamily: fonts.display,
          fontWeight: 700,
          color: c.accent,
          letterSpacing: '0.05em',
        }}
      >
        {brand.logo}
      </div>

      {/* Center */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontFamily: fonts.sans,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#00A884',
            marginBottom: 48,
          }}
        >
          SABIAS QUE...
        </div>

        <div
          style={{
            fontSize: 140,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.accent,
            lineHeight: 1,
          }}
        >
          100%
        </div>

        <div
          style={{
            fontSize: 32,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: c.text.dark,
            textAlign: 'center',
            lineHeight: 1.4,
            marginTop: 40,
            maxWidth: 800,
          }}
        >
          de nuestros envases son recuperados y reciclados mediante logistica inversa.
        </div>

        <div
          style={{
            display: 'flex',
            width: 60,
            height: 3,
            backgroundColor: c.accent,
            marginTop: 48,
            borderRadius: 2,
          }}
        />
      </div>

      {/* Bottom */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: c.textSecondary,
          }}
        >
          Eco-amigable desde el origen hasta el reciclaje
        </div>
      </div>
    </div>,
    { ...STORY, name: 'story-eco' },
    brand,
  )

  // ─── STORY 2: Promo producto ────────────────────────────────────
  await render(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        padding: 80,
      }}
    >
      {/* Top logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 40,
            height: 40,
            backgroundColor: c.accent,
            borderRadius: 8,
          }}
        />
        <div
          style={{
            fontSize: 24,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.accent,
            letterSpacing: '0.05em',
          }}
        >
          {brand.logo}
        </div>
      </div>

      {/* Center content */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: 13,
            fontFamily: fonts.sans,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#00A884',
            marginBottom: 32,
          }}
        >
          PERSONALIZA TU MARCA
        </div>

        <div
          style={{
            fontSize: 52,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.text.light,
            lineHeight: 1.15,
            textTransform: 'uppercase',
          }}
        >
          Disenamos tu servilleta ideal
        </div>

        <div
          style={{
            fontSize: 22,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: c.textSecondary,
            lineHeight: 1.6,
            marginTop: 28,
          }}
        >
          Impresion de alta calidad con tu logo corporativo. Tecnologia avanzada y materiales 100% biodegradables.
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Features row */}
        <div style={{ display: 'flex', gap: 32 }}>
          {['Calidad premium', 'Entrega en 2-5 dias', 'Todo Chile'].map(
            (feat) => (
              <div
                key={feat}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: 8,
                    height: 8,
                    backgroundColor: c.accent,
                    borderRadius: 4,
                  }}
                />
                <div
                  style={{
                    fontSize: 14,
                    fontFamily: fonts.sans,
                    fontWeight: 600,
                    color: c.text.light,
                  }}
                >
                  {feat}
                </div>
              </div>
            ),
          )}
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 16,
            fontFamily: fonts.sans,
            fontWeight: 700,
            color: c.cta.text,
            backgroundColor: c.cta.bg,
            padding: '18px 40px',
            borderRadius: 8,
            justifyContent: 'center',
          }}
        >
          Solicitar cotizacion
        </div>
      </div>
    </div>,
    { ...STORY, name: 'story-producto' },
    brand,
  )
}
