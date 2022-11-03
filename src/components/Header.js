import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Context from '../Context'
import { motion } from 'framer-motion'

export default function Header() {
  const{handleNavMenu} = useContext(Context)

  return (
    <header className='flex px-6 pt-6 mb-12 font-bold align-bottom border-b text-yesil border-acikbej'>
      <motion.div
      initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{ delay: 0.5, ease: [0.6, 0.01, -0.05, 0.95], duration: 0.5 }}
      className='flex-[2] md:flex-[6]'>
        <Link to="/">
          {/* Anasayfa */}
          </Link>
      </motion.div>
      <motion.div
      initial={{opacity: 0, y:-50 }} animate={{opacity: 1, y: 0}} transition={{ duration: 0.5 }}
      className='flex justify-center flex-1 -mb-10'>
        <Link to="/">
          <StaticImage className='' src="../images/logomark.png" alt="logo" />
        </Link>
      </motion.div>
      <motion.div
      initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{ delay: 0.5, ease: [0.6, 0.01, -0.05, 0.95], duration: 0.3 }}
      onClick={() => handleNavMenu(true)}
      className='flex-[2] md:flex-[6] flex justify-end cursor-pointer'>
        {/* Menü */}
      </motion.div>
    </header>
  )
}