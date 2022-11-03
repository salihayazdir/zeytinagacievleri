import React from 'react'
import Header from './Header'
import Footer from './Footer'
import StickyNav from './StickyNav'
import { Provider } from "../Context"

function Layout({children}) {
  return (
    
    <Provider>
      <div className='md:px-[10vw]'>
        <Header/>
        {children}
        <Footer/>
      </div>
        {/* <StickyNav/> */}
    </Provider>
  )
}

export default Layout