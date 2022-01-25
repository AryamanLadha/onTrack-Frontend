import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles (theme => ({
  card: {
    backgroundColor: theme.color.grey,
    width: '17.5rem',
    height: '17.5rem',
    borderRadius: '2.5rem',
    textAlign: 'center',
    lineHeight: '17.5rem',
    font: theme.font.courseCard,
  },

  cardText: {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: '2.346rem',
  },
}));

const CourseCard = ({ name, selectedCourses, setSelectedCourses}) => {
  const classes = useStyles();; 
  const handleClick = () => {
    setSelectedCourses(selectedCourses.filter(element => element !== name));
  }

  return (
    <div className = {classes.card} onClick={handleClick}> 
      <span className={classes.cardText}>{name}</span>
    </div>
  );
}

export default CourseCard;
