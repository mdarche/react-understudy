import React from "react"
import Box from "./Box"

const SideAds = props => {
  const { count = 2, marginBottom = 40 } = props
  const sizes = [200, 250, 600]

  return Array.from(Array(count), (e, i) => {
    const height = sizes[Math.floor(Math.random() * sizes.length)]

    return <Box key={i} height={height} mb={marginBottom} />
  })
}

export default SideAds
