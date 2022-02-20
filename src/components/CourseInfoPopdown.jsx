import React from 'react';
import { makeStyles } from '@mui/styles';
import TriangleWarning from '../assets/icons/TriangleWarning.svg';

const useStyles = makeStyles((theme) => ({
  popDown: {
    width: '117.5rem',
    backgroundColor: '#D4D4D4',
    borderRadius: '5.5rem',
    padding: '6.25rem 3.75rem',
  },

  courseTitle: {
    font: theme.font.eligibleCourseOverlayHeader,
    marginBottom: '2.5rem',
  },

  courseTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem 2.5rem',
    marginBottom: '3.25rem',
  },

  tag: {
    display: 'flex',
    alignItems: 'center',
    gap: '0rem 2rem',
    backgroundColor: theme.color.grey,
    padding: '0rem 2.5rem',
    borderRadius: '2rem',
    height: '6.25rem',
  },

  warningIcon: {
    width: '4.375rem',
    height: '4.375rem',
  },

  tagText: {
    font: theme.font.eligibleCourseTagText,
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

const CourseInfoPopdown = () => {
  const classes = useStyles();

  return (
    <div className={classes.popDown}>
      <div className={classes.courseTitle}>Name of Course</div>

      <div className={classes.courseTags}>
        <div className={classes.tag}>
          <img
            src={TriangleWarning}
            className={classes.warningIcon}
            alt="enrollmentWarning"
          />

          <div className={classes.tagText}>Enrollment Restrictions</div>
        </div>

        <div className={classes.tag}>
          <img
            src={TriangleWarning}
            className={classes.warningIcon}
            alt="enrollmentWarning"
          />

          <div className={classes.tagText}>Corequisites</div>
        </div>
      </div>

      <div className={classes.courseDescriptionHeader}>Course Description:</div>

      <div className={classes.courseDescriptionBody}>
        Lecture, three hours. Exploration of computer metaphor of mind as an
        information-processing system, focusing especially on perception,
        knowledge representation, and thought based on research in cognitive
        psychology, neuropsychology, and artificial intelligence. Many examples
        from visual information processing.
      </div>
    </div>
  );
};

export default CourseInfoPopdown;
