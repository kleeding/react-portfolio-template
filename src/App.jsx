// import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import data from './assets/portfolio_data'

function App() {
  return (
    <>
      <section className="page-top"> {/* maybe change this to header and header in header to section */}
        <Navbar {...data.navbar} />
        <Header {...data.header} />
      </section>
      <About {...data.about} />
      <Skills {...data.skills} />
      <Projects {...data.projects} />
      <Experience {...data.experience} />
      <Contact {...data.header} />
      <Footer {...data.footer} />
    </>
  )
}

export default App
