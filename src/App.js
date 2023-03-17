// Import the necessary libraries and components
import React, { useEffect } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/home/About'
import Contact from './components/home/Contact'
import Hero from './components/home/Hero'
import News from './components/home/News'
import Projects from './components/home/Projects'
import Services from './components/home/Services'
import AOS from 'aos'
import "aos/dist/aos.css";

// Export the main App component
export default function App() {
  // Use the useEffect hook to initialize the AOS library when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])

  // Return a JSX element representing the main content of the app
  return (
    <div>
      {/* Include the Navbar component at the top of the app */}
      <Navbar />

      {/* Include the main content of the app */}
      <main className='container lg:px-20 px-0 py-20 mx-auto'>
        <Hero />
        <About />
        <Projects />
        <Services />
        <News />
        <Contact />
      </main>

      {/* Include the Footer component at the bottom of the app */}
      <Footer />
    </div>
  )
}
