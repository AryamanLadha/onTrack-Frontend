import * as React from "react";
import ButtonUnstyled from "@mui/core/ButtonUnstyled";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  button: {
    width: props => props.size === "short" ? 138 : 255,
    height: 75,
    border: 0,
    borderRadius: props => props.size === "short" ? 31 : 37.5,
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