import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import About from '../About/About'
import Projects from '../Projects/Project'
import Contact from '../Contact/Contact'
import Herosection from '../../components/Herosection/Herosection'
import Services from '../Services/Services'
import Skills from '../Skills/Skills'

const Home = () => {
  return (
    <div>
        <Herosection />
        <About />
        <Projects />
        <Services />
        <Contact />
        
    </div>
  )
}

export default Home