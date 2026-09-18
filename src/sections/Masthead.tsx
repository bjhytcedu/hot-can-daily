import CanLogo from '@/components/CanLogo'
import { newsData } from '@/data/news'

export default function Masthead() {
  return (
    <header className="border-b-4 border-double border-stone-800 bg-[#faf6ef]">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <CanLogo size={72} />
            <div>
              <div className="text-xs tracking-[0.35em] text-stone-500 mb-2 font-medium">
                HOT CAN DAILY · 每日更新
              </div>
              <h1 className="font-serif-sc text-5xl md:text-6xl font-black text-stone-900 tracking-tight leading-none">
                热点罐头
              </h1>
            </div>
          </div>
          <div className="text-right">
            <div className="font-serif-sc text-lg md:text-xl font-bold text-stone-800">
              {newsData.date}
            </div>
            <div className="text-xs text-stone-500 mt-1">
              数据更新至 {newsData.updatedAt} · 每日 10:00 准时开罐
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-[13px] text-stone-600 border-t border-stone-300 pt-3">
          <span>◆ 世界财经 TOP 50</span>
          <span>◆ 中国财经 TOP 20</span>
          <span>◆ 世界新闻热榜 TOP 50</span>
          <span>◆ 中国新闻热榜 TOP 50</span>
        </div>
      </div>
    </header>
  )
}
