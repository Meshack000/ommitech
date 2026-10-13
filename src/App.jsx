import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import RecentFeatures from './components/Feature'
import AboutPage from './components/About'
import CodePreviewCard from './components/CodePreviewCard'
import { StopwatchWidget } from './components/widgets/stopwatch-widget'

function Home() {
  return (
    <>
      <Hero />
      <section className="bg-transparent px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-teal-600">Thoughtful by design</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">See the experience come to life</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Switch between the live mobile preview and the code behind it.
            </p>
          </div>
          <CodePreviewCard />
        </div>
      </section>
      <section className="bg-[#f6f7f5] px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-3xl border border-[#0a0f1e]/5 bg-white p-7 shadow-sm sm:p-10 md:grid-cols-[1fr_auto] md:gap-16 md:p-12">
          <div className="max-w-xl">
            <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600">
              A moment to focus
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Make time for what matters.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Take a quick focus break with this simple stopwatch. Start, pause, or reset whenever you need.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <StopwatchWidget />
          </div>
        </div>
      </section>
      <RecentFeatures />
     
    </>
  )
}

function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Footer />
      </>
    </Router>
  )
}

export default App