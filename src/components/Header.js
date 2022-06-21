import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Context from '../Context'

export default function Header() {
  const{handleNavMenu} = useContext(Context)

  return (
    <header className='mb-12 px-6 justify-center text-yesil border-b border-acikbej font-bold flex pt-6'>
      <Link className='flex-[2]' to="/">
        Anasayfa
      </Link>
      <Link className='flex-1 flex justify-center -mb-10' to="/">
        <StaticImage className='' src="../images/logomark.png" alt="logo" />
      </Link>
      <div
      onClick={handleNavMenu}
      className='flex-[2] flex justify-end cursor-pointer'>
        Menü
      </div>
    </header>
  )
}