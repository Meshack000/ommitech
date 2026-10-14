import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import RecentFeatures from './components/Feature'
import AboutPage from './components/About'
import CodePreviewCard from './components/CodePreviewCard'
import ServicesPage from './components/Services'

function Home() {
  return (
    <>
      <Hero />
      <section className="bg-transparent px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-teal-700">A closer look</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">From a few lines of code to a page on your phone</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This small example shows the connection between frontend code and the screen people use.
            </p>
          </div>
          <CodePreviewCard />
        </div>
      </section>
      <RecentFeatures />
     
    </>
  )
}

function SiteMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const pagePath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
    const url = new URL(pagePath, 'https://ommiteck.com').href
    const canonical = document.querySelector('link[rel="canonical"]')
    const openGraphUrl = document.querySelector('meta[property="og:url"]')
    const twitterUrl = document.querySelector('meta[name="twitter:url"]')

    canonical?.setAttribute('href', url)
    openGraphUrl?.setAttribute('content', url)
    twitterUrl?.setAttribute('content', url)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <>
        <SiteMetadata />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Footer />
      </>
    </Router>
  )
}

export default App