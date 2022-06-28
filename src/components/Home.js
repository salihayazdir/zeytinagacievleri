import React from 'react'
import CarouselElement from './CarouselElement'
import Logotext from '../images/Logotext'
import { Helmet } from 'react-helmet'

export default function Home() {
  
  return (
    <>
    <Helmet title={`Anasayfa - Avşa Zeytin Ağacı Evleri`}/>
      <div className='p-6 text-center flex flex-col justify-center'>
        <h1 className='text-5xl px-[25%] md:px-[40%] mb-8'>
          <Logotext/>
        </h1>
        {/* <p className='text-right'>
          Avşa Adasının en nadide<br/>
          zeytin bahçelerinde<br/>
          modern, yaşanabilir alanlar.
        </p> */}
      </div>
      <CarouselElement />
    </>
  )
}