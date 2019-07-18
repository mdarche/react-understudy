/** @jsx jsx */
import { jsx } from "@emotion/core"
import Box from "./Box"

const BlogPost = props => {
  const { image = true, imageHeight, paragraphs = 4 } = props

  function renderParagraphs() {
    return Array.from(Array(paragraphs), () => {
      const lineCount = Math.floor(Math.random() * (6 - 3 + 1) + 3)
      const width = `${Math.floor(Math.random() * (85 - 30 + 1) + 30)}%`

      return Array.from(Array(lineCount), (e, i) => {
        return (
          <Box
            key={i}
            height={30}
            width={lineCount === i + 1 ? width : "100%"}
            mb={lineCount === i + 1 ? 50 : 20}
            expand={false}
          />
        )
      })
    })
  }

  return (
    <div>
      {image ? <Box height={imageHeight} mb={60} /> : null}
      <Box height={80} width={"78%"} />
      <Box height={45} width={"40%"} mb={50} />
      {renderParagraphs()}
    </div>
  )
}

export default BlogPost
