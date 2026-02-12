import type { Brand } from '../../brands/types.js'
import type { StoryData } from '../types.js'

export function renderStory(data: StoryData, brand: Brand): React.ReactElement {
  switch (data.variant) {
    case 'bts': return btsStory(data, brand)
    case 'case': return caseStory(data, brand)
    case 'tech': return techStory(data, brand)
  }
}

// ─── BTS (Behind the scenes) ─────────────────────────────────────

function btsStory(data: Extract<StoryData, { variant: 'bts' }>, brand: Brand) {
  const f = brand.fonts
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#09090b', padding: '120px 72px', justifyContent: 'space-between' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', fontSize: 22, fontFamily: f.display, fontWeight: 400, fontStyle: 'italic', color: '#52525b' }}>
          {brand.logo}
        </div>
        <div style={{ display: 'flex', fontSize: 11, fontFamily: f.sans, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#71717a', borderBottom: '2px solid #f4f4f5', paddingBottom: 6, alignSelf: 'flex-start' }}>
          Behind the scenes
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 44, fontFamily: f.display, fontWeight: 700, color: '#f4f4f5', lineHeight: 1.15, marginBottom: 16 }}>
          {data.title}
        </div>
        {data.subtitle && (
          <div style={{ display: 'flex', fontSize: 20, fontFamily: f.sans, fontWeight: 400, color: '#71717a', lineHeight: 1.5, marginBottom: 40 }}>
            {data.subtitle}
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {data.items.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', fontSize: 28, fontFamily: f.display, fontWeight: 700, color: '#27272a', lineHeight: 1, width: 48, flexShrink: 0 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ display: 'flex', fontSize: 22, fontFamily: f.sans, fontWeight: 400, color: '#d4d4d8', lineHeight: 1.4 }}>
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', fontSize: 14, fontFamily: f.sans, fontWeight: 500, color: '#52525b' }}>
          subdominio.cl
        </div>
      </div>
    </div>
  )
}

// ─── CASE (Real case with metrics) ───────────────────────────────

function caseStory(data: Extract<StoryData, { variant: 'case' }>, brand: Brand) {
  const f = brand.fonts
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#09090b', padding: '120px 72px', justifyContent: 'space-between' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', fontSize: 22, fontFamily: f.display, fontWeight: 400, fontStyle: 'italic', color: '#52525b' }}>
          {brand.logo}
        </div>
        <div style={{ display: 'flex', fontSize: 11, fontFamily: f.sans, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#71717a', borderBottom: '2px solid #f4f4f5', paddingBottom: 6, alignSelf: 'flex-start' }}>
          Caso real
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', fontSize: 88, fontFamily: f.display, fontWeight: 700, color: '#f4f4f5', lineHeight: 1, marginBottom: 16 }}>
          {data.stat}
        </div>
        {data.statLabel && (
          <div style={{ display: 'flex', fontSize: 16, fontFamily: f.sans, fontWeight: 600, color: '#18181b', backgroundColor: '#e4e4e7', padding: '6px 24px', borderRadius: 4, marginBottom: 32 }}>
            {data.statLabel}
          </div>
        )}
        <div style={{ display: 'flex', fontSize: 36, fontFamily: f.display, fontWeight: 700, color: '#f4f4f5', lineHeight: 1.2, textAlign: 'center', marginBottom: 20, maxWidth: 800 }}>
          {data.title}
        </div>
        <div style={{ display: 'flex', fontSize: 20, fontFamily: f.sans, fontWeight: 400, color: '#71717a', lineHeight: 1.5, textAlign: 'center', maxWidth: 700 }}>
          {data.desc}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', fontSize: 14, fontFamily: f.sans, fontWeight: 500, color: '#52525b' }}>
          subdominio.cl
        </div>
      </div>
    </div>
  )
}

// ─── TECH (Technology stack) ──────────────────────────────────────

function techStory(data: Extract<StoryData, { variant: 'tech' }>, brand: Brand) {
  const f = brand.fonts
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#09090b', padding: '120px 72px', justifyContent: 'space-between' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', fontSize: 22, fontFamily: f.display, fontWeight: 400, fontStyle: 'italic', color: '#52525b' }}>
          {brand.logo}
        </div>
        <div style={{ display: 'flex', fontSize: 11, fontFamily: f.sans, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#71717a', borderBottom: '2px solid #f4f4f5', paddingBottom: 6, alignSelf: 'flex-start' }}>
          Tech Stack
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 44, fontFamily: f.display, fontWeight: 700, color: '#f4f4f5', lineHeight: 1.15, marginBottom: 48 }}>
          {data.title}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {data.items.map((tech) => (
            <div key={tech} style={{ display: 'flex', fontSize: 20, fontFamily: f.sans, fontWeight: 500, color: '#f4f4f5', backgroundColor: '#18181b', padding: '16px 32px', borderRadius: 8, border: '1px solid #27272a' }}>
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', fontSize: 14, fontFamily: f.sans, fontWeight: 500, color: '#52525b' }}>
          subdominio.cl
        </div>
      </div>
    </div>
  )
}
