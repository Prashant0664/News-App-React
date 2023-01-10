import React from 'react'
import {Navbar, Newscomponent , Topnav , Footer} from "./components/index.js"
import footerAPI from './data/FooterSPI.js'
const App = () => {
  return (
    <>
      <Navbar/>
      <Topnav/>
      <Newscomponent/>
      <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default App