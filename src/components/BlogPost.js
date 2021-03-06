import React from "react"
import Box from "./Box"
import Paragraph from "./Paragraph"

const BlogPost = ({ image = true, imageHeight = 350, paragraphs = 4 }) => {
  return (
    <div>
      {image ? <Box height={imageHeight} mb={60} /> : null}
      <Box height={image ? 80 : 100} width={"78%"} responsive />
      <Box
        height={image ? 45 : 55}
        width="40%"
        mb={image ? 50 : 70}
        responsive
      />
      {Array.from(Array(paragraphs), (e, i) => (
        <Paragraph key={i} />
      ))}
    </div>
  )
}

export default BlogPost
