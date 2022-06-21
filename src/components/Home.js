import React from 'react'
import CarouselElement from './CarouselElement'
import Layout from './Layout'
import Logotext from '../images/Logotext'

export default function Home() {
  
  return (
    <Layout title='Anasayfa'>
      <div className='p-6 text-center flex flex-col justify-center'>
        <h1 className='text-5xl px-[25%] mb-8'>
          <Logotext/>
        </h1>
        {/* <p className='text-right'>
          Avşa Adasının en nadide<br/>
          zeytin bahçelerinde<br/>
          modern, yaşanabilir alanlar.
        </p> */}
      </div>
      <CarouselElement />
    </Layout>
  )
}