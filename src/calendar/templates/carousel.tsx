import type { Brand } from '../../brands/types.js'
import type { SlideData, SlideTheme } from '../types.js'
import { Logo, PageIndicator, SlideNum, Tag, getSkin, getDefaultTheme, type Skin } from '../components.js'

// ─── Main entry point ────────────────────────────────────────────

export function renderSlide(
  slide: SlideData,
  index: number,
  total: number,
  brand: Brand,
): React.ReactElement {
  const theme: SlideTheme =
    slide.type === 'cta' ? 'dark' :
    ('theme' in slide && slide.theme) ? slide.theme! :
    getDefaultTheme(index, total)

  const s = getSkin(theme)
  const f = brand.fonts

  switch (slide.type) {
    case 'cover': return coverSlide(slide, index, total, brand, s, f)
    case 'text': return textSlide(slide, index, total, brand, s, f)
    case 'list': return listSlide(slide, index, total, brand, s, f)
    case 'cards': return cardsSlide(slide, index, total, brand, s, f)
    case 'table': return tableSlide(slide, index, total, brand, s, f)
    case 'steps': return stepsSlide(slide, index, total, brand, s, f)
    case 'stats': return statsSlide(slide, index, total, brand, s, f)
    case 'bigstat': return bigStatSlide(slide, index, total, brand, s, f)
    case 'cta': return ctaSlide(slide, index, total, brand, f)
  }
}

// ─── Helper types ────────────────────────────────────────────────
type F = Brand['fonts']

// ─── COVER ───────────────────────────────────────────────────────

function coverSlide(
  slide: Extract<SlideData, { type: 'cover' }>,
  _index: number, total: number, brand: Brand, s: Skin, f: F,
) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: s.bg, padding: 72, justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', fontSize: 22, fontFamily: f.display, fontWeight: 400, fontStyle: 'italic', color: s.muted }}>
          {brand.logo}
        </div>
        <div style={{ display: 'flex', fontSize: 12, fontFamily: f.sans, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: s.muted }}>
          {slide.category}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 12, fontFamily: f.sans, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: s.body, marginBottom: 28 }}>
          {slide.subtitle}
        </div>
        <div style={{ display: 'flex', fontSize: 52, fontFamily: f.display, fontWeight: 700, color: s.title, lineHeight: 1.1 }}>
          {slide.title}
        </div>
        <div style={{ display: 'flex', width: 60, height: 3, backgroundColor: s.accent, marginTop: 32 }} />
        <div style={{ display: 'flex', fontSize: 22, fontFamily: f.sans, fontWeight: 400, color: s.muted, lineHeight: 1.5, marginTop: 24 }}>
          {slide.desc}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <PageIndicator current={0} total={total} dark={s.isDark} />
        <div style={{ display: 'flex', fontSize: 14, fontFamily: f.sans, fontWeight: 400, color: s.muted }}>
          Desliza →
        </div>
      </div>
    </div>
  )
}

// ─── TEXT ─────────────────────────────────────────────────────────

function textSlide(
  slide: Extract<SlideData, { type: 'text' }>,
  index: number, total: number, brand: Brand, s: Skin, f: F,
) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: s.bg, padding: 72, justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Tag label={slide.tag} dark={s.isDark} brand={brand} />
        <SlideNum n={index + 1} total={total} brand={brand} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 38, fontFamily: f.display, fontWeight: 700, color: s.title, marginBottom: 32, lineHeight: 1.2 }}>
          {slide.title}
        </div>
        {slide.body && (
          <div style={{ display: 'flex', fontSize: 20, fontFamily: f.sans, fontWeight: 400, color: s.body, lineHeight: 1.6, marginBottom: slide.items ? 36 : 0 }}>
            {slide.body}
          </div>
        )}
        {slide.items && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {slide.items.map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ display: 'flex', width: 8, height: 8, backgroundColor: s.accent, borderRadius: 4, flexShrink: 0 }} />
                <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                  <div style={{ display: 'flex', fontSize: 18, fontFamily: f.sans, fontWeight: 600, color: s.title }}>
                    {item.label}
                  </div>
                  <div style={{ display: 'flex', fontSize: 16, fontFamily: f.sans, fontWeight: 400, color: s.muted }}>
                    — {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <PageIndicator current={index} total={total} dark={s.isDark} />
        <Logo brand={brand} dark={s.isDark} />
      </div>
    </div>
  )
}

// ─── LIST ─────────────────────────────────────────────────────────

function listSlide(
  slide: Extract<SlideData, { type: 'list' }>,
  index: number, total: number, brand: Brand, s: Skin, f: F,
) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: s.bg, padding: 72, justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Tag label={slide.tag} dark={s.isDark} brand={brand} />
        <SlideNum n={index + 1} total={total} brand={brand} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 36, fontFamily: f.display, fontWeight: 700, color: s.title, marginBottom: 40 }}>
          {slide.title}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {slide.items.map((item) => (
            <div key={item.title} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', fontSize: 24, fontFamily: f.display, fontWeight: 700, color: s.title }}>
                {item.title}
              </div>
              <div style={{ display: 'flex', fontSize: 17, fontFamily: f.sans, fontWeight: 400, color: s.body, lineHeight: 1.5 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <PageIndicator current={index} total={total} dark={s.isDark} />
        <Logo brand={brand} dark={s.isDark} />
      </div>
    </div>
  )
}

// ─── CARDS ────────────────────────────────────────────────────────

function cardsSlide(
  slide: Extract<SlideData, { type: 'cards' }>,
  index: number, total: number, brand: Brand, s: Skin, f: F,
) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: s.bg, padding: 72, justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Tag label={slide.tag} dark={s.isDark} brand={brand} />
        <SlideNum n={index + 1} total={total} brand={brand} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 34, fontFamily: f.display, fontWeight: 700, color: s.title, marginBottom: 36 }}>
          {slide.title}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {slide.cards.map((card) => (
            <div key={card.title} style={{ display: 'flex', flexDirection: 'column', backgroundColor: s.cardBg, borderRadius: 12, padding: '24px 28px', border: `1px solid ${s.cardBorder}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <div style={{ display: 'flex', fontSize: 20, fontFamily: f.sans, fontWeight: 600, color: s.title }}>
                  {card.title}
                </div>
                {card.badge && (
                  <div style={{ display: 'flex', fontSize: 13, fontFamily: f.sans, fontWeight: 600, color: '#18181b', backgroundColor: '#e4e4e7', padding: '4px 16px', borderRadius: 4 }}>
                    {card.badge}
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', fontSize: 16, fontFamily: f.sans, fontWeight: 400, color: s.body, lineHeight: 1.5 }}>
                {card.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <PageIndicator current={index} total={total} dark={s.isDark} />
        <Logo brand={brand} dark={s.isDark} />
      </div>
    </div>
  )
}

// ─── TABLE ────────────────────────────────────────────────────────

function tableSlide(
  slide: Extract<SlideData, { type: 'table' }>,
  index: number, total: number, brand: Brand, s: Skin, f: F,
) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: s.bg, padding: 72, justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Tag label={slide.tag} dark={s.isDark} brand={brand} />
        <SlideNum n={index + 1} total={total} brand={brand} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 36, fontFamily: f.display, fontWeight: 700, color: s.title, marginBottom: 36 }}>
          {slide.title}
        </div>

        {/* Header row */}
        <div style={{ display: 'flex', padding: '16px 0', borderBottom: `2px solid ${s.accent}` }}>
          {slide.headers.map((h) => (
            <div key={h} style={{ display: 'flex', flex: 1, fontSize: 13, fontFamily: f.sans, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: s.muted }}>
              {h}
            </div>
          ))}
        </div>

        {/* Data rows */}
        {slide.rows.map((row, ri) => (
          <div key={ri} style={{ display: 'flex', padding: '18px 0', borderBottom: ri < slide.rows.length - 1 ? `1px solid ${s.divider}` : 'none' }}>
            {row.map((cell, ci) => (
              <div key={ci} style={{ display: 'flex', flex: 1, fontSize: ci === 0 ? 18 : 16, fontFamily: f.sans, fontWeight: ci === 0 ? 600 : 400, color: ci === 0 ? s.title : s.body }}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <PageIndicator current={index} total={total} dark={s.isDark} />
        <Logo brand={brand} dark={s.isDark} />
      </div>
    </div>
  )
}

// ─── STEPS ────────────────────────────────────────────────────────

function stepsSlide(
  slide: Extract<SlideData, { type: 'steps' }>,
  index: number, total: number, brand: Brand, s: Skin, f: F,
) {
  const start = slide.startNum ?? 1
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: s.bg, padding: 72, justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Tag label={slide.tag} dark={s.isDark} brand={brand} />
        <SlideNum n={index + 1} total={total} brand={brand} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 36, fontFamily: f.display, fontWeight: 700, color: s.title, marginBottom: 36 }}>
          {slide.title}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {slide.steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', fontSize: 32, fontFamily: f.display, fontWeight: 700, color: s.stepNum, lineHeight: 1, width: 56, flexShrink: 0 }}>
                {String(start + i).padStart(2, '0')}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ display: 'flex', fontSize: 20, fontFamily: f.sans, fontWeight: 600, color: s.title }}>
                  {step.title}
                </div>
                <div style={{ display: 'flex', fontSize: 16, fontFamily: f.sans, fontWeight: 400, color: s.body, lineHeight: 1.5 }}>
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {slide.footnote && (
          <>
            <div style={{ display: 'flex', width: '100%', height: 1, backgroundColor: s.divider, marginTop: 36, marginBottom: 28 }} />
            <div style={{ display: 'flex', fontSize: 17, fontFamily: f.sans, fontWeight: 400, fontStyle: 'italic', color: s.muted, lineHeight: 1.5 }}>
              {slide.footnote}
            </div>
          </>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <PageIndicator current={index} total={total} dark={s.isDark} />
        <Logo brand={brand} dark={s.isDark} />
      </div>
    </div>
  )
}

// ─── STATS ────────────────────────────────────────────────────────

function statsSlide(
  slide: Extract<SlideData, { type: 'stats' }>,
  index: number, total: number, brand: Brand, s: Skin, f: F,
) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: s.bg, padding: 72, justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Tag label={slide.tag} dark={s.isDark} brand={brand} />
        <SlideNum n={index + 1} total={total} brand={brand} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 36, fontFamily: f.display, fontWeight: 700, color: s.title, marginBottom: 36 }}>
          {slide.title}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {slide.stats.map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', backgroundColor: s.cardBg, borderRadius: 12, padding: '28px 32px', border: `1px solid ${s.cardBorder}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: stat.desc ? 10 : 0 }}>
                <div style={{ display: 'flex', fontSize: 26, fontFamily: f.display, fontWeight: 700, color: s.title }}>
                  {stat.label}
                </div>
                <div style={{ display: 'flex', fontSize: 13, fontFamily: f.sans, fontWeight: 600, color: '#18181b', backgroundColor: '#e4e4e7', padding: '4px 16px', borderRadius: 4 }}>
                  {stat.value}
                </div>
              </div>
              {stat.desc && (
                <div style={{ display: 'flex', fontSize: 17, fontFamily: f.sans, fontWeight: 400, color: s.body, lineHeight: 1.5 }}>
                  {stat.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <PageIndicator current={index} total={total} dark={s.isDark} />
        <Logo brand={brand} dark={s.isDark} />
      </div>
    </div>
  )
}

// ─── BIGSTAT ──────────────────────────────────────────────────────

function bigStatSlide(
  slide: Extract<SlideData, { type: 'bigstat' }>,
  index: number, total: number, brand: Brand, s: Skin, f: F,
) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: s.bg, padding: 72, justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Tag label={slide.tag} dark={s.isDark} brand={brand} />
        <SlideNum n={index + 1} total={total} brand={brand} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', fontSize: 120, fontFamily: f.display, fontWeight: 700, color: s.divider, lineHeight: 1, marginBottom: 8 }}>
          {slide.number}
        </div>
        <div style={{ display: 'flex', fontSize: 36, fontFamily: f.display, fontWeight: 700, color: s.title, textAlign: 'center', marginBottom: 20 }}>
          {slide.title}
        </div>
        <div style={{ display: 'flex', fontSize: 18, fontFamily: f.sans, fontWeight: 400, color: s.body, textAlign: 'center', lineHeight: 1.5, maxWidth: 700, marginBottom: 40 }}>
          {slide.desc}
        </div>
        <div style={{ display: 'flex', fontSize: 64, fontFamily: f.display, fontWeight: 700, color: s.title }}>
          {slide.stat}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <PageIndicator current={index} total={total} dark={s.isDark} />
        <Logo brand={brand} dark={s.isDark} />
      </div>
    </div>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────

function ctaSlide(
  slide: Extract<SlideData, { type: 'cta' }>,
  index: number, total: number, brand: Brand, f: F,
) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#09090b', padding: 72, justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', fontSize: 22, fontFamily: f.display, fontWeight: 400, fontStyle: 'italic', color: '#52525b' }}>
          {brand.logo}
        </div>
        <SlideNum n={index + 1} total={total} brand={brand} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', fontSize: 12, fontFamily: f.sans, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#71717a', marginBottom: 28 }}>
          {slide.topLabel}
        </div>
        <div style={{ display: 'flex', fontSize: 46, fontFamily: f.display, fontWeight: 700, color: '#f4f4f5', lineHeight: 1.15, textAlign: 'center', maxWidth: 800 }}>
          {slide.headline}
        </div>
        <div style={{ display: 'flex', width: 50, height: 3, backgroundColor: '#f4f4f5', marginTop: 32, marginBottom: 28 }} />
        <div style={{ display: 'flex', fontSize: 20, fontFamily: f.sans, fontWeight: 400, color: '#71717a', lineHeight: 1.5, textAlign: 'center', maxWidth: 640 }}>
          {slide.desc}
        </div>
        <div style={{ display: 'flex', fontSize: 18, fontFamily: f.sans, fontWeight: 600, color: '#18181b', backgroundColor: '#e4e4e7', padding: '18px 52px', borderRadius: 0, marginTop: 40 }}>
          {slide.ctaText}
        </div>
      </div>

      <PageIndicator current={index} total={total} dark />
    </div>
  )
}
