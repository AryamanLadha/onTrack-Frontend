import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { MiniCourseCard, PageButton } from '../components';
import { getEligible } from '../actions/actions';
import CourseInfoPopdown from '../components/CourseInfoPopdown';

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: '120vh',
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

  quarter: {
    font: theme.font.eligibleCourseQuarter,
    background: theme.color.white,
    borderColor: theme.color.darkBeige,
    border: "solid 0.1rem",
    borderRadius: "1.5rem",
    padding: "1.5rem 2rem",
    margin: "2rem",
  },

  pageButtonWrapper: {
    display: 'flex',
    width: '117.8rem',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '7.4rem',
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
    font: theme.font.selectCourseDropdown,
    marginBottom: '2rem',
  },

  miniCourseCardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    rowGap: '2rem',
    width: '117rem',
    height: 'auto',
  },
}));

function EligibleCourses({
  getEligible,
  eligibleCoursesData,
  storeMajors,
  storeCoursesTaken,

}) {
  const classes = useStyles();
  const [ nextQuarter, setNextQuarter ] = useState("");
  // 1. When page renders, create an object to hold display data, uses data pulled from the store (majors and coursesTaken). See mapStateToProps below.
  // 2. Then dispatch getEligible action to get the list of courses to display on this page (which will be stored in currentClasses portion of studentData object)
  useEffect(() => {
    // See API Docs for more detail about course object structure: https://docs.google.com/document/d/1K_EwdJnraRhgYYT1dDU4aiw_GFCbMcqSNi7-EAOIdJA/edit?usp=sharing
    let completed = [];
    storeCoursesTaken.map(object => (
      completed.push(...object.courses)
    ));
    const studentData = {
      major: storeMajors,
      completedClasses: completed,
      currentClasses: [],
    };
    studentData && getEligible(JSON.stringify(studentData));
    eligibleCoursesData !== undefined && setNextQuarter(eligibleCoursesData[0].quarter)

    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <div className={classes.layout}>
        <header className={classes.header}>
          <h1 className={classes.title}>Eligible Courses</h1>
          <div className={classes.quarter}>{nextQuarter}</div>
        </header>
        <div>
          {/* Displaying grid of miniCourseCards. We parse data from the course object to do this. */}
          {eligibleCoursesData.length !== 0 
          ? (
            eligibleCoursesData.map((eligibleCourse, idx) => (
              <div className={classes.miniCourseCardWrapper}>
                {Object.entries(eligibleCourse.subjects).map(([key, value]) => (
                  <div key={idx} className={classes.miniCourseCardsBySubject}>
                    <div className={classes.subject}>{key}</div>
                    <div className={classes.miniCourseCardContainer}>
                      {value.map((course, idx) => (
                        <MiniCourseCard key={idx} name={course.name} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className={classes.miniCourseCardWrapper}></div>
          )}
        </div>
        <div className={classes.pageButtonWrapper}>
          <PageButton text="Back" size="short" page="eligible" />
          <PageButton text="Next" size="short" page="eligible" />
        </div>
        <CourseInfoPopdown />
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
