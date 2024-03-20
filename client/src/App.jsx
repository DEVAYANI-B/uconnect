import { useState } from 'react'

import './App.css'

// import "bootstrap copy.css";
import "font-awesome.min.css"
import "responsive.css"
import "style.css"
import "style.css.map"
import "style.scss"

import About from "./About.jsx";

import Index from "./Index.jsx"
import Team from "./Team.jsx"
import Service from './Service.jsx'
import Why from './Why.jsx'

const App=()=> {
  

  return (
    <>
      <Index />
      <About />
      <Service />
      <Why />
      <Team />
    </>
  )
}

export default App

