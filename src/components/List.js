/** @jsx jsx */
import { jsx } from "@emotion/core"
import Box from "./Box"

const List = props => {
  const {
    border = true,
    borderColor = "gainsboro",
    padding,
    margin,
    count = 10,
  } = props
  return (
    <ul
      css={{
        margin: margin || 0,
        padding: 0,
        listStyleType: "none",
      }}
    >
      {Array.from(Array(count), (e, i) => (
        <li
          key={i}
          css={{
            borderBottom: border ? `1px solid ${borderColor}` : false,
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
