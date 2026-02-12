// ─── Slide themes ────────────────────────────────────────────────
export type SlideTheme = 'dark' | 'light' | 'gray'

// ─── Carousel slide types ────────────────────────────────────────
export interface CoverSlide {
  type: 'cover'
  theme?: SlideTheme
  category: string
  subtitle: string
  title: string
  desc: string
}

export interface TextSlide {
  type: 'text'
  theme?: SlideTheme
  tag: string
  title: string
  body?: string
  items?: { label: string; desc: string }[]
}

export interface ListSlide {
  type: 'list'
  theme?: SlideTheme
  tag: string
  title: string
  items: { title: string; desc: string }[]
}

export interface CardsSlide {
  type: 'cards'
  theme?: SlideTheme
  tag: string
  title: string
  cards: { title: string; desc: string; badge?: string }[]
}

export interface TableSlide {
  type: 'table'
  theme?: SlideTheme
  tag: string
  title: string
  headers: string[]
  rows: string[][]
}

export interface StepsSlide {
  type: 'steps'
  theme?: SlideTheme
  tag: string
  title: string
  steps: { title: string; desc: string }[]
  startNum?: number
  footnote?: string
}

export interface StatsSlide {
  type: 'stats'
  theme?: SlideTheme
  tag: string
  title: string
  stats: { value: string; label: string; desc?: string }[]
}

export interface BigStatSlide {
  type: 'bigstat'
  theme?: SlideTheme
  tag: string
  number: string
  title: string
  desc: string
  stat: string
}

export interface CtaSlide {
  type: 'cta'
  topLabel: string
  headline: string
  desc: string
  ctaText: string
}

export type SlideData =
  | CoverSlide
  | TextSlide
  | ListSlide
  | CardsSlide
  | TableSlide
  | StepsSlide
  | StatsSlide
  | BigStatSlide
  | CtaSlide

// ─── Feed single variants ────────────────────────────────────────
export type FeedTip = { variant: 'tip'; title: string; body: string; items?: string[] }
export type FeedQuote = { variant: 'quote'; text: string; subtitle?: string }
export type FeedStat = { variant: 'stat'; value: string; label: string; context?: string }
export type FeedProject = { variant: 'project'; name: string; type: string; desc: string; stack: string[] }
export type FeedData = FeedTip | FeedQuote | FeedStat | FeedProject

// ─── Story variants ──────────────────────────────────────────────
export type StoryBts = { variant: 'bts'; title: string; subtitle?: string; items: string[] }
export type StoryCase = { variant: 'case'; title: string; stat: string; statLabel?: string; desc: string }
export type StoryTech = { variant: 'tech'; title: string; items: string[] }
export type StoryData = StoryBts | StoryCase | StoryTech

// ─── Post ────────────────────────────────────────────────────────
export interface Post {
  id: string
  pilar: string
  format: 'carousel' | 'feed' | 'story'
  slides?: SlideData[]
  feed?: FeedData
  story?: StoryData
}
