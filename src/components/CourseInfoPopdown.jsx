import React from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import CorequisiteWarning from '../assets/icons/CorequisiteWarning.svg';
import TriangleWarning from '../assets/icons/TriangleWarning.svg';
import CourseInfoPopdownX from '../assets/icons/CourseInfoPopdownX.svg';

const useStyles = makeStyles((theme) => ({
  popDown: {
    width: '117.5rem',
    backgroundColor: theme.color.white,
    border: '0.125rem solid',
    borderColor: theme.color.darkBeige,
    borderRadius: '5.5rem',
    padding: '6.25rem 3.75rem',
    margin: '3.75rem 0',
    position: 'relative',
    filter: 'drop-shadow(0.125rem 0.625rem 0.75rem rgba(150, 135, 122, 0.4))',
  },

  closeButton: {
    position: 'absolute',
    top: '3.5rem',
    right: '3.5rem',
    height: '2.5rem',
    width: '2.5rem',
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
    backgroundColor: theme.color.white,
    padding: '0rem 2.5rem',
    border: '0.125rem solid',
    borderColor: theme.color.darkBeige,
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

  corequisitesTooltip: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '2.5rem',
  },

  corequisitesTooltipItem: {
    font: theme.font.corequisitesTooltipCourseName,
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
    backgroundColor: theme.color.bargrey,
    color: 'rgba(0, 0, 0, 1)',
    maxWidth: 'none',
    width: isCoreqTooltip ? 'none !important' : '36.875rem',
    minHeight: isCoreqTooltip ? 'none' : '5.625rem',
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

const CourseInfoPopdown = ({ course, setActiveSubject }) => {
  const classes = useStyles();

  const courseDescription = course.description.split('\n')[1];

  let courseRestrictions = course.restrictions.split('\n')[1];

  if (!courseRestrictions) {
    courseRestrictions = course.restrictions.split(' ')[1];
  }

  const handleClosePopdown = () => {
    setActiveSubject('');
  };

  return (
    <div className={classes.popDown}>
      <img
        src={CourseInfoPopdownX}
        alt="closePopdownButton"
        onClick={handleClosePopdown}
        className={classes.closeButton}
      />

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
                <div className={classes.corequisitesTooltip}>
                  {course.enforcedCorequisites.map((course, index) => (
                    <div className={classes.corequisitesTooltipItem}>
                      {course}
                    </div>
                  ))}
                </div>
              }
            >
              <div className={classes.tag}>
                <img
                  src={CorequisiteWarning}
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
