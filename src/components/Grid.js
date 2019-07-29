/** @jsx jsx */
import { jsx } from "@emotion/core"
import Box from "./Box"

const Grid = props => {
  const {
    rows = 3,
    columns = 4,
    gap = [20, 20],
    fluid = false,
    width = 200,
    height = 200,
    count,
  } = props

  const columnPartial = fluid
    ? `repeat(auto-fill, minmax(${width}px, 1fr))`
    : `repeat( ${columns},1fr)`

  const gapPartial = Array.isArray(gap)
    ? { gridColumnGap: gap[0], gridRowGap: gap[1] }
    : { gridGap: gap }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: columnPartial,
        ...gapPartial,
      }}
    >
      {Array.from(Array(count ? count : columns * rows)).map((e, i) => (
        <Box key={i} height={height} width={width} mb="0" />
      ))}
    </div>
  )
}

export default Grid
