import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <AboutUs />
      </div>
      <Footer />
    </>
  )
}
