// import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import ISOBanner from './components/ISOBanner'
import Gallery from './components/Gallery'

function App() {


  // useEffect(() => {
  //   const t = setTimeout(() => setMounted(true), 80)
  //   return () => clearTimeout(t)
  // }, [])

  return (
    <>
      <Navbar />
      <div className='mt-10'>
        <HeroSection />
      </div>
      <ISOBanner />
      <AboutUs />
      <Gallery />
      <Footer />

    </>
  )
}

export default App