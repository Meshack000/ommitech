import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SplashScreen from "./SplashScreen"
import Hero from './components/Hero'
import Footer from './components/Footer'
import RecentFeatures from './components/Feature'
import AboutPage from './components/About'

function Home() {
  return (
    <>
      <Hero />
      <RecentFeatures />
     
    </>
  )
}

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <Router>
      <>
        {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
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