import { Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

function fourofour() {
  return (
    <>
    <Helmet title={`Sayfa Bulunamadı - Avşa Zeytin Ağacı Evleri`}/>
      <h1 className='mt-20 text-3xl text-center font-bold text-yesil'>
        Aradığınız Sayfa Bulunamadı.
      </h1>
      <div className='my-10 text-2xl text-center underline text-yesil'>
      <Link to='/'>
        Anasayfaya Git
      </Link>
      </div>
    </>
  )
}

export default fourofour