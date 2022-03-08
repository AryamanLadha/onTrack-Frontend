import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { AccordionDropdown, Navbar } from '../components';
import { getEligible } from '../actions/actions';

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: 'auto',
    marginTop: '8rem',
    backgroundColor: theme.color.background,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100rem',
    height: '8.5rem',
    marginTop: '20.4rem',
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
}));

function EligibleCourses({
  getEligible,
  eligibleCoursesData,
  storeMajors,
  storeCoursesTaken,
}) {
  const classes = useStyles();

  // 1. When page renders, create an object to hold display data, uses data pulled from the store (majors and coursesTaken). See mapStateToProps below.
  // 2. Then dispatch getEligible action to get the list of courses to display on this page (which will be stored in currentClasses portion of studentData object)
  useEffect(() => {
    // See API Docs for more detail about course object structure: https://docs.google.com/document/d/1K_EwdJnraRhgYYT1dDU4aiw_GFCbMcqSNi7-EAOIdJA/edit?usp=sharing
    let completed = [];
    storeCoursesTaken.map(object => {
      completed.push(...object.courses);
    });
    const studentData = {
      major: storeMajors,
      completedClasses: completed,
      currentClasses: [],
    };
    studentData && getEligible(JSON.stringify(studentData));
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <div>
        <Navbar page='eligible' />
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
