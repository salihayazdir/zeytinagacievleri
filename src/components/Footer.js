import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


function Footer() {
  return (
    <footer className='flex justify-center p-6 border-t border-bej'>
        <p>Türkiye İş Bankası Garantörlüğü İle</p>
        <StaticImage className='text-center w-[60%]' src="../images/isbank-logo.png" alt="is-bankasi-logo"/>
    </footer>
  )
}

export default Footer