import React from 'react';
import { makeStyles } from '@mui/styles';

// Styled slightly smaller than regular CourseCard, for use on EligibleCourses page
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.color.skyblue,
    width: '12rem',
    height: '12rem',
    borderRadius: '2rem',
    textAlign: 'center',
    lineHeight: '12rem',
    font: theme.font.miniCourseCard,
    marginRight: '3rem',
  },

  cardText: {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: '2.346rem',
  },
}));

function MiniCourseCard({ name }) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <span className={classes.cardText}>{name}</span>
    </div>
  );
}

export default MiniCourseCard;
