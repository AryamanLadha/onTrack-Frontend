import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Navbar } from '../components';
import { getEligible, getData } from '../actions/actions';
import EligibleCoursesBySubject from '../components/EligibleCoursesBySubject';

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

  quarter: {
    font: theme.font.eligibleCourseQuarter,
    background: theme.color.white,
    borderColor: theme.color.darkBeige,
    border: 'solid 0.1rem',
    borderRadius: '1.5rem',
    padding: '1.5rem 2rem',
    margin: '2rem',
  },

  miniCourseCardWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
}));


function EligibleCourses({
  getData,
  storeUserData,
  getEligible,
  eligibleCoursesData,
}) {
  const classes = useStyles();

  const [nextQuarter, setNextQuarter] = useState('');
  const [activeSubject, setActiveSubject] = useState('');

  // 1. When page renders, create an object to hold display data, uses data pulled from the store (majors and coursesTaken). See mapStateToProps below.
  // 2. Then dispatch getEligible action to get the list of courses to display on this page (which will be stored in currentClasses portion of studentData object)

  const fetchData = async (completed) => {
    const studentData = {
      major: storeUserData.majors,
      completedClasses: completed,
      currentClasses: [],
    };

    try {
      await getEligible(JSON.stringify(studentData))
      if (eligibleCoursesData[0]) {
        setNextQuarter(eligibleCoursesData[0].quarter)
      } 
    } catch (e) {
      console.log(e);
    }
  } 

  
  useEffect(() => {
    // See API Docs for more detail about course object structure: https://docs.google.com/document/d/1K_EwdJnraRhgYYT1dDU4aiw_GFCbMcqSNi7-EAOIdJA/edit?usp=sharing
    let completed = [];
    if (storeUserData === null) {
      getData();
    } 
    storeUserData && storeUserData.coursesTaken.map((object) => completed.push(...object.courses));
    (storeUserData && completed) && fetchData(completed);
    // eslint-disable-next-line
  }, [storeUserData]);

  useEffect(() => {
    if (eligibleCoursesData.length !== 0) {
      setNextQuarter(eligibleCoursesData[0].quarter);
    }
  }, [eligibleCoursesData]);

  return (
    <div>
      <Navbar page="eligible" />

      <div className={classes.layout}>
        <header className={classes.header}>
          <h1 className={classes.title}>Eligible Courses</h1>

          {eligibleCoursesData.length !== 0 && (
            <div className={classes.quarter}>{nextQuarter}</div>
          )}
        </header>
        <div>
          {/* Displaying grid of miniCourseCards. We parse data from the course object to do this. */}
          {eligibleCoursesData.length !== 0 ? (
            eligibleCoursesData.map((eligibleCourse, idx) => (
              <div className={classes.miniCourseCardWrapper}>
                {Object.entries(eligibleCourse.subjects).map(([key, value]) => (
                  <EligibleCoursesBySubject
                    key={key}
                    subject={key}
                    courses={value}
                    activeSubject={activeSubject}
                    setActiveSubject={setActiveSubject}
                  />
                ))}
              </div>
            ))
          ) : (
            <div className={classes.miniCourseCardWrapper}></div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  // Get the user's major(s), courses taken, and eligible courses
  return {
    storeUserData: store.data,
    eligibleCoursesData: store.eligibleCourses,
  };
};

const mapDispatchToProps = (dispatch) => {
  // Dispatch eligible courses (based on studentData object) to the store
  return {
    getData: () => dispatch(getData()),
    getEligible: (studentData) => dispatch(getEligible(studentData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EligibleCourses);
