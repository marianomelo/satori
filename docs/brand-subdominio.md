# Manual de Marca — subdominio.

## Identidad
- **Logo:** "subdominio." en Playfair Display con punto final como firma
- **Slogan:** "Código con propósito."
- **Estética:** Editorial/minimalista, blanco y negro como base

## Tipografías (Google Fonts)
| Rol | Fuente | Pesos | Uso |
|-----|--------|-------|-----|
| Sans (principal) | Inter | 400, 500, 600 | Cuerpo, navegación, botones, UI |
| Display/Serif | Playfair Display | 400, 500, 600, 700 (+itálicas) | Logo, títulos editoriales, slogan |
| Mono | JetBrains Mono | - | Bloques de código en blog |

**Fallbacks:** Sans: system-ui, -apple-system, sans-serif / Serif: Georgia, serif / Mono: Fira Code, monospace

## Paleta de Colores

### Grises (base)
| Token | Hex |
|-------|-----|
| gray-50 | #fafafa |
| gray-100 | #f4f4f5 |
| gray-200 | #e4e4e7 |
| gray-300 | #d4d4d8 |
| gray-400 | #a1a1aa |
| gray-500 | #71717a |
| gray-600 | #52525b |
| gray-700 | #3f3f46 |
| gray-800 | #27272a |
| gray-900 | #18181b |
| gray-950 | #09090b |

### Primary (slate-based)
| Token | Hex |
|-------|-----|
| primary-50 | #f8fafc |
| primary-100 | #f1f5f9 |
| primary-500 | #64748b |
| primary-600 | #475569 |
| primary-700 | #334155 |
| primary-800 | #1e293b |
| primary-900 | #0f172a |

### Colores de marca
| Elemento | Light | Dark |
|----------|-------|------|
| Fondo página | #fff | #18181b |
| Texto principal | #18181b | #f4f4f5 |
| Botón primario bg | #000 | #e4e4e7 |
| Botón primario text | #fff | #18181b |
| Theme color (meta) | #000000 | #000000 |

## Escala Tipográfica
| Token | Tamaño | Line-height | Letter-spacing |
|-------|--------|-------------|----------------|
| h1 | 48px | 1.2 | -0.02em |
| h2 | 36px | 1.3 | -0.01em |
| h3 | 30px | 1.4 | - |
| h4 | 24px | 1.5 | - |
| h5 | 20px | 1.6 | - |
| h6 | 18px | 1.7 | - |
| body | 16px | 1.6 | - |
| body-lg | 18px | 1.7 | - |
| body-sm | 14px | 1.5 | - |

## Border Radius
| Token | Valor | Uso |
|-------|-------|-----|
| card | 0.75rem | Tarjetas |
| button | 0.5rem | Botones |
| input | 0.5rem | Inputs |
| icon | 0.75rem | Contenedores de iconos |

**Nota:** Botones hero/CTA sin border-radius (rectangulares, estética editorial).

## Sombras
| Token | Uso |
|-------|-----|
| card | Tarjetas: sombra sutil con doble capa |
| button | Botones en estado normal |
| button-hover | Botones en hover |
| xl / 2xl | Dropdowns, modales |

## Animaciones
| Nombre | Duración | Descripción |
|--------|----------|-------------|
| fade-in | 0.6s ease-out | Aparición con opacidad |
| fade-up | 0.6s ease-out | Aparición + desplazamiento desde abajo (30px) |
| slide-up | 0.4s ease-out | Deslizamiento vertical |

## Espaciado de Secciones
| Token | Valor |
|-------|-------|
| section-xs | 2rem |
| section-sm | 3rem |
| section | 4rem |
| section-lg | 5rem |
| section-xl | 6rem |

## Contenedores (max-width)
| Token | Valor |
|-------|-------|
| container-sm | 48rem (768px) |
| container | 64rem (1024px) |
| container-lg | 80rem (1280px) |
| container-xl | 90rem (1440px) |

## Principios de Diseño
- Blanco y negro como base, sin colores de acento llamativos
- Modo oscuro via clase `dark` en html, grises invertidos
- Navegación: texto sm, tracking-wide, transiciones 300ms
- Botones primarios: fondo negro (light) / gris claro (dark), sin border-radius
- Botones secundarios: outline con borde gris
- Labels de sección: text-xs tracking-[0.2em] uppercase text-gray-400 (estilo revista)
- Transiciones: duration-200 a duration-500, ease-out
- Plugin: @tailwindcss/typography para estilos de prosa en blog
