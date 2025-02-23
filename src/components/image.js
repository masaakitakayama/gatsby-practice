import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = ({ imageClass }) => { // propsを受け取るように修正
  return (
    <StaticImage
      src="../images/gatsby-icon.png"
      alt="Gatsby Icon"
      imgClassName={`my-image ${imageClass}`}
    />
  )
}

export default Image