import React from 'react'
import Navbar from '../components/Navbar'
import Homesection from '../components/Homesection'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certificates from '../components/Certificates'
import Education from '../components/Education'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>

        <Navbar />
        <Homesection />
        <About/>
        <Skills/>
        <Projects/>
        <Certificates />
        <Education />
        <Footer/>
        
    </div>
  )
}

export default Home