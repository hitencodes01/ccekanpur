import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import ISOBanner from './components/ISOBanner'
import Gallery from './components/Gallery'

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Navbar />
      <HeroSection mounted={mounted} />
      <ISOBanner/>
      <AboutUs/>
      <Gallery/>
      <Footer />
    </>
  )
}

export default App