/** @jsx jsx */
import { jsx } from "@emotion/core"
const mq = `@media (max-width: 40em)`

const Box = props => {
  const { height, width, mb, background, expand = true } = props
  const mqPartial = expand
    ? {
        [mq]: {
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
