import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { MiniCourseCard, PageButton, AutoDropdown } from '../components';
import { setCourses } from '../actions/actions';

const useStyles = (marginTop) =>
  makeStyles((theme) => ({
    layout: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100vw',
      height: 'auto',
      backgroundColor: theme.color.background,
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100rem',
      height: '9.4rem',
      marginTop: '20.4rem',
      marginBottom: '12.4rem',
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

    courseCardWrapper: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: `${marginTop}rem`,
      marginBottom: '6rem',
      width: '87.6rem',
      font: theme.font.button,
    },

    courseCardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      marginTop: '3rem',
    },

    pageButtonWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '99rem',
      justifyContent: 'space-between',
    }
  }));

function EnterCourses({ storeCoursesTaken, setCourses }) {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [numRows, setNumRows] = useState(0);
  const [lengthOfSelectedCourses, setLengthOfSelectedCourses] = useState(5);
  const [marginTop, setMarginTop] = useState(0);

  const classes = useStyles(marginTop)();

  useEffect(() => {
    setNumRows(parseInt(selectedCourses.length / 4) + 1);
    lengthOfSelectedCourses <= 0
      ? lengthOfSelectedCourses === 0
        ? setMarginTop(35)
        : setMarginTop(lengthOfSelectedCourses * 5 + 10)
      : setMarginTop(35);
  }, [selectedCourses, lengthOfSelectedCourses]);

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <h1 className={classes.title}>What Courses Have You Taken?</h1>
        <span className={classes.subtitle}>One last step....We promise.</span>
      </header>
      <AutoDropdown
        whichPage={"courses"}
        setLengthOfSelectedCourses={setLengthOfSelectedCourses}
        initialSelectedOptions={storeCoursesTaken}
        selectedOptions={selectedCourses}
        setSelectedOptions={setSelectedCourses}
      />
      {/* Logic to display grid of CourseCards based on selections */}
      {selectedCourses.length !== 0 ? (
        <div className={classes.courseCardWrapper}>
          {Array.from(Array(numRows).keys()).map((i) => (
            <div key={i} className={classes.courseCardContainer}>
              {selectedCourses.slice(i * 4, (i + 1) * 4).map((course, idx) => (
                <MiniCourseCard 
                  key={idx} 
                  name={course}
                  selectedCourses={selectedCourses}
                  setSelectedCourses={setSelectedCourses} 
                  canBeDeleted={true}
                />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className={classes.courseCardWrapper}></div>
      )}
      <div className={classes.pageButtonWrapper}>
        <PageButton
          page={"courses"}
          text="Back"
          size="short"
          action={() => {
            setCourses(selectedCourses);
          }}
        />
        <PageButton
          page="courses"
          text="Next"
          size="short"
          action={() => {
            setCourses(selectedCourses);
          }}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    storeCoursesTaken: store.coursesTaken,
  }
};

const mapDispatchToProps = (dispatch) => {
  // Update the store with courses the user has taken
  return {
    setCourses: (newCourses) => dispatch(setCourses(newCourses)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EnterCourses);
