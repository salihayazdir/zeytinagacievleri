import React, { useContext } from 'react'
import { Link } from 'gatsby'
import Context from '../Context'
import { IoClose } from 'react-icons/io5'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'

export default function StickyNav() {
  const{navMenu, handleNavMenu} = useContext(Context)

  const variants = {
    hidden: {
        y: "100vh",
    },
    visible: { 
        y: 0,
        transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.5 }
    },
    exit: {
        opacity: 0,
        y: "50vh",
        transition: { ease: 'easeInOut', duration: 0.3 }
    }
    }


    return (
    <AnimateSharedLayout>
    <motion.nav layout
    initial={{y:50}} animate={{y:0, transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.5 }}} 
    // variants={variants}
    //     initial="hidden"
    //     animate="visible"
    //     exit="exit"
    // key={navMenu}
    className={`p-6 md:px-[15vw] text-xl font-bold bg-acikbej border-t border-b border-bej text-yesil sticky bottom-0
    ${navMenu && 'h-[85vh] '}`}>
      <motion.ul className={`grid grid-cols-3 gap-4 
      ${navMenu && ' grid-cols-none text-center text-4xl gap-8 p-8'}`}>
        <motion.li layout className='text-center'>
          <Link to="/evler">Evler</Link>
        </motion.li>
        <motion.li layout className='text-center'>
          <Link to="/proje">Proje</Link>
        </motion.li>
        <motion.li layout className='text-center'>
          <Link to="/iletisim">İletişim</Link>
        </motion.li>
      </motion.ul>
      {navMenu && <motion.button layout
      className='opacity-80 absolute top-4 right-4'
      onClick={handleNavMenu}>
        <IoClose size='30'/>
      </motion.button>}
    </motion.nav>
    </AnimateSharedLayout>
    )
  }