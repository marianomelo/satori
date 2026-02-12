import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import fs from 'node:fs'
import path from 'node:path'
import { getBrand, FEED_VERTICAL, STORY } from '../brands/index.js'
import { renderSlide } from './templates/carousel.js'
import { renderFeed } from './templates/feed-single.js'
import { renderStory } from './templates/story.js'
import type { Post } from './types.js'
import { week1 } from './data/week1.js'
import { week2 } from './data/week2.js'
import { week3 } from './data/week3.js'
import { week4 } from './data/week4.js'

const brand = getBrand('subdominio')
const outputBase = path.resolve(import.meta.dirname, '../../output', brand.name, 'calendar')

const weeks: Record<string, Post[]> = { week1, week2, week3, week4 }

// ─── Render helper ───────────────────────────────────────────────

async function renderPng(
  element: React.ReactElement,
  width: number,
  height: number,
  outDir: string,
  name: string,
) {
  fs.mkdirSync(outDir, { recursive: true })
  const svg = await satori(element, { width, height, fonts: brand.fontFiles })
  const resvg = new Resvg(svg, {})
  const pngBuffer = resvg.render().asPng()
  fs.writeFileSync(path.join(outDir, `${name}.png`), pngBuffer)
}

// ─── Generate a single post ──────────────────────────────────────

async function generatePost(post: Post) {
  const outDir = path.join(outputBase, post.id)

  if (post.format === 'carousel' && post.slides) {
    const total = post.slides.length
    for (let i = 0; i < total; i++) {
      const el = renderSlide(post.slides[i], i, total, brand)
      const name = String(i + 1).padStart(2, '0')
      await renderPng(el, FEED_VERTICAL.width, FEED_VERTICAL.height, outDir, name)
    }
    console.log(`  [carousel] ${post.id}  (${total} slides)`)
  }

  if (post.format === 'feed' && post.feed) {
    const el = renderFeed(post.feed, brand)
    await renderPng(el, FEED_VERTICAL.width, FEED_VERTICAL.height, outDir, '01')
    console.log(`  [feed]     ${post.id}`)
  }

  if (post.format === 'story' && post.story) {
    const el = renderStory(post.story, brand)
    await renderPng(el, STORY.width, STORY.height, outDir, '01')
    console.log(`  [story]    ${post.id}`)
  }
}

// ─── CLI ─────────────────────────────────────────────────────────

const arg = process.argv[2] || 'all'

let postsToGenerate: Post[] = []

if (arg === 'all') {
  postsToGenerate = [...week1, ...week2, ...week3, ...week4]
} else if (weeks[arg]) {
  postsToGenerate = weeks[arg]
} else {
  console.error(`Uso: npx tsx src/calendar/generate.tsx [all|week1|week2|week3|week4]`)
  console.error(`  Recibido: "${arg}"`)
  process.exit(1)
}

console.log(`\nGenerando ${postsToGenerate.length} posts (${arg})...\n`)

let totalImages = 0
for (const post of postsToGenerate) {
  await generatePost(post)
  if (post.format === 'carousel' && post.slides) totalImages += post.slides.length
  else totalImages += 1
}

console.log(`\nListo! ${postsToGenerate.length} posts, ${totalImages} imagenes generadas.`)
