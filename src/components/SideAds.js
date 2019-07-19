/** @jsx jsx */
import { jsx } from "@emotion/core"
import Box from "./Box"

const SideAds = props => {
  const { count = 3, marginBottom = 40 } = props
  const sizes = [200, 250, 600]

  return Array.from(Array(count), (e, i) => {
    const height = sizes[Math.floor(Math.random() * sizes.length)]

    return <Box key={i} height={height} mb={marginBottom} />
  })
}

export default SideAds
