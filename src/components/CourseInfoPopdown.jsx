import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import TriangleWarning from '../assets/icons/TriangleWarning.svg';
import TickIcon from '../assets/icons/TickIcon.svg';

const useStyles = makeStyles((theme) => ({
  popDown: {
    width: '117.5rem',
    backgroundColor: '#D4D4D4',
    borderRadius: '5.5rem',
    padding: '6.25rem 3.75rem',
    margin: '3.75rem 0',
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

  tooltipRestrictionsText: {
    font: theme.font.tooltipEnrollmentRestrictionsText,
  },

  tooltipCorequisitesGrid: {
    display: 'grid',
    gridTemplateColumns: '32.5rem 5rem',
    rowGap: '2.25rem',
  },

  corequisitesGridHeaderText: {
    font: theme.font.corequisitesGridHeaderText,
  },

  corequisitesGridCourseName: {
    font: theme.font.corequisitesGridCourseName,
    display: 'flex',
    alignItems: 'center',
  },

  corequisitesGridIconContainer: {
    display: 'flex',
    justifyContent: 'center',
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

const EnrollmentInfoTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} arrow />
))(({ theme, isCoreqTooltip = false }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#EDEDED',
    color: 'rgba(0, 0, 0, 1)',
    maxWidth: 'none',
    width: isCoreqTooltip ? '42.625rem !important' : '36.875rem',
    minHeight: isCoreqTooltip ? '15rem' : '5.625rem',
    padding: '3.75rem 2.5rem',
    marginTop: '2.5rem !important',
    borderRadius: '1.875rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.color.bargrey,
    width: '3rem',
    height: '3rem',
    overflow: 'visible',
    top: '-2.5rem !important',
  },
}));

const CourseInfoPopdown = ({ course }) => {
  const classes = useStyles();

  const courseDescription = course.description.split('\n')[1];

  let courseRestrictions = course.restrictions.split('\n')[1];

  if (!courseRestrictions) {
    courseRestrictions = course.restrictions.split(' ')[1];
  }

  useEffect(() => {
    console.log('courseRestrictions', courseRestrictions);
  }, []);

  return (
    <div className={classes.popDown}>
      <div className={classes.courseTitle}>{course.name}</div>

      {(courseRestrictions !== 'None' ||
        course.enforcedCorequisites.length !== 0) && (
        <div className={classes.courseTags}>
          {courseRestrictions !== 'None' && (
            <EnrollmentInfoTooltip
              title={
                <div className={classes.tooltipRestrictionsText}>
                  {courseRestrictions}
                </div>
              }
            >
              <div className={classes.tag}>
                <img
                  src={TriangleWarning}
                  className={classes.warningIcon}
                  alt="enrollmentWarning"
                />

                <div className={classes.tagText}>Enrollment Restrictions</div>
              </div>
            </EnrollmentInfoTooltip>
          )}

          {course.enforcedCorequisites.length !== 0 && (
            <EnrollmentInfoTooltip
              isCoreqTooltip
              title={
                <div className={classes.tooltipCorequisitesGrid}>
                  <div className={classes.corequisitesGridHeaderText}>
                    Corequisites
                  </div>

                  <div className={classes.corequisitesGridHeaderText}>
                    Taken
                  </div>

                  <div className={classes.corequisitesGridCourseName}>
                    ETHMUS M6A
                  </div>

                  <div className={classes.corequisitesGridIconContainer}>
                    <img src={TickIcon} alt="corequisiteTakenIcon" />
                  </div>
                </div>
              }
            >
              <div className={classes.tag}>
                <img
                  src={TriangleWarning}
                  className={classes.warningIcon}
                  alt="enrollmentWarning"
                />

                <div className={classes.tagText}>Corequisites</div>
              </div>
            </EnrollmentInfoTooltip>
          )}
        </div>
      )}

      <div className={classes.courseDescriptionHeader}>Course Description:</div>

      <div className={classes.courseDescriptionBody}>{courseDescription}</div>
    </div>
  );
};

export default CourseInfoPopdown;
