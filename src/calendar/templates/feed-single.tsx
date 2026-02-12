import type { Brand } from '../../brands/types.js'
import type { FeedData } from '../types.js'

export function renderFeed(data: FeedData, brand: Brand): React.ReactElement {
  switch (data.variant) {
    case 'tip': return tipFeed(data, brand)
    case 'quote': return quoteFeed(data, brand)
    case 'stat': return statFeed(data, brand)
    case 'project': return projectFeed(data, brand)
  }
}

// ─── TIP ─────────────────────────────────────────────────────────

function tipFeed(data: Extract<FeedData, { variant: 'tip' }>, brand: Brand) {
  const f = brand.fonts
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#ffffff', padding: 72, justifyContent: 'space-between' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', fontSize: 11, fontFamily: f.sans, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#71717a', borderBottom: '2px solid #18181b', paddingBottom: 6 }}>
          Tip
        </div>
        <div style={{ display: 'flex', fontSize: 22, fontFamily: f.display, fontWeight: 400, fontStyle: 'italic', color: '#a1a1aa' }}>
          {brand.logo}
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 42, fontFamily: f.display, fontWeight: 700, color: '#18181b', lineHeight: 1.15, marginBottom: 32 }}>
          {data.title}
        </div>
        <div style={{ display: 'flex', fontSize: 20, fontFamily: f.sans, fontWeight: 400, color: '#71717a', lineHeight: 1.6 }}>
          {data.body}
        </div>
        {data.items && data.items.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
            {data.items.map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ display: 'flex', width: 6, height: 6, backgroundColor: '#18181b', borderRadius: 3, marginTop: 10, flexShrink: 0 }} />
                <div style={{ display: 'flex', fontSize: 18, fontFamily: f.sans, fontWeight: 400, color: '#52525b', lineHeight: 1.5 }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', fontSize: 13, fontFamily: f.sans, fontWeight: 500, color: '#a1a1aa' }}>
          subdominio.cl
        </div>
        <div style={{ display: 'flex', fontSize: 12, fontFamily: f.sans, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a1a1aa' }}>
          Tips
        </div>
      </div>
    </div>
  )
}

// ─── QUOTE ───────────────────────────────────────────────────────

function quoteFeed(data: Extract<FeedData, { variant: 'quote' }>, brand: Brand) {
  const f = brand.fonts
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#09090b', padding: 72, justifyContent: 'space-between' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', fontSize: 22, fontFamily: f.display, fontWeight: 400, fontStyle: 'italic', color: '#52525b' }}>
          {brand.logo}
        </div>
        <div style={{ display: 'flex', fontSize: 11, fontFamily: f.sans, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#71717a', borderBottom: '2px solid #f4f4f5', paddingBottom: 6 }}>
          Marca
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', fontSize: 72, fontFamily: f.display, fontWeight: 700, color: '#27272a', lineHeight: 1, marginBottom: 24 }}>
          "
        </div>
        <div style={{ display: 'flex', fontSize: 40, fontFamily: f.display, fontWeight: 700, color: '#f4f4f5', lineHeight: 1.2, textAlign: 'center', maxWidth: 800 }}>
          {data.text}
        </div>
        {data.subtitle && (
          <>
            <div style={{ display: 'flex', width: 50, height: 3, backgroundColor: '#f4f4f5', marginTop: 32, marginBottom: 24 }} />
            <div style={{ display: 'flex', fontSize: 18, fontFamily: f.sans, fontWeight: 400, color: '#71717a', lineHeight: 1.5, textAlign: 'center', maxWidth: 640 }}>
              {data.subtitle}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', fontSize: 13, fontFamily: f.sans, fontWeight: 500, color: '#52525b' }}>
          subdominio.cl
        </div>
      </div>
    </div>
  )
}

// ─── STAT ────────────────────────────────────────────────────────

function statFeed(data: Extract<FeedData, { variant: 'stat' }>, brand: Brand) {
  const f = brand.fonts
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#09090b', padding: 72, justifyContent: 'space-between' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', fontSize: 22, fontFamily: f.display, fontWeight: 400, fontStyle: 'italic', color: '#52525b' }}>
          {brand.logo}
        </div>
        <div style={{ display: 'flex', fontSize: 11, fontFamily: f.sans, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#71717a', borderBottom: '2px solid #f4f4f5', paddingBottom: 6 }}>
          Autoridad
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', fontSize: 96, fontFamily: f.display, fontWeight: 700, color: '#f4f4f5', lineHeight: 1, marginBottom: 16 }}>
          {data.value}
        </div>
        <div style={{ display: 'flex', fontSize: 28, fontFamily: f.display, fontWeight: 700, color: '#f4f4f5', textAlign: 'center', marginBottom: 24 }}>
          {data.label}
        </div>
        {data.context && (
          <div style={{ display: 'flex', fontSize: 18, fontFamily: f.sans, fontWeight: 400, color: '#71717a', lineHeight: 1.5, textAlign: 'center', maxWidth: 640 }}>
            {data.context}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', fontSize: 13, fontFamily: f.sans, fontWeight: 500, color: '#52525b' }}>
          subdominio.cl
        </div>
      </div>
    </div>
  )
}

// ─── PROJECT ─────────────────────────────────────────────────────

function projectFeed(data: Extract<FeedData, { variant: 'project' }>, brand: Brand) {
  const f = brand.fonts
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#ffffff', padding: 72, justifyContent: 'space-between' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', fontSize: 11, fontFamily: f.sans, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#71717a', borderBottom: '2px solid #18181b', paddingBottom: 6 }}>
          Proyecto
        </div>
        <div style={{ display: 'flex', fontSize: 22, fontFamily: f.display, fontWeight: 400, fontStyle: 'italic', color: '#a1a1aa' }}>
          {brand.logo}
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 13, fontFamily: f.sans, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: 16 }}>
          {data.type}
        </div>
        <div style={{ display: 'flex', fontSize: 48, fontFamily: f.display, fontWeight: 700, color: '#18181b', lineHeight: 1.1, marginBottom: 24 }}>
          {data.name}
        </div>
        <div style={{ display: 'flex', width: 50, height: 3, backgroundColor: '#18181b', marginBottom: 24 }} />
        <div style={{ display: 'flex', fontSize: 20, fontFamily: f.sans, fontWeight: 400, color: '#71717a', lineHeight: 1.6, marginBottom: 36 }}>
          {data.desc}
        </div>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {data.stack.map((tech) => (
            <div key={tech} style={{ display: 'flex', fontSize: 13, fontFamily: f.sans, fontWeight: 500, color: '#18181b', backgroundColor: '#f4f4f5', padding: '8px 20px', borderRadius: 4 }}>
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', fontSize: 13, fontFamily: f.sans, fontWeight: 500, color: '#a1a1aa' }}>
          subdominio.cl
        </div>
        <div style={{ display: 'flex', fontSize: 12, fontFamily: f.sans, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a1a1aa' }}>
          Portafolio
        </div>
      </div>
    </div>
  )
}
