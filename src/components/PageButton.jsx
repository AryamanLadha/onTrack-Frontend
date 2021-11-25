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

// button props: text, size, page
export default function PageButton({...props}) {
  const classes = useStyles(props);
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.page === 'major') {
      navigate('/minor')
    } 
    
    else if (props.page === 'minor') {
      props.text === "Back" 
        ? navigate('/major')
        : navigate('/year')
    } 
    
    else if (props.page === 'year') {
      props.text === "Back"
        ? navigate('/minor')
        : navigate('/courses')
    } 

    else if (props.page === 'courses') {
      navigate('/result')
    } 
    else { // props.page === 'result'
      props.text === "Back"
        ? navigate('/courses')
        : navigate('/done')
    }
  };

  return (
    <ButtonUnstyled className={classes.button} onClick={handleClick}>
      {props.text}
    </ButtonUnstyled>
  );
}