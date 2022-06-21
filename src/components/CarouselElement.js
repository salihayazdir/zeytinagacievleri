import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Carousel from 'better-react-carousel'
import { GatsbyImage, } from 'gatsby-plugin-image'

export default function CarouselElement() {

    const data = useStaticQuery(graphql`query  {
    allFile(filter: {relativePath: {regex: "/lumion/"}}) {
        edges {
        node {
            childImageSharp {
            gatsbyImageData
            }
        }
        }
    }
    }
    `)

  const carouselItems = data.allFile.edges.map((edge, i) => {
    return (
    <Carousel.Item>
      <GatsbyImage image={edge.node.childImageSharp.gatsbyImageData} alt={`projegorsel${i}`}/>
    </Carousel.Item>
  )
  })

  return (
    <Carousel containerClassName='mb-20' cols={1} rows={2} gap={10} loop>
      {carouselItems}
    </Carousel>
  )
}
