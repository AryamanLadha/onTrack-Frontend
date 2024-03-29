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
    eligibleCourseQuarter: 'normal 500 2.5rem/2.5rem "Work Sans" !important',
    selectCourseDropdown: 'normal 500 3rem/3rem "Work Sans" !important',
    eligibleCourseOverlayHeader: 'normal 500 3.75rem/4.39rem "Work Sans"',
    eligibleCourseTagText: 'normal 400 2.25rem/2.94rem "Work Sans"',
    tooltipEnrollmentRestrictionsText: 'normal 400 2rem/2.35rem "Work Sans"',
    corequisitesTooltipCourseName: 'normal 500 2.5rem/2.94rem "Work Sans"',
    eligibleCourseDescriptionText: 'normal 400 2.25rem/2.64rem "Work Sans"',
    accordionDropdown: 'normal 500 3rem/3rem "Work Sans" !important',
    profile: 'normal 700 5rem/5rem "Work Sans"',
    courseHistory: 'normal 600 4.5rem/4.5rem "Work Sans" !important',
    progressBar: 'normal 500 2.5rem/2.5rem "Work Sans"',
    loginTitle: 'normal 500 4.5rem/4.5rem "Work Sans"',
    loginSubtitle: 'normal 700 2rem/2rem "Work Sans"',
  },

  color: {
    button: '#A5B6BC',
    hoveredButton: '#78929B',
    background: '#FDFCF8',
    grey: '#C4C4C4 !important',
    black: '#000000',
    lightgrey: '#E7E7E7 !important',
    lightBeige: '#EFE9E4 !important',
    beige: '#DBD3C9 !important',
    darkBeige: '#BAA898',
    skyblue: '#BFD7EA',
    bargrey: '#EDEDED',
    white: '#FFFFFF',
    darkBrown: '#7B6958',
    lightYellow: '#FDFCF8',
    lightGreen: '#ECF1F4',
    green: '#BBD1A8',
    olive: '#B2BCAA',
    loginBlack: '#443E3E',
  },
});

/**
 * bold: 700
 * medium: 600
 * regular: 400
 * light: 300
 */

export default theme;
