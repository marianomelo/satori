import { render } from './render.js'
import { getBrand, STORY } from './brands/index.js'

const brand = getBrand('subdominio')
const c = brand.colors
const fonts = brand.fonts

// ─── Project data ────────────────────────────────────────────────

const projects = [
  {
    name: 'agroalfalfa.cl',
    type: 'Lead generation',
    desc: 'Sitio comercial para venta de forraje mediante cotización personalizada. Despacho directo a predios en todo Chile.',
    tech: ['Next.js', 'React', 'Tailwind'],
    year: '2026',
  },
  {
    name: 'dtepdf.cl',
    type: 'SaaS',
    desc: 'Plataforma que convierte XML tributario del SII a PDF legible. Incluye conversión masiva, API REST y sistema de cuentas.',
    tech: ['Next.js', 'React', 'API REST'],
    year: '2025',
  },
  {
    name: 'erpsync.app',
    type: 'SaaS Middleware',
    desc: 'Sincronización automática entre Softland ERP y tiendas online. Conecta clientes, productos, pedidos y stock en tiempo real.',
    tech: ['Astro', 'React', 'Tailwind'],
    year: '2025',
  },
  {
    name: 'baseapi.cl',
    type: 'API Platform',
    desc: 'Plataforma de servicios API empresarial. Integración con SII, sistemas ERP y automatización tributaria.',
    tech: ['Node.js', 'PostgreSQL', 'REST API'],
    year: '2025',
  },
  {
    name: 'comcer.cl',
    type: 'E-commerce',
    desc: 'Tienda online de productos de limpieza, higiene y desechables ecológicos. Catálogo completo con checkout y pagos.',
    tech: ['WooCommerce', 'WordPress', 'MySQL'],
    year: '2025',
  },
  {
    name: 'tienda.sagita.cl',
    type: 'E-commerce',
    desc: 'Tienda de equipos de seguridad industrial. Venta B2B con catálogo extenso y despacho a nivel nacional.',
    tech: ['WooCommerce', 'WordPress', 'PHP'],
    year: '2025',
  },
  {
    name: 'clandent.cl',
    type: 'E-commerce',
    desc: 'Venta de insumos dentales y equipamiento odontológico. E-commerce especializado para profesionales de la salud.',
    tech: ['WooCommerce', 'WordPress', 'Elementor'],
    year: '2025',
  },
  {
    name: 'tecnologicachile.cl',
    type: 'Corporativo',
    desc: 'Sitio institucional de empresa proveedora de software empresarial, integración de sistemas y datacenter.',
    tech: ['Astro', 'React', 'Tailwind'],
    year: '2025',
  },
  {
    name: 'hostingsistemas.cl',
    type: 'Corporativo',
    desc: 'Hosting empresarial especializado en Softland ERP. Infraestructura optimizada para sistemas de gestión.',
    tech: ['Astro', 'React', 'Tailwind'],
    year: '2025',
  },
  {
    name: 'asistenciaerp.cl',
    type: 'Corporativo',
    desc: 'Consultoría especializada en Softland ERP. Reportes personalizados y soporte técnico dedicado.',
    tech: ['Next.js', 'React', 'Tailwind'],
    year: '2025',
  },
  {
    name: 'rycferretero.cl',
    type: 'E-commerce',
    desc: 'Ferretería online con catálogo de materiales de construcción. E-commerce completo con despacho nacional.',
    tech: ['WooCommerce', 'WordPress', 'PHP'],
    year: '2025',
  },
  {
    name: 'IIBP ERP',
    type: 'Sistema ERP',
    desc: 'Migración de sistema ERP empresarial de PHP 5.4 a PHP 8.1. Refactor completo y modernización de código legacy.',
    tech: ['PHP 8.1', 'MySQL', 'Legacy'],
    year: '2025',
  },
]

// ─── Story template ──────────────────────────────────────────────

function ProjectStory({ project, index }: { project: typeof projects[0]; index: number }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        padding: '100px 80px',
        justifyContent: 'space-between',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div
          style={{
            display: 'flex',
            fontSize: 18,
            fontFamily: fonts.sans,
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: c.textSecondary,
            borderBottom: '3px solid #18181b',
            paddingBottom: 8,
          }}
        >
          Proyectos
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            fontFamily: fonts.sans,
            fontWeight: 500,
            letterSpacing: '0.12em',
            color: c.textMuted,
          }}
        >
          {num} / {String(projects.length).padStart(2, '0')}
        </div>
      </div>

      {/* Main content */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Type badge */}
        <div
          style={{
            display: 'flex',
            alignSelf: 'flex-start',
            fontSize: 18,
            fontFamily: fonts.sans,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: c.textSecondary,
            backgroundColor: '#f4f4f5',
            padding: '10px 28px',
            borderRadius: 4,
            marginBottom: 36,
          }}
        >
          {project.type}
        </div>

        {/* Project number */}
        <div
          style={{
            display: 'flex',
            fontSize: 120,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: '#e4e4e7',
            lineHeight: 0.85,
            marginBottom: 8,
          }}
        >
          {num}
        </div>

        {/* Project name */}
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontFamily: fonts.display,
            fontWeight: 700,
            color: c.text.light,
            lineHeight: 1.1,
          }}
        >
          {project.name}
        </div>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            width: 60,
            height: 4,
            backgroundColor: '#18181b',
            marginTop: 32,
            marginBottom: 32,
          }}
        />

        {/* Description */}
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            fontFamily: fonts.sans,
            fontWeight: 400,
            color: c.textSecondary,
            lineHeight: 1.55,
            maxWidth: 860,
          }}
        >
          {project.desc}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Tech stack */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {project.tech.map((t) => (
            <div
              key={t}
              style={{
                display: 'flex',
                fontSize: 20,
                fontFamily: fonts.sans,
                fontWeight: 500,
                color: c.text.light,
                backgroundColor: '#f4f4f5',
                padding: '12px 28px',
                borderRadius: 50,
                border: '1px solid #e4e4e7',
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Year + branding */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 20,
              fontFamily: fonts.sans,
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: c.textMuted,
            }}
          >
            Proyecto {project.year}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 32,
              fontFamily: fonts.display,
              fontWeight: 400,
              fontStyle: 'italic',
              color: c.textMuted,
            }}
          >
            subdominio.
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Generate ────────────────────────────────────────────────────
console.log('Generando stories destacadas de proyectos...\n')

for (let i = 0; i < projects.length; i++) {
  const element = <ProjectStory project={projects[i]} index={i} />
  await render(element, { ...STORY, name: `story-proyecto-${String(i + 1).padStart(2, '0')}-${projects[i].name.replace(/[^a-z0-9]/gi, '-').toLowerCase()}` }, brand)
}

console.log(`\nListo! ${projects.length} stories generadas.`)
