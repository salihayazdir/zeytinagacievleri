import React from 'react'
import Layout from '../components/Layout'

function Proje() {
  return (
    <Layout title='Proje Detaylari'>
      <h1 className='text-3xl text-center text-yesil font-bold px-6 py-4 border-b border-bej'>
        Proje Detayları
      </h1>
      <div className='flex flex-col gap-6'>
        <div>
          Vaziyet Planı
        </div>
        <div>
          Galeri
        </div>
        <div>
          Sosyal Alanlar
        </div>
        <div>
          Kat Planları
        </div>
      </div>
    </Layout>
  )
}

export default Proje