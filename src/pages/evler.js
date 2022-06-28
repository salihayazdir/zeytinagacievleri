import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Carousel from 'better-react-carousel'
import { FaSwimmingPool } from 'react-icons/fa'


export default function Evler() {
  const [poolFilter, setPoolFilter] = useState(false)
  const [typeFilter, setTypeFilter] = useState(null)

  const clearFilters = () => {
    setPoolFilter(false)
    setTypeFilter(null)
  }
  
  const data = useStaticQuery(graphql`query  {
    allContentfulEv(sort: {fields: order, order: ASC}) {
      edges {
        node {
          id
          havuz
          tip
          no
          arsaalan
          images {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }  
`)

  const evler = data.allContentfulEv.edges.map((edge) => {
    const {no, tip, havuz, arsaalan} = edge.node

    const metrekare = () => {
      if(tip === 'i1') {
        return '106.8'
      } else if(tip === 'i2') {
        return '110.1'
      } else if(tip === 't1') {
        return '79.6'
      } else {
        return '83'
      }
    }

    const ikizTek = () => {
      if(tip.includes('i')) {
        return 'İkiz Villa'
      } else {
        return 'Bağımsız Villa'
      }
    }

    const katPlani = () => {
      if(tip.includes('1')) {
        return 'Tip 1'
      } else {
        return 'Tip 2'
      }     
    }

    return (
      (
      (((!poolFilter || havuz) )) &&
      (((typeFilter === 'ikiz' || typeFilter === null) && !tip.includes('t')) ||
      ((typeFilter === 'tek' || typeFilter === null) && !tip.includes('i')))
      ) &&
      (<div className='flex flex-col gap-2 rounded-md border border-bej p-4'>
        <div className='flex justify-between align-middle -mx-4 px-4 pb-4 border-b border-bej'>
          <h3 className='font-bold text-3xl text-yesil'>{`No: ${no}`}</h3>
          {havuz && <div className='flex gap-2 text-blue-900 bg-blue-200 px-4 py-2 leading-5 rounded-md'>
            <FaSwimmingPool size='22'/> Havuzlu
          </div>}
        </div>
        <Carousel containerClassName='-mt-2 mb-2' gap={0} hideArrow={true} loop>
          {edge.node.images && edge.node.images.map((x, i) => (
            <Carousel.Item>
              <GatsbyImage image={x.gatsbyImageData} alt={`ev-${i}`}/>
            </Carousel.Item> ))}
        </Carousel> 
        <div className='grid gap-2 grid-cols-2 text-center'>
          <div className={`py-2 col-span-2 bg-acikbej text-yesil font-bold rounded-md
            ${tip.includes('t') && 'bg-yesil text-acikbej'}`}>
            {ikizTek(tip)}
          </div>
          <div className='py-2 bg-slate-100 rounded-md'>
            {tip.includes('t') ? '2 + 1' : '3 + 1'}
          </div>
          <div className='py-2 bg-slate-100 rounded-md'>
            {`Kat Planı: ${katPlani(tip)}`}
          </div>
          <div className='py-2 bg-slate-100 rounded-md'>
            {`${metrekare(tip)} m2 (Net)`}
          </div>
          <div className='py-2 bg-slate-100 rounded-md'>
            {`${arsaalan} m2 Arsa`}
          </div>
          {/* <div className='py-2 rounded-md font-bold'>
            Kat Planları <IoArrowForward size='24' className='inline'/>
          </div> */}
        </div>
      </div>)
    )
  })

  return (
    <>
    <Helmet title={`Evler - Avşa Zeytin Ağacı Evleri`}/>
      <h1 className='text-3xl text-center text-yesil font-bold px-6 py-4 border-b border-bej'>
        Evler
      </h1>
      <div className='flex flex-col gap-4 px-6 py-4 bg-slate-100 md:rounded-b-lg'>
        <h3 className='text-xl font-bold'>Filtreler</h3>
        <div className='flex gap-4 text-center'>
          <div className={`flex-1 bg-white px-6 py-4 rounded-md cursor-pointer
          ${typeFilter === 'tek' && 'bg-acikbej text-yesil font-bold'}`}
          onClick={() => setTypeFilter('tek')}>
            Bağımsız Villa
          </div>
          <div className={` flex-1 bg-white px-6 py-4 rounded-md cursor-pointer
          ${typeFilter === 'ikiz' && 'bg-acikbej text-yesil font-bold'}`}
          onClick={() => setTypeFilter('ikiz')}>
            İkiz Villa
          </div>
        </div>
        <div 
        className={` flex justify-center gap-6 bg-white px-6 py-4 leading-8 rounded-md cursor-pointer
          ${poolFilter && 'bg-blue-200 text-blue-900 font-bold'}`}
        onClick={() => setPoolFilter((prev) => !prev)}>
          Havuzlu
        </div>
        <div className='text-center text-sm text-slate-500 cursor-pointer'
        onClick={clearFilters}>
          Temizle
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-6 mt-6'>
        {evler}
      </div>
    </>
  )
}