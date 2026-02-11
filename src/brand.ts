import fs from 'node:fs'
import path from 'node:path'

const fontsDir = path.resolve(import.meta.dirname, '../fonts')

export const colors = {
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },
  primary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
} as const

export const fonts = [
  {
    name: 'Inter',
    weight: 400 as const,
    style: 'normal' as const,
    data: fs.readFileSync(path.join(fontsDir, 'Inter-Regular.ttf')).buffer,
  },
  {
    name: 'Inter',
    weight: 500 as const,
    style: 'normal' as const,
    data: fs.readFileSync(path.join(fontsDir, 'Inter-Medium.ttf')).buffer,
  },
  {
    name: 'Inter',
    weight: 600 as const,
    style: 'normal' as const,
    data: fs.readFileSync(path.join(fontsDir, 'Inter-SemiBold.ttf')).buffer,
  },
  {
    name: 'Playfair Display',
    weight: 400 as const,
    style: 'normal' as const,
    data: fs.readFileSync(path.join(fontsDir, 'PlayfairDisplay-Regular.ttf')).buffer,
  },
  {
    name: 'Playfair Display',
    weight: 600 as const,
    style: 'normal' as const,
    data: fs.readFileSync(path.join(fontsDir, 'PlayfairDisplay-SemiBold.ttf')).buffer,
  },
  {
    name: 'Playfair Display',
    weight: 700 as const,
    style: 'normal' as const,
    data: fs.readFileSync(path.join(fontsDir, 'PlayfairDisplay-Bold.ttf')).buffer,
  },
  {
    name: 'Playfair Display',
    weight: 400 as const,
    style: 'italic' as const,
    data: fs.readFileSync(path.join(fontsDir, 'PlayfairDisplay-Italic.ttf')).buffer,
  },
]

// Sizes
export const FEED = { width: 1080, height: 1080 }
export const STORY = { width: 1080, height: 1920 }
