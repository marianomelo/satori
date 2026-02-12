import type { Font } from 'satori'

export interface Brand {
  name: string
  logo: string
  slogan?: string
  colors: {
    background: { light: string; dark: string }
    text: { light: string; dark: string }
    textSecondary: string
    textMuted: string
    accent: string
    surface: string
    border: string
    cta: { bg: string; text: string }
  }
  fonts: {
    display: string
    sans: string
    mono?: string
  }
  fontFiles: Font[]
}

export const FEED = { width: 1080, height: 1080 }
export const FEED_VERTICAL = { width: 1080, height: 1350 }
export const STORY = { width: 1080, height: 1920 }
