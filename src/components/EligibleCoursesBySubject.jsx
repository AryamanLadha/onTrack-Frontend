import React from 'react';
import { makeStyles } from '@mui/styles';
import { MiniCourseCard } from '../components';
import CourseInfoPopdown from '../components/CourseInfoPopdown';

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
}));

const EligibleCoursesBySubject = ({ key, subject, courses }) => {
  const classes = useStyles();

  return (
    <div key={key} className={classes.miniCourseCardsBySubject}>
      <div className={classes.subject}>{subject}</div>

      <div className={classes.miniCourseCardContainer}>
        {courses.map((course, idx) => (
          <MiniCourseCard key={idx} name={course.name} />
        ))}
      </div>

      {/* <CourseInfoPopdown /> */}
    </div>
  );
};

export default EligibleCoursesBySubject;
