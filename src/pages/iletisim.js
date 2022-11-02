import React from 'react'
import { Helmet } from 'react-helmet'
import ContactForm from '../components/ContactForm'
import { Link } from 'gatsby'
import { AnimatePresence, motion } from 'framer-motion'

function Iletisim() {
  return (
    <AnimatePresence>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <Helmet title={`İletişim - Avşa Zeytin Ağacı Evleri`}/>
      <h1 className='px-6 py-4 text-3xl font-bold text-center border-b text-yesil border-bej'>
        İletişim
      </h1>
      <div className='p-6 border-b border-bej'>
        {/* <p className='text-slate-500'>Proje detayları ve satış süreçleri hakkında bilgi almak için:</p> */}
        <div className='px-6 py-4 mt-4 text-xl text-center rounded-md text-yesil bg-slate-100 md:text-left'>
          <Link to='mailto:bilgi@zeytinagacievleri.com'>bilgi@zeytinagacievleri.com</Link>
        </div>
        <div className='flex flex-col gap-2 p-6 my-4 text-xl rounded-md text-yesil bg-slate-100'>
          <h3 className='font-bold text-black'>Satış ve Tanıtım</h3>
          <hr/>
          <p className='text-black'>Ertuğrul Erşan</p>
          <Link 
          to='mailto:gorsel.basmaci@zeytinagacievleri.com'
          className='my-2 leading-6 '>
            ertugrul.ersan@<br/>zeytinagacievleri.com
          </Link>
          <Link to='tel:+905301428992'>0537 418 2737</Link>
        </div>
      </div>
      <ContactForm/>
    </motion.div>
    </AnimatePresence>
  )
}

export default Iletisim