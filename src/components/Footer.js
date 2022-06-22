import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


export default function Footer() {
  return (
    <footer className='flex justify-center px-6 py-4 border-t border-bej'>
        <p className='text-sm'>Türkiye İş Bankası Garantörlüğü İle</p>
        <StaticImage objectFit='' className='text-center w-[60%] h-[60%]' src="../images/isbank-logo.png" alt="is-bankasi-logo"/>
    </footer>
  )
}