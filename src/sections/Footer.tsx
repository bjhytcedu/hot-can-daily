import { newsData } from '@/data/news'

export default function Footer() {
  return (
    <footer className="border-t border-stone-300 bg-[#faf6ef] mt-4">
      <div className="mx-auto max-w-6xl px-4 py-8 text-[13px] text-stone-500 leading-relaxed">
        <p className="font-serif-sc font-bold text-stone-700 text-base mb-2">关于本站</p>
        <p>
          热点罐头每日汇总世界财经新闻榜 TOP 50、中国财经资讯 TOP 20、世界与中国新闻热榜 TOP 50，
          每日 10:00 准时更新。
          本期数据更新至 {newsData.updatedAt}，内容整理自当日公开新闻源，包括财联社、证券时报、
          新浪财经、东方财富、百度热搜、微博热搜、知乎热榜、Reuters、AP、NPR、ABC News、
          Yahoo Finance、Bloomberg 等。
        </p>
        <p className="mt-2">
          榜单排序综合当日影响力与全网热度，仅供资讯参考，不构成任何投资建议。
        </p>
        <p className="mt-4 text-stone-400">© 2026 热点罐头 Hot Can Daily · 每日更新</p>
      </div>
    </footer>
  )
}
