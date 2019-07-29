/** @jsx jsx */
import { jsx } from "@emotion/core"

const Box = ({ height, width, mb, background, responsive, ...props }) => {
  const mqPartial = responsive
    ? {
        ["@media (maxWidth: 40em)"]: {
          width: "100%",
        },
      }
    : null

  return (
    <div
      css={{
        background: background || "gainsboro",
        width: width || "100%",
        height: height || 200,
        borderRadius: 3,
        marginBottom: mb || 20,
        ...mqPartial,
      }}
      {...props}
    />
  )
}

export default Box
