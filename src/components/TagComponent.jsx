import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  tagComponent: {
    display: 'flex, inline-block',
    backgroundColor: theme.color.button,
    height: '5.4rem',
    lineHeight: '5.4rem',
    font: theme.font.subtitle,
    borderRadius: '1.6rem',
    padding: '0rem 2rem',
    marginRight: '1.3rem',
  },
}));

function TagComponent({ major }) {
  const classes = useStyles();

  return <div className={classes.tagComponent}>{major}</div>;
}

export default TagComponent;
