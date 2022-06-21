import React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import { Link } from 'gatsby'

function Iletisim() {
  return (
    <Layout title='İletişim'>
      <h1 className='text-3xl text-center text-yesil font-bold px-6 py-4 border-b border-bej'>
        İletişim
      </h1>
      <div className='p-6 border-b border-bej'>
        {/* <p className='text-slate-500'>Proje detayları ve satış süreçleri hakkında bilgi almak için:</p> */}
        <div className='text-xl text-yesil bg-slate-100 text-center py-4 rounded-md mt-4'>
          <Link to='mailto:bilgi@zeytinagacievleri.com'>bilgi@zeytinagacievleri.com</Link>
        </div>
        <div className='flex gap-2 flex-col text-xl text-yesil bg-slate-100 p-6 rounded-md my-4'>
          <h3 className='font-bold text-black'>Satış ve Tanıtım</h3>
          <hr/>
          <p className='text-black'>Görsel Basmacı</p>
          <Link 
          to='mailto:gorsel.basmaci@zeytinagacievleri.com'
          className=' leading-6 my-2'>
            gorsel.basmaci@<br/>zeytinagacievleri.com
          </Link>
          <Link to='tel:+905301428992'>0530 142 8992</Link>
        </div>
      </div>
      <ContactForm/>
    </Layout>
  )
}

export default Iletisim