// import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header'
// import About from './components/About/About'
// import Experience from './components/Experience/Experience'
import './App.css'
import data from './assets/portfolio_data'

function App() {
  return (
    <>
      <section className="page-top">
        <Navbar {...data.navbar} />
        <Header {...data.header} />
      </section>
      {/* <About {...data.about} /> */}
    </>
  )
}

export default App
