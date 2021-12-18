import React, {useEffect, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {makeStyles} from '@mui/styles';
import Typography from '@mui/material/Typography';
import {MiniCourseCard} from './index';
import TriangleDown from '../assets/icons/TriangleDown.svg';

const useStyles = (props) =>
  makeStyles((theme) => ({
    accordionDropdown: {
      width: '122.8rem',
      height: '7.2rem',
      flexDirection: 'row-reverse',
      borderColor: theme.color.white,
      boxShadow: 'none',
    },

    typography: {
      font: theme.font.accordionDropdown,
    },

    root: {
      '& .MuiButtonBase-root': {
        borderRadius: '1.5rem',
        background: theme.color.bargrey,
        boxShadow: 'none',
      },

      '& .MuiPaper-root': {
        boxShadow: 'none',
      },
    },

    miniCourseCardWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },

    miniCourseCardsBySubject: {
      display: 'flex',
      flexDirection: 'column',
      width: '117.2rem',
      margin: '2.6rem 0rem',
    },

    subject: {
      font: theme.font.accordionDropdown,
      marginBottom: '2rem',
    },

    miniCourseCardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      rowGap: '2rem',
      width: '117rem',
      height: 'auto',
    },

    emptyDiv: {
      height: props.height,
    },
  }));

const AccordionDropdown = ({quarter, subjectAndcourses}) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(0);

  const props = {
    height: height,
  };
  const classes = useStyles(props)();

  useEffect(() => {
    const numberOfSubjects = Object.keys(subjectAndcourses).length;
    let extraRows = 0;
    // any subjects that have more than 8 courses adds extraRow
    for (const subject in subjectAndcourses) {
      extraRows += Math.floor(subjectAndcourses[subject].length / 8);
    }
    // set height of emptyDiv: when accordian dropdown is expanded
    expanded
      ? setHeight(`${numberOfSubjects * 22.7 + extraRows * 14}rem`)
      : setHeight(`0rem`);
  }, [expanded]);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <Accordion
        className={classes.accordionDropdown}
        onChange={handleChange}
        TransitionProps={{timeout: 0}}
      >
        <AccordionSummary
          expandIcon={
            <img src={TriangleDown} className="triangle" alt="triangle" />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.typography}>{quarter}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.miniCourseCardWrapper}>
            {Object.entries(subjectAndcourses).map(([key, value]) => (
              <div className={classes.miniCourseCardsBySubject}>
                <div className={classes.subject}>{key}</div>
                <div className={classes.miniCourseCardContainer}>
                  {value.map((course, idx) => (
                    <MiniCourseCard key={idx} name={course} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <div className={classes.emptyDiv}></div>
    </div>
  );
};

export default AccordionDropdown;
