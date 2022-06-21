import React, { useContext } from 'react'
import { Link } from 'gatsby'
import Context from '../Context'
import { IoClose } from 'react-icons/io5'

export default function StickyNav() {
  const{navMenu, handleNavMenu} = useContext(Context)
  return (
  <nav
  className={`p-6 text-xl font-bold bg-acikbej border-t border-bej text-yesil sticky bottom-0
  ${navMenu && 'h-[85vh] '}`}>
    <ul className={`flex justify-around gap-4
    ${navMenu && 'flex-col text-center text-4xl gap-8 p-8'}`}>
      <li>
        <Link to="/evler">Evler</Link>
      </li>
      <li>
        <Link to="/proje">Proje</Link>
      </li>
      <li>
        <Link to="/iletisim">İletişim</Link>
      </li>
    </ul>
    {navMenu && <button 
    className='opacity-80 absolute top-4 right-4'
    onClick={handleNavMenu}>
      <IoClose size='30'/>
    </button>}
  </nav>
  )
}