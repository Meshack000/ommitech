import { useEffect, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import RecentFeatures from './components/Feature'
import AboutPage from './components/About'
import CodePreviewCard from './components/CodePreviewCard'
import ServicesPage from './components/Services'
import ReserveSpotPage from './components/ReserveSpot'

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

function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function SiteMetadata() {
  const { pathname } = useLocation()

  const routeMeta = {
    '/': {
      title: 'Ommitech | IT Company in Ghana, UI/UX & Website Design in Kumasi',
      description:
        'Ommitech is a trusted IT company in Ghana and UI/UX company in Kumasi offering frontend development, website design, Photoshop design, and practical tech training.',
      keywords:
        'IT company in Ghana, IT companies in Ghana, UI UX company in Ghana, UI UX companies in Ghana, website design company in Kumasi, frontend development Ghana, website development Kumasi, Photoshop design Ghana, web design Ghana, web developer Ghana, UI UX design Kumasi, Ommitech',
    },
    '/services': {
      title: 'Web Design, Frontend Development & Photoshop Design Services in Ghana',
      description:
        'Ommitech delivers website design, frontend development, UI/UX design, Photoshop design, and digital training services for businesses in Ghana and Kumasi.',
      keywords:
        'website design Ghana, frontend development Ghana, web developer Kumasi, UI UX design Ghana, Photoshop design Ghana, graphic design Kumasi, digital agency Ghana, website company in Kumasi',
    },
    '/about': {
      title: 'About Ommitech | IT Company, UI/UX Studio & Training Team in Kumasi, Ghana',
      description:
        'Learn about Ommitech, a growing IT company and UI/UX studio in Kumasi, Ghana that builds websites, digital products, and practical tech training.',
      keywords:
        'about Ommitech, IT company Kumasi, UI UX company Kumasi, Ghana digital studio, web design company Ghana, Kumasi technology company',
    },
    '/reserve-spot': {
      title: 'Reserve a Spot in an Online Class | Ommitech',
      description:
        'Request a spot in an Ommitech live online web development or UI/UX class. Ask for upcoming class times and joining details.',
      keywords: 'online web development class Ghana, online UI UX class Ghana, Ommitech training, reserve class spot',
    },
  }

  useEffect(() => {
    const pagePath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
    const url = new URL(pagePath, 'https://ommitech.co').href
    const meta = routeMeta[pagePath] || routeMeta['/']

    document.title = meta.title

    const description = document.querySelector('meta[name="description"]')
    const keywords = document.querySelector('meta[name="keywords"]')
    const canonical = document.querySelector('link[rel="canonical"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    const twitterUrl = document.querySelector('meta[name="twitter:url"]')

    description?.setAttribute('content', meta.description)
    keywords?.setAttribute('content', meta.keywords)
    canonical?.setAttribute('href', url)
    ogTitle?.setAttribute('content', meta.title)
    ogDescription?.setAttribute('content', meta.description)
    ogUrl?.setAttribute('content', url)
    twitterTitle?.setAttribute('content', meta.title)
    twitterDescription?.setAttribute('content', meta.description)
    twitterUrl?.setAttribute('content', url)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <>
        <ScrollToTop />
        <SiteMetadata />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reserve-spot" element={<ReserveSpotPage />} />
        </Routes>

        <Footer />
      </>
    </Router>
  )
}

export default App