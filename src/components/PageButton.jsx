import * as React from "react";
import ButtonUnstyled from "@mui/core/ButtonUnstyled";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  button: {
    width: 255,
    height: 75,
    border: 0,
    borderRadius: 37.5,
    backgroundColor: theme.color.button,
    font: theme.font.button,
  }
}));

export default function PageButton() {
  const classes = useStyles();
  return (
    <ButtonUnstyled className={classes.button}>
      Next
    </ButtonUnstyled>
  );
}