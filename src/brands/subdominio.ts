import fs from 'node:fs'
import path from 'node:path'
import type { Brand } from './types.js'

const fontsDir = path.resolve(import.meta.dirname, '../../fonts')

export const subdominio: Brand = {
  name: 'subdominio',
  logo: 'subdominio.',
  slogan: 'Codigo con proposito.',
  colors: {
    background: { light: '#ffffff', dark: '#18181b' },
    text: { light: '#18181b', dark: '#f4f4f5' },
    textSecondary: '#71717a',
    textMuted: '#a1a1aa',
    accent: '#000000',
    surface: '#09090b',
    border: '#e4e4e7',
    cta: { bg: '#e4e4e7', text: '#18181b' },
  },
  fonts: {
    display: 'Playfair Display',
    sans: 'Inter',
  },
  fontFiles: [
    {
      name: 'Inter',
      weight: 400,
      style: 'normal',
      data: fs.readFileSync(path.join(fontsDir, 'Inter-Regular.ttf')).buffer,
    },
    {
      name: 'Inter',
      weight: 500,
      style: 'normal',
      data: fs.readFileSync(path.join(fontsDir, 'Inter-Medium.ttf')).buffer,
    },
    {
      name: 'Inter',
      weight: 600,
      style: 'normal',
      data: fs.readFileSync(path.join(fontsDir, 'Inter-SemiBold.ttf')).buffer,
    },
    {
      name: 'Playfair Display',
      weight: 400,
      style: 'normal',
      data: fs.readFileSync(path.join(fontsDir, 'PlayfairDisplay-Regular.ttf')).buffer,
    },
    {
      name: 'Playfair Display',
      weight: 600,
      style: 'normal',
      data: fs.readFileSync(path.join(fontsDir, 'PlayfairDisplay-SemiBold.ttf')).buffer,
    },
    {
      name: 'Playfair Display',
      weight: 700,
      style: 'normal',
      data: fs.readFileSync(path.join(fontsDir, 'PlayfairDisplay-Bold.ttf')).buffer,
    },
    {
      name: 'Playfair Display',
      weight: 400,
      style: 'italic',
      data: fs.readFileSync(path.join(fontsDir, 'PlayfairDisplay-Italic.ttf')).buffer,
    },
  ],
}
