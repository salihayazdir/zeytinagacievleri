import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

function fourofour() {
  return (
    <Layout title='404'>
      <h1 className='mt-20 text-3xl text-center font-bold text-yesil'>
        Aradığınız Sayfa Bulunamadı.
      </h1>
      <div className='my-10 text-2xl text-center underline text-yesil'>
      <Link to='/'>
        Anasayfaya Git
      </Link>
      </div>
    </Layout>
  )
}

export default fourofour