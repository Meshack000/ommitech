import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import RecentFeatures from './components/Feature'
import AboutPage from './components/About'
import CodePreviewCard from './components/CodePreviewCard'

function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white px-6 py-16 md:px-12 md:py-24">
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