export interface NewsItem {
  rank: number
  title: string
  summary?: string
  source?: string
  tag?: '热' | '新' | '沸'
  heat?: number // 0-100 热度指数，用于热榜
}

export interface NewsList {
  id: string
  label: string
  shortLabel: string
  region: 'world' | 'china'
  kind: 'finance' | 'hot'
  items: NewsItem[]
}

export interface MarketQuote {
  name: string
  value: string
  change: string
  up: boolean
}

export interface NewsData {
  date: string
  updatedAt: string
  quotes: MarketQuote[]
  lists: NewsList[]
}
