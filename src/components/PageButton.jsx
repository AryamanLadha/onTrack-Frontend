import * as React from "react";
import ButtonUnstyled from "@mui/core/ButtonUnstyled";
import { makeStyles } from "@mui/styles"


const useStyles = makeStyles(theme => ({
  button: {
    width: props => props.size === "short" ? '13.8rem' : '25.5rem',
    height: '7.5rem',
    border: '0rem',
    borderRadius: props => props.size === "short" ? '3.1rem' : '3.75rem',
    backgroundColor: theme.color.button,
    font: theme.font.button,
  }
}));

export default function PageButton({...props}) {
  const classes = useStyles(props);
  return (
    <ButtonUnstyled className={classes.button}>
      {props.text}
    </ButtonUnstyled>
  );
}