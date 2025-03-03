import React from 'react'

import About from '../About/About'
import Contact from '../Contact/Contact'
import Herosection from '../../components/Herosection/Herosection'
import Services from '../Services/Services'
import Project from '../Projects/Project'

const Home = () => {
  return (
    <div>
        <Herosection />
        <About />
        <Project />
        <Services />
        <Contact />
        
    </div>
  )
}

export default Home