import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NFTShowcase from './components/NFTShowcase'
import Trending from './components/Trending'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import './index.css' // Import global css which includes grid bg

function App() {
  return (
    <>
      <div className="bg-grid-glow"></div>
      <Navbar />
      <main>
        <Hero />
        <NFTShowcase />
        <Trending />
        <HowItWorks />
      </main>
      <Footer />
    </>
  )
}

export default App
