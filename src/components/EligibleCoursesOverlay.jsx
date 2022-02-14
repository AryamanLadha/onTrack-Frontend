import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
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

const EligibleCoursesOverlay = () => {
  const classes = useStyles();

  return (
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
  );
};

export default EligibleCoursesOverlay;
