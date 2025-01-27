// import { useState } from 'react'
import Header from '/components/Header'
import './App.css'
import webdata from './assets/webdata'

function App() {
  return (
    <>
      <Header {...webdata.header} />
      {/* <Header name="First React Page"/>
      <Header name="cool stuff"/> */}
    </>
  )
}

export default App
