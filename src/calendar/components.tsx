import type { Brand } from '../brands/types.js'
import type { SlideTheme } from './types.js'

// ─── Theme skin ──────────────────────────────────────────────────
export interface Skin {
  bg: string
  title: string
  body: string
  muted: string
  accent: string
  divider: string
  tagText: string
  tagBorder: string
  cardBg: string
  cardBorder: string
  stepNum: string
  isDark: boolean
}

export function getSkin(theme: SlideTheme): Skin {
  switch (theme) {
    case 'dark':
      return {
        bg: '#09090b', title: '#f4f4f5', body: '#a1a1aa', muted: '#71717a',
        accent: '#f4f4f5', divider: '#27272a', tagText: '#71717a', tagBorder: '#f4f4f5',
        cardBg: '#18181b', cardBorder: '#27272a', stepNum: '#3f3f46', isDark: true,
      }
    case 'gray':
      return {
        bg: '#fafafa', title: '#18181b', body: '#71717a', muted: '#a1a1aa',
        accent: '#18181b', divider: '#e4e4e7', tagText: '#71717a', tagBorder: '#18181b',
        cardBg: '#ffffff', cardBorder: '#e4e4e7', stepNum: '#e4e4e7', isDark: false,
      }
    default: // light
      return {
        bg: '#ffffff', title: '#18181b', body: '#71717a', muted: '#a1a1aa',
        accent: '#18181b', divider: '#e4e4e7', tagText: '#71717a', tagBorder: '#18181b',
        cardBg: '#fafafa', cardBorder: '#e4e4e7', stepNum: '#e4e4e7', isDark: false,
      }
  }
}

export function getDefaultTheme(index: number, total: number): SlideTheme {
  if (index === 0 || index === total - 1) return 'dark'
  const cycle = (index - 1) % 3
  return cycle === 0 ? 'light' : cycle === 1 ? 'gray' : 'dark'
}

// ─── Shared components ───────────────────────────────────────────

export function Logo({ brand, dark }: { brand: Brand; dark?: boolean }) {
  return (
    <div style={{
      display: 'flex', fontSize: 22, fontFamily: brand.fonts.display,
      fontWeight: 400, fontStyle: 'italic',
      color: dark ? '#52525b' : brand.colors.textMuted,
    }}>
      {brand.logo}
    </div>
  )
}

export function PageIndicator({ current, total, dark }: { current: number; total: number; dark?: boolean }) {
  return (
    <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            width: i === current ? 28 : 8, height: 8,
            backgroundColor: i === current
              ? (dark ? '#f4f4f5' : '#000000')
              : (dark ? '#27272a' : '#e4e4e7'),
            borderRadius: 4,
          }}
        />
      ))}
    </div>
  )
}

export function SlideNum({ n, total, brand }: { n: number; total: number; brand: Brand }) {
  return (
    <div style={{
      display: 'flex', fontSize: 13, fontFamily: brand.fonts.sans,
      fontWeight: 500, color: brand.colors.textMuted, letterSpacing: '0.12em',
    }}>
      {n} / {total}
    </div>
  )
}

export function Tag({ label, dark, brand }: { label: string; dark?: boolean; brand: Brand }) {
  return (
    <div style={{
      display: 'flex', fontSize: 11, fontFamily: brand.fonts.sans,
      fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: dark ? '#71717a' : brand.colors.textSecondary,
      borderBottom: `2px solid ${dark ? '#f4f4f5' : '#18181b'}`,
      paddingBottom: 6, alignSelf: 'flex-start',
    }}>
      {label}
    </div>
  )
}
