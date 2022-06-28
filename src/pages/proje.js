import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticImage } from 'gatsby-plugin-image'
import { AnimatePresence, motion } from 'framer-motion'

function Proje() {
  return (
    <AnimatePresence>
    <Helmet title={`Proje Detayları - Avşa Zeytin Ağacı Evleri`}/>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <h1 className='text-3xl text-center text-yesil font-bold px-6 py-4 border-b border-bej'>
        Proje Detayları
      </h1>
      <div className='flex flex-col'>
        <div className='p-6 border-b border-bej'>
          <h2 className='text-xl font-bold'>Vaziyet Planı</h2>
          <hr className='mt-2'/>
          {/* <p className='mt-2 text-slate-500'>
              Size en kısa süre içinde ulaşabilmemiz için iletişim formunu doldurarak bilgilerinizi iletebilirsiniz.
          </p> */}
          <StaticImage className='' src="../images/proje/vaziyet.jpg" alt="vaziyet planı"/>
        </div>
        <div className='text-2xl p-6 border-b border-bej font-bold text-yesil text-center'>
          <h2 className='text-xl text-black text-left'>Kat Planları</h2>
          <hr className='mt-2 mb-10'/>
          <h3 className=''>İkiz Villa - Tip 1 - A</h3>
            <StaticImage className='' src="../images/katplanlari/kp-ikiz-zemin-a-sg.jpg" alt="vaziyet planı"/>
            <StaticImage className='' src="../images/katplanlari/kp-ikiz-kat1-sg.jpg" alt="vaziyet planı"/>
            <StaticImage className='' src="../images/katplanlari/kp-ikiz-cati-sg.jpg" alt="vaziyet planı"/>
            <hr className='mb-10'/>
          <h3 className=''>İkiz Villa - Tip 1 - B</h3>
            <StaticImage className='' src="../images/katplanlari/kp-ikiz-zemin-a-sl.jpg" alt="vaziyet planı"/>
            <StaticImage className='' src="../images/katplanlari/kp-ikiz-kat1-sl.jpg" alt="vaziyet planı"/>
            <StaticImage className='' src="../images/katplanlari/kp-ikiz-cati-sl.jpg" alt="vaziyet planı"/>
            <hr className='mb-10'/>
          <h3 className=''>İkiz Villa - Tip 2 - A</h3>
            <StaticImage className='' src="../images/katplanlari/kp-ikiz-zemin-b-sg.jpg" alt="vaziyet planı"/>
            <StaticImage className='' src="../images/katplanlari/kp-ikiz-kat1-sg.jpg" alt="vaziyet planı"/>
            <StaticImage className='' src="../images/katplanlari/kp-ikiz-cati-sg.jpg" alt="vaziyet planı"/>
            <hr className='mb-10'/>
          <h3 className=''>İkiz Villa - Tip 2 - B</h3>
            <StaticImage className='' src="../images/katplanlari/kp-ikiz-zemin-b-sl.jpg" alt="vaziyet planı"/>
            <StaticImage className='' src="../images/katplanlari/kp-ikiz-kat1-sl.jpg" alt="vaziyet planı"/>
            <StaticImage className='' src="../images/katplanlari/kp-ikiz-cati-sl.jpg" alt="vaziyet planı"/>
            <hr className='mb-10'/>
          <h3 className=''>Bağımsız Villa - Tip 1</h3>
            <StaticImage className='' src="../images/katplanlari/kp-tek-zemin-a.jpg" alt="vaziyet planı"/>
            <StaticImage className='' src="../images/katplanlari/kp-tek-kat1.jpg" alt="vaziyet planı"/>
            <hr className='mb-10'/>
          <h3 className=''>Bağımsız Villa - Tip 2</h3>
            <StaticImage className='' src="../images/katplanlari/kp-tek-zemin-b.jpg" alt="vaziyet planı"/>
            <StaticImage className='' src="../images/katplanlari/kp-tek-kat1.jpg" alt="vaziyet planı"/>
        </div>
        <div className='p-6'>
          <h2 className='text-xl font-bold'>Sosyal Alanlar</h2>
          <hr className='mt-2'/>
          <div className='text-lg text-yesil bg-slate-100 text-center py-4 rounded-md mt-4'>
            Basketbol Sahası
          </div>
          <div className='text-lg text-yesil bg-slate-100 text-center py-4 rounded-md mt-4'>
            Voleybol / Tenis Sahası
          </div>
          <div className='text-lg text-yesil bg-slate-100 text-center py-4 rounded-md mt-4'>
            Çocuk Oyun Parkı
          </div>
          <div className='text-lg text-yesil bg-slate-100 text-center py-4 rounded-md mt-4'>
            Ortak Açık Yüzme Havuzu
          </div>
          <div className='text-lg text-yesil bg-slate-100 text-center py-4 rounded-md mt-4'>
            Oturma Alanları
          </div>
          <div className='text-lg text-yesil bg-slate-100 text-center py-4 rounded-md mt-4'>
            Yürüyüş Yolları
          </div>
          <div className='text-lg text-yesil bg-slate-100 text-center py-4 rounded-md mt-4'>
            Açık Spor Aletleri
          </div>
        </div>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Proje