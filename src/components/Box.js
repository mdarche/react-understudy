import React from "react"
const mq = `@media (maxWidth: 40em)`

const Box = props => {
  const { height, width, mb, background, responsive = false } = props
  const mqPartial = responsive
    ? {
        [mq]: {
          width: "100%",
        },
      }
    : null

  return (
    <div
      style={{
        background: background || "gainsboro",
        width: width || "100%",
        height: height || 200,
        borderRadius: 3,
        marginBottom: mb || 20,
        ...mqPartial,
      }}
    />
  )
}

export default Box
