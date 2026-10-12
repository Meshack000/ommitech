import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
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