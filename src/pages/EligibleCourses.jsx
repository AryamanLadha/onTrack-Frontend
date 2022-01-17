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
}));

// mockdata for visuals for now!
let mockData = [
  {
    quarter: 'Fall 2021',
    subjects: {
      Communications: ['COMM 1', 'COMM 10', 'COMM 89', 'COMM 101'],
      'Psychological Science': [
        'PHYSCI 5',
        'PHYSCI 107',
        'PHYSCI 111L',
        'PHYSCI 140',
        'PHYSCI 5',
        'PHYSCI 107',
        'PHYSCI 111L',
        'PHYSCI 140',
        'PHYSCI 5',
        'PHYSCI 107',
        'PHYSCI 111L',
        'PHYSCI 140',
      ],
      'Life Sciences': [
        'PHYSCI 5',
        'PHYSCI 99',
        'PHYSCI M106',
        'PHYSCI 108',
        'PHYSCI 111B',
        'PHYSCI 111L',
        'PHYSCI 121',
      ],
    },
  },
  {
    quarter: 'Winter 2022',
    subjects: {
      Communications: ['COMM 1', 'COMM 10', 'COMM 89', 'COMM 101'],
      'Psychological Science': [
        'PHYSCI 5',
        'PHYSCI 13',
        'PHYSCI 111A',
        'PHYSCI 121L',
        'PHYSCI C126',
        'PHYSCI C127',
        'PHYSCI C130',
      ],
    },
  },
  {
    quarter: 'Spring 2022',
    subjects: {
      Communications: [
        'COMM 1',
        'COMM 10',
        'COMM 89',
        'COMM 101',
        'COMM 1',
        'COMM 10',
        'COMM 89',
      ],
      'Psychological Science': [
        'PHYSCI 5',
        'PHYSCI 99',
        'PHYSCI M106',
        'PHYSCI 108',
        'PHYSCI 111B',
        'PHYSCI 111L',
        'PHYSCI 121',
        'PHYSCI 121',
      ],
    },
  },
];

function EligibleCourses({
  getEligible,
  eligibleCoursesData,
  storeMajors,
  storeCoursesTaken,
}) {
  const classes = useStyles();

  // 1. When page renders, create an object to hold display data, uses data pulled from the store (majors and courses taken)
  // 2. Then dispatch getEligible action to get the list of courses to display on this page (which will be stored in currentClasses portion of studentData object)
  useEffect(() => {
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
          <PageButton text="Back" size="short" page={'eligible'} />
          <PageButton text="Next" size="short" page={'eligible'} />
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
