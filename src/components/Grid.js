import React from "react"
import Box from "./Box"

const Grid = ({
  rows = 3,
  columns = 4,
  gap = [20, 20],
  fluid = false,
  width = 200,
  height = 200,
  count,
  ...props
}) => {
  const totalBoxes = count ? count : columns * rows
  const columnPartial = fluid
    ? `repeat(auto-fill, minmax(${width}px, 1fr))`
    : `repeat( ${columns},1fr)`

  const gapPartial = Array.isArray(gap)
    ? { gridColumnGap: gap[0], gridRowGap: gap[1] }
    : { gridGap: gap }

  return (
    <div
      {...props}
      style={{
        display: "grid",
        gridTemplateColumns: columnPartial,
        ...gapPartial,
      }}
    >
      {[...Array(totalBoxes)].map((_, i) => (
        <Box key={i} height={height} width={width} mb="0" />
      ))}
    </div>
  )
}

export default Grid
