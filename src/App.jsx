// import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header'
import './App.css'
import data from './assets/portfolio_data'

function App() {
  return (
    <>
      <section className="page-top">
        <Navbar {...data.navbar} />
      <Header {...data.header} />
      {/* <Header name="First React Page"/>
      <Header name="cool stuff"/> */}
    </>
  )
}

export default App
