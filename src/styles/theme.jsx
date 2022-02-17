import { createTheme } from '@mui/material/styles';

// Note: We use 1rem=10px when converting from Figma wireframes
const theme = createTheme({
  font: {
    button: 'normal 400 2.5rem/2.5rem "Work Sans"',
    searchBar: 'italic 400 2rem/2rem "Work Sans"',
    courseCard: 'normal 400 2rem/2rem "Arial"',
    miniCourseCard: 'normal 500 2rem/2rem "Work Sans"',
    title: 'normal 700 4.5rem/4.5rem "Work Sans"',
    subtitle: 'normal 400 2rem/2rem "Work Sans"',
    radioButton: 'normal 400 2rem/2rem "Work Sans" !important',
    accordionDropdown: 'normal 500 3rem/3rem "Work Sans" !important',
  },
  color: {
    button: "#C4C4C4",
    grey: "#C4C4C4 !important",
    black: "#000000",
    lightgrey: "#E7E7E7 !important",
    icongrey: "#A3A3A3",
    bargrey: "#EDEDED",
    white: "#FFFFFF",
    lightBeige: "#BAA898",
    darkBrown: "#7B6958",
    lightBlue: "#BFD7EA",
    lightYellow: "#FDFCF8",
    greyishBlue: "#A5B6BC",
  }
})

/**
 * bold: 700
 * medium: 600
 * regular: 400
 * light: 300
 */

export default theme;
