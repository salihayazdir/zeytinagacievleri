import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, } from 'gatsby-plugin-image'
import Carousel from 'better-react-carousel'

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
    <Carousel containerClassName='mb-10' cols={1} rows={1} gap={0} loop showDots hideArrow={false}>
      {carouselItems}
    </Carousel>
  )
}
