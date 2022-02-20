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
    eligibleCourseOverlayHeader: 'normal 500 3.75rem/4.39rem "Work Sans"',
    eligibleCourseOverlaySubheader: 'normal 500 4.40rem/3.75rem "Work Sans"',
    eligibleCourseTagText: 'normal 400 2.25rem/2.94rem "Work Sans"',
    eligibleCourseDescriptionText: 'normal 400 2.25rem/2.64rem "Work Sans"',
    eligibleCourseTableHeaderText: 'normal 500 2.5rem/2.93rem "Work Sans"',
    eligibleCourseTableRowText: 'normal 400 2.5rem/2.93rem "Work Sans"',
  },
  color: {
    button: '#C4C4C4',
    grey: '#C4C4C4 !important',
    black: '#000000',
    lightgrey: '#E7E7E7 !important',
    icongrey: '#A3A3A3',
    bargrey: '#EDEDED',
    white: '#FFFFFF',
  },
});

/**
 * bold: 700
 * medium: 600
 * regular: 400
 * light: 300
 */

export default theme;
