import React from "react"
import Box from "./Box"

const Grid = props => {
  const {
    rows = 3,
    columns = 4,
    gap = [20, 20],
    fluid = false,
    boxWidth = 200,
    boxHeight = 200,
  } = props

  const columnPartial = fluid
    ? `repeat(auto-fill, minmax(${boxWidth}px, 1fr))`
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
      {Array.from(Array(columns * rows)).map((e, i) => (
        <Box key={i} height={boxHeight} width="100%" mb="0" />
      ))}
    </div>
  )
}

export default Grid
