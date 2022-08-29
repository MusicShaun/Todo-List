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

export const fontsize = {
  mobile: '1rem',
  tablet: '1.2rem',
  desktop: '1.5rem',
  desktopL: '2rem'

}