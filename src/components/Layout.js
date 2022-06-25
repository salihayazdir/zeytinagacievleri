import React from 'react'
import Header from './Header'
import Footer from './Footer'
import StickyNav from './StickyNav'
import { Provider } from "../Context"
import { Helmet } from 'react-helmet'


function Layout({children, title}) {
  return (
    
    <Provider>
      <Helmet title={`${title} - Avşa Zeytin Ağacı Evleri`}/>
      <div className='md:px-[15vw]'>
        <Header/>
        {children}
        <Footer/>
      </div>
        <StickyNav/>
    </Provider>
  )
}

export default Layout