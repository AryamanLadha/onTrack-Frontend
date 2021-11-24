import * as React from "react";
import { useNavigate } from "react-router-dom";
import ButtonUnstyled from "@mui/core/ButtonUnstyled";
import { makeStyles } from "@mui/styles"


const useStyles = makeStyles(theme => ({
  button: {
    width: props => props.size === "short" ? '13.8rem' : '25.5rem',
    height: "7.5rem",
    border: "0rem",
    marginBottom: "5rem",
    borderRadius: props => props.size === "short" ? '3.1rem' : '3.75rem',
    backgroundColor: theme.color.grey,
    font: theme.font.button,
  }
}));

export default function PageButton({...props}) {
  const classes = useStyles(props);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/courses');
  };

  return (
    <ButtonUnstyled className={classes.button} onClick={handleClick}>
      {props.text}
    </ButtonUnstyled>
  );
}