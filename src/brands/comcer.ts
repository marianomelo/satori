import fs from 'node:fs'
import path from 'node:path'
import type { Brand } from './types.js'

const fontsDir = path.resolve(import.meta.dirname, '../../fonts')

export const comcer: Brand = {
  name: 'comcer',
  logo: 'COMCER',
  slogan: 'Productos Aseo Ecoamigables',
  colors: {
    background: { light: '#F3F9F5', dark: '#0E252C' },
    text: { light: '#0E252C', dark: '#F3F9F5' },
    textSecondary: '#808080',
    textMuted: '#A6D03E',
    accent: '#98CC3F',
    surface: '#ffffff',
    border: '#A6D03E',
    cta: { bg: '#98CC3F', text: '#ffffff' },
  },
  fonts: {
    display: 'Montserrat',
    sans: 'Open Sans',
  },
  fontFiles: [
    {
      name: 'Open Sans',
      weight: 300,
      style: 'normal',
      data: fs.readFileSync(path.join(fontsDir, 'OpenSans-Light.ttf')).buffer,
    },
    {
      name: 'Open Sans',
      weight: 400,
      style: 'normal',
      data: fs.readFileSync(path.join(fontsDir, 'OpenSans-Regular.ttf')).buffer,
    },
    {
      name: 'Open Sans',
      weight: 600,
      style: 'normal',
      data: fs.readFileSync(path.join(fontsDir, 'OpenSans-SemiBold.ttf')).buffer,
    },
    {
      name: 'Open Sans',
      weight: 700,
      style: 'normal',
      data: fs.readFileSync(path.join(fontsDir, 'OpenSans-Bold.ttf')).buffer,
    },
    {
      name: 'Montserrat',
      weight: 600,
      style: 'normal',
      data: fs.readFileSync(path.join(fontsDir, 'Montserrat-SemiBold.ttf')).buffer,
    },
    {
      name: 'Montserrat',
      weight: 700,
      style: 'normal',
      data: fs.readFileSync(path.join(fontsDir, 'Montserrat-Bold.ttf')).buffer,
    },
  ],
}
