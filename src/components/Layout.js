import React from 'react'
import Header from './Header'
import Footer from './Footer'
import StickyNav from './StickyNav'
import { Provider } from "../Context"


function Layout({children}) {
  return (
    
    <Provider>
        <Header/>
        {children}
        <Footer/>
        <StickyNav/>
    </Provider>
  )
}

export default Layout