/** @jsx jsx */
import { jsx } from "@emotion/core"
import Box from "./Box"

const SideAds = ({ count = 2, marginBottom = 40, adHeights }) => {
  const sizes = [200, 250, 600]

  if (adHeights) {
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
