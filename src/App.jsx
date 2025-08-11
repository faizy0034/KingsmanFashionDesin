import React from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import FAQ from './components/FAQ/FAQ'
import Testimonials from './components/Testimonials/Testimonials'
import MapSection from './components/MapSection/MapSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <FAQ />
      <Testimonials />
      <MapSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default App


