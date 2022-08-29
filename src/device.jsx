const size = {
  mobile: '500px',
  tablet: '501px',
  desktop: '1200px',
  desktopL: '1800px'
}

export const device = {
  mobile: `@media screen and (max-width: ${size.mobile})`,
  tablet: `@media screen and (min-width: ${size.tablet})`,
  desktop: `@media screen and (min-width: ${size.desktop})`,
  desktopL: `@media screen and (min-width: ${size.desktopL})`,
}