import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { AccordionDropdown, PageButton } from '../components';
import { getEligible } from '../actions/actions';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',
    marginTop: '10.4rem',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100rem',
    height: '8.5rem',
    marginTop: '5rem',
    marginBottom: '4.9rem',
  },

  title: {
    font: theme.font.title,
    color: theme.color.black,
    textAlign: 'center',
    margin: '0 0 0 0.9rem',
    fontWeight: 'bold',
  },

  subtitle: {
    textAlign: 'center',
    font: theme.font.subtitle,
    marginTop: '1rem',
  },

  pageButtonWrapper: {
    display: 'flex',
    width: '117.8rem',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '7.4rem',
  },

  courseDescriptionHeader: {
    font: theme.font.eligibleCourseDescriptionText,
    marginBottom: '0.25rem',
  },

  courseDescriptionBody: {
    font: theme.font.eligibleCourseDescriptionText,
    marginBottom: '2rem',
  },
}));

function EligibleCourses({
  getEligible,
  eligibleCoursesData,
  storeMajors,
  storeCoursesTaken,
}) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const EligibleCoursesTooltip = styled(({ className, ...props }) => (
    <Tooltip
      {...props}
      classes={{ popper: className }}
      // Remove PopperProps if doesn't break code when done
      PopperProps={{
        disablePortal: true,
      }}
      onClose={handleTooltipClose}
      open={open}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      placement="bottom"
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#D4D4D4',
      color: 'rgba(0, 0, 0, 1)',
      maxWidth: '117.5rem',
      borderRadius: '5.5rem',
      padding: '5rem 3.75rem',
    },
  }));

  // 1. When page renders, create an object to hold display data, uses data pulled from the store (majors and coursesTaken). See mapStateToProps below.
  // 2. Then dispatch getEligible action to get the list of courses to display on this page (which will be stored in currentClasses portion of studentData object)
  useEffect(() => {
    // See API Docs for more detail about course object structure: https://docs.google.com/document/d/1K_EwdJnraRhgYYT1dDU4aiw_GFCbMcqSNi7-EAOIdJA/edit?usp=sharing
    const studentData = {
      major: storeMajors,
      completedClasses: storeCoursesTaken,
      currentClasses: [],
    };
    studentData && getEligible(JSON.stringify(studentData));
  }, []);

  return (
    <>
      <div className={classes.layout}>
        <header className={classes.header}>
          <h1 className={classes.title}>Eligible Courses</h1>
          <span className={classes.subtitle}>
            All the courses you can take this year. You're welcome.
          </span>
        </header>
        <div>
          {/* Displaying grid of miniCourseCards. We parse data from the course object to do this. */}
          {eligibleCoursesData.length !== 0 ? (
            eligibleCoursesData.map((eligibleCourse, index) => (
              <AccordionDropdown
                key={index}
                quarter={eligibleCourse.quarter}
                subjectAndcourses={eligibleCourse.subjects}
              />
            ))
          ) : (
            <div className={classes.pageButtonWrapper}></div>
          )}
        </div>
        <div className={classes.pageButtonWrapper}>
          <PageButton text="Back" size="short" page="eligible" />
          <PageButton text="Next" size="short" page="eligible" />
        </div>

        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <EligibleCoursesTooltip
              title={
                <>
                  <div className={classes.courseDescriptionHeader}>
                    Course Description
                  </div>

                  <div className={classes.courseDescriptionBody}>
                    Lecture, three hours. Exploration of computer metaphor of
                    mind as an information-processing system, focusing
                    especially on perception, knowledge representation, and
                    thought based on research in cognitive psychology,
                    neuropsychology, and artificial intelligence. Many examples
                    from visual information processing.
                  </div>
                </>
              }
            >
              <div onClick={handleTooltipOpen}>Button</div>
            </EligibleCoursesTooltip>
          </div>
        </ClickAwayListener>

        <div className={classes.pageButtonWrapper}>
          <PageButton text="Back" size="short" page="eligible" />
          <PageButton text="Next" size="short" page="eligible" />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  // Get the user's major(s), courses taken, and eligible courses
  return {
    storeMajors: store.majors,
    storeCoursesTaken: store.coursesTaken,
    eligibleCoursesData: store.eligibleCourses,
  };
};

const mapDispatchToProps = (dispatch) => {
  // Dispatch eligible courses (based on studentData object) to the store
  return {
    getEligible: (studentData) => dispatch(getEligible(studentData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EligibleCourses);
