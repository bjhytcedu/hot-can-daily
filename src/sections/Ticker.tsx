import { newsData } from '@/data/news'

export default function Ticker() {
  return (
    <div className="bg-stone-900 text-stone-100">
      <div className="mx-auto max-w-6xl px-4 py-2.5 flex items-center gap-6 overflow-x-auto whitespace-nowrap text-[13px] ticker-scroll">
        <span className="text-stone-400 shrink-0 font-semibold tracking-widest">行情速览</span>
        {newsData.quotes.map((q) => (
          <span key={q.name} className="flex items-center gap-2 shrink-0">
            <span className="text-stone-300">{q.name}</span>
            <span className="font-semibold">{q.value}</span>
            <span className={q.up ? 'text-red-400 font-semibold' : 'text-green-400 font-semibold'}>
              {q.change}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
