import type { Brand } from '../brands/index.js'
import { render } from '../render.js'
import { FEED, STORY } from '../brands/index.js'

export async function generate(brand: Brand) {
  const { colors, fonts } = brand
  const c = colors

  // ─── FEED 1: Quote / Frase editorial ────────────────────────────
  await render(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: c.background.light,
        padding: 80,
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontFamily: fonts.sans,
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: c.textMuted,
          marginBottom: 48,
        }}
      >
        REFLEXION
      </div>

      <div
        style={{
          fontSize: 42,
          fontFamily: fonts.display,
          fontWeight: 400,
          fontStyle: 'italic',
          color: c.text.light,
          textAlign: 'center',
          lineHeight: 1.3,
          maxWidth: 860,
        }}
      >
        "El codigo no es solo logica, es una forma de pensar el mundo."
      </div>

      <div
        style={{
          display: 'flex',
          width: 60,
          height: 2,
          backgroundColor: c.text.light,
          marginTop: 48,
          marginBottom: 48,
        }}
      />

      <div
        style={{
          fontSize: 24,
          fontFamily: fonts.display,
          fontWeight: 600,
          color: c.text.light,
        }}
      >
        {brand.logo}
      </div>
    </div>,
    { ...FEED, name: 'feed-quote' },
    brand,
  )

  // ─── FEED 2: Titulo de post / Tema ──────────────────────────────
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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: 14,
            fontFamily: fonts.sans,
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: c.textMuted,
            marginBottom: 40,
          }}
        >
          DESARROLLO WEB
        </div>

        <div
          style={{
            fontSize: 52,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.text.dark,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            maxWidth: 860,
          }}
        >
          5 patrones de diseno que todo developer deberia conocer
        </div>

        <div
          style={{
            fontSize: 20,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: c.textSecondary,
            lineHeight: 1.6,
            marginTop: 24,
            maxWidth: 760,
          }}
        >
          De SOLID a Clean Architecture: principios que transforman tu codigo.
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontFamily: fonts.display,
            fontWeight: 600,
            color: c.text.dark,
          }}
        >
          {brand.logo}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 14,
            fontFamily: fonts.sans,
            fontWeight: 500,
            color: c.cta.text,
            backgroundColor: c.cta.bg,
            padding: '14px 28px',
          }}
        >
          Leer articulo
        </div>
      </div>
    </div>,
    { ...FEED, name: 'feed-post' },
    brand,
  )

  // ─── FEED 3: Tip / Snippet ──────────────────────────────────────
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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: 14,
            fontFamily: fonts.sans,
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: c.textMuted,
            marginBottom: 40,
          }}
        >
          TIP DEL DIA
        </div>

        <div
          style={{
            fontSize: 44,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.text.light,
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            marginBottom: 32,
          }}
        >
          Usa early returns para codigo mas limpio
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: c.surface,
            borderRadius: 12,
            padding: 40,
          }}
        >
          <div style={{ fontSize: 18, fontFamily: fonts.sans, color: c.textMuted, lineHeight: 2 }}>
            // Antes
          </div>
          <div style={{ fontSize: 18, fontFamily: fonts.sans, color: c.border, lineHeight: 2 }}>
            {'if (user) { if (user.active) { return ok } }'}
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: 1,
              backgroundColor: '#27272a',
              marginTop: 16,
              marginBottom: 16,
            }}
          />
          <div style={{ fontSize: 18, fontFamily: fonts.sans, color: c.textMuted, lineHeight: 2 }}>
            // Despues
          </div>
          <div style={{ fontSize: 18, fontFamily: fonts.sans, color: c.text.dark, lineHeight: 2 }}>
            {'if (!user) return error'}
          </div>
          <div style={{ fontSize: 18, fontFamily: fonts.sans, color: c.text.dark, lineHeight: 2 }}>
            {'if (!user.active) return error'}
          </div>
          <div style={{ fontSize: 18, fontFamily: fonts.sans, color: c.text.dark, lineHeight: 2 }}>
            {'return ok'}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 40 }}>
        <div
          style={{
            fontSize: 24,
            fontFamily: fonts.display,
            fontWeight: 600,
            color: c.text.light,
          }}
        >
          {brand.logo}
        </div>
      </div>
    </div>,
    { ...FEED, name: 'feed-tip' },
    brand,
  )

  // ─── STORY 1: Quote ──────────────────────────────────────────────
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
          fontSize: 14,
          fontFamily: fonts.sans,
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: c.textSecondary,
          marginBottom: 60,
        }}
      >
        {brand.slogan?.toUpperCase() ?? brand.logo.toUpperCase()}
      </div>

      <div
        style={{
          fontSize: 48,
          fontFamily: fonts.display,
          fontWeight: 400,
          fontStyle: 'italic',
          color: c.text.dark,
          textAlign: 'center',
          lineHeight: 1.3,
          maxWidth: 860,
        }}
      >
        "Menos es mas. Cada linea de codigo que no escribes es una linea que no tienes que mantener."
      </div>

      <div
        style={{
          display: 'flex',
          width: 60,
          height: 2,
          backgroundColor: c.text.dark,
          marginTop: 60,
          marginBottom: 60,
        }}
      />

      <div
        style={{
          fontSize: 28,
          fontFamily: fonts.display,
          fontWeight: 600,
          color: c.text.dark,
        }}
      >
        {brand.logo}
      </div>
    </div>,
    { ...STORY, name: 'story-quote' },
    brand,
  )

  // ─── STORY 2: Promo / CTA ───────────────────────────────────────
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
      <div
        style={{
          display: 'flex',
          fontSize: 24,
          fontFamily: fonts.display,
          fontWeight: 600,
          color: c.text.light,
        }}
      >
        {brand.logo}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: 14,
            fontFamily: fonts.sans,
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: c.textMuted,
            marginBottom: 40,
          }}
        >
          NUEVO ARTICULO
        </div>

        <div
          style={{
            fontSize: 56,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.text.light,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}
        >
          APIs que escalan: guia practica de diseno
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
          REST, GraphQL y los patrones que necesitas dominar para construir servicios robustos.
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: 1,
            backgroundColor: c.border,
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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
            Desliza para leer
          </div>
          <div
            style={{
              fontSize: 28,
              fontFamily: fonts.sans,
              fontWeight: 400,
              color: c.text.light,
            }}
          >
            →
          </div>
        </div>
      </div>
    </div>,
    { ...STORY, name: 'story-promo' },
    brand,
  )
}
