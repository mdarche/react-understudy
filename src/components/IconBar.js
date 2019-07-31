/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as symbols from "../assets/icons"

const IconBar = ({
  icons,
  height,
  fill = "#000",
  padding = "0 10px",
  ...props
}) => {
  return (
    <div
      {...props}
      css={{ display: "flex", svg: { height: height || 25, fill, padding } }}
    >
      {icons
        ? icons.map(name => (
            <div css={{ display: "flex" }} key={name}>
              {symbols[name]()}
            </div>
          ))
        : null}
    </div>
  )
}

export default IconBar
