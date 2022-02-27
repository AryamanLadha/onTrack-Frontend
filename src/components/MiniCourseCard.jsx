import React, { useState } from 'react';
import PlusIcon from '../assets/icons/Plus.svg';
import { makeStyles } from '@mui/styles';
import CourseCardX from '../assets/icons/CourseCardCross.svg';

const useStyles = (props) =>
  makeStyles((theme) => ({
    card: {
      backgroundColor: theme.color.skyblue,
      width: '12rem',
      height: '12rem',
      borderRadius: '2rem',
      textAlign: 'center',
      lineHeight: '12rem',
      font: theme.font.miniCourseCard,
      marginRight: props.plusIcon ? '0rem' : '3rem',

      '& .crossContainer': {
        backgroundColor: props.isHovering
          ? 'rgba(40, 49, 62, 0.7)'
          : theme.color.skyblue,
        width: '12rem',
        height: '12rem',
        borderRadius: '2rem',
        opacity: '0.5',
        margin: '0 auto',
        display: 'flex',
        transform: 'translate(0, -100%)',
        flexDirection: 'column',
        justifyContent: 'center',
        top: '0rem',

        '& .crossSymbol': {
          width: '7.5rem',
          height: '7.5rem',
          margin: '0 auto',
        },
      },
    },

    cardText: {
      display: 'inline-block',
      verticalAlign: 'middle',
      lineHeight: '2.346rem',
    },

    icon: {
      margin: 'auto 0',
      width: '4.8rem',
      height: '4.8rem',
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  }));

function MiniCourseCard({
  name,
  quarter,
  subject,
  course,
  overlayOpened,
  setOverlayOpened,
  selectedCourses,
  setSelectedCourses,
  setQuarterOfOverlay,
  canBeDeleted,
  setActiveSubject,
  setDisplayedCourse,
  onEligibleCoursesPage,
}) {
  const [isHovering, setIsHovering] = useState(false);

  const props = {
    plusIcon: name === '' ? true : false,
    isHovering: isHovering,
  };

  const handleClick = (selectedCourses) => {
    !overlayOpened &&
      selectedCourses &&
      setSelectedCourses(selectedCourses.filter((element) => element !== name));
  };

  const handleIconClick = () => {
    setOverlayOpened(!overlayOpened);
    overlayOpened = !overlayOpened;
    overlayOpened && setQuarterOfOverlay(quarter);
  };

  const handleShowCourseInfo = (subject, course) => {
    setActiveSubject(subject);

    setDisplayedCourse(course);

    console.log('course', course);
  };

  const handleMouseEnter = () => {
    canBeDeleted && setIsHovering(true);
  };

  const handleMouseLeave = () => {
    canBeDeleted && setIsHovering(false);
  };

  const classes = useStyles(props)();

  return (
    <div
      className={classes.card}
      onClick={
        onEligibleCoursesPage
          ? () => handleShowCourseInfo(subject, course)
          : () => handleClick(selectedCourses)
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {name === 'plus' ? (
        <img
          className={classes.icon}
          src={PlusIcon}
          alt="addCourses"
          onClick={handleIconClick}
        />
      ) : (
        <>
          <span className={classes.cardText}> {name} </span>
          {isHovering && (
            <div className="crossContainer">
              <img src={CourseCardX} className="crossSymbol" alt="deleteIcon" />
            </div>
          )}
        </>
      )}
    </div>
  );
}

MiniCourseCard.defaultProps = {
  name: 'plus',
  quarter: '',
  selectedCourses: null,
  overlayOpened: false,
  setOverlayOpened: () => {},
  setQuarterOfOverlay: () => {},
  setSelectedCourses: () => {},
  setActiveSubject: () => {},
  setDisplayedCourse: () => {},
  onEligibleCoursesPage: false,
  canBeDeleted: true,
};

export default MiniCourseCard;
