import React from "react"
import Box from "./Box"

const List = props => {
  const { border = true, padding, margin, count = 10 } = props
  return (
    <ul
      style={{
        margin: margin || 0,
        padding: 0,
        listStyleType: "none",
      }}
    >
      {Array.from(Array(count), (e, i) => (
        <li
          key={i}
          style={{
            borderBottom: border ? "1px solid gainsboro" : false,
            padding,
          }}
        >
          <Box height={30} width="30%" />
          <Box height={15} />
        </li>
      ))}
    </ul>
  )
}

export default List
