import React from 'react';
import { makeStyles } from '@mui/styles';

//1. makeStyles (theme => : makeStyles is a function that can pass theme as a parameter
//2. use div for materials ui -> doesn't allow you to use parameters

//this is classes and coursecard is a property
const useStyles = makeStyles((theme) => ({
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

const CourseCard = ({ name }) => {
  //if we were using material ui, <ButtonUnstyled instead of div> -> we would have had to also import buttonUnstyled
  const classes = useStyles(); //so we don't need to pass down props (like we don't need its size) BUT IF WE DID useStyles (props);
  return (
    <div className={classes.card}>
      <span className={classes.cardText}>{name}</span>
    </div>
  );
};

export default CourseCard;
