export const size = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}

export const device = {
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
}

export const zIndexValues = {
  modal: 2000,
  dropdown: 100,
  navigation: 1000,
}

export const color = {
  primary: "#c99a05",
  primaryHover: "#0047B3",
  success: "#0B875B",
  danger: "#E13C3C",
  warning: "#F89C1C",
  secondary: "#F4F5F7",

  textBlack: "#000000",
  textWhite: "#FFFFFF",
  textLink: "#0052CC",
}

export const font = {
  robotoLight: 'font-family: "Roboto"; font-weight: 300;',
  robotoRegular: 'font-family: "Roboto"; font-weight: 400;',
  robotoBold: 'font-family: "Roboto"; font-weight: 700;',
  robotoBlack: 'font-family: "Roboto"; font-weight: 900;',
}

export const text = {
  h1: `font-size: 96px; ${font.robotoLight}`,
  h2: `font-size: 60px; ${font.robotoLight}`,
  h3: `font-size: 48px; ${font.robotoRegular}`,
  h4: `font-size: 34px; ${font.robotoRegular}`,
  h5: `font-size: 24px; ${font.robotoRegular}`,
  h6: `font-size: 20px; ${font.robotoRegular}`,
  sub1: `font-size: 16px; ${font.robotoRegular}`,
  sub2: `font-size: 14px; ${font.robotoRegular}`,
  body1: `font-size: 16px; ${font.robotoRegular}`,
}
