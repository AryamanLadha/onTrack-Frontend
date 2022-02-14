import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { AccordionDropdown, PageButton } from '../components';
import { getEligible } from '../actions/actions';

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

  overlay: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlayBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.color.black,
    opacity: '0.7',
  },

  modalContainer: {
    backgroundColor: theme.color.white,
    width: '117.5rem',
    height: '84.625rem',
    position: 'absolute',
    padding: '9.75rem 8.125rem',
  },

  courseTitle: {
    font: theme.font.eligibleCourseOverlayHeader,
  },

  courseName: {
    font: theme.font.eligibleCourseOverlaySubheader,
    marginBottom: '2rem',
  },

  courseTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem 2.625rem',
    marginBottom: '3.625rem',
  },

  tag: {
    font: theme.font.eligibleCourseTagText,
    backgroundColor: theme.color.grey,
    padding: '1.625rem',
    borderRadius: '2rem',
  },

  courseDescriptionHeader: {
    font: theme.font.eligibleCourseDescriptionText,
    marginBottom: '0.25rem',
  },

  courseDescriptionBody: {
    font: theme.font.eligibleCourseDescriptionText,
    marginBottom: '2rem',
  },

  courseDetailsTable: {
    display: 'grid',
    gridTemplateColumns: '17.63rem 17rem 27.13rem 14rem auto',
    gridTemplateRows: '6.88rem 9.5rem',
    gap: '0.5rem',
    borderRadius: '3.25rem',
    overflow: 'hidden',
  },

  tableHeaderItem: {
    font: theme.font.eligibleCourseTableHeaderText,
    backgroundColor: theme.color.grey,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tableRowItem: {
    font: theme.font.eligibleCourseTableRowText,
    backgroundColor: theme.color.grey,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
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
      </div>

      <div className={classes.overlay}>
        <div className={classes.overlayBackground} />

        <div className={classes.modalContainer}>
          <h1 className={classes.courseTitle}>Name of Course</h1>

          <h2 className={classes.courseName}>Brief Description of Course</h2>

          <div className={classes.courseTags}>
            <div className={classes.tag}>Fall 2021</div>

            <div className={classes.tag}>Major requirement bla bla bla</div>

            <div className={classes.tag}>GE</div>
          </div>

          <div className={classes.courseDescriptionHeader}>
            Course Description:
          </div>

          <div className={classes.courseDescriptionBody}>
            Lecture, three hours. Exploration of computer metaphor of mind as an
            information-processing system, focusing especially on perception,
            knowledge representation, and thought based on research in cognitive
            psychology, neuropsychology, and artificial intelligence. Many
            examples from visual information processing.
          </div>

          <div className={classes.courseDetailsTable}>
            <div className={classes.tableHeaderItem}>Section</div>

            <div className={classes.tableHeaderItem}>Day(s)</div>

            <div className={classes.tableHeaderItem}>Location</div>

            <div className={classes.tableHeaderItem}>Units</div>

            <div className={classes.tableHeaderItem}>Instructor(s)</div>

            <div className={classes.tableRowItem}>Lec 1</div>

            <div className={classes.tableRowItem}>TR</div>

            <div className={classes.tableRowItem}>Location</div>

            <div className={classes.tableRowItem}>4.0</div>

            <div className={classes.tableRowItem}>
              <div>
                <div>Kelman, P.</div>

                <div>Jacoby, V.L.</div>
              </div>
            </div>
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
