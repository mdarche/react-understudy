import React from "react"
import Box from "./Box"

const Paragraph = () => {
  const lineCount = Math.floor(Math.random() * (6 - 3 + 1) + 3)
  const width = `${Math.floor(Math.random() * (75 - 30 + 1) + 30)}%`

  return Array.from(Array(lineCount), (e, i) => {
    return (
      <Box
        key={i}
        height={30}
        width={lineCount === i + 1 ? width : "100%"}
        mb={lineCount === i + 1 ? 50 : 20}
      />
    )
  })
}

export default Paragraph
