import React from 'react';
import { makeStyles } from '@mui/styles';
import CourseInfoPopdown from '../components/CourseInfoPopdown';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
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

  card: {
    backgroundColor: theme.color.skyblue,
    width: '12rem',
    height: '12rem',
    borderRadius: '2rem',
    textAlign: 'center',
    lineHeight: '12rem',
    font: theme.font.miniCourseCard,
  },

  cardText: {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: '2.346rem',
  },
}));

const EligibleCoursesBySubject = ({
  subject,
  courses,
  activeSubject = null,
  setActiveSubject,
}) => {
  const classes = useStyles();

  const handleShowCourseInfo = (subject) => {
    setActiveSubject(subject);
  };

  return (
    <div className={classes.miniCourseCardsBySubject}>
      <div className={classes.subject}>{subject}</div>

      <div className={classes.miniCourseCardContainer}>
        {courses.map((course, idx) => (
          <div
            key={idx}
            className={classes.card}
            onClick={() => handleShowCourseInfo(subject)}
          >
            <span className={classes.cardText}> {course.name} </span>
          </div>
        ))}
      </div>

      {subject === activeSubject && <CourseInfoPopdown />}
    </div>
  );
};

export default EligibleCoursesBySubject;
