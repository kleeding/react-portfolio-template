// import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import data from './assets/portfolio_data'

function App() {
  return (
    <>
      <Header {...data.header} />
      {/* <Header name="First React Page"/>
      <Header name="cool stuff"/> */}
    </>
  )
}

export default App
