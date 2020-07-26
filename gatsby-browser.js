import React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
export const wrapRootElement = ({ element }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfTX-EUAAAAAGNG02AXdumKb6VXDWdxlRpnXeG2">
      {element}
    </GoogleReCaptchaProvider>
  )
}
