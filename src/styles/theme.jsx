import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  font: {
    button: "normal 400 2.5rem/2.5rem 'Work Sans'",
    searchBar: "italic 400 2rem/2rem 'Work Sans'",
    courseCard: "normal 400 2rem/2rem 'Arial'",
    title: "normal 700 4.5rem/4.5rem 'Work Sans'",
    subtitle: "normal 400 2rem/2rem 'Work Sans'",
    radioButton: "normal 400 2rem/2rem 'Work Sans' !important",
  },
  color: {
    grey: "#C4C4C4 !important",
    black: "#000000",
    lightgrey: "#E7E7E7",
    icongrey: "#A3A3A3",
  }
})

/**
* bold: 700
* medium: 600
* regular: 400
* light: 300
*/

export default theme;