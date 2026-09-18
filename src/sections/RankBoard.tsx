import { useState } from 'react'
import { newsData } from '@/data/news'
import type { NewsItem, NewsList } from '@/types/news'

function RankNumber({ rank, region }: { rank: number; region: 'world' | 'china' }) {
  const top = rank <= 3
  const color = region === 'china' ? 'text-[#b03a2e]' : 'text-[#1f4e79]'
  return (
    <div
      className={`font-serif-sc shrink-0 w-12 text-center leading-none font-black ${
        top ? `text-4xl ${color}` : 'text-2xl text-stone-400'
      }`}
    >
      {rank}
    </div>
  )
}

function Tag({ tag }: { tag: NonNullable<NewsItem['tag']> }) {
  const style =
    tag === '沸'
      ? 'bg-[#b03a2e] text-white'
      : tag === '热'
        ? 'bg-orange-500 text-white'
        : 'bg-sky-600 text-white'
  return (
    <span className={`inline-block rounded-sm px-1.5 py-0.5 text-[11px] font-bold leading-none ${style}`}>
      {tag}
    </span>
  )
}

function HeatBar({ heat, region }: { heat: number; region: 'world' | 'china' }) {
  const bar = region === 'china' ? 'bg-[#b03a2e]' : 'bg-[#1f4e79]'
  return (
    <div className="flex items-center gap-2 mt-1.5">
      <div className="h-1.5 w-28 rounded-full bg-stone-200 overflow-hidden">
        <div className={`h-full rounded-full ${bar}`} style={{ width: `${heat}%` }} />
      </div>
      <span className="text-[11px] text-stone-400">热度 {heat}</span>
    </div>
  )
}

function ItemRow({ item, region, kind }: { item: NewsItem; region: 'world' | 'china'; kind: 'finance' | 'hot' }) {
  return (
    <li className="flex gap-4 py-4 border-b border-stone-200 last:border-b-0 hover:bg-stone-50/80 transition-colors px-2 -mx-2 rounded">
      <RankNumber rank={item.rank} region={region} />
      <div className="min-w-0 flex-1">
        <div className="flex items-start gap-2 flex-wrap">
          <h3 className="font-serif-sc text-[17px] font-bold text-stone-900 leading-snug">
            {item.title}
          </h3>
          {item.tag && <Tag tag={item.tag} />}
        </div>
        {item.summary && (
          <p className="mt-1 text-[13px] text-stone-600 leading-relaxed">{item.summary}</p>
        )}
        <div className="flex items-center gap-3 mt-1.5 flex-wrap">
          {item.source && (
            <span className="text-[11px] text-stone-400">来源：{item.source}</span>
          )}
          {kind === 'hot' && typeof item.heat === 'number' && (
            <HeatBar heat={item.heat} region={region} />
          )}
        </div>
      </div>
    </li>
  )
}

function Board({ list }: { list: NewsList }) {
  return (
    <ol className="divide-stone-200">
      {list.items.map((item) => (
        <ItemRow key={item.rank} item={item} region={list.region} kind={list.kind} />
      ))}
    </ol>
  )
}

export default function RankBoard() {
  const [active, setActive] = useState(newsData.lists[0].id)
  const current = newsData.lists.find((l) => l.id === active)!

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-wrap gap-2 mb-6">
        {newsData.lists.map((l) => {
          const isActive = l.id === active
          const accent =
            l.region === 'china'
              ? isActive
                ? 'bg-[#b03a2e] text-white border-[#b03a2e]'
                : 'border-stone-300 text-stone-700 hover:border-[#b03a2e] hover:text-[#b03a2e]'
              : isActive
                ? 'bg-[#1f4e79] text-white border-[#1f4e79]'
                : 'border-stone-300 text-stone-700 hover:border-[#1f4e79] hover:text-[#1f4e79]'
          return (
            <button
              key={l.id}
              onClick={() => setActive(l.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${accent}`}
            >
              {l.label}
            </button>
          )
        })}
      </div>

      <div className="bg-white border border-stone-200 shadow-sm">
        <div
          className={`px-5 py-3 border-b-2 flex items-baseline justify-between flex-wrap gap-2 ${
            current.region === 'china' ? 'border-[#b03a2e]' : 'border-[#1f4e79]'
          }`}
        >
          <h2 className="font-serif-sc text-2xl font-black text-stone-900">{current.label}</h2>
          <span className="text-xs text-stone-400">
            {current.kind === 'finance' ? '按当日影响力排序' : '按全网热度排序'} · {newsData.updatedAt} 更新
          </span>
        </div>
        <div className="px-5 py-2">
          <Board list={current} />
        </div>
      </div>
    </section>
  )
}
