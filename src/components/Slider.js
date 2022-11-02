import React, { useState} from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, } from 'gatsby-plugin-image'

function Slider() {
    
    const [current, setCurrent] = useState(0)

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
        <GatsbyImage 
        image={edge.node.childImageSharp.gatsbyImageData}
        alt={`projegorsel${i}`}
        key={i}
        />
        )
    })

    return (
    <div>
        {carouselItems}
    </div>
  )
}

export default Slider