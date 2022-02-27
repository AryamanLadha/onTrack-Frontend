import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import CourseInfoPopdown from '../components/CourseInfoPopdown';
import { MiniCourseCard } from '.';

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

const EligibleCoursesBySubject = ({
  subject,
  courses,
  activeSubject = null,
  setActiveSubject,
}) => {
  const classes = useStyles();

  const [displayedCourse, setDisplayedCourse] = useState();

  return (
    <div className={classes.miniCourseCardsBySubject}>
      <div className={classes.subject}>{subject}</div>

      <div className={classes.miniCourseCardContainer}>
        {courses.map((course, idx) => (
          <MiniCourseCard
            key={idx}
            name={course.name}
            subject={subject}
            course={course}
            setActiveSubject={setActiveSubject}
            setDisplayedCourse={setDisplayedCourse}
            canBeDeleted={false}
            onEligibleCoursesPage={true}
          />
        ))}
      </div>

      {subject === activeSubject && (
        <CourseInfoPopdown course={displayedCourse} />
      )}
    </div>
  );
};

export default EligibleCoursesBySubject;
