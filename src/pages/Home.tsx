import Masthead from '@/sections/Masthead'
import Ticker from '@/sections/Ticker'
import RankBoard from '@/sections/RankBoard'
import Footer from '@/sections/Footer'
import '../App.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3eee4] text-stone-900 antialiased">
      <Masthead />
      <Ticker />
      <RankBoard />
      <Footer />
    </div>
  )
}
