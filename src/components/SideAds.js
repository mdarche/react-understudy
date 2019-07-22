import React from "react"
import Box from "./Box"

const SideAds = props => {
  const { count = 2, marginBottom = 40, adHeights = [600, 250] } = props
  const sizes = [200, 250, 600]

  if (props.adHeights) {
    return adHeights.map(height => (
      <Box key={height} height={height} mb={marginBottom} />
    ))
  }

  return Array.from(Array(count), (e, i) => {
    const height = sizes[Math.floor(Math.random() * sizes.length)]

    return <Box key={i} height={height} mb={marginBottom} />
  })
}

export default SideAds
