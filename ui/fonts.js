import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Ubuntu';
      }
    `}
  />
)

export default Fonts
